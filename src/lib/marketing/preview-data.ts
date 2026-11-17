/**
 * Real content for the public-site product previews.
 *
 * Everything here is extracted from the actual curriculum source at build
 * time — the landing page shows the real "Hello and Goodbye" lesson, its
 * real vocabulary, its real dialogue and its real exercises. If the
 * curriculum changes, the marketing preview changes with it.
 */

import { a1Unit1 } from "@/data/curriculum/a1-unit1";
import type { CourseExercise } from "@/data/curriculum/types";

const lessons = a1Unit1.lessons;
const first = lessons[0]; // a1-1-1 "Hello and Goodbye"
const next = lessons[1]; // a1-1-2 "The Alphabet and Numbers 1–10"

function findByType<T extends CourseExercise["type"]>(type: T): Extract<CourseExercise, { type: T }> | undefined {
  return first.exercises.find((e) => e.type === type) as Extract<CourseExercise, { type: T }> | undefined;
}

const orderExercise = findByType("order");
const mcqExercise = findByType("mcq");

/** Deterministic word shuffle so SSR and client render identically. */
function shuffledWords(answer: string): string[] {
  const words = answer.split(" ");
  // "Nice to meet you" → a fixed, readable scramble (no Math.random on the server).
  const order = [2, 0, 3, 1];
  return order.map((i) => words[i] ?? words[0]);
}

export const lessonPreview = {
  unitLabel: "Beginner · Unit 1 · Lesson 1",
  title: first.title,
  subtitle: first.subtitle,
  minutes: first.minutes ?? 8,
  skills: first.skills,
  vocab: first.vocab.slice(0, 4).map((v) => ({
    term: v.term,
    definition: v.definition,
    example: v.example,
  })),
  dialogue: {
    title: first.dialogue?.title ?? "",
    lines: (first.dialogue?.lines ?? []).slice(0, 4).map((l) => ({
      speaker: l.speaker,
      text: l.text,
    })),
  },
  sentenceBuilder: orderExercise
    ? {
        prompt: orderExercise.prompt,
        answer: orderExercise.answer,
        scrambled: shuffledWords(orderExercise.answer),
      }
    : null,
  quiz: mcqExercise
    ? {
        prompt: mcqExercise.prompt,
        options: mcqExercise.options,
        answerIndex: mcqExercise.answerIndex,
        explanation: mcqExercise.explanation ?? "",
      }
    : null,
  nextLesson: {
    title: next.title,
    subtitle: next.subtitle,
    minutes: next.minutes ?? 8,
  },
};

export type LessonPreview = typeof lessonPreview;
