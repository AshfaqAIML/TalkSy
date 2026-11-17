import type { Transition, Variants } from "framer-motion";

/**
 * TALKSY MOTION DESIGN SYSTEM — the single source of motion truth.
 *
 * Mirrors the CSS tokens in globals.css (--duration-*, --ease-*) so JS and
 * CSS animations feel identical. Rules:
 *
 *  1. Animate ONLY transform & opacity (GPU-composited, no layout thrash).
 *  2. Durations stay in the 150–320ms band; nothing loops faster than 2s
 *     except success bursts, which settle in < 600ms.
 *  3. `MotionProvider` mounts <MotionConfig reducedMotion="user">, so every
 *     variant here automatically degrades to instant state changes for users
 *     who prefer reduced motion — plus the global CSS fallback covers
 *     keyframe classes.
 *  4. Stays restrained: one hero moment per view. Motion clarifies, never
 *     decorates.
 */

/* ------------------------------------------------------------------ */
/* Tokens                                                              */
/* ------------------------------------------------------------------ */

export const motionDurations = {
  instant: 0.12,
  fast: 0.18,
  base: 0.24,
  slow: 0.36,
  deliberate: 0.6,
} as const;

/** cubic-bezier(0.22, 1, 0.36, 1) — the same curve as CSS --ease-out. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** cubic-bezier(0.34, 1.56, 0.64, 1) — the same curve as CSS --ease-spring. */
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const transitions = {
  fast: { duration: motionDurations.fast, ease: easeOut } satisfies Transition,
  base: { duration: motionDurations.base, ease: easeOut } satisfies Transition,
  slow: { duration: motionDurations.slow, ease: easeOut } satisfies Transition,
  spring: { type: "spring", stiffness: 420, damping: 30, mass: 0.9 } satisfies Transition,
  /** Success moments: a confident overshoot that settles quickly. */
  pop: { type: "spring", stiffness: 500, damping: 22, mass: 0.8 } satisfies Transition,
} as const;

/* ------------------------------------------------------------------ */
/* whileInView config — every scroll reveal uses this                  */
/* ------------------------------------------------------------------ */

/** Reveal once, when 15% of the element is visible. Never re-animate. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;

/* ------------------------------------------------------------------ */
/* Entrance variants                                                   */
/* ------------------------------------------------------------------ */

/** Default entrance: soft fade + 10px rise. View roots, cards, sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

/** Quiet fade for overlays, swaps and route content. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.fast },
};

/** Scale-in for popovers, badges and success marks. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.base },
};

/** Route transition: 8px rise — small enough to never feel like a slide. */
export const routeEnter: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

/* ------------------------------------------------------------------ */
/* Stagger — for grids and lists of sibling cards                      */
/* ------------------------------------------------------------------ */

/**
 * Parent container that staggers its `staggerItem` children.
 * Per-step delay is small (30ms) so grids of 6–12 cards resolve in < 0.5s.
 * Cap stagger at 10 items: `StaggerItem` clamps its index, so long lists
 * never animate for longer than short ones.
 */
export const STAGGER_MAX_ITEMS = 10;
export const STAGGER_STEP = 0.03;

export function staggerContainer(delayChildren = 0.05): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: STAGGER_STEP, delayChildren },
    },
  };
}

export const staggerItem: Variants = {
  hidden: fadeUp.hidden,
  visible: { ...fadeUp.visible, transition: transitions.fast },
};

/* ------------------------------------------------------------------ */
/* Feedback variants — exercise grading & achievement unlocks          */
/* ------------------------------------------------------------------ */

/** Correct answer: check mark pops in with a spring overshoot. */
export const successPop: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: { opacity: 1, scale: 1, transition: transitions.pop },
};

/** Wrong answer: a firm horizontal shake that stays subtle. */
export const incorrectShake: Variants = {
  hidden: { x: 0 },
  visible: {
    x: [0, -5, 4, -2, 0],
    transition: { duration: motionDurations.base, ease: easeOut },
  },
};

/** Achievement unlock: rises with the gold glow settling behind it. */
export const unlockReveal: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: transitions.slow },
};
