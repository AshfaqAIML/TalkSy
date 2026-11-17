# ADR-003: Single public route with hash navigation

Date: 2026-11-11
Status: Accepted

## Context

TalkSy ships as one Next.js application that must be previewable through a
single external endpoint (the sandbox exposes exactly one user-visible route,
`/`). At the same time the product has multiple logical destinations: the
learner library, individual lesson players, the dashboard, and auth screens.

## Decision

The entire learner app lives on the single public route `/` (`src/app/page.tsx`)
and navigates with the URL hash (`#/library`, `#/lesson/p1-1-1`,
`#/dashboard`, …). The router is implemented with `useSyncExternalStore` so
that:

- SSR renders the home route deterministically;
- hydration never mismatches when the initial URL carries a hash;
- after hydration the real hash is applied without a remount.

API routes remain real Next.js route handlers under `/api/*` (server-side,
unaffected by this ADR). Future marketing pages, if added, would be separate
real routes and are out of scope here.

## Consequences

- One deployable entry point; the preview link always works.
- Deep links to lessons work (`…/#/lesson/p1-1-2`).
- No server-side per-page routing for app views (acceptable: these pages are
  personalized and authenticated, not SEO targets).
