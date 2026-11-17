/**
 * TOEFL iBT Listening mock bank (PROMPT 48, Task 6) — original practice
 * content for the 2026 format's four task families:
 *
 *   1. Listen-and-Choose-a-Response items — each carries its own short
 *      recording in payload.audioScript; the learner picks the
 *      pragmatically appropriate reply (register + intention).
 *   2. Campus conversations — one section-level audioPart recording shared
 *      by a question group (questions carry group: "<part key>", no
 *      audioScript in their payloads).
 *   3. Announcements — single-voice audioParts, one recording per group.
 *   4. Academic talks — single-voice audioParts, one recording per group.
 *
 * Every keyed answer is derivable from the script alone; distractors follow
 * the real test's catalogue (literal echoes, register mismatches, advice
 * instead of response, mid-conversation corrections, and stated-but-wrong
 * attributions). All material is original EnglishPath practice content
 * written in the style of the exam — never official ETS examination
 * material. Section descriptions state honestly where practice differs
 * from official delivery (linear vs adaptive, fixed counts vs up to 47).
 */

import type { MockSeed, MockSectionSeed, MockQuestionSeed } from "../ielts/mocks";

// ---------------------------------------------------------------------------
// Shared item builder — enforces the engine contract on every MCQ item:
// sequential order from 1, one raw point, published provenance, a payload
// shaped exactly as mcqPayloadSchema requires (audioScript ONLY on
// standalone response items, never on grouped questions), and answer
// {option: index} for machine marking.
// ---------------------------------------------------------------------------

type McqSpec = {
  stem: string;
  /** Exactly four options on every listening MCQ. */
  options: [string, string, string, string];
  /** Index of the correct option (0–3). */
  answer: number;
  explanation: string;
  /** 1–5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty: number;
  skills: string[];
  /** audioPart key — present only on questions that share a recording. */
  group?: string;
  /** Per-question recording (Listen-and-Choose-a-Response items only). */
  audioScript?: string;
};

const mcqs = (items: McqSpec[]): MockQuestionSeed[] =>
  items.map((item, index) => ({
    order: index + 1,
    type: "MCQ_SINGLE",
    stem: item.stem,
    payload:
      item.audioScript === undefined
        ? { options: [...item.options] }
        : { audioScript: item.audioScript, options: [...item.options] },
    answer: { option: item.answer },
    points: 1,
    skills: item.skills,
    difficulty: item.difficulty,
    explanation: item.explanation,
    source: "original-practice",
    contentStatus: "published",
    ...(item.group === undefined ? {} : { group: item.group }),
  }));

// ---------------------------------------------------------------------------
// FULL MOCK 1 — Listening scripts
// ---------------------------------------------------------------------------

// Conversation (~125 words): dining-services office, meal-plan change with a
// mid-conversation policy update (the "correction/change" trap family).

const M1_CONV_SCRIPT = `STUDENT: Hi — I think I picked the wrong meal plan. Evening labs keep me from dinner, and I'm on the fourteen-meal option.
MANAGER: Happens every term. Switches are normally allowed in week one only, and that deadline passed last Friday.
STUDENT: Is there anything I can do? My stove's broken, so cooking isn't really an option.
MANAGER: Let me check — first-year, right? New policy this year: first-years get a one-time grace switch until month's end. Hardly anyone knows about it.
STUDENT: That's a relief.
MANAGER: You'd submit the change form online — we no longer take paper ones. Just don't miss Monday the thirtieth; after that the grace window closes.
STUDENT: Monday it is. The ten-meal plan still includes dining dollars, right?
MANAGER: Two hundred, usable at any campus café. They don't carry over, though.`;

// Announcement 1 (~89 words): campus mailroom package-pickup change.

const M1_ANN1_SCRIPT = `ATTENDANT: Attention, campus mailroom users. From next Monday, package pickup moves to the new self-service lockers in the west entrance of Knox Hall. You'll receive a code by email when a parcel arrives; enter the code at any locker, and the door opens — the service desk will no longer hand out packages after four p.m. on weekdays. Locker doors stay open for forty-eight hours, after which uncollected parcels return to the shelf. The desk keeps its morning hours for letters and oversize items that don't fit a locker. Thank you.`;

// Announcement 2 (~87 words): weekend parking-lot closure for repaving.

const M1_ANN2_SCRIPT = `ANNOUNCER: A facilities notice for anyone driving to the west of campus. The Ashgrove parking lot is closed this weekend — Saturday and Sunday — while the surface is repaved. Permit holders should use the stadium lot on Cartwright Road instead; it's a ten-minute walk to the science buildings, and the campus shuttle will add a stadium stop both days, running every twenty minutes from seven a.m. Cars left in Ashgrove after Friday night will be towed at the owner's expense. Normal parking resumes Monday morning. Thanks for your patience.`;

// Academic talk 1 (~233 words): the economics of recycling.

const M1_TALK1_SCRIPT = `PROFESSOR: Last time we traced where municipal waste goes. Today I want to look underneath recycling — at the economics that decide which of your bins gets recycled and which quietly rides to the landfill.
PROFESSOR: The core idea is markets. Recycling is not primarily an environmental gesture; it is a supply chain. Your empty bottle is a raw material, and raw materials need buyers. When the price of virgin plastic drops — say, because cheap oil makes new plastic easy to produce — manufacturers have little reason to pay more for the recycled version. The collected bales simply sit in the yard.
PROFESSOR: Aluminium behaves completely differently, and the reason is energy. Smelting a can from raw ore takes enormous amounts of electricity; remelting an old one uses roughly five percent as much. That gap is so large that the material carries its own value — recyclers will actually pay you for cans.
PROFESSOR: Now, here is the part policymakers find uncomfortable. Curbside programs that collect everything often make the economics worse. Mixed loads contaminate — wet glass glued to paper — and sorting costs money. Several cities have moved to collecting fewer materials, more cleanly, and their overall recycling rates went up, not down. That sounds backwards, but a ton of clean cardboard has a buyer; a ton of mixed household scrap may be, economically speaking, garbage.
PROFESSOR: So when a city cancels its recycling program, listen for the market reason underneath.`;

// Academic talk 2 (~253 words): how plants sense light.

const M1_TALK2_SCRIPT = `PROFESSOR: Plants don't have eyes, yet in a sense they see. Not the way you and I do — but they extract remarkably specific information from the light around them, and today we'll look at how.
PROFESSOR: The key players are photoreceptors — proteins that change shape when light hits them. The best-known family is the phytochromes, and they work like a switch with two positions. One form absorbs red light; the other absorbs far-red, the deep red at the very edge of our vision. Red light flips the switch one way; far-red flips it back.
PROFESSOR: Why does that matter? Because sunlight is rich in red, but shade — light that has already filtered through a taller neighbour's leaves — is relatively rich in far-red. So that ratio tells a plant, in effect, whether it stands in open light or is crowded out. A seedling that senses far-red-heavy shade redirects its resources, pouring energy into stem growth instead of roots. It stretches, racing upward for light. Gardeners call the result leggy seedlings.
PROFESSOR: Here's the elegant part: the same switch governs germination. Some lettuce seeds will only sprout when their phytochromes report that light is plentiful — which is why the packet tells you not to bury them deep.
PROFESSOR: And plants keep time, too. A related system measures the length of the night, not the day. Botanists' labels 'short-day' and 'long-day' plants trip up every exam: a short-day plant actually flowers when the uninterrupted dark period is long.
PROFESSOR: So: light in, chemistry out — photoreceptors turn a signal into a growth decision.`;

// ---------------------------------------------------------------------------
// FULL MOCK 1 — items 1–10: Listen and Choose a Response
// ---------------------------------------------------------------------------

const M1_RESPONSE_ITEMS: McqSpec[] = [
  {
    stem: "Item 1. Listen and choose the most appropriate response.",
    audioScript: "Hey, do you think I could borrow your chemistry notes from yesterday? I promise I'll give them back tomorrow.",
    options: [
      "The chemistry lecture was yesterday.",
      "You should take your own notes in class.",
      "Sure — I'll bring them to tomorrow's seminar.",
      "I promise to give them back.",
    ],
    answer: 2,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "The speaker makes a friendly, informal request (note the casual 'Hey' and the promise to return the notes). 'Sure — I'll bring them to tomorrow's seminar' matches that register and grants exactly what was asked. 'You should take your own notes in class' answers a request nobody made — unsolicited advice where a yes was needed.",
  },
  {
    stem: "Item 2. Listen and choose the most appropriate response.",
    audioScript:
      "Professor Vance, I'm so sorry — something came up at work and I can't make Thursday's office hours. Is there any chance we could meet another day?",
    options: [
      "Of course — I'm free Wednesday afternoon if that works for you.",
      "Office hours are on Thursday.",
      "You shouldn't have a job during the semester.",
      "Thursday's office hours are cancelled.",
    ],
    answer: 0,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "The student apologises formally and requests a reschedule, so the appropriate reply keeps the formal register and answers the intention, not just the words. 'Of course — I'm free Wednesday afternoon…' does exactly that. 'Office hours are on Thursday' merely restates a detail — it ignores the actual request, as if the student had asked when the hours are.",
  },
  {
    stem: "Item 3. Listen and choose the most appropriate response.",
    audioScript:
      "Hi — one medium oat-milk latte, please, and could you make it decaf? It's a bit late in the day for caffeine.",
    options: [
      "Decaf still has a little caffeine, you know.",
      "We close in an hour.",
      "It is late in the day.",
      "One medium decaf oat-milk latte — got it. Anything to eat with that?",
    ],
    answer: 3,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "A customer is placing an order and adding a modification; the appropriate response confirms the order — including the change — and moves the transaction along, which 'One medium decaf oat-milk latte — got it…' does. 'Decaf still has a little caffeine, you know' comments on the customer's choice instead of taking the order — a register mismatch for service talk.",
  },
  {
    stem: "Item 4. Listen and choose the most appropriate response.",
    audioScript:
      "I don't mean to be a pain, but could you take your call outside? I've got a quiz in twenty minutes and I really need to focus.",
    options: [
      "Your quiz is in twenty minutes.",
      "Oh — sorry, I'll take it in the hallway.",
      "Quizzes are usually easier than you expect.",
      "I always study with music on, actually.",
    ],
    answer: 1,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "The speaker makes a politely hedged request ('I don't mean to be a pain…'). The appropriate response acknowledges the imposition and complies: 'Oh — sorry, I'll take it in the hallway.' 'Quizzes are usually easier than you expect' dismisses the request entirely — the speaker asked for quiet, not reassurance.",
  },
  {
    stem: "Item 5. Listen and choose the most appropriate response.",
    audioScript:
      "Excuse me — at orientation they told us first-years can borrow ten books, but the self-checkout says I've hit my limit with four. Could you check my account?",
    options: [
      "Orientation was two weeks ago.",
      "Let me take a look — ah, two of these are interlibrary loans; they count toward a smaller, separate limit. I can renew those for you.",
      "The self-checkout machine is right there.",
      "Ten books is plenty for anyone.",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["pragmatics", "detail"],
    explanation:
      "The borrower's intention is to resolve a discrepancy in her account, so the appropriate staff reply investigates and explains the cause — the interlibrary-loan limit — which the second option does. 'The self-checkout machine is right there' sends her back to the machine that already failed her: literal, unhelpful, and a register mismatch for a service desk.",
  },
  {
    stem: "Item 6. Listen and choose the most appropriate response.",
    audioScript:
      "That's the theory side covered. Before we break — can someone sum up, in one sentence, why the experiment surprised the researchers?",
    options: [
      "The researchers were surprised.",
      "Can we break now?",
      "Basically, the drug worked better at low doses than at high ones — the opposite of what they expected.",
      "I haven't read the chapter yet.",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "A professor is inviting a contribution from the class, so the appropriate response performs the requested act — a one-sentence summary. The third option does it at the right register and even signals the surprise. 'The researchers were surprised' merely repeats words from the question without answering it.",
  },
  {
    stem: "Item 7. Listen and choose the most appropriate response.",
    audioScript:
      "Hi, this is Amira — I have a dental cleaning Friday at two, but my bus route changed and two o'clock is now impossible. Any chance I could come earlier that morning?",
    options: [
      "Buses run all day long.",
      "Your cleaning is on Friday.",
      "Friday at two is a very popular time.",
      "Let me check the morning… we could take you at nine fifteen instead — would that work?",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "Amira's intention is to move the appointment earlier on the same day; a receptionist answers by checking and offering a concrete alternative, as the last option does. 'Buses run all day long' reacts to the excuse rather than the request — the caller never asked about buses.",
  },
  {
    stem: "Item 8. Listen and choose the most appropriate response.",
    audioScript:
      "Look, I know it's your day off, but two people called in sick — any chance you could cover the evening shift? I'd owe you one.",
    options: [
      "It is my day off.",
      "All right — but you're taking my Saturday shift, deal?",
      "Two people are sick today.",
      "Sick people should stay home.",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "The manager makes an apologetic, casual request ('I'd owe you one'), so an appropriate reply stays casual and negotiates the favour — accepting with a counter-condition, as option two does. 'It is my day off' just echoes the manager's own opening and ignores the request entirely.",
  },
  {
    stem: "Item 9. Listen and choose the most appropriate response.",
    audioScript:
      "I'm so sorry to trouble you — my phone just died and I'm already late. Would you mind texting my study group that I'll be ten minutes behind?",
    options: [
      "Phones run out of battery quickly.",
      "Of course — what's the number? I'll send it now.",
      "You should leave earlier for study group.",
      "Study groups meet every week.",
    ],
    answer: 1,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "The stranger makes a heavily hedged request for a small favour; the cooperative response accepts and asks for the practical detail needed to carry it out — the number. 'You should leave earlier for study group' criticises instead of helping: it misses that the favour, not punctuality advice, is what was asked for.",
  },
  {
    stem: "Item 10. Listen and choose the most appropriate response.",
    audioScript:
      "Hey, Professor Reyes — quick one: is the stats problem set due tonight or tomorrow night? I totally spaced on the date.",
    options: [
      "The syllabus states all deadlines.",
      "Statistics is a demanding subject.",
      "You should write deadlines in a planner.",
      "Tomorrow night — nine p.m. And maybe set an alarm this time, hm?",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "The student's very casual register ('Hey… quick one… totally spaced') invites a friendly, direct answer with a light tease, which the last option supplies while still answering the question. 'The syllabus states all deadlines' keeps the information from the student — it responds to the register mismatch with another mismatch instead of answering a simple question.",
  },
];

// ---------------------------------------------------------------------------
// FULL MOCK 1 — items 11–18: dining-services conversation (part-conv-1)
// ---------------------------------------------------------------------------

const M1_CONV_ITEMS: McqSpec[] = [
  {
    stem: "Item 11. Why does the student go to the dining-services office?",
    group: "part-conv-1",
    options: [
      "To complain about the quality of campus dinners",
      "To ask whether she can change her meal plan",
      "To report that her apartment stove is broken",
      "To request a refund of unused dining dollars",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["purpose"],
    explanation:
      "She opens by saying she picked the wrong meal plan because evening labs keep her from dinner — the whole conversation works toward switching plans. The broken stove is only her reason why cooking at home is not an alternative, so option three is a mentioned detail used as the wrong purpose.",
  },
  {
    stem: "Item 12. According to the manager, when are meal-plan changes normally allowed?",
    group: "part-conv-1",
    options: [
      "During the first week of the term",
      "Any time before final exams",
      "Only at the beginning of the spring semester",
      "During the last week of each month",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The manager states that switches are normally allowed 'in week one', and that this term's deadline passed last Friday. 'During the last week of each month' confuses that regular deadline with the separate first-year grace window, which runs to month's end only under the new policy.",
  },
  {
    stem: "Item 13. Why does the student mention that her stove is broken?",
    group: "part-conv-1",
    options: [
      "To ask the manager to arrange a repair",
      "To explain why simply cooking at home will not work for her",
      "To complain about her landlord",
      "To prove that she lives off campus",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["inference", "purpose"],
    explanation:
      "She raises the stove right after asking whether anything can be done — it rules out the obvious alternative (eating at home), strengthening her need to stay on a campus plan. Nothing in the conversation asks the manager to fix it, which is what option one wrongly assumes.",
  },
  {
    stem: "Item 14. What does the manager do after learning that the student is a first-year?",
    group: "part-conv-1",
    options: [
      "He tells her to come back next term",
      "He offers to refund the unused meals",
      "He explains a new policy that gives first-years a one-time grace switch",
      "He advises her to email the registrar's office",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "Checking her year is exactly what unlocks the update: 'New policy this year: first-years get a one-time grace switch until month's end.' No refund is ever offered — the manager's remedy is the switch itself, not money back.",
  },
  {
    stem: "Item 15. What does the manager say about the change form?",
    group: "part-conv-1",
    options: [
      "It can be collected from the housing office",
      "It must be signed by an advisor first",
      "It is valid for two semesters",
      "It must be submitted online, because paper forms are no longer accepted",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "He says 'You'd submit the change form online — we no longer take paper ones', a change of procedure worth catching. 'It can be collected from the housing office' is the trap: paper forms used to exist, but the whole point of the line is that they are gone.",
  },
  {
    stem: "Item 16. What does the manager imply when he says, 'Hardly anyone knows about it'?",
    group: "part-conv-1",
    options: [
      "The student is fortunate she asked, because the grace switch is not well advertised",
      "The policy is unpopular with students",
      "The student should already have known about the policy",
      "The policy will probably be cancelled soon",
    ],
    answer: 0,
    difficulty: 4,
    skills: ["inference"],
    explanation:
      "He follows the surprise policy with reassurance — the point is that asking in person just saved her from missing a little-known option. Nothing suggests the policy is disliked or ending, and 'should already have known' contradicts his sympathetic tone — he mentions it to relieve her, not to blame her.",
  },
  {
    stem: "Item 17. By when must the student submit the form?",
    group: "part-conv-1",
    options: [
      "By this Friday",
      "Before the spring semester begins",
      "By the end of the first week of term",
      "By Monday the thirtieth",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The manager is explicit: 'Just don't miss Monday the thirtieth; after that, even the grace window closes.' 'By the end of the first week of term' is the normal deadline he described earlier in the conversation — the very deadline that already passed last Friday.",
  },
  {
    stem: "Item 18. What will the student most likely do next?",
    group: "part-conv-1",
    options: [
      "Fill out a paper form at the housing office",
      "Wait until spring to change her plan",
      "Submit the change form online before Monday the thirtieth",
      "Ask her advisor to approve the meal-plan switch",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["inference", "detail"],
    explanation:
      "She accepts with 'Monday it is', and the agreed action is the online change form before Monday the thirtieth. A paper form at the housing office is exactly what the manager said no longer works — an outcome the conversation ruled out, not the one it set up.",
  },
];

// ---------------------------------------------------------------------------
// FULL MOCK 1 — items 19–24: announcements (part-ann-1, part-ann-2)
// ---------------------------------------------------------------------------

const M1_ANN_ITEMS: McqSpec[] = [
  {
    stem: "Item 19. What is the main purpose of the announcement?",
    group: "part-ann-1",
    options: [
      "To advertise how convenient the new lockers are",
      "To explain a change in how students collect their packages",
      "To complain about students collecting parcels late",
      "To announce extended mailroom opening hours",
    ],
    answer: 1,
    difficulty: 2,
    skills: ["purpose"],
    explanation:
      "The core message is procedural: package pickup moves to self-service lockers, the service desk stops handing out packages, and uncollected parcels return to the shelf. Extended hours is the opposite of the news — the desk keeps only morning hours for letters and oversize items.",
  },
  {
    stem: "Item 20. Starting next Monday, how will students collect a package?",
    group: "part-ann-1",
    options: [
      "By queuing at the service desk after four p.m.",
      "By booking a pickup slot online",
      "By showing a student card at the west entrance",
      "By entering a code from an email at a self-service locker",
    ],
    answer: 3,
    difficulty: 2,
    skills: ["detail"],
    explanation:
      "'You'll receive a code by email when a parcel arrives; enter the code at any locker, and the door opens.' Queuing at the desk is the old system the announcement retires — the desk will no longer hand out packages at all.",
  },
  {
    stem: "Item 21. What can be inferred about a parcel that is not collected within forty-eight hours?",
    group: "part-ann-1",
    options: [
      "It is sent back to the sender",
      "It is returned to the shelf, and must be collected from there later",
      "A storage fee is charged for it",
      "It is delivered to the student's residence hall",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["inference"],
    explanation:
      "'Locker doors stay open for forty-eight hours, after which uncollected parcels return to the shelf' — so the parcel waits on the shelf for a later, ordinary collection. Fees, senders and hall deliveries are never mentioned; the shelf is the only stated destination.",
  },
  {
    stem: "Item 22. Why will the Ashgrove parking lot be closed this weekend?",
    group: "part-ann-2",
    options: [
      "Because the surface is being repaved",
      "Because a sports event needs the space",
      "Because the shuttle stop there is being rebuilt",
      "Because of storm flooding",
    ],
    answer: 0,
    difficulty: 2,
    skills: ["detail"],
    explanation:
      "The announcement gives the cause directly: the lot is closed 'Saturday and Sunday — while the surface is repaved.' The stadium lot and the added shuttle stop are the alternatives offered to drivers, not the reason for the closure.",
  },
  {
    stem: "Item 23. What are permit holders told to do?",
    group: "part-ann-2",
    options: [
      "Park along Cartwright Road itself",
      "Leave their cars in Ashgrove until Monday",
      "Use the stadium lot on Cartwright Road instead",
      "Apply for a temporary street permit",
    ],
    answer: 2,
    difficulty: 2,
    skills: ["detail"],
    explanation:
      "'Permit holders should use the stadium lot on Cartwright Road instead.' Leaving the car in Ashgrove is explicitly punished — cars left after Friday night are towed at the owner's expense — so option two is the one action the announcement rules out.",
  },
  {
    stem: "Item 24. What will happen to cars still in the Ashgrove lot after Friday night?",
    group: "part-ann-2",
    options: [
      "They will be ticketed but may stay",
      "They will be moved to the stadium lot free of charge",
      "They will be reparked on Monday morning",
      "They will be towed at the owner's expense",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["inference", "detail"],
    explanation:
      "'Cars left in Ashgrove after Friday night will be towed at the owner's expense.' Neither a ticket nor a free move is offered — towing is the stated consequence, and 'at the owner's expense' rules out any courtesy relocation.",
  },
];

// ---------------------------------------------------------------------------
// FULL MOCK 1 — items 25–30: academic talk 1, the economics of recycling
// ---------------------------------------------------------------------------

const M1_TALK1_ITEMS: McqSpec[] = [
  {
    stem: "Item 25. What is the talk mainly about?",
    group: "part-talk-1",
    options: [
      "How households should sort their recycling",
      "The market forces that decide which recycled materials actually get processed",
      "The history of curbside recycling programs",
      "How aluminium cans are manufactured",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["main-idea"],
    explanation:
      "The through-line is stated at the start: the economics 'underneath recycling' that decide what actually gets recycled — buyers, prices, energy gaps. Aluminium is one supporting example of that market logic, not the subject of the talk itself.",
  },
  {
    stem: "Item 26. Why does the professor mention the price of oil?",
    group: "part-talk-1",
    options: [
      "To argue that oil companies fund recycling programs",
      "To show that energy costs make aluminium valuable",
      "To give an example of a factor that weakens demand for recycled plastic",
      "To explain why petrol prices rose last year",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["organization"],
    explanation:
      "Cheap oil makes new plastic easy to produce, the price of virgin plastic drops, and manufacturers lose their reason to pay more for recycled material — an example of demand collapsing for a market reason. The aluminium-energy point comes later and separately, which is what option two conflates.",
  },
  {
    stem: "Item 27. According to the professor, why will recyclers actually pay people for aluminium cans?",
    group: "part-talk-1",
    options: [
      "Because aluminium is a rare metal",
      "Because recycling cans is required by law",
      "Because cans are easy to crush and transport",
      "Because remelting an old can costs about five percent of the energy of smelting new metal from ore",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The energy gap — remelting uses roughly five percent of the electricity of smelting from raw ore — means the material 'carries its own value', so recyclers pay for it. Rarity and legal requirements are never mentioned; the whole explanation is economic, not regulatory.",
  },
  {
    stem: "Item 28. Why does the professor say, 'Now, here is the part policymakers find uncomfortable'?",
    group: "part-talk-1",
    options: [
      "To signal that a counterintuitive finding is coming that challenges common practice",
      "To criticize city governments for wasting money",
      "To change the topic to aluminium recycling",
      "To apologize for the difficulty of the material",
    ],
    answer: 0,
    difficulty: 4,
    skills: ["organization"],
    explanation:
      "The signpost introduces the 'sounds backwards' finding: collect-everything curbside programs can make the economics worse, and cities collecting fewer materials improved their rates. The professor is previewing an uncomfortable truth, not attacking anyone — there is no blame in what follows.",
  },
  {
    stem: "Item 29. What does the professor imply about cities that collect fewer materials?",
    group: "part-talk-1",
    options: [
      "They did it mainly to save money on trucks",
      "Their recycling rates rose because clean, sellable loads beat mixed scrap that may have no buyer",
      "Their residents complained about contamination",
      "They will soon go back to collecting everything",
    ],
    answer: 1,
    difficulty: 4,
    skills: ["inference"],
    explanation:
      "The logic chain is spelled out: mixed loads contaminate and cost money to sort, while 'a ton of clean cardboard has a buyer' — so fewer, cleaner materials raised overall rates. Truck costs and resident complaints are never mentioned; the cause is purely market-side.",
  },
  {
    stem: "Item 30. In the talk, what does the professor mean by 'virgin plastic'?",
    group: "part-talk-1",
    options: [
      "Plastic produced from new raw materials rather than from recycled plastic",
      "Plastic that is safe for food packaging",
      "Plastic imported from overseas",
      "Plastic of unusually high quality",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["academic-vocab"],
    explanation:
      "'Virgin' is set against 'the recycled version' in the same sentence — manufacturers compare the price of newly made plastic with recycled plastic. It is a term about origin, not safety, source country, or quality, which is how the other options misread it.",
  },
];

// ---------------------------------------------------------------------------
// FULL MOCK 1 — items 31–35: academic talk 2, how plants sense light
// ---------------------------------------------------------------------------

const M1_TALK2_ITEMS: McqSpec[] = [
  {
    stem: "Item 31. What is the main purpose of the talk?",
    group: "part-talk-2",
    options: [
      "To compare plant and animal eyesight",
      "To explain how plants sense and respond to light using photoreceptors",
      "To describe the chemical structure of chlorophyll",
      "To argue that plants are conscious",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["main-idea"],
    explanation:
      "The talk runs from photoreceptors and the phytochrome switch to shade detection, stem growth, germination, and season tracking — all instances of plants sensing light and acting on it. The 'plants don't have eyes, yet in a sense they see' opening is a hook, not a comparison of eyesight.",
  },
  {
    stem: "Item 32. According to the professor, why is shade relatively rich in far-red light?",
    group: "part-talk-2",
    options: [
      "Because shade is light that has already filtered through a taller neighbour's leaves",
      "Because the soil reflects far-red light upward",
      "Because far-red light travels faster than red light",
      "Because shaded areas are colder than sunny ones",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The professor defines shade as 'light that has already filtered through a taller neighbour's leaves' — that filtering is what leaves it relatively rich in far-red. Nothing about soil, speed of light, or temperature appears in the explanation.",
  },
  {
    stem: "Item 33. What does a seedling do when it senses far-red-heavy shade?",
    group: "part-talk-2",
    options: [
      "It drops its lower leaves immediately",
      "It stops growing until the shade disappears",
      "It redirects its resources into stem growth instead of roots",
      "It begins flowering early",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The seedling 'redirects its resources, pouring energy into stem growth instead of roots' — it stretches, racing upward for light. Halting growth is the opposite of what the plant does; the whole point of the strategy is a growth spurt, not dormancy.",
  },
  {
    stem: "Item 34. What is the professor's attitude toward the terms 'short-day' and 'long-day' plants?",
    group: "part-talk-2",
    options: [
      "She finds the labels misleading, because what the plants actually measure is the length of the night",
      "She believes they should replace older terminology",
      "She thinks they are useful only for farmers",
      "She doubts the experiments behind them",
    ],
    answer: 0,
    difficulty: 4,
    skills: ["attitude"],
    explanation:
      "The labels 'trip up every exam', she says, because a short-day plant flowers when the uninterrupted dark period is long — the terminology describes day length while the mechanism measures night length. She never questions the underlying research, only the misleading wording.",
  },
  {
    stem: "Item 35. What does the professor mean when she says gardeners call seedlings 'leggy'?",
    group: "part-talk-2",
    options: [
      "The seedlings have grown tall and thin from stretching toward light",
      "The seedlings have unusually strong roots",
      "The seedlings are infected by a fungus",
      "The seedlings were grown from old seeds",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["academic-vocab"],
    explanation:
      "'Leggy' labels the result of the shade response just described: energy poured into stem growth produces stretched, thin seedlings racing upward for light. The word attaches to the stem-stretching strategy, not to roots, disease, or seed age.",
  },
];

// ---------------------------------------------------------------------------
// FULL MOCK 1 — Listening section (35 items, 35 raw points, ~29 minutes)
// ---------------------------------------------------------------------------

export const toeflFullMock1Listening: MockSectionSeed = {
  key: "listening",
  title: "Listening (2026 format: four task families)",
  directions:
    "Official Listening section: up to about 29 minutes, up to 47 items, delivered in two adaptive stages — navigation is forward-only and every recording may be played exactly once. This linear practice version carries 35 questions worth 35 raw points, sampling all four 2026 task families: Listen-and-Choose-a-Response items, a campus conversation, two announcements, and two academic talks. You may take notes at any time. Once you submit an item you cannot go back to it, so settle each answer before moving on.",
  timingSec: 1740,
  audioParts: [
    {
      key: "part-conv-1",
      label: "Conversation — Changing a meal plan (dining-services office)",
      directions:
        "Items 11–18. A conversation between a student and a dining-services manager. Take notes as you listen; the recording plays once and questions follow the order of the conversation.",
      script: M1_CONV_SCRIPT,
    },
    {
      key: "part-ann-1",
      label: "Announcement 1 — Mailroom package-pickup change (Knox Hall)",
      directions:
        "Items 19–21. One campus mailroom announcement about a change in package collection. The recording plays once.",
      script: M1_ANN1_SCRIPT,
    },
    {
      key: "part-ann-2",
      label: "Announcement 2 — Weekend parking-lot closure (Ashgrove)",
      directions:
        "Items 22–24. One facilities announcement about a weekend parking change. The recording plays once.",
      script: M1_ANN2_SCRIPT,
    },
    {
      key: "part-talk-1",
      label: "Academic talk 1 — The economics of recycling",
      directions:
        "Items 25–30. An excerpt from a lecture in an economics course. Listen for the professor's organization and signposts; the recording plays once.",
      script: M1_TALK1_SCRIPT,
    },
    {
      key: "part-talk-2",
      label: "Academic talk 2 — How plants sense light",
      directions:
        "Items 31–35. An excerpt from a lecture in a plant-biology course. The recording plays once.",
      script: M1_TALK2_SCRIPT,
    },
  ],
  questions: mcqs([
    ...M1_RESPONSE_ITEMS,
    ...M1_CONV_ITEMS,
    ...M1_ANN_ITEMS,
    ...M1_TALK1_ITEMS,
    ...M1_TALK2_ITEMS,
  ]),
};

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — scripts (completely fresh situations and subjects)
// ---------------------------------------------------------------------------

// Conversation (~128 words): residence maintenance office, window leak with a
// mid-conversation scheduling correction (Tuesday → Wednesday).

const S1_CONV_SCRIPT = `STUDENT: Hi — Room 214, Telford Hall. There's a leak under the window whenever it rains hard — it's getting worse.
COORDINATOR: Sorry — I can book that in. Is the room usually occupied before five?
STUDENT: Classes until four most days, yes.
COORDINATOR: That's fine for this visit — the contractor only needs the outside wall; he'll ladder up from the courtyard.
STUDENT: Oh. I assumed someone would be coming inside.
COORDINATOR: Only if the sealant fails the water test. Then you'd have to be present, or leave your key at the desk.
STUDENT: Got it. When would he come?
COORDINATOR: Tuesday morning — no, sorry, wrong row. Wednesday, between nine and eleven.
STUDENT: Wednesday works. Anything I should do beforehand?
COORDINATOR: Move your desk clear of the window, and take the curtains down — drilling makes a mess.`;

// Announcement 1 (~80 words): recreation-centre pool closure.

const S1_ANN1_SCRIPT = `ANNOUNCER: Attention, swimmers: the Fielding Recreation Centre pool is closed until Friday morning. A pump seal failed during last night's maintenance cycle, and the drained water cannot be refilled until the part is replaced. Morning lane swimming is cancelled for the whole week; the repair crew expects to reopen in time for Friday's six a.m. session. Until then, the Whitmore campus pool honours our members at no charge — bring your student card. Aqua-fitness classes resume next Monday. Apologies for the disruption.`;

// Announcement 2 (~89 words): campus bookstore buyback week.

const S1_ANN2_SCRIPT = `ANNOUNCER: A quick note from the campus bookstore for anyone selling books back. Buyback week runs Monday through Thursday, nine to five, on the second floor. Books must be in reusable condition — water damage and missing pages mean we can't resell them, so no offer. Prices are noticeably higher before finals, while we still know which editions instructors will assign next term; after Thursday, quotes drop to wholesale. If your book has an access code, it must be unopened to count as new. Payment is by cash or campus card.`;

// Academic talk 1 (~232 words): the paradox of choice in behavioural economics.

const S1_TALK1_SCRIPT = `PROFESSOR: Here's a question: can a supermarket offer too many kinds of jam? A famous study set up a tasting table — twenty-four jams one day, six jams another. The larger display attracted more shoppers, but here's the twist: people who saw twenty-four jams bought a jar about three percent of the time; people who saw six bought nearly ten times as often. More choice, it seemed, paralyzed the decision.
PROFESSOR: That result fed a popular idea — the paradox of choice: that beyond some point, added options reduce happiness. The theorist behind it argued that abundant choice raises the cost of deciding and guarantees post-decision regret — whatever you pick, you've given up twenty-three other lives.
PROFESSOR: Now, I want to complicate that story. Follow-up research has been mixed. The jam effect appears in some contexts and vanishes in others. When people already know what they like — a runner buying her usual shoes — a bigger shelf is simply convenient. The overload effect shows up mainly for novices, facing unfamiliar categories, without clear preferences.
PROFESSOR: And there's an individual difference. So-called maximizers — people who hunt for the single best option — suffer most from large assortments. Satisficers, who look for good enough, barely notice the size of the menu.
PROFESSOR: So the honest conclusion isn't 'choice is bad'. It's that choice has a cognitive price, and whether you pay depends on who you are and how well you know the aisle.`;

// Academic talk 2 (~253 words): the honeybee waggle dance.

const S1_TALK2_SCRIPT = `PROFESSOR: A honeybee colony solves a food problem together: some flower patches are worth flying to, and some are not. Today, how a bee lighter than a sunflower seed tells her ten thousand sisters exactly where the good flowers are.
PROFESSOR: The famous answer is the waggle dance. A returning forager performs it on the vertical comb inside the dark hive, and it has two parts. She runs a short straight line while waggling her abdomen, then loops back — left one time, right the next — tracing a repeated figure-eight.
PROFESSOR: The two parts carry two different messages. Duration maps distance: the longer the waggling, the farther the flowers — on the order of one second for every kilometre. The angle of the straight run is the direction message, and here is the elegant part. Inside the dark hive there is no view of the sun, so the bee uses gravity as her compass. Straight up the comb means 'toward the sun'; a run tilted thirty degrees left of vertical means 'thirty degrees left of the sun'. The audience reads the dance in darkness, by touch, standing close behind the dancer.
PROFESSOR: And the dance is honest, in the main. A forager cannot talk up an empty patch, because recruitment only works if the followers actually find the nectar she promised; disappointed followers simply stop recruiting others, and the colony's attention drifts back to the proven fields.
PROFESSOR: So: distance in duration, direction in angle, reliability in reward. It is a language small enough to fit on a comb face.`;

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — items 1–10: Listen and Choose a Response (fresh items)
// ---------------------------------------------------------------------------

const S1_RESPONSE_ITEMS: McqSpec[] = [
  {
    stem: "Item 1. Listen and choose the most appropriate response.",
    audioScript: "Hi, I'm calling about the ad for the flat — is it still available?",
    options: [
      "Yes, it is — would you like to come and see it on Saturday morning?",
      "The flat has two bedrooms.",
      "I saw the ad online too.",
      "Ads are expensive to place.",
    ],
    answer: 0,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "A caller's intention is to check availability and arrange the next step; the appropriate reply confirms availability and proposes a viewing. 'The flat has two bedrooms' answers a question about rooms that was never asked — it ignores the caller's actual intention.",
  },
  {
    stem: "Item 2. Listen and choose the most appropriate response.",
    audioScript:
      "I'm really sorry to ask this last-minute, but could you possibly cover my shift at the volunteer centre on Sunday? I completely forgot about my aunt's seventieth.",
    options: [
      "You forgot about the shift.",
      "Seventieth birthdays are important milestones.",
      "Sure, I can take Sunday — just text me the details.",
      "Volunteering is very rewarding.",
    ],
    answer: 2,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "The speaker makes an apologetic last-minute request, so the appropriate reply answers the request itself — accepting and asking for the practical details. 'Seventieth birthdays are important milestones' responds to the excuse rather than the favour: sympathetic, but it never says yes or no.",
  },
  {
    stem: "Item 3. Listen and choose the most appropriate response.",
    audioScript: "Excuse me — would you mind if I opened the window? This classroom gets really stuffy by the afternoon.",
    options: [
      "The window is closed.",
      "Not at all — go ahead.",
      "Afternoon classes are always long.",
      "You should drink more water.",
    ],
    answer: 1,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "'Would you mind if I…' is a polite permission request, so the appropriate reply grants permission — 'Not at all — go ahead.' 'The window is closed' describes the window's current state, answering a question about facts that nobody asked.",
  },
  {
    stem: "Item 4. Listen and choose the most appropriate response.",
    audioScript:
      "Professor Osei, I was wondering — for the presentation, is it okay if we use slides, or would you rather we didn't?",
    options: [
      "Presentations are scheduled for next week.",
      "I would rather not comment.",
      "Your class uses slides every lecture.",
      "Slides are fine — just keep the text large enough to read from the back row.",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "The student offers a either/or choice and asks for a ruling; the appropriate reply makes the choice and adds the professor's condition about legibility. 'I would rather not comment' refuses to decide a simple formatting question the student directly asked permission for — an evasive register mismatch.",
  },
  {
    stem: "Item 5. Listen and choose the most appropriate response.",
    audioScript:
      "So the plan is: I'll draft the introduction, you take the methods section, and we meet Thursday to stitch it together. Sound okay?",
    options: [
      "The introduction needs a draft.",
      "Works for me — I'll have the methods done by Wednesday night so we can review it Thursday.",
      "Thursday is a weekday.",
      "Our project has three sections.",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "The speaker is checking agreement on a plan; the appropriate response confirms and even adds a helpful timing commitment. 'Our project has three sections' merely tallies the work instead of agreeing to do any of it — agreement, not arithmetic, is what was asked for.",
  },
  {
    stem: "Item 6. Listen and choose the most appropriate response.",
    audioScript:
      "Hey, quick favour — my laptop's in the shop and the essay's due at noon. Any chance I could borrow yours for an hour this morning?",
    options: [
      "Of course — I don't need it until my two o'clock lab.",
      "Your laptop is in the shop.",
      "Essays should be started earlier.",
      "Noon is a common deadline.",
    ],
    answer: 0,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "A casual request between classmates calls for a cooperative, casual yes — and this reply even shows why lending is possible. 'Essays should be started earlier' scolds instead of answering; whatever its wisdom, it leaves the actual request untouched.",
  },
  {
    stem: "Item 7. Listen and choose the most appropriate response.",
    audioScript:
      "We're throwing a little potluck for Dana's farewell on Friday — nothing fancy, just bring whatever. You in?",
    options: [
      "Dana is leaving on Friday.",
      "Potlucks are traditional communal meals.",
      "I'm in! I'll bring my famous pasta salad.",
      "I don't usually eat fancy food.",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["pragmatics"],
    explanation:
      "This is a relaxed invitation ('nothing fancy… You in?'), so the appropriate reply accepts in the same easy register and volunteers a dish. 'Potlucks are traditional communal meals' responds like a dictionary — the register could not be more mismatched with the friendly invitation.",
  },
  {
    stem: "Item 8. Listen and choose the most appropriate response.",
    audioScript:
      "Professor Farrell, before I book my flight home — when does the winter term officially end? I don't want to miss any final assessments.",
    options: [
      "Flights are expensive in winter.",
      "Book after the twenty-second of December — assessments finish on the twenty-first.",
      "You should not book flights during term.",
      "Winter is a popular travel season.",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["pragmatics", "detail"],
    explanation:
      "The student needs a date to plan around, so the appropriate reply gives the date and a travel recommendation that follows from it. 'Flights are expensive in winter' reacts to the word 'flight' — the student asked about the academic calendar, not airfares.",
  },
  {
    stem: "Item 9. Listen and choose the most appropriate response.",
    audioScript:
      "Um, this is going to sound like a weird question, but — is my presentation slot today, or next Tuesday? I've somehow convinced myself of both.",
    options: [
      "Next Tuesday — today is the tutorial, no presentations. Easy to mix up.",
      "You have a presentation.",
      "Today is a weekday.",
      "Weird questions are common.",
    ],
    answer: 0,
    difficulty: 2,
    skills: ["pragmatics"],
    explanation:
      "Under the hedging ('Um… weird question'), the intention is a simple either/or factual question, and the appropriate reply picks one option and kindly resolves the confusion. 'You have a presentation' repeats what the student already knows without telling her which day it is.",
  },
  {
    stem: "Item 10. Listen and choose the most appropriate response.",
    audioScript:
      "You know, the shared fridge would be a lot easier to clean if everyone labeled their containers… just saying.",
    options: [
      "The fridge is shared by everyone.",
      "Just saying what?",
      "Good point — I'll label mine tonight and toss the old leftovers I put in there.",
      "Cleaning schedules are posted on the noticeboard.",
    ],
    answer: 2,
    difficulty: 4,
    skills: ["pragmatics", "inference"],
    explanation:
      "'…just saying' is an indirect complaint doubling as a request; the appropriate reply recognizes that the hint includes the listener and acts on it. 'Just saying what?' takes the hedge literally and forces the speaker to complain openly — exactly what the softening was designed to avoid.",
  },
];

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — items 11–18: window-leak maintenance conversation (part-conv-1)
// ---------------------------------------------------------------------------

const S1_CONV_ITEMS: McqSpec[] = [
  {
    stem: "Item 11. Why does the student go to the maintenance office?",
    group: "part-conv-1",
    options: [
      "To complain about noise from drilling work",
      "To report a leaking window and arrange a repair",
      "To ask about moving to another room",
      "To collect a spare room key",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["purpose"],
    explanation:
      "She reports the leak under her window that is 'getting worse', and the coordinator books the repair — that is the business of the conversation. Drilling comes up only as the reason to take the curtains down before Wednesday's visit, so option one quotes a later detail as the purpose.",
  },
  {
    stem: "Item 12. What correction does the coordinator make?",
    group: "part-conv-1",
    options: [
      "The visit is on Wednesday, not Tuesday",
      "The repair will be done from the courtyard, not the street",
      "Two visits will be needed, not one",
      "The appointment is at eleven, not nine",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "'Tuesday morning — no, sorry, wrong row. Wednesday, between nine and eleven.' The self-correction is the classic trap: the first day named is the wrong one, and both nine and eleven are part of the correct window.",
  },
  {
    stem: "Item 13. What had the student assumed about the repair?",
    group: "part-conv-1",
    options: [
      "That it had already been completed",
      "That she would have to be present for it",
      "That the contractor would need to work inside her room",
      "That the coordinator would inspect the room first",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["inference"],
    explanation:
      "'Oh. I assumed someone would be coming inside.' She expected an interior repair, and the courtyard ladder surprised her. Having to be present is a real condition in the conversation — but only as the coordinator's rule if the water test fails, not as her assumption.",
  },
  {
    stem: "Item 14. Under what condition would workers need to enter the room?",
    group: "part-conv-1",
    options: [
      "If the student cannot move her desk",
      "If the curtains are not taken down",
      "If the leak spreads to the desk",
      "If the sealant fails the water test",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "'Only if the sealant fails the water test.' The desk and the curtains are the student's preparation tasks for the visit — they are never linked to entry, which turns on the water test alone.",
  },
  {
    stem: "Item 15. What must the student do if workers need to enter her room?",
    group: "part-conv-1",
    options: [
      "Be present, or leave her key at the desk",
      "Email the coordinator in advance",
      "Wait outside during the repair",
      "Sign a permission form at the office",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "'Then you'd have to be present, or leave your key at the desk.' The two options are stated outright — no email, form or waiting arrangement is mentioned anywhere in the conversation.",
  },
  {
    stem: "Item 16. Why does the coordinator ask whether the room is usually occupied before five?",
    group: "part-conv-1",
    options: [
      "To find out whether the student skips afternoon classes",
      "To work out whether someone would be available if the room had to be entered",
      "To decide whether the repair is urgent",
      "To choose which contractor to send",
    ],
    answer: 1,
    difficulty: 4,
    skills: ["inference"],
    explanation:
      "The question probes access: if the sealant fails the water test, someone must be present or leave a key, and her answer — classes until four — matters only in that light. The coordinator moves straight from her reply to the entry rules, which is the giveaway.",
  },
  {
    stem: "Item 17. What is the student asked to do before the visit?",
    group: "part-conv-1",
    options: [
      "Cover the window with plastic sheeting",
      "Test the sealant herself with a hose",
      "Move the desk clear of the window and take the curtains down",
      "Report any further leaks by email",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "'Move your desk clear of the window, and take the curtains down — drilling makes a mess.' The water test is the contractor's job, not a task set for her, so option two hands the professional's procedure to the wrong person.",
  },
  {
    stem: "Item 18. What will most likely happen next?",
    group: "part-conv-1",
    options: [
      "The contractor will repair the outside wall from the courtyard on Wednesday",
      "The student will be moved to another room for the week",
      "The front desk will hold her key from Monday",
      "The coordinator will inspect the room before Tuesday",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["inference"],
    explanation:
      "The plan is settled: a courtyard repair on Wednesday between nine and eleven, with inside entry only as a back-up. Holding her key from Monday is wrong — the key goes to the desk only if the sealant fails the test, not in advance.",
  },
];

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — items 19–24: announcements (part-ann-1, part-ann-2)
// ---------------------------------------------------------------------------

const S1_ANN_ITEMS: McqSpec[] = [
  {
    stem: "Item 19. What is the main purpose of the announcement?",
    group: "part-ann-1",
    options: [
      "To advertise swimming courses at the Whitmore pool",
      "To explain an unexpected pool closure and the arrangements available during it",
      "To recruit new members for the aqua-fitness classes",
      "To apologize for last month's overcrowded lanes",
    ],
    answer: 1,
    difficulty: 2,
    skills: ["purpose"],
    explanation:
      "The announcement explains why the pool is closed (a failed pump seal), for how long, and where members can swim meanwhile — a closure plus contingency plan. Whitmore and the aqua-fitness classes are details inside that message, not its purpose.",
  },
  {
    stem: "Item 20. Why is the pool closed?",
    group: "part-ann-1",
    options: [
      "A pump seal failed during maintenance, and the pool cannot be refilled until the part is replaced",
      "The pool is undergoing its annual deep clean",
      "A swimming competition has booked the whole facility",
      "The pool floor is being resurfaced",
    ],
    answer: 0,
    difficulty: 2,
    skills: ["detail"],
    explanation:
      "The cause chain is explicit: the seal failed, the water was drained, and refilling must wait for the replacement part. Routine cleaning, a competition, and resurfacing are all plausible pool closures — but none of them is this one.",
  },
  {
    stem: "Item 21. What should members do to swim at the Whitmore campus pool?",
    group: "part-ann-1",
    options: [
      "Pay a five-dollar guest fee",
      "Book a lane by phone in advance",
      "Show a student card — entry is free of charge",
      "Wait until Friday's six a.m. session",
    ],
    answer: 2,
    difficulty: 2,
    skills: ["detail"],
    explanation:
      "The Whitmore pool 'honours our members at no charge — bring your student card': free entry, card required. Waiting for Friday is the alternative of not swimming at Whitmore at all — it answers a different question.",
  },
  {
    stem: "Item 22. According to the announcement, why are buyback prices noticeably higher early in the week?",
    group: "part-ann-2",
    options: [
      "Because fewer students sell their books early",
      "Because the store is competing with an online retailer",
      "Because prices include a bonus for cash payments",
      "Because while finals have not passed, the store still knows which editions instructors will assign next term",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The announcement gives the reason directly: prices are higher 'while we still know which editions instructors will assign next term; after Thursday, quotes drop to wholesale.' Demand certainty, not student behaviour or payment method, is the cause.",
  },
  {
    stem: "Item 23. What condition must a book meet for the store to accept it?",
    group: "part-ann-2",
    options: [
      "It must be less than a year old",
      "It must be in reusable condition — no water damage, no missing pages",
      "It must be a paperback edition",
      "It must be in its original shrink wrap",
    ],
    answer: 1,
    difficulty: 2,
    skills: ["detail"],
    explanation:
      "'Books must be in reusable condition — water damage and missing pages mean we can't resell them, so no offer.' Age, format, and wrapping are never mentioned; resale condition is the whole criterion.",
  },
  {
    stem: "Item 24. What does the announcer say about books that include an access code?",
    group: "part-ann-2",
    options: [
      "Access codes can be sold separately from the book",
      "Books with codes are never accepted",
      "Codes expire once buyback week ends",
      "The code must be unopened for the book to count as new",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["detail", "inference"],
    explanation:
      "'If your book has an access code, it must be unopened to count as new.' That is a restriction, not a ban — so 'never accepted' overstates it, and the announcement says nothing about codes expiring or being sold on their own.",
  },
];

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — items 25–30: academic talk 1, the paradox of choice
// ---------------------------------------------------------------------------

const S1_TALK1_ITEMS: McqSpec[] = [
  {
    stem: "Item 25. What is the main idea of the talk?",
    group: "part-talk-1",
    options: [
      "Supermarkets should offer fewer products to their customers",
      "The jam study was later shown to be fraudulent",
      "Choice overload is real but limited — it mainly affects novices and maximizers, and depends on the situation",
      "People consistently prefer larger assortments",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["main-idea"],
    explanation:
      "The talk bends from the jam study toward the professor's 'honest conclusion': choice has a cognitive price that only some people pay. He never prescribes store policy or accuses the researchers of fraud — option two distorts his 'complicate that story'.",
  },
  {
    stem: "Item 26. In the jam study, what happened with the twenty-four-jam display?",
    group: "part-talk-1",
    options: [
      "It attracted more shoppers, but only about three percent of them bought a jar — far fewer than at the six-jam table",
      "It attracted fewer shoppers, though those who came bought more",
      "It sold out of jam within an hour",
      "Shoppers could not tell the difference between the two tables",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "The reversal is the finding: the big display drew more people yet produced about three percent purchases, while the small table sold 'nearly ten times as often'. Option two inverts the pattern — that is the opposite of the study's point.",
  },
  {
    stem: "Item 27. Why does the professor say, 'Now, I want to complicate that story'?",
    group: "part-talk-1",
    options: [
      "To admit that he does not understand the original study",
      "To introduce follow-up findings that limit when the paradox of choice actually occurs",
      "To change the topic to athletic footwear",
      "To summarize the lecture's argument so far",
    ],
    answer: 1,
    difficulty: 4,
    skills: ["organization"],
    explanation:
      "The signpost marks the pivot from the popular idea to the mixed follow-up research — where the effect appears, where it vanishes, and for whom. It is a qualifier, not a summary, and the running shoes that follow are an example, not a new topic.",
  },
  {
    stem: "Item 28. Why does the professor mention a runner buying her usual shoes?",
    group: "part-talk-1",
    options: [
      "To show that athletes spend more on footwear than other shoppers",
      "To recommend buying running shoes in person rather than online",
      "To prove that the jam study was poorly designed",
      "To illustrate a shopper with clear preferences, for whom a bigger shelf is simply convenient",
    ],
    answer: 3,
    difficulty: 3,
    skills: ["organization", "detail"],
    explanation:
      "The runner instantiates the rule 'when people already know what they like… a bigger shelf is simply convenient.' She is evidence about familiarity, not about spending habits or the jam study's design.",
  },
  {
    stem: "Item 29. In the lecture, what is a 'satisficer'?",
    group: "part-talk-1",
    options: [
      "A person who settles for an option that is good enough instead of hunting for the single best one",
      "A store employee who restocks the shelves each night",
      "A shopper who always returns what they buy",
      "A researcher who studies consumer behaviour",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["academic-vocab"],
    explanation:
      "The term is defined by contrast with maximizers: satisficers 'look for good enough' and barely notice the size of the menu. The word sounds like 'satisfy', not 'stock', 'return', or 'research' — those are sound-alike decoys.",
  },
  {
    stem: "Item 30. What is the professor's attitude toward the popular idea that more choice reduces happiness?",
    group: "part-talk-1",
    options: [
      "He fully endorses it as proven",
      "He finds it oversimplified — the effect is real in some situations but not universal",
      "He dismisses it as a myth with no supporting evidence",
      "He has no opinion and simply reports both sides",
    ],
    answer: 1,
    difficulty: 4,
    skills: ["attitude"],
    explanation:
      "He treats the idea as 'a popular' overreach: real, but conditional — his 'honest conclusion' keeps the effect while dropping the universality. Option three goes too far the other way; the jam study is evidence, which is why he complicates rather than dismisses it.",
  },
];

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — items 31–35: academic talk 2, immunological memory
// ---------------------------------------------------------------------------

const S1_TALK2_ITEMS: McqSpec[] = [
  {
    stem: "Item 31. What is the talk mainly about?",
    group: "part-talk-2",
    options: [
      "How honeybees decide which flowers to visit first",
      "The foraging economics of a honeybee colony",
      "How the waggle dance communicates the distance and direction of a food source",
      "Why honeybees build their combs vertically in a dark hive",
    ],
    answer: 2,
    difficulty: 3,
    skills: ["main-idea"],
    explanation:
      "The lecture explains the dance's two signals — duration for distance, angle for direction — and why the system stays honest. Choosing which flowers to visit is the colony's problem, stated in the opening; the dance is the solution the talk actually covers.",
  },
  {
    stem: "Item 32. In the waggle dance, what does the duration of the waggle communicate?",
    group: "part-talk-2",
    options: [
      "The quality of the nectar",
      "The distance to the flowers — longer waggling means farther away",
      "The number of bees already feeding there",
      "The angle to the sun",
    ],
    answer: 1,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "'Duration maps distance: the longer the waggling, the farther the flowers.' The sun angle is carried by the tilt of the straight run — a separate signal that option four confuses with duration.",
  },
  {
    stem: "Item 33. Why does the bee use gravity as a compass inside the hive?",
    group: "part-talk-2",
    options: [
      "Because the dark hive offers no view of the sun, straight up on the comb stands in for 'toward the sun'",
      "Because bees cannot sense the sun at all",
      "Because gravity is more accurate than the sun",
      "Because the comb is always built vertically",
    ],
    answer: 0,
    difficulty: 3,
    skills: ["detail"],
    explanation:
      "'Inside the dark hive there is no view of the sun, so the bee uses gravity as her compass' — straight up means toward the sun, a tilt left means left of the sun. It is a substitute reference, not a claim that bees cannot sense the sun outdoors.",
  },
  {
    stem: "Item 34. What does the professor imply about a forager whose patch turns out to be empty?",
    group: "part-talk-2",
    options: [
      "She is expelled from the hive",
      "Her dance fails to recruit, because followers only keep spreading a message when they find the promised nectar",
      "She must repeat the dance until followers obey her",
      "She switches to a different kind of dance",
    ],
    answer: 1,
    difficulty: 4,
    skills: ["inference"],
    explanation:
      "'A forager cannot talk up an empty patch, because recruitment only works if the followers actually find the nectar she promised.' The system self-corrects — disappointed followers stop recruiting — and nothing describes punishment or forced repetition.",
  },
  {
    stem: "Item 35. Why does the professor end by calling the dance 'a language small enough to fit on a comb face'?",
    group: "part-talk-2",
    options: [
      "To suggest the dance is too limited to count as real communication",
      "To recommend studying the comb rather than the bees",
      "To argue that bees understand grammar",
      "To capture how a complete system of messages — distance, direction and reliability — is packed into one small physical signal",
    ],
    answer: 3,
    difficulty: 4,
    skills: ["organization", "attitude"],
    explanation:
      "The closing line sums up the lecture's admiration: three kinds of information are all encoded in a single tiny performance on the comb. It is praise for the economy of the system, not a doubt about whether the dance counts as communication.",
  },
];

// ---------------------------------------------------------------------------
// SECTION MOCK 1 — standalone full-length Listening section mock
// ---------------------------------------------------------------------------

export const toeflListeningSectionMock1: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Listening Section Mock (2026 format) 1",
  kind: "section",
  lengthLabel: "full-length",
  description:
    "A full-length, official-scale Listening simulation of the 2026 format: ten Listen-and-Choose-a-Response items, one campus conversation with eight questions, two announcements with three questions each, and two academic talks with eleven questions between them — 35 items, 35 raw points, about 29 minutes, every recording played exactly once. Original EnglishPath practice material — not an official ETS test.",
  sections: [
    {
      key: "listening",
      title: "Listening (2026 format: four task families)",
      directions:
        "Official Listening section: up to about 29 minutes, up to 47 items, delivered in two adaptive stages — navigation is forward-only and every recording may be played exactly once. This linear practice version carries 35 questions worth 35 raw points, sampling all four 2026 task families: Listen-and-Choose-a-Response items, a campus conversation, two announcements, and two academic talks. You may take notes at any time. Once you submit an item you cannot go back to it, so settle each answer before moving on.",
      timingSec: 1740,
      audioParts: [
        {
          key: "part-conv-1",
          label: "Conversation — Reporting a window leak (maintenance office)",
          directions:
            "Items 11–18. A conversation between a student and a residence-maintenance coordinator. Take notes as you listen; the recording plays once and questions follow the order of the conversation.",
          script: S1_CONV_SCRIPT,
        },
        {
          key: "part-ann-1",
          label: "Announcement 1 — Recreation-centre pool closure",
          directions: "Items 19–21. One campus facilities announcement. The recording plays once.",
          script: S1_ANN1_SCRIPT,
        },
        {
          key: "part-ann-2",
          label: "Announcement 2 — Bookstore buyback week",
          directions: "Items 22–24. One campus bookstore announcement. The recording plays once.",
          script: S1_ANN2_SCRIPT,
        },
        {
          key: "part-talk-1",
          label: "Academic talk 1 — The paradox of choice",
          directions:
            "Items 25–30. An excerpt from a lecture in a behavioural-economics course. Listen for the professor's stance and signposts; the recording plays once.",
          script: S1_TALK1_SCRIPT,
        },
        {
          key: "part-talk-2",
          label: "Academic talk 2 — The honeybee waggle dance",
          directions:
            "Items 31–35. An excerpt from a lecture in an animal-behaviour course. The recording plays once.",
          script: S1_TALK2_SCRIPT,
        },
      ],
      questions: mcqs([
        ...S1_RESPONSE_ITEMS,
        ...S1_CONV_ITEMS,
        ...S1_ANN_ITEMS,
        ...S1_TALK1_ITEMS,
        ...S1_TALK2_ITEMS,
      ]),
    },
  ],
};

// ---------------------------------------------------------------------------
// ADAPTIVE STAGE 1 — routing module scripts
// ---------------------------------------------------------------------------

// Conversation (~99 words): campus ticket office, discounted matinee tickets.

const ST1_CONV_SCRIPT = `CLERK: Hi — how can I help?
STUDENT: Hi. Is it true the drama club's offering student tickets to Saturday's play at a discount?
CLERK: It is — ten dollars instead of twenty-six, but only for the Saturday matinee, bought in person with your student card. Online orders pay full price.
STUDENT: In person, understood. Two tickets, please — one for me, one for my brother. He's visiting.
CLERK: Fine, but the discount covers your ticket only — his is twenty-six. Card or cash for the pair?
STUDENT: Card, please. And the matinee's at two, like the evening show?
CLERK: Two o'clock, doors at half past one. Enjoy the play.`;

// Announcement (~77 words): residence-hall water shutdown.

const ST1_ANN_SCRIPT = `ANNOUNCER: This is a notice for residents of Caldecott Hall. On Saturday, the water will be shut off across the building from eight a.m. until around two p.m. while a pressure valve is replaced in the basement. Please fill a bottle or jug Friday night if you'll need drinking water. Showers in the Riverside gym remain available all day — bring your room key. Laundry machines on floor two will be locked during the work. Sorry for the inconvenience.`;

// ---------------------------------------------------------------------------
// ADAPTIVE STAGE 1 — routing module (10 items, 10 raw points)
// ---------------------------------------------------------------------------

export const adaptiveStage1Listening: MockSectionSeed = {
  key: "listening",
  title: "Listening — Stage 1 routing module",
  directions:
    "Stage 1 — the routing stage of TalkSy's adaptive Listening practice simulation. Ten mixed-difficulty items across the four 2026 task families: Listen-and-Choose-a-Response items, a campus conversation and an announcement. Your raw percentage on this module helps decide whether your Stage 2 module is the upper or the lower one. Navigation is forward-only with no replay, exactly as in the official section. Honesty note: TalkSy's fixed 60% threshold is a practice adaptation of ETS's two-stage adaptive design — it is not the official routing algorithm.",
  timingSec: 420,
  audioParts: [
    {
      key: "part-conv-1",
      label: "Conversation — Student matinee tickets (campus ticket office)",
      directions:
        "Items 5–7. A conversation at a campus ticket office. Take notes as you listen; the recording plays once.",
      script: ST1_CONV_SCRIPT,
    },
    {
      key: "part-ann-1",
      label: "Announcement — Saturday water shutdown (Caldecott Hall)",
      directions: "Items 8–10. One residence-hall announcement. The recording plays once.",
      script: ST1_ANN_SCRIPT,
    },
  ],
  questions: mcqs([
    {
      stem: "Item 1. Listen and choose the most appropriate response.",
      audioScript:
        "Excuse me — is this seat taken? I can't tell if someone's saving it for a friend.",
      options: [
        "The seat is next to the window.",
        "No, it's free — go ahead.",
        "I came to campus by bus today.",
        "This room has forty seats in total.",
      ],
      answer: 1,
      difficulty: 2,
      skills: ["pragmatics"],
      explanation:
        "'Is this seat taken?' is a polite request for permission to sit; the appropriate reply answers the availability question and invites the person to sit. 'The seat is next to the window' describes the seat without ever saying whether the listener may take it.",
    },
    {
      stem: "Item 2. Listen and choose the most appropriate response.",
      audioScript:
        "Hi, it's Sam from study group — I've got your umbrella from the library. I'm heading to the gym around five, or I could leave it at the front desk before then — whatever's easier for you.",
      options: [
        "The front desk before five would be perfect — I've got a class at half past five. Thanks so much!",
        "The gym opens at five o'clock.",
        "Umbrellas are sold in the library shop.",
        "You forgot your umbrella at the library.",
      ],
      answer: 0,
      difficulty: 3,
      skills: ["pragmatics"],
      explanation:
        "Sam offers two hand-over options and asks the listener to choose; the appropriate reply picks one and gives a reason that makes the choice sensible. 'The gym opens at five o'clock' comments on a detail without telling Sam what to actually do with the umbrella.",
    },
    {
      stem: "Item 3. Listen and choose the most appropriate response.",
      audioScript: "I noticed your essay on my desk a week early — it isn't due until the fifteenth. Everything all right?",
      options: [
        "The essay is due on the fifteenth.",
        "Your desk is in the main office.",
        "Yes, everything's fine — my family is travelling that week, so I wanted to get it out of the way.",
        "I finished my essay in one week.",
      ],
      answer: 2,
      difficulty: 3,
      skills: ["pragmatics"],
      explanation:
        "The professor's real question is the gentle 'Everything all right?' — early submissions can signal trouble. The appropriate reply reassures and explains the reason for the early work. Repeating 'The essay is due on the fifteenth' echoes the professor's own words and ignores the concern behind them.",
    },
    {
      stem: "Item 4. Listen and choose the most appropriate response.",
      audioScript:
        "So the shared kitchen's looking a lot better since someone finally dealt with those dishes. Shame about the counter, though — still piled high.",
      options: [
        "Yes, the kitchen looks much better now.",
        "The counter is in the kitchen.",
        "Someone should tell the others to clear their stuff away.",
        "Fair point — they're mine, actually. I'll clear them before I head out.",
      ],
      answer: 3,
      difficulty: 4,
      skills: ["pragmatics", "inference"],
      explanation:
        "The compliment is a setup: the 'shame about the counter' line is an indirect request aimed at the listener. The appropriate reply recognizes the hint, owns the dishes and fixes it. 'Yes, the kitchen looks much better now' agrees with the words and misses the point entirely — the speaker's actual concern is the counter.",
    },
    {
      stem: "Item 5. How can the student get the discounted ticket?",
      group: "part-conv-1",
      options: [
        "By ordering online with her student email address",
        "By booking any performance at least a week in advance",
        "By paying cash on the day of the show",
        "By buying the Saturday matinee in person with her student card",
      ],
      answer: 3,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "The clerk states all three conditions: Saturday matinee only, bought in person, with a student card. 'Ordering online with a student email' is the direct contradiction — online orders pay full price even for students.",
    },
    {
      stem: "Item 6. How much will the student pay for the two tickets altogether?",
      group: "part-conv-1",
      options: [
        "Ten dollars",
        "Twenty-six dollars",
        "Thirty-six dollars",
        "Fifty-two dollars",
      ],
      answer: 2,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "Her own ticket is discounted to ten dollars, but her brother's costs the full twenty-six — ten plus twenty-six is thirty-six. Fifty-two doubles the full price, forgetting that one of the two tickets is discounted.",
    },
    {
      stem: "Item 7. What does the clerk imply about the brother's ticket?",
      group: "part-conv-1",
      options: [
        "The student discount applies to the student's own ticket only, so her brother pays the full price",
        "Family members can buy half-price tickets",
        "The brother may borrow a student card for the discount",
        "Visitors' tickets are cheaper than student tickets",
      ],
      answer: 0,
      difficulty: 3,
      skills: ["inference"],
      explanation:
        "'The discount covers your ticket only — his is twenty-six' restricts the offer to the student herself. Suggesting a borrowed student card contradicts the clerk's condition that the card must be the buyer's own.",
    },
    {
      stem: "Item 8. Why will the water be shut off on Saturday?",
      group: "part-ann-1",
      options: [
        "So a pressure valve in the basement can be replaced",
        "So the water tanks can be cleaned",
        "So the laundry machines on floor two can be repaired",
        "So the roof can be inspected",
      ],
      answer: 0,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "The announcement names the cause: 'while a pressure valve is replaced in the basement.' The locked laundry machines are a consequence of the shutoff, not the reason for it — an easy attribution trap.",
    },
    {
      stem: "Item 9. What are residents advised to do on Friday night?",
      group: "part-ann-1",
      options: [
        "Do their laundry before Saturday",
        "Shower at the Riverside gym",
        "Collect a room key from the office",
        "Fill a bottle or jug with drinking water",
      ],
      answer: 3,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "'Please fill a bottle or jug Friday night if you'll need drinking water' is the Friday instruction. Showering at Riverside is an option for Saturday itself, so option two answers the wrong day.",
    },
    {
      stem: "Item 10. While the water is off, what can residents do?",
      group: "part-ann-1",
      options: [
        "Collect bottled water from the gym",
        "Use the laundry machines on floor two",
        "Shower at the Riverside gym, bringing their room key",
        "Use the basement shower after two p.m.",
      ],
      answer: 2,
      difficulty: 3,
      skills: ["inference", "detail"],
      explanation:
        "'Showers in the Riverside gym remain available all day — bring your room key' is the contingency on offer. The floor-two machines are explicitly locked during the work, so option two states the one thing residents cannot do.",
    },
  ]),
};

// ---------------------------------------------------------------------------
// ADAPTIVE UPPER — Stage 2 upper module scripts
// ---------------------------------------------------------------------------

// Conversation (~129 words, difficulty 4): academic advisor, dropping a
// course — hedged advice and implied recommendations.

const UP_CONV_SCRIPT = `ADVISOR: Come in — it's about your organic chemistry course?
STUDENT: Yeah. Honestly, I'm failing — or I will be. I get the lectures, but the problem sets don't happen. I'm thinking of dropping and retaking next year.
ADVISOR: Before you decide: dropping after week ten leaves a 'W' on your transcript. Grad schools notice those. A tutor, two hours a week, has rescued harder cases.
STUDENT: I tried the drop-in sessions, but they're packed — I leave more confused than I arrive.
ADVISOR: The drop-in centre isn't tutoring — it's triage. I mean a matched tutor, one-on-one, starting where you are. Commit to that, and I'd bet on you passing.
STUDENT: And if it's still not working in three weeks?
ADVISOR: Then we drop it — the withdrawal deadline is the twenty-eighth. Try the tutor first?`;

// Academic talk (~230 words, difficulty 5): gift economies and the potlatch.

const UP_TALK_SCRIPT = `PROFESSOR: In market economies, giving a gift looks like a simple loss: value flows one way, from giver to receiver. Anthropologists in the Pacific Northwest found something stranger. Among the Kwakwaka'wakw — Kwakiutl in the older spelling — status came not from accumulating wealth but from giving it away, spectacularly, at ceremonies called potlatches.
PROFESSOR: A chief might distribute blankets, canoes, food stores in winter. The more lavish the giveaway, the greater the chiefly rank. And here's the twist: far from destroying wealth, potlatching bound the recipients. Gifts created obligation. A rival who accepted your blankets owed you recognition, alliance, or future gifts. Economists would later formalize this as a gift economy: exchange that builds relationships rather than clearing accounts.
PROFESSOR: Marcel Mauss, writing in the nineteen-twenties, called this 'the obligation to reciprocate' and argued that no gift is ever free — the thing given carries a spirit, a claim on the receiver's future conduct. That claim, he argued, is what holds social groups together.
PROFESSOR: Now, a caution before you over-apply this. Not every act of giving creates binding debt — modern birthday presents are weak potlatch. The mechanism matters where the gift is public, valuable, and embedded in ongoing relationships: bride-wealth, ceremonial feasts, patronage. Where those three conditions hold, watch for reciprocity doing the quiet work of politics.
PROFESSOR: So when you hand someone a lavish public gift, ask not only what it costs, but what it obliges.`;

// ---------------------------------------------------------------------------
// ADAPTIVE UPPER — Stage 2 upper module (8 items, 8 raw points)
// ---------------------------------------------------------------------------

export const adaptiveUpperListening: MockSectionSeed = {
  key: "listening",
  title: "Listening — Stage 2 upper module",
  directions:
    "Stage 2 upper module of TalkSy's adaptive Listening practice simulation — reached by scoring 60% or higher on the Stage 1 routing module. Eight harder items: two Listen-and-Choose-a-Response items, a denser campus conversation and an academic talk with faster, more idiomatic speech and harder inference. Navigation is forward-only with no replay. Honesty note: the 60% cut-off is TalkSy's practice adaptation of ETS's two-stage adaptive design — it is not the official routing algorithm.",
  timingSec: 480,
  audioParts: [
    {
      key: "part-conv-1",
      label: "Conversation — To drop or to tutor (academic advising)",
      directions:
        "Items 3–5. A conversation between a student and an academic advisor. Listen for hedged advice and what is implied rather than stated; the recording plays once.",
      script: UP_CONV_SCRIPT,
    },
    {
      key: "part-talk-1",
      label: "Academic talk — Gift economies and the potlatch",
      directions:
        "Items 6–8. An excerpt from a lecture in an anthropology course. The argument builds across signposts; the recording plays once.",
      script: UP_TALK_SCRIPT,
    },
  ],
  questions: mcqs([
    {
      stem: "Item 1. Listen and choose the most appropriate response.",
      audioScript:
        "Thanks for sending the draft early — there's a lot to like here, especially the interviews, though I'd say the framing takes a while to find its feet. Have you thought about leading with the survey data?",
      options: [
        "The interviews are wonderful, aren't they?",
        "I sent the draft a week early.",
        "The survey data took months to collect.",
        "You're right — I'll restructure the opening and lead with the survey results, then let the interviews support them.",
      ],
      answer: 3,
      difficulty: 4,
      skills: ["pragmatics", "inference"],
      explanation:
        "The professor's praise is a cushion for a criticism and a concrete suggestion; the appropriate reply hears all three parts and acts on the suggestion. 'The interviews are wonderful, aren't they?' latches onto the flattery and skips the actual feedback — exactly what the softening was designed to slip past.",
    },
    {
      stem: "Item 2. Listen and choose the most appropriate response.",
      audioScript:
        "Look, don't take this the wrong way, but when you cook at midnight, could you keep the smoke alarm in mind? Third time this week the whole floor has smelled like burnt toast.",
      options: [
        "I never burn anything.",
        "Oh no — I'm sorry. I'll cook earlier, or at least open the window and keep an eye on the toaster.",
        "The smoke alarm is on the ceiling.",
        "Toast is available in the dining hall until ten.",
      ],
      answer: 1,
      difficulty: 5,
      skills: ["pragmatics", "inference"],
      explanation:
        "'Don't take this the wrong way' flags a complaint; the smoke-alarm idiom and the burnt-toast detail are an indirect request to change the behaviour. The appropriate reply apologises and offers both fixes. 'I never burn anything' denies the politely implied accusation — a refusal to hear the message the hedging softened.",
    },
    {
      stem: "Item 3. What does the student come to discuss?",
      group: "part-conv-1",
      options: [
        "Whether to drop his organic chemistry course before the withdrawal deadline",
        "How to take better notes during chemistry lectures",
        "Whether chemistry is required for his degree programme",
        "How to file a complaint about the drop-in help centre",
      ],
      answer: 0,
      difficulty: 4,
      skills: ["purpose"],
      explanation:
        "He lays it out at once: the lectures are fine, the problem sets 'don't happen', and he is 'thinking of dropping and retaking next year' — the meeting weighs that decision. He mentions the drop-in centre only to explain a failed attempt, never to complain about it.",
    },
    {
      stem: "Item 4. What does the advisor mean when she says the drop-in centre 'isn't tutoring — it's triage'?",
      group: "part-conv-1",
      options: [
        "The drop-in centre will be closed for the rest of the term",
        "Crowded, quick-fix help sessions are not the same as the sustained one-on-one tutoring she is proposing",
        "The student should stop attending chemistry lectures",
        "The student's confusion is normal at that stage of the course",
      ],
      answer: 1,
      difficulty: 4,
      skills: ["inference", "academic-vocab"],
      explanation:
        "'Triage' — emergency sorting, not treatment — reframes his bad experience: packed drop-in sessions cannot do what a matched tutor can, so his failure there is no evidence against tutoring. Nothing suggests a closure, and her point is a contrast, not reassurance about his level.",
    },
    {
      stem: "Item 5. What will the student most likely do next?",
      group: "part-conv-1",
      options: [
        "Drop the course before the weekend",
        "Retake chemistry in summer school instead",
        "Attend two more drop-in sessions first",
        "Try a matched tutor, keeping the twenty-eighth as a back-up deadline for dropping",
      ],
      answer: 3,
      difficulty: 4,
      skills: ["inference"],
      explanation:
        "The advisor's plan is explicit: 'Try the tutor first', with the withdrawal deadline of the twenty-eighth preserved as the escape route. Dropping before the weekend abandons the plan she has just argued for, and more drop-in sessions are exactly what she ruled out.",
    },
    {
      stem: "Item 6. What is the main idea of the talk?",
      group: "part-talk-1",
      options: [
        "Chiefs in the Pacific Northwest were the wealthiest members of their communities",
        "Lavish public giving can build rank and bind recipients through obligation rather than simply destroying wealth",
        "Market economies gradually replaced gift economies in the nineteen-twenties",
        "Anthropologists should avoid judging the customs of other cultures",
      ],
      answer: 1,
      difficulty: 5,
      skills: ["main-idea"],
      explanation:
        "The through-line runs from status through giving, gifts creating obligation, Mauss's 'obligation to reciprocate', to the closing 'what it obliges'. Option one reverses the opening: status came from giving wealth away, not holding it.",
    },
    {
      stem: "Item 7. Why does the professor mention modern birthday presents?",
      group: "part-talk-1",
      options: [
        "To show that not all giving creates binding obligation — the mechanism needs public, valuable, relationship-embedded gifts",
        "To prove that Mauss's theory applies to every culture",
        "To complain about the rising cost of celebrations",
        "To suggest that students exchange gifts more often",
      ],
      answer: 0,
      difficulty: 5,
      skills: ["organization", "inference"],
      explanation:
        "The birthday line follows 'a caution before you over-apply this' — it marks the boundary of the theory, showing where the mechanism is weak. The three conditions that follow (public, valuable, embedded) explain exactly why the potlatch binds and a birthday present barely does.",
    },
    {
      stem: "Item 8. What does the professor mean by 'ask not only what it costs, but what it obliges'?",
      group: "part-talk-1",
      options: [
        "Expensive gifts should generally be avoided",
        "A lavish public gift places a claim on the receiver's future conduct, not just a burden on the giver's wallet",
        "Every gift must be repaid with one of equal value",
        "The price of a gift reveals its true social meaning",
      ],
      answer: 1,
      difficulty: 5,
      skills: ["inference"],
      explanation:
        "The closing line compresses the lecture: the gift 'carries a spirit, a claim on the receiver's future conduct'. 'What it obliges' points at the receiver's debt, not the giver's expense. Equal-value repayment narrows Mauss's point — the obligation is recognition, alliance, or future gifts, not a mirror transaction.",
    },
  ]),
};

// ---------------------------------------------------------------------------
// ADAPTIVE LOWER — Stage 2 lower module scripts
// ---------------------------------------------------------------------------

// Conversation (~124 words, difficulty 2–3): campus gym, first visit.

const LO_CONV_SCRIPT = `RECEPTIONIST: Hi there — welcome to the campus gym. First visit?
STUDENT: Yes! I signed up online last night. What do I need to do to start using the place?
RECEPTIONIST: Easy. Your student card is your membership card — just tap it at the front gate. And before your first workout, you have to book a fifteen-minute orientation. It's free.
STUDENT: What happens in the orientation?
RECEPTIONIST: A trainer shows you the machines and explains the safety rules. It's mostly so nobody gets hurt.
STUDENT: Got it. Can I book one for tomorrow evening? I finish class at six.
RECEPTIONIST: Tomorrow's full until eight, I'm afraid. But there's space at eight fifteen — does that work?
STUDENT: Eight fifteen is fine.
RECEPTIONIST: Great. Last thing: bring trainers — closed shoes. Sandals aren't allowed on the floor.`;

// Academic talk (~214 words, difficulty 2–3): why the sky is blue.

const LO_TALK_SCRIPT = `PROFESSOR: Have you ever wondered why the sky is blue? It's a question a child might ask, but a physicist takes it seriously — and the answer teaches us a lot about light.
PROFESSOR: Sunlight looks white, but it is really a mixture of all colours — red, orange, yellow, green, blue, and violet — each with its own wavelength. Red light travels in long waves; blue and violet travel in short, tight waves.
PROFESSOR: Now, air is mostly empty space, but it is full of tiny gas molecules. When sunlight passes through, those molecules bounce the light around in every direction — scientists call this scattering. Here's the key: short wavelengths scatter far more than long ones. Blue light, with its short waves, is thrown across the whole sky. So wherever you look, blue light arrives at your eyes from every direction — and the sky looks blue.
PROFESSOR: You might ask: why not violet, since violet waves are even shorter? Partly because the sun sends out less violet than blue, and partly because our eyes are simply more sensitive to blue.
PROFESSOR: And sunsets? When the sun sits low, its light travels through much more air before reaching you. Most of the blue is scattered away on that long journey, and the reds and oranges are what survive — which is why the evening sky can glow like fire.`;

// ---------------------------------------------------------------------------
// ADAPTIVE LOWER — Stage 2 lower module (8 items, 8 raw points)
// ---------------------------------------------------------------------------

export const adaptiveLowerListening: MockSectionSeed = {
  key: "listening",
  title: "Listening — Stage 2 lower module",
  directions:
    "Stage 2 lower module of TalkSy's adaptive Listening practice simulation — reached by scoring under 60% on the Stage 1 routing module. Eight friendlier items: two Listen-and-Choose-a-Response items, a clearly paced campus conversation, and a short academic talk on a familiar topic. Situations are everyday, speech is slower and more clearly signposted, and inference steps are kept small. Navigation is forward-only with no replay, as in the official section. Honesty note: the 60% cut-off is TalkSy's practice adaptation of ETS's two-stage adaptive design — it is not the official routing algorithm.",
  timingSec: 480,
  audioParts: [
    {
      key: "part-conv-1",
      label: "Conversation — First visit to the campus gym",
      directions:
        "Items 3–5. A conversation at a campus gym reception desk. The recording plays once.",
      script: LO_CONV_SCRIPT,
    },
    {
      key: "part-talk-1",
      label: "Academic talk — Why the sky is blue",
      directions:
        "Items 6–8. A short lecture from an introductory physics course. The recording plays once.",
      script: LO_TALK_SCRIPT,
    },
  ],
  questions: mcqs([
    {
      stem: "Item 1. Listen and choose the most appropriate response.",
      audioScript: "Hi, welcome to the campus café — what can I get started for you today?",
      options: [
        "The café opened this morning.",
        "Green tea is a healthy drink.",
        "Small cafés are everywhere on campus.",
        "Hi! Could I get a small green tea, please?",
      ],
      answer: 3,
      difficulty: 2,
      skills: ["pragmatics"],
      explanation:
        "The barista's question invites an order; the appropriate reply places one politely. 'Green tea is a healthy drink' comments on a drink instead of ordering one — it answers as if the question were about health.",
    },
    {
      stem: "Item 2. Listen and choose the most appropriate response.",
      audioScript: "Excuse me — do you know when the next bus to the airport leaves?",
      options: [
        "In about ten minutes, from platform three.",
        "The airport is far away.",
        "Buses are cheaper than taxis.",
        "You should take a taxi instead.",
      ],
      answer: 0,
      difficulty: 2,
      skills: ["pragmatics"],
      explanation:
        "A direct information question needs a direct answer with the useful details — time and platform. 'You should take a taxi instead' offers advice that was never requested and ignores the question about the bus.",
    },
    {
      stem: "Item 3. What must the student do before her first workout?",
      group: "part-conv-1",
      options: [
        "Pay a one-time joining fee",
        "Book a free fifteen-minute orientation",
        "Attend a fitness class first",
        "Get a doctor's note",
      ],
      answer: 1,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "The receptionist is clear: 'before your first workout, you have to book a fifteen-minute orientation. It's free.' No fee, class, or medical note is mentioned anywhere in the conversation.",
    },
    {
      stem: "Item 4. What happens during the orientation?",
      group: "part-conv-1",
      options: [
        "A trainer demonstrates the machines and explains the safety rules",
        "The student takes a fitness test",
        "Members choose a personal coach",
        "Staff take a photo for the membership card",
      ],
      answer: 0,
      difficulty: 3,
      skills: ["detail"],
      explanation:
        "'A trainer shows you the machines and explains the safety rules. It's mostly so nobody gets hurt.' The student card doubles as the membership card, so no photo session — or test, or coach choice — is part of it.",
    },
    {
      stem: "Item 5. What does the receptionist tell the student to bring to the gym?",
      group: "part-conv-1",
      options: [
        "A towel",
        "A water bottle",
        "Her class schedule",
        "Closed shoes — sandals are not allowed on the floor",
      ],
      answer: 3,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "The last instruction is 'bring trainers — closed shoes. Sandals aren't allowed on the floor.' Towels and water bottles are reasonable gym items, which is exactly what makes them attractive — but only the shoes are actually mentioned.",
    },
    {
      stem: "Item 6. What is the talk mainly about?",
      group: "part-talk-1",
      options: [
        "The different colours hidden inside sunlight",
        "How air molecules scatter sunlight to make the sky blue — and sunsets red",
        "Why human eyes see some colours better than others",
        "How gas molecules create weather patterns",
      ],
      answer: 1,
      difficulty: 2,
      skills: ["main-idea"],
      explanation:
        "The whole talk builds one explanation: short blue waves scatter across the sky, and the long evening path removes the blue, leaving red. The eye's sensitivity to blue is a brief aside answering 'why not violet', not the subject.",
    },
    {
      stem: "Item 7. According to the professor, why is the sky blue rather than red?",
      group: "part-talk-1",
      options: [
        "Blue light has short waves, which scatter far more than long ones",
        "The air contains more blue gas than red gas",
        "The sun produces mostly blue light",
        "Our eyes cannot see red light clearly",
      ],
      answer: 0,
      difficulty: 2,
      skills: ["detail"],
      explanation:
        "'Short wavelengths scatter far more than long ones. Blue light, with its short waves, is thrown across the whole sky.' 'The sun produces mostly blue light' twists the aside about violet — the sun actually sends out less violet than blue, and the sky's colour comes from scattering, not from the mix of sunlight.",
    },
    {
      stem: "Item 8. According to the professor, why do sunsets look red?",
      group: "part-talk-1",
      options: [
        "The sun cools down toward evening",
        "Clouds reflect the last daylight",
        "Red light travels faster than blue light",
        "The long path through the air scatters the blue away, so reds and oranges are what survive",
      ],
      answer: 3,
      difficulty: 3,
      skills: ["detail", "inference"],
      explanation:
        "'When the sun sits low, its light travels through much more air… Most of the blue is scattered away on that long journey, and the reds and oranges are what survive.' Nothing about speed is said — that is the trap for anyone reasoning outside the lecture.",
    },
  ]),
};
