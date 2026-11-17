import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { readingExerciseBySlug } from "@/data/exams/toefl/reading-bank";
import { gradeReadingExercise, recordReadingAttempt, type ReadingSubmission } from "@/lib/exams/toefl-bank/reading";

type Ctx = { params: Promise<{ slug: string }> };

const answerSchema = z.union([z.string().max(60), z.number().int().min(-1).max(3)]);
const submissionSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("exam"),
  answers: z.record(z.string().max(8), answerSchema),
  timeSpentSec: z.number().min(0).max(14400),
  perQuestionSec: z.record(z.string().max(8), z.number().min(0).max(3600)).optional(),
});

/**
 * POST /api/exams/toefl/reading/bank/[slug]/submit — grade a completed
 * exercise server-side (the key never left this server), record the attempt
 * with the library error taxonomy, and return per-item feedback, the
 * revealed vocabulary glossary and the grammar observations.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your answers checked and tracked.", 401);
  const { slug } = await ctx.params;
  const ex = readingExerciseBySlug(slug);
  if (!ex) return jsonError("Exercise not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);

  const submission = parsed.data as ReadingSubmission;
  const graded = gradeReadingExercise(ex, submission);
  const attemptId = await recordReadingAttempt(user.id, ex, submission, graded);

  return json({
    attemptId,
    result: graded,
    vocabulary: ex.vocabulary,
    grammar: "grammar" in ex ? (ex.grammar ?? []) : [],
  });
}
