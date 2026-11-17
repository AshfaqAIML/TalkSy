import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildCustomPractice } from "@/lib/exams/practice-sets";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, SECTION_KEYS, type ExamKey, type SectionKey } from "@/lib/exams/types";

/**
 * POST /api/exams/practice/custom — assemble a filtered practice set.
 * Body: { examKey, variant, sections?, types?, difficultyMin?, difficultyMax?,
 *         count, minutes?, timed? }
 * With a minute budget and timed=true this is Timed Practice; with
 * timed=false it is Untimed Learning Practice (per-item reveal enabled).
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    sections?: unknown;
    types?: unknown;
    difficultyMin?: unknown;
    difficultyMax?: unknown;
    count?: unknown;
    minutes?: unknown;
    timed?: unknown;
  }>(req);
  if (!body) return jsonError("Invalid request body.");
  if (typeof body.examKey !== "string" || !(EXAM_KEYS as readonly string[]).includes(body.examKey)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  const sections = Array.isArray(body.sections)
    ? body.sections.filter((s): s is SectionKey => (SECTION_KEYS as readonly string[]).includes(s as SectionKey))
    : undefined;
  const types = Array.isArray(body.types)
    ? body.types.filter((t): t is string => typeof t === "string")
    : undefined;
  const difficultyMin = typeof body.difficultyMin === "number" ? Math.min(Math.max(Math.round(body.difficultyMin), 1), 5) : undefined;
  const difficultyMax = typeof body.difficultyMax === "number" ? Math.min(Math.max(Math.round(body.difficultyMax), 1), 5) : undefined;
  const count = typeof body.count === "number" ? Math.min(Math.max(Math.round(body.count), 4), 40) : 10;
  const minutes =
    typeof body.minutes === "number" && body.minutes >= 3 ? Math.min(Math.round(body.minutes), 180) : undefined;
  const timed = body.timed !== false;

  const set = await buildCustomPractice({
    examKey: body.examKey as ExamKey,
    variant,
    sections,
    types,
    difficultyMin,
    difficultyMax,
    count,
    minutes,
    timed,
  });
  if (!set) return jsonError("No published questions match those filters.", 404);

  const attempt = await startAttempt(user.id, set.mockId, timed ? "timed" : "untimed", timed);
  if (!attempt) return jsonError("Could not start the practice set.", 500);
  return json({ mockId: set.mockId, itemCount: set.itemCount, attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed } }, 201);
}
