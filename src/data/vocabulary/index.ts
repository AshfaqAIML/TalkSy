/**
 * Vocabulary registry — the single source of truth for the Word Explorer
 * database. Content is code: words, categories and context passages live in
 * typed data files; this module exposes lookup, search, daily-word selection
 * and integrity validation (run by tests and the API).
 */

import type { Difficulty, VocabCategory, VocabContextItem, VocabEntry } from "./types";
import { vocabCategories, getVocabCategory } from "./categories";
import { everydayWords } from "./words/everyday";
import { homeWords } from "./words/home";
import { educationWords } from "./words/education";
import { travelWords } from "./words/travel";
import { foodWords } from "./words/food";
import { familyWords } from "./words/family";
import { emotionsWords } from "./words/emotions";
import { workplaceWords } from "./words/workplace";
import { technologyWords } from "./words/technology";
import { shoppingWords } from "./words/shopping";
import { healthWords } from "./words/health";
import { socialWords } from "./words/social";
import { vocabContextItems } from "./context";
import { hashSeed, seededRandom } from "@/lib/engine/normalize";

export * from "./types";
export { vocabCategories, getVocabCategory } from "./categories";
export { vocabContextItems } from "./context";

/** Library order: categories in the declared order, then data-file order. */
export const vocabWords: VocabEntry[] = [
  ...everydayWords,
  ...homeWords,
  ...educationWords,
  ...travelWords,
  ...foodWords,
  ...familyWords,
  ...emotionsWords,
  ...workplaceWords,
  ...technologyWords,
  ...shoppingWords,
  ...healthWords,
  ...socialWords,
];

const wordById = new Map(vocabWords.map((w) => [w.id, w]));

export function getVocabWord(id: string): VocabEntry | undefined {
  return wordById.get(id);
}

export function getVocabWordsByIds(ids: string[]): VocabEntry[] {
  return ids
    .map((id) => wordById.get(id))
    .filter((w): w is VocabEntry => w !== undefined);
}

/** Words that list `id` in their relatedWordIds (the incoming links). */
export function getRelatedInbound(id: string): VocabEntry[] {
  return vocabWords.filter((w) => w.relatedWordIds.includes(id));
}

// ---------------------------------------------------------------------------
// Categories & context
// ---------------------------------------------------------------------------

export interface CategoryCount {
  categoryId: string;
  total: number;
  bySubcategory: Record<string, number>;
}

export function getCategoryCounts(): Record<string, CategoryCount> {
  const counts: Record<string, CategoryCount> = {};
  for (const word of vocabWords) {
    const bucket =
      counts[word.categoryId] ??
      (counts[word.categoryId] = { categoryId: word.categoryId, total: 0, bySubcategory: {} });
    bucket.total += 1;
    bucket.bySubcategory[word.subcategoryId] =
      (bucket.bySubcategory[word.subcategoryId] ?? 0) + 1;
  }
  return counts;
}

export function getContextItem(id: string): VocabContextItem | undefined {
  return vocabContextItems.find((c) => c.id === id);
}

/** Context passages that teach a given word. */
export function getContextItemsForWord(wordId: string): VocabContextItem[] {
  return vocabContextItems.filter((c) => c.targetWordIds.includes(wordId));
}

export function getContextItemsForCategory(categoryId: string): VocabContextItem[] {
  return vocabContextItems.filter((c) => c.categoryId === categoryId);
}

// ---------------------------------------------------------------------------
// Daily word — deterministic: same word for everyone on the same date,
// different word each day, cycles through the whole library.
// ---------------------------------------------------------------------------

export function todayKey(now: Date = new Date()): string {
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function dateKeyToIndexBase(key: string): number {
  return hashSeed(`talksy-daily-word-${key}`);
}

export function getDailyWord(dateKey: string = todayKey()): VocabEntry {
  const base = dateKeyToIndexBase(dateKey);
  const rand = seededRandom(base);
  const index = Math.floor(rand() * vocabWords.length);
  return vocabWords[index];
}

/** The daily words of the last `days` days, newest first (today included). */
export function getRecentDailyWords(days = 7): { dateKey: string; word: VocabEntry }[] {
  const out: { dateKey: string; word: VocabEntry }[] = [];
  const now = Date.now();
  for (let i = 0; i < days; i++) {
    const date = new Date(now - i * 86_400_000);
    const key = todayKey(date);
    out.push({ dateKey: key, word: getDailyWord(key) });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Search — isomorphic, used by the API (authoritative) and the UI.
// ---------------------------------------------------------------------------

export type VocabSort = "relevance" | "alphabetical" | "difficulty" | "recent" | "due";

export interface VocabSearchFilters {
  q?: string;
  categoryId?: string;
  subcategoryId?: string;
  difficulty?: Difficulty;
  /** Restrict to an explicit set of word ids (word lists). */
  ids?: string[];
  sort?: VocabSort;
}

interface SearchHit {
  entry: VocabEntry;
  score: number;
}

function searchScore(entry: VocabEntry, q: string): number | null {
  const query = q.trim().toLowerCase();
  if (!query) return 1;
  const word = entry.word.toLowerCase();
  let score: number | null = null;

  if (word === query) score = 100;
  else if (word.startsWith(query)) score = 80;
  else if (word.includes(query)) score = 60;
  else if (entry.translation.toLowerCase().includes(query)) score = 40;
  else if (entry.meaning.toLowerCase().includes(query)) score = 35;
  else if (entry.synonyms.some((s) => s.toLowerCase().includes(query))) score = 25;
  else if (entry.antonyms.some((a) => a.toLowerCase().includes(query))) score = 22;
  else if (
    entry.collocations.some((c) => c.phrase.toLowerCase().includes(query)) ||
    entry.wordFamily.some((f) => f.term.toLowerCase().includes(query))
  ) {
    score = 20;
  } else if (getRelatedInbound(entry.id).length > 0) {
    // Also find the word via its relationships ("thank you" → "please").
    if (entry.relatedWordIds.some((r) => r.includes(query))) score = 10;
  }
  return score;
}

const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
  challenge: 3,
};

/** Search + filter + sort the word database. Pure and deterministic. */
export function searchVocabulary(filters: VocabSearchFilters): VocabEntry[] {
  const { q, categoryId, subcategoryId, difficulty, ids, sort = "relevance" } = filters;

  const idSet = ids ? new Set(ids) : null;
  const hits: SearchHit[] = [];
  for (const entry of vocabWords) {
    if (categoryId && entry.categoryId !== categoryId) continue;
    if (subcategoryId && entry.subcategoryId !== subcategoryId) continue;
    if (difficulty && entry.difficulty !== difficulty) continue;
    if (idSet && !idSet.has(entry.id)) continue;
    const score = searchScore(entry, q ?? "");
    if (score === null) continue;
    hits.push({ entry, score });
  }

  const byName = (a: VocabEntry, b: VocabEntry) => a.word.localeCompare(b.word);
  switch (sort) {
    case "alphabetical":
      return hits.sort((a, b) => byName(a.entry, b.entry)).map((h) => h.entry);
    case "difficulty":
      return hits
        .sort(
          (a, b) =>
            DIFFICULTY_ORDER[a.entry.difficulty] - DIFFICULTY_ORDER[b.entry.difficulty] ||
            byName(a.entry, b.entry),
        )
        .map((h) => h.entry);
    // "recent" and "due" are user-specific orders — the API re-sorts after
    // annotating with progress; here they fall back to relevance.
    case "relevance":
    case "recent":
    case "due":
    default:
      return hits
        .sort((a, b) => b.score - a.score || byName(a.entry, b.entry))
        .map((h) => h.entry);
  }
}

// ---------------------------------------------------------------------------
// Integrity validation — an empty array means the database is valid.
// ---------------------------------------------------------------------------

export interface VocabIssue {
  code: string;
  message: string;
}

export function validateVocabulary(): VocabIssue[] {
  const issues: VocabIssue[] = [];
  const add = (code: string, message: string) => issues.push({ code, message });

  // --- Words ---
  const seenIds = new Set<string>();
  const seenWords = new Map<string, string>(); // "word|pos" → id
  for (const word of vocabWords) {
    if (seenIds.has(word.id)) add("duplicate-word-id", `Word id "${word.id}" is used more than once.`);
    seenIds.add(word.id);

    const key = `${word.word.toLowerCase()}|${word.partOfSpeech}`;
    if (seenWords.has(key) && seenWords.get(key) !== word.id) {
      add("duplicate-word", `"${word.word}" (${word.partOfSpeech}) exists twice (${seenWords.get(key)} and ${word.id}).`);
    }
    seenWords.set(key, word.id);

    if (!word.pronunciation.startsWith("/") || !word.pronunciation.endsWith("/") || word.pronunciation.length < 3) {
      add("bad-ipa", `Word "${word.id}" has invalid IPA "${word.pronunciation}".`);
    }
    if (!word.meaning.trim()) add("bad-meaning", `Word "${word.id}" has no simple English meaning.`);
    if (!word.translation.trim()) add("bad-translation", `Word "${word.id}" has no support-language meaning.`);
    if (!word.example.english.trim() || !word.example.translation.trim()) {
      add("bad-example", `Word "${word.id}" is missing an example or its translation.`);
    }
    if (word.wordFamily.length === 0) add("bad-family", `Word "${word.id}" has no word family members.`);
    if (word.collocations.length < 2) add("bad-collocations", `Word "${word.id}" needs at least 2 collocations.`);
    if (word.antonyms.length === 0 && !word.antonymNote) {
      add("bad-antonyms", `Word "${word.id}" has no antonyms and no antonymNote.`);
    }
    for (const member of word.wordFamily) {
      if (!member.translation.trim()) add("bad-family", `Word "${word.id}": family member "${member.term}" has no translation.`);
    }
    for (const collocation of word.collocations) {
      if (!collocation.translation.trim()) add("bad-collocations", `Word "${word.id}": collocation "${collocation.phrase}" has no translation.`);
    }

    // Category wiring.
    const category = getVocabCategory(word.categoryId);
    if (!category) {
      add("bad-category", `Word "${word.id}" references unknown category "${word.categoryId}".`);
    } else if (!category.subcategories.some((s) => s.id === word.subcategoryId)) {
      add("bad-subcategory", `Word "${word.id}" references subcategory "${word.subcategoryId}" not in category "${word.categoryId}".`);
    }

    // Related words.
    for (const relatedId of word.relatedWordIds) {
      if (relatedId === word.id) add("self-related", `Word "${word.id}" lists itself as related.`);
      else if (!wordById.has(relatedId)) add("missing-related", `Word "${word.id}" references unknown related word "${relatedId}".`);
    }
  }

  // --- Categories ---
  const counts = getCategoryCounts();
  for (const category of vocabCategories as VocabCategory[]) {
    if ((counts[category.id]?.total ?? 0) === 0) {
      add("empty-category", `Category "${category.id}" has no words.`);
    }
    for (const sub of category.subcategories) {
      if ((counts[category.id]?.bySubcategory[sub.id] ?? 0) === 0) {
        add("empty-subcategory", `Subcategory "${category.id}/${sub.id}" has no words.`);
      }
    }
  }

  // --- Context passages ---
  const contextIds = new Set<string>();
  for (const item of vocabContextItems) {
    if (contextIds.has(item.id)) add("duplicate-context-id", `Context item "${item.id}" is used more than once.`);
    contextIds.add(item.id);

    if (!getVocabCategory(item.categoryId)) {
      add("bad-context", `Context item "${item.id}" references unknown category "${item.categoryId}".`);
    }
    if (item.kind === "dialogue") {
      if (!item.lines || item.lines.length < 4) add("bad-context", `Context dialogue "${item.id}" needs at least 4 lines.`);
      for (const line of item.lines ?? []) {
        if (!line.translation.trim()) add("bad-context", `Context "${item.id}": a line is missing its translation.`);
      }
    } else {
      if (!item.text || item.text.trim().length < 40) add("bad-context", `Context paragraph "${item.id}" is too short.`);
      if (!item.translation || !item.translation.trim()) add("bad-context", `Context paragraph "${item.id}" has no translation.`);
    }
    if (item.targetWordIds.length < 3) add("bad-context", `Context item "${item.id}" teaches fewer than 3 words.`);
    for (const targetId of item.targetWordIds) {
      if (!wordById.has(targetId)) add("bad-context", `Context item "${item.id}" references unknown word "${targetId}".`);
    }
    // The text must actually contain each target word (or a form of it).
    for (const targetId of item.targetWordIds) {
      const target = wordById.get(targetId);
      if (!target) continue;
      const haystack = (item.kind === "dialogue"
        ? (item.lines ?? []).map((l) => l.text).join(" ")
        : item.text ?? ""
      ).toLowerCase();
      if (!haystack.includes(target.word.toLowerCase())) {
        add("bad-context", `Context item "${item.id}" teaches "${target.word}" but the text never uses it.`);
      }
    }
  }

  return issues;
}

/** Coverage helpers for tests and docs. */
export function getVocabularyStats(): {
  words: number;
  categories: number;
  subcategories: number;
  contextItems: number;
  byDifficulty: Record<Difficulty, number>;
} {
  const byDifficulty: Record<Difficulty, number> = { easy: 0, medium: 0, hard: 0, challenge: 0 };
  for (const word of vocabWords) byDifficulty[word.difficulty] += 1;
  return {
    words: vocabWords.length,
    categories: vocabCategories.length,
    subcategories: vocabCategories.reduce((sum, c) => sum + c.subcategories.length, 0),
    contextItems: vocabContextItems.length,
    byDifficulty,
  };
}
