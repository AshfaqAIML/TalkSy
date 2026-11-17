import { cn } from "@/lib/utils"

/**
 * Skeleton primitives of the TalkSy loading system.
 * `<Skeleton>` — base block with the brand-tinted shimmer sweep.
 * `<SkeletonCard>` / `<SkeletonGrid>` / `<SkeletonListRow>` — the three
 * loading shapes used across the app (card grids, list rows, text lines).
 * Every loading state replaces spinners with these so layout never jumps.
 */

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("skeleton-shimmer rounded-md", className)}
      {...props}
    />
  )
}

/** A card-shaped skeleton: header line, two text lines, footer row. */
function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      data-slot="skeleton-card"
      className={cn(
        "flex flex-col gap-3 rounded-xl border bg-card p-5",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-xl" />
        <div className="flex-1 space-y-1.5">
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </div>
      <Skeleton className="mt-auto h-8 w-full rounded-lg" />
    </div>
  )
}

/** A grid of card skeletons — pass the expected column classes. */
function SkeletonGrid({
  count = 6,
  className,
  cardClassName,
}: {
  count?: number
  className?: string
  cardClassName?: string
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} className={cardClassName} />
      ))}
    </div>
  )
}

/** A horizontal list-row skeleton (icon + two lines + trailing meta). */
function SkeletonListRow({ className }: { className?: string }) {
  return (
    <div
      data-slot="skeleton-list-row"
      className={cn("flex items-center gap-3 rounded-xl border bg-card p-4", className)}
    >
      <Skeleton className="size-9 shrink-0 rounded-full" />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <Skeleton className="h-4 w-2/5" />
        <Skeleton className="h-3 w-1/4" />
      </div>
      <Skeleton className="h-6 w-14 shrink-0 rounded-full" />
    </div>
  )
}

/** Text-block skeleton for paragraphs (n lines). */
function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          className={cn("h-3", i === lines - 1 ? "w-3/5" : "w-full")}
        />
      ))}
    </div>
  )
}

export { Skeleton, SkeletonCard, SkeletonGrid, SkeletonListRow, SkeletonText }
