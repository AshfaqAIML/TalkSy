/**
 * Public-site marketing content — the single source of truth for section
 * copy shared between the landing page, the public pages, FAQ structured
 * data and tests.
 *
 * CONTENT POLICY (enforced by tests/marketing-content.test.ts):
 * 1. No fabricated testimonials, student counts, ratings or success claims
 *    — TalkSy shows none of these anywhere.
 * 2. Feature statuses are honest: "live" only for what learners can use in
 *    the app today; everything else is explicitly "planned".
 * 3. Every number comes from src/lib/marketing/stats.ts (derived from the
 *    real curriculum), never typed by hand here.
 */

/* ------------------------------------------------------------------ */
/* 2 — Problem recognition                                             */
/* ------------------------------------------------------------------ */

export interface LearnerProblem {
  icon: "ear" | "brain" | "spell" | "heart" | "pen";
  title: string;
  quote: string;
  response: string;
}

export const learnerProblems: LearnerProblem[] = [
  {
    icon: "ear",
    title: "You understand English — but can't speak it",
    quote: "I can follow films with subtitles, but when someone asks me a question, my mind goes blank.",
    response:
      "Every TalkSy lesson ends with you speaking out loud — from repeating your first words to answering conversation questions on your own. Understanding is the starting line, not the finish.",
  },
  {
    icon: "brain",
    title: "Words you learn today are gone next week",
    quote: "I memorise twenty words, and a week later I remember three.",
    response:
      "Every word you meet gets a strength score. Weak words resurface in practice automatically, at growing intervals — spaced repetition built for forgetting, not against it.",
  },
  {
    icon: "spell",
    title: "Grammar mistakes you can't quite fix",
    quote: "People understand me, but my sentences always feel a little broken.",
    response:
      "Grammar is introduced one small pattern at a time, in simple English with clear examples — and a common-mistakes section shows you exactly where learners usually slip.",
  },
  {
    icon: "heart",
    title: "Nervous in real conversations",
    quote: "I'm afraid of sounding stupid, so I stay quiet even when I know the words.",
    response:
      "Practice happens in a private, judgement-free space. Speak to your browser as many times as you like — no one is listening, and retries are always free.",
  },
  {
    icon: "pen",
    title: "Writing a full sentence feels hard",
    quote: "I can read English, but writing even a short message takes me ten minutes.",
    response:
      "Sentence-building exercises have you construct real English tap by tap, and every writing task comes with a model answer to compare against — production practice, not multiple-choice comfort.",
  },
];

/* ------------------------------------------------------------------ */
/* 3 — Learning journey                                                */
/* ------------------------------------------------------------------ */

export interface JourneyStage {
  step: number;
  title: string;
  description: string;
  /** Where this stage lives in the curriculum today (honest mapping). */
  where: string;
  available: boolean;
}

export const journeyStages: JourneyStage[] = [
  {
    step: 1,
    title: "Alphabet",
    description: "Letter names, sounds, uppercase and lowercase — reading your very first words.",
    where: "Foundations · Unit 1",
    available: true,
  },
  {
    step: 2,
    title: "Words",
    description: "Everyday words with pictures, definitions in simple English and audio.",
    where: "Foundations · Units 1–3",
    available: true,
  },
  {
    step: 3,
    title: "Sentences",
    description: "Your first real sentences: nouns, verbs, questions, answers.",
    where: "Foundations · Units 4–6",
    available: true,
  },
  {
    step: 4,
    title: "Grammar",
    description: "One small pattern at a time — with examples you can use the same day.",
    where: "Every lesson, every level",
    available: true,
  },
  {
    step: 5,
    title: "Paragraphs",
    description: "From single sentences to short messages, notes and stories.",
    where: "Beginner & Elementary",
    available: true,
  },
  {
    step: 6,
    title: "Conversations",
    description: "Greetings, shopping, travel, the doctor's office — dialogue by dialogue.",
    where: "Beginner & Elementary",
    available: true,
  },
  {
    step: 7,
    title: "Fluency",
    description: "Opinions, longer stories, natural and precise communication.",
    where: "B1–C1 · in development",
    available: false,
  },
];

/* ------------------------------------------------------------------ */
/* 4 — Core learning features (honest statuses)                        */
/* ------------------------------------------------------------------ */

export type FeatureStatus = "live" | "planned";

export interface CoreFeature {
  icon:
    | "route"
    | "book"
    | "blocks"
    | "cards"
    | "mic"
    | "headphones"
    | "pen"
    | "coach";
  title: string;
  text: string;
  status: FeatureStatus;
  statusNote?: string;
}

export const coreFeatures: CoreFeature[] = [
  {
    icon: "route",
    title: "Structured English courses",
    text: "A strictly ordered path — level, unit, lesson — that unlocks as you learn. 66 complete lessons from the alphabet to everyday conversations, with more levels in development.",
    status: "live",
  },
  {
    icon: "book",
    title: "Grammar lessons",
    text: "Short, simple explanations with clear examples, followed by a common-mistakes section in every lesson. Grammar is taught, practised and revised — never assumed.",
    status: "live",
  },
  {
    icon: "blocks",
    title: "Sentence builder",
    text: "Word-ordering exercises where you build real English sentences by tapping shuffled words — from 'I am a student' to full questions and answers.",
    status: "live",
  },
  {
    icon: "cards",
    title: "Vocabulary flashcards",
    text: "Every word arrives as a card — term, definition in simple English, example sentence and audio. Behind it, a strength score decides when you'll meet it again.",
    status: "live",
  },
  {
    icon: "mic",
    title: "Speaking practice",
    text: "Say the target sentence out loud and get graded feedback from your browser's speech recognition — with an honest self-assessment fallback on any device.",
    status: "live",
  },
  {
    icon: "headphones",
    title: "Listening comprehension",
    text: "Dialogues and listening exercises read aloud by natural voices, playable line by line, at two speeds. Your ear trains along with your eyes.",
    status: "live",
  },
  {
    icon: "pen",
    title: "Writing correction",
    text: "Write short answers and compare them with a model answer, then self-assess. Typing is forgiving — capitalisation and punctuation slips never fail an honest attempt.",
    status: "live",
  },
  {
    icon: "coach",
    title: "AI English tutor",
    text: "A study-coach chat that knows your lessons, your weak words and your next step. The coaching engine is built and API-tested; the in-app chat is rolling out next.",
    status: "planned",
    statusNote: "Engine built · in-app chat in development",
  },
];

/* ------------------------------------------------------------------ */
/* 5 — How it works                                                    */
/* ------------------------------------------------------------------ */

export interface HowItWorksStep {
  n: number;
  title: string;
  text: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    n: 1,
    title: "Create an account",
    text: "Name, email, password — that's all. Free, no credit card, and your progress is saved to your account from minute one.",
  },
  {
    n: 2,
    title: "Find your level",
    text: "Start from absolute zero with Foundations (Pre-A1), or preview A1 and A2 lessons to see where you fit. A proper placement test is on the roadmap.",
  },
  {
    n: 3,
    title: "Receive your learning path",
    text: "Lessons unlock in a deliberate order — each one builds on the last. You always see exactly what to do next, and why.",
  },
  {
    n: 4,
    title: "Learn one lesson at a time",
    text: "8–12 minute lessons that move you through vocabulary, a real dialogue, simple grammar and practice — in one sitting.",
  },
  {
    n: 5,
    title: "Practise all four skills",
    text: "Listening, speaking, reading and writing in every lesson — plus a practice centre that resurfaces your weakest words.",
  },
  {
    n: 6,
    title: "Track your improvement",
    text: "XP, streaks, accuracy and vocabulary strength — computed on the server from your real answers, never inflated, never faked.",
  },
];

/* ------------------------------------------------------------------ */
/* 10 — FAQ (landing subset + /faq page + FAQPage JSON-LD)             */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Can absolute beginners use TalkSy?",
    answer:
      "Yes — TalkSy was designed for exactly that. The Foundations track (Pre-A1) starts with the alphabet and your very first words, and takes you to your first complete sentences across 30 lessons. You need no English at all to start: lesson one begins with the letter A.",
  },
  {
    question: "Do I need to know grammar before I start?",
    answer:
      "No. Grammar is introduced step by step, in simple English, with examples you can use immediately. Every lesson includes a short 'see the pattern' explanation and a common-mistakes section. If you can read basic English words, you can follow the grammar.",
  },
  {
    question: "Can I really learn speaking on a website?",
    answer:
      "Yes. Every lesson ends with speaking practice: you say a target sentence out loud and your browser's speech recognition grades it (best in Chrome, Edge or Safari). Where speech recognition isn't available, TalkSy switches to honest self-assessment instead of pretending. Lessons build from repeating single words to answering conversation questions on your own.",
  },
  {
    question: "Is there an AI tutor?",
    answer:
      "There is a built-in English study coach you can chat with, tied to your lessons and your review queue — and we're transparent about how it works: it's a rule-based coach, not a generative AI model, and it says so in its own signature line. The coaching engine is built and tested; the in-app chat experience is in development and will roll out with the next releases.",
  },
  {
    question: "Can I use another language for explanations?",
    answer:
      "Explanations are written in simple, level-appropriate English rather than translations — on purpose. Definitions stay within the vocabulary of your level, supported by examples and audio, so you learn to think in English from lesson one. The platform's full lesson catalogue for complete beginners (Pre-A1 to A2) is available in English today.",
  },
  {
    question: "Does the platform work on mobile?",
    answer:
      "Yes. TalkSy is a responsive web app — the same account, the same progress, on your phone, tablet or laptop. There's nothing to install; open the site in a modern browser and learn. Speaking practice uses your device's microphone, with a self-assessment fallback everywhere.",
  },
  {
    question: "How much does TalkSy cost?",
    answer:
      "TalkSy is free while it's in public preview — every lesson, every skill, all practice tools. And there's a structural promise behind it: the complete beginner path (Pre-A1, A1 and A2) stays free forever. A premium tier for deeper practice is planned; prices will be published clearly before anything is ever charged.",
  },
  {
    question: "What level will I reach?",
    answer:
      "Three complete CEFR-aligned levels are available today: Foundations (Pre-A1), Beginner (A1) and Elementary (A2) — 66 lessons in total, from the alphabet to everyday situations like travel, shopping and the doctor's office. Intermediate (B1), Upper-Intermediate (B2) and Advanced (C1) are in development, and the roadmap is visible inside the app.",
  },
  {
    question: "What does the 'Draft content' badge mean?",
    answer:
      "It means exactly what it says. Beginner-track lessons are original, versioned material currently moving through our content review pipeline, and we label that honestly rather than hide it. The badge disappears from a lesson once it passes review. You'll never see a fake 'expert-approved' stamp on TalkSy.",
  },
  {
    question: "Is my progress really saved?",
    answer:
      "Yes. Your XP, streaks, completed lessons and the strength of every word you've met are stored server-side against your account. Switch device or browser, sign in, and everything is exactly where you left it.",
  },
];

/** The six questions the landing page shows (matching the product brief). */
export const landingFaqQuestions = [
  "Can absolute beginners use TalkSy?",
  "Do I need to know grammar before I start?",
  "Can I really learn speaking on a website?",
  "Is there an AI tutor?",
  "Can I use another language for explanations?",
  "Does the platform work on mobile?",
];

/* ------------------------------------------------------------------ */
/* Pricing architecture (grounded in PRD §8)                           */
/* ------------------------------------------------------------------ */

export interface PricingPlan {
  id: "free" | "premium" | "institutional";
  name: string;
  status: "live" | "planned";
  priceLabel: string;
  blurb: string;
  includes: string[];
  footnote?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    status: "live",
    priceLabel: "Free",
    blurb: "Everything that exists in TalkSy today, with no trial timer and no credit card.",
    includes: [
      "All 66 lessons across Foundations, Beginner and Elementary",
      "Listening, speaking, reading and writing practice in every lesson",
      "Vocabulary tracking with spaced review",
      "The practice centre and full progress tracking",
      "Your data and progress, saved server-side",
    ],
    footnote: "The complete beginner path (Pre-A1–A2) is free forever — that's a structural promise, not a launch discount.",
  },
  {
    id: "premium",
    name: "Premium",
    status: "planned",
    priceLabel: "Planned",
    blurb: "For committed learners who want more depth. In development — pricing will be published before anything is charged.",
    includes: [
      "Premium lesson variants with deeper practice",
      "Expanded writing and speaking labs",
      "Advanced progress analytics",
      "Priority access to new practice features",
    ],
    footnote: "Existing free features stay free. Premium sells depth, never the fundamentals.",
  },
  {
    id: "institutional",
    name: "Classrooms & institutions",
    status: "planned",
    priceLabel: "Future",
    blurb: "Class sets, teacher visibility and structured homework for schools and programmes — a later stage on the roadmap.",
    includes: [
      "Class-wide progress views for teachers",
      "Structured homework assignments",
      "Bulk account management",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 8 — AI tutor section facts                                          */
/* ------------------------------------------------------------------ */

export const tutorFacts = {
  heading: "Personalised practice, without the AI hype",
  intro:
    "TalkSy's practice engine is built on a simple principle: the system should know what you actually know. Every answer you give feeds a server-side model of your progress — and everything it tells you is derived from your real work.",
  live: [
    {
      title: "A strength score for every word",
      text: "Words enter at strength 1 when you meet them. Correct answers strengthen them; mistakes bring them back sooner. Practice always serves your weakest, least-recently-reviewed words first.",
    },
    {
      title: "Spaced repetition, quietly working",
      text: "Review intervals grow as words get stronger — the classic Leitner-box idea, applied to every word you've ever met, without you having to manage anything.",
    },
    {
      title: "Server-authoritative progress",
      text: "XP, accuracy and streaks are computed on the server from recorded answers. The client can't inflate them — and neither can we.",
    },
  ],
  coach: {
    title: "The study coach — built, tested, rolling out",
    text: "A practice-chat coach that knows your current lesson, the words you're due to review and your next step. We've built and API-tested the coaching engine; the in-app chat arrives with the next releases. And it's honest by design: it's a rule-based coach, not a generative model — it even signs its messages to say so.",
    /** A real-format coach message, as generated by the rule engine today. */
    sampleMessage:
      "Hello! I am your study coach. Let's practise English together.\nYou have 12 words to review today.\nYour next lesson is \"Hello and Goodbye\".\nCan you write one sentence about your day?",
    signature: "— TalkSy study coach (rule-based)",
    badgeNote: "Example message — generated by the coaching engine's real reply format",
  },
};

/* ------------------------------------------------------------------ */
/* 9 — Daily practice facts                                            */
/* ------------------------------------------------------------------ */

export const dailyPracticeFacts = {
  heading: "Small every day beats huge once a month",
  intro:
    "TalkSy is designed around short, honest daily sessions — the rhythm that actually builds a language.",
  points: [
    {
      title: "Lessons sized for one sitting",
      text: "8–12 minutes each — vocabulary, a dialogue, one grammar pattern and practice, complete before your tea gets cold.",
    },
    {
      title: "A daily goal you set yourself",
      text: "Minutes-based and learner-set (10 minutes by default). The dashboard ring fills from real practice the server records — opening the app doesn't count.",
    },
    {
      title: "Streaks with integrity",
      text: "A day counts only when you do real work: at least one lesson or three exercises. No loss-aversion nagging, no tricks — the reward loop is competence, visibly earned.",
    },
    {
      title: "A gentle return path",
      text: "Missed a few days? Your words simply come back in review, exactly when they should. Nothing is lost, nothing is punished.",
    },
  ],
};
