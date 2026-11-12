"use client";

/**
 * User management (admin only): search, role changes, account suspension,
 * basic progress monitoring. Privacy: password hashes are never exposed and
 * only aggregate progress figures are shown.
 */

import { useEffect, useState } from "react";
import { Ban, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cmsApi, type CmsAdminUserDetail } from "@/lib/client/api";
import type { CmsAdminUserDto, CmsRole } from "@/data/cms/types";

const ROLE_STYLE: Record<CmsRole, string> = {
  student: "bg-secondary text-secondary-foreground",
  editor: "bg-amber-600 text-white",
  teacher: "bg-orange-600 text-white",
  admin: "bg-destructive text-destructive-foreground",
};

export function UsersTab({ currentUserId }: { currentUserId: string }) {
  const [users, setUsers] = useState<CmsAdminUserDto[]>([]);
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState<CmsAdminUserDetail | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      const res = await cmsApi.users(search);
      if (active) {
        if (res.ok) setUsers(res.data.users);
        else toast.error(res.error);
      }
    })();
    return () => {
      active = false;
    };
  }, [search, reloadKey]);

  const reload = () => setReloadKey((k) => k + 1);

  const patchUser = async (id: string, body: { role?: string; status?: string }) => {
    const res = await cmsApi.updateUser(id, body);
    if (res.ok) {
      toast.success("Updated.");
      reload();
    } else toast.error(res.error);
  };

  const openDetail = async (id: string) => {
    const res = await cmsApi.userProgress(id);
    if (res.ok) setDetail(res.data);
    else toast.error(res.error);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Search className="size-4 text-muted-foreground" aria-hidden />
          <Input
            className="w-64"
            placeholder="Search by email or name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search users"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {users.length} users · password hashes are never shown
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {users.map((u) => (
          <Card key={u.id}>
            <CardContent className="flex flex-wrap items-center gap-3 p-3 sm:p-4">
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="truncate text-sm font-medium">{u.name ?? "—"}</span>
                <span className="truncate text-xs text-muted-foreground">{u.email}</span>
              </div>
              <Badge className={ROLE_STYLE[u.role]}>{u.role}</Badge>
              <Badge variant={u.status === "active" ? "outline" : "destructive"}>{u.status}</Badge>
              <span className="text-xs text-muted-foreground">
                {u.lessonsCompleted} lessons · {u.totalAttempts} answers
                {u.accuracy !== null ? ` · ${Math.round(u.accuracy * 100)}%` : ""}
                {u.lastActiveDay ? ` · active ${u.lastActiveDay}` : " · never active"}
              </span>
              <div className="ml-auto flex flex-wrap items-center gap-1.5">
                <Button variant="ghost" size="sm" onClick={() => void openDetail(u.id)}>
                  Progress
                </Button>
                <Select value={u.role} onValueChange={(v) => void patchUser(u.id, { role: v })}>
                  <SelectTrigger
                    className="h-8 w-32"
                    aria-label={`Role for ${u.email}`}
                    disabled={u.id === currentUserId}
                  >
                    <ShieldCheck className="mr-1 size-3.5" aria-hidden />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["student", "editor", "teacher", "admin"].map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {u.id === currentUserId ? (
                  <Badge variant="secondary">you</Badge>
                ) : u.status === "active" ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-destructive"
                    onClick={() => void patchUser(u.id, { status: "suspended" })}
                  >
                    <Ban className="size-3.5" /> Suspend
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-emerald-700"
                    onClick={() => void patchUser(u.id, { status: "active" })}
                  >
                    <CheckCircle2 className="size-3.5" /> Reactivate
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {detail ? (
        <Dialog open onOpenChange={(o) => (o ? null : setDetail(null))}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Progress — {detail.name ?? detail.email}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              <div>
                <p className="text-xl font-bold">{detail.lessonsCompleted}</p>
                <p className="text-xs text-muted-foreground">core lessons completed</p>
              </div>
              <div>
                <p className="text-xl font-bold">{detail.cmsLessonsCompleted}</p>
                <p className="text-xs text-muted-foreground">CMS lessons completed</p>
              </div>
              <div>
                <p className="text-xl font-bold">{detail.cmsEnrolments}</p>
                <p className="text-xs text-muted-foreground">course enrolments</p>
              </div>
              <div>
                <p className="text-xl font-bold">{detail.totalAttempts}</p>
                <p className="text-xs text-muted-foreground">graded answers</p>
              </div>
              <div>
                <p className="text-xl font-bold">
                  {detail.accuracy !== null ? `${Math.round(detail.accuracy * 100)}%` : "—"}
                </p>
                <p className="text-xs text-muted-foreground">accuracy</p>
              </div>
              <div>
                <p className="text-xl font-bold">{detail.streakDays}</p>
                <p className="text-xs text-muted-foreground">day streak</p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Recent activity
              </p>
              {detail.recentActivity.length === 0 ? (
                <p className="text-sm text-muted-foreground">No graded answers yet.</p>
              ) : (
                <ul className="flex max-h-48 flex-col gap-1 overflow-y-auto text-sm">
                  {detail.recentActivity.map((a, i) => (
                    <li key={i} className="flex items-center justify-between gap-2 rounded border px-2 py-1">
                      <span className="text-xs">
                        {a.type} · {a.skill}
                      </span>
                      <span className={a.isCorrect ? "text-xs text-emerald-700" : "text-xs text-destructive"}>
                        {a.isCorrect ? "correct" : "incorrect"} · {new Date(a.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}
