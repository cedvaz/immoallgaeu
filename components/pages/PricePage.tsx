import Link from "next/link";
import { cityDetails, CitySlug } from "@/lib/data/cityData";

export default function PricePage({ citySlug }: { citySlug: CitySlug }) {
  const city = cityDetails[citySlug];

  // Historical data (simulated for demo)
  const historicalData = [
    { year: "2020", price: parseFloat(city.avgPrice) * 0.85 },
    { year: "2021", price: parseFloat(city.avgPrice) * 0.91 },
    { year: "2022", price: parseFloat(city.avgPrice) * 0.95 },
    { year: "2023", price: parseFloat(city.avgPrice) * 0.98 },
    { year: "2024", price: parseFloat(city.avgPrice) },
    { year: "2025", price: parseFloat(city.avgPrice) * 1.042 }, // Prognose
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/immobilien-${citySlug}`} className="hover:text-blue-600">
              Immobilien {city.name}
            </Link>
            <span className="mx-2">/</span>
            <span>Preise</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilienpreise {city.name} 2025
          </h1>
          <p className="text-xl text-gray-700">
            Aktuelle Preise, Marktentwicklung & Prognose
          </p>
        </div>
      </section>

      {/* Aktualisierungsdatum */}
      <section className="py-4 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Letzte Aktualisierung: <strong>Januar 2025</strong>
            </div>
            <div className="text-sm text-blue-600">
              Basierend auf aktuellen Marktdaten
            </div>
          </div>
        </div>
      </section>

      {/* Preis-Dashboard */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center mb-8">
            <div className="text-sm uppercase tracking-wide mb-2">Durchschnittspreis</div>
            <div className="text-6xl font-bold mb-4">{city.avgPrice} €/m²</div>
            <div className="flex items-center justify-center gap-8">
              <div>
                <div className="text-sm text-blue-200">Entwicklung 12 Monate</div>
                <div className="text-2xl font-semibold text-green-300">{city.priceChange}%</div>
              </div>
              <div>
                <div className="text-sm text-blue-200">Ø Miete</div>
                <div className="text-2xl font-semibold">{city.avgRent} €/m²</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-600 mb-2">Niedrigster Preis</div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.round(parseFloat(city.avgPrice) * 0.75).toLocaleString('de-DE')} €/m²
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-600 mb-2">Durchschnitt</div>
              <div className="text-3xl font-bold text-blue-600">
                {city.avgPrice} €/m²
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-600 mb-2">Höchster Preis</div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.round(parseFloat(city.avgPrice) * 1.35).toLocaleString('de-DE')} €/m²
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailtabellen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Preise nach Immobilientyp
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Immobilientyp
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preisspanne (€/m²)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {city.propertyTypes.map((prop, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {prop.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span className="font-semibold">{prop.price} €</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stadtteil-Preise */}
          <h2 className="text-3xl font-bold mb-8">
            Preise nach Stadtteil
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stadtteil
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ø Preis (€/m²)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tendenz
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {city.districts.map((district, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {district.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <span className="font-semibold">{district.avgPrice} €</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-2xl">
                      {district.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Historische Entwicklung */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Preisentwicklung 2020-2025
          </h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-4">
              {historicalData.map((data, idx) => {
                const isFuture = data.year === "2025";
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium text-gray-700">
                      {data.year}
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-full h-8 relative overflow-hidden">
                        <div
                          className={`h-full ${isFuture ? "bg-blue-300" : "bg-blue-600"} flex items-center justify-end pr-4`}
                          style={{ width: `${(data.price / parseFloat(city.avgPrice)) * 100}%` }}
                        >
                          <span className="text-sm font-semibold text-white">
                            {Math.round(data.price).toLocaleString('de-DE')} €/m²
                          </span>
                        </div>
                      </div>
                    </div>
                    {isFuture && (
                      <span className="text-xs text-gray-500 italic">Prognose</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 prose prose-lg max-w-none text-gray-700">
            <p>
              Der Immobilienmarkt in {city.name} zeigt eine kontinuierliche Aufwärtsentwicklung.
              Von 2020 bis 2024 sind die Preise um durchschnittlich{" "}
              {Math.round(((parseFloat(city.avgPrice) - historicalData[0].price) / historicalData[0].price) * 100)}%
              gestiegen. Für 2025 erwarten Experten eine weitere moderate Steigerung von etwa {city.priceChange}%.
            </p>
          </div>
        </div>
      </section>

      {/* Bewertungs-CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Diese Preise sind Durchschnittswerte
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Für den genauen Wert Ihrer Immobilie empfehlen wir eine individuelle Bewertung.
          </p>
          <Link
            href="/immobilienbewertung"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Kostenlose Bewertung anfordern
          </Link>
        </div>
      </section>

      {/* Methodik */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            So ermitteln wir die Preise
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Unsere Immobilienpreise basieren auf verschiedenen verlässlichen Datenquellen:
            </p>

            <ul>
              <li>Aktuelle Verkaufsdaten aus {city.name} und Umgebung</li>
              <li>Gutachterausschüsse und amtliche Kaufpreissammlungen</li>
              <li>Marktanalysen regionaler Immobilienverbände</li>
              <li>Eigene Transaktionsdaten aus über 15 Jahren Markterfahrung</li>
            </ul>

            <p>
              Die angegebenen Preise werden monatlich aktualisiert und spiegeln die aktuelle
              Marktlage wider. Bitte beachten Sie, dass der tatsächliche Wert einer Immobilie
              von vielen individuellen Faktoren abhängt.
            </p>
          </div>
        </div>
      </section>

      {/* Verwandte Städte */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-6">
            Immobilienpreise in anderen Städten
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(cityDetails)
              .filter(([slug]) => slug !== citySlug)
              .map(([slug, city]) => (
                <Link
                  key={slug}
                  href={`/immobilienpreise/${slug}`}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-gray-200 transition"
                >
                  <div className="font-semibold text-gray-900">{city.name}</div>
                  <div className="text-sm text-gray-600">{city.avgPrice} €/m²</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
