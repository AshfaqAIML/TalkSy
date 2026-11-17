/**
 * PROMPT 36 — question-bank quality control.
 *
 * Every question that enters the practice zone passes validateQuestion()
 * here (seed-time guard, validator script, tests). The rules implement the
 * PROMPT 36 §11 guarantees directly:
 *
 *   missing answers               → error
 *   incorrect solutions           → error (answer key vs feedback text)
 *   ambiguous wording              → error (duplicate options, "all of the above")
 *   multiple correct options when
 *   only one is expected            → error (mcq with ≠1 correct id)
 *   incorrect grammar explanations  → error (half-written rules, empty fields)
 *
 * Warnings (difficulty coherence, missing why-wrong, missing alternatives)
 * surface for human review but never block on their own.
 */

import type {
  Difficulty,
  Exercise,
  Skill,
} from "@/data/curriculum/types";
import { normalizeText, normalizeWord } from "@/lib/engine/normalize";
import { difficultyWarnings } from "./difficulty";

export interface QcResult {
  errors: string[];
  warnings: string[];
}

export interface QcContext {
  /** Known lesson slugs for revisionLesson checks (programme + core lessons). */
  knownLessonSlugs?: ReadonlySet<string>;
}

const SKILLS: ReadonlySet<string> = new Set([
  "vocabulary",
  "grammar",
  "listening",
  "speaking",
  "reading",
  "writing",
]);
const DIFFICULTIES: ReadonlySet<string> = new Set([
  "easy",
  "medium",
  "hard",
  "challenge",
]);

/** Banned, inherently ambiguous option texts. */
const AMBIGUOUS_OPTION = /\b(all|none|both|neither)\s+of\s+(the|them|these)\b/i;

function containsWord(haystack: string, needle: string): boolean {
  const h = normalizeText(haystack);
  const n = normalizeText(needle);
  if (!n) return false;
  return h.includes(n) || containsAsWords(haystack, needle);
}

/** The key text a learner must produce, per type (for hint-leak + key-consistency checks). */
function keyText(exercise: Exercise): string[] {
  switch (exercise.type) {
    case "mcq":
    case "read-answer":
    case "grammar-identify":
      return [
        exercise.options.find((o) => o.id === exercise.correctOptionId)?.text ?? "",
      ].filter(Boolean);
    case "multi-select":
      return exercise.correctOptionIds
        .map((id) => exercise.options.find((o) => o.id === id)?.text ?? "")
        .filter(Boolean);
    case "fill-blank":
    case "spelling":
      return exercise.acceptedAnswers;
    case "complete-sentence":
    case "correct-mistake":
    case "translate":
    case "short-answer":
    case "listen-answer":
    case "dictation":
      return exercise.acceptedAnswers;
    case "sentence-build":
      return exercise.acceptedSentences;
    case "rearrange":
      return [exercise.correctSentence];
    case "match":
      return exercise.pairs.map(
        (p) =>
          `${exercise.leftItems.find((l) => l.id === p.leftId)?.text ?? ""} → ${
            exercise.rightItems.find((r) => r.id === p.rightId)?.text ?? ""
          }`,
      );
    case "vocab-match":
      return exercise.pairs.map(
        (p) =>
          `${exercise.words.find((w) => w.id === p.wordId)?.word ?? ""} → ${
            exercise.meanings.find((m) => m.id === p.meaningId)?.meaning ?? ""
          }`,
      );
    case "drag-drop":
      return exercise.items.map((item) => `${item.label} → ${item.categoryId}`);
    case "write-response":
      return exercise.mustInclude ?? [];
    case "speak-response":
      return exercise.mustSay;
    default:
      return [];
  }
}

/** Does feedback.correctAnswer agree with the machine key?
 * (PROMPT 36: no incorrect solutions.)
 *
 * FATAL: the feedback names a DISTRACTOR as the answer (a genuinely incorrect
 * solution), or — for correction types — the "correction" reproduces the
 * original error.
 * WARNING: the feedback paraphrases the key instead of quoting it — fine in
 * teaching prose, flagged for human review.
 */
function keyConsistencyErrors(exercise: Exercise): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  // Legacy PROMPT 34 seed questions predate the nested feedback payload; they
  // carry the key at top level, so there is no stated answer to cross-check.
  if (!exercise.feedback) return { errors, warnings };
  const stated = exercise.feedback.correctAnswer ?? "";

  switch (exercise.type) {
    case "mcq":
    case "read-answer":
    case "grammar-identify": {
      const correctOption = exercise.options.find((o) => o.id === exercise.correctOptionId);
      const distractors = exercise.options.filter((o) => o.id !== exercise.correctOptionId);
      // Fatal: the feedback presents a distractor as the answer — but only
      // when it does not ALSO match the correct option (short distractors
      // like "funniest" sit inside the correct answer "the funniest").
      for (const distractor of distractors) {
        if (
          distractor.text.length >= 8 &&
          containsAsWords(stated, distractor.text) &&
          !(correctOption && containsAsWords(stated, correctOption.text))
        ) {
          errors.push(
            `answer key: feedback names a wrong option ("${distractor.text}") as the answer`,
          );
        }
      }
      // Warning: paraphrase instead of quote — review for accuracy.
      if (correctOption && !containsAsWords(stated, correctOption.text)) {
        warnings.push(
          `answer key: feedback paraphrases the key ("${stated}") instead of quoting it ("${correctOption.text}")`,
        );
      }
      break;
    }
    case "multi-select": {
      const texts = exercise.correctOptionIds
        .map((id) => exercise.options.find((o) => o.id === id)?.text)
        .filter(Boolean) as string[];
      const distractors = exercise.options.filter((o) => !exercise.correctOptionIds.includes(o.id));
      for (const distractor of distractors) {
        if (distractor.text.length >= 8 && containsAsWords(stated, distractor.text)) {
          // Same guard as single-choice: a distractor that is contained in a
          // marked option's text is a formatting artefact, not a wrong key.
          const insideMarked = texts.some((t) => containsAsWords(t, distractor.text));
          if (!insideMarked) {
            errors.push(`answer key: feedback names a wrong option ("${distractor.text}")`);
          }
        }
      }
      const missing = texts.filter((t) => !containsAsWords(stated, t));
      if (texts.length > 0 && missing.length > 0) {
        warnings.push(`answer key: feedback omits marked option(s): ${missing.join("; ")}`);
      }
      break;
    }
    case "fill-blank":
    case "spelling":
    case "complete-sentence":
    case "correct-mistake":
    case "translate":
    case "short-answer":
    case "listen-answer":
    case "dictation": {
      const keys = keyText(exercise);
      const ok = keys.some((k) =>
        normalizeWord(k) === normalizeWord(stated) || containsAsWords(stated, k) || containsAsWords(k, stated),
      );
      if (keys.length > 0 && !ok) {
        warnings.push(
          `answer key: feedback ("${stated}") does not quote the accepted answers — verify it names the same solution`,
        );
      }
      break;
    }
    case "sentence-build":
    case "rearrange": {
      const keys = keyText(exercise);
      const ok = keys.some((k) => containsAsWords(stated, k) || containsAsWords(k, stated));
      if (keys.length > 0 && !ok) {
        warnings.push("answer key: feedback sentence does not quote the accepted sentences");
      }
      break;
    }
    // Pairing and open-production types are checked structurally below; their
    // feedback.correctAnswer is a summary line by design.
    default:
      break;
  }
  return { errors, warnings };
}

/** Structural per-type checks: answer presence, uniqueness, coverage. */
function structuralErrors(exercise: Exercise): string[] {
  const errors: string[] = [];

  switch (exercise.type) {
    case "mcq":
    case "read-answer":
    case "grammar-identify": {
      if (exercise.options.length < 2) errors.push("needs at least two options");
      // Case-sensitive: capitalisation-teaching questions legitimately use
      // options that differ only by case ("Paris" vs "paris").
      const texts = exercise.options.map((o) => o.text.trim());
      if (new Set(texts).size !== texts.length) errors.push("duplicate option texts (ambiguous)");
      if (AMBIGUOUS_OPTION.test(texts.join(" "))) {
        errors.push('"all/none of the above"-style options are banned (ambiguous)');
      }
      if (!exercise.options.some((o) => o.id === exercise.correctOptionId)) {
        errors.push("correct option id is not one of the options (missing answer)");
      }
      // Exactly one correct for single-answer types is structural: ids that do
      // not exist can't be marked, and one correctOptionId field by design.
      if (exercise.type === "grammar-identify" && !exercise.sentence.includes(exercise.focus)) {
        errors.push("focus word does not appear in the sentence");
      }
      if (exercise.type === "read-answer" && exercise.passage.trim().length < 20) {
        errors.push("reading passage too short");
      }
      break;
    }
    case "multi-select": {
      if (exercise.options.length < 3) errors.push("multi-select needs at least three options");
      const texts = exercise.options.map((o) => o.text.trim().toLowerCase());
      if (new Set(texts).size !== texts.length) errors.push("duplicate option texts (ambiguous)");
      if (AMBIGUOUS_OPTION.test(texts.join(" "))) {
        errors.push('"all/none of the above"-style options are banned (ambiguous)');
      }
      if (exercise.correctOptionIds.length < 2) {
        errors.push("multi-select with fewer than two correct answers — use multiple choice instead");
      }
      if (exercise.correctOptionIds.length === exercise.options.length) {
        errors.push("every option is correct — the question cannot be answered wrongly");
      }
      if (!exercise.correctOptionIds.every((id) => exercise.options.some((o) => o.id === id))) {
        errors.push("a marked correct answer is not in the options list");
      }
      break;
    }
    case "fill-blank": {
      if (!exercise.sentence.includes("___")) errors.push('sentence must contain "___"');
      if (exercise.acceptedAnswers.length === 0) errors.push("no accepted answer (missing answer)");
      if (exercise.acceptedAnswers.some((a) => a.includes("___"))) {
        errors.push("accepted answers must not contain the blank marker");
      }
      break;
    }
    case "spelling": {
      if (!exercise.sentence.includes(exercise.misspelled)) {
        errors.push("the misspelled word does not appear in the sentence");
      }
      if (exercise.acceptedAnswers.length === 0) errors.push("no correct spelling given");
      if (
        exercise.acceptedAnswers.some((a) => normalizeWord(a) === normalizeWord(exercise.misspelled))
      ) {
        errors.push("the correct spelling equals the misspelling — the question has no answer");
      }
      break;
    }
    case "match":
    case "vocab-match": {
      const leftCount = exercise.type === "match" ? exercise.leftItems.length : exercise.words.length;
      const rightCount = exercise.type === "match" ? exercise.rightItems.length : exercise.meanings.length;
      const pairs =
        exercise.type === "match"
          ? exercise.pairs
          : exercise.pairs.map((p) => ({ leftId: p.wordId, rightId: p.meaningId }));
      if (leftCount < 2) errors.push("needs at least two items to pair");
      if (pairs.length !== leftCount) errors.push("every item needs exactly one pairing");
      const usedRight = new Set(pairs.map((p) => p.rightId));
      if (usedRight.size !== pairs.length) errors.push("a right item is paired twice");
      if (rightCount < leftCount) errors.push("more items than possible matches");
      break;
    }
    case "drag-drop": {
      if (exercise.categories.length < 2) errors.push("needs at least two categories");
      if (exercise.items.length < 2) errors.push("needs at least two items");
      if (exercise.items.length !== new Set(exercise.items.map((i) => i.id)).size) {
        errors.push("duplicate item ids");
      }
      break;
    }
    case "rearrange": {
      if (exercise.correctTokens.length < 2) errors.push("needs at least two tokens");
      if (normalizeText(exercise.correctTokens.join(" ")) !== normalizeText(exercise.correctSentence)) {
        errors.push("correctTokens joined do not equal correctSentence (incorrect solution)");
      }
      break;
    }
    case "sentence-build": {
      if (exercise.acceptedSentences.length === 0) errors.push("no accepted sentence (missing answer)");
      const tileSet = new Set(exercise.tiles.map((t) => normalizeWord(t)));
      const missingTile = exercise.acceptedSentences.some((s) =>
        s
          .split(/\s+/)
          .filter(Boolean)
          .some((w) => !tileSet.has(normalizeWord(w))),
      );
      if (missingTile) errors.push("an accepted sentence uses a word that is not in the tiles");
      break;
    }
    case "correct-mistake": {
      if (exercise.incorrectSentence.trim().length < 4) errors.push("missing incorrect sentence");
      if (exercise.acceptedAnswers.length === 0) errors.push("no accepted correction (missing answer)");
      if (
        exercise.acceptedAnswers.some(
          // Case-sensitive: a correction that only fixes capitalisation
          // ("i am learning" → "I am learning") differs as written.
          (a) =>
            a.replace(/\s+/g, " ").trim().toLowerCase() ===
              exercise.incorrectSentence.replace(/\s+/g, " ").trim().toLowerCase() &&
            a.replace(/\s+/g, " ").trim() ===
              exercise.incorrectSentence.replace(/\s+/g, " ").trim(),
        )
      ) {
        errors.push("an accepted answer equals the incorrect sentence — nothing to fix");
      }
      break;
    }
    case "translate": {
      if (!exercise.source.trim()) errors.push("missing source sentence");
      if (exercise.acceptedAnswers.length === 0) errors.push("no accepted translation");
      break;
    }
    case "short-answer":
    case "listen-answer": {
      if (!exercise.question.trim()) errors.push("missing question");
      if (exercise.acceptedAnswers.length === 0) errors.push("no accepted answer");
      if (exercise.type === "listen-answer" && !exercise.audioText.trim()) {
        errors.push("missing audio text");
      }
      break;
    }
    case "dictation": {
      if (!exercise.audioText.trim()) errors.push("missing audio text");
      if (exercise.acceptedAnswers.length === 0) errors.push("no accepted transcription");
      break;
    }
    case "write-response": {
      if (!Number.isFinite(exercise.minWords) || exercise.minWords < 1) {
        errors.push("minWords must be at least 1");
      }
      break;
    }
    case "speak-response": {
      if (exercise.mustSay.length === 0) errors.push("no mustSay phrases (missing answer key)");
      break;
    }
    default:
      break;
  }
  return errors;
}

/** Word-boundary containment: does `text` contain `key` as whole words? */
function containsAsWords(text: string, key: string): boolean {
  const t = normalizeText(text);
  const k = normalizeWord(key);
  if (!k) return false;
  const pattern = new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  return pattern.test(t);
}

/** Hint rules: progressive, never leaking the full answer early. */
function hintErrors(exercise: Exercise): string[] {
  const errors: string[] = [];
  const warnings: string[] = [];
  const keys = keyText(exercise).map(normalizeText).filter(Boolean);

  // Open-production types (write-response, speak-response) publish their
  // requirement lists (mustInclude / mustSay) inside the task itself; hints
  // may reference those requirements — that is guidance, not a leak.
  const skipLeakCheck =
    exercise.type === "write-response" || exercise.type === "speak-response";

  exercise.hints.forEach((hint, index) => {
    const normalizedHint = normalizeText(hint);
    if (normalizedHint.length < 4) {
      errors.push(`hint ${index + 1} is empty`);
      return;
    }
    if (skipLeakCheck) return;
    for (const key of keys) {
      // A hint containing the entire multi-word key reveals the answer.
      if (key.split(" ").length > 1 && containsAsWords(normalizedHint, key)) {
        errors.push(`hint ${index + 1} reveals the full answer`);
      }
      // A single-word key appearing as a whole word is also a full reveal
      // (word boundary: "the" never leaks the key "he").
      if (key.split(" ").length === 1 && containsAsWords(normalizedHint, key)) {
        errors.push(`hint ${index + 1} reveals the answer word`);
      }
    }
  });
  if (exercise.hints.length > 3) {
    warnings.push("more than three hints — progressive hinting works best with 2–3");
  }
  return [...errors, ...warnings.map((w) => `WARN:${w}`)];
}

/**
 * Validate one bank question. Returns errors (blocking) and warnings
 * (review). The `WARN:` prefix convention is only internal — callers see the
 * two arrays separately.
 */
export function validateQuestion(
  exercise: Exercise,
  context: QcContext = {},
  meta?: { slug?: string; chapterSlug?: string; lessonSlug?: string; topic?: string },
): QcResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const where = meta?.slug ?? exercise.id;

  // Enum hygiene.
  if (!DIFFICULTIES.has(exercise.difficulty)) errors.push(`unknown difficulty "${exercise.difficulty}"`);
  if (!SKILLS.has(exercise.skill)) errors.push(`unknown skill "${exercise.skill}"`);
  if (!exercise.prompt || exercise.prompt.trim().length < 3) {
    errors.push("prompt is missing or too short");
  }

  // Feedback completeness (no incorrect/missing explanations).
  const feedback = exercise.feedback;
  if (!feedback?.correctAnswer?.trim()) errors.push("feedback.correctAnswer is empty");
  if (!feedback?.explanation || feedback.explanation.trim().length < 10) {
    errors.push("feedback.explanation is missing or too short");
  }
  if (feedback?.grammarRule && (!feedback.grammarRule.title.trim() || !feedback.grammarRule.rule.trim())) {
    errors.push("grammarRule is half-written (title and rule both required)");
  }
  if (
    feedback?.similarExample &&
    (!feedback.similarExample.english.trim() || !feedback.similarExample.translation?.trim())
  ) {
    errors.push("similarExample is half-written");
  }
  if (!feedback?.whyWrong?.trim()) {
    warnings.push("whyWrong is absent — smart feedback works best with it");
  }
  if (!feedback?.grammarRule) {
    warnings.push("no grammarRule attached — consider linking the rule it exercises");
  }
  if (!feedback?.similarExample) {
    warnings.push("no similarExample attached — one extra example teaches the pattern");
  }

  // Revision lesson (suggested revision lesson in smart feedback).
  if (feedback?.revisionLesson) {
    if (!feedback.revisionLesson.slug.trim()) errors.push("revisionLesson.slug is empty");
    if (!feedback.revisionLesson.reason?.trim()) errors.push("revisionLesson.reason is empty");
    if (
      context.knownLessonSlugs &&
      feedback.revisionLesson.slug &&
      !context.knownLessonSlugs.has(feedback.revisionLesson.slug)
    ) {
      errors.push(
        `revisionLesson points at unknown lesson "${feedback.revisionLesson.slug}"`,
      );
    }
  } else {
    warnings.push("no revisionLesson — wrong answers should send the learner somewhere specific");
  }

  // Structural + key consistency + hints.
  errors.push(...structuralErrors(exercise));
  const keyResult = keyConsistencyErrors(exercise);
  errors.push(...keyResult.errors);
  warnings.push(...keyResult.warnings);
  const hintResults = hintErrors(exercise);
  errors.push(...hintResults.filter((r) => !r.startsWith("WARN:")));
  warnings.push(...hintResults.filter((r) => r.startsWith("WARN:")).map((r) => r.slice(5)));

  // Difficulty coherence (heuristic warnings).
  warnings.push(...difficultyWarnings(exercise));

  // Bank metadata warnings.
  if (meta && !meta.topic && !meta.chapterSlug) {
    warnings.push("no topic tag / chapter — question is invisible to practice assembly");
  }
  if (meta?.chapterSlug && !/^ch-\d{2}$/.test(meta.chapterSlug)) {
    warnings.push(`chapterSlug "${meta.chapterSlug}" is not a programme chapter slug`);
  }
  if (meta?.lessonSlug && !meta.chapterSlug) {
    warnings.push("lessonSlug set without chapterSlug");
  }

  // Prefix errors with the question identity for readable reports.
  return {
    errors: dedupe(errors).map((e) => `[${where}] ${e}`),
    warnings: dedupe(warnings).map((w) => `[${where}] ${w}`),
  };
}

function dedupe(list: string[]): string[] {
  return [...new Set(list)];
}

/** Aggregate QC over a question set. */
export function validateQuestions(
  exercises: Exercise[],
  context: QcContext = {},
  metaOf?: (exercise: Exercise, index: number) => { slug?: string; chapterSlug?: string; lessonSlug?: string; topic?: string },
): QcResult & { cleanCount: number } {
  const errors: string[] = [];
  const warnings: string[] = [];
  let clean = 0;
  exercises.forEach((exercise, index) => {
    const result = validateQuestion(exercise, context, metaOf?.(exercise, index));
    errors.push(...result.errors);
    warnings.push(...result.warnings);
    if (result.errors.length === 0) clean += 1;
  });
  return { errors, warnings, cleanCount: clean };
}
