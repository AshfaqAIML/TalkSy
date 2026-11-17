"use client";

/**
 * Compatibility shim: deep links written for the old single-route app
 * (e.g. "/#/lesson/a1-1-1") are forwarded to the app's new home at
 * "/app" so old bookmarks keep working. Runs once on the landing page.
 */

import { useEffect } from "react";

export function HashAppRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith("#/")) {
      window.location.replace(`/app${hash}`);
    }
  }, []);
  return null;
}
