import type { Metadata } from "next";
import Link from "next/link";
import { ProductBrowser } from "@/components/product-browser";
import { FeaturedProductCard } from "@/components/product-card";
import { FEATURED_PRODUCT } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketplace — the ConstructFi app store",
  description:
    "Every ConstructFi product in one place: apps, games, materials, and collectibles. Browse the store, see what ships at launch, and learn how COVI and ELUV apply.",
  openGraph: {
    title: "The ConstructFi App Store",
    description:
      "Apps, games, materials, and collectibles — plus the verified supplier network that funds the rewards loop.",
    url: `${SITE.url}/marketplace`,
    images: [{ url: "/img/marketplace.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/marketplace" },
};

const ECONOMICS = [
  {
    n: "01",
    t: "Verified supplier network",
    d: "Every supplier is vetted before listing. Procurement flows through Covington Supply Co.’s ~$7M/year operations across six markets.",
  },
  {
    n: "02",
    t: "Fees recycle into rewards",
    d: "A share of marketplace transaction fees recycles into the COVI rewards pool, so participation is funded by genuine commerce rather than by printing tokens.",
  },
  {
    n: "03",
    t: "Verified activity earns ELUV",
    d: "Real procurement and completed milestones can mint ELUV — a soulbound credential that is earned only and can never be transferred or sold.",
  },
  {
    n: "04",
    t: "Settlement you can check",
    d: "Transactions settle transparently on-chain. Verified contract addresses are published after independent audit — not before.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <header className="section" style={{ borderTop: "none", paddingBottom: 44 }}>
        <div className="wrap">
          <span className="eyebrow">The app store</span>
          <h1 style={{ fontSize: 44, fontWeight: 800, margin: "0 0 14px", maxWidth: 760 }}>
            Every ConstructFi product, in one place.
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink2)", maxWidth: 620 }}>
            Apps, games, materials, and collectibles — the marketplace is the single
            store for everything the platform ships. Browse what arrives at launch and
            what is sequenced behind it.
          </p>
          <div className="store-line">
            <span className="chip soon">Launching {SITE.launchDate}</span>
            <span className="chip">Free to browse</span>
            <span className="chip covi">Rewards funded by real commerce</span>
          </div>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0, borderTop: "none" }}>
        <div className="wrap">
          <FeaturedProductCard product={FEATURED_PRODUCT} />
        </div>
      </section>

      <section className="section" id="s-browse" style={{ paddingTop: 8, borderTop: "none" }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: 27 }}>Browse the store</h2>
            <p>
              Nothing here is presented as shipped before it is. Dates and phases are
              honest labels, not download links.
            </p>
          </div>
          <ProductBrowser />
        </div>
      </section>

      <section className="section dkband" id="s-economics">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Commerce first. Rewards follow.</h2>
            <p>
              ConstructFi’s thesis is simple: rewards should be paid from a real,
              verified supplier network. The marketplace is where that commerce
              happens — and where the rewards loop gets funded.
            </p>
          </div>
          <div className="primer">
            {ECONOMICS.map((e) => (
              <div className="pr" key={e.n}>
                <div className="pr-n">{e.n}</div>
                <div className="pr-t">{e.t}</div>
                <p className="pr-d">{e.d}</p>
              </div>
            ))}
          </div>
          <div className="disclaim" style={{ marginTop: 30 }}>
            <b>COVI is a consumption token for ecosystem activity — not an investment.</b>{" "}
            It is an ERC-20 utility token with a fixed 10,000,000,000 cap, transfer-paused
            and earn-only before listing. ELUV is an ERC-5192 soulbound credential: earned
            through verified milestones, never sold, never transferable.
          </div>
          <div className="store-line" style={{ marginTop: 26 }}>
            <Link className="btn btn-primary" href="/getting-started">
              How to start
            </Link>
            <Link className="btn btn-ghost" href="/whitepaper">
              Read the whitepaper →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
