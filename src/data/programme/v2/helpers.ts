/**
 * PROMPT 35 authoring helpers — terse, consistent builders for the v2
 * teaching-structure blocks, plus the lesson-upgrade patch type used by the
 * production batches (src/data/programme/v2/ch-XX.ts).
 */

import type { CmsBlock } from "@/data/cms/types";
import type {
  AssignmentSpec,
  PracticeSetSpec,
} from "../types";

/** A v2 content upgrade for one existing lesson (matched by slug). */
export interface LessonUpgrade {
  /** CMS lesson slug, e.g. "ch-01-l-01". */
  slug: string;
  /** Replacement teaching blocks (full PROMPT 35 structure). */
  blocks: CmsBlock[];
  /** Guided + independent practice sets (replace legacy questions). */
  practiceSets?: PracticeSetSpec[];
  outcomes?: string[];
  description?: string;
  minutes?: number;
  assignment?: AssignmentSpec;
  homework?: string[];
}

// ---------------------------------------------------------------------------
// Block builders (v2 teaching structure)
// ---------------------------------------------------------------------------

/** Lesson introduction + before-you-start prerequisite recap. */
export const LI = (text: string, beforeYouStart?: string[]): CmsBlock => ({
  type: "lesson-intro",
  text,
  ...(beforeYouStart && beforeYouStart.length > 0 ? { beforeYouStart } : {}),
});

/** Step-by-step teaching. */
export const ST = (
  title: string,
  steps: { title: string; text: string; examples?: { english: string; note?: string }[] }[],
  intro?: string,
): CmsBlock => ({
  type: "steps",
  title,
  steps: steps.map((s) => ({
    title: s.title,
    text: s.text,
    ...(s.examples && s.examples.length > 0
      ? { examples: s.examples.map((e) => ({ english: e.english, ...(e.note ? { note: e.note } : {}) })) }
      : {}),
  })),
  ...(intro ? { intro } : {}),
});

/** Real-life usage situations. */
export const US = (
  items: { situation: string; example: string; note?: string }[],
  title?: string,
  text?: string,
): CmsBlock => ({
  type: "usage",
  ...(title ? { title } : {}),
  ...(text ? { text } : {}),
  items,
});

/** Comparison table of two similar concepts. */
export const CMP = (
  title: string,
  columns: [string, string],
  rows: [string, string, string][],
  opts?: { intro?: string; verdict?: string },
): CmsBlock => ({
  type: "comparison",
  title,
  columns,
  rows: rows.map(([aspect, left, right]) => ({ aspect, left, right })),
  ...(opts?.intro ? { intro: opts.intro } : {}),
  ...(opts?.verdict ? { verdict: opts.verdict } : {}),
});

/** Common mistakes: incorrect → correct + reason. */
export const MS = (
  items: [string, string, string][],
  title?: string,
): CmsBlock => ({
  type: "mistakes",
  ...(title ? { title } : {}),
  items: items.map(([wrong, right, reason]) => ({ wrong, right, reason })),
});

/** Four-skill integration card. */
export const FS = (spec: {
  title?: string;
  reading: { text: string; task?: string };
  writing: { task: string; guide?: string[]; model?: string };
  listening: { script: string; task?: string };
  speaking: { task: string; frames?: string[]; checklist?: string[] };
}): CmsBlock => ({ type: "four-skills", ...spec });

/** Lesson summary takeaways. */
export const SM = (points: string[], title?: string): CmsBlock => ({
  type: "summary",
  ...(title ? { title } : {}),
  points,
});

/** Self-checked revision quiz referencing earlier chapters. */
export const RV = (
  items: { question: string; options: string[]; correctIndex: number; explanation: string; from?: string }[],
  opts?: { title?: string; intro?: string },
): CmsBlock => ({
  type: "revision",
  ...(opts?.title ? { title: opts.title } : {}),
  ...(opts?.intro ? { intro: opts.intro } : {}),
  items,
});

/** Language-support block from validated glossary entries. */
export const LSP = (
  entries: { english: string; ur: string; hi: string }[],
  title?: string,
): CmsBlock => ({
  type: "language-support",
  ...(title ? { title } : {}),
  entries,
});

/** Detailed examples with teaching notes and life domains. */
export const EXD = (
  title: string,
  items: { english: string; note?: string; domain?: string }[],
  note?: string,
): CmsBlock => ({
  type: "example",
  title,
  items: items.map((i) => ({
    english: i.english,
    ...(i.note ? { note: i.note } : {}),
    ...(i.domain ? { domain: i.domain } : {}),
  })),
  ...(note ? { note } : {}),
});
