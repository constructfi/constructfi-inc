import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductIcon } from "@/components/product-icon";
import { ProductCard } from "@/components/product-card";
import { ProductShot } from "@/components/product-shot";
import { StatusPill } from "@/components/status-pill";
import { TagChips } from "@/components/tag-chip";
import { BobDemo } from "@/components/bob-demo";
import { StoreBadges } from "@/components/store-badges";
import { BuildOrBustedUnderwriting } from "@/components/product-details/build-or-busted-underwriting";
import { ConstructOSModuleMap } from "@/components/product-details/constructos-module-map";
import { PactPilotFindings } from "@/components/product-details/pact-pilot-findings";
import { MaterialMarketplacePricer } from "@/components/product-details/material-marketplace-pricer";
import { SupplierMarketplaceRFQ } from "@/components/product-details/supplier-marketplace-rfq";
import { HouseHackersMoves } from "@/components/product-details/house-hackers-moves";
import { CashflowTycoonShop } from "@/components/product-details/cashflow-tycoon-shop";
import { BrickByBrickPuzzle } from "@/components/product-details/brick-by-brick-puzzle";
import {
  CATEGORIES,
  PRODUCTS,
  getProduct,
  relatedProducts,
} from "@/lib/products";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

// Games and Build or Busted read "App Store · Google Play". Apps that are
// also available inside the ConstructOS platform read "Enterprise · iOS and
// Android". Every product except Digital Collectibles carries store badges.
const IN_PLATFORM_SLUGS = new Set([
  "revenueos",
  "covi-estimator",
  "readiness-tracker",
  "covi-wallet",
  "sales-academy",
  "material-marketplace",
  "supplier-marketplace",
  "pact-pilot",
  "eluvial-academy",
]);

const STATUS_PHASE: Record<string, string> = {
  live: "Launch",
  "coming-soon": "Phase 1",
  "phase-2": "Phase 2",
};

function accessLine(slug: string, category: string) {
  if (category === "games" || slug === "build-or-bust") {
    return "App Store · Google Play";
  }
  if (IN_PLATFORM_SLUGS.has(slug)) {
    return "Enterprise · iOS and Android";
  }
  return "App Store · Google Play";
}

// Detail sections built out per the Aug 26, 2026 handoff. Each product keeps
// its own approved typeface/palette per PRODUCT_BRANDS — see product-brand.ts.
const DETAIL_SECTIONS: Record<
  string,
  { eyebrow: string; title: string; description: string; Component: () => JSX.Element; fontClass?: string }
> = {
  "build-or-bust": {
    eyebrow: "Underwriting model",
    title: "Five sliders, one verdict",
    description:
      "Move the underwriting inputs and watch the Build / Hold / Busted verdict react against fixed, visible thresholds.",
    Component: BuildOrBustedUnderwriting,
  },
  revenueos: {
    eyebrow: "Inside ConstructOS",
    title: "Eight modules, one record",
    description:
      "Every module writes to a shared record, so a bid line traces from lead to closeout without a manual reconciliation.",
    Component: ConstructOSModuleMap,
  },
  "pact-pilot": {
    eyebrow: "Findings explainer",
    title: "Three risk states, plain-English findings",
    description: "Every clause lands in High Risk, Review, or Clear — with the reasoning attached.",
    Component: PactPilotFindings,
  },
  "material-marketplace": {
    eyebrow: "Live lot pricer",
    title: "Price a lot in real time",
    description: "Pick a listing, drag the quantity, and watch the line total, retail comparison, and stock recompute.",
    Component: MaterialMarketplacePricer,
  },
  "supplier-marketplace": {
    eyebrow: "RFQ comparison",
    title: "Six quotes, one schedule constraint",
    description: "Compare quotes side by side against a live delivery deadline and the verification record behind each supplier.",
    Component: SupplierMarketplaceRFQ,
  },
  "house-hackers": {
    eyebrow: "Opening moves",
    title: "Every move plays out a 12-month chain",
    description: "Pick an opening move and see how cash flow, equity, debt, and credit move over the next year.",
    Component: HouseHackersMoves,
  },
  "cashflow-city-tycoon": {
    eyebrow: "Plant shop",
    title: "Toggle upgrades, watch the bank move",
    description: "A $50,000 starting bank, three upgrades, and a rate of return that recomputes with every toggle.",
    Component: CashflowTycoonShop,
  },
  "brick-by-brick": {
    eyebrow: "Playable level",
    title: "Three solutions, real feedback",
    description: "Pick a solution to the level's constraint and see what actually happens next.",
    Component: BrickByBrickPuzzle,
  },
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — ConstructFi Marketplace`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — ${product.tagline}`,
      description: product.shortDescription,
      url: `${SITE.url}/marketplace/${product.slug}`,
    },
    alternates: { canonical: `/marketplace/${product.slug}` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.key === product.category)?.label;
  const related = relatedProducts(product.slug);

  return (
    <>
      <header className="section" style={{ borderTop: "none", paddingBottom: 40 }}>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/marketplace">Marketplace</Link>
            <span aria-hidden>/</span>
            <span>{product.name}</span>
          </nav>
          <div className="pd-hero">
            <div>
              <div className="pd-ic" aria-hidden>
                <ProductIcon icon={product.icon} size={28} />
              </div>
              <h1>{product.name}</h1>
              <p className="pd-tag">{product.tagline}</p>
              <div className="pd-meta">
                <span className="chip">{category}</span>
                <StatusPill status={product.status} />
              </div>
              <TagChips tags={product.tags} />
              <p className="pd-lede" style={{ marginTop: 18 }}>
                {product.shortDescription}
              </p>
              <div className="pd-ctas">
                {product.slug === "build-or-bust" ? (
                  <>
                    <Link className="btn btn-primary" href="/app#demo">
                      Try the interactive demo
                    </Link>
                    <Link className="btn btn-ghost" href="/app">
                      Full product showcase →
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="btn btn-primary" href="/getting-started">
                      How to get started
                    </Link>
                    <Link className="btn btn-ghost" href="/marketplace">
                      ← Back to the store
                    </Link>
                  </>
                )}
              </div>
              {product.slug !== "collectibles" && (
                <div style={{ marginTop: 22 }}>
                  <StoreBadges phase={STATUS_PHASE[product.status]} />
                </div>
              )}
            </div>
            <ProductShot product={product} />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="pd-body">
            <div>
              <div className="section-head" style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 25 }}>What it is</h2>
              </div>
              <p style={{ color: "var(--ink2)", fontSize: "15.5px", marginBottom: 30 }}>
                {product.longDescription}
              </p>
              <div className="section-head" style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 25 }}>What it does</h2>
              </div>
              <ul className="pd-feats">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="pd-note">
              <h3>How COVI &amp; ELUV apply</h3>
              <p>{product.coviEluvNote}</p>
              <p style={{ marginTop: 14, fontSize: "13px", color: "var(--ink3)" }}>
                COVI is a consumption token for ecosystem activity — not an investment.
                ELUV is non-transferable and confers no financial rights.
              </p>
              {product.slug !== "collectibles" && (
                <>
                  <h3 style={{ marginTop: 20 }}>Access</h3>
                  <p>{accessLine(product.slug, product.category)}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {product.slug === "build-or-bust" && (
        <section className="section dkband" id="demo">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Try it</span>
              <h2>Screen a deal right here</h2>
              <p>
                The full prototype runs in the frame below — pick a goal, answer the
                questions, and read the verdict. Every number is demonstration data.
              </p>
            </div>
            <BobDemo />
          </div>
        </section>
      )}

      {DETAIL_SECTIONS[product.slug] &&
        (() => {
          const detail = DETAIL_SECTIONS[product.slug];
          const { Component } = detail;
          return (
            <section className="section">
              <div className="wrap">
                <div className="section-head">
                  <span className="eyebrow">{detail.eyebrow}</span>
                  <h2>{detail.title}</h2>
                  <p>{detail.description}</p>
                </div>
                <Component />
              </div>
            </section>
          );
        })()}

      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <span className="eyebrow">Also in the store</span>
            <h2 style={{ fontSize: 27 }}>Related products</h2>
          </div>
          <div className="apps-row store-grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="store-line" style={{ marginTop: 30 }}>
            <Link className="btn btn-ghost" href="/marketplace">
              ← All products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
