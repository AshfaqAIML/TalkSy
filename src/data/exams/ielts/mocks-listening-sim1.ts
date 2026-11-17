/**
 * IELTS Listening Masterclass — Full Simulation 1 (PROMPT 44, Part 6).
 *
 * ONE complete 40-question Listening simulation: a single "listening"
 * section with FOUR audio parts (part-1 … part-4), so every part's
 * questions share one "SPEAKER: text" recording, heard exactly once,
 * against the official 30-minute clock.
 *
 * Question-type distribution (official weighting):
 *   Part 1 — transactional conversation: form completion (7) + table (3)
 *   Part 2 — social monologue: notes (4) + plan labelling (4) + 2 MCQs
 *   Part 3 — educational discussion (3 voices): matching (5) + 3 MCQs + 2 multi
 *   Part 4 — academic lecture: one-word note completion (4 + 4) + 2 MCQs
 *
 * Every keyed answer and every listed alternative is actually spoken in
 * that part's recording (digits are spoken as digit groups with
 * "oh"/"double", ordinals as words), and every answer arrives in question
 * order. The trap catalogue is the real test's: dictated spelling,
 * read-backs, a mid-call correction, negated distractors, verbatim-quote
 * decoys and attribution traps where one speaker proposes what another
 * rejects.
 *
 * All material is original EnglishPath practice content written in the
 * style of the exam — never official IELTS examination content.
 */

import type { MockSeed } from "./mocks";
import { mockDescription } from "./mocks";

// ---------------------------------------------------------------------------
// Part 1 — weekend pottery-course enrolment (phone call)
// ---------------------------------------------------------------------------

const SIM1_PART1_SCRIPT = `CLERK: Good morning, Brickyard Arts Centre, bookings line — how can I help?
CALLER: Hello. I've just moved to the area, and I'd love to join the weekend pottery course if there's still a place.
CLERK: Let me look... yes, we have a few places left. I'll take some details, if that's all right — can I start with your name?
CALLER: It's Tamsin Braddock. Braddock is B-R-A, double D, O-C-K.
CLERK: Braddock with two Ds — got it. And a contact number?
CALLER: My mobile — it's oh seven five one, double six, nine oh, two four.
CLERK: Reading that back — oh seven five one, six six, nine oh, two four?
CALLER: That's the one.
CLERK: Now, have you done much pottery before?
CALLER: One taster evening, years ago, at a different studio — so I'd honestly be starting from scratch. Beginner level, really.
CLERK: That's exactly who the Saturday group is for: it's our beginners class, and the tutor is very patient.
CALLER: Saturday suits me. What time does it start? I'll need to plan my train.
CLERK: It begins at nine... no, wait — sorry, I'm reading last term's sheet. From this month the class starts at nine thirty; they pushed it back half an hour so the studio assistant can set up the wheels first.
CALLER: Nine thirty — that's even better for my train. And how much is the course?
CLERK: Seventy-eight pounds for the five Saturdays, all included. There's a single taster option at twelve pounds, but you've already done a taster, so the full course makes more sense.
CALLER: I'll take the full course, please.
CLERK: Lovely. You'll be in Studio 2 — that's the ground-floor studio. Ignore Studio 1 upstairs; that's where the sculpture group meets.
CALLER: Studio 2, ground floor — got it. Does the fee cover everything, or are there extras?
CLERK: Everything — the clay, the glazes and all the firing are included, so there's nothing more to pay.
CALLER: That's refreshing. Do I need to bring anything myself?
CLERK: Just an old towel. We keep aprons on the hooks by the door, but the wheels splash far more than people expect.
CALLER: Noted. And when would I actually get my pots back?
CLERK: The first batch goes into the kiln on the Thursday, and everything is ready to collect the following Friday — we'll text you.
CALLER: That's very tidy. So: Saturdays at nine thirty, Studio 2, starting this weekend.
CLERK: That's it. You can pay on the day, card or cash. Anything else, Ms Braddock?
CALLER: No — thank you for your help.
CLERK: Our pleasure. See you on Saturday.`;

// ---------------------------------------------------------------------------
// Part 2 — museum reopening briefing (social monologue, one speaker)
// ---------------------------------------------------------------------------

const SIM1_PART2_SCRIPT = `MANAGER: Morning, everyone, and welcome back to a museum that actually opens next week. As you know, the Gullstone Museum has been closed for fourteen months, ever since the storm surge flooded the basement stores, and we welcome the public back on Saturday the fifth of July.
MANAGER: So, what's new? The insurance settlement paid for rather more than new carpets. The centrepiece of the reopening now hangs in the entrance hall: our blue whale, fully reassembled at last.
MANAGER: People keep asking me whether it's a fibreglass replica. It isn't. Every bone is real. The animal washed up on the sands back in nineteen twenty-eight, and during the closure the whole skeleton sat in crates in a warehouse up the hill, while our conservators catalogued each piece. They spent the spring putting it back together, bone by bone, and I promise you it looks magnificent.
MANAGER: Now, staffing. The stewarding rota is comfortably full — thank you all — but the shop is dangerously thin, especially on weekend afternoons. If you can bully a friend into serving a shift or two, I'll be very grateful.
MANAGER: Right, the ground floor. Take a look at the floor plan you're holding. The main doors are behind you at the bottom of the plan; everything I describe is ahead of you, towards the top. Let me walk you round from the door.
MANAGER: The information desk is right beside the entrance doors, on your right — that's where the ticket scanners will live. The lift and the stairs are halfway up on your left, just past the whale's tail. Heading along the right-hand side, halfway to the back, you reach the shop, between the desk and the far corner. The café has moved this year: it now fills the far right corner, right at the back of the building, with a view over the harbour. And across on the left, the fossil gallery runs the whole far left corner.
MANAGER: One room to leave out: the learning room, square in the middle at the back, is still being refitted. It stays shut for now, so keep it off your tours and don't let anyone wander in.
MANAGER: Finally, reopening day itself. The doors open at ten, but I need every steward in the building by half past eight for the morning briefing — no exceptions, even if the sun is shining. Entry is by pre-booked ticket only; nothing is handed out at the door, so don't let anyone queue for a free pass. And lunch is provided in the staff room — the café will be far too busy to feed us.
MANAGER: That's everything from me. Questions? No? Then come through, and let's go and stand under the whale.`;

// ---------------------------------------------------------------------------
// Part 3 — research-methods seminar debrief (two students + tutor)
// ---------------------------------------------------------------------------

const SIM1_PART3_SCRIPT = `TUTOR: Right, Maya, Theo — good seminar this morning, so let's spend fifteen minutes turning it into a project plan. Your study asks why first-year students miss their early lectures. Which of today's methods do you two actually want to use?
THEO: Can I start? The registry already holds the swipe-in records for every module — five years of them. If we can get anonymised attendance percentages, we wouldn't need to count anything ourselves.
MAYA: Would they actually hand that over, though? It feels almost personal — you could identify individuals from the patterns.
TUTOR: Not once the records are fully anonymised, and that's a condition, not a courtesy. The university is used to these requests. Frankly, Theo's right: that dataset would be the backbone of the whole project, so build the study on it.
MAYA: Fine — but it only tells us how many skipped. I could sit at the back of the nine o'clock lectures with a tally counter and watch what really happens: who slips in late, who never arrives at all.
TUTOR: You'd learn the size of the gap, Maya, and the registry has already measured that. Your question is why students stay away, and a clicker can't hear reasons. I'd drop that one.
THEO: Here's a why-method, then. We recruit thirty first-years and get them to keep sleep diaries for a fortnight — late nights on the Thursday, empty seats on the Friday morning. We'd see the pattern right there.
MAYA: Thirty diaries, chased every single morning for two weeks? We'd spend the whole project nagging people to fill them in. The data window is three weeks, and we'd lose two of them to admin.
TUTOR: Maya's right — as a method it eats the calendar. If this were a year-long study, diaries would be lovely. Here, no.
MAYA: So the why has to come from the students themselves.
THEO: Which means a questionnaire. I could have one online by Friday.
MAYA: By Friday? It's coursework crunch — half the first-years I know are underwater. If we wait until after reading week, people will actually have the bandwidth to answer properly.
THEO: ...You've got me there. My flatmate has three deadlines this week and he hasn't seen daylight since Sunday.
TUTOR: Then we agree: launch it in week seven, once reading week has cleared the decks.
MAYA: One more idea. We interview a couple of lecturers — they watch the empty seats every morning, so they must have theories.
THEO: Honestly? Every lecturer I know says the same thing: students stay up too late. We'd be collecting second-hand opinions dressed up as findings — that's a stereotype, not data.
TUTOR: A fair worry, but don't throw the method away entirely. Once the questionnaire results are in, two short interviews could help you interpret what you've found. Keep the idea in your back pocket for the final week.
THEO: In reserve, then.
TUTOR: Exactly. Now, two things from me before you disappear. First: send me your research question in a single sentence by Friday — one sentence, not a paragraph. Second: book the ethics checklist with the department office. It's a formality for anonymised data, but it's a required formality.
MAYA: What about the registry?
TUTOR: I'll write to the registry myself — that's my job, not yours. And leave the questionnaire draft alone until you've both read next week's chapter on question wording.
THEO: One sentence, ethics form, chapter. Got it.
TUTOR: Good. Same time next week, then.`;

// ---------------------------------------------------------------------------
// Part 4 — lecture: the economics of urban transport (academic monologue)
// ---------------------------------------------------------------------------

const SIM1_PART4_SCRIPT = `LECTURER: Good morning. Today's lecture is about the economics of urban transport — who pays to move a city, and what happens when nobody does. I'll begin with congestion.
LECTURER: A crowded road is a strange kind of market. Every extra car slows every other journey, so each driver quietly imposes a cost on all the rest, mostly in lost time. Multiply those lost minutes across a whole workforce and the annual bill reaches billions.
LECTURER: The economist's remedy is road pricing: a daily charge for driving into the centre at busy hours, so that drivers finally face the costs they create. When one capital city introduced such a charge, traffic entering the zone fell by roughly a fifth within a year, and average bus speeds rose. Shopkeepers had feared for their trade, yet the collapse they predicted never arrived — customers simply switched to the bus and kept shopping.
LECTURER: Turning now to public transport. Fares almost never cover a network's full running costs — in most cities they pay barely half — so the gap is bridged by a subsidy drawn from general taxation. Is that money wasted? I would argue the opposite: a subsidised fare carries people to jobs they could not otherwise afford to reach, and those journeys feed the tax base back. On honest accounting, the subsidy largely repays itself.
LECTURER: Before I conclude, land. A new metro line lifts the value of property within walking distance of each new station. Some cities now fund construction by capturing part of that rise — the approach known as land-value capture.
LECTURER: To close: there is no free journey. Every trip is paid for — by the passenger at the fare box, by the taxpayer, or by everyone in lost time. The question a city really answers is not whether to pay, but who. Thank you.`;

// ---------------------------------------------------------------------------
// Simulation 1 — Academic library
// ---------------------------------------------------------------------------

export const listeningFullSimulation1: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Full Simulation 1 (40 questions)",
  kind: "full",
  lengthLabel: "full-length",
  description: mockDescription(
    "A full-length Listening simulation in four parts, exactly as the official paper runs: a pottery-course enrolment phone call, a museum reopening briefing with a floor plan, a three-voice research-methods debrief between two students and their tutor, and a signposted lecture on the economics of urban transport. All 40 questions of the real paper, the full 30-minute clock, and every recording heard exactly once.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Full Simulation 1 (Parts 1–4)",
      directions:
        "This is a complete simulation of the official Listening paper: four recordings in four parts, 40 questions, 30 minutes. Read the questions for each part before you press play — that is the habit the whole masterclass trains. Every recording is played ONCE; there is no replay, exactly as in the real test. Answers follow the order of the questions, so move with the recording and keep one eye on the clock.",
      timingSec: 1800,
      audioParts: [
        {
          key: "part-1",
          label: "Part 1 — Pottery course enrolment (phone call)",
          directions:
            "Questions 1–10. Read the form and the summary table before you press play; the recording is played once. Questions 1–7 take ONE WORD AND/OR A NUMBER for each answer; questions 8–10 take ONE WORD ONLY.",
          script: SIM1_PART1_SCRIPT,
        },
        {
          key: "part-2",
          label: "Part 2 — Museum reopening briefing (monologue)",
          directions:
            "Questions 11–20. Read the notes, the floor plan and both multiple-choice questions first, then play the recording once. For questions 15–18, label the plan with the correct letters, A–E.",
          script: SIM1_PART2_SCRIPT,
        },
        {
          key: "part-3",
          label: "Part 3 — Research-methods debrief (two students and a tutor)",
          directions:
            "Questions 21–30. You will hear three voices — two students and their tutor. Read the matching task and the questions before you press play; the recording plays once, and answers arrive in question order. Track who decides what: several wrong options quote one speaker's proposal that another speaker rejects.",
          script: SIM1_PART3_SCRIPT,
        },
        {
          key: "part-4",
          label: "Part 4 — Lecture: the economics of urban transport",
          directions:
            "Questions 31–40. One speaker delivers an academic lecture with clear signposts. Questions 31–38 are note completion — ONE WORD ONLY for each answer; questions 39–40 are multiple choice on the lecturer's stance. The recording plays once.",
          script: SIM1_PART4_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–7. Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context: `BRICKYARD ARTS CENTRE — weekend pottery course
Name: Tamsin ___ (1)
Contact number: ___ (2)
Level: ___ (3)
Day of class: ___ (4)
Start time: ___ (5) a.m.
Course fee: £ ___ (6)
Room: Studio ___ (7)`,
            blanks: [
              { answer: "Braddock", alternatives: ["braddock"] },
              { answer: "0751 669 024", alternatives: ["0751669024", "0751 66 9024"] },
              { answer: "beginners", alternatives: ["beginner"] },
              { answer: "Saturday", alternatives: [] },
              { answer: "9.30", alternatives: ["9:30", "930", "nine thirty"] },
              { answer: "78", alternatives: ["seventy-eight", "seventy eight"] },
              { answer: "2", alternatives: ["two", "studio 2"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "Braddock", alternatives: ["braddock"] },
              { answer: "0751 669 024", numbers: true, alternatives: ["0751669024", "0751 66 9024"] },
              { answer: "beginners", alternatives: ["beginner"] },
              { answer: "Saturday" },
              { answer: "9.30", numbers: true, alternatives: ["9:30", "930", "nine thirty"] },
              { answer: "78", numbers: true, alternatives: ["seventy-eight", "seventy eight"] },
              { answer: "2", numbers: true, alternatives: ["two", "studio 2"] },
            ],
          },
          points: 7,
          skills: ["spelling", "numbers", "correction-awareness", "detail"],
          difficulty: 1,
          explanation:
            "The surname is dictated letter by letter — B-R-A, double D, O-C-K — and the mobile is read out in digit groups and repeated back, so write exactly what you hear. The caller calls herself beginner level, and the class day is Saturday. The start time is the correction trap: the clerk first says nine, then switches to nine thirty on the new timetable, and the closing summary confirms nine thirty. The fee is seventy-eight pounds — not the twelve-pound taster — and the group meets in Studio 2 on the ground floor.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 8–10. Complete the table below. Write ONE WORD ONLY for each answer.",
          payload: {
            context: `Course summary — Brickyard Arts Centre
Course fee covers: all clay, glazes and ___ (8)
What to bring: an old ___ (9)
First fired pots ready to collect: the following ___ (10)`,
            blanks: [
              { answer: "firing", alternatives: [] },
              { answer: "towel", alternatives: [] },
              { answer: "Friday", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [{ answer: "firing" }, { answer: "towel" }, { answer: "Friday" }],
          },
          points: 3,
          skills: ["detail", "note-taking", "paraphrase"],
          difficulty: 2,
          explanation:
            "The clerk lists what the fee includes — the clay, the glazes and all the firing — so the first blank is firing. The only thing to bring is an old towel, because aprons hang by the door. The kiln runs on the Thursday, which is the trap, but the pots are ready to collect the following Friday, and the text message confirms it.",
        },
        {
          order: 3,
          group: "part-2",
          type: "FILL_BLANK",
          stem: "Questions 11–14. Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context: `GULLSTONE MUSEUM — reopening briefing
Closed for ___ (11) months after the flood
Reopens to the public: Saturday ___ (12) July
Reopening centrepiece: a whale ___ (13) hanging in the entrance hall
Volunteers needed urgently: mainly in the ___ (14)`,
            blanks: [
              { answer: "14", alternatives: ["fourteen"] },
              { answer: "5", alternatives: ["5th", "fifth"] },
              { answer: "skeleton", alternatives: [] },
              { answer: "shop", alternatives: [] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "14", numbers: true, alternatives: ["fourteen"] },
              { answer: "5", numbers: true, alternatives: ["5th", "fifth"] },
              { answer: "skeleton" },
              { answer: "shop" },
            ],
          },
          points: 4,
          skills: ["numbers", "detail", "note-taking"],
          difficulty: 2,
          explanation:
            "Fourteen months of closure and the fifth of July both arrive in the manager's opening sentences, so be writing from the first line. The centrepiece is the whale skeleton — the word appears while she describes the crates in the warehouse — and the staffing gap is the shop, where weekend afternoons are dangerously thin.",
        },
        {
          order: 4,
          group: "part-2",
          type: "MAP_LABEL",
          stem: "Questions 15–18. Label the museum plan below. Write the correct letter, A–E, next to questions 15–18.",
          payload: {
            plan: {
              title: "Gullstone Museum — ground floor",
              caption:
                "You have just entered through the main doors at the bottom of the plan; the back of the building is at the top.",
              grid: [
                [
                  { room: "fossil gallery", blank: 15 },
                  { room: "learning room", label: "Learning room" },
                  { room: "café", blank: 16 },
                ],
                [
                  { room: "lift and stairs", label: "Lift and stairs" },
                  { room: "entrance hall", label: "Entrance hall" },
                  { room: "shop", blank: 17 },
                ],
                [
                  null,
                  { room: "main entrance", label: "Main entrance" },
                  { room: "information desk", blank: 18 },
                ],
              ],
            },
            options: [
              { letter: "A", text: "Fossil gallery" },
              { letter: "B", text: "Shop" },
              { letter: "C", text: "Café" },
              { letter: "D", text: "Learning room" },
              { letter: "E", text: "Information desk" },
            ],
          },
          answer: { labels: ["A", "C", "B", "E"] },
          points: 4,
          skills: ["direction-language", "detail", "paraphrase"],
          difficulty: 3,
          explanation:
            "Walk the plan from the door, as the manager does. The fossil gallery runs the whole far left corner (15 — A); the café fills the far right corner at the back (16 — C); the shop is halfway along the right-hand side (17 — B); and the information desk is immediately on the right of the entrance (18 — E). The learning room (D) is the lettered distractor — described in detail, but still being refitted, so it never scores.",
        },
        {
          order: 5,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 19. Choose the correct letter, A, B or C. What does the manager say about the whale skeleton?",
          payload: {
            options: [
              "It is a replica made of fibreglass.",
              "It was rebuilt from bones kept in storage.",
              "It was bought from a museum abroad.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "negation-distractors"],
          difficulty: 3,
          explanation:
            "The manager kills the rumour directly — the whale is not a fibreglass replica, every bone is real — so option A is a negation trap. The skeleton spent the closure in crates in a warehouse and the conservators put it back together, which is option B. Nothing was bought from anywhere: the animal washed up on the sands in nineteen twenty-eight.",
        },
        {
          order: 6,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 20. Choose the correct letter, A, B or C. What must stewards do on reopening day?",
          payload: {
            options: [
              "Hand out free tickets at the door.",
              "Be inside the museum well before it opens.",
              "Bring a packed lunch with them.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "Every steward must be in the building by half past eight for the briefing — an hour and a half before the doors open at ten. Both remaining options are cancelled by negation: entry is by pre-booked ticket only, so nothing is handed out at the door, and lunch is provided in the staff room because the café will be too busy.",
        },
        {
          order: 7,
          group: "part-3",
          type: "MATCHING",
          stem: "Questions 21–25. You will hear two students and their tutor deciding which research methods to use for a study of lecture attendance. What does the group decide about each method? Write the correct letter, A–E, next to questions 21–25.",
          payload: {
            prompt: "Match each research method to the group's decision about it.",
            items: [
              { id: "q21", text: "attendance records from the university registry" },
              { id: "q22", text: "observing lectures in person" },
              { id: "q23", text: "volunteer sleep diaries" },
              { id: "q24", text: "the online questionnaire" },
              { id: "q25", text: "interviews with lecturers" },
            ],
            options: [
              { id: "A", text: "use it as the study's main source of evidence" },
              { id: "B", text: "keep it in reserve as a possible backup" },
              { id: "C", text: "reject it — too time-consuming" },
              { id: "D", text: "reject it — it does not answer the research question" },
              { id: "E", text: "postpone it until later in the term" },
            ],
          },
          answer: {
            pairs: { q21: "A", q22: "D", q23: "C", q24: "E", q25: "B" },
          },
          points: 5,
          skills: ["matching", "paraphrase", "attribution"],
          difficulty: 3,
          explanation:
            "Track who decides what. The registry records become the backbone of the project, once anonymised — the main source of evidence (21 — A). Sitting in with a tally counter is dropped because a clicker cannot hear reasons, so it fails the research question (22 — D). The sleep diaries eat the calendar and are rejected as too time-consuming (23 — C). The questionnaire is definitely happening, but it launches in week seven, after reading week (24 — E). And the lecturer interviews survive Theo's objection only as a reserve method for the final week (25 — B).",
        },
        {
          order: 8,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 26. Choose the correct letter, A, B or C. What is Maya's main concern about the sleep-diary idea?",
          payload: {
            options: [
              "Volunteers would give up keeping their diaries.",
              "Chasing the diaries would swallow the project's time.",
              "The diaries would be too difficult to analyse.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["opinion", "paraphrase"],
          difficulty: 4,
          explanation:
            "Maya objects that chasing thirty volunteers every single morning for a fortnight would mean spending the whole project nagging — a concern about time, since the data window is only three weeks. Option A invents a dropout problem nobody mentions, and option C a difficulty with analysis that is never raised.",
        },
        {
          order: 9,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 27. Choose the correct letter, A, B or C. How does Theo react to Maya's argument about the questionnaire launch?",
          payload: {
            options: [
              "He admits that she is right.",
              "He refuses to change the plan.",
              "He asks the tutor to settle the matter.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["attitude", "agreement-disagreement"],
          difficulty: 4,
          explanation:
            "Theo's opening position is a Friday launch, but Maya's coursework-crunch argument lands: 'You've got me there,' he says, and he backs her up with his flatmate's three deadlines. He concedes the point rather than digging in, and at no point does he pass the decision upwards to the tutor.",
        },
        {
          order: 10,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 28. Choose the correct letter, A, B or C. What is Theo's objection to interviewing lecturers?",
          payload: {
            options: [
              "The lecturers would simply repeat a familiar complaint.",
              "He believes that students stay up too late.",
              "Lecturers would refuse to take part in the study.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["opinion", "attribution", "distractor-awareness"],
          difficulty: 4,
          explanation:
            "Theo's objection is that every lecturer says the same thing, so the pair would be collecting second-hand opinions dressed up as findings — a familiar complaint, not fresh evidence. Option B quotes his illustration word for word: 'students stay up too late' is what he thinks the lecturers all say, not his own belief, so the verbatim match is the trap. Option C invents a refusal that never happens.",
        },
        {
          order: 11,
          group: "part-3",
          type: "MCQ_MULTI",
          stem: "Questions 29–30. Choose TWO letters, A–E. Which TWO things does the tutor ask the students to do before the next tutorial?",
          payload: {
            options: [
              "Send in a one-sentence version of the research question.",
              "Book the ethics checklist with the department office.",
              "Draft the full questionnaire.",
              "Contact the registry about the attendance records.",
              "Interview two lecturers about attendance.",
            ],
            choose: 2,
          },
          answer: { options: [0, 1] },
          points: 2,
          skills: ["paraphrase", "attribution", "distractor-awareness"],
          difficulty: 4,
          explanation:
            "The tutor assigns exactly two tasks: the research question in a single sentence by Friday, and the department's ethics checklist — a required formality even for anonymised data. The other three options all reverse the recording: writing to the registry is the tutor's own job, the questionnaire draft must wait until the pair have read next week's chapter, and the interviews stay in reserve until the final week.",
        },
        {
          order: 12,
          group: "part-4",
          type: "FILL_BLANK",
          stem: "Questions 31–34. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context: `THE ECONOMICS OF URBAN TRANSPORT — the problem and the charge
On a crowded road, each driver's cost to everyone else is measured in ___ (31)
The economists' remedy: road ___ (32)
In one city, traffic entering the charged zone fell by about a ___ (33)
Shopkeepers had feared the charge would damage their ___ (34)`,
            blanks: [
              { answer: "time", alternatives: [] },
              { answer: "pricing", alternatives: [] },
              { answer: "fifth", alternatives: [] },
              { answer: "trade", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [{ answer: "time" }, { answer: "pricing" }, { answer: "fifth" }, { answer: "trade" }],
          },
          points: 4,
          skills: ["academic-vocab", "note-taking", "paraphrase"],
          difficulty: 4,
          explanation:
            "The lecture opens with congestion and the cost each extra driver imposes on all the rest, mostly in lost time. The remedy is road pricing; after one capital city introduced the charge, traffic entering the zone fell by roughly a fifth, and the shopkeepers who had feared for their trade were proved wrong. Every answer is a single spoken word, delivered in note order.",
        },
        {
          order: 13,
          group: "part-4",
          type: "FILL_BLANK",
          stem: "Questions 35–38. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context: `THE ECONOMICS OF URBAN TRANSPORT — public transport and land
Fares cover barely half of a network's running ___ (35)
The gap is bridged by a subsidy from general ___ (36)
Subsidised fares carry people to ___ (37) they could not otherwise reach
A new metro line raises the value of nearby ___ (38)`,
            blanks: [
              { answer: "costs", alternatives: [] },
              { answer: "taxation", alternatives: [] },
              { answer: "jobs", alternatives: [] },
              { answer: "property", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [{ answer: "costs" }, { answer: "taxation" }, { answer: "jobs" }, { answer: "property" }],
          },
          points: 4,
          skills: ["academic-vocab", "note-taking", "paraphrase"],
          difficulty: 5,
          explanation:
            "The second half is denser and more paraphrased: fares pay barely half of a network's full running costs; the gap is bridged by a subsidy drawn from general taxation; the payoff is that subsidised fares carry people to jobs they could not otherwise afford to reach; and a new metro line lifts the value of property near each station. Listen for meaning, not matching words.",
        },
        {
          order: 14,
          group: "part-4",
          type: "MCQ_SINGLE",
          stem: "Question 39. Choose the correct letter, A, B or C. What does the lecturer say about the results of the road charge?",
          payload: {
            options: [
              "It damaged the city's shops more than predicted.",
              "Its benefits arrived despite the shopkeepers' fears.",
              "It failed to reduce traffic in the charged zone.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["stance", "paraphrase"],
          difficulty: 5,
          explanation:
            "The lecturer reports that the charge cut zone traffic by roughly a fifth and raised bus speeds, while the collapse the shopkeepers predicted never arrived — customers simply switched to the bus. The benefits therefore confounded the critics, which is option B. Option A reverses the outcome, and option C contradicts the traffic figures outright.",
        },
        {
          order: 15,
          group: "part-4",
          type: "MCQ_SINGLE",
          stem: "Question 40. Choose the correct letter, A, B or C. What does the lecturer conclude about subsidising public transport?",
          payload: {
            options: [
              "It earns back its cost through wider economic gains.",
              "It should be replaced by higher fares.",
              "Its true value is impossible to measure.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["stance", "hedging"],
          difficulty: 5,
          explanation:
            "Her conclusion is hedged but clear: the subsidy carries people to jobs they could not otherwise afford to reach, those journeys feed the tax base back, and on honest accounting it largely repays itself — gains that justify the cost. She never argues for higher fares, and she treats the value as measurable, which rules out both remaining options.",
        },
      ],
    },
  ],
};
