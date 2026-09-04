import Image from "next/image";
import { ProductIcon } from "./product-icon";

// Brand marks live as static SVG in public/brand/<brand-slug>/mark.svg.
// They are multi-colour, per-product artwork extracted from each product's own
// brand standards deck — they do NOT inherit currentColor and must never be
// recoloured, stretched, or given a container the deck does not specify.

export function ProductMark({
  mark,
  icon,
  name,
  size = 40,
}: {
  mark?: string;
  icon: string;
  name: string;
  size?: number;
}) {
  if (!mark) {
    return <ProductIcon icon={icon} size={Math.round(size * 0.5)} />;
  }

  return (
    <Image
      src={mark}
      alt={`${name} mark`}
      width={size}
      height={size}
      style={{ width: size, height: size, display: "block" }}
      unoptimized
    />
  );
}
