/**
 * Module 4G — IELTS General Training Writing: the Writing Masterclass
 * (PROMPT 46, Parts A and D–E, built on the PROMPT 43 v3 textbook standard).
 *
 * The complete General Training Writing academy: four chapters, thirty
 * lessons, sharing nothing Academic-specific.
 *
 *   1. gwriting-foundations  — the eleven writing crafts (Part A) taught
 *                              through GT eyes: letters and everyday
 *                              essays, register and bullets — task
 *                              instructions, question requirements,
 *                              planning, paragraph organisation, grammar
 *                              accuracy, vocabulary, cohesion, coherence,
 *                              punctuation, sentence variety and time
 *                              management
 *   2. gwriting-letters      — the Task 1 letter course (Part D): the
 *                              three registers (formal, semi-formal,
 *                              informal), the six purposes (complaints,
 *                              requests, invitations, apologies,
 *                              explanations, suggestions), plus the
 *                              cross-cutting crafts of tone and letter
 *                              organisation
 *   3. gwriting-task2        — the everyday essay (Part C on GT prompts):
 *                              the seven essay families on everyday
 *                              topics in a semi-formal register
 *   4. gwriting-assessment   — how examiners score the letter and the
 *                              essay, with the GT Task 1 task-achievement
 *                              criterion (purpose, tone, bullets)
 *
 * The GT tasks in the bank (6 letters covering all purposes and
 * registers, 4 everyday essays), the writing studio and the feedback
 * engine live beside this course in the Writing Masterclass hub
 * (#/exams/ielts/writing): src/data/exams/ielts/writing-bank/.
 *
 * Format facts: 60 minutes total — Task 1 a 150+ word letter in 20
 * minutes, Task 2 a 250+ word everyday essay in 40 minutes carrying
 * roughly double the weight.
 */

import type { ModuleSpec } from "./types";
import { gwritingFoundationsLessonsA } from "./m4/g-foundations-a";
import { gwritingFoundationsLessonsB } from "./m4/g-foundations-b";
import { gwritingLettersLessonsA } from "./m4/g-letters-a";
import { gwritingLettersLessonsB } from "./m4/g-letters-b";
import { gwritingTask2LessonsA } from "./m4/g-task2-a";
import { gwritingTask2LessonsB } from "./m4/g-task2-b";
import { gwritingAssessmentLessons } from "./m4/g-assessment";

export const module4gWriting: ModuleSpec = {
  slug: "module-4g-gt-writing",
  title: "Module 4 — General Training Writing",
  description:
    "The complete General Training Writing academy: the eleven foundation crafts taught through letters and everyday essays, the full Task 1 letter course (three registers, six purposes, tone and organisation), the seven essay families on everyday GT prompts, and the assessment lesson that decodes the criteria — including the GT letter's task-achievement criterion.",
  units: [
    {
      slug: "gwriting-foundations",
      title: "Writing foundations",
      description:
        "The eleven crafts every writing band is built on, taught for the GT paper: reading the instructions (letter rubrics and essay questions), analysing the situation, audience and bullets, planning, paragraph organisation for letters and essays, grammar accuracy with register-aware contraction rules, vocabulary across the tone dial, cohesion, coherence, punctuation, sentence variety and time management.",
      lessons: [...gwritingFoundationsLessonsA, ...gwritingFoundationsLessonsB],
    },
    {
      slug: "gwriting-letters",
      title: "Task 1 — the letter course",
      description:
        "The complete letter curriculum: the three registers (formal, semi-formal, informal) and the six purposes (complaints, requests, invitations, apologies, explanations, suggestions), one masterclass lesson each, plus the cross-cutting crafts of tone control and letter organisation — every lesson built around an original model letter.",
      lessons: [...gwritingLettersLessonsA, ...gwritingLettersLessonsB],
    },
    {
      slug: "gwriting-task2",
      title: "Task 2 — the everyday essay",
      description:
        "The seven essay families on GT prompts: opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part questions and direct questions — everyday topics, semi-formal register, the same ten craft points per family with worked mini-models.",
      lessons: [...gwritingTask2LessonsA, ...gwritingTask2LessonsB],
    },
    {
      slug: "gwriting-assessment",
      title: "Assessment",
      description:
        "How the letter and the essay are scored: the four criteria with the GT specifics — task achievement as purpose, tone and bullet coverage for the letter — band profiles paraphrased honestly, all framed as educational estimates.",
      lessons: gwritingAssessmentLessons,
    },
  ],
};
