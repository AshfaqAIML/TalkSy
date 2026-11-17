import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * EmptyState — the one empty/fallback recipe for the whole app.
 * Icon tile, title, honest description (never fabricated numbers) and an
 * optional recovery action. Used for empty lists, logged-out gates and
 * error fallbacks.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed bg-card/50 px-6 py-12 text-center",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
          iconClassName,
        )}
      >
        <Icon className="size-6" aria-hidden />
      </span>
      <p className="mt-4 font-heading text-base font-semibold">{title}</p>
      {description ? (
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
