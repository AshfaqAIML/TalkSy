/**
 * IELTS Writing Masterclass — task bank service (PROMPT 46, Parts E–G).
 *
 * Serves safe projections (planning notes, model answers, analyses, level
 * samples, requirement keyword lists and vocabulary banks never leave the
 * server before submission), records drafts (autosave), evaluates
 * submissions through the deterministic engine plus the AI commentary
 * seam, stores attempts — versioned, so every revision chains to its
 * predecessor — and returns the full review payload after submission:
 * the report, the revealed teaching content, and the attempt history.
 */

import { db } from "@/lib/db";
import { writingTaskBySlug } from "@/data/exams/ielts/writing-bank";
import type { WritingBankTask } from "@/data/exams/ielts/writing-bank/types";
import { evaluateWriting, type WritingEvaluation } from "./evaluate";

// ---------------------------------------------------------------------------
// Safe projection (client shape) — the prompt travels, the key does not
// ---------------------------------------------------------------------------

export type SafeWritingTask = {
  slug: string;
  title: string;
  channel: "academic" | "gt";
  taskType: "task-1" | "task-2";
  family: string;
  familyLabel: string;
  register?: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  wordMinimum: number;
  timeLimitSec: number;
  prompt: string;
  bullets?: string[];
  visual?: WritingBankTask["visual"];
  situation?: string;
  requirementDescriptions: string[];
  source: string;
};

const FAMILY_LABELS: Record<string, string> = {
  bar: "Bar chart", line: "Line graph", pie: "Pie chart", table: "Table", mixed: "Mixed charts",
  process: "Process diagram", map: "Map",
  opinion: "Opinion essay", discussion: "Discussion essay", "advantages-disadvantages": "Advantages and disadvantages",
  "problem-solution": "Problem and solution", "cause-effect": "Cause and effect", "two-part": "Two-part question",
  "direct-questions": "Direct questions",
  complaint: "Complaint letter", request: "Request letter", invitation: "Invitation letter",
  apology: "Apology letter", explanation: "Explanation letter", suggestion: "Suggestion letter",
};

const DIFFICULTY_LABELS: Record<number, string> = { 1: "foundation", 2: "foundation", 3: "standard", 4: "advanced", 5: "advanced" };

export function toSafeWritingTask(task: WritingBankTask): SafeWritingTask {
  return {
    slug: task.slug,
    title: task.title,
    channel: task.channel,
    taskType: task.taskType,
    family: task.family,
    familyLabel: FAMILY_LABELS[task.family] ?? task.family,
    ...(task.register ? { register: task.register } : {}),
    difficulty: task.difficulty,
    difficultyLabel: DIFFICULTY_LABELS[task.difficulty],
    estimatedMinutes: task.estimatedMinutes,
    wordMinimum: task.wordMinimum,
    timeLimitSec: task.timeLimitSec,
    prompt: task.prompt,
    ...(task.bullets ? { bullets: [...task.bullets] } : {}),
    ...(task.visual ? { visual: task.visual } : {}),
    ...(task.situation ? { situation: task.situation } : {}),
    // Descriptions only — the keyword lists the matcher uses stay server-side.
    requirementDescriptions: task.requirements.map((r) => r.description),
    source: task.source,
  };
}

export async function getSafeWritingTaskBySlug(slug: string): Promise<SafeWritingTask | null> {
  const task = writingTaskBySlug(slug);
  return task ? toSafeWritingTask(task) : null;
}

// ---------------------------------------------------------------------------
// Drafts (autosave)
// ---------------------------------------------------------------------------

export type WritingDraftDto = { content: string; wordCount: number; updatedAt: string | null };

export function countWritingWords(content: string): number {
  return (content.trim().match(/[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g) ?? []).length;
}

export async function saveWritingDraft(userId: string, taskSlug: string, content: string): Promise<WritingDraftDto> {
  const wordCount = countWritingWords(content);
  const row = await db.writingBankDraft.upsert({
    where: { userId_taskSlug: { userId, taskSlug } },
    create: { userId, taskSlug, content, wordCount },
    update: { content, wordCount },
  });
  return { content: row.content, wordCount: row.wordCount, updatedAt: row.updatedAt.toISOString() };
}

export async function getWritingDraft(userId: string, taskSlug: string): Promise<WritingDraftDto> {
  const row = await db.writingBankDraft.findUnique({ where: { userId_taskSlug: { userId, taskSlug } } });
  return {
    content: row?.content ?? "",
    wordCount: row?.wordCount ?? 0,
    updatedAt: row?.updatedAt.toISOString() ?? null,
  };
}

// ---------------------------------------------------------------------------
// Submission + evaluation + attempt recording
// ---------------------------------------------------------------------------

export type WritingSubmissionInput = {
  mode: "exam" | "practice";
  content: string;
  timeSpentSec: number;
};

export type WritingAttemptDto = {
  id: string;
  version: number;
  wordCount: number;
  overall: number;
  criteriaScores: Record<string, number>;
  timeSpentSec: number;
  mode: string;
  timed: boolean;
  aiAvailable: boolean;
  createdAt: string;
};

function toAttemptDto(row: {
  id: string; version: number; wordCount: number; overall: number; criteria: string;
  timeSpentSec: number; mode: string; timed: boolean; aiAvailable: boolean; createdAt: Date;
}): WritingAttemptDto {
  let criteriaScores: Record<string, number> = {};
  try {
    const parsed = JSON.parse(row.criteria) as Record<string, { score?: number }>;
    criteriaScores = Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, typeof v?.score === "number" ? v.score : 0]));
  } catch {
    criteriaScores = {};
  }
  return {
    id: row.id,
    version: row.version,
    wordCount: row.wordCount,
    overall: row.overall,
    criteriaScores,
    timeSpentSec: row.timeSpentSec,
    mode: row.mode,
    timed: row.timed,
    aiAvailable: row.aiAvailable,
    createdAt: row.createdAt.toISOString(),
  };
}

export async function listWritingAttempts(userId: string, taskSlug: string): Promise<WritingAttemptDto[]> {
  const rows = await db.writingBankAttempt.findMany({
    where: { userId, taskSlug },
    orderBy: { version: "asc" },
  });
  return rows.map(toAttemptDto);
}

export type WritingSubmissionResult = {
  attemptId: string;
  version: number;
  evaluation: WritingEvaluation;
  attempt: WritingAttemptDto;
  history: WritingAttemptDto[];
  /** The review payload — teaching content revealed only now (Part E). */
  review: {
    requirements: { key: string; description: string; met: boolean }[];
    planningNotes: WritingBankTask["planningNotes"];
    modelAnswer: WritingBankTask["modelAnswer"];
    analysis: WritingBankTask["analysis"];
    levelSamples: WritingBankTask["levelSamples"];
    vocabularyBank: WritingBankTask["vocabularyBank"];
  };
};

export async function submitWritingTask(
  userId: string,
  task: WritingBankTask,
  input: WritingSubmissionInput,
): Promise<WritingSubmissionResult> {
  const evaluation = await evaluateWriting(task, input.content);

  const last = await db.writingBankAttempt.findFirst({
    where: { userId, taskSlug: task.slug },
    orderBy: { version: "desc" },
  });

  const criteriaPayload = Object.fromEntries(
    evaluation.criteria.map((c) => [
      c.key,
      { score: c.score, name: c.name, feedback: c.feedback, evidence: c.evidence },
    ]),
  );

  const row = await db.writingBankAttempt.create({
    data: {
      userId,
      taskSlug: task.slug,
      channel: task.channel,
      taskType: task.taskType,
      family: task.family,
      ...(task.register ? { register: task.register } : {}),
      mode: input.mode === "practice" ? "practice" : "exam",
      timed: input.mode !== "practice",
      version: (last?.version ?? 0) + 1,
      wordCount: evaluation.metrics.wordCount,
      timeSpentSec: Math.max(0, Math.min(14400, Math.round(input.timeSpentSec || 0))),
      content: input.content,
      overall: evaluation.overall,
      criteria: JSON.stringify(criteriaPayload),
      measured: JSON.stringify(evaluation.metrics),
      aiAvailable: evaluation.aiAvailable,
      ...(evaluation.aiCommentary ? { aiCommentary: JSON.stringify(evaluation.aiCommentary) } : {}),
    },
  });

  // Met/unmet requirements for the review panel (keywords never travel; the
  // verdict does).
  const metSet = new Set(
    task.requirements
      .filter((r) => !evaluation.metrics.missedRequirements.includes(r.description))
      .map((r) => r.key),
  );

  const history = await listWritingAttempts(userId, task.slug);

  return {
    attemptId: row.id,
    version: row.version,
    evaluation,
    attempt: toAttemptDto(row),
    history,
    review: {
      requirements: task.requirements.map((r) => ({
        key: r.key,
        description: r.description,
        met: metSet.has(r.key),
      })),
      planningNotes: task.planningNotes,
      modelAnswer: task.modelAnswer,
      analysis: task.analysis,
      levelSamples: task.levelSamples,
      vocabularyBank: task.vocabularyBank,
    },
  };
}

/** Reopen any past attempt (Part F spirit for writing): the stored evaluation
 * plus the task's revealed teaching content, for review and revision. */
export async function reopenWritingAttempt(
  userId: string,
  attemptId: string,
): Promise<{ attempt: WritingAttemptDto & { content: string; taskSlug: string; family: string; channel: string; taskType: string }; evaluation: WritingEvaluation } | null> {
  const row = await db.writingBankAttempt.findFirst({ where: { id: attemptId, userId } });
  if (!row) return null;
  const task = writingTaskBySlug(row.taskSlug);
  if (!task) return null;

  let criteriaRaw: Record<string, { score?: number; name?: string; feedback?: unknown; evidence?: unknown }> = {};
  let measuredRaw: Record<string, unknown> = {};
  let aiCommentary: WritingEvaluation["aiCommentary"] = null;
  try {
    criteriaRaw = JSON.parse(row.criteria);
    measuredRaw = JSON.parse(row.measured);
    aiCommentary = row.aiCommentary ? (JSON.parse(row.aiCommentary) as WritingEvaluation["aiCommentary"]) : null;
  } catch {
    criteriaRaw = {};
  }

  const definitions = task
    ? (await import("@/data/exams/ielts/writing-bank/types")).writingCriteriaFor(task)
    : [];

  const evaluation: WritingEvaluation = {
    criteria: definitions.map((def) => {
      const raw = criteriaRaw[def.key] ?? {};
      return {
        key: def.key,
        name: def.name,
        score: typeof raw.score === "number" ? raw.score : 0,
        maxScore: 9,
        unit: "band",
        descriptor: def.descriptor,
        feedback: Array.isArray(raw.feedback) ? (raw.feedback as WritingEvaluation["criteria"][number]["feedback"]) : [],
        evidence: Array.isArray(raw.evidence) ? (raw.evidence as WritingEvaluation["criteria"][number]["evidence"]) : [],
      };
    }),
    overall: row.overall,
    overallLabel: `Estimated band ${row.overall.toFixed(1)} (educational estimate)`,
    metrics: measuredRaw as unknown as WritingEvaluation["metrics"],
    strengths: [],
    improvements: [],
    disclaimers: (await import("./evaluate")).WRITING_DISCLAIMERS,
    status: "complete",
    aiAvailable: row.aiAvailable,
    aiCommentary,
  };

  return {
    attempt: {
      id: row.id,
      version: row.version,
      wordCount: row.wordCount,
      overall: row.overall,
      criteriaScores: Object.fromEntries(Object.entries(criteriaRaw).map(([k, v]) => [k, typeof v?.score === "number" ? v.score : 0])),
      timeSpentSec: row.timeSpentSec,
      mode: row.mode,
      timed: row.timed,
      aiAvailable: row.aiAvailable,
      createdAt: row.createdAt.toISOString(),
      content: row.content,
      taskSlug: row.taskSlug,
      family: row.family,
      channel: row.channel,
      taskType: row.taskType,
    },
    evaluation,
  };
}
