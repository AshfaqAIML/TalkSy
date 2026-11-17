import type { GrammaticalRole } from "@/data/curriculum/types";

/**
 * Colour-coded grammatical roles — the shared visual language of the
 * Grammar School and the Sentence Lab.
 *
 * Design system (docs/design/TALKSY_DESIGN_SYSTEM.md):
 * • Content roles (subject, verb, object, complement, modifier, auxiliary)
 *   each get a dedicated `--role-*` token hue.
 * • Function words (determiner, preposition, conjunction) intentionally use
 *   neutral muted tokens — they recede, which mirrors the linguistic
 *   content/function distinction.
 * • Tokens flip automatically in dark theme, so no `dark:` pairs are needed.
 *
 * NOTE: class strings must stay literal — Tailwind only compiles classes it
 * can statically find in source.
 */

export interface RoleStyle {
  label: string;
  short: string;
  tileClass: string;
  chipClass: string;
  dotClass: string;
}

/** Function-word tile: neutral, recedes on purpose. */
const FUNCTION_NEUTRAL: Pick<RoleStyle, "tileClass" | "chipClass" | "dotClass"> = {
  tileClass: "bg-muted text-muted-foreground border-border",
  chipClass: "bg-muted text-muted-foreground border-border",
  dotClass: "bg-muted-foreground",
};

export const ROLE_STYLES: Record<GrammaticalRole, RoleStyle> = {
  subject: {
    label: "Subject",
    short: "S",
    tileClass: "bg-role-subject/10 text-role-subject border-role-subject/30",
    chipClass: "bg-role-subject/10 text-role-subject border-role-subject/25",
    dotClass: "bg-role-subject",
  },
  verb: {
    label: "Verb",
    short: "V",
    tileClass: "bg-role-verb/10 text-role-verb border-role-verb/30",
    chipClass: "bg-role-verb/10 text-role-verb border-role-verb/25",
    dotClass: "bg-role-verb",
  },
  object: {
    label: "Object",
    short: "O",
    tileClass: "bg-role-object/10 text-role-object border-role-object/30",
    chipClass: "bg-role-object/10 text-role-object border-role-object/25",
    dotClass: "bg-role-object",
  },
  complement: {
    label: "Complement",
    short: "C",
    tileClass: "bg-role-complement/10 text-role-complement border-role-complement/30",
    chipClass: "bg-role-complement/10 text-role-complement border-role-complement/25",
    dotClass: "bg-role-complement",
  },
  modifier: {
    label: "Modifier",
    short: "M",
    tileClass: "bg-role-modifier/10 text-role-modifier border-role-modifier/30",
    chipClass: "bg-role-modifier/10 text-role-modifier border-role-modifier/25",
    dotClass: "bg-role-modifier",
  },
  auxiliary: {
    label: "Helping verb",
    short: "aux",
    tileClass: "bg-role-auxiliary/10 text-role-auxiliary border-role-auxiliary/30",
    chipClass: "bg-role-auxiliary/10 text-role-auxiliary border-role-auxiliary/25",
    dotClass: "bg-role-auxiliary",
  },
  determiner: { label: "Determiner", short: "det", ...FUNCTION_NEUTRAL },
  preposition: { label: "Preposition", short: "prep", ...FUNCTION_NEUTRAL },
  conjunction: { label: "Conjunction", short: "conj", ...FUNCTION_NEUTRAL },
  negation: {
    label: "Negation",
    short: "not",
    tileClass: "bg-role-negation/10 text-role-negation border-role-negation/30",
    chipClass: "bg-role-negation/10 text-role-negation border-role-negation/25",
    dotClass: "bg-role-negation",
  },
  "question-word": {
    label: "Question word",
    short: "WH",
    tileClass: "bg-role-question/10 text-role-question border-role-question/30",
    chipClass: "bg-role-question/10 text-role-question border-role-question/25",
    dotClass: "bg-role-question",
  },
  punctuation: { label: "Punctuation", short: "·", ...FUNCTION_NEUTRAL },
};

/** The roles shown in the legend (main roles only). */
export const LEGEND_ROLES: GrammaticalRole[] = [
  "subject",
  "verb",
  "object",
  "complement",
  "modifier",
  "auxiliary",
];
