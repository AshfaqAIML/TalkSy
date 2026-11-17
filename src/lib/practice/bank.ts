/**
 * PROMPT 36 — the practice-zone view of the question bank.
 *
 * The bank IS the CMS question table (CmsQuestion): one authoring pipeline,
 * one review chain, one grading engine. This module adds the chapter /
 * lesson / topic metadata the practice assembly needs (the PROMPT 36 columns)
 * and provides safe, shape-checked access for the practice services.
 */

import { db } from "@/lib/db";
import type { Difficulty, Exercise, ExerciseType, Skill } from "@/data/curriculum/types";

export interface BankQuestion {
  id: string;
  slug: string;
  chapterSlug: string;
  lessonSlug: string;
  /** Primary topic tag (first tag) — used for topic-wise reporting. */
  topic: string;
  tags: string[];
  exercise: Exercise;
}

export interface BankFilter {
  chapterSlugs?: string[];
  skills?: Skill[];
  difficulties?: Difficulty[];
  types?: ExerciseType[];
}

function parseTags(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((t): t is string => typeof t === "string" && t.length > 0) : [];
  } catch {
    return [];
  }
}

function toBankQuestion(row: {
  id: string;
  slug: string;
  type: string;
  skill: string;
  difficulty: string;
  tags: string;
  data: string;
  chapterSlug: string | null;
  lessonSlug: string | null;
}): BankQuestion | null {
  if (!row.chapterSlug || !row.lessonSlug) return null;
  try {
    const exercise = JSON.parse(row.data) as Exercise;
    if (!exercise || typeof exercise.type !== "string") return null;
    if (exercise.id !== row.id) return null; // stale payload — never serve it
    const tags = parseTags(row.tags);
    return {
      id: row.id,
      slug: row.slug,
      chapterSlug: row.chapterSlug,
      lessonSlug: row.lessonSlug,
      topic: tags[0] ?? row.chapterSlug,
      tags,
      exercise,
    };
  } catch {
    return null;
  }
}

/** Query published, chapter-organised questions for practice assembly. */
export async function queryBank(filter: BankFilter = {}): Promise<BankQuestion[]> {
  const where: Record<string, unknown> = {
    status: "published",
    chapterSlug: { not: null },
  };
  if (filter.chapterSlugs && filter.chapterSlugs.length > 0) {
    where.chapterSlug = { in: filter.chapterSlugs };
  }
  if (filter.skills && filter.skills.length > 0) {
    where.skill = { in: filter.skills };
  }
  if (filter.difficulties && filter.difficulties.length > 0) {
    where.difficulty = { in: filter.difficulties };
  }
  if (filter.types && filter.types.length > 0) {
    where.type = { in: filter.types };
  }
  const rows = await db.cmsQuestion.findMany({
    where: where as never,
    select: {
      id: true,
      slug: true,
      type: true,
      skill: true,
      difficulty: true,
      tags: true,
      data: true,
      chapterSlug: true,
      lessonSlug: true,
    },
    orderBy: { slug: "asc" },
  });
  return rows
    .map(toBankQuestion)
    .filter((q): q is BankQuestion => q !== null);
}

/** Chapter pools for a whole course in one query. */
export async function queryBankByCourse(chapterSlugs: string[]): Promise<BankQuestion[]> {
  if (chapterSlugs.length === 0) return [];
  return queryBank({ chapterSlugs });
}

/** Chapter slugs of the programme that actually have bank questions. */
export async function chaptersWithQuestions(): Promise<Map<string, number>> {
  const rows = await db.cmsQuestion.groupBy({
    by: ["chapterSlug"],
    where: { status: "published", chapterSlug: { not: null } },
    _count: true,
  });
  const map = new Map<string, number>();
  for (const row of rows) {
    if (row.chapterSlug) map.set(row.chapterSlug, row._count);
  }
  return map;
}

/** Distinct (chapter, lesson) coverage of a pool — used by chapter-test assembly. */
export function poolByLesson(pool: BankQuestion[]): Map<string, BankQuestion[]> {
  const map = new Map<string, BankQuestion[]>();
  for (const q of pool) {
    const list = map.get(q.lessonSlug) ?? [];
    list.push(q);
    map.set(q.lessonSlug, list);
  }
  return map;
}
