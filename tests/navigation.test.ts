/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  NAV_CATEGORIES,
  activeCategoryId,
  allNavDestinations,
} from "@/lib/navigation";
import { parseHash, routeToHash, type AppRoute } from "@/hooks/use-hash-route";
import { getLesson, lessons } from "@/data/curriculum";
import { tutorModes } from "@/data/tutor/modes";
import { vocabWords } from "@/data/vocabulary";
import { readingTexts } from "@/data/reading";
import { listeningActivities } from "@/data/listening";
import { speakingActivities, conversationScenarios } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";

/** All route names the router can produce (for activeWhen validation). */
const ROUTE_NAMES = new Set<string>([
  "home", "library", "grammar", "grammar-tenses", "grammar-clinic", "lab",
  "login", "register", "reset", "progress", "lesson", "vocabulary", "reading",
  "listening", "speaking", "writing", "tutor", "courses", "course",
  "course-lesson", "exams", "exams-onboarding", "exams-dashboard",
  "exams-planner", "exams-course", "exams-listening", "exams-reading", "exams-toefl-library",
  "exams-bank", "exams-writing", "exams-speaking", "exams-mocks",
  "exams-history", "exams-evaluator", "exams-mock", "exams-result", "admin", "about", "contact",
  "privacy", "terms", "tips", "paths", "practice", "practice-session",
]);

describe("navigation — the six PROMPT 31 categories", () => {
  it("has exactly the six categories in order", () => {
    expect(NAV_CATEGORIES.map((c) => c.id)).toEqual([
      "learn", "grammar", "courses", "practice", "ai-tools", "resources",
    ]);
  });

  it("each category carries a description and the requested items", () => {
    const expectedCounts: Record<string, number> = {
      learn: 5,
      grammar: 5,
      courses: 6,
      practice: 7,
      "ai-tools": 4,
      resources: 4,
    };
    for (const category of NAV_CATEGORIES) {
      expect(category.tagline.length).toBeGreaterThan(20);
      expect(category.items).toHaveLength(expectedCounts[category.id]);
      expect(category.featured.length).toBeGreaterThan(0);
      expect(category.quickLinks.length).toBeGreaterThan(0);
    }
  });

  it("every item is fully specified", () => {
    for (const { item } of allNavDestinations()) {
      expect(item.label.length).toBeGreaterThan(3);
      expect(item.description.length).toBeGreaterThan(20);
      expect(item.difficulty.length).toBeGreaterThan(0);
      expect(["reading", "listening", "speaking", "writing", "vocabulary", "grammar", "general"]).toContain(item.skill);
      expect(item.activeWhen.length).toBeGreaterThan(0);
    }
  });

  it("every href parses to a real route and round-trips through the router", () => {
    const links = [
      ...allNavDestinations().map(({ item }) => item.href),
      ...NAV_CATEGORIES.flatMap((c) => [
        ...c.featured.map((f) => f.href),
        ...c.quickLinks.map((q) => q.href),
      ]),
    ];
    expect(links.length).toBeGreaterThan(30);
    for (const href of links) {
      expect(href.startsWith("#/")).toBe(true);
      const route = parseHash(href);
      // A link that silently falls back to home is a broken link.
      expect(route.name).not.toBe("home");
      expect(routeToHash(route as AppRoute)).toBe(href);
    }
  });

  it("no duplicate hrefs inside one category", () => {
    for (const category of NAV_CATEGORIES) {
      const hrefs = category.items.map((i) => i.href);
      expect(new Set(hrefs).size).toBe(hrefs.length);
    }
  });

  it("activeWhen values are real route names", () => {
    for (const { item } of allNavDestinations()) {
      for (const routeName of item.activeWhen) {
        expect(ROUTE_NAMES.has(routeName)).toBe(true);
      }
    }
  });

  it("activeCategoryId resolves representative routes", () => {
    expect(activeCategoryId("lesson")).toBe("learn");
    expect(activeCategoryId("grammar-tenses")).toBe("grammar");
    expect(activeCategoryId("course")).toBe("courses");
    expect(activeCategoryId("listening")).toBe("practice");
    expect(activeCategoryId("tutor")).toBe("ai-tools");
    expect(activeCategoryId("tips")).toBe("resources");
    expect(activeCategoryId("home")).toBeNull();
  });

  it("cross-linked surfaces resolve to the owning category", () => {
    // Speaking/Writing/Vocabulary appear in Courses AND Practice — Practice owns them.
    expect(activeCategoryId("speaking")).toBe("practice");
    expect(activeCategoryId("writing")).toBe("practice");
    expect(activeCategoryId("vocabulary")).toBe("practice");
    // The grammar tools appear in Learn's Grammar Core AND Grammar — Grammar owns them.
    expect(activeCategoryId("grammar")).toBe("grammar");
    expect(activeCategoryId("lab")).toBe("grammar");
  });
});

describe("navigation — honest content claims", () => {
  it("featured lesson labels match the real lesson titles", () => {
    const learn = NAV_CATEGORIES.find((c) => c.id === "learn")!;
    for (const featured of learn.featured) {
      const slug = featured.href.replace("#/lesson/", "");
      const lesson = getLesson(slug);
      expect(lesson, `lesson ${slug} must exist`).toBeDefined();
      expect(featured.label).toBe(lesson!.title);
    }
  });

  it("the grammar 'Types of Sentences' item points at the real lesson", () => {
    const grammar = NAV_CATEGORIES.find((c) => c.id === "grammar")!;
    const item = grammar.items.find((i) => i.label === "Types of Sentences")!;
    const lesson = getLesson(item.href.replace("#/lesson/", ""));
    expect(lesson?.title).toBe("Sentence Lab · Stage 3: Sentence Types");
  });

  it("AI tool featured entries match real tutor modes", () => {
    const aiTools = NAV_CATEGORIES.find((c) => c.id === "ai-tools")!;
    const modeIds = new Set<string>(tutorModes.map((m) => m.id));
    for (const item of aiTools.items) {
      if (item.href.startsWith("#/tutor/m/")) {
        expect(modeIds.has(item.href.replace("#/tutor/m/", ""))).toBe(true);
      }
    }
    for (const featured of aiTools.featured) {
      expect(modeIds.has(featured.href.replace("#/tutor/m/", ""))).toBe(true);
    }
  });

  it("counts in item descriptions match the content modules", () => {
    const text = allNavDestinations()
      .map(({ item }) => `${item.label} ${item.description}`)
      .join(" ");
    expect(text).toContain(`${lessons.length} lessons`); // learning path claim
    expect(text).toContain(`${vocabWords.length} words`);
    expect(text).toContain(`${readingTexts.length} graded texts`);
    expect(text).toContain(`${listeningActivities.length} audio activities`);
    expect(text).toContain(`${speakingActivities.length} activities`);
    expect(text).toContain(`${conversationScenarios.length} AI role-plays`);
    expect(text).toContain(`${writingAssignments.length} guided assignments`);
    expect(text).toContain(`${tutorModes.length} teaching modes`);
  });
});

describe("router — PROMPT 31 deep links", () => {
  it("parses #/library/<level>", () => {
    expect(parseHash("#/library/pre-a1")).toEqual({ name: "library", level: "pre-a1" });
    expect(parseHash("#/library/grammar-core")).toEqual({ name: "library", level: "grammar-core" });
    expect(parseHash("#/library")).toEqual({ name: "library" });
    expect(parseHash("#/library/not-a-level")).toEqual({ name: "library" });
    expect(routeToHash({ name: "library", level: "a1" })).toBe("#/library/a1");
  });

  it("parses #/courses/level/<slug>", () => {
    expect(parseHash("#/courses/level/a1-beginner")).toEqual({ name: "courses", level: "a1-beginner" });
    expect(parseHash("#/courses")).toEqual({ name: "courses" });
    expect(routeToHash({ name: "courses", level: "ielts-preparation" })).toBe(
      "#/courses/level/ielts-preparation",
    );
  });

  it("parses #/tutor/m/<modeId>", () => {
    expect(parseHash("#/tutor/m/writing")).toEqual({ name: "tutor", mode: "writing" });
    expect(parseHash("#/tutor/m/conversation")).toEqual({ name: "tutor", mode: "conversation" });
    expect(parseHash("#/tutor/c/abc")).toEqual({ name: "tutor", id: "abc" });
    expect(parseHash("#/tutor")).toEqual({ name: "tutor" });
    expect(routeToHash({ name: "tutor", mode: "sentence" })).toBe("#/tutor/m/sentence");
  });

  it("parses #/practice and #/practice/s/<id>", () => {
    expect(parseHash("#/practice")).toEqual({ name: "practice", tab: undefined });
    expect(parseHash("#/practice/history")).toEqual({ name: "practice", tab: "history" });
    expect(parseHash("#/practice/s/abc123")).toEqual({ name: "practice-session", id: "abc123" });
    expect(routeToHash({ name: "practice" })).toBe("#/practice");
    expect(routeToHash({ name: "practice", tab: "chapters" })).toBe("#/practice/chapters");
    expect(routeToHash({ name: "practice-session", id: "abc123" })).toBe("#/practice/s/abc123");
  });

  it("parses #/tips", () => {
    expect(parseHash("#/tips")).toEqual({ name: "tips" });
    expect(routeToHash({ name: "tips" })).toBe("#/tips");
  });
});
