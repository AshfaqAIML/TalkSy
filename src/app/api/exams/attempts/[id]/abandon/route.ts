import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { abandonAttempt } from "@/lib/exams/mock-engine";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/exams/attempts/[id]/abandon — record an unfinished attempt.
 * Every saved response is preserved, the attempt is closed as "abandoned"
 * (never scored), and no result report is produced for it — the answer key
 * must stay unreachable for an un-submitted timed simulation.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const result = await abandonAttempt(id, user.id);
  if (!result.ok) return jsonError(result.reason, 409);
  return json({
    abandoned: true,
    savedResponses: result.savedResponses,
    note: result.note,
  });
}
