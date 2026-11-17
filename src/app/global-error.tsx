"use client";

/**
 * TalkSy global error boundary.
 *
 * Fires only when the root layout itself fails to render — the rarest and
 * most severe client error class. It replaces the entire document, so it
 * carries its own inline styles (design tokens from globals.css may not be
 * loaded in this state) and cannot rely on any app chrome.
 */

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Structured logger may be unavailable this deep in the failure; use the
    // console directly and deliberately (eslint-disable for this file's line).
    // eslint-disable-next-line no-console
    console.error(
      JSON.stringify({
        ts: new Date().toISOString(),
        level: "error",
        msg: "global error boundary",
        digest: error.digest,
        message: error.message,
      })
    );
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          background: "#faf8f2",
          color: "#101915",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "26rem" }}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            TalkSy could not start
          </h1>
          <p style={{ opacity: 0.75, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            A critical error occurred before the app could render. Please try
            again — if the problem continues, reload the page.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#0d5c46",
              color: "#ffffff",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
