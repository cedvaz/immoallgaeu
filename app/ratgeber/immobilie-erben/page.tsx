import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilie erben – Verkaufen, behalten oder vermieten? | ImmoAllgäu",
  description: "Geerbtes Haus oder Wohnung im Allgäu: Alle Optionen, Steuern, Fristen & Tipps. Was tun bei Erbengemeinschaft? Kostenlose Bewertung & Beratung.",
  keywords: "Immobilie erben was tun, geerbtes Haus verkaufen, Erbimmobilie Steuer, Erbengemeinschaft Haus verkaufen, Immobilie geerbt Allgäu, Erbschaftssteuer Immobilie",
};

export default function ImmobilieErbenPage() {
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
            <span>Immobilie erben</span>
          </nav>
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🏡 Erbrecht & Immobilien
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilie erben – Verkaufen, behalten oder vermieten?
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Der komplette Ratgeber für Erben: Alle Optionen, steuerliche Aspekte, Erbengemeinschaft 
            und wie Sie die richtige Entscheidung treffen
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>⏱ Lesezeit: 12 Min.</span>
            <span>📅 Aktualisiert: Januar 2025</span>
            <span>⚖️ Rechtlich geprüft</span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-medium text-gray-900 mb-2">Schnellnavigation:</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#ueberblick" className="text-primary-600 hover:underline">Überblick</a>
            <a href="#optionen" className="text-primary-600 hover:underline">3 Optionen</a>
            <a href="#verkaufen" className="text-primary-600 hover:underline">Verkaufen</a>
            <a href="#behalten" className="text-primary-600 hover:underline">Behalten</a>
            <a href="#vermieten" className="text-primary-600 hover:underline">Vermieten</a>
            <a href="#steuern" className="text-primary-600 hover:underline">Steuern</a>
            <a href="#erbengemeinschaft" className="text-primary-600 hover:underline">Erbengemeinschaft</a>
            <a href="#ablauf" className="text-primary-600 hover:underline">Ablauf</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Einleitung */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Eine geerbte Immobilie im Allgäu bedeutet nicht nur einen materiellen Wert, sondern oft auch 
              emotionale Verbundenheit und wichtige Entscheidungen. Ob Sie das Elternhaus verkaufen, selbst 
              einziehen oder vermieten – jede Option hat Vor- und Nachteile. Dieser Ratgeber hilft Ihnen, 
              die richtige Entscheidung zu treffen.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">📌 Das Wichtigste in Kürze:</h3>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• Sie haben 3 Optionen: <strong>Verkaufen, Selbstnutzen oder Vermieten</strong></li>
                <li>• <strong>Erbschaftssteuer</strong> kann anfallen (Freibeträge beachten!)</li>
                <li>• Bei <strong>Erbengemeinschaft</strong> müssen alle zustimmen</li>
                <li>• <strong>Spekulationsfrist</strong> von 10 Jahren beim Verkauf relevant</li>
                <li>• Eine <strong>professionelle Bewertung</strong> ist der erste Schritt</li>
              </ul>
            </div>

            {/* Die 3 Optionen im Überblick */}
            <h2 id="optionen" className="text-3xl font-bold mt-12 mb-6">
              Ihre 3 Optionen im Überblick
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="card p-6 border-2 border-primary-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-xl mb-3 text-primary-600">Verkaufen</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Vorteile:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Sofortige Liquidität</li>
                    <li>• Keine laufenden Kosten</li>
                    <li>• Klare Vermögensaufteilung</li>
                  </ul>
                  <p className="mt-3"><strong>Nachteile:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Emotionale Trennung</li>
                    <li>• Evtl. Spekulationssteuer</li>
                    <li>• Wertsteigerung entgeht</li>
                  </ul>
                </div>
              </div>

              <div className="card p-6 border-2 border-secondary-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-bold text-xl mb-3 text-secondary-600">Selbst nutzen</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Vorteile:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Emotionaler Wert bleibt</li>
                    <li>• Keine Mietkosten</li>
                    <li>• Wertsteigerung nutzen</li>
                  </ul>
                  <p className="mt-3"><strong>Nachteile:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Laufende Kosten</li>
                    <li>• Instandhaltung nötig</li>
                    <li>• Kapital gebunden</li>
                  </ul>
                </div>
              </div>

              <div className="card p-6 border-2 border-accent-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🔑</div>
                <h3 className="font-bold text-xl mb-3 text-accent-600">Vermieten</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Vorteile:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Regelmäßige Einnahmen</li>
                    <li>• Wertsteigerung nutzen</li>
                    <li>• Steuervorteile</li>
                  </ul>
                  <p className="mt-3"><strong>Nachteile:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Verwaltungsaufwand</li>
                    <li>• Mieterrisiko</li>
                    <li>• Instandhaltungspflicht</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 1: Verkaufen */}
            <h2 id="verkaufen" className="text-3xl font-bold mt-12 mb-6">
              Option 1: Geerbte Immobilie verkaufen
            </h2>

            <p className="mb-6">
              Der <strong>Verkauf einer geerbten Immobilie</strong> ist oft die klarste Lösung, besonders 
              wenn mehrere Erben beteiligt sind oder niemand die Immobilie nutzen möchte.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">✓ Wann ist Verkaufen sinnvoll?</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Erbengemeinschaft:</strong> Mehrere Erben möchten die Immobilie nicht gemeinsam verwalten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Liquiditätsbedarf:</strong> Sie benötigen das Geld für andere Zwecke</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Hoher Renovierungsbedarf:</strong> Die Immobilie ist sanierungsbedürftig</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Große Entfernung:</strong> Die Immobilie liegt zu weit weg für Eigennutzung oder Verwaltung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Keine emotionale Bindung:</strong> Kein Interesse an der Immobilie</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">💡 Wichtig beim Verkauf:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h4 className="font-semibold mb-3">⚠️ Spekulationsfrist beachten</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Wenn die Immobilie <strong>vom Erblasser</strong> als Eigenheim genutzt wurde oder 
                  Sie sie <strong>nach Erbschaft 3 Jahre selbst bewohnen</strong>, fällt beim Verkauf 
                  <strong>keine Spekulationssteuer</strong> an.
                </p>
                <p className="text-sm text-gray-700">
                  Andernfalls gilt die <strong>10-Jahres-Frist</strong> ab Kauf durch den Erblasser.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="font-semibold mb-3">📊 Verkaufspreis ermitteln</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Eine <strong>professionelle Bewertung</strong> ist essentiell für:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Realistischen Verkaufspreis</li>
                  <li>• Erbschaftssteuer-Berechnung</li>
                  <li>• Faire Aufteilung bei Erbengemeinschaft</li>
                  <li>• Verkaufsverhandlungen</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 my-8">
              <h3 className="font-bold text-xl mb-4">🎯 Ablauf Verkauf einer Erbimmobilie:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">Erbschein beantragen</div>
                    <div className="text-sm text-gray-600">Legitimation gegenüber Käufer & Notar</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Immobilie bewerten lassen</div>
                    <div className="text-sm text-gray-600">Verkehrswert ermitteln (kostenlos bei uns)</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Unterlagen zusammenstellen</div>
                    <div className="text-sm text-gray-600">Grundbuch, Baupläne, Energieausweis, etc.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Immobilie vermarkten</div>
                    <div className="text-sm text-gray-600">Exposé erstellen, Besichtigungen durchführen</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div>
                    <div className="font-semibold text-gray-900">Notartermin & Übergabe</div>
                    <div className="text-sm text-gray-600">Kaufvertrag beurkunden, Immobilie übergeben</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Selbst nutzen */}
            <h2 id="behalten" className="text-3xl font-bold mt-12 mb-6">
              Option 2: Geerbte Immobilie selbst nutzen
            </h2>

            <p className="mb-6">
              Die <strong>Eigennutzung der geerbten Immobilie</strong> ist besonders dann attraktiv, 
              wenn Sie ohnehin eine Wohnung oder ein Haus im Allgäu suchen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">✓ Wann ist Selbstnutzung sinnvoll?</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Emotionale Bindung:</strong> Das Elternhaus hat sentimentalen Wert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Passende Größe & Lage:</strong> Die Immobilie entspricht Ihren Bedürfnissen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Guter Zustand:</strong> Nur moderate Renovierungen nötig</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Finanzielle Tragbarkeit:</strong> Sie können laufende Kosten stemmen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Langfristige Perspektive:</strong> Sie planen, dauerhaft im Allgäu zu bleiben</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">⚠️ Wichtige Kostenpunkte bei Eigennutzung:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Laufende Kosten:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Grundsteuer</li>
                    <li>• Gebäudeversicherung</li>
                    <li>• Müllabfuhr & Abwasser</li>
                    <li>• Heizung & Strom</li>
                    <li>• Schornsteinfeger</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Instandhaltung:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Rücklagen bilden (ca. 1-2% des Immobilienwerts/Jahr)</li>
                    <li>• Dach, Fassade, Heizung</li>
                    <li>• Modernisierung (Energetik)</li>
                    <li>• Gartenpflege</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">
                <strong>Faustregel:</strong> Rechnen Sie mit ca. 3-4 €/m² monatlich für laufende Kosten 
                + Rücklagen. Bei einem 150m² Haus sind das ~450-600 €/Monat.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">💰 Steuerlicher Vorteil bei Eigennutzung:</h3>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
              <p className="text-gray-700 mb-3">
                Wenn Sie die geerbte Immobilie <strong>selbst bewohnen</strong>, profitieren Sie von:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Keine Spekulationssteuer</strong> beim späteren Verkauf (nach 3 Jahren Eigennutzung)</li>
                <li>• <strong>Erbschaftssteuer-Vergünstigung:</strong> Familienheim kann unter Umständen steuerfrei sein</li>
                <li>• <strong>Keine Mietkosten:</strong> Ersparnis gegenüber Miete</li>
              </ul>
            </div>

            {/* Option 3: Vermieten */}
            <h2 id="vermieten" className="text-3xl font-bold mt-12 mb-6">
              Option 3: Geerbte Immobilie vermieten
            </h2>

            <p className="mb-6">
              <strong>Vermietung der Erbimmobilie</strong> kombiniert regelmäßige Einnahmen mit 
              Wertsteigerung – eine attraktive Option für Kapitalanleger.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">✓ Wann ist Vermieten sinnvoll?</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Attraktive Lage:</strong> Hohe Mietnachfrage im Allgäu (Kempten, Oberstdorf, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Guter Zustand:</strong> Immobilie ist vermietbar ohne große Investitionen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Langfristige Kapitalanlage:</strong> Sie möchten Vermögen aufbauen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Keine Eigennutzung geplant:</strong> Aber verkaufen möchten Sie (noch) nicht</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Zeit & Lust auf Vermietung:</strong> Sie können die Verwaltung übernehmen (oder delegieren)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">📊 Rentabilität prüfen:</h3>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-8">
              <h4 className="font-semibold mb-4">Beispielrechnung für geerbte 80m² Wohnung in Kempten:</h4>
              <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">Einnahmen:</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span>Kaltmiete (80m² × 10 €/m²)</span>
                  <span className="font-semibold">800 €/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>Jahresmieteinnahmen</span>
                  <span className="font-bold text-green-600">9.600 €</span>
                </div>
                
                <div className="flex justify-between border-b pb-2 mt-4">
                  <span className="font-semibold">Ausgaben:</span>
                  <span></span>
                </div>
                <div className="flex justify-between">
                  <span>Hausgeld / Nebenkosten</span>
                  <span>-200 €/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>Instandhaltungsrücklage (1%)</span>
                  <span>-280 €/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>Verwaltung (ca. 25 €/Monat)</span>
                  <span>-25 €/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span>Mietausfallwagnis (2%)</span>
                  <span>-16 €/Monat</span>
                </div>
                
                <div className="flex justify-between border-t-2 border-gray-300 pt-3 mt-3">
                  <span className="font-bold">Netto-Mieteinnahmen/Jahr:</span>
                  <span className="font-bold text-primary-600">ca. 3.340 €</span>
                </div>
                
                <div className="bg-yellow-50 rounded p-3 mt-4">
                  <p className="text-xs text-gray-700">
                    <strong>Rendite:</strong> Bei einem Verkehrswert von 336.000 € (80m² × 4.200 €/m²) 
                    entspricht das einer Netto-Rendite von ca. <strong>1,0%</strong> – ohne Wertsteigerung.
                  </p>
                  <p className="text-xs text-gray-700 mt-2">
                    <strong>Wichtig:</strong> Die Rechnung verbessert sich, wenn Sie die Immobilie geerbt 
                    (keine Anschaffungskosten) haben und Wertsteigerung einbeziehen.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">💡 Tipps für erfolgreiche Vermietung:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span> Das sollten Sie tun:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Professionelle Mieterauswahl (Bonitätsprüfung)</li>
                  <li>✓ Schriftlichen Mietvertrag abschließen</li>
                  <li>✓ Kaution einfordern (max. 3 Monatsmieten)</li>
                  <li>✓ Übergabeprotokoll anfertigen</li>
                  <li>✓ Hausverwaltung beauftragen (bei Bedarf)</li>
                  <li>✓ Regelmäßige Instandhaltung planen</li>
                </ul>
              </div>

              <div className="card p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Häufige Fehler vermeiden:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ Miete zu günstig ansetzen</li>
                  <li>✗ Mieter ohne Prüfung akzeptieren</li>
                  <li>✗ Mündliche Nebenabreden treffen</li>
                  <li>✗ Instandhaltung vernachlässigen</li>
                  <li>✗ Steuerliche Absetzbarkeit nicht nutzen</li>
                  <li>✗ Keine Rücklagen bilden</li>
                </ul>
              </div>
            </div>

            {/* Steuern */}
            <h2 id="steuern" className="text-3xl font-bold mt-12 mb-6">
              Steuern beim Erben einer Immobilie
            </h2>

            <p className="mb-6">
              Das Thema <strong>Erbschaftssteuer bei Immobilien</strong> ist komplex, aber mit den 
              richtigen Informationen gut zu bewältigen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">📋 Erbschaftssteuer-Freibeträge (2025):</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Verwandtschaftsgrad</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Steuerklasse</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">Freibetrag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Ehepartner / Lebenspartner</td>
                    <td className="px-6 py-4 text-gray-700">I</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">500.000 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Kinder, Stiefkinder, Enkel (bei verstorbenen Eltern)</td>
                    <td className="px-6 py-4 text-gray-700">I</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">400.000 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Enkel</td>
                    <td className="px-6 py-4 text-gray-700">I</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">200.000 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Eltern, Großeltern (bei Erbschaft)</td>
                    <td className="px-6 py-4 text-gray-700">I</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">100.000 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Geschwister, Neffen, Nichten</td>
                    <td className="px-6 py-4 text-gray-700">II</td>
                    <td className="px-6 py-4 text-right font-bold text-yellow-600">20.000 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Nicht verwandt</td>
                    <td className="px-6 py-4 text-gray-700">III</td>
                    <td className="px-6 py-4 text-right font-bold text-red-600">20.000 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">💰 Familienheim-Regel (§ 13 Abs. 1 Nr. 4c ErbStG):</h3>
              <p className="text-gray-700 mb-3">
                Das <strong>selbstgenutzte Familienheim</strong> kann unter bestimmten Bedingungen 
                <strong> steuerfrei</strong> vererbt werden:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>An Ehepartner:</strong> Vollständig steuerfrei (keine Flächenbegrenzung)</li>
                <li>• <strong>An Kinder:</strong> Bis 200m² Wohnfläche steuerfrei, darüber hinaus anteilig steuerpflichtig</li>
                <li>• <strong>Bedingung:</strong> Mindestens 10 Jahre selbst bewohnen nach Erbschaft (sonst rückwirkende Besteuerung)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">📊 Bewertung für Erbschaftssteuer:</h3>
            <p className="mb-4">
              Das Finanzamt ermittelt den <strong>Verkehrswert</strong> der Immobilie nach dem 
              <strong> Bewertungsgesetz</strong>. Dabei werden verwendet:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Vergleichswertverfahren</strong> (bei Wohnungen/Häusern)</li>
              <li>• <strong>Ertragswertverfahren</strong> (bei vermieteten Objekten)</li>
              <li>• <strong>Sachwertverfahren</strong> (wenn keine Vergleichswerte vorhanden)</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">💡 Tipp: Gegengutachten einholen</h3>
              <p className="text-gray-700">
                Wenn Sie den vom Finanzamt ermittelten Wert für zu hoch halten, können Sie ein 
                <strong> eigenes Gutachten</strong> erstellen lassen. Dies lohnt sich besonders, wenn:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 mt-2 ml-4">
                <li>• Die Immobilie sanierungsbedürftig ist</li>
                <li>• Besondere Umstände den Wert mindern</li>
                <li>• Der Steuerbetrag signifikant ist</li>
              </ul>
            </div>

            {/* Erbengemeinschaft */}
            <h2 id="erbengemeinschaft" className="text-3xl font-bold mt-12 mb-6">
              Erbengemeinschaft: Was Sie wissen müssen
            </h2>

            <p className="mb-6">
              Wenn mehrere Personen erben, bilden sie automatisch eine <strong>Erbengemeinschaft</strong>. 
              Dies führt oft zu Herausforderungen, da alle gemeinsam entscheiden müssen.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">⚠️ Wichtig zu wissen:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Die Immobilie gehört <strong>allen gemeinsam</strong> (nicht in Teilen)</li>
                <li>• <strong>Einstimmigkeit</strong> bei wichtigen Entscheidungen erforderlich (z.B. Verkauf)</li>
                <li>• <strong>Jeder Erbe</strong> kann die <strong>Teilungsversteigerung</strong> beantragen</li>
                <li>• Verwaltung kann durch <strong>Mehrheitsbeschluss</strong> erfolgen</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">🤝 Lösungen bei Erbengemeinschaft:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6 border-2 border-primary-200">
                <h4 className="font-bold text-lg mb-3 text-primary-600">1. Gemeinsamer Verkauf</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Beste Lösung:</strong> Alle Erben einigen sich auf Verkauf, Erlös wird nach Erbquote aufgeteilt.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Vorteile:</strong>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>✓ Klare Vermögensaufteilung</li>
                    <li>✓ Keine laufenden Streitpunkte</li>
                    <li>✓ Maximaler Verkaufspreis</li>
                  </ul>
                </div>
              </div>

              <div className="card p-6 border-2 border-secondary-200">
                <h4 className="font-bold text-lg mb-3 text-secondary-600">2. Auszahlung anderer Erben</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Ein Erbe übernimmt:</strong> Zahlt die anderen aus und wird Alleineigentümer.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Voraussetzungen:</strong>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>✓ Finanzielle Möglichkeiten</li>
                    <li>✓ Einigung über fairen Preis</li>
                    <li>✓ Notarieller Übertragungsvertrag</li>
                  </ul>
                </div>
              </div>

              <div className="card p-6 border-2 border-accent-200">
                <h4 className="font-bold text-lg mb-3 text-accent-600">3. Realteilung</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Grundstück teilen:</strong> Bei großen Grundstücken möglich, Gebäude zu teilen (Mehrfamilienhaus).
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Hinweis:</strong>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>• Bebauungsplan prüfen</li>
                    <li>• Kosten für Vermessung</li>
                    <li>• Technisch machbar?</li>
                  </ul>
                </div>
              </div>

              <div className="card p-6 border-2 border-red-200">
                <h4 className="font-bold text-lg mb-3 text-red-600">4. Teilungsversteigerung</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Letzter Ausweg:</strong> Gericht versteigert Immobilie, wenn keine Einigung möglich.
                </p>
                <div className="text-sm text-gray-700">
                  <strong>Nachteile:</strong>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>✗ Meist unter Wert verkauft</li>
                    <li>✗ Hohe Kosten</li>
                    <li>✗ Langwieriges Verfahren</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">💡 Unser Tipp bei Erbengemeinschaft:</h3>
              <p className="text-gray-700">
                Kommunizieren Sie <strong>frühzeitig und offen</strong> mit den Miterben. 
                Eine <strong>professionelle Immobilienbewertung</strong> schafft eine neutrale Grundlage 
                für Verhandlungen. Oft hilft ein <strong>Mediator</strong> bei festgefahrenen Situationen.
              </p>
            </div>

            {/* Ablauf */}
            <h2 id="ablauf" className="text-3xl font-bold mt-12 mb-6">
              Der Ablauf beim Erben einer Immobilie
            </h2>

            <div className="space-y-6 mb-10">
              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Erbfall eintritt – Was ist zu tun?</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Sterbeurkunde</strong> besorgen</li>
                      <li>• <strong>Testament</strong> beim Nachlassgericht abgeben (falls vorhanden)</li>
                      <li>• <strong>Ausschlagungsfrist</strong> beachten (6 Wochen!)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Erbschein beantragen</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Beim <strong>Nachlassgericht</strong> beantragen</li>
                      <li>• Kosten: ca. 0,5% des Nachlasswerts</li>
                      <li>• Wichtig für Grundbuchänderung & Verkauf</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Immobilie bewerten lassen</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Verkehrswert</strong> ermitteln</li>
                      <li>• Für Erbschaftssteuer & Verkaufsentscheidung</li>
                      <li>• Kostenlose Erstbewertung bei uns möglich</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Erbschaftssteuer prüfen & zahlen</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Freibeträge</strong> prüfen</li>
                      <li>• Steuererklärung beim <strong>Finanzamt</strong> einreichen</li>
                      <li>• Frist: innerhalb von 3 Monaten nach Kenntnis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Grundbuch ändern lassen</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Mit <strong>Erbschein</strong> beim Grundbuchamt</li>
                      <li>• Innerhalb von 2 Jahren <strong>kostenfrei</strong> möglich</li>
                      <li>• Danach: Gebühren nach Grundbuchkosten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-primary-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">6</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Entscheidung treffen</h3>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>Verkaufen, Vermieten oder Selbst nutzen?</strong></li>
                      <li>• Bei Erbengemeinschaft: Abstimmung mit Miterben</li>
                      <li>• Professionelle Beratung in Anspruch nehmen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkliste */}
            <h2 className="text-3xl font-bold mt-12 mb-6">
              Checkliste: Immobilie geerbt – Das müssen Sie tun
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-10">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-3">☐ Sofort nach Erbfall (6 Wochen Frist!):</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Erbausschlagung prüfen (bei überschuldeter Immobilie)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Testament beim Nachlassgericht abgeben</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Sterbeurkunde besorgen</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-lg mb-3 mt-6">☐ Innerhalb der ersten 3 Monate:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Erbschein beantragen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Immobilie bewerten lassen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Erbschaftssteuer-Erklärung abgeben</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Versicherungen prüfen & ggf. anpassen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Laufende Verträge (Strom, Heizung, etc.) prüfen</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-lg mb-3 mt-6">☐ Innerhalb von 2 Jahren:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Grundbuch ändern lassen (kostenfrei!)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Entscheidung treffen: Verkaufen, Vermieten oder Selbstnutzen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400">☐</span>
                    <span>Bei Erbengemeinschaft: Aufteilung klären</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold mt-12 mb-6">
              Häufige Fragen zum Erben einer Immobilie
            </h2>

            <div className="space-y-4">
              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Muss ich eine geerbte Immobilie annehmen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  <strong>Nein.</strong> Sie haben das Recht, das Erbe innerhalb von <strong>6 Wochen</strong> 
                  auszuschlagen. Dies ist sinnvoll, wenn die Immobilie überschuldet ist oder mehr Kosten 
                  verursacht, als sie wert ist. Beachten Sie: Die Ausschlagung muss <strong>notariell 
                  beurkundet</strong> oder beim Nachlassgericht erklärt werden.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wann muss ich Erbschaftssteuer zahlen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Erbschaftssteuer fällt an, wenn der Wert der Erbschaft (inkl. Immobilie) den 
                  <strong> persönlichen Freibetrag</strong> übersteigt. Die Freibeträge sind: 
                  Ehepartner 500.000 €, Kinder 400.000 €, Enkel 200.000 €. Bei selbstgenutzten 
                  Familienheimen gibt es zusätzliche Vergünstigungen. Die Steuer muss innerhalb von 
                  <strong> 3 Monaten</strong> nach Kenntnis beim Finanzamt angemeldet werden.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Kann ich eine geerbte Immobilie sofort verkaufen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  <strong>Ja</strong>, grundsätzlich können Sie die Immobilie sofort verkaufen. Bei einer 
                  <strong> Erbengemeinschaft</strong> müssen jedoch alle Erben zustimmen. Steuerlich kann 
                  es vorteilhaft sein, die <strong>Spekulationsfrist</strong> zu beachten: Bei Eigennutzung 
                  durch den Erblasser oder nach 3 Jahren Eigennutzung durch Sie fällt keine Spekulationssteuer an.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Was passiert, wenn sich Erben nicht einigen können?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Wenn keine Einigung möglich ist, kann jeder Miterbe die <strong>Teilungsversteigerung</strong> 
                  beim Amtsgericht beantragen. Dies ist jedoch meist die schlechteste Lösung, da die Immobilie 
                  oft <strong>unter Marktwert</strong> verkauft wird und hohe Kosten entstehen. Besser: 
                  Einigung durch Mediation oder ein Erbe zahlt die anderen aus.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Übernehme ich als Erbe auch die Schulden des Verstorbenen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  <strong>Ja</strong>, als Erbe übernehmen Sie automatisch <strong>alle Verbindlichkeiten</strong> 
                  des Verstorbenen – auch Kredite oder Hypotheken auf der Immobilie. Deshalb ist es wichtig, 
                  <strong> vor Annahme des Erbes</strong> die Schuldenlage zu prüfen. Bei Überschuldung sollten 
                  Sie das Erbe innerhalb der 6-Wochen-Frist ausschlagen.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wie wird der Wert der Immobilie für die Erbschaftssteuer ermittelt?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Das Finanzamt ermittelt den <strong>Verkehrswert</strong> nach dem Bewertungsgesetz, 
                  meist durch das <strong>Vergleichswertverfahren</strong> (Vergleich mit ähnlichen 
                  verkauften Immobilien). Sie können ein eigenes Gutachten einreichen, wenn Sie den 
                  Wert für zu hoch halten. Eine professionelle Bewertung kann helfen, Steuern zu sparen.
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Sie haben eine Immobilie im Allgäu geerbt?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Lassen Sie Ihre Immobilie kostenlos bewerten und erhalten Sie eine fundierte Entscheidungsgrundlage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-bold shadow-hard hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Kostenlose Bewertung starten</span>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Persönliche Beratung</span>
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Wir unterstützen Sie bei allen Fragen rund um Ihre geerbte Immobilie – diskret, kompetent, regional
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
              href="/ratgeber/immobilienpreise-allgaeu-2025"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Immobilienpreise Allgäu 2025
              </h3>
              <p className="text-gray-600 text-sm">Aktuelle Marktpreise & Prognosen</p>
            </Link>
            <Link
              href="/ratgeber/haus-kaufen-allgaeu"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">🏡</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Haus kaufen im Allgäu
              </h3>
              <p className="text-gray-600 text-sm">Preise, Standorte & Finanzierung</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
