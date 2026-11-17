import type { Lesson } from "@/data/curriculum/types";

/** Grammar School — the four Parts-of-Speech lessons. */

export const posLessons: Lesson[] = [
  {
    slug: "grammar-pos-1",
    levelId: "grammar-core",
    unit: 1,
    title: "Parts of Speech · Nouns & Pronouns",
    description:
      "The words that name your world: people, places, things, ideas — and the pronouns that replace them.",
    estimatedMinutes: 20,
    sections: [
      {
        id: "nouns",
        title: "Nouns",
        blocks: [
          {
            type: "heading",
            text: "Nouns: the naming words",
          },
          {
            type: "text",
            text: "Every sentence talks about something — and that something is usually a noun. In this lesson you will learn the four families of nouns and how to avoid the three most common noun mistakes.",
          },
          { type: "pos-module", moduleIds: ["nouns"] },
          {
            type: "sentence-anatomy",
            title: "See nouns at work",
            sentence: {
              pattern: "S + V + O",
              tokens: [
                { text: "My", role: "determiner", note: "Possessive determiner introducing the subject." },
                { text: "brother", role: "subject", note: "NOUN as subject — who reads." },
                { text: "reads", role: "verb" },
                { text: "two", role: "modifier", note: "Number — how many." },
                { text: "books", role: "object", note: "NOUN as object — what he reads." },
                { text: "every", role: "determiner" },
                { text: "week", role: "modifier", note: "NOUN in a time expression." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "practice",
            title: "Practice: nouns",
            exerciseIds: ["gpos1-n-mcq", "gpos1-n-dd", "gpos1-n-cm"],
          },
        ],
      },
      {
        id: "pronouns",
        title: "Pronouns",
        blocks: [
          { type: "heading", text: "Pronouns: the stand-ins" },
          {
            type: "text",
            text: "Saying 'Maria likes Maria's cat because Maria's cat is cute' is exhausting. Pronouns replace nouns so sentences flow: 'Maria likes her cat because it is cute'.",
          },
          { type: "pos-module", moduleIds: ["pronouns"] },
          {
            type: "practice",
            title: "Practice: pronouns",
            exerciseIds: ["gpos1-p-mcq", "gpos1-p-cm", "gpos1-p-match"],
          },
        ],
      },
      {
        id: "review",
        title: "Review & homework",
        blocks: [
          {
            type: "grammar-rule",
            title: "Noun & pronoun essentials",
            rule: "Nouns name; pronouns replace. Countable nouns take a/an/many + plural; uncountables take some/much and never -s.",
            examples: [
              { english: "two books ✓ / two book ✗", translation: "dos libros ✓" },
              { english: "some information ✓ / informations ✗", translation: "algo de información ✓" },
              { english: "She is my sister. She = pronoun.", translation: "Ella es mi hermana." },
            ],
          },
          {
            type: "note",
            title: "Your skill activities",
            text: "This module connects to the Sentence Lab (build SVO sentences, expand with nouns) and the Grammar Error Clinic — open them from the Grammar School page any time.",
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Find five nouns around you right now and say whether each is countable or uncountable.",
              "Write three sentences about your family using subject pronouns (I, he, she, we, they).",
              "Submit one sentence with a noun to the Grammar Error Clinic and check the result.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Nouns name people, places, things and ideas; they act as subjects, objects or follow prepositions.",
        "Countable nouns have plurals (books); uncountables never take -s (information).",
        "Pronouns replace nouns: subject (she), object (her), possessive (hers), reflexive (herself).",
        "Numbers above one take a plural: two books, ten apples.",
      ],
      vocabulary: ["noun", "pronoun", "countable", "uncountable", "proper noun", "plural", "subject", "object"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gpos1-n-mcq",
        "gpos1-n-dd",
        "gpos1-n-cm",
        "gpos1-p-mcq",
        "gpos1-p-match",
        "gpos1-b-mcq",
        "gpos1-b-sb",
      ],
    },
  },
  {
    slug: "grammar-pos-2",
    levelId: "grammar-core",
    unit: 1,
    title: "Parts of Speech · Verbs",
    description:
      "The engine of every sentence: action verbs, linking verbs, helping verbs — and how they change form.",
    estimatedMinutes: 22,
    sections: [
      {
        id: "verbs",
        title: "Verbs",
        blocks: [
          { type: "heading", text: "Verbs: the engines" },
          {
            type: "text",
            text: "No verb, no sentence. Verbs carry the action (run) or the state (be, know) — and they change shape for tense, person and mood. Master the verb and you master the sentence.",
          },
          { type: "pos-module", moduleIds: ["verbs"] },
          {
            type: "sentence-anatomy",
            title: "A verb with its helpers",
            sentence: {
              pattern: "S + aux + aux + V",
              tokens: [
                { text: "She", role: "subject" },
                { text: "has", role: "auxiliary", note: "Helping verb #1 — present perfect." },
                { text: "been", role: "auxiliary", note: "Helping verb #2 — continuous." },
                { text: "working", role: "verb", note: "The MAIN verb — always last." },
                { text: "since", role: "preposition" },
                { text: "9", role: "modifier" },
                { text: "a.m.", role: "modifier" },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "practice",
            title: "Practice: verbs",
            exerciseIds: ["gpos2-v-mcq", "gpos2-v-dd", "gpos2-v-cm", "gpos2-v-match"],
          },
        ],
      },
      {
        id: "review",
        title: "Review & homework",
        blocks: [
          {
            type: "grammar-rule",
            title: "The three verb commandments",
            rule: "1) he/she/it + verb-s (she plays). 2) After a modal, base verb (can play). 3) After did/doesn't, base verb (did you go?).",
            examples: [
              { english: "She plays tennis every Saturday.", translation: "Juega al tenis cada sábado." },
              { english: "He can play the guitar.", translation: "Sabe tocar la guitarra." },
              { english: "Did you go to the party?", translation: "¿Fuiste a la fiesta?" },
            ],
          },
          {
            type: "practice",
            title: "Extra practice",
            exerciseIds: ["gpos2-b-mcq", "gpos2-b-fb"],
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "List ten verbs you use every day and mark them regular or irregular.",
              "Write five sentences about a friend using he/she + verb-s.",
              "Open the Tense Explorer and compare present simple with present continuous.",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Every complete sentence needs a verb — action (run) or state (be, know).",
        "Helping verbs (be, do, have, can, will) support the main verb.",
        "he/she/it + verb-s; after modals and did/does, use the base form.",
        "Regular past verbs take -ed; irregular verbs change (go → went).",
      ],
      vocabulary: ["verb", "action verb", "linking verb", "helping verb", "auxiliary", "modal", "past participle", "base form"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gpos2-v-mcq",
        "gpos2-v-dd",
        "gpos2-v-cm",
        "gpos2-v-match",
        "gpos2-b-mcq",
        "gpos2-b-fb",
      ],
    },
  },
  {
    slug: "grammar-pos-3",
    levelId: "grammar-core",
    unit: 1,
    title: "Parts of Speech · Adjectives & Adverbs",
    description:
      "The describing words: adjectives paint nouns, adverbs colour actions — and never confuse them again.",
    estimatedMinutes: 20,
    sections: [
      {
        id: "adjectives",
        title: "Adjectives",
        blocks: [
          { type: "heading", text: "Adjectives: the noun painters" },
          {
            type: "text",
            text: "Adjectives answer 'what kind?', 'how many?' and 'which one?'. They go before the noun or after a linking verb — and that position rule is where most mistakes happen.",
          },
          { type: "pos-module", moduleIds: ["adjectives"] },
          {
            type: "practice",
            title: "Practice: adjectives",
            exerciseIds: ["gpos3-a-mcq", "gpos3-a-cm"],
          },
        ],
      },
      {
        id: "adverbs",
        title: "Adverbs",
        blocks: [
          { type: "heading", text: "Adverbs: the verb colourists" },
          {
            type: "text",
            text: "Adverbs answer 'how?', 'when?', 'where?' and 'how often?'. Most end in -ly — but the most important one doesn't: the adverb of 'good' is 'well'.",
          },
          { type: "pos-module", moduleIds: ["adverbs"] },
          {
            type: "sentence-anatomy",
            title: "Adjective vs. adverb in one sentence",
            sentence: {
              pattern: "S + V + O + adverb",
              tokens: [
                { text: "The", role: "determiner" },
                { text: "careful", role: "modifier", note: "ADJECTIVE — describes the driver (noun)." },
                { text: "driver", role: "subject" },
                { text: "drove", role: "verb" },
                { text: "the", role: "determiner" },
                { text: "car", role: "object" },
                { text: "carefully", role: "modifier", note: "ADVERB — describes how she drove (verb)." },
                { text: ".", role: "punctuation" },
              ],
            },
          },
          {
            type: "practice",
            title: "Practice: adjectives vs. adverbs",
            exerciseIds: ["gpos3-av-mcq", "gpos3-av-dd", "gpos3-b-sb", "gpos3-b-mcq"],
          },
        ],
      },
      {
        id: "review",
        title: "Review & homework",
        blocks: [
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Describe your room with five adjectives — out loud.",
              "Describe HOW you do three actions with adverbs (I eat slowly, I work quickly…).",
              "Expand 'I read a book' with one adjective in the Sentence Lab (Stage 5).",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Adjectives describe nouns and go BEFORE them: a black phone.",
        "Adverbs describe verbs (how/when/how often): she sings well.",
        "'Good' is an adjective; its adverb is 'well'.",
        "Comparatives: -er alone (easier), never 'more easier'.",
      ],
      vocabulary: ["adjective", "adverb", "comparative", "superlative", "manner", "frequency", "degree"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gpos3-a-mcq",
        "gpos3-a-cm",
        "gpos3-av-mcq",
        "gpos3-av-dd",
        "gpos3-b-sb",
        "gpos3-b-mcq",
      ],
    },
  },
  {
    slug: "grammar-pos-4",
    levelId: "grammar-core",
    unit: 1,
    title: "Parts of Speech · Prepositions, Conjunctions & Interjections",
    description:
      "The connectors and the exclaimers: in/on/at, and/but/because — and a Wow! to finish.",
    estimatedMinutes: 20,
    sections: [
      {
        id: "prepositions",
        title: "Prepositions",
        blocks: [
          { type: "heading", text: "Prepositions: the relationship words" },
          {
            type: "text",
            text: "Prepositions are short words with big meaning — and most preposition mistakes come from translating directly from your first language. Learn them as fixed pairs.",
          },
          { type: "pos-module", moduleIds: ["prepositions"] },
          {
            type: "practice",
            title: "Practice: prepositions",
            exerciseIds: ["gpos4-p-mcq", "gpos4-p-cm", "gpos4-b-mcq"],
          },
        ],
      },
      {
        id: "conjunctions",
        title: "Conjunctions",
        blocks: [
          { type: "heading", text: "Conjunctions: the bridges" },
          {
            type: "text",
            text: "Conjunctions turn choppy sentences into flowing ones. You will use them heavily in Sentence Lab Stage 6 (combination) — this is your foundation.",
          },
          { type: "pos-module", moduleIds: ["conjunctions"] },
          {
            type: "practice",
            title: "Practice: conjunctions",
            exerciseIds: ["gpos4-c-fb", "gpos4-b-fb"],
          },
        ],
      },
      {
        id: "interjections",
        title: "Interjections",
        blocks: [
          { type: "heading", text: "Interjections: the feelings" },
          { type: "pos-module", moduleIds: ["interjections"] },
          {
            type: "practice",
            title: "Practice: interjections",
            exerciseIds: ["gpos4-i-mcq"],
          },
          {
            type: "homework",
            title: "Homework",
            tasks: [
              "Write your weekly plan using on + days (on Monday I…).",
              "Combine three pairs of short sentences with and, but and so.",
              "Say 'Wow!', 'Oops!' and 'Um…' in real conversations this week — with feeling!",
            ],
          },
        ],
      },
    ],
    summary: {
      keyPoints: [
        "Prepositions of time: in + months/years, on + days, at + times.",
        "Fixed pairs must be memorised: depend on, good at, married to.",
        "Coordinating conjunctions (and, but, so) join equal clauses; subordinating (because, although) join unequal ones.",
        "Interjections add emotion: Wow! Oops! Um…",
      ],
      vocabulary: ["preposition", "conjunction", "coordinating", "subordinating", "interjection", "in/on/at"],
    },
    assessment: {
      questionCount: 5,
      passScore: 0.7,
      bank: [
        "gpos4-p-mcq",
        "gpos4-p-cm",
        "gpos4-c-fb",
        "gpos4-i-mcq",
        "gpos4-b-mcq",
        "gpos4-b-fb",
      ],
    },
  },
];
