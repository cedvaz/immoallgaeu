import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Kempten – Kaufen, Verkaufen & Bewerten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise und Marktanalyse für Kempten. Kostenlose Bewertung, Expertentipps und alle Informationen zum Immobilienmarkt in Kempten (Allgäu).",
};

export default function KemptenCityPage() {
  return <CityPage citySlug="kempten" />;
}
