"use client";

import Link from "next/link";
import { useState } from "react";

export default function ValuationWidget() {
  const [plz, setPlz] = useState("");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Was ist Ihre Immobilie wert?
          </h2>
          <p className="text-center mb-8 text-blue-100">
            Kostenlose Bewertung in nur 2 Minuten
          </p>

          <div className="bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postleitzahl / Ort
                </label>
                <input
                  type="text"
                  placeholder="z.B. 87435 Kempten"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Immobilientyp
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Wohnung</option>
                  <option>Haus</option>
                  <option>Grundstück</option>
                  <option>Gewerbe</option>
                </select>
              </div>
            </div>

            <Link
              href="/immobilienbewertung"
              className="block w-full mt-6 bg-blue-600 text-white text-center px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Jetzt kostenlos bewerten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
