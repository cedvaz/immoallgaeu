"use client";

interface InvestmentData {
  purchasePrice: number;
  additionalCosts: number;
  totalInvestment: number;
  monthlyRent: number;
  annualRent: number;
  grossReturn: number;
  netReturn: number;
}

interface InvestmentYieldCardProps {
  data: InvestmentData;
  title?: string;
}

export default function InvestmentYieldCard({
  data,
  title,
}: InvestmentYieldCardProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Investment */}
        <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {data.totalInvestment.toLocaleString("de-DE")} €
          </div>
          <div className="text-sm font-medium text-gray-600 mb-2">
            Gesamt-Investment
          </div>
          <div className="text-xs text-gray-500">
            inkl. {data.additionalCosts.toLocaleString("de-DE")} € Nebenkosten
          </div>
        </div>

        {/* Income */}
        <div className="card p-6 text-center bg-gradient-to-br from-primary-50 to-white hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold text-primary-600 mb-2">
            {data.annualRent.toLocaleString("de-DE")} €
          </div>
          <div className="text-sm font-medium text-gray-600 mb-2">
            Jahreskaltmiete
          </div>
          <div className="text-xs text-gray-500">
            {data.monthlyRent.toLocaleString("de-DE")} € / Monat
          </div>
        </div>

        {/* Gross Return */}
        <div className="card p-6 text-center bg-gradient-to-br from-secondary-50 to-white hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-secondary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold text-secondary-600 mb-2">
            {data.grossReturn.toFixed(1)}%
          </div>
          <div className="text-sm font-medium text-gray-600 mb-2">
            Brutto-Rendite
          </div>
          <div className="text-xs text-gray-500">
            Jahresmieteinnahme / Kaufpreis
          </div>
        </div>

        {/* Net Return */}
        <div className="card p-6 text-center bg-gradient-to-br from-accent-50 to-white hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-accent-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold text-accent-600 mb-2">
            {data.netReturn.toFixed(1)}%
          </div>
          <div className="text-sm font-medium text-gray-600 mb-2">
            Netto-Rendite
          </div>
          <div className="text-xs text-gray-500">
            Nach Verwaltung & Instandhaltung
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm text-gray-700">
            <strong className="font-semibold">Beispielrechnung:</strong> Basis
            ist eine 80m² Wohnung zum Durchschnittspreis von{" "}
            {data.purchasePrice.toLocaleString("de-DE")} € (4.250 €/m²) mit
            Nebenkosten von ca. 8% für Grunderwerbsteuer, Notar und
            Grundbucheintrag. Netto-Rendite nach Abzug von ca. 1% für Verwaltung
            und Instandhaltungsrücklage.
          </div>
        </div>
      </div>
    </div>
  );
}
