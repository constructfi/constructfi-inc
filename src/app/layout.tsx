import type { Metadata } from "next";
import "./globals.css";
import { poppins, plex, lora } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Web3Provider } from "@/components/web3-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ConstructFi — From participation to ownership",
    template: "%s · ConstructFi",
  },
  description: SITE.description,
  keywords: [
    "ConstructFi", "COVI", "ELUV", "soulbound", "ERC-5192", "ERC-20",
    "Base", "utility token", "real-world assets", "procurement", "workforce readiness",
  ],
  authors: [{ name: SITE.founder }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: "ConstructFi — From participation to ownership",
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "ConstructFi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConstructFi — From participation to ownership",
    description: SITE.description,
    images: ["/og/home.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${plex.variable} ${lora.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Web3Provider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
