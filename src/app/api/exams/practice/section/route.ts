import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildSectionPractice } from "@/lib/exams/practice-sets";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, SECTION_KEYS, type ExamKey, type SectionKey } from "@/lib/exams/types";

/**
 * POST /api/exams/practice/section — assemble a section-wise practice set
 * from the published question pool of one exam+variant and start an attempt.
 * Body: { examKey, variant, section, count?, timed? }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    section?: unknown;
    count?: unknown;
    timed?: unknown;
  }>(req);
  if (!body) return jsonError("Invalid request body.");
  if (typeof body.examKey !== "string" || !(EXAM_KEYS as readonly string[]).includes(body.examKey)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  if (typeof body.section !== "string" || !(SECTION_KEYS as readonly string[]).includes(body.section)) {
    return jsonError("Choose a section.", 422);
  }
  const count = typeof body.count === "number" && body.count >= 4 ? Math.min(Math.round(body.count), 40) : undefined;
  const timed = body.timed !== false; // default: section clocks on

  const set = await buildSectionPractice({
    examKey: body.examKey as ExamKey,
    variant,
    section: body.section as SectionKey,
    count,
    timed,
  });
  if (!set) return jsonError("No published questions for that section yet.", 404);

  const attempt = await startAttempt(user.id, set.mockId, "section", timed);
  if (!attempt) return jsonError("Could not start the practice set.", 500);
  return json({ mockId: set.mockId, itemCount: set.itemCount, attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed } }, 201);
}
