"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/**
 * NotificationItem — the one recipe for notification-panel rows: an attention
 * tile with icon, tone, title, description and optional metadata. Used by
 * revision queues, planner reminders and admin attention lists.
 *
 * Tones map to semantic tokens: urgent (incorrect), soon (warning),
 * info (info), success (success). Interactive rows are anchors or buttons —
 * never divs — with press feedback and focus rings.
 */

const TONE_TILE: Record<string, string> = {
  urgent: "bg-incorrect/10 text-incorrect",
  soon: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
  success: "bg-success/10 text-success",
};

const TONE_BADGE: Record<string, string> = {
  urgent: "bg-incorrect/15 text-incorrect",
  soon: "bg-warning/15 text-warning",
  info: "bg-info/15 text-info",
  success: "bg-success/15 text-success",
};

export function NotificationItem({
  tone = "info",
  icon: Icon,
  title,
  badge,
  description,
  meta,
  footer,
  href,
  onClick,
  className,
}: {
  tone?: "urgent" | "soon" | "info" | "success";
  icon?: LucideIcon;
  title: string;
  badge?: string;
  description?: ReactNode;
  meta?: ReactNode;
  footer?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const body = (
    <>
      <div className="flex items-start gap-3">
        {Icon ? (
          <span
            aria-hidden
            className={cn(
              "inline-flex size-9 shrink-0 items-center justify-center rounded-xl",
              TONE_TILE[tone],
            )}
          >
            <Icon className="size-4.5" />
          </span>
        ) : null}
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1">
          <p className="truncate font-semibold">{title}</p>
          {badge ? (
            <Badge variant="secondary" className={cn("shrink-0 border-0", TONE_BADGE[tone])}>
              {badge}
            </Badge>
          ) : null}
        </div>
      </div>
      {description ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      {meta ? <div className="flex flex-wrap items-center gap-3">{meta}</div> : null}
      {footer}
    </>
  );

  const cls = cn(
    "card-interactive flex flex-col gap-2 rounded-xl border bg-card p-4 text-left shadow-xs hover:border-primary/40 hover:shadow-md",
    className,
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {body}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {body}
    </button>
  );
}
