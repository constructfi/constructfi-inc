import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { COMPANY, FOOTER_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-[1280px] px-8 py-16 sm:pb-9">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.25fr)_repeat(4,minmax(0,1fr))]">
          <div>
            <Link className="inline-flex items-center" href="/" aria-label="ConstructFi home">
              <BrandLockup variant="footer" />
            </Link>
            <p className="mt-[18px] max-w-[30ch] text-[14.5px] leading-6 text-white/60">
              The connected ecosystem for the built world.
            </p>
            <p className="mt-[14px] max-w-[30ch] text-[11px] uppercase tracking-[0.08em] text-mint">
              Start with what you need. Build what comes next.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="mb-[14px] text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/50">
                {group}
              </h4>
              <div className="grid gap-[9px]">
                {links.map((link) => (
                  <Link
                    key={`${group}-${link.href}-${link.label}`}
                    href={link.href}
                    className="text-[13.5px] text-white/72 transition hover:text-mint"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="mb-[14px] text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/50">
              Get in touch
            </h4>
            <div className="grid gap-[9px]">
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[13.5px] text-white/72 transition hover:text-mint"
              >
                {COMPANY.email}
              </a>
              <a
                href={SITE.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] text-white/72 transition hover:text-mint"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[52px] border-t border-white/10 pt-6">
          <p className="max-w-[104ch] text-[12.5px] leading-7 text-white/45">
            COVI and ELUV are participation-layer features designed to recognize eligible
            activity and support defined access, experiences, and member benefits as programs
            become available. Neither is offered as an investment, and nothing on this site is
            an offer to sell or a solicitation to buy any token, security, or financial
            instrument. Product availability differs by channel: some products are accessed
            through ConstructFi, others independently through the web, the Apple App Store,
            Google Play, or direct enterprise engagement. Interfaces shown in previews are
            demonstration material.
          </p>
          <p className="mt-4 text-[11px] tracking-[0.04em] text-white/40">
            © 2026 ConstructFi Inc. · {COMPANY.address} · {COMPANY.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
