import { db } from "@/lib/db";
import {
  buildSessionCookie,
  createSession,
  verifyPassword,
} from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";
import { ensureDemoUser, DEMO_EMAIL, DEMO_PASSWORD } from "@/lib/demo-user";
import { ensureCmsSeed } from "@/lib/cms/seed";

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
    return jsonError("Incorrect email or password.", 401);
  }
  if (user.status !== "active") {
    return jsonError("This account is suspended. Please contact an administrator.", 403);
  }

  const { token, expiresAt } = await createSession(user.id);

  return new Response(
    JSON.stringify({
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
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
