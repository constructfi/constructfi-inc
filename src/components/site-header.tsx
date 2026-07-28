"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Jul16ThemeToggle } from "@/components/theme-toggle";
import { WalletConnect } from "@/components/wallet-connect";
import { NAV_GROUPS, MOBILE_NAV, APP_URL, APP_URL_EXTERNAL } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="ConstructFi home" data-testid="link-home">
          <Logo />
        </Link>

        <div className="nav-links">
          {NAV_GROUPS.map((group) =>
            group.href ? (
              <Link
                key={group.label}
                href={group.href}
                data-testid={`nav-${group.label.toLowerCase()}`}
                className={isActive(group.href) ? "nd-link active" : "nd-link"}
              >
                {group.label}
              </Link>
            ) : (
              <div className="nav-drop" key={group.label}>
                <button className="nd-btn" type="button">
                  {group.label}
                </button>
                <div className="nd-menu">
                  <div className="nd-menu-in">
                    {group.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={isActive(item.href) ? "active" : undefined}
                        data-testid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="nav-cta">
          <div className="nav-wallet">
            <WalletConnect />
          </div>
          <Link
            className="btn btn-primary"
            href={APP_URL}
            data-testid="button-launch-app"
            {...(APP_URL_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Launch app
          </Link>
          <Jul16ThemeToggle />
          <button
            className="menu-btn"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="button-menu-open"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={open ? "mobile-menu open" : "mobile-menu"}
        id="mobile-menu"
        role="menu"
        aria-label="Main pages"
      >
        {MOBILE_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            className={isActive(item.href) ? "active" : undefined}
            data-testid={`mnav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mm-actions">
          <Link
            className="btn btn-primary"
            href={APP_URL}
            onClick={() => setOpen(false)}
            {...(APP_URL_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Launch app
          </Link>
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}
