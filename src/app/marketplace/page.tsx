import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProductCard, ProductCard } from "@/components/product-card";
import {
  CATEGORIES,
  FEATURED_PRODUCT,
  PRODUCTS,
  type ProductCategory,
} from "@/lib/products";
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

type MarketplaceTab = ProductCategory | "all";

const MARKETPLACE_TABS = CATEGORIES.map(({ key, label }) => ({ key, label }));

const NFT_SWATCHES = [
  "#e4b95b",
  "#00d19a",
  "#1bb6fd",
  "#8298fc",
  "#386641",
  "#ff5a1f",
  "#d3dfe9",
  "#eef3f8",
  "#00a87c",
];

const DIGITAL_COLLECTIBLES = PRODUCTS.find((product) => product.slug === "collectibles");

function isMarketplaceTab(value: string | undefined): value is MarketplaceTab {
  return MARKETPLACE_TABS.some((tab) => tab.key === value);
}

export default function MarketplacePage({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const activeTab = isMarketplaceTab(searchParams?.tab) ? searchParams.tab : "all";
  const visibleProducts = PRODUCTS.filter((product) => product.slug !== "collectibles").filter(
    (product) => (activeTab === "all" ? product.category !== "own" : product.category === activeTab)
  );
  const visibleCount = activeTab === "own" ? 1 : visibleProducts.length;

  return (
    <>
      <header className="section dkband market-hero" style={{ borderTop: "none" }}>
        <div className="bg-grid-fine market-hero-grid" aria-hidden />
        <div className="wrap market-hero-gridwrap">
          <div>
            <span className="eyebrow">The app store</span>
            <h1 style={{ fontSize: 44, fontWeight: 800, margin: "0 0 14px", maxWidth: 760 }}>
              Every ConstructFi product, in one place.
            </h1>
            <p style={{ fontSize: 18, color: "var(--ink2)", maxWidth: 620 }}>
              Explore apps, services, materials, learning platforms, AI tools, and
              interactive experiences. Use products independently or discover how they
              connect through the ConstructFi ecosystem.
            </p>
            <div className="store-line">
              <span className="chip soon">Launching {SITE.launchDate}</span>
              <span className="chip free">Free to browse</span>
              <span className="chip covi">Rewards funded by real commerce</span>
            </div>
          </div>
          <div className="market-hero-aside">
            <div className="market-mini-card">
              <span className="market-mini-k">What ships at launch</span>
              <strong>{PRODUCTS.filter((product) => product.status === "live").length} products</strong>
              <p>Flagship apps, verified supplier workflows, and marketplace discovery.</p>
            </div>
            <div className="market-mini-card">
              <span className="market-mini-k">Why the marketplace matters</span>
              <strong>Commerce first</strong>
              <p>Supplier activity funds the rewards loop instead of synthetic emissions.</p>
            </div>
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
              ConstructFi is the ecosystem. The Marketplace is where people discover
              it. The products are how people use it.
            </p>
          </div>
          <div className="card market-toolbar">
            <div className="store-bar" style={{ marginBottom: 0 }}>
              <div className="cat-tabs" role="tablist" aria-label="Product categories">
                {MARKETPLACE_TABS.map((tab) => {
                  const isActive = activeTab === tab.key;

                  return (
                    <Link
                      key={tab.key}
                      href={tab.key === "all" ? "/marketplace" : `/marketplace?tab=${tab.key}`}
                      role="tab"
                      aria-selected={isActive}
                      data-testid={`tab-${tab.key}`}
                      className={isActive ? "cat-tab on" : "cat-tab"}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
              <span className="store-count" data-testid="product-count" aria-live="polite">
                {visibleCount} {visibleCount === 1 ? "product" : "products"}
              </span>
            </div>
          </div>

          <section style={{ padding: "36px 0 96px" }}>
            {activeTab === "own" && DIGITAL_COLLECTIBLES ? (
              <div className="apps-row store-grid" data-testid="product-grid">
                <a
                  href="https://opensea.io/collection/constructfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="own-card"
                  className="own-card"
                >
                  <div className="own-card-line" />
                  <div className="own-card-media">
                    <div className="own-card-swatches">
                      {NFT_SWATCHES.map((swatch, index) => (
                        <div key={`${swatch}-${index}`} style={{ aspectRatio: "1", background: swatch }} />
                      ))}
                    </div>
                    <span className="own-card-label">NFT</span>
                  </div>
                  <div className="own-card-body">
                    <div className="own-card-kicker">Participate in the ecosystem</div>
                    <h3>{DIGITAL_COLLECTIBLES.name}</h3>
                    <p className="own-card-tag">{DIGITAL_COLLECTIBLES.tagline}</p>
                    <p className="own-card-copy">{DIGITAL_COLLECTIBLES.shortDescription}</p>
                    <div className="own-card-link">View collections on OpenSea ↗</div>
                  </div>
                </a>
              </div>
            ) : visibleProducts.length > 0 ? (
              <div className="apps-row store-grid" data-testid="product-grid">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <p className="store-empty" data-testid="product-empty">
                No products in this view yet.
              </p>
            )}
          </section>
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
