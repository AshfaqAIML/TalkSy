"use client";

import { useCallback, useSyncExternalStore } from "react";

export type AppRoute =
  | { name: "home" }
  | { name: "library"; level?: string }
  | { name: "grammar" }
  | { name: "grammar-tenses" }
  | { name: "grammar-clinic" }
  | { name: "lab" }
  | { name: "login" }
  | { name: "forgot" }
  | { name: "register" }
  | { name: "reset"; token: string }
  | { name: "dashboard" }
  | { name: "progress"; tab?: string }
  | { name: "lesson"; slug: string }
  | { name: "vocabulary"; tab?: string; param?: string }
  | { name: "reading"; slug?: string }
  | { name: "listening"; slug?: string }
  | { name: "speaking"; view: "hub" | "activity" | "conversation"; tab?: string; slug?: string }
  | { name: "writing"; view: "hub" | "assignment"; slug?: string }
  | { name: "tutor"; id?: string; lessonRef?: string; mode?: string }
  | { name: "courses"; level?: string }
  | { name: "course"; slug: string }
  | { name: "course-lesson"; slug: string }
  | { name: "paths"; slug?: string }
  | { name: "practice"; tab?: string }
  | { name: "practice-session"; id: string }
  | { name: "hub"; hubId: string }
  | { name: "exams" }
  | { name: "exams-onboarding" }
  | { name: "exams-dashboard" }
  | { name: "exams-planner" }
  | { name: "exams-course"; examKey: string; variant?: string }
  | { name: "exams-listening"; tab?: string; slug?: string }
  | { name: "exams-reading"; tab?: string; slug?: string }
  | { name: "exams-writing"; tab?: string; slug?: string }
  | { name: "exams-speaking"; tab?: string; slug?: string }
  | { name: "exams-toefl-library"; tab?: string; slug?: string }
  | { name: "exams-bank" }
  | { name: "exams-mocks" }
  | { name: "exams-history" }
  | { name: "exams-evaluator" }
  | { name: "exams-mock"; attemptId: string }
  | { name: "exams-result"; attemptId: string }
  | { name: "admin" }
  | { name: "about" }
  | { name: "contact" }
  | { name: "privacy" }
  | { name: "terms" }
  | { name: "tips" };

const SPEAKING_TABS = ["practice", "conversations", "pronunciation", "settings"];

const PROGRESS_TABS = ["overview", "skills", "activity", "revision", "awards"];

/** Deep-linkable level ids on #/library/<level> (curriculum level ids). */
const LIBRARY_LEVELS = ["pre-a1", "a1", "grammar-core", "a2"];

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
      // #/library  ·  #/library/pre-a1 (focus one level of the path)
      return parts[1] && LIBRARY_LEVELS.includes(parts[1])
        ? { name: "library", level: parts[1] }
        : { name: "library" };
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
      // #/tutor  ·  #/tutor/c/<conversationId>  ·  #/tutor/lesson/<ref>  ·  #/tutor/m/<modeId>
      if (parts[1] === "c" && parts[2]) {
        return { name: "tutor", id: parts[2] };
      }
      if (parts[1] === "lesson" && parts[2]) {
        return { name: "tutor", lessonRef: decodeURIComponent(parts[2]) };
      }
      if (parts[1] === "m" && parts[2]) {
        return { name: "tutor", mode: parts[2] };
      }
      return { name: "tutor" };
    }
    case "courses":
      // #/courses  ·  #/courses/level/<levelSlug> (catalogue filter)
      if (parts[1] === "level" && parts[2]) {
        return { name: "courses", level: parts[2] };
      }
      return { name: "courses" };
    case "course": {
      const slug = parts[1] ?? "";
      return slug ? { name: "course", slug } : { name: "courses" };
    }
    case "course-lesson": {
      const slug = parts[1] ?? "";
      return slug ? { name: "course-lesson", slug } : { name: "courses" };
    }
    case "paths":
      // #/paths  ·  #/paths/<id> (curated learning paths)
      return parts[1] ? { name: "paths", slug: parts[1] } : { name: "paths" };
    case "practice": {
      // #/practice  ·  #/practice/s/<sessionId>
      if (parts[1] === "s" && parts[2]) return { name: "practice-session", id: parts[2] };
      return { name: "practice", tab: parts[1] || undefined };
    }
    case "hub":
      // #/hub/<category> (category hubs)
      return parts[1] ? { name: "hub", hubId: parts[1] } : { name: "courses" };
    case "admin":
      return { name: "admin" };
    case "exams": {
      // Division C — International Exam Preparation Academy.
      if (parts[1] === "onboarding") return { name: "exams-onboarding" };
      if (parts[1] === "dashboard") return { name: "exams-dashboard" };
      if (parts[1] === "planner") return { name: "exams-planner" };
      if (parts[1] === "course" && parts[2]) {
        return { name: "exams-course", examKey: parts[2], variant: parts[3] || undefined };
      }
      if (parts[1] === "mocks") return { name: "exams-mocks" };
      if (parts[1] === "bank" || parts[1] === "question-bank") return { name: "exams-bank" };
      if (parts[1] === "history") return { name: "exams-history" };
      if (parts[1] === "evaluator" || parts[1] === "evaluation-studio") return { name: "exams-evaluator" };
      if (parts[1] === "mock" && parts[2]) return { name: "exams-mock", attemptId: parts[2] };
      if (parts[1] === "result" && parts[2]) return { name: "exams-result", attemptId: parts[2] };
      if (parts[1] === "listening" || (parts[1] === "ielts" && parts[2] === "listening")) {
        // #/exams/listening · #/exams/ielts/listening · #/exams/ielts/listening/practice/<slug>
        const rest = parts[1] === "listening" ? parts[2] : parts[3];
        const tab = rest && ["practice", "tests", "performance"].includes(rest) ? rest : undefined;
        const slug = rest === "practice" ? (parts[1] === "listening" ? parts[3] : parts[4]) : undefined;
        return { name: "exams-listening", tab, slug: slug || undefined };
      }
      if (parts[1] === "reading" || (parts[1] === "ielts" && parts[2] === "reading")) {
        // #/exams/reading · #/exams/ielts/reading · #/exams/ielts/reading/<tab>/<slug>
        const rest = parts[1] === "reading" ? parts[2] : parts[3];
        const tab = rest && ["library", "practice", "performance", "review"].includes(rest) ? rest : undefined;
        const slug = rest && ["library", "practice", "review"].includes(rest) ? (parts[1] === "reading" ? parts[3] : parts[4]) : undefined;
        return { name: "exams-reading", tab, slug: slug || undefined };
      }
      if (parts[1] === "toefl" && parts[2] === "library") {
        // #/exams/toefl/library · #/exams/toefl/library/<tab> · #/exams/toefl/library/<slug>
        const rest = parts[3];
        const tab = rest && ["library", "skills", "about"].includes(rest) ? rest : undefined;
        const slug = rest && !tab && rest.startsWith("toefl-") ? rest : undefined;
        return { name: "exams-toefl-library", tab, slug: slug || undefined };
      }
      if (parts[1] === "writing" || (parts[1] === "ielts" && parts[2] === "writing")) {
        // #/exams/writing · #/exams/ielts/writing · #/exams/ielts/writing/<tab>/<slug>
        const rest = parts[1] === "writing" ? parts[2] : parts[3];
        const tab = rest && ["library", "studio", "performance"].includes(rest) ? rest : undefined;
        const slug = rest && ["library", "studio"].includes(rest) ? (parts[1] === "writing" ? parts[3] : parts[4]) : undefined;
        return { name: "exams-writing", tab, slug: slug || undefined };
      }
      if (parts[1] === "speaking" || (parts[1] === "ielts" && parts[2] === "speaking")) {
        // #/exams/speaking · #/exams/ielts/speaking · #/exams/ielts/speaking/<tab>/<slug>
        const rest = parts[1] === "speaking" ? parts[2] : parts[3];
        const tab = rest && ["library", "simulator", "performance", "practice"].includes(rest) ? rest : undefined;
        const slug = rest === "practice" ? (parts[1] === "speaking" ? parts[3] : parts[4]) : undefined;
        return { name: "exams-speaking", tab, slug: slug || undefined };
      }
      return { name: "exams" };
    }
    case "login":
      return { name: "login" };
    case "forgot":
      return { name: "forgot" };
    case "register":
      return { name: "register" };
    case "reset": {
      const token = parts[1] ?? "";
      return { name: "reset", token };
    }
    case "dashboard":
      // #/dashboard — the student learning workspace (PROMPT 33).
      return { name: "dashboard" };
    case "progress":
      return {
        name: "progress",
        tab: parts[1] && PROGRESS_TABS.includes(parts[1]) ? parts[1] : undefined,
      };
    case "lesson": {
      const slug = parts[1] ?? "";
      return slug ? { name: "lesson", slug } : { name: "library" };
    }
    case "about":
      return { name: "about" };
    case "contact":
      return { name: "contact" };
    case "privacy":
      return { name: "privacy" };
    case "terms":
      return { name: "terms" };
    case "tips":
      return { name: "tips" };
    default:
      return { name: "home" };
  }
}

export function routeToHash(route: AppRoute): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "library":
      return `#/library${route.level ? `/${route.level}` : ""}`;
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
      if (route.mode) return `#/tutor/m/${route.mode}`;
      return "#/tutor";
    case "courses":
      return `#/courses${route.level ? `/level/${route.level}` : ""}`;
    case "course":
      return `#/course/${route.slug}`;
    case "course-lesson":
      return `#/course-lesson/${route.slug}`;
    case "paths":
      return `#/paths${route.slug ? `/${route.slug}` : ""}`;
    case "practice":
      return `#/practice${route.tab ? `/${route.tab}` : ""}`;
    case "practice-session":
      return `#/practice/s/${route.id}`;
    case "hub":
      return `#/hub/${route.hubId}`;
    case "admin":
      return "#/admin";
    case "exams":
    case "exams-onboarding":
    case "exams-dashboard":
    case "exams-planner":
    case "exams-bank":
    case "exams-mocks":
    case "exams-history":
    case "exams-evaluator":
      return route.name === "exams" ? "#/exams" : `#/exams/${route.name.slice(6)}`;
    case "exams-course":
      return `#/exams/course/${route.examKey}${route.variant ? `/${route.variant}` : ""}`;
    case "exams-mock":
      return `#/exams/mock/${route.attemptId}`;
    case "exams-result":
      return `#/exams/result/${route.attemptId}`;
    case "exams-listening":
      if (route.tab === "practice" && route.slug) return `#/exams/listening/practice/${route.slug}`;
      return route.tab ? `#/exams/listening/${route.tab}` : "#/exams/listening";
    case "exams-reading":
      if (route.tab && route.slug && ["library", "practice", "review"].includes(route.tab)) return `#/exams/reading/${route.tab}/${route.slug}`;
      return route.tab ? `#/exams/reading/${route.tab}` : "#/exams/reading";
    case "exams-writing":
      if (route.tab && route.slug && ["library", "studio"].includes(route.tab)) return `#/exams/writing/${route.tab}/${route.slug}`;
      return route.tab ? `#/exams/writing/${route.tab}` : "#/exams/writing";
    case "exams-toefl-library":
      if (route.tab) return `#/exams/toefl/library/${route.tab}`;
      return "#/exams/toefl/library";
    case "exams-speaking":
      if (route.tab === "practice" && route.slug) return `#/exams/speaking/practice/${route.slug}`;
      return route.tab ? `#/exams/speaking/${route.tab}` : "#/exams/speaking";
    case "login":
      return "#/login";
    case "forgot":
      return "#/forgot";
    case "register":
      return "#/register";
    case "reset":
      return `#/reset/${route.token}`;
    case "dashboard":
      return "#/dashboard";
    case "progress":
      return `#/progress${route.tab ? `/${route.tab}` : ""}`;
    case "lesson":
      return `#/lesson/${route.slug}`;
    case "about":
      return "#/about";
    case "contact":
      return "#/contact";
    case "privacy":
      return "#/privacy";
    case "terms":
      return "#/terms";
    case "tips":
      return "#/tips";
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
