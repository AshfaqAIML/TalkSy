/**
 * IELTS Speaking Masterclass — practice cue cards batch B (PROMPT 54
 * question-bank expansion).
 *
 * A second wave of unseen Part 2 simulation cards for the practice layer:
 * twenty-five further prompts spread across six description families —
 * people, places, events, experiences, objects and activities — with five
 * difficulty tiers represented five times each, so a simulation round can
 * be calibrated to any learner. Each card keeps the official Part 2 frame —
 * task line, three "You should say" prompts, the closing "and explain" line
 * and the 60 / 60–120 second timings — plus vocabulary hints the learner
 * may glance at only AFTER the preparation minute, and two rounding-off
 * questions in the examiner's voice.
 *
 * As across the whole practice layer there is deliberately no model answer
 * here: these cards exist so the learner speaks from their own ideas, and
 * every prompt is answerable by a candidate from any country. Nothing in
 * this file is a script to memorise, and nothing ties any national accent
 * to a higher score — the criterion is being easy to understand.
 */

import { SPEAKING_BANK_SOURCE_NOTE, type SpeakingPracticeCueCard } from "./types";

export const practiceCardsB: SpeakingPracticeCueCard[] = [

// ---------------------------------------------------------------------------
// 1. People — a teacher who helped you (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-teacher-who-helped",
  title: "Practice cue card — a teacher who helped you",
  family: "people",
  domain: "society",
  difficulty: 2,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a teacher who has helped you with your studies.",
  situation:
    "The Part 2 card this round is about someone who guided you through a subject you found difficult.",
  bullets: ["who the teacher is", "what subject they taught", "how they helped you"],
  extension: "and explain what made their help so valuable.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "patient",
    "went the extra mile",
    "broke things down",
    "believed in me",
    "stayed behind after class",
    "gave me confidence",
    "a good listener",
    "I can't thank them enough",
  ],
  roundingQuestions: [
    "What qualities make a teacher memorable?",
    "Do people learn better from teachers or from books?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. People — a relative who makes people laugh (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-funny-relative",
  title: "Practice cue card — the relative who makes everyone laugh",
  family: "people",
  domain: "society",
  difficulty: 1,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe a relative who makes people laugh.",
  situation:
    "This long turn asks you to introduce the family member whose jokes everybody waits for.",
  bullets: [
    "who this relative is",
    "what they say or do that is funny",
    "how the rest of the family reacts",
  ],
  extension: "and explain why people enjoy being around them.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the family joker",
    "cracks everyone up",
    "tells the same stories",
    "does imitations",
    "a real character",
    "in stitches",
    "lightens the mood",
    "the life and soul of the party",
  ],
  roundingQuestions: [
    "Is humour important in family life?",
    "Can anyone learn to be funny, or is it something you are born with?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. People — a stranger who helped you (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-helpful-stranger",
  title: "Practice cue card — a stranger who stepped in",
  family: "people",
  domain: "society",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a stranger who once helped you.",
  situation:
    "The examiner deals a card about a person you had never met before who made your day easier.",
  bullets: ["what you were doing at the time", "what this person was like", "what they did for you"],
  extension: "and explain how their kindness affected you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "out of nowhere",
    "didn't hesitate",
    "made a special effort",
    "expected nothing in return",
    "a small gesture",
    "my faith in people",
    "I've never forgotten it",
    "kindness from a stranger",
  ],
  roundingQuestions: [
    "Are people less willing to help strangers than in the past?",
    "Why do some people hesitate before helping someone they do not know?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. People — a friend with a special talent (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-talented-friend",
  title: "Practice cue card — a friend with a special talent",
  family: "people",
  domain: "society",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a friend who has a special talent.",
  situation:
    "This card invites you to talk about somebody you know whose ability has always impressed you.",
  bullets: ["who the friend is", "what their talent is", "how they developed it"],
  extension: "and explain how you feel about their talent.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a natural flair",
    "gifted",
    "picked it up quickly",
    "hours of practice",
    "makes it look effortless",
    "born with it",
    "honed her technique",
    "it blows me away",
  ],
  roundingQuestions: [
    "Does natural talent matter more than hard work?",
    "Should schools do more to spot talent early?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. People — someone well known in your area (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-local-hero",
  title: "Practice cue card — a well-known local person",
  family: "people",
  domain: "society",
  difficulty: 5,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a person who is well known in your area.",
  situation:
    "The long turn moves to your neighbourhood and the people everybody there seems to recognise.",
  bullets: [
    "who this person is",
    "how people in your area know of them",
    "what they are known for locally",
  ],
  extension: "and explain why you think they are admired.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a household name",
    "a local legend",
    "everyone knows their face",
    "does a lot for the community",
    "down to earth",
    "shuns the limelight",
    "respected by all generations",
    "put the area on the map",
  ],
  roundingQuestions: [
    "Do local role models matter more than famous ones?",
    "Why do communities like having people they can be proud of?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Places — a quiet place you go to think (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-quiet-place",
  title: "Practice cue card — a quiet place to think",
  family: "places",
  domain: "everyday",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a quiet place where you go to think.",
  situation:
    "This round's card asks about the spot you head for when you need time alone with your thoughts.",
  bullets: [
    "where it is",
    "how often you go there",
    "what you think about when you are there",
  ],
  extension: "and explain why it helps you think.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a retreat",
    "free from noise",
    "collect my thoughts",
    "the stillness",
    "my thoughts settle",
    "away from the crowds",
    "nothing to distract me",
    "where I do my clearest thinking",
  ],
  roundingQuestions: [
    "Do people need time alone as much as time with others?",
    "Why do some people think better on a walk?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Places — a street market you enjoy (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-market-street",
  title: "Practice cue card — a street market you enjoy",
  family: "places",
  domain: "culture",
  difficulty: 2,
  proficiency: "foundation",
  skill: "pronunciation",
  task: "Describe a street market you enjoy going to.",
  situation:
    "The card is about a market where the stalls line the street and the sellers call out their prices.",
  bullets: ["where the market is", "what is sold there", "what the atmosphere is like"],
  extension: "and explain what keeps drawing you back.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "bustling",
    "stalls line the street",
    "traders calling out",
    "haggling",
    "the smell of fresh produce",
    "locally grown",
    "it draws a crowd",
    "a feast for the senses",
  ],
  roundingQuestions: [
    "Do you prefer markets or shopping centres?",
    "Why do street markets remain popular in many countries?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Places — your first school (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-first-school",
  title: "Practice cue card — your first school",
  family: "places",
  domain: "culture",
  difficulty: 1,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe the first school you went to.",
  situation:
    "The examiner asks you to cast your mind back to the very beginning of your school days.",
  bullets: [
    "where the school was",
    "what it looked like",
    "what you remember most about it",
  ],
  extension: "and explain how you feel about it now.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "my earliest memory",
    "the school yard",
    "my first teacher",
    "nervous on the first day",
    "everything seemed huge",
    "settled in quickly",
    "seeing it again in my mind",
    "a happy memory",
  ],
  roundingQuestions: [
    "Are people's first memories of school usually happy ones?",
    "Has school life changed much since your parents were young?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Places — a place where people swim (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-place-to-swim",
  title: "Practice cue card — where people go swimming",
  family: "places",
  domain: "everyday",
  difficulty: 4,
  proficiency: "advanced",
  skill: "grammar",
  task: "Describe a place where people go swimming in your area.",
  situation:
    "This card is about a spot in your region — a pool, a river or a stretch of coast — where swimmers gather.",
  bullets: ["where this place is", "who swims there", "what it is like on a busy day"],
  extension: "and explain why it is popular with swimmers.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "an open-air pool",
    "a safe stretch of water",
    "lifeguards on duty",
    "packed out in summer",
    "the regulars",
    "calm water",
    "going for a dip",
    "busy all season",
  ],
  roundingQuestions: [
    "Should every child learn to swim at school?",
    "Why do some people swim outdoors even in cold weather?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Places — a green space in a city you know (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-green-city-spot",
  title: "Practice cue card — a green city space",
  family: "places",
  domain: "environment",
  difficulty: 5,
  proficiency: "advanced",
  skill: "interaction",
  task: "Describe a green space in a city you know well.",
  situation:
    "The next long turn asks you to talk about a park or garden that offers city dwellers a breath of fresh air.",
  bullets: ["where it is", "what people use it for", "how it changes through the year"],
  extension: "and explain why it matters to the city.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "an oasis of green",
    "city dwellers",
    "tree-lined paths",
    "in full bloom",
    "a meeting point",
    "the city's green lung",
    "pockets of greenery",
    "somewhere to breathe",
  ],
  roundingQuestions: [
    "Should cities be obliged to protect their green spaces?",
    "Do parks bring different groups of people together?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 11. Events — a school competition (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-school-competition",
  title: "Practice cue card — a school competition",
  family: "events",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  task: "Describe a competition you entered when you were at school.",
  situation:
    "The card takes you back to a contest at school — sporting, academic or artistic — that you joined yourself.",
  bullets: ["what the competition was", "how you prepared for it", "how the event itself went"],
  extension: "and explain what taking part meant to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the big day",
    "rehearsed for weeks",
    "butterflies in my stomach",
    "the other contestants",
    "the judges",
    "the hall fell silent",
    "gave it everything",
    "proud just to take part",
  ],
  roundingQuestions: [
    "Is it good for children to compete against one another?",
    "Does everyone who enters a competition deserve a prize?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 12. Events — a street festival you attended (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-street-festival",
  title: "Practice cue card — a street festival",
  family: "events",
  domain: "culture",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a street festival you have been to.",
  situation:
    "This long turn is about a celebration that took over the streets, with music, food and crowds.",
  bullets: ["what the festival celebrated", "what you saw and did there", "who you went with"],
  extension: "and explain what made it memorable.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the streets came alive",
    "a sea of people",
    "live music",
    "food stalls",
    "dancing in the road",
    "elaborate costumes",
    "a party atmosphere",
    "went on into the night",
  ],
  roundingQuestions: [
    "Do street festivals bring a city closer together?",
    "Are festivals becoming too commercial?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 13. Events — a special family celebration meal (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-family-celebration-meal",
  title: "Practice cue card — a family celebration meal",
  family: "events",
  domain: "culture",
  difficulty: 5,
  proficiency: "advanced",
  skill: "lexical",
  task: "Describe a special meal your family shared to celebrate something.",
  situation:
    "The card asks you to recall a full table of relatives, dishes saved for special days and the reason everyone gathered.",
  bullets: ["what the celebration was for", "what was on the table", "who was there"],
  extension: "and explain why this meal stands out in your memory.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a rare get-together",
    "a recipe passed down",
    "a toast was raised",
    "second helpings",
    "generations round one table",
    "cooked all morning",
    "a proper feast",
    "food that carries memories",
  ],
  roundingQuestions: [
    "Do families still eat together as often as they used to?",
    "Is food the strongest part of a culture's identity?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 14. Events — a live sports match (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-sports-match-live",
  title: "Practice cue card — a match watched in person",
  family: "events",
  domain: "culture",
  difficulty: 2,
  proficiency: "foundation",
  skill: "pronunciation",
  task: "Describe a sports match you watched in person.",
  situation:
    "This round's card is about the time you left the television behind and watched a match from the stands.",
  bullets: ["which match you saw", "where you watched it from", "how the crowd around you behaved"],
  extension: "and explain whether you enjoyed the experience.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a packed stadium",
    "the roar of the crowd",
    "chanting in the stands",
    "a close contest",
    "the final whistle",
    "right by the pitch",
    "an electric atmosphere",
    "on our feet",
  ],
  roundingQuestions: [
    "Is watching sport better live or on a screen?",
    "Why do fans feel part of the team they support?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 15. Experiences — your first journey by plane (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-first-flight",
  title: "Practice cue card — your first flight",
  family: "experiences",
  domain: "everyday",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  task: "Describe the first time you travelled by plane.",
  situation:
    "The card takes you back to your very first journey by air — nerves, window seat and all.",
  bullets: [
    "where you were flying to",
    "what you noticed on board",
    "how you felt during the journey",
  ],
  extension: "and explain what that first flight meant to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "checked in",
    "the cabin crew",
    "during take-off",
    "my ears popped",
    "kept glancing out of the window",
    "a patchwork of fields below",
    "the seatbelt sign",
    "a smooth landing",
  ],
  roundingQuestions: [
    "Has flying become less exciting as it has become cheaper?",
    "Would you rather travel by plane or by train?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 16. Experiences — a time you lost something important (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-lost-and-found",
  title: "Practice cue card — lost and found",
  family: "experiences",
  domain: "everyday",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe something important that you lost and later found again.",
  situation:
    "This round asks about the panic of realising something is missing and the relief of getting it back.",
  bullets: ["what you lost", "how you realised it was missing", "how it came back to you"],
  extension: "and explain how it changed the way you look after your things.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "turned everything upside down",
    "my heart sank",
    "retraced my steps",
    "searched high and low",
    "given it up for lost",
    "a huge relief",
    "kicked myself",
    "far more careful now",
  ],
  roundingQuestions: [
    "Do people look after their belongings less carefully than in the past?",
    "What should you do first when you realise something valuable is missing?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 17. Experiences — a day without your phone (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-day-without-phone",
  title: "Practice cue card — a day without your phone",
  family: "experiences",
  domain: "everyday",
  difficulty: 2,
  proficiency: "foundation",
  skill: "grammar",
  task: "Describe a day you spent entirely without your phone.",
  situation:
    "The examiner hands you a card about twenty-four hours with no calls, no messages and no scrolling.",
  bullets: [
    "why you were without your phone",
    "what you did instead",
    "what the hardest part of the day was",
  ],
  extension: "and explain how the day without it made you feel.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "completely switched off",
    "kept reaching for my pocket",
    "no pings all day",
    "a digital detox",
    "surprisingly peaceful",
    "noticed things I usually miss",
    "more time to think",
    "harder than I expected",
  ],
  roundingQuestions: [
    "Could you manage a week without your phone?",
    "Are young people too dependent on their devices?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 18. Experiences — a time you helped someone (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-helping-someone",
  title: "Practice cue card — helping with a problem",
  family: "experiences",
  domain: "everyday",
  difficulty: 5,
  proficiency: "advanced",
  skill: "development",
  task: "Describe an occasion when you helped someone with a problem.",
  situation:
    "The final experiences card of this batch asks about a moment when somebody needed you and you were there.",
  bullets: ["who needed your help", "what the problem was", "what you did about it"],
  extension: "and explain what you gained from helping them.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "lent a hand",
    "without a second thought",
    "talked it through",
    "took some of the weight off",
    "the least I could do",
    "made a real difference",
    "good to be needed",
    "closer than before",
  ],
  roundingQuestions: [
    "What makes people willing to step in and help?",
    "Should first aid be taught in every school?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 19. Objects — a toy from your childhood (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-childhood-toy",
  title: "Practice cue card — a childhood toy",
  family: "objects",
  domain: "everyday",
  difficulty: 1,
  proficiency: "foundation",
  skill: "lexical",
  task: "Describe a toy you enjoyed playing with as a child.",
  situation:
    "This card asks you to dig out the memory of a favourite toy and the games you played with it.",
  bullets: ["what the toy was", "who gave it to you", "how you used to play with it"],
  extension: "and explain why it meant so much to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "my prized possession",
    "took it everywhere",
    "make-believe games",
    "worn from years of play",
    "begged my parents for it",
    "a hand-me-down",
    "never left my side",
    "outgrew it in the end",
  ],
  roundingQuestions: [
    "Do children today play with toys or with screens?",
    "Should toys be educational as well as fun?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 20. Objects — a kitchen item you use often (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-useful-kitchen-item",
  title: "Practice cue card — a kitchen item you always use",
  family: "objects",
  domain: "everyday",
  difficulty: 2,
  proficiency: "foundation",
  skill: "interaction",
  task: "Describe an item in your kitchen that you use all the time.",
  situation:
    "The card this round is about the one tool in your kitchen that never seems to be put away.",
  bullets: ["what the item is", "what you use it for", "how long you have had it"],
  extension: "and explain why it is so useful to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "an absolute essential",
    "in use every single day",
    "couldn't manage without it",
    "hard-wearing",
    "a real time-saver",
    "does the job of three tools",
    "never put away",
    "worth every penny",
  ],
  roundingQuestions: [
    "Is the kitchen the most important room in a home?",
    "Do gadgets really save people time?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 21. Objects — something useful you borrowed (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-borrowed-thing",
  title: "Practice cue card — something you borrowed",
  family: "objects",
  domain: "everyday",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "grammar",
  task: "Describe something useful you borrowed from another person.",
  situation:
    "This long turn is about a time you relied on something that belonged to somebody else.",
  bullets: ["what you borrowed", "who you borrowed it from", "why you needed it"],
  extension: "and explain how the arrangement worked out.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "came to the rescue",
    "only needed it once",
    "took good care of it",
    "handed it back",
    "returned in perfect condition",
    "a small favour",
    "glad I asked",
    "borrowing beats buying",
  ],
  roundingQuestions: [
    "Is it better to borrow something or to buy it?",
    "Does lending things to friends put a friendship at risk?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 22. Activities — a hobby you do in the morning (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-morning-routine-hobby",
  title: "Practice cue card — a morning hobby",
  family: "activities",
  domain: "everyday",
  difficulty: 5,
  proficiency: "advanced",
  skill: "fluency",
  task: "Describe a hobby you make time for in the morning.",
  situation:
    "The card asks about an interest you protect before the day begins, while most people are still asleep.",
  bullets: [
    "what the hobby is",
    "how you fit it into your morning",
    "how it shapes the rest of your day",
  ],
  extension: "and explain why the morning is the right time for it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "while the house is still asleep",
    "a quiet hour to myself",
    "sets me up for the day",
    "non-negotiable",
    "an early riser",
    "my morning ritual",
    "no interruptions",
    "the calm carries me through",
  ],
  roundingQuestions: [
    "Are mornings the most productive part of the day?",
    "Why do so many people find it hard to get up early?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 23. Activities — a dish you know how to cook (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-cooking-dish",
  title: "Practice cue card — a dish you can cook",
  family: "activities",
  domain: "everyday",
  difficulty: 1,
  proficiency: "foundation",
  skill: "grammar",
  task: "Describe a dish that you can cook yourself.",
  situation:
    "This card invites you into the kitchen to talk through a recipe you know off by heart.",
  bullets: ["what the dish is", "how you learned to make it", "how it is prepared"],
  extension: "and explain why you like cooking it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a recipe I know by heart",
    "from scratch",
    "chop and fry",
    "left to simmer",
    "season to taste",
    "quick and simple",
    "it never fails",
    "asked for seconds",
  ],
  roundingQuestions: [
    "Should cooking be taught in every school?",
    "Is home cooking dying out?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 24. Activities — a skill you learned online (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-learning-online-skill",
  title: "Practice cue card — a skill learned online",
  family: "activities",
  domain: "education",
  difficulty: 4,
  proficiency: "advanced",
  skill: "pronunciation",
  task: "Describe a skill you taught yourself using the internet.",
  situation:
    "The card is about something you learned with no classroom and no teacher — just you, a screen and repetition.",
  bullets: [
    "what the skill is",
    "where you found the material to learn from",
    "how the learning went",
  ],
  extension: "and explain what self-teaching taught you about yourself.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "at my own pace",
    "video tutorials",
    "trial and error",
    "a steep learning curve",
    "no teacher to fall back on",
    "practised in the evenings",
    "slowly it clicked",
    "taught me discipline",
  ],
  roundingQuestions: [
    "Can the internet replace a good teacher?",
    "Why do so many people start online courses but never finish them?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 25. Activities — a form of exercise you enjoy (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-exercise-you-enjoy",
  title: "Practice cue card — exercise you enjoy",
  family: "activities",
  domain: "health",
  difficulty: 1,
  proficiency: "foundation",
  skill: "interaction",
  task: "Describe a kind of exercise that you enjoy.",
  situation:
    "The final card of this batch asks about the one form of exercise you never have to force yourself to do.",
  bullets: ["what the exercise is", "when and where you do it", "who you do it with, if anyone"],
  extension: "and explain the effect it has on you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "gets the blood pumping",
    "a proper workout",
    "work up a sweat",
    "a couple of times a week",
    "good for the mind too",
    "aching afterwards",
    "in the fresh air",
    "never a chore",
  ],
  roundingQuestions: [
    "Is exercise about health or about enjoyment?",
    "Should employers give staff time to exercise during the working day?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
