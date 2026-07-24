import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Mail, Github, MapPin } from "lucide-react";
import { SITE, MARKETS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ConstructFi — partnerships, funders, press, and general inquiries.",
  openGraph: {
    title: "Contact ConstructFi",
    description: "Partnerships, funders, press, and general inquiries.",
    url: `${SITE.url}/contact`,
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Company · Contact"
        title="Let’s build something durable"
        lede="Whether you’re a partner, funder, supplier, or just curious — we’d love to hear from you."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <ContactForm />
          <aside className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Direct
              </h2>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-teal dark:text-mint" />
                  <a href="mailto:hello@constructfi.co" className="hover:underline">
                    hello@constructfi.co
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-teal dark:text-mint" />
                  <a
                    href={SITE.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {SITE.githubRepo.replace("https://github.com/", "@")}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal dark:text-mint" />
                  <span className="text-muted-foreground">
                    Active across {MARKETS.join(" · ")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-line p-5 dark:border-border">
              <h3 className="font-semibold text-navy dark:text-white">Founder</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.founder} — licensed real-estate broker since 2014, building
                ConstructFi on top of Eluvial Enterprise Inc. and Covington Supply Co.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
