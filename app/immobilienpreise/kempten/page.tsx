import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Kempten 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Kempten: Durchschnittspreise, Preisentwicklung und Marktanalyse für Wohnungen, Häuser und Grundstücke. Kostenlose Bewertung.",
};

export default function KemptenPricePage() {
  return <PricePage citySlug="kempten" />;
}
