import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getProfile, upsertProfile } from "@/lib/exams/profile";
import { examProfileInputSchema } from "@/lib/exams/types";

/**
 * GET /api/exams/profile — the learner's exam preparation goals.
 * PUT /api/exams/profile — create/replace goals (onboarding wizard and
 * "change my goals"); partial payloads merge with the current profile.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const profile = await getProfile(user.id);
  return json({ profile });
}

export async function PUT(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");

  const existing = await getProfile(user.id);
  const merged = {
    examKey: body.examKey ?? existing?.examKey,
    variant: body.variant ?? existing?.variant ?? "STANDARD",
    proficiency: body.proficiency ?? existing?.proficiency ?? "UNKNOWN",
    targetScore: body.targetScore ?? existing?.targetScore ?? 6.5,
    examDate: body.examDate !== undefined ? body.examDate : (existing?.examDate ?? null),
    dailyMinutes: body.dailyMinutes ?? existing?.dailyMinutes ?? 30,
    difficultSections:
      body.difficultSections ?? existing?.difficultSections ?? [],
    strongestSection:
      body.strongestSection !== undefined
        ? body.strongestSection
        : (existing?.strongestSection ?? null),
    currentScoreEstimate:
      body.currentScoreEstimate !== undefined
        ? body.currentScoreEstimate
        : (existing?.currentScoreEstimate ?? null),
    previousAttempts:
      body.previousAttempts ?? existing?.previousAttempts ?? [],
  };
  const parsed = examProfileInputSchema.safeParse(merged);
  if (!parsed.success) {
    return jsonError(
      parsed.error.issues[0]?.message ?? "Invalid profile data.",
      422,
    );
  }
  const profile = await upsertProfile(user.id, parsed.data);
  return json({ profile });
}
