import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { readingExerciseBySlug } from "@/data/exams/ielts/reading-bank";
import {
  gradeReadingExercise,
  recordReadingAttempt,
  toSafeReadingExercise,
  type ReadingSubmission,
} from "@/lib/exams/reading-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

const answerSchema = z.union([
  z.object({ format: z.literal("completion"), blanks: z.record(z.string().max(10), z.string().max(120)) }),
  z.object({ format: z.literal("mcq"), options: z.array(z.number().int().min(-1).max(20)).max(20) }),
  z.object({ format: z.literal("mcq-multi"), options: z.array(z.number().int().min(0).max(20)).max(10) }),
  z.object({ format: z.literal("verdict"), choices: z.array(z.string().max(12)).max(20) }),
  z.object({ format: z.literal("matching"), pairs: z.array(z.number().int().min(-1).max(20)).max(20) }),
]);

const submissionSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("exam"),
  answers: z.record(z.string().max(80), answerSchema),
  timeSpentSec: z.number().min(0).max(14400),
  perQuestionSec: z.record(z.string().max(80), z.number().min(0).max(3600)).optional(),
  simRunId: z.string().max(80).optional(),
  simSlug: z.string().max(80).optional(),
  simPart: z.number().int().min(1).max(12).optional(),
});

/**
 * POST /api/exams/reading/bank/[slug]/submit — grade a completed passage
 * server-side (the key never left this server), record the attempt with the
 * reading error taxonomy, and return per-item feedback with the passage
 * evidence, the revealed glossary and why-wrong notes (Part F review data).
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your answers checked and tracked.", 401);
  const { slug } = await ctx.params;
  const exercise = readingExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);

  const submission = parsed.data as ReadingSubmission;
  const graded = gradeReadingExercise(exercise, submission);
  const attemptId = await recordReadingAttempt(user.id, exercise, submission, graded);

  return json({
    attemptId,
    result: graded,
    // The review payload (Part F): the glossary is revealed only now, with
    // the evidence, so it can never leak an answer before submission.
    glossary: exercise.glossary,
    exercise: toSafeReadingExercise(exercise),
  });
}
