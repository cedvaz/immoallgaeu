import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – ImmoAllgäu | Ihre Immobilienexperten im Allgäu",
  description: "Kontaktieren Sie uns für eine kostenlose Beratung zu Immobilien im Allgäu. Telefon, E-Mail oder persönlich vor Ort.",
};

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-700">
            Wir sind für Sie da – persönlich, telefonisch oder per E-Mail
          </p>
        </div>
      </section>

      {/* Kontakt-Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktinformationen */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Ihre Ansprechpartner</h2>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-xl mb-4">Immo Allgäu</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-medium">Adresse</div>
                        <div className="text-sm">
                          Am Frickenland 4<br />
                          87437 Kempten
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-medium">E-Mail</div>
                        <a href="mailto:info@immoallgaeu.com" className="text-sm text-blue-600 hover:underline">
                          info@immoallgaeu.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="font-medium">Öffnungszeiten</div>
                        <div className="text-sm">
                          Mo-Fr: 9:00 - 17:00 Uhr<br />
                          Sa-So: Geschlossen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h3 className="font-semibold mb-2">💼 Persönliche Beratung</h3>
                  <p className="text-sm text-gray-700">
                    Gerne beraten wir Sie auch persönlich in unserem Büro in Kempten.
                    Vereinbaren Sie einen Termin – wir nehmen uns Zeit für Sie!
                  </p>
                </div>
              </div>
            </div>

            {/* Kontaktformular */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Nachricht senden</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="bewertung">Immobilienbewertung</option>
                    <option value="verkauf">Verkauf</option>
                    <option value="kauf">Kauf</option>
                    <option value="kapitalanlage">Kapitalanlage</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-3"
                  />
                  <label className="text-sm text-gray-700">
                    Ich habe die <Link href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</Link> zur
                    Kenntnis genommen und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen
                    gespeichert werden. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                >
                  Nachricht senden
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Oder direkt bewerten lassen?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Nutzen Sie unser Online-Bewertungstool für eine schnelle erste Einschätzung.
          </p>
          <Link
            href="/immobilienbewertung"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Zur kostenlosen Bewertung
          </Link>
        </div>
      </section>
    </main>
  );
}
