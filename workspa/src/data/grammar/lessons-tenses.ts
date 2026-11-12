import type { Lesson } from "@/data/curriculum/types";

/** Grammar School — the three tense-comparison lessons. */

export const tenseLessons: Lesson[] = [
  {
    slug: "grammar-tenses-present",
    levelId: "grammar-core",
    unit: 2,
    title: "Present Tenses Compared",
    description:
      "Present simple, continuous, perfect and perfect continuous — side by side, with meaning first.",
    estimatedMinutes: 25,
    sections: [
      {
        id: "simple-vs-continuous",
        title: "Present simple vs. present continuous",
        blocks: [
          { type: "heading", text: "Habits vs. right now" },
          {
            type: "text",
            text: "Don't memorise formulas — compare MEANINGS. The present simple is for what is generally true; the present continuous is for what is happening around this moment. Use the comparison tool below to switch between them.",
          },
          {
            type: "tense-comparison",
            title: "Compare: Present Simple ↔ Present Continuous",
            tenseIds: ["present-simple", "present-continuous"],
            note: "Ask yourself: is this ALWAYS true (simple) or happening NOW (continuous)?",
          },
          {
            type: "sentence-anatomy",
            title: "The same verb, two worlds",
            sentence: {
              pattern: "S + V(+s) — habit",
              tokens: [
                { text: "She", role: "subject" },
                { text: "works", role: "verb", note: "Present simple + s: her routine, every day." },
                { text: "in", role: "preposition" },
                { text: "a", role: "determiner" },
                { text: "bank", role: "object", note: "Object of the preposition 'in'." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "sentence-anatomy",
            title: "…and happening right now",
            sentence: {
              pattern: "S + be + V-ing",
              tokens: [
                { text: "She", role: "subject" },
                { text: "is", role: "auxiliary", note: "Helping verb 'be'." },
                { text: "working", role: "verb", note: "Main verb + -ing: in progress NOW." },
                { text: "right", role: "modifier" },
                { text: "now", role: "modifier", note: "'Now' signals the continuous." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "practice",
            title: "Practice: simple vs. continuous",
            exerciseIds: ["gtenp-1-mcq", "gtenp-2-cm", "gtenp-4-sb"],
          },
        ],
      },
      {
        id: "perfect",
        title: "Present perfect & perfect continuous",
        blocks: [
          { type: "heading", text: "Connecting past to now" },
          {
            type: "text",
            text: "The present perfect looks back from NOW: experiences (I have seen it), unfinished time (today), results (I have finished!). The perfect continuous adds duration: how long it has been going on.",
          },
          {
            type: "tense-comparison",
            title: "Compare: Present Perfect ↔ Present Perfect Continuous",
            tenseIds: ["present-perfect", "present-perfect-continuous"],
            note: "Perfect = the RESULT matters. Perfect continuous = the DURATION matters.",
          },
          {
            type: "warning",
            title: "for vs. since",
            text: "'For' + duration (for two years) · 'since' + start point (since 2020). 'Since two years' is wrong!",
          },
          {
            type: "practice",
            title: "Practice: present perfect",
            exerciseIds: ["gtenp-3-fb", "gtenp-5-mcq", "gtenp-b1-mcq", "gtenp-b3-fb"],
          },
        ],
      },
      {
        id: "review",
        title: "Review & homework",
        blocks: [
          {
            type: "practice",
            title: "Mixed present-tense practice",
            exerciseIds: ["gtenp-b2-cm"],
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write 4 sentences about your routine (present simple) and 4 about right now (continuous).",
              "Write 2 experiences with 'ever/never' (I have never…).",
              "Open the Tense Explorer from the Grammar School and compare any two present tenses.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Present simple = habits, facts, schedules (every day, usually).",
        "Present continuous = in progress now (right now, at the moment).",
        "Present perfect = past connected to now (already, yet, ever, for, since).",
        "Present perfect continuous = duration up to now (for two hours).",
      ],
      vocabulary: ["present simple", "present continuous", "present perfect", "since", "for", "already", "yet", "just"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gtenp-1-mcq",
        "gtenp-2-cm",
        "gtenp-3-fb",
        "gtenp-5-mcq",
        "gtenp-b1-mcq",
        "gtenp-b2-cm",
        "gtenp-b3-fb",
      ],
    },
  },
  {
    slug: "grammar-tenses-past",
    levelId: "grammar-core",
    unit: 2,
    title: "Past Tenses Compared",
    description:
      "Past simple, continuous, perfect and perfect continuous — see how English orders past events.",
    estimatedMinutes: 25,
    sections: [
      {
        id: "simple-vs-continuous",
        title: "Past simple vs. past continuous",
        blocks: [
          { type: "heading", text: "The photo vs. the film" },
          {
            type: "text",
            text: "Think of the past simple as a PHOTO (a finished action) and the past continuous as a FILM (an action in progress). 'I was watching TV when she called' — film + photo.",
          },
          {
            type: "tense-comparison",
            title: "Compare: Past Simple ↔ Past Continuous",
            tenseIds: ["past-simple", "past-continuous"],
            note: "Background action (was watching) + interruption (called).",
          },
          {
            type: "sentence-anatomy",
            title: "Film + photo in one sentence",
            sentence: {
              pattern: "S + was + V-ing + when + S + V2",
              tokens: [
                { text: "I", role: "subject" },
                { text: "was", role: "auxiliary", note: "Past of 'be' — continuous helper." },
                { text: "watching", role: "verb", note: "The FILM: action in progress." },
                { text: "TV", role: "object" },
                { text: "when", role: "conjunction", note: "Introduces the interruption." },
                { text: "she", role: "subject" },
                { text: "called", role: "verb", note: "The PHOTO: sudden, finished." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "practice",
            title: "Practice: past simple vs. continuous",
            exerciseIds: ["gtenpa-1-mcq", "gtenpa-2-fb", "gtenpa-b1-mcq", "gtenpa-b2-fb"],
          },
        ],
      },
      {
        id: "perfect",
        title: "Past perfect",
        blocks: [
          { type: "heading", text: "The past before the past" },
          {
            type: "text",
            text: "When you tell a story with two past events, the earlier one takes the past perfect: 'When I arrived, the film HAD started.' First: film starts. Later: I arrive.",
          },
          {
            type: "tense-comparison",
            title: "Compare: Past Simple ↔ Past Perfect",
            tenseIds: ["past-simple", "past-perfect"],
            note: "Past perfect = one step further back in time.",
          },
          {
            type: "practice",
            title: "Practice: past perfect",
            exerciseIds: ["gtenpa-4-sb", "gtenpa-5-mcq", "gtenpa-b3-cm"],
          },
        ],
      },
      {
        id: "review",
        title: "Review & homework",
        blocks: [
          {
            type: "grammar-rule",
            title: "After DID, base form!",
            rule: "Did you go? (not 'Did you went?') — 'did' already marks the past, so the main verb returns to its base form.",
            examples: [
              { english: "Did you see the film?", translation: "¿Viste la película?" },
              { english: "She didn't come yesterday.", translation: "No vino ayer." },
            ],
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write yesterday's story in 4 sentences using the past simple.",
              "Write 2 'film + photo' sentences with was/were + -ing … when …",
              "Tell a 'past before the past' story: 'When I got home, my family had…'",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Past simple = finished actions in finished time (yesterday, ago).",
        "Past continuous = in progress at a past moment (was watching when…).",
        "Past perfect = the earlier of two past events (had started).",
        "After did/didn't, the main verb is in the base form.",
      ],
      vocabulary: ["past simple", "past continuous", "past perfect", "ago", "last week", "when", "while", "by the time"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gtenpa-1-mcq",
        "gtenpa-2-fb",
        "gtenpa-3-cm",
        "gtenpa-4-sb",
        "gtenpa-5-mcq",
        "gtenpa-b1-mcq",
        "gtenpa-b2-fb",
        "gtenpa-b3-cm",
      ],
    },
  },
  {
    slug: "grammar-tenses-future",
    levelId: "grammar-core",
    unit: 2,
    title: "Future Tenses Compared",
    description:
      "will, will be -ing, will have… — predictions, plans in progress and deadlines in the future.",
    estimatedMinutes: 22,
    sections: [
      {
        id: "simple-vs-continuous",
        title: "Future simple & future continuous",
        blocks: [
          { type: "heading", text: "Predictions and promises" },
          {
            type: "text",
            text: "'Will' predicts, promises and decides on the spot. The future continuous paints an action in progress at a future moment: 'This time tomorrow, we'll be flying.'",
          },
          {
            type: "tense-comparison",
            title: "Compare: Future Simple ↔ Future Continuous",
            tenseIds: ["future-simple", "future-continuous"],
            note: "Simple = the whole action. Continuous = mid-action at a future moment.",
          },
          {
            type: "sentence-anatomy",
            title: "A future action in progress",
            sentence: {
              pattern: "S + will + be + V-ing",
              tokens: [
                { text: "This", role: "determiner" },
                { text: "time", role: "subject", note: "The future moment we're picturing." },
                { text: "tomorrow", role: "modifier" },
                { text: ",", role: "punctuation" },
                { text: "we", role: "subject" },
                { text: "will", role: "auxiliary", note: "Future helper." },
                { text: "be", role: "auxiliary", note: "Continuous helper." },
                { text: "flying", role: "verb", note: "Main verb — mid-flight!" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "practice",
            title: "Practice: future simple & continuous",
            exerciseIds: ["gtenf-1-mcq", "gtenf-4-sb", "gtenf-b2-cm", "gtenf-2-fb"],
          },
        ],
      },
      {
        id: "perfect",
        title: "Future perfect & perfect continuous",
        blocks: [
          { type: "heading", text: "Deadlines in the future" },
          {
            type: "text",
            text: "'By 5 p.m., she will have finished.' — the future perfect imagines looking BACK from a future deadline. The perfect continuous version measures duration up to that point.",
          },
          {
            type: "tense-comparison",
            title: "Compare: Future Perfect ↔ Future Perfect Continuous",
            tenseIds: ["future-perfect", "future-perfect-continuous"],
            note: "Both use 'by + future time'. Perfect = completed. Perfect continuous = duration.",
          },
          {
            type: "practice",
            title: "Practice: future perfect",
            exerciseIds: ["gtenf-3-mcq", "gtenf-b1-mcq", "gtenf-b3-fb"],
          },
        ],
      },
      {
        id: "review",
        title: "Review & homework",
        blocks: [
          {
            type: "note",
            title: "will vs. be going to",
            text: "For plans already made, 'be going to' is very common: 'I'm going to study tonight.' 'Will' is for decisions made at the moment of speaking: 'I'll help you!'",
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write 3 predictions about next year with 'will'.",
              "Write 2 'by + time' sentences with the future perfect.",
              "Tell your plan for tomorrow evening — will or going to.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "will + base verb: predictions, offers, promises — 'will' never changes form.",
        "Future continuous (will be + -ing): in progress at a future moment.",
        "Future perfect (will have + V3): completed before a future point (by 5 p.m.).",
        "Future perfect continuous: duration up to a future point (for six hours by midnight).",
      ],
      vocabulary: ["will", "won't", "tomorrow", "next week", "by + time", "this time tomorrow", "in 2030"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gtenf-1-mcq",
        "gtenf-2-fb",
        "gtenf-3-mcq",
        "gtenf-4-sb",
        "gtenf-b1-mcq",
        "gtenf-b2-cm",
        "gtenf-b3-fb",
      ],
    },
  },
];
