import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { writingTaskBySlug } from "@/data/exams/ielts/writing-bank";
import { getWritingDraft, listWritingAttempts, toSafeWritingTask } from "@/lib/exams/writing-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/writing/bank/[slug] — the studio bundle: the safe task
 * (prompt + visual + bullets; never the model answer or requirement
 * keywords), the learner's autosaved draft and their attempt history.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const task = writingTaskBySlug(slug);
  if (!task) return jsonError("Task not found.", 404);

  const user = await getSessionUser(_req);
  const [draft, attempts] = user
    ? await Promise.all([getWritingDraft(user.id, slug), listWritingAttempts(user.id, slug)])
    : [null, []];

  return json({
    task: toSafeWritingTask(task),
    ...(user ? { draft, attempts } : { draft: null, attempts: [] }),
  });
}
