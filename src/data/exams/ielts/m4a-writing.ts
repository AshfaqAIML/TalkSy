/**
 * Module 4A — IELTS Academic Writing: the Writing Masterclass
 * (PROMPT 46, Parts A–C and E, built on the PROMPT 43 v3 textbook standard).
 *
 * The complete Academic Writing academy: four chapters, twenty-seven lessons.
 *
 *   1. awriting-foundations  — the eleven writing crafts (Part A): task
 *                              instructions, question requirements,
 *                              planning, paragraph organisation, grammar
 *                              accuracy, vocabulary, cohesion, coherence,
 *                              punctuation, sentence variety and time
 *                              management
 *   2. awriting-task1        — one lesson per visual family (Part B): bar,
 *                              line, pie, table, mixed, process and map,
 *                              each on the ten-component structure
 *                              (analyse the visual → main features →
 *                              data selection → comparison → trends →
 *                              organisation → introduction → overview →
 *                              detail paragraphs → avoiding irrelevant
 *                              data)
 *   3. awriting-task2        — one lesson per essay family (Part C):
 *                              opinion, discussion, advantages and
 *                              disadvantages, problem and solution, cause
 *                              and effect, two-part and direct questions,
 *                              each on the ten-point structure
 *   4. awriting-assessment   — how examiners score the writing (the four
 *                              criteria, honestly framed) and how to study
 *                              model answers at different levels (Part E)
 *
 * The task library (22 original assignments with model answers, planning
 * notes, eight-element analyses and level samples), the writing studio
 * (timed and untimed, drafts, revisions) and the feedback engine live
 * beside this course in the Writing Masterclass hub (#/exams/ielts/writing):
 * src/data/exams/ielts/writing-bank/ and src/lib/exams/writing-bank/.
 *
 * Format facts: 60 minutes total, two tasks — Task 1 a 150+ word report
 * on visual information in 20 minutes, Task 2 a 250+ word essay in 40
 * minutes carrying roughly double the weight.
 */

import type { ModuleSpec } from "./types";
import { awritingFoundationsLessonsA } from "./m4/ch1-foundations-a";
import { awritingFoundationsLessonsB } from "./m4/ch1-foundations-b";
import { awritingTask1LessonsA } from "./m4/ch2-task1-a";
import { awritingTask1LessonsB } from "./m4/ch2-task1-b";
import { awritingTask2LessonsA } from "./m4/ch3-task2-a";
import { awritingTask2LessonsB } from "./m4/ch3-task2-b";
import { awritingAssessmentLessons } from "./m4/ch4-assessment";

export const module4aWriting: ModuleSpec = {
  slug: "module-4a-academic-writing",
  title: "Module 4 — Academic Writing",
  description:
    "The complete Academic Writing academy: the eleven foundation crafts from instruction-reading to time management, one masterclass lesson per Task 1 visual family (bar, line, pie, table, mixed, process and map) on the ten-component structure, one lesson per Task 2 essay family (opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part and direct questions), and the assessment lessons that decode the four criteria and teach model answers at different levels.",
  units: [
    {
      slug: "awriting-foundations",
      title: "Writing foundations",
      description:
        "The eleven crafts every writing band is built on: reading the instructions, analysing the question's requirements, planning, paragraph organisation, grammar accuracy, vocabulary, cohesion, coherence, punctuation, sentence variety and time management — taught through Academic Task 1 reports and Task 2 essays.",
      lessons: [...awritingFoundationsLessonsA, ...awritingFoundationsLessonsB],
    },
    {
      slug: "awriting-task1",
      title: "Task 1 — every visual family",
      description:
        "One masterclass lesson per visual family — bar charts, line graphs, pie charts, tables, mixed charts, process diagrams and maps — each on the ten-component structure from analysing the visual to avoiding irrelevant data, with worked mini-models and family-specific trap catalogues.",
      lessons: [...awritingTask1LessonsA, ...awritingTask1LessonsB],
    },
    {
      slug: "awriting-task2",
      title: "Task 2 — every essay family",
      description:
        "One masterclass lesson per essay family — opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part questions and direct questions — each teaching the ten craft points from understanding the question to avoiding repetition, with fully planned prompts and worked mini-models.",
      lessons: [...awritingTask2LessonsA, ...awritingTask2LessonsB],
    },
    {
      slug: "awriting-assessment",
      title: "Assessment and model answers",
      description:
        "How the writing is actually scored — the four criteria, what each rewards, how they combine — and how to study model answers at different proficiency levels without memorising them. All band references are educational estimates against the publicly known descriptor approach.",
      lessons: awritingAssessmentLessons,
    },
  ],
};
