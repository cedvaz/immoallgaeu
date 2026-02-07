import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import Analytics from "@/components/layout/Analytics";

export const metadata: Metadata = {
  title: "Immobilien Allgäu – Kaufen, Verkaufen & Bewerten | ImmoAllgaeu",
  description: "Ihr regionaler Experte für Immobilien im Allgäu. Aktuelle Preise, kostenlose Bewertung und persönliche Beratung in Kempten, Kaufbeuren, Memmingen und Umgebung.",
  keywords: "Immobilien Allgäu, Haus kaufen, Wohnung verkaufen, Immobilienbewertung, Kempten, Kaufbeuren, Memmingen, Immobilienpreise, Immobilienmakler",
  authors: [{ name: "Cedric Vazquez Boo" }],
  creator: "ImmoAllgaeu",
  publisher: "ImmoAllgaeu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.immoallgaeu.com'),
  openGraph: {
    title: "Immobilien Allgäu – Kaufen, Verkaufen & Bewerten",
    description: "Ihr regionaler Experte für Immobilien im Allgäu. Aktuelle Preise, kostenlose Bewertung und persönliche Beratung.",
    url: "https://www.immoallgaeu.com",
    siteName: "ImmoAllgaeu",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Add this image later
        width: 1200,
        height: 630,
        alt: "ImmoAllgaeu - Immobilien im Allgäu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilien Allgäu – Kaufen, Verkaufen & Bewerten",
    description: "Ihr regionaler Experte für Immobilien im Allgäu. Aktuelle Preise, kostenlose Bewertung und persönliche Beratung.",
    images: ["/images/twitter-image.jpg"], // Add this image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "awFeTC-Ii8zLsMb0fBzeeRSsy3c8veDsNSpD6fhvX3I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ImmoAllgaeu',
    description: 'Ihr regionaler Experte für Immobilien im Allgäu. Aktuelle Preise, kostenlose Bewertung und persönliche Beratung.',
    url: 'https://www.immoallgaeu.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Am Frickenland 4',
      addressLocality: 'Kempten',
      postalCode: '87437',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@immoallgaeu.com',
    },
  };

  return (
    <html lang="de">
      <body className="antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
