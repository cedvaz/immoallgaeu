import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Kaufbeuren 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Kaufbeuren: Durchschnittspreise, Preisentwicklung und Marktanalyse. Kostenlose Bewertung.",
};

export default function KaufbeurenPricePage() {
  return <PricePage citySlug="kaufbeuren" />;
}
