/**
 * Baseline diagnostic.
 *
 * The plan is only as good as the evidence under it, so the planner first
 * shows where each section estimate comes from (self-rating, everyday
 * curriculum practice, or a mock examination) and which sections still
 * need measuring. Weaknesses are ranked by the honest yardstick that
 * matters — the gap to the learner's target on the exam's own scale —
 * and every low-confidence section gets a concrete, ~15-minute
 * diagnostic action instead of a guess.
 *
 * PROMPT 53 §2 adds the weakness-area layer: grammar, vocabulary, the
 * four skills and time management, each with concrete findings that
 * trace back to real evidence (mock skill gaps, AI evaluation findings,
 * timing analysis) — never invented.
 */

import type { SectionKey } from "../types";
import type { SectionEstimateDto } from "../types";
import { scaleThresholds } from "./scales";
import type {
  BaselineDiagnosticDto,
  BaselineSectionDto,
  WeaknessAreaDto,
  WeaknessAreaKey,
} from "./types";
import { WEAKNESS_AREA_LABELS } from "./types";

const SECTION_LABELS: Record<SectionKey, string> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
};

/** Which evidence layer an estimate's confidence implies. */
export function estimateBasis(confidence: number): "self-rating" | "curriculum practice" | "mock examination" {
  if (confidence >= 0.8) return "mock examination";
  if (confidence >= 0.35) return "curriculum practice";
  return "self-rating";
}

// ---------------------------------------------------------------------------
// Weakness-area evidence inputs (PROMPT 53 §2)
// ---------------------------------------------------------------------------

/** Tags that belong to the grammar area (shared vocabulary with the bridge rules). */
const GRAMMAR_AREA_TAGS: string[] = ["grammar", "accuracy", "sentence", "punctuation", "tense"];
/** Tags that belong to the vocabulary area. */
const VOCABULARY_AREA_TAGS: string[] = ["vocabulary", "lexical", "word-choice", "academic-vocab"];

export type EvaluationWeaknessInput = {
  section: "writing" | "speaking";
  area: string;
  label: string;
  severity: "major" | "moderate" | "minor";
  evidence: string;
};

/** Timing signals from the learner's latest timed attempt (all optional —
 * absent until a timed attempt exists; the diagnostic says so honestly). */
export type TimeManagementSignals = {
  timedAttempts: number;
  totalItems: number;
  unansweredItems: number;
  avgSecPerItem: number | null;
  budgetSecPerItem: number | null;
};

function buildWeaknessAreas(input: {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  targetScore: number;
  estimates: SectionEstimateDto[];
  weaknessTags: Partial<Record<SectionKey, string[]>>;
  evaluationWeaknesses: EvaluationWeaknessInput[];
  timeManagement: TimeManagementSignals | null;
}): WeaknessAreaDto[] {
  const { nearTarget, bigGap } = scaleThresholds(input.scoringKind);
  const areas: WeaknessAreaDto[] = [];

  // ---- Cross-section language areas: grammar & vocabulary -----------------
  const languageAreas: Array<{
    key: "grammar" | "vocabulary";
    areaTags: string[];
    evaluationAreas: string[];
  }> = [
    {
      key: "grammar",
      areaTags: GRAMMAR_AREA_TAGS,
      evaluationAreas: ["grammar-accuracy", "punctuation", "sentence-construction", "sentence-accuracy"],
    },
    { key: "vocabulary", areaTags: VOCABULARY_AREA_TAGS, evaluationAreas: ["lexical-range"] },
  ];
  for (const { key, areaTags, evaluationAreas } of languageAreas) {
    const matchedTags = [
      ...new Set(
        Object.values(input.weaknessTags).flatMap((tags) =>
          (tags ?? []).filter((tag) => areaTags.includes(tag)),
        ),
      ),
    ];
    const matchedEvaluations = input.evaluationWeaknesses.filter((weakness) =>
      evaluationAreas.includes(weakness.area),
    );
    const findings: string[] = [];
    const sources: string[] = [];

    if (matchedTags.length > 0) {
      findings.push(`Repeated error categories: ${matchedTags.join(", ")} (from your latest mock attempt).`);
      sources.push("mock attempt");
    }
    for (const weakness of matchedEvaluations.slice(0, 2)) {
      findings.push(`AI evaluation flagged: ${weakness.label} (${weakness.severity}) — ${weakness.evidence}`);
      sources.push("AI evaluation");
    }

    if (findings.length > 0) {
      const majorCount = matchedEvaluations.filter((weakness) => weakness.severity === "major").length;
      areas.push({
        key,
        label: WEAKNESS_AREA_LABELS[key],
        findings,
        sources: [...new Set(sources)],
        priority: majorCount > 0 || matchedTags.length >= 3 ? "high" : "medium",
      });
    }
  }

  // ---- The four skills -----------------------------------------------------
  for (const entry of input.estimates) {
    const gap = Number((input.targetScore - entry.estimated).toFixed(2));
    const tags = input.weaknessTags[entry.section] ?? [];
    const skillTags = tags.filter((tag) => !GRAMMAR_AREA_TAGS.includes(tag) && !VOCABULARY_AREA_TAGS.includes(tag));
    const evaluationFindings = input.evaluationWeaknesses
      .filter((weakness) => weakness.section === entry.section)
      .slice(0, 2);

    const findings: string[] = [];
    const sources: string[] = [];
    if (gap > 0) {
      findings.push(
        `Estimated ${entry.estimated.toFixed(1)} vs your ${input.targetScore.toFixed(1)} section target — a gap of ${gap.toFixed(1)}.`,
      );
      sources.push("section estimate");
    }
    if (skillTags.length > 0) {
      findings.push(`Error categories in recent practice: ${skillTags.join(", ")}.`);
      sources.push("mock attempt");
    }
    for (const weakness of evaluationFindings) {
      findings.push(`AI evaluation flagged: ${weakness.label} (${weakness.severity}).`);
      sources.push("AI evaluation");
    }

    if (findings.length > 0) {
      areas.push({
        key: entry.section,
        label: WEAKNESS_AREA_LABELS[entry.section],
        findings,
        sources: [...new Set(sources)],
        priority: gap >= bigGap ? "high" : gap >= nearTarget ? "medium" : "low",
      });
    }
  }

  // ---- Time management -------------------------------------------------------
  const timing = input.timeManagement;
  if (!timing || timing.timedAttempts === 0) {
    areas.push({
      key: "time_management",
      label: WEAKNESS_AREA_LABELS.time_management,
      findings: [
        "Time management is unmeasured — no timed attempt on record yet. Sit a timed diagnostic and this area fills in with real numbers.",
      ],
      sources: ["unmeasured"],
      priority: "low",
    });
  } else {
    const findings: string[] = [];
    const unansweredRate = timing.totalItems > 0 ? timing.unansweredItems / timing.totalItems : 0;
    const avgPace = timing.avgSecPerItem;
    const budgetPace = timing.budgetSecPerItem;
    const paceRatio =
      avgPace !== null && avgPace !== undefined && budgetPace !== null && budgetPace !== undefined && budgetPace > 0
        ? avgPace / budgetPace
        : null;

    if (unansweredRate > 0.15) {
      findings.push(
        `${timing.unansweredItems} of ${timing.totalItems} items were left unanswered in your latest timed attempt — the clock ran out before you covered the paper.`,
      );
    }
    if (paceRatio !== null && paceRatio > 1.2) {
      findings.push(
        `You averaged ${Math.round(avgPace!)}s per item against a ${Math.round(budgetPace!)}s budget — pacing is running over.`,
      );
    }
    if (paceRatio !== null && paceRatio < 0.6 && unansweredRate < 0.05) {
      findings.push(
        `You averaged ${Math.round(avgPace!)}s per item against a ${Math.round(budgetPace!)}s budget — very fast; check whether accuracy is paying for the speed.`,
      );
    }
    if (findings.length === 0) {
      findings.push(
        `Pacing looks healthy: ${timing.unansweredItems} unanswered of ${timing.totalItems} items, ${Math.round(avgPace ?? 0)}s per item against a ${Math.round(budgetPace ?? 0)}s budget.`,
      );
    }
    areas.push({
      key: "time_management",
      label: WEAKNESS_AREA_LABELS.time_management,
      findings,
      sources: ["timing analysis"],
      priority: unansweredRate > 0.15 || (paceRatio !== null && paceRatio > 1.3) ? "high" : findings.length > 1 ? "medium" : "low",
    });
  }

  return areas;
}

export function buildBaselineDiagnostic(input: {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  targetScore: number;
  estimates: SectionEstimateDto[];
  difficultSections: SectionKey[];
  /** Error-category tags per section from the latest mock attempt. */
  weaknessTags?: Partial<Record<SectionKey, string[]>>;
  /** Weaknesses from recent AI evaluations (writing & speaking). */
  evaluationWeaknesses?: EvaluationWeaknessInput[];
  /** Timing signals from the latest timed attempt. */
  timeManagement?: TimeManagementSignals | null;
}): BaselineDiagnosticDto {
  const { nearTarget, bigGap } = scaleThresholds(input.scoringKind);
  const target = input.targetScore;

  const sections: BaselineSectionDto[] = input.estimates.map((entry) => {
    const basis = estimateBasis(entry.confidence);
    const needsEvidence = entry.confidence < 0.3;
    return {
      section: entry.section,
      estimated: entry.estimated,
      confidence: entry.confidence,
      basis,
      evidenceNote:
        entry.weaknesses[0] ??
        entry.strengths[0] ??
        (basis === "mock examination"
          ? "Based on your latest mock attempt"
          : basis === "curriculum practice"
            ? "Based on your everyday practice in EnglishPath"
            : "Only your self-rating so far — unmeasured"),
      needsEvidence,
      diagnosticAction: needsEvidence
        ? {
            title: `Quick ${SECTION_LABELS[entry.section]} diagnostic — 12 exam-format items`,
            href: "#/exams/mocks",
            minutes: 15,
          }
        : null,
    };
  });

  // Rank weaknesses by target gap; flagged-difficult sections break ties.
  const rankedWeaknesses = sections
    .map((section) => {
      const gap = Number((target - section.estimated).toFixed(2));
      const priority: "high" | "medium" | "low" =
        gap >= bigGap ? "high" : gap >= nearTarget ? "medium" : "low";
      const flagged = input.difficultSections.includes(section.section);
      const note =
        section.estimated >= target
          ? `At or above your target (${section.estimated.toFixed(1)} vs ${target.toFixed(1)})`
          : `${gap.toFixed(1)} below your target on the ${input.scoringKind === "IELTS_BAND" ? "band" : "band"} scale${flagged ? " — and you flagged it as difficult" : ""}`;
      return { section: section.section, gap, priority, note };
    })
    .sort((a, b) => b.gap - a.gap || (input.difficultSections.includes(b.section) ? 1 : 0) - (input.difficultSections.includes(a.section) ? 1 : 0));

  const top = rankedWeaknesses[0];
  const mostImportant =
    top && (top.priority === "high" || top.priority === "medium")
      ? { section: top.section, note: top.note }
      : top && top.priority === "low"
        ? {
            section: top.section,
            note: `${top.note}. No standout weakness — keep every section moving.`,
          }
        : null;

  const overall =
    sections.length === 4
      ? Math.round((sections.reduce((sum, section) => sum + section.estimated, 0) / 4) * 2) / 2
      : null;

  const weaknessAreas = buildWeaknessAreas({
    scoringKind: input.scoringKind,
    targetScore: input.targetScore,
    estimates: input.estimates,
    weaknessTags: input.weaknessTags ?? {},
    evaluationWeaknesses: input.evaluationWeaknesses ?? [],
    timeManagement: input.timeManagement ?? null,
  });

  const note =
    "Estimates firm up as you practise: self-ratings are rough, everyday practice sharpens them, and mock examinations are the strongest evidence. None of it is an official score.";

  return { sections, overall, rankedWeaknesses, mostImportant, weaknessAreas, note };
}
