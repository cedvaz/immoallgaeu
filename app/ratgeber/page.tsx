import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Ratgeber Allgäu | Tipps & Guides",
  description: "Umfassender Ratgeber rund um Immobilien im Allgäu. Tipps zum Kauf, Verkauf und zur Kapitalanlage von Immobilien.",
};

const guides = [
  {
    title: "Immobilie erben – Was tun?",
    slug: "immobilie-erben",
    description: "Verkaufen, behalten oder vermieten? Alle Optionen, Steuern & Tipps für Erben. Was tun bei Erbengemeinschaft?",
    icon: "🏛️",
    category: "Erbrecht",
    readTime: "12 Min.",
  },
  {
    title: "Immobilienpreise Allgäu 2025",
    slug: "immobilienpreise-allgaeu-2025",
    description: "Aktuelle Immobilienpreise & Quadratmeterpreise für alle Allgäuer Städte: Kempten, Oberstdorf, Sonthofen & mehr. Mit Prognose & Trends.",
    icon: "📊",
    category: "Marktanalyse",
    readTime: "10 Min.",
  },
  {
    title: "Haus kaufen im Allgäu",
    slug: "haus-kaufen-allgaeu",
    description: "Der komplette Guide zum Hauskauf im Allgäu: Preise, Standorte, Finanzierung und worauf Sie achten sollten.",
    icon: "🏡",
    category: "Kaufen",
    readTime: "15 Min.",
  },
  {
    title: "Immobilie verkaufen",
    slug: "immobilie-verkaufen",
    description: "So verkaufen Sie Ihre Immobilie erfolgreich: Vorbereitung, Preisfindung, Vermarktung und rechtliche Aspekte.",
    icon: "💰",
    category: "Verkaufen",
    readTime: "12 Min.",
  },
  {
    title: "Kapitalanlage Immobilien",
    slug: "kapitalanlage-immobilien",
    description: "Immobilien als Kapitalanlage im Allgäu: Rendite, Risiken, Steuervorteile und die besten Strategien.",
    icon: "📈",
    category: "Investieren",
    readTime: "14 Min.",
  },
];

export default function RatgeberPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span className="text-sm font-semibold">Expertenwissen</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Immobilien Ratgeber
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl">
            Umfassendes Wissen rund um Immobilien im Allgäu - von Experten für Sie zusammengestellt
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10 text-center">
            Unsere Ratgeber-Artikel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/ratgeber/${guide.slug}`}
                className="card p-8 hover:shadow-medium hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6">{guide.icon}</div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {guide.description}
                </p>

                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Artikel lesen</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10 text-center">
            Diese Themen erwarten Sie
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Immobilienkauf</h3>
              <p className="text-gray-600 text-sm">
                Von der Finanzierung bis zur Übergabe
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verkaufstipps</h3>
              <p className="text-gray-600 text-sm">
                Den besten Preis erzielen
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kapitalanlage</h3>
              <p className="text-gray-600 text-sm">
                Rendite und Wertsteigerung
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rechtliches</h3>
              <p className="text-gray-600 text-sm">
                Verträge und Absicherung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Persönliche Beratung gewünscht?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Unsere Experten stehen Ihnen mit individueller Beratung zur Seite.
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
    </main>
  );
}
