/**
 * The catalogue service (PROMPT 32) — ONE server-side builder for the whole
 * discovery ecosystem.
 *
 * Sources of truth (never duplicated):
 *  · curriculum module  → short lessons, path chapters, path progress
 *  · CMS database       → complete courses, CMS lessons, chapters, prerequisites
 *  · grammar modules    → guides (8 parts of speech, tense comparison, sentence structure)
 *  · practice surfaces  → labs (reading/listening/speaking/writing/sentence/vocab/clinic/spelling/pronunciation)
 *  · speaking data      → 11 conversation simulators
 *
 * All counts, durations and completion statuses are computed here from real
 * data. No popularity counters, no review scores, no fabricated levels.
 */

import { db } from "@/lib/db";
import {
  getLesson,
  lessons as curriculumLessons,
  levels as curriculumLevels,
  type LevelId,
} from "@/data/curriculum";
import { computeLessonStatus, parseSectionsCompleted } from "@/lib/engine/progress";
import { POS_LESSON_MAP, partsOfSpeech } from "@/data/grammar/parts-of-speech";
import { tenses } from "@/data/grammar/tenses";
import { CATEGORY_LESSONS } from "@/lib/grammar/checker";
import type { GrammarErrorCategory } from "@/data/grammar/types";
import { readingCategories, readingTexts } from "@/data/reading";
import { listeningActivities, listeningStages } from "@/data/listening";
import {
  conversationScenarios,
  pronunciationItems,
  speakingActivities,
} from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { vocabCategories, vocabWords } from "@/data/vocabulary";
import { getHub, type HubDefinition } from "./hubs";
import { LEARNING_PATHS, type LearningPathDef, type PathStepDef } from "./paths";
import type {
  CatalogueChapter,
  CatalogueItem,
  CataloguePath,
  CataloguePathStep,
  CataloguePayload,
  CatalogueSkill,
  CompletedLearning,
  CompletionStatus,
  HubId,
  RecommendationCard,
  RecommendationsPayload,
} from "./types";

// ---------------------------------------------------------------------------
// Level + difficulty normalisation
// ---------------------------------------------------------------------------

const CURRICULUM_LEVEL_LABELS: Record<LevelId, string> = {
  "pre-a1": "Pre-A1",
  a1: "A1",
  "grammar-core": "A2",
  a2: "A2",
};

/** CMS level names → the catalogue's level vocabulary. */
const CMS_LEVEL_LABELS: Record<string, string> = {
  "A1 Beginner": "A1",
  "IELTS Preparation": "B1+",
  "Pre-A1 English": "Pre-A1",
  "A1 English": "A1",
  "A2 English": "A2",
  "B1 English": "B1",
  "B2 English": "B2",
  "C1 English": "C1",
};

const CURRICULUM_DIFFICULTY: Record<LevelId, string> = {
  "pre-a1": "Beginner",
  a1: "Beginner",
  "grammar-core": "Elementary",
  a2: "Elementary",
};

function normalizeCmsLevel(levelName: string | null): string | null {
  if (!levelName) return null;
  return CMS_LEVEL_LABELS[levelName] ?? levelName;
}

function cmsDifficulty(levelName: string | null): string {
  const level = normalizeCmsLevel(levelName);
  if (level === "B1+" || level === "B2" || level === "C1") return "Advanced";
  if (level === "B1") return "Intermediate";
  if (level === "A2") return "Elementary";
  return "Beginner";
}

/** Topics for a CMS course, derived from its catalogue level. */
function cmsTopicsFromLevel(levelName: string | null): HubId[] {
  const level = normalizeCmsLevel(levelName);
  if (level === "Pre-A1" || level === "A1") return ["beginner-english"];
  if (level === "A2") return ["beginner-english", "grammar"];
  if (level === "B1") return ["grammar", "sentence-formation"];
  if (level === "B2") return ["grammar", "writing"];
  if (level === "B1+" || level === "C1") return ["writing", "spoken-english"];
  return ["beginner-english"];
}

/** Topics for a curriculum lesson, from its level and unit. */
function curriculumTopics(levelId: LevelId, unit: number): HubId[] {
  if (levelId === "grammar-core") {
    return unit === 3 ? ["sentence-formation", "grammar"] : ["grammar"];
  }
  return ["beginner-english"];
}

function cmsSkills(moduleTitle: string): CatalogueSkill[] {
  const title = moduleTitle.toLowerCase();
  if (title.includes("listening")) return ["listening"];
  if (title.includes("reading")) return ["reading"];
  if (title.includes("writing")) return ["writing"];
  if (title.includes("speaking")) return ["speaking"];
  return ["general"];
}

/** Topics for a CMS lesson, derived from its module title (skill keyword). */
function cmsTopicsFromModule(moduleTitle: string, levelName: string | null): HubId[] {
  const title = moduleTitle.toLowerCase();
  if (title.includes("listening")) return ["listening"];
  if (title.includes("reading")) return ["reading"];
  if (title.includes("writing")) return ["writing"];
  if (title.includes("speaking")) return ["spoken-english", "pronunciation"];
  if (normalizeCmsLevel(levelName) === "B1+") return ["beginner-english", "writing"];
  return ["beginner-english"];
}

// ---------------------------------------------------------------------------
// User progress snapshot
// ---------------------------------------------------------------------------

interface TrackedStatus {
  status: CompletionStatus;
  updatedAt: Date;
}

interface ProgressSnapshot {
  /** curriculum lesson slug → status */
  curriculum: Map<string, TrackedStatus>;
  /** CMS lesson slug → status */
  cms: Map<string, TrackedStatus>;
  /** enrolled course slugs */
  enrolledCourses: Set<string>;
}

async function loadProgress(userId?: string): Promise<ProgressSnapshot> {
  if (!userId) {
    return { curriculum: new Map(), cms: new Map(), enrolledCourses: new Set() };
  }

  const [lessonRows, assessments, cmsRows, enrolments] = await Promise.all([
    db.lessonProgress.findMany({ where: { userId } }),
    db.assessmentResult.findMany({
      where: { userId, status: "completed" },
      select: { lessonSlug: true, passed: true },
    }),
    db.cmsLessonProgress.findMany({
      where: { userId },
      include: { lesson: { select: { slug: true } } },
    }),
    db.cmsEnrolment.findMany({ where: { userId }, include: { course: { select: { slug: true } } } }),
  ]);

  const passedBySlug = new Map<string, boolean>();
  for (const a of assessments) {
    passedBySlug.set(a.lessonSlug, passedBySlug.get(a.lessonSlug) === true ? true : a.passed);
  }

  const curriculum = new Map<string, TrackedStatus>();
  for (const row of lessonRows) {
    const lesson = getLesson(row.lessonSlug);
    if (!lesson) continue;
    const progress = { sectionsCompleted: parseSectionsCompleted(row.sectionsCompleted) };
    const completion = computeLessonStatus(lesson, progress, passedBySlug.get(row.lessonSlug) === true);
    const status: CompletionStatus =
      row.status === "completed" || completion.completed
        ? "completed"
        : completion.sectionsDone > 0 || row.status === "in-progress"
          ? "in-progress"
          : "not-started";
    curriculum.set(row.lessonSlug, { status, updatedAt: row.updatedAt });
  }

  const cms = new Map<string, TrackedStatus>();
  for (const row of cmsRows) {
    cms.set(row.lesson.slug, {
      status: row.status === "completed" ? "completed" : "in-progress",
      updatedAt: row.updatedAt,
    });
  }

  return {
    curriculum,
    cms,
    enrolledCourses: new Set(enrolments.map((e) => e.course.slug)),
  };
}

function curriculumStatus(snapshot: ProgressSnapshot, slug: string): CompletionStatus | null {
  return snapshot.curriculum.get(slug)?.status ?? null;
}

function cmsStatus(snapshot: ProgressSnapshot, slug: string): CompletionStatus | null {
  return snapshot.cms.get(slug)?.status ?? null;
}

// ---------------------------------------------------------------------------
// CMS tree fetch (courses + chapters + lessons + prerequisites)
// ---------------------------------------------------------------------------

interface CmsLessonRow {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  moduleTitle: string;
  unitTitle: string;
  unitDescription: string;
  courseSlug: string;
  courseTitle: string;
  levelName: string | null;
  prerequisiteTitles: string[];
}

interface CmsCourseRow {
  slug: string;
  title: string;
  description: string;
  levelName: string | null;
  chapters: { title: string; description: string; lessons: CmsLessonRow[] }[];
}

async function loadCmsTree(): Promise<{ courses: CmsCourseRow[]; lessons: CmsLessonRow[] }> {
  const rows = await db.cmsCourse.findMany({
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
                include: {
                  prerequisites: { include: { requiresLesson: { select: { title: true } } } },
                },
              },
            },
          },
        },
      },
    },
  });

  const courses: CmsCourseRow[] = [];
  const flatLessons: CmsLessonRow[] = [];

  for (const course of rows) {
    const chapters: CmsCourseRow["chapters"] = [];
    for (const courseModule of course.modules) {
      for (const unit of courseModule.units) {
        const lessonRows: CmsLessonRow[] = unit.lessons.map((lesson) => ({
          slug: lesson.slug,
          title: lesson.title,
          description: lesson.description,
          estimatedMinutes: lesson.estimatedMinutes,
          moduleTitle: courseModule.title,
          unitTitle: unit.title,
          unitDescription: unit.description,
          courseSlug: course.slug,
          courseTitle: course.title,
          levelName: course.level?.name ?? null,
          prerequisiteTitles: lesson.prerequisites.map((p) => p.requiresLesson.title),
        }));
        chapters.push({ title: unit.title, description: unit.description, lessons: lessonRows });
        flatLessons.push(...lessonRows);
      }
    }
    courses.push({
      slug: course.slug,
      title: course.title,
      description: course.description,
      levelName: course.level?.name ?? null,
      chapters,
    });
  }
  return { courses, lessons: flatLessons };
}

// ---------------------------------------------------------------------------
// Item builders
// ---------------------------------------------------------------------------

function curriculumLessonItems(progress: ProgressSnapshot): CatalogueItem[] {
  return curriculumLessons.map((lesson) => ({
    id: `lesson:${lesson.slug}`,
    format: "lesson" as const,
    title: lesson.title,
    description: lesson.description,
    href: `#/lesson/${lesson.slug}`,
    level: CURRICULUM_LEVEL_LABELS[lesson.levelId] ?? null,
    skills:
      lesson.levelId === "grammar-core"
        ? (["grammar"] as CatalogueSkill[])
        : (["general"] as CatalogueSkill[]),
    difficulty: CURRICULUM_DIFFICULTY[lesson.levelId] ?? "Beginner",
    durationMinutes: lesson.estimatedMinutes,
    chapterCount: null,
    lessonCount: null,
    topics: curriculumTopics(lesson.levelId, lesson.unit),
    prerequisites: [],
    completion: curriculumStatus(progress, lesson.slug),
    featured: lesson.slug === "p1-1-1",
    subtitle: `${CURRICULUM_LEVEL_LABELS[lesson.levelId] ?? ""} · Unit ${lesson.unit}`,
  }));
}

function cmsLessonItems(cmsLessons: CmsLessonRow[], progress: ProgressSnapshot): CatalogueItem[] {
  return cmsLessons.map((lesson) => ({
    id: `lesson:${lesson.slug}`,
    format: "lesson" as const,
    title: lesson.title,
    description: lesson.description,
    href: `#/course-lesson/${lesson.slug}`,
    level: normalizeCmsLevel(lesson.levelName),
    skills: cmsSkills(lesson.moduleTitle),
    difficulty: cmsDifficulty(lesson.levelName),
    durationMinutes: lesson.estimatedMinutes,
    chapterCount: null,
    lessonCount: null,
    topics: cmsTopicsFromModule(lesson.moduleTitle, lesson.levelName),
    prerequisites: lesson.prerequisiteTitles,
    completion: cmsStatus(progress, lesson.slug),
    featured: false,
    subtitle: `${lesson.courseTitle} · ${lesson.unitTitle}`,
  }));
}

function courseItems(cmsCourses: CmsCourseRow[], progress: ProgressSnapshot): CatalogueItem[] {
  return cmsCourses.map((course) => {
    const lessons = course.chapters.flatMap((c) => c.lessons);
    const enrolled = progress.enrolledCourses.has(course.slug);
    const completedCount = lessons.filter(
      (l) => cmsStatus(progress, l.slug) === "completed",
    ).length;
    const completion: CompletionStatus | null = enrolled
      ? lessons.length > 0 && completedCount >= lessons.length
        ? "completed"
        : completedCount > 0
          ? "in-progress"
          : "not-started"
      : null;
    return {
      id: `course:${course.slug}`,
      format: "course" as const,
      title: course.title,
      description: course.description,
      href: `#/course/${course.slug}`,
      level: normalizeCmsLevel(course.levelName),
      skills: ["general"] as CatalogueSkill[],
      difficulty: cmsDifficulty(course.levelName),
      durationMinutes: lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0),
      chapterCount: course.chapters.length,
      lessonCount: lessons.length,
      topics: cmsTopicsFromModule(course.title, course.levelName).length > 0
        ? [...new Set([...cmsTopicsFromModule(course.title, course.levelName), ...cmsTopicsFromLevel(course.levelName)])]
        : cmsTopicsFromLevel(course.levelName),
      prerequisites: [],
      completion,
      featured: course.slug === "everyday-english-foundations" || course.slug === "english-from-zero",
      progress: enrolled ? { completed: completedCount, total: lessons.length } : null,
      subtitle: `Course · ${normalizeCmsLevel(course.levelName) ?? "Self-paced"}`,
    };
  });
}

function guideItems(): CatalogueItem[] {
  const posGuides: CatalogueItem[] = partsOfSpeech.map((posModule) => ({
    id: `guide:${posModule.id}`,
    format: "guide" as const,
    title:
      posModule.id === "prepositions"
        ? "Preposition Usage Guide"
        : `${posModule.name} Reference`,
    description: posModule.definition,
    href: `#/lesson/${POS_LESSON_MAP[posModule.id] ?? "grammar-pos-1"}`,
    level: "A1+",
    skills: ["grammar"] as CatalogueSkill[],
    difficulty: "Beginner",
    durationMinutes: null,
    chapterCount: null,
    lessonCount: null,
    topics: ["grammar"] as HubId[],
    prerequisites: [],
    completion: null,
    featured: posModule.id === "prepositions",
    subtitle: `Grammar guide · ${posModule.categories.length} categories`,
  }));

  return [
    ...posGuides,
    {
      id: "guide:tense-comparison",
      format: "guide",
      title: "Complete Tense Comparison",
      description: `All ${tenses.length} tenses side by side — meaning, structure, verb forms, questions and time expressions.`,
      href: "#/grammar/tenses",
      level: "A1+",
      skills: ["grammar"] as CatalogueSkill[],
      difficulty: "Elementary",
      durationMinutes: null,
      chapterCount: null,
      lessonCount: null,
      topics: ["grammar"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: true,
      subtitle: "Grammar guide · Tense Explorer",
    },
    {
      id: "guide:sentence-structure",
      format: "guide",
      title: "Sentence Structure Reference",
      description:
        "Seven Sentence Lab stages from word recognition to transformation — the reference for building every sentence type.",
      href: "#/lab",
      level: "A2",
      skills: ["grammar", "writing"] as CatalogueSkill[],
      difficulty: "Elementary",
      durationMinutes: null,
      chapterCount: null,
      lessonCount: null,
      topics: ["sentence-formation", "grammar"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      subtitle: "Grammar guide · Sentence Lab",
    },
  ];
}

function labItems(): CatalogueItem[] {
  const multi = "Beginner to Advanced";
  return [
    {
      id: "lab:sentence-builder",
      format: "lab",
      title: "Sentence Builder",
      description:
        "Seven construction stages with word tiles, structure inspection and challenge rounds.",
      href: "#/lab",
      level: "A2",
      skills: ["grammar", "writing"] as CatalogueSkill[],
      difficulty: "Elementary",
      durationMinutes: null,
      chapterCount: 7,
      lessonCount: null,
      topics: ["sentence-formation", "grammar"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: true,
      activityCount: 7,
      subtitle: "Practice lab · 7 stages",
    },
    {
      id: "lab:vocabulary-practice",
      format: "lab",
      title: "Vocabulary Practice",
      description: `${vocabWords.length} words with spaced repetition and six challenge types — quiz, meaning, spelling, arrangement, context and matching.`,
      href: "#/vocabulary/challenges",
      level: "A1+",
      skills: ["vocabulary"] as CatalogueSkill[],
      difficulty: "Beginner",
      durationMinutes: null,
      chapterCount: null,
      lessonCount: null,
      topics: ["vocabulary"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: true,
      activityCount: 6,
      subtitle: "Practice lab · 6 challenge types",
    },
    {
      id: "lab:spelling-practice",
      format: "lab",
      title: "Spelling Practice",
      description:
        "The spelling challenge: hear or read the word, type it correctly — checked against the real word list.",
      href: "#/vocabulary/challenges/spelling",
      level: "A1+",
      skills: ["vocabulary"] as CatalogueSkill[],
      difficulty: "Beginner",
      durationMinutes: null,
      chapterCount: null,
      lessonCount: null,
      topics: ["vocabulary"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      activityCount: vocabWords.length,
      subtitle: "Practice lab · spelling challenge",
    },
    {
      id: "lab:grammar-correction",
      format: "lab",
      title: "Grammar Correction",
      description:
        "The Error Clinic: submit your own sentences, get instant corrections with the rule explained — and your error history remembered.",
      href: "#/grammar/clinic",
      level: "B1+",
      skills: ["grammar"] as CatalogueSkill[],
      difficulty: "Intermediate",
      durationMinutes: null,
      chapterCount: null,
      lessonCount: null,
      topics: ["grammar"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      subtitle: "Practice lab · Error Clinic",
    },
    {
      id: "lab:reading-room",
      format: "lab",
      title: "Reading Room",
      description: `${readingTexts.length} graded texts across four levels, with comprehension checks, glossary and per-paragraph progress.`,
      href: "#/reading",
      level: "Beg–Adv",
      skills: ["reading", "vocabulary"] as CatalogueSkill[],
      difficulty: multi,
      durationMinutes: null,
      chapterCount: readingCategories.length,
      lessonCount: readingTexts.length,
      topics: ["reading"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      activityCount: readingTexts.length,
      subtitle: "Practice lab · Reading",
    },
    {
      id: "lab:listening-lab",
      format: "lab",
      title: "Listening Comprehension",
      description: `${listeningActivities.length} audio activities in ${listeningStages.length} stages, from first sounds to fast natural speech.`,
      href: "#/listening",
      level: "Beg–Adv",
      skills: ["listening"] as CatalogueSkill[],
      difficulty: multi,
      durationMinutes: null,
      chapterCount: listeningStages.length,
      lessonCount: listeningActivities.length,
      topics: ["listening"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      activityCount: listeningActivities.length,
      subtitle: "Practice lab · Listening",
    },
    {
      id: "lab:writing-studio",
      format: "lab",
      title: "Writing Studio",
      description: `${writingAssignments.length} guided assignments across four tiers — from the alphabet to argumentative essays, with rubric feedback.`,
      href: "#/writing",
      level: "Beg–Adv",
      skills: ["writing"] as CatalogueSkill[],
      difficulty: multi,
      durationMinutes: null,
      chapterCount: 4,
      lessonCount: writingAssignments.length,
      topics: ["writing"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      activityCount: writingAssignments.length,
      subtitle: "Practice lab · Writing",
    },
    {
      id: "lab:speaking-lab",
      format: "lab",
      title: "Speaking Lab",
      description: `${speakingActivities.length} speaking activities at three tiers — repetition, read-aloud, questions and free response, scored from your recording.`,
      href: "#/speaking",
      level: "Beg–Adv",
      skills: ["speaking"] as CatalogueSkill[],
      difficulty: multi,
      durationMinutes: null,
      chapterCount: 3,
      lessonCount: speakingActivities.length,
      topics: ["spoken-english"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      activityCount: speakingActivities.length,
      subtitle: "Practice lab · Speaking",
    },
    {
      id: "lab:pronunciation",
      format: "lab",
      title: "Pronunciation Training",
      description: `${pronunciationItems.length} drills across word stress, sounds, rhythm and intonation — each scored from your own recording.`,
      href: "#/speaking/pronunciation",
      level: "A1+",
      skills: ["speaking"] as CatalogueSkill[],
      difficulty: "Beginner",
      durationMinutes: null,
      chapterCount: 4,
      lessonCount: pronunciationItems.length,
      topics: ["pronunciation", "spoken-english"] as HubId[],
      prerequisites: [],
      completion: null,
      featured: false,
      activityCount: pronunciationItems.length,
      subtitle: "Practice lab · Pronunciation",
    },
  ];
}

function simulatorItems(): CatalogueItem[] {
  return conversationScenarios.map((scenario) => ({
    id: `simulator:${scenario.id}`,
    format: "simulator" as const,
    title: scenario.title,
    description: scenario.description,
    href: `#/speaking/conversation/${scenario.slug}`,
    level: "Beg–Adv",
    skills: ["speaking"] as CatalogueSkill[],
    difficulty: "Beginner to Advanced",
    durationMinutes: null,
    chapterCount: null,
    lessonCount: null,
    topics: ["spoken-english"] as HubId[],
    prerequisites: [],
    completion: null,
    featured: scenario.id === "conv-new-person" || scenario.id === "conv-interview",
    partner: scenario.partner.name,
    subtitle: `Role-play · ${scenario.partner.role}`,
  }));
}

// ---------------------------------------------------------------------------
// Learning paths (format A)
// ---------------------------------------------------------------------------

const PRACTICE_LAB_INFO: Record<
  string,
  { title: string; description: string; href: string }
> = {
  reading: { title: "Reading Room practice", description: "Graded texts at your level — read as you learn.", href: "#/reading" },
  listening: { title: "Listening Lab practice", description: "Audio activities matched to your stage.", href: "#/listening" },
  speaking: { title: "Speaking Lab practice", description: "Speak from day one — scored recordings.", href: "#/speaking" },
  writing: { title: "Writing Studio practice", description: "Guided assignments with rubric feedback.", href: "#/writing" },
  lab: { title: "Sentence Lab practice", description: "Build sentences tile by tile.", href: "#/lab" },
  vocabulary: { title: "Word World practice", description: "Spaced repetition for every new word.", href: "#/vocabulary" },
  "grammar-clinic": { title: "Error Clinic practice", description: "Your own sentences, corrected.", href: "#/grammar/clinic" },
  pronunciation: { title: "Pronunciation drills", description: "Stress, sounds, rhythm, intonation.", href: "#/speaking/pronunciation" },
  simulators: {
    title: "Conversation simulators",
    description: `${conversationScenarios.length} role-plays with an AI partner.`,
    href: "#/speaking/conversations",
  },
};

function curriculumChapters(levelId: string, progress: ProgressSnapshot): CatalogueChapter[] {
  const level = curriculumLevels.find((l) => l.id === levelId);
  if (!level) return [];
  return level.units.map((unit) => ({
    title: `Unit ${unit.number} · ${unit.title}`,
    description: unit.description,
    lessonCount: unit.lessonSlugs.length,
    lessons: unit.lessonSlugs.map((slug) => {
      const lesson = getLesson(slug);
      return {
        slug,
        title: lesson?.title ?? slug,
        durationMinutes: lesson?.estimatedMinutes ?? 0,
        completion: curriculumStatus(progress, slug),
      };
    }),
  }));
}

function cmsChapters(
  courseSlug: string,
  cmsCourses: CmsCourseRow[],
  progress: ProgressSnapshot,
): CatalogueChapter[] {
  const course = cmsCourses.find((c) => c.slug === courseSlug);
  if (!course) return [];
  return course.chapters.map((chapter) => ({
    title: chapter.title,
    description: chapter.description,
    lessonCount: chapter.lessons.length,
    lessons: chapter.lessons.map((lesson) => ({
      slug: lesson.slug,
      title: lesson.title,
      durationMinutes: lesson.estimatedMinutes,
      completion: cmsStatus(progress, lesson.slug),
    })),
  }));
}

function buildPath(
  def: LearningPathDef,
  cmsCourses: CmsCourseRow[],
  progress: ProgressSnapshot,
): CataloguePath {
  const steps: CataloguePathStep[] = def.steps.map((step: PathStepDef) => {
    if (step.kind === "curriculum-level") {
      const chapters = curriculumChapters(step.levelId, progress);
      const level = curriculumLevels.find((l) => l.id === step.levelId);
      return {
        kind: "curriculum-level" as const,
        title: level?.name ?? step.levelId,
        description: level?.tagline ?? "",
        href: `#/library/${step.levelId}`,
        optional: Boolean(step.optional),
        chapters,
        lessonCount: chapters.reduce((sum, c) => sum + c.lessonCount, 0),
        durationMinutes: chapters.reduce(
          (sum, c) => sum + c.lessons.reduce((s, l) => s + l.durationMinutes, 0),
          0,
        ),
      };
    }
    if (step.kind === "cms-course") {
      const course = cmsCourses.find((c) => c.slug === step.slug);
      const chapters = cmsChapters(step.slug, cmsCourses, progress);
      return {
        kind: "cms-course" as const,
        title: course?.title ?? step.slug,
        description: course?.description ?? "",
        href: `#/course/${step.slug}`,
        optional: Boolean(step.optional),
        chapters,
        lessonCount: chapters.reduce((sum, c) => sum + c.lessonCount, 0),
        durationMinutes: chapters.reduce(
          (sum, c) => sum + c.lessons.reduce((s, l) => s + l.durationMinutes, 0),
          0,
        ),
      };
    }
    const info = PRACTICE_LAB_INFO[step.labId];
    return {
      kind: "practice" as const,
      title: info.title,
      description: info.description,
      href: info.href,
      optional: true,
      chapters: null,
      lessonCount: 0,
      durationMinutes: 0,
    };
  });

  const lessonCount = steps.reduce((sum, s) => sum + s.lessonCount, 0);
  const chapterCount = steps.reduce((sum, s) => sum + (s.chapters?.length ?? 0), 0);
  const durationMinutes = steps.reduce((sum, s) => sum + s.durationMinutes, 0);
  const completedLessons = steps.reduce(
    (sum, s) =>
      sum +
      (s.chapters?.reduce(
        (cSum, c) => cSum + c.lessons.filter((l) => l.completion === "completed").length,
        0,
      ) ?? 0),
    0,
  );

  const hasProgressData = progress.curriculum.size > 0 || progress.cms.size > 0;
  const completion: CompletionStatus | null = hasProgressData
    ? lessonCount > 0 && completedLessons >= lessonCount
      ? "completed"
      : completedLessons > 0
        ? "in-progress"
        : "not-started"
    : null;

  return {
    id: def.id,
    title: def.title,
    description: def.description,
    level: def.level,
    outcomes: def.outcomes,
    href: `#/paths/${def.id}`,
    skills: def.skills as CatalogueSkill[],
    topics: def.topics as HubId[],
    durationMinutes,
    chapterCount,
    lessonCount,
    prerequisites: pathPrerequisites(def),
    completion,
    progress: hasProgressData ? { completed: completedLessons, total: lessonCount } : null,
    steps,
    featured: def.featured ?? false,
  };
}

/** Honest sequencing: the curriculum levels that precede a path's content. */
function pathPrerequisites(def: LearningPathDef): string[] {
  const order: Record<string, number> = { "pre-a1": 0, a1: 1, "grammar-core": 2, a2: 3 };
  const firstLevel = def.steps.find(
    (s): s is { kind: "curriculum-level"; levelId: string; optional?: boolean } =>
      s.kind === "curriculum-level",
  );
  if (firstLevel && order[firstLevel.levelId] > 0) {
    return curriculumLevels
      .filter((l) => order[l.id] < order[firstLevel.levelId] && l.units.length > 0)
      .map((l) => l.name);
  }
  if (def.id === "academic-writing") {
    return ["Writing Studio — beginner and elementary assignments"];
  }
  return [];
}

function pathItems(paths: CataloguePath[]): CatalogueItem[] {
  return paths.map((path) => ({
    id: `path:${path.id}`,
    format: "path" as const,
    title: path.title,
    description: path.description,
    href: path.href,
    level: path.level,
    skills: path.skills,
    difficulty: path.level === "B1+" ? "Advanced" : path.level === "A2" ? "Elementary" : "Beginner",
    durationMinutes: path.durationMinutes,
    chapterCount: path.chapterCount,
    lessonCount: path.lessonCount,
    topics: path.topics,
    prerequisites: path.prerequisites,
    completion: path.completion,
    featured: path.featured,
    progress: path.progress,
    subtitle: `Learning path · ${path.lessonCount} lessons`,
  }));
}

// ---------------------------------------------------------------------------
// Completed learning (format G)
// ---------------------------------------------------------------------------

function buildCompleted(
  progress: ProgressSnapshot,
  cmsLessons: CmsLessonRow[],
): CompletedLearning | null {
  if (progress.curriculum.size === 0 && progress.cms.size === 0 && progress.enrolledCourses.size === 0) {
    return null;
  }
  const lessons: CompletedLearning["lessons"] = [];
  for (const [slug, tracked] of progress.curriculum) {
    if (tracked.status !== "completed") continue;
    const lesson = getLesson(slug);
    lessons.push({
      slug,
      title: lesson?.title ?? slug,
      source: lesson
        ? curriculumLevels.find((l) => l.id === lesson.levelId)?.name ?? "Learning path"
        : "Learning path",
      href: `#/lesson/${slug}`,
      completedAt: tracked.updatedAt.toISOString(),
    });
  }
  for (const [slug, tracked] of progress.cms) {
    if (tracked.status !== "completed") continue;
    const row = cmsLessons.find((l) => l.slug === slug);
    lessons.push({
      slug,
      title: row?.title ?? slug,
      source: row?.courseTitle ?? "Course",
      href: `#/course-lesson/${slug}`,
      completedAt: tracked.updatedAt.toISOString(),
    });
  }
  const courses: CompletedLearning["courses"] = [];
  for (const slug of progress.enrolledCourses) {
    const courseLessons = cmsLessons.filter((l) => l.courseSlug === slug);
    if (courseLessons.length === 0) continue;
    const completed = courseLessons.filter(
      (l) => cmsStatus(progress, l.slug) === "completed",
    ).length;
    if (completed < courseLessons.length) continue;
    courses.push({
      slug,
      title: courseLessons[0].courseTitle,
      completedCount: completed,
      totalLessons: courseLessons.length,
      href: `#/course/${slug}`,
    });
  }
  return { lessons, courses };
}

// ---------------------------------------------------------------------------
// Public builders
// ---------------------------------------------------------------------------

interface CatalogueBuild {
  payload: CataloguePayload;
  progress: ProgressSnapshot;
}

async function buildCatalogueInternal(userId?: string): Promise<CatalogueBuild> {
  const [progress, cmsTree] = await Promise.all([loadProgress(userId), loadCmsTree()]);

  const paths = LEARNING_PATHS.map((def) => buildPath(def, cmsTree.courses, progress));

  const items: CatalogueItem[] = [
    ...pathItems(paths),
    ...courseItems(cmsTree.courses, progress),
    ...curriculumLessonItems(progress),
    ...cmsLessonItems(cmsTree.lessons, progress),
    ...guideItems(),
    ...labItems(),
    ...simulatorItems(),
  ];

  return {
    payload: {
      paths,
      items,
      completed: userId ? buildCompleted(progress, cmsTree.lessons) : null,
    },
    progress,
  };
}

export async function buildCatalogue(userId?: string): Promise<CataloguePayload> {
  return (await buildCatalogueInternal(userId)).payload;
}

// ---------------------------------------------------------------------------
// Hub content
// ---------------------------------------------------------------------------

export interface HubContent {
  hub: HubDefinition;
  featured: CatalogueItem[];
  chapters: CatalogueChapter[];
  resources: CatalogueItem[];
  practice: CatalogueItem[];
}

const TIER_LABELS: Record<string, string> = {
  beginner: "Beginner",
  elementary: "Elementary",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

/** Hub-specific chapters, each derived from a real content source. */
function hubChapters(hubId: HubId, progress: ProgressSnapshot): CatalogueChapter[] {
  switch (hubId) {
    case "beginner-english": {
      const chapters: CatalogueChapter[] = [];
      for (const levelId of ["pre-a1", "a1"] as const) {
        chapters.push(...curriculumChapters(levelId, progress));
      }
      return chapters;
    }
    case "grammar":
      // Grammar School units (parts of speech + tenses) — not the Sentence Lab unit.
      return curriculumChapters("grammar-core", progress).filter(
        (c) => !c.title.includes("Sentence Construction"),
      );
    case "sentence-formation":
      return curriculumChapters("grammar-core", progress).filter((c) =>
        c.title.includes("Sentence Construction"),
      );
    case "vocabulary":
      return vocabCategories.map((category) => {
        const words = vocabWords.filter((w) => w.categoryId === category.id);
        return {
          title: category.name,
          description: category.description,
          lessonCount: words.length,
          lessons: words.slice(0, 4).map((w) => ({
            slug: w.id,
            title: w.word,
            durationMinutes: 0,
            completion: null,
          })),
        };
      });
    case "spoken-english": {
      const groups = ["everyday", "services", "travel", "professional"] as const;
      return groups.map((group) => {
        const scenarios = conversationScenarios.filter((s) => s.category === group);
        return {
          title:
            group === "everyday"
              ? "Everyday life"
              : group === "services"
                ? "Services"
                : group === "travel"
                  ? "Travel"
                  : "Professional",
          description:
            group === "professional"
              ? "Workplace and interview role-plays with the AI partner."
              : `${scenarios.length} role-play scenarios with the AI partner.`,
          lessonCount: scenarios.length,
          lessons: scenarios.map((s) => ({
            slug: s.slug,
            title: s.title,
            durationMinutes: 0,
            completion: null,
          })),
        };
      });
    }
    case "reading":
      return readingCategories.map((category) => {
        const texts = readingTexts.filter((t) => t.category === category.id);
        return {
          title: category.name,
          description: `Level: ${category.levels.join(", ")}`,
          lessonCount: texts.length,
          lessons: texts.map((t) => ({
            slug: t.slug,
            title: t.title,
            durationMinutes: t.estimatedMinutes,
            completion: null,
          })),
        };
      });
    case "writing": {
      const tiers = ["beginner", "elementary", "intermediate", "advanced"] as const;
      return tiers.map((tier) => {
        const assignments = writingAssignments.filter((a) => a.tier === tier);
        return {
          title: `${TIER_LABELS[tier]} assignments`,
          description: `${assignments.length} guided assignments with rubric feedback.`,
          lessonCount: assignments.length,
          lessons: assignments.map((a) => ({
            slug: a.slug,
            title: a.title,
            durationMinutes: a.estimatedMinutes,
            completion: null,
          })),
        };
      });
    }
    case "listening":
      return listeningStages.map((stage) => {
        const activities = listeningActivities.filter((a) => a.stage === stage.id);
        return {
          title: stage.name,
          description: `${stage.tagline} · ${stage.cefr}`,
          lessonCount: activities.length,
          lessons: activities.map((a) => ({
            slug: a.slug,
            title: a.title,
            durationMinutes: a.estimatedMinutes,
            completion: null,
          })),
        };
      });
    case "pronunciation": {
      const groups = ["stress", "sounds", "rhythm", "intonation"] as const;
      return groups.map((group) => {
        const items = pronunciationItems.filter((p) => p.category === group);
        return {
          title:
            group === "stress"
              ? "Word stress"
              : group === "sounds"
                ? "Sounds"
                : group === "rhythm"
                  ? "Rhythm"
                  : "Intonation",
          description: `${items.length} scored drills.`,
          lessonCount: items.length,
          lessons: items.map((p) => ({
            slug: p.id,
            title: p.title,
            durationMinutes: 0,
            completion: null,
          })),
        };
      });
    }
  }
}

export async function buildHubContent(
  hubId: string,
  userId?: string,
): Promise<HubContent | null> {
  const hub = getHub(hubId);
  if (!hub) return null;

  const { payload, progress } = await buildCatalogueInternal(userId);
  const byId = new Map(payload.items.map((item) => [item.id, item]));

  const featured = hub.featuredIds
    .map((id) => byId.get(id))
    .filter((item): item is CatalogueItem => Boolean(item));

  const inScope = (item: CatalogueItem) => item.topics.includes(hub.id);
  const featuredIds = new Set(featured.map((f) => f.id));

  const resources = payload.items.filter(
    (item) =>
      inScope(item) &&
      !featuredIds.has(item.id) &&
      (item.format === "lesson" ||
        item.format === "guide" ||
        item.format === "course" ||
        item.format === "path"),
  );

  const practiceById = hub.practiceIds
    .map((id) => byId.get(id))
    .filter((item): item is CatalogueItem => Boolean(item));
  const practice = [
    ...practiceById,
    ...payload.items.filter(
      (item) =>
        inScope(item) &&
        !featuredIds.has(item.id) &&
        !practiceById.some((p) => p.id === item.id) &&
        (item.format === "lab" || item.format === "simulator"),
    ),
  ];

  return {
    hub,
    featured,
    chapters: hubChapters(hub.id, progress),
    resources,
    practice,
  };
}

// ---------------------------------------------------------------------------
// Recommendations (§5) — every reason is computed, never invented
// ---------------------------------------------------------------------------

const WEAKNESS_LAB: Record<string, string> = {
  reading: "lab:reading-room",
  listening: "lab:listening-lab",
  speaking: "lab:speaking-lab",
  writing: "lab:writing-studio",
  vocabulary: "lab:vocabulary-practice",
  grammar: "lab:grammar-correction",
};

export async function buildRecommendations(
  userId?: string,
): Promise<RecommendationsPayload> {
  if (!userId) {
    return {
      anonymous: true,
      cards: [
        {
          id: "anon-lesson-1",
          reason: "Start here — no English needed",
          title: "Hello! Everyday Greetings",
          description:
            "Lesson one of the learning path: your first words, ready in 15 minutes.",
          href: "#/lesson/p1-1-1",
          level: "Pre-A1",
          format: "lesson",
        },
        {
          id: "anon-course",
          reason: "A structured course from our teaching team",
          title: "Everyday English Foundations",
          description:
            "Greet people, introduce yourself and talk about your family — tracked lesson by lesson.",
          href: "#/course/everyday-english-foundations",
          level: "A1",
          format: "course",
        },
        {
          id: "anon-tenses",
          reason: "The reference guide for every tense",
          title: "Complete Tense Comparison",
          description: `All ${tenses.length} tenses side by side — meaning first, formulas second.`,
          href: "#/grammar/tenses",
          level: "A1+",
          format: "guide",
        },
        {
          id: "anon-roleplay",
          reason: "Speak from day one",
          title: "Meeting a New Person",
          description:
            "Your first role-play with the AI partner — say hello, give your name, ask theirs.",
          href: "#/speaking/conversation/meeting-a-new-person",
          level: "Beg–Adv",
          format: "simulator",
        },
      ],
    };
  }

  const cards: RecommendationCard[] = [];
  const [build, stats, clinicRows] = await Promise.all([
    buildCatalogueInternal(userId),
    db.userStats.findUnique({ where: { userId } }),
    db.grammarClinicSubmission.findMany({ where: { userId }, select: { categories: true } }),
  ]);
  const { payload, progress } = build;

  // 1 — Continue where you left off (most recently touched, not completed).
  const recent = [...progress.curriculum.values(), ...progress.cms.values()]
    .filter((t) => t.status === "in-progress")
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())[0];
  if (recent) {
    const recentSlug =
      [...progress.curriculum.entries()].find(([, t]) => t === recent)?.[0] ??
      [...progress.cms.entries()].find(([, t]) => t === recent)?.[0];
    const item = payload.items.find((i) => i.id === `lesson:${recentSlug}`);
    if (item) {
      cards.push({
        id: `continue:${item.id}`,
        reason: "Continue where you left off",
        title: item.title,
        description: item.description,
        href: item.href,
        level: item.level,
        format: item.format,
      });
    }
  }

  // 2 — Next lesson in the learning path (curriculum order, not completed).
  const lessonItems = payload.items.filter((i) => i.id.startsWith("lesson:"));
  const nextSlug = curriculumLessons.find((lesson) => {
    const status = curriculumStatus(progress, lesson.slug);
    return status === null || status === "not-started";
  })?.slug;
  if (nextSlug) {
    const item = lessonItems.find((i) => i.id === `lesson:${nextSlug}`);
    if (item && item.completion !== "in-progress") {
      cards.push({
        id: `next:${item.id}`,
        reason: "Your next lesson in the learning path",
        title: item.title,
        description: item.description,
        href: item.href,
        level: item.level,
        format: item.format,
      });
    }
  }

  // 3 — Strengthen your weakest measured skill (only with enough attempts).
  if (stats) {
    try {
      const bySkill = JSON.parse(stats.bySkill) as Record<
        string,
        { attempts: number; correct: number }
      >;
      const weakest = Object.entries(bySkill)
        .filter(([, v]) => v.attempts >= 10)
        .map(([skill, v]) => ({ skill, accuracy: v.correct / v.attempts }))
        .sort((a, b) => a.accuracy - b.accuracy)[0];
      if (weakest && WEAKNESS_LAB[weakest.skill]) {
        const lab = payload.items.find((i) => i.id === WEAKNESS_LAB[weakest.skill]);
        if (lab) {
          cards.push({
            id: `weakness:${weakest.skill}`,
            reason: `Your ${weakest.skill} accuracy is ${Math.round(weakest.accuracy * 100)}% across your attempts — strengthen it here`,
            title: lab.title,
            description: lab.description,
            href: lab.href,
            level: lab.level,
            format: "lab",
          });
        }
      }
    } catch {
      // Malformed stats JSON: skip the weakness card.
    }
  }

  // 4 — Fix the mistake you make most (Grammar Clinic history).
  const categoryCounts = new Map<string, number>();
  for (const row of clinicRows) {
    try {
      const categories = JSON.parse(row.categories) as string[];
      for (const category of categories) {
        categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
      }
    } catch {
      // Skip malformed rows.
    }
  }
  const topCategory = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])[0];
  if (topCategory) {
    const lessonSlug = CATEGORY_LESSONS[topCategory[0] as GrammarErrorCategory];
    const lessonItem = lessonSlug
      ? lessonItems.find((i) => i.id === `lesson:${lessonSlug}`)
      : undefined;
    if (lessonItem) {
      cards.push({
        id: `clinic:${topCategory[0]}`,
        reason: `You keep making “${topCategory[0].replace(/-/g, " ")}” mistakes in the Error Clinic`,
        title: lessonItem.title,
        description: lessonItem.description,
        href: lessonItem.href,
        level: lessonItem.level,
        format: "lesson",
      });
    }
  }

  // 5 — From your courses: continue an enrolled course, or a fresh one.
  const enrolledCourse = payload.items.find(
    (i) => i.format === "course" && i.completion === "in-progress",
  );
  if (enrolledCourse) {
    cards.push({
      id: `course:${enrolledCourse.id}`,
      reason: "You are enrolled — keep going",
      title: enrolledCourse.title,
      description: enrolledCourse.description,
      href: enrolledCourse.href,
      level: enrolledCourse.level,
      format: "course",
    });
  } else {
    const finishedCourse = payload.items.find(
      (i) => i.format === "course" && i.completion === "completed",
    );
    const freshCourse = payload.items.find(
      (i) => i.format === "course" && (i.completion === null || i.completion === "not-started"),
    );
    if (finishedCourse && freshCourse) {
      cards.push({
        id: `course-next:${freshCourse.id}`,
        reason: `Because you finished “${finishedCourse.title}”`,
        title: freshCourse.title,
        description: freshCourse.description,
        href: freshCourse.href,
        level: freshCourse.level,
        format: "course",
      });
    }
  }

  return { anonymous: false, cards: cards.slice(0, 5) };
}
