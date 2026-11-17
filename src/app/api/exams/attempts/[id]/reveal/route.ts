import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { revealAnswer } from "@/lib/exams/mock-engine";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/exams/attempts/[id]/reveal — untimed learning practice only:
 * after answering one objective item, reveal its verdict, explanation and
 * answer key. Refused under exam timing and for rubric tasks.
 * Body: { questionId }
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const body = await readJson<{ questionId?: unknown }>(req);
  const questionId = typeof body?.questionId === "string" ? body.questionId : "";
  if (!questionId) return jsonError("Missing questionId.", 422);

  const result = await revealAnswer(id, user.id, questionId);
  if (!result.ok) return jsonError(result.reason, 409);
  return json({ reveal: result });
}
