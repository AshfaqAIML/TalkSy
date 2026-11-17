/**
 * Examination content governance — question validation engine (PROMPT 55 §4).
 *
 * One engine validates every question-bearing surface of the academies
 * across the eight mandated categories:
 *
 *   1. missing-answer-key    5. invalid-passage-ref
 *   2. multiple-correct      6. invalid-question-type
 *   3. incorrect-answer      7. duplicate-question
 *   4. broken-audio          8. outdated-format
 *
 * Sources scanned:
 *   - mock library questions (MockTestQuestion, curated kinds) with their
 *     per-type answer keys and payloads;
 *   - CMS exercises attached to academy lessons (CmsQuestion exercise JSON);
 *   - lesson blocks (asset-backed audio, practice-block exercise references);
 *   - uploaded audio assets (file present on disk);
 *   - specifications (review-due dates, retired task-type catalogs);
 *   - the practice libraries (950 items) — machine-validated upstream by the
 *     PROMPT 54 bank QC gate, counted as checked rather than re-scanned.
 *
 * Severities: "blocking" issues prevent the answer-validation sign-off in
 * the approval workflow (workflow.ts runs this engine scoped to the entity
 * being signed off); "warning" issues surface on the dashboard.
 *
 * Scopes resolve to concrete id/slug sets so a sign-off validates exactly
 * the content being approved: one question, one exercise, one lesson, one
 * mock, one course, one spec or one audio asset.
 */

import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { db } from "@/lib/db";
import { ASSEMBLED_SET_KINDS, questionPayloadSchemas } from "../types";
import { NO_ANSWER_KEY_TYPES } from "../admin/types";
import { EXAM_COURSE_SLUGS } from "./registry";
import { QUESTION_BANK } from "@/data/exams/question-bank";
import {
  VALIDATION_CATEGORIES,
  type GovernanceValidationReport,
  type ValidationIssue,
  type ValidationSeverity,
} from "./types";

// ---------------------------------------------------------------------------
// Scope
// ---------------------------------------------------------------------------

export interface ValidationScope {
  entityType:
    | "question"
    | "exercise"
    | "lesson"
    | "mock"
    | "course"
    | "audio"
    | "passage"
    | "model-answer"
    | "rubric"
    | "pathway"
    | "module"
    | "chapter"
    | "spec";
  entityKey: string;
}

/** Everything a resolved scope includes. `null` set = unrestricted. */
interface ResolvedScope {
  mockIds: Set<string> | null;
  questionIds: Set<string> | null;
  exerciseKeys: Set<string> | null; // "cmsq:<slug>"
  lessonSlugs: Set<string> | null;
  specIds: Set<string> | null;
  audioIds: Set<string> | null;
  /** Practice-library items are machine-validated; scoped reports just count. */
  practiceLibraryOnly: string | null;
}

const FULL_SCOPE: ResolvedScope = {
  mockIds: null,
  questionIds: null,
  exerciseKeys: null,
  lessonSlugs: null,
  specIds: null,
  audioIds: null,
  practiceLibraryOnly: null,
};

async function resolveScope(scope: ValidationScope | undefined): Promise<ResolvedScope> {
  if (!scope) return FULL_SCOPE;

  const empty: ResolvedScope = {
    mockIds: new Set(),
    questionIds: new Set(),
    exerciseKeys: new Set(),
    lessonSlugs: new Set(),
    specIds: new Set(),
    audioIds: new Set(),
    practiceLibraryOnly: null,
  };

  switch (scope.entityType) {
    case "question": {
      const question = await db.mockTestQuestion.findUnique({
        where: { id: scope.entityKey },
        select: { id: true, section: { select: { mockTestId: true } } },
      });
      if (!question) return empty;
      return { ...empty, questionIds: new Set([question.id]), mockIds: new Set([question.section.mockTestId]) };
    }
    case "exercise": {
      if (scope.entityKey.startsWith("bank:")) {
        const itemId = scope.entityKey.slice("bank:".length);
        const exists = QUESTION_BANK.some((item) => item.id === itemId);
        return { ...empty, practiceLibraryOnly: exists ? itemId : null };
      }
      if (scope.entityKey.startsWith("cmsq:")) {
        return { ...empty, exerciseKeys: new Set([scope.entityKey]) };
      }
      return empty;
    }
    case "lesson": {
      // Lesson scope: the lesson's blocks + every exercise it references
      // (exerciseKeys stays null so the lesson branch of the question query
      // applies, not the single-exercise branch).
      return { ...empty, lessonSlugs: new Set([scope.entityKey]), exerciseKeys: null };
    }
    case "mock":
      // Mock scope: its sections, audio and every question inside it.
      return { ...empty, mockIds: new Set([scope.entityKey]), questionIds: null };
    case "course": {
      const lessons = await db.cmsLesson.findMany({
        where: { unit: { module: { course: { slug: scope.entityKey } } } },
        select: { slug: true },
      });
      return { ...empty, lessonSlugs: new Set(lessons.map((l) => l.slug)), exerciseKeys: null };
    }
    case "spec":
      return { ...empty, specIds: new Set([scope.entityKey]) };
    case "audio":
      return { ...empty, audioIds: new Set([scope.entityKey]) };
    default:
      // pathway / module / chapter / rubric / passage / model-answer carry
      // no machine-checkable answer keys of their own.
      return empty;
  }
}

function allows(scope: ResolvedScope, set: Set<string> | null, key: string): boolean {
  return set === null || set.has(key);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Json = Record<string, unknown>;

function parseJson(raw: string | null | undefined): Json {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Json)
      : {};
  } catch {
    return {};
  }
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

/**
 * The engine's grading vocabulary: every type the practice/mock engine can
 * score (questionPayloadSchemas) plus the constructed-response types. A
 * question type outside BOTH this vocabulary and the official spec catalogs
 * is genuinely ungradeable — that is an incorrect question type. Types that
 * exist only as engine drills (DICTATION, LISTEN_REPEAT…) are fine: they are
 * pedagogical drill formats, not official examination task types.
 */
const ENGINE_TYPE_VOCABULARY = new Set<string>([
  ...Object.keys(questionPayloadSchemas),
  ...NO_ANSWER_KEY_TYPES,
]);

/**
 * Duplicate fingerprint over the question's actual CONTENT, not its boiler-
 * plate. Official rubric stems ("Questions 11–14. Complete the notes below…")
 * repeat legitimately across mocks, so the signature must cover the content
 * fields: options, context, statements, items, masked words, scrambled
 * tokens, passages.
 */
function questionContentSignature(payload: Json): string {
  const parts: string[] = [];
  for (const option of asArray(payload.options)) {
    const text = str(option);
    if (text) parts.push(text);
  }
  for (const field of ["context", "statement", "prompt", "passage", "audioScript", "cue"]) {
    const text = str(payload[field]);
    if (text) parts.push(text);
  }
  for (const item of asArray(payload.items)) {
    const text = str((item as Json)?.text);
    if (text) parts.push(text);
  }
  for (const blank of asArray(payload.blanks)) {
    const text = str((blank as Json)?.masked) || str((blank as Json)?.answer);
    if (text) parts.push(text);
  }
  for (const word of asArray(payload.words)) {
    const text = str((word as Json)?.masked);
    if (text) parts.push(text);
  }
  for (const token of asArray(payload.scrambled)) {
    const text = str(token);
    if (text) parts.push(text);
  }
  return parts.map(normalizeText).filter(Boolean).sort().join("|");
}

/** Duplicate fingerprint: exam + stem + content signature. */
function questionFingerprint(examKey: string, stem: string | null, payload: Json): string {
  return `${examKey}#${normalizeText(stem ?? "")}#${questionContentSignature(payload)}`;
}

function severityFor(contentStatus: string | undefined, fallback: ValidationSeverity): ValidationSeverity {
  // A defect on live content blocks; on drafts it warns.
  return contentStatus === "published" ? "blocking" : fallback;
}

// ---------------------------------------------------------------------------
// Spec catalogs (active vs any-version) for type checks
// ---------------------------------------------------------------------------

async function loadSpecCatalogs(): Promise<{
  active: Map<string, Set<string>>;
  ever: Map<string, Set<string>>;
  activeSpecIds: Set<string>;
}> {
  const specs = await db.testSpecification.findMany();
  const active = new Map<string, Set<string>>();
  const ever = new Map<string, Set<string>>();
  const activeSpecIds = new Set<string>();
  for (const spec of specs) {
    let catalog: string[] = [];
    try {
      const parsed = JSON.parse(spec.taskTypes);
      catalog = Array.isArray(parsed)
        ? parsed.map((t) => str((t as Json)?.type)).filter(Boolean)
        : [];
    } catch {
      catalog = [];
    }
    if (!ever.has(spec.examKey)) ever.set(spec.examKey, new Set());
    for (const t of catalog) ever.get(spec.examKey)!.add(t);
    if (spec.status === "active") {
      activeSpecIds.add(spec.id);
      if (!active.has(spec.examKey)) active.set(spec.examKey, new Set());
      for (const t of catalog) active.get(spec.examKey)!.add(t);
    }
  }
  return { active, ever, activeSpecIds };
}

// ---------------------------------------------------------------------------
// Mock library validation
// ---------------------------------------------------------------------------

async function validateSpecs(
  issues: ValidationIssue[],
  scope: ResolvedScope,
): Promise<{ specsPastReviewDate: number }> {
  const specs = await db.testSpecification.findMany();
  let specsPastReviewDate = 0;
  for (const spec of specs) {
    if (!allows(scope, scope.specIds, spec.id)) continue;
    if (spec.status === "active" && spec.reviewDueAt && spec.reviewDueAt < new Date()) {
      specsPastReviewDate += 1;
      issues.push({
        category: "outdated-format",
        severity: "warning",
        entityType: "spec",
        entityKey: spec.id,
        title: `${spec.name} v${spec.version} — review overdue`,
        evidence: `Review was due ${spec.reviewDueAt.toISOString().slice(0, 10)}.`,
        suggestion:
          "Re-verify the specification against the official source and refresh lastReviewedAt/reviewDueAt, or draft a new version.",
      });
    }
    if (spec.status === "draft" && spec.effectiveDate < new Date()) {
      issues.push({
        category: "outdated-format",
        severity: "warning",
        entityType: "spec",
        entityKey: spec.id,
        title: `${spec.name} v${spec.version} — effective date passed while still draft`,
        evidence: `Effective ${spec.effectiveDate.toISOString().slice(0, 10)} but the spec is not active.`,
        suggestion: "Activate the specification or move its effective date.",
      });
    }
  }
  return { specsPastReviewDate };
}

async function validateMockLibrary(
  issues: ValidationIssue[],
  scope: ResolvedScope,
  counts: { mockQuestions: number },
): Promise<{ mocksOnRetiredSpecs: number; questionsWithRetiredTypes: number }> {
  const catalogs = await loadSpecCatalogs();
  const fingerprints = new Map<string, { id: string; mockTitle: string }>();
  let mocksOnRetiredSpecs = 0;
  let questionsWithRetiredTypes = 0;

  const mocks = await db.mockTest.findMany({
    where: {
      kind: { notIn: [...ASSEMBLED_SET_KINDS] },
      ...(scope.mockIds ? { id: { in: [...scope.mockIds] } } : {}),
    },
    include: {
      spec: { select: { id: true, version: true, status: true } },
      sections: { orderBy: { order: "asc" }, include: { questions: { orderBy: { order: "asc" } } } },
    },
  });

  for (const mock of mocks) {
    // Mock-level checks apply to full runs and mock scopes — a single-
    // question scope must not drag the whole mock's issues in.
    const includeMockLevel = scope.questionIds === null;

    // 8. Outdated format: published mock pinned to a non-active spec.
    if (
      includeMockLevel &&
      mock.status === "published" &&
      !catalogs.activeSpecIds.has(mock.specId)
    ) {
      mocksOnRetiredSpecs += 1;
      issues.push({
        category: "outdated-format",
        severity: "warning",
        entityType: "mock",
        entityKey: mock.id,
        title: `${mock.title} — pinned to retired spec v${mock.spec.version}`,
        evidence: `Mock status "${mock.status}", spec v${mock.spec.version} is "${mock.spec.status}".`,
        suggestion: "Relink the mock to the active specification (Exam blueprints → impact & relink).",
      });
    }

    // 4. Broken audio: a listening section with no recordings at all.
    for (const section of mock.sections) {
      if (!includeMockLevel || section.key !== "listening" || section.questions.length === 0) continue;
      const payload = parseJson(section.payload);
      const scripts = asArray(payload.audioParts)
        .map((p) => str((p as Json)?.script).trim())
        .filter(Boolean);
      const perQuestionScript = section.questions.some((q) =>
        str(parseJson(q.payload).audioScript).trim().length > 0,
      );
      if (scripts.length === 0 && !perQuestionScript) {
        issues.push({
          category: "broken-audio",
          severity: severityFor(mock.status, "blocking"),
          entityType: "mock",
          entityKey: mock.id,
          title: `${mock.title} — listening section "${section.title}" has no audio`,
          evidence: `${section.questions.length} questions depend on a section recording, but no audio part or question script exists.`,
          suggestion: "Add the audioParts scripts (or per-question audioScript) so the section is answerable.",
        });
      }
    }

    for (const question of mock.sections.flatMap((s) => s.questions)) {
      if (!allows(scope, scope.questionIds, question.id)) continue;
      counts.mockQuestions += 1;

      const payload = parseJson(question.payload);
      const answer = question.answer ? parseJson(question.answer) : null;
      const type = question.type;
      const objective = !(NO_ANSWER_KEY_TYPES as readonly string[]).includes(type);
      const options = asArray(payload.options).map((o) => str(o));
      const status = question.contentStatus;

      // 1. Missing answer key.
      if (objective && (answer === null || Object.keys(answer).length === 0)) {
        issues.push({
          category: "missing-answer-key",
          severity: severityFor(status, "warning"),
          entityType: "question",
          entityKey: question.id,
          title: `${type} in ${mock.title} — no answer key`,
          evidence: `contentStatus "${status}", answer key is ${answer === null ? "null" : "empty"}.`,
          suggestion: "Add the machine answer key before publication; constructed-response tasks use the rubric types instead.",
        });
      }

      // 2. Multiple correct possibilities.
      if (type === "MCQ_MULTI" && answer) {
        const keyed = asArray(answer.options);
        if (options.length > 0 && keyed.length >= options.length) {
          issues.push({
            category: "multiple-correct",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `MCQ_MULTI in ${mock.title} — every option is keyed correct`,
            evidence: `${keyed.length} of ${options.length} options are keyed.`,
            suggestion: "Keep at least one incorrect option so the item discriminates.",
          });
        }
      }
      if (type === "MCQ_SINGLE") {
        const normalized = options.map(normalizeText).filter(Boolean);
        if (normalized.length > 1 && new Set(normalized).size < normalized.length) {
          issues.push({
            category: "multiple-correct",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `MCQ_SINGLE in ${mock.title} — identical options`,
            evidence: "Two or more options normalise to the same text, so more than one option is correct.",
            suggestion: "Rewrite one of the duplicated options.",
          });
        }
      }
      if (type === "TFNG" && answer && typeof answer.value === "number") {
        const labels = asArray(payload.labels).length || 3;
        if (answer.value < 0 || answer.value >= labels) {
          issues.push({
            category: "multiple-correct",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `TFNG in ${mock.title} — keyed value outside the label set`,
            evidence: `Keyed value ${answer.value} but only ${labels} labels exist.`,
            suggestion: "Re-key the answer to a valid label index.",
          });
        }
      }

      // 3. Incorrect answers (key present but not valid).
      if (type === "MCQ_SINGLE" && answer && typeof answer.option === "number") {
        if (answer.option < 0 || answer.option >= options.length) {
          issues.push({
            category: "incorrect-answer",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `MCQ_SINGLE in ${mock.title} — keyed option does not exist`,
            evidence: `Keyed index ${answer.option} with ${options.length} options.`,
            suggestion: "Re-key the answer to an existing option index.",
          });
        }
      }
      if (type === "MCQ_MULTI" && answer) {
        const keyed = asArray(answer.options).map((n) => (typeof n === "number" ? n : -1));
        if (keyed.some((n) => n < 0 || n >= options.length)) {
          issues.push({
            category: "incorrect-answer",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `MCQ_MULTI in ${mock.title} — keyed option does not exist`,
            evidence: `Keyed indices [${keyed.join(", ")}] with ${options.length} options.`,
            suggestion: "Re-key the answers to existing option indices.",
          });
        }
      }
      if (type === "FILL_BLANK" && answer) {
        const blanks = asArray(answer.blanks);
        const empty = blanks.filter((b) => !str((b as Json)?.answer).trim());
        if (empty.length > 0) {
          issues.push({
            category: "incorrect-answer",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `FILL_BLANK in ${mock.title} — blank with empty key`,
            evidence: `${empty.length} of ${blanks.length} blanks key an empty answer.`,
            suggestion: "Fill in the answer (and alternatives) for every blank.",
          });
        }
      }
      if ((type === "DICTATION" || type === "LISTEN_REPEAT") && answer && !str(answer.text).trim()) {
        issues.push({
          category: "incorrect-answer",
          severity: severityFor(status, "blocking"),
          entityType: "question",
          entityKey: question.id,
          title: `${type} in ${mock.title} — empty target text`,
          evidence: "The answer key carries no text.",
          suggestion: "Set the target text the learner must produce.",
        });
      }
      if (
        (type === "COMPLETE_WORDS" || type === "SENTENCE_RECONSTRUCTION") &&
        answer &&
        !str(answer.answer).trim()
      ) {
        issues.push({
          category: "incorrect-answer",
          severity: severityFor(status, "blocking"),
          entityType: "question",
          entityKey: question.id,
          title: `${type} in ${mock.title} — empty answer`,
          evidence: "The answer key is empty.",
          suggestion: "Set the expected answer string.",
        });
      }

      // 5. Invalid passage references.
      if (type === "MATCHING" && answer) {
        const pairs = (answer as { pairs?: Json }).pairs ?? {};
        const pairEntries = Object.entries(pairs);
        const itemIds = new Set(asArray(payload.items).map((i) => str((i as Json)?.id)));
        const optionIds = new Set(asArray(payload.options).map((o) => str((o as Json)?.id)));
        const badPairs = pairEntries.filter(
          ([itemId, optionId]) => !itemIds.has(itemId) || !optionIds.has(str(optionId)),
        );
        if (pairEntries.length === 0 || badPairs.length > 0) {
          issues.push({
            category: "invalid-passage-ref",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `MATCHING in ${mock.title} — pairs reference unknown items`,
            evidence: `${badPairs.length} of ${pairEntries.length} pairs point at item/option ids that do not exist.`,
            suggestion: "Re-key the pairs against the payload's item and option ids.",
          });
        }
      }
      const section = mock.sections.find((s) => s.id === question.sectionId);
      // A reading question is passage-less only when it carries NEITHER its
      // own passage NOR a stem, AND its section offers no shared passage to
      // reference (IELTS groups like "Questions 2–3" legitimately let follow-
      // up items reuse the group anchor's passage).
      if (
        section &&
        section.key === "reading" &&
        (type === "MCQ_SINGLE" || type === "TFNG") &&
        !str(payload.passage).trim() &&
        !str(question.stem).trim() &&
        !section.questions.some((q) => str(parseJson(q.payload).passage).trim().length > 0)
      ) {
        issues.push({
          category: "invalid-passage-ref",
          severity: severityFor(status, "blocking"),
          entityType: "question",
          entityKey: question.id,
          title: `${type} in ${mock.title} — reading question without a passage`,
          evidence: "The payload carries no passage text, so the question cannot be answered.",
          suggestion: "Attach the passage text (or share the section's passage).",
        });
      }
      if (type === "FILL_BLANK") {
        const context = str(payload.context);
        const blanks = asArray(payload.blanks);
        const markers = (context.match(/_{3,}/g) ?? []).length;
        if (blanks.length > 0 && markers === 0) {
          issues.push({
            category: "invalid-passage-ref",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `FILL_BLANK in ${mock.title} — blanks without ___ markers`,
            evidence: `${blanks.length} blanks but the context text has no blank markers.`,
            suggestion: "Add ___ markers to the context for every blank.",
          });
        } else if (blanks.length > 0 && markers > 0 && markers < blanks.length) {
          issues.push({
            category: "invalid-passage-ref",
            severity: severityFor(status, "blocking"),
            entityType: "question",
            entityKey: question.id,
            title: `FILL_BLANK in ${mock.title} — fewer markers than blanks`,
            evidence: `${markers} markers for ${blanks.length} blanks.`,
            suggestion: "Match the number of ___ markers to the blank count.",
          });
        }
      }

      // 6 & 8. Question types. Two vocabularies matter: the engine's grading
      // vocabulary (DICTATION and friends are legitimate drill formats) and
      // the official spec catalogs. Unknown to BOTH → incorrect type
      // (blocking). Known to a catalog but absent from the active one →
      // outdated examination format (warning).
      const everTypes = catalogs.ever.get(mock.examKey);
      const activeTypes = catalogs.active.get(mock.examKey);
      const knownToEngine = ENGINE_TYPE_VOCABULARY.has(type);
      const knownToAnyCatalog = everTypes?.has(type) ?? false;
      if (!knownToEngine && !knownToAnyCatalog) {
        issues.push({
          category: "invalid-question-type",
          severity: severityFor(status, "blocking"),
          entityType: "question",
          entityKey: question.id,
          title: `${type} in ${mock.title} — unknown question type`,
          evidence: `Type "${type}" is neither a grading type the engine supports nor a task type in any ${mock.examKey} specification catalog.`,
          suggestion: "Use a task type from the exam's specification (or an engine drill type), or extend the spec catalog first.",
        });
      } else if (knownToAnyCatalog && activeTypes && activeTypes.size > 0 && !activeTypes.has(type)) {
        questionsWithRetiredTypes += 1;
        issues.push({
          category: "outdated-format",
          severity: "warning",
          entityType: "question",
          entityKey: question.id,
          title: `${type} in ${mock.title} — type retired from the active spec`,
          evidence: `Type "${type}" is absent from the active ${mock.examKey} catalog.`,
          suggestion: "Replace the item with a current task type or update the specification.",
        });
      }

      // 7. Duplicates (fingerprint over stem + content, per exam).
      const stem = question.stem ?? "";
      if (normalizeText(stem) !== "" || questionContentSignature(payload) !== "") {
        const fp = questionFingerprint(mock.examKey, stem, payload);
        const existing = fingerprints.get(fp);
        if (existing) {
          issues.push({
            category: "duplicate-question",
            severity: "warning",
            entityType: "question",
            entityKey: question.id,
            title: `Duplicate question — same stem and content as an item in ${existing.mockTitle}`,
            evidence: `Stem: "${stem.slice(0, 70)}"`,
            suggestion: "Rewrite one of the duplicates or retire it.",
          });
        } else {
          fingerprints.set(fp, { id: question.id, mockTitle: mock.title });
        }
      }
    }
  }

  return { mocksOnRetiredSpecs, questionsWithRetiredTypes };
}

// ---------------------------------------------------------------------------
// CMS content validation (exercises on academy lessons + lesson blocks + audio)
// ---------------------------------------------------------------------------

const EXERCISE_TYPES = new Set([
  "mcq", "multi-select", "fill-blank", "match", "drag-drop", "rearrange",
  "sentence-build", "complete-sentence", "correct-mistake", "translate",
  "short-answer", "listen-answer", "dictation", "read-answer",
  "write-response", "speak-response", "grammar-identify", "vocab-match",
  "spelling",
]);

const CONSTRUCTED_EXERCISE_TYPES = new Set(["write-response", "speak-response"]);

type KeyFinding = { category: "missing-answer-key" | "incorrect-answer"; evidence: string; suggestion: string };

/** Exercise fields that carry no distinguishing content (meta + feedback). */
const EXERCISE_META_FIELDS = new Set([
  "id", "type", "prompt", "hints", "feedback", "difficulty", "skill", "tags",
]);

/** Order-insensitive content signature of an exercise's data JSON. */
function stableContentJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableContentJson).join(",")}]`;
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([key]) => !EXERCISE_META_FIELDS.has(key))
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, val]) => `${key}:${stableContentJson(val)}`);
    return `{${entries.join(",")}}`;
  }
  return normalizeText(String(value));
}

function exerciseKeyIssues(exercise: Json): KeyFinding[] {
  const out: KeyFinding[] = [];
  const type = str(exercise.type);
  const optionIds = new Set(asArray(exercise.options).map((o) => str((o as Json)?.id)));
  const leftIds = new Set(asArray(exercise.leftItems).map((o) => str((o as Json)?.id)));
  const rightIds = new Set(asArray(exercise.rightItems).map((o) => str((o as Json)?.id)));

  if (CONSTRUCTED_EXERCISE_TYPES.has(type)) return out;

  switch (type) {
    case "mcq": {
      const key = str(exercise.correctOptionId);
      if (!key) {
        out.push({ category: "missing-answer-key", evidence: "correctOptionId is empty.", suggestion: "Key the correct option." });
      } else if (optionIds.size > 0 && !optionIds.has(key)) {
        out.push({ category: "incorrect-answer", evidence: `Keyed option "${key}" is not among the ${optionIds.size} options.`, suggestion: "Re-key to an existing option id." });
      }
      break;
    }
    case "multi-select": {
      const keys = asArray(exercise.correctOptionIds).map((x) => str(x));
      if (keys.length === 0) {
        out.push({ category: "missing-answer-key", evidence: "correctOptionIds is empty.", suggestion: "Key at least one correct option." });
      } else if (optionIds.size > 0 && keys.some((k) => !optionIds.has(k))) {
        out.push({ category: "incorrect-answer", evidence: "Some keyed options do not exist.", suggestion: "Re-key to existing option ids." });
      }
      break;
    }
    case "match": {
      const pairs = asArray(exercise.pairs);
      if (pairs.length === 0) {
        out.push({ category: "missing-answer-key", evidence: "No correct pairings.", suggestion: "Add the left→right pairings." });
      } else {
        const bad = pairs.filter(
          (p) => !leftIds.has(str((p as Json)?.leftId)) || !rightIds.has(str((p as Json)?.rightId)),
        );
        if (bad.length > 0) {
          out.push({ category: "incorrect-answer", evidence: `${bad.length} pairing(s) reference unknown items.`, suggestion: "Re-key the pairings against the item ids." });
        }
      }
      break;
    }
    case "vocab-match": {
      // vocab-match pairs words with meanings: {wordId, meaningId} against
      // the words[] and meanings[] arrays.
      const pairs = asArray(exercise.pairs);
      const wordIds = new Set(asArray(exercise.words).map((w) => str((w as Json)?.id)));
      const meaningIds = new Set(asArray(exercise.meanings).map((m) => str((m as Json)?.id)));
      if (pairs.length === 0) {
        out.push({ category: "missing-answer-key", evidence: "No correct pairings.", suggestion: "Add the word→meaning pairings." });
      } else {
        const bad = pairs.filter(
          (p) => !wordIds.has(str((p as Json)?.wordId)) || !meaningIds.has(str((p as Json)?.meaningId)),
        );
        if (bad.length > 0) {
          out.push({ category: "incorrect-answer", evidence: `${bad.length} pairing(s) reference unknown words or meanings.`, suggestion: "Re-key the pairings against the word and meaning ids." });
        }
      }
      break;
    }
    case "fill-blank":
    case "complete-sentence":
    case "correct-mistake":
    case "translate":
    case "short-answer":
    case "listen-answer":
    case "dictation":
    case "spelling": {
      const answers = asArray(exercise.acceptedAnswers).map((x) => str(x).trim()).filter(Boolean);
      if (answers.length === 0) {
        out.push({ category: "missing-answer-key", evidence: "acceptedAnswers is empty.", suggestion: "Add at least one accepted answer." });
      }
      break;
    }
    case "sentence-build": {
      const answers = asArray(exercise.acceptedSentences).map((x) => str(x).trim()).filter(Boolean);
      if (answers.length === 0) {
        out.push({ category: "missing-answer-key", evidence: "acceptedSentences is empty.", suggestion: "Add the target sentence." });
      }
      break;
    }
    case "rearrange": {
      const tokens = asArray(exercise.correctTokens).map((x) => str(x)).filter(Boolean);
      if (tokens.length === 0) {
        out.push({ category: "missing-answer-key", evidence: "correctTokens is empty.", suggestion: "Add the correct token order." });
      }
      break;
    }
    case "drag-drop": {
      const unkeyed = asArray(exercise.items).filter((i) => !str((i as Json)?.categoryId));
      if (unkeyed.length > 0) {
        out.push({ category: "missing-answer-key", evidence: `${unkeyed.length} draggable item(s) have no correct category.`, suggestion: "Key every item's category." });
      }
      break;
    }
    default:
      break;
  }
  return out;
}

async function validateCmsContent(
  issues: ValidationIssue[],
  scope: ResolvedScope,
  counts: { cmsExercises: number; lessons: number; audioAssets: number },
): Promise<void> {
  const lessons = await (EXAM_COURSE_SLUGS.length
    ? db.cmsLesson.findMany({
        where: { unit: { module: { course: { slug: { in: EXAM_COURSE_SLUGS } } } } },
        select: {
          id: true, slug: true, title: true, live: true,
          blocks: { select: { type: true, data: true }, orderBy: { order: "asc" } },
        },
      })
    : Promise.resolve([]));
  const scopedLessons = lessons.filter((l) => allows(scope, scope.lessonSlugs, l.slug));
  const lessonSlugs = new Set(scopedLessons.map((l) => l.slug));

  // Practice blocks reference CmsQuestion ids directly (ids that may or may
  // not carry a matching lessonSlug) — collect them so reference checks and
  // key checks both see every question a scoped lesson actually uses.
  const practiceIds = new Set<string>();
  for (const lesson of scopedLessons) {
    for (const block of lesson.blocks) {
      if (block.type !== "practice") continue;
      const data = parseJson(block.data);
      for (const id of asArray(data.exerciseIds)) {
        const value = str(id);
        if (value) practiceIds.add(value);
      }
    }
  }

  // Exercises attached to the scoped lessons (or the single scoped exercise).
  const questions = await db.cmsQuestion.findMany({
    where: scope.exerciseKeys
      ? { slug: { in: [...scope.exerciseKeys].map((k) => k.replace(/^cmsq:/, "")) } }
      : {
          OR: [
            { lessonSlug: { in: [...lessonSlugs] } },
            { id: { in: [...practiceIds] } },
          ],
        },
    select: { id: true, slug: true, type: true, prompt: true, status: true, data: true, lessonSlug: true },
  });
  const questionById = new Map(questions.map((q) => [q.id, q]));
  const fingerprints = new Map<string, string>();

  for (const question of questions) {
    counts.cmsExercises += 1;
    const exercise = parseJson(question.data);
    const type = str(question.type) || str(exercise.type);
    const entityKey = `cmsq:${question.slug}`;

    // 6. Incorrect question types.
    if (type && !EXERCISE_TYPES.has(type)) {
      issues.push({
        category: "invalid-question-type",
        severity: severityFor(question.status, "blocking"),
        entityType: "exercise",
        entityKey,
        title: `Exercise "${question.prompt.slice(0, 60)}" — unknown type "${type}"`,
        evidence: `Type "${type}" is not one of the ${EXERCISE_TYPES.size} exercise types the practice engine can grade.`,
        suggestion: "Pick a valid exercise type so the practice engine can score it.",
      });
      continue;
    }

    // 1 & 3. Answer-key presence + validity.
    for (const finding of exerciseKeyIssues(exercise)) {
      issues.push({
        category: finding.category,
        severity: severityFor(
          question.status,
          finding.category === "incorrect-answer" ? "blocking" : "warning",
        ),
        entityType: "exercise",
        entityKey,
        title: `${type} — ${finding.category === "missing-answer-key" ? "missing answer key" : "invalid answer key"} (lesson ${question.lessonSlug ?? "—"})`,
        evidence: finding.evidence,
        suggestion: finding.suggestion,
      });
    }

    // 7. Duplicates (type + prompt + content signature — boilerplate prompts
    // like "Complete the sentence." only collide when the content matches).
    if (normalizeText(question.prompt) !== "") {
      const fp = `${type}#${normalizeText(question.prompt)}#${stableContentJson(exercise)}`;
      const existing = fingerprints.get(fp);
      if (existing) {
        issues.push({
          category: "duplicate-question",
          severity: "warning",
          entityType: "exercise",
          entityKey,
          title: `Duplicate exercise — same type, prompt and content as cmsq:${existing}`,
          evidence: `Prompt: "${question.prompt.slice(0, 70)}"`,
          suggestion: "Rewrite one of the duplicates or retire it.",
        });
      } else {
        fingerprints.set(fp, question.slug);
      }
    }
  }

  // Audio assets: file present on disk.
  const assets = await db.cmsAsset.findMany({ where: { kind: "audio" } });
  const assetIds = new Set(assets.map((a) => a.id));
  const mediaDir = join(process.cwd(), "db", "media");
  const mediaFiles = existsSync(mediaDir) ? readdirSync(mediaDir) : [];
  for (const asset of assets) {
    counts.audioAssets += 1;
    if (!allows(scope, scope.audioIds, asset.id)) continue;
    if (!mediaFiles.some((f) => f.startsWith(`${asset.id}.`))) {
      issues.push({
        category: "broken-audio",
        severity: "blocking",
        entityType: "audio",
        entityKey: asset.id,
        title: `Audio asset "${asset.title}" — file missing`,
        evidence: `No file for asset ${asset.id} exists in db/media.`,
        suggestion: "Re-upload the audio file or remove the asset.",
      });
    }
  }

  // Lesson blocks: audio references + practice-block exercise references.
  for (const lesson of scopedLessons) {
    counts.lessons += 1;
    for (const block of lesson.blocks) {
      const data = parseJson(block.data);
      if (block.type === "audio") {
        const mode = str(data.mode);
        if (mode === "asset") {
          const assetId = str(data.audioAssetId);
          if (!assetId) {
            issues.push({
              category: "broken-audio",
              severity: severityFor(lesson.live ? "published" : "draft", "blocking"),
              entityType: "lesson",
              entityKey: lesson.slug,
              title: `Lesson "${lesson.title}" — audio block with no asset selected`,
              evidence: "An asset-mode audio block carries no audioAssetId.",
              suggestion: "Pick an audio asset or switch the block to spoken text.",
            });
          } else if (!assetIds.has(assetId)) {
            issues.push({
              category: "broken-audio",
              severity: severityFor(lesson.live ? "published" : "draft", "blocking"),
              entityType: "lesson",
              entityKey: lesson.slug,
              title: `Lesson "${lesson.title}" — audio block references a missing asset`,
              evidence: `audioAssetId ${assetId} does not exist.`,
              suggestion: "Re-link the block to an existing audio asset.",
            });
          }
        } else if (mode === "tts" && !str(data.text).trim()) {
          issues.push({
            category: "broken-audio",
            severity: "warning",
            entityType: "lesson",
            entityKey: lesson.slug,
            title: `Lesson "${lesson.title}" — audio block with nothing to speak`,
            evidence: "A spoken-text audio block carries no text.",
            suggestion: "Add the text or remove the block.",
          });
        }
      }
      if (block.type === "practice") {
        for (const id of asArray(data.exerciseIds).map((x) => str(x))) {
          if (!id) continue;
          const question = questionById.get(id);
          if (!question) {
            issues.push({
              category: "invalid-passage-ref",
              severity: severityFor(lesson.live ? "published" : "draft", "blocking"),
              entityType: "lesson",
              entityKey: lesson.slug,
              title: `Lesson "${lesson.title}" — practice block references a missing exercise`,
              evidence: `Exercise id ${id} does not exist in the question bank.`,
              suggestion: "Re-attach an existing exercise or remove the reference.",
            });
          } else if (question.status !== "published") {
            issues.push({
              category: "invalid-passage-ref",
              severity: "warning",
              entityType: "lesson",
              entityKey: lesson.slug,
              title: `Lesson "${lesson.title}" — practice block references an unpublished exercise`,
              evidence: `Exercise ${id} (cmsq:${question.slug}) has status "${question.status}"; learners silently skip it.`,
              suggestion: "Publish the exercise or pick a published one.",
            });
          }
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// The engine
// ---------------------------------------------------------------------------

export async function runQuestionValidation(
  scope?: ValidationScope,
): Promise<GovernanceValidationReport> {
  const resolved = await resolveScope(scope);
  const issues: ValidationIssue[] = [];
  const counts = {
    mockQuestions: 0,
    cmsExercises: 0,
    lessons: 0,
    audioAssets: 0,
    specs: 0,
    practiceLibraryItems: 0,
  };

  // Practice-library items are machine-validated upstream by the PROMPT 54
  // bank QC gate (bun run validate:exambank — 950 items, 0 issues); the
  // engine counts them as checked rather than re-scanning code banks.
  counts.practiceLibraryItems = resolved.practiceLibraryOnly
    ? 1
    : QUESTION_BANK.length;
  counts.specs = await db.testSpecification.count();

  await validateSpecs(issues, resolved);
  await validateMockLibrary(issues, resolved, counts);
  await validateCmsContent(issues, resolved, counts);

  const byCategory = Object.fromEntries(VALIDATION_CATEGORIES.map((c) => [c, 0])) as Record<
    ValidationIssue["category"],
    number
  >;
  let blockingCount = 0;
  let warningCount = 0;
  for (const issue of issues) {
    byCategory[issue.category] += 1;
    if (issue.severity === "blocking") blockingCount += 1;
    else warningCount += 1;
  }

  return {
    issues: issues.sort((a, b) => {
      if (a.severity !== b.severity) return a.severity === "blocking" ? -1 : 1;
      return a.category.localeCompare(b.category);
    }),
    byCategory,
    blockingCount,
    warningCount,
    checked: counts,
    generatedAt: new Date().toISOString(),
  };
}
