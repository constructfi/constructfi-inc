import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { RISK } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description: RISK.summary,
  openGraph: {
    title: "ConstructFi — Risk Disclosure",
    description: RISK.summary,
    url: `${SITE.url}/legal/risk`,
  },
  alternates: { canonical: "/legal/risk" },
};

export default function RiskPage() {
  return <LegalPage doc={RISK} />;
}
