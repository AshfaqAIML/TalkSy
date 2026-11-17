/**
 * Examination question management + review workflow.
 *
 * Every question in a mock test moves through a human-approval chain:
 *
 *      draft ──submit(editor)──▶ in-review ──approve(teacher)──▶ approved
 *        ▲                          │                              │
 *        └────reject(teacher)───────┘                     publish(admin)
 *                                                             │
 *                            unpublish(admin) ◀───────────────▼ published
 *                                             retire(admin) ──▶ retired
 *
 * Rules (test-enforced):
 *   - Only drafts can be submitted; only in-review can be approved or
 *     rejected; only approved can be published; only admins publish.
 *   - Editing a PUBLISHED question drops it back to in-review — content
 *     changes are re-approved, never silently live.
 *   - Payloads validate against the same per-type zod schemas the learner
 *     engine uses; answer keys validate against the grading shapes.
 *   - Every create/update/transition writes the CMS audit trail with
 *     actor, action and before/after state.
 *   - Learner-facing surfaces only ever see published questions (the
 *     practice pool already filters; mock publication is gated on all
 *     questions being published — see workflow.ts).
 */

import { db } from "@/lib/db";
import { roleAtLeast } from "@/lib/cms/rbac";
import { ASSEMBLED_SET_KINDS } from "../types";
import type { CmsRole } from "@/data/cms/types";
import {
  QUESTION_REVIEW_STATES,
  QUESTION_TRANSITIONS,
  TRANSITION_FROM_STATE,
  TRANSITION_MIN_ROLE,
  questionCreateSchema,
  NO_ANSWER_KEY_TYPES,
  questionUpdateSchema,
  validateAnswerKey,
  validateQuestionPayload,
  type AdminQuestionDto,
  type QuestionCreateInput,
  type QuestionReviewState,
  type QuestionUpdateInput,
} from "./types";

export class AdminServiceError extends Error {
  status: number;
  constructor(message: string, status = 422) {
    super(message);
    this.status = status;
  }
}

const ASSEMBLED_KINDS = ASSEMBLED_SET_KINDS;

type QuestionRow = {
  id: string;
  sectionId: string;
  order: number;
  type: string;
  stem: string | null;
  payload: string;
  answer: string | null;
  points: number;
  difficulty: number;
  skills: string;
  explanation: string | null;
  source: string;
  contentStatus: string;
  section: {
    key: string;
    mockTest: {
      id: string;
      title: string;
      examKey: string;
      variant: string;
      kind: string;
    };
  };
};

function previewFor(row: { type: string; payload: string; stem: string | null }): string {
  try {
    const payload = JSON.parse(row.payload) as Record<string, unknown>;
    const parts: string[] = [];
    if (row.stem) parts.push(row.stem);
    const candidates = [
      "prompt",
      "situation",
      "statement",
      "context",
      "audioScript",
      "sentence",
      "passage",
    ];
    for (const key of candidates) {
      const value = payload[key];
      if (typeof value === "string" && value.trim()) {
        parts.push(value.trim());
        break;
      }
    }
    const options = payload.options;
    if (Array.isArray(options) && options.length > 0) {
      parts.push(options.slice(0, 3).join(" · "));
    }
    const text = parts.join(" — ");
    return text.length > 140 ? `${text.slice(0, 140)}…` : text || "(no preview)";
  } catch {
    return row.stem ?? "(no preview)";
  }
}

function answerLabelFor(row: { type: string; answer: string | null }): string | null {
  if (!row.answer) return null;
  try {
    const parsed = JSON.parse(row.answer) as unknown;
    if (typeof parsed === "object" && parsed !== null) {
      const flat = Object.entries(parsed as Record<string, unknown>)
        .map(([key, value]) => `${key}: ${JSON.stringify(value).slice(0, 40)}`)
        .join(", ");
      return flat.slice(0, 120) || "—";
    }
    return JSON.stringify(parsed).slice(0, 120);
  } catch {
    return "(invalid JSON)";
  }
}

function toDto(row: QuestionRow): AdminQuestionDto {
  const status = (QUESTION_REVIEW_STATES as readonly string[]).includes(row.contentStatus)
    ? (row.contentStatus as QuestionReviewState)
    : "draft";
  return {
    id: row.id,
    sectionId: row.sectionId,
    mockTestId: row.section.mockTest.id,
    mockTitle: row.section.mockTest.title,
    examKey: row.section.mockTest.examKey,
    variant: row.section.mockTest.variant,
    section: row.section.key,
    order: row.order,
    type: row.type,
    typeLabel: row.type.replaceAll("_", " ").toLowerCase(),
    stem: row.stem,
    preview: previewFor(row),
    payload: safeParse(row.payload),
    answer: safeParse(row.answer),
    answerLabel: answerLabelFor(row),
    points: row.points,
    difficulty: row.difficulty,
    skills: safeParse(row.skills) as string[],
    explanation: row.explanation,
    source: row.source,
    contentStatus: status,
  };
}

function safeParse(raw: string | null): unknown {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Listing
// ---------------------------------------------------------------------------

export type QuestionListFilter = {
  status?: string;
  examKey?: string;
  mockTestId?: string;
  type?: string;
  search?: string;
};

export async function listAdminQuestions(
  filter: QuestionListFilter,
  take = 300,
): Promise<AdminQuestionDto[]> {
  const where: Record<string, unknown> = {
    section: {
      mockTest: {
        kind: { notIn: ASSEMBLED_KINDS as unknown as string[] },
        ...(filter.examKey ? { examKey: filter.examKey } : {}),
        ...(filter.mockTestId ? { id: filter.mockTestId } : {}),
      },
    },
  };
  if (filter.status && filter.status !== "all") where.contentStatus = filter.status;
  if (filter.type && filter.type !== "all") where.type = filter.type;
  if (filter.search) {
    // Search stems and JSON payloads with a plain substring match.
    where.OR = [
      { stem: { contains: filter.search } },
      { payload: { contains: filter.search } },
    ];
  }
  const rows = await db.mockTestQuestion.findMany({
    where: where as never,
    include: {
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true, kind: true } },
        },
      },
    },
    orderBy: [{ section: { mockTest: { examKey: "asc" } } }, { section: { mockTest: { createdAt: "asc" } } }, { order: "asc" }],
    take,
  });
  return rows.map((row) => toDto(row as QuestionRow));
}

// ---------------------------------------------------------------------------
// Create / update
// ---------------------------------------------------------------------------

export async function createAdminQuestion(
  actorId: string,
  rawInput: QuestionCreateInput,
): Promise<AdminQuestionDto> {
  // Parse here (not only in the route) so defaults apply on direct calls too.
  const parsed = questionCreateSchema.safeParse(rawInput);
  if (!parsed.success) {
    throw new AdminServiceError(parsed.error.issues[0]?.message ?? "Invalid question data.", 422);
  }
  const input = parsed.data;
  const section = await db.mockTestSection.findUnique({
    where: { id: input.sectionId },
    include: { mockTest: { select: { id: true, status: true, kind: true } } },
  });
  if (!section) throw new AdminServiceError("Section not found.", 404);
  if ((ASSEMBLED_KINDS as readonly string[]).includes(section.mockTest.kind)) {
    throw new AdminServiceError(
      "Questions cannot be added to auto-assembled practice sets — edit a curated mock instead.",
      409,
    );
  }

  const payloadError = validateQuestionPayload(input.type, input.payload);
  if (payloadError) throw new AdminServiceError(payloadError, 422);
  const answerError = validateAnswerKey(input.type, input.answer ?? null);
  if (answerError) throw new AdminServiceError(answerError, 422);

  const order =
    input.order ??
    (await db.mockTestQuestion.count({ where: { sectionId: section.id } })) + 1;

  const row = await db.mockTestQuestion.create({
    data: {
      sectionId: section.id,
      order,
      type: input.type,
      stem: input.stem ?? null,
      payload: JSON.stringify(input.payload),
      answer: input.answer == null ? null : JSON.stringify(input.answer),
      points: input.points,
      difficulty: input.difficulty,
      skills: JSON.stringify(input.skills),
      explanation: input.explanation ?? null,
      source: input.source,
      contentStatus: "draft",
    },
    include: {
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true, kind: true } },
        },
      },
    },
  });

  await auditQuestion(actorId, "exam_question.create", row.id, row.section.mockTest.title, {
    type: row.type,
    section: row.section.key,
    to: "draft",
  });

  return toDto(row as QuestionRow);
}

export async function updateAdminQuestion(
  actorId: string,
  id: string,
  rawInput: QuestionUpdateInput,
): Promise<AdminQuestionDto> {
  const parsed = questionUpdateSchema.safeParse(rawInput);
  if (!parsed.success) {
    throw new AdminServiceError(parsed.error.issues[0]?.message ?? "Invalid question data.", 422);
  }
  const input = parsed.data;
  const current = await db.mockTestQuestion.findUnique({
    where: { id },
    include: {
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true, kind: true } },
        },
      },
    },
  });
  if (!current) throw new AdminServiceError("Question not found.", 404);

  const nextType = input.type ?? current.type;
  const nextPayload = input.payload !== undefined ? input.payload : safeParse(current.payload);
  const nextAnswer =
    input.answer !== undefined ? input.answer : safeParse(current.answer);

  if (input.type !== undefined || input.payload !== undefined) {
    const payloadError = validateQuestionPayload(nextType, nextPayload);
    if (payloadError) throw new AdminServiceError(payloadError, 422);
  }
  if (input.type !== undefined || input.answer !== undefined) {
    const answerError = validateAnswerKey(nextType, nextAnswer);
    if (answerError) throw new AdminServiceError(answerError, 422);
  }

  // Content changes to published material must be re-approved — the edit
  // itself moves the question back into review (audit says who and why).
  const reReview =
    current.contentStatus === "published" &&
    (input.payload !== undefined ||
      input.answer !== undefined ||
      input.type !== undefined ||
      input.points !== undefined ||
      input.difficulty !== undefined ||
      input.stem !== undefined);

  const row = await db.mockTestQuestion.update({
    where: { id },
    data: {
      type: nextType,
      stem: input.stem !== undefined ? input.stem : current.stem,
      payload: JSON.stringify(nextPayload ?? {}),
      answer: nextAnswer == null ? null : JSON.stringify(nextAnswer),
      points: input.points ?? current.points,
      difficulty: input.difficulty ?? current.difficulty,
      skills: input.skills !== undefined ? JSON.stringify(input.skills) : current.skills,
      explanation: input.explanation !== undefined ? input.explanation : current.explanation,
      source: input.source ?? current.source,
      order: input.order ?? current.order,
      ...(reReview ? { contentStatus: "in-review" as const } : {}),
    },
    include: {
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true, kind: true } },
        },
      },
    },
  });

  await auditQuestion(actorId, "exam_question.update", id, row.section.mockTest.title, {
    fields: Object.keys(input),
    ...(reReview
      ? { from: current.contentStatus, to: "in-review", note: "content change requires re-approval" }
      : {}),
  });

  return toDto(row as QuestionRow);
}

// ---------------------------------------------------------------------------
// Review workflow
// ---------------------------------------------------------------------------

export async function transitionAdminQuestion(
  actorId: string,
  actorRole: CmsRole,
  id: string,
  action: string,
  note = "",
): Promise<AdminQuestionDto> {
  const minRole = TRANSITION_MIN_ROLE[action];
  if (!minRole) throw new AdminServiceError(`Unknown action "${action}".`, 422);
  if (!roleAtLeast(actorRole, minRole)) {
    throw new AdminServiceError(
      `Only ${minRole === "teacher" ? "teachers and admins" : `${minRole}s`} can ${action} questions.`,
      403,
    );
  }
  const current = await db.mockTestQuestion.findUnique({
    where: { id },
    include: {
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true, kind: true } },
        },
      },
    },
  });
  if (!current) throw new AdminServiceError("Question not found.", 404);

  const fromStates = TRANSITION_FROM_STATE[action] ?? [];
  if (!fromStates.includes(current.contentStatus as QuestionReviewState)) {
    throw new AdminServiceError(
      `Only ${fromStates.join(" / ")} questions can be ${action === "submit" ? "submitted" : `${action}d`}. This one is ${current.contentStatus}.`,
      409,
    );
  }

  // Publishing requires a non-empty payload and (for objective types) an
  // answer key — never publish content that cannot grade. Drafts may omit
  // the key while being authored; publication is the hard gate.
  if (action === "publish") {
    const payloadError = validateQuestionPayload(current.type, safeParse(current.payload));
    if (payloadError) throw new AdminServiceError(`Fix before publishing: ${payloadError}`, 409);
    const answer = safeParse(current.answer);
    const answerError = validateAnswerKey(current.type, answer);
    if (answerError) throw new AdminServiceError(`Fix before publishing: ${answerError}`, 409);
    const needsKey = !(NO_ANSWER_KEY_TYPES as readonly string[]).includes(current.type);
    if (needsKey && answer == null) {
      throw new AdminServiceError(
        "Fix before publishing: objective questions need an answer key.",
        409,
      );
    }
  }

  const next = QUESTION_TRANSITIONS[action];
  const row = await db.mockTestQuestion.update({
    where: { id },
    data: { contentStatus: next },
    include: {
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true, kind: true } },
        },
      },
    },
  });

  await auditQuestion(actorId, `exam_question.${action}`, id, row.section.mockTest.title, {
    from: current.contentStatus,
    to: next,
    note: note || undefined,
  });

  return toDto(row as QuestionRow);
}

// ---------------------------------------------------------------------------
// Audit
// ---------------------------------------------------------------------------

async function auditQuestion(
  actorId: string,
  action: string,
  questionId: string,
  mockTitle: string,
  detail: Record<string, unknown>,
): Promise<void> {
  await db.cmsAuditLog.create({
    data: {
      actorId,
      action,
      entityType: "exam_question",
      entityId: questionId,
      detail: JSON.stringify({ mock: mockTitle, ...detail }),
    },
  });
}

/** Curated mocks (for the question editor's target picker). */
export async function listEditableMocks(): Promise<
  Array<{ id: string; title: string; examKey: string; variant: string; sections: Array<{ id: string; key: string; title: string }> }>
> {
  const mocks = await db.mockTest.findMany({
    where: { kind: { notIn: ASSEMBLED_KINDS as unknown as string[] } },
    orderBy: [{ examKey: "asc" }, { createdAt: "asc" }],
    include: {
      sections: { orderBy: { order: "asc" }, select: { id: true, key: true, title: true } },
    },
  });
  return mocks.map((mock) => ({
    id: mock.id,
    title: mock.title,
    examKey: mock.examKey,
    variant: mock.variant,
    sections: mock.sections,
  }));
}
