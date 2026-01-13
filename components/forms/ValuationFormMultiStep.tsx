"use client";

import { useState } from "react";
import Link from "next/link";

type PropertyType = "wohnung" | "haus" | "grundstueck" | "gewerbe" | "";
type Condition = "neuwertig" | "gepflegt" | "renovierungsbeduerftig" | "sanierungsbeduerftig" | "";

export default function ValuationFormMultiStep() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    propertyType: "" as PropertyType,
    plz: "",
    city: "",
    livingSpace: "",
    landArea: "",
    buildYear: "",
    rooms: "",
    condition: "" as Condition,
    email: "",
    name: "",
    phone: "",
    contact: false,
  });

  const [estimatedValue, setEstimatedValue] = useState({ min: 0, max: 0 });

  const handleNext = () => {
    if (step === 4) {
      // Calculate estimated value
      const basePrice = data.propertyType === "wohnung" ? 4000 : data.propertyType === "haus" ? 5000 : 300;
      const space = parseFloat(data.livingSpace) || parseFloat(data.landArea) || 100;
      const min = Math.round(basePrice * space * 0.9);
      const max = Math.round(basePrice * space * 1.1);
      setEstimatedValue({ min, max });
    }
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

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
          <h2 className="text-3xl font-bold mb-6">Details zu Ihrer Immobilie</h2>
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
                  placeholder="z.B. 85"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {data.propertyType !== "wohnung" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grundstücksfläche (m²)
                  </label>
                  <input
                    type="number"
                    value={data.landArea}
                    onChange={(e) => setData({ ...data, landArea: e.target.value })}
                    placeholder="z.B. 400"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
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

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              onClick={handleNext}
              disabled={!data.livingSpace || !data.buildYear || !data.rooms || !data.condition}
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
          <h2 className="text-3xl font-bold mb-6">Ihre geschätzte Preisspanne</h2>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {estimatedValue.min.toLocaleString('de-DE')} € - {estimatedValue.max.toLocaleString('de-DE')} €
            </div>
            <p className="text-gray-700">
              Basierend auf aktuellen Marktdaten für {data.city}
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Für eine <strong>detaillierte und präzise Bewertung</strong> benötigen wir noch Ihre Kontaktdaten.
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleBack}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Zurück
            </button>
            <button
              onClick={handleNext}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Detaillierte Bewertung erhalten
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
