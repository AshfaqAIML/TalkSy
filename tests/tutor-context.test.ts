/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import {
  buildLearnerContext,
  deriveTutorLevel,
  isPlausibleLessonRef,
  programmePosition,
  resolveLessonRef,
  validatedPreferences,
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

  it("resolves programme lesson and chapter refs (PROMPT 38 §4)", () => {
    const programme = resolveLessonRef("programme:ch-01-l-01");
    expect(programme).not.toBeNull();
    const programmeText = programme?.lines.join("\n") ?? "";
    expect(programmeText).toContain("56-chapter programme");
    expect(programmeText).toContain("Chapter: CH-01");
    expect(programmeText).not.toContain("correctOptionId");
    expect(programmeText).not.toContain("answer key");

    const chapter = resolveLessonRef("chapter:ch-13");
    expect(chapter).not.toBeNull();
    const chapterText = chapter?.lines.join("\n") ?? "";
    expect(chapterText).toContain("Programme chapter");
    expect(chapterText).toContain("chapter test covering all the chapter's lessons");
    expect(chapter?.title).toContain("CH-13");

    expect(resolveLessonRef("programme:ch-99-l-99")).toBeNull();
    expect(resolveLessonRef("chapter:ch-99")).toBeNull();
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
    expect(isPlausibleLessonRef("programme:ch-01-l-01")).toBe(true);
    expect(isPlausibleLessonRef("chapter:ch-13")).toBe(true);
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

describe("programmePosition (pure rules — PROMPT 38 §2)", () => {
  it("returns nothing for a learner with no programme progress", () => {
    const result = programmePosition([]);
    expect(result.line).toBeNull();
    expect(result.chapterNumber).toBeNull();
  });

  it("reports the mid-chapter position with the in-progress lesson", () => {
    const result = programmePosition([
      { status: "completed", lesson: { slug: "ch-01-l-01", title: "What Is English?" } },
      { status: "completed", lesson: { slug: "ch-01-l-02", title: "Greetings" } },
      { status: "in-progress", lesson: { slug: "ch-02-l-01", title: "The 26 Letters: A to Z" } },
    ]);
    expect(result.chapterNumber).toBe(2);
    expect(result.line).toContain("Current chapter: CH-02");
    expect(result.line).toContain("0/5 lessons completed"); // CH-02 itself: nothing finished yet
    expect(result.line).toContain("The 26 Letters: A to Z");
    expect(result.nextStep).toContain("finish CH-02");
  });

  it("moves to the next chapter when the highest one is fully done", () => {
    const total = 5; // CH-01 has 5 lessons in the authored programme
    const rows = Array.from({ length: total }, (_, i) => ({
      status: "completed",
      lesson: { slug: `ch-01-l-0${i + 1}`, title: `L${i + 1}` },
    }));
    const result = programmePosition(rows);
    expect(result.line).toContain("CH-01");
    expect(result.line).toContain("completed");
    expect(result.line).toContain("next chapter is CH-02");
    expect(result.chapterNumber).toBe(2);
    expect(result.nextStep).toContain("start CH-02");
  });
});

describe("validatedPreferences (pure)", () => {
  it("keeps valid values and repairs invalid ones", () => {
    expect(
      validatedPreferences({
        replyLength: "brief",
        practiceAppetite: "more",
        correctionStyle: "note-first",
      }),
    ).toEqual({ replyLength: "brief", practiceAppetite: "more", correctionStyle: "note-first" });
    expect(
      validatedPreferences({
        replyLength: "ESSAY!!",
        practiceAppetite: "",
        correctionStyle: null as unknown as string,
      }),
    ).toEqual({ replyLength: "normal", practiceAppetite: "normal", correctionStyle: "immediate" });
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

  it("collects the PROMPT 38 memory lines: chapter, mistake patterns, vocab difficulties, chapter test, trend", async () => {
    const userId = await createUser();
    // Programme progress: two lessons of CH-01 done, one in progress in CH-02.
    const chapter1 = await db.cmsLesson.findFirst({ where: { slug: "ch-01-l-01" } });
    const chapter1b = await db.cmsLesson.findFirst({ where: { slug: "ch-01-l-02" } });
    const chapter2 = await db.cmsLesson.findFirst({ where: { slug: "ch-02-l-01" } });
    expect(chapter1).not.toBeNull();
    expect(chapter1b).not.toBeNull();
    expect(chapter2).not.toBeNull();
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: chapter1!.id, status: "completed", completedAt: new Date() },
    });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: chapter1b!.id, status: "completed", completedAt: new Date() },
    });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: chapter2!.id, status: "in-progress" },
    });
    // Repeated clinic mistakes in one category → a mistake pattern.
    for (let i = 0; i < 2; i += 1) {
      await db.grammarClinicSubmission.create({
        data: {
          userId,
          sentence: `He go to school ${i}.`,
          corrected: "He goes to school.",
          issues: "[]",
          categories: JSON.stringify(["subject-verb agreement"]),
        },
      });
    }
    // A lapsed word → vocabulary difficulty.
    await db.vocabProgress.create({
      data: { userId, wordId: "thank-you", lapses: 3, isDifficult: true },
    });
    // A passed chapter test.
    await db.practiceSession.create({
      data: {
        userId,
        mode: "chapter-test",
        status: "completed",
        config: JSON.stringify({ chapterSlug: "ch-01" }),
        seed: "qc-seed",
        questionIds: "[]",
        score: 0.86,
        total: 8,
        correct: 7,
        passed: true,
        report: JSON.stringify({
          mistakeCategories: [{ category: "articles", count: 2, hint: "a/an/the" }],
        }),
        completedAt: new Date(),
      },
    });
    // Graded attempts → the exercise-performance trend line (5/6 correct at medium).
    for (let i = 0; i < 6; i += 1) {
      await db.exerciseAttempt.create({
        data: {
          userId,
          exerciseId: `qc-ex-${i}`,
          lessonSlug: "ch-01-l-01",
          type: "mcq",
          difficulty: "medium",
          isCorrect: i < 5,
          answer: "[]",
        },
      });
    }

    const context = await buildLearnerContext(userId);
    const all = context.lines.join("\n");
    expect(all).toContain("Current chapter: CH-02");
    expect(all).toContain("Common mistake patterns: subject-verb agreement");
    expect(all).toContain("Vocabulary difficulties: thank you");
    expect(all).toContain("Recent chapter test: ch-01 — 88% (passed)");
    expect(all).toContain("Exercise performance: 83% over 6 recent attempts");
    // The practice-report mistake category (articles) joins the clinic one.
    expect(all).toContain("articles");
    // Recommended next steps quote the reasons (PROMPT 38 §6).
    expect(all).toContain("Recommended next steps");
    expect(all).toContain("finish CH-02");
    expect(all).toContain("practise at Medium level");
  });

  it("keeps the tutor's working level out of the snapshot until attempts exist", async () => {
    const userId = await createUser();
    const context = await buildLearnerContext(userId);
    expect(context.lines.join("\n")).not.toContain("suggested working level");
  });

  it("returns the learner's preferences when set (PROMPT 38 §5)", async () => {
    const userId = await createUser();
    const none = await buildLearnerContext(userId);
    expect(none.preferences).toBeNull();
    await db.tutorSettings.create({
      data: { userId, replyLength: "brief", practiceAppetite: "more", correctionStyle: "note-first" },
    });
    const set = await buildLearnerContext(userId);
    expect(set.preferences).toEqual({
      replyLength: "brief",
      practiceAppetite: "more",
      correctionStyle: "note-first",
    });
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
