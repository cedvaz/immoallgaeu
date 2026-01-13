import Link from "next/link";
import { cities } from "@/lib/data/cities";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ImmoAllgäu</h3>
            <p className="text-gray-400">
              Ihr regionaler Experte für Immobilien im Allgäu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Städte</h4>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/immobilien-${city.slug}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/immobilienbewertung" className="text-gray-400 hover:text-white">Bewertung</Link></li>
              <li><Link href="/immobilienpreise" className="text-gray-400 hover:text-white">Preise</Link></li>
              <li><Link href="/ratgeber" className="text-gray-400 hover:text-white">Ratgeber</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-gray-400 hover:text-white">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ImmoAllgäu. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
