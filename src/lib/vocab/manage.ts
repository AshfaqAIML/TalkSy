/**
 * PROMPT 39 §6 — managed vocabulary: validation, mapping, queries.
 *
 * Bulk import validates every row against the seven required fields and
 * reports per-row errors; nothing is imported implicitly. Approval is a
 * separate editorial step (draft entries are invisible to learners).
 * Approved entries map onto the code-library VocabEntry shape (ids are
 * prefixed "mx-" so they can never collide with the core library) and are
 * merged into the Word Explorer by the async API routes.
 */

import { db } from "@/lib/db";
import type { VocabEntry as LibraryWord } from "@/data/vocabulary/types";

export const VOCAB_ENTRY_STATUSES = ["draft", "approved"] as const;
export type VocabEntryStatus = (typeof VOCAB_ENTRY_STATUSES)[number];

export const VOCAB_DIFFICULTIES = ["easy", "medium", "hard"] as const;
export type VocabEntryDifficulty = (typeof VOCAB_DIFFICULTIES)[number];

export interface VocabRowInput {
  word?: unknown;
  partOfSpeech?: unknown;
  definition?: unknown;
  pronunciation?: unknown;
  example?: unknown;
  exampleTranslation?: unknown;
  translation?: unknown;
  difficulty?: unknown;
  category?: unknown;
  note?: unknown;
}

export interface ValidatedVocabRow {
  word: string;
  partOfSpeech: string;
  definition: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
  translation: string;
  difficulty: VocabEntryDifficulty;
  categoryId: string;
  note: string;
}

const PARTS_OF_SPEECH = new Set([
  "noun",
  "verb",
  "adjective",
  "adverb",
  "phrase",
  "preposition",
  "conjunction",
  "pronoun",
  "interjection",
  "expression",
  "noun phrase",
  "verb phrase",
]);

/** Row-level validation of the seven required fields (PROMPT 39 §6). */
export function validateVocabRow(row: VocabRowInput): { ok: true; value: ValidatedVocabRow } | { ok: false; errors: string[] } {
  const errors: string[] = [];
  const word = String(row.word ?? "").trim();
  const partOfSpeech = String(row.partOfSpeech ?? "").trim().toLowerCase();
  const definition = String(row.definition ?? "").trim();
  const pronunciation = String(row.pronunciation ?? "").trim();
  const example = String(row.example ?? "").trim();
  const exampleTranslation = String(row.exampleTranslation ?? "").trim();
  const translation = String(row.translation ?? "").trim();
  const difficultyRaw = String(row.difficulty ?? "medium").trim().toLowerCase();
  const categoryId = String(row.category ?? "everyday").trim().toLowerCase() || "everyday";
  const note = String(row.note ?? "").trim();

  if (word.length < 2 || word.length > 40) errors.push("word must be 2-40 characters");
  if (!PARTS_OF_SPEECH.has(partOfSpeech)) {
    errors.push(`partOfSpeech must be one of: ${[...PARTS_OF_SPEECH].join(", ")}`);
  }
  if (definition.length < 5 || definition.length > 240) {
    errors.push("definition must be 5-240 characters");
  }
  if (example.length < 8 || example.length > 240) {
    errors.push("example must be a phrase or sentence of 8-240 characters");
  }
  if (pronunciation.length > 80) errors.push("pronunciation must be under 80 characters");
  if (exampleTranslation.length > 240) errors.push("exampleTranslation must be under 240 characters");
  if (translation.length > 240) errors.push("translation must be under 240 characters");
  if (!VOCAB_DIFFICULTIES.includes(difficultyRaw as VocabEntryDifficulty)) {
    errors.push("difficulty must be easy, medium or hard");
  }

  if (errors.length > 0) return { ok: false, errors };
  return {
    ok: true,
    value: {
      word,
      partOfSpeech,
      definition,
      pronunciation,
      example,
      exampleTranslation,
      translation,
      difficulty: difficultyRaw as VocabEntryDifficulty,
      categoryId,
      note,
    },
  };
}

/** Map an approved managed row onto the library word shape (id "mx-…"). */
export function toLibraryWord(row: {
  id: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
  translation: string;
  difficulty?: string;
}): LibraryWord {
  const difficulty: LibraryWord["difficulty"] =
    row.difficulty === "easy" || row.difficulty === "hard" ? row.difficulty : "medium";
  return {
    id: `mx-${row.id}`,
    word: row.word,
    pronunciation: row.pronunciation
      ? `/${row.pronunciation.replace(/^\//, "").replace(/\/$/, "")}/`
      : "",
    partOfSpeech: row.partOfSpeech,
    meaning: row.definition,
    translation: row.translation,
    example: { english: row.example, translation: row.exampleTranslation },
    synonyms: [],
    antonyms: [],
    antonymNote: "Extension word — synonyms and antonyms are not curated yet.",
    wordFamily: [],
    collocations: [],
    // Managed words live in their own "extension" bucket.
    categoryId: "extension",
    subcategoryId: "",
    relatedWordIds: [],
    difficulty,
  };
}

/** Approved managed words matching a free-text query (Word Explorer merge). */
export async function searchManagedWords(q: string | undefined): Promise<LibraryWord[]> {
  const rows = await db.vocabEntry.findMany({ where: { status: "approved" } });
  const query = (q ?? "").trim().toLowerCase();
  const matched = query
    ? rows.filter((row) => {
        const haystack = [row.word, row.definition, row.translation, row.example]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : rows;
  return matched.map(toLibraryWord);
}

/** Look one approved managed word up by its "mx-<id>" explorer id. */
export async function getManagedWord(explorerId: string): Promise<LibraryWord | null> {
  if (!explorerId.startsWith("mx-")) return null;
  const row = await db.vocabEntry.findFirst({
    where: { id: explorerId.slice(3), status: "approved" },
  });
  return row ? toLibraryWord(row) : null;
}
