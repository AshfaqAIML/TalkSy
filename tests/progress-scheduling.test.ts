/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { buildRevisionPlan } from "@/lib/progress/revision";
import { buildRecommendations } from "@/lib/progress/recommendations";
import type { ProgressFacts } from "@/data/progress";
import { makeFacts, daysAgo, TEST_NOW } from "./progress-fixture";

const GRAMMAR_LESSON = {
  slug: "grammar-tenses-present",
  title: "Present Tenses",
  levelId: "grammar-core",
  status: "in-progress" as const,
  sectionsDone: 4,
  sectionsTotal: 4,
  updatedAt: daysAgo(20),
  completedAt: daysAgo(20),
};

describe("revision scheduler", () => {
  it("schedules due vocabulary reviews with a spaced-repetition reason", () => {
    const facts = makeFacts({
      vocabWords: [
        {
          wordId: "hello", term: "hello", status: "learning" as const,
          totalReviews: 3, correctReviews: 2, lapses: 1, isDifficult: false,
          dueAt: daysAgo(1), lastReviewedAt: daysAgo(2), firstSeenAt: daysAgo(10),
        },
      ],
    });
    const plan = buildRevisionPlan(facts);
    expect(plan.counts.vocabularyDue).toBe(1);
    const item = plan.due.find((i) => i.kind === "vocabulary");
    expect(item).toBeDefined();
    expect(item!.status).toBe("due");
    expect(item!.urgency).toBeGreaterThan(80);
    expect(item!.reason).toContain("long-term memory");
    expect(item!.factors.dueAt).not.toBeNull();
  });

  it("schedules a completed grammar lesson with weak performance as due", () => {
    const facts = makeFacts({
      lessons: [GRAMMAR_LESSON],
      lessonsCompletedCount: 1,
      exerciseAttempts: [
        { id: "a1", exerciseId: "e1", lessonSlug: "grammar-tenses-present", type: "mcq", skill: "grammar", isCorrect: true, difficulty: "medium", createdAt: daysAgo(20) },
        { id: "a2", exerciseId: "e2", lessonSlug: "grammar-tenses-present", type: "mcq", skill: "grammar", isCorrect: false, difficulty: "medium", createdAt: daysAgo(20) },
      ],
      assessmentResults: [
        { lessonSlug: "grammar-tenses-present", score: 0.6, passed: true, completedAt: daysAgo(20) },
      ],
    });
    const plan = buildRevisionPlan(facts);
    const item = plan.due.find((i) => i.id === "grammar-lesson:grammar-tenses-present");
    expect(item).toBeDefined();
    expect(item!.status).toBe("due");
    // The reason quotes the real factors.
    expect(item!.reason).toContain("60%");
    expect(item!.factors.daysSince).toBeGreaterThanOrEqual(7);
    expect(item!.factors.attempts).toBe(2);
  });

  it("raises urgency when self-reported confidence is low", () => {
    const base = {
      lessons: [GRAMMAR_LESSON],
      lessonsCompletedCount: 1,
      assessmentResults: [
        { lessonSlug: "grammar-tenses-present", score: 0.7, passed: true, completedAt: daysAgo(20) },
      ],
    };
    const confident = buildRevisionPlan(
      makeFacts({ ...base, confidence: { "grammar-tenses-present": 5 } }),
    );
    const shaky = buildRevisionPlan(
      makeFacts({ ...base, confidence: { "grammar-tenses-present": 1 } }),
    );
    const confidentItem = confident.due.find((i) => i.id === "grammar-lesson:grammar-tenses-present");
    const shakyItem = shaky.due.find((i) => i.id === "grammar-lesson:grammar-tenses-present");
    expect(shakyItem).toBeDefined();
    expect(confidentItem).toBeDefined();
    expect(shakyItem!.urgency).toBeGreaterThan(confidentItem!.urgency);
  });

  it("does not schedule strong, recent lessons", () => {
    const facts = makeFacts({
      lessons: [{ ...GRAMMAR_LESSON, updatedAt: daysAgo(2), completedAt: daysAgo(2) }],
      lessonsCompletedCount: 1,
      assessmentResults: [
        { lessonSlug: "grammar-tenses-present", score: 0.95, passed: true, completedAt: daysAgo(2) },
      ],
    });
    const plan = buildRevisionPlan(facts);
    expect(plan.due.find((i) => i.id === "grammar-lesson:grammar-tenses-present")).toBeUndefined();
    expect(plan.soon.find((i) => i.id === "grammar-lesson:grammar-tenses-present")).toBeUndefined();
  });

  it("schedules writing below the pass threshold with feedback waiting", () => {
    const facts = makeFacts({
      writingProgress: [
        { assignmentId: "w1", title: "My Family", tier: "beginner", status: "in-progress", bestScore: 0.55, submissionsCount: 1, updatedAt: daysAgo(3), completedAt: null },
      ],
      writingSubmissions: [
        { id: "s1", assignmentId: "w1", title: "My Family", version: 1, overall: 55, passed: false, wordCount: 60, sentenceCount: 4, createdAt: daysAgo(3) },
      ],
    });
    const plan = buildRevisionPlan(facts);
    const item = plan.due.find((i) => i.kind === "writing-assignment");
    expect(item).toBeDefined();
    expect(item!.reason).toContain("feedback");
    expect(item!.factors.performance).toBe(55);
    expect(item!.factors.attempts).toBe(1);
  });

  it("schedules a stale started reading text as due", () => {
    const facts = makeFacts({
      readingProgress: [
        { textId: "t1", title: "A Day at the Market", status: "in-progress", bestRunScore: 0, updatedAt: daysAgo(10), completedAt: null },
      ],
    });
    const plan = buildRevisionPlan(facts);
    const item = plan.due.find((i) => i.kind === "reading-text");
    expect(item).toBeDefined();
    expect(item!.title).toContain("Finish reading");
  });

  it("offers confidence rating only for completed lessons", () => {
    const facts = makeFacts({
      lessons: [
        GRAMMAR_LESSON,
        { ...GRAMMAR_LESSON, slug: "p1-1-2", title: "Numbers", completedAt: null, status: "in-progress" as const },
      ],
      lessonsCompletedCount: 1,
    });
    const plan = buildRevisionPlan(facts);
    expect(plan.confidenceLessons.length).toBe(1);
    expect(plan.confidenceLessons[0].slug).toBe("grammar-tenses-present");
  });

  it("is deterministic: same facts give the same plan", () => {
    const facts = makeFacts({
      lessons: [GRAMMAR_LESSON],
      lessonsCompletedCount: 1,
      assessmentResults: [
        { lessonSlug: "grammar-tenses-present", score: 0.6, passed: true, completedAt: daysAgo(20) },
      ],
    });
    expect(buildRevisionPlan(facts)).toEqual(buildRevisionPlan(facts));
  });
});

describe("recommendation engine", () => {
  function lessonsFact(overrides: Partial<ProgressFacts> = {}): ProgressFacts {
    return makeFacts({
      lessons: [
        { slug: "p1-1-1", title: "Hello, World!", levelId: "pre-a1", status: "completed", sectionsDone: 4, sectionsTotal: 4, updatedAt: daysAgo(5), completedAt: daysAgo(5) },
        { slug: "p1-1-2", title: "Numbers 1-10", levelId: "pre-a1", status: "in-progress", sectionsDone: 1, sectionsTotal: 3, updatedAt: daysAgo(2), completedAt: null },
      ],
      lessonsCompletedCount: 1,
      ...overrides,
    });
  }

  it("recommends continuing the most-started lesson with a purpose", () => {
    const recommendations = buildRecommendations(lessonsFact(), buildRevisionPlan(lessonsFact()));
    const next = recommendations.find((r) => r.kind === "next-lesson");
    expect(next).toBeDefined();
    expect(next!.title).toContain("Numbers 1-10");
    expect(next!.purpose.length).toBeGreaterThan(20);
    expect(next!.href).toBe("#/lesson/p1-1-2");
  });

  it("recommends due vocabulary reviews with the count in the purpose", () => {
    const facts = makeFacts({
      vocabWords: [
        { wordId: "w1", term: "apple", status: "learning" as const, totalReviews: 2, correctReviews: 2, lapses: 0, isDifficult: false, dueAt: daysAgo(0), lastReviewedAt: daysAgo(2), firstSeenAt: daysAgo(5) },
        { wordId: "w2", term: "bread", status: "learning" as const, totalReviews: 1, correctReviews: 1, lapses: 0, isDifficult: false, dueAt: daysAgo(0), lastReviewedAt: daysAgo(3), firstSeenAt: daysAgo(6) },
      ],
    });
    const recommendations = buildRecommendations(facts, buildRevisionPlan(facts));
    const vocab = recommendations.find((r) => r.kind === "vocabulary");
    expect(vocab).toBeDefined();
    expect(vocab!.title).toContain("2 due words");
    expect(vocab!.purpose).toContain("long-term memory");
    expect(vocab!.href).toBe("#/vocabulary/today");
  });

  it("recommends grammar practice driven by real error-clinic categories", () => {
    const facts = makeFacts({
      clinicSentences: [
        { id: "c1", issuesCount: 2, categories: ["articles"], createdAt: daysAgo(3) },
        { id: "c2", issuesCount: 1, categories: ["articles"], createdAt: daysAgo(2) },
      ],
    });
    const recommendations = buildRecommendations(facts, buildRevisionPlan(facts));
    const grammar = recommendations.find((r) => r.kind === "grammar-practice");
    expect(grammar).toBeDefined();
    expect(grammar!.purpose).toContain("articles");
    expect(grammar!.href).toBe("#/lesson/grammar-pos-1");
  });

  it("recommends balancing the least-practised skill (reading far ahead of speaking)", () => {
    const facts = makeFacts({
      readingAttempts: Array.from({ length: 20 }, (_, i) => ({
        questionId: `q${i}`, skill: "detail", isCorrect: true, createdAt: daysAgo(1),
      })),
    });
    const recommendations = buildRecommendations(facts, buildRevisionPlan(facts));
    const balance = recommendations.find((r) => r.kind === "skill-balance");
    expect(balance).toBeDefined();
    expect(balance!.title).toContain("Speaking");
    expect(balance!.href).toBe("#/speaking");
    // Speaking challenge recommendation also appears for a fresh learner.
    const speaking = recommendations.find((r) => r.kind === "speaking-challenge");
    expect(speaking).toBeDefined();
    expect(speaking!.purpose).toContain("speaking");
  });

  it("always explains the purpose of every recommendation", () => {
    const facts = lessonsFact({
      vocabWords: [
        { wordId: "w1", term: "apple", status: "learning" as const, totalReviews: 2, correctReviews: 2, lapses: 0, isDifficult: false, dueAt: daysAgo(0), lastReviewedAt: daysAgo(2), firstSeenAt: daysAgo(5) },
      ],
    });
    const recommendations = buildRecommendations(facts, buildRevisionPlan(facts));
    expect(recommendations.length).toBeGreaterThan(0);
    for (const recommendation of recommendations) {
      expect(recommendation.purpose.length).toBeGreaterThan(20);
      expect(recommendation.href.startsWith("#/")).toBe(true);
      expect(recommendation.action.length).toBeGreaterThan(5);
    }
    // Sorted by weight, capped at 6.
    const weights = recommendations.map((r) => r.weight);
    expect([...weights].sort((a, b) => b - a)).toEqual(weights);
    expect(recommendations.length).toBeLessThanOrEqual(6);
  });

  it("is deterministic", () => {
    const facts = lessonsFact();
    expect(buildRecommendations(facts, buildRevisionPlan(facts))).toEqual(
      buildRecommendations(facts, buildRevisionPlan(facts)),
    );
  });
});
