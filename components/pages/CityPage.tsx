import Link from "next/link";
import { cityDetails, CitySlug } from "@/lib/data/cityData";

export default function CityPage({ citySlug }: { citySlug: CitySlug }) {
  const city = cityDetails[citySlug];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">Immobilien {city.name}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            Immobilien in {city.name}
          </h1>
          <p className="text-2xl text-gray-600 font-medium">
            Kaufen, Verkaufen & Bewerten
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center p-6 hover:shadow-medium transition-shadow">
              <div className="text-sm font-medium text-gray-600 mb-2">Ø Kaufpreis</div>
              <div className="text-3xl font-bold text-primary-600">{city.avgPrice} €/m²</div>
            </div>
            <div className="card text-center p-6 hover:shadow-medium transition-shadow">
              <div className="text-sm font-medium text-gray-600 mb-2">Ø Miete</div>
              <div className="text-3xl font-bold text-secondary-600">{city.avgRent} €/m²</div>
            </div>
            <div className="card text-center p-6 hover:shadow-medium transition-shadow">
              <div className="text-sm font-medium text-gray-600 mb-2">Entwicklung (12 Mon.)</div>
              <div className="text-3xl font-bold text-green-600">+{city.priceChange}%</div>
            </div>
            <div className="card text-center p-6 hover:shadow-medium transition-shadow">
              <div className="text-sm font-medium text-gray-600 mb-2">Einwohner</div>
              <div className="text-3xl font-bold text-gray-900">{city.population}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungs-CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-6">
            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">Kostenlos & Unverbindlich</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Was ist Ihre Immobilie in {city.name} wert?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Erhalten Sie eine kostenlose und unverbindliche Bewertung von unserem Experten-Team.
          </p>
          <Link href="/immobilienbewertung" className="btn-primary">
            Jetzt kostenlos bewerten
          </Link>
        </div>
      </section>

      {/* Marktüberblick */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
            Der Immobilienmarkt in {city.name} 2025
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{city.description}</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Aktuelle Marktentwicklung</h3>
            <div className="space-y-4">
              {city.marketInsights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preis-Übersicht */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">
            Aktuelle Immobilienpreise {city.name}
          </h2>

          <div className="card overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-primary-50 to-secondary-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Immobilientyp
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wide">
                    Preisspanne (€/m²)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {city.propertyTypes.map((prop, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-base font-semibold text-gray-900">
                      {prop.type}
                    </td>
                    <td className="px-6 py-4 text-base font-bold text-primary-600">
                      {prop.price} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/immobilienpreise/${citySlug}`}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-lg transition-colors group"
            >
              <span>Detaillierte Preisanalyse ansehen</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stadtteile */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">
            Immobilien nach Stadtteilen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.districts.map((district, idx) => (
              <div key={idx} className="card p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {district.name}
                  </h3>
                  <span className="text-3xl">{district.trend}</span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">Durchschnittspreis</div>
                <div className="text-2xl font-bold text-primary-600">
                  {district.avgPrice} €/m²
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Sie möchten in {city.name} verkaufen?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Profitieren Sie von unserer regionalen Expertise und persönlichen Beratung vor Ort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-bold shadow-hard hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Kostenlose Bewertung</span>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Beratung anfragen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">
            Häufige Fragen zu Immobilien in {city.name}
          </h2>

          <div className="space-y-6">
            <div className="card p-8 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Wie entwickeln sich die Immobilienpreise in {city.name}?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Immobilienpreise in {city.name} zeigen eine stabile Aufwärtsentwicklung mit einer
                    durchschnittlichen Steigerung von {city.priceChange}% in den letzten 12 Monaten.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Welche Stadtteile in {city.name} sind am gefragtesten?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die gefragtesten Stadtteile sind {city.districts.slice(0, 3).map(d => d.name).join(", ")} aufgrund ihrer
                    Lage und guten Infrastruktur.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Lohnt sich eine Kapitalanlage in {city.name}?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ja, {city.name} bietet gute Perspektiven für Kapitalanleger. {city.marketInsights[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Wie lange dauert es, eine Immobilie in {city.name} zu verkaufen?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die durchschnittliche Vermarktungsdauer liegt bei 2-4 Monaten, abhängig von
                    Lage, Zustand und Preis der Immobilie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
