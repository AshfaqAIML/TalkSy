/**
 * TOEFL Reading Practice Library — Read in Daily Life, batch 1 (PROMPT 49).
 *
 * Seven foundation exercises (difficulty 1). Short everyday and campus texts
 * — notices, emails, schedules, signs, adverts, threads, posters — read for
 * gist, purpose, detail and implication. 4 multiple-choice items per
 * exercise; every item carries verbatim text evidence, a 25+ word teaching
 * explanation and 1–2 of the seven tracked library skills.
 *
 * All texts are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const daily1Exercises: ToeflReadingExercise[] = [
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-01",
    title: "Quiet floor, fourth level",
    textKind: "Campus notice",
    scene: "library lift lobby",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "LIBRARY — QUIET STUDY FLOOR",
        paragraphs: [
          "The fourth level of the Greenfield Library is now a silent study area. No group work, no phone calls, and headphones at low volume only. Please use levels one and two for discussion and group projects. Borrowing desk on level one; returns on any level. The quiet floor is open during all library hours, including exam weeks, and opens fifteen minutes earlier than the rest of the building on those days. Silent means silent: whispered conversations belong on the lower floors, and if you must take a call, please step into the stairwell. Water in sealed bottles is welcome; hot food is not. Staff walk the level every hour and will ask anyone who keeps talking to move. — Library Services",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the main purpose of this notice?",
        options: [
          "To announce a new rule for one level of the library",
          "To list all the books available on the fourth level",
          "To advertise group study rooms",
          "To explain why the library is closed during exam weeks",
        ],
        correct: 0,
        lure: 3,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "The fourth level of the Greenfield Library is now a silent study area" }],
          explanation:
            "The whole notice exists to introduce one change: the fourth level has become a silent area, and the rules that follow all serve that single announcement.",
          trap: { family: "mention-lure", note: "Exam weeks are mentioned, but only to say the quiet floor stays open then — not to announce closures." },
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Where should students go to work on a group project?",
        options: [
          "The fourth level",
          "Levels one and two",
          "The borrowing desk",
          "The returns shelf on any level",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Please use levels one and two for discussion and group projects" }],
          explanation:
            "The notice sends group work downstairs because the fourth level is silent; levels one and two are named as the discussion floors in the second sentence of the rule list.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the notice say about headphones?",
        options: [
          "They are banned on all levels",
          "They may be used at low volume on the quiet floor",
          "They can be borrowed from level one",
          "They are only allowed during exam weeks",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "headphones at low volume only" }],
          explanation:
            "The quiet floor rule is low volume only, not a ban; the notice permits headphones under that condition, which is the small-print distinction the item tests.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "The phrase 'including exam weeks' tells the reader that the quiet floor",
        options: [
          "closes earlier during exams",
          "requires booking during exams",
          "keeps its normal hours during exams",
          "is reserved for staff during exams",
        ],
        correct: 2,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "The quiet floor is open during all library hours, including exam weeks" }],
          explanation:
            "If the floor is open during all hours including exam weeks, its timetable does not change for exams; the reader concludes this without the notice spelling it out, which is the one-step inference.",
        },
      },
    ],
    vocabulary: [
      { word: "silent", partOfSpeech: "adjective", definition: "making no noise; here, a rule of no talking" },
      { word: "volume", partOfSpeech: "noun", definition: "how loud a sound is" },
      { word: "borrowing", partOfSpeech: "noun", definition: "taking library items out temporarily" },
      { word: "returns", partOfSpeech: "noun", definition: "bringing borrowed items back" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-02",
    title: "The missed statistics lecture",
    textKind: "Email",
    scene: "university inbox, Tuesday morning",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "Subject: Tuesday's statistics lecture",
        paragraphs: [
          "Hi Professor Adeyemi, I'm sorry I missed Tuesday's statistics lecture — my bus was diverted for the marathon and I waited fifty minutes at a closed stop. Could you tell me which chapters the lecture covered, and whether the problem set is due this Friday or next? I have checked the portal but the deadline there still shows the old date. I could not find a recording of the lecture on the course page either. Also, is it all right if I borrow someone's notes before the seminar, and has the seminar time moved from ten to nine thirty? The portal disagrees with itself about that too. Many thanks, Tomas (Year 2, Econometrics).",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why does Tomas write this email?",
        options: [
          "To apologise for missing a seminar and ask for a new date",
          "To explain an absence and ask several practical questions",
          "To complain about the bus company's marathon diversion",
          "To submit the statistics problem set late",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "Could you tell me which chapters the lecture covered, and whether the problem set is due this Friday or next?" }],
          explanation:
            "Tomas explains why he was absent and then asks three practical questions: the chapters, the true deadline, and permission to borrow notes. The apology serves the requests, and no complaint or late submission is involved.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why did Tomas miss the lecture?",
        options: [
          "He overslept",
          "He was at the marathon",
          "Road closures delayed his bus",
          "He was attending a different seminar",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "my bus was diverted for the marathon and I waited fifty minutes at a closed stop" }],
          explanation:
            "The bus was diverted and never came; Tomas waited at a stop the marathon had closed. He was not running, spectating or sleeping — the diversion is the cause, and the marathon is only the reason for it.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What problem does Tomas have with the portal?",
        options: [
          "It will not let him log in",
          "It shows an out-of-date deadline",
          "It has no record of his course",
          "It charges a fee for extensions",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "I have checked the portal but the deadline there still shows the old date" }],
          explanation:
            "The portal disagrees with what he suspects is the real deadline; it displays the old date, which is exactly why he asks the professor to confirm which Friday the work is actually due.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What can be inferred about Tomas from the closing of the email?",
        options: [
          "He is a first-year student",
          "He expects the professor to know which course he is on",
          "He has already finished the problem set",
          "He attended the seminar instead of the lecture",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "Tomas (Year 2, Econometrics)" }],
          explanation:
            "Signing off with his year and course only helps if the professor teaches several groups; the signature implies he expects to be identifiable that way, and Year 2 rules out the first-year option directly.",
        },
      },
    ],
    vocabulary: [
      { word: "diverted", partOfSpeech: "verb (past)", definition: "sent along a different route" },
      { word: "problem set", partOfSpeech: "noun", definition: "a collection of exercises set as coursework" },
      { word: "portal", partOfSpeech: "noun", definition: "the university's online system" },
      { word: "deadline", partOfSpeech: "noun", definition: "the latest time work can be handed in" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-03",
    title: "Autumn fitness classes",
    textKind: "Schedule",
    scene: "sports centre noticeboard",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "SPORTS CENTRE — AUTUMN TIMETABLE",
        paragraphs: [
          "Morning classes run 7:00–7:45 a.m. before the centre opens to the public at 8:00; student members only before 8:00. Monday: Swim drills (pool). Tuesday: Core circuit (Studio 2). Wednesday: Swim drills (pool). Thursday: Spin (Studio 1) — bring your own towel; studio cycles are cleaned between classes. Friday: No morning class; the pool is cleaned on Friday mornings and reopens at noon. Evening classes (6:30 p.m.) are open to everyone: Yoga on Monday and Wednesday, Boxfit on Tuesday, both in Studio 2. Lockers in the corridor take a twenty-pence coin, returned after use. The centre closes at ten on weekdays.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Who may attend the 7:00 a.m. classes?",
        options: [
          "Anyone who buys a ticket",
          "Student members only",
          "Staff only",
          "Anyone who arrives before 8:00",
        ],
        correct: 1,
        lure: 3,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "student members only before 8:00" }],
          explanation:
            "The small print restricts the pre-8:00 morning classes to student members; arriving early is not enough, and the lure confuses the opening hour with the entry rule.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why is there no morning class on Friday?",
        options: [
          "The instructors are training",
          "The studios are being repainted",
          "The pool is cleaned that morning",
          "Membership numbers were too low",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the pool is cleaned on Friday mornings and reopens at noon" }],
          explanation:
            "The timetable itself gives the reason: Friday morning is pool cleaning time. The item checks whether the reader can find a cause stated in a schedule rather than guessing one.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What must students bring to the Thursday spin class?",
        options: [
          "Their own bike",
          "A towel",
          "Cleaning spray",
          "A membership card",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Spin (Studio 1) — bring your own towel" }],
          explanation:
            "The bikes are provided and cleaned by the centre; the only personal item the schedule asks for is a towel, and the cleaning happens between classes without member help.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Which evening class can a member of the public attend?",
        options: [
          "Wednesday morning swim drills",
          "Tuesday evening Boxfit",
          "Thursday morning spin",
          "Friday morning class",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "Evening classes (6:30 p.m.) are open to everyone: Yoga on Monday and Wednesday, Boxfit on Tuesday" }],
          explanation:
            "The timetable splits its audience: mornings belong to student members, evenings are open to everyone. Only the Tuesday evening Boxfit option sits on the open side of that line.",
        },
      },
    ],
    vocabulary: [
      { word: "drills", partOfSpeech: "noun", definition: "repeated practice exercises" },
      { word: "spin", partOfSpeech: "noun", definition: "an indoor cycling class" },
      { word: "circuit", partOfSpeech: "noun", definition: "a series of exercise stations done in rotation" },
      { word: "timetable", partOfSpeech: "noun", definition: "a plan of when events happen" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-04",
    title: "Rules of the lido",
    textKind: "Sign",
    scene: "community outdoor pool entrance",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "LIDO RULES",
        paragraphs: [
          "Swim only when a lifeguard is on the chair. Diving is not permitted at the shallow end; the pool floor slopes suddenly after two metres. Children under twelve must be accompanied by an adult at all times, including at the kiosk. Inflatable rings are allowed in the marked lane only. The lido closes at 7 p.m. in summer and at dusk in winter. Whistle once: attention. Whistle twice: leave the water immediately. Swim hats are required for long hair, and the kiosk sells hot drinks until half an hour before closing. Groups of ten or more should telephone ahead in winter.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Under what condition may people swim at this pool?",
        options: [
          "Only in summer",
          "Only when a lifeguard is present",
          "Only in the marked lane",
          "Only after 7 p.m.",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "Swim only when a lifeguard is on the chair" }],
          explanation:
            "The first rule conditions all swimming on lifeguard supervision. Season and closing time appear later, but neither replaces the supervision rule that opens the sign.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why is diving banned at the shallow end?",
        options: [
          "The water is too cold there",
          "The floor drops away suddenly",
          "Inflatable rings get in the way",
          "The lifeguard cannot see that end",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the pool floor slopes suddenly after two metres" }],
          explanation:
            "The sign gives its own reason: the sudden slope makes diving dangerous. The reason clause after the semicolon is what the reader must connect to the ban in the first half.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "A parent sends an eleven-year-old to the kiosk alone. According to the sign, this is",
        options: [
          "allowed, because the kiosk is outside the pool",
          "not allowed, wherever the child goes",
          "allowed if a whistle has not sounded",
          "not allowed only in winter",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "must be accompanied by an adult at all times, including at the kiosk" }],
          explanation:
            "The rule follows the child, not the pool edge; 'at all times, including at the kiosk' extends supervision beyond the water, so the scenario breaks the rule as written.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What should swimmers do when they hear two whistles?",
        options: [
          "Swim to the shallow end",
          "Wait for the lifeguard",
          "Get out of the water at once",
          "Collect their rings",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Whistle twice: leave the water immediately" }],
          explanation:
            "The sign's final lines are a code: one whistle asks for attention, two order an immediate exit. The item tests whether the reader can hold a small code and apply it.",
        },
      },
    ],
    vocabulary: [
      { word: "lido", partOfSpeech: "noun", definition: "an outdoor swimming pool" },
      { word: "lifeguard", partOfSpeech: "noun", definition: "the person whose job is to watch swimmers" },
      { word: "shallow", partOfSpeech: "adjective", definition: "not deep; the shallow end is the low-water end of the pool" },
      { word: "kiosk", partOfSpeech: "noun", definition: "a small shop or stall" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-05",
    title: "Second-hand bicycle for sale",
    textKind: "Advertisement",
    scene: "student union marketplace page",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "FOR SALE: commuter bicycle",
        paragraphs: [
          "Six-year-old steel-framed commuter, single owner, stored indoors. Seven gears, hub dynamo lights that work while you pedal, mudguards, and a rear rack that takes panniers. New chain and brake pads fitted last month; tyres good for two more seasons. Small tear on the saddle, otherwise honest wear for its age. Rides beautifully between campuses. 180 or near offer. I deliver within the university district if you cover the bus fare. No time-wasters, please — the last three viewings taught me to add that. Viewings any evening after six; message me here rather than calling. The frame number is filed with the university cycle registration scheme, so it can be traced if it is ever lost.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What kind of text is this, and what is it mainly doing?",
        options: [
          "A review comparing several bicycles",
          "A seller's description aimed at persuading a buyer",
          "A repair manual for commuter bikes",
          "A notice about campus bus services",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "Rides beautifully between campuses. 180 or near offer." }],
          explanation:
            "One bike is described by its owner with a price and delivery terms; the flattering details and the invitation to make offers mark this as a persuasive sale advertisement.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Which feature works while the rider pedals?",
        options: [
          "The rear rack",
          "The gears",
          "The lights",
          "The brake pads",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "hub dynamo lights that work while you pedal" }],
          explanation:
            "The dynamo generates power from pedalling, so the lights run without batteries; the rack carries luggage, and the gears and brakes are ordinary fittings mentioned nearby.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "The phrase 'honest wear for its age' suggests the bike",
        options: [
          "looks newer than it is",
          "shows normal use for six years",
          "has never been used",
          "needs a full repaint",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "Small tear on the saddle, otherwise honest wear for its age" }],
          explanation:
            "'Honest wear' admits real use without hiding it; a six-year-old commuter with one saddle tear is exactly that, and the seller uses the phrase to be credible rather than to flatter the bike.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "On what condition will the seller deliver the bike?",
        options: [
          "If the buyer pays full price",
          "If the buyer pays the seller's bus fare",
          "Only within the university district and for free",
          "Only after a third viewing",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "I deliver within the university district if you cover the bus fare" }],
          explanation:
            "Delivery has two parts: a limited area and a condition. The area is the university district, and the condition is that the buyer reimburses the bus fare — neither free nor city-wide.",
        },
      },
    ],
    vocabulary: [
      { word: "commuter", partOfSpeech: "noun", definition: "a person or bike travelling daily between home and work" },
      { word: "dynamo", partOfSpeech: "noun", definition: "a generator powered by the wheels" },
      { word: "mudguards", partOfSpeech: "noun", definition: "panels keeping spray off the rider" },
      { word: "near offer", partOfSpeech: "phrase", definition: "a price close to the one asked" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-06",
    title: "Group project, Thursday?",
    textKind: "Message thread",
    scene: "group chat, four students",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "Project chat — 21:40",
        paragraphs: [
          "Aisha: Can we meet Thursday to assemble the poster? The presentation is Monday and I still have nothing from the results section.",
          "Ben: Thursday is bad for me — I have a lab until six. What about Friday morning?",
          "Aisha: Friday works if we meet early, say nine? The library discussion rooms are free before eleven on Fridays.",
          "Carla: Nine on Friday is fine. Ben, send your results by Thursday night so Aisha can lay out the poster before we meet.",
          "Ben: Deal. I'll upload the graphs Wednesday evening at the latest.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the main topic of this thread?",
        options: [
          "Booking a library room for its own sake",
          "Arranging when the group will assemble its poster",
          "Comparing lab schedules",
          "Choosing a topic for the project",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "Can we meet Thursday to assemble the poster? The presentation is Monday" }],
          explanation:
            "Every message serves one goal: finding a time to put the poster together before Monday. The room booking, the lab clash and the graphs are all steps under that goal, not topics of their own.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why does Ben reject Thursday?",
        options: [
          "He will be travelling",
          "He has a lab until six",
          "He has not finished the graphs",
          "He prefers meeting at nine",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "Thursday is bad for me — I have a lab until six" }],
          explanation:
            "Ben gives one reason only: the lab runs until six on Thursday. The graphs are a separate promise he makes later, and nine o'clock is the group's solution, not his preference.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does Aisha still need for the results section?",
        options: [
          "The library booking",
          "Ben's graphs",
          "Carla's layout",
          "A new topic",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "I still have nothing from the results section" }, { block: 0, paragraph: 3, quote: "Ben, send your results by Thursday night so Aisha can lay out the poster" }],
          explanation:
            "Aisha's opening line pairs with Carla's instruction: the results section depends on Ben's graphs, and once he sends them Aisha can lay out the poster. Connecting the two messages is the comprehension step.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does Ben promise to do?",
        options: [
          "Book the room for Friday",
          "Bring the poster on Monday",
          "Upload the graphs by Wednesday evening",
          "Meet at six on Thursday",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 4, quote: "I'll upload the graphs Wednesday evening at the latest" }],
          explanation:
            "Ben's closing message seals the deal with one commitment: graphs uploaded by Wednesday evening at the latest. The 'at the latest' makes it a deadline, which is what the item checks.",
        },
      },
    ],
    vocabulary: [
      { word: "assemble", partOfSpeech: "verb", definition: "to put together from parts" },
      { word: "results section", partOfSpeech: "noun", definition: "the part of a report presenting findings" },
      { word: "lay out", partOfSpeech: "verb", definition: "to arrange material on a page" },
      { word: "at the latest", partOfSpeech: "phrase", definition: "no later than" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-07",
    title: "International food evening",
    textKind: "Poster",
    scene: "hall of residence corridor",
    difficulty: 1,
    estimatedMinutes: 5,
    blocks: [
      {
        heading: "INTERNATIONAL FOOD EVENING — SATURDAY 7 P.M., COMMON ROOM",
        paragraphs: [
          "Cook a dish from home, or just come and eat. Sign-up sheet on the kitchen door: one line per dish, with your name and where the recipe comes from. Kettles and the oven are ours from five o'clock; bring your own ingredients and containers. The university's food safety rules apply, so nothing with raw eggs, and dishes must be reheated to steaming before serving. Music comes from the common-room system and a long table is provided for serving. If you need fridge space overnight, tell the kitchen by Friday morning. Tickets free for residents, two pounds for guests, all money to the residents' charity.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Who is the poster mainly inviting?",
        options: [
          "Only students who can cook",
          "Residents, whether they cook or only eat",
          "Guests from outside the residence",
          "The university's food safety team",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "Cook a dish from home, or just come and eat" }],
          explanation:
            "The first line offers two ways to take part: cooking or eating. The evening is for residents in either role; guests are welcome but pay, and the safety team only supplies the rules.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What must each cook write on the sign-up sheet?",
        options: [
          "Their name and the dish's origin",
          "The price of their dish",
          "A list of ingredients",
          "Whether they are a resident",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "one line per dish, with your name and where the recipe comes from" }],
          explanation:
            "The sheet asks for exactly two things per line: a name and the recipe's origin. Ingredients matter later under safety rules, but they are not part of the sign-up.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "From what time are the kitchen facilities available?",
        options: [
          "Five o'clock",
          "Seven o'clock",
          "When the oven is free",
          "After the safety check",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Kettles and the oven are ours from five o'clock" }],
          explanation:
            "The poster reserves the kitchen from five o'clock, two hours before the event begins at seven; that two-hour gap is the cooking window the organisers built into the schedule for the cooks.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What happens to the two-pound guest tickets?",
        options: [
          "They pay for the ingredients",
          "They go to the residents' charity",
          "They cover the kitchen hire",
          "They are refunded after the event",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "two pounds for guests, all money to the residents' charity" }],
          explanation:
            "The last clause routes every pound collected to the residents' charity; the ingredients are brought by the cooks, so the ticket money has one stated destination.",
        },
      },
    ],
    vocabulary: [
      { word: "kettle", partOfSpeech: "noun", definition: "a device for boiling water" },
      { word: "ingredients", partOfSpeech: "noun", definition: "the foods a dish is made from" },
      { word: "reheated", partOfSpeech: "verb (past)", definition: "made hot again before serving" },
      { word: "residents", partOfSpeech: "noun", definition: "people living in the hall" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
