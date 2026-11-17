/**
 * Restores the development/seed database (db/custom.db) to a clean,
 * deployable state after test or E2E runs have polluted it.
 *
 * - Staff accounts (admin/editor/teacher) are reset to their documented
 *   public default passwords and re-flagged with mustChangePassword, i.e.
 *   the intended "choose your own password on first login" state.
 * - Everything except the staff accounts and the demo learner
 *   (demo@talksy.app, which carries the sample progress data shown in the
 *   public demo) is deleted; cascade rules remove their sessions,
 *   progress rows and tokens.
 * - Throttle counters and reset tokens are cleared.
 *
 * Run: bun scripts/restore-seed-db.ts
 */
import { db } from "../src/lib/db";
import { hashPassword } from "../src/lib/auth";

const STAFF_DEFAULTS = [
  { email: "admin@talksy.app", password: "Admin1234!" },
  { email: "editor@talksy.app", password: "Editor1234!" },
  { email: "teacher@talksy.app", password: "Teacher1234!" },
];

const KEEP_EMAILS = [...STAFF_DEFAULTS.map((s) => s.email), "demo@talksy.app"];

async function main() {
  const before = {
    users: await db.user.count(),
    sessions: await db.session.count(),
    throttle: await db.authThrottle.count(),
    resetTokens: await db.passwordResetToken.count(),
  };

  // 1. Remove every user except staff + the demo learner (cascades clean
  //    sessions, progress, attempts, notes, tokens, …).
  const removed = await db.user.deleteMany({
    where: { email: { notIn: KEEP_EMAILS } },
  });

  // 2. Reset staff to the documented first-login state.
  for (const staff of STAFF_DEFAULTS) {
    await db.user.update({
      where: { email: staff.email },
      data: {
        passwordHash: hashPassword(staff.password),
        mustChangePassword: true,
        status: "active",
      },
    });
    await db.session.deleteMany({ where: { user: { email: staff.email } } });
  }

  // 3. Clear runtime artifacts.
  await db.authThrottle.deleteMany({});
  await db.passwordResetToken.deleteMany({});

  const after = {
    users: await db.user.count(),
    sessions: await db.session.count(),
    throttle: await db.authThrottle.count(),
    resetTokens: await db.passwordResetToken.count(),
  };

  console.log("Removed users:", removed.count);
  console.log("Users:", before.users, "->", after.users);
  console.log("Sessions:", before.sessions, "->", after.sessions);
  console.log("Throttle rows:", before.throttle, "->", after.throttle);
  console.log("Reset tokens:", before.resetTokens, "->", after.resetTokens);
  console.log(
    "Remaining users:",
    (await db.user.findMany({ select: { email: true } })).map((u) => u.email),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
