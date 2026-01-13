import ValuationFormMultiStep from "@/components/forms/ValuationFormMultiStep";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenlose Immobilienbewertung im Allgäu | ImmoAllgäu",
  description: "Erhalten Sie eine kostenlose und unverbindliche Bewertung Ihrer Immobilie im Allgäu. Schnell, einfach und von Experten durchgeführt.",
};

export default function BewertungPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kostenlose Immobilienbewertung
          </h1>
          <p className="text-xl text-blue-100 mb-2">
            Erfahren Sie in nur 2 Minuten, was Ihre Immobilie wert ist
          </p>
          <p className="text-blue-200">
            ✓ Kostenlos & unverbindlich  ✓ Von Experten geprüft  ✓ Schnelle Auswertung
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <ValuationFormMultiStep />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Warum ImmoAllgäu?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kostenfrei</h3>
              <p className="text-gray-600">
                Keine versteckten Kosten. Völlig unverbindlich und ohne Verpflichtung.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schnell</h3>
              <p className="text-gray-600">
                Ausfüllen dauert nur 2 Minuten. Ergebnis innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Über 15 Jahre Erfahrung am Allgäuer Immobilienmarkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Ist die Bewertung wirklich kostenlos?
              </h3>
              <p className="text-gray-700">
                Ja, die Bewertung ist komplett kostenfrei und unverbindlich. Es entstehen Ihnen keinerlei Kosten oder Verpflichtungen.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Wie genau ist die Online-Bewertung?
              </h3>
              <p className="text-gray-700">
                Unsere Online-Bewertung basiert auf aktuellen Marktdaten und gibt Ihnen eine realistische Preisspanne. Für eine exakte Bewertung empfehlen wir eine persönliche Besichtigung vor Ort.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Was passiert mit meinen Daten?
              </h3>
              <p className="text-gray-700">
                Ihre Daten werden vertraulich behandelt und ausschließlich für Ihre Bewertung verwendet. Wir geben keine Daten an Dritte weiter.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Wie lange dauert es bis ich ein Ergebnis erhalte?
              </h3>
              <p className="text-gray-700">
                Sie erhalten eine erste Einschätzung sofort nach Abschluss des Formulars. Die detaillierte Bewertung senden wir Ihnen innerhalb von 24 Stunden per E-Mail zu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
