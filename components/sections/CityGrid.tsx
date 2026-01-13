import Link from "next/link";
import { cities } from "@/lib/data/cities";

export default function CityGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Immobilien nach Städten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie aktuelle Marktpreise und Angebote in den wichtigsten Städten des Allgäus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/immobilien-${city.slug}`}
              className="card-interactive p-8 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {city.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    {city.avgPrice}
                  </span>
                  <span className="text-gray-600 font-medium">€/m²</span>
                </div>

                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Mehr erfahren</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
