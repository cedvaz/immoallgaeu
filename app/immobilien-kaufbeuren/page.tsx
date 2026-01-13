import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Kaufbeuren – Kaufen, Verkaufen & Bewerten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise und Marktanalyse für Kaufbeuren. Kostenlose Bewertung und Expertentipps für den Immobilienmarkt in Kaufbeuren.",
};

export default function KaufbeurenCityPage() {
  return <CityPage citySlug="kaufbeuren" />;
}
