/**
 * TOEFL Writing Practice Library — the complete bank index (PROMPT 50).
 *
 * Two hundred original exercises across the three current-format TOEFL iBT
 * Writing task types:
 *
 *   Build a Sentence              100  (20 per focus: word order, grammar,
 *                                       clause structure, completeness,
 *                                       punctuation; difficulty 1–5)
 *   Write an Email                 60  (10 per purpose across six purposes,
 *                                       23 distinct recipients, d1–d5)
 *   Write for an Academic Discussion 40  (19 distinct disciplines, d1–d5)
 *
 * Every exercise passes the integrity validator; the bank as a whole passes
 * the distribution and originality checks in validate.ts.
 */

import type { ToeflWritingExercise } from "./types";
import { sentenceWordOrderExercises } from "./sent-word-order";
import { sentenceWordOrder2Exercises } from "./sent-word-order-2";
import { sentenceGrammar1Exercises } from "./sent-grammar-1";
import { sentenceGrammar2Exercises } from "./sent-grammar-2";
import { sentenceClausesExercises } from "./sent-clauses";
import { sentenceCompletenessExercises } from "./sent-completeness";
import { sentencePunctuationExercises } from "./sent-punctuation";
import { email1Tasks } from "./email-1";
import { email2Tasks } from "./email-2";
import { email3Tasks } from "./email-3";
import { discussion1Tasks } from "./discussion-1";
import { discussion2Tasks } from "./discussion-2";

export * from "./types";
export * from "./validate";

/** The complete TOEFL writing practice library, in slug order. */
export const TOEFL_WRITING_BANK: ToeflWritingExercise[] = [
  ...sentenceWordOrderExercises,
  ...sentenceWordOrder2Exercises,
  ...sentenceGrammar1Exercises,
  ...sentenceGrammar2Exercises,
  ...sentenceClausesExercises,
  ...sentenceCompletenessExercises,
  ...sentencePunctuationExercises,
  ...email1Tasks,
  ...email2Tasks,
  ...email3Tasks,
  ...discussion1Tasks,
  ...discussion2Tasks,
];

export function writingExerciseBySlug(slug: string): ToeflWritingExercise | undefined {
  return TOEFL_WRITING_BANK.find((ex) => ex.slug === slug);
}

/** Counts per task type × difficulty tier, for the library dashboard. */
export function writingBankStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const ex of TOEFL_WRITING_BANK) {
    const focus = ex.taskType === "build-sentence" ? ex.focus : ex.taskType === "write-email" ? ex.purpose : ex.discipline;
    const key = `${ex.taskType}-d${ex.difficulty}`;
    stats[key] = (stats[key] ?? 0) + 1;
    stats[ex.taskType] = (stats[ex.taskType] ?? 0) + 1;
    if (ex.taskType === "build-sentence") stats[`focus-${ex.focus}`] = (stats[`focus-${ex.focus}`] ?? 0) + 1;
    if (ex.taskType === "write-email") stats[`purpose-${ex.purpose}`] = (stats[`purpose-${ex.purpose}`] ?? 0) + 1;
    void focus;
  }
  stats.total = TOEFL_WRITING_BANK.length;
  return stats;
}

/** Distinct label sets, for the variety claim. */
export function writingBankVariety(): { focuses: string[]; purposes: string[]; recipients: string[]; disciplines: string[] } {
  const focuses = new Set<string>();
  const purposes = new Set<string>();
  const recipients = new Set<string>();
  const disciplines = new Set<string>();
  for (const ex of TOEFL_WRITING_BANK) {
    if (ex.taskType === "build-sentence") focuses.add(ex.focus);
    else if (ex.taskType === "write-email") { purposes.add(ex.purpose); recipients.add(ex.recipient); }
    else disciplines.add(ex.discipline);
  }
  return {
    focuses: [...focuses].sort(),
    purposes: [...purposes].sort(),
    recipients: [...recipients].sort(),
    disciplines: [...disciplines].sort(),
  };
}
