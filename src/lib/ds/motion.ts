/**
 * TalkSy motion library.
 *
 * Principles (docs/DESIGN_SYSTEM.md → Motion):
 * - Enter: 200–300ms, ease-out quint, small 8px rise. Never from far away.
 * - Exit: 150ms fade. Exits must never block the next action.
 * - Press: scale 0.98 with the snappy spring; hover shifts color/shadow only.
 * - Stagger: 40–60ms per item, capped at ~6 items.
 * - `prefers-reduced-motion` collapses everything to opacity-only.
 */

import type { Transition, Variants } from "framer-motion";
import { DURATION, EASING_TUPLES, SPRING } from "./tokens";

/** Use for every enter/exit pair unless there's a reason not to. */
export const enterExit: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASING_TUPLES.outQuint },
  },
  exit: { opacity: 0, transition: { duration: DURATION.instant } },
};

/** Full-page / view-level transition. */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING_TUPLES.outQuint },
  },
  exit: { opacity: 0, transition: { duration: DURATION.fast } },
};

/** Staggered list: children use `enterExit`. */
export const staggerList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, staggerDirection: 1 } },
};

/** Tap feedback for buttons and cards. */
export const pressable = {
  whileTap: { scale: 0.98 },
  transition: SPRING.snappy,
} as const;

/** Feedback pill pop (correct/incorrect answers). */
export const feedbackPop: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING.gentle,
  },
  exit: { opacity: 0, transition: { duration: DURATION.instant } },
};

/** Celebration (lesson completion) — subtle, not a slot machine. */
export const celebrate: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { ...SPRING.gentle, delay: 0.15 },
  },
};

/** Reduced-motion-aware transition swap for hand-written motion components. */
export function motionTransition(standard: Transition): Transition {
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
    return { duration: 0.01 };
  }
  return standard;
}
