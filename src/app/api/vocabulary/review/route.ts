import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getVocabWord } from "@/data/vocabulary";
import { toProgressDto } from "@/lib/vocab/annotate";
import {
  applyGrade,
  applySnooze,
  isReviewSource,
  isSrsRating,
  setDifficultFlag,
} from "@/lib/vocab/review-service";
import { describeDue, describeInterval } from "@/lib/vocab/srs";

interface ReviewBody {
  action?: unknown;
  wordId?: unknown;
  rating?: unknown;
  source?: unknown;
  hours?: unknown;
  difficult?: unknown;
}

/**
 * POST /api/vocabulary/review — one learner action on one word.
 *
 * actions:
 *  - grade:  { wordId, rating: again|hard|good|easy, source }  → SRS update
 *  - known:  { wordId, source }                                → same as grade "good"
 *  - snooze: { wordId, hours?, source }                        → "review later", no grade
 *  - flag:   { wordId, difficult: bool, source }               → difficulty flag
 *
 * Every action is logged (VocabReviewLog); grades feed the scheduler.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to track your words.", 401);

  const body = await readJson<ReviewBody>(req);
  if (!body) return jsonError("Invalid request body.", 400);

  const wordId = typeof body.wordId === "string" ? body.wordId : "";
  const action = typeof body.action === "string" ? body.action : "";
  const source = typeof body.source === "string" && isReviewSource(body.source) ? body.source : "flashcard";

  if (!wordId || !getVocabWord(wordId)) return jsonError("Unknown word.", 404);

  if (action === "grade" || action === "known") {
    const rating = action === "known" ? "good" : typeof body.rating === "string" ? body.rating : "";
    if (!isSrsRating(rating)) {
      return jsonError("Rating must be one of: again, hard, good, easy.", 400);
    }
    const outcome = await applyGrade(user.id, wordId, rating, source);
    return json({
      progress: {
        wordId,
        status: outcome.status,
        dueAt: outcome.dueAt ? outcome.dueAt.toISOString() : null,
        isDifficult: outcome.isDifficult,
        repetitions: outcome.repetitions,
        lapses: outcome.lapses,
        totalReviews: outcome.totalReviews,
        correctReviews: outcome.correctReviews,
      },
      intervalLabel: describeInterval(outcome.intervalMinutes),
      dueLabel: describeDue(outcome.dueAt),
    });
  }

  if (action === "snooze") {
    const hours = typeof body.hours === "number" && body.hours > 0 ? body.hours : 4;
    await applySnooze(user.id, wordId, hours, source);
    const row = await db.vocabProgress.findUnique({
      where: { userId_wordId: { userId: user.id, wordId } },
    });
    return json({
      progress: row ? toProgressDto(row) : null,
      intervalLabel: "snoozed",
      dueLabel: describeDue(row?.dueAt ?? null),
    });
  }

  if (action === "flag") {
    const difficult = body.difficult !== false;
    await setDifficultFlag(user.id, wordId, difficult, source);
    const row = await db.vocabProgress.findUnique({
      where: { userId_wordId: { userId: user.id, wordId } },
    });
    return json({
      progress: row ? toProgressDto(row) : null,
      intervalLabel: difficult ? "flagged as difficult" : "difficulty flag removed",
      dueLabel: describeDue(row?.dueAt ?? null),
    });
  }

  return jsonError("Action must be one of: grade, known, snooze, flag.", 400);
}
