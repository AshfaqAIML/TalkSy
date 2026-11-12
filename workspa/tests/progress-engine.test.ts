/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { computeStreak, deriveEvents, collectFacts } from "@/lib/progress/facts";
import { buildSkillProfiles } from "@/lib/progress/skills";
import { POINT_RULES, type ProgressSkill } from "@/data/progress";

// ---------------------------------------------------------------------------
// Pure derivation tests
// ---------------------------------------------------------------------------

describe("points derivation", () => {
  it("applies the per-day cap to grindable sources", () => {
    const sameDay = new Date("2026-06-10T10:00:00Z");
    const candidates = Array.from({ length: 25 }, (_, i) => ({
      at: new Date(sameDay.getTime() + i * 60_000),
      source: "exercise-correct" as const,
      skill: "vocabulary" as ProgressSkill,
      label: "Correct exercise",
      subject: null,
    }));
    const events = deriveEvents(candidates);
    expect(events.length).toBe(POINT_RULES["exercise-correct"].capPerDay);
    expect(events.reduce((sum, e) => sum + e.points, 0)).toBe(
      POINT_RULES["exercise-correct"].capPerDay * POINT_RULES["exercise-correct"].points,
    );
  });

  it("awards once-per-subject sources only the first time", () => {
    const candidates = [
      { at: new Date("2026-06-01T10:00:00Z"), source: "lesson-completed" as const, skill: null, label: "Lesson completed", subject: "p1-1-1" },
      { at: new Date("2026-06-02T10:00:00Z"), source: "lesson-completed" as const, skill: null, label: "Lesson completed", subject: "p1-1-1" },
      { at: new Date("2026-06-03T10:00:00Z"), source: "lesson-completed" as const, skill: null, label: "Lesson completed", subject: "p1-1-2" },
    ];
    const events = deriveEvents(candidates);
    expect(events.length).toBe(2);
    expect(events.every((e) => e.points === POINT_RULES["lesson-completed"].points)).toBe(true);
  });

  it("resets the daily cap on the next day", () => {
    const candidates = [
      ...Array.from({ length: 20 }, (_, i) => ({
        at: new Date(2026, 5, 10, 8, i),
        source: "exercise-correct" as const,
        skill: "grammar" as ProgressSkill,
        label: "Correct exercise",
        subject: null,
      })),
      ...Array.from({ length: 5 }, (_, i) => ({
        at: new Date(2026, 5, 11, 9, i),
        source: "exercise-correct" as const,
        skill: "grammar" as ProgressSkill,
        label: "Correct exercise",
        subject: null,
      })),
    ];
    expect(deriveEvents(candidates).length).toBe(25);
  });

  it("is idempotent: replaying the same history yields the same points", () => {
    const candidates = [
      { at: new Date(2026, 5, 10, 8, 0), source: "exercise-correct" as const, skill: "vocabulary" as ProgressSkill, label: "Correct exercise", subject: null },
      { at: new Date(2026, 5, 10, 8, 1), source: "assessment-passed" as const, skill: null, label: "Assessment passed", subject: "p1-1-1" },
      { at: new Date(2026, 5, 10, 8, 2), source: "vocab-review-correct" as const, skill: "vocabulary" as ProgressSkill, label: "Correct word review", subject: null },
    ];
    const first = deriveEvents(candidates);
    const second = deriveEvents(candidates);
    expect(second).toEqual(first);
  });
});

describe("streak computation (non-punitive)", () => {
  it("counts a current streak ending today or yesterday", () => {
    const now = new Date("2026-06-15T12:00:00Z");
    expect(computeStreak(["2026-06-15"], now).current).toBe(1);
    expect(computeStreak(["2026-06-14"], now).current).toBe(1);
    expect(computeStreak(["2026-06-13", "2026-06-14", "2026-06-15"], now).current).toBe(3);
    // A two-day gap breaks the CURRENT streak...
    expect(computeStreak(["2026-06-12", "2026-06-13"], now).current).toBe(0);
  });

  it("never forgets the longest streak or total active days after a gap", () => {
    const now = new Date("2026-06-15T12:00:00Z");
    const days = ["2026-06-01", "2026-06-02", "2026-06-03", "2026-06-04", "2026-06-13"];
    const streak = computeStreak(days, now);
    expect(streak.current).toBe(0); // gap — but nothing is removed
    expect(streak.longest).toBe(4);
    expect(streak.activeDays).toBe(5);
  });

  it("returns zeros for learners with no activity", () => {
    const streak = computeStreak([], new Date());
    expect(streak).toEqual({ current: 0, longest: 0, activeDays: 0, lastActiveDay: null });
  });
});

// ---------------------------------------------------------------------------
// Honesty of skill profiles
// ---------------------------------------------------------------------------

describe("skill profiles", () => {
  it("marks unpractised skills not-started (never 0%)", () => {
    const facts = {
      userId: "u",
      now: new Date(),
      lessons: [], lessonsCompletedCount: 0, exerciseAttempts: [], assessmentsPassed: [],
      assessmentResults: [], vocabWords: [], vocabGradedReviews: [], vocabSentences: [],
      vocabChallenges: [], clinicSentences: [], readingProgress: [], readingRunsPassed: [],
      readingAttempts: [], listeningProgress: [], listeningAttempts: [], speakingProgress: [],
      speakingAttempts: [], conversationsCompleted: [], pronunciationAttempts: [],
      writingProgress: [], writingSubmissions: [], sentenceConstructions: [],
      goals: { dailyPoints: 30, weeklyPoints: 150 }, confidence: {},
      events: [], pointsTotal: 0, pointsToday: 0, pointsThisWeek: 0, pointsByDay: {},
      dailyActivity: [], weekly: [],
      streak: { current: 0, longest: 0, activeDays: 0, lastActiveDay: null },
    };
    const skills = buildSkillProfiles(facts as never);
    expect(skills.length).toBe(6);
    for (const skill of skills) {
      expect(skill.status).toBe("not-started");
      expect(skill.accuracy).toBeNull();
      expect(skill.practiceEvents).toBe(0);
    }
  });

  it("represents strong reading + weak speaking without averaging them away", () => {
    const now = new Date();
    const day = (n: number) => new Date(now.getTime() - n * 86_400_000);
    const facts = {
      userId: "u",
      now,
      lessons: [], lessonsCompletedCount: 0, exerciseAttempts: [], assessmentsPassed: [],
      assessmentResults: [], vocabWords: [], vocabGradedReviews: [], vocabSentences: [],
      vocabChallenges: [], clinicSentences: [],
      readingProgress: [],
      readingRunsPassed: [],
      readingAttempts: Array.from({ length: 40 }, (_, i) => ({
        questionId: `q${i}`, skill: "detail", isCorrect: i % 10 !== 0, createdAt: day(1),
      })),
      listeningProgress: [], listeningAttempts: [],
      speakingProgress: [], speakingAttempts: [], conversationsCompleted: [], pronunciationAttempts: [],
      writingProgress: [], writingSubmissions: [], sentenceConstructions: [],
      goals: { dailyPoints: 30, weeklyPoints: 150 }, confidence: {},
      events: [], pointsTotal: 0, pointsToday: 0, pointsThisWeek: 0, pointsByDay: {},
      dailyActivity: [], weekly: [],
      streak: { current: 0, longest: 0, activeDays: 0, lastActiveDay: null },
    };
    const skills = buildSkillProfiles(facts as never);
    const reading = skills.find((s) => s.skill === "reading")!;
    const speaking = skills.find((s) => s.skill === "speaking")!;

    expect(reading.status).toBe("building");
    expect(reading.accuracy).not.toBeNull();
    expect(reading.accuracy!.pct).toBe(90);
    expect(reading.accuracy!.basis).toBe("graded comprehension answers");

    expect(speaking.status).toBe("not-started");
    expect(speaking.accuracy).toBeNull(); // never a fake 0% accuracy
    expect(speaking.notes.join(" ")).toContain("not pronunciation grades");
  });

  it("keeps writing accuracy null (rubric scores are never 'accuracy')", () => {
    const now = new Date();
    const facts = {
      userId: "u",
      now,
      lessons: [], lessonsCompletedCount: 0, exerciseAttempts: [], assessmentsPassed: [],
      assessmentResults: [], vocabWords: [], vocabGradedReviews: [], vocabSentences: [],
      vocabChallenges: [], clinicSentences: [], readingProgress: [], readingRunsPassed: [],
      readingAttempts: [], listeningProgress: [], listeningAttempts: [], speakingProgress: [],
      speakingAttempts: [], conversationsCompleted: [], pronunciationAttempts: [],
      writingProgress: [], writingSubmissions: [], sentenceConstructions: [],
      goals: { dailyPoints: 30, weeklyPoints: 150 }, confidence: {},
      events: [], pointsTotal: 0, pointsToday: 0, pointsThisWeek: 0, pointsByDay: {},
      dailyActivity: [], weekly: [],
      streak: { current: 0, longest: 0, activeDays: 0, lastActiveDay: null },
    };
    // add nothing — writing has no graded right/wrong answers by design
    const writing = buildSkillProfiles(facts as never).find((s) => s.skill === "writing")!;
    expect(writing.accuracy).toBeNull();
    expect(writing.notes.join(" ")).toContain("never averaged");
  });
});

// ---------------------------------------------------------------------------
// collectFacts against the real database
// ---------------------------------------------------------------------------

describe("collectFacts (database)", () => {
  it("derives points, series and streaks from seeded verified rows", async () => {
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const email = `facts-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
    const user = await db.user.create({
      data: { email, name: "Facts Learner", passwordHash: "x:y" },
    });

    try {
      const day = (n: number) => new Date(Date.now() - n * 86_400_000);

      // 3 correct exercises (2 points each) + 1 lesson completed (20) +
      // assessment passed (15) + 2 valid vocab sentences (2 x 2).
      for (let i = 0; i < 3; i++) {
        await db.exerciseAttempt.create({
          data: {
            userId: user.id,
            exerciseId: "p1-1-1-mcq-1",
            lessonSlug: "p1-1-1",
            type: "mcq",
            difficulty: "easy",
            skill: "vocabulary",
            isCorrect: true,
            createdAt: day(0),
          },
        });
      }
      await db.lessonProgress.create({
        data: {
          userId: user.id,
          lessonSlug: "p1-1-1",
          status: "completed",
          sectionsCompleted: "[]",
          completedAt: day(0),
        },
      });
      await db.assessmentResult.create({
        data: {
          userId: user.id,
          lessonSlug: "p1-1-1",
          status: "completed",
          score: 0.9,
          passed: true,
          total: 5,
          correct: 5,
          completedAt: day(0),
        },
      });
      for (let i = 0; i < 2; i++) {
        await db.vocabSentence.create({
          data: {
            userId: user.id,
            wordId: "hello",
            sentence: "Hello there friend.",
            valid: true,
            createdAt: day(0),
          },
        });
      }

      const facts = await collectFacts(user.id);

      // 3*2 + 20 + 15 + 2*2 = 45 points
      expect(facts.pointsTotal).toBe(45);
      expect(facts.pointsToday).toBe(45);
      expect(facts.streak.current).toBe(1);
      expect(facts.dailyActivity.length).toBe(84);
      expect(facts.dailyActivity[facts.dailyActivity.length - 1].points).toBe(45);
      expect(facts.weekly.length).toBe(12);
      expect(facts.weekly[facts.weekly.length - 1].exerciseAccuracy).toBe(100);
      expect(facts.sentenceConstructions.length).toBe(2);

      // Lesson titles resolved from the curriculum registry.
      expect(facts.lessons[0].title.length).toBeGreaterThan(0);
      expect(facts.lessons[0].title).not.toBe("p1-1-1");

      // No skill mixing: events carry the right skill attribution.
      const skills = new Set(facts.events.map((e) => e.skill));
      expect(skills.has("vocabulary")).toBe(true);
      expect(skills.has(null)).toBe(true); // lesson/assessment events are cross-skill
    } finally {
      await db.user.delete({ where: { id: user.id } });
      await db.$disconnect();
    }
  });

  it("treats a fresh learner as honestly empty", async () => {
    const { PrismaClient } = await import("@prisma/client");
    const db = new PrismaClient();
    const email = `empty-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
    const user = await db.user.create({ data: { email, name: "Empty", passwordHash: "x:y" } });
    try {
      const facts = await collectFacts(user.id);
      expect(facts.pointsTotal).toBe(0);
      expect(facts.events).toEqual([]);
      expect(facts.streak.activeDays).toBe(0);
      expect(facts.lessonsCompletedCount).toBe(0);
      expect(facts.goals).toEqual({ dailyPoints: 30, weeklyPoints: 150 });
    } finally {
      await db.user.delete({ where: { id: user.id } });
      await db.$disconnect();
    }
  });
});
