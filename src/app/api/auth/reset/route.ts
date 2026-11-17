import { jsonError, readJson } from "@/lib/api-helpers";
import {
  bumpThrottle,
  getClientIp,
  getThrottle,
  throttledResponse,
} from "@/lib/auth-throttle";
import {
  applyPasswordReset,
  isValidResetTokenShape,
  resolveResetToken,
} from "@/lib/password-reset";
import { verifyPassword } from "@/lib/auth";

/**
 * POST /api/auth/reset — consume a single-use reset token and set a new
 * password (S2). Invalid tokens count against the per-IP throttle; a
 * successful reset revokes every session of the account.
 */
export async function POST(req: Request) {
  const body = await readJson<{ token?: unknown; newPassword?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");

  // S1: per-IP cap on reset submissions — invalid tokens count too.
  const ip = getClientIp(req);
  const ipKey = `reset:ip:${ip}`;
  const ipState = await getThrottle(ipKey);
  if (ipState.blocked) return throttledResponse(ipState.retryAfterSeconds);
  await bumpThrottle(ipKey, { max: 10, windowMs: 15 * 60_000, baseLockMs: 15 * 60_000, maxLockMs: 24 * 60 * 60_000 });

  const newPassword = typeof body.newPassword === "string" ? body.newPassword : "";
  if (newPassword.length < 8) {
    return jsonError("Password must be at least 8 characters long.", 422);
  }
  if (!isValidResetTokenShape(body.token)) {
    return jsonError("This reset link is invalid or has expired.", 400);
  }

  // Reject "new" passwords identical to the current one.
  const target = await resolveResetToken(body.token);
  if (target && verifyPassword(newPassword, target.user.passwordHash)) {
    return jsonError("Your new password must be different from your current password.", 422);
  }

  const applied = await applyPasswordReset(body.token, newPassword);
  if (!applied) {
    return jsonError("This reset link is invalid or has expired.", 400);
  }

  return Response.json({
    message: "Password updated. You can now log in with your new password.",
  });
}
