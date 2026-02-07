import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haus kaufen im Allgäu – Der komplette Guide 2026 | ImmoAllgäu",
  description: "Alles was Sie über den Hauskauf im Allgäu wissen müssen: Preise, Standorte, Finanzierung, Ablauf und Expertentipps. Jetzt informieren!",
};

export default function HausKaufenAllgaeuPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-blue-600">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span>Haus kaufen im Allgäu</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Haus kaufen im Allgäu – Der komplette Guide 2026
          </h1>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>⏱ Lesezeit: 8 Min.</span>
            <span>📅 Aktualisiert: Februar 2026</span>
          </div>
        </div>
      </section>

      {/* Inhaltsverzeichnis */}
      <section className="py-8 bg-white border-b sticky top-16 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-medium text-gray-900 mb-2">Inhalt:</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#preise" className="text-blue-600 hover:underline">Preise</a>
            <a href="#standorte" className="text-blue-600 hover:underline">Standorte</a>
            <a href="#finanzierung" className="text-blue-600 hover:underline">Finanzierung</a>
            <a href="#ablauf" className="text-blue-600 hover:underline">Ablauf</a>
            <a href="#tipps" className="text-blue-600 hover:underline">Tipps</a>
            <a href="#checkliste" className="text-blue-600 hover:underline">Checkliste</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Das Allgäu zählt zu den attraktivsten Wohnregionen Süddeutschlands. Die Kombination aus
              intakter Natur, stabiler Wirtschaft und hoher Lebensqualität macht den Hauskauf im Allgäu
              zu einer lohnenden Investition. In diesem Guide erfahren Sie alles Wichtige über Preise,
              Standorte, Finanzierung und den Kaufprozess.
            </p>

            <h2 id="preise" className="text-3xl font-bold mt-12 mb-6">
              Hauspreise im Allgäu 2026
            </h2>

            <p>
              Die Immobilienpreise im Allgäu variieren stark je nach Lage und Ort. Während Sie in
              kleineren Gemeinden noch vergleichsweise günstig ein Eigenheim erwerben können, liegen
              die Preise in beliebten Ferienorten deutlich höher.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">Durchschnittspreise Einfamilienhaus (2026):</h3>
              <ul className="space-y-2">
                <li><strong>Kempten:</strong> 4.500 - 5.800 €/m²</li>
                <li><strong>Kaufbeuren:</strong> 4.000 - 4.800 €/m²</li>
                <li><strong>Memmingen:</strong> 3.800 - 4.500 €/m²</li>
                <li><strong>Oberstdorf:</strong> 7.000 - 9.500 €/m² (Chalets)</li>
                <li><strong>Sonthofen:</strong> 5.000 - 6.200 €/m²</li>
              </ul>
            </div>

            <p>
              Für ein durchschnittliches Einfamilienhaus mit 140 m² Wohnfläche müssen Sie im Allgäu
              mit Kaufpreisen zwischen 530.000 € (Memmingen) und über 1.000.000 € (Oberstdorf) rechnen.
            </p>

            <h2 id="standorte" className="text-3xl font-bold mt-12 mb-6">
              Die besten Standorte für den Hauskauf
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Kempten – Die Allgäu-Metropole</h3>
            <p>
              Als größte Stadt bietet Kempten die beste Infrastruktur mit Schulen, Ärzten, Shopping
              und Kulturangebot. Ideal für Familien, die urbanes Leben mit Allgäu-Nähe verbinden möchten.
              Die Preisentwicklung ist stabil mit moderatem Wachstum.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Kaufbeuren – Solides Preis-Leistungs-Verhältnis</h3>
            <p>
              Kaufbeuren punktet mit günstigeren Preisen bei gleichzeitig guter Infrastruktur und
              Anbindung. Besonders für Pendler nach München oder Augsburg interessant.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Oberstdorf – Premium-Segment</h3>
            <p>
              Der bekannte Ferienort bietet höchste Lebensqualität und starke Wertsteigerung,
              allerdings zu Premiumpreisen. Ideal als Zweitwohnsitz oder für touristische Vermietung.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-2">💡 Tipp für Käufer:</h3>
              <p className="mb-0">
                Kleinere Gemeinden im Umland von Kempten oder Kaufbeuren bieten oft das beste
                Preis-Leistungs-Verhältnis. Orte wie Durach, Altusried oder Marktoberdorf verbinden
                ländliche Ruhe mit kurzen Wegen zur Stadt.
              </p>
            </div>

            <h2 id="finanzierung" className="text-3xl font-bold mt-12 mb-6">
              Finanzierung richtig planen
            </h2>

            <p>
              Die Finanzierung ist der wichtigste Schritt beim Hauskauf. Folgende Punkte sollten Sie beachten:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Eigenkapital</h3>
            <p>
              Planen Sie mindestens 20-30% Eigenkapital ein. Bei einem Kaufpreis von 600.000 € sind
              das 120.000-180.000 €. Je mehr Eigenkapital, desto bessere Kreditkonditionen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Kaufnebenkosten</h3>
            <p>
              Unterschätzen Sie nicht die Nebenkosten:
            </p>
            <ul>
              <li><strong>Grunderwerbsteuer:</strong> 3,5% in Bayern</li>
              <li><strong>Notar & Grundbuch:</strong> ca. 1,5-2%</li>
              <li><strong>Makler:</strong> 3,57% (inkl. MwSt.), falls beauftragt</li>
            </ul>
            <p>
              Bei 600.000 € Kaufpreis kommen zusätzlich ca. 42.000-54.000 € hinzu.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Zinsbindung</h3>
            <p>
              Aktuelle Zinsen (Februar 2026) liegen bei ca. 3,5-4,5%. Wählen Sie eine Zinsbindung von
              mindestens 10 Jahren, besser 15-20 Jahre für maximale Planungssicherheit.
            </p>

            <h2 id="ablauf" className="text-3xl font-bold mt-12 mb-6">
              Der Kaufprozess Schritt für Schritt
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">1. Budget festlegen & Finanzierung klären</h3>
                <p>Sprechen Sie mit Ihrer Bank und lassen Sie sich eine Finanzierungszusage geben.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">2. Immobiliensuche</h3>
                <p>Nutzen Sie Portale, Makler und lokale Zeitungen. Planen Sie mehrere Besichtigungen ein.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">3. Besichtigung & Prüfung</h3>
                <p>Nehmen Sie einen Bausachverständigen mit. Prüfen Sie Bausubstanz, Zustand und eventuelle Mängel.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">4. Kaufvertrag & Notar</h3>
                <p>Der Notar setzt den Kaufvertrag auf. Lassen Sie diesen vorab prüfen.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-semibold text-lg mb-2">5. Zahlung & Übergabe</h3>
                <p>Nach Zahlung und Grundbucheintrag erfolgt die Schlüsselübergabe.</p>
              </div>
            </div>

            <h2 id="tipps" className="text-3xl font-bold mt-12 mb-6">
              Experten-Tipps für den Hauskauf im Allgäu
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">🏔️ Regionale Besonderheiten beachten:</h3>
              <ul className="space-y-2">
                <li>Prüfen Sie die <strong>Schneelast-Zone</strong> – im Allgäu relevant für die Dachkonstruktion</li>
                <li><strong>Hochwasserrisiko</strong> in Tallagen checken</li>
                <li><strong>Erschließung</strong> in ländlichen Gebieten (Wasser, Abwasser, Internet)</li>
                <li><strong>Winterdienst & Erreichbarkeit</strong> in höheren Lagen</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">✅ Darauf sollten Sie achten:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Energieausweis prüfen</li>
                  <li>✓ Bausachverständigen beauftragen</li>
                  <li>✓ Grundbuch einsehen</li>
                  <li>✓ Bebauungsplan checken</li>
                  <li>✓ Nachbarschaft erkunden</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">❌ Häufige Fehler vermeiden:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✗ Budget zu knapp kalkulieren</li>
                  <li>✗ Renovierungskosten unterschätzen</li>
                  <li>✗ Emotionale Schnellkäufe</li>
                  <li>✗ Ohne Sachverständigen kaufen</li>
                  <li>✗ Lage nicht ausreichend prüfen</li>
                </ul>
              </div>
            </div>

            <h2 id="checkliste" className="text-3xl font-bold mt-12 mb-6">
              Checkliste Hauskauf
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Vor dem Kauf:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Budget und Finanzierung geklärt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Standort und Lage geprüft</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Besichtigung mit Sachverständigem</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Grundbuchauszug eingeholt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Energieausweis geprüft</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Kaufvertrag vom Anwalt prüfen lassen</span>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-4">Nach dem Kauf:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Versicherungen abschließen (Wohngebäude, Hausrat)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Ummeldung Wohnsitz</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Energieversorger wechseln/anmelden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sie haben Ihr Traumhaus im Allgäu gefunden?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Wir unterstützen Sie beim Kauf mit einer kostenlosen Markteinschätzung und persönlicher Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Immobilie bewerten lassen
            </Link>
            <Link
              href="/kontakt"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Weitere Ratgeber */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Weitere Ratgeber</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/ratgeber/immobilie-verkaufen"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">Immobilie verkaufen – Der komplette Ablauf</h3>
              <p className="text-gray-600 text-sm">Alle Schritte vom Verkaufsentschluss bis zur Übergabe</p>
            </Link>
            <Link
              href="/ratgeber/kapitalanlage-immobilien"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">Kapitalanlage Immobilien im Allgäu</h3>
              <p className="text-gray-600 text-sm">Lohnt sich die Investition? Renditen, Risiken & Tipps</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
