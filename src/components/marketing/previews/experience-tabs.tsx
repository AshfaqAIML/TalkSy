"use client";

/**
 * Learning-experience showcase: three real screens of the app (lesson
 * player, practice centre, dashboard) in a browser frame, switchable.
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppFrame } from "./app-frame";
import { LessonPreview } from "./lesson-preview";
import { DashboardPreview } from "./dashboard-preview";
import { PracticePreview } from "./practice-preview";
import type { LessonPreview as LessonPreviewData } from "@/lib/marketing/preview-data";

export function ExperienceTabs({ lesson }: { lesson: LessonPreviewData }) {
  return (
    <Tabs defaultValue="lesson" className="w-full">
      <TabsList className="mx-auto mb-6 grid w-full max-w-md grid-cols-3">
        <TabsTrigger value="lesson">In a lesson</TabsTrigger>
        <TabsTrigger value="practice">Practice</TabsTrigger>
        <TabsTrigger value="dashboard">Progress</TabsTrigger>
      </TabsList>
      <TabsContent value="lesson" className="mt-0">
        <AppFrame url="/app#/lesson/a1-1-1" label="TalkSy lesson player preview">
          <LessonPreview lesson={lesson} />
        </AppFrame>
      </TabsContent>
      <TabsContent value="practice" className="mt-0">
        <AppFrame url="/app#/practice" label="TalkSy practice centre preview">
          <PracticePreview />
        </AppFrame>
      </TabsContent>
      <TabsContent value="dashboard" className="mt-0">
        <AppFrame url="/app#/dashboard" label="TalkSy dashboard preview">
          <DashboardPreview />
        </AppFrame>
      </TabsContent>
    </Tabs>
  );
}
