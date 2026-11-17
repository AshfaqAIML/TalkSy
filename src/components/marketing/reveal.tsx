"use client";

/**
 * Scroll-reveal wrapper for marketing sections. One MotionConfig at the
 * root honours prefers-reduced-motion automatically (framer-motion skips
 * transforms, content stays visible).
 */

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { EASING_TUPLES } from "@/lib/ds/tokens";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay, ease: EASING_TUPLES.outQuint }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
