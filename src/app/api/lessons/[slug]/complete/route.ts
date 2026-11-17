import { db } from "@/lib/db";
import { ok, fail, requireUser } from "@/lib/api";
import { findLesson, isGradableExercise } from "@/data/curriculum/types";
import { curriculum } from "@/data/curriculum";
import {
  computeLessonCompletion,
  recordActivity,
  XP_LESSON_BONUS,
} from "@/lib/progress";

export const runtime = "nodejs";

/**
 * POST /api/lessons/[slug]/complete
 * Marks a lesson complete. XP and accuracy are computed from the attempts
 * already recorded on the server (client cannot inflate them).
 */
export async function POST(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const auth = await requireUser();
  if (!auth.ok) return auth.response;
  const { slug } = await params;
  const userId = auth.user.id;

  const lesson = findLesson(slug, curriculum);
  if (!lesson) return fail("Lesson not found.", 404);

  const gradableIds = lesson.exercises.filter(isGradableExercise).map((e) => e.id);
  const result = await computeLessonCompletion(userId, slug, gradableIds);

  const existing = await db.lessonCompletion.findUnique({
    where: { userId_lessonSlug: { userId, lessonSlug: slug } },
  });

  await db.lessonCompletion.upsert({
    where: { userId_lessonSlug: { userId, lessonSlug: slug } },
    create: {
      userId,
      lessonSlug: slug,
      bestScore: result.accuracy,
      timesCompleted: 1,
    },
    update: {
      bestScore: Math.max(existing?.bestScore ?? 0, result.accuracy),
      timesCompleted: { increment: 1 },
      lastCompletedAt: new Date(),
    },
  });

  // The completion bonus adds XP only on the very first completion.
  if (result.firstCompletion) {
    // computeLessonCompletion already includes the bonus for first completions
    // in xpEarned; exercise XP was already granted per-attempt, so here we
    // only add the bonus delta to the user and activity tables.
    await db.user.update({
      where: { id: userId },
      data: { xp: { increment: XP_LESSON_BONUS } },
    });
    await recordActivity(userId, {
      xp: XP_LESSON_BONUS,
      lessonsCompleted: 1,
    });
  } else {
    await recordActivity(userId, { lessonsCompleted: 1 });
  }

  // Seed the lesson's vocabulary as "encountered" (strength 1) so the words
  // the learner studied on the cards enter the practice rotation. Existing
  // strength (earned by answering listening exercises) is never lowered.
  for (const word of lesson.vocab) {
    await db.vocabularyProgress
      .upsert({
        where: { userId_wordId: { userId, wordId: word.id } },
        create: { userId, wordId: word.id, strength: 1 },
        update: {}, // keep earned strength
      })
      .catch(() => {});
  }

  return ok({
    completed: true,
    xpEarned: result.xpEarned,
    accuracy: result.accuracy,
    firstCompletion: result.firstCompletion,
    bestScore: Math.max(existing?.bestScore ?? 0, result.accuracy),
  });
}
