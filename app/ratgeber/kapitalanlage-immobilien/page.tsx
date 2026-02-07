import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapitalanlage Immobilien im Allgäu – Rendite, Risiken & Tipps 2026 | ImmoAllgäu",
  description: "Lohnt sich die Investition in Immobilien im Allgäu? Renditen, Standorte, Steuervorteile und worauf Sie achten müssen. Jetzt informieren!",
};

export default function KapitalanlageImmobilienPage() {
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
            <span>Kapitalanlage Immobilien</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kapitalanlage Immobilien im Allgäu
          </h1>
          <p className="text-xl text-gray-700">
            Renditen, Risiken & was Sie wissen müssen
          </p>
          <div className="flex gap-4 text-sm text-gray-600 mt-4">
            <span>⏱ Lesezeit: 9 Min.</span>
            <span>📅 Aktualisiert: Februar 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Das Allgäu gilt als eine der begehrtesten Wohnregionen Deutschlands. Doch lohnt sich auch
              die Investition in Immobilien als Kapitalanlage? In diesem Guide erfahren Sie alles über
              Renditen, Standorte, Risiken und worauf Sie achten müssen.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Warum Immobilien als Kapitalanlage?
            </h2>

            <p>
              Immobilien bieten mehrere Vorteile gegenüber anderen Anlageformen:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">✅ Vorteile:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Laufende Mieteinnahmen</li>
                  <li>✓ Wertsteigerung langfristig</li>
                  <li>✓ Inflationsschutz</li>
                  <li>✓ Steuervorteile</li>
                  <li>✓ Absicherung für das Alter</li>
                  <li>✓ Fremdkapital-Hebel nutzbar</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">❌ Nachteile:</h3>
                <ul className="space-y-2 text-sm">
                  <li>✗ Hoher Kapitalbedarf</li>
                  <li>✗ Geringe Liquidität</li>
                  <li>✗ Verwaltungsaufwand</li>
                  <li>✗ Leerstandsrisiko</li>
                  <li>✗ Instandhaltungskosten</li>
                  <li>✗ Klumpenrisiko</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Renditen im Allgäu
            </h2>

            <p>
              Die Mietrendite im Allgäu variiert stark nach Lage und Objektart:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">Durchschnittliche Brutto-Mietrenditen 2026:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Kempten (Wohnung):</strong> 3,5-4,5%<br/>
                  <span className="text-sm text-gray-700">Stabile Nachfrage, geringe Leerstandsquote</span>
                </li>
                <li>
                  <strong>Kaufbeuren (Wohnung):</strong> 4,0-5,0%<br/>
                  <span className="text-sm text-gray-700">Gutes Preis-Rendite-Verhältnis</span>
                </li>
                <li>
                  <strong>Memmingen (Wohnung):</strong> 4,2-5,2%<br/>
                  <span className="text-sm text-gray-700">Attraktiv für Investoren</span>
                </li>
                <li>
                  <strong>Oberstdorf (Ferienwohnung):</strong> 4,5-6,5%<br/>
                  <span className="text-sm text-gray-700">Höhere Rendite, aber auch höherer Aufwand</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-2">⚠️ Wichtig:</h3>
              <p className="mb-0">
                Die <strong>Brutto-Mietrendite</strong> berücksichtigt nur Kaufpreis und Jahreskaltmiete.
                Die <strong>Netto-Rendite</strong> (nach Abzug aller Kosten) liegt typischerweise 1-2% niedriger.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Rechenbeispiel Kempten</h3>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-3">3-Zimmer-Wohnung, 80m²:</p>
              <ul className="space-y-2">
                <li><strong>Kaufpreis:</strong> 340.000 €</li>
                <li><strong>Kaufnebenkosten (8%):</strong> 27.200 €</li>
                <li><strong>Gesamt-Investment:</strong> 367.200 €</li>
                <li className="pt-2 border-t border-gray-300"><strong>Kaltmiete/Monat:</strong> 1.000 €</li>
                <li><strong>Jahreskaltmiete:</strong> 12.000 €</li>
                <li className="pt-2 border-t border-gray-300"><strong>Brutto-Rendite:</strong> 3,5%</li>
                <li><strong>Abzüglich Kosten:</strong> -1,0% (Verwaltung, Instandhaltung, Rücklage)</li>
                <li><strong>Netto-Rendite:</strong> ca. 2,5%</li>
              </ul>

              <p className="mt-4 text-sm text-gray-700">
                + Steuervorteile (AfA)<br/>
                + Tilgung des Kredits durch Miete<br/>
                + Langfristige Wertsteigerung
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Die besten Standorte für Kapitalanleger
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Kempten – Stabilität & Sicherheit</h3>
            <p>
              Als wirtschaftliches Zentrum mit stabiler Nachfrage ideal für konservative Anleger.
              Geringe Leerstandsquote, solide Mietpreisentwicklung.
            </p>
            <ul>
              <li><strong>Zielgruppe:</strong> Berufstätige, Studenten, Familien</li>
              <li><strong>Rendite:</strong> 3,5-4,5%</li>
              <li><strong>Risiko:</strong> Niedrig</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Kaufbeuren – Preis-Rendite-Sieger</h3>
            <p>
              Günstigere Kaufpreise bei guter Nachfrage. Ideal für Einsteiger in die Kapitalanlage.
            </p>
            <ul>
              <li><strong>Zielgruppe:</strong> Pendler, Familien</li>
              <li><strong>Rendite:</strong> 4,0-5,0%</li>
              <li><strong>Risiko:</strong> Niedrig-Mittel</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Oberstdorf – Touristische Vermietung</h3>
            <p>
              Höhere Renditen durch Ferienvermietung möglich, aber auch mehr Aufwand und Schwankungen.
              Eigennutzung kombinierbar.
            </p>
            <ul>
              <li><strong>Zielgruppe:</strong> Touristen, Zweitwohnsitz</li>
              <li><strong>Rendite:</strong> 4,5-6,5%</li>
              <li><strong>Risiko:</strong> Mittel-Hoch</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-2">💡 Anleger-Tipp:</h3>
              <p className="mb-0">
                Für Erstinvestoren empfehlen wir <strong>klassische Wohnungen in Kempten oder Kaufbeuren</strong>.
                Ferienwohnungen in Oberstdorf eignen sich eher für erfahrene Investoren, die den höheren
                Verwaltungsaufwand einkalkulieren.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Steuervorteile nutzen
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Absetzbare Kosten</h3>
            <p>
              Als Vermieter können Sie verschiedene Kosten steuerlich geltend machen:
            </p>

            <ul>
              <li><strong>AfA (Abschreibung):</strong> 2% bzw. 2,5% pro Jahr vom Gebäudewert</li>
              <li><strong>Darlehenszinsen:</strong> Vollständig absetzbar</li>
              <li><strong>Verwaltungskosten:</strong> Hausverwaltung, Steuerberater</li>
              <li><strong>Instandhaltung:</strong> Reparaturen, Renovierungen</li>
              <li><strong>Nebenkosten:</strong> Grundsteuer, Versicherungen, etc.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-2">Beispielrechnung Steuereffekt:</h3>
              <p>
                Bei einem Kaufpreis von 340.000 € (davon 240.000 € Gebäudewert) können Sie jährlich
                <strong> 4.800 € AfA</strong> (2%) absetzen. Bei einem persönlichen Steuersatz von 35%
                ergibt das eine <strong>Steuerersparnis von 1.680 €/Jahr</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Finanzierung richtig planen
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Eigenkapital</h3>
            <p>
              Für Kapitalanlagen fordern Banken typischerweise <strong>mindestens 20-30% Eigenkapital</strong>
              plus Kaufnebenkosten. Bei einem Objekt für 340.000 € sollten Sie also 68.000-102.000 € + 27.000 €
              Nebenkosten = ca. 95.000-130.000 € mitbringen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Finanzierungsregeln</h3>
            <ul>
              <li>Mieteinnahmen sollten die Kreditrate zu mindestens 110-120% decken</li>
              <li>Puffer für Leerstand und Instandhaltung einplanen</li>
              <li>Lange Zinsbindung (15-20 Jahre) für Planungssicherheit</li>
              <li>Sondertilgungsrecht vereinbaren</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Worauf Sie achten müssen
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">1. Lage, Lage, Lage</h3>
                <p className="text-sm mb-0">
                  Die Mikrolage entscheidet über Vermietbarkeit und Wertentwicklung. Prüfen Sie:
                  Infrastruktur, ÖPNV-Anbindung, Einkaufsmöglichkeiten, Schulen.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">2. Zielgruppe definieren</h3>
                <p className="text-sm mb-0">
                  Wer soll mieten? Studenten, Singles, Familien, Senioren? Objekt und Lage
                  müssen zur Zielgruppe passen.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">3. Substanz prüfen</h3>
                <p className="text-sm mb-0">
                  Beauftragen Sie einen Gutachter. Versteckte Mängel können die Rendite schnell auffressen.
                  Besonders wichtig: Dach, Fassade, Heizung, Fenster.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">4. Realistische Kalkulation</h3>
                <p className="text-sm mb-0">
                  Rechnen Sie konservativ: Leerstand (1 Monat/Jahr), Instandhaltung (1% Kaufpreis/Jahr),
                  Verwaltung (250-300 €/Jahr), Rücklage bei ETW.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">5. Verwaltung organisieren</h3>
                <p className="text-sm mb-0">
                  Selbst verwalten oder Hausverwaltung beauftragen? Bei mehreren Objekten oder
                  wenn Sie weit weg wohnen, empfiehlt sich eine professionelle Verwaltung.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Checkliste Kapitalanlage-Kauf
            </h2>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Standortanalyse:</strong> Bevölkerungsentwicklung, Wirtschaft, Infrastruktur</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Mikrolage prüfen:</strong> Umfeld, Verkehrsanbindung, Nachbarschaft</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Objekt besichtigen:</strong> Zustand, Grundriss, Ausstattung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Gutachter beauftragen:</strong> Bausubstanz prüfen lassen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Mietspiegel checken:</strong> Realistische Mieteinnahmen kalkulieren</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Rendite berechnen:</strong> Inkl. aller Nebenkosten & Risikopuffer</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Finanzierung klären:</strong> Mehrere Angebote einholen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Steuerberater konsultieren:</strong> Optimale Gestaltung besprechen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">☐</span>
                  <span><strong>Verwaltung planen:</strong> Selbst oder professionell?</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Fazit: Lohnt sich die Investition?
            </h2>

            <p>
              Immobilien im Allgäu als Kapitalanlage eignen sich besonders für Anleger, die:
            </p>

            <ul>
              <li>Langfristig investieren möchten (mindestens 10 Jahre)</li>
              <li>Ausreichend Eigenkapital mitbringen</li>
              <li>Einen gewissen Verwaltungsaufwand akzeptieren</li>
              <li>Wert auf Sachwerte und Inflationsschutz legen</li>
            </ul>

            <p>
              Die <strong>Bruttorenditen von 3,5-5,5%</strong> mögen auf den ersten Blick niedrig erscheinen,
              aber in Kombination mit Steuervorteilen, Tilgung durch Miete und langfristiger Wertsteigerung
              ergibt sich eine attraktive Gesamtrendite.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-2">✅ Unser Fazit:</h3>
              <p className="mb-0">
                Das Allgäu bietet <strong>stabile Rahmenbedingungen</strong> mit moderaten Leerstandsquoten,
                solider Nachfrage und langfristig steigenden Preisen. Für konservative Anleger, die Sicherheit
                über maximale Rendite stellen, ist das Allgäu eine ausgezeichnete Wahl.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interessiert an einer Kapitalanlage im Allgäu?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Wir beraten Sie unverbindlich zu passenden Objekten und Renditeaussichten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/immobilienbewertung"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Objekt bewerten lassen
            </Link>
            <Link
              href="/kontakt"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Anlageberatung anfragen
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
              href="/ratgeber/immobilie-verkaufen"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">Immobilie verkaufen</h3>
              <p className="text-gray-600 text-sm">Erfolgreich verkaufen – Schritt für Schritt</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
