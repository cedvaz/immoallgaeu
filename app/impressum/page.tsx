import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – ImmoAllgäu",
  description: "Impressum und Kontaktdaten von ImmoAllgäu",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Impressum
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparenz und rechtliche Informationen zu ImmoAllgäu.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Operator Card */}
            <div className="card p-8 bg-white hover:shadow-hard transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1 text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-900">Cedric Vazquez Boo</p>
                <p>Am Frickenland 4</p>
                <p>87437 Kempten</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="card p-8 bg-white hover:shadow-hard transition-all duration-300">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h2>
              <div className="space-y-3">
                <span className="font-medium text-gray-900">Web:</span>
                <a href="https://www.immoallgaeu.com" className="hover:text-primary-600 transition-colors">www.immoallgaeu.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="font-medium text-gray-900">E-Mail:</span>
                <a href="mailto:info@immoallgaeu.com" className="hover:text-primary-600 transition-colors">info@immoallgaeu.com</a>
              </div>
            </div>
          </div>

          {/* Legal Card */}
          <div className="card p-8 bg-white hover:shadow-hard transition-all duration-300">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Register & Steuer</h2>
            <div className="space-y-1 text-gray-600 leading-relaxed">
              <p><span className="font-medium text-gray-900">Umsatzsteuer-ID:</span> UG in Gründung</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mt-0">Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>

          <h2 className="text-xl font-bold text-gray-900">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>

          <h2 className="text-xl font-bold text-gray-900">Verbraucher­streit­beilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
            <p>Stand: Januar 2026</p>
            <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">e-recht24.de</a></p>
          </div>
        </div>
      </section>
    </main >
  );
}
