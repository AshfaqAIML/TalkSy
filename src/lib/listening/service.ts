/**
 * Listening Lab persistence service — progress rows, completion rules,
 * DTO builders shared by the API routes.
 *
 * No auto-mastery: an activity is "completed" only when every exercise has
 * been answered correctly at least once. Opening an activity only ever
 * creates an "in-progress" row. The score is computed from first-try
 * results, so retries improve completion but not the recorded score.
 */

import { db } from "@/lib/db";
import { listeningActivities, bandOfActivity, stageById } from "@/data/listening";
import type { ListeningActivity } from "@/data/listening/types";
import { resolveLabLinks } from "@/data/labs/curriculum-links";
import { LAB_BANDS, recommendLabBand, type LabBand } from "@/lib/labs/level";

export interface ListeningProgressDto {
  activityId: string;
  status: "in-progress" | "completed";
  exercisesCompleted: string[];
  completedCount: number;
  totalExercises: number;
  firstTryCorrect: string[];
  scorePercent: number;
  bestScore: number;
  runsCompleted: number;
  transcriptUnlocked: boolean;
  completedAt: string | null;
}

type ProgressRow = Awaited<ReturnType<typeof db.listeningProgress.findUnique>>;

function parseStringArray(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function toListeningProgressDto(
  row: NonNullable<ProgressRow>,
  activity: ListeningActivity,
): ListeningProgressDto {
  const exercisesCompleted = parseStringArray(row.exercisesCompleted);
  const firstTryCorrect = parseStringArray(row.firstTryCorrect);
  const status = row.status === "completed" ? "completed" : "in-progress";
  return {
    activityId: row.activityId,
    status,
    exercisesCompleted,
    completedCount: exercisesCompleted.length,
    totalExercises: activity.exercises.length,
    firstTryCorrect,
    scorePercent:
      activity.exercises.length === 0
        ? 0
        : Math.round((firstTryCorrect.length / activity.exercises.length) * 100),
    bestScore: row.bestScore,
    runsCompleted: row.runsCompleted,
    transcriptUnlocked: activity.transcriptPolicy === "open" || status === "completed",
    completedAt: row.completedAt?.toISOString() ?? null,
  };
}

/** Create the progress row on first open (in-progress only). */
export async function ensureListeningProgress(userId: string, activityId: string) {
  const existing = await db.listeningProgress.findUnique({
    where: { userId_activityId: { userId, activityId } },
  });
  if (existing) return existing;
  return db.listeningProgress.create({ data: { userId, activityId } });
}

/**
 * Record one graded exercise submission:
 * - the route appends every attempt to ListeningAttempt;
 * - first correct attempt per exercise marks it completed (exercisesCompleted);
 * - the caller tells us whether this submission was the exercise's FIRST
 *   attempt (correct or not) — first-try correctness decides the score;
 * - when all exercises are completed, the activity completes (and a locked
 *   transcript unlocks).
 */
export async function applyListeningCheck(
  userId: string,
  activity: ListeningActivity,
  exerciseId: string,
  isCorrect: boolean,
  wasFirstTry: boolean,
): Promise<NonNullable<ProgressRow>> {
  const row = await ensureListeningProgress(userId, activity.id);
  const exercisesCompleted = new Set(parseStringArray(row.exercisesCompleted));
  const firstTryCorrect = new Set(parseStringArray(row.firstTryCorrect));

  if (isCorrect) exercisesCompleted.add(exerciseId);
  if (wasFirstTry && isCorrect) firstTryCorrect.add(exerciseId);

  const allDone = activity.exercises.every((e) => exercisesCompleted.has(e.id));
  const total = activity.exercises.length;
  const bestScore =
    total === 0 ? 0 : Math.round((firstTryCorrect.size / total) * 100) / 100;

  const status = allDone ? "completed" : "in-progress";
  const data = {
    exercisesCompleted: JSON.stringify([...exercisesCompleted]),
    firstTryCorrect: JSON.stringify([...firstTryCorrect]),
    bestScore,
    runsCompleted: allDone && row.status !== "completed" ? row.runsCompleted + 1 : row.runsCompleted,
    status,
    completedAt: allDone && row.status !== "completed" ? new Date() : row.completedAt,
  };

  return db.listeningProgress.update({ where: { id: row.id }, data });
}

/** Library listing payload (stages + activity metadata + progress map). */
export async function listeningLibraryPayload(userId: string) {
  const rows = await db.listeningProgress.findMany({ where: { userId } });
  const rowByActivity = new Map(rows.map((r) => [r.activityId, r]));

  // Band recommendation: completed activities only (never mere opens).
  const bandStats = LAB_BANDS.map((band) => {
    const bandActivities = listeningActivities.filter((a) => bandOfActivity(a) === band);
    return {
      band,
      total: bandActivities.length,
      completed: bandActivities.filter(
        (a) => rowByActivity.get(a.id)?.status === "completed",
      ).length,
    };
  });

  return {
    activities: listeningActivities.map((activity) => {
      const row = rowByActivity.get(activity.id);
      const exercisesCompleted = row ? parseStringArray(row.exercisesCompleted) : [];
      const firstTryCorrect = row ? parseStringArray(row.firstTryCorrect) : [];
      const status = row?.status === "completed" ? "completed" : "in-progress";
      return {
        id: activity.id,
        slug: activity.slug,
        stage: activity.stage,
        band: bandOfActivity(activity),
        title: activity.title,
        description: activity.description,
        estimatedMinutes: activity.estimatedMinutes,
        tags: activity.tags ?? [],
        segmentCount: activity.segments.length,
        exerciseCount: activity.exercises.length,
        formats: [...new Set(activity.exercises.map((e) => e.format))],
        transcriptPolicy: activity.transcriptPolicy,
        speakerCount: activity.speakers?.length ?? 0,
        links: resolveLabLinks("listening", activity.slug),
        progress: row
          ? {
              status,
              completedCount: exercisesCompleted.length,
              totalExercises: activity.exercises.length,
              scorePercent:
                activity.exercises.length === 0
                  ? 0
                  : Math.round((firstTryCorrect.length / activity.exercises.length) * 100),
              transcriptUnlocked:
                activity.transcriptPolicy === "open" || status === "completed",
              completedAt: row.completedAt?.toISOString() ?? null,
            }
          : null,
      };
    }),
    recommendation: recommendLabBand(bandStats),
  };
}

/**
 * The listening history payload: recent graded answers (with the exercise
 * prompt and the right answer, now that grading is over) plus a per-activity
 * rollup for the history tab.
 */
export async function listeningHistoryPayload(userId: string, limit = 30) {
  const [attempts, progressRows] = await Promise.all([
    db.listeningAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit,
    }),
    db.listeningProgress.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  const activityById = new Map(listeningActivities.map((a) => [a.id, a]));
  const exerciseById = new Map<string, { prompt: string; correctAnswer: string }>();
  for (const activity of listeningActivities) {
    for (const exercise of activity.exercises) {
      exerciseById.set(`${activity.id}:${exercise.id}`, {
        prompt: exercise.prompt,
        correctAnswer: exercise.feedback.correctAnswer,
      });
    }
  }

  return {
    attempts: attempts.map((row) => {
      const activity = activityById.get(row.activityId);
      const meta = exerciseById.get(`${row.activityId}:${row.exerciseId}`);
      return {
        id: row.id,
        activityId: row.activityId,
        activitySlug: activity?.slug ?? null,
        activityTitle: activity?.title ?? "Unknown activity",
        stage: activity?.stage ?? null,
        band: activity ? bandOfActivity(activity) : null,
        exercisePrompt: meta?.prompt ?? null,
        correctAnswer: meta?.correctAnswer ?? null,
        format: row.format,
        isCorrect: row.isCorrect,
        hintsUsed: row.hintsUsed,
        createdAt: row.createdAt.toISOString(),
      };
    }),
    activities: progressRows.map((row) => {
      const activity = activityById.get(row.activityId);
      const exercisesCompleted = parseStringArray(row.exercisesCompleted);
      const firstTryCorrect = parseStringArray(row.firstTryCorrect);
      return {
        activityId: row.activityId,
        activitySlug: activity?.slug ?? null,
        title: activity?.title ?? "Unknown activity",
        stage: activity?.stage ?? null,
        stageName: activity ? (stageById.get(activity.stage)?.name ?? null) : null,
        band: activity ? bandOfActivity(activity) : null,
        status: row.status,
        completedCount: exercisesCompleted.length,
        totalExercises: activity?.exercises.length ?? 0,
        scorePercent:
          activity && activity.exercises.length > 0
            ? Math.round((firstTryCorrect.length / activity.exercises.length) * 100)
            : 0,
        bestScore: row.bestScore,
        runsCompleted: row.runsCompleted,
        updatedAt: row.updatedAt.toISOString(),
        completedAt: row.completedAt?.toISOString() ?? null,
      };
    }),
  };
}

/** The next incomplete activity (registry order) after the current one. */
export async function nextListeningActivity(
  userId: string,
  currentActivityId: string,
): Promise<{ slug: string; title: string; stage: string } | null> {
  const index = listeningActivities.findIndex((a) => a.id === currentActivityId);
  if (index < 0) return null;
  const candidates = listeningActivities.slice(index + 1);
  if (candidates.length === 0) return null;
  const rows = await db.listeningProgress.findMany({
    where: { userId, activityId: { in: candidates.map((a) => a.id) } },
  });
  const completed = new Set(
    rows.filter((r) => r.status === "completed").map((r) => r.activityId),
  );
  const next = candidates.find((a) => !completed.has(a.id));
  return next ? { slug: next.slug, title: next.title, stage: next.stage } : null;
}
