import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { checkSentence } from "@/lib/grammar/checker";
import type { GrammarIssue } from "@/data/grammar/types";
import { getLesson } from "@/data/curriculum";

interface ClinicBody {
  sentence?: unknown;
}

function parseJsonArray<T>(raw: string): T[] {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

/**
 * POST /api/grammar/clinic — check a sentence with the rule-based grammar
 * engine, store the submission (with error categories) and return
 * corrections + issue explanations + lesson recommendations.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to use the Error Clinic.", 401);

  const body = await readJson<ClinicBody>(req);
  const sentence = typeof body?.sentence === "string" ? body.sentence.trim() : "";
  if (!sentence) return jsonError("Please write a sentence to check.", 422);
  if (sentence.length > 500) {
    return jsonError("Sentences are limited to 500 characters.", 422);
  }

  const result = checkSentence(sentence);
  const categories = [...new Set(result.issues.map((i) => i.category))];

  await db.grammarClinicSubmission.create({
    data: {
      userId: user.id,
      sentence,
      corrected: result.corrected,
      issues: JSON.stringify(result.issues),
      categories: JSON.stringify(categories),
    },
  });

  return json({
    original: sentence,
    corrected: result.corrected,
    clean: result.clean,
    issues: result.issues,
    categories,
  });
}

/**
 * GET /api/grammar/clinic — the learner's submission history, recurring
 * error categories (frequency) and recommended lessons for the top issues.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to use the Error Clinic.", 401);

  const submissions = await db.grammarClinicSubmission.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 25,
  });

  // Category frequency across recent submissions (recurring errors).
  const counts = new Map<string, number>();
  for (const submission of submissions) {
    for (const category of parseJsonArray<string>(submission.categories)) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }
  const recurring = [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // Recommended lessons: from the most recent issue categories.
  const lessonSlugSet = new Set<string>();
  for (const submission of submissions) {
    for (const issue of parseJsonArray<GrammarIssue>(submission.issues)) {
      if (issue.lessonSlug && getLesson(issue.lessonSlug)) {
        lessonSlugSet.add(issue.lessonSlug);
      }
    }
  }
  const recommendedLessons = [...lessonSlugSet]
    .slice(0, 4)
    .map((slug) => {
      const lesson = getLesson(slug)!;
      return {
        slug: lesson.slug,
        title: lesson.title,
        description: lesson.description,
        estimatedMinutes: lesson.estimatedMinutes,
      };
    });

  return json({
    submissions: submissions.map((s) => ({
      id: s.id,
      sentence: s.sentence,
      corrected: s.corrected,
      issues: parseJsonArray<GrammarIssue>(s.issues),
      categories: parseJsonArray<string>(s.categories),
      createdAt: s.createdAt.toISOString(),
    })),
    recurring,
    recommendedLessons,
  });
}
