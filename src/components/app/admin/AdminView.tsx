"use client";

/**
 * Admin CMS hub. Role-gated: students never see this view (route guard in
 * page.tsx + server-side checks on every API call).
 *
 * Tabs: Dashboard · Curriculum · Question bank · Media · Users (admin) ·
 * Import/Export (admin) — editors and teachers see what their role allows.
 */

import { useState } from "react";
import {
  BarChart3,
  BookOpen,
  Database,
  FileQuestion,
  FolderTree,
  GraduationCap,
  Library,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { CmsRole } from "@/data/cms/types";
import { DashboardTab } from "./DashboardTab";
import { CurriculumTab } from "./CurriculumTab";
import { QuestionsTab } from "./QuestionsTab";
import { MediaTab } from "./MediaTab";
import { UsersTab } from "./UsersTab";
import { PortabilityTab } from "./PortabilityTab";
import { ExamBlueprintsTab } from "./ExamBlueprintsTab";
import { ExamContentTab } from "./ExamContentTab";
import { ExamAnalyticsTab } from "./ExamAnalyticsTab";
import { GovernanceTab } from "./GovernanceTab";
import { AiUsageTab } from "./AiUsageTab";
import { VocabularyTab } from "./VocabularyTab";
import { LessonEditor } from "./LessonEditor";

export function AdminView() {
  const user = useAppStore((s) => s.user);
  const setUser = useAppStore((s) => s.setUser);
  const role = (user?.role ?? "student") as CmsRole;
  const [tab, setTab] = useState("dashboard");
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  // First-login gate: staff accounts still using a public default password
  // must choose their own before any CMS feature is available. Every CMS
  // API call also enforces this server-side (src/lib/cms/rbac.ts).
  if (editingLessonId) {
    return <LessonEditor lessonId={editingLessonId} onBack={() => setEditingLessonId(null)} />;
  }

  if (user?.mustChangePassword) {
    return <FirstLoginGate />;
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <Database className="size-6 text-primary" aria-hidden />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Content management</h1>
          <p className="text-sm text-muted-foreground">
            Manage courses, lessons, questions and learners — no code changes needed.
          </p>
        </div>
        <Badge variant="secondary" className="ml-auto">
          signed in as {role}
        </Badge>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="h-auto flex-wrap justify-start gap-1 [&>[data-slot=tabs-trigger]]:flex-none">
          <TabsTrigger value="dashboard" className="gap-1.5">
            <BarChart3 className="size-4" /> Dashboard
          </TabsTrigger>
          <TabsTrigger value="curriculum" className="gap-1.5">
            <FolderTree className="size-4" /> Curriculum
          </TabsTrigger>
          <TabsTrigger value="questions" className="gap-1.5">
            <FileQuestion className="size-4" /> Question bank
          </TabsTrigger>
          <TabsTrigger value="media" className="gap-1.5">
            <Library className="size-4" /> Media
          </TabsTrigger>
          <TabsTrigger value="exams" className="gap-1.5">
            <GraduationCap className="size-4" /> Exam blueprints
          </TabsTrigger>
          <TabsTrigger value="exam-content" className="gap-1.5">
            <FileQuestion className="size-4" /> Exam content
          </TabsTrigger>
          <TabsTrigger value="exam-analytics" className="gap-1.5">
            <BarChart3 className="size-4" /> Exam analytics
          </TabsTrigger>
          <TabsTrigger value="governance" className="gap-1.5">
            <ShieldCheck className="size-4" /> Governance
          </TabsTrigger>
          <TabsTrigger value="ai-usage" className="gap-1.5">
            <Sparkles className="size-4" /> AI usage
          </TabsTrigger>
          <TabsTrigger value="vocabulary" className="gap-1.5">
            <Library className="size-4" /> Vocabulary
          </TabsTrigger>
          {role === "admin" ? (
            <TabsTrigger value="users" className="gap-1.5">
              <Users className="size-4" /> Users
            </TabsTrigger>
          ) : null}
          {role === "admin" ? (
            <TabsTrigger value="portability" className="gap-1.5">
              <BookOpen className="size-4" /> Import / Export
            </TabsTrigger>
          ) : null}
        </TabsList>
        <TabsContent value="dashboard" className="mt-4">
          <DashboardTab />
        </TabsContent>
        <TabsContent value="curriculum" className="mt-4">
          <CurriculumTab onOpenLesson={setEditingLessonId} />
        </TabsContent>
        <TabsContent value="questions" className="mt-4">
          <QuestionsTab />
        </TabsContent>
        <TabsContent value="media" className="mt-4">
          <MediaTab />
        </TabsContent>
        <TabsContent value="exams" className="mt-4">
          <ExamBlueprintsTab role={role} />
        </TabsContent>
        <TabsContent value="exam-content" className="mt-4">
          <ExamContentTab role={role} />
        </TabsContent>
        <TabsContent value="exam-analytics" className="mt-4">
          <ExamAnalyticsTab />
        </TabsContent>
        <TabsContent value="governance" className="mt-4">
          <GovernanceTab role={role} />
        </TabsContent>
        <TabsContent value="ai-usage" className="mt-4">
          <AiUsageTab />
        </TabsContent>
        <TabsContent value="vocabulary" className="mt-4">
          <VocabularyTab />
        </TabsContent>
        {role === "admin" ? (
          <TabsContent value="users" className="mt-4">
            <UsersTab currentUserId={user?.id ?? ""} />
          </TabsContent>
        ) : null}
        {role === "admin" ? (
          <TabsContent value="portability" className="mt-4">
            <PortabilityTab />
          </TabsContent>
        ) : null}
      </Tabs>
    </div>
  );
}

/** Forced password change shown to staff still on a public default password. */
function FirstLoginGate() {
  const setUser = useAppStore((s) => s.setUser);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await api.changePassword({ currentPassword, newPassword });
    setLoading(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success("Password updated — welcome aboard.");
    // Refresh the session user so the gate clears.
    const me = await api.me();
    if (me.ok) setUser(me.data.user);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-16">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Choose your own password</CardTitle>
          <CardDescription>
            This staff account was created with a public default password. For
            security, pick your own before using the content tools — every CMS
            action stays locked until then.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="gate-current">Current (default) password</Label>
              <Input
                id="gate-current"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="gate-new">New password</Label>
              <Input
                id="gate-new"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                placeholder="At least 8 characters"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving…" : "Save new password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
