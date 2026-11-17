import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { bankExerciseBySlug } from "@/data/exams/ielts/listening-bank";
import { gradeExercise, recordBankAttempt, type BankSubmission } from "@/lib/exams/listening-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

const answerSchema = z.union([
  z.object({ format: z.literal("completion"), blanks: z.record(z.string(), z.string().max(120)) }),
  z.object({ format: z.literal("mcq"), option: z.number().int().min(-1).max(12) }),
  z.object({ format: z.literal("mcq-multi"), options: z.array(z.number().int().min(0).max(12)).max(8) }),
  z.object({ format: z.literal("matching"), pairs: z.array(z.number().int().min(0).max(12)).max(12) }),
  z.object({ format: z.literal("map"), labels: z.array(z.string().max(3)).max(12) }),
  z.object({ format: z.literal("short-answer"), answers: z.array(z.string().max(120)).max(8) }),
]);

const submissionSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("exam"),
  answers: z.record(z.string().max(80), answerSchema),
  timeSpentSec: z.number().min(0).max(14400),
  perQuestionSec: z.record(z.string().max(80), z.number().min(0).max(3600)).optional(),
});

/**
 * POST /api/exams/listening/bank/[slug]/submit — grade a completed
 * exercise server-side (the key never left this server), record the
 * attempt with the masterclass error taxonomy, and return per-item
 * feedback plus the revealed transcript. Requires an account — the
 * performance engine depends on attributed attempts.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your answers checked and tracked.", 401);
  const { slug } = await ctx.params;
  const exercise = bankExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Invalid submission.", 400);
  }

  const submission = parsed.data as BankSubmission;
  const graded = gradeExercise(exercise, submission);
  const attemptId = await recordBankAttempt(user.id, exercise, submission, graded);

  return json({
    attemptId,
    result: graded,
    transcript: {
      speakers: exercise.speakers.map((s) => ({ id: s.id, name: s.name, role: s.role })),
      segments: exercise.segments,
      note: exercise.transcriptNote,
    },
  });
}
