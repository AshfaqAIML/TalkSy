import { db } from "@/lib/db";
import { getExercisesByIds, getLesson } from "@/data/curriculum";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import {
  buildAssessmentSummary,
  gradeAssessment,
} from "@/lib/engine/assessment";
import { validateAnswer } from "@/lib/engine/validators";
import { computeLessonStatus, parseSectionsCompleted } from "@/lib/engine/progress";

interface SubmitBody {
  answers?: unknown;
}

interface SubmittedAnswer {
  exerciseId: string;
  answer: unknown;
}

/**
 * POST /api/assessments/[id]/submit
 * Grade every answer server-side, finalize the run, record per-question
 * attempts, update stats + lesson completion, and return the performance
 * summary with per-question feedback.
 */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { id } = await ctx.params;
  const run = await db.assessmentResult.findUnique({ where: { id } });
  if (!run || run.userId !== user.id) return jsonError("Assessment not found.", 404);
  if (run.status === "completed") {
    return jsonError("This assessment was already submitted.", 409);
  }

  const body = await readJson<SubmitBody>(req);
  const rawAnswers = Array.isArray(body?.answers) ? (body!.answers as unknown[]) : [];
  const answers: SubmittedAnswer[] = rawAnswers
    .map((a) => {
      const item = a as { exerciseId?: unknown; answer?: unknown };
      return {
        exerciseId: typeof item?.exerciseId === "string" ? item.exerciseId : "",
        answer: item?.answer,
      };
    })
    .filter((a) => a.exerciseId.length > 0);

  const lesson = getLesson(run.lessonSlug);
  if (!lesson?.assessment) return jsonError("Lesson has no assessment.", 500);

  const questionIds = parseSectionsCompleted(run.questionIds); // JSON string[]
  const questions = getExercisesByIds(questionIds);
  const grade = gradeAssessment(questions, answers, lesson.assessment.passScore);
  const summary = buildAssessmentSummary(grade, lesson.assessment.passScore);

  // Persist one attempt row per question (assessment context).
  for (const q of grade.questions) {
    const exercise = questions.find((ex) => ex.id === q.exerciseId);
    if (!exercise) continue;
    await db.exerciseAttempt.create({
      data: {
        userId: user.id,
        exerciseId: q.exerciseId,
        lessonSlug: run.lessonSlug,
        type: exercise.type,
        difficulty: exercise.difficulty,
        skill: exercise.skill,
        context: "assessment",
        isCorrect: q.correct,
        score: q.score,
        hintsUsed: 0,
        durationMs: 0,
        answer: JSON.stringify(
          answers.find((a) => a.exerciseId === q.exerciseId)?.answer ?? null,
        ).slice(0, 2000),
      },
    });
    await updateStats(user.id, {
      correct: q.correct,
      hintsUsed: 0,
      durationMs: 0,
      type: exercise.type,
      difficulty: exercise.difficulty,
      skill: exercise.skill,
    });
  }

  await db.assessmentResult.update({
    where: { id: run.id },
    data: {
      status: "completed",
      score: grade.score,
      passed: grade.passed,
      total: grade.total,
      correct: grade.correct,
      detail: JSON.stringify(grade.questions),
      completedAt: new Date(),
    },
  });

  // Recompute lesson completion (assessment pass may complete the lesson).
  const progressRow = await db.lessonProgress.findUnique({
    where: {
      userId_lessonSlug: { userId: user.id, lessonSlug: run.lessonSlug },
    },
  });
  const sectionsCompleted = parseSectionsCompleted(
    progressRow?.sectionsCompleted ?? "[]",
  );
  const completion = computeLessonStatus(lesson, { sectionsCompleted }, grade.passed);
  if (progressRow && completion.completed && progressRow.status !== "completed") {
    await db.lessonProgress.update({
      where: { id: progressRow.id },
      data: { status: "completed", completedAt: new Date() },
    });
  }

  // Per-question feedback for the review panel.
  const review = grade.questions.map((q) => {
    const exercise = questions.find((ex) => ex.id === q.exerciseId)!;
    const submitted = answers.find((a) => a.exerciseId === q.exerciseId)?.answer;
    return {
      exerciseId: q.exerciseId,
      type: q.type,
      difficulty: q.difficulty,
      skill: q.skill,
      correct: q.correct,
      invalid: q.invalid,
      prompt: exercise.prompt,
      submitted: submitted ?? null,
      feedback: exercise.feedback,
    };
  });

  return json({
    assessmentId: run.id,
    lessonSlug: run.lessonSlug,
    lessonTitle: lesson.title,
    summary,
    review,
    completion,
  });
}
