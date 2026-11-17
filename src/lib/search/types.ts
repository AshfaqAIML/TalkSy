/**
 * Shared search types — safe to import from client and server code alike
 * (no data or DB imports, only shapes).
 */

export const SEARCH_CATEGORIES = [
  "Paths",
  "Lessons",
  "Exercises",
  "Grammar",
  "Vocabulary",
  "Reading",
  "Listening",
  "Speaking",
  "Writing",
  "Courses",
  "Exam prep",
  "AI tools",
  "Pages",
] as const;

export type SearchCategory = (typeof SEARCH_CATEGORIES)[number];

export type SearchSkill =
  | "reading"
  | "listening"
  | "speaking"
  | "writing"
  | "vocabulary"
  | "grammar"
  | "general";

export interface SearchEntry {
  /** Stable id, unique across the whole index. */
  id: string;
  category: SearchCategory;
  title: string;
  /** Short context line (e.g. the parent course or topic). */
  subtitle?: string;
  /** Longer text used for matching and shown as the result description. */
  description?: string;
  /** Hash route destination — always a real, working route. */
  href: string;
  difficulty?: string;
  skill?: SearchSkill;
  /** Extra matching tokens (unit titles, synonyms, exercise types, …). */
  keywords?: string[];
}

/** Coarse filter groups shown as chips above the results. */
export const SEARCH_FILTER_GROUPS = [
  { id: "all", label: "All", categories: [...SEARCH_CATEGORIES] },
  {
    id: "lessons",
    label: "Lessons",
    categories: ["Paths", "Lessons", "Exercises"] as SearchCategory[],
  },
  { id: "grammar", label: "Grammar", categories: ["Grammar"] as SearchCategory[] },
  {
    id: "vocabulary",
    label: "Vocabulary",
    categories: ["Vocabulary"] as SearchCategory[],
  },
  {
    id: "practice",
    label: "Practice",
    categories: ["Reading", "Listening", "Speaking", "Writing"] as SearchCategory[],
  },
  {
    id: "courses",
    label: "Courses",
    categories: ["Courses", "Exam prep"] as SearchCategory[],
  },
  {
    id: "tools",
    label: "Tools & pages",
    categories: ["AI tools", "Pages"] as SearchCategory[],
  },
] as const;

export type SearchFilterId = (typeof SEARCH_FILTER_GROUPS)[number]["id"];
