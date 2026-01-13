import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Oberstdorf 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Oberstdorf: Durchschnittspreise, Preisentwicklung und Marktanalyse. Kostenlose Bewertung.",
};

export default function OberstdorfPricePage() {
  return <PricePage citySlug="oberstdorf" />;
}
