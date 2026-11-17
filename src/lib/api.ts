import { NextResponse } from "next/server";
import { ZodError, type ZodSchema } from "zod";
import { getSessionUser, type SessionUser } from "@/lib/auth";

/** Standard success envelope. */
export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ ok: true, data }, init);
}

/** Standard error envelope with a human-readable message. */
export function fail(message: string, status = 400, extra?: unknown) {
  return NextResponse.json(
    { ok: false, error: message, details: extra ?? null },
    { status }
  );
}

/** Parses and validates a JSON body against a zod schema; returns a typed result. */
export async function parseBody<T>(
  req: Request,
  schema: ZodSchema<T>
): Promise<{ ok: true; data: T } | { ok: false; response: NextResponse }> {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return { ok: false, response: fail("Invalid JSON body.", 400) };
  }
  try {
    return { ok: true, data: schema.parse(raw) };
  } catch (err) {
    if (err instanceof ZodError) {
      const first = err.issues[0];
      return {
        ok: false,
        response: fail(first?.message ?? "Invalid request.", 422),
      };
    }
    return { ok: false, response: fail("Invalid request.", 422) };
  }
}

/** Requires an authenticated session; returns the user or a 401 response. */
export async function requireUser(): Promise<
  { ok: true; user: SessionUser } | { ok: false; response: NextResponse }
> {
  const user = await getSessionUser();
  if (!user) {
    return { ok: false, response: fail("You must be signed in.", 401) };
  }
  return { ok: true, user };
}
