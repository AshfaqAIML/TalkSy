import { z } from "zod";
import { db } from "@/lib/db";
import { ok, fail, parseBody, requireUser } from "@/lib/api";
import { hashPassword, verifyPassword } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const updateSchema = z.object({
  name: z.string().trim().min(2, "Name needs at least 2 characters.").max(60).optional(),
  dailyGoalMinutes: z
    .number()
    .int("Daily goal must be a whole number.")
    .min(5, "Minimum daily goal is 5 minutes.")
    .max(60, "Maximum daily goal is 60 minutes.")
    .optional(),
});

/** PATCH /api/profile — update display name and/or daily goal. */
export async function PATCH(req: Request) {
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

  const parsed = await parseBody(req, updateSchema);
  if (!parsed.ok) return parsed.response;

  const user = await db.user.update({
    where: { id: auth.user.id },
    data: parsed.data,
    select: {
      id: true,
      name: true,
      email: true,
      dailyGoalMinutes: true,
      xp: true,
      createdAt: true,
    },
  });
  return ok({ user });
}

const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Please enter your current password."),
  newPassword: z.string().min(8, "The new password needs at least 8 characters.").max(128),
});

/** POST /api/profile — change password (requires current password). */
export async function POST(req: Request) {
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

  const parsed = await parseBody(req, passwordSchema);
  if (!parsed.ok) return parsed.response;

  const user = await db.user.findUnique({ where: { id: auth.user.id } });
  if (!user) return fail("Account not found.", 404);

  const valid = await verifyPassword(parsed.data.currentPassword, user.passwordHash);
  if (!valid) {
    return fail("Your current password is incorrect.", 401);
  }

  const passwordHash = await hashPassword(parsed.data.newPassword);
  await db.user.update({ where: { id: user.id }, data: { passwordHash } });
  // Invalidate all other sessions for safety.
  await db.session.deleteMany({ where: { userId: user.id } });
  return ok({ passwordChanged: true });
}

const deleteSchema = z.object({
  password: z.string().min(1, "Please enter your password to confirm deletion."),
});

/** DELETE /api/profile — permanently delete the account and all progress. */
export async function DELETE(req: Request) {
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

  const parsed = await parseBody(req, deleteSchema);
  if (!parsed.ok) return parsed.response;

  const user = await db.user.findUnique({ where: { id: auth.user.id } });
  if (!user) return fail("Account not found.", 404);

  const valid = await verifyPassword(parsed.data.password, user.passwordHash);
  if (!valid) {
    return fail("Incorrect password. Account not deleted.", 401);
  }

  // Cascade deletes sessions, completions, attempts, vocabulary, activity.
  await db.user.delete({ where: { id: user.id } });
  return ok({ deleted: true });
}
