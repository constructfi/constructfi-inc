import { STATUS, type ProductStatus } from "@/lib/products";

/** Availability pill using the Jul 16 `.chip` variants. */
export function StatusPill({ status }: { status: ProductStatus }) {
  const { label, chip } = STATUS[status];
  return (
    <span className={chip} data-testid={`status-${status}`}>
      {label}
    </span>
  );
}
