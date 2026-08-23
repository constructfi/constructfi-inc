import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
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
  return PRODUCTS.map((p) => ({ slug: p.slug }));
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

  const category = CATEGORIES.find((c) => c.key === product.category)?.label;
  const related = relatedProducts(product.slug);
  const brand = getProductBrand(product.slug);
  const brandVars = brand
    ? ({
        "--product-accent": brand.accent,
        "--product-accent-secondary": brand.accentSecondary,
      } as CSSProperties)
    : undefined;

  return (
    <>
      <header
        className="section"
        style={{ borderTop: "none", paddingBottom: 40, ...brandVars }}
      >
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
            </div>
            <ProductShot product={product} />
          </div>
        </div>
      </header>

      <section className="section" style={brandVars}>
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
