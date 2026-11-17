/**
 * General Training text library E (PROMPT 54 question-bank expansion).
 *
 * GT batch E — six Section 1–2 everyday text sets:
 *
 *   ielts-rb-gt-sports-rates     — Section 1, club tariff sheet   (foundation, d2, health)
 *   ielts-rb-gt-dental           — Section 1, surgery leaflet     (foundation, d1, health)
 *   ielts-rb-gt-open-day         — Section 2, recruitment advert  (foundation, d2, workplace)
 *   ielts-rb-gt-bus-pass         — Section 2, transport guidance  (foundation, d2, everyday)
 *   ielts-rb-gt-hotel-facilities — Section 2, hotel directory     (standard,  d3, everyday)
 *   ielts-rb-gt-parcel-office    — Section 1, depot notice        (foundation, d2, workplace)
 *
 * All texts are original TalkSy practice material written in the style of
 * the IELTS General Training Reading test — not official examination content.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtEExercises: ReadingExercise[] = [
  {
    slug: "ielts-rb-gt-sports-rates",
    title: "Sports club rates and classes",
    variant: "gt",
    section: 1,
    subject: "club tariff sheet",
    topic: "health",
    difficulty: 2,
    estimatedMinutes: 10,
    objective: "Read a sports club tariff sheet for prices, booking windows and guest limits — the charges and the small print of joining.",
    intro: "Read the tariff sheet below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Westfield Sports Club — membership rates",
        paragraphs: [
          "Adult membership costs £32 a month, or £300 for a full year — a saving of more than £80. Junior members under 18 pay £19 a month, and full-time students £24 with a valid student card. A couple's membership, covering two adults at the same address, is £54 a month. Every new member pays a one-off joining fee of £15, which is waived if you pay for a year in advance. A concessionary rate — ten per cent off any monthly plan — is open to over-65s and to anyone registered unemployed.",
        ],
      },
      {
        heading: "The studio timetable — classes this term",
        paragraphs: [
          "Spin classes run every weekday morning at 6.30 am and again at 12.30 pm; the popular evening session has moved from 7 pm to 8 pm. Yoga for beginners and improvers takes place on Tuesdays and Thursdays at 6 pm, and the new family yoga class is on Saturday mornings at 10 am — children over eight are welcome with a parent. Book any class through the club app: members may book up to eight days ahead, while non-members are limited to three days ahead and pay £6 a class. Please cancel at least four hours before the start, or the session counts as used.",
        ],
      },
      {
        heading: "Courts, equipment and guests",
        paragraphs: [
          "Squash and badminton courts cost £7 an hour for members and £12 for guests. Each member may bring up to two guests per visit, and the same guest may visit no more than four times a year. Rackets are hired at reception for £2, and a deposit of £10 is required, returnable when the racket comes back undamaged. Towels are free at the main desk, and members are asked to report any fault with the gym equipment to the duty manager rather than attempting repairs themselves.",
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
          [{ kind: "text", text: "1. Students qualify for the £24 monthly rate only if they show a valid" }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "2. The £15 joining fee is not charged when a new member pays for" }, { kind: "blank", no: 2 }, { kind: "text", text: "in advance." }],
          [{ kind: "text", text: "3. After the timetable change, the evening spin class begins at" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. A booked class must be cancelled at least" }, { kind: "blank", no: 4 }, { kind: "text", text: "before the start." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "student card",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "full-time students £24 with a valid student card" }],
              explanation: "The student rate carries a condition: £24 applies only with a valid student card. Tariff lines almost always pair a figure with the evidence you must show, so read past the number to the words beside it.",
            },
          },
          {
            no: 2,
            answer: "a year",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "which is waived if you pay for a year in advance" }],
              explanation: "The joining fee is waived — not charged — for anyone who pays for a year in advance. The sentence supplies the preposition 'for', so the blank takes the two words that follow it in the notice.",
            },
          },
          {
            no: 3,
            answer: "8 pm",
            alternatives: ["8pm", "20:00"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "the popular evening session has moved from 7 pm to 8 pm" }],
              explanation: "The notice moves the evening spin session from 7 pm to 8 pm, and the question asks for the new start — the destination of the change. Copying the old time instead is the classic timetable error this item is built around.",
              trap: { family: "order", note: "Two times sit in one clause; the blank needs the arrival time, not the departure." },
            },
          },
          {
            no: 4,
            answer: "four hours",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Please cancel at least four hours before the start, or the session counts as used" }],
              explanation: "The cancellation window is four hours before the start; a later cancellation still uses up the session. The phrase 'at least' marks the minimum notice the club demands, and the answer copies that length of time.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 5–8",
        instruction: "Do the following statements agree with the information given in the texts? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Paying for a year in advance is cheaper than paying twelve monthly instalments.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "Adult membership costs £32 a month, or £300 for a full year — a saving of more than £80" }],
              explanation: "Twelve monthly payments of £32 come to £384, while the annual price is £300, and the sheet itself advertises a saving of more than £80. The small arithmetic confirms what the notice states outright.",
            },
          },
          {
            text: "A member's guest may use the club as often as they wish during the year.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "the same guest may visit no more than four times a year" }],
              explanation: "The notice caps guest visits: the same guest may come no more than four times a year. 'As often as they wish' overstates the rule, and tariff sheets exist precisely to state limits of this kind.",
              trap: { family: "extreme-language", note: "'As often as they wish' stretches a four-visits-a-year cap into an unlimited right." },
              whyWrong: ["TRUE: the four-visits-a-year cap directly contradicts 'as often as they wish'."],
            },
          },
          {
            text: "The family yoga class is taken by the same instructor as the Thursday evening class.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "Yoga for beginners and improvers takes place on Tuesdays and Thursdays at 6 pm" }],
              explanation: "The timetable names days and times for both yoga classes but never mentions instructors. A statement can borrow real details — two genuine yoga classes — and still add information the sheet does not carry, which is exactly Not Given.",
            },
          },
          {
            text: "You can hire a racket without leaving a deposit.",
            answer: "FALSE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "a deposit of £10 is required, returnable when the racket comes back undamaged" }],
              explanation: "Hire comes with a compulsory £10 deposit, returnable only when the racket comes back undamaged. The statement drops the deposit condition entirely, so it contradicts the hire terms rather than merely adding to them.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "waived", partOfSpeech: "verb (past participle)", definition: "not charged; officially cancelled. The £15 joining fee is waived for members who pay for a year in advance." },
      { word: "concessionary", partOfSpeech: "adjective", definition: "charged at a reduced rate for groups such as older or unemployed people; a concessionary rate takes ten per cent off." },
      { word: "deposit", partOfSpeech: "noun", definition: "a sum of money left as security and given back later if nothing is damaged; racket hire requires a £10 deposit." },
      { word: "returnable", partOfSpeech: "adjective", definition: "able to be given back. The racket deposit is returnable when the equipment comes back undamaged." },
      { word: "session", partOfSpeech: "noun", definition: "a single organised period of exercise. A class cancelled too late still counts as a used session." },
    ],
    passageNote: "A tariff sheet is a table written as prose: a price, then the condition attached to it. Scan for the figures first, then read the clause on either side of the number.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-dental",
    title: "Information for new dental patients",
    variant: "gt",
    section: 1,
    subject: "surgery leaflet",
    topic: "health",
    difficulty: 1,
    estimatedMinutes: 9,
    objective: "Follow a dental surgery leaflet — registering, what happens at the first appointment, and what treatment costs.",
    intro: "Read the leaflet below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Paragraph A — Welcome to Ashgrove Dental Care",
        paragraphs: [
          "Ashgrove Dental Care is a small practice on Fore Street. We are open every weekday between 8.30 am and 5.30 pm, and on Saturday mornings until 1 pm for emergencies only. To register as a new patient, telephone reception or complete the form on our website; we will then offer you a first appointment, usually within two weeks. Please arrive ten minutes early so that the paperwork is finished before your slot.",
        ],
      },
      {
        heading: "Paragraph B — Your first appointment",
        paragraphs: [
          "A first appointment lasts up to forty-five minutes. The dentist will examine your teeth and gums, ask about your medical history, and take two small X-rays if they are needed. This visit is for assessment only — treatment is not carried out on the same day unless you are in pain. You will leave with a written plan of any treatment you need and an estimate of what it will cost.",
        ],
      },
      {
        heading: "Paragraph C — Fees, payment and missed appointments",
        paragraphs: [
          "NHS examinations are free for under-18s and £23.80 for adults; a private examination costs £48. Payment is due on the day, by card or cash — cheques are no longer accepted. If your treatment will cost more than £200, you may spread the balance over three months by standing order; ask reception for a form. Patients who miss an appointment without giving twenty-four hours' notice may be charged a £10 fee, which is donated to the practice's charity fund.",
        ],
      },
      {
        heading: "Paragraph D — Nervous patients, access and home visits",
        paragraphs: [
          "Please tell us before you come if you feel anxious about dental treatment — around one patient in five does, and we take it seriously. We can book longer appointments, agree a stop signal with you, or arrange sedation for longer procedures. The surgery is step-free throughout, with a hearing loop at reception, and home visits are available for patients whose health prevents them from leaving the house.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–4",
        instruction: "The leaflet has four paragraphs, A–D. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a service for patients too unwell to travel to the surgery themselves",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 3, paragraph: 0, quote: "home visits are available for patients whose health prevents them from leaving the house" }],
              explanation: "Paragraph D closes with home visits for patients whose health prevents them from leaving the house — the leaflet's own wording of 'too unwell to travel'. The matching item paraphrases the service rather than naming it.",
            },
          },
          {
            text: "how quickly a new patient is usually seen for a first appointment",
            correct: 0,
            lure: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "we will then offer you a first appointment, usually within two weeks" }],
              explanation: "Paragraph A promises a first appointment usually within two weeks of registering. The waiting time is a booking fact, not a length-of-appointment fact, and confusing the two sends candidates to the wrong paragraph.",
              trap: { family: "mention-lure", note: "Paragraph D offers 'longer appointments' — time words, but about duration, not waiting time." },
            },
          },
          {
            text: "a penalty for failing to turn up without warning",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 2, paragraph: 0, quote: "Patients who miss an appointment without giving twenty-four hours' notice may be charged a £10 fee" }],
              explanation: "Paragraph C turns missed appointments into a £10 fee when twenty-four hours' notice is not given. 'Failing to turn up without warning' is the everyday paraphrase of missing an appointment without notice.",
            },
          },
          {
            text: "what the dentist gives you before you leave the first visit",
            correct: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "You will leave with a written plan of any treatment you need and an estimate of what it will cost" }],
              explanation: "Paragraph B ends the first visit with two documents: a written treatment plan and an estimate of cost. The item asks what you leave with, and only the first-appointment paragraph carries that promise.",
            },
          },
        ],
        options: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        type: "note-completion",
        label: "Questions 5–8",
        instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the text for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Joining Ashgrove Dental Care — notes for new patients" }],
          [{ kind: "text", text: "• Length of a first appointment: up to" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "• Saturday morning emergency opening continues until" }, { kind: "blank", no: 6 }],
          [{ kind: "text", text: "• Cost of a private examination:" }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "• Notice needed to avoid the missed-appointment fee:" }, { kind: "blank", no: 8 }],
        ],
        blanks: [
          {
            no: 5,
            answer: "forty-five minutes",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "A first appointment lasts up to forty-five minutes" }],
              explanation: "The first visit is capped at forty-five minutes of chair time. Notes compress a leaflet into labels and figures, so the answer is simply the length itself, copied exactly as it follows 'up to' in the text.",
            },
          },
          {
            no: 6,
            answer: "1 pm",
            alternatives: ["1pm", "13:00"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "on Saturday mornings until 1 pm for emergencies only" }],
              explanation: "Saturday opening exists for emergencies only and stops at 1 pm. The note drops the word 'emergencies', so the candidate must hold that condition in mind while copying the finishing time from Paragraph A.",
            },
          },
          {
            no: 7,
            answer: "£48",
            alternatives: ["48"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "a private examination costs £48" }],
              explanation: "The private examination fee is £48, set beside the NHS prices in the same sentence. Candidates who confuse the adult NHS charge with the private one will reach for the neighbouring figure and lose the mark.",
            },
          },
          {
            no: 8,
            answer: "twenty-four hours",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "without giving twenty-four hours' notice" }],
              explanation: "The missed-appointment fee can be avoided only by giving twenty-four hours' notice. The note's wording 'notice needed' mirrors the leaflet, and the answer is the length of that notice copied from the fees paragraph.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "register", partOfSpeech: "verb", definition: "to sign up with a practice so that it becomes your regular dentist; new patients register by phone or website." },
      { word: "assessment", partOfSpeech: "noun", definition: "a careful examination to decide what treatment is needed. The first visit is for assessment only." },
      { word: "estimate", partOfSpeech: "noun", definition: "an approximate statement of what something will cost; you leave with a written plan and an estimate." },
      { word: "standing order", partOfSpeech: "noun", definition: "an instruction to a bank to pay a fixed amount regularly; balances over £200 may be spread by standing order." },
      { word: "sedation", partOfSpeech: "noun", definition: "medicine that relaxes a patient during treatment; it can be arranged for longer procedures." },
    ],
    passageNote: "A patient leaflet answers the questions a receptionist hears every day: joining, first visits, money, nerves. The matching items paraphrase those answers, so hunt the meaning rather than the words.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-open-day",
    title: "A company recruitment open day",
    variant: "gt",
    section: 2,
    subject: "recruitment advert",
    topic: "workplace",
    difficulty: 2,
    estimatedMinutes: 11,
    objective: "Read a recruitment open-day advert for what is on offer, what happens when, and how to apply afterwards.",
    intro: "Read the advertisement below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Halstead Engineering — open day, Saturday 14 June",
        paragraphs: [
          "Halstead Engineering is holding a recruitment open day on Saturday 14 June, from 10 am to 4 pm, at the Riverside Works on Canvas Street. We are recruiting for thirty new positions over the coming year, from machine operators and warehouse staff to trainee technicians and office administrators. No previous experience is required for the entry-level roles; we train everyone on the job. Drop in at any point during the day — there is no need to book, and free parking is available in the yard. Tea, coffee and a light lunch are provided.",
        ],
      },
      {
        heading: "What happens on the day",
        paragraphs: [
          "The morning is informal. From 10 am, visitors can tour the factory floor in small groups guided by current employees, and try the welding simulator in the training bay. At midday, senior managers will give a short presentation on the company's history and its plans for the next five years, including the new battery line that opens in the autumn. In the afternoon, our recruitment team will answer questions about pay, shift patterns and holidays, and about the application process itself. Interviews will not be held on the day, but anyone who brings a printed CV can leave a copy with us and will be contacted within two weeks.",
        ],
      },
      {
        heading: "Applying, expenses and who we want to hear from",
        paragraphs: [
          "Applications open formally on Monday 16 June through our website. Every applicant completes a short online form, and those shortlisted are invited to a practical assessment at the works lasting half a day. We pay travel expenses for candidates travelling more than twenty miles. Offers are subject to references and a medical questionnaire. We particularly welcome applications from women returning to engineering, from ex-forces personnel and from people who have been out of work for more than a year — three groups that are under-represented in our workforce. Questions before the open day may go to Fiona Marsh on 01722 414414, or by email to recruitment@halstead-eng.example.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "true-false-not-given",
        label: "Questions 1–5",
        instruction: "Do the following statements agree with the information given in the advertisement? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Visitors must reserve a place before attending the open day.",
            answer: "FALSE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "there is no need to book, and free parking is available in the yard" }],
              explanation: "The advert says the opposite of a booking rule: drop in at any point, with no need to book. Invitation language — 'drop in', 'any point during the day' — tests whether candidates notice freedom rather than obligation.",
            },
          },
          {
            text: "Tours of the factory floor are led by people who already work for the company.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 1, paragraph: 0, quote: "tour the factory floor in small groups guided by current employees" }],
              explanation: "The tours are guided by current employees, and 'people who already work for the company' is a plain paraphrase of that clause. Small factual restatements like this are the bread and butter of Section 2 verdict items.",
            },
          },
          {
            text: "Applicants who bring a printed CV will be interviewed during the open day.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Interviews will not be held on the day, but anyone who brings a printed CV can leave a copy with us" }],
              explanation: "The advert rules interviews out explicitly: none on the day, only a CV drop-off with contact promised within two weeks. The CV clause sits right beside the denial, which is exactly what makes the statement tempting.",
              trap: { family: "mention-lure", note: "The CV is genuinely mentioned — but it is collected, not interviewed." },
              whyWrong: ["TRUE: the CV is collected and followed up within two weeks; no interview happens on the day."],
            },
          },
          {
            text: "The company pays the travel costs of some candidates.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 2, paragraph: 0, quote: "We pay travel expenses for candidates travelling more than twenty miles" }],
              explanation: "Travel expenses are paid, but only for candidates travelling more than twenty miles to the assessment, and 'some candidates' captures that restriction exactly. Verdict statements often hide their qualifier inside a single adjective like 'some'.",
            },
          },
          {
            text: "Most of the thirty new positions will be created by the new battery line.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 1, paragraph: 0, quote: "including the new battery line that opens in the autumn" }],
              explanation: "The advert mentions thirty positions in one block and a battery line opening in the autumn in another, but never links the two. Two true facts joined by an untested connection is the classic False-versus-Not-Given boundary, and the correct call is Not Given.",
              trap: { family: "boundary", note: "Both facts are real and both are mentioned — the missing link makes it Not Given, not FALSE." },
            },
          },
        ],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–8",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the advertisement for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. In the training bay, visitors can try the" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "7. Candidates living more than" }, { kind: "blank", no: 7 }, { kind: "text", text: "away can have their travel costs paid." }],
          [{ kind: "text", text: "8. Before the open day, questions should be directed to" }, { kind: "blank", no: 8 }, { kind: "text", text: "by phone or email." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "welding simulator",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "try the welding simulator in the training bay" }],
              explanation: "The hands-on attraction is the welding simulator in the training bay. Scanning for 'training bay' lands the candidate directly on the noun phrase, which then copies into the blank as two words.",
            },
          },
          {
            no: 7,
            answer: "twenty miles",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "We pay travel expenses for candidates travelling more than twenty miles" }],
              explanation: "The expenses rule is measured in distance: more than twenty miles qualifies for payment. The completion keeps the comparison 'more than' and needs the distance itself, which is stated once and must be lifted exactly.",
            },
          },
          {
            no: 8,
            answer: "Fiona Marsh",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "Questions before the open day may go to Fiona Marsh on 01722 414414" }],
              explanation: "Pre-event enquiries belong to Fiona Marsh, whose name sits beside a phone number and an email address. Proper nouns are the easiest scanning targets in a Section 2 advert — hunt the capital letters.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "recruiting", partOfSpeech: "verb (-ing form)", definition: "looking for new people to employ; the company is recruiting for thirty positions." },
      { word: "shortlisted", partOfSpeech: "adjective", definition: "placed on the final list of candidates for a job; shortlisted applicants attend a practical assessment." },
      { word: "questionnaire", partOfSpeech: "noun", definition: "a printed or online set of questions; job offers are subject to a medical questionnaire." },
      { word: "under-represented", partOfSpeech: "adjective", definition: "present in smaller numbers than in the wider population; three groups are under-represented in the workforce." },
      { word: "workforce", partOfSpeech: "noun", definition: "all the people who work for a particular company; the open day aims to widen the workforce." },
    ],
    passageNote: "A recruitment advert mixes invitation with process: what the day offers, what the company promises, and what applicants must do next. The verdict items test the joins between those three.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-bus-pass",
    title: "Getting a county bus pass",
    variant: "gt",
    section: 2,
    subject: "transport guidance",
    topic: "everyday",
    difficulty: 2,
    estimatedMinutes: 11,
    objective: "Follow county transport guidance — who qualifies for a bus pass, what to send with an application, and the rules of using one.",
    intro: "Read the guidance below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Who can apply for a county bus pass",
        paragraphs: [
          "The Calderbrook county bus pass gives unlimited travel on local buses after 9.00 am on weekdays, and all day at weekends and on bank holidays. It is issued free of charge to county residents who have reached state pension age, and to disabled residents of any age who meet at least one of the seven criteria published on the council website — these include being registered blind, being unable to walk more than fifty metres, and receiving the higher rate of the mobility allowance. Partners and carers are not entitled to a pass of their own; every application is assessed on the applicant's own circumstances.",
        ],
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Applying online takes about ten minutes. You will need proof of address — a council tax bill or a utility bill from the last three months — proof of age or disability, and a digital passport-style photograph. Applications are normally processed within ten working days, and the pass then arrives by post. If you cannot apply online, paper forms are available from any county library or from the travel office on Pippin Street, where staff will check your documents while you wait. A replacement for a lost or damaged pass costs £10, but there is no charge if the pass was stolen and you provide a crime reference number.",
        ],
      },
      {
        heading: "Using and keeping your pass",
        paragraphs: [
          "Show your pass to the driver as you board; you do not need to touch it on a card reader. The pass is valid for five years and is renewed automatically unless you move house — tell the council your new address within fourteen days of moving, or the renewal letter will be sent to your old home. An inspector may ask to see the pass at any point during the journey, and refusing can lead to the pass being withdrawn. The pass cannot be used on trains, trams or long-distance coaches, and it gives no free travel before 9.00 am on a weekday; the full fare applies before then.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "sentence-completion",
        label: "Questions 1–4",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the text for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "1. Pass holders may use local buses free of charge after 9.00 am on" }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "2. A council tax bill or a" }, { kind: "blank", no: 2 }, { kind: "text", text: "from the last three months counts as proof of address." }],
          [{ kind: "text", text: "3. There is no replacement charge for a stolen pass if the applicant produces a crime" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. Pass holders who move must give the council their new address within" }, { kind: "blank", no: 4 }, { kind: "text", text: "of moving." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "weekdays",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "unlimited travel on local buses after 9.00 am on weekdays" }],
              explanation: "The morning cut-off applies only on weekdays; weekends and bank holidays are free all day. The stem keeps the time '9.00 am' and needs the days that the restriction belongs to, which is the sentence's final word.",
            },
          },
          {
            no: 2,
            answer: "utility bill",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "a council tax bill or a utility bill from the last three months" }],
              explanation: "Two documents prove where you live: a council tax bill or a utility bill, both dated within the last three months. The completion names one and needs the other, copied as a two-word noun phrase.",
            },
          },
          {
            no: 3,
            answer: "reference number",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "there is no charge if the pass was stolen and you provide a crime reference number" }],
              explanation: "A stolen pass is replaced free, but only when a crime reference number from the police is provided. The stem carries the word 'crime' and needs the two words that follow it in the guidance's exact wording.",
            },
          },
          {
            no: 4,
            answer: "fourteen days",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "tell the council your new address within fourteen days of moving" }],
              explanation: "The address-update deadline is fourteen days from moving, or the renewal letter goes to the old home. Time limits stated in days are the most frequently lifted details in transport guidance of this kind.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 5–8",
        instruction: "Do the following statements agree with the information given in the text? Write YES if the statement agrees with the information, NO if it contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "A carer who accompanies a disabled pass holder is entitled to a free pass as well.",
            answer: "NO",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Partners and carers are not entitled to a pass of their own" }],
              explanation: "The guidance draws the line clearly: partners and carers are not entitled to their own pass, however much they travel together. Entitlement rests on each applicant's own circumstances, and the statement ignores that boundary.",
            },
          },
          {
            text: "An online application is normally dealt with in under three weeks.",
            answer: "YES",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Applications are normally processed within ten working days" }],
              explanation: "Processing takes ten working days — two working weeks, comfortably inside three calendar weeks. The statement converts working days into calendar time, and the small arithmetic lands on agreement rather than contradiction.",
            },
          },
          {
            text: "A pass that has been lost is replaced free of charge.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "A replacement for a lost or damaged pass costs £10, but there is no charge if the pass was stolen" }],
              explanation: "Lost and stolen are different cases inside one sentence: a lost or damaged pass costs £10 to replace, and only a stolen one is free with a crime reference number. The neighbouring free-replacement clause is the lure.",
              trap: { family: "mention-lure", note: "'No charge' is truly written nearby — but it belongs to stolen passes, not lost ones." },
              whyWrong: ["YES: free replacement belongs to stolen passes only; a lost pass pays £10."],
            },
          },
          {
            text: "Pass inspectors travel on buses in plain clothes.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 2, paragraph: 0, quote: "An inspector may ask to see the pass at any point during the journey" }],
              explanation: "The text confirms that inspectors exist and may ask to see the pass mid-journey, but it says nothing about how they dress. Because inspectors are genuinely mentioned, candidates lean towards NO — the boundary case where a real detail meets an untested one.",
              trap: { family: "boundary", note: "Inspectors are mentioned, their clothing is not — a mention is not a contradiction." },
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "criteria", partOfSpeech: "noun (plural)", definition: "the official conditions that an application must meet; the council publishes seven criteria for disabled applicants." },
      { word: "entitled", partOfSpeech: "adjective", definition: "having the official right to something; carers are not entitled to a pass of their own." },
      { word: "processed", partOfSpeech: "verb (past participle)", definition: "officially dealt with; applications are processed within ten working days." },
      { word: "withdrawn", partOfSpeech: "verb (past participle)", definition: "officially cancelled or taken away; refusing to show the pass can lead to it being withdrawn." },
      { word: "fare", partOfSpeech: "noun", definition: "the price of a journey; the full fare applies before 9.00 am on a weekday." },
    ],
    passageNote: "Transport guidance is written as eligibility, evidence, then exceptions. The verdict items swing on the exceptions — a stolen pass and a lost pass are two different cases in the same sentence.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-hotel-facilities",
    title: "Hotel guest information",
    variant: "gt",
    section: 2,
    subject: "hotel directory",
    topic: "everyday",
    difficulty: 3,
    estimatedMinutes: 12,
    objective: "Find your way around a hotel guest directory — check-in rules, dining hours, leisure facilities and the small print.",
    intro: "Read the guest directory below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Paragraph A — Arrival and departure",
        paragraphs: [
          "Reception is staffed around the clock, and check-in runs from 2 pm onwards. If you arrive earlier, we will store your luggage free of charge and call you the moment your room is ready. On the day of departure, rooms must be vacated by 11 am; a late check-out until 2 pm can be arranged at reception for a supplementary charge of £20, subject to availability, and guests leaving after 2 pm are charged for an additional night. Express check-out is available on the television in your room: settle your account the night before and simply leave your key card in the box by the main door.",
        ],
      },
      {
        heading: "Paragraph B — Eating and drinking",
        paragraphs: [
          "The Harbour Restaurant serves breakfast from 6.30 am to 10 am, and dinner between 7 pm and 10.30 pm; the dress code is smart casual. Room service operates at any hour, with a reduced menu after 11 pm. The rooftop bar stays open for residents and their guests until midnight, but during the summer months it may be reserved entirely for private functions — in that case resident use is suspended and a notice is posted by the lifts. Packed lunches can be ordered from reception before 9 pm on the previous evening.",
        ],
      },
      {
        heading: "Paragraph C — The pool, the gym and the spa",
        paragraphs: [
          "The twenty-metre indoor pool opens at 6 am and closes at 10 pm; children must be accompanied by an adult at all times, and pool caps are compulsory. The gym is reserved for guests aged sixteen and over. The spa offers massages, facials and body treatments — book at the spa desk or by dialling 9 from your room, and note that a cancellation made less than twelve hours before a treatment is charged at half price. Pool towels are provided in the changing rooms; please do not take bath towels from your room down to the pool.",
        ],
      },
      {
        heading: "Paragraph D — Services and the small print",
        paragraphs: [
          "Laundry left at reception before 9 am is returned by 6 pm the same day, though same-day service is not available on Sundays. The hotel accepts no responsibility for valuables left in rooms, but every wardrobe contains a safe, and items deposited at reception are insured up to £500. A lost key card is replaced free once per stay; after that a £5 fee applies. The lift to the car park is out of service until further notice — please use the stairs beside the conference suite, or ask a porter to help with heavy luggage.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–4",
        instruction: "The directory has four paragraphs, A–D. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a service that cannot be used on one day of the week",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 3, paragraph: 0, quote: "same-day service is not available on Sundays" }],
              explanation: "Same-day laundry is offered every day except Sunday — a weekly gap in an otherwise daily service. 'One day of the week' paraphrases 'Sundays' without naming it, so the candidate must convert the day into a rule.",
            },
          },
          {
            text: "the extra amount payable for leaving later than the standard time",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "a late check-out until 2 pm can be arranged at reception for a supplementary charge of £20" }],
              explanation: "Late check-out until 2 pm costs a supplementary £20, while staying beyond 2 pm costs a full extra night. The item asks for the extra amount for the standard extension, which points to the £20 clause in the departure paragraph.",
            },
          },
          {
            text: "the point at which cancelling a spa booking starts to cost money",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 2, paragraph: 0, quote: "a cancellation made less than twelve hours before a treatment is charged at half price" }],
              explanation: "Spa cancellations become chargeable inside the final twelve hours before a treatment. The item asks for the threshold rather than the penalty, so the answer is the paragraph holding the twelve-hour rule.",
            },
          },
          {
            text: "a facility that residents may occasionally be prevented from using",
            correct: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 1, paragraph: 0, quote: "in that case resident use is suspended and a notice is posted by the lifts" }],
              explanation: "The rooftop bar is open to residents until midnight, except when it is reserved for private functions and resident use is suspended. 'Occasionally prevented' matches the seasonal, occasional exclusion of the summer months.",
            },
          },
        ],
        options: ["A", "B", "C", "D"],
      },
      {
        id: "q2",
        type: "note-completion",
        label: "Questions 5–8",
        instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the text for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Hotel guest information — notes" }],
          [{ kind: "text", text: "• Late check-out until 2 pm, when available: extra charge" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "• After 11 pm, room service offers a" }, { kind: "blank", no: 6 }, { kind: "text", text: "menu" }],
          [{ kind: "text", text: "• Everyone using the pool must wear a" }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "• Items deposited at reception are insured up to" }, { kind: "blank", no: 8 }],
        ],
        blanks: [
          {
            no: 5,
            answer: "£20",
            alternatives: ["20"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "for a supplementary charge of £20" }],
              explanation: "The 2 pm extension costs a supplementary £20; only staying past 2 pm triggers a full additional night. Two charges sit close together in the departure paragraph, and the note asks for the smaller, earlier one.",
              trap: { family: "mention-lure", note: "A second, bigger money clause — an additional night — follows immediately and is not what this note asks for." },
            },
          },
          {
            no: 6,
            answer: "reduced",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Room service operates at any hour, with a reduced menu after 11 pm" }],
              explanation: "Room service never closes, but after 11 pm it runs on a reduced menu. The note keeps the time and asks for the adjective describing what happens to the choice of dishes late at night.",
            },
          },
          {
            no: 7,
            answer: "pool cap",
            alternatives: ["cap"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "pool caps are compulsory" }],
              explanation: "Swimming rules make pool caps compulsory for everyone, adult or child. The note's singular 'a' means the answer must be written as a singular noun phrase even though the directory states the rule in the plural.",
            },
          },
          {
            no: 8,
            answer: "£500",
            alternatives: ["500"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 3, paragraph: 0, quote: "items deposited at reception are insured up to £500" }],
              explanation: "Depositing valuables at reception insures them up to £500, unlike items left in rooms, for which the hotel accepts no responsibility. The insurance ceiling is the figure the note asks for.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "vacated", partOfSpeech: "verb (past participle)", definition: "left empty; rooms must be vacated by 11 am on the day of departure." },
      { word: "supplementary", partOfSpeech: "adjective", definition: "additional to the basic price; a late check-out carries a supplementary charge of £20." },
      { word: "compulsory", partOfSpeech: "adjective", definition: "required by the rules; pool caps are compulsory for every swimmer." },
      { word: "suspended", partOfSpeech: "verb (past participle)", definition: "temporarily stopped; when the rooftop bar is hired out, resident use is suspended." },
      { word: "deposited", partOfSpeech: "verb (past participle)", definition: "handed over to be kept safely; valuables deposited at reception are insured up to £500." },
    ],
    passageNote: "A hotel directory is a rulebook dressed as hospitality: every facility carries hours, conditions and exceptions. The hardest items ask which exception belongs to which facility.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-parcel-office",
    title: "The parcel collection office",
    variant: "gt",
    section: 1,
    subject: "depot notice",
    topic: "workplace",
    difficulty: 2,
    estimatedMinutes: 9,
    objective: "Read a depot noticeboard — collection rules, posting limits and staff instructions — three kinds of everyday English on one board.",
    intro: "Read the notices below and answer Questions 1–8.",
    blocks: [
      {
        heading: "Parcel collection — opening hours and what to bring",
        paragraphs: [
          "The collection office at Norwood Depot is open from 7 am to 8 pm on weekdays and from 8 am to noon on Saturdays; it is closed on Sundays and bank holidays. When a parcel cannot be delivered, the courier leaves a 'something for you' card carrying a barcode. Bring this card together with one form of photographic identification, such as a passport or driving licence — a bank card is not accepted. Parcels are held for ten calendar days from the date on the card, after which they are returned to the sender.",
        ],
      },
      {
        heading: "Sending parcels at the counter",
        paragraphs: [
          "Parcels can also be posted at the counter until 7.30 pm on weekdays. The maximum weight per parcel is 20 kg, and no single side may exceed 1.5 metres — anything larger travels by freight and must be booked in advance by telephone. Dangerous goods are prohibited, including batteries sent loose and any kind of aerosol. Wrapping materials are sold at the counter, and outside the busiest hours the staff will seal and label a parcel for you at no extra charge; before 10 am is generally the quietest time.",
        ],
      },
      {
        heading: "Staff and courier notice",
        paragraphs: [
          "Staff and couriers should note that the roller shutters on loading bays three and four are out of order until further notice — please use bays one and two, and expect queues after 5 pm. Loading trolleys must be returned to the rack at the end of the last shift, and any trolley left out on the apron overnight will be removed by security. The kettle in the drivers' room has been replaced, as the old one had a faulty switch. Report any spillage on the apron to the duty manager at once — the surface becomes dangerously slippery when it is wet.",
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
            text: "On Saturdays the collection office opens at the same time as on weekdays.",
            answer: "FALSE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "open from 7 am to 8 pm on weekdays and from 8 am to noon on Saturdays" }],
              explanation: "Weekday opening starts at 7 am, Saturday opening at 8 am — an hour later, and closing far earlier at noon. The statement flattens the two schedules into one, which the notice plainly contradicts.",
            },
          },
          {
            text: "A passport is acceptable identification when collecting a parcel.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "one form of photographic identification, such as a passport or driving licence" }],
              explanation: "Collection requires one form of photographic identification, and the notice lists a passport and a driving licence as examples. 'Such as' introduces exactly the examples the statement borrows, so it agrees.",
            },
          },
          {
            text: "Parcels are kept for more than ten days if the sender requests it.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "Parcels are held for ten calendar days from the date on the card, after which they are returned to the sender" }],
              explanation: "The ten-day holding rule is firm as stated, and the notice says nothing about extending it at a sender's request. Because the rule itself is clearly mentioned, candidates feel the pull of FALSE, but an unmentioned extension is Not Given.",
              trap: { family: "boundary", note: "The ten-day rule is real — the requested extension is not, and silence is not contradiction." },
            },
          },
          {
            text: "Staff will seal and label a parcel for you at any time of day.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "outside the busiest hours the staff will seal and label a parcel for you at no extra charge" }],
              explanation: "The help is real but conditional: staff seal and label parcels only outside the busiest hours, with before 10 am suggested as the quietest time. 'At any time of day' stretches a limited offer into an unconditional one.",
              trap: { family: "extreme-language", note: "'At any time of day' ignores the quiet-periods restriction the same sentence states." },
              whyWrong: ["TRUE: the service exists, but the notice restricts it to quiet periods."],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 5–8",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the texts for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "5. Parcels that are not collected in time are sent back to the" }, { kind: "blank", no: 5 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "6. The heaviest parcel accepted at the counter is" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "7. Batteries sent" }, { kind: "blank", no: 7 }, { kind: "text", text: "are prohibited goods." }],
          [{ kind: "text", text: "8. At the end of the last shift, loading trolleys must be returned to the" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        ],
        blanks: [
          {
            no: 5,
            answer: "sender",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "after which they are returned to the sender" }],
              explanation: "The ten-day limit ends with uncollected parcels going back to the sender. 'Sent back' paraphrases 'returned', so the candidate must convert the phrasing while copying the single-word destination exactly.",
            },
          },
          {
            no: 6,
            answer: "20 kg",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "The maximum weight per parcel is 20 kg" }],
              explanation: "The counter's weight ceiling is 20 kg per parcel. The sentence turns 'maximum weight' into 'heaviest', and the answer is the figure with its unit, lifted exactly as the notice prints it.",
            },
          },
          {
            no: 7,
            answer: "loose",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 1, paragraph: 0, quote: "Dangerous goods are prohibited, including batteries sent loose and any kind of aerosol" }],
              explanation: "The prohibited list names batteries sent loose and aerosols. The completion keeps 'batteries sent' and needs the condition that makes the batteries unacceptable — one adjective copied straight from the notice.",
            },
          },
          {
            no: 8,
            answer: "rack",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 2, paragraph: 0, quote: "Loading trolleys must be returned to the rack at the end of the last shift" }],
              explanation: "Trolleys belong in the rack by the end of the last shift; anything left on the apron is removed by security. The staff notice carries the answer, showing how a Section 1 board mixes public and staff registers.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "identification", partOfSpeech: "noun", definition: "an official document proving who you are; photographic identification is required at the collection office." },
      { word: "prohibited", partOfSpeech: "adjective", definition: "not allowed; batteries sent loose and aerosols are prohibited goods." },
      { word: "freight", partOfSpeech: "noun", definition: "the transport of large goods separately from ordinary parcels; oversized items travel by freight." },
      { word: "apron", partOfSpeech: "noun", definition: "the hard-surfaced loading area in front of a depot; spillages on the apron must be reported." },
      { word: "spillage", partOfSpeech: "noun", definition: "liquid that has escaped from its container; a spillage makes the apron dangerously slippery." },
    ],
    passageNote: "Depot notices mix public information with staff-only instructions on one board. Before answering, check which register a statement belongs to — the collection rules, the counter rules or the yard rules.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
