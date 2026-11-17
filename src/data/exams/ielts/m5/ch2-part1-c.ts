/**
 * Chapter 2C — Speaking Part 1 topics (Speaking Masterclass, Part C).
 *
 * The final six of the nineteen Part 1 topic lessons: shopping, weather,
 * books, music, sports and social activities. Each lesson teaches the
 * question patterns the topic attracts, how to decode what each question
 * type demands, the three-layer answer habit applied to the topic, useful
 * vocabulary, natural expressions, worked question-and-answer models and
 * thin-versus-developed pairs — always as patterns, ideas and language the
 * candidate rebuilds around their own life, never fixed answers to memorise.
 * All practice material is original, written in the shape of the test but
 * never reproduced exam content, and every band reference reads as an
 * estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingPart1TopicsC: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-t-shopping",
    title: "Part 1 topics: Shopping",
    description:
      "Where you shop, online versus in-store habits, the last thing you bought, hunting bargains and window shopping — taught as question patterns, layered answers and topic vocabulary you refill with your own streets, apps and purchases.",
    objectives: [
      "recognise the six question shapes that rotate through the shopping topic",
      "build shopping answers in three layers — direct answer, reason, concrete detail or feeling",
      "deploy natural shopping vocabulary and conversation softeners instead of memorised scripts",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Shopping is one of the friendliest sets in Part 1: everybody buys things, so everybody owns the material. The risk is the opposite of drying up — it is drifting into a list of shop names with no reasons and no feelings attached. This lesson maps the question shapes the topic attracts, rehearses the three-layer habit that turns a one-line reply into a short natural paragraph, and hands you the wording that makes the answer sound like you rather than a phrasebook. Treat everything here as a frame to refill with your own streets, apps and purchases — never as lines to memorise.",
        beforeYouStart: [
          "You have met the three-layer answer — direct answer, reason, detail — in the speaking foundations.",
          "You can name the four scored criteria and know that fluency rewards extension, not speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking Part 1 — the 4–5 minute interview on familiar topics, where shopping is among the most frequent sets"],
          ["Task & question types", "Factual, preference, frequency, change, comparison and hypothetical questions on where, how and what you buy"],
          ["What is assessed", "Fluency and Coherence chiefly — the willingness to extend — plus Lexical Resource through topic wording like browsing and bargains"],
          ["Why this matters", "A single sentence on an easy topic reads as under-developed, while three natural layers on the same topic reads as a confident speaker"],
        ],
      },
      { type: "heading", text: "Component 1 — The questions this topic attracts" },
      {
        type: "text",
        text: "A shopping round usually opens with territory — where you buy food or clothes — then moves to habits (how often, online or in person), then to memory (the last thing you bought, the best bargain you found), and sometimes to imagination (a shop of your own). The examiner is not auditing your retail life; they are listening for extended, connected speech on the easiest subject available. Learn the six shapes below, because each shape quietly specifies what a complete answer contains — a place, a choice, a routine, a contrast, a weighing-up or an imagined world. And keep every example genuinely yours: a true street and a real purchase are always easier to extend than an invented ones.",
      },
      {
        type: "table",
        title: "Common question patterns",
        headers: ["Question type", "Questions in this style", "What your answer needs"],
        rows: [
          ["Factual", "Where do you usually go shopping? / What's the best place to buy clothes in your town?", "A named place plus one or two true details — what it sells, when you go, who comes along"],
          ["Preference", "Do you prefer shopping online or in physical stores? / Is shopping alone or with friends better?", "One clear choice, a reason for it, and a small example or an admission of the other side"],
          ["Frequency", "How often do you buy things online? / Do you go shopping every week?", "A frequency adverb or phrase, then enough context to show what a typical trip looks like"],
          ["Change", "Have your shopping habits changed in recent years? / Did you shop differently five years ago?", "A then-and-now contrast — present perfect for the shift, past forms for the old routine"],
          ["Comparison", "Are prices better in street markets or in shopping malls?", "Both sides touched on briefly, then a position anchored in your own experience"],
          ["Hypothetical", "If you could open any kind of shop, what would it sell? / Would you pay more for locally made goods?", "Imagined-answer language — would, I'd probably, I might — kept clearly inside the unreal frame"],
        ],
      },
      { type: "heading", text: "Component 2 — Hearing what the question demands" },
      {
        type: "text",
        text: "The verb inside the question is your timetable. Do you asks about habits that are true now; did you closes the door on a finished past; have … changed asks you to build the bridge between then and now; would you opens an imagined world where nothing has happened yet. A second decoder sits underneath: some questions want facts (where, what, when) and reward concrete nouns, while others want judgement (prefer, better, enjoy) and reward reasons. Misread a preference question as a factual one and you will list five shops when the examiner asked you to choose between two ways of buying — accurate words answering the wrong question.",
      },
      {
        type: "steps",
        title: "The three layers, applied to shopping",
        steps: [
          {
            title: "Layer 1 — Answer directly",
            text: "Name the place, the choice or the frequency in your first breath. Stalling before the direct answer sounds like a search for a memorised line, and the examiner is listening for speech, not retrieval.",
            examples: [
              { english: "Mostly I use the covered market about ten minutes from my flat.", note: "The place arrives in the first five words — no warm-up, no throat-clearing." },
            ],
          },
          {
            title: "Layer 2 — Give the reason",
            text: "Follow immediately with because or so: price, convenience, habit or pleasure. One reason is enough — a reason is what separates an answer from a bare fact.",
            examples: [
              { english: "…because the vegetables there are fresher than the supermarket's and cost noticeably less.", note: "The reason is concrete — a comparison the examiner can almost see." },
            ],
          },
          {
            title: "Layer 3 — Add detail or feeling",
            text: "Finish with a specific moment, a small story or an honest reaction: who you go with, what you last bought there, why the routine pleases you. This is the layer that sounds like a person rather than a form.",
            examples: [
              { english: "I was there on Saturday and walked out with far more than my list said — that happens more often than I'd like to admit.", note: "A light confession adds personality without losing the thread of the answer." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The words that carry the topic" },
      {
        type: "table",
        title: "Useful vocabulary",
        headers: ["Word or phrase", "What it means", "A natural way to use it"],
        rows: [
          ["to browse", "to look at goods with no firm plan to buy", "I like browsing the second-hand stalls on Saturday mornings."],
          ["a bargain", "something bought for clearly less than its usual price", "These boots were a real bargain in the January sales."],
          ["window shopping", "looking at shop displays without spending anything", "Window shopping is my free entertainment at the end of an expensive month."],
          ["an impulse buy", "something bought suddenly, with no planning", "That cake tin was a classic impulse buy at the checkout."],
          ["to shop around", "to compare prices in several places before paying", "I always shop around before anything that costs real money."],
          ["second-hand", "previously owned, not new", "Most of my furniture is second-hand from online listings."],
          ["to splash out", "to spend a lot on something special, informally", "Once a year I splash out on a properly good winter coat."],
          ["sold out", "no longer available because everything has been bought", "The bread I wanted was sold out by noon, as usual."],
        ],
      },
      {
        type: "usage",
        title: "Natural expressions for shopping talk",
        items: [
          {
            situation: "You want to sound honest rather than enthusiastic about shopping",
            example: "I wouldn't call myself a big shopper, to be honest.",
            note: "The softener 'I wouldn't call myself' lets you hold a modest position and still develop it for two more sentences.",
          },
          {
            situation: "A preference question where your truthful answer is 'it depends'",
            example: "It depends what I'm buying — clothes I need to try on, but books I order online.",
            note: "'It depends' counts as a full answer exactly when you immediately say what it depends on.",
          },
          {
            situation: "Describing a habit without sounding mechanical",
            example: "I tend to do one big weekly shop and top up during the week.",
            note: "'I tend to' sketches a typical pattern, softer and more truthful than 'I always'.",
          },
          {
            situation: "Talking about occasional treats",
            example: "Every now and then I treat myself to something I've had my eye on for ages.",
            note: "'Had my eye on' shows desire over time — rich material for the detail layer.",
          },
          {
            situation: "Admitting a weakness with humour",
            example: "If it's on sale, I somehow convince myself I've needed it for years.",
            note: "Self-aware humour sounds natural, but keep it to one sentence and move back to the point.",
          },
        ],
      },
      {
        type: "example",
        title: "Example responses — question and answer",
        items: [
          {
            english: "Q: Where do you usually do your grocery shopping? A: At the weekend market by the river, mainly — the vegetables are fresher than the supermarket's and cost me less, so Saturday morning has become a small routine I genuinely look forward to.",
            note: "Three layers in clean order: place, reason, feeling — inside two sentences.",
            domain: "everyday",
          },
          {
            english: "Q: Do you prefer buying things online or in person? A: Honestly, it depends on the item. Books and electronics I order online because it's quicker, but shoes I have to try on — I've sent back too many pairs that looked perfect and felt terrible.",
            note: "'It depends' is split into two clear cases, each with its own reason.",
            domain: "exam",
          },
          {
            english: "Q: What's the last thing you bought? A: A spare phone charger, nothing romantic — my old cable died on Friday and I picked one up on the way to work, though I did pay over the odds at the station shop.",
            note: "A modest purchase still carries a story and an opinion; small talk does not need big events.",
            domain: "life",
          },
          {
            english: "Q: Do you enjoy looking for bargains? A: I do, probably too much. There's real satisfaction in finding the same thing for less — my friends joke that I can't walk past a discount sign, and last month that instinct saved me a third off a winter coat.",
            note: "Reason plus a personal detail; the humour stays brief and returns to the point.",
            domain: "life",
          },
          {
            english: "Q: Is window shopping a waste of time? A: I'd say not, as long as you know your budget. For me it's a free way to spend an evening — I plan future purchases, and sometimes I walk home having decided I don't need anything after all.",
            note: "A clear position, a reason, and a concrete outcome — the comparison question answered without a lecture.",
            domain: "exam",
          },
          {
            english: "Q: Have your shopping habits changed over the years? A: Completely. I used to wander round shops most weekends, whereas now nearly everything arrives in a parcel — convenient, though I do slightly miss the browsing.",
            note: "'Used to' marks the old habit; the closing clause adds honest feeling instead of a sales pitch.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Thin answers, developed answers",
        items: [
          {
            wrong: "Usually at the supermarket near my house.",
            right: "Usually the supermarket near my house, because I can walk there in five minutes and the prices beat the little corner shops — I probably go twice a week after work.",
            reason: "Asked where she shops, the candidate delivered layer one only; the reason and the routine were available in the same breath.",
          },
          {
            wrong: "Yes, I like it. It is convenient.",
            right: "Yes, though 'convenient' barely covers it — I can compare prices across three shops from my sofa, order in the evening and collect the parcel from the locker downstairs the next morning.",
            reason: "The single adjective was the right idea but stayed generic; one concrete picture of the convenience makes it real.",
          },
          {
            wrong: "A phone. Two months ago.",
            right: "A phone, about two months ago — my old one kept switching itself off, so after weeks of putting it off I finally tried two models in a shop and walked out with the cheaper one.",
            reason: "The bare facts answer 'what' and 'when'; the missing layers — the problem, the hesitation, the choice — are what a fluent speaker naturally supplies.",
          },
          {
            wrong: "I think it is good. Many people like discounts.",
            right: "On the whole I think they're good — a discount let me buy a coat I'd wanted for a year — though I've noticed shops sometimes raise the price first and then 'cut' it, so I check before celebrating.",
            reason: "The vague claim about 'many people' replaces the candidate's own experience, which is the only material the examiner can actually score.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Shopping, end to end",
        reading: {
          text: "Part 1 moves through familiar territory at conversational speed, and shopping questions often arrive early precisely because everyone can answer them. The examiner's goal is not to learn your retail habits but to hear extended, connected speech on the easiest subject on offer. Candidates who treat the topic as trivial give one-line replies; candidates who treat it as an invitation give a place, a reason and a memory. The gap between those two speakers is not knowledge — it is the habit of continuing past the first sentence.",
          task: "In one or two sentences, explain why an 'easy' topic can still leave a weak impression.",
        },
        writing: {
          task: "Choose ONE question — 'Where do you usually shop for food?' or 'Is online shopping better than shopping in person?' — and write your own three-layer answer.",
          guide: [
            "Layer 1 opener: 'For food it's nearly always…' / 'For me, online wins for…'",
            "Layer 2 signal: '…mainly because…' or '…which suits me since…'",
            "Layer 3 move: a recent trip, a comparison, or how the habit makes you feel",
            "Final check: could a stranger picture the shop, the reason and one real moment?",
          ],
          model: "For food it's nearly always the covered market two streets from my flat, mainly because the stallholders sell whatever ripened that week, so it tastes better and costs less than the supermarket. Last Saturday I went for tomatoes and came home with those, a bunch of herbs and a conversation about cooking with the woman who sells the cheese — and that's the part a parcel will never give me.",
        },
        listening: {
          script: "Tutor: Your market answer was lovely — place, reason, feeling, all three layers. Now give the online-shopping answer the same personal treatment. You said 'it is convenient'. Convenient how? Paint it: three shops compared from the sofa, parcel in the locker, no queue at the till. And when you mention what you miss about real shops, slow down there — that small regret is the most natural sentence in your whole answer.",
          task: "Which two improvements does the tutor ask for, and which sentence does she single out as the most natural?",
        },
        speaking: {
          task: "Answer these three aloud, giving yourself a minimum of two layers on each: 'Where do you usually buy clothes?' — 'Do you ever buy things second-hand?' — 'Would you enjoy running a shop of your own?'",
          frames: [
            "Nearly always at…, mainly because…",
            "I've bought a few things second-hand — for instance…",
            "If I had a shop, I'd probably sell…, since…",
          ],
          checklist: [
            "Did every answer run past two sentences?",
            "Did each one contain because or so at least once?",
            "Did I keep the imaginary question firmly in would-language?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Directness", "The opening sentence names the place and stakes out the position — no warm-up, no borrowed opener the examiner has heard from a hundred candidates."],
          ["Development", "Because arrives in the second breath, then a Saturday scene with tomatoes, herbs and a conversation grounds the reason in lived detail."],
          ["Vocabulary", "Stallholders, ripened, costs less — topic wording sits inside ordinary speech instead of being displayed like a list."],
          ["Fluency", "The closing regret shifts the rhythm from statement to reflection, and that small movement is what unscripted speech sounds like."],
          ["Coherence", "Each layer picks up the previous one's noun — the market, the reason, the visit — so the answer hangs together as one paragraph rather than stacked facts."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rehearse your own shopping facts aloud once — usual place, last purchase, best recent bargain — so the raw material is warm before the topic arrives."],
          ["While the clock runs", "Aim to finish each shopping answer by the third layer; if you catch yourself after a bare fact, add because and one small memory before you stop."],
          ["If you are stuck", "Reach for your newest true purchase or your most recent browse — the freshest real detail is always the easiest one to extend."],
          ["Final minutes", "Play your recording back and mark every one-line answer with the layer that was missing; that pattern, not the topic, is your next practice target."],
        ],
      },
      {
        type: "summary",
        points: [
          "Shopping questions rotate through six shapes — factual, preference, frequency, change, comparison and hypothetical — and each shape quietly lists what a complete answer contains.",
          "The verb in the question is the timetable for the reply: present habits, closed past events, present-perfect changes and would-worlds each demand their own grammar.",
          "Three layers — direct answer, reason, detail or feeling — convert any shopping question into a short connected paragraph.",
          "Wording like browsing, a bargain, an impulse buy and to shop around sounds natural precisely because it belongs to this subject and no other.",
          "The material must be yours: the patterns and vocabulary travel, but every example you give should be a street, an app or a purchase you genuinely know.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick items from the foundations chapter.",
        items: [
          {
            question: "What are the three layers of a developed Part 1 answer?",
            options: ["Opinion, evidence, conclusion", "Direct answer, reason, detail or feeling", "Introduction, body, example"],
            correctIndex: 1,
            explanation: "The layer habit from the foundations is the engine behind every topic lesson: answer first, then because, then a concrete detail or an honest reaction.",
            from: "Extending answers naturally",
          },
          {
            question: "A shopping question arrives that you have never considered. What is the strongest honest move?",
            options: ["Invent something impressive on the spot", "Fall silent until an idea comes", "Buy one second with a natural filler, then build from your real experience"],
            correctIndex: 2,
            explanation: "A short filler plus a true detail beats both invented waffle and a silent freeze, because the criterion rewards continuous, meaningful speech.",
            from: "Handling unfamiliar questions",
          },
          {
            question: "Why do memorised full answers hurt even when they sound advanced?",
            options: ["They are nearly always ungrammatical", "The delivery change is obvious, and only your live speech gets credited afterwards", "They always exceed the time limit"],
            correctIndex: 1,
            explanation: "A delivered script stands out the moment the question bends away from it, and the examiner then scores only what you produce unaided.",
            from: "Avoiding memorised responses",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. The examiner asks: 'Have your shopping habits changed in the last few years?' What does the question's grammar tell you to do?",
        hints: ["'Have… changed' points at a bridge between two time zones, not a single moment."],
        options: [
          { id: "a", text: "Describe only what you do now, using present simple habits." },
          { id: "b", text: "Build a then-and-now contrast — the old habit, the change, and the present result." },
          { id: "c", text: "Say whether you like change in general and explain your shopping philosophy." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Build a then-and-now contrast — the old habit, the change, and the present result.",
          "Present perfect 'have changed' asks for movement between two states: the old routine in past forms, the new one in present forms, with the change itself as the hinge.",
          "(a) answers a present-habit question instead; (c) drifts into an abstract opinion the examiner never requested.",
        ),
        tags: ["speaking", "part1", "shopping"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the exchange and find what the candidate's answer is missing.",
        hints: ["Count the layers: is there a reason anchored anywhere in Marta's own life?"],
        passageTitle: "The answer that never came home",
        passage: "The examiner asks Marta whether she prefers shopping in big stores or small ones. She replies: 'I prefer small shops. Small shops have more character. Big stores are the same everywhere.' The examiner nods once and moves on — the answer never returned to Marta herself.",
        question: "What is the strongest critique of Marta's answer?",
        options: [
          { id: "a", text: "Her grammar is wrong and her vocabulary is far too basic." },
          { id: "b", text: "She offers general observations about shops but no reason tied to her experience, no example and no feeling." },
          { id: "c", text: "She spoke too long and the examiner had to cut in." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "She offers general observations about shops but no reason tied to her experience, no example and no feeling.",
          "Every sentence is a tidy generalisation, yet none is anchored to Marta — the missing reason, memory and reaction are exactly what turn correct facts into developed speech.",
          "(a) misdiagnoses language that is actually accurate; (c) reverses the problem — the examiner moved on because nothing was left to develop.",
        ),
        tags: ["speaking", "part1", "shopping", "layers"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Which sentence uses this lesson's topic vocabulary most naturally?",
        hints: [],
        options: [
          { id: "a", text: "Yesterday I did window shopping at the mall for passing the time." },
          { id: "b", text: "I was only browsing, but the knife set still turned into a classic impulse buy." },
          { id: "c", text: "I very like to shop around the bargain before I buy the expensive something." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I was only browsing, but the knife set still turned into a classic impulse buy.",
          "'Browsing' and 'an impulse buy' collocate the way a native shopper would use them, and the sentence carries the self-aware humour of real conversation.",
          "(a) and (c) are word-by-word translations: the verbs and word order fight the collocations instead of using them.",
        ),
        tags: ["speaking", "part1", "shopping", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Name the three layers in order and say what each layer adds.",
        question: "What are the three layers of a Part 1 answer, and what does each one contribute?",
        acceptedAnswers: [
          "Direct answer, reason, detail or feeling: the first names your position, the second justifies it, the third makes it personal",
          "Answer, reason, detail — the answer states it, the reason explains it, the detail or feeling makes it yours",
          "First the direct answer, then a reason with because, finally a concrete detail or feeling",
          "Layer one answers directly, layer two gives the reason, layer three adds detail or feeling",
        ],
        keywords: ["reason", "detail"],
        hints: [],
        feedback: fb(
          "Direct answer, reason, detail or feeling: the first names your position, the second justifies it, the third makes it personal",
          "The three layers are the answer's skeleton — position, justification and lived detail — and together they produce the connected paragraph the fluency criterion listens for.",
          "Answers that stop at a reason, or that list shops instead of naming layers, have answered a question about shopping rather than a question about structure.",
        ),
        tags: ["speaking", "part1", "shopping", "layers"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Answer this shopping question aloud with all three layers.",
        hints: ["Say where, then why with 'because', then one true detail from your last visit."],
        situation: "The examiner asks: 'Where do you usually shop for food, and why do you go there?'",
        targetPhrases: ["Mainly I shop at…", "…mainly because…", "Last time I was there…"],
        mustSay: ["because", "usually", "shop"],
        feedback: fb(
          "A three-layer answer naming a real place, a reason introduced by 'because', and one concrete detail from an actual visit.",
          "The grader checks the three must-say ideas, but the habit you are training is the order — place first, reason second, detail last.",
        ),
        tags: ["speaking", "part1", "shopping", "speaking-task"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Speak for about twenty-five seconds without notes.",
        hints: [],
        situation: "The examiner asks: 'If you could open any small shop, what would you sell, and where would you put it?'",
        targetPhrases: ["If I had a shop, I'd sell…", "I'd probably put it…", "I imagine…"],
        mustSay: ["would", "sell", "if"],
        feedback: fb(
          "An imagined answer held in would-language, naming what the shop sells and why, plus one detail about its location or customers.",
          "Hypothetical questions reward staying inside the unreal frame — 'would' from start to finish — while the reasons behind your choice can be entirely true.",
        ),
        tags: ["speaking", "part1", "shopping", "hypothetical"],
      }),
    ],
    assignment: {
      title: "Your shopping answers, on paper",
      instructions:
        "Write developed answers to two of these three questions: 'Where do you usually buy clothes?' — 'What was the last bargain you found?' — 'Do you enjoy window shopping?' Use the three layers in each answer, keep every example true to your own life, and stay inside the word limits.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Record forty-five seconds on how you shop now compared with five years ago, forcing one 'used to' and one present-perfect sentence into the answer.",
      "Copy five shopping expressions from this lesson into your vocabulary notebook and use each one truthfully in conversation or on a voice memo this week.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-t-weather",
    title: "Part 1 topics: Weather",
    description:
      "Describing your climate, favourite seasons, the link between weather and mood, extreme-weather stories and the small-talk habit — with the classic 'What's the weather like?' decoding trap defused.",
    objectives: [
      "describe a climate across its full seasonal range instead of one adjective",
      "answer season and mood questions with sensory reasons and honest effects",
      "tell a short extreme-weather story in clean past simple and used to forms",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Weather is the most universal small-talk subject in the English-speaking world, and examiners reach for it early because every country on earth has some. That fairness is also the trap: because the questions feel casual, candidates answer casually — 'Hot, very hot' — and the round collapses into word exchange instead of speech. This lesson builds the describing habit (a climate across seasons, not a single adjective), the mood vocabulary that connects weather to feelings, and the story shape that extreme-weather questions invite. As everywhere in this programme, the language is a frame: fill it with the sky you actually live under, and never with rehearsed sentences.",
        beforeYouStart: [
          "You can already extend an answer past its first sentence using the layer habit.",
          "You know that precise wording — drizzle rather than 'small rain' — is what Lexical Resource listens for.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking Part 1 — the warm-up interview, where weather doubles as a rapport-building set"],
          ["Task & question types", "Climate description, season preference, frequency of rain or sun, lifetime change, live-versus-screen comparisons and imagined relocations"],
          ["What is assessed", "Lexical Resource through weather wording and seasonal range, Fluency through extended description rather than one-word exchanges"],
          ["Why this matters", "Casual topics tempt casual answers; a layered description on an easy subject signals a speaker in control of their range"],
        ],
      },
      { type: "heading", text: "Component 1 — What a weather round sounds like" },
      {
        type: "text",
        text: "A weather round travels from the general to the personal: your region's climate, the season you love, whether rain or heat shapes daily life, and finally your own memories and moods. Two habits win marks here. First, range: a climate described across seasons ('humid summers, brief golden autumns, grey wet winters') shows more vocabulary than any single adjective can. Second, connection: weather questions are really feeling questions in disguise — the examiner wants to hear what the sky does to your energy, your plans, your memory. Note the honesty rule as ever: describe the weather you genuinely live with, not a climate you think sounds more interesting.",
      },
      {
        type: "table",
        title: "Common question patterns",
        headers: ["Question type", "Questions in this style", "What your answer needs"],
        rows: [
          ["Factual", "What's the weather like in your country? / What kind of climate does your city have?", "A general picture across the year — seasons named, one or two true features of each"],
          ["Preference", "Which season do you enjoy most? / Would you rather have hot summers or cold ones?", "A clear favourite plus sensory reasons — light, temperature, sounds, clothes"],
          ["Frequency", "Does it rain a lot where you live? / How often do you get clear skies?", "A frequency phrase, then the effect of that pattern on daily routines"],
          ["Change", "Has the weather in your region changed over your lifetime?", "A hedged then-and-now observation — 'winters feel milder than in my childhood'"],
          ["Comparison", "Is it better to experience seasons or to live somewhere steady?", "Both patterns weighed briefly, then your own position with a reason"],
          ["Hypothetical", "What would you do with a perfectly free sunny day? / Would you move somewhere colder?", "Imagined choices in would-language, with reasons that can be entirely real"],
        ],
      },
      { type: "heading", text: "Component 2 — The decoding trap and the story shape" },
      {
        type: "text",
        text: "One question causes more misunderstanding than any other in this topic: 'What's the weather like?' It is a description request — like asks for characteristics, not enjoyment. Answer 'Yes, I like it' and you have replied to a question nobody asked. Contrast it with 'Do you like the weather in your city?', which genuinely wants an opinion. The second decoder concerns story questions: 'Have you ever experienced extreme weather?' is an experience invitation, and the strongest shape is a small narrative — when, where, what happened, how it ended, what stayed with you — told mostly in past simple with one or two feeling sentences to close. Keep the distinction between describing (facts about the sky) and reacting (what the sky does to you) alive through the whole round.",
      },
      {
        type: "steps",
        title: "The three layers, applied to weather",
        steps: [
          {
            title: "Layer 1 — Name the season or the pattern",
            text: "Lead with the answer itself: the favourite season, the dominant pattern, the frequency. Describing questions get a description first; opinion questions get the opinion first.",
            examples: [
              { english: "Autumn, without any competition.", note: "The favourite lands in three words — the rest of the answer can then spend itself on reasons." },
            ],
          },
          {
            title: "Layer 2 — Give a sensory or practical reason",
            text: "Weather is felt through the body, so let the reason be physical: the light, the temperature on skin, the sound of rain, the clothes you finally get to wear.",
            examples: [
              { english: "The mornings turn crisp, and there's that particular gold light in the late afternoon.", note: "Sensory detail does the work a general 'nice weather' can never do." },
            ],
          },
          {
            title: "Layer 3 — Add a memory or an effect",
            text: "Close with what the season does to you or once did: a walk you repeat each October, an energy shift, a childhood ritual. The personal effect is what turns description into speech.",
            examples: [
              { english: "It's also when my city smells of woodsmoke, which takes me straight back to my grandmother's kitchen.", note: "A memory anchored to a smell — small, true, and impossible to rehearse by accident." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Words for the sky you live under" },
      {
        type: "table",
        title: "Useful vocabulary",
        headers: ["Word or phrase", "What it means", "A natural way to use it"],
        rows: [
          ["mild", "pleasantly moderate, never extreme", "Our winters are mild — a heavy coat is almost optional."],
          ["humid", "hot with heavy, wet air", "July is humid enough that a shirt is wet by nine in the morning."],
          ["drizzle", "light, fine, persistent rain", "It's not real rain, just drizzle that lasts the whole afternoon."],
          ["a heatwave", "several unusually hot days together", "During the last heatwave the streets were empty until sunset."],
          ["changeable", "likely to change several times a day", "Pack a jacket — our weather is famously changeable."],
          ["the forecast", "the predicted weather for coming days", "I check the forecast, then dress for the opposite."],
          ["a downpour", "a sudden, heavy fall of rain", "We got caught in a downpour and sheltered in a bookshop."],
          ["to wrap up warm", "to dress in plenty of warm clothes, informally", "From December you learn to wrap up warm or stay in."],
        ],
      },
      {
        type: "usage",
        title: "Natural expressions for weather talk",
        items: [
          {
            situation: "Declaring which type of weather suits your personality",
            example: "I'm absolutely a winter person — summer people think I'm mad.",
            note: "The 'I'm a … person' pattern states a preference instantly and hands you the next sentence for free.",
          },
          {
            situation: "Saying one thing beats everything else",
            example: "Nothing beats the first warm evening after winter.",
            note: "'Nothing beats…' is a strong, cheerful superlative that sounds spoken rather than written.",
          },
          {
            situation: "Linking the sky to your energy",
            example: "Grey weeks honestly drain me; two sunny days and I'm a different person.",
            note: "Naming the effect on mood is exactly the personal layer weather questions are fishing for.",
          },
          {
            situation: "Complaining about predictions, British-style",
            example: "The forecast is wrong so often that I've stopped planning around it.",
            note: "Mild complaint about the forecast is classic weather small talk — one sentence is plenty.",
          },
          {
            situation: "Describing an all-conditions commitment",
            example: "We walk every Sunday, come rain or shine.",
            note: "'Come rain or shine' means whatever the weather — an idiom that lifts a routine answer.",
          },
        ],
      },
      {
        type: "example",
        title: "Example responses — question and answer",
        items: [
          {
            english: "Q: What's the weather like in your part of the world? A: It swings between two moods — long humid summers where even the evenings stay warm, and short grey winters that are wet rather than properly cold. Spring is the brief, beautiful gap between them, which is why the whole city moves outdoors the moment it arrives.",
            note: "A whole climate in three sentences: two extremes named, then the season everyone loves.",
            domain: "exam",
          },
          {
            english: "Q: Which season do you like most? A: Autumn, without question. I love the crisp mornings and getting my jackets out again, and the late light turns my street gold — that sounds poetic, but it's honestly the main reason.",
            note: "The favourite arrives first, then two sensory reasons and a small self-mockery to close.",
            domain: "everyday",
          },
          {
            english: "Q: Does the weather affect your mood? A: More than I'd like to admit. A week of grey drizzle and my energy sinks; give me two bright days and I'm a different person — I even wake up earlier without trying.",
            note: "Admitting 'more than I'd like to admit' is a natural frame for an honest confession layer.",
            domain: "life",
          },
          {
            english: "Q: Have you ever experienced extreme weather? A: Once — a summer storm that cut the power for two days. We cooked on a camping stove and played cards by candlelight; it was frightening for the first hour and oddly memorable for the rest.",
            note: "A compact story arc: what happened, what you did, how the feeling changed by the end.",
            domain: "life",
          },
          {
            english: "Q: Do people in your country talk about the weather a lot? A: Constantly — it's practically our national opening move. Two strangers at a bus stop can run a full conversation on rain alone, and honestly it works: it's friendly, it's safe, and everyone has an opinion.",
            note: "A cultural observation plus a reason; even a question about talk itself stays personal.",
            domain: "study",
          },
          {
            english: "Q: Would you rather live somewhere hotter or colder? A: Hotter, I think — though I always say that in February. Cold is easier to dress for, but heat lifts my mood, so I'd swap grey winters for a long summer and learn to love air conditioning.",
            note: "A would-question answered with would-language, a confession, and a reason rooted in real preference.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Thin answers, developed answers",
        items: [
          {
            wrong: "It is hot in summer and cold in winter.",
            right: "Summer runs hot and humid from June to September, October cools into the best month of the year, and our winters are more grey and damp than truly cold — so a heavy coat stays in the wardrobe most years.",
            reason: "Asked to describe her climate, the candidate offered two adjectives; the seasonal sweep and the clothing detail are what show range.",
          },
          {
            wrong: "I like winter because it is cool.",
            right: "Winter genuinely suits me — I sleep better in a cold room, I'd rather wrap up warm than melt in the heat, and the city feels calmer once the crowds disappear. Summer people call me strange; I stand by it.",
            reason: "The thin version's reason ('it is cool') merely repeats the season; the developed version gives three felt reasons and a touch of personality.",
          },
          {
            wrong: "Yes, the weather changes my mood.",
            right: "Definitely — a stretch of grey skies drains me within days, while one bright morning resets me completely, so I've learned to schedule my walks early in the week as insurance against the forecast.",
            reason: "The bare agreement states the link; the developed answer shows the link working and adds a coping strategy as its detail layer.",
          },
          {
            wrong: "Yes, I have seen a big storm.",
            right: "A typhoon warning once shut the whole city for two days — we taped the windows, filled the bath with water and waited it out with board games; the sound of the wind that first night is something I still remember physically.",
            reason: "The experience question wants the story, not the yes; when, what you did and what stayed with you are the three beats that were missing.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Weather, end to end",
        reading: {
          text: "Weather earns its place in Part 1 because it is the one subject no candidate can be disqualified from: everyone has lived under some sky. But its familiarity breeds the shortest answers in the whole interview. The candidates who score well on this set treat a climate question as a describing task with a full year of material, a season question as a feelings question, and an extreme-weather question as a story invitation. In each case the trick is identical — refuse to stop at the first true word.",
          task: "Name the three treatments this passage says strong candidates give to climate, season and extreme-weather questions.",
        },
        writing: {
          task: "Write two sentences describing your climate across the year, then a full three-layer answer to 'Which season do you enjoy most?'",
          guide: [
            "Climate sweep: 'We get…' or 'Where I live, the year splits into…'",
            "Season opener: '…, without question' or 'It has to be…'",
            "Sensory reason: the light, the temperature, the sound, the clothes",
            "Closing effect: a memory, an energy shift, or a small ritual the season brings",
          ],
          model: "Where I live the year splits into a humid, sleepy summer and a long damp winter, with two short bright seasons stitching the two together in between. My favourite is those few weeks of spring — everything smells new, the mornings are cool enough to walk fast, and the whole city reappears outdoors at once, which lifts my mood more than any holiday does.",
        },
        listening: {
          script: "Tutor: One careful fix today. When I asked what the weather is like in your city, you told me you like it — that's a different question. 'What is it like' wants a description: humid, windy, four sharp seasons. 'Do you like it' wants an opinion. Straight afterwards you described your favourite season beautifully, so the language is clearly there — just aim it at the question that was actually asked.",
          task: "What confusion does the tutor identify, and what does she say proves the candidate has the language already?",
        },
        speaking: {
          task: "Answer these three aloud, giving each a minimum of two layers: 'What's the weather like in your hometown?' — 'Does rain change your plans?' — 'What would you do with one perfect free day of sunshine?'",
          frames: [
            "Where I live, we get…, and then…",
            "Rain honestly… — for example, last month…",
            "With a perfect day I'd probably…, and afterwards…",
          ],
          checklist: [
            "Did my climate answer cover more than one season?",
            "Did every opinion come with a reason the examiner could picture?",
            "Did the sunshine question stay inside would-language from start to finish?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Opening move", "The model answers the question that was asked — description for 'what is it like', opinion for 'do you like' — before it develops anything."],
          ["Lexical range", "Humid, damp, bright, cool, wrap up warm: weather wording arrives in variety and in context, not as a recited list."],
          ["Tense control", "Habits sit in present forms, the storm story in past simple, and the relocation answer in would — each timeframe kept clean."],
          ["Personality", "Confessions like 'I always say that in February' give the answer a voice; easy topics are exactly where personality shows."],
          ["Flow", "Each layer hands the next one a noun — the season, the light, the mood — so the answer moves as one connected stretch of speech."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Fix your climate's three or four true features in your head — the humid month, the rainy season, the mild patch — so description material is on tap."],
          ["While the clock runs", "If a weather answer comes out as one adjective, immediately add a second feature and one effect on your day before you stop."],
          ["If you are stuck", "Describe today's sky, then widen to the season, then attach a memory — the zoom-out move works from any starting point."],
          ["Final minutes", "Check your recording for the like-trap: any opinion given to a description question, or description given to an opinion question."],
        ],
      },
      {
        type: "summary",
        points: [
          "Answer the question that was asked: 'What's the weather like?' wants a description, and 'Do you like the weather?' wants an opinion — the two are not interchangeable.",
          "Describe climate as a sweep across the year rather than a single adjective; range of seasons is range of vocabulary.",
          "Season and mood questions are feelings questions in disguise — give sensory reasons and honest effects on your energy.",
          "Extreme-weather questions invite a small story: when, what happened, what you did, and what stayed with you.",
          "Keep descriptions of your own sky honest and specific; a true grey winter outperforms an invented tropical one every time.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from earlier lessons.",
        items: [
          {
            question: "What does precise wording do for your Lexical Resource score that 'very' plus a basic adjective cannot?",
            options: ["Nothing — examiners only count long words", "It shows range and control, e.g. drizzle or changeable instead of 'bad rain'", "It makes sentences longer, which is itself rewarded"],
            correctIndex: 1,
            explanation: "The vocabulary criterion rewards precise, natural choice — one exact word like drizzle demonstrates more control than any stack of intensifiers.",
            from: "Vocabulary for speaking",
          },
          {
            question: "In the layer habit, what comes immediately after the direct answer?",
            options: ["A contrast with another country", "The reason, usually signalled by because or so", "A question back to the examiner"],
            correctIndex: 1,
            explanation: "The reason is the second layer: it justifies the position you have just stated and sets up the detail or feeling that closes the answer.",
            from: "Extending answers naturally",
          },
          {
            question: "You need two seconds to think mid-answer. What is the fluent speaker's move?",
            options: ["Stop completely and restart the answer", "Use a natural filler — 'let me think', 'well' — and keep eye contact", "Switch to your prepared sentence on another topic"],
            correctIndex: 1,
            explanation: "Short natural fillers keep the speech flow alive, whereas silence or a topic jump breaks coherence and signals a lost thread.",
            from: "Natural fluency",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. The examiner asks: 'What's the weather like in your hometown?' What is being requested?",
        hints: ["The word 'like' here means 'describe it' — it is not asking about enjoyment."],
        options: [
          { id: "a", text: "Your opinion of the local climate, with reasons you like or dislike it." },
          { id: "b", text: "A description of the typical weather across the year — seasons, features, patterns." },
          { id: "c", text: "A weather forecast for the coming week in your region." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A description of the typical weather across the year — seasons, features, patterns.",
          "This 'like' asks for characteristics: humid summers, a rainy season, mild winters. Answering with enjoyment replies to a question that was never put to you.",
          "(a) treats a description request as an opinion request; (c) confuses a climate description with a forecast, which Part 1 never asks for.",
        ),
        tags: ["speaking", "part1", "weather"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the candidate's answer and diagnose its weakness.",
        hints: ["A story question wants a beginning, a middle and an ending — count the beats."],
        passageTitle: "The storm in one sentence",
        passage: "Asked whether he has ever experienced extreme weather, Tomas answers: 'Yes, one time there was a very big storm in my city. It was very strong and very dangerous.' He stops there. The examiner waits, then rephrases: 'What happened?'",
        question: "What is the main weakness in Tomas's answer?",
        options: [
          { id: "a", text: "He answered a different question from the one asked." },
          { id: "b", text: "He gave labels instead of a story — no when, no what he did, no how it ended." },
          { id: "c", text: "His vocabulary was too advanced for the topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "He gave labels instead of a story — no when, no what he did, no how it ended.",
          "An experience question invites a small narrative: the date, the events, your response and the aftermath. 'Very strong and very dangerous' evaluates the storm without ever telling it.",
          "(a) is wrong — he addressed the right question; (c) reverses the diagnosis, since the wording was generic rather than advanced.",
        ),
        tags: ["speaking", "part1", "weather", "narrative"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Which sentence uses weather vocabulary most naturally?",
        hints: [],
        options: [
          { id: "a", text: "Yesterday it made a big downpour, so I took my umbrella." },
          { id: "b", text: "It started as drizzle, then turned into a proper downpour by evening." },
          { id: "c", text: "The weather was very humid rain all the afternoon time." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It started as drizzle, then turned into a proper downpour by evening.",
          "Drizzle and downpour sit at opposite ends of the rain scale, and 'a proper downpour' is exactly how a native speaker would intensify it.",
          "(a) forces 'make' into a role it does not hold; (c) stacks adjectives and nouns in a way no fluent speaker would.",
        ),
        tags: ["speaking", "part1", "weather", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Explain the decoding rule this topic is famous for.",
        question: "What is the difference between 'What's the weather like?' and 'Do you like the weather?' — and what does each question want?",
        acceptedAnswers: [
          "The first asks for a description of the climate; the second asks for your opinion of it",
          "'What's it like' wants characteristics — seasons and features; 'Do you like' wants enjoyment plus reasons",
          "One is a describing question, the other an opinion question, so they need different answers",
          "Describe the weather for the first; say whether you enjoy it and why for the second",
        ],
        keywords: ["description", "opinion"],
        hints: [],
        feedback: fb(
          "The first asks for a description of the climate; the second asks for your opinion of it",
          "The 'like' in 'what is it like' means 'describe', so the two questions demand different answer types — mixing them up is this topic's classic slip.",
          "Answers claiming both questions want enjoyment, or that either wants a forecast, have missed the decoding rule entirely.",
        ),
        tags: ["speaking", "part1", "weather", "decoding"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Give this season answer aloud, layer by layer.",
        hints: ["Name the season first, then a sensory reason, then a memory or mood effect."],
        situation: "The examiner asks: 'Which season do you enjoy most in your country?'",
        targetPhrases: ["…, without question", "I love the way…", "It always takes me back to…"],
        mustSay: ["season", "because", "most"],
        feedback: fb(
          "A favourite season named at once, one or two sensory reasons, and a memory or mood effect to close.",
          "The grader listens for the three must-say ideas, but the habit under training is the order — favourite, reason, effect.",
        ),
        tags: ["speaking", "part1", "weather", "speaking-task"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Talk for half a minute on this imagined climate.",
        hints: [],
        situation: "The examiner asks: 'If you could move to any climate in the world, what would you choose?'",
        targetPhrases: ["I'd choose…", "…because the… would suit me", "I imagine…"],
        mustSay: ["would", "climate", "because"],
        feedback: fb(
          "An imagined climate chosen and kept inside would-language, with reasons drawn from how weather genuinely affects you.",
          "Relocation questions are hypotheticals in disguise; holding the would-frame while giving real reasons shows both range and control.",
        ),
        tags: ["speaking", "part1", "weather", "hypothetical"],
      }),
    ],
    assignment: {
      title: "A year of your weather",
      instructions:
        "In your own words, write (1) two sentences describing your region's climate across the year, and (2) a three-layer answer to 'Does the weather affect your mood?'. Use at least three vocabulary items from this lesson and keep every detail true to the sky you actually live under.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Record a one-minute weather diary for three days running, using a different precision word each day — drizzle, humid, changeable — instead of any generic 'bad weather'.",
      "Tell the story of one extreme-weather day from your life to a friend or a voice memo, checking that it contains when, what happened, what you did and how it ended.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-t-books",
    title: "Part 1 topics: Books",
    description:
      "Reading habits, favourite genres, paper versus digital, recommending a book without rehearsing a review, and childhood reading with used to — with genre precision as the vocabulary engine.",
    objectives: [
      "describe reading habits honestly with frequency phrases and formats",
      "weigh paper against digital with real reasons rather than price clichés",
      "talk about childhood reading using used to and a specific memory",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Books is the topic where candidates most often retreat to what they think examiners want to hear — claims of nightly Tolstoy — and it always sounds thinner than the truth. An honest 'I read in snatches on the train' gives you more to extend than any invented reading list. This lesson works through the questions the topic attracts — habits, genres, paper versus digital, recommendations and childhood reading — and installs the grammar they quietly require, especially used to for the books of your childhood. Every model here is a shape to refill: your genres, your formats, your memories, never a script to recite.",
        beforeYouStart: [
          "You can extend a preference answer using the because-plus-example habit from the foundations.",
          "You know that honest, specific material beats impressive-sounding general claims.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking Part 1 — the interview round on reading habits and literary taste"],
          ["Task & question types", "Habit questions, genre preferences, format comparisons, recommendation requests and childhood-memory questions"],
          ["What is assessed", "Lexical Resource through genre and format wording, Grammatical Range through used to and conditional recommendation frames"],
          ["Why this matters", "Reading is a high-frequency set where honest, specific answers distinguish candidates from rehearsed bookish clichés"],
        ],
      },
      { type: "heading", text: "Component 1 — The questions a reading round asks" },
      {
        type: "text",
        text: "A books round opens with quantity and habit — do you read much, when, where — then narrows to taste: what kinds, which formats, one you would recommend. It often closes in childhood, which is where the grammar shifts: the reading of your early years lives in used to and past simple, not present habits. Two preparation moves pay off across the whole set. First, know your real genres at name-level precision — a psychological thriller, a memoir, popular science — because genre words are the topic's core vocabulary. Second, keep one true reading memory warm: the book you stayed up finishing, the series that owned a summer. Specific memories extend; vague enthusiasm stalls.",
      },
      {
        type: "table",
        title: "Common question patterns",
        headers: ["Question type", "Questions in this style", "What your answer needs"],
        rows: [
          ["Factual", "Do you read much these days? / What do you usually read?", "An honest quantity phrase — 'in snatches', 'most evenings' — plus what exactly you read"],
          ["Preference", "What kind of books do you enjoy most? / Fiction or non-fiction?", "A named genre with the reason it hooks you, ideally one concrete example"],
          ["Frequency", "How often do you read for pleasure?", "A true frequency, the time and place it happens, and what competes with it"],
          ["Change", "Did you read more as a child than now? / Have your tastes changed?", "Past habits with used to, then the present position and what caused the shift"],
          ["Comparison", "Paper books or e-books — which do you prefer?", "Both formats weighed — feel, convenience, cost — then your honest verdict"],
          ["Hypothetical", "What book would you recommend to a friend? / If you wrote a book, what would it be about?", "A would-frame kept warm, with reasons a real reader could defend"],
        ],
      },
      { type: "heading", text: "Component 2 — Time travel and the recommendation frame" },
      {
        type: "text",
        text: "Two decoders carry this topic. The first is time: childhood reading questions expect used to ('I used to read under the covers with a torch') or past simple, while today's habits take present forms — mixing them produces the favourite error of this set, present tense for the past. The second is the recommendation frame: 'What would you recommend?' sounds hypothetical but wants a real answer delivered through a softening wrapper — 'There's a quiet novel I keep pressing on people' — followed by why it suited you and who else it would suit. And one habit protects you from the topic's biggest trap: if a title escapes you mid-answer, describe the book by its story instead of freezing — 'a memoir by a chef who rebuilt his family's restaurant' scores as vocabulary, not as failure.",
      },
      {
        type: "steps",
        title: "The three layers, applied to books",
        steps: [
          {
            title: "Layer 1 — State the habit or the choice",
            text: "Open with the true quantity or the named genre: 'Mostly thrillers, these days' or 'A few pages every night, nothing dramatic'. Precision at the start licenses everything that follows.",
            examples: [
              { english: "Mostly historical fiction, and the odd memoir.", note: "Two genres named in six words — the answer already sounds like a reader." },
            ],
          },
          {
            title: "Layer 2 — Explain the pull",
            text: "Say why that habit or genre holds you: what the reading does for you — escape, learning, sleep, focus — in one because-clause.",
            examples: [
              { english: "…because it teaches me a period sideways, through people instead of dates.", note: "The reason is about the reading experience, not about books in general." },
            ],
          },
          {
            title: "Layer 3 — Anchor it in one book",
            text: "Close with a specific title, scene or memory: the novel that kept you up, the queue you read through. One real book outperforms every general claim about reading.",
            examples: [
              { english: "There's one about a mapmaker that had me missing my station twice.", note: "No plot summary needed — the effect on you is the detail that scores." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The reader's word set" },
      {
        type: "table",
        title: "Useful vocabulary",
        headers: ["Word or phrase", "What it means", "A natural way to use it"],
        rows: [
          ["a page-turner", "a book so gripping you cannot stop reading", "Take that one on holiday — it's a proper page-turner."],
          ["to be hooked (on)", "to be unable to stop following a story or series", "I'm hooked on a detective series set in my own city."],
          ["an e-reader", "a handheld device designed for reading books", "My e-reader holds a hundred books and fits in a coat pocket."],
          ["non-fiction", "writing about real events, people or ideas", "I go through phases — all fiction, then nothing but non-fiction."],
          ["to flick through", "to turn pages quickly, reading bits", "I flick through cookbooks more than I cook from them."],
          ["a bookworm", "someone who loves reading, informally", "I was the family bookworm — still am, on good weeks."],
          ["I couldn't put it down", "the book was too gripping to stop", "I couldn't put it down, so dinner was late that night."],
          ["a paperback", "a book with a flexible paper cover", "Paperbacks for holidays, hardbacks for keeps."],
        ],
      },
      {
        type: "usage",
        title: "Natural expressions for reading talk",
        items: [
          {
            situation: "Admitting your reading has slowed",
            example: "I don't get through as many books as I'd like.",
            note: "An honest hedge that flatters no one — and invites the detail layer: what is eating your reading time.",
          },
          {
            situation: "Placing yourself on the taste spectrum",
            example: "I've always been more of a non-fiction person.",
            note: "'More of a … person' declares a leaning without dismissing the other side — perfect before a comparison.",
          },
          {
            situation: "Describing a book that absorbed you",
            example: "It completely drew me in — I finished it in two sittings.",
            note: "'Drew me in' plus a reading-speed fact is a strong, checkable detail.",
          },
          {
            situation: "Mentioning a book you own but haven't opened",
            example: "It's been sitting on my shelf for a year, judging me.",
            note: "Self-aware humour about unread piles sounds natural; one such joke per round is enough.",
          },
          {
            situation: "Naming a book that lasted",
            example: "That one has genuinely stayed with me.",
            note: "'Stayed with me' says the book mattered — then say how, with one image or line you remember.",
          },
        ],
      },
      {
        type: "example",
        title: "Example responses — question and answer",
        items: [
          {
            english: "Q: Do you read much these days? A: Less than I'd like, honestly — work eats my evenings, so reading happens in snatches: twenty minutes on the train, a few pages before sleep. Weekends are when I properly disappear into a book.",
            note: "An honest quantity answer with two named reading moments — no pretence, plenty to discuss.",
            domain: "everyday",
          },
          {
            english: "Q: What kind of books do you enjoy? A: Mostly historical fiction — I like being dropped into a period I half-know and taught about it sideways. If a novel sends me checking the real events afterwards, it has done its job as far as I'm concerned.",
            note: "Genre plus a reader's test for it: the reason is about the experience, not a school essay.",
            domain: "exam",
          },
          {
            english: "Q: Paper books or e-books? A: Paper for keeps, digital for convenience. My e-reader holds a hundred books for travel, but anything I love gets a physical copy for the shelf — there's a satisfaction in seeing what a year of reading looks like.",
            note: "Both sides get their due before the verdict; the closing image is the detail layer.",
            domain: "exam",
          },
          {
            english: "Q: What would you recommend to a friend? A: There's a quiet novel about a lighthouse keeper I've pressed on three people — nothing dramatic happens, yet the sentences are so calm and exact that you finish feeling restored. Two of the three thanked me; I'm still working on the third.",
            note: "A recommendation built on the book's effect, not its plot; the closing joke keeps it human.",
            domain: "life",
          },
          {
            english: "Q: Did you read a lot as a child? A: Obsessively. I used to read under my desk at school and under the covers with a torch after lights-out — the library had a two-book limit, which I treated as a daily challenge rather than a rule.",
            note: "Used to plus two specific scenes: childhood questions reward pictures, not totals.",
            domain: "study",
          },
          {
            english: "Q: Do you listen to audiobooks? A: On long drives, yes — a good narrator can make an ordinary book feel like company. But for anything I truly want to remember, my eyes beat my ears: I flick back, I reread the sentences that land.",
            note: "A clear position, a reason, and a physical reading habit as the closing detail.",
            domain: "work",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Thin answers, developed answers",
        items: [
          {
            wrong: "Yes, I like reading books.",
            right: "Yes, though these days it's mostly on the train — twenty minutes each way, which is roughly a novel a fortnight if the book is good enough to survive my tiredness.",
            reason: "The bare agreement says nothing about quantity, place or pace — the three things a habits question is built from.",
          },
          {
            wrong: "I like detective stories.",
            right: "Detective stories, mainly the slow, atmospheric kind — I like a mystery where the city is half the answer. One series set in my own town had me walking past its locations like a tourist.",
            reason: "Naming a sub-genre and one reading effect turns a label into a taste; the thin version could belong to any candidate in the room.",
          },
          {
            wrong: "E-books are better because they are cheap.",
            right: "E-books win on price and luggage — I travel with a hundred of them — but the screen ends my day rather than starting it, so anything serious I read on paper. Each format gets a job in my life.",
            reason: "Price alone is the most repeated reason in this topic; the developed answer divides the labour between formats and closes with a verdict.",
          },
          {
            wrong: "When I was a child I read many stories.",
            right: "I used to read everything the school library held — I had a system, two books out every Friday, both finished by Sunday. My clearest memory is being allowed into the 'older' section a year early, which felt like a licence.",
            reason: "Childhood questions want used to plus one vivid memory; 'many stories' reports a quantity where the examiner hoped for a scene.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Books, end to end",
        reading: {
          text: "Reading questions are safe territory, which is exactly why they produce the most interchangeable answers in Part 1: everyone claims to enjoy novels, everyone says e-books are convenient, everyone read 'many stories' as a child. The candidates who stand out are not the ones who read more — they are the ones whose answers could belong to no one else. A named sub-genre, a reading ritual, a book described by its effect on a specific evening: these cost nothing to prepare, because they are simply true, and they are the material the examiner remembers.",
          task: "According to the passage, what makes a reading answer memorable — quantity of reading, or something else?",
        },
        writing: {
          task: "Write a three-layer answer to 'Did you read much as a child?', including one used to sentence and one specific scene.",
          guide: [
            "Quantity opener: 'Obsessively' / 'On and off' / 'Only what school forced on me'",
            "Past-habit frame: 'I used to read…' or 'Every Saturday I would…'",
            "One scene: the torch under the covers, the library ritual, the book swapped in class",
            "Bridge to now (optional): 'These days it's… instead'",
          ],
          model: "Obsessively, by the standards of my family anyway. I used to read at the dinner table until my parents surrendered and made it legal on Sundays, and every Friday I would bike to the library for two books, both finished by the weekend. These days my reading has shrunk to train journeys — but the Friday habit still exists, just with a bookshop and a coffee.",
        },
        listening: {
          script: "Tutor: Your childhood answer is nearly there. You said 'I read many books when I was small' — that's present habits grammar wearing a past costume. Swap in 'I used to' and the whole sentence relaxes: 'I used to read under the blankets.' Then give me one picture — the torch, the limit at the library, anything I can see. You described your detective series beautifully earlier, so I know the pictures are there when you let them out.",
          task: "What grammar correction does the tutor make, and what does she ask for to finish the answer?",
        },
        speaking: {
          task: "Answer these three aloud, minimum two layers each: 'What do you usually read?' — 'Paper or digital?' — 'What book would you press on a friend?'",
          frames: [
            "Mostly…, these days — I go through phases of…",
            "Paper for…, digital for… — each format gets a job.",
            "There's one book I keep recommending — it's…, and it…",
          ],
          checklist: [
            "Did the childhood or habit answer reach a specific scene?",
            "Did any comparison end with a personal verdict?",
            "Did my recommendation describe the book's effect rather than its plot?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Honesty as structure", "The model admits real constraints — tiredness, travel, work — and builds the answer's texture from them, which no borrowed answer can copy."],
          ["Grammar range", "Used to and would carry the childhood habits, present forms carry today's, and the recommendation sits in a soft conditional — three timeframes handled cleanly."],
          ["Vocabulary", "Page-turner, hooked, in snatches, paperback for keeps: reader's wording used in context rather than listed."],
          ["Specificity", "Two books out every Friday, a lighthouse keeper novel, a torch under blankets — each answer owns at least one image no other candidate could produce."],
          ["Coherence", "Habit, reason and example arrive in that order, so the listener always knows which layer they are hearing."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Fix three true reading facts in mind — your current book, your genre, one childhood reading scene — as your extension fuel for the round."],
          ["While the clock runs", "After any bookish claim, attach one because and one example title or scene before you breathe; adjectives without books are where this topic goes thin."],
          ["If you are stuck", "If a title vanishes mid-sentence, describe the book by its story and effect — 'a memoir about a mountain rescue' — and carry on without pausing."],
          ["Final minutes", "Replay your answers and check the childhood one for tense: any present-tense verb describing the past is this topic's signature error."],
        ],
      },
      {
        type: "summary",
        points: [
          "Honest quantity beats borrowed enthusiasm: 'in snatches on the train' extends further than any invented reading list.",
          "Genre precision is the topic's core vocabulary — a psychological thriller or a memoir says more than 'books I like'.",
          "Childhood reading lives in used to and past simple; today's habits live in present forms, and the two must not mix.",
          "Recommendation questions want a real book inside a soft frame — what it did to you and who it would suit, not a plot summary.",
          "When a title escapes you, describe the book by its story; the description scores as vocabulary, not as failure.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier in the programme.",
        items: [
          {
            question: "Which sentence correctly describes a finished childhood habit?",
            options: ["I am reading under the covers as a child.", "I used to read under the covers with a torch.", "I use to read under the covers every night."],
            correctIndex: 1,
            explanation: "Used to plus infinitive is the past-habit form; 'I use to' is a spelling-level error and present continuous cannot carry a childhood memory.",
            from: "Grammar accuracy in speech",
          },
          {
            question: "Why does a specific personal detail outscore an impressive general claim?",
            options: ["General claims are grammatically harder", "Specifics are unfakeable, extend naturally and sound like live speech rather than a recital", "Examiners are required to prefer stories"],
            correctIndex: 1,
            explanation: "A detail like a Friday library ritual can only be yours, and it invites follow-up speech — the exact behaviour the fluency criterion rewards.",
            from: "Avoiding memorised responses",
          },
          {
            question: "What is the recommended treatment for a word you cannot find mid-answer?",
            options: ["Stop the answer until the word returns", "Swap language level — describe around the idea — and keep speaking", "Repeat the word you know louder"],
            correctIndex: 1,
            explanation: "Describing around a missing word keeps the speech flowing and demonstrates paraphrase, which is precisely what the vocabulary criterion credits.",
            from: "Vocabulary for speaking",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Guided practice. The examiner asks: 'Did you read much as a child?' Which answer opens most effectively?",
        hints: ["Childhood questions live in past-habit grammar — look for used to plus a picture."],
        options: [
          { id: "a", text: "Yes, I like reading very much, especially at night." },
          { id: "b", text: "Obsessively — I used to read under the covers with a torch after lights-out." },
          { id: "c", text: "Children should read more because it is good for their imagination." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Obsessively — I used to read under the covers with a torch after lights-out.",
          "The past-habit frame plus one visual scene answers the question asked and lands the detail layer in a single sentence.",
          "(a) answers in present tense about current enjoyment; (c) drifts into a general opinion about children that the examiner never requested.",
        ),
        tags: ["speaking", "part1", "books"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the two answers and identify the decisive difference.",
        hints: ["Ask which answer could belong to nobody else in the room."],
        passageTitle: "Two answers about e-books",
        passage: "Candidate one: 'E-books are convenient and cheap, so I prefer them.' Candidate two: 'My e-reader holds a hundred books for travel, but anything I love gets a paper copy for the shelf — there's a satisfaction in seeing what a year of reading looks like.' The examiner asks a follow-up question only of candidate two.",
        question: "Why did the second answer earn the follow-up question?",
        options: [
          { id: "a", text: "It was longer, and length alone is rewarded." },
          { id: "b", text: "It divided the formats between real jobs in her life and closed with a personal image the examiner could ask about." },
          { id: "c", text: "It criticised candidate one's answer directly." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It divided the formats between real jobs in her life and closed with a personal image the examiner could ask about.",
          "Follow-up questions go where there is material to follow: the shelf of a year's reading is specific, personal and extendable in a way 'cheap and convenient' never is.",
          "(a) mistakes cause for correlation — a long generic answer gets no follow-up; (c) did not happen and would hurt, not help.",
        ),
        tags: ["speaking", "part1", "books", "comparison"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Which sentence uses reader's vocabulary most naturally?",
        hints: [],
        options: [
          { id: "a", text: "This book is a page-turner — I couldn't put it down and missed my stop twice." },
          { id: "b", text: "The book was very hooking and I was very absorbed by it strongly." },
          { id: "c", text: "I am hooked on books since I was a small child reader." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "This book is a page-turner — I couldn't put it down and missed my stop twice.",
          "Page-turner and couldn't put it down are natural companions, and 'missed my stop twice' converts the idiom into a verifiable personal detail.",
          "(b) invents 'very hooking' and stacks intensifiers; (c) pairs present-tense 'hooked on' with a childhood timeframe, mixing two habits.",
        ),
        tags: ["speaking", "part1", "books", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. State the two moves that make a recommendation answer strong.",
        question: "When the examiner asks what book you would recommend, what two moves make the answer strong?",
        acceptedAnswers: [
          "Name or describe the book inside a soft would-frame, then say what it did to you and who it would suit",
          "Describe the book's effect on you and the kind of reader it fits, rather than summarising its plot",
          "Say what the book did to you, and match it to the friend's taste",
          "Give the book through 'there's one I keep pressing on people', then explain why it suited you",
        ],
        keywords: ["effect", "because"],
        hints: [],
        feedback: fb(
          "Name or describe the book inside a soft would-frame, then say what it did to you and who it would suit",
          "Recommendation answers score on the effect and the fit — plot summaries belong to reviews, while Part 1 wants your reading experience.",
          "Answers about the book's famous author, its price or a scene-by-scene summary have swapped review-writing for conversation.",
        ),
        tags: ["speaking", "part1", "books", "recommendation"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Answer this reading question aloud in three layers.",
        hints: ["Genre first, then why it hooks you, then one real book or scene."],
        situation: "The examiner asks: 'What kind of books do you enjoy reading?'",
        targetPhrases: ["Mostly…, these days", "…because it…", "There's one… that had me…"],
        mustSay: ["because", "kind", "read"],
        feedback: fb(
          "A named genre, a reason for its pull on you, and one specific book or reading moment to anchor the taste.",
          "The must-say checks keep the answer on topic, while the layer order — genre, reason, book — is the habit doing the real work.",
        ),
        tags: ["speaking", "part1", "books", "speaking-task"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Give a spoken answer of twenty to thirty seconds.",
        hints: [],
        situation: "The examiner asks: 'If you wrote a book one day, what would it be about?'",
        targetPhrases: ["If I wrote one, it would be…", "I'd probably set it…", "I imagine…"],
        mustSay: ["would", "book", "about"],
        feedback: fb(
          "An imagined book held inside would-language, with a subject you could defend and one detail about its world.",
          "This hypothetical rewards imagination plus honesty — the invented book's theme usually reveals something true about your interests.",
        ),
        tags: ["speaking", "part1", "books", "hypothetical"],
      }),
    ],
    assignment: {
      title: "Your reading life, in layers",
      instructions:
        "Write developed answers to two of these three: 'Do you read much these days?' — 'Which do you prefer, paper books or e-books?' — 'What did you read as a child?' Include one used to sentence if you choose the childhood question, and describe at least one real book by its effect on you.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Prepare a sixty-second recommendation of a book you genuinely love, practising it once aloud without notes — effect and fit, never plot.",
      "Note your reading habits for one week — when, where, what format — and turn the honest record into three sentences of Part 1 material.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-t-music",
    title: "Part 1 topics: Music",
    description:
      "What you listen to, when and where, live gigs, childhood instruments and the songs that store your memories — with the experience-versus-desire decoder and used to kept cleanly apart.",
    objectives: [
      "answer experience, ability and desire questions with their three different grammars",
      "describe listening habits and live-music memories in specific, personal detail",
      "use natural music idioms — on repeat, an earworm, playing by ear — inside ordinary speech",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Music questions look like the easiest minutes of the interview — until the answer comes out as 'I like pop music', a sentence that ends the conversation rather than opening it. The examiner is not asking for your streaming history; they are asking what sound does to your day, your memory and your ambitions. This lesson separates the three question families the topic hides — experience, ability and desire — and gives each its grammar, then builds the listening-habit vocabulary that makes answers specific. Fill every frame with your own playlists and your own instrument failures; nothing here works as a borrowed script.",
        beforeYouStart: [
          "You can already weigh two sides of a preference question and land on a position.",
          "You have met used to for past habits and can hear the difference from a present routine.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking Part 1 — the interview round on listening habits, gigs and instruments"],
          ["Task & question types", "Habit and context questions, live-versus-recorded preferences, childhood instrument questions and imagined-concert hypotheticals"],
          ["What is assessed", "Grammatical Range through used to, present perfect experience and would forms; Lexical Resource through idiomatic listening vocabulary"],
          ["Why this matters", "This topic quietly tests three timeframes in five minutes, so tense control here is visible evidence of range"],
        ],
      },
      { type: "heading", text: "Component 1 — The shape of a music round" },
      {
        type: "text",
        text: "A music round starts broad — what you listen to, when it plays in your day — then narrows towards events and biography: gigs you have attended, instruments you did or did not learn, and finally the imagined concert you would attend if time travel were available. Two habits serve the whole set. First, name real contexts instead of genres alone: 'kitchen music', 'headphones on the bus', 'the album that owned my first year at university' — context is where this topic becomes personal. Second, keep your taste honest and unapologetic; a candidate who admits one playlist of terrible pop for cleaning day sounds more fluent than one who claims only serious listening.",
      },
      {
        type: "table",
        title: "Common question patterns",
        headers: ["Question type", "Questions in this style", "What your answer needs"],
        rows: [
          ["Factual", "What kind of music do you usually listen to? / Do you play music while you work?", "Named styles plus the contexts they belong to — the kitchen, the commute, the gym"],
          ["Preference", "Do you prefer live music or recordings? / Headphones or speakers?", "A choice, a reason rooted in sound or feeling, and one small concession to the other side"],
          ["Frequency", "How often do you listen to music? / When do you listen most?", "A true frequency plus the routines the music is attached to"],
          ["Change", "Did you learn an instrument at school? / Has your taste changed over the years?", "Past habits in used to, then the present position and what caused any shift"],
          ["Comparison", "How is hearing music live different from listening at home?", "Both experiences described through the senses, then your preference stated"],
          ["Hypothetical", "Would you like to learn an instrument? / If you could attend any concert in history, which would you pick?", "Would-language held throughout, with reasons that can be entirely real"],
        ],
      },
      { type: "heading", text: "Component 2 — Experience, ability and desire" },
      {
        type: "text",
        text: "This topic's questions sort into three grammatical families, and hearing which family you are in prevents the classic slips. Experience questions — 'Have you ever been to a live gig?' — open the past: answer with a small story in past simple. Ability and past-habit questions — 'Did you learn an instrument?' — want used to or past simple, never present forms. Desire questions — 'Would you like to learn one now?' — live in the would-world: choose your instrument, give your reason, and stay inside the frame until you finish. Guard one boundary carefully: used to play the guitar describes a past habit, while I'm used to playing with noise around describes present familiarity — same three words, entirely different jobs, and examiners hear the difference.",
      },
      {
        type: "steps",
        title: "The three layers, applied to music",
        steps: [
          {
            title: "Layer 1 — Name the sound or the fact",
            text: "Open with the artists, the era or the plain truth of the question: 'Mostly indie folk, with a shameful amount of pop'. The direct answer earns the right to develop.",
            examples: [
              { english: "Old soul records when I'm cooking — Sunday mornings, always.", note: "Genre, context and even a day named: a whole listening habit in one line." },
            ],
          },
          {
            title: "Layer 2 — Say what the music does",
            text: "Follow with its job in your life: energy, calm, focus, memory. Music answers score when the reason is about effect rather than about the genre's reputation.",
            examples: [
              { english: "…because it slows my cooking down to the tempo of the song.", note: "The reason describes an effect on behaviour — concrete and slightly unexpected." },
            ],
          },
          {
            title: "Layer 3 — Anchor one moment",
            text: "Close with a specific scene: the gig in the tiny club, the song that is 'your' song with someone, the practice you dodged as a child. One anchored moment outperforms a list of festivals.",
            examples: [
              { english: "There's a live recording of one track I must hear whenever the week goes wrong — it resets me like little else.", note: "A ritual attached to one recording: specific, personal, extendable." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — A listener's word set" },
      {
        type: "table",
        title: "Useful vocabulary",
        headers: ["Word or phrase", "What it means", "A natural way to use it"],
        rows: [
          ["catchy", "easy to remember and hard to stop humming", "It's a catchy tune — I've been humming it for days."],
          ["on repeat", "played again and again, informally", "That album lived on repeat all through my final exams."],
          ["a gig", "a live popular-music concert, informally", "My first gig was in a club that held about eighty people."],
          ["to play by ear", "to play without reading written music", "He can't read a note but plays everything by ear."],
          ["lyrics", "the words of a song", "I rarely catch the lyrics first time — I look them up after."],
          ["a playlist", "a chosen list of tracks for a purpose", "I keep one playlist strictly for cleaning the flat."],
          ["an earworm", "a song that repeats itself in your head", "The advert's jingle became an earworm for a whole week."],
          ["to stream", "to listen to music direct from the internet", "I stream at home but keep downloads for the underground."],
        ],
      },
      {
        type: "usage",
        title: "Natural expressions for music talk",
        items: [
          {
            situation: "Explaining what a song does to your memory",
            example: "That one takes me right back to my first flat.",
            note: "'Takes me back' opens the memory layer instantly — then supply the scene it returns you to.",
          },
          {
            situation: "Describing music you disliked at first",
            example: "It grew on me, honestly — now it's my favourite track.",
            note: "'Grow on someone' charts a change of heart, which is exactly the material a taste question wants.",
          },
          {
            situation: "Admitting you cannot sing",
            example: "I love singing along, but I can't carry a tune.",
            note: "'Can't carry a tune' is the natural self-deprecating admission — far better than claiming ability you lack.",
          },
          {
            situation: "Stating a strong current enthusiasm",
            example: "I'm really into anything with a brass section at the moment.",
            note: "'Into' plus a detail narrows a vague taste into a specific, discussable one.",
          },
          {
            situation: "Complaining affectionately about a stuck song",
            example: "It's been stuck in my head since Thursday.",
            note: "The stuck-song complaint is universally relatable and invites the story of where you heard it.",
          },
        ],
      },
      {
        type: "example",
        title: "Example responses — question and answer",
        items: [
          {
            english: "Q: What kind of music do you listen to? A: My taste is embarrassingly wide — indie folk for slow mornings, old soul when I'm cooking, and one playlist of terrible pop that exists purely for cleaning days. I've stopped apologising for it; music is mood-management for me.",
            note: "Three contexts instead of one genre, closed with a philosophy — range without showing off.",
            domain: "everyday",
          },
          {
            english: "Q: When do you listen to music most? A: On the move, mostly. Headphones turn a crowded bus into a private cinema, and a walk with the right album can rearrange my whole afternoon — I'd say I listen more outside the house than in it.",
            note: "The context is named, then its effect, then a closing observation that invites follow-up.",
            domain: "life",
          },
          {
            english: "Q: Have you ever been to a live gig? A: A few times, and one stays with me: a club of maybe eighty people, the band two metres away, everyone singing the choruses like a choir. Studio versions of those songs have sounded slightly flat to me ever since.",
            note: "An experience question answered as a small story, with a permanent after-effect as the close.",
            domain: "exam",
          },
          {
            english: "Q: Did you learn an instrument as a child? A: The violin, unwillingly, for four school years — I used to hide the practice sheets under my bed. I appreciate the training now, but at the time it felt like a hostage negotiation conducted through a bedroom door.",
            note: "Used to plus an honest, funny memory; childhood failures make richer answers than invented success.",
            domain: "study",
          },
          {
            english: "Q: Would you like to learn an instrument now? A: The guitar, someday — it looks portable and forgiving. My plan is four chords and the confidence to bluff through campfires, which I'm told is a respected tradition.",
            note: "A desire answer held in would-language, with a self-aware plan instead of a noble resolution.",
            domain: "exam",
          },
          {
            english: "Q: Does certain music bring back memories? A: Powerfully — songs work like timestamps. One album is permanently my first year at university; I can't hear its opening track without seeing that particular corridor, which is the closest thing I own to time travel.",
            note: "The memory is anchored to one track and one corridor — the detail layer doing its job.",
            domain: "work",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Thin answers, developed answers",
        items: [
          {
            wrong: "I like pop music and also some rock.",
            right: "Mostly pop, but it divides strictly by activity — upbeat stuff for the gym, moody tracks for night buses. Genres matter less to me than whether a song fits the moment I'm in.",
            reason: "The thin version lists labels where the developed version gives the same taste a structure — music attached to moments.",
          },
          {
            wrong: "Yes, I went to one concert last year.",
            right: "One proper concert last spring — a small venue, standing room only, and by the last song the whole floor had become a choir. I lost my voice, which felt like proof of attendance.",
            reason: "The bare yes-report stops where the story starts: the venue, the crowd, the after-effect were all available.",
          },
          {
            wrong: "No, I never learned an instrument.",
            right: "Not for lack of my parents trying — there were two years of piano lessons I used to dodge by volunteering for extra homework. The piano won in the end: it sits in their living room as furniture.",
            reason: "A flat negative wastes a biography question; the honest failure contains used to, a tactic and an image.",
          },
          {
            wrong: "Yes, music helps me study.",
            right: "It has to be wordless — anything with lyrics and my attention follows the singer instead of the page. So it's film scores and rain sounds, which keep the room from feeling like an exam hall.",
            reason: "The developed version specifies what kind of music, why, and the effect it produces — the thin version states a fact and leaves.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Music, end to end",
        reading: {
          text: "Music is the most pervasive art form in most lives — through earphones, kitchens, shops and screens — which makes it ideal interview material: nobody has nothing to say. The danger is the opposite of silence. Because listening is effortless, candidates answer effortlessly, naming a genre and stopping. The strongest answers treat the topic as a documentary about their own week: where the music plays, what job it does, and the two or three moments it has quietly claimed. An examiner hears hundreds of 'I like pop' answers a year; they remember the candidate whose cleaning playlist had a name.",
          task: "According to the passage, what turns a music answer from forgettable to memorable?",
        },
        writing: {
          task: "Write a three-layer answer to 'Did you learn an instrument as a child?', using one used to sentence and one honest feeling to close.",
          guide: [
            "Truthful opener: 'The piano, briefly and badly' / 'Nothing — my school offered only the recorder'",
            "Past-habit frame: 'I used to…' or 'My parents once…'",
            "One scene: the dodged practice, the exam disaster, the piece you finally played",
            "Feeling close: how you feel about it now, one sentence",
          ],
          model: "The clarinet, for three triumphant years of avoiding it — I used to claim reed problems so often my teacher began keeping spares. What I remember now is one concert where I played exactly one note correctly and still felt like an orchestra. I sold the clarinet at fifteen; I've kept the one note.",
        },
        listening: {
          script: "Tutor: Two notes on your instrument answer. First, you said 'I am used to play the piano' — careful: 'I used to play' is the past habit, 'I'm used to playing' means it feels normal now. Pick the first. Second, you ended with 'so I don't play now', which closes the door on the whole topic. Add what it left behind — the songs you still pick out, or how you listen differently because of it. End on what remains, not on what stopped.",
          task: "What grammar distinction does the tutor draw, and what does she suggest as a stronger ending?",
        },
        speaking: {
          task: "Answer these three aloud, minimum two layers each: 'When do you listen to music most?' — 'Live or recorded — which do you prefer?' — 'Would you like to learn any instrument?'",
          frames: [
            "Mostly while I'm… — it…",
            "Live wins for me because…, though recordings…",
            "I'd choose the…, mainly because…",
          ],
          checklist: [
            "Did my instrument answer use used to and not present forms?",
            "Did my preference weigh both sides before landing?",
            "Did the desire question stay inside would-language to the end?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Timeframe control", "Past habits sit in used to, the gig lives in past simple, the future instrument stays in would — three timeframes, each cleanly held."],
          ["Honesty", "The dodged clarinet and the sold instrument are unpolishable truths; borrowed answers cannot compete with material this specific."],
          ["Idiom use", "On repeat, grew on me, an earworm: idioms arrive inside sentences rather than as exhibits, which is what natural means."],
          ["Effect reasons", "Every preference is justified by what the sound does — energy, calm, focus — never by a genre's public reputation."],
          ["Closings", "Answers end on what remains — a memory, a ritual, a favourite note — rather than on 'so I stopped', keeping the topic alive for follow-ups."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose three true listening facts — a context, a gig or absence of one, an instrument story, real or failed — and hold them ready as your raw material."],
          ["While the clock runs", "Match the grammar to the family: stories for experience, used to for past habits, would for desires; and attach every genre to a moment of your day."],
          ["If you are stuck", "Reach for the last song that stuck in your head — it supplies taste, context and story in one move, and everyone has one."],
          ["Final minutes", "Replay and hunt two errors: present tense inside childhood memories, and desire answers that slipped out of would."],
        ],
      },
      {
        type: "summary",
        points: [
          "Music questions hide three families — experience, past habit and desire — and each family carries its own grammar: story past, used to, and would.",
          "Attach sound to contexts: kitchen music, bus music, cleaning playlists; context is what makes taste specific and discussable.",
          "Used to play describes a past habit; be used to playing describes present familiarity — keep the two apart under pressure.",
          "Failures make the best material: the dodged instrument and the lost voice after one gig are richer than any invented virtuosity.",
          "Close answers on what remains — a ritual, a memory, a timestamp song — not on what stopped, so the topic stays open.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the foundations chapter.",
        items: [
          {
            question: "Which sentence means the piano was a childhood habit that has ended?",
            options: ["I am used to playing the piano.", "I used to play the piano.", "I use to play the piano."],
            correctIndex: 1,
            explanation: "Used to plus infinitive marks a finished past habit; 'am used to' means present familiarity, and 'use to' is simply a misspelling.",
            from: "Grammar accuracy in speech",
          },
          {
            question: "The examiner asks about a music genre you know nothing about. What is the honest, fluent response?",
            options: ["Name a famous artist in that genre and hope", "Admit the gap, then relate the question to the nearest thing you do know", "Change the subject to a genre you like"],
            correctIndex: 1,
            explanation: "Admitting the gap keeps you honest, and bridging to what you do know keeps you talking — the two moves unfamiliar questions reward.",
            from: "Handling unfamiliar questions",
          },
          {
            question: "How long should a Part 1 answer normally run?",
            options: ["One sentence is safest", "Roughly two to four sentences, until the answer closes naturally", "A minute or more, like a Part 2 turn"],
            correctIndex: 1,
            explanation: "Part 1 is a conversation, not a monologue: extend past the first sentence, close naturally and hand the floor back.",
            from: "Extending answers naturally",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Guided practice. The examiner asks: 'Did you learn an instrument at school?' Which answer opens best?",
        hints: ["The question reaches into a closed past — which option has the grammar and a picture?"],
        options: [
          { id: "a", text: "Yes, I love music and I play every day after work." },
          { id: "b", text: "The recorder, badly — I used to squeak my way through the school concerts." },
          { id: "c", text: "Music education is very important for young children." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The recorder, badly — I used to squeak my way through the school concerts.",
          "The past-habit form plus a self-mocking scene answers exactly what was asked and lands the detail layer in the same breath.",
          "(a) answers about present habits; (c) answers a question about educational policy that nobody asked.",
        ),
        tags: ["speaking", "part1", "music"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the exchange and diagnose the candidate's error.",
        hints: ["The question was about the future, not about general enjoyment."],
        passageTitle: "The desire question that got a taste answer",
        passage: "The examiner asks Diana: 'Would you like to learn a musical instrument one day?' She answers: 'Yes, I like music very much. Music makes me feel relaxed and happy.' The examiner pauses, then asks again whether she would choose an instrument.",
        question: "What went wrong in Diana's answer?",
        options: [
          { id: "a", text: "She answered a general enjoyment question instead of the desire question — no instrument, no would, no intention." },
          { id: "b", text: "Her grammar made the answer impossible to understand." },
          { id: "c", text: "She spoke too briefly about the wrong genre of music." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "She answered a general enjoyment question instead of the desire question — no instrument, no would, no intention.",
          "A would-question wants an imagined future: the instrument you would choose and the reason you would choose it. General feelings about music belong to a different question entirely.",
          "(b) misdiagnoses accurate language; (c) names a symptom while missing the cause — the frame, not the genre, was wrong.",
        ),
        tags: ["speaking", "part1", "music", "decoding"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Which sentence uses music vocabulary most naturally?",
        hints: [],
        options: [
          { id: "a", text: "This song is very catchy — it's been stuck in my head since yesterday." },
          { id: "b", text: "The lyrics of this earworm are very on repeat in my head." },
          { id: "c", text: "I went to a gig last weekend that was very catchy with the crowd." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "This song is very catchy — it's been stuck in my head since yesterday.",
          "Catchy describes a tune that invades the memory, and 'stuck in my head' is its natural companion — the collocation works in both directions.",
          "(b) tangles earworm with on repeat; (c) applies catchy to an event, where it cannot live.",
        ),
        tags: ["speaking", "part1", "music", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Explain the difference between the two questions.",
        question: "What is the difference between 'Have you ever been to a live gig?' and 'Would you like to go to one?'",
        acceptedAnswers: [
          "The first asks about experience and needs a past story; the second asks about desire and needs would plus a reason",
          "An experience question wants what happened, told in past forms; a desire question wants would and why",
          "One wants your lived experience in past simple; the other your desire, framed with would",
          "Experience question → past narrative; desire question → would and a reason",
        ],
        keywords: ["experience", "desire"],
        hints: [],
        feedback: fb(
          "The first asks about experience and needs a past story; the second asks about desire and needs would plus a reason",
          "Sorting questions into experience and desire families is this topic's core decoder — each family demands its own tense and its own kind of reason.",
          "Answers treating both questions as opinions, or suggesting both want present habits, have missed the family distinction.",
        ),
        tags: ["speaking", "part1", "music", "decoding"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Answer this listening-habits question aloud, all three layers.",
        hints: ["Name the context first, then what the music does there, then one specific routine or memory."],
        situation: "The examiner asks: 'When do you listen to music most, and what do you listen to?'",
        targetPhrases: ["Mostly while I'm…", "…because it…", "There's one… I always…"],
        mustSay: ["mostly", "listen", "because"],
        feedback: fb(
          "A context named first, the effect the music has there, and one specific routine, artist or track to anchor it.",
          "The must-say ideas keep the answer on topic while the layer order — context, effect, moment — builds the habit.",
        ),
        tags: ["speaking", "part1", "music", "speaking-task"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Speak freely for up to thirty seconds.",
        hints: [],
        situation: "The examiner asks: 'If you could attend any concert, past or present, which would you choose and why?'",
        targetPhrases: ["I'd choose…", "…because I've always wondered…", "I imagine…"],
        mustSay: ["would", "concert", "because"],
        feedback: fb(
          "One concert chosen and held inside would-language, with reasons drawn from what that performance means to you.",
          "This hypothetical rewards imagination grounded in real taste — the choice reveals your listening life even while the grammar stays unreal.",
        ),
        tags: ["speaking", "part1", "music", "hypothetical"],
      }),
    ],
    assignment: {
      title: "Your musical life, in two answers",
      instructions:
        "Write developed answers to two of these three: 'When do you listen to music most?' — 'Did you learn an instrument as a child?' — 'Live or recorded — which do you prefer?' Use one used to sentence if you choose the instrument question, and keep every artist, playlist and memory genuinely yours.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Write down the three contexts where music genuinely enters your week, then record a thirty-second answer about one of them without notes.",
      "Practise the used to versus be used to distinction aloud with five invented sentences about music, checking each one against the two meanings.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-t-sports",
    title: "Part 1 topics: Sports",
    description:
      "Playing versus watching, school sports, staying active and the stadium-versus-sofa question — with the play, go and do collocation key and honest answers for non-athletes.",
    objectives: [
      "use play, go and do correctly with the sports you actually practise",
      "answer playing-versus-watching questions by weighing both sides before landing",
      "describe fitness routines and school-sport memories with honest, specific detail",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Sports questions worry non-sporty candidates more than any other set, which is a shame, because the examiner is scoring language, not fitness. A candidate who truthfully describes hating cross-country at school, in well-built sentences, outperforms a candidate pretending to train five times a week. This lesson covers the questions the set attracts, the three-verb collocation system that carries the whole topic, and the playing-versus-watching balance questions love. As with every topic in this programme, the models are moulds for your own material — your real habits, your real memories — never scripts to perform.",
        beforeYouStart: [
          "You can already land a preference answer on one side after acknowledging the other.",
          "You know that honest material extends further than borrowed material, especially on personal topics.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking Part 1 — the interview round on sport, exercise and spectating"],
          ["Task & question types", "Habit questions on exercise, preference questions on playing or watching, school memories, fitness routines and stadium-versus-screen comparisons"],
          ["What is assessed", "Grammatical accuracy through verb-sport collocations; Fluency through two-sided answers that reach a position"],
          ["Why this matters", "Collocation errors like 'play swimming' are among the most frequent slips in this set, and they are easy to eliminate"],
        ],
      },
      { type: "heading", text: "Component 1 — What the sports round asks" },
      {
        type: "text",
        text: "The round usually opens with participation — what you do, if anything, to move your body — then splits towards taste: which sports you watch, follow or ignore. School memories arrive often, because everyone has them and they produce past-simple stories with feeling attached. Comparison questions prefer the stadium-versus-television debate, and hypotheticals offer instant mastery of any sport or a try at something extreme. Across all of these, the examiner is listening for two-sided answers that land somewhere, and for the small collocation system below, which functions as this topic's grammar gate. Prepare your honest position on sport in general — enthusiast, spectator or conscientious objector — and every question in the set becomes answerable.",
      },
      {
        type: "table",
        title: "Common question patterns",
        headers: ["Question type", "Questions in this style", "What your answer needs"],
        rows: [
          ["Factual", "What sports are popular in your country? / Do you do any sport at the moment?", "Either a national observation with one example, or your personal routine with its frequency"],
          ["Preference", "Do you prefer playing sports or watching them?", "Both sides credited honestly, then your position with a reason that fits your life"],
          ["Frequency", "How often do you exercise? / What do you do to keep fit?", "A true routine with numbers or days, plus how it makes you feel"],
          ["Change", "Did you play much sport at school? / Do you follow a team like you used to?", "Past habits in used to or past simple, with the present position stated after"],
          ["Comparison", "Is watching a match at the stadium better than on television?", "The sensory case for each, then your verdict — experience beats ideology here"],
          ["Hypothetical", "Would you ever try an extreme sport? / If you could master any sport instantly, which would you pick?", "Would-language throughout, with a reason that reveals your real temperament"],
        ],
      },
      { type: "heading", text: "Component 2 — Play, go, do: the three-verb key" },
      {
        type: "text",
        text: "English assigns every sport to one of three verbs, and the assignment is fixed. Play takes games played with balls or against opponents: football, tennis, basketball, chess. Go takes most -ing activities, especially outdoor or individual ones: swimming, running, climbing, skiing. Do takes disciplines and training regimes: yoga, karate, weights, athletics. The system matters twice over. When listening, the examiner's verb tells you the expected shape of answer — 'Do you do any sport?' invites your routine, not your country's league table. When speaking, correct collocation is grammatical range made visible: 'I do yoga twice a week and go swimming in summer' demonstrates control no amount of vocabulary can repair if the verbs are wrong. Learn your own sports' verbs first; they are the ones you will need.",
      },
      {
        type: "steps",
        title: "The three layers, applied to sport",
        steps: [
          {
            title: "Layer 1 — Name the activity and its rhythm",
            text: "State the sport and the honest frequency at once: 'Swimming, three mornings a week before work'. Numbers and days make the answer instantly concrete.",
            examples: [
              { english: "I swim before work three mornings a week — thirty lengths, nothing heroic.", note: "Sport, frequency and a self-deprecating scale, all inside one sentence." },
            ],
          },
          {
            title: "Layer 2 — Give the reason that keeps you going",
            text: "Follow with why it survives your busy weeks: energy, health, the quiet of an early pool, the friends who expect you. Reasons rooted in routine beat reasons of virtue.",
            examples: [
              { english: "…because a pool at six thirty is the only place my mind goes properly quiet.", note: "The reason is specific to this person and this hour — not a health slogan." },
            ],
          },
          {
            title: "Layer 3 — Attach a moment or a result",
            text: "Close with a personal best, a match you still talk about, or the injury that redirected you. One lived moment converts a routine into a story.",
            examples: [
              { english: "I took it up after running ruined my knees — best trade I've made.", note: "An origin story: the sport arrives with its own small history." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Words for moving bodies" },
      {
        type: "table",
        title: "Useful vocabulary",
        headers: ["Word or phrase", "What it means", "A natural way to use it"],
        rows: [
          ["to keep fit", "to stay in reasonable physical condition", "I keep fit badly but sincerely — stairs mostly."],
          ["to take up (a sport)", "to begin a new activity", "I took up badminton when the running stopped."],
          ["a match", "a single organised game or contest", "There's a match on Sunday that the whole street watches."],
          ["to support a team", "to be a loyal fan of one club", "I support the local team through every disappointing season."],
          ["a workout", "one session of exercise", "My workout is twenty minutes and mostly optimism."],
          ["a personal best", "someone's own record performance", "I shaved ten seconds off my personal best and told everyone."],
          ["to warm up", "to prepare the body gently before exercise", "I skip warming up and my calves file complaints."],
          ["a fair-weather fan", "someone who supports only when things go well", "I'm a fair-weather fan now — I watch finals and skip the heartbreak."],
        ],
      },
      {
        type: "usage",
        title: "Natural expressions for sport talk",
        items: [
          {
            situation: "Placing yourself honestly on the player-spectator spectrum",
            example: "I'm more of a watcher than a player these days.",
            note: "'More of a …' positions you softly and leaves room to praise the side you gave up.",
          },
          {
            situation: "Admitting your routine has collapsed",
            example: "I've let my fitness slip since the winter, honestly.",
            note: "'Let it slip' confesses without self-insult, and 'since the winter' invites the comeback story.",
          },
          {
            situation: "Explaining why sport relaxes you",
            example: "It's the one hour my brain can't chase emails.",
            note: "A switch-off reason is stronger than a health reason — it says what the hour actually does.",
          },
          {
            situation: "Describing patchy loyalty to a team",
            example: "I follow the league on and off — usually on, come the finals.",
            note: "'On and off' handles irregular enthusiasm without pretending to a season ticket.",
          },
          {
            situation: "Conveying the thrill of a close contest",
            example: "The last five minutes had me on the edge of my seat.",
            note: "The idiom carries excitement better than any intensifier — then say what happened next.",
          },
        ],
      },
      {
        type: "example",
        title: "Example responses — question and answer",
        items: [
          {
            english: "Q: Do you do any sport at the moment? A: I swim before work three mornings a week — thirty lengths while the pool is quiet. I took it up after running ruined my knees, and honestly it's the better habit: no weather, no injuries, and I arrive at the office already awake.",
            note: "Routine, origin story and daily benefit in three sentences — all three layers present.",
            domain: "everyday",
          },
          {
            english: "Q: Do you prefer playing or watching? A: Playing, by a distance. I can enjoy a big match on television, but an hour of badminton with friends leaves me happier than any spectator afternoon — for me the enjoyment is in the doing, not the commentary.",
            note: "The losing side is credited before the verdict; the reason is personal, not philosophical.",
            domain: "exam",
          },
          {
            english: "Q: What sports did you do at school? A: The usual rotation — football in winter, athletics in summer — plus two years of gymnastics I was spectacularly bad at. What I actually loved was table tennis, the one sport where being short wasn't a disadvantage.",
            note: "A comic admission plus a twist: the school list is honest, and the favourite is specific.",
            domain: "study",
          },
          {
            english: "Q: How do you keep fit now? A: A home workout app four times a week, and a strict stairs-everywhere rule. It's less heroic than a gym routine, but it survives my busy weeks — which turns out to be the fitness test that matters.",
            note: "Modesty plus a closing observation; the answer sounds like a life, not a brochure.",
            domain: "work",
          },
          {
            english: "Q: Did you follow a team when you were younger? A: Fanatically — my city's football club, home and away with my uncle. I've softened into a finals-and-highlights supporter now: I still care, but I no longer arrange my weekends around other people's results.",
            note: "Used to energy described in the past, then today's calmer position — change handled without present perfect clutter.",
            domain: "life",
          },
          {
            english: "Q: Is a match better at the stadium or on television? A: Television for understanding — replays, angles, commentary — but live for feeling. The sound a stadium makes when a goal goes in does something a sofa cannot, even if you spend half the match watching a screen to find the ball.",
            note: "Both sides get their genuine strengths before a verdict; the closing joke earns the fluency it rides on.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Thin answers, developed answers",
        items: [
          {
            wrong: "I play football sometimes.",
            right: "I play five-a-side football on Thursday nights with colleagues — I'm the slowest one on the pitch, but the post-match dumplings are sacred. It's less about the sport, more about keeping the friendships in training.",
            reason: "The thin version supplies sport and a vague frequency; the developed one adds the night, the company, the self-assessment and the real motive.",
          },
          {
            wrong: "At school we did many sports.",
            right: "At school we did whatever the season forced on us — hockey on frozen pitches in winter, cricket in summer, which I played standing as far from the ball as tactics allowed. My proudest sporting moment was being promoted to team captain for one match, purely because everyone else was ill.",
            reason: "School-sport questions are memory questions; the thin version reports a curriculum while the developed one tells a childhood.",
          },
          {
            wrong: "Yes, I watch sport on TV.",
            right: "Mostly athletics and whatever my flatmate has put on — I'll watch a whole athletics championship because the events are short stories, each with a finish line. Football I tolerate for the company rather than the tactics.",
            reason: "The bare yes closes the topic; the developed answer sorts watching by programme and by motive, giving the examiner two threads to pull.",
          },
          {
            wrong: "I go running to keep fit.",
            right: "I go running twice a week along the river — four kilometres out, a bakery at the turning point, four kilometres back with a pastry. Some people run for time; I appear to run for baked goods.",
            reason: "The routine was real but abstract; the route, the bakery and the self-mockery turn it into a story only this candidate could tell.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Sport, end to end",
        reading: {
          text: "Sport is the most physically revealing topic in Part 1 and the least physically assessed. The examiner cannot see your gym schedule and does not believe it on demand; what they hear is whether you can build sentences about movement, loyalty and memory. Non-athletes often produce the best answers here: describing the sport they abandoned, the team they inherited from a parent or the fitness regime that keeps failing gives them past tenses, feelings and humour in one package. The candidates who struggle are not the inactive — they are the ones who hide behind general enthusiasm, because enthusiasm without a single Thursday night, injury or final score has nowhere to develop.",
          task: "According to the passage, why can non-athletes outperform sporty candidates on this topic?",
        },
        writing: {
          task: "Write a three-layer answer to 'How do you keep fit?', including at least one number and one honest feeling.",
          guide: [
            "Routine opener: '…, … times a week' — the sport, the days, the distance",
            "Reason move: what the hour gives you that nothing else does",
            "Detail anchor: the route, the app, the companion, the injury",
            "Honest close: what you'd change, or why you wouldn't",
          ],
          model: "I keep fit through a stubborn little routine: climbing the stairs of my building every lunchtime — twelve floors, twice, which the first week nearly killed me. It clears my head better than any coffee, and the view from the top has become the most honest weather forecast I get. The lift still tempts me on Mondays; so far the stairs are winning.",
        },
        listening: {
          script: "Tutor: Your fitness answer is truthful, which I love — now let's fix the verbs. You said 'I play yoga' and 'I go swimming' — swap the first to 'I do yoga'; swimming you had right. Then you told me school sport was 'football every winter', and I wanted the memory that goes with it: the frozen pitch, the teacher's whistle, the match you lost seven-nil and laughed about for years. Give me the verb, then give me the scene.",
          task: "Which two verb corrections and which missing layer does the tutor ask for?",
        },
        speaking: {
          task: "Answer these three aloud, minimum two layers each: 'What do you do to keep fit?' — 'Do you prefer playing or watching?' — 'If you could master any sport instantly, which would you choose?'",
          frames: [
            "I… about … times a week — mainly because…",
            "I enjoy both, but … wins for me since…",
            "I'd pick…, mostly because…",
          ],
          checklist: [
            "Did every sport take its correct verb — play, go or do?",
            "Did the preference answer credit both sides before landing?",
            "Did the mastery question stay inside would-language to the end?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Collocation control", "Play, go and do each land on their rightful sports, so grammatical accuracy is demonstrated before a single opinion arrives."],
          ["Honest positioning", "The model admits slow legs, tolerated football and pastry-driven running — positions no borrowed script could occupy."],
          ["Two-sided verdicts", "Preference answers credit the losing option genuinely, then land — the shape comparison questions are built to reward."],
          ["Memory anchors", "A frozen pitch, a bakery at the turning point, twelve floors at lunchtime: each answer carries one image that outlives the sentence."],
          ["Humour dosage", "One self-deprecating line per answer, always returning to the point — personality without losing the thread."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Fix the verbs for your real activities — I play…, I go…, I do… — and rehearse one school-sport memory with its feeling attached."],
          ["While the clock runs", "After naming any sport, attach its day, its company or its origin before moving on; bare activities are where this topic goes thin."],
          ["If you are stuck", "Reach for the last match or event you actually watched, or the sport you gave up — abandoned hobbies make the fullest answers."],
          ["Final minutes", "Scan your recording for verb-sport mismatches and for one-sided preference answers; both are cheap to fix once heard."],
        ],
      },
      {
        type: "summary",
        points: [
          "The examiner scores language, not fitness: an honest account of a lapsed or minimal routine extends further than invented athleticism.",
          "Play, go and do divide the sporting world between them — learn the verbs of your own sports and the topic's biggest error source disappears.",
          "Preference questions want both sides credited before your verdict; experience, not ideology, makes the best evidence.",
          "School-sport questions are memory questions: one frozen pitch or humiliating scoreline outweighs a term's timetable.",
          "Routines become stories when you add the route, the companion, the injury or the origin — the detail layer is where sport answers live.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier lessons.",
        items: [
          {
            question: "Which is the strongest way to admit you rarely exercise?",
            options: ["'I never do sport because I am lazy.'", "'I've let my fitness slip lately, though I keep meaning to restart.'", "'Sport is not interesting for me.'"],
            correctIndex: 1,
            explanation: "The idiom admits the fact without self-insult and opens a future thread — softness plus honesty plus somewhere to go.",
            from: "Vocabulary for speaking",
          },
          {
            question: "You lose your thread halfway through an answer. What is the fluent repair?",
            options: ["Restart the whole answer from the beginning", "A short natural marker — 'sorry, where was I' — then continue from the last idea", "Stop and wait for the examiner to rescue you"],
            correctIndex: 1,
            explanation: "Brief self-repair keeps the floor and shows monitoring, which fluency examiners read as control rather than failure.",
            from: "Natural fluency",
          },
          {
            question: "The examiner asks about a sport you have never watched. What is the honest bridge?",
            options: ["Describe it as if you had watched it", "Admit you have never followed it, then connect it to the nearest sport you do know", "Say it is not popular in your country and stop"],
            correctIndex: 1,
            explanation: "Admitting the gap protects honesty, and bridging to familiar territory keeps you speaking — the exact combination unfamiliar questions reward.",
            from: "Handling unfamiliar questions",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Guided practice. Which sentence uses the correct verb-sport collocations?",
        hints: ["Yoga belongs to do; swimming belongs to go."],
        options: [
          { id: "a", text: "I play yoga twice a week and go swimming in summer." },
          { id: "b", text: "I do yoga twice a week and go swimming in summer." },
          { id: "c", text: "I go yoga twice a week and play swimming in summer." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I do yoga twice a week and go swimming in summer.",
          "Do takes disciplines such as yoga, karate and weights, while go takes the -ing activities like swimming and climbing — the two verbs cannot swap.",
          "(a) hands yoga to play, which reserves itself for ball and team games; (c) reverses both assignments at once.",
        ),
        tags: ["speaking", "part1", "sports"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the exchange and identify the candidate's misfire.",
        hints: ["The question began with 'Do you' — whose habits was it asking about?"],
        passageTitle: "The answer about the wrong country",
        passage: "The examiner asks Ivan: 'Do you do any sport yourself?' Ivan answers: 'Football is very popular in my country. Almost everyone watches it, and the national team is very famous.' The examiner smiles, waits, and asks what Ivan himself does after work.",
        question: "What is the central problem with Ivan's answer?",
        options: [
          { id: "a", text: "He described his country's habits when the question asked about his own — no personal routine ever appeared." },
          { id: "b", text: "He used the wrong tense for a question about popularity." },
          { id: "c", text: "He spoke too quietly for the examiner to hear the details." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "He described his country's habits when the question asked about his own — no personal routine ever appeared.",
          "Factual questions about 'you' want your week, not your nation; national colour is welcome as a second layer, never as the whole answer.",
          "(b) misses the point — his verbs were fine; (c) invents a delivery problem the passage never mentions.",
        ),
        tags: ["speaking", "part1", "sports", "decoding"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Which sentence uses sport vocabulary most naturally?",
        hints: [],
        options: [
          { id: "a", text: "I go to gym for keeping fit and making muscles." },
          { id: "b", text: "I shaved ten seconds off my personal best and told everyone I met." },
          { id: "c", text: "I supported my team very strongly with big support at the stadium." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I shaved ten seconds off my personal best and told everyone I met.",
          "'Shave time off a personal best' is exactly how athletes describe record runs, and the boast gives the sentence a personality.",
          "(a) stacks infinitives and drops the article; (c) repeats 'support' instead of letting a verb like 'cheered' do the work.",
        ),
        tags: ["speaking", "part1", "sports", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. State what a strong preference answer in this topic must contain.",
        question: "A question asks whether you prefer playing sports or watching them. What two moves make the answer strong?",
        acceptedAnswers: [
          "Weigh both sides briefly, then take a clear position and defend it with one reason",
          "Touch both playing and watching, then say which position you hold and why",
          "Mention both, choose one, and give your reason for that position",
          "Cover both sides and land on a personal position — that is what the comparison shape demands",
        ],
        keywords: ["both", "position"],
        hints: [],
        feedback: fb(
          "Weigh both sides briefly, then take a clear position and defend it with one reason",
          "One-sided answers read as undeveloped and unweighed verdicts read as evasive; crediting both sides before choosing is the shape this question exists to test.",
          "Answers recommending pure enthusiasm for one side, or no choice at all, have missed what the preference shape is measuring.",
        ),
        tags: ["speaking", "part1", "sports", "preference"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Answer this fitness question aloud with the layers in order.",
        hints: ["Sport plus frequency first, then the reason it survives your week, then one specific moment."],
        situation: "The examiner asks: 'What do you do to keep fit these days?'",
        targetPhrases: ["I… about … times a week", "…mainly because…", "For example, last…"],
        mustSay: ["usually", "because", "fit"],
        feedback: fb(
          "A named activity with its honest frequency, a reason the routine survives, and one specific moment or origin.",
          "The must-say ideas anchor the topic while the layer order — routine, reason, moment — builds the answering habit.",
        ),
        tags: ["speaking", "part1", "sports", "speaking-task"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Talk for twenty to thirty seconds on the imagined mastery.",
        hints: [],
        situation: "The examiner asks: 'If you could master any sport instantly, which one would you choose, and why?'",
        targetPhrases: ["I'd choose…", "…because I've always…", "I imagine…"],
        mustSay: ["would", "sport", "because"],
        feedback: fb(
          "One sport chosen and kept inside would-language, with a reason that reflects your real temperament and interests.",
          "Instant-mastery hypotheticals reveal taste and self-knowledge; the reasons behind the fantasy are where your true sporting life shows.",
        ),
        tags: ["speaking", "part1", "sports", "hypothetical"],
      }),
    ],
    assignment: {
      title: "Your honest fitness file",
      instructions:
        "Write developed answers to two of these three: 'What do you do to keep fit?' — 'Do you prefer playing sports or watching them?' — 'What sports did you do at school?' Check that every sport takes its correct verb, and include one true memory or moment in each answer.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "List the five activities you genuinely do in a month, write the correct verb beside each — play, go or do — and say the list aloud until the pairings feel automatic.",
      "Tell the story of your most vivid school-sport memory to a friend or voice memo, checking it contains a scene, a result and how you felt about it afterwards.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-t-social",
    title: "Part 1 topics: Social activities",
    description:
      "Weekend rhythms, celebrations, meeting new people, hosting friends and the face-to-face-versus-screen debate — with routine answers anchored by one recent, specific evening.",
    objectives: [
      "describe weekly social routines and attach one recent specific example",
      "tell a short celebration story in clean past-simple narrative",
      "weigh online against face-to-face contact and state a personal position",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Social-life questions feel dangerously casual — everyone assumes they can answer 'What do you do at weekends?' until the reply comes out as 'I relax' and the conversation dies on the table. This set is really asking three things: your routines (weeks have shapes), your stories (celebrations have plots) and your temperament (crowds, kitchens and new faces divide us honestly). The lesson gives each of those its answering shape, plus the vocabulary of company — catching up, hosting, hitting it off. Everything is designed to be filled with your actual weekends; a borrowed social life is both detectable and unnecessary.",
        beforeYouStart: [
          "You can build a past-simple mini-story with a clear beginning and end.",
          "You know that a routine answer grows strongest when it lands on one specific instance.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking Part 1 — the interview round on weekends, celebrations, friendship and hosting"],
          ["Task & question types", "Routine questions, last-time story questions, temperament questions, platform-versus-presence comparisons and imagined-party hypotheticals"],
          ["What is assessed", "Fluency through routines anchored in real examples; Lexical Resource through the vocabulary of company and gathering"],
          ["Why this matters", "Casual topics produce the shortest answers in Part 1, so one specific evening immediately distinguishes a developed speaker"],
        ],
      },
      { type: "heading", text: "Component 1 — The territory of a social round" },
      {
        type: "text",
        text: "The round sweeps from rhythm to ritual to temperament: your ordinary weekend, your last celebration, your appetite for new people, your hosting habits, and finally whether screens have replaced tables. Every one of these questions has a public, general answer — 'I spend time with friends' — and a private, specific one. The examiner hears the public version all day. Your job is to reach the private one within two sentences: the friend's name you actually cook with, the birthday that went wrong in an interesting way, the party where you hid in the kitchen and enjoyed it. Social life is made of incidents; bring at least one to every answer.",
      },
      {
        type: "table",
        title: "Common question patterns",
        headers: ["Question type", "Questions in this style", "What your answer needs"],
        rows: [
          ["Factual", "What do you usually do at weekends? / How do you spend time with friends?", "The weekly rhythm first, then one recent concrete Saturday to prove it"],
          ["Preference", "Do you prefer going out or staying in? / Do you enjoy hosting people?", "A position, a reason drawn from real evenings, and a small admission of the other side"],
          ["Frequency", "How often do you see your friends? / How often do you meet new people?", "A true cadence — weekly, monthly — plus what usually happens when you do"],
          ["Change", "Do you go out more or less than you used to? / Do you still see school friends?", "The old pattern with used to, then today's reality and the cause of the shift"],
          ["Comparison", "Is catching up face-to-face better than online? / Big parties or small gatherings?", "Both forms given their due, then your verdict with one lived example"],
          ["Hypothetical", "How would you celebrate if you passed an important exam? / Would you rather host or be a guest?", "Would-language held throughout, with a plan that reflects your actual taste"],
        ],
      },
      { type: "heading", text: "Component 2 — Routines, stories and imagined parties" },
      {
        type: "text",
        text: "Three answer shapes cover this whole set. Routine questions — weekends, how often you see friends — want the habit stated and then proven: 'Sundays mean a long brunch and whoever's flat is freest' is a rhythm, and it takes only one more sentence to attach last week's brunch. Story questions — 'How did you last celebrate?' — change grammar: past simple carries the plot, and the strongest celebrations include something that went slightly wrong, because minor disaster is the making of a good story. Hypothetical party questions invite would-plans; keep the frame, and let the plan reveal your real preferences — the restaurant you would book, the people you would invite first. Temperament questions, finally, reward honesty over ambition: a truthful 'better in small groups' beats a borrowed love of crowds.",
      },
      {
        type: "steps",
        title: "The three layers, applied to social life",
        steps: [
          {
            title: "Layer 1 — State the rhythm or the position",
            text: "Name the weekly shape or your preference immediately: 'Sundays are the social day' or 'Staying in, without guilt'. The examiner now knows what you are going to illustrate.",
            examples: [
              { english: "Sundays are strictly social in my circle — brunch first, decisions later.", note: "A whole weekly philosophy compressed into one confident line." },
            ],
          },
          {
            title: "Layer 2 — Explain what it does for you",
            text: "Follow with the function of the ritual: recovery, laughter, the one hour nobody checks their phone. Reasons about restoration beat reasons about duty.",
            examples: [
              { english: "…because it's the one block of the week where nobody mentions work.", note: "The reason names the ritual's job — the thing it protects you from." },
            ],
          },
          {
            title: "Layer 3 — Attach the most recent instance",
            text: "Close with last Sunday: who cooked, what went wrong, the game that ended the evening. Recent and specific beats typical and vague every single time.",
            examples: [
              { english: "Last week my friend burned the rice and we ended up ordering pizza at three — tradition upheld, technically.", note: "One incident with a fault in it: exactly the material a conversation can continue from." },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The vocabulary of getting together" },
      {
        type: "table",
        title: "Useful vocabulary",
        headers: ["Word or phrase", "What it means", "A natural way to use it"],
        rows: [
          ["to catch up (with someone)", "to exchange news after time apart", "We catch up properly every couple of months."],
          ["a get-together", "an informal small gathering", "Friday is a standing get-together at my cousin's."],
          ["to host", "to have guests in your home and look after them", "I host whenever I can — my flat is small but my portions aren't."],
          ["a night in", "an evening spent at home, informally", "My perfect Friday is a night in with a film."],
          ["to hang out", "to spend relaxed time together, informally", "We hang out at the chess café on Saturdays."],
          ["a people person", "someone who genuinely enjoys company", "I'm not naturally a people person — I play one at work."],
          ["to hit it off", "to like each other immediately", "They hit it off over a disagreement about films."],
          ["to put yourself out there", "to make yourself meet new people or try new things", "I'm slowly putting myself out there, one class at a time."],
        ],
      },
      {
        type: "usage",
        title: "Natural expressions for company talk",
        items: [
          {
            situation: "Noting how long it has been since you met",
            example: "It's been ages — we're overdue a proper catch-up.",
            note: "'It's been ages' voices the friendship's continuity, and 'overdue' turns it into a plan.",
          },
          {
            situation: "Describing instant friendship between others",
            example: "They just clicked — now they finish each other's sentences.",
            note: "'Clicked' names the moment a friendship started; follow it with what the friendship looks like now.",
          },
          {
            situation: "Explaining a rotating hosting arrangement",
            example: "We take turns hosting, which keeps the effort honest.",
            note: "'Take turns' describes shared systems smoothly and invites the detail of who over-caters.",
          },
          {
            situation: "Admitting you are the group's organiser",
            example: "I'm usually the one who books the table and chases the stragglers.",
            note: "A role stated with a task attached is more vivid than any personality label.",
          },
          {
            situation: "Keeping an evening deliberately modest",
            example: "Nothing big — just a low-key night in.",
            note: "'Low-key' protects the small plan from sounding like a failure of ambition.",
          },
        ],
      },
      {
        type: "example",
        title: "Example responses — question and answer",
        items: [
          {
            english: "Q: What do you usually do at weekends? A: Saturdays are for errands and a long swim; Sundays are strictly social — a late brunch, then whoever's flat is freest hosts the evening. I protect that rhythm, because once work eats a weekend, the week after feels twice as long.",
            note: "The week's shape in two sentences, closed with the reason the ritual survives.",
            domain: "everyday",
          },
          {
            english: "Q: How did you last celebrate something? A: My promotion in March — six of us booked the back room of a small restaurant. My toast was terrible, the food was excellent, and the owner ended up joining our table, which tells you how the evening went.",
            note: "A story in past simple with three beats, closed by an observation that invites a follow-up.",
            domain: "work",
          },
          {
            english: "Q: Do you enjoy meeting new people? A: In small doses, yes — I'm curious about almost anyone's story, and I've made friends in queues. In big mixers I go quiet, so I'm better one-to-one than at events where you shout your name forty times.",
            note: "Honest temperament with two contrasting scenes; the self-knowledge is the point.",
            domain: "exam",
          },
          {
            english: "Q: Is it better to catch up in person or online? A: In person, whenever distance allows. A call carries the words, but a kitchen table carries the pauses, the cooking, the extra topics those pauses produce. My closest friend lives abroad — our calls are good, our twice-a-year visits are better.",
            note: "Both channels get their due; the friendship across distance makes the verdict concrete.",
            domain: "life",
          },
          {
            english: "Q: Do you like hosting people? A: I've grown into it. My flat is small but I cook better than the restaurants I can afford, so hosting dinner is my competitive advantage — the only stress is seating, since I own four chairs and my ambition regularly exceeds them.",
            note: "A preference with a reason and a joke about capacity; personality carried by a number.",
            domain: "exam",
          },
          {
            english: "Q: How do you usually meet new people? A: Through existing friends, mostly — someone brings a plus-one to dinner and we hit it off or we don't. I once joined a hiking group to be braver about it, and the walking did half the talking for me.",
            note: "The honest default plus one attempt at expansion: a temperament answer with evidence.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Thin answers, developed answers",
        items: [
          {
            wrong: "I stay at home and relax.",
            right: "I stay in on purpose — Friday is a film and something slow-cooked, because after a week of talking my job requires, silence feels like a treat. Saturday night I go out; Friday belongs to the sofa.",
            reason: "The thin version answers with a location; the developed one gives the evening its content, its reason and its place in the week's rhythm.",
          },
          {
            wrong: "Yes, I like meeting new people.",
            right: "Genuinely, though in small settings — I warm up slowly, and one good conversation beats an evening of name-tag shouting. Give me a dinner of six over a party of sixty every time.",
            reason: "The bare agreement could belong to anyone; the developed answer takes a position on how, not just whether, which is where honesty lives.",
          },
          {
            wrong: "I celebrated my birthday with my friends.",
            right: "For my birthday my friends kidnapped the evening — I was told only what to wear. We ended up at a rooftop bar someone's cousin worked at, drinking things the menu denied existed. Best organisation I've never done.",
            reason: "A celebration question wants the plot; the thin version reports attendance where the developed one tells what actually happened.",
          },
          {
            wrong: "Online is easier.",
            right: "Online is easier and I'm grateful for it — two of my closest friendships would starve without video calls. But easier isn't better: the conversations I remember all happened across a table, so I treat the screen as the bridge, not the destination.",
            reason: "The single adjective answers a comparison with a verdict only; the developed answer weighs convenience against memory and lands somewhere thoughtful.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Social life, end to end",
        reading: {
          text: "There is no correct social life, and the examiner is not awarding points for popularity. A candidate whose perfect weekend is one book and no visitors can score as highly as a festival-goer, provided the answer is built from the same materials: a named rhythm, a reason it restores them, and one recent evening described in enough detail to be pictured. What sinks answers on this topic is not modesty but abstraction — 'spending time with friends' is a category, not a Saturday. The examiner wants the category emptied out: which friends, what table, whose cooking, and what slightly unexpected thing happened at eleven.",
          task: "According to the passage, what two materials distinguish a strong social answer from a weak one?",
        },
        writing: {
          task: "Write a three-layer answer to 'Do you prefer going out or staying in at weekends?', ending on one specific recent evening.",
          guide: [
            "Position opener: 'Staying in, without apology' / 'Out, always out' / 'It depends on the week's damage'",
            "Reason move: what the choice restores or gives you",
            "Concession beat: one honest sentence for the other side",
            "Instance close: last Friday or last Saturday, in detail",
          ],
          model: "Staying in, without apology — by Friday my talking capacity is spent, and a slow-cooked dinner with the phone face-down restores more than any bar. I'll still take a good table outside when someone insists, and last month a friend's birthday proved the exception worth making. But my default is the sofa, the stove and one episode too many.",
        },
        listening: {
          script: "Tutor: Your weekend answer was almost there. 'I relax and spend time with friends' — that's the shape of a weekend, but I can't see it yet. Pick the last Sunday that actually happened and walk me through it: the brunch, whose flat, the game that ended the night. And one small note — when you said 'we go out or we staying in', choose one form: 'we stay in'. Now tell me about that Sunday as if I missed it.",
          task: "What does the tutor ask the candidate to add, and which grammar slip does she correct?",
        },
        speaking: {
          task: "Answer these three aloud, minimum two layers each: 'What do you usually do at weekends?' — 'Do you enjoy hosting friends?' — 'How would you celebrate if you got the result you need?'",
          frames: [
            "Sundays are usually… — for instance, last week…",
            "I host…, mainly because…",
            "If that happened, I'd probably…, and then…",
          ],
          checklist: [
            "Did my routine answer end on one specific, recent evening?",
            "Did my celebration story run in past simple from start to finish?",
            "Did the imagined celebration stay inside would-language throughout?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Specific anchoring", "Every routine is proven by one dated evening — a burned rice Sunday, a rooftop birthday — so the answer leaves a picture behind."],
          ["Honest temperament", "Introvert and host alike are stated without apology; self-knowledge gives the answers a spine that borrowed sociability never has."],
          ["Narrative control", "Celebration answers run in clean past simple with a beginning, a middle and a self-deprecating end — story grammar the examiner can hear."],
          ["Weighed comparisons", "Online and in-person each receive their real due before the verdict, which is exactly the two-sided shape the question rewards."],
          ["Function-first reasons", "Rituals are justified by what they restore — silence, laughter, no phones — rather than by what is considered normal."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Hold one recent real evening in mind — who, where, what went wrong — as the anchor your routine answers can land on."],
          ["While the clock runs", "After any general statement about friends or weekends, immediately attach the specific instance before you stop speaking."],
          ["If you are stuck", "Reach for last weekend, literally — the truest recent Saturday always has more detail available than any invented one."],
          ["Final minutes", "Replay and check two things: stories in past simple throughout, and every comparison answer ending in a stated position."],
        ],
      },
      {
        type: "summary",
        points: [
          "Routine answers are proven by instances: state the weekly rhythm, then attach the most recent Saturday that actually happened.",
          "Celebration questions are story questions — past simple, three beats, and something that went slightly wrong makes them worth telling.",
          "Temperament questions reward honesty: 'better in small groups' with two scenes beats a borrowed love of crowds.",
          "Online-versus-in-person comparisons want both channels credited before your verdict, ideally with one friendship as evidence.",
          "Hosting answers come alive with logistics — chairs, portions, whose turn it is — because details of effort say more than declarations of enjoyment.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from the foundations.",
        items: [
          {
            question: "A weekend answer names the routine. What should the next sentence do?",
            options: ["Move on to a different topic before it gets boring", "Give the reason the routine matters or prove it with a recent example", "Ask the examiner what they do at weekends"],
            correctIndex: 1,
            explanation: "The second layer either justifies the routine or grounds it in last weekend's evidence — both turn a label into speech.",
            from: "Extending answers naturally",
          },
          {
            question: "'How did you last celebrate a special occasion?' requires which grammar?",
            options: ["Would plus infinitive for the imagined party", "Past simple to carry the story of what happened", "Present simple for the usual routine"],
            correctIndex: 1,
            explanation: "A last-time question is a closed past event, so the whole narrative runs in past simple — would belongs to the parties that haven't happened.",
            from: "Grammar accuracy in speech",
          },
          {
            question: "Why is a rehearsed social-life answer especially easy to spot?",
            options: ["It usually contains rare vocabulary", "Follow-up questions bend away from the script, and the delivery suddenly changes", "Examiners ask everyone identical weekend questions"],
            correctIndex: 1,
            explanation: "A script only covers its own question; the moment the examiner probes for next Saturday or last month, memorised material collapses and live speech has to take over.",
            from: "Avoiding memorised responses",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. The examiner asks: 'What do you usually do at weekends?' What does the strongest answer do?",
        hints: ["A routine plus proof — think about what last Sunday looked like."],
        options: [
          { id: "a", text: "List every possible weekend activity so nothing is missed." },
          { id: "b", text: "State the weekly rhythm, then prove it with one recent, specific weekend." },
          { id: "c", text: "Explain that weekends are for resting and people should rest more." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "State the weekly rhythm, then prove it with one recent, specific weekend.",
          "The habit gives the shape and the recent Saturday gives the picture — together they turn a category into a conversation.",
          "(a) produces a list with no personal shape; (c) drifts into a general opinion about society that the question never requested.",
        ),
        tags: ["speaking", "part1", "social"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the candidate's answer and find what is missing.",
        hints: ["A celebration is an event — look for when, where, who and what happened."],
        passageTitle: "The birthday without a plot",
        passage: "Asked how she last celebrated a special occasion, Lena answers: 'I celebrated my birthday with my friends. We had dinner together at a restaurant. It was very nice.' The examiner nods and asks what they ate; Lena hesitates, because she had not thought that far.",
        question: "What is the main weakness in Lena's answer?",
        options: [
          { id: "a", text: "She used the wrong tense for a past event." },
          { id: "b", text: "She reported attendance instead of telling the story — no people, place, incident or feeling ever appeared." },
          { id: "c", text: "She spoke for too long and repeated herself." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "She reported attendance instead of telling the story — no people, place, incident or feeling ever appeared.",
          "Celebration questions invite a three-beat narrative: the plan, the evening, and the moment worth retelling. 'It was very nice' evaluates an event the examiner never got to see.",
          "(a) is incorrect — her verbs were accurate; (c) describes the opposite of what happened, since the answer ended almost immediately.",
        ),
        tags: ["speaking", "part1", "social", "narrative"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Which sentence uses the vocabulary of company most naturally?",
        hints: [],
        options: [
          { id: "a", text: "We met ten years ago and hit it off immediately — same sense of humour." },
          { id: "b", text: "I hitted off with my new colleague on the first day very strongly." },
          { id: "c", text: "We caught up the friendship last weekend after long time no see." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "We met ten years ago and hit it off immediately — same sense of humour.",
          "'Hit it off' takes no object and pairs naturally with a timescale and a reason — here a shared humour — which is how friendships are actually described.",
          "(b) mistakes the irregular verb and over-intensifies; (c) forces 'catch up' into a structure it does not support.",
        ),
        tags: ["speaking", "part1", "social", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. State the two moves that strengthen a comparison answer in this topic.",
        question: "A question asks whether catching up online is as good as meeting in person. What two moves make the answer strong?",
        acceptedAnswers: [
          "Touch both sides of the comparison, then state your position with a reason from your own life",
          "Mention both ways of meeting, then hold a clear position and justify it",
          "Weigh both briefly, choose, and give the reason for your final position",
          "Say something true about both, then take a position anchored in one real example",
        ],
        keywords: ["both", "position"],
        hints: [],
        feedback: fb(
          "Touch both sides of the comparison, then state your position with a reason from your own life",
          "One-sided verdicts read as undeveloped and fence-sitting reads as evasive; crediting both channels before choosing is the exact shape comparison questions reward.",
          "Answers that declare one side perfect, or refuse to choose at all, have missed what the comparison shape is testing.",
        ),
        tags: ["speaking", "part1", "social", "comparison"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Answer this friendship question aloud, layer by layer.",
        hints: ["Name the rhythm first, then what it does for you, then one recent specific evening."],
        situation: "The examiner asks: 'How do you usually spend time with your friends?'",
        targetPhrases: ["Most weekends we…", "…because it's when…", "Last…, for instance…"],
        mustSay: ["usually", "friends", "because"],
        feedback: fb(
          "A rhythm named, the reason it matters, and one recent evening described in enough detail to picture.",
          "The must-say ideas keep the answer on topic while the layer order — rhythm, reason, instance — does the real training.",
        ),
        tags: ["speaking", "part1", "social", "speaking-task"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Speak for up to thirty seconds on the imagined celebration.",
        hints: [],
        situation: "The examiner asks: 'How would you celebrate if you received the result you were hoping for?'",
        targetPhrases: ["I'd probably…", "…and then…", "I imagine we'd…"],
        mustSay: ["would", "celebrate", "if"],
        feedback: fb(
          "An imagined celebration held in would-language from start to finish, with a plan that reflects your actual taste in people and places.",
          "Hypothetical celebrations reveal your real preferences while testing tense discipline; the would-frame must survive to the last sentence.",
        ),
        tags: ["speaking", "part1", "social", "hypothetical"],
      }),
    ],
    assignment: {
      title: "Your social rhythm, in writing",
      instructions:
        "Write developed answers to two of these three: 'What do you usually do at weekends?' — 'Do you prefer going out or staying in?' — 'How did you last celebrate something special?' Anchor each answer with one real, recent evening, and run any celebration story in past simple throughout.",
      minWords: 40,
      maxWords: 150,
    },
    homework: [
      "Describe last weekend in five spoken sentences without notes — who, where, what happened — then check every verb carries the past where it should.",
      "Choose three expressions from this lesson, such as catching up or taking turns hosting, and use each one truthfully about your own friends this week.",
    ],
  },
];
