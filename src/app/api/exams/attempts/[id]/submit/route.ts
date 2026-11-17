import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getAttempt, submitAttempt } from "@/lib/exams/mock-engine";
import { refreshSectionEstimates } from "@/lib/exams/diagnostics";
import { getProfile } from "@/lib/exams/profile";
import { getActiveSpec } from "@/lib/exams/specs";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/exams/attempts/[id]/submit — submit, grade and score the
 * attempt. Objective items are machine-marked; writing/speaking go to
 * AI rubric grading (pending review when the provider is unavailable).
 * Section estimates are refreshed from the new evidence afterwards.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const attempt = await getAttempt(id);
  if (!attempt || attempt.userId !== user.id) return jsonError("Attempt not found.", 404);

  const result = await submitAttempt(id);
  if (!result) return jsonError("Attempt could not be submitted.", 409);

  // Feed the fresh evidence into the learner's section estimates.
  try {
    const profile = await getProfile(user.id);
    if (profile) {
      const mock = await (await import("@/lib/db")).db.mockTest.findUnique({
        where: { id: attempt.mockTestId },
        select: { examKey: true, variant: true },
      });
      if (mock && mock.examKey === profile.examKey) {
        const spec = await getActiveSpec(mock.examKey as "IELTS" | "TOEFL_IBT", mock.variant);
        if (spec) {
          await refreshSectionEstimates({
            userId: user.id,
            spec,
            cefr: profile.proficiency,
            difficultSections: profile.difficultSections.filter((section) =>
              ["listening", "reading", "writing", "speaking"].includes(section),
            ) as Array<"listening" | "reading" | "writing" | "speaking">,
          });
        }
      }
    }
  } catch {
    // Estimate refresh is best-effort; the result is already persisted.
  }

  return json({ result });
}
