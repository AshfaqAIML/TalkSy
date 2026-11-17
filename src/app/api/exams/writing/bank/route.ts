import { json } from "@/lib/api-helpers";
import { WRITING_BANK, writingBankStats } from "@/data/exams/ielts/writing-bank";
import { WRITING_DIFFICULTY_LABELS } from "@/data/exams/ielts/writing-bank/types";

/**
 * GET /api/exams/writing/bank — the public task library index (PROMPT 46,
 * Part E): every task's card metadata. Model answers, planning notes,
 * analyses, level samples, requirement keywords and vocabulary banks never
 * travel in this payload.
 */
export async function GET(_req: Request) {
  return json({
    tasks: WRITING_BANK.map((t) => ({
      slug: t.slug,
      title: t.title,
      channel: t.channel,
      taskType: t.taskType,
      family: t.family,
      ...(t.register ? { register: t.register } : {}),
      difficulty: t.difficulty,
      difficultyLabel: WRITING_DIFFICULTY_LABELS[t.difficulty],
      estimatedMinutes: t.estimatedMinutes,
      wordMinimum: t.wordMinimum,
      timeLimitSec: t.timeLimitSec,
      hasVisual: Boolean(t.visual),
      hasLevelSamples: t.levelSamples.length > 0,
      source: t.source,
    })),
    stats: writingBankStats(),
  });
}
