/**
 * Demo-account provisioning.
 *
 * The demo learner (demo@talksy.app / demo1234) is advertised on the login
 * screen, so it must ALWAYS work — including after a database reset (the
 * dev database can be recreated empty by the environment at any time).
 * `ensureDemoUser()` is called by the login route on a failed demo lookup,
 * making the account self-healing with zero manual seeding.
 */

import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export const DEMO_EMAIL = "demo@talksy.app";
export const DEMO_PASSWORD = "demo1234";

/** Create the demo learner if missing. Returns the user row. */
export async function ensureDemoUser() {
  const existing = await db.user.findUnique({ where: { email: DEMO_EMAIL } });
  if (existing) return existing;

  return db.user.create({
    data: {
      email: DEMO_EMAIL,
      name: "Demo Learner",
      passwordHash: hashPassword(DEMO_PASSWORD),
    },
  });
}
