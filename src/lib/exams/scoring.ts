/**
 * Exam scoring engine.
 *
 * Two scoring models, kept strictly separate because the exams are not
 * interchangeable:
 *
 *  IELTS_BAND        — sections and overall on the 0–9 band scale in 0.5
 *                      steps. Overall = mean of the four sections, rounded
 *                      to the nearest half band (.25 → .5 up, .75 → next
 *                      whole band up).
 *  TOEFL_BAND_1_6    — new scale effective 21 Jan 2026: each section
 *                      1.0–6.0 in 0.5 steps, overall = mean of the four
 *                      section bands rounded to the nearest half band.
 *                      (Dual-reported as a comparable 0–120 score during
 *                      the 2026–2028 transition.)
 *
 * Raw→band conversion tables live inside each TestSpecification (they are
 * approximate practice tables — official forms vary). This module only
 * implements the arithmetic.
 */

import type { ScoringModel, SectionKey, SectionScore } from "./types";

export const IELTS_MAX_SECTION = 9;
export const TOEFL_MAX_SECTION = 6;

function roundHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

/**
 * IELTS official overall-band rule: mean of the four section bands, then
 * rounded to the nearest half band, with exact quarter ties (.25, .75)
 * rounding UP (6.125 → 6.0, 6.25 → 6.5, 6.375 → 6.5, 6.75 → 7.0).
 * Math.round(x*2)/2 implements exactly this (JS rounds halves up).
 */
export function ieltsOverallBand(sectionBands: number[]): number {
  if (sectionBands.length === 0) return 0;
  const mean = sectionBands.reduce((sum, band) => sum + band, 0) / sectionBands.length;
  return Math.min(IELTS_MAX_SECTION, Math.max(0, Math.round(mean * 2) / 2));
}

/** TOEFL 1–6 scale: overall = mean of sections, nearest half band. */
export function toeflOverallBand(sectionBands: number[]): number {
  if (sectionBands.length === 0) return 1;
  const mean = sectionBands.reduce((sum, band) => sum + band, 0) / sectionBands.length;
  return Math.min(TOEFL_MAX_SECTION, Math.max(1, roundHalf(mean)));
}

/** Overall score using the rules of the given scoring model. */
export function overallScore(model: ScoringModel, sectionScores: number[]): number {
  if (model.kind === "IELTS_BAND") return ieltsOverallBand(sectionScores);
  return toeflOverallBand(sectionScores);
}

/** Convert a raw score (0..max) to a section score using the spec table. */
export function rawToSectionScore(
  model: ScoringModel,
  section: SectionKey,
  raw: number,
  maxRaw: number,
): number {
  const clamp = (value: number) =>
    Math.min(model.maxSectionScore, Math.max(model.minSectionScore, value));
  const table = model.rawToScore[section];
  if (!table || table.length === 0) {
    // No table: linear approximation on the section scale.
    if (maxRaw <= 0) return clamp(model.minSectionScore);
    const ratio = raw / maxRaw;
    return clamp(roundHalf(model.minSectionScore + ratio * (model.maxSectionScore - model.minSectionScore)));
  }
  const sorted = [...table].sort((a, b) => b.min - a.min);

  // Practice conversion tables are built for full-length sections (40
  // IELTS items, 35 TOEFL points). Drills and sample mocks carry fewer
  // items, so when a section is shorter than the table's own scale the
  // raw is scaled proportionally first: a perfect short section must
  // convert like a perfect full section, not like 6/40. Sections at or
  // above the top threshold are treated as full length and used directly.
  const topThreshold = sorted[0].min;
  const fullMarks = topThreshold + 1;
  const scaled = maxRaw > 0 && maxRaw < topThreshold ? (raw / maxRaw) * fullMarks : raw;

  const hit = sorted.find((entry) => scaled >= entry.min);
  if (hit) return clamp(hit.band);
  return clamp(model.minSectionScore);
}

/**
 * Comparable legacy TOEFL 0–120 score for a 1–6 band (transition-period
 * dual reporting; approximate mapping derived from ETS concordance).
 */
export function toeflBandToLegacy120(band: number): number {
  // Section band → section 0–30 → summed over 4 sections.
  const section30 = Math.round((band / TOEFL_MAX_SECTION) * 30);
  return section30 * 4;
}

/** Human-facing score formatting per exam family. */
export function formatScore(
  model: ScoringModel,
  sectionOrOverall: number,
  opts: { section?: SectionKey } = {},
): string {
  const value = Number.isInteger(sectionOrOverall)
    ? sectionOrOverall.toFixed(1)
    : sectionOrOverall.toFixed(1);
  if (model.kind === "IELTS_BAND") {
    return `Band ${value}`;
  }
  const legacy = toeflBandToLegacy120(sectionOrOverall);
  const where = opts.section ? "section" : "overall";
  return `Band ${value} (${where}, ≈${legacy}/120 legacy)`;
}

export function formatSectionScore(model: ScoringModel, section: SectionKey, score: number): string {
  if (model.kind === "IELTS_BAND") return score.toFixed(1);
  return `${score.toFixed(1)} / 6`;
}

/** Aggregate section scores into an attempt-level summary. */
export function summarizeScores(
  model: ScoringModel,
  sections: Array<{ section: SectionKey; raw: number; max: number }>,
): { sectionScores: SectionScore[]; totalScore: number; scoreDisplay: string } {
  const sectionScores: SectionScore[] = sections.map((entry) => ({
    section: entry.section,
    raw: entry.raw,
    max: entry.max,
    score: rawToSectionScore(model, entry.section, entry.raw, entry.max),
  }));
  const totalScore = overallScore(model, sectionScores.map((s) => s.score));
  const scoreDisplay =
    model.kind === "IELTS_BAND"
      ? `Band ${totalScore.toFixed(1)}`
      : `Band ${totalScore.toFixed(1)} (≈${toeflBandToLegacy120(totalScore)}/120 legacy)`;
  return { sectionScores, totalScore, scoreDisplay };
}

// ---------------------------------------------------------------------------
// CEFR bridges (used by diagnostics to seed estimates before any mock)
// ---------------------------------------------------------------------------

export const CEFR_TO_IELTS: Record<string, number> = {
  A1: 3.0,
  A2: 3.5,
  B1: 4.5,
  B2: 5.5,
  C1: 6.5,
  C2: 7.5,
};

/** TOEFL band 5 = C1 per ETS alignment; linear interpolation otherwise. */
export const CEFR_TO_TOEFL: Record<string, number> = {
  A1: 1.0,
  A2: 1.5,
  B1: 2.5,
  B2: 3.5,
  C1: 5.0,
  C2: 6.0,
};

export function cefrToSectionBaseline(kind: ScoringModel["kind"], cefr: string): number {
  const table = kind === "IELTS_BAND" ? CEFR_TO_IELTS : CEFR_TO_TOEFL;
  const value = table[cefr] ?? (kind === "IELTS_BAND" ? 4.0 : 2.0);
  return roundHalf(value);
}
