"use client";

/**
 * The learning-journey path: a winding trail from "Alphabet" to "Fluency".
 * Desktop shows the animated SVG trail (stroke draws as it scrolls into
 * view); the stage cards below carry the full content on every viewport.
 */

import { motion, MotionConfig } from "framer-motion";
import { journeyStages } from "@/lib/marketing/content";

/** Hand-tuned node positions on a 1120×300 canvas — a gentle wave. */
const NODES = [
  { x: 70, y: 215 },
  { x: 235, y: 95 },
  { x: 400, y: 205 },
  { x: 565, y: 85 },
  { x: 730, y: 205 },
  { x: 895, y: 95 },
  { x: 1060, y: 195 },
];

const PATH =
  "M 70 215 C 130 215, 175 95, 235 95 C 295 95, 340 205, 400 205 C 460 205, 505 85, 565 85 C 625 85, 670 205, 730 205 C 790 205, 835 95, 895 95 C 955 95, 1010 195, 1060 195";

export function JourneyPath() {
  return (
    <MotionConfig reducedMotion="user">
      <svg
        viewBox="0 0 1120 300"
        className="hidden w-full md:block"
        role="img"
        aria-label={`The TalkSy learning journey: ${journeyStages.map((s) => s.title).join(", ")}`}
      >
        {/* soft track behind the drawn path */}
        <path d={PATH} fill="none" strokeWidth="3" className="stroke-line" strokeDasharray="1 10" strokeLinecap="round" />

        {/* animated stroke */}
        <motion.path
          d={PATH}
          fill="none"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="stroke-primary"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        {journeyStages.map((stage, i) => {
          const node = NODES[i];
          const labelAbove = node.y < 150;
          const last = i === journeyStages.length - 1;
          // Label clearances: circle radius is 22, so keep ≥ 26px between
          // the node centre and the nearest text baseline.
          const titleY = labelAbove ? node.y - 40 : node.y + 46;
          const subY = labelAbove ? node.y - 22 : node.y + 64;
          const subText = last ? "B1–C1 · in development" : stage.where.split("·")[0].trim();
          return (
            <g key={stage.title}>
              <motion.g
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.15 + i * 0.22, duration: 0.4 }}
              >
                {stage.available ? (
                  <>
                    <circle cx={node.x} cy={node.y} r="22" className="fill-primary" />
                    <text
                      x={node.x}
                      y={node.y + 5.5}
                      textAnchor="middle"
                      className="fill-primary-foreground text-[15px] font-bold"
                    >
                      {stage.step}
                    </text>
                  </>
                ) : (
                  <>
                    <circle cx={node.x} cy={node.y} r="22" fill="none" strokeWidth="2.5" className="stroke-ink-400" strokeDasharray="4 4" />
                    <text
                      x={node.x}
                      y={node.y + 5.5}
                      textAnchor="middle"
                      className="fill-ink-500 text-[15px] font-bold"
                    >
                      {stage.step}
                    </text>
                  </>
                )}
              </motion.g>
              <text
                x={node.x}
                y={titleY}
                textAnchor="middle"
                className={
                  last
                    ? "fill-ink-500 text-[15px] font-semibold"
                    : "fill-ink-900 text-[15px] font-semibold"
                }
              >
                {stage.title}
              </text>
              <text
                x={node.x}
                y={subY}
                textAnchor="middle"
                className="fill-ink-500 text-[11px]"
              >
                {subText}
              </text>
            </g>
          );
        })}
      </svg>
    </MotionConfig>
  );
}
