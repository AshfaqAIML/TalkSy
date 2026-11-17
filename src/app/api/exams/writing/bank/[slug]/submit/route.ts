import { z } from "zod";
import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { writingTaskBySlug } from "@/data/exams/ielts/writing-bank";
import { submitWritingTask } from "@/lib/exams/writing-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

const submissionSchema = z.object({
  mode: z.enum(["exam", "practice"]).default("exam"),
  content: z.string().min(1).max(40000),
  timeSpentSec: z.number().min(0).max(14400),
});

/**
 * POST /api/exams/writing/bank/[slug]/submit — evaluate a completed
 * response server-side through the deterministic engine (+ the AI
 * commentary seam, which never overrides the measured scores), record the
 * versioned attempt, and return the full feedback report with the
 * teaching content revealed for the first time (Part E) and the attempt
 * history (Part F: revision + historical attempts).
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to have your writing evaluated and tracked.", 401);
  const { slug } = await ctx.params;
  const task = writingTaskBySlug(slug);
  if (!task) return jsonError("Task not found.", 404);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body.", 400);
  }
  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) return jsonError("Invalid submission.", 400);

  const result = await submitWritingTask(user.id, task, parsed.data);
  return json(result);
}
