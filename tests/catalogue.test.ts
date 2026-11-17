/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { buildCatalogue, buildHubContent, buildRecommendations } from "@/lib/catalogue/service";
import { HUBS } from "@/lib/catalogue/hubs";
import { LEARNING_PATHS } from "@/lib/catalogue/paths";
import { HUB_IDS, type CatalogueItem } from "@/lib/catalogue/types";
import { parseHash, routeToHash, type AppRoute } from "@/hooks/use-hash-route";
import { lessons as curriculumLessons, levels as curriculumLevels, type LevelId } from "@/data/curriculum";
import { partsOfSpeech } from "@/data/grammar/parts-of-speech";
import { tenses } from "@/data/grammar/tenses";
import { readingTexts } from "@/data/reading";
import { listeningActivities, listeningStages } from "@/data/listening";
import { speakingActivities, conversationScenarios, pronunciationItems } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { vocabWords } from "@/data/vocabulary";
import { db } from "@/lib/db";

const GUIDES_COUNT = partsOfSpeech.length + 2; // POS + tense comparison + sentence structure

/** Every href in a payload must be a real route (never a silent home fallback). */
function expectValidHref(href: string) {
  expect(href.startsWith("#/")).toBe(true);
  const route = parseHash(href);
  expect(route.name).not.toBe("home");
  expect(routeToHash(route as AppRoute)).toBe(href);
}

describe("catalogue — format coverage and metadata integrity", () => {
  const payloadPromise = buildCatalogue();
  const byFormat = (items: CatalogueItem[], format: string) =>
    items.filter((i) => i.format === format);

  it("has all seven content formats with real items", async () => {
    const payload = await payloadPromise;
    const liveCourses = await db.cmsCourse.count({ where: { live: true } });
    expect(payload.paths).toHaveLength(LEARNING_PATHS.length);
    expect(byFormat(payload.items, "path")).toHaveLength(LEARNING_PATHS.length);
    // Courses = live CMS courses in this database.
    expect(byFormat(payload.items, "course")).toHaveLength(liveCourses);
    expect(liveCourses).toBeGreaterThanOrEqual(1);
    // Short lessons = 20 curriculum lessons + live CMS lessons.
    expect(byFormat(payload.items, "lesson").length).toBeGreaterThanOrEqual(
      curriculumLessons.length + (await db.cmsLesson.count({ where: { live: true } })),
    );
    // Guides = 8 parts of speech + tense comparison + sentence structure.
    expect(byFormat(payload.items, "guide")).toHaveLength(GUIDES_COUNT);
    // Labs cover the practice surfaces.
    expect(byFormat(payload.items, "lab").length).toBeGreaterThanOrEqual(7);
    // Simulators = every conversation scenario.
    expect(byFormat(payload.items, "simulator")).toHaveLength(conversationScenarios.length);
  });

  it("every item carries the required real metadata", async () => {
    const payload = await payloadPromise;
    for (const item of payload.items) {
      expect(item.title.length).toBeGreaterThan(2);
      expect(item.description.length).toBeGreaterThan(20);
      expect(item.skills.length).toBeGreaterThan(0);
      expect(item.topics.length).toBeGreaterThan(0);
      for (const topic of item.topics) {
        expect(HUB_IDS).toContain(topic);
      }
      expectValidHref(item.href);
      // Difficulty is a real label, never empty.
      if (item.format !== "path") {
        expect(item.difficulty === null || item.difficulty.length > 0).toBe(true);
      }
    }
  });

  it("ids are unique across the whole catalogue", async () => {
    const payload = await payloadPromise;
    const ids = payload.items.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("counts and durations match the real content sources", async () => {
    const payload = await payloadPromise;
    const courses = byFormat(payload.items, "course");
    for (const course of courses) {
      expect(course.chapterCount).toBeGreaterThan(0);
      expect(course.lessonCount).toBeGreaterThan(0);
      expect(course.durationMinutes).toBeGreaterThan(0);
    }
    // Curriculum lessons keep their real durations and levels.
    const lesson = payload.items.find((i) => i.id === "lesson:p1-1-1")!;
    const source = curriculumLessons.find((l) => l.slug === "p1-1-1")!;
    expect(lesson.durationMinutes).toBe(source.estimatedMinutes);
    expect(lesson.level).toBe("Pre-A1");
    // Lab activity counts come from the data modules.
    const reading = payload.items.find((i) => i.id === "lab:reading-room")!;
    expect(reading.activityCount).toBe(readingTexts.length);
    const listening = payload.items.find((i) => i.id === "lab:listening-lab")!;
    expect(listening.activityCount).toBe(listeningActivities.length);
    expect(listening.chapterCount).toBe(listeningStages.length);
    const speaking = payload.items.find((i) => i.id === "lab:speaking-lab")!;
    expect(speaking.activityCount).toBe(speakingActivities.length);
    const writing = payload.items.find((i) => i.id === "lab:writing-studio")!;
    expect(writing.activityCount).toBe(writingAssignments.length);
    const spelling = payload.items.find((i) => i.id === "lab:spelling-practice")!;
    expect(spelling.activityCount).toBe(vocabWords.length);
    const pronunciation = payload.items.find((i) => i.id === "lab:pronunciation")!;
    expect(pronunciation.activityCount).toBe(pronunciationItems.length);
    // The tense guide names the real tense count.
    const tenseGuide = payload.items.find((i) => i.id === "guide:tense-comparison")!;
    expect(tenseGuide.description).toContain(`${tenses.length} tenses`);
  });

  it("CMS lessons expose their real prerequisites", async () => {
    const payload = await payloadPromise;
    const withPrereqs = byFormat(payload.items, "lesson").filter((i) => i.prerequisites.length > 0);
    expect(withPrereqs.length).toBeGreaterThan(0);
    for (const item of withPrereqs) {
      for (const prerequisite of item.prerequisites) {
        expect(prerequisite.length).toBeGreaterThan(3);
      }
    }
  });

  it("anonymous catalogue has no completion data and no completed section", async () => {
    const payload = await payloadPromise;
    for (const item of payload.items) {
      expect(item.completion).toBeNull();
      expect(item.progress ?? null).toBeNull();
    }
    expect(payload.completed).toBeNull();
  });

  it("no fake popularity counters or review scores anywhere", async () => {
    const payload = await payloadPromise;
    const serialized = JSON.stringify(payload);
    expect(serialized).not.toContain("rating");
    expect(serialized).not.toContain("stars");
    expect(serialized).not.toContain("reviewCount");
    expect(serialized).not.toContain("bestseller");
  });
});

describe("catalogue — learning paths (format A)", () => {
  const payloadPromise = buildCatalogue();

  it("path definitions reference real content only", async () => {
    const payload = await payloadPromise;
    const levelIds = new Set<string>(curriculumLevels.map((l) => l.id));
    const liveSlugs = new Set(
      (await db.cmsCourse.findMany({ where: { live: true }, select: { slug: true } })).map(
        (c) => c.slug,
      ),
    );
    for (const def of LEARNING_PATHS) {
      expect(def.outcomes.length).toBeGreaterThanOrEqual(4);
      for (const step of def.steps) {
        if (step.kind === "curriculum-level") {
          expect(levelIds.has(step.levelId)).toBe(true);
          const level = curriculumLevels.find(
            (l) => l.id === (step.levelId as LevelId),
          )!;
          expect(level.units.length).toBeGreaterThan(0); // A2 "coming soon" can't be a step
        }
        if (step.kind === "cms-course") {
          // A referenced course resolves into the catalogue exactly when it
          // is live in this database — never a dangling step.
          const inCatalogue = payload.items.some((i) => i.id === `course:${step.slug}`);
          expect(inCatalogue).toBe(liveSlugs.has(step.slug));
        }
      }
    }
  });

  it("path metadata is computed from the referenced content", async () => {
    const payload = await payloadPromise;
    for (const path of payload.paths) {
      // Paths whose referenced courses are all live carry lessons; a path
      // whose only course step is unpublished degrades to practice-only.
      if (path.chapterCount > 0) {
        expect(path.lessonCount).toBeGreaterThan(0);
        expect(path.durationMinutes).toBeGreaterThan(0);
      }
      // Steps resolve with real chapters and lessons.
      const contentSteps = path.steps.filter((s) => s.chapters !== null);
      expect(contentSteps.length).toBeGreaterThan(0);
      const lessonTotal = contentSteps.reduce(
        (sum, s) => sum + s.chapters!.reduce((c, ch) => c + ch.lessons.length, 0),
        0,
      );
      expect(lessonTotal).toBe(path.lessonCount);
      // Anonymous: progress is untracked, not faked.
      expect(path.progress).toBeNull();
      expectValidHref(path.href);
    }
  });

  it("sequenced paths state their real prerequisites", async () => {
    const payload = await payloadPromise;
    const grammar = payload.paths.find((p) => p.id === "complete-grammar")!;
    expect(grammar.prerequisites).toContain("A1 · Building Blocks");
    const zero = payload.paths.find((p) => p.id === "zero-to-confident")!;
    expect(zero.prerequisites).toHaveLength(0); // starts from zero
  });

  it("the prompt's five example paths all exist", async () => {
    const payload = await payloadPromise;
    const titles = payload.paths.map((p) => p.title);
    expect(titles).toContain("English from Zero to Confident Communication");
    expect(titles).toContain("Beginner to Elementary English");
    expect(titles).toContain("Complete English Grammar");
    expect(titles).toContain("Spoken English Development");
    expect(titles).toContain("Academic and Professional Writing");
  });
});

describe("catalogue — category hubs (§2)", () => {
  it("defines exactly the nine requested hubs with full editorial metadata", () => {
    expect(HUBS.map((h) => h.id)).toEqual(HUB_IDS);
    for (const hub of HUBS) {
      expect(hub.title.length).toBeGreaterThan(3);
      expect(hub.tagline.length).toBeGreaterThan(15);
      expect(hub.intro.length).toBeGreaterThan(80);
      expect(hub.description.length).toBeGreaterThan(120);
      expect(hub.outcomes.length).toBeGreaterThanOrEqual(4);
      expect(hub.featuredIds.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("every hub serves real content: featured, chapters, resources, practice", async () => {
    for (const hub of HUBS) {
      const content = await buildHubContent(hub.id);
      expect(content).not.toBeNull();
      const c = content!;
      // Featured items resolve to real catalogue items — every curated id
      // must resolve (nothing is silently dropped).
      expect(c.featured).toHaveLength(hub.featuredIds.length);
      expect(c.featured.length).toBeGreaterThanOrEqual(2);
      for (const item of c.featured) {
        expect(item.topics).toContain(hub.id);
        expectValidHref(item.href);
      }
      // Chapters come from a real content source.
      expect(c.chapters.length).toBeGreaterThan(0);
      const itemCount = c.chapters.reduce((sum, ch) => sum + ch.lessonCount, 0);
      expect(itemCount).toBeGreaterThan(0);
      for (const chapter of c.chapters) {
        expect(chapter.title.length).toBeGreaterThan(2);
        expect(chapter.lessons.length).toBeGreaterThan(0);
      }
      // Practice activities for the hub's skill area — curated ids resolve.
      expect(c.practice.length).toBeGreaterThanOrEqual(hub.practiceIds.length);
      expect(c.practice.length).toBeGreaterThan(0);
      // Every hub is reachable and unknown hubs 404.
      expectValidHref(`#/hub/${hub.id}`);
    }
    expect(await buildHubContent("not-a-hub")).toBeNull();
  });

  it("hub chapters mirror the real source data", async () => {
    const listening = await buildHubContent("listening");
    expect(listening!.chapters).toHaveLength(listeningStages.length);
    expect(listening!.chapters.reduce((s, c) => s + c.lessonCount, 0)).toBe(
      listeningActivities.length,
    );

    const vocabulary = await buildHubContent("vocabulary");
    expect(vocabulary!.chapters.reduce((s, c) => s + c.lessonCount, 0)).toBe(vocabWords.length);

    const reading = await buildHubContent("reading");
    expect(reading!.chapters.reduce((s, c) => s + c.lessonCount, 0)).toBe(readingTexts.length);

    const writing = await buildHubContent("writing");
    expect(writing!.chapters.reduce((s, c) => s + c.lessonCount, 0)).toBe(
      writingAssignments.length,
    );

    const spoken = await buildHubContent("spoken-english");
    expect(spoken!.chapters.reduce((s, c) => s + c.lessonCount, 0)).toBe(
      conversationScenarios.length,
    );
  });
});

describe("catalogue — recommendations (§5)", () => {
  it("anonymous users get honest starting points, no fabricated signals", async () => {
    const recs = await buildRecommendations();
    expect(recs.anonymous).toBe(true);
    expect(recs.cards.length).toBeGreaterThanOrEqual(3);
    for (const card of recs.cards) {
      expect(card.reason.length).toBeGreaterThan(10);
      expectValidHref(card.href);
      expect(card.reason.toLowerCase()).not.toContain("popular");
      expect(card.reason.toLowerCase()).not.toContain("trending");
      expect(card.reason.toLowerCase()).not.toContain("bestseller");
    }
  });

  it("signed-in recommendations come from real user data", async () => {
    // Fixture user with progress + a measured weakness + a clinic mistake.
    const user = await db.user.create({
      data: {
        email: `catalogue-recs-${Date.now()}@test.local`,
        name: "Rec Fixture",
        passwordHash: "x",
        role: "student",
        mustChangePassword: false,
      },
    });
    try {
      // One completed lesson, one in-progress lesson.
      await db.lessonProgress.create({
        data: { userId: user.id, lessonSlug: "p1-1-1", status: "completed", sectionsCompleted: "[]" },
      });
      await db.lessonProgress.create({
        data: { userId: user.id, lessonSlug: "p1-1-2", status: "in-progress", sectionsCompleted: "[]" },
      });
      // Listening is the weakest measured skill.
      await db.userStats.create({
        data: {
          userId: user.id,
          bySkill: JSON.stringify({
            listening: { attempts: 20, correct: 10 }, // 50%
            reading: { attempts: 20, correct: 19 }, // 95%
          }),
        },
      });
      // Preposition mistakes in the clinic.
      await db.grammarClinicSubmission.create({
        data: {
          userId: user.id,
          sentence: "I am good in English",
          corrected: "I am good at English",
          categories: JSON.stringify(["prepositions", "prepositions"]),
        },
      });

      const recs = await buildRecommendations(user.id);
      expect(recs.anonymous).toBe(false);
      const reasons = recs.cards.map((c) => c.reason);
      // Continue card points at the in-progress lesson.
      expect(reasons).toContain("Continue where you left off");
      const continueCard = recs.cards.find((c) => c.reason === "Continue where you left off")!;
      expect(continueCard.href).toBe("#/lesson/p1-1-2");
      // Weakness card names the measured accuracy.
      const weakness = recs.cards.find((c) => c.id === "weakness:listening");
      expect(weakness).toBeDefined();
      expect(weakness!.reason).toContain("50%");
      expect(weakness!.href).toBe("#/listening");
      // Clinic card targets the prepositions lesson (grammar-pos-4).
      const clinic = recs.cards.find((c) => c.id === "clinic:prepositions");
      expect(clinic).toBeDefined();
      expect(clinic!.href).toBe("#/lesson/grammar-pos-4");
      // Next-lesson card: p1-1-1 is done, p1-1-2 is in progress → p1-1-3.
      const next = recs.cards.find((c) => c.reason === "Your next lesson in the learning path");
      expect(next?.href).toBe("#/lesson/p1-1-3");
    } finally {
      await db.user.delete({ where: { id: user.id } }).catch(() => {});
    }
  });

  it("completed learning (format G) is served from progress rows", async () => {
    const user = await db.user.create({
      data: {
        email: `catalogue-done-${Date.now()}@test.local`,
        name: "Done Fixture",
        passwordHash: "x",
        role: "student",
        mustChangePassword: false,
      },
    });
    try {
      const empty = await buildCatalogue(user.id);
      expect(empty.completed).toBeNull(); // no progress rows at all

      await db.lessonProgress.create({
        data: { userId: user.id, lessonSlug: "p1-1-1", status: "completed", sectionsCompleted: "[]" },
      });
      const payload = await buildCatalogue(user.id);
      expect(payload.completed).not.toBeNull();
      expect(payload.completed!.lessons.map((l) => l.slug)).toContain("p1-1-1");
      // The lesson item itself is marked completed.
      const item = payload.items.find((i) => i.id === "lesson:p1-1-1")!;
      expect(item.completion).toBe("completed");
      // Path progress is computed from the same rows.
      const beginner = payload.paths.find((p) => p.id === "beginner-to-elementary")!;
      expect(beginner.progress).toEqual({ completed: 1, total: beginner.lessonCount });
      expect(beginner.completion).toBe("in-progress");
    } finally {
      await db.user.delete({ where: { id: user.id } }).catch(() => {});
    }
  });
});

describe("router — catalogue routes", () => {
  it("parses hub and path routes", () => {
    expect(parseHash("#/hub/grammar")).toEqual({ name: "hub", hubId: "grammar" });
    expect(parseHash("#/hub/beginner-english")).toEqual({
      name: "hub",
      hubId: "beginner-english",
    });
    expect(parseHash("#/hub")).toEqual({ name: "courses" }); // no id → catalogue
    expect(routeToHash({ name: "hub", hubId: "writing" })).toBe("#/hub/writing");

    expect(parseHash("#/paths")).toEqual({ name: "paths" });
    expect(parseHash("#/paths/complete-grammar")).toEqual({
      name: "paths",
      slug: "complete-grammar",
    });
    expect(routeToHash({ name: "paths" })).toBe("#/paths");
    expect(routeToHash({ name: "paths", slug: "zero-to-confident" })).toBe(
      "#/paths/zero-to-confident",
    );
  });

  it("every hub id and path id round-trips through the router", () => {
    for (const hub of HUBS) {
      expectValidHref(`#/hub/${hub.id}`);
    }
    for (const def of LEARNING_PATHS) {
      expectValidHref(`#/paths/${def.id}`);
    }
  });
});
