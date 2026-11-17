import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getPathway } from "@/lib/exams/pathways";
import { EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * GET /api/exams/pathway?exam=IELTS&variant=ACADEMIC — the exam's course
 * architecture (phases and steps, each referencing the common
 * curriculum), with the learner's step completion state.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const url = new URL(req.url);
  const exam = url.searchParams.get("exam") as ExamKey | null;
  if (!exam || !EXAM_KEYS.includes(exam)) return jsonError("Unknown exam.", 422);
  const variant = url.searchParams.get("variant") ?? "STANDARD";
  const pathway = await getPathway(exam, variant, user.id);
  if (!pathway) return jsonError("No pathway published for this exam yet.", 404);
  return json({ pathway });
}
