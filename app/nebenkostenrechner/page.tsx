import { Metadata } from "next";
import SideCostCalculator from "@/components/forms/SideCostCalculator";

export const metadata: Metadata = {
  title: "Nebenkostenrechner Immobilienkauf Allgäu | Grunderwerbsteuer Kempten, Notar, Maklerprovision 2026",
  description: "Kostenloser Nebenkostenrechner für Immobilienkauf im Allgäu. Berechnen Sie Grunderwerbsteuer (3,5%), Notarkosten, Maklerprovision (3,57%) für Kempten, Kaufbeuren, Memmingen, Oberstdorf, Sonthofen, Immenstadt, Pfronten. Transparent und genau für Ihren Hauskauf im Allgäu.",
  keywords: "Nebenkosten Hauskauf Allgäu, Grunderwerbsteuer Kempten, Notarkosten Immobilie Allgäu, Maklerprovision Kempten 3.57, Grundbuchkosten Immobilie Allgäu, Nebenkosten Wohnung kaufen Kempten, Kosten Hauskauf Allgäu, Immobilienkauf Nebenkosten Rechner Allgäu, Grunderwerbsteuer Kaufbeuren, Notar Immobilienkauf Kempten, Nebenkosten Hauskauf Bayern, Immobilienkosten Allgäu, Hauskauf Nebenkosten Kempten",
  openGraph: {
    title: "Nebenkostenrechner Immobilienkauf Allgäu | Grunderwerbsteuer Kempten, Notar, Makler 2026",
    description: "Berechnen Sie alle Nebenkosten beim Hauskauf im Allgäu: Grunderwerbsteuer 3,5%, Notar 1,5%, Makler 3,57%. Kostenloser Rechner für Kempten, Kaufbeuren, Memmingen, Oberstdorf, Sonthofen.",
  },
};

export default function NebenkostenrechnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nebenkostenrechner Allgäu
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Berechnen Sie alle Nebenkosten beim Immobilienkauf in Kempten, Kaufbeuren, Memmingen und dem gesamten Allgäu
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Kostenlos & unverbindlich für das Allgäu</span>
          </div>
        </div>

        {/* Calculator Component */}
        <SideCostCalculator />

        {/* Additional Info */}
        <div className="mt-16 space-y-12">
          {/* Hauptabschnitt */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Was sind Nebenkosten beim Immobilienkauf?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                Beim Kauf einer Immobilie im Allgäu fallen neben dem eigentlichen Kaufpreis zahlreiche Nebenkosten an.
                Diese können je nach Stadt (Kempten, Kaufbeuren, Memmingen, Oberstdorf, Sonthofen, Immenstadt, Pfronten),
                Immobilientyp und individuellen Umständen stark variieren. Mit unserem <strong>Nebenkostenrechner für das Allgäu</strong>
                erhalten Sie eine präzise Kalkulation aller wichtigen Kostenpositionen beim Hauskauf oder Wohnungskauf
                in Ihrer Region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Grunderwerbsteuer Allgäu</h3>
                <p className="text-blue-800 mb-4">
                  Im Allgäu (Kempten, Kaufbeuren, Memmingen, etc.) beträgt die Grunderwerbsteuer seit 2021
                  <strong className="text-2xl">3,5%</strong> des Kaufpreises. Dies ist die größte Nebenkostenposition
                  beim Immobilienkauf. Die Grunderwerbsteuer wird direkt an das Finanzamt entrichtet und ist
                  gesetzlich vorgeschrieben.
                </p>
                <p className="text-sm text-blue-700">
                  Beispiel Kempten: Bei einem Hauspreis von 450.000€ beträgt die GrESt 15.750€
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-900 mb-3">Notarkosten Allgäu</h3>
                <p className="text-green-800 mb-4">
                  Der Notar in Kempten, Kaufbeuren oder anderen Allgäuer Städten beglaubigt den Kaufvertrag
                  und die Auflassung. Die Notargebühren betragen etwa <strong className="text-2xl">1,5-2%</strong>
                  des Kaufpreises inklusive MwSt. Diese Kosten werden üblicherweise hälftig zwischen Käufer und Verkäufer aufgeteilt.
                </p>
                <p className="text-sm text-green-700">
                  Der Notar übernimmt auch die Grundbucheintragung und sichert Ihre Rechtsposition als Eigentümer.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Maklerprovision Allgäu</h3>
                <p className="text-purple-800 mb-4">
                  Die Maklercourtage in Kempten, Kaufbeuren und anderen Allgäuer Städten beträgt typischerweise
                  <strong className="text-2xl">3,57%</strong> inkl. MwSt. und wird meist vollständig vom Käufer getragen.
                  Seit der Reform 2021 gilt der gesetzliche Provisionssatz von 3,57% für provisionspflichtige Maklerverträge.
                </p>
                <p className="text-sm text-purple-700">
                  Beispiel Oberstdorf: Bei 500.000€ Hauspreis: 17.850€ Maklerprovision
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Grundbuchkosten Allgäu</h3>
                <p className="text-orange-800 mb-4">
                  Die Eintragung ins Grundbuch beim Amtsgericht Kempten oder anderen Allgäuer Gerichten
                  kostet etwa <strong className="text-2xl">0,5%</strong> des Kaufpreises. Diese Kosten teilen sich
                  Käufer und Verkäufer meist hälftig. Das Grundbuchamt erhebt diese Gebühren für die Eigentumsumschreibung.
                </p>
                <p className="text-sm text-orange-700">
                  Zusätzlich können Kosten für Grundbuchauszüge und Abschriften anfallen.
                </p>
              </div>
            </div>
          </div>

          {/* Häufige Fragen */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Häufige Fragen zu Nebenkosten beim Hauskauf im Allgäu
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wie hoch sind die Nebenkosten beim Hauskauf im Allgäu?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Gesamtnebenkosten beim Hauskauf liegen im Allgäu (Kempten, Kaufbeuren, Memmingen, etc.)
                  typischerweise zwischen <strong>8-12%</strong> des Kaufpreises. Bei einem Hauspreis von 450.000€
                  in Kempten wären das also 36.000-54.000€ zusätzliche Kosten. Die genaue Höhe hängt von verschiedenen
                  Faktoren wie der Stadt, dem Immobilientyp und der Provisionshöhe ab. In touristischen Gebieten
                  wie Oberstdorf können die Kosten etwas höher ausfallen.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wer zahlt die Notarkosten beim Immobilienkauf im Allgäu?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Notarkosten werden üblicherweise hälftig zwischen Käufer und Verkäufer aufgeteilt.
                  Das entspricht etwa 0,75-1% des Kaufpreises pro Partei. Der Notar in Kempten, Kaufbeuren
                  oder anderen Allgäuer Städten übernimmt wichtige Aufgaben wie die Vertragsprüfung,
                  Beurkundung und Grundbucheintragung beim Amtsgericht, weshalb diese Kosten von beiden Seiten getragen werden.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kann man die Maklerprovision im Allgäu verhandeln?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Seit der Maklerreform 2021 gilt in Deutschland der Bestellerprinzip. Das bedeutet:
                  Wer den Makler beauftragt, zahlt auch die Provision. Im Allgäu (Kempten, Kaufbeuren, etc.)
                  beträgt der gesetzliche Höchstsatz 3,57% inkl. MwSt. für provisionspflichtige Verträge.
                  Bei provisionsfreien Verträgen können Sie individuell verhandeln oder sogar auf 0% kommen.
                  Viele Immobilienmakler im Allgäu bieten mittlerweile provisionsfreie Dienstleistungen an.
                  Nutzen Sie unseren Rechner, um verschiedene Szenarien durchzuspielen.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Welche zusätzlichen Kosten fallen beim Hauskauf an?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Neben den Hauptnebenkosten können weitere Kosten anfallen:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
                  <li><strong>Energieausweis:</strong> 50-150€ für Wohnungen, 300-500€ für Häuser</li>
                  <li><strong>Wohnflächenberechnung:</strong> 300-800€ bei Bedarf</li>
                  <li><strong>Finanzierungsnebenkosten:</strong> 1-2% des Darlehensbetrags</li>
                  <li><strong>Umzugskosten:</strong> 2.000-10.000€ je nach Entfernung</li>
                  <li><strong>Renovierungs-/Modernisierungskosten:</strong> Individuell</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wie kann ich Nebenkosten sparen?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Es gibt mehrere Möglichkeiten, Nebenkosten zu reduzieren:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Provisionsfreier Makler:</strong> Spart bis zu 3,57% des Kaufpreises</li>
                  <li><strong>Privater Verkauf:</strong> Keine Maklerprovision, dafür mehr Eigenleistung</li>
                  <li><strong>Verhandlung:</strong> Bei Notar- und Grundbuchkosten manchmal möglich</li>
                  <li><strong>Steuerliche Optimierung:</strong> Grunderwerbsteuer ist gesetzlich festgelegt</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wann muss die Grunderwerbsteuer bezahlt werden?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Die Grunderwerbsteuer muss innerhalb von 14 Tagen nach Erhalt des Steuerbescheids
                  bezahlt werden. Der Steuerbescheid wird vom Finanzamt ausgestellt, sobald der Notar
                  die Beurkundung gemeldet hat. Die Zahlung ist Voraussetzung für die Eigentumsumschreibung
                  im Grundbuch. Bei verspäteter Zahlung fallen Säumniszuschläge an.
                </p>
              </div>
            </div>
          </div>

          {/* Vergleichsrechner */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Nebenkosten Vergleich: Allgäu vs. andere Regionen
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Allgäu (Kempten, Kaufbeuren, etc.)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Grunderwerbsteuer:</span>
                    <span className="font-bold">3,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maklerprovision:</span>
                    <span className="font-bold">3,57%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notar:</span>
                    <span className="font-bold">1,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grundbuch:</span>
                    <span className="font-bold">0,5%</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Gesamt:</span>
                    <span className="font-bold text-blue-600">ca. 9%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-red-600 mb-4">München & Umgebung</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Grunderwerbsteuer:</span>
                    <span className="font-bold">3,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maklerprovision:</span>
                    <span className="font-bold">3,57%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notar:</span>
                    <span className="font-bold">1,5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grundbuch:</span>
                    <span className="font-bold">0,5%</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Gesamt:</span>
                    <span className="font-bold text-red-600">ca. 9%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Hinweis: In München können Maklerprovisionen oft höher verhandelt werden
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nebenkosten in verschiedenen Allgäuer Städten</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <h4 className="font-bold text-gray-900">Kempten</h4>
                  <p className="text-sm text-gray-600">ca. 8,5-11%</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <h4 className="font-bold text-gray-900">Kaufbeuren</h4>
                  <p className="text-sm text-gray-600">ca. 8-10,5%</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <h4 className="font-bold text-gray-900">Memmingen</h4>
                  <p className="text-sm text-gray-600">ca. 8-10%</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <h4 className="font-bold text-gray-900">Oberstdorf</h4>
                  <p className="text-sm text-gray-600">ca. 9-12%</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Das Allgäu bietet mit 3,5% Grunderwerbsteuer und moderaten Nebenkosten
                eine attraktive Region für Immobilienkäufer. In touristischen Gebieten wie Oberstdorf
                können die Kosten etwas höher ausfallen.
              </p>
            </div>
          </div>

          {/* Wichtiger Hinweis */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wichtige Hinweise zu unserem Nebenkostenrechner
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>Unser Nebenkostenrechner für das Allgäu</strong> bietet eine fundierte Schätzung der Kosten beim Immobilienkauf
                    in Kempten, Kaufbeuren, Memmingen und anderen Allgäuer Städten. Die Berechnungen basieren auf aktuellen
                    Durchschnittswerten für Bayern und den regionalen Besonderheiten des Allgäus. Dennoch können die tatsächlichen
                    Kosten je nach Einzelfall variieren.
                  </p>

                  <p>
                    <strong>Rechtlicher Hinweis:</strong> Diese Berechnung ersetzt keine professionelle Beratung durch
                    einen Notar in Kempten/Kaufbeuren, Steuerberater oder Immobilienmakler im Allgäu. Für eine verbindliche Kalkulation
                    Ihrer persönlichen Situation empfehlen wir eine individuelle Beratung bei lokalen Fachleuten.
                  </p>

                  <p>
                    <strong>Regelmäßige Aktualisierung:</strong> Wir überprüfen unsere Berechnungsgrundlagen
                    regelmäßig und passen sie an aktuelle Gesetzesänderungen und Marktentwicklungen im Allgäu an.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Kostenlose Immobilienbewertung für Ihr Haus im Allgäu
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Erfahren Sie den genauen Wert Ihrer Immobilie in Kempten, Kaufbeuren, Memmingen oder anderen Städten des Allgäus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/immobilienbewertung"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Jetzt kostenlos bewerten
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/ratgeber"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Ratgeber für Allgäu lesen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}