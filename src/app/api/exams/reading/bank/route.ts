import { json } from "@/lib/api-helpers";
import { READING_BANK, READING_SIMULATIONS, readingSimulationStats, readingWordCount } from "@/data/exams/ielts/reading-bank";
import { READING_DIFFICULTY_LABELS, READING_QUESTION_TYPE_LABELS, countGroupItems } from "@/data/exams/ielts/reading-bank";

/**
 * GET /api/exams/reading/bank — the public passage library index (PROMPT 45,
 * Part D): every exercise's card metadata plus the timed simulations (Part E).
 * Answer keys, evidence and glossaries never travel in this payload.
 */
export async function GET(_req: Request) {
  return json({
    exercises: READING_BANK.map((e) => ({
      slug: e.slug,
      title: e.title,
      variant: e.variant,
      section: e.section,
      subject: e.subject,
      difficulty: e.difficulty,
      difficultyLabel: READING_DIFFICULTY_LABELS[e.difficulty],
      estimatedMinutes: e.estimatedMinutes,
      wordCount: readingWordCount(e),
      objective: e.objective,
      questionTypes: [...new Set(e.questions.map((q) => READING_QUESTION_TYPE_LABELS[q.type]))],
      itemCount: e.questions.reduce(countGroupItems, 0),
      glossarySize: e.glossary.length,
      source: e.source,
    })),
    simulations: READING_SIMULATIONS.map((s) => ({
      slug: s.slug,
      title: s.title,
      variant: s.variant,
      passageSlugs: s.passageSlugs,
      timeLimitSec: s.timeLimitSec,
      description: s.description,
      ...readingSimulationStats(s),
    })),
  });
}
