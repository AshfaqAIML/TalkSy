/**
 * The search matcher — a pure, dependency-free scoring engine used by the
 * command palette. Runs identically on the server (tests) and the client.
 *
 * Design: tokenised substring scoring with phrase priority. No fuzzy
 * matching — a learning product needs predictable, explainable results
 * ("family" finds the family lesson, not "familiar").
 */

import type { SearchCategory, SearchEntry, SearchFilterId } from "./types";
import { SEARCH_FILTER_GROUPS } from "./types";

export interface SearchMatch {
  entry: SearchEntry;
  score: number;
  /** [start, end) highlight ranges inside `entry.title` (case-insensitive). */
  titleRanges: [number, number][];
}

/** Tokens shorter than this never highlight (avoids marking every "a"). */
const MIN_HIGHLIGHT_TOKEN_LENGTH = 2;

export function tokenizeQuery(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

/** All case-insensitive occurrence ranges of `needle` in `haystack`. */
function rangesOf(haystack: string, needle: string): [number, number][] {
  if (needle.length < MIN_HIGHLIGHT_TOKEN_LENGTH) return [];
  const ranges: [number, number][] = [];
  const lower = haystack.toLowerCase();
  let from = 0;
  for (;;) {
    const idx = lower.indexOf(needle, from);
    if (idx === -1) break;
    ranges.push([idx, idx + needle.length]);
    from = idx + needle.length;
  }
  return ranges;
}

/** Merge overlapping [start,end) ranges, keeping the earliest starts. */
export function mergeRanges(ranges: [number, number][]): [number, number][] {
  if (ranges.length <= 1) return ranges;
  const sorted = [...ranges].sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [sorted[0]];
  for (let i = 1; i < sorted.length; i += 1) {
    const last = merged[merged.length - 1];
    if (sorted[i][0] <= last[1]) last[1] = Math.max(last[1], sorted[i][1]);
    else merged.push(sorted[i]);
  }
  return merged;
}

/** Highlight ranges for every query token found in `text`. */
export function getHighlightRanges(text: string, tokens: string[]): [number, number][] {
  return mergeRanges(tokens.flatMap((t) => rangesOf(text, t)));
}

/** Score one entry against a query. 0 means "no match". */
function scoreEntry(entry: SearchEntry, phrase: string, tokens: string[]): number {
  const title = entry.title.toLowerCase();
  const subtitle = (entry.subtitle ?? "").toLowerCase();
  const description = (entry.description ?? "").toLowerCase();
  const keywords = (entry.keywords ?? []).join(" ").toLowerCase();
  const category = entry.category.toLowerCase();
  const difficulty = (entry.difficulty ?? "").toLowerCase();

  let score = 0;
  let matchedTitleToken = false;
  let matchedMetaToken = false;

  if (phrase.length > 0) {
    if (title === phrase) score += 140;
    else if (title.startsWith(phrase)) score += 120;
    else if (title.includes(` ${phrase}`)) score += 100;
    else if (title.includes(phrase)) score += 80;
    else if (subtitle.includes(phrase) || keywords.includes(phrase)) score += 40;
  }

  for (const token of tokens) {
    if (token.length === 0) continue;
    if (title === token) score += 50;
    else if (title.startsWith(token)) score += 36;
    else if (title.includes(` ${token}`)) score += 30;
    else if (title.includes(token)) score += 18;

    if (title.includes(token)) matchedTitleToken = true;

    if (keywords.includes(token)) score += 14;
    if (subtitle.includes(token)) score += 10;
    if (description.includes(token)) score += 6;
    if (category === token) score += 8;
    if (difficulty.includes(token)) score += 4;

    if (
      keywords.includes(token) ||
      subtitle.includes(token) ||
      description.includes(token) ||
      category === token
    ) {
      matchedMetaToken = true;
    }
  }

  // A result is only a match when the query actually hit the title or one of
  // the curated meta fields — never on a lone description fragment.
  if (score === 0) return 0;
  if (!matchedTitleToken && !matchedMetaToken) return 0;
  return score;
}

export interface SearchOptions {
  /** Restrict to one coarse filter group ("all" by default). */
  filter?: SearchFilterId;
  /** Hard cap on total results (after per-category caps). Default 30. */
  limit?: number;
  /** Max results per category. Default 6. */
  perCategory?: number;
}

/**
 * Search the index. Results are sorted by score (then title length) and
 * grouped per category in the returned array; consumers render groups in
 * the given order.
 */
export function searchEntries(
  entries: SearchEntry[],
  query: string,
  options: SearchOptions = {},
): Map<SearchCategory, SearchMatch[]> {
  const { filter = "all", limit = 30, perCategory = 6 } = options;
  const trimmed = query.trim().toLowerCase();
  if (trimmed.length === 0) return new Map();

  const group = SEARCH_FILTER_GROUPS.find((g) => g.id === filter) ?? SEARCH_FILTER_GROUPS[0];
  const allowed = new Set<string>(group.categories as readonly string[]);

  const phrase = trimmed;
  const tokens = tokenizeQuery(trimmed);

  const byCategory = new Map<SearchCategory, SearchMatch[]>();
  let emitted = 0;

  const candidates: SearchMatch[] = [];
  for (const entry of entries) {
    if (!allowed.has(entry.category)) continue;
    const score = scoreEntry(entry, phrase, tokens);
    if (score <= 0) continue;
    candidates.push({
      entry,
      score,
      titleRanges: getHighlightRanges(entry.title, tokens),
    });
  }

  candidates.sort(
    (a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length,
  );

  for (const match of candidates) {
    if (emitted >= limit) break;
    const list = byCategory.get(match.entry.category) ?? [];
    if (list.length >= perCategory) continue;
    list.push(match);
    byCategory.set(match.entry.category, list);
    emitted += 1;
  }

  return byCategory;
}
