/**
 * CMS self-healing seed.
 *
 * Like the demo learner account, the staff accounts and the starter course
 * must survive database resets: `ensureCmsSeed()` is called by the login
 * route, so the first login after any reset re-creates everything.
 *
 * Staff accounts (advertised in the admin UI login hint):
 *   admin@talksy.app   / Admin1234!
 *   editor@talksy.app  / Editor1234!
 *   teacher@talksy.app / Teacher1234!
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { DEMO_EMAIL } from "@/lib/demo-user";

export const STAFF_ACCOUNTS = [
  { email: "admin@talksy.app", password: "Admin1234!", name: "Platform Admin", role: "admin" },
  { email: "editor@talksy.app", password: "Editor1234!", name: "Content Editor", role: "editor" },
  { email: "teacher@talksy.app", password: "Teacher1234!", name: "Review Teacher", role: "teacher" },
] as const;

const STARTER_COURSE_SLUG = "everyday-english-foundations";

/** PROMPT 57: starter-course content version. v2 = the depth mandate
 * (both lessons rebuilt at full teaching depth, six new practice questions). */
const STARTER_CONTENT_VERSION = 2;

/** Create staff accounts + starter course if missing. Idempotent and fast. */
export async function ensureCmsSeed(): Promise<void> {
  for (const account of STAFF_ACCOUNTS) {
    const existing = await db.user.findUnique({ where: { email: account.email } });
    if (existing) continue;
    await db.user.create({
      data: {
        email: account.email,
        name: account.name,
        passwordHash: hashPassword(account.password),
        role: account.role,
        // First-login gate: seeded with a public default password, so the
        // CMS demands a personal password before any staff action.
        mustChangePassword: true,
      },
    });
  }

  // The demo learner keeps its student role even after schema changes.
  const demo = await db.user.findUnique({ where: { email: DEMO_EMAIL } });
  if (demo && demo.role !== "student") {
    await db.user.update({ where: { id: demo.id }, data: { role: "student" } });
  }

  const existingCourse = await db.cmsCourse.findUnique({ where: { slug: STARTER_COURSE_SLUG } });
  if (existingCourse) {
    // PROMPT 57: existing databases upgrade the starter lessons IN PLACE
    // when the content version is behind — learner progress is never
    // destroyed to refresh content.
    const markers = await db.cmsAuditLog.findMany({
      where: { action: "starter.seed" },
      orderBy: { createdAt: "desc" },
      take: 1,
    });
    let version = 0;
    if (markers[0]) {
      try {
        version = (JSON.parse(markers[0].detail) as { version?: number }).version ?? 0;
      } catch {
        version = 0;
      }
    }
    if (version < STARTER_CONTENT_VERSION) {
      await upgradeStarterCourseContent();
      await db.cmsAuditLog.create({
        data: {
          action: "starter.seed",
          entityType: "course",
          entityId: existingCourse.id,
          detail: JSON.stringify({ version: STARTER_CONTENT_VERSION }),
        },
      });
    }
    return;
  }
  await seedStarterCourse();
  await db.cmsAuditLog.create({
    data: {
      action: "starter.seed",
      entityType: "course",
      entityId: (await db.cmsCourse.findUniqueOrThrow({ where: { slug: STARTER_COURSE_SLUG } })).id,
      detail: JSON.stringify({ version: STARTER_CONTENT_VERSION }),
    },
  });
}

// ---------------------------------------------------------------------------
// Starter course content
// ---------------------------------------------------------------------------

function makeToneWav(seconds = 1.5, freq = 440): Buffer {
  const sampleRate = 8000;
  const numSamples = Math.floor(sampleRate * seconds);
  const dataSize = numSamples * 2;
  const buf = Buffer.alloc(44 + dataSize);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + dataSize, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20); // PCM
  buf.writeUInt16LE(1, 22); // mono
  buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(sampleRate * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write("data", 36);
  buf.writeUInt32LE(dataSize, 40);
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const fade = Math.max(0, Math.min(1, Math.min(t, seconds - t) * 4));
    const sample = Math.round(Math.sin(2 * Math.PI * freq * t) * 0.3 * fade * 32767);
    buf.writeInt16LE(sample, 44 + i * 2);
  }
  return buf;
}

/** PROMPT 57: the six additional starter questions, shared by the fresh seed
 * and the in-place upgrade so both databases end up with identical practice. */
const STARTER_PROMPT57_QUESTIONS: {
  slug: string;
  data: Record<string, unknown>;
}[] = [
    {
      slug: "listen-greetings",
      data: {
        type: "dictation",
        skill: "listening",
        difficulty: "easy",
        prompt: "Listen and write the exact sentence you hear.",
        tags: ["greetings", "listening"],
        hints: ["Two words, then a name.", "The short form uses an apostrophe: I'm."],
        feedback: {
          correctAnswer: "Hello! I'm David.",
          explanation:
            "Spoken English prefers the short form 'I'm' after a greeting. Listening for the apostrophe sound takes practice.",
          whyWrong: "'I am David' is grammatical but sounds formal in a friendly first meeting.",
        },
        audioText: "Hello! I'm David.",
        acceptedAnswers: ["hello! i'm david", "hello! i am david", "hello i'm david"],
      },
    },
    {
      slug: "how-are-you-response",
      data: {
        type: "mcq",
        skill: "speaking",
        difficulty: "easy",
        prompt: "Someone asks: 'How are you?' What is the natural answer?",
        tags: ["greetings", "conversation"],
        hints: ["The question asks about you, not your name.", "A short, friendly answer works."],
        feedback: {
          correctAnswer: "I'm fine, thank you. And you?",
          explanation:
            "'How are you?' asks how you feel. Answer it, then return the question with 'And you?' to keep the conversation going.",
          whyWrong:
            "'My name is Ana' answers 'What's your name?'. 'Yes, I am' answers 'Are you …?'. Neither fits here.",
        },
        options: [
          { id: "a", text: "My name is Ana." },
          { id: "b", text: "I'm fine, thank you. And you?" },
          { id: "c", text: "Yes, I am." },
        ],
        correctOptionId: "b",
      },
    },
    {
      slug: "match-greeting-time",
      data: {
        type: "match",
        skill: "vocabulary",
        difficulty: "easy",
        prompt: "Match each time with its greeting.",
        tags: ["greetings", "vocabulary"],
        hints: ["Morning comes first; 'Good night' never greets.", "Afternoon starts after 12 p.m."],
        feedback: {
          correctAnswer: "9 a.m. — Good morning; 3 p.m. — Good afternoon; 8 p.m. — Good evening",
          explanation:
            "The clock decides the greeting. 'Good night' only closes the day — it is never used to say hello.",
        },
        leftItems: [
          { id: "l1", text: "9 a.m." },
          { id: "l2", text: "3 p.m." },
          { id: "l3", text: "8 p.m." },
        ],
        rightItems: [
          { id: "r1", text: "Good morning" },
          { id: "r2", text: "Good afternoon" },
          { id: "r3", text: "Good evening" },
        ],
        pairs: [
          { leftId: "l1", rightId: "r1" },
          { leftId: "l2", rightId: "r2" },
          { leftId: "l3", rightId: "r3" },
        ],
      },
    },
    {
      slug: "have-has-subject",
      data: {
        type: "mcq",
        skill: "grammar",
        difficulty: "easy",
        prompt: "My grandfather ___ a beautiful garden.",
        tags: ["have has", "family"],
        hints: ["Who is the subject? One man.", "he / she / it take 'has'."],
        feedback: {
          correctAnswer: "My grandfather has a beautiful garden.",
          explanation: "The subject is 'my grandfather' — one person, like 'he'. So the verb is 'has'.",
          whyWrong: "'have' goes with I, you, we, they.",
        },
        options: [
          { id: "a", text: "have" },
          { id: "b", text: "has" },
          { id: "c", text: "is" },
        ],
        correctOptionId: "b",
      },
    },
    {
      slug: "fill-family-has",
      data: {
        type: "fill-blank",
        skill: "grammar",
        difficulty: "medium",
        prompt: "Complete the sentence with have or has.",
        tags: ["have has", "family"],
        hints: ["'My parents' means more than one person — like 'they'.", "they → have."],
        feedback: {
          correctAnswer: "My parents have a small shop.",
          explanation: "'My parents' is plural, like 'they', so it takes 'have'.",
          whyWrong: "'has' is only for he, she and it.",
        },
        sentence: "My parents ___ a small shop in the city.",
        acceptedAnswers: ["have"],
      },
    },
    {
      slug: "match-family-words",
      data: {
        type: "match",
        skill: "vocabulary",
        difficulty: "easy",
        prompt: "Match each family word with its meaning.",
        tags: ["family", "vocabulary"],
        hints: ["Read the meanings first, then the words.", "Two of the words start with 'grand-'."],
        feedback: {
          correctAnswer: "grandmother — your father's or mother's mother; uncle — your father's or mother's brother; cousin — your aunt's or uncle's child",
          explanation:
            "Family words with 'grand-' go one generation up. 'Uncle' covers both sides of the family. A 'cousin' is the child of an uncle or aunt.",
        },
        leftItems: [
          { id: "l1", text: "grandmother" },
          { id: "l2", text: "uncle" },
          { id: "l3", text: "cousin" },
        ],
        rightItems: [
          { id: "r1", text: "your father's or mother's mother" },
          { id: "r2", text: "your father's or mother's brother" },
          { id: "r3", text: "your aunt's or uncle's child" },
        ],
        pairs: [
          { leftId: "l1", rightId: "r1" },
          { leftId: "l2", rightId: "r2" },
          { leftId: "l3", rightId: "r3" },
        ],
      },
    },
    {
      slug: "correct-years-old",
      data: {
        type: "correct-mistake",
        skill: "grammar",
        difficulty: "medium",
        prompt: "This sentence has one mistake. Write it correctly.",
        tags: ["age", "family"],
        hints: ["English uses the verb 'to be' for age.", "After the number comes 'years old'."],
        feedback: {
          correctAnswer: "My brother is ten years old.",
          explanation:
            "English says age with 'be + number + years old'. Many languages use 'have' for age — English does not.",
          whyWrong: "'has ten years' copies another language's pattern; 'is ten years' is missing 'old'.",
        },
        incorrectSentence: "My brother has ten years.",
        acceptedAnswers: ["my brother is ten years old", "my brother is 10 years old"],
      },
    }
];

/** Slug order of all eleven starter questions — array order fixes the
 * questionIds indices the lesson practice blocks reference. */
const STARTER_QUESTION_SLUGS = [
  "greeting-time-of-day", "name-is-blank", "match-pronoun-be",
  "rearrange-introduction", "correct-have-has",
  "listen-greetings", "how-are-you-response", "match-greeting-time",
  "have-has-subject", "fill-family-has", "match-family-words", "correct-years-old",
] as const;

/** PROMPT 57: the two starter lessons at full teaching depth. Shared by
 * seedStarterCourse (fresh databases) and upgradeStarterCourseContent
 * (existing databases) so both paths deliver identical blocks. */
function starterLessonOneSpec(questionIds: string[], asset: { id: string; title: string }) {
  return {
    slug: "greetings-and-introductions",
    title: "Greetings and Introductions",
    description: "Say hello, give your name, ask someone else's name and keep the first conversation alive.",
    objectives: [
      "Greet people at every time of day",
      "Give your name and ask for someone else's",
      "Answer 'How are you?' and return the question",
      "Close a first meeting politely",
    ],
    minutes: 15,
    status: "approved",
    live: true,
    blocks: [
      { type: "heading", text: "Greetings for every time of day" },
      {
        type: "text",
        text: "English changes its greeting with the clock. Before 12 p.m. you say 'Good morning'. In the afternoon you say 'Good afternoon'. After about 6 p.m. you say 'Good evening'. 'Good night' is special: it is only for leaving or sleeping, never for greeting.",
      },
      {
        type: "vocabulary-list",
        title: "Greetings and first-meeting phrases",
        words: [
          {
            word: "Hello",
            partOfSpeech: "interjection",
            definition: "A greeting you can use at any time.",
            translation: "Hola",
            example: { english: "Hello! How are you?", translation: "¡Hola! ¿Cómo estás?" },
          },
          {
            word: "Good morning",
            partOfSpeech: "phrase",
            definition: "A greeting used before 12 p.m.",
            translation: "Buenos días",
            example: { english: "Good morning, class!", translation: "¡Buenos días, clase!" },
          },
          {
            word: "Good afternoon",
            partOfSpeech: "phrase",
            definition: "A greeting used between 12 p.m. and about 6 p.m.",
            translation: "Buenas tardes",
            example: { english: "Good afternoon, everyone.", translation: "Buenas tardes a todos." },
          },
          {
            word: "Good evening",
            partOfSpeech: "phrase",
            definition: "A greeting used after about 6 p.m.",
            translation: "Buenas noches (al llegar)",
            example: { english: "Good evening! I'm David.", translation: "¡Buenas noches! Soy David." },
          },
          {
            word: "How are you?",
            partOfSpeech: "phrase",
            definition: "A friendly question about how someone feels.",
            translation: "¿Cómo estás?",
            example: { english: "How are you? — I'm fine, thank you.", translation: "¿Cómo estás? — Estoy bien, gracias." },
          },
          {
            word: "Nice to meet you",
            partOfSpeech: "phrase",
            definition: "Said when you meet someone for the first time.",
            translation: "Mucho gusto",
            example: { english: "I'm Ana. Nice to meet you!", translation: "Soy Ana. ¡Mucho gusto!" },
          },
        ],
      },
      {
        type: "table",
        title: "The clock decides the greeting",
        headers: ["Time", "You say", "Because"],
        rows: [
          ["9 a.m.", "Good morning!", "The morning runs until 12 p.m."],
          ["3 p.m.", "Good afternoon!", "Afternoon starts after noon."],
          ["8 p.m. (arriving)", "Good evening!", "Evening greetings happen after about 6 p.m."],
          ["11 p.m. (leaving)", "Good night!", "'Good night' closes the day — it never greets."],
        ],
        caption: "One rule to remember: greet with the time of day, leave with 'Good night'.",
      },
      {
        type: "example",
        title: "Greetings in real situations",
        items: [
          { english: "Good morning! I'm David. What's your name?", note: "Greeting + name + question — the natural first-meeting order.", domain: "social" },
          { english: "Good afternoon, everyone. My name is Ana.", note: "'Everyone' works when you greet a whole class.", domain: "education" },
          { english: "Good evening! How are you? — I'm fine, thank you. And you?", note: "'And you?' returns the question and keeps the talk alive.", domain: "social" },
          { english: "Hello! I'm Maria. Nice to meet you.", note: "'Nice to meet you' marks a FIRST meeting. Later meetings use 'Nice to see you'.", domain: "work" },
          { english: "Good night! See you tomorrow.", note: "'Good night' leaves the conversation; 'See you tomorrow' closes it warmly.", domain: "everyday" },
          { english: "Hi! I'm Carlos. Are you a new student?", note: "'Hi' is the informal brother of 'Hello' — fine with people your age.", domain: "education" },
        ],
      },
      {
        type: "dialogue",
        title: "First meeting",
        context: "Ana meets David at a language school.",
        lines: [
          { speaker: "David", text: "Good morning! I'm David. What's your name?", translation: "¡Buenos días! Soy David. ¿Cómo te llamas?" },
          { speaker: "Ana", text: "Good morning, David. My name is Ana. Nice to meet you!", translation: "Buenos días, David. Mi nombre es Ana. ¡Mucho gusto!" },
          { speaker: "David", text: "Nice to meet you too. Where are you from?", translation: "Igualmente. ¿De dónde eres?" },
          { speaker: "Ana", text: "I'm from Spain. And you?", translation: "Soy de España. ¿Y tú?" },
          { speaker: "David", text: "I'm from Mexico. How are you today?", translation: "Soy de México. ¿Cómo estás hoy?" },
          { speaker: "Ana", text: "I'm fine, thank you. See you in class!", translation: "Estoy bien, gracias. ¡Nos vemos en clase!" },
        ],
      },
      { type: "audio", label: "Listen to the greeting", mode: "asset", audioAssetId: asset.id, assetTitle: asset.title },
      {
        type: "grammar-rule",
        title: "My name is / I'm",
        rule: "Use 'My name is Ana' or the short form 'I'm Ana' to introduce yourself.",
        explanation: "Both are correct; 'I'm' is more common in conversation.",
        examples: [
          { english: "My name is Carlos.", translation: "Mi nombre es Carlos." },
          { english: "I'm Maria.", translation: "Soy Maria." },
          { english: "What's your name? — I'm Sofia.", translation: "¿Cómo te llamas? — Soy Sofia." },
        ],
        exceptions: ["Do not say 'I am Ana' word by word from your language — English speakers say 'I'm'."],
      },
      {
        type: "comparison",
        title: "Two questions beginners mix up",
        columns: ["What's your name?", "How are you?"],
        rows: [
          { aspect: "What it asks", left: "Your identity.", right: "How you feel today." },
          { aspect: "Natural answer", left: "I'm Ana. / My name is Ana.", right: "I'm fine, thank you. And you?" },
          { aspect: "Common mistake", left: "Answering with a name when asked how you are.", right: "Answering with 'Yes, I am' — that belongs to 'Are you …?' questions." },
        ],
        intro: "Both questions come in the first minute of a conversation. They look similar and do different jobs.",
        verdict: "Name questions get names. Feeling questions get feelings.",
      },
      {
        type: "mistakes",
        title: "Common first-conversation mistakes",
        items: [
          { wrong: "Good night! (arriving at 8 p.m.)", right: "Good evening!", reason: "'Good night' only closes the day — it never greets someone." },
          { wrong: "What your name?", right: "What's your name?", reason: "The verb 'is' never disappears in questions: what IS your name." },
          { wrong: "I am fine and you?", right: "I'm fine, and you?", reason: "Shorten 'I am' to 'I'm' and put a comma before 'and you?' — it is a new thought." },
          { wrong: "How are you? — My name is Ana.", right: "How are you? — I'm fine, thank you.", reason: "The question asks how you feel, not who you are." },
        ],
      },
      { type: "practice", title: "Check your understanding", exerciseIds: [questionIds[0], questionIds[1], questionIds[2], questionIds[3], questionIds[5], questionIds[6], questionIds[7]] },
      { type: "note", title: "Culture tip", text: "In English-speaking countries, a smile and 'Nice to meet you' with eye contact is polite." },
      {
        type: "summary",
        points: [
          "The clock decides the greeting: morning, afternoon or evening.",
          "'Good night' leaves a conversation — it never starts one.",
          "Introduce yourself with 'I'm …' or 'My name is …', then 'Nice to meet you'.",
          "Answer 'How are you?' with a feeling, then return it: 'And you?'.",
          "Close warmly: 'See you tomorrow.' / 'Good night.'",
        ],
      },
      {
        type: "assignment",
        title: "Your first introduction",
        instructions:
          "Write a first-meeting conversation between you and a new classmate: six lines. Use a time-of-day greeting, both names, 'Nice to meet you', 'How are you?' with an answer, and a polite close.",
        minWords: 30,
        maxWords: 90,
      },
      {
        type: "homework",
        title: "Before next lesson",
        tasks: [
          "Greet three people today at different times and notice which greeting each moment needs.",
          "Write your own four-line introduction and say it out loud twice.",
        ],
      },
    ],
  };
}

function starterLessonTwoSpec(questionIds: string[]) {
  return {
    slug: "talking-about-your-family",
    title: "Talking About Your Family",
    description: "Name your family, use have/has correctly and say age the English way.",
    objectives: [
      "Name eight family members",
      "Use 'have' and 'has' with every subject",
      "Say age with 'be + number + years old'",
      "Introduce two family members in writing",
    ],
    minutes: 15,
    status: "approved",
    live: true,
    blocks: [
      { type: "heading", text: "Your family in English" },
      {
        type: "text",
        text: "Family words work with 'my': my mother, my sister, my grandfather. The small word 'my' shows the person belongs to your family. Never use 'the' here — 'the mother' sounds like a stranger.",
      },
      {
        type: "table",
        title: "Family members",
        headers: ["English", "Who it is", "Example sentence"],
        rows: [
          ["mother", "your female parent", "My mother is a teacher."],
          ["father", "your male parent", "My father works in a hospital."],
          ["sister", "a girl with the same parents", "I have one sister."],
          ["brother", "a boy with the same parents", "My brother is ten years old."],
          ["grandmother", "your parents' mother", "My grandmother makes bread."],
          ["grandfather", "your parents' father", "My grandfather has a garden."],
          ["uncle", "your parents' brother", "My uncle lives near us."],
          ["aunt", "your parents' sister", "My aunt is a doctor."],
        ],
        caption: "'Grand-' goes one generation up; uncle and aunt cover both sides of the family.",
      },
      {
        type: "usage",
        title: "Where you talk about family",
        items: [
          { situation: "Showing a photo", example: "Who is this? — This is my grandfather. He is a teacher.", note: "Ask with 'Who is this?', answer with 'This is my …'" },
          { situation: "A friend meets your mother", example: "This is my mother. She works in a hospital.", note: "Introduce the person, then add one true sentence with he or she." },
          { situation: "Describing your family to a classmate", example: "I have one sister and two brothers. My sister is eight years old.", note: "'I have + number' describes how many; 'be + number + years old' describes age." },
          { situation: "Telling a friend about their jobs", example: "My father is a bus driver. My mother has a small shop.", note: "Jobs use 'be'; possessions use 'have'." },
        ],
      },
      {
        type: "grammar-rule",
        title: "have / has",
        rule: "Use 'have' with I, you, we, they. Use 'has' with he, she, it.",
        explanation: "The subject decides the verb form.",
        examples: [
          { english: "I have two brothers.", translation: "Tengo dos hermanos." },
          { english: "She has one sister.", translation: "Ella tiene una hermana." },
          { english: "My grandfather has a garden.", translation: "Mi abuelo tiene un jardín." },
        ],
        exceptions: ["With 'my parents', 'we' and 'they', the verb is 'have' — more than one person."],
      },
      {
        type: "grammar-rule",
        title: "Age in English",
        rule: "Age uses 'be', not 'have': He is ten years old.",
        explanation: "Many languages say age with 'have'. English uses 'be + number + years old'.",
        examples: [
          { english: "My brother is ten years old.", translation: "Mi hermano tiene diez años." },
          { english: "I am fifteen.", translation: "Tengo quince años." },
        ],
        exceptions: ["In fast speech you can drop 'years old': 'She's eight.' The verb 'be' always stays."],
      },
      {
        type: "example",
        title: "Family sentences that work",
        items: [
          { english: "I have one sister and two brothers.", note: "'I have + numbers' describes your family in one line.", domain: "family" },
          { english: "My mother is a teacher. She is kind.", note: "Job first, then a character word with she.", domain: "family" },
          { english: "My grandfather has a beautiful garden.", note: "One person like 'he' — so 'has'.", domain: "home" },
          { english: "Who is this? — This is my aunt. She is a doctor.", note: "Photo questions use 'Who is this?'.", domain: "social" },
          { english: "My parents have a small shop in the city.", note: "'Parents' is plural like 'they' — so 'have'.", domain: "work" },
          { english: "My little sister is five. She is very funny.", note: "Age can drop 'years old' in casual speech, never the verb 'is'.", domain: "everyday" },
        ],
      },
      {
        type: "dialogue",
        title: "The family photo",
        context: "Ana shows Leo a photo after class.",
        lines: [
          { speaker: "Leo", text: "Who is this?" },
          { speaker: "Ana", text: "This is my grandmother. She is seventy." },
          { speaker: "Leo", text: "And this? Is it your father?" },
          { speaker: "Ana", text: "No, it is my uncle! My father is tall. This man is short." },
          { speaker: "Leo", text: "You have a big family!" },
          { speaker: "Ana", text: "Yes — I have two brothers, one sister and six cousins." },
        ],
      },
      {
        type: "audio",
        label: "Listen: family words",
        text: "mother. father. sister. brother. grandmother. grandfather. uncle. aunt. This is my mother. She has one sister.",
        rate: 0.85,
      },
      {
        type: "comparison",
        title: "have vs has",
        columns: ["have", "has"],
        rows: [
          { aspect: "Subjects", left: "I, you, we, they (and plurals: my parents)", right: "he, she, it (and singular people: my grandfather)" },
          { aspect: "Example", left: "They have a small house.", right: "She has a small house." },
          { aspect: "Typical mistake", left: "'She have a brother' — wrong verb for one person.", right: "'My parents has a shop' — wrong verb for more than one." },
        ],
        intro: "One verb, two forms. The subject picks the form — nothing else in the sentence changes it.",
        verdict: "More than one person → have. One person → has.",
      },
      {
        type: "mistakes",
        title: "Common family-talk mistakes",
        items: [
          { wrong: "She have a brother.", right: "She has a brother.", reason: "One person (she) takes 'has'." },
          { wrong: "My brother has ten years.", right: "My brother is ten years old.", reason: "English uses 'be + number + years old' for age — never 'have'." },
          { wrong: "My mother she is a teacher.", right: "My mother is a teacher.", reason: "English never doubles the subject: 'my mother' already names who, so 'she' is dropped." },
          { wrong: "This is the mother.", right: "This is my mother.", reason: "'The' points at a stranger; 'my' says she belongs to your family." },
        ],
      },
      { type: "practice", title: "Practise have / has and family words", exerciseIds: [questionIds[4], questionIds[8], questionIds[9], questionIds[10], questionIds[11]] },
      {
        type: "warning",
        title: "Common mistake",
        text: "Don't forget: 'She has a brother', not 'She have a brother'. And age uses 'is': 'He is ten years old.'",
      },
      {
        type: "summary",
        points: [
          "Family words take 'my': my mother, my grandfather, my cousins.",
          "have/has follows the subject: I/you/we/they → have; he/she/it → has.",
          "Age uses 'be + number + years old': 'My sister is eight years old.'",
          "Introduce people with 'This is my …', then one true sentence with he or she.",
          "'I have + number' describes how many; jobs use 'be', possessions use 'have'.",
        ],
      },
      {
        type: "assignment",
        title: "My family",
        instructions:
          "Write about your family. Who is in it? Use 'I have …' once, 'My … is …' twice, one age with 'years old', and one 'Who is this? — This is my …' exchange.",
        minWords: 40,
        maxWords: 120,
      },
      {
        type: "homework",
        title: "Before next lesson",
        tasks: [
          "Label a family photo with the eight English family words.",
          "Write one true sentence about each family member and read it aloud.",
        ],
      },
    ],
  };
}

/**
 * PROMPT 57: upgrade the two starter lessons in place on existing databases.
 * Creates the six new practice questions if missing, rebuilds both lessons'
 * blocks (slug-stable, so progress rows survive), appends honest version
 * snapshots and resets review honesty — the new content is AI-authored, so
 * any human approval the old content might have carried does not carry over.
 */
async function upgradeStarterCourseContent(): Promise<void> {
  const admin = await db.user.findUnique({ where: { email: "admin@talksy.app" } });

  // 1. The six new questions, by slug (the five legacy ones are unchanged).
  for (const q of STARTER_PROMPT57_QUESTIONS) {
    const existing = await db.cmsQuestion.findUnique({ where: { slug: q.slug } });
    if (existing) continue;
    const created = await db.cmsQuestion.create({
      data: {
        slug: q.slug,
        type: q.data.type as string,
        skill: q.data.skill as string,
        difficulty: q.data.difficulty as string,
        prompt: q.data.prompt as string,
        tags: JSON.stringify((q.data.tags as string[]) ?? []),
        data: JSON.stringify({ ...q.data, id: "pending" }),
        status: "published",
        version: 1,
        createdById: admin?.id ?? null,
      },
    });
    const exercise = { ...q.data, id: created.id };
    await db.cmsQuestion.update({ where: { id: created.id }, data: { data: JSON.stringify(exercise) } });
    await db.cmsQuestionVersion.create({
      data: {
        questionId: created.id,
        version: 1,
        snapshot: JSON.stringify({
          type: q.data.type,
          skill: q.data.skill,
          difficulty: q.data.difficulty,
          prompt: q.data.prompt,
          tags: (q.data.tags as string[]) ?? [],
          data: exercise,
        }),
        changedById: admin?.id ?? null,
        changeNote: "PROMPT 57 starter depth upgrade",
      },
    });
  }

  // 2. Ordered question ids (array order = the indices the practice blocks use).
  const questionIds: string[] = [];
  for (const slug of STARTER_QUESTION_SLUGS) {
    const row = await db.cmsQuestion.findUniqueOrThrow({ where: { slug } });
    questionIds.push(row.id);
  }

  // 3. The greeting-tone asset from the original seed.
  const asset = await db.cmsAsset.findFirstOrThrow({ where: { title: "Greeting tone (sample audio)" } });

  // 4. Rebuild both lessons in place.
  const specs = [
    ["greetings-and-introductions", starterLessonOneSpec(questionIds, asset)],
    ["talking-about-your-family", starterLessonTwoSpec(questionIds)],
  ] as const;
  for (const [slug, spec] of specs) {
    const lesson = await db.cmsLesson.findUniqueOrThrow({ where: { slug } });
    await db.cmsLessonBlock.deleteMany({ where: { lessonId: lesson.id } });
    await db.cmsLessonBlock.createMany({
      data: spec.blocks.map((b, i) => ({
        lessonId: lesson.id,
        order: i,
        type: b.type as string,
        data: JSON.stringify(b),
      })),
    });
    const nextVersion = lesson.version + 1;
    await db.cmsLesson.update({
      where: { id: lesson.id },
      data: {
        title: spec.title,
        description: spec.description,
        objectives: JSON.stringify(spec.objectives),
        estimatedMinutes: spec.minutes,
        version: nextVersion,
        // Republish: the learner route serves the published snapshot, so the
        // upgrade must point publishedVersion at the new version row.
        publishedVersion: nextVersion,
        publishedAt: new Date(),
        // Honesty: this content is AI-authored. If the old content carried a
        // human approval, the edit invalidates it.
        reviewStatus: "ai-reviewed",
      },
    });
    await db.cmsLessonVersion.create({
      data: {
        lessonId: lesson.id,
        version: lesson.version + 1,
        snapshot: JSON.stringify({
          title: spec.title,
          description: spec.description,
          objectives: spec.objectives,
          estimatedMinutes: spec.minutes,
          blocks: spec.blocks.map((b, i) => ({ id: `${slug}-b${i + 1}`, type: b.type, data: b })),
        }),
        changedById: admin?.id ?? null,
        changeNote: "PROMPT 57 depth upgrade",
      },
    });
  }
}

async function seedStarterCourse(): Promise<void> {
  // Level
  let level = await db.cmsLevel.findUnique({ where: { slug: "a1-beginner" } });
  if (!level) {
    level = await db.cmsLevel.create({
      data: {
        slug: "a1-beginner",
        name: "A1 Beginner",
        description: "First steps in English: everyday words and simple sentences.",
        order: 1,
      },
    });
  }

  // Sample audio asset (a real playable WAV so the audio manager is populated).
  const admin = await db.user.findUnique({ where: { email: "admin@talksy.app" } });
  const mediaDir = join(process.cwd(), "db", "media");
  mkdirSync(mediaDir, { recursive: true });
  const wav = makeToneWav();
  const asset = await db.cmsAsset.create({
    data: {
      kind: "audio",
      title: "Greeting tone (sample audio)",
      fileName: "greeting-tone.wav",
      mimeType: "audio/wav",
      sizeBytes: wav.byteLength,
      durationSeconds: 1.5,
      transcript: "Hello! Good morning!",
      language: "en",
      pronunciation: "hə-ˈlō ɡu̇d ˈmȯr-niŋ",
      licence: "CC0 (generated)",
      source: "TalkSy starter library",
      uploadedById: admin?.id ?? null,
    },
  });
  writeFileSync(join(mediaDir, `${asset.id}.wav`), wav);

  // Questions (published so they can be attached to lessons).
  const questions: {
    slug: string;
    data: Record<string, unknown>;
  }[] = [
    {
      slug: "greeting-time-of-day",
      data: {
        type: "mcq",
        skill: "vocabulary",
        difficulty: "easy",
        prompt: "It is 9 in the morning. What do you say?",
        tags: ["greetings", "vocabulary"],
        hints: ["Think about the time of day."],
        feedback: {
          correctAnswer: "Good morning!",
          explanation: "We say 'Good morning' before 12 p.m. 'Good night' is only for sleeping.",
          whyWrong: "'Good night' is for bedtime, and 'Goodbye' is for leaving.",
        },
        options: [
          { id: "a", text: "Good morning!" },
          { id: "b", text: "Good night!" },
          { id: "c", text: "Goodbye!" },
        ],
        correctOptionId: "a",
      },
    },
    {
      slug: "name-is-blank",
      data: {
        type: "fill-blank",
        skill: "grammar",
        difficulty: "easy",
        prompt: "Complete the sentence with the correct verb.",
        tags: ["verb to be", "grammar"],
        hints: ["Use the verb 'to be'."],
        feedback: {
          correctAnswer: "is",
          explanation: "With 'name' we always use 'is' — names are singular.",
        },
        sentence: "My name ___ Ana.",
        acceptedAnswers: ["is"],
      },
    },
    {
      slug: "match-pronoun-be",
      data: {
        type: "match",
        skill: "grammar",
        difficulty: "easy",
        prompt: "Match each pronoun with the correct form of the verb 'to be'.",
        tags: ["verb to be", "pronouns"],
        hints: [
          "Every pronoun has its own verb form — read both columns carefully first.",
          "The pronoun 'she' pairs with the form that fits one person alone.",
        ],
        feedback: {
          correctAnswer: "I–am, you–are, she–is",
          explanation: "The verb 'to be' has three present forms: am, are, is.",
        },
        leftItems: [
          { id: "l1", text: "I" },
          { id: "l2", text: "you" },
          { id: "l3", text: "she" },
        ],
        rightItems: [
          { id: "r1", text: "am" },
          { id: "r2", text: "are" },
          { id: "r3", text: "is" },
        ],
        pairs: [
          { leftId: "l1", rightId: "r1" },
          { leftId: "l2", rightId: "r2" },
          { leftId: "l3", rightId: "r3" },
        ],
      },
    },
    {
      slug: "rearrange-introduction",
      data: {
        type: "rearrange",
        skill: "grammar",
        difficulty: "medium",
        prompt: "Put the words in the correct order to introduce yourself.",
        tags: ["sentence order", "introductions"],
        hints: ["Start with 'I'."],
        feedback: {
          correctAnswer: "I am from Spain.",
          explanation: "English sentences usually follow Subject + Verb + rest.",
        },
        correctTokens: ["I", "am", "from", "Spain"],
        correctSentence: "I am from Spain.",
      },
    },
    {
      slug: "correct-have-has",
      data: {
        type: "correct-mistake",
        skill: "grammar",
        difficulty: "medium",
        prompt: "This sentence has one mistake. Write it correctly.",
        tags: ["have has", "family"],
        hints: ["Look at the subject 'she'."],
        feedback: {
          correctAnswer: "She has two brothers.",
          explanation: "With he / she / it we use 'has', not 'have'.",
        },
        incorrectSentence: "She have two brothers.",
        acceptedAnswers: ["she has two brothers", "she has 2 brothers"],
      },
    },
    ...STARTER_PROMPT57_QUESTIONS,
  ];

  const questionIds: string[] = [];
  for (const q of questions) {
    const created = await db.cmsQuestion.create({
      data: {
        slug: q.slug,
        type: q.data.type as string,
        skill: q.data.skill as string,
        difficulty: q.data.difficulty as string,
        prompt: q.data.prompt as string,
        tags: JSON.stringify(q.data.tags ?? []),
        data: JSON.stringify({ ...q.data, id: "pending" }),
        status: "published",
        version: 1,
        createdById: admin?.id ?? null,
      },
    });
    const exercise = { ...q.data, id: created.id };
    await db.cmsQuestion.update({ where: { id: created.id }, data: { data: JSON.stringify(exercise) } });
    await db.cmsQuestionVersion.create({
      data: {
        questionId: created.id,
        version: 1,
        snapshot: JSON.stringify({
          type: q.data.type,
          skill: q.data.skill,
          difficulty: q.data.difficulty,
          prompt: q.data.prompt,
          tags: q.data.tags ?? [],
          data: exercise,
        }),
        changedById: admin?.id ?? null,
        changeNote: "Seeded",
      },
    });
    questionIds.push(created.id);
  }

  // Course → module → units → lessons.
  const course = await db.cmsCourse.create({
    data: {
      slug: STARTER_COURSE_SLUG,
      title: "Everyday English Foundations",
      description:
        "Your first English conversations: greet people, introduce yourself, talk about your family.",
      levelId: level.id,
      status: "approved",
      live: true,
      createdById: admin?.id ?? null,
    },
  });
  const module1 = await db.cmsModule.create({
    data: {
      courseId: course.id,
      slug: "getting-started",
      title: "Getting Started",
      description: "Meeting people for the first time.",
    },
  });
  const unit1 = await db.cmsUnit.create({
    data: {
      moduleId: module1.id,
      slug: "first-words",
      title: "First Words",
      description: "Greetings and introductions.",
    },
  });
  const unit2 = await db.cmsUnit.create({
    data: {
      moduleId: module1.id,
      slug: "about-me",
      title: "About Me",
      description: "Talking about yourself and your family.",
    },
  });

  async function addLesson(
    unitId: string,
    input: {
      slug: string;
      title: string;
      description: string;
      objectives: string[];
      minutes: number;
      status: string;
      live: boolean;
      blocks: Record<string, unknown>[];
    },
  ) {
    const lesson = await db.cmsLesson.create({
      data: {
        unitId,
        slug: input.slug,
        title: input.title,
        description: input.description,
        objectives: JSON.stringify(input.objectives),
        estimatedMinutes: input.minutes,
        status: input.status,
        live: input.live,
        publishedVersion: input.live ? 1 : null,
        publishedAt: input.live ? new Date() : null,
        createdById: admin?.id ?? null,
        version: 1,
      },
    });
    if (input.blocks.length > 0) {
      await db.cmsLessonBlock.createMany({
        data: input.blocks.map((b, i) => ({
          lessonId: lesson.id,
          order: i,
          type: b.type as string,
          data: JSON.stringify(b),
        })),
      });
    }
    await db.cmsLessonVersion.create({
      data: {
        lessonId: lesson.id,
        version: 1,
        snapshot: JSON.stringify({
          title: input.title,
          description: input.description,
          objectives: input.objectives,
          estimatedMinutes: input.minutes,
          blocks: input.blocks.map((b, i) => ({
            id: `${input.slug}-b${i + 1}`,
            type: b.type,
            data: b,
          })),
        }),
        changedById: admin?.id ?? null,
        changeNote: "Seeded",
      },
    });
    return lesson;
  }

  const lesson1 = await addLesson(unit1.id, starterLessonOneSpec(questionIds, asset));

  const lesson2 = await addLesson(unit2.id, starterLessonTwoSpec(questionIds));

  // Lesson 2 requires lesson 1 (demonstrates the prerequisite system).
  await db.cmsPrerequisite.create({
    data: { lessonId: lesson2.id, requiresLessonId: lesson1.id },
  });

  // A third lesson stays as a draft so the review workflow has a visible
  // starting point on the dashboard.
  const unit3 = await db.cmsUnit.create({
    data: {
      moduleId: module1.id,
      slug: "everyday-routines",
      title: "Everyday Routines",
      description: "Daily habits with the present simple.",
    },
  });
  await addLesson(unit3.id, {
    slug: "my-day-draft",
    title: "My Day (draft)",
    description: "Describe your daily routine with times.",
    objectives: ["Tell the time", "Describe your morning routine"],
    minutes: 12,
    status: "draft",
    live: false,
    blocks: [
      { type: "heading", text: "What time is it?" },
      {
        type: "text",
        text: "This lesson is still being written. It will teach how to say the time and describe a morning routine.",
      },
    ],
  });

  // The demo learner is enrolled so enrolment analytics have real data.
  const demo = await db.user.findUnique({ where: { email: DEMO_EMAIL } });
  if (demo) {
    await db.cmsEnrolment
      .create({ data: { userId: demo.id, courseId: course.id } })
      .catch(() => undefined);
  }
}

/**
 * First-login migration for existing staff databases: flag every staff
 * account whose password still verifies against one of the public seeded
 * defaults. Accounts with an already-changed password are left alone.
 * Returns the number of accounts flagged. Called by scripts/restore-seed-db.ts
 * and safe to run repeatedly.
 */
export async function migrateStaffFirstLogin(): Promise<number> {
  const { verifyPassword } = await import("@/lib/auth");
  const staff = await db.user.findMany({
    where: { role: { in: ["editor", "teacher", "admin"] } },
  });
  let flagged = 0;
  for (const member of staff) {
    const stillDefault = STAFF_ACCOUNTS.some(
      (account) => verifyPassword(account.password, member.passwordHash),
    );
    if (stillDefault && !member.mustChangePassword) {
      await db.user.update({
        where: { id: member.id },
        data: { mustChangePassword: true },
      });
      flagged += 1;
    }
  }
  return flagged;
}
