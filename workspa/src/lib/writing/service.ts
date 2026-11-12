/**
 * Writing Studio persistence — drafts (autosave), submissions (version
 * history), progress, and the library payload.
 *
 * Writing scores stay HERE: they are never written to UserStats, keeping
 * the writing rubric fully separate from general proficiency counters.
 * No auto-mastery: progress rows are created by real activity only, and an
 * assignment completes only when a submission reaches its pass threshold.
 */

import { db } from "@/lib/db";
import { writingAssignments, getWritingAssignment, toSafeWritingAssignment } from "@/data/writing";
import type { SafeWritingAssignment, WritingDimension } from "@/data/writing/types";
import type { WritingIssue, WritingMeasured, WritingAiFeedback } from "@/data/writing/types";

// ---------------------------------------------------------------------------
// Progress
// ---------------------------------------------------------------------------

export interface WritingProgressDto {
  assignmentId: string;
  status: "in-progress" | "completed";
  draftsCount: number;
  submissionsCount: number;
  bestScore: number;
  lastScore: number;
  completedAt: string | null;
}

type ProgressRow = Awaited<ReturnType<typeof db.writingProgress.findUnique>>;

function toProgressDto(row: NonNullable<ProgressRow>): WritingProgressDto {
  return {
    assignmentId: row.assignmentId,
    status: row.status === "completed" ? "completed" : "in-progress",
    draftsCount: row.draftsCount,
    submissionsCount: row.submissionsCount,
    bestScore: row.bestScore,
    lastScore: row.lastScore,
    completedAt: row.completedAt?.toISOString() ?? null,
  };
}

async function ensureProgress(userId: string, assignmentId: string, tier: string) {
  const existing = await db.writingProgress.findUnique({
    where: { userId_assignmentId: { userId, assignmentId } },
  });
  if (existing) return existing;
  return db.writingProgress.create({ data: { userId, assignmentId, tier } });
}

export async function bumpDraft(userId: string, assignmentId: string, tier: string) {
  const row = await ensureProgress(userId, assignmentId, tier);
  return db.writingProgress.update({
    where: { id: row.id },
    data: { draftsCount: row.draftsCount + 1 },
  });
}

export async function applySubmission(
  userId: string,
  assignmentId: string,
  tier: string,
  input: { overall: number; passed: boolean },
): Promise<WritingProgressDto> {
  const row = await ensureProgress(userId, assignmentId, tier);
  const wasCompleted = row.status === "completed";
  const updated = await db.writingProgress.update({
    where: { id: row.id },
    data: {
      submissionsCount: row.submissionsCount + 1,
      bestScore: Math.max(row.bestScore, input.overall / 100),
      lastScore: input.overall / 100,
      status: input.passed || wasCompleted ? "completed" : "in-progress",
      completedAt:
        input.passed && !wasCompleted ? new Date() : row.completedAt,
    },
  });
  return toProgressDto(updated);
}

export async function getWritingProgress(
  userId: string,
  assignmentId: string,
): Promise<WritingProgressDto | null> {
  const row = await db.writingProgress.findUnique({
    where: { userId_assignmentId: { userId, assignmentId } },
  });
  return row ? toProgressDto(row) : null;
}

// ---------------------------------------------------------------------------
// Drafts (autosave)
// ---------------------------------------------------------------------------

export interface WritingDraftDto {
  content: string;
  wordCount: number;
  charCount: number;
  updatedAt: string | null;
}

export function countWords(content: string): number {
  return content
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

export async function saveDraft(
  userId: string,
  assignmentId: string,
  content: string,
): Promise<WritingDraftDto> {
  const wordCount = countWords(content);
  const existing = await db.writingDraft.findUnique({
    where: { userId_assignmentId: { userId, assignmentId } },
  });
  const data = { content, wordCount, charCount: content.length };
  const row = existing
    ? await db.writingDraft.update({ where: { id: existing.id }, data })
    : await db.writingDraft.create({ data: { userId, assignmentId, ...data } });
  return {
    content: row.content,
    wordCount: row.wordCount,
    charCount: row.charCount,
    updatedAt: row.updatedAt.toISOString(),
  };
}

export async function getDraft(
  userId: string,
  assignmentId: string,
): Promise<WritingDraftDto> {
  const row = await db.writingDraft.findUnique({
    where: { userId_assignmentId: { userId, assignmentId } },
  });
  return {
    content: row?.content ?? "",
    wordCount: row?.wordCount ?? 0,
    charCount: row?.charCount ?? 0,
    updatedAt: row?.updatedAt.toISOString() ?? null,
  };
}

// ---------------------------------------------------------------------------
// Submissions (version history + comparison)
// ---------------------------------------------------------------------------

export interface WritingSubmissionDto {
  id: string;
  version: number;
  content: string;
  wordCount: number;
  overall: number;
  scores: Record<WritingDimension, number>;
  issueCount: number;
  passed: boolean;
  createdAt: string;
}

function parseScores(raw: string): Record<WritingDimension, number> {
  try {
    return JSON.parse(raw) as Record<WritingDimension, number>;
  } catch {
    return {} as Record<WritingDimension, number>;
  }
}

function countIssues(raw: string): number {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

function toSubmissionDto(row: {
  id: string;
  version: number;
  content: string;
  wordCount: number;
  overall: number;
  scores: string;
  issues: string;
  passed: boolean;
  createdAt: Date;
}): WritingSubmissionDto {
  return {
    id: row.id,
    version: row.version,
    content: row.content,
    wordCount: row.wordCount,
    overall: row.overall,
    scores: parseScores(row.scores),
    issueCount: countIssues(row.issues),
    passed: row.passed,
    createdAt: row.createdAt.toISOString(),
  };
}

export interface CreateSubmissionInput {
  userId: string;
  assignmentId: string;
  content: string;
  wordCount: number;
  durationMs: number;
  overall: number;
  scores: Record<WritingDimension, number>;
  measured: WritingMeasured;
  issues: WritingIssue[];
  aiFeedback: WritingAiFeedback | null;
  passed: boolean;
}

export async function createSubmission(
  input: CreateSubmissionInput,
): Promise<WritingSubmissionDto> {
  const last = await db.writingSubmission.findFirst({
    where: { userId: input.userId, assignmentId: input.assignmentId },
    orderBy: { version: "desc" },
  });
  const row = await db.writingSubmission.create({
    data: {
      userId: input.userId,
      assignmentId: input.assignmentId,
      version: (last?.version ?? 0) + 1,
      content: input.content,
      wordCount: input.wordCount,
      durationMs: input.durationMs,
      overall: input.overall / 100,
      scores: JSON.stringify(input.scores),
      measured: JSON.stringify(input.measured),
      issues: JSON.stringify(input.issues),
      aiFeedback: JSON.stringify(input.aiFeedback),
      passed: input.passed,
    },
  });
  return toSubmissionDto(row);
}

export async function listSubmissions(
  userId: string,
  assignmentId: string,
): Promise<WritingSubmissionDto[]> {
  const rows = await db.writingSubmission.findMany({
    where: { userId, assignmentId },
    orderBy: { version: "asc" },
  });
  return rows.map(toSubmissionDto);
}

// ---------------------------------------------------------------------------
// Library
// ---------------------------------------------------------------------------

export interface WritingLibraryAssignment {
  id: string;
  slug: string;
  tier: string;
  kind: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags: string[];
  taskCount: number;
  passThreshold: number;
  progress: {
    status: string;
    submissionsCount: number;
    bestScore: number;
    completedAt: string | null;
  } | null;
}

export async function writingLibraryPayload(userId: string) {
  const [progressRows, submissionCounts, draftsCount, submissionsTotal] =
    await Promise.all([
      db.writingProgress.findMany({ where: { userId } }),
      db.writingSubmission.groupBy({
        by: ["assignmentId"],
        where: { userId },
        _count: { _all: true },
      }),
      db.writingDraft.count({ where: { userId } }),
      db.writingSubmission.count({ where: { userId } }),
    ]);
  const progressById = new Map(progressRows.map((r) => [r.assignmentId, r]));
  const countByAssignment = new Map(
    submissionCounts.map((c) => [c.assignmentId, c._count._all]),
  );

  return {
    assignments: writingAssignments.map((assignment): WritingLibraryAssignment => {
      const row = progressById.get(assignment.id);
      return {
        id: assignment.id,
        slug: assignment.slug,
        tier: assignment.tier,
        kind: assignment.kind,
        title: assignment.title,
        description: assignment.description,
        estimatedMinutes: assignment.estimatedMinutes,
        tags: assignment.tags ?? [],
        taskCount: assignment.tasks.length,
        passThreshold: assignment.passThreshold,
        progress: row
          ? {
              status: row.status,
              submissionsCount: countByAssignment.get(assignment.id) ?? 0,
              bestScore: row.bestScore,
              completedAt: row.completedAt?.toISOString() ?? null,
            }
          : null,
      };
    }),
    // Writing-only stats — deliberately separate from UserStats.
    stats: {
      draftsSaved: draftsCount,
      submissions: submissionsTotal,
      assignmentsCompleted: progressRows.filter((r) => r.status === "completed").length,
      totalAssignments: writingAssignments.length,
    },
  };
}

/** Full editor bundle: safe assignment + draft + version history. */
export async function writingAssignmentBundle(userId: string, slug: string): Promise<{
  assignment: SafeWritingAssignment;
  draft: WritingDraftDto;
  progress: WritingProgressDto | null;
  submissions: WritingSubmissionDto[];
} | null> {
  const assignment = getWritingAssignment(slug);
  if (!assignment) return null;
  const [draft, progress, submissions] = await Promise.all([
    getDraft(userId, assignment.id),
    getWritingProgress(userId, assignment.id),
    listSubmissions(userId, assignment.id),
  ]);
  return {
    assignment: toSafeWritingAssignment(assignment),
    draft,
    progress,
    submissions,
  };
}
