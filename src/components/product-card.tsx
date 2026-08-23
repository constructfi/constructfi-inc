import Link from "next/link";
import { ProductIcon } from "@/components/product-icon";
import { StatusPill } from "@/components/status-pill";
import { TagChip } from "@/components/tag-chip";
import { ProductShot, ProductThumb } from "@/components/product-shot";
import { CATEGORIES, type Product } from "@/lib/products";
import { getProductBrand } from "@/lib/product-brand";

function categoryLabel(key: Product["category"]) {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

/** Standard app-store tile. Used on /marketplace, /apps, and the homepage. */
export function ProductCard({
  product,
  eagerImage,
}: {
  product: Product;
  eagerImage?: boolean;
}) {
  const brand = getProductBrand(product.slug);
  const accent = brand?.accent ?? "#041428";
  const cta = brand?.primaryCTA ?? "Learn more";

  return (
    <Link
      href={`/marketplace/${product.slug}`}
      className="app-card prod-card"
      data-testid={`product-card-${product.slug}`}
      data-category={product.category}
    >
      {/* Per-product accent bar */}
      <div style={{ height: 4, background: accent, flexShrink: 0 }} aria-hidden />
      <ProductThumb product={product} eager={eagerImage} />
      <div className="pc-top">
        <span className="pc-ic" aria-hidden>
          <ProductIcon icon={product.icon} />
        </span>
        <StatusPill status={product.status} />
      </div>
      <span className="a-n">{product.name}</span>
      <div className="a-d">{product.tagline}</div>
      <div className="tag-row">
        {product.tags.slice(0, 3).map((t) => (
          <TagChip key={t} tag={t} />
        ))}
      </div>
      <div className="a-m">
        <span>{categoryLabel(product.category)}</span>
        <span className="pc-view">{cta} →</span>
      </div>
      {/* Master endorsement — required on every product surface */}
      <div
        style={{
          padding: "10px 16px",
          borderTop: "1px solid #eef3f8",
          fontFamily: "'Manrope', sans-serif",
          fontSize: 10,
          letterSpacing: ".06em",
          color: "rgba(0,51,107,.45)",
        }}
      >
        Part of the ConstructFi ecosystem
      </div>
    </Link>
  );
}

/** Larger hero tile for the flagship product. */
export function FeaturedProductCard({ product }: { product: Product }) {
  const brand = getProductBrand(product.slug);
  const accent = brand?.accent ?? "#041428";

  return (
    <div className="feat-card" data-testid={`featured-${product.slug}`}>
      {/* Per-product accent bar on featured card */}
      <div style={{ height: 5, background: accent }} aria-hidden />
      <div className="fc-mark">
        <ProductShot product={product} />
      </div>
      <div className="fc-body">
        <div className="fc-head">
          <span className="chip">Featured</span>
          <StatusPill status={product.status} />
        </div>
        <h3 className="fc-name">{product.name}</h3>
        {brand && (
          <div
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              letterSpacing: ".05em",
              color: "rgba(0,51,107,.5)",
              marginBottom: 4,
            }}
          >
            Part of the ConstructFi ecosystem
          </div>
        )}
        <p className="fc-tag">{product.tagline}</p>
        <p className="fc-desc">{product.shortDescription}</p>
        <div className="tag-row">
          {product.tags.map((t) => (
            <TagChip key={t} tag={t} />
          ))}
        </div>
        <div className="fc-ctas">
          <Link className="btn btn-primary" href="/app#demo" data-testid="featured-cta-demo">
            Try the interactive demo
          </Link>
          <Link className="btn btn-ghost" href={`/marketplace/${product.slug}`}>
            Product details →
          </Link>
        </div>
      </div>
    </div>
  );
}
