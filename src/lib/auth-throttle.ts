/**
 * S1 — authentication throttling (rate limiting).
 *
 * One counter row per namespaced key in the AuthThrottle table:
 *   login:acct:<email> — per failing account: 5 failures / 15 min lock
 *   login:ip:<ip>      — secondary per-IP guard across accounts: 30 / 15 min
 *   register:ip:<ip>   — registrations per IP (post-validation): 120 / 15 min
 *   forgot:ip:<ip>     — password-reset requests per IP: 10 / 15 min
 *   reset:ip:<ip>      — password-reset submissions per IP: 10 / 15 min
 *
 * When a key reaches its limit it locks for 15 minutes, doubling with every
 * repeat offence (30 min, 60 min …) and capped at 24 hours. Counters older
 * than 24 hours are pruned opportunistically.
 *
 * Blocked requests are answered with 429 and a Retry-After header.
 */

import { db } from "@/lib/db";

export interface ThrottlePolicy {
  /** Failures (or attempts) allowed inside the window before the key locks. */
  max: number;
  /** Window length. */
  windowMs: number;
  /** Base lock duration; doubles with every strike. */
  baseLockMs: number;
  /** Lock ceiling. */
  maxLockMs: number;
}

const MINUTE = 60_000;

/** Parse a positive integer env override, falling back to the default. */
function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

const POLICY_COMMON = {
  windowMs: 15 * MINUTE,
  baseLockMs: 15 * MINUTE,
  maxLockMs: 24 * 60 * MINUTE,
};

export const THROTTLE_POLICIES = {
  /** Per failing account on login. */
  account: { max: 5, ...POLICY_COMMON },
  /** Secondary per-IP protection on login (across accounts). */
  ip: { max: 30, ...POLICY_COMMON },
  /**
   * Registrations per IP (post-validation: 422s do not count). Registration
   * is not a credential-guessing surface, so the cap is deliberately loose:
   * a school behind NAT may legitimately register a whole class in one go,
   * while scripted floods (thousands per minute) still trip it. The limit can
   * be raised via AUTH_REGISTER_LIMIT (used by the test suite, which creates
   * far more than 120 accounts per run from a single IP).
   */
  register: {
    max: parsePositiveInt(process.env.AUTH_REGISTER_LIMIT, 120),
    ...POLICY_COMMON,
  },
  /** Password-reset requests per IP. */
  forgot: { max: 10, ...POLICY_COMMON },
  /** Password-reset submissions per IP. */
  reset: { max: 10, ...POLICY_COMMON },
} satisfies Record<string, ThrottlePolicy>;

export interface ThrottleState {
  count: number;
  blocked: boolean;
  retryAfterSeconds: number;
}

/** Client IP for throttling: proxy headers first, socket fallback. */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "127.0.0.1";
}

/** Read the current state of a throttle key. */
export async function getThrottle(key: string): Promise<ThrottleState> {
  await pruneOldCounters();
  const row = await db.authThrottle.findUnique({ where: { key } });
  if (!row) return { count: 0, blocked: false, retryAfterSeconds: 0 };
  if (row.lockedUntil && row.lockedUntil.getTime() > Date.now()) {
    return {
      count: row.count,
      blocked: true,
      retryAfterSeconds: Math.ceil((row.lockedUntil.getTime() - Date.now()) / 1000),
    };
  }
  const withinWindow = Date.now() - row.windowStart.getTime() < 15 * MINUTE;
  return { count: withinWindow ? row.count : 0, blocked: false, retryAfterSeconds: 0 };
}

/**
 * Record one more strike against a key. When the count inside the window
 * reaches the policy maximum, the key locks for baseLock × 2^strikes and
 * the strike counter increments (repeat offences lock progressively
 * longer). The failure count resets when a lock starts.
 */
export async function bumpThrottle(
  key: string,
  policy: ThrottlePolicy,
): Promise<ThrottleState> {
  const now = new Date();
  let row = await db.authThrottle.findUnique({ where: { key } });
  // While a key is locked, further attempts change nothing: the lock
  // keeps its original expiry (strikes only escalate after expiry + new
  // failures).
  if (row?.lockedUntil && row.lockedUntil.getTime() > now.getTime()) {
    return {
      count: row.count,
      blocked: true,
      retryAfterSeconds: Math.ceil((row.lockedUntil.getTime() - now.getTime()) / 1000),
    };
  }
  if (!row) {
    row = await db.authThrottle.create({
      data: { key, count: 1, strikes: 0, windowStart: now },
    });
  } else {
    const windowExpired =
      now.getTime() - row.windowStart.getTime() > policy.windowMs;
    const nextCount = windowExpired ? 1 : row.count + 1;
    const lockNow = nextCount >= policy.max;
    const lockMs = Math.min(
      policy.maxLockMs,
      policy.baseLockMs * Math.pow(2, row.strikes),
    );
    row = await db.authThrottle.update({
      where: { key },
      data: lockNow
        ? {
            count: 0,
            strikes: { increment: 1 },
            windowStart: now,
            lockedUntil: new Date(now.getTime() + lockMs),
          }
        : { count: nextCount, ...(windowExpired ? { windowStart: now } : {}) },
    });
  }
  if (row.lockedUntil && row.lockedUntil.getTime() > now.getTime()) {
    return {
      count: row.count,
      blocked: true,
      retryAfterSeconds: Math.ceil((row.lockedUntil.getTime() - now.getTime()) / 1000),
    };
  }
  return { count: row.count, blocked: false, retryAfterSeconds: 0 };
}

/** Clear a throttle key (called on successful login for the account key). */
export async function resetThrottle(key: string): Promise<void> {
  await db.authThrottle.deleteMany({ where: { key } });
}

/** Standard 429 response for a blocked key. */
export function throttledResponse(retryAfterSeconds: number): Response {
  return Response.json(
    {
      error:
        "Too many attempts. For security, this action is temporarily locked — " +
        `please try again in ${Math.max(1, Math.ceil(retryAfterSeconds / 60))} minute(s).`,
    },
    {
      status: 429,
      headers: { "retry-after": String(Math.max(1, retryAfterSeconds)) },
    },
  );
}

async function pruneOldCounters(): Promise<void> {
  const cutoff = new Date(Date.now() - 24 * 60 * MINUTE);
  await db.authThrottle.deleteMany({
    where: { updatedAt: { lt: cutoff }, lockedUntil: null },
  });
}
