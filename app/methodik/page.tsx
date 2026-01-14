import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodik & Datenquellen – Wie wir Immobilien bewerten | ImmoAllgäu",
  description:
    "Vollständige Transparenz über unsere Bewertungsmethodik, Datenquellen (BORIS-D, Marktdaten), Algorithmen und Genauigkeitsschätzungen. Erfahren Sie, wie unsere Immobilienbewertung funktioniert.",
  keywords: [
    "Immobilienbewertung Methodik",
    "BORIS-D Daten",
    "Vergleichswertverfahren",
    "Immobilien Algorithmus",
    "Datenquellen Immobilienbewertung",
  ],
};

export default function MethodikPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <span>Transparenz & Vertrauen</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Methodik & Datenquellen
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Vollständige Transparenz über unsere Bewertungsmethodik,
            Datenquellen und Algorithmen. Verstehen Sie, wie wir Ihre Immobilie
            bewerten.
          </p>
        </div>
      </section>

      {/* Section 1: Datenquellen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Unsere Datenquellen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir nutzen ausschließlich öffentlich zugängliche und offizielle
              Datenquellen für unsere Bewertungen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* BORIS-D */}
            <div className="card p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1. BORIS-D Bodenrichtwerte
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Was ist BORIS-D?</strong>
                  <br />
                  Das Bodenrichtwert-Informationssystem Deutschland (BORIS-D) ist
                  ein Portal der öffentlichen Verwaltung, das offizielle
                  Bodenrichtwerte von staatlichen Gutachterausschüssen
                  bereitstellt.
                </p>
                <p>
                  <strong className="text-gray-900">Warum vertrauenswürdig?</strong>
                  <br />
                  Bodenrichtwerte werden von unabhängigen Gutachterausschüssen auf
                  Basis tatsächlicher Kaufpreise ermittelt und jährlich
                  aktualisiert. Sie sind die offizielle Grundlage für viele
                  Immobilienbewertungen.
                </p>
                <p>
                  <strong className="text-gray-900">Aktualisierung:</strong>{" "}
                  Jährlich durch Gutachterausschüsse
                </p>
                <a
                  href="https://www.bodenrichtwerte-boris.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm mt-2"
                >
                  <span>BORIS-D Portal besuchen</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Marktdaten */}
            <div className="card p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-secondary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  2. Öffentliche Angebotspreise
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Datenquelle:</strong>
                  <br />
                  Analyse öffentlich verfügbarer Immobilienanzeigen aus dem
                  Allgäu (Kempten, Kaufbeuren, Memmingen, Sonthofen, Lindau,
                  Füssen). Keine exklusiven API-Partnerschaften.
                </p>
                <p>
                  <strong className="text-gray-900">Datenmenge:</strong>
                  <br />
                  10.000+ Datenpunkte aus 24+ Monaten historischer Marktdaten
                  über alle 6 Städte hinweg.
                </p>
                <p>
                  <strong className="text-gray-900">Aktualisierung:</strong>{" "}
                  Monatlich durch manuelle Marktanalyse
                </p>
              </div>
            </div>

            {/* Historische Daten */}
            <div className="card p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-accent-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  3. Historische Marktdaten
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Zeitraum:</strong>
                  <br />
                  Wir analysieren Preisentwicklungen der letzten 24+ Monate, um
                  Trends, saisonale Muster und Wachstumsraten zu identifizieren.
                </p>
                <p>
                  <strong className="text-gray-900">Verwendung:</strong>
                  <br />
                  Historische Daten fließen in unsere Prognose-Algorithmen ein und
                  helfen, realistische Erwartungen für zukünftige Entwicklungen zu
                  formulieren.
                </p>
              </div>
            </div>

            {/* Regionale Faktoren */}
            <div className="card p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  4. Regionalspezifische Faktoren
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Lokales Wissen:</strong>
                  <br />
                  Allgäu-spezifische Besonderheiten wie Infrastruktur,
                  Nachfragetrends, Baulandverfügbarkeit und Lagequalität fließen
                  qualitativ in unsere Bewertung ein.
                </p>
                <p>
                  <strong className="text-gray-900">Stadtteile:</strong>
                  <br />
                  Jede Stadt wird nach Stadtteilen aufgeschlüsselt, um
                  mikrolokale Preisunterschiede abzubilden (z.B. Altstadt vs.
                  Randlagen).
                </p>
              </div>
            </div>
          </div>

          {/* Data Volume Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                10.000+
              </div>
              <div className="text-sm font-medium text-gray-600">
                Datenpunkte analysiert
              </div>
            </div>
            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-bold text-secondary-600 mb-2">6</div>
              <div className="text-sm font-medium text-gray-600">
                Allgäu-Städte abgedeckt
              </div>
            </div>
            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-bold text-accent-600 mb-2">24+</div>
              <div className="text-sm font-medium text-gray-600">
                Monate historische Daten
              </div>
            </div>
            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <div className="text-sm font-medium text-gray-600">
                Kostenlos & transparent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bewertungsalgorithmus */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Der Bewertungsalgorithmus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser Algorithmus basiert auf dem anerkannten
              Vergleichswertverfahren und berücksichtigt multiple Faktoren.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Vergleichswertverfahren
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Das <strong>Vergleichswertverfahren</strong> ist eine der drei
                anerkannten Methoden zur Immobilienbewertung (neben Ertragswert-
                und Sachwertverfahren) und besonders geeignet für
                Wohnimmobilien.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Es ermittelt den Wert einer Immobilie durch Vergleich mit
                ähnlichen Objekten, die kürzlich verkauft oder angeboten wurden.
                Dabei werden Abweichungen in Lage, Größe, Zustand und Ausstattung
                berücksichtigt.
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong className="font-semibold text-gray-900">
                    Gesetzliche Grundlage:
                  </strong>{" "}
                  Das Vergleichswertverfahren ist in §15 der
                  Immobilienwertermittlungsverordnung (ImmoWertV) geregelt und
                  wird von Sachverständigen und Gutachtern bundesweit angewendet.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Berücksichtigte Faktoren
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "Lage & Stadtteil",
                    desc: "Zentrale Lagen (Altstadt) vs. Randlagen - größter Einflussfaktor",
                  },
                  {
                    icon: "📐",
                    title: "Wohnfläche",
                    desc: "Größere Wohnungen haben oft niedrigeren Preis/m² als kleine",
                  },
                  {
                    icon: "🏠",
                    title: "Objekttyp",
                    desc: "Wohnung, Haus, Doppelhaushälfte, Reihenhaus - unterschiedliche Nachfrage",
                  },
                  {
                    icon: "🔨",
                    title: "Zustand & Baujahr",
                    desc: "Sanierungsbedarf, Modernisierung, Energieeffizienz",
                  },
                  {
                    icon: "📊",
                    title: "Markttrends",
                    desc: "Aktuelle Nachfrage-Angebot-Verhältnisse und Preisentwicklung",
                  },
                  {
                    icon: "🌳",
                    title: "Ausstattung",
                    desc: "Balkon, Garten, Stellplatz, Aufzug, etc.",
                  },
                ].map((factor, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-2xl flex-shrink-0">{factor.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {factor.title}
                      </div>
                      <div className="text-sm text-gray-600">{factor.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Algorithm Flow */}
          <div className="card p-8 bg-gradient-to-br from-secondary-50 to-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              So läuft die Bewertung ab
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Basisdaten",
                  desc: "Adresse, Fläche, Objekttyp eingeben",
                  color: "primary",
                },
                {
                  step: "2",
                  title: "Vergleichsobjekte",
                  desc: "Ähnliche Immobilien aus Datenbank finden",
                  color: "secondary",
                },
                {
                  step: "3",
                  title: "Faktoranalyse",
                  desc: "Abweichungen gewichten (Lage, Zustand, etc.)",
                  color: "accent",
                },
                {
                  step: "4",
                  title: "Preisspanne",
                  desc: "Marktwert-Einschätzung mit Konfidenzintervall",
                  color: "primary",
                },
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className={`w-16 h-16 bg-${step.color}-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}
                  >
                    {step.step}
                  </div>
                  <div className="font-bold text-gray-900 mb-2">
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Prognose-Methodik */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Prognose-Methodik
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wie wir Preisprognosen für 2026-2027 berechnen und warum Vorsicht
              bei Langfristprognosen geboten ist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prognosegrundlage
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Historische Trends:</strong>
                    <br />
                    Durchschnittliche Wachstumsrate der letzten 3-5 Jahre wird als
                    Basis für Zukunftsprognosen verwendet (z.B. Kempten: +4,2%
                    p.a.)
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Saisonale Muster:</strong>
                    <br />
                    Berücksichtigung typischer Marktzyklen (Q2/Frühjahr stärker
                    als Q4/Winter) durch Saisonmultiplikatoren
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Konservative Annahmen:</strong>
                    <br />
                    Keine exponentiellen Wachstumsfantasien - wir gehen von
                    moderater Fortsetzung bisheriger Trends aus
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-amber-50 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Konfidenzlevels
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-primary-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">
                      Hoch (±5%)
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full">
                      0-6 Monate
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Kurzfristige Prognosen sind relativ zuverlässig, da wenige
                    unbekannte Faktoren existieren.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-secondary-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">
                      Mittel (±10%)
                    </span>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-bold rounded-full">
                      6-12 Monate
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Mittelfristige Prognosen unterliegen bereits mehr
                    Unsicherheit durch wirtschaftliche Entwicklungen.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-amber-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">
                      Niedrig (±15%)
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                      12+ Monate
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Langfristprognosen sind spekulativ. Viele unvorhersehbare
                    Faktoren (Zinsen, Politik, etc.) können eintreten.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 bg-gradient-to-br from-secondary-50 to-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Beispiel: Quartalsweise Prognose
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Für Kempten erwarten wir auf Basis der +4,2% Jahreswachstumsrate
              und saisonaler Anpassungen folgende Entwicklung:
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Q1 2026</div>
                <div className="text-2xl font-bold text-primary-600">
                  4.155 €/m²
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  -2% saisonal
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Q2 2026</div>
                <div className="text-2xl font-bold text-secondary-600">
                  4.279 €/m²
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  +2% saisonal
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Q3 2026</div>
                <div className="text-2xl font-bold text-accent-600">
                  4.364 €/m²
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  +1% saisonal
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Q4 2026</div>
                <div className="text-2xl font-bold text-primary-600">
                  4.357 €/m²
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  -1% saisonal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Genauigkeit & Grenzen */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Genauigkeit & Grenzen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir sind ehrlich über die Grenzen unserer Bewertung und was sie
              NICHT ersetzen kann.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ✅ Das können wir leisten
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Schnelle erste Einschätzung des Marktwerts (innerhalb von Minuten)",
                  "Transparente Methodik basierend auf öffentlichen Daten",
                  "Vergleich mit ähnlichen Objekten in Ihrer Region",
                  "Einordnung in historische Preisentwicklungen",
                  "Kostenloses, unverbindliches Angebot ohne versteckte Kosten",
                  "Typische Genauigkeit von ±15-20% bei Standardobjekten",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8 bg-amber-50 border border-amber-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ❌ Das können wir NICHT leisten
              </h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Offizielles Verkehrswertgutachten nach §194 BauGB (benötigt für Finanzierungen, Gerichtsverfahren, Erbschaftsangelegenheiten)",
                  "Vor-Ort-Besichtigung und detaillierte Zustandserfassung",
                  "Berücksichtigung individueller Sanierungskosten",
                  "Bewertung seltener oder außergewöhnlicher Objekte (z.B. Burgen, Denkmäler)",
                  "Garantie für erzielbare Verkaufspreise",
                  "Rechtssichere Bewertung für offizielle Zwecke",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="card p-8 border-2 border-amber-400 bg-amber-50">
            <div className="flex items-start gap-4">
              <svg
                className="w-10 h-10 text-amber-600 flex-shrink-0"
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
                <h4 className="font-bold text-gray-900 mb-3 text-xl">
                  Rechtlicher Hinweis gemäß §194 BauGB
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Bewertung ist eine <strong>algorithmisch berechnete
                  Marktwerteinschätzung</strong> und ersetzt{" "}
                  <strong>keine offizielle Immobilienbewertung</strong> durch
                  einen zertifizierten Gutachter nach §194 BauGB
                  (Baugesetzbuch).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Für Finanzierungen, rechtliche Auseinandersetzungen,
                  Erbschaftsangelegenheiten oder andere offizielle Zwecke
                  benötigen Sie ein <strong>Verkehrswertgutachten</strong> von
                  einem öffentlich bestellten und vereidigten Sachverständigen.
                </p>
                <p className="text-sm text-gray-600">
                  ImmoAllgäu ist ein digitales Informationsangebot zur
                  Immobilienbewertung. Wir sind keine Immobilienmakler und
                  erbringen keine Maklerdienstleistungen. Unsere Bewertungen
                  basieren auf öffentlich verfügbaren Daten und algorithmischer
                  Analyse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Update-Frequenz */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Aktualisierung & Verbesserung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir verbessern unsere Bewertungen kontinuierlich und aktualisieren
              Daten regelmäßig.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "Marktdaten",
                frequency: "Monatlich",
                desc: "Analyse aktueller Angebotspreise aus allen 6 Allgäu-Städten",
                color: "primary",
              },
              {
                title: "BORIS-D Bodenrichtwerte",
                frequency: "Jährlich",
                desc: "Offizielle Aktualisierung durch Gutachterausschüsse (meist Q1)",
                color: "secondary",
              },
              {
                title: "Prognosen",
                frequency: "Quartalsweise",
                desc: "Anpassung der Vorhersagemodelle an neue Marktdaten",
                color: "accent",
              },
              {
                title: "Algorithmus",
                frequency: "Kontinuierlich",
                desc: "Laufende Verbesserung durch Feedback und neue Erkenntnisse",
                color: "primary",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card p-6 hover:shadow-medium transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  <div
                    className={`px-6 py-3 bg-${item.color}-100 text-${item.color}-700 rounded-full text-sm font-bold whitespace-nowrap`}
                  >
                    {item.frequency}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">
                Unser Commitment zur Transparenz
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Wir verpflichten uns, unsere Datenquellen und Methodik offen zu
              kommunizieren und kontinuierlich zu verbessern. Sollten Sie Fehler
              entdecken oder Verbesserungsvorschläge haben,{" "}
              <Link
                href="/kontakt"
                className="text-primary-600 hover:text-primary-700 font-semibold underline"
              >
                kontaktieren Sie uns gerne
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Jetzt Ihre Immobilie kostenlos bewerten lassen
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nutzen Sie unsere transparente, datenbasierte Bewertungsmethodik für
            Ihre Immobilie im Allgäu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-hard"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Kostenlose Bewertung starten</span>
            </Link>
            <Link
              href="/marktreport/kempten"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <span>Marktreport ansehen</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
