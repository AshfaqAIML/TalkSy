/**
 * IELTS Speaking Masterclass — practice cue cards (PROMPT 47, Parts 4 and 8).
 *
 * The simulation layer of the Part 2 bank: one further, previously unseen
 * cue card per taught description family, written for independent practice
 * under test conditions. Each card keeps the official Part 2 frame — the
 * task line, three "You should say" prompts, the closing "and explain" line
 * and the 60 / 60–120 second timings — and adds vocabulary hints the learner
 * may glance at only after the preparation minute, plus two short
 * rounding-off questions in the examiner's voice.
 *
 * There is deliberately no model answer here: these cards exist so the
 * learner speaks from their own ideas. Nothing in this file is a script to
 * memorise, and nothing in it ties any national accent to a higher score.
 */

import type { SpeakingPracticeCueCard } from "./types";
import { SPEAKING_BANK_SOURCE_NOTE } from "./types";

export const speakingBankPracticeCueCards: SpeakingPracticeCueCard[] = [
// ---------------------------------------------------------------------------
// 1. People — an old person you find inspiring (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-people",
  title: "Practice cue card — an old person who inspires",
  family: "people",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  task: "Describe an old person you find inspiring.",
  situation:
    "The test moves into Part 2, and this round's theme is people who have left an impression on you.",
  bullets: ["who they are", "how you know of them", "what they do or did"],
  extension: "and explain why they inspire you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "resilience",
    "in her eighties",
    "she's been through a lot",
    "takes life as it comes",
    "never slows down",
    "a twinkle in her eye",
    "I look up to her",
    "set in her ways",
  ],
  roundingQuestions: [
    "Do you think older people get the respect they deserve today?",
    "What can the young learn from the old, and the other way round?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Places — a quiet place you like to go to (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-places",
  title: "Practice cue card — a quiet place you return to",
  family: "places",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a quiet place you like to go to.",
  situation:
    "Having finished Part 1, you are now given a longer turn on the subject of places that put you at ease.",
  bullets: ["where it is", "how you found it", "what you do there"],
  extension: "and explain why you keep going back.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "tucked away",
    "a real haven",
    "the daily hubbub",
    "somewhere to clear my head",
    "it's nothing fancy",
    "I stumbled across it",
    "away from it all",
    "peace and quiet",
  ],
  roundingQuestions: [
    "Is it harder to find quiet places now than it used to be?",
    "Why do some people actually prefer noisy, crowded places?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Events — a competition or match you watched or took part in (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-events",
  title: "Practice cue card — a competition you remember",
  family: "events",
  difficulty: 2,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe a competition or match you watched or took part in.",
  situation:
    "The second stage of the test begins with a card about something you watched or joined in.",
  bullets: ["what it was", "who was involved", "how it ended"],
  extension: "and explain how you felt about the result.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the atmosphere",
    "on the edge of my seat",
    "it went to extra time",
    "we were trailing",
    "a real nail-biter",
    "the crowd went wild",
    "down to the wire",
    "in the end",
  ],
  roundingQuestions: [
    "Do you enjoy watching competitions more than taking part in them?",
    "Why do you think people get so emotional about sport?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Experiences — a time you received unexpected help (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-experiences",
  title: "Practice cue card — unexpected help",
  family: "experiences",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  task: "Describe a time you received unexpected help.",
  situation:
    "Part 2 continues here with a prompt about a moment when things turned out better than expected.",
  bullets: ["what you were doing", "what happened", "who helped you"],
  extension: "and explain what the experience taught you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "out of the blue",
    "I was completely stuck",
    "went out of their way",
    "a complete stranger",
    "at my wits' end",
    "I owe them one",
    "it restored my faith",
    "so grateful",
  ],
  roundingQuestions: [
    "Do you find it easy to accept help from strangers?",
    "Should children be taught how to offer help safely?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Objects — a gift you gave someone (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-objects",
  title: "Practice cue card — a gift you gave",
  family: "objects",
  difficulty: 2,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a gift you gave someone.",
  situation: "The examiner now hands you a card about giving rather than receiving.",
  bullets: ["what the gift was", "who you gave it to", "why you chose it"],
  extension: "and explain how they reacted.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it's the thought that counts",
    "I had it engraved",
    "her face lit up",
    "I'd had my eye on it for ages",
    "wrapped it up carefully",
    "she was thrilled",
    "a personal touch",
    "handmade",
  ],
  roundingQuestions: [
    "Do you prefer giving presents or receiving them?",
    "Why can choosing a gift be so stressful?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Activities — an activity you do to relax (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-activities",
  title: "Practice cue card — an activity that relaxes you",
  family: "activities",
  difficulty: 2,
  proficiency: "foundation",
  skill: "development",
  task: "Describe an activity you do to relax.",
  situation: "This long turn asks you to talk about how you switch off at the end of a day.",
  bullets: ["what it involves", "when you do it", "how you discovered it"],
  extension: "and explain why it relaxes you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it helps me unwind",
    "switches my mind off",
    "clears my head",
    "I do it on autopilot",
    "I lose track of time",
    "after a long day",
    "it recharges me",
    "my idea of therapy",
  ],
  roundingQuestions: [
    "Do you find it harder to relax than your parents did?",
    "Is exercise the best way to deal with stress?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Achievements — something difficult you completed (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-achievements",
  title: "Practice cue card — something difficult you finished",
  family: "achievements",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe something difficult you completed.",
  situation: "The next card invites you to look back on something that demanded real effort.",
  bullets: ["what it was", "what made it hard", "how you got through it"],
  extension: "and explain what completing it changed for you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "moments I nearly gave up",
    "I took it one step at a time",
    "it pushed me to my limits",
    "I saw it through",
    "a real sense of accomplishment",
    "looking back",
    "worth every struggle",
    "a weight off my shoulders",
  ],
  roundingQuestions: [
    "Is achievement usually down to talent or to persistence?",
    "Why do some people give up just before the finish?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Books — a book or story you read as a child (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-books",
  title: "Practice cue card — a story from childhood",
  family: "books",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a book or story you read as a child.",
  situation: "Part 2 turns to reading, and to the stories that stay with us from childhood.",
  bullets: [
    "what it was about",
    "who read it with you or gave it to you",
    "how it ended",
  ],
  extension: "and explain why you still remember it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it stayed with me",
    "the illustrations",
    "a happy ending",
    "it fired my imagination",
    "we curled up together",
    "one more chapter",
    "my grandmother read it to me",
    "dog-eared pages",
  ],
  roundingQuestions: [
    "Should parents read to their children every night?",
    "Will printed stories survive another generation of screens?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Films — a film you did not enjoy (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-films",
  title: "Practice cue card — a film that let you down",
  family: "films",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  task: "Describe a film you did not enjoy.",
  situation: "The examiner sets a longer turn on a cinema visit that went wrong.",
  bullets: ["what the film was", "why you watched it", "what disappointed you"],
  extension: "and explain whether you would recommend it to anyone.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the plot fell flat",
    "I'd heard good things",
    "it dragged",
    "the trailer promised more",
    "I couldn't wait for it to end",
    "a waste of two hours",
    "it didn't live up to the hype",
    "the reviews were glowing",
  ],
  roundingQuestions: [
    "Do film trailers often promise more than they deliver?",
    "Why do people enjoy arguing about films they disliked?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Travel — a day trip you remember well (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-travel",
  title: "Practice cue card — a day trip that stayed with you",
  family: "travel",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  task: "Describe a day trip you remember well.",
  situation: "This card asks you to recall one particular day away from home.",
  bullets: ["where you went", "what you did", "what went wrong or right"],
  extension: "and explain why it stayed with you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "we set off at dawn",
    "it poured with rain",
    "we made the most of it",
    "the highlight was",
    "we got hopelessly lost",
    "worth the journey",
    "I'd go back tomorrow",
    "a real adventure",
  ],
  roundingQuestions: [
    "Do you prefer a planned trip or a spontaneous one?",
    "Why do people take day trips instead of longer holidays?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 11. Learning — a mistake you learned from (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-p2x-learning",
  title: "Practice cue card — a mistake that taught you something",
  family: "learning",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a mistake you learned from.",
  situation:
    "The final long turn of this practice round is about getting things wrong and growing from it.",
  bullets: ["what the mistake was", "what its consequences were", "what you learned"],
  extension: "and explain how it changed what you do now.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "I paid the price",
    "in hindsight",
    "a hard lesson",
    "it could have been avoided",
    "I've been careful ever since",
    "owning up to it",
    "it changed my habits for good",
    "a close call",
  ],
  roundingQuestions: [
    "Are mistakes the fastest way to learn?",
    "Should schools make more use of failure instead of punishing it?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
