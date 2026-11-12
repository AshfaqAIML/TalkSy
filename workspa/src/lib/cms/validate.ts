/**
 * CMS payload validation.
 *
 * Manual validators (not zod) so every error message is actionable for
 * content editors, and so the exact content-model invariants of the shared
 * exercise engine are enforced before anything reaches the database.
 */

import type {
  Difficulty,
  Exercise,
  ExerciseType,
  Skill,
} from "@/data/curriculum/types";
import type { CmsBlock } from "@/data/cms/types";

export type ValidateResult<T> = { ok: true; value: T } | { ok: false; error: string };

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

const SKILLS: Skill[] = [
  "vocabulary",
  "grammar",
  "listening",
  "speaking",
  "reading",
  "writing",
];
const DIFFICULTIES: Difficulty[] = ["easy", "medium", "hard", "challenge"];

export const EXERCISE_TYPES: ExerciseType[] = [
  "mcq",
  "multi-select",
  "fill-blank",
  "match",
  "drag-drop",
  "rearrange",
  "sentence-build",
  "complete-sentence",
  "correct-mistake",
  "translate",
  "short-answer",
  "listen-answer",
  "dictation",
  "read-answer",
  "write-response",
  "speak-response",
];

export const EXERCISE_TYPE_LABELS: Record<ExerciseType, string> = {
  mcq: "Multiple choice",
  "multi-select": "Multiple select",
  "fill-blank": "Fill in the blank",
  match: "Match the pairs",
  "drag-drop": "Drag and drop",
  rearrange: "Rearrange words",
  "sentence-build": "Sentence building",
  "complete-sentence": "Complete the sentence",
  "correct-mistake": "Correct the mistake",
  translate: "Translation",
  "short-answer": "Short answer",
  "listen-answer": "Listen and answer",
  dictation: "Dictation",
  "read-answer": "Read and answer",
  "write-response": "Write a response",
  "speak-response": "Speak a response",
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function strArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

function cleanList(v: unknown): string[] {
  return strArray(v).map((s) => s.trim()).filter(Boolean);
}

interface OptionInput {
  id: string;
  text: string;
  translation?: string;
}

function parseOptions(v: unknown): OptionInput[] | null {
  if (!Array.isArray(v)) return null;
  const out: OptionInput[] = [];
  for (const raw of v) {
    if (!raw || typeof raw !== "object") return null;
    const o = raw as Record<string, unknown>;
    const id = str(o.id);
    const text = str(o.text);
    if (!id || !text) return null;
    out.push({ id, text, translation: str(o.translation) || undefined });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Question payload → Exercise
// ---------------------------------------------------------------------------

export interface QuestionPayload {
  slug?: unknown;
  type?: unknown;
  skill?: unknown;
  difficulty?: unknown;
  prompt?: unknown;
  tags?: unknown;
  hints?: unknown;
  correctAnswer?: unknown;
  explanation?: unknown;
  whyWrong?: unknown;
  grammarRuleTitle?: unknown;
  grammarRuleRule?: unknown;
  similarExampleEnglish?: unknown;
  similarExampleTranslation?: unknown;
  // type-specific fields (flat payload from the editor form)
  options?: unknown;
  correctOptionId?: unknown;
  correctOptionIds?: unknown;
  passage?: unknown;
  passageTitle?: unknown;
  question?: unknown;
  sentence?: unknown;
  acceptedAnswers?: unknown;
  keywords?: unknown;
  leftItems?: unknown;
  rightItems?: unknown;
  pairs?: unknown;
  categories?: unknown;
  items?: unknown;
  correctTokens?: unknown;
  correctSentence?: unknown;
  sentenceStart?: unknown;
  sentenceEnd?: unknown;
  incorrectSentence?: unknown;
  direction?: unknown;
  source?: unknown;
  audioText?: unknown;
  situation?: unknown;
  minWords?: unknown;
  mustInclude?: unknown;
  targetPhrases?: unknown;
  mustSay?: unknown;
  tiles?: unknown;
  acceptedSentences?: unknown;
}

export function validateSlugInput(raw: unknown): ValidateResult<string> {
  const slug = str(raw).toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  if (slug.length < 2) return { ok: false, error: "Slug needs at least 2 letters or numbers." };
  if (slug.length > 60) return { ok: false, error: "Slug must be 60 characters or fewer." };
  return { ok: true, value: slug };
}

/**
 * Validate the flat question payload from the editor / import bundle and
 * build the canonical Exercise the shared engine can grade and render.
 * `id` becomes the question's database id, so attempts, practice blocks and
 * versions all reference the same stable identifier.
 */
export function buildExercise(
  payload: QuestionPayload,
  id: string,
): ValidateResult<Exercise> {
  const type = str(payload.type) as ExerciseType;
  if (!EXERCISE_TYPES.includes(type)) {
    return { ok: false, error: `Unknown question type "${str(payload.type)}".` };
  }
  const skill = (str(payload.skill) || "vocabulary") as Skill;
  if (!SKILLS.includes(skill)) return { ok: false, error: "Unknown skill." };
  const difficulty = (str(payload.difficulty) || "easy") as Difficulty;
  if (!DIFFICULTIES.includes(difficulty)) {
    return { ok: false, error: "Unknown difficulty." };
  }
  const prompt = str(payload.prompt);
  if (prompt.length < 3) return { ok: false, error: "The question prompt is too short." };

  const hints = cleanList(payload.hints);
  const correctAnswer = str(payload.correctAnswer);
  const explanation = str(payload.explanation);
  if (!correctAnswer) return { ok: false, error: "The correct answer summary is required (shown as feedback)." };
  if (explanation.length < 3) return { ok: false, error: "Please explain the answer for the learner." };

  const feedback = {
    correctAnswer,
    explanation,
    whyWrong: str(payload.whyWrong) || undefined,
    grammarRule:
      str(payload.grammarRuleTitle) && str(payload.grammarRuleRule)
        ? { title: str(payload.grammarRuleTitle), rule: str(payload.grammarRuleRule) }
        : undefined,
    similarExample:
      str(payload.similarExampleEnglish) && str(payload.similarExampleTranslation)
        ? {
            english: str(payload.similarExampleEnglish),
            translation: str(payload.similarExampleTranslation),
          }
        : undefined,
  };
  const common = { id, difficulty, skill, prompt, hints, feedback };
  const tags = cleanList(payload.tags);
  if (tags.length > 8) return { ok: false, error: "Use at most 8 topic tags." };

  const accepted = (): ValidateResult<string[]> => {
    const list = cleanList(payload.acceptedAnswers);
    if (list.length === 0) return { ok: false, error: "Add at least one accepted answer." };
    return { ok: true, value: list };
  };

  switch (type) {
    case "mcq":
    case "read-answer": {
      const options = parseOptions(payload.options);
      if (!options || options.length < 2) {
        return { ok: false, error: "Provide at least two answer options with text." };
      }
      const correctOptionId = str(payload.correctOptionId);
      if (!options.some((o) => o.id === correctOptionId)) {
        return { ok: false, error: "Mark which option is the correct answer." };
      }
      if (type === "mcq") {
        return {
          ok: true,
          value: {
            ...common,
            tags,
            type,
            passage: str(payload.passage) || undefined,
            options,
            correctOptionId,
          },
        };
      }
      const passage = str(payload.passage);
      if (passage.length < 10) return { ok: false, error: "A reading passage is required." };
      return {
        ok: true,
        value: {
          ...common,
          tags,
          type,
          passageTitle: str(payload.passageTitle) || undefined,
          passage,
          question: str(payload.question),
          options,
          correctOptionId,
        },
      };
    }
    case "multi-select": {
      const options = parseOptions(payload.options);
      if (!options || options.length < 3) {
        return { ok: false, error: "Multiple select needs at least three options." };
      }
      const correctIds = strArray(payload.correctOptionIds);
      if (correctIds.length < 1) return { ok: false, error: "Mark at least one correct answer." };
      const valid = correctIds.every((cid) => options.some((o) => o.id === cid));
      if (!valid) return { ok: false, error: "A marked correct answer is not in the options list." };
      return {
        ok: true,
        value: { ...common, tags, type, options, correctOptionIds: correctIds },
      };
    }
    case "fill-blank": {
      const sentence = str(payload.sentence);
      if (!sentence.includes("___")) return { ok: false, error: 'The sentence must contain "___" where the blank is.' };
      const acc = accepted();
      if (!acc.ok) return acc;
      return { ok: true, value: { ...common, tags, type, sentence, acceptedAnswers: acc.value } };
    }
    case "match": {
      const left = parseOptions(payload.leftItems);
      const right = parseOptions(payload.rightItems);
      if (!left || left.length < 2) return { ok: false, error: "Provide at least two left-side items." };
      if (!right || right.length < 2) return { ok: false, error: "Provide at least two right-side items." };
      const pairsRaw = Array.isArray(payload.pairs) ? payload.pairs : [];
      const pairs: { leftId: string; rightId: string }[] = [];
      for (const p of pairsRaw) {
        if (!p || typeof p !== "object") continue;
        const rec = p as Record<string, unknown>;
        const leftId = str(rec.leftId);
        const rightId = str(rec.rightId);
        if (leftId && rightId) pairs.push({ leftId, rightId });
      }
      if (pairs.length !== left.length) {
        return { ok: false, error: "Every left-side item needs exactly one correct pairing." };
      }
      const leftIds = new Set(left.map((o) => o.id));
      const rightIds = new Set(right.map((o) => o.id));
      if (pairs.some((p) => !leftIds.has(p.leftId) || !rightIds.has(p.rightId))) {
        return { ok: false, error: "A pairing references an item that does not exist." };
      }
      const usedRight = new Set(pairs.map((p) => p.rightId));
      if (usedRight.size !== pairs.length) {
        return { ok: false, error: "Each right-side item can only be used once." };
      }
      return { ok: true, value: { ...common, tags, type, leftItems: left, rightItems: right, pairs } };
    }
    case "drag-drop": {
      const categories = parseOptions(payload.categories);
      if (!categories || categories.length < 2) return { ok: false, error: "Provide at least two categories." };
      const itemsRaw = Array.isArray(payload.items) ? payload.items : [];
      const items: { id: string; label: string; categoryId: string }[] = [];
      const catIds = new Set(categories.map((c) => c.id));
      for (const it of itemsRaw) {
        if (!it || typeof it !== "object") continue;
        const rec = it as Record<string, unknown>;
        const id = str(rec.id);
        const label = str(rec.label);
        const categoryId = str(rec.categoryId);
        if (id && label && catIds.has(categoryId)) items.push({ id, label, categoryId });
      }
      if (items.length < 2) return { ok: false, error: "Provide at least two items to sort." };
      if (items.length !== itemsRaw.length) {
        return { ok: false, error: "Every item must be assigned to an existing category." };
      }
      return { ok: true, value: { ...common, tags, type, categories, items } };
    }
    case "rearrange": {
      const correctTokens = cleanList(payload.correctTokens);
      if (correctTokens.length < 2) return { ok: false, error: "Provide the words in the correct order." };
      const correctSentence = str(payload.correctSentence);
      if (!correctSentence) return { ok: false, error: "Provide the full correct sentence." };
      return { ok: true, value: { ...common, tags, type, correctTokens, correctSentence } };
    }
    case "complete-sentence": {
      const sentenceStart = str(payload.sentenceStart);
      if (!sentenceStart) return { ok: false, error: "Provide the start of the sentence." };
      const acc = accepted();
      if (!acc.ok) return acc;
      return {
        ok: true,
        value: {
          ...common,
          tags,
          type,
          sentenceStart,
          sentenceEnd: str(payload.sentenceEnd) || undefined,
          acceptedAnswers: acc.value,
          keywords: cleanList(payload.keywords),
        },
      };
    }
    case "correct-mistake": {
      const incorrectSentence = str(payload.incorrectSentence);
      if (incorrectSentence.length < 4) return { ok: false, error: "Provide the incorrect sentence." };
      const acc = accepted();
      if (!acc.ok) return acc;
      return { ok: true, value: { ...common, tags, type, incorrectSentence, acceptedAnswers: acc.value } };
    }
    case "translate": {
      const direction = str(payload.direction);
      if (direction !== "to-english" && direction !== "from-english") {
        return { ok: false, error: "Choose a translation direction." };
      }
      const source = str(payload.source);
      if (!source) return { ok: false, error: "Provide the source sentence." };
      const acc = accepted();
      if (!acc.ok) return acc;
      return { ok: true, value: { ...common, tags, type, direction, source, acceptedAnswers: acc.value } };
    }
    case "short-answer":
    case "listen-answer": {
      const question = str(payload.question);
      if (!question) return { ok: false, error: "Provide the question." };
      const acc = accepted();
      if (!acc.ok) return acc;
      if (type === "short-answer") {
        return {
          ok: true,
          value: { ...common, tags, type, question, acceptedAnswers: acc.value, keywords: cleanList(payload.keywords) },
        };
      }
      const audioText = str(payload.audioText);
      if (!audioText) return { ok: false, error: "Provide the audio text the learner will hear." };
      return {
        ok: true,
        value: {
          ...common,
          tags,
          type,
          audioText,
          question,
          acceptedAnswers: acc.value,
          keywords: cleanList(payload.keywords),
        },
      };
    }
    case "dictation": {
      const audioText = str(payload.audioText);
      if (!audioText) return { ok: false, error: "Provide the audio text the learner will hear." };
      const acc = accepted();
      if (!acc.ok) return acc;
      return { ok: true, value: { ...common, tags, type, audioText, acceptedAnswers: acc.value } };
    }
    case "write-response": {
      const situation = str(payload.situation);
      if (situation.length < 5) return { ok: false, error: "Describe the writing situation." };
      const minWords = Number(payload.minWords);
      if (!Number.isFinite(minWords) || minWords < 1) return { ok: false, error: "Minimum words must be at least 1." };
      return {
        ok: true,
        value: { ...common, tags, type, situation, minWords: Math.round(minWords), mustInclude: cleanList(payload.mustInclude) },
      };
    }
    case "speak-response": {
      const situation = str(payload.situation);
      if (situation.length < 5) return { ok: false, error: "Describe the speaking situation." };
      const mustSay = cleanList(payload.mustSay);
      if (mustSay.length === 0) return { ok: false, error: "Add at least one phrase the learner must say." };
      return {
        ok: true,
        value: {
          ...common,
          tags,
          type,
          situation,
          targetPhrases: cleanList(payload.targetPhrases),
          mustSay,
        },
      };
    }
    case "sentence-build": {
      const tiles = cleanList(payload.tiles);
      if (tiles.length < 2) return { ok: false, error: "Provide the word tiles." };
      const acceptedSentences = cleanList(payload.acceptedSentences);
      if (acceptedSentences.length === 0) return { ok: false, error: "Provide at least one accepted sentence." };
      return { ok: true, value: { ...common, tags, type, tiles, acceptedSentences } };
    }
  }
}

// ---------------------------------------------------------------------------
// Block validation
// ---------------------------------------------------------------------------

export function validateCmsBlock(block: unknown): ValidateResult<CmsBlock> {
  if (!block || typeof block !== "object") return { ok: false, error: "Block is not an object." };
  const b = block as Record<string, unknown>;
  const type = str(b.type);
  switch (type) {
    case "heading":
      if (!str(b.text)) return { ok: false, error: "Heading text is required." };
      break;
    case "text":
      if (!str(b.text)) return { ok: false, error: "Paragraph text is required." };
      break;
    case "definition": {
      if (!str(b.term)) return { ok: false, error: "Definition needs a term." };
      if (!str(b.definition)) return { ok: false, error: `Definition of "${str(b.term)}" is missing.` };
      break;
    }
    case "example": {
      const items = Array.isArray(b.items) ? b.items : [];
      const valid = items.filter(
        (it) => it && typeof it === "object" && str((it as Record<string, unknown>).english),
      );
      if (valid.length === 0) return { ok: false, error: "Add at least one example sentence." };
      break;
    }
    case "table": {
      const headers = strArray(b.headers).filter(Boolean);
      if (headers.length === 0) return { ok: false, error: "Table needs at least one column header." };
      const rows = Array.isArray(b.rows) ? b.rows : [];
      if (rows.length === 0) return { ok: false, error: "Table needs at least one row." };
      break;
    }
    case "vocabulary-list": {
      const words = Array.isArray(b.words) ? b.words : [];
      const valid = words.filter(
        (w) =>
          w &&
          typeof w === "object" &&
          str((w as Record<string, unknown>).word) &&
          str((w as Record<string, unknown>).definition),
      );
      if (valid.length === 0) return { ok: false, error: "Vocabulary list needs at least one word with a definition." };
      break;
    }
    case "grammar-rule": {
      if (!str(b.title)) return { ok: false, error: "Grammar explanation needs a title." };
      if (!str(b.rule)) return { ok: false, error: "Grammar explanation needs the rule statement." };
      const examples = Array.isArray(b.examples) ? b.examples : [];
      const valid = examples.filter(
        (e) => e && typeof e === "object" && str((e as Record<string, unknown>).english),
      );
      if (valid.length === 0) return { ok: false, error: "Grammar explanation needs at least one example." };
      break;
    }
    case "dialogue": {
      const lines = Array.isArray(b.lines) ? b.lines : [];
      const valid = lines.filter(
        (l) =>
          l &&
          typeof l === "object" &&
          str((l as Record<string, unknown>).speaker) &&
          str((l as Record<string, unknown>).text),
      );
      if (valid.length === 0) return { ok: false, error: "Dialogue needs at least one line with a speaker." };
      break;
    }
    case "image": {
      if (!str(b.src)) return { ok: false, error: "Image needs a source (upload or URL)." };
      if (!str(b.alt)) return { ok: false, error: "Image needs alt text for screen readers." };
      break;
    }
    case "audio": {
      const mode = str(b.mode);
      if (mode === "tts") {
        if (!str(b.text)) return { ok: false, error: "Spoken audio needs the text to read aloud." };
      } else if (mode === "asset") {
        if (!str(b.audioAssetId)) return { ok: false, error: "Choose an uploaded audio file." };
      } else {
        return { ok: false, error: "Audio mode must be tts or asset." };
      }
      break;
    }
    case "practice": {
      const ids = strArray(b.exerciseIds);
      if (ids.length === 0) return { ok: false, error: "Add at least one question to the exercise set." };
      break;
    }
    case "assignment": {
      if (!str(b.title)) return { ok: false, error: "Assignment needs a title." };
      if (!str(b.instructions)) return { ok: false, error: "Assignment needs instructions." };
      const min = Number(b.minWords);
      const max = Number(b.maxWords);
      if (!Number.isFinite(min) || min < 1) return { ok: false, error: "Assignment minimum words must be at least 1." };
      if (!Number.isFinite(max) || max < min) return { ok: false, error: "Assignment maximum words must be ≥ minimum." };
      break;
    }
    case "homework": {
      const tasks = cleanList(b.tasks);
      if (tasks.length === 0) return { ok: false, error: "Homework needs at least one task." };
      break;
    }
    case "note":
    case "warning": {
      if (!str(b.text)) return { ok: false, error: "Note text is required." };
      break;
    }
    default:
      return { ok: false, error: `Unknown block type "${type}".` };
  }
  return { ok: true, value: block as CmsBlock };
}

/** Count words in a free-text submission (used by assignment validation). */
export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}
