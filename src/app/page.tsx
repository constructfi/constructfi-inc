import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, FEATURED_PRODUCT, CATEGORIES } from "@/lib/products";
import { COVI, ELUV } from "@/lib/site";

// 9 audience tags shown in the hero
const AUDIENCE_TAGS = [
  "Contractors",
  "Suppliers",
  "Developers",
  "Investors",
  "Nonprofits",
  "Agencies",
  "Institutions",
  "Entrepreneurs",
  "Partners",
];

// Five ecosystem layers
const LAYERS = [
  {
    n: "01",
    title: "Marketplace",
    body: "Discover apps, services, materials, learning platforms, and interactive experiences curated for the built world — all in one place.",
    accent: "#00a87c",
  },
  {
    n: "02",
    title: "Products",
    body: "Access specialized tools for operations, procurement, deal analysis, education, and more — each built for a specific job to be done.",
    accent: "#1BB6FD",
  },
  {
    n: "03",
    title: "Partner Solutions",
    body: "ConstructFi-powered platforms built for nonprofits, banks, agencies, and institutions — with their brand, their community, their program.",
    accent: "#8298FC",
  },
  {
    n: "04",
    title: "Participation",
    body: "Eligible activity across connected products and communities earns COVI utility and builds a soulbound ELUV readiness record.",
    accent: "#E4B95B",
  },
  {
    n: "05",
    title: "Community",
    body: "The people, programs, and partners who build together — connected through a shared protocol and a portable participation record.",
    accent: "#00D19A",
  },
];

// Six marketplace categories
const HP_CATEGORIES = [
  {
    key: "run",
    label: "Run Your Business",
    need: "Integrated ops, estimating, procurement, and reporting for contractors and suppliers.",
    examples: "ConstructOS",
    accent: "rgba(27,182,253,.15)",
    color: "#1BB6FD",
  },
  {
    key: "source",
    label: "Source Materials",
    need: "Verified suppliers, surplus materials, and procurement management in one workflow.",
    examples: "Supplier Marketplace · Material Marketplace",
    accent: "rgba(0,168,124,.12)",
    color: "#00a87c",
  },
  {
    key: "analyze",
    label: "Analyze Deals",
    need: "AI-powered deal screening, contract intelligence, and financial analysis.",
    examples: "Build or Busted · PactPilot",
    accent: "rgba(130,152,252,.12)",
    color: "#8298FC",
  },
  {
    key: "learn",
    label: "Learn and Build Skills",
    need: "Expert-led training, AI coaching, and verified learning across real estate and construction.",
    examples: "Eluvial Academy · Covington Sales Academy",
    accent: "rgba(228,185,91,.12)",
    color: "#E4B95B",
  },
  {
    key: "play",
    label: "Play, Practice, Explore",
    need: "Real-world simulations and interactive games that build decision-making skills.",
    examples: "House Hackers · Cashflow Tycoon",
    accent: "rgba(255,107,122,.10)",
    color: "#FF6B7A",
  },
  {
    key: "own",
    label: "Own",
    need: "NFT collectibles and digital assets tied to real construction and real estate history.",
    examples: "Collectibles",
    accent: "rgba(0,209,154,.10)",
    color: "#00D19A",
  },
];

// Partner types list for section 04
const BUILD_TYPES = [
  { n: "01", title: "Nonprofits & community development organizations" },
  { n: "02", title: "Banking & financial institutions" },
  { n: "03", title: "Government & public agencies" },
  { n: "04", title: "Workforce development programs" },
  { n: "05", title: "Institutional & corporate partnerships" },
  { n: "06", title: "Developers & technology integrators" },
];

// Products for the featured section: lead + 3 side cards
const FEATURED_LEAD = FEATURED_PRODUCT;
const FEATURED_SIDE = PRODUCTS.filter((p) => p.slug !== FEATURED_LEAD.slug).slice(0, 3);

/** Accent color per product category */
const CAT_ACCENT: Record<string, string> = {
  run: "#1BB6FD",
  source: "#00a87c",
  analyze: "#8298FC",
  learn: "#E4B95B",
  play: "#FF6B7A",
  own: "#00D19A",
};

/** Hero phone mockup – app home screen (illustrative) */
function HeroPhone() {
  const tiles = [
    { mono: "OS", name: "ConstructOS" },
    { mono: "BoB", name: "Build or Busted" },
    { mono: "SM", name: "Supplier Marketplace" },
    { mono: "EA", name: "Eluvial Academy" },
    { mono: "PP", name: "PactPilot" },
    { mono: "HH", name: "House Hackers" },
  ];
  return (
    <div
      aria-label="Illustrative ConstructFi app home screen"
      role="img"
      style={{
        width: "100%",
        maxWidth: 330,
        margin: "0 auto",
        border: "1px solid rgba(255,255,255,.18)",
        borderBottom: "none",
        borderRadius: "30px 30px 0 0",
        background: "#0a1b31",
        padding: "14px 14px 0",
      }}
    >
      <div
        style={{
          borderRadius: "20px 20px 0 0",
          background: "#061527",
          padding: "18px 16px 0",
          border: "1px solid rgba(255,255,255,.08)",
          borderBottom: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 9.5, letterSpacing: ".14em", color: "rgba(255,255,255,.4)" }}>9:41</span>
          <span style={{ display: "flex", gap: 3, alignItems: "flex-end" }}>
            <span style={{ width: 3, height: 6, background: "rgba(255,255,255,.35)", display: "block" }} />
            <span style={{ width: 3, height: 9, background: "rgba(255,255,255,.45)", display: "block" }} />
            <span style={{ width: 3, height: 12, background: "rgba(255,255,255,.6)", display: "block" }} />
          </span>
        </div>
        <div style={{ marginTop: 22, fontSize: 19, fontWeight: 600, color: "#fff", letterSpacing: "-.02em" }}>Good morning</div>
        <div style={{ marginTop: 3, fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#00d19a" }}>Your ecosystem</div>
        <div style={{ marginTop: 18, display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr" }}>
          {tiles.map((t) => (
            <div
              key={t.mono}
              style={{
                border: "1px solid rgba(255,255,255,.1)",
                background: "rgba(255,255,255,.04)",
                padding: "12px 11px",
                display: "grid",
                gap: 14,
              }}
            >
              <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 13, fontWeight: 600, color: "#00d19a" }}>{t.mono}</span>
              <span style={{ fontSize: 11, lineHeight: 1.25, color: "rgba(255,255,255,.72)" }}>{t.name}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 14,
            borderTop: "1px solid rgba(255,255,255,.08)",
            padding: "12px 0 16px",
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
        >
          <span style={{ width: 7, height: 7, background: "#00d19a", display: "block" }} />
          <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 9.5, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
            Marketplace · {PRODUCTS.length} products
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ========================================================
          SECTION 1 — HERO  (dark navy, grid + radial gradients)
      ======================================================== */}
      <section
        aria-label="ConstructFi — hero"
        style={{
          position: "relative",
          background: "#041428",
          backgroundImage: [
            "radial-gradient(1100px 520px at 78% -10%, rgba(27,182,253,.16), transparent 62%)",
            "radial-gradient(820px 460px at 2% 8%, rgba(0,209,154,.13), transparent 58%)",
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "auto, auto, 64px 64px, 64px 64px",
          padding: "96px 0 0",
          overflow: "hidden",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "grid",
            gap: 64,
            gridTemplateColumns: "minmax(0,1.12fr) minmax(300px,.88fr)",
            alignItems: "end",
          }}
        >
          {/* Left: headline + CTAs */}
          <div style={{ paddingBottom: 104 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 44, height: 1, background: "#00d19a", display: "block", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--font-manrope,'Manrope',sans-serif)",
                  fontWeight: 600,
                  fontSize: 11.5,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#00d19a",
                }}
              >
                Construction. Real estate. Opportunity. Connected.
              </span>
            </div>

            <h1
              style={{
                margin: "26px 0 0",
                fontSize: "clamp(44px,5.4vw,72px)",
                lineHeight: 0.98,
                letterSpacing: "-.04em",
                fontWeight: 600,
                color: "#fff",
                maxWidth: "15ch",
              }}
            >
              The ecosystem for people who build.
            </h1>

            <p
              style={{
                margin: "26px 0 0",
                maxWidth: "52ch",
                fontSize: 19,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.72)",
              }}
            >
              ConstructFi connects the tools, marketplaces, intelligence, education, and
              experiences that help contractors, suppliers, developers, investors, and
              entrepreneurs build what is next.
            </p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/marketplace"
                data-testid="button-hero-marketplace"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "15px 24px",
                  fontSize: 15.5,
                  fontWeight: 600,
                  background: "#00d19a",
                  color: "#041428",
                  textDecoration: "none",
                  transition: "background .15s ease",
                }}
              >
                Explore the Marketplace <span style={{ fontFamily: "inherit" }}>→</span>
              </Link>
              <Link
                href="/partners"
                data-testid="button-hero-partners"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "15px 24px",
                  fontSize: 15.5,
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,.26)",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "background .15s ease",
                }}
              >
                Build With ConstructFi
              </Link>
            </div>

            {/* Audience tags */}
            <div
              style={{
                marginTop: 44,
                paddingTop: 22,
                borderTop: "1px solid rgba(255,255,255,.12)",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
              aria-label="Who ConstructFi serves"
            >
              {AUDIENCE_TAGS.map((a) => (
                <span
                  key={a}
                  style={{
                    fontFamily: "var(--font-manrope,'Manrope',sans-serif)",
                    fontSize: 10.5,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.5)",
                    border: "1px solid rgba(255,255,255,.14)",
                    padding: "5px 10px",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div style={{ alignSelf: "end" }}>
            <HeroPhone />
            <p
              style={{
                margin: "14px 0 0",
                textAlign: "center",
                fontFamily: "var(--font-manrope,'Manrope',sans-serif)",
                fontSize: 10,
                lineHeight: 1.7,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.38)",
              }}
            >
              App home screen — illustrative
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2 — ECOSYSTEM  (white, sticky left + layer list)
      ======================================================== */}
      <section
        id="s-ecosystem"
        aria-label="Ecosystem introduction"
        style={{ padding: "92px 0", borderBottom: "1px solid #dee6ee" }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: 56,
              gridTemplateColumns: "minmax(0,.95fr) minmax(300px,1.05fr)",
              alignItems: "start",
            }}
          >
            {/* Sticky left column */}
            <div style={{ position: "sticky", top: 104 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderBottom: "1px solid #dee6ee",
                  paddingBottom: 10,
                }}
              >
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, color: "#00a87c" }}>01</span>
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(0,51,107,.55)" }}>Ecosystem introduction</span>
              </div>
              <h2
                style={{
                  margin: "24px 0 0",
                  fontSize: "clamp(32px,3.4vw,44px)",
                  fontWeight: 600,
                  letterSpacing: "-.032em",
                  lineHeight: 1.05,
                  color: "#00336b",
                }}
              >
                More than an app. A connected ecosystem.
              </h2>
              <p style={{ margin: "18px 0 0", maxWidth: "46ch", fontSize: 17.5, lineHeight: 1.65, color: "rgba(0,51,107,.68)" }}>
                ConstructFi is the mobile-first gateway to a growing network of specialized
                products for the built world. Discover what you need today — from operations
                and procurement to real estate intelligence, training, and materials — then
                access more as your business, projects, and goals grow.
              </p>
              <p
                style={{
                  margin: "22px 0 0",
                  maxWidth: "44ch",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "rgba(0,51,107,.6)",
                  borderLeft: "2px solid #00d19a",
                  paddingLeft: 16,
                }}
              >
                ConstructFi is the ecosystem. The Marketplace is where people discover it.
                The products are how people use it. Partner Solutions are how organizations
                build with it.
              </p>
            </div>

            {/* Layer list */}
            <div>
              {LAYERS.map((l) => (
                <div
                  key={l.n}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px minmax(0,1fr)",
                    gap: 22,
                    padding: "26px 0",
                    borderTop: "1px solid #dee6ee",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: ".1em", color: "#00a87c" }}>{l.n}</div>
                    <div
                      style={{
                        marginTop: 12,
                        width: 34,
                        height: 34,
                        borderRadius: 8,
                        background: l.accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      aria-hidden="true"
                    >
                      <span style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,.85)", display: "block" }} />
                    </div>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, letterSpacing: "-.015em", color: "#00336b" }}>{l.title}</h3>
                    <p style={{ margin: "8px 0 0", fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,51,107,.65)" }}>{l.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — MARKETPLACE INTRO  (#f2f7fb)
      ======================================================== */}
      <section
        id="s-marketplace"
        aria-label="Marketplace"
        style={{ padding: "92px 0", background: "#f2f7fb", borderBottom: "1px solid #dee6ee" }}
      >
        <div className="wrap">
          <div style={{ maxWidth: 780 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                borderBottom: "1px solid #d5dfe9",
                paddingBottom: 10,
              }}
            >
              <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, color: "#00a87c" }}>02</span>
              <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(0,51,107,.55)" }}>Marketplace</span>
            </div>
            <h2 style={{ margin: "24px 0 0", fontSize: "clamp(32px,3.4vw,44px)", fontWeight: 600, letterSpacing: "-.032em", lineHeight: 1.05, color: "#00336b" }}>
              Find the right tool for the next move.
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 17.5, lineHeight: 1.65, color: "rgba(0,51,107,.68)" }}>
              Explore a curated collection of apps, services, materials, learning platforms,
              AI tools, and interactive experiences. Use products independently or discover
              how they connect through the ConstructFi ecosystem.
            </p>
          </div>

          {/* Category grid */}
          <div
            style={{
              display: "grid",
              gap: 1,
              marginTop: 44,
              background: "#dee6ee",
              border: "1px solid #dee6ee",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {HP_CATEGORIES.map((c) => (
              <Link
                key={c.key}
                href={`/marketplace#cat-${c.key}`}
                style={{
                  background: "#fff",
                  padding: "28px 26px 30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  textDecoration: "none",
                  transition: "background-color .15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      borderRadius: 7,
                      background: c.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-hidden="true"
                  >
                    <span style={{ width: 14, height: 14, borderRadius: "50%", background: c.color, opacity: 0.85 }} />
                  </span>
                  <h3 style={{ margin: 0, fontSize: 18.5, fontWeight: 600, letterSpacing: "-.01em", color: "#00336b" }}>{c.label}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "rgba(0,51,107,.66)" }}>{c.need}</p>
                <div style={{ marginTop: "auto", fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontWeight: 600, fontSize: 12.5, letterSpacing: ".01em", color: "#00a87c" }}>{c.examples}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4 — FEATURED PRODUCTS  (white)
      ======================================================== */}
      <section
        id="s-products"
        aria-label="Featured products"
        style={{ padding: "92px 0", borderBottom: "1px solid #dee6ee" }}
      >
        <div className="wrap">
          {/* Section header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderBottom: "1px solid #dee6ee",
                  paddingBottom: 10,
                }}
              >
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, color: "#00a87c" }}>03</span>
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(0,51,107,.55)" }}>Featured products</span>
              </div>
              <h2 style={{ margin: "24px 0 0", fontSize: "clamp(30px,3.2vw,42px)", fontWeight: 600, letterSpacing: "-.032em", lineHeight: 1.06, color: "#00336b" }}>
                Explore our Featured Products
              </h2>
            </div>
            <Link
              href="/marketplace"
              style={{
                fontFamily: "var(--font-manrope,'Manrope',sans-serif)",
                fontSize: 11.5,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#00a87c",
                borderBottom: "1px solid rgba(0,168,124,.4)",
                paddingBottom: 3,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              All {PRODUCTS.length} products →
            </Link>
          </div>

          {/* Product grid: lead + 3 side cards */}
          <div
            style={{
              display: "grid",
              gap: 20,
              marginTop: 44,
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            {/* Lead card */}
            <Link
              href={`/marketplace/${FEATURED_LEAD.slug}`}
              style={{
                border: "1px solid #d3dfe9",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "border-color .15s ease, box-shadow .2s ease",
              }}
            >
              {/* Color accent bar */}
              <div style={{ height: 36, background: CAT_ACCENT[FEATURED_LEAD.category] ?? "#00d19a" }} />
              {/* Product image */}
              <div style={{ position: "relative", flex: 1, minHeight: 280 }}>
                {FEATURED_LEAD.image ? (
                  <Image
                    src={FEATURED_LEAD.image}
                    alt={`${FEATURED_LEAD.name} product screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(160deg, ${CAT_ACCENT[FEATURED_LEAD.category] ?? "#00d19a"}22 0%, transparent 60%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: 48, fontWeight: 800, color: CAT_ACCENT[FEATURED_LEAD.category] ?? "#00d19a", opacity: 0.35 }}>{FEATURED_LEAD.mono}</span>
                  </div>
                )}
              </div>
              {/* Text */}
              <div style={{ padding: 28, borderTop: "1px solid #d3dfe9" }}>
                <div style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(0,51,107,.5)" }}>
                  {FEATURED_LEAD.category}
                </div>
                <h3 style={{ margin: "14px 0 0", fontSize: 26, fontWeight: 600, letterSpacing: "-.022em", color: "#00336b" }}>{FEATURED_LEAD.name}</h3>
                <p style={{ margin: "10px 0 0", fontSize: 17, lineHeight: 1.45, fontWeight: 500, color: "#00a87c" }}>{FEATURED_LEAD.tagline}</p>
                <p style={{ margin: "16px 0 0", maxWidth: "52ch", fontSize: 15.5, lineHeight: 1.6, color: "rgba(0,51,107,.68)" }}>{FEATURED_LEAD.shortDescription}</p>
              </div>
            </Link>

            {/* Side cards column */}
            <div style={{ display: "grid", gap: 20, alignContent: "start" }}>
              {FEATURED_SIDE.map((p) => (
                <Link
                  key={p.slug}
                  href={`/marketplace/${p.slug}`}
                  style={{
                    border: "1px solid #d3dfe9",
                    background: "#fff",
                    display: "grid",
                    gridTemplateColumns: "168px minmax(0,1fr)",
                    textDecoration: "none",
                    transition: "border-color .15s ease, box-shadow .2s ease, transform .2s ease",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      position: "relative",
                      minHeight: 158,
                      borderRight: "1px solid #d3dfe9",
                      overflow: "hidden",
                    }}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.name} thumbnail`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="168px"
                      />
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(140deg, ${CAT_ACCENT[p.category] ?? "#00d19a"}18 0%, transparent 70%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: 28, fontWeight: 800, color: CAT_ACCENT[p.category] ?? "#00d19a", opacity: 0.35 }}>{p.mono}</span>
                      </div>
                    )}
                  </div>
                  {/* Text */}
                  <div style={{ padding: "20px 22px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 8, height: 8, background: CAT_ACCENT[p.category] ?? "#00d19a", display: "block", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(0,51,107,.5)" }}>{p.category}</span>
                    </div>
                    <h3 style={{ margin: "10px 0 0", fontSize: 18.5, fontWeight: 600, letterSpacing: "-.014em", color: "#00336b" }}>{p.name}</h3>
                    <p style={{ margin: "6px 0 0", fontSize: 14.5, lineHeight: 1.45, fontWeight: 500, color: "#00a87c" }}>{p.tagline}</p>
                    <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: "rgba(0,51,107,.65)" }}>{p.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5 — PARTNER SOLUTIONS  (dark #041428 + grid)
      ======================================================== */}
      <section
        id="s-partners"
        aria-label="Partner Solutions"
        style={{
          padding: "100px 0",
          background: "#041428",
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "64px 64px",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: 60,
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              alignItems: "start",
            }}
          >
            {/* Left: heading + CTA */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, color: "#00d19a" }}>04</span>
                <span style={{ width: 30, height: 1, background: "rgba(0,209,154,.6)", display: "block" }} />
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".22em", color: "#00d19a" }}>
                  Built for organizations that build impact
                </span>
              </div>
              <h2
                style={{
                  margin: "24px 0 0",
                  fontSize: "clamp(32px,3.6vw,46px)",
                  fontWeight: 600,
                  letterSpacing: "-.035em",
                  lineHeight: 1.04,
                  color: "#fff",
                  maxWidth: "20ch",
                }}
              >
                Turn your mission into a digital platform.
              </h2>
              <p style={{ margin: "20px 0 0", maxWidth: "52ch", fontSize: 17.5, lineHeight: 1.6, color: "rgba(255,255,255,.7)" }}>
                ConstructFi works with nonprofits, government agencies, institutions, and
                private organizations to create custom mobile and web experiences that
                connect people to programs, resources, education, services, and opportunity.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link
                  href="/partners"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "15px 24px",
                    fontSize: 15.5,
                    fontWeight: 600,
                    background: "#00d19a",
                    color: "#041428",
                    textDecoration: "none",
                    transition: "background .15s ease",
                  }}
                >
                  Explore Partner Solutions <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: quote + build types list */}
            <div>
              <p style={{ margin: 0, fontSize: 26, lineHeight: 1.35, fontWeight: 500, color: "#fff", letterSpacing: "-.02em", maxWidth: "24ch" }}>
                Your mission. Your community. Your platform. Built on ConstructFi.
              </p>
              <div style={{ marginTop: 32, display: "grid" }}>
                {BUILD_TYPES.map((b) => (
                  <div
                    key={b.n}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "baseline",
                      padding: "13px 0",
                      borderTop: "1px solid rgba(255,255,255,.12)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 10.5, color: "#00d19a", flexShrink: 0 }}>{b.n}</span>
                    <span style={{ fontSize: 15.5, color: "rgba(255,255,255,.82)" }}>{b.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 — PARTICIPATION  (white, COVI + ELUV)
      ======================================================== */}
      <section
        id="s-participation"
        aria-label="Participation — COVI and ELUV"
        style={{ padding: "92px 0", borderBottom: "1px solid #dee6ee" }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gap: 56,
              gridTemplateColumns: "minmax(0,1fr) minmax(300px,.9fr)",
              alignItems: "start",
            }}
          >
            {/* Left: text */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  borderBottom: "1px solid #dee6ee",
                  paddingBottom: 10,
                }}
              >
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, color: "#00a87c" }}>05</span>
                <span style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(0,51,107,.55)" }}>Participation</span>
              </div>
              <h2 style={{ margin: "24px 0 0", fontSize: "clamp(30px,3.2vw,42px)", fontWeight: 600, letterSpacing: "-.032em", lineHeight: 1.06, color: "#00336b" }}>
                Participation that grows with the ecosystem.
              </h2>
              <p style={{ margin: "18px 0 0", maxWidth: "56ch", fontSize: 17.5, lineHeight: 1.65, color: "rgba(0,51,107,.68)" }}>
                ConstructFi is building a participation layer designed to recognize eligible
                activity across connected products and communities. COVI and ELUV may support
                access, engagement, learning, and defined member benefits as the ecosystem evolves.
              </p>
              <div style={{ marginTop: 26 }}>
                <Link
                  href="/marketplace#participation"
                  style={{
                    fontFamily: "var(--font-manrope,'Manrope',sans-serif)",
                    fontSize: 11.5,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#00a87c",
                    borderBottom: "1px solid rgba(0,168,124,.4)",
                    paddingBottom: 3,
                    textDecoration: "none",
                  }}
                >
                  How participation works →
                </Link>
              </div>
            </div>

            {/* Right: token cards */}
            <div style={{ display: "grid", gap: 16 }}>
              {/* COVI card */}
              <Link
                href="/marketplace#covi"
                style={{
                  border: "1px solid #dee6ee",
                  padding: 26,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  background: "linear-gradient(180deg, rgba(0,168,124,.05), rgba(0,168,124,0))",
                  textDecoration: "none",
                  transition: "border-color .15s ease",
                }}
              >
                <Image
                  src="/coins/covi.png"
                  alt="COVI token coin"
                  width={56}
                  height={56}
                  style={{ borderRadius: "50%", flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#00a87c" }}>COVI · {COVI.standard}</div>
                  <h3 style={{ margin: "8px 0 0", fontSize: 19, fontWeight: 600, color: "#00336b", letterSpacing: "-.015em" }}>The utility token</h3>
                  <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,51,107,.65)" }}>
                    Earned through eligible participation and spent across ecosystem features.
                    Fixed supply of {COVI.supply} on {COVI.chain.split(",")[0]}.
                  </p>
                  <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "rgba(0,51,107,.5)" }}>
                    Not an investment. Any sale under a compliant exemption with KYC/AML screening.
                  </p>
                </div>
              </Link>

              {/* ELUV card */}
              <Link
                href="/marketplace#eluv"
                style={{
                  border: "1px solid #dee6ee",
                  padding: 26,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  background: "linear-gradient(180deg, rgba(228,185,91,.05), rgba(228,185,91,0))",
                  textDecoration: "none",
                  transition: "border-color .15s ease",
                }}
              >
                <Image
                  src="/coins/eluv.png"
                  alt="ELUV soulbound credential coin"
                  width={56}
                  height={56}
                  style={{ borderRadius: "50%", flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontFamily: "var(--font-manrope,'Manrope',sans-serif)", fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#db8a0e" }}>ELUV · {ELUV.standard.split(" ")[0]}</div>
                  <h3 style={{ margin: "8px 0 0", fontSize: 19, fontWeight: 600, color: "#00336b", letterSpacing: "-.015em" }}>The readiness credential</h3>
                  <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.55, color: "rgba(0,51,107,.65)" }}>
                    Soulbound. Minted only by verified milestones. Cannot be bought,
                    sold, or transferred — your readiness record is yours alone.
                  </p>
                  <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "rgba(0,51,107,.5)" }}>
                    Earned only — never sold, never transferable.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7 — CLOSING CTA  (#f2f7fb)
      ======================================================== */}
      <section
        id="s-closing"
        aria-label="Get started"
        style={{ padding: "104px 0", background: "#f2f7fb" }}
      >
        <div className="wrap">
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px,4.2vw,52px)",
              fontWeight: 600,
              letterSpacing: "-.038em",
              lineHeight: 1.02,
              maxWidth: "22ch",
              color: "#00336b",
            }}
          >
            Start with what you need. Build what comes next.
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "62ch", fontSize: 18, lineHeight: 1.6, color: "rgba(0,51,107,.68)" }}>
            ConstructFi is the connected ecosystem for construction and real estate. Explore
            powerful tools, marketplaces, learning, and experiences built for the people who
            make the built world move.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/marketplace"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 24px",
                fontSize: 15.5,
                fontWeight: 600,
                background: "#041428",
                color: "#fff",
                textDecoration: "none",
                transition: "background .15s ease",
              }}
            >
              Explore Marketplace
            </Link>
            <Link
              href="/partners"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "15px 24px",
                fontSize: 15.5,
                fontWeight: 500,
                border: "1px solid #041428",
                color: "#041428",
                textDecoration: "none",
                transition: "background .15s ease",
              }}
            >
              Build With ConstructFi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
