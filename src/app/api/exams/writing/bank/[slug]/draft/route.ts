import { z } from "zod";
import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { writingTaskBySlug } from "@/data/exams/ielts/writing-bank";
import { saveWritingDraft } from "@/lib/exams/writing-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

const draftSchema = z.object({
  content: z.string().max(40000),
});

/**
 * POST /api/exams/writing/bank/[slug]/draft — autosave the studio draft
 * (Part F: "draft saving"). One row per learner per task, upserted.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to save drafts.", 401);
  const { slug } = await ctx.params;
  const task = writingTaskBySlug(slug);
  if (!task) return jsonError("Task not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = draftSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid draft payload.", 400);

  const draft = await saveWritingDraft(user.id, slug, parsed.data.content);
  return json({ draft });
}
