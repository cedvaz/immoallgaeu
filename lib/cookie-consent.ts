// Cookie Consent Management
export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const COOKIE_NAME = 'immoallgaeu_cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

export const getConsentCookie = (): CookieConsent | null => {
  if (typeof window === 'undefined') return null;
  
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${COOKIE_NAME}=`));
  
  if (!cookie) return null;
  
  try {
    const value = cookie.split('=')[1];
    return JSON.parse(decodeURIComponent(value));
  } catch {
    return null;
  }
};

export const setConsentCookie = (consent: CookieConsent): void => {
  if (typeof window === 'undefined') return;
  
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_EXPIRY_DAYS);
  
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(consent))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

export const hasConsent = (): boolean => {
  return getConsentCookie() !== null;
};

export const hasAnalyticsConsent = (): boolean => {
  const consent = getConsentCookie();
  return consent?.analytics === true;
};

export const hasMarketingConsent = (): boolean => {
  const consent = getConsentCookie();
  return consent?.marketing === true;
};

// Load Google Analytics only if consent is given
export const loadGoogleAnalytics = (measurementId: string) => {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;
  
  // Load gtag.js
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure',
  });
};

// Declare gtag types
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
