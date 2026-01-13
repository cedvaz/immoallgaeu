import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Sonthofen 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Sonthofen: Durchschnittspreise, Preisentwicklung und Marktanalyse. Kostenlose Bewertung.",
};

export default function SonthofenPricePage() {
  return <PricePage citySlug="sonthofen" />;
}
