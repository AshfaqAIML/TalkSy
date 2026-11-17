/**
 * General Training text library H (PROMPT 54 question-bank expansion).
 *
 *   GT batch H — Section 2 services and schemes:
 *
 *   ielts-rb-gt-insurance-claim  — home insurance claims procedure (advanced, d4)
 *   ielts-rb-gt-company-benefits — staff benefits handbook (standard, d3)
 *   ielts-rb-gt-apprenticeship   — apprenticeship scheme guide (standard, d3)
 *   ielts-rb-gt-council-services — council services leaflet (foundation, d2)
 *   ielts-rb-gt-museum-visit     — group museum visit guidance (foundation, d2)
 *   ielts-rb-gt-campsite         — campsite handbook (standard, d3)
 *
 * Every text is an ORIGINAL TalkSy practice set written in the style of the
 * IELTS General Training Reading test; nothing is copied from official
 * examination material, books or websites.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. How to claim on your home insurance — flow-chart + Yes/No/Not Given
// ---------------------------------------------------------------------------

export const gtInsuranceClaim: ReadingExercise = {
  slug: "ielts-rb-gt-insurance-claim",
  title: "How to claim on your home insurance",
  variant: "gt",
  section: 2,
  subject: "claims procedure",
  topic: "everyday",
  difficulty: 4,
  estimatedMinutes: 14,
  objective:
    "Follow a home insurance claim from emergency repair to settlement, and separate what the policy pays for from what it never will.",
  intro: "Read the documents below and answer Questions 1–9.",
  blocks: [
    {
      heading: "Making a claim — the first few days",
      paragraphs: [
        "Step one in any claim is to make the property safe: turn off the water at the mains, or board up a broken window, before anything else. Emergency repairs of this kind are covered up to £500 without asking us first — keep every receipt. What you must not do is clear the damage away. Damaged items are evidence, and our assessor will want to see them in position before any clearance begins. If something truly has to go — a soaked carpet forced outside for safety, say — photograph it from several angles first.",
        "Report the incident on the claims line or through the app within 48 hours of discovery, quoting your policy number. You will be given a claim reference, which must appear on every document you send us afterwards. Your case is then passed to a named handler, who stays your single point of contact from first call to final payment. Most straightforward claims are settled within ten working days of the last document arriving; where an assessor's visit is needed, allow up to four weeks.",
      ],
    },
    {
      heading: "What is covered — and what is not",
      paragraphs: [
        "Like every policy, this one carries an excess: the first £150 of each claim comes from you, and for flooding the excess rises to £500. Where a damaged item forms part of a matching set — a run of kitchen tiles, a bathroom suite — we pay to replace the whole set, because a partial repair would leave your home worth less than it was. The policy also covers trace and access: the cost of hunting down a hidden leak, including opening up floorboards, is met by us even though the repair of the pipe itself is your responsibility.",
        "Three exclusions catch people out. Wear and tear is not insured: a roof that has simply reached the end of its life counts as maintenance, not a claim. Nor is gradual damage that you knew about and left untreated. And if the home stands empty for more than 60 days in a row — a long stay abroad, for example — cover for water damage and theft is suspended unless you have told us in advance and we have agreed in writing.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "flowchart-completion",
      label: "Questions 1–5",
      instruction: "Complete the flow-chart below. Choose ONE WORD ONLY from the texts for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "From incident to settled claim" }],
        [
          { kind: "text", text: "Make the property safe — for example, turn off the water at the" },
          { kind: "blank", no: 1 },
          { kind: "text", text: "." },
        ],
        [
          { kind: "text", text: "Emergency repairs are covered up to £500 without asking us first — keep every" },
          { kind: "blank", no: 2 },
          { kind: "text", text: "." },
        ],
        [
          { kind: "text", text: "If a soaked" },
          { kind: "blank", no: 3 },
          { kind: "text", text: "has to be moved outside for safety, photograph it from several angles first." },
        ],
        [
          { kind: "text", text: "Report the incident within 48 hours, quoting your policy" },
          { kind: "blank", no: 4 },
          { kind: "text", text: "." },
        ],
        [
          { kind: "text", text: "You will be given a claim" },
          { kind: "blank", no: 5 },
          { kind: "text", text: "to quote on every later document." },
        ],
      ],
      blanks: [
        {
          no: 1,
          answer: "mains",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "turn off the water at the mains, or board up a broken window, before anything else" }],
            explanation:
              "The first instruction is to make the property safe, and the water example names the shut-off point: the mains. The flow-chart keeps the sentence's opening and asks for the noun at its centre.",
          },
        },
        {
          no: 2,
          answer: "receipt",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Emergency repairs of this kind are covered up to £500 without asking us first — keep every receipt." }],
            explanation:
              "The £500 emergency allowance comes without prior permission, but the paperwork rule still stands: keep every receipt. The chart prints the money and asks for the record that follows it.",
          },
        },
        {
          no: 3,
          answer: "carpet",
          meta: {
            skills: ["scanning", "detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "a soaked carpet forced outside for safety, say — photograph it from several angles first" }],
            explanation:
              "One removal is permitted — a soaked carpet forced outside for safety — and only on condition that photographs come first. The flow-chart keeps the camera step and asks for the item being moved.",
            trap: {
              family: "order",
              note: "The camera comes before the skip: the sentence allows removal only if photographs already exist, and the chart fixes that order.",
            },
          },
        },
        {
          no: 4,
          answer: "number",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Report the incident on the claims line or through the app within 48 hours of discovery, quoting your policy number." }],
            explanation:
              "The reporting step demands your policy number within 48 hours of discovery, on the claims line or through the app. The flow-chart keeps the word 'policy' and asks for the noun that completes the phrase.",
          },
        },
        {
          no: 5,
          answer: "reference",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "You will be given a claim reference, which must appear on every document you send us afterwards." }],
            explanation:
              "Reporting earns you a claim reference, which must then appear on every document you send afterwards. The flow-chart keeps 'claim' and asks for the identifier printed immediately after it.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "yes-no-not-given",
      label: "Questions 6–9",
      instruction:
        "Do the following statements agree with the information given in the policy documents? Write YES if the statement agrees with the information, NO if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Emergency repairs must be approved by the insurer before they are carried out.",
          answer: "NO",
          lure: "NOT GIVEN",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "Emergency repairs of this kind are covered up to £500 without asking us first — keep every receipt." }],
            explanation:
              "The text expressly permits emergency repairs up to £500 without asking us first, so a requirement for prior approval contradicts it directly. This is a straight contradiction, not a missing detail.",
            trap: {
              family: "boundary",
              note: "Readers hunting for the word 'approval' find nothing — but 'without asking us first' is the approval question answered.",
            },
            whyWrong: [
              "NOT GIVEN: the phrase 'without asking us first' settles the matter — the information exists and points the other way.",
            ],
          },
        },
        {
          text: "The insurer would pay to replace an entire run of kitchen tiles if one tile were cracked.",
          answer: "YES",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [
              { block: 1, paragraph: 0, quote: "Where a damaged item forms part of a matching set — a run of kitchen tiles, a bathroom suite — we pay to replace the whole set" },
            ],
            explanation:
              "The matching-set clause promises replacement of the whole set — a run of kitchen tiles is the clause's own example — because a partial repair would leave the home worth less. Replacing every tile therefore matches the policy.",
          },
        },
        {
          text: "The cost of repairing the pipe that caused a hidden leak is covered by the policy.",
          answer: "NO",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              {
                block: 1,
                paragraph: 0,
                quote: "the cost of hunting down a hidden leak, including opening up floorboards, is met by us even though the repair of the pipe itself is your responsibility",
              },
            ],
            explanation:
              "Trace and access pays for finding the leak — lifting floorboards included — but the closing clause hands the repair of the pipe itself back to you. The statement stops at the generous half of the sentence.",
            trap: {
              family: "mention-lure",
              note: "'Trace and access' sounds comprehensive; the clause covers the hunt, not the cure, and the difference sits in one sub-clause.",
            },
            whyWrong: [
              "YES: the passage does cover costs around the leak, but it names the pipe repair as the policyholder's own responsibility in the same breath.",
            ],
          },
        },
        {
          text: "A claim for theft would be refused if the burglar got in through a window left open.",
          answer: "NOT GIVEN",
          lure: "NO",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 1, paragraph: 1, quote: "cover for water damage and theft is suspended unless you have told us in advance and we have agreed in writing" }],
            explanation:
              "Theft appears only in the unoccupied-home rule, which suspends cover after 60 days empty. Nothing in either text discusses unlocked doors, open windows or any negligence test for burglary claims.",
            trap: {
              family: "boundary",
              note: "Real insurers often do refuse such claims, but plausible is not printed — the texts never raise the question of carelessness.",
            },
            whyWrong: [
              "NO: refusing the claim may be what a real insurer would do, but the text never says so, and outside knowledge cannot create a contradiction.",
            ],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "excess", partOfSpeech: "noun", definition: "the part of each claim the policyholder pays personally; £150 here, rising to £500 for flooding." },
    { word: "assessor", partOfSpeech: "noun", definition: "the insurance specialist who inspects the damage in position and values the claim." },
    { word: "handler", partOfSpeech: "noun", definition: "the member of staff responsible for one claim from the first call to final payment." },
    { word: "clearance", partOfSpeech: "noun", definition: "the removal of damaged items from the property; it waits until the assessor has seen them." },
    { word: "wear and tear", partOfSpeech: "noun phrase", definition: "the natural deterioration of a home through ordinary use; never insured." },
    { word: "trace and access", partOfSpeech: "noun phrase", definition: "cover for the cost of finding a hidden problem, such as lifting floorboards to locate a leak." },
  ],
  passageNote:
    "Insurance writing runs on qualifiers: covered up to, without asking first, even though, unless. The trace-and-access clause is the classic trap of the genre — it pays for finding a leak, never for fixing it.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Company benefits explained — matching information + True/False/Not Given
// ---------------------------------------------------------------------------

export const gtCompanyBenefits: ReadingExercise = {
  slug: "ielts-rb-gt-company-benefits",
  title: "Company benefits explained",
  variant: "gt",
  section: 2,
  subject: "benefits handbook",
  topic: "workplace",
  difficulty: 3,
  estimatedMinutes: 13,
  objective:
    "Navigate a benefits handbook for entitlements and conditions: what each benefit is worth, when it starts, and who qualifies.",
  intro: "Read the staff handbook below and answer Questions 1–9.",
  blocks: [
    {
      heading: "Core benefits",
      paragraphs: [
        "Pension. From your first pay packet you are enrolled in the workplace pension: you contribute 5% of your salary and the company adds 3%. You may raise your share at any time, and a salary-sacrifice option lets you pay contributions before tax is deducted, which costs you less each month. Enrolment is automatic but not compulsory — you can opt out — yet opting out also gives up the company's 3%.",
        "Health and wellbeing. After six months you join the company health plan, which pays for private treatment when the public waiting list is long. From day one, however, you can claim back a share of dental and optical bills — check-ups, fillings, glasses and contact lenses — up to £200 a year. Free counselling is available through the employee assistance line, twenty-four hours a day, and the service is confidential.",
        "Learning. Every employee has a personal learning budget of £1,000 a year, agreed with your manager, for courses, books and conferences connected to your role. Study leave of up to five paid days backs up any course that ends in an exam. If you leave the company within twelve months of a funded course, the cost may be reclaimed from your final salary.",
      ],
    },
    {
      heading: "Extras and the small print",
      paragraphs: [
        "Holiday and community. Each April you may buy up to three extra days of leave or sell up to three unused ones, with the adjustment spread across your payslips. Separately, everyone is entitled to one paid volunteering day a year, spent with a charity of your choice — colleagues have cleared canals, painted village halls and served meals at shelters. The day is booked like annual leave, through your manager.",
        "Family. Primary caregivers receive eighteen weeks of parental leave at full pay, and partners receive four. Keep-in-touch days let you work up to ten days during leave without losing leave pay — handy for staying current and for easing back in. A salary-sacrifice scheme offers discounted places at two partner nurseries near the head office, with fees taken from your pay before tax.",
        "The small print. Most benefits start on your first day; a few, like the health plan, carry a waiting period. Benefits belong to employees on a permanent or fixed-term contract of three months or more. Casual workers and agency staff are not eligible, and no benefit can be exchanged for cash. Where a benefit is taxed, the tax is handled through PAYE automatically.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-information",
      label: "Questions 1–5",
      instruction:
        "The handbook has six paragraphs, A–F. Which paragraph contains the following information? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "a benefit that becomes more valuable as your salary grows",
          correct: 0,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "you contribute 5% of your salary and the company adds 3%" }],
            explanation:
              "Paragraph A ties both contributions to a percentage of salary, so the pension's value rises and falls with pay. The item's 'more valuable as your salary grows' paraphrases '5% of your salary' directly.",
          },
        },
        {
          text: "help towards the cost of glasses and dental check-ups",
          correct: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              {
                block: 0,
                paragraph: 1,
                quote: "you can claim back a share of dental and optical bills — check-ups, fillings, glasses and contact lenses — up to £200 a year",
              },
            ],
            explanation:
              "Paragraph B's cashback plan refunds a share of dental and optical bills up to £200 a year, and check-ups and glasses are both named on the list of eligible costs. The item gathers those small claims into one phrase.",
          },
        },
        {
          text: "circumstances in which an employee must repay training costs",
          correct: 2,
          lure: 5,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [
              { block: 0, paragraph: 2, quote: "If you leave the company within twelve months of a funded course, the cost may be reclaimed from your final salary." },
            ],
            explanation:
              "Paragraph C's final sentence attaches a clawback to the learning budget: leaving within twelve months of a funded course lets the company reclaim the cost from final salary. The small print in F governs who qualifies for benefits, not who repays them.",
          },
        },
        {
          text: "permission to spend working time on a charitable project",
          correct: 3,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "everyone is entitled to one paid volunteering day a year, spent with a charity of your choice" }],
            explanation:
              "Paragraph D grants everyone one paid volunteering day a year, spent with a charity of their choice and booked through the manager. Paid working time plus a charity project is exactly what the item describes.",
          },
        },
        {
          text: "arrangements for keeping up to date while on parental leave",
          correct: 4,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 1, paragraph: 1, quote: "Keep-in-touch days let you work up to ten days during leave without losing leave pay" }],
            explanation:
              "Paragraph E's keep-in-touch days let a parent work up to ten days during leave without losing leave pay — precisely a scheme for staying current through a long absence. The other family details, pay rates and nurseries, do not fit the item.",
          },
        },
      ],
      options: ["A", "B", "C", "D", "E", "F"],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 6–9",
      instruction:
        "Do the following statements agree with the information given in the handbook? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Every employee is entitled to all benefits from their first day at the company.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 1, paragraph: 2, quote: "Most benefits start on your first day; a few, like the health plan, carry a waiting period." }],
            explanation:
              "The small print says most benefits, not all: the health plan, as paragraph B dates it, starts only after six months. 'Every' and 'all' sweep away a qualifier the handbook deliberately keeps.",
            trap: {
              family: "extreme-language",
              note: "'Most' is doing quiet work in that sentence — the extreme statement deletes it and so contradicts the text.",
            },
            whyWrong: [
              "TRUE: 'most' leaves room — paragraph B dates the health plan at six months, so at least one benefit is delayed.",
            ],
          },
        },
        {
          text: "Employees can sell back holiday days they have not used.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 1, paragraph: 0, quote: "you may buy up to three extra days of leave or sell up to three unused ones" }],
            explanation:
              "The holiday-trading rule lets each employee sell up to three unused days each April, with the adjustment spread across payslips. 'Sell back unused days' is a tight paraphrase of 'sell up to three unused ones'.",
          },
        },
        {
          text: "The company guarantees nursery places for employees' children.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 1, paragraph: 1, quote: "A salary-sacrifice scheme offers discounted places at two partner nurseries near the head office" }],
            explanation:
              "Paragraph E confirms discounted places at two partner nurseries near the head office, but it never says a place is assured for any employee's child. A discount scheme and a guarantee are different promises, and only the first is printed.",
            trap: {
              family: "boundary",
              note: "An offer of discounted places tempts a FALSE — but the text neither promises nor refuses places; it is silent on allocation.",
            },
            whyWrong: [
              "FALSE: nothing in paragraph E denies a guarantee either — the handbook simply never describes how nursery places are awarded.",
            ],
          },
        },
        {
          text: "An employee who opts out of the pension still receives the company's contribution.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "opting out also gives up the company's 3%" }],
            explanation:
              "The pension paragraph closes the loophole: opting out surrenders both halves of the contribution, the employee's five per cent and the company's three. The statement keeps the company's money in play, so it contradicts the text.",
            trap: {
              family: "mention-lure",
              note: "The 3% is printed twice in paragraph A — once as the company's payment, once as what opting out loses; the second mention settles this.",
            },
            whyWrong: [
              "TRUE: the company's 3% is real, but the concession clause returns it to the company the moment an employee opts out.",
            ],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "enrolled", partOfSpeech: "verb (past participle)", definition: "made a member of a scheme automatically; every new employee is enrolled in the pension." },
    { word: "salary-sacrifice", partOfSpeech: "noun", definition: "an arrangement where part of your pay is taken before tax to fund a benefit such as pension contributions or nursery fees." },
    { word: "contributions", partOfSpeech: "noun", definition: "regular payments into a pension; yours are 5% of salary, the company's are 3%." },
    { word: "counselling", partOfSpeech: "noun", definition: "professional support in talking through problems; free and confidential through the assistance line." },
    { word: "caregivers", partOfSpeech: "noun", definition: "people who look after a child; primary caregivers receive the longer stretch of paid parental leave." },
    { word: "reclaimed", partOfSpeech: "verb (past participle)", definition: "taken back by the company; funded course fees may be reclaimed if you leave within twelve months." },
  ],
  passageNote:
    "Benefits documents are lists with fine print attached. The matching items ride on paragraph purpose, while the True/False set turns on three little expressions: 'most', 'up to', and 'after six months'.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. The apprenticeship scheme — sentence completion + matching information
// ---------------------------------------------------------------------------

export const gtApprenticeship: ReadingExercise = {
  slug: "ielts-rb-gt-apprenticeship",
  title: "The apprenticeship scheme",
  variant: "gt",
  section: 2,
  subject: "training scheme guide",
  topic: "workplace",
  difficulty: 3,
  estimatedMinutes: 13,
  objective:
    "Read a training scheme guide for entry rules, weekly rhythms and the pay ladder — including which rules guard a single route.",
  intro: "Read the guide below and answer Questions 1–9.",
  blocks: [
    {
      heading: "How the scheme works",
      paragraphs: [
        "The scheme runs for eighteen months and leads to a recognised Level 3 qualification, blending full-time work with structured study. It is open to anyone aged sixteen or over — there is no upper age limit — and no previous qualifications are demanded, though applicants should be comfortable with everyday maths and English. Current openings sit in engineering, business administration and adult care, and each vacancy lists its own detail. Apprentices are paid from day one, at the national apprentice rate for the first year and the full rate for the role thereafter.",
        "Training happens on two fronts. One day a week is spent at Riverside College working towards the diploma, with timetables built around the employer's quiet days rather than the college's. In the workplace, a named mentor supervises daily learning, and a college assessor visits every eight weeks to observe tasks and sign off the off-the-job training log, a national record of hours spent learning rather than producing.",
      ],
    },
    {
      heading: "Applying — and what happens next",
      paragraphs: [
        "Applications go in online, any time, and are reviewed within ten working days. Shortlisted candidates complete a short practical task and an informal interview; for the engineering route only, there is also an aptitude test lasting forty minutes. Successful applicants are offered one of two start dates, in September or February, and are matched to a mentor in their first week. Unsuccessful candidates may reapply after six months, and feedback is always offered.",
        "Progression is written into the scheme. Pay rises are awarded at the six-month and twelve-month milestones, subject to the assessor's sign-off, and everyone who completes the programme is guaranteed an interview for any permanent vacancy they apply for. In practice, more than seven in ten completers move into permanent roles with the company, and most of the rest choose to continue to a Level 4 course elsewhere.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "sentence-completion",
      label: "Questions 1–5",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the guide for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "1. The programme runs for" }, { kind: "blank", no: 1 }, { kind: "text", text: "and blends full-time work with structured study." }],
        [{ kind: "text", text: "2. Apprentices spend one" }, { kind: "blank", no: 2 }, { kind: "text", text: "a week at Riverside College." }],
        [{ kind: "text", text: "3. A college assessor visits the workplace every" }, { kind: "blank", no: 3 }, { kind: "text", text: "to observe tasks." }],
        [{ kind: "text", text: "4. The aptitude test, lasting forty minutes, is set for the" }, { kind: "blank", no: 4 }, { kind: "text", text: "route only." }],
        [{ kind: "text", text: "5. Pay rises are subject to the assessor's" }, { kind: "blank", no: 5 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 1,
          answer: "eighteen months",
          alternatives: ["18 months"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "The scheme runs for eighteen months and leads to a recognised Level 3 qualification" }],
            explanation:
              "The opening sentence fixes the length: eighteen months, leading to a recognised Level 3 qualification. The completion keeps 'runs for' and asks for the duration printed at the very start of paragraph A.",
          },
        },
        {
          no: 2,
          answer: "day",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "One day a week is spent at Riverside College working towards the diploma" }],
            explanation:
              "Paragraph B divides the week: one day at Riverside College working towards the diploma, the rest on the job. The sentence keeps the college name and asks for the unit of time that precedes it.",
          },
        },
        {
          no: 3,
          answer: "eight weeks",
          alternatives: ["8 weeks"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "a college assessor visits every eight weeks to observe tasks" }],
            explanation:
              "The assessor's visit cycle is every eight weeks — not the eighteen months of the course, which begins with the same sound. Two 'eight' numbers live in this guide; only the shorter one answers this question.",
            trap: {
              family: "mention-lure",
              note: "Two numbers begin with 'eight' — the course length and the visit gap — and the sentence needs the visit gap.",
            },
          },
        },
        {
          no: 4,
          answer: "engineering",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "for the engineering route only, there is also an aptitude test lasting forty minutes" }],
            explanation:
              "Paragraph C adds an aptitude test for one route only — engineering — while every other applicant faces the practical task and the interview alone. The completion keeps the test and asks which specialism it guards.",
          },
        },
        {
          no: 5,
          answer: "sign-off",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 1, paragraph: 1, quote: "Pay rises are awarded at the six-month and twelve-month milestones, subject to the assessor's sign-off" }],
            explanation:
              "The progression paragraph makes pay rises subject to two things: the six- and twelve-month milestones and the assessor's sign-off. The completion keeps the assessor and asks for the noun that follows the apostrophe.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "matching-information",
      label: "Questions 6–9",
      instruction:
        "The guide has four paragraphs, A–D. Which paragraph contains the following information? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "the rule that fixes the youngest age an applicant can be",
          correct: 0,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "It is open to anyone aged sixteen or over — there is no upper age limit" }],
            explanation:
              "Paragraph A carries the eligibility line: anyone aged sixteen or over, with no upper age limit stated. The item asks only for the lower edge of that range, printed in the guide's second sentence.",
          },
        },
        {
          text: "how the timing of college days is decided",
          correct: 1,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "with timetables built around the employer's quiet days rather than the college's" }],
            explanation:
              "Paragraph B explains that college timetables are built around the employer's quiet days rather than the college's own preferences. The item's 'how the timing is decided' paraphrases that single scheduling explanation.",
          },
        },
        {
          text: "the chance to apply again after an unsuccessful application",
          correct: 2,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Unsuccessful candidates may reapply after six months, and feedback is always offered" }],
            explanation:
              "Paragraph C closes the application process with a second chance: unsuccessful candidates may reapply after six months, and feedback is always offered. 'Apply again' is simply the plain-English form of reapply.",
          },
        },
        {
          text: "the share of completers who take permanent jobs with the company",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 1, paragraph: 1, quote: "more than seven in ten completers move into permanent roles with the company" }],
            explanation:
              "Paragraph D quantifies the outcome: more than seven in ten completers move into permanent roles with the company. The item's 'share' signals a proportion, and only this paragraph supplies one.",
          },
        },
      ],
      options: ["A", "B", "C", "D"],
    },
  ],
  glossary: [
    { word: "apprentice", partOfSpeech: "noun", definition: "a new worker who learns a trade through paid work combined with structured study." },
    { word: "mentor", partOfSpeech: "noun", definition: "an experienced colleague assigned to guide a learner; every apprentice is matched to one." },
    { word: "assessor", partOfSpeech: "noun", definition: "the college officer who observes workplace tasks and signs off the training log." },
    { word: "sign-off", partOfSpeech: "noun", definition: "official confirmation that a stage is complete; pay rises depend on the assessor's sign-off." },
    { word: "milestones", partOfSpeech: "noun", definition: "fixed points of progress; the scheme's pay rises arrive at the six- and twelve-month milestones." },
    { word: "off-the-job", partOfSpeech: "adjective", definition: "describing training hours spent learning rather than producing; logged in a national record." },
  ],
  passageNote:
    "Scheme guides answer three questions — who gets in, how the week is shaped, and what finishing is worth. Watch the numbers: eighteen months of programme, one day of college, eight weeks between visits.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Your council services — matching features + Yes/No/Not Given
// ---------------------------------------------------------------------------

export const gtCouncilServices: ReadingExercise = {
  slug: "ielts-rb-gt-council-services",
  title: "Your council services",
  variant: "gt",
  section: 2,
  subject: "council leaflet",
  topic: "society",
  difficulty: 2,
  estimatedMinutes: 12,
  objective:
    "Find who provides what in a council leaflet: bands and subscriptions, permits, concessions and the right counter for each query.",
  intro: "Read the leaflet below and answer Questions 1–9.",
  blocks: [
    {
      heading: "What your council tax pays for",
      paragraphs: [
        "Your council tax pays for more than the bin round. It funds street lighting, road repairs, parks, libraries and the collection of household waste. Every home is placed in a council tax band, from A to H, based on what the property was worth in 1991; the band sets the yearly bill, and discounts apply for single occupants and some students. Garden waste is collected fortnightly between March and November, by subscription only: the service costs £45 a year for one green bin.",
      ],
    },
    {
      heading: "Where to go — four local services",
      paragraphs: [
        "The household recycling centre on Millbrook Road takes garden waste, cardboard, electrical goods and scrap metal seven days a week, from 8 am to 6 pm on weekdays and 9 am to 5 pm at weekends. It is free for residents, but cars with trailers and all vans need a permit, free from the council website, booked before you arrive. Trade and business waste is not accepted at any time.",
        "Central Library is open six days a week and stays open until 8 pm on Thursdays. Computer terminals are free to use for up to two hours a day — sign in with your library card, which is issued on the spot with one proof of address. There is a quiet study floor on the second level, and a home delivery service that brings books to residents who cannot easily leave the house.",
        "The leisure centre offers a swimming pool, a sports hall and a gym on a pay-as-you-go basis or by monthly membership. Concession rates — roughly a third off — are available to anyone over 60, full-time students, and people in receipt of benefits. Children's swimming lessons run on weekday evenings and Saturday mornings, and the centre can be hired for birthday parties outside public opening hours.",
        "The customer service point in the town hall handles council tax bills, benefits claims, housing applications and blue badge renewals on a walk-in basis — no appointment needed — Monday to Saturday. Live waiting times are shown on the council website, and staff there can also verify documents for passport applications. Births, deaths and marriages are registered in the separate register office next door.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-features",
      label: "Questions 1–4",
      instruction:
        "The texts describe four local services, A–D. Match each statement with the service it describes. You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "Arriving with a trailer means arranging permission beforehand.",
          correct: 0,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 1, paragraph: 0, quote: "cars with trailers and all vans need a permit, free from the council website, booked before you arrive" }],
            explanation:
              "The recycling centre is free for residents, but cars with trailers and all vans need a permit from the council website, booked before arrival. The item's 'permission beforehand' paraphrases both the permit and its booking order.",
          },
        },
        {
          text: "The service can come to you if leaving home is difficult.",
          correct: 1,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 1, paragraph: 1, quote: "a home delivery service that brings books to residents who cannot easily leave the house" }],
            explanation:
              "Central Library runs a home delivery service that brings books to residents who cannot easily leave the house. The item reverses the direction of travel, and that reversal is the paraphrase that settles the letter.",
          },
        },
        {
          text: "Some visitors pay about a third less than others.",
          correct: 2,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              {
                block: 1,
                paragraph: 2,
                quote: "Concession rates — roughly a third off — are available to anyone over 60, full-time students, and people in receipt of benefits",
              },
            ],
            explanation:
              "The leisure centre's concession rates — roughly a third off — are available to over-60s, full-time students and people in receipt of benefits. The item turns the fraction into a comparison between two kinds of visitor.",
          },
        },
        {
          text: "Paperwork for passport applications can be checked here.",
          correct: 3,
          lure: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 3, quote: "staff there can also verify documents for passport applications" }],
            explanation:
              "The customer service point's staff can verify documents for passport applications, alongside council tax, benefits and housing queries. The library also deals in proofs of address, but that belongs to joining the library, not to passports.",
          },
        },
      ],
      options: ["The household recycling centre", "Central Library", "The leisure centre", "The customer service point"],
    },
    {
      id: "q2",
      type: "yes-no-not-given",
      label: "Questions 5–9",
      instruction:
        "Do the following statements agree with the information given in the leaflet? Write YES if the statement agrees with the information, NO if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The yearly council tax bill depends on which band a home is in.",
          answer: "YES",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [
              {
                block: 0,
                paragraph: 0,
                quote: "Every home is placed in a council tax band, from A to H, based on what the property was worth in 1991; the band sets the yearly bill",
              },
            ],
            explanation:
              "The leaflet explains banding first: every home sits in a band from A to H, and the band sets the yearly bill. The statement restates that link without decoration, so it agrees with the information.",
          },
        },
        {
          text: "Garden waste bins are emptied every week between March and November.",
          answer: "NO",
          meta: {
            skills: ["detail", "vocabulary"],
            evidence: [{ block: 0, paragraph: 0, quote: "Garden waste is collected fortnightly between March and November" }],
            explanation:
              "Garden waste is collected fortnightly — every two weeks — between March and November, and only by subscription. 'Every week' halves the real interval, so the statement contradicts the leaflet on a point of frequency.",
          },
        },
        {
          text: "Businesses can use the recycling centre if they pay a charge.",
          answer: "NO",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 1, paragraph: 0, quote: "Trade and business waste is not accepted at any time." }],
            explanation:
              "The centre accepts household waste only: trade and business waste is not accepted at any time, and no fee is offered as a way around the bar. Payment is the statement's invention, and inventing a workaround creates a contradiction.",
            trap: {
              family: "mention-lure",
              note: "'Free for residents' tempts the reader to invent a paid tier for businesses — but the next sentence bars trade waste entirely.",
            },
            whyWrong: [
              "YES: no paid option exists; 'not accepted at any time' closes the door that 'free for residents' seems to leave open.",
            ],
          },
        },
        {
          text: "The library's home delivery service is run by volunteers.",
          answer: "NOT GIVEN",
          lure: "NO",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 1, paragraph: 1, quote: "a home delivery service that brings books to residents who cannot easily leave the house" }],
            explanation:
              "The leaflet describes what the home delivery service does — books brought to residents who cannot easily leave the house — but never says who staffs it. Volunteers are a reasonable guess and exactly the sort the test forbids.",
            trap: {
              family: "boundary",
              note: "A NO feels natural because 'volunteers' is nowhere in the text — but absence of evidence is NOT GIVEN, not contradiction.",
            },
            whyWrong: [
              "NO: nothing contradicts volunteering either; the text is silent about the service's staff, and silence means NOT GIVEN.",
            ],
          },
        },
        {
          text: "A library card can be issued on the day you apply.",
          answer: "YES",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 1, paragraph: 1, quote: "your library card, which is issued on the spot with one proof of address" }],
            explanation:
              "Library cards are issued on the spot with one proof of address, which is the leaflet's way of saying the same day. 'On the spot' is the phrase the statement paraphrases, and nothing else in the sentence restricts it.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "band", partOfSpeech: "noun", definition: "one of the value groups, A to H, that sets a home's yearly council tax bill." },
    { word: "subscription", partOfSpeech: "noun", definition: "a paid sign-up for a regular service; garden waste collection runs by subscription only." },
    { word: "permit", partOfSpeech: "noun", definition: "official permission booked online; trailers and vans need one for the recycling centre." },
    { word: "concession", partOfSpeech: "noun", definition: "a reduced price for certain groups, such as over-60s, students and people on benefits." },
    { word: "walk-in", partOfSpeech: "adjective", definition: "needing no appointment; the customer service point works on a walk-in basis." },
  ],
  passageNote:
    "Council leaflets are organised by place, not by topic, so the same rule can hide in any paragraph. Matching features means naming the service first; the Yes/No set then checks the numbers and conditions attached to them.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Planning a group museum visit — sentence completion + True/False/Not Given
// ---------------------------------------------------------------------------

export const gtMuseumVisit: ReadingExercise = {
  slug: "ielts-rb-gt-museum-visit",
  title: "Planning a group museum visit",
  variant: "gt",
  section: 2,
  subject: "museum guidance",
  topic: "culture",
  difficulty: 2,
  estimatedMinutes: 12,
  objective:
    "Read a museum's group visit guidance for booking rules, arrival logistics and gallery etiquette — and tell a total ban from a conditional one.",
  intro: "Read the guidance below and answer Questions 1–9.",
  blocks: [
    {
      heading: "Booking and arriving",
      paragraphs: [
        "Groups of ten or more qualify for the group rate of £6 a head, instead of the usual £9, and school parties visit free of charge, bringing one adult for every ten children. All group visits must be booked at least fourteen days ahead through the online form; a member of the bookings team then confirms by email within three working days. Groups that arrive without a booking pay the full rate, and at busy times may be asked to wait outside until there is room in the entrance hall.",
        "Coaches set down passengers in Layard Street, where a bay is reserved for up to thirty minutes; a parking permit for the coach park behind the station is included with every confirmed booking. On arrival, the group leader reports to the desk in the entrance hall while the rest of the group waits by the sculpture. The cloakroom takes coats and bags free of charge, and the lunch room is booked in thirty-minute slots — request one when you book, as slots go quickly in term time.",
      ],
    },
    {
      heading: "In the galleries",
      paragraphs: [
        "Sketching is encouraged, but only in pencil — ink stains marble, and pens have a habit of leaking in display cases. Photography without flash is welcome unless a label says otherwise; some loan exhibitions forbid all photography, and stewards will say so at the door. Handling sessions, in which visitors hold real objects from the collection, can be added to any booking but must be requested at least a week in advance, and they are limited to groups of fifteen.",
        "The shop stays open until closing time and takes group pre-orders, so pupils can collect packed goodie bags on the way out instead of queueing. We ask groups to move through the galleries in smaller sub-groups rather than as one long crocodile, and to keep noise to conversation level out of respect for other visitors. Quiet earpieces for guided tours are free, and hearing loops can be borrowed at the desk.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "sentence-completion",
      label: "Questions 1–4",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "1. Group visits must be booked at least" }, { kind: "blank", no: 1 }, { kind: "text", text: "in advance." }],
        [{ kind: "text", text: "2. A" }, { kind: "blank", no: 2 }, { kind: "text", text: "for the coach park is included with each confirmed booking." }],
        [{ kind: "text", text: "3. Sketching in the galleries is allowed, but only in" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "4. A handling" }, { kind: "blank", no: 4 }, { kind: "text", text: "must be requested at least a week in advance." }],
      ],
      blanks: [
        {
          no: 1,
          answer: "fourteen days",
          alternatives: ["14 days"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "All group visits must be booked at least fourteen days ahead through the online form" }],
            explanation:
              "The booking rule sets the notice period: fourteen days ahead through the online form, with email confirmation to follow. The completion keeps 'booked at least' and asks for the interval that follows it in the same sentence.",
          },
        },
        {
          no: 2,
          answer: "parking permit",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "a parking permit for the coach park behind the station is included with every confirmed booking" }],
            explanation:
              "Every confirmed booking includes a parking permit for the coach park behind the station, while the Layard Street bay is only for setting down. The sentence keeps the destination and asks for the document that comes with the booking.",
          },
        },
        {
          no: 3,
          answer: "pencil",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Sketching is encouraged, but only in pencil" }],
            explanation:
              "Sketching is encouraged with one condition attached: only in pencil, because ink stains the marble and pens leak in display cases. The completion keeps the encouragement and asks for the tool the condition permits.",
          },
        },
        {
          no: 4,
          answer: "session",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "can be added to any booking but must be requested at least a week in advance" }],
            explanation:
              "Handling sessions — visitors holding real objects from the collection — can be added to any booking, but only if requested a week ahead. The completion keeps the request rule and asks for the noun at the head of that sentence.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 5–9",
      instruction:
        "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "One adult enters free with every ten children in a school party.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "school parties visit free of charge, bringing one adult for every ten children" }],
            explanation:
              "School parties visit free of charge and bring one adult for every ten children. The statement splits that sentence in two and keeps both halves intact, so it agrees with the guidance.",
          },
        },
        {
          text: "Photography is forbidden throughout the museum.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 1, paragraph: 0, quote: "Photography without flash is welcome unless a label says otherwise; some loan exhibitions forbid all photography" }],
            explanation:
              "The general rule welcomes photography without flash unless a label says otherwise; only some loan exhibitions forbid it completely. 'Throughout the museum' turns a conditional ban into a total one.",
            trap: {
              family: "extreme-language",
              note: "The total ban is real but local — it belongs to some loan exhibitions, and the statement stretches it across the building.",
            },
            whyWrong: [
              "TRUE: the complete ban applies only in some loan exhibitions, and stewards announce it at the door of those shows.",
            ],
          },
        },
        {
          text: "Groups can use the lunch room for as long as they need.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 1, quote: "the lunch room is booked in thirty-minute slots — request one when you book, as slots go quickly in term time" }],
            explanation:
              "The lunch room runs on thirty-minute slots that must be requested when booking, because slots go quickly in term time. Unlimited use is the opposite of a slot system, so the statement contradicts the guidance.",
          },
        },
        {
          text: "Groups may eat their packed lunches in the museum gardens.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "the lunch room is booked in thirty-minute slots — request one when you book, as slots go quickly in term time" }],
            explanation:
              "The guidance schedules lunches in the lunch room and says nothing about gardens or any other eating place. Neither permission nor prohibition is printed, so the statement falls outside the text entirely.",
            trap: {
              family: "boundary",
              note: "Describing one eating place feels like banning the others — but the texts never mention the gardens at all.",
            },
            whyWrong: [
              "FALSE: the leaflet never rules the gardens out; scheduling the lunch room is not the same as forbidding lunch elsewhere.",
            ],
          },
        },
        {
          text: "Pupils can collect pre-ordered items from the shop without queueing.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 1, paragraph: 1, quote: "takes group pre-orders, so pupils can collect packed goodie bags on the way out instead of queueing" }],
            explanation:
              "The shop takes group pre-orders so that pupils collect packed goodie bags on the way out instead of queueing. The statement compresses that sentence without changing any part of its meaning, so it is true.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "group rate", partOfSpeech: "noun phrase", definition: "the reduced admission price, £6 a head, for parties of ten or more." },
    { word: "bay", partOfSpeech: "noun", definition: "a marked space for vehicles; coaches may use the Layard Street bay for up to thirty minutes." },
    { word: "cloakroom", partOfSpeech: "noun", definition: "the room where coats and bags are left, free of charge, during a visit." },
    { word: "loan", partOfSpeech: "adjective", definition: "describing items borrowed from another museum; loan exhibitions may forbid all photography." },
    { word: "crocodile", partOfSpeech: "noun", definition: "an informal word for a single-file line of schoolchildren; the museum asks groups to split up." },
  ],
  passageNote:
    "Visit guidance is a wall of small conditions: free with, up to, unless, at least. The True/False set turns on which bans are total and which are conditional — and on what the texts never mention at all.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. The campsite handbook — note completion + Yes/No/Not Given
// ---------------------------------------------------------------------------

export const gtCampsite: ReadingExercise = {
  slug: "ielts-rb-gt-campsite",
  title: "The campsite handbook",
  variant: "gt",
  section: 2,
  subject: "campsite guide",
  topic: "everyday",
  difficulty: 3,
  estimatedMinutes: 13,
  objective:
    "Use a campsite handbook for the rules of the field: vehicles, quiet hours, food storage and the two separate money matters of departure day.",
  intro: "Read the handbook below and answer Questions 1–9.",
  blocks: [
    {
      heading: "Welcome to Oakhollow",
      paragraphs: [
        "Reception, in the stone building by the entrance, is open from 8 am to 8 pm daily and holds the keys to almost everything on site. On arrival, check in there to collect your pitch number and a tag for your car; vehicles are allowed on the field only for loading and unloading, between 8 am and 9 pm, and at all other times cars wait in the car park. Quiet hours run from 10 pm to 7 am — keep noise down, and keep voices low near the hedgerows, where hedgehogs forage after dark.",
        "The amenities block has hot showers with underfloor heating, family cubicles and a laundry with coin-operated machines. The shop, open 8 am to 10 pm, sells camping gas, kindling and store-cupboard basics, and takes orders for fresh bread, collected from the village bakery each morning — order by 6 pm the day before. Ice packs can be handed in at the counter and are returned frozen, free of charge. Barbecues are welcome anywhere on the field, provided they stand raised off the ground; disposable trays go on the hired fire pits, never directly on the grass.",
      ],
    },
    {
      heading: "Wildlife, dogs and departure",
      paragraphs: [
        "Foxes and badgers visit most nights, so keep all food in sealed boxes and take rubbish to the bins by the gate each evening — sweet smells draw wasps by day and something larger after dark. Dogs are welcome at no extra charge but must be kept on leads across the site, especially in the top field, where cattle graze next door from May to October. Please do not feed the ducks on the pond: bread harms them, and the wardens provide grain at the hut.",
        "On departure day, pitches must be cleared by 10 am. Take your rubbish to the recycling point by the barn and separate glass, card and tins, then call at reception for the quick pitch inspection: once the grass is checked and the site is left as found, your £20 returnable deposit comes straight back to you. If you would like a later start, tell reception the evening before — where the pitch is not needed by an arriving guest, a half-night fee of £12 buys you until 6 pm.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "note-completion",
      label: "Questions 1–5",
      instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the handbook for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "Oakhollow Campsite — the essentials" }],
        [{ kind: "text", text: "1. Check in at" }, { kind: "blank", no: 1 }, { kind: "text", text: "to collect your pitch number and car tag." }],
        [{ kind: "text", text: "2. During quiet hours, keep" }, { kind: "blank", no: 2 }, { kind: "text", text: "down." }],
        [{ kind: "text", text: "3. Fresh bread, ordered by 6 pm the day before, comes from the village" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "4. Barbecues must stand raised off the" }, { kind: "blank", no: 4 }, { kind: "text", text: "; disposable trays go on hired fire pits." }],
        [{ kind: "text", text: "5. Dogs must be kept on" }, { kind: "blank", no: 5 }, { kind: "text", text: "across the site." }],
      ],
      blanks: [
        {
          no: 1,
          answer: "reception",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              { block: 0, paragraph: 0, quote: "Reception, in the stone building by the entrance, is open from 8 am to 8 pm daily" },
              { block: 0, paragraph: 0, quote: "check in there to collect your pitch number and a tag for your car" },
            ],
            explanation:
              "Check-in happens at reception, the stone building by the entrance, open from 8 am to 8 pm daily. The note keeps the pitch number and the car tag and asks for the place that hands them over.",
          },
        },
        {
          no: 2,
          answer: "noise",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Quiet hours run from 10 pm to 7 am — keep noise down" }],
            explanation:
              "Quiet hours run from 10 pm to 7 am, and the rule inside them is to keep noise down. The note keeps the hours and asks for the noun that the rule targets.",
          },
        },
        {
          no: 3,
          answer: "bakery",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "takes orders for fresh bread, collected from the village bakery each morning — order by 6 pm the day before" }],
            explanation:
              "The shop takes bread orders by 6 pm the day before, and each morning the loaves come from the village bakery. The note keeps the ordering rule and asks for the bread's source.",
          },
        },
        {
          no: 4,
          answer: "ground",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "provided they stand raised off the ground" }],
            explanation:
              "The barbecue rule carries one condition: the barbecue must stand raised off the ground, with disposable trays on hired fire pits instead. The note keeps the condition's shape and asks for its final noun.",
          },
        },
        {
          no: 5,
          answer: "leads",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Dogs are welcome at no extra charge but must be kept on leads across the site" }],
            explanation:
              "Dogs cost nothing extra but must be kept on leads across the whole site, especially in the top field where cattle graze next door. The note keeps the welcome and asks for the restraint the rule requires.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "yes-no-not-given",
      label: "Questions 6–9",
      instruction:
        "Do the following statements agree with the information given in the handbook? Write YES if the statement agrees with the information, NO if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Cars may be driven on to the field at any time to reach your pitch.",
          answer: "NO",
          lure: "YES",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "vehicles are allowed on the field only for loading and unloading, between 8 am and 9 pm" }],
            explanation:
              "Vehicles reach the field only for loading and unloading, and only between 8 am and 9 pm; at all other times cars wait in the car park. 'At any time' breaks both of those limits at once.",
            trap: {
              family: "extreme-language",
              note: "The concession is double-limited — by purpose and by clock — and the statement quietly erases both halves.",
            },
            whyWrong: [
              "YES: cars do reach the field, but only to load and unload, and only inside the 8 am to 9 pm window.",
            ],
          },
        },
        {
          text: "The campsite will freeze campers' ice packs free of charge.",
          answer: "YES",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "Ice packs can be handed in at the counter and are returned frozen, free of charge" }],
            explanation:
              "Ice packs handed in at the shop counter are returned frozen, free of charge. The statement reorders those details — service first, price second — without changing any of them, so it agrees.",
          },
        },
        {
          text: "Wasps are only a problem near the shop.",
          answer: "NOT GIVEN",
          lure: "NO",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "sweet smells draw wasps by day and something larger after dark" }],
            explanation:
              "The handbook warns that sweet smells draw wasps by day, but it never ties them to any particular part of the site. A location is invented by the statement, and invention means there is no information.",
            trap: {
              family: "boundary",
              note: "A warning with no place attached tempts a NO — but the text neither locates the wasps nor rules any spot out.",
            },
            whyWrong: [
              "NO: the warning names no location, so there is nothing to contradict — only an absence to report as NOT GIVEN.",
            ],
          },
        },
        {
          text: "Campers who leave after 10 am lose their £20 deposit.",
          answer: "NO",
          lure: "YES",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              { block: 1, paragraph: 1, quote: "your £20 returnable deposit comes straight back to you" },
              { block: 1, paragraph: 1, quote: "where the pitch is not needed by an arriving guest, a half-night fee of £12 buys you until 6 pm" },
            ],
            explanation:
              "The deposit follows the pitch inspection, not the clock: it comes straight back once the site is left as found. Late leavers pay a half-night fee instead — a separate rule for a separate sum of money.",
            trap: {
              family: "mention-lure",
              note: "£20, 10 am and fees all appear in the departure paragraph, but each belongs to a different sentence; the statement welds them together.",
            },
            whyWrong: [
              "YES: leaving late costs £12 where the pitch is free, while the £20 deposit depends only on the inspection — two different money matters.",
            ],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "pitch", partOfSpeech: "noun", definition: "the marked plot of grass a party camps on; each has its own number." },
    { word: "amenities", partOfSpeech: "noun", definition: "the shared facilities of a site, such as showers, cubicles and the laundry." },
    { word: "kindling", partOfSpeech: "noun", definition: "small dry sticks for starting a fire, sold in the campsite shop." },
    { word: "forage", partOfSpeech: "verb", definition: "to search for food in the wild; hedgehogs forage in the hedgerows after dark." },
    { word: "returnable", partOfSpeech: "adjective", definition: "paid back when conditions are met; the £20 pitch deposit is returnable." },
  ],
  passageNote:
    "Campsites write rules as concessions: welcome, but only if. The Yes/No set separates the deposit, which is an inspection matter, from the half-night fee, which is a clock matter — two sums that never meet.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// Batch H export — PROMPT 54 question-bank expansion
// ---------------------------------------------------------------------------

export const gtHExercises: ReadingExercise[] = [
  gtInsuranceClaim, // section 2, claims procedure, everyday (d4)
  gtCompanyBenefits, // section 2, benefits handbook, workplace (d3)
  gtApprenticeship, // section 2, training scheme guide, workplace (d3)
  gtCouncilServices, // section 2, council leaflet, society (d2)
  gtMuseumVisit, // section 2, museum guidance, culture (d2)
  gtCampsite, // section 2, campsite guide, everyday (d3)
];
