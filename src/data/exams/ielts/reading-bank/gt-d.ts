/**
 * General Training text library D (PROMPT 54 question-bank expansion).
 *
 * GT batch D — six Section 1 short-text sets: notices, adverts and leaflets
 * in the official Section 1 band, each with two question groups:
 *
 *   ielts-rb-gt-leisure-programme — centre programme (notices and adverts) (foundation, d2, everyday)
 *   ielts-rb-gt-pharmacy          — health notices                              (foundation, d1, health)
 *   ielts-rb-gt-school-notices    — school notices                              (foundation, d2, education)
 *   ielts-rb-gt-rail-replacement  — travel notice                               (foundation, d2, everyday)
 *   ielts-rb-gt-library-closure   — library notices                             (standard,   d3, culture)
 *   ielts-rb-gt-cafe-menu         — café texts                                  (foundation, d1, everyday)
 *
 * All texts are original TalkSy practice material written in the style of
 * the IELTS General Training Reading test — never copied from real papers.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. The leisure-centre spring programme
// ---------------------------------------------------------------------------

export const gtLeisureProgramme: ReadingExercise = {
  slug: "ielts-rb-gt-leisure-programme",
  title: "The leisure-centre spring programme",
  variant: "gt",
  section: 1,
  subject: "centre programme (notices and adverts)",
  topic: "everyday",
  difficulty: 2,
  estimatedMinutes: 9,
  objective: "Scan a leisure centre's seasonal notices for dates, prices and the conditions attached to every offer.",
  intro: "Read the texts below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Text A — The spring timetable",
      paragraphs: [
        "The new spring timetable comes into effect on Monday 6 April. Two new classes join the programme: beginners' Pilates on Tuesday mornings at 9.30, and family badminton on Sunday afternoons between 2 pm and 4 pm. The Thursday circuit-training class has been withdrawn because of low attendance, and regulars are warmly invited to try the Friday session instead, which now takes place in the sports hall rather than the upstairs studio.",
      ],
    },
    {
      heading: "Text B — Spring membership offer",
      paragraphs: [
        "SPRING OFFER — join before 30 April and we will waive the £25 joining fee. Direct-debit membership covers unlimited swimming, the gym and every fitness class, and your first month costs half price. Students and over-65s qualify for a reduced rate on weekdays before 4 pm. Pick up a form at reception or apply online; this offer cannot be combined with any other discount, and it ends strictly on 30 April.",
      ],
    },
    {
      heading: "Text C — Easter activities for juniors",
      paragraphs: [
        "Junior activities run every day of the school holidays, from 7 to 18 April, between 8 am and 6 pm. The programme offers trampolining, crafts, cooking and a popular water-games morning; places are limited and must be booked at least two days ahead, either in person or by telephone. A sibling discount of ten per cent applies whenever two or more children from the same family attend the same day. Children should bring a packed lunch and a refillable bottle, as lunch is not provided.",
      ],
    },
    {
      heading: "Text D — Café and room hire",
      paragraphs: [
        "The centre café now opens at 7 am, an hour earlier than last season, and serves breakfast until 10.30. Rooms are available for meetings and parties on Saturday evenings; hirers must book at least three weeks in advance, and a deposit of £40 is required to hold the date. The small meeting room seats twelve people and has a screen, while the main hall holds up to eighty standing guests.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "true-false-not-given",
      label: "Questions 1–5",
      instruction:
        "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The new timetable comes into effect early in April.",
          answer: "TRUE",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "The new spring timetable comes into effect on Monday 6 April." }],
            explanation:
              "Text A dates the change precisely: the new timetable comes into effect on Monday 6 April. 'Early in April' is a fair paraphrase of the sixth of the month, so the statement agrees with the notice.",
          },
        },
        {
          text: "Circuit training has now been removed from the programme completely.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              {
                block: 0,
                paragraph: 0,
                quote: "The Thursday circuit-training class has been withdrawn because of low attendance, and regulars are warmly invited to try the Friday session instead",
              },
            ],
            explanation:
              "Only the Thursday class is withdrawn; the same sentence directs regulars to the Friday session, so circuit training survives elsewhere in the week. 'Completely' overreaches what the notice actually says.",
            trap: {
              family: "extreme-language",
              note: "'Completely' is stronger than the notice: one session is cut, while the Friday session is actively promoted.",
            },
            whyWrong: ["TRUE would require both sessions to be gone, but the notice invites members to a surviving Friday session."],
          },
        },
        {
          text: "People who join before 30 April do not have to pay the joining fee.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 1, paragraph: 0, quote: "join before 30 April and we will waive the £25 joining fee." }],
            explanation:
              "Text B's offer waives — that is, removes — the £25 joining fee for anyone joining before 30 April. 'Do not have to pay' is the plain-English paraphrase of the notice's 'we will waive'.",
          },
        },
        {
          text: "Students can use the reduced rate at any time on weekdays.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Students and over-65s qualify for a reduced rate on weekdays before 4 pm." }],
            explanation:
              "The reduced rate is bounded by a clock: weekdays before 4 pm only. The statement drops that time limit, so it contradicts the notice rather than merely adding something the notice forgot to say.",
          },
        },
        {
          text: "Over-65s must show proof of their age to receive the reduced rate.",
          answer: "NOT GIVEN",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 1, paragraph: 0, quote: "Students and over-65s qualify for a reduced rate on weekdays before 4 pm." }],
            explanation:
              "The notice names the two qualifying groups and the time limit, but says nothing about proving age. A statement can feel obvious and still be Not Given — the text, not common sense, decides what counts.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "sentence-completion",
      label: "Questions 6–8",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "6. Beginners' Pilates is held on" }, { kind: "blank", no: 6 }, { kind: "text", text: "mornings." }],
        [
          { kind: "text", text: "7. A sibling discount of ten" },
          { kind: "blank", no: 7 },
          { kind: "text", text: "is available when two or more children from one family attend on the same day." },
        ],
        [{ kind: "text", text: "8. The centre café now opens at" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 6,
          answer: "Tuesday",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "beginners' Pilates on Tuesday mornings at 9.30" }],
            explanation:
              "Text A introduces the spring additions in one list: beginners' Pilates on Tuesday mornings at 9.30, and family badminton at the weekend. The sentence keeps 'mornings' and needs the weekday printed in front of it.",
          },
        },
        {
          no: 7,
          answer: "per cent",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              {
                block: 2,
                paragraph: 0,
                quote: "A sibling discount of ten per cent applies whenever two or more children from the same family attend the same day.",
              },
            ],
            explanation:
              "Text C quantifies the family deal as ten per cent, applying whenever two or more children from one family attend on the same day. The sentence supplies the number ten and asks for the unit that follows it in the notice.",
          },
        },
        {
          no: 8,
          answer: "7 am",
          alternatives: ["7am", "07:00"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 3, paragraph: 0, quote: "The centre café now opens at 7 am, an hour earlier than last season" }],
            explanation:
              "Text D announces the new opening time of 7 am — an hour earlier than last season. The completion asks for the figure with its unit, copied exactly as printed on the notice.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "timetable", partOfSpeech: "noun", definition: "a list showing when classes or events happen; the spring timetable comes into effect on 6 April." },
    { word: "waive", partOfSpeech: "verb", definition: "to remove a charge or requirement officially; the centre will waive the £25 joining fee." },
    { word: "attendance", partOfSpeech: "noun", definition: "the number of people who turn up; the Thursday class ended because of low attendance." },
    { word: "sibling", partOfSpeech: "noun", definition: "a brother or sister; a sibling discount applies within one family." },
    { word: "deposit", partOfSpeech: "noun", definition: "a sum paid in advance to hold a booking; room hire requires a £40 deposit." },
  ],
  passageNote:
    "A programme noticeboard mixes permanent rules with seasonal offers. The dates carry most answers — and the exceptions ('instead', 'before 4 pm') carry the marks.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. The pharmacy noticeboard
// ---------------------------------------------------------------------------

export const gtPharmacy: ReadingExercise = {
  slug: "ielts-rb-gt-pharmacy",
  title: "The pharmacy noticeboard",
  variant: "gt",
  section: 1,
  subject: "health notices",
  topic: "health",
  difficulty: 1,
  estimatedMinutes: 8,
  objective: "Pick out rules, waiting times and free-service conditions from a wall of health notices.",
  intro: "Read the texts below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Text A — Repeat prescriptions",
      paragraphs: [
        "Repeat prescriptions take two full working days to prepare, so please order by Thursday if you want to collect them on Saturday. Requests can be handed in at the counter, posted through the letterbox or sent from the surgery website; we no longer take orders over the telephone. If you run out of a regular medicine before your collection date, the pharmacist may make an emergency supply of up to five days after a short consultation.",
      ],
    },
    {
      heading: "Text B — Flu vaccinations and travel advice",
      paragraphs: [
        "Flu vaccinations are offered every October and November without an appointment, on weekday mornings from 9 am to 12 noon. The jab is free for anyone over 65, for pregnant women and for people with certain long-term conditions; everyone else pays £9. We also give travel health advice — book a twenty-minute appointment at least six weeks before departure and bring a list of the countries you intend to visit, plus any tablets you already take.",
      ],
    },
    {
      heading: "Text C — Returning old medicines",
      paragraphs: [
        "Please do not put old or unwanted medicines in the household bin or down the sink. Bring them back to the pharmacy in their original boxes and we will dispose of them safely. This includes out-of-date prescriptions, medicines that were prescribed for somebody else, and used inhalers. Nothing that is returned is ever resold or passed on; everything is collected once a week for safe destruction.",
      ],
    },
    {
      heading: "Text D — Opening hours and free advice",
      paragraphs: [
        "We are open Monday to Friday from 8.30 am to 6.30 pm, on Saturday from 9 am to 1 pm, and we are closed all day Sunday. The pharmacist can give private advice about minor illnesses whenever we are open — simply ask at the counter. Prescriptions are free of charge for children under 16 and for anyone aged 60 or over.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "true-false-not-given",
      label: "Questions 1–5",
      instruction:
        "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The pharmacy still accepts repeat-prescription orders over the telephone.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "we no longer take orders over the telephone" }],
            explanation:
              "Text A lists three accepted channels — counter, letterbox and surgery website — and explicitly retires the telephone. The word 'telephone' does appear, but inside the sentence that cancels it.",
            trap: { family: "mention-lure", note: "The telephone is mentioned — in the very clause that stops it being used." },
            whyWrong: ["TRUE: the notice's own words are 'no longer take orders over the telephone'."],
          },
        },
        {
          text: "In an emergency, the pharmacist can provide up to five days of a medicine.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [
              { block: 0, paragraph: 0, quote: "the pharmacist may make an emergency supply of up to five days after a short consultation" },
            ],
            explanation:
              "Text A sets the emergency limit at five days, granted after a short consultation. 'Provide up to five days of a medicine' is a direct paraphrase of 'make an emergency supply of up to five days'.",
          },
        },
        {
          text: "Pregnant women do not have to pay for the flu jab.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [
              { block: 1, paragraph: 0, quote: "The jab is free for anyone over 65, for pregnant women and for people with certain long-term conditions" },
            ],
            explanation:
              "Text B lists pregnant women among the groups for whom the jab is free. 'Do not have to pay' restates 'free', the notice's own word, so the statement clearly agrees.",
          },
        },
        {
          text: "Travel health appointments should be made at least six days before departure.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "vocabulary"],
            evidence: [{ block: 1, paragraph: 0, quote: "book a twenty-minute appointment at least six weeks before departure" }],
            explanation:
              "The notice says six weeks, not six days. Both the statement and the notice contain 'six', which is exactly why the unit — weeks versus days — is the small detail that decides the answer.",
            trap: { family: "mention-lure", note: "The number six is genuine; the unit has been swapped from weeks to days." },
            whyWrong: ["TRUE would need the notice to print six days; it prints six weeks."],
          },
        },
        {
          text: "Returned medicines are destroyed on the day they are collected.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 2, paragraph: 0, quote: "everything is collected once a week for safe destruction" }],
            explanation:
              "The notice fixes the collection rhythm — once a week — but never says when destruction happens relative to collection. Timing that the text omits cannot be judged either way, however reasonable the guess feels.",
            trap: { family: "boundary", note: "'Once a week' tempts a FALSE; the missing fact is the timing of destruction, which the notice never gives." },
            whyWrong: ["FALSE: weekly collection is real, but the day of destruction is simply not stated — silence is Not Given."],
          },
        },
      ],
    },
    {
      id: "q2",
      type: "matching-information",
      label: "Questions 6–8",
      instruction: "The noticeboard has four texts, A–D. In which text is the following information given? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "what to do with medicines that are no longer needed",
          correct: 2,
          meta: {
            skills: ["skimming", "scanning"],
            evidence: [{ block: 2, paragraph: 0, quote: "Bring them back to the pharmacy in their original boxes and we will dispose of them safely." }],
            explanation:
              "Text C is written around unwanted medicines: return them in their original boxes for safe disposal. The item's 'no longer needed' paraphrases the notice's 'old or unwanted'.",
          },
        },
        {
          text: "the pharmacy's opening hours at the weekend",
          correct: 3,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 3, paragraph: 0, quote: "on Saturday from 9 am to 1 pm, and we are closed all day Sunday" }],
            explanation:
              "Only Text D carries the clock: Saturday mornings until 1 pm, and closed all day Sunday. Weekend hours are a classic locate-the-text target — exactly one notice holds them.",
          },
        },
        {
          text: "how long a travel health appointment lasts",
          correct: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "book a twenty-minute appointment at least six weeks before departure" }],
            explanation:
              "Text B fixes both facts about the travel appointment: it lasts twenty minutes, and it should be booked six weeks ahead. The item asks only for the duration, not the booking window.",
          },
        },
      ],
      options: ["A", "B", "C", "D"],
    },
  ],
  glossary: [
    { word: "prescription", partOfSpeech: "noun", definition: "an order for medicine written by a doctor; repeat prescriptions take two working days." },
    { word: "pharmacist", partOfSpeech: "noun", definition: "a trained professional who prepares and sells medicines; the pharmacist can give emergency supplies." },
    { word: "consultation", partOfSpeech: "noun", definition: "a short meeting with a medical professional to discuss a problem; an emergency supply follows one." },
    { word: "dispose", partOfSpeech: "verb", definition: "to get rid of something; the pharmacy disposes of returned medicines safely." },
    { word: "inhaler", partOfSpeech: "noun", definition: "a small device that sends medicine into the lungs; used inhalers can be returned." },
  ],
  passageNote:
    "Pharmacy notices are mostly conditions: who pays, when to order, and what happens to leftovers. The qualifying phrases — 'for anyone over 65', 'once a week' — decide every answer.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. A secondary school's noticeboard
// ---------------------------------------------------------------------------

export const gtSchoolNotices: ReadingExercise = {
  slug: "ielts-rb-gt-school-notices",
  title: "A secondary school's noticeboard",
  variant: "gt",
  section: 1,
  subject: "school notices",
  topic: "education",
  difficulty: 2,
  estimatedMinutes: 9,
  objective: "Match each question to the right notice on a busy school noticeboard, then lift exact details from it.",
  intro: "Read the texts below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Text A — Parents' evening booking",
      paragraphs: [
        "Parents' evening is on Thursday 14 May between 4 pm and 7 pm. Each appointment lasts five minutes and must be booked in advance through the parents' portal, which opens at 8 am on Monday 5 May and closes when every slot is gone. If you cannot obtain an appointment with a particular teacher, email the school office and we will arrange a telephone call later that week instead.",
      ],
    },
    {
      heading: "Text B — Year 8 history trip to York",
      paragraphs: [
        "The Year 8 history trip to York takes place on Wednesday 21 May. The coach leaves promptly at 7.45 am from the school gate and should be back by 6 pm. Students must bring a packed lunch, a waterproof coat and comfortable shoes; spending money is optional but is limited to £10. Consent forms must reach form tutors by Friday 9 May — a pupil without a form cannot travel.",
      ],
    },
    {
      heading: "Text C — Year 11 mock examinations",
      paragraphs: [
        "Year 11 mock examinations begin on Monday 2 June in the sports hall. Candidates must arrive fifteen minutes before the start and bring black pens in a transparent pencil case; water bottles are permitted once the label has been removed. Nobody who arrives after an examination has started is given extra time at the end. Lunchtime revision sessions start in Room 12 next week and run every day until the mocks.",
      ],
    },
    {
      heading: "Text D — Lost property",
      paragraphs: [
        "The lost property cupboard in the main corridor is emptied at the end of every half-term. At present it holds thirty-one jumpers, two violins and an extraordinary number of single trainers. Named items are returned to their owners through form tutors, while everything unnamed is washed and sold at the summer fair to raise money for new library books. Please check the cupboard before buying replacements.",
      ],
    },
    {
      heading: "Text E — Canteen changes",
      paragraphs: [
        "From next week the canteen will offer a hot vegetarian dish every day, chosen from a three-week menu that changes each term. Pupils with allergies should read the ingredient list at the till before ordering, and the kitchen can adapt most recipes on request. From September the school will switch to a cashless payment system: parents top up accounts online, and pupils pay with a card at the till.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-information",
      label: "Questions 1–5",
      instruction: "The noticeboard has five texts, A–E. In which text is the following information given? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "an evening event for which appointments must be booked in advance",
          correct: 0,
          meta: {
            skills: ["skimming", "scanning"],
            evidence: [
              { block: 0, paragraph: 0, quote: "Each appointment lasts five minutes and must be booked in advance through the parents' portal" },
            ],
            explanation:
              "Text A organises parents' evening entirely around advance booking through the parents' portal. The item's 'evening event' points to parents' evening, and the booking rule confirms the match.",
          },
        },
        {
          text: "a limit on the amount of money pupils may bring",
          correct: 1,
          lure: 4,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "spending money is optional but is limited to £10" }],
            explanation:
              "Text B caps trip spending money at £10. Text E talks plenty about money — payments, cards, accounts — but its subject is how food is paid for, not how much pupils may carry on a trip.",
            trap: { family: "mention-lure", note: "The canteen notice brims with money words; the £10 cap belongs to the trip notice." },
            whyWrong: ["E: the canteen text explains a payment system, not a limit on what pupils may bring."],
          },
        },
        {
          text: "a rule about pupils who arrive once an exam has started",
          correct: 2,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 2, paragraph: 0, quote: "Nobody who arrives after an examination has started is given extra time at the end." }],
            explanation:
              "Text C's punctuality rule targets late arrivals: no extra time at the end. Matching a rule about latecomers to the examinations notice is a straightforward locate task on this board.",
          },
        },
        {
          text: "what happens to lost clothing that is never claimed",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [
              { block: 3, paragraph: 0, quote: "everything unnamed is washed and sold at the summer fair to raise money for new library books" },
            ],
            explanation:
              "Text D sorts lost property into two fates: named items travel back through form tutors, and unnamed items are washed and sold at the summer fair. 'Never claimed' paraphrases 'unnamed'.",
          },
        },
        {
          text: "a change in the way pupils pay for their food",
          correct: 4,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              {
                block: 4,
                paragraph: 0,
                quote: "the school will switch to a cashless payment system: parents top up accounts online, and pupils pay with a card at the till",
              },
            ],
            explanation:
              "Text E announces September's cashless system, with online top-ups and card payment at the till. The item's 'the way pupils pay' is a clean paraphrase of that switch.",
          },
        },
      ],
      options: ["A", "B", "C", "D", "E"],
    },
    {
      id: "q2",
      type: "sentence-completion",
      label: "Questions 6–8",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "6. The York trip coach leaves from the" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "7. Consent forms must be handed to" }, { kind: "blank", no: 7 }, { kind: "text", text: "by Friday 9 May." }],
        [{ kind: "text", text: "8. Pupils with allergies should check the" }, { kind: "blank", no: 8 }, { kind: "text", text: "at the till before ordering." }],
      ],
      blanks: [
        {
          no: 6,
          answer: "school gate",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "The coach leaves promptly at 7.45 am from the school gate" }],
            explanation:
              "Text B fixes the departure in a single line: 7.45 am, from the school gate. The completion asks for the boarding place, so the time sitting beside it is the detail that must not be copied.",
          },
        },
        {
          no: 7,
          answer: "form tutors",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Consent forms must reach form tutors by Friday 9 May" }],
            explanation:
              "The deadline and its destination share one sentence: consent forms must reach form tutors by Friday 9 May. The sentence keeps the date and asks for the people who receive the forms.",
          },
        },
        {
          no: 8,
          answer: "ingredient list",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 4, paragraph: 0, quote: "Pupils with allergies should read the ingredient list at the till before ordering" }],
            explanation:
              "Text E sends pupils with allergies to the ingredient list at the till before ordering. The sentence changes 'read' to 'check', but the two missing words lift straight from the notice.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "portal", partOfSpeech: "noun", definition: "an online entrance reserved for a particular group; parents book appointments through the parents' portal." },
    { word: "consent", partOfSpeech: "noun", definition: "permission, usually written; a signed consent form allows a pupil to join the trip." },
    { word: "tutor", partOfSpeech: "noun", definition: "a teacher responsible for a group of pupils; consent forms go to form tutors." },
    { word: "mock", partOfSpeech: "adjective", definition: "(of an exam) for practice rather than the real qualification; Year 11 sit mock examinations in June." },
    { word: "cashless", partOfSpeech: "adjective", definition: "operating without physical money; the canteen moves to a cashless payment system." },
  ],
  passageNote:
    "School notices are written for scanning: one date, one deadline, one rule each. Match the question to its notice first, then reread that notice closely — the two-step rhythm of Section 1.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Rail replacement bus notice
// ---------------------------------------------------------------------------

export const gtRailReplacement: ReadingExercise = {
  slug: "ielts-rb-gt-rail-replacement",
  title: "Rail replacement bus notice",
  variant: "gt",
  section: 1,
  subject: "travel notice",
  topic: "everyday",
  difficulty: 2,
  estimatedMinutes: 9,
  objective: "Follow a rail replacement notice: closure dates, boarding points, connections and the rules for passengers.",
  intro: "Read the texts below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Text A — Line closure and replacement buses",
      paragraphs: [
        "Because of major engineering work, the railway line between Haleford and Kingsmere is closed on Saturdays and Sundays from 8 February until 1 March; trains elsewhere on the network run as normal. Rail replacement buses run in both directions between the two stations, calling at every intermediate stop. Buses leave Haleford from the forecourt in front of the station entrance, and leave Kingsmere from the bus station directly opposite. Through rail tickets are accepted on the replacement buses, and passengers pay no extra fare for the journey.",
      ],
    },
    {
      heading: "Text B — Journey times and connections",
      paragraphs: [
        "A replacement bus between the two termini takes roughly thirty-five minutes longer than the train it replaces. Passengers for Ashcombe must change at Netherby, where the connecting bus waits on the opposite side of the road. The last through bus of the day leaves Haleford at 10.15 pm; after that time, travellers to Kingsmere change at Netherby onto a later service. Buses run every twenty minutes on Saturday mornings and roughly every thirty minutes at other times. Please allow extra time for your journey and keep your ticket with you throughout.",
      ],
    },
    {
      heading: "Text C — Accessibility and help",
      paragraphs: [
        "A reserved wheelchair space is available on every bus, but it must be booked at least a day ahead through the passenger assist line. Only folding bicycles can be carried, and then only if there is room in the luggage compartment; full-size bikes are turned away without exception. Prams travel at the driver's discretion. Staff wearing orange jackets stand at Haleford to direct passengers to the correct stop, which is marked with a yellow flag throughout the works.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "true-false-not-given",
      label: "Questions 1–4",
      instruction:
        "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The replacement buses call at every station between the two termini.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "Rail replacement buses run in both directions between the two stations, calling at every intermediate stop." }],
            explanation:
              "Text A promises that the buses call at every intermediate stop — every station between Haleford and Kingsmere. The statement restates that promise, borrowing 'termini' from Text B's wording for the same two ends.",
          },
        },
        {
          text: "Holders of through rail tickets must pay extra to travel on the replacement buses.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [
              {
                block: 0,
                paragraph: 0,
                quote: "Through rail tickets are accepted on the replacement buses, and passengers pay no extra fare for the journey.",
              },
            ],
            explanation:
              "Text A states the opposite: through tickets are accepted and no extra fare is charged. 'Pay extra' is therefore contradicted, not merely unconfirmed — 'no extra fare' settles it as FALSE.",
          },
        },
        {
          text: "Passengers for Ashcombe should stay on the bus as far as Kingsmere.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              {
                block: 1,
                paragraph: 0,
                quote: "Passengers for Ashcombe must change at Netherby, where the connecting bus waits on the opposite side of the road.",
              },
            ],
            explanation:
              "Ashcombe travellers leave the route at Netherby, part-way along the line, and change onto a connecting bus. Kingsmere is the end of the line, so staying aboard would carry them straight past their junction.",
            trap: {
              family: "order",
              note: "The places are all real; the statement moves the change-over to the end of the journey instead of mid-route.",
            },
            whyWrong: ["TRUE would suit a through service; the notice orders Ashcombe passengers off the bus at Netherby."],
          },
        },
        {
          text: "There is a charge for booking a wheelchair space.",
          answer: "NOT GIVEN",
          lure: "TRUE",
          meta: {
            skills: ["inference"],
            evidence: [
              {
                block: 2,
                paragraph: 0,
                quote: "A reserved wheelchair space is available on every bus, but it must be booked at least a day ahead through the passenger assist line.",
              },
            ],
            explanation:
              "Text C explains how to reserve the space — a day ahead, through the passenger assist line — but never mentions money. Booking rules and charges are separate facts; only the first is actually in the notice.",
            trap: { family: "boundary", note: "A booking requirement feels as if it should cost something; the notice's silence keeps the answer Not Given." },
            whyWrong: ["TRUE: nothing in the text attaches a fee to the space — the booking method is given, the cost is not."],
          },
        },
      ],
    },
    {
      id: "q2",
      type: "note-completion",
      label: "Questions 5–8",
      instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "Rail replacement service — weekend notes" }],
        [{ kind: "text", text: "5. Line closed between Haleford and" }, { kind: "blank", no: 5 }, { kind: "text", text: "." }],
        [
          { kind: "text", text: "6. Buses from Haleford leave from the" },
          { kind: "blank", no: 6 },
          { kind: "text", text: "in front of the station entrance." },
        ],
        [{ kind: "text", text: "7. The bus takes roughly" }, { kind: "blank", no: 7 }, { kind: "text", text: "minutes longer than the train." }],
        [{ kind: "text", text: "8. Cyclists may carry only" }, { kind: "blank", no: 8 }, { kind: "text", text: "bicycles." }],
      ],
      blanks: [
        {
          no: 5,
          answer: "Kingsmere",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "the railway line between Haleford and Kingsmere is closed on Saturdays and Sundays" }],
            explanation:
              "The closure runs between two named termini, and the notes print one end of the pair. The missing end, Kingsmere, stands in the opening sentence of Text A beside the closure dates.",
          },
        },
        {
          no: 6,
          answer: "forecourt",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Buses leave Haleford from the forecourt in front of the station entrance" }],
            explanation:
              "Haleford's boarding point is the forecourt in front of the station entrance. The row already prints 'in front of the station entrance', so the missing word is the specific noun the notice gives that place.",
          },
        },
        {
          no: 7,
          answer: "thirty-five",
          alternatives: ["35"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "takes roughly thirty-five minutes longer than the train it replaces" }],
            explanation:
              "Text B measures the delay of the replacement: roughly thirty-five minutes longer than the train. The notes keep 'roughly' and 'minutes longer', so the answer is the figure itself, written as words.",
          },
        },
        {
          no: 8,
          answer: "folding",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 2, paragraph: 0, quote: "Only folding bicycles can be carried" }],
            explanation:
              "The bicycle rule admits one kind only — folding bicycles — and even then only if the luggage compartment has room. The notes keep 'bicycles' and need the restricting adjective in front of it.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "engineering", partOfSpeech: "noun", definition: "the building and repair of tracks and structures; the line closes for major engineering work." },
    { word: "forecourt", partOfSpeech: "noun", definition: "the open area in front of a station entrance; Haleford's buses leave from the forecourt." },
    { word: "termini", partOfSpeech: "noun (plural)", definition: "the end stations of a route; the bus runs roughly thirty-five minutes slower between the two termini." },
    { word: "intermediate", partOfSpeech: "adjective", definition: "situated between two others; the buses call at every intermediate stop." },
    { word: "discretion", partOfSpeech: "noun", definition: "the freedom to decide case by case; prams travel at the driver's discretion." },
  ],
  passageNote:
    "Travel notices run on exceptions: what changes, when, and for whom. Every answer here lives in a qualifying phrase — 'after that time', 'at least a day ahead' — never in the headline.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Library refurbishment notices
// ---------------------------------------------------------------------------

export const gtLibraryClosure: ReadingExercise = {
  slug: "ielts-rb-gt-library-closure",
  title: "Library refurbishment notices",
  variant: "gt",
  section: 1,
  subject: "library notices",
  topic: "culture",
  difficulty: 3,
  estimatedMinutes: 10,
  objective: "Handle a denser set of public notices — closure logistics, future plans and answers for borrowers.",
  intro: "Read the texts below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Text A — Closure arrangements",
      paragraphs: [
        "Marlow Central Library closes for refurbishment on Saturday 4 April and is expected to reopen in the spring of next year. While the work is under way, a temporary library will operate from the former tourist information centre on Castle Street, open Tuesday to Saturday. The whole collection cannot be transferred: roughly a third of the books will be available at the temporary site, and the remainder will stay in secure storage elsewhere. Items may be reserved online and collected from Castle Street within two working days. No overdue fines will be charged on any item while the closure lasts.",
      ],
    },
    {
      heading: "Text B — What the refurbishment will bring",
      paragraphs: [
        "The refurbished building will gain a dedicated local-history room, a quiet study floor with individual desks and, for the first time, a lift serving every level. The children's area will move down to the ground floor, beside a story corner and a garden reading room looking onto the square. Opening hours will extend to seven days a week, and a café run by a local social enterprise will replace the old vending machines on the top floor. The architects' plans are on display at the Castle Street counter, and written comments may be left in the box there until the end of May.",
      ],
    },
    {
      heading: "Text C — Borrowers' questions answered",
      paragraphs: [
        "Your current loans: due dates have been extended automatically until the reopening, so nothing needs to go back before the building shuts. Items may also be returned through the letterbox at the Castle Street entrance at any hour. Library memberships will not expire during the closure, and existing cards will work as normal at the temporary counter. Regular events, including the reading group and the job club, continue online; ask staff for the current programme. A home delivery service is being piloted for readers who cannot easily travel — telephone the Castle Street number to register an interest.",
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
        [{ kind: "text", text: "1. During the works, a temporary library will operate on" }, { kind: "blank", no: 1 }, { kind: "text", text: "Street." }],
        [
          { kind: "text", text: "2. Roughly a third of the collection will be" },
          { kind: "blank", no: 2 },
          { kind: "text", text: "at the temporary site." },
        ],
        [
          { kind: "text", text: "3. The old" },
          { kind: "blank", no: 3 },
          { kind: "text", text: "machines on the top floor will be replaced by a café." },
        ],
        [
          { kind: "text", text: "4. In the refurbished building, the children's area will move down to the" },
          { kind: "blank", no: 4 },
          { kind: "text", text: "floor." },
        ],
      ],
      blanks: [
        {
          no: 1,
          answer: "Castle",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              { block: 0, paragraph: 0, quote: "a temporary library will operate from the former tourist information centre on Castle Street" },
            ],
            explanation:
              "The temporary service moves into the former tourist information centre on Castle Street. The sentence keeps 'Street' and asks for the name, which then recurs in every notice that follows on this board.",
          },
        },
        {
          no: 2,
          answer: "available",
          meta: {
            skills: ["detail", "vocabulary"],
            evidence: [{ block: 0, paragraph: 0, quote: "roughly a third of the books will be available at the temporary site" }],
            explanation:
              "Only a third of the books transfer; the notice's own word for what that third will be at Castle Street is 'available', with the remainder going into secure storage elsewhere.",
          },
        },
        {
          no: 3,
          answer: "vending",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              { block: 1, paragraph: 0, quote: "a café run by a local social enterprise will replace the old vending machines on the top floor" },
            ],
            explanation:
              "Text B trades the top-floor vending machines for a café run by a local social enterprise. The sentence keeps 'machines' and needs the adjective that names what kind of machines they were.",
          },
        },
        {
          no: 4,
          answer: "ground",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "The children's area will move down to the ground floor" }],
            explanation:
              "The children's area moves down — to the ground floor, beside a story corner and a garden reading room. Several floors are named in the plans, but only one of them is the children's destination.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 5–8",
      instruction:
        "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Borrowers must return everything they have on loan before 4 April.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [
              {
                block: 2,
                paragraph: 0,
                quote: "due dates have been extended automatically until the reopening, so nothing needs to go back before the building shuts",
              },
            ],
            explanation:
              "Text C does the opposite of demanding returns: due dates are extended automatically until the reopening, and nothing needs to go back before the building shuts its doors.",
          },
        },
        {
          text: "Overdue fines will not be charged during the closure.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "No overdue fines will be charged on any item while the closure lasts." }],
            explanation:
              "Text A suspends fines for the whole closure period and for every item. 'During the closure' paraphrases 'while the closure lasts', so the time frames match exactly and the statement agrees.",
          },
        },
        {
          text: "The reading group and the job club will stop running while the library is closed.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 2, paragraph: 0, quote: "Regular events, including the reading group and the job club, continue online" }],
            explanation:
              "Both groups are named in Text C — and the same sentence sends them online rather than stopping them. The venue changes; the events themselves continue through the closure.",
            trap: { family: "mention-lure", note: "The two club names are the lure; the word that scores is 'continue'." },
            whyWrong: ["TRUE: 'continue online' contradicts 'stop running' — cancellation is exactly what the notice avoids."],
          },
        },
        {
          text: "The organisation running the new café was chosen by public vote.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference"],
            evidence: [
              { block: 1, paragraph: 0, quote: "a café run by a local social enterprise will replace the old vending machines on the top floor" },
            ],
            explanation:
              "The notice identifies the café's operator only as a local social enterprise. How that operator was selected — vote, tender or anything else — lies outside the text, so the claim cannot be judged.",
            trap: {
              family: "boundary",
              note: "The plans are on display and comments invited; readers mistake that consultation for a vote on the café.",
            },
            whyWrong: ["FALSE: the comment box invites views on the plans, not a vote on the café operator — neither confirms nor denies the statement."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "refurbishment", partOfSpeech: "noun", definition: "the work of improving and redecorating a building; the library closes for a year-long refurbishment." },
    { word: "temporary", partOfSpeech: "adjective", definition: "lasting only for a limited period; a temporary library operates from Castle Street." },
    { word: "remainder", partOfSpeech: "noun", definition: "the part that is left over; the remainder of the collection stays in storage." },
    { word: "overdue", partOfSpeech: "adjective", definition: "not returned by the required date; no overdue fines are charged during the closure." },
    { word: "pilot", partOfSpeech: "verb", definition: "to test a service on a small scale before widening it; home delivery is being piloted." },
  ],
  passageNote:
    "Refurbishment notices juggle three time frames — before, during and after the works. Pin every statement to its time frame before judging it; the traps live between the frames.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. The café menu and specials
// ---------------------------------------------------------------------------

export const gtCafeMenu: ReadingExercise = {
  slug: "ielts-rb-gt-cafe-menu",
  title: "The café menu and specials",
  variant: "gt",
  section: 1,
  subject: "café texts",
  topic: "everyday",
  difficulty: 1,
  estimatedMinutes: 8,
  objective: "Read a café's menu board and offers — days, deals, diets and booking rules — for exact details.",
  intro: "Read the texts below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Text A — Our kitchen",
      paragraphs: [
        "Everything on our menu is made fresh in the kitchen each morning. Soups change daily and always come with thick-cut bread; today they are lentil and tomato. Every main dish is served with a side salad or chips, and the full English breakfast is available until midday. Our home-made cakes — the lemon drizzle is the favourite — stand by the till, which makes them very hard to resist.",
      ],
    },
    {
      heading: "Text B — This week's specials",
      paragraphs: [
        "Tuesday is pie night: choose any two pies with mash and peas for £9. Wednesday is student day, with twenty per cent off everything on presentation of a valid student card. On Friday and Saturday evenings we stay open until 10 pm for pizza and live music. Sunday brings the classic roast, with a vegetarian nut roast as an alternative — booking is recommended, as Sunday tables fill up quickly.",
      ],
    },
    {
      heading: "Text C — Loyalty card",
      paragraphs: [
        "Ask for a loyalty card and your sixth hot drink is free — the card is stamped at the till each time you buy. It also gives ten per cent off takeaway food between 3 pm and 5 pm. One card per person: stamps cannot be transferred onto a friend's card, and we cannot replace a lost card, so keep it somewhere safe.",
      ],
    },
    {
      heading: "Text D — Allergies and special diets",
      paragraphs: [
        "Most dishes can be prepared without nuts, dairy or gluten — just tell a member of staff when you order. A green folder at the counter lists the allergens in every dish we serve, and the kitchen will swap an ingredient wherever it can. Vegan dishes are marked with a V on the main menu.",
      ],
    },
    {
      heading: "Text E — Evening party bookings",
      paragraphs: [
        "The whole café can be booked for birthdays and other celebrations on any weekday evening from 6 pm. We serve a buffet for groups of twelve people or more at £11 per head, and you are welcome to bring your own birthday cake free of charge. A deposit of £20 secures the date. Telephone us during opening hours, or leave a message and a member of staff will call you back.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-information",
      label: "Questions 1–5",
      instruction: "The café has five short texts, A–E. In which text is the following information given? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "a discount that is limited to certain hours of the day",
          correct: 2,
          lure: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 2, paragraph: 0, quote: "It also gives ten per cent off takeaway food between 3 pm and 5 pm." }],
            explanation:
              "Two discounts live on this board. The loyalty card's is bounded by the clock — between 3 pm and 5 pm — while student day is a whole day, not hours of one, so only the card fits the item.",
            trap: { family: "mention-lure", note: "Student day shouts the bigger number, twenty per cent; the question asks about hours, and only the loyalty offer has them." },
            whyWrong: ["B: student day's discount lasts all Wednesday — it is limited by day, not by hours."],
          },
        },
        {
          text: "where to find exactly what is in each dish",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 3, paragraph: 0, quote: "A green folder at the counter lists the allergens in every dish we serve" }],
            explanation:
              "Text D points to the green folder at the counter, which lists the allergens in every dish served. 'Exactly what is in each dish' is a plain paraphrase of that allergen list.",
          },
        },
        {
          text: "the smallest number of people a party booking covers",
          correct: 4,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 4, paragraph: 0, quote: "We serve a buffet for groups of twelve people or more at £11 per head" }],
            explanation:
              "Text E sets the party floor at twelve people or more. The item asks for a minimum, so the price per head printed in the same sentence is the designed distractor rather than the answer.",
          },
        },
        {
          text: "food that is displayed beside the place where you pay",
          correct: 0,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "Our home-made cakes — the lemon drizzle is the favourite — stand by the till" }],
            explanation:
              "Text A places the home-made cakes by the till — beside the payment point. The paraphrase 'the place where you pay' replaces 'the till' without shifting the location.",
          },
        },
        {
          text: "evenings when music is played",
          correct: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "On Friday and Saturday evenings we stay open until 10 pm for pizza and live music." }],
            explanation:
              "Text B pairs late opening with live music on Friday and Saturday evenings. The item asks for the evenings themselves, not the closing time printed in the very same sentence.",
          },
        },
      ],
      options: ["A", "B", "C", "D", "E"],
    },
    {
      id: "q2",
      type: "sentence-completion",
      label: "Questions 6–8",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "6. The full English breakfast is available until" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
        [
          { kind: "text", text: "7. On student day, students receive a discount of" },
          { kind: "blank", no: 7 },
          { kind: "text", text: "per cent on everything." },
        ],
        [{ kind: "text", text: "8. Loyalty card holders receive their" }, { kind: "blank", no: 8 }, { kind: "text", text: "hot drink free of charge." }],
      ],
      blanks: [
        {
          no: 6,
          answer: "midday",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "the full English breakfast is available until midday" }],
            explanation:
              "Text A sets the breakfast cut-off at midday, after which the kitchen moves on to the daily menu. The sentence keeps the notice's own phrase 'available until' and needs the time word that follows it.",
          },
        },
        {
          no: 7,
          answer: "twenty",
          alternatives: ["20"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [
              {
                block: 1,
                paragraph: 0,
                quote: "Wednesday is student day, with twenty per cent off everything on presentation of a valid student card",
              },
            ],
            explanation:
              "Student day takes twenty per cent off everything with a valid student card. The board carries a second percentage — the loyalty card's ten — but that one belongs to takeaway food in the late afternoon.",
            trap: { family: "mention-lure", note: "Two percentages are printed; only the student-day one goes with 'everything'." },
            whyWrong: ["'Ten' is the loyalty card's takeaway discount between 3 pm and 5 pm — a different offer on a different text."],
          },
        },
        {
          no: 8,
          answer: "sixth",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 2, paragraph: 0, quote: "your sixth hot drink is free" }],
            explanation:
              "The loyalty card pays out on the sixth hot drink, stamped at the till each time you buy. The ordinal is printed once, in the sentence that also explains how the card is stamped.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "buffet", partOfSpeech: "noun", definition: "a meal laid out for guests to serve themselves; party bookings include a buffet at £11 per head." },
    { word: "allergen", partOfSpeech: "noun", definition: "a substance that can cause an allergic reaction; the green folder lists the allergens in every dish." },
    { word: "vegan", partOfSpeech: "adjective", definition: "containing no animal products at all; vegan dishes are marked with a V." },
    { word: "takeaway", partOfSpeech: "noun", definition: "food sold to be eaten elsewhere; the loyalty card discounts takeaway food in the late afternoon." },
    { word: "alternative", partOfSpeech: "noun", definition: "another offered choice; a vegetarian nut roast stands as the alternative on Sundays." },
  ],
  passageNote:
    "Café texts sell while they inform, so every deal carries a condition: a day, a time window, a card. The conditions, not the offers, answer the questions.",
  source: READING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// The batch
// ---------------------------------------------------------------------------

export const gtDExercises: ReadingExercise[] = [
  gtLeisureProgramme, // section 1, centre programme (notices and adverts) — everyday, d2
  gtPharmacy, // section 1, health notices — health, d1
  gtSchoolNotices, // section 1, school notices — education, d2
  gtRailReplacement, // section 1, travel notice — everyday, d2
  gtLibraryClosure, // section 1, library notices — culture, d3
  gtCafeMenu, // section 1, café texts — everyday, d1
];
