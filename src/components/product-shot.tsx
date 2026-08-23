import Image from "next/image";
import { ProductIcon } from "@/components/product-icon";
import { PRODUCT_IMAGE_SIZE, type Product } from "@/lib/products";

/**
 * The files in public/products/ are brand renders, not captures of a running
 * app. Alt text and the hero caption both say "preview" so neither a reader nor
 * a screen reader comes away thinking these show live data.
 */
function altFor(product: Product) {
  return `${product.name} app preview`;
}

/** Detail-page hero shot: whole phone visible, with the required caption. */
export function ProductShot({
  product,
  accent,
  accentSecondary,
}: {
  product: Product;
  accent?: string;
  accentSecondary?: string;
}) {
  if (!product.image) {
    // Intentional motif treatment for products without illustration assets.
    // Uses product accent colors and icon. Never a generic gradient.
    const bg = accent ?? "#041428";
    const fg = accentSecondary ?? "#00A896";
    return (
      <figure
        className="pd-shot"
        data-testid={`product-shot-${product.slug}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(150deg, ${bg} 0%, color-mix(in srgb, ${bg} 70%, ${fg}) 100%)`,
          minHeight: 320,
          padding: 32,
          gap: 16,
        }}
      >
        <div
          aria-hidden
          style={{
            opacity: 0.7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProductIcon icon={product.icon} size={64} />
        </div>
        <figcaption
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 11,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,.4)",
            textAlign: "center",
          }}
        >
          Illustration coming · intentional motif treatment
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="pd-shot" data-testid={`product-shot-${product.slug}`}>
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
  // Products without a render get a intentional motif treatment using the
  // product icon as the distinguishing visual element. This follows the brand
  // standard: do not use generic gradient placeholders where an intentional
  // motif treatment is specified as the required approach.
  if (!product.image) {
    return (
      <span
        className="pc-shot pc-shot-blank"
        aria-hidden
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #0d1b2a 0%, #1e3a5f 100%)",
          minHeight: 160,
        }}
      >
        <ProductIcon icon={product.icon} size={40} />
      </span>
    );
  }
  return (
    <span className="pc-shot" aria-hidden>
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
