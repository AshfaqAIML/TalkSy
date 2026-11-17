/**
 * Shared catalogue types — client-safe (no DB or data-module imports), so
 * the catalogue view, hub pages and path pages all agree on one shape.
 *
 * PROMPT 32 honesty rules (test-enforced):
 *  · every count/duration is derived from the real content sources;
 *  · completion status comes from progress tables — never assumed;
 *  · no popularity counters, no review scores.
 */

export type CatalogueFormat =
  | "path" // A — long-form structured journeys
  | "course" // B — organised courses (CMS)
  | "lesson" // C — short lessons (curriculum + CMS)
  | "guide" // D — reference-style grammar guides
  | "lab" // E — interactive practice labs
  | "simulator"; // F — conversation simulators

export const FORMAT_LABELS: Record<CatalogueFormat, string> = {
  path: "Learning paths",
  course: "Complete courses",
  lesson: "Short lessons",
  guide: "Grammar guides",
  lab: "Practice labs",
  simulator: "Conversation simulators",
};

/** Ordered section list of the catalogue page. */
export const CATALOGUE_FORMAT_ORDER: CatalogueFormat[] = [
  "path",
  "course",
  "lesson",
  "guide",
  "lab",
  "simulator",
];

export type CompletionStatus = "not-started" | "in-progress" | "completed";

/** The nine category hubs (PROMPT 32 §2). */
export type HubId =
  | "beginner-english"
  | "grammar"
  | "vocabulary"
  | "sentence-formation"
  | "spoken-english"
  | "reading"
  | "writing"
  | "listening"
  | "pronunciation";

export const HUB_IDS: HubId[] = [
  "beginner-english",
  "grammar",
  "vocabulary",
  "sentence-formation",
  "spoken-english",
  "reading",
  "writing",
  "listening",
  "pronunciation",
];

export type CatalogueSkill =
  | "reading"
  | "listening"
  | "speaking"
  | "writing"
  | "vocabulary"
  | "grammar"
  | "general";

export const SKILL_IDS: CatalogueSkill[] = [
  "reading",
  "listening",
  "speaking",
  "writing",
  "vocabulary",
  "grammar",
  "general",
];

export const SKILL_LABELS: Record<CatalogueSkill, string> = {
  reading: "Reading",
  listening: "Listening",
  speaking: "Speaking",
  writing: "Writing",
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  general: "General",
};

/** Duration buckets used by the duration filter. */
export const DURATION_BUCKETS = [
  { id: "short", label: "Under 15 min", test: (m: number) => m < 15 },
  { id: "medium", label: "15–60 min", test: (m: number) => m >= 15 && m <= 60 },
  { id: "long", label: "Over 1 hour", test: (m: number) => m > 60 },
] as const;

export type DurationBucketId = (typeof DURATION_BUCKETS)[number]["id"];

/** One item in the unified catalogue. */
export interface CatalogueItem {
  /** Format-prefixed, unique across the catalogue. */
  id: string;
  format: CatalogueFormat;
  title: string;
  description: string;
  href: string;
  /** CEFR-ish level label ("Pre-A1", "A1", "A2", "IELTS Preparation"…). */
  level: string | null;
  skills: CatalogueSkill[];
  difficulty: string | null;
  /** Total estimated minutes, summed from real lesson durations (null for
   *  reference guides and open-ended labs where a number would be a guess). */
  durationMinutes: number | null;
  chapterCount: number | null;
  lessonCount: number | null;
  topics: HubId[];
  /** Human-readable titles of things to finish first (real prerequisites). */
  prerequisites: string[];
  completion: CompletionStatus | null;
  /** Featured items get the large presentation in hubs and the catalogue. */
  featured: boolean;
  /** Verified progress (paths and enrolled courses), null when untracked. */
  progress?: { completed: number; total: number } | null;
  /** Format-specific extras rendered by the card components. */
  partner?: string;
  activityCount?: number;
  /** Subtitle for search/palette reuse: "Course · A1 Beginner · 2 lessons". */
  subtitle?: string;
}

/** A chapter inside a path/course (a curriculum unit or a CMS unit). */
export interface CatalogueChapter {
  title: string;
  description: string;
  lessonCount: number;
  lessons: { slug: string; title: string; durationMinutes: number; completion: CompletionStatus | null }[];
}

export type PathStepKind =
  | "curriculum-level"
  | "cms-course"
  | "practice";

/** A resolved step of a learning path. */
export interface CataloguePathStep {
  kind: PathStepKind;
  /** Display label ("Pre-A1 · First Words", "Speaking Lab practice"). */
  title: string;
  description: string;
  href: string;
  optional: boolean;
  /** Lessons/chapters for content steps; null for practice steps. */
  chapters: CatalogueChapter[] | null;
  lessonCount: number;
  durationMinutes: number;
}

/** A curated learning path with computed metadata (PROMPT 32 format A). */
export interface CataloguePath {
  id: string;
  title: string;
  description: string;
  level: string;
  outcomes: string[];
  href: string;
  skills: CatalogueSkill[];
  topics: HubId[];
  durationMinutes: number;
  chapterCount: number;
  lessonCount: number;
  prerequisites: string[];
  completion: CompletionStatus | null;
  progress: { completed: number; total: number } | null;
  steps: CataloguePathStep[];
  featured: boolean;
}

export interface CataloguePayload {
  paths: CataloguePath[];
  items: CatalogueItem[];
  /** Present only for signed-in users: their completed work (format G). */
  completed: CompletedLearning | null;
}

/** Format G — completed courses and previously studied lessons. */
export interface CompletedLearning {
  lessons: {
    slug: string;
    title: string;
    source: string;
    href: string;
    completedAt: string | null;
  }[];
  courses: {
    slug: string;
    title: string;
    completedCount: number;
    totalLessons: number;
    href: string;
  }[];
}

/** One recommendation card (PROMPT 32 §5). */
export interface RecommendationCard {
  id: string;
  /** Why this is shown — always a real, computed reason. */
  reason: string;
  title: string;
  description: string;
  href: string;
  level: string | null;
  format: CatalogueFormat | "dashboard";
}

export interface RecommendationsPayload {
  anonymous: boolean;
  cards: RecommendationCard[];
}
