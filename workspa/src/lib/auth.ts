/**
 * Custom authentication: scrypt password hashing + opaque session tokens
 * stored in the database and sent as an httpOnly cookie.
 *
 * Route handlers read the session from the raw Request cookie header (rather
 * than next/headers) so they remain pure, testable functions.
 */

import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db";

export const SESSION_COOKIE = "talksy_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days
const SCRYPT_KEYLEN = 64;

// ---------------------------------------------------------------------------
// Passwords
// ---------------------------------------------------------------------------

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, SCRYPT_KEYLEN).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, SCRYPT_KEYLEN);
  const expected = Buffer.from(hash, "hex");
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
}

// ---------------------------------------------------------------------------
// Sessions
// ---------------------------------------------------------------------------

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
  /** RBAC role: student | editor | teacher | admin. */
  role: string;
  /** active | suspended — suspended sessions are rejected here. */
  status: string;
}

export async function createSession(userId: string): Promise<{
  token: string;
  expiresAt: Date;
}> {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await db.session.create({ data: { token, userId, expiresAt } });
  return { token, expiresAt };
}

/** Parse the session cookie from a raw Request and resolve the user. */
export async function getSessionUser(
  req: Request,
): Promise<SessionUser | null> {
  const cookieHeader =
    req.headers.get("cookie") ?? (req as NextRequest).cookies?.toString() ?? "";
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`));
  if (!match) return null;
  const token = match.slice(SESSION_COOKIE.length + 1);
  if (!token) return null;

  const session = await db.session.findUnique({
    include: { user: true },
    where: { token },
  });
  if (!session) return null;
  if (session.expiresAt.getTime() < Date.now()) {
    await db.session.delete({ where: { id: session.id } }).catch(() => undefined);
    return null;
  }
  // Suspended accounts are treated as logged out everywhere, immediately.
  if (session.user.status !== "active") {
    await db.session.deleteMany({ where: { userId: session.user.id } }).catch(() => undefined);
    return null;
  }
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
    role: session.user.role,
    status: session.user.status,
  };
}

export async function destroySession(token: string): Promise<void> {
  await db.session.deleteMany({ where: { token } });
}

/** Build the Set-Cookie header value for a new session. */
export function buildSessionCookie(token: string, expiresAt: Date): string {
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Expires=${expiresAt.toUTCString()}`;
}

/** Build the Set-Cookie header value that clears the session. */
export function buildClearCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
