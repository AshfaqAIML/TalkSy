/// <reference types="bun-types" />
/**
 * International Exam Preparation Academy — scoring, recommendation bridge
 * and spec-store tests. Runs against db/test.db via `bun run test`.
 */

import { describe, expect, it } from "bun:test";
import {
  cefrToSectionBaseline,
  ieltsOverallBand,
  rawToSectionScore,
  toeflOverallBand,
  toeflBandToLegacy120,
  summarizeScores,
} from "@/lib/exams/scoring";
import { buildRecommendations, weaknessTagsFromAttempt } from "@/lib/exams/recommend";
import { gradeObjectiveQuestion } from "@/lib/exams/mock-engine";
import type { ScoringModel, SpecDto } from "@/lib/exams/types";

const IELTS_MODEL: ScoringModel = {
  kind: "IELTS_BAND",
  unit: "band",
  rawToScore: {
    listening: [
      { min: 39, band: 9 }, { min: 35, band: 8 }, { min: 30, band: 7 },
      { min: 23, band: 6 }, { min: 16, band: 5 }, { min: 0, band: 3 },
    ],
    reading: [
      { min: 39, band: 9 }, { min: 33, band: 8 }, { min: 27, band: 7 },
      { min: 19, band: 6 }, { min: 13, band: 5 }, { min: 0, band: 3 },
    ],
  },
  overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
  minSectionScore: 0,
  maxSectionScore: 9,
  validityMonths: 24,
};

const TOEFL_MODEL: ScoringModel = {
  kind: "TOEFL_BAND_1_6",
  unit: "band",
  rawToScore: {
    reading: [
      { min: 33, band: 6 }, { min: 26, band: 5 }, { min: 19, band: 4 },
      { min: 12, band: 3 }, { min: 5, band: 2 }, { min: 0, band: 1 },
    ],
  },
  overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
  minSectionScore: 1,
  maxSectionScore: 6,
  validityMonths: 24,
  transitionNote: "dual-reported with legacy 0–120 until 2028",
};

describe("IELTS band arithmetic", () => {
  it("averages four sections and rounds to the nearest half band", () => {
    expect(ieltsOverallBand([7, 7, 7, 7])).toBe(7);
    // 6.125 -> 6.0; 6.25 -> 6.5 (quarter rounds up); 6.75 -> 7.0
    expect(ieltsOverallBand([6, 6, 6, 6.5])).toBe(6);
    expect(ieltsOverallBand([6, 6, 6, 7])).toBe(6.5);
    expect(ieltsOverallBand([6.5, 6.5, 6.5, 7.5])).toBe(7);
  });

  it("maps raw scores through the practice conversion table", () => {
    expect(rawToSectionScore(IELTS_MODEL, "listening", 40, 40)).toBe(9);
    expect(rawToSectionScore(IELTS_MODEL, "listening", 30, 40)).toBe(7);
    expect(rawToSectionScore(IELTS_MODEL, "listening", 5, 40)).toBe(3);
  });

  it("produces a Band-formatted overall score", () => {
    const { totalScore, scoreDisplay, sectionScores } = summarizeScores(IELTS_MODEL, [
      { section: "listening", raw: 32, max: 40 },
      { section: "reading", raw: 28, max: 40 },
      { section: "writing", raw: 0, max: 0 },
      { section: "speaking", raw: 0, max: 0 },
    ]);
    expect(sectionScores[0].score).toBeGreaterThanOrEqual(6.5);
    expect(totalScore).toBeLessThanOrEqual(9);
    expect(scoreDisplay).toMatch(/^Band \d\.\d$/);
  });

  it("bridges CEFR levels to indicative bands", () => {
    expect(cefrToSectionBaseline("IELTS_BAND", "B2")).toBe(5.5);
    expect(cefrToSectionBaseline("IELTS_BAND", "C1")).toBe(6.5);
    expect(cefrToSectionBaseline("IELTS_BAND", "UNKNOWN")).toBe(4);
  });
});

describe("TOEFL 1–6 band arithmetic (2026 format)", () => {
  it("averages sections on the 1–6 scale, half steps", () => {
    expect(toeflOverallBand([5, 5, 5, 5])).toBe(5);
    expect(toeflOverallBand([4, 4, 5, 5])).toBe(4.5);
    expect(toeflOverallBand([6, 6, 6, 2])).toBe(5);
  });

  it("clamps to the 1–6 bounds", () => {
    expect(toeflOverallBand([1, 1, 1, 1])).toBe(1);
    expect(toeflOverallBand([6, 6, 6, 6])).toBe(6);
  });

  it("dual-reports a comparable legacy 0–120 score", () => {
    expect(toeflBandToLegacy120(6)).toBe(120);
    expect(toeflBandToLegacy120(5)).toBe(100);
    expect(toeflBandToLegacy120(3)).toBe(60);
  });

  it("maps raw points through the practice conversion", () => {
    expect(rawToSectionScore(TOEFL_MODEL, "reading", 34, 35)).toBe(6);
    expect(rawToSectionScore(TOEFL_MODEL, "reading", 20, 35)).toBe(4);
    expect(rawToSectionScore(TOEFL_MODEL, "reading", 0, 35)).toBe(1);
  });
});

describe("objective grading", () => {
  const mcqPayload = JSON.stringify({ options: ["a", "b", "c"] });
  const tfngPayload = JSON.stringify({ statement: "s", labels: ["True", "False", "Not Given"] });
  const fillPayload = JSON.stringify({
    context: "Name: ___ Age: ___",
    blanks: [
      { answer: "Nowak", alternatives: ["nowak"], numbers: false },
      { answer: "nine", alternatives: ["9"], numbers: true },
    ],
  });

  it("marks single-answer MCQ exactly", () => {
    expect(gradeObjectiveQuestion("MCQ_SINGLE", mcqPayload, JSON.stringify({ option: 1 }), JSON.stringify({ option: 1 }), 1))
      .toEqual({ awarded: 1, correct: true });
    expect(gradeObjectiveQuestion("MCQ_SINGLE", mcqPayload, JSON.stringify({ option: 1 }), JSON.stringify({ option: 2 }), 1))
      .toEqual({ awarded: 0, correct: false });
  });

  it("marks multi-answer MCQ with set equality", () => {
    expect(gradeObjectiveQuestion("MCQ_MULTI", mcqPayload, JSON.stringify({ options: [0, 2] }), JSON.stringify({ options: [2, 0] }), 2))
      .toEqual({ awarded: 2, correct: true });
    expect(gradeObjectiveQuestion("MCQ_MULTI", mcqPayload, JSON.stringify({ options: [0, 2] }), JSON.stringify({ options: [0] }), 2))
      .toEqual({ awarded: 0, correct: false });
  });

  it("marks TFNG by index", () => {
    expect(gradeObjectiveQuestion("TFNG", tfngPayload, JSON.stringify({ value: 2 }), JSON.stringify({ value: 2 }), 1).correct)
      .toBe(true);
  });

  it("marks fill-blanks case-insensitively with number-word tolerance and partial credit", () => {
    const key = JSON.stringify({
      blanks: [
        { answer: "Nowak", alternatives: ["nowak"], numbers: false },
        { answer: "nine", alternatives: ["9"], numbers: true },
      ],
    });
    const response = JSON.stringify({ blanks: ["NOWAK", "nine"] });
    expect(gradeObjectiveQuestion("FILL_BLANK", fillPayload, key, response, 2))
      .toEqual({ awarded: 2, correct: true });
    const half = JSON.stringify({ blanks: ["wrong", "9"] });
    expect(gradeObjectiveQuestion("FILL_BLANK", fillPayload, key, half, 2))
      .toEqual({ awarded: 1, correct: false });
  });

  it("marks sentence reconstruction with punctuation/spacing tolerance", () => {
    const payload = JSON.stringify({ scrambled: ["b", "a"], cue: "" });
    const answer = JSON.stringify({ answer: "The findings suggest that sleep is essential." });
    expect(gradeObjectiveQuestion("SENTENCE_RECONSTRUCTION", payload, answer, JSON.stringify({ text: "the findings suggest that sleep is essential" }), 2).correct)
      .toBe(true);
  });

  it("awards nothing without a response", () => {
    expect(gradeObjectiveQuestion("MCQ_SINGLE", mcqPayload, JSON.stringify({ option: 0 }), null, 1))
      .toEqual({ awarded: 0, correct: false });
  });
});

describe("recommendation bridge (common English foundation)", () => {
  const spec = {
    examKey: "IELTS",
    variant: "ACADEMIC",
    name: "IELTS Academic",
    version: 1,
    status: "active",
    effectiveDate: "2024-01-01T00:00:00.000Z",
    lastReviewedAt: "2026-11-12T00:00:00.000Z",
    sections: [],
    scoringModel: IELTS_MODEL,
    taskTypes: [],
    sourceRefs: [],
    notes: null,
  } as unknown as SpecDto;

  it("recommends curriculum lessons for weak sections with matching tags", () => {
    const recommendations = buildRecommendations({
      spec,
      estimates: [
        { section: "writing", estimated: 5, confidence: 0.3 },
        { section: "reading", estimated: 7, confidence: 0.3 },
      ],
      weaknessTags: { writing: ["grammar", "sentence"] },
      difficultSections: [],
    });
    expect(recommendations.length).toBeGreaterThan(0);
    expect(recommendations.some((r) => r.href === "#/grammar/tenses")).toBe(true);
    expect(recommendations.some((r) => r.href === "#/lab")).toBe(true);
  });

  it("prioritises the weakest and learner-flagged sections", () => {
    const recommendations = buildRecommendations({
      spec,
      estimates: [
        { section: "listening", estimated: 6.5, confidence: 0.3 },
        { section: "speaking", estimated: 5, confidence: 0.3 },
      ],
      weaknessTags: {},
      difficultSections: ["speaking"],
    });
    expect(recommendations[0].section).toBe("speaking");
    expect(recommendations.some((r) => r.href.startsWith("#/speaking") || r.href === "#/tutor")).toBe(true);
  });

  it("always includes one exam-technique drill from the academy itself", () => {
    const recommendations = buildRecommendations({
      spec,
      estimates: [{ section: "reading", estimated: 8, confidence: 0.9 }],
      weaknessTags: {},
      difficultSections: [],
    });
    expect(recommendations.some((r) => r.source === "Exam Academy")).toBe(true);
  });

  it("extracts weakness tags from mock question results", () => {
    const tags = weaknessTagsFromAttempt([
      { section: "reading", correct: false, skillGaps: ["paraphrase", "detail"] },
      { section: "reading", correct: true, skillGaps: ["paraphrase"] },
      { section: "writing", correct: null, skillGaps: ["coherence"] },
    ]);
    expect(tags.reading).toEqual(["paraphrase", "detail"]);
    expect(tags.writing).toEqual(["coherence"]);
  });
});
