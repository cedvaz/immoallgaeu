import type { Metadata } from "next";
import MarketReportPage from "@/components/pages/MarketReportPage";

export const metadata: Metadata = {
  title: "Marktreport Kempten 2026/2027 – Preisentwicklung & Prognose | ImmoAllgäu",
  description:
    "Datenbasierter Immobilien-Marktreport für Kempten: Historische Preisentwicklung 2020-2026, aktuelle Marktanalyse und Prognose bis 2027. Inklusive Investment-Renditen und Stadtteil-Vergleich.",
  keywords: [
    "Immobilienpreise Kempten",
    "Marktreport Kempten",
    "Immobilien Kempten 2026",
    "Prognose Immobilienmarkt Kempten",
    "Kapitalanlage Kempten",
    "Stadtteil-Vergleich Kempten",
  ],
  openGraph: {
    title: "Marktreport Kempten 2026/2027 – Preisentwicklung & Prognose",
    description:
      "Umfassender Marktreport für Immobilien in Kempten: Historische Daten 2020-2026, Prognosen bis 2027, Investment-Analysen und Stadtteil-Vergleiche.",
    type: "article",
    publishedTime: "2026-02-07",
    images: [
      {
        url: "/og-marktreport-kempten.png",
        width: 1200,
        height: 630,
        alt: "Kempten Immobilienmarkt Report 2026/2027",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marktreport Kempten 2026/2027",
    description:
      "Datenbasierter Immobilien-Marktreport: Historische Entwicklung, aktuelle Lage und Prognose bis 2027",
  },
};

export default function KemptenMarketReportRoute() {
  return <MarketReportPage citySlug="kempten" />;
}
