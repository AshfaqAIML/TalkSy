/**
 * S2 — token-based password reset.
 *
 * Flow: POST /api/auth/forgot creates a single-use token (24 random bytes,
 * 48 hex chars) valid for 30 minutes. Only sha256(token) is stored; the raw
 * token exists solely inside the reset link that the delivery layer hands
 * to the user. POST /api/auth/reset consumes it: single use, and a
 * successful reset revokes every session of that account.
 *
 * Delivery layer: this project has no email infrastructure, so the default
 * (and currently only) transport is "log" — the reset link is written to
 * the server log and an operator hands it to the requester
 * (docs/DEPLOYMENT.md). PASSWORD_RESET_DELIVERY selects the transport;
 * unimplemented values fall back to "log" with a warning rather than
 * pretending a message was sent.
 */

import { createHash, randomBytes } from "node:crypto";
import { db } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export const RESET_TOKEN_TTL_MS = 30 * 60_000;

const RESET_TOKEN_PATTERN = /^[0-9a-f]{48}$/;

export function isValidResetTokenShape(token: unknown): token is string {
  return typeof token === "string" && RESET_TOKEN_PATTERN.test(token);
}

function sha256Hex(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

// ---------------------------------------------------------------------------
// Delivery
// ---------------------------------------------------------------------------

export interface ResetDeliveryInput {
  email: string;
  link: string;
  expiresAt: Date;
}

type ResetDelivery = (input: ResetDeliveryInput) => Promise<void> | void;

const deliveries: Record<string, ResetDelivery> = {
  /** Write the reset link to the server log for operator hand-off. */
  log: async ({ email, link, expiresAt }) => {
    console.info(
      `[password-reset] link generated for ${email} — ${link} ` +
        `(valid until ${expiresAt.toISOString()})`,
    );
  },
};

function getDelivery(): ResetDelivery {
  const configured = (process.env.PASSWORD_RESET_DELIVERY ?? "log").trim();
  const delivery = deliveries[configured];
  if (!delivery) {
    console.warn(
      `[password-reset] unknown PASSWORD_RESET_DELIVERY "${configured}" — falling back to "log".`,
    );
    return deliveries.log;
  }
  return delivery;
}

// ---------------------------------------------------------------------------
// Token lifecycle
// ---------------------------------------------------------------------------

/**
 * Create a reset token for the account (if it exists). Returns the raw
 * token — the ONLY place it exists in plaintext — plus its expiry.
 */
export async function createResetToken(
  email: string,
): Promise<{ token: string; expiresAt: Date } | null> {
  const user = await db.user.findUnique({ where: { email } });
  if (!user) return null;
  const token = randomBytes(24).toString("hex");
  const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);
  await db.passwordResetToken.create({
    data: { userId: user.id, tokenHash: sha256Hex(token), expiresAt },
  });
  return { token, expiresAt };
}

/** Resolve a raw token to its user, enforcing shape + TTL + single use. */
export async function resolveResetToken(token: string) {
  if (!isValidResetTokenShape(token)) return null;
  const row = await db.passwordResetToken.findUnique({
    where: { tokenHash: sha256Hex(token) },
    include: { user: true },
  });
  if (!row) return null;
  if (row.usedAt) return null;
  if (row.expiresAt.getTime() < Date.now()) return null;
  return { user: row.user, tokenId: row.id };
}

/**
 * Consume the token and set the new password. Single use (the token row is
 * marked used even if the password update fails afterwards); every session
 * of the account is revoked, so the reset doubles as "log me out
 * everywhere". The first-login gate is cleared by definition.
 */
export async function applyPasswordReset(
  token: string,
  newPassword: string,
): Promise<boolean> {
  const resolved = await resolveResetToken(token);
  if (!resolved) return false;
  await db.passwordResetToken.update({
    where: { id: resolved.tokenId },
    data: { usedAt: new Date() },
  });
  await db.user.update({
    where: { id: resolved.user.id },
    data: {
      passwordHash: hashPassword(newPassword),
      mustChangePassword: false,
    },
  });
  await db.session.deleteMany({ where: { userId: resolved.user.id } });
  return true;
}

/** Build the user-facing reset link for the configured delivery transport. */
export function buildResetLink(baseUrl: string, token: string): string {
  return `${baseUrl.replace(/\/$/, "")}/#/reset/${token}`;
}

/** Deliver a reset link through the configured transport. */
export async function deliverResetLink(input: ResetDeliveryInput): Promise<void> {
  await getDelivery()(input);
}
