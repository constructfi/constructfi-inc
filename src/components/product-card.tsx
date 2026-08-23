import Link from "next/link";
import type { CSSProperties } from "react";
import { ProductIcon } from "@/components/product-icon";
import { StatusPill } from "@/components/status-pill";
import { TagChip } from "@/components/tag-chip";
import { ProductShot, ProductThumb } from "@/components/product-shot";
import { getProductBrand } from "@/lib/product-brand";
import { CATEGORIES, type Product } from "@/lib/products";

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
  const brandVars = brand
    ? ({
        "--product-accent": brand.accent,
        "--product-accent-secondary": brand.accentSecondary,
      } as CSSProperties)
    : undefined;

  return (
    <Link
      href={`/marketplace/${product.slug}`}
      className="app-card prod-card"
      data-testid={`product-card-${product.slug}`}
      data-category={product.category}
      style={brandVars}
    >
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
        <span className="pc-view">View →</span>
      </div>
    </Link>
  );
}

/** Larger hero tile for the flagship product. */
export function FeaturedProductCard({ product }: { product: Product }) {
  const brand = getProductBrand(product.slug);
  const brandVars = brand
    ? ({
        "--product-accent": brand.accent,
        "--product-accent-secondary": brand.accentSecondary,
      } as CSSProperties)
    : undefined;

  return (
    <div
      className="feat-card"
      data-testid={`featured-${product.slug}`}
      style={brandVars}
    >
      <div className="fc-mark">
        <ProductShot product={product} />
      </div>
      <div className="fc-body">
        <div className="fc-head">
          <span className="chip">Featured</span>
          <StatusPill status={product.status} />
        </div>
        <h3 className="fc-name">{product.name}</h3>
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
