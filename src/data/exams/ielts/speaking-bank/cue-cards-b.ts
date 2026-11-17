/**
 * IELTS Speaking Part 2 — flagship cue-card bank, file B (PROMPT 47,
 * Parts 3 and 8).
 *
 * The remaining five of the eleven flagship cue cards, one per taught
 * description family: achievements, books, films, travel and learning
 * experiences. Every card carries the full seven-element teaching payload —
 * the prompt itself, the author's one-minute planning note, vocabulary
 * suggestions, a natural two-minute sample response, a move-by-move
 * response analysis, alternative approaches and follow-up practice.
 *
 * The samples demonstrate METHOD: learners should adapt the shape of each
 * answer to their own material, never memorise the words. Band-style
 * labels are educational estimates only, never official scores. All
 * material is original practice content written in the style of the test —
 * not reproduced exam tasks.
 */

import type { SpeakingCueCard } from "./types";
import { SPEAKING_BANK_SOURCE_NOTE } from "./types";

export const speakingBankCueCardsB: SpeakingCueCard[] = [

// ---------------------------------------------------------------------------
// 7. Achievements — a goal you reached after a long effort
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-achievements",
  title: "Cue card — a goal reached after long effort",
  family: "achievements",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a goal you reached after a long effort.",
  situation:
    "You are at the IELTS Speaking test centre in Lagos. The examiner sets the timer, leans back and passes you this card.",
  bullets: ["what the goal was", "what made it difficult", "how you achieved it"],
  extension: "and explain how you felt when you reached it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "THE GOAL",
      notes: [
        "speech in Korean @ Sunho's wedding",
        "18-month runway · quiet promise",
        "audience: 120 · mostly no English",
      ],
    },
    {
      heading: "WHY hard",
      notes: [
        "new alphabet (easy!) · politeness levels",
        "full-time job → trains + Sunday mornings",
        "no partner except the groom",
      ],
    },
    {
      heading: "THE SYSTEM",
      notes: [
        "app = vocab on commute",
        "textbook = Sunday mornings",
        "Jiwon · exchange Thursdays · 1 yr",
        "speech in chunks → record → natural pauses",
      ],
    },
    {
      heading: "THE MOMENT + feeling",
      notes: [
        "heart hammering · the joke landed",
        "mother cried · strangers patted shoulder",
        "pride → disbelief: 18 months in 90 sec",
        "lesson: promise-keeping > talent",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to set your mind on something",
      partOfSpeech: "phrase",
      meaning: "To decide firmly that you will achieve something.",
      example: "Once she sets her mind on a goal, nothing stops her.",
    },
    {
      word: "against the odds",
      partOfSpeech: "phrase",
      meaning: "Succeeding although the conditions were unfavourable.",
      example: "He finished the race against all the odds.",
    },
    {
      word: "to keep at it",
      partOfSpeech: "phrase",
      meaning: "To continue working at something difficult.",
      example: "Progress was invisible for months, but I kept at it.",
    },
    {
      word: "to pay off",
      partOfSpeech: "phrasal verb",
      meaning: "To bring good results after effort or cost.",
      example: "Eighteen months of evening classes finally paid off.",
    },
    {
      word: "a milestone",
      partOfSpeech: "noun",
      meaning: "An important stage in progress towards a goal.",
      example: "Running ten kilometres was my first milestone.",
    },
    {
      word: "on cloud nine",
      partOfSpeech: "idiom",
      meaning: "Extremely happy.",
      example: "I was on cloud nine for the rest of the week.",
    },
    {
      word: "an obstacle",
      partOfSpeech: "noun",
      meaning: "Something that blocks your progress.",
      example: "Every month seemed to throw up a new obstacle.",
    },
    {
      word: "a sense of accomplishment",
      partOfSpeech: "noun phrase",
      meaning: "The proud feeling of having achieved something.",
      example: "The sense of accomplishment lasted longer than the pain.",
    },
    {
      word: "to look back on something",
      partOfSpeech: "phrase",
      meaning: "To think about a period in the past.",
      example: "I look back on that winter of training fondly.",
    },
  ],
  sampleResponse: {
    transcript: `The goal I'd like to describe is learning enough Korean to give a speech at my best friend's wedding. Sunho is from Busan, and when he announced the date eighteen months ahead, I made a quiet promise to myself. I would stand up at the reception and say what he means to me in his own language, in front of a hundred and twenty mostly non-English-speaking guests.

What made it difficult was everything, really. Korean has a different alphabet—actually, that turned out to be the easy part—and three politeness levels you have to get right, or you sound rude to somebody's grandmother. I was also working full time, so study had to fit into train journeys and Sunday mornings. And there was nobody to practise with: the only Korean speaker I knew was the groom, and I couldn't exactly rehearse the speech on him.

So I built a system. An app for vocabulary on the commute, a grammar textbook on Sunday mornings, and a language-exchange partner, Jiwon, who wanted English help—we met online every Thursday for a year, half in each language. I memorised my speech in short chunks, then recorded myself until the pauses sounded natural rather than robotic. Three months before the wedding I could finally hold a ten-minute conversation without collapsing into English.

When the moment came, I stood up with my heart absolutely hammering, and I got through the whole speech, one small joke included. Sunho's mother cried, and total strangers patted my shoulder all evening. How did I feel? Honestly, it was more than pride—it was disbelief that had been building for a year and a half and then released in ninety seconds. What I took from it is that ambitious goals aren't about talent; they're about keeping a promise to yourself on days when nobody's watching. I still can't speak Korean perfectly, but I proved something to myself that no one can take back.`,
    wordCount: 324,
    durationEstimateSec: 135,
    bandEstimate: "Band 8.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The goal is stated with its deadline and its audience in three sentences: a speech, in Korean, at a wedding, in front of a hundred and twenty people. Precision does the hooking — no adjectives are needed.",
    },
    {
      aspect: "First bullet — the goal",
      note: "'A quiet promise to myself' reframes the goal as private commitment, which the ending will pay off. Planting the callback early is exactly what makes a final line land.",
    },
    {
      aspect: "Second bullet — what made it difficult",
      note: "The obstacles are genuinely varied: linguistic (the alphabet, politeness levels), logistical (full-time work) and social (no one to practise with except the groom). The grandmother line smuggles humour into a difficulty list.",
    },
    {
      aspect: "Third bullet — how you achieved it",
      note: "The system is presented as parallel strands — the commute app, the Sunday textbook, Thursday exchanges with Jiwon, recorded chunks — so the effort feels sustained rather than lucky. 'Half in each language' adds the reciprocity detail that makes the method believable.",
    },
    {
      aspect: "The reflection — how you felt",
      note: "The feeling is built in stages: the hammering heart, the joke that worked, the mother crying, strangers patting his shoulder, then 'disbelief... released in ninety seconds'. Naming an unexpected emotion instead of the obvious one is what high-band emotional description sounds like.",
    },
    {
      aspect: "The closing thesis",
      note: "'Ambitious goals aren't about talent; they're about keeping a promise to yourself' converts the story into a general truth without preaching — earned, quotable, final.",
    },
    {
      aspect: "Adapt, don't memorise",
      note: "Every sentence here belongs to this wedding. Borrow the spine — goal with stakes, varied obstacles, training system, moment of arrival, layered feeling, thesis — and refill it with your own marathon, exam or savings plan.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "Running a first marathon",
      note: "The physical version: obstacles are injury and winter training, achievement is a training plan kept for months, and the finish-line feeling includes the crowd and the body giving up at the same time.",
    },
    {
      approach: "Saving for something for someone else",
      note: "Two years of saving to send your parents on a trip reframes discipline as love; the difficulty is temptation and a small salary, and reaching the goal is the moment you hand over the tickets.",
    },
    {
      approach: "A professional qualification at night",
      note: "Studying for a certification while working full time gives quieter obstacles — fatigue, doubt — and a reflection on validation that arrives by email rather than applause.",
    },
    {
      approach: "Learning to swim as an adult",
      note: "The smallest-looking goal with the deepest fear; achievement is measured in lengths of a pool, and the reflection is usually about pride that nobody else can see or measure.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Is it better to set small goals or one big goal?",
      "How should schools reward effort rather than only results?",
      "Are people happier while pursuing a goal or after achieving it?",
    ],
    practice: [
      "Describe a promise you kept — borrow the runway → system → moment → meaning shape.",
      "Try 'Describe something difficult you gave up on' — the reflection then explores what stopping taught you.",
      "Record two minutes on 'a goal you are working towards now', using present perfect and future forms.",
    ],
  },
  requirements: [
    {
      key: "the-goal",
      description: "States the goal precisely, including its deadline or the occasion attached to it.",
      keywords: ["goal", "korean", "speech", "wedding", "promise"],
    },
    {
      key: "what-made-it-difficult",
      description: "Names at least two genuine obstacles, whether internal or external.",
      keywords: ["difficult", "alphabet", "politeness", "commute", "practise"],
    },
    {
      key: "how-you-achieved-it",
      description: "Shows the method — routines, resources and help — sustained over time.",
      keywords: ["system", "app", "textbook", "chunks", "conversation"],
    },
    {
      key: "feeling-when-reached",
      description: "Describes the moment of arrival and layers the feelings beyond simple pride.",
      keywords: ["hammering", "cried", "pride", "disbelief", "proved"],
    },
    {
      key: "long-effort-framing",
      description: "Frames the goal as long effort and closes on what it taught the speaker about goals in general.",
      keywords: ["eighteen", "months", "building", "talent", "watching"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Books — a book you would recommend to a friend
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-books",
  title: "Cue card — a book to recommend",
  family: "books",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a book you would recommend to a friend.",
  situation:
    "You are taking the IELTS Speaking test in Hanoi. The examiner places this card face up in front of you and reminds you that you have one minute.",
  bullets: ["what the book is", "what it is about", "why you chose it"],
  extension: "and explain why your friend would enjoy it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "THE BOOK",
      notes: [
        "Klara and the Sun · Ishiguro · Nobel winner",
        "four sittings = a sprint for me",
      ],
    },
    {
      heading: "WHAT it's about (no spoilers)",
      notes: [
        "Klara = artificial friend · robot companion",
        "shop window → chosen by Josie",
        "Josie ill · Klara believes the sun heals",
        "reads as devotion, not sci-fi",
      ],
    },
    {
      heading: "WHY I chose it",
      notes: [
        "golden-grass cover → in before reviews",
        "colleague cried on a train · sold",
        "trusted the voice: butler novel @ uni",
      ],
    },
    {
      heading: "WHY PRIYA would love it",
      notes: [
        "quiet, character-driven · no car chases",
        "works in tech · suspicious of it → her question",
        "gentle ending → weeks of book-club arguments",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "a page-turner",
      partOfSpeech: "noun",
      meaning: "A book so exciting that you cannot stop reading it.",
      example: "It's a proper page-turner, even though nobody dies.",
    },
    {
      word: "hooked from the first page",
      partOfSpeech: "phrase",
      meaning: "Completely engaged from the very beginning.",
      example: "I was hooked from the first page of her debut.",
    },
    {
      word: "a slow burn",
      partOfSpeech: "noun",
      meaning: "A story that builds gradually rather than exploding early.",
      example: "It's a slow burn that rewards patience.",
    },
    {
      word: "to press a book on someone",
      partOfSpeech: "phrase",
      meaning: "To insist enthusiastically that someone read a book.",
      example: "I've been pressing this novel on friends for months.",
    },
    {
      word: "thought-provoking",
      partOfSpeech: "adjective",
      meaning: "Making you think deeply after it ends.",
      example: "The last chapter is quietly thought-provoking.",
    },
    {
      word: "to devour",
      partOfSpeech: "verb",
      meaning: "To read something quickly and eagerly.",
      example: "I devoured the whole trilogy in a fortnight.",
    },
    {
      word: "to stay with you",
      partOfSpeech: "phrase",
      meaning: "To remain in your memory for a long time.",
      example: "The final image has stayed with me ever since.",
    },
    {
      word: "the narrator",
      partOfSpeech: "noun",
      meaning: "The voice that tells the story.",
      example: "The narrator is a child, which makes the ending devastating.",
    },
    {
      word: "a book club pick",
      partOfSpeech: "noun phrase",
      meaning: "A book chosen for a group to read and discuss.",
      example: "It would make a brilliant book club pick because everyone reads the ending differently.",
    },
  ],
  sampleResponse: {
    transcript: `The book I'd recommend is Klara and the Sun, a novel by Kazuo Ishiguro, who won the Nobel Prize in Literature. I read it last autumn in about four sittings, which for me, with a full-time job, is practically a sprint.

It's told from the point of view of Klara, an artificial friend—that's the book's term, not mine—a robot girl designed as a companion for teenagers. She waits in a shop window hoping to be chosen, and eventually a girl called Josie takes her home. Josie is clever but seriously ill, and Klara, who worships the sun that charges her batteries, becomes convinced it can save her human. What's remarkable is that the story never feels like science fiction; it feels like a book about devotion, seen through eyes that understand love but not quite the world.

Why did I pick it up? Purely because of the cover—it shows two figures in a field of golden grass, and I was drawn in before I'd read a single review. Then a colleague mentioned it had made her cry on a train, and that was that. I'd also studied his novel about an English butler at university, so I trusted the voice.

Now, the friend I'd press it on is Priya—well, Priya and her wife, but Priya is the tougher audience—for three reasons. First, she adores quiet, character-driven stories, and this one builds tension without a single car chase. Second, she works in technology and is slightly suspicious of it, so a machine narrator asking what makes a person irreplaceable is exactly her kind of question. And finally, the ending is devastating in the gentlest possible way—we discussed her last book club pick for weeks, and I want three more weeks of arguments with her. She'll either love it or argue with it, and honestly, with Priya, both count as success.`,
    wordCount: 315,
    durationEstimateSec: 130,
    bandEstimate: "Band 8.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "Title, author and credential arrive in one sentence; the 'four sittings' joke frames the speaker as a busy reader, not a critic. A recommendation card should sound like a reader talking, never like a review being read aloud.",
    },
    {
      aspect: "Second bullet — what it is about",
      note: "The premise is explained in four moves — narrator, situation, complication, genre rescue ('never feels like science fiction') — without spoiling the ending. 'Devotion, seen through eyes that understand love but not quite the world' is the pitch a friend actually needs.",
    },
    {
      aspect: "Third bullet — why you chose it",
      note: "Admitting that a cover started it is disarmingly honest, and it is then supported by the crying colleague and the trusted earlier novel. Random-seeming reasons told well beat grand-sounding reasons told vaguely.",
    },
    {
      aspect: "The extension — why the friend would enjoy it",
      note: "Three reasons, each tied to Priya specifically: her taste, her profession, her argumentative book club. The self-correction ('Priya—well, Priya and her wife') and the closing line about success show real knowledge of a real person.",
    },
    {
      aspect: "Language choices",
      note: "The recommendation lexicon is used naturally — 'drawn in', 'press it on', 'devoured' territory — while 'studied his novel about an English butler' pins the author precisely without showing off.",
    },
    {
      aspect: "Method over memory",
      note: "The engine of this card is the fit between book and friend. Keep the frame — book, spoiler-free pitch, honest origin, three-point fit, playful prediction — and swap in a book you genuinely know; examiners can always hear a book the candidate has not read.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "A non-fiction book that changed your mind",
      note: "A popular-science or history title replaces plot with argument; 'what it is about' becomes the central claim, and the friend's enjoyment is framed as becoming better informed.",
    },
    {
      approach: "A childhood favourite re-read as an adult",
      note: "Recommending a book you loved at ten adds nostalgia and a live test — does it still work? The friend-fit is shared memory, and the reflection can ask what reading used to feel like.",
    },
    {
      approach: "A crime thriller",
      note: "The page-turner route: pace vocabulary (gripping, twist, devoured) and a holiday framing — the friend would enjoy it on a long flight — with a reflection admitting that entertainment is a legitimate reason to read.",
    },
    {
      approach: "A short story collection",
      note: "The brave choice: describing a collection means choosing one story to pitch, which shows selection skill; the friend-fit is reading aloud, or short commutes.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do paper books still have a future?",
      "Why do some people read the final page first?",
      "Should children be free to read whatever they like?",
    ],
    practice: [
      "Describe a book that changed how you see something — keep the premise spoiler-free, as in the sample.",
      "Attempt 'Describe a book you were made to read at school' and compare your reaction then with your reaction now.",
      "Recommend a film to the same friend in one minute, then the book in one minute — notice which vocabulary transfers.",
    ],
  },
  requirements: [
    {
      key: "the-book",
      description: "Names the book and its author confidently, with a reading detail for texture.",
      keywords: ["klara", "ishiguro", "novel", "nobel", "sittings"],
    },
    {
      key: "what-it-is-about",
      description: "Outlines the premise accurately without spoiling the ending.",
      keywords: ["klara", "artificial", "companion", "josie", "devotion"],
    },
    {
      key: "why-you-chose-it",
      description: "Explains how the speaker came to the book — a cover, a recommendation or a trusted author.",
      keywords: ["cover", "golden", "colleague", "cry", "butler"],
    },
    {
      key: "friend-fit",
      description: "Matches the book to a named friend's tastes, with reasons specific to that friend.",
      keywords: ["priya", "reasons", "quiet", "technology", "irreplaceable"],
    },
    {
      key: "recommendation-close",
      description: "Closes with a prediction or a playful judgement about the friend's reaction.",
      keywords: ["ending", "devastating", "arguments", "love", "success"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Films — a film or series you have watched more than once
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-films",
  title: "Cue card — a film worth rewatching",
  family: "films",
  difficulty: 2,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a film or series you have watched more than once.",
  situation:
    "You are in the middle of the IELTS Speaking test in Cairo. The examiner reads the task line aloud and sets the card down in front of you.",
  bullets: ["what it is", "what happens in it", "when you first watched it"],
  extension: "and explain why you returned to it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHAT it is",
      notes: [
        "Groundhog Day · early-90s comedy · Bill Murray",
        "Phil: sarcastic weatherman · hates the assignment",
      ],
    },
    {
      heading: "WHAT happens",
      notes: [
        "same day loops · song + people + weather",
        "selfish phase → emptiness",
        "piano · saving lives → kindness",
      ],
    },
    {
      heading: "WHEN I first watched it",
      notes: [
        "rainy Sunday @ uncle's · his only DVD",
        "about 13 · six—no, seven rewatches · flu rewatch",
      ],
    },
    {
      heading: "WHY I return",
      notes: [
        "comfort: jokes land every time",
        "changes as I change: silly → sad → kind",
        "90-minute mood repair",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "go-to",
      partOfSpeech: "adjective",
      meaning: "The one you always choose.",
      example: "It's my go-to film on a bad day.",
    },
    {
      word: "to rewatch",
      partOfSpeech: "verb",
      meaning: "To watch a film or a series again.",
      example: "I rewatch the whole series every autumn.",
    },
    {
      word: "to hold up",
      partOfSpeech: "phrasal verb",
      meaning: "To remain good after a long time.",
      example: "The jokes hold up twenty years later.",
    },
    {
      word: "a feel-good film",
      partOfSpeech: "noun phrase",
      meaning: "A film that leaves you feeling happy.",
      example: "Sometimes you just need a feel-good film.",
    },
    {
      word: "the jokes land",
      partOfSpeech: "phrase",
      meaning: "The humour succeeds and makes people laugh.",
      example: "The one-liners land even when you know them by heart.",
    },
    {
      word: "a comfort watch",
      partOfSpeech: "noun phrase",
      meaning: "Something you watch for reassurance rather than novelty.",
      example: "Old sitcoms are my comfort watch when I'm ill.",
    },
    {
      word: "to age well",
      partOfSpeech: "phrase",
      meaning: "To remain effective or respected as time passes.",
      example: "That kind of humour ages well.",
    },
    {
      word: "casting",
      partOfSpeech: "noun",
      meaning: "The choice of actors for the roles.",
      example: "The casting is perfect down to the smallest part.",
    },
    {
      word: "to spoil",
      partOfSpeech: "verb",
      meaning: "To reveal the ending or the surprises of a story.",
      example: "I won't spoil it, but the last ten minutes are perfect.",
    },
  ],
  sampleResponse: {
    transcript: `I'm going to talk about Groundhog Day, a comedy from the early nineties starring Bill Murray. He plays Phil, a sarcastic TV weatherman who is sent, against his will, to a small town in Pennsylvania to report on a local festival where a groundhog supposedly predicts the weather. He finds the whole thing ridiculous, and he's pretty horrible to everyone around him.

Then something strange happens: he wakes up the next morning and it's the same day again. The same song on the radio, the same people, the same weather. At first he's terrified, then he uses the loop selfishly—stealing money, eating cake for breakfast, being rude with no consequences. But slowly that gets empty, and the film becomes the story of a selfish man learning, over hundreds of the same day, to actually care about other people. He learns the piano, he saves lives, he becomes kind.

I first watched it years ago, on a rainy Sunday afternoon at my uncle's house, because it was the only DVD he owned. I must have been thirteen or so. I've rewatched it at least six times since—actually, seven, but who's counting—most recently last month when I was ill in bed with flu and wanted something familiar.

Why do I keep going back? Mainly because it's the perfect comfort film: watching it feels like visiting a place you love, and the jokes still land every single time. But also because the film changes as I change. As a teenager I laughed at the silly parts; at university I noticed how sad the middle section is—he tries everything to escape and fails every time—and now I see a story about small daily kindness, which is exactly what I need after a hard week. It's ninety minutes that always improve my mood. That's rare.`,
    wordCount: 305,
    durationEstimateSec: 130,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "Title, genre, era and star arrive in one sentence — the fastest possible answer to 'what is it'. The talk then zooms towards character rather than production trivia, which keeps it personal.",
    },
    {
      aspect: "Second bullet — what happens in it",
      note: "The premise is told as a sequence of reactions (terrified → selfish → empty → kind), with the loop's rules shown through repetition: 'the same song, the same people, the same weather'. A synopsis told as transformation avoids the read-the-summary-out-loud sin.",
    },
    {
      aspect: "Third bullet — when you first watched it",
      note: "The uncle's single DVD is the kind of accidental origin that rings true, and the flu rewatch supplies recent proof of the habit. Two anchors — childhood and last month — hold the whole timeline together.",
    },
    {
      aspect: "The extension — why you returned to it",
      note: "Two reasons run in order of depth: comfort ('visiting a place you love') and the film changing as the speaker changes, traced through three life stages. That second reason lifts the card above enjoyment into reflection.",
    },
    {
      aspect: "Spoken register",
      note: "Very short sentences ('That's rare.') are used deliberately for rhythm, and the six-or-seven self-correction is played for a laugh. A comedy described in a deadpan voice convinces.",
    },
    {
      aspect: "Transferable shape",
      note: "Film, first viewing, what happens, why again — reuse this order for any rewatched series or annual ritual. The one rule worth keeping: end on what the film gives you now, not on what happens in it.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "A comfort sitcom series",
      note: "A series changes the arithmetic — episodes, not minutes; the rewatch reason is usually characters as company, and the ending reflects on why people return to fictional friends.",
    },
    {
      approach: "A childhood animation revisited with your own children",
      note: "Watching a film you loved as a child, now beside a new generation, turns the card into one about inheritance; 'why you returned' becomes sharing, not comfort.",
    },
    {
      approach: "A horror film admired for craft",
      note: "Rewatching a horror classic for technique — sound design, suspense, restraint — lets a fan's vocabulary shine while admitting most people watch it once, which sharpens the 'why again'.",
    },
    {
      approach: "An annual ritual film",
      note: "Some families watch the same film every December; the return is calendar-driven, and the reflection explores ritual, tradition and the comfort of knowing every line.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do people watch fewer films at the cinema than before?",
      "Can a film made decades ago still speak to young audiences?",
      "Is rewatching the same film a waste of time?",
    ],
    practice: [
      "Describe the one film you would take to a desert island — the forced choice makes the 'why' carry the whole answer.",
      "Try 'Describe a series you gave up on' — negative reviews need a different adjective set.",
      "Rewatch a favourite scene, then describe it from memory, testing the vocabulary you can recall under pressure.",
    ],
  },
  requirements: [
    {
      key: "what-it-is",
      description: "Names the film, its genre and era, and the lead actor.",
      keywords: ["groundhog", "comedy", "nineties", "murray", "weatherman"],
    },
    {
      key: "what-happens",
      description: "Summarises the premise and the change in the main character.",
      keywords: ["day", "loop", "selfishly", "piano", "kind"],
    },
    {
      key: "when-first-watched",
      description: "Places the first viewing in the speaker's life, with an occasion attached.",
      keywords: ["uncle's", "dvd", "thirteen", "rainy", "afternoon"],
    },
    {
      key: "why-returned",
      description: "Explains rewatching on two levels — comfort and changing personal meaning.",
      keywords: ["comfort", "jokes", "land", "changes", "kindness"],
    },
    {
      key: "conversational-rhythm",
      description: "Mixes short and long sentences in a conversational rhythm rather than reciting a synopsis.",
      keywords: ["then", "slowly", "mainly", "exactly", "rare"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Travel — a place you have visited that exceeded your expectations
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-travel",
  title: "Cue card — a place that beat expectations",
  family: "travel",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  task: "Describe a place you have visited that exceeded your expectations.",
  situation:
    "You have just entered Part 2 of your IELTS Speaking test in Istanbul. The examiner gives you this card, a pencil and sixty seconds to prepare.",
  bullets: ["where you went", "what you expected", "what you found"],
  extension: "and explain why it surprised you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHERE we went",
      notes: [
        "Faroe Islands · 2 uni friends · mid-January",
        "18 islands · Scotland↔Iceland · sheep + rain",
      ],
    },
    {
      heading: "WHAT I expected",
      notes: [
        "4 hrs daylight · horizontal rain · lamb",
        "one gloomy doc · unpronounceable capital",
        "packed books + flask · 'home by Tuesday'",
      ],
    },
    {
      heading: "WHAT we found",
      notes: [
        "weather flips every 20 min → light show",
        "sea iron-grey → whole valley gold",
        "village of 70 w/ café · tunnels under the sea",
        "open kitchens · church concerts",
      ],
    },
    {
      heading: "WHY it surprised me",
      notes: [
        "stereotypes defeated: remote ≠ empty",
        "theatrical: cliffs · fog curtain · posing sheep",
        "the documentaries were the problem, not the islands",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to exceed expectations",
      partOfSpeech: "phrase",
      meaning: "To be better than anyone predicted.",
      example: "The whole trip exceeded every expectation we had.",
    },
    {
      word: "off the beaten track",
      partOfSpeech: "idiom",
      meaning: "Far away from the usual tourist routes.",
      example: "The village felt genuinely off the beaten track.",
    },
    {
      word: "a hidden gem",
      partOfSpeech: "noun phrase",
      meaning: "A place few people know that turns out to be wonderful.",
      example: "The harbour turned out to be a hidden gem.",
    },
    {
      word: "breathtaking",
      partOfSpeech: "adjective",
      meaning: "Extremely beautiful, almost shocking.",
      example: "The cliffs were absolutely breathtaking in the storm.",
    },
    {
      word: "to live up to the hype",
      partOfSpeech: "phrase",
      meaning: "To be as good as people said it would be.",
      example: "The capital more than lived up to the hype.",
    },
    {
      word: "off-season",
      partOfSpeech: "adjective",
      meaning: "During the period when few tourists visit.",
      example: "Off-season travel means empty paths and open tables.",
    },
    {
      word: "the locals",
      partOfSpeech: "noun phrase",
      meaning: "The people who live in a place permanently.",
      example: "The locals pointed us to the best bakery in town.",
    },
    {
      word: "to fall in love with a place",
      partOfSpeech: "phrase",
      meaning: "To become deeply fond of somewhere.",
      example: "I fell in love with the island within a day.",
    },
    {
      word: "to brave",
      partOfSpeech: "verb",
      meaning: "To face something unpleasant with courage.",
      example: "We braved the wind and climbed the headland anyway.",
    },
  ],
  sampleResponse: {
    transcript: `I'd like to talk about a trip to the Faroe Islands, which I took with two university friends a couple of winters ago. We flew in mid-January, which everyone told us was a mistake, and honestly, I nearly cancelled. It's a small group of eighteen islands in the North Atlantic, halfway between Scotland and Iceland, famous for exactly two things: sheep and rain.

So what did I expect? I expected a shortened version of a bad weekend—no, that's unfair; I expected four hours of daylight, horizontal rain, and nothing to do except eat lamb. My image came from one gloomy documentary and the fact that nobody at home could pronounce the capital's name. I packed three books and a flask, fully prepared to be bored; my friends joked we'd be back by Tuesday.

What we found was almost the opposite. Yes, it rained—but the weather changed every twenty minutes, so the light did extraordinary things: one minute the sea was iron-grey, the next a whole valley turned gold. We hiked to a village of about seventy people that has its own café, drove through tunnels that pass under the sea and come out beside waterfalls, and ate in people's homes, because families there open their kitchens to visitors in winter. I'd expected silence and instead found concerts in a church, full of locals and Danish students.

Why did it surprise me? I think because the islands defeated every stereotype I'd brought. I'd assumed remoteness meant emptiness, and instead found a place that's confident, sociable and stubbornly alive in the darkest month. The landscape had been filtered to me as depressing, when actually it's theatrical—the cliffs, the fog rolling in like a curtain, sheep standing in the wind like they're posing. It taught me that my expectations said more about the documentaries I watch than about the place itself. Out of everywhere I've been, it's the trip I talk about most.`,
    wordCount: 323,
    durationEstimateSec: 135,
    bandEstimate: "Band 8.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "Destination, companions and season arrive in one sentence; the second admits that everyone called the timing a mistake — instantly establishing the expectation gap the whole card runs on.",
    },
    {
      aspect: "Second bullet — what you expected",
      note: "The low expectations are owned with humour: four hours of daylight, horizontal rain, nothing to do except eat lamb, books and a flask, 'back by Tuesday'. Slightly exaggerating your own wrongness is a fluency gift, because it produces vivid personal language.",
    },
    {
      aspect: "Third bullet — what you found",
      note: "Each discovery answers an expectation: the rain becomes a twenty-minute light show, the remoteness becomes sociability — open kitchens, church concerts. Contrast, not list, is the organising principle.",
    },
    {
      aspect: "The extension — why it surprised you",
      note: "The analysis goes one level deeper than beauty: remote does not mean empty, the landscape is 'theatrical' rather than depressing, and the closing admission is that the documentaries — not the islands — created the expectations. Self-implicating reflection is the most impressive kind.",
    },
    {
      aspect: "Story sequence",
      note: "The talk runs as one forward drive — arrival, first surprise, escalation, meaning — and the 'out of everywhere I've been' line lands as a final chord instead of a trailing 'so, yeah'.",
    },
    {
      aspect: "How to practise with it",
      note: "Take the expectation-versus-reality ledger from this sample and fill it with a city or region you know well. The sentences here belong to the Faroes; the ledger method is yours to reuse.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "An underrated capital",
      note: "A work trip to a city everyone jokes about — grey, bureaucratic — that turns out to have parks, markets and nightlife; the surprise is about reputation versus reality at city scale.",
    },
    {
      approach: "A beach town out of season",
      note: "Expecting closed shutters and rain, finding empty beaches and locals with time to talk; the reflection can argue that off-season travel trades weather for welcome.",
    },
    {
      approach: "A friend's hometown visited for a wedding",
      note: "Expecting a stopover, finding the place that made your friend; a proud local guide reframes every ordinary street, and the surprise becomes understanding.",
    },
    {
      approach: "A mountain region you assumed was only for serious hikers",
      note: "Expecting exclusion, finding villages, cheese-makers and music festivals; the reflection can ask who the mountains actually belong to.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do tourists change the places they visit, for better or worse?",
      "Should you research a destination before travelling, or is surprise better?",
      "Why do some places get unfairly bad reputations?",
    ],
    practice: [
      "Describe a place that disappointed you — the mirror card, so practise expectation language in reverse.",
      "Attempt 'Describe a trip you would take again tomorrow' — you may borrow the found-details list structure.",
      "Plan 'Describe your country's most underrated region' around one stereotype you want to overturn.",
    ],
  },
  requirements: [
    {
      key: "where-you-went",
      description: "States the destination, the company and the time of year.",
      keywords: ["faroe", "islands", "friends", "mistake", "winters"],
    },
    {
      key: "what-you-expected",
      description: "Owns the low expectations with specifics, even humour.",
      keywords: ["expected", "daylight", "rain", "lamb", "flask"],
    },
    {
      key: "what-you-found",
      description: "Contrasts reality with vivid, varied details — landscape, people, culture.",
      keywords: ["opposite", "gold", "waterfalls", "concerts", "locals"],
    },
    {
      key: "why-it-surprised-you",
      description: "Analyses why the gap between expectation and reality existed, beyond 'it was beautiful'.",
      keywords: ["surprise", "stereotype", "remoteness", "emptiness", "theatrical"],
    },
    {
      key: "forward-moving-story",
      description: "Runs expectation → discovery → insight as one forward-moving story with a strong final line.",
      keywords: ["instead", "found", "taught", "everywhere", "most"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 11. Learning — something new you learned recently
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-learning",
  title: "Cue card — a new skill in progress",
  family: "learning",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe something new you learned recently.",
  situation:
    "You are nearing the end of the IELTS Speaking test in Buenos Aires. The examiner passes you this card and asks you to begin preparing.",
  bullets: ["what you learned", "how you learned it", "what was challenging"],
  extension: "and explain what you plan to do with it.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHAT I learned",
      notes: [
        "BSL basics · Wed evenings · community college",
        "steepest curve since school",
      ],
    },
    {
      heading: "HOW I learned it",
      notes: [
        "café regular · deaf · 'same as usual?' on a napkin",
        "guilt → signed up same evening",
        "deaf teacher · silence rule · watch-copy-correct",
      ],
    },
    {
      heading: "WHAT was challenging",
      notes: [
        "not vocab → grammar: word order",
        "face is grammar · eyebrows = questions",
        "fingers ached · slow name-spelling",
      ],
    },
    {
      heading: "WHAT I plan to do",
      notes: [
        "Dec party → real conversation w/ regular",
        "level 2 → volunteer @ deaf association days",
        "bigger: adapt to the person in front of you",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to pick something up",
      partOfSpeech: "phrasal verb",
      meaning: "To learn a skill informally, without formal study.",
      example: "I picked up the basics surprisingly fast.",
    },
    {
      word: "a steep learning curve",
      partOfSpeech: "noun phrase",
      meaning: "A skill that is very difficult at the beginning.",
      example: "The first month was a steep learning curve.",
    },
    {
      word: "to get to grips with",
      partOfSpeech: "phrase",
      meaning: "To begin to manage or understand something difficult.",
      example: "I'm still getting to grips with the word order.",
    },
    {
      word: "from scratch",
      partOfSpeech: "phrase",
      meaning: "Starting from the very beginning, with no prior knowledge.",
      example: "I learned the whole thing from scratch.",
    },
    {
      word: "to practise",
      partOfSpeech: "verb",
      meaning: "To repeat an activity in order to improve.",
      example: "I practise for fifteen minutes every evening.",
    },
    {
      word: "a lightbulb moment",
      partOfSpeech: "noun phrase",
      meaning: "A sudden moment of understanding.",
      example: "Week three brought my first lightbulb moment.",
    },
    {
      word: "muscle memory",
      partOfSpeech: "noun phrase",
      meaning: "The ability to perform a movement without thinking about it.",
      example: "Your hands learn through muscle memory.",
    },
    {
      word: "out of your comfort zone",
      partOfSpeech: "phrase",
      meaning: "In a situation that feels unfamiliar and challenging.",
      example: "The whole course pushed me out of my comfort zone.",
    },
    {
      word: "to take it further",
      partOfSpeech: "phrase",
      meaning: "To develop a skill to a higher level.",
      example: "Next year I want to take it further with an exam.",
    },
  ],
  sampleResponse: {
    transcript: `Something new I've learned recently is the basics of sign language. Since the spring I've been taking a beginner's course in British Sign Language, two hours on Wednesday evenings at a community college near me, and it's honestly the steepest learning curve I've been on since school.

It started at the café where I volunteer on Saturdays. One of our regulars is deaf, and for months our entire relationship was me writing 'same as usual?' on a napkin. That felt lazy of me, so when I saw the course advertised, I signed up the same evening. Our teacher is deaf herself, which means the class runs in total silence—we watch, copy, and get corrected—and there's one brilliant rule: no speaking, not even in the break.

The hardest part isn't the vocabulary, it's the grammar, because sign language isn't English on the hands—it has its own word order and, crucially, its own facial grammar. Your eyebrows signal a question, your mouth shapes adjectives; get that wrong and you're technically saying nonsense. I also underestimated the physical side. My fingers ached for the first month, and my spelling of new names is still embarrassingly slow. Watching our teacher sign at natural speed is like watching a native speaker: beautiful, and completely beyond me—for now.

As for what I plan to do with it, the immediate goal is small but real: in December the café is hosting a Christmas party, and I want to sign a proper conversation with our regular—not 'same as usual', but 'how's your week been?' After that I'd like to continue to level two, and eventually to interpret—no, 'volunteer' is the honest word—at the deaf association's family days, where helpers with even basic signing are rare and welcome. Longer term, what I've realised is that learning this has changed how I think about communication itself: we adapt to the person in front of us, not the other way round.`,
    wordCount: 327,
    durationEstimateSec: 135,
    bandEstimate: "Band 8.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The skill is named and immediately located in a routine — Wednesday evenings, a community college — so 'recently' and 'how' begin answering at once. 'Steepest learning curve since school' sets the challenge before it is described.",
    },
    {
      aspect: "The origin story",
      note: "The napkin ('same as usual?') is the card's best invention: one object carries the guilt, the relationship and the motivation. Cards about learning are strongest when something specific triggered them.",
    },
    {
      aspect: "Second bullet — how you learned it",
      note: "The method is concrete and slightly surprising: a deaf teacher, total silence, watch-copy-correct. Unusual classroom rules are memorable and prove first-hand knowledge of the course.",
    },
    {
      aspect: "Third bullet — what was challenging",
      note: "The challenge is reframed — not vocabulary but grammar, and grammar located in the face: eyebrows as questions. 'Beautiful, and completely beyond me—for now' balances admiration and honesty, while the 'for now' quietly promises growth.",
    },
    {
      aspect: "The extension — what you plan to do",
      note: "The plans are tiered: a December conversation with the café regular, level two, then volunteering — corrected mid-sentence from 'interpret' to 'volunteer', a self-correction that doubles as modesty. Tiered futures make a plan sound real.",
    },
    {
      aspect: "The closing principle",
      note: "The reflection generalises without preaching: 'we adapt to the person in front of us, not the other way round'. A card about a skill becomes a card about attitude — the shape to copy for any learning story, from sourdough to coding.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "Mastering one difficult dish",
      note: "Learning ramen or croissants from videos gives repetition, failure and flour everywhere; the challenge is technique, and the plan is a dinner party with named guests.",
    },
    {
      approach: "A first-aid course",
      note: "A weekend qualification makes 'what was challenging' about staying calm under simulated pressure, and the plan — keeping the certificate valid, being ready — is quietly serious.",
    },
    {
      approach: "Basic coding for a family need",
      note: "Learning enough programming to build a small tool — a budget tracker, a family quiz — grounds the challenge in debugging patience, and the plan is the next, slightly harder project.",
    },
    {
      approach: "A social dance class",
      note: "Learning salsa or swing makes the challenge physical and social at once: counting, leading, laughing; the plan is the first social night, which gives the ending a date.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Is it harder to learn new things as an adult?",
      "Should governments fund free adult education courses?",
      "Does learning feel different when it is for work rather than for pleasure?",
    ],
    practice: [
      "Describe the last thing you taught yourself online — reuse the trigger → method → wall → plan shape.",
      "Try 'Describe a skill you learned as a child and never lost' — the reflection then explores early learning itself.",
      "Record two minutes on 'a language you would like to learn' and finish with one concrete next step.",
    ],
  },
  requirements: [
    {
      key: "what-you-learned",
      description: "Names the skill precisely and the level reached so far.",
      keywords: ["sign", "language", "basics", "course", "college"],
    },
    {
      key: "how-you-learned-it",
      description: "Explains what triggered the learning and the method, including who taught it.",
      keywords: ["café", "regulars", "teacher", "silence", "corrected"],
    },
    {
      key: "what-was-challenging",
      description: "Identifies what was genuinely hard, with a rule or an example rather than 'it was difficult'.",
      keywords: ["grammar", "eyebrows", "nonsense", "fingers", "speed"],
    },
    {
      key: "future-plans",
      description: "Gives a near-term plan and a longer-term direction for the skill.",
      keywords: ["plan", "december", "conversation", "level", "volunteer"],
    },
    {
      key: "reflection",
      description: "Closes on what learning it revealed about the speaker or about communication in general.",
      keywords: ["realised", "communication", "adapt", "changed", "honest"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
