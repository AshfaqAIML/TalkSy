"use client";

/**
 * Recent searches and recent pages for the command palette, persisted in
 * localStorage (per browser, anonymous-safe).
 */

export interface RecentPage {
  title: string;
  href: string;
}

const PAGES_KEY = "talksy.recent-pages";
const SEARCHES_KEY = "talksy.recent-searches";
const MAX_ITEMS = 6;

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private mode / quota: recents are best-effort only.
  }
}

export function getRecentPages(): RecentPage[] {
  return readJson<RecentPage[]>(PAGES_KEY, []);
}

export function recordRecentPage(page: RecentPage): void {
  const next = [
    page,
    ...getRecentPages().filter((p) => p.href !== page.href),
  ].slice(0, MAX_ITEMS);
  writeJson(PAGES_KEY, next);
}

export function getRecentSearches(): string[] {
  return readJson<string[]>(SEARCHES_KEY, []);
}

export function recordRecentSearch(query: string): void {
  const trimmed = query.trim();
  if (trimmed.length === 0) return;
  const next = [
    trimmed,
    ...getRecentSearches().filter((q) => q !== trimmed),
  ].slice(0, MAX_ITEMS);
  writeJson(SEARCHES_KEY, next);
}

export function clearRecentSearches(): void {
  writeJson(SEARCHES_KEY, []);
}
