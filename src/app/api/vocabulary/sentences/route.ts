import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getVocabWord } from "@/data/vocabulary";
import { toProgressDto } from "@/lib/vocab/annotate";
import { applyGrade } from "@/lib/vocab/review-service";
import { checkSentence, normalizeSentence, type SentenceIssue } from "@/lib/vocab/sentences";
import type { WordProgressDto } from "@/lib/vocab/dto";

function parseFeedback(raw: string): SentenceIssue[] {
  try {
    const parsed = JSON.parse(raw) as SentenceIssue[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * GET /api/vocabulary/sentences — the learner's sentence practice history
 * (optionally ?wordId=… for one word). Newest first, last 30.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const wordId = new URL(req.url).searchParams.get("wordId") ?? undefined;

  const rows = await db.vocabSentence.findMany({
    where: { userId: user.id, ...(wordId ? { wordId } : {}) },
    orderBy: { createdAt: "desc" },
    take: 30,
  });

  return json({
    sentences: rows.map((row) => ({
      id: row.id,
      wordId: row.wordId,
      word: getVocabWord(row.wordId)?.word ?? row.wordId,
      sentence: row.sentence,
      valid: row.valid,
      feedback: parseFeedback(row.feedback),
      createdAt: row.createdAt.toISOString(),
    })),
  });
}

interface SubmitSentenceBody {
  wordId?: unknown;
  sentence?: unknown;
}

/**
 * POST /api/vocabulary/sentences — submit an own sentence for a word.
 * The checker validates real usage; a valid sentence counts as a successful
 * ("good") review in the spaced-repetition scheduler.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<SubmitSentenceBody>(req);
  const wordId = typeof body?.wordId === "string" ? body.wordId : "";
  const rawSentence = typeof body?.sentence === "string" ? body.sentence : "";
  const entry = getVocabWord(wordId);
  if (!entry) return jsonError("Unknown word.", 404);

  const sentence = normalizeSentence(rawSentence);
  if (!sentence) return jsonError("Please write a sentence first.", 400);

  const { valid, issues } = checkSentence(entry, sentence);

  const row = await db.vocabSentence.create({
    data: {
      userId: user.id,
      wordId,
      sentence,
      valid,
      feedback: JSON.stringify(issues),
    },
  });

  // A valid sentence is real production practice → grade the word "good".
  let progress: WordProgressDto | null = null;
  if (valid) {
    const outcome = await applyGrade(user.id, wordId, "good", "sentence");
    progress = {
      wordId,
      status: outcome.status,
      dueAt: outcome.dueAt ? outcome.dueAt.toISOString() : null,
      isDifficult: outcome.isDifficult,
      repetitions: outcome.repetitions,
      lapses: outcome.lapses,
      totalReviews: outcome.totalReviews,
      correctReviews: outcome.correctReviews,
    };
  } else {
    const existing = await db.vocabProgress.findUnique({
      where: { userId_wordId: { userId: user.id, wordId } },
    });
    progress = existing ? toProgressDto(existing) : null;
  }

  return json({
    valid,
    issues,
    sentence: {
      id: row.id,
      wordId,
      word: entry.word,
      sentence,
      valid,
      feedback: issues,
      createdAt: row.createdAt.toISOString(),
    },
    word: entry,
    progress,
  });
}
