"use client";

import { useState, useEffect } from "react";

interface CalculationResult {
  grunderwerbsteuer: number;
  notarKosten: number;
  maklerProvision: number;
  grundbuchKosten: number;
  gesamtNebenkosten: number;
  gesamtKosten: number;
}

interface CalculatorData {
  kaufpreis: string;
  maklerInklusive: boolean;
  maklerProvision: string;
  region: "bayern" | "andere";
}

export default function SideCostCalculator() {
  const [data, setData] = useState<CalculatorData>({
    kaufpreis: "",
    maklerInklusive: true,
    maklerProvision: "3.57",
    region: "bayern"
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  // Berechnungsfunktion für Nebenkosten
  const calculateSideCosts = (kaufpreis: number, maklerInklusive: boolean, maklerProvisionSatz: number, region: string): CalculationResult => {
    // Grunderwerbsteuer (Bayern: 3,5%)
    const grunderwerbsteuerSatz = region === "bayern" ? 0.035 : 0.05; // Andere Bundesländer meist 5%
    const grunderwerbsteuer = kaufpreis * grunderwerbsteuerSatz;

    // Notarkosten (ca. 1,5% inkl. MwSt., hälftig geteilt = 0,75%)
    const notarKosten = kaufpreis * 0.015;

    // Maklerprovision (individuell einstellbar)
    const maklerProvision = maklerInklusive ? kaufpreis * (maklerProvisionSatz / 100) : 0;

    // Grundbuchkosten (ca. 0,5%, hälftig geteilt = 0,25%)
    const grundbuchKosten = kaufpreis * 0.005;

    const gesamtNebenkosten = grunderwerbsteuer + notarKosten + maklerProvision + grundbuchKosten;
    const gesamtKosten = kaufpreis + gesamtNebenkosten;

    return {
      grunderwerbsteuer: Math.round(grunderwerbsteuer),
      notarKosten: Math.round(notarKosten),
      maklerProvision: Math.round(maklerProvision),
      grundbuchKosten: Math.round(grundbuchKosten),
      gesamtNebenkosten: Math.round(gesamtNebenkosten),
      gesamtKosten: Math.round(gesamtKosten)
    };
  };

  // Automatische Berechnung bei Änderungen
  useEffect(() => {
    const kaufpreis = parseFloat(data.kaufpreis.replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
    const maklerProvisionSatz = parseFloat(data.maklerProvision.replace(',', '.')) || 0;

    if (kaufpreis > 0) {
      const calculation = calculateSideCosts(kaufpreis, data.maklerInklusive, maklerProvisionSatz, data.region);
      setResult(calculation);
    } else {
      setResult(null);
    }
  }, [data]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('de-DE').format(num);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      {/* Eingabebereich */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kaufpreis eingeben</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kaufpreis der Immobilie (€) *
            </label>
            <input
              type="text"
              value={data.kaufpreis}
              onChange={(e) => setData({ ...data, kaufpreis: e.target.value })}
              placeholder="z.B. 350.000"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Bundesland
            </label>
            <select
              value={data.region}
              onChange={(e) => setData({ ...data, region: e.target.value as "bayern" | "andere" })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="bayern">Bayern (3,5% GrESt)</option>
              <option value="andere">Anderes Bundesland (5,0% GrESt)</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="makler"
                checked={data.maklerInklusive}
                onChange={(e) => setData({ ...data, maklerInklusive: e.target.checked })}
                className="mr-3"
              />
              <label htmlFor="makler" className="text-sm font-semibold text-gray-700">
                Maklerprovision einbeziehen
              </label>
            </div>
            {data.maklerInklusive && (
              <div className="ml-6">
                <label className="block text-xs text-gray-600 mb-1">
                  Maklerprovision (%)
                </label>
                <input
                  type="text"
                  value={data.maklerProvision}
                  onChange={(e) => setData({ ...data, maklerProvision: e.target.value })}
                  placeholder="3.57"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Standard in Bayern: 3,57% inkl. MwSt.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ergebnisanzeige */}
      {result && (
        <div className="animate-fade-in">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ihre Nebenkosten</h2>

            {/* Übersicht */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-blue-100 text-sm mb-1">Kaufpreis</div>
                  <div className="text-2xl font-bold">{formatCurrency(parseFloat(data.kaufpreis.replace(/[^\d.,]/g, '').replace(',', '.')) || 0)}</div>
                </div>
                <div>
                  <div className="text-blue-100 text-sm mb-1">Gesamtkosten</div>
                  <div className="text-2xl font-bold">{formatCurrency(result.gesamtKosten)}</div>
                </div>
              </div>
            </div>

            {/* Detaillierte Aufschlüsselung */}
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Grunderwerbsteuer</div>
                  <div className="text-sm text-gray-600">
                    {data.region === "bayern" ? "3,5%" : "5,0%"} des Kaufpreises
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{formatCurrency(result.grunderwerbsteuer)}</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Notarkosten</div>
                  <div className="text-sm text-gray-600">ca. 1,5% des Kaufpreises</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{formatCurrency(result.notarKosten)}</div>
                </div>
              </div>

              {data.maklerInklusive && (
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">Maklerprovision</div>
                    <div className="text-sm text-gray-600">{data.maklerProvision}% inkl. MwSt.</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{formatCurrency(result.maklerProvision)}</div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Grundbuchkosten</div>
                  <div className="text-sm text-gray-600">ca. 0,5% des Kaufpreises</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{formatCurrency(result.grundbuchKosten)}</div>
                </div>
              </div>

              {/* Gesamt Nebenkosten */}
              <div className="flex justify-between items-center p-6 bg-blue-600 text-white rounded-lg">
                <div>
                  <div className="font-bold text-lg">Nebenkosten gesamt</div>
                  <div className="text-blue-100 text-sm">
                    {((result.gesamtNebenkosten / parseFloat(data.kaufpreis.replace(/[^\d.,]/g, '').replace(',', '.'))) * 100).toFixed(1)}% des Kaufpreises
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl">{formatCurrency(result.gesamtNebenkosten)}</div>
                </div>
              </div>
            </div>

            {/* Hinweis */}
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="text-amber-800">
                  <p className="text-sm">
                    <strong>Hinweis:</strong> Dies ist eine Schätzung. Die tatsächlichen Kosten können je nach
                    Einzelfall variieren. Für eine genaue Kalkulation empfehlen wir eine Beratung bei einem Notar oder Immobilienmakler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}