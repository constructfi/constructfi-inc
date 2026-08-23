import type { Metadata } from "next";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { ProductIcon } from "@/components/product-icon";
import { ProductCard } from "@/components/product-card";
import { ProductShot } from "@/components/product-shot";
import { StatusPill } from "@/components/status-pill";
import { TagChips } from "@/components/tag-chip";
import { BobDemo } from "@/components/bob-demo";
import {
  CATEGORIES,
  PRODUCTS,
  getProduct,
  relatedProducts,
} from "@/lib/products";
import { getProductBrand } from "@/lib/product-brand";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  // Include canonical slugs and all legacy aliases so static generation
  // pre-renders both /marketplace/constructos and /marketplace/revenueos.
  const params: { slug: string }[] = [];
  for (const p of PRODUCTS) {
    params.push({ slug: p.slug });
    if (p.aliases) {
      for (const alias of p.aliases) {
        params.push({ slug: alias });
      }
    }
  }
  return params;
}

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

  // Redirect legacy alias slugs to the canonical URL.
  if (product && params.slug !== product.slug) {
    redirect(`/marketplace/${product.slug}`);
  }

  // product is guaranteed non-null after the notFound() guard above.
  // TypeScript doesn't narrow through notFound(), so we assert here.
  const p = product!;

  const brand = getProductBrand(p.slug);
  const accent = brand?.accent ?? "#041428";
  const accentSecondary = brand?.accentSecondary ?? "#00A896";
  const audience = brand?.audience;
  const cta = brand?.primaryCTA ?? "Learn more";
  const category = CATEGORIES.find((c) => c.key === p.category)?.label;
  const related = relatedProducts(p.slug);

  // CTA href depends on primary CTA text and product slug.
  function ctaHref() {
    if (p.slug === "build-or-bust") return "/app#demo";
    if (cta === "Join waitlist") return "/getting-started";
    if (cta === "Explore Phase 2") return "/marketplace";
    return "/getting-started";
  }

  return (
    <>
      {/* Per-product accent bar */}
      <div style={{ height: 6, background: accent }} aria-hidden />

      <header className="section" style={{ borderTop: "none", paddingBottom: 40 }}>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/marketplace">Marketplace</Link>
            <span aria-hidden>/</span>
            <span>{p.name}</span>
          </nav>
          <div className="pd-hero">
            <div>
              <div className="pd-ic" aria-hidden>
                <ProductIcon icon={p.icon} size={28} />
              </div>
              <h1>{p.name}</h1>
              {/* Master endorsement — required below product name on detail pages */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 11.5,
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  color: "rgba(0,51,107,.5)",
                  margin: "4px 0 8px",
                }}
              >
                Part of the ConstructFi ecosystem
              </p>
              <p className="pd-tag">{p.tagline}</p>
              <div className="pd-meta">
                <span className="chip">{category}</span>
                <StatusPill status={p.status} />
              </div>
              <TagChips tags={p.tags} />
              {audience && (
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 13.5,
                    color: "var(--ink2)",
                    fontStyle: "italic",
                  }}
                >
                  For: {audience}
                </p>
              )}
              <p className="pd-lede" style={{ marginTop: 18 }}>
                {p.shortDescription}
              </p>
              <div className="pd-ctas">
                {p.slug === "build-or-bust" ? (
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
                    <Link
                      className="btn btn-primary"
                      href={ctaHref()}
                      style={{ background: accent }}
                    >
                      {cta}
                    </Link>
                    <Link className="btn btn-ghost" href="/marketplace">
                      ← Back to the store
                    </Link>
                  </>
                )}
              </div>
            </div>
            <ProductShot product={p} accent={accent} accentSecondary={accentSecondary} />
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
                {p.longDescription}
              </p>
              <div className="section-head" style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 25 }}>What it does</h2>
              </div>
              <ul className="pd-feats">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="pd-note">
              <h3>How COVI &amp; ELUV apply</h3>
              <p>{p.coviEluvNote}</p>
              <p style={{ marginTop: 14, fontSize: "13px", color: "var(--ink3)" }}>
                COVI is a consumption token for ecosystem activity — not an investment.
                ELUV is non-transferable and confers no financial rights.
              </p>
              {p.eluvParticipationProduct && (
                <p style={{ marginTop: 10, fontSize: "13px", color: "var(--ink3)" }}>
                  Core participation pathways are available without COVI —
                  token-optional for community education, nonprofit, and
                  institutional participants.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {p.slug === "build-or-bust" && (
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

      <section className="section">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 26 }}>
            <span className="eyebrow">Also in the store</span>
            <h2 style={{ fontSize: 27 }}>Related products</h2>
          </div>
          <div className="apps-row store-grid">
            {related.map((r) => (
              <ProductCard key={r.slug} product={r} />
            ))}
          </div>
          <div className="store-line" style={{ marginTop: 30 }}>
            <Link className="btn btn-ghost" href="/marketplace">
              ← All products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer endorsement */}
      <div
        style={{
          borderTop: "1px solid #d3dfe9",
          padding: "14px 0",
          textAlign: "center",
          fontFamily: "'Manrope', sans-serif",
          fontSize: 11,
          letterSpacing: ".08em",
          color: "rgba(0,51,107,.4)",
        }}
      >
        Part of the ConstructFi ecosystem
      </div>
    </>
  );
}
