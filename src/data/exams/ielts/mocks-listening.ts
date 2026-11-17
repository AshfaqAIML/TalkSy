/**
 * IELTS Listening Masterclass — progressive preparation tests and timed
 * per-part section tests (PROMPT 44, Part 6).
 *
 * Three difficulty tiers (beginner → intermediate → advanced) plus four
 * timed part tests, one per recording part, at official-style pacing. All
 * recordings are multi-voice scripts ("SPEAKER: text" lines — each speaker
 * gets a distinct browser voice; speaker names are never read aloud) stored
 * as section audioParts so each part's questions share ONE recording, heard
 * once, exactly like the real test.
 *
 * All material is original EnglishPath practice content written in the
 * style of the exam — never official IELTS examination content.
 */

import type { MockSeed } from "./mocks";
import { mockDescription } from "./mocks";

// ---------------------------------------------------------------------------
// Beginner preparation — Parts 1–2 (12 questions)
// ---------------------------------------------------------------------------

const FOUNDATION_PART1_SCRIPT = `RECEPTIONIST: Good morning, Harbourview Hotel — how can I help?
GUEST: Hello — I'd like to book a room for the first weekend of June, please.
RECEPTIONIST: Of course. A single or a double?
GUEST: A double, please — my husband and I are coming to visit our daughter.
RECEPTIONIST: Lovely. Can I take your name?
GUEST: It's Janet Kolbe — that's K-O-L-B-E.
RECEPTIONIST: Kolbe with a K — thank you. And a contact number?
GUEST: It's oh seven seven one, double six, oh three nine five.
RECEPTIONIST: Let me read that back — oh seven seven one, six six oh, three nine five?
GUEST: That's the one.
RECEPTIONIST: Now, the double is ninety-five pounds a night, and breakfast is included in that.
GUEST: That sounds very reasonable.
RECEPTIONIST: One last thing — check-in opens at two in the afternoon, and we hold the room until eight.
GUEST: Two o'clock — I've noted it down. Thank you for your help.
RECEPTIONIST: Our pleasure. We'll see you on the first of June, Mrs Kolbe.`;

const FOUNDATION_PART2_SCRIPT = `GUIDE: Good morning, everyone, and welcome to the new Maple Street community library. Before we walk through, let me point out the layout on the plan you're holding. You're standing at the entrance at the bottom of the plan, so everything I describe is from your point of view. Directly ahead of you, straight across the entrance hall, is the front desk — that's where you'll collect your membership cards in a moment. To the right of the front desk, in the front right corner of the building, is the children's area — we keep the soft carpet and the picture books there, so families can stay together. In the back right corner, behind the children's area, there's a quiet study room. It's bookable at the desk in two-hour slots. Over on the left side, opposite the children's area, we've put the café — yes, a real one, and yes, covered cups are allowed among the shelves. The far left corner, past the café, is the newspapers and magazines section. Two quick housekeeping notes: the lift to the upper archive is behind the front desk, and the toilets are just beside the entrance, on your left as you come in. We open at half past eight on weekdays and nine at weekends. Right — if you'd like to follow me, we'll start where every visit starts, at the front desk.`;

export const listeningPrepFoundation: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Preparation — Beginner (Parts 1–2)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "The first rung of the Listening Masterclass ladder: a clearly signposted hotel booking (Part 1) and a library tour announcement (Part 2), with dictated spelling, numbers, a plan to label and gentle distractors. Official section: 30 minutes for 40 questions across four parts; this beginner test has 12 items over Parts 1–2.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Parts 1 and 2 (beginner)",
      directions:
        "You will hear two recordings: a conversation in an everyday context (Part 1), then one person speaking about a community facility (Part 2). Each recording plays ONCE. Read the questions for each part before you press play — that is the habit the whole masterclass trains. Answers come in question order.",
      timingSec: 900,
      audioParts: [
        {
          key: "part-1",
          label: "Part 1 — Hotel booking conversation",
          directions:
            "Questions 1–6. First read the form and the sentences, then play the recording once. Write ONE WORD AND/OR A NUMBER for each answer.",
          script: FOUNDATION_PART1_SCRIPT,
        },
        {
          key: "part-2",
          label: "Part 2 — Community library tour",
          directions:
            "Questions 7–12. Label the plan and answer the multiple-choice questions. Choose the correct letter for each. Play the recording once.",
          script: FOUNDATION_PART2_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–4. Complete the hotel booking form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "Harbourview Hotel — booking form\nGuest name: Janet ___ (1)\nRoom type: double\nContact number: ___ (2)\nPrice: £ ___ (3) per night, breakfast included\nCheck-in opens at ___ (4) in the afternoon",
            blanks: [
              { answer: "Kolbe", alternatives: ["kolbe"] },
              { answer: "0771 660 395", alternatives: ["0771660395", "0771 66 0395"] },
              { answer: "95", alternatives: ["ninety-five", "ninety five"] },
              { answer: "2 pm", alternatives: ["two pm", "2pm", "2:00 pm", "two o'clock", "2"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "Kolbe" },
              { answer: "0771 660 395", numbers: true },
              { answer: "95", numbers: true },
              { answer: "2 pm", numbers: true },
            ],
          },
          points: 4,
          skills: ["spelling", "numbers", "detail"],
          difficulty: 1,
          explanation:
            "The surname is dictated letter by letter (K-O-L-B-E); the phone number is read out in groups and read back — write it as you hear it; the price is ninety-five; check-in opens at two in the afternoon. Every answer lands in question order.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 5–6. Complete the sentences below. Write ONE WORD ONLY for each answer.",
          payload: {
            context:
              "The guest is visiting the area to see her ___ (5).\nThe hotel holds the booked room until ___ (6).",
            blanks: [
              { answer: "daughter", alternatives: [] },
              { answer: "eight", alternatives: ["8"] },
            ],
            words: 1,
          },
          answer: { blanks: [{ answer: "daughter" }, { answer: "eight", numbers: true }] },
          points: 2,
          skills: ["detail", "paraphrase"],
          difficulty: 1,
          explanation:
            "Question 5 paraphrases the guest's words — 'coming to visit our daughter'. Question 6 is held in the receptionist's closing note: the room is held until eight. Under ONE WORD ONLY, writing '8' for eight is accepted as the number form.",
        },
        {
          order: 3,
          group: "part-2",
          type: "MAP_LABEL",
          stem: "Questions 7–10. Label the library plan below. Write the correct letter, A–E, next to questions 7–10.",
          payload: {
            plan: {
              title: "Maple Street community library — ground floor",
              caption: "You are at the entrance at the bottom of the plan, facing the front desk.",
              grid: [
                [
                  { room: "quiet study room", blank: 8 },
                  { room: "front desk area", label: "Front desk", blank: 7 },
                  { room: "café corner", blank: 9 },
                ],
                [
                  { room: "magazines and newspapers", label: "Newspapers" },
                  { room: "central hall", label: "Entrance hall" },
                  { room: "children's area", blank: 10 },
                ],
                [null, { room: "main entrance", label: "Entrance" }, null],
              ],
            },
            options: [
              { letter: "A", text: "Children's area" },
              { letter: "B", text: "Quiet study room" },
              { letter: "C", text: "Café" },
              { letter: "D", text: "Front desk" },
              { letter: "E", text: "Newspapers and magazines" },
            ],
          },
          answer: { labels: ["D", "B", "C", "A"] },
          points: 4,
          skills: ["direction-language", "detail"],
          difficulty: 2,
          explanation:
            "The guide anchors you at the entrance facing the front desk: the desk is straight ahead (7 — D); the study room is in the back right corner behind the children's area (8 — B); the café is on the left, opposite the children's area (9 — C); and the children's area itself is in the front right corner (10 — A). Direction words, not names, carry each answer.",
        },
        {
          order: 4,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 11. Choose the correct letter, A, B or C. How long is a study-room booking?",
          payload: {
            options: [
              "One hour.",
              "Two hours.",
              "A whole morning.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "numbers"],
          difficulty: 2,
          explanation:
            "The guide says the quiet study room is bookable in two-hour slots — 'two-hour slots' is the detail the stem asks about; the other options never appear as booking lengths.",
        },
        {
          order: 5,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 12. Choose the correct letter, A, B or C. What does the guide say about drinks in the library?",
          payload: {
            options: [
              "They are forbidden everywhere.",
              "They are allowed only in the café.",
              "They are allowed among the shelves in covered cups.",
            ],
          },
          answer: { option: 2 },
          points: 1,
          skills: ["detail", "paraphrase"],
          difficulty: 2,
          explanation:
            "The guide jokes that covered cups are allowed among the shelves. Option A is too strict and option B invents a rule the guide never states — a classic scope trap for listeners who catch only the word 'café'.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Intermediate preparation — Parts 1–3 (20 questions)
// ---------------------------------------------------------------------------

const INTERMEDIATE_PART1_SCRIPT = `CLERK: Good afternoon, Ashgrove Adult Education Centre, enrolment desk.
CALLER: Hello — I'd like to sign up for the emergency first-aid course, the one starting this month.
CLERK: Certainly. Is that the beginners' course or the refresher?
CALLER: Beginners, please — I've never done anything like this before.
CLERK: Not a problem, it's our most popular class. Can I take a few details? Your name first.
CALLER: It's Deepa — Deepa Naidoo. That's N-A-I-D-O-O.
CLERK: Naidoo, thank you. And the best number to reach you on?
CALLER: Oh five six two, oh, double four, seven nine three.
CLERK: Let me read that back — oh five six two, oh four four, seven nine three?
CALLER: Perfect.
CLERK: Right — the course runs over two weekends, and the first session is on Friday the fourteenth... actually, no — Friday's the free taster. The course proper begins on Saturday the fifteenth.
CALLER: Saturday the fifteenth — got it.
CLERK: The fee is forty-two pounds, and that covers the manual and the practice bandages.
CALLER: That's fine by me. Do I need to bring anything along?
CLERK: Just a notebook — we provide everything else. Each session lasts three hours, ten till one.
CALLER: And will I get a certificate at the end?
CLERK: Yes — assuming you attend both weekends, we email your certificate within two weeks of the final session.
CALLER: Wonderful. I'll drop the form and payment in tomorrow morning.
CLERK: Brilliant — ask for me at reception, that's Rajesh. And just to confirm: taster on the fourteenth, first proper session Saturday the fifteenth.`;

const INTERMEDIATE_PART2_SCRIPT = `HOST: Hello and a very warm welcome to the Millbrook Food Festival — I'm Caro, and this is your orientation as the gates open.
HOST: You're all standing in the village square at the bottom of your plan, looking away from the gates towards the green.
HOST: Directly ahead of you, on the far side of the green, stands the big striped cookery tent — the chef demonstrations run there every hour, on the hour.
HOST: To the left of the cookery tent, in the far left corner of the park, you'll find the picnic meadow — blankets provided, wasps free of charge.
HOST: On the opposite side, in the far right corner, sit the first-aid point and the lost-children tent, side by side.
HOST: Coming back down towards you on the right-hand side of the green is the music stage — local bands from midday, and the headline set at eight.
HOST: And on the left-hand side, lining the path up from the square, the farmers' market stretches the whole way — forty producers, everything from cheese to chutney.
HOST: Two practical points before I let you loose. Please don't try to park at the community hall — that car park is closed to festival visitors this year, so take the free park-and-ride from the retail park instead; it runs every ten minutes.
HOST: And while entry to the grounds is completely free, the evening concert is ticketed — twelve pounds on the door, or nine if you reserve ahead online.
HOST: That's everything from me. Enjoy the festival, and do try the chutney before you judge it.`;

const INTERMEDIATE_PART3_SCRIPT = `ELIF: Marco — for the campus food survey, shall we start with how we'll actually collect the data?
MARCO: Sure. I filled in one of those online questionnaires for the sports centre last week — it took me four minutes. I say we make that our main method.
ELIF: Agreed — a link we can share everywhere, and the numbers come in by themselves. What about a paper version for the halls of residence?
MARCO: Hmm. People ignore flyers on noticeboards, don't they? I'd only use paper as a backup if the online numbers look thin.
ELIF: Fine — backup it is. Interviews, then? I quite like the idea of stopping people outside the canteen.
MARCO: Honestly, we'd need ethics training for face-to-face work, and it eats hours. Too time-consuming for a two-week project.
ELIF: That's true. My tutor ran a focus group once and swore by them, though — eight students, one long conversation.
MARCO: Elif, we can't even book a room before Friday. A focus group needs invitations, refreshments, a facilitator... let's drop it — two backups would be over-engineering.
ELIF: You're right. Online main, paper backup, interviews and focus group both out.
MARCO: Simple. So, before we meet again — I can draft the project timeline and circulate it on Monday, if that helps.
ELIF: It does. And I'll test the recording app in the library lobby — if we do any follow-ups we'll need clean audio, so I want to check the lobby isn't too echoey.
MARCO: Good thinking. Oh — did you see the university published last year's canteen prices? The library holds all those statistics, apparently.
ELIF: I did, but Dr Okafor said we should collect our own price data. Using the university's would look lazy.
MARCO: Fair. Then let's meet on Wednesday to pull the slides together — three o'clock, and I'll bring the recorder from the media office myself.
ELIF: Wednesday three works for me. See you then, Marco.`;

export const listeningPrepIntermediate: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Preparation — Intermediate (Parts 1–3)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "The middle rung of the Listening Masterclass ladder: an enrolment call with a self-correction, a festival announcement with a plan and a negation trap, and a student discussion packed with attribution traps. The official Listening section runs 30 minutes for 40 questions across four parts; this intermediate test has 20 items across Parts 1–3.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Parts 1 to 3 (intermediate)",
      directions:
        "You will hear three recordings in order: a phone call to an adult-education centre (Part 1), a festival announcement (Part 2) and a discussion between two students (Part 3). Each recording plays ONCE, exactly as in the official test — read each part's questions before you press play, and keep the word limits in mind. Answers follow the order of the recording. The official section is 30 minutes for 40 questions; this intermediate test has 20 items across Parts 1–3.",
      timingSec: 1350,
      audioParts: [
        {
          key: "part-1",
          label: "Part 1 — First-aid course enrolment call",
          directions:
            "Questions 1–6. Read the form and the table before you press play, then complete them as you listen. Write ONE WORD AND/OR A NUMBER for each answer.",
          script: INTERMEDIATE_PART1_SCRIPT,
        },
        {
          key: "part-2",
          label: "Part 2 — Millbrook Food Festival announcement",
          directions:
            "Questions 7–12. Label the plan with the correct letters, then answer two multiple-choice questions. The recording plays once.",
          script: INTERMEDIATE_PART2_SCRIPT,
        },
        {
          key: "part-3",
          label: "Part 3 — Survey project discussion",
          directions:
            "Questions 13–20. Match the four methods to decisions A–E, choose TWO letters for questions 17–18, then complete two sentences with ONE WORD ONLY.",
          script: INTERMEDIATE_PART3_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–3. Complete the enrolment form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "Ashgrove Adult Education Centre — emergency first-aid course\nStudent surname: Deepa ___ (1)\nFirst session: Saturday ___ (2)\nCourse fee: £ ___ (3)",
            blanks: [
              { answer: "Naidoo", alternatives: ["naidoo"] },
              { answer: "15th", alternatives: ["15", "fifteenth", "the fifteenth"] },
              { answer: "42", alternatives: ["forty-two", "forty two"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "Naidoo" },
              { answer: "15th", numbers: true },
              { answer: "42", numbers: true },
            ],
          },
          points: 3,
          skills: ["spelling", "numbers", "detail", "correction-awareness"],
          difficulty: 2,
          explanation:
            "The surname is spelled out letter by letter as N-A-I-D-O-O, so write exactly what you hear. For the date, the clerk first says Friday the fourteenth, then corrects himself — Friday is only the free taster, and the course itself begins on Saturday the fifteenth. The fee of forty-two pounds covers the manual and bandages; all three answers arrive in question order.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 4–6. Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "Course summary — keep this page\nLevel: suitable for complete ___ (4)\nBring: a ___ (5)\nCertificate: sent by ___ (6)",
            blanks: [
              { answer: "beginners", alternatives: ["beginner"] },
              { answer: "notebook", alternatives: [] },
              { answer: "email", alternatives: [] },
            ],
            words: 3,
          },
          answer: {
            blanks: [{ answer: "beginners" }, { answer: "notebook" }, { answer: "email" }],
          },
          points: 3,
          skills: ["detail", "paraphrase", "note-taking"],
          difficulty: 2,
          explanation:
            "The level comes from the caller's reply to the beginners-or-refresher question — she says plainly that she has never done it before, so the class is for complete beginners. She only needs to bring a notebook, because everything else is provided, and the certificate is emailed rather than posted, so the final blank is email.",
        },
        {
          order: 3,
          group: "part-2",
          type: "MAP_LABEL",
          stem: "Questions 7–10. Label the festival plan below. Write the correct letter, A–E, next to questions 7–10.",
          payload: {
            plan: {
              title: "Millbrook Food Festival — village park",
              caption: "You have just come through the festival gates at the bottom of the plan, facing the green.",
              grid: [
                [
                  { room: "picnic meadow", blank: 9 },
                  { room: "cookery tent", blank: 7 },
                  { room: "first-aid point", label: "First aid" },
                ],
                [
                  { room: "farmers' market", blank: 10 },
                  { room: "village green", label: "Green" },
                  { room: "music stage", blank: 8 },
                ],
                [null, { room: "festival gates", label: "Gates" }, null],
              ],
            },
            options: [
              { letter: "A", text: "Farmers' market" },
              { letter: "B", text: "First-aid point" },
              { letter: "C", text: "Cookery demonstrations" },
              { letter: "D", text: "Live music stage" },
              { letter: "E", text: "Picnic area" },
            ],
          },
          answer: { labels: ["C", "D", "E", "A"] },
          points: 4,
          skills: ["direction-language", "detail"],
          difficulty: 2,
          explanation:
            "The host anchors you in the square looking towards the green: the striped cookery tent is directly ahead on the far side (7 — C); the music stage comes back down on the right-hand side of the green (8 — D); the picnic meadow is in the far left corner (9 — E); and the farmers' market lines the left-hand path up from the square (10 — A). Follow the direction words rather than waiting for names.",
        },
        {
          order: 4,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 11. Choose the correct letter, A, B or C. What does the speaker say about parking for the festival?",
          payload: {
            options: [
              "Visitors can park at the community hall.",
              "A free park-and-ride runs from the retail park.",
              "Parking near the gates costs ten pounds.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "The host says the community hall car park is closed to festival visitors this year — so option A is a negation trap that quotes a real place. The correct answer is the free park-and-ride from the retail park, which she recommends instead; the ten-pound figure is never mentioned, only a ten-minute bus frequency.",
        },
        {
          order: 5,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 12. Choose the correct letter, A, B or C. What does the speaker say about the evening concert?",
          payload: {
            options: [
              "It is included in the grounds entry.",
              "It is cheaper when reserved in advance.",
              "It begins at midday.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "numbers", "paraphrase"],
          difficulty: 3,
          explanation:
            "The grounds are free, but the evening concert is ticketed at twelve pounds on the door or nine pounds if you reserve ahead online — since nine is cheaper, advance booking costs less. Midday refers to the free local bands on the stage, not the ticketed headline set at eight, so option C confuses two events.",
        },
        {
          order: 6,
          group: "part-3",
          type: "MATCHING",
          stem: "Questions 13–16. You will hear two students deciding how to collect data for a campus food survey. What do they decide about each method of data collection? Write the correct letter, A–E, next to questions 13–16.",
          payload: {
            items: [
              { id: "i1", text: "Online questionnaire" },
              { id: "i2", text: "Paper questionnaire" },
              { id: "i3", text: "Face-to-face interviews" },
              { id: "i4", text: "Focus group" },
            ],
            options: [
              { id: "o1", text: "use it as the main method" },
              { id: "o2", text: "keep it only as a backup" },
              { id: "o3", text: "reject it — too time-consuming" },
              { id: "o4", text: "reject it — too complicated" },
              { id: "o5", text: "postpone it until after the tutorial" },
            ],
          },
          answer: {
            pairs: { i1: "o1", i2: "o2", i3: "o3", i4: "o4" },
          },
          points: 4,
          skills: ["detail", "attribution", "paraphrase"],
          difficulty: 3,
          explanation:
            "The focus group is the attribution trap: Elif praises it warmly because her tutor swore by it, but Marco drops it as over-engineering, so the pair is 'too complicated'. The online questionnaire becomes the main method, the paper version survives only as a backup, and face-to-face interviews are rejected as too time-consuming for a two-week project.",
        },
        {
          order: 7,
          group: "part-3",
          type: "MCQ_MULTI",
          stem: "Questions 17–18. Choose TWO letters, A–E. Which TWO tasks will the students complete before they meet on Wednesday?",
          payload: {
            options: [
              "Circulate a plan showing the stages of the project.",
              "Test the recording equipment in a possible venue.",
              "Consult the library's statistics on last year's canteen prices.",
              "Interview students outside the canteen.",
              "Ask their tutor to arrange ethics training.",
            ],
          },
          answer: { options: [0, 1] },
          points: 2,
          skills: ["paraphrase", "distractor-awareness"],
          difficulty: 4,
          explanation:
            "Both correct options reword the audio: 'draft the project timeline and circulate it on Monday' becomes a plan of the project's stages, and testing the recording app in the library lobby becomes testing equipment in a possible venue. Option C quotes the library statistics almost word for word — but the students reject them as looking lazy, so verbatim matching leads you astray. Options D and E revive ideas the pair had already dropped.",
        },
        {
          order: 8,
          group: "part-3",
          type: "FILL_BLANK",
          stem: "Questions 19–20. Complete the sentences below. Write ONE WORD ONLY for each answer.",
          payload: {
            context:
              "The students will meet on ___ (19) at three o'clock to combine their slides.\nMarco will fetch a voice ___ (20) from the media office.",
            blanks: [
              { answer: "Wednesday", alternatives: [] },
              { answer: "recorder", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [{ answer: "Wednesday" }, { answer: "recorder" }],
          },
          points: 2,
          skills: ["detail", "note-taking"],
          difficulty: 3,
          explanation:
            "Marco proposes Wednesday at three o'clock to pull the slides together, and he adds that he will bring the recorder from the media office himself — so the two one-word answers are Wednesday and recorder, both spoken directly in the closing lines of the recording.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Advanced preparation — Parts 1–4 (25 questions)
// ---------------------------------------------------------------------------

const ADVANCED_PART1_SCRIPT = `AGENT: Good morning, Pinecrest Property, rentals line — Julia speaking.
CALLER: Morning, Julia. I'm calling about the advert for the garage on Hollyhock Lane — is it still free?
AGENT: The detached garage with the parking space, yes — it went back on the books this week. Shall I take some details? Your name first.
CALLER: It's Daniel Ferreira — F-E-double R-E-I-R-A.
AGENT: Ferreira, noted. And you'd be renting it in connection with your home address?
CALLER: That's right — we're at thirty-seven Chadwick Road.
AGENT: Thirteen Chadwick Road — let me type that in.
CALLER: No, it's THIRTY-seven — three seven, not one three.
AGENT: My apologies — thirty-seven it is. You'd be surprised how often those two get confused on the phone.
CALLER: I blame the line. So, what's the rent?
AGENT: Eighty-four pounds a month, billed quarterly in advance.
CALLER: That's manageable. When could we actually start?
AGENT: The present tenant empties it on the twentieth, so the earliest start date is the twenty-second of November.
CALLER: The twenty-second works — we don't need it sooner.
AGENT: One condition to be upfront about: the landlord insists on a minimum term of three months.
CALLER: Three months is no trouble — we'll want it until the spring anyway.
AGENT: In that case, shall we say a viewing on Thursday at half ten?
CALLER: Fine by me.
AGENT: One formality — please bring your passport. We require photo identification from every applicant, no exceptions.
CALLER: Passport it is. Thanks, Julia — Thursday at half ten.`;

const ADVANCED_PART2_SCRIPT = `RANGER: Right, volunteers — welcome to Coldwater Fell, and thank you for signing up for Sunday's planting day. I'm Sam, one of the rangers here, and this is your ten-minute briefing, so please listen before you head off.
RANGER: First, the meeting point: we gather at the wooden shelter just behind the visitor centre — not at the centre itself, because that car park gets locked at nine. From the shelter we'll walk up together in teams of six.
RANGER: On your feet: strong boots, and I mean strong — the planting site is a former sheep pasture, and it is genuinely boggy after last week's rain. A waterproof jacket is essential too; the forecast is for showers by eleven.
RANGER: What to bring? A bottle of water, your own gloves if you have them — though we do carry spares — and absolutely nothing valuable, because there are no lockers up on the fell.
RANGER: We provide the spades, the saplings, and a hot lunch at the finish; the lunch is cooked on site by the volunteers' association, and it is honestly the best part of the day.
RANGER: Transport: a free minibus leaves the town hall at eight sharp, returning around five. Each team has a target of twenty-five trees — last year's record was forty, so there's a challenge for you.
RANGER: One word on safety: if the forecast had shown lightning we would have cancelled, and rain alone never stops us — but if you hear the whistle, down tools and walk back to the shelter. Questions? No? Then I'll see you all on Sunday at half past eight.`;

const ADVANCED_PART3_SCRIPT = `TOMAS: So, for the literature review — four studies on urban heat islands, and we need a criticism of each?
NADIA: That's the brief, yes. Shall I start with the Lisbon survey? Technically it's a mess — those street-level sensors kept failing, so whole weeks of readings are missing. Unreliable instruments, basically.
TOMAS: Agreed on Lisbon. Rotterdam next — the mobile laboratory experiment. I thought the equipment was fine, and their sample size was decent for a pilot, but they only measured office buildings. Homes were left out entirely.
NADIA: So — too narrow. They generalise about 'the city' from one building type.
TOMAS: Exactly. Now, Osaka: the rooftop project. They made a big thing of using modern instruments — that part I buy — but the temperature figures they fed into the model come from the 1990s. Nineties data in a paper published last year.
NADIA: Outdated figures, then. It's a shame, because the modelling itself was elegant.
TOMAS: Really elegant. Which leaves Toronto — the community dataset.
NADIA: The one where volunteers measured their own balconies?
TOMAS: That's it. Charming study, genuinely, and the instruments were properly calibrated. But twenty households — twenty! You can't say anything about a city of three million from twenty balconies.
NADIA: Too small a sample. We're agreed there.
TOMAS: So, how do we treat the Lisbon findings in our write-up? Personally I'd say they're broadly convincing — the pattern matches every other city — though I'd want them replicated before we lean on them.
NADIA: With reservations, then. And Toronto — I know you like it.
TOMAS: I do like it, but I'm not sure the dataset supports the strong conclusions the authors draw. Suggestive, at best. We should say that politely.
NADIA: We'll say it politely.`;

const ADVANCED_PART4_SCRIPT = `LECTURER: Good morning. Today's lecture is about glass — how an ornament became an everyday material.
LECTURER: I'll begin with the ancient world. Glass occurs naturally — obsidian, for instance — but manufactured glass stayed rare, and the earliest beads were prized like treasure: a pharaoh would rather be buried with glass than with gold.
LECTURER: What changed everything was glassblowing, invented around the first century BC. A workshop could suddenly turn out vessels quickly and cheaply, and glass moved from palace to market stall.
LECTURER: Turning now to the medieval period. Stained glass told stories to congregations who could not read, and at home the size of your windows announced your wealth as loudly as your horses.
LECTURER: My next point takes us to nineteen fifty-two, when Pilkington introduced the float process: molten glass spreads across a bath of molten tin, and gravity does the polishing. The result is a flawlessly flat sheet — the reason a tower block can be a wall of glass at all.
LECTURER: Which brings me to the present. The largest single customer for flat glass is now the construction industry, well ahead of cars or packaging, and demand climbs with every façade.
LECTURER: That trend raises the question I want to leave you with: every tonne of new glass demands sand, soda ash and serious heat. Recycling a bottle saves raw materials and roughly a third of the energy — impressive, but not a complete answer.
LECTURER: To close: glass began as treasure, became a mirror of status, and is now a material we cannot live without and cannot stop throwing away. Next week, ceramics. Thank you.`;

export const listeningPrepAdvanced: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Preparation — Advanced (Parts 1–4)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "The top rung of the ladder: all four parts at full density — a thirteen/thirty trap on the phone, a ranger's volunteer briefing, two students picking apart research papers with hedged opinions, and a signposted, paraphrase-heavy lecture on the history of glass. The official Listening section runs 30 minutes for 40 questions across four parts; this advanced test has 25 items across all four parts, rising from difficulty 2 to 5.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Parts 1 to 4 (advanced)",
      directions:
        "You will hear four recordings: a property phone call (Part 1), a ranger's volunteer briefing (Part 2), two students reviewing research (Part 3) and a university lecture (Part 4). Each recording plays ONCE. The demands climb from part to part and finish at exam-level density in the lecture, where the notes paraphrase the speaker heavily. The official section is 30 minutes for 40 questions; this advanced test has 25 items across all four parts.",
      timingSec: 1740,
      audioParts: [
        {
          key: "part-1",
          label: "Part 1 — Garage rental enquiry",
          directions:
            "Questions 1–6. Complete the form, then answer two short questions. Write ONE WORD AND/OR A NUMBER for each answer.",
          script: ADVANCED_PART1_SCRIPT,
        },
        {
          key: "part-2",
          label: "Part 2 — Tree-planting day briefing",
          directions:
            "Questions 7–12. Complete the notes with ONE WORD AND/OR A NUMBER, then answer one multiple-choice question.",
          script: ADVANCED_PART2_SCRIPT,
        },
        {
          key: "part-3",
          label: "Part 3 — Literature review discussion",
          directions:
            "Questions 13–18. Match each study to the criticism the speakers make, then answer two questions on hedged opinion.",
          script: ADVANCED_PART3_SCRIPT,
        },
        {
          key: "part-4",
          label: "Part 4 — Lecture: the history of glass",
          directions:
            "Questions 19–25. Complete the lecture notes with ONE WORD ONLY, then answer one question on the lecturer's attitude.",
          script: ADVANCED_PART4_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–4. Complete the rental form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "Pinecrest Property — garage rental\nApplicant surname: Daniel ___ (1)\nApplicant's address: ___ (2) Chadwick Road\nRent: £ ___ (3) per month\nEarliest start date: ___ (4)",
            blanks: [
              { answer: "Ferreira", alternatives: ["ferreira"] },
              { answer: "37", alternatives: ["thirty-seven", "thirty seven"] },
              { answer: "84", alternatives: ["eighty-four", "eighty four"] },
              {
                answer: "22 November",
                alternatives: ["22nd November", "November 22"],
              },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "Ferreira" },
              { answer: "37", numbers: true },
              { answer: "84", numbers: true },
              { answer: "22 November", numbers: true },
            ],
          },
          points: 4,
          skills: ["spelling", "numbers", "detail", "similar-sounds"],
          difficulty: 2,
          explanation:
            "The surname is spelled aloud with a doubled R. Watch the thirteen/thirty trap: the agent repeats 'thirteen', but the caller corrects her — THIRTY-seven, three seven — so the address is 37. The rent is eighty-four pounds, and the earliest start date is the twenty-second of November, spoken as an ordinal you must convert to figures.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 5–6. Answer the questions below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "5. What is the minimum rental period for the garage?\n6. What must the caller bring to the viewing?",
            blanks: [
              { answer: "3 months", alternatives: ["three months", "3", "three"] },
              { answer: "passport", alternatives: [] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "3 months", numbers: true },
              { answer: "passport" },
            ],
          },
          points: 2,
          skills: ["detail", "numbers"],
          difficulty: 3,
          explanation:
            "The landlord insists on a minimum term of three months, so the period is a number plus a word — exactly what ONE WORD AND/OR A NUMBER permits. For the viewing, the agent requires photo identification from every applicant and names the passport explicitly, which makes passport the answer.",
        },
        {
          order: 3,
          group: "part-2",
          type: "FILL_BLANK",
          stem: "Questions 7–11. Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "COLDWATER FELL — tree-planting day, Sunday\nMeet at: the wooden ___ (7) behind the visitor centre\nWear: strong boots and a waterproof ___ (8)\nBring: a bottle of ___ (9)\nTransport: a free ___ (10) leaves the town hall\nTarget: ___ (11) trees per team",
            blanks: [
              { answer: "shelter", alternatives: [] },
              { answer: "jacket", alternatives: [] },
              { answer: "water", alternatives: [] },
              { answer: "minibus", alternatives: [] },
              { answer: "25", alternatives: ["twenty-five", "twenty five"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "shelter" },
              { answer: "jacket" },
              { answer: "water" },
              { answer: "minibus" },
              { answer: "25", numbers: true },
            ],
          },
          points: 5,
          skills: ["detail", "note-taking", "numbers"],
          difficulty: 3,
          explanation:
            "The ranger's briefing walks through the kit in order: gather at the wooden shelter behind the visitor centre, wear strong boots and a waterproof jacket, bring a bottle of water, catch the free minibus from the town hall, and note that each team aims for twenty-five trees.",
        },
        {
          order: 4,
          group: "part-2",
          type: "MCQ_SINGLE",
          stem: "Question 12. Choose the correct letter, A, B or C. In what circumstances would the planting day be called off?",
          payload: {
            options: [
              "Persistent heavy rain.",
              "A forecast of lightning.",
              "Damage to the planting tools.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "The ranger says the day would have been cancelled had lightning been forecast, while rain alone never stops the planting — so heavy rain is the negation distractor and lightning is the only weather that calls the day off. Tool damage is never mentioned at all.",
        },
        {
          order: 5,
          group: "part-3",
          type: "MATCHING",
          stem: "Questions 13–16. You will hear two students evaluating four studies of urban heat islands. What criticism do they make of each study? Write the correct letter, A–E, next to questions 13–16.",
          payload: {
            items: [
              { id: "i1", text: "The Lisbon survey" },
              { id: "i2", text: "The Rotterdam experiment" },
              { id: "i3", text: "The Osaka rooftop project" },
              { id: "i4", text: "The Toronto community dataset" },
            ],
            options: [
              { id: "o1", text: "outdated figures" },
              { id: "o2", text: "too narrow a focus" },
              { id: "o3", text: "faulty equipment" },
              { id: "o4", text: "too small a sample" },
              { id: "o5", text: "a weak theoretical basis" },
            ],
          },
          answer: {
            pairs: { i1: "o3", i2: "o2", i3: "o1", i4: "o4" },
          },
          points: 4,
          skills: ["detail", "distractor-awareness", "paraphrase"],
          difficulty: 4,
          explanation:
            "The mention-lures cluster here: Rotterdam's 'decent sample' and 'fine equipment' are spoken only to be dismissed — its real weakness is measuring offices alone, which is too narrow. Lisbon's street-level sensors kept failing, so faulty equipment; Osaka fed 1990s figures into its model, so outdated; and Toronto's twenty households are too small a sample for a city of three million.",
        },
        {
          order: 6,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 17. Choose the correct letter, A, B or C. What is Tomas's view of the Lisbon findings?",
          payload: {
            options: [
              "He accepts them completely.",
              "He accepts them with reservations.",
              "He rejects them as unreliable.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["opinion", "hedging"],
          difficulty: 4,
          explanation:
            "Tomas calls the Lisbon findings broadly convincing and notes that the pattern matches every other city, yet he wants them replicated before relying on them — a classic hedged endorsement, so he accepts them with reservations rather than completely or not at all.",
        },
        {
          order: 7,
          group: "part-3",
          type: "MCQ_SINGLE",
          stem: "Question 18. Choose the correct letter, A, B or C. What does Tomas conclude about the Toronto study?",
          payload: {
            options: [
              "Its conclusions are stronger than its data.",
              "Its methods contradict the Osaka project.",
              "Its sample was unfairly criticised.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["opinion", "hedging", "paraphrase"],
          difficulty: 4,
          explanation:
            "Tomas says he is not sure the Toronto dataset supports the strong conclusions the authors draw, and calls it suggestive at best — in other words, the conclusions outrun the evidence, which is exactly what option A states. He never compares its methods with Osaka's, and the sample criticism is one he himself makes.",
        },
        {
          order: 8,
          group: "part-4",
          type: "FILL_BLANK",
          stem: "Questions 19–24. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context:
              "GLASS — a short history\nIn the ancient world, glass beads were prized as ___ (19)\nGlassblowing made glass quick and ___ (20) to produce\nIn medieval houses, window size displayed a family's ___ (21)\nThe float process produces perfectly ___ (22) sheets\nThe biggest customer for flat glass is the ___ (23) industry\nRecycling glass reduces demand for raw ___ (24)",
            blanks: [
              { answer: "treasure", alternatives: [] },
              { answer: "cheap", alternatives: [] },
              { answer: "wealth", alternatives: [] },
              { answer: "flat", alternatives: [] },
              { answer: "construction", alternatives: [] },
              { answer: "materials", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [
              { answer: "treasure" },
              { answer: "cheap" },
              { answer: "wealth" },
              { answer: "flat" },
              { answer: "construction" },
              { answer: "materials" },
            ],
          },
          points: 6,
          skills: ["paraphrase", "note-taking", "academic-vocabulary"],
          difficulty: 5,
          explanation:
            "Every note paraphrases the lecture: 'prized like treasure' becomes valued as treasure; 'quickly and cheaply' becomes quick and cheap; windows that 'announced your wealth as loudly as your horses' display a family's wealth; a 'flawlessly flat sheet' is perfectly flat; the construction industry is named as the largest customer; and recycling 'saves raw materials', so the final blank is materials.",
        },
        {
          order: 9,
          group: "part-4",
          type: "MCQ_SINGLE",
          stem: "Question 25. Choose the correct letter, A, B or C. What is the lecturer's attitude towards rising glass consumption?",
          payload: {
            options: [
              "Alarmed, because demand can never be reduced.",
              "Relaxed, because recycling has solved the problem.",
              "Concerned, but encouraged by recycling savings.",
            ],
          },
          answer: { option: 2 },
          points: 1,
          skills: ["attitude", "signposting", "paraphrase"],
          difficulty: 5,
          explanation:
            "The lecturer admits that demand climbs with every glass façade and that recycling saves only roughly a third of the energy — impressive, but not a complete answer. So she is concerned about the trend yet sees a practical, partial remedy; options A and B each exaggerate one half of her position.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Timed Part 1 test — everyday conversation (10 questions)
// ---------------------------------------------------------------------------

const TIMED1_PART1_SCRIPT = `RECEPTIONIST: Good morning, Oakford Sailing Club — membership desk.
CALLER: Oh, hello. I'd like to book my son onto the junior sailing course — the summer one, if there's space.
RECEPTIONIST: The two-week course in July? Four places left, so you're in luck. I'll take a few details — your name first?
CALLER: Ines Varga.
RECEPTIONIST: And is that V-A-R-G-A?
CALLER: Varga — V-A-R-G-A, yes. Sorry, I should have spelled it from the start.
RECEPTIONIST: Not at all. How old is your son?
CALLER: He's nine — ten in September.
RECEPTIONIST: Then he joins the nine-to-elevens. Has he sailed before?
CALLER: Once, on a school trip — he loved it, but he's very much a beginner.
RECEPTIONIST: That's fine, the beginner group starts from the shoreline up. Can he swim?
CALLER: Fifty metres, easily.
RECEPTIONIST: Perfect — that's the requirement. The course fee is seventy-eight pounds for the two weeks, and that includes the logbook.
CALLER: Seventy-eight — fine. And when does it start?
RECEPTIONIST: The first session is on the fifth of July... no, wait — the fifth is the assessment morning. The course proper starts on the sixth.
CALLER: The sixth of July — noted. What time do sessions run?
RECEPTIONIST: Nine until half past twelve, Monday to Friday. Now, kit: the club provides buoyancy aids and helmets, so don't buy anything. He should wear old trainers — they will get soaked — and bring a packed lunch each day; we're a nut-free site, please remember. Suncream, factor thirty at least, and a named water bottle.
CALLER: All noted. What happens if the weather turns?
RECEPTIONIST: We never cancel. If it's too windy we move into the boat shed and do knots, charts and signalling — the children love it, honestly.
CALLER: Good. And can parents watch?
RECEPTIONIST: Ah — you used to be able to wait in the car park, but with the new fencing that's off-limits now. The clubroom upstairs has tea, coffee and the whole bay in view.
CALLER: The clubroom — got it. Shall I pay now?
RECEPTIONIST: Card over the phone is easiest. I'll post the welcome pack this afternoon.
CALLER: Lovely — thank you for all the help.
RECEPTIONIST: My pleasure. See you and Leonardo on the sixth.`;

export const listeningTimedPart1: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Timed Test — Part 1 (everyday conversation)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "Part 1 pacing practice: one everyday phone call — a parent booking a junior sailing course — with names and numbers at dictation speed, two self-corrections and one dictated spelling. The official Listening section runs 30 minutes for 40 questions across four parts; this timed test has 10 items, all from Part 1, with 8 minutes on the clock.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Part 1 timed test (everyday conversation)",
      directions:
        "You will hear ONE recording: an everyday conversation between a parent and a club receptionist, played once. In the official test, Part 1 is the first of four recordings within 30 minutes and 40 questions; this timed test drills Part 1 only — 10 items, 8 minutes on the clock. Read all ten questions before you press play, and write numbers exactly as you hear them.",
      timingSec: 480,
      audioParts: [
        {
          key: "part-1",
          label: "Part 1 — Junior sailing course booking",
          directions:
            "Questions 1–10. Read the form, the table and the two multiple-choice questions before you press play. The recording plays once.",
          script: TIMED1_PART1_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–5. Complete the booking form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "Oakford Sailing Club — junior sailing course\nChild's surname: ___ (1)\nChild's age: ___ (2)\nGroup: the ___ (3) group\nFirst session: ___ (4)\nCourse fee: £ ___ (5)",
            blanks: [
              { answer: "Varga", alternatives: ["varga"] },
              { answer: "9", alternatives: ["nine"] },
              { answer: "beginner", alternatives: [] },
              { answer: "6 July", alternatives: ["6th July", "July 6"] },
              { answer: "78", alternatives: ["seventy-eight", "seventy eight"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "Varga" },
              { answer: "9", numbers: true },
              { answer: "beginner" },
              { answer: "6 July", numbers: true },
              { answer: "78", numbers: true },
            ],
          },
          points: 5,
          skills: ["spelling", "numbers", "detail", "correction-awareness"],
          difficulty: 2,
          explanation:
            "The surname is dictated letter by letter — V-A-R-G-A — and the caller confirms it. The son is nine, he joins the beginner group, and the fee is seventy-eight pounds. Watch the correction: the receptionist first says the fifth of July, then corrects herself — the fifth is only the assessment morning, and the course proper starts on the sixth.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 6–8. Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "Daily checklist — what Leonardo brings\nBuoyancy aid and helmet: provided by the club\nFootwear: old ___ (6) — they will get soaked\nFood: a packed ___ (7) — nothing containing nuts\nSuncream: factor ___ (8) or higher",
            blanks: [
              { answer: "trainers", alternatives: [] },
              { answer: "lunch", alternatives: [] },
              { answer: "30", alternatives: ["thirty"] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "trainers" },
              { answer: "lunch" },
              { answer: "30", numbers: true },
            ],
          },
          points: 3,
          skills: ["detail", "numbers", "note-taking"],
          difficulty: 3,
          explanation:
            "The kit details arrive in one rapid list: old trainers that will get soaked, a packed lunch on a strictly nut-free site, and suncream at factor thirty or higher — three details the table expects you to catch in order while the receptionist keeps talking.",
        },
        {
          order: 3,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 9. Choose the correct letter, A, B or C. What happens if the weather is too windy for sailing?",
          payload: {
            options: [
              "Sessions are cancelled for the day.",
              "Sessions move into the boat shed.",
              "Children swim in the bay instead.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "The receptionist says the club never cancels: when it is too windy, sessions move into the boat shed for knots, charts and signalling. So option B is correct, option A is the pessimistic distractor that careless listeners assume, and swimming is never mentioned as an alternative.",
        },
        {
          order: 4,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 10. Choose the correct letter, A, B or C. Where should parents wait during sessions?",
          payload: {
            options: [
              "In the car park.",
              "By the new fencing.",
              "In the upstairs clubroom.",
            ],
          },
          answer: { option: 2 },
          points: 1,
          skills: ["detail", "correction-awareness"],
          difficulty: 3,
          explanation:
            "This question carries the second correction: parents used to wait in the car park, but the new fencing has made it off-limits, and the clubroom upstairs — with tea, coffee and the whole bay in view — is the answer. Listening past the first suggestion is exactly the skill being tested here.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Timed Part 2 test — individual speaker (10 questions)
// ---------------------------------------------------------------------------

const TIMED2_PART2_SCRIPT = `ORGANISER: Good morning, everyone, and a very warm welcome to Foxdale's twenty-first Open Gardens Day. I'm Muriel, chair of the organising committee, and this is the half-hour briefing for first-time visitors — bear with me, because even after twenty-one years the logistics still go wrong unless I explain them.
ORGANISER: Let me start with the programme, because your programme is your ticket. It costs four pounds, it's on sale all day at the box office in the square, and every penny of it goes to the hospice — the garden owners open for free, out of pure generosity.
ORGANISER: Getting around, then. The free shuttle bus loops the village every twenty minutes and sets down right here by the war memorial; the last bus back to the station leaves at half past five, so watch the clock if you end up walking the river path, which is lovely and much longer than it looks.
ORGANISER: Drivers, the overflow field behind the school is signposted from the bypass — and please don't be tempted by Mill Row itself, which is residents-only; the wardens are charming and completely unbending.
ORGANISER: A little history, since we have a minute: the open-gardens tradition here began when the flood of nineteen sixty-eight left the church roof in ruins, and the village opened eleven gates to pay for the repairs. This year there are nineteen gardens, two of them opened for the first time, so wear sensible shoes and pace yourselves.
ORGANISER: Now take your plan out, and I'll walk you through today's gardens. You are standing in the square, in the middle of the plan, facing the church at the top.
ORGANISER: Head straight up past the church and, in the far left corner, you reach the Old Forge — a blacksmith's workshop turned walled garden, full of irises, and the only place today that's selling plants, by the way.
ORGANISER: In the far right corner, where the river bends, stands the Mill House: the wheel still turns, the garden is all ferns and damp shade, and the queue for the mill tour forms by two, so go early.
ORGANISER: Down the left-hand side of the plan, along Mill Row, Rose Cottage has the famous rose arch — Miss Pettigrew lets visitors walk through her kitchen, which smells of jam.
ORGANISER: On the right-hand side of the plan, the primary school garden is the children's own project: sunflowers measured to the centimetre, a bug hotel built from bricks and pine cones, and the brass band playing from three o'clock.
ORGANISER: There's no picnicking on the school field, I'm afraid — the turf is new — but the meadow by the river has space for everyone.
ORGANISER: Two final announcements. Teas are served all afternoon in the church hall at St Oswald's — scones, Victoria sandwich, the lot — and the plant stall's takings go to the riverbank restoration fund, which is this year's good cause.
ORGANISER: And do bring cash: the plant stall and the teas are coins-and-notes only, the card machine having died spectacularly last summer. Garden gloves, I'm asked constantly — every garden provides them at the gate. Folding chairs — there are benches everywhere you look.
ORGANISER: One last thing: the owners are volunteers, so a thank-you at the gate means more than you'd think. Right — the gardens open at ten sharp. Enjoy Foxdale, everyone, and I'll see you at the bandstand at three.`;

export const listeningTimedPart2: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Timed Test — Part 2 (individual speaker)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "Part 2 pacing practice: a single social monologue — an organiser briefing visitors at a village open-gardens day — with a site plan to label from direction language. The official Listening section runs 30 minutes for 40 questions across four parts; this timed test has 10 items, all from Part 2, with 8 minutes on the clock.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Part 2 timed test (individual speaker)",
      directions:
        "You will hear ONE recording: one person speaking about a community event, played once. In the official test, Part 2 is the second of four recordings within 30 minutes and 40 questions; this timed test drills Part 2 only — 10 items, 8 minutes on the clock. The speaker describes the plan as she goes, so keep the map in front of you from the start.",
      timingSec: 480,
      audioParts: [
        {
          key: "part-1",
          label: "Part 2 — Foxdale Open Gardens Day briefing",
          directions:
            "Questions 1–10. Complete the notes, label the plan, then answer two multiple-choice questions. The recording plays once.",
          script: TIMED2_PART2_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–4. Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
          payload: {
            context:
              "FOXDALE OPEN GARDENS DAY — visitor notes\nProgramme (also the ticket): £ ___ (1)\nShuttle bus: runs every ___ (2) minutes\nTeas: served in the ___ (3) at St Oswald's\nThis year's cause: the ___ (4) restoration fund",
            blanks: [
              { answer: "4", alternatives: ["four"] },
              { answer: "20", alternatives: ["twenty"] },
              { answer: "hall", alternatives: [] },
              { answer: "riverbank", alternatives: [] },
            ],
            words: 3,
          },
          answer: {
            blanks: [
              { answer: "4", numbers: true },
              { answer: "20", numbers: true },
              { answer: "hall" },
              { answer: "riverbank" },
            ],
          },
          points: 4,
          skills: ["detail", "numbers", "note-taking"],
          difficulty: 3,
          explanation:
            "The programme costs four pounds and doubles as the ticket, the shuttle loops the village every twenty minutes, teas are served in the church hall at St Oswald's, and the plant stall's takings fund the riverbank restoration — four details spread evenly through the first half of the talk.",
        },
        {
          order: 2,
          group: "part-1",
          type: "MAP_LABEL",
          stem: "Questions 5–8. Label the village plan below. Write the correct letter, A–E, next to questions 5–8.",
          payload: {
            plan: {
              title: "Foxdale village — Open Gardens Day",
              caption: "You are standing in the village square, in the centre of the plan, facing the church at the top.",
              grid: [
                [
                  { room: "the Old Forge", blank: 5 },
                  { room: "St Oswald's Church", label: "Church" },
                  { room: "the Mill House", blank: 6 },
                ],
                [
                  { room: "Rose Cottage", blank: 7 },
                  { room: "village square", label: "Square" },
                  { room: "primary school", blank: 8 },
                ],
                [
                  { room: "river meadow", label: "Meadow" },
                  { room: "war memorial", label: "Memorial" },
                  { room: "river path", label: "River path" },
                ],
              ],
            },
            options: [
              { letter: "A", text: "Rose Cottage" },
              { letter: "B", text: "The Old Forge" },
              { letter: "C", text: "Primary school" },
              { letter: "D", text: "The Mill House" },
              { letter: "E", text: "St Oswald's Church" },
            ],
          },
          answer: { labels: ["B", "D", "A", "C"] },
          points: 4,
          skills: ["direction-language", "detail"],
          difficulty: 3,
          explanation:
            "From the square facing the church: the Old Forge sits in the far left corner, past the church (5 — B); the Mill House is in the far right corner where the river bends (6 — D); Rose Cottage is on the left-hand side along Mill Row (7 — A); and the primary school garden is on the right-hand side of the plan (8 — C). The church itself is the labelled building you face, never a blank.",
        },
        {
          order: 3,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 9. Choose the correct letter, A, B or C. What will happen at the primary school garden?",
          payload: {
            options: [
              "A plant sale.",
              "A brass-band performance.",
              "Picnics on the school field.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "The school hosts the brass band from three o'clock — the plant sale is only at the Old Forge, and picnicking on the school field is explicitly ruled out because the turf is new. Two of the three options quote things the speaker genuinely says, just in the wrong place, so location matters as much as content.",
        },
        {
          order: 4,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 10. Choose the correct letter, A, B or C. What does the speaker advise visitors to bring?",
          payload: {
            options: [
              "Cash for the stalls.",
              "Their own garden gloves.",
              "A folding chair.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 3,
          explanation:
            "Both the plant stall and the teas take coins and notes only, because the card machine died spectacularly last summer, so cash is the advice. Gloves are provided at every garden gate and benches stand everywhere, so the other two options are comforts the speaker has already arranged for you.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Timed Part 3 test — educational conversation (10 questions)
// ---------------------------------------------------------------------------

const TIMED3_PART3_SCRIPT = `TUTOR: Come in, both of you. This is the draft tutorial for your bike-share project, so let's spend twenty minutes on the report and ten on the presentation. Who wants to start?
HANA: I will. We collected three hundred and twelve responses over two weeks, mostly online, and the headline is that usage doubled after the station moved to the library steps.
BILAL: Doubled from a low base, though. I still think the response rate is disappointing — we'd hoped for a thousand.
HANA: But two weeks, no budget, exam season — three hundred is decent, Bilal. And the pattern is consistent across every faculty.
BILAL: Consistent, yes. Representative, I'm not so sure.
TUTOR: Leave that debate for your limitations section — it's a good debate to have there. Let's look at the structure. Bilal, the introduction runs to a page and a half; for a four-thousand-word report, cut it to one page.
BILAL: Really? I thought we needed more background on similar schemes.
TUTOR: The background belongs in your literature review — the introduction should state your questions, not the field's history.
HANA: The method section, though — I wondered about adding diagrams of the stations?
TUTOR: It's clear as it stands; I wouldn't touch it. Your charts are where I'd spend effort. You have eight of them scattered through the results.
BILAL: I did wonder whether to delete the two campus-map ones — they repeat each other.
HANA: Or move all the charts to an appendix, so the argument flows?
TUTOR: Neither. Keep all eight — but group them by campus, so the west-campus findings sit together. It reads as one story then.
HANA: Grouped by campus — we can do that.
TUTOR: And the literature review: you've missed the Norwegian studies entirely. The Trondheim comparison is the obvious gap — add a paragraph.
BILAL: I read one of those and wasn't impressed — the sampling looked odd.
TUTOR: Read the other three before you decide; a paragraph is the minimum. Now the conclusion — your argument is sound, but it's abstract. Illustrate it with two or three of the survey quotes, the ones about broken docks.
BILAL: I wanted to rewrite the whole conclusion from scratch, actually.
TUTOR: You don't need surgery, you need examples. And honesty: this is much stronger than I'd feared after the first draft — the analysis is genuinely sharp. The referencing, though, is sloppy; half your citations have no page numbers.
HANA: That's my fault — I'll fix the reference list tonight.
TUTOR: Good. Presentation, then, for the last ten minutes.
HANA: Can I suggest we lead with the helmet statistic? It's the one nobody expects — no-helmet riders were three times likelier to have had a crash.
TUTOR: Strong opening — yes.
BILAL: I thought we could show a short video of the cycle lanes at rush hour.
HANA: We'd never fit it into ten minutes. What if we read out the survey questions first, so people know what was asked?
TUTOR: The questions belong in the appendix, not the performance. Keep the audience for findings. And label the charts in everyday English — 'students per day', not 'freq/dy'. Questions come at the end, not during — save the interruptions for the seminar afterwards.
BILAL: So: helmet statistic first, plain chart labels, questions at the end.
TUTOR: Precisely. And could you two do a full run-through in Thursday's session? I'll sit in if the room allows.
HANA: We'd like that. Thank you.`;

export const listeningTimedPart3: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Timed Test — Part 3 (educational conversation)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "Part 3 pacing practice: a three-voice tutorial — two students and their tutor — full of proposals, rejections, agreement and attribution traps. The official Listening section runs 30 minutes for 40 questions across four parts; this timed test has 10 items, all from Part 3, with 8 minutes on the clock.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Part 3 timed test (educational conversation)",
      directions:
        "You will hear ONE recording: a conversation between two students and their tutor, played once. In the official test, Part 3 is the third of four recordings within 30 minutes and 40 questions; this timed test drills Part 3 only — 10 items, 8 minutes on the clock. Track who says what: several wrong answers quote one speaker's proposal that another speaker rejects.",
      timingSec: 480,
      audioParts: [
        {
          key: "part-1",
          label: "Part 3 — Report and presentation tutorial",
          directions:
            "Questions 1–10. Match five parts of the report to the tutor's instructions, answer three multiple-choice questions, then choose TWO letters for the final question.",
          script: TIMED3_PART3_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "MATCHING",
          stem: "Questions 1–5. What does the tutor tell the students to do with each part of the report? Write the correct letter, A–E, next to questions 1–5.",
          payload: {
            items: [
              { id: "i1", text: "The introduction" },
              { id: "i2", text: "The method section" },
              { id: "i3", text: "The charts" },
              { id: "i4", text: "The literature review" },
              { id: "i5", text: "The conclusion" },
            ],
            options: [
              { id: "o1", text: "shorten it" },
              { id: "o2", text: "expand it" },
              { id: "o3", text: "reorganise it" },
              { id: "o4", text: "add supporting examples" },
              { id: "o5", text: "leave it unchanged" },
            ],
          },
          answer: {
            pairs: { i1: "o1", i2: "o5", i3: "o3", i4: "o2", i5: "o4" },
          },
          points: 5,
          skills: ["detail", "attribution", "paraphrase"],
          difficulty: 4,
          explanation:
            "Every row hides an attribution trap: Bilal wants more background, but the tutor says cut the introduction to a page (shorten); Hana offers diagrams for the method, which the tutor leaves unchanged; the charts are neither deleted nor moved to an appendix but regrouped by campus (reorganise); the literature review gains a Norwegian paragraph (expand); and the conclusion needs survey quotes as examples, not the rewrite Bilal proposed.",
        },
        {
          order: 2,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 6. Choose the correct letter, A, B or C. What is the tutor's opinion of the report's analysis section?",
          payload: {
            options: [
              "It exceeded her expectations.",
              "It is the weakest part of the draft.",
              "It repeats the literature review.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["opinion", "detail"],
          difficulty: 4,
          explanation:
            "The tutor admits this draft is much stronger than she'd feared after the first one and calls the analysis genuinely sharp — so it exceeded her expectations. The criticism she does make in the same breath is about sloppy referencing, which is a different section entirely.",
        },
        {
          order: 3,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 7. Choose the correct letter, A, B or C. What do Bilal and Hana disagree about?",
          payload: {
            options: [
              "Whether the survey attracted enough responses.",
              "Whether moving the station increased usage.",
              "Whether the results are worth publishing.",
            ],
          },
          answer: { option: 0 },
          points: 1,
          skills: ["opinion", "agreement-disagreement"],
          difficulty: 4,
          explanation:
            "Hana calls three hundred responses decent for two weeks with no budget in exam season, while Bilal insists the rate is disappointing against their hope of a thousand — the disagreement is whether the response rate was adequate. Neither speaker doubts the doubling, and publishing never comes up.",
        },
        {
          order: 4,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 8. Choose the correct letter, A, B or C. What has been arranged for Thursday's session?",
          payload: {
            options: [
              "A talk on the Norwegian studies.",
              "A rehearsal of the presentation.",
              "A redesign of the report's charts.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "paraphrase"],
          difficulty: 4,
          explanation:
            "The tutor asks the students to do a full run-through of the presentation in Thursday's session and offers to sit in if the room allows — a rehearsal, in other words. The Norwegian studies belong to the literature review they must read, and the charts are regrouped while they write, not on Thursday.",
        },
        {
          order: 5,
          group: "part-1",
          type: "MCQ_MULTI",
          stem: "Questions 9–10. Choose TWO letters, A–E. Which TWO pieces of advice for the presentation does the tutor give?",
          payload: {
            options: [
              "Open with the most surprising statistic.",
              "Replace the charts with photographs.",
              "Label the charts in everyday language.",
              "Read the survey questions aloud first.",
              "Show a short video of the cycle lanes.",
            ],
          },
          answer: { options: [0, 2] },
          points: 2,
          skills: ["paraphrase", "attribution", "distractor-awareness"],
          difficulty: 5,
          explanation:
            "The tutor endorses opening with the helmet statistic — the finding nobody expects — and instructs the students to label the charts in everyday English, 'students per day' rather than 'freq/dy'. Options D and E are the students' own suggestions, which she rejects, so matching a familiar phrase to the tutor's advice is the trap here.",
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Timed Part 4 test — academic monologue (10 questions)
// ---------------------------------------------------------------------------

const TIMED4_PART4_SCRIPT = `LECTURER: Good morning. Today I want to talk about how we came to map the deepest parts of the ocean — a story that begins with rope and ends with satellites. I'll begin with the age of sail.
LECTURER: For centuries, the only way to measure depth was the sounding line: sailors lowered a lead weight on a very long rope, waited until it hit the bottom, and counted the knots. It worked, after a fashion, in shallow water. In the deep ocean it was nearly useless — the rope stretches, the ship drifts, and a single reading could eat up most of a day.
LECTURER: What the line did give us, though, was proof that the sea floor was not flat: crews hauled up mud, sand, shark teeth and the occasional manganese nodule, so there was sediment down there — and, more remarkably, life.
LECTURER: Turning now to the great expeditions of the nineteenth century. In eighteen seventy-two, HMS Challenger left Portsmouth with several hundred kilometres of Italian hemp and, in effect, a floating laboratory. Over four years the crew took close to five hundred deep soundings and dredged the seabed at every one of them, scooping up creatures from five miles down — the first people in history to bring up animals from the abyss.
LECTURER: And here is the remarkable part: many of Challenger's readings, once corrected for the stretch of the rope, fall within a few per cent of modern figures. Patient rope, careful arithmetic.
LECTURER: My third point is echo sounding, which arrived between the wars. The principle is simple: a transmitter sends sound pulses downward, and a chronograph times the echo off the bottom; depth is half the travel time multiplied by the speed of sound in water.
LECTURER: After nineteen forty-five the equipment improved enormously, and it will surprise nobody that the military funded most of the mapping — submarine warfare demanded to know every trench and every seamount. Those naval surveys, gradually declassified, still underlie a fair share of today's charts.
LECTURER: Which brings me to satellites. Since the nineteen nineties, altimeters have measured the height of the sea surface to within a few centimetres — and because an underwater mountain pulls extra water towards itself, the surface bulges gently over the hills of the hidden seabed. From those bulges, mathematicians inferred thousands of underwater volcanoes that no ship had ever logged.
LECTURER: The catch, as ever, is resolution: satellites paint the ocean's mountains in very broad strokes.
LECTURER: So where do we stand today? At this moment, barely a quarter of the ocean floor has been mapped to high resolution — rather less, in fact, than the surface of Mars, which we photographed in detail decades ago.
LECTURER: The Seabed 2030 project aims to close the gap by persuading every vessel — fishing boats, ferries, even sailing yachts — to share its echo-sounder data, and every contribution is published freely, for any scientist, anywhere. I'll be honest with you: I find that project genuinely transformative, and I also suspect the 2030 deadline is optimistic — the ocean is very large, and ships are slow.
LECTURER: To close: from hemp rope to satellite altimetry in a hundred and fifty years, and still three-quarters of the map to draw. Next week we look at the creatures that all this mapping keeps discovering. Thank you.`;

export const listeningTimedPart4: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "IELTS Listening Timed Test — Part 4 (academic monologue)",
  kind: "section",
  lengthLabel: "sample",
  description: mockDescription(
    "Part 4 pacing practice: one academic lecture — the mapping of the ocean floor, from sounding lines to satellites — with signposting, academic vocabulary and dates and figures throughout, plus one-word note completion. The official Listening section runs 30 minutes for 40 questions across four parts; this timed test has 10 items, all from Part 4, with 8 minutes on the clock.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — Part 4 timed test (academic monologue)",
      directions:
        "You will hear ONE recording: a university lecture, played once. In the official test, Part 4 is the final recording within 30 minutes and 40 questions; this timed test drills Part 4 only — 10 items, 8 minutes on the clock. The notes paraphrase the lecture, so listen for meaning, not matching words.",
      timingSec: 480,
      audioParts: [
        {
          key: "part-1",
          label: "Part 4 — Lecture: mapping the ocean floor",
          directions:
            "Questions 1–10. Complete the lecture notes with ONE WORD ONLY, then answer two multiple-choice questions.",
          script: TIMED4_PART4_SCRIPT,
        },
      ],
      questions: [
        {
          order: 1,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 1–4. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context:
              "MAPPING THE OCEAN FLOOR — early methods\nSailors measured depth with a weighted ___ (1)\nThe HMS Challenger expedition dredged samples from the ___ (2)\nEcho sounding works by timing sound ___ (3)\nPost-war surveys were funded mainly by the ___ (4)",
            blanks: [
              { answer: "rope", alternatives: [] },
              { answer: "seabed", alternatives: [] },
              { answer: "pulses", alternatives: [] },
              { answer: "military", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [
              { answer: "rope" },
              { answer: "seabed" },
              { answer: "pulses" },
              { answer: "military" },
            ],
          },
          points: 4,
          skills: ["paraphrase", "note-taking", "academic-vocabulary"],
          difficulty: 4,
          explanation:
            "The lecture runs chronologically: sailors lowered a lead weight on a very long rope, the Challenger crew dredged the seabed at every sounding, echo sounding times the sound pulses that a transmitter sends downward, and post-war mapping money came mostly from the military, because submarine warfare demanded it.",
        },
        {
          order: 2,
          group: "part-1",
          type: "FILL_BLANK",
          stem: "Questions 5–8. Complete the notes below. Write ONE WORD ONLY for each answer.",
          payload: {
            context:
              "MAPPING THE OCEAN FLOOR — modern methods\nSatellites measure the height of the sea ___ (5)\nSea-surface bulges revealed thousands of underwater ___ (6)\nOnly a ___ (7) of the seabed is mapped in high resolution\nThe Seabed 2030 project publishes all contributions ___ (8)",
            blanks: [
              { answer: "surface", alternatives: [] },
              { answer: "volcanoes", alternatives: [] },
              { answer: "quarter", alternatives: [] },
              { answer: "freely", alternatives: [] },
            ],
            words: 1,
          },
          answer: {
            blanks: [
              { answer: "surface" },
              { answer: "volcanoes" },
              { answer: "quarter" },
              { answer: "freely" },
            ],
          },
          points: 4,
          skills: ["paraphrase", "note-taking", "academic-vocabulary"],
          difficulty: 5,
          explanation:
            "The modern half is heavily paraphrased: altimeters measure the height of the sea surface, the gentle bulges let mathematicians infer thousands of underwater volcanoes, barely a quarter of the floor is mapped to high resolution — less than the surface of Mars — and every contribution to Seabed 2030 is published freely for any scientist anywhere.",
        },
        {
          order: 3,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 9. Choose the correct letter, A, B or C. What does the lecturer say about HMS Challenger?",
          payload: {
            options: [
              "Its readings were inaccurate because the rope stretched.",
              "It was the first expedition to retrieve animals from the deep.",
              "It proved the seabed was flat and lifeless.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["detail", "distractor-awareness"],
          difficulty: 4,
          explanation:
            "The lecturer stresses that Challenger's crew scooped up creatures from five miles down — the first people in history to bring up animals from the abyss. The rope did stretch, but once corrected the readings were accurate, so option A distorts her point, and option C reverses it entirely.",
        },
        {
          order: 4,
          group: "part-1",
          type: "MCQ_SINGLE",
          stem: "Question 10. Choose the correct letter, A, B or C. What is the lecturer's attitude to the Seabed 2030 project?",
          payload: {
            options: [
              "Confident the deadline will be met.",
              "Supportive but doubtful about the timeline.",
              "Indifferent to its scientific value.",
            ],
          },
          answer: { option: 1 },
          points: 1,
          skills: ["attitude", "hedging", "paraphrase"],
          difficulty: 5,
          explanation:
            "She calls the project genuinely transformative, yet suspects the 2030 deadline is optimistic because the ocean is very large and ships are slow — supportive of the aim but realistic about the pace. She is plainly not indifferent, and she never says the deadline will be met.",
        },
      ],
    },
  ],
};
