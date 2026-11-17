/**
 * IELTS mock additions for the shared examination-engine upgrade.
 *
 * - GT letter tasks use the EMAIL_WRITING engine type (letter/email family:
 *   situation + three bullet points + tone), matching the official General
 *   Training Writing Task 1 shape.
 * - The dictation drill is a TRAINING drill (dictation is not an official
 *   IELTS task type): it builds the spelling, number and date accuracy that
 *   Listening completion items demand. It is labelled as training material
 *   in its directions and description.
 *
 * All items carry difficulty (1-5), a post-submission explanation, source
 * ("original-practice") and contentStatus ("published"). Everything here is
 * original EnglishPath practice material — not an official IELTS paper.
 */

import { mockDescription, type MockSeed } from "./mocks";

export const gtLetterDrill: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "Drill — GT letters: formal, semi-formal and informal",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Three General Training Task 1 letter tasks in the official shape: a situation, three bullet points and a required tone. Write at least 150 words for each.",
  ),
  sections: [
    {
      key: "writing",
      title: "GT Task 1 — letters",
      directions:
        "Official Task 1 gives you a situation with three bullet points and about 20 minutes. This drill gives three situations at the three official tones. Respond to every bullet point; the tone must stay consistent from greeting to sign-off.",
      timingSec: 2400,
      questions: [
        {
          order: 1,
          type: "EMAIL_WRITING",
          payload: {
            situation:
              "You rent a flat. The heating has not worked for three weeks and the agency has ignored two emails. Write to the agency.",
            bullets: [
              "describe the problem and its effect on daily life",
              "state what you have already done to get it fixed",
              "say what you want the agency to do and by when",
            ],
            tone: "formal",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "GT Task 1 — formal complaint",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "tone", "coherence", "formal-register"],
          difficulty: 3,
          explanation:
            "A formal complaint needs 'Dear Sir or Madam', full names/dates, passive reporting ('has not worked for three weeks') and a firm closing request. Watch the trap: anger is fine, contractions and slang are not.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "EMAIL_WRITING",
          payload: {
            situation:
              "You start university next month. Write to your new employer asking to move your weekend shifts so you can attend Saturday classes.",
            bullets: [
              "explain your situation and why the change helps",
              "suggest two specific alternative arrangements",
              "offer something in return for the flexibility",
            ],
            tone: "semi-formal",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "GT Task 1 — semi-formal request",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "tone", "coherence", "negotiation"],
          difficulty: 3,
          explanation:
            "Semi-formal means polite, warm but composed: 'Dear Ms Okafor', contractions allowed sparingly. Both alternative arrangements must be concrete (e.g. Sunday shifts or weekday evenings), and the offer closes the loop.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "EMAIL_WRITING",
          payload: {
            situation:
              "A close friend helped you move house last weekend. Write to your friend.",
            bullets: [
              "say thank you and mention something funny that happened",
              "invite them to dinner at your new place",
              "suggest a date and offer to cook their favourite dish",
            ],
            tone: "informal",
            minWords: 150,
            suggestedMinutes: 20,
            rubricKey: "ielts.writing",
            part: "GT Task 1 — informal thank-you",
          },
          answer: null,
          points: 0,
          skills: ["task-response", "tone", "coherence", "informal-register"],
          difficulty: 2,
          explanation:
            "Informal letters want 'Hi Ana', contractions, exclamation and a chatty story, yet all three bullets still need covering. The classic error is drifting formal ('I am writing to inform you') — that costs Tone marks.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};

export const ieltsDictationDrill: MockSeed = {
  examKey: "IELTS",
  variant: "ACADEMIC",
  title: "Drill — Listening dictation: numbers, dates and spelling",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Training drill (dictation is not an official IELTS task type): write down each sentence exactly as spoken. It trains the spelling, number and date accuracy that Listening completion items demand.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — dictation training",
      directions:
        "Play each recording once (as in the real test) and type the sentence exactly as you hear it. Punctuation and capitalisation are ignored when marking; every word, number and name must be there. This is a training drill, not an official task type.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "DICTATION",
          payload: {
            audioScript:
              "RECEPTIONIST: The course starts on the fourteenth of March, and the fee is two hundred and fifteen pounds.",
          },
          answer: { text: "The course starts on the fourteenth of March, and the fee is two hundred and fifteen pounds." },
          points: 2,
          skills: ["numbers", "dates", "spelling"],
          difficulty: 2,
          explanation:
            "Correct: 'fourteenth of March' and 'two hundred and fifteen pounds' — ordinals and currency in words are the standard Listening traps. Digits ('14', '215') are accepted here, but never mix words and figures on the real answer sheet.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "DICTATION",
          payload: {
            audioScript:
              "CALLER: My surname is Whitley — that's W-H-I-T-L-E-Y — and my membership number is 0-4-7-double 2-9.",
          },
          answer: { text: "My surname is Whitley, and my membership number is 0472 29." },
          points: 2,
          skills: ["spelling", "numbers"],
          difficulty: 3,
          explanation:
            "Spelled-out letters (W-H-I-T-L-E-Y) and 'double 2' (0022 → here 0-4-7-double 2-9) are the classic Part 1 traps. 'Double' means the digit repeats; the accepted answer keeps the digits in order.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "DICTATION",
          payload: {
            audioScript:
              "GUIDE: The bus leaves at a quarter past nine, not nine fifteen — please be at the gate ten minutes early.",
          },
          answer: { text: "The bus leaves at a quarter past nine, not nine fifteen — please be at the gate ten minutes early." },
          points: 2,
          skills: ["times", "detail"],
          difficulty: 2,
          explanation:
            "The correction pattern ('X, not Y') is tested constantly: the accepted time is 'a quarter past nine'; 'nine fifteen' is the rejected alternative. Corrections after 'not' are usually wrong answers on the real test.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 4,
          type: "DICTATION",
          payload: {
            audioScript:
              "TUTOR: Email your draft to the office by Thursday the twenty-third, and bring two printed copies to the seminar.",
          },
          answer: { text: "Email your draft to the office by Thursday the twenty-third, and bring two printed copies to the seminar." },
          points: 2,
          skills: ["dates", "detail"],
          difficulty: 3,
          explanation:
            "Two obligations in one sentence: the deadline day-month ('Thursday the twenty-third') and the quantity ('two printed copies'). Candidates who note only one lose the other blank in note-completion tasks.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 5,
          type: "DICTATION",
          payload: {
            audioScript:
              "AGENT: The flat is on the third floor, but note that the lift is out of order until the end of next month.",
          },
          answer: { text: "The flat is on the third floor, but note that the lift is out of order until the end of next month." },
          points: 2,
          skills: ["detail", "inference"],
          difficulty: 3,
          explanation:
            "Two floors/dates again, plus the 'end of next month' open-ended time phrase. 'Third floor' (not 'three floors') is the number-noun trap; the lift repair date is deliberately vague, which is exactly what Not-Given style detail sounds like.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 6,
          type: "DICTATION",
          payload: {
            audioScript:
              "LIBRARIAN: You can borrow up to twelve items, and each one is due back within three weeks of collection.",
          },
          answer: { text: "You can borrow up to twelve items, and each one is due back within three weeks of collection." },
          points: 2,
          skills: ["numbers", "detail"],
          difficulty: 2,
          explanation:
            "Quantities with 'up to' set ceilings, not totals: 'up to twelve items' is a limit. 'Within three weeks of collection' anchors the return date to borrowing day, a relative-time pattern used in Part 1 forms.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};

/**
 * General Training mirror of the dictation drill. Listening and Speaking are
 * the same test across variants, but the twin banks stay fully separate:
 * distinct scripts, distinct answers (never a copied recording).
 */
export const ieltsDictationDrillGeneral: MockSeed = {
  examKey: "IELTS",
  variant: "GENERAL_TRAINING",
  title: "Drill — Listening dictation: numbers, dates and spelling (General Training)",
  kind: "drill",
  lengthLabel: "sample",
  description: mockDescription(
    "Training drill (dictation is not an official IELTS task type): write down each sentence exactly as spoken. It trains the spelling, number and date accuracy that Listening completion items demand.",
  ),
  sections: [
    {
      key: "listening",
      title: "Listening — dictation training",
      directions:
        "Play each recording once (as in the real test) and type the sentence exactly as you hear it. Punctuation and capitalisation are ignored when marking; every word, number and name must be there. This is a training drill, not an official task type.",
      timingSec: 900,
      questions: [
        {
          order: 1,
          type: "DICTATION",
          payload: {
            audioScript:
              "AGENT: The bus pass costs thirty-two dollars a month, and it is valid from the first of September.",
          },
          answer: { text: "The bus pass costs thirty-two dollars a month, and it is valid from the first of September." },
          points: 2,
          skills: ["numbers", "dates", "spelling"],
          difficulty: 2,
          explanation:
            "Correct: 'thirty-two dollars a month' and 'the first of September'. Prices and start dates in one sentence is the standard Part 1 combination trap; '32' and '1 September' are accepted spellings here.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 2,
          type: "DICTATION",
          payload: {
            audioScript:
              "NEIGHBOUR: My name is Okafor — that's O-K-A-F-O-R — and my flat number is 7-B.",
          },
          answer: { text: "My name is Okafor, and my flat number is 7B." },
          points: 2,
          skills: ["spelling", "numbers"],
          difficulty: 3,
          explanation:
            "Spelled surnames (O-K-A-F-O-R) and flat numbers with a letter ('7-B') are classic Section 1 traps. The accepted answer keeps the digits and letter together; 'seven B' also matches in sound.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 3,
          type: "DICTATION",
          payload: {
            audioScript:
              "TUTOR: The evening class begins at half past six, not seven — please arrive ten minutes beforehand.",
          },
          answer: { text: "The evening class begins at half past six, not seven — please arrive ten minutes beforehand." },
          points: 2,
          skills: ["times", "detail"],
          difficulty: 2,
          explanation:
            "The correction pattern strikes again: 'half past six' is the real time; 'seven' is the rejected alternative after 'not'. Arrival is 'ten minutes beforehand', a relative time the test loves.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 4,
          type: "DICTATION",
          payload: {
            audioScript:
              "PHARMACIST: Take two tablets daily, and collect the repeat prescription by Friday the thirtieth.",
          },
          answer: { text: "Take two tablets daily, and collect the repeat prescription by Friday the thirtieth." },
          points: 2,
          skills: ["dates", "detail"],
          difficulty: 3,
          explanation:
            "Two obligations: the dose 'two tablets daily' and the deadline 'Friday the thirtieth'. Candidates who note only the dose lose the date blank in form completion.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 5,
          type: "DICTATION",
          payload: {
            audioScript:
              "CLERK: The recycling centre is closed on Mondays, but it stays open until eight in the evening the rest of the week.",
          },
          answer: { text: "The recycling centre is closed on Mondays, but it stays open until eight in the evening the rest of the week." },
          points: 2,
          skills: ["detail", "inference"],
          difficulty: 3,
          explanation:
            "The 'but' clause carries the answer: opening hours are 'until eight in the evening', and Monday is the exception day. Negative facts (closed on Mondays) are what True/False/Not Given items are built from.",
          source: "original-practice",
          contentStatus: "published",
        },
        {
          order: 6,
          type: "DICTATION",
          payload: {
            audioScript:
              "LANDLORD: Rent is due on the fifth of each month, and the deposit is refundable within two weeks of moving out.",
          },
          answer: { text: "Rent is due on the fifth of each month, and the deposit is refundable within two weeks of moving out." },
          points: 2,
          skills: ["numbers", "detail"],
          difficulty: 2,
          explanation:
            "'The fifth of each month' is a recurring date (not a one-off), and 'within two weeks of moving out' anchors the deposit to an event, not a calendar date — both are standard GT Section 1/2 patterns.",
          source: "original-practice",
          contentStatus: "published",
        },
      ],
    },
  ],
};
