/**
 * Reading Room persistence service — progress rows, completion rules,
 * DTO builders shared by the API routes.
 *
 * No auto-mastery: a text is "completed" only when every paragraph has been
 * read AND at least one comprehension run passed. Opening a text only ever
 * creates an "in-progress" row.
 */

import { db } from "@/lib/db";
import { readingTexts } from "@/data/reading";
import type { ReadingText } from "@/data/reading/types";
import { resolveLabLinks } from "@/data/labs/curriculum-links";
import { LAB_BANDS, recommendLabBand } from "@/lib/labs/level";

export interface ReadingProgressDto {
  textId: string;
  status: "in-progress" | "completed";
  paragraphsRead: string[];
  readCount: number;
  totalParagraphs: number;
  lastParagraphId: string | null;
  bookmarked: boolean;
  bestRunScore: number;
  runsCompleted: number;
  completedAt: string | null;
}

type ProgressRow = Awaited<ReturnType<typeof db.readingProgress.findUnique>>;

export function toReadingProgressDto(
  row: NonNullable<ProgressRow>,
  text: ReadingText,
): ReadingProgressDto {
  let paragraphsRead: string[] = [];
  try {
    paragraphsRead = JSON.parse(row.paragraphsRead) as string[];
  } catch {
    paragraphsRead = [];
  }
  return {
    textId: row.textId,
    status: row.status === "completed" ? "completed" : "in-progress",
    paragraphsRead,
    readCount: new Set(paragraphsRead).size,
    totalParagraphs: text.paragraphs.length,
    lastParagraphId: row.lastParagraphId,
    bookmarked: row.bookmarked,
    bestRunScore: row.bestRunScore,
    runsCompleted: row.runsCompleted,
    completedAt: row.completedAt?.toISOString() ?? null,
  };
}

/** Create the progress row on first open (in-progress only — never completed). */
export async function ensureReadingProgress(userId: string, textId: string) {
  const existing = await db.readingProgress.findUnique({
    where: { userId_textId: { userId, textId } },
  });
  if (existing) return existing;
  return db.readingProgress.create({ data: { userId, textId } });
}

/**
 * Recompute completion: all paragraphs read + a passed run.
 * Returns the fresh row.
 */
export async function recomputeReadingCompletion(userId: string, text: ReadingText) {
  const row = await ensureReadingProgress(userId, text.id);
  if (row.status === "completed") return row;

  let paragraphsRead: string[] = [];
  try {
    paragraphsRead = JSON.parse(row.paragraphsRead) as string[];
  } catch {
    paragraphsRead = [];
  }
  const allRead =
    new Set(paragraphsRead).size >= text.paragraphs.length &&
    text.paragraphs.every((p) => paragraphsRead.includes(p.id));
  if (!allRead) return row;

  const passedRun = await db.readingRun.findFirst({
    where: { userId, textId: text.id, passed: true, status: "completed" },
  });
  if (!passedRun) return row;

  return db.readingProgress.update({
    where: { id: row.id },
    data: { status: "completed", completedAt: new Date() },
  });
}

/** Per-skill accuracy across a user's reading attempts. */
export async function readingSkillStats(userId: string) {
  const attempts = await db.readingAttempt.findMany({ where: { userId } });
  const bySkill = new Map<string, { attempts: number; correct: number }>();
  for (const attempt of attempts) {
    const bucket = bySkill.get(attempt.skill) ?? { attempts: 0, correct: 0 };
    bucket.attempts += 1;
    if (attempt.isCorrect) bucket.correct += 1;
    bySkill.set(attempt.skill, bucket);
  }
  return [...bySkill.entries()].map(([skill, counts]) => ({ skill, ...counts }));
}

/** Library listing payload (levels + text metadata + user progress map). */
export async function readingLibraryPayload(userId: string) {
  const rows = await db.readingProgress.findMany({ where: { userId } });
  const runs = await db.readingRun.findMany({
    where: { userId, status: "completed" },
    select: { textId: true, score: true, passed: true, correct: true, total: true },
  });
  const rowByText = new Map(rows.map((r) => [r.textId, r]));

  // Level recommendation: completed texts only (never mere opens).
  const bandStats = LAB_BANDS.map((band) => {
    const bandTexts = readingTexts.filter((t) => t.level === band);
    return {
      band,
      total: bandTexts.length,
      completed: bandTexts.filter(
        (t) => rowByText.get(t.id)?.status === "completed",
      ).length,
    };
  });

  return {
    texts: readingTexts.map((text) => {
      const row = rowByText.get(text.id);
      let readCount = 0;
      if (row) {
        try {
          readCount = new Set(JSON.parse(row.paragraphsRead) as string[]).size;
        } catch {
          readCount = 0;
        }
      }
      const bestRun = runs
        .filter((r) => r.textId === text.id)
        .sort((a, b) => b.score - a.score)[0];
      return {
        id: text.id,
        slug: text.slug,
        level: text.level,
        category: text.category,
        title: text.title,
        description: text.description,
        estimatedMinutes: text.estimatedMinutes,
        tags: text.tags ?? [],
        illustration: text.illustration ?? null,
        paragraphCount: text.paragraphs.length,
        questionCount: text.questions.length,
        hasIllustration: Boolean(text.illustration),
        links: resolveLabLinks("reading", text.slug),
        progress: row
          ? {
              status: row.status === "completed" ? "completed" : "in-progress",
              readCount,
              totalParagraphs: text.paragraphs.length,
              bookmarked: row.bookmarked,
              bestRunScore: row.bestRunScore,
              bestRunPassed: bestRun?.passed ?? false,
              completedAt: row.completedAt?.toISOString() ?? null,
            }
          : null,
      };
    }),
    skillStats: await readingSkillStats(userId),
    recommendation: recommendLabBand(bandStats),
  };
}

/** The next incomplete text (registry order) after the current one. */
export async function nextReadingText(
  userId: string,
  currentTextId: string,
): Promise<{ slug: string; title: string; level: string } | null> {
  const index = readingTexts.findIndex((t) => t.id === currentTextId);
  if (index < 0) return null;
  const candidates = readingTexts.slice(index + 1);
  if (candidates.length === 0) return null;
  const rows = await db.readingProgress.findMany({
    where: { userId, textId: { in: candidates.map((t) => t.id) } },
  });
  const completed = new Set(
    rows.filter((r) => r.status === "completed").map((r) => r.textId),
  );
  const next = candidates.find((t) => !completed.has(t.id));
  return next ? { slug: next.slug, title: next.title, level: next.level } : null;
}
