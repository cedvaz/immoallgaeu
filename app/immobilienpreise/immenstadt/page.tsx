import PricePage from "@/components/pages/PricePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilienpreise Immenstadt 2025 – Aktuelle Marktdaten | ImmoAllgäu",
  description: "Aktuelle Immobilienpreise in Immenstadt im Allgäu: Durchschnittspreise, Preisentwicklung und Marktanalyse für Wohnungen, Häuser und Grundstücke. Kostenlose Bewertung.",
};

export default function ImmenstadtPricePage() {
  return <PricePage citySlug="immenstadt" />;
}
