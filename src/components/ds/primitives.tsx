"use client";

/**
 * Small typographic and identity primitives: Kbd (keyboard hints) and
 * UserAvatar (initials + optional presence dot).
 */

import { cn } from "@/lib/utils";

/** Keyboard key hint, e.g. <Kbd>⌘</Kbd> <Kbd>K</Kbd> */
export function Kbd({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-xs border border-line-strong bg-sand-50 px-1.5 font-sans text-[0.6875rem] font-medium text-ink-600 shadow-xs",
        className
      )}
    >
      {children}
    </kbd>
  );
}

const avatarSizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-12 w-12 text-base",
} as const;

/**
 * Initials avatar on the brand colour. Used in the topbar, sidebar footer
 * and anywhere a user is referenced.
 */
export function UserAvatar({
  name,
  size = "md",
  status,
  className,
}: {
  name: string;
  size?: keyof typeof avatarSizes;
  /** presence dot — "online" | "away" | undefined */
  status?: "online" | "away";
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "flex items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground select-none",
          avatarSizes[size]
        )}
      >
        {initials}
      </span>
      {status && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-background",
            status === "online" ? "bg-grove-500" : "bg-sun-500"
          )}
        />
      )}
      <span className="sr-only">{name}</span>
    </span>
  );
}
