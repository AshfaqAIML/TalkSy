"use client";

/**
 * Icon + tint registry for the navigation system. Skill colours come from
 * the PROMPT 28 design tokens (--skill-*), so every surface agrees on what
 * "reading blue" or "speaking orange" looks like.
 */

import {
  Award,
  Blocks,
  BookOpen,
  Brain,
  Coffee,
  Compass,
  FileText,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  LibraryBig,
  LifeBuoy,
  Lightbulb,
  ListChecks,
  ListTodo,
  Map,
  MessageCircle,
  Mic,
  PenLine,
  Route,
  School,
  SpellCheck,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { NavSkill } from "@/lib/navigation";
import type { SearchCategory } from "@/lib/search/types";

export const SKILL_ICONS: Record<NavSkill, LucideIcon> = {
  reading: BookOpen,
  listening: Headphones,
  speaking: Mic,
  writing: PenLine,
  vocabulary: Brain,
  grammar: SpellCheck,
  general: Compass,
};

/** Optional per-item icon overrides (keyed by name in navigation.ts). */
export const NAV_ITEM_ICONS: Record<string, LucideIcon> = {
  sprout: Sprout,
  blocks: Blocks,
  school: School,
  award: Award,
  route: Route,
  library: LibraryBig,
  message: MessageCircle,
  lightbulb: Lightbulb,
  list: ListTodo,
  coffee: Coffee,
  sparkle: Sparkles,
};

export const SKILL_TINTS: Record<NavSkill, string> = {
  reading: "bg-skill-reading/10 text-skill-reading",
  listening: "bg-skill-listening/10 text-skill-listening",
  speaking: "bg-skill-speaking/10 text-skill-speaking",
  writing: "bg-skill-writing/10 text-skill-writing",
  vocabulary: "bg-skill-vocabulary/10 text-skill-vocabulary",
  grammar: "bg-skill-grammar/10 text-skill-grammar",
  general: "bg-primary/10 text-primary",
};

/** Small dot + label pairs, for explicit skill indicators in menus. */
export const SKILL_LABELS: Record<NavSkill, string> = {
  reading: "Reading",
  listening: "Listening",
  speaking: "Speaking",
  writing: "Writing",
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  general: "Guided",
};

/** Icon per top-level nav category (mobile headers, footer). */
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  learn: Route,
  grammar: SpellCheck,
  courses: LibraryBig,
  practice: Compass,
  "ai-tools": Sparkles,
  resources: LifeBuoy,
};

export const SEARCH_CATEGORY_ICONS: Record<SearchCategory, LucideIcon> = {
  Paths: Map,
  Lessons: BookOpen,
  Exercises: ListChecks,
  Grammar: SpellCheck,
  Vocabulary: Brain,
  Reading: BookOpen,
  Listening: Headphones,
  Speaking: Mic,
  Writing: PenLine,
  Courses: GraduationCap,
  "Exam prep": Award,
  "AI tools": Sparkles,
  Pages: FileText,
};

export const DASHBOARD_ICON = LayoutDashboard;
