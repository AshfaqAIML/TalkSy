"use client";

/**
 * TalkSy brand assets.
 *
 * The mark: a speech bubble whose trail rises from three small "first
 * words" (the typing dots of a conversation) to an amber waypoint —
 * the destination. Talk + path: "from your first English word to
 * confident communication."
 *
 * The wordmark: "TalkSy" set in Fraunces (the display serif), closed
 * with the amber waypoint as a full stop. Exactly this casing — never
 * "TalkSY", "Talksy" or the retired "EnglishPath".
 */

import { cn } from "@/lib/utils";

export function LogoMark({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      fill="none"
      aria-hidden="true"
    >
      {/* speech bubble tile */}
      <rect width="64" height="64" rx="17" className="fill-primary" />
      {/* speech tail */}
      <path
        d="M17 50 C 15 55 11 58 5 59.5 C 12 61.5 19 59 23 54.5 Z"
        className="fill-primary"
      />
      {/* the rising trail — first words becoming a conversation */}
      <circle cx="19" cy="44" r="3.2" className="fill-paper" />
      <circle cx="28.5" cy="36" r="3.2" className="fill-paper" />
      <circle cx="38" cy="27.5" r="3.2" className="fill-paper" opacity="0.9" />
      {/* the waypoint — the destination */}
      <circle cx="46.5" cy="18" r="6.6" className="fill-sun-400" />
      <circle cx="46.5" cy="18" r="2.4" className="fill-primary" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline font-display font-semibold text-ink-900", className)}>
      TalkSy
      {/* the waypoint closes the word like a full stop */}
      <span className="ml-0.5 inline-block h-[0.22em] w-[0.22em] rounded-full bg-sun-400" aria-hidden="true" />
    </span>
  );
}

export function LogoLockup({
  className,
  compact = false,
  size = 32,
  onClick,
}: {
  className?: string;
  compact?: boolean;
  size?: number;
  onClick?: () => void;
}) {
  const content = (
    <span className={cn("inline-flex select-none items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {!compact && <Wordmark className="text-[1.35rem] leading-none tracking-tight" />}
    </span>
  );
  if (onClick) return content;
  return content;
}

export function LogoLink({ onClick, compact = false }: { onClick?: () => void; compact?: boolean }) {
  return (
    <a
      href="#/"
      onClick={onClick}
      className="rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4"
      aria-label="TalkSy home"
    >
      <LogoLockup compact={compact} />
    </a>
  );
}
