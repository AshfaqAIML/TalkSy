/**
 * Beginner speaking activities (Pre-A1 – A1) — the eight foundation types:
 * repeat a word, repeat a sentence, read aloud, introduce yourself, answer
 * simple questions, describe an object, speak about your family, and talk
 * about your daily routine.
 */

import type { SpeakingActivity } from "./types";

export const beginnerSpeakingActivities: SpeakingActivity[] = [
  {
    id: "spk-beg-repeat-word",
    slug: "repeat-a-word",
    tier: "beginner",
    kind: "repeat-word",
    title: "Repeat a Word",
    description:
      "Hear it, see it, say it. Your very first spoken words — one at a time, with instant playback comparison.",
    estimatedMinutes: 4,
    tags: ["pronunciation", "vocabulary"],
    tasks: [
      {
        id: "rw1",
        type: "match",
        title: "Everyday words",
        prompt: "Listen to the word, then say it clearly. One word, one breath.",
        hints: ["Break long words into syllables: ba‑nan‑a.", "Say it slowly first, then at normal speed."],
        targetSeconds: 3,
        maxSeconds: 15,
        difficulty: "easy",
        targetText: "hello",
      },
      {
        id: "rw2",
        type: "match",
        title: "Longer words",
        prompt: "Now a longer word. Keep every syllable equal until the last one — that one rings louder.",
        hints: ["banana → ba-NAN-a", "Don't rush the ending."],
        targetSeconds: 4,
        maxSeconds: 15,
        difficulty: "easy",
        targetText: "banana",
      },
      {
        id: "rw3",
        type: "match",
        title: "Tricky spellings",
        prompt: "This word sounds different from how it looks. Listen first, then repeat.",
        hints: ["The 'th' in 'three' is soft — tongue between the teeth."],
        targetSeconds: 4,
        maxSeconds: 15,
        difficulty: "medium",
        targetText: "three",
      },
    ],
  },
  {
    id: "spk-beg-repeat-sentence",
    slug: "repeat-a-sentence",
    tier: "beginner",
    kind: "repeat-sentence",
    title: "Repeat a Sentence",
    description:
      "Full sentences train your mouth and your memory. Listen to the model, then say the whole sentence back.",
    estimatedMinutes: 5,
    tags: ["pronunciation", "memory"],
    tasks: [
      {
        id: "rs1",
        type: "match",
        title: "Greeting sentences",
        prompt: "Listen to the whole sentence, then repeat it exactly.",
        hints: ["Pronouns first: 'My name is…' not 'Me name is…'."],
        targetSeconds: 5,
        maxSeconds: 20,
        difficulty: "easy",
        targetText: "My name is Ana.",
        translation: "Me llamo Ana.",
      },
      {
        id: "rs2",
        type: "match",
        title: "Question sentences",
        prompt: "Questions go up at the end. Listen, then repeat with the same melody.",
        hints: ["Let your voice rise on 'you'."],
        targetSeconds: 5,
        maxSeconds: 20,
        difficulty: "easy",
        targetText: "How are you today?",
      },
      {
        id: "rs3",
        type: "match",
        title: "Longer sentences",
        prompt: "A three-part sentence. Listen twice if you need to, then say it all.",
        hints: ["Small pauses at the commas help: 'I have a dog, two cats, and a fish.'"],
        targetSeconds: 8,
        maxSeconds: 25,
        difficulty: "medium",
        targetText: "I have a dog, two cats, and a fish.",
      },
    ],
  },
  {
    id: "spk-beg-read-aloud",
    slug: "read-aloud",
    tier: "beginner",
    kind: "read-aloud",
    title: "Read Aloud",
    description:
      "Read a short text out loud, at your own pace. The transcript check tells you which words the recogniser caught.",
    estimatedMinutes: 6,
    tags: ["reading", "pronunciation"],
    tasks: [
      {
        id: "ra1",
        type: "match",
        title: "A note about me",
        prompt:
          "Read this text aloud in a clear voice. Then compare what the recogniser heard with the text.",
        hints: ["New full stop = a short pause.", "Names keep their capital sound: 'Marta'."],
        targetSeconds: 20,
        maxSeconds: 60,
        difficulty: "easy",
        targetText:
          "My name is Marta. I am from Peru. I live with my sister. Every morning I drink coffee and read the news.",
      },
      {
        id: "ra2",
        type: "match",
        title: "A shopping list story",
        prompt: "Read aloud — try to keep a steady rhythm, like a radio presenter.",
        hints: ["List items get small pauses: 'milk, ● eggs, ● bread.'"],
        targetSeconds: 25,
        maxSeconds: 75,
        difficulty: "medium",
        targetText:
          "On Saturdays I go to the market. I buy milk, eggs, bread, and apples. The market is busy but friendly. I always say hello to the fruit seller.",
      },
    ],
  },
  {
    id: "spk-beg-introduce-yourself",
    slug: "introduce-yourself",
    tier: "beginner",
    kind: "introduce-yourself",
    title: "Introduce Yourself",
    description:
      "Your first self-introduction: name, age, country and one thing you like. Say it until it feels natural.",
    estimatedMinutes: 6,
    tags: ["speaking", "everyday"],
    tasks: [
      {
        id: "iy1",
        type: "open",
        title: "The basic four",
        prompt:
          "Record a short introduction. Say your name, your age, your country, and one thing you like.",
        hints: [
          "Start simply: 'My name is… I am … years old. I am from… I like…'",
          "One idea per sentence is perfect at this level.",
        ],
        cues: [
          { id: "c1", label: "Your name" },
          { id: "c2", label: "Your age" },
          { id: "c3", label: "Your country or city" },
          { id: "c4", label: "One thing you like" },
        ],
        checklist: [
          { id: "name", label: "You said your name", anyOf: ["my name is", "i am", "my name's", "call me"] },
          { id: "age", label: "You mentioned your age", anyOf: ["years old", "year old"] },
          { id: "place", label: "You said where you are from", anyOf: ["from", "live in", "i come from"] },
          { id: "like", label: "You said something you like", anyOf: ["i like", "i love", "i enjoy", "my favourite", "my favorite"] },
        ],
        topicKeywords: ["name", "am", "from", "like", "old", "live"],
        minWords: 12,
        targetSeconds: 25,
        maxSeconds: 90,
        difficulty: "easy",
        modelAnswer:
          "My name is Sofia. I am twenty-four years old. I am from Mexico City. I like music and I love cooking with my family.",
        modelAnswerTranslation: "",
      },
      {
        id: "iy2",
        type: "open",
        title: "Adding details",
        prompt:
          "Now introduce yourself again — this time add your job or studies and one thing you want to learn.",
        hints: ["'I work as a…' or 'I study…' both work.", "'I want to learn English because…'"],
        checklist: [
          { id: "name", label: "You said your name", anyOf: ["my name is", "my name's", "call me"] },
          { id: "work", label: "You mentioned a job or studies", anyOf: ["i work", "i study", "i'm a", "i am a", "my job"] },
          { id: "goal", label: "You said what you want to learn", anyOf: ["i want to learn", "i want to", "i would like to", "i'd like to", "i hope to"] },
        ],
        topicKeywords: ["work", "study", "learn", "want", "english"],
        minWords: 18,
        targetSeconds: 30,
        maxSeconds: 90,
        difficulty: "medium",
        modelAnswer:
          "My name is Ken. I work as a nurse in a small hospital. I want to learn English because I meet people from many countries at work.",
      },
    ],
  },
  {
    id: "spk-beg-answer-questions",
    slug: "answer-simple-questions",
    tier: "beginner",
    kind: "answer-questions",
    title: "Answer Simple Questions",
    description:
      "Five everyday questions, one recording. Answer each one in a full sentence — short answers train bad habits.",
    estimatedMinutes: 7,
    tags: ["speaking", "everyday"],
    tasks: [
      {
        id: "aq1",
        type: "open",
        title: "About you — round one",
        prompt:
          "Listen to each question (or read it), then answer in a full sentence in one recording.",
        hints: [
          "Full sentences: 'Yes, I have one brother.' — not just 'Yes.'",
          "It is fine to repeat part of the question: 'My favourite colour is blue.'",
        ],
        cues: [
          { id: "q1", label: "What is your name?" },
          { id: "q2", label: "Where are you from?" },
          { id: "q3", label: "What is your favourite food?" },
          { id: "q4", label: "Do you have any brothers or sisters?" },
          { id: "q5", label: "What do you do on Sundays?" },
        ],
        checklist: [
          { id: "a1", label: "You answered with your name", anyOf: ["my name", "name is", "i am", "i'm"] },
          { id: "a2", label: "You answered where you are from", anyOf: ["from", "live in", "city", "country"] },
          { id: "a3", label: "You named a food you like", anyOf: ["food", "favourite", "favorite", "like", "love", "rice", "pasta", "soup", "chicken", "fish", "bread"] },
          { id: "a4", label: "You answered about brothers or sisters", anyOf: ["brother", "sister", "siblings", "only child"] },
          { id: "a5", label: "You said what you do on Sundays", anyOf: ["sunday", "i usually", "i always", "i often", "i relax", "i rest"] },
        ],
        topicKeywords: ["name", "from", "food", "brother", "sister", "sunday"],
        minWords: 25,
        targetSeconds: 45,
        maxSeconds: 120,
        difficulty: "easy",
        modelAnswer:
          "My name is Ali. I am from Egypt. My favourite food is koshari. I have two sisters and one brother. On Sundays I usually play football with my friends.",
      },
    ],
  },
  {
    id: "spk-beg-describe-object",
    slug: "describe-an-object",
    tier: "beginner",
    kind: "describe-object",
    title: "Describe an Object",
    description:
      "Pick an object near you and describe it: colour, size, what it is made of, and what you use it for.",
    estimatedMinutes: 5,
    tags: ["speaking", "vocabulary"],
    tasks: [
      {
        id: "do1",
        type: "open",
        title: "Your phone (or any object near you)",
        prompt:
          "Describe the object in detail: its colour, its size, what it is made of, and what you use it for.",
        hints: [
          "Use 'It is…' and 'It has…' — the two most useful sentence starters.",
          "Materials: plastic, metal, glass, wood, paper, leather.",
        ],
        cues: [
          { id: "c1", label: "Colour" },
          { id: "c2", label: "Size (big / small / long)" },
          { id: "c3", label: "Material" },
          { id: "c4", label: "What you use it for" },
        ],
        checklist: [
          { id: "colour", label: "You mentioned a colour", anyOf: ["black", "white", "blue", "red", "green", "grey", "gray", "silver", "gold", "pink", "yellow", "brown", "purple", "orange", "colour", "color"] },
          { id: "size", label: "You described its size or shape", anyOf: ["big", "small", "large", "tiny", "long", "short", "thin", "thick", "heavy", "light", "round", "square", "flat"] },
          { id: "material", label: "You said what it is made of", anyOf: ["made of", "plastic", "metal", "glass", "wood", "paper", "leather", "steel", "aluminium", "aluminum", "fabric", "cloth"] },
          { id: "use", label: "You said what you use it for", anyOf: ["use it", "used for", "i use", "helps me", "for calling", "for reading", "to call", "to read", "every day"] },
        ],
        topicKeywords: ["it is", "it has", "colour", "color", "use"],
        minWords: 20,
        targetSeconds: 35,
        maxSeconds: 90,
        difficulty: "easy",
        modelAnswer:
          "It is my phone. It is black and it is quite small. It is made of glass and metal. I use it every day to call my family and to read the news.",
      },
    ],
  },
  {
    id: "spk-beg-family",
    slug: "speak-about-your-family",
    tier: "beginner",
    kind: "talk-about-family",
    title: "Speak About Your Family",
    description:
      "Talk about the people in your family — who they are, what they do, and one small thing about each person.",
    estimatedMinutes: 6,
    tags: ["speaking", "family"],
    tasks: [
      {
        id: "fa1",
        type: "open",
        title: "The people in my family",
        prompt:
          "Talk about your family: who is in it, and one thing about each person — a job, an age, or something they like.",
        hints: [
          "'There are … people in my family.' is a strong first sentence.",
          "Family verbs: 'He works…', 'She likes…', 'They live…'",
        ],
        cues: [
          { id: "c1", label: "How many people" },
          { id: "c2", label: "Who they are (mother, brother…)" },
          { id: "c3", label: "One detail per person" },
        ],
        checklist: [
          { id: "count", label: "You said how many people are in your family", anyOf: ["there are", "people in my family", "we are", "family of"] },
          { id: "members", label: "You named family members", anyOf: ["mother", "father", "mom", "mum", "dad", "brother", "sister", "wife", "husband", "son", "daughter", "grandmother", "grandfather", "grandma", "grandpa", "uncle", "aunt", "cousin"] },
          { id: "detail", label: "You gave at least one detail about a person", anyOf: ["works", "likes", "is", "has", "lives", "years old", "enjoys", "studies"] },
        ],
        topicKeywords: ["family", "mother", "father", "brother", "sister", "my"],
        minWords: 25,
        targetSeconds: 45,
        maxSeconds: 120,
        difficulty: "easy",
        modelAnswer:
          "There are five people in my family. My father is a taxi driver and he likes football. My mother teaches maths at a school. My brother is fifteen and he enjoys video games. My grandmother lives with us and she makes the best soup.",
      },
    ],
  },
  {
    id: "spk-beg-routine",
    slug: "daily-routine",
    tier: "beginner",
    kind: "daily-routine",
    title: "Talk About Your Daily Routine",
    description:
      "Walk through your day from morning to night using the present simple. Time words are your friends.",
    estimatedMinutes: 7,
    tags: ["speaking", "grammar", "everyday"],
    tasks: [
      {
        id: "dr1",
        type: "open",
        title: "My day, morning to night",
        prompt:
          "Describe your typical day: when you wake up, what you do in the morning, afternoon and evening.",
        hints: [
          "Time words keep the story moving: 'First… Then… After that… In the evening…'",
          "Present simple: 'I wake up', not 'I waking up'.",
        ],
        cues: [
          { id: "c1", label: "Morning — when your day starts" },
          { id: "c2", label: "Work or study hours" },
          { id: "c3", label: "Evening and dinner" },
          { id: "c4", label: "How your day ends" },
        ],
        checklist: [
          { id: "morning", label: "You described your morning", anyOf: ["wake up", "get up", "morning", "breakfast", "first"] },
          { id: "day", label: "You described work or study", anyOf: ["work", "study", "school", "job", "office", "class", "start work"] },
          { id: "evening", label: "You described your evening", anyOf: ["evening", "dinner", "night", "after work", "watch"] },
          { id: "order", label: "You used a time or order word", anyOf: ["then", "after", "before", "next", "later", "first", "finally", "usually", "always", "at"] },
        ],
        topicKeywords: ["wake", "morning", "work", "dinner", "evening", "sleep", "usually"],
        minWords: 30,
        targetSeconds: 55,
        maxSeconds: 150,
        difficulty: "medium",
        modelAnswer:
          "I usually wake up at six thirty. First I drink a glass of water and then I have breakfast at seven. I start work at nine and finish at five. In the evening I cook dinner and watch a series. Finally I go to bed at eleven.",
      },
    ],
  },
];
