import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

export const metadata: Metadata = {
  title: "Immobilien Allgäu – Kaufen, Verkaufen & Bewerten | ImmoAllgaeu",
  description: "Ihr regionaler Experte für Immobilien im Allgäu. Aktuelle Preise, kostenlose Bewertung und persönliche Beratung in Kempten, Kaufbeuren, Memmingen und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
