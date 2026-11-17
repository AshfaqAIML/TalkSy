/**
 * TOEFL iBT Academy — Module 3, Listening (T-M3, PROMPT 48 blueprint).
 * Chapter 2: The four task types (unit `toefl-listening-tasks`, 4 lessons).
 *
 * One lesson per official task family, each on the v3 textbook standard:
 *   1. Listen and Choose a Response — pragmatic prediction, register fit
 *   2. Listen to a Conversation — campus and service dialogues: purpose,
 *      negotiation, corrections, outcomes
 *   3. Listen to an Announcement — public instructions: key facts, changes,
 *      targeted actions
 *   4. Listen to an Academic Talk — signposts, examples, attitude,
 *      concluding claims
 *
 * All recordings described are practice material written for this course in
 * the style of the test; nothing here reproduces official ETS content.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T3_CH2: LessonSpec[] = [
  {
    slug: "toefl-listening-choose-response",
    title: "Listen and Choose a Response",
    description:
      "The response task in depth: hearing a single line and choosing the best reply. The craft is pragmatic — naming the move the speaker makes (request, offer, apology, check-in) and selecting the option that performs the matching move in the right register, not the option that echoes the most words.",
    objectives: [
      "predict the conversational function of a heard line before comparing reply options",
      "select replies by pragmatic fit and register rather than word overlap",
      "reject word-echo options designed to trap literal matchers",
      "produce and self-check fitting replies across everyday, campus and workplace exchanges",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "The shortest recordings in the section belong to the response task: you hear one line — sometimes a two-turn exchange — and choose the best reply from the options on screen. The task looks like a listening test and behaves like a conversation test, because the winning skill is not remembering the words but recognising the move being made. This lesson trains that recognition: naming functions quickly, judging register, and treating any option that recycles the recording's vocabulary as a suspect rather than a friend.",
        beforeYouStart: [
          "You can state the section's operating rules from the overview lesson.",
          "You can follow short everyday exchanges in English at normal speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — the response task, whose recordings are the briefest in the section"],
          ["Task & question types", "Listen and Choose a Response: hear a line, pick the best reply from the options shown"],
          ["What is assessed", "Pragmatic comprehension — identifying the job an utterance does and judging which candidate reply does the matching job in a fitting register"],
          ["Why this matters", "Options are written by people who understand how listeners behave: the vocabulary-echo trap exists precisely to catch candidates who match words instead of functions"],
        ],
      },
      { type: "heading", text: "What the task actually measures" },
      {
        type: "text",
        text: "Every utterance is a move in an exchange: offering, requesting, apologising, declining, complaining, checking, inviting, hedging. The best reply is the move that answers the move — a request wants fulfilment or refusal, an apology wants reassurance or a remedy, an invitation wants a decision. On top of function sits register: the same request sounds different addressed to a roommate, a librarian and a professor, and the fitting reply shifts with it. Candidates who ask 'what is this person doing?' before 'what exact words did they use?' answer these items faster and more accurately than candidates who reverse the order.",
      },
      {
        type: "definition",
        term: "pragmatic fit",
        partOfSpeech: "noun phrase",
        definition: "The degree to which a candidate response performs the conversational move that naturally follows the heard utterance — answering a request with a fulfilment, an apology with reassurance, an invitation with a decision — in a register suited to the relationship between the speakers.",
        example: {
          english: "'Could you email me the slides?' — 'Sure, I'll send them this evening.' The reply fulfils the request instead of merely discussing its topic.",
          translation: "",
        },
      },
      { type: "heading", text: "The prediction routine" },
      {
        type: "steps",
        title: "Four moves from hearing to confirming",
        intro: "Run these in order and the options almost sort themselves.",
        steps: [
          {
            title: "Move 1: Mine the screen before the audio",
            text: "If options are visible as the audio loads, skim them for formality clues — contractions and first names signal peers; full titles and indirect phrasing signal staff or faculty. Register narrows the plausible replies before a single word is spoken.",
          },
          {
            title: "Move 2: Name the function as the line ends",
            text: "Silently label what you heard: complaint, request, offer, check-in, apology, invitation. The label takes one second and eliminates every option built on a different move, which is usually two of the four.",
          },
          {
            title: "Move 3: Test register, then content",
            text: "Among the surviving options, ask who is speaking to whom. A reply that is functionally right but formally wrong — banter offered to a professor, stiff formality offered to a friend — is the middle-difficulty trap, and it falls to a register check.",
          },
          {
            title: "Move 4: Reject the echo",
            text: "Scan the finalists for vocabulary lifted from the recording. Shared words feel like confirmation and are usually design: the echo option restates the heard line without advancing the conversation, and advancing the conversation is the whole job of a reply.",
          },
        ],
      },
      {
        type: "comparison",
        title: "Literal matching against pragmatic listening",
        columns: ["The literal matcher", "The pragmatic listener"],
        rows: [
          { aspect: "What it hunts for", left: "Options sharing words with the recording", right: "The conversational job the utterance performs" },
          { aspect: "Reaction to the echo option", left: "Attracted, because overlap feels like confirmation", right: "Suspicious, because recycled words usually mask a wrong move" },
          { aspect: "Register sensitivity", left: "Barely registers who is talking to whom", right: "Checks the relationship before choosing a tone" },
          { aspect: "Speed under pressure", left: "Rereads options hunting for overlap, losing seconds", right: "Names the function once and deletes mismatched options at a stroke" },
        ],
        verdict: "The task rewards listeners who answer 'what is this person doing?' before 'what did this person say?'",
      },
      {
        type: "dialogue",
        title: "Predicting replies before options exist",
        context: "A tutor coaches a student through predicting best replies for lines the student has not yet heard options for.",
        lines: [
          { speaker: "Tutor", text: "A classmate tells you: 'I've completely lost my voice, so I can't present our slides tomorrow.' Name the move." },
          { speaker: "Student", text: "Reporting a problem that threatens a shared plan — the presentation." },
          { speaker: "Tutor", text: "So the best reply offers one of exactly two things. Which?" },
          { speaker: "Student", text: "A solution — presenting in her place — or a reorganisation — swapping our slot to later in the week." },
          { speaker: "Tutor", text: "Notice you predicted that without any options in front of you. What would the trap look like?" },
          { speaker: "Student", text: "Something like 'your voice does sound quite rough' — it echoes the words and does nothing about the presentation." },
        ],
      },
      {
        type: "example",
        title: "Heard lines and fitting replies",
        items: [
          { english: "Heard: 'The printing credit I bought still hasn't appeared in my account.' Fitting reply: 'Let me check the top-up system — can I take your student number?'", note: "A mild service complaint invites investigation, not denial; the reply accepts the job and collects what it needs to do it.", domain: "campus" },
          { english: "Heard: 'Would you mind if I opened the window? This room is like an oven.' Fitting reply: 'Go ahead — I was about to ask you myself.'", note: "Permission-seeking with a reason wants a decision; warm permission beats a debate about the temperature.", domain: "everyday" },
          { english: "Heard: 'Professor Hartley said the deadline moved, but I missed which direction.' Fitting reply: 'She pushed it back to Friday — the announcement is on the portal if you want her exact wording.'", note: "An information request wants the information, ideally with a pointer to its source for verification.", domain: "campus" },
          { english: "Heard: 'I know it's short notice, but could you cover my shift on Saturday?' Fitting reply: 'I can't this weekend, sorry — but ask Tomas; he owes me one and mentioned he's free.'", note: "A request may be best answered by refusal plus a lead; helping the asker succeed still performs the exchange well.", domain: "work" },
          { english: "Heard: 'That was really careless of me — your notebook's soaked through.' Fitting reply: 'Don't worry about it — everything in there is backed up online anyway.'", note: "Apology plus visible damage wants reassurance grounded in fact, so the exchange can close without escalation.", domain: "everyday" },
          { english: "Heard: 'We're thinking of the early flight, but I daren't book until I've checked the train times home.' Fitting reply: 'I'll hold the seats until Thursday while you check — no charge if you release them.'", note: "A hedged intention invites a holding action; the reply creates decision space instead of forcing a choice.", domain: "travel" },
        ],
      },
      {
        type: "mistakes",
        title: "Response-choice errors corrected",
        items: [
          { wrong: "The option that repeats most words from the recording is the safest pick.", right: "Choose the option whose conversational move answers the heard line, and treat heavy word overlap as a warning sign.", reason: "Item writers build the echo option precisely because overlap feels like understanding; it restates the topic while refusing, ignoring or derailing the actual request." },
          { wrong: "The most polite option is always the best option.", right: "Appropriateness is situational: a friend's small apology wants warmth, a stalled service request wants action, a professor's offer wants respectful directness.", reason: "Politeness without the right function is a wrong answer dressed nicely, and the register check exists to catch exactly this mismatch." },
          { wrong: "I should wait until I hear the options before thinking about the exchange.", right: "Predict the function while the line plays, so the options arrive as a test of a hypothesis you already hold.", reason: "Under one-play delivery the audio is gone by the time you read deeply, and prediction converts the option set from four unknowns into one confirmation." },
        ],
      },
      {
        type: "four-skills",
        title: "One heard line, four skills around it",
        reading: {
          text: "An item writer's card for the heard line 'Sorry to bother you — is the study room free at six?' Option A: 'It's booked until six, but it's yours from six fifteen if you sign the sheet.' Option B: 'The study room is on the second floor, near the lifts.' Option C: 'You're never a bother, honestly, don't mention it.' Option D: 'Six o'clock is a popular time for studying, yes.'",
          task: "Match each option to its design: the fitting reply, the echo trap, the register misfire, and the topic drift.",
        },
        writing: {
          task: "For each heard line below, write the best reply in ten to twenty words and name the function both lines perform together: (1) 'I've been trying to reach the finance office all morning.' (2) 'You look like you survived the statistics exam — how was it?' (3) 'I'm afraid we've run out of the large lab coats.'",
          guide: [
            "Line one reports a service frustration, so the reply should acknowledge and offer a route…",
            "Line two is a friendly check-in, so the reply answers the real question behind the question…",
            "Line three announces a stock failure, so the reply offers the nearest workable substitute…",
          ],
          model: "(1) 'That line is hopeless before noon — the online ticket form gets answered within the hour, usually.' The pair performs problem-and-reroute: one line reports the blockage, the reply supplies the working channel. (2) 'Survived is generous — the final section nearly finished me, but the simulation question was kind to me.' A check-in invites an honest status report, not a bare yes. (3) 'There's one medium left on the rail, and the coat room keeps a spare box by the lift.' A stock-out apology wants the closest substitute with a concrete location, so the exchange ends with the need met.",
        },
        listening: {
          script: "Nadia: Dan — you had the apartment inspection this morning, didn't you? How did it go? Dan: Surprisingly well. They only flagged the hallway smoke alarm, and the landlord says he'll fit a new one this week. Nadia: Good. So nothing came of the balcony thing in the end?",
          task: "What two conversational jobs does Nadia's final line perform at once?",
        },
        speaking: {
          task: "Say a fitting reply aloud for each heard line, then name its function in one word: 'Could you forward me the agenda?' — 'I'm so sorry I'm late.' — 'The coach has been delayed by an hour, apparently.'",
          frames: [
            "That line is a request, so my reply should…",
            "The apology invites…",
            "For the delay, the fitting move is to…",
          ],
          checklist: [
            "Did each reply perform the matching move rather than discuss the topic?",
            "Did the register fit the speaker relationship?",
            "Could I name every function in a single word?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Function first", "Each model reply opens by doing the conversational job — rerouting a service problem, reporting status, offering a substitute — so the exchange visibly moves forward, which is what the task rewards."],
          ["Register match", "The replies borrow tone from the heard lines: service lines receive competent helpfulness, friendly lines receive warm honesty, and no reply crosses the formality gap."],
          ["Trap refusal", "Not one model reply leans on the heard vocabulary, which is precisely the behaviour that defeats the echo distractor in the real option set."],
          ["Realistic length", "Ten-to-twenty-word replies match the length of genuine next turns, keeping the drill close to the rhythm the test recordings use."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Skim any visible options for register clues — formality and names tell you the relationship, and the relationship tells you the tone the reply must carry."],
          ["While the clock runs", "Name the function the instant the line ends — offer, request, apology, check-in — then pick the option that performs the answering move."],
          ["If you are stuck", "Delete the echo option first, then the register-wrong one; choosing between the last two on function is far safer than choosing on feeling."],
          ["Final minutes", "Reread your chosen option as a spoken reply and ask whether the conversation would continue naturally after it — a dead end signals a wrong move."],
        ],
      },
      {
        type: "summary",
        points: [
          "The response task scores pragmatic comprehension: recognising the move a line makes and choosing the reply that performs the matching move.",
          "Register is part of the answer: the same function shifts its fitting reply across peer, service and faculty relationships.",
          "The vocabulary-echo option is a designed trap — shared words usually mark the option that restates without answering.",
          "Predicting the function while the audio plays converts four unknown options into one hypothesis check.",
          "A fitting reply can refuse and still help: refusals paired with leads, substitutes or holding actions perform exchanges well.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Two items from the foundation lessons and one from the previous lesson of this module.",
        items: [
          { question: "How many task families make up the Listening section?", options: ["Three", "Four", "Six"], correctIndex: 1, explanation: "Four families: the response task, the conversation, the announcement and the academic talk — this chapter gives each its own lesson.", from: "toefl-format-2026" },
          { question: "What does forward-only navigation force on every response item?", options: ["You may reconsider the item after the section ends", "You must settle the item before moving on, because it will not return", "You may flag it for the final review window"], correctIndex: 1, explanation: "A confirmed item closes permanently, so the function-naming routine has to run while the audio is fresh — there is no second look at the question or the recording.", from: "toefl-listening-overview" },
          { question: "The strategy lesson's advice for a stuck moment applies here as…", options: ["Choose the most defensible option and advance", "Leave the item blank to save time", "Wait for the section clock to pause"], correctIndex: 0, explanation: "A committed guess keeps the item alive; a blank forfeits it, and the clock never pauses for anyone.", from: "toefl-time-management" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the exchange, then answer.",
        hints: ["The clerk names two things she can do — listen for the verb phrases."],
        audioText:
          "Student: I've been trying to reach the finance office all morning, and the line just cuts off. Clerk: I can log that fault and put you on the callback list — the number you're dialling is our old one, it was retired in September.",
        question: "What does the clerk offer to do?",
        acceptedAnswers: ["log that fault and put you on the callback list", "log that fault", "put you on the callback list"],
        keywords: ["callback", "fault"],
        feedback: fb(
          "Log the fault and put the caller on the callback list",
          "The clerk's reply performs two jobs at once — acknowledging the reported failure and supplying the action that repairs it — which is exactly the two-part move a well-fitting service reply makes.",
          "Answering with the September detail grabs background information; it explains the fault without answering what the clerk will do about it.",
        ),
        tags: ["toefl", "listening", "response-task"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "In the response task, what is the best use of the second between hearing the line and comparing the options?",
        hints: ["One word answers it: what is the line doing?"],
        options: [
          { id: "a", text: "Name the conversational function the line performs, then choose the option that performs the matching move" },
          { id: "b", text: "Pick the option that shares the most vocabulary with the line you just heard" },
          { id: "c", text: "Choose the most formal option available, because formality is always safest" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Name the conversational function the line performs, then choose the option that performs the matching move",
          "Function-naming eliminates the options built on different moves at a stroke, which is faster and safer than scanning for overlap or defaulting to formality.",
          "Option (b) walks straight into the echo trap the item writers build, and option (c) fails the register check — formality must match the relationship, not a blanket rule.",
        ),
        tags: ["toefl", "listening", "strategy"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "A good reply does the matching conversational job rather than echoing the loudest words.",
        acceptedAnswers: ["A good reply does the matching conversational job rather than echoing the loudest words."],
        feedback: fb(
          "A good reply does the matching conversational job rather than echoing the loudest words.",
          "The sentence compresses the whole lesson: replies are judged by the move they make, and the loudest — most overlapping — words are bait, not evidence.",
          "If you typed 'matching conversation job' or 'the matching conversational jobs', reread the audio in your memory: the singular 'job' carries the point that each reply makes exactly one move.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the exchange with the advisor, then answer.",
        hints: [],
        audioText:
          "Student: Excuse me — is it too late to switch my lab group to Thursday? Advisor: The deadline was Friday, but the department usually allows one late change, so bring me the form before noon and I'll ask today.",
        question: "By when must the form reach the advisor?",
        acceptedAnswers: ["before noon"],
        keywords: ["noon"],
        feedback: fb(
          "Before noon",
          "The deadline is mentioned twice — Friday as the official one, noon as the conditional exception — and the question targets the condition the student must actually satisfy, delivered in the advisor's closing turn.",
          "Answering 'Friday' takes the first deadline named, which is the expired rule rather than the live instruction the exchange exists to give.",
        ),
        tags: ["toefl", "listening", "detail"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Read the item writer's draft, then answer.",
        hints: [],
        passageTitle: "Inside an item writer's notebook",
        passage:
          "An item writer drafts four replies to the heard line 'Could you email me the slides from this morning?' Option A: 'Sure — I'll send them across this evening.' Option B: 'The slides from this morning were about coastal erosion.' Option C: 'Email is a bit old-fashioned; everyone uses the shared drive now.' Option D: 'I would rather not talk about slides right now.'",
        question: "Which option is built to attract the literal matcher?",
        options: [
          { id: "a", text: "Option B, because it reuses the words 'slides' and 'this morning' while ignoring the request" },
          { id: "b", text: "Option A, because it agrees to send the slides" },
          { id: "c", text: "Option C, because it mentions a way of sharing files" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Option B, because it reuses the words 'slides' and 'this morning' while ignoring the request",
          "The echo option restates the topic with the heard vocabulary but performs no conversational move — it neither fulfils nor refuses the request — and that stillness is the signature of the literal-matcher trap.",
          "Option A is the keyed answer because it fulfils the request, and option C refuses-with-alternative, which is a possible distractor for register errors but not the echo.",
        ),
        tags: ["toefl", "listening", "traps"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "Heard: 'I know it's short notice, but could you possibly cover my shift on Saturday?' Which reply shows the best pragmatic fit when the listener cannot help but wants to stay helpful?",
        hints: ["A fitting refusal keeps the exchange moving."],
        options: [
          { id: "a", text: "I can't this weekend, I'm afraid — but ask Tomas; he swapped with me last month and said he's free." },
          { id: "b", text: "Saturday, you said? Saturday is the day after Friday." },
          { id: "c", text: "Your shift is at the café, correct? The café opens at eight." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "I can't this weekend, I'm afraid — but ask Tomas; he swapped with me last month and said he's free.",
          "A request can be answered well by refusal plus a lead: the reply declines honestly, explains briefly and hands over a concrete alternative, so the asker leaves the exchange with next steps.",
          "Option (b) echoes the day without engaging the request, and option (c) asks for confirmation the line never needed — both leave the conversation stranded.",
        ),
        tags: ["toefl", "listening", "response-task"],
      }),
    ],
    homework: [
      "Collect five overheard one-liners today (bus, café, corridor) and write the fitting reply for each before checking what the real answer was.",
      "Write one heard line each for the functions request, apology and invitation, then draft both the fitting reply and the echo trap for each pair.",
    ],
  },
  {
    slug: "toefl-listening-conversation",
    title: "Listen to a Conversation",
    description:
      "The conversation task in depth: two-party campus and service dialogues with a purpose, a negotiation and an outcome. Learn the arc these conversations follow, the correction patterns that rewrite first values, and the stance-tracking that keeps each speaker's position separate from the pair's final agreement.",
    objectives: [
      "follow a two-party conversation's arc from opening purpose to negotiated outcome",
      "capture corrections and revised values without erasing the values they replace",
      "keep each speaker's position separate from the pair's final agreement",
      "summarise a campus or service conversation in three lines that answer its likely questions",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "The conversation recordings in this section are two-party dialogues set on campus and in service situations: a registrar's desk, a library, a housing office, a technical help line. Each one runs on the same engine — a purpose stated early, a complication negotiated in the middle, and an outcome with next steps at the close. This lesson teaches that engine, because a listener who expects the arc knows where the answers live: the purpose in the first turns, the corrections in the middle, the outcome in the last.",
        beforeYouStart: [
          "You can follow a two-minute spoken exchange and note its main points.",
          "You have completed the overview lesson and know that each recording plays once.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — the conversation task, two-party dialogues in campus and service settings"],
          ["Task & question types", "Listen to a Conversation: purpose items, detail items, correction items, outcome items and attitude inference items"],
          ["What is assessed", "Whether you can track who wants what, follow negotiated changes to the plan, and hold the final agreement apart from each speaker's opening position"],
          ["Why this matters", "The recordings are written so that the first value named is often bait and the last exchange carries the answer — listening without the arc means losing marks to design"],
        ],
      },
      { type: "heading", text: "The arc of a two-party conversation" },
      {
        type: "text",
        text: "These conversations open with purpose: within the first two turns, someone states what they need — resolving a charge, changing a booking, reporting a fault. The middle is negotiation: constraints surface, conditions attach, offers meet counteroffers, and values already stated get revised. The close is outcome: what was agreed, who does what next, and by when. Item writers place their questions along this arc — a purpose item points at the opening, correction and detail items at the middle, outcome and attitude items at the close — so knowing the arc is knowing where to listen hardest.",
      },
      {
        type: "definition",
        term: "correction pattern",
        partOfSpeech: "noun phrase",
        definition: "A stretch of conversation in which a speaker revises a value, time or arrangement already stated — flagged by markers such as 'actually', 'sorry, no', 'wait' or 'at least I thought so until…' — leaving the newest version as the one the questions treat as true.",
        example: {
          english: "'Your appointment is Thursday… actually, Thursday's fully booked — make it Friday at ten.' The revised day is the answer; the abandoned one is the trap.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "Tracking two speakers through one hearing",
        intro: "Four moves that keep a live conversation legible on paper.",
        steps: [
          {
            title: "Move 1: Catch the purpose in the opening turns",
            text: "The first real exchange usually names the problem or request. Write it as a two-word label — 'fine dispute', 'room change' — and the whole recording gains a spine every later detail can hang from.",
          },
          {
            title: "Move 2: Give each speaker a column",
            text: "Staff left, student right — or A and B if roles are unclear. Positions, offers and refusals go under their owners, because stance questions ask who held which view, not merely what was said.",
          },
          {
            title: "Move 3: Log corrections, never erase them",
            text: "When a value changes, write the new one beside the old and cross the old through lightly. The corrected value answers detail items, and the shape of the change — from what to what — answers inference items about what went wrong.",
          },
          {
            title: "Move 4: Bank the outcome and its commitments",
            text: "Closing turns carry who-does-what-by-when. Capture them fully, because outcome items are the most predictable in the task and the cheapest marks to secure.",
          },
        ],
      },
      {
        type: "dialogue",
        title: "A service conversation with the full arc",
        context: "Practice material in the task's style: a student queries a hold blocking her registration.",
        lines: [
          { speaker: "Clerk", text: "Registrar's desk — what can I do for you?" },
          { speaker: "Priya", text: "I'm trying to register for a statistics course and the system keeps rejecting me — it says there's a hold on my record." },
          { speaker: "Clerk", text: "Let me pull that up… Priya Nair? The hold is an unpaid library charge, thirty-two dollars." },
          { speaker: "Priya", text: "Thirty-two? I returned both books before the due date — I have the confirmation email somewhere." },
          { speaker: "Clerk", text: "The system shows one of them returned late — logged on the nineteenth, a week past the ninth." },
          { speaker: "Priya", text: "The ninth was the due date; I brought them in a full ten days early, at the returns hatch." },
          { speaker: "Clerk", text: "Hold on — I see it. Your return was scanned under a damaged-barcode slip, so it never linked to your account. That's our processing error, not your lateness." },
          { speaker: "Priya", text: "So the charge can come off today? Registration closes tomorrow night." },
          { speaker: "Clerk", text: "I'm sending the correction to the library now; holds usually clear within the hour. Try registering after lunch, and if the block is still there, come straight back to this desk and we'll escalate it." },
          { speaker: "Priya", text: "Thank you — that's a weight off my mind." },
        ],
      },
      { type: "heading", text: "Where the marks hide" },
      {
        type: "text",
        text: "Three placements do most of the work in this task. First values are bait: an opening time, price or date stands a strong chance of being corrected, negotiated or replaced later, so it is logged but never submitted as the final answer. Corrections are the answer zone: the newest version of any value is the one items treat as true, and the marker words — actually, sorry, wait, at least — are audible flags to pick the pen up. Closing turns are gold: the final agreement, its conditions and its next steps arrive together in the last exchange, delivered slowly and clearly, which is why outcome items are the most reliable marks in the whole section.",
      },
      {
        type: "example",
        title: "Arc moments that decide items",
        items: [
          { english: "A restaurant caller hears 'we could do seven thirty' and holds it as the booking — then misses 'though seven sharp would help the kitchen' and answers the time item wrongly.", note: "Refinements after an offer are corrections in disguise; the second value is the one the question wants.", domain: "everyday" },
          { english: "A bike-shop negotiation moves from 'ninety for the tune-up' to 'call it seventy if you book the service plan today', and the price item targets the conditional figure.", note: "Conditional outcomes carry conditions in the question too — the cheaper price exists only inside the plan.", domain: "work" },
          { english: "A housing call ends 'so I'll email the inventory by five and you send back the signed page tomorrow' — two commitments, two owners, two testable details.", note: "Closing commitments split by owner; a note line like 'them: inv by 5 / me: sign back tmrw' captures both.", domain: "campus" },
          { english: "A tutor first refuses an extension — 'deadlines are deadlines' — then concedes 'but send me your draft Thursday and I'll see what's possible', and the attitude item asks whether the tutor softened.", note: "Stance shifts live in concessions; the opening refusal and the closing condition are both needed for the answer.", domain: "education" },
          { english: "A help-desk caller reports 'the portal logs me out after ten seconds' and the agent asks three diagnostic questions before proposing a fix — the purpose item targets the report, not the diagnostics.", note: "Purpose lives in the opening turns; later procedure is detail, and confusing the two flips purpose items.", domain: "work" },
          { english: "A gym member is told 'your card expired on the first' but the fee was 'waived as a one-off', and the outcome item asks what the member actually owes.", note: "The newest status of any value wins; expired-then-waived means owing nothing, and only the correction log holds that.", domain: "everyday" },
        ],
      },
      {
        type: "mistakes",
        title: "Conversation errors corrected",
        items: [
          { wrong: "The first date or price I hear is the safe one to submit.", right: "Log the first value, keep listening, and submit the newest version after any correction marker.", reason: "Conversations in this task are written with revisions built in; the first number is often placed early precisely so the correction can replace it while you are still writing." },
          { wrong: "If both speakers mention a rule, it no longer matters who said it.", right: "File every rule under the speaker who voiced it, because stance and inference items ask who held which position.", reason: "Merging speakers into one voice destroys the evidence for attitude items — the staff member's constraint and the student's objection are different facts even when they mention the same policy." },
          { wrong: "The last line is just polite goodbyes, so I can start reading the next item's stem.", right: "Stay engaged through the final exchange: outcomes, conditions and next-step commitments are delivered there.", reason: "The close is the densest answer zone in the task, and drifting early trades the most predictable marks for a few seconds of preview that the forward-only rule will not let you keep." },
        ],
      },
      {
        type: "four-skills",
        title: "The registrar conversation, four ways",
        reading: {
          text: "A compressed summary of the registrar dialogue: a student's registration is blocked by a thirty-two dollar library charge; she disputes it with evidence; the clerk discovers the return was scanned under a damaged-barcode slip, so the charge is a processing error; the correction is sent immediately, holds clear within the hour, and the student is told to retry after lunch and return to the desk if the block persists.",
          task: "Label the four arc stages in the summary: purpose, complication, correction, outcome — and underline the sentence that answers an attitude question about the clerk.",
        },
        writing: {
          task: "Summarise the registrar conversation in three lines — purpose, complication plus correction, outcome with commitments — in 50–110 words, written for a classmate who missed the recording.",
          guide: [
            "Line one, the purpose: who approached whom, and what was blocking what…",
            "Line two, the middle: the disputed charge, the evidence, the barcode discovery…",
            "Line three, the close: what was sent, how fast holds clear, what the student does next…",
          ],
          model: "Priya needs a hold lifted so she can register for statistics before the window closes tomorrow night. The hold is a thirty-two dollar library charge for a late return she can disprove, and the clerk traces the fault to her return being scanned under a damaged-barcode slip — a processing error on the office's side. He sends the correction immediately, tells her holds usually clear within the hour, and asks her to retry after lunch and return to the desk if anything still blocks her.",
        },
        listening: {
          script: "Facilities: Facilities desk, good morning. Postdoc: Hi — the fume hood in lab four has been humming since yesterday, and now the alarm light's on as well. Facilities: Is anyone working in there now? Postdoc: No, we cleared the room when the light started. Facilities: Good — I'll log it as urgent and send a technician within the hour. Keep the door shut and don't reset anything until he's been.",
          task: "What three instructions does facilities give for the next hour?",
        },
        speaking: {
          task: "Retell the registrar conversation to a partner in under a minute, from memory, covering purpose, complication, correction and outcome.",
          frames: [
            "She came to the desk because…",
            "The complication was that…",
            "What actually went wrong was…",
            "By the end, the clerk had…",
          ],
          checklist: [
            "Did I name the purpose in the first sentence?",
            "Did I keep the correction distinct from the original charge?",
            "Did I finish with the outcome and its commitments?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Arc coverage", "The three lines mirror the recording's own engine — purpose, complication-plus-correction, outcome — so every question zone has a sentence waiting for it."],
          ["Evidence discipline", "The summary names the mechanism of the error, the barcode slip, rather than vague blame, which is the level of detail outcome items reward."],
          ["Ownership clarity", "Each action is attached to its owner — the clerk sends, the student retries — so a commitments item can be answered from the summary alone."],
          ["Economy", "Under a hundred and ten words, the model stays inside the span a one-play listener can actually hold, proving notes and summaries can be short and complete at once."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Set your page as two labelled columns before the audio starts, so speaker roles have somewhere to land the moment they are named."],
          ["While the clock runs", "Anchor on the arc — purpose early, corrections flagged by their markers, outcome banked at the close — and write values with their owners."],
          ["If you are stuck", "Rebuild from the last exchange you hold: outcomes and commitments are the most restorable facts, and detail items often yield to them."],
          ["Final minutes", "Check your correction log before confirming detail items: the newest value, not the first, is what the key treats as true."],
        ],
      },
      {
        type: "summary",
        points: [
          "Conversation recordings run on one engine: purpose stated early, negotiation with corrections in the middle, outcome with commitments at the close.",
          "First values are bait: log them, expect revision, and submit the newest version after correction markers like 'actually' or 'sorry, no'.",
          "Speakers need separate columns, because stance and attitude items ask who held which position, not merely what was said.",
          "Closing turns are the densest answer zone — outcomes, conditions and next steps arrive together and are the most reliable marks.",
          "A three-line summary — purpose, complication-plus-correction, outcome — is a complete answering instrument for this task.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the two lessons behind this one.",
        items: [
          { question: "Why does the overview lesson call prediction the lawful substitute for replay?", options: ["Because expected speech is processed faster when the audio cannot be repeated", "Because the test rewards guessing", "Because notes are not allowed in the section"], correctIndex: 0, explanation: "With one play and no return, the listener who expects a correction hears it coming; prediction converts surprise material into checkable material.", from: "toefl-listening-overview" },
          { question: "In the response task, the echo option exists to catch…", options: ["Listeners who match vocabulary instead of function", "Listeners who read too slowly", "Listeners with strong vocabularies"], correctIndex: 0, explanation: "The echo reuses the recording's words while performing the wrong conversational move — exactly the bait a literal matcher takes.", from: "toefl-listening-choose-response" },
          { question: "Which section of the sitting does this task belong to?", options: ["Speaking", "Listening", "Writing"], correctIndex: 1, explanation: "All four task families, conversations included, sit inside the Listening section's roughly 29-minute envelope.", from: "toefl-format-2026" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the scheduling exchange, then answer.",
        hints: ["The first day named does not survive the exchange."],
        audioText:
          "Clerk: The earliest interview slot is Tuesday morning… no, sorry, Wednesday's just opened up — Tuesday is fully booked now. Student: Wednesday works if it's before ten. Clerk: Nine fifteen then, room two.",
        question: "At what time is the interview finally booked?",
        acceptedAnswers: ["nine fifteen"],
        keywords: ["nine", "fifteen"],
        feedback: fb(
          "Nine fifteen",
          "The booking lands on the corrected day at the time the student's constraint produces — a two-step correction pattern where both the day and the hour are revised before the clerk confirms.",
          "Tuesday is the abandoned first value, and 'before ten' is the student's condition rather than the confirmed slot — both are designed bait for partial listeners.",
        ),
        tags: ["toefl", "listening", "corrections"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "A conversation opens with a student telling a help desk that the campus portal logs her out after ten seconds, and the rest of the recording is the agent walking her through settings. A purpose item asks: 'Why does the student contact the help desk?'",
        hints: ["Purpose lives in the opening turns, not the later procedure."],
        options: [
          { id: "a", text: "To report a login fault and get it fixed" },
          { id: "b", text: "To learn how to change her settings in general" },
          { id: "c", text: "To complain about the agent's previous advice" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "To report a login fault and get it fixed",
          "The purpose is the request that opens the exchange; the settings walkthrough is the service performed in response, and purpose items key to the former, not the latter.",
          "Option (b) promotes the diagnostic procedure to the purpose, and option (c) invents a complaint the opening never makes — both are later-material answers to an opening-turn question.",
        ),
        tags: ["toefl", "listening", "purpose"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "I can override the fee, but only if you bring the receipt to the front desk today.",
        acceptedAnswers: ["I can override the fee, but only if you bring the receipt to the front desk today."],
        feedback: fb(
          "I can override the fee, but only if you bring the receipt to the front desk today.",
          "The sentence is a conditional outcome — the exact structure closing turns favour — and every part is testable: the action, the condition, the document and the deadline.",
          "Missing 'only' turns the condition into a promise, and losing 'today' drops the deadline; both slips change the meaning the item writers would target.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the exchange about pets, then answer.",
        hints: [],
        audioText:
          "Landlord: I'd normally say no to animals, but a small caged pet is fine by me. Tenant: So the fish tank would be allowed? Landlord: The tank's no problem at all — it's the noise I can't have.",
        question: "What does the landlord finally permit?",
        acceptedAnswers: ["a small caged pet", "the tank", "a small caged pet is fine"],
        keywords: ["caged", "tank"],
        feedback: fb(
          "A small caged pet — including the fish tank",
          "The landlord's concession narrows step by step: a general refusal becomes a category permission, and the specific object inherits it once the tenant checks — a stance-tracking sequence in miniature.",
          "Answering 'any animals' ignores the concession, and answering 'none' stops at the opening refusal; both miss the negotiation that the item exists to test.",
        ),
        tags: ["toefl", "listening", "stance"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Read the transcript excerpt, then answer.",
        hints: [],
        passageTitle: "Closing turns, transcribed",
        passage:
          "Coach: So, to summarise — you'll skip Thursday's session, and I'll move you to the Saturday group instead. Swimmer: And the Saturday pool is the north one, not this one? Coach: North site, nine o'clock start — and bring your assessment card, because the Saturday coach won't have the register.",
        question: "What must the swimmer remember to take on Saturday?",
        options: [
          { id: "a", text: "The assessment card, because the Saturday coach will not have the register" },
          { id: "b", text: "The register, which the coach will hand over on Thursday" },
          { id: "c", text: "Nothing, because the coach keeps all records centrally" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The assessment card, because the Saturday coach will not have the register",
          "The final instruction pairs an object with its reason, and outcome items love exactly this shape: what to bring, plus the condition that makes it necessary.",
          "Option (b) swaps the object for its mentioned counterpart, and option (c) contradicts the stated reason — both are built from the sentence's own nouns.",
        ),
        tags: ["toefl", "listening", "outcome"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "Why do conversation recordings in this task often place a date or price early and revise it later?",
        hints: ["Think about what the design achieves against one-play listeners."],
        options: [
          { id: "a", text: "To test whether listeners keep tracking after the first plausible answer arrives" },
          { id: "b", text: "Because real speakers always change their minds by accident" },
          { id: "c", text: "To fill time before the important content begins" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "To test whether listeners keep tracking after the first plausible answer arrives",
          "The early value is a controlled distraction: it rewards the listener who logs it and keeps listening, and exposes the one who stops tracking the moment any number lands — the distinction the task is built to measure.",
          "Option (b) treats the pattern as accident rather than design, and option (c) misreads the placement — the early value is working material, never filler.",
        ),
        tags: ["toefl", "listening", "design"],
      }),
    ],
    assignment: {
      title: "The three-line conversation summary",
      instructions:
        "Choose any two-minute interview or customer-service clip — podcast, video or a dialogue you record with a classmate — and listen once only. In 50–110 words, write the three-line summary this lesson teaches: the opening purpose, the complication with any correction, and the outcome with its commitments. Label your three lines before you write them.",
      minWords: 50,
      maxWords: 110,
    },
    homework: [
      "Take the registrar dialogue's opening four lines from memory and write the two questions you would ask a classmate about them if you were the item writer — one purpose item, one detail item.",
      "In your next real service call or help-desk chat this week, silently run the four tracking moves and afterwards check how many corrections you caught live.",
    ],
  },
  {
    slug: "toefl-listening-announcement",
    title: "Listen to an Announcement",
    description:
      "The announcement task in depth: public instructions and spoken notices built from key facts, a change from a previous arrangement, and targeted actions for particular listeners. Learn the four-slot capture that turns one hearing of an announcement into a complete who-what-when-where record.",
    objectives: [
      "capture the core facts of a public announcement on a single hearing",
      "track what has changed from a previous arrangement and record the new version as the answer",
      "identify which listeners an instruction targets and what exactly each group must do",
      "convert spoken announcements into who-what-when-where note lines that answer the items",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Announcements are the section's public-address texts: entrance closures, schedule changes, safety instructions, event notices. Unlike conversations, nothing is negotiated — the voice states, amends and instructs, and your job is reception, not tracking of two positions. This lesson teaches the announcement's anatomy — context, facts, change, targeted instructions, closing repetition — and a four-slot note line that captures one on a single play, because the items that follow nearly always ask who must do what, by when, and where.",
        beforeYouStart: [
          "You can catch times, dates and place names in fluent speech.",
          "You have completed the conversation lesson and its note-column habit.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — the announcement task, single-voice public information and instructions"],
          ["Task & question types", "Listen to an Announcement: fact items, change items, targeted-instruction items and detail items on times, places and eligibility"],
          ["What is assessed", "Whether you can extract the operative facts of a spoken notice — what is new, who is affected, what each affected listener must do"],
          ["Why this matters", "Announcement items are won by structure, not luck: the slots are predictable, and a listener with four prepared slots outperforms a transcriber every time"],
        ],
      },
      { type: "heading", text: "What an announcement is built from" },
      {
        type: "text",
        text: "Five parts, in a reliable order. A context line names the speaker's role and the subject. Core facts follow — times, dates, places, eligibility. Then comes the change, flagged by 'instead of', 'as previously advertised', 'no longer' or 'please note', which amends the old arrangement. Targeted instructions come next: 'students who have not yet collected…', 'anyone parked in the west bay…' — each aimed at a subgroup. And many announcements close by repeating the headline fact, because public address knows that listeners miss things; the repetition is your safety net.",
      },
      {
        type: "definition",
        term: "targeted instruction",
        partOfSpeech: "noun phrase",
        definition: "An instruction inside an announcement that applies only to a named subgroup of listeners — identified by status, location, time of arrival or prior action — so answering items about it requires matching yourself or a described listener to that group before the action transfers.",
        example: {
          english: "'Anyone who reserved equipment for Sunday should collect it by Friday noon' — the deadline binds the reservers, not the whole audience.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The four-slot capture",
        intro: "One line, four slots, filled in the order the announcement serves them.",
        steps: [
          {
            title: "Slot 1: Who — the affected group",
            text: "Announcements sort listeners: everyone, students, staff, visitors, a bay's worth of drivers. First word of your line is the group, because half the items ask about scope, and 'everyone' versus 'chemistry students only' is the commonest distinction drawn.",
          },
          {
            title: "Slot 2: What — the fact or change",
            text: "Write the new version, never the old one. When the voice says 'instead of the usual three o'clock', the answer is the replacement value; the abandoned routine exists only to be corrected in your notes with a strike-through.",
          },
          {
            title: "Slot 3: When and where — the operative details",
            text: "Times, dates and locations attach to the change in dense clusters. Abbreviate hard — 'from Mon 12', 'north entrance' — because the next sentence is already playing and clusters do not repeat on demand.",
          },
          {
            title: "Slot 4: Action — what the group must do",
            text: "Bring, collect, use, avoid, register, evacuate. The action is the announcement's purpose and the item writer's favourite target, so it gets its own slot even when the rest of the line is sketchy.",
        },
        ],
      },
      {
        type: "dialogue",
        title: "An announcement and its follow-up",
        context: "Practice material in the task's style: a facilities notice, then the questions a real listener asks.",
        lines: [
          { speaker: "Announcement", text: "Attention, please. From Monday the twelfth, the west entrance will be closed for resurfacing, and all visitors should use the north entrance until further notice. Access card readers are being fitted to the north doors this week." },
          { speaker: "Student", text: "Sorry — does the closure affect the evening card readers as well?" },
          { speaker: "Staff", text: "It does, but only for the west doors. The north entrance will have readers on both sides from Monday, so evening entry works exactly as before, just from the other side of the building." },
          { speaker: "Student", text: "And is it closed on weekends too?" },
          { speaker: "Staff", text: "Every day until the work finishes — expect roughly three weeks. There'll be signage from the car park, and the shuttle is stopping at the north stop from Monday as well." },
        ],
      },
      {
        type: "comparison",
        title: "Listening to an announcement against listening to a conversation",
        columns: ["Announcement listening", "Conversation listening"],
        rows: [
          { aspect: "Structure", left: "Fixed build: context, facts, change, instructions, repetition", right: "Negotiated arc: purpose, complication, outcome" },
          { aspect: "Where answers sit", left: "In the slots — who, what, when-where, action", right: "In the corrections and the closing commitments" },
          { aspect: "Main risk", left: "Recording the old arrangement and missing the amendment", right: "Grabbing a first value that later gets revised" },
          { aspect: "Note shape", left: "One grid line per announcement, slots filled as served", right: "Two speaker columns with a correction log" },
        ],
        verdict: "Same single play, opposite engineering: announcements reward slot preparation, conversations reward arc tracking.",
      },
      {
        type: "example",
        title: "Announcements and the slots they fill",
        items: [
          { english: "'The library will remain open until midnight during exam weeks, beginning this Sunday' — the change is the extension, the scope is exam weeks, and the start date is the testable edge.", note: "Change items key to the new arrangement plus its boundary; 'beginning Sunday' is where marks are won and lost.", domain: "campus" },
          { english: "'The shuttle will bypass the science stop until Friday; use the stadium stop and allow ten extra minutes' — two facts, one action, one consequence.", note: "Complete capture needs the alternative location and the time cost, not just the closure.", domain: "everyday" },
          { english: "'Candidates whose surnames begin A to K should report to hall two' — an instruction targeted by name range, with the hall as the only detail the item needs.", note: "Targeted instructions sort listeners; matching the described group decides whether the detail transfers.", domain: "exam" },
          { english: "'From the first of the month, the lab requires safety induction stickers on all new badges' — a change with a start date and an eligibility condition bundled together.", note: "Two slots in one sentence: when it starts and whom it covers — items frequently split them across two questions.", domain: "work" },
          { english: "'Please note, Thursday's recycling collection moves to Saturday this week only' — the 'this week only' boundary is the difference between a change and a new schedule.", note: "Scope words like 'this week only' or 'until further notice' are answer-bearing, not decoration.", domain: "community" },
          { english: "'The fitness suite is closed for maintenance; classes continue in the main hall as normal' — a closure with a carve-out, and the carve-out is the item.", note: "Announcements often exempt a subgroup or activity; the exception outranks the headline in the answer key.", domain: "everyday" },
        ],
      },
      {
        type: "mistakes",
        title: "Announcement errors corrected",
        items: [
          { wrong: "I only need the dates and times — the rest is padding.", right: "Capture all four slots, because action and eligibility items outnumber pure time items in this task.", reason: "The item writers ask who must do what as often as they ask when, and a times-only note answers a minority of the items with no material to reconstruct the rest." },
          { wrong: "I noted the old arrangement, since that's what I already knew.", right: "Record the new version as the operative fact and strike the old one through.", reason: "Announcements exist to amend; the previous arrangement is context for the change, and keys always side with the amended version." },
          { wrong: "Instructions addressed to particular groups apply to everyone listening.", right: "Match the described group first — the action transfers only to listeners who fit it.", reason: "Targeted instructions are the task's quiet trap: a deadline that binds 'Thursday ticket holders only' is wrong for everyone else, and scope items are built on exactly that line." },
        ],
      },
      {
        type: "four-skills",
        title: "One notice, four skills",
        reading: {
          text: "A spoken notice, transcribed: 'This is a message for all evening-course students. From next week, Tuesday sessions move from room six to the media lab on the ground floor. The start time stays at seven, but the building's front doors lock at seven thirty, so arrive through the side entrance after that. Anyone who needs the accessible lift should ring the bell marked reception at the side door.'",
          task: "Mark the four slots in the transcript — who, what changes, when and where, targeted action — and underline the boundary word that limits the closure instruction.",
        },
        writing: {
          task: "Turn the transcribed notice into a two-line notice-board message of 40–90 words that a Tuesday student could act on at a glance, preserving every operative fact.",
          guide: [
            "Line one, the headline change: what moves where, from when, and what stays the same…",
            "Line two, the conditions: the door-locking time, the side entrance, the lift arrangement…",
          ],
          model: "Tuesday evening classes move to the ground-floor media lab from next week; the 7 pm start is unchanged. Front doors lock at 7:30 pm — after that, use the side entrance. If you need the accessible lift, ring the reception bell at the side door. Evening-course students only.",
        },
        listening: {
          script: "Announcer: A change to today's schedule. The guest lecture on renewable grids will now begin at four, not three, in the small auditorium. Seats are first come, first served — the auditorium holds ninety. Anyone without a seat will be directed to the overflow room with a live screen.",
          task: "What are latecomers without seats offered, and where do they go?",
        },
        speaking: {
          task: "Deliver a thirty-second announcement of your own for a real change in your week — a class moving, a shop closing, a bus rerouted — hitting all five parts: context, facts, change, targeted instruction, closing repetition.",
          frames: [
            "This is a notice for…",
            "From [date], [what changes]…",
            "If you [fit the group], please…",
            "To repeat: [headline fact]…",
          ],
          checklist: [
            "Did I name the affected group in the first sentence?",
            "Did the change carry its old and new versions?",
            "Did the closing line repeat the headline fact?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Completeness", "Every operative fact survives the compression — the move, the unchanged start, the lock time, the side door, the lift bell, the scope — so any item can be answered from the notice alone."],
          ["Structure mirror", "The two lines follow the announcement's own build, change first and conditions second, which is the order a listener would have captured them live."],
          ["Action clarity", "Each instruction is stated as an imperative a reader can execute — use the side entrance, ring the bell — matching how targeted-instruction items are keyed."],
          ["Scope honesty", "The closing 'evening-course students only' preserves the announcement's own targeting, the exact boundary that scope items test."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Pre-draw the four slots — who, what, when-where, action — so the announcement pours into a waiting shape instead of a blank page."],
          ["While the clock runs", "Fill slots as served, strike old values the moment a change marker lands, and trust the closing repetition to repair any slot you missed."],
          ["If you are stuck", "Rebuild from the targeted instruction you hold: the group named there usually reveals the scope the fact items want."],
          ["Final minutes", "Audit each answer against the newest version of the facts — announcement keys side with amendments, never with the superseded arrangement."],
        ],
      },
      {
        type: "summary",
        points: [
          "Announcements are built from context, core facts, a change, targeted instructions and a closing repetition of the headline.",
          "The four-slot line — who, what, when-where, action — turns a single play into a complete record the items can be answered from.",
          "Change markers like 'instead of' and 'until further notice' signal that the old arrangement is dead and the new one is the key.",
          "Targeted instructions bind only their named group, so scope questions are decided by matching listeners to the target before transferring any detail.",
          "The closing repetition is a designed safety net: a missed slot gets one more chance at the end of the announcement.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items reaching back through this chapter and into Module 1.",
        items: [
          { question: "How does announcement listening differ in structure from conversation listening?", options: ["Announcements follow a fixed build; conversations run a negotiated arc", "Announcements are always shorter than conversations", "They are structurally identical"], correctIndex: 0, explanation: "A notice serves its slots in a fixed order with a repetition at the close, while a dialogue negotiates purpose into outcome with live corrections.", from: "toefl-listening-conversation" },
          { question: "The overview lesson's note habit — slots over sentences — applies here as…", options: ["Pre-drawn slots that the announcement fills as it plays", "Full-sentence transcription", "Post-recording reconstruction from memory"], correctIndex: 0, explanation: "Slots are cheap to hold and fast to fill, which is what a one-play recording with no return demands.", from: "toefl-listening-overview" },
          { question: "Roughly how many items does the whole Listening section carry?", options: ["Up to 47", "Exactly 30", "Up to 60"], correctIndex: 0, explanation: "Up to 47 items inside about 29 minutes, with the announcement task contributing its share of the four families.", from: "toefl-format-2026" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the announcement, then answer.",
        hints: ["Listen for which entrance is named for everyone."],
        audioText:
          "Attention please — from Monday the twelfth, the west entrance will be closed for resurfacing, and all visitors should use the north entrance until further notice. Signage will be posted from the car park.",
        question: "Which entrance should visitors use from Monday?",
        acceptedAnswers: ["the north entrance", "north entrance"],
        keywords: ["north"],
        feedback: fb(
          "The north entrance",
          "The closure is the headline, but the operative instruction is the alternative it names — a classic change-plus-action pair where the action, not the closure, is what the item keys to.",
          "Answering 'the west entrance' takes the closed one, and 'the car park' takes a detail about signage — both are announcement nouns, only one is the answer.",
        ),
        tags: ["toefl", "listening", "announcement"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "An announcement says: 'Anyone who reserved equipment for Sunday should collect it by Friday noon.' What does this sentence demonstrate?",
        hints: ["Ask yourself who the deadline binds."],
        options: [
          { id: "a", text: "A targeted instruction, binding only listeners who made a Sunday reservation" },
          { id: "b", text: "A general rule for everyone who uses equipment" },
          { id: "c", text: "A change to the Sunday opening hours" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A targeted instruction, binding only listeners who made a Sunday reservation",
          "The group named in the condition — Sunday reservers — carries the deadline; everyone else in the audience is untouched, and scope items test exactly that boundary.",
          "Option (b) dissolves the targeting into a blanket rule, and option (c) invents an hours change from the word 'Sunday' — both ignore the conditional that does all the sorting.",
        ),
        tags: ["toefl", "listening", "targeting"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the schedule change, then answer.",
        hints: [],
        audioText:
          "Announcer: A change to this week's programme — instead of the usual three o'clock start, Thursday's revision session will begin at half past two, still in the seminar room.",
        question: "At what time does Thursday's session now begin?",
        acceptedAnswers: ["half past two"],
        keywords: ["half", "two"],
        feedback: fb(
          "Half past two",
          "The change marker 'instead of' declares the old time dead and installs the replacement — the newest version is the only version the answer key knows.",
          "Answering 'three o'clock' is the superseded value arriving one clause earlier, the standard bait this task sets for listeners who log the first number and stop.",
        ),
        tags: ["toefl", "listening", "changes"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "Candidates whose surnames begin A to K should report to hall two by nine.",
        acceptedAnswers: ["Candidates whose surnames begin A to K should report to hall two by nine."],
        feedback: fb(
          "Candidates whose surnames begin A to K should report to hall two by nine.",
          "One sentence, three testable slots — the target group, the destination and the deadline — which is why targeted instructions are transcribed whole rather than summarised.",
          "Dropping 'A to K' erases the targeting, and 'by nine' carries the deadline that a fact item will almost certainly ask for on its own.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Read the notice, then answer.",
        hints: [],
        passageTitle: "Notice for swimmers",
        passage:
          "Pool notice: During the school-holiday programme, early swimming moves to the outdoor pool from Monday to Friday next week. The indoor pool reopens for public sessions at ten each morning, and season-pass holders keep their usual lanes in the outdoor pool throughout.",
        question: "What arrangement applies to season-pass holders during the holiday programme?",
        options: [
          { id: "a", text: "They keep their usual lanes in the outdoor pool" },
          { id: "b", text: "They must wait until ten to swim anywhere" },
          { id: "c", text: "They lose access for the whole week" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "They keep their usual lanes in the outdoor pool",
          "The notice's targeted instruction carves out pass holders with a preserved right — an exception to the general move, and exceptions are the item writer's favourite target.",
          "Option (b) applies the general ten o'clock reopening to a group the notice explicitly protects, and option (c) invents a suspension that appears nowhere in the text.",
        ),
        tags: ["toefl", "listening", "exceptions"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "Why do many announcements repeat the headline fact just before ending?",
        hints: ["Think about the conditions of public address."],
        options: [
          { id: "a", text: "Because listeners may have missed it, so the repetition works as a safety net" },
          { id: "b", text: "Because the rules of public address require a summary by law" },
          { id: "c", text: "Because the announcer has forgotten what was said" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because listeners may have missed it, so the repetition works as a safety net",
          "Public address is one-play listening in daily life, and the closing repetition is the design response — treat it as a free second chance to repair any slot your line is missing.",
          "Options (b) and (c) are inventions: the repetition is functional engineering, not regulation and not error.",
        ),
        tags: ["toefl", "listening", "structure"],
      }),
    ],
    homework: [
      "Transcribe the next announcement you hear in a station, shop or campus building — then mark its five parts and check whether the close repeated the headline.",
      "Write and record a thirty-second announcement for an imaginary schedule change in your own week, deliberately including one targeted instruction and one change marker.",
    ],
  },
  {
    slug: "toefl-listening-academic-talk",
    title: "Listen to an Academic Talk",
    description:
      "The academic-talk task in depth: lecture-style passages with a framing introduction, signposted segments, examples hung on claims, marked digressions and hedged conclusions. Learn the five-move routine that tracks a talk's skeleton on one play — and the question zones each signpost invites.",
    objectives: [
      "follow a short academic talk's skeleton through its framing and signposted segments",
      "separate framing claims from the examples that support them in notes",
      "capture hedged and unhedged conclusions at the strength the speaker gives them",
      "predict which parts of a talk structure the items will target",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "The academic-talk recordings are miniature lectures: a few minutes of one voice, usually on a science, social-science or campus-academic subject, delivered with a plan the speaker announces. The plan is the gift — lecturers signpost shamelessly, telling you when a segment opens, when an example arrives and when the conclusion lands. This lesson teaches you to read those signposts at speaking speed, hang examples on the claims they serve, and record the concluding claim at its true strength rather than the strength you assume.",
        beforeYouStart: [
          "You can follow three minutes of fluent spoken English on a general topic.",
          "You have completed the announcement lesson and its slot-based note habit.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — the academic-talk task, the section's longest single-voice recordings"],
          ["Task & question types", "Listen to an Academic Talk: main-idea items, segment-purpose items, example items, attitude items and inference items on the concluding claim"],
          ["What is assessed", "Whether you can track the organisation of unrehearsed-feeling academic speech and retain claims with their supporting evidence and stance attached"],
          ["Why this matters", "Talk items outnumber per-recording items in every other family — a tracking routine earns more marks here than anywhere else in the section"],
        ],
      },
      { type: "heading", text: "The skeleton of a short talk" },
      {
        type: "text",
        text: "Academic talks open with framing: the topic, and often a spoken roadmap — 'I want to look at three things today.' Segments follow, each opened by a signpost ('First…', 'Turning to…', 'That brings us to…') and each carrying one claim with evidence: an example, a figure, a study, a comparison. Digressions appear and are marked ('by the way', 'before we get to that'), and the speaker closes with a concluding claim, sometimes hedged — 'this suggests', 'arguably', 'at least in the populations we've seen'. Your notes should mirror that skeleton: a spine of segment labels, claims beneath them, examples indented under claims, and the conclusion boxed at the bottom.",
      },
      {
        type: "table",
        title: "The signpost lexicon and what to write",
        headers: ["Signpost", "What it signals", "Note to make"],
        rows: [
          ["'Today we're looking at…' / 'I want to cover…'", "Topic and sometimes the roadmap", "Spine line with numbered segments if a count is given"],
          ["'First…' / 'Turning to…' / 'Next…'", "A new segment opening", "New column or bracket on the spine"],
          ["'For instance…' / 'Take the case of…'", "Evidence attached to the current claim", "Indented example under the claim, not a new claim"],
          ["'By the way…' / 'Before I forget…'", "A marked digression", "Small 'D' in the margin; low item value, high time cost"],
          ["'So what we've seen…' / 'The takeaway…'", "The concluding claim arriving", "Box it — main-idea items key here"],
          ["'This suggests…' / 'arguably…' / 'it seems…'", "Hedged strength, not certainty", "Mark the hedge — attitude items test it"],
        ],
        caption: "Write this lexicon at the top of your practice page until it moves into your ear.",
      },
      {
        type: "definition",
        term: "hedged claim",
        partOfSpeech: "noun phrase",
        definition: "A conclusion a speaker offers with its uncertainty visible — softened by markers such as 'suggests', 'appears', 'arguably' or 'in these cases' — committing to a direction of finding while refusing the full weight of proof.",
        example: {
          english: "'The pattern suggests urban noise reshapes birdsong permanently' claims less than 'urban noise reshapes birdsong permanently' — and the hedge is itself testable.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "Five moves for a live talk",
        intro: "The routine from framing to boxed conclusion.",
        steps: [
          {
            title: "Move 1: Bank the roadmap",
            text: "If the speaker names a plan — 'three factors', 'two explanations' — write the numbers immediately. The roadmap is a pre-built spine, and item writers ask about its parts by name more often than about any single detail.",
          },
          {
            title: "Move 2: Open a bracket per segment",
            text: "Each signpost opens a bracket; each claim gets a short label inside it. If a segment closes without a claim, write 'example only' — that absence is itself answerable.",
          },
          {
            title: "Move 3: Hang examples under claims",
            text: "Indent the study, the case, the figure under the claim it supports. Example items ask what the example illustrated, and only the hanging structure answers that reliably after the audio is gone.",
          },
          {
            title: "Move 4: Survive digressions cheaply",
            text: "Mark them and let them go. A digression is a real speech habit with low item value; transcribing one costs the next segment's opening signpost, which is worth far more.",
          },
          {
            title: "Move 5: Box the concluding claim, hedge included",
            text: "The conclusion is the talk's answer to its own framing, and main-idea items key to it. Record it with the speaker's strength — suggestion, argument, finding — because attitude items distinguish those strengths on purpose.",
          },
        ],
      },
      {
        type: "dialogue",
        title: "A talk excerpt, with the moves made visible",
        context: "Practice material in the task's style: a short lecture segment on urban birdsong, interrupted once by a student question.",
        lines: [
          { speaker: "Tutor", text: "We've seen how cities trap heat; now let's turn to something subtler — birds raising the pitch of their songs near busy roads." },
          { speaker: "Student", text: "Is that just so the traffic doesn't drown them out?" },
          { speaker: "Tutor", text: "That's the classical explanation, and it fits the dawn chorus. But a motorway study of great tits found the shift persisted on quiet Sunday mornings too — which the drowning-out account doesn't predict." },
          { speaker: "Student", text: "So the noise changed the song itself, not just its delivery?" },
          { speaker: "Tutor", text: "Precisely — and that persistence is the finding your notes should carry, because the assessment will ask what the study added, not what the textbook already said." },
        ],
      },
      {
        type: "example",
        title: "Signposts in the wild",
        items: [
          { english: "A tutor opens 'I want to cover two rival explanations for the decline' — the roadmap is two segments, and both segment-purpose items are already half answered.", note: "Spoken roadmaps convert directly into a two-column spine; write 'expl 1 / expl 2' before the first word of evidence arrives.", domain: "education" },
          { english: "A training presenter says 'Take the case of the 2019 recall' and spends ninety seconds on it — it exists to evidence the preceding claim about batch testing, not as new doctrine.", note: "Indented under its claim, the case stays evidence; promoted to the spine, it becomes a false main idea.", domain: "work" },
          { english: "A documentary voice concludes 'the evidence points toward a single migration event' — 'points toward' is direction without proof, and the attitude item will ask exactly how strong the claim was.", note: "Strength words travel with the claim into the box, or the answer overstates the speaker.", domain: "everyday" },
          { english: "A seminar speaker says 'before we get to methods, a quick word on funding' — a marked digression that lasts a minute and carries one date.", note: "A 'D' in the margin plus the date is complete capture; anything more spends the methods opening.", domain: "education" },
          { english: "A guest lecture closes 'so, two lessons: pilot first, and over-communicate' — a numbered conclusion that main-idea items quote almost verbatim.", note: "Numbered closings are the strongest structure signal in the task; capture the numbers with the nouns.", domain: "education" },
          { english: "An orientation talk promises 'three things: fees, deadlines, and where to get help' and delivers exactly that — the third item is where the inference question hides.", note: "Roadmap items sometimes reappear as inference items about the last-listed topic, because it closes the talk where attention fades.", domain: "campus" },
        ],
      },
      {
        type: "mistakes",
        title: "Talk-tracking errors corrected",
        items: [
          { wrong: "Examples are the interesting part, so my notes are mostly examples.", right: "Label the claim first, then indent its example beneath — the spine, not the decoration, answers main-idea items.", reason: "Example items ask what the example illustrated, which only the hanging structure preserves; an unanchored case study is unanswerable once the audio is gone." },
          { wrong: "A hedged conclusion is a weak one, so I round it up to a firm finding.", right: "Record the hedge as part of the claim — 'suggests', not 'proves' — at the strength delivered.", reason: "Attitude items exist to distinguish suggestion from proof, and rounding up quietly converts a correct understanding into a wrong answer." },
          { wrong: "Digressions are traps designed to test every word.", right: "Mark digressions with a 'D' and let their detail go; segments and conclusions carry the marks.", reason: "Digressions cost time and attention out of all proportion to their item value, and the next signpost is the expensive thing to miss while transcribing one." },
        ],
      },
      {
        type: "four-skills",
        title: "A five-line talk summary, four ways",
        reading: {
          text: "Talk abstract, in the style of the task: 'Why did the supermarket trolley take thirty years to catch on? This talk examines the invention of the shopping trolley in 1937, the public resistance that met it — men found it effeminate, women found it insulting to their competence — and the hired-shopper trick that broke the deadlock: stores paid models to push trolleys around until imitation did the rest. We close with what the story suggests about adopting inconvenient conveniences.'",
          task: "Predict the talk's three segments from the abstract, and mark the sentence whose hedge a conclusion item would test.",
        },
        writing: {
          task: "From the abstract above, write the five-line summary this lesson teaches — framing, two to three segment labels with one claim each, and the boxed conclusion at its hedged strength — in 50–120 words.",
          guide: [
            "Line one, the framing: the question the talk sets out to answer…",
            "Line two and three, the segments: invention, then resistance…",
            "Line four, the mechanism: the hired-shopper trick and what it achieved…",
            "Line five, the boxed conclusion with its hedge: 'the story suggests…'…",
          ],
          model: "Framing: why the supermarket trolley, invented in 1937, needed thirty years to gain acceptance. Segment one, the invention itself and the convenience it offered shoppers. Segment two, the resistance — male shoppers found it effeminate, female shoppers read it as an insult to their competence. Segment three, the deadlock-breaker: stores hired models to push trolleys until imitation spread the habit. Boxed conclusion, hedged: the story suggests that inconvenient conveniences are adopted not through argument but through visible normalcy — a suggestion drawn from one case, offered as direction rather than proof.",
        },
        listening: {
          script: "Lecturer: Let's turn to the second factor — light. Cities are never dark, and for nocturnal insects that is not a nuisance but a habitat rewrite. Moths that navigate by the moon get pulled into streetlamps; whole populations now cluster where the lamps are, which changes what eats them and what they pollinate. Interestingly, the effect seems strongest not in the brightest districts but at the dim edges, where wild and artificial light mix.",
          task: "Where, according to the lecturer, is the effect strongest — and which two verbs link the moths to the streetlamps and the mixing zones?",
        },
        speaking: {
          task: "Retell the trolley talk to a partner in under a minute using only your five-line summary — framing, segments, boxed conclusion — then check what you left out.",
          frames: [
            "The talk sets out to explain…",
            "Its segments move from… through… to…",
            "The example that carries the argument is…",
            "The hedged conclusion is that…",
          ],
          checklist: [
            "Did my retell follow the talk's own order?",
            "Did the conclusion keep its hedge?",
            "Did I give the example as evidence, not as the main idea?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Structure fidelity", "The five lines mirror the talk's own architecture — framing, segments, mechanism, conclusion — so every item zone from purpose to main idea finds a line answering it."],
          ["Evidence attachment", "The hired-shopper case sits inside the segment it proves, modelling the hanging structure that example items require."],
          ["Strength accuracy", "The boxed conclusion carries the speaker's own hedge — direction, not proof — which is the precision attitude items are written to test."],
          ["Brevity under load", "Fifty to a hundred and twenty words is the span a live listener can hold, proving the summary is a listening product rather than a memory feat."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Draw a spine page — a line for framing, brackets for segments, a box for the conclusion — before the voice starts, and write the signpost lexicon at the top if it is not yet automatic."],
          ["While the clock runs", "Bracket every signpost, indent every example, mark digressions 'D', and write strength words with claims as they arrive."],
          ["If you are stuck", "Return to the roadmap numbers — segment counts rebuild the spine faster than any detail, and detail items often yield once the structure is back."],
          ["Final minutes", "Read the boxed conclusion before confirming main-idea items: if your answer's strength differs from the speaker's hedge, one of you is wrong, and it is not the speaker."],
        ],
      },
      {
        type: "summary",
        points: [
          "Academic talks are signposted shamelessly: framing and roadmap up front, segments opened by markers, examples attached to claims, conclusions at the close.",
          "The spine-and-bracket note mirrors the talk's skeleton and answers purpose, main-idea and segment items from structure alone.",
          "Examples hang under the claims they evidence; promoted to the spine they manufacture false main ideas.",
          "Hedges — suggests, appears, arguably — are part of the claim and travel with it into the box, because attitude items test strength on purpose.",
          "Digressions are marked and released; the next signpost is worth more than any digression's content.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from earlier lessons of this module and its foundation.",
        items: [
          { question: "Which note habit did the announcement lesson teach that the talk task reuses?", options: ["Pre-drawn slots filled as the audio serves them", "Word-for-word transcription", "Answering items from memory alone"], correctIndex: 0, explanation: "The spine page is the announcement slot idea scaled up: structure drawn first, content poured in as the signposts arrive.", from: "toefl-listening-announcement" },
          { question: "The overview lesson's rule about mid-section difficulty shifts matters here because academic talks often arrive…", options: ["Later in the section, when a strong stage one has routed you to harder material", "Only in stage one", "Before every conversation"], correctIndex: 0, explanation: "Talks are dense, single-voice material, and a well-routed candidate meets them with fatigue and harder items together — expecting that combination keeps it from becoming panic.", from: "toefl-adaptive-testing" },
          { question: "According to the section rules, what happens to an item left blank for later?", options: ["It is forfeited — the section never shows an earlier item again", "It is auto-answered from your notes at the end", "It is flagged for the examiner to review"], correctIndex: 0, explanation: "Blank-and-return converts a hard item into a lost one under forward-only navigation, which is why every lesson in this module trains commitment instead of deferral.", from: "toefl-listening-overview" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the talk excerpt on urban light, then answer.",
        hints: ["Listen for where the strongest effect is said to sit."],
        audioText:
          "Lecturer: Cities are never dark, and for nocturnal insects that is a habitat rewrite. Moths that navigate by the moon get pulled into streetlamps, and whole populations now cluster where the lamps are. Interestingly, the effect seems strongest not in the brightest districts but at the dim edges, where wild and artificial light mix.",
        question: "According to the lecturer, where is the effect strongest?",
        acceptedAnswers: ["at the dim edges", "the dim edges", "dim edges"],
        keywords: ["dim", "edges"],
        feedback: fb(
          "At the dim edges, where wild and artificial light mix",
          "The segment's counterintuitive finding arrives after 'interestingly' — a strength-and-surprise marker that flags testable content — and the dim-edge location is the detail the item keys to.",
          "Answering 'the brightest districts' takes the contrast term rather than the finding, a trap built from the sentence's own scenery.",
        ),
        tags: ["toefl", "listening", "academic-talk"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "A lecturer says: 'Take the case of the 2019 recall.' In note terms, what should happen next?",
        hints: ["Where do examples belong in the spine system?"],
        options: [
          { id: "a", text: "Indent the case under the claim it supports, as evidence rather than a new claim" },
          { id: "b", text: "Open a new bracket, because a new segment has begun" },
          { id: "c", text: "Write nothing, because case studies are never tested" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Indent the case under the claim it supports, as evidence rather than a new claim",
          "'Take the case of' is an example marker: its content earns its place by illustrating the current claim, and the hanging structure is what example items require you to reconstruct.",
          "Option (b) promotes evidence to doctrine, creating a false main idea, and option (c) discards tested material — example items are among the most predictable in the task.",
        ),
        tags: ["toefl", "listening", "examples"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "Let's turn now to the second factor, the one most people overlook.",
        acceptedAnswers: ["Let's turn now to the second factor, the one most people overlook."],
        feedback: fb(
          "Let's turn now to the second factor, the one most people overlook.",
          "A pure signpost sentence: it opens a segment, numbers it, and flags its content as under-attended — the three signals your bracket should record in shorthand.",
          "Missing 'now' or 'second' loses the sequencing that segment items test, and 'overlook' carries the surprise flag that marks testable content.",
        ),
        tags: ["toefl", "listening", "signposts"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Read the talk conclusion, then answer.",
        hints: [],
        passageTitle: "Two conclusions, one talk",
        passage:
          "Version A ends the talk: 'So the evidence suggests that handwritten notes outperform typed notes for long-term retention, at least in university settings.' Version B ends a different talk on the same data: 'Handwritten notes outperform typed notes, full stop.'",
        question: "What does Version A carry that Version B lacks?",
        options: [
          { id: "a", text: "A hedge marking the claim's limits — a suggestion, bounded to university settings" },
          { id: "b", text: "A second conclusion about typed notes" },
          { id: "c", text: "A contradiction of its own finding" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A hedge marking the claim's limits — a suggestion, bounded to university settings",
          "'Suggests' softens the claim and 'at least in university settings' bounds it — two separate hedges, both of which attitude items test, and both of which Version B quietly strips away.",
          "Option (b) misreads the boundary phrase as new content, and option (c) confuses limitation with contradiction — a hedged claim is not a retracted one.",
        ),
        tags: ["toefl", "listening", "hedging"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the study excerpt, then answer.",
        hints: [],
        audioText:
          "Tutor: The motorway study found the pitch shift persisted on quiet Sunday mornings too. Female great tits near the road sang high even with almost no traffic, which the drowning-out explanation simply does not predict.",
        question: "What did the motorway study find on quiet Sunday mornings?",
        acceptedAnswers: ["the pitch shift persisted", "the pitch shift persisted on quiet Sunday mornings", "persisted"],
        keywords: ["persisted", "pitch"],
        feedback: fb(
          "The pitch shift persisted, even with almost no traffic",
          "The finding survives its own control condition — quiet mornings — which is what elevates it above the classical explanation and makes it the claim the items will target.",
          "Answering 'the dawn chorus shifted' substitutes the classical account for the new finding, exactly the confusion the study was designed to settle.",
        ),
        tags: ["toefl", "listening", "findings"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "Why does the lesson insist the concluding claim is boxed 'hedge included'?",
        hints: ["Consider what attitude items are built to measure."],
        options: [
          { id: "a", text: "Because attitude and inference items test the strength of the claim, not just its content" },
          { id: "b", text: "Because boxed notes look tidier that way" },
          { id: "c", text: "Because hedges signal the speaker is unsure of the data" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because attitude and inference items test the strength of the claim, not just its content",
          "Two candidates can hold identical content and diverge on whether it was suggested, argued or proven; recording the hedge preserves that difference, which is precisely the line the item writers draw.",
          "Option (b) is decoration talk, and option (c) misreads hedging — it marks calibrated strength, not confusion, and skilled speakers hedge on strong evidence deliberately.",
        ),
        tags: ["toefl", "listening", "attitude"],
      }),
    ],
    assignment: {
      title: "The five-line talk summary",
      instructions:
        "Choose any three-minute educational clip — lecture, documentary segment, explainer — and listen once only. In 50–120 words, write the five-line summary: the framing question, two or three segment labels with one claim each, one indented example named, and the boxed conclusion at the exact strength the speaker used. Keep the hedge words you heard.",
      minWords: 50,
      maxWords: 120,
    },
    homework: [
      "List ten signpost phrases you have heard this week in any spoken English — talks, podcasts, teachers — and sort them into segment openers, example markers, digression flags and conclusion signals.",
      "Find a hedged claim in any article or talk, rewrite it unhedged, and note in one sentence how the meaning changed strength.",
    ],
  },
];
