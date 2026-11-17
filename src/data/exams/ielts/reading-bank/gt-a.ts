/**
 * General Training text library A (PROMPT 45, Parts C and D).
 *
 * Original practical-reading items in the official GT section bands:
 *
 *   ielts-rb-gt-notices  — Section 1, notices      (foundation, d2)
 *   ielts-rb-gt-ads      — Section 1, advertisements (foundation, d1)
 *   ielts-rb-gt-bramble  — Section 1, visitor information leaflet (foundation, d2)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtNotices: ReadingExercise = {
  slug: "ielts-rb-gt-notices",
  title: "Ashford Leisure Centre — the noticeboard",
  variant: "gt",
  section: 1,
  subject: "Notices",
  difficulty: 2,
  estimatedMinutes: 9,
  objective: "Find the facts that notices carry — dates, charges, conditions and exceptions — without reading every word.",
  intro: "Read the notices below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Notice 1 — Pool maintenance closure",
      paragraphs: [
        "The main pool will be closed for essential maintenance from Monday 3 March to Sunday 9 March inclusive. Early-morning lane swimming moves to the training pool at Ferndale, a ten-minute walk away — your Ashford pass is accepted there at no extra charge. We expect to reopen at 6.30 am on Monday 10 March. Aqua classes continue as normal in the small pool throughout the works. We apologise for the dust and noise while the work is under way.",
      ],
    },
    {
      heading: "Notice 2 — Aqua classes: timetable change",
      paragraphs: [
        "From 10 March, Tuesday evening Aqua Fit moves from 7.00 pm to 6.15 pm, and Thursday's class moves to the small pool. Booking is now online only: the paper list at reception was taking more time than the class itself. Members may book up to seven days ahead; non-members up to three days ahead. Your first class is free — just bring a towel.",
      ],
    },
    {
      heading: "Notice 3 — Lost property",
      paragraphs: [
        "Items found in the building are kept behind reception for thirty days. After that, unclaimed items go to the charity shop next door — including, we regret to say, the twenty-three umbrellas currently in the cupboard. Ask at the desk with a description of your item; we do not post items out, but we can hold anything you have described for forty-eight hours. Valuables such as phones, wallets and keys are kept in the safe and released only with proof of ownership.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "true-false-not-given",
      label: "Questions 1–4",
      instruction: "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The main pool reopens on a Monday.",
          answer: "TRUE",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "We expect to reopen at 6.30 am on Monday 10 March." }],
            explanation: "Notice 1 gives the reopening day explicitly: Monday 10 March. Reading the date carefully — not assuming 'a week later means Sunday' — is exactly the discipline Section 1 rewards.",
          },
        },
        {
          text: "Ashford members must pay an extra charge to swim at Ferndale.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "your Ashford pass is accepted there at no extra charge" }],
            explanation: "The notice states the opposite of the statement: the Ashford pass is accepted at Ferndale at no extra charge. 'No extra' contradicts 'must pay an extra charge'.",
          },
        },
        {
          text: "Aqua classes are cancelled during the maintenance week.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "Aqua classes continue as normal in the small pool throughout the works." }],
            explanation: "The closure notice explicitly saves the classes: they continue as normal in the small pool. The headline 'closure' invites the wrong inference; the small print corrects it.",
            trap: { family: "mention-lure", note: "The big word is CLOSURE — the exception clause in the same notice is what scores." },
            whyWrong: ["TRUE: the notice says classes continue as normal, which contradicts 'cancelled'."],
          },
        },
        {
          text: "The charity shop charges a small fee for unclaimed umbrellas.",
          answer: "NOT GIVEN",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 2, paragraph: 0, quote: "After that, unclaimed items go to the charity shop next door" }],
            explanation: "The notice says unclaimed items go to the charity shop but says nothing about what the shop then charges. Notice questions stay inside the notice: silence is Not Given, however plausible the guess.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "sentence-completion",
      label: "Questions 5–6",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "5. During the closure, early-morning lane swimming moves to the training pool at" }, { kind: "blank", no: 5 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "6. From 10 March, the Tuesday evening Aqua Fit class begins at" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 5,
          answer: "Ferndale",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Early-morning lane swimming moves to the training pool at Ferndale" }],
            explanation: "The temporary venue is named in Notice 1: the training pool at Ferndale. Proper nouns are the easiest scanning targets on a noticeboard — hunt the capital letters.",
          },
        },
        {
          no: 6,
          answer: "6.15 pm",
          alternatives: ["6.15", "18:15", "6.15pm"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Tuesday evening Aqua Fit moves from 7.00 pm to 6.15 pm" }],
            explanation: "Notice 2 moves the Tuesday class from 7.00 pm to 6.15 pm. The question asks for the new start — the destination of the move, not its origin, which is the classic time-table trap.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "multiple-choice",
      label: "Questions 7–8",
      instruction: "Choose the correct letter, A, B or C.",
      items: [
        {
          stem: "From 10 March, aqua class bookings can be made",
          options: [
            "at reception on the paper list",
            "online only",
            "by telephone during opening hours",
          ],
          correct: 1,
          lure: 0,
          meta: {
            skills: ["detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Booking is now online only: the paper list at reception was taking more time than the class itself." }],
            explanation: "Notice 2 replaces the paper list with online-only booking. The old system is described in the same sentence, which is what makes option A the designed distractor.",
            trap: { family: "mention-lure", note: "The paper list is mentioned — as the system being abolished." },
            whyWrong: ["A: the paper list is what the notice is cancelling.", "C: telephone booking is never mentioned."],
          },
        },
        {
          stem: "How long will reception hold a lost item that you have described?",
          options: [
            "thirty days",
            "twenty-three days",
            "forty-eight hours",
          ],
          correct: 2,
          lure: 0,
          meta: {
            skills: ["detail"],
            evidence: [{ block: 2, paragraph: 0, quote: "we can hold anything you have described for forty-eight hours" }],
            explanation: "Two different numbers live in Notice 3: thirty days is how long found items are kept generally, and forty-eight hours is how long a described item is held for you. The question's 'you have described' points to the second.",
            whyWrong: ["A: thirty days is the general storage period, not the hold after you describe the item.", "B: twenty-three is the count of umbrellas, a pure distractor number."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "maintenance", partOfSpeech: "noun", definition: "the work of keeping a building or machine in good condition; the pool closes for essential maintenance." },
    { word: "inclusive", partOfSpeech: "adjective", definition: "including both the first and last dates mentioned; 3 to 9 March inclusive means both end dates count." },
    { word: "unclaimed", partOfSpeech: "adjective", definition: "not collected by its owner; unclaimed items go to the charity shop after thirty days." },
    { word: "book", partOfSpeech: "verb", definition: "to reserve a place in advance; members may book up to seven days ahead." },
    { word: "works", partOfSpeech: "noun (plural)", definition: "building or repair activity; the classes continue throughout the works." },
  ],
  passageNote: "Notices are built from dates, charges and exceptions. Scan the bold shapes first — the headline tells you which notice holds the answer; the sentence-level detail then settles it.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtAds: ReadingExercise = {
  slug: "ielts-rb-gt-ads",
  title: "This week: courses and clubs",
  variant: "gt",
  section: 1,
  subject: "Advertisements",
  difficulty: 1,
  estimatedMinutes: 8,
  objective: "Read four short advertisements for prices, conditions and contact rules — the survival English of classifieds.",
  intro: "Read the advertisements below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Advertisement 1 — Guitar lessons",
      paragraphs: [
        "GUITAR LESSONS — all levels, patient teacher, fifteen years' experience. Studio lessons £18 per hour; home visits within 5 km of Northgate at no extra cost, evenings and weekends included. First lesson half price with this advertisement — mention it when you call. Acoustic, electric and classical styles all taught, and complete beginners are especially welcome. Phone Marco after 5 pm.",
      ],
    },
    {
      heading: "Advertisement 2 — Bicycle for sale",
      paragraphs: [
        "FOR SALE: ladies' hybrid bicycle, two years old, barely ridden — new tyres last month and the frame has no scratches. £140 or nearest sensible offer. Includes lock, pump and lights, and the handbook for the gears. Stored indoors its whole life, so no rust. Viewing any weekday evening. Email or text only, please — no calls at work.",
      ],
    },
    {
      heading: "Advertisement 3 — Dog walking",
      paragraphs: [
        "DOG WALKING — reliable local service, weekdays 12–2 pm, rain or shine. Insured walker, group walks of no more than four dogs, always on the riverside paths. £10 per walk, discounts for a weekly booking. Puppies and nervous dogs walked separately on request. References available on request from long-term clients.",
      ],
    },
    {
      heading: "Advertisement 4 — Language exchange evenings",
      paragraphs: [
        "LANGUAGE EXCHANGE — informal conversation evenings, Thursdays at 7 pm, at the Copper Kettle café on Market Street. All languages welcome; English learners especially welcome, and native speakers attend most weeks. Free entry — you buy your own coffee. Just turn up: no booking needed, and the table has a small flag on it so you can find us first time.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      label: "Questions 1–2",
      instruction: "Choose the correct letter, A, B or C.",
      items: [
        {
          stem: "How do you claim the half-price first guitar lesson?",
          options: [
            "Pay for a block of lessons in advance",
            "Mention the advertisement when you book",
            "Take the lesson at home instead of the studio",
          ],
          correct: 1,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "First lesson half price with this advertisement." }],
            explanation: "The discount is tied to the advertisement itself: 'with this advertisement' is the condition. Option C confuses the offer with the separate free home-visit radius, a classic ad-reading mix-up.",
            whyWrong: ["A: no block booking is mentioned.", "C: home visits cost nothing extra within 5 km — that is a different clause."],
          },
        },
        {
          stem: "What do we learn about the dog-walking service?",
          options: [
            "It operates in the middle of the day on weekdays",
            "It charges £10 per week with a discount",
            "It walks each dog alone",
          ],
          correct: 0,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 2, paragraph: 0, quote: "reliable local service, weekdays 12–2 pm" }],
            explanation: "The hours are 12 to 2 on weekdays — midday on working days, as the statement puts it. The other options twist the price (per walk, not per week) and the group rule (no more than four dogs, not solo walks).",
            whyWrong: ["B: £10 is per walk; the discount is for weekly booking.", "C: walks are group walks of up to four dogs."],
          },
        },
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 3–5",
      instruction: "Do the following statements agree with the information given in the advertisements? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The bicycle's tyres were replaced shortly before the sale.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 1, paragraph: 0, quote: "new tyres last month" }],
            explanation: "'New tyres last month' means the replacement happened recently — shortly before the sale. Section 1 statements often require this small time-phrase reading rather than vocabulary knowledge.",
          },
        },
        {
          text: "The seller of the bicycle is willing to take phone calls during the working day.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Email or text only, please — no calls at work." }],
            explanation: "The ad says email or text only, with no calls at work. The statement claims the opposite, so it is FALSE — contact rules are among the most tested details in classifieds.",
          },
        },
        {
          text: "Marco has taught guitar for more than a decade.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "vocabulary"],
            evidence: [{ block: 0, paragraph: 0, quote: "patient teacher, fifteen years' experience" }],
            explanation: "Fifteen years is more than a decade — the statement converts the number into a phrase. Paraphrase between number and expression is a Section 1 staple.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "sentence-completion",
      label: "Questions 6–8",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the advertisements for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "6. Marco charges nothing extra for home visits within" }, { kind: "blank", no: 6 }, { kind: "text", text: "of Northgate." }],
        [{ kind: "text", text: "7. The bicycle is sold together with a lock, a pump and" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "8. At the language exchange, entry is free but you buy your own" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 6,
          answer: "5 km",
          alternatives: ["5km", "five km", "five kilometres"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "home visits within 5 km of Northgate at no extra cost" }],
            explanation: "The free-visit radius is 5 km of Northgate. A figure plus its unit is a typical Section 1 answer; both the digit and 'km' copy straight from the ad.",
          },
        },
        {
          no: 7,
          answer: "lights",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Includes lock, pump and lights." }],
            explanation: "The included accessories are listed as lock, pump and lights. The sentence keeps the first two and asks for the third item in the list.",
          },
        },
        {
          no: 8,
          answer: "coffee",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 3, paragraph: 0, quote: "Free entry — you buy your own coffee." }],
            explanation: "The café arrangement is free entry with your own coffee paid. The completion keeps 'free' and 'buy your own' and needs the noun that follows.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "hybrid", partOfSpeech: "adjective", definition: "combining features of two types; a hybrid bicycle mixes road and mountain-bike features." },
    { word: "insured", partOfSpeech: "adjective", definition: "covered by an insurance policy; the dog walker is insured against accidents." },
    { word: "references", partOfSpeech: "noun (plural)", definition: "written recommendations from previous customers; available for the dog-walking service on request." },
    { word: "sensible", partOfSpeech: "adjective", definition: "reasonable; 'nearest sensible offer' invites reasonable offers near the asking price." },
    { word: "turn up", partOfSpeech: "phrasal verb", definition: "to arrive without an appointment; at the language exchange you just turn up." },
  ],
  passageNote: "Every advertisement is a contract in miniature: price, condition, contact rule. The questions here test exactly those three things — read the small print under the headline, where the conditions live.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtBramble: ReadingExercise = {
  slug: "ielts-rb-gt-bramble",
  title: "Bramble Bay: a visitor's guide",
  variant: "gt",
  section: 1,
  subject: "General informational texts",
  difficulty: 2,
  estimatedMinutes: 9,
  objective: "Extract opening times, prices and rules from a visitor leaflet, and ferry conditions from a timetable notice.",
  intro: "Read the information below and answer Questions 1–8.",
  blocks: [
    {
      heading: "Welcome to Bramble Bay",
      paragraphs: [
        "The bay is open daily from 9 am; last entry is 5 pm (October to March: 9 am to 7 pm at weekends, when we run the starlight guided walk). Admission: adults £9, seniors and students £7, children under 12 free with a paying adult. The family ticket — two adults and up to three children — is £24, and annual passes cost £60 for unlimited visits. Dogs on leads are welcome on the cliff path but not on the beach. The visitor centre shows a short film about the bay every half hour, on the hour and at half past; entry to the film is included in your ticket. The café serves hot food until 4 pm, and the gift shop closes with the last entry.",
      ],
    },
    {
      heading: "The Bramble Ferry to Seal Island",
      paragraphs: [
        "The ferry crosses to Seal Island every 40 minutes from 10 am; the last sailing back is at 6 pm (5 pm, November to February). The crossing itself takes about twenty-five minutes each way, and the island has a seal colony viewing platform and a small picnic lawn. Sailings may be cancelled in rough weather — cancelled tickets are refunded or rebooked free of charge. Book ahead in summer; walk-up passengers are welcome whenever there is room. Bicycles travel free. Dogs must wear a muzzle on board, and the crew can lend you one at the jetty.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "table-completion",
      label: "Questions 1–4",
      instruction: "Complete the table below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "Bramble Bay at a glance" }],
        [{ kind: "text", text: "Adult admission" }, { kind: "text", text: "£9" }],
        [{ kind: "text", text: "Children under 12" }, { kind: "blank", no: 1 }, { kind: "text", text: "with a paying adult" }],
        [{ kind: "text", text: "Family ticket covers two adults and up to" }, { kind: "blank", no: 2 }],
        [{ kind: "text", text: "Hot food in the café is served until" }, { kind: "blank", no: 3 }],
        [{ kind: "text", text: "Ferry crossings leave every" }, { kind: "blank", no: 4 }],
      ],
      blanks: [
        {
          no: 1,
          answer: "free",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "children under 12 free with a paying adult" }],
            explanation: "The price table hides one non-price: children under 12 are free with a paying adult. The table's condition column already carries the paying-adult rule, so the missing cell is the word free itself.",
          },
        },
        {
          no: 2,
          answer: "three children",
          alternatives: ["3 children"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "The family ticket — two adults and up to three children — is £24." }],
            explanation: "The family ticket covers two adults and up to three children. The row keeps 'two adults' and asks for the family's other half.",
          },
        },
        {
          no: 3,
          answer: "4 pm",
          alternatives: ["4pm", "16:00"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "The café serves hot food until 4 pm." }],
            explanation: "The kitchen's closing time for hot food is 4 pm — earlier than the park itself closes, which is the small trap for readers who assume one closing time governs everything.",
          },
        },
        {
          no: 4,
          answer: "40 minutes",
          alternatives: ["forty minutes"],
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "The ferry crosses to Seal Island every 40 minutes from 10 am" }],
            explanation: "The sailing frequency is every 40 minutes from 10 am. Frequency answers read the interval, not the first departure — the 'from 10 am' is the designed confusion.",
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
          text: "Dogs are allowed on the beach.",
          answer: "FALSE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "Dogs on leads are welcome on the cliff path but not on the beach." }],
            explanation: "The rule admits dogs to the cliff path and excludes them from the beach. Half-permission statements like this one are the classic leaflet trap: the welcome half is quoted, the exclusion half scores.",
          },
        },
        {
          text: "Cancelled ferry tickets can be rebooked at no cost.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 1, paragraph: 0, quote: "cancelled tickets are refunded or rebooked free of charge" }],
            explanation: "The ferry notice offers refunds or free rebooking for weather cancellations. 'At no cost' paraphrases 'free of charge' — the statement keeps both options' second half.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "multiple-choice",
      label: "Questions 7–8",
      instruction: "Choose the correct letter, A, B or C.",
      items: [
        {
          stem: "The film in the visitor centre",
          options: [
            "costs £2 on top of admission",
            "is included in the admission price",
            "runs only at weekends",
          ],
          correct: 1,
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 0, quote: "entry to the film is included in your ticket" }],
            explanation: "The film's entry is included in the ticket. Options A and C both contradict the same sentence — the price clause and the every-half-hour schedule.",
            whyWrong: ["A: no extra charge is mentioned anywhere.", "C: the film runs every half hour, daily."],
          },
        },
        {
          stem: "What rule applies to dogs on the ferry?",
          options: [
            "They travel free",
            "They must be carried",
            "They must wear a muzzle",
          ],
          correct: 2,
          meta: {
            skills: ["detail"],
            evidence: [{ block: 1, paragraph: 0, quote: "Dogs must wear a muzzle on board." }],
            explanation: "The ferry's dog rule is the muzzle. Option A belongs to bicycles, which travel free — the notice packs two animal-and-object rules into neighbouring sentences, and mixing them is the designed error.",
            whyWrong: ["A: it is bicycles that travel free, not dogs.", "B: carrying is never mentioned."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "admission", partOfSpeech: "noun", definition: "the price or act of entering a place of interest; admission is £9 for adults." },
    { word: "lead", partOfSpeech: "noun", definition: "a leash; a dog on a lead is under physical control." },
    { word: "sailing", partOfSpeech: "noun", definition: "a scheduled trip of a ferry; the last sailing back is at 6 pm." },
    { word: "walk-up", partOfSpeech: "adjective", definition: "arriving without a booking; walk-up passengers board when there is room." },
    { word: "muzzle", partOfSpeech: "noun", definition: "a covering that stops a dog biting; required on board the ferry." },
  ],
  passageNote: "Leaflets and timetables are lookup texts: prices in one block, conditions in the next. The traps live in adjacent rules — dogs on the path versus the beach, bicycles versus dogs on the ferry.",
  source: READING_BANK_SOURCE_NOTE,
};
