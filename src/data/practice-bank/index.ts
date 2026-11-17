/**
 * PROMPT 36 practice bank — chapter-pool content for chapters 6–56.
 *
 * Authors six to eight questions per chapter (see the rollup for exact
 * counts) for every chapter whose v1 baseline pool was too thin for chapter
 * tests (3 questions). Chapters 1–5 already carry rich v2 practice sets
 * (31–42 questions each) and are NOT re-authored here; the manifest below
 * records the honest state of every chapter pool.
 *
 * All entries pass src/lib/practice/qc.ts at seed time (the seeder refuses
 * to publish a question with QC errors); difficulty follows the linguistic
 * rubric in src/lib/practice/difficulty.ts.
 */

import type { BankEntry, ExerciseSpec } from "./helpers";
import { bankPreA1 } from "./bank-pre-a1";
import { bankA1A } from "./bank-a1-a";
import { bankA1B } from "./bank-a1-b";
import { bankA2A } from "./bank-a2-a";
import { bankA2B } from "./bank-a2-b";
import { bankB1A } from "./bank-b1-a";
import { bankB1B } from "./bank-b1-b";
import { bankB2A } from "./bank-b2-a";
import { bankB2B } from "./bank-b2-b";
import { bankC1A } from "./bank-c1-a";
import { bankC1B } from "./bank-c1-b";

export const PRACTICE_BANK: BankEntry[] = [
  ...bankPreA1,
  ...bankA1A,
  ...bankA1B,
  ...bankA2A,
  ...bankA2B,
  ...bankB1A,
  ...bankB1B,
  ...bankB2A,
  ...bankB2B,
  ...bankC1A,
  ...bankC1B,
];

/** A question with its derived bank identity (slug decided by order in chapter). */
export interface SeededBankQuestion {
  entryIndex: number;
  chapterSlug: string;
  lessonSlug: string;
  topic: string;
  tags: string[];
  slug: string;
  exercise: ExerciseSpec;
}

/** Stable per-chapter slug: ch-XX-pq-NN (order of authoring). */
function chapterSlug(chapter: number): string {
  return `ch-${String(chapter).padStart(2, "0")}`;
}
function lessonSlug(chapter: number, lesson: number): string {
  return `ch-${String(chapter).padStart(2, "0")}-l-${String(lesson).padStart(2, "0")}`;
}

export function practiceBankForSeed(): SeededBankQuestion[] {
  const perChapter = new Map<number, number>();
  const out: SeededBankQuestion[] = [];
  PRACTICE_BANK.forEach((item, index) => {
    const n = (perChapter.get(item.chapter) ?? 0) + 1;
    perChapter.set(item.chapter, n);
    const exerciseTags = (item.exercise as { tags?: string[] }).tags ?? [];
    out.push({
      entryIndex: index,
      chapterSlug: chapterSlug(item.chapter),
      lessonSlug: lessonSlug(item.chapter, item.lesson),
      topic: item.topic,
      tags: [item.topic, ...exerciseTags],
      slug: `${chapterSlug(item.chapter)}-pq-${String(n).padStart(2, "0")}`,
      exercise: item.exercise,
    });
  });
  return out;
}

/** Pool state per chapter: honest manifest for the practice zone. */
export interface BankChapterRollup {
  chapter: number;
  chapterSlug: string;
  authoredHere: number;
  lessons: number[];
  byDifficulty: Record<string, number>;
  bySkill: Record<string, number>;
  byType: Record<string, number>;
  /** The v1-baseline questions that already existed (3 per chapter). */
  baseline: number;
}

const BASELINE_PER_CHAPTER = 3;

export function practiceBankRollup(): BankChapterRollup[] {
  const map = new Map<number, BankEntry[]>();
  for (const item of PRACTICE_BANK) {
    const list = map.get(item.chapter) ?? [];
    list.push(item);
    map.set(item.chapter, list);
  }
  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([chapter, entries]) => {
      const byDifficulty: Record<string, number> = {};
      const bySkill: Record<string, number> = {};
      const byType: Record<string, number> = {};
      for (const e of entries) {
        byDifficulty[e.exercise.difficulty] = (byDifficulty[e.exercise.difficulty] ?? 0) + 1;
        bySkill[e.exercise.skill] = (bySkill[e.exercise.skill] ?? 0) + 1;
        byType[e.exercise.type] = (byType[e.exercise.type] ?? 0) + 1;
      }
      return {
        chapter,
        chapterSlug: chapterSlug(chapter),
        authoredHere: entries.length,
        lessons: [...new Set(entries.map((e) => e.lesson))].sort((a, b) => a - b),
        byDifficulty,
        bySkill,
        byType,
        baseline: BASELINE_PER_CHAPTER,
      };
    });
}

export function practiceBankTotals() {
  return {
    chapters: new Set(PRACTICE_BANK.map((e) => e.chapter)).size,
    questions: PRACTICE_BANK.length,
    perChapterMin: Math.min(...practiceBankRollup().map((r) => r.authoredHere)),
    perChapterMax: Math.max(...practiceBankRollup().map((r) => r.authoredHere)),
  };
}

/**
 * Pool manifest: the honest state of the full 56-chapter bank.
 * v2-rich: chapters 1–5 (PROMPT 35 sets, not re-authored here).
 * v1-baseline + this bank: chapters 6–56 (8 authored questions + 3 baseline).
 */
export const BANK_MANIFEST_NOTE =
  "Chapters 01–05 carry their full PROMPT 35 practice sets (31–42 questions). Chapters 06–56 carry 6–8 authored PROMPT 36 questions each (exact counts in the rollup) plus the 3 baseline questions from PROMPT 34, so every chapter pool reaches 9–11 questions. Expanding the remaining pools to the v2 depth is queued as a follow-up content batch in the production manifest.";
