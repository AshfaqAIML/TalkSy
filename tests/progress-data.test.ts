/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  achievements,
  ACHIEVEMENT_ICON_NAMES,
  courses,
  courseCompletion,
  grammarCourseIds,
  validateProgressionContent,
} from "@/data/progress";
import { makeFacts, daysAgo } from "./progress-fixture";

describe("progression content integrity", () => {
  it("passes content validation with zero issues", () => {
    expect(validateProgressionContent()).toEqual([]);
  });

  it("defines all milestones required by the product specification", () => {
    const ids = achievements.filter((a) => a.kind === "milestone").map((a) => a.id);
    for (const required of [
      "first-100-words",
      "first-50-sentences",
      "first-paragraph",
      "first-conversation",
      "first-writing-assignment",
      "first-grammar-course",
      "first-speaking-task",
    ]) {
      expect(ids).toContain(required);
    }
  });

  it("has a substantial catalog with unique ids and valid icons", () => {
    expect(achievements.length).toBeGreaterThanOrEqual(35);
    const ids = new Set(achievements.map((a) => a.id));
    expect(ids.size).toBe(achievements.length);
    for (const achievement of achievements) {
      expect(ACHIEVEMENT_ICON_NAMES as readonly string[]).toContain(achievement.icon);
      expect(achievement.requirement.length).toBeGreaterThan(10);
      expect(typeof achievement.verify).toBe("function");
    }
  });

  it("keeps unlocked milestones out of empty facts (integrity: nothing for free)", () => {
    const facts = makeFacts();
    for (const achievement of achievements) {
      const state = achievement.verify(facts);
      expect(state.unlocked).toBe(false);
    }
  });

  it("derives courses from the curriculum with unit + level tiers", () => {
    const unitCourses = courses.filter((c) => c.kind === "unit");
    const levelCourses = courses.filter((c) => c.kind === "level");
    expect(unitCourses.length).toBeGreaterThanOrEqual(5);
    expect(levelCourses.map((c) => c.levelId)).toContain("pre-a1");
    expect(levelCourses.map((c) => c.levelId)).toContain("grammar-core");
    expect(grammarCourseIds().length).toBeGreaterThanOrEqual(3);
  });

  it("computes course completion only from verified completions", () => {
    const course = courses.find((c) => c.id === "pre-a1:1")!;
    expect(course.lessonSlugs.length).toBeGreaterThan(0);
    const partial = new Set(course.lessonSlugs.slice(0, course.lessonSlugs.length - 1));
    expect(courseCompletion(course, partial).done).toBe(false);
    expect(courseCompletion(course, new Set(course.lessonSlugs)).done).toBe(true);
    expect(courseCompletion(course, new Set()).completed).toBe(0);
  });
});

describe("achievement verification (sample predicates)", () => {
  it("unlocks first-100-words exactly at the 100th learned word with its date", () => {
    const words = Array.from({ length: 100 }, (_, i) => ({
      wordId: `w${i}`,
      term: `word${i}`,
      status: "learning" as const,
      totalReviews: 1,
      correctReviews: 1,
      lapses: 0,
      isDifficult: false,
      dueAt: null,
      lastReviewedAt: daysAgo(1),
      firstSeenAt: daysAgo(50 - i),
    }));
    const achievement = achievements.find((a) => a.id === "first-100-words")!;

    const at99 = achievement.verify(makeFacts({ vocabWords: words.slice(0, 99) }));
    expect(at99.unlocked).toBe(false);
    expect(at99.progress).toEqual({ current: 99, target: 100 });

    const at100 = achievement.verify(makeFacts({ vocabWords: words }));
    expect(at100.unlocked).toBe(true);
    expect(at100.unlockedAt).toBe(daysAgo(50 - 99).toISOString());
  });

  it("unlocks first-paragraph only for 3+ sentence submissions", () => {
    const achievement = achievements.find((a) => a.id === "first-paragraph")!;
    const twoSentences = makeFacts({
      writingSubmissions: [
        { id: "s1", assignmentId: "a1", title: "A", version: 1, overall: 40, passed: false, wordCount: 20, sentenceCount: 2, createdAt: daysAgo(3) },
      ],
    });
    expect(achievement.verify(twoSentences).unlocked).toBe(false);

    const threeSentences = makeFacts({
      writingSubmissions: [
        { id: "s1", assignmentId: "a1", title: "A", version: 1, overall: 40, passed: false, wordCount: 30, sentenceCount: 3, createdAt: daysAgo(3) },
      ],
    });
    const state = achievement.verify(threeSentences);
    expect(state.unlocked).toBe(true);
    expect(state.unlockedAt).toBe(daysAgo(3).toISOString());
  });

  it("unlocks writing-improvement-10 only on a real version-over-version gain", () => {
    const achievement = achievements.find((a) => a.id === "writing-improvement-10")!;
    const flat = makeFacts({
      writingSubmissions: [
        { id: "s1", assignmentId: "a1", title: "A", version: 1, overall: 60, passed: false, wordCount: 40, sentenceCount: 3, createdAt: daysAgo(10) },
        { id: "s2", assignmentId: "a1", title: "A", version: 2, overall: 65, passed: false, wordCount: 45, sentenceCount: 3, createdAt: daysAgo(5) },
      ],
    });
    expect(achievement.verify(flat).unlocked).toBe(false);
    expect(achievement.verify(flat).progress).toEqual({ current: 5, target: 10 });

    const grown = makeFacts({
      writingSubmissions: [
        { id: "s1", assignmentId: "a1", title: "A", version: 1, overall: 50, passed: false, wordCount: 40, sentenceCount: 3, createdAt: daysAgo(10) },
        { id: "s2", assignmentId: "a1", title: "A", version: 2, overall: 68, passed: false, wordCount: 45, sentenceCount: 3, createdAt: daysAgo(5) },
      ],
    });
    const state = achievement.verify(grown);
    expect(state.unlocked).toBe(true);
    expect(state.unlockedAt).toBe(daysAgo(5).toISOString());
  });

  it("unlocks streak achievements on consecutive days, keeping the run date", () => {
    const achievement = achievements.find((a) => a.id === "streak-3")!;
    const facts = makeFacts({
      pointsByDay: {
        "2026-06-11": 10,
        "2026-06-12": 10,
        "2026-06-13": 10,
      },
      streak: { current: 3, longest: 3, activeDays: 3, lastActiveDay: "2026-06-13" },
    });
    const state = achievement.verify(facts);
    expect(state.unlocked).toBe(true);
    expect(state.unlockedAt).toBe(new Date("2026-06-13T00:00:00Z").toISOString());
  });
});
