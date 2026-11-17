import { z } from "zod";
import { db } from "@/lib/db";
import { ok, fail, parseBody } from "@/lib/api";

export const runtime = "nodejs";

/**
 * POST /api/contact — the public contact form.
 *
 * Stores the message in the ContactMessage table (the official contact
 * channel; see prisma/schema.prisma). No account required. A small
 * in-memory rate limit keeps casual abuse in check — this is a dev-scale
 * guard, not a substitute for edge-level protection in production.
 */

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "That name is too long."),
  email: z.string().trim().toLowerCase().email("Please enter a valid email address."),
  topic: z.enum(["general", "bug", "content", "partnership", "other"]),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters so we can help properly.")
    .max(4000, "That message is too long (4000 characters max)."),
});

/** Max 5 submissions per IP per hour (best-effort, in-process). */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const submissions = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  // Opportunistic cleanup so the map cannot grow without bound.
  if (submissions.size > 1000) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) submissions.delete(key);
    }
  }
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return fail("Too many messages from this address — please try again later.", 429);
  }

  const parsed = await parseBody(req, contactSchema);
  if (!parsed.ok) return parsed.response;

  await db.contactMessage.create({ data: parsed.data });
  return ok({ received: true }, { status: 201 });
}
