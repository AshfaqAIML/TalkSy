/**
 * IELTS Listening Masterclass — flagship full-length simulation 2
 * (PROMPT 44, Part 6, task 7-H2).
 *
 * ONE complete 40-question Listening simulation in the exact shape of the
 * official paper: four recordings (part-1 … part-4), each played ONCE, 40
 * questions, 40 points, the official 30-minute clock. The Listening test is
 * identical for Academic and General Training candidates, so this copy lives
 * in the General Training library while remaining valid preparation for both.
 *
 * Material profile:
 *   Part 1 — dental-practice registration call (new patient): form
 *            completion (7 blanks: dictated surname, birth year, mobile,
 *            first free day, time, fee category, patient reference) plus a
 *            treatment-price table (3 blanks). One mid-call correction trap
 *            on the appointment day.
 *   Part 2 — city-farm volunteer induction, one Australian speaker: notes
 *            (4) + plan labelling A–E on a 3×4 site plan (4 blanks, one
 *            distractor letter) + two multiple-choice questions, one with a
 *            negation distractor.
 *   Part 3 — media-studies debrief on a short documentary, three voices:
 *            task-to-person matching (5, three attribution traps) + three
 *            attitude multiple-choice questions with hedged language + one
 *            choose-TWO from five options.
 *   Part 4 — marine-biology lecture on how whales navigate: one-word note
 *            completion in two blocks (4 + 4) + two multiple-choice
 *            questions on the lecturer's stance. 230–300 words, signposted.
 *
 * Every keyed answer and every listed alternative is actually spoken in that
 * part's recording (digits are spoken as digit groups, years as pairs,
 * references as letter-names and digits), and every answer arrives in
 * question order. Answer keys follow the objective grader's shapes exactly
 * (gradeObjectiveQuestion: FILL_BLANK blanks with alternatives + numbers
 * flags, MAP_LABEL letters array, MATCHING pairs record, MCQ option indices).
 *
 * All material is original EnglishPath practice content written in the style
 * of the exam — never official IELTS examination content.
 */

import type { MockSeed } from "./mocks";
import { mockDescription } from "./mocks";

// ---------------------------------------------------------------------------
// Simulation 2 — scripts
// ---------------------------------------------------------------------------

const SIM2_PART1_SCRIPT = `RECEPTIONIST: Good morning, Willowbrook Dental Clinic, Priya speaking — how can I help?
PATIENT: Hello — I'm new in town and I'd like to register as a patient, please, and book a first check-up while I'm at it.
RECEPTIONIST: Of course, welcome. I'll set up a record for you now — shall I start with your full name?
PATIENT: It's Lenka Kovarik.
RECEPTIONIST: Could you spell the surname for me?
PATIENT: K-O-V-A-R-I-K.
RECEPTIONIST: Kovarik, thank you. And your date of birth?
PATIENT: The fourteenth of March, nineteen eighty-nine.
RECEPTIONIST: Noted. And a contact number?
PATIENT: My mobile — it's oh seven four six, double eight, two nine, one five.
RECEPTIONIST: Let me just read that back to you — oh seven four six, eight eight, two nine, one five?
PATIENT: That's the one.
RECEPTIONIST: Right. Is anything troubling you, or is this a routine visit?
PATIENT: Routine, mostly — though one of my old fillings aches when I drink anything cold.
RECEPTIONIST: I'll flag that for the dentist. New patients see Dr Osei, and her first free morning is Tuesday the ninth... no, sorry — I'm reading the wrong column. Tuesday's fully booked. Her first free morning is Thursday the eleventh, at quarter to eleven — ten forty-five.
PATIENT: Thursday works for me.
RECEPTIONIST: Excellent. And which fee category shall I put you in — standard, concession or student?
PATIENT: Student, please — I'm at the university here.
RECEPTIONIST: Student band, noted. You'll get a reminder text the evening before, and your patient reference is M-R-four-two-eight — quote that whenever you ring us.
PATIENT: M-R-four-two-eight, got it.
RECEPTIONIST: Last thing, so there are no surprises — the student-band prices. A first check-up is thirty-five pounds, a scale and polish is forty-eight, a small filling comes to sixty-seven, and an emergency call-out outside opening hours is a hundred and twenty.
PATIENT: Reasonable enough. Thanks for your help, Priya.
RECEPTIONIST: Any time. So that's Thursday at ten forty-five with Dr Osei — we'll see you then, Ms Kovarik.
PATIENT: See you Thursday.`;

const SIM2_PART2_SCRIPT = `FARM MANAGER: G'day, everyone, and welcome to Kirra Creek Community Farm — I'm Tam, the farm manager, and this is your induction, so find a patch of shade and bear with me for ten minutes.
FARM MANAGER: A bit of history first: the farm started back in twenty eleven, on the site of a bowling club the council had given up on, and it has been growing ever since — these days we're around eighty regular volunteers, plus you lot, and the animals refuse to count themselves.
FARM MANAGER: The big job this month is mulching around the young citrus trees we planted in winter, down the far end — a summer without mulch is a sad, thirsty tree.
FARM MANAGER: We run this induction every second Sunday, so if you meet someone keen to join, point them at the next one.
FARM MANAGER: Right — grab your site plan. You've all just come through the main gate at the bottom, so everything I describe is from that direction, and I'll walk the plan from the far end back towards you.
FARM MANAGER: In the back left corner is the duck pond — you'll hear it before you see it, and yes, the ducks do bite.
FARM MANAGER: The barn is the big cream shed straight ahead of you at the top of the path — that's where we gather at smoko, and where the first-aid kit lives.
FARM MANAGER: In the back right corner, behind the orchard — the old apple and plum stand, already marked on your plan — you'll find the pig paddock, home to Blossom and Nugget, our two saddleback sows.
FARM MANAGER: Coming back down towards the gate: on your right, past the barn, you'll pass the vegetable plots — the raised beds — with the tool shed just beyond them. The tool shed's already marked on your plan too.
FARM MANAGER: And straight ahead of you as you come through the gate sit the lawn and the compost corner, either side of the path.
FARM MANAGER: Now, two practical things before I let you loose. Produce first: we don't sell at the weekend market any more — that wrapped up last year. These days the veg boxes go out from the shelf by the main gate, and folk collect them on Saturday mornings.
FARM MANAGER: Second, footwear: closed-in shoes, please — after the pitchfork incident, the committee banned thongs and bare feet — flip-flops, if you're wondering — and no, I'm not telling that story twice.
FARM MANAGER: The farm provides gloves, tools and endless tea; you bring a hat, a water bottle and your good humour.
FARM MANAGER: And a word on the pigs: Blossom would do anything for a tomato, and that's exactly the problem — the vet has both sows on a strict diet, so nobody feeds them. Not visitors, not you, not your adorable toddlers.
FARM MANAGER: Any questions? No? Righto — grab a wheelbarrow and let's get those trees tucked in before the heat arrives.`;

const SIM2_PART3_SCRIPT = `TUTOR: Sit down, both of you — and well done again on the rough cut of the Baywave film. Let's use today on what happens between now and the final version. Dev, where are we?
DEV: The structure is mostly locked. Anisha has been living in the edit suite — the interview with Marjorie, the station founder, is nearly there.
ANISHA: I'll finish that edit by Friday. It's only the closing minute that needs trimming.
TUTOR: Good. The voice-over, though — I've written comments all over your draft.
DEV: I can bash out a new version tonight, no trouble.
TUTOR: Actually, no — write it together, the pair of you, and read every line aloud before either of you records it. The last one read like an encyclopedia entry.
DEV: Together it is. Faster, anyway, with two of us arguing about adjectives.
ANISHA: What about the archive jingles? Baywave has used the same three-second sting since the nineteen eighties — it's perfect for our title sequence, but we need written permission.
TUTOR: Leave that one with me. I'm having coffee with Rajiv on Thursday, and he signs off on everything in that archive. Send me your final clip list and you'll have the paperwork by the weekend.
ANISHA: That saves me an email. Thank you.
DEV: There's still the extra filming — those empty-studio shots at night we talked about. I've got the media-centre card, so I'll book Studio Two for Wednesday evening.
TUTOR: Book it today. That studio vanishes from the booking sheet at this point in term.
ANISHA: And I'll bring the captions up to date once the picture is locked — every volunteer's name spelled correctly, with their programme listed underneath.
TUTOR: But check those captions together before you export anything. A misspelt name in the credits has started wars in this department.
DEV: Noted.
TUTOR: Now, some feedback. Anisha, the founder interview — how do you feel about it?
ANISHA: Honestly? I wasn't sure that long pause in the middle would work — I nearly cut it — but watching it back, it's the strongest thing in the film. She says more in that silence than in any of her answers.
TUTOR: I agree. Keep every second of it. Dev, you'll record the new voice-over?
DEV: I'm not sure that my voice suits it, to be honest. I sound like I'm reading out football results. The words are fine now — it's the delivery that worries me.
TUTOR: Then audition each other and pick whoever fits. A warm voice matters more than a deep one.
ANISHA: We will. One more thing — the ending. Dev and I both feel it needs an extra beat before the credits.
TUTOR: I'd agree — you build a lovely slow portrait of the station and then it simply stops. An extra beat before the credits, something that lands. But that's your call, not a requirement of mine. What I do insist on are two practical things. First, the sound in the stairwell scene dips badly — I had to check my own speakers. Book a lapel microphone with that studio and re-record the whole scene; the echo can't be rescued in the mix. Second, the running time. You're at six minutes forty, and the brief says five sharp, so some darlings will have to die.
ANISHA: We have all the voices we need already — I'd rather cut than film another soul.
TUTOR: Agreed. And keep the jingles in once the paperwork lands — they're worth the wait. Don't go scoring the whole film, either; the silence is doing work for you.
DEV: So: sound, length, and the new ending.
TUTOR: That's the shape of your week. Bring me the finished film a week on Friday — and Anisha, well done on that edit. It's a genuinely moving six minutes. Let's make it five.`;

const SIM2_PART4_SCRIPT = `LECTURER: Good afternoon. Today's question is one of the oldest in marine biology: how does a humpback whale cross an entire ocean and find the same bay its grandmother used? No landmarks, no signposts, as far as we can tell. I'll begin with the journey itself.
LECTURER: Every southern winter, humpbacks leave Antarctic waters and swim north to their breeding grounds in the tropics — up to eight thousand kilometres, much of it in a near-perfect straight line.
LECTURER: Early theories looked to the sky: like ancient sailors, a whale might steer by the sun by day and the stars by night. It is an attractive idea, impossible to test, and no one has found the receptor.
LECTURER: A stronger candidate is magnetism. The seabed carries faint magnetic stripes, and whales' brains contain magnetite — a mineral that responds to magnetic fields. Suggestive, I grant you, but it remains unproven.
LECTURER: Turning now to sound, the ocean's true long-distance sense. A whale's call can cross a whole ocean basin, and some researchers argue that humpbacks recognise individual seamounts — underwater mountains — by the way each one echoes. Acoustic landmarks, if you like.
LECTURER: The evidence comes from suction tags that cling on for days, logging every turn, then float free for collection. Tagged whales correct their course in mid-ocean, which rules out drifting with the currents.
LECTURER: Which brings me to the threat. Shipping noise is doubling every decade, and it masks exactly the quiet cues a migrating whale may be following. Several mass strandings have followed seismic surveys at sea.
LECTURER: Before I conclude, a confession: every theory I have given you remains a hypothesis. I find the magnetic case promising but unproven — yet the case for quieter seas does not wait on certainty. Thank you.`;

// ---------------------------------------------------------------------------
// Simulation 2 — General Training library
// ---------------------------------------------------------------------------

export const listeningFullSimulation2: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "IELTS Listening Full Simulation 2 (40 questions)",
  kind: "full",
  lengthLabel: "full-length",
  description: mockDescription(
    "A full-length simulation of the official Listening paper, with all-new material: a dental-practice registration call, a city-farm volunteer induction from an Australian speaker, a three-voice debrief on a student documentary, and a marine-biology lecture on how whales find their way. Four parts, 40 questions, the official 30-minute clock, and one single hearing per recording — no replay, exactly as in the test. The Listening paper is the same for both variants; this copy sits in the General Training library. Difficulty climbs from form-filling in Part 1 to a signposted academic lecture in Part 4.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Full Simulation 2 (Parts 1–4)",
      directions:
        "A complete run-through of the official Listening paper: four recordings and 40 questions inside 30 minutes. Every recording is played ONCE — the player will not replay it, just as the real test will not. Read each part's questions before you press play, watch the clock, and note that answers always arrive in the same order as the questions.",
      timingSec: 1800,
      audioParts: [
        {
          key: "part-1",
          label: "Part 1 — New dental patient (registration call)",
          directions:
            "Questions 1–10. Read the new-patient record and the price table before you press play; the recording is played once. Write ONE WORD AND/OR A NUMBER for each answer.",
          script: SIM2_PART1_SCRIPT,
        },
        {
          key: "part-2",
          label: "Part 2 — City farm volunteer induction (monologue)",
          directions:
            "Questions 11–20. Read the notes, the farm plan and the two multiple-choice questions first, then play the recording once. For questions 15–18, label the plan with the correct letters A–E.",
          script: SIM2_PART2_SCRIPT,
        },
        {
          key: "part-3",
          label: "Part 3 — Documentary debrief (two students and their tutor)",
          directions:
            "Questions 21–30. Three voices: two students and their tutor. Read the matching list and all the questions before you press play; the recording plays once, and answers arrive in question order.",
          script: SIM2_PART3_SCRIPT,
        },
        {
          key: "part-4",
          label: "Part 4 — Lecture: how whales find their way",
          directions:
            "Questions 31–40. One speaker delivers a marine-biology lecture. Read both note-completion blocks and questions 39–40 before you press play; the recording plays once. Questions 31–38 take ONE WORD ONLY.",
          script: SIM2_PART4_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–7. Complete the new-patient record below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context: `WILLOWBROOK DENTAL CLINIC — new-patient record
First name: Lenka
Surname: ___ (1)
Date of birth: 14 March ___ (2)
Mobile number: ___ (3)
First available appointment: ___ (4) morning
Appointment time: ___ (5)
Fee category: ___ (6)
Patient reference: ___ (7)`,
            blanks: [
              { answer: "Kovarik", alternatives: ["kovarik"] },
              { answer: "1989", alternatives: ["nineteen eighty-nine", "nineteen eighty nine"] },
              { answer: "0746882915", alternatives: ["0746 88 2915", "0746 882915", "0746 8829 15"] },
              { answer: "Thursday", alternatives: ["Thursday the eleventh", "Thursday 11th"] },
              {
                answer: "10.45 am",
                alternatives: ["10:45 am", "10.45", "10:45", "10.45am", "10:45am", "quarter to eleven"],
              },
              { answer: "student", alternatives: [] },
              { answer: "MR428", alternatives: ["MR 428"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "Kovarik", alternatives: ["kovarik"] },
              { answer: "1989", numbers: true, alternatives: ["nineteen eighty-nine", "nineteen eighty nine"] },
              {
                answer: "0746882915",
                numbers: true,
                alternatives: ["0746 88 2915", "0746 882915", "0746 8829 15"],
              },
              { answer: "Thursday", alternatives: ["Thursday the eleventh", "Thursday 11th"] },
              {
                answer: "10.45 am",
                numbers: true,
                alternatives: ["10:45 am", "10.45", "10:45", "10.45am", "10:45am", "quarter to eleven"],
              },
              { answer: "student" },
              { answer: "MR428", alternatives: ["MR 428"] },
            ],
          },
          points: 7,
          skills: ["spelling", "numbers", "corrections", "detail"],
          difficulty: 1,
          explanation:
            "The surname is dictated letter by letter as K-O-V-A-R-I-K, so write exactly what you hear. The birth year is spoken as a pair — nineteen eighty-nine. The mobile is read out in groups with a double eight and then read back, so write the digits as they come. The day carries the correction trap: the receptionist offers Tuesday first, then realises she is reading the wrong column and moves the booking to Thursday at quarter to eleven — ten forty-five. The fee category is student, and the reference is dictated as M-R-four-two-eight.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 8–10. Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context: `WILLOWBROOK DENTAL CLINIC — student-band prices
First check-up: £35
Scale and polish: £ ___ (8)
Small filling: £ ___ (9)
Emergency call-out (outside opening hours): £ ___ (10)`,
            blanks: [
              { answer: "48", alternatives: ["forty-eight", "forty eight"] },
              { answer: "67", alternatives: ["sixty-seven", "sixty seven"] },
              { answer: "120", alternatives: [] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "48", numbers: true, alternatives: ["forty-eight", "forty eight"] },
              { answer: "67", numbers: true, alternatives: ["sixty-seven", "sixty seven"] },
              { answer: "120", numbers: true },
            ],
          },
          points: 3,
          skills: ["numbers", "detail", "note-taking"],
          difficulty: 2,
          explanation:
            "The receptionist quotes the student-band prices in one steady list near the end of the call: a scale and polish at forty-eight pounds, a small filling at sixty-seven, and an emergency call-out outside opening hours at a hundred and twenty. The first check-up price of thirty-five is already printed in the table, which anchors you to the right moment in the recording.",
        },
        {
          order: 3,
          group: "part-2",
          type: "FILL_BLANK",
          stem: "Questions 11–14. Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context: `KIRRA CREEK COMMUNITY FARM — volunteer induction
The farm opened in ___ (11)
Regular volunteers at present: about ___ (12)
Main job this month: mulching the young ___ (13) trees
Induction sessions run every second ___ (14)`,
            blanks: [
              { answer: "2011", alternatives: ["twenty eleven"] },
              { answer: "80", alternatives: ["eighty"] },
              { answer: "citrus", alternatives: [] },
              { answer: "Sunday", alternatives: [] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "2011", numbers: true, alternatives: ["twenty eleven"] },
              { answer: "80", numbers: true, alternatives: ["eighty"] },
              { answer: "citrus" },
              { answer: "Sunday" },
            ],
          },
          points: 4,
          skills: ["numbers", "detail", "note-taking"],
          difficulty: 2,
          explanation:
            "The manager gives the farm's age first — it started back in twenty eleven — and then the size of the crew, around eighty regular volunteers. This month's big job is mulching the young citrus trees planted in winter, and the induction itself runs every second Sunday, so the final note is Sunday.",
        },
        {
          order: 4,
          group: "part-2",
          type: "MAP_LABEL",
          stem: "Questions 15–18. Label the farm plan below. Write the correct letter, A–E, next to questions 15–18.",
          payload: {
            plan: {
              title: "Kirra Creek Community Farm — site plan",
              caption: "You have just come through the main gate at the bottom of the plan.",
              grid: [
                [
                  { room: "duck pond", blank: 15 },
                  { room: "barn", blank: 16 },
                  { room: "orchard", label: "Orchard" },
                  { room: "pig paddock", blank: 17 },
                ],
                [
                  { room: "compost corner", label: "Compost" },
                  { room: "lawn", label: "Lawn" },
                  { room: "vegetable plots", blank: 18 },
                  { room: "tool shed", label: "Tool shed" },
                ],
                [null, { room: "main gate", label: "Main gate" }, null, null],
              ],
            },
            options: [
              { letter: "A", text: "Barn" },
              { letter: "B", text: "Vegetable plots" },
              { letter: "C", text: "Duck pond" },
              { letter: "D", text: "Pig paddock" },
              { letter: "E", text: "Tool shed" },
            ],
          },
          answer: { labels: ["C", "A", "D", "B"] },
          points: 4,
          skills: ["direction-language", "detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "The manager anchors you at the main gate and walks the plan from the far end back: the duck pond is in the back left corner (15 — C); the barn is the big cream shed straight ahead at the top of the path (16 — A); the pig paddock sits in the back right corner, behind the orchard (17 — D); and coming back down on your right, past the barn, are the vegetable plots (18 — B). The tool shed (E) is described at length but is already labelled on the plan — the distractor.",
        },
        {
          order: 5,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 19. Choose the correct letter, A, B or C. How can locals buy the farm's produce?",
          payload: {
            options: [
              "At a weekend market stall.",
              "By collecting a veg box from the farm gate.",
              "Through an online shop.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness", "negation-distractors"],
          difficulty: 3,
          explanation:
            "The weekend market is a negation trap: the manager says plainly that the farm does not sell there any more, because that wrapped up last year. The veg boxes now go out from the shelf by the main gate and are collected on Saturday mornings, and an online shop is never mentioned at all.",
        },
        {
          order: 6,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 20. Choose the correct letter, A, B or C. What does the manager say about footwear?",
          payload: {
            options: [
              "Rubber boots must be worn all year round.",
              "Fully enclosed shoes must be worn.",
              "The farm lends out boots in every size.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness", "paraphrase"],
          difficulty: 3,
          explanation:
            "The rule is closed-in shoes — fully enclosed footwear — after the committee banned thongs and bare feet following the pitchfork incident. Rubber boots are never required, and the farm provides gloves, tools and tea rather than boots, so the other two options exaggerate or invent.",
        },
        {
          order: 7,
          group: "part-3",
          type: "MATCHING",
          stem: "Questions 21–25. Who will do each task before the next meeting? Write the correct letter, A–D, next to questions 21–25. You may use each letter more than once.",
          payload: {
            prompt: "Match each task to the person who will do it.",
            items: [
              { id: "q21", text: "editing the interview with the station founder" },
              { id: "q22", text: "writing the new voice-over script" },
              { id: "q23", text: "getting permission to use the archive jingles" },
              { id: "q24", text: "booking the studio for the extra filming" },
              { id: "q25", text: "checking the names in the final captions" },
            ],
            options: [
              { id: "A", text: "Dev" },
              { id: "B", text: "Anisha" },
              { id: "C", text: "both students together" },
              { id: "D", text: "the tutor" },
            ],
          },
          answer: { pairs: { q21: "B", q22: "C", q23: "D", q24: "A", q25: "C" } },
          points: 5,
          skills: ["matching", "attribution", "detail"],
          difficulty: 3,
          explanation:
            "Three attribution traps run through the task list. Dev offers to write the voice-over alone, but the tutor insists the pair write it together; Anisha raises the jingle permissions, but the tutor is seeing the archive manager herself and takes that job; and Anisha claims the caption check, which the tutor also turns into a joint task. Only the founder-interview edit stays with Anisha, and the studio booking stays with Dev.",
        },
        {
          order: 8,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 26. Choose the correct letter, A, B or C. What is Anisha's opinion of the interview with the station founder?",
          payload: {
            options: [
              "It worked better than she expected.",
              "It should be shortened considerably.",
              "It fails to capture the founder's character.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["opinion", "hedging", "attribution"],
          difficulty: 4,
          explanation:
            "Anisha admits she nearly cut the long pause in the founder interview because she was not sure it would work — yet watching it back, she calls the interview the strongest thing in the film, so it worked better than she expected. Her remark about trimming refers to finishing the edit, not her opinion of it.",
        },
        {
          order: 9,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 27. Choose the correct letter, A, B or C. What does Dev say about recording the new voice-over?",
          payload: {
            options: [
              "The script needs rewriting from scratch.",
              "He has doubts about his own delivery.",
              "Anisha should record it instead.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["opinion", "hedging", "paraphrase"],
          difficulty: 4,
          explanation:
            "Dev's hedge is the key line: he is not sure that his own voice suits the narration, because he sounds like he is reading out football results. The words themselves are fine now, so the script does not need rewriting, and nobody proposes that Anisha records it instead — the tutor only suggests they audition each other.",
        },
        {
          order: 10,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 28. Choose the correct letter, A, B or C. What is the tutor's view of the film's ending?",
          payload: {
            options: [
              "It stops too abruptly.",
              "It is too sentimental.",
              "It contradicts the opening scene.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["opinion", "paraphrase", "detail"],
          difficulty: 4,
          explanation:
            "The tutor agrees with the students that the film builds a lovely slow portrait of the station and then simply stops, and that it needs an extra beat before the credits. That is a complaint about abruptness, not sentimentality, and she never compares the ending with the opening scene.",
        },
        {
          order: 11,
          group: "part-3",
          type: "MCQ_MULTI",
          stem: "Questions 29–30. Choose TWO letters, A–E. Which TWO changes does the tutor insist on before the deadline?",
          payload: {
            options: [
              "re-recording the sound in one scene",
              "cutting the film to the required length",
              "dropping the archive jingles",
              "adding music under the whole film",
              "filming more volunteer interviews",
            ],
            choose: 2,
          },
          answer: { options: [0, 1] },
          points: 2,
          skills: ["main-idea", "distractor-awareness", "paraphrase"],
          difficulty: 4,
          explanation:
            "The tutor's two firm requirements are practical: re-record the stairwell scene because the sound dips badly and the echo cannot be rescued in the mix, and bring the running time down from six minutes forty to the five minutes the brief demands. The jingles are to be kept once the paperwork lands, scoring the whole film is explicitly discouraged, and Anisha would rather cut than film another soul.",
        },
        {
          order: 12,
          group: "part-4",
          type: "FILL_BLANK",
          stem: "Questions 31–34. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context: `HOW WHALES FIND THEIR WAY — lecture notes
The migration
Destination: whales head north to their ___ (31) grounds in the tropics
Early theory: whales steer by the sun and the ___ (32)
Whales' brains contain a magnetic mineral called ___ (33)
Humpbacks may recognise individual ___ (34) by their echoes`,
            blanks: [
              { answer: "breeding", alternatives: [] },
              { answer: "stars", alternatives: [] },
              { answer: "magnetite", alternatives: [] },
              { answer: "seamounts", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [
              { answer: "breeding" },
              { answer: "stars" },
              { answer: "magnetite" },
              { answer: "seamounts" },
            ],
          },
          points: 4,
          skills: ["academic-vocabulary", "note-taking", "detail"],
          difficulty: 4,
          explanation:
            "The lecture follows its notes closely in the first half: humpbacks swim north to their breeding grounds in the tropics, the early sky theory named the sun and the stars, the magnetic mineral found in whales' brains is magnetite, and the acoustic-landmark idea has humpbacks recognising individual seamounts — underwater mountains — by the way each one echoes.",
        },
        {
          order: 13,
          group: "part-4",
          type: "FILL_BLANK",
          stem: "Questions 35–38. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context: `HOW WHALES FIND THEIR WAY — lecture notes (continued)
Evidence and threats
Tracking tags are fixed to the whale by ___ (35)
Mid-ocean course corrections rule out ___ (36) with the currents
Increasing shipping ___ (37) masks the quiet cues
Some mass strandings have followed ___ (38) surveys at sea`,
            blanks: [
              { answer: "suction", alternatives: [] },
              { answer: "drifting", alternatives: [] },
              { answer: "noise", alternatives: [] },
              { answer: "seismic", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [
              { answer: "suction" },
              { answer: "drifting" },
              { answer: "noise" },
              { answer: "seismic" },
            ],
          },
          points: 4,
          skills: ["academic-vocabulary", "paraphrase", "note-taking"],
          difficulty: 5,
          explanation:
            "The second block paraphrases the lecturer more heavily: suction tags cling on for days and later float free for collection; mid-ocean course corrections rule out drifting with the currents; shipping noise is doubling every decade and masks the quiet cues; and several mass strandings have followed seismic surveys at sea.",
        },
        {
          order: 14,
          group: "part-4",
          type: "MCQ_SINGLE",
          stem: "Question 39. Choose the correct letter, A, B or C. What is the lecturer's view of the theory that whales read magnetism?",
          payload: {
            options: [
              "It has been confirmed by the tracking data.",
              "It is a plausible idea that still lacks proof.",
              "It was abandoned once the sound theory appeared.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["stance", "paraphrase", "hedging"],
          difficulty: 5,
          explanation:
            "The lecturer calls the magnetic evidence suggestive and, in her closing, promising but unproven — a plausible idea that still lacks proof. Tracking data has not confirmed it, and although sound is offered as another strong candidate, she never says the magnetism theory has been abandoned.",
        },
        {
          order: 15,
          group: "part-4",
          type: "MCQ_SINGLE",
          stem: "Question 40. Choose the correct letter, A, B or C. What does the lecturer conclude about protecting migrating whales?",
          payload: {
            options: [
              "Action to reduce noise should not wait for firm evidence.",
              "Research funding should move from tagging to acoustics.",
              "Ocean noise levels are already beginning to fall.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["stance", "main-idea", "paraphrase"],
          difficulty: 5,
          explanation:
            "Her conclusion is that the case for quieter seas does not wait on certainty — in other words, action to reduce noise should not wait for firm evidence. She says nothing about redirecting research funding, and shipping noise is described as doubling every decade, not falling.",
        },
      ],
    },
  ],
};
