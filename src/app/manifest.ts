import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Web app manifest — TalkSy installs as a PWA-grade experience
 * (responsive web app, no store required).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TalkSy — Learn English",
    short_name: "TalkSy",
    description: siteConfig.description,
    start_url: "/app",
    display: "standalone",
    background_color: "#faf8f2",
    theme_color: "#177e76",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
