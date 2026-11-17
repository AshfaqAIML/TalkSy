/**
 * The TalkSy navigation model — PROMPT 31 information architecture.
 *
 * Six primary categories, every item a REAL destination in this app:
 * no decorative links, no counts we cannot back with content. The test
 * suite (tests/navigation.test.ts) guards every href against the router
 * and every count against the content modules.
 */

import type { AppRoute } from "@/hooks/use-hash-route";

export type NavSkill =
  | "reading"
  | "listening"
  | "speaking"
  | "writing"
  | "vocabulary"
  | "grammar"
  | "general";

export interface NavDestination {
  label: string;
  href: string;
  /** One-line, honest description shown in mega menu and mobile nav. */
  description: string;
  /** Difficulty label shown as a badge. */
  difficulty: string;
  skill: NavSkill;
  /** Route names that mark this item (or its category) as current. */
  activeWhen: string[];
  /** Optional icon override (see NAV_ITEM_ICONS); defaults to the skill icon. */
  icon?: string;
  /** Extra tokens for the command palette's typeahead. */
  keywords?: string[];
}

export interface NavFeatured {
  label: string;
  meta: string;
  href: string;
}

export interface NavQuickLink {
  label: string;
  href: string;
}

export interface NavCategory {
  id: "learn" | "grammar" | "courses" | "practice" | "ai-tools" | "resources";
  label: string;
  /** Category description, shown at the top of its mega menu. */
  tagline: string;
  items: NavDestination[];
  /** Label of the featured rail ("Start here", "From the catalogue", …). */
  featuredLabel: string;
  /**
   * Featured destinations. For the Courses category this rail is rendered
   * from the live catalogue instead (see MegaMenu.tsx).
   */
  featured: NavFeatured[];
  quickLinks: NavQuickLink[];
}

/** First lesson of the whole curriculum — the palette's anonymous fallback. */
export const FIRST_LESSON_SLUG = "p1-1-1";

export const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "learn",
    label: "Learn",
    tagline: "Follow a guided path from your very first word to confident English.",
    items: [
      {
        label: "Learn English from Zero",
        href: "#/library/pre-a1",
        description: "Pre-A1 · First Words — greetings, numbers, colours and family. No English needed.",
        difficulty: "Pre-A1",
        skill: "general",
        icon: "sprout",
        activeWhen: ["library", "lesson"],
      },
      {
        label: "Beginner English",
        href: "#/library/a1",
        description: "A1 · Building Blocks — the verb “to be” and your first real conversations.",
        difficulty: "A1",
        skill: "general",
        icon: "blocks",
        activeWhen: ["library", "lesson"],
      },
      {
        label: "Intermediate English",
        href: "#/library/grammar-core",
        description: "Grammar Core — 14 lessons through Grammar School and the Sentence Lab.",
        difficulty: "A2",
        skill: "grammar",
        icon: "school",
        activeWhen: ["library", "lesson", "grammar", "grammar-tenses", "lab"],
      },
      {
        label: "Advanced English",
        href: "#/exams",
        description: "IELTS & TOEFL Academy — structured modules and full-length mock exams.",
        difficulty: "B1+",
        skill: "general",
        icon: "award",
        activeWhen: [
          "exams",
          "exams-onboarding",
          "exams-dashboard",
          "exams-planner",
          "exams-course",
          "exams-listening",
          "exams-reading",
          "exams-toefl-library",
          "exams-bank",
          "exams-writing",
          "exams-speaking",
          "exams-mocks",
          "exams-history",
          "exams-evaluator",
          "exams-mock",
          "exams-result",
        ],
      },
      {
        label: "Complete Learning Paths",
        href: "#/paths",
        description: "Five long-form journeys chaining levels, courses and practice — 20 lessons today.",
        difficulty: "All levels",
        skill: "general",
        icon: "route",
        activeWhen: ["library", "lesson"],
      },
    ],
    featuredLabel: "Start here",
    featured: [
      { label: "Hello! Everyday Greetings", meta: "Pre-A1 · Lesson 1", href: "#/lesson/p1-1-1" },
      { label: "The Verb \"To Be\"", meta: "A1 · Lesson 1", href: "#/lesson/a1-1-1" },
    ],
    quickLinks: [
      { label: "Learning path overview", href: "#/library" },
      { label: "Beginner English hub", href: "#/hub/beginner-english" },
      { label: "My Progress", href: "#/progress" },
    ],
  },
  {
    id: "grammar",
    label: "Grammar",
    tagline: "Understand the system behind English — then build with it.",
    items: [
      {
        label: "Parts of Speech",
        href: "#/grammar",
        description: "All eight parts of speech — categories, examples, mistakes and activities.",
        difficulty: "A1+",
        skill: "grammar",
        activeWhen: ["grammar"],
      },
      {
        label: "Sentence Formation",
        href: "#/lab",
        description: "Sentence Lab — seven stages from word tiles to full transformations.",
        difficulty: "A2",
        skill: "writing",
        activeWhen: ["lab"],
      },
      {
        label: "Tenses",
        href: "#/grammar/tenses",
        description: "Tense Explorer — all 12 tenses compared side by side, meaning first.",
        difficulty: "A1+",
        skill: "grammar",
        activeWhen: ["grammar-tenses"],
      },
      {
        label: "Types of Sentences",
        href: "#/lesson/lab-3-sentence-types",
        description: "The Sentence Lab lesson on sentence types — statements, questions, commands.",
        difficulty: "A2",
        skill: "grammar",
        activeWhen: ["lesson"],
      },
      {
        label: "Advanced Grammar",
        href: "#/grammar/clinic",
        description: "Error Clinic — bring your own sentences; corrections explained rule by rule.",
        difficulty: "B1+",
        skill: "grammar",
        activeWhen: ["grammar-clinic"],
      },
    ],
    featuredLabel: "Start here",
    featured: [
      {
        label: "Present Tenses Compared",
        meta: "Grammar · Core lesson",
        href: "#/lesson/grammar-tenses-present",
      },
    ],
    quickLinks: [
      { label: "Grammar hub", href: "#/hub/grammar" },
      { label: "Grammar School", href: "#/grammar" },
      { label: "Sentence Lab", href: "#/lab" },
    ],
  },
  {
    id: "courses",
    label: "Courses",
    tagline: "Structured courses from our teaching team — enrol to track your progress.",
    items: [
      {
        label: "Complete English Programme",
        href: "#/paths/complete-english-programme",
        description: "The 56-chapter core curriculum — Pre-A1 to C1 with real prerequisites.",
        difficulty: "Pre-A1–C1",
        skill: "general",
        icon: "graduation",
        activeWhen: ["paths"],
      },
      {
        label: "All Courses",
        href: "#/courses",
        description: "The full catalogue, straight from the teaching team.",
        difficulty: "All levels",
        skill: "general",
        icon: "library",
        activeWhen: ["courses", "course", "course-lesson"],
      },
      {
        label: "Beginner Courses",
        href: "#/courses/level/a1-beginner",
        description: "A1 Beginner courses — start with Everyday English Foundations.",
        difficulty: "A1",
        skill: "general",
        icon: "sprout",
        activeWhen: ["courses"],
      },
      {
        label: "Spoken English",
        href: "#/speaking",
        description: "The speaking programme — 25 activities, 11 AI role-plays, pronunciation training.",
        difficulty: "Beg–Adv",
        skill: "speaking",
        activeWhen: ["speaking"],
      },
      {
        label: "Writing Skills",
        href: "#/writing",
        description: "The writing programme — 32 guided assignments with feedback that teaches.",
        difficulty: "Beg–Adv",
        skill: "writing",
        activeWhen: ["writing"],
      },
      {
        label: "Vocabulary Courses",
        href: "#/vocabulary",
        description: "Word World — 135 words, spaced repetition, six challenge types.",
        difficulty: "A1+",
        skill: "vocabulary",
        icon: "list",
        activeWhen: ["vocabulary"],
      },
    ],
    // The Courses rail renders live from the catalogue (MegaMenu.tsx);
    // these entries are the anonymous/no-data fallback.
    featuredLabel: "From the catalogue",
    featured: [
      { label: "English from Zero", meta: "Pre-A1 · 8 chapters", href: "#/course/english-from-zero" },
      { label: "Beginner English", meta: "A1 · 10 chapters", href: "#/course/beginner-english" },
      { label: "Everyday English Foundations", meta: "A1 Beginner · Course", href: "#/course/everyday-english-foundations" },
      { label: "IELTS Academy", meta: "Exam preparation · Course", href: "#/course/ielts-academy-core" },
    ],
    quickLinks: [
      { label: "Vocabulary hub", href: "#/hub/vocabulary" },
      { label: "Writing hub", href: "#/hub/writing" },
      { label: "Exam Academy", href: "#/exams" },
    ],
  },
  {
    id: "practice",
    label: "Practice",
    tagline: "Six laboratories — every attempt recorded, every skill measured.",
    items: [
      {
        label: "Speaking Lab",
        href: "#/speaking",
        description: "25 activities, 11 AI role-plays and pronunciation training.",
        difficulty: "Beg–Adv",
        skill: "speaking",
        activeWhen: ["speaking"],
      },
      {
        label: "Listening Lab",
        href: "#/listening",
        description: "32 audio activities with graded exercises.",
        difficulty: "Beg–Adv",
        skill: "listening",
        activeWhen: ["listening"],
      },
      {
        label: "Reading Room",
        href: "#/reading",
        description: "21 graded texts across four levels, with comprehension checks.",
        difficulty: "Beg–Adv",
        skill: "reading",
        activeWhen: ["reading"],
      },
      {
        label: "Writing Studio",
        href: "#/writing",
        description: "32 guided assignments with AI feedback that teaches.",
        difficulty: "Beg–Adv",
        skill: "writing",
        activeWhen: ["writing"],
      },
      {
        label: "Sentence Builder",
        href: "#/lab",
        description: "Build sentences tile by tile — seven construction stages.",
        difficulty: "A2",
        skill: "grammar",
        activeWhen: ["lab"],
      },
      {
        label: "Vocabulary Practice",
        href: "#/vocabulary/challenges",
        description: "Six challenge types — quiz, meaning, spelling, arrangement, matching.",
        difficulty: "A1+",
        skill: "vocabulary",
        activeWhen: ["vocabulary"],
      },
      {
        label: "Practice Zone",
        href: "#/practice",
        description:
          "Eight practice modes, 56 chapter tests and six course assessments — every attempt recorded, every skill measured.",
        difficulty: "Pre-A1–C1",
        skill: "general",
        icon: "target",
        activeWhen: ["practice", "practice-session"],
      },
    ],
    featuredLabel: "Jump in",
    featured: [
      { label: "Start an AI role-play", meta: "Speaking · 11 scenarios", href: "#/speaking/conversations" },
    ],
    quickLinks: [
      { label: "Reading hub", href: "#/hub/reading" },
      { label: "Listening hub", href: "#/hub/listening" },
      { label: "Spoken English hub", href: "#/hub/spoken-english" },
    ],
  },
  {
    id: "ai-tools",
    label: "AI Tools",
    tagline: "Ten AI teachers — each one a different kind of coach.",
    items: [
      {
        label: "AI English Tutor",
        href: "#/tutor",
        description: "All 10 teaching modes in one place, with saved history.",
        difficulty: "All levels",
        skill: "general",
        icon: "sparkle",
        activeWhen: ["tutor"],
      },
      {
        label: "Sentence Corrector",
        href: "#/grammar/clinic",
        description: "Error Clinic — instant corrections of your sentences, rules explained.",
        difficulty: "All levels",
        skill: "grammar",
        activeWhen: ["grammar-clinic"],
      },
      {
        label: "Writing Assistant",
        href: "#/tutor/m/writing",
        description: "Writing Teacher — feedback that teaches, never a rewrite.",
        difficulty: "All levels",
        skill: "writing",
        activeWhen: ["tutor"],
      },
      {
        label: "Speaking Partner",
        href: "#/tutor/m/conversation",
        description: "Speaking Partner — natural chat with a gentle note afterwards. Answer out loud whenever you like.",
        difficulty: "All levels",
        skill: "speaking",
        icon: "message",
        activeWhen: ["tutor"],
      },
    ],
    featuredLabel: "More modes",
    featured: [
      { label: "Interview Practice", meta: "One question at a time", href: "#/tutor/m/interview" },
      { label: "Doubt Solver", meta: "About your actual lessons", href: "#/tutor/m/doubt" },
    ],
    quickLinks: [{ label: "Open the AI Tutor", href: "#/tutor" }],
  },
  {
    id: "resources",
    label: "Resources",
    tagline: "Guides, lists and study methods — the reference shelf.",
    items: [
      {
        label: "Grammar Guides",
        href: "#/grammar",
        description: "Eight parts-of-speech guides plus the 12-tense reference.",
        difficulty: "A1+",
        skill: "grammar",
        activeWhen: ["grammar"],
      },
      {
        label: "Vocabulary Lists",
        href: "#/vocabulary/explore",
        description: "135 words in 12 topic lists — build your own lists when you sign in.",
        difficulty: "A1+",
        skill: "vocabulary",
        icon: "list",
        activeWhen: ["vocabulary"],
      },
      {
        label: "Everyday English",
        href: "#/course/everyday-english-foundations",
        description: "The A1 foundations course from our teaching team.",
        difficulty: "A1",
        skill: "general",
        icon: "coffee",
        activeWhen: ["course"],
      },
      {
        label: "Learning Tips",
        href: "#/tips",
        description: "How to learn here — routines, repetition and honest measurement.",
        difficulty: "All levels",
        skill: "general",
        icon: "lightbulb",
        activeWhen: ["tips"],
      },
    ],
    featuredLabel: "Good to know",
    featured: [
      {
        label: "The honest progress dashboard",
        meta: "Verified completions, real attempt history",
        href: "#/progress",
      },
    ],
    quickLinks: [
      { label: "All category hubs", href: "#/courses" },
      { label: "Pronunciation hub", href: "#/hub/pronunciation" },
      { label: "Sentence Formation hub", href: "#/hub/sentence-formation" },
      { label: "About", href: "#/about" },
      { label: "Contact", href: "#/contact" },
    ],
  },
];

/**
 * Which category is "current" for a route. Cross-linked surfaces (e.g.
 * Speaking reachable from Courses and Practice) resolve to the category
 * that OWNS the surface, not the first one that mentions it.
 */
const CATEGORY_PRECEDENCE: Partial<Record<string, NavCategory["id"]>> = {
  library: "learn",
  lesson: "learn",
  exams: "learn",
  "exams-onboarding": "learn",
  "exams-dashboard": "learn",
  "exams-planner": "learn",
  "exams-course": "learn",
  "exams-listening": "learn",
  "exams-reading": "learn",
  "exams-toefl-library": "learn",
  "exams-bank": "learn",
  "exams-writing": "learn",
  "exams-speaking": "learn",
  "exams-mocks": "learn",
  "exams-history": "learn",
  "exams-evaluator": "learn",
  "exams-mock": "learn",
  "exams-result": "learn",
  grammar: "grammar",
  "grammar-tenses": "grammar",
  "grammar-clinic": "grammar",
  lab: "grammar",
  courses: "courses",
  course: "courses",
  "course-lesson": "courses",
  speaking: "practice",
  listening: "practice",
  reading: "practice",
  writing: "practice",
  vocabulary: "practice",
  practice: "practice",
  "practice-session": "practice",
  tutor: "ai-tools",
  tips: "resources",
};

/** Which category (if any) is current for a route name. */
export function activeCategoryId(routeName: string): NavCategory["id"] | null {
  const precedence = CATEGORY_PRECEDENCE[routeName];
  if (precedence) {
    const owner = NAV_CATEGORIES.find((c) => c.id === precedence);
    if (owner?.items.some((item) => item.activeWhen.includes(routeName))) {
      return precedence;
    }
  }
  for (const category of NAV_CATEGORIES) {
    if (category.items.some((item) => item.activeWhen.includes(routeName))) {
      return category.id;
    }
  }
  return null;
}

/** Every nav link in one flat list (tests + palette typeahead). */
export function allNavDestinations(): {
  category: NavCategory;
  item: NavDestination;
}[] {
  return NAV_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({ category, item })),
  );
}

/**
 * Hub route names → human titles, used to record "recent pages" when the
 * user navigates outside the palette. Deep links (lessons, courses, texts)
 * are recorded by the palette itself, where the title is known.
 */
export const HUB_TITLES: Partial<Record<AppRoute["name"], string>> = {
  library: "Learning path",
  grammar: "Grammar School",
  "grammar-tenses": "Tense Explorer",
  "grammar-clinic": "Error Clinic",
  lab: "Sentence Lab",
  vocabulary: "Word World",
  reading: "Reading Room",
  listening: "Listening Lab",
  speaking: "Speaking Lab",
  writing: "Writing Studio",
  tutor: "AI Tutor",
  courses: "Course catalogue",
  paths: "Learning paths",
  exams: "Exam Academy",
  "exams-listening": "IELTS Listening Masterclass",
  "exams-reading": "IELTS Reading Masterclass",
  "exams-toefl-library": "TOEFL Practice Library",
  "exams-bank": "Original Question Bank",
  "exams-writing": "IELTS Writing Masterclass",
  "exams-speaking": "IELTS Speaking Masterclass",
  progress: "My Progress",
  practice: "Practice Zone",
  tips: "Learning Tips",
  about: "About TalkSy",
  contact: "Contact",
};
