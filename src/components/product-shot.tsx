import Image from "next/image";
import type { CSSProperties } from "react";
import { ProductIcon } from "@/components/product-icon";
import { getProductBrand } from "@/lib/product-brand";
import { PRODUCT_IMAGE_SIZE, type Product } from "@/lib/products";

/**
 * The files in public/products/ are brand renders, not captures of a running
 * app. Alt text and the hero caption both say "preview" so neither a reader nor
 * a screen reader comes away thinking these show live data.
 */
function altFor(product: Product) {
  return `${product.name} app preview`;
}

const MOTIF_ICON_MAP: Record<string, string> = {
  briefcase: "briefcase",
  gauge: "gauge",
  ruler: "ruler",
  target: "target",
  wallet: "wallet",
  gamepad: "gamepad",
  boxes: "boxes",
  package: "package",
  graduation: "graduation",
  "file-contract": "briefcase",
  "hard-hat": "package",
  pathway: "target",
  city: "boxes",
  blocks: "package",
};

function fallbackIcon(product: Product) {
  const brand = getProductBrand(product.slug);
  const fromMotif = brand?.iconMotif ? MOTIF_ICON_MAP[brand.iconMotif] : undefined;
  return fromMotif ?? product.icon;
}

/** Detail-page hero shot: whole phone visible, with the required caption. */
export function ProductShot({ product }: { product: Product }) {
  const brand = getProductBrand(product.slug);
  const brandVars = brand
    ? ({
        "--product-accent": brand.accent,
        "--product-accent-secondary": brand.accentSecondary,
      } as CSSProperties)
    : undefined;

  if (!product.image) {
    return (
      <figure className="pd-shot" data-testid={`product-shot-${product.slug}`} style={brandVars}>
        <div className="pd-shot-frame pd-shot-fallback" role="img" aria-label={`${product.name} illustration coming`}>
          <span className="pd-shot-badge">Illustration coming · intentional motif treatment</span>
          <span className="pd-shot-icon" aria-hidden>
            <ProductIcon icon={fallbackIcon(product)} size={46} />
          </span>
        </div>
        <figcaption>Illustration coming · intentional motif treatment</figcaption>
      </figure>
    );
  }
  return (
    <figure className="pd-shot" data-testid={`product-shot-${product.slug}`} style={brandVars}>
      <div className="pd-shot-frame">
        <Image
          src={product.image}
          alt={altFor(product)}
          width={PRODUCT_IMAGE_SIZE.width}
          height={PRODUCT_IMAGE_SIZE.height}
          sizes="(max-width: 960px) 60vw, 320px"
          priority
        />
      </div>
      <figcaption>Illustrative preview — demonstration only</figcaption>
    </figure>
  );
}

/**
 * Card thumbnail: cropped banner that sits above the card body.
 *
 * `eager` opts a card out of lazy loading. Cards sitting thousands of pixels
 * down a page can be scrolled past before the lazy loader resolves them, and an
 * unresolved thumbnail paints as a bare dark frame that reads as a broken card.
 */
export function ProductThumb({ product, eager }: { product: Product; eager?: boolean }) {
  const brand = getProductBrand(product.slug);
  const brandVars = brand
    ? ({
        "--product-accent": brand.accent,
        "--product-accent-secondary": brand.accentSecondary,
      } as CSSProperties)
    : undefined;

  // Products without a render still need the banner, or they collapse to a
  // shorter tile and break the grid's rhythm next to products that have one.
  if (!product.image) {
    return (
      <span className="pc-shot pc-shot-blank" style={brandVars}>
        <span className="pc-shot-icon" aria-hidden>
          <ProductIcon icon={fallbackIcon(product)} size={34} />
        </span>
        <span className="pc-shot-label">Illustration coming · intentional motif treatment</span>
      </span>
    );
  }
  return (
    <span className="pc-shot" aria-hidden style={brandVars}>
      <Image
        src={product.image}
        alt=""
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
        loading={eager ? "eager" : undefined}
        style={product.imageFocus ? { objectPosition: product.imageFocus } : undefined}
      />
    </span>
  );
}
