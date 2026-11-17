/**
 * Server-side search index builder.
 *
 * `buildStaticSearchIndex()` derives entries from the platform's content
 * modules (curriculum, grammar, vocabulary, the four skill labs, AI tutor
 * modes and public pages) — all real destinations, no synthetic filler.
 * `buildSearchIndex()` additionally adds the live course catalogue from the
 * database.
 *
 * Grading data (correct answers, accepted inputs) is NEVER copied into an
 * entry: only public titles, descriptions, prompts and navigation facts.
 */

import {
  exercises,
  getLessonExerciseIds,
  lessons,
  levels,
  type Exercise,
  type LevelId,
} from "@/data/curriculum";
import { POS_LESSON_MAP, partsOfSpeech } from "@/data/grammar/parts-of-speech";
import { tenses } from "@/data/grammar/tenses";
import { readingCategories, readingTexts } from "@/data/reading";
import { listeningActivities, listeningStages } from "@/data/listening";
import { conversationScenarios, speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { tutorModes } from "@/data/tutor/modes";
import { vocabCategories, vocabWords } from "@/data/vocabulary";
import { db } from "@/lib/db";
import type { SearchEntry, SearchSkill } from "./types";
import { computePlatformStats } from "@/lib/platform-stats";

const LESSON_DIFFICULTY: Record<LevelId, string> = {
  "pre-a1": "Pre-A1",
  a1: "A1",
  "grammar-core": "A2",
  a2: "A2",
};

function tierLabel(tier: string): string {
  return tier.charAt(0).toUpperCase() + tier.slice(1);
}

/** Curriculum learning paths (one entry per level). */
function pathEntries(): SearchEntry[] {
  return levels.flatMap((level) => {
    const unitTitles = level.units.map((u) => u.title);
    const lessonCount = level.units.reduce(
      (sum, u) => sum + u.lessonSlugs.length,
      0,
    );
    return [
      {
        id: `path:${level.id}`,
        category: "Paths" as const,
        title: level.name,
        subtitle: `Learning path · ${lessonCount} lesson${lessonCount === 1 ? "" : "s"}`,
        description: level.tagline,
        href: `#/library/${level.id}`,
        difficulty: LESSON_DIFFICULTY[level.id],
        skill: "general" as SearchSkill,
        keywords: unitTitles,
      },
    ];
  });
}

/** The 20 curriculum lessons. */
function lessonEntries(): SearchEntry[] {
  const levelById = new Map(levels.map((l) => [l.id, l]));
  const unitBySlug = new Map<string, string>();
  for (const level of levels) {
    for (const unit of level.units) {
      for (const slug of unit.lessonSlugs) unitBySlug.set(slug, unit.title);
    }
  }
  return lessons.map((lesson) => ({
    id: `lesson:${lesson.slug}`,
    category: "Lessons" as const,
    title: lesson.title,
    subtitle: `${levelById.get(lesson.levelId)?.name ?? ""} · Unit ${lesson.unit}`,
    description: lesson.description,
    href: `#/lesson/${lesson.slug}`,
    difficulty: LESSON_DIFFICULTY[lesson.levelId] ?? "A1",
    skill: "general" as SearchSkill,
    keywords: [unitBySlug.get(lesson.slug) ?? "", levelById.get(lesson.levelId)?.name ?? ""],
  }));
}

/**
 * Every graded exercise attached to a lesson, linked to that lesson.
 * Spare "bank" exercises (not referenced by any lesson) are excluded —
 * they have no route destination of their own. Only the instruction
 * (`prompt`) is indexed; answers and hints stay server-side.
 */
function exerciseEntries(): SearchEntry[] {
  const lessonByExerciseId = new Map<string, { slug: string; title: string }>();
  for (const lesson of lessons) {
    for (const exId of getLessonExerciseIds(lesson)) {
      lessonByExerciseId.set(exId, { slug: lesson.slug, title: lesson.title });
    }
  }
  const seen = new Set<string>();
  const entries: SearchEntry[] = [];
  for (const exercise of exercises as Exercise[]) {
    const parent = lessonByExerciseId.get(exercise.id);
    if (!parent || seen.has(exercise.id)) continue;
    seen.add(exercise.id);
    entries.push({
      id: `exercise:${exercise.id}`,
      category: "Exercises" as const,
      title: exercise.prompt.length > 90 ? `${exercise.prompt.slice(0, 87)}…` : exercise.prompt,
      subtitle: `Exercise in “${parent.title}”`,
      href: `#/lesson/${parent.slug}`,
      difficulty: tierLabel(exercise.difficulty),
      skill: "general" as SearchSkill,
      keywords: [exercise.type.replace(/-/g, " "), ...(exercise.tags ?? [])],
    });
  }
  return entries;
}

/** Grammar: 8 parts of speech, 12 tenses and the three grammar tools. */
function grammarEntries(): SearchEntry[] {
  const pos = partsOfSpeech.map((posModule) => ({
    id: `pos:${posModule.id}`,
    category: "Grammar" as const,
    title: posModule.name,
    subtitle: "Part of speech",
    description: posModule.definition,
    href: `#/lesson/${POS_LESSON_MAP[posModule.id] ?? "grammar-pos-1"}`,
    difficulty: "A1+",
    skill: "grammar" as SearchSkill,
    keywords: posModule.categories.map((c) => c.name),
  }));

  const tenseEntries = tenses.map((tense) => ({
    id: `tense:${tense.id}`,
    category: "Grammar" as const,
    title: tense.name,
    subtitle: "Tense",
    description: `Meaning, structure, verb forms and time expressions — in the Tense Explorer.`,
    href: "#/grammar/tenses",
    difficulty: "A1+",
    skill: "grammar" as SearchSkill,
  }));

  const tools: SearchEntry[] = [
    {
      id: "tool:tense-explorer",
      category: "Grammar",
      title: "Tense Explorer",
      subtitle: "Grammar tool",
      description: "All 12 tenses compared side by side — meaning first, formulas second.",
      href: "#/grammar/tenses",
      difficulty: "A1+",
      skill: "grammar",
      keywords: ["compare tenses", "verb forms", "time expressions"],
    },
    {
      id: "tool:error-clinic",
      category: "Grammar",
      title: "Grammar Error Clinic",
      subtitle: "Grammar tool",
      description: "Submit your own sentences and get instant corrections with explanations.",
      href: "#/grammar/clinic",
      difficulty: "B1+",
      skill: "grammar",
      keywords: ["correct my sentence", "correction", "mistakes"],
    },
    {
      id: "tool:sentence-lab",
      category: "Grammar",
      title: "Sentence Lab",
      subtitle: "Grammar tool",
      description: "Seven construction stages with word tiles, structure inspection and challenges.",
      href: "#/lab",
      difficulty: "A2",
      skill: "grammar",
      keywords: ["build sentences", "word tiles", "sentence structure"],
    },
  ];

  return [...pos, ...tenseEntries, ...tools];
}

/** Vocabulary: 135 words + the 12 topic lists. */
function vocabularyEntries(): SearchEntry[] {
  const categoryById = new Map(vocabCategories.map((c) => [c.id, c]));

  const words = vocabWords.map((word) => ({
    id: `word:${word.id}`,
    category: "Vocabulary" as const,
    title: word.word,
    subtitle: categoryById.get(word.categoryId)?.name ?? "Vocabulary",
    description: word.meaning,
    href: `#/vocabulary/explore/${word.id}`,
    difficulty: "A1+",
    skill: "vocabulary" as SearchSkill,
    keywords: word.synonyms ?? [],
  }));

  const lists = vocabCategories.map((category) => ({
    id: `wordlist:${category.id}`,
    category: "Vocabulary" as const,
    title: category.name,
    subtitle: `Word list · ${vocabWords.filter((w) => w.categoryId === category.id).length} words`,
    description: category.description,
    href: `#/vocabulary/explore/${category.id}`,
    difficulty: "A1+",
    skill: "vocabulary" as SearchSkill,
  }));

  return [...words, ...lists];
}

/** The four skill laboratories. */
function practiceEntries(): SearchEntry[] {
  const readingCategory = new Map(readingCategories.map((c) => [c.id, c.name]));
  const reading = readingTexts.map((text) => ({
    id: `reading:${text.slug}`,
    category: "Reading" as const,
    title: text.title,
    subtitle: `Reading · ${readingCategory.get(text.category) ?? text.category}`,
    description: text.description,
    href: `#/reading/${text.slug}`,
    difficulty: tierLabel(text.level),
    skill: "reading" as SearchSkill,
    keywords: text.tags ?? [],
  }));

  const stageById = new Map(listeningStages.map((s) => [s.id, s.name]));
  const listening = listeningActivities.map((activity) => ({
    id: `listening:${activity.slug}`,
    category: "Listening" as const,
    title: activity.title,
    subtitle: `Listening · ${stageById.get(activity.stage) ?? activity.stage}`,
    description: activity.description,
    href: `#/listening/${activity.slug}`,
    skill: "listening" as SearchSkill,
    keywords: activity.tags ?? [],
  }));

  const speaking = speakingActivities.map((activity) => ({
    id: `speaking:${activity.slug}`,
    category: "Speaking" as const,
    title: activity.title,
    subtitle: `Speaking · ${tierLabel(activity.tier)}`,
    description: activity.description,
    href: `#/speaking/activity/${activity.slug}`,
    difficulty: tierLabel(activity.tier),
    skill: "speaking" as SearchSkill,
    keywords: activity.tags ?? [],
  }));

  const conversations = conversationScenarios.map((scenario) => ({
    id: `scenario:${scenario.id}`,
    category: "Speaking" as const,
    title: scenario.title,
    subtitle: "AI role-play",
    description: scenario.description,
    href: "#/speaking/conversations",
    difficulty: "Beg–Adv",
    skill: "speaking" as SearchSkill,
    keywords: [scenario.category, ...scenario.levels.map((l) => l.level)],
  }));

  const writing = writingAssignments.map((assignment) => ({
    id: `writing:${assignment.slug}`,
    category: "Writing" as const,
    title: assignment.title,
    subtitle: `Writing · ${tierLabel(assignment.tier)}`,
    description: assignment.description,
    href: `#/writing/a/${assignment.slug}`,
    difficulty: tierLabel(assignment.tier),
    skill: "writing" as SearchSkill,
    keywords: assignment.tags ?? [],
  }));

  return [...reading, ...listening, ...speaking, ...conversations, ...writing];
}

/** The nine AI tutor modes + the Error Clinic as a correction tool. */
function aiToolEntries(): SearchEntry[] {
  const modes = tutorModes.map((mode) => ({
    id: `tutor-mode:${mode.id}`,
    category: "AI tools" as const,
    title: mode.label,
    subtitle: "AI tutor mode",
    description: mode.tagline,
    href: `#/tutor/m/${mode.id}`,
    difficulty: "All levels",
    skill: "general" as SearchSkill,
    keywords: ["ai", "tutor", "chat"],
  }));
  return [
    ...modes,
    {
      id: "tool:sentence-corrector",
      category: "AI tools" as const,
      title: "Sentence Corrector",
      subtitle: "Error Clinic",
      description: "Instant corrections of your own sentences, with the rule explained.",
      href: "#/grammar/clinic",
      difficulty: "All levels",
      skill: "grammar" as SearchSkill,
      keywords: ["correct my sentence", "correction", "fix"],
    },
  ];
}

/** The Exam Academy surfaces. */
function examEntries(): SearchEntry[] {
  return [
    {
      id: "exam:academy",
      category: "Exam prep",
      title: "Exam Academy",
      subtitle: "IELTS & TOEFL preparation",
      description: "Eight-module IELTS programme, TOEFL iBT preparation, adaptive study planner and full mock exams.",
      href: "#/exams",
      difficulty: "B1+",
      skill: "general",
      keywords: ["ielts", "toefl", "exam", "mock", "band score"],
    },
    {
      id: "exam:ielts",
      category: "Exam prep",
      title: "IELTS preparation",
      subtitle: "Exam Academy",
      description: "Academic and General Training modules with six-mode mock simulation.",
      href: "#/exams/course/IELTS",
      difficulty: "B1+",
      skill: "general",
      keywords: ["ielts academic", "ielts general training", "band"],
    },
    {
      id: "exam:toefl",
      category: "Exam prep",
      title: "TOEFL iBT preparation",
      subtitle: "Exam Academy",
      description: "Section-by-section TOEFL iBT preparation with mock simulation.",
      href: "#/exams/course/TOEFL_IBT",
      difficulty: "B1+",
      skill: "general",
      keywords: ["toefl ibt", "toefl"],
    },
    {
      id: "exam:planner",
      category: "Exam prep",
      title: "Study planner",
      subtitle: "Exam Academy",
      description: "An adaptive plan from your target date and current level — honest readiness estimates.",
      href: "#/exams/planner",
      difficulty: "B1+",
      skill: "general",
      keywords: ["plan", "schedule", "readiness"],
    },
    {
      id: "exam:toefl-library",
      category: "Exam prep",
      title: "TOEFL practice library",
      subtitle: "Exam Academy",
      description: "400 original TOEFL exercises across all four sections: Reading and Listening with locked transcripts, Build a Sentence, Write an Email and Academic Discussion with AI-assisted educational estimates, Listen and Repeat with repetition analysis, and Take an Interview.",
      href: "#/exams/toefl/library",
      difficulty: "B1+",
      skill: "general",
      keywords: ["toefl reading practice", "toefl listening practice", "toefl writing practice", "toefl speaking practice", "complete the words", "read in daily life", "academic passage", "listen and choose a response", "build a sentence", "write an email", "academic discussion", "listen and repeat", "take an interview"],
    },
    {
      id: "exam:mocks",
      category: "Exam prep",
      title: "Mock exams",
      subtitle: "Exam Academy",
      description: "Full-length timed mocks with section scores and band estimates.",
      href: "#/exams/mocks",
      difficulty: "B1+",
      skill: "general",
      keywords: ["mock", "practice test", "timed"],
    },
    {
      id: "exam:evaluator",
      category: "Exam prep",
      title: "Evaluation Studio",
      subtitle: "Exam Academy",
      description:
        "AI-assisted evaluation of any writing or speaking response — criterion estimates, corrections, model response and a revision loop for IELTS and TOEFL tasks.",
      href: "#/exams/evaluator",
      difficulty: "B1+",
      skill: "general",
      keywords: ["evaluation", "feedback", "writing feedback", "speaking feedback", "band estimate", "ielts writing", "toefl writing"],
    },
    {
      id: "exam:question-bank",
      category: "Exam prep",
      title: "Original question bank",
      subtitle: "Exam Academy",
      description:
        "950 original, machine-validated practice items across IELTS and TOEFL — searchable by examination, version, section, official task family, difficulty and twelve topic domains, with deep links into every player. Writing and Speaking items carry their rubrics and reference examples.",
      href: "#/exams/bank",
      difficulty: "B1+",
      skill: "general",
      keywords: ["question bank", "search questions", "ielts practice", "toefl practice", "find exercises", "task family", "topic practice", "ielts listening practice", "ielts reading practice", "ielts writing practice", "ielts speaking practice"],
    },
  ];
}

/** Hub pages and static pages. */
function pageEntries(): SearchEntry[] {
  const stats = computePlatformStats();
  return [
    { id: "page:library", category: "Pages", title: "Learning path", subtitle: "Library", description: "Every level, unit and lesson in one guided path.", href: "#/library", skill: "general" },
    { id: "page:grammar", category: "Pages", title: "Grammar School", subtitle: "Grammar", description: "The eight parts of speech, the Tense Explorer and the Error Clinic.", href: "#/grammar", skill: "grammar" },
    { id: "page:vocabulary", category: "Pages", title: "Word World", subtitle: "Vocabulary", description: `${stats.words} words with spaced repetition, flashcards and six challenge types.`, href: "#/vocabulary", skill: "vocabulary" },
    { id: "page:speaking", category: "Pages", title: "Speaking Lab", subtitle: "Practice", description: `${stats.speakingActivities} speaking activities, 11 AI role-plays and pronunciation training.`, href: "#/speaking", skill: "speaking" },
    { id: "page:listening", category: "Pages", title: "Listening Lab", subtitle: "Practice", description: `${stats.listeningActivities} audio activities with graded exercises.`, href: "#/listening", skill: "listening" },
    { id: "page:reading", category: "Pages", title: "Reading Room", subtitle: "Practice", description: `${stats.readingTexts} graded texts across four levels, with comprehension checks.`, href: "#/reading", skill: "reading" },
    { id: "page:writing", category: "Pages", title: "Writing Studio", subtitle: "Practice", description: `${stats.writingAssignments} guided assignments with AI feedback that teaches.`, href: "#/writing", skill: "writing" },
    { id: "page:courses", category: "Pages", title: "Courses", subtitle: "Catalogue", description: "Structured courses from our teaching team — enrol to track progress.", href: "#/courses", skill: "general" },
    { id: "page:progress", category: "Pages", title: "My Progress", subtitle: "Dashboard", description: "Dashboards, skills, activity, revision and awards.", href: "#/progress", skill: "general" },
    { id: "page:tips", category: "Pages", title: "Learning Tips", subtitle: "Resource", description: "How to learn here — routines, repetition and honest measurement.", href: "#/tips", skill: "general" },
    { id: "page:about", category: "Pages", title: "About TalkSy", subtitle: "Page", description: "What TalkSy is and how it teaches.", href: "#/about", skill: "general" },
    { id: "page:contact", category: "Pages", title: "Contact", subtitle: "Page", description: "Get in touch with the team.", href: "#/contact", skill: "general" },
  ];
}

/** The static index (no DB access) — used by tests and the API route. */
export function buildStaticSearchIndex(): SearchEntry[] {
  return [
    ...pathEntries(),
    ...lessonEntries(),
    ...exerciseEntries(),
    ...grammarEntries(),
    ...vocabularyEntries(),
    ...practiceEntries(),
    ...aiToolEntries(),
    ...examEntries(),
    ...pageEntries(),
  ];
}

/**
 * The live course catalogue as search entries: the courses themselves, their
 * chapters (units) and every published lesson — one DB query for the whole
 * tree. Only titles/descriptions are indexed; lesson content stays gated.
 */
async function catalogueEntries(): Promise<SearchEntry[]> {
  const courses = await db.cmsCourse.findMany({
    where: { live: true },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    include: {
      level: true,
      modules: {
        orderBy: { order: "asc" },
        include: {
          units: {
            orderBy: { order: "asc" },
            include: {
              lessons: {
                where: { live: true },
                orderBy: { order: "asc" },
                select: { slug: true, title: true, description: true },
              },
            },
          },
        },
      },
    },
  });

  const entries: SearchEntry[] = [];
  for (const course of courses) {
    entries.push({
      id: `course:${course.slug}`,
      category: "Courses",
      title: course.title,
      subtitle: `Course · ${course.level?.name ?? "Self-paced"}`,
      description: course.description,
      href: `#/course/${course.slug}`,
      difficulty: course.level?.name ?? undefined,
      skill: "general",
      keywords: ["course", "enrol"],
    });
    for (const courseModule of course.modules) {
      for (const unit of courseModule.units) {
        entries.push({
          id: `cms-unit:${unit.id}`,
          category: "Courses",
          title: unit.title,
          subtitle: `Chapter · ${course.title}`,
          description: unit.description,
          href: `#/course/${course.slug}`,
          difficulty: course.level?.name ?? undefined,
          skill: "general",
          keywords: [course.title, courseModule.title, "chapter"],
        });
        for (const lesson of unit.lessons) {
          entries.push({
            id: `cms-lesson:${lesson.slug}`,
            category: "Lessons",
            title: lesson.title,
            subtitle: `${course.title} · ${unit.title}`,
            description: lesson.description,
            href: `#/course-lesson/${lesson.slug}`,
            difficulty: course.level?.name ?? undefined,
            skill: "general",
            keywords: [course.title, courseModule.title, unit.title],
          });
        }
      }
    }
  }
  return entries;
}

/** Full index including the live course catalogue from the database. */
export async function buildSearchIndex(): Promise<SearchEntry[]> {
  const staticEntries = buildStaticSearchIndex();
  try {
    return [...(await catalogueEntries()), ...staticEntries];
  } catch {
    // The catalogue is a nice-to-have: the rest of the index stays usable.
    return staticEntries;
  }
}
