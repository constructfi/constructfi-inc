"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { WalletConnect } from "@/components/wallet-connect";
import { Button } from "@/components/ui/button";
import { NAV_GROUPS, APP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

function isGroupActive(pathname: string, group: (typeof NAV_GROUPS)[number]) {
  if (group.href) return pathname === group.href;
  return group.items?.some((i) => pathname === i.href) ?? false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-border/60 bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="ConstructFi home" data-testid="link-home">
          <Logo />
        </Link>

        {/* Grouped dropdown nav (older design) */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_GROUPS.map((group) => {
            const active = isGroupActive(pathname, group);
            if (group.href) {
              return (
                <Link
                  key={group.label}
                  href={group.href}
                  data-testid={`nav-${group.label.toLowerCase()}`}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-teal dark:text-mint"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {group.label}
                </Link>
              );
            }
            const isOpen = openGroup === group.label;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => enter(group.label)}
                onMouseLeave={leave}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(isOpen ? null : group.label)}
                  data-testid={`nav-${group.label.toLowerCase()}`}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active || isOpen
                      ? "text-teal dark:text-mint"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {group.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && group.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.14 }}
                      className="absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-lg"
                    >
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenGroup(null)}
                          data-testid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                        >
                          <span className="text-sm font-semibold text-foreground">
                            {item.label}
                          </span>
                          {item.desc && (
                            <span className="text-xs text-muted-foreground">
                              {item.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          {/* Keep wallet connect available (merge requirement) */}
          <div className="hidden xl:block">
            <WalletConnect />
          </div>
          {/* Launch app CTA (older design) */}
          <Button asChild className="hidden md:inline-flex">
            <Link href={APP_URL} data-testid="button-launch-app">
              Launch app
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            data-testid="button-menu-open"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col ink-surface lg:hidden"
          >
            <div className="bg-grid-fine absolute inset-0 opacity-40" aria-hidden />
            <div className="container relative flex h-16 items-center justify-between">
              <Logo className="text-white" />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                data-testid="button-menu-close"
                className="text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav
              className="container relative flex flex-1 flex-col gap-1 overflow-y-auto pb-8 pt-4"
              aria-label="Mobile"
            >
              {NAV_GROUPS.map((group) =>
                group.href ? (
                  <Link
                    key={group.label}
                    href={group.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 text-lg font-medium text-white"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <div key={group.label} className="border-b border-white/10 py-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                      {group.label}
                    </span>
                    <div className="mt-2 flex flex-col gap-1">
                      {group.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          data-testid={`mnav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                          className="py-1.5 text-base font-medium text-white/90 transition-colors hover:text-mint"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
              <div className="mt-6 flex flex-col gap-4">
                <Button asChild className="w-full">
                  <Link href={APP_URL} onClick={() => setOpen(false)}>
                    Launch app
                  </Link>
                </Button>
                <div className="flex items-center justify-between">
                  <WalletConnect />
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
