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
  Library,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppStore } from "@/lib/client/store";
import { DashboardTab } from "./DashboardTab";
import { CurriculumTab } from "./CurriculumTab";
import { QuestionsTab } from "./QuestionsTab";
import { MediaTab } from "./MediaTab";
import { UsersTab } from "./UsersTab";
import { PortabilityTab } from "./PortabilityTab";
import { LessonEditor } from "./LessonEditor";

export function AdminView() {
  const user = useAppStore((s) => s.user);
  const role = user?.role ?? "student";
  const [tab, setTab] = useState("dashboard");
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  if (editingLessonId) {
    return <LessonEditor lessonId={editingLessonId} onBack={() => setEditingLessonId(null)} />;
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
        <TabsList className="flex-wrap">
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
