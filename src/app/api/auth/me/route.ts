import { getSessionUser } from "@/lib/auth";
import { json } from "@/lib/api-helpers";

export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return json({ user: null }, 200);
  return json({ user });
}
