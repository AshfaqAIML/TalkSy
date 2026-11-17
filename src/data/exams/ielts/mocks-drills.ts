/**
 * Question-type drills — short, technique-focused sets for the day after a
 * mock exposes a weakness. Objective items are machine-marked; speaking
 * drills are rubric-graded.
 */

import type { MockSeed } from "./mocks";
import { mockDescription } from "./mocks";

// Shared passages for drills (short, original)
const DRILL_PASSAGE_HELIOS = `HELIOS FOUNDRY — A SHORT HISTORY
A. The Helios foundry opened in 1888 on the strength of one contract: lamp housings for a gas company that was then lighting half the capital. The buildings were raised in two years, the canal arm dug straight to the casting floor so that coal came in and iron went out without a cart ever touching a road.
B. The founders' mistake was to build for one customer. When the gas company moved to electric fittings in the 1920s, orders halved inside three years, and the works survived only by taking whatever came: manhole covers, railings, one infamous batch of garden gnomes that the board never discussed in writing.
C. What saved the plant, in the end, was the war, and what saved it after the war was the awkward decision to specialise in small batches — the work bigger foundries would not stop for. By 1960 Helios was the place other manufacturers sent the piece nobody else could cast, a reputation built on precisely the work the accounts department had once tried to refuse.
D. The foundry closed in 1987, not because demand failed but because the land under it became worth more than the output. The buildings stand; the canal arm is a nature reserve; and the archive, which the family kept in a loft for thirty years, is now catalogued by volunteers who knew the men who made it.`;

export const tfngYnngDrill: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — True/False/Not Given vs Yes/No/Not Given",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "The boundary drill: factual-information items (True/False/Not Given) and writer's-claims items (Yes/No/Not Given) on one short passage. Six items.",
  ),
  sections: [
    {
      key: "reading",
      title: "TFNG / YNNG drill",
      directions: "Read the passage once. Then decide each item — and notice which family each block belongs to.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "TFNG",
          stem: "Questions 1–3. Do the following statements agree with the information given in the passage?",
          payload: { passage: DRILL_PASSAGE_HELIOS, statement: "The foundry was built beside a canal so that goods could move without road transport.", labels: ["True", "False", "Not Given"] },
          answer: { value: 0 },
          skills: ["detail", "paraphrase"],
        },
        {
          order: 2,
          type: "TFNG",
          payload: { passage: DRILL_PASSAGE_HELIOS, statement: "Orders fell by half within three years of the gas company switching to electric fittings.", labels: ["True", "False", "Not Given"] },
          answer: { value: 0 },
          skills: ["detail", "numbers"],
        },
        {
          order: 3,
          type: "TFNG",
          payload: { passage: DRILL_PASSAGE_HELIOS, statement: "The foundry's garden gnomes were its most profitable product.", labels: ["True", "False", "Not Given"] },
          answer: { value: 2 },
          skills: ["not-given"],
        },
        {
          order: 4,
          type: "TFNG",
          stem: "Questions 4–6. Do the following statements reflect the claims of the writer?",
          payload: { passage: DRILL_PASSAGE_HELIOS, statement: "The writer considers the accounts department's earlier refusals to have been short-sighted.", labels: ["Yes", "No", "Not Given"] },
          answer: { value: 0 },
          skills: ["writer-claims", "tone"],
        },
        {
          order: 5,
          type: "TFNG",
          payload: { passage: DRILL_PASSAGE_HELIOS, statement: "In the writer's account, the foundry closed because demand failed.", labels: ["Yes", "No", "Not Given"] },
          answer: { value: 1 },
          skills: ["writer-claims"],
        },
        {
          order: 6,
          type: "TFNG",
          payload: { passage: DRILL_PASSAGE_HELIOS, statement: "The writer believes the archive should have been given to a university.", labels: ["Yes", "No", "Not Given"] },
          answer: { value: 2 },
          skills: ["writer-claims", "not-given"],
        },
      ],
    },
  ],
};

export const matchingHeadingsDrill: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — Matching headings",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription("Four paragraphs, a heading list with two distractors, and the claim-not-vocabulary rule. Four items."),
  sections: [
    {
      key: "reading",
      title: "Matching headings drill",
      directions: "Match each paragraph to its heading. Headings paraphrase the paragraph's claim, not its vocabulary.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "MATCHING",
          stem: "Questions 1–4. Choose the most suitable heading (i–vi) for each paragraph. TWO headings will not be used.",
          payload: {
            passage: DRILL_PASSAGE_HELIOS,
            prompt: "Match paragraphs A–D to headings i–vi. Two headings are extra.",
            items: [
              { id: "pA", text: "Paragraph A" },
              { id: "pB", text: "Paragraph B" },
              { id: "pC", text: "Paragraph C" },
              { id: "pD", text: "Paragraph D" },
            ],
            options: [
              { id: "i", text: "i — Built around one contract" },
              { id: "ii", text: "ii — A single customer's departure" },
              { id: "iii", text: "iii — Saved by the work others refused" },
              { id: "iv", text: "iv — Closed by the land, not the market" },
              { id: "v", text: "v — Garden gnomes for export" },
              { id: "vi", text: "vi — A canal becomes a reserve" },
            ],
          },
          answer: { pairs: { pA: "i", pB: "ii", pC: "iii", pD: "iv" } },
          points: 4,
          skills: ["main-idea", "paraphrase"],
        },
      ],
    },
  ],
};

export const overviewDrill: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — Task 1 overview sentences",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Five items: pick the valid overview (biggest features, no numbers, no opinion) and reject the body-detail and opinion decoys.",
  ),
  sections: [
    {
      key: "writing",
      title: "Overview drill",
      directions: "Each item shows a chart summary in words. Choose the sentence that works as the report's OVERVIEW.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Item 1. The data: UK household energy use — gas 31%, electricity 27%, transport fuels 24%, other 18%; gas and transport falling slowly, electricity flat. Which is the best overview?",
          payload: {
            options: [
              "Gas was 31% and electricity was 27%, while transport fuels made up 24% and other sources 18%.",
              "Overall, energy use is dominated by gas and electricity, with the two together accounting for well over half, and no single category changing dramatically.",
              "Sadly, houses waste too much energy, which the government must address.",
            ],
          },
          answer: { option: 1 },
          skills: ["overview", "task-achievement"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Item 2. The data: visitors to a museum — 2019: 240k; 2020: 60k; 2021: 190k; 2022: 300k; 2023: 335k. Which is the best overview?",
          payload: {
            options: [
              "Overall, after a severe collapse in 2020, attendance recovered past its previous peak and continued rising to a new high.",
              "In 2020 there were 60,000 visitors, and in 2023 there were 335,000.",
              "The museum deserves more funding because it is clearly popular.",
            ],
          },
          answer: { option: 0 },
          skills: ["overview"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Item 3. The data: four cities' bicycle hire trips — Amsterdam 4.1m→4.6m; Paris 6.8m→9.3m; Seoul 2.5m→6.1m; Toronto 1.2m→1.9m. Which is the best overview?",
          payload: {
            options: [
              "Seoul had 2.5 million trips in 2022 and 6.1 million in 2024, a more than twofold increase.",
              "Overall, hiring grew in every city, with the steepest rise in Seoul, which overtook Paris's starting base but not its level.",
              "Bicycles are better than cars and cities should do more for them.",
            ],
          },
          answer: { option: 1 },
          skills: ["overview", "comparison"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Item 4. The data: a process — five stages from harvesting to packaging, cyclical at the end (waste returned to compost). Which is the best overview?",
          payload: {
            options: [
              "The process consists of five stages, from harvesting to packaging, and is cyclical because waste is returned to compost.",
              "First the crop is harvested and then it is washed and then it is dried.",
              "Farmers work very hard and should be paid more.",
            ],
          },
          answer: { option: 0 },
          skills: ["overview", "process"],
        },
        {
          order: 5,
          type: "MCQ_SINGLE",
          stem: "Item 5. The data: two maps — a village in 1980 (orchard, dairy, two shops) and today (orchard gone, housing estate, supermarket). Which is the best overview?",
          payload: {
            options: [
              "There was an orchard in 1980 and in 2025 there is a supermarket instead.",
              "The village's character changed fundamentally: agriculture has disappeared, replaced by housing and retail.",
              "Progress is a pity, and the village should have stayed as it was.",
            ],
          },
          answer: { option: 1 },
          skills: ["overview", "maps"],
        },
      ],
    },
  ],
};

export const paraphraseDrill: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — Paraphrase recognition (reading)",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Five items: choose the option that truly paraphrases the statement — and reject the verbatim decoys that change one relation.",
  ),
  sections: [
    {
      key: "reading",
      title: "Paraphrase drill",
      directions: "In each item, exactly ONE option is a faithful paraphrase. The others echo the passage with a twist.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Item 1. Passage line: 'Only after the archive was digitised did the pattern become visible.' Which option paraphrases it?",
          payload: {
            options: [
              "The pattern became visible only after digitisation.",
              "The archive was digitised only after the pattern became visible.",
              "Digitisation happened because the pattern was already visible.",
            ],
          },
          answer: { option: 0 },
          skills: ["paraphrase", "implication"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Item 2. Passage line: 'A meaningful share never returns to the shelf at all.' Which option paraphrases it?",
          payload: {
            options: [
              "A meaningful share never returns to the shelf.",
              "Nothing ever returns to the shelf.",
              "Most items are returned to the shelf within a week.",
            ],
          },
          answer: { option: 0 },
          skills: ["paraphrase", "quantifiers"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Item 3. Passage line: 'The cheapest medicine is old-fashioned shade.' Which option paraphrases it?",
          payload: {
            options: [
              "Old-fashioned shade is the cheapest medicine.",
              "Medicine is the cheapest form of old-fashioned shade.",
              "Expensive shade is the best medicine.",
            ],
          },
          answer: { option: 0 },
          skills: ["paraphrase", "relations"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Item 4. Passage line: 'Retailers respond by quietly adjusting prices to cover expected returns.' Which option paraphrases it?",
          payload: {
            options: [
              "Prices are quietly adjusted so that expected returns are covered.",
              "Retailers quietly return prices to cover expected adjustments.",
              "Expected retailers quietly cover adjusted prices.",
            ],
          },
          answer: { option: 0 },
          skills: ["paraphrase", "passive"],
        },
        {
          order: 5,
          type: "MCQ_SINGLE",
          stem: "Item 5. Passage line: 'Every serious review reaches the same two conclusions: the science is sound at the level of fields, and unusable at the level of trade.' Which option paraphrases it?",
          payload: {
            options: [
              "The science works at field level but cannot serve trade.",
              "The science works at trade level but cannot serve fields.",
              "The science works at both field and trade level.",
            ],
          },
          answer: { option: 0 },
          skills: ["paraphrase", "parallel"],
        },
      ],
    },
  ],
};

export const gtNoticesDrill: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "Drill — GT Section 1: notices and conditions",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Everyday texts with headline bait and small-print conditions — the gap between them is where the answers live. Five items.",
  ),
  sections: [
    {
      key: "reading",
      title: "Notices drill",
      directions: "Read the shapes first: prices, days, and the conditions line.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Item 1. AD: 'SWIM ANYTIME — just £5!' Small print: 'Off-peak only (weekdays before 9 a.m. and after 6 p.m.); peak sessions £9.' When is the £5 price valid?",
          payload: {
            options: [
              "Any time the pool is open.",
              "Weekdays before 9 a.m. and after 6 p.m.",
              "Weekends all day.",
            ],
          },
          answer: { option: 1 },
          skills: ["conditions"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Item 2. NOTICE: 'Lost property open daily.' Small print: 'Daily except Wednesdays, when the office is used for training; items unclaimed after 8 weeks are donated.' What happens on Wednesdays?",
          payload: {
            options: [
              "Lost property opens at 9.",
              "Lost property is closed; the office is used for training.",
              "Unclaimed items are donated.",
            ],
          },
          answer: { option: 1 },
          skills: ["conditions", "corrections"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Item 3. AD: 'First lesson free!' Small print: 'Free taster for new students only; existing students may bring a friend to one taster between them per term.' You are an existing student. What can you do?",
          payload: {
            options: [
              "Take a free taster yourself this term.",
              "Bring one friend to a single taster this term (shared with the family of existing students).",
              "Take unlimited free lessons.",
            ],
          },
          answer: { option: 1 },
          skills: ["conditions"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Item 4. TIMETABLE: 'Buses every 10 minutes.' Footnote: 'Every 10 minutes Monday–Friday 7–9 a.m. and 4–6 p.m.; every 20 minutes otherwise; hourly after 10 p.m.; no service after midnight.' A bus at 22:40 comes…",
          payload: {
            options: [
              "Every 10 minutes.",
              "Every 20 minutes — it is outside the peaks but before 10 p.m.? No: at 22:40 the service is hourly.",
              "Every 30 minutes.",
            ],
          },
          answer: { option: 1 },
          skills: ["conditions", "time-zones"],
        },
        {
          order: 5,
          type: "MCQ_SINGLE",
          stem: "Item 5. NOTICE: 'Room hire from £20.' Small print: '£20 for the small room (up to 12 people) Monday–Thursday; Friday and weekend rate £35; the large room is £60 any day; both rates include VAT; cleaning surcharge £15 on Sundays only.' What does the small room cost on a Sunday?",
          payload: {
            options: [
              "£20.",
              "£35 + £15 cleaning = £50.",
              "£60.",
            ],
          },
          answer: { option: 1 },
          skills: ["conditions", "arithmetic"],
        },
      ],
    },
  ],
};

export const gtToneDrill: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "Drill — GT letters: choosing the right tone",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Register decisions: pick the line whose formality matches the stated recipient. Five items.",
  ),
  sections: [
    {
      key: "writing",
      title: "Letter tone drill",
      directions: "Each item names the recipient. Choose the line that matches — and remember the sign-off pairs.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "MCQ_SINGLE",
          stem: "Item 1. Recipient: a hotel manager you have never met. Which opening and sign-off?",
          payload: {
            options: [
              "Dear Sir or Madam, … Yours faithfully,",
              "Dear Ana, … Love,",
              "Hey, … Cheers,",
            ],
          },
          answer: { option: 0 },
          skills: ["tone", "register"],
        },
        {
          order: 2,
          type: "MCQ_SINGLE",
          stem: "Item 2. Recipient: your landlord, Mr Silva, about a broken heating system. Which request line?",
          payload: {
            options: [
              "I would be grateful if the boiler could be repaired this week.",
              "Fix my boiler now or I'm leaving.",
              "Silva, the boiler's bust again, sort it.",
            ],
          },
          answer: { option: 0 },
          skills: ["tone", "register"],
        },
        {
          order: 3,
          type: "MCQ_SINGLE",
          stem: "Item 3. Recipient: a close friend who missed your birthday meal. Which line fits?",
          payload: {
            options: [
              "I am writing to formally register my disappointment regarding the dinner of the 14th.",
              "We missed you on Saturday — the food was brilliant and you'd have loved it. Everything OK?",
              "Please be advised that your absence has been noted.",
            ],
          },
          answer: { option: 1 },
          skills: ["tone", "informal"],
        },
        {
          order: 4,
          type: "MCQ_SINGLE",
          stem: "Item 4. Recipient: your manager, Priya, asking to leave an hour early on Friday. Which line?",
          payload: {
            options: [
              "Priya — could I slip off an hour early on Friday? I'd make the time up on Monday morning.",
              "I demand to leave early Friday.",
              "Dear Madam, I remain, Sir, your faithful servant.",
            ],
          },
          answer: { option: 0 },
          skills: ["tone", "semi-formal"],
        },
        {
          order: 5,
          type: "MCQ_SINGLE",
          stem: "Item 5. Which sign-off pair is matched correctly for a semi-formal letter to a named recipient?",
          payload: {
            options: [
              "Dear Ms Okafor, … Yours sincerely,",
              "Dear Ms Okafor, … Yours faithfully,",
              "Dear Ms Okafor, … See you soon,",
            ],
          },
          answer: { option: 0 },
          skills: ["tone", "sign-offs"],
        },
      ],
    },
  ],
};

export const numbersSpellingDrillAcademic: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — Listening: numbers, dates and spelling (Academic)",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Dictation micro-skills: teen vs ty, spelled surnames, double letters, times and prices in clusters. Five items.",
  ),
  sections: [
    {
      key: "listening",
      title: "Numbers and spelling drill",
      directions: "Play each recording once; write exactly what is dictated.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Item 1. Write the number you hear (figures or words).",
          payload: {
            audioScript: "RECEPTIONIST: The invoice comes to fifteen pounds fifty — that's fifteen fifty, not fifty fifteen — and the deposit is thirteen, one-three, pounds.",
            context: "Invoice total: £___ (1)\nDeposit: £13",
            blanks: [{ answer: "15.50", alternatives: ["15 50", "fifteen fifty", "15,50", "15.5"] }],
            words: 3,
          },
          answer: { blanks: [{ answer: "15.50", numbers: true }] },
          skills: ["numbers", "teen-ty"],
        },
        {
          order: 2,
          type: "FILL_BLANK",
          stem: "Item 2. Write the time you hear.",
          payload: {
            audioScript: "CLERK: The coach leaves at quarter to seven in the morning — not seven fifteen as the timetable says; the timetable is being reprinted.",
            context: "Coach departs: ___ (1) — not 7:15",
            blanks: [{ answer: "6:45", alternatives: ["06:45", "quarter to seven", "six forty-five", "645"] }],
            words: 3,
          },
          answer: { blanks: [{ answer: "6:45", numbers: true }] },
          skills: ["times", "corrections"],
        },
        {
          order: 3,
          type: "FILL_BLANK",
          stem: "Item 3. Write the surname you hear, spelled correctly.",
          payload: {
            audioScript: "NURSE: And the family name for the record? PATIENT: It's Krzyzewski — that's K-R-Z at the start, then Y-Z-E-W-S-K-I. People drop the first Z, and it matters.",
            context: "Patient family name: ___ , K-R-Z-Y-Z-E-W-S-K-I",
            blanks: [{ answer: "Krzyzewski", alternatives: ["krzyzewski"] }],
            words: 1,
          },
          answer: { blanks: [{ answer: "Krzyzewski" }] },
          skills: ["spelling"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Item 4. Write the date you hear.",
          payload: {
            audioScript: "AGENT: The earliest delivery is the thirtieth of April — that's the thirtieth, not the thirteenth; the thirteenth is fully booked.",
            context: "Delivery date: the ___ of April (1)",
            blanks: [{ answer: "thirtieth", alternatives: ["30th", "30"] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "thirtieth", numbers: true }] },
          skills: ["dates", "teen-ty"],
        },
        {
          order: 5,
          type: "FILL_BLANK",
          stem: "Item 5. Write the address you hear.",
          payload: {
            audioScript: "DRIVER: Where to? PASSENGER: Forty-two Harcourt Avenue — Harcourt is H-A-R-C-O-U-R-T — flat C, and the entrance is on the side street, Felicity Lane.",
            context: "Address: ___ Harcourt Avenue, Flat C (1)\nEntrance: Felicity Lane",
            blanks: [{ answer: "42", alternatives: ["forty-two", "fourty two", "forty two"] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "42", numbers: true }] },
          skills: ["numbers", "spelling"],
        },
      ],
    },
  ],
};

export const numbersSpellingDrillGeneral: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "Drill — Listening: numbers, dates and spelling (General Training)",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "The same dictation micro-skills on fresh everyday material (identical Listening test across variants). Five items.",
  ),
  sections: [
    {
      key: "listening",
      title: "Numbers and spelling drill",
      directions: "Play each recording once; write exactly what is dictated.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "FILL_BLANK",
          stem: "Item 1. Write the price you hear.",
          payload: {
            audioScript: "TAILOR: The alteration is nine pounds — nine, not ninety; ninety is what the suit cost, and the suit's fine.",
            context: "Alteration fee: £___ (1)",
            blanks: [{ answer: "9", alternatives: ["nine", "9.00"] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "9", numbers: true }] },
          skills: ["numbers", "teen-ty"],
        },
        {
          order: 2,
          type: "FILL_BLANK",
          stem: "Item 2. Write the phone number you hear.",
          payload: {
            audioScript: "NEIGHBOUR: Anything up, ring me — it's oh-seven-seven-double-two, six-four-oh, nine-one-oh. The last bit is nine-one-oh, not nine-one-two; I always get mixed up with the old one.",
            context: "Neighbour's mobile: 077 22 64___ (1)",
            blanks: [{ answer: "910", alternatives: ["nine one oh", "9-1-0"] }],
            words: 3,
          },
          answer: { blanks: [{ answer: "910", numbers: true }] },
          skills: ["numbers", "corrections"],
        },
        {
          order: 3,
          type: "FILL_BLANK",
          stem: "Item 3. Write the street name you hear.",
          payload: {
            audioScript: "SUPPLIER: The drop is on Lowndes Terrace — that's L-O-W-N-D-E-S, one word, Terrace separate. Not Lounds, which is the road by the station; that's a different firm entirely.",
            context: "Delivery street: ___ Terrace, L-O-W-N-D-E-S (1)",
            blanks: [{ answer: "Lowndes", alternatives: ["lowndes"] }],
            words: 1,
          },
          answer: { blanks: [{ answer: "Lowndes" }] },
          skills: ["spelling"],
        },
        {
          order: 4,
          type: "FILL_BLANK",
          stem: "Item 4. Write the time you hear.",
          payload: {
            audioScript: "DENTIST: We can see you at twenty past three — that's this afternoon, not the morning — or tomorrow at ten to eight if you're an early sort.",
            context: "Offered times: 3:20 p.m. today, or ___ a.m. tomorrow (1)",
            blanks: [{ answer: "7:50", alternatives: ["07:50", "ten to eight", "seven fifty", "750"] }],
            words: 3,
          },
          answer: { blanks: [{ answer: "7:50", numbers: true }] },
          skills: ["times"],
        },
        {
          order: 5,
          type: "FILL_BLANK",
          stem: "Item 5. Write the quantity you hear.",
          payload: {
            audioScript: "GROCER: How many? Sixty? CUSTOMER: Thirteen, please — thirteen rolls, not thirty; there's only two of us.",
            context: "Rolls required: ___ (1)",
            blanks: [{ answer: "thirteen", alternatives: ["13"] }],
            words: 2,
          },
          answer: { blanks: [{ answer: "thirteen", numbers: true }] },
          skills: ["teen-ty"],
        },
      ],
    },
  ],
};

export const cueCardDrillAcademic: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — Cue-card long turn (Academic)",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Two long turns with the four-corner method: prepare in one minute, speak to the full time, end on the 'explain' line. Rubric-graded.",
  ),
  sections: [
    {
      key: "speaking",
      title: "Long turn drill",
      directions: "One minute of notes, then 1–2 minutes of speech. End with reflection, not a list.",
      timingSec: 480,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Cue card: Describe an advertisement you remember well. You should say: what it advertised · where you saw it · what happened in it · and explain why it stayed with you.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Long turn 1 — object/media",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Cue card: Describe a decision that took you a long time. You should say: what the decision was · why it was difficult · what you finally chose · and explain how you feel about the choice now.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Long turn 2 — experience",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
      ],
    },
  ],
};

export const cueCardDrillGeneral: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "Drill — Cue-card long turn (General Training)",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Two long turns on everyday material (identical Speaking test across variants), trained with the same four-corner method.",
  ),
  sections: [
    {
      key: "speaking",
      title: "Long turn drill",
      directions: "One minute of notes, then 1–2 minutes of speech. End with reflection, not a list.",
      timingSec: 480,
      questions: [
        {
          order: 1,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Cue card: Describe a meal you remember well. You should say: where you had it · who you were with · what you ate · and explain why the meal stayed with you.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Long turn 1 — everyday experience",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
        {
          order: 2,
          type: "SPEAKING_TASK",
          payload: {
            prompt:
              "Cue card: Describe a shop you like going to. You should say: where it is · what it sells · how often you go there · and explain why you keep going back.",
            prepSec: 60,
            speakSec: 120,
            rubricKey: "ielts.speaking",
            part: "Long turn 2 — place",
          },
          points: 0,
          skills: ["fluency", "coherence"],
        },
      ],
    },
  ],
};
