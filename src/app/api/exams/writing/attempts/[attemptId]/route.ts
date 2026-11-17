import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { writingTaskBySlug } from "@/data/exams/ielts/writing-bank";
import { reopenWritingAttempt } from "@/lib/exams/writing-bank/service";

type Ctx = { params: Promise<{ attemptId: string }> };

/**
 * GET /api/exams/writing/attempts/[attemptId] — reopen a past attempt
 * (PROMPT 46, Part F): the stored evaluation (criteria, feedback,
 * evidence) plus the task's revealed teaching content, scoped to the
 * owning user. Another user's attempt id simply 404s.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const user = await getSessionUser(_req);
  if (!user) return jsonError("Log in to reopen your attempts.", 401);
  const { attemptId } = await ctx.params;

  const reopened = await reopenWritingAttempt(user.id, attemptId);
  if (!reopened) return jsonError("Attempt not found.", 404);

  const task = writingTaskBySlug(reopened.attempt.taskSlug);
  return json({
    attempt: reopened.attempt,
    evaluation: reopened.evaluation,
    task: task
      ? {
          slug: task.slug,
          title: task.title,
          channel: task.channel,
          taskType: task.taskType,
          family: task.family,
          planningNotes: task.planningNotes,
          modelAnswer: task.modelAnswer,
          analysis: task.analysis,
          levelSamples: task.levelSamples,
          vocabularyBank: task.vocabularyBank,
        }
      : null,
  });
}
