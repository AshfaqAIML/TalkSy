/**
 * IELTS Reading Masterclass — passage bank content expansion (PROMPT 54).
 *
 * GT batch F — six further General Training Section 2 text sets, the
 * work-and-study documents of the official middle section: a staff holiday
 * policy, an expenses procedure, a residence handbook, a gym contract, a
 * volunteering agreement and a travel-insurance summary.
 *
 *   ielts-rb-gt-holiday-policy      — Section 2, staff handbook extract (standard, d3, workplace)
 *   ielts-rb-gt-expenses            — Section 2, finance procedure       (standard, d3, workplace)
 *   ielts-rb-gt-accommodation       — Section 2, residence handbook      (standard, d3, university)
 *   ielts-rb-gt-gym-terms           — Section 2, membership contract     (standard, d3, health)
 *   ielts-rb-gt-volunteer-agreement — Section 2, charity paperwork       (foundation, d2, society)
 *   ielts-rb-gt-travel-insurance    — Section 2, insurance policy        (advanced, d4, everyday)
 *
 * Every text is original TalkSy practice material written in the style of
 * the test — never official IELTS examination content.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtFExercises: ReadingExercise[] = [
  // -------------------------------------------------------------------------
  // 1. Staff holiday policy — matching headings + True/False/Not Given
  // -------------------------------------------------------------------------
  {
    slug: "ielts-rb-gt-holiday-policy",
    title: "Staff holiday policy",
    variant: "gt",
    section: 2,
    subject: "staff handbook extract",
    topic: "workplace",
    difficulty: 3,
    estimatedMinutes: 12,
    objective: "Skim each handbook paragraph for its main idea and check statements against the small print of a holiday policy.",
    intro: "Read the staff handbook extract below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Part one — building up and booking holiday",
        paragraphs: [
          "The holiday year runs from 1 January to 31 December. Full-time staff build up 28 days in total, and that figure already includes the eight public holidays, so those dates are deducted like any other day away. Holiday is earned rather than granted in one block: one twelfth of the annual total accrues at the end of each completed month of service. Part-time colleagues have their entitlement expressed in hours rather than days, calculated from the hours they are contracted to work.",
          "All requests go through the holiday planner on the staff intranet. Ask for a week or longer at least four weeks before the first day you want off; single days need 48 hours' notice. Your manager answers within ten working days, and silence is not approval — until the planner shows the word 'approved', the dates are not yours. A granted request is confirmed on the planner itself, and the confirmation is emailed to you automatically.",
          "Dates are granted first come, first served, subject to minimum staffing: no more than three people from any one team may be away on the same day. Where two requests clash, the earlier submission wins — not the longer record of service. If business needs change, the company can ask you to move dates that were already agreed, giving at least two weeks' written notice; a request tied to a wedding or an already-paid trip will normally be protected, and the department head settles any disputed case.",
        ],
      },
      {
        heading: "Part two — closures, sickness and leaving",
        paragraphs: [
          "Two shutdowns are fixed for everyone in advance. The office closes for three working days between Christmas and New Year, and those days are deducted from your entitlement — they are not extra. The factory also stops for the first full week of August for its annual maintenance. Production staff have that week scheduled automatically; office staff may choose either to take it as holiday or to work their normal hours from home.",
          "If you fall ill during holiday that was already approved, you may claim the affected days back: report the sickness on your return and supply a doctor's note covering the dates in question. Untaken holiday cannot be carried into the following year, except where a department head agrees in writing to a carry-over of up to three days. When employment ends, holiday earned but not taken is paid out with your final salary; holiday taken but not yet earned is deducted on the same basis.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–5",
        instruction: "Choose the correct heading for paragraphs A–E from the list of headings below. There are more headings than paragraphs, so you will not use them all.",
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        extraOption: true,
        items: [
          {
            text: "Paragraph A",
            correct: 1,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 0, quote: "Holiday is earned rather than granted in one block: one twelfth of the annual total accrues at the end of each completed month of service." }],
              explanation: "Paragraph A is about how entitlement builds: one twelfth accrues each completed month, and the eight public holidays already sit inside the 28 days. The heading's 'earned' paraphrases 'accrues', and 'month by month' paraphrases the twelfths.",
            },
          },
          {
            text: "Paragraph B",
            correct: 0,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "All requests go through the holiday planner on the staff intranet." }],
              explanation: "Paragraph B is pure procedure: the planner, the two notice periods, and the ten-day reply. Nothing about limits or closures appears here, so the mechanical, how-to heading is the only comfortable fit.",
            },
          },
          {
            text: "Paragraph C",
            correct: 5,
            lure: 4,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 2, quote: "Where two requests clash, the earlier submission wins — not the longer record of service." }],
              explanation: "Paragraph C handles competition and change: first come, first served, clashes settled by submission order, and agreed dates moved on two weeks' notice. The closure heading borrows the paragraph's dates vocabulary, but fixed shutdowns belong entirely to paragraph D.",
              trap: { family: "mention-lure", note: "Heading v talks about dates the company fixes; paragraph C is about dates the company moves after approval — same words, different power." },
              whyWrong: ["v 'Shutdowns that apply to everyone': paragraph C moves dates case by case; only paragraph D fixes closures for all."],
            },
          },
          {
            text: "Paragraph D",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 1, paragraph: 0, quote: "Two shutdowns are fixed for everyone in advance." }],
              explanation: "Paragraph D lists the two fixed shutdowns and who each one affects — production staff automatically, office staff by choice. 'Shutdowns that apply to everyone' compresses the paragraph's opening sentence without quoting it.",
            },
          },
          {
            text: "Paragraph E",
            correct: 2,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "If you fall ill during holiday that was already approved, you may claim the affected days back" }],
              explanation: "Paragraph E gathers three endings: illness during holiday, days that cannot be carried over, and what is paid or deducted when employment ends. The heading names exactly those three closing subjects in order.",
            },
          },
        ],
        options: [
          "Getting your dates onto the planner",
          "Holiday that is earned month by month",
          "Sickness, unused days and leaving the company",
          "Overtime and how it is paid",
          "Shutdowns that apply to everyone",
          "When requests collide or plans change",
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 6–9",
        instruction: "Do the following statements agree with the information given in the handbook? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Part-time employees have their holiday entitlement expressed in hours.",
            answer: "TRUE",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Part-time colleagues have their entitlement expressed in hours rather than days" }],
              explanation: "Paragraph A states that part-timers have their entitlement expressed in hours rather than days, calculated from contracted hours. The statement lifts that clause almost word for word, changing only the grammatical subject.",
            },
          },
          {
            text: "A holiday request that receives no reply from the manager is treated as approved.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "silence is not approval — until the planner shows the word 'approved', the dates are not yours" }],
              explanation: "Paragraph B closes the loophole directly: silence is not approval, and the dates are not yours until the planner shows the word 'approved'. Because the handbook answers the question outright, the statement contradicts given information rather than drifting into Not Given.",
              trap: { family: "boundary", note: "Candidates hesitate between FALSE and NOT GIVEN — the policy states the rule explicitly, so the information is given and contradicted." },
              whyWrong: ["NOT GIVEN: paragraph B addresses unanswered requests in terms, so there is information — and it is the opposite of the statement."],
            },
          },
          {
            text: "Office employees must take the August maintenance week as holiday.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "Production staff have that week scheduled automatically; office staff may choose either to take it as holiday or to work their normal hours from home." }],
              explanation: "The automatic scheduling applies to production staff only; office staff may choose between holiday and working from home. The statement copies the August week but attaches it to the wrong group of employees with the wrong modal verb.",
              trap: { family: "mention-lure", note: "The sentence's first half (automatic scheduling) is quoted against its second half (office choice) — read both halves before judging." },
              whyWrong: ["TRUE: 'may choose' leaves the decision with the employee, so 'must take' contradicts the clause."],
            },
          },
          {
            text: "Employees receive a lower rate of pay for holiday taken during the Christmas closure.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "those days are deducted from your entitlement — they are not extra" }],
              explanation: "Paragraph D says the Christmas closure days are deducted from entitlement and are not extra, but it never discusses the rate of pay for those days. A reduced pay rule is invented by the statement alone, and invented details are Not Given.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "accrues", partOfSpeech: "verb", definition: "builds up over time; one twelfth of the annual holiday accrues at the end of each completed month." },
      { word: "entitlement", partOfSpeech: "noun", definition: "the amount you have a right to; 28 days for full-time staff, expressed in hours for part-timers." },
      { word: "intranet", partOfSpeech: "noun", definition: "the company's private website; the holiday planner lives on the staff intranet." },
      { word: "staffing", partOfSpeech: "noun", definition: "the people available to work; approvals are subject to minimum staffing levels." },
      { word: "carry-over", partOfSpeech: "noun", definition: "unused holiday moved into the next year; up to three days may be agreed in writing." },
      { word: "deducted", partOfSpeech: "verb (past participle)", definition: "taken away from a total; public holidays are deducted like any other day off." },
    ],
    passageNote: "Handbook paragraphs bury their exceptions after the colon and the dash. Heading answers paraphrase a paragraph's spine; verdict answers almost always turn on one qualifier — 'not extra', 'may choose', 'silence is not approval'.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 2. Claiming staff expenses — flow-chart completion + Yes/No/Not Given
  // -------------------------------------------------------------------------
  {
    slug: "ielts-rb-gt-expenses",
    title: "Claiming staff expenses",
    variant: "gt",
    section: 2,
    subject: "finance procedure",
    topic: "workplace",
    difficulty: 3,
    estimatedMinutes: 13,
    objective: "Follow a claims procedure step by step and judge what the finance office will and will not repay.",
    intro: "Read the finance procedure below and answer Questions 1–9.",
    blocks: [
      {
        heading: "How the claim procedure works",
        paragraphs: [
          "Step by step. Collect a receipt for every purchase — card statements are not accepted as proof. Then log into the finance portal and open a new claim within thirty days of the date you spent the money; anything older needs your director's signature before it can be processed. Enter each item on a separate line and choose the correct category: travel, subsistence, training or equipment. Next, photograph the receipts and attach the images to the claim — each picture must show the amount paid in full. When you submit, the claim travels first to your line manager, who checks it against the department budget, and then to the finance office, which pays approved amounts into your bank account with the next monthly salary run.",
          "Times and limits. Claims are processed twice a week, on Tuesdays and Fridays. A single claim totalling more than £75 is flagged for a second approval, which adds roughly three working days to the wait. There is no yearly ceiling on what a member of staff may claim, but any single purchase above £250 must be agreed with the finance office in advance of the spend itself.",
        ],
      },
      {
        heading: "What counts — and what does not",
        paragraphs: [
          "Allowable costs. Travel between company sites is paid at 45p a mile for drivers, and rail fares are refunded at the standard off-peak rate; first-class tickets are not covered at any level. Subsistence means a meal when a working trip lasts longer than eight hours, capped at £15, and an overnight stay within the UK up to £90. Training courses and professional subscriptions are allowable where your manager has approved them in writing beforehand. Books and small equipment belong on a claim only when they will be used for work.",
          "Costs that are never allowable. The journey between home and your usual workplace never qualifies, however long it takes — commuting is treated as a personal cost. Parking fines and speeding penalties are refused in every case, and so is interest on late credit-card payments. Alcohol at a team meal is excluded even when the meal itself is allowable. When a claim mixes allowable and non-allowable items, the finance office pays the allowable part and returns the rest with a written note; nothing is reduced silently.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart-completion",
        label: "Questions 1–5",
        instruction: "Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the procedure for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Submitting an expenses claim" }],
          [{ kind: "text", text: "Collect a" }, { kind: "blank", no: 1 }, { kind: "text", text: "for every purchase." }],
          [{ kind: "text", text: "Open a claim on the finance portal within" }, { kind: "blank", no: 2 }, { kind: "text", text: "of spending the money." }],
          [{ kind: "text", text: "Enter each item on its own line, choosing the correct" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "Photograph the receipts and attach the" }, { kind: "blank", no: 4 }, { kind: "text", text: "to the claim." }],
          [{ kind: "text", text: "Submit — the claim goes first to the" }, { kind: "blank", no: 5 }, { kind: "text", text: ", then to the finance office for payment." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "receipt",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Collect a receipt for every purchase — card statements are not accepted as proof." }],
              explanation: "The first step names the paperwork: a receipt for every purchase, because card statements are refused in the same breath. The flow-chart keeps 'purchase' and asks for the document that proves it.",
            },
          },
          {
            no: 2,
            answer: "thirty days",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "open a new claim within thirty days of the date you spent the money" }],
              explanation: "Claims must be opened within thirty days of the money being spent; anything older needs a director's signature. The flow-chart keeps 'of spending the money' and needs the deadline phrase that precedes it.",
            },
          },
          {
            no: 3,
            answer: "category",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 0, quote: "Enter each item on a separate line and choose the correct category: travel, subsistence, training or equipment." }],
              explanation: "Each item is entered on its own line under the correct category — travel, subsistence, training or equipment. The flow-chart keeps 'choosing the correct' and asks for the sorting noun that the four examples define.",
            },
          },
          {
            no: 4,
            answer: "images",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "photograph the receipts and attach the images to the claim" }],
              explanation: "Receipts are photographed and the images are attached to the claim, each picture showing the amount paid in full. The flow-chart keeps 'photograph the receipts' and asks for the thing that is attached.",
            },
          },
          {
            no: 5,
            answer: "line manager",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "the claim travels first to your line manager, who checks it against the department budget" }],
              explanation: "The claim travels to two offices in a fixed order: the line manager checks it against the budget first, and the finance office pays it second. The flow-chart's 'goes first to the' pins the answer to the earlier stop.",
              trap: { family: "order", note: "Two offices handle every claim — the manager checks it first, finance pays it second; the arrow's direction is the whole question." },
              whyWrong: ["finance office: that is the second stop, which pays rather than checks."],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 6–9",
        instruction: "Do the following statements agree with the information given in the procedure? Write YES if the statement agrees with the information, NO if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "A card statement is acceptable evidence of a purchase.",
            answer: "NO",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "card statements are not accepted as proof" }],
              explanation: "The procedure refuses card statements as proof in its very first sentence. The acceptable evidence is the itemised receipt, so the statement contradicts the procedure on its opening rule.",
            },
          },
          {
            text: "Claims of more than £75 take roughly three extra working days.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "A single claim totalling more than £75 is flagged for a second approval, which adds roughly three working days to the wait." }],
              explanation: "A claim totalling more than £75 is flagged for a second approval, and the second approval adds roughly three working days. The statement's 'extra' paraphrases 'adds', and both figures are lifted unchanged.",
            },
          },
          {
            text: "Drivers of electric cars are paid a higher mileage rate.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "Travel between company sites is paid at 45p a mile for drivers" }],
              explanation: "The mileage rule gives one flat rate, 45p a mile, for drivers; fuel type and vehicle type are never mentioned anywhere in the procedure. Without a comparison in the text, the higher-rate claim cannot be judged either way.",
            },
          },
          {
            text: "Staff can claim for travelling to their usual workplace if the journey is especially long.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 1, quote: "The journey between home and your usual workplace never qualifies, however long it takes" }],
              explanation: "Commuting never qualifies, however long the journey takes — the policy removes the distance exception in the same breath as the ban. The statement's 'especially long' tries to reopen a door the word 'however' has closed.",
              trap: { family: "extreme-language", note: "'Never … however long' closes every distance-based exception; the statement invents one anyway." },
              whyWrong: ["NOT GIVEN: distance is discussed, and the answer it produces is a flat refusal, not silence."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "subsistence", partOfSpeech: "noun", definition: "money for meals during a working trip; subsistence covers one meal when a trip lasts over eight hours." },
      { word: "allowable", partOfSpeech: "adjective", definition: "acceptable on a claim; training courses are allowable when a manager approves them in writing beforehand." },
      { word: "commuting", partOfSpeech: "noun", definition: "the regular journey between home and your usual workplace; it is treated as a personal cost." },
      { word: "portal", partOfSpeech: "noun", definition: "the company's internal website; claims are opened on the finance portal." },
      { word: "capped", partOfSpeech: "verb (past participle)", definition: "limited to a maximum; meal claims are capped at £15." },
      { word: "off-peak", partOfSpeech: "adjective", definition: "outside the busiest travel times; rail fares are refunded at the standard off-peak rate." },
    ],
    passageNote: "A procedure is a chain: each step names the next, and every step carries a limit. The flow-chart lifts the chain in order; the verdicts test the clauses that close doors — 'never', 'not accepted', 'however long'.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 3. University accommodation handbook — matching information + sentence completion
  // -------------------------------------------------------------------------
  {
    slug: "ielts-rb-gt-accommodation",
    title: "University accommodation handbook",
    variant: "gt",
    section: 2,
    subject: "residence handbook",
    topic: "university",
    difficulty: 3,
    estimatedMinutes: 13,
    objective: "Locate rules inside a residence handbook by paragraph and copy exact words from its clauses.",
    intro: "Read the residence handbook below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Living in Maple Court",
        paragraphs: [
          "Moving in. Contracts run for either 40 or 51 weeks, and the difference matters: the shorter one ends in June, while the longer covers the summer term and beyond. Keys are collected from the residence office between 10 am and 4 pm on arrival day; if you land later, the security desk keeps a spare set until midnight. Bring your offer letter and photographic identification — the office will not release keys without them.",
          "What is provided. Every flat has a shared kitchen with a cooker, a microwave and two fridges; bedding packs can be ordered in advance for £25. Laundry rooms sit on the ground floor of each block, and the machines take coins as well as the residence app. The study bedroom contains a desk, a chair, a wardrobe and shelving — anything beyond that, from kettles to fairy lights, is your own to bring, subject to the safety rules that follow.",
          "People who can help. Each floor has a resident tutor, a senior student who deals with noise and everyday disputes out of office hours; the residence manager handles repairs and contracts. The welfare team runs a drop-in session in the common room every weekday afternoon, with no appointment needed. Report maintenance problems online and you will receive a reply within 48 hours; emergencies, such as a burst pipe, go to the 24-hour security number.",
        ],
      },
      {
        heading: "Your contract and the rules",
        paragraphs: [
          "Safety. Cookers must never be left unattended, and deep-fat fryers are banned outright. Portable heaters may be used only with the manager's written permission. Corridors and stairwells must stay clear of boxes and bicycles; anything left there is treated as a fire risk and removed without warning. Fire alarms are tested each Monday morning; a continuous alarm at any other hour means leaving by the nearest fire door, and everyone gathers on the tennis courts.",
          "Fees and leaving early. Rent is paid in three instalments, in October, January and April, directly to the university — never in cash to anyone who claims to collect it. If you withdraw from your course, you may end the accommodation contract by giving written notice and paying an early-leaving charge of four weeks' rent. Students who formally intermit — suspend their studies for a time — keep their room if the suspension lasts less than one term.",
          "Guests and vehicles. A guest may stay a maximum of three nights in any week, and longer visits must be registered with the resident tutor. Guests cannot stay during exam quiet hours, which begin in the last week of April. The car park is permit only: apply through the residence office, permits cost £30 a term, and waiting lists operate from October onwards. Bicycles go in the locked shed, not in corridors or stairwells.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction: "The handbook has six paragraphs, A–F. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a document that must be shown before keys can be released",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Bring your offer letter and photographic identification — the office will not release keys without them." }],
              explanation: "The keys clause sits at the end of paragraph A: the offer letter and photographic identification, without which the office will not release keys. Documents are the paragraph's final condition, and its final warning.",
            },
          },
          {
            text: "something that costs extra and must be arranged before arrival",
            correct: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "bedding packs can be ordered in advance for £25" }],
              explanation: "Paragraph B lists what the flats contain and the one extra that costs money: bedding packs ordered in advance for £25. Everything else in the paragraph — kitchens, laundry, furniture — is provided inside the rent.",
            },
          },
          {
            text: "the right place to report a repair that cannot wait",
            correct: 2,
            lure: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "emergencies, such as a burst pipe, go to the 24-hour security number" }],
              explanation: "Paragraph C routes maintenance reports online but sends emergencies, such as a burst pipe, to the 24-hour security number. The word 'urgent' in the item matches 'emergencies', and the number is the answer's address.",
              trap: { family: "mention-lure", note: "Paragraph A also mentions a security desk — but for late key collection, not repairs; the emergency number belongs to paragraph C." },
            },
          },
          {
            text: "equipment that may only be used with the manager's written permission",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Portable heaters may be used only with the manager's written permission." }],
              explanation: "The safety paragraph allows portable heaters only with the manager's written permission. It is the one item of equipment in the handbook whose rule depends on a signed authorisation rather than a flat ban.",
            },
          },
          {
            text: "an arrangement that protects a student's room during a short break in studies",
            correct: 4,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 1, paragraph: 1, quote: "Students who formally intermit — suspend their studies for a time — keep their room if the suspension lasts less than one term." }],
              explanation: "Paragraph E protects students who intermit briefly: they keep their room if the suspension lasts less than one term. The item's 'short break in studies' paraphrases 'suspend their studies for a time', which is spelled out between the dashes.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F"],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–9",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the handbook for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. Every flat has a shared kitchen with a cooker, a microwave and two" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "7. The laundry machines take coins as well as the residence" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "8. Rent is paid directly to the university, and never in" }, { kind: "blank", no: 8 }, { kind: "text", text: ", to anyone who claims to collect it." }],
          [{ kind: "text", text: "9. A guest may stay for a maximum of three" }, { kind: "blank", no: 9 }, { kind: "text", text: "in any week." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "fridges",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Every flat has a shared kitchen with a cooker, a microwave and two fridges" }],
              explanation: "The shared kitchen contains a cooker, a microwave and two fridges, paragraph B states. The sentence keeps the first two appliances and asks for the third, copied exactly from the same list.",
            },
          },
          {
            no: 7,
            answer: "app",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "the machines take coins as well as the residence app" }],
              explanation: "Laundry machines take coins as well as the residence app. The sentence keeps 'residence' and needs the one-word payment channel that follows it — a short, easy word that is still easy to miss.",
            },
          },
          {
            no: 8,
            answer: "cash",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "never in cash to anyone who claims to collect it" }],
              explanation: "Rent goes directly to the university and never in cash to anyone who claims to collect it. The warning is aimed at fraudsters posing as collectors, and 'never in cash' supplies the missing word.",
            },
          },
          {
            no: 9,
            answer: "nights",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 2, quote: "A guest may stay a maximum of three nights in any week" }],
              explanation: "A guest may stay a maximum of three nights in any week, and longer visits must be registered. The sentence prints the number three and asks for the unit that follows it in the same clause.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "resident tutor", partOfSpeech: "noun phrase", definition: "a senior student living on the floor who handles noise and everyday disputes out of office hours." },
      { word: "instalments", partOfSpeech: "noun (plural)", definition: "a series of partial payments; rent is paid in three instalments across the year." },
      { word: "intermit", partOfSpeech: "verb", definition: "to suspend your studies for a time; students who intermit briefly keep their room." },
      { word: "stairwell", partOfSpeech: "noun", definition: "the vertical space containing a staircase; it must stay clear of boxes and bicycles." },
      { word: "permit", partOfSpeech: "noun", definition: "official permission to park; permits cost £30 a term and are obtained from the residence office." },
      { word: "welfare", partOfSpeech: "noun", definition: "support for students' wellbeing; the welfare team runs a weekday drop-in session." },
    ],
    passageNote: "Residence handbooks alternate between what you get and what you must do, spread across headed paragraphs. Matching information rewards scanning the lettered paragraphs instead of rereading from the top each time.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 4. Gym membership terms — True/False/Not Given + sentence completion
  // -------------------------------------------------------------------------
  {
    slug: "ielts-rb-gt-gym-terms",
    title: "Gym membership terms",
    variant: "gt",
    section: 2,
    subject: "membership contract",
    topic: "health",
    difficulty: 3,
    estimatedMinutes: 12,
    objective: "Check the boundaries of a membership contract: cooling-off, freezing, cancellations and the rules of use.",
    intro: "Read the membership terms below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Your membership",
        paragraphs: [
          "Memberships and cooling off. A membership runs for a minimum of twelve months from the start date printed on your agreement. When you sign up you receive a fourteen-day cooling-off period, during which you may cancel for a full refund — but if you use the facilities before the fourteen days are over, the clock started on that first visit, not on the day you signed. After the minimum term the contract simply continues month by month until you cancel in writing; there is no automatic end date, and asking at the desk does not count as cancellation.",
          "Freezing and cancelling. You may freeze a membership twice in any membership year, for between one and three months each time, paying a reduced fee of £5 for every frozen month. To cancel once the minimum term has passed, give one full month's written notice, delivered by hand or by email to the memberships address. A cancellation takes effect only when the account holds no unpaid fees, so clear any balance before the notice is sent.",
        ],
      },
      {
        heading: "Using the club",
        paragraphs: [
          "Classes and courts. Group classes are booked through the member app and open for booking seven days ahead. Latecomers more than five minutes after the start of a class are turned away without a refund. The squash courts are let in 45-minute slots, with a limit of two slots per member per day. Cancelling a class less than four hours before it begins counts as a no-show, and the session is charged as if you attended; members who miss three booked classes in a month lose app booking for the following month and must book at reception instead.",
          "Lockers and conduct. Day lockers are free and must be emptied each night; property left overnight is bagged and stored for seven days, after which it goes to a local charity. Towels are issued at reception against a £1 deposit. Training in bare feet is not permitted anywhere outside the stretching room, and outdoor shoes are banned from the studio floor. Photographs may be taken in the lobby only — never in the changing rooms, the gym hall or the studios, where other members' privacy comes first.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "true-false-not-given",
        label: "Questions 1–5",
        instruction: "Do the following statements agree with the information given in the terms? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "The cooling-off period always begins on the day the agreement is signed.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "if you use the facilities before the fourteen days are over, the clock started on that first visit, not on the day you signed" }],
              explanation: "The cooling-off clock starts on the day you sign — unless you use the facilities first, in which case it starts on that earlier visit. The statement's 'always' erases the exception the terms describe in full.",
              trap: { family: "extreme-language", note: "'Always' flattens a conditional rule; the contract gives one case where the clock starts early." },
              whyWrong: ["TRUE: one case — an early first visit — moves the clock's start, so 'always' cannot stand."],
            },
          },
          {
            text: "A membership can be frozen for up to three months at a time.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "You may freeze a membership twice in any membership year, for between one and three months each time" }],
              explanation: "Freezing runs for between one and three months each time, twice in any membership year, at £5 a frozen month. 'Up to three months at a time' is the upper edge of that stated range, with nothing added.",
            },
          },
          {
            text: "At the end of the twelve-month minimum term, the membership finishes automatically.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "the contract simply continues month by month until you cancel in writing; there is no automatic end date" }],
              explanation: "After the minimum term the contract continues month by month until written cancellation, and the terms say plainly that there is no automatic end date. An ending that arranges itself is the exact opposite of the clause.",
            },
          },
          {
            text: "A member who cancels a booked class five hours before it starts is charged for the session.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "Cancelling a class less than four hours before it begins counts as a no-show, and the session is charged as if you attended" }],
              explanation: "The charge applies only to cancellations made less than four hours before the class begins. Five hours sits outside that window, so the session is not charged — the arithmetic, not the vocabulary, is the whole test.",
              trap: { family: "boundary", note: "Five hours is more than four; candidates who skim the number instead of comparing it choose TRUE." },
              whyWrong: ["TRUE: 'less than four hours' excludes a five-hour cancellation, which keeps the credit rather than the charge."],
            },
          },
          {
            text: "The club offers cheaper class bookings to students who book several at once.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "Group classes are booked through the member app and open for booking seven days ahead." }],
              explanation: "The terms explain how classes are booked and what latecomers and no-shows lose, but no discounted block booking for students or anyone else is mentioned. A discount scheme is invented by the statement alone.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–9",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the terms for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. Members arriving more than five minutes after a class starts are" }, { kind: "blank", no: 6 }, { kind: "text", text: "without a refund." }],
          [{ kind: "text", text: "7. The squash courts are let in 45-minute" }, { kind: "blank", no: 7 }, { kind: "text", text: ", with a limit of two per member per day." }],
          [{ kind: "text", text: "8. Towels are issued at reception against a £1" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "9. Training in bare feet is permitted only inside the" }, { kind: "blank", no: 9 }, { kind: "text", text: "." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "turned away",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Latecomers more than five minutes after the start of a class are turned away without a refund." }],
              explanation: "Latecomers more than five minutes after the start are turned away without a refund. The sentence keeps 'more than five minutes' and asks for the two-word verb phrase that describes what happens next.",
            },
          },
          {
            no: 7,
            answer: "slots",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 1, paragraph: 0, quote: "The squash courts are let in 45-minute slots, with a limit of two slots per member per day." }],
              explanation: "Squash courts are let in 45-minute slots, with a maximum of two per member per day. The sentence keeps '45-minute' and needs the booking noun that follows it — one short word carrying the rule.",
            },
          },
          {
            no: 8,
            answer: "deposit",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 1, paragraph: 1, quote: "Towels are issued at reception against a £1 deposit." }],
              explanation: "Towels are issued at reception against a £1 deposit, which is the small sum held as security. The sentence keeps the amount and asks for the held-security noun that follows it.",
            },
          },
          {
            no: 9,
            answer: "stretching room",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "Training in bare feet is not permitted anywhere outside the stretching room" }],
              explanation: "Bare-foot training is permitted only inside the stretching room; everywhere else in the club it is banned. The sentence inverts the ban into a permission and asks for the one room named.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "cooling-off period", partOfSpeech: "noun phrase", definition: "a short window after signing in which you may cancel for a full refund; it can start on your first visit." },
      { word: "freeze", partOfSpeech: "verb", definition: "to pause a membership; twice a year, for one to three months each time, at £5 a month." },
      { word: "minimum term", partOfSpeech: "noun phrase", definition: "the shortest period a contract must run; twelve months for this membership." },
      { word: "slot", partOfSpeech: "noun", definition: "a booked period of use; squash courts are let in 45-minute slots." },
      { word: "deposit", partOfSpeech: "noun", definition: "a small sum held as security; towels are issued against a £1 deposit." },
      { word: "no-show", partOfSpeech: "noun", definition: "a booking missed or cancelled too late; cancelling under four hours ahead counts as one." },
    ],
    passageNote: "Contract terms live or die at their edges — when a clock starts, how many hours count, which rooms a rule covers. Every statement in this set tests one of those edges, and two of them hide in arithmetic.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 5. The volunteering agreement — sentence completion + matching information
  // -------------------------------------------------------------------------
  {
    slug: "ielts-rb-gt-volunteer-agreement",
    title: "The volunteering agreement",
    variant: "gt",
    section: 2,
    subject: "charity paperwork",
    topic: "society",
    difficulty: 2,
    estimatedMinutes: 12,
    objective: "Read a simple volunteering agreement for what each side promises and what is expected in return.",
    intro: "Read the volunteering agreement below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Welcome to the Riverside Community Kitchen",
        paragraphs: [
          "What we ask of you. As a volunteer you agree to turn up for the shifts you sign up for, or to give at least 24 hours' notice when you cannot. No experience or qualification is needed — we give full training at the start of your first session, and a team leader is on hand at every shift to help. Volunteers must be over 16, and anyone under 18 needs a parent's signature on this agreement.",
          "What we promise in return. We refund reasonable travel costs between your home and the kitchen, up to £6 per shift, and lunch is provided on any shift lasting four hours or more. Every volunteer who completes three months of regular service receives a written reference for future employers. You will never be asked to handle money on your own, and you are covered by the charity's insurance whenever you are working a shift.",
          "What volunteers actually do. Most people help with cooking, serving or washing up, and the weekly rota lets you choose your role each time. If you would rather stay out of the kitchen, you can collect donations of food from local shops, drive the delivery van if you hold a licence, or welcome guests at the door and show them to their tables. Whatever you choose, someone will show you how the first time.",
        ],
      },
      {
        heading: "Practical matters",
        paragraphs: [
          "Time off and leaving. There is no minimum commitment — some volunteers come every week and others once a month, and both are equally welcome. If you decide to stop, simply tell your team leader; there is no notice period and no form to complete. We ask only that you hand back your name badge. Your details stay on file in case you would like to return later.",
          "Problems and concerns. If anything about a shift worries you — a guest's behaviour, another volunteer, or the way the kitchen is run — speak to any team leader, or write in confidence to the coordinator at the address on the back page. Concerns are always listened to and never punished, and you may ask to move to a different team whenever you wish.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "sentence-completion",
        label: "Questions 1–4",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the agreement for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "1. No experience is needed because the charity provides full" }, { kind: "blank", no: 1 }, { kind: "text", text: "at the first session." }],
          [{ kind: "text", text: "2. Travel costs are refunded up to £6 per" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "3. A volunteer who completes three months of regular service receives a written" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. Volunteers may drive the delivery van if they hold a" }, { kind: "blank", no: 4 }, { kind: "text", text: "." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "training",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "we give full training at the start of your first session" }],
              explanation: "The agreement promises full training at the start of your first session, which is why no experience or qualification is needed. The sentence keeps 'full' and asks for the noun that follows it.",
            },
          },
          {
            no: 2,
            answer: "shift",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "We refund reasonable travel costs between your home and the kitchen, up to £6 per shift" }],
              explanation: "Travel costs are refunded up to £6 per shift. The sentence keeps the amount and asks for the unit the amount attaches to — the same word the rest of the agreement measures everything by.",
            },
          },
          {
            no: 3,
            answer: "reference",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "Every volunteer who completes three months of regular service receives a written reference" }],
              explanation: "After three months of regular service a volunteer receives a written reference for future employers. The sentence keeps 'written' and asks for the noun it describes, copied straight from the promise.",
            },
          },
          {
            no: 4,
            answer: "licence",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "drive the delivery van if you hold a licence" }],
              explanation: "Volunteers may drive the delivery van if they hold a licence, paragraph C states among the out-of-kitchen roles. The sentence keeps 'drive the delivery van' and needs the document named in the condition.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "matching-information",
        label: "Questions 5–8",
        instruction: "The agreement has five paragraphs, A–E. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a job for volunteers who prefer not to work in the kitchen",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "If you would rather stay out of the kitchen, you can collect donations of food from local shops, drive the delivery van" }],
              explanation: "Paragraph C lists the out-of-kitchen roles: collecting donations from shops, driving the van, or welcoming guests at the door. Choosing a role each week is the paragraph's opening idea, and staying out of the kitchen is the phrase to match.",
            },
          },
          {
            text: "a way of raising a concern privately",
            correct: 4,
            lure: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 1, quote: "write in confidence to the coordinator at the address on the back page" }],
              explanation: "Paragraph E offers two routes: telling a team leader, or writing in confidence to the coordinator at the back-page address. Paragraph D also says 'simply tell your team leader', but that sentence is about leaving, not concerns.",
              trap: { family: "mention-lure", note: "Both paragraphs mention telling a team leader; only paragraph E promises a private, written route." },
              whyWrong: ["D: its 'tell your team leader' belongs to stopping volunteering, and nothing there is confidential."],
            },
          },
          {
            text: "a requirement that applies only to volunteers under 18",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Volunteers must be over 16, and anyone under 18 needs a parent's signature on this agreement." }],
              explanation: "The age rule closes paragraph A: volunteers must be over 16, and anyone under 18 needs a parent's signature on the agreement. The condition attaches to age alone, which is exactly what the item asks for.",
            },
          },
          {
            text: "something a volunteer must give back when they stop coming",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "We ask only that you hand back your name badge." }],
              explanation: "Paragraph D asks leavers to hand back their name badge. It is the only item of property the agreement wants returned, and the sentence around it is about stopping, not starting.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E"],
      },
    ],
    glossary: [
      { word: "reference", partOfSpeech: "noun", definition: "a written statement of your service, given to future employers after three months." },
      { word: "rota", partOfSpeech: "noun", definition: "the schedule of who does what and when; the weekly rota lets volunteers choose a role each time." },
      { word: "donation", partOfSpeech: "noun", definition: "something given for free; volunteers collect donations of food from local shops." },
      { word: "badge", partOfSpeech: "noun", definition: "the card showing your name; it is handed back when you stop volunteering." },
      { word: "coordinator", partOfSpeech: "noun", definition: "the person who organises the volunteering; concerns can be written to the coordinator in confidence." },
    ],
    passageNote: "A charity agreement is written to reassure, so its sentences are short and its promises explicit. The questions simply keep the two sides apart — what the charity gives, and what it asks in return.",
    source: READING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 6. Travel insurance policy summary — matching features + Yes/No/Not Given
  // -------------------------------------------------------------------------
  {
    slug: "ielts-rb-gt-travel-insurance",
    title: "Travel insurance policy summary",
    variant: "gt",
    section: 2,
    subject: "insurance policy",
    topic: "everyday",
    difficulty: 4,
    estimatedMinutes: 15,
    objective: "Compare three levels of insurance cover, then weigh each claim against the policy's exact words.",
    intro: "Read the policy summary below and answer Questions 1–9.",
    blocks: [
      {
        heading: "The three levels of cover",
        paragraphs: [
          "Standard. Designed for a single trip of up to 17 days, at home or abroad, Standard carries a medical ceiling of £2 million, baggage cover to £1,000 and cancellation cover to £750. Winter sports are excluded at this level, as is any journey connected with manual work. Adults travel from £9 a week, and children under 18 are included free when they travel with a parent holding the same policy.",
          "Explorer. Explorer raises the medical ceiling to £5 million, lifts baggage cover to £1,500 and stretches a single trip to 31 days. Winter sports come as standard, and the level adds two extras that gear-heavy travellers notice: one bicycle and one set of golf clubs are insured against damage in transit. Explorer is also the entry level for journeys that involve volunteering abroad.",
          "Annual Multi-trip. The annual policy covers every journey you begin inside a twelve-month period, provided each trip lasts no more than 45 days. It carries Explorer-level medical and baggage figures as standard, and it adds a 17-day winter-sports allowance each year at no extra cost. Families are priced as a unit rather than per person, which usually makes this the cheapest option from the third trip of the year onwards.",
        ],
      },
      {
        heading: "Small print that decides claims",
        paragraphs: [
          "Conditions and exclusions. The medical cover on every level assumes you hold a European Health Insurance Card where one applies; treatment that the card would have covered is not claimed again from the policy. Alcohol-related claims are refused — the standard is 'under the influence', not drunkenness, and it is applied strictly. Untreated medical conditions must be declared when you buy, whatever the level; failure to declare voids the whole policy, not just the related claim. Hazardous pursuits, from mountaineering to scuba diving below 30 metres, are insured only with the activity extension.",
          "Making a claim. Notify the claims line within 48 hours of any incident, or as soon as an emergency allows; late notification is the most common reason that payments are reduced. Keep every receipt and, for baggage, a proof of ownership such as a photograph of the item in your home. Repairs to damaged luggage are arranged through our approved network; choose a repairer yourself and the bill may be met only in part. Cancellation claims require written confirmation of the reason from the provider concerned.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-features",
        label: "Questions 1–4",
        instruction: "Look at the following statements and the list of cover levels below. Match each statement with the correct cover level. You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "One bicycle and one set of golf clubs are insured against damage in transit.",
            correct: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "one bicycle and one set of golf clubs are insured against damage in transit" }],
              explanation: "Paragraph B, the Explorer description, lists the two sporting extras: one bicycle and one set of golf clubs insured against damage in transit. No other level mentions sporting equipment of any kind.",
            },
          },
          {
            text: "Families pay one price rather than a price per person.",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Families are priced as a unit rather than per person" }],
              explanation: "Paragraph C prices families as a unit rather than per person, which it calls the cheapest option from the third trip onwards. That pricing rule belongs to the annual policy alone.",
            },
          },
          {
            text: "Children are covered at no extra cost when they travel with a parent on the same policy.",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "children under 18 are included free when they travel with a parent holding the same policy" }],
              explanation: "Paragraph A, the Standard description, includes children under 18 free when they travel with a parent holding the same policy. The free-child clause appears there and nowhere else in the summary.",
            },
          },
          {
            text: "The lowest level at which trips abroad to volunteer are covered.",
            correct: 1,
            lure: 2,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Explorer is also the entry level for journeys that involve volunteering abroad." }],
              explanation: "Paragraph B names Explorer as the entry level for journeys that involve volunteering abroad — the word 'entry' is what 'lowest' paraphrases. Annual Multi-trip borrows the word 'Explorer-level' for its figures, which is the lure.",
              trap: { family: "mention-lure", note: "'Explorer-level figures' in paragraph C tempts a match with the annual policy, but the volunteering clause itself sits in paragraph B alone." },
              whyWrong: ["C Annual Multi-trip: it copies Explorer's medical and baggage figures, not the volunteering clause that defines the entry level."],
            },
          },
        ],
        options: ["Standard", "Explorer", "Annual Multi-trip", "All three levels"],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 5–9",
        instruction: "Do the following statements agree with the information given in the policy summary? Write YES if the statement agrees with the information, NO if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Treatment that a European Health Insurance Card would have paid for can also be claimed from the policy.",
            answer: "NO",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 1, paragraph: 0, quote: "treatment that the card would have covered is not claimed again from the policy" }],
              explanation: "The conditions paragraph refuses to pay again for treatment a European Health Insurance Card would have covered. The policy backs the card up; it does not duplicate it, so the statement contradicts the stated division of work.",
            },
          },
          {
            text: "A claim can be refused because of alcohol even when the traveller was not drunk.",
            answer: "YES",
            lure: "NO",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "the standard is 'under the influence', not drunkenness, and it is applied strictly" }],
              explanation: "Refusal begins at 'under the influence', a standard the policy applies strictly, and it names drunkenness only to say that is not the line. A traveller can be under the influence without being drunk, so the refusal can bite earlier.",
              trap: { family: "paraphrase-gap", note: "'Not drunk' is not the policy's test — 'under the influence' is a lower bar, and the claim is still refused below it." },
              whyWrong: ["NO: the policy explicitly separates its standard from drunkenness, which is what makes the wider refusal agree with the statement."],
            },
          },
          {
            text: "If a medical condition was not declared, only claims connected with that condition are affected.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "failure to declare voids the whole policy, not just the related claim" }],
              explanation: "Failure to declare an untreated condition voids the whole policy, not just the related claim. The statement narrows the damage with 'only', which contradicts the breadth the policy spells out word for word.",
              trap: { family: "extreme-language", note: "'Only' shrinks a whole-policy consequence into a single-claim one — the classic narrowing move." },
              whyWrong: ["NOT GIVEN: the scope of the void is stated plainly — 'the whole policy' — so the information is given and contradicted."],
            },
          },
          {
            text: "Scuba diving below 30 metres is insured for qualified divers.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["inference", "vocabulary"],
              evidence: [{ block: 1, paragraph: 0, quote: "Hazardous pursuits, from mountaineering to scuba diving below 30 metres, are insured only with the activity extension." }],
              explanation: "Hazardous pursuits, including scuba diving below 30 metres, are insured only with the activity extension; qualifications are never mentioned anywhere in the summary. A certificate requirement would be new information, and new information is Not Given.",
              trap: { family: "boundary", note: "The extension is the stated condition; candidates invent a qualifications condition to force a NO." },
              whyWrong: ["NO: diving qualifications are simply not discussed, so the statement cannot be contradicted either."],
            },
          },
          {
            text: "Baggage claims must include evidence that the claimant owned the items.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 1, paragraph: 1, quote: "for baggage, a proof of ownership such as a photograph of the item in your home" }],
              explanation: "Baggage claims require a proof of ownership, such as a photograph of the item in your home. 'Evidence that the claimant owned the items' paraphrases 'proof of ownership' without changing its legal weight, so the statement agrees.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "ceiling", partOfSpeech: "noun", definition: "the maximum a policy will pay; Standard's medical ceiling is £2 million." },
      { word: "voids", partOfSpeech: "verb", definition: "cancels legally; failing to declare a condition voids the whole policy." },
      { word: "hazardous", partOfSpeech: "adjective", definition: "dangerous; hazardous pursuits are insured only with the activity extension." },
      { word: "pursuit", partOfSpeech: "noun", definition: "an activity or hobby; scuba diving below 30 metres counts as a hazardous pursuit." },
      { word: "notify", partOfSpeech: "verb", definition: "to report formally; the claims line must be notified within 48 hours of an incident." },
      { word: "extension", partOfSpeech: "noun", definition: "an addition bought for a policy; the activity extension covers hazardous pursuits." },
    ],
    passageNote: "Policy summaries trap readers with shared figures — two levels carrying the same ceiling — and legal standards such as 'under the influence'. Match the level first, then judge every statement against the exact words, not the ones you expect.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
