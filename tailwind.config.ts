import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Brand palette — official ConstructFi Branding Guide colors
        //   Navy #00336b · Emerald/Mint #00d19a · Teal #019599
        //   Sky #1bb6fd · Indigo #4a67ce · Periwinkle #8298fc
        ink: { DEFAULT: "#041428", 2: "#082140" },
        navy: { DEFAULT: "#00336b", 2: "#012a57" },
        teal: { DEFAULT: "#019599", 2: "#017a7d" },
        mint: { DEFAULT: "#00d19a", 2: "#00b487" },
        sky: { DEFAULT: "#1bb6fd", 2: "#0f97d6" },
        indigo: { DEFAULT: "#4a67ce", 2: "#3d55ad" },
        periwinkle: { DEFAULT: "#8298fc", 2: "#6a82f0" },
        gold: { DEFAULT: "#B9903B", 2: "#D8B25E" },
        wash: "#F1F7F9",
        line: "#D9E5EA",
        // shadcn tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "ui-monospace", "monospace"],
        signature: ["var(--font-lora)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
