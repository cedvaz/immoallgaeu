import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Immobilien im Allgäu –<br />
          Preise, Angebote & Bewertung
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Ihr regionaler Experte für Kempten, Kaufbeuren, Memmingen und das gesamte Allgäu
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/immobilienbewertung"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Immobilie bewerten
          </Link>
          <Link
            href="/immobilienpreise"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            Aktuelle Preise ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
