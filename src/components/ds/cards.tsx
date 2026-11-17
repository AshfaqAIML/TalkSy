"use client";

/**
 * Card patterns: SectionHeading (eyebrow + display title + action slot)
 * and InteractiveCard (hover lift + focus ring). The base Card comes from
 * shadcn/ui (src/components/ui/card.tsx) and is styled purely by tokens.
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  headingId?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4", className)}>
      <div className="min-w-0">
        {eyebrow && <p className="overline-label text-brand-700 dark:text-brand-600">{eyebrow}</p>}
        <h2 id={headingId} className="font-display text-heading-lg text-ink-900 text-balance">
          {title}
        </h2>
        {description && <p className="mt-1 max-w-xl text-body-sm text-ink-500">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/**
 * Card that acts as a link target: lifts 2px on hover, gains shadow, and
 * keeps a visible focus ring for keyboard users.
 */
export function InteractiveCard({
  children,
  className,
  onClick,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "div" | "button";
}) {
  const Comp = as === "button" ? motion.button : motion.div;
  return (
    <Comp
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={onClick ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "rounded-xl border border-line bg-card text-left shadow-xs transition-shadow duration-base ease-out-quint hover:shadow-md",
        "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        className
      )}
    >
      {children}
    </Comp>
  );
}
