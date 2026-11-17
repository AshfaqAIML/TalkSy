import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { listeningExerciseBySlug } from "@/data/exams/toefl/listening-bank";
import { gradeListeningExercise, recordListeningAttempt, type ListeningSubmission } from "@/lib/exams/toefl-bank/listening";

type Ctx = { params: Promise<{ slug: string }> };

const submissionSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("exam"),
  answers: z.record(z.string().max(8), z.number().int().min(-1).max(3)),
  timeSpentSec: z.number().min(0).max(14400),
  perQuestionSec: z.record(z.string().max(8), z.number().min(0).max(3600)).optional(),
});

/**
 * POST /api/exams/toefl/listening/bank/[slug]/submit — grade a completed
 * exercise server-side, record the attempt, and return per-item feedback
 * PLUS the revealed transcript for post-attempt review.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your answers checked and tracked.", 401);
  const { slug } = await ctx.params;
  const ex = listeningExerciseBySlug(slug);
  if (!ex) return jsonError("Exercise not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);

  const submission = parsed.data as ListeningSubmission;
  const graded = gradeListeningExercise(ex, submission);
  const attemptId = await recordListeningAttempt(user.id, ex, submission, graded);

  return json({
    attemptId,
    result: graded,
    transcript: {
      speakers: ex.speakers.map((s) => ({ id: s.id, name: s.name, role: s.role })),
      segments: ex.segments,
      note: ex.transcriptNote,
    },
  });
}
