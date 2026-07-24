"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { WalletConnect } from "@/components/wallet-connect";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="ConstructFi home" data-testid="link-home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-teal dark:text-mint"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <div className="hidden md:block">
            <WalletConnect />
          </div>
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

      {/* Fully opaque mobile overlay (fixes semi-transparent hero bleed-through) */}
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
              className="container relative flex flex-1 flex-col gap-1 pt-6"
              aria-label="Mobile"
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-white"
              >
                Home
              </Link>
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mnav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="border-b border-white/10 py-4 text-lg font-medium text-white/90 transition-colors hover:text-mint"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-6 flex items-center justify-between">
                <WalletConnect />
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
