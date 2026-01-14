import type { Metadata } from "next";
import TeamPage from "@/components/pages/TeamPage";

export const metadata: Metadata = {
  title: "Unser KI-Team – 7 AI-Agenten für Immobilienbewertung | ImmoAllgäu",
  description:
    "Lernen Sie die 7 KI-Agenten kennen, die ImmoAllgäu antreiben: Ada, Quinn, Robin, Mia, Sam, Theo und Ria. Keine Stock-Fotos, keine fake Experten – nur ehrliche, transparente Technologie.",
  keywords: [
    "KI Team",
    "AI Agenten",
    "Immobilien KI",
    "Transparenz",
    "Automatisierung",
    "Data Analyst",
    "Machine Learning",
  ],
  openGraph: {
    title: "Unser KI-Team – 7 AI-Agenten im Einsatz",
    description:
      "24/7 Uptime, 0 Kaffeepausen, 99.9% Verfügbarkeit. Ehrliche Technologie für präzise Immobilienbewertungen im Allgäu.",
    type: "website",
    images: [
      {
        url: "/og-team.png",
        width: 1200,
        height: 630,
        alt: "ImmoAllgäu KI-Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unser KI-Team – 7 AI-Agenten",
    description:
      "Kein Bullshit. Nur ehrliche KI. 7 Agenten arbeiten 24/7 für präzise Immobilienbewertungen.",
  },
};

export default function TeamRoute() {
  return <TeamPage />;
}
