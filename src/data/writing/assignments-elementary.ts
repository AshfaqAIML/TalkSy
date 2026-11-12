/**
 * Elementary writing assignments — the six required kinds: self-introduction,
 * family descriptions, daily routine, describing a place, describing an
 * object, and writing short connected sentences.
 */

import type { WritingAssignment } from "./types";

export const elementaryWritingAssignments: WritingAssignment[] = [
  {
    id: "wrt-ele-self-intro",
    slug: "self-introduction-writing",
    tier: "elementary",
    kind: "self-introduction",
    title: "Self-Introduction",
    description:
      "Write a short paragraph introducing yourself: name, age, where you are from, and two things you like.",
    estimatedMinutes: 10,
    tags: ["writing", "everyday"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "si1",
        title: "Introduce yourself",
        prompt: "Write 4–6 sentences introducing yourself to a new class.",
        instructions: [
          "Sentence 1: your name ('My name is…' or 'I'm…').",
          "Sentence 2: your age ('I am … years old').",
          "Sentence 3: where you are from or where you live.",
          "Sentences 4–6: two things you like and one thing you want to learn.",
        ],
        hints: [
          "One idea per sentence — short sentences are good sentences here.",
          "Use 'I' statements: I am, I like, I live, I want.",
        ],
        difficulty: "easy",
        minWords: 25,
        maxWords: 120,
        targetMinutes: 6,
        checklist: [
          { id: "name", label: "Your name", anyOf: ["my name", "i'm", "i am"] },
          { id: "age", label: "Your age", anyOf: ["years old", "age"] },
          { id: "place", label: "Where you are from", anyOf: ["from", "live in", "i come"] },
          { id: "likes", label: "Something you like", anyOf: ["i like", "i love", "i enjoy", "my favourite", "my favorite"] },
          { id: "goal", label: "Something you want to learn or do", anyOf: ["i want", "i'd like", "i would like", "i hope", "i'm learning"] },
        ],
        topicKeywords: ["i", "am", "from", "like", "want"],
        expectedParagraphs: { min: 1, max: 2 },
        modelText:
          "My name is Amina and I am twenty-two years old. I come from Casablanca, a big city by the sea. I live with my parents and my two brothers. I like reading novels and I love cooking with my grandmother on Sundays. At the moment I am learning English because I want to study medicine abroad.",
        modelTextNotes:
          "Notice the order: name → age → place → family → likes → goal. Every sentence starts with 'I' or 'My', which is natural in an introduction.",
      },
    ],
  },
  {
    id: "wrt-ele-family",
    slug: "family-descriptions",
    tier: "elementary",
    kind: "family-descriptions",
    title: "Family Descriptions",
    description:
      "Describe three people in your family — their name, one job or habit, and one small detail that makes them them.",
    estimatedMinutes: 12,
    tags: ["writing", "family"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "fd1",
        title: "Three people, three details",
        prompt: "Write about three members of your family, 5–8 sentences.",
        instructions: [
          "Start with how many people are in your family.",
          "For each person: name or relationship, one thing they do, one thing that makes them special.",
          "Finish with one sentence about your family together.",
        ],
        hints: [
          "Vary the sentence openers: 'My mother…', 'She…', 'He…', 'They…'.",
          "Family verbs: works, likes, enjoys, lives, cooks, tells.",
        ],
        difficulty: "easy",
        minWords: 40,
        maxWords: 160,
        targetMinutes: 8,
        checklist: [
          { id: "count", label: "How many people / who is in your family", anyOf: ["there are", "people in my family", "my family", "family has"] },
          { id: "members", label: "At least two family members named", anyOf: ["mother", "father", "mom", "mum", "dad", "brother", "sister", "grandmother", "grandfather", "grandma", "grandpa", "uncle", "aunt", "cousin", "wife", "husband", "son", "daughter"] },
          { id: "detail", label: "One detail per person (job, habit or favourite thing)", anyOf: ["works", "likes", "enjoys", "loves", "cooks", "plays", "tells", "studies", "wakes", "watches", "makes"] },
          { id: "together", label: "A closing sentence about the family", anyOf: ["together", "we are", "we always", "we often", "i love my family", "my family"] },
        ],
        topicKeywords: ["family", "my", "she", "he", "likes"],
        expectedParagraphs: { min: 1, max: 3 },
        modelText:
          "There are five people in my family. My mother, Rosa, is a nurse and she works at night, so she sleeps in the afternoon. My father, Marco, is a taxi driver who knows every street in the city. My little brother, Dani, is nine years old and he loves dinosaurs — he can say their long names perfectly. My grandmother lives with us and she cooks the best soup in the world. On Saturdays we eat together and tell stories about our week.",
        modelTextNotes:
          "Each person gets a detail that only fits them — that is what makes a description come alive.",
      },
    ],
  },
  {
    id: "wrt-ele-routine",
    slug: "daily-routine-writing",
    tier: "elementary",
    kind: "daily-routine-writing",
    title: "Daily Routine",
    description:
      "Describe your typical day from morning to night using the present simple and time words.",
    estimatedMinutes: 12,
    tags: ["writing", "grammar"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "dr1",
        title: "My day, start to finish",
        prompt: "Write 6–9 sentences about your typical day.",
        instructions: [
          "Start with when you wake up.",
          "Use at least three order words: first, then, after that, next, finally.",
          "Include your work or study hours, one meal, and how the day ends.",
        ],
        hints: [
          "Present simple for routines: 'I wake up', not 'I am waking up'.",
          "Add times: 'at seven', 'at half past eight'.",
        ],
        difficulty: "easy",
        minWords: 45,
        maxWords: 180,
        targetMinutes: 8,
        checklist: [
          { id: "morning", label: "How your day starts", anyOf: ["wake up", "get up", "morning", "first", "i start"] },
          { id: "work", label: "Work or study", anyOf: ["work", "study", "school", "job", "class", "office"] },
          { id: "meal", label: "At least one meal", anyOf: ["breakfast", "lunch", "dinner", "eat", "cook", "meal"] },
          { id: "order", label: "Three order/time words", anyOf: ["first", "then", "after", "next", "later", "finally", "before", "at "] },
          { id: "evening", label: "How the day ends", anyOf: ["evening", "night", "go to bed", "sleep", "watch", "relax"] },
        ],
        topicKeywords: ["i", "wake", "work", "then", "evening"],
        expectedParagraphs: { min: 1, max: 3 },
        modelText:
          "I usually wake up at six thirty. First, I drink a big glass of water and open the curtains. Then I have breakfast — coffee and bread with cheese — while I listen to the radio. I start work at eight and finish at four. After that, I go to the park and walk for half an hour. In the evening I cook dinner and watch a series with my sister. Finally, I read a few pages of my book and go to bed at eleven.",
        modelTextNotes:
          "Time words are the skeleton of a routine text — count how many you can find.",
      },
    ],
  },
  {
    id: "wrt-ele-place",
    slug: "describing-a-place",
    tier: "elementary",
    kind: "describing-place",
    title: "Describing a Place",
    description:
      "Describe your favourite place so a reader can see it: what it is, where it is, and what you do there.",
    estimatedMinutes: 12,
    tags: ["writing", "description"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "dp1",
        title: "A place you love",
        prompt: "Write 6–9 sentences describing your favourite place.",
        instructions: [
          "Sentence 1: name the place and say what it is.",
          "Sentence 2: where it is (city, near what).",
          "Describe three things you can see there.",
          "Say what you do there and why you like it.",
        ],
        hints: [
          "There is / There are for what you can see.",
          "Two or three adjectives make a place visible: 'quiet', 'crowded', 'green'.",
        ],
        difficulty: "medium",
        minWords: 45,
        maxWords: 180,
        targetMinutes: 8,
        checklist: [
          { id: "what", label: "What the place is", anyOf: ["is a", "is my", "place", "park", "café", "cafe", "room", "beach", "market", "library"] },
          { id: "where", label: "Where it is", anyOf: ["in", "near", "next to", "close to", "street", "city", "town", "centre", "center"] },
          { id: "see", label: "Things you can see there", anyOf: ["there is", "there are", "you can see", "i can see", "has"] },
          { id: "do", label: "What you do there", anyOf: ["i go", "i sit", "i read", "i eat", "i drink", "i walk", "i meet", "i listen", "we go", "we sit"] },
          { id: "why", label: "Why you like it", anyOf: ["because", "i love", "i like", "my favourite", "my favorite", "it makes me", "calm", "peaceful", "happy", "relax"] },
        ],
        topicKeywords: ["place", "there", "is", "are", "because"],
        expectedParagraphs: { min: 1, max: 3 },
        modelText:
          "My favourite place is a small café near the university. It is on a quiet street behind the library, with big windows and old wooden tables. There are plants everywhere, and the walls are covered with black-and-white photos of the city. You can hear quiet jazz and the sound of the coffee machine. I go there on Saturday mornings to read and write letters. I love it because nobody hurries you — one coffee can last two hours.",
        modelTextNotes:
          "The senses carry the description: windows, tables, plants, photos, jazz, the machine. The reader can walk in.",
      },
    ],
  },
  {
    id: "wrt-ele-object",
    slug: "describing-an-object",
    tier: "elementary",
    kind: "describing-object",
    title: "Describing an Object",
    description:
      "Choose an object you use every day and describe it: size, colour, material, and what it means to you.",
    estimatedMinutes: 10,
    tags: ["writing", "description"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "do1",
        title: "An object with a story",
        prompt: "Write 5–8 sentences about one object you use every day.",
        instructions: [
          "Name the object and say what it is.",
          "Describe its colour, size and what it is made of.",
          "Say what you use it for.",
          "End with why it matters to you.",
        ],
        hints: [
          "Useful frames: 'It is…', 'It has…', 'It is made of…', 'I use it to…'.",
          "Materials: plastic, metal, glass, wood, leather, paper, wool.",
        ],
        difficulty: "easy",
        minWords: 35,
        maxWords: 140,
        targetMinutes: 7,
        checklist: [
          { id: "name", label: "The object is named", anyOf: ["is a", "is my", "it is"] },
          { id: "colour", label: "Its colour", anyOf: ["black", "white", "blue", "red", "green", "grey", "gray", "silver", "brown", "yellow", "pink", "colour", "color"] },
          { id: "size", label: "Its size or shape", anyOf: ["big", "small", "little", "long", "short", "thin", "thick", "heavy", "light", "round", "square", "flat"] },
          { id: "material", label: "What it is made of", anyOf: ["made of", "plastic", "metal", "glass", "wood", "paper", "leather", "wool", "cotton", "steel"] },
          { id: "use", label: "What you use it for", anyOf: ["i use", "use it", "helps me", "for ", "to "] },
          { id: "meaning", label: "Why it matters to you", anyOf: ["because", "i love", "important", "means", "gift", "present", "gave me", "bought"] },
        ],
        topicKeywords: ["it", "is", "use", "my", "because"],
        expectedParagraphs: { min: 1, max: 2 },
        modelText:
          "My most important object is a blue backpack that I bought five years ago. It is medium-sized, made of strong canvas, and it has one big pocket and two small ones. The zip is broken on one side, so I always carry it carefully. I use it every day for my books, my laptop and my lunch. It matters to me because my father helped me choose it, and we found it on the last day of a wonderful holiday.",
        modelTextNotes:
          "Small imperfections (the broken zip) make an object description real.",
      },
    ],
  },
  {
    id: "wrt-ele-connected",
    slug: "connected-sentences",
    tier: "elementary",
    kind: "connected-sentences",
    title: "Writing Short Connected Sentences",
    description:
      "Chain sentences together with and, but, so and because — small words that make writing flow.",
    estimatedMinutes: 10,
    tags: ["writing", "cohesion"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "cn1",
        title: "The connector chain",
        prompt:
          "Write 6–8 sentences about your weekend. Connect at least four pairs of ideas with and, but, so or because.",
        instructions: [
          "Sentence 1: what you usually do on Saturdays.",
          "Use 'and' to add information.",
          "Use 'but' for a contrast.",
          "Use 'so' for a result.",
          "Use 'because' for a reason.",
        ],
        hints: [
          "and = +, but = surprise, so = result, because = reason.",
          "Don't start every sentence with 'I' — the connectors let you join ideas instead.",
        ],
        difficulty: "medium",
        minWords: 40,
        maxWords: 160,
        targetMinutes: 7,
        checklist: [
          { id: "and", label: "Used 'and' to add", anyOf: [" and "] },
          { id: "but", label: "Used 'but' for contrast", anyOf: [" but "] },
          { id: "so", label: "Used 'so' for a result", anyOf: [" so "] },
          { id: "because", label: "Used 'because' for a reason", anyOf: [" because"] },
          { id: "topic", label: "Stayed on the weekend topic", anyOf: ["saturday", "sunday", "weekend"] },
        ],
        topicKeywords: ["weekend", "and", "but", "so", "because"],
        expectedParagraphs: { min: 1, max: 3 },
        modelText:
          "On Saturdays I usually wake up late and make a big breakfast for everyone. Last weekend the weather was beautiful, so we decided to go to the mountains. My brother wanted to walk to the top, but my mother preferred the easy path, so we took the middle one. We had lunch near a small river because the sound of the water is relaxing. In the evening we were tired and happy. I love weekends like that because nobody looks at the clock.",
        modelTextNotes:
          "Count the connectors: and, so, but, so, because, and, because — seven links in seven sentences.",
      },
    ],
  },
];
