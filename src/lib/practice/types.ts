/**
 * PROMPT 36 — practice & assessment engine: shared types.
 *
 * The practice zone sits on top of the published CMS question bank (the same
 * questions learners meet inside lessons) and the shared exercise engine
 * (src/lib/engine). Nothing here re-implements grading: sessions draw
 * questions, the existing validators grade answers, and reports/mastery are
 * derived from the recorded attempts.
 */

import type { Difficulty, ExerciseType, Skill } from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Modes
// ---------------------------------------------------------------------------

export const PRACTICE_MODES = [
  "guided",
  "independent",
  "revision",
  "mixed",
  "timed",
  "weak-area",
  "chapter-test",
  "course-assessment",
] as const;

export type PracticeMode = (typeof PRACTICE_MODES)[number];

export const PRACTICE_MODE_IDS: PracticeMode[] = [...PRACTICE_MODES];

export interface ModeSpec {
  id: PracticeMode;
  label: string;
  /** Learner-facing one-liner (hub cards, intro screens). */
  description: string;
  /** True when answers are collected silently and graded in one batch. */
  gradedStyle: "assessment" | "practice";
  /** Whether the mode offers hints at all. */
  hints: boolean;
  /** Whether a pass mark applies (chapter tests, course assessments). */
  passMark: boolean;
  defaultCount: number;
  /** Question count range the UI may offer. */
  countRange: [number, number];
}

export const MODE_SPECS: Record<PracticeMode, ModeSpec> = {
  guided: {
    id: "guided",
    label: "Guided practice",
    description:
      "Work through one chapter with progressive hints and full feedback after every answer.",
    gradedStyle: "practice",
    hints: true,
    passMark: false,
    defaultCount: 8,
    countRange: [5, 12],
  },
  independent: {
    id: "independent",
    label: "Independent practice",
    description:
      "No hints offered, no hand-holding — you produce the answers, feedback teaches afterwards.",
    gradedStyle: "practice",
    hints: false,
    passMark: false,
    defaultCount: 8,
    countRange: [5, 12],
  },
  revision: {
    id: "revision",
    label: "Revision practice",
    description:
      "Questions drawn only from chapters you have already completed — keep old material alive.",
    gradedStyle: "practice",
    hints: true,
    passMark: false,
    defaultCount: 10,
    countRange: [5, 14],
  },
  mixed: {
    id: "mixed",
    label: "Mixed-topic practice",
    description:
      "A random spread across every chapter you have started — the closest thing to real conversation.",
    gradedStyle: "practice",
    hints: true,
    passMark: false,
    defaultCount: 10,
    countRange: [5, 16],
  },
  timed: {
    id: "timed",
    label: "Timed challenge",
    description:
      "A batch of questions against the clock. No hints, no feedback until you submit.",
    gradedStyle: "assessment",
    hints: false,
    passMark: false,
    defaultCount: 12,
    countRange: [8, 16],
  },
  "weak-area": {
    id: "weak-area",
    label: "Weak-area practice",
    description:
      "Targets the skills and chapters where your recent answers were wrong — remediation, not repetition.",
    gradedStyle: "practice",
    hints: true,
    passMark: false,
    defaultCount: 8,
    countRange: [5, 12],
  },
  "chapter-test": {
    id: "chapter-test",
    label: "Chapter test",
    description:
      "The formal end-of-chapter quiz. It covers this chapter's actual lessons — no trick questions from outside.",
    gradedStyle: "assessment",
    hints: false,
    passMark: true,
    defaultCount: 8,
    countRange: [6, 10],
  },
  "course-assessment": {
    id: "course-assessment",
    label: "Course assessment",
    description:
      "A milestone assessment measuring all seven skill areas across the whole course.",
    gradedStyle: "assessment",
    hints: false,
    passMark: true,
    defaultCount: 14,
    countRange: [12, 18],
  },
};

// ---------------------------------------------------------------------------
// Session configuration
// ---------------------------------------------------------------------------

export interface SessionConfig {
  chapterSlug?: string;
  courseSlug?: string;
  count?: number;
  /** Timed sessions only: seconds for the whole batch. */
  timeLimitSec?: number;
  /** Chapter tests 0.75, course assessments 0.7 (set by the service). */
  passScore?: number;
  /**
   * PROMPT 38 §7 — optional difficulty preference (subset of
   * easy/medium/hard/challenge) for the spread modes. A PREFERENCE, never a
   * hard constraint: if it would leave fewer than 4 questions the pool is
   * kept whole. Ignored for chapter-test / course-assessment (their coverage
   * is fixed by spec).
   */
  difficulty?: string[];
}

export function parseSessionConfig(raw: string): SessionConfig {
  try {
    const parsed = JSON.parse(raw) as SessionConfig;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/** Stable scope key so retries of the same quiz vary, different quizzes don't collide. */
export function configScopeKey(mode: PracticeMode, config: SessionConfig): string {
  const scope = [config.chapterSlug, config.courseSlug].filter(Boolean).join(":");
  const difficulty = (config.difficulty ?? []).slice().sort().join("+");
  return `${mode}${scope ? `:${scope}` : ""}${difficulty ? `@${difficulty}` : ""}`;
}

// ---------------------------------------------------------------------------
// Session DTOs (API surface)
// ---------------------------------------------------------------------------

export interface SessionQuestionDto {
  /** Sanitized exercise (no grading fields). */
  question: unknown;
  /** Bank metadata the player shows: chapter/lesson/topic badges. */
  chapterSlug: string;
  lessonSlug: string;
  topic: string;
}
