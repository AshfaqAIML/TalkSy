/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import {
  buildLearnerContext,
  deriveTutorLevel,
  isPlausibleLessonRef,
  resolveLessonRef,
} from "@/lib/tutor/context";
import { writingAssignments } from "@/data/writing";

let userCounter = 0;

async function createUser(): Promise<string> {
  userCounter += 1;
  const user = await db.user.create({
    data: {
      email: `tutor-ctx-${Date.now()}-${userCounter}@talksy.test`,
      name: `Ctx Tester ${userCounter}`,
      passwordHash: hashPassword("password123"),
    },
  });
  return user.id;
}

describe("deriveTutorLevel (pure rules)", () => {
  it("treats a brand-new learner as a beginner, gently", () => {
    const result = deriveTutorLevel({
      lessonsCompleted: 0,
      intermediateCompletions: 0,
      advancedCompletions: 0,
      vocabSeen: 0,
      vocabMastered: 0,
      recentAttempts: 0,
      recentAccuracy: 0,
    });
    expect(result.level).toBe("beginner");
    expect(result.reason).toContain("no graded activity");
  });

  it("reaches intermediate with real beginner work", () => {
    const result = deriveTutorLevel({
      lessonsCompleted: 5,
      intermediateCompletions: 0,
      advancedCompletions: 0,
      vocabSeen: 30,
      vocabMastered: 8,
      recentAttempts: 60,
      recentAccuracy: 0.7,
    });
    expect(result.level).toBe("intermediate");
  });

  it("reaches advanced only with advanced-tier verified work", () => {
    const result = deriveTutorLevel({
      lessonsCompleted: 3,
      intermediateCompletions: 0,
      advancedCompletions: 1,
      vocabSeen: 40,
      vocabMastered: 12,
      recentAttempts: 50,
      recentAccuracy: 0.8,
    });
    expect(result.level).toBe("advanced");
  });

  it("keeps a low-accuracy active learner at beginner", () => {
    const result = deriveTutorLevel({
      lessonsCompleted: 1,
      intermediateCompletions: 0,
      advancedCompletions: 0,
      vocabSeen: 5,
      vocabMastered: 0,
      recentAttempts: 30,
      recentAccuracy: 0.4,
    });
    expect(result.level).toBe("beginner");
  });
});

describe("lesson reference resolution", () => {
  it("resolves a curriculum lesson with its vocabulary and sections", () => {
    const resolved = resolveLessonRef("lesson:p1-1-1");
    expect(resolved).not.toBeNull();
    expect(resolved?.title).toBe("Hello! Everyday Greetings");
    expect(resolved?.lines.join("\n")).toContain("TalkSy curriculum lesson");
    expect(resolved?.lines.join("\n")).toContain("Lesson vocabulary");
  });

  it("resolves reading, listening, speaking and writing refs", () => {
    expect(resolveLessonRef("reading:rd-i1")?.lines.join("\n")).toContain("Reading Room text");
    expect(resolveLessonRef("listening:ls-s1")?.lines.join("\n")).toContain("Listening Lab activity");
    expect(resolveLessonRef("speaking:repeat-a-word")?.lines.join("\n")).toContain("Speaking Lab activity");
    expect(resolveLessonRef("writing:formal-letters")?.lines.join("\n")).toContain("Writing Studio assignment");
  });

  it("returns null for unknown refs", () => {
    expect(resolveLessonRef("lesson:nope")).toBeNull();
    expect(resolveLessonRef("reading:nope")).toBeNull();
    expect(resolveLessonRef("bogus:p1-1-1")).toBeNull();
    expect(resolveLessonRef("not-a-ref")).toBeNull();
  });

  it("guards the ref format", () => {
    expect(isPlausibleLessonRef("lesson:p1-1-1")).toBe(true);
    expect(isPlausibleLessonRef("reading:rd-i1")).toBe(true);
    expect(isPlausibleLessonRef("javascript:alert(1)")).toBe(false);
    expect(isPlausibleLessonRef("lesson:" + "x".repeat(200))).toBe(false);
  });

  it("never includes listening transcripts or correct answers in refs", () => {
    const resolved = resolveLessonRef("listening:ls-s1");
    expect(resolved).not.toBeNull();
    const text = resolved?.lines.join("\n") ?? "";
    expect(text).toContain("Exercise instructions");
    expect(text).not.toContain("correctOptionId");
  });
});

describe("buildLearnerContext (own data only)", () => {
  it("returns a gentle beginner snapshot for a fresh learner", async () => {
    const userId = await createUser();
    const context = await buildLearnerContext(userId);
    expect(context.level).toBe("beginner");
    expect(context.lines[0]).toContain("Level: beginner");
    expect(context.name).toContain("Ctx Tester");
  });

  it("collects verified history: lessons, vocabulary, mistakes, assessments, goals", async () => {
    const userId = await createUser();
    await db.lessonProgress.create({
      data: {
        userId,
        lessonSlug: "p1-1-1",
        status: "completed",
        sectionsCompleted: JSON.stringify(["s1"]),
        completedAt: new Date(),
      },
    });
    await db.vocabProgress.create({
      data: {
        userId,
        wordId: "thank-you",
        status: "mastered",
        repetitions: 4,
        totalReviews: 4,
        correctReviews: 4,
        lastReviewedAt: new Date(),
      },
    });
    await db.grammarClinicSubmission.create({
      data: {
        userId,
        sentence: "I am go to school yesterday.",
        corrected: "I went to school yesterday.",
        issues: JSON.stringify([
          {
            ruleId: "past-tense",
            category: "tense",
            original: "I am go to school yesterday.",
            suggestion: "I went to school yesterday.",
            explanation: "Past actions use the past form of the verb.",
          },
        ]),
        categories: JSON.stringify(["tense"]),
      },
    });
    await db.assessmentResult.create({
      data: {
        userId,
        lessonSlug: "p1-1-1",
        status: "completed",
        score: 0.8,
        passed: true,
        total: 5,
        correct: 4,
        completedAt: new Date(),
      },
    });
    await db.learnerGoals.create({
      data: { userId, dailyPoints: 40, weeklyPoints: 200 },
    });

    const context = await buildLearnerContext(userId);
    const all = context.lines.join("\n");
    expect(all).toContain("Current lesson: Hello! Everyday Greetings (completed)");
    expect(all).toContain("1 words met, 1 mastered");
    expect(all).toContain("thank you");
    expect(all).toContain('I am go to school yesterday.');
    expect(all).toContain("lesson p1-1-1 — 80% (passed)");
    expect(all).toContain("40 points a day, 200 a week");
  });

  it("never exposes another learner's data", async () => {
    const userA = await createUser();
    const userB = await createUser();
    await db.vocabProgress.create({
      data: {
        userId: userA,
        wordId: "thank-you",
        status: "learning",
        lastReviewedAt: new Date(),
      },
    });
    await db.grammarClinicSubmission.create({
      data: {
        userId: userA,
        sentence: "SECRET-SENTENCE-FOR-A",
        corrected: "",
        issues: "[]",
        categories: "[]",
      },
    });

    const contextB = await buildLearnerContext(userB);
    const textB = [...contextB.lines, ...contextB.lessonLines].join("\n");
    expect(textB).not.toContain("thank you");
    expect(textB).not.toContain("SECRET-SENTENCE-FOR-A");
  });

  it("derives advanced from an advanced-tier writing submission", async () => {
    const userId = await createUser();
    const advanced = writingAssignments.find((a) => a.tier === "advanced");
    expect(advanced).toBeDefined();
    await db.writingProgress.create({
      data: {
        userId,
        assignmentId: advanced?.id ?? "x",
        tier: "advanced",
        status: "completed",
        bestScore: 72,
        completedAt: new Date(),
      },
    });
    const context = await buildLearnerContext(userId);
    expect(context.level).toBe("advanced");
    expect(context.levelReason).toContain("advanced-tier work completed");
  });

  it("attaches the resolved lesson when a ref is given", async () => {
    const userId = await createUser();
    const context = await buildLearnerContext(userId, { lessonRef: "lesson:p1-1-1" });
    expect(context.lessonTitle).toBe("Hello! Everyday Greetings");
    expect(context.lessonLines.join("\n")).toContain("Hello! Everyday Greetings");
  });

  it("flags an unresolvable lesson ref instead of inventing content", async () => {
    const userId = await createUser();
    const context = await buildLearnerContext(userId, { lessonRef: "lesson:ghost" });
    expect(context.lessonTitle).toBeNull();
    expect(context.lessonLines.join("\n")).toContain("could not be resolved");
  });
});
