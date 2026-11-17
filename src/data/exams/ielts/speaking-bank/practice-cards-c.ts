/**
 * IELTS Speaking Masterclass — practice cue cards, batch C (PROMPT 54
 * expansion — practice cue cards batch C for unseen simulation rounds).
 *
 * The third batch of the simulation layer of the Part 2 bank: twenty-five
 * further, previously unseen cue cards for independent practice under test
 * conditions, expanding the eight families that carry the richest scenario
 * variety — achievements, books, films, travel and learning, plus
 * experiences, objects and events. Every card keeps the official Part 2
 * frame — the task line, three "You should say" prompts, the closing
 * "and explain" line and the 60 / 60–120 second timings — and carries
 * vocabulary hints the learner may glance at only after the preparation
 * minute, plus two short rounding-off questions in the examiner's voice.
 *
 * There is deliberately no model answer here: these cards exist so the
 * learner speaks from their own ideas. Nothing in this file is a script to
 * memorise, and nothing in it ties any national accent to a higher score.
 * All material is original practice content written in the style of the
 * test — not reproduced exam tasks.
 */

import { SPEAKING_BANK_SOURCE_NOTE, type SpeakingPracticeCueCard } from "./types";

export const practiceCardsC: SpeakingPracticeCueCard[] = [

// ---------------------------------------------------------------------------
// 1. Achievements — a prize or award you won (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-first-prize",
  title: "Practice cue card — a prize of your own",
  family: "achievements",
  domain: "society",
  difficulty: 2,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe a prize or award you have won.",
  situation:
    "Part 2 opens this practice round with a card about a moment of recognition — something you actually won.",
  bullets: ["what the prize was for", "how you prepared or took part", "how you found out you had won"],
  extension: "and explain how winning it made you feel.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the awards ceremony",
    "my name was read out",
    "I couldn't believe it",
    "a real confidence boost",
    "the trophy still sits on my shelf",
    "all that effort paid off",
    "I was up against strong entries",
    "shortlisted",
  ],
  roundingQuestions: [
    "Are prizes mainly a motivation, or do they create unhealthy pressure?",
    "Should schools reward effort as much as results?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Achievements — an ambition achieved after years (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-difficult-goal",
  title: "Practice cue card — an ambition finally achieved",
  family: "achievements",
  domain: "society",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe an ambition you pursued for a long time before achieving it.",
  situation:
    "This long turn asks you to look back on something you chased for a long time before you finally got there.",
  bullets: ["what the ambition was", "what kept setting you back", "what changed once you had achieved it"],
  extension: "and explain why it mattered so much to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "a distant dream for years",
    "every setback taught me something",
    "I refused to let it go",
    "slowly but surely",
    "the breakthrough came when",
    "it was a long road",
    "I proved something to myself",
    "worth every sacrifice",
  ],
  roundingQuestions: [
    "Do long-term ambitions bring more happiness than short-term ones?",
    "Is it always healthy to hold on to an ambition for years?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Achievements — something made or built by hand (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-something-you-built",
  title: "Practice cue card — something you built yourself",
  family: "achievements",
  domain: "everyday",
  difficulty: 2,
  proficiency: "foundation",
  skill: "lexical",
  task: "Describe something you made or built yourself.",
  situation: "The examiner hands you a card about making something with your own hands.",
  bullets: ["what you made", "what you needed to finish it", "how long it took you"],
  extension: "and explain how you felt about the finished result.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "put it together from scratch",
    "followed a tutorial step by step",
    "a few pieces short",
    "made a right mess of it at first",
    "the finishing touches",
    "not perfect, but it's mine",
    "reasonably handy with tools",
    "a proper sense of pride",
  ],
  roundingQuestions: [
    "Why do people enjoy making things by hand when shops sell everything?",
    "Should practical skills such as sewing or woodwork have more place in schools?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Achievements — an exam that took real preparation (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-exam-you-passed",
  title: "Practice cue card — the exam you worked for",
  family: "achievements",
  domain: "education",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "grammar",
  task: "Describe an exam or test that took a lot of preparation to pass.",
  situation: "This card takes you back to a period of study that ended with the result you needed.",
  bullets: ["what the exam was for", "how you organised your preparation", "how you felt on results day"],
  extension: "and explain what passing it made possible for you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "revised round the clock",
    "past papers",
    "it all came down to that morning",
    "I'd never studied so hard for anything",
    "the relief when I saw the result",
    "scraped through",
    "walked out unsure",
    "it opened a door for me",
  ],
  roundingQuestions: [
    "Do exams measure real ability, or just performance under pressure?",
    "Is one big final exam fairer than lots of small tests?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Books — a book that changed your thinking (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-book-changed-mind",
  title: "Practice cue card — the book that changed your mind",
  family: "books",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a book that changed the way you think about something.",
  situation:
    "Part 2 turns to reading that leaves a mark — one book that genuinely shifted your opinions.",
  bullets: [
    "what the book was about",
    "which idea in it struck you most",
    "how your thinking shifted afterwards",
  ],
  extension: "and explain why the book had that effect on you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it challenged my assumptions",
    "I saw the whole issue differently",
    "argues its case convincingly",
    "it stayed in my head for weeks",
    "I completely rethought",
    "a turning point in how I see things",
    "I kept nodding along",
    "it put into words what I had always felt",
  ],
  roundingQuestions: [
    "Can fiction change minds as effectively as non-fiction?",
    "Do people read challenging books to learn, or to seem well-informed?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Books — a story loved in early childhood (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-childhood-story",
  title: "Practice cue card — a story from your earliest years",
  family: "books",
  domain: "culture",
  difficulty: 1,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe a story you loved when you were a small child.",
  situation: "The card reaches back to your earliest years and a story you never tired of hearing.",
  bullets: ["what the story was about", "who told it or read it to you", "which part you liked best"],
  extension: "and explain why you were so fond of it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "I knew it off by heart",
    "the same story every night",
    "the pictures on every page",
    "I would ask for it again and again",
    "it made me feel safe",
    "it always ended the same way",
    "my favourite character",
    "a proper bedtime story",
  ],
  roundingQuestions: [
    "Do children today miss out by watching videos instead of hearing stories?",
    "Why do some stories from childhood stay with us for life?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Books — a book a friend recommended (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-book-friend-recommended",
  title: "Practice cue card — a book pressed on you by a friend",
  family: "books",
  domain: "culture",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  task: "Describe a book that a friend recommended to you.",
  situation:
    "This round is about taking a friend's advice — a book you might never have picked up on your own.",
  bullets: [
    "which friend suggested it",
    "why they thought it would suit you",
    "whether it lived up to the recommendation",
  ],
  extension: "and explain what reading it added to your friendship.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "she wouldn't stop going on about it",
    "it's right up your street",
    "I trusted her judgement",
    "handed me her copy",
    "I wasn't sure at first",
    "it grew on me",
    "we compared notes afterwards",
    "I owed her one for that",
  ],
  roundingQuestions: [
    "Do you trust a friend's recommendation more than a critic's review?",
    "Is lending a favourite book to a friend a risk worth taking?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Books — a comic or graphic novel (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-comic-or-graphic",
  title: "Practice cue card — a comic or graphic novel you loved",
  family: "books",
  domain: "culture",
  difficulty: 2,
  proficiency: "foundation",
  skill: "lexical",
  task: "Describe a comic or graphic novel that you have enjoyed.",
  situation: "The examiner offers a card about stories told in pictures as well as words.",
  bullets: ["what it was about", "what the artwork was like", "how you first came across it"],
  extension: "and explain what made it so enjoyable.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the artwork is stunning",
    "tells the story panel by panel",
    "speech bubbles",
    "vivid colours",
    "the drawings do half the talking",
    "a cult classic",
    "I devoured it in one sitting",
    "not just for children",
  ],
  roundingQuestions: [
    "Do illustrated stories get less respect than novels?",
    "Could comics and graphic novels belong in a language classroom?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Films — a film watched a second time (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-film-watched-twice",
  title: "Practice cue card — a film worth a second watch",
  family: "films",
  domain: "culture",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  task: "Describe a film you chose to watch a second time.",
  situation: "This long turn is about the films worth returning to — one you deliberately sat through again.",
  bullets: [
    "what the film was",
    "how much time passed between the two viewings",
    "what you noticed the second time",
  ],
  extension: "and explain why it deserved a second watch.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it rewards a second viewing",
    "I picked up on things I had missed",
    "knowing the ending changed everything",
    "it holds up well",
    "a comfort film",
    "I got more out of it second time round",
    "some films only make sense at the end",
    "I knew half the lines already",
  ],
  roundingQuestions: [
    "Why do some people rewatch the same films instead of choosing new ones?",
    "Does knowing a film's ending spoil it or deepen it?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Films — a film that made you laugh (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-funny-film",
  title: "Practice cue card — a film that made you laugh",
  family: "films",
  domain: "culture",
  difficulty: 1,
  proficiency: "foundation",
  skill: "pronunciation",
  task: "Describe a film that really made you laugh.",
  situation: "The next card is about comedy — a film that had you laughing out loud.",
  bullets: ["what the film was", "which scene or character amused you most", "who you watched it with"],
  extension: "and explain why you found it so funny.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "I was in stitches",
    "laughed until I cried",
    "perfect comic timing",
    "the funniest scene",
    "a proper laugh-out-loud film",
    "a running joke",
    "we were all howling",
    "I couldn't catch my breath",
  ],
  roundingQuestions: [
    "Is humour the hardest thing to share across cultures?",
    "Do comedies deserve major awards as much as serious films?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 11. Films — a documentary that gripped you (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-documentary-film",
  title: "Practice cue card — a documentary that gripped you",
  family: "films",
  domain: "science",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  task: "Describe a documentary that you found fascinating.",
  situation: "Part 2 moves from fiction to fact with a documentary that held you to the end.",
  bullets: [
    "what the documentary was about",
    "how you came to watch it",
    "the most memorable thing you learned from it",
  ],
  extension: "and explain why it held your interest so completely.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "eye-opening",
    "it follows the story of",
    "footage I had never seen before",
    "narrated by a familiar voice",
    "it pulls back the curtain on",
    "I couldn't stop watching",
    "it changed how I see the issue",
    "gripping from start to finish",
  ],
  roundingQuestions: [
    "Do documentaries show the truth, or a chosen version of it?",
    "Why do nature documentaries appeal to almost everyone?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 12. Films — a film watched with the family (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-film-with-family",
  title: "Practice cue card — a film with the whole family",
  family: "films",
  domain: "culture",
  difficulty: 2,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a film you watched with your family.",
  situation: "This card is about the sofa, the remote and one film the whole household sat down to together.",
  bullets: ["which film you watched", "who chose it", "how everyone reacted to it"],
  extension: "and explain what made that viewing memorable.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "we crowded onto the sofa",
    "a firm family favourite",
    "we took turns choosing",
    "dad fell asleep halfway through",
    "we all agreed for once",
    "it became a family joke",
    "snacks within reach",
    "watching it together was the whole point",
  ],
  roundingQuestions: [
    "Is family film night disappearing because of personal screens?",
    "Should parents decide what films their children are allowed to watch?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 13. Travel — a day trip worth repeating (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-day-trip",
  title: "Practice cue card — a day trip you still talk about",
  family: "travel",
  domain: "everyday",
  difficulty: 2,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe a day trip that you would happily take again.",
  situation: "The examiner deals a card about one single day out — there and back, but memorable.",
  bullets: ["where you went and who with", "what you managed to fit into the day", "the best moment of the whole trip"],
  extension: "and explain why you would happily do it all again.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "an early start",
    "we packed a lot into one day",
    "off the beaten track",
    "we wandered around for hours",
    "the views were breathtaking",
    "a spot I would recommend to anyone",
    "we just caught the last bus back",
    "the day flew by",
  ],
  roundingQuestions: [
    "What makes the difference between a good day trip and a disappointing one?",
    "Would you rather take several short trips or one long holiday a year?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 14. Travel — a long journey by train, bus or boat (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-travel-by-train",
  title: "Practice cue card — a long journey by train, bus or boat",
  family: "travel",
  domain: "culture",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  task: "Describe a long journey you made by train, bus or boat.",
  situation:
    "This round is about the travelling itself rather than the destination — hours spent getting somewhere.",
  bullets: [
    "where you were travelling from and to",
    "what the journey was like",
    "how you passed the time on the way",
  ],
  extension: "and explain how you felt about the journey as a whole.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the scenery rolled past",
    "an overnight train",
    "we watched the coastline for hours",
    "dozed off now and then",
    "the gentle sway of the carriage",
    "miles of nothing but fields",
    "plenty of time to think",
    "half the pleasure was the journey itself",
  ],
  roundingQuestions: [
    "Is the journey itself part of the holiday, or just dead time?",
    "Will faster trains kill the pleasure of slow travel?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 15. Travel — a place that deserves a second visit (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-place-visited-once",
  title: "Practice cue card — a place that deserves a return visit",
  family: "travel",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  task: "Describe a place you have visited only once but would love to return to.",
  situation: "The card asks about unfinished business with a place — one visit was simply not enough.",
  bullets: ["where it was and when you went", "what you managed to see and do", "what you had to leave for another time"],
  extension: "and explain why you want to go back.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "we only scratched the surface",
    "so much we didn't get to see",
    "I have wanted to return ever since",
    "it lived up to the photographs",
    "steeped in history",
    "the place has a real pull on me",
    "next time I would do it differently",
    "one trip simply isn't enough",
  ],
  roundingQuestions: [
    "Can you really know a place from a single visit?",
    "Do places change between our visits, or do we?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 16. Travel — a journey that went wrong (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-travel-problem",
  title: "Practice cue card — the journey that fell apart",
  family: "travel",
  domain: "everyday",
  difficulty: 5,
  proficiency: "advanced",
  skill: "grammar",
  task: "Describe a journey during which several things went wrong.",
  situation: "The final travel card of this batch asks you to narrate a trip that tested your patience.",
  bullets: [
    "what was supposed to happen",
    "what actually went wrong",
    "how you eventually reached your destination",
  ],
  extension: "and explain what the experience taught you about travelling.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "one thing after another",
    "our connection was cancelled",
    "the luggage went missing",
    "no one could tell us anything",
    "we had to make do",
    "it turned into an adventure",
    "we laugh about it now",
    "we finally arrived at midnight",
  ],
  roundingQuestions: [
    "Has modern technology made travel problems easier to handle?",
    "Are delays simply the price we pay for cheap travel?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 17. Learning — the moment a language clicked (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-new-language-milestone",
  title: "Practice cue card — the moment a language clicked",
  family: "learning",
  domain: "education",
  difficulty: 5,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a moment when you realised you were making real progress in a language.",
  situation: "Part 2 turns to your own learning — the exact moment a language stopped feeling foreign.",
  bullets: [
    "what you were doing when it happened",
    "what you could suddenly do that you had not done before",
    "how you knew it was genuine progress",
  ],
  extension: "and explain what that moment meant to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it suddenly clicked",
    "for the first time",
    "the words just came",
    "I understood without translating",
    "a real milestone",
    "it gave me a huge boost",
    "I had turned a corner",
    "I stopped worrying about mistakes",
  ],
  roundingQuestions: [
    "Does confidence matter more than accuracy when learning a language?",
    "Can progress in learning be measured, or only felt?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 18. Learning — a skill learned from a family member (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-skill-from-family",
  title: "Practice cue card — a skill passed down at home",
  family: "learning",
  domain: "education",
  difficulty: 1,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a skill that a member of your family taught you.",
  situation: "This card takes you back to the kitchen table or the garden shed — a skill passed on at home.",
  bullets: ["what the skill is", "which family member taught you", "how they went about teaching it"],
  extension: "and explain how useful that skill has been to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "she taught me the basics",
    "I learned by watching her hands",
    "passed down through the family",
    "I picked it up by helping out",
    "it comes in handy all the time",
    "I still do it her way",
    "practise makes perfect",
    "a family tradition",
  ],
  roundingQuestions: [
    "Are skills learned from family remembered better than skills learned at school?",
    "Which everyday skills are dying out, and does that matter?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 19. Learning — a mistake that taught a lasting lesson (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-mistake-taught-you",
  title: "Practice cue card — a mistake you never repeated",
  family: "learning",
  domain: "education",
  difficulty: 5,
  proficiency: "advanced",
  skill: "grammar",
  task: "Describe a mistake you made that taught you a lasting lesson.",
  situation: "The card invites an honest story — something you got wrong once and never got wrong again.",
  bullets: [
    "what the mistake was",
    "what its consequences were at the time",
    "how you have done things differently since",
  ],
  extension: "and explain why the lesson has stayed with you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "I got it badly wrong",
    "it cost me dear",
    "if I had checked, none of it would have happened",
    "a lesson learned the hard way",
    "I have never made that mistake since",
    "it was entirely my fault",
    "the warning signs were there",
    "it knocked my confidence at first",
  ],
  roundingQuestions: [
    "Why do some lessons only sink in after a costly mistake?",
    "Should teachers ever let learners fail on purpose?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 20. Learning — something learned by doing (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-learning-by-doing",
  title: "Practice cue card — something learned by doing",
  family: "learning",
  domain: "education",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  task: "Describe something you learned by trying it rather than from a book.",
  situation: "This round is about hands-on learning — an ability that only came with practice.",
  bullets: ["what you learned", "how your first attempts went", "how you improved as time went on"],
  extension: "and explain why doing worked better than reading for you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "thrown in at the deep end",
    "trial and error",
    "you can't learn that from a page",
    "muscle memory",
    "my early attempts were clumsy",
    "I got the hang of it",
    "learning on the job",
    "it became second nature",
  ],
  roundingQuestions: [
    "Is experience the best teacher, or simply the most expensive one?",
    "Which subjects can never truly be learned by doing?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 21. Experiences — a day that ignored the plan (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-surprising-day",
  title: "Practice cue card — the day that ignored the plan",
  family: "experiences",
  domain: "everyday",
  difficulty: 5,
  proficiency: "advanced",
  skill: "fluency",
  task: "Describe a day that turned out nothing like the one you had planned.",
  situation: "The card is about a day that refused to follow the script — planned one way, lived another.",
  bullets: [
    "what you had planned for that day",
    "what actually happened instead",
    "how you adapted as the day went on",
  ],
  extension: "and explain how you felt about the day in the end.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "nothing went to plan",
    "the best-laid plans",
    "we tore up the itinerary",
    "one surprise after another",
    "went with the flow",
    "it worked out for the best",
    "the day took on a life of its own",
    "I wouldn't change a thing now",
  ],
  roundingQuestions: [
    "Are unplanned days better than planned ones, or just more stressful?",
    "Why do people find it so hard to abandon a plan?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 22. Experiences — unexpected kindness (intermediate)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-kindness-received",
  title: "Practice cue card — kindness when you least expected it",
  family: "experiences",
  domain: "society",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  task: "Describe a time when someone was kind to you when you least expected it.",
  situation: "This card asks for a small, warm moment — kindness from someone who owed you nothing.",
  bullets: [
    "what situation you were in at the time",
    "what the person did for you",
    "what you said to each other afterwards",
  ],
  extension: "and explain what their kindness meant to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "they didn't have to do that",
    "a small gesture that meant a lot",
    "it completely turned my day round",
    "I was really touched",
    "we had never met before",
    "I thanked them over and over",
    "I have tried to pay it forward",
    "I will never forget it",
  ],
  roundingQuestions: [
    "Are people kinder in small communities than in big cities?",
    "Does an act of kindness need to be repaid?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 23. Objects — a photograph on display (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-photo-on-wall",
  title: "Practice cue card — a photograph you live with",
  family: "objects",
  domain: "everyday",
  difficulty: 1,
  proficiency: "foundation",
  skill: "pronunciation",
  task: "Describe a photograph that you keep where you can see it every day.",
  situation: "The examiner passes you a card about one picture you chose to live with on your wall or shelf.",
  bullets: ["what the photograph shows", "who took it and when", "where you keep it"],
  extension: "and explain why this photograph matters to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "it captures the moment perfectly",
    "in the background you can see",
    "slightly out of focus",
    "we are all mid-laugh",
    "a candid shot",
    "it takes me straight back",
    "I glance at it every morning",
    "my favourite photograph",
  ],
  roundingQuestions: [
    "Do printed photographs mean more than the ones on our phones?",
    "Why do people photograph moments instead of simply living them?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 24. Objects — a gift that meant a great deal (foundation)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-gift-received",
  title: "Practice cue card — a gift that meant everything",
  family: "objects",
  domain: "everyday",
  difficulty: 1,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a present you received that meant a great deal to you.",
  situation: "This round is about receiving rather than giving — one present you would never part with.",
  bullets: [
    "what the gift was",
    "who gave it to you and on what occasion",
    "how you reacted when you unwrapped it",
  ],
  extension: "and explain what made this gift so special.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "I unwrapped it slowly",
    "I was lost for words",
    "it's the thought behind it",
    "clearly chosen with care",
    "I use it every single day",
    "it must have taken them ages to find",
    "I treasure it",
    "I couldn't put it down",
  ],
  roundingQuestions: [
    "Do handmade gifts beat expensive ones?",
    "Is receiving a gift gracefully harder than giving one?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 25. Events — a wedding attended (advanced)
// ---------------------------------------------------------------------------

{
  kind: "practice-cue-card",
  slug: "ielts-sb-pc-wedding-attended",
  title: "Practice cue card — a wedding to remember",
  family: "events",
  domain: "culture",
  difficulty: 5,
  proficiency: "advanced",
  skill: "lexical",
  task: "Describe a wedding you have attended.",
  situation: "The last card of this practice batch deals out a celebration of marriage seen through a guest's eyes.",
  bullets: [
    "whose wedding it was",
    "what the day was like from morning to evening",
    "what you enjoyed most about it",
  ],
  extension: "and explain what made this wedding stand out from other celebrations you know.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  vocabularyHints: [
    "the bride and groom",
    "from the ceremony to the reception",
    "danced until midnight",
    "an emotional speech",
    "raised a toast",
    "everyone was in high spirits",
    "two families becoming one",
    "a day I will remember for a long time",
  ],
  roundingQuestions: [
    "Are big weddings worth the money they cost?",
    "Will weddings still look much the same in fifty years?",
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
