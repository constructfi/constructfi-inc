"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletConnect } from "@/components/wallet-connect";
import { MOBILE_NAV, NAV_GROUPS } from "@/lib/site";

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
    <header className="sticky top-0 z-50" ref={navRef}>
      <div className="border-b border-white/10 bg-[#020d1c]">
        <div className="mx-auto hidden h-[34px] max-w-[1280px] items-center gap-5 px-5 text-[10.5px] uppercase tracking-[0.14em] text-white/40 sm:flex sm:px-8">
          <span className="font-medium tracking-[0.16em] text-mint">
            The connected ecosystem for the built world
          </span>
          <span className="ml-auto">Marketplace · Products · Partner Solutions · Participation</span>
        </div>
      </div>

      <nav className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-[70px] max-w-[1280px] items-center gap-4 px-5 sm:px-8 lg:gap-6">
          <Link
            className="shrink-0"
            href="/"
            aria-label="ConstructFi home"
            data-testid="link-home"
          >
            <Image
              src="/brand/constructfi-lockup-light.svg"
              alt="ConstructFi"
              width={190}
              height={30}
              className="h-[30px] w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center lg:flex">
            {NAV_GROUPS.map((group) => {
              if (!group.items?.length) {
                return (
                  <Link
                    key={group.label}
                    href={group.href ?? "/"}
                    data-testid={`nav-${group.label.toLowerCase()}`}
                    className={
                      group.href && isActive(group.href)
                        ? "px-2.5 py-2 text-[13px] font-semibold text-white shadow-[inset_0_-2px_0_0_#00d19a]"
                        : "px-2.5 py-2 text-[13px] font-medium text-white/65 transition hover:text-white hover:shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.25)]"
                    }
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
                <div className="relative" key={group.label}>
                  <button
                    className={
                      groupActive
                        ? "inline-flex items-center gap-1 px-2.5 py-2 text-[13px] font-semibold text-white"
                        : "inline-flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium text-white/65 transition hover:text-white"
                    }
                    type="button"
                    aria-expanded={openDropdown === group.label}
                    onClick={() =>
                      setOpenDropdown((current) => (current === group.label ? null : group.label))
                    }
                  >
                    {displayLabel}
                    <span className="px-1 text-[10px]">▾</span>
                  </button>
                  {openDropdown === group.label && (
                    <div className="absolute left-0 top-11 min-w-[190px] border border-white/15 bg-[#0b1626] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]">
                      {group.href && (
                        <Link
                          href={group.href}
                          className={
                            isActive(group.href)
                              ? "block bg-white/5 px-4 py-3 text-[13.5px] font-medium text-white"
                              : "block px-4 py-3 text-[13.5px] font-medium text-white transition hover:bg-white/5"
                          }
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
                          className={
                            isChildActive(item.href)
                              ? "block bg-white/5 px-4 py-3 text-[13.5px] font-medium text-white"
                              : "block px-4 py-3 text-[13.5px] font-medium text-white transition hover:bg-white/5"
                          }
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
                  )}
                </div>
              );
            })}
          </div>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <WalletConnect
              disconnectedLabel="Wallet"
              disconnectedVariant="outline"
              disconnectedClassName="border-white/24 bg-transparent text-white hover:border-white/40 hover:bg-white/5 hover:text-white"
              connectedClassName="border-mint/40 bg-mint/10 text-white hover:border-mint/55 hover:bg-mint/15"
              disconnectClassName="text-white/70 hover:bg-white/5 hover:text-white"
              hideDisconnectedIcon
              hideDisconnectButton
            />
            <Link
              className="inline-flex items-center bg-mint px-4 py-2.5 text-[13.5px] font-semibold text-ink transition hover:bg-mint-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              href="/partners"
              data-testid="button-build-with-constructfi"
            >
              Build With ConstructFi
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-3 lg:hidden">
            <button
              className="inline-flex h-10 items-center justify-center border border-white/15 px-3 text-sm font-medium text-white/70"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              data-testid="button-menu-open"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="border-b border-white/10 bg-ink lg:hidden"
          id="mobile-menu"
          role="menu"
          aria-label="Main pages"
        >
          <div className="mx-auto grid max-w-[1280px] gap-1 px-5 py-4 sm:px-8">
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={
                  isActive(item.href)
                    ? "px-0 py-3 text-sm font-semibold text-white"
                    : "px-0 py-3 text-sm font-medium text-white/72"
                }
                data-testid={`mnav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => {
                  setOpen(false);
                  setOpenDropdown(null);
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
              <WalletConnect
                disconnectedLabel="Wallet"
                disconnectedVariant="outline"
                disconnectedClassName="w-full justify-center border-white/24 bg-transparent text-white hover:border-white/40 hover:bg-white/5 hover:text-white"
                connectedClassName="border-mint/40 bg-mint/10 text-white hover:border-mint/55 hover:bg-mint/15"
                disconnectClassName="text-white/70 hover:bg-white/5 hover:text-white"
                hideDisconnectedIcon
                hideDisconnectButton
              />
              <Link
                className="inline-flex items-center justify-center bg-mint px-4 py-3 text-sm font-semibold text-ink transition hover:bg-mint-3"
                href="/partners"
                onClick={() => {
                  setOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Build With ConstructFi
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
