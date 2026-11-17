/**
 * Exam-scale helpers for the planner: gap thresholds on each exam's own
 * scale, honest band formatting and the four readiness labels.
 *
 * Thresholds are deliberately conservative — a readiness label must never
 * flatter the learner. IELTS sections run 0–9 in half bands; TOEFL 2026
 * sections run 1–6 (dual-reported as ≈/120 legacy until 2028), so "near
 * target" means different absolute distances on the two scales.
 */

import type { ScoringModel } from "../types";
import type { ReadinessLabel } from "./types";

export type ScaleThresholds = {
  /** Within this distance of the target counts as "near target". */
  nearTarget: number;
  /** A gap at least this large means foundational work is needed first. */
  bigGap: number;
  /** All recent timed attempts must be within this of the target for the
   *  "consistently performing near target" label. */
  consistent: number;
  /** Smallest step the scale meaningfully reports. */
  grain: number;
};

export function scaleThresholds(kind: ScoringModel["kind"]): ScaleThresholds {
  switch (kind) {
    case "TOEFL_BAND_1_6":
      return { nearTarget: 0.5, bigGap: 1.0, consistent: 0.25, grain: 0.5 };
    case "IELTS_BAND":
    default:
      return { nearTarget: 0.5, bigGap: 1.5, consistent: 0.25, grain: 0.5 };
  }
}

export function formatBandValue(value: number): string {
  return value.toFixed(1);
}

/** Section-level readiness status from an estimate against the target. */
export function sectionGapStatus(
  kind: ScoringModel["kind"],
  estimated: number,
  target: number,
): "at_target" | "within_reach" | "needs_focused_work" {
  const { nearTarget } = scaleThresholds(kind);
  if (estimated >= target) return "at_target";
  if (estimated >= target - nearTarget) return "within_reach";
  return "needs_focused_work";
}

/**
 * The honest readiness label. Evidence hierarchy:
 *   1. Two or more recent timed exam-mode attempts, all near target →
 *      CONSISTENTLY_PERFORMING_NEAR_TARGET.
 *   2. A recent timed attempt near target (or the estimate is) →
 *      APPROACHING_TARGET.
 *   3. Estimate not far below target → DEVELOPING.
 *   4. Otherwise → NEEDS_FOUNDATIONAL_PREPARATION.
 * `timedTotals` are overall scores from timed exam-mode attempts, newest
 * first. When evidence is thin the caller must say so separately — the
 * label itself never claims more than the inputs support.
 */
export function readinessLabelFor(input: {
  kind: ScoringModel["kind"];
  target: number;
  estimatedOverall: number | null;
  /** Overall scores of recent timed exam-mode attempts, newest first. */
  timedTotals: number[];
}): ReadinessLabel {
  const { nearTarget, bigGap, consistent } = scaleThresholds(input.kind);
  const timed = input.timedTotals.filter((value) => Number.isFinite(value));

  if (timed.length >= 2 && timed.slice(0, 2).every((value) => value >= input.target - consistent)) {
    return "CONSISTENTLY_PERFORMING_NEAR_TARGET";
  }
  if (timed.length >= 1 && Math.max(...timed.slice(0, 2)) >= input.target - nearTarget) {
    return "APPROACHING_TARGET";
  }
  if (input.estimatedOverall !== null && input.estimatedOverall >= input.target - nearTarget) {
    return "APPROACHING_TARGET";
  }
  if (input.estimatedOverall !== null && input.estimatedOverall >= input.target - bigGap) {
    return "DEVELOPING";
  }
  return "NEEDS_FOUNDATIONAL_PREPARATION";
}
