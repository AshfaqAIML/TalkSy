/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { buildStaticSearchIndex } from "@/lib/search/build-index";
import { getHighlightRanges, mergeRanges, searchEntries } from "@/lib/search/match";
import { SEARCH_CATEGORIES, SEARCH_FILTER_GROUPS } from "@/lib/search/types";
import { parseHash, routeToHash, type AppRoute } from "@/hooks/use-hash-route";
import { exercises, getLessonExerciseIds, lessons } from "@/data/curriculum";
import { vocabWords } from "@/data/vocabulary";
import { readingTexts } from "@/data/reading";

const index = buildStaticSearchIndex();

describe("search index — coverage", () => {
  it("covers every content surface", () => {
    const counts = new Map<string, number>();
    for (const entry of index) {
      counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
    }
    // All 20 lessons, all words, all reading texts, all lesson-attached
    // exercises (spare bank exercises have no route destination).
    expect(counts.get("Lessons")).toBe(lessons.length);
    expect(counts.get("Vocabulary")).toBeGreaterThanOrEqual(vocabWords.length);
    expect(counts.get("Reading")).toBe(readingTexts.length);
    const attachedExercises = new Set(
      lessons.flatMap((l) => getLessonExerciseIds(l)),
    ).size;
    expect(counts.get("Exercises")).toBe(attachedExercises);
    expect(attachedExercises).toBeLessThan(exercises.length); // bank exists, excluded
    expect(counts.get("Grammar")).toBeGreaterThanOrEqual(8 + 12 + 3); // POS + tenses + tools
    expect(counts.get("AI tools")).toBe(10 + 1);
    expect(counts.get("Pages")).toBeGreaterThanOrEqual(10);
    for (const category of SEARCH_CATEGORIES) {
      if (category === "Courses") continue; // DB-backed, added by the API route
      expect(counts.get(category), `${category} entries`).toBeDefined();
    }
  });

  it("ids are unique", () => {
    const ids = index.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every entry routes somewhere real (no dead results)", () => {
    for (const entry of index) {
      expect(entry.href.startsWith("#/")).toBe(true);
      const route = parseHash(entry.href);
      expect(route.name).not.toBe("home");
      expect(routeToHash(route as AppRoute)).toBe(entry.href);
    }
  });

  it("never ships grading data (no answer fields in exercises)", () => {
    const serialized = JSON.stringify(index);
    const answerKeys = ["correctAnswer", "acceptedAnswers", "correctOptionId", "whyWrong"];
    for (const key of answerKeys) {
      expect(serialized.includes(key)).toBe(false);
    }
    // Spot-check one exercise entry carries its prompt, not its answer.
    const exerciseEntry = index.find((e) => e.id.startsWith("exercise:"));
    expect(exerciseEntry).toBeDefined();
    expect(exerciseEntry!.title.length).toBeGreaterThan(5);
    expect(exerciseEntry!.href.startsWith("#/lesson/")).toBe(true);
  });
});

describe("search matcher — scoring, grouping, highlighting", () => {
  it("finds the Tense Explorer by name", () => {
    const results = searchEntries(index, "tense explorer");
    const grammar = results.get("Grammar") ?? [];
    expect(grammar.some((m) => m.entry.title === "Tense Explorer")).toBe(true);
  });

  it("finds words by word and by meaning", () => {
    const byWord = searchEntries(index, "ticket");
    expect([...byWord.values()].flat().some((m) => m.entry.title === "ticket")).toBe(true);
    const byPhrase = searchEntries(index, "greetings");
    const flat = [...byPhrase.values()].flat();
    expect(flat.some((m) => m.entry.title.includes("Greetings"))).toBe(true);
  });

  it("prefix queries match (search suggestions)", () => {
    const results = searchEntries(index, "listen");
    const flat = [...results.values()].flat();
    expect(flat.length).toBeGreaterThan(0);
    expect(flat.some((m) => m.entry.title.startsWith("Listen"))).toBe(true);
  });

  it("empty and whitespace queries return nothing", () => {
    expect(searchEntries(index, "").size).toBe(0);
    expect(searchEntries(index, "   ").size).toBe(0);
  });

  it("gibberish returns nothing (honest empty state)", () => {
    expect(searchEntries(index, "zzzqxv").size).toBe(0);
  });

  it("results are capped per category and in total", () => {
    const results = searchEntries(index, "the", { limit: 30, perCategory: 6 });
    let total = 0;
    for (const list of results.values()) {
      expect(list.length).toBeLessThanOrEqual(6);
      total += list.length;
    }
    expect(total).toBeLessThanOrEqual(30);
  });

  it("filter groups restrict the categories searched", () => {
    const vocabularyOnly = searchEntries(index, "family", { filter: "vocabulary" });
    for (const [category] of vocabularyOnly) {
      expect(category).toBe("Vocabulary");
    }
    const practiceOnly = searchEntries(index, "family", { filter: "practice" });
    for (const [category] of practiceOnly) {
      expect(["Reading", "Listening", "Speaking", "Writing"]).toContain(category);
    }
    // "All" covers every category id.
    expect(SEARCH_FILTER_GROUPS[0].categories).toHaveLength(SEARCH_CATEGORIES.length);
  });

  it("scores title matches above description matches", () => {
    const results = searchEntries(index, "family");
    const flat = [...results.values()].flat();
    const inTitle = flat.find((m) => m.entry.title.toLowerCase().includes("family"));
    const onlyElsewhere = flat.find((m) => !m.entry.title.toLowerCase().includes("family"));
    if (inTitle && onlyElsewhere) {
      expect(inTitle.score).toBeGreaterThan(onlyElsewhere.score);
    }
  });
});

describe("search matcher — highlighting", () => {
  it("marks every token occurrence, merged and in order", () => {
    const ranges = getHighlightRanges("Present Simple vs Present Continuous", [
      "present",
      "continuous",
    ]);
    expect(ranges).toEqual([
      [0, 7],
      [18, 25],
      [26, 36],
    ]);
  });

  it("single-character tokens never highlight", () => {
    expect(getHighlightRanges("Reading Room", ["a"])).toEqual([]);
  });

  it("overlapping ranges merge", () => {
    expect(
      mergeRanges([
        [0, 5],
        [3, 8],
        [9, 12],
      ]),
    ).toEqual([
      [0, 8],
      [9, 12],
    ]);
  });

  it("ranges always point inside the title", () => {
    for (const match of [...searchEntries(index, "english").values()].flat()) {
      for (const [start, end] of match.titleRanges) {
        expect(start).toBeGreaterThanOrEqual(0);
        expect(end).toBeLessThanOrEqual(match.entry.title.length);
        expect(start).toBeLessThan(end);
      }
    }
  });
});

describe("search index — live catalogue (DB)", () => {
  it("indexes courses, chapters and published lessons from the database", async () => {
    const { buildSearchIndex } = await import("@/lib/search/build-index");
    const { db } = await import("@/lib/db");
    const full = await buildSearchIndex();

    const courses = full.filter((e) => e.id.startsWith("course:"));
    const chapters = full.filter((e) => e.id.startsWith("cms-unit:"));
    const lessons = full.filter((e) => e.id.startsWith("cms-lesson:"));

    expect(courses.length).toBe(await db.cmsCourse.count({ where: { live: true } }));
    expect(chapters.length).toBeGreaterThan(0);
    expect(lessons.length).toBeGreaterThan(0);

    for (const entry of [...courses, ...chapters, ...lessons]) {
      const route = parseHash(entry.href);
      expect(route.name).not.toBe("home");
      expect(routeToHash(route as AppRoute)).toBe(entry.href);
    }
    // Chapter entries link to their course outline; lessons to the player.
    for (const chapter of chapters) {
      expect(chapter.href.startsWith("#/course/")).toBe(true);
    }
    for (const lesson of lessons) {
      expect(lesson.href.startsWith("#/course-lesson/")).toBe(true);
    }
    await db.$disconnect();
  });
});
