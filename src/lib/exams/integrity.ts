/**
 * Examination integrity constants.
 *
 * Single source of truth for every honesty statement the exam engine makes.
 * These strings are surfaced on the selection screen, inside the player, on
 * every result report and in the history views, and tests assert their
 * presence — so the platform can never mistake practice material for
 * official examination content, or an estimate for an official score.
 *
 * Rules:
 *   1. All questions are authored in-house; none reproduces an official
 *      paper, a paid preparation book or protected course material.
 *   2. No result produced here is an official IELTS or ETS score.
 *   3. Trademark ownership is acknowledged wherever exams are named.
 */

export const INTEGRITY_CONTENT_NOTE =
  "Original EnglishPath practice material written in the style of the exam — not an official IELTS paper or ETS test.";

export const INTEGRITY_SCORE_NOTE =
  "Estimated result from practice material — not an official IELTS or ETS score.";

export const INTEGRITY_SIMULATION_NOTE =
  "Practice simulation: controls mirror the current computer-delivered format. Where the real examination does not allow an action (replaying audio, going back), it is unavailable here.";

export const INTEGRITY_TRADEMARK_NOTE =
  "IELTS is jointly owned by the British Council, IDP: IELTS Australia and Cambridge University Press & Assessment. TOEFL and TOEFL iBT are registered trademarks of Educational Testing Service (ETS). This academy is not affiliated with, endorsed by or associated with any of them. All practice materials are original EnglishPath content.";

/**
 * PROMPT 51: adaptive practice honesty. TalkSy calibrates difficulty with its
 * own simple accuracy heuristic — it never claims to reproduce ETS's
 * proprietary multistage adaptive algorithm or its item calibrations.
 */
export const INTEGRITY_ADAPTIVE_NOTE =
  "Adaptive practice here means TalkSy's own difficulty-targeting heuristic based on your recent accuracy — it is not ETS's proprietary adaptive algorithm, and no adaptivity is used on the real test's practice claims.";

/** PROMPT 51: unfinished attempts keep every saved response. */
export const INTEGRITY_UNFINISHED_NOTE =
  "Unfinished attempt — every answer you saved is preserved and recorded in your history.";

/** Provenance label stored on every seeded question row. */
export const QUESTION_SOURCE_ORIGINAL = "original-practice";

/** Content statuses a question row may carry. */
export const QUESTION_CONTENT_STATUSES = ["draft", "in-review", "published"] as const;
export type QuestionContentStatus = (typeof QUESTION_CONTENT_STATUSES)[number];

