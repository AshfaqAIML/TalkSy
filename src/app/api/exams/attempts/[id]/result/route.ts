import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";
import { getAttemptResult } from "@/lib/exams/mock-engine";

type Ctx = { params: Promise<{ id: string }> };

/**
 * GET /api/exams/attempts/[id]/result — the scored result: per-section
 * bands, overall score, strengths/weaknesses and per-question outcomes.
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const result = await getAttemptResult(id, user.id);
  if (!result) return jsonError("Result not found.", 404);
  return Response.json({ result });
}
