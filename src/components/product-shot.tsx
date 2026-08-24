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

function ProductIllustration({ product, detail }: { product: Product; detail?: boolean }) {
  return (
    <span
      className={detail ? "pd-shot-art" : "pc-shot-art"}
      aria-hidden
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(circle at top, rgba(0,209,154,.18), transparent 42%), linear-gradient(180deg, #0d1d33 0%, #041428 100%)",
        color: "#fff",
      }}
    >
      <span
        style={{
          display: "grid",
          gap: detail ? 14 : 10,
          justifyItems: "center",
          padding: detail ? 24 : 18,
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: detail ? 68 : 50,
            height: detail ? 68 : 50,
            borderRadius: 16,
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <ProductIcon icon={product.icon} size={detail ? 30 : 24} />
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: detail ? 13 : 11,
            fontWeight: 700,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,.72)",
          }}
        >
          {product.mono}
        </span>
        <span
          style={{
            maxWidth: detail ? 220 : 160,
            fontSize: detail ? 18 : 15,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-.02em",
          }}
        >
          {product.name}
        </span>
      </span>
    </span>
  );
}

/** Detail-page hero shot: whole phone visible, with the required caption. */
export function ProductShot({ product }: { product: Product }) {
  return (
    <figure className="pd-shot" data-testid={`product-shot-${product.slug}`}>
      <div className="pd-shot-frame">
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={altFor(product)}
              width={PRODUCT_IMAGE_SIZE.width}
              height={PRODUCT_IMAGE_SIZE.height}
              sizes="(max-width: 960px) 60vw, 320px"
              priority
            />
            {product.imageScrim ? (
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(4,20,40,.18), rgba(4,20,40,.52))",
                }}
              />
            ) : null}
          </>
        ) : (
          <ProductIllustration product={product} detail />
        )}
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
  // Products without a render still need the banner, or they collapse to a
  // shorter tile and break the grid's rhythm next to products that have one.
  if (!product.image) {
    return (
      <span className="pc-shot pc-shot-blank" aria-hidden>
        <ProductIllustration product={product} />
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
      {product.imageScrim ? (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(4,20,40,.08), rgba(4,20,40,.5))",
          }}
        />
      ) : null}
    </span>
  );
}
