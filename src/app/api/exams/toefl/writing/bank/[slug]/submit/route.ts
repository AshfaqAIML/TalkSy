import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { writingExerciseBySlug } from "@/data/exams/toefl/writing-bank";
import {
  gradeSentenceExercise,
  recordSentenceAttempt,
  recordEvaluatedWritingAttempt,
  revealedKit,
  type SentenceSubmission,
} from "@/lib/exams/toefl-bank/writing";
import { evaluateWritingResponse } from "@/lib/exams/toefl-bank/writing-evaluate";

type Ctx = { params: Promise<{ slug: string }> };

const sentenceSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("practice"),
  answers: z.record(z.string().max(8), z.union([z.string().max(2000), z.array(z.number().int().min(0).max(9)).max(9)])),
  timeSpentSec: z.number().min(0).max(14400),
  perQuestionSec: z.record(z.string().max(8), z.number().min(0).max(3600)).optional(),
});

const responseSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("practice"),
  response: z.string().min(1).max(20000),
  timeSpentSec: z.number().min(0).max(14400),
});

/**
 * POST /api/exams/toefl/writing/bank/[slug]/submit — grade a completed
 * writing exercise server-side and return the review material:
 *
 *   build-sentence       → per-item feedback with the focus-based error
 *                          taxonomy, PLUS the revealed teaching kit.
 *   write-email /
 *   academic-discussion  → the deterministic four-criterion evaluation
 *                          (educational estimates, never ETS scores), the
 *                          optional AI coaching layer with an improved
 *                          example, PLUS the revealed model response and kit.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your writing checked, evaluated and tracked.", 401);
  const { slug } = await ctx.params;
  const ex = writingExerciseBySlug(slug);
  if (!ex) return jsonError("Exercise not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }

  if (ex.taskType === "build-sentence") {
    const parsed = sentenceSchema.safeParse(body);
    if (!parsed.success) return jsonError("Invalid submission.", 400);
    const submission = parsed.data as unknown as SentenceSubmission;
    const graded = gradeSentenceExercise(ex, submission);
    const attemptId = await recordSentenceAttempt(user.id, ex, submission, graded);
    return json({ attemptId, result: graded, kit: revealedKit(ex) });
  }

  const parsed = responseSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);
  const { response, timeSpentSec, mode } = parsed.data;
  const evaluation = await evaluateWritingResponse(ex, response);
  const attemptId = await recordEvaluatedWritingAttempt(user.id, ex, evaluation, timeSpentSec, mode);
  return json({ attemptId, evaluation, kit: revealedKit(ex) });
}
