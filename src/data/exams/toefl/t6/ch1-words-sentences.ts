/**
 * TOEFL iBT Academy — Module 6, Chapter 1 (T-M6, PROMPT 48, Task 8).
 *
 * "Academic words" and "Sentence craft": four lessons on the language engine
 * underneath every section — word families, collocations, sentence structure
 * and grammar accuracy. Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts).
 *
 * Format facts used consistently (verified against official ETS pages; see
 * the T-M1 header for the full list): Reading 50 items ~30 min including
 * Complete the Words (~30 items); Listening 47 items ~29 min, forward-only;
 * Speaking 11 items ~8 min (7 Listen and Repeat + 4 interview items);
 * Writing 12 items ~23 min (10 Build a Sentence + Write an Email + Write for
 * an Academic Discussion). Bands 1.0–6.0 in half steps; overall = average
 * rounded to the nearest half band; no pass mark. This module is the
 * language layer UNDER all four sections, so every lesson names the exact
 * task where its skill pays off.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T6_CH1: LessonSpec[] = [
  // -------------------------------------------------------------------------
  // Unit 1, Lesson 1 — Academic word families
  // -------------------------------------------------------------------------
  {
    slug: "toefl-language-word-families",
    title: "Academic word families",
    description:
      "One academic root, many grammatical outfits: how the noun, verb, adjective and adverb of a family recycle across passages, prompts and answer options — and how to convert between them on demand.",
    objectives: [
      "convert core academic roots between noun, verb, adjective and adverb forms",
      "read a masked word in Complete the Words from its root, its suffix and the grammatical slot around it",
      "choose the form a sentence's grammar demands before checking its spelling",
      "log unfamiliar families from reading passages into a personal word bank",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Academic English runs on a surprisingly small stock of roots, each dressed in several grammatical outfits. A single passage can name an analysis, praise an analytical method and report that analysts interpreted the data — three forms, one family. This lesson trains you to recognise the family through every disguise, to restore masked forms in Complete the Words, and to pick the form your own sentences require.",
        beforeYouStart: [
          "You can read a short academic paragraph and tell its nouns from its verbs.",
          "You know the Reading task families from the format lesson, including Complete the Words.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "All four — one stock of roots feeds every section of the test"],
          ["Task & question types", "Complete the Words masks restore forms; comprehension items recycle family members between passage and options; email and discussion responses draw on the same stock"],
          ["What is assessed", "Whether you can recognise a root through its suffixes and produce the form the slot needs"],
          ["Why this matters", "Roughly thirty of the fifty Reading items are Complete the Words, and every constructed response is read for the range and accuracy of its vocabulary"],
        ],
      },
      { type: "heading", text: "One root, four outfits" },
      {
        type: "text",
        text: "A word family is one root wearing several grammatical outfits. The root carries the meaning; the suffix carries the grammar. Academic writers exploit this constantly: rather than repeat a word, they shift its form — a study may contribute findings, make a contribution to a field, and prove contributory evidence to a wider debate, all inside one paragraph. For you this creates two jobs. Recognition: when a reading option says the authors reinterpret the findings while the passage itself used the noun interpretation, the family link is what tells you the option restates the passage instead of inventing a new claim. Production: when your own email or discussion post needs a noun after an article, you must reach for the noun form, not the verb you happen to remember.",
      },
      {
        type: "definition",
        term: "word family",
        partOfSpeech: "noun phrase",
        definition: "A set of words built from one root by changing its suffix — and often its spelling — so that each member carries the same core meaning in a different grammatical role.",
        example: {
          english: "The family of sustain includes the verb sustain, the nouns sustenance and sustainability, the adjectives sustained and sustainable, and the adverb sustainably.",
          translation: "",
        },
      },
      {
        type: "table",
        title: "Five families and their outfits",
        headers: ["Root", "Noun", "Verb", "Adjective", "Adverb"],
        rows: [
          ["analyse", "analysis", "analyse", "analytical", "analytically"],
          ["interpret", "interpretation", "interpret", "interpretive", "—"],
          ["sustain", "sustainability", "sustain", "sustainable", "sustainably"],
          ["contribute", "contribution", "contribute", "contributing", "—"],
          ["vary", "variation", "vary", "varied", "—"],
        ],
        caption: "Not every family fills every column — where a common adverb is missing, careful writers rephrase instead of forcing one.",
      },
      { type: "heading", text: "Where the payoff lands" },
      {
        type: "text",
        text: "In Complete the Words, a mask like inte___ sits inside a sentence that already tells you the part of speech: after an article and before a preposition, expect a noun; after a subject gap, expect a verb. The slot narrows the candidates before a single letter is restored, and the remaining work is spelling. In the comprehension families, stems and options swap forms of the same root, so family recognition is what lets you match a paraphrased option back to the passage it came from. In your own constructed responses, using a verb where the sentence needs a noun costs accuracy in the very line a rater reads first. And in Listen and Repeat, the suffix is part of the payload: a dropped -ation is a lost word, exactly as a dropped syllable is.",
      },
      {
        type: "steps",
        title: "The four-step form drill",
        intro: "Run this on every gap you meet, in practice and in the test itself.",
        steps: [
          {
            title: "Step one: read the slot before the word",
            text: "Decide what part of speech the gap needs, using only the words around it. An article or a possessive in front of the gap signals a noun head; a subject waiting for its action signals a verb; a position directly before a noun signals an adjective.",
            examples: [
              {
                english: "The inspectors requested a detailed ___ (analyse) of the incident.",
                note: "The slot follows 'a detailed', so a noun is required before any letters are considered.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Step two: strip back to the root",
            text: "Remove the ending you expect and identify the bare root. Families often change spelling when suffixes attach — analyse becomes analysis, and vary becomes variability — so the root, not the surface, is what you bank.",
            examples: [
              {
                english: "From 'the sustainability of the scheme', strip to sustain; from 'a varied diet', strip to vary.",
                note: "Two different spellings, two identical roots — recognition runs on the root.",
                domain: "study",
              },
            ],
          },
          {
            title: "Step three: attach the suffix the slot demands",
            text: "Noun endings include -tion, -ment and -ness; adjective endings include -al, -ive and -able; adverbs take -ly. Check the spelling changes that travel with the suffix: the y of vary becomes an i in variability.",
            examples: [
              {
                english: "Slot after 'remains': 'The interpretation of the results remains open' — -ation completes the noun the article demanded.",
                note: "The suffix is chosen last, after the slot and the root are already settled.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Step four: test the whole sentence aloud",
            text: "Read the completed sentence in your head or under your breath. The ear catches wrong forms that the eye accepts: a detailed analyse fails instantly when heard, while a detailed analysis lands.",
            examples: [
              {
                english: "A learner writes 'The team reached a decide' and hears the break on the read-back; the noun decision repairs it in seconds.",
                note: "The read-aloud check is the cheapest proof pass in this whole module.",
                domain: "work",
              },
            ],
          },
        ],
      },
      {
        type: "text",
        text: "Spelling changes are family facts, not accidents, and the test knows it. Complete the Words masks are built around forms whose endings are part of the answer: restoring interpr___ requires knowing that the noun adds -ation while the verb stops at -et. Two pairs deserve special attention because their forms are near neighbours: economic versus economical, where the suffix changes the meaning from 'related to the economy' to 'thrifty'; and historic versus historical, where one means 'momentous' and the other means 'belonging to history'. Bank these pairs as families with a meaning warning attached.",
      },
      {
        type: "example",
        title: "Families at work",
        note: "Every item below is a slot decision first and a spelling decision second.",
        items: [
          {
            english: "A Complete the Words mask reads 'The committee's deci___ will be announced on Friday'; the possessive before the gap calls for the noun decision, never the verb decide.",
            note: "The slot eliminates decide and decisive before any letters are restored.",
            domain: "exam",
          },
          {
            english: "A reading option claims the authors 'reinterpret the findings', while the passage itself used the noun 'interpretation' — the family link is what makes the option a restatement rather than a fresh claim.",
            note: "Options recycle family members; recognising the root keeps the match honest.",
            domain: "exam",
          },
          {
            english: "A lecture summary notes that 'the experiment was replicated twice, and the replication confirmed the original effect' — two forms, one fact, no repetition.",
            note: "Writers shift forms to avoid repeating a word; the family lets them restate without redundancy.",
            domain: "study",
          },
          {
            english: "A seminar prompt asks students to 'assess the sustainability of the scheme', and a reply argues that the scheme 'cannot be sustained' — same family, two slots, two forms.",
            note: "The prompt's noun and the reply's verb are one concept wearing different grammar.",
            domain: "study",
          },
          {
            english: "A job posting asks for 'an analytical approach to quality control' and then invites candidates to 'analyse a faulty process log' — adjective in the description, verb in the task, one family across the page.",
            note: "Workplace English recycles exactly the families the test does.",
            domain: "work",
          },
          {
            english: "A campus notice announces that 'the library renovation begins on Monday', and a follow-up email explains which sections 'will be renovated first' — noun in the notice, verb in the email.",
            note: "Everyday campus English runs on the same machinery as academic prose.",
            domain: "everyday",
          },
          {
            english: "A Listen and Repeat sentence — 'The interpretation of the results remains open' — is only repeatable if the -ation ending is caught by ear.",
            note: "In repetition items the suffix is part of the payload; dropping it drops a word.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Family mistakes corrected",
        items: [
          {
            wrong: "I memorise every form as a separate word: analyse is one entry, analysis another, analytical a third.",
            right: "Bank families as units — one root, its forms, and the spelling changes between them.",
            reason: "Slot-based recognition and spelling both come from one family map; disconnected entries multiply the memory cost and remove the transfer between sections.",
          },
          {
            wrong: "Any ending will do, so I write 'The team reached a decide'.",
            right: "The slot after an article needs the noun: 'The team reached a decision'.",
            reason: "Suffixes are grammar, not decoration — the article signals a noun head, and a verb form sitting there breaks the sentence in the line a rater reads first.",
          },
          {
            wrong: "Complete the Words is a spelling puzzle, so I stare at the letters until something comes.",
            right: "Read the whole sentence first: the slot's part of speech narrows the candidates, then spelling finishes the job.",
            reason: "The mask sits inside a sentence that already declares its grammar; ignoring given information turns a two-clue item into a one-clue item.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Word families across the four sections",
        reading: {
          text: "The estate office has published its plan for the east wing. The renovation will cut heating demand by an estimated third, and the office believes the savings are sustainable over a decade. Sustained investment of this kind, the report argues, would transform running costs across the campus.",
          task: "List every form of the renovate and sustain families in the notice, and name each form's part of speech.",
        },
        writing: {
          task: "Write three sentences about a change at your school, workplace or city: one sentence must use a verb form of your chosen family, one a noun form, and one an adjective form.",
          guide: [
            "Pick one family first — renovate, sustain, interpret or analyse — and write its forms at the top of the page.",
            "Draft the verb sentence around a subject and a tense you fully control.",
            "Give the noun sentence an article or a possessive in front of the noun head.",
            "Place the adjective form directly before the noun it describes, then read all three sentences aloud.",
          ],
          model:
            "The city council has renovated the old market hall at last. The renovation, finished in March, kept the original brick shell. Councillors now call it the most sustainable project of the decade, and the plan has sustained support across parties ever since.",
        },
        listening: {
          script: "Attention, please. The library will close its east reading room next week for renovation. The sections affected will be renovated in two phases, and librarians will post the phase schedule by Friday. We apologise for the disruption and thank you for your patience.",
          task: "Note each form of 'renovate' you hear, and say whether it works as a noun or a verb in its sentence.",
        },
        speaking: {
          task: "Describe one change at your school, workplace or city: what changed, and what has followed from it. Use at least three forms of one word family.",
          frames: [
            "The council has recently ...",
            "The ..., completed last year, ...",
            "In my view the most ... aspect of the change is ...",
            "Since then, the reform has ...",
          ],
          checklist: [
            "I used at least three forms of one family.",
            "Every form sat in the slot its grammar demands — noun after an article, verb after a subject.",
            "I pronounced the ending of every form clearly.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it lifts the band"],
        rows: [
          ["Runs one family through verb, noun and adjective slots in turn", "Range is judged on control of forms, not on word count — three correct forms of one root display more range than three unrelated words"],
          ["Keeps each form in the grammatical slot it demands", "Accuracy begins at word level: the right root in the wrong form is still an error to a rater"],
          ["Reads the finished sentences aloud before moving on", "The ear catches wrong endings the eye accepts — a two-second check that removes the cheapest errors on the page"],
          ["Varies forms instead of repeating the same word", "Shifted forms read as deliberate vocabulary choice, which is precisely what the scoring language rewards"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Bank ten high-value families with all their forms and spelling changes on one page — start with analyse, interpret, sustain, contribute and vary."],
          ["While the clock runs", "In Complete the Words, read the whole sentence, name the slot's part of speech, then restore the letters."],
          ["If you are stuck", "Park a mask that will not resolve and keep moving; the flag-and-sweep habit from the strategy module applies to single letters too."],
          ["Final minutes", "Reread constructed responses for form errors — a verb where a noun belongs is the cheapest point lost on the page."],
        ],
      },
      {
        type: "summary",
        points: [
          "A word family is one root in several grammatical outfits: the root carries the meaning, the suffix carries the grammar.",
          "The slot decides the form — an article or possessive signals a noun, a subject gap signals a verb, a position before a noun signals an adjective.",
          "Spelling changes travel with suffixes: analysis, sustainability and variability are family facts to be banked, not guessed.",
          "Complete the Words is solved slot first and letters second; comprehension options recycle family members between passage and stem.",
          "Bank families as units and log new ones from every passage — the academic stock is small and it recycles everywhere.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the fundamentals module, chosen for this lesson.",
        items: [
          {
            question: "In the 2026 Reading section, roughly how many of the 50 items are Complete the Words?",
            options: ["About 30", "About 10", "All 50"],
            correctIndex: 0,
            explanation: "About thirty of the fifty items restore masked forms — which is why this lesson treats slot-reading as a first-class test skill.",
            from: "toefl-format-2026",
          },
          {
            question: "What decides whether your second module in Reading is easier or harder?",
            options: ["My performance on the routing module", "A random draw at the test centre", "The order in which I registered"],
            correctIndex: 0,
            explanation: "Two-stage adaptivity routes you from module one; harder masks later usually mean you routed upper.",
            from: "toefl-adaptive-testing",
          },
          {
            question: "Section bands are reported on which scale?",
            options: ["1.0 to 6.0 in half steps", "0 to 9 in whole bands", "Pass or fail"],
            correctIndex: 0,
            explanation: "Bands run 1.0 to 6.0 in half steps, with the overall averaged and rounded to the nearer half step — so language gains convert into visible half steps.",
            from: "toefl-band-scale",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "vocab-match",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Match each family form to the job it performs in a sentence.",
        hints: ["Ask what the word does: names a thing, or describes one?"],
        words: [
          { id: "w1", word: "interpretation", partOfSpeech: "noun" },
          { id: "w2", word: "analytical", partOfSpeech: "adjective" },
          { id: "w3", word: "contribution", partOfSpeech: "noun" },
          { id: "w4", word: "sustainable", partOfSpeech: "adjective" },
        ],
        meanings: [
          { id: "m1", meaning: "one reading of what something means" },
          { id: "m2", meaning: "working by breaking a problem into parts" },
          { id: "m3", meaning: "the act of giving toward a shared effort" },
          { id: "m4", meaning: "able to continue without exhausting what it depends on" },
        ],
        pairs: [
          { wordId: "w1", meaningId: "m1" },
          { wordId: "w2", meaningId: "m2" },
          { wordId: "w3", meaningId: "m3" },
          { wordId: "w4", meaningId: "m4" },
        ],
        feedback: fb(
          "interpretation → one reading; analytical → working by parts; contribution → giving toward an effort; sustainable → able to continue.",
          "Each form was matched by its grammatical job: the two nouns name things, the two adjectives describe — the suffix told you which was which before the meaning did.",
          "Matching a noun to a describing job, or an adjective to a naming job, breaks the slot rule this lesson is built on.",
        ),
        tags: ["toefl", "language", "academic word families"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "vocabulary",
        prompt: "Which form correctly completes: 'The team reached a ___ on the design after two meetings.'?",
        hints: ["What does the word after 'a' have to be?"],
        options: [
          { id: "a", text: "decide" },
          { id: "b", text: "decision" },
          { id: "c", text: "decisive" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "decision",
          "The article 'a' before the gap demands a noun head, and 'reached a decision' is also the natural partnership — slot first, collocation second, spelling last.",
          "decide is the verb form and cannot follow 'a'; decisive is an adjective and would leave the sentence with no noun to head it.",
        ),
        tags: ["toefl", "language", "academic word families"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Type the noun form of 'interpret' to complete the sentence.",
        hints: ["The noun of interpret ends in -ation."],
        sentence: "Archaeologists offered a new ___ of the carvings at the site.",
        acceptedAnswers: ["interpretation"],
        feedback: fb(
          "interpretation",
          "The gap follows the article 'a' and the adjective 'new', so the noun interpretation is required — the same root as the verb, wearing its nominal outfit.",
          "interpretive or interpret would put a verb or adjective where the sentence needs a noun head.",
        ),
        tags: ["toefl", "language", "academic word families"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the extract, then answer.",
        hints: [],
        passageTitle: "A results paragraph",
        passage: "The survey returns were ambiguous. Two analysts read them differently, and the department deferred any interpretation until the raw data could be re-examined by a third team.",
        question: "In this passage, what grammatical job is 'differently' doing?",
        options: [
          { id: "a", text: "It names the action — a verb form." },
          { id: "b", text: "It describes how the analysts read — an adverb modifying the verb." },
          { id: "c", text: "It points at a thing — a noun form." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It describes how the analysts read — an adverb modifying the verb.",
          "The -ly form modifies 'read', telling you how the action happened; the same family appears again as the noun interpretation in the next clause.",
          "Reading it as a verb (a) or a noun (c) misses the slot: the verb 'read' is already there, and adverbs modify verbs rather than naming things.",
        ),
        tags: ["toefl", "language", "academic word families"],
      }),
      ex({
        type: "short-answer",
        difficulty: "easy",
        skill: "vocabulary",
        prompt: "Type the noun form of the verb 'analyse' — one word, the form that follows an article.",
        hints: [],
        question: "What is the noun of analyse?",
        acceptedAnswers: ["analysis"],
        keywords: ["analysis"],
        feedback: fb(
          "analysis",
          "Analyse (verb), analysis (noun), analytical (adjective), analytically (adverb) — one root, four outfits, and the noun is the form that follows an article or possessive.",
          "analyse is the verb itself, and 'analyse's' would be a possessive of the verb, not the noun the slot requires.",
        ),
        tags: ["toefl", "language", "academic word families"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "In Complete the Words, what does the grammatical slot around a mask tell you before you consider spelling?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — masks are pure spelling puzzles." },
          { id: "b", text: "The part of speech required, which narrows the possible forms before any letters are restored." },
          { id: "c", text: "The band the item will earn." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The part of speech required, which narrows the possible forms before any letters are restored.",
          "The sentence around a mask is given information: an article signals a noun, a subject gap a verb. Reading the slot first converts every mask from a guessing game into a two-clue item.",
          "Treating masks as spelling-only puzzles (a) ignores free information, and no item carries its own band (c) — the slot rule is the whole lesson.",
        ),
        tags: ["toefl", "language", "academic word families"],
      }),
    ],
    homework: [
      "Build a one-page family map for ten roots you meet this week — noun, verb, adjective, adverb in four columns — and mark the spelling changes between forms.",
      "From your next reading passage, log five family members you did not already know, each with the sentence you found it in and the slot it occupied.",
    ],
  },
  // -------------------------------------------------------------------------
  // Unit 1, Lesson 2 — Collocations
  // -------------------------------------------------------------------------
  {
    slug: "toefl-language-collocations",
    title: "Collocations",
    description:
      "The partnerships English keeps: which verbs go with which nouns, which adjectives with which descriptions — and why broken partnerships cost comprehension and bands alike.",
    objectives: [
      "recognise verb+noun and adjective+noun partnerships as units of meaning rather than free word choices",
      "repair the classic broken partnerships of the make/do family and the uncountable nouns",
      "bank twenty high-frequency academic collocations and deploy them in email and discussion writing",
      "hear collocations as ready-made chunks in listening instead of assembling them word by word",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "English does not assemble freely. It keeps fixed partnerships: you conduct research rather than making it, and rain is heavy rather than strong. Reading items quietly test these partnerships, and raters notice the moment a verb grabs the wrong noun. This lesson builds the chunk habit — notice the partnership, record it as a pair, and reuse it until it is yours.",
        beforeYouStart: [
          "You can tell a verb from a noun in a sentence and name the object of a verb.",
          "You have the word-family habit from the previous lesson — collocations sit one level above it.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "All four — partnerships are read, heard, written and spoken in every section"],
          ["Task & question types", "Comprehension stems and options swap in collocations; the email and discussion tasks reward natural partnerships; Choose-a-Response replies turn on them"],
          ["What is assessed", "Whether your verb+noun and adjective+noun choices are the ones educated English keeps"],
          ["Why this matters", "A broken partnership is visible in a single line and quietly lowers every constructed response it appears in"],
        ],
      },
      { type: "heading", text: "What a collocation is" },
      {
        type: "text",
        text: "A collocation is a partnership between words that native speakers keep and educated readers expect. The meaning of 'cast doubt on' does not fall out of the three words separately: it is stored and retrieved as one chunk. Academic English is densely collocational — research is conducted, carried out and published; evidence is compelling, findings are preliminary, and a conclusion is reached rather than done. For a test taker this cuts two ways. In recognition, a reading option that says the study 'raises questions about the method' is matching a passage that said the findings 'prompt methodological concerns' — the collocation level is where paraphrase happens. In production, 'do a research' or 'make attention' marks a script instantly, whatever its other virtues.",
      },
      {
        type: "definition",
        term: "collocation",
        partOfSpeech: "noun",
        definition: "A habitual partnership between two or more words — a verb with its noun, an adjective with its noun, an adverb with its adjective — such that other grammatically possible combinations sound wrong.",
        example: {
          english: "We say 'reach a conclusion' and 'pose a challenge'; 'arrive at a conclusion' is possible in formal prose, but 'make a conclusion' is not.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "Broken choice versus kept partnership",
        intro: "The left column is grammatically possible; the right column is what educated English actually says.",
        columns: ["Broken partnership", "Kept partnership"],
        rows: [
          { aspect: "Verb + noun", left: "make research, carry out a decision", right: "conduct research, reach a decision" },
          { aspect: "Adjective + noun", left: "big evidence, tall increase", right: "compelling evidence, sharp increase" },
          { aspect: "Adverb + adjective", left: "strongly aware, deeply recommended", right: "fully aware, highly recommended" },
          { aspect: "Uncountables", left: "an advice, a research, many informations", right: "advice, research, information — no article, no plural" },
        ],
        verdict: "Grammar can build the left column; only exposure builds the right one — so the work of this lesson is banking, not composing.",
      },
      {
        type: "table",
        title: "Twenty partnerships that carry academic weight",
        headers: ["Partnership", "Where it pays off"],
        rows: [
          ["conduct research", "writing about studies; reading stems that describe methods"],
          ["reach a conclusion", "discussion posts; options that restate findings"],
          ["pose a challenge", "talk claims; email problem statements"],
          ["raise awareness", "campus announcements; discussion topics on campaigns"],
          ["draw on evidence", "support in any constructed response"],
          ["cast doubt on", "reading items that test scepticism claims"],
          ["pay attention", "email requests; interview answers about habits"],
          ["take responsibility", "discussion replies about group work"],
          ["sharp increase", "describing data in any task"],
          ["compelling evidence", "argument support in writing and speech"],
        ],
        caption: "Ten pairs here, ten more in your homework log — the aim is twenty banked by test week.",
      },
      { type: "heading", text: "Where the payoff lands" },
      {
        type: "text",
        text: "In reading, the stem rarely quotes the passage; it rewords it at collocation level, so an option that keeps the passage's partnership while changing its words is usually the match. In listening, announcements and talks arrive pre-chunked: catching 'keep you informed' or 'in the coming weeks' as single units is faster and steadier than rebuilding them from parts. In writing, the email and discussion tasks are read for natural partnerships — a single 'make a research' costs more than three long sentences earn. In speaking, interview answers built on chunks sound fluent at any speed, because fluency is measured in chunks delivered, not words per minute.",
      },
      {
        type: "steps",
        title: "The chunk habit",
        intro: "Three moves, one week per cycle.",
        steps: [
          {
            title: "Notice",
            text: "Treat every text you read and every talk you hear as a partnership catalogue. When a verb and a noun travel together twice in one page, that pair is a collocation worth having.",
            examples: [
              {
                english: "A campus announcement says the library 'will remain closed until further notice' — the chunk 'until further notice' is one unit, not five words.",
                note: "Announcements are the densest chunk sources in the test.",
                domain: "everyday",
              },
            ],
          },
          {
            title: "Record the pair, not the word",
            text: "Log the partnership exactly as it occurred, with one example sentence of your own. A note that says only 'research' teaches nothing; a note that says 'conduct research — to carry out a systematic study' teaches the verb, the noun and the register at once.",
            examples: [
              {
                english: "Log entry: 'cast doubt on — to make something seem less certain. The delay cast doubt on the whole timetable.'",
                note: "Definition plus own example: the entry is usable the day it is written.",
                domain: "study",
              },
            ],
          },
          {
            title: "Reuse within a week",
            text: "Deploy every banked partnership in one constructed response — an email draft, a discussion post, a spoken answer. A chunk unused is a chunk unlearned, and retrieval is what moves a partnership from the page into production.",
            examples: [
              {
                english: "A learner's discussion post opens: 'I want to build on Maya's point, and the survey she cites does pose a challenge to my earlier view.'",
                note: "Two banked chunks doing real work in one sentence.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Partnerships at work",
        note: "Spot the chunk in each item before reading its note.",
        items: [
          {
            english: "A reading option says the findings 'cast doubt on the earlier estimate', rewording a passage that claimed the numbers 'make the earlier estimate look unreliable' — matched at partnership level, not word level.",
            note: "The option keeps the scepticism; the surface words are free to change.",
            domain: "exam",
          },
          {
            english: "An email task about a missed deadline is answered with 'I take full responsibility for the delay, and I will keep you informed at every step' — two chunks carrying the register a rater listens for.",
            note: "Partnerships do the politeness work that single words cannot.",
            domain: "exam",
          },
          {
            english: "A learner writes 'the data show a sharp increase in enrolment, though the evidence is not yet compelling' — two adjective partnerships describing data in one line.",
            note: "Data description is the collocation-richest zone in academic writing.",
            domain: "study",
          },
          {
            english: "A seminar reply opens 'I'd like to draw on what Omar said' — the chunk borrows authority from the classmate's point while adding a new one.",
            note: "Discussion replies are built from exactly these borrowing chunks.",
            domain: "study",
          },
          {
            english: "A supervisor's note reads 'Please pay attention to the deadline; we cannot conduct the review without your section' — two partnerships in one routine email.",
            note: "Workplace English is chunk-dense; the test copies it faithfully.",
            domain: "work",
          },
          {
            english: "A Choose-a-Response item offers 'That sounds great — count me in' against two replies that translate literally; the kept idiom is the natural one.",
            note: "In response items, the natural chunk usually wins over the grammatical but foreign line.",
            domain: "exam",
          },
          {
            english: "A housing notice states 'Rent must be paid in advance; refunds are not available' — two fixed partnerships that daily life reuses weekly.",
            note: "Daily-life reading texts are partnership lists in disguise.",
            domain: "everyday",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Partnership mistakes corrected",
        items: [
          {
            wrong: "I will do a research on this topic.",
            right: "I will conduct research on this topic.",
            reason: "Research is uncountable and partners with conduct or carry out; do plus an article breaks the countability rule and the partnership in the same three words.",
          },
          {
            wrong: "There was a strongly growth in sales last quarter.",
            right: "There was a strong growth in sales last quarter.",
            reason: "An adverb cannot premodify a noun; the adjective form is required before a noun head, however adverbial the intended meaning feels.",
          },
          {
            wrong: "Please give me an advice about the essay.",
            right: "Please give me some advice about the essay.",
            reason: "Advice is uncountable: no article, no plural. The quantifier some carries the load the article would normally carry.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Collocations across the four sections",
        reading: {
          text: "The tutoring centre will raise awareness of its new evening service during registration week. Staff plan to conduct a short survey of study habits, and the coordinator hopes to reach a conclusion about opening hours by the end of the month. She added that the survey would pose no burden: 'It takes two minutes, and every response helps us draw on real evidence rather than guesses.'",
          task: "Underline every banked partnership in the notice, then add any new one to your log with an example sentence.",
        },
        writing: {
          task: "Write a short email to a professor asking to join a research project. Use at least four partnerships from this lesson, and keep the register appropriate for a first request.",
          guide: [
            "Open with the purpose in your first sentence — a request email that delays its point reads as evasive.",
            "Choose your four partnerships before drafting, and write them at the top of the page.",
            "Give one concrete reason you can contribute, supported by one specific fact about yourself.",
            "Close by offering a next step, and reread once for broken partnerships before submitting.",
          ],
          model:
            "Dear Professor Adeyemi, I am writing to ask whether I could contribute to the migration study your lab is conducting. I completed the methods course last term, and I would like to conduct the interview stage if that would be useful. I can take responsibility for scheduling and transcription, and I will keep you informed of progress each week. If the timing poses a problem, I would be glad to help in a smaller role. Yours sincerely, Lena Park.",
        },
        listening: {
          script: "Good morning. The facilities office has published the timetable for the heating repairs. Work in the west block will begin on Tuesday, and we expect it to pose few problems for classes. Supervisors will conduct inspections each morning, and notices will be posted to keep residents informed. We apologise for the disruption and thank you for your patience.",
          task: "Note every partnership you hear, and add one new chunk to your log with its sentence.",
        },
        speaking: {
          task: "Answer this interview item in about thirty seconds: 'Describe a project you worked on with others. What was your role, and what difficulty did the group face?'",
          frames: [
            "Last term I contributed to ...",
            "My role was to conduct ...",
            "The main difficulty the group faced was ...",
            "In the end we reached a conclusion that ...",
          ],
          checklist: [
            "I used at least three banked partnerships naturally.",
            "No partnership is broken — no 'do a research' or 'make attention'.",
            "The answer names my role in the first ten seconds.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it lifts the band"],
        rows: [
          ["States its purpose in the first sentence", "Request emails are read for task fulfilment; a delayed point reads as evasion and costs the criterion directly"],
          ["Deploys four partnerships chosen before drafting", "Natural collocation is a visible vocabulary criterion — chosen chunks are deliberate, accidental ones are rare"],
          ["Supports the request with one specific fact", "A concrete reason persuades; generic praise for the professor's work persuades no one"],
          ["Closes with a next step the reader can act on", "Ending on an offer gives the email shape and leaves the register consistent from greeting to sign-off"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Carry a twenty-partnership log and read it on the morning of the test; chunks that are warm are chunks that surface."],
          ["While the clock runs", "Read comprehension options at partnership level before word level — the option that keeps the passage's collocation is usually the match."],
          ["If you are stuck", "Between two options, prefer the one whose verb+noun partnership you have actually met in real texts; invented-sounding chunks are distractors."],
          ["Final minutes", "Sweep constructed responses for the three classic breaks: a research, an advice, make attention — thirty seconds, three repairs."],
        ],
      },
      {
        type: "summary",
        points: [
          "A collocation is a stored partnership — verb+noun, adjective+noun, adverb+adjective — retrieved as one chunk, not assembled from parts.",
          "Reading and listening items reword at collocation level, so matching happens at partnership level before word level.",
          "Uncountable nouns (research, advice, information) take no article and no plural, and their verbs are fixed: conduct, give, share.",
          "The chunk habit is notice, record the pair with an example, and reuse within a week — a chunk unused is a chunk unlearned.",
          "One broken partnership is visible in a single line; four natural ones in an email read as the register the task rewards.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from the fundamentals module, two from this module's first lesson.",
        items: [
          {
            question: "Beyond the ten reconstructions, which two constructed tasks make up the Writing section?",
            options: ["An email and an academic discussion post", "Two essays of 250 words", "A letter and a report"],
            correctIndex: 0,
            explanation: "Write an Email and Write for an Academic Discussion are the two constructed tasks — both are read for natural partnerships, which is where this lesson pays.",
            from: "toefl-format-2026",
          },
          {
            question: "In a word family, what decides which form a gap needs?",
            options: ["The grammatical slot around the gap", "The length of the root", "The alphabetical position of the word"],
            correctIndex: 0,
            explanation: "The slot's part of speech — signalled by articles, subjects and pre-noun positions — chooses the form before spelling is considered.",
            from: "toefl-language-word-families",
          },
          {
            question: "Which pairing is the natural one in academic English?",
            options: ["conduct research", "make a research", "do a research"],
            correctIndex: 0,
            explanation: "Research partners with conduct or carry out; make and do are broken partners, and 'a research' is impossible because the noun is uncountable.",
            from: "toefl-language-word-families",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "vocab-match",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Match each partnership to what it does in a sentence.",
        hints: ["Ask what the verb does to its noun."],
        words: [
          { id: "w1", word: "conduct research", partOfSpeech: "verb + noun" },
          { id: "w2", word: "pose a challenge", partOfSpeech: "verb + noun" },
          { id: "w3", word: "reach a conclusion", partOfSpeech: "verb + noun" },
          { id: "w4", word: "raise awareness", partOfSpeech: "verb + noun" },
        ],
        meanings: [
          { id: "m1", meaning: "make more people know and care about something" },
          { id: "m2", meaning: "carry out a systematic study" },
          { id: "m3", meaning: "arrive at a final judgement after weighing" },
          { id: "m4", meaning: "create a difficulty that must be answered" },
        ],
        pairs: [
          { wordId: "w1", meaningId: "m2" },
          { wordId: "w2", meaningId: "m4" },
          { wordId: "w3", meaningId: "m3" },
          { wordId: "w4", meaningId: "m1" },
        ],
        feedback: fb(
          "conduct research → systematic study; pose a challenge → create a difficulty; reach a conclusion → final judgement; raise awareness → make people care.",
          "Each chunk was matched by the verb's action on its noun — the partnership carries the meaning, and the chunk is retrieved as one unit.",
          "Cross-matching the pairs (research with awareness, conclusions with studies) produces grammatical nonsense that native readers reject at a glance.",
        ),
        tags: ["toefl", "language", "collocations"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "vocabulary",
        prompt: "Which sentence uses a natural partnership?",
        hints: ["Research is uncountable; only one verb keeps the partnership."],
        options: [
          { id: "a", text: "The lab made a research into sleep patterns." },
          { id: "b", text: "The lab conducted research into sleep patterns." },
          { id: "c", text: "The lab did a research on sleep patterns." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The lab conducted research into sleep patterns.",
          "Research is uncountable — no article — and its habitual partners are conduct and carry out; make and do are broken partners that mark a translated line instantly.",
          "'A research' is impossible in any register, and do never travels with research in educated English.",
        ),
        tags: ["toefl", "language", "collocations"],
      }),
      ex({
        type: "correct-mistake",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Repair the broken partnership in this sentence.",
        hints: ["The final clause has one wrong verb."],
        incorrectSentence: "The team made an important discovery, and we must make attention to its limits.",
        acceptedAnswers: [
          "The team made an important discovery, and we must pay attention to its limits.",
          "The team made an important discovery, and we must pay attention to its limits",
        ],
        feedback: fb(
          "The team made an important discovery, and we must pay attention to its limits.",
          "Make a discovery is itself a kept partnership — the broken verb is the second one: attention is paid, never made, so the repair touches exactly one word.",
          "Changing 'made an important discovery' would break a correct chunk; the only error is make attention, and the fix is pay attention.",
        ),
        tags: ["toefl", "language", "collocations"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Complete the partnership with the present perfect of 'raise'.",
        hints: ["The noun after the gap is 'concerns'."],
        sentence: "The delays have ___ concerns among residents about the whole timetable.",
        acceptedAnswers: ["raised"],
        feedback: fb(
          "raised",
          "Concerns are raised — the verb takes its past participle in the present perfect, and the partnership raise concerns is one of the most frequent in campus and news English.",
          "Rise cannot take an object, and 'have rose' is a form error; only raised completes both the grammar and the partnership.",
        ),
        tags: ["toefl", "language", "collocations"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the extract, then answer.",
        hints: [],
        passageTitle: "A campus notice",
        passage: "The university library extended its opening hours during the examination weeks after students complained that midnight closing left no quiet place to revise. Librarians reported higher borrowing in every week of the period, and the scheme will continue next term.",
        question: "Which statement restates the notice faithfully?",
        options: [
          { id: "a", text: "After students complained, the library kept its doors open later in the examination weeks, and borrowing rose." },
          { id: "b", text: "The library raised awareness of longer hours, and borrowing fell in every week." },
          { id: "c", text: "Students said the longer hours did their revision no good, so the scheme ended." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "After students complained, the library kept its doors open later in the examination weeks, and borrowing rose.",
          "Option (a) keeps both facts and their direction — complaint, extension, rising borrowing — rewording at partnership level (kept its doors open for extended hours).",
          "Option (b) reverses the borrowing and swaps in a chunk the notice never used; option (c) invents an ending the notice contradicts — the scheme continues.",
        ),
        tags: ["toefl", "language", "collocations"],
      }),
      ex({
        type: "short-answer",
        difficulty: "easy",
        skill: "vocabulary",
        prompt: "Type the one verb that completes the partnership '___ a challenge'.",
        hints: [],
        question: "Which single verb does 'a challenge' habitually take?",
        acceptedAnswers: ["pose"],
        keywords: ["pose"],
        feedback: fb(
          "pose",
          "Challenges are posed in academic English; a difficulty may also be presented, but pose a challenge is the partnership reading items and talk prompts reuse.",
          "Make a challenge and do a challenge are broken partners — the verb that survives with this noun is pose.",
        ),
        tags: ["toefl", "language", "collocations"],
      }),
    ],
    homework: [
      "Start a twenty-partnership log: ten from this lesson's table, ten new ones harvested from a reading passage or a campus notice, each with one example sentence of your own.",
      "Write a six-sentence email about a missed deadline, using at least four banked partnerships, then reread it once hunting only for broken chunks.",
    ],
  },
  // -------------------------------------------------------------------------
  // Unit 2, Lesson 1 — Sentence structure
  // -------------------------------------------------------------------------
  {
    slug: "toefl-language-sentence-structure",
    title: "Sentence structure",
    description:
      "From clause combination to parallel series: how to build the sentences Build a Sentence scrambles, and how to rebuild your own deliberately.",
    objectives: [
      "combine short sentences into complex sentences through subordination and modification",
      "rebuild scrambled parts into a correct sentence — the exact operation the Build a Sentence items grade",
      "place modifiers next to what they describe, and keep every series parallel",
      "diagnose structure the way the writing criteria do: variety that stays in control",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every Build a Sentence item is a small structural crime scene: the parts are all there, in the wrong order, and your job is reconstruction. The same knowledge runs the other direction too — combining two short sentences into one controlled complex sentence is the fastest range upgrade your email and discussion posts can get. This lesson teaches the parts, the joints and the checks, in that order.",
        beforeYouStart: [
          "You can find the subject and the verb of any sentence you read.",
          "You know from the format lesson that Writing contains ten Build a Sentence items at about one minute each.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing directly; Reading, Listening and Speaking indirectly — every section runs on sentences"],
          ["Task & question types", "Build a Sentence items are graded structure reconstruction; email and discussion responses are read for variety under control"],
          ["What is assessed", "Whether you can join clauses correctly, attach modifiers where they belong, and keep series parallel"],
          ["Why this matters", "Ten of the twelve Writing items are reconstructions — one misplaced token there is a lost item, not a style point"],
        ],
      },
      { type: "heading", text: "The parts and the joints" },
      {
        type: "text",
        text: "An independent clause stands alone: subject, verb, and a complete thought. A dependent clause has a subject and verb too, but a subordinating word holds it in service — although, because, if, while — or a relative pronoun embeds it inside a noun as description. Combination means joining one independent clause to one or more dependents; the independent clause is the spine, and everything else attaches to it. Two rules govern the joints. First, one connector per joint: although already marks the clause, so although … but doubles the signal into an error. Second, placement carries meaning: a comma after a fronted dependent clause, no comma before a restrictive one that narrows the noun it follows.",
      },
      {
        type: "grammar-rule",
        title: "Subordination: although, because, which",
        rule: "A subordinating conjunction (although, because, if, while) turns a full clause into a dependent clause that attaches to an independent one; a relative pronoun (who, which, that) embeds a describing clause inside a noun.",
        explanation:
          "Contrast takes although or while; reason takes because; description takes which or that. A dependent clause cannot stand alone — left alone it is a fragment. Fronted dependent clauses take a comma at the joint; dependent clauses that come after the main clause usually do not.",
        examples: [
          { english: "Although the sample was small, the effect appeared in every trial.", translation: "" },
          { english: "The archive, which opened in 1974, holds the region's trade ledgers.", translation: "" },
          { english: "Because funding arrived late, the team shortened the survey period.", translation: "" },
        ],
        exceptions: [
          "Despite and in spite of take a noun or gerund, never a clause: despite the delay, not despite the delay was long.",
          "Which can head a non-restrictive clause after a comma; that cannot: the plan, which failed, ... but never the plan, that failed, ...",
          "One connector per joint: although the pilot succeeded, but ... is a doubled signal and always wrong.",
        ],
      },
      { type: "heading", text: "Modification and parallelism" },
      {
        type: "text",
        text: "A modifier must sit next to what it describes. A participle opening a sentence describes the subject that follows the comma — Walking to the lab, we saw the results is fine, while Walking to the lab, the results surprised us claims the results took a walk. Relative clauses add information without starting a new sentence, and non-restrictive ones are fenced with commas because they comment rather than narrow. Parallelism is the other discipline: items in a series share one shape. The course involves reading journals, interviewing participants and writing a report — three -ing forms. Break the series — to interview, interviews, interviewed — and the sentence visibly loses control, which is precisely what the accuracy language penalises.",
      },
      {
        type: "comparison",
        title: "Coordination versus subordination",
        intro: "Both join clauses; they signal different relationships and earn different ranges.",
        columns: ["Coordination (and, but, so)", "Subordination (although, because, which)"],
        rows: [
          { aspect: "What it signals", left: "Equal weight between two ideas", right: "One idea serves another — contrast, reason, description" },
          { aspect: "Shape it produces", left: "Two independent clauses, joined by a comma and a coordinator", right: "A dependent clause attached to an independent spine" },
          { aspect: "Range value", left: "Necessary but flat — strings of and/but/so read as simple prose", right: "The visible variety raters are reading for; each dependent clause is range under control" },
          { aspect: "Typical repair", left: "Three coordinated clauses in a row → combine two of them", right: "One although or which clause per paragraph, placed where the logic needs it" },
        ],
        verdict: "Coordinate for balance; subordinate for hierarchy. A constructed response with only coordination is structurally simple no matter how long its sentences are.",
      },
      {
        type: "steps",
        title: "The Build-a-Sentence solve in four moves",
        intro: "Run this on every scrambled item and every combination you write.",
        steps: [
          {
            title: "Move one: find the spine",
            text: "Locate the subject and verb that could stand alone as a sentence. Every scramble hides one independent clause, and finding it first removes most of the noise: the spine fixes what remains.",
            examples: [
              {
                english: "Tiles: [The] [team] [repeated] [the] [experiment] [twice] [because] [the] [initial] [results] [were] [promising] — the spine is 'The team repeated the experiment twice'.",
                note: "The because-words cannot be the spine; a dependent clause never stands alone.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move two: attach each connector to its clause",
            text: "Send every subordinator or relative pronoun to the front of the idea it governs. If the dependent clause fronts, one comma marks the joint; if it trails, usually no comma is needed.",
            examples: [
              {
                english: "Same tiles, second arrangement: 'Because the initial results were promising, the team repeated the experiment twice.'",
                note: "Fronted dependent clause, one comma at the joint — both arrangements are correct builds.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move three: check agreement across the joins",
            text: "A connector changes nothing about agreement: every verb still matches its own subject. Plural nouns inside relative clauses take plural verbs; a singular head with plural neighbours still takes the singular.",
            examples: [
              {
                english: "The records, which were archived in May, list every shipment — 'records were' inside the clause, 'records list' in the spine.",
                note: "Two verbs, two subjects, both agreeing — the joint is invisible when it is correct.",
                domain: "study",
              },
            ],
          },
          {
            title: "Move four: read the rebuilt sentence as a whole",
            text: "The final check is rhythm and meaning together: one connector per joint, modifiers beside their targets, and a series that shares one shape. If the read-aloud stumbles, the build is wrong somewhere the eye has already accepted.",
            examples: [
              {
                english: "Wrong build caught on read-back: 'Although the pilot succeeded, but the launch was delayed' — the doubled connector fails the whole item.",
                note: "One wrong token costs the whole reconstruction; the read-back is the insurance.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Structure at work",
        note: "Each item is one structural decision, caught in the act.",
        items: [
          {
            english: "A Build a Sentence item presents [Because] [the] [venue] [was] [small] [the] [organisers] [moved] [the] [fair] [.] [despite] [however] — distractors despite and however cannot govern a clause with its own subject and verb.",
            note: "Only because attaches a full dependent clause here; the other two take nouns.",
            domain: "exam",
          },
          {
            english: "Two choppy notes — 'The pilot succeeded. The launch was delayed.' — combine as 'Although the pilot succeeded, the launch was delayed', and the summary gains one controlled complex sentence.",
            note: "Combination is a range upgrade performed on material you already had.",
            domain: "study",
          },
          {
            english: "An email explains: 'The shipment, which left the depot on Monday, will arrive before the audit' — one which clause carries the context without a second sentence.",
            note: "Non-restrictive clauses between commas add information without stealing the spine.",
            domain: "work",
          },
          {
            english: "A discussion post lists 'the scheme requires public funding, local approval and sustained staffing' — three noun phrases in one shape.",
            note: "Parallel series read as control; broken series read as haste.",
            domain: "exam",
          },
          {
            english: "A set of instructions corrects itself: 'Send the file to the archive, which keeps every version' — not '... to the archive, that keeps every version'.",
            note: "After a comma, which is the only relative pronoun available.",
            domain: "work",
          },
          {
            english: "A dangling repair: 'Reviewing the data, the team noticed a third pattern' replaces 'Reviewing the data, a third pattern was noticed' — the participle now describes the subject that follows the comma.",
            note: "Fronted participles describe the subject; nothing else.",
            domain: "study",
          },
          {
            english: "A roommate's message reads 'Although I'll be late, dinner is already in the oven' — one fronted dependent clause, one comma, everyday register.",
            note: "The machinery of academic prose runs everyday life too; the test notices because life does.",
            domain: "everyday",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Structure mistakes corrected",
        items: [
          {
            wrong: "Although the pilot succeeded, but the launch was delayed.",
            right: "Although the pilot succeeded, the launch was delayed.",
            reason: "One connector per joint: although already marks the clause, so but doubles the signal into an error no rater can ignore — and in Build a Sentence it fails the item outright.",
          },
          {
            wrong: "The proposal, that the committee rejected, lacked a costed plan.",
            right: "The proposal, which the committee rejected, lacked a costed plan.",
            reason: "A non-restrictive clause set off by commas takes which; that only narrows a noun and never accepts the commas.",
          },
          {
            wrong: "Walking to the lab, the results surprised us.",
            right: "While we were walking to the lab, the results surprised us.",
            reason: "A fronted participle must describe the subject that follows the comma; as written, the results are the ones doing the walking.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Sentence structure across the four sections",
        reading: {
          text: "The bridge closed in 1962. The council promised a replacement. Funding never arrived. Ferries carried the traffic. A ferry company bought the old toll house in 1974. The company converted it into a museum.",
          task: "Combine the six sentences into no more than three sentences, using at least one although or because clause and one which clause.",
        },
        writing: {
          task: "From the reading material above, write one paragraph of three sentences: the first must subordinate with although or because, the second must embed a which clause, and the third must carry a three-item parallel series.",
          guide: [
            "Decide the spine of each sentence before choosing its connector — what is the independent claim?",
            "Give the although or because clause the job it actually does: contrast or reason, never decoration.",
            "Fence the which clause between commas so it comments instead of narrowing.",
            "Build the parallel series from one repeated shape, and read the paragraph aloud once before submitting.",
          ],
          model:
            "Although the council promised a replacement bridge, funding never arrived, and ferries carried the traffic for a decade. The old toll house, which a ferry company bought in 1974, now holds a small museum of the crossing. Its exhibits cover the closure, the ferry years and the museum's own founding, and local schools visit every June.",
        },
        listening: {
          script: "Attention, passengers. The 18:40 service will depart from platform three because earlier engineering works have now cleared. Although the buffet car is closed today, trolley service will pass through both halves of the train. We apologise for the disruption, which we know has affected many journeys this week.",
          task: "Note each dependent clause you hear, and say whether it signals contrast, reason or description.",
        },
        speaking: {
          task: "Answer this interview item in about thirty seconds: 'Describe a decision that took longer than you expected. What made it slow?'",
          frames: [
            "Although we had agreed on the goal, ...",
            "The main delay, which nobody had planned for, came from ...",
            "We needed time, agreement and ...",
            "Because ..., we eventually ...",
          ],
          checklist: [
            "My first sentence answers the question directly.",
            "I used at least one although or because clause correctly.",
            "Any series I used keeps one shape throughout.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it lifts the band"],
        rows: [
          ["Subordinates the first sentence with although or because", "Dependent clauses are the visible variety the criteria reward — range under control rather than length"],
          ["Embeds a which clause between commas", "One sentence carries two pieces of information, which reads as planning rather than stacking"],
          ["Builds the parallel series from one repeated shape", "Parallelism signals control; a broken series signals haste in the exact line a rater is inspecting"],
          ["Reads the paragraph aloud before finishing", "Doubled connectors and dangling modifiers are caught by ear faster than by eye"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rehearse the four-move solve on ten scrambles until finding the spine takes under ten seconds."],
          ["While the clock runs", "In Build a Sentence, build the spine first, attach connectors second, and never spend more than the per-item minute on one item."],
          ["If you are stuck", "Two candidate builds that both read aloud smoothly are usually both correct; choose one, confirm agreement, and move."],
          ["Final minutes", "Sweep email and discussion responses for the two visible repairs: doubled connectors and broken series."],
        ],
      },
      {
        type: "summary",
        points: [
          "An independent clause is the spine; dependent clauses — although, because, which — attach to it and never stand alone.",
          "One connector per joint, one comma after a fronted dependent clause, and which after a comma where that cannot go.",
          "Modifiers sit beside what they describe; a fronted participle describes the subject that follows the comma.",
          "Parallel series share one shape; a broken series is visible loss of control in a single line.",
          "Build a Sentence is solved spine first, connectors second, agreement third, read-back fourth — the same order for your own writing.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from the fundamentals module, two from this module's earlier lessons.",
        items: [
          {
            question: "How many Build a Sentence items does the Writing section carry?",
            options: ["Ten", "Five", "Twenty"],
            correctIndex: 0,
            explanation: "Ten reconstruction items at about one minute each, plus the email and the discussion response — twelve items in about twenty-three minutes.",
            from: "toefl-format-2026",
          },
          {
            question: "Which verb completes the partnership '___ research'?",
            options: ["conduct", "make", "do"],
            correctIndex: 0,
            explanation: "Research partners with conduct or carry out; make and do are broken partners, and the noun is uncountable.",
            from: "toefl-language-collocations",
          },
          {
            question: "The adjective form in the family of 'analyse' is…",
            options: ["analytical", "analysis", "analyse"],
            correctIndex: 0,
            explanation: "The -ical suffix builds the adjective; the noun takes -is and the verb stays bare — one root, three outfits.",
            from: "toefl-language-word-families",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "sentence-build",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Build the sentence. Two tiles are distractors, and the because clause must carry its own subject and verb.",
        hints: [
          "Find the spine first: who did what, standing alone.",
          "The because clause explains why — attach it after the main clause with no comma.",
        ],
        tiles: [
          "The",
          "team",
          "repeated",
          "the",
          "experiment",
          "twice",
          "because",
          "the",
          "initial",
          "results",
          "were",
          "promising",
          ".",
          "however",
          "despite",
          "was",
        ],
        acceptedSentences: ["The team repeated the experiment twice because the initial results were promising ."],
        feedback: fb(
          "The team repeated the experiment twice because the initial results were promising.",
          "The spine is 'The team repeated the experiment twice'; because attaches a reason clause with its own subject and verb, while however needs a semicolon and despite can only take a noun — both distractors fail the joint.",
          "Adding 'however' or 'despite' produces a doubled or impossible connector, and 'was' breaks agreement with the plural results.",
        ),
        tags: ["toefl", "language", "sentence structure"],
      }),
      ex({
        type: "grammar-identify",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Analyse the highlighted phrase.",
        hints: ["Does the phrase stand alone, or does it describe a noun?"],
        sentence: "The archive, which opened in 1974, holds the region's trade ledgers.",
        focus: "which opened in 1974",
        question: "What is the job of the highlighted phrase?",
        taxonomy: "clause types",
        options: [
          { id: "a", text: "A non-restrictive relative clause adding extra information about the archive" },
          { id: "b", text: "A new independent clause making a second claim" },
          { id: "c", text: "A question about the archive's opening date" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A non-restrictive relative clause adding extra information about the archive",
          "Set off by commas, the which clause comments on the archive without narrowing it; the sentence would still stand if the clause were removed, which is the test for non-restrictive status.",
          "It has no independent standing (b) — remove the archive and nothing remains — and word order alone cannot make it a question (c).",
        ),
        tags: ["toefl", "language", "sentence structure"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Which sentence keeps its series parallel?",
        hints: [],
        options: [
          { id: "a", text: "The course involves reading journals, to interview participants, and writing a report." },
          { id: "b", text: "The course involves reading journals, interviewing participants, and writing a report." },
          { id: "c", text: "The course involves read journals, interviewing participants, and a report." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The course involves reading journals, interviewing participants, and writing a report.",
          "All three items share the -ing shape, each taking its own object; the series reads as one controlled structure.",
          "Option (a) mixes an infinitive into an -ing series, and option (c) breaks both the shapes and the objects — a broken series is visible loss of control.",
        ),
        tags: ["toefl", "language", "sentence structure"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Type the relative pronoun the clause requires.",
        hints: [],
        sentence: "The report, ___ was published in May, revises the earlier estimates.",
        acceptedAnswers: ["which"],
        feedback: fb(
          "which",
          "A non-restrictive clause set off by commas takes which; that never accepts the commas, so the clause would have to be rewritten to use it.",
          "That cannot follow a comma in standard written English, and who is reserved for people — which is the only pronoun the slot allows.",
        ),
        tags: ["toefl", "language", "sentence structure"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Name the clause type in two words.",
        hints: [],
        question: "What is a clause that could stand alone as a complete sentence called?",
        acceptedAnswers: ["independent clause", "main clause"],
        keywords: ["independent", "main", "clause"],
        feedback: fb(
          "An independent clause",
          "The independent clause is the spine of every sentence you build: subject, verb, complete thought, able to stand alone — dependent clauses attach to it and never stand alone.",
          "Subordinate, relative and dependent all name clauses that cannot stand alone — the exact opposite of the label asked for.",
        ),
        tags: ["toefl", "language", "sentence structure"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the extract, then answer.",
        hints: [],
        passageTitle: "An archive note",
        passage: "The archive contains letters from the 1840s. Most were written by engineers. A few, which the museum acquired in 1962, describe the bridge works in detail, and the rest concern wages and weather.",
        question: "What does 'which the museum acquired in 1962' do in this sentence?",
        options: [
          { id: "a", text: "It adds a non-restrictive clause giving extra information about 'A few'." },
          { id: "b", text: "It starts a new independent clause about the museum." },
          { id: "c", text: "It asks which letters were acquired and when." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It adds a non-restrictive clause giving extra information about 'A few'.",
          "The commas fence the clause off as a comment on 'A few'; remove it and the sentence still stands, which is the signature of a non-restrictive relative clause.",
          "The clause cannot stand alone (b) and its word order is declarative, not interrogative (c) — the commas carry the description, not a question.",
        ),
        tags: ["toefl", "language", "sentence structure"],
      }),
    ],
    homework: [
      "Take five pairs of short sentences from your own recent writing and combine each pair twice: once with although or because, once with a which clause — then mark which version reads better and why.",
      "Write one paragraph of five sentences containing at least one fronted dependent clause, one embedded which clause and one three-item parallel series, and check it with the four-move read-back.",
    ],
    assignment: {
      title: "Sentence surgery",
      instructions:
        "Collect five pairs of short sentences from your own notes, emails or discussion posts. For each pair, produce two versions: one that subordinates an idea with although, because or which, and one that keeps the two sentences separate. Then write one paragraph of at least five sentences that includes a fronted dependent clause, an embedded relative clause and a three-item parallel list, marking each device in the margin. Submit the pairs, the paragraph and the margin marks together.",
      minWords: 60,
      maxWords: 160,
    },
  },
  // -------------------------------------------------------------------------
  // Unit 2, Lesson 2 — Grammar accuracy
  // -------------------------------------------------------------------------
  {
    slug: "toefl-language-grammar-accuracy",
    title: "Grammar accuracy",
    description:
      "Accuracy as arithmetic: the error budget, the five error families, the sixty-second proof pass, and the self-correction habit that keeps your rate falling.",
    objectives: [
      "sort your own errors into five families and log them as a running budget",
      "run a sixty-second accuracy pass over any constructed response",
      "self-correct in speech without losing the thread of your answer",
      "drive your logged error rate down week on week",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Accuracy improves when it is counted. A rater does not grade your grammar knowledge; they grade the errors that survive onto the page or into the recording. This lesson treats those survivors as a budget you can shrink: log every error, sort it into one of five families, drill the family, and re-test. The metric is errors per task, and the aim is a falling line.",
        beforeYouStart: [
          "You can find the subject and verb of a sentence and name the tense of a verb.",
          "You have the structure habits from the previous lesson — accuracy work polishes them.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing and Speaking directly; Reading and Listening through the forms you must recognise and produce"],
          ["Task & question types", "Build a Sentence is all-or-nothing reconstruction; email and discussion responses are read for grammatical accuracy; interview answers are scored for control"],
          ["What is assessed", "The errors that survive into your output — counted, not felt"],
          ["Why this matters", "Accuracy is the cheapest band movement available: no new language is needed, only fewer survivors"],
        ],
      },
      { type: "heading", text: "The error budget" },
      {
        type: "text",
        text: "An error budget is a count of errors per task, tracked over time. Most learners work on grammar as a feeling — 'I should be better at articles' — and feelings do not improve. The budget replaces the feeling with a number: last week's email carried four errors, two of them articles; this week's carried two, one of them articles. The line falls because the log makes each family visible and each drill targeted. Keep the log in five columns, one per family, and total it after every constructed response you produce in practice.",
      },
      {
        type: "grammar-rule",
        title: "Agreement: the subject, not the neighbours",
        rule: "The verb agrees with the grammatical subject, ignoring every noun sitting between it and the verb inside a prepositional phrase.",
        explanation:
          "The list of approved suppliers was attached — the subject is list, singular, so the verb is singular no matter how many suppliers stand inside the phrase. Every student in the two labs was asked — the subject is every student, singular, even though labs is plural and nearby.",
        examples: [
          { english: "The range of options was narrower than expected.", translation: "" },
          { english: "Each of the proposals has been costed.", translation: "" },
          { english: "The equipment was calibrated before each run.", translation: "" },
        ],
        exceptions: [
          "Subjects joined by and take a plural verb: the dean and the registrar were present.",
          "With either ... or and neither ... nor, the verb agrees with the nearer subject: neither the manager nor the assistants were informed.",
          "Collective nouns such as team and committee usually take a singular verb in American academic usage.",
        ],
      },
      {
        type: "table",
        title: "The five error families",
        headers: ["Family", "Typical survivor", "The repair"],
        rows: [
          ["Agreement", "The findings is consistent with earlier work.", "Match the verb to the head noun, ignoring the prepositional phrase: the findings are."],
          ["Articles", "Committee will meet on Thursday.", "Nameable singular nouns take an article; plurals in general statements take none."],
          ["Prepositions", "The report was discussed in Monday.", "Bank the partnership: discussed on Monday, arrived at the venue, involved in the review."],
          ["Tense consistency", "The auditors found that the records are incomplete.", "Reported clauses keep the past: found that the records were incomplete."],
          ["Word form", "The two regions differ sharp in rainfall.", "The slot chooses the form: differ sharply, or a sharp difference."],
        ],
        caption: "Sort every logged error into exactly one of these five columns; a sixth column means the log needs a sixth family added on purpose.",
      },
      { type: "heading", text: "The sixty-second proof pass" },
      {
        type: "text",
        text: "The proof pass is a timed sweep of a finished draft, one family at a time, in sixty seconds. Sweep verbs against their subjects; sweep articles at the front of noun phrases; sweep prepositions after the verbs you banked as partnerships; sweep tense from the first verb to the last; sweep word forms against their slots. Five sweeps, roughly twelve seconds each, and the survivors of writing become non-survivors. The pass works because it is mechanical: you are not reading for meaning, only hunting one family at a time, and meaning-reading is exactly what hides errors from tired eyes.",
      },
      {
        type: "steps",
        title: "The accuracy loop",
        intro: "Log, classify, drill, re-test — one cycle per week.",
        steps: [
          {
            title: "Log every survivor",
            text: "After each practice task, copy every error you can find into the log before correcting it. Include errors a rater would count, not only the ones you noticed while writing — reread with the five columns open.",
            examples: [
              {
                english: "A log line reads: 'W3 email — articles 2, prepositions 1, agreement 1' — four survivors, three families, one week.",
                note: "The count, not the guilt, is the payload of the log.",
                domain: "study",
              },
            ],
          },
          {
            title: "Classify into one family",
            text: "Force every error into one of the five columns. If an error resists all five, it belongs to a sixth family you should name deliberately — but most errors that feel unique are word form or agreement in disguise.",
            examples: [
              {
                english: "'The evidence are strong' looks like vocabulary; sorted, it is agreement — evidence is uncountable and takes a singular verb.",
                note: "Sorting reveals that half of a bad week is usually one family.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Drill the biggest family only",
            text: "Spend the week's drill time on the tallest column, not on all five. Ten targeted repairs of one family beat thirty scattered exercises, because retrieval improves when the target is narrow.",
            examples: [
              {
                english: "A learner whose tallest column is prepositions spends one week rewriting only partnership notes: arrived at, involved in, discussed on.",
                note: "One family per week; five weeks to cover them all once.",
                domain: "study",
              },
            ],
          },
          {
            title: "Re-test under the same conditions",
            text: "Produce a new task of the same type, run the proof pass, and count. If the column did not fall, the drill was wrong or too short — change the drill, not the goal.",
            examples: [
              {
                english: "Week one: articles 3 in the email task. Week three: articles 0, same task type, same sixty-second pass.",
                note: "The falling count is the only progress that matters to a rater.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "The budget at work",
        note: "Every item is a survivor caught before or after the pass.",
        items: [
          {
            english: "An email draft carries 'The committee have decided that the deadline is moved to Friday' — agreement and tense in one line; the pass repairs it to 'has decided' and 'would be moved'.",
            note: "Two families, one line, twelve seconds of sweeping.",
            domain: "exam",
          },
          {
            english: "A discussion post reads 'This approach is more better for beginners' — a double comparative the writer never noticed while composing meaning.",
            note: "The proof pass catches what meaning-reading hides.",
            domain: "exam",
          },
          {
            english: "A learner's log shows prepositions falling from six per task to one over three weeks, after drilling only partnerships.",
            note: "One tall column targeted; one family nearly retired.",
            domain: "study",
          },
          {
            english: "A Build a Sentence build fails on 'was' where the subject was results — agreement across the joint, the costliest single token in the section.",
            note: "Reconstruction is all-or-nothing; agreement is checked third in the four moves.",
            domain: "exam",
          },
          {
            english: "A status note to a supervisor says 'Please find attached the revised schedule, which reflect the new dates' — one plural verb where the which clause demanded reflects.",
            note: "Relative clauses carry their own agreement; sweep them with the rest.",
            domain: "work",
          },
          {
            english: "In an interview answer a learner says 'Most people prefers to study at night — sorry, prefer' and continues without stopping.",
            note: "Transparent self-correction is a strength in speaking, not a confession.",
            domain: "exam",
          },
          {
            english: "A roommate's text arrives as 'Milk was finished, so I bought two' — a small tense survivor inside everyday register.",
            note: "The five families live in daily English too; the log does not distinguish registers.",
            domain: "everyday",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Accuracy mistakes corrected",
        items: [
          {
            wrong: "The list of approved suppliers were attached to the email.",
            right: "The list of approved suppliers was attached to the email.",
            reason: "The subject is list, singular; the plural suppliers sits inside a prepositional phrase and cannot touch the verb.",
          },
          {
            wrong: "I will improve my grammar by reading more rules.",
            right: "Log survivors, classify them into five families, drill the tallest column, and re-test under the same conditions.",
            reason: "Rules read are not errors repaired; the budget falls only through targeted retrieval practice on your own logged material.",
          },
          {
            wrong: "Self-correcting in speaking shows weakness, so I never go back.",
            right: "Correct once, briefly, and continue — 'most people prefer, that is' — then finish the answer.",
            reason: "Raters hear transparent self-correction as monitoring, which is control; silence and repetition read as its absence.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Accuracy across the four sections",
        reading: {
          text: "The department has published new guidance. It say that applications must include a transcript, and the deadline have been moved to March. Each applicants must also submit a reference, and the committee are meeting on Friday to review the first batch.",
          task: "Find every error in the paragraph, and sort each one into one of the five families.",
        },
        writing: {
          task: "Rewrite the paragraph above correctly, then run the sixty-second proof pass on your own version before submitting it.",
          guide: [
            "Repair agreement first: match each verb to its head noun, ignoring the phrases between them.",
            "Repair forms next: applicants is plural, so each applicant takes the article and the singular.",
            "Check tense consistency from the first verb to the last — the paragraph reports published guidance.",
            "Finish with one read-aloud; the ear catches what two sweeps missed.",
          ],
          model:
            "The department has published new guidance. It says that applications must include a transcript, and the deadline has been moved to March. Each applicant must also submit a reference, and the committee is meeting on Friday to review the first batch.",
        },
        listening: {
          script: "So for the field trip — we were planning, sorry, we are planning the field trip for the twelfth, and the coach leaves at eight. The plan was for Friday, but the venue confirmed Monday instead, so please ignore the earlier date. If anyone has questions, my email is on the notice — or rather, on the poster by the entrance.",
          task: "Note each self-correction you hear, and say what changed after the correction.",
        },
        speaking: {
          task: "Answer this interview item in about thirty seconds: 'What is one habit that has improved your studies or work?' Self-correct at least once, transparently, and finish the answer.",
          frames: [
            "One habit that has helped me is ... — or rather, ...",
            "I used to ..., but now I ...",
            "That change has ... — sorry, that change had ...",
            "So the result, in the end, is ...",
          ],
          checklist: [
            "I corrected at least once without stopping the answer.",
            "Each correction was brief — a few words, then forward.",
            "The answer ended with a finished sentence, not a correction.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it lifts the band"],
        rows: [
          ["Repairs every error in the seeded paragraph before writing its own version", "Accuracy is judged on survivors; a repaired model shows the target state the rater is comparing against"],
          ["Runs the five sweeps in a fixed order", "Mechanical passes catch what meaning-reading hides — the order turns proofreading from an art into a routine"],
          ["Keeps tense consistent across reported clauses", "Tense drift is one of the five families raters count first; consistency here is cheap and visible"],
          ["Ends with one read-aloud", "The ear catches agreement slips the eye has already forgiven twice"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Keep the five-column log open in practice; know your tallest column and drill it this week."],
          ["While the clock runs", "In Build a Sentence, check agreement across every joint before confirming a build; one token is the whole item."],
          ["If you are stuck", "If a sentence resists repair, rewrite it shorter — short correct sentences outrank long broken ones in every criterion."],
          ["Final minutes", "Run the sixty-second pass on email and discussion responses; in speaking, correct once and move forward."],
        ],
      },
      {
        type: "summary",
        points: [
          "Accuracy is a budget: errors per task, logged and counted, not felt.",
          "Five families cover almost everything: agreement, articles, prepositions, tense consistency, word form.",
          "The verb agrees with the head noun; neighbours inside prepositional phrases cannot touch it.",
          "The sixty-second proof pass sweeps one family at a time, which is why it catches what rereading misses.",
          "In speaking, one brief transparent self-correction reads as monitoring — control, not weakness.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson, drawn from structure and scoring.",
        items: [
          {
            question: "Which clause can stand alone as a complete sentence?",
            options: ["An independent clause", "A relative clause", "An although clause"],
            correctIndex: 0,
            explanation: "The independent clause is the spine; relative and although clauses attach to it and are fragments on their own.",
            from: "toefl-language-sentence-structure",
          },
          {
            question: "Averages of 5.625 round to…",
            options: ["5.5", "6.0", "5.0"],
            correctIndex: 0,
            explanation: "Nearest half step: 5.625 sits 0.125 above 5.5 and 0.375 below 6.0, so accuracy gains convert to visible half steps at 5.5.",
            from: "toefl-band-scale",
          },
          {
            question: "Results typically arrive within…",
            options: ["About 72 hours", "Six weeks", "Instantly at the centre"],
            correctIndex: 0,
            explanation: "Reports arrive within about three days, so a targeted accuracy repair can be verified inside one retake cycle.",
            from: "toefl-score-reports",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "correct-mistake",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Repair the agreement error.",
        hints: ["Find the head noun; ignore the phrase between it and the verb."],
        incorrectSentence: "Every student in the two labs were asked to submit a sample by Friday.",
        acceptedAnswers: [
          "Every student in the two labs was asked to submit a sample by Friday.",
          "Every student in the two labs was asked to submit a sample by Friday",
        ],
        feedback: fb(
          "Every student in the two labs was asked to submit a sample by Friday.",
          "The subject is every student, singular, so the verb must be was; the plural labs sits inside a prepositional phrase and cannot vote on the verb — the classic neighbour trap.",
          "Moving the verb to the plural labs is the single most common agreement survivor in any error log.",
        ),
        tags: ["toefl", "language", "grammar accuracy"],
      }),
      ex({
        type: "grammar-identify",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Analyse the highlighted verb.",
        hints: ["Who is the subject, and is it singular or plural?"],
        sentence: "The list of approved suppliers were attached to the email.",
        focus: "were",
        question: "What is wrong with the highlighted verb?",
        taxonomy: "agreement",
        options: [
          { id: "a", text: "Nothing — it agrees with the plural suppliers." },
          { id: "b", text: "It must be was: the verb agrees with the singular head 'list', not with the plural noun inside the prepositional phrase." },
          { id: "c", text: "It must be are, because lists are always plural." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It must be was: the verb agrees with the singular head 'list', not with the plural noun inside the prepositional phrase.",
          "The subject is list; suppliers sits inside a phrase and cannot vote on the verb. This is the classic agreement survivor, and the sixty-second sweep catches it every time.",
          "Agreeing with the nearest noun (a) is the error itself, and are (c) doubles it — the head noun is the only subject that counts.",
        ),
        tags: ["toefl", "language", "grammar accuracy"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "grammar",
        prompt: "What is the most useful way to measure grammar progress across weeks?",
        hints: [],
        options: [
          { id: "a", text: "Total words written per week." },
          { id: "b", text: "Errors per constructed task, sorted into families and tracked in a log." },
          { id: "c", text: "Number of grammar rules read." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Errors per constructed task, sorted into families and tracked in a log.",
          "The budget is a count of survivors: it falls only when production changes, which is why it tracks real progress while volume and reading do not.",
          "Words written (a) measures effort, not accuracy, and rules read (c) never become errors repaired without retrieval practice on your own material.",
        ),
        tags: ["toefl", "language", "grammar accuracy"],
      }),
      ex({
        type: "correct-mistake",
        difficulty: "hard",
        skill: "grammar",
        prompt: "Repair the agreement error. With neither ... nor, the verb must agree with the nearer subject.",
        hints: [],
        incorrectSentence: "Neither the manager nor the assistants was informed about the change.",
        acceptedAnswers: [
          "Neither the manager nor the assistants were informed about the change.",
          "Neither the manager nor the assistants were informed about the change",
        ],
        feedback: fb(
          "Neither the manager nor the assistants were informed about the change.",
          "With neither ... nor, the verb agrees with the nearer subject — assistants, plural — so were is required; the singular manager cannot decide a verb that sits next to the plural.",
          "Leaving was agrees with the farther subject, the exact trap the construction sets.",
        ),
        tags: ["toefl", "language", "grammar accuracy"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the extract, then answer.",
        hints: [],
        passageTitle: "A guidance paragraph",
        passage: "The department has published new guidance. It say that applications must include a transcript, and the deadline have been moved to March. Each applicants must also submit a reference.",
        question: "Which error family does the paragraph show most clearly?",
        options: [
          { id: "a", text: "A preposition error — the wrong particle after a verb." },
          { id: "b", text: "Agreement errors — 'It say' and 'the deadline have' should be 'It says' and 'the deadline has'." },
          { id: "c", text: "An article error — a missing article before a noun." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Agreement errors — 'It say' and 'the deadline have' should be 'It says' and 'the deadline has'.",
          "Two verbs disagree with their singular subjects in consecutive clauses; sorting them into the agreement column is the first step of the proof pass.",
          "No verb takes a wrong particle here (a), and the articles present are correct — the survivors are both agreement.",
        ),
        tags: ["toefl", "language", "grammar accuracy"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Type the past form that keeps the reported clause consistent with 'found'.",
        hints: ["The reporting verb is past; the clause inside follows it."],
        sentence: "The auditors found that the records ___ incomplete for two quarters.",
        acceptedAnswers: ["were"],
        feedback: fb(
          "were",
          "Reported clauses keep the past after a past reporting verb: found that the records were incomplete. Tense consistency is one of the five families, and drift inside reported clauses is its commonest survivor.",
          "Are keeps the clause in the present, breaking the timeline the reporting verb set — exactly what the tense sweep repairs.",
        ),
        tags: ["toefl", "language", "grammar accuracy"],
      }),
    ],
    homework: [
      "Open a five-column log (agreement, articles, prepositions, tense, word form) and file every error from your last three practice tasks; identify your tallest column.",
      "Write one email of six sentences on a real request, run the sixty-second pass on it, and record the before-and-after error count in your log.",
    ],
    assignment: {
      title: "Error log and repair plan",
      instructions:
        "Collect your last three constructed responses — emails, discussion posts or recorded answers. Log every error you can find in the five-column format, then write a short report: your total errors per task, your tallest family, the drill you will run against it this week, and the date you will re-test the same task type. End with one sentence naming the single repair you expect to see in the re-test.",
      minWords: 50,
      maxWords: 150,
    },
  },
];
