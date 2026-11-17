"use client";

/**
 * Tiny hash-based router.
 *
 * The whole TalkSy app lives on the single Next.js route "/", so views
 * are addressed with the URL hash: #/dashboard, #/lesson/a1-1-1, etc.
 * This keeps the browser back button and page refresh working without
 * adding server-rendered pages.
 */

import { useEffect, useState, useCallback } from "react";

export type Route =
  | { name: "landing" }
  | { name: "login" }
  | { name: "register" }
  | { name: "welcome" }
  | { name: "onboarding" }
  | { name: "placement" }
  | { name: "result" }
  | { name: "dashboard" }
  | { name: "roadmap" }
  | { name: "curriculum" }
  | { name: "courses" }
  | { name: "course"; slug: string }
  | { name: "lesson"; slug: string }
  | { name: "practice" }
  | { name: "profile" }
  | { name: "design" }
  | { name: "not-found"; path: string };

export function parseHash(hash: string): Route {
  const path = hash.replace(/^#/, "").replace(/^\/+/, "/").split("?")[0];
  const parts = path.split("/").filter(Boolean);

  if (parts.length === 0) return { name: "landing" };
  switch (parts[0]) {
    case "login":
      return { name: "login" };
    case "register":
      return { name: "register" };
    case "welcome":
      return { name: "welcome" };
    case "onboarding":
      return { name: "onboarding" };
    case "placement":
      return { name: "placement" };
    case "result":
      return { name: "result" };
    case "dashboard":
      return { name: "dashboard" };
    case "roadmap":
      return { name: "roadmap" };
    case "curriculum":
      return { name: "curriculum" };
    case "courses":
      return { name: "courses" };
    case "practice":
      return { name: "practice" };
    case "profile":
      return { name: "profile" };
    case "design":
      return { name: "design" };
    case "lesson":
      return parts[1] ? { name: "lesson", slug: parts[1] } : { name: "curriculum" };
    case "course":
      return parts[1] ? { name: "course", slug: parts[1] } : { name: "courses" };
    default:
      return { name: "not-found", path };
  }
}

export function navigate(to: string) {
  const target = to.startsWith("/") ? to : `/${to}`;
  if (window.location.hash !== `#${target}`) {
    window.location.hash = `#${target}`;
  }
}

export function useRoute(): Route {
  // SSR-safe: both server and client start from the landing view, then the
  // effect syncs the actual hash. This avoids hydration mismatches when the
  // page is loaded (or reloaded) on a deep link like #/lesson/a1-1-1.
  const [route, setRoute] = useState<Route>({ name: "landing" });

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    onChange();
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

/** Hook returning a stable navigate function for onClick handlers. */
export function useNavigate() {
  return useCallback((to: string) => navigate(to), []);
}
