import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { finishSession, PracticeError } from "@/lib/practice/sessions";

/**
 * POST /api/practice/sessions/[id]/finish — finalise a practice-style session
 * (guided / independent / revision / mixed / weak-area). Each answer was
 * already graded and recorded through /api/exercises/attempt with the
 * sessionId; finishing compiles those attempts into the report.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  try {
    const report = await finishSession(user.id, id);
    return json({ report });
  } catch (error) {
    if (error instanceof PracticeError) return jsonError(error.message, error.status);
    console.error("[practice] finish failed:", error);
    return jsonError("Could not finish this session.", 500);
  }
}
