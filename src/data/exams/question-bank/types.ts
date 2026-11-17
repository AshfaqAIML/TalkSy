/**
 * TALK SY Original Examination Question Bank — the unified content model
 * (PROMPT 54).
 *
 * One searchable record for every practice item across both examinations,
 * exposing exactly the fifteen mandated fields:
 *
 *   Unique ID · Examination · Examination version · Section · Question
 *   type · Difficulty · Topic · Instructions · Question content · Correct
 *   answer where applicable · Detailed explanation · Skill assessed ·
 *   Estimated completion time · Review status
 *
 * plus the writing/speaking honesty layer: those sections are NOT ordinary
 * multiple-choice items, so their records carry the scoring-rubric
 * criterion names and a reference-example marker instead of an answer key.
 *
 * This projection is PUBLIC-SAFE by construction: it never carries answer
 * keys, model answers, keyword lists, lures or evidence quotes. Every
 * item's playable content stays in its own masterclass bank, served with
 * the established safe projections and server-side grading. The unified
 * bank adds organisation, search and cross-navigation — not a new copy of
 * the content.
 */

import type { BankTopicDomain } from "./topics";

export type UnifiedExam = "ielts" | "toefl";

/**
 * Examination version. IELTS Reading and Writing split genuinely into
 * Academic and General Training; IELTS Listening and Speaking are the same
 * test for both variants, so their items are marked "common" (one item,
 * served to both libraries — the variants' mock content stays separate).
 * TOEFL pins the current 2026 specification.
 */
export type UnifiedVersion = "academic" | "general-training" | "common" | "toefl-2026";

export const VERSION_LABELS: Record<UnifiedVersion, string> = {
  academic: "IELTS Academic",
  "general-training": "IELTS General Training",
  common: "Both IELTS variants",
  "toefl-2026": "TOEFL iBT (2026 format)",
};

export type UnifiedSection = "listening" | "reading" | "writing" | "speaking";

export type UnifiedDifficulty = 1 | 2 | 3 | 4 | 5;

/**
 * How the item is settled:
 *   keyed  — an answer key exists (held server-side, never projected);
 *   rubric — assessed against a scoring rubric with reference examples
 *            (Writing and Speaking tasks).
 */
export type AnswerModel = "keyed" | "rubric";

/**
 * Review status under the programme honesty convention: authored content
 * is machine-validated by its bank validator and reviewed through the AI
 * review pipeline. "human-reviewed" is reserved for items a staff teacher
 * has signed off — none are claimed until that actually happens.
 */
export type ReviewStatus = "ai-reviewed" | "human-reviewed";

export interface UnifiedBankItem {
  /** 1. Unique ID — the item's kebab-case slug, unique across the whole bank. */
  id: string;
  /** 2. Examination. */
  exam: UnifiedExam;
  /** 3. Examination version (Academic / General Training / TOEFL 2026). */
  version: UnifiedVersion;
  /** 4. Section. */
  section: UnifiedSection;
  /** 5. Question type — the official task-family label, e.g. "Matching headings". */
  questionType: string;
  /** Machine key for the task family (stable filter value), e.g. "matching-headings". */
  questionTypeKey: string;
  /** 6. Difficulty, 1 (foundation) … 5 (advanced). */
  difficulty: UnifiedDifficulty;
  /** 7. Topic — one of the twelve unified domains. */
  topic: BankTopicDomain;
  /** The owning bank's own finer topic label (subject, family, scene). */
  topicDetail: string;
  /** 8. Instructions — the rubric wording the candidate reads. */
  instructions: string;
  /** 9. Question content — a safe one-line description of what is asked. */
  summary: string;
  /** How many answerable items live inside this set. */
  itemCount: number;
  /** 10. Correct answer where applicable — "keyed" (server-side key) or "rubric". */
  answerModel: AnswerModel;
  /** 11. Detailed explanation — every item carries post-submission teaching explanations. */
  hasExplanation: true;
  /** 12. Skill assessed. */
  skills: string[];
  /** 13. Estimated completion time (minutes). */
  estimatedMinutes: number;
  /** 14. Review status. */
  reviewStatus: ReviewStatus;
  /**
   * 15+. Writing and Speaking only: the scoring-rubric criterion names the
   * response is assessed against (never an answer key).
   */
  rubricCriteria?: string[];
  /**
   * Writing and Speaking only: whether a reference example (model answer
   * or sample response) is revealed after submission. Practice cue cards
   * are the deliberate exception — independent practice, no model.
   */
  hasReferenceExample?: boolean;
  /** Deep link into the item's player. */
  href: string;
  /** The bank's originality disclaimer. */
  source: string;
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export interface QuestionBankFilters {
  q?: string;
  exam?: UnifiedExam;
  version?: UnifiedVersion;
  section?: UnifiedSection;
  /** The official task-family LABEL (e.g. "Matching headings") — labels
   *  unify the same family across banks (Listening's "sentence" key and
   *  Reading's "sentence-completion" key share one official label). */
  questionType?: string;
  difficulty?: UnifiedDifficulty;
  topic?: BankTopicDomain;
  skill?: string;
}

export interface QuestionBankResult {
  items: UnifiedBankItem[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

export interface QuestionBankFacets {
  exams: { value: UnifiedExam; label: string; count: number }[];
  versions: { value: UnifiedVersion; label: string; count: number }[];
  sections: { value: UnifiedSection; label: string; count: number }[];
  questionTypes: { value: string; label: string; count: number }[];
  topics: { value: BankTopicDomain; label: string; count: number }[];
  difficulties: { value: UnifiedDifficulty; label: string; count: number }[];
  skills: { value: string; label: string; count: number }[];
}
