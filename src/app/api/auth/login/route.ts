import { db } from "@/lib/db";
import {
  buildSessionCookie,
  createSession,
  verifyPassword,
} from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";
import { ensureDemoUser, DEMO_EMAIL, DEMO_PASSWORD } from "@/lib/demo-user";
import { ensureCmsSeed } from "@/lib/cms/seed";
import {
  bumpThrottle,
  getClientIp,
  getThrottle,
  resetThrottle,
  throttledResponse,
} from "@/lib/auth-throttle";

interface LoginBody {
  email?: unknown;
  password?: unknown;
}

export async function POST(req: Request) {
  const body = await readJson<LoginBody>(req);
  if (!body) return jsonError("Invalid request body.");

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return jsonError("Email and password are required.", 422);
  }

  // S1: per-account lock (5 failures / 15 min) with a secondary per-IP
  // guard across accounts (30 / 15 min). Checked before any DB user work.
  const ip = getClientIp(req);
  const acctKey = `login:acct:${email}`;
  const ipKey = `login:ip:${ip}`;
  const [acctState, ipState] = await Promise.all([getThrottle(acctKey), getThrottle(ipKey)]);
  if (acctState.blocked) return throttledResponse(acctState.retryAfterSeconds);
  if (ipState.blocked) return throttledResponse(ipState.retryAfterSeconds);

  let user = await db.user.findUnique({ where: { email } });

  // Self-healing demo account: the advertised demo login must always work,
  // even after a database reset recreated the tables empty.
  if (!user && email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    user = await ensureDemoUser();
  }

  // Staff accounts and the starter course are (re)created on demand so the
  // CMS survives database resets too.
  await ensureCmsSeed().catch(() => undefined);

  if (!user || !verifyPassword(password, user.passwordHash)) {
    // Count the failure on both keys; a correct password inside a locked
    // window is still rejected above.
    await bumpThrottle(acctKey, { max: 5, windowMs: 15 * 60_000, baseLockMs: 15 * 60_000, maxLockMs: 24 * 60 * 60_000 });
    await bumpThrottle(ipKey, { max: 30, windowMs: 15 * 60_000, baseLockMs: 15 * 60_000, maxLockMs: 24 * 60 * 60_000 });
    return jsonError("Incorrect email or password.", 401);
  }
  if (user.status !== "active") {
    return jsonError("This account is suspended. Please contact an administrator.", 403);
  }

  // Success clears the account's failure counter (the IP guard keeps its
  // count — it protects against distributed guessing, not this user).
  await resetThrottle(acctKey);

  const { token, expiresAt } = await createSession(user.id);

  return new Response(
    JSON.stringify({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        mustChangePassword: user.mustChangePassword,
        xp: user.xp,
        dailyGoalMinutes: user.dailyGoalMinutes,
        createdAt: user.createdAt,
      },
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "set-cookie": buildSessionCookie(token, expiresAt),
      },
    },
  );
}
