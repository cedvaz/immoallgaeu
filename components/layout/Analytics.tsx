'use client';

import { useEffect } from 'react';
import { loadGoogleAnalytics, hasAnalyticsConsent } from '@/lib/cookie-consent';

export default function Analytics() {
  useEffect(() => {
    // Load Google Analytics if user has consented
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
      // Check if we already have consent (for page reloads)
      if (hasAnalyticsConsent()) {
        loadGoogleAnalytics(measurementId);
      }

      // Listen for consent changes
      const handleConsentChange = () => {
        if (hasAnalyticsConsent()) {
          loadGoogleAnalytics(measurementId);
        }
      };

      // Check every second for consent changes (simple polling)
      const interval = setInterval(handleConsentChange, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return null; // This component doesn't render anything
}