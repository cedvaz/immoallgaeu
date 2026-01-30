"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cityDetails } from "@/lib/data/cityData";

type PropertyType = "wohnung" | "haus" | "grundstueck" | "gewerbe" | "";
type Condition = "neuwertig" | "gepflegt" | "renovierungsbeduerftig" | "sanierungsbeduerftig" | "";
type LandUse = "bauland" | "ackerland" | "wiese" | "wald" | "gewerbegebiet" | "";
type BusinessType = "buero" | "einzelhandel" | "gastgewerbe" | "produktion" | "lager" | "andere" | "";

export default function ValuationFormMultiStep() {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [data, setData] = useState({
    propertyType: "" as PropertyType,
    plz: "",
    city: "",
    livingSpace: "",
    landArea: "",
    buildYear: "",
    rooms: "",
    condition: "" as Condition,
    // Additional fields for land
    landUse: "" as LandUse,
    developmentStatus: "",
    // Additional fields for commercial
    businessType: "" as BusinessType,
    annualRent: "",
    commercialSpace: "",
    email: "",
    name: "",
    phone: "",
    contact: false,
  });

  const [estimatedValue, setEstimatedValue] = useState({ min: 0, max: 0 });

  // Function to calculate estimated value based on real market data
  const calculateEstimatedValue = () => {
    if (!data.city || !data.propertyType) {
      return { min: 0, max: 0 };
    }

    // Get city data
    const cityKey = Object.keys(cityDetails).find(key =>
      cityDetails[key as keyof typeof cityDetails].name.toLowerCase() === data.city.toLowerCase()
    );

    let cityData = cityDetails.kempten; // Default fallback
    if (cityKey) {
      cityData = cityDetails[cityKey as keyof typeof cityDetails];
    }

    // Base price calculation based on property type and city
    let basePrice = 0;

    if (data.propertyType === "wohnung") {
      const livingSpace = parseFloat(data.livingSpace) || 0;
      if (livingSpace <= 50) {
        // Small apartment
        const priceRange = cityData.propertyTypes.find(pt => pt.type.includes("30-50m²"));
        if (priceRange) {
          const prices = priceRange.price.split(" - ").map(p => parseFloat(p.replace(".", "").replace(",", ".")));
          basePrice = ((prices[0] + prices[1]) / 2) * livingSpace;
        } else {
          basePrice = parseFloat(cityData.avgPrice.replace(".", "").replace(",", ".")) * livingSpace;
        }
      } else if (livingSpace <= 80) {
        // Medium apartment
        const priceRange = cityData.propertyTypes.find(pt => pt.type.includes("50-80m²"));
        if (priceRange) {
          const prices = priceRange.price.split(" - ").map(p => parseFloat(p.replace(".", "").replace(",", ".")));
          basePrice = ((prices[0] + prices[1]) / 2) * livingSpace;
        } else {
          basePrice = (parseFloat(cityData.avgPrice.replace(".", "").replace(",", ".")) + 200) * livingSpace;
        }
      } else {
        // Large apartment
        const priceRange = cityData.propertyTypes.find(pt => pt.type.includes("80-120m²"));
        if (priceRange) {
          const prices = priceRange.price.split(" - ").map(p => parseFloat(p.replace(".", "").replace(",", ".")));
          basePrice = ((prices[0] + prices[1]) / 2) * livingSpace;
        } else {
          basePrice = (parseFloat(cityData.avgPrice.replace(".", "").replace(",", ".")) + 400) * livingSpace;
        }
      }
    } else if (data.propertyType === "haus") {
      const livingSpace = parseFloat(data.livingSpace) || 0;
      const houseType = cityData.propertyTypes.find(pt => pt.type.includes("Einfamilienhaus"));
      if (houseType) {
        const prices = houseType.price.split(" - ").map(p => parseFloat(p.replace(".", "").replace(",", ".")));
        basePrice = ((prices[0] + prices[1]) / 2) * livingSpace;
      } else {
        basePrice = (parseFloat(cityData.avgPrice.replace(".", "").replace(",", ".")) + 500) * livingSpace;
      }
    } else if (data.propertyType === "grundstueck") {
      const landArea = parseFloat(data.landArea) || 0;
      let pricePerSqm = 200; // Default for land

      // Adjust based on land use
      switch (data.landUse) {
        case "bauland":
          pricePerSqm = 300;
          break;
        case "gewerbegebiet":
          pricePerSqm = 250;
          break;
        case "wiese":
        case "ackerland":
          pricePerSqm = 50;
          break;
        case "wald":
          pricePerSqm = 30;
          break;
      }

      // Adjust based on development status
      if (data.developmentStatus === "bebaut") {
        pricePerSqm *= 1.5;
      } else if (data.developmentStatus === "erschlossen") {
        pricePerSqm *= 1.2;
      }

      basePrice = pricePerSqm * landArea;
    } else if (data.propertyType === "gewerbe") {
      const commercialSpace = parseFloat(data.commercialSpace) || 0;
      const annualRent = parseFloat(data.annualRent) || 0;

      let pricePerSqm = 2000; // Default commercial price

      // Adjust based on business type
      switch (data.businessType) {
        case "buero":
          pricePerSqm = 2500;
          break;
        case "einzelhandel":
          pricePerSqm = 3500;
          break;
        case "gastgewerbe":
          pricePerSqm = 3000;
          break;
        case "produktion":
          pricePerSqm = 1500;
          break;
        case "lager":
          pricePerSqm = 1200;
          break;
      }

      // If rent information is provided, use yield-based valuation
      if (annualRent > 0) {
        const yieldRate = 0.05; // 5% yield for commercial properties
        basePrice = annualRent / yieldRate;
      } else {
        basePrice = pricePerSqm * commercialSpace;
      }
    }

    // Calculate base price
    const space = data.propertyType === "grundstueck"
      ? parseFloat(data.landArea) || 0
      : parseFloat(data.livingSpace) || 0;

    let basePrice = basePricePerSqm * space;

    // Adjust for build year (newer is better)
    const currentYear = new Date().getFullYear();
    const buildYear = parseInt(data.buildYear) || currentYear;
    const age = currentYear - buildYear;

    if (age > 50) {
      basePrice *= 0.7; // Very old buildings
    } else if (age > 30) {
      basePrice *= 0.8; // Old buildings
    } else if (age > 15) {
      basePrice *= 0.9; // Medium age
    } else if (age < 5) {
      basePrice *= 1.1; // New buildings
    }

    // Adjust for condition
    switch (data.condition) {
      case "neuwertig":
        basePrice *= 1.1;
        break;
      case "gepflegt":
        basePrice *= 1.0;
        break;
      case "renovierungsbeduerftig":
        basePrice *= 0.8;
        break;
      case "sanierungsbeduerftig":
        basePrice *= 0.6;
        break;
    }

    // Adjust for number of rooms (more rooms = higher value, but diminishing returns)
    const rooms = parseInt(data.rooms) || 1;
    const roomFactor = 1 + (rooms - 1) * 0.1; // 10% per additional room
    basePrice *= Math.min(roomFactor, 2.0); // Cap at 200%

    // Add some realistic variance (±20%)
    const min = Math.round(basePrice * 0.8);
    const max = Math.round(basePrice * 1.2);

    return { min, max };
  };

  // Recalculate value whenever step 4 is reached and calculation is complete
  useEffect(() => {
    if (step === 4 && !isCalculating) {
      const newValue = calculateEstimatedValue();
      setEstimatedValue(newValue);
    }
  }, [step, isCalculating, data]);

  const handleNext = () => {
    if (step === 3) {
      // Start calculation animation when moving to step 4
      setIsCalculating(true);
      setStep(step + 1);

      // Complete calculation after 3 seconds
      setTimeout(() => {
        setIsCalculating(false);
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setIsCalculating(false); // Reset calculation state when going back
  };

  const progress = (step / 6) * 100;

  if (step === 6) {
    // Thank you page
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Vielen Dank, {data.name}!</h2>
        <p className="text-xl text-gray-700 mb-8">
          Ihre Bewertungsanfrage wurde erfolgreich übermittelt.
        </p>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-lg mb-4">
            Wir melden uns innerhalb von <strong>24 Stunden</strong> bei Ihnen mit einer detaillierten Bewertung.
          </p>
          <p className="text-gray-700">
            Bereits <strong>500+</strong> Eigentümer haben unseren Service genutzt.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Schritt {step} von 5</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1: Property Type */}
      {step === 1 && (
        <div>
          <h2 className="text-3xl font-bold mb-6">Welche Art von Immobilie möchten Sie bewerten?</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "wohnung", label: "Wohnung", icon: "🏢" },
              { value: "haus", label: "Haus", icon: "🏠" },
              { value: "grundstueck", label: "Grundstück", icon: "🏞️" },
              { value: "gewerbe", label: "Gewerbe", icon: "🏭" },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => {
                  setData({ ...data, propertyType: type.value as PropertyType });
                  handleNext();
                }}
                className={`p-6 rounded-lg border-2 transition ${
                  data.propertyType === type.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="text-4xl mb-2">{type.icon}</div>
                <div className="font-semibold">{type.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Location */}
      {step === 2 && (
        <div>
          <h2 className="text-3xl font-bold mb-6">Wo befindet sich Ihre Immobilie?</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postleitzahl *
              </label>
              <input
                type="text"
                value={data.plz}
                onChange={(e) => setData({ ...data, plz: e.target.value })}
                placeholder="z.B. 87435"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ort *
              </label>
              <input
                type="text"
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                placeholder="z.B. Kempten"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              onClick={handleNext}
              disabled={!data.plz || !data.city}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Details */}
      {step === 3 && (
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {data.propertyType === "wohnung" && "Details zu Ihrer Wohnung"}
            {data.propertyType === "haus" && "Details zu Ihrem Haus"}
            {data.propertyType === "grundstueck" && "Details zu Ihrem Grundstück"}
            {data.propertyType === "gewerbe" && "Details zu Ihrer Gewerbeimmobilie"}
          </h2>
          <div className="space-y-6">

            {/* Wohnung */}
            {data.propertyType === "wohnung" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wohnfläche (m²) *
                  </label>
                  <input
                    type="number"
                    value={data.livingSpace}
                    onChange={(e) => setData({ ...data, livingSpace: e.target.value })}
                    placeholder="z.B. 85"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Baujahr *
                    </label>
                    <input
                      type="number"
                      value={data.buildYear}
                      onChange={(e) => setData({ ...data, buildYear: e.target.value })}
                      placeholder="z.B. 1995"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anzahl Zimmer *
                    </label>
                    <input
                      type="number"
                      value={data.rooms}
                      onChange={(e) => setData({ ...data, rooms: e.target.value })}
                      placeholder="z.B. 3"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zustand *
                  </label>
                  <select
                    value={data.condition}
                    onChange={(e) => setData({ ...data, condition: e.target.value as Condition })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="neuwertig">Neuwertig</option>
                    <option value="gepflegt">Gepflegt</option>
                    <option value="renovierungsbeduerftig">Renovierungsbedürftig</option>
                    <option value="sanierungsbeduerftig">Sanierungsbedürftig</option>
                  </select>
                </div>
              </div>
            )}

            {/* Haus */}
            {data.propertyType === "haus" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wohnfläche (m²) *
                    </label>
                    <input
                      type="number"
                      value={data.livingSpace}
                      onChange={(e) => setData({ ...data, livingSpace: e.target.value })}
                      placeholder="z.B. 150"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Grundstücksfläche (m²) *
                    </label>
                    <input
                      type="number"
                      value={data.landArea}
                      onChange={(e) => setData({ ...data, landArea: e.target.value })}
                      placeholder="z.B. 600"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Baujahr *
                    </label>
                    <input
                      type="number"
                      value={data.buildYear}
                      onChange={(e) => setData({ ...data, buildYear: e.target.value })}
                      placeholder="z.B. 1985"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anzahl Zimmer *
                    </label>
                    <input
                      type="number"
                      value={data.rooms}
                      onChange={(e) => setData({ ...data, rooms: e.target.value })}
                      placeholder="z.B. 5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zustand *
                  </label>
                  <select
                    value={data.condition}
                    onChange={(e) => setData({ ...data, condition: e.target.value as Condition })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="neuwertig">Neuwertig</option>
                    <option value="gepflegt">Gepflegt</option>
                    <option value="renovierungsbeduerftig">Renovierungsbedürftig</option>
                    <option value="sanierungsbeduerftig">Sanierungsbedürftig</option>
                  </select>
                </div>
              </div>
            )}

            {/* Grundstück */}
            {data.propertyType === "grundstueck" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grundstücksfläche (m²) *
                  </label>
                  <input
                    type="number"
                    value={data.landArea}
                    onChange={(e) => setData({ ...data, landArea: e.target.value })}
                    placeholder="z.B. 1000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nutzungsart *
                  </label>
                  <select
                    value={data.landUse}
                    onChange={(e) => setData({ ...data, landUse: e.target.value as LandUse })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="bauland">Bauland</option>
                    <option value="gewerbegebiet">Gewerbegebiet</option>
                    <option value="wiese">Wiese/Weide</option>
                    <option value="ackerland">Ackerland</option>
                    <option value="wald">Wald</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Erschließungsstatus
                  </label>
                  <select
                    value={data.developmentStatus}
                    onChange={(e) => setData({ ...data, developmentStatus: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="vollerschlossen">Voll erschlossen (Wasser, Strom, Straße)</option>
                    <option value="teilerschlossen">Teilweise erschlossen</option>
                    <option value="unerschlossen">Nicht erschlossen</option>
                    <option value="bebaut">Bereits bebaut</option>
                  </select>
                </div>
              </div>
            )}

            {/* Gewerbe */}
            {data.propertyType === "gewerbe" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nutzfläche (m²) *
                    </label>
                    <input
                      type="number"
                      value={data.commercialSpace}
                      onChange={(e) => setData({ ...data, commercialSpace: e.target.value })}
                      placeholder="z.B. 200"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jahresmieteinnahmen (€)
                    </label>
                    <input
                      type="number"
                      value={data.annualRent}
                      onChange={(e) => setData({ ...data, annualRent: e.target.value })}
                      placeholder="z.B. 24000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Optional - für genauere Bewertung</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gewerbeart *
                  </label>
                  <select
                    value={data.businessType}
                    onChange={(e) => setData({ ...data, businessType: e.target.value as BusinessType })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="buero">Büro</option>
                    <option value="einzelhandel">Einzelhandel</option>
                    <option value="gastgewerbe">Gastgewerbe</option>
                    <option value="produktion">Produktion</option>
                    <option value="lager">Lager</option>
                    <option value="andere">Andere</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Baujahr
                  </label>
                  <input
                    type="number"
                    value={data.buildYear}
                    onChange={(e) => setData({ ...data, buildYear: e.target.value })}
                    placeholder="z.B. 2005"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              onClick={handleNext}
              disabled={
                (data.propertyType === "wohnung" && (!data.livingSpace || !data.buildYear || !data.rooms || !data.condition)) ||
                (data.propertyType === "haus" && (!data.livingSpace || !data.landArea || !data.buildYear || !data.rooms || !data.condition)) ||
                (data.propertyType === "grundstueck" && (!data.landArea || !data.landUse)) ||
                (data.propertyType === "gewerbe" && (!data.commercialSpace || !data.businessType))
              }
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Result Teaser */}
      {step === 4 && (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isCalculating ? "Berechne Ihre Preisspanne..." : "Ihre geschätzte Preisspanne"}
          </h2>

          {isCalculating ? (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
              <div className="flex flex-col items-center space-y-6">
                {/* Animated Spinner */}
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full max-w-xs">
                  <div className="bg-blue-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full animate-pulse" style={{
                      animation: 'progress 3s ease-out forwards'
                    }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Analysiere Marktdaten...</p>
                </div>

                {/* Animated dots */}
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                Wir analysieren aktuelle Marktdaten und vergleichen mit ähnlichen Immobilien in {data.city}
              </p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8 animate-fade-in">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {estimatedValue.min.toLocaleString('de-DE')} € - {estimatedValue.max.toLocaleString('de-DE')} €
              </div>
              <p className="text-gray-700">
                Basierend auf aktuellen Marktdaten für {data.city}
              </p>
            </div>
          )}

          <p className="text-lg text-gray-700 mb-8">
            Für eine <strong>detaillierte und präzise Bewertung</strong> benötigen wir noch Ihre Kontaktdaten.
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              disabled={isCalculating}
            >
              Zurück
            </button>
            <button
              onClick={handleNext}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={isCalculating}
            >
              {isCalculating ? "Berechne..." : "Detaillierte Bewertung erhalten"}
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Lead Capture */}
      {step === 5 && (
        <div>
          <h2 className="text-3xl font-bold mb-6">Fast geschafft!</h2>
          <p className="text-gray-700 mb-6">
            Wir senden Ihnen die detaillierte Bewertung per E-Mail zu.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="ihre@email.de"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vor- und Nachname *
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Max Mustermann"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefon (optional, für Rückfragen)
              </label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                placeholder="+49 123 456789"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                checked={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.checked })}
                className="mt-1 mr-3"
              />
              <label className="text-sm text-gray-700">
                Ich möchte kontaktiert werden, um ein persönliches Beratungsgespräch zu vereinbaren.
              </label>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              onClick={handleNext}
              disabled={!data.email || !data.name}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Bewertung anfordern
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </div>
      )}
    </div>
  );
}
