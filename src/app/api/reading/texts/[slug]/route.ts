import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getReadingText } from "@/data/reading";
import { toSafeReadingQuestion } from "@/lib/reading/grade";
import { ensureReadingProgress, toReadingProgressDto } from "@/lib/reading/service";

/**
 * GET /api/reading/texts/[slug] — the full text bundle: paragraphs,
 * translations, glossary and sanitised questions (options/events shuffled
 * deterministically; all grading data stripped), plus the learner's progress,
 * paragraph bookmarks and best run. Requires login.
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { slug } = await ctx.params;
  const text = getReadingText(slug);
  if (!text) return jsonError("Reading text not found.", 404);

  const row = await ensureReadingProgress(user.id, text.id);
  const bookmarks = await db.readingBookmark.findMany({
    where: { userId: user.id, textId: text.id },
  });
  const runs = await db.readingRun.findMany({
    where: { userId: user.id, textId: text.id, status: "completed" },
    orderBy: { score: "desc" },
  });
  const bestRun = runs[0]
    ? {
        score: runs[0].score,
        passed: runs[0].passed,
        correct: runs[0].correct,
        total: runs[0].total,
        completedAt: runs[0].completedAt?.toISOString() ?? null,
      }
    : null;

  return json({
    text: {
      id: text.id,
      slug: text.slug,
      level: text.level,
      category: text.category,
      title: text.title,
      description: text.description,
      estimatedMinutes: text.estimatedMinutes,
      tags: text.tags ?? [],
      illustration: text.illustration ?? null,
      paragraphs: text.paragraphs,
      glossary: text.glossary,
      passScore: text.passScore,
      questions: text.questions.map((question) =>
        toSafeReadingQuestion(question, `practice:${user.id}:${question.id}`),
      ),
    },
    progress: toReadingProgressDto(row, text),
    paragraphBookmarks: bookmarks.map((b) => b.paragraphId),
    bestRun,
  });
}
