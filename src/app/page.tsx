import { Hero } from "@/components/home/hero";
import { StatBand } from "@/components/home/stat-band";
import { ValueFlow } from "@/components/home/value-flow";
import { MarketplaceTeaser } from "@/components/home/marketplace-teaser";
import { AppTeaser } from "@/components/home/app-teaser";
import { Tokenomics } from "@/components/home/tokenomics";
import { Journey } from "@/components/home/journey";
import { Trust } from "@/components/home/trust";
import { FinalCTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <ValueFlow />
      <Tokenomics />
      <MarketplaceTeaser />
      <AppTeaser />
      <Journey />
      <Trust />
      <FinalCTA />
    </>
  );
}
