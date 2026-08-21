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
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const navRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  React.useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const isActive = (href: string) => {
    const baseHref = href.split("#")[0] || "/";
    return baseHref === "/" ? pathname === "/" : pathname.startsWith(baseHref);
  };

  const isChildActive = (href: string) => !href.includes("#") && isActive(href);

  return (
    <nav className="nav" ref={navRef}>
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="ConstructFi home" data-testid="link-home">
          <Logo />
        </Link>

        <div className="nav-links">
          {NAV_GROUPS.map((group) => {
            if (!group.items?.length) {
              return (
                <Link
                  key={group.label}
                  href={group.href ?? "/"}
                  data-testid={`nav-${group.label.toLowerCase()}`}
                  className={group.href && isActive(group.href) ? "nd-link active" : "nd-link"}
                  onClick={() => {
                    setOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  {group.label}
                </Link>
              );
            }

            const activeChild = group.items.find((item) => isChildActive(item.href));
            const displayLabel = activeChild?.label ?? group.label;
            const groupActive =
              (group.href ? isActive(group.href) : false) ||
              group.items.some((item) => isChildActive(item.href));

            return (
              <div
                className={openDropdown === group.label ? "nav-drop open" : "nav-drop"}
                key={group.label}
              >
                <button
                  className={groupActive ? "nd-btn active" : "nd-btn"}
                  type="button"
                  aria-expanded={openDropdown === group.label}
                  onClick={() =>
                    setOpenDropdown((current) => (current === group.label ? null : group.label))
                  }
                >
                  {displayLabel}
                </button>
                <div className="nd-menu">
                  <div className="nd-menu-in">
                    {group.href && (
                      <Link
                        href={group.href}
                        className={isActive(group.href) ? "active" : undefined}
                        data-testid={`nav-${group.label.toLowerCase()}`}
                        onClick={() => {
                          setOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {group.label}
                      </Link>
                    )}
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={isChildActive(item.href) ? "active" : undefined}
                        data-testid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => {
                          setOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="nav-cta">
          <div className="nav-wallet">
            <WalletConnect disconnectedLabel="Wallet" />
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
            onClick={() => {
              setOpen(false);
              setOpenDropdown(null);
            }}
          >
            {item.label}
          </Link>
        ))}
        <div className="mm-actions">
          <Link
            className="btn btn-primary"
            href={APP_URL}
            onClick={() => {
              setOpen(false);
              setOpenDropdown(null);
            }}
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
