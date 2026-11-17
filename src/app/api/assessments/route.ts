import { db } from "@/lib/db";
import { getExercisesByIds, getLesson } from "@/data/curriculum";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { sanitizeExercises } from "@/lib/engine/sanitize";
import { selectAssessmentQuestions } from "@/lib/engine/assessment";

interface StartBody {
  lessonSlug?: unknown;
}

/**
 * POST /api/assessments
 * Start an end-of-lesson assessment: deterministically select questions from
 * the lesson's approved bank, persist a pending run, and return sanitized
 * questions (no answers).
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<StartBody>(req);
  const lessonSlug = typeof body?.lessonSlug === "string" ? body.lessonSlug : "";
  if (!lessonSlug) return jsonError("lessonSlug is required.", 422);

  const lesson = getLesson(lessonSlug);
  if (!lesson) return jsonError("Lesson not found.", 404);
  if (!lesson.assessment) {
    return jsonError("This lesson has no assessment.", 422);
  }

  const spec = lesson.assessment;
  const bank = getExercisesByIds(spec.bank);
  if (bank.length < spec.questionCount) {
    return jsonError("Assessment bank is too small for this lesson.", 500);
  }

  // Count previous completed attempts to vary the draw between retries.
  const previous = await db.assessmentResult.count({
    where: { userId: user.id, lessonSlug, status: "completed" },
  });
  const seed = `${user.id}:${lessonSlug}:${previous}`;
  const { exerciseIds } = selectAssessmentQuestions(bank, spec.questionCount, seed);

  const run = await db.assessmentResult.create({
    data: {
      userId: user.id,
      lessonSlug,
      questionIds: JSON.stringify(exerciseIds),
      total: exerciseIds.length,
    },
  });

  const questions = sanitizeExercises(getExercisesByIds(exerciseIds));

  return json(
    {
      assessmentId: run.id,
      lessonSlug,
      passScore: spec.passScore,
      total: questions.length,
      questions,
    },
    201,
  );
}
