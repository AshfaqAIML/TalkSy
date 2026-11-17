/**
 * DEVELOPMENT / E2E FIXTURE ONLY — never run in production.
 *
 * Resets the three seeded staff accounts to their public default passwords
 * and re-arms the first-login gate, and clears the auth throttle counters.
 * End-to-end suites call this at the start of every run so staff logins are
 * deterministic (login with the documented default → complete the
 * forced-change flow) regardless of what earlier runs left in the database.
 *
 * Usage: bun scripts/reset-staff-passwords.ts
 */

import { PrismaClient } from "@prisma/client";
import { randomBytes, scryptSync } from "node:crypto";

const db = new PrismaClient();

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

const STAFF_DEFAULTS = [
  { email: "admin@talksy.app", password: "Admin1234!" },
  { email: "editor@talksy.app", password: "Editor1234!" },
  { email: "teacher@talksy.app", password: "Teacher1234!" },
] as const;

async function main(): Promise<void> {
  for (const account of STAFF_DEFAULTS) {
    const existing = await db.user.findUnique({ where: { email: account.email } });
    if (!existing) {
      console.log(`(skip) ${account.email} does not exist yet`);
      continue;
    }
    await db.user.update({
      where: { id: existing.id },
      data: {
        passwordHash: hashPassword(account.password),
        mustChangePassword: true,
        status: "active",
      },
    });
    console.log(`reset ${account.email} → default password + first-login flag`);
  }

  await db.authThrottle.deleteMany({});
  console.log("cleared all auth throttle counters");

  console.log("Done. This is a development/E2E fixture — never run it in production.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
