import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Robots configuration. The learning app, the API and the internal
 * brand-asset renderers stay out of search indexes; every public page
 * is crawlable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app", "/api/", "/og-image", "/icon-512", "/icon-192", "/apple-icon"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
