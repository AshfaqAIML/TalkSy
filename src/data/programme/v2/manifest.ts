/**
 * PROMPT 35 production manifest — the honest state of every chapter.
 *
 * `v2-full`  — every lesson rewritten to the full teaching standard:
 *              lesson intro + prerequisites, concept explanation, step-by-
 *              step teaching, rules and patterns, 8+ worked examples, real-
 *              life usage, comparison, common mistakes (wrong → right →
 *              reason), guided practice with hints, independent practice,
 *              four-skill integration, validated Urdu/Hindi support,
 *              summary, revision questions, assignment and homework.
 * `v1-baseline` — the PROMPT 34 lesson set: real teaching material with
 *              blocks, exercises, assignments and homework — but not yet
 *              at the v2 standard. Every chapter keeps its baseline until
 *              its v2 batch is produced.
 *
 * Review status: all v2 content is authored and machine-checked (structure,
 * examples, answer keys, glossary-bound translations) — the seed stores it
 * as "ai-reviewed" and never higher. Human promotion to "human-reviewed"
 * and "approved" happens explicitly in the CMS (LessonEditor · Review).
 * Chapter titles and levels are NOT duplicated here — they are derived
 * from the blueprint so this manifest can never drift from the source.
 */

import type { ChapterSpec } from "../types";
import { ch01Upgrades } from "./ch-01";
import { ch02Upgrades } from "./ch-02";
import { ch03Upgrades } from "./ch-03";
import { ch04Upgrades } from "./ch-04";
import { ch05Upgrades } from "./ch-05";
import { ch06Upgrades } from "./ch-06";
import { ch07Upgrades } from "./ch-07";
import { ch08Upgrades } from "./ch-08";
import { ch09Upgrades } from "./ch-09";
import { ch10Upgrades } from "./ch-10";
import { ch11Upgrades } from "./ch-11";
import { ch12Upgrades } from "./ch-12";
import { ch13Upgrades } from "./ch-13";
import { ch14Upgrades } from "./ch-14";
import { ch15Upgrades } from "./ch-15";
import { ch16Upgrades } from "./ch-16";
import { ch17Upgrades } from "./ch-17";
import { ch18Upgrades } from "./ch-18";
import type { LessonUpgrade } from "./helpers";

export type ChapterStandard = "v2-full" | "v1-baseline";

export interface ChapterProductionEntry {
  /** Chapter number 1–56 (matches ChapterSpec.number). */
  number: number;
  standard: ChapterStandard;
  /** v2 production batch number (delivered or planned). */
  batch: number;
  /** ISO date when the v2 batch was produced (v2-full chapters only). */
  producedAt?: string;
  /** Lessons upgraded to the v2 standard in this chapter. */
  lessonsUpgraded?: number;
  notes?: string;
}

export interface ChapterProductionStatus extends ChapterProductionEntry {
  chapterId: string;
  title: string;
  levelId: string;
}

export const V2_STANDARD_DATE = "2026-11-13";
export const V2_BATCH2_DATE = "2026-11-14";
export const V2_BATCH3_DATE = "2026-11-16";
export const V2_BATCH4_DATE = "2026-11-16";
export const V2_BATCH5_DATE = "2026-11-16";
export const V2_BATCH6_DATE = "2026-11-16";

/** Delivered v2 batches: chapter id → lesson upgrades. */
export const V2_UPGRADES: Record<string, LessonUpgrade[]> = {
  "CH-01": ch01Upgrades,
  "CH-02": ch02Upgrades,
  "CH-03": ch03Upgrades,
  "CH-04": ch04Upgrades,
  "CH-05": ch05Upgrades,
  "CH-06": ch06Upgrades,
  "CH-07": ch07Upgrades,
  "CH-08": ch08Upgrades,
  "CH-09": ch09Upgrades,
  "CH-10": ch10Upgrades,
  "CH-11": ch11Upgrades,
  "CH-12": ch12Upgrades,
  "CH-13": ch13Upgrades,
  "CH-14": ch14Upgrades,
  "CH-15": ch15Upgrades,
  "CH-16": ch16Upgrades,
  "CH-17": ch17Upgrades,
  "CH-18": ch18Upgrades,
};

/** Production state per chapter (1–56), batched 1–17. */
const ENTRIES: ChapterProductionEntry[] = [
  // ---- Batch 1 — delivered (this production run) --------------------------
  { number: 1, standard: "v2-full", batch: 1, producedAt: V2_STANDARD_DATE, lessonsUpgraded: 5 },
  { number: 2, standard: "v2-full", batch: 1, producedAt: V2_STANDARD_DATE, lessonsUpgraded: 5 },
  { number: 3, standard: "v2-full", batch: 1, producedAt: V2_STANDARD_DATE, lessonsUpgraded: 5 },
  // ---- Batch 2 — delivered (literacy core) -------------------------------
  { number: 4, standard: "v2-full", batch: 2, producedAt: V2_BATCH2_DATE, lessonsUpgraded: 6 },
  { number: 5, standard: "v2-full", batch: 2, producedAt: V2_BATCH2_DATE, lessonsUpgraded: 5 },
  // ---- Batch 3 — delivered (completes Pre-A1) ----------------------------------
  { number: 6, standard: "v2-full", batch: 3, producedAt: V2_BATCH3_DATE, lessonsUpgraded: 6 },
  { number: 7, standard: "v2-full", batch: 3, producedAt: V2_BATCH3_DATE, lessonsUpgraded: 5 },
  { number: 8, standard: "v2-full", batch: 3, producedAt: V2_BATCH3_DATE, lessonsUpgraded: 6 },
  // ---- Batch 4 — delivered (A1 first half) -----------------------------------
  { number: 9, standard: "v2-full", batch: 4, producedAt: V2_BATCH4_DATE, lessonsUpgraded: 5 },
  { number: 10, standard: "v2-full", batch: 4, producedAt: V2_BATCH4_DATE, lessonsUpgraded: 5 },
  { number: 11, standard: "v2-full", batch: 4, producedAt: V2_BATCH4_DATE, lessonsUpgraded: 5 },
  { number: 12, standard: "v2-full", batch: 4, producedAt: V2_BATCH4_DATE, lessonsUpgraded: 6 },
  // ---- Batch 5 — delivered (A1 grammar core) ---------------------------------
  { number: 13, standard: "v2-full", batch: 5, producedAt: V2_BATCH5_DATE, lessonsUpgraded: 6 },
  { number: 14, standard: "v2-full", batch: 5, producedAt: V2_BATCH5_DATE, lessonsUpgraded: 5 },
  { number: 15, standard: "v2-full", batch: 5, producedAt: V2_BATCH5_DATE, lessonsUpgraded: 5 },
  // ---- Batch 6 — delivered (completes A1) ------------------------------------
  { number: 16, standard: "v2-full", batch: 6, producedAt: V2_BATCH6_DATE, lessonsUpgraded: 6 },
  { number: 17, standard: "v2-full", batch: 6, producedAt: V2_BATCH6_DATE, lessonsUpgraded: 6 },
  { number: 18, standard: "v2-full", batch: 6, producedAt: V2_BATCH6_DATE, lessonsUpgraded: 6 },
  // ---- Batches 7–9 — A2 ----------------------------------------------------
  { number: 19, standard: "v1-baseline", batch: 7 },
  { number: 20, standard: "v1-baseline", batch: 7 },
  { number: 21, standard: "v1-baseline", batch: 7 },
  { number: 22, standard: "v1-baseline", batch: 7 },
  { number: 23, standard: "v1-baseline", batch: 8 },
  { number: 24, standard: "v1-baseline", batch: 8 },
  { number: 25, standard: "v1-baseline", batch: 8 },
  { number: 26, standard: "v1-baseline", batch: 9 },
  { number: 27, standard: "v1-baseline", batch: 9 },
  { number: 28, standard: "v1-baseline", batch: 9 },
  // ---- Batches 10–12 — B1 --------------------------------------------------
  { number: 29, standard: "v1-baseline", batch: 10 },
  { number: 30, standard: "v1-baseline", batch: 10 },
  { number: 31, standard: "v1-baseline", batch: 10 },
  { number: 32, standard: "v1-baseline", batch: 11 },
  { number: 33, standard: "v1-baseline", batch: 11 },
  { number: 34, standard: "v1-baseline", batch: 11 },
  { number: 35, standard: "v1-baseline", batch: 11 },
  { number: 36, standard: "v1-baseline", batch: 12 },
  { number: 37, standard: "v1-baseline", batch: 12 },
  { number: 38, standard: "v1-baseline", batch: 12 },
  // ---- Batches 13–15 — B2 --------------------------------------------------
  { number: 39, standard: "v1-baseline", batch: 13 },
  { number: 40, standard: "v1-baseline", batch: 13 },
  { number: 41, standard: "v1-baseline", batch: 13 },
  { number: 42, standard: "v1-baseline", batch: 14 },
  { number: 43, standard: "v1-baseline", batch: 14 },
  { number: 44, standard: "v1-baseline", batch: 14 },
  { number: 45, standard: "v1-baseline", batch: 15 },
  { number: 46, standard: "v1-baseline", batch: 15 },
  { number: 47, standard: "v1-baseline", batch: 15 },
  { number: 48, standard: "v1-baseline", batch: 15 },
  // ---- Batches 16–17 — C1 --------------------------------------------------
  { number: 49, standard: "v1-baseline", batch: 16 },
  { number: 50, standard: "v1-baseline", batch: 16 },
  { number: 51, standard: "v1-baseline", batch: 16 },
  { number: 52, standard: "v1-baseline", batch: 16 },
  { number: 53, standard: "v1-baseline", batch: 17 },
  { number: 54, standard: "v1-baseline", batch: 17 },
  { number: 55, standard: "v1-baseline", batch: 17 },
  { number: 56, standard: "v1-baseline", batch: 17 },
];

/** Resolve the manifest against the blueprint (titles/levels stay in sync). */
export function buildManifest(chapters: ChapterSpec[]): ChapterProductionStatus[] {
  const byNumber = new Map(chapters.map((c) => [c.number, c]));
  return ENTRIES.map((entry) => {
    const chapter = byNumber.get(entry.number);
    return {
      ...entry,
      chapterId: chapter?.id ?? `CH-${String(entry.number).padStart(2, "0")}`,
      title: chapter?.title ?? "Unknown chapter",
      levelId: chapter?.levelId ?? "pre-a1",
    };
  });
}

/** Chapters delivered at the v2 standard, in order. */
export function v2CompletedChapterIds(): string[] {
  return ENTRIES.filter((e) => e.standard === "v2-full")
    .map((e) => `CH-${String(e.number).padStart(2, "0")}`);
}

/** Apply one chapter's lesson upgrades to its base spec (pure transformation).
 * PROMPT 57: exported so scripts/p57-check-chapter.ts can validate a chapter
 * file standalone before registration — the same merge applyV2 performs. */
export function applyUpgradesToChapter(
  chapter: ChapterSpec,
  upgrades: LessonUpgrade[],
): ChapterSpec {
  const bySlug = new Map(upgrades.map((u) => [u.slug, u]));
  return {
    ...chapter,
    lessons: chapter.lessons.map((lesson) => {
      const upgrade = bySlug.get(lesson.slug);
      if (!upgrade) return lesson;
      return {
        ...lesson,
        blocks: upgrade.blocks,
        ...(upgrade.practiceSets ? { practiceSets: upgrade.practiceSets } : {}),
        ...(upgrade.outcomes ? { outcomes: upgrade.outcomes } : {}),
        ...(upgrade.description ? { description: upgrade.description } : {}),
        ...(upgrade.minutes ? { minutes: upgrade.minutes } : {}),
        ...(upgrade.assignment ? { assignment: upgrade.assignment } : {}),
        ...(upgrade.homework ? { homework: upgrade.homework } : {}),
      };
    }),
  };
}

/** Apply v2 lesson upgrades to the base chapters (pure transformation). */
export function applyV2(chapters: ChapterSpec[]): ChapterSpec[] {
  return chapters.map((chapter) => {
    const upgrades = V2_UPGRADES[chapter.id];
    if (!upgrades) return chapter;
    return applyUpgradesToChapter(chapter, upgrades);
  });
}
