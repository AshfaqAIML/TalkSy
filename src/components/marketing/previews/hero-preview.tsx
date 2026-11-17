"use client";

/**
 * Hero product preview: the interactive lesson frame plus two floating
 * UI chips (streak, word strength) that echo the real dashboard. The
 * chips show illustrative states of real product features — they are
 * product UI, not claims about learners.
 */

import { motion, MotionConfig } from "framer-motion";
import { Flame, Volume2 } from "lucide-react";
import { AppFrame } from "./app-frame";
import { LessonPreview } from "./lesson-preview";
import type { LessonPreview as LessonPreviewData } from "@/lib/marketing/preview-data";

export function HeroPreview({ lesson }: { lesson: LessonPreviewData }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <AppFrame url="/app#/lesson/a1-1-1" label="TalkSy lesson player — try the sentence builder">
            <LessonPreview lesson={lesson} />
          </AppFrame>
        </motion.div>

        {/* Floating chip: streak */}
        <motion.div
          aria-hidden="true"
          className="absolute -right-6 -top-8 hidden items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-lg lg:flex"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-100 text-sun-700 dark:bg-sun-500/15">
            <Flame className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-body-sm font-bold text-ink-900">6-day streak</span>
            <span className="block text-caption text-ink-500">real practice, server-counted</span>
          </span>
        </motion.div>

        {/* Floating chip: vocabulary strength */}
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-8 -left-7 hidden items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-lg lg:flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-800 dark:bg-brand-600/20">
            <Volume2 className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-body-sm font-bold text-ink-900">
              hello — strength 4/5
            </span>
            <span className="block text-caption text-ink-500">
              due for review <span className="tabular-nums">tomorrow</span>
            </span>
          </span>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
