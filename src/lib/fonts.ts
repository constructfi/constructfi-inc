import { Poppins, IBM_Plex_Mono, Lora } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-lora",
  display: "swap",
});
