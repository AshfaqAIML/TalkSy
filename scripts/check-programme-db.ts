/**
 * Post-resume verification (PROMPT 34): confirm the Core English Programme
 * is present in the dev database (db/custom.db) — levels, the six programme
 * courses, chapters, lessons, demo enrolment and honest demo progress.
 *
 * Run: bun scripts/check-programme-db.ts
 */
import { PrismaClient } from "@prisma/client";

const PROGRAMME_COURSE_SLUGS = [
  "english-from-zero",
  "beginner-english",
  "elementary-english",
  "intermediate-english",
  "upper-intermediate-english",
  "advanced-communication",
];

const db = new PrismaClient();

const levels = await db.cmsLevel.findMany({
  orderBy: { order: "asc" },
  include: { _count: { select: { courses: true } } },
});
console.log(
  "CMS levels:",
  levels.map((l) => `${l.slug}(${l._count.courses})`).join(", "),
);

const courses = await db.cmsCourse.findMany({
  where: { slug: { in: PROGRAMME_COURSE_SLUGS } },
  include: { level: true, _count: { select: { modules: true } } },
  orderBy: { order: "asc" },
});
console.log(`Programme courses in DB: ${courses.length}/6`);
for (const c of courses) {
  console.log(
    `  ${c.slug} level=${c.level?.slug ?? "?"} modules=${c._count.modules} status=${c.status}`,
  );
}

const units = await db.cmsUnit.count({
  where: { module: { course: { slug: { in: PROGRAMME_COURSE_SLUGS } } } },
});
console.log("Programme chapters (units) in DB:", units);

const lessons = await db.cmsLesson.count({
  where: {
    unit: { module: { course: { slug: { in: PROGRAMME_COURSE_SLUGS } } } },
  },
});
console.log("Programme lessons in DB:", lessons);

const questions = await db.cmsQuestion.count({
  where: { slug: { startsWith: "ch-" } },
});
console.log("Programme chapter-review questions in DB:", questions);

const enrolments = await db.cmsEnrolment.count({
  where: { course: { slug: { in: PROGRAMME_COURSE_SLUGS } } },
});
console.log("Programme enrolments:", enrolments);

const demo = await db.user.findFirst({ where: { email: "demo@talksy.app" } });
if (demo) {
  const programmeLessons = await db.cmsLesson.findMany({
    where: {
      unit: { module: { course: { slug: { in: PROGRAMME_COURSE_SLUGS } } } },
    },
    select: { id: true },
  });
  const ids = programmeLessons.map((l) => l.id);
  const doneP = await db.cmsLessonProgress.count({
    where: { userId: demo.id, lessonId: { in: ids }, status: "completed" },
  });
  const activeP = await db.cmsLessonProgress.count({
    where: {
      userId: demo.id,
      lessonId: { in: ids },
      status: { not: "completed" },
    },
  });
  console.log(
    `Demo learner ${demo.email}: programme completed=${doneP}, in-progress=${activeP}`,
  );
} else {
  console.log("Demo learner demo@talksy.app: NOT FOUND");
}

await db.$disconnect();
