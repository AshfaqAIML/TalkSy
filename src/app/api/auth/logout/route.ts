import { buildClearCookie, destroySession, SESSION_COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const cookieHeader = req.headers.get("cookie") ?? "";
  const match = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${SESSION_COOKIE}=`));
  if (match) {
    const token = match.slice(SESSION_COOKIE.length + 1);
    if (token) await destroySession(token);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json", "set-cookie": buildClearCookie() },
  });
}
