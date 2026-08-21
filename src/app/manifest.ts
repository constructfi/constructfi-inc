import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ConstructFi",
    short_name: "ConstructFi",
    description: "From participation to progress.",
    start_url: "/",
    display: "standalone",
    background_color: "#041428",
    theme_color: "#00336b",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
