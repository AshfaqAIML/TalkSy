/**
 * Test-suite setup: clears runtime-only tables in db/test.db before a test
 * run so leftover throttling state (S1 counter locks from previous runs)
 * can never bleed into a fresh suite. Runs as part of `bun run test`.
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

await db.authThrottle.deleteMany({});
await db.passwordResetToken.deleteMany({});
await db.session.deleteMany({});
await db.$disconnect();
console.log("[test-setup] runtime tables cleared (AuthThrottle, PasswordResetToken, Session)");
