import { z } from "zod";
import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";
import { submitSpeakingItem } from "@/lib/exams/speaking-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

const submissionSchema = z.object({
  mode: z.enum(["simulation", "practice"]).default("simulation"),
  /** One transcript per question (Part 1/3) or a single transcript (Part 2). */
  answers: z.array(z.string().min(1).max(20000)).min(1).max(8),
  durationSec: z.number().min(0).max(7200),
});

/**
 * POST /api/exams/speaking/bank/[slug]/submit — evaluate a completed
 * spoken turn server-side through the deterministic engine (+ the AI
 * commentary seam, which never overrides the measured scores), record the
 * versioned attempt, and return the criterion-based feedback report with
 * the teaching content revealed for the first time and the attempt history.
 * The AUDIO never leaves the browser — only the transcript travels.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your speaking evaluated and tracked.", 401);
  const { slug } = await ctx.params;
  const item = speakingItemBySlug(slug);
  if (!item) return jsonError("Item not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);

  const expected =
    item.kind === "part1" || item.kind === "part3" ? item.questions.length : 1;
  if (parsed.data.answers.length !== expected) {
    return jsonError(`This item expects ${expected} answer transcript(s); received ${parsed.data.answers.length}.`, 400);
  }

  const result = await submitSpeakingItem(user.id, item, parsed.data);
  return json(result);
}
