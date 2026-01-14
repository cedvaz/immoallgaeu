import Link from "next/link";

export default function DataSources() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Unsere Datengrundlage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent & nachvollziehbar: Diese Daten fließen in unsere Bewertung ein
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Data Sources */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Datenquellen</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">BORIS-D Bodenrichtwerte</h4>
                  <p className="text-sm text-gray-600">
                    Offizielle Grundstückswerte von staatlichen Gutachterausschüssen (Open Data)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Öffentlich verfügbare Angebotspreise</h4>
                  <p className="text-sm text-gray-600">
                    Analyse aktueller Immobilienanzeigen aus dem Allgäu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Statistische Marktauswertungen</h4>
                  <p className="text-sm text-gray-600">
                    Historische Preisentwicklungen und Markttrends (24+ Monate)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Regionalspezifische Faktoren</h4>
                  <p className="text-sm text-gray-600">
                    Allgäu-spezifisches Wissen über Lage, Infrastruktur & Nachfrage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Update Frequency */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Aktualisierung</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">BORIS-D Bodenrichtwerte</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                    Jährlich
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Offizielle Aktualisierung durch Gutachterausschüsse
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Marktdaten Analyse</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-semibold rounded-full">
                    Monatlich
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Regelmäßige Analyse aktueller Angebotspreise
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Algorithmus</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full">
                    Kontinuierlich
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Laufende Verbesserung durch Feedback und neue Daten
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg border border-primary-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-900">Commitment zur Transparenz</span>
              </div>
              <p className="text-sm text-gray-700">
                Wir verpflichten uns, unsere Datenquellen und Methodik offen zu kommunizieren und kontinuierlich zu verbessern.
              </p>
            </div>
          </div>
        </div>

        {/* Data Volume Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-bold text-primary-600 mb-2">10.000+</div>
            <div className="text-sm font-medium text-gray-600">Datenpunkte analysiert</div>
          </div>
          <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-bold text-secondary-600 mb-2">6</div>
            <div className="text-sm font-medium text-gray-600">Allgäu-Städte abgedeckt</div>
          </div>
          <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-bold text-accent-600 mb-2">24+</div>
            <div className="text-sm font-medium text-gray-600">Monate historische Daten</div>
          </div>
          <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-sm font-medium text-gray-600">Kostenlos & transparent</div>
          </div>
        </div>

        {/* CTA - Make more prominent */}
        <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Volle Transparenz</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Wie funktioniert unsere Bewertung?
            </h3>

            <p className="text-gray-600 mb-6">
              Verstehen Sie genau, wie wir Ihre Immobilie bewerten. Wir legen unsere Methodik, Datenquellen und Algorithmen vollständig offen.
            </p>

            <Link
              href="/methodik"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-bold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-medium hover:shadow-hard hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Detaillierte Methodik ansehen</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
