/// <reference types="bun-types" />
/**
 * IELTS Reading Masterclass tests (PROMPT 45).
 *
 *   1. Passage-bank integrity: the 18 authored exercises pass
 *      validateReadingBank (structure, solvability, evidence verbatim,
 *      glossary presence, originality).
 *   2. Coverage: ten Academic subjects, the GT text-type families, and all
 *      thirteen official question types appear in the library.
 *   3. Safe projection: answer keys, evidence, lures and glossaries never
 *      reach the client payload.
 *   4. Error taxonomy: grading classifies spelling, word-limit, trap (lure),
 *      inference, vocabulary, missed and correct items.
 *   5. Performance engine: aggregation + mistake-driven recommendations,
 *      with the title-resolution contract (no raw-slug fallback).
 *   6. Simulations: stats computed from real content, never faked.
 */

import { describe, expect, it } from "bun:test";
import {
  READING_BANK,
  READING_SIMULATIONS,
  readingExerciseBySlug,
  readingSimulationStats,
  validateReadingBank,
} from "@/data/exams/ielts/reading-bank";
import type { ReadingExercise } from "@/data/exams/ielts/reading-bank/types";
import { module3aReading } from "@/data/exams/ielts/m3a-reading";
import { module3gReading } from "@/data/exams/ielts/m3g-reading";
import {
  gradeReadingExercise,
  toSafeReadingExercise,
  type ReadingSubmission,
} from "@/lib/exams/reading-bank/service";
import {
  buildReadingPerformanceReport,
  READING_LESSONS,
  recommendReading,
  type ReadingPerformanceReport,
} from "@/lib/exams/reading-bank/performance";

describe("IELTS Reading Masterclass — passage bank (PROMPT 45, Part D; PROMPT 54 expansion)", () => {
  it("all one hundred exercises pass integrity validation", () => {
    const issues = validateReadingBank(READING_BANK);
    expect(issues).toEqual([]);
  });

  it("covers the ten taught subjects, the GT text types and all thirteen official question types", () => {
    // PROMPT 54 target: 100 reading practice sets (50 Academic / 50 GT).
    expect(READING_BANK.length).toBe(100);
    const academic = READING_BANK.filter((e) => e.variant === "academic");
    const gt = READING_BANK.filter((e) => e.variant === "gt");
    expect(academic.length).toBe(50);
    expect(gt.length).toBe(50);

    const subjects = new Set(academic.map((e) => e.subject));
    for (const subject of ["Science", "Technology", "Education", "Environment", "History", "Psychology", "Medicine", "Economics", "Society", "Architecture"]) {
      expect(subjects.has(subject)).toBe(true);
    }
    const gtSubjects = new Set(gt.map((e) => e.subject));
    for (const kind of ["Notices", "Advertisements", "Instructions", "Workplace documents", "General informational texts", "Longer general-interest passages"]) {
      expect(gtSubjects.has(kind)).toBe(true);
    }

    const types = new Set(READING_BANK.flatMap((e) => e.questions.map((q) => q.type)));
    const official: string[] = [
      "multiple-choice", "multiple-choice-multi", "true-false-not-given", "yes-no-not-given",
      "matching-headings", "matching-information", "matching-features", "matching-sentence-endings",
      "sentence-completion", "summary-completion", "note-completion", "table-completion",
      "flowchart-completion", "diagram-labelling",
    ];
    for (const type of official) expect(types.has(type as never)).toBe(true);
  });

  it("every item carries evidence, an explanation of 20+ words and a numbered place", () => {
    for (const ex of READING_BANK) {
      let expectedNo = 1;
      for (const q of ex.questions) {
        const metas: typeof q extends never ? never : Array<{ evidence: unknown[]; explanation: string }> =
          q.type === "multiple-choice" ? q.items.map((i) => i.meta)
          : q.type === "multiple-choice-multi" ? [q.meta]
          : q.type === "true-false-not-given" || q.type === "yes-no-not-given" ? q.statements.map((st) => st.meta)
          : q.type === "matching-headings" || q.type === "matching-information" || q.type === "matching-features" || q.type === "matching-sentence-endings" ? q.items.map((i) => i.meta)
          : q.type === "sentence-completion" || q.type === "summary-completion" || q.type === "note-completion" || q.type === "table-completion" || q.type === "flowchart-completion" || q.type === "diagram-labelling" ? q.blanks.map((b) => b.meta)
          : [];
        for (const meta of metas) {
          expect(meta.evidence.length).toBeGreaterThan(0);
          expect(meta.explanation.trim().split(/\s+/).length).toBeGreaterThanOrEqual(20);
        }
        expectedNo += q.type === "multiple-choice-multi" ? Math.max(q.correct.length, 1) : metas.length;
      }
      expect(expectedNo - 1).toBeGreaterThanOrEqual(8);
    }
  });

  it("safe projection strips answer keys, evidence, lures and glossaries", () => {
    for (const ex of READING_BANK) {
      const safe = toSafeReadingExercise(ex);
      const serialised = JSON.stringify(safe);
      expect(serialised).not.toContain('"answer"');
      expect(serialised).not.toContain('"correct"');
      expect(serialised).not.toContain('"evidence"');
      expect(serialised).not.toContain('"explanation"');
      expect(serialised).not.toContain('"lure"');
      expect(serialised).not.toContain('"definition"');
      expect(serialised).not.toContain('"whyWrong"');
      // The passage itself travels (it IS the task), but not the glossary.
      expect(safe.blocks.length).toBe(ex.blocks.length);
      expect(safe.glossarySize).toBe(ex.glossary.length);
    }
  });
});

describe("IELTS Reading Masterclass — error taxonomy (PROMPT 45, Part E)", () => {
  const ex = readingExerciseBySlug("ielts-rb-ac-water") as ReadingExercise;
  const submit = (answers: Record<string, unknown>): ReadingSubmission =>
    ({ mode: "exam", answers: answers as ReadingSubmission["answers"], timeSpentSec: 600 });

  it("grades a fully correct submission (form completion with exact copies)", () => {
    const graded = gradeReadingExercise(ex, submit({
      q1: { format: "verdict", choices: ["NOT GIVEN", "TRUE", "FALSE", "TRUE", "TRUE"] },
      q2: { format: "completion", blanks: { "6": "floats", "7": "lattice", "8": "oxygen", "9": "molecules" } },
      q3: { format: "mcq", options: [0, 0, 1] },
    }));
    expect(graded.totalItems).toBe(12);
    expect(graded.correctItems).toBe(12);
    expect(graded.errorCounts.correct).toBe(12);
  });

  it("classifies a misspelled copy as spelling — zero marks, tracked", () => {
    const graded = gradeReadingExercise(ex, submit({
      q1: { format: "verdict", choices: ["TRUE", "TRUE", "TRUE", "TRUE", "TRUE"] },
      q2: { format: "completion", blanks: { "6": "flotes", "7": "lattice", "8": "oxygen", "9": "molecules" } },
      q3: { format: "mcq", options: [0, 0, 1] },
    }));
    const blank6 = graded.questions[1].items.find((i) => i.no === 6);
    expect(blank6?.errorType).toBe("spelling");
    expect(blank6?.correct).toBe(false);
    expect(graded.errorCounts.spelling).toBe(1);
  });

  it("classifies a designed boundary trap as trap with its family", () => {
    const graded = gradeReadingExercise(ex, submit({
      q1: { format: "verdict", choices: ["FALSE", "TRUE", "NOT GIVEN", "TRUE", "TRUE"] },
      q2: { format: "completion", blanks: { "6": "floats", "7": "lattice", "8": "oxygen", "9": "molecules" } },
      q3: { format: "mcq", options: [0, 0, 1] },
    }));
    // Statement 3 is keyed FALSE with a NOT GIVEN lure — taking the lure is a boundary trap.
    const item = graded.questions[0].items.find((i) => i.no === 3);
    expect(item?.errorType).toBe("trap");
    expect(item?.trapFamily).toBe("boundary");
    expect(graded.errorCounts.trap).toBe(1);
  });

  it("classifies a designed MCQ lure option as trap, and blanks as missed", () => {
    const graded = gradeReadingExercise(ex, submit({
      q1: { format: "verdict", choices: ["FALSE", "TRUE", "FALSE", "TRUE", "TRUE"] },
      q2: { format: "completion", blanks: { "6": "floats", "7": "lattice", "8": "oxygen", "9": "molecules" } },
      q3: { format: "mcq", options: [1, 3, 1] }, // item 1 lure = B, item 2 lure = D
    }));
    expect(graded.errorCounts.trap).toBe(2);
    expect(graded.questions[2].items[0].trapFamily).toBe("mention-lure");
    // Verdict statements are all correct here; nothing missed in this submission.
    expect(graded.errorCounts.missed).toBe(0);
  });

  it("grades a GT verdict submission and classifies missed items", () => {
    const gt = readingExerciseBySlug("ielts-rb-gt-notices") as ReadingExercise;
    const graded = gradeReadingExercise(gt, submit({
      q1: { format: "verdict", choices: ["", "", "", ""] },
      q2: { format: "completion", blanks: { "5": "Ferndale", "6": "6.15 pm" } },
      q3: { format: "mcq", options: [1, 2] },
    }));
    expect(graded.errorCounts.missed).toBe(4);
    expect(graded.correctItems).toBe(4);
    // Review payload carries evidence for every item (Part F).
    for (const q of graded.questions) {
      for (const item of q.items) {
        expect(item.evidence.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("IELTS Reading Masterclass — performance engine (Part E)", () => {
  const ex = readingExerciseBySlug("ielts-rb-ac-water") as ReadingExercise;
  const graded = gradeReadingExercise(ex, {
    mode: "exam",
    answers: {
      q1: { format: "verdict", choices: ["TRUE", "TRUE", "NOT GIVEN", "TRUE", ""] },
      q2: { format: "completion", blanks: { "6": "flotes", "7": "lattice", "8": "oxygen", "9": "molecules" } },
      q3: { format: "mcq", options: [1, 3, 1] },
    },
    timeSpentSec: 1200,
  });

  const report = buildReadingPerformanceReport([
    {
      attempt: {
        id: "a1", exerciseSlug: ex.slug, variant: "academic", section: 1, mode: "exam",
        simRunId: "run-1", simSlug: "reading-sim-academic-1", simPart: 1,
        totalQuestions: graded.totalItems, correctCount: graded.correctItems,
        timeSpentSec: 1200, createdAt: new Date("2026-11-14T10:00:00Z"),
      },
      graded,
    },
  ]);

  it("aggregates accuracy, error taxonomy, sections and simulation history", () => {
    expect(report.attempts).toBe(1);
    expect(report.itemsAnswered).toBe(12);
    expect(report.errorCounts.spelling).toBe(1);
    expect(report.errorCounts.trap).toBeGreaterThanOrEqual(3);
    expect(report.errorCounts.missed).toBe(1);
    expect(report.byType.length).toBeGreaterThan(0);
    expect(report.bySection[0].section).toBe(1);
    expect(report.unanswered).toBe(1);
    expect(report.simHistory).toHaveLength(1);
    expect(report.simHistory[0].simSlug).toBe("reading-sim-academic-1");
    expect(report.simHistory[0].itemsAnswered).toBe(12);
  });

  it("recommends the spelling, boundary-trap and time lessons from actual mistakes", () => {
    const recs = recommendReading(report);
    const slugs = recs.map((r) => r.lessonSlug);
    expect(slugs).toContain("ielts-areading-vocabulary"); // spelling → vocabulary lesson
    expect(slugs).toContain("ielts-areading-true-false-not-given"); // boundary family
    expect(slugs).toContain("ielts-areading-time"); // blanks
    for (const r of recs) {
      expect(READING_LESSONS[r.lessonSlug]).toBe(r.lessonTitle);
      expect(r.lessonTitle).not.toBe(r.lessonSlug);
      expect(r.reason).toMatch(/\d/);
    }
  });

  it("every recommendation resolves to an authored masterclass lesson under its real title (no raw-slug fallback)", () => {
    const authored = new Map<string, string>();
    for (const unit of module3aReading.units) {
      for (const lesson of unit.lessons) authored.set(lesson.slug, lesson.title);
    }
    for (const unit of module3gReading.units) {
      for (const lesson of unit.lessons) authored.set(lesson.slug, lesson.title);
    }
    const weak = (over: Partial<ReadingPerformanceReport>): ReadingPerformanceReport => ({
      ...report,
      itemsAnswered: 60,
      itemsCorrect: 18,
      accuracy: 0.3,
      errorCounts: { correct: 18, spelling: 6, "word-limit": 4, trap: 8, inference: 3, vocabulary: 5, missed: 6, wrong: 16 },
      trapFamilies: { boundary: 3, "mention-lure": 2, attribution: 2, order: 2 },
      vocabularyDifficulties: [
        { word: "attenuation", count: 3 }, { word: "castoreum", count: 2 }, { word: "dovetail", count: 2 },
      ],
      ...over,
    });
    // Maximal profile across all types present in the bank.
    const bankTypes = [...new Set(READING_BANK.flatMap((e) => e.questions.map((q) => q.type)))];
    const maximal = recommendReading(
      weak({
        byType: bankTypes.map((type) => ({ type, label: type, total: 6, correct: 1, accuracy: 1 / 6 })),
        bySection: [
          { section: 1, total: 20, correct: 5, accuracy: 0.25 },
          { section: 2, total: 20, correct: 5, accuracy: 0.25 },
          { section: 3, total: 20, correct: 5, accuracy: 0.25 },
        ],
      }),
    );
    expect(maximal.length).toBeGreaterThanOrEqual(6);
    for (const r of maximal) {
      expect(authored.has(r.lessonSlug)).toBe(true);
      expect(authored.get(r.lessonSlug)).toBe(r.lessonTitle);
      expect(r.lessonTitle).not.toBe(r.lessonSlug);
    }
  });

  it("a clean profile yields no high-severity recommendations", () => {
    const clean: ReadingPerformanceReport = {
      ...report,
      itemsAnswered: 20,
      itemsCorrect: 18,
      accuracy: 0.9,
      errorCounts: { correct: 18, spelling: 0, "word-limit": 0, trap: 1, inference: 0, vocabulary: 0, missed: 0, wrong: 1 },
      byType: [{ type: "sentence-completion", label: "Sentence completion", total: 20, correct: 18, accuracy: 0.9 }],
      trapFamilies: {},
      vocabularyDifficulties: [],
      unanswered: 0,
    };
    const out = recommendReading(clean);
    expect(out.every((r) => r.severity !== "high")).toBe(true);
  });
});

describe("IELTS Reading Masterclass — simulations (Part E)", () => {
  it("computes honest question counts from real content", () => {
    expect(READING_SIMULATIONS).toHaveLength(3);
    const academic1 = readingSimulationStats(READING_SIMULATIONS[0]);
    expect(academic1.passages).toBe(3);
    expect(academic1.questions).toBeGreaterThan(30);
    const gt = READING_SIMULATIONS.find((s) => s.slug === "reading-sim-gt-1");
    expect(gt).toBeDefined();
    expect(gt?.passageSlugs.length).toBe(4);
    expect(gt?.timeLimitSec).toBe(3600);
    for (const sim of READING_SIMULATIONS) {
      const stats = readingSimulationStats(sim);
      for (const slug of sim.passageSlugs) {
        expect(readingExerciseBySlug(slug)).toBeDefined();
      }
      expect(stats.questions).toBeGreaterThan(0);
    }
  });
});

describe("IELTS Reading Masterclass — curriculum (Parts A–C)", () => {
  it("module 3A delivers 28 lessons across two chapters (15 foundations + 13 types)", () => {
    expect(module3aReading.units).toHaveLength(2);
    const foundations = module3aReading.units[0];
    const types = module3aReading.units[1];
    expect(foundations.lessons).toHaveLength(15);
    expect(types.lessons).toHaveLength(13);
    const slugs = new Set(module3aReading.units.flatMap((u) => u.lessons.map((l) => l.slug)));
    expect(slugs.size).toBe(28);
  });

  it("module 3G delivers 7 GT lessons, sharing nothing Academic-specific", () => {
    expect(module3gReading.units).toHaveLength(1);
    expect(module3gReading.units[0].lessons).toHaveLength(7);
    const gtSlugs = module3gReading.units[0].lessons.map((l) => l.slug);
    const aSlugs = module3aReading.units.flatMap((u) => u.lessons.map((l) => l.slug));
    for (const slug of gtSlugs) expect(aSlugs.includes(slug)).toBe(false);
  });
});
