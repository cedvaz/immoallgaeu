import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilie verkaufen im Allgäu – Der komplette Ablauf 2025 | ImmoAllgäu",
  description: "Immobilie erfolgreich verkaufen: Vorbereitung, Preisfindung, Vermarktung, Besichtigungen und Vertragsabschluss. Expertentipps vom regionalen Makler.",
};

export default function ImmobilieVerkaufenPage() {
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
            <span>Immobilie verkaufen</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilie verkaufen im Allgäu – Der komplette Ablauf
          </h1>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>⏱ Lesezeit: 10 Min.</span>
            <span>📅 Aktualisiert: Januar 2025</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Der Verkauf einer Immobilie ist eine wichtige Entscheidung, die gute Vorbereitung erfordert.
              In diesem Guide erfahren Sie alles über den Verkaufsprozess im Allgäu – von der Vorbereitung
              über die Preisfindung bis zum erfolgreichen Abschluss.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Die richtige Vorbereitung
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Unterlagen zusammenstellen</h3>
            <p>
              Bevor Sie mit dem Verkauf starten, sollten Sie alle wichtigen Dokumente vorbereiten:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h4 className="font-semibold text-lg mb-3">📄 Wichtige Unterlagen:</h4>
              <ul className="space-y-2">
                <li><strong>Grundbuchauszug</strong> (nicht älter als 3 Monate)</li>
                <li><strong>Energieausweis</strong> (Pflicht seit 2014)</li>
                <li><strong>Baupläne & Grundrisse</strong></li>
                <li><strong>Wohnflächenberechnung</strong></li>
                <li><strong>Baubeschreibung</strong></li>
                <li><strong>Renovierungs-/Modernisierungsnachweise</strong></li>
                <li><strong>Teilungserklärung</strong> (bei Eigentumswohnungen)</li>
                <li><strong>Protokolle der letzten 3 Eigentümerversammlungen</strong> (bei ETW)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Immobilie aufwerten</h3>
            <p>
              Kleine Investitionen können den Verkaufspreis deutlich erhöhen:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">✅ Lohnenswerte Maßnahmen:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Schönheitsreparaturen (Streichen)</li>
                  <li>✓ Kleine Reparaturen durchführen</li>
                  <li>✓ Garten pflegen & aufräumen</li>
                  <li>✓ Entrümpeln & neutralisieren</li>
                  <li>✓ Professionelle Reinigung</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">❌ Nicht empfehlenswert:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✗ Teure Umbauten</li>
                  <li>✗ Luxus-Modernisierungen</li>
                  <li>✗ Geschmackssache-Renovierungen</li>
                  <li>✗ Übertriebene Investitionen</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Den richtigen Preis finden
            </h2>

            <p>
              Die Preisfindung ist der wichtigste Schritt. Ein zu hoher Preis führt zu langer Vermarktungsdauer,
              ein zu niedriger Preis zu Geldverlust.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Methoden zur Preisermittlung</h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-lg mb-2">Vergleichswertverfahren</h4>
                <p>
                  Orientierung an vergleichbaren Objekten in der Region. Am besten für Eigentumswohnungen
                  und Standardhäuser geeignet.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-lg mb-2">Sachwertverfahren</h4>
                <p>
                  Berechnet den Wert aus Grundstück + Gebäudewert. Gut für individuell geplante Häuser.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-lg mb-2">Ertragswertverfahren</h4>
                <p>
                  Für vermietete Objekte. Berechnet auf Basis der erzielbaren Mieteinnahmen.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <h4 className="font-semibold text-lg mb-2">💡 Unser Tipp:</h4>
              <p className="mb-0">
                Nutzen Sie unsere <Link href="/immobilienbewertung" className="text-blue-600 hover:underline font-semibold">
                kostenlose Online-Bewertung</Link> für eine erste Einschätzung. Für den finalen Verkaufspreis
                empfehlen wir eine professionelle Bewertung vor Ort.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Makler oder Privatverkauf?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-4">Mit Makler</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-green-600">Vorteile:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>✓ Professionelle Vermarktung</li>
                      <li>✓ Marktkenntnis & Netzwerk</li>
                      <li>✓ Zeitersparnis</li>
                      <li>✓ Rechtssicherheit</li>
                      <li>✓ Bessere Verhandlungsposition</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-red-600">Nachteile:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>✗ Provision (ca. 3-4% + MwSt.)</li>
                      <li>✗ Weniger direkte Kontrolle</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-4">Privatverkauf</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-green-600">Vorteile:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>✓ Keine Maklerprovision</li>
                      <li>✓ Volle Kontrolle</li>
                      <li>✓ Direkter Kontakt zu Käufern</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-red-600">Nachteile:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>✗ Hoher Zeitaufwand</li>
                      <li>✗ Fehlende Marktkenntnis</li>
                      <li>✗ Emotionale Bindung</li>
                      <li>✗ Rechtliche Unsicherheiten</li>
                      <li>✗ Weniger Reichweite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Der Verkaufsprozess Schritt für Schritt
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Exposé erstellen</h3>
                    <p>Professionelle Fotos, aussagekräftige Beschreibung, alle wichtigen Daten.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vermarktung starten</h3>
                    <p>Inserate auf Immobilienportalen, lokale Zeitung, Social Media. Reichweite ist entscheidend!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Besichtigungen durchführen</h3>
                    <p>Terminkoordination, Vorbereitung der Immobilie, professionelle Präsentation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verhandlung & Kaufinteressenten prüfen</h3>
                    <p>Bonität prüfen, Finanzierungsbestätigung einholen, Preis verhandeln.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Notartermin & Kaufvertrag</h3>
                    <p>Notar beauftragt Kaufvertrag, Beurkundungstermin, Kaufpreiszahlung.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Übergabe</h3>
                    <p>Übergabeprotokoll, Schlüsselübergabe, Zählerstände notieren.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Typische Fallstricke vermeiden
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">⚠️ Häufige Fehler beim Verkauf:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Überhöhter Preis:</strong> Führt zu langer Vermarktungsdauer und Preisnachlässen.
                  Orientieren Sie sich an aktuellen Marktpreisen.
                </li>
                <li>
                  <strong>Schlechte Fotos:</strong> Der erste Eindruck zählt! Investieren Sie in professionelle Fotos.
                </li>
                <li>
                  <strong>Unvorbereitet in Besichtigungen:</strong> Entrümpeln, putzen, lüften – die Immobilie muss
                  einladend wirken.
                </li>
                <li>
                  <strong>Emotionale Bindung:</strong> Bleiben Sie sachlich bei Verhandlungen. Der Käufer interessiert
                  sich für Fakten, nicht für Erinnerungen.
                </li>
                <li>
                  <strong>Keine Käuferprüfung:</strong> Prüfen Sie die Bonität und Finanzierung BEVOR Sie den Notartermin
                  vereinbaren.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Verkaufsdauer & Timing
            </h2>

            <p>
              Im Allgäu liegt die durchschnittliche Vermarktungsdauer bei <strong>2-4 Monaten</strong>.
              Faktoren die die Dauer beeinflussen:
            </p>

            <ul>
              <li>Preis (zu hoch = länger)</li>
              <li>Lage (Top-Lagen verkaufen sich schneller)</li>
              <li>Zustand der Immobilie</li>
              <li>Jahreszeit (Frühling/Sommer sind aktiver)</li>
              <li>Marktlage</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-2">📅 Bestes Timing für den Verkauf:</h3>
              <p className="mb-0">
                Die beste Zeit für den Verkaufsstart ist <strong>Februar bis April</strong>. So können Sie die
                aktive Frühjahrs-Saison voll nutzen. Auch September/Oktober sind gute Zeitpunkte.
                Vermeiden Sie wenn möglich November/Dezember und die Ferienzeiten im Sommer.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Verkaufs-Checkliste
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Vorbereitung:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Alle Unterlagen vollständig</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Energieausweis besorgt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Immobilie aufgewertet & gereinigt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Verkehrswert ermittelt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Makler beauftragt (optional)</span>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-4">Vermarktung:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Professionelle Fotos erstellt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Exposé fertig</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Inserate geschaltet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Besichtigungstermine koordiniert</span>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-4">Abschluss:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Käufer geprüft (Bonität, Finanzierung)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Notar beauftragt</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Kaufvertrag unterschrieben</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span>Übergabeprotokoll erstellt</span>
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
            Bereit, Ihre Immobilie zu verkaufen?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Wir unterstützen Sie mit kostenloser Bewertung und professioneller Vermarktung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Kostenlose Bewertung
            </Link>
            <Link
              href="/kontakt"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Persönliche Beratung
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
              href="/ratgeber/haus-kaufen-allgaeu"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">Haus kaufen im Allgäu</h3>
              <p className="text-gray-600 text-sm">Der komplette Guide für Käufer</p>
            </Link>
            <Link
              href="/ratgeber/kapitalanlage-immobilien"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">Kapitalanlage Immobilien</h3>
              <p className="text-gray-600 text-sm">Lohnt sich die Investition im Allgäu?</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
