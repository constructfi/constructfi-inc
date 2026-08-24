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
  return product.category === tab;
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
