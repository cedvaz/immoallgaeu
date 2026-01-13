import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Allgäu 2025 | Aktuelle Preise & Trends",
  description: "Aktuelle Immobilienpreise im Allgäu. Kaufpreise und Mietpreise für alle wichtigen Städte: Kempten, Kaufbeuren, Memmingen, Oberstdorf und mehr.",
};

const cities = [
  {
    name: "Kempten",
    slug: "kempten",
    avgPrice: "4.200",
    avgRent: "12,50",
    trend: "📈",
    description: "Größte Stadt im Allgäu mit stabilem Immobilienmarkt",
  },
  {
    name: "Kaufbeuren",
    slug: "kaufbeuren",
    avgPrice: "3.800",
    avgRent: "11,20",
    trend: "📈",
    description: "Attraktive Preise und gute Infrastruktur",
  },
  {
    name: "Memmingen",
    slug: "memmingen",
    avgPrice: "3.600",
    avgRent: "10,80",
    trend: "📈",
    description: "Flughafen-Stadt mit wachsendem Markt",
  },
  {
    name: "Oberstdorf",
    slug: "oberstdorf",
    avgPrice: "6.500",
    avgRent: "16,00",
    trend: "🔥",
    description: "Premium-Lage in den Alpen mit Spitzenpreisen",
  },
  {
    name: "Pfronten",
    slug: "pfronten",
    avgPrice: "5.200",
    avgRent: "13,50",
    trend: "📈",
    description: "Beliebter Ferienort mit steigender Nachfrage",
  },
  {
    name: "Sonthofen",
    slug: "sonthofen",
    avgPrice: "4.800",
    avgRent: "12,80",
    trend: "📈",
    description: "Kreisstadt mit vielfältigem Immobilienangebot",
  },
];

export default function ImmobilienpreisePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">Aktuelle Marktdaten 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Immobilienpreise im Allgäu
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Aktuelle Kaufpreise und Mietpreise für alle wichtigen Städte und Gemeinden im Allgäu
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10 text-center">
            Preise nach Städten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/immobilienpreise/${city.slug}`}
                className="card p-8 hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-3xl">{city.trend}</span>
                </div>

                <p className="text-gray-600 mb-6">{city.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Ø Kaufpreis:</span>
                    <span className="text-lg font-bold text-primary-600">{city.avgPrice} €/m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Ø Miete:</span>
                    <span className="text-lg font-bold text-secondary-600">{city.avgRent} €/m²</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Detaillierte Preisanalyse</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
            Immobilienpreise im Allgäu verstehen
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Das Allgäu ist eine der beliebtesten Wohnregionen Süddeutschlands. Die Immobilienpreise variieren stark zwischen den einzelnen Städten und Gemeinden - von bezahlbaren Lagen in kleineren Städten bis zu Premiumpreisen in touristischen Hotspots.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Preisentwicklung</h3>
                <p className="text-gray-700">
                  Die Immobilienpreise im Allgäu zeigen eine stabile Aufwärtsentwicklung. Besonders touristische Orte verzeichnen überdurchschnittliche Steigerungen.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lageunterschiede</h3>
                <p className="text-gray-700">
                  Stadtlagen, Bergdörfer und ländliche Gemeinden unterscheiden sich deutlich im Preisniveau. Die Lage ist der wichtigste Preisfaktor.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Objekttypen</h3>
                <p className="text-gray-700">
                  Von der Eigentumswohnung über Einfamilienhäuser bis zur Ferienwohnung - jeder Immobilientyp hat sein eigenes Preisniveau.
                </p>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kapitalanlage</h3>
                <p className="text-gray-700">
                  Das Allgäu bietet attraktive Renditemöglichkeiten, besonders in touristischen Orten durch Ferienvermietung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Was ist Ihre Immobilie im Allgäu wert?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Erhalten Sie eine kostenlose und unverbindliche Bewertung basierend auf aktuellen Marktdaten.
          </p>
          <Link href="/immobilienbewertung" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 hover:scale-105">
            Jetzt kostenlos bewerten lassen
          </Link>
        </div>
      </section>
    </main>
  );
}
