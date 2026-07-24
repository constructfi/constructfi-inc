import Link from "next/link";
import { Logo } from "@/components/logo";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="ink-surface relative border-t border-white/10 text-white/80">
      <div className="bg-grid-fine absolute inset-0 opacity-30" aria-hidden />
      <div className="container relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo className="text-white" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {SITE.tagline} {SITE.subtagline}
            </p>
            <p className="mt-4 font-signature text-lg italic text-mint">
              Built on real operations.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 transition-colors hover:text-mint"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-white/70 transition-colors hover:text-mint"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/45">
            COVI is a utility/consumption token, not an investment. ELUV is a
            non-transferable credential and confers no financial rights. Nothing on
            this site is an offer to sell or a solicitation to buy any security. Any
            token sale will occur only under a compliant exemption with KYC/AML.
            Smart-contract addresses are published only after independent audit. See
            the{" "}
            <Link href="/legal/risk" className="text-white/70 underline hover:text-mint">
              Risk Disclosure
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} ConstructFi. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Founded by {SITE.founder} · Licensed real-estate broker (DC) since 2014
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
