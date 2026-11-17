# TalkSy — Public Website

The public-facing site: landing page, marketing pages, auth pages and the
SEO layer. The learning application itself lives at `/app` (see
[TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md) → Routing strategy).

## Routes

| Route | Purpose | Indexed |
| --- | --- | --- |
| `/` | Landing page (hero, problems, journey, features, how-it-works, previews, levels, tutor, daily practice, FAQ, final CTA) | yes |
| `/about` | Mission, principles, honest-content governance | yes |
| `/courses` | Full curriculum catalogue rendered from the real curriculum source | yes |
| `/methodology` | The pedagogy (four foundations, seven-beat arc, exercise rules) | yes |
| `/features` | The eight core features with honest live/planned statuses | yes |
| `/pricing` | Free today + free-forever guarantee + planned premium tiers | yes |
| `/faq` | All FAQs (source of the FAQPage structured data) | yes |
| `/contact` | Contact form → `ContactMessage` table via `POST /api/contact` | yes |
| `/register` | Create account (real API, then `/app`) | yes |
| `/login` | Sign in (real API, then `/app`) | no |
| `/app` | The learning application (hash-routed SPA) | no |
| `/og-image`, `/icon-512`, `/icon-192`, `/apple-icon` | Exact-size renderers screenshotted into `/public` PNGs by the E2E script | no |

## Where the content comes from

**Nothing on the public site is hand-typed marketing fiction.**

- Every statistic (66 lessons, exercise/word counts, study hours) is derived
  at render time from the curriculum source by `src/lib/marketing/stats.ts`
  and cross-checked by `tests/marketing-content.test.ts`.
- The hero product preview is a faithful recreation of the real lesson
  player, populated with the real "Hello and Goodbye" lesson — the sentence
  builder in it is the actual `order` exercise from that lesson, and it works
  (`src/lib/marketing/preview-data.ts`).
- Feature statuses are honest: `live` only for what learners can use today;
  the AI tutor section describes the rule-based study coach accurately
  (engine built, in-app chat in development) — the coach even signs its
  messages "rule-based".
- Pricing reflects PRD §8: free today, beginner path free forever, premium
  planned with no invented prices.
- **No fabricated testimonials, learner counts, ratings or success claims
  appear anywhere** — this is a content policy enforced by tests.

## SEO layer

- `src/lib/site.ts` — brand strings, nav, `pageMetadata()` helper (title,
  description, canonical, OG + Twitter cards for every page).
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts`.
- Structured data: Organization + WebSite + FAQPage on the landing; FAQPage
  on `/faq`; Course ItemList on `/courses`; ContactPage / AboutPage marks.
- Brand imagery is generated, not designed by hand in a bitmap editor: the
  exact-size render routes are screenshotted by `scripts/e2e-public-site.sh`
  into `public/og/default.png` and the icon PNGs (real fonts, real mark).
- **Production canonicals**: set `NEXT_PUBLIC_SITE_URL` (e.g.
  `https://talksy.app`). The fallback (`http://localhost:3000`) keeps dev
  canonicals valid but must not ship.

## Compatibility

Old single-route deep links (`/#/lesson/a1-1-1`) are forwarded to
`/app#/lesson/a1-1-1` by `HashAppRedirect` on the landing page. The in-app
`#/login` `#/register` views remain as guard-fallbacks; the canonical auth
pages are the real routes.

## Contact form storage

`POST /api/contact` validates with Zod and stores into the `ContactMessage`
table (additive migration `public_site_contact_messages`), with a small
in-process rate limit (5/hour per IP). An admin surface for reading messages
can be added later without schema changes.

## Verification

`scripts/e2e-public-site.sh` (single-call server + agent-browser) covers:
brand-asset generation + PNG validation, every public page's key content,
the interactive sentence builder, register → app dashboard, contact form →
database row, old-hash-link forwarding, mobile menu, sitemap/robots/canonical/
OG/JSON-LD responses, and console errors. `tests/marketing-content.test.ts`
gates the honesty policy.
