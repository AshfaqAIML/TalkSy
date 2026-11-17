import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { speakingExerciseBySlug } from "@/data/exams/toefl/speaking-bank";
import { analyzeRepetition, evaluateInterviewAnswer } from "@/lib/exams/toefl-bank/speaking-evaluate";
import { recordRepeatAttempt, recordInterviewAttempt, revealedRepeatReview, revealedInterviewReview } from "@/lib/exams/toefl-bank/speaking";

type Ctx = { params: Promise<{ slug: string }> };

const submissionSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("practice"),
  /** What the learner said — self-transcribed (typed or browser speech recognition). */
  transcript: z.string().min(1).max(20000),
  durationSec: z.number().min(0).max(1800),
});

/**
 * POST /api/exams/toefl/speaking/bank/[slug]/submit — evaluate a completed
 * spoken item server-side and return the review material. The AUDIO never
 * leaves the browser; only the transcript travels.
 *
 *   listen-repeat  → the repetition analysis (word-level accuracy against
 *                    the reference, pacing against the window) PLUS the
 *                    revealed transcript and analysis hints.
 *   take-interview → the deterministic four-criterion evaluation
 *                    (educational estimates, never ETS scores), the optional
 *                    AI coaching layer with an improved example, PLUS the
 *                    revealed sample response and analysis notes.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your speaking analysed and tracked.", 401);
  const { slug } = await ctx.params;
  const item = speakingExerciseBySlug(slug);
  if (!item) return jsonError("Item not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);
  const { transcript, durationSec, mode } = parsed.data;

  if (item.taskType === "listen-repeat") {
    const analysis = analyzeRepetition(item.sentence, transcript, durationSec, item.windowSec);
    const attemptId = await recordRepeatAttempt(user.id, item, { transcript, durationSec, mode }, analysis);
    return json({ attemptId, analysis, review: revealedRepeatReview(item) });
  }

  const evaluation = await evaluateInterviewAnswer(item, transcript, durationSec);
  const attemptId = await recordInterviewAttempt(user.id, item, { transcript, durationSec, mode }, evaluation);
  return json({ attemptId, evaluation, review: revealedInterviewReview(item) });
}
