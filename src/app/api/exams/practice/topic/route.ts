import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildTopicPractice, topicCatalog } from "@/lib/exams/practice-modes";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * GET /api/exams/practice/topic?exam=IELTS&variant=ACADEMIC
 * The topic catalogue for one examination: every skill tag carried by at
 * least three published pool items, with counts and the sections it appears
 * in. This is the data behind the Topic-specific practice picker.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const url = new URL(req.url);
  const examParam = url.searchParams.get("exam");
  if (!examParam || !(EXAM_KEYS as readonly string[]).includes(examParam)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = url.searchParams.get("variant") ?? "STANDARD";
  const topics = await topicCatalog(examParam as ExamKey, variant);
  return json({ topics });
}

/**
 * POST /api/exams/practice/topic — assemble a topic-specific practice set.
 * Body: { examKey, variant, topic, count?, timed? }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    topic?: unknown;
    count?: unknown;
    timed?: unknown;
  }>(req);
  if (!body) return jsonError("Invalid request body.");
  if (typeof body.examKey !== "string" || !(EXAM_KEYS as readonly string[]).includes(body.examKey)) {
    return jsonError("Choose an examination.", 422);
  }
  if (typeof body.topic !== "string" || body.topic.trim().length === 0) {
    return jsonError("Choose a topic.", 422);
  }
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  const count =
    typeof body.count === "number" && body.count >= 4 ? Math.min(Math.round(body.count), 40) : undefined;
  const timed = body.timed === true; // topic drills default to untimed learning

  const set = await buildTopicPractice({
    examKey: body.examKey as ExamKey,
    variant,
    topic: body.topic.trim(),
    count,
    timed,
  });
  if (!set) return jsonError("No published items carry that topic yet.", 404);

  const attempt = await startAttempt(user.id, set.mockId, "topic", timed);
  if (!attempt) return jsonError("Could not start the practice set.", 500);
  return json(
    { mockId: set.mockId, itemCount: set.itemCount, attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed } },
    201,
  );
}
