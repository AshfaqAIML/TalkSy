/**
 * Sentence practice checker.
 *
 * Learners write their own sentence with a target word. The checker verifies
 * real usage (the word or an inflected form must appear), blocks copied
 * examples, and coaches on capitals and punctuation. Valid sentences count as
 * a successful review in the spaced-repetition scheduler.
 */

import type { VocabEntry } from "@/data/vocabulary/types";
import { normalizeText, normalizeWord } from "@/lib/engine/normalize";

export interface SentenceIssue {
  code: string;
  severity: "error" | "warning";
  message: string;
  hint?: string;
}

export interface SentenceCheckResult {
  valid: boolean;
  issues: SentenceIssue[];
}

// ---------------------------------------------------------------------------
// Inflected forms — accepts "borrow", "borrows", "borrowed", "borrowing"…
// ---------------------------------------------------------------------------

/** Irregular past/participle forms of verbs in the starter library. */
const IRREGULAR_FORMS: Record<string, string[]> = {
  buy: ["bought"],
  sell: ["sold"],
  pay: ["paid"],
  spend: ["spent"],
  leave: ["left"],
  teach: ["taught"],
  sleep: ["slept"],
  wake: ["woke", "woken"],
  hurt: ["hurt"],
  feel: ["felt"],
  find: ["found"],
  meet: ["met"],
  forget: ["forgot", "forgotten"],
  send: ["sent"],
  build: ["built"],
  keep: ["kept"],
};

function isVowel(char: string): boolean {
  // 'y' acts as a vowel at the end of a word (buy, study) — no doubling.
  return "aeiouy".includes(char);
}

/** Every acceptable surface form of a word (lowercase). */
export function inflectedForms(word: string): string[] {
  const w = word.toLowerCase().trim();
  const forms = new Set<string>([w]);

  const parts = w.split(/\s+/);
  const head = parts[0];
  const tail = parts.slice(1).join(" ");

  const addForm = (form: string) => {
    forms.add(tail ? `${form} ${tail}` : form);
  };

  // Irregular verbs.
  for (const irregular of IRREGULAR_FORMS[head] ?? []) addForm(irregular);

  // Third person / plural -s / -es.
  addForm(`${head}s`);
  if (/(s|x|z|ch|sh)$/.test(head)) addForm(`${head}es`);
  if (/[^aeiou]y$/.test(head)) {
    addForm(`${head.slice(0, -1)}ies`);
    addForm(`${head.slice(0, -1)}ied`);
    addForm(`${head}ing`);
  } else {
    // Past -ed.
    if (/e$/.test(head)) {
      addForm(`${head}d`);
      addForm(`${head.slice(0, -1)}ing`);
    } else {
      addForm(`${head}ed`);
      addForm(`${head}ing`);
      // Consonant doubling (stop → stopped / stopping).
      if (
        head.length >= 3 &&
        !isVowel(head[head.length - 1]) &&
        isVowel(head[head.length - 2]) &&
        !isVowel(head[head.length - 3])
      ) {
        addForm(`${head}${head[head.length - 1]}ed`);
        addForm(`${head}${head[head.length - 1]}ing`);
      }
    }
  }
  return [...forms];
}

/** A clean, always-correct subset of forms for hints and UI display. */
export function displayForms(word: string): string[] {
  const w = word.toLowerCase().trim();
  const head = w.split(/\s+/)[0];
  const tail = w.split(/\s+/).slice(1).join(" ");
  const join = (form: string) => (tail ? `${form} ${tail}` : form);
  const third = /(s|x|z|ch|sh)$/.test(head)
    ? `${head}es`
    : /[^aeiou]y$/.test(head)
      ? `${head.slice(0, -1)}ies`
      : `${head}s`;
  const ing = /e$/.test(head) && head.length > 2 ? `${head.slice(0, -1)}ing` : `${head}ing`;
  const past =
    (IRREGULAR_FORMS[head] ?? [])[0] ??
    (/e$/.test(head)
      ? `${head}d`
      : /[^aeiou]y$/.test(head)
        ? `${head.slice(0, -1)}ied`
        : `${head}ed`);
  const forms = [w, join(third), join(past), join(ing), ...(IRREGULAR_FORMS[head] ?? []).map(join)];
  return [...new Set(forms)];
}

function sentenceContainsForm(sentence: string, forms: string[]): string | null {
  const haystack = ` ${normalizeText(sentence)} `;
  for (const form of forms) {
    const needle = form.toLowerCase();
    const re = new RegExp(`(^|[^\\p{L}])${escapeRegExp(needle)}([^\\p{L}]|$)`, "u");
    if (re.test(haystack)) return form;
  }
  return null;
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ---------------------------------------------------------------------------
// The checker
// ---------------------------------------------------------------------------

export function checkSentence(entry: VocabEntry, sentence: string): SentenceCheckResult {
  const issues: SentenceIssue[] = [];
  const trimmed = sentence.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);

  // 1. Too short.
  if (words.length < 3) {
    issues.push({
      code: "too-short",
      severity: "error",
      message: "Your sentence needs at least 3 words.",
      hint: "Try: subject + verb + more information.",
    });
  }

  // 2. The target word (or an inflected form) must appear.
  const forms = inflectedForms(entry.word);
  const used = sentenceContainsForm(trimmed, forms);
  if (!used) {
    issues.push({
      code: "missing-word",
      severity: "error",
      message: `Your sentence doesn't use “${entry.word}”.`,
      hint: `Write it with the word itself or a form like: ${displayForms(entry.word).join(", ")}.`,
    });
  }

  // 3. Don't just copy the example.
  const normalizedSentence = normalizeText(trimmed);
  const exampleSentence = normalizeText(entry.example.english);
  if (normalizedSentence && normalizedSentence === exampleSentence) {
    issues.push({
      code: "copied-example",
      severity: "error",
      message: "That's the example sentence — write your OWN sentence.",
      hint: `Keep the word “${entry.word}” but change the people, the place or the action.`,
    });
  }

  // 4. Capital letter at the start.
  if (trimmed && !/^[A-ZÀ-Þ]/.test(trimmed) && !/^[“"'(]/.test(trimmed)) {
    issues.push({
      code: "capitalize",
      severity: "warning",
      message: "Sentences start with a capital letter.",
      hint: `Start with a capital: “${trimmed.charAt(0).toUpperCase()}${trimmed.slice(1, 24)}…”`,
    });
  }

  // 5. Terminal punctuation.
  if (trimmed && !/[.!?"”)]$/.test(trimmed)) {
    issues.push({
      code: "punctuation",
      severity: "warning",
      message: "End your sentence with a period (.), a question mark (?) or an exclamation mark (!).",
    });
  }

  const valid = issues.every((issue) => issue.severity !== "error");
  return { valid, issues };
}

/** Normalize for storage/comparison. */
export function normalizeSentence(sentence: string): string {
  return sentence.replace(/\s+/g, " ").trim().slice(0, 400);
}

export { normalizeWord };
