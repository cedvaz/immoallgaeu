import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import CityGrid from "@/components/sections/CityGrid";
import ValuationWidget from "@/components/sections/ValuationWidget";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <CityGrid />
      <ValuationWidget />
    </main>
  );
}
