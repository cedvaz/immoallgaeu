import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-primary-700 group-hover:text-primary-600 transition-colors">
              Immo<span className="text-secondary-600">Allgäu</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/immobilienbewertung"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Bewertung
            </Link>
            <Link
              href="/immobilienpreise"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Preise
            </Link>
            <Link
              href="/ratgeber"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Ratgeber
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <Link
            href="/immobilienbewertung"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 hover:shadow-medium transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Jetzt bewerten</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
