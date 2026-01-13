import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Memmingen 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Memmingen: Durchschnittspreise, Preisentwicklung und Marktanalyse. Kostenlose Bewertung.",
};

export default function MemmingenPricePage() {
  return <PricePage citySlug="memmingen" />;
}
