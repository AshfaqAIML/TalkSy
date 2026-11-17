import { json } from "@/lib/api-helpers";
import { LISTENING_BANK } from "@/data/exams/ielts/listening-bank";
import { ACCENT_LABELS, DIFFICULTY_LABELS, QUESTION_TYPE_LABELS } from "@/data/exams/ielts/listening-bank/types";

/**
 * GET /api/exams/listening/bank — the audio question bank library index
 * (metadata only: no scripts, no answer keys). Public: visitors can see
 * what the masterclass offers; scoring and performance tracking require
 * an account.
 */
export async function GET() {
  return json({
    exercises: LISTENING_BANK.map((e) => ({
      slug: e.slug,
      title: e.title,
      part: e.part,
      difficulty: e.difficulty,
      difficultyLabel: DIFFICULTY_LABELS[e.difficulty],
      estimatedMinutes: e.estimatedMinutes,
      accentLabels: [...new Set(e.speakers.map((s) => ACCENT_LABELS[s.accent]))],
      speakers: e.speakers.map((s) => s.name),
      questionTypes: [...new Set(e.questions.map((q) => QUESTION_TYPE_LABELS[q.type]))],
      itemCount: e.questions.reduce((a, q) => {
        if ("blanks" in q) return a + q.blanks.length;
        if (q.type === "short-answer") return a + q.questions.length;
        if (q.type === "map") return a + q.plan.grid.flat().filter((c) => c?.blank).length;
        if (q.type === "matching") return a + q.items.length;
        if (q.type === "mcq-multi") return a + q.correct.length;
        return a + 1;
      }, 0),
      source: e.source,
    })),
  });
}
