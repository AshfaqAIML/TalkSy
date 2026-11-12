import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getContextItemsForWord, getRelatedInbound, getVocabWord, getVocabWordsByIds } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";

/**
 * GET /api/vocabulary/words/[id] — full Word Explorer record with related
 * words (outgoing + incoming links) and the context passages that teach it.
 * Public; logged-in learners get annotations.
 */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const entry = getVocabWord(id);
  if (!entry) return jsonError("Word not found.", 404);

  const user = await getSessionUser(req);

  // Related: declared links + words that link back to this one, deduplicated.
  const outbound = getVocabWordsByIds(entry.relatedWordIds);
  const inbound = getRelatedInbound(entry.id).filter((w) => w.id !== entry.id && !outbound.some((o) => o.id === w.id));
  const related = [...outbound, ...inbound];

  const [annotatedSelf, annotatedRelated] = await Promise.all([
    annotateWords(user?.id ?? null, [entry]),
    annotateWords(user?.id ?? null, related),
  ]);

  return json({
    ...annotatedSelf[0],
    relatedWords: annotatedRelated,
    contextItems: getContextItemsForWord(entry.id),
  });
}
