import Link from "next/link";
import { cityDetails, CitySlug } from "@/lib/data/cityData";

export default function CityPage({ citySlug }: { citySlug: CitySlug }) {
  const city = cityDetails[citySlug];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Immobilien {city.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilien in {city.name}
          </h1>
          <p className="text-xl text-gray-700">
            Kaufen, Verkaufen & Bewerten
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Ø Kaufpreis</div>
              <div className="text-2xl font-bold text-gray-900">{city.avgPrice} €/m²</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Ø Miete</div>
              <div className="text-2xl font-bold text-gray-900">{city.avgRent} €/m²</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Entwicklung (12 Mon.)</div>
              <div className="text-2xl font-bold text-green-600">{city.priceChange}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Einwohner</div>
              <div className="text-2xl font-bold text-gray-900">{city.population}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungs-CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Was ist Ihre Immobilie in {city.name} wert?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Erhalten Sie eine kostenlose und unverbindliche Bewertung von unserem Experten-Team.
          </p>
          <Link
            href="/immobilienbewertung"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Jetzt kostenlos bewerten
          </Link>
        </div>
      </section>

      {/* Marktüberblick */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Der Immobilienmarkt in {city.name} 2025
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">{city.description}</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Aktuelle Marktentwicklung</h3>
            <ul className="space-y-2">
              {city.marketInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Preis-Übersicht */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Aktuelle Immobilienpreise {city.name}
          </h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Immobilientyp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preisspanne (€/m²)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {city.propertyTypes.map((prop, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {prop.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {prop.price} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              href={`/immobilienpreise/${citySlug}`}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Detaillierte Preisanalyse ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Stadtteile */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Immobilien nach Stadtteilen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.districts.map((district, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {district.name}
                  </h3>
                  <span className="text-2xl">{district.trend}</span>
                </div>
                <div className="text-sm text-gray-600">Durchschnittspreis</div>
                <div className="text-xl font-bold text-blue-600">
                  {district.avgPrice} €/m²
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sie möchten in {city.name} verkaufen?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Profitieren Sie von unserer regionalen Expertise und persönlichen Beratung vor Ort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Kostenlose Bewertung
            </Link>
            <Link
              href="/kontakt"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Häufige Fragen zu Immobilien in {city.name}
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Wie entwickeln sich die Immobilienpreise in {city.name}?
              </h3>
              <p className="text-gray-700">
                Die Immobilienpreise in {city.name} zeigen eine stabile Aufwärtsentwicklung mit einer
                durchschnittlichen Steigerung von {city.priceChange}% in den letzten 12 Monaten.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Welche Stadtteile in {city.name} sind am gefragtesten?
              </h3>
              <p className="text-gray-700">
                Die gefragtesten Stadtteile sind {city.districts.slice(0, 3).map(d => d.name).join(", ")} aufgrund ihrer
                Lage und guten Infrastruktur.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Lohnt sich eine Kapitalanlage in {city.name}?
              </h3>
              <p className="text-gray-700">
                Ja, {city.name} bietet gute Perspektiven für Kapitalanleger. {city.marketInsights[0]}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Wie lange dauert es, eine Immobilie in {city.name} zu verkaufen?
              </h3>
              <p className="text-gray-700">
                Die durchschnittliche Vermarktungsdauer liegt bei 2-4 Monaten, abhängig von
                Lage, Zustand und Preis der Immobilie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
