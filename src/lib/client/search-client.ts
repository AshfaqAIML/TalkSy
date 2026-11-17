"use client";

/**
 * Client-side access to the search index: one fetch per session (in-memory
 * cache), shared by the command palette and the Courses mega menu.
 */

import type { SearchEntry } from "@/lib/search/types";

let cache: SearchEntry[] | null = null;
let pending: Promise<SearchEntry[]> | null = null;

export function getCachedSearchIndex(): SearchEntry[] | null {
  return cache;
}

export function fetchSearchIndex(): Promise<SearchEntry[]> {
  if (cache) return Promise.resolve(cache);
  if (pending) return pending;
  pending = (async () => {
    try {
      const res = await fetch("/api/search/index");
      if (!res.ok) throw new Error(`search index ${res.status}`);
      const data = (await res.json()) as { entries: SearchEntry[] };
      cache = data.entries;
      return cache;
    } catch {
      // Network failure: the palette degrades to actions + recents only.
      return [];
    } finally {
      pending = null;
    }
  })();
  return pending;
}
