import Link from "next/link";
import { Logo } from "@/components/logo";
import { FOOTER_LINKS, COMPANY, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" href="/" style={{ marginBottom: 14 }}>
              <Logo />
            </Link>
            <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "var(--ink2)", maxWidth: 280, marginTop: 18 }}>
              The connected ecosystem for the built world.
            </p>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--green)", maxWidth: 280, marginTop: 14, lineHeight: 1.7 }}>
              Start with what you need. Build what comes next.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4>{group}</h4>
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="legal">
          <p>
            <b style={{ color: "var(--ink2)" }}>Important notice.</b> Nothing on this site is
            an offer to sell, or a solicitation of an offer to buy, any token, security, or
            financial instrument. COVI is a utility token for ecosystem commerce and rewards;
            any sale will be made solely through definitive offering materials under an
            available exemption, with KYC/AML screening. ELUV is a non-transferable, soulbound
            participation credential — it is never sold, traded, or offered as an investment.
            ConstructFi is not a lender and does not guarantee any profit, return, capital
            access, or financial outcome. Digital assets involve significant risk, including
            total loss of value. Marketplace listings, balances, and metrics shown in previews
            are demonstration data.
          </p>
          <p>
            © {new Date().getFullYear()} ConstructFi Inc. · {COMPANY.address} ·{" "}
            <a href={`mailto:${COMPANY.email}`} style={{ color: "var(--ink2)" }}>{COMPANY.email}</a>
            {" · "}
            <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink2)" }}>GitHub ↗</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
