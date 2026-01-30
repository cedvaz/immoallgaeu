'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getConsentCookie, setConsentCookie, type CookieConsent } from '@/lib/cookie-consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getConsentCookie();
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    setConsentCookie(consent);
    setShowBanner(false);
    
    // Reload page to activate tracking
    window.location.reload();
  };

  const acceptNecessary = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    setConsentCookie(consent);
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent: CookieConsent = {
      ...preferences,
      necessary: true, // Always true
      timestamp: Date.now(),
    };
    setConsentCookie(consent);
    setShowBanner(false);
    
    // Reload if analytics/marketing enabled
    if (preferences.analytics || preferences.marketing) {
      window.location.reload();
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[9998] animate-fade-in" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {!showSettings ? (
              // Main Banner
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Cookie-Einstellungen
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Wir verwenden Cookies und ähnliche Technologien, um die Nutzung unserer Website 
                      zu analysieren und Ihnen personalisierte Inhalte anzubieten. Technisch notwendige 
                      Cookies sind für die Basisfunktionen unserer Website erforderlich. Weitere 
                      Informationen finden Sie in unserer{' '}
                      <Link href="/datenschutz" className="text-primary-600 hover:underline font-semibold">
                        Datenschutzerklärung
                      </Link>.
                    </p>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-green-900 text-sm">Notwendig</span>
                    </div>
                    <p className="text-xs text-green-800">
                      Technische Cookies für Basisfunktionen
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="font-semibold text-blue-900 text-sm">Analyse</span>
                    </div>
                    <p className="text-xs text-blue-800">
                      Zur Verbesserung unserer Website
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                      <span className="font-semibold text-purple-900 text-sm">Marketing</span>
                    </div>
                    <p className="text-xs text-purple-800">
                      Für personalisierte Inhalte
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-sm"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                  >
                    Einstellungen
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Mit &quot;Alle akzeptieren&quot; stimmen Sie der Verwendung aller Cookies zu.
                </p>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 sm:p-8">
                <button
                  onClick={() => setShowSettings(false)}
                  className="mb-4 text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Detaillierte Einstellungen
                </h2>

                <div className="space-y-6">
                  {/* Notwendige Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          Notwendige Cookies
                        </h3>
                        <p className="text-sm text-gray-600">
                          Diese Cookies sind für die Basisfunktionen der Website erforderlich und 
                          können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                          Immer aktiv
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">
                      <strong>Cookies:</strong> immoallgaeu_cookie_consent
                    </div>
                  </div>

                  {/* Analyse Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          Analyse & Performance
                        </h3>
                        <p className="text-sm text-gray-600">
                          Diese Cookies helfen uns, die Nutzung unserer Website zu verstehen und 
                          Verbesserungen vorzunehmen. Alle Daten werden anonymisiert erfasst.
                        </p>
                      </div>
                      <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">
                      <strong>Zweck:</strong> Website-Analyse, Besucherstatistiken<br />
                      <strong>Anbieter:</strong> Google Analytics (anonymisiert)
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-gray-200 rounded-lg p-6 bg-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          Marketing & Personalisierung
                        </h3>
                        <p className="text-sm text-gray-600">
                          Diese Cookies ermöglichen personalisierte Werbung und Inhalte basierend 
                          auf Ihrem Nutzungsverhalten. Sie können von Drittanbietern gesetzt werden.
                        </p>
                      </div>
                      <div className="ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">
                      <strong>Zweck:</strong> Personalisierte Werbung, Remarketing<br />
                      <strong>Anbieter:</strong> Google Ads, Meta Pixel (wenn aktiviert)
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button
                    onClick={savePreferences}
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-sm"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm text-blue-900">
                      <strong>Hinweis:</strong> Sie können Ihre Einstellungen jederzeit in unserer{' '}
                      <Link href="/datenschutz" className="underline font-semibold hover:text-blue-700">
                        Datenschutzerklärung
                      </Link>{' '}
                      ändern.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
