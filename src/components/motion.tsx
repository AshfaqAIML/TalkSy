"use client";

/**
 * TALKSY MOTION COMPONENTS — thin, reusable animation wrappers built on the
 * motion system in `src/lib/motion.ts`.
 *
 * • <Reveal>            scroll-triggered entrance (once)
 * • <StaggerGroup>      orchestrates <StaggerItem> children appearance
 * • <RouteTransition>   keyed entrance for hash-route views
 * • <Float>             slow vertical drift for decorative elements
 * • <SuccessBurst>      spring-pop check mark for correct answers
 * • <MotionProvider>    mounts <MotionConfig reducedMotion="user"> app-wide
 *
 * All components animate transform/opacity only and respect
 * prefers-reduced-motion through MotionProvider + the global CSS rule.
 */

import { useEffect, useRef, type ReactNode } from "react";
import {
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  STAGGER_MAX_ITEMS,
  fadeUp,
  routeEnter,
  staggerContainer,
  staggerItem,
  successPop,
  unlockReveal,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Provider — one place that makes every framer animation reduced-motion
   aware. Mounted once in the root layout.                              */
/* ------------------------------------------------------------------ */

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal — scroll-triggered entrance                                  */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
  mode = "scroll",
}: {
  children: ReactNode;
  className?: string;
  /** Seconds. Keep small (< 0.2); use for hero sections only. */
  delay?: number;
  variants?: Variants;
  as?: "div" | "section" | "li";
  /**
   * "scroll": wait until the element enters the viewport — decorative
   * below-the-fold sections only. "mount": play the entrance immediately on
   * mount — the required mode for PRIMARY content (page sections, headings,
   * text blocks), which must never depend on scroll position: full-page
   * captures, print, find-in-page and snapshots would otherwise render it
   * invisible.
   */
  mode?: "scroll" | "mount";
}) {
  const MotionTag = motion[as];
  if (mode === "mount") {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay }}
      >
        {children}
      </MotionTag>
    );
  }
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger — grids and card lists                                      */
/* ------------------------------------------------------------------ */

export function StaggerGroup({
  children,
  className,
  delayChildren,
  /**
   * "mount" (default): children stagger in immediately on mount — the safe
   * default for primary content (grids, catalogues): nothing can ever stay
   * invisible (print, PDF, find-in-page, full-page captures).
   * "scroll": wait until the group scrolls into view — for below-the-fold
   * decorative sections only.
   */
  mode = "mount",
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  mode?: "scroll" | "mount";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduced = useReducedMotion();

  // On mount mode (or once scrolled into view) switch to "visible".
  const animate =
    reduced || mode === "mount" || inView ? "visible" : "hidden";

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={animate}
      variants={staggerContainer(delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  /** Position in the group; delays beyond 10 items are clamped. */
  index = 0,
  variants = staggerItem,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  variants?: Variants;
}) {
  const clamped = Math.min(index, STAGGER_MAX_ITEMS);
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ delay: clamped * 0.03 }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* RouteTransition — keyed entrance for hash-route views               */
/* ------------------------------------------------------------------ */

/**
 * Wrap the routed view. The parent controls the key (route identity), so
 * tab-level navigation inside one view does NOT remount or re-animate —
 * only real view changes get the entrance.
 */
export function RouteTransition({
  routeKey,
  children,
  className,
}: {
  routeKey: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      key={routeKey}
      className={className}
      initial="hidden"
      animate="visible"
      variants={routeEnter}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Float — subtle vertical drift for decorative elements               */
/* ------------------------------------------------------------------ */

/**
 * 6s ease-in-out drift, ±6px. Intended for the landing hero blobs and
 * proof chips — decorative only, always `aria-hidden` at the call site.
 * Hidden by callers on small screens; disabled by reduced-motion config.
 */
export function Float({
  children,
  className,
  delay = 0,
  amplitude = 6,
  duration = 6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={
        reduced
          ? undefined
          : { y: [-amplitude, amplitude, -amplitude] }
      }
      transition={
        reduced
          ? undefined
          : { duration, repeat: Infinity, ease: "easeInOut", delay }
      }
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SuccessBurst — correct-answer check mark                            */
/* ------------------------------------------------------------------ */

/** Spring-pop check used by exercise grading and inline confirmations. */
export function SuccessBurst({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <motion.span
      className={cn("inline-flex", className)}
      variants={successPop}
      initial="hidden"
      animate="visible"
    >
      <CheckCircle2 className={cn("size-5 text-correct", iconClassName)} aria-hidden />
    </motion.span>
  );
}

/** Achievement-unlock entrance (gold-glow rise). Used by the Awards tab. */
export function UnlockReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={unlockReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — animated number for stat tiles                            */
/* ------------------------------------------------------------------ */

/**
 * Animates 0 → value on first view using framer-motion's animate(). The
 * DOM text is the final value from the start (SSR/SEO honest), then the
 * counter runs if the element is visible and motion is allowed.
 */
export function CountUp({
  value,
  duration = 0.9,
  className,
  format,
}: {
  value: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const rendered = format ? format(value) : String(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || reduced || started.current) return;
    started.current = true;
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * value);
      node.textContent = format ? format(current) : String(current);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value, duration, format]);

  return (
    <span ref={ref} className={className}>
      {rendered}
    </span>
  );
}
