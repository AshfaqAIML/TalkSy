"use client";

/**
 * Notification helpers — semantic wrappers over the shadcn toast system
 * (src/hooks/use-toast.ts, rendered by <Toaster /> in the root layout).
 * One look per meaning: success / error / info, always with a clear title.
 */

import { toast } from "@/hooks/use-toast";

type NotifyOptions = { title: string; description?: string };

export const notify = {
  success({ title, description }: NotifyOptions) {
    toast({
      title,
      description,
      className: "border-grove-600/40 bg-grove-50 text-grove-900 dark:bg-grove-600/15 dark:text-grove-700",
    });
  },
  error({ title, description }: NotifyOptions) {
    toast({
      title,
      description,
      variant: "destructive",
    });
  },
  info({ title, description }: NotifyOptions) {
    toast({
      title,
      description,
      className: "bg-card text-ink-800 border-line",
    });
  },
};
