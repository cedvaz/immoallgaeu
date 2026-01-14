"use client";

import Link from "next/link";
import Image from "next/image";
import { teamMembers, getIconPath } from "@/lib/data/teamData";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Unser KI-Team</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Kein Bullshit. Nur ehrliche KI.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            7 KI-Agenten arbeiten 24/7 für präzise Immobilienbewertungen im
            Allgäu. Keine Stock-Fotos, keine fake Experten – nur transparente
            Technologie.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-sm text-white/80">KI-Agenten</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm text-white/80">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-white/80">Im Einsatz</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm text-white/80">Kaffeepausen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              7 spezialisierte KI-Agenten, die gemeinsam für präzise und
              transparente Immobilienbewertungen sorgen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="card p-8 hover:shadow-hard hover:-translate-y-1 transition-all duration-300"
              >
                {/* Avatar - Image or Gradient Fallback */}
                <div className="relative w-64 h-64 mx-auto mb-6 group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${member.gradientFrom} to-${member.gradientTo} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-soft">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          className={`w-12 h-12 text-${member.gradientFrom.replace("-100", "-600").replace("-200", "-600")}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={getIconPath(member.icon)}
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${member.gradientFrom} text-${member.gradientFrom.replace("-100", "-700")} rounded-full text-xs font-semibold`}>
                    <span className={`w-2 h-2 bg-${member.gradientFrom.replace("-100", "-600")} rounded-full animate-pulse`}></span>
                    <span>99.9% Uptime</span>
                  </div>
                </div>

                {/* Name + Role */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-6 text-center">{member.role}</p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">
                    Spezialgebiete:
                  </h4>
                  <ul className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
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
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fun Facts */}
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">
                    Fun Facts:
                  </h4>
                  <div className="space-y-2 text-xs text-gray-600">
                    {member.funFacts.map((fact, idx) => (
                      <p key={idx}>{fact}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-12 text-center">
            Warum KI statt traditionellem Team?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Konsistenz
              </h3>
              <p className="text-sm text-gray-600">
                Keine schlechten Tage, keine persönlichen Vorlieben. Jede
                Bewertung folgt denselben Regeln.
              </p>
            </div>

            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Geschwindigkeit
              </h3>
              <p className="text-sm text-gray-600">
                Bewertungen in Minuten statt Tagen. Keine Wartezeiten, keine
                Termine.
              </p>
            </div>

            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Transparenz
              </h3>
              <p className="text-sm text-gray-600">
                Algorithmen statt Bauchgefühl. Alle Faktoren sind
                nachvollziehbar dokumentiert.
              </p>
            </div>

            <div className="card p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Skalierbarkeit
              </h3>
              <p className="text-sm text-gray-600">
                1 oder 1.000 Anfragen – die Qualität bleibt gleich. Kein
                Bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                👤
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-xl">
                  Der Mensch hinter der Maschine
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hinter ImmoAllgäu steht ein echter Mensch, der diese
                  KI-Agenten entwickelt, trainiert und überwacht. Die
                  Technologie mag automatisiert sein, aber die Vision und
                  Verantwortung sind menschlich.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Für Fragen, Feedback oder Anliegen außerhalb der
                  Automatisierung:{" "}
                  <Link
                    href="/kontakt"
                    className="text-primary-600 hover:text-primary-700 font-semibold underline"
                  >
                    Kontakt aufnehmen
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Bereit für eine KI-gestützte Bewertung?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lassen Sie unsere 7 KI-Agenten Ihre Immobilie in Minuten bewerten –
            kostenlos, transparent und datenbasiert.
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
              href="/methodik"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Methodik verstehen</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
