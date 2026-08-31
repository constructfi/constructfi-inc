import { redirect } from "next/navigation";

// ConstructOS was renamed from ConstructFi RevenueOS; the canonical slug is
// still "revenueos" (see src/lib/products.ts), so this alias route redirects
// anyone hitting /marketplace/constructos to the real product page.
export default function ConstructOSRedirect() {
  redirect("/marketplace/revenueos");
}
