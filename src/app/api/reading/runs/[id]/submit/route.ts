import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import { getReadingQuestion, getReadingText, getReadingTextById } from "@/data/reading";
import { gradeReadingQuestion, readingFeedback } from "@/lib/reading/grade";
import { recomputeReadingCompletion, toReadingProgressDto } from "@/lib/reading/service";
import type { ComprehensionSkill } from "@/data/reading/types";
import type { ChoiceQuestion, SequenceQuestion } from "@/data/reading/types";

/** Human-readable description of what the learner submitted. */
function describeSubmitted(
  question: Parameters<typeof gradeReadingQuestion>[0],
  submitted: unknown,
): string {
  const answer = submitted as { optionId?: unknown; order?: unknown; text?: unknown } | null;
  if (!answer || typeof answer !== "object") return "—";
  if (question.format === "choice" && typeof answer.optionId === "string") {
    const option = (question as ChoiceQuestion).options.find((o) => o.id === answer.optionId);
    return option?.text ?? "—";
  }
  if (question.format === "sequence" && Array.isArray(answer.order)) {
    const order = answer.order as string[];
    const byId = new Map((question as SequenceQuestion).events.map((e) => [e.id, e.text]));
    return order.map((id) => byId.get(id) ?? "?").join(" → ");
  }
  if (question.format === "short-text" && typeof answer.text === "string") {
    return answer.text.trim() || "—";
  }
  return "—";
}

/**
 * POST /api/reading/runs/[id]/submit — finalise a comprehension-check run.
 * Every answer is graded server-side, attempts are persisted with the
 * "assessment" context, and the response carries a performance summary
 * (score, pass/fail, per-skill breakdown, recommendation) plus the full
 * per-question review with feedback. Progress is updated: best score, run
 * count, and completion (all paragraphs read + passed run).
 */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { id } = await ctx.params;
  const run = await db.readingRun.findUnique({ where: { id } });
  if (!run || run.userId !== user.id) return jsonError("Run not found.", 404);
  if (run.status !== "pending") return jsonError("This run was already submitted.", 400);

  const text = getReadingTextById(run.textId);
  if (!text) return jsonError("Reading text not found.", 404);

  const body = await readJson<{ answers?: Record<string, unknown> }>(req);
  if (!body || typeof body.answers !== "object" || body.answers === null) {
    return jsonError("Invalid request body.", 400);
  }

  let questionIds: string[] = [];
  try {
    questionIds = JSON.parse(run.questionIds) as string[];
  } catch {
    questionIds = [];
  }

  // Grade every question in the run.
  const detail: {
    questionId: string;
    skill: ComprehensionSkill;
    format: string;
    difficulty: string;
    correct: boolean;
    invalid: boolean;
    score: number;
    prompt: string;
    submitted: unknown;
    submittedDescription: string;
    feedback: ReturnType<typeof readingFeedback>;
  }[] = [];
  const bySkill = new Map<string, { attempts: number; correct: number }>();
  let correctCount = 0;
  let pointsScored = 0;
  let pointsTotal = 0;
  const pointsByDifficulty: Record<string, number> = { easy: 10, medium: 20, hard: 30, challenge: 40 };

  for (const questionId of questionIds) {
    const question = getReadingQuestion(text.id, questionId);
    if (!question) continue;
    const submitted = body.answers[questionId] ?? null;
    const result = gradeReadingQuestion(question, submitted);

    if (result.correct) correctCount += 1;
    const bucket = bySkill.get(question.skill) ?? { attempts: 0, correct: 0 };
    bucket.attempts += 1;
    if (result.correct) bucket.correct += 1;
    bySkill.set(question.skill, bucket);

    const points = pointsByDifficulty[question.difficulty] ?? 10;
    pointsTotal += points;
    pointsScored += Math.round(points * result.score);

    await db.readingAttempt.create({
      data: {
        userId: user.id,
        textId: text.id,
        questionId: question.id,
        skill: question.skill,
        format: question.format,
        context: "assessment",
        isCorrect: result.correct,
        score: result.score,
        answer: JSON.stringify(submitted),
      },
    });

    detail.push({
      questionId: question.id,
      skill: question.skill,
      format: question.format,
      difficulty: question.difficulty,
      correct: result.correct,
      invalid: result.invalid,
      score: result.score,
      prompt: question.prompt,
      submitted,
      submittedDescription: describeSubmitted(question, submitted),
      feedback: readingFeedback(question),
    });
  }

  const total = questionIds.length;
  const scorePercent = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = total > 0 && correctCount / total >= text.passScore;

  await db.readingRun.update({
    where: { id: run.id },
    data: {
      status: "completed",
      score: total === 0 ? 0 : correctCount / total,
      passed,
      correct: correctCount,
      total,
      bySkill: JSON.stringify(Object.fromEntries(bySkill)),
      detail: JSON.stringify(detail),
      completedAt: new Date(),
    },
  });

  // Update the progress row (best score, run count), then recompute completion.
  const progressRow = await db.readingProgress.findUnique({
    where: { userId_textId: { userId: user.id, textId: text.id } },
  });
  if (progressRow) {
    await db.readingProgress.update({
      where: { id: progressRow.id },
      data: {
        bestRunScore: Math.max(progressRow.bestRunScore, total === 0 ? 0 : correctCount / total),
        runsCompleted: progressRow.runsCompleted + 1,
      },
    });
  }

  for (const item of detail) {
    await updateStats(user.id, {
      correct: item.correct,
      hintsUsed: 0,
      durationMs: 0,
      type: `reading:${item.format}`,
      difficulty: item.difficulty,
      skill: "reading",
    });
  }

  const updated = await recomputeReadingCompletion(user.id, text);

  const wrongSkills = [...bySkill.entries()]
    .filter(([, counts]) => counts.correct < counts.attempts)
    .map(([skill]) => skill);
  const recommendation = passed
    ? total === correctCount
      ? "Perfect score — excellent comprehension. Try the next level!"
      : "Passed! Review the highlighted questions to reach a perfect score."
    : "Not passed yet — read the text again, check the feedback, then retry the check.";

  return json({
    runId: run.id,
    textId: text.id,
    summary: {
      scorePercent,
      passed,
      correct: correctCount,
      total,
      passMarkPercent: Math.round(text.passScore * 100),
      pointsScored,
      pointsTotal,
      bySkill: [...bySkill.entries()].map(([skill, counts]) => ({ skill, ...counts })),
      wrongSkills,
      recommendation,
    },
    review: detail,
    progress: toReadingProgressDto(updated, text),
  });
}
