"use client";

/**
 * Empty states with hand-drawn spot illustrations. An empty state earns
 * its place: explain why it's empty and offer the next step.
 */

import { cn } from "@/lib/utils";

export type SpotIllustration = "path" | "search" | "celebration" | "inbox";

function Spot({ kind }: { kind: SpotIllustration }) {
  const common = "h-20 w-20";
  switch (kind) {
    case "path":
      return (
        <svg viewBox="0 0 80 80" className={common} fill="none" aria-hidden="true">
          <circle cx="24" cy="58" r="5" className="fill-brand-200" />
          <circle cx="38" cy="44" r="5" className="fill-brand-300" />
          <circle cx="52" cy="30" r="5" className="fill-brand-400" />
          <circle cx="60" cy="20" r="8" className="fill-sun-400" />
          <circle cx="60" cy="20" r="3" className="fill-card" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 80 80" className={common} fill="none" aria-hidden="true">
          <rect x="14" y="18" width="40" height="30" rx="6" className="fill-sand-200" />
          <rect x="21" y="25" width="26" height="4" rx="2" className="fill-sand-300" />
          <rect x="21" y="33" width="18" height="4" rx="2" className="fill-sand-300" />
          <circle cx="50" cy="48" r="11" className="stroke-brand-500" strokeWidth="5" />
          <path d="M58 56 L68 66" className="stroke-brand-500" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "celebration":
      return (
        <svg viewBox="0 0 80 80" className={common} fill="none" aria-hidden="true">
          <circle cx="40" cy="42" r="16" className="fill-sun-400" />
          <path d="M40 58 L34 70 H46 Z" className="fill-brand-600" />
          <path d="M22 18 L26 26 M14 34 L22 36 M58 18 L54 26 M66 34 L58 36 M40 12 V20" className="stroke-sun-500" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "inbox":
      return (
        <svg viewBox="0 0 80 80" className={common} fill="none" aria-hidden="true">
          <path d="M16 40 V56 A6 6 0 0 0 22 62 H58 A6 6 0 0 0 64 56 V40" className="stroke-ink-400" strokeWidth="4" />
          <path d="M16 40 L24 20 A6 6 0 0 1 29.5 17 H50.5 A6 6 0 0 1 56 20 L64 40 H46 L43 46 H37 L34 40 Z" className="fill-sand-200 stroke-ink-400" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function EmptyState({
  illustration = "inbox",
  title,
  description,
  action,
  className,
}: {
  illustration?: SpotIllustration;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3 px-6 py-12 text-center", className)}>
      <Spot kind={illustration} />
      <h3 className="mt-1 font-display text-heading-md text-ink-900">{title}</h3>
      {description && <p className="max-w-sm text-body-sm text-ink-500 text-balance">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
