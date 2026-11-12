/**
 * Role-based access control for the CMS.
 *
 * Hierarchy: student < editor < teacher < admin.
 *   student — learner app only; every CMS admin route rejects them.
 *   editor  — author content (draft/review), upload media, export.
 *   teacher — everything an editor can, plus pedagogical review (approve).
 *   admin   — publish/unpublish, manage users, import content, everything.
 */

import type { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import type { CmsRole } from "@/data/cms/types";

export type StaffSession = {
  id: string;
  email: string;
  name: string | null;
  role: CmsRole;
};

const ROLE_RANK: Record<CmsRole, number> = {
  student: 0,
  editor: 1,
  teacher: 2,
  admin: 3,
};

export const CMS_ROLES: { value: CmsRole; label: string; description: string }[] = [
  { value: "student", label: "Student", description: "Learner access only" },
  { value: "editor", label: "Content editor", description: "Author and edit content, upload media" },
  { value: "teacher", label: "Teacher", description: "Review and approve content" },
  { value: "admin", label: "Administrator", description: "Publish, manage users, import/export" },
];

export function isStaff(role: string | undefined | null): boolean {
  return role === "editor" || role === "teacher" || role === "admin";
}

export function roleAtLeast(role: string | undefined | null, min: CmsRole): boolean {
  const r = (role ?? "student") as CmsRole;
  return (ROLE_RANK[r] ?? 0) >= ROLE_RANK[min];
}

export const can = {
  viewDashboard: (role: string) => isStaff(role),
  editContent: (role: string) => roleAtLeast(role, "editor"),
  approveContent: (role: string) => roleAtLeast(role, "teacher"),
  publishContent: (role: string) => roleAtLeast(role, "admin"),
  manageUsers: (role: string) => role === "admin",
  importContent: (role: string) => role === "admin",
  exportContent: (role: string) => isStaff(role),
};

/**
 * Resolve the current session and enforce a minimum staff role.
 * Returns either the staff user or an error response the route should return.
 */
export async function requireStaff(
  req: Request | NextRequest,
  min: CmsRole = "editor",
): Promise<{ user: StaffSession; error: null } | { user: null; error: Response }> {
  const user = await getSessionUser(req);
  if (!user) {
    return {
      user: null,
      error: Response.json({ error: "Please log in." }, { status: 401 }),
    };
  }
  if (!roleAtLeast(user.role, min)) {
    return {
      user: null,
      error: Response.json(
        { error: "You do not have permission to do this." },
        { status: 403 },
      ),
    };
  }
  return {
    user: { id: user.id, email: user.email, name: user.name, role: user.role as CmsRole },
    error: null,
  };
}
