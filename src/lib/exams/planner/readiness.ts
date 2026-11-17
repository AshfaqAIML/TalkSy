/**
 * Examination readiness report.
 *
 * Honest by construction:
 *   - The label comes from real timed exam-mode attempts when they exist
 *     and falls back to the (clearly labelled) estimate when they do not.
 *   - "Enough evidence" means two or more timed attempts; anything less is
 *     stated next to the label, never hidden.
 *   - Section-wise readiness compares each estimate to the target share,
 *     openly derived from the overall target.
 *   - Completion is task bookkeeping, not a performance claim.
 *   - Every report carries the two mandated safeguards: mock estimates are
 *     not official results, and no target score is ever guaranteed.
 */

import type { SectionKey } from "../types";
import { readinessLabelFor, scaleThresholds, sectionGapStatus } from "./scales";
import {
  PLANNER_NO_GUARANTEE_NOTE,
  READINESS_DISCLAIMER,
  READINESS_LABEL_NOTES,
  READINESS_LABEL_TEXT,
  type ReadinessReportDto,
  type ReadinessSectionDto,
} from "./types";
import { formatBandValue } from "./scales";

export type ReadinessAttemptInput = {
  attemptId: string;
  mockTitle: string;
  scoreDisplay: string | null;
  totalScore: number | null;
  timed: boolean;
  modeLabel: string;
  submittedAt: string | null;
};

export function buildReadinessReport(input: {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  targetScore: number;
  /** Overall estimate on the exam scale (null when nothing is known). */
  estimatedOverall: number | null;
  estimates: Array<{ section: SectionKey; estimated: number; weaknesses: string[] }>;
  attempts: ReadinessAttemptInput[];
  completion: { percent: number; tasksDone: number; tasksTotal: number } | null;
  nextSteps: string[];
}): ReadinessReportDto {
  const timedAttempts = input.attempts.filter(
    (attempt) => attempt.timed && attempt.totalScore !== null,
  );
  const timedTotals = timedAttempts.map((attempt) => attempt.totalScore as number);

  const label = readinessLabelFor({
    kind: input.scoringKind,
    target: input.targetScore,
    estimatedOverall: input.estimatedOverall,
    timedTotals,
  });

  const hasEnoughEvidence = timedAttempts.length >= 2;
  const evidenceNote = hasEnoughEvidence
    ? `Based on ${timedAttempts.length} recent timed exam-mode attempts — the strongest practice evidence available here.`
    : timedAttempts.length === 1
      ? "Only one timed exam-mode attempt so far — sit at least one more before trusting the label."
      : input.estimatedOverall === null
        ? "No exam-condition evidence yet — take a baseline diagnostic or a timed mock first."
        : "No timed exam-mode attempts yet — the label is provisional and rests on practice estimates only.";

  const { nearTarget, consistent } = scaleThresholds(input.scoringKind);
  const sections: ReadinessSectionDto[] = input.estimates.map((entry) => {
    const gap = Number((input.targetScore - entry.estimated).toFixed(2));
    return {
      section: entry.section,
      estimated: entry.estimated,
      target: input.targetScore,
      gap,
      status: sectionGapStatus(input.scoringKind, entry.estimated, input.targetScore),
      note:
        entry.weaknesses[0] ??
        (gap <= 0
          ? "At or above the target share"
          : gap < nearTarget
            ? "Within reach of the target share"
            : "Needs focused work before test day"),
    };
  });

  const gap = input.estimatedOverall === null ? null : Number((input.targetScore - input.estimatedOverall).toFixed(2));

  // ---- Why THIS label was assigned to THIS learner (PROMPT 53 §7) --------
  const why: string[] = [];
  why.push(
    timedAttempts.length > 0
      ? `${timedAttempts.length} timed exam-mode attempt${timedAttempts.length === 1 ? "" : "s"} considered (of ${input.attempts.length} recent attempt${input.attempts.length === 1 ? "" : "s"} in total).`
      : `No timed exam-mode attempts yet — ${input.attempts.length} practice attempt${input.attempts.length === 1 ? "" : "s"} reviewed, none under full exam timing.`,
  );
  if (label === "CONSISTENTLY_PERFORMING_NEAR_TARGET") {
    why.push(
      `Your two most recent timed attempts scored ${formatBandValue(timedTotals[0])} and ${formatBandValue(timedTotals[1] ?? timedTotals[0])} — both within ${consistent} of your ${formatBandValue(input.targetScore)} target.`,
    );
  } else if (label === "APPROACHING_TARGET" && timedTotals.length > 0) {
    why.push(
      `Your latest timed attempt scored ${formatBandValue(timedTotals[0])} — within ${nearTarget} of your ${formatBandValue(input.targetScore)} target.`,
    );
  } else if (label === "APPROACHING_TARGET") {
    why.push(
      `Your practice estimate (${formatBandValue(input.estimatedOverall ?? 0)}) sits within ${nearTarget} of the target — but no timed attempt has confirmed it yet.`,
    );
  } else if (label === "DEVELOPING" && input.estimatedOverall !== null) {
    why.push(
      `Your estimated overall (${formatBandValue(input.estimatedOverall)}) is ${formatBandValue(gap ?? 0)} below the ${formatBandValue(input.targetScore)} target — meaningful, but closable with focused work.`,
    );
  } else if (label === "NEEDS_FOUNDATIONAL_PREPARATION" && input.estimatedOverall !== null) {
    why.push(
      `Your estimated overall (${formatBandValue(input.estimatedOverall)}) is ${formatBandValue(gap ?? 0)} below the ${formatBandValue(input.targetScore)} target — build language foundations before exam technique.`,
    );
  }
  if (timedTotals.length >= 2) {
    const delta = timedTotals[0] - timedTotals[1];
    if (delta >= 0.5) why.push("Recent attempts are trending upwards.");
    else if (delta <= -0.5) why.push("Recent attempts have slipped a little.");
  }
  if (!hasEnoughEvidence) {
    why.push("Fewer than two timed attempts — this label is provisional by design.");
  }
  if (input.completion) {
    why.push(
      `Plan completion: ${input.completion.percent}% (${input.completion.tasksDone}/${input.completion.tasksTotal} tasks done).`,
    );
  }

  return {
    label,
    labelText: READINESS_LABEL_TEXT[label],
    labelNote: READINESS_LABEL_NOTES[label],
    why,
    evidence: {
      timedExamAttempts: timedAttempts.length,
      attemptsUsed: input.attempts.length,
      hasEnoughEvidence,
      evidenceNote,
    },
    overall: {
      estimated: input.estimatedOverall,
      target: input.targetScore,
      gap,
      onTarget: input.estimatedOverall !== null && input.estimatedOverall >= input.targetScore,
    },
    sections,
    completion: input.completion,
    recentMocks: input.attempts.slice(0, 5).map((attempt) => ({
      attemptId: attempt.attemptId,
      mockTitle: attempt.mockTitle,
      scoreDisplay: attempt.scoreDisplay,
      totalScore: attempt.totalScore,
      timed: attempt.timed,
      modeLabel: attempt.modeLabel,
      submittedAt: attempt.submittedAt,
    })),
    nextSteps: input.nextSteps,
    disclaimer: READINESS_DISCLAIMER,
    noGuaranteeNote: PLANNER_NO_GUARANTEE_NOTE,
  };
}
