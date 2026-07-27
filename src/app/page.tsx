import { Hero } from "@/components/home/hero";
import { StatBand } from "@/components/home/stat-band";
import { ValueFlow } from "@/components/home/value-flow";
import { EcosystemAccess } from "@/components/home/ecosystem-access";
import { MarketplaceTeaser } from "@/components/home/marketplace-teaser";
import { NftCollections } from "@/components/home/nft-collections";
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
      <section id="platform">
        <ValueFlow />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <EcosystemAccess />
      <section id="marketplace">
        <MarketplaceTeaser />
      </section>
      <NftCollections />
      <section id="the-app">
        <AppTeaser />
      </section>
      <section id="roadmap">
        <Journey />
      </section>
      <section id="trust">
        <Trust />
      </section>
      <FinalCTA />
    </>
  );
}
