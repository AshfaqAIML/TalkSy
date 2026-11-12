import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { vocabWords } from "@/data/vocabulary";
import { generateChallenge, gradeChallenge, isChallengeKind } from "@/lib/vocab/challenges";
import { applyGrade } from "@/lib/vocab/review-service";

interface SubmitBody {
  answers?: unknown;
  durationMs?: unknown;
}

/**
 * POST /api/vocabulary/challenges/[id]/submit
 *
 * Grades every answer server-side by regenerating the challenge from the
 * stored seed (the client never had the answers), finalizes the run, and
 * feeds every tested word into the spaced-repetition scheduler:
 * correct → "good", wrong → "again".
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { id } = await ctx.params;
  const run = await db.vocabChallengeRun.findUnique({ where: { id } });
  if (!run || run.userId !== user.id) return jsonError("Challenge run not found.", 404);
  if (run.status === "completed") {
    return jsonError("This challenge was already submitted.", 409);
  }
  if (!isChallengeKind(run.kind)) return jsonError("Corrupted challenge run.", 400);

  const body = await readJson<SubmitBody>(req);
  const answers =
    body?.answers && typeof body.answers === "object" && !Array.isArray(body.answers)
      ? (body.answers as Record<string, unknown>)
      : {};
  const durationMs =
    typeof body?.durationMs === "number" && body.durationMs > 0
      ? Math.min(body.durationMs, 30 * 60 * 1000)
      : 0;

  // Regenerate the exact same items from the stored seed + parameters.
  const challenge = generateChallenge(vocabWords, {
    kind: run.kind,
    seed: run.seed,
    categoryId: run.category ?? undefined,
    size: run.total,
  });
  const words = new Map(vocabWords.map((w) => [w.id, w]));
  const grade = gradeChallenge(challenge, answers, words);

  // Feed every tested word into the SRS (one grade per word per run).
  const gradedByWord = new Map<string, boolean>();
  for (const result of grade.results) {
    for (const wordResult of result.wordResults) {
      const previous = gradedByWord.get(wordResult.wordId);
      // A word tested twice in one run keeps its worst result (conservative).
      gradedByWord.set(wordResult.wordId, previous === false ? false : wordResult.correct);
    }
  }
  const graded: { wordId: string; correct: boolean }[] = [];
  for (const [wordId, correct] of gradedByWord) {
    await applyGrade(user.id, wordId, correct ? "good" : "again", "challenge");
    graded.push({ wordId, correct });
  }

  await db.vocabChallengeRun.update({
    where: { id: run.id },
    data: {
      status: "completed",
      total: grade.total,
      correct: grade.correct,
      score: grade.score,
      durationMs,
      detail: JSON.stringify(grade.results),
      completedAt: new Date(),
    },
  });

  return json({
    runId: run.id,
    kind: run.kind,
    total: grade.total,
    correct: grade.correct,
    score: grade.score,
    results: grade.results,
    graded,
  });
}