import type { CourseExercise, CourseLesson, CourseLevel, StructuredCourseLesson } from "./types";
import { isStructuredLesson } from "./types";
import { exercisePhasesInOrder } from "./lesson-flow";
import { allLessons as allCatalogueLessons } from "../catalogue";

/**
 * Content validation rules for structured (17-section) lessons.
 *
 * These rules are the test-enforced content quality gates for the P1
 * Foundations course and every future course authored against the
 * structured lesson template. They encode the content standards from the
 * product brief:
 *
 *   - every lesson contains all 17 template sections
 *   - every concept has basic / everyday / question examples,
 *     negatives where relevant, and incorrect→corrected pairs
 *   - every exercise has a correct answer key and explanation
 *   - no duplicated exercises
 *   - no unexplained advanced terminology, no placeholder text
 *   - reviewed status and content versioning are present — and
 *     AI-assisted drafts are NEVER marked expert-approved
 *
 * Run via tests/beginner-content.test.ts (bun test) — a failing rule
 * blocks the stage checkpoint.
 */

export type Severity = "error" | "warning";

export interface ContentIssue {
  /** rule code, e.g. "BEG-STRUCT-02" */
  code: string;
  severity: Severity;
  lessonSlug: string;
  message: string;
}

/* ------------------------------------------------------------------ */
/* Controlled vocabulary                                               */
/* ------------------------------------------------------------------ */

/**
 * Linguistic jargon that must never appear in beginner-facing content.
 * The course teaches friendly names for grammar ideas instead.
 */
const BANNED_TERMS = [
  "gerund",
  "infinitive",
  "subjunctive",
  "auxiliary",
  "conjugat", // conjugation / conjugate
  "declension",
  "phoneme",
  "grapheme",
  "diphthong",
  "morpheme",
  "collocation",
  "determiner",
  "modal verb",
  "participle",
  "pluperfect",
  "imperative",
  "interjection",
  "transitive",
  "intransitive",
  "clause",
];

/**
 * Placeholder tokens that must never ship in content.
 */
const BANNED_PLACEHOLDERS = ["TODO", "TBD", "FIXME", "XXX", "lorem", "【", "】"];

/**
 * Grammar terminology with an introduction lesson: the term may not appear
 * in teaching text before its own lesson (that would be an unexplained
 * advanced word). Light forward use INSIDE its own lesson is fine.
 */
export const TERM_INTRO_LESSON: Record<string, string> = {
  alphabet: "p1-1-2",
  "capital letter": "p1-1-3",
  vowel: "p1-1-4",
  consonant: "p1-1-4",
  "word family": "p1-2-1",
  sentence: "p1-1-3",
  syllable: "p1-3-2",
  noun: "p1-3-3",
  verb: "p1-3-4",
  pronoun: "p1-3-5",
  subject: "p1-4-2",
  predicate: "p1-4-2",
  object: "p1-4-4",
  article: "p1-4-5",
  "be verb": "p1-5-1",
  adjective: "p1-5-2",
  preposition: "p1-5-3",
  affirmative: "p1-5-5",
  negative: "p1-5-5",
};

/**
 * Words longer than 12 characters allowed in beginner teaching text.
 * Kept deliberately tiny — teaching language stays short and simple.
 */
const APPROVED_LONG_WORDS = new Set([
  "understanding", // lesson title requested by the product brief
  "self-introduction", // lesson title requested by the product brief
  "consonant-vowel-consonant", // the full name of the CVC pattern (taught in lesson 4+6)
  "grandmother",
  "grandfather",
]);

const PHASE_MIN_COUNTS: Record<string, number> = {
  guided: 3,
  independent: 3,
  speaking: 1,
  listening: 2,
  reading: 2,
  writing: 1,
  assessment: 4,
};

const LESSON_ORDER = (slug: string): number => {
  const m = /^p1-([1-6])-([1-5])$/.exec(slug);
  if (!m) return -1;
  return (Number(m[1]) - 1) * 5 + Number(m[2]);
};

/* ------------------------------------------------------------------ */
/* Validator                                                           */
/* ------------------------------------------------------------------ */

export function validateStructuredLessons(levels: CourseLevel[]): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const issue = (code: string, severity: Severity, lessonSlug: string, message: string) =>
    issues.push({ code, severity, lessonSlug, message });

  const p1 = levels.find((l) => l.code === "P1");
  const catalogueIds = new Set(allCatalogueLessons().map((l) => l.id));

  /* BEG-STRUCT-01 — course shape */
  if (!p1 || p1.status !== "available") {
    issue("BEG-STRUCT-01", "error", "p1", "P1 Foundations level must exist and be available.");
    return issues;
  }
  if (p1.units.length !== 6) {
    issue("BEG-STRUCT-01", "error", "p1", `Expected 6 units, found ${p1.units.length}.`);
  }
  const lessons = p1.units.flatMap((u) => u.lessons);
  if (lessons.length !== 30) {
    issue("BEG-STRUCT-01", "error", "p1", `Expected 30 lessons, found ${lessons.length}.`);
  }
  p1.units.forEach((unit, ui) => {
    if (unit.lessons.length !== 5) {
      issue("BEG-STRUCT-01", "error", unit.slug, `Unit ${ui + 1} must have 5 lessons (has ${unit.lessons.length}).`);
    }
    if (unit.slug !== `p1-${ui + 1}`) {
      issue("BEG-STRUCT-01", "error", unit.slug, `Unit slug must be p1-${ui + 1}.`);
    }
    unit.lessons.forEach((lesson, li) => {
      if (lesson.slug !== `p1-${ui + 1}-${li + 1}`) {
        issue("BEG-STRUCT-01", "error", lesson.slug, "Lesson slug does not match its position in the course.");
      }
    });
  });
  const slugs = lessons.map((l) => l.slug);
  if (new Set(slugs).size !== slugs.length) {
    issue("BEG-STRUCT-01", "error", "p1", "Lesson slugs are not unique.");
  }

  /* per-lesson rules */
  const exerciseKeyCount = new Map<string, string>();

  for (const lesson of lessons) {
    const slug = lesson.slug;
    const order = LESSON_ORDER(slug);

    /* BEG-STRUCT-02 — all 17 sections present and substantial */
    if (!isStructuredLesson(lesson)) {
      issue("BEG-STRUCT-02", "error", slug, "Lesson must follow the structured 17-section template (concept missing).");
      continue;
    }
    if ((lesson.introduction ?? "").trim().length < 40) {
      issue("BEG-STRUCT-02", "error", slug, "Section 1 (introduction) is missing or too short.");
    }
    if ((lesson.objectives ?? []).length < 3) {
      issue("BEG-STRUCT-02", "error", slug, "Section 2 needs at least 3 objectives.");
    }
    const prereqs = lesson.prerequisites ?? [];
    if (order > 1 && prereqs.length < 1) {
      issue("BEG-STRUCT-02", "error", slug, "Section 3 (prerequisites) needs at least 1 entry after lesson 1.");
    }
    if (lesson.concept.definition.trim().length < 10) {
      issue("BEG-STRUCT-02", "error", slug, "Section 4 (concept definition) is missing or too short.");
    }
    if (lesson.concept.explanation.length < 2) {
      issue("BEG-STRUCT-02", "error", slug, "Section 4 (concept explanation) needs at least 2 paragraphs.");
    }
    if ((lesson.teachingSteps ?? []).length < 3) {
      issue("BEG-STRUCT-02", "error", slug, "Section 5 (step-by-step teaching) needs at least 3 steps.");
    }
    const bank = lesson.exampleBank;
    if (!bank || bank.basic.length < 3) {
      issue("BEG-STRUCT-02", "error", slug, "Section 6 (example bank) needs at least 3 basic examples.");
    } else {
      if (bank.everyday.length < 3) {
        issue("BEG-STRUCT-02", "error", slug, "Section 6 needs at least 3 everyday examples.");
      }
      if ((bank.questions ?? []).length < 2) {
        issue("BEG-STRUCT-02", "error", slug, "Section 6 needs at least 2 question examples.");
      }
      if (order >= 13 && (bank.negatives ?? []).length < 2) {
        issue("BEG-STRUCT-02", "error", slug, "From the nouns lesson on, section 6 needs at least 2 negative examples.");
      }
      if (bank.corrections.length < 2) {
        issue("BEG-STRUCT-02", "error", slug, "Section 6 needs at least 2 incorrect→corrected pairs.");
      }
    }
    if (!lesson.realLife || lesson.realLife.examples.length < 2) {
      issue("BEG-STRUCT-02", "error", slug, "Section 7 (real-life application) needs text and 2+ examples.");
    }
    if (!lesson.dialogue || lesson.dialogue.lines.length < 4) {
      issue("BEG-STRUCT-02", "error", slug, "Structured lessons need a dialogue with 4+ lines.");
    }
    if (!lesson.passage || lesson.passage.text.split(/\s+/).length < 20) {
      issue("BEG-STRUCT-02", "error", slug, "Section 12 needs a reading passage of 20+ words.");
    }
    if ((lesson.commonMistakes ?? []).length < 2) {
      issue("BEG-STRUCT-02", "error", slug, "Section 14 (common mistakes) needs at least 2 entries.");
    }
    const rev = lesson.revision;
    if (!rev || rev.keyPoints.length < 3 || rev.keyWords.length < 3 || rev.selfCheck.length < 2) {
      issue("BEG-STRUCT-02", "error", slug, "Section 15 (revision) needs 3+ key points, 3+ key words, 2+ self-checks.");
    }
    if ((lesson.homework?.tasks ?? []).length < 3) {
      issue("BEG-STRUCT-02", "error", slug, "Section 17 (homework) needs at least 3 tasks.");
    }
    if (lesson.vocab.length < 6) {
      issue("BEG-STRUCT-02", "error", slug, "Lesson needs at least 6 vocabulary items.");
    }

    /* BEG-EXER-01 — phases present and in template order */
    const missingPhase = lesson.exercises.some((e) => e.phase == null);
    if (missingPhase) {
      issue("BEG-EXER-01", "error", slug, "Every exercise in a structured lesson must declare its phase.");
    }
    if (!exercisePhasesInOrder(lesson)) {
      issue("BEG-EXER-01", "error", slug, "Exercise phases must appear in template order (guided → … → assessment).");
    }

    /* BEG-EXER-02 — exercise counts per phase */
    const countByPhase = new Map<string, number>();
    for (const e of lesson.exercises) {
      if (e.phase) countByPhase.set(e.phase, (countByPhase.get(e.phase) ?? 0) + 1);
    }
    for (const [phase, min] of Object.entries(PHASE_MIN_COUNTS)) {
      if ((countByPhase.get(phase) ?? 0) < min) {
        issue("BEG-EXER-02", "error", slug, `Phase '${phase}' needs at least ${min} exercises (has ${countByPhase.get(phase) ?? 0}).`);
      }
    }
    if (lesson.exercises.length < 16) {
      issue("BEG-EXER-02", "error", slug, `CourseLesson needs at least 16 exercises (has ${lesson.exercises.length}).`);
    }

    /* BEG-EXER-03 — exercise type constraints per phase */
    for (const e of lesson.exercises) {
      const phase = e.phase;
      if (!phase) continue;
      if (phase === "speaking" && e.type !== "speak") {
        issue("BEG-EXER-03", "error", slug, `CourseExercise ${e.id}: speaking phase allows only speak exercises.`);
      }
      if (phase === "listening" && e.type !== "listen") {
        issue("BEG-EXER-03", "error", slug, `CourseExercise ${e.id}: listening phase allows only listen exercises.`);
      }
      if (phase === "writing" && e.type !== "write") {
        issue("BEG-EXER-03", "error", slug, `CourseExercise ${e.id}: writing phase allows only write exercises.`);
      }
      if (phase === "reading") {
        if (e.type !== "mcq" && e.type !== "fill") {
          issue("BEG-EXER-03", "error", slug, `CourseExercise ${e.id}: reading phase allows only mcq/fill (passage-linked).`);
        } else if (e.passageId == null) {
          issue("BEG-EXER-03", "error", slug, `CourseExercise ${e.id}: reading exercises must reference the passage (passageId).`);
        }
      }
      if ((phase === "guided" || phase === "independent" || phase === "assessment") && (e.type === "speak" || e.type === "write")) {
        issue("BEG-EXER-03", "error", slug, `CourseExercise ${e.id}: speak/write exercises belong to their own phases.`);
      }
    }

    /* BEG-EXER-04 — assessment answer keys with explanations */
    for (const e of lesson.exercises) {
      if (e.phase === "assessment" && (!("explanation" in e) || !e.explanation)) {
        issue("BEG-EXER-04", "error", slug, `CourseExercise ${e.id}: assessment items need an explanation (answer key rationale).`);
      }
    }

    /* BEG-EXER-05 — answer key well-formedness */
    for (const e of lesson.exercises) {
      const problems = exerciseWellFormednessProblems(e);
      if (problems) issue("BEG-EXER-05", "error", slug, `CourseExercise ${e.id}: ${problems}`);
    }

    /* mcq answer distribution — not all answers in the same slot */
    const mcqs = lesson.exercises.filter((e) => e.type === "mcq") as Extract<CourseExercise, { type: "mcq" }>[];
    if (mcqs.length >= 4) {
      const firsts = mcqs.filter((m) => m.answerIndex === 0).length;
      if (firsts === mcqs.length) {
        issue("BEG-EXER-06", "warning", slug, "All mcq answers sit in the first position — vary the answer slots.");
      }
    }

    /* BEG-PREREQ-01 — prerequisites exist and point backwards */
    for (const ref of prereqs) {
      if (ref.lessonSlug) {
        const target = lessons.find((l) => l.slug === ref.lessonSlug);
        if (!target) {
          issue("BEG-PREREQ-01", "error", slug, `Prerequisite ${ref.lessonSlug} does not exist.`);
        } else if (LESSON_ORDER(ref.lessonSlug) >= order) {
          issue("BEG-PREREQ-01", "error", slug, `Prerequisite ${ref.lessonSlug} must be an EARLIER lesson.`);
        }
      }
    }

    /* BEG-GOV-01 — review status, versioning, catalogue targets */
    const meta = lesson.content;
    if (!meta) {
      issue("BEG-GOV-01", "error", slug, "Lesson is missing content governance metadata (review status + version).");
    } else {
      if (!/^\d+\.\d+\.\d+$/.test(meta.contentVersion)) {
        issue("BEG-GOV-01", "error", slug, `Invalid contentVersion: ${meta.contentVersion}`);
      }
      const aiAssisted = /AI-assisted/i.test(meta.authoredBy);
      if (meta.status !== "draft") {
        // Only human-reviewed content may leave draft status — and never
        // AI-assisted content. This is the "never mark AI as expert-approved" rule.
        if (aiAssisted) {
          issue("BEG-GOV-01", "error", slug, "AI-assisted content may never be marked reviewed or published.");
        }
        if (!meta.reviewedBy || !meta.reviewedAt) {
          issue("BEG-GOV-01", "error", slug, `Status '${meta.status}' requires a human reviewer (reviewedBy + reviewedAt).`);
        }
      }
      if (!meta.authoredBy.trim()) {
        issue("BEG-GOV-01", "error", slug, "authoredBy must not be empty.");
      }
      const targets = meta.catalogueTargets ?? [];
      if (targets.length < 1) {
        issue("BEG-GOV-01", "error", slug, "Lesson must declare its catalogue targets.");
      }
      for (const target of targets) {
        if (!catalogueIds.has(target)) {
          issue("BEG-GOV-01", "error", slug, `Catalogue target ${target} does not exist.`);
        }
      }
    }

    /* BEG-LANG — language quality across learner-facing strings.
     * Wrong-example strings (corrections, common mistakes) quote learner
     * errors on purpose, so they are exempt from sentence mechanics. */
    const sentenceStrings = collectSentenceStrings(lesson);
    for (const text of sentenceStrings) {
      const langIssue = languageIssue(text);
      if (langIssue) issue("BEG-LANG-01", "error", slug, `"${truncate(text)}" — ${langIssue}`);
    }
    const wrongStrings = collectWrongExampleStrings(lesson);
    for (const text of wrongStrings) {
      const langIssue = languageIssue(text, { skipMechanics: true });
      if (langIssue) issue("BEG-LANG-01", "error", slug, `"${truncate(text)}" — ${langIssue}`);
    }
    for (const word of lesson.vocab) {
      const posIssue = posLabelIssue(word.pos);
      if (posIssue) issue("BEG-LANG-01", "error", slug, `vocab '${word.term}': ${posIssue}`);
    }
    for (const text of collectTeachingStrings(lesson)) {
      const termIssue = terminologyIssue(text, slug);
      if (termIssue) issue("BEG-LANG-02", "error", slug, `${termIssue} in "${truncate(text)}"`);
      const longWord = longWordIssue(text);
      if (longWord) issue("BEG-LANG-03", "warning", slug, `Long word '${longWord}' in "${truncate(text)}" — simplify or approve it.`);
    }
  }

  /* BEG-EXER-07 — no duplicated exercises across the whole course.
   * Listen keys include the audio text, match keys include the pairs —
   * the same generic prompt with different content is NOT a duplicate. */
  for (const lesson of lessons) {
    for (const e of lesson.exercises) {
      let key: string;
      if (e.type === "listen") key = `listen::${e.audioText}::${normalise(e.prompt)}`;
      else if (e.type === "match") key = `match::${normalise(e.prompt)}::${e.pairs.map((p) => `${p.left}=${p.right}`).sort().join(",")}`;
      else key = `${e.type}::${normalise(e.prompt)}`;
      const owner = exerciseKeyCount.get(key);
      if (owner) {
        issue("BEG-EXER-07", "error", lesson.slug, `Exercise duplicates ${owner}: "${truncate(e.prompt)}"`);
      } else {
        exerciseKeyCount.set(key, lesson.slug);
      }
    }
  }

  return issues;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function exerciseWellFormednessProblems(e: CourseExercise): string | null {
  switch (e.type) {
    case "mcq": {
      if (e.options.length < 3) return "mcq needs at least 3 options.";
      if (e.answerIndex < 0 || e.answerIndex >= e.options.length) return "mcq answerIndex out of range.";
      if (new Set(e.options).size !== e.options.length) return "mcq has duplicate options.";
      return null;
    }
    case "fill":
      return e.accepted.length >= 1 ? null : "fill needs at least one accepted answer.";
    case "order":
      return e.answer.trim().split(/\s+/).length >= 3 ? null : "order answer needs at least 3 words.";
    case "match": {
      if (e.pairs.length < 3) return "match needs at least 3 pairs.";
      const lefts = e.pairs.map((p) => p.left);
      const rights = e.pairs.map((p) => p.right);
      if (new Set(lefts).size !== lefts.length) return "match has duplicate lefts.";
      if (new Set(rights).size !== rights.length) return "match has duplicate rights.";
      return null;
    }
    case "listen": {
      if (!e.audioText.trim()) return "listen needs audioText.";
      if (e.mode === "choice") {
        if ((e.options ?? []).length < 3) return "listen (choice) needs at least 3 options.";
        if (e.answerIndex == null || e.answerIndex >= (e.options ?? []).length) return "listen (choice) needs a valid answerIndex.";
        return null;
      }
      return (e.accepted ?? []).length >= 1 ? null : "listen (type) needs at least one accepted answer.";
    }
    case "speak":
      return e.targetText.trim() ? null : "speak needs targetText.";
    case "write":
      return e.modelAnswer.trim().length >= 1 ? null : "write needs a model answer.";
    default:
      return null;
  }
}

/** Learner-facing strings that are full sentences: mechanics are checked. */
function collectSentenceStrings(lesson: StructuredCourseLesson): string[] {
  const out: string[] = [];
  out.push(lesson.introduction ?? "");
  out.push(...(lesson.objectives ?? []));
  out.push(...lesson.concept.explanation);
  for (const step of lesson.teachingSteps ?? []) {
    out.push(step.text);
    out.push(...(step.examples ?? []));
  }
  const bank = lesson.exampleBank;
  if (bank) {
    out.push(...bank.basic, ...bank.everyday, ...(bank.questions ?? []), ...(bank.negatives ?? []));
    for (const c of bank.corrections) {
      out.push(c.right, ...(c.note ? [c.note] : []));
    }
  }
  if (lesson.dialogue) out.push(...lesson.dialogue.lines.map((l) => l.text));
  if (lesson.passage) out.push(lesson.passage.text);
  if (lesson.realLife) out.push(lesson.realLife.text, ...lesson.realLife.examples);
  for (const m of lesson.commonMistakes ?? []) out.push(m.right, m.why);
  const rev = lesson.revision;
  if (rev) out.push(...rev.keyPoints, ...rev.selfCheck);
  out.push(...(lesson.homework?.tasks ?? []));
  return out.filter((s) => s.trim().length > 0);
}

/** Deliberately-wrong example strings: quoted learner errors. */
function collectWrongExampleStrings(lesson: StructuredCourseLesson): string[] {
  const out: string[] = [];
  const bank = lesson.exampleBank;
  if (bank) out.push(...bank.corrections.map((c) => c.wrong));
  for (const m of lesson.commonMistakes ?? []) out.push(m.wrong);
  return out.filter((s) => s.trim().length > 0);
}

/** Teaching text scanned for terminology and word difficulty. */
function collectTeachingStrings(lesson: StructuredCourseLesson): string[] {
  const out = collectSentenceStrings(lesson);
  out.push(lesson.concept.definition);
  for (const word of lesson.vocab) out.push(word.definition);
  for (const e of lesson.exercises) {
    out.push(e.prompt);
    if (e.type === "mcq" || e.type === "fill" || e.type === "listen" || e.type === "write") {
      if (e.explanation) out.push(e.explanation);
    }
  }
  return out;
}

function isSentenceLike(text: string): boolean {
  const tokens = text.split(/\s+/).filter(Boolean);
  if (tokens.length < 4) return false;
  // Pure letter sequences (A B C, Aa Bb, S-A-M) are not sentences.
  const withoutPunct = text.replace(/[.,!?→✓✗:()—\-']/g, " ");
  const wordTokens = withoutPunct.split(/\s+/).filter(Boolean);
  if (wordTokens.every((t) => t.length <= 2)) return false;
  return true;
}

function languageIssue(text: string, opts?: { skipMechanics?: boolean }): string | null {
  if (!isSentenceLike(text) && !opts?.skipMechanics) return null;
  if (/\s{2,}/.test(text.trim())) return "double space";
  if (/\*\*|^#|^-\s/.test(text)) return "markdown artifact";
  if (/^\|/.test(text.trim())) return "markdown table artifact";
  for (const banned of BANNED_PLACEHOLDERS) {
    if (text.includes(banned)) return `placeholder '${banned}'`;
  }
  for (const banned of BANNED_TERMS) {
    if (text.toLowerCase().includes(banned)) return `banned term '${banned}'`;
  }
  if (opts?.skipMechanics) return null;
  // Trailing parenthetical notes — "The dog runs. (subject: the dog)" —
  // annotate a complete sentence, so check the sentence before them.
  let trimmed = text.trim();
  for (let i = 0; i < 2; i += 1) {
    trimmed = trimmed.replace(/\s*[(][^()]*[)]\s*[)\]"'»]*\s*$/, "");
  }
  trimmed = trimmed
    .replace(/[)\]"'»]+$/, "")
    .trim();
  const first = trimmed[0];
  if (/[a-z]/.test(first)) return "sentence does not start with a capital letter";
  const last = trimmed.slice(-1);
  if (!/[.!?✓✗…]/.test(last)) return "sentence does not end with punctuation";
  return null;
}

/** Vocab pos labels are dictionary-style tags: short, never sentence-like. */
function posLabelIssue(pos: string): string | null {
  for (const banned of BANNED_TERMS) {
    if (pos.toLowerCase().includes(banned)) return `banned term '${banned}' in part-of-speech label`;
  }
  return null;
}

function terminologyIssue(text: string, lessonSlug: string): string | null {
  const order = LESSON_ORDER(lessonSlug);
  const lower = ` ${text.toLowerCase()} `;
  for (const [term, introSlug] of Object.entries(TERM_INTRO_LESSON)) {
    const introOrder = LESSON_ORDER(introSlug);
    if (order >= introOrder) continue;
    if (lower.includes(` ${term}`)) {
      return `term '${term}' is used before its introduction lesson (${introSlug})`;
    }
  }
  return null;
}

function longWordIssue(text: string): string | null {
  const tokens = text.split(/[^A-Za-z-]+/).filter(Boolean);
  for (const token of tokens) {
    if (token.length > 12 && !APPROVED_LONG_WORDS.has(token.toLowerCase())) {
      return token;
    }
  }
  return null;
}

function normalise(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function truncate(text: string): string {
  return text.length > 60 ? `${text.slice(0, 57)}…` : text;
}
