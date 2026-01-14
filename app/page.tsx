import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import HowItWorks from "@/components/sections/HowItWorks";
import CityGrid from "@/components/sections/CityGrid";
import ValuationWidget from "@/components/sections/ValuationWidget";
import DataSources from "@/components/sections/DataSources";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <CityGrid />
      <ValuationWidget />
      <DataSources />
      <Newsletter />
    </main>
  );
}
