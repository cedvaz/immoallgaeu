import CityPage from "@/components/pages/CityPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Immobilien Immenstadt – Kaufen, Verkaufen & Bewerten | Immo Allgäu",
    description: "Aktuelle Immobilienpreise für Immenstadt. Kostenlose Bewertung & Marktanalyse für Ihre Immobilie in der Residenzstadt am Großen Alpsee.",
};

export default function ImmenstadtCityPage() {
    return <CityPage citySlug="immenstadt" />;
}
