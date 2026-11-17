"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

/**
 * Progress bar — animated fill (transform-only, 500ms ease-out) with an
 * indeterminate variant for unknown-duration work. Value changes animate
 * smoothly, which is the micro-interaction for "progress changed".
 */
function Progress({
  className,
  value,
  indeterminate = false,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  /** Sliding-bar busy state when the percentage is unknown. */
  indeterminate?: boolean
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/15 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {indeterminate ? (
        <div
          data-slot="progress-indeterminate"
          className="bg-primary absolute inset-y-0 w-2/5 rounded-full"
          style={{
            animation:
              "progress-slide 1.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
          }}
        />
      ) : (
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-primary h-full w-full flex-1 rounded-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      )}
    </ProgressPrimitive.Root>
  )
}

/**
 * Progress ring — circular SVG progress with an animated stroke. Used where
 * a percentage deserves more ceremony than a bar (readiness, milestones).
 * The stroke offset transitions with CSS, so value updates animate.
 */
function ProgressRing({
  value,
  size = 64,
  strokeWidth = 6,
  className,
  trackClassName,
  label,
  showValue = true,
  children,
}: {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
  trackClassName?: string
  /** Accessible name for screen readers (visually hidden). */
  label: string
  showValue?: boolean
  /** Optional content rendered inside the ring (e.g. an icon). */
  children?: React.ReactNode
}) {
  const clamped = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clamped / 100) * circumference
  const box = { width: size, height: size }

  return (
    <div
      data-slot="progress-ring"
      className={cn("relative inline-flex items-center justify-center", className)}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={cn("stroke-primary/15", trackClassName)}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="stroke-primary transition-[stroke-dashoffset] duration-700 ease-out"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children ?? (showValue ? (
          <span className="text-sm font-semibold tabular-nums">
            {Math.round(clamped)}%
          </span>
        ) : null)}
      </div>
    </div>
  )
}

export { Progress, ProgressRing }

/* Registered in globals.css alongside the other keyframes. */
