/**
 * Category hub definitions (PROMPT 32 §2) — editorial metadata ONLY.
 *
 * Hubs never duplicate content lists: every hub page pulls its featured
 * items, chapters, lessons, resources and practice activities from the
 * unified catalogue (`/api/catalogue`) via the `topics` join and the
 * curated `featuredIds` below (references to real catalogue item ids).
 */

import type { HubId } from "./types";

export interface HubDefinition {
  id: HubId;
  title: string;
  /** Short chip above the title. */
  eyebrow: string;
  /** One attractive line. */
  tagline: string;
  /** Two-to-three sentence introduction. */
  intro: string;
  /** Longer description block. */
  description: string;
  /** What the learner will be able to do — honest, content-backed. */
  outcomes: string[];
  /** Curated featured catalogue item ids (must exist — test-enforced). */
  featuredIds: string[];
  /** Curated practice activities (lab/simulator ids) shown in the hub. */
  practiceIds: string[];
  /** The path whose chapters/lessons the hub presents, if any. */
  primaryPathId?: string;
  /** Accent skill for theming (maps to --skill-* tokens). */
  accentSkill: "reading" | "listening" | "speaking" | "writing" | "vocabulary" | "grammar" | "general";
}

export const HUBS: HubDefinition[] = [
  {
    id: "beginner-english",
    title: "Beginner English",
    eyebrow: "Category hub",
    tagline: "Your first English words — no English needed to start.",
    intro:
      "Beginner English is where TalkSy starts: Pre-A1 lessons that assume zero English, then A1 lessons that build your first real sentences and conversations. Every lesson is short, recorded and assessed honestly.",
    description:
      "The beginner shelf combines the Pre-A1 and A1 levels of the learning path with the Everyday English Foundations course from our teaching team. You will greet people, talk about yourself and your family, and survive your first café conversation — with listening, speaking and writing practice woven in.",
    outcomes: [
      "Greet people and introduce yourself politely",
      "Use the verb “to be” in statements and questions",
      "Recognise and say numbers, colours and everyday words",
      "Follow very short listening passages at Pre-A1 speed",
      "Write your first simple sentences about daily life",
    ],
    featuredIds: ["path:zero-to-confident", "course:everyday-english-foundations", "lesson:p1-1-1"],
    practiceIds: ["lab:listening-lab", "lab:reading-room", "lab:speaking-lab"],
    primaryPathId: "beginner-to-elementary",
    accentSkill: "general",
  },
  {
    id: "grammar",
    title: "Grammar",
    eyebrow: "Category hub",
    tagline: "Understand the system behind English — then build with it.",
    intro:
      "The grammar shelf holds all eight parts of speech, the complete 12-tense comparison, the Error Clinic and the Sentence Lab. Reference guides first, practice immediately after.",
    description:
      "Grammar on TalkSy is taught from meaning to form: every guide explains what a structure communicates before how to build it. The Complete English Grammar path walks through Grammar School and the Sentence Construction Laboratory in fourteen lessons; the Tense Explorer puts all twelve tenses side by side.",
    outcomes: [
      "Name and use all eight parts of speech",
      "Compare any two tenses side by side, meaning first",
      "Spot and correct your own recurring mistakes",
      "Build statements, questions, commands and exclamations",
      "Combine and transform sentences with confidence",
    ],
    featuredIds: ["path:complete-grammar", "guide:tense-comparison", "guide:prepositions"],
    practiceIds: ["lab:grammar-correction", "lab:sentence-builder"],
    primaryPathId: "complete-grammar",
    accentSkill: "grammar",
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    eyebrow: "Category hub",
    tagline: "135 words, spaced repetition, six challenge types.",
    intro:
      "Word World is the vocabulary shelf: twelve topic lists, each word with pronunciation, meanings, examples, collocations and synonyms — scheduled for review at honest intervals.",
    description:
      "Every word ships with IPA, a simple meaning, an example sentence, word partners and opposites. Flashcards and six challenge types (quiz, meaning, spelling, arrangement, context, matching) turn the lists into measured practice; your review queue is computed from your actual recall, never inflated.",
    outcomes: [
      "Learn 135 high-frequency words across 12 everyday topics",
      "Pronounce each word with syllable stress marked",
      "Use new words in your own sentences (checked)",
      "Spell accurately under the spelling challenge",
      "Keep words in memory with spaced repetition",
    ],
    featuredIds: ["lab:vocabulary-practice", "lab:spelling-practice"],
    practiceIds: ["lab:reading-room"],
    primaryPathId: undefined,
    accentSkill: "vocabulary",
  },
  {
    id: "sentence-formation",
    title: "Sentence Formation",
    eyebrow: "Category hub",
    tagline: "From word tiles to full transformations — seven stages.",
    intro:
      "Sentence formation lives in the Sentence Lab: seven construction stages that start with recognising words and end with combining and transforming full sentences.",
    description:
      "The lab teaches sentence types (statements, questions, commands, exclamations), polarity (positive and negative), expansion, combination and transformation. The Sentence Structure Reference and the Grammar Core path back the lab up with explanations for every stage.",
    outcomes: [
      "Recognise sentence types and their punctuation",
      "Turn statements into questions and negatives",
      "Expand short sentences with adjectives, adverbs and phrases",
      "Combine ideas into compound sentences",
      "Transform sentences without changing meaning",
    ],
    featuredIds: ["guide:sentence-structure", "lesson:lab-3-sentence-types", "path:complete-grammar"],
    practiceIds: ["lab:sentence-builder"],
    primaryPathId: "complete-grammar",
    accentSkill: "grammar",
  },
  {
    id: "spoken-english",
    title: "Spoken English",
    eyebrow: "Category hub",
    tagline: "Speak from day one — measured, never guessed.",
    intro:
      "The spoken-English shelf holds the Speaking Lab (22 activities), eleven AI role-play scenarios and the Spoken English Development path. Every recording is scored on real pronunciation and fluency measures.",
    description:
      "Speaking practice covers repetition, read-aloud, question answering and free response, at three tiers. The conversation simulator then puts you in everyday situations — meeting someone, shopping, the doctor, the telephone, a job interview — with an AI partner and a measured report afterwards.",
    outcomes: [
      "Pronounce words and sentences with feedback on stress and sounds",
      "Hold a short everyday conversation with an AI partner",
      "Answer questions about yourself fluently",
      "Handle practical situations: shopping, directions, phone calls",
      "Practise interview questions one at a time",
    ],
    featuredIds: ["path:spoken-development", "simulator:conv-new-person"],
    practiceIds: ["lab:speaking-lab", "lab:pronunciation"],
    primaryPathId: "spoken-development",
    accentSkill: "speaking",
  },
  {
    id: "reading",
    title: "Reading",
    eyebrow: "Category hub",
    tagline: "21 graded texts across four levels.",
    intro:
      "The Reading Room is the reading shelf: graded texts from individual words to advanced passages, each with comprehension questions, a glossary and per-paragraph progress.",
    description:
      "Texts are levelled Beginner → Advanced with categories from illustrated reading to descriptive passages. Bookmarks and paragraph-level tracking remember exactly where you stopped; comprehension is checked with graded exercises, not vibes.",
    outcomes: [
      "Read graded texts at your exact level",
      "Answer comprehension questions with evidence from the text",
      "Grow vocabulary from context with the built-in glossary",
      "Track completion per paragraph, honestly",
    ],
    featuredIds: ["lab:reading-room", "path:zero-to-confident"],
    practiceIds: ["lab:vocabulary-practice"],
    accentSkill: "reading",
  },
  {
    id: "writing",
    title: "Writing",
    eyebrow: "Category hub",
    tagline: "31 guided assignments — feedback that teaches.",
    intro:
      "The Writing Studio is the writing shelf: assignments from copying the alphabet to argumentative essays, each with a rubric and AI feedback that explains rather than rewrites.",
    description:
      "Four tiers take you from alphabet-writing and spelling through paragraphs and descriptions to formal letters, professional emails, reports and essays. The Academic and Professional Writing path combines the advanced tiers with the IELTS writing modules.",
    outcomes: [
      "Write clear paragraphs with topic and supporting sentences",
      "Describe people, places and events with precise vocabulary",
      "Write formal letters and professional emails",
      "Structure reports and argumentative essays",
      "Revise your own work using rubric feedback",
    ],
    featuredIds: ["path:academic-writing", "lab:writing-studio"],
    practiceIds: ["lab:grammar-correction"],
    primaryPathId: "academic-writing",
    accentSkill: "writing",
  },
  {
    id: "listening",
    title: "Listening",
    eyebrow: "Category hub",
    tagline: "18 audio activities, nine stages, Pre-A1 to B2.",
    intro:
      "The Listening Lab is the listening shelf: from first letter sounds to fast natural speech, every activity is audio-first with graded exercises.",
    description:
      "Nine stages walk from letter and sound recognition through words, phrases and sentences to conversations, stories, discussions and professional communication. Speed and accents increase only as the stages progress — comprehension is always checked, never assumed.",
    outcomes: [
      "Hear the difference between similar English sounds",
      "Understand numbers, words and short phrases",
      "Follow two-voice conversations in everyday places",
      "Catch meaning in fast speech with contractions",
      "Listen actively in workplace situations",
    ],
    featuredIds: ["lab:listening-lab", "path:zero-to-confident"],
    practiceIds: ["simulator:conv-telephone"],
    accentSkill: "listening",
  },
  {
    id: "pronunciation",
    title: "Pronunciation",
    eyebrow: "Category hub",
    tagline: "Stress, sounds, rhythm and intonation — trained and measured.",
    intro:
      "The pronunciation shelf lives inside the Speaking Lab: dedicated training items across word stress, individual sounds, rhythm and intonation, each scored from your recording.",
    description:
      "Pronunciation practice is not a video to watch: you record yourself, and the platform scores the match against the target. Categories cover word stress, problem sounds, sentence rhythm and intonation, so you can drill exactly what your accent needs.",
    outcomes: [
      "Place word stress correctly on common words",
      "Produce problem sounds with targeted drills",
      "Keep natural rhythm across a sentence",
      "Use rising and falling intonation for questions and statements",
    ],
    featuredIds: ["lab:pronunciation", "path:spoken-development"],
    practiceIds: ["lab:speaking-lab"],
    accentSkill: "speaking",
  },
];

export function getHub(id: string): HubDefinition | undefined {
  return HUBS.find((h) => h.id === id);
}
