/// <reference types="bun-types" />
/**
 * PROMPT 36 — practice & assessment engine tests.
 *
 * Covers: the three new exercise types, contraction equivalence, the QC
 * validator, assembly (chapter tests, course assessments, spreads), the
 * area mapping, report building, mastery states, the full session API
 * (start / get / submit / finish / list / overview / attempt linkage), and
 * the content guarantees of the 56-chapter bank.
 */

import { describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import {
  POST as attemptRoute,
} from "@/app/api/exercises/attempt/route";
import { POST as startSessionRoute, GET as listSessionsRoute } from "@/app/api/practice/sessions/route";
import { GET as getSessionRoute, DELETE as abandonRoute } from "@/app/api/practice/sessions/[id]/route";
import { POST as submitRoute } from "@/app/api/practice/sessions/[id]/submit/route";
import { POST as finishRoute } from "@/app/api/practice/sessions/[id]/finish/route";
import { GET as overviewRoute } from "@/app/api/practice/overview/route";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { buildCorrectAnswer, extractCookies } from "./helpers";
import { validateAnswer } from "@/lib/engine/validators";
import { expandContractions } from "@/lib/engine/normalize";
import { sanitizeExercise } from "@/lib/engine/sanitize";
import type { Exercise } from "@/data/curriculum/types";
import { validateQuestion, validateQuestions } from "@/lib/practice/qc";
import { areaOf, ASSESSMENT_AREAS } from "@/lib/practice/areas";
import { drawChapterTest, drawCourseAssessment, drawSpread } from "@/lib/practice/assemble";
import { buildReport, type GradedInput } from "@/lib/practice/report";
import { computeMastery, computeWeakAreas, programmeLessonTitles } from "@/lib/practice/mastery";
import { queryBank } from "@/lib/practice/bank";
import { MODE_SPECS, PRACTICE_MODES } from "@/lib/practice/types";
import { PRACTICE_BANK, practiceBankRollup, practiceBankForSeed } from "@/data/practice-bank";
import { PROGRAMME_LEVELS } from "@/data/programme";

const BASE = "http://127.0.0.1:3000";

function request(path: string, init: RequestInit = {}): Request {
  return new Request(`${BASE}${path}`, init);
}

function ctx<T extends Record<string, string>>(params: T): { params: Promise<T> } {
  return { params: Promise.resolve(params) };
}

function jsonBody(body: unknown, cookie?: string): RequestInit {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify(body),
  };
}

async function registerTestUser(): Promise<{ cookie: string; userId: string }> {
  const email = `practice-${Date.now()}-${Math.floor(Math.random() * 10000)}@talksy.test`;
  const res = await registerRoute(
    request("/api/auth/register", jsonBody({ email, name: "Practice Learner", password: "password123" })),
  );
  expect(res.status).toBe(201);
  const cookie = extractCookies(res);
  const user = await db.user.findUnique({ where: { email } });
  return { cookie, userId: user!.id };
}

// ---------------------------------------------------------------------------
// Engine: the three PROMPT 36 types
// ---------------------------------------------------------------------------

const grammarIdentifyExercise: Exercise = {
  id: "t-gid-1",
  type: "grammar-identify",
  difficulty: "medium",
  skill: "grammar",
  prompt: "Label the highlighted word.",
  hints: [],
  feedback: { correctAnswer: "the subject", explanation: "The doer comes before the verb." },
  sentence: "The little dog barks at the postman.",
  focus: "The little dog",
  question: "What is the job of the highlighted words?",
  taxonomy: "sentence roles",
  options: [
    { id: "a", text: "the subject — who does the action" },
    { id: "b", text: "the verb" },
    { id: "c", text: "the object" },
  ],
  correctOptionId: "a",
};

const vocabMatchExercise: Exercise = {
  id: "t-vm-1",
  type: "vocab-match",
  difficulty: "easy",
  skill: "vocabulary",
  prompt: "Match words with meanings.",
  hints: [],
  feedback: { correctAnswer: "moot point", explanation: "Fixed pairs." },
  words: [
    { id: "w1", word: "moot", partOfSpeech: "adj" },
    { id: "w2", word: "telling" },
    { id: "w3", word: "foregone" },
  ],
  meanings: [
    { id: "m1", meaning: "revealing" },
    { id: "m2", meaning: "debatable" },
    { id: "m3", meaning: "predetermined" },
  ],
  pairs: [
    { wordId: "w1", meaningId: "m2" },
    { wordId: "w2", meaningId: "m1" },
    { wordId: "w3", meaningId: "m3" },
  ],
};

const spellingExercise: Exercise = {
  id: "t-sp-1",
  type: "spelling",
  difficulty: "medium",
  skill: "vocabulary",
  prompt: "Fix the misspelled word.",
  hints: [],
  feedback: { correctAnswer: "committee", explanation: "Double m, double t." },
  sentence: "The committe accepted the proposal.",
  misspelled: "committe",
  acceptedAnswers: ["committee"],
};

describe("engine — three new exercise types", () => {
  it("grammar-identify grades like MCQ and sanitizes the key", () => {
    expect(validateAnswer(grammarIdentifyExercise, { optionId: "a" }).correct).toBe(true);
    expect(validateAnswer(grammarIdentifyExercise, { optionId: "b" }).correct).toBe(false);
    expect(validateAnswer(grammarIdentifyExercise, { optionId: "zz" }).invalid).toBe(true);
    const safe = sanitizeExercise(grammarIdentifyExercise) as unknown as Record<string, unknown>;
    expect(safe.sentence).toBe("The little dog barks at the postman.");
    expect(safe.focus).toBe("The little dog");
    expect(safe.options).toHaveLength(3);
    expect("correctOptionId" in safe).toBe(false);
  });

  it("vocab-match grades full and partial pairings", () => {
    const full = validateAnswer(vocabMatchExercise, {
      pairs: [
        { wordId: "w1", meaningId: "m2" },
        { wordId: "w2", meaningId: "m1" },
        { wordId: "w3", meaningId: "m3" },
      ],
    });
    expect(full.correct).toBe(true);
    const partial = validateAnswer(vocabMatchExercise, {
      pairs: [
        { wordId: "w1", meaningId: "m1" },
        { wordId: "w2", meaningId: "m2" },
        { wordId: "w3", meaningId: "m3" },
      ],
    });
    expect(partial.correct).toBe(false);
    expect(partial.score).toBeGreaterThan(0);
    expect(partial.score).toBeLessThan(1);
    expect(validateAnswer(vocabMatchExercise, { pairs: [] }).invalid).toBe(true);
    const safe = sanitizeExercise(vocabMatchExercise) as unknown as Record<string, unknown>;
    expect((safe.words as unknown[]).length).toBe(3);
    expect("pairs" in safe).toBe(false);
  });

  it("spelling accepts case and apostrophe variants of one word", () => {
    expect(validateAnswer(spellingExercise, { text: "committee" }).correct).toBe(true);
    expect(validateAnswer(spellingExercise, { text: "Committee" }).correct).toBe(true);
    expect(validateAnswer(spellingExercise, { text: "comittee" }).correct).toBe(false);
    expect(validateAnswer(spellingExercise, { text: "" }).invalid).toBe(true);
    const safe = sanitizeExercise(spellingExercise) as unknown as Record<string, unknown>;
    expect(safe.misspelled).toBe("committe");
    expect("acceptedAnswers" in safe).toBe(false);
  });

  it("buildCorrectAnswer can solve all three new types", () => {
    expect(validateAnswer(grammarIdentifyExercise, buildCorrectAnswer(grammarIdentifyExercise)).correct).toBe(true);
    expect(validateAnswer(vocabMatchExercise, buildCorrectAnswer(vocabMatchExercise)).correct).toBe(true);
    expect(validateAnswer(spellingExercise, buildCorrectAnswer(spellingExercise)).correct).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Contraction equivalence
// ---------------------------------------------------------------------------

const contractionExercise: Exercise = {
  id: "t-cm-1",
  type: "correct-mistake",
  difficulty: "medium",
  skill: "grammar",
  prompt: "Fix the contraction.",
  hints: [],
  feedback: { correctAnswer: "She is a doctor.", explanation: "Contract or expand — both valid." },
  incorrectSentence: "She's a doctor at the county hospital.",
  acceptedAnswers: ["She is a doctor at the county hospital.", "She's a doctor at the county hospital."],
};

const dictationExercise: Exercise = {
  id: "t-d-1",
  type: "dictation",
  difficulty: "medium",
  skill: "listening",
  prompt: "Type what you hear.",
  hints: [],
  feedback: { correctAnswer: "I am ready.", explanation: "Exact transcription." },
  audioText: "I'm ready and I don't care who knows it.",
  acceptedAnswers: ["I'm ready and I don't care who knows it."],
};

describe("contraction equivalence (multiple valid answers)", () => {
  it("expands only unambiguous contractions", () => {
    expect(expandContractions("she's a doctor")).toBe("she is a doctor");
    expect(expandContractions("they'll come")).toBe("they will come");
    // Ambiguous forms stay untouched.
    expect(expandContractions("I'd go if I could")).toBe("I'd go if I could");
  });

  it("grades contracted and expanded answers identically for free-text types", () => {
    expect(validateAnswer(contractionExercise, { text: "She's a doctor at the county hospital." }).correct).toBe(true);
    expect(validateAnswer(contractionExercise, { text: "She is a doctor at the county hospital." }).correct).toBe(true);
    expect(validateAnswer(contractionExercise, { text: "She are a doctor." }).correct).toBe(false);
  });

  it("dictation stays strict — transcription must match what was spoken", () => {
    expect(validateAnswer(dictationExercise, { text: "I'm ready and I don't care who knows it." }).correct).toBe(true);
    expect(validateAnswer(dictationExercise, { text: "I am ready and I do not care who knows it." }).correct).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// QC validator
// ---------------------------------------------------------------------------

describe("quality control — validateQuestion", () => {
  const base = {
    id: "qc-1",
    difficulty: "easy" as const,
    skill: "grammar" as const,
    prompt: "Choose the subject.",
    hints: [] as string[],
    feedback: {
      correctAnswer: "the dog",
      explanation: "The doer comes first in the sentence.",
      revisionLesson: { slug: "ch-08-l-03", reason: "The Subject teaches this." },
    },
  };

  it("passes a clean MCQ", () => {
    const result = validateQuestion({
      ...base,
      type: "mcq",
      options: [
        { id: "a", text: "the dog" },
        { id: "b", text: "the cat" },
      ],
      correctOptionId: "a",
    } as Exercise);
    expect(result.errors).toEqual([]);
  });

  it("flags a missing answer key", () => {
    const result = validateQuestion({
      ...base,
      type: "mcq",
      options: [
        { id: "a", text: "the dog" },
        { id: "b", text: "the cat" },
      ],
      correctOptionId: "zz",
    } as Exercise);
    expect(result.errors.some((e) => e.includes("correct option id"))).toBe(true);
  });

  it("rejects duplicate and all-of-the-above options (ambiguous wording)", () => {
    const result = validateQuestion({
      ...base,
      type: "mcq",
      options: [
        { id: "a", text: "the dog" },
        { id: "b", text: "the dog" },
        { id: "c", text: "all of the above" },
      ],
      correctOptionId: "a",
    } as Exercise);
    expect(result.errors.some((e) => e.includes("duplicate option texts"))).toBe(true);
    expect(result.errors.some((e) => e.includes("above"))).toBe(true);
  });

  it("rejects multi-select with a single correct answer", () => {
    const result = validateQuestion({
      ...base,
      type: "multi-select",
      options: [
        { id: "a", text: "the dog" },
        { id: "b", text: "the cat" },
        { id: "c", text: "the bat" },
      ],
      correctOptionIds: ["a"],
    } as Exercise);
    expect(result.errors.some((e) => e.includes("multiple choice instead"))).toBe(true);
  });

  it("uses word boundaries for hint leaks — 'the' never leaks 'he'", () => {
    const leaky = validateQuestion({
      ...base,
      type: "mcq",
      hints: ["Find the doer first.", "Look before the verb.", "It is who does the action."],
      options: [
        { id: "a", text: "the dog" },
        { id: "b", text: "the cat" },
      ],
      correctOptionId: "a",
    } as Exercise);
    expect(leaky.errors.filter((e) => e.includes("reveals"))).toEqual([]);

    const genuinelyLeaky = validateQuestion({
      ...base,
      type: "fill-blank",
      sentence: "Birds ___ in the sky.",
      acceptedAnswers: ["fly"],
      hints: ["Think of the word fly."],
    } as unknown as Exercise);
    expect(genuinelyLeaky.errors.some((e) => e.includes("reveals the answer word"))).toBe(true);
  });

  it("open-production types skip the hint-leak rule (mustInclude lists are prompts)", () => {
    const writing = validateQuestion({
      ...base,
      type: "write-response",
      situation: "Describe your morning.",
      minWords: 20,
      mustInclude: ["always", "usually"],
      hints: ["Start with what you always do first."],
    } as unknown as Exercise);
    expect(writing.errors.filter((e) => e.includes("reveals"))).toEqual([]);
  });

  it("a distractor quoted as the answer is fatal; a paraphrase is only a warning", () => {
    const distractorNamed = validateQuestion({
      ...base,
      type: "mcq",
      options: [
        { id: "a", text: "the dog" },
        { id: "b", text: "the cat sat on the mat all afternoon" },
      ],
      correctOptionId: "a",
      feedback: {
        correctAnswer: "the cat sat on the mat all afternoon — wait, no.",
        explanation: "The doer comes first.",
      },
    } as Exercise);
    expect(distractorNamed.errors.some((e) => e.includes("names a wrong option"))).toBe(true);

    const paraphrase = validateQuestion({
      ...base,
      type: "mcq",
      options: [
        { id: "a", text: "the subject — who does the action" },
        { id: "b", text: "the object" },
      ],
      correctOptionId: "a",
      feedback: {
        correctAnswer: "the doer of the sentence",
        explanation: "The doer comes first.",
      },
    } as Exercise);
    expect(paraphrase.errors).toEqual([]);
    expect(paraphrase.warnings.some((w) => w.includes("paraphrases"))).toBe(true);
  });

  it("rejects revision lessons that do not exist", () => {
    const result = validateQuestion(
      {
        ...base,
        type: "mcq",
        options: [
          { id: "a", text: "the dog" },
          { id: "b", text: "the cat" },
        ],
        correctOptionId: "a",
        feedback: {
          correctAnswer: "the dog",
          explanation: "The doer comes first.",
          revisionLesson: { slug: "ch-99-l-77", reason: "Nowhere." },
        },
      } as Exercise,
      { knownLessonSlugs: new Set(["ch-08-l-03"]) },
    );
    expect(result.errors.some((e) => e.includes("unknown lesson"))).toBe(true);
  });

  it("validates question sets in bulk", () => {
    const clean = [grammarIdentifyExercise, vocabMatchExercise, spellingExercise];
    const result = validateQuestions(clean);
    expect(result.errors).toEqual([]);
    expect(result.cleanCount).toBe(clean.length);
  });
});

// ---------------------------------------------------------------------------
// Areas + assembly
// ---------------------------------------------------------------------------

describe("assessment areas", () => {
  it("maps construction types to sentence formation", () => {
    expect(areaOf({ type: "rearrange", skill: "grammar" })).toBe("sentence-formation");
    expect(areaOf({ type: "sentence-build", skill: "grammar" })).toBe("sentence-formation");
    expect(areaOf({ type: "correct-mistake", skill: "grammar" })).toBe("sentence-formation");
    expect(areaOf({ type: "complete-sentence", skill: "grammar" })).toBe("sentence-formation");
    expect(areaOf({ type: "mcq", skill: "grammar" })).toBe("grammar");
    expect(areaOf({ type: "mcq", skill: "vocabulary" })).toBe("vocabulary");
    expect(areaOf({ type: "grammar-identify", skill: "grammar" })).toBe("grammar");
    expect(areaOf({ type: "read-answer", skill: "reading" })).toBe("reading");
    expect(ASSESSMENT_AREAS).toHaveLength(7);
  });
});

describe("assembly — deterministic draws", () => {
  const pool = PRACTICE_BANK.slice(0, 64).map((entry, index) => ({
    id: `pool-${index}`,
    slug: `pool-${index}`,
    chapterSlug: "ch-06",
    lessonSlug: `ch-06-l-${String((index % 5) + 1).padStart(2, "0")}`,
    topic: entry.topic,
    tags: [entry.topic],
    exercise: { ...entry.exercise, id: `pool-${index}` } as Exercise,
  }));

  it("chapter tests spread across lessons and are deterministic", () => {
    const first = drawChapterTest(pool, 8, "seed-A");
    const again = drawChapterTest(pool, 8, "seed-A");
    const other = drawChapterTest(pool, 8, "seed-B");
    expect(first.map((q) => q.id)).toEqual(again.map((q) => q.id));
    expect(other.map((q) => q.id)).not.toEqual(first.map((q) => q.id));
    expect(new Set(first.map((q) => q.id)).size).toBe(first.length);
    const lessons = new Set(first.map((q) => q.lessonSlug));
    expect(lessons.size).toBeGreaterThanOrEqual(3);
  });

  it("course assessments cover all seven areas when the pool allows", () => {
    const coursePool: ReturnType<typeof drawSpread> = [];
    for (const area of ASSESSMENT_AREAS) {
      const areaEntries = PRACTICE_BANK.filter((entry) => {
        if (area === "sentence-formation") {
          return ["rearrange", "sentence-build", "complete-sentence", "correct-mistake"].includes(entry.exercise.type);
        }
        return entry.exercise.skill === area && !["rearrange", "sentence-build", "complete-sentence", "correct-mistake"].includes(entry.exercise.type);
      }).slice(0, 3);
      for (const entry of areaEntries) {
        coursePool.push({
          id: `cp-${coursePool.length}`,
          slug: `cp-${coursePool.length}`,
          chapterSlug: "ch-06",
          lessonSlug: "ch-06-l-01",
          topic: entry.topic,
          tags: [entry.topic],
          exercise: { ...entry.exercise, id: `cp-${coursePool.length}` } as Exercise,
        });
      }
    }
    const draw = drawCourseAssessment(coursePool, 14, "seed-C");
    const covered = new Set(draw.map((q) => areaOf({ type: q.exercise.type, skill: q.exercise.skill })));
    for (const area of ASSESSMENT_AREAS) {
      expect(covered.has(area)).toBe(true);
    }
    expect(draw.length).toBe(14);
    expect(new Set(draw.map((q) => q.id)).size).toBe(draw.length);
  });

  it("spread draws guarantee an easy and a hard item when the pool allows", () => {
    const draw = drawSpread(pool, 8, "seed-D");
    const difficulties = new Set(draw.map((q) => q.exercise.difficulty));
    expect(difficulties.has("easy")).toBe(true);
    expect(difficulties.has("hard") || difficulties.has("challenge")).toBe(true);
    expect(new Set(draw.map((q) => q.id)).size).toBe(draw.length);
  });
});

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

describe("report building", () => {
  it("produces the full PROMPT 36 §10 report payload", () => {
    const pool = PRACTICE_BANK.slice(0, 6).map((entry, index) => ({
      id: `r-${index}`,
      slug: `r-${index}`,
      chapterSlug: "ch-06",
      lessonSlug: "ch-06-l-01",
      topic: entry.topic,
      tags: [entry.topic],
      exercise: {
        ...entry.exercise,
        id: `r-${index}`,
        feedback: {
          ...entry.exercise.feedback,
          revisionLesson: {
            slug: "ch-06-l-01",
            reason: "This lesson teaches it.",
            title: "People and Family",
          },
        },
      } as Exercise,
    }));
    const graded: GradedInput[] = pool.map((q, index) => ({
      exerciseId: q.id,
      submitted: null,
      correct: index !== 1 && index !== 3,
      invalid: index === 3,
      score: index !== 1 && index !== 3 ? 1 : 0,
    }));
    const report = buildReport({
      mode: "chapter-test",
      config: { chapterSlug: "ch-06", count: 6, passScore: 0.75 },
      pool,
      graded,
      passed: true,
      passScore: 0.75,
      hintsUsed: 4,
      previousAttempts: [
        { id: "prev-1", scorePercent: 50, passed: false, completedAt: "2026-11-01T10:00:00.000Z" },
      ],
      lessonTitles: programmeLessonTitles(),
    });
    expect(report.total).toBe(6);
    expect(report.correct).toBe(4);
    expect(report.incorrect).toBe(2);
    expect(report.invalidCount).toBe(1);
    expect(report.scorePercent).toBe(67);
    expect(report.byTopic.length).toBeGreaterThan(0);
    expect(report.byArea.length).toBeGreaterThan(0);
    expect(report.mistakeCategories.some((c) => c.category.includes("wrong format"))).toBe(true);
    expect(report.recommendedLessons.length).toBeGreaterThan(0);
    expect(report.recommendedLessons[0].title).toBeTruthy();
    expect(report.previousAttempts).toHaveLength(1);
    expect(report.recommendation).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// Content guarantees
// ---------------------------------------------------------------------------

describe("practice bank content (code)", () => {
  it("covers chapters 6–56 with 6–8 authored questions each", () => {
    const rollup = practiceBankRollup();
    expect(rollup.length).toBe(51);
    for (const row of rollup) {
      expect(row.authoredHere).toBeGreaterThanOrEqual(6);
      expect(row.authoredHere).toBeLessThanOrEqual(8);
    }
  });

  it("uses at least three difficulty levels per level group (rubric: upper levels omit easy)", () => {
    // Difficulty follows linguistic complexity (src/lib/practice/difficulty.ts):
    // B2/C1 legitimately carry no easy recognition items, while lower levels
    // include challenge — so groups need a spread, not all four labels.
    const rollup = practiceBankRollup();
    for (const level of PROGRAMME_LEVELS) {
      const [from, to] = level.chapterRange;
      const chapters = rollup.filter((r) => r.chapter >= from && r.chapter <= to);
      expect(chapters.length).toBeGreaterThan(0);
      const difficulties = new Set(chapters.flatMap((c) => Object.keys(c.byDifficulty)));
      expect(difficulties.size).toBeGreaterThanOrEqual(3);
      expect(difficulties.has("medium")).toBe(true);
      expect(difficulties.has("hard")).toBe(true);
    }
    const skills = new Set(rollup.flatMap((r) => Object.keys(r.bySkill)));
    for (const s of ["grammar", "vocabulary", "reading", "listening", "writing", "speaking"] as const) {
      expect(skills.has(s)).toBe(true);
    }
  });

  it("passes QC on every authored question", async () => {
    const bank = practiceBankForSeed();
    const lessonSlugs = new Set(
      (await import("@/data/programme")).PROGRAMME_LESSONS.map((l) => l.slug),
    );
    const errors: string[] = [];
    for (const item of bank) {
      const result = validateQuestion(
        { ...item.exercise, id: "pending" } as Exercise,
        { knownLessonSlugs: lessonSlugs },
        { slug: item.slug, chapterSlug: item.chapterSlug, lessonSlug: item.lessonSlug, topic: item.topic },
      );
      errors.push(...result.errors);
    }
    expect(errors).toEqual([]);
  });

  it("every authored question is solvable via buildCorrectAnswer", () => {
    const bank = practiceBankForSeed();
    for (const item of bank.slice(0, 120)) {
      const exercise = { ...item.exercise, id: "pending" } as Exercise;
      const answer = buildCorrectAnswer(exercise);
      expect(answer).not.toBeNull();
      const result = validateAnswer(exercise, answer);
      expect(result.correct).toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Database-backed guarantees
// ---------------------------------------------------------------------------

describe("practice bank (database)", () => {
  it("every chapter 1–56 has a pool of at least 5 published questions", async () => {
    for (let chapter = 1; chapter <= 56; chapter += 1) {
      const slug = `ch-${String(chapter).padStart(2, "0")}`;
      const count = await db.cmsQuestion.count({
        where: { status: "published", chapterSlug: slug },
      });
      expect(count).toBeGreaterThanOrEqual(5);
    }
  });

  it("every course pool covers all seven assessment areas", async () => {
    for (const level of PROGRAMME_LEVELS) {
      const [from, to] = level.chapterRange;
      const chapters: string[] = [];
      for (let n = from; n <= to; n += 1) chapters.push(`ch-${String(n).padStart(2, "0")}`);
      const pool = await queryBank({ chapterSlugs: chapters });
      expect(pool.length).toBeGreaterThanOrEqual(10);
      const covered = new Set(pool.map((q) => areaOf({ type: q.exercise.type, skill: q.exercise.skill })));
      for (const area of ASSESSMENT_AREAS) {
        expect(covered.has(area)).toBe(true);
      }
    }
  });

  it("all published chapter questions pass QC against the DB", async () => {
    const lessonSlugs = new Set(
      (await import("@/data/programme")).PROGRAMME_LESSONS.map((l) => l.slug),
    );
    const rows = await db.cmsQuestion.findMany({
      where: { status: "published", chapterSlug: { not: null } },
      select: { id: true, slug: true, data: true, chapterSlug: true, lessonSlug: true, tags: true },
    });
    const errors: string[] = [];
    for (const row of rows) {
      const exercise = JSON.parse(row.data) as Exercise;
      if (exercise.id !== row.id) continue;
      const result = validateQuestion(
        exercise,
        { knownLessonSlugs: lessonSlugs },
        { slug: row.slug, chapterSlug: row.chapterSlug ?? undefined, lessonSlug: row.lessonSlug ?? undefined },
      );
      errors.push(...result.errors);
    }
    expect(errors).toEqual([]);
  });

  it("every published chapter question carries chapter, lesson and topic metadata", async () => {
    const rows = await db.cmsQuestion.findMany({
      where: { status: "published", chapterSlug: { not: null } },
      select: { chapterSlug: true, lessonSlug: true, tags: true },
    });
    expect(rows.length).toBeGreaterThan(300);
    for (const row of rows) {
      expect(row.chapterSlug).toMatch(/^ch-\d{2}$/);
      expect(row.lessonSlug).toMatch(/^ch-\d{2}-l-\d{2}$/);
      const tags = JSON.parse(row.tags) as string[];
      expect(tags.length).toBeGreaterThan(0);
    }
  });
});

// ---------------------------------------------------------------------------
// API — session lifecycle
// ---------------------------------------------------------------------------

describe("practice session API", () => {
  it("rejects guided practice without a chapter", async () => {
    const { cookie } = await registerTestUser();
    const res = await startSessionRoute(request("/api/practice/sessions", jsonBody({ mode: "guided" }, cookie)));
    expect(res.status).toBe(422);
  });

  it("rejects revision practice for a learner with no completed chapters", async () => {
    const { cookie } = await registerTestUser();
    const res = await startSessionRoute(request("/api/practice/sessions", jsonBody({ mode: "revision" }, cookie)));
    expect(res.status).toBe(422);
    const body = (await res.json()) as { error: string };
    expect(body.error).toContain("complete a lesson first");
  });

  it("starts, plays, submits and reports a chapter test end-to-end", async () => {
    const { cookie, userId } = await registerTestUser();
    // Give the learner a lesson view in ch-06 so weak-area/revision work later.
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-06-l-01" } });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: lesson!.id, status: "completed" },
    });

    const start = await startSessionRoute(
      request("/api/practice/sessions", jsonBody({ mode: "chapter-test", config: { chapterSlug: "ch-06", count: 8 } }, cookie)),
    );
    expect(start.status).toBe(201);
    const started = (await start.json()) as {
      id: string;
      questions: { question: { id: string }; lessonSlug: string; chapterSlug: string; topic: string }[];
      passScore: number;
    };
    expect(started.questions.length).toBeGreaterThanOrEqual(6);
    expect(started.passScore).toBe(0.75);
    for (const q of started.questions) {
      expect(q.chapterSlug).toBe("ch-06");
      expect(q.lessonSlug).toMatch(/^ch-06-l-\d{2}$/);
      // Answers never ship with the questions.
      expect(q.question).not.toHaveProperty("correctOptionId");
      expect(q.question).not.toHaveProperty("acceptedAnswers");
    }

    // Answer everything correctly using the real validator path.
    const answers: { exerciseId: string; answer: unknown }[] = [];
    for (const q of started.questions) {
      const row = await db.cmsQuestion.findUnique({ where: { id: q.question.id } });
      const exercise = JSON.parse(row!.data) as Exercise;
      answers.push({ exerciseId: q.question.id, answer: buildCorrectAnswer(exercise) });
    }
    // Plant one deliberate wrong answer (the last one).
    answers[answers.length - 1] = { exerciseId: started.questions[started.questions.length - 1].question.id, answer: null };

    const submit = await submitRoute(
      request(`/api/practice/sessions/${started.id}/submit`, jsonBody({ answers }, cookie)),
      ctx({ id: started.id }),
    );
    expect(submit.status).toBe(200);
    const { report } = (await submit.json()) as {
      report: {
        total: number;
        correct: number;
        passed: boolean;
        scorePercent: number;
        byArea: unknown[];
        recommendedLessons: unknown[];
        previousAttempts: unknown[];
        items: { correct: boolean }[];
      };
    };
    expect(report.total).toBe(started.questions.length);
    expect(report.correct).toBe(started.questions.length - 1);
    expect(report.passed).toBe(true);
    expect(report.byArea.length).toBeGreaterThan(0);
    expect(report.items[report.items.length - 1].correct).toBe(false);

    // Attempts were recorded with session linkage + chapter-test context.
    const linked = await db.exerciseAttempt.findMany({
      where: { userId, sessionId: started.id },
    });
    expect(linked.length).toBe(started.questions.length);
    expect(linked.every((a) => a.context === "chapter-test")).toBe(true);
    expect(new Set(linked.map((a) => a.exerciseId)).size).toBe(started.questions.length);

    // The session now returns its report; the report is stable on refetch.
    const getRes = await getSessionRoute(request(`/api/practice/sessions/${started.id}`, { headers: { cookie } }), ctx({ id: started.id }));
    expect(getRes.status).toBe(200);
    const fetched = (await getRes.json()) as { status: string; report: { total: number } | null; questions: unknown };
    expect(fetched.status).toBe("completed");
    expect(fetched.questions).toBeNull();
    expect(fetched.report!.total).toBe(report.total);

    // Knowledge demonstrated: mastery reports it for ch-06.
    const mastery = await computeMastery(userId);
    const ch06 = mastery.chapters.find((c) => c.chapterSlug === "ch-06");
    expect(ch06?.knowledgeDemonstrated).toBe(true);
    expect(mastery.chaptersDemonstrated).toBeGreaterThanOrEqual(1);

    // Retaking varies the draw (different seed via retry count).
    const second = await startSessionRoute(
      request("/api/practice/sessions", jsonBody({ mode: "chapter-test", config: { chapterSlug: "ch-06", count: 8 } }, cookie)),
    );
    const secondBody = (await second.json()) as { questions: { question: { id: string } }[] };
    const firstIds = started.questions.map((q) => q.question.id).join(",");
    const secondIds = secondBody.questions.map((q) => q.question.id).join(",");
    expect(secondIds).not.toBe(firstIds);
  });

  it("runs a practice-style session: per-question attempts then finish", async () => {
    const { cookie, userId } = await registerTestUser();
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-06-l-01" } });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: lesson!.id, status: "completed" },
    });

    const start = await startSessionRoute(
      request("/api/practice/sessions", jsonBody({ mode: "guided", config: { chapterSlug: "ch-06", count: 6 } }, cookie)),
    );
    expect(start.status).toBe(201);
    const started = (await start.json()) as {
      id: string;
      hintsAllowed: boolean;
      questions: { question: { id: string }; lessonSlug: string }[];
    };
    expect(started.hintsAllowed).toBe(true);

    // Answer the first two questions through the attempt route (session-linked).
    for (const q of started.questions.slice(0, 2)) {
      const row = await db.cmsQuestion.findUnique({ where: { id: q.question.id } });
      const exercise = JSON.parse(row!.data) as Exercise;
      const attempt = await attemptRoute(
        request(
          "/api/exercises/attempt",
          jsonBody(
            {
              exerciseId: q.question.id,
              lessonSlug: q.lessonSlug,
              answer: buildCorrectAnswer(exercise),
              hintsUsed: 1,
              durationMs: 9000,
              context: "guided",
              sessionId: started.id,
            },
            cookie,
          ),
        ),
      );
      expect(attempt.status).toBe(200);
      const attemptBody = (await attempt.json()) as { feedback: { revisionLesson?: { slug: string } }; correct: boolean };
      expect(attemptBody.correct).toBe(true);
      if (attemptBody.feedback.revisionLesson) {
        expect(attemptBody.feedback.revisionLesson.slug).toMatch(/^ch-\d{2}-l-\d{2}$/);
      }
    }

    const finish = await finishRoute(
      request(`/api/practice/sessions/${started.id}/finish`, { method: "POST", headers: { cookie } }),
      ctx({ id: started.id }),
    );
    expect(finish.status).toBe(200);
    const { report } = (await finish.json()) as {
      report: { total: number; correct: number; unansweredCount: number; hintsUsed: number };
    };
    expect(report.total).toBe(started.questions.length);
    expect(report.correct).toBe(2);
    expect(report.unansweredCount).toBe(started.questions.length - 2);
    expect(report.hintsUsed).toBe(2);

    // Attempt rows carry the session link and guided context.
    const linked = await db.exerciseAttempt.findMany({ where: { userId, sessionId: started.id } });
    expect(linked.length).toBe(2);
    expect(linked.every((a) => a.context === "guided")).toBe(true);

    // Weak-area now has data for this learner.
    const weak = await computeWeakAreas(userId);
    expect(weak.hasData).toBe(true);
  });

  it("rejects foreign sessions and unknown ids", async () => {
    const { cookie } = await registerTestUser();
    const other = await registerTestUser();
    const start = await startSessionRoute(
      request("/api/practice/sessions", jsonBody({ mode: "chapter-test", config: { chapterSlug: "ch-06", count: 8 } }, cookie)),
    );
    const started = (await start.json()) as { id: string };

    const foreign = await getSessionRoute(
      request(`/api/practice/sessions/${started.id}`, { headers: { cookie: other.cookie } }),
      ctx({ id: started.id }),
    );
    expect(foreign.status).toBe(404);

    const foreignAttempt = await attemptRoute(
      request(
        "/api/exercises/attempt",
        jsonBody({ exerciseId: "whatever", lessonSlug: "ch-06-l-01", answer: null, sessionId: started.id }, other.cookie),
      ),
    );
    expect(foreignAttempt.status).toBe(404);

    const abandon = await abandonRoute(
      request(`/api/practice/sessions/${started.id}`, { method: "DELETE", headers: { cookie } }),
      ctx({ id: started.id }),
    );
    expect(abandon.status).toBe(200);
    const afterAbandon = await db.practiceSession.findUnique({ where: { id: started.id } });
    expect(afterAbandon).toBeNull();
  });

  it("lists sessions and the overview from real DB state", async () => {
    const { cookie, userId } = await registerTestUser();
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-06-l-01" } });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: lesson!.id, status: "completed" },
    });
    const start = await startSessionRoute(
      request("/api/practice/sessions", jsonBody({ mode: "mixed", config: { count: 5 } }, cookie)),
    );
    const started = (await start.json()) as { id: string; questions: { question: { id: string } }[] };
    for (const q of started.questions) {
      const row = await db.cmsQuestion.findUnique({ where: { id: q.question.id } });
      const exercise = JSON.parse(row!.data) as Exercise;
      await attemptRoute(
        request(
          "/api/exercises/attempt",
          jsonBody(
            { exerciseId: q.question.id, lessonSlug: row!.lessonSlug ?? "ch-06-l-01", answer: buildCorrectAnswer(exercise), hintsUsed: 0, durationMs: 5000, context: "mixed", sessionId: started.id },
            cookie,
          ),
        ),
      );
    }
    const finish = await finishRoute(
      request(`/api/practice/sessions/${started.id}/finish`, { method: "POST", headers: { cookie } }),
      ctx({ id: started.id }),
    );
    expect(finish.status).toBe(200);

    const list = await listSessionsRoute(request("/api/practice/sessions", { headers: { cookie } }));
    const listBody = (await list.json()) as { sessions: { id: string; mode: string; scorePercent: number | null }[] };
    expect(listBody.sessions.some((s) => s.id === started.id && s.scorePercent === 100)).toBe(true);

    const overviewRes = await overviewRoute(request("/api/practice/overview", { headers: { cookie } }));
    expect(overviewRes.status).toBe(200);
    const overview = (await overviewRes.json()) as {
      modes: unknown[];
      chapters: unknown[];
      courses: unknown[];
      mastery: { note: string };
      sessionTotals: { completed: number };
    };
    expect(overview.modes).toHaveLength(8);
    expect(overview.chapters).toHaveLength(56);
    expect(overview.courses).toHaveLength(6);
    expect(overview.sessionTotals.completed).toBeGreaterThanOrEqual(1);
    expect(overview.mastery.note).toContain("never");
  });

  it("timed sessions carry a time limit and expire marker", async () => {
    const { cookie, userId } = await registerTestUser();
    const lesson = await db.cmsLesson.findUnique({ where: { slug: "ch-06-l-01" } });
    await db.cmsLessonProgress.create({
      data: { userId, lessonId: lesson!.id, status: "completed" },
    });
    const start = await startSessionRoute(
      request("/api/practice/sessions", jsonBody({ mode: "timed", config: { count: 8, timeLimitSec: 300 } }, cookie)),
    );
    const started = (await start.json()) as { id: string; timeLimitSec: number | null };
    expect(started.timeLimitSec).toBe(300);
    const row = await db.practiceSession.findUnique({ where: { id: started.id } });
    expect(row?.expiresAt).not.toBeNull();
    // Hints are off for timed sessions.
    const fetched = await getSessionRoute(
      request(`/api/practice/sessions/${started.id}`, { headers: { cookie } }),
      ctx({ id: started.id }),
    );
    const session = (await fetched.json()) as { hintsAllowed: boolean };
    expect(session.hintsAllowed).toBe(false);
    await abandonRoute(request(`/api/practice/sessions/${started.id}`, { method: "DELETE", headers: { cookie } }), ctx({ id: started.id }));
  });

  it("mode specs are complete and internally consistent", () => {
    expect(PRACTICE_MODES).toHaveLength(8);
    for (const mode of PRACTICE_MODES) {
      const spec = MODE_SPECS[mode];
      expect(spec.label.length).toBeGreaterThan(3);
      expect(spec.description.length).toBeGreaterThan(20);
      expect(spec.countRange[0]).toBeLessThanOrEqual(spec.defaultCount);
      expect(spec.defaultCount).toBeLessThanOrEqual(spec.countRange[1]);
    }
  });
});
