import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Memmingen – Kaufen, Verkaufen & Bewerten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise und Marktanalyse für Memmingen. Kostenlose Bewertung und Expertentipps für den Immobilienmarkt in Memmingen.",
};

export default function MemmingenCityPage() {
  return <CityPage citySlug="memmingen" />;
}
