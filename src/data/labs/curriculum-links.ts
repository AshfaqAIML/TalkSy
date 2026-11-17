/**
 * TalkSy Four-Skill Laboratories → curriculum links.
 *
 * Every lab activity, listening exercise set, reading text and writing
 * assignment is mapped to the Core English Programme lesson(s) that teach
 * the language it practises. Links are authored as [chapter, lesson, reason]
 * triplets and resolved against PROGRAMME_LESSONS, so a bad pointer fails
 * validation instead of shipping a dead link.
 *
 * The learner-facing contract (shown in every lab hub and activity view):
 *   "This lab item practises what CH-13 lesson 6 teaches" → #/course-lesson/<slug>
 */

import { PROGRAMME_CHAPTERS, PROGRAMME_LESSONS } from "@/data/programme";

export type LabId = "speaking" | "listening" | "reading" | "writing";

export interface LabCurriculumLink {
  /** Programme lesson slug, e.g. "ch-13-l-06". */
  lessonSlug: string;
  /** Why this lesson supports the lab activity (shown to the learner). */
  reason: string;
}

/** Resolved link with display metadata for the UI. */
export interface ResolvedLabLink extends LabCurriculumLink {
  lessonTitle: string;
  chapterNumber: number;
  chapterTitle: string;
  chapterSlug: string;
}

/** Authoring format: [chapterNumber, lessonNumber (1-based), reason]. */
type LinkSpec = [number, number, string];

function lessonSlug(chapter: number, lesson: number): string {
  return `ch-${String(chapter).padStart(2, "0")}-l-${String(lesson).padStart(2, "0")}`;
}

function toLink(spec: LinkSpec): LabCurriculumLink {
  return { lessonSlug: lessonSlug(spec[0], spec[1]), reason: spec[2] };
}

// ---------------------------------------------------------------------------
// SPEAKING LAB
// ---------------------------------------------------------------------------

const SPEAKING_LINKS: Record<string, LinkSpec[]> = {
  // Beginner band
  "repeat-a-word": [
    [4, 1, "Letter sounds are the foundation of clear single words."],
    [6, 4, "Practise the words from the First Vocabulary chapter."],
  ],
  "repeat-a-sentence": [
    [8, 5, "Word order: subject + verb + object, exactly what you repeat here."],
    [1, 3, "Spoken and Written English introduces full spoken sentences."],
  ],
  "read-aloud": [
    [5, 1, "Reading fluency drills for three- and four-letter words."],
    [8, 6, "Reading simple sentences aloud with understanding."],
  ],
  "introduce-yourself": [
    [18, 1, "Introducing Yourself teaches the exact phrases this activity rehearses."],
    [11, 1, "Subject pronouns (I, my, you) power every self-introduction."],
  ],
  "speak-about-your-family": [
    [18, 2, "Introducing Your Family covers the family vocabulary and phrases."],
    [6, 1, "People and Family — the words you need for this task."],
  ],
  "daily-routine": [
    [13, 6, "Talking About Daily Routines — the model this activity follows."],
    [15, 4, "Adverbs of frequency (always, usually, never) describe routines."],
  ],
  // Elementary band
  "describe-an-object": [
    [15, 1, "Describing People and Things: the adjective language for objects."],
    [10, 5, "Nouns in Real Sentences anchors a/an/the when you name objects."],
  ],
  "answer-simple-questions": [
    [14, 1, "Yes/No questions — the first question type you answer here."],
    [14, 2, "WH-questions: what, where, when, who, how."],
  ],
  "describe-experiences": [
    [28, 3, "Describing Experiences models short spoken texts about what you did."],
    [19, 6, "Time expressions (yesterday, last week) organise experience stories."],
  ],
  "talk-about-familiar-places": [
    [16, 6, "Describing Places — there is / there are plus prepositions of place."],
    [16, 1, "Prepositions of place locate everything you describe."],
  ],
  "hold-conversations": [
    [18, 6, "Everyday Dialogues: the exchange patterns this role-play trains."],
    [14, 5, "Asking for Information in Real Life keeps the conversation going."],
  ],
  // Intermediate band
  "describe-pictures": [
    [17, 1, "Present continuous describes what is happening in a picture."],
    [16, 4, "There is / there are for what the picture contains."],
  ],
  "past-experiences": [
    [19, 5, "Negatives and questions with did for follow-up questions about the past."],
    [22, 1, "Present perfect foundations: experience vs finished time."],
  ],
  "explain-preferences": [
    [25, 5, "Comparing in Real Life: the language of preferring one thing."],
    [27, 2, "Because and so — giving reasons for your preferences."],
  ],
  "tell-short-stories": [
    [19, 6, "Time expressions and storytelling structure the narrative."],
    [20, 1, "Past continuous sets the scene of a story."],
  ],
  "give-directions": [
    [16, 3, "Movement prepositions: turn left, go past, across."],
    [14, 5, "Asking for and giving directions in real life."],
  ],
  "express-opinions": [
    [38, 1, "Expressing and Supporting Opinions — the B1 opinion toolkit."],
    [27, 3, "Although introduces balanced, complex opinions."],
  ],
  "discussions": [
    [38, 3, "Discussion Skills: agreeing, disagreeing and building on ideas."],
    [34, 4, "Reporting in Real Life — relaying what others said in a discussion."],
  ],
  // Advanced band
  "debates": [
    [55, 2, "Debate — advanced argumentation at C1 level."],
    [47, 1, "Complex Opinions and Evidence structure a debate case."],
  ],
  "interview-simulations": [
    [55, 4, "Interview Performance: answering under pressure."],
    [47, 5, "Handling Questions — thinking on your feet in interviews."],
  ],
  "presentations": [
    [55, 3, "Public Presentations at Level: delivery and structure."],
    [47, 3, "Presentation Structure: opening, body, close."],
  ],
  "negotiations": [
    [55, 1, "Negotiation — the C1 chapter for exactly this skill."],
    [47, 2, "Counterarguments and Negotiation language."],
  ],
  "impromptu-speaking": [
    [55, 5, "Spontaneity, Nuance and Storytelling — speaking without a script."],
    [45, 2, "Phrasal verbs for fluency keep spontaneous speech natural."],
  ],
  "storytelling": [
    [30, 4, "Narrative Sequencing: before, by the time, once."],
    [55, 5, "Spontaneity, Nuance and Storytelling at level."],
  ],
  "professional-communication": [
    [46, 5, "Coherence and Professional Tone in workplace speech."],
    [51, 1, "Register and Formality — choosing the right professional voice."],
  ],
};

// ---------------------------------------------------------------------------
// LISTENING LAB
// ---------------------------------------------------------------------------

const LISTENING_LINKS: Record<string, LinkSpec[]> = {
  // Beginner band
  "first-letter-sounds": [
    [4, 2, "Initial sounds — hearing how words begin."],
    [3, 1, "Vowels and consonants: the sound categories you separate by ear."],
  ],
  "similar-sounds-b-d-p": [
    [4, 3, "Final sounds — where b/d/p confusion shows up."],
    [56, 1, "Connected Speech introduces sound-level listening."],
  ],
  "numbers-you-hear": [
    [6, 4, "Numbers 1–20 and Everyday Objects."],
    [14, 2, "WH-questions with how many."],
  ],
  "everyday-objects": [
    [6, 4, "Everyday object vocabulary."],
    [10, 4, "Articles a/an/the around object nouns."],
  ],
  "greeting-phrases": [
    [18, 1, "Introducing Yourself — the greeting chunks you hear here."],
    [1, 1, "First English greetings and what English is."],
  ],
  "classroom-phrases": [
    [6, 5, "School and Home vocabulary."],
    [14, 4, "Imperatives — the form most classroom instructions take."],
  ],
  "what-time-is-it": [
    [16, 2, "Prepositions of time: at, on, in."],
    [13, 5, "Questions about daily time."],
  ],
  "daily-routines": [
    [13, 6, "Talking About Daily Routines."],
    [17, 6, "Actions Now — present simple vs continuous by ear."],
  ],
  // Elementary band
  "ordering-at-a-cafe": [
    [18, 4, "Asking for Information in Real Life."],
    [24, 5, "Food and Amounts in Real Life."],
  ],
  "checking-in-at-a-hotel": [
    [18, 6, "Everyday Dialogues — service conversations."],
    [14, 3, "Question Formation Practice for polite requests."],
  ],
  "following-instructions": [
    [14, 4, "Imperatives — the grammar of instructions."],
    [16, 3, "Movement prepositions: go straight, turn, past."],
  ],
  "questions-and-answers": [
    [14, 1, "Yes/No questions by ear."],
    [14, 2, "WH-questions by ear."],
  ],
  "the-ant-and-the-grasshopper": [
    [19, 6, "Time expressions and storytelling."],
    [27, 1, "And, but, or — how simple stories connect events."],
  ],
  "the-girl-and-the-wolf": [
    [20, 1, "Past continuous sets scenes in simple stories."],
    [19, 1, "Regular and irregular past verbs in narrative."],
  ],
  "the-fire-drill": [
    [14, 4, "Imperatives — the grammar of every instruction."],
    [16, 3, "Movement prepositions: out, upstairs, outside."],
  ],
  "at-hotel-reception": [
    [18, 6, "Everyday Dialogues — service conversations."],
    [14, 3, "Question formation practice for polite exchanges."],
  ],
  "the-long-walk-home": [
    [30, 1, "Past perfect within a personal narrative."],
    [20, 1, "Past continuous for scene-setting mid-story."],
  ],
  "the-young-inventor": [
    [34, 1, "Direct speech and backshift in interview answers."],
    [37, 1, "Complex sentences carry interview reasoning."],
  ],
  "the-honey-bee-report": [
    [10, 2, "Singular and plural — counts in informational passages."],
    [31, 1, "Perfect forms describe ongoing colony behaviour."],
  ],
  "the-design-pitch": [
    [47, 3, "Presentation Structure — the pitch's signposting."],
    [25, 1, "Comparatives carry the before/after numbers."],
  ],
  "the-sleep-lecture": [
    [44, 1, "Advanced connectors organise the lecture."],
    [50, 1, "Hedging and caution in academic claims."],
  ],
  // Intermediate band
  "weekend-plans": [
    [21, 1, "Will for spontaneous plans."],
    [21, 3, "Present continuous for arrangements."],
  ],
  "choosing-a-holiday": [
    [25, 1, "Comparative adjectives — comparing holiday options."],
    [21, 2, "Be going to for plans."],
  ],
  "podcast-interview": [
    [34, 1, "Direct speech and backshift — interview answers reported."],
    [29, 1, "Tense comparison keeps long interview answers clear."],
  ],
  "the-lighthouse-keeper-radio": [
    [30, 1, "Past perfect in narrative passages."],
    [29, 1, "Tense comparison and usage in informational passages."],
  ],
  "life-in-the-antarctic": [
    [37, 1, "Complex sentences carry dense factual listening."],
    [31, 1, "Continuous and perfect forms in descriptive passages."],
  ],
  // Advanced band
  "at-the-train-station": [
    [45, 4, "Register, connotation and natural combinations in fast speech."],
    [56, 1, "Connected speech — why stations sound fast."],
  ],
  "making-plans-on-the-phone": [
    [32, 3, "Unless and everyday conditionals in rapid agreement."],
    [56, 2, "Stress and rhythm of natural phone speech."],
  ],
  "conference-talk": [
    [47, 3, "Presentation Structure — follow a talk's signposting."],
    [44, 1, "Advanced connectors signal a lecture's organisation."],
  ],
  "seminar-discussion": [
    [48, 1, "Critical Reading skills applied to academic discussion."],
    [50, 1, "Nuance and hedging in seminar arguments."],
  ],
  "a-job-interview": [
    [55, 4, "Interview Performance — what employers listen for."],
    [46, 5, "Coherence and Professional Tone."],
  ],
  "project-update-meeting": [
    [42, 1, "Passive constructions common in status updates."],
    [44, 1, "Advanced connectors structure meeting talk."],
  ],
};

// ---------------------------------------------------------------------------
// READING ROOM
// ---------------------------------------------------------------------------

const READING_LINKS: Record<string, LinkSpec[]> = {
  "first-classroom-words": [[6, 5, "School and Home — the words this text uses."]],
  "everyday-greetings": [[18, 1, "Introducing Yourself — greeting phrases in context."]],
  "all-about-me": [
    [11, 3, "Possessive adjectives (my, your, his) in a self-description."],
    [12, 1, "Be — the verb behind every 'I am' sentence."],
  ],
  "mias-day": [[13, 6, "Talking About Daily Routines — the passage's grammar."]],
  "at-the-park": [[17, 1, "Present continuous describes the park scene."]],
  "the-busy-market": [
    [24, 2, "Much and many at the market."],
    [15, 1, "Describing People and Things."],
  ],
  "the-lost-key": [
    [19, 3, "Irregular verbs I — the story's past tense core."],
    [19, 6, "Time expressions and storytelling."],
  ],
  "a-rainy-sunday": [
    [20, 1, "Past continuous — a rainy afternoon scene."],
    [27, 2, "Because and so connect the day's events."],
  ],
  "at-the-coffee-shop": [
    [18, 6, "Everyday Dialogues — the conversation pattern."],
    [24, 5, "Food and amounts in a café order."],
  ],
  "my-hometown-by-the-sea": [
    [16, 6, "Describing Places — there is / there are in a town description."],
    [25, 1, "Comparatives describe what a hometown has more or less of."],
  ],
  "the-blue-whale": [
    [37, 1, "Complex sentences in informational writing."],
    [35, 1, "Relative clauses define the animal facts."],
  ],
  "the-story-of-tea": [
    [33, 1, "Passive voice — how tea is grown, dried and drunk."],
    [34, 4, "Reporting what history says."],
  ],
  "the-lighthouse-keeper": [
    [30, 4, "Narrative sequencing holds the story together."],
    [30, 1, "Past perfect for the keeper's earlier life."],
  ],
  "why-do-we-dream": [
    [43, 1, "Participles and advanced clauses in explanatory prose."],
    [36, 1, "Gerunds and infinitives in scientific explanation."],
  ],
  "the-hidden-life-of-ants": [
    [35, 1, "Relative clauses carry the dense facts."],
    [31, 1, "Perfect forms describe long-term colony behaviour."],
  ],
  "should-school-start-later": [
    [32, 1, "Zero and first conditionals structure the argument."],
    [38, 1, "Expressing and supporting opinions."],
  ],
  "the-case-for-a-four-day-week": [
    [40, 1, "Advanced conditionals power the editorial's case."],
    [51, 1, "Register and formality in persuasive prose."],
  ],
  "who-pays-for-your-coffee": [
    [53, 1, "Analysing arguments in long-form journalism."],
    [50, 1, "Hedging and nuance in the writer's claims."],
  ],
  "hybrid-work-policy": [
    [54, 4, "Professional correspondence and document language."],
    [42, 1, "Passive constructions in policy text."],
  ],
  "the-photograph": [
    [43, 1, "Participles and advanced clauses in literary narrative."],
    [49, 1, "Advanced grammatical structures in literary prose."],
  ],
  "what-makes-a-city-walkable": [
    [53, 4, "Reading complex texts with an analytical lens."],
    [48, 3, "Writer's attitude and tone."],
  ],
};

// ---------------------------------------------------------------------------
// WRITING STUDIO
// ---------------------------------------------------------------------------

const WRITING_LINKS: Record<string, LinkSpec[]> = {
  "alphabet-writing": [[2, 4, "Writing Letters and Alphabetical Order."]],
  spelling: [[5, 3, "Word families make spelling predictable."]],
  "copying-vocabulary": [[6, 1, "People and Family vocabulary to copy."]],
  "completing-words": [[5, 4, "Letter combinations and syllables complete words."]],
  "constructing-sentences": [[8, 5, "Word order: subject + verb + object."]],
  "rearranging-words": [[8, 5, "Word order practice, one sentence at a time."]],
  "affirmative-sentences": [[13, 3, "Affirmative sentences in the present simple."]],
  "negative-sentences": [[13, 4, "Negative sentences with don't/doesn't."]],
  "writing-questions": [[14, 3, "Question formation practice."]],
  "self-introduction-writing": [[18, 1, "Introducing Yourself — then write it."]],
  "family-descriptions": [[18, 2, "Introducing Your Family."]],
  "daily-routine-writing": [[13, 6, "Talking About Daily Routines, in writing."]],
  "describing-a-place": [[16, 6, "Describing Places — there is / there are."]],
  "describing-an-object": [[15, 1, "Describing People and Things."]],
  "connected-sentences": [[27, 1, "And, but, or — joining your first sentences."]],
  "paragraph-construction": [[28, 1, "Paragraph structure and topic sentences."]],
  "descriptive-writing": [[28, 2, "Topic sentences and supporting detail."]],
  "narrative-writing": [[30, 4, "Narrative sequencing in written stories."]],
  "personal-experiences": [[28, 3, "Describing Experiences."]],
  letters: [[38, 2, "Structuring paragraphs and short essays — letters."]],
  emails: [[28, 4, "Writing Simple Emails."]],
  summaries: [[37, 1, "Complex sentences and cohesion in summaries."]],
  "short-essays": [[38, 2, "Structuring Paragraphs and Short Essays."]],
  "formal-letters": [[46, 1, "Formal Emails and letters."]],
  "professional-emails": [[46, 1, "Formal Emails at work."]],
  reports: [[46, 2, "Reports and Proposals — report structure."]],
  proposals: [[46, 2, "Reports and Proposals — proposal structure."]],
  "argumentative-essays": [[46, 3, "Structured Essays — the argumentative form."]],
  "opinion-writing": [[38, 1, "Expressing and Supporting Opinions."]],
  "analytical-writing": [[54, 3, "Analytical Essays."]],
  "structured-reports": [[54, 2, "Analytical Reports and Proposals."]],
  "professional-communication-writing": [[54, 4, "Professional Correspondence."]],
};

// ---------------------------------------------------------------------------

const RAW_LINKS: Record<LabId, Record<string, LinkSpec[]>> = {
  speaking: SPEAKING_LINKS,
  listening: LISTENING_LINKS,
  reading: READING_LINKS,
  writing: WRITING_LINKS,
};

/** Authored links (slug → links), for validation and integrity tests. */
export const LAB_CURRICULUM_LINKS: Record<LabId, Record<string, LabCurriculumLink[]>> =
  Object.fromEntries(
    (Object.keys(RAW_LINKS) as LabId[]).map((lab) => [
      lab,
      Object.fromEntries(
        Object.entries(RAW_LINKS[lab]).map(([slug, specs]) => [slug, specs.map(toLink)]),
      ),
    ]),
  ) as Record<LabId, Record<string, LabCurriculumLink[]>>;

// Lesson/chapter lookup tables (built once).
const LESSON_BY_SLUG = new Map(PROGRAMME_LESSONS.map((l) => [l.slug, l]));
const CHAPTER_BY_NUMBER = new Map<number, { id: string; slug: string; title: string }>(
  PROGRAMME_CHAPTERS.map((c) => [
    c.number,
    { id: c.id, slug: c.slug, title: c.title },
  ]),
);

/**
 * Resolve the authored links for a lab item into display-ready rows.
 * Unknown lesson slugs are dropped here (validation catches them loudly).
 */
export function resolveLabLinks(lab: LabId, slug: string): ResolvedLabLink[] {
  const links = LAB_CURRICULUM_LINKS[lab][slug] ?? [];
  const resolved: ResolvedLabLink[] = [];
  for (const link of links) {
    const lesson = LESSON_BY_SLUG.get(link.lessonSlug);
    if (!lesson) continue;
    const chapterNumber = Number(lesson.chapterId.replace("CH-", ""));
    const chapter = CHAPTER_BY_NUMBER.get(chapterNumber);
    resolved.push({
      lessonSlug: link.lessonSlug,
      reason: link.reason,
      lessonTitle: lesson.title,
      chapterNumber,
      chapterTitle: chapter?.title ?? `Chapter ${chapterNumber}`,
      chapterSlug: chapter?.slug ?? `ch-${String(chapterNumber).padStart(2, "0")}`,
    });
  }
  return resolved;
}

/**
 * Integrity validation — re-asserted by tests:
 * - every lab item has at least one link;
 * - every link resolves to a real programme lesson;
 * - every reason is non-empty;
 * - no links for unknown slugs (stale entries after content renames).
 */
export function validateLabCurriculumLinks(expectedSlugs: {
  speaking: string[];
  listening: string[];
  reading: string[];
  writing: string[];
}): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  for (const lab of ["speaking", "listening", "reading", "writing"] as LabId[]) {
    const expected = new Set(expectedSlugs[lab]);
    const authored = LAB_CURRICULUM_LINKS[lab];
    for (const [slug, links] of Object.entries(authored)) {
      if (!expected.has(slug)) {
        errors.push(`${lab}: link entry for unknown item "${slug}"`);
      }
      if (links.length === 0) errors.push(`${lab}: ${slug} has no links`);
      for (const link of links) {
        if (!link.reason.trim()) errors.push(`${lab}/${slug}: empty reason`);
        if (!LESSON_BY_SLUG.has(link.lessonSlug)) {
          errors.push(
            `${lab}/${slug}: lesson "${link.lessonSlug}" does not exist in the programme`,
          );
        }
      }
    }
    for (const slug of expected) {
      if (!authored[slug] || authored[slug].length === 0) {
        errors.push(`${lab}: missing curriculum link for "${slug}"`);
      }
    }
  }
  return { ok: errors.length === 0, errors };
}
