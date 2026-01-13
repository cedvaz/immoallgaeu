import Link from "next/link";
import { cities } from "@/lib/data/cities";

export default function CityGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Immobilien nach Städten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/immobilien-${city.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {city.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Ø {city.avgPrice} €/m²
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                Mehr erfahren →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
