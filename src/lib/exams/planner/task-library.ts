/**
 * Daily-task library for the planner.
 *
 * Every task deep-links content that already exists in EnglishPath
 * (Divisions A & B and the exam academy) — the planner schedules practice,
 * it never invents a parallel curriculum. Templates are grouped per
 * section with stable hrefs; the generator rotates through them
 * deterministically (no randomness — same inputs, same plan).
 *
 * Time estimates are honest ranges for a typical learner at that activity,
 * not promises.
 */

import type { SectionKey } from "../types";
import type { PlannerDifficulty, PlannerTaskType } from "./types";

export type TaskTemplate = {
  type: PlannerTaskType;
  section: SectionKey | null;
  title: string;
  detail: string;
  minutes: number;
  href: string;
  /** Lowest difficulty this template suits (templates scale by phase). */
  baseDifficulty: PlannerDifficulty;
};

/**
 * Library per section. Each section mixes its exam-skill work with the
 * cross-skills that feed it (vocabulary, grammar) so every week touches
 * every activity type the plan promises.
 */
export const TASK_LIBRARY: Record<SectionKey, TaskTemplate[]> = {
  listening: [
    {
      type: "listening",
      section: "listening",
      title: "Listening Lab — everyday audio with comprehension checks",
      detail: "Work through one Listening Lab activity and review every wrong answer.",
      minutes: 20,
      href: "#/listening",
      baseDifficulty: "easier",
    },
    {
      type: "listening",
      section: "listening",
      title: "Listening Lab — extended audio (note-taking focus)",
      detail: "Practise an extended listen and take notes in shorthand as you go.",
      minutes: 25,
      href: "#/listening",
      baseDifficulty: "medium",
    },
    {
      type: "vocabulary",
      section: "listening",
      title: "Word World — hear words in context sentences",
      detail: "Review one topic set with audio so the words land with their sounds.",
      minutes: 15,
      href: "#/vocabulary/context",
      baseDifficulty: "easier",
    },
    {
      type: "listening",
      section: "listening",
      title: "Exam-format listening drill (dictation & completion)",
      detail: "Run a section-practice listening set from the mock launcher and inspect each mistake.",
      minutes: 20,
      href: "#/exams/mocks",
      baseDifficulty: "medium",
    },
  ],
  reading: [
    {
      type: "reading",
      section: "reading",
      title: "Reading Room — one text with questions",
      detail: "Read one Reading Room text end-to-end, then answer and review the questions.",
      minutes: 25,
      href: "#/reading",
      baseDifficulty: "easier",
    },
    {
      type: "vocabulary",
      section: "reading",
      title: "Word World — academic & topic vocabulary",
      detail: "Study one topic word list; note collocations, not just meanings.",
      minutes: 15,
      href: "#/vocabulary",
      baseDifficulty: "easier",
    },
    {
      type: "reading",
      section: "reading",
      title: "Exam-format reading drill (True/False/Not Given, matching)",
      detail: "Run a section-practice reading set from the mock launcher and re-read every explanation.",
      minutes: 25,
      href: "#/exams/mocks",
      baseDifficulty: "medium",
    },
    {
      type: "reading",
      section: "reading",
      title: "Reading Room — glossary-equipped advanced text",
      detail: "Take on a harder text; summarise each paragraph in one line afterwards.",
      minutes: 25,
      href: "#/reading",
      baseDifficulty: "harder",
    },
  ],
  writing: [
    {
      type: "writing",
      section: "writing",
      title: "Writing Studio — one guided assignment",
      detail: "Complete a Writing Studio assignment and read the rubric feedback in full.",
      minutes: 30,
      href: "#/writing",
      baseDifficulty: "easier",
    },
    {
      type: "grammar",
      section: "writing",
      title: "Grammar Clinic — fix your own errors",
      detail: "Paste a recent paragraph into the Grammar Clinic and repair every flagged issue.",
      minutes: 15,
      href: "#/grammar/clinic",
      baseDifficulty: "medium",
    },
    {
      type: "grammar",
      section: "writing",
      title: "Sentence Lab — build & rebuild sentences",
      detail: "Rebuild sentences until the structures feel automatic before writing.",
      minutes: 15,
      href: "#/lab",
      baseDifficulty: "easier",
    },
    {
      type: "writing",
      section: "writing",
      title: "Exam-format writing task + AI evaluation",
      detail: "Write one exam task from a mock, then run the evaluation panel for criterion feedback.",
      minutes: 30,
      href: "#/exams/mocks",
      baseDifficulty: "harder",
    },
    {
      type: "vocabulary",
      section: "writing",
      title: "Word World — build an academic word list",
      detail: "Grow a word list you can actually use in essays; revisit it while writing.",
      minutes: 15,
      href: "#/vocabulary/lists",
      baseDifficulty: "medium",
    },
  ],
  speaking: [
    {
      type: "speaking",
      section: "speaking",
      title: "Speaking Lab — guided activity at your level",
      detail: "Record a guided speaking activity and compare with the model.",
      minutes: 20,
      href: "#/speaking/practice",
      baseDifficulty: "easier",
    },
    {
      type: "speaking",
      section: "speaking",
      title: "Pronunciation training — targeted sounds",
      detail: "One focused pronunciation round on the sounds you miss most.",
      minutes: 15,
      href: "#/speaking/pronunciation",
      baseDifficulty: "medium",
    },
    {
      type: "speaking",
      section: "speaking",
      title: "AI Tutor — free conversation practice",
      detail: "Hold a 15-minute conversation; ask the tutor to correct you as you go.",
      minutes: 15,
      href: "#/tutor",
      baseDifficulty: "medium",
    },
    {
      type: "speaking",
      section: "speaking",
      title: "Exam-format speaking simulation + evaluation",
      detail: "Answer exam speaking prompts from a mock, then evaluate your transcript for criteria.",
      minutes: 20,
      href: "#/exams/mocks",
      baseDifficulty: "harder",
    },
  ],
};

/** Cross-section warm-up micro-tasks (short, daily-touch sized). */
export const WARMUP_LIBRARY: Record<SectionKey, TaskTemplate[]> = {
  listening: [
    {
      type: "listening",
      section: "listening",
      title: "Warm-up: 10 minutes of Listening Lab",
      detail: "Short daily contact keeps your ear tuned.",
      minutes: 10,
      href: "#/listening",
      baseDifficulty: "easier",
    },
    {
      type: "vocabulary",
      section: "listening",
      title: "Warm-up: flashcards with audio",
      detail: "Quick flashcard round — say each word aloud before flipping.",
      minutes: 10,
      href: "#/vocabulary/flashcards",
      baseDifficulty: "easier",
    },
  ],
  reading: [
    {
      type: "vocabulary",
      section: "reading",
      title: "Warm-up: today's word set",
      detail: "Clear the daily vocabulary set — small but compounding.",
      minutes: 10,
      href: "#/vocabulary/today",
      baseDifficulty: "easier",
    },
    {
      type: "reading",
      section: "reading",
      title: "Warm-up: skim one short text",
      detail: "Skim for gist only — main idea in one sentence, move on.",
      minutes: 10,
      href: "#/reading",
      baseDifficulty: "easier",
    },
  ],
  writing: [
    {
      type: "grammar",
      section: "writing",
      title: "Warm-up: Sentence Lab quick round",
      detail: "Three or four sentence builds to switch your English on.",
      minutes: 10,
      href: "#/lab",
      baseDifficulty: "easier",
    },
    {
      type: "vocabulary",
      section: "writing",
      title: "Warm-up: academic word flashcards",
      detail: "Flashcard round on your essay word list.",
      minutes: 10,
      href: "#/vocabulary/flashcards",
      baseDifficulty: "easier",
    },
  ],
  speaking: [
    {
      type: "speaking",
      section: "speaking",
      title: "Warm-up: read aloud for two minutes",
      detail: "Read any passage aloud — wake up the muscles before real practice.",
      minutes: 10,
      href: "#/speaking/practice",
      baseDifficulty: "easier",
    },
    {
      type: "speaking",
      section: "speaking",
      title: "Warm-up: shadow a short recording",
      detail: "Shadow a Listening Lab clip sentence by sentence.",
      minutes: 10,
      href: "#/listening",
      baseDifficulty: "easier",
    },
  ],
};

/** Template pool for a section at a rotation index (deterministic). */
export function libraryTaskFor(section: SectionKey, rotation: number): TaskTemplate {
  const pool = TASK_LIBRARY[section];
  return pool[rotation % pool.length];
}

/** Warm-up template pool for a section at a rotation index (deterministic). */
export function warmupTaskFor(section: SectionKey, rotation: number): TaskTemplate {
  const pool = WARMUP_LIBRARY[section];
  return pool[rotation % pool.length];
}
