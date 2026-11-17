"use client";

/**
 * TalkSy route error boundary.
 *
 * Catches unexpected render/runtime errors inside the app tree and shows a
 * calm, actionable fallback instead of a blank page. "Try again" re-renders
 * the failed segment (TanStack Query state survives, so no data is lost);
 * "Go home" resets to the landing view via the hash router.
 */

import { useEffect } from "react";
import { logger } from "@/lib/logger";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("route error boundary", {
      digest: error.digest,
      message: error.message,
    });
  }, [error]);

  return (
    <div
      className="flex flex-1 items-center justify-center px-4 py-24"
      role="alert"
    >
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-7 w-7 text-destructive" aria-hidden="true" />
        </div>
        <h1 className="mb-2 text-2xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="mb-6 text-muted-foreground">
          An unexpected error interrupted your session. Your progress is saved —
          trying again usually fixes it.
        </p>
        <div className="flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button
            variant="outline"
            onClick={() => {
              window.location.hash = "#/";
              window.location.reload();
            }}
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
