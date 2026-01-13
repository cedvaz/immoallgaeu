import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Oberstdorf – Kaufen, Verkaufen & Bewerten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise und Marktanalyse für Oberstdorf. Ferienimmobilien, Chalets und mehr im Allgäuer Bergort Oberstdorf.",
};

export default function OberstdorfCityPage() {
  return <CityPage citySlug="oberstdorf" />;
}
