import type { Metadata } from "next";
import { Fraunces, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./jul16.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Web3Provider } from "@/components/web3-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ConstructFi — From participation to progress",
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
    title: "ConstructFi — From participation to progress",
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "ConstructFi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConstructFi — From participation to progress",
    description: SITE.description,
    images: ["/og/home.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
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
      className={`${fraunces.variable} ${manrope.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
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
