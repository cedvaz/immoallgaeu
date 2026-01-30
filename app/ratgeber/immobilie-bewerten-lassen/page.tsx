import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilie bewerten lassen – So ermitteln Sie den echten Marktwert | ImmoAllgäu",
  description: "Immobilie bewerten lassen im Allgäu: Kostenlose Hausbewertung, Bewertungsverfahren & Faktoren. Was ist mein Haus wert? Jetzt kostenlos ermitteln!",
  keywords: "Immobilie bewerten lassen, Hausbewertung kostenlos, Immobilienwert ermitteln, Was ist mein Haus wert, Immobilienbewertung Allgäu, Verkehrswert berechnen",
};

export default function ImmobilieBewerten() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/ratgeber" className="hover:text-primary-600">Ratgeber</Link>
            <span className="mx-2">/</span>
            <span>Immobilie bewerten lassen</span>
          </nav>
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📊 Bewertung & Wertermittlung
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilie bewerten lassen – So ermitteln Sie den echten Marktwert
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Alles über kostenlose & professionelle Immobilienbewertung: Verfahren, Faktoren, 
            Kosten und wie Sie den realistischen Verkaufspreis ermitteln
          </p>
          <div className="flex gap-4 text-sm text-gray-600 mb-8">
            <span>⏱ Lesezeit: 11 Min.</span>
            <span>📅 Aktualisiert: Januar 2025</span>
            <span>📊 Praxisrelevant</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Kostenlose Erstbewertung</div>
                <div className="text-sm text-gray-600">In nur 2 Minuten zum geschätzten Marktwert</div>
              </div>
            </div>
            <Link
              href="/immobilienbewertung"
              className="btn-primary w-full text-center block"
            >
              Jetzt kostenlos bewerten lassen →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-medium text-gray-900 mb-2">Schnellnavigation:</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#warum" className="text-primary-600 hover:underline">Warum bewerten?</a>
            <a href="#verfahren" className="text-primary-600 hover:underline">Bewertungsverfahren</a>
            <a href="#faktoren" className="text-primary-600 hover:underline">Bewertungsfaktoren</a>
            <a href="#kostenlos-vs-kostenpflichtig" className="text-primary-600 hover:underline">Kostenlos vs. Kostenpflichtig</a>
            <a href="#ablauf" className="text-primary-600 hover:underline">Ablauf</a>
            <a href="#fehler" className="text-primary-600 hover:underline">Häufige Fehler</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Einleitung */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Sie möchten Ihre Immobilie im Allgäu verkaufen, erben oder einfach wissen, was Ihr Haus 
              oder Ihre Wohnung wert ist? Eine <strong>professionelle Immobilienbewertung</strong> ist 
              der erste und wichtigste Schritt. Hier erfahren Sie, wie Bewertungen funktionieren, welche 
              Verfahren es gibt und wie Sie den <strong>realistischen Marktwert</strong> ermitteln.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">📌 Das Wichtigste in Kürze:</h3>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• Eine Immobilienbewertung ermittelt den <strong>Verkehrswert</strong> (Marktwert)</li>
                <li>• Es gibt <strong>3 Bewertungsverfahren</strong>: Vergleichswert, Ertragswert, Sachwert</li>
                <li>• <strong>Kostenlose Online-Bewertungen</strong> geben erste Richtwerte (in 2 Minuten)</li>
                <li>• <strong>Professionelle Gutachten</strong> sind verbindlich & kosten 500-2.000 €</li>
                <li>• Wichtigste Faktoren: <strong>Lage, Zustand, Größe, Ausstattung, Marktlage</strong></li>
              </ul>
            </div>

            {/* Warum bewerten lassen? */}
            <h2 id="warum" className="text-3xl font-bold mt-12 mb-6">
              Warum sollten Sie Ihre Immobilie bewerten lassen?
            </h2>

            <p className="mb-6">
              Eine <strong>realistische Immobilienbewertung</strong> ist in vielen Situationen unverzichtbar:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="card p-6 border-l-4 border-primary-600">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">💰</span> Beim Verkauf
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Setzen Sie den <strong>optimalen Angebotspreis</strong>:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Zu hoch → keine Interessenten</li>
                  <li>• Zu niedrig → Geld verschenkt</li>
                  <li>• Realistisch → schneller Verkauf zum besten Preis</li>
                </ul>
              </div>

              <div className="card p-6 border-l-4 border-secondary-600">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏛️</span> Bei Erbschaft
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Ermittlung für:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Erbschaftssteuer</strong>-Berechnung</li>
                  <li>• <strong>Aufteilung</strong> bei Erbengemeinschaft</li>
                  <li>• <strong>Verkaufsentscheidung</strong> treffen</li>
                </ul>
              </div>

              <div className="card p-6 border-l-4 border-accent-600">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span> Bei Scheidung
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Grundlage für:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Zugewinnausgleich</strong></li>
                  <li>• <strong>Realteilung</strong> oder Verkauf</li>
                  <li>• <strong>Auszahlung</strong> eines Partners</li>
                </ul>
              </div>

              <div className="card p-6 border-l-4 border-green-600">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏦</span> Bei Finanzierung
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Wichtig für:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Beleihungswert</strong> der Bank</li>
                  <li>• <strong>Kredithöhe</strong> ermitteln</li>
                  <li>• <strong>Refinanzierung</strong> prüfen</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">⚠️ Wichtig zu wissen:</h3>
              <p className="text-gray-700">
                Der <strong>emotionale Wert</strong> Ihrer Immobilie ist meist höher als der 
                <strong> Marktwert</strong>. Erinnerungen, persönliche Gestaltung und Sentimentalität 
                spielen bei der Bewertung <strong>keine Rolle</strong> – nur objektive Faktoren zählen.
              </p>
            </div>

            {/* Die 3 Bewertungsverfahren */}
            <h2 id="verfahren" className="text-3xl font-bold mt-12 mb-6">
              Die 3 Bewertungsverfahren im Detail
            </h2>

            <p className="mb-6">
              In Deutschland gibt es <strong>drei standardisierte Verfahren</strong> zur Immobilienbewertung, 
              die je nach Objekttyp angewendet werden:
            </p>

            {/* Vergleichswertverfahren */}
            <div className="card p-8 mb-8 border-2 border-primary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">Vergleichswertverfahren</h3>
                  <p className="text-sm text-gray-600 italic">Am häufigsten genutzt für Wohnimmobilien</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3">📊 Wie funktioniert's?</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Der Wert wird durch <strong>Vergleich mit ähnlichen Immobilien</strong> ermittelt, 
                  die kürzlich in der Region verkauft wurden.
                </p>
                <p className="text-sm text-gray-700 font-semibold">
                  Formel: <code className="bg-white px-2 py-1 rounded">Verkaufspreis = Vergleichspreis × Wohnfläche × Zu-/Abschläge</code>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✓ Anwendung für:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Eigentumswohnungen</li>
                    <li>✓ Einfamilienhäuser</li>
                    <li>✓ Reihenhäuser</li>
                    <li>✓ Doppelhaushälften</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📍 Voraussetzung:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Ausreichend Vergleichsobjekte</li>
                    <li>• Ähnliche Lage & Ausstattung</li>
                    <li>• Aktuelle Verkaufsdaten</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-3 text-sm">💡 Beispiel Allgäu:</h4>
                <p className="text-sm text-gray-700">
                  Eine 80m² Wohnung in Kempten: Vergleichsobjekte wurden für durchschnittlich 
                  <strong> 4.200 €/m²</strong> verkauft. <br/>
                  → Geschätzter Wert: <strong>80m² × 4.200 € = 336.000 €</strong> (vor Zu-/Abschlägen)
                </p>
              </div>
            </div>

            {/* Ertragswertverfahren */}
            <div className="card p-8 mb-8 border-2 border-secondary-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-600 mb-2">Ertragswertverfahren</h3>
                  <p className="text-sm text-gray-600 italic">Für vermietete Immobilien & Renditeobjekte</p>
                </div>
              </div>

              <div className="bg-secondary-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3">📊 Wie funktioniert's?</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Der Wert basiert auf den <strong>erzielbaren Mieteinnahmen</strong> und dem 
                  <strong> Bodenwert</strong>.
                </p>
                <p className="text-sm text-gray-700 font-semibold">
                  Formel: <code className="bg-white px-2 py-1 rounded text-xs">Ertragswert = Bodenwert + (Jahresreinertrag × Vervielfältiger)</code>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✓ Anwendung für:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Mehrfamilienhäuser</li>
                    <li>✓ Vermietete Wohnungen</li>
                    <li>✓ Gewerbeimmobilien</li>
                    <li>✓ Renditeobjekte</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📍 Wichtige Faktoren:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jahresreinertrag (Miete - Kosten)</li>
                    <li>• Liegenschaftszinssatz</li>
                    <li>• Restnutzungsdauer</li>
                    <li>• Bodenwert</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-3 text-sm">💡 Beispiel Allgäu:</h4>
                <p className="text-sm text-gray-700">
                  Mehrfamilienhaus mit 4 Wohnungen, Jahresreinertrag <strong>24.000 €</strong>, 
                  Vervielfältiger <strong>15</strong>, Bodenwert <strong>100.000 €</strong><br/>
                  → Ertragswert: <strong>100.000 € + (24.000 € × 15) = 460.000 €</strong>
                </p>
              </div>
            </div>

            {/* Sachwertverfahren */}
            <div className="card p-8 mb-8 border-2 border-accent-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-accent-600 mb-2">Sachwertverfahren</h3>
                  <p className="text-sm text-gray-600 italic">Für selbstgenutzte Immobilien ohne Vergleichswerte</p>
                </div>
              </div>

              <div className="bg-accent-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3">📊 Wie funktioniert's?</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Der Wert ergibt sich aus <strong>Bodenwert + Gebäudesachwert</strong> 
                  (Herstellungskosten minus Alterswertminderung).
                </p>
                <p className="text-sm text-gray-700 font-semibold">
                  Formel: <code className="bg-white px-2 py-1 rounded text-xs">Sachwert = Bodenwert + (Herstellungskosten - Alterswertminderung)</code>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✓ Anwendung für:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Selbstgenutzte Einfamilienhäuser</li>
                    <li>✓ Spezialimmobilien</li>
                    <li>✓ Denkmalgeschützte Objekte</li>
                    <li>✓ Wenn keine Vergleichswerte existieren</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📍 Wichtige Faktoren:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Bodenrichtwert</li>
                    <li>• Gebäudegröße (m²/m³)</li>
                    <li>• Baukosten pro m²</li>
                    <li>• Alter & Zustand</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-3 text-sm">💡 Beispiel Allgäu:</h4>
                <p className="text-sm text-gray-700">
                  Einfamilienhaus (150m²), Bodenwert <strong>150.000 €</strong>, 
                  Herstellungskosten <strong>2.000 €/m² = 300.000 €</strong>, 
                  Alterswertminderung <strong>30% = 90.000 €</strong><br/>
                  → Sachwert: <strong>150.000 € + (300.000 € - 90.000 €) = 360.000 €</strong>
                </p>
              </div>
            </div>

            {/* Bewertungsfaktoren */}
            <h2 id="faktoren" className="text-3xl font-bold mt-12 mb-6">
              Die wichtigsten Bewertungsfaktoren
            </h2>

            <p className="mb-6">
              Der Wert einer Immobilie wird von <strong>vielen Faktoren</strong> beeinflusst. 
              Hier sind die wichtigsten:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl">📍</div>
                  <h3 className="font-bold text-lg">1. Lage, Lage, Lage</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Der wichtigste Faktor!</strong> Die Lage entscheidet über bis zu 50% des Wertes.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Makrolage:</strong> Stadt vs. Land (Kempten vs. Dorf)</li>
                  <li>• <strong>Mikrolage:</strong> Straße, Nachbarschaft, Lärmbelastung</li>
                  <li>• <strong>Infrastruktur:</strong> Schulen, Ärzte, Einkaufen, ÖPNV</li>
                  <li>• <strong>Tourismus:</strong> Oberstdorf > Kaufbeuren (Nachfrage!)</li>
                </ul>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary-600 text-white rounded-full flex items-center justify-center text-xl">🏠</div>
                  <h3 className="font-bold text-lg">2. Zustand & Alter</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Modernisierung und Instandhaltung haben großen Einfluss.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Baujahr:</strong> Neubauten wertvoller</li>
                  <li>• <strong>Sanierungen:</strong> Dach, Fenster, Heizung</li>
                  <li>• <strong>Energieeffizienz:</strong> Energieausweis A-G</li>
                  <li>• <strong>Sichtbare Mängel:</strong> Feuchtigkeit, Risse</li>
                </ul>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-600 text-white rounded-full flex items-center justify-center text-xl">📐</div>
                  <h3 className="font-bold text-lg">3. Größe & Grundriss</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Größer ist nicht immer besser – auf die richtige Aufteilung kommt es an.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Wohnfläche:</strong> m² Preis sinkt bei großen Objekten</li>
                  <li>• <strong>Grundstücksgröße:</strong> Wichtig bei Häusern</li>
                  <li>• <strong>Raumaufteilung:</strong> Funktional vs. verschachtelt</li>
                  <li>• <strong>Anzahl Zimmer:</strong> Zielgruppe beachten</li>
                </ul>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-xl">✨</div>
                  <h3 className="font-bold text-lg">4. Ausstattung</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Von einfach bis luxuriös – die Ausstattung macht den Unterschied.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Küche & Bad:</strong> Modern vs. veraltet</li>
                  <li>• <strong>Bodenbeläge:</strong> Parkett vs. Laminat</li>
                  <li>• <strong>Extras:</strong> Fußbodenheizung, Smart Home</li>
                  <li>• <strong>Außenanlagen:</strong> Balkon, Terrasse, Garten</li>
                </ul>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl">📈</div>
                  <h3 className="font-bold text-lg">5. Marktlage</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Angebot und Nachfrage bestimmen den Preis.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Nachfrage:</strong> Viele Käufer = höhere Preise</li>
                  <li>• <strong>Angebot:</strong> Wenig Objekte = Verkäufermarkt</li>
                  <li>• <strong>Zinsentwicklung:</strong> Niedrige Zinsen = mehr Nachfrage</li>
                  <li>• <strong>Wirtschaftslage:</strong> Allgäu = stabil & attraktiv</li>
                </ul>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-xl">⚖️</div>
                  <h3 className="font-bold text-lg">6. Rechtliches</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Rechtliche Rahmenbedingungen können den Wert beeinflussen.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Grundbuch:</strong> Lasten, Wegerechte, Erbbaurecht</li>
                  <li>• <strong>Bebauungsplan:</strong> Einschränkungen beachten</li>
                  <li>• <strong>Denkmalschutz:</strong> Auflagen & Förderungen</li>
                  <li>• <strong>Altlasten:</strong> Kontaminierte Böden</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 my-10">
              <h3 className="font-bold text-xl mb-4">🎯 Wertsteigerungspotenzial nutzen:</h3>
              <p className="text-gray-700 mb-4">
                Sie können den Wert Ihrer Immobilie durch gezielte Maßnahmen steigern:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold mb-2 text-green-600">💰 Hohe Rendite:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Küche modernisieren</li>
                    <li>• Bad renovieren</li>
                    <li>• Fassade streichen</li>
                    <li>• Garten pflegen</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold mb-2 text-yellow-600">⚡ Mittlere Rendite:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Neue Fenster</li>
                    <li>• Dämmung verbessern</li>
                    <li>• Heizung erneuern</li>
                    <li>• Böden erneuern</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold mb-2 text-red-600">🚫 Geringe Rendite:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pool einbauen</li>
                    <li>• Luxus-Ausstattung</li>
                    <li>• Individuelle Umbauten</li>
                    <li>• Extravagante Farben</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kostenlos vs. Kostenpflichtig */}
            <h2 id="kostenlos-vs-kostenpflichtig" className="text-3xl font-bold mt-12 mb-6">
              Kostenlose vs. kostenpflichtige Bewertung
            </h2>

            <p className="mb-6">
              Es gibt verschiedene Arten von Immobilienbewertungen – von kostenlos bis mehrere tausend Euro. 
              Welche ist die richtige für Sie?
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Bewertungsart</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Kosten</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Dauer</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Genauigkeit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Wofür geeignet?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Online-Bewertung</div>
                      <div className="text-xs text-gray-600">(wie bei uns)</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Kostenlos</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">2 Minuten</td>
                    <td className="px-6 py-4">
                      <div className="text-yellow-600 font-semibold">± 10-20%</div>
                      <div className="text-xs text-gray-600">Richtwert</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      • Erste Orientierung<br/>
                      • Verkaufsüberlegung<br/>
                      • Marktcheck
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Makler-Bewertung</div>
                      <div className="text-xs text-gray-600">(Marktwertanalyse)</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Kostenlos</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">1-3 Tage</td>
                    <td className="px-6 py-4">
                      <div className="text-green-600 font-semibold">± 5-10%</div>
                      <div className="text-xs text-gray-600">Marktorientiert</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      • Verkaufsvorbereitung<br/>
                      • Preisfindung<br/>
                      • Vermarktung
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Kurzgutachten</div>
                      <div className="text-xs text-gray-600">(durch Sachverständigen)</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">500-1.000 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">1-2 Wochen</td>
                    <td className="px-6 py-4">
                      <div className="text-green-600 font-semibold">± 3-5%</div>
                      <div className="text-xs text-gray-600">Sehr genau</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      • Erbschaft<br/>
                      • Scheidung<br/>
                      • Behörden
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">Vollgutachten</div>
                      <div className="text-xs text-gray-600">(nach §194 BauGB)</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">1.500-3.000 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">3-6 Wochen</td>
                    <td className="px-6 py-4">
                      <div className="text-green-700 font-semibold">± 1-3%</div>
                      <div className="text-xs text-gray-600">Gerichtsfest</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      • Gerichtsverfahren<br/>
                      • Enteignung<br/>
                      • Finanzamt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">💡 Unsere Empfehlung:</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>1. Start:</strong> Kostenlose Online-Bewertung für ersten Richtwert (2 Minuten bei uns)
                </p>
                <p>
                  <strong>2. Verkauf:</strong> Makler-Bewertung für realistischen Verkaufspreis (kostenlos)
                </p>
                <p>
                  <strong>3. Rechtsstreit/Finanzamt:</strong> Professionelles Gutachten (kostenpflichtig, aber verbindlich)
                </p>
              </div>
            </div>

            {/* Ablauf der Bewertung */}
            <h2 id="ablauf" className="text-3xl font-bold mt-12 mb-6">
              So läuft eine professionelle Immobilienbewertung ab
            </h2>

            <div className="space-y-6 mb-10">
              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Datenaufnahme</h3>
                    <p className="text-gray-700 mb-3">
                      Erfassung aller relevanten Objektdaten:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Grundbuchauszug & Flurkarte</li>
                      <li>• Baupläne & Baubeschreibung</li>
                      <li>• Energieausweis</li>
                      <li>• Modernisierungsnachweise</li>
                      <li>• Fotos (innen & außen)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Objektbesichtigung</h3>
                    <p className="text-gray-700 mb-3">
                      Vor-Ort-Termin zur detaillierten Bestandsaufnahme:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Prüfung des Zustands (Dach, Fassade, Fenster, etc.)</li>
                      <li>• Ausstattungsmerkmale dokumentieren</li>
                      <li>• Mängel & Schäden erfassen</li>
                      <li>• Raumaufteilung & Nutzbarkeit bewerten</li>
                      <li>• Umfeld & Lage analysieren</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Marktanalyse</h3>
                    <p className="text-gray-700 mb-3">
                      Recherche vergleichbarer Objekte:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Verkaufte Objekte in der Region</li>
                      <li>• Aktuelle Angebote analysieren</li>
                      <li>• Preisentwicklung berücksichtigen</li>
                      <li>• Angebot-Nachfrage-Verhältnis prüfen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Wertberechnung</h3>
                    <p className="text-gray-700 mb-3">
                      Anwendung des passenden Bewertungsverfahrens:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Vergleichswert-, Ertrags- oder Sachwertverfahren</li>
                      <li>• Zu- & Abschläge für Besonderheiten</li>
                      <li>• Marktwertermittlung</li>
                      <li>• Preisspanne definieren (Min-Max)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Ergebnis & Empfehlung</h3>
                    <p className="text-gray-700 mb-3">
                      Präsentation der Bewertung:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Schriftliches Gutachten / Bewertungsbericht</li>
                      <li>• Verkehrswert & realistische Preisspanne</li>
                      <li>• Erläuterung der Bewertungsfaktoren</li>
                      <li>• Handlungsempfehlungen für Verkauf</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 my-10">
              <h3 className="font-bold text-xl mb-4">⏱️ Zeitaufwand:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">2 Min</div>
                  <div className="text-sm text-gray-700">Online-Bewertung (sofort)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">1-3 Tage</div>
                  <div className="text-sm text-gray-700">Makler-Bewertung</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">3-6 Wochen</div>
                  <div className="text-sm text-gray-700">Vollgutachten</div>
                </div>
              </div>
            </div>

            {/* Häufige Fehler */}
            <h2 id="fehler" className="text-3xl font-bold mt-12 mb-6">
              Häufige Fehler bei der Immobilienbewertung
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Emotionale Überbewertung</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Fehler:</strong> "Ich habe 50.000 € investiert, also ist meine Immobilie 
                  jetzt 50.000 € mehr wert."<br/><br/>
                  <strong>Realität:</strong> Der Markt entscheidet, nicht Ihre Investitionen. 
                  Individuelle Umbauten steigern oft nicht den Wert.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Falsche Vergleichsobjekte</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Fehler:</strong> "Die Wohnung in München kostet 8.000 €/m², also ist 
                  meine auch so viel wert."<br/><br/>
                  <strong>Realität:</strong> Nur Objekte in <strong>derselben Region & Lage</strong> 
                  sind vergleichbar. Allgäu ≠ München.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Mängel verschweigen</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Fehler:</strong> Feuchtigkeit, Schimmel oder alte Heizung nicht erwähnen.<br/><br/>
                  <strong>Realität:</strong> Mängel kommen spätestens beim Verkauf ans Licht. 
                  Ehrlichkeit spart Zeit & Ärger.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Unrealistische Angebotspreise</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Fehler:</strong> Verkaufspreis 30% über Marktwert ansetzen.<br/><br/>
                  <strong>Realität:</strong> Zu hohe Preise führen zu langer Vermarktungsdauer, 
                  Preissenkungen und letztlich <strong>niedrigerem Verkaufspreis</strong>.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Veraltete Daten nutzen</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Fehler:</strong> Bewertung von vor 5 Jahren als Grundlage nutzen.<br/><br/>
                  <strong>Realität:</strong> Der Immobilienmarkt ändert sich ständig. 
                  Aktuelle Marktdaten sind <strong>essentiell</strong>.
                </p>
              </div>

              <div className="card p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Lage unterschätzen</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Fehler:</strong> "Die Immobilie ist schön, die Lage spielt keine Rolle."<br/><br/>
                  <strong>Realität:</strong> Die Lage macht oft <strong>50% des Wertes</strong> aus. 
                  Selbst eine perfekte Immobilie verliert in schlechter Lage an Wert.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold mt-12 mb-6">
              Häufig gestellte Fragen zur Immobilienbewertung
            </h2>

            <div className="space-y-4">
              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wie genau ist eine kostenlose Online-Bewertung?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Eine kostenlose Online-Bewertung liefert einen <strong>Richtwert mit ± 10-20% Abweichung</strong>. 
                  Sie basiert auf statistischen Daten und Vergleichswerten aus der Region, berücksichtigt aber 
                  keine individuellen Besonderheiten wie Zustand, Ausstattung oder Mikrolage. Als 
                  <strong> erste Orientierung</strong> ist sie perfekt – für den Verkauf sollten Sie 
                  eine detaillierte Bewertung durch einen Makler oder Gutachter einholen.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Brauche ich für den Verkauf ein kostenpflichtiges Gutachten?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  <strong>Nein</strong>, für einen normalen Immobilienverkauf reicht eine 
                  <strong> kostenlose Makler-Bewertung</strong> völlig aus. Ein kostenpflichtiges 
                  Gutachten ist nur nötig bei: Gerichtsverfahren (Scheidung, Erbstreit), Finanzamt 
                  (Erbschaftssteuer, Schenkungssteuer), Behörden (Enteignung) oder wenn Sie einen 
                  <strong> gerichtsfesten Nachweis</strong> benötigen.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wie oft sollte ich meine Immobilie bewerten lassen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Das hängt von Ihrer Situation ab:<br/><br/>
                  • <strong>Beim Verkauf:</strong> Immer unmittelbar vor Vermarktung (aktuelle Marktdaten!)<br/>
                  • <strong>Als Eigentümer:</strong> Alle 3-5 Jahre zur Übersicht Ihres Vermögens<br/>
                  • <strong>Bei großen Renovierungen:</strong> Vorher & nachher zur Kontrolle der Wertsteigerung<br/>
                  • <strong>Bei Erbschaft/Scheidung:</strong> Zum Zeitpunkt des Ereignisses<br/><br/>
                  <strong>Wichtig:</strong> Bewertungen verlieren nach 6-12 Monaten an Aktualität!
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Kann ich die Bewertung auch selbst durchführen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  <strong>Ja</strong>, aber mit Einschränkungen. Sie können:<br/><br/>
                  • <strong>Online-Rechner</strong> nutzen (wie unseren) für Richtwert<br/>
                  • <strong>Vergleichsobjekte</strong> auf Immobilienportalen recherchieren<br/>
                  • <strong>Bodenrichtwerte</strong> beim Gutachterausschuss einsehen<br/><br/>
                  <strong>Aber:</strong> Ohne Fachwissen und Marktkenntnisse fehlt Ihnen die 
                  <strong> objektive Perspektive</strong>. Eigenheimbesitzer überschätzen ihren 
                  Immobilienwert im Durchschnitt um 20-30%. Eine professionelle Bewertung ist 
                  daher empfehlenswert.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Welche Unterlagen brauche ich für eine Bewertung?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Für eine detaillierte Bewertung sind folgende Unterlagen hilfreich:<br/><br/>
                  <strong>Pflicht:</strong><br/>
                  • Grundbuchauszug<br/>
                  • Flurkarte / Lageplan<br/>
                  • Wohnflächenberechnung<br/><br/>
                  <strong>Sehr hilfreich:</strong><br/>
                  • Baupläne / Grundrisse<br/>
                  • Energieausweis<br/>
                  • Baubeschreibung<br/>
                  • Modernisierungsnachweise<br/><br/>
                  <strong>Optional:</strong><br/>
                  • Nebenkostenabrechnungen<br/>
                  • Mietverträge (bei Vermietung)<br/>
                  • Wartungsprotokolle (Heizung, etc.)<br/><br/>
                  <strong>Hinweis:</strong> Für unsere kostenlose Online-Bewertung brauchen Sie 
                  <strong>keine Unterlagen</strong> – nur Adresse & Objektdaten eingeben!
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Was kostet ein professionelles Gutachten?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Die Kosten hängen von Objekttyp, Umfang und Gutachter ab:<br/><br/>
                  • <strong>Kurzgutachten:</strong> 500-1.000 € (ca. 0,5% des Verkehrswerts)<br/>
                  • <strong>Verkehrswertgutachten:</strong> 1.000-2.000 € (ca. 1% des Verkehrswerts)<br/>
                  • <strong>Vollgutachten (§194 BauGB):</strong> 1.500-3.000 € (bei komplexen Objekten mehr)<br/><br/>
                  <strong>Beispiel:</strong> Einfamilienhaus mit Verkehrswert 400.000 €:<br/>
                  → Kurzgutachten: ca. 800 €<br/>
                  → Vollgutachten: ca. 1.500-2.000 €<br/><br/>
                  <strong>Tipp:</strong> Makler bieten kostenlose Bewertungen an – oft ausreichend für Verkauf!
                </div>
              </details>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ 100% kostenlos & unverbindlich
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Was ist Ihre Immobilie im Allgäu wert?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Erhalten Sie in nur 2 Minuten eine kostenlose Erstbewertung basierend auf aktuellen Marktdaten
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2 Min</div>
                <div className="text-sm text-white/80">Zeitaufwand</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0 €</div>
                <div className="text-sm text-white/80">Kosten</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">Kostenlos</div>
              </div>
            </div>
          </div>
          <Link
            href="/immobilienbewertung"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-10 py-5 rounded-xl text-lg font-bold shadow-hard hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Jetzt kostenlos bewerten lassen</span>
          </Link>
          <p className="mt-6 text-sm text-white/70">
            Über 500+ Bewertungen durchgeführt • Basierend auf echten Verkaufsdaten aus dem Allgäu
          </p>
        </div>
      </section>

      {/* Weitere Ratgeber */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Das könnte Sie auch interessieren</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/ratgeber/immobilie-verkaufen"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Immobilie verkaufen
              </h3>
              <p className="text-gray-600 text-sm">Der komplette Ablauf für erfolgreichen Verkauf</p>
            </Link>
            <Link
              href="/ratgeber/immobilie-erben"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Immobilie erben
              </h3>
              <p className="text-gray-600 text-sm">Verkaufen, behalten oder vermieten? Alle Optionen</p>
            </Link>
            <Link
              href="/ratgeber/immobilienpreise-allgaeu-2025"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Immobilienpreise Allgäu 2025
              </h3>
              <p className="text-gray-600 text-sm">Aktuelle Marktpreise & Prognosen</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
