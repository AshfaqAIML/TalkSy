/**
 * Evaluation service — persistence and integration with the exam engine.
 *
 * Bridges the evaluation engine to the database and the mock-test tables:
 *   - resolves a question row (attempt + question) into an evaluator task,
 *     reusing the engine's own payload schemas — never re-implemented rules;
 *   - loads the official-style rubric ladder from ExamRubric to enrich the
 *     AI prompt (same source the seeded rubrics use);
 *   - stores every evaluation with its provenance and links revisions into
 *     a chain so improvement can be tracked across re-evaluations.
 */

import { db } from "@/lib/db";
import { evaluateResponse } from "./engine";
import { compareEvaluations } from "./learning-loop";
import {
  EVALUATOR_PROFILES,
  evaluatorLabel,
  resolveEvaluator,
  type EvaluatorKey,
  type ResolvedTask,
} from "./tasks";
import type {
  EvaluationComparisonDto,
  EvaluationOverviewDto,
  EvaluationResultDto,
  EvaluationReviewDto,
  EvaluationStatus,
  EvaluatorImprovementDto,
  StoredEvaluationDto,
  TranscriptSource,
} from "./types";

// ---------------------------------------------------------------------------
// DTO mapping
// ---------------------------------------------------------------------------

type EvaluationRow = {
  id: string;
  attemptId: string | null;
  questionId: string | null;
  evaluatorKey: string;
  examKey: string;
  section: string;
  taskTitle: string;
  inputText: string;
  transcriptSource: string;
  audioSec: number | null;
  revisionOfId: string | null;
  result: string;
  status: string;
  reviewStatus: string;
  reviewerRole: string | null;
  reviewerNote: string | null;
  reviewedAt: Date | null;
  createdAt: Date;
};

export function toEvaluationDto(row: EvaluationRow): StoredEvaluationDto {
  const review: EvaluationReviewDto =
    row.reviewStatus === "human_reviewed"
      ? {
          status: "human_reviewed",
          reviewerRole: row.reviewerRole,
          reviewerNote: row.reviewerNote,
          reviewedAt: row.reviewedAt ? row.reviewedAt.toISOString() : null,
        }
      : { status: "not_reviewed", reviewerRole: null, reviewerNote: null, reviewedAt: null };
  let result: EvaluationResultDto;
  try {
    result = JSON.parse(row.result) as EvaluationResultDto;
  } catch {
    result = {
      evaluatorKey: row.evaluatorKey,
      examKey: row.examKey as EvaluationResultDto["examKey"],
      examLabel: row.evaluatorKey.startsWith("IELTS") ? "IELTS" : "TOEFL iBT 2026",
      section: row.section === "speaking" ? "speaking" : "writing",
      taskTitle: row.taskTitle,
      taskLabel: row.taskTitle,
      createdAt: row.createdAt.toISOString(),
      overall: null,
      criteria: [],
      checks: [],
      grammarCorrections: [],
      vocabulary: [],
      sentenceFeedback: [],
      irrelevantContent: [],
      missingRequirements: [],
      organisation: [],
      recommendations: [],
      transcript: null,
      transcriptSource: "unknown",
      wordCount: 0,
      pronunciation: [],
      developmentSuggestions: [],
      weaknesses: [],
      revisionGuidance: null,
      revisionExercise: null,
      modelResponse: null,
      confidence: { level: "lower", reasons: ["This evaluation could not be decoded."] },
      limitations: ["This evaluation could not be decoded — please run it again."],
      disclaimers: [],
      aiAvailable: false,
    };
  }
  return {
    id: row.id,
    attemptId: row.attemptId,
    questionId: row.questionId,
    evaluatorKey: row.evaluatorKey,
    examKey: row.examKey,
    section: row.section,
    taskTitle: row.taskTitle,
    status: row.status as EvaluationStatus,
    isRevision: row.revisionOfId !== null,
    revisionOfId: row.revisionOfId,
    createdAt: row.createdAt.toISOString(),
    inputText: row.inputText,
    result,
    review,
  };
}

// ---------------------------------------------------------------------------
// Rubric ladder (optional AI-prompt enrichment from ExamRubric)
// ---------------------------------------------------------------------------

async function loadRubricText(taskKey: string | null): Promise<string | null> {
  if (!taskKey) return null;
  const examKey = taskKey.startsWith("ielts.") ? "IELTS" : "TOEFL_IBT";
  const rubricRow = await db.examRubric.findUnique({
    where: { examKey_taskKey: { examKey, taskKey } },
  });
  if (!rubricRow) return null;
  try {
    const scale = JSON.parse(rubricRow.scale) as Array<{
      score: number;
      criteria: Array<{ name: string; descriptor: string }>;
    }>;
    return scale
      .map(
        (level) =>
          `Score ${level.score}:\n` +
          level.criteria.map((c) => `  - ${c.name}: ${c.descriptor}`).join("\n"),
      )
      .join("\n");
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Task resolution
// ---------------------------------------------------------------------------

export type CreateEvaluationInput = {
  attemptId?: string;
  questionId?: string;
  evaluatorKey?: string;
  /** Optional task prompt for free evaluations (the task the learner was given). */
  taskPrompt?: string;
  text: string;
  transcriptSource: TranscriptSource;
  audioSec?: number | null;
};

async function resolveFromQuestion(
  userId: string,
  attemptId: string,
  questionId: string,
): Promise<
  | { ok: true; resolved: ResolvedTask; answerKey: unknown; examKey: string; variant: string }
  | { ok: false; reason: string }
> {
  const attempt = await db.mockTestAttempt.findUnique({
    where: { id: attemptId },
    include: { mockTest: true },
  });
  if (!attempt || attempt.userId !== userId) {
    return { ok: false, reason: "Attempt not found." };
  }
  const question = await db.mockTestQuestion.findUnique({ where: { id: questionId } });
  if (!question) return { ok: false, reason: "Question not found." };
  const ownerSection = await db.mockTestSection.findUnique({ where: { id: question.sectionId } });
  if (!ownerSection || ownerSection.mockTestId !== attempt.mockTestId) {
    return { ok: false, reason: "This question does not belong to that attempt." };
  }

  let payload: unknown = {};
  try {
    payload = JSON.parse(question.payload);
  } catch {
    payload = {};
  }
  let answerKey: unknown = null;
  try {
    answerKey = question.answer ? JSON.parse(question.answer) : null;
  } catch {
    answerKey = null;
  }

  const resolved = resolveEvaluator({
    examKey: attempt.mockTest.examKey,
    variant: attempt.mockTest.variant,
    section: ownerSection.key,
    questionType: question.type,
    payload,
    stem: question.stem,
  });
  if (!resolved) {
    return {
      ok: false,
      reason:
        "This question type does not have a writing/speaking evaluator (objective items are machine-marked by the engine).",
    };
  }
  return {
    ok: true,
    resolved,
    answerKey,
    examKey: attempt.mockTest.examKey,
    variant: attempt.mockTest.variant,
  };
}

// ---------------------------------------------------------------------------
// Create / revise / list / chain
// ---------------------------------------------------------------------------

export async function createEvaluation(
  userId: string,
  input: CreateEvaluationInput,
): Promise<{ ok: true; evaluation: StoredEvaluationDto } | { ok: false; reason: string }> {
  let resolved: ResolvedTask;
  let answerKey: unknown = null;
  let attemptId: string | null = null;
  let questionId: string | null = null;
  let freeTaskLimitation = false;

  if (input.attemptId && input.questionId) {
    const outcome = await resolveFromQuestion(userId, input.attemptId, input.questionId);
    if (!outcome.ok) return outcome;
    resolved = outcome.resolved;
    answerKey = outcome.answerKey;
    attemptId = input.attemptId;
    questionId = input.questionId;
  } else if (input.evaluatorKey) {
    const profile = EVALUATOR_PROFILES[input.evaluatorKey as EvaluatorKey];
    if (!profile) return { ok: false, reason: "Unknown evaluator key." };
    const taskPrompt = (input.taskPrompt ?? "").trim();
    resolved = {
      profile,
      taskTitle: profile.taskLabel,
      promptText: taskPrompt || "(free evaluation — the original task prompt was not supplied)",
      payload: {},
    };
    freeTaskLimitation = taskPrompt.length === 0;
  } else {
    return { ok: false, reason: "Provide either attemptId + questionId, or evaluatorKey." };
  }

  const rubricText = await loadRubricText(resolved.profile.rubricTaskKey);
  const { result, status } = await evaluateResponse({
    resolved,
    response: input.text,
    transcriptSource: input.transcriptSource,
    audioSec: input.audioSec ?? null,
    answerKey,
  });
  if (freeTaskLimitation) {
    result.limitations = [
      "Free evaluation: no original task prompt was provided, so task-fit feedback follows the standard format of this task type. For task-specific feedback, evaluate from a mock result.",
      ...result.limitations,
    ];
  }

  const row = await db.mockEvaluation.create({
    data: {
      userId,
      attemptId,
      questionId,
      examKey: resolved.profile.examKey,
      section: resolved.profile.section,
      evaluatorKey: resolved.profile.key,
      taskTitle: resolved.taskTitle,
      inputText: input.text,
      transcriptSource: input.transcriptSource,
      audioSec: input.audioSec ?? null,
      result: JSON.stringify(result),
      status,
    },
  });
  return { ok: true, evaluation: toEvaluationDto(row) };
}

export async function reviseEvaluation(
  userId: string,
  evaluationId: string,
  input: { text: string; transcriptSource: TranscriptSource; audioSec?: number | null },
): Promise<
  | { ok: true; evaluation: StoredEvaluationDto; comparison: EvaluationComparisonDto }
  | { ok: false; reason: string }
> {
  const base = await db.mockEvaluation.findUnique({ where: { id: evaluationId } });
  if (!base || base.userId !== userId) return { ok: false, reason: "Evaluation not found." };

  // Rebuild the task context. Linked question → re-resolve (payload may have
  // been enriched); otherwise rebuild from the stored evaluator key.
  let resolved: ResolvedTask;
  let answerKey: unknown = null;
  if (base.attemptId && base.questionId) {
    const outcome = await resolveFromQuestion(userId, base.attemptId, base.questionId);
    if (outcome.ok) {
      resolved = outcome.resolved;
      answerKey = outcome.answerKey;
    } else {
      const profile = EVALUATOR_PROFILES[base.evaluatorKey as EvaluatorKey];
      if (!profile) return { ok: false, reason: "Stored evaluator no longer exists." };
      resolved = { profile, taskTitle: base.taskTitle, promptText: "", payload: {} };
    }
  } else {
    const profile = EVALUATOR_PROFILES[base.evaluatorKey as EvaluatorKey];
    if (!profile) return { ok: false, reason: "Stored evaluator no longer exists." };
    resolved = { profile, taskTitle: base.taskTitle, promptText: "", payload: {} };
  }

  const rubricText = await loadRubricText(resolved.profile.rubricTaskKey);
  const priorResult = (() => {
    try {
      return JSON.parse(base.result) as EvaluationResultDto;
    } catch {
      return null;
    }
  })();

  const { result, status } = await evaluateResponse({
    resolved,
    response: input.text,
    transcriptSource: input.transcriptSource,
    audioSec: input.audioSec ?? null,
    answerKey,
    isRevision: true,
    priorResult,
    rubricText,
  });

  const row = await db.mockEvaluation.create({
    data: {
      userId,
      attemptId: base.attemptId,
      questionId: base.questionId,
      examKey: base.evaluatorKey.startsWith("IELTS") ? "IELTS" : "TOEFL_IBT",
      section: base.section,
      evaluatorKey: base.evaluatorKey,
      taskTitle: base.taskTitle,
      inputText: input.text,
      transcriptSource: input.transcriptSource,
      audioSec: input.audioSec ?? null,
      revisionOfId: base.id,
      result: JSON.stringify(result),
      status,
    },
  });

  const comparison = compareEvaluations(priorResult ?? result, result, {
    baseId: base.id,
    revisedId: row.id,
  });
  return { ok: true, evaluation: toEvaluationDto(row), comparison };
}

export async function listEvaluations(
  userId: string,
  filter: { questionId?: string; attemptId?: string; evaluatorKey?: string; limit?: number } = {},
): Promise<StoredEvaluationDto[]> {
  const rows = await db.mockEvaluation.findMany({
    where: {
      userId,
      ...(filter.questionId ? { questionId: filter.questionId } : {}),
      ...(filter.attemptId ? { attemptId: filter.attemptId } : {}),
      ...(filter.evaluatorKey ? { evaluatorKey: filter.evaluatorKey } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: filter.limit ?? 30,
  });
  return rows.map(toEvaluationDto);
}

/** Full chain (root → … → this evaluation) plus root-vs-latest comparison. */
export async function getEvaluationChain(
  userId: string,
  evaluationId: string,
): Promise<
  | { ok: true; chain: StoredEvaluationDto[]; comparison: EvaluationComparisonDto | null }
  | { ok: false; reason: string }
> {
  const head = await db.mockEvaluation.findUnique({ where: { id: evaluationId } });
  if (!head || head.userId !== userId) return { ok: false, reason: "Evaluation not found." };

  // Walk up to the root.
  let rootId = head.id;
  let cursor: typeof head | null = head;
  while (cursor && cursor.revisionOfId) {
    const parent = await db.mockEvaluation.findUnique({ where: { id: cursor.revisionOfId } });
    if (!parent || parent.userId !== userId) break;
    rootId = parent.id;
    cursor = parent;
  }
  // Collect the whole chain depth-first (roots are old; revisions follow).
  const chainRows: EvaluationRow[] = [];
  const collect = async (id: string) => {
    const row = await db.mockEvaluation.findUnique({ where: { id } });
    if (!row || row.userId !== userId) return;
    chainRows.push(row);
    const children = await db.mockEvaluation.findMany({
      where: { revisionOfId: id },
      orderBy: { createdAt: "asc" },
    });
    for (const child of children) await collect(child.id);
  };
  await collect(rootId);
  const chain = chainRows.map(toEvaluationDto);

  const comparison =
    chain.length > 1
      ? compareEvaluations(chain[0].result, chain[chain.length - 1].result, {
          baseId: chain[0].id,
          revisedId: chain[chain.length - 1].id,
        })
      : null;
  return { ok: true, chain, comparison };
}

// ---------------------------------------------------------------------------
// Evaluation overview: recent evaluations + per-evaluator improvement rollup
// ---------------------------------------------------------------------------

/**
 * The learner's evaluation history across ALL evaluators (the studio's
 * "My evaluations" tab). Improvement is computed per evaluator key from
 * chain ROOTS: the first root's overall vs the latest evaluation in that
 * evaluator's most recent chain — never comparing across different chains
 * of unrelated tasks (which would fabricate progress).
 */
export async function evaluationOverview(userId: string): Promise<EvaluationOverviewDto> {
  const allRows = await db.mockEvaluation.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  const evaluations = allRows.slice(0, 50).map(toEvaluationDto);

  const byEvaluator = new Map<string, EvaluationRow[]>();
  for (const row of allRows) {
    const list = byEvaluator.get(row.evaluatorKey) ?? [];
    list.push(row);
    byEvaluator.set(row.evaluatorKey, list);
  }

  const improvement: EvaluatorImprovementDto[] = [];
  for (const [evaluatorKey, rows] of byEvaluator) {
    const profile = EVALUATOR_PROFILES[evaluatorKey as EvaluatorKey];
    const ordered = [...rows].sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
    const overallOf = (row: EvaluationRow): number | null => {
      try {
        const parsed = JSON.parse(row.result) as EvaluationResultDto;
        return parsed.overall?.score ?? null;
      } catch {
        return null;
      }
    };
    // First overall ever recorded vs the latest overall recorded.
    const firstOverall = overallOf(ordered[0]!);
    const latestOverall = overallOf(ordered[ordered.length - 1]!);
    const round = (value: number) => Math.round(value * 10) / 10;
    improvement.push({
      evaluatorKey,
      label: profile?.taskLabel ?? evaluatorLabel(evaluatorKey),
      examKey: profile?.examKey ?? (evaluatorKey.startsWith("IELTS") ? "IELTS" : "TOEFL_IBT"),
      section: profile?.section ?? (rows[0]?.section as "writing" | "speaking") ?? "writing",
      attempts: rows.length,
      chains: ordered.filter((row) => row.revisionOfId === null).length,
      firstOverall: firstOverall !== null ? round(firstOverall) : null,
      latestOverall: latestOverall !== null ? round(latestOverall) : null,
      overallDelta:
        firstOverall !== null && latestOverall !== null ? round(latestOverall - firstOverall) : null,
      unit: profile?.scale.unit ?? "level",
      lastAt: ordered[ordered.length - 1]!.createdAt.toISOString(),
    });
  }
  improvement.sort((a, b) => (a.lastAt < b.lastAt ? 1 : -1));

  return {
    evaluations,
    improvement,
    totalEvaluations: allRows.length,
  };
}

// ---------------------------------------------------------------------------
// Human review (staff): a teacher's note added on top of the AI report
// ---------------------------------------------------------------------------

/**
 * Marks an evaluation as human-reviewed. The stored AI report is NEVER
 * altered — only the review layer fields are written — so the learner can
 * always see both the AI's judgement and the teacher's, separately labelled.
 */
export async function reviewEvaluation(
  evaluationId: string,
  reviewer: { role: string },
  note: string,
): Promise<{ ok: true; evaluation: StoredEvaluationDto } | { ok: false; reason: string }> {
  const trimmed = note.trim();
  if (trimmed.length < 10) {
    return { ok: false, reason: "A review note of at least 10 characters is required." };
  }
  const existing = await db.mockEvaluation.findUnique({ where: { id: evaluationId } });
  if (!existing) return { ok: false, reason: "Evaluation not found." };
  const row = await db.mockEvaluation.update({
    where: { id: evaluationId },
    data: {
      reviewStatus: "human_reviewed",
      reviewerRole: reviewer.role,
      reviewerNote: trimmed.slice(0, 4000),
      reviewedAt: new Date(),
    },
  });
  return { ok: true, evaluation: toEvaluationDto(row) };
}
