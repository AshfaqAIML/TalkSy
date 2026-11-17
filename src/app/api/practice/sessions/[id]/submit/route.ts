import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { PracticeError, submitSession } from "@/lib/practice/sessions";

interface SubmitBody {
  answers?: unknown;
}

/**
 * POST /api/practice/sessions/[id]/submit — batch grading for
 * assessment-style sessions (chapter tests, course assessments, timed
 * challenges). The server grades every answer, records one attempt per
 * question linked to the session, and returns the full report.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;

  const body = await readJson<SubmitBody>(req);
  const rawAnswers = Array.isArray(body?.answers) ? (body!.answers as unknown[]) : [];
  const answers = rawAnswers
    .map((a) => {
      const item = a as { exerciseId?: unknown; answer?: unknown };
      return {
        exerciseId: typeof item?.exerciseId === "string" ? item.exerciseId : "",
        answer: item?.answer,
      };
    })
    .filter((a) => a.exerciseId.length > 0);

  try {
    const report = await submitSession(user.id, id, answers);
    return json({ report });
  } catch (error) {
    if (error instanceof PracticeError) return jsonError(error.message, error.status);
    console.error("[practice] submit failed:", error);
    return jsonError("Could not submit this session.", 500);
  }
}
