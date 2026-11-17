import { db } from "@/lib/db";
import { getSessionUser, verifyPassword, hashPassword, SESSION_COOKIE } from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";

/**
 * POST /api/auth/change-password — set a new password for the logged-in
 * account (the first-login gate for seeded staff, and general password
 * hygiene). Requires the current password; other sessions of the account
 * are revoked, the current session survives.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ currentPassword?: unknown; newPassword?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");

  const currentPassword =
    typeof body.currentPassword === "string" ? body.currentPassword : "";
  const newPassword = typeof body.newPassword === "string" ? body.newPassword : "";

  if (newPassword.length < 8) {
    return jsonError("New password must be at least 8 characters long.", 422);
  }
  if (newPassword === currentPassword) {
    return jsonError("Your new password must be different from your current password.", 422);
  }

  const row = await db.user.findUnique({ where: { id: user.id } });
  if (!row || !verifyPassword(currentPassword, row.passwordHash)) {
    return jsonError("Your current password is incorrect.", 401);
  }

  await db.user.update({
    where: { id: user.id },
    data: { passwordHash: hashPassword(newPassword), mustChangePassword: false },
  });

  // Revoke every OTHER session (the current one keeps its cookie).
  const currentToken = req.headers
    .get("cookie")
    ?.match(new RegExp(`(?:^|;\\s*)${SESSION_COOKIE}=([^;]+)`))?.[1];
  if (currentToken) {
    await db.session.deleteMany({
      where: { userId: user.id, token: { not: currentToken } },
    });
  } else {
    await db.session.deleteMany({ where: { userId: user.id } });
  }

  return Response.json({ message: "Password updated." });
}
