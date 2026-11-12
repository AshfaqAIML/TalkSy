/**
 * Listening Lab registry — stages, activities and integrity checks.
 *
 * Mirrors the curriculum registry pattern: content files export typed data,
 * and this module validates it (unique ids/slugs, well-formed exercises,
 * segment references, speaker references, format coverage).
 */

import type {
  ArrangeListeningExercise,
  ChoiceListeningExercise,
  CompleteListeningExercise,
  ListeningActivity,
  ListeningExercise,
  ListeningFormat,
  ListeningStageId,
  ListeningStageMeta,
  TextListeningExercise,
} from "./types";
import { LISTENING_FORMATS } from "./types";
import { foundationActivities } from "./foundation";
import { everydayActivities } from "./everyday";
import { extendedActivities } from "./extended";
import { fluencyActivities } from "./professional";

export * from "./types";

export const listeningStages: ListeningStageMeta[] = [
  { id: "sounds", name: "Letter & sound recognition", tagline: "Hear the difference", cefr: "Pre-A1" },
  { id: "vocabulary", name: "Vocabulary listening", tagline: "Words in your ear", cefr: "Pre-A1" },
  { id: "phrases", name: "Short phrases", tagline: "Everyday chunks", cefr: "A1" },
  { id: "sentences", name: "Individual sentences", tagline: "One line at a time", cefr: "A1" },
  { id: "conversations", name: "Basic conversations", tagline: "Two voices, real places", cefr: "A1–A2" },
  { id: "stories", name: "Stories", tagline: "Follow the plot", cefr: "A2" },
  { id: "discussions", name: "Longer discussions", tagline: "Opinions and negotiation", cefr: "A2–B1" },
  { id: "natural", name: "Natural English", tagline: "Fast speech & contractions", cefr: "B1" },
  { id: "professional", name: "Professional communication", tagline: "Workplace English", cefr: "B1–B2" },
];

export const listeningActivities: ListeningActivity[] = [
  ...foundationActivities,
  ...everydayActivities,
  ...extendedActivities,
  ...fluencyActivities,
];

const bySlug = new Map(listeningActivities.map((a) => [a.slug, a]));
const byId = new Map(listeningActivities.map((a) => [a.id, a]));

export function getListeningActivity(slug: string): import("./types").ListeningActivity | null {
  return bySlug.get(slug) ?? null;
}

export function getListeningActivityById(id: string): import("./types").ListeningActivity | null {
  return byId.get(id) ?? null;
}

const exerciseByActivity = new Map<string, ListeningExercise>();
for (const activity of listeningActivities) {
  for (const exercise of activity.exercises) {
    exerciseByActivity.set(`${activity.id}:${exercise.id}`, exercise);
  }
}

export function getListeningExercise(
  activityId: string,
  exerciseId: string,
): ListeningExercise | null {
  return exerciseByActivity.get(`${activityId}:${exerciseId}`) ?? null;
}

export function activitiesByStage(stage: ListeningStageId) {
  return listeningActivities.filter((a) => a.stage === stage);
}

/** Total audio length estimate (display metadata): words ≈ 160 wpm at rate 1. */
export function listeningAudioSeconds(
  activity: import("./types").ListeningActivity,
): number {
  const words = activity.segments.reduce(
    (sum, s) => sum + s.text.split(/\s+/).filter(Boolean).length,
    0,
  );
  const rate = activity.audio.rate ?? 1;
  const gaps = activity.segments.length * (activity.audio.gapMs ?? 400);
  return Math.round((words / (150 * rate)) * 60 + gaps / 1000);
}

// ---------------------------------------------------------------------------
// Integrity validation (used by tests)
// ---------------------------------------------------------------------------

export interface ListeningIntegrityReport {
  ok: boolean;
  errors: string[];
}

const CHOICE_FORMATS: ListeningFormat[] = [
  "listen-select",
  "speaker-identify",
  "specific-info",
  "overall-meaning",
];

function isChoiceExercise(
  exercise: ListeningExercise,
): exercise is ChoiceListeningExercise {
  return CHOICE_FORMATS.includes(exercise.format);
}

export function validateListeningLibrary(): ListeningIntegrityReport {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const ids = new Set<string>();
  const stageIds = new Set(listeningStages.map((s) => s.id));
  const formatCounts = new Map<ListeningFormat, number>();

  for (const activity of listeningActivities) {
    const where = `activity ${activity.slug}`;
    if (slugs.has(activity.slug)) errors.push(`${where}: duplicate slug`);
    slugs.add(activity.slug);
    if (ids.has(activity.id)) errors.push(`${where}: duplicate id`);
    ids.add(activity.id);
    if (!stageIds.has(activity.stage)) errors.push(`${where}: unknown stage ${activity.stage}`);

    const segmentIds = new Set(activity.segments.map((s) => s.id));
    if (segmentIds.size !== activity.segments.length) {
      errors.push(`${where}: duplicate segment ids`);
    }
    if (activity.segments.length < 4) errors.push(`${where}: fewer than 4 segments`);
    for (const segment of activity.segments) {
      if (segment.text.trim().length === 0) errors.push(`${where}: empty segment ${segment.id}`);
      if (segment.speakerId && !activity.speakers?.some((s) => s.id === segment.speakerId)) {
        errors.push(`${where}: segment ${segment.id} references unknown speaker`);
      }
    }
    if (activity.speakers) {
      const speakerIds = new Set(activity.speakers.map((s) => s.id));
      if (speakerIds.size !== activity.speakers.length) {
        errors.push(`${where}: duplicate speaker ids`);
      }
    }

    if (activity.exercises.length < 4) errors.push(`${where}: fewer than 4 exercises`);
    const exerciseIds = new Set<string>();
    for (const exercise of activity.exercises) {
      const xwhere = `${where} exercise ${exercise.id}`;
      if (exerciseIds.has(exercise.id)) errors.push(`${where}: duplicate exercise id`);
      exerciseIds.add(exercise.id);
      formatCounts.set(exercise.format, (formatCounts.get(exercise.format) ?? 0) + 1);
      if (exercise.prompt.trim().length === 0) errors.push(`${xwhere}: empty prompt`);
      if (exercise.feedback.correctAnswer.trim().length === 0) {
        errors.push(`${xwhere}: missing correct answer`);
      }
      if (exercise.hints.length === 0) errors.push(`${xwhere}: no hints`);
      if (exercise.feedback.revealSegments.length === 0) {
        errors.push(`${xwhere}: no reveal segments`);
      }
      for (const segmentId of exercise.segmentIds) {
        if (!segmentIds.has(segmentId)) {
          errors.push(`${xwhere}: references unknown segment ${segmentId}`);
        }
      }
      if (isChoiceExercise(exercise)) {
        if (exercise.options.length < 3) errors.push(`${xwhere}: fewer than 3 options`);
        if (!exercise.options.some((o) => o.id === exercise.correctOptionId)) {
          errors.push(`${xwhere}: correct option not among options`);
        }
        const optionIds = new Set(exercise.options.map((o) => o.id));
        if (optionIds.size !== exercise.options.length) {
          errors.push(`${xwhere}: duplicate option ids`);
        }
        if (exercise.format === "speaker-identify" && !activity.speakers) {
          errors.push(`${xwhere}: speaker-identify requires activity speakers`);
        }
      } else if (exercise.format === "listen-complete") {
        const complete = exercise as CompleteListeningExercise;
        const placeholders = complete.template.match(/\{\d+\}/g) ?? [];
        if (placeholders.length !== complete.blanks.length) {
          errors.push(`${xwhere}: template placeholders do not match blanks`);
        }
        for (const blank of complete.blanks) {
          if (blank.acceptedAnswers.length === 0) {
            errors.push(`${xwhere}: blank ${blank.id} has no accepted answers`);
          }
        }
      } else if (exercise.format === "listen-arrange") {
        const arrange = exercise as ArrangeListeningExercise;
        const itemIds = new Set(arrange.items.map((i) => i.id));
        if (itemIds.size !== arrange.items.length) errors.push(`${xwhere}: duplicate item ids`);
        if (
          arrange.correctOrder.length !== arrange.items.length ||
          !arrange.correctOrder.every((id) => itemIds.has(id))
        ) {
          errors.push(`${xwhere}: correctOrder is not a permutation of items`);
        }
      } else {
        const text = exercise as TextListeningExercise;
        if (text.acceptedAnswers.length === 0 && !text.keywords) {
          errors.push(`${xwhere}: no accepted answers or keywords`);
        }
      }
    }
  }

  // Every stage must have at least one activity.
  for (const stage of listeningStages) {
    if (!listeningActivities.some((a) => a.stage === stage.id)) {
      errors.push(`library: stage ${stage.id} has no activities`);
    }
  }
  // Every exercise format must be used.
  for (const format of LISTENING_FORMATS) {
    if ((formatCounts.get(format) ?? 0) < 2) {
      errors.push(`library: format ${format} used fewer than 2 times`);
    }
  }
  // Comprehension-assessing stages must lock the transcript.
  for (const activity of listeningActivities) {
    if (activity.transcriptPolicy === "open" && activity.stage !== "sounds") {
      errors.push(`${activity.slug}: open transcript only allowed in the sounds stage`);
    }
  }

  return { ok: errors.length === 0, errors };
}
