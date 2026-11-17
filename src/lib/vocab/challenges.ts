/**
 * Vocabulary challenge generator & grader.
 *
 * Six challenge kinds are generated from the word database — nothing is
 * hand-authored per question. Generation is deterministic: the same seed +
 * kind + category always produces the same run, so the server can regenerate
 * the answer key at submit time and never send grading data to the client.
 */

import type { ChallengeKind, VocabEntry } from "@/data/vocabulary/types";
import { CHALLENGE_KINDS } from "@/data/vocabulary/types";
import { normalizeText, normalizeWord, seededRandom, hashSeed } from "@/lib/engine/normalize";
import { wordsCloseEnough } from "@/lib/engine/normalize";

export function isChallengeKind(kind: string): kind is ChallengeKind {
  return (CHALLENGE_KINDS as string[]).includes(kind);
}

// ---------------------------------------------------------------------------
// Client-safe items (no answers included)
// ---------------------------------------------------------------------------

export type ChallengeItemKind =
  | "meaning"
  | "spelling"
  | "arrangement"
  | "contextual-usage"
  | "matching";

interface ItemBase {
  id: string;
  type: ChallengeItemKind;
  prompt: string;
}

export interface MeaningItem extends ItemBase {
  type: "meaning";
  wordId: string;
  word: string;
  options: { id: string; text: string }[];
}

export interface SpellingItem extends ItemBase {
  type: "spelling";
  wordId: string;
  /** Text spoken by the TTS control (the word inside a carrier sentence). */
  audioText: string;
  hintMeaning: string;
  hintTranslation: string;
}

export interface ArrangementItem extends ItemBase {
  type: "arrangement";
  wordId: string;
  tokens: string[];
  hintTranslation: string;
}

export interface ContextualUsageItem extends ItemBase {
  type: "contextual-usage";
  wordId: string;
  sentence: string; // contains "___"
  options: { id: string; text: string }[];
}

export interface MatchingItem extends ItemBase {
  type: "matching";
  wordIds: string[];
  left: { id: string; text: string }[];
  right: { id: string; text: string }[];
}

export type ChallengeItem =
  | MeaningItem
  | SpellingItem
  | ArrangementItem
  | ContextualUsageItem
  | MatchingItem;

// ---------------------------------------------------------------------------
// Answers (validated server-side)
// ---------------------------------------------------------------------------

export type ChallengeAnswer =
  | { type: "meaning" | "contextual-usage"; optionId: string }
  | { type: "spelling"; text: string }
  | { type: "arrangement"; tokens: string[] }
  | { type: "matching"; pairs: { leftId: string; rightId: string }[] };

// ---------------------------------------------------------------------------
// Generation
// ---------------------------------------------------------------------------

export interface GenerateOptions {
  kind: ChallengeKind;
  seed: number;
  categoryId?: string;
  /** Items per run (matching counts as one item with 4 pairs). Default 10. */
  size?: number;
}

export interface GeneratedChallenge {
  kind: ChallengeKind;
  categoryId?: string;
  items: ChallengeItem[];
}

const OPTION_COUNT = 4;

function sampleWords(
  pool: VocabEntry[],
  count: number,
  rand: () => number,
): VocabEntry[] {
  const copy = [...pool];
  const out: VocabEntry[] = [];
  while (out.length < count && copy.length > 0) {
    out.push(copy.splice(Math.floor(rand() * copy.length), 1)[0]);
  }
  return out;
}

/** Deterministic scramble that never equals the original order. */
function scrambleTokens(tokens: string[], seed: string): string[] {
  let out = tokens;
  let guard = 0;
  do {
    // Re-seed each attempt so the do/while can always make progress.
    out = shuffleSeeded(tokens, `${seed}#${guard}`);
    guard += 1;
  } while (out.join(" ") === tokens.join(" ") && guard < 10 && tokens.length > 1);
  return out;
}

function shuffleSeeded<T>(items: readonly T[], seed: string): T[] {
  const rand = seededRandom(hashSeed(seed));
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function meaningItem(
  entry: VocabEntry,
  distractors: VocabEntry[],
  id: string,
): MeaningItem {
  // Options are shuffled deterministically — the correct answer is NOT a
  // fixed position, and grading re-derives it from the word data.
  const options = shuffleSeeded(
    [
      { id: "a", text: entry.meaning },
      ...distractors.slice(0, OPTION_COUNT - 1).map((d, i) => ({
        id: ["b", "c", "d"][i] ?? "d",
        text: d.meaning,
      })),
    ],
    `${id}-opts`,
  );
  return {
    id,
    type: "meaning",
    wordId: entry.id,
    word: entry.word,
    prompt: `What does “${entry.word}” mean?`,
    options,
  };
}

function contextualItem(
  entry: VocabEntry,
  distractors: VocabEntry[],
  id: string,
): ContextualUsageItem | null {
  // Blank the first occurrence of the word (or a simple inflection) in the example.
  const lower = entry.example.english.toLowerCase();
  const word = entry.word.toLowerCase();
  const idx = lower.indexOf(word);
  if (idx === -1) return null;
  const blanked =
    entry.example.english.slice(0, idx) + "___" + entry.example.english.slice(idx + word.length);
  const options = shuffleSeeded(
    [
      { id: "a", text: entry.word },
      ...distractors.slice(0, OPTION_COUNT - 1).map((d, i) => ({
        id: ["b", "c", "d"][i] ?? "d",
        text: d.word,
      })),
    ],
    `${id}-opts`,
  );
  return {
    id,
    type: "contextual-usage",
    wordId: entry.id,
    sentence: blanked,
    prompt: "Choose the word that completes the sentence.",
    options,
  };
}

function spellingItem(entry: VocabEntry, id: string, rand: () => number): SpellingItem {
  // Half the time listen to the bare word, half to a carrier sentence.
  const bare = rand() < 0.5;
  return {
    id,
    type: "spelling",
    wordId: entry.id,
    audioText: bare ? entry.word : entry.example.english,
    prompt: bare
      ? "Listen and type the word you hear."
      : "Listen to the sentence and type the missing word.",
    hintMeaning: entry.meaning,
    hintTranslation: entry.translation,
  };
}

function arrangementItem(entry: VocabEntry, id: string): ArrangementItem {
  const tokens = entry.example.english.split(/\s+/).filter(Boolean);
  return {
    id,
    type: "arrangement",
    wordId: entry.id,
    prompt: "Put the words in the right order.",
    tokens: scrambleTokens(tokens, `${id}-arr`),
    hintTranslation: entry.example.translation,
  };
}

function matchingItem(words: VocabEntry[], id: string): MatchingItem {
  return {
    id,
    type: "matching",
    prompt: "Match each word with its meaning.",
    wordIds: words.map((w) => w.id),
    left: shuffleSeeded(
      words.map((w) => ({ id: `w-${w.id}`, text: w.word })),
      `${id}-left`,
    ),
    right: shuffleSeeded(
      words.map((w) => ({ id: `m-${w.id}`, text: w.meaning })),
      `${id}-right`,
    ),
  };
}

/** Pick `count` distractors, preferring the same category, never ambiguous. */
function pickDistractors(
  target: VocabEntry,
  pool: VocabEntry[],
  count: number,
  rand: () => number,
  sameCategory: boolean,
): VocabEntry[] {
  const eligible = pool.filter(
    (w) =>
      w.id !== target.id &&
      w.meaning !== target.meaning &&
      w.word.toLowerCase() !== target.word.toLowerCase(),
  );
  const sameCat = eligible.filter((w) => w.categoryId === target.categoryId);
  const others = eligible.filter((w) => w.categoryId !== target.categoryId);
  const out: VocabEntry[] = [];
  if (sameCategory) {
    for (const w of sampleWords(sameCat, count, rand)) out.push(w);
  }
  // Top up from other categories when the category is small.
  for (const w of sampleWords(others, count - out.length, rand)) out.push(w);
  return out.slice(0, count);
}

/**
 * Generate a challenge. Pure & deterministic: same (kind, seed, categoryId,
 * size, database) → same items. Grading data is derived on the server by
 * regenerating with the same inputs.
 */
export function generateChallenge(
  pool: VocabEntry[],
  options: GenerateOptions,
): GeneratedChallenge {
  const { kind, seed, categoryId, size = 10 } = options;
  const rand = seededRandom(seed >>> 0);
  const categoryPool = categoryId ? pool.filter((w) => w.categoryId === categoryId) : pool;
  const source = categoryPool.length >= OPTION_COUNT ? categoryPool : pool;
  const items: ChallengeItem[] = [];

  if (kind === "matching") {
    // Group the run into matching items of 4 words each.
    const groupSize = 4;
    const groups = Math.max(1, Math.round(size / groupSize));
    const words = sampleWords(source, groups * groupSize, rand);
    for (let g = 0; g < groups; g++) {
      const group = words.slice(g * groupSize, (g + 1) * groupSize);
      if (group.length === groupSize) {
        items.push(matchingItem(group, `item-${g + 1}`));
      }
    }
    return { kind, categoryId, items };
  }

  if (kind === "category-quiz") {
    const cycle: ChallengeItemKind[] = ["meaning", "contextual-usage", "spelling", "arrangement"];
    const words = sampleWords(source, size, rand);
    words.forEach((entry, i) => {
      const id = `item-${i + 1}`;
      const type = cycle[i % cycle.length];
      if (type === "meaning") {
        items.push(meaningItem(entry, pickDistractors(entry, pool, 3, rand, true), id));
      } else if (type === "contextual-usage") {
        // Distractors from OTHER categories so only the target fits the blank.
        const item = contextualItem(entry, pickDistractors(entry, pool, 3, rand, false), id);
        if (item) items.push(item);
        else {
          items.push(meaningItem(entry, pickDistractors(entry, pool, 3, rand, true), id));
        }
      } else if (type === "spelling") {
        items.push(spellingItem(entry, id, rand));
      } else {
        items.push(arrangementItem(entry, id));
      }
    });
    return { kind, categoryId, items };
  }

  const words = sampleWords(source, size, rand);
  words.forEach((entry, i) => {
    const id = `item-${i + 1}`;
    switch (kind) {
      case "meaning":
        items.push(meaningItem(entry, pickDistractors(entry, pool, 3, rand, true), id));
        break;
      case "spelling":
        items.push(spellingItem(entry, id, rand));
        break;
      case "arrangement":
        items.push(arrangementItem(entry, id));
        break;
      case "contextual-usage": {
        const item = contextualItem(entry, pickDistractors(entry, pool, 3, rand, false), id);
        if (item) items.push(item);
        else items.push(meaningItem(entry, pickDistractors(entry, pool, 3, rand, true), id));
        break;
      }
    }
  });
  return { kind, categoryId, items };
}

// ---------------------------------------------------------------------------
// Grading — server-side, authoritative
// ---------------------------------------------------------------------------

export interface ItemResult {
  itemId: string;
  type: ChallengeItemKind;
  correct: boolean;
  /** The words this item tested and their per-word outcome (feeds the SRS). */
  wordResults: { wordId: string; correct: boolean }[];
  /** Human-readable correct answer for the review screen. */
  correctAnswer: string;
  explanation: string;
  submitted: string;
}

export interface ChallengeGrade {
  total: number;
  correct: number;
  score: number; // 0–1
  results: ItemResult[];
}

function normalizeTokens(tokens: string[]): string[] {
  return tokens.map((t) => normalizeWord(t)).filter(Boolean);
}

export function gradeChallenge(
  challenge: GeneratedChallenge,
  answers: Record<string, unknown>,
  words: Map<string, VocabEntry>,
): ChallengeGrade {
  const results: ItemResult[] = [];

  for (const item of challenge.items) {
    const answer = answers[item.id];

    if (item.type === "meaning" || item.type === "contextual-usage") {
      const entry = words.get(item.wordId);
      // The correct option is derived from the word data (options were
      // shuffled at generation; both sides regenerate identically).
      const correctText = item.type === "meaning" ? (entry?.meaning ?? "") : (entry?.word ?? "");
      const correctOption = item.options.find((o) => o.text === correctText);
      const correctOptionId = correctOption?.id ?? null;
      const picked = typeof answer === "object" && answer !== null && "optionId" in answer
        ? String((answer as { optionId: unknown }).optionId)
        : null;
      const correct = picked !== null && picked === correctOptionId;
      const pickedText = item.options.find((o) => o.id === picked)?.text ?? "—";
      results.push({
        itemId: item.id,
        type: item.type,
        correct,
        wordResults: [{ wordId: item.wordId, correct }],
        correctAnswer: correctText,
        explanation: item.type === "meaning"
          ? `“${item.word}” means: ${correctText}.`
          : `The sentence needs “${entry?.word ?? item.wordId}” — ${entry?.meaning ?? ""}`,
        submitted: pickedText,
      });
      continue;
    }

    if (item.type === "spelling") {
      const entry = words.get(item.wordId);
      const target = entry?.word ?? "";
      const typed = typeof answer === "object" && answer !== null && "text" in answer
        ? String((answer as { text: unknown }).text)
        : "";
      const correct = normalizeWord(typed) === normalizeWord(target);
      results.push({
        itemId: item.id,
        type: item.type,
        correct,
        wordResults: [{ wordId: item.wordId, correct }],
        correctAnswer: target,
        explanation: correct
          ? `Correct — “${target}” ${entry?.translation ? `(${entry.translation})` : ""}`.trim()
          : wordsCloseEnough(typed, target)
            ? `So close! Check the spelling letter by letter: ${target.split("").join("·")}`
            : `The word was “${target}” — ${entry?.meaning ?? ""}`,
        submitted: typed || "—",
      });
      continue;
    }

    if (item.type === "arrangement") {
      const entry = words.get(item.wordId);
      const target = entry?.example.english ?? "";
      const targetTokens = normalizeTokens(target.split(/\s+/));
      const submittedTokens =
        typeof answer === "object" && answer !== null && "tokens" in answer && Array.isArray((answer as { tokens: unknown }).tokens)
          ? normalizeTokens((answer as { tokens: string[] }).tokens)
          : [];
      const correct =
        submittedTokens.length === targetTokens.length &&
        submittedTokens.every((t, i) => t === targetTokens[i]);
      results.push({
        itemId: item.id,
        type: item.type,
        correct,
        wordResults: [{ wordId: item.wordId, correct }],
        correctAnswer: target,
        explanation: correct
          ? `Perfect — that is exactly how the sentence goes.`
          : `The sentence is: “${target}” (${entry?.example.translation ?? ""})`,
        submitted: submittedTokens.join(" ") || "—",
      });
      continue;
    }

    if (item.type === "matching") {
      const pairs =
        typeof answer === "object" && answer !== null && "pairs" in answer && Array.isArray((answer as { pairs: unknown }).pairs)
          ? (answer as { pairs: { leftId: string; rightId: string }[] }).pairs
          : [];
      const wordResults = item.wordIds.map((wordId) => {
        const left = pairs.find((p) => p.leftId === `w-${wordId}`);
        const correct = left?.rightId === `m-${wordId}`;
        return { wordId, correct };
      });
      const allCorrect = wordResults.every((r) => r.correct);
      const correctPairs = wordResults.filter((r) => r.correct).length;
      results.push({
        itemId: item.id,
        type: item.type,
        correct: allCorrect,
        wordResults,
        correctAnswer: item.wordIds
          .map((wordId) => {
            const w = words.get(wordId);
            return w ? `${w.word} → ${w.meaning}` : wordId;
          })
          .join(" · "),
        explanation: allCorrect
          ? "All pairs matched!"
          : `${correctPairs} of ${item.wordIds.length} pairs correct.`,
        submitted: pairs.map((p) => p.rightId).join(", ") || "—",
      });
    }
  }

  const correct = results.filter((r) => r.correct).length;
  return {
    total: results.length,
    correct,
    score: results.length === 0 ? 0 : correct / results.length,
    results,
  };
}
