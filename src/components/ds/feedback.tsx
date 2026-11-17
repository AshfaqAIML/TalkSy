"use client";

/**
 * Answer feedback — the single most-seen component in a learning app.
 * Colour + icon + wording always together (never colour alone). Motion is
 * a gentle pop (reduced-motion safe).
 */

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { feedbackPop } from "@/lib/ds/motion";

export type FeedbackState = "correct" | "incorrect" | "partial";

const config = {
  correct: {
    icon: <CheckCircle2 className="h-5 w-5" aria-hidden="true" />,
    title: "Correct",
    wrap: "border-grove-600/30 bg-grove-50 dark:bg-grove-600/10 text-grove-900 dark:text-grove-700",
    iconWrap: "bg-grove-600 text-white",
  },
  incorrect: {
    icon: <XCircle className="h-5 w-5" aria-hidden="true" />,
    title: "Not quite",
    wrap: "border-clay-600/30 bg-clay-50 dark:bg-clay-500/10 text-clay-900 dark:text-clay-700",
    iconWrap: "bg-clay-600 text-white",
  },
  partial: {
    icon: <AlertCircle className="h-5 w-5" aria-hidden="true" />,
    title: "Almost there",
    wrap: "border-sun-600/30 bg-sun-50 dark:bg-sun-500/10 text-sun-700",
    iconWrap: "bg-sun-500 text-white",
  },
} as const;

export function AnswerFeedback({
  state,
  message,
  correctAnswer,
  encourageRetry = false,
  className,
}: {
  state: FeedbackState;
  /** explanation shown under the verdict */
  message?: string;
  /** the model answer, revealed for incorrect/partial answers */
  correctAnswer?: string;
  encourageRetry?: boolean;
  className?: string;
}) {
  const c = config[state];
  return (
    <motion.div
      variants={feedbackPop}
      initial="hidden"
      animate="visible"
      role="status"
      aria-live="polite"
      className={cn("rounded-xl border p-4", c.wrap, className)}
    >
      <div className="flex items-start gap-3">
        <span className={cn("mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full", c.iconWrap)}>
          {c.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold">{c.title}</p>
          {message && <p className="mt-0.5 text-body-sm">{message}</p>}
          {correctAnswer && (
            <p className="mt-1.5 text-body-sm">
              <span className="font-medium">Answer:</span>{" "}
              <span className="font-semibold">{correctAnswer}</span>
            </p>
          )}
          {encourageRetry && (
            <p className="mt-1 text-caption opacity-80">Read the explanation, then try the next one — mistakes are how we learn.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
