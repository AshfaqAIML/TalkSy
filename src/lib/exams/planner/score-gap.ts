/**
 * Score gap analysis (PROMPT 53 §5).
 *
 * Compares, on the exam's own scale:
 *   - the learner's self-reported score (context only, labelled as such),
 *   - the measured overall estimate,
 *   - the overall target,
 *   - section-wise targets (openly derived as an even split),
 *   - recent mock results, and
 *   - the improvement trend per section and overall.
 *
 * It then ranks which skills require the most work — gap first, with a
 * small honest adjustment for direction (a declining section is more
 * urgent than a stable one at the same gap) — and says so in plain words.
 * Nothing here predicts a future score: the trend describes the past.
 */

import type { SectionKey } from "../types";
import { scaleThresholds, sectionGapStatus, formatBandValue } from "./scales";
import {
  PLANNER_SECTION_TARGET_NOTE,
  type ScoreGapDto,
  type ScoreGapRecentResultDto,
  type ScoreGapSectionDto,
  type ScoreGapWorkPriorityDto,
  type ScoreTrendDirection,
} from "./types";

const SECTION_LABELS: Record<SectionKey, string> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
};

/**
 * Direction from a newest-first score series. `grain` is the smallest step
 * the scale meaningfully reports — anything smaller is noise, not trend.
 */
export function trendFromScores(scores: number[], grain: number): ScoreTrendDirection {
  const clean = scores.filter((value) => Number.isFinite(value));
  if (clean.length < 2) return "insufficient_data";
  // With exactly two points the trend is simply newest vs previous; with
  // three or more it is the mean of the two newest against the mean of the
  // up-to-two before them.
  const recent = clean.length >= 3 ? clean.slice(0, 2) : [clean[0]];
  const earlier = clean.length >= 3 ? clean.slice(2, 4) : [clean[1]];
  const recentMean = recent.reduce((a, b) => a + b, 0) / recent.length;
  const earlierMean = earlier.reduce((a, b) => a + b, 0) / earlier.length;
  const delta = recentMean - earlierMean;
  if (delta >= grain) return "improving";
  if (delta <= -grain) return "declining";
  return "steady";
}

const TREND_NOTES: Record<ScoreTrendDirection, string> = {
  improving: "Trending up across your most recent attempts.",
  steady: "Holding steady across your most recent attempts.",
  declining: "Slipping across your most recent attempts — worth attention.",
  insufficient_data: "Not enough attempt history yet to read a trend.",
};

export type ScoreGapAttemptInput = {
  totalScore: number | null;
  timed: boolean;
  scoreDisplay: string | null;
  modeLabel: string;
  submittedAt: string | null;
  sectionScores: Array<{ section: SectionKey; score: number }>;
};

export function buildScoreGap(input: {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  targetScore: number;
  selfReported: number | null;
  estimatedOverall: number | null;
  estimates: Array<{ section: SectionKey; estimated: number }>;
  /** Recent attempts, newest first. */
  attempts: ScoreGapAttemptInput[];
  /** Sections the learner flagged as difficult at onboarding. */
  difficultSections: SectionKey[];
}): ScoreGapDto {
  const { nearTarget } = scaleThresholds(input.scoringKind);
  const grain = 0.5;
  const target = input.targetScore;

  // ---- Overall trend from timed attempt totals (newest first) ------------
  const timedTotals = input.attempts
    .filter((attempt) => attempt.timed && attempt.totalScore !== null)
    .map((attempt) => attempt.totalScore as number);
  const overallTrend = trendFromScores(timedTotals, grain);

  // ---- Per-section estimates, targets, gaps and trends -------------------
  const sections: ScoreGapSectionDto[] = input.estimates.map((entry) => {
    const series = input.attempts
      .map((attempt) => attempt.sectionScores.find((score) => score.section === entry.section)?.score)
      .filter((score): score is number => typeof score === "number" && Number.isFinite(score));
    const trend = trendFromScores(series, grain);
    const gap = Number((target - entry.estimated).toFixed(2));
    return {
      section: entry.section,
      current: entry.estimated,
      target,
      gap,
      status: sectionGapStatus(input.scoringKind, entry.estimated, target),
      trend,
      trendNote: TREND_NOTES[trend],
    };
  });

  // ---- Which skills require the most work --------------------------------
  // Gap is the primary signal; direction adjusts urgency by a fraction of
  // the near-target band, and a flagged-difficult section breaks ties.
  const directionAdjust = (trend: ScoreTrendDirection) =>
    trend === "declining" ? nearTarget * 0.5 : trend === "improving" ? -nearTarget * 0.25 : 0;
  const workScore = (section: ScoreGapSectionDto) =>
    Math.max(0, section.gap) +
    directionAdjust(section.trend) +
    (input.difficultSections.includes(section.section) ? 0.1 : 0);

  const ranked = [...sections].sort((a, b) => workScore(b) - workScore(a));
  const workPriorities: ScoreGapWorkPriorityDto[] = ranked.map((section, index) => ({
    section: section.section,
    rank: index + 1,
    gap: section.gap,
    trend: section.trend,
    reason:
      section.gap <= 0
        ? `${SECTION_LABELS[section.section]} is at or above your section target (${formatBandValue(section.current)} vs ${formatBandValue(target)}).`
        : `${formatBandValue(section.gap)} below your section target (${formatBandValue(section.current)} vs ${formatBandValue(target)})${section.trend === "declining" ? ", and recent attempts are slipping" : section.trend === "improving" ? ", though recent attempts are improving" : ""}${input.difficultSections.includes(section.section) ? " — you also flagged it as difficult" : ""}.`,
  }));

  // ---- Recent results (bookkeeping of what happened, newest first) ------
  const recentResults: ScoreGapRecentResultDto[] = input.attempts.slice(0, 6).map((attempt) => ({
    date: attempt.submittedAt,
    scoreDisplay: attempt.scoreDisplay,
    totalScore: attempt.totalScore,
    timed: attempt.timed,
    modeLabel: attempt.modeLabel,
    source: "mock attempt",
  }));

  // ---- Plain-words summary ----------------------------------------------
  const needingWork = workPriorities.filter((entry) => entry.gap > 0);
  let summary: string;
  if (input.estimatedOverall === null) {
    summary =
      "No measured overall estimate yet — take a diagnostic or a timed mock, and the gap analysis will fill in with real numbers.";
  } else if (needingWork.length === 0) {
    summary = `Every section is at or above its target share — keep the routine to protect that position.`;
  } else {
    const names = needingWork
      .slice(0, 2)
      .map((entry) => SECTION_LABELS[entry.section])
      .join(" and ");
    const extras = needingWork.length > 2 ? `, with ${SECTION_LABELS[needingWork[2].section]} close behind` : "";
    const overallGap = Number((target - input.estimatedOverall).toFixed(2));
    summary = `${names} require the most work${extras} — your measured overall (${formatBandValue(input.estimatedOverall)}) sits ${formatBandValue(Math.max(0, overallGap))} below your target of ${formatBandValue(target)}.`;
  }

  const notes = [PLANNER_SECTION_TARGET_NOTE];
  if (input.selfReported !== null) {
    notes.push(
      `You self-reported ${formatBandValue(input.selfReported)} — shown as context only; measured evidence comes from practice and mocks.`,
    );
  }
  if (overallTrend !== "insufficient_data") {
    notes.push("The trend describes your recent attempts — it does not predict your next one.");
  }

  return {
    scoringKind: input.scoringKind,
    selfReported: input.selfReported,
    current: input.estimatedOverall,
    target,
    overallGap:
      input.estimatedOverall === null
        ? null
        : Number((target - input.estimatedOverall).toFixed(2)),
    overallTrend,
    overallTrendNote: TREND_NOTES[overallTrend],
    sections,
    recentResults,
    workPriorities,
    summary,
    notes,
  };
}
