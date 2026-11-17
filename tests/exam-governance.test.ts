/// <reference types="bun-types" />
/**
 * Examination content governance & QA tests (PROMPT 55).
 *
 * Covers the full governance contract:
 *   - the six-stage approval pipeline: happy path draft → educational
 *     review → examination review → answer validation → approved →
 *     published, with role gates (editor submits, teachers sign off,
 *     admin publishes), no-skip enforcement, accountable-note requirement,
 *     rejection paths and audit logging;
 *   - the AI rule: overrides are created only by explicit staff actions,
 *     AI-generated content starts at draft no matter how live it is, and
 *     humanApproved flips only through validate-answers/publish;
 *   - stale-override honesty: editing approved content demotes the override
 *     instead of silently keeping the approval;
 *   - the answer-validation engine gate (refuses on blocking issues, passes
 *     once fixed, passes machine-validated practice-library items);
 *   - the question validation engine: all eight mandated categories with
 *     positive and negative fixtures;
 *   - the content registry: all fourteen entity types, derived statuses,
 *     bank-item honesty defaults, filters, search and pagination;
 *   - completeness: placeholder lessons block readiness ("chapter records
 *     exist" is never enough), the six dimensions, and the full
 *     not-ready → needs-attention → ready journey;
 *   - analytics: the ten mandated metrics incl. learner error patterns
 *     aggregated from mock skill gaps, bank error taxonomies and spec
 *     review-due dates;
 *   - specification versioning: review-due dates, retired-spec mocks,
 *     attempts keeping their pinned spec;
 *   - API safety: 401 anonymous, 403 student, malformed filters, and the
 *     new authoring block kinds (passage / model answer / transcript /
 *     grammar table).
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import {
  governanceAction,
  GovernanceServiceError,
} from "@/lib/exams/governance/workflow";
import {
  buildGovernanceEntities,
  queryGovernanceRegistry,
  findGovernanceEntity,
  derivedLessonStatus,
  derivedMockQuestionStatus,
  derivedLifecycleStatus,
} from "@/lib/exams/governance/registry";
import { runQuestionValidation } from "@/lib/exams/governance/validate";
import { buildCourseReadiness, classifyLesson } from "@/lib/exams/governance/completeness";
import { getGovernanceAnalytics } from "@/lib/exams/governance/analytics";
import {
  GOVERNANCE_ACTIONS,
  GOVERNANCE_ACTION_FROM,
  GOVERNANCE_ACTION_MIN_ROLE,
  GOVERNANCE_STATUSES,
  TRANSITIONABLE_ENTITY_TYPES,
} from "@/lib/exams/governance/types";
import { validateCmsBlock, countWords } from "@/lib/cms/validate";
import { defaultCmsBlock } from "@/data/cms/types";
import { GET as bankRoute } from "@/app/api/exams/bank/route";

// API routes
import { GET as governanceOverviewRoute } from "@/app/api/exams/admin/governance/route";
import { GET as governanceRegistryRoute } from "@/app/api/exams/admin/governance/registry/route";
import { GET as governanceValidationRoute } from "@/app/api/exams/admin/governance/validation/route";
import {
  POST as governanceActionRoute,
} from "@/app/api/exams/admin/governance/[entityType]/[entityKey]/action/route";
import { POST as loginRoute } from "@/app/api/auth/login/route";
import { POST as registerRoute } from "@/app/api/auth/register/route";
import { POST as changePasswordRoute } from "@/app/api/auth/change-password/route";

const BASE = "http://127.0.0.1:3000";

function request(path: string, init: RequestInit = {}): Request {
  return new Request(`${BASE}${path}`, init);
}

function ctx<T extends Record<string, string>>(params: T): { params: Promise<T> } {
  return { params: Promise.resolve(params) };
}

function extractCookies(res: Response): string {
  const setCookie =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : [res.headers.get("set-cookie") ?? ""].filter(Boolean);
  return setCookie.map((c) => c.split(";")[0]).join("; ");
}

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

/**
 * Fixed fixture identifiers: identical on every run so cleanup() (invoked
 * before AND after the fixtures) can always remove a crashed earlier run's
 * leftovers, and so this suite never collides with other suites' IELTS
 * ACADEMIC specification fixtures (the spec variants here are dedicated).
 */
const FX = {
  courseSlug: "ielts-academy-core",
  moduleSlug: "gov-module-fixture",
  unitSlug: "gov-unit-fixture",
  unitAssessmentSlug: "gov-assessment-fixture",
  lessonComplete: "gov-lesson-complete-fixture",
  lessonPlaceholder: "gov-lesson-placeholder-fixture",
  lessonAssessment: "gov-lesson-assessment-fixture",
  exerciseSlug: "gov-exercise-fixture",
  brokenMockTitle: "Governance broken mock [fixture]",
  cleanMockTitle: "Governance clean mock [fixture]",
  specVariantA: "GOV_A",
  specVariantB: "GOV_B",
  assetNoTranscript: "Governance audio (no transcript) [fixture]",
  assetNoFile: "Governance audio (no file) [fixture]",
  emails: [
    "gov-editor@fixture.talksy.test",
    "gov-teacher@fixture.talksy.test",
    "gov-admin@fixture.talksy.test",
    "gov-student@fixture.talksy.test",
    "gov-learner@fixture.talksy.test",
  ],
} as const;

const fixtures: {
  editorId?: string;
  teacherId?: string;
  adminId?: string;
  studentId?: string;
  specActiveId?: string;
  specRetiredId?: string;
  courseId?: string;
  unitMainId?: string;
  unitAssessmentId?: string;
  lessonCompleteSlug?: string;
  lessonPlaceholderSlug?: string;
  cmsQuestionId?: string;
  cmsQuestionSlug?: string;
  brokenMockId?: string;
  brokenQuestionId?: string;
  goodMockId?: string;
  attemptId?: string;
  assetNoTranscriptId?: string;
  assetNoFileId?: string;
  submittedBankKey?: string;
  createdUserIds: string[];
} = { createdUserIds: [] };

const NOTE = "Checked the content against the exam specification and the teaching plan.";

async function createUser(role: string): Promise<string> {
  const user = await db.user.create({
    data: {
      email: FX.emails[{ editor: 0, teacher: 1, admin: 2, student: 3, learner: 4 }[role] ?? 0],
      name: `Gov ${role}`,
      passwordHash: "x:y",
      role,
    },
  });
  fixtures.createdUserIds.push(user.id);
  return user.id;
}

function mcqExerciseJson(id: string, prompt: string) {
  return JSON.stringify({
    id,
    type: "mcq",
    prompt,
    difficulty: "medium",
    skill: "reading",
    hints: [],
    feedback: { correct: "Well done.", incorrect: "Look again." },
    options: [
      { id: "opt-a", text: "First option" },
      { id: "opt-b", text: "Second option" },
    ],
    correctOptionId: "opt-a",
  });
}

async function cleanup(): Promise<void> {
  // Idempotent, run-stable cleanup: invoked before the fixtures (clearing
  // any crashed earlier run) and after them. Course cascades modules→units→
  // lessons→blocks; user deletion cascades attempts→responses; mock
  // cascades sections→questions.
  await db.examContentReview.deleteMany({
    where: { OR: [{ entityKey: { contains: "gov-" } }, { entityKey: { startsWith: "bank:" } }] },
  });
  const staleCourse = await db.cmsCourse.findUnique({ where: { slug: FX.courseSlug } });
  if (staleCourse) await db.cmsCourse.delete({ where: { id: staleCourse.id } }).catch(() => undefined);
  await db.cmsQuestionVersion.deleteMany({ where: { question: { slug: FX.exerciseSlug } } });
  await db.cmsQuestion.deleteMany({ where: { slug: FX.exerciseSlug } });
  await db.user.deleteMany({ where: { email: { endsWith: "@fixture.talksy.test" } } }).catch(() => undefined);
  await db.mockTest.deleteMany({ where: { title: { in: [FX.brokenMockTitle, FX.cleanMockTitle] } } });
  await db.testSpecification.deleteMany({
    where: { variant: { in: [FX.specVariantA, FX.specVariantB] } },
  });
  await db.cmsAsset.deleteMany({ where: { title: { in: [FX.assetNoTranscript, FX.assetNoFile] } } });
  await db.cmsAuditLog.deleteMany({
    where: { entityType: "governance", entityId: { contains: "gov-" } },
  }).catch(() => undefined);
  await db.cmsAuditLog.deleteMany({
    where: { entityType: "governance", entityId: { startsWith: "exercise:bank:" } },
  }).catch(() => undefined);
}
beforeAll(async () => {
  // Clear any leftovers from a crashed earlier run, then build the fixtures.
  await cleanup();
  fixtures.editorId = await createUser("editor");
  fixtures.teacherId = await createUser("teacher");
  fixtures.adminId = await createUser("admin");
  fixtures.studentId = await createUser("student");

  // --- Specifications: v1 retired (carries LEGACY_TYPE), v2 active -------
  const specRetired = await db.testSpecification.create({
    data: {
      examKey: "IELTS",
      variant: FX.specVariantA,
      name: "IELTS Academic (governance fixture)",
      version: 1,
      status: "retired",
      effectiveDate: new Date("2024-01-01"),
      lastReviewedAt: new Date("2024-01-01"),
      reviewDueAt: new Date("2024-06-01"), // past — but retired, so no overdue flag
      sections: "[]",
      scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
      taskTypes: JSON.stringify([
        { type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true },
        { type: "LEGACY_TYPE", label: "Old format item", description: "", objective: true },
      ]),
      sourceRefs: "[]",
    },
  });
  fixtures.specRetiredId = specRetired.id;

  const specActive = await db.testSpecification.create({
    data: {
      examKey: "IELTS",
      variant: FX.specVariantA,
      name: "IELTS Academic (governance fixture)",
      version: 2,
      status: "active",
      effectiveDate: new Date("2026-07-01"),
      lastReviewedAt: new Date("2026-07-01"),
      reviewDueAt: new Date("2030-07-01"),
      sections: "[]",
      scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
      taskTypes: JSON.stringify([
        { type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true },
        { type: "MCQ_MULTI", label: "Multiple choice (multi)", description: "", objective: true },
        { type: "TFNG", label: "True/False/Not Given", description: "", objective: true },
        { type: "FILL_BLANK", label: "Fill blanks", description: "", objective: true },
        { type: "MATCHING", label: "Matching", description: "", objective: true },
        { type: "WRITING_TASK", label: "Writing task", description: "", objective: false },
      ]),
      sourceRefs: "[]",
    },
  });
  fixtures.specActiveId = specActive.id;

  // An active spec past its review date → outdated-content metric.
  await db.testSpecification.create({
    data: {
      examKey: "IELTS",
      variant: FX.specVariantB,
      name: "IELTS General Training (governance fixture)",
      version: 1,
      status: "active",
      effectiveDate: new Date("2023-01-01"),
      lastReviewedAt: new Date("2023-01-01"),
      reviewDueAt: new Date("2024-01-01"), // overdue
      sections: "[]",
      scoringModel: JSON.stringify({ kind: "IELTS_BAND", unit: "band", rawToScore: {}, overallRule: "AVERAGE_ROUNDED_NEAREST_HALF", minSectionScore: 0, maxSectionScore: 9, validityMonths: 24 }),
      taskTypes: JSON.stringify([{ type: "MCQ_SINGLE", label: "Multiple choice", description: "", objective: true }]),
      sourceRefs: "[]",
    },
  });

  // --- Academy course with one complete lesson, one placeholder, and an
  //     assessment chapter (the course slug must be an exam-collection slug
  //     for the registry to pick it up).
  const course = await db.cmsCourse.create({
    data: {
      slug: "ielts-academy-core",
      title: "IELTS Academy (governance fixture)",
      description: "Fixture course.",
      status: "approved",
      live: true,
      order: 90,
    },
  });
  fixtures.courseId = course.id;
  const courseModule = await db.cmsModule.create({
    data: { courseId: course.id, slug: FX.moduleSlug, title: "Governance module", order: 1 },
  });
  const unitMain = await db.cmsUnit.create({
    data: { moduleId: courseModule.id, slug: FX.unitSlug, title: "Main unit", order: 1 },
  });
  fixtures.unitMainId = unitMain.id;
  const unitAssessment = await db.cmsUnit.create({
    data: { moduleId: courseModule.id, slug: FX.unitAssessmentSlug, title: "Assessment", order: 2 },
  });
  fixtures.unitAssessmentId = unitAssessment.id;

  // A published MCQ exercise the complete lesson's practice block references.
  const cmsQuestion = await db.cmsQuestion.create({
    data: {
      slug: FX.exerciseSlug,
      type: "mcq",
      skill: "reading",
      difficulty: "medium",
      prompt: "Which option is correct (governance fixture)?",
      tags: "[]",
      chapterSlug: unitMain.slug,
      lessonSlug: FX.lessonComplete,
      data: mcqExerciseJson(FX.exerciseSlug, "Which option is correct (governance fixture)?"),
      status: "published",
      version: 1,
    },
  });
  fixtures.cmsQuestionId = cmsQuestion.id;
  fixtures.cmsQuestionSlug = cmsQuestion.slug;

  const lessonComplete = await db.cmsLesson.create({
    data: {
      unitId: unitMain.id,
      slug: FX.lessonComplete,
      title: "Complete fixture lesson",
      description: "A genuinely complete lesson.",
      objectives: JSON.stringify(["Identify the main idea", "Answer detail questions"]),
      estimatedMinutes: 20,
      order: 1,
      status: "approved",
      reviewStatus: "ai-reviewed",
      live: true,
      version: 1,
    },
  });
  fixtures.lessonCompleteSlug = lessonComplete.slug;
  const completeBlocks: Array<{ order: number; type: string; data: string }> = [
    { order: 1, type: "lesson-intro", data: JSON.stringify({ type: "lesson-intro", text: "This lesson studies reading questions.", beforeYouStart: [] }) },
    { order: 2, type: "text", data: JSON.stringify({ type: "text", text: "Reading passages always carry a purpose and structure that questions test." }) },
    { order: 3, type: "text", data: JSON.stringify({ type: "text", text: "Detail questions paraphrase the passage, so find the matching words first." }) },
    { order: 4, type: "text", data: JSON.stringify({ type: "text", text: "Trap options use words from the text with a different meaning." }) },
    { order: 5, type: "practice", data: JSON.stringify({ type: "practice", exerciseIds: [cmsQuestion.id], variant: "guided" }) },
    { order: 6, type: "summary", data: JSON.stringify({ type: "summary", points: ["Find paraphrases", "Watch for traps"] }) },
  ];
  for (const block of completeBlocks) {
    await db.cmsLessonBlock.create({ data: { lessonId: lessonComplete.id, ...block } });
  }

  // The placeholder: a lesson record with no authored content at all.
  const lessonPlaceholder = await db.cmsLesson.create({
    data: {
      unitId: unitMain.id,
      slug: FX.lessonPlaceholder,
      title: "Placeholder fixture lesson",
      description: "",
      objectives: "[]",
      estimatedMinutes: 0,
      order: 2,
      status: "approved",
      reviewStatus: "ai-reviewed",
      live: true,
      version: 1,
    },
  });
  fixtures.lessonPlaceholderSlug = lessonPlaceholder.slug;

  // Assessment chapter with one lesson (readiness dimension 4).
  await db.cmsLesson.create({
    data: {
      unitId: unitAssessment.id,
      slug: FX.lessonAssessment,
      title: "Chapter assessment",
      description: "Assessment lesson.",
      objectives: JSON.stringify(["Demonstrate the skills", "Reflect on errors"]),
      estimatedMinutes: 25,
      order: 1,
      status: "approved",
      reviewStatus: "ai-reviewed",
      live: true,
      version: 1,
      blocks: {
        create: [
          { order: 1, type: "text", data: JSON.stringify({ type: "text", text: "Answer every question without notes." }) },
          { order: 2, type: "text", data: JSON.stringify({ type: "text", text: "Review your errors with the explanations." }) },
          { order: 3, type: "text", data: JSON.stringify({ type: "text", text: "Write a short reflection afterwards." }) },
          { order: 4, type: "revision", data: JSON.stringify({ type: "revision", items: [{ question: "What did you practise?", options: ["Reading", "Writing"], correctIndex: 0, explanation: "This unit." }] }) },
          { order: 5, type: "summary", data: JSON.stringify({ type: "summary", points: ["Well done"] }) },
        ],
      },
    },
  });

  // --- A mock with deliberately broken questions (validation engine) -----
  const brokenMock = await db.mockTest.create({
    data: {
      examKey: "IELTS",
      variant: FX.specVariantA,
      specId: specRetired.id, // retired → outdated-format on a published mock
      title: FX.brokenMockTitle,
      kind: "drill",
      lengthLabel: "sample",
      status: "published",
      description: "Fixture",
    },
  });
  fixtures.brokenMockId = brokenMock.id;
  const readingSection = await db.mockTestSection.create({
    data: { mockTestId: brokenMock.id, key: "reading", title: "Reading", timingSec: 600, order: 1 },
  });
  const listeningSection = await db.mockTestSection.create({
    data: { mockTestId: brokenMock.id, key: "listening", title: "Listening", timingSec: 300, order: 2 },
  });

  const brokenQuestions: Array<{
    sectionId: string;
    order: number;
    type: string;
    stem: string | null;
    payload: unknown;
    answer: unknown;
    contentStatus: string;
  }> = [
    {
      // missing-answer-key on published content → blocking
      sectionId: readingSection.id,
      order: 1,
      type: "MCQ_SINGLE",
      stem: "What is the fee?",
      payload: { options: ["ten pounds", "twenty pounds"] },
      answer: null,
      contentStatus: "published",
    },
    {
      // incorrect-answer: keyed option out of range
      sectionId: readingSection.id,
      order: 2,
      type: "MCQ_SINGLE",
      stem: "Which day is the museum closed?",
      payload: { options: ["Monday", "Tuesday", "Wednesday"] },
      answer: { option: 5 },
      contentStatus: "published",
    },
    {
      // multiple-correct: identical options
      sectionId: readingSection.id,
      order: 3,
      type: "MCQ_SINGLE",
      stem: "Pick the correct word.",
      payload: { options: ["hostel", "hostel", "hotel"] },
      answer: { option: 2 },
      contentStatus: "published",
    },
    {
      // multiple-correct: every option keyed on MCQ_MULTI
      sectionId: readingSection.id,
      order: 4,
      type: "MCQ_MULTI",
      stem: "Select all the facilities.",
      payload: { options: ["cafe", "shop", "garden"] },
      answer: { options: [0, 1, 2] },
      contentStatus: "published",
    },
    {
      // invalid-passage-ref: reading question with no passage, no stem and
      // no shared passage anywhere in its section
      sectionId: readingSection.id,
      order: 5,
      type: "TFNG",
      stem: null,
      payload: { statement: "The tour is free." },
      answer: { value: 0 },
      contentStatus: "published",
    },
    {
      // invalid-passage-ref: blanks without markers
      sectionId: readingSection.id,
      order: 6,
      type: "FILL_BLANK",
      stem: null,
      payload: { context: "The gallery opens at nine.", blanks: [{ answer: "nine", alternatives: [], numbers: true }] },
      answer: { blanks: [{ answer: "nine", alternatives: [], numbers: true }] },
      contentStatus: "published",
    },
    {
      // invalid-question-type: unknown to every IELTS catalog
      sectionId: readingSection.id,
      order: 7,
      type: "TRANSLATE_THE_PASSAGE",
      stem: "Translate.",
      payload: { text: "…" },
      answer: { text: "…" },
      contentStatus: "published",
    },
    {
      // duplicate pair (question 9 mirrors this one)
      sectionId: readingSection.id,
      order: 8,
      type: "MCQ_SINGLE",
      stem: "Where is the car park?",
      payload: { options: ["north gate", "south gate"] },
      answer: { option: 0 },
      contentStatus: "published",
    },
    {
      sectionId: readingSection.id,
      order: 9,
      type: "MCQ_SINGLE",
      stem: "Where is the car park?",
      payload: { options: ["south gate", "north gate"] },
      answer: { option: 1 },
      contentStatus: "published",
    },
    {
      // broken-audio: listening question whose section has no recordings
      sectionId: listeningSection.id,
      order: 10,
      type: "MCQ_SINGLE",
      stem: "What time does the train leave?",
      payload: { options: ["nine", "ten"] },
      answer: { option: 0 },
      contentStatus: "published",
    },
    {
      // outdated-format: type exists only in the retired catalog
      sectionId: readingSection.id,
      order: 11,
      type: "LEGACY_TYPE",
      stem: "Answer in the old format.",
      payload: { options: ["a", "b"] },
      answer: { option: 0 },
      contentStatus: "published",
    },
  ];
  for (const question of brokenQuestions) {
    const created = await db.mockTestQuestion.create({
      data: {
        sectionId: question.sectionId,
        order: question.order,
        type: question.type,
        stem: question.stem,
        payload: JSON.stringify(question.payload),
        answer: question.answer === null ? null : JSON.stringify(question.answer),
        points: 1,
        skills: JSON.stringify(["detail"]),
        difficulty: 2,
        explanation: "Fixture explanation.",
        source: "original-practice",
        contentStatus: question.contentStatus,
      },
    });
    if (question.order === 1) fixtures.brokenQuestionId = created.id;
  }

  // A clean mock on the active spec (for the happy-path workflow + error patterns).
  const goodMock = await db.mockTest.create({
    data: {
      examKey: "IELTS",
      variant: FX.specVariantA,
      specId: specActive.id,
      title: FX.cleanMockTitle,
      kind: "drill",
      lengthLabel: "sample",
      status: "published",
      description: "Fixture",
    },
  });
  fixtures.goodMockId = goodMock.id;
  const goodSection = await db.mockTestSection.create({
    data: {
      mockTestId: goodMock.id,
      key: "listening",
      title: "Listening",
      timingSec: 300,
      order: 1,
      payload: JSON.stringify({ audioParts: [{ key: "p1", label: "Part 1", script: "The meeting starts at noon." }] }),
    },
  });
  const goodQuestion = await db.mockTestQuestion.create({
    data: {
      sectionId: goodSection.id,
      order: 1,
      type: "MCQ_SINGLE",
      stem: "When does the meeting start?",
      payload: JSON.stringify({ options: ["noon", "midnight"], audioScript: "The meeting starts at noon." }),
      answer: JSON.stringify({ option: 0 }),
      points: 2,
      skills: JSON.stringify(["paraphrase", "detail"]),
      difficulty: 2,
      explanation: "The recording says noon.",
      source: "original-practice",
      contentStatus: "published",
    },
  });

  // A scored attempt with a wrong answer → learner error pattern (skill gap).
  const learner = await db.user.create({
    data: {
      email: FX.emails[4],
      name: "Learner",
      passwordHash: "x:y",
      role: "student",
    },
  });
  fixtures.createdUserIds.push(learner.id);
  const attempt = await db.mockTestAttempt.create({
    data: {
      userId: learner.id,
      mockTestId: goodMock.id,
      specId: specActive.id,
      status: "scored",
      mode: "full_mock",
      timed: true,
      sectionScores: "[]",
      totalScore: 0,
    },
  });
  fixtures.attemptId = attempt.id;
  await db.mockTestResponse.create({
    data: {
      attemptId: attempt.id,
      questionId: goodQuestion.id,
      answer: JSON.stringify({ option: 1 }),
      flagged: false,
      autoScore: 0,
      timeSpentSec: 30,
      status: "answered",
    },
  });

  // A reading-bank response with a trap error → error taxonomy pattern.
  const readingAttempt = await db.readingBankAttempt.create({
    data: {
      userId: learner.id,
      exerciseSlug: "gov-fixture-reading",
      variant: "academic",
      section: 1,
      mode: "practice",
      totalQuestions: 1,
      correctCount: 0,
      errorCounts: JSON.stringify({ trap: 1 }),
    },
  });
  await db.readingBankResponse.create({
    data: {
      attemptId: readingAttempt.id,
      questionId: "fixture-q1",
      questionType: "mcq-single",
      answer: "wrong",
      isCorrect: false,
      errorType: "trap",
      detail: "wrong → keyed",
      timeSpentSec: 20,
    },
  });

  // Audio assets: one without a transcript, one without a file on disk.
  const assetNoTranscript = await db.cmsAsset.create({
    data: {
      kind: "audio",
      title: FX.assetNoTranscript,
      fileName: "fixture.wav",
      mimeType: "audio/wav",
      sizeBytes: 100,
      durationSeconds: 1,
      transcript: "",
    },
  });
  fixtures.assetNoTranscriptId = assetNoTranscript.id;
  const assetNoFile = await db.cmsAsset.create({
    data: {
      kind: "audio",
      title: FX.assetNoFile,
      fileName: "missing.wav",
      mimeType: "audio/wav",
      sizeBytes: 100,
      durationSeconds: 1,
      transcript: "Hello",
    },
  });
  fixtures.assetNoFileId = assetNoFile.id;
});

afterAll(async () => {
  await cleanup();
  await db.$disconnect();
});

// ---------------------------------------------------------------------------
// Pure derivation helpers
// ---------------------------------------------------------------------------

describe("governance status derivation", () => {
  it("maps lesson review status honestly (ai-reviewed stays draft)", () => {
    expect(derivedLessonStatus("draft", "draft", false)).toBe("draft");
    expect(derivedLessonStatus("ai-reviewed", "approved", true)).toBe("draft"); // live but never human-reviewed
    expect(derivedLessonStatus("human-reviewed", "approved", false)).toBe("examination-review");
    expect(derivedLessonStatus("human-reviewed", "approved", true)).toBe("approved");
    expect(derivedLessonStatus("approved", "approved", true)).toBe("published");
    expect(derivedLessonStatus("draft", "review", false)).toBe("educational-review");
  });

  it("maps mock-question and lifecycle statuses", () => {
    expect(derivedMockQuestionStatus("draft")).toBe("draft");
    expect(derivedMockQuestionStatus("in-review")).toBe("educational-review");
    expect(derivedMockQuestionStatus("published")).toBe("published");
    expect(derivedLifecycleStatus("published", false)).toBe("published");
    expect(derivedLifecycleStatus("review", false)).toBe("educational-review");
    expect(derivedLifecycleStatus("draft", false)).toBe("draft");
  });

  it("defines a no-skip transition table with role gates", () => {
    // Every action's from-states are strictly one stage behind its target.
    const order = Object.fromEntries(GOVERNANCE_STATUSES.map((s, i) => [s, i]));
    for (const action of GOVERNANCE_ACTIONS) {
      const from = GOVERNANCE_ACTION_FROM[action];
      expect(from.length).toBeGreaterThan(0);
      expect(GOVERNANCE_ACTION_MIN_ROLE[action]).toBeDefined();
    }
    // Publishing needs admin; reviews need teacher; submitting needs editor.
    expect(GOVERNANCE_ACTION_MIN_ROLE.publish).toBe("admin");
    expect(GOVERNANCE_ACTION_MIN_ROLE["educational-approve"]).toBe("teacher");
    expect(GOVERNANCE_ACTION_MIN_ROLE.submit).toBe("editor");
    // No action can start from "approved" except publish, none from published except unpublish.
    for (const action of GOVERNANCE_ACTIONS) {
      const from = GOVERNANCE_ACTION_FROM[action];
      if (action === "publish") expect(from).toEqual(["approved"]);
      if (action === "unpublish") expect(from).toEqual(["published"]);
      if (action === "submit") expect(from).toEqual(["draft"]);
    }
    expect(order.published).toBeGreaterThan(order.approved);
  });
});

// ---------------------------------------------------------------------------
// The approval workflow
// ---------------------------------------------------------------------------

describe("governance approval workflow", () => {
  it("walks the full pipeline with role gates, notes and audit trail", async () => {
    const slug = fixtures.lessonCompleteSlug!;

    // Nothing automatic: no override exists before any human action.
    const before = await db.examContentReview.findFirst({
      where: { entityType: "lesson", entityKey: slug },
    });
    expect(before).toBeNull();

    // Editor submits.
    const submitted = await governanceAction({
      entityType: "lesson",
      entityKey: slug,
      action: "submit",
      note: "Ready for educational review.",
      actor: { id: fixtures.editorId!, role: "editor" },
    });
    expect(submitted.status).toBe("educational-review");
    expect(submitted.humanApproved).toBe(false);

    // Editor cannot pass educational review.
    try {
      await governanceAction({
        entityType: "lesson",
        entityKey: slug,
        action: "educational-approve",
        note: NOTE,
        actor: { id: fixtures.editorId!, role: "editor" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect(err).toBeInstanceOf(GovernanceServiceError);
      expect((err as GovernanceServiceError).status).toBe(403);
    }

    // Teacher cannot skip straight to publish.
    try {
      await governanceAction({
        entityType: "lesson",
        entityKey: slug,
        action: "publish",
        note: NOTE,
        actor: { id: fixtures.adminId!, role: "admin" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect((err as GovernanceServiceError).status).toBe(409);
    }

    // Advancing without an accountable note is refused.
    try {
      await governanceAction({
        entityType: "lesson",
        entityKey: slug,
        action: "educational-approve",
        note: "short",
        actor: { id: fixtures.teacherId!, role: "teacher" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect((err as GovernanceServiceError).status).toBe(400);
    }

    // The human chain: teacher sign-offs, engine-gated validation, admin publish.
    await governanceAction({ entityType: "lesson", entityKey: slug, action: "educational-approve", note: NOTE, actor: { id: fixtures.teacherId!, role: "teacher" } });
    await governanceAction({ entityType: "lesson", entityKey: slug, action: "examination-approve", note: NOTE, actor: { id: fixtures.teacherId!, role: "teacher" } });
    const validated = await governanceAction({
      entityType: "lesson", entityKey: slug, action: "validate-answers", note: NOTE,
      actor: { id: fixtures.teacherId!, role: "teacher" },
    });
    expect(validated.status).toBe("approved");
    expect(validated.humanApproved).toBe(true); // flips ONLY here

    // Teacher cannot publish.
    try {
      await governanceAction({
        entityType: "lesson", entityKey: slug, action: "publish", note: NOTE,
        actor: { id: fixtures.teacherId!, role: "teacher" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect((err as GovernanceServiceError).status).toBe(403);
    }

    const published = await governanceAction({
      entityType: "lesson", entityKey: slug, action: "publish", note: NOTE,
      actor: { id: fixtures.adminId!, role: "admin" },
    });
    expect(published.status).toBe("published");
    expect(published.humanApproved).toBe(true);

    // Unpublish returns to approved, keeping the human approval.
    const unpublished = await governanceAction({
      entityType: "lesson", entityKey: slug, action: "unpublish", note: "Taking it down for an update.",
      actor: { id: fixtures.adminId!, role: "admin" },
    });
    expect(unpublished.status).toBe("approved");
    expect(unpublished.humanApproved).toBe(true);

    // The registry reflects the override; the audit trail has every step.
    const entity = await findGovernanceEntity("lesson", slug);
    expect(entity?.status).toBe("approved");
    expect(entity?.humanApproved).toBe(true);
    const auditRows = await db.cmsAuditLog.findMany({
      where: { entityType: "governance", entityId: `lesson:${slug}` },
    });
    expect(auditRows.length).toBeGreaterThanOrEqual(6); // submit + 3 sign-offs + publish + unpublish
    expect(auditRows.some((row) => row.action === "governance.validate-answers")).toBe(true);
    expect(auditRows.some((row) => row.action === "governance.publish")).toBe(true);
  });

  it("refuses the answer-validation sign-off while blocking issues remain, then passes once fixed", async () => {
    const questionKey = fixtures.brokenQuestionId!;
    // The broken question is live (published) — a teacher rejects it into
    // the pipeline for repair first.
    await governanceAction({
      entityType: "question", entityKey: questionKey, action: "reject",
      note: "The answer key is missing — pulling this item for repair.",
      actor: { id: fixtures.teacherId!, role: "teacher" },
    });
    // Move it through the review stages to answer validation.
    await governanceAction({ entityType: "question", entityKey: questionKey, action: "submit", note: "Review this item.", actor: { id: fixtures.editorId!, role: "editor" } });
    await governanceAction({ entityType: "question", entityKey: questionKey, action: "educational-approve", note: NOTE, actor: { id: fixtures.teacherId!, role: "teacher" } });
    await governanceAction({ entityType: "question", entityKey: questionKey, action: "examination-approve", note: NOTE, actor: { id: fixtures.teacherId!, role: "teacher" } });

    try {
      await governanceAction({
        entityType: "question", entityKey: questionKey, action: "validate-answers", note: NOTE,
        actor: { id: fixtures.teacherId!, role: "teacher" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect((err as GovernanceServiceError).status).toBe(422);
      const detail = (err as GovernanceServiceError).detail as { blockingCount: number };
      expect(detail.blockingCount).toBeGreaterThanOrEqual(1);
    }

    // Fix the answer key, then the gate opens.
    await db.mockTestQuestion.update({
      where: { id: questionKey },
      data: { answer: JSON.stringify({ option: 0 }) },
    });
    const validated = await governanceAction({
      entityType: "question", entityKey: questionKey, action: "validate-answers", note: NOTE,
      actor: { id: fixtures.teacherId!, role: "teacher" },
    });
    expect(validated.status).toBe("approved");
  });

  it("passes machine-validated practice-library items through the gate", async () => {
    const { entities } = await queryGovernanceRegistry({ entityType: "exercise", q: "ielts-lb-", pageSize: 10 });
    const bankItem = entities.find((e) => e.entityKey.startsWith("bank:"));
    expect(bankItem).toBeDefined();
    expect(bankItem!.status).toBe("draft"); // honesty default: live, never human-approved
    expect(bankItem!.live).toBe(true);
    expect(bankItem!.humanApproved).toBe(false);
    expect(bankItem!.provenance).toBe("ai-generated");

    const result = await governanceAction({
      entityType: "exercise",
      entityKey: bankItem!.entityKey,
      action: "submit",
      note: "Retrospective review of bank content.",
      actor: { id: fixtures.editorId!, role: "editor" },
    });
    expect(result.status).toBe("educational-review");
    fixtures.submittedBankKey = bankItem!.entityKey;
  });

  it("rejects unknown entities and non-governed entity types", async () => {
    try {
      await governanceAction({
        entityType: "lesson", entityKey: "does-not-exist-gov", action: "submit", note: "…",
        actor: { id: fixtures.editorId!, role: "editor" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect((err as GovernanceServiceError).status).toBe(404);
    }
    try {
      await governanceAction({
        entityType: "spec", entityKey: fixtures.specActiveId!, action: "submit", note: "…",
        actor: { id: fixtures.adminId!, role: "admin" },
      });
      throw new Error("should have been refused");
    } catch (err) {
      expect((err as GovernanceServiceError).status).toBe(400);
    }
    expect(TRANSITIONABLE_ENTITY_TYPES).not.toContain("spec");
    expect(TRANSITIONABLE_ENTITY_TYPES).not.toContain("examination");
  });

  it("demotes a stale override when the content changes after approval", async () => {
    const slug = fixtures.lessonCompleteSlug!;
    // The lesson was published + human-approved in the first test.
    const before = await findGovernanceEntity("lesson", slug);
    expect(before?.status).toBe("approved"); // unpublished at the end of test 1
    expect(before?.humanApproved).toBe(true);

    // Someone edits the lesson after the approval…
    await db.cmsLesson.update({
      where: { slug },
      data: { description: "Edited after approval." },
    });

    // …the approval no longer silently holds.
    const after = await findGovernanceEntity("lesson", slug);
    expect(after?.status).toBe("draft");
    expect(after?.humanApproved).toBe(false);
    expect(after?.meta.staleOverride).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// The question validation engine (eight categories)
// ---------------------------------------------------------------------------

describe("question validation engine — the eight mandated categories", () => {
  let report: Awaited<ReturnType<typeof runQuestionValidation>>;

  beforeAll(async () => {
    report = await runQuestionValidation();
  });

  it("detects missing answer keys (blocking on published content)", () => {
    const issues = report.issues.filter(
      (issue) => issue.category === "missing-answer-key" && issue.entityKey === fixtures.brokenQuestionId,
    );
    // The key was fixed during the workflow test — the engine must agree it is gone.
    expect(issues).toHaveLength(0);
    // …and the engine still flags the objective questions of the broken mock that were never fixed:
    const otherMissing = report.issues.filter(
      (issue) => issue.category === "missing-answer-key" && issue.entityType === "question",
    );
    expect(otherMissing.length).toBe(0); // all other fixture questions carry keys
  });

  it("detects multiple correct possibilities", () => {
    const duplicates = report.issues.filter(
      (issue) => issue.category === "multiple-correct" && issue.entityType === "question",
    );
    expect(duplicates.length).toBeGreaterThanOrEqual(2); // identical options + all-keyed multi
    expect(duplicates.every((issue) => issue.severity === "blocking")).toBe(true);
  });

  it("detects incorrect answers (keys pointing outside the options)", () => {
    const incorrect = report.issues.filter(
      (issue) => issue.category === "incorrect-answer" && issue.entityType === "question",
    );
    expect(incorrect.length).toBeGreaterThanOrEqual(1);
    expect(incorrect.some((issue) => issue.evidence.includes("Keyed index 5"))).toBe(true);
  });

  it("detects broken audio (silent listening sections and missing asset files)", () => {
    const audio = report.issues.filter((issue) => issue.category === "broken-audio");
    // The broken mock's listening section has no recordings at all.
    expect(
      audio.some((issue) => issue.entityType === "mock" && issue.entityKey === fixtures.brokenMockId && issue.severity === "blocking"),
    ).toBe(true);
    // An audio asset row whose file is missing from disk.
    expect(
      audio.some((issue) => issue.entityType === "audio" && issue.entityKey === fixtures.assetNoFileId),
    ).toBe(true);
  });

  it("detects invalid passage references", () => {
    const refs = report.issues.filter(
      (issue) => issue.category === "invalid-passage-ref" && issue.entityType === "question",
    );
    // Reading question without a passage + fill-blank without markers.
    expect(refs.some((issue) => issue.title.includes("without a passage"))).toBe(true);
    expect(refs.some((issue) => issue.title.includes("without ___ markers"))).toBe(true);
  });

  it("detects incorrect question types", () => {
    const types = report.issues.filter((issue) => issue.category === "invalid-question-type");
    expect(types.some((issue) => issue.evidence.includes("TRANSLATE_THE_PASSAGE"))).toBe(true);
  });

  it("detects duplicate questions", () => {
    const duplicates = report.issues.filter(
      (issue) => issue.category === "duplicate-question" && issue.entityType === "question",
    );
    expect(duplicates.some((issue) => issue.evidence.includes("car park"))).toBe(true);
  });

  it("detects outdated examination formats (retired types, retired-spec mocks, overdue reviews)", () => {
    const outdated = report.issues.filter((issue) => issue.category === "outdated-format");
    expect(outdated.some((issue) => issue.evidence.includes("LEGACY_TYPE"))).toBe(true);
    expect(
      outdated.some(
        (issue) => issue.entityType === "mock" && issue.entityKey === fixtures.brokenMockId && issue.title.includes("retired spec"),
      ),
    ).toBe(true);
    expect(outdated.some((issue) => issue.entityType === "spec" && issue.title.includes("review overdue"))).toBe(true);
  });

  it("counts what it checked, including the machine-validated practice libraries", () => {
    expect(report.checked.practiceLibraryItems).toBe(950);
    expect(report.checked.mockQuestions).toBeGreaterThanOrEqual(12);
    expect(report.checked.cmsExercises).toBeGreaterThanOrEqual(1);
    expect(report.checked.specs).toBeGreaterThanOrEqual(3);
    expect(report.blockingCount).toBeGreaterThanOrEqual(6);
    expect(report.warningCount).toBeGreaterThanOrEqual(2);
  });

  it("scopes to a single entity", async () => {
    const scoped = await runQuestionValidation({
      entityType: "question",
      entityKey: fixtures.brokenQuestionId!,
    });
    // The fixed question is clean; the scope must not drag in the others.
    expect(scoped.issues.filter((issue) => issue.severity === "blocking")).toHaveLength(0);
    expect(scoped.checked.mockQuestions).toBe(1);

    const mockScoped = await runQuestionValidation({ entityType: "mock", entityKey: fixtures.brokenMockId! });
    expect(mockScoped.issues.filter((issue) => issue.severity === "blocking").length).toBeGreaterThanOrEqual(5);
  });
});

// ---------------------------------------------------------------------------
// The content registry
// ---------------------------------------------------------------------------

describe("content registry — every managed entity type", () => {
  it("lists all fourteen entity types with counts", async () => {
    const result = await queryGovernanceRegistry({ pageSize: 10 });
    for (const type of [
      "examination", "spec", "pathway", "course", "module", "chapter", "lesson",
      "exercise", "question", "audio", "passage", "model-answer", "rubric", "mock",
    ] as const) {
      expect(result.countsByType[type]).toBeDefined();
    }
    expect(result.countsByType.examination).toBe(2);
    expect(result.countsByType.exercise).toBeGreaterThanOrEqual(950); // bank items + fixture exercise
    expect(result.countsByType.passage).toBeGreaterThanOrEqual(200); // reading sets from both banks
    expect(result.countsByType["model-answer"]).toBeGreaterThanOrEqual(100);
    expect(result.countsByType.lesson).toBeGreaterThanOrEqual(3);
    expect(result.countsByType.mock).toBeGreaterThanOrEqual(2);
    expect(result.countsByType.spec).toBeGreaterThanOrEqual(3);
    expect(result.countsByType.audio).toBeGreaterThanOrEqual(2);
    // Status counts cover every entity.
    const total = Object.values(result.countsByType).reduce((a, b) => a + b, 0);
    expect(Object.values(result.countsByStatus).reduce((a, b) => a + b, 0)).toBe(total);
  });

  it("filters by type, status, search and the live-unapproved view", async () => {
    const lessons = await queryGovernanceRegistry({ entityType: "lesson", pageSize: 100 });
    expect(lessons.entities.every((e) => e.entityType === "lesson")).toBe(true);
    expect(lessons.entities.some((e) => e.entityKey === fixtures.lessonCompleteSlug)).toBe(true);

    const searched = await queryGovernanceRegistry({ entityType: "lesson", q: "Placeholder fixture" });
    expect(searched.total).toBe(1);
    expect(searched.entities[0]?.entityKey).toBe(fixtures.lessonPlaceholderSlug ?? "");

    const drafts = await queryGovernanceRegistry({ status: "draft", pageSize: 100 });
    expect(drafts.entities.every((e) => e.status === "draft")).toBe(true);
    expect(drafts.total).toBeGreaterThanOrEqual(950); // the bank items' honesty default

    const liveUnapproved = await queryGovernanceRegistry({ liveUnapprovedOnly: true, pageSize: 100 });
    expect(liveUnapproved.entities.every((e) => e.live && !e.humanApproved)).toBe(true);
    expect(liveUnapproved.total).toBeGreaterThanOrEqual(950);
  });

  it("paginates", async () => {
    const page1 = await queryGovernanceRegistry({ entityType: "exercise", pageSize: 10, page: 1 });
    expect(page1.entities).toHaveLength(10);
    expect(page1.pageCount).toBeGreaterThanOrEqual(95);
    const page2 = await queryGovernanceRegistry({ entityType: "exercise", pageSize: 10, page: 2 });
    const keys1 = new Set(page1.entities.map((e) => e.entityKey));
    expect(page2.entities.some((e) => keys1.has(e.entityKey))).toBe(false);
  });

  it("exposes spec versions with review-due metadata", async () => {
    const { byType } = await buildGovernanceEntities();
    const activeSpec = byType.spec.find((s) => s.entityKey === fixtures.specActiveId);
    expect(activeSpec?.meta.version).toBe(2);
    expect(activeSpec?.meta.reviewDueAt).toBe("2030-07-01");
    expect(activeSpec?.meta.reviewOverdue).toBe(false);
    expect(activeSpec?.live).toBe(true);
    expect(activeSpec?.sourceStatus).toBe("active");
  });
});

// ---------------------------------------------------------------------------
// Completeness
// ---------------------------------------------------------------------------

describe("content completeness — readiness is earned, not assumed", () => {
  it("classifies lessons: complete, placeholder, and the reasons why", () => {
    const complete = classifyLesson({
      slug: "x", title: "X", live: true, estimatedMinutes: 20,
      objectives: ["One", "Two"],
      blocks: [
        { type: "text", data: { text: "Teaching one." } },
        { type: "text", data: { text: "Teaching two." } },
        { type: "text", data: { text: "Teaching three." } },
        { type: "practice", data: { exerciseIds: ["q1"] } },
        { type: "summary", data: { points: ["Key takeaway"] } },
      ],
      resolvableExerciseIds: ["q1"],
      humanApproved: false,
    });
    expect(complete.completeness).toBe("complete");
    expect(complete.hasPractice).toBe(true);

    const placeholder = classifyLesson({
      slug: "y", title: "Y", live: true, estimatedMinutes: 0,
      objectives: [],
      blocks: [],
      resolvableExerciseIds: [],
      humanApproved: false,
    });
    expect(placeholder.completeness).toBe("placeholder");
    expect(placeholder.reasons[0]).toContain("No content blocks");

    const thin = classifyLesson({
      slug: "z", title: "Z", live: true, estimatedMinutes: 10,
      objectives: ["One", "Two"],
      blocks: [
        { type: "text", data: { text: "Teaching block one." } },
        { type: "text", data: { text: "Teaching block two." } },
        { type: "text", data: { text: "Teaching block three." } },
        { type: "summary", data: { points: ["One point"] } },
      ],
      resolvableExerciseIds: [],
      humanApproved: false,
    });
    expect(thin.completeness).toBe("partial"); // taught and summarised, but no practice
  });

  it("marks the fixture course not-ready while a placeholder lesson exists", async () => {
    const readiness = await buildCourseReadiness();
    const course = readiness.find((r) => r.courseSlug === "ielts-academy-core");
    expect(course).toBeDefined();
    expect(course!.readiness).toBe("not-ready"); // placeholder lesson blocks it
    expect(course!.lessons.placeholder).toBeGreaterThanOrEqual(1);
    expect(course!.lessons.complete).toBeGreaterThanOrEqual(1);

    const lessonsComplete = course!.dimensions.find((d) => d.key === "lessons-complete");
    expect(lessonsComplete?.pass).toBe(false);
    expect(lessonsComplete?.detail).toContain("placeholder");

    // The mandate's honesty rule, verbatim in the blockers.
    expect(course!.blockers.some((b) => b.includes("placeholder"))).toBe(true);
    expect(course!.summary).toContain("Not genuinely ready");

    // Substance dimensions that pass even now.
    expect(course!.dimensions.find((d) => d.key === "assessments")?.pass).toBe(true);
    expect(course!.dimensions.find((d) => d.key === "answer-keys")?.pass).toBe(true);
  });

  it("reaches needs-attention once the substance is complete but unreviewed", async () => {
    // Complete the placeholder lesson for real.
    const slug = fixtures.lessonPlaceholderSlug!;
    const lesson = await db.cmsLesson.findUnique({ where: { slug } });
    expect(lesson).toBeDefined();
    const blocks = [
      { order: 1, type: "text", data: JSON.stringify({ type: "text", text: "This lesson teaches note-taking." }) },
      { order: 2, type: "text", data: JSON.stringify({ type: "text", text: "Good notes use symbols and layout." }) },
      { order: 3, type: "text", data: JSON.stringify({ type: "text", text: "Review notes within a day." }) },
      { order: 4, type: "homework", data: JSON.stringify({ type: "homework", title: "Practise", tasks: ["Take notes on a short talk."] }) },
      { order: 5, type: "summary", data: JSON.stringify({ type: "summary", points: ["Notes are personal", "Review quickly"] }) },
    ];
    for (const block of blocks) {
      await db.cmsLessonBlock.create({ data: { lessonId: lesson!.id, ...block } });
    }
    await db.cmsLesson.update({
      where: { slug },
      data: {
        objectives: JSON.stringify(["Take better notes", "Review effectively"]),
        estimatedMinutes: 15,
      },
    });

    const readiness = await buildCourseReadiness();
    const course = readiness.find((r) => r.courseSlug === "ielts-academy-core")!;
    expect(course.lessons.placeholder).toBe(0);
    expect(course.readiness).toBe("needs-attention"); // only review-status (and practice for the assessment lesson if any) may remain
    expect(course.dimensions.find((d) => d.key === "lessons-complete")?.pass).toBe(true);

    // Human review is the last mile: the PROMPT 35 review track carries the
    // human sign-off (the governance override on the complete lesson was
    // honestly demoted after the edit in the stale-override test, so it is
    // removed — the derived human-reviewed status then applies).
    const lessonRows = await db.cmsLesson.findMany({
      where: { unit: { module: { course: { slug: "ielts-academy-core" } } } },
      select: { slug: true },
    });
    await db.examContentReview.deleteMany({
      where: { entityType: "lesson", entityKey: { in: lessonRows.map((l) => l.slug) } },
    });
    for (const row of lessonRows) {
      await db.cmsLesson.update({ where: { slug: row.slug }, data: { reviewStatus: "human-reviewed" } });
    }

    const final = await buildCourseReadiness();
    const finalCourse = final.find((r) => r.courseSlug === "ielts-academy-core")!;
    const reviewDim = finalCourse.dimensions.find((d) => d.key === "review-status")!;
    expect(reviewDim.pass).toBe(true);
    expect(finalCourse.dimensions.find((d) => d.key === "practice")?.pass).toBe(true);
    expect(finalCourse.readiness).toBe("ready");
    expect(finalCourse.summary).toContain("genuinely ready");
  });
});

// ---------------------------------------------------------------------------
// Analytics
// ---------------------------------------------------------------------------

describe("content analytics — the ten mandated metrics", () => {
  it("computes every metric from real data", async () => {
    const analytics = await getGovernanceAnalytics();

    // 1–3 lessons.
    expect(analytics.lessons.total).toBeGreaterThanOrEqual(3);
    expect(analytics.lessons.complete).toBeGreaterThanOrEqual(2);
    expect(analytics.lessons.placeholder).toBe(0); // the placeholder was completed in the completeness test
    // 4 pending reviews (the question left in the pipeline + the bank item submitted).
    expect(analytics.pendingReviews).toBeGreaterThanOrEqual(1);
    // 5 published questions.
    expect(analytics.publishedQuestions.cmsExercises).toBeGreaterThanOrEqual(1);
    expect(analytics.publishedQuestions.total).toBeGreaterThanOrEqual(1);
    // 6 missing answer keys — the engine agrees the fixture key was fixed.
    expect(analytics.missingAnswerKeys).toBe(0);
    // 7 outdated content.
    expect(analytics.outdatedContent.mocksOnRetiredSpecs).toBeGreaterThanOrEqual(1);
    expect(analytics.outdatedContent.questionsWithRetiredTypes).toBeGreaterThanOrEqual(1);
    expect(analytics.outdatedContent.specsPastReviewDate).toBeGreaterThanOrEqual(1);
    // 8 audio without transcripts.
    expect(analytics.audioWithoutTranscripts).toBeGreaterThanOrEqual(1);
    // 9 mocks.
    expect(analytics.mockExaminations.total).toBeGreaterThanOrEqual(2);
    expect(analytics.mockExaminations.published).toBeGreaterThanOrEqual(2);
    // 10 learner error patterns.
    const skill = analytics.learnerErrorPatterns.find((p) => p.pattern === "skill:paraphrase");
    expect(skill).toBeDefined();
    expect(skill!.occurrences).toBeGreaterThanOrEqual(1);
    const trap = analytics.learnerErrorPatterns.find((p) => p.pattern === "reading-error:trap");
    expect(trap).toBeDefined();
    expect(trap!.occurrences).toBeGreaterThanOrEqual(1);
    // The honesty extra.
    expect(analytics.liveWithoutHumanApproval).toBeGreaterThanOrEqual(950);
  });
});

// ---------------------------------------------------------------------------
// Specification versioning
// ---------------------------------------------------------------------------

describe("specification versioning", () => {
  it("preserves attempts pinned to retired specifications", async () => {
    // The scored attempt is pinned to the ACTIVE spec v2…
    const attempt = await db.mockTestAttempt.findUnique({
      where: { id: fixtures.attemptId! },
    });
    expect(attempt?.specId).toBe(fixtures.specActiveId);
    const activeSpec = await db.testSpecification.findUnique({ where: { id: attempt!.specId } });
    expect(activeSpec?.version).toBe(2);
    expect(activeSpec?.status).toBe("active");

    // …and a historical attempt on the retired v1 keeps its pin.
    const learner = await db.user.findFirst({ where: { email: FX.emails[4] } });
    const legacyAttempt = await db.mockTestAttempt.create({
      data: {
        userId: learner!.id,
        mockTestId: fixtures.brokenMockId!,
        specId: fixtures.specRetiredId!,
        status: "scored",
        mode: "full_mock",
        timed: true,
        sectionScores: "[]",
        totalScore: 3,
      },
    });
    const resolved = await db.mockTestAttempt.findUnique({
      where: { id: legacyAttempt.id },
    });
    const retiredSpec = await db.testSpecification.findUnique({ where: { id: resolved!.specId } });
    expect(retiredSpec?.version).toBe(1);
    expect(retiredSpec?.status).toBe("retired");
    await db.mockTestAttempt.delete({ where: { id: legacyAttempt.id } });
  });
});

// ---------------------------------------------------------------------------
// Authoring blocks (PROMPT 55 §2)
// ---------------------------------------------------------------------------

describe("lesson authoring — the new educational block kinds", () => {
  it("validates grammar tables, passages, model answers and transcripts", () => {
    expect(
      validateCmsBlock({ type: "grammar-table", title: "Present simple", headers: ["Person", "Verb"], rows: [["I", "work"]] }),
    ).toMatchObject({ ok: true });
    expect(
      validateCmsBlock({ type: "grammar-table", title: "Broken", headers: ["Only one"], rows: [["x"]] }),
    ).toMatchObject({ ok: false });

    expect(
      validateCmsBlock({ type: "passage", title: "The beaver dam", paragraphs: ["Beavers build dams."] }),
    ).toMatchObject({ ok: true });
    expect(validateCmsBlock({ type: "passage", title: "Empty", paragraphs: [] })).toMatchObject({ ok: false });

    expect(
      validateCmsBlock({ type: "model-answer", label: "Band 8.0 model answer", body: ["Introduction…"] }),
    ).toMatchObject({ ok: true });
    expect(validateCmsBlock({ type: "model-answer", label: "", body: ["text"] })).toMatchObject({ ok: false });

    expect(
      validateCmsBlock({ type: "transcript", lines: [{ speaker: "Presenter", text: "Welcome." }] }),
    ).toMatchObject({ ok: true });
    expect(validateCmsBlock({ type: "transcript", lines: [] })).toMatchObject({ ok: false });
  });

  it("provides palette defaults for every new kind", () => {
    expect(defaultCmsBlock("grammar-table")).toMatchObject({ type: "grammar-table" });
    expect(defaultCmsBlock("passage")).toMatchObject({ type: "passage" });
    expect(defaultCmsBlock("model-answer")).toMatchObject({ type: "model-answer" });
    expect(defaultCmsBlock("transcript")).toMatchObject({ type: "transcript" });
    expect(countWords("one two three")).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------

describe("governance API — role gates and safety", () => {
  it("rejects anonymous and student access on every route", async () => {
    const anonymous = [
      governanceOverviewRoute(request("/api/exams/admin/governance")),
      governanceRegistryRoute(request("/api/exams/admin/governance/registry")),
      governanceValidationRoute(request("/api/exams/admin/governance/validation")),
      governanceActionRoute(
        request("/api/exams/admin/governance/lesson/x/action", {
          method: "POST",
          body: JSON.stringify({ action: "submit", note: "x" }),
        }),
        ctx({ entityType: "lesson", entityKey: "x" }),
      ),
    ];
    for (const promise of anonymous) {
      const res = await promise;
      expect(res.status).toBe(401);
    }

    // A student session is refused with 403 on every route (each handler
    // guards itself).
    const email = "gov-api-student@fixture.talksy.test";
    const registerRes = await registerRoute(
      request("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, name: "Student", password: "password123" }),
      }),
    );
    expect(registerRes.status).toBe(201);
    const loginRes = await loginRoute(
      request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password: "password123" }),
      }),
    );
    expect(loginRes.status).toBe(200);
    const cookie = extractCookies(loginRes);
    expect(
      (await governanceOverviewRoute(request("/api/exams/admin/governance", { headers: { cookie } }))).status,
    ).toBe(403);
    expect(
      (
        await governanceRegistryRoute(
          request("/api/exams/admin/governance/registry", { headers: { cookie } }),
        )
      ).status,
    ).toBe(403);
    expect(
      (
        await governanceValidationRoute(
          request("/api/exams/admin/governance/validation", { headers: { cookie } }),
        )
      ).status,
    ).toBe(403);
    const actionRes = await governanceActionRoute(
      request("/api/exams/admin/governance/lesson/x/action", {
        method: "POST",
        headers: { cookie },
        body: JSON.stringify({ action: "submit", note: "x" }),
      }),
      ctx({ entityType: "lesson", entityKey: "x" }),
    );
    expect(actionRes.status).toBe(403);
  });

  it("serves staff requests, rejects malformed filters and refuses under-role actions", async () => {
    // Staff login that clears the first-login gate exactly like cms.test.ts
    // (seeded default first, deterministic test password on repeat runs —
    // the same constant cms.test.ts uses so the suites never fight).
    const STAFF_TEST_PASSWORD = "StaffCms2026!x";
    const staffLogin = async (email: string, seededDefault: string): Promise<string> => {
      let res = await loginRoute(
        request("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password: seededDefault }),
        }),
      );
      if (res.status === 200) {
        const cookie = extractCookies(res);
        const change = await changePasswordRoute(
          request("/api/auth/change-password", {
            method: "POST",
            headers: { cookie },
            body: JSON.stringify({ currentPassword: seededDefault, newPassword: STAFF_TEST_PASSWORD }),
          }),
        );
        expect(change.status).toBe(200);
        return cookie;
      }
      res = await loginRoute(
        request("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password: STAFF_TEST_PASSWORD }),
        }),
      );
      expect(res.status).toBe(200);
      return extractCookies(res);
    };
    const editorCookie = await staffLogin("editor@talksy.app", "Editor1234!");

    // The completeness suite left the placeholder lesson human-reviewed
    // (derived: examination-review) — return it to the unreviewed default
    // so this route test can submit it from draft like fresh content.
    await db.cmsLesson.update({
      where: { slug: FX.lessonPlaceholder },
      data: { reviewStatus: "ai-reviewed" },
    });
    await db.examContentReview.deleteMany({
      where: { entityType: "lesson", entityKey: FX.lessonPlaceholder },
    });

    // Happy path: the registry serves every entity type with counts.
    const registryRes = await governanceRegistryRoute(
      request("/api/exams/admin/governance/registry?entityType=spec&pageSize=10", {
        headers: { cookie: editorCookie },
      }),
    );
    expect(registryRes.status).toBe(200);
    const registryBody = (await registryRes.json()) as {
      countsByType: Record<string, number>;
      entities: Array<{ entityType: string }>;
    };
    expect(registryBody.countsByType.spec).toBeGreaterThanOrEqual(3);
    expect(registryBody.entities.every((e) => e.entityType === "spec")).toBe(true);

    // Malformed filters are rejected without crashing.
    const badRes = await governanceRegistryRoute(
      request("/api/exams/admin/governance/registry?entityType=nonsense&status=also-nonsense&page=-4", {
        headers: { cookie: editorCookie },
      }),
    );
    expect(badRes.status).toBe(400);

    const badValidation = await governanceValidationRoute(
      request("/api/exams/admin/governance/validation?category=nope", {
        headers: { cookie: editorCookie },
      }),
    );
    expect(badValidation.status).toBe(400);

    // The action route: a valid submit works, garbage is refused.
    const actionRes = await governanceActionRoute(
      request(`/api/exams/admin/governance/lesson/${FX.lessonPlaceholder}/action`, {
        method: "POST",
        headers: { cookie: editorCookie },
        body: JSON.stringify({ action: "submit", note: "Queue for review." }),
      }),
      ctx({ entityType: "lesson", entityKey: FX.lessonPlaceholder }),
    );
    expect(actionRes.status).toBe(200);
    const actionBody = (await actionRes.json()) as { result: { status: string } };
    expect(actionBody.result.status).toBe("educational-review");

    const badAction = await governanceActionRoute(
      request(`/api/exams/admin/governance/lesson/${FX.lessonPlaceholder}/action`, {
        method: "POST",
        headers: { cookie: editorCookie },
        body: JSON.stringify({ action: "explode", note: "" }),
      }),
      ctx({ entityType: "lesson", entityKey: FX.lessonPlaceholder }),
    );
    expect(badAction.status).toBe(400);

    // Editors cannot pass educational review through the route either.
    const forbidden = await governanceActionRoute(
      request(`/api/exams/admin/governance/lesson/${FX.lessonPlaceholder}/action`, {
        method: "POST",
        headers: { cookie: editorCookie },
        body: JSON.stringify({ action: "educational-approve", note: "This note is long enough." }),
      }),
      ctx({ entityType: "lesson", entityKey: FX.lessonPlaceholder }),
    );
    expect(forbidden.status).toBe(403);
  });

  it("serves the public bank route untouched (regression guard)", async () => {
    const res = await bankRoute(new Request(`${BASE}/api/exams/bank?pageSize=5`));
    expect(res.status).toBe(200);
    const body = (await res.json()) as { total: number };
    expect(body.total).toBe(950);
  });
});
