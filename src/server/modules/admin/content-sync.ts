import { createHash } from "crypto";
import { db } from "@/lib/db";
import { curriculum } from "@/data/curriculum";
import { course as courseSpec, stages, legacyMapping } from "@/data/catalogue";
import { isStructuredLesson, type CourseExercise, type CourseLesson } from "@/data/curriculum/types";
import { TERM_INTRO_LESSON } from "@/data/curriculum/validate";

/** Governance metadata — carried only by structured-template lessons. */
function lessonGov(lesson: CourseLesson) {
  return isStructuredLesson(lesson) ? lesson.content : undefined;
}

/**
 * Content sync — materialises the TypeScript curriculum into the relational
 * content mirror.
 *
 * Principles:
 *   - Idempotent: upserts by stable business keys; safe to re-run.
 *   - No deletes: content that disappears from the source is marked
 *     RETIRED (user progress referencing it stays intact).
 *   - Drift detection: a stable content hash per versioned entity; a
 *     changed hash bumps the patch version and records a new ContentVersion.
 *   - Governance mirrors the authored metadata: AI-assisted drafts are
 *     stored as `draft` publication status with isAiAssisted = true.
 */

export interface SyncResult {
  lessons: number;
  exercises: number;
  vocabulary: number;
  assessments: number;
  newVersions: number;
  retired: { lessons: string[]; exercises: string[] };
  durationMs: number;
}

/* ------------------------------------------------------------------ */
/* Deterministic helpers                                               */
/* ------------------------------------------------------------------ */

function stableStringify(value: unknown): string {
  return JSON.stringify(sortKeys(value));
}

function sortKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, sortKeys(v)])
    );
  }
  return value;
}

function contentHash(value: unknown): string {
  return createHash("sha256").update(stableStringify(value)).digest("hex").slice(0, 32);
}

/** Deterministic PRNG (mulberry32) — stable shuffles across syncs. */
function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (const ch of seed) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h |= 0;
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Main entry                                                          */
/* ------------------------------------------------------------------ */

export async function syncCurriculumContent(
  _options?: { actorId?: string } // actorId is used by the admin sync route for its own audit log
): Promise<SyncResult> {
  const started = Date.now();
  const counts = { exercises: 0, vocabulary: 0, assessments: 0, newVersions: 0 };

  /* --- course, modules, levels, units ------------------------------ */
  const language = await db.learningLanguage.upsert({
    where: { code: "en" },
    create: { code: "en", name: "English", nativeName: "English", isActive: true },
    update: { name: "English", nativeName: "English", isActive: true },
  });

  const courseRow = await db.course.upsert({
    where: { slug: courseSpec.id },
    create: {
      slug: courseSpec.id,
      title: courseSpec.title,
      tagline: courseSpec.tagline,
      description: courseSpec.description,
      languageId: language.id,
      version: courseSpec.version,
      sortOrder: 0,
    },
    update: {
      title: courseSpec.title,
      tagline: courseSpec.tagline,
      description: courseSpec.description,
      version: courseSpec.version,
    },
  });
  await ensureVersion("COURSE", courseRow.slug, {
    title: courseSpec.title,
    tagline: courseSpec.tagline,
    description: courseSpec.description,
    version: courseSpec.version,
  }, counts);

  const moduleByCode = new Map<string, string>();
  for (const [i, stage] of stages.entries()) {
    const row = await db.curriculumModule.upsert({
      where: { code: stage.id },
      create: {
        courseId: courseRow.id,
        code: stage.id,
        title: stage.title,
        description: stage.goal,
        sortOrder: i + 1,
      },
      update: { title: stage.title, description: stage.goal, sortOrder: i + 1 },
    });
    moduleByCode.set(stage.id, row.id);
    await ensureVersion("MODULE", stage.id, { title: stage.title, goal: stage.goal }, counts);
  }

  const levelByCode = new Map<string, string>();
  for (const [i, level] of curriculum.entries()) {
    const row = await db.learningLevel.upsert({
      where: { code: level.code },
      create: {
        courseId: courseRow.id,
        code: level.code,
        name: level.name,
        cefrLabel: level.cefrLabel,
        tagline: level.tagline,
        description: level.description,
        sortOrder: i + 1,
        status: level.status === "available" ? "AVAILABLE" : "IN_DEVELOPMENT",
      },
      update: {
        name: level.name,
        cefrLabel: level.cefrLabel,
        tagline: level.tagline,
        description: level.description,
        sortOrder: i + 1,
        status: level.status === "available" ? "AVAILABLE" : "IN_DEVELOPMENT",
      },
    });
    levelByCode.set(level.code, row.id);
    await ensureVersion("LEVEL", level.code, { name: level.name, description: level.description }, counts);
  }

  // majority catalogue stage per unit (module axis)
  const unitModule = computeUnitModuleStage();

  const unitBySlug = new Map<string, string>();
  for (const level of curriculum) {
    for (const [ui, unit] of level.units.entries()) {
      const stageCode = unitModule.get(unit.slug);
      const row = await db.unit.upsert({
        where: { slug: unit.slug },
        create: {
          slug: unit.slug,
          levelId: levelByCode.get(level.code)!,
          moduleId: stageCode ? moduleByCode.get(stageCode) ?? null : null,
          code: unit.code,
          title: unit.title,
          description: unit.description,
          sortOrder: ui + 1,
        },
        update: {
          code: unit.code,
          title: unit.title,
          description: unit.description,
          sortOrder: ui + 1,
          moduleId: stageCode ? moduleByCode.get(stageCode) ?? null : null,
        },
      });
      unitBySlug.set(unit.slug, row.id);
      await ensureVersion("UNIT", unit.slug, { title: unit.title, description: unit.description }, counts);
    }
  }

  /* --- lessons, in course order ------------------------------------ */
  const orderedLessons = curriculum.flatMap((level) =>
    level.units.flatMap((unit) => unit.lessons.map((lesson) => ({ level, unit, lesson })))
  );
  const seenLessonSlugs = new Set<string>();
  const seenExerciseIds = new Set<string>();
  const lessonIdBySlug = new Map<string, string>();
  let previousSlug: string | null = null;

  for (const { level, unit, lesson } of orderedLessons) {
    const levelId = levelByCode.get(level.code)!;
    const unitId = unitBySlug.get(unit.slug)!;
    const structured = isStructuredLesson(lesson);
    const unitIndex = unit.lessons.findIndex((l) => l.slug === lesson.slug);
    const sourceFile = sourceFileFor(level.code, unit.slug, lesson.slug);
    const contentVersion = lessonGov(lesson)?.contentVersion ?? "1.0.0";

    const lessonRow = await db.lesson.upsert({
      where: { slug: lesson.slug },
      create: {
        slug: lesson.slug,
        unitId,
        levelId,
        title: lesson.title,
        subtitle: lesson.subtitle ?? null,
        description: lesson.description,
        minutes: lesson.minutes,
        sortOrder: unitIndex + 1,
        status: "PUBLISHED",
        isStructured: structured,
        skillsJson: JSON.stringify(lesson.skills),
        contentVersion,
      },
      update: {
        title: lesson.title,
        subtitle: lesson.subtitle ?? null,
        description: lesson.description,
        minutes: lesson.minutes,
        sortOrder: unitIndex + 1,
        isStructured: structured,
        skillsJson: JSON.stringify(lesson.skills),
        contentVersion,
        status: "PUBLISHED",
      },
    });
    lessonIdBySlug.set(lesson.slug, lessonRow.id);
    seenLessonSlugs.add(lesson.slug);

    await syncLessonChildren(lesson, lessonRow.id, counts, seenExerciseIds);
    await syncPrerequisites(lesson, lessonRow.id, previousSlug, lessonIdBySlug);
    await ensureLessonVersionAndReview(lesson, sourceFile, counts);

    previousSlug = lesson.slug;
  }

  /* --- grammar topics (introduces links) --------------------------- */
  for (const [term, introSlug] of Object.entries(TERM_INTRO_LESSON)) {
    const introLessonId = lessonIdBySlug.get(introSlug);
    if (!introLessonId) continue;
    const introLesson = orderedLessons.find((e) => e.lesson.slug === introSlug)?.lesson;
    const topicRow = await db.grammarTopic.upsert({
      where: { slug: term.replace(/\s+/g, "-") },
      create: {
        slug: term.replace(/\s+/g, "-"),
        name: term,
        definition: introLesson && isStructuredLesson(introLesson) ? introLesson.concept.definition : null,
      },
      update: {
        name: term,
        definition: introLesson && isStructuredLesson(introLesson) ? introLesson.concept.definition : null,
      },
    });
    await db.lessonGrammarTopic.upsert({
      where: { lessonId_topicId: { lessonId: introLessonId, topicId: topicRow.id } },
      create: { lessonId: introLessonId, topicId: topicRow.id, role: "INTRODUCES" },
      update: { role: "INTRODUCES" },
    });
  }

  /* --- retire content absent from the source ----------------------- */
  const retiredLessons = await db.lesson.findMany({
    where: { slug: { notIn: [...seenLessonSlugs] }, status: { not: "RETIRED" } },
    select: { slug: true },
  });
  if (retiredLessons.length) {
    await db.lesson.updateMany({
      where: { slug: { in: retiredLessons.map((l) => l.slug) } },
      data: { status: "RETIRED" },
    });
  }
  const retiredExercises = await db.exercise.findMany({
    where: { exerciseId: { notIn: [...seenExerciseIds] }, status: { not: "RETIRED" } },
    select: { exerciseId: true },
  });
  if (retiredExercises.length) {
    await db.exercise.updateMany({
      where: { exerciseId: { in: retiredExercises.map((e) => e.exerciseId) } },
      data: { status: "RETIRED" },
    });
  }

  return {
    lessons: seenLessonSlugs.size,
    exercises: seenExerciseIds.size,
    vocabulary: counts.vocabulary,
    assessments: counts.assessments,
    newVersions: counts.newVersions,
    retired: {
      lessons: retiredLessons.map((l) => l.slug),
      exercises: retiredExercises.map((e) => e.exerciseId),
    },
    durationMs: Date.now() - started,
  };
}

/* ------------------------------------------------------------------ */
/* Per-lesson children                                                */
/* ------------------------------------------------------------------ */

async function syncLessonChildren(
  lesson: CourseLesson,
  lessonId: string,
  counts: { exercises: number; vocabulary: number; assessments: number },
  seenExerciseIds: Set<string>
): Promise<void> {
  const structured = isStructuredLesson(lesson);

  /* sections */
  const sections: { type: string; title: string; content: unknown; order: number }[] = [];
  if (structured) {
    if (lesson.introduction)
      sections.push({ type: "INTRODUCTION", title: "Lesson introduction", content: { text: lesson.introduction }, order: 1 });
    if (lesson.objectives?.length)
      sections.push({ type: "OBJECTIVES", title: "Learning objectives", content: { items: lesson.objectives }, order: 2 });
    if (lesson.prerequisites?.length)
      sections.push({
        type: "PREREQUISITES",
        title: "Prerequisite knowledge",
        content: { items: lesson.prerequisites },
        order: 3,
      });
    if (lesson.concept)
      sections.push({ type: "CONCEPT", title: "Concept explanation", content: lesson.concept, order: 4 });
    if (lesson.teachingSteps?.length)
      sections.push({ type: "TEACHING_STEPS", title: "Step-by-step teaching", content: { steps: lesson.teachingSteps }, order: 5 });
    if (lesson.exampleBank)
      sections.push({ type: "EXAMPLE_BANK", title: "Examples", content: lesson.exampleBank, order: 6 });
    if (lesson.realLife)
      sections.push({ type: "REAL_LIFE", title: lesson.realLife.title, content: lesson.realLife, order: 7 });
    if (lesson.commonMistakes?.length)
      sections.push({ type: "COMMON_MISTAKES", title: "Common mistakes", content: { items: lesson.commonMistakes }, order: 8 });
    if (lesson.revision)
      sections.push({ type: "REVISION", title: "Revision", content: lesson.revision, order: 9 });
    if (lesson.homework?.tasks.length)
      sections.push({ type: "HOMEWORK", title: "Homework", content: { tasks: lesson.homework.tasks }, order: 10 });
  } else if (lesson.grammar) {
    sections.push({ type: "GRAMMAR", title: lesson.grammar.title, content: lesson.grammar, order: 1 });
  }
  for (const s of sections) {
    await db.lessonSection.upsert({
      where: { lessonId_type: { lessonId, type: s.type as never } },
      create: { lessonId, type: s.type as never, title: s.title, contentJson: JSON.stringify(s.content), sortOrder: s.order },
      update: { title: s.title, contentJson: JSON.stringify(s.content), sortOrder: s.order },
    });
  }

  /* objectives */
  for (const [i, text] of (isStructuredLesson(lesson) ? lesson.objectives ?? [] : []).entries()) {
    const objective = await db.learningObjective.upsert({
      where: { code: `${lesson.slug}-obj${i + 1}` },
      create: { code: `${lesson.slug}-obj${i + 1}`, text },
      update: { text },
    });
    await db.lessonObjective.upsert({
      where: { lessonId_objectiveId: { lessonId, objectiveId: objective.id } },
      create: { lessonId, objectiveId: objective.id, sortOrder: i + 1 },
      update: { sortOrder: i + 1 },
    });
  }

  /* vocabulary + audio */
  for (const [i, word] of lesson.vocab.entries()) {
    const vocabRow = await db.vocabulary.upsert({
      where: { wordId: word.id },
      create: {
        wordId: word.id,
        lessonId,
        term: word.term,
        pos: word.pos,
        definition: word.definition,
        example: word.example,
        sortOrder: i + 1,
      },
      update: { term: word.term, pos: word.pos, definition: word.definition, example: word.example, sortOrder: i + 1 },
    });
    counts.vocabulary += 1;
    await db.audioAsset.upsert({
      where: { id: audioAssetId(lesson.slug, "word", word.id) },
      create: {
        id: audioAssetId(lesson.slug, "word", word.id),
        lessonId,
        vocabularyId: vocabRow.id,
        kind: "TTS_WORD",
        text: word.term,
        sortOrder: i + 1,
      },
      update: { text: word.term, vocabularyId: vocabRow.id },
    });
  }

  /* dialogue */
  if (lesson.dialogue) {
    const dialogueRow = await db.dialogue.upsert({
      where: { lessonId },
      create: { lessonId, title: lesson.dialogue.title, context: lesson.dialogue.context },
      update: { title: lesson.dialogue.title, context: lesson.dialogue.context },
    });
    for (const [i, line] of lesson.dialogue.lines.entries()) {
      await db.dialogueLine.upsert({
        where: { dialogueId_sortOrder: { dialogueId: dialogueRow.id, sortOrder: i + 1 } },
        create: { dialogueId: dialogueRow.id, speaker: line.speaker, text: line.text, sortOrder: i + 1 },
        update: { speaker: line.speaker, text: line.text },
      });
    }
  }

  /* reading passage + audio */
  if (lesson.passage) {
    await db.readingPassage.upsert({
      where: { lessonId },
      create: {
        lessonId,
        title: lesson.passage.title,
        text: lesson.passage.text,
        wordCount: lesson.passage.text.split(/\s+/).length,
      },
      update: { title: lesson.passage.title, text: lesson.passage.text, wordCount: lesson.passage.text.split(/\s+/).length },
    });
    await db.audioAsset.upsert({
      where: { id: audioAssetId(lesson.slug, "passage", lesson.slug) },
      create: {
        id: audioAssetId(lesson.slug, "passage", lesson.slug),
        lessonId,
        kind: "TTS_PASSAGE",
        text: lesson.passage.text,
        sortOrder: 999,
      },
      update: { text: lesson.passage.text },
    });
  }

  /* example sentences (structured lessons) */
  if (structured && lesson.exampleBank) {
    const bank = lesson.exampleBank;
    const rows: { category: string; text: string; note?: string }[] = [
      ...bank.basic.map((t) => ({ category: "BASIC", text: t })),
      ...bank.everyday.map((t) => ({ category: "EVERYDAY", text: t })),
      ...(bank.questions ?? []).map((t) => ({ category: "QUESTION", text: t })),
      ...(bank.negatives ?? []).map((t) => ({ category: "NEGATIVE", text: t })),
      ...bank.corrections.flatMap((c) => [
        { category: "WRONG", text: c.wrong, note: c.note },
        { category: "CORRECTED", text: c.right, note: c.note },
      ]),
      ...(lesson.commonMistakes ?? []).flatMap((m) => [
        { category: "WRONG", text: m.wrong, note: m.why },
        { category: "CORRECTED", text: m.right, note: m.why },
      ]),
    ];
    for (const [i, row] of rows.entries()) {
      await db.exampleSentence.upsert({
        where: { id: exampleId(lesson.slug, i) },
        create: {
          id: exampleId(lesson.slug, i),
          lessonId,
          category: row.category as never,
          text: row.text,
          note: row.note ?? null,
          sortOrder: i + 1,
        },
        update: { category: row.category as never, text: row.text, note: row.note ?? null, sortOrder: i + 1 },
      });
    }
  }

  /* exercises: questions + options + SERVER-ONLY answer keys */
  for (const [i, exercise] of lesson.exercises.entries()) {
    await syncExercise(lesson.slug, lessonId, exercise, i + 1, counts, seenExerciseIds);
  }

  /* assignments (homework) */
  for (const [i, task] of ((isStructuredLesson(lesson) ? lesson.homework?.tasks : undefined) ?? []).entries()) {
    await db.assignment.upsert({
      where: { id: assignmentId(lesson.slug, i) },
      create: { id: assignmentId(lesson.slug, i), lessonId, kind: "HOMEWORK", taskText: task, sortOrder: i + 1 },
      update: { taskText: task, sortOrder: i + 1 },
    });
  }

  /* lesson-check assessment */
  const checkExercises = structured
    ? lesson.exercises.filter((e) => e.phase === "assessment")
    : lesson.exercises.filter((e) => e.type !== "speak" && e.type !== "write");
  if (checkExercises.length > 0) {
    const assessmentRow = await db.assessment.upsert({
      where: { slug: `${lesson.slug}-check` },
      create: {
        slug: `${lesson.slug}-check`,
        lessonId,
        title: `${lesson.title} — Lesson check`,
        kind: "LESSON_CHECK",
        passScore: 60,
      },
      update: { title: `${lesson.title} — Lesson check`, passScore: 60 },
    });
    counts.assessments += 1;
    const exerciseIdRows = checkExercises.map((e) => e.id);
    for (const [i, exId] of exerciseIdRows.entries()) {
      const exerciseRow = await db.exercise.findUnique({ where: { exerciseId: exId } });
      if (!exerciseRow) continue;
      await db.assessmentQuestion.upsert({
        where: { assessmentId_sortOrder: { assessmentId: assessmentRow.id, sortOrder: i + 1 } },
        create: { assessmentId: assessmentRow.id, exerciseId: exerciseRow.id, sortOrder: i + 1 },
        update: { exerciseId: exerciseRow.id },
      });
    }
  }
}

async function syncExercise(
  lessonSlug: string,
  lessonId: string,
  exercise: CourseExercise,
  order: number,
  counts: { exercises: number },
  seenExerciseIds: Set<string>
): Promise<void> {
  const isGradable = exercise.type !== "speak" && exercise.type !== "write";

  const payload = exercisePayload(exercise);

  const exerciseRow = await db.exercise.upsert({
    where: { exerciseId: exercise.id },
    create: {
      exerciseId: exercise.id,
      lessonId,
      type: exercise.type.toUpperCase() as never,
      phase: exercise.phase ? (exercise.phase.toUpperCase() as never) : null,
      prompt: exercise.prompt,
      audioText: exercise.type === "listen" ? exercise.audioText : null,
      wordId: exercise.type === "listen" ? (exercise.wordId ?? null) : null,
      isGradable,
      payloadJson: JSON.stringify(payload),
      sortOrder: order,
    },
    update: {
      type: exercise.type.toUpperCase() as never,
      phase: exercise.phase ? (exercise.phase.toUpperCase() as never) : null,
      prompt: exercise.prompt,
      audioText: exercise.type === "listen" ? exercise.audioText : null,
      wordId: exercise.type === "listen" ? (exercise.wordId ?? null) : null,
      isGradable,
      payloadJson: JSON.stringify(payload),
      sortOrder: order,
      status: "PUBLISHED",
    },
  });
  seenExerciseIds.add(exercise.id);
  counts.exercises += 1;

  /* questions + options + keys, by exercise type */
  type Q = { prompt: string; order: number; options?: string[]; key: KeySpec };
  type KeySpec = {
    keyType: string;
    correctIndex?: number;
    answerText?: string;
    acceptedJson?: string;
    explanation?: string;
    modelAnswer?: string;
  };

  let questions: Q[] = [];
  switch (exercise.type) {
    case "mcq":
      questions = [
        {
          prompt: exercise.prompt,
          order: 1,
          options: exercise.options,
          key: {
            keyType: "OPTION_INDEX",
            correctIndex: exercise.answerIndex,
            explanation: "explanation" in exercise ? exercise.explanation : undefined,
          },
        },
      ];
      break;
    case "fill":
      questions = [
        {
          prompt: exercise.prompt,
          order: 1,
          key: {
            keyType: "ACCEPTED_LIST",
            acceptedJson: JSON.stringify(exercise.accepted),
            explanation: "explanation" in exercise ? exercise.explanation : undefined,
          },
        },
      ];
      break;
    case "order":
      questions = [
        {
          prompt: exercise.prompt,
          order: 1,
          key: {
            keyType: "ANSWER_TEXT",
            answerText: exercise.answer,
            explanation: "explanation" in exercise ? exercise.explanation : undefined,
          },
        },
      ];
      break;
    case "match": {
      // one question per pair; shared shuffled option set; key = index of the right
      const rights = seededShuffle(exercise.pairs.map((p) => p.right), exercise.id);
      questions = exercise.pairs.map((pair, i) => ({
        prompt: pair.left,
        order: i + 1,
        options: rights,
        key: { keyType: "OPTION_INDEX", correctIndex: rights.indexOf(pair.right) },
      }));
      break;
    }
    case "listen":
      if (exercise.mode === "choice") {
        questions = [
          {
            prompt: exercise.prompt,
            order: 1,
            options: exercise.options ?? [],
            key: {
              keyType: "OPTION_INDEX",
              correctIndex: exercise.answerIndex ?? 0,
              explanation: exercise.explanation,
            },
          },
        ];
      } else {
        questions = [
          {
            prompt: exercise.prompt,
            order: 1,
            key: { keyType: "ACCEPTED_LIST", acceptedJson: JSON.stringify(exercise.accepted ?? []) },
          },
        ];
      }
      break;
    case "speak":
      questions = [
        { prompt: exercise.prompt, order: 1, key: { keyType: "TARGET_TEXT", answerText: exercise.targetText } },
      ];
      break;
    case "write":
      questions = [
        {
          prompt: exercise.prompt,
          order: 1,
          key: {
            keyType: "MODEL_ANSWER",
            modelAnswer: exercise.modelAnswer,
            explanation: "explanation" in exercise ? exercise.explanation : undefined,
          },
        },
      ];
      break;
  }

  for (const q of questions) {
    const questionRow = await db.exerciseQuestion.upsert({
      where: { exerciseId_sortOrder: { exerciseId: exerciseRow.id, sortOrder: q.order } },
      create: { exerciseId: exerciseRow.id, prompt: q.prompt, sortOrder: q.order },
      update: { prompt: q.prompt },
    });
    for (const [oi, option] of (q.options ?? []).entries()) {
      await db.answerOption.upsert({
        where: { questionId_sortOrder: { questionId: questionRow.id, sortOrder: oi } },
        create: { questionId: questionRow.id, content: option, sortOrder: oi },
        update: { content: option },
      });
    }
    await db.answerKey.upsert({
      where: { questionId: questionRow.id },
      create: {
        questionId: questionRow.id,
        keyType: q.key.keyType as never,
        correctIndex: q.key.correctIndex ?? null,
        answerText: q.key.answerText ?? null,
        acceptedJson: q.key.acceptedJson ?? null,
        explanation: q.key.explanation ?? null,
        modelAnswer: q.key.modelAnswer ?? null,
      },
      update: {
        keyType: q.key.keyType as never,
        correctIndex: q.key.correctIndex ?? null,
        answerText: q.key.answerText ?? null,
        acceptedJson: q.key.acceptedJson ?? null,
        explanation: q.key.explanation ?? null,
        modelAnswer: q.key.modelAnswer ?? null,
      },
    });
  }

  /* audio asset for listening exercises */
  if (exercise.type === "listen") {
    await db.audioAsset.upsert({
      where: { id: audioAssetId(lessonSlug, "exercise", exercise.id) },
      create: {
        id: audioAssetId(lessonSlug, "exercise", exercise.id),
        lessonId,
        exerciseId: exerciseRow.id,
        kind: "TTS_SENTENCE",
        text: exercise.audioText,
        sortOrder: order,
      },
      update: { text: exercise.audioText, exerciseId: exerciseRow.id },
    });
  }
}

/** Display-only payload per exercise type (answer-free by construction). */
function exercisePayload(exercise: CourseExercise): Record<string, unknown> {
  switch (exercise.type) {
    case "order":
      return { tokens: seededShuffle(exercise.answer.split(" "), exercise.id) };
    case "fill":
      return "hint" in exercise && exercise.hint ? { hint: exercise.hint } : {};
    case "speak":
      // the target sentence is shown to the learner ("say this")
      return { targetText: exercise.targetText };
    case "match":
      return { pairCount: exercise.pairs.length };
    default:
      return {};
  }
}

async function syncPrerequisites(
  lesson: CourseLesson,
  lessonId: string,
  previousSlug: string | null,
  lessonIdBySlug: Map<string, string>
): Promise<void> {
  // explicit prerequisites (structured lessons)
  if (isStructuredLesson(lesson)) {
    for (const ref of lesson.prerequisites ?? []) {
      if (!ref.lessonSlug) continue;
      const prereqId = lessonIdBySlug.get(ref.lessonSlug);
      if (!prereqId) continue;
      await db.lessonPrerequisite.upsert({
        where: {
          lessonId_prerequisiteLessonId: { lessonId, prerequisiteLessonId: prereqId },
        },
        create: { lessonId, prerequisiteLessonId: prereqId, kind: "EXPLICIT" },
        update: { kind: "EXPLICIT" },
      });
    }
  }
  // sequential chain across the whole course order
  if (previousSlug) {
    const prevId = lessonIdBySlug.get(previousSlug);
    if (prevId) {
      await db.lessonPrerequisite.upsert({
        where: {
          lessonId_prerequisiteLessonId: { lessonId, prerequisiteLessonId: prevId },
        },
        create: { lessonId, prerequisiteLessonId: prevId, kind: "SEQUENTIAL" },
        update: { kind: "SEQUENTIAL" },
      });
    }
  }
}

/* ------------------------------------------------------------------ */
/* Versioning + review governance                                      */
/* ------------------------------------------------------------------ */

async function ensureVersion(
  contentType: "COURSE" | "LEVEL" | "MODULE" | "UNIT",
  contentKey: string,
  payload: unknown,
  counts: { newVersions: number }
): Promise<void> {
  const hash = contentHash(payload);
  const existing = await db.contentVersion.findFirst({
    where: { contentType, contentKey },
    orderBy: { createdAt: "desc" },
  });
  if (existing && existing.contentHash === hash) return;

  const [major, minor, patch] = (existing?.version ?? "1.0.0").split(".").map(Number);
  const version = existing ? `${major}.${minor}.${(patch ?? 0) + 1}` : "1.0.0";
  await db.contentVersion.create({
    data: {
      contentType,
      contentKey,
      version,
      contentHash: hash,
      changelog: existing ? "Content changed in source; new version recorded by sync." : "Initial version from content sync.",
    },
  });
  counts.newVersions += 1;
}

async function ensureLessonVersionAndReview(
  lesson: CourseLesson,
  sourceFile: string,
  counts: { newVersions: number }
): Promise<void> {
  const structured = isStructuredLesson(lesson);
  const payload = structured
    ? {
        title: lesson.title,
        description: lesson.description,
        concept: lesson.concept,
        teachingSteps: lesson.teachingSteps,
        exampleBank: lesson.exampleBank,
        exercises: lesson.exercises.map((e) => e.id),
        vocab: lesson.vocab.map((v) => v.id),
      }
    : { title: lesson.title, description: lesson.description, exercises: lesson.exercises.map((e) => e.id) };

  const hash = contentHash(payload);
  const existing = await db.contentVersion.findFirst({
    where: { contentType: "LESSON", contentKey: lesson.slug },
    orderBy: { createdAt: "desc" },
    include: { review: true },
  });

  if (!existing || existing.contentHash !== hash) {
    const gov = lessonGov(lesson);
    const [major, minor, patch] = (existing?.version ?? gov?.contentVersion ?? "1.0.0")
      .split(".")
      .map(Number);
    const version = existing ? `${major}.${minor}.${(patch ?? 0) + 1}` : (gov?.contentVersion ?? "1.0.0");
    const versionRow = await db.contentVersion.create({
      data: {
        contentType: "LESSON",
        contentKey: lesson.slug,
        version,
        contentHash: hash,
        changelog: existing ? "Lesson content changed in source; new version recorded by sync." : "Initial version from content sync.",
        createdFrom: sourceFile,
      },
    });
    counts.newVersions += 1;

    const draftStatus = await db.publicationStatus.findUnique({ where: { key: "draft" } });
    if (draftStatus) {
      await db.contentReview.upsert({
        where: { contentVersionId: versionRow.id },
        create: {
          contentVersionId: versionRow.id,
          statusId: draftStatus.id,
          authoredBy:
            gov?.authoredBy ?? "TalkSy Content Team — AI-assisted draft (unreviewed)",
          isAiAssisted: true, // all TalkSy content is AI-assisted until human review
          catalogueTargetsJson: JSON.stringify(gov?.catalogueTargets ?? []),
          reviewNotes: gov?.reviewNotes ?? null,
        },
        update: {
          statusId: draftStatus.id,
          authoredBy: gov?.authoredBy ?? "TalkSy Content Team — AI-assisted draft (unreviewed)",
          catalogueTargetsJson: JSON.stringify(gov?.catalogueTargets ?? []),
          reviewNotes: gov?.reviewNotes ?? null,
        },
      });
    }
  }
}

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

function sourceFileFor(levelCode: string, unitSlug: string, lessonSlug: string): string {
  if (levelCode.toLowerCase() === "p1") {
    return `src/data/curriculum/p1/${lessonSlug}.ts`;
  }
  // legacy lessons live in per-unit files (a1-unit1.ts, a2-unit6.ts …)
  return `src/data/curriculum/${unitSlug}.ts`;
}

function audioAssetId(lessonSlug: string, kind: string, ownerKey: string): string {
  return `aud-${lessonSlug}-${kind}-${ownerKey}`;
}

function exampleId(lessonSlug: string, index: number): string {
  return `ex-sent-${lessonSlug}-${index}`;
}

function assignmentId(lessonSlug: string, index: number): string {
  return `hw-${lessonSlug}-${index}`;
}

/** Majority catalogue stage per curriculum unit (the module axis). */
function computeUnitModuleStage(): Map<string, string> {
  const stageCount = new Map<string, Map<string, number>>();

  const count = (unitSlug: string, targets: string[]) => {
    for (const target of targets) {
      const stage = target.slice(0, 4); // "st01-m01-u01-l01" → "st01"
      if (!/^st\d{2}$/.test(stage)) continue;
      const byUnit = stageCount.get(unitSlug) ?? new Map<string, number>();
      byUnit.set(stage, (byUnit.get(stage) ?? 0) + 1);
      stageCount.set(unitSlug, byUnit);
    }
  };

  // structured lessons declare their catalogue targets
  for (const level of curriculum) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        const targets = lessonGov(lesson)?.catalogueTargets;
        if (targets?.length) count(unit.slug, targets);
      }
    }
  }
  // legacy lessons map through legacy-mapping.json
  for (const entry of legacyMapping.entries) {
    const unitSlug = entry.legacySlug.replace(/-\d+$/, "");
    count(unitSlug, entry.targets);
  }

  const result = new Map<string, string>();
  for (const [unitSlug, byStage] of stageCount) {
    const majority = [...byStage.entries()].sort((a, b) => b[1] - a[1])[0];
    if (majority) result.set(unitSlug, majority[0]);
  }
  return result;
}
