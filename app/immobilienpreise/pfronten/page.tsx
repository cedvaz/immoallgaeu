import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Pfronten 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Pfronten: Durchschnittspreise, Preisentwicklung und Marktanalyse. Kostenlose Bewertung.",
};

export default function PfrontenPricePage() {
  return <PricePage citySlug="pfronten" />;
}
