import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, type Product } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketplace — ConstructFi ecosystem",
  description:
    "Discover products that help you run projects, source materials, analyze deals, grow your team, and build new opportunities within the ConstructFi ecosystem.",
  openGraph: {
    title: "ConstructFi Marketplace — tools and opportunities for every stage of building",
    description:
      "Run your business, source materials, analyze deals, learn and grow — or build your organization's own solution with ConstructFi Partner Solutions.",
    url: `${SITE.url}/marketplace`,
    images: [{ url: "/img/marketplace.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/marketplace" },
};

/** Customer pathway tabs — primary navigation. Apps / materials / games are secondary filters. */
type PathwayTab = "all" | "run" | "source" | "analyze" | "learn" | "build";

const PATHWAY_TABS: { key: PathwayTab; label: string; desc: string }[] = [
  { key: "all", label: "All", desc: "Everything in the ecosystem" },
  { key: "run", label: "Run Your Business", desc: "ConstructOS · Covington Sales Academy" },
  { key: "source", label: "Source & Buy", desc: "BuilderBae · Supplier Marketplace" },
  { key: "analyze", label: "Analyze & Invest", desc: "Build or Busted · PactPilot · Eluvial Academy" },
  { key: "learn", label: "Learn & Grow", desc: "Eluvial Academy · Covington Sales Academy · Covi BuildSim · Brick by Brick" },
  { key: "build", label: "Build With ConstructFi", desc: "Custom solutions for organizations" },
];

function pathwayForProduct(product: Product): Exclude<PathwayTab, "all" | "build"> {
  switch (product.slug) {
    case "constructos":
    case "revenueos":
    case "sales-academy":
      return "run";
    case "builderbae":
    case "supplier-marketplace":
    case "material-marketplace":
    case "covi-estimator":
      return "source";
    case "build-or-bust":
    case "pactpilot":
      return "analyze";
    case "eluvial-academy":
    case "house-hackers":
    case "covi-buildsim":
    case "brick-by-brick":
    case "readiness-tracker":
    case "covi-wallet":
    default:
      return "learn";
  }
}

function isPathwayTab(value: string | undefined): value is PathwayTab {
  return PATHWAY_TABS.some((tab) => tab.key === value);
}

const BUILD_WITH_PATHWAYS = [
  {
    who: "Nonprofits & community organizations",
    what: "Readiness programs, material access tools, and project coordination — with token participation optional and government/public-interest programs token-free by default.",
  },
  {
    who: "Public agencies & municipal programs",
    what: "Verified procurement, community development tracking, and program readiness infrastructure. Token participation is optional; public-interest programs are token-free by default.",
  },
  {
    who: "Educational institutions",
    what: "Curriculum-aligned readiness programs, ELUV credentialing integrations, and student-facing learning pathways built on the ConstructFi ecosystem.",
  },
  {
    who: "Industry organizations & trade groups",
    what: "Supplier vetting, procurement coordination, workforce development programs, and ecosystem participation tools tailored to industry standards.",
  },
  {
    who: "Suppliers & manufacturers",
    what: "Verified listing in the Supplier and Material Marketplaces, procurement integration, and fee-backed participation in the COVI rewards pool.",
  },
  {
    who: "Private enterprises",
    what: "Custom integration of ConstructFi infrastructure — deal analysis, estimating, procurement, and reporting — wired to your existing operations.",
  },
];

export default function MarketplacePage({
  searchParams,
}: {
  searchParams?: { tab?: string };
}) {
  const activeTab = isPathwayTab(searchParams?.tab) ? searchParams.tab : "all";
  const visibleProducts = PRODUCTS.filter(
    (product) => activeTab === "all" || pathwayForProduct(product) === activeTab
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="section" style={{ borderTop: "none", paddingBottom: 44 }}>
        <div className="wrap">
          <span className="eyebrow">Ecosystem Marketplace</span>
          <h1 style={{ fontSize: 44, fontWeight: 800, margin: "0 0 14px", maxWidth: 760 }}>
            Tools and opportunities for every stage of building.
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink2)", maxWidth: 680, lineHeight: 1.65 }}>
            Discover products that help you run projects, source materials, analyze deals,
            grow your team, and build new opportunities. Use each solution on its own — or
            connect it through the ConstructFi ecosystem as your work grows.
          </p>
          <div className="store-line">
            <span className="chip soon">Launching {SITE.launchDate}</span>
            <span className="chip">Free to explore</span>
            <span className="chip covi">Powered by real commerce</span>
          </div>
        </div>
      </header>

      {/* ── Pathway browse ───────────────────────────────────────────────── */}
      <section className="section" id="s-browse" style={{ paddingTop: 8, borderTop: "none" }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: 27 }}>Explore by pathway</h2>
            <p>
              Every solution serves a specific job. Find the pathway that matches
              where you are in your work.
            </p>
          </div>

          {/* Tab bar */}
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
              <div className="cat-tabs" role="tablist" aria-label="Customer pathways">
                {PATHWAY_TABS.map((tab) => {
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
              {activeTab !== "build" && (
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
                  {visibleProducts.length}{" "}
                  {visibleProducts.length === 1 ? "product" : "products"}
                </span>
              )}
            </div>
          </div>

          {/* Products grid or Build With panel */}
          <section style={{ padding: "36px 0 80px" }}>
            {activeTab === "build" ? (
              <div>
                <div
                  style={{
                    background: "#041428",
                    color: "#fff",
                    padding: "48px 40px",
                    marginBottom: 36,
                    maxWidth: 800,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10.5px",
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.5)",
                      marginBottom: 14,
                    }}
                  >
                    Partner Solutions
                  </span>
                  <h2 style={{ fontSize: 30, fontWeight: 700, margin: "0 0 14px" }}>
                    Build your organization&apos;s solution with ConstructFi.
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,.75)",
                      maxWidth: 560,
                    }}
                  >
                    ConstructFi infrastructure is available to nonprofits, public agencies,
                    educational institutions, industry organizations, suppliers, and private
                    enterprises. Token participation is optional — government and
                    public-interest programs are token-free by default.
                  </p>
                  <Link
                    className="btn btn-primary"
                    href="/partners"
                    style={{ marginTop: 24, display: "inline-block" }}
                  >
                    Start a partner conversation
                  </Link>
                </div>
                <div
                  style={{
                    display: "grid",
                    gap: 18,
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                  }}
                  data-testid="product-grid"
                >
                  {BUILD_WITH_PATHWAYS.map((path) => (
                    <div
                      key={path.who}
                      style={{
                        border: "1px solid #d3dfe9",
                        background: "#fbfdff",
                        padding: "28px 24px",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 10px",
                          fontSize: 15.5,
                          fontWeight: 600,
                        }}
                      >
                        {path.who}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "rgba(0,51,107,.65)",
                        }}
                      >
                        {path.what}
                      </p>
                    </div>
                  ))}
                </div>
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

      {/* ── Image-led feature rows ────────────────────────────────────────── */}
      <section className="section alt" id="s-featured-pathways">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Highlighted pathways</span>
            <h2>Products built for the way you actually work</h2>
          </div>

          {/* Materials row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
              marginBottom: 64,
            }}
            className="feature-row"
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: 10,
                }}
              >
                Source &amp; Buy
              </span>
              <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px" }}>
                BuilderBae &amp; Supplier Marketplace
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink2)" }}>
                Procure materials and services from a vetted network backed by Covington
                Supply Co.&apos;s ~$7M of annual operations across six markets. Materials
                are organized the way a builder thinks — by project type and phase, not
                catalogue number.
              </p>
              <Link className="btn btn-ghost" href="/marketplace?tab=source" style={{ marginTop: 18, display: "inline-block" }}>
                Browse materials →
              </Link>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", background: "#041428" }}>
              <Image
                src="/products/supplier-marketplace.webp"
                alt="BuilderBae and Supplier Marketplace — vetted materials sourcing for builders"
                width={900}
                height={1350}
                style={{ width: "100%", height: "auto", display: "block", maxHeight: 340, objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Learn row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
            className="feature-row"
          >
            <div style={{ borderRadius: 4, overflow: "hidden", background: "#041428", order: -1 }}>
              <Image
                src="/products/readiness-tracker.webp"
                alt="Eluvial Academy and Readiness Tracker — verified real-estate learning and readiness milestones"
                width={900}
                height={1350}
                style={{ width: "100%", height: "auto", display: "block", maxHeight: 340, objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: 10,
                }}
              >
                Learn &amp; Grow
              </span>
              <h3 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px" }}>
                Eluvial Academy · Covi BuildSim · Brick by Brick
              </h3>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink2)" }}>
                Structured real-estate and construction learning through play, simulation,
                and verified milestones. Each verified completion can mint an ELUV credential
                — a soulbound record of what you actually learned and demonstrated.
              </p>
              <Link className="btn btn-ghost" href="/marketplace?tab=learn" style={{ marginTop: 18, display: "inline-block" }}>
                Explore learning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Solutions CTA ─────────────────────────────────────────── */}
      <section className="section dkband" id="s-partners">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Partner Solutions</span>
            <h2>Build with ConstructFi infrastructure.</h2>
            <p>
              ConstructFi is the ecosystem. Partner Solutions is how organizations —
              nonprofits, public agencies, educational institutions, industry groups,
              suppliers, and private enterprises — build their own programs and solutions
              on top of it. Token participation is always optional. Government and
              public-interest programs are token-free by default.
            </p>
          </div>
          <div className="store-line" style={{ marginTop: 26 }}>
            <Link className="btn btn-primary" href="/partners">
              Start a partner conversation
            </Link>
            <Link className="btn btn-ghost" href="/marketplace?tab=build">
              See partner pathways →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Participation section ─────────────────────────────────────────── */}
      <section className="section" id="s-participation">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ecosystem participation</span>
            <h2>COVI &amp; ELUV — the participation layer</h2>
            <p>
              COVI and ELUV are optional participation layers in the ConstructFi ecosystem,
              not products for sale. They are earned through eligible activity — never
              purchased as investments or traded for yield.
            </p>
          </div>
          <div className="grid2" style={{ gap: 32 }}>
            <div
              style={{
                border: "1px solid #d3dfe9",
                background: "#fbfdff",
                padding: "32px 28px",
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
              }}
            >
              <Image
                src="/coins/covi.png"
                alt="COVI coin — utility for eligible ecosystem activity"
                width={64}
                height={64}
                style={{ flexShrink: 0, borderRadius: "50%" }}
              />
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>COVI</h3>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontWeight: 600,
                    color: "var(--teal)",
                    fontSize: 14,
                  }}
                >
                  Utility for eligible ecosystem activity.
                </p>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink2)" }}>
                  Designed to support defined access and participation across ConstructFi
                  and Covington experiences.
                </p>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #d3dfe9",
                background: "#fbfdff",
                padding: "32px 28px",
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
              }}
            >
              <Image
                src="/coins/eluv.png"
                alt="ELUV coin — verified progress in real estate"
                width={64}
                height={64}
                style={{ flexShrink: 0, borderRadius: "50%" }}
              />
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>ELUV</h3>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontWeight: 600,
                    color: "var(--teal)",
                    fontSize: 14,
                  }}
                >
                  Verified progress in real estate.
                </p>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink2)" }}>
                  A non-transferable credential designed to recognize learning, readiness,
                  and defined program milestones within the Eluvial ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="store-line" style={{ marginTop: 26 }}>
            <Link className="btn btn-ghost" href="/participation">
              About COVI &amp; ELUV →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Digital Collectibles (coming soon, de-emphasized) ──────────────── */}
      <section
        className="section"
        id="s-collectibles"
        style={{ paddingTop: 0, borderTop: "none" }}
      >
        <div className="wrap">
          <div
            style={{
              border: "1px dashed #c5d4e0",
              background: "#f8fbfd",
              padding: "28px 32px",
              maxWidth: 700,
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "10px",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(0,51,107,.4)",
                marginBottom: 10,
              }}
            >
              Future feature
            </span>
            <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600 }}>
              Digital Collectibles — Coming soon.
            </h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--ink2)" }}>
              Future ConstructFi digital-collectible experiences may provide defined access,
              community, and ecosystem benefits. Availability, terms, and eligibility will
              be announced before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
