import Image from "next/image";
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
export function ProductShot({ product }: { product: Product }) {
  if (!product.image) return null;
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
  if (!product.image) return null;
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
