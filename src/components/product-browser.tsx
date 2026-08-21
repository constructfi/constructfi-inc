"use client";

import * as React from "react";
import { ProductCard } from "@/components/product-card";
import {
  CATEGORIES,
  PRODUCTS,
  type Product,
  type ProductCategory,
} from "@/lib/products";

type Tab = ProductCategory | "all";

function matchesCategory(product: Product, tab: Tab) {
  if (tab === "all") return true;
  return (
    product.category === tab || (product.secondaryCategories?.includes(tab) ?? false)
  );
}

function matchesQuery(product: Product, query: string) {
  if (!query) return true;
  const haystack = [
    product.name,
    product.tagline,
    product.shortDescription,
    ...product.tags,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

export function ProductBrowser() {
  const [tab, setTab] = React.useState<Tab>("all");
  const [query, setQuery] = React.useState("");

  const visible = PRODUCTS.filter(
    (p) => matchesCategory(p, tab) && matchesQuery(p, query)
  );
  const activeCategory = CATEGORIES.find((category) => category.key === tab);

  return (
    <div>
      <div className="store-bar">
        <div className="cat-tabs" role="tablist" aria-label="Product categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={tab === c.key}
              className={tab === c.key ? "cat-tab on" : "cat-tab"}
              data-testid={`tab-${c.key}`}
              onClick={() => setTab(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="store-search">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Search products…"
            value={query}
            data-testid="product-search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4 rounded-2xl border border-line bg-card px-5 py-4 dark:border-border">
        <p className="text-sm font-semibold text-navy dark:text-white">
          {activeCategory?.label ?? "All"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {activeCategory?.description}
        </p>
        {tab === "nfts" && (
          <p className="mt-2 text-sm text-muted-foreground">
            Own contains transferable digital collectibles only. ELUV credentials stay
            out of this tab because they are non-transferable and never listed for sale.
          </p>
        )}
      </div>

      <p className="store-count" data-testid="product-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "product" : "products"}
      </p>

      {visible.length > 0 ? (
        <div className="apps-row store-grid" data-testid="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="store-empty" data-testid="product-empty">
          No products match “{query}”. Try a different search or pick another category.
        </p>
      )}
    </div>
  );
}
