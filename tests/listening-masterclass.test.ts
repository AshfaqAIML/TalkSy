/// <reference types="bun-types" />
/**
 * IELTS Listening Masterclass tests (PROMPT 44).
 *
 *   1. Audio-bank integrity: the 16 authored exercises pass validateBank
 *      (structure, solvability, rubric honesty, originality).
 *   2. Safe projection: answer keys, keywords and trap lures never reach
 *      the client payload.
 *   3. Error taxonomy: grading classifies spelling, word-limit, distractor
 *      (lure) and missed answers exactly as the performance engine expects.
 *   4. Performance engine: aggregation + mistake-driven lesson
 *      recommendations.
 *   5. Mock engine MAP_LABEL: letters grade with partial credit (shared
 *      engine, used by the timed part tests and both full simulations).
 */

import { describe, expect, it } from "bun:test";
import { LISTENING_BANK, bankExerciseBySlug, validateBank } from "@/data/exams/ielts/listening-bank";
import { module2Listening } from "@/data/exams/ielts/m2-listening";
import { toSafeExercise, gradeExercise, type BankSubmission } from "@/lib/exams/listening-bank/service";
import { buildPerformanceReport, recommend, type ListeningPerformanceReport } from "@/lib/exams/listening-bank/performance";
import { gradeObjectiveQuestion } from "@/lib/exams/mock-engine";

describe("IELTS Listening Masterclass — audio bank (PROMPT 44 Part 5; PROMPT 54 expansion)", () => {
  it("all one hundred exercises pass integrity validation", () => {
    const issues = validateBank(LISTENING_BANK);
    expect(issues).toEqual([]);
  });

  it("covers all four parts, three difficulty tiers, four accents and the nine taught task families", () => {
    // PROMPT 54 target: 100 listening practice sets (25 per part).
    expect(LISTENING_BANK.length).toBe(100);
    for (const part of [1, 2, 3, 4] as const) {
      expect(LISTENING_BANK.filter((e) => e.part === part).length).toBe(25);
    }
    const accents = new Set(LISTENING_BANK.flatMap((e) => e.accentMix));
    expect([...accents].sort()).toEqual(["australian", "british", "north-american", "nz"]);
    const difficulties = new Set(LISTENING_BANK.map((e) => e.difficulty));
    for (const d of [1, 2, 3, 4]  as const) expect(difficulties.has(d)).toBe(true);
    const types = new Set(LISTENING_BANK.flatMap((e) => e.questions.map((q) => q.type)));
    for (const t of [
      "form", "note", "table", "flowchart", "summary", "sentence",
      "mcq-single", "mcq-multi", "matching", "map", "short-answer",
    ] as const) {
      expect(types.has(t)).toBe(true);
    }
  });

  it("every question carries keywords, skills and a teaching explanation", () => {
    for (const ex of LISTENING_BANK) {
      for (const q of ex.questions) {
        expect(q.meta.keywords.length).toBeGreaterThan(0);
        expect(q.meta.skills.length).toBeGreaterThan(0);
        expect(q.meta.explanation.split(/\s+/).length).toBeGreaterThanOrEqual(20);
      }
    }
  });

  it("safe projection strips answer keys, keywords and trap lures", () => {
    for (const ex of LISTENING_BANK) {
      const safe = toSafeExercise(ex);
      const json = JSON.stringify(safe);
      expect(json).not.toContain("\"correct\"");
      expect(json).not.toContain("\"blanks\":[{");
      expect(json).not.toContain("\"keywords\"");
      expect(json).not.toContain("\"lure\"");
      expect(json).not.toContain("\"explanation\"");
      expect(json).not.toContain("\"accepted\"");
      // Playback material survives: segments are the audio.
      expect(safe.segments.length).toBe(ex.segments.length);
      expect(safe.questions.length).toBe(ex.questions.length);
    }
  });
});

describe("IELTS Listening Masterclass — error taxonomy (PROMPT 44 Part 7)", () => {
  const ex = bankExerciseBySlug("ielts-lb-p1-library");
  if (!ex) throw new Error("exemplar exercise missing");
  const form = ex.questions[0];

  const submit = (blanks: Record<string, string>): BankSubmission => ({
    mode: "exam",
    answers: { [form.id]: { format: "completion", blanks } },
    timeSpentSec: 120,
  });

  it("grades correct answers (number forms accepted)", () => {
    const graded = gradeExercise(ex, submit({ "1": "Whitfield", "2": "standard", "3": "0794622135", "4": "23 April" }));
    const q = graded.questions[0];
    expect(q.items.map((i) => i.errorType)).toEqual(["correct", "correct", "correct", "correct"]);
    expect(graded.correctItems).toBe(4);
  });

  it("classifies a misspelled answer as spelling — zero marks, honest reason", () => {
    const graded = gradeExercise(ex, submit({ "1": "Whitfeild", "2": "standard", "3": "0794622135", "4": "23 April" }));
    expect(graded.questions[0].items[0].errorType).toBe("spelling");
    expect(graded.questions[0].items[0].correct).toBe(false);
    expect(graded.errorCounts.spelling).toBe(1);
  });

  it("classifies an over-limit answer as word-limit even when the content is right", () => {
    const graded = gradeExercise(ex, submit({ "1": "Whitfield", "2": "standard", "3": "0794622135", "4": "the 23rd of April" }));
    expect(graded.questions[0].items[3].errorType).toBe("word-limit");
    expect(graded.questions[0].items[3].correct).toBe(false);
  });

  it("classifies a designed lure as distractor", () => {
    const graded = gradeExercise(ex, submit({ "1": "Whitfield", "2": "full", "3": "0794622135", "4": "23 April" }));
    expect(graded.questions[0].items[1].errorType).toBe("distractor");
  });

  it("classifies a blank answer as missed", () => {
    const graded = gradeExercise(ex, submit({ "1": "Whitfield", "2": "standard", "3": "", "4": "23 April" }));
    expect(graded.questions[0].items[2].errorType).toBe("missed");
  });

  it("mcq lure options are tagged as distractor errors", () => {
    const mcqEx = LISTENING_BANK.find((e) => e.questions.some((q) => q.type === "mcq-single" && q.meta.trap));
    expect(mcqEx).toBeTruthy();
    const mcq = mcqEx!.questions.find((q) => q.type === "mcq-single")!;
    if (mcq.type !== "mcq-single") throw new Error("not mcq");
    const lure = mcq.options.findIndex((opt) =>
      (mcq.meta.trap?.lure ?? []).some((l) => opt.toLowerCase().includes(l.toLowerCase())),
    );
    const graded = gradeExercise(mcqEx!, {
      mode: "exam",
      answers: { [mcq.id]: { format: "mcq", option: lure >= 0 ? lure : 0 } },
      timeSpentSec: 60,
    });
    const item = graded.questions.find((q) => q.questionId === mcq.id)!.items[0];
    expect(["distractor", "wrong"]).toContain(item.errorType);
  });
});

describe("IELTS Listening Masterclass — performance engine (PROMPT 44 Part 7)", () => {
  const base: ListeningPerformanceReport = {
    attempts: 6,
    itemsAnswered: 40,
    itemsCorrect: 22,
    accuracy: 0.55,
    errorCounts: { correct: 22, spelling: 6, "word-limit": 2, distractor: 5, missed: 3, wrong: 2 },
    byType: [
      { type: "form", total: 10, correct: 5, accuracy: 0.5 },
      { type: "map", total: 5, correct: 2, accuracy: 0.4 },
    ],
    byPart: [{ part: 3, total: 12, correct: 5, accuracy: 0.42 }],
    spellingMistakes: [{ exercise: "x", given: "acommodation", expected: "accommodation" }],
    distractorFamilies: { correction: 3, "similar-sound": 2 },
    missedKeywords: [{ keyword: "twenty-third", count: 2 }],
    timeSpentSec: 2400,
    avgSecPerItem: 60,
    recentAttempts: [],
    mockSections: [],
    recommendations: [],
  };

  it("aggregates attempts, responses and mock sections into one report", () => {
    const report = buildPerformanceReport(
      [
        {
          id: "a1", exerciseSlug: "ielts-lb-p1-library", part: 1, mode: "exam",
          totalQuestions: 6, correctCount: 4,
          errorCounts: JSON.stringify({ spelling: 1, distractor: 1 }),
          timeSpentSec: 300, createdAt: new Date("2026-11-14T10:00:00Z"),
        },
      ],
      [],
      [{ attemptId: "m1", title: "IELTS Listening Full Simulation 1 (40 questions)", raw: 28, max: 40, score: 7, submittedAt: new Date("2026-11-13T10:00:00Z") }],
    );
    expect(report.attempts).toBe(1);
    expect(report.itemsAnswered).toBe(6);
    expect(report.itemsCorrect).toBe(4);
    expect(report.errorCounts.spelling).toBe(1);
    expect(report.mockSections).toHaveLength(1);
    expect(report.mockSections[0].score).toBe(7);
  });

  it("recommends the spelling, distractor, correction, type and part lessons from actual mistakes", () => {
    const out = recommend(base);
    const slugs = out.map((r) => r.lessonSlug);
    expect(slugs).toContain("ielts-listening-spelling");
    expect(slugs).toContain("ielts-listening-instructions");
    expect(slugs).toContain("ielts-listening-distractors");
    expect(slugs).toContain("ielts-listening-corrections");
    expect(slugs).toContain("ielts-listening-form-completion");
    expect(slugs).toContain("ielts-listening-part3");
    // Highest severity first.
    expect(out[0].severity).toBe("high");
    // Every recommendation carries a reason grounded in a number.
    for (const r of out) expect(r.reason).toMatch(/\d/);
  });

  it("a clean profile yields no panic recommendations", () => {
    const clean: ListeningPerformanceReport = {
      ...base,
      itemsAnswered: 20,
      itemsCorrect: 18,
      accuracy: 0.9,
      errorCounts: { correct: 18, spelling: 0, "word-limit": 0, distractor: 1, missed: 0, wrong: 1 },
      byType: [{ type: "form", total: 20, correct: 18, accuracy: 0.9 }],
      byPart: [],
      distractorFamilies: {},
    };
    const out = recommend(clean);
    expect(out.every((r) => r.severity !== "high")).toBe(true);
  });

  it("every recommendation resolves to an authored masterclass lesson under its real title (no raw-slug fallback)", () => {
    const authored = new Map<string, string>();
    for (const unit of module2Listening.units) {
      for (const lesson of unit.lessons) authored.set(lesson.slug, lesson.title);
    }
    // A maximal mistake profile: every error family and all four parts weak.
    const weak = (over: Partial<ListeningPerformanceReport>): ListeningPerformanceReport => ({
      ...base,
      itemsAnswered: 60,
      itemsCorrect: 18,
      accuracy: 0.3,
      errorCounts: { correct: 18, spelling: 6, "word-limit": 4, distractor: 8, missed: 6, wrong: 18 },
      distractorFamilies: { correction: 3, "similar-sound": 2, attribution: 2 },
      ...over,
    });
    const maximal = recommend(
      weak({
        byType: [{ type: "form", total: 10, correct: 2, accuracy: 0.2 }],
        byPart: [
          { part: 1, total: 8, correct: 2, accuracy: 0.25 },
          { part: 2, total: 8, correct: 2, accuracy: 0.25 },
          { part: 3, total: 8, correct: 2, accuracy: 0.25 },
          { part: 4, total: 8, correct: 2, accuracy: 0.25 },
        ],
      }),
    );
    expect(maximal.length).toBeGreaterThanOrEqual(6);
    for (const r of maximal) {
      expect(authored.has(r.lessonSlug)).toBe(true);
      expect(authored.get(r.lessonSlug)).toBe(r.lessonTitle);
      expect(r.lessonTitle).not.toBe(r.lessonSlug);
    }
    // Every question type that appears in the audio bank must map to an
    // authored lesson with a resolved title (regression: short-answer once
    // fell back to its slug because the title map missed the entry).
    const bankTypes = [...new Set(LISTENING_BANK.flatMap((e) => e.questions.map((q) => q.type)))];
    expect(bankTypes.length).toBeGreaterThanOrEqual(11);
    for (const type of bankTypes) {
      const out = recommend(weak({ byType: [{ type, total: 6, correct: 1, accuracy: 1 / 6 }], byPart: [] }));
      const rec = out.find((r) => authored.has(r.lessonSlug) && r.reason.includes(type));
      expect(rec).toBeDefined();
      expect(authored.get(rec!.lessonSlug)).toBe(rec!.lessonTitle);
      expect(rec!.lessonTitle).not.toBe(rec!.lessonSlug);
    }
  });
});

describe("IELTS Listening Masterclass — mock engine MAP_LABEL (Part 6)", () => {
  const payload = JSON.stringify({
    plan: { title: "Test plan", caption: "", grid: [[{ room: "desk", blank: 1 }, { room: "cafe", label: "Cafe" }]] },
    options: [
      { letter: "A", text: "Front desk" },
      { letter: "B", text: "Study room" },
      { letter: "C", text: "Cafe" },
    ],
  });
  const answer = JSON.stringify({ labels: ["A", "C"] });

  it("awards full marks for all-correct letters (case-insensitive)", () => {
    const grade = gradeObjectiveQuestion("MAP_LABEL", payload, answer, JSON.stringify({ labels: ["a", "c"] }), 2);
    expect(grade.awarded).toBe(2);
    expect(grade.correct).toBe(true);
  });

  it("awards partial credit for partially correct labels", () => {
    const grade = gradeObjectiveQuestion("MAP_LABEL", payload, answer, JSON.stringify({ labels: ["A", "B"] }), 2);
    expect(grade.awarded).toBe(1);
    expect(grade.correct).toBe(false);
  });

  it("an unanswered map scores zero without crashing", () => {
    const grade = gradeObjectiveQuestion("MAP_LABEL", payload, answer, null, 2);
    expect(grade.awarded).toBe(0);
  });
});
