/**
 * Learning Progression System — shared types.
 *
 * Design rules baked into these types:
 *  1. Integrity: every fact below originates from a VERIFIED learner action
 *     (a graded answer, a passed run, a submitted draft…). Nothing is counted
 *     for merely opening content.
 *  2. Honesty: skills are never collapsed into one "English score". Each
 *     skill keeps its own, clearly-labelled metrics; incomparable numbers
 *     (writing rubric vs. multiple-choice accuracy) never mix.
 *  3. Non-punitive gamification: streaks and goals describe activity; they
 *     never gate, hide or remove earned progress.
 */

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export const PROGRESS_SKILLS = [
  "vocabulary",
  "grammar",
  "reading",
  "listening",
  "speaking",
  "writing",
] as const;

export type ProgressSkill = (typeof PROGRESS_SKILLS)[number];

export const SKILL_LABELS: Record<ProgressSkill, string> = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  reading: "Reading",
  listening: "Listening",
  speaking: "Speaking",
  writing: "Writing",
};

/** Activity level of a skill — volume of verified practice, never ability. */
export type SkillStatus = "not-started" | "exploring" | "building" | "consistent";

export type SkillTrend = "improving" | "steady" | "declining" | "new" | "insufficient";

export interface SkillAccuracy {
  /** Correct / total on measurable, comparable items — labelled per skill. */
  correct: number;
  total: number;
  /** 0-100 integer, or null when there is nothing measurable yet. */
  pct: number | null;
  /** What this number actually measures, e.g. "graded comprehension answers". */
  basis: string;
}

export interface SkillProfile {
  skill: ProgressSkill;
  label: string;
  status: SkillStatus;
  /** Verified practice events for this skill. */
  practiceEvents: number;
  lastActiveAt: string | null;
  /** Days since last verified practice (null when never practiced). */
  daysSinceActive: number | null;
  accuracy: SkillAccuracy | null;
  /** Structured completion, e.g. "3 of 21 texts completed". */
  completion: { done: number; total: number; label: string } | null;
  trend: SkillTrend;
  /** Data-backed strengths (specific, with the numbers that support them). */
  strengths: string[];
  /** Data-backed focus areas. */
  focus: string[];
  /** Honesty caveats the UI must keep visible next to the numbers. */
  notes: string[];
}

// ---------------------------------------------------------------------------
// Facts (server-side snapshot of verified activity)
// ---------------------------------------------------------------------------

/** A single point-earning verified event. */
export interface DerivedEvent {
  at: Date;
  source: string;
  points: number;
  skill: ProgressSkill | null;
  label: string;
}

export interface WeeklyBucket {
  /** ISO date of the week's Monday. */
  weekStart: string;
  points: number;
  events: number;
  bySkill: Partial<Record<ProgressSkill, number>>;
  /** Weekly % of correct graded exercise answers (null = no attempts). */
  exerciseAccuracy: number | null;
  exerciseAttempts: number;
  /** Weekly % of correct graded vocabulary reviews (null = none). */
  reviewRetention: number | null;
  reviewCount: number;
}

export interface DailyActivity {
  day: string; // YYYY-MM-DD
  points: number;
  events: number;
}

export interface StreakInfo {
  current: number;
  longest: number;
  activeDays: number;
  lastActiveDay: string | null;
}

export interface LessonFact {
  slug: string;
  title: string;
  levelId: string | null;
  status: "in-progress" | "completed";
  sectionsDone: number;
  sectionsTotal: number;
  updatedAt: Date;
  completedAt: Date | null;
}

export interface VocabWordFact {
  wordId: string;
  term: string;
  status: "learning" | "reviewing" | "mastered";
  totalReviews: number;
  correctReviews: number;
  lapses: number;
  isDifficult: boolean;
  dueAt: Date | null;
  lastReviewedAt: Date | null;
  firstSeenAt: Date;
}

export interface ReadingProgressFact {
  textId: string;
  title: string;
  status: "in-progress" | "completed";
  bestRunScore: number;
  updatedAt: Date;
  completedAt: Date | null;
}

export interface ListeningProgressFact {
  activityId: string;
  title: string;
  status: "in-progress" | "completed";
  bestScore: number;
  updatedAt: Date;
  completedAt: Date | null;
  firstTryCount: number;
  completedCount: number;
}

export interface SpeakingProgressFact {
  activityId: string;
  title: string;
  tier: string;
  status: "in-progress" | "completed";
  bestScore: number;
  attemptsCount: number;
  tasksPassedCount: number;
  updatedAt: Date;
  completedAt: Date | null;
}

export interface WritingProgressFact {
  assignmentId: string;
  title: string;
  tier: string;
  status: "in-progress" | "completed";
  bestScore: number;
  submissionsCount: number;
  updatedAt: Date;
  completedAt: Date | null;
}

/**
 * The complete verified-activity snapshot. Built by src/lib/progress/facts.ts;
 * consumed by the skill profiler, scheduler, recommender and achievement
 * evaluator. All lists are sorted ascending by their date field unless noted.
 */
export interface ProgressFacts {
  userId: string;
  now: Date;

  // Lessons & core exercises
  lessons: LessonFact[]; // sorted by updatedAt desc
  lessonsCompletedCount: number;
  exerciseAttempts: {
    id: string;
    exerciseId: string;
    lessonSlug: string;
    type: string;
    skill: ProgressSkill;
    isCorrect: boolean;
    difficulty: string;
    createdAt: Date;
  }[];
  assessmentsPassed: { lessonSlug: string; completedAt: Date }[]; // first pass per lesson
  assessmentResults: { lessonSlug: string; score: number; passed: boolean; completedAt: Date }[];

  // Vocabulary
  vocabWords: VocabWordFact[]; // sorted by firstSeenAt asc
  vocabGradedReviews: { wordId: string; correct: boolean; createdAt: Date }[];
  vocabSentences: { wordId: string; valid: boolean; createdAt: Date }[];
  vocabChallenges: { id: string; kind: string; correct: number; total: number; completedAt: Date }[];

  // Grammar clinic
  clinicSentences: { id: string; issuesCount: number; categories: string[]; createdAt: Date }[];

  // Reading
  readingProgress: ReadingProgressFact[]; // sorted by updatedAt desc
  readingRunsPassed: { id: string; textId: string; score: number; completedAt: Date }[];
  readingAttempts: { questionId: string; skill: string; isCorrect: boolean; createdAt: Date }[];

  // Listening
  listeningProgress: ListeningProgressFact[]; // sorted by updatedAt desc
  listeningAttempts: { id: string; activityId: string; exerciseId: string; isCorrect: boolean; createdAt: Date }[];

  // Speaking
  speakingProgress: SpeakingProgressFact[]; // sorted by updatedAt desc
  speakingAttempts: { id: string; activityId: string; taskId: string; score: number; selfAssessed: boolean; durationMs: number; createdAt: Date }[];
  conversationsCompleted: { id: string; scenarioId: string; title: string; turnsCount: number; completedAt: Date }[];
  pronunciationAttempts: { id: string; itemId: string; category: string; matchScore: number; createdAt: Date }[];

  // Writing
  writingProgress: WritingProgressFact[]; // sorted by updatedAt desc
  writingSubmissions: {
    id: string;
    assignmentId: string;
    title: string;
    version: number;
    overall: number; // 0-100 rubric
    passed: boolean;
    wordCount: number;
    sentenceCount: number;
    createdAt: Date;
  }[];

  // Sentence constructions (correct sentence-build/rearrange exercises +
  // checker-valid vocabulary sentences), dates only, asc.
  sentenceConstructions: Date[];

  // Learner-set state (never a performance signal)
  goals: { dailyPoints: number; weeklyPoints: number };
  confidence: Record<string, number>; // lessonSlug -> 1..5

  // Derived
  events: DerivedEvent[]; // asc by at
  pointsTotal: number;
  pointsToday: number;
  pointsThisWeek: number;
  pointsByDay: Record<string, number>;
  dailyActivity: DailyActivity[]; // last 84 days incl. zero days, asc
  weekly: WeeklyBucket[]; // last 12 weeks, asc
  streak: StreakInfo;
}

// ---------------------------------------------------------------------------
// Points (content-as-code: values are product decisions)
// ---------------------------------------------------------------------------

export interface PointRuleDef {
  label: string;
  points: number;
  /** Max awarded events per UTC day (anti-grinding); null = uncapped. */
  capPerDay: number | null;
  /** Awarded once per subject (lesson, text, activity, …). */
  oncePerSubject: boolean;
}

export const POINT_RULES = {
  "exercise-correct": { label: "Correct exercise answer", points: 2, capPerDay: 20, oncePerSubject: false },
  "assessment-passed": { label: "Lesson assessment passed", points: 15, capPerDay: null, oncePerSubject: true },
  "lesson-completed": { label: "Lesson completed", points: 20, capPerDay: null, oncePerSubject: true },
  "vocab-review-correct": { label: "Correct word review", points: 1, capPerDay: 30, oncePerSubject: false },
  "vocab-challenge-completed": { label: "Word challenge completed", points: 10, capPerDay: 2, oncePerSubject: false },
  "vocab-sentence-valid": { label: "Valid practice sentence", points: 2, capPerDay: 5, oncePerSubject: false },
  "clinic-sentence": { label: "Error Clinic sentence", points: 1, capPerDay: 10, oncePerSubject: false },
  "reading-run-passed": { label: "Comprehension run passed", points: 5, capPerDay: 3, oncePerSubject: false },
  "reading-text-completed": { label: "Reading text completed", points: 15, capPerDay: null, oncePerSubject: true },
  "listening-correct": { label: "Correct listening answer", points: 2, capPerDay: 20, oncePerSubject: false },
  "listening-activity-completed": { label: "Listening activity completed", points: 15, capPerDay: null, oncePerSubject: true },
  "speaking-task-passed": { label: "Speaking task passed", points: 5, capPerDay: null, oncePerSubject: true },
  "speaking-activity-completed": { label: "Speaking activity completed", points: 20, capPerDay: null, oncePerSubject: true },
  "conversation-completed": { label: "Conversation finished", points: 10, capPerDay: 2, oncePerSubject: false },
  "pronunciation-attempt": { label: "Pronunciation practice", points: 1, capPerDay: 10, oncePerSubject: false },
  "writing-submitted": { label: "Writing submitted", points: 5, capPerDay: 2, oncePerSubject: false },
  "writing-assignment-completed": { label: "Writing assignment completed", points: 25, capPerDay: null, oncePerSubject: true },
} as const satisfies Record<string, PointRuleDef>;

export type PointSource = keyof typeof POINT_RULES;

// ---------------------------------------------------------------------------
// Revision scheduler
// ---------------------------------------------------------------------------

export type RevisionItemKind =
  | "vocabulary"
  | "grammar-lesson"
  | "reading-text"
  | "listening-activity"
  | "speaking-activity"
  | "writing-assignment";

export interface RevisionItem {
  kind: RevisionItemKind;
  /** Stable id for React keys (e.g. "grammar-lesson:grammar-tenses-past"). */
  id: string;
  title: string;
  /** App hash route to open, e.g. "#/reading/a-day-at-the-market". */
  href: string;
  /** "due" = act now; "soon" = coming up / optional. */
  status: "due" | "soon";
  /** 0-100 priority used for ordering and progress bars. */
  urgency: number;
  /** Plain-language explanation of WHY this is scheduled now. */
  reason: string;
  /** The scheduling factors that produced this item (for the UI). */
  factors: {
    performance: number | null; // 0-100 where measurable
    attempts: number;
    daysSince: number | null;
    confidence: number | null; // 1-5 self-reported
    dueAt: string | null; // SRS due date for vocabulary
    difficulty: string | null; // exercise difficulty band where known
  };
}

export interface RevisionPlan {
  due: RevisionItem[];
  soon: RevisionItem[];
  /** Aggregate counts for the header. */
  counts: { due: number; soon: number; vocabularyDue: number };
  /** Completed lessons the learner can rate confidence on. */
  confidenceLessons: { slug: string; title: string; confidence: number | null }[];
}

// ---------------------------------------------------------------------------
// Recommendations
// ---------------------------------------------------------------------------

export type RecommendationKind =
  | "next-lesson"
  | "revision"
  | "grammar-practice"
  | "vocabulary"
  | "speaking-challenge"
  | "writing-assignment"
  | "skill-balance";

export interface Recommendation {
  kind: RecommendationKind;
  id: string;
  title: string;
  /** What to do. */
  action: string;
  /** WHY this is recommended right now — the purpose, shown to the learner. */
  purpose: string;
  href: string;
  /** 0-100 ranking weight (internal; drives ordering). */
  weight: number;
}

// ---------------------------------------------------------------------------
// Achievements & milestones
// ---------------------------------------------------------------------------

export type AchievementCategory =
  | "milestones"
  | "practice"
  | "streaks"
  | "vocabulary"
  | "grammar"
  | "reading"
  | "listening"
  | "speaking"
  | "writing"
  | "courses";

export interface AchievementState {
  unlocked: boolean;
  /** ISO timestamp of the verified event that completed the requirement. */
  unlockedAt: string | null;
  /** Progress toward the target while locked (null when not countable). */
  progress: { current: number; target: number } | null;
}

export interface AchievementDef {
  id: string;
  kind: "milestone" | "achievement";
  title: string;
  description: string;
  /** How it is verified — the integrity statement shown in the UI. */
  requirement: string;
  category: AchievementCategory;
  icon: string;
  verify: (facts: ProgressFacts) => AchievementState;
}

// ---------------------------------------------------------------------------
// Certificates
// ---------------------------------------------------------------------------

export interface CertificateDto {
  id: string;
  courseId: string;
  kind: "unit" | "level";
  title: string;
  code: string;
  lessonsCompleted: number;
  issuedAt: string;
}

export interface CertificateProgress {
  courseId: string;
  title: string;
  lessonsCompleted: number;
  lessonsTotal: number;
}

// ---------------------------------------------------------------------------
// Client-facing overview payload (all dates ISO strings)
// ---------------------------------------------------------------------------

export interface AchievementView {
  id: string;
  kind: "milestone" | "achievement";
  title: string;
  description: string;
  requirement: string;
  category: AchievementCategory;
  icon: string;
  unlocked: boolean;
  unlockedAt: string | null;
  seen: boolean;
  progress: { current: number; target: number } | null;
}

export interface ActivityFeedItem {
  at: string;
  label: string;
  points: number;
  skill: ProgressSkill | null;
}

export interface WritingAssignmentProgression {
  assignmentId: string;
  title: string;
  firstScore: number;
  lastScore: number;
  delta: number;
  submissions: { version: number; overall: number; passed: boolean; at: string }[];
}

export interface ProgressOverviewDto {
  fetchedAt: string;
  learner: { name: string | null };
  points: {
    total: number;
    today: number;
    thisWeek: number;
    byDay: DailyActivity[];
  };
  goals: {
    dailyPoints: number;
    weeklyPoints: number;
    todayProgress: number;
    weekProgress: number;
  };
  streak: StreakInfo & { streakNote: string };
  /** Overall graded-exercise accuracy (all skills; writing never appears here). */
  exercises: { correct: number; total: number; pct: number | null; bySkill: Record<string, { correct: number; total: number }> };
  lessons: {
    completed: number;
    inProgress: number;
    total: number;
    nextLesson: { slug: string; title: string } | null;
    continueLesson: { slug: string; title: string; sectionsDone: number; sectionsTotal: number } | null;
  };
  skills: SkillProfile[];
  series: {
    weekly: WeeklyBucket[];
    writing: WritingAssignmentProgression[];
    vocabulary: {
      statusCounts: { learning: number; reviewing: number; mastered: number };
      dueNow: number;
      difficult: number;
      retention: { pct: number | null; correct: number; total: number };
    };
  };
  recommendations: Recommendation[];
  revision: RevisionPlan;
  achievements: {
    all: AchievementView[];
    unlockedCount: number;
    totalCount: number;
    milestoneCount: { unlocked: number; total: number };
    recentUnlocks: AchievementView[];
    unseenCount: number;
  };
  certificates: { earned: CertificateDto[]; inProgress: CertificateProgress[] };
  recentActivity: ActivityFeedItem[];
}
