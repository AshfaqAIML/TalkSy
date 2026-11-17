"use client";

/**
 * Progress indicators: ProgressBar (labelled, animated, toneable),
 * ProgressRing (dashboard goals, course cards) and StepDots (walkthrough
 * position). All expose proper role/aria so screen readers announce them.
 */

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ProgressTone = "brand" | "success" | "warning" | "danger" | "gold";

const toneTrack: Record<ProgressTone, string> = {
  brand: "bg-brand-100 dark:bg-brand-600/20",
  success: "bg-grove-100 dark:bg-grove-600/20",
  warning: "bg-sun-100 dark:bg-sun-500/20",
  danger: "bg-clay-100 dark:bg-clay-500/20",
  gold: "bg-sun-100 dark:bg-sun-500/20",
};
const toneFill: Record<ProgressTone, string> = {
  brand: "bg-primary",
  success: "bg-grove-600 dark:bg-grove-500",
  warning: "bg-sun-500",
  danger: "bg-clay-600 dark:bg-clay-500",
  gold: "bg-gold",
};

export function ProgressBar({
  value,
  max = 100,
  tone = "brand",
  size = "md",
  label,
  showValue = false,
  className,
}: {
  value: number;
  max?: number;
  tone?: ProgressTone;
  size?: "sm" | "md";
  label: string;
  showValue?: boolean;
  className?: string;
}) {
  const percent = Math.min(100, Math.max(0, Math.round((value / Math.max(1, max)) * 100)));
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className={cn("w-full overflow-hidden rounded-full", toneTrack[tone], size === "sm" ? "h-1.5" : "h-2.5")}
      >
        <div
          className={cn("h-full rounded-full transition-[width] duration-slow ease-out-quint motion-reduce:transition-none", toneFill[tone])}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showValue && (
        <span className="w-10 shrink-0 text-right text-caption font-semibold tabular-nums text-ink-600">
          {percent}%
        </span>
      )}
    </div>
  );
}

const ringSizes = { sm: 64, md: 88, lg: 120 } as const;
const ringStrokes = { sm: 6, md: 8, lg: 10 } as const;

export function ProgressRing({
  value,
  size = "md",
  tone = "brand",
  label,
  children,
  className,
}: {
  /** percentage 0–100 */
  value: number;
  size?: keyof typeof ringSizes;
  tone?: ProgressTone;
  label: string;
  /** optional centre content (defaults to the percentage) */
  children?: React.ReactNode;
  className?: string;
}) {
  const px = ringSizes[size];
  const stroke = ringStrokes[size];
  const r = (px - stroke) / 2;
  const c = 2 * Math.PI * r;
  const percent = Math.min(100, Math.max(0, value));
  const strokeClass = {
    brand: "stroke-primary",
    success: "stroke-grove-600 dark:stroke-grove-500",
    warning: "stroke-sun-500",
    danger: "stroke-clay-600 dark:stroke-clay-500",
    gold: "stroke-gold",
  }[tone];
  return (
    <div className={cn("relative inline-flex", className)} style={{ width: px, height: px }}>
      <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`} role="img" aria-label={`${label}: ${percent}%`}>
        <circle cx={px / 2} cy={px / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-sand-200" />
        <circle
          cx={px / 2}
          cy={px / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          className={cn(strokeClass, "transition-[stroke-dashoffset] duration-slower ease-out-quint motion-reduce:transition-none")}
          strokeDasharray={c}
          strokeDashoffset={c - (percent / 100) * c}
          transform={`rotate(-90 ${px / 2} ${px / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children ?? <span className="text-body-sm font-bold tabular-nums">{percent}%</span>}
      </div>
    </div>
  );
}

/** Step position dots — done steps fill, the active step pulses gently. */
export function StepDots({
  total,
  active,
  label,
  className,
}: {
  total: number;
  active: number;
  label: string;
  className?: string;
}) {
  return (
    <div role="status" aria-label={`${label}: step ${active + 1} of ${total}`} className={cn("flex items-center gap-1.5", className)}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={cn(
            "h-2 w-2 rounded-full transition-colors duration-base",
            i < active ? "bg-primary" : i === active ? "bg-primary ring-4 ring-brand-100 dark:ring-brand-600/25" : "bg-sand-300"
          )}
        >
          {i === active && <span className="sr-only">(current step)</span>}
        </span>
      ))}
    </div>
  );
}

/** Small "checked" roundel used in lesson lists. */
export function DoneRoundel({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-grove-600 text-white", className)}
    >
      <Check className="h-5 w-5" />
    </span>
  );
}
