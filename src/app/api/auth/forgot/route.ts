import { jsonError, readJson } from "@/lib/api-helpers";
import {
  bumpThrottle,
  getClientIp,
  getThrottle,
  throttledResponse,
} from "@/lib/auth-throttle";
import {
  buildResetLink,
  createResetToken,
  deliverResetLink,
} from "@/lib/password-reset";

/**
 * POST /api/auth/forgot — request a password reset link (S2).
 *
 * Always answers with the same generic message whether or not the account
 * exists (no account enumeration). The link itself is delivered through
 * the configured transport (server log by default — no email
 * infrastructure in this project; see docs/DEPLOYMENT.md).
 */
export async function POST(req: Request) {
  const body = await readJson<{ email?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.", 422);
  }

  // S1: per-IP cap on reset requests (10 / 15 min).
  const ip = getClientIp(req);
  const ipKey = `forgot:ip:${ip}`;
  const ipState = await getThrottle(ipKey);
  if (ipState.blocked) return throttledResponse(ipState.retryAfterSeconds);
  await bumpThrottle(ipKey, { max: 10, windowMs: 15 * 60_000, baseLockMs: 15 * 60_000, maxLockMs: 24 * 60 * 60_000 });

  const created = await createResetToken(email);
  if (created) {
    const origin = req.headers.get("origin") ?? new URL(req.url).origin;
    const link = buildResetLink(origin, created.token);
    await deliverResetLink({ email, link, expiresAt: created.expiresAt });
  }

  return Response.json({
    message:
      "If an account exists for this email, a password reset link has been created. " +
      "In this deployment reset links are delivered through the server log — please contact your administrator.",
  });
}
