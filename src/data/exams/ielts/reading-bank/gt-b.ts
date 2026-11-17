/**
 * General Training text library B (PROMPT 45, Parts C and D).
 *
 *   ielts-rb-gt-returns   — Section 2, instructions and procedure (standard, d3)
 *   ielts-rb-gt-holidays  — Section 2, workplace document: leave and sickness (standard, d3)
 *   ielts-rb-gt-warehouse — Section 2, workplace document: induction notes (standard, d3)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtReturns: ReadingExercise = {
  slug: "ielts-rb-gt-returns",
  title: "Two sets of instructions: the returns machine and your new shelf",
  variant: "gt",
  section: 2,
  subject: "Instructions",
  difficulty: 3,
  estimatedMinutes: 10,
  objective: "Follow procedural writing step by step — sequences, conditions and the warnings printed in bold.",
  intro: "Read the instructions below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Using the self-service returns machine",
      paragraphs: [
        "1. Scan the QR code on your receipt, or type your order number on the screen. 2. Tick the item or items you are returning from the list shown. 3. Choose a refund or an exchange. Refunds go back to the original payment card within five working days; exchanges are issued instantly as a voucher code on your receipt. 4. Print the label and attach it to the parcel — one label per parcel, however many items are inside. 5. Drop the parcel in the yellow box by the door. Keep your receipt until the refund arrives: without it, we can offer exchange only, and only within thirty days of purchase. If the machine rejects your order number, ask at the counter — do not put unlabelled parcels in the box.",
      ],
    },
    {
      heading: "Assembling your shelf — read before you begin",
      paragraphs: [
        "First check that the pack contains two side panels, four shelves and sixteen screws; missing parts are replaced free of charge within a year of purchase. Lay the panels on the cardboard box to avoid scratching the finish. Fix the lowest shelf first — the one marked with a red dot — and work upwards from there. Do not tighten any screw fully until all of them are in place: hand-tighten everything, then give each screw a final quarter-turn with the key provided. Finally, fix the shelf to the wall using the bracket supplied; it will not carry books safely until it is anchored.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "flowchart-completion",
      label: "Questions 1–4",
      instruction: "Complete the flow-chart below. Choose ONE WORD ONLY from the texts for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Returning an item by machine" }],
        [{ kind: "text", text: "Scan the QR code, or type your order" }, { kind: "blank", no: 1 }, { kind: "text", text: "on the screen." }],
        [{ kind: "text", text: "Tick the items being returned, then choose a refund or an" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "Print the label and attach it to the" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "Drop it in the yellow" }, { kind: "blank", no: 4 }, { kind: "text", text: "by the door." }],
      ],
      blanks: [
        {
          no: 1,
          answer: "number",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Scan the QR code on your receipt, or type your order number on the screen." }],
            explanation: "Step one offers two ways in: scanning the code or typing the order number. The flowchart keeps 'order' and asks for the noun that follows it.",
          },
        },
        {
          no: 2,
          answer: "exchange",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Choose a refund or an exchange." }],
            explanation: "Step three's menu has exactly two options: refund or exchange. The flowchart supplies 'refund' and needs its partner, printed later in the instructions as the voucher-code outcome.",
          },
        },
        {
          no: 3,
          answer: "parcel",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Print the label and attach it to the parcel" }],
            explanation: "Step four says to attach the printed label to the parcel — one label per parcel, whatever the item count. The flowchart's third box wants that noun.",
          },
        },
        {
          no: 4,
          answer: "box",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Drop the parcel in the yellow box by the door." }],
            explanation: "The final step names the drop-off point: the yellow box by the door. 'Yellow' is printed in the flowchart, so the missing word is the container itself.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 5–6",
      instruction: "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "An exchange is issued as a voucher code immediately.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "exchanges are issued instantly as a voucher code on your receipt" }],
            explanation: "The instructions state that exchanges are issued instantly as a voucher code — 'immediately' paraphrases 'instantly'. Procedural texts love this contrast: refunds wait five working days, exchanges do not.",
          },
        },
        {
          text: "Customers without a receipt can still receive a cash refund.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "without it, we can offer exchange only, and only within thirty days of purchase" }],
            explanation: "The final sentence rules the no-receipt case: exchange only, within thirty days. A cash refund is specifically excluded, which makes the statement FALSE rather than Not Given.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "note-completion",
      label: "Questions 7–8",
      instruction: "Complete the notes below. Choose ONE WORD ONLY from the texts for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Assembling the shelf" }],
        [{ kind: "text", text: "7. Hand-tighten every screw, then finish each with a quarter-turn using the" }, { kind: "blank", no: 7 }, { kind: "text", text: "provided." }],
        [{ kind: "text", text: "8. The shelf must be fixed to the wall with the" }, { kind: "blank", no: 8 }, { kind: "text", text: "supplied before it can carry books safely." }],
      ],
      blanks: [
        {
          no: 7,
          answer: "key",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "then give each screw a final quarter-turn with the key provided" }],
            explanation: "The assembly instructions name the tool: a final quarter-turn with the key provided. The note keeps the quarter-turn detail and asks for the tool.",
          },
        },
        {
          no: 8,
          answer: "bracket",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 1, paragraph: 0, quote: "fix the shelf to the wall using the bracket supplied" }],
            explanation: "The wall-fixing part is the bracket supplied. The warning that the shelf will not carry books until anchored is the reason this step is tested.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "receipt", partOfSpeech: "noun", definition: "the printed proof of purchase; keep it until the refund arrives." },
    { word: "refund", partOfSpeech: "noun", definition: "money returned to the buyer; refunds go back to the original card within five working days." },
    { word: "voucher", partOfSpeech: "noun", definition: "a credit note with a code; exchanges are issued as voucher codes." },
    { word: "hand-tighten", partOfSpeech: "verb", definition: "to tighten using only the fingers, before the final turn with a tool." },
    { word: "anchored", partOfSpeech: "verb (past participle)", definition: "fixed firmly to something solid; the shelf must be anchored to the wall to carry books." },
  ],
  passageNote: "Instructions are read with a finger on the order: step numbers, one-before-another words (until, then, finally) and the bold warnings. Flowchart questions are sequence checks wearing a diagram's clothes.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtHolidays: ReadingExercise = {
  slug: "ielts-rb-gt-holidays",
  title: "Employee handbook: annual leave and sickness",
  variant: "gt",
  section: 2,
  subject: "Workplace documents",
  difficulty: 3,
  estimatedMinutes: 11,
  objective: "Read a staff policy for entitlements and procedures: how much leave, how to book it, and what a sick day requires.",
  intro: "Read the document below and answer Questions 1–9.",
  blocks: [
    {
      heading: "Annual leave and sickness — the rules that matter",
      paragraphs: [
        "Annual leave. Full-time employees receive 25 days of paid annual leave per leave year (1 April to 31 March), in addition to public holidays. Part-time staff receive leave on a pro-rata basis. You may carry up to five unused days into the next leave year; anything above five is lost, so plan accordingly. Requests are made through the staff portal at least three weeks ahead and are confirmed by your line manager within seven days. The busy period, June to August, is restricted to two colleagues off per department at a time — book early, and expect popular weeks to be settled by seniority.",
        "Sickness. If you cannot work due to illness, telephone your manager before 9 am on the first day; a text message is accepted only where speaking is genuinely impossible. Self-certification covers the first seven calendar days; after that, a doctor's note is required, and it must reach HR within a further five days. Sick pay is full pay for the first ten working days in any rolling year, then statutory sick pay. Returning to work after more than four weeks requires a phased-return meeting with HR — a conversation about adjusting duties, not an assessment. During any adjustment period arranged with occupational health, your job is protected. Repeated short absences trigger a supportive meeting, not a disciplinary one; patterns interest us because they can point to fixable problems.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "true-false-not-given",
      label: "Questions 1–4",
      instruction: "Do the following statements agree with the information given in the document? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Part-time employees receive the same number of leave days as full-time staff.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Part-time staff receive leave on a pro-rata basis." }],
            explanation: "Part-timers receive leave pro-rata — proportionally to hours worked — which is by definition not the same flat number. Policy documents test exactly this entitlement arithmetic.",
          },
        },
        {
          text: "Leave days beyond the five that can be carried over expire at the end of the leave year.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "You may carry up to five unused days into the next leave year; anything above five is lost" }],
            explanation: "The carry-over clause caps saved days at five and declares anything above five lost. 'Expire at the end of the leave year' is the plain-English version of 'is lost'.",
          },
        },
        {
          text: "Leave requests must be submitted at least three weeks in advance.",
          answer: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Requests are made through the staff portal at least three weeks ahead" }],
            explanation: "The notice period for booking is three weeks ahead, stated in the same sentence as the portal itself. The detail most candidates miss — but the statement asks only for the notice period.",
          },
        },
        {
          text: "Reporting sickness by text message is acceptable in all circumstances.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 1, quote: "a text message is accepted only where speaking is genuinely impossible" }],
            explanation: "The word 'only' restricts texting to cases where speaking is impossible. 'In all circumstances' removes the restriction, contradicting the policy — the classic qualifier trap.",
            trap: { family: "extreme-language", note: "Texts ARE accepted — but only in a limited case; watch for 'only' inside the concession." },
            whyWrong: ["TRUE: the policy explicitly limits texts to situations where speaking is genuinely impossible."],
          },
        },
      ],
    },
    {
      id: "q2",
      type: "sentence-completion",
      label: "Questions 5–7",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the document for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "5. During the busy period, only" }, { kind: "blank", no: 5 }, { kind: "text", text: "per department may be on leave at the same time." }],
        [{ kind: "text", text: "6. Self-certification covers the first seven" }, { kind: "blank", no: 6 }, { kind: "text", text: "of any period of sickness." }],
        [{ kind: "text", text: "7. An employee returning after more than four weeks attends a phased-return meeting with" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 5,
          answer: "two colleagues",
          alternatives: ["2 colleagues"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "The busy period, June to August, is restricted to two colleagues off per department at a time" }],
            explanation: "The summer rule allows two colleagues off per department at a time. The sentence keeps 'per department' and asks for the quota that precedes it.",
          },
        },
        {
          no: 6,
          answer: "calendar days",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "Self-certification covers the first seven calendar days" }],
            explanation: "The self-certification window is the first seven calendar days — calendar days, not working days, which is the distinction the next sentence's sick-pay rule turns on.",
          },
        },
        {
          no: 7,
          answer: "HR",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Returning to work after more than four weeks requires a phased-return meeting with HR" }],
            explanation: "The phased-return meeting is with HR, described as a conversation about adjusting duties rather than an assessment. The abbreviation counts as one word.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "multiple-choice",
      label: "Questions 8–9",
      instruction: "Choose the correct letter, A, B or C.",
      items: [
        {
          stem: "Within any rolling year, full sick pay covers",
          options: [
            "the first seven calendar days of each illness",
            "the first ten working days in total",
            "every day of illness up to a year",
          ],
          correct: 1,
          lure: 0,
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Sick pay is full pay for the first ten working days in any rolling year, then statutory sick pay" }],
            explanation: "The sick-pay rule counts working days, not calendar days, and applies once per rolling year, not per illness. The seven-day figure belongs to self-certification — a different rule sitting two sentences away.",
            trap: { family: "order", note: "Two numbered windows live in the same paragraph: seven for paperwork, ten for pay." },
            whyWrong: ["A: seven calendar days is the self-certification period, not the pay window.", "C: after ten working days, pay drops to the statutory rate."],
          },
        },
        {
          stem: "During an adjustment period arranged with occupational health, the employee's job is",
          options: [
            "protected",
            "reviewed for redundancy",
            "transferred to another department",
          ],
          correct: 0,
          meta: {
            skills: ["detail", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "During any adjustment period arranged with occupational health, your job is protected." }],
            explanation: "The closing sentence gives the guarantee in one word: protected. Workplace documents end with reassurances that questions often quote directly.",
            whyWrong: ["B and C: neither redundancy review nor transfer appears in the document."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "pro-rata", partOfSpeech: "adverb / adjective", definition: "in proportion to hours worked; part-time leave is calculated pro-rata." },
    { word: "carry", partOfSpeech: "verb", definition: "to transfer an entitlement into the next period; you may carry up to five unused days." },
    { word: "seniority", partOfSpeech: "noun", definition: "length of service; popular leave weeks are settled by seniority." },
    { word: "self-certification", partOfSpeech: "noun", definition: "reporting your own illness without a doctor's note; it covers the first seven calendar days." },
    { word: "statutory", partOfSpeech: "adjective", definition: "fixed by law; statutory sick pay is the legal minimum rate." },
    { word: "phased", partOfSpeech: "adjective", definition: "happening in stages; a phased return rebuilds hours gradually." },
  ],
  passageNote: "Policies run on two rails — entitlements (numbers) and procedures (steps with qualifiers). Every question here hangs on one qualifier: pro-rata, only, calendar versus working days, rolling year.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtWarehouse: ReadingExercise = {
  slug: "ielts-rb-gt-warehouse",
  title: "Warehouse induction: health and safety essentials",
  variant: "gt",
  section: 2,
  subject: "Workplace documents",
  difficulty: 3,
  estimatedMinutes: 10,
  objective: "Read safety induction notes for rules and reasons: compulsory equipment, load limits, aisles, alarms and the reporting culture.",
  intro: "Read the document below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Read this before your first shift",
      paragraphs: [
        "Footwear. Safety boots are compulsory on the floor at all times — trainers are not acceptable, and that includes office staff crossing the floor to the canteen. High-visibility vests hang by every door; wear one whenever you are beyond the yellow line. Gloves are provided at every packing station and must be worn for sharp or heavy items. Manual handling. Bend your knees, keep the load close, and ask for help above 20 kg — two people or the pallet truck, never your back. The truck aisle is for trucks: pedestrians use the marked walkways, and headphones are banned on the floor entirely. Equipment. Lifting equipment is inspected weekly; the inspection tag is yellow. Do not use any truck whose tag is red or missing, and report it to the duty supervisor. Fire. Your assembly point is the far corner of the visitor car park. Alarms are tested every Tuesday at noon — that is a short ring; a continuous ring means leave by the nearest exit, closing doors behind you. First aid. The first-aid room is beside the canteen; trained first aiders wear green badges, and their photographs are on the noticeboard beside the clocking-in machine. Accidents, including near-misses, must be reported the same day on the two-minute online form. Near-misses are how we stop the next accident: no one here has ever been in trouble for reporting one.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "note-completion",
      label: "Questions 1–4",
      instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the document for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "Warehouse safety — the essentials" }],
        [{ kind: "text", text: "1. Footwear: safety" }, { kind: "blank", no: 1 }, { kind: "text", text: "are compulsory on the floor at all times." }],
        [{ kind: "text", text: "2. Beyond the yellow line, wear a high-visibility" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "3. Pedestrians must use the marked" }, { kind: "blank", no: 3 }, { kind: "text", text: "when trucks are working." }],
        [{ kind: "text", text: "4. Do not use a truck whose inspection tag is red or" }, { kind: "blank", no: 4 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 1,
          answer: "boots",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Safety boots are compulsory on the floor at all times" }],
            explanation: "The footwear rule names the required item: safety boots, compulsory at all times on the floor. The note keeps 'safety' and asks for the noun.",
          },
        },
        {
          no: 2,
          answer: "vest",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "High-visibility vests hang by every door; wear one whenever you are beyond the yellow line" }],
            explanation: "The yellow line is the boundary for the high-visibility vest, and the rule that creates the boundary is printed immediately before it. The note keeps 'high-visibility' and needs the garment noun.",
          },
        },
        {
          no: 3,
          answer: "walkways",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 0, quote: "pedestrians use the marked walkways" }],
            explanation: "The pedestrian rule routes people along the marked walkways, keeping the truck aisle for trucks. 'Marked' is printed in the note, so the missing word is the paths themselves.",
          },
        },
        {
          no: 4,
          answer: "missing",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Do not use any truck whose tag is red or missing" }],
            explanation: "A truck is out of service if its inspection tag is red or missing — either state means the weekly check has not blessed it. The note keeps 'red' and asks for the second disqualifying state.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 5–8",
      instruction: "Do the following statements agree with the information given in the document? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Office staff may cross the warehouse floor in trainers.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "trainers are not acceptable, and that includes office staff crossing the floor to the canteen" }],
            explanation: "The boot rule explicitly sweeps in office staff on their way to the canteen. The statement carves them back out, contradicting the document's one explicit exception clause.",
          },
        },
        {
          text: "Lifting equipment is checked every week.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "Lifting equipment is inspected weekly" }],
            explanation: "'Inspected weekly' and 'checked every week' are the same fact in two wordings. Safety documents repeat their inspection cycle because the tag system depends on it.",
          },
        },
        {
          text: "Headphones are permitted in the truck aisle if the volume is low.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "headphones are banned on the floor entirely" }],
            explanation: "The ban is total — 'on the floor entirely' — and the aisle is on the floor. The low-volume concession in the statement is invented, and inventing concessions is how FALSE items are built.",
            trap: { family: "extreme-language", note: "'Entirely' closes every door the statement tries to reopen." },
            whyWrong: ["TRUE: the document makes no exception for volume."],
          },
        },
        {
          text: "Workers have been disciplined for reporting near-misses.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "no one here has ever been in trouble for reporting one" }],
            explanation: "The closing culture statement is the document's whole point: reporting is safe, because nobody has ever been in trouble for it. The statement asserts the opposite of the stated culture.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "compulsory", partOfSpeech: "adjective", definition: "required by the rules; safety boots are compulsory on the floor." },
    { word: "pallet", partOfSpeech: "noun", definition: "the flat platform goods are stacked on; the pallet truck moves loaded ones." },
    { word: "aisle", partOfSpeech: "noun", definition: "the walking or driving lane between storage racks; the truck aisle is for trucks." },
    { word: "tag", partOfSpeech: "noun", definition: "a small label showing status; a yellow tag means the equipment passed inspection." },
    { word: "near-miss", partOfSpeech: "noun", definition: "an accident that almost happened; near-misses must be reported the same day." },
    { word: "assembly point", partOfSpeech: "noun phrase", definition: "the agreed place to gather during an evacuation; it is the far corner of the visitor car park." },
  ],
  passageNote: "Safety documents convert every rule into a behaviour: boots, vests, walkways, tags. The questions test the boundaries of those rules — who they include, where they apply, and the one cultural promise at the end.",
  source: READING_BANK_SOURCE_NOTE,
};
