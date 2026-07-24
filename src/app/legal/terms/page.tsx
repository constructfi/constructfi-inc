import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { TERMS } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: TERMS.summary,
  openGraph: {
    title: "ConstructFi — Terms of Use",
    description: TERMS.summary,
    url: `${SITE.url}/legal/terms`,
  },
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
