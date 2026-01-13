import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">ImmoAllgäu</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/immobilienbewertung" className="text-gray-700 hover:text-blue-600">
              Bewertung
            </Link>
            <Link href="/immobilienpreise" className="text-gray-700 hover:text-blue-600">
              Preise
            </Link>
            <Link href="/ratgeber" className="text-gray-700 hover:text-blue-600">
              Ratgeber
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600">
              Kontakt
            </Link>
          </nav>

          <Link
            href="/immobilienbewertung"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Jetzt bewerten
          </Link>
        </div>
      </div>
    </header>
  );
}
