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
      <header className="section" style={{ borderTop: "none", paddingBottom: 44 }}>
        <div className="wrap">
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
              ConstructFi is the ecosystem. The Marketplace is where people discover
              it. The products are how people use it.
            </p>
          </div>
          <div style={{ border: "1px solid #d3dfe9", background: "#fff" }}>
            <div
              className="store-bar"
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "14px 32px",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                alignItems: "center",
              }}
            >
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
                      style={{
                        cursor: "pointer",
                        padding: "8px 15px",
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "11.5px",
                        fontWeight: isActive ? 600 : 500,
                        textTransform: "uppercase",
                        letterSpacing: ".1em",
                        textDecoration: "none",
                        background: isActive ? "#041428" : "#fff",
                        border: isActive ? "none" : "1px solid #dee6ee",
                        color: isActive ? "#fff" : "rgba(0,51,107,.7)",
                      }}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "rgba(0,51,107,.45)",
                }}
                data-testid="product-count"
                aria-live="polite"
              >
                {visibleCount} {visibleCount === 1 ? "product" : "products"}
              </span>
            </div>
          </div>

          <section style={{ padding: "36px 0 96px" }}>
            {activeTab === "own" && DIGITAL_COLLECTIBLES ? (
              <div
                className="store-grid"
                data-testid="product-grid"
                style={{
                  display: "grid",
                  gap: 18,
                  gridTemplateColumns: "repeat(auto-fill,minmax(292px,1fr))",
                }}
              >
                <a
                  href="https://opensea.io/collection/constructfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="own-card"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    border: "1px dashed #b7c6d3",
                    background: "#fbfdff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: 5, background: "#e4b95b" }} />
                  <div
                    style={{
                      position: "relative",
                      height: 190,
                      background: "#041428",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: 6,
                        width: 120,
                      }}
                    >
                      {NFT_SWATCHES.map((swatch, index) => (
                        <div
                          key={`${swatch}-${index}`}
                          style={{ aspectRatio: "1", background: swatch }}
                        />
                      ))}
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        left: 16,
                        top: 14,
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: 10,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.5)",
                      }}
                    >
                      NFT
                    </span>
                  </div>
                  <div
                    style={{
                      padding: 22,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      borderTop: "1px solid #dee6ee",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10.5px",
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "rgba(0,51,107,.5)",
                      }}
                    >
                      Participate in the Ecosystem
                    </div>
                    <h3
                      style={{
                        margin: "12px 0 0",
                        fontSize: 19.5,
                        fontWeight: 600,
                        letterSpacing: "-.012em",
                      }}
                    >
                      {DIGITAL_COLLECTIBLES.name}
                    </h3>
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontSize: 15,
                        lineHeight: 1.5,
                        fontWeight: 500,
                        color: "#00a87c",
                      }}
                    >
                      {DIGITAL_COLLECTIBLES.tagline}
                    </p>
                    <p
                      style={{
                        margin: "14px 0 0",
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "rgba(0,51,107,.65)",
                        flex: 1,
                        textWrap: "pretty",
                      }}
                    >
                      {DIGITAL_COLLECTIBLES.shortDescription}
                    </p>
                    <div
                      style={{
                        marginTop: 18,
                        paddingTop: 14,
                        borderTop: "1px solid #eef3f8",
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: "#00a87c",
                      }}
                    >
                      View collections on OpenSea ↗
                    </div>
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
