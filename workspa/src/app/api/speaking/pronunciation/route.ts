import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import { getPronunciationItem } from "@/data/speaking";
import { gradePronunciationMatch } from "@/lib/speaking/feedback";
import { db } from "@/lib/db";

/**
 * POST /api/speaking/pronunciation — record one pronunciation practice take.
 * Body: { itemId, transcript?, hadStt?, selfRating? }
 *
 * The match score is an honest transcript-similarity signal (only when a
 * recogniser ran); the self-rating is the learner's own ear. No phoneme
 * accuracy is claimed anywhere.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    itemId?: string;
    transcript?: string;
    hadStt?: boolean;
    selfRating?: number;
  }>(req);
  if (!body || typeof body.itemId !== "string") {
    return jsonError("Invalid request body.", 400);
  }
  const item = getPronunciationItem(body.itemId);
  if (!item) return jsonError("Pronunciation item not found.", 404);

  const selfRating =
    typeof body.selfRating === "number"
      ? Math.max(0, Math.min(5, Math.round(body.selfRating)))
      : 0;
  const hadStt = body.hadStt === true;
  const transcript = hadStt
    ? (body.transcript ?? "").trim().slice(0, 1000)
    : "";

  const match = hadStt
    ? gradePronunciationMatch(item.targetText, transcript, true)
    : gradePronunciationMatch(item.targetText, "", false);

  // Retention: pronunciation transcripts follow the same settings window.
  const settings = await db.speakingSettings.findUnique({ where: { userId: user.id } });
  const retentionDays = settings?.retentionDays ?? 90;

  await db.pronunciationAttempt.create({
    data: {
      userId: user.id,
      itemId: item.id,
      category: item.category,
      transcript: retentionDays > 0 ? transcript : "",
      matchScore: match.matchScore,
      selfRating,
    },
  });

  await updateStats(user.id, {
    correct: match.matchScore >= 0.7,
    hintsUsed: 0,
    durationMs: 0,
    type: `speaking:pronunciation-${item.category}`,
    difficulty: "medium",
    skill: "speaking",
  });

  return json({
    itemId: item.id,
    matchScore: match.matchScore,
    heard: transcript,
    note: match.note,
    selfRating,
  });
}
