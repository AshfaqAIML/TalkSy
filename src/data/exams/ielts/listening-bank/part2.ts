/**
 * Audio question bank — Part 2 exercises (an individual speaker on everyday
 * and social topics). PROMPT 44 Part 5.
 *
 * One voice per recording: a tour guide, a community-centre manager, a fun
 * run organiser and a food-bank coordinator. Monologues carry the long-turn
 * feel of the real Part 2 — signposting, self-correction, directions and
 * process language — and every recording is original TalkSy practice
 * material written in the style of the test.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const part2Exercises: BankExercise[] = [
  {
    slug: "ielts-lb-p2-tour",
    title: "The Bellbrook walking tour",
    part: 2,
    difficulty: 1,
    estimatedMinutes: 6,
    accentMix: ["australian"],
    intro:
      "You will hear a tour guide giving the opening talk to a group of visitors at the start of a guided walking tour of a small town. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "marnie", name: "Marnie", role: "guide leading the Bellbrook heritage walking tour", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "marnie", text: "Morning, everyone, and welcome to Bellbrook! I'm Marnie, and I'll be your guide for the next couple of hours — yes, even in this drizzle, so hoods up and let's make a day of it." },
      { id: "s2", speakerId: "marnie", text: "A quick word about the town before we set off. Bellbrook was founded in eighteen fifty-two, at the start of the copper boom, and copper mining kept the place alive for a good thirty years after that." },
      { id: "s3", speakerId: "marnie", text: "When the copper ran out, the town nearly emptied — but the old streets kept their shape, and lately a fair bit of love has gone into restoring them." },
      { id: "s4", speakerId: "marnie", text: "The pride of the restoration is the old mill down by the water. It sat empty for forty years, and it only reopened last spring, as a gallery and café." },
      { id: "s5", speakerId: "marnie", text: "Right, the route. As you come out of the station, the bakery is directly ahead of you, across the little square." },
      { id: "s6", speakerId: "marnie", text: "Our first stop is the mill: the white building on your right as you face the bakery, with the water wheel you can see from the steps." },
      { id: "s7", speakerId: "marnie", text: "From the mill we cross the square. Stop two is the craft market — just past the bakery, on your left, tucked in under the tea rooms. We won't be stopping at the tea rooms today, I'm afraid; the town hall's shut for renovations, so we'll admire that one from the pavement too." },
      { id: "s8", speakerId: "marnie", text: "Our last stop is the museum — the grand grey building at the bottom of the high street, directly opposite the church. There's a little fountain in the corner of the square if you want to fill your bottles on the way." },
      { id: "s9", speakerId: "marnie", text: "We'll finish at the museum at one fifteen, and from there it's a flat five-minute stroll back to the station. Questions? No? Right — hoods up, here we go." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–5",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Bellbrook walking tour — guide's notes" }],
          [{ kind: "text", text: "Town founded: " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Main industry in the past: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Recently restored: the old " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Tour finishes at the museum at " }, { kind: "blank", no: 4 }, { kind: "text", text: " p.m." }],
          [{ kind: "text", text: "Guide today: " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "1852", alternatives: [], numbers: true },
          { no: 2, answer: "copper mining", alternatives: ["copper"], numbers: false },
          { no: 3, answer: "mill", alternatives: [], numbers: false },
          { no: 4, answer: "1.15", alternatives: ["1:15", "one fifteen"], numbers: true },
          { no: 5, answer: "Marnie", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["eighteen fifty-two", "copper mining", "mill", "one fifteen", "Marnie"],
          explanation:
            "The founding date arrives inside the copper-boom sentence as eighteen fifty-two, and the industry itself is copper mining. The restored building is the old mill that reopened last spring, the finish time is one fifteen back at the museum, and the guide introduces herself as Marnie in her very first sentence.",
        },
      },
      {
        id: "q2",
        type: "map",
        label: "Questions 6–8",
        instruction: "Look at the plan of the town centre. Choose the correct letter, A–E, for each stop on the tour.",
        plan: {
          title: "Bellbrook town centre",
          caption: "The walking tour route — write the correct letter next to each numbered stop.",
          grid: [
            [{ room: "Town Hall" }, { room: "Station", label: "Start" }, { room: "Tea Rooms" }],
            [{ room: "First stop", blank: 6 }, { room: "Bakery" }, { room: "Second stop", blank: 7 }],
            [{ room: "Fountain" }, { room: "St Peter's Church" }, { room: "Last stop", blank: 8 }],
          ],
        },
        options: [
          { letter: "A", text: "the town hall" },
          { letter: "B", text: "the old mill" },
          { letter: "C", text: "the tea rooms" },
          { letter: "D", text: "the craft market" },
          { letter: "E", text: "the museum" },
        ],
        correct: ["B", "D", "E"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["come out of the station", "on your right as you face the bakery", "just past the bakery", "directly opposite the church"],
          trap: {
            family: "mention-lure",
            lure: ["tea rooms", "town hall"],
            note: "The tea rooms and the town hall are both named on the walk but neither is a stop — one is skipped for time, the other is closed for renovations, so their letters never answer a blank.",
          },
          explanation:
            "Follow the directions in order: the mill is the white building on the right as you face the bakery from the station, the craft market is just past the bakery on the left, tucked under the tea rooms, and the museum is the grey building directly opposite the church at the bottom of the high street.",
        },
      },
    ],
    transcriptNote:
      "The direction language does the work: on your right as you face the bakery, just past the bakery on the left, and directly opposite the church. The tea rooms and the town hall are named only as places the tour skips.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-facilities",
    title: "The new community hub",
    part: 2,
    difficulty: 3,
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear the manager of a community centre giving a talk to local residents about the centre's newly rebuilt facilities. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 6.",
    speakers: [
      { id: "carol", name: "Carol", role: "manager of the Maltstone Community Hub", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "carol", text: "Good afternoon, everyone, and welcome. I'm Carol, the manager here at the Maltstone Community Hub, and it's genuinely lovely to see the building full again." },
      { id: "s2", speakerId: "carol", text: "As most of you know, the old centre was a damp, dim little place. The rebuild took two years, and we opened the new hub back in March." },
      { id: "s3", speakerId: "carol", text: "Money-wise, the council paid for the shell — but the fittings, every chair and kettle, came out of a crowdfunding campaign that our volunteers ran, which still amazes me." },
      { id: "s4", speakerId: "carol", text: "So, what's inside? Let me walk you through it, because there really is something for everyone." },
      { id: "s5", speakerId: "carol", text: "If you're revising for exams, the silent study room on the first floor is bookable by the hour — no phones, no chatter, proper silence." },
      { id: "s6", speakerId: "carol", text: "Families with toddlers have the soft-play hall every morning until noon: rubber floors, and coffee for the grown-ups just next door." },
      { id: "s7", speakerId: "carol", text: "For the teenagers — and I do mean the noisy ones — there's a small recording studio downstairs. Bands can book it evenings and weekends for next to nothing." },
      { id: "s8", speakerId: "carol", text: "The teaching kitchen runs cookery classes on Tuesdays, wait-list only at the moment, and the rooftop garden is open to everyone whenever the weather behaves." },
      { id: "s9", speakerId: "carol", text: "One more thing: our therapy pool. It runs a few degrees warmer than a standard pool, so members having physiotherapy — bad backs, stiff hips, that sort of thing — book it by the half hour." },
      { id: "s10", speakerId: "carol", text: "And when you're done, the café by the main door is run entirely by volunteers, and every penny it makes goes straight back into the hub." },
      { id: "s11", speakerId: "carol", text: "Do come and find me at the desk if you'd like the full tour. Thank you for coming!" },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–4",
        instruction: "Match each group of people with the facility that suits them best. Choose the correct letter, A–F.",
        items: [
          "Students revising for exams",
          "Parents with small children",
          "Young people who play in bands",
          "Members having physiotherapy",
        ],
        options: [
          "the silent study room",
          "the soft-play hall",
          "the teaching kitchen",
          "the recording studio",
          "the therapy pool",
          "the rooftop garden",
        ],
        correct: [0, 1, 3, 4],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["silent study room", "soft-play hall", "recording studio", "therapy pool", "physiotherapy"],
          trap: {
            family: "mention-lure",
            lure: ["teaching kitchen", "rooftop garden"],
            note: "The teaching kitchen and the rooftop garden are both described at length, but neither is linked to any of the four printed groups — they are the two spare letters.",
          },
          explanation:
            "Each group is matched through its need: revising students get the silent study room, toddlers get the soft-play hall with its rubber floors, noisy teenagers in bands get the cheap recording studio, and physiotherapy members get the warmer therapy pool. The kitchen and the garden belong to nobody on the list.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 5–6",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Money for the hub's equipment came from a " }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "The café is run completely by " }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 5, answer: "crowdfunding campaign", alternatives: ["crowdfunding"], numbers: false },
          { no: 6, answer: "volunteers", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail"],
          keywords: ["crowdfunding campaign", "volunteers"],
          explanation:
            "Carol stresses that the council only paid for the shell, and that the fittings — the equipment — came from the crowdfunding campaign her volunteers ran. The café, in the same spirit, is run entirely — completely — by volunteers, with every penny going back into the hub.",
        },
      },
    ],
    transcriptNote:
      "The matching hinges on paraphrase — revising, toddlers, bands, physiotherapy — while the teaching kitchen and the rooftop garden are deliberate dead ends. The sentences pull out the crowdfunding campaign and the volunteer-run café.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-event",
    title: "Fun run marshal briefing",
    part: 2,
    difficulty: 3,
    estimatedMinutes: 7,
    accentMix: ["nz"],
    intro:
      "You will hear an organiser briefing a group of volunteer marshals before a charity fun run in a park. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 6.",
    speakers: [
      { id: "prue", name: "Prue", role: "organiser of the Kowhai Park charity fun run", accent: "nz" },
    ],
    segments: [
      { id: "s1", speakerId: "prue", text: "Kia ora, everyone — thanks for giving up your Saturday. I'm Prue, one of the organisers, and this is the marshal briefing for the Kowhai Park fun run. Listen closely, because you're the people who'll make it happen." },
      { id: "s2", speakerId: "prue", text: "Grab a plan of the park and mark the checkpoints as I go. The run sets off from the boathouse, bottom left of your plan." },
      { id: "s3", speakerId: "prue", text: "Checkpoint four is where you'll all begin, so let's take it first: the sign-in desk, on the lawn between the boathouse and the toilets. Every runner signs in there before the warm-up." },
      { id: "s4", speakerId: "prue", text: "The route then climbs the west path. Checkpoint one is the water station, at the top of that path, right beside the bandstand." },
      { id: "s5", speakerId: "prue", text: "Checkpoint two is the first-aid tent, at the far corner of the park — just past the bandstand, before the route turns downhill." },
      { id: "s6", speakerId: "prue", text: "Checkpoint three is the finish arch itself, halfway down the east path, directly opposite the café, across the lake. You can't miss it — it's bright orange." },
      { id: "s7", speakerId: "prue", text: "If you've brought a bag, leave it at the baggage tent round the back of the boathouse. That one's not on your plan, so don't go hunting for it." },
      { id: "s8", speakerId: "prue", text: "Now, timing. The newsletter said a ten o'clock start — scrap that. The run goes off at quarter to ten; the warm-up with the fitness crew is at half past nine." },
      { id: "s9", speakerId: "prue", text: "Marshals, please be at your checkpoints by twenty past nine at the latest." },
      { id: "s10", speakerId: "prue", text: "Last thing, and it's the big one. Above everything else today: keep the path clear. Once the run is under way, nothing and nobody stands on the tarmac. Spot a dropped cup, by all means tidy it when you can — but the clear path comes first." },
      { id: "s11", speakerId: "prue", text: "If a runner goes down, stay with them and send the next runner for the first-aid team. Right — questions? No? Brilliant. See you at the sign-in desk." },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–4",
        instruction: "Look at the plan of Kowhai Park. Choose the correct letter, A–E, for each checkpoint.",
        plan: {
          title: "Kowhai Park — fun run route",
          caption: "The fun run route — write the correct letter next to each numbered checkpoint.",
          grid: [
            [{ room: "Checkpoint 1", blank: 1 }, { room: "Bandstand" }, { room: "Checkpoint 2", blank: 2 }],
            [{ room: "Café" }, { room: "Lake" }, { room: "Checkpoint 3", blank: 3 }],
            [{ room: "Boathouse", label: "Start" }, { room: "Checkpoint 4", blank: 4 }, { room: "Toilets" }],
          ],
        },
        options: [
          { letter: "A", text: "the first-aid tent" },
          { letter: "B", text: "the water station" },
          { letter: "C", text: "the sign-in desk" },
          { letter: "D", text: "the baggage tent" },
          { letter: "E", text: "the finish arch" },
        ],
        correct: ["B", "A", "E", "C"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["sign-in desk", "water station", "first-aid tent", "finish arch", "beside the bandstand", "opposite the café"],
          trap: {
            family: "mention-lure",
            lure: ["baggage tent"],
            note: "The baggage tent is described in detail — round the back of the boathouse — but Prue says outright that it isn't on the plan, and no checkpoint letter points to it.",
          },
          explanation:
            "Follow the walk-through: the sign-in desk sits on the lawn between the boathouse and the toilets, the water station is beside the bandstand at the top of the west path, the first-aid tent is just past the bandstand at the far corner, and the finish arch stands opposite the café, across the lake.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What time will the fun run now start?",
        options: ["9.30 a.m.", "9.45 a.m.", "10.00 a.m."],
        correct: [1],
        meta: {
          skills: ["corrections", "numbers", "detail"],
          keywords: ["ten o'clock", "quarter to ten", "half past nine"],
          trap: {
            family: "correction",
            lure: ["ten o'clock", "half past nine"],
            note: "The newsletter's ten o'clock is cancelled in the same breath it is quoted, and half past nine belongs to the warm-up — the run itself goes off at quarter to ten.",
          },
          explanation:
            "Prue scraps the ten o'clock start from the newsletter and replaces it with quarter to ten, which the correct option shows in figures. The half past nine time she mentions belongs to the fitness-crew warm-up, not to the race itself.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Prue say matters most for marshals today?",
        options: [
          "Keeping the running path clear at all times",
          "Picking up dropped cups as quickly as possible",
          "Walking injured runners to the first-aid tent",
        ],
        correct: [0],
        meta: {
          skills: ["gist", "detail", "paraphrase"],
          keywords: ["above everything else", "keep the path clear", "dropped cup"],
          trap: {
            family: "mention-lure",
            lure: ["dropped cup"],
            note: "The dropped-cup job is real but secondary — 'tidy it when you can' — while the clear path is introduced with 'above everything else', which flags the priority.",
          },
          explanation:
            "The phrase 'above everything else' marks the priority: nothing and nobody stands on the tarmac once the run is under way. Cups are a when-you-can job, and a marshal stays with an injured runner and sends the next runner for help rather than walking them in.",
        },
      },
    ],
    transcriptNote:
      "Two catches: the start time is corrected from ten o'clock to quarter to ten, with half past nine belonging to the warm-up, and the baggage tent is described only to be crossed off the plan. The main instruction is flagged by 'above everything else'.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-volunteering",
    title: "Inside the food bank rota",
    part: 2,
    difficulty: 4,
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear the volunteer coordinator of a community food bank explaining to two new volunteers how donations are processed each week. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "deborah", name: "Deborah", role: "volunteer coordinator at the Northgate food bank", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "deborah", text: "Hello, both of you — I'm Deborah, and I coordinate the volunteers here at the Northgate food bank. Before you choose your shifts, let me walk you through what actually happens to a donation, because the whole rota hangs on that journey." },
      { id: "s2", speakerId: "deborah", text: "First of all, arrival. Donations come in through the blue door, the one by the loading bay — mostly on Tuesday and Thursday mornings, when the supermarket collections arrive. One thing we can't accept, by the way, is anything in glass; that's a sorting-hall rule." },
      { id: "s3", speakerId: "deborah", text: "Once that's done, the sorting team takes over. Everything gets weighed, because we log the totals for funding, and then it's sorted into crates — tins with tins, pasta with pasta." },
      { id: "s4", speakerId: "deborah", text: "After that comes the job nobody expects: dating. Every item is checked against its best-before date. We used to write the date on the lid with a marker — we don't do that anymore. Anything getting close gets a red dot instead, so it's used first." },
      { id: "s5", speakerId: "deborah", text: "Shelving follows the same logic: everything is stacked in date order, soonest at the front, so nothing hides at the back and goes to waste." },
      { id: "s6", speakerId: "deborah", text: "Finally, collection. Clients come in on Friday afternoons, and the parcels they take home are built that same morning from whatever's at the front of each shelf." },
      { id: "s7", speakerId: "deborah", text: "Now, the rota itself. The early shift runs from eight thirty, and the late one finishes around six. The rota text comes round on Sunday evenings — reply by Monday lunchtime if you'd like to swap anything." },
      { id: "s8", speakerId: "deborah", text: "Any questions before I find you a crate each? No? Right then — welcome aboard." },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart",
        label: "Questions 1–5",
        instruction: "Complete the flowchart below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "From donation to dinner plate — one week at the food bank" }],
          [{ kind: "text", text: "Donations arrive through the " }, { kind: "blank", no: 1 }, { kind: "text", text: " door" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Volunteers weigh the food and sort it into " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Items close to their best-before date are given a " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Everything is shelved in " }, { kind: "blank", no: 4 }, { kind: "text", text: " order" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Clients collect their parcels every " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "blue", alternatives: [], numbers: false },
          { no: 2, answer: "crates", alternatives: [], numbers: false },
          { no: 3, answer: "red dot", alternatives: [], numbers: false },
          { no: 4, answer: "date", alternatives: [], numbers: false },
          { no: 5, answer: "Friday afternoon", alternatives: ["friday afternoons"], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "paraphrase", "corrections"],
          keywords: ["blue", "crates", "red dot", "date order", "Friday afternoons"],
          trap: {
            family: "correction",
            lure: ["marker", "date on the lid"],
            note: "The marker-on-the-lid system is past practice — 'we don't do that anymore' — so the marking that scores is the red dot that replaced it.",
          },
          explanation:
            "Follow the signal words through the process: first of all the blue door at arrival, then the crates at the sorting stage, then the red dot that replaced the old marker system, then date-order shelving with the soonest at the front, and finally the Friday afternoon collection of freshly built parcels.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        questions: [
          "6. What time does the early shift start?",
          "7. How do volunteers receive their rota each week?",
        ],
        accepted: [
          ["8.30", "8:30", "eight thirty"],
          ["by text", "a text", "text"],
        ],
        meta: {
          skills: ["numbers", "detail"],
          keywords: ["eight thirty", "rota text", "Sunday evenings"],
          explanation:
            "Deborah quotes the early shift as running from eight thirty, and the rota arrives as a text — 'the rota text comes round on Sunday evenings' — so the second answer is by text. Neither the late shift's finish time nor the Monday reply deadline answers either question.",
        },
      },
    ],
    transcriptNote:
      "The flowchart hangs on the process signals — first of all, once that's done, after that — and on one correction: the marker written on the lid is old practice, replaced by the red dot.",
    source: BANK_SOURCE_NOTE,
  },
];
