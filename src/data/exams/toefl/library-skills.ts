/**
 * TOEFL Reading and Listening Practice Library (PROMPT 49) — the shared
 * seven-dimension skill taxonomy the adaptive engine tracks across BOTH
 * banks.
 *
 * Every authored question in the reading bank and the listening bank
 * declares 1–2 skills drawn from exactly this list (validator-enforced), so
 * the per-dimension accuracy the learner sees is exact at item level —
 * nothing is inferred from question-type heuristics.
 *
 * The seven dimensions are the ones the library is required to track:
 * Vocabulary, Comprehension, Inference, Main ideas, Details,
 * Speaker intention and Academic listening.
 */

export const LIBRARY_SKILLS = [
  "vocabulary",
  "comprehension",
  "inference",
  "main-ideas",
  "details",
  "speaker-intention",
  "academic-listening",
] as const;

export type LibrarySkill = (typeof LIBRARY_SKILLS)[number];

export const LIBRARY_SKILL_LABELS: Record<LibrarySkill, string> = {
  vocabulary: "Vocabulary",
  comprehension: "Comprehension",
  inference: "Inference",
  "main-ideas": "Main ideas",
  details: "Details",
  "speaker-intention": "Speaker intention",
  "academic-listening": "Academic listening",
};

export const LIBRARY_SKILL_DESCRIPTIONS: Record<LibrarySkill, string> = {
  vocabulary:
    "Words in context — restoring masked words, reading a term as it is used, and hearing the word that carries the answer.",
  comprehension:
    "Understanding everyday texts and recordings — notices, messages, emails and announcements — for gist, purpose and practical meaning.",
  inference:
    "What the passage or speaker implies but never states outright: one careful step beyond the words.",
  "main-ideas":
    "Thesis, topic and primary purpose — the one sentence that everything else in the text or talk serves.",
  details:
    "Supporting facts: numbers, names, conditions, dates, prices and the small print that carries marks.",
  "speaker-intention":
    "Why a speaker says something — purpose, stance, register and attitude, including what an appropriate reply reveals.",
  "academic-listening":
    "Following academic talks: structure signposts, terminology, worked examples, emphasis and the concluding claim.",
};

export function isLibrarySkill(value: string): value is LibrarySkill {
  return (LIBRARY_SKILLS as readonly string[]).includes(value);
}

/** The primary tracked dimension of a question = its first declared skill. */
export function primarySkill(skills: LibrarySkill[]): LibrarySkill {
  return skills[0] ?? "comprehension";
}
