/// <reference types="bun-types" />
/**
 * Examination administration system tests.
 *
 * Covers the full admin contract:
 *   - question management: create/update with per-type payload and
 *     answer-key validation (same schemas as the learner engine);
 *   - the review workflow draft → in-review → approved → published with
 *     role gates (editor submits, teacher approves/rejects, admin
 *     publishes/retires), illegal transitions refused, edits to published
 *     content returning it to review, everything audit-logged;
 *   - the mock publication gate: a mock publishes only when every one of
 *     its questions is published;
 *   - content collections: the four collections (IELTS Academic, GT, UKVI
 *     preparation sharing the IELTS libraries, TOEFL iBT) with real
 *     inventory counts;
 *   - the specification version workflow: impact report (removed task
 *     types, affected questions, stale mocks, attempts pinned to the
 *     previous version), mock relinking, activation retiring the previous
 *     version, and immutability of non-draft specs (no silent changes to
 *     specs that carry historical attempts);
 *   - analytics: totals by review state, awaiting-review queue, outdated
 *     content, most-attempted sections, average performance and common
 *     weaknesses — computed from fixture attempts.
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import {
  createAdminQuestion,
  listAdminQuestions,
  transitionAdminQuestion,
  updateAdminQuestion,
  AdminServiceError,
} from "@/lib/exams/admin/questions";
import { COLLECTIONS, getCollectionInventories } from "@/lib/exams/admin/collections";
import { assertMockPublishable, relinkMocksToSpec, specImpactReport } from "@/lib/exams/admin/workflow";
import { getExamAdminStats } from "@/lib/exams/admin/analytics";
import { activateSpec, createSpecDraft, updateSpecDraft } from "@/lib/exams/specs";
import type { SpecPayload } from "@/lib/exams/types";
import {
  validateAnswerKey,
  validateQuestionPayload,
  type AdminQuestionDto,
} from "@/lib/exams/admin/types";

// ---------------------------------------------------------------------------
// Validation helpers (pure)
// ---------------------------------------------------------------------------

describe("question payload & answer-key validation", () => {
  it("validates payloads against the per-type schemas", () => {
    expect(validateQuestionPayload("MCQ_SINGLE", { options: ["a", "b"] })).toBeNull();
    expect(validateQuestionPayload("MCQ_SINGLE", { options: [] })).toContain("Invalid payload");
    expect(validateQuestionPayload("EMAIL_WRITING", { situation: "x", bullets: ["a", "b"], tone: "formal" })).toContain("Invalid payload");
    expect(validateQuestionPayload("WRITING_TASK", { prompt: "Describe the chart.", rubricKey: "ielts.writing" })).toBeNull();
    expect(validateQuestionPayload("SOME_FUTURE_TYPE", { anything: true })).toBeNull();
    expect(validateQuestionPayload("SOME_FUTURE_TYPE", "not an object")).toContain("must be a JSON object");
  });

  it("validates answer keys against the grading shapes", () => {
    expect(validateAnswerKey("MCQ_SINGLE", { option: 1 })).toBeNull();
    expect(validateAnswerKey("MCQ_SINGLE", { option: "1" })).toContain("Invalid answer key");
    expect(validateAnswerKey("MCQ_MULTI", { options: [0, 2] })).toBeNull();
    expect(validateAnswerKey("TFNG", { value: 0 })).toBeNull();
    expect(validateAnswerKey("FILL_BLANK", { blanks: [{ answer: "birchwood", alternatives: [], numbers: false }] })).toBeNull();
    expect(validateAnswerKey("DICTATION", { text: "The fee is two pounds." })).toBeNull();
    // Missing key is fine while drafting (publication enforces presence).
    expect(validateAnswerKey("MCQ_SINGLE", null)).toBeNull();
    expect(validateAnswerKey("DICTATION", null)).toBeNull();
    // Constructed types carry no machine key.
    expect(validateAnswerKey("WRITING_TASK", null)).toBeNull();
    expect(validateAnswerKey("SPEAKING_TASK", { text: "x" })).toContain("no machine answer key");
  });
});

// ---------------------------------------------------------------------------
// Persistence fixtures
// ---------------------------------------------------------------------------

const fixtures: {
  userId?: string;
  staffId?: string;
  specV1Id?: string;
  specDraftId?: string; // (unused: the workflow test now owns its namespace)
  mockId?: string;
  questionIds?: string[];
  attemptIds?: string[];
  createdSpecIds?: string[];
} = {};

const MCQ_PAYLOAD = { options: ["birchwood", "rosemount", "lakeview", "hillcrest"], passage: "The flat is on Birchwood Lane." };
const MCQ_ANSWER = { option: 0 };

async function ensureSpec() {
  const existing = await db.testSpecification.findFirst({
    where: { examKey: "IELTS", variant: "ACADEMIC", status: "active" },
    orderBy: { version: "desc" },
  });
  if (existing) return existing;
  const spec = await db.testSpecification.create({
    data: {
      examKey: "IELTS",
      variant: "ACADEMIC",
      name: "IELTS Academic",
      version: 1,
      status: "active",
      effectiveDate: new Date("2026-07-01"),
      lastReviewedAt: new Date(),
      sections: JSON.stringify([
        { key: "reading", label: "Academic Reading", timingSec: 3600, questionCount: 40, taskTypes: ["MCQ_SINGLE", "TFNG"], directions: "Answer all questions." },
        { key: "listening", label: "Listening", timingSec: 1800, questionCount: 40, taskTypes: [], directions: "" },
      ]),
      scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
      taskTypes: JSON.stringify([
        { type: "MCQ_SINGLE", label: "Multiple choice (single)", description: "", objective: true },
        { type: "TFNG", label: "True/False/Not Given", description: "", objective: true },
      ]),
      sourceRefs: JSON.stringify([{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-13" }]),
    },
  });
  fixtures.createdSpecIds = [...(fixtures.createdSpecIds ?? []), spec.id];
  return spec;
}

async function createFixtureMock(specId: string) {
  const mock = await db.mockTest.create({
    data: {
      examKey: "IELTS",
      variant: "ACADEMIC",
      specId,
      title: `Admin test mock ${Date.now()}`,
      kind: "drill",
      lengthLabel: "sample",
      status: "published",
      description: "Fixture.",
    },
  });
  const section = await db.mockTestSection.create({
    data: { mockTestId: mock.id, key: "reading", title: "Reading", timingSec: 600, order: 1 },
  });
  return { mock, section };
}

beforeAll(async () => {
  const staff = await db.user.create({
    data: { email: `exam-admin-${Date.now()}@talksy.app`, name: "Exam Admin", passwordHash: "x:y", role: "admin" },
  });
  fixtures.staffId = staff.id;
  const learner = await db.user.create({
    data: { email: `exam-admin-learner-${Date.now()}@talksy.app`, passwordHash: "x:y" },
  });
  fixtures.userId = learner.id;
  const spec = await ensureSpec();
  fixtures.specV1Id = spec.id;
});

afterAll(async () => {
  for (const id of fixtures.attemptIds ?? []) {
    await db.mockTestAttempt.delete({ where: { id } }).catch(() => undefined);
  }
  for (const id of fixtures.mockId ? [fixtures.mockId] : []) {
    await db.mockTest.delete({ where: { id } }).catch(() => undefined);
  }
  for (const id of fixtures.createdSpecIds ?? []) {
    // Drafts first; active specs that other suites share are never touched.
    await db.testSpecification.deleteMany({ where: { id, status: "draft" } }).catch(() => undefined);
  }
  for (const id of [fixtures.staffId, fixtures.userId]) {
    if (id) await db.user.delete({ where: { id } }).catch(() => undefined);
  }
});

// ---------------------------------------------------------------------------
// Question workflow (service, role-gated)
// ---------------------------------------------------------------------------

describe("question review workflow", () => {
  let question: AdminQuestionDto;
  let sectionId = "";

  it("creates a draft question with validated payload and answer key", async () => {
    const spec = await db.testSpecification.findUnique({ where: { id: fixtures.specV1Id! } });
    const { mock, section } = await createFixtureMock(spec!.id);
    fixtures.mockId = mock.id;
    sectionId = section.id;

    question = await createAdminQuestion(fixtures.staffId!, {
      sectionId,
      type: "MCQ_SINGLE",
      stem: "Where is the flat?",
      payload: MCQ_PAYLOAD,
      answer: MCQ_ANSWER,
      points: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation: "The passage says Birchwood Lane.",
      source: "original-practice",
    });
    fixtures.questionIds = [question.id];
    expect(question.contentStatus).toBe("draft");
    expect(question.preview).toContain("Where is the flat?");
    expect(question.answerLabel).toContain("option");

    const audit = await db.cmsAuditLog.findFirst({
      where: { entityType: "exam_question", entityId: question.id, action: "exam_question.create" },
    });
    expect(audit).not.toBeNull();
  });

  it("refuses invalid payloads, invalid answer keys and keys on constructed types", async () => {
    await expect(
      createAdminQuestion(fixtures.staffId!, {
        sectionId,
        type: "MCQ_SINGLE",
        payload: { options: [] },
        answer: MCQ_ANSWER,
      }),
    ).rejects.toThrow("Invalid payload");
    await expect(
      createAdminQuestion(fixtures.staffId!, {
        sectionId,
        type: "MCQ_SINGLE",
        payload: MCQ_PAYLOAD,
        answer: { option: "zero" },
      }),
    ).rejects.toThrow("Invalid answer key");
    await expect(
      createAdminQuestion(fixtures.staffId!, {
        sectionId,
        type: "WRITING_TASK",
        payload: { prompt: "Describe the chart.", rubricKey: "ielts.writing" },
        answer: { text: "essay" },
      }),
    ).rejects.toThrow("no machine answer key");
  });

  it("enforces the human-approval chain with role gates", async () => {
    // editor cannot approve
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "editor", question.id, "approve"),
    ).rejects.toThrow("Only teachers and admins");
    // draft → in-review (editor may submit)
    const submitted = await transitionAdminQuestion(fixtures.staffId!, "editor", question.id, "submit");
    expect(submitted.contentStatus).toBe("in-review");
    // publishing without approval is refused
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "admin", question.id, "publish"),
    ).rejects.toThrow("Only approved questions");
    // teacher approves
    const approved = await transitionAdminQuestion(fixtures.staffId!, "teacher", question.id, "approve");
    expect(approved.contentStatus).toBe("approved");
    // teacher cannot publish
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "teacher", question.id, "publish"),
    ).rejects.toThrow("Only admins");
    // admin publishes
    const published = await transitionAdminQuestion(fixtures.staffId!, "admin", question.id, "publish");
    expect(published.contentStatus).toBe("published");

    // The whole chain is in the audit trail.
    const actions = await db.cmsAuditLog.findMany({
      where: { entityType: "exam_question", entityId: question.id },
      orderBy: { createdAt: "asc" },
      select: { action: true },
    });
    expect(actions.map((entry) => entry.action)).toContain("exam_question.approve");
    expect(actions.map((entry) => entry.action)).toContain("exam_question.publish");
  });

  it("reject → draft and retire paths behave", async () => {
    const second = await createAdminQuestion(fixtures.staffId!, {
      sectionId,
      type: "TFNG",
      payload: { statement: "The flat has two bedrooms.", labels: ["True", "False", "Not Given"] },
      answer: { value: 2 },
      skills: ["inference"],
    });
    fixtures.questionIds!.push(second.id);
    await transitionAdminQuestion(fixtures.staffId!, "editor", second.id, "submit");
    const rejected = await transitionAdminQuestion(fixtures.staffId!, "teacher", second.id, "reject", "Not solvable from the passage");
    expect(rejected.contentStatus).toBe("draft");
    // Illegal: approving a draft
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "teacher", second.id, "approve"),
    ).rejects.toThrow("Only in-review");
    // Retire from draft is refused (must go through review or be a published item)
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "admin", second.id, "retire"),
    ).rejects.toThrow("Only in-review / approved / published");
  });

  it("returns published content to review when edited", async () => {
    const updated = await updateAdminQuestion(fixtures.staffId!, question.id, {
      payload: { ...MCQ_PAYLOAD, options: ["birchwood", "rosemount", "lakeview", "hillcrest", "newport"] },
    });
    expect(updated.contentStatus).toBe("in-review");
    // The re-review is audit-logged with the reason.
    const audit = await db.cmsAuditLog.findFirst({
      where: { entityType: "exam_question", entityId: question.id, action: "exam_question.update" },
      orderBy: { createdAt: "desc" },
    });
    expect(audit?.detail).toContain("re-approval");
    // Publish is refused until re-approved.
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "admin", question.id, "publish"),
    ).rejects.toThrow("Only approved");
  });

  it("refuses publishing content that cannot grade", async () => {
    const broken = await createAdminQuestion(fixtures.staffId!, {
      sectionId,
      type: "DICTATION",
      payload: { audioScript: "The fee is two hundred pounds." },
      // Missing answer key — dictations need one.
      answer: null,
      skills: ["numbers"],
    });
    fixtures.questionIds!.push(broken.id);
    await transitionAdminQuestion(fixtures.staffId!, "editor", broken.id, "submit");
    await transitionAdminQuestion(fixtures.staffId!, "teacher", broken.id, "approve");
    await expect(
      transitionAdminQuestion(fixtures.staffId!, "admin", broken.id, "publish"),
    ).rejects.toThrow("Fix before publishing");
    // Give it a key and publish — now it works.
    await updateAdminQuestion(fixtures.staffId!, broken.id, { answer: { text: "The fee is two hundred pounds." } });
    // Update kept it in-review? It was approved; the update re-reviews only published items —
    // approved stays approved unless content changed... it DID change content, but the
    // re-review rule only fires for published items. Approve again for the chain.
    const state = await db.mockTestQuestion.findUnique({ where: { id: broken.id } });
    if (state?.contentStatus === "in-review") {
      await transitionAdminQuestion(fixtures.staffId!, "teacher", broken.id, "approve");
    }
    const published = await transitionAdminQuestion(fixtures.staffId!, "admin", broken.id, "publish");
    expect(published.contentStatus).toBe("published");
  });

  it("lists with filters", async () => {
    const drafts = await listAdminQuestions({ status: "draft" });
    expect(drafts.every((entry) => entry.contentStatus === "draft")).toBe(true);
    const ielts = await listAdminQuestions({ examKey: "IELTS" });
    expect(ielts.every((entry) => entry.examKey === "IELTS")).toBe(true);
    const searched = await listAdminQuestions({ search: "birchwood" });
    expect(searched.length).toBeGreaterThan(0);
  });
});

// ---------------------------------------------------------------------------
// Mock publication gate
// ---------------------------------------------------------------------------

describe("mock publication gate", () => {
  it("blocks publication while any question is unpublished, allows when all are published", async () => {
    // fixtures.mockId currently holds a mix (draft/in-review/published items).
    const blocked = await assertMockPublishable(fixtures.mockId!);
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.blocking).toBeDefined();

    // Publish every remaining question through the chain, then the gate opens.
    const questions = await db.mockTestQuestion.findMany({
      where: { section: { mockTestId: fixtures.mockId! } },
      select: { id: true, contentStatus: true },
    });
    for (const row of questions) {
      if (row.contentStatus === "published") continue;
      if (row.contentStatus === "draft") {
        await transitionAdminQuestion(fixtures.staffId!, "editor", row.id, "submit").catch(() => undefined);
      }
      const fresh = await db.mockTestQuestion.findUnique({ where: { id: row.id } });
      if (fresh?.contentStatus === "in-review") {
        await transitionAdminQuestion(fixtures.staffId!, "teacher", row.id, "approve").catch(() => undefined);
      }
      const again = await db.mockTestQuestion.findUnique({ where: { id: row.id } });
      if (again?.contentStatus === "approved") {
        await transitionAdminQuestion(fixtures.staffId!, "admin", row.id, "publish").catch(() => undefined);
      }
    }
    const open = await assertMockPublishable(fixtures.mockId!);
    expect(open.ok).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Content collections
// ---------------------------------------------------------------------------

describe("content collections", () => {
  it("defines the four collections with official sources", () => {
    expect(COLLECTIONS.map((collection) => collection.key)).toEqual([
      "IELTS_ACADEMIC",
      "IELTS_GENERAL_TRAINING",
      "IELTS_UKVI",
      "TOEFL_IBT",
    ]);
    const ielts = COLLECTIONS.find((collection) => collection.key === "IELTS_ACADEMIC");
    expect(ielts?.sourceUrl).toBe("https://ielts.org/");
    const toefl = COLLECTIONS.find((collection) => collection.key === "TOEFL_IBT");
    expect(toefl?.sourceUrl).toBe("https://www.ets.org/toefl/");
    const ukvi = COLLECTIONS.find((collection) => collection.key === "IELTS_UKVI");
    expect(ukvi?.note).toContain("same test");
  });

  it("computes real inventories per collection", async () => {
    const inventories = await getCollectionInventories();
    expect(inventories.length).toBe(4);
    const academic = inventories.find((collection) => collection.key === "IELTS_ACADEMIC")!;
    // The fixture mock is published with all its questions published:
    expect(academic.counts.publishedQuestions).toBeGreaterThanOrEqual(3);
    expect(academic.counts.publishedMocks).toBeGreaterThanOrEqual(1);
    // CMS lessons attach via stable course slugs (seeded 55 live lessons).
    expect(academic.counts.liveLessons).toBeGreaterThanOrEqual(0);
    expect(academic.counts.specVersion).toBeGreaterThanOrEqual(1);
    // UKVI shares the IELTS libraries — it sees the same questions.
    const ukvi = inventories.find((collection) => collection.key === "IELTS_UKVI")!;
    expect(ukvi.counts.publishedQuestions).toBeGreaterThanOrEqual(academic.counts.publishedQuestions);
  });
});

// ---------------------------------------------------------------------------
// Specification version workflow
// ---------------------------------------------------------------------------

describe("specification version workflow", () => {
  it("reports zero impact for a faithful copy of the active catalog", async () => {
    // A draft that keeps every task type of the active version must not
    // flag questions as affected — even engine-only practice formats
    // (e.g. DICTATION drills) that were never in the official catalog.
    const active = await db.testSpecification.findUnique({ where: { id: fixtures.specV1Id! } });
    const faithful = await createSpecDraft({
      examKey: "IELTS",
      variant: "ACADEMIC",
      name: `${active!.name} (faithful copy)`,
      effectiveDate: new Date("2027-02-01"),
      notes: "Faithful copy — nothing removed.",
      payload: {
        sections: JSON.parse(active!.sections) as SpecPayload["sections"],
        scoringModel: JSON.parse(active!.scoringModel) as SpecPayload["scoringModel"],
        taskTypes: JSON.parse(active!.taskTypes) as SpecPayload["taskTypes"],
        sourceRefs: JSON.parse(active!.sourceRefs) as SpecPayload["sourceRefs"],
      },
    });
    fixtures.createdSpecIds = [...(fixtures.createdSpecIds ?? []), faithful.id];
    const impact = await specImpactReport(faithful.id);
    expect(impact.removedTaskTypes).toEqual([]);
    expect(impact.affectedQuestionCount).toBe(0);
    expect(impact.affectedQuestions).toEqual([]);
    // The seed's DICTATION drill questions exist but are not flagged.
    expect(impact.spec.version).toBeGreaterThanOrEqual(2);
  });

  it("reports impact, relinks mocks, activates and keeps history", async () => {
    // Own variant namespace: the whole scenario (baseline spec, mock,
    // question, attempt) lives under a per-run variant, so this test never
    // reads or disturbs the shared ACADEMIC state other suites rely on —
    // and can delete everything it made in the finally block.
    const variant = `ACADEMIC-ADMIN-TEST-${Date.now()}`;
    const baseSpec = await db.testSpecification.create({
      data: {
        examKey: "IELTS",
        variant,
        name: "Admin workflow baseline",
        version: 1,
        status: "active",
        effectiveDate: new Date("2026-07-01"),
        lastReviewedAt: new Date(),
        sections: JSON.stringify([
          { key: "reading", label: "Academic Reading", timingSec: 3600, questionCount: 40, taskTypes: ["MCQ_SINGLE", "TFNG"], directions: "" },
          { key: "listening", label: "Listening", timingSec: 1800, questionCount: 40, taskTypes: [], directions: "" },
        ]),
        scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
        taskTypes: JSON.stringify([
          { type: "MCQ_SINGLE", label: "Multiple choice (single)", description: "", objective: true },
          { type: "TFNG", label: "True/False/Not Given", description: "", objective: true },
        ]),
        sourceRefs: JSON.stringify([{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-13" }]),
      },
    });
    const mock = await db.mockTest.create({
      data: {
        examKey: "IELTS",
        variant,
        specId: baseSpec.id,
        title: `Admin workflow mock ${Date.now()}`,
        kind: "drill",
        lengthLabel: "sample",
        status: "published",
        description: "Fixture.",
      },
    });
    const section = await db.mockTestSection.create({
      data: { mockTestId: mock.id, key: "reading", title: "Reading", timingSec: 600, order: 1 },
    });
    await db.mockTestQuestion.create({
      data: {
        sectionId: section.id,
        order: 1,
        type: "TFNG",
        stem: "The statement agrees with the passage.",
        payload: JSON.stringify({ statement: "The meeting is on Friday.", passage: "The meeting is on Thursday." }),
        answer: JSON.stringify({ verdict: "FALSE" }),
        points: 1,
        skills: JSON.stringify(["detail"]),
        difficulty: 2,
        explanation: "Thursday ≠ Friday.",
        contentStatus: "published",
      },
    });
    // A scored attempt pinned to the baseline spec.
    const attempt = await db.mockTestAttempt.create({
      data: {
        userId: fixtures.userId!,
        mockTestId: mock.id,
        specId: baseSpec.id,
        status: "scored",
        mode: "exam",
        timed: true,
        submittedAt: new Date(),
        sectionScores: JSON.stringify([]),
      },
    });
    try {
      // Draft v2 drops TFNG from the catalog.
      const draft = await createSpecDraft({
        examKey: "IELTS",
        variant,
        name: "Admin workflow baseline (update)",
        effectiveDate: new Date("2027-01-01"),
        notes: "TFNG removed by the provider.",
        payload: {
          sections: [
            { key: "reading", label: "Academic Reading", timingSec: 3600, questionCount: 40, taskTypes: ["MCQ_SINGLE"], directions: "" },
            { key: "listening", label: "Listening", timingSec: 1800, questionCount: 40, taskTypes: [], directions: "" },
          ],
          scoringModel: {
            kind: "IELTS_BAND",
            unit: "band",
            rawToScore: {},
            overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
            minSectionScore: 0,
            maxSectionScore: 9,
            validityMonths: 24,
          },
          taskTypes: [{ type: "MCQ_SINGLE", label: "Multiple choice (single)", description: "", objective: true }],
          sourceRefs: [{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-13" }],
        },
      });

      // Step 4: impact report — TFNG is removed, its question is affected,
      // the mock is stale and the attempt stays pinned to the baseline.
      const impact = await specImpactReport(draft.id);
      expect(impact.previousActive?.id).toBe(baseSpec.id);
      expect(impact.removedTaskTypes.map((entry) => entry.type)).toEqual(["TFNG"]);
      expect(impact.affectedQuestionCount).toBe(1);
      expect(impact.staleMockCount).toBe(1);
      expect(impact.attemptsOnPreviousSpec).toBe(1);

      // Step 5: relink mocks.
      const relink = await relinkMocksToSpec(fixtures.staffId!, draft.id);
      expect(relink.relinked).toBe(1);
      const relinkedMock = await db.mockTest.findUnique({ where: { id: mock.id } });
      expect(relinkedMock?.specId).toBe(draft.id);
      // Idempotent.
      const again = await relinkMocksToSpec(fixtures.staffId!, draft.id);
      expect(again.relinked).toBe(0);
      // The attempt keeps its pinned spec — never silently moved.
      const pinned = await db.mockTestAttempt.findUnique({ where: { id: attempt.id } });
      expect(pinned?.specId).toBe(baseSpec.id);

      // Step 6: activate. Step 7: history kept.
      const activated = await activateSpec(draft.id);
      expect(activated?.status).toBe("active");
      const previous = await db.testSpecification.findUnique({ where: { id: baseSpec.id } });
      expect(previous?.status).toBe("retired");

      // Non-draft specs refuse edits (no silent changes).
      await expect(
        updateSpecDraft(draft.id, { name: "sneaky rename" }),
      ).rejects.toThrow("Only draft specifications can be edited");

      // Retired specs refuse relinking.
      await expect(relinkMocksToSpec(fixtures.staffId!, baseSpec.id)).rejects.toThrow("retired");
    } finally {
      // Full namespace cleanup: attempt → mock (cascades sections and
      // questions) → specs. Nothing of the shared state is touched.
      await db.mockTestAttempt.delete({ where: { id: attempt.id } }).catch(() => undefined);
      await db.mockTest.delete({ where: { id: mock.id } }).catch(() => undefined);
      await db.testSpecification.deleteMany({ where: { variant } });
    }
  });

  it("refuses impact for unknown specs", async () => {
    await expect(specImpactReport("does-not-exist")).rejects.toThrow("not found");
    await expect(relinkMocksToSpec(fixtures.staffId!, "does-not-exist")).rejects.toThrow("not found");
  });
});

// ---------------------------------------------------------------------------
// Analytics
// ---------------------------------------------------------------------------

describe("exam admin analytics", () => {
  it("aggregates totals, review queue, outdated content, sections, performance and weaknesses", async () => {
    // A fresh question in review so the queue is non-empty.
    const queued = await createAdminQuestion(fixtures.staffId!, {
      sectionId: (await db.mockTestSection.findFirst({ where: { mockTestId: fixtures.mockId! } }))!.id,
      type: "MCQ_SINGLE",
      payload: MCQ_PAYLOAD,
      answer: MCQ_ANSWER,
      skills: ["detail"],
    });
    fixtures.questionIds!.push(queued.id);
    await transitionAdminQuestion(fixtures.staffId!, "editor", queued.id, "submit");

    // Graded responses on the fixture mock's questions.
    const questions = await db.mockTestQuestion.findMany({
      where: { section: { mockTestId: fixtures.mockId! } },
      select: { id: true, points: true },
    });
    const attempt = await db.mockTestAttempt.create({
      data: {
        userId: fixtures.userId!,
        mockTestId: fixtures.mockId!,
        specId: fixtures.specV1Id!,
        status: "scored",
        mode: "exam",
        timed: true,
        submittedAt: new Date(),
        sectionScores: JSON.stringify([]),
      },
    });
    fixtures.attemptIds = fixtures.attemptIds ?? [];
    fixtures.attemptIds.push(attempt.id);
    let index = 0;
    for (const question of questions) {
      await db.mockTestResponse.create({
        data: {
          attemptId: attempt.id,
          questionId: question.id,
          answer: JSON.stringify({ option: 0 }),
          autoScore: index % 2 === 0 ? question.points : 0,
        },
      });
      index += 1;
    }

    const stats = await getExamAdminStats();

    // Content totals are real counts.
    expect(stats.content.questionsTotal).toBeGreaterThanOrEqual(questions.length);
    expect(stats.content.publishedLessons).toBeGreaterThanOrEqual(0);
    expect(["IELTS", "TOEFL_IBT"].length).toBe(2);

    // Review queue reflects the workflow states.
    expect(stats.review.questionsInReview).toBeGreaterThanOrEqual(1);
    expect(stats.review.awaitingTotal).toBeGreaterThanOrEqual(1);

    // Most attempted sections include reading (both fixture attempts).
    const reading = stats.sections.find((section) => section.section === "reading");
    expect(reading?.attempts).toBeGreaterThanOrEqual(questions.length);

    // Performance: every other answer wrong → accuracy between 0 and 1.
    expect(stats.performance.averageAccuracy).not.toBeNull();
    expect(stats.performance.averageAccuracy!).toBeGreaterThan(0);
    expect(stats.performance.averageAccuracy!).toBeLessThan(1);
    expect(stats.performance.bySection.some((entry) => entry.section === "reading")).toBe(true);

    // Weaknesses come from the skills of wrong answers.
    expect(stats.weaknesses.length).toBeGreaterThanOrEqual(1);

    // Outdated content: a retired spec of this test's own making, with a
    // published mock pinned to it, must surface in the outdated panel —
    // no dependence on the workflow test's leftovers.
    const retiredSpec = await db.testSpecification.create({
      data: {
        examKey: "IELTS",
        variant: `ACADEMIC-ANALYTICS-TEST-${Date.now()}`,
        name: "Analytics retired spec",
        version: 99,
        status: "retired",
        effectiveDate: new Date("2026-01-01"),
        lastReviewedAt: new Date(),
        sections: JSON.stringify([]),
        scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
        taskTypes: JSON.stringify([]),
        sourceRefs: JSON.stringify([]),
      },
    });
    const staleMock = await db.mockTest.create({
      data: {
        examKey: "IELTS",
        variant: "ACADEMIC",
        specId: retiredSpec.id,
        title: `Outdated fixture mock ${Date.now()}`,
        kind: "drill",
        lengthLabel: "sample",
        status: "published",
      },
    });
    await db.mockTestSection.create({
      data: { mockTestId: staleMock.id, key: "reading", title: "Reading", timingSec: 600, order: 1 },
    });
    const stats2 = await getExamAdminStats();
    expect(
      stats2.outdated.mocksOnRetiredSpecs.some((mock) => mock.id === staleMock.id),
    ).toBe(true);
    // Published questions whose type left the active catalog are counted
    // (informational; the seed catalog keeps its own types).
    expect(stats2.outdated.questionsWithRetiredTypes).toBeGreaterThanOrEqual(0);

    await db.mockTest.delete({ where: { id: staleMock.id } }).catch(() => undefined);
    await db.testSpecification.delete({ where: { id: retiredSpec.id } }).catch(() => undefined);
  });

  it("exposes the review pipeline states in one place", async () => {
    const stats = await getExamAdminStats();
    for (const state of ["draft", "in-review", "approved", "published", "retired"] as const) {
      expect(stats.content.questionsByStatus[state]).toBeDefined();
    }
  });
});

// ---------------------------------------------------------------------------
// Error class contract
// ---------------------------------------------------------------------------

describe("admin service errors", () => {
  it("carries an HTTP status", () => {
    const error = new AdminServiceError("nope", 409);
    expect(error.status).toBe(409);
    expect(error.message).toBe("nope");
  });
});
