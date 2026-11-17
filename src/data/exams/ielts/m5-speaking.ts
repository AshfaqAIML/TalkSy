/**
 * Module 5 — IELTS Speaking: the Speaking Masterclass (PROMPT 47).
 *
 * The complete Speaking academy, rebuilt from the four v1 lessons into a
 * sixty-nine-lesson masterclass across six chapters, delivered at the v3
 * textbook standard. The Speaking test is identical for Academic and
 * General Training, so the module lives once in the core programme.
 *
 *   1. speaking-foundations (10) — the prompt's Part 1: the examination
 *      format, what the examiner assesses, answer development, natural
 *      fluency, avoiding memorised responses, pronunciation as a criterion,
 *      vocabulary, grammar accuracy in speech, extending answers naturally
 *      and handling unfamiliar questions
 *   2. speaking-part1-topics (19) — the prompt's Part 2: one lesson per
 *      familiar-topic set (introduction, work, study, hometown,
 *      accommodation, family, friends, hobbies, food, travel, technology,
 *      education, daily routines, shopping, weather, books, music, sports,
 *      social activities), each with the common question patterns, how to
 *      understand and develop a response, useful vocabulary, natural
 *      expressions, example responses, weak-versus-improved pairs and
 *      practice questions — teaching ideas and language, never fixed
 *      answers to memorise
 *   3. speaking-part2-craft (8) — the cue-card process: understanding cue
 *      cards, identifying key requirements, the one-minute preparation,
 *      effective note-taking, organising ideas, maintaining continuity,
 *      speaking at length and handling unfamiliar topics
 *   4. speaking-part2-cards (11) — one lesson per description family
 *      (people, places, events, experiences, objects, activities,
 *      achievements, books, films, travel, learning experiences), each
 *      carrying a complete original cue card with the seven teaching
 *      elements: the prompt, planning notes, vocabulary suggestions, a
 *      natural sample response, response analysis, alternative approaches
 *      and follow-up practice
 *   5. speaking-part3-discussion (11) — abstract discussion, giving
 *      opinions, explaining reasons, comparing, evaluating, speculating,
 *      discussing social changes, discussing future possibilities,
 *      supporting arguments, developing nuanced answers, and progressively
 *      difficult discussion practice
 *   6. speaking-pronunciation (10) — individual sounds, word stress,
 *      sentence stress, intonation, connected speech, linking, rhythm,
 *      pausing, clear articulation and natural speech — accent-neutral
 *      throughout: no national accent is treated as worth more than
 *      another; the criterion rewards being easy to understand
 *
 * The practice bank (19 Part 1 interview rounds, 11 flagship cue cards,
 * 11 practice cue cards, 10 Part 3 discussion sets — 51 original items
 * organised by part, topic, difficulty, proficiency and skill), the
 * three-part Speaking Simulator (question presentation, preparation
 * timer, recording, replay, transcription, response history, feedback)
 * and the criterion-based evaluation engine live beside this course in
 * the Speaking Masterclass hub (#/exams/ielts/speaking):
 * src/data/exams/ielts/speaking-bank/ and src/lib/exams/speaking-bank/.
 *
 * Format facts: 11–14 minutes, three parts — a 4–5 minute interview on
 * familiar topics, a 3–4 minute long turn on a cue card (one minute of
 * preparation, one to two minutes of speech), and a 4–5 minute two-way
 * discussion; the whole test is recorded; delivery is with a certified
 * examiner in person or by live video call; four equally weighted
 * criteria (Fluency and Coherence, Lexical Resource, Grammatical Range
 * and Accuracy, Pronunciation).
 */

import type { ModuleSpec } from "./types";
import { speakingFoundationsLessonsA } from "./m5/ch1-foundations-a";
import { speakingFoundationsLessonsB } from "./m5/ch1-foundations-b";
import { speakingPart1TopicsA } from "./m5/ch2-part1-a";
import { speakingPart1TopicsB } from "./m5/ch2-part1-b";
import { speakingPart1TopicsC } from "./m5/ch2-part1-c";
import { speakingPart2CraftLessonsA } from "./m5/ch3-craft-a";
import { speakingPart2CraftLessonsB } from "./m5/ch3-craft-b";
import { speakingCueCardLessonsA } from "./m5/ch4-cards-a";
import { speakingCueCardLessonsB } from "./m5/ch4-cards-b";
import { speakingPart3LessonsA } from "./m5/ch5-discussion-a";
import { speakingPart3LessonsB } from "./m5/ch5-discussion-b";
import { speakingPronunciationLessonsA } from "./m5/ch6-pronunciation-a";
import { speakingPronunciationLessonsB } from "./m5/ch6-pronunciation-b";

export const module5Speaking: ModuleSpec = {
  slug: "module-5-speaking",
  title: "Module 5 — IELTS Speaking",
  description:
    "The complete Speaking academy: the ten speaking foundations from test format to handling unfamiliar questions, one masterclass lesson per Part 1 familiar topic, the eight-step cue-card craft with one lesson per description family (each carrying a complete original cue card with sample response and analysis), the eleven discussion skills of Part 3 with progressively difficult practice, and the accent-neutral pronunciation programme — taught as ideas and language, never scripts to memorise.",
  units: [
    {
      slug: "speaking-foundations",
      title: "Speaking foundations",
      description:
        "The ten crafts every speaking band is built on: the examination format, what the examiner assesses, answer development, natural fluency, avoiding memorised responses, pronunciation as a criterion, vocabulary, grammar accuracy in speech, extending answers naturally and handling unfamiliar questions.",
      lessons: [...speakingFoundationsLessonsA, ...speakingFoundationsLessonsB],
    },
    {
      slug: "speaking-part1-topics",
      title: "Part 1 — the nineteen topic sets",
      description:
        "One lesson per familiar-topic set: introduction, work, study, hometown, accommodation, family, friends, hobbies, food, travel, technology, education, daily routines, shopping, weather, books, music, sports and social activities — question patterns, answer development, useful vocabulary, natural expressions, example responses, weak-versus-improved pairs and practice questions.",
      lessons: [...speakingPart1TopicsA, ...speakingPart1TopicsB, ...speakingPart1TopicsC],
    },
    {
      slug: "speaking-part2-craft",
      title: "Part 2 — the cue-card craft",
      description:
        "The complete cue-card process: understanding cue cards, identifying key requirements, the one-minute preparation, effective note-taking, organising ideas, maintaining continuity, speaking at length and handling unfamiliar topics.",
      lessons: [...speakingPart2CraftLessonsA, ...speakingPart2CraftLessonsB],
    },
    {
      slug: "speaking-part2-cards",
      title: "Part 2 — the eleven cue-card families",
      description:
        "One lesson per description family — people, places, events, experiences, objects, activities, achievements, books, films, travel and learning experiences — each carrying a complete original cue card: the prompt, planning notes, vocabulary suggestions, a natural sample response, response analysis, alternative approaches and follow-up practice.",
      lessons: [...speakingCueCardLessonsA, ...speakingCueCardLessonsB],
    },
    {
      slug: "speaking-part3-discussion",
      title: "Part 3 — discussion",
      description:
        "The eleven discussion skills: abstract discussion, giving opinions, explaining reasons, comparing, evaluating, speculating, discussing social changes, discussing future possibilities, supporting arguments, developing nuanced answers — closed by progressively difficult discussion practice.",
      lessons: [...speakingPart3LessonsA, ...speakingPart3LessonsB],
    },
    {
      slug: "speaking-pronunciation",
      title: "Pronunciation",
      description:
        "The accent-neutral pronunciation programme: individual sounds, word stress, sentence stress, intonation, connected speech, linking, rhythm, pausing, clear articulation and natural speech. No national accent is treated as worth more than another — the criterion rewards being easy to understand.",
      lessons: [...speakingPronunciationLessonsA, ...speakingPronunciationLessonsB],
    },
  ],
};
