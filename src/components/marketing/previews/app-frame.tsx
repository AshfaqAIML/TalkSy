import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Browser-style chrome for product previews on the marketing site.
 * Wraps recreations of real app screens (see previews/*).
 */
export function AppFrame({
  url,
  children,
  className,
  label,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-2xl border-2 border-line bg-card shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-sand-100 px-4 py-2.5 dark:bg-sand-100/60">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-clay-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-sun-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-grove-400/80" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[60%] items-center gap-1.5 truncate rounded-full border border-line bg-background px-3.5 py-1 text-caption text-ink-500">
          <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
          <span className="truncate">talksy.app{url}</span>
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
