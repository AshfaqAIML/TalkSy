"use client";

import { useCallback, useSyncExternalStore } from "react";

export type AppRoute =
  | { name: "home" }
  | { name: "library" }
  | { name: "grammar" }
  | { name: "grammar-tenses" }
  | { name: "grammar-clinic" }
  | { name: "lab" }
  | { name: "login" }
  | { name: "register" }
  | { name: "progress"; tab?: string }
  | { name: "lesson"; slug: string }
  | { name: "vocabulary"; tab?: string; param?: string }
  | { name: "reading"; slug?: string }
  | { name: "listening"; slug?: string }
  | { name: "speaking"; view: "hub" | "activity" | "conversation"; tab?: string; slug?: string }
  | { name: "writing"; view: "hub" | "assignment"; slug?: string }
  | { name: "tutor"; id?: string; lessonRef?: string }
  | { name: "courses" }
  | { name: "course"; slug: string }
  | { name: "course-lesson"; slug: string }
  | { name: "admin" };

const SPEAKING_TABS = ["practice", "conversations", "pronunciation", "settings"];

const PROGRESS_TABS = ["overview", "skills", "activity", "revision", "awards"];

/**
 * ADR-003: the whole learner app lives on the single public `/` route and
 * navigates with the URL hash. This keeps one deployable entry point while
 * behaving like a multi-page app.
 */
export function parseHash(hash: string): AppRoute {
  const clean = hash.replace(/^#\/?/, "").split("?")[0];
  const parts = clean.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  switch (parts[0]) {
    case "library":
      return { name: "library" };
    case "grammar":
      if (parts[1] === "tenses") return { name: "grammar-tenses" };
      if (parts[1] === "clinic") return { name: "grammar-clinic" };
      return { name: "grammar" };
    case "lab":
      return { name: "lab" };
    case "vocabulary":
      return {
        name: "vocabulary",
        tab: parts[1] && VOCAB_TABS.includes(parts[1]) ? parts[1] : undefined,
        param: parts[2] || undefined,
      };
    case "reading":
      return { name: "reading", slug: parts[1] || undefined };
    case "listening":
      return { name: "listening", slug: parts[1] || undefined };
    case "speaking": {
      if (parts[1] === "activity" && parts[2]) {
        return { name: "speaking", view: "activity", slug: parts[2] };
      }
      if (parts[1] === "conversation" && parts[2]) {
        return { name: "speaking", view: "conversation", slug: parts[2] };
      }
      const tab = parts[1] && SPEAKING_TABS.includes(parts[1]) ? parts[1] : undefined;
      return { name: "speaking", view: "hub", tab };
    }
    case "writing": {
      if (parts[1] === "a" && parts[2]) {
        return { name: "writing", view: "assignment", slug: parts[2] };
      }
      return { name: "writing", view: "hub" };
    }
    case "tutor": {
      // #/tutor  ·  #/tutor/c/<conversationId>  ·  #/tutor/lesson/<ref>
      if (parts[1] === "c" && parts[2]) {
        return { name: "tutor", id: parts[2] };
      }
      if (parts[1] === "lesson" && parts[2]) {
        return { name: "tutor", lessonRef: decodeURIComponent(parts[2]) };
      }
      return { name: "tutor" };
    }
    case "courses":
      return { name: "courses" };
    case "course": {
      const slug = parts[1] ?? "";
      return slug ? { name: "course", slug } : { name: "courses" };
    }
    case "course-lesson": {
      const slug = parts[1] ?? "";
      return slug ? { name: "course-lesson", slug } : { name: "courses" };
    }
    case "admin":
      return { name: "admin" };
    case "login":
      return { name: "login" };
    case "register":
      return { name: "register" };
    case "progress":
    case "dashboard": // legacy alias — old links keep working
      return {
        name: "progress",
        tab: parts[1] && PROGRESS_TABS.includes(parts[1]) ? parts[1] : undefined,
      };
    case "lesson": {
      const slug = parts[1] ?? "";
      return slug ? { name: "lesson", slug } : { name: "library" };
    }
    default:
      return { name: "home" };
  }
}

export function routeToHash(route: AppRoute): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "library":
      return "#/library";
    case "grammar":
      return "#/grammar";
    case "grammar-tenses":
      return "#/grammar/tenses";
    case "grammar-clinic":
      return "#/grammar/clinic";
    case "lab":
      return "#/lab";
    case "vocabulary":
      return `#/vocabulary${route.tab ? `/${route.tab}` : ""}${route.param ? `/${route.param}` : ""}`;
    case "reading":
      return `#/reading${route.slug ? `/${route.slug}` : ""}`;
    case "listening":
      return `#/listening${route.slug ? `/${route.slug}` : ""}`;
    case "speaking":
      if (route.view === "activity") return `#/speaking/activity/${route.slug ?? ""}`;
      if (route.view === "conversation") return `#/speaking/conversation/${route.slug ?? ""}`;
      return `#/speaking${route.tab ? `/${route.tab}` : ""}`;
    case "writing":
      if (route.view === "assignment") return `#/writing/a/${route.slug ?? ""}`;
      return "#/writing";
    case "tutor":
      if (route.id) return `#/tutor/c/${route.id}`;
      if (route.lessonRef) return `#/tutor/lesson/${encodeURIComponent(route.lessonRef)}`;
      return "#/tutor";
    case "courses":
      return "#/courses";
    case "course":
      return `#/course/${route.slug}`;
    case "course-lesson":
      return `#/course-lesson/${route.slug}`;
    case "admin":
      return "#/admin";
    case "login":
      return "#/login";
    case "register":
      return "#/register";
    case "progress":
      return `#/progress${route.tab ? `/${route.tab}` : ""}`;
    case "lesson":
      return `#/lesson/${route.slug}`;
  }
}

const HOME_ROUTE: AppRoute = { name: "home" };

/** Valid #/vocabulary/<tab> segments (the hub view validates the rest). */
const VOCAB_TABS = [
  "today",
  "explore",
  "flashcards",
  "context",
  "relationships",
  "sentences",
  "challenges",
  "lists",
];

function subscribe(callback: () => void): () => void {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

// Snapshot cache: useSyncExternalStore requires a stable reference while the
// hash is unchanged.
let cachedHash = "";
let cachedRoute: AppRoute = HOME_ROUTE;

function getSnapshot(): AppRoute {
  const hash = window.location.hash;
  if (hash !== cachedHash) {
    cachedHash = hash;
    cachedRoute = parseHash(hash);
  }
  return cachedRoute;
}

function getServerSnapshot(): AppRoute {
  return HOME_ROUTE;
}

/**
 * Hash router built on useSyncExternalStore so that SSR renders the home
 * route and hydration never mismatches; after hydration the real hash is
 * applied without a full re-mount.
 */
export function useHashRoute(): {
  route: AppRoute;
  navigate: (route: AppRoute) => void;
} {
  const route = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const navigate = useCallback((next: AppRoute) => {
    window.location.hash = routeToHash(next);
  }, []);

  return { route, navigate };
}
