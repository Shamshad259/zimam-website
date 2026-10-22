import type { MetadataRoute } from "next";

// Brand colors: navy #0A0A4F (theme), white page background.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZIMAM Electrical Company",
    short_name: "ZIMAM",
    start_url: "/en",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0a0a4f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
