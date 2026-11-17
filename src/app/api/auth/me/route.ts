import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json } from "@/lib/api-helpers";

/**
 * GET /api/auth/me — the signed-in learner's session + profile in one call:
 * identity (id/email/name/role, mustChangePassword) plus the profile fields
 * the app shell renders (xp, dailyGoalMinutes, createdAt).
 */
export async function GET(req: Request) {
  const session = await getSessionUser(req);
  if (!session) return json({ user: null }, 200);

  const user = await db.user.findUnique({
    where: { id: session.id },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      mustChangePassword: true,
      status: true,
      xp: true,
      dailyGoalMinutes: true,
      createdAt: true,
    },
  });
  if (!user || user.status === "suspended") return json({ user: null }, 200);
  return json({ user });
}
