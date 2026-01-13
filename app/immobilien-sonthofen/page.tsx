import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Sonthofen – Kaufen, Verkaufen & Bewerten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise und Marktanalyse für Sonthofen. Kostenlose Bewertung für Immobilien in der Kreisstadt Sonthofen.",
};

export default function SonthofenCityPage() {
  return <CityPage citySlug="sonthofen" />;
}
