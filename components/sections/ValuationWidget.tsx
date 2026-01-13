"use client";

import Link from "next/link";
import { useState } from "react";

export default function ValuationWidget() {
  const [plz, setPlz] = useState("");

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 rounded-3xl shadow-hard p-8 md:p-12 text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Schnell & präzise</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was ist Ihre Immobilie wert?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kostenlose Online-Bewertung in nur 2 Minuten
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Postleitzahl / Ort
                </label>
                <input
                  type="text"
                  placeholder="z.B. 87435 Kempten"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                  className="input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Immobilientyp
                </label>
                <select className="input">
                  <option>Wohnung</option>
                  <option>Haus</option>
                  <option>Grundstück</option>
                  <option>Gewerbe</option>
                </select>
              </div>
            </div>

            <Link
              href="/immobilienbewertung"
              className="group relative block w-full mt-6 bg-primary-600 text-white text-center px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-700 transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-medium"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Jetzt kostenlos bewerten
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Keine Anmeldung</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sofort verfügbar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
