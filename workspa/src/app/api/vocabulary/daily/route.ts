import { getSessionUser } from "@/lib/auth";
import { json } from "@/lib/api-helpers";
import { getRecentDailyWords, getVocabWordsByIds } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";

/**
 * GET /api/vocabulary/daily — today's Daily Word (deterministic: the same for
 * every learner on the same date) plus the last 7 days as an archive.
 * Public; logged-in learners get annotations.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);

  const recent = getRecentDailyWords(7);
  const today = recent[0];
  const words = getVocabWordsByIds(recent.map((r) => r.word.id));
  const annotated = await annotateWords(user?.id ?? null, words);
  const byId = new Map(annotated.map((a) => [a.word.id, a]));

  return json({
    today: {
      dateKey: today.dateKey,
      ...byId.get(today.word.id)!,
    },
    archive: recent.slice(1).map((r) => ({
      dateKey: r.dateKey,
      ...byId.get(r.word.id)!,
    })),
  });
}
