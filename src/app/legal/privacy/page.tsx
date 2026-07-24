import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PRIVACY } from "@/lib/legal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: PRIVACY.summary,
  openGraph: {
    title: "ConstructFi — Privacy Policy",
    description: PRIVACY.summary,
    url: `${SITE.url}/legal/privacy`,
  },
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY} />;
}
