import type { Metadata } from "next";

/**
 * TalkSy public-site configuration — single source of truth for SEO,
 * navigation and brand strings used across the marketing pages.
 *
 * `url` is the canonical origin. Set `NEXT_PUBLIC_SITE_URL` in production
 * (e.g. https://talksy.app); the fallback keeps local/dev canonicals valid.
 */

export const siteConfig = {
  name: "TalkSy",
  /** Brand tagline — exact casing and wording, reused across the site. */
  tagline: "From your first English word to confident communication.",
  /** Landing hero supporting message (the H1 lives in the landing JSX with its em accent). */
  heroSub: "Learn English step by step, practise every day, and build the confidence to communicate in real life.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "TalkSy is a structured English learning platform for second-language learners. A CEFR-aligned curriculum from your first word to confident communication, with real practice in listening, speaking, reading and writing.",
  /** Contact channel shown to users (the in-app contact form). */
  contactPath: "/contact",
  defaultOgImage: "/og/default.png",
} as const;

export const mainNav = [
  { label: "Courses", href: "/courses" },
  { label: "Method", href: "/methodology" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
] as const;

export const footerNav = {
  learn: [
    { label: "Course levels", href: "/courses" },
    { label: "Learning method", href: "/methodology" },
    { label: "Platform features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About TalkSy", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  account: [
    { label: "Sign in", href: "/login" },
    { label: "Create free account", href: "/register" },
    { label: "Open the app", href: "/app" },
  ],
} as const;

/** Absolute URL helper for canonical/OG/sitemap entries. */
export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}

/**
 * Shared page metadata for public pages: title (with the "· TalkSy"
 * template), description, canonical URL, and complete Open Graph +
 * Twitter cards including the brand OG image. Page-level `openGraph`
 * objects fully replace the root ones in Next.js, so every page goes
 * through here to keep cards consistent.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle ?? title,
      description,
      url: path,
      type: "website",
      siteName: "TalkSy",
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: "TalkSy — from your first English word to confident communication",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [siteConfig.defaultOgImage],
    },
  };
}
