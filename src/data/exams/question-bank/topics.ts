/**
 * TALK SY Original Examination Question Bank — the shared topic taxonomy
 * (PROMPT 54).
 *
 * The twelve mandated topic domains every examination item is organised
 * under, across both examinations and all sections. Content types in the
 * individual banks carry an optional `topic` field typed against this
 * union; the unified question-bank adapters resolve every item to exactly
 * one domain (explicit field first, curated fallback map second) so the
 * searchable index is complete by construction.
 */

export type BankTopicDomain =
  | "science"
  | "technology"
  | "education"
  | "environment"
  | "culture"
  | "society"
  | "history"
  | "health"
  | "economics"
  | "everyday"
  | "university"
  | "workplace";

export const BANK_TOPIC_DOMAINS: BankTopicDomain[] = [
  "science",
  "technology",
  "education",
  "environment",
  "culture",
  "society",
  "history",
  "health",
  "economics",
  "everyday",
  "university",
  "workplace",
];

export const BANK_TOPIC_LABELS: Record<BankTopicDomain, string> = {
  science: "Science",
  technology: "Technology",
  education: "Education",
  environment: "Environment",
  culture: "Culture",
  society: "Society",
  history: "History",
  health: "Health",
  economics: "Economics",
  everyday: "Everyday communication",
  university: "University life",
  workplace: "Workplace situations",
};
