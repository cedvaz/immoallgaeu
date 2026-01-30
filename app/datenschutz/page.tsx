'use client';

import Link from "next/link";
import type { Metadata } from "next";

export default function DatenschutzPage() {
  const resetCookieConsent = () => {
    document.cookie = 'immoallgaeu_cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  };

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
              Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;. Cookies sind kleine Textdateien und richten auf
              Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            <p>
              Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Einige Cookies 
              sind technisch notwendig und können nicht deaktiviert werden, während andere Cookies nur mit Ihrer 
              ausdrücklichen Einwilligung gesetzt werden.
            </p>

            <h3 className="text-gray-900">Cookie-Kategorien</h3>
            <p>Wir verwenden folgende Arten von Cookies auf unserer Website:</p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6 not-prose">
              <h4 className="font-bold text-green-900 mb-2 text-lg">Notwendige Cookies</h4>
              <p className="text-green-800 text-sm mb-3">
                Diese Cookies sind zwingend erforderlich, damit unsere Website ordnungsgemäß funktioniert. 
                Sie können in Ihrem Browser nicht deaktiviert werden.
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">Cookie-Name: immoallgaeu_cookie_consent</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Zweck:</strong> Speichert Ihre Cookie-Einstellungen</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Speicherdauer:</strong> 12 Monate</p>
                <p className="text-sm text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6 not-prose">
              <h4 className="font-bold text-blue-900 mb-2 text-lg">Analyse & Performance Cookies</h4>
              <p className="text-blue-800 text-sm mb-3">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. 
                Alle Informationen werden anonymisiert erfasst und ausgewertet.
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">Dienst: Google Analytics (optional)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Zweck:</strong> Website-Analyse, Besucherstatistiken</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Cookies:</strong> _ga, _gid, _gat</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Speicherdauer:</strong> 2 Jahre (_ga), 24 Stunden (_gid)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Anbieter:</strong> Google Ireland Limited</p>
                <p className="text-sm text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-6 not-prose">
              <h4 className="font-bold text-purple-900 mb-2 text-lg">Marketing Cookies</h4>
              <p className="text-purple-800 text-sm mb-3">
                Diese Cookies werden verwendet, um Ihnen personalisierte Werbung anzuzeigen, die für Sie 
                und Ihre Interessen relevant ist.
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1">Dienste: Google Ads, Meta Pixel (optional)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Zweck:</strong> Personalisierte Werbung, Remarketing</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Speicherdauer:</strong> Bis zu 2 Jahre</p>
                <p className="text-sm text-gray-700"><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
              </div>
            </div>

            <h3 className="text-gray-900">Cookie-Einstellungen verwalten</h3>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit ändern. Die meisten Browser ermöglichen es Ihnen, 
              Cookies zu blockieren oder zu löschen. Bitte beachten Sie, dass die Blockierung von Cookies die 
              Funktionalität unserer Website einschränken kann.
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 my-6 not-prose">
              <p className="text-primary-900 font-semibold mb-2">
                Cookie-Einstellungen auf dieser Website anpassen:
              </p>
              <p className="text-primary-800 text-sm mb-4">
                Klicken Sie auf den Button unten, um Ihre Einstellungen zu ändern. Der Cookie-Banner 
                wird erneut angezeigt, und Sie können Ihre Präferenzen aktualisieren.
              </p>
              <button
                onClick={resetCookieConsent}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
              >
                Cookie-Einstellungen ändern
              </button>
            </div>

            <h3 className="text-gray-900">Kontaktformular & Immobilienbewertung</h3>
            <p>
              Wenn Sie uns per Kontaktformular oder über unser Bewertungstool Anfragen zukommen lassen, werden 
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt 
              auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags 
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen 
              Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der 
              an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h2 className="text-gray-900">5. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden. 
              Die Kontaktdaten finden Sie im Impressum bzw. in der verantwortlichen Stelle oben.
            </p>

            <h3 className="text-gray-900">Widerspruchsrecht</h3>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f 
              DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung 
              Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen 
              Situation ergeben.
            </p>

            <h3 className="text-gray-900">Beschwerderecht bei einer Aufsichtsbehörde</h3>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
              personenbezogenen Daten durch uns zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 not-prose mb-8">
              <p className="font-bold text-gray-900">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
              <p className="text-gray-600">Promenade 18</p>
              <p className="text-gray-600">91522 Ansbach</p>
              <p className="mt-2">
                <span className="font-medium text-gray-900">Website:</span>{" "}
                <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                  www.lda.bayern.de
                </a>
              </p>
            </div>

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
