/**
 * Elementary speaking activities (A1 – A2) — the five required types:
 * describe objects, answer everyday questions, describe experiences,
 * talk about familiar places, and role-play daily conversations.
 */

import type { SpeakingActivity } from "./types";

export const elementarySpeakingActivities: SpeakingActivity[] = [
  {
    id: "spk-elem-describe-object",
    slug: "describe-an-object",
    tier: "elementary",
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
    id: "spk-elem-answer-questions",
    slug: "answer-simple-questions",
    tier: "elementary",
    kind: "answer-questions",
    title: "Answer Everyday Questions",
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
    id: "spk-elem-describe-experiences",
    slug: "describe-experiences",
    tier: "elementary",
    kind: "describe-experiences",
    title: "Describe Experiences",
    description:
      "Talk about things you did — yesterday, last weekend, your last holiday — using the past simple with time words.",
    estimatedMinutes: 7,
    tags: ["speaking", "past", "everyday"],
    tasks: [
      {
        id: "de1",
        type: "open",
        title: "My last weekend",
        prompt:
          "Describe your last weekend: what you did on Saturday and on Sunday, who you were with, and one thing you enjoyed.",
        hints: [
          "Past simple: 'I went', 'I watched', 'I visited' — not 'I go'.",
          "Time words organise the story: 'On Saturday…', 'In the morning…', 'After that…'.",
        ],
        cues: [
          { id: "c1", label: "Saturday — what you did" },
          { id: "c2", label: "Sunday — what you did" },
          { id: "c3", label: "Who you were with" },
          { id: "c4", label: "One thing you enjoyed" },
        ],
        checklist: [
          { id: "saturday", label: "You said what you did on Saturday", anyOf: ["on saturday", "saturday", "morning i", "first i"] },
          { id: "sunday", label: "You said what you did on Sunday", anyOf: ["on sunday", "sunday", "rest", "last day"] },
          { id: "past", label: "You used past verbs", anyOf: ["went", "watched", "visited", "played", "stayed", "cooked", "met", "saw", "did", "was", "were", "had", "made", "took", "slept", "ate", "drank", "cleaned", "studied", "worked"] },
          { id: "people", label: "You said who you were with", anyOf: ["with my", "with friends", "with my family", "alone", "by myself", "together"] },
          { id: "enjoy", label: "You said what you enjoyed", anyOf: ["i enjoyed", "i liked", "i loved", "it was fun", "it was nice", "my favourite part", "the best part", "happy"] },
        ],
        topicKeywords: ["weekend", "saturday", "sunday", "went", "was"],
        minWords: 30,
        targetSeconds: 50,
        maxSeconds: 130,
        difficulty: "medium",
        modelAnswer:
          "Last weekend was very nice. On Saturday I went to the market with my sister and we bought fresh fruit. In the afternoon I cleaned my room and watched a film. On Sunday I stayed at home. I cooked lunch for my family and we ate together. In the evening I met my friend and we walked in the park. The best part was the walk, because we talked a lot.",
      },
      {
        id: "de2",
        type: "open",
        title: "A day I will not forget",
        prompt:
          "Describe one special day from your past: a trip, a celebration, or your first day somewhere. Say when it was, where you were, and what happened.",
        hints: [
          "Start with the time and place: 'Two years ago…', 'When I was ten…'.",
          "End with a feeling or what you learned: 'I felt really proud.'",
        ],
        cues: [
          { id: "c1", label: "When it happened" },
          { id: "c2", label: "Where you were" },
          { id: "c3", label: "What happened (2–3 things)" },
          { id: "c4", label: "How you felt" },
        ],
        checklist: [
          { id: "when", label: "You said when it happened", anyOf: ["last year", "years ago", "when i was", "in 20", "last month", "ago", "one day", "that day"] },
          { id: "where", label: "You said where you were", anyOf: ["in", "at the", "we went to", "i was at", "city", "beach", "school", "home", "trip"] },
          { id: "events", label: "You described what happened", anyOf: ["we", "i", "then", "after", "first", "suddenly"] },
          { id: "feeling", label: "You said how you felt", anyOf: ["happy", "excited", "nervous", "proud", "tired", "afraid", "surprised", "i felt", "it was amazing", "wonderful", "special"] },
        ],
        topicKeywords: ["day", "trip", "remember", "felt"],
        minWords: 35,
        targetSeconds: 60,
        maxSeconds: 150,
        difficulty: "medium",
        modelAnswer:
          "Two years ago I went to the sea for the first time. It was a school trip with my class. We travelled by bus for three hours, and I sat next to my best friend. When we arrived, the beach was enormous and the water was warm. First we played games on the sand, and then our teacher bought ice cream for everyone. In the afternoon we collected shells. I felt very happy and a little tired on the way home. It was a special day because it was my first time seeing the sea.",
      },
    ],
  },
  {
    id: "spk-elem-familiar-places",
    slug: "talk-about-familiar-places",
    tier: "elementary",
    kind: "familiar-places",
    title: "Talk About Familiar Places",
    description:
      "Describe places you know well — your home, your street, your favourite café — with there is / there are and prepositions of place.",
    estimatedMinutes: 6,
    tags: ["speaking", "places", "description"],
    tasks: [
      {
        id: "fp1",
        type: "open",
        title: "My home",
        prompt:
          "Describe your home: how many rooms it has, what is in your favourite room, and what you like about it.",
        hints: [
          "'There is…' for one thing, 'There are…' for several.",
          "Prepositions: 'next to', 'in front of', 'behind', 'between', 'on the wall'.",
        ],
        cues: [
          { id: "c1", label: "How many rooms" },
          { id: "c2", label: "Your favourite room" },
          { id: "c3", label: "What is in it" },
          { id: "c4", label: "Why you like it" },
        ],
        checklist: [
          { id: "rooms", label: "You said how many rooms", anyOf: ["rooms", "one room", "two", "three", "four", "five", "small", "big", "apartment", "flat", "house"] },
          { id: "favourite", label: "You named your favourite room", anyOf: ["favourite room", "favorite room", "bedroom", "kitchen", "living room", "balcony", "my room", "garden"] },
          { id: "there", label: "You described what is in it", anyOf: ["there is", "there are", "it has", "with a", "i have"] },
          { id: "why", label: "You said why you like it", anyOf: ["because", "i like", "i love", "quiet", "sunny", "comfortable", "relax", "light", "view"] },
        ],
        topicKeywords: ["home", "room", "there is", "there are", "kitchen"],
        minWords: 30,
        targetSeconds: 50,
        maxSeconds: 130,
        difficulty: "medium",
        modelAnswer:
          "I live in a small apartment with my family. It has four rooms: two bedrooms, a kitchen and a living room. My favourite room is my bedroom. There is a bed next to the window and there is a small desk in front of it. On the wall there are photos of my family. I like this room because it is quiet and sunny in the morning, so I can read and study there.",
      },
      {
        id: "fp2",
        type: "open",
        title: "A place I go often",
        prompt:
          "Describe a place you go to often — a café, a park, a shop, a relative's house. Say where it is, what you do there, and who you usually go with.",
        hints: [
          "Location first: 'It is near…', 'It is in the centre of…', 'It takes ten minutes to walk there.'",
          "Frequency words: 'I go there every week', 'twice a month'.",
        ],
        cues: [
          { id: "c1", label: "The place and where it is" },
          { id: "c2", label: "What you do there" },
          { id: "c3", label: "Who you go with" },
          { id: "c4", label: "How often you go" },
        ],
        checklist: [
          { id: "place", label: "You named the place", anyOf: ["café", "cafe", "park", "shop", "market", "gym", "mosque", "church", "library", "house", "restaurant", "café"] },
          { id: "location", label: "You said where it is", anyOf: ["near", "next to", "in the", "centre", "center", "street", "close to", "minutes", "far", "behind", "opposite"] },
          { id: "activity", label: "You said what you do there", anyOf: ["i drink", "i eat", "i buy", "i walk", "i sit", "i read", "i play", "i talk", "we", "drink coffee", "study"] },
          { id: "who", label: "You said who you go with", anyOf: ["with my", "with friends", "alone", "my family", "by myself", "with a friend"] },
        ],
        topicKeywords: ["place", "go", "there", "often"],
        minWords: 30,
        targetSeconds: 50,
        maxSeconds: 130,
        difficulty: "medium",
        modelAnswer:
          "I often go to a small café near my house. It is on the corner of my street, opposite the bakery, and it takes five minutes to walk there. I go there almost every weekend. I usually drink coffee and read a book, or I talk with my best friend — we go together on Saturdays. I like this café because it is quiet and the people who work there are very friendly.",
      },
    ],
  },
  {
    id: "spk-elem-hold-conversation",
    slug: "hold-conversations",
    tier: "elementary",
    kind: "hold-conversation",
    title: "Role-Play Daily Conversations",
    description:
      "Keep a small talk conversation alive: react, ask a question back, and add one new detail to every answer.",
    estimatedMinutes: 8,
    tags: ["speaking", "conversation"],
    tasks: [
      {
        id: "hc1",
        type: "open",
        title: "Small talk: the weekend",
        prompt:
          "Someone asks you: 'Did you have a good weekend?' Answer with a detail, react to them, and ask a question back — all in one short recording.",
        hints: [
          "The three-step move: answer → add a detail → ask back.",
          "'What about you?' is the smallest question back; a specific question is better.",
        ],
        checklist: [
          { id: "answer", label: "You answered the question", anyOf: ["yes", "no", "it was", "i did", "weekend", "saturday", "sunday"] },
          { id: "detail", label: "You added a detail", anyOf: ["i went", "i watched", "i visited", "i cooked", "i played", "i stayed", "because"] },
          { id: "askback", label: "You asked a question back", anyOf: ["what about you", "how about you", "and you", "did you", "how was your", "what did you"] },
        ],
        topicKeywords: ["weekend", "you", "i", "what", "how"],
        minWords: 20,
        targetSeconds: 30,
        maxSeconds: 90,
        difficulty: "medium",
        modelAnswer:
          "Yes, I had a lovely weekend, thank you! On Saturday I visited my aunt and we cooked dumplings together — it was a lot of fun. What about you? Did you do anything interesting?",
      },
      {
        id: "hc2",
        type: "open",
        title: "Reacting and continuing",
        prompt:
          "A friend says: 'I just started a new job at a hospital.' Record a natural reaction, one follow-up question, and one comment or offer.",
        hints: [
          "React first: 'Congratulations!', 'That's great news!', 'Really?'",
          "Follow-up questions: open questions (What…? How…?) keep talk alive better than yes/no questions.",
        ],
        checklist: [
          { id: "react", label: "You reacted warmly", anyOf: ["congratulations", "that's great", "that's wonderful", "great news", "wow", "amazing", "nice", "how exciting", "good luck"] },
          { id: "question", label: "You asked a follow-up question", anyOf: ["what", "how", "when", "where", "do you", "are you", "is it"] },
          { id: "comment", label: "You added a comment or offer", anyOf: ["i hope", "i'm sure", "i'm happy", "you'll", "if you", "let me know", "tell me"] },
        ],
        topicKeywords: ["job", "hospital", "new", "you"],
        minWords: 18,
        targetSeconds: 25,
        maxSeconds: 90,
        difficulty: "medium",
        modelAnswer:
          "Congratulations, that's wonderful news! What do you do there — are you working with patients? I remember you told me you wanted a job that helps people, so I'm really happy for you. Tell me all about it when you have time!",
      },
    ],
  },
];
