/**
 * TalkSy Core English Programme — the 56-chapter curriculum (PROMPT 34).
 *
 * Aggregates the six levels, exposes the full blueprint (levels →
 * chapters → lessons), validates every data guarantee, and provides the
 * strand-coverage index and helpers used by the seeder and the catalogue.
 *
 * CEFR levels are used as a curriculum reference only — never as a claim
 * of official certification (see CEFR_NOTE).
 *
 * Content is seeded into the CMS by scripts/seed-programme.ts.
 */

import { batch01 } from "./levels/batch-01";
import { batch02 } from "./levels/batch-02";
import { batch03 } from "./levels/batch-03";
import { batch04 } from "./levels/batch-04";
import { batch05 } from "./levels/batch-05";
import { batch06 } from "./levels/batch-06";
import { batch07 } from "./levels/batch-07";
import { batch08 } from "./levels/batch-08";
import { batch09 } from "./levels/batch-09";
import { batch10 } from "./levels/batch-10";
import { batch11 } from "./levels/batch-11";
import { batch12 } from "./levels/batch-12";
import { batch13 } from "./levels/batch-13";
import { batch14 } from "./levels/batch-14";
import { applyV2, buildManifest, v2CompletedChapterIds } from "./v2/manifest";
import { CONTENT_GLOSSARY, glossaryTranslationSet } from "./v2/glossary";
export { V2_UPGRADES, v2CompletedChapterIds, V2_STANDARD_DATE } from "./v2/manifest";
export type { ChapterProductionStatus, ChapterStandard } from "./v2/manifest";
export { CONTENT_GLOSSARY, gls, glossaryTranslationSet } from "./v2/glossary";
export type { GlossaryEntry } from "./v2/glossary";
import type {
  ChapterSpec,
  LessonSpec,
  ProgrammeLevelDef,
  ProgrammeLevelId,
  Strand,
} from "./types";
import { CEFR_NOTE, DIFFICULTY_BANDS, STRANDS } from "./types";

export * from "./types";

// ---------------------------------------------------------------------------
// Level definitions (CMS levels + courses + module groups)
// ---------------------------------------------------------------------------

export const PROGRAMME_LEVELS: ProgrammeLevelDef[] = [
  {
    id: "pre-a1",
    slug: "pre-a1",
    name: "Pre-A1 English",
    cefr: "Pre-A1",
    courseSlug: "english-from-zero",
    courseTitle: "English from Zero",
    tagline: "Absolute beginner — from the alphabet to your first paragraph.",
    description:
      "The complete Pre-A1 programme: what English is, the alphabet, vowels and consonants, first phonics, word reading and spelling, your first 120+ words, word categories and your first complete sentences — eight chapters that take you from zero to reading simple paragraphs.",
    outcomes: [
      "Read and write the 26 letters with correct capitalisation",
      "Blend and segment sounds to read CVC words independently",
      "Use 120+ essential words across people, food, colours, numbers and actions",
      "Build and read complete Subject + Verb + Object sentences",
      "Write a five-sentence paragraph about yourself",
    ],
    order: -6,
    chapterRange: [1, 8],
    modules: [
      {
        slug: "pre-a1-foundations",
        title: "Foundations of English",
        description: "What English is, the alphabet, and the vowel and consonant system.",
      },
      {
        slug: "pre-a1-literacy",
        title: "Reading Your First Words",
        description: "Phonics, blending, word families and fluent simple-word reading.",
      },
      {
        slug: "pre-a1-first-sentences",
        title: "First Words and First Sentences",
        description: "Core vocabulary, word categories and the first complete sentences.",
      },
    ],
    cefrNote: CEFR_NOTE,
  },
  {
    id: "a1",
    slug: "a1",
    name: "A1 English",
    cefr: "A1",
    courseSlug: "beginner-english",
    courseTitle: "Beginner English",
    tagline: "Beginner — sentence structure, everyday grammar and first conversations.",
    description:
      "The complete A1 programme: sentence anatomy, nouns and articles, pronouns and possessives, the verbs be, have and do, the present simple, questions and negatives, adjectives and adverbs, prepositions, there is/are, the present continuous and practical everyday English — ten chapters of daily-life English.",
    outcomes: [
      "Build correct sentences with articles, plurals and possessives",
      "Use present simple and present continuous with confidence",
      "Ask questions, make requests and give simple instructions",
      "Introduce yourself and your family and describe daily routines",
      "Write a structured five-sentence paragraph",
    ],
    order: -5,
    chapterRange: [9, 18],
    modules: [
      {
        slug: "a1-sentence-building",
        title: "Sentence Building Blocks",
        description: "Sentence structure, nouns and articles, pronouns, and be, have, do.",
      },
      {
        slug: "a1-everyday-grammar",
        title: "Everyday Grammar",
        description: "Present simple, questions, adjectives and adverbs, prepositions and the present continuous.",
      },
      {
        slug: "a1-real-life",
        title: "English for Life",
        description: "The A1 capstone: introductions, routines, requests, descriptions and first paragraphs.",
      },
    ],
    cefrNote: CEFR_NOTE,
  },
  {
    id: "a2",
    slug: "a2",
    name: "A2 English",
    cefr: "A2",
    courseSlug: "elementary-english",
    courseTitle: "Elementary English",
    tagline: "Elementary — past, future, experience and connected writing.",
    description:
      "The complete A2 programme: past simple and continuous, the future toolkit, present perfect foundations, modal verbs, countable and uncountable nouns, comparisons, prepositions and phrasal verbs, joining sentences and practical paragraphs — ten chapters that unlock storytelling and real correspondence.",
    outcomes: [
      "Tell stories in the past with both past tenses",
      "Choose between will, going to and arrangements for the future",
      "Talk about experiences with the present perfect",
      "Use modals for permission, advice and obligation",
      "Write connected paragraphs and simple emails",
    ],
    order: -4,
    chapterRange: [19, 28],
    modules: [
      {
        slug: "a2-past-and-future",
        title: "Past, Future and Experience",
        description: "Past simple, past continuous, the future toolkit and the present perfect.",
      },
      {
        slug: "a2-modality-and-quantity",
        title: "Modality, Quantity and Comparison",
        description: "Modal verbs, countable and uncountable nouns, and comparisons.",
      },
      {
        slug: "a2-connecting-ideas",
        title: "Connecting Ideas",
        description: "Prepositions and phrasal verbs, joining sentences, and practical paragraphs — the A2 capstone.",
      },
    ],
    cefrNote: CEFR_NOTE,
  },
  {
    id: "b1",
    slug: "b1",
    name: "B1 English",
    cefr: "B1",
    courseSlug: "intermediate-english",
    courseTitle: "Intermediate English",
    tagline: "Intermediate — narrative control, conditionals, clauses and opinion.",
    description:
      "The complete B1 programme: tense comparison and aspect, narrative tenses, perfect forms, conditionals, passive voice, reported speech, relative clauses, gerunds and infinitives, complex sentences and structured opinion writing — ten chapters of independent-user English.",
    outcomes: [
      "Choose tenses by meaning, including all perfect forms",
      "Use all first and second conditionals plus unless",
      "Report speech and transform active and passive sentences",
      "Join ideas with relative clauses and precise connectors",
      "Write structured opinion essays and hold real discussions",
    ],
    order: -3,
    chapterRange: [29, 38],
    modules: [
      {
        slug: "b1-mastering-time",
        title: "Mastering Time",
        description: "Tense comparison, narrative tenses, and continuous and perfect forms.",
      },
      {
        slug: "b1-voice-and-speech",
        title: "Condition, Voice and Speech",
        description: "Conditionals, the passive voice and reported speech.",
      },
      {
        slug: "b1-clause-craft",
        title: "Clause Craft",
        description: "Relative clauses, gerunds and infinitives, and complex sentences.",
      },
      {
        slug: "b1-confident-communication",
        title: "Confident Communication",
        description: "The B1 capstone: opinions, structure, discussion and storytelling.",
      },
    ],
    cefrNote: CEFR_NOTE,
  },
  {
    id: "b2",
    slug: "b2",
    name: "B2 English",
    cefr: "B2",
    courseSlug: "upper-intermediate-english",
    courseTitle: "Upper-Intermediate English",
    tagline: "Upper intermediate — precision, argument, naturalness and professionalism.",
    description:
      "The complete B2 programme: advanced tense and aspect, third and mixed conditionals, advanced modality and passives, participles and clause compression, advanced cohesion, natural English and collocation, academic and professional writing, debate and presentation, and critical reading — ten chapters of confident-user English.",
    outcomes: [
      "Use the full tense-and-aspect map, including future perfect forms",
      "Express regret, deduction and nuance with advanced modals",
      "Compress and connect ideas with participles and formal linkers",
      "Write professional emails, reports, proposals and structured essays",
      "Present, debate and read critically with evidence",
    ],
    order: -2,
    chapterRange: [39, 48],
    modules: [
      {
        slug: "b2-precision-grammar",
        title: "Precision Grammar",
        description: "Advanced tense and aspect, conditionals, modality and passive constructions.",
      },
      {
        slug: "b2-clause-craft",
        title: "Advanced Clause Craft",
        description: "Participles, reduced clauses and advanced connectors.",
      },
      {
        slug: "b2-natural-english",
        title: "Natural and Professional English",
        description: "Collocations, idioms and register; academic and professional writing.",
      },
      {
        slug: "b2-discussion",
        title: "Discussion and Critical Reading",
        description: "Debate, presentations, advanced reading and comprehension — the B2 capstone.",
      },
    ],
    cefrNote: CEFR_NOTE,
  },
  {
    id: "c1",
    slug: "c1",
    name: "C1 English",
    cefr: "C1",
    courseSlug: "advanced-communication",
    courseTitle: "Advanced Communication",
    tagline: "Advanced — mastery structures, nuance, style and the capstone.",
    description:
      "The complete C1 programme: inversion, clefts and ellipsis; the calculus of hedging and stance; rhetoric, register and style; sophisticated vocabulary; critical and analytical reading; advanced professional writing; negotiation, debate and interview performance; and the pronunciation, fluency and capstone assessment that closes the 56-chapter journey — eight chapters of mastery.",
    outcomes: [
      "Deploy inversion, clefts and ellipsis for emphasis and economy",
      "Grade certainty precisely and take qualified stances",
      "Write research-style, analytical and persuasive texts with editing discipline",
      "Negotiate, debate, present and interview at professional level",
      "Understand and use connected speech, stress and intonation deliberately",
    ],
    order: -1,
    chapterRange: [49, 56],
    modules: [
      {
        slug: "c1-mastery-structures",
        title: "Mastery Structures",
        description: "Inversion, clefts, ellipsis, and the calculus of nuance and hedging.",
      },
      {
        slug: "c1-style-vocabulary",
        title: "Style and Vocabulary",
        description: "Rhetoric, register and sophisticated vocabulary.",
      },
      {
        slug: "c1-professional-communication",
        title: "Critical and Professional Communication",
        description: "Critical reading, professional writing, advanced speech, pronunciation and the capstone.",
      },
    ],
    cefrNote: CEFR_NOTE,
  },
];

// ---------------------------------------------------------------------------
// The complete blueprint
// ---------------------------------------------------------------------------

export const PROGRAMME_CHAPTERS: ChapterSpec[] = applyV2([
  ...batch01,
  ...batch02,
  ...batch03,
  ...batch04,
  ...batch05,
  ...batch06,
  ...batch07,
  ...batch08,
  ...batch09,
  ...batch10,
  ...batch11,
  ...batch12,
  ...batch13,
  ...batch14,
]);

export interface ProgrammeLesson extends LessonSpec {
  chapter: ChapterSpec;
}

export const PROGRAMME_LESSONS: ProgrammeLesson[] = PROGRAMME_CHAPTERS.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({ ...lesson, chapter })),
);

/** PROMPT 35 production manifest: the honest standard state of all 56 chapters. */
export const V2_MANIFEST = buildManifest(PROGRAMME_CHAPTERS);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function levelOfChapter(chapterNumber: number): ProgrammeLevelDef {
  const level = PROGRAMME_LEVELS.find(
    (l) => chapterNumber >= l.chapterRange[0] && chapterNumber <= l.chapterRange[1],
  );
  if (!level) throw new Error(`Chapter ${chapterNumber} falls outside every level range.`);
  return level;
}

export function levelById(id: ProgrammeLevelId): ProgrammeLevelDef {
  const level = PROGRAMME_LEVELS.find((l) => l.id === id);
  if (!level) throw new Error(`Unknown programme level: ${id}`);
  return level;
}

export function chapterByNumber(n: number): ChapterSpec | undefined {
  return PROGRAMME_CHAPTERS.find((c) => c.number === n);
}

export function chapterById(id: string): ChapterSpec | undefined {
  return PROGRAMME_CHAPTERS.find((c) => c.id === id);
}

export function lessonById(id: string): ProgrammeLesson | undefined {
  return PROGRAMME_LESSONS.find((l) => l.id === id);
}

export function lessonsOfChapter(chapterId: string): LessonSpec[] {
  return PROGRAMME_CHAPTERS.find((c) => c.id === chapterId)?.lessons ?? [];
}

/** The chapter-gate prerequisites: first lesson ids of each chapter. */
export function chapterEntryLessonIds(chapterId: string): string | undefined {
  return chapterById(chapterId)?.lessons[0]?.id;
}

/** Continuous parallel strands: for each level, the lessons practising each strand. */
export function strandLessons(levelId: ProgrammeLevelId, strand: Strand): ProgrammeLesson[] {
  return PROGRAMME_LESSONS.filter(
    (lesson) => lesson.chapter.levelId === levelId && lesson.strands.includes(strand),
  );
}

export function strandCoverage(levelId: ProgrammeLevelId): Record<Strand, number> {
  const coverage = {} as Record<Strand, number>;
  for (const strand of STRANDS) coverage[strand] = strandLessons(levelId, strand).length;
  return coverage;
}

/** Question count of a lesson: v2 practice sets, falling back to legacy questions. */
function lessonQuestionCount(l: LessonSpec): number {
  return l.practiceSets.length > 0
    ? l.practiceSets.reduce((sum, set) => sum + set.questions.length, 0)
    : l.questions.length;
}

export function programmeTotals() {
  const minutes = PROGRAMME_LESSONS.reduce((sum, l) => sum + l.minutes, 0);
  const questions = PROGRAMME_LESSONS.reduce((sum, l) => sum + lessonQuestionCount(l), 0);
  const assignments = PROGRAMME_LESSONS.length; // every lesson has one
  const blocks = PROGRAMME_LESSONS.reduce(
    (sum, l) =>
      sum +
      l.blocks.length +
      lessonQuestionCount(l) +
      (l.practiceSets.length > 0 ? l.practiceSets.length : lessonQuestionCount(l) > 0 ? 1 : 0) +
      (l.assignment ? 1 : 0) +
      (l.homework.length > 0 ? 1 : 0),
    0,
  );
  return {
    levels: PROGRAMME_LEVELS.length,
    chapters: PROGRAMME_CHAPTERS.length,
    lessons: PROGRAMME_LESSONS.length,
    questions,
    assignments,
    blocks,
    hours: Math.round((minutes / 60) * 10) / 10,
    minutes,
  };
}

// ---------------------------------------------------------------------------
// Validation — every data guarantee of PROMPT 34, enforced
// ---------------------------------------------------------------------------

export interface ProgrammeIssue {
  path: string;
  message: string;
}

const LEVEL_CHAPTER_COUNTS: Record<ProgrammeLevelId, number> = {
  "pre-a1": 8,
  a1: 10,
  a2: 10,
  b1: 10,
  b2: 10,
  c1: 8,
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateProgramme(): ProgrammeIssue[] {
  const issues: ProgrammeIssue[] = [];
  const push = (path: string, message: string) => issues.push({ path, message });

  // Global shape.
  if (PROGRAMME_CHAPTERS.length !== 56) {
    push("chapters", `expected 56 chapters, found ${PROGRAMME_CHAPTERS.length}`);
  }
  PROGRAMME_CHAPTERS.forEach((chapter, index) => {
    if (chapter.number !== index + 1) {
      push(`chapters[${index}]`, `chapter numbers must run 1..56 in order (found ${chapter.number})`);
    }
  });

  // Level distribution and grouping.
  for (const level of PROGRAMME_LEVELS) {
    const chapters = PROGRAMME_CHAPTERS.filter((c) => c.levelId === level.id);
    if (chapters.length !== LEVEL_CHAPTER_COUNTS[level.id]) {
      push(
        `level:${level.id}`,
        `expected ${LEVEL_CHAPTER_COUNTS[level.id]} chapters, found ${chapters.length}`,
      );
    }
    const expected = levelOfChapter.bind(null);
    for (let n = level.chapterRange[0]; n <= level.chapterRange[1]; n++) {
      const chapter = PROGRAMME_CHAPTERS.find((c) => c.number === n);
      if (!chapter) continue;
      if (chapter.levelId !== level.id) {
        push(
          `chapter:${chapter.id}`,
          `chapter ${n} should belong to level ${level.id} (found ${chapter.levelId})`,
        );
      }
    }
    void expected;
    // Module wiring.
    const moduleSlugs = new Set(level.modules.map((m) => m.slug));
    for (const chapter of chapters) {
      if (!moduleSlugs.has(chapter.moduleSlug)) {
        push(`chapter:${chapter.id}`, `module "${chapter.moduleSlug}" is not defined for level ${level.id}`);
      }
    }
  }

  // Uniqueness.
  const seen = new Map<string, string>();
  const ensureUnique = (key: string, path: string) => {
    if (seen.has(key)) push(path, `duplicate id "${key}" (also at ${seen.get(key)})`);
    else seen.set(key, path);
  };
  PROGRAMME_CHAPTERS.forEach((chapter) => {
    ensureUnique(chapter.id, `chapter:${chapter.id}`);
    ensureUnique(chapter.slug, `chapter:${chapter.slug}`);
    chapter.lessons.forEach((lesson) => {
      ensureUnique(lesson.id, `lesson:${lesson.id}`);
      ensureUnique(lesson.slug, `lesson:${lesson.slug}`);
    });
  });

  // Lesson titles: unique within chapter and across the programme.
  const globalTitles = new Map<string, string>();
  PROGRAMME_CHAPTERS.forEach((chapter) => {
    const titles = new Set<string>();
    chapter.lessons.forEach((lesson) => {
      if (titles.has(lesson.title)) {
        push(`lesson:${lesson.id}`, `duplicate title within chapter: "${lesson.title}"`);
      }
      titles.add(lesson.title);
      if (globalTitles.has(lesson.title)) {
        push(
          `lesson:${lesson.id}`,
          `title "${lesson.title}" already used at ${globalTitles.get(lesson.title)} — lessons must not be near-identical clones`,
        );
      } else {
        globalTitles.set(lesson.title, lesson.id);
      }
    });
  });

  // Chapter-level requirements.
  PROGRAMME_CHAPTERS.forEach((chapter) => {
    const p = `chapter:${chapter.id}`;
    if (chapter.description.length < 80) push(p, "description must be a real paragraph (80+ chars)");
    if (chapter.objectives.length < 3) push(p, "at least 3 learning objectives");
    if (chapter.estimatedHours <= 0) push(p, "estimated duration required");
    if (chapter.lessonCount !== chapter.lessons.length) {
      push(p, `lessonCount (${chapter.lessonCount}) != lessons.length (${chapter.lessons.length})`);
    }
    if (chapter.lessons.length < 4 || chapter.lessons.length > 8) {
      push(p, `chapters have 4-8 lessons (found ${chapter.lessons.length})`);
    }
    if (chapter.skills.length === 0) push(p, "skills developed required");
    if (chapter.strands.length === 0) push(p, "strand coverage required");
    if (chapter.assessmentRequirements.length < 40) push(p, "assessment requirements required");
    if (chapter.completionCriteria.length < 40) push(p, "completion criteria required");
    if (chapter.productionBatch < 1 || chapter.productionBatch > 14) push(p, "production batch must be 1-14");
    // Prerequisites: earlier chapters only.
    for (const prereq of chapter.prerequisites) {
      const target = chapterById(prereq);
      if (!target) push(p, `prerequisite "${prereq}" does not exist`);
      else if (target.number >= chapter.number) {
        push(p, `prerequisite "${prereq}" must be an EARLIER chapter`);
      }
    }
    if (chapter.number === 1 && chapter.prerequisites.length > 0) {
      push(p, "the first chapter has no prerequisites");
    }
    // Chapter strands must be covered by its lessons.
    const lessonStrands = new Set(chapter.lessons.flatMap((l) => l.strands));
    for (const strand of chapter.strands) {
      if (!lessonStrands.has(strand)) {
        push(p, `chapter declares strand "${strand}" but no lesson practises it`);
      }
    }
    // Duration consistency: estimated hours must cover lesson minutes plus
    // up to 1.5h of chapter review/assessment — and never undercount lessons.
    const minutes = chapter.lessons.reduce((sum, l) => sum + l.minutes, 0);
    const lower = minutes / 60 - 0.25;
    const upper = minutes / 60 + 1.5;
    if (chapter.estimatedHours < lower || chapter.estimatedHours > upper) {
      push(
        p,
        `estimatedHours (${chapter.estimatedHours}h) inconsistent with lesson minutes (${minutes}m): lessons ±0.25h to lessons +1.5h of review`,
      );
    }
  });

  // Lesson-level requirements.
  const lessonIndex = new Map(PROGRAMME_LESSONS.map((l) => [l.id, l]));
  const globalOrder = new Map(
    PROGRAMME_LESSONS.map((l, i) => [l.id, i] as const),
  );
  PROGRAMME_LESSONS.forEach((lesson) => {
    const p = `lesson:${lesson.id}`;
    const [min, max] = DIFFICULTY_BANDS[lesson.chapter.levelId];
    if (lesson.difficulty < min || lesson.difficulty > max) {
      push(p, `difficulty ${lesson.difficulty} outside the ${lesson.chapter.levelId} band [${min}, ${max}]`);
    }
    if (lesson.minutes < 15 || lesson.minutes > 60) push(p, "lesson length must be 15-60 minutes");
    if (lesson.description.length < 20) push(p, "description too short to be real");
    if (lesson.outcomes.length < 2) push(p, "at least 2 learning outcomes");
    if (lesson.skills.length === 0) push(p, "skills required");
    if (lesson.strands.length === 0) push(p, "strands required");
    if (lesson.blocks.length < 3) push(p, "at least 3 teaching blocks — never a shell of headings");
    if (!lesson.assignment) push(p, "assignment required for lesson completion");
    if (lesson.assignment && (lesson.assignment.minWords <= 0 || lesson.assignment.maxWords < lesson.assignment.minWords)) {
      push(p, "assignment word range invalid");
    }
    for (const block of lesson.blocks) {
      if ("text" in block && typeof block.text === "string" && block.text.trim().length === 0) {
        push(p, "empty text block");
      }
    }
    for (const prereq of lesson.prerequisites) {
      const target = lessonIndex.get(prereq);
      if (!target) push(p, `lesson prerequisite "${prereq}" does not exist`);
      else if ((globalOrder.get(prereq) ?? 0) >= (globalOrder.get(lesson.id) ?? 0)) {
        push(p, `lesson prerequisite "${prereq}" must come earlier in the sequence`);
      }
    }
    for (const question of lesson.questions) {
      if (!question.type) push(p, "question missing type");
      if (!question.prompt || question.prompt.length < 8) push(p, "question prompt too short");
    }
  });

  // Every chapter's review lesson carries bank questions (>= 2 per chapter).
  PROGRAMME_CHAPTERS.forEach((chapter) => {
    const total = chapter.lessons.reduce((sum, l) => sum + l.questions.length, 0);
    if (total < 2) {
      push(`chapter:${chapter.id}`, "every chapter needs at least 2 bank questions on its review lesson");
    }
  });

  // Continuous parallel strands: every level practises every strand.
  for (const level of PROGRAMME_LEVELS) {
    const coverage = strandCoverage(level.id);
    for (const strand of STRANDS) {
      if (coverage[strand] < 2) {
        push(
          `level:${level.id}:strand:${strand}`,
          `parallel strand covered by only ${coverage[strand]} lessons (need >= 2 per level)`,
        );
      }
    }
  }

  // Slug sanity for the CMS.
  for (const chapter of PROGRAMME_CHAPTERS) {
    if (!SLUG_RE.test(chapter.slug)) push(`chapter:${chapter.id}`, "invalid slug");
    for (const lesson of chapter.lessons) {
      if (!SLUG_RE.test(lesson.slug)) push(`lesson:${lesson.id}`, "invalid slug");
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// PROMPT 35 — v2 teaching-standard validation (v2-full chapters only)
// ---------------------------------------------------------------------------

/**
 * Enforce the full lesson standard on every chapter delivered at `v2-full`:
 * lesson introduction + prerequisites, concept teaching (steps + rules),
 * 8+ worked examples with explanations and varied life domains, real-life
 * usage, comparison, common mistakes (wrong → right → reason), guided
 * practice WITH hints, independent practice WITHOUT hints, four-skill
 * integration, validated Urdu/Hindi support (glossary-bound), summary,
 * revision questions from earlier lessons, assignment and homework.
 * Beginner reading difficulty is checked for Pre-A1/A1 lessons.
 */
export function validateV2Standard(): ProgrammeIssue[] {
  const issues: ProgrammeIssue[] = [];
  const v2Chapters = v2CompletedChapterIds();
  const validTranslations = glossaryTranslationSet();

  // Glossary itself: complete entries, no duplicate keys.
  const glossaryKeys = new Set<string>();
  for (const entry of CONTENT_GLOSSARY) {
    const p = `glossary:${entry.english}`;
    if (!entry.ur?.trim() || !entry.hi?.trim()) issues.push({ path: p, message: "every glossary entry needs both Urdu and Hindi" });
    if (glossaryKeys.has(entry.english)) issues.push({ path: p, message: "duplicate glossary key" });
    glossaryKeys.add(entry.english);
  }

  for (const chapter of PROGRAMME_CHAPTERS) {
    if (!v2Chapters.includes(chapter.id)) continue;
    issues.push(...validateV2LessonsOfChapter(chapter, validTranslations));
  }
  return issues;
}

/**
 * PROMPT 57: the per-chapter lesson checks of the v2 standard, exposed so a
 * chapter file can be validated standalone BEFORE it is registered in the
 * production manifest (scripts/p57-check-chapter.ts). Same rules the live
 * manifest validation runs — no weaker copy.
 */
export function validateV2LessonsOfChapter(
  chapter: ChapterSpec,
  validTranslations: Set<string>,
): ProgrammeIssue[] {
  const issues: ProgrammeIssue[] = [];
  const push = (path: string, message: string) => issues.push({ path, message });
  const LIFE_DOMAINS = [
    "everyday", "education", "family", "home", "travel", "shopping",
    "work", "social", "technology", "food", "sport", "health", "nature",
  ];

  {
    for (const lesson of chapter.lessons) {
      const p = `lesson:${lesson.id}`;
      const types = lesson.blocks.map((b) => b.type);
      const count = (t: string) => types.filter((x) => x === t).length;

      // --- Standard sections ------------------------------------------------
      if (types[0] !== "lesson-intro") push(p, "v2 lessons open with a lesson-intro block");
      if (count("lesson-intro") !== 1) push(p, "exactly one lesson-intro block expected");
      const intro = lesson.blocks.find((b) => b.type === "lesson-intro") as
        | { beforeYouStart?: string[] }
        | undefined;
      if (lesson.slug === "ch-01-l-01") {
        // The very first lesson has no prior lessons — recap is optional.
      } else if (!intro?.beforeYouStart || intro.beforeYouStart.length < 2) {
        push(p, "lesson-intro must recap at least 2 prerequisite abilities");
      }
      if (count("steps") < 1) push(p, "at least one step-by-step teaching block (steps)");
      const stepsBlocks = lesson.blocks.filter((b) => b.type === "steps") as unknown as {
        steps: unknown[];
      }[];
      if (stepsBlocks.some((s) => s.steps.length < 3)) {
        push(p, "a steps block must break the concept into 3+ steps");
      }
      if (count("grammar-rule") < 1 && count("table") < 1) {
        push(p, "rules and patterns need a grammar-rule or table block");
      }
      if (count("usage") < 1) push(p, "real-life usage block (usage) required");
      if (count("comparison") < 1) push(p, "comparison block required (prevent confusion)");
      if (count("summary") !== 1) push(p, "exactly one summary block expected");
      const summary = lesson.blocks.find((b) => b.type === "summary") as unknown as { points: string[] };
      if (summary.points.length < 4) push(p, "summary needs at least 4 takeaways");
      if (count("four-skills") !== 1) push(p, "exactly one four-skills block required");
      const fs = lesson.blocks.find((b) => b.type === "four-skills") as unknown as {
        reading: { text: string };
        writing: { task: string };
        listening: { script: string };
        speaking: { task: string };
      };
      if (fs && (!fs.reading.text.trim() || !fs.writing.task.trim() || !fs.listening.script.trim() || !fs.speaking.task.trim())) {
        push(p, "four-skills block needs all four skills filled in");
      }
      if (count("language-support") < 1) push(p, "language-support block with validated Urdu/Hindi required");
      if (lesson.slug !== "ch-01-l-01" && count("revision") < 1) {
        push(p, "revision questions from earlier lessons required (first lesson of the programme exempt)");
      }
      const revision = lesson.blocks.find((b) => b.type === "revision") as unknown as {
        items: { question: string; options: string[]; correctIndex: number; explanation: string }[];
      } | undefined;
      if (revision) {
        if (revision.items.length < 3) push(p, "revision quiz needs at least 3 questions");
        for (const [i, item] of revision.items.entries()) {
          if (item.options.length < 2) push(`${p}:revision[${i}]`, "revision item needs 2+ options");
          if (item.correctIndex < 0 || item.correctIndex >= item.options.length) {
            push(`${p}:revision[${i}]`, "revision correctIndex out of range");
          }
          if (!item.explanation.trim()) push(`${p}:revision[${i}]`, "revision item needs an explanation");
        }
      }

      // --- Common mistakes: wrong → right → reason --------------------------
      const mistakes = lesson.blocks.filter((b) => b.type === "mistakes") as unknown as {
        items: { wrong: string; right: string; reason: string }[];
      }[];
      const mistakeItems = mistakes.flatMap((m) => m.items);
      if (mistakes.length < 1 || mistakeItems.length < 3) {
        push(p, "common-mistakes block with at least 3 wrong→right→reason items required");
      }
      for (const [i, item] of mistakeItems.entries()) {
        if (!item.wrong.trim() || !item.right.trim() || !item.reason.trim()) {
          push(`${p}:mistakes[${i}]`, "each mistake needs wrong, right AND reason");
        }
        if (item.wrong.trim() && item.wrong.trim() === item.right.trim()) {
          push(`${p}:mistakes[${i}]`, "wrong and right are identical");
        }
      }

      // --- Examples: 8+ worked examples, explained, varied domains ----------
      const exampleItems = lesson.blocks
        .filter((b) => b.type === "example")
        .flatMap((b) => (b as unknown as { items: { english: string; note?: string; domain?: string }[] }).items);
      const stepExamples = stepsBlocks.flatMap(
        (s) => (s as unknown as { steps: { examples?: { english: string }[] }[] }).steps.flatMap((st) => st.examples ?? []),
      );
      const totalExamples = exampleItems.length + stepExamples.length;
      if (totalExamples < 8) {
        push(p, `v2 lessons need at least 8 worked examples (found ${totalExamples})`);
      }
      const withNotes = exampleItems.filter((e) => e.note?.trim()).length;
      if (exampleItems.length >= 8 && withNotes < 6) {
        push(p, `most examples need teaching notes ("why it works") — ${withNotes}/${exampleItems.length}`);
      }
      const domains = new Set(exampleItems.map((e) => e.domain).filter(Boolean));
      if (exampleItems.length >= 8 && domains.size < 4) {
        push(p, `examples must span at least 4 life domains (found ${domains.size})`);
      }
      for (const [i, e] of exampleItems.entries()) {
        if (e.domain && !LIFE_DOMAINS.includes(e.domain)) {
          push(`${p}:examples[${i}]`, `unknown life domain "${e.domain}"`);
        }
      }

      // --- Practice sets: guided with hints, independent without ------------
      const guided = lesson.practiceSets.filter((s) => s.variant === "guided");
      const independent = lesson.practiceSets.filter((s) => s.variant === "independent");
      if (guided.length < 1 || independent.length < 1) {
        push(p, "v2 lessons need a guided practice set AND an independent practice set");
      }
      for (const [si, set] of lesson.practiceSets.entries()) {
        if (set.questions.length < 3) {
          push(`${p}:practice[${si}]`, "a practice set needs at least 3 questions");
        }
        for (const [qi, q] of set.questions.entries()) {
          const hints = (q as unknown as { hints?: string[] }).hints ?? [];
          if (set.variant === "guided" && hints.length < 1) {
            push(`${p}:practice[${si}]:q${qi}`, "guided practice questions must have a hint");
          }
          if (set.variant === "independent" && hints.length > 0) {
            push(`${p}:practice[${si}]:q${qi}`, "independent practice questions must not reveal hints");
          }
          if (!(q as unknown as { feedback?: { explanation?: string } }).feedback?.explanation) {
            push(`${p}:practice[${si}]:q${qi}`, "every question needs a feedback explanation");
          }
        }
      }

      // --- Multilingual support: every translation from the glossary --------
      const support = lesson.blocks.find((b) => b.type === "language-support") as unknown as {
        entries: { english: string; ur?: string; hi?: string }[];
      } | undefined;
      if (support) {
        for (const [i, entry] of support.entries.entries()) {
          if (!entry.english.trim()) push(`${p}:support[${i}]`, "empty English source");
          if (entry.ur && !validTranslations.has(entry.ur)) {
            push(`${p}:support[${i}]`, "Urdu gloss is not in the validated glossary — add it to v2/glossary.ts first");
          }
          if (entry.hi && !validTranslations.has(entry.hi)) {
            push(`${p}:support[${i}]`, "Hindi gloss is not in the validated glossary — add it to v2/glossary.ts first");
          }
        }
      }

      // --- Homework + outcomes -----------------------------------------------
      if (lesson.homework.length < 2) push(p, "at least 2 homework tasks");
      if (lesson.outcomes.length < 3) push(p, "at least 3 learning outcomes");

      // --- Beginner reading difficulty (Pre-A1/A1 v2 lessons) ----------------
      if (chapter.levelId === "pre-a1" || chapter.levelId === "a1") {
        const prose = lesson.blocks
          .filter((b) => b.type === "text" || b.type === "lesson-intro")
          .map((b) => (b as unknown as { text: string }).text)
          .join(" ");
        const sentences = prose
          .split(/(?<=[.!?])\s+/)
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
        if (sentences.length > 0) {
          const lengths = sentences.map((s) => s.split(/\s+/).length);
          const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
          const max = Math.max(...lengths);
          if (avg > 20) push(p, `beginner prose averages ${avg.toFixed(1)} words/sentence (target <= 20)`);
          if (max > 34) {
            const worst = sentences[lengths.indexOf(max)].slice(0, 60);
            push(p, `beginner sentence too long (${max} words): "${worst}…" (max 34)`);
          }
        }
      }

      // --- No placeholders -----------------------------------------------------
      for (const [bi, b] of lesson.blocks.entries()) {
        const json = JSON.stringify(b);
        if (/TODO|XXX|FIXME|待补充|lorem ipsum/i.test(json)) {
          push(`${p}:block[${bi}]`, "placeholder text found in block");
        }
      }
    }
  }
  return issues;
}
