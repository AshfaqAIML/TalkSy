"use client";

/**
 * Skeleton compositions — loading states must mirror the layout they
 * replace (never a bare spinner on white). Compose shadcn Skeleton with
 * the real geometry of each surface.
 */

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function CardSkeleton({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-line bg-card p-5 shadow-xs", className)} aria-hidden="true">
      <Skeleton className="mb-3 h-5 w-1/3" />
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")} />
      ))}
    </div>
  );
}

export function ListSkeleton({ rows = 4, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn("divide-y divide-line rounded-xl border border-line bg-card shadow-xs", className)} aria-hidden="true">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-5 py-4">
          <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-2/5" />
            <Skeleton className="h-3 w-3/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function StatSkeleton({ count = 4, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 lg:grid-cols-4", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl border border-line bg-card p-5 shadow-xs">
          <Skeleton className="mb-3 h-8 w-8 rounded-lg" />
          <Skeleton className="h-7 w-16" />
          <Skeleton className="mt-2 h-3 w-20" />
        </div>
      ))}
    </div>
  );
}

export function ChartSkeleton({ className, height = 224 }: { className?: string; height?: number }) {
  return (
    <div className={cn("rounded-xl border border-line bg-card p-5 shadow-xs", className)} aria-hidden="true">
      <Skeleton className="mb-4 h-5 w-32" />
      <div className="flex items-end gap-3" style={{ height }}>
        {[55, 80, 40, 95, 65, 75, 50].map((h, i) => (
          <Skeleton key={i} className="w-full rounded-md" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export function PlayerSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)} aria-hidden="true">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-24 w-full rounded-xl" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-28" />
      </div>
    </div>
  );
}
