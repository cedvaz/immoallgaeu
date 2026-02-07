import Link from "next/link";
import type { Metadata } from "next";
import { cityDetails } from "@/lib/data/cityData";

export const metadata: Metadata = {
  title: "Immobilienpreise Allgäu 2026 – Aktuelle Entwicklung & Prognose | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise im Allgäu 2026: Quadratmeterpreise für Kempten, Oberstdorf, Sonthofen & mehr. Preise, Trends & Prognosen für Häuser & Wohnungen.",
  keywords: "Immobilienpreise Allgäu, Immobilienpreise Kempten, Hauspreis Allgäu, Quadratmeterpreis Kempten, Wohnungspreise Oberstdorf, Immobilienmarkt Allgäu 2026",
};

export default function ImmobilienpreiseAllgaeu2025Page() {
  // Preisdaten aus cityData extrahieren
  const cities = [
    { ...cityDetails.kempten, avgPriceNum: 4200 },
    { ...cityDetails.kaufbeuren, avgPriceNum: 3800 },
    { ...cityDetails.memmingen, avgPriceNum: 3600 },
    { ...cityDetails.oberstdorf, avgPriceNum: 6500 },
    { ...cityDetails.pfronten, avgPriceNum: 5200 },
    { ...cityDetails.sonthofen, avgPriceNum: 4800 },
    { ...cityDetails.immenstadt, avgPriceNum: 4500 },
  ];

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
            <span>Immobilienpreise Allgäu 2026</span>
          </nav>
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📊 Marktbericht 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilienpreise Allgäu 2026 – Aktuelle Entwicklung & Prognose
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Detaillierte Analyse der Immobilienpreise in allen Allgäuer Städten: 
            Quadratmeterpreise, Trends und Marktausblick für 2026
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>⏱ Lesezeit: 10 Min.</span>
            <span>📅 Aktualisiert: Februar 2026</span>
            <span>📈 Echte Marktdaten</span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-medium text-gray-900 mb-2">Schnellnavigation:</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#ueberblick" className="text-primary-600 hover:underline">Überblick</a>
            <a href="#staedte" className="text-primary-600 hover:underline">Städte-Vergleich</a>
            <a href="#wohnungen" className="text-primary-600 hover:underline">Wohnungspreise</a>
            <a href="#haeuser" className="text-primary-600 hover:underline">Häuserpreise</a>
            <a href="#trends" className="text-primary-600 hover:underline">Preistrends</a>
            <a href="#prognose" className="text-primary-600 hover:underline">Prognose 2026</a>
            <a href="#faktoren" className="text-primary-600 hover:underline">Preisfaktoren</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Einleitung */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Der Allgäuer Immobilienmarkt zeigt sich 2026 weiterhin dynamisch. Die Preise entwickeln sich 
              je nach Lage und Objekttyp unterschiedlich. Während beliebte Ferienorte wie <strong>Oberstdorf</strong> 
              mit Spitzenpreisen von über 6.500 €/m² aufwarten, bieten Städte wie <strong>Memmingen</strong> mit 
              rund 3.600 €/m² noch vergleichsweise günstige Einstiegsmöglichkeiten.
            </p>

            {/* Überblick */}
            <h2 id="ueberblick" className="text-3xl font-bold mt-12 mb-6">
              Immobilienpreise im Allgäu 2026 – Der Überblick
            </h2>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 my-8">
              <h3 className="font-semibold text-xl mb-6 text-gray-900">
                📊 Durchschnittlicher Quadratmeterpreis nach Stadt (2026):
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cities.sort((a, b) => b.avgPriceNum - a.avgPriceNum).map((city) => (
                  <div key={city.slug} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg text-gray-900">{city.name}</div>
                        <div className="text-sm text-gray-600">{city.population} Einwohner</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">{city.avgPrice} €/m²</div>
                        <div className="text-sm text-green-600 font-semibold">{city.priceChange}% p.a.</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Der durchschnittliche <strong>Quadratmeterpreis im Allgäu</strong> liegt 2026 bei etwa 
              <strong> 4.614 €/m²</strong> (Mittelwert über alle Städte). Die Spanne reicht von 
              3.600 €/m² in Memmingen bis 6.500 €/m² in Oberstdorf.
            </p>

            {/* Städte-Vergleich */}
            <h2 id="staedte" className="text-3xl font-bold mt-12 mb-6">
              Detaillierter Städte-Vergleich
            </h2>

            {/* Kempten */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              🏙️ Kempten – Die Allgäu-Metropole
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ø Preis</div>
                  <div className="text-2xl font-bold text-gray-900">{cityDetails.kempten.avgPrice} €/m²</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Preisentwicklung</div>
                  <div className="text-2xl font-bold text-green-600">+{cityDetails.kempten.priceChange}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ø Miete</div>
                  <div className="text-2xl font-bold text-gray-900">{cityDetails.kempten.avgRent} €/m²</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{cityDetails.kempten.description}</p>
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 mb-2">Markteinschätzung:</div>
                {cityDetails.kempten.marketInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Oberstdorf */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              ⛰️ Oberstdorf – Premium-Segment
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ø Preis</div>
                  <div className="text-2xl font-bold text-gray-900">{cityDetails.oberstdorf.avgPrice} €/m²</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Preisentwicklung</div>
                  <div className="text-2xl font-bold text-green-600">+{cityDetails.oberstdorf.priceChange}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ø Miete</div>
                  <div className="text-2xl font-bold text-gray-900">{cityDetails.oberstdorf.avgRent} €/m²</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{cityDetails.oberstdorf.description}</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Hinweis:</strong> Oberstdorf ist das teuerste Pflaster im Allgäu. Preise über 
                  8.000 €/m² sind in Toplage keine Seltenheit. Dafür winken hohe Mietrenditen durch Ferienvermietung.
                </p>
              </div>
            </div>

            {/* Sonthofen */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              🏔️ Sonthofen – Starkes Mittelfeld
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ø Preis</div>
                  <div className="text-2xl font-bold text-gray-900">{cityDetails.sonthofen.avgPrice} €/m²</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Preisentwicklung</div>
                  <div className="text-2xl font-bold text-green-600">+{cityDetails.sonthofen.priceChange}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Ø Miete</div>
                  <div className="text-2xl font-bold text-gray-900">{cityDetails.sonthofen.avgRent} €/m²</div>
                </div>
              </div>
              <p className="text-gray-700">{cityDetails.sonthofen.description}</p>
            </div>

            {/* Weitere Städte kompakt */}
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Weitere Städte im Überblick
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[cityDetails.immenstadt, cityDetails.pfronten, cityDetails.kaufbeuren, cityDetails.memmingen].map((city) => (
                <div key={city.slug} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">{city.name}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-xs text-gray-600">Durchschnittspreis</div>
                      <div className="text-xl font-bold text-primary-600">{city.avgPrice} €/m²</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Trend</div>
                      <div className="text-xl font-bold text-green-600">+{city.priceChange}%</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{city.description.slice(0, 150)}...</p>
                  <Link 
                    href={`/immobilien-${city.slug}`}
                    className="inline-flex items-center gap-1 mt-3 text-sm text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Mehr zu {city.name} 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* Wohnungspreise */}
            <h2 id="wohnungen" className="text-3xl font-bold mt-12 mb-6">
              Wohnungspreise im Detail
            </h2>

            <p className="mb-6">
              Die <strong>Wohnungspreise im Allgäu</strong> variieren stark nach Größe und Lage. 
              Hier finden Sie die aktuellen Preisspannen für verschiedene Wohnungsgrößen:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Stadt</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">30-50m²</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">50-80m²</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold">80-120m²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[cityDetails.oberstdorf, cityDetails.kempten, cityDetails.sonthofen, cityDetails.immenstadt, cityDetails.pfronten, cityDetails.kaufbeuren, cityDetails.memmingen].map((city) => {
                    const apt30_50 = city.propertyTypes.find(pt => pt.type.includes("30-50m²"));
                    const apt50_80 = city.propertyTypes.find(pt => pt.type.includes("50-80m²"));
                    const apt80_120 = city.propertyTypes.find(pt => pt.type.includes("80-120m²"));
                    
                    return (
                      <tr key={city.slug} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{city.name}</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-700">{apt30_50?.price || 'k.A.'} €/m²</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-700">{apt50_80?.price || 'k.A.'} €/m²</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-700">{apt80_120?.price || 'k.A.'} €/m²</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">💡 Beispielrechnung Wohnungskauf:</h3>
              <p className="mb-3">
                Eine <strong>75m² Wohnung in Kempten</strong> kostet bei durchschnittlich 4.400 €/m²:
              </p>
              <div className="bg-white rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Kaufpreis (75m² × 4.400 €/m²):</span>
                  <span className="font-bold">330.000 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Nebenkosten (ca. 10%):</span>
                  <span className="font-bold">33.000 €</span>
                </div>
                <div className="flex justify-between border-t-2 border-gray-300 pt-2">
                  <span className="font-bold">Gesamtinvestition:</span>
                  <span className="font-bold text-primary-600">363.000 €</span>
                </div>
              </div>
            </div>

            {/* Häuserpreise */}
            <h2 id="haeuser" className="text-3xl font-bold mt-12 mb-6">
              Häuserpreise im Allgäu 2026
            </h2>

            <p className="mb-6">
              <strong>Einfamilienhäuser</strong> sind im Allgäu stark nachgefragt. Die Preise haben sich 
              in den letzten Jahren deutlich nach oben entwickelt:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[cityDetails.oberstdorf, cityDetails.kempten, cityDetails.sonthofen, cityDetails.immenstadt, cityDetails.pfronten, cityDetails.kaufbeuren].map((city) => {
                const house = city.propertyTypes.find(pt => pt.type.includes("Einfamilienhaus") || pt.type.includes("Chalet"));
                
                return house && (
                  <div key={city.slug} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{city.name}</h4>
                        <div className="text-sm text-gray-600">{house.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">{house.price} €/m²</div>
                      </div>
                    </div>
                    <div className="bg-white rounded p-3 text-sm">
                      <div className="text-gray-600 mb-1">Beispiel: 150m² Haus</div>
                      <div className="font-bold text-gray-900">
                        ≈ {((parseFloat(house.price.split(' - ')[0].replace('.', '').replace(',', '.')) + 
                             parseFloat(house.price.split(' - ')[1].replace('.', '').replace(',', '.'))) / 2 * 150 / 1000).toFixed(0)}0.000 - {((parseFloat(house.price.split(' - ')[0].replace('.', '').replace(',', '.')) + 
                             parseFloat(house.price.split(' - ')[1].replace('.', '').replace(',', '.'))) / 2 * 150 / 1000 + 100).toFixed(0)}0.000 €
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Preistrends */}
            <h2 id="trends" className="text-3xl font-bold mt-12 mb-6">
              Aktuelle Preistrends im Allgäu
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
              <h3 className="font-semibold text-xl mb-6 text-gray-900">📈 Preisentwicklung 2025 → 2026:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">✓ Starke Preisentwicklung:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Oberstdorf:</strong> +5,8% – Ferienimmobilien boomen</li>
                    <li>• <strong>Pfronten:</strong> +4,8% – Tourismusstarke Lage</li>
                    <li>• <strong>Sonthofen:</strong> +4,5% – Wirtschaftsstandort</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">→ Moderate Entwicklung:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Kempten:</strong> +4,2% – Stabile Nachfrage</li>
                    <li>• <strong>Immenstadt:</strong> +4,2% – Seelage attraktiv</li>
                    <li>• <strong>Kaufbeuren:</strong> +3,8% – Solides Wachstum</li>
                    <li>• <strong>Memmingen:</strong> +3,2% – Günstigste Stadt</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">⚠️ Wichtige Marktbeobachtungen 2026:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Nachfrage übersteigt Angebot:</strong> Besonders bei Einfamilienhäusern gibt es wenig verfügbare Objekte</li>
                <li>• <strong>Zinsniveau:</strong> Gestiegene Zinsen dämpfen die Nachfrage leicht, aber Allgäu bleibt attraktiv</li>
                <li>• <strong>Ferienimmobilien:</strong> Weiterhin starke Nachfrage durch In- und Auslandsinvestoren</li>
                <li>• <strong>Neubau:</strong> Hohe Baukosten halten Neubauaktivität niedrig</li>
              </ul>
            </div>

            {/* Prognose */}
            <h2 id="prognose" className="text-3xl font-bold mt-12 mb-6">
              Prognose: Wie entwickeln sich die Preise 2026/2027?
            </h2>

            <p className="mb-6">
              Experten gehen für 2026 und 2027 von folgender Entwicklung aus:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6 text-center border-2 border-green-200">
                <div className="text-4xl mb-3">🟢</div>
                <h3 className="font-bold text-lg mb-2 text-green-700">Ferienorte</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">+4-6%</div>
                <p className="text-sm text-gray-700">
                  Oberstdorf, Pfronten und ähnliche Orte bleiben heiß begehrt
                </p>
              </div>
              <div className="card p-6 text-center border-2 border-blue-200">
                <div className="text-4xl mb-3">🔵</div>
                <h3 className="font-bold text-lg mb-2 text-blue-700">Städte</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">+3-4%</div>
                <p className="text-sm text-gray-700">
                  Kempten, Sonthofen, Kaufbeuren mit solidem Wachstum
                </p>
              </div>
              <div className="card p-6 text-center border-2 border-gray-200">
                <div className="text-4xl mb-3">⚪</div>
                <h3 className="font-bold text-lg mb-2 text-gray-700">Randlagen</h3>
                <div className="text-3xl font-bold text-gray-600 mb-2">+2-3%</div>
                <p className="text-sm text-gray-700">
                  Periphere Lagen mit moderater Entwicklung
                </p>
              </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
              <h3 className="font-semibold text-lg mb-3">🎯 Investoren-Tipp:</h3>
              <p className="mb-3">
                Der <strong>Allgäuer Immobilienmarkt</strong> bleibt auch 2026 stabil und attraktiv. 
                Besonders interessant sind:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Ferienimmobilien</strong> in Toplage mit hoher Mietrendite (6-8% p.a.)</li>
                <li>• <strong>Bestandsimmobilien</strong> in Kempten/Sonthofen zur Eigennutzung</li>
                <li>• <strong>Neubau-Wohnungen</strong> als Kapitalanlage in Kempten</li>
              </ul>
            </div>

            {/* Preisfaktoren */}
            <h2 id="faktoren" className="text-3xl font-bold mt-12 mb-6">
              Was bestimmt die Immobilienpreise im Allgäu?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Lage & Infrastruktur
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Nähe zu Zentren (Kempten, München)</li>
                  <li>• Anbindung (Autobahn, Bahn)</li>
                  <li>• Schulen, Ärzte, Einkaufsmöglichkeiten</li>
                  <li>• Tourismusattraktivität</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏔️</span> Allgäu-Faktoren
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bergblick & Naturlage</li>
                  <li>• Seezugang (Alpsee, Grüntensee)</li>
                  <li>• Skipisten-Nähe</li>
                  <li>• Wandergebiet & Freizeitmöglichkeiten</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏠</span> Objektmerkmale
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Baujahr & Zustand</li>
                  <li>• Wohnfläche & Grundstücksgröße</li>
                  <li>• Ausstattung (Terrasse, Balkon, Garage)</li>
                  <li>• Energieeffizienz</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">📊</span> Marktdynamik
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Angebot vs. Nachfrage</li>
                  <li>• Zinsniveau</li>
                  <li>• Neubautätigkeit</li>
                  <li>• Wirtschaftliche Entwicklung</li>
                </ul>
              </div>
            </div>

            {/* Tipps */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-bold mb-6">💰 So ermitteln Sie den fairen Preis für Ihre Immobilie</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-3">Als Käufer:</h3>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>✓ Vergleichspreise in der Umgebung prüfen</li>
                    <li>✓ Quadratmeterpreis mit Durchschnitt abgleichen</li>
                    <li>✓ Zustand und Lage berücksichtigen</li>
                    <li>✓ Gutachter für Bewertung hinzuziehen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Als Verkäufer:</h3>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>✓ Professionelle Bewertung einholen</li>
                    <li>✓ Aktuelle Marktpreise recherchieren</li>
                    <li>✓ Alleinstellungsmerkmale hervorheben</li>
                    <li>✓ Realistische Preisvorstellung entwickeln</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <p className="text-lg mb-4">
                  Nutzen Sie unser <strong>kostenloses Bewertungstool</strong> für eine erste Einschätzung!
                </p>
                <Link
                  href="/immobilienbewertung"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Jetzt Immobilie kostenlos bewerten
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="text-3xl font-bold mt-12 mb-6">
              Häufige Fragen zu Immobilienpreisen im Allgäu
            </h2>

            <div className="space-y-4">
              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Sind die Immobilienpreise im Allgäu zu hoch?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Die Preise im Allgäu liegen über dem deutschen Durchschnitt, aber deutlich unter München 
                  oder anderen Metropolregionen. Angesichts der hohen Lebensqualität, stabilen Wirtschaft 
                  und begrenzten Verfügbarkeit sind die Preise marktgerecht. In Touristenorten wie Oberstdorf 
                  rechtfertigen Mietrenditen von 6-8% die höheren Kaufpreise.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Wo ist der Immobilienkauf im Allgäu am günstigsten?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  <strong>Memmingen</strong> bietet mit durchschnittlich 3.600 €/m² die günstigsten Preise unter 
                  den größeren Städten. Auch <strong>Kaufbeuren</strong> (3.800 €/m²) ist vergleichsweise erschwinglich. 
                  In kleineren Gemeinden im Westallgäu oder Unterallgäu finden sich teilweise noch niedrigere Preise.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Lohnt sich der Kauf einer Ferienimmobilie im Allgäu?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Ja, besonders in <strong>Oberstdorf, Pfronten</strong> und anderen Ferienorten. Bei guter 
                  Vermietung sind Renditen von 6-8% realistisch. Wichtig: Rechnen Sie Verwaltungskosten, 
                  Instandhaltung und Nebenzeiten ein. Der Eigennutzungsanteil sollte unter 10% bleiben, 
                  um steuerliche Vorteile zu nutzen.
                </div>
              </details>

              <details className="card p-6 group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Werden die Preise 2026/2027 weiter steigen?</span>
                  <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700">
                  Experten erwarten ein moderates Wachstum von 3-5% je nach Lage. Das Allgäu profitiert von 
                  begrenztem Angebot und anhaltend hoher Nachfrage. Starke Preisrückgänge sind unwahrscheinlich, 
                  aber die Dynamik könnte sich durch steigende Zinsen etwas abschwächen.
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
            Was ist Ihre Immobilie im Allgäu wert?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Erhalten Sie in nur 2 Minuten eine kostenlose, datenbasierte Bewertung Ihrer Immobilie
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
        </div>
      </section>

      {/* Weitere Ratgeber */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Das könnte Sie auch interessieren</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/ratgeber/haus-kaufen-allgaeu"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">🏡</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Haus kaufen im Allgäu
              </h3>
              <p className="text-gray-600 text-sm">Der komplette Guide zum Hauskauf</p>
            </Link>
            <Link
              href="/ratgeber/immobilie-verkaufen"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Immobilie verkaufen
              </h3>
              <p className="text-gray-600 text-sm">So erzielen Sie den besten Preis</p>
            </Link>
            <Link
              href="/ratgeber/kapitalanlage-immobilien"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                Kapitalanlage Immobilien
              </h3>
              <p className="text-gray-600 text-sm">Rendite & Strategien im Allgäu</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
