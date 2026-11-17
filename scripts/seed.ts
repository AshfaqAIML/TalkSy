/**
 * Seeds the demo learner account into the development database.
 * Run: bun run db:seed
 */
import { PrismaClient } from "@prisma/client";
import { scryptSync, randomBytes } from "node:crypto";

const db = new PrismaClient();

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

interface AttemptRow {
  exerciseId: string;
  lessonSlug: string;
  type: string;
  difficulty: string;
  skill: string;
  isCorrect: boolean;
  hintsUsed: number;
  durationMs: number;
  answer: string;
  context: string;
}

async function main() {
  const email = "demo@talksy.app";
  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    console.log("Demo user already exists — nothing to do.");
    return;
  }

  const user = await db.user.create({
    data: {
      email,
      name: "Demo Learner",
      passwordHash: hashPassword("demo1234"),
    },
  });

  // --- Lesson 1: fully completed (all sections + passed assessment) -------
  await db.lessonProgress.create({
    data: {
      userId: user.id,
      lessonSlug: "p1-1-1",
      status: "completed",
      sectionsCompleted: JSON.stringify([
        "greeting-words",
        "first-dialogue",
        "how-are-you",
        "introduce-yourself",
      ]),
      lastSectionId: "introduce-yourself",
      completedAt: new Date(),
    },
  });

  const attemptRows: AttemptRow[] = [
    { exerciseId: "p1-1-1-mcq-1", lessonSlug: "p1-1-1", type: "mcq", difficulty: "easy", skill: "vocabulary", isCorrect: true, hintsUsed: 0, durationMs: 6100, answer: '{"optionId":"b"}', context: "practice" },
    { exerciseId: "p1-1-1-match-1", lessonSlug: "p1-1-1", type: "match", difficulty: "easy", skill: "vocabulary", isCorrect: false, hintsUsed: 1, durationMs: 21500, answer: '{"pairs":[]}', context: "practice" },
    { exerciseId: "p1-1-1-match-1", lessonSlug: "p1-1-1", type: "match", difficulty: "easy", skill: "vocabulary", isCorrect: true, hintsUsed: 1, durationMs: 14200, answer: '{"pairs":[{"leftId":"l1","rightId":"r1"}]}', context: "practice" },
    { exerciseId: "p1-1-1-dictation-1", lessonSlug: "p1-1-1", type: "dictation", difficulty: "medium", skill: "listening", isCorrect: true, hintsUsed: 0, durationMs: 18800, answer: '{"text":"nice to meet you"}', context: "practice" },
    { exerciseId: "p1-1-1-rearrange-1", lessonSlug: "p1-1-1", type: "rearrange", difficulty: "easy", skill: "grammar", isCorrect: true, hintsUsed: 0, durationMs: 9200, answer: '{"tokens":["how","are","you","?"]}', context: "practice" },
    { exerciseId: "p1-1-1-translate-1", lessonSlug: "p1-1-1", type: "translate", difficulty: "medium", skill: "vocabulary", isCorrect: false, hintsUsed: 1, durationMs: 25000, answer: '{"text":"a lot of taste"}', context: "practice" },
    { exerciseId: "p1-1-1-translate-1", lessonSlug: "p1-1-1", type: "translate", difficulty: "medium", skill: "vocabulary", isCorrect: true, hintsUsed: 1, durationMs: 12000, answer: '{"text":"nice to meet you"}', context: "practice" },
    { exerciseId: "p1-1-2-mcq-1", lessonSlug: "p1-1-2", type: "mcq", difficulty: "easy", skill: "vocabulary", isCorrect: true, hintsUsed: 0, durationMs: 5400, answer: '{"optionId":"b"}', context: "practice" },
    { exerciseId: "p1-1-2-fb-1", lessonSlug: "p1-1-2", type: "fill-blank", difficulty: "easy", skill: "vocabulary", isCorrect: true, hintsUsed: 0, durationMs: 8100, answer: '{"text":"four"}', context: "practice" },
    { exerciseId: "p1-1-2-dd-1", lessonSlug: "p1-1-2", type: "drag-drop", difficulty: "medium", skill: "vocabulary", isCorrect: false, hintsUsed: 2, durationMs: 39000, answer: '{"placements":[]}', context: "practice" },
  ];
  for (const row of attemptRows) {
    await db.exerciseAttempt.create({ data: { userId: user.id, ...row } });
  }

  // A passed assessment for lesson 1 (4/5).
  await db.assessmentResult.create({
    data: {
      userId: user.id,
      lessonSlug: "p1-1-1",
      status: "completed",
      questionIds: JSON.stringify([
        "p1-1-1-mcq-2",
        "p1-1-1-bank-mcq-1",
        "p1-1-1-bank-fb-1",
        "p1-1-1-bank-dict-1",
        "p1-1-1-bank-mcq-2",
      ]),
      score: 0.8,
      passed: true,
      total: 5,
      correct: 4,
      detail: "[]",
      completedAt: new Date(),
    },
  });

  // --- Lesson 2: in progress, first two sections done, bookmarked ---------
  await db.lessonProgress.create({
    data: {
      userId: user.id,
      lessonSlug: "p1-1-2",
      status: "in-progress",
      sectionsCompleted: JSON.stringify(["counting-1-5", "counting-6-10"]),
      lastSectionId: "counting-6-10",
      bookmarked: true,
    },
  });

  await db.lessonNote.create({
    data: {
      userId: user.id,
      lessonSlug: "p1-1-2",
      sectionId: "counting-6-10",
      content: "Remember: eight = 8 (e-i-g-h-t). Practice the /θ/ in 'three'!",
    },
  });

  // --- Aggregated stats ------------------------------------------------------
  const assessmentRows: AttemptRow[] = [
    { exerciseId: "p1-1-1-mcq-2", lessonSlug: "p1-1-1", type: "mcq", difficulty: "easy", skill: "vocabulary", isCorrect: true, hintsUsed: 0, durationMs: 7000, answer: '{"optionId":"c"}', context: "assessment" },
    { exerciseId: "p1-1-1-bank-mcq-1", lessonSlug: "p1-1-1", type: "mcq", difficulty: "medium", skill: "vocabulary", isCorrect: true, hintsUsed: 0, durationMs: 9500, answer: '{"optionId":"a"}', context: "assessment" },
    { exerciseId: "p1-1-1-bank-fb-1", lessonSlug: "p1-1-1", type: "fill-blank", difficulty: "easy", skill: "vocabulary", isCorrect: true, hintsUsed: 0, durationMs: 8000, answer: '{"text":"good"}', context: "assessment" },
    { exerciseId: "p1-1-1-bank-dict-1", lessonSlug: "p1-1-1", type: "dictation", difficulty: "hard", skill: "listening", isCorrect: false, hintsUsed: 0, durationMs: 21000, answer: '{"text":"good evening how are you"}', context: "assessment" },
  ];
  for (const row of assessmentRows) {
    await db.exerciseAttempt.create({ data: { userId: user.id, ...row } });
  }

  const allRows = [...attemptRows, ...assessmentRows];
  const byType: Record<string, { attempts: number; correct: number }> = {};
  const byDifficulty: Record<string, { attempts: number; correct: number }> = {};
  const bySkill: Record<string, { attempts: number; correct: number }> = {};
  for (const row of allRows) {
    for (const [map, key] of [
      [byType, row.type],
      [byDifficulty, row.difficulty],
      [bySkill, row.skill],
    ] as const) {
      const bucket = (map[key] ??= { attempts: 0, correct: 0 });
      bucket.attempts += 1;
      if (row.isCorrect) bucket.correct += 1;
    }
  }
  await db.userStats.create({
    data: {
      userId: user.id,
      totalAttempts: allRows.length,
      correctAttempts: allRows.filter((r) => r.isCorrect).length,
      hintsUsed: allRows.reduce((sum, r) => sum + r.hintsUsed, 0),
      timeSpentMs: allRows.reduce((sum, r) => sum + r.durationMs, 0),
      byType: JSON.stringify(byType),
      byDifficulty: JSON.stringify(byDifficulty),
      bySkill: JSON.stringify(bySkill),
      streakDays: 2,
      lastActiveDay: new Date().toISOString().slice(0, 10),
    },
  });

  console.log("Seeded demo user: demo@talksy.app / demo1234");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
