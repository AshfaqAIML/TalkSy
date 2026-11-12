import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { Difficulty, ExerciseType, Skill } from "@/data/curriculum/types";

/** JSON response helper. */
export function json<T>(data: T, status = 200): NextResponse {
  return NextResponse.json(data, { status });
}

export function jsonError(message: string, status = 400): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

/** Safely read a JSON body (returns null on malformed input). */
export async function readJson<T = Record<string, unknown>>(
  req: Request,
): Promise<T | null> {
  try {
    return (await req.json()) as T;
  } catch {
    return null;
  }
}

interface CounterBucket {
  attempts: number;
  correct: number;
}

function bumpBucket(jsonRaw: string, key: string, correct: boolean): string {
  let map: Record<string, CounterBucket> = {};
  try {
    map = JSON.parse(jsonRaw) as Record<string, CounterBucket>;
  } catch {
    map = {};
  }
  const bucket = map[key] ?? { attempts: 0, correct: 0 };
  bucket.attempts += 1;
  if (correct) bucket.correct += 1;
  map[key] = bucket;
  return JSON.stringify(map);
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey(): string {
  return new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
}

/**
 * Update the aggregated UserStats row for a user after one attempt.
 * Keeps a daily streak counter and per-type / per-difficulty / per-skill
 * accuracy buckets.
 */
export async function updateStats(
  userId: string,
  input: {
    correct: boolean;
    hintsUsed: number;
    durationMs: number;
    type: ExerciseType | string;
    difficulty: Difficulty | string;
    skill: Skill | string;
  },
): Promise<void> {
  const existing = await db.userStats.findUnique({ where: { userId } });
  const today = todayKey();

  let streakDays = 1;
  if (existing?.lastActiveDay === today) {
    streakDays = existing.streakDays;
  } else if (existing?.lastActiveDay === yesterdayKey()) {
    streakDays = existing.streakDays + 1;
  }

  const data = {
    totalAttempts: (existing?.totalAttempts ?? 0) + 1,
    correctAttempts: (existing?.correctAttempts ?? 0) + (input.correct ? 1 : 0),
    hintsUsed: (existing?.hintsUsed ?? 0) + input.hintsUsed,
    timeSpentMs: (existing?.timeSpentMs ?? 0) + input.durationMs,
    byType: bumpBucket(existing?.byType ?? "{}", input.type, input.correct),
    byDifficulty: bumpBucket(
      existing?.byDifficulty ?? "{}",
      input.difficulty,
      input.correct,
    ),
    bySkill: bumpBucket(existing?.bySkill ?? "{}", input.skill, input.correct),
    streakDays,
    lastActiveDay: today,
  };

  if (existing) {
    await db.userStats.update({ where: { userId }, data });
  } else {
    await db.userStats.create({ data: { userId, ...data } });
  }
}
