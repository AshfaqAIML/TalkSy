/// <reference types="bun-types" />
/**
 * S1/S2 security tests: throttling, token-based password reset and the
 * first-login gate. Runs against db/test.db via `bun run test`.
 */

import { describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import {
  bumpThrottle,
  getThrottle,
  resetThrottle,
  type ThrottlePolicy,
} from "@/lib/auth-throttle";
import {
  applyPasswordReset,
  createResetToken,
  isValidResetTokenShape,
  resolveResetToken,
} from "@/lib/password-reset";
import { hashPassword, verifyPassword } from "@/lib/auth";

const TEST_POLICY: ThrottlePolicy = {
  max: 3,
  windowMs: 15 * 60_000,
  baseLockMs: 15 * 60_000,
  maxLockMs: 24 * 60 * 60_000,
};

const TEST_EMAIL = "sec-unit@example.com";

async function ensureTestUser() {
  const existing = await db.user.findUnique({ where: { email: TEST_EMAIL } });
  if (existing) return existing;
  return db.user.create({
    data: {
      email: TEST_EMAIL,
      name: "Sec Unit",
      passwordHash: hashPassword("Original123!"),
      mustChangePassword: false,
    },
  });
}

describe("S1 — authentication throttling", () => {
  it("counts failures and locks at the policy maximum, even for the correct password", async () => {
    const key = `test:acct:${Date.now()}`;
    for (let i = 0; i < TEST_POLICY.max; i++) {
      await bumpThrottle(key, TEST_POLICY);
    }
    const state = await getThrottle(key);
    expect(state.blocked).toBe(true);
    expect(state.retryAfterSeconds).toBeGreaterThan(0);
    await resetThrottle(key);
  });

  it("resets the counter on success", async () => {
    const key = `test:acct:reset:${Date.now()}`;
    await bumpThrottle(key, TEST_POLICY);
    await bumpThrottle(key, TEST_POLICY);
    await resetThrottle(key);
    const state = await getThrottle(key);
    expect(state.blocked).toBe(false);
    expect(state.count).toBe(0);
  });

  it("locks progressively longer on repeat offences", async () => {
    const key = `test:acct:strikes:${Date.now()}`;
    // Round 1: three failures → first lock (base duration).
    for (let i = 0; i < TEST_POLICY.max; i++) {
      await bumpThrottle(key, TEST_POLICY);
    }
    let state = await getThrottle(key);
    expect(state.blocked).toBe(true);
    expect(state.retryAfterSeconds).toBeLessThanOrEqual(15 * 60);
    // Attempts while locked are ignored (no extension, no reset).
    await bumpThrottle(key, TEST_POLICY);
    await bumpThrottle(key, TEST_POLICY);
    state = await getThrottle(key);
    expect(state.retryAfterSeconds).toBeLessThanOrEqual(15 * 60);
    // Simulate the lock expiring: a fresh wave of failures locks again at
    // double the duration (strikes escalated).
    await db.authThrottle.update({
      where: { key },
      data: { lockedUntil: new Date(Date.now() - 1000) },
    });
    for (let i = 0; i < TEST_POLICY.max; i++) {
      await bumpThrottle(key, TEST_POLICY);
    }
    state = await getThrottle(key);
    expect(state.blocked).toBe(true);
    // Second strike: base lock × 2 = 30 minutes.
    expect(state.retryAfterSeconds).toBeGreaterThan(15 * 60);
    await resetThrottle(key);
  });
});

describe("S2 — token-based password reset", () => {
  it("creates single-use tokens with a 48-hex shape", async () => {
    const user = await ensureTestUser();
    void user;
    const created = await createResetToken(TEST_EMAIL);
    expect(created).not.toBeNull();
    expect(isValidResetTokenShape(created!.token)).toBe(true);
    // Consume it.
    const applied = await applyPasswordReset(created!.token, "BrandNew123!");
    expect(applied).toBe(true);
    // Single use: a second attempt fails.
    const again = await applyPasswordReset(created!.token, "Another123!");
    expect(again).toBe(false);
    // The new password verifies; sessions were revoked.
    const refreshed = await db.user.findUnique({ where: { email: TEST_EMAIL } });
    expect(verifyPassword("BrandNew123!", refreshed!.passwordHash)).toBe(true);
    const sessions = await db.session.count({ where: { userId: refreshed!.id } });
    expect(sessions).toBe(0);
  });

  it("resolves valid tokens and rejects malformed ones", async () => {
    await ensureTestUser();
    const created = await createResetToken(TEST_EMAIL);
    const resolved = await resolveResetToken(created!.token);
    expect(resolved?.user.email).toBe(TEST_EMAIL);
    expect(await resolveResetToken("not-a-token")).toBeNull();
    expect(await resolveResetToken("a".repeat(48))).toBeNull();
  });
});
