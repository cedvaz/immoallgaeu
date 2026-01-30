import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – ImmoAllgäu",
  description: "Datenschutzerklärung von ImmoAllgäu - Informationen zur Datenverarbeitung",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Summary Card */}
          <div className="card p-8 bg-white border-l-4 border-primary-500 mb-16 shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Auf einen Blick
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 font-display">Datensparsamkeit</h3>
                <p className="text-gray-600 text-sm">Wir erheben nur Daten, die technisch notwendig sind oder der Kommunikation dienen.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 font-display">Hosting in EU</h3>
                <p className="text-gray-600 text-sm">Unsere Website wird über Vercel bereitgestellt, wobei Verbindungsdaten nach höchsten Standards verarbeitet werden.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 font-display">Ihre Rechte</h3>
                <p className="text-gray-600 text-sm">Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten Daten.</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <h2 className="text-gray-900">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-gray-900">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h2 className="text-gray-900">2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3 className="text-gray-900">Externes Hosting</h3>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Vercel). Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
              es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten handeln.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter.
            </p>

            <h2 className="text-gray-900">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-gray-900">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 not-prose mb-8">
              <p className="font-bold text-gray-900">Cedric Vazquez Boo</p>
              <p className="text-gray-600">Am Frickenland 4</p>
              <p className="text-gray-600">87437 Kempten</p>
              <p className="mt-4">
                <span className="font-medium text-gray-900">E-Mail:</span>{" "}
                <a href="mailto:info@immoallgaeu.com" className="text-primary-600 hover:text-primary-700">info@immoallgaeu.com</a>
              </p>
            </div>

            <h2 className="text-gray-900">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-gray-900">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>

            <h2 className="text-gray-900">5. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
              <p>Stand: Januar 2026</p>
              <p>Informationen nach bestem Wissen erstellt.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
