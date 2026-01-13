import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien Pfronten – Kaufen, Verkaufen & Bewerten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise und Marktanalyse für Pfronten. Ferienimmobilien und Wohnungen in der beliebten Urlaubsregion Pfronten.",
};

export default function PfrontenCityPage() {
  return <CityPage citySlug="pfronten" />;
}
