/**
 * Curated learning paths (PROMPT 32 format A) — composition metadata ONLY.
 *
 * A path definition never duplicates content: each step REFERENCES real
 * content (curriculum level ids, live CMS course slugs, practice surfaces)
 * and the server computes chapters, lessons, durations and progress from
 * the sources of truth. Tests assert every referenced id exists.
 */

export type PathStepDef =
  | { kind: "curriculum-level"; levelId: string; optional?: boolean }
  | { kind: "cms-course"; slug: string; optional?: boolean }
  | {
      kind: "practice";
      labId:
        | "reading"
        | "listening"
        | "speaking"
        | "writing"
        | "lab"
        | "vocabulary"
        | "grammar-clinic"
        | "pronunciation"
        | "simulators";
      optional?: true;
    };

export interface LearningPathDef {
  id: string;
  title: string;
  description: string;
  /** Starting level label. */
  level: string;
  outcomes: string[];
  skills: ("reading" | "listening" | "speaking" | "writing" | "vocabulary" | "grammar" | "general")[];
  topics: (
    | "beginner-english"
    | "grammar"
    | "vocabulary"
    | "sentence-formation"
    | "spoken-english"
    | "reading"
    | "writing"
    | "listening"
    | "pronunciation"
  )[];
  featured?: boolean;
  /** Ordered steps; practice steps are always optional reinforcement. */
  steps: PathStepDef[];
}

export const LEARNING_PATHS: LearningPathDef[] = [
  {
    id: "complete-english-programme",
    title: "The Complete English Programme",
    description:
      "The full TalkSy core curriculum: 56 chapters across six levels, from the alphabet to capstone projects. Every chapter builds on the last with real prerequisites, and seven parallel strands — reading, writing, listening, speaking, pronunciation, vocabulary and communication — run through every level.",
    level: "Pre-A1",
    outcomes: [
      "Progress from absolute beginner (Pre-A1) to advanced communication (C1) in one continuous programme",
      "Master the full grammar system, from the alphabet to inversion and cleft sentences",
      "Practise all seven skills continuously at every level",
      "Tell stories, argue with evidence, write professionally and present with confidence",
      "Finish with a capstone project: research, presentation and reflection",
    ],
    skills: ["general", "grammar", "reading", "writing", "listening", "speaking", "vocabulary"],
    topics: ["beginner-english", "grammar", "reading", "writing", "listening", "spoken-english", "pronunciation", "vocabulary"],
    featured: true,
    steps: [
      { kind: "cms-course", slug: "english-from-zero" },
      { kind: "cms-course", slug: "beginner-english" },
      { kind: "practice", labId: "vocabulary", optional: true },
      { kind: "cms-course", slug: "elementary-english" },
      { kind: "cms-course", slug: "intermediate-english" },
      { kind: "practice", labId: "grammar-clinic", optional: true },
      { kind: "cms-course", slug: "upper-intermediate-english" },
      { kind: "practice", labId: "writing", optional: true },
      { kind: "cms-course", slug: "advanced-communication" },
      { kind: "practice", labId: "simulators", optional: true },
    ],
  },
  {
    id: "zero-to-confident",
    title: "English from Zero to Confident Communication",
    description:
      "The complete TalkSy journey: start with no English at all, build your first sentences, master the grammar core, and train every skill in the labs along the way.",
    level: "Pre-A1",
    outcomes: [
      "Greet people, introduce yourself and talk about your family",
      "Use the verb “to be” and your first everyday vocabulary",
      "Understand the eight parts of speech and all 12 tenses",
      "Build, combine and transform English sentences",
      "Practise reading, listening, speaking and writing as you go",
    ],
    skills: ["general", "grammar", "reading", "listening", "speaking", "writing", "vocabulary"],
    topics: ["beginner-english", "reading", "listening", "spoken-english", "writing"],
    featured: true,
    steps: [
      { kind: "curriculum-level", levelId: "pre-a1" },
      { kind: "practice", labId: "listening", optional: true },
      { kind: "practice", labId: "reading", optional: true },
      { kind: "curriculum-level", levelId: "a1" },
      { kind: "practice", labId: "speaking", optional: true },
      { kind: "curriculum-level", levelId: "grammar-core" },
      { kind: "practice", labId: "writing", optional: true },
      { kind: "practice", labId: "simulators", optional: true },
    ],
  },
  {
    id: "beginner-to-elementary",
    title: "Beginner to Elementary English",
    description:
      "Pre-A1 and A1 in one line, plus the Everyday English Foundations course from our teaching team — the fastest honest route from zero to simple conversations.",
    level: "Pre-A1",
    outcomes: [
      "Say hello, give your name and ask simple questions",
      "Talk about your family and daily routine",
      "Read very short passages at Beginner level",
      "Hold your first role-play conversation with the AI partner",
    ],
    skills: ["general", "reading", "listening", "speaking"],
    topics: ["beginner-english"],
    steps: [
      { kind: "curriculum-level", levelId: "pre-a1" },
      { kind: "curriculum-level", levelId: "a1" },
      { kind: "cms-course", slug: "everyday-english-foundations" },
      { kind: "practice", labId: "simulators", optional: true },
    ],
  },
  {
    id: "complete-grammar",
    title: "Complete English Grammar",
    description:
      "Fourteen lessons through Grammar School and the Sentence Construction Laboratory: all eight parts of speech, all 12 tenses compared, and seven stages of sentence building — with the Error Clinic for your own sentences.",
    level: "A2",
    outcomes: [
      "Explain every part of speech with examples",
      "Compare any two tenses by meaning, form and use",
      "Build every sentence type from tiles to transformations",
      "Correct your own mistakes with rules, not guesses",
    ],
    skills: ["grammar", "writing"],
    topics: ["grammar", "sentence-formation"],
    featured: true,
    steps: [
      { kind: "curriculum-level", levelId: "grammar-core" },
      { kind: "practice", labId: "grammar-clinic", optional: true },
    ],
  },
  {
    id: "spoken-development",
    title: "Spoken English Development",
    description:
      "A speaking-first route: A1 conversation lessons, the Speaking Lab at three tiers, dedicated pronunciation training and eleven AI role-play scenarios from shopping to job interviews.",
    level: "A1",
    outcomes: [
      "Answer questions about yourself with growing fluency",
      "Pronounce words with correct stress and problem sounds",
      "Complete everyday role-plays: shopping, doctor, telephone",
      "Practise interview questions with the AI partner",
    ],
    skills: ["speaking", "listening", "vocabulary"],
    topics: ["spoken-english", "pronunciation"],
    featured: true,
    steps: [
      { kind: "curriculum-level", levelId: "a1" },
      { kind: "practice", labId: "speaking", optional: true },
      { kind: "practice", labId: "pronunciation", optional: true },
      { kind: "practice", labId: "simulators", optional: true },
    ],
  },
  {
    id: "academic-writing",
    title: "Academic and Professional Writing",
    description:
      "From paragraphs to professional emails, reports and essays: the Writing Studio's upper tiers combined with the IELTS Academic writing modules for exam-grade structure.",
    level: "B1+",
    outcomes: [
      "Write structured paragraphs and descriptions",
      "Draft formal letters and professional emails",
      "Build reports and argumentative essays with clear theses",
      "Apply the IELTS Task 1 / Task 2 report structures",
    ],
    skills: ["writing"],
    topics: ["writing"],
    steps: [
      { kind: "practice", labId: "writing", optional: true },
      { kind: "cms-course", slug: "ielts-academy-academic" },
    ],
  },
];

export function getPathDef(id: string): LearningPathDef | undefined {
  return LEARNING_PATHS.find((p) => p.id === id);
}
