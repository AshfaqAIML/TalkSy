"use client";

/**
 * Badges: status semantics, exercise-phase identity and content-governance
 * markers. Colour never carries meaning alone — every badge pairs its hue
 * with a label (and icon where space allows).
 */

import {
  BookOpen,
  ClipboardCheck,
  Compass,
  Footprints,
  Headphones,
  Mic,
  PenLine,
} from "lucide-react";
import { PHASES, type PhaseKey } from "@/lib/ds/tokens";
import { cn } from "@/lib/utils";

const statusTones = {
  success: { chip: "bg-grove-100 text-grove-900 dark:bg-grove-600/15 dark:text-grove-700", dot: "bg-grove-600" },
  warning: { chip: "bg-sun-100 text-sun-700 dark:bg-sun-500/15 dark:text-sun-700", dot: "bg-sun-500" },
  danger: { chip: "bg-clay-100 text-clay-700 dark:bg-clay-500/15 dark:text-clay-700", dot: "bg-clay-600" },
  neutral: { chip: "bg-sand-200 text-ink-600", dot: "bg-ink-400" },
  brand: { chip: "bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800", dot: "bg-brand-600" },
} as const;

export type BadgeTone = keyof typeof statusTones;

export function StatusBadge({
  tone = "neutral",
  dot = true,
  children,
  className,
}: {
  tone?: BadgeTone;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const t = statusTones[tone];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-caption font-semibold",
        t.chip,
        className
      )}
    >
      {dot && <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", t.dot)} />}
      {children}
    </span>
  );
}

const phaseIcons: Record<PhaseKey, React.ReactNode> = {
  guided: <Compass className="h-3 w-3" aria-hidden="true" />,
  independent: <Footprints className="h-3 w-3" aria-hidden="true" />,
  speaking: <Mic className="h-3 w-3" aria-hidden="true" />,
  listening: <Headphones className="h-3 w-3" aria-hidden="true" />,
  reading: <BookOpen className="h-3 w-3" aria-hidden="true" />,
  writing: <PenLine className="h-3 w-3" aria-hidden="true" />,
  assessment: <ClipboardCheck className="h-3 w-3" aria-hidden="true" />,
};

/**
 * Phase identity chip — each of the seven exercise phases owns a hue from
 * the phase palette (docs/DESIGN_SYSTEM.md → Phase palette).
 */
export function PhaseBadge({ phase, className }: { phase: PhaseKey; className?: string }) {
  const p = PHASES[phase];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-caption font-semibold",
        className
      )}
      style={{
        backgroundColor: `color-mix(in srgb, var(--phase-${phase}) 12%, transparent)`,
        color: `var(--phase-${phase})`,
      }}
    >
      {phaseIcons[phase]}
      {p.label}
    </span>
  );
}

/**
 * Governance badge for AI-assisted draft content. Wording is a product
 * rule: always exactly "Draft content".
 */
export function DraftBadge({ className }: { className?: string }) {
  return (
    <StatusBadge tone="warning" className={className}>
      Draft content
    </StatusBadge>
  );
}

/** CEFR level chip — the rounded square used on cards and rails. */
export function LevelChip({
  code,
  size = "md",
  className,
}: {
  code: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "h-7 w-7 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" } as const;
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground",
        sizes[size],
        className
      )}
    >
      {code}
    </span>
  );
}
