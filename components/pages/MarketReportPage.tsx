"use client";

import Link from "next/link";
import { cityDetails, type CitySlug } from "@/lib/data/cityData";
import {
  kemptenHistoricalData,
  kemptenForecastData,
  kemptenCombinedData,
  kemptenInvestmentExample,
} from "@/lib/data/marketReportData";
import PriceLineChart from "@/components/charts/PriceLineChart";
import DistrictBarChart from "@/components/charts/DistrictBarChart";
import PropertyTypeChart from "@/components/charts/PropertyTypeChart";
import InvestmentYieldCard from "@/components/charts/InvestmentYieldCard";
import Newsletter from "@/components/sections/Newsletter";

interface MarketReportPageProps {
  citySlug: CitySlug;
}

export default function MarketReportPage({ citySlug }: MarketReportPageProps) {
  const city = cityDetails[citySlug];

  // Calculate key metrics
  const currentPrice = parseFloat(city.avgPrice.replace(".", ""));
  const priceChange = parseFloat(city.priceChange);
  const yearOverYearGrowth = ((currentPrice - 3570) / 3570) * 100; // vs. 2020

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero / Executive Summary */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/marktreport"
                className="hover:text-white transition-colors"
              >
                Marktreport
              </Link>
              <span>/</span>
              <span className="text-white font-semibold">{city.name}</span>
            </nav>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Kempten Immobilienmarkt</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Marktreport {city.name} 2025/2026
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12">
              Datenbasierte Analyse der Immobilienpreisentwicklung in Kempten:
              Historische Trends, aktuelle Marktlage und Prognosen bis 2027
            </p>

            {/* Key Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {city.avgPrice} €/m²
                </div>
                <div className="text-sm text-white/80">
                  Aktueller Durchschnitt
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {city.priceChange}
                </div>
                <div className="text-sm text-white/80">
                  Jährliche Veränderung
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {yearOverYearGrowth.toFixed(1)}%
                </div>
                <div className="text-sm text-white/80">Wachstum seit 2020</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {city.districts.length}
                </div>
                <div className="text-sm text-white/80">Stadtteile analysiert</div>
              </div>
            </div>
          </div>

          {/* Update info */}
          <div className="text-center text-white/70 text-sm">
            <p>
              Letzte Aktualisierung: Januar 2025 • Datenquellen: BORIS-D,
              Marktanalyse
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Historical Analysis (2020-2025) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 rounded-full text-secondary-700 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>Historische Entwicklung</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Preisentwicklung 2020 - 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wie haben sich die Immobilienpreise in Kempten in den letzten 5
              Jahren entwickelt? Analyse der wichtigsten Trends und Treiber.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="card p-8">
                <PriceLineChart
                  data={kemptenHistoricalData}
                  title="Durchschnittspreis pro m² (2020-2025)"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    ↑
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Starkes Wachstum
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Von 3.570 €/m² (2020) auf {city.avgPrice} €/m² (2025) -
                  entspricht einem Gesamtwachstum von{" "}
                  <strong>{yearOverYearGrowth.toFixed(1)}%</strong> in 5 Jahren.
                </p>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Wichtigste Treiber:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Begrenzte Neubauflächen in Kempten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Hohe Lebensqualität im Allgäu zieht Zuzügler an</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Niedrige Zinsen bis 2022 trieben Nachfrage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Wirtschaftsstarke Region mit stabilem Arbeitsmarkt</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-amber-50 border border-amber-200">
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
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="font-semibold">Hinweis:</strong> 2023-2024
                    verlangsamte sich das Wachstum aufgrund gestiegener Zinsen,
                    stabilisiert sich aber 2025 wieder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Current Market - Districts & Property Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Aktuelle Marktlage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Stadtteil- & Objekttyp-Analyse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detaillierter Vergleich der Preisniveaus in verschiedenen
              Stadtteilen und für unterschiedliche Immobilientypen in Kempten.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Districts Chart */}
            <div className="card p-8">
              <DistrictBarChart
                data={city.districts}
                title="Preisniveau nach Stadtteil"
              />
            </div>

            {/* Property Types Chart */}
            <div className="card p-8">
              <PropertyTypeChart
                data={city.propertyTypes}
                title="Preisspannen nach Objekttyp"
              />
            </div>
          </div>

          {/* Market Insights */}
          <div className="mt-12 card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Markt-Insights für Kempten
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {city.marketInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-secondary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Investment Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full text-accent-700 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Investment-Perspektive</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Renditeberechnung für Kempten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wie attraktiv ist Kempten für Kapitalanleger? Beispielrechnung für
              eine typische Eigentumswohnung mit aktuellen Marktdaten.
            </p>
          </div>

          <div className="mb-12">
            <InvestmentYieldCard
              data={kemptenInvestmentExample}
              title="Beispiel-Investment: 80m² Eigentumswohnung"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 bg-gradient-to-br from-secondary-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👍 Vorteile für Investoren
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Stabile Nachfrage:</strong> Kempten als
                    Wirtschaftszentrum mit konstanter Mieternachfrage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Wertsteigerungspotenzial:</strong> Historisch{" "}
                    {yearOverYearGrowth.toFixed(1)}% Wachstum in 5 Jahren
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Attraktive Lage:</strong> Allgäu-Nähe, gute
                    Infrastruktur, hohe Lebensqualität
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Niedrige Leerstandsrate:</strong> Geringe Vakanz dank
                    hoher Nachfrage
                  </span>
                </li>
              </ul>
            </div>

            <div className="card p-8 bg-gradient-to-br from-amber-50 to-white border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⚠️ Risiken & Überlegungen
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
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
                  <span>
                    <strong>Moderate Rendite:</strong> 2,5% Netto-Rendite ist
                    solide, aber nicht spektakulär
                  </span>
                </li>
                <li className="flex items-start gap-2">
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
                  <span>
                    <strong>Zinssensitivität:</strong> Höhere Finanzierungskosten
                    belasten die Rendite
                  </span>
                </li>
                <li className="flex items-start gap-2">
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
                  <span>
                    <strong>Begrenzte Liquidität:</strong> Immobilien sind
                    langfristige, illiquide Investments
                  </span>
                </li>
                <li className="flex items-start gap-2">
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
                  <span>
                    <strong>Instandhaltung:</strong> Laufende Kosten für Verwaltung
                    und Reparaturen
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/ratgeber/kapitalanlage-immobilien"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-lg transition-colors group"
            >
              <span>Mehr zum Thema Immobilien als Kapitalanlage</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Forecast (2026-2027) */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span>Prognose</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Marktausblick 2026 - 2027
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algorithmusbasierte Preisprognose für Kempten mit quartalsweisen
              Vorhersagen und Konfidenzintervallen. Was können wir für die
              kommenden 2 Jahre erwarten?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="card p-8">
                <PriceLineChart
                  data={kemptenCombinedData}
                  showConfidenceBand={true}
                  title="Preisprognose Q1 2026 - 2027 (mit Konfidenzbereich)"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6 bg-gradient-to-br from-secondary-50 to-white">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quartalsweise Prognosen 2026
                </h3>
                <div className="space-y-3 text-sm">
                  {kemptenForecastData.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-semibold text-gray-700">
                        {item.period}
                      </span>
                      <span className="font-bold text-secondary-600">
                        {item.price.toLocaleString("de-DE")} €/m²
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Langfristprognose 2027
                </h3>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {kemptenForecastData[4].price.toLocaleString("de-DE")} €/m²
                  </div>
                  <div className="text-sm text-gray-600">
                    Spanne: {kemptenForecastData[4].lowerBound.toLocaleString("de-DE")} -{" "}
                    {kemptenForecastData[4].upperBound.toLocaleString("de-DE")} €/m²
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Niedrige Konfidenz (±15%) - Langfristige Entwicklung unterliegt
                  vielen Unsicherheitsfaktoren
                </div>
              </div>

              <div className="card p-6 bg-primary-50 border border-primary-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">
                  Prognose-Basis:
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    <span>
                      Historisches Wachstum von {city.priceChange} p.a.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    <span>Saisonale Marktmuster (Q2 stärker als Q1/Q4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    <span>
                      Annahme: Stabile wirtschaftliche Rahmenbedingungen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    <span>
                      Konfidenz sinkt mit zunehmendem Zeithorizont
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="card p-8 bg-amber-50 border-2 border-amber-300">
            <div className="flex items-start gap-4">
              <svg
                className="w-8 h-8 text-amber-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">
                  Wichtiger Hinweis zur Prognose
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Diese Preisprognose basiert auf historischen Daten,
                  mathematischen Modellen und Marktannahmen. Sie stellt{" "}
                  <strong>keine Garantie</strong> für zukünftige
                  Preisentwicklungen dar. Immobilienmärkte unterliegen vielfältigen
                  Einflüssen wie Zinsentwicklung, Wirtschaftslage, politischen
                  Entscheidungen und regionalen Faktoren.
                </p>
                <p className="text-sm text-gray-600">
                  Typische Abweichung: ±5% (kurzfristig) bis ±15% (langfristig).
                  Für fundierte Investitionsentscheidungen empfehlen wir die
                  Konsultation eines unabhängigen Finanzberaters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter CTA */}
      <Newsletter />

      {/* Section 6: Methodology Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>Transparenz & Methodik</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Wie wurden diese Daten ermittelt?
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Unsere Marktberichte basieren auf öffentlichen Bodenrichtwerten
            (BORIS-D), Analyse von 10.000+ historischen Datenpunkten und
            anerkannten Bewertungsmethoden. Wir legen unsere Quellen und
            Berechnungen vollständig offen.
          </p>

          <Link
            href="/methodik"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-medium hover:shadow-hard hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>Detaillierte Methodik ansehen</span>
          </Link>

          <p className="text-sm text-gray-500 mt-4">
            Vollständige Erläuterung unserer Datenquellen, Algorithmen und
            Genauigkeitsschätzungen
          </p>
        </div>
      </section>
    </main>
  );
}
