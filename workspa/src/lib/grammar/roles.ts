import type { GrammaticalRole } from "@/data/curriculum/types";

/**
 * Colour-coded grammatical roles — the shared visual language of the
 * Grammar School and the Sentence Lab.
 */

export interface RoleStyle {
  label: string;
  short: string;
  tileClass: string;
  chipClass: string;
  dotClass: string;
}

export const ROLE_STYLES: Record<GrammaticalRole, RoleStyle> = {
  subject: {
    label: "Subject",
    short: "S",
    tileClass: "bg-emerald-100 text-emerald-900 border-emerald-400",
    chipClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    dotClass: "bg-emerald-500",
  },
  verb: {
    label: "Verb",
    short: "V",
    tileClass: "bg-rose-100 text-rose-900 border-rose-400",
    chipClass: "bg-rose-100 text-rose-800 border-rose-300",
    dotClass: "bg-rose-500",
  },
  object: {
    label: "Object",
    short: "O",
    tileClass: "bg-amber-100 text-amber-900 border-amber-400",
    chipClass: "bg-amber-100 text-amber-800 border-amber-300",
    dotClass: "bg-amber-500",
  },
  complement: {
    label: "Complement",
    short: "C",
    tileClass: "bg-violet-100 text-violet-900 border-violet-400",
    chipClass: "bg-violet-100 text-violet-800 border-violet-300",
    dotClass: "bg-violet-500",
  },
  modifier: {
    label: "Modifier",
    short: "M",
    tileClass: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-400",
    chipClass: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    dotClass: "bg-fuchsia-500",
  },
  auxiliary: {
    label: "Helping verb",
    short: "aux",
    tileClass: "bg-orange-100 text-orange-900 border-orange-400",
    chipClass: "bg-orange-100 text-orange-800 border-orange-300",
    dotClass: "bg-orange-500",
  },
  determiner: {
    label: "Determiner",
    short: "det",
    tileClass: "bg-stone-100 text-stone-700 border-stone-400",
    chipClass: "bg-stone-100 text-stone-700 border-stone-300",
    dotClass: "bg-stone-400",
  },
  preposition: {
    label: "Preposition",
    short: "prep",
    tileClass: "bg-teal-100 text-teal-900 border-teal-400",
    chipClass: "bg-teal-100 text-teal-800 border-teal-300",
    dotClass: "bg-teal-500",
  },
  conjunction: {
    label: "Conjunction",
    short: "conj",
    tileClass: "bg-lime-100 text-lime-900 border-lime-500",
    chipClass: "bg-lime-100 text-lime-800 border-lime-400",
    dotClass: "bg-lime-500",
  },
  negation: {
    label: "Negation",
    short: "not",
    tileClass: "bg-red-100 text-red-900 border-red-400",
    chipClass: "bg-red-100 text-red-800 border-red-300",
    dotClass: "bg-red-500",
  },
  "question-word": {
    label: "Question word",
    short: "WH",
    tileClass: "bg-cyan-100 text-cyan-900 border-cyan-500",
    chipClass: "bg-cyan-100 text-cyan-800 border-cyan-400",
    dotClass: "bg-cyan-500",
  },
  punctuation: {
    label: "Punctuation",
    short: "·",
    tileClass: "bg-muted text-muted-foreground border-border",
    chipClass: "bg-muted text-muted-foreground border-border",
    dotClass: "bg-muted-foreground",
  },
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
