/**
 * Adaptive planning.
 *
 * The plan is a living schedule. After new evidence lands:
 *   - A section below the target in two or more recent attempts is a
 *     repeated weakness → its focus weight grows (more slots in future
 *     days), its difficulty eases if it is also declining, and the shared
 *     learning-loop bridge rules recommend the existing lessons that
 *     target its gaps — skipping lessons whose work is already done.
 *   - A section that improved keeps its weight but steps UP in difficulty —
 *     progress must be met with harder material, not applause.
 *   - With no meaningful signal the planner says so honestly and changes
 *     nothing: churn is not adaptation.
 *
 * Completed days are never rewritten — only future days are regenerated.
 */

import type { SectionKey } from "../types";
import { BRIDGE_RULES } from "../recommend";
import { scaleThresholds } from "./scales";
import type { PlannerDifficulty } from "./types";

export const SECTION_KEYS_ALL: SectionKey[] = ["listening", "reading", "writing", "speaking"];

export type SectionPerformance = {
  section: SectionKey;
  /** Recent attempts (newest first) that scored this section. */
  attemptsObserved: number;
  /** Average over the most recent 1–3 observations. */
  averageRecent: number | null;
  /** Average over the observations before those (null when none). */
  averageEarlier: number | null;
  /** Consecutive recent attempts below target − nearTarget. */
  belowTargetStreak: number;
  /** Recent average at least +0.5 above the earlier average. */
  improved: boolean;
  /** Recent average at least −0.5 below the earlier average. */
  declined: boolean;
  /** Below target − nearTarget in 2+ recent attempts. */
  repeatedWeak: boolean;
};

export type ObservedAttempt = {
  timed: boolean;
  submittedAt: string | null;
  sectionScores: Array<{ section: SectionKey; score: number }>;
};

/**
 * Per-section trend analysis from recent attempts (newest first, up to 6
 * used). Only attempts that actually scored the section count.
 */
export function analyseSectionPerformance(input: {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  targetScore: number;
  attempts: ObservedAttempt[];
}): Record<SectionKey, SectionPerformance> {
  const { nearTarget } = scaleThresholds(input.scoringKind);
  const recent = input.attempts.slice(0, 6);
  const result = {} as Record<SectionKey, SectionPerformance>;

  for (const section of SECTION_KEYS_ALL) {
    const scores: number[] = [];
    for (const attempt of recent) {
      const found = attempt.sectionScores.find((entry) => entry.section === section);
      if (typeof found?.score === "number" && Number.isFinite(found.score)) {
        scores.push(found.score);
      }
    }
    const recentSlice = scores.slice(0, 3);
    const earlierSlice = scores.slice(3, 6);
    const averageRecent = recentSlice.length > 0 ? recentSlice.reduce((a, b) => a + b, 0) / recentSlice.length : null;
    const averageEarlier = earlierSlice.length > 0 ? earlierSlice.reduce((a, b) => a + b, 0) / earlierSlice.length : null;
    const weakLine = input.targetScore - nearTarget;
    let streak = 0;
    for (const score of recentSlice) {
      if (score < weakLine) streak += 1;
      else break;
    }
    result[section] = {
      section,
      attemptsObserved: scores.length,
      averageRecent,
      averageEarlier,
      belowTargetStreak: streak,
      improved: averageRecent !== null && averageEarlier !== null && averageRecent >= averageEarlier + 0.5,
      declined: averageRecent !== null && averageEarlier !== null && averageRecent <= averageEarlier - 0.5,
      repeatedWeak: streak >= 2,
    };
  }
  return result;
}

export type RecommendedLesson = {
  title: string;
  reason: string;
  href: string;
  minutes: number;
  section: SectionKey;
  /** True when an earlier adaptation already pointed at this lesson. */
  previouslyRecommended: boolean;
};

/**
 * Error categories from recent AI evaluations (PROMPT 52 learning-loop
 * weakness taxonomy) merged into the shared weakness-tag vocabulary, so
 * repeated mistakes in WRITING/SPEAKING practice feed the same adaptive
 * pipeline as mock skill gaps.
 */
export function weaknessTagsFromEvaluations(
  weaknesses: Array<{ section: string; area: string }>,
): Partial<Record<SectionKey, string[]>> {
  const tags: Partial<Record<SectionKey, string[]>> = {};
  for (const weakness of weaknesses) {
    if (weakness.section !== "writing" && weakness.section !== "speaking") continue;
    const mapped = EVALUATION_TAG_MAP[weakness.area];
    if (!mapped) continue;
    const current = tags[weakness.section] ?? [];
    tags[weakness.section] = [...new Set([...current, ...mapped])];
  }
  return tags;
}

/** Learning-loop weakness areas → bridge-rule tags (shared vocabulary). */
const EVALUATION_TAG_MAP: Record<string, string[]> = {
  "grammar-accuracy": ["grammar", "accuracy"],
  punctuation: ["punctuation", "grammar"],
  "sentence-construction": ["sentence", "grammar"],
  "sentence-accuracy": ["sentence", "grammar"],
  "lexical-range": ["vocabulary", "word-choice"],
  "task-requirements": ["task-response"],
  "task-response": ["task-response"],
  coherence: ["coherence", "structure"],
  relevance: ["task-response"],
  fluency: ["fluency"],
  "response-development": ["fluency"],
  "pace-pauses": ["fluency", "pronunciation"],
};

export type AdaptationResult = {
  changes: string[];
  focusWeightOverrides: Partial<Record<SectionKey, number>>;
  difficultyOverrides: Partial<Record<SectionKey, PlannerDifficulty>>;
  recommendedLessons: RecommendedLesson[];
  /** Set when nothing warranted a change — honesty over churn. */
  noChangeReason: string | null;
};

/**
 * Turn the analysis into concrete schedule changes. Pure: the service
 * applies the overrides when regenerating future days.
 *
 * PROMPT 53 §6: recommendations consider completed work — a lesson whose
 * href appears in `completedLessonHrefs` (done tasks / completed pathway
 * steps) is never re-recommended, and one an earlier adaptation already
 * pointed at is surfaced last, clearly marked as still open.
 */
export function buildAdaptation(input: {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  targetScore: number;
  performance: Record<SectionKey, SectionPerformance>;
  weaknessTags: Partial<Record<SectionKey, string[]>>;
  difficultSections: SectionKey[];
  currentDifficultyOverrides: Partial<Record<SectionKey, PlannerDifficulty>>;
  daysRemaining: number;
  /** Hrefs of lessons/practice the learner has already completed. */
  completedLessonHrefs?: string[];
  /** Hrefs recommended by previous adaptations of this plan. */
  previouslyRecommendedHrefs?: string[];
}): AdaptationResult {
  const { nearTarget } = scaleThresholds(input.scoringKind);
  const changes: string[] = [];
  const focusWeightOverrides: Partial<Record<SectionKey, number>> = {};
  const difficultyOverrides: Partial<Record<SectionKey, PlannerDifficulty>> = {
    ...input.currentDifficultyOverrides,
  };
  const lessons: RecommendedLesson[] = [];
  const completed = new Set(input.completedLessonHrefs ?? []);
  const alreadyRecommended = new Set(input.previouslyRecommendedHrefs ?? []);

  const pushLesson = (lesson: Omit<RecommendedLesson, "previouslyRecommended">) => {
    if (completed.has(lesson.href)) return; // completed work is never re-assigned
    if (lessons.some((existing) => existing.href === lesson.href)) return;
    lessons.push({ ...lesson, previouslyRecommended: alreadyRecommended.has(lesson.href) });
  };

  const observed = SECTION_KEYS_ALL.filter(
    (section) => input.performance[section].attemptsObserved > 0,
  );

  for (const section of observed) {
    const perf = input.performance[section];
    if (perf.repeatedWeak) {
      focusWeightOverrides[section] = 1.8;
      if (perf.declined) difficultyOverrides[section] = "easier";
      changes.push(
        `${label(section)} has been below your target in ${perf.belowTargetStreak} recent attempts — future days now give it extra practice${perf.declined ? " at an easier level first" : ""}.`,
      );
      for (const lesson of lessonsFor(section, input.weaknessTags[section] ?? [])) {
        pushLesson(lesson);
      }
    } else if (perf.improved && !perf.declined) {
      difficultyOverrides[section] = "harder";
      focusWeightOverrides[section] = 0.9;
      changes.push(
        `${label(section)} improved by ${(perf.averageRecent! - perf.averageEarlier!).toFixed(1)} — upcoming ${section} tasks step up in difficulty.`,
      );
    } else if (perf.declined) {
      difficultyOverrides[section] = "easier";
      changes.push(
        `${label(section)} slipped by ${(perf.averageEarlier! - perf.averageRecent!).toFixed(1)} — its tasks ease off slightly to rebuild accuracy.`,
      );
    }
  }

  // Flagged-difficult sections with no attempt evidence still get the
  // bridge recommendations, so the learner is never sent in blind.
  for (const section of input.difficultSections) {
    if (observed.includes(section)) continue;
    for (const lesson of lessonsFor(section, input.weaknessTags[section] ?? [])) {
      pushLesson(lesson);
    }
  }

  // Fresher recommendations first — repeats from earlier adaptations last.
  lessons.sort((a, b) => Number(a.previouslyRecommended) - Number(b.previouslyRecommended));

  if (changes.length === 0) {
    return {
      changes: [],
      focusWeightOverrides: {},
      difficultyOverrides: input.currentDifficultyOverrides,
      recommendedLessons: lessons,
      noChangeReason:
        observed.length === 0
          ? "No scored mock attempts yet — complete the baseline diagnostics and sit the next scheduled mock before adapting."
          : input.daysRemaining <= 1
            ? "The plan has run its course — generate a new plan for the next stretch."
            : `No section is repeatedly below target (${nearTarget.toFixed(1)} within it) and none has shifted enough to re-weight — keep completing your daily tasks.`,
    };
  }

  return {
    changes,
    focusWeightOverrides,
    difficultyOverrides,
    recommendedLessons: lessons,
    noChangeReason: null,
  };
}

function label(section: SectionKey): string {
  return section.charAt(0).toUpperCase() + section.slice(1);
}

/** Existing lessons (bridge rules) matching the section's weakness tags. */
function lessonsFor(section: SectionKey, tags: string[]): Array<Omit<RecommendedLesson, "previouslyRecommended">> {
  const out: Array<Omit<RecommendedLesson, "previouslyRecommended">> = [];
  for (const rule of BRIDGE_RULES) {
    if (rule.section !== section) continue;
    const matched = rule.tags.filter((tag) => tags.includes(tag));
    if (matched.length === 0 && tags.length > 0) continue;
    for (const ref of rule.refs) {
      out.push({
        title: ref.title,
        reason: tags.length > 0 ? `Targets: ${matched.join(", ") || tags.join(", ")}` : `General ${section} support`,
        href: ref.href,
        minutes: ref.minutes,
        section,
      });
    }
  }
  // Weakness tags unknown → first rule's refs as general support.
  if (out.length === 0) {
    const generic = BRIDGE_RULES.find((rule) => rule.section === section);
    if (generic) {
      for (const ref of generic.refs) {
        out.push({
          title: ref.title,
          reason: `General ${section} support`,
          href: ref.href,
          minutes: ref.minutes,
          section,
        });
      }
    }
  }
  return out.slice(0, 3);
}
