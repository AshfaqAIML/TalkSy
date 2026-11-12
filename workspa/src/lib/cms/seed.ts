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
      },
    });
  }

  // The demo learner keeps its student role even after schema changes.
  const demo = await db.user.findUnique({ where: { email: DEMO_EMAIL } });
  if (demo && demo.role !== "student") {
    await db.user.update({ where: { id: demo.id }, data: { role: "student" } });
  }

  const existingCourse = await db.cmsCourse.findUnique({ where: { slug: STARTER_COURSE_SLUG } });
  if (existingCourse) return;
  await seedStarterCourse();
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
        correctAnswer: "Good morning!",
        explanation: "We say 'Good morning' before 12 p.m. 'Good night' is only for sleeping.",
        whyWrong: "'Good night' is for bedtime, and 'Goodbye' is for leaving.",
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
        correctAnswer: "My name is Ana.",
        explanation: "With 'name' we always use 'is' — names are singular.",
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
        hints: ["I → am, you → are."],
        correctAnswer: "I–am, you–are, she–is",
        explanation: "The verb 'to be' has three present forms: am, are, is.",
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
        correctAnswer: "I am from Spain.",
        explanation: "English sentences usually follow Subject + Verb + rest.",
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
        correctAnswer: "She has two brothers.",
        explanation: "With he / she / it we use 'has', not 'have'.",
        incorrectSentence: "She have two brothers.",
        acceptedAnswers: ["she has two brothers", "she has 2 brothers"],
      },
    },
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

  const lesson1 = await addLesson(unit1.id, {
    slug: "greetings-and-introductions",
    title: "Greetings and Introductions",
    description: "Say hello, give your name and ask someone else's name.",
    objectives: [
      "Greet people at different times of day",
      "Give your name and ask for someone else's",
      "Use 'Nice to meet you'",
    ],
    minutes: 10,
    status: "approved",
    live: true,
    blocks: [
      { type: "heading", text: "Saying hello" },
      {
        type: "text",
        text: "English has different greetings for different times of the day. Choose the right one and people will know you are friendly and polite.",
      },
      {
        type: "vocabulary-list",
        title: "Greetings",
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
            word: "Nice to meet you",
            partOfSpeech: "phrase",
            definition: "Said when you meet someone for the first time.",
            translation: "Mucho gusto",
            example: { english: "I'm Ana. Nice to meet you!", translation: "Soy Ana. ¡Mucho gusto!" },
          },
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
        ],
        exceptions: ["Do not say 'I am Ana' word by word from your language — English speakers say 'I'm'."],
      },
      { type: "practice", title: "Check your understanding", exerciseIds: [questionIds[0], questionIds[1], questionIds[2]] },
      { type: "note", title: "Culture tip", text: "In English-speaking countries, a smile and 'Nice to meet you' with eye contact is polite." },
    ],
  });

  const lesson2 = await addLesson(unit2.id, {
    slug: "talking-about-your-family",
    title: "Talking About Your Family",
    description: "Use 'have / has' to talk about brothers, sisters and parents.",
    objectives: [
      "Name family members",
      "Use 'have' and 'has' correctly",
      "Write 3 sentences about your family",
    ],
    minutes: 12,
    status: "approved",
    live: true,
    blocks: [
      { type: "heading", text: "Family words" },
      {
        type: "table",
        title: "Family members",
        headers: ["English", "Example sentence"],
        rows: [
          ["mother", "My mother is a teacher."],
          ["father", "My father works in a hospital."],
          ["sister", "I have one sister."],
          ["brother", "My brother is ten years old."],
        ],
        caption: "Singular family words with example sentences.",
      },
      {
        type: "grammar-rule",
        title: "have / has",
        rule: "Use 'have' with I, you, we, they. Use 'has' with he, she, it.",
        explanation: "The subject decides the verb form.",
        examples: [
          { english: "I have two brothers.", translation: "Tengo dos hermanos." },
          { english: "She has one sister.", translation: "Ella tiene una hermana." },
        ],
        exceptions: [],
      },
      { type: "practice", title: "Practise have / has", exerciseIds: [questionIds[3], questionIds[4]] },
      {
        type: "assignment",
        title: "My family",
        instructions:
          "Write about your family. Who is in your family? Use 'I have …' and 'My … is …' at least twice.",
        minWords: 40,
        maxWords: 120,
      },
      {
        type: "homework",
        title: "Before next lesson",
        tasks: [
          "Say the family words out loud five times.",
          "Write one sentence about each family member.",
        ],
      },
      { type: "warning", title: "Common mistake", text: "Don't forget: 'She has a brother', not 'She have a brother'." },
    ],
  });

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
