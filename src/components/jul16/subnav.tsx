import { ON_THIS_PAGE } from "@/lib/site";

/** Sticky in-page anchor rail from the Jul 16 homepage. */
export function SubNav() {
  return (
    <div className="subnav">
      <div className="wrap subnav-inner">
        <span className="sn-label">On this page</span>
        {ON_THIS_PAGE.map((s) => (
          <a key={s.href} href={s.href} data-testid={`subnav-${s.href.slice(3)}`}>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
