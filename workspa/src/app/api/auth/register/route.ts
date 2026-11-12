import { db } from "@/lib/db";
import {
  buildSessionCookie,
  createSession,
  hashPassword,
} from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";

interface RegisterBody {
  email?: unknown;
  name?: unknown;
  password?: unknown;
}

export async function POST(req: Request) {
  const body = await readJson<RegisterBody>(req);
  if (!body) return jsonError("Invalid request body.");

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.", 422);
  }
  if (password.length < 8) {
    return jsonError("Password must be at least 8 characters long.", 422);
  }
  if (name.length < 2) {
    return jsonError("Please enter your name (at least 2 characters).", 422);
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return jsonError("An account with this email already exists. Try logging in.", 409);
  }

  const user = await db.user.create({
    data: { email, name, passwordHash: hashPassword(password) },
  });
  const { token, expiresAt } = await createSession(user.id);

  return new Response(
    JSON.stringify({
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    }),
    {
      status: 201,
      headers: {
        "content-type": "application/json",
        "set-cookie": buildSessionCookie(token, expiresAt),
      },
    },
  );
}
