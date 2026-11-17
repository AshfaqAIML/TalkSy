import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Public sitemap — only indexable public pages. The app (/app), the API,
 * the sign-in page and the internal brand-asset renderers are excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
    { path: "/methodology", priority: 0.8, changeFrequency: "monthly" },
    { path: "/features", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
    { path: "/register", priority: 0.9, changeFrequency: "monthly" },
  ];
  return entries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
