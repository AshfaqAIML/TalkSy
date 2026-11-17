/**
 * Audio question bank — PROMPT 54 expansion, Part 1 batch B.
 *
 * Seven further original Part 1 recordings: everyday social and
 * transactional two-speaker phone and face-to-face conversations, written
 * in the style of the IELTS Listening test but 100% TalkSy practice
 * material. Each exercise carries a completion group plus a short-answer
 * group, with designed traps, dictated proper names and naturally read
 * numbers, dates and prices.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP1BExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p1-bank-account",
    title: "Opening a student bank account",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear a conversation in a bank between a personal banker and a new student who is opening a student account. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "nadia", name: "Nadia", role: "personal banker on the student desk at Hartline Bank", accent: "british" },
      { id: "sam", name: "Sam", role: "first-year student opening a student account", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "nadia", text: "Good morning — student desk, I'm Nadia. Take a seat; what can I do for you?" },
      { id: "s2", speakerId: "sam", text: "Hi. I've just started at the university, and I need a student account for my loan and everything." },
      { id: "s3", speakerId: "nadia", text: "No problem, it takes about ten minutes. Let's start with your full name." },
      { id: "s4", speakerId: "sam", text: "Sam Derwent — that's D-E-R-W-E-N-T." },
      { id: "s5", speakerId: "nadia", text: "Derwent, lovely. And your student number? It's on your offer letter." },
      { id: "s6", speakerId: "sam", text: "It's four seven two, oh nine six.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "nadia", text: "Thank you. And what course are you registered on?" },
      { id: "s8", speakerId: "sam", text: "I began on the chemistry course, but I switched last month — I'm on biochemistry now." },
      { id: "s9", speakerId: "nadia", text: "Biochemistry — popular choice. Where are you living? We need a term-time address." },
      { id: "s10", speakerId: "sam", text: "Ashgrove Hall, on the north campus — the big brick one by the sports field." },
      { id: "s11", speakerId: "nadia", text: "Perfect. And a mobile number, in case we need to reach you?" },
      { id: "s12", speakerId: "sam", text: "Sure — oh seven nine six six, four four one, three five two.", pauseAfterMs: 300 },
      { id: "s13", speakerId: "nadia", text: "Got it. Now, the account itself: there's no monthly fee while you're enrolled, but we do ask for a small opening deposit — twenty-five pounds, by card today." },
      { id: "s14", speakerId: "sam", text: "That's fine, I've got my card on me. And when does the actual card arrive?" },
      { id: "s15", speakerId: "nadia", text: "The debit card goes in the post within five working days, and the PIN follows separately a day or two later. One last thing — your passport checks out here, but I'll still need a letter from the university confirming your enrolment, so drop that in whenever you're passing.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–6",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Hartline Bank — student account application" }],
          [{ kind: "text", text: "Name: Sam " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Student number: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Course: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Hall of residence: " }, { kind: "blank", no: 4 }, { kind: "text", text: " Hall" }],
          [{ kind: "text", text: "Mobile: " }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Opening deposit: £" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "Derwent", alternatives: [], numbers: false },
          { no: 2, answer: "472096", alternatives: [], numbers: true },
          { no: 3, answer: "biochemistry", alternatives: ["Biochemistry"], numbers: false },
          { no: 4, answer: "Ashgrove", alternatives: [], numbers: false },
          { no: 5, answer: "07966 441352", alternatives: ["07966441352"], numbers: true },
          { no: 6, answer: "25", alternatives: ["twenty-five"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["Derwent", "four seven two", "biochemistry", "Ashgrove", "four four one", "twenty-five"],
          trap: {
            family: "correction",
            lure: ["chemistry"],
            note: "Sam says he began on chemistry and then switches to biochemistry — the form always takes the corrected value, never the first one spoken.",
          },
          explanation:
            "The form follows the conversation strictly in order. Derwent is spelt out letter by letter, the student number is dictated digit by digit, the course is the corrected biochemistry rather than the chemistry Sam began on, the hall is Ashgrove, the mobile is read out in three groups, and the deposit is the twenty-five pounds Nadia asks for.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "7. Which document does the bank still need from Sam?",
          "8. What will arrive in the post first?",
        ],
        accepted: [
          ["enrolment letter", "university letter", "a letter"],
          ["debit card", "the debit card", "a debit card", "the card", "card"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["enrolment", "debit card"],
          explanation:
            "Question 7 needs the one outstanding document — the university's enrolment letter, which Sam must drop in. Question 8 hinges on the debit card going in the post first, with the PIN following separately a day or two later, so the card is the first thing to arrive.",
        },
      },
    ],
    transcriptNote:
      "Watch the course correction: Sam began on chemistry but is registered on biochemistry now, so the form takes the second course. The card and the PIN arrive separately — card first — and the enrolment letter is the one document still outstanding.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-driving-theory",
    title: "Booking a driving theory test",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 5,
    topic: "everyday",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a learner driver and a booking agent at the driving theory test centre. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "marcus", name: "Marcus", role: "booking agent on the theory-test booking line", accent: "british" },
      { id: "hannah", name: "Hannah", role: "learner driver booking her theory test", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "marcus", text: "Good morning, theory-test bookings — Marcus speaking. How can I help?" },
      { id: "s2", speakerId: "hannah", text: "Hello — I'd like to book my driving theory test, please. My provisional licence came through last week." },
      { id: "s3", speakerId: "marcus", text: "Congratulations — let's get you booked in. Can I take your full name?" },
      { id: "s4", speakerId: "hannah", text: "Hannah Rothwell — that's R-O-T-H-W-E-L-L." },
      { id: "s5", speakerId: "marcus", text: "Rothwell, thank you. And your date of birth?" },
      { id: "s6", speakerId: "hannah", text: "The fourteenth of March, nineteen ninety-eight." },
      { id: "s7", speakerId: "marcus", text: "Lovely. Now, whereabouts would you like to sit it? We run two centres in the city — Kestrel Park and Farrow Road." },
      { id: "s8", speakerId: "hannah", text: "Oh — whichever has the earlier date, really." },
      { id: "s9", speakerId: "marcus", text: "Then Farrow Road it is; Kestrel Park is fully booked until August. Let's see… the first Farrow Road slot is Thursday the fourth of July, at ten fifteen in the morning.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "hannah", text: "That's perfect — I'm away the week after." },
      { id: "s11", speakerId: "marcus", text: "Booked. The fee is thirty-one pounds, payable now by card." },
      { id: "s12", speakerId: "hannah", text: "Right — I've got my card ready. Is there anything I need to bring on the day?" },
      { id: "s13", speakerId: "marcus", text: "Your photocard licence, and nothing else — the paper counterpart alone won't get you into the test room." },
      { id: "s14", speakerId: "hannah", text: "Understood. Will I get some kind of confirmation?" },
      { id: "s15", speakerId: "marcus", text: "I'll text you the booking reference straight away; a letter follows in the post, but the text is the one to watch for." },
      { id: "s16", speakerId: "hannah", text: "Great — thanks for your help." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Theory-test booking — caller details" }],
          [{ kind: "text", text: "Name: Hannah " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Test centre: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Test date: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Start time: " }, { kind: "blank", no: 4 }, { kind: "text", text: " a.m." }],
          [{ kind: "text", text: "Fee: £" }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "Rothwell", alternatives: [], numbers: false },
          { no: 2, answer: "Farrow Road", alternatives: [], numbers: false },
          { no: 3, answer: "4 July", alternatives: ["July 4", "4th July"], numbers: true },
          { no: 4, answer: "10.15", alternatives: ["10:15", "ten fifteen"], numbers: true },
          { no: 5, answer: "31", alternatives: ["thirty-one"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "detail", "paraphrase"],
          keywords: ["Rothwell", "Farrow Road", "fourth of July", "ten fifteen", "thirty-one"],
          explanation:
            "Rothwell is dictated letter by letter, and Farrow Road is the centre with the earlier date because Kestrel Park is fully booked until August. The test falls on Thursday the fourth of July, the slot begins at ten fifteen, and the fee payable on the phone is thirty-one pounds.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. What must Hannah show on the day of the test?",
          "7. How will the booking reference reach her?",
        ],
        accepted: [
          ["photocard licence", "the photocard licence", "a photocard licence"],
          ["by text", "a text", "text"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["photocard licence", "text"],
          explanation:
            "Marcus insists on the photocard licence — the paper counterpart alone will not get Hannah into the test room. The booking reference comes by text straight away, which is quicker than the letter that follows in the post afterwards.",
        },
      },
    ],
    transcriptNote:
      "The details land in booking order — surname, centre, date, time, fee — and Farrow Road only wins because Kestrel Park is full until August. Notice that 'the one to watch for' tells you the text arrives before the posted letter.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-volunteering",
    title: "Joining a city farm volunteer scheme",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "society",
    accentMix: ["british", "australian"],
    intro:
      "You will hear a telephone conversation between a caller and the weekend coordinator of a city farm about becoming a weekend volunteer. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "doug", name: "Doug", role: "weekend volunteer coordinator at Larkspur City Farm", accent: "australian" },
      { id: "gemma", name: "Gemma", role: "caller asking about weekend volunteering", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "doug", text: "Larkspur City Farm, Doug speaking — how can I help?" },
      { id: "s2", speakerId: "gemma", text: "Hi — I've seen your poster at the station about weekend volunteering, and I wanted to find out what's involved." },
      { id: "s3", speakerId: "doug", text: "Good on you, we're always after weekend hands. Were you thinking Saturdays, Sundays, or both?" },
      { id: "s4", speakerId: "gemma", text: "Possibly both. What time does the weekend actually start?" },
      { id: "s5", speakerId: "doug", text: "Gates open at nine thirty — half nine, most of us call it — and everyone gathers at the barn by the main gate." },
      { id: "s6", speakerId: "gemma", text: "Right, the barn. And what would I be doing all morning?" },
      { id: "s7", speakerId: "doug", text: "Saturdays it's the goat house — mucking out, fresh straw, the full works. Sundays are more about the visitors: guided tours, twenty minutes each, small groups.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "gemma", text: "That sounds far better than my last volunteer job." },
      { id: "s9", speakerId: "doug", text: "I could also put you down for egg packing on Sunday afternoons — it's under cover, and it's quieter." },
      { id: "s10", speakerId: "gemma", text: "That's tempting, but I'd sooner be outside, so tours, please.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "doug", text: "Tours it is. Now, the formalities: you'll need to be sixteen or over, and there's a one-hour induction before your first shift — health and safety, mostly." },
      { id: "s12", speakerId: "gemma", text: "No problem, I'm twenty-two. Is there a dress code?" },
      { id: "s13", speakerId: "doug", text: "Boots you can hose down, basically. And one firm rule: no dogs, not even the sweetest — they send the goats spare." },
      { id: "s14", speakerId: "gemma", text: "Noted! And how do I get the paperwork?" },
      { id: "s15", speakerId: "doug", text: "I'll email the handbook over tonight — read the bit about boots — and you'll sign a couple of forms at the barn when you arrive." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Larkspur City Farm — weekend volunteer notes" }],
          [{ kind: "text", text: "Sessions begin: " }, { kind: "blank", no: 1 }, { kind: "text", text: " a.m." }],
          [{ kind: "text", text: "Meeting point: the " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Saturday duty: mucking out the " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Gemma's Sunday role: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Minimum age: " }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Before the first shift: a one-hour " }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "9.30", alternatives: ["9:30", "nine thirty", "half nine"], numbers: true },
          { no: 2, answer: "barn", alternatives: [], numbers: false },
          { no: 3, answer: "goat house", alternatives: [], numbers: false },
          { no: 4, answer: "tours", alternatives: ["guided tours"], numbers: false },
          { no: 5, answer: "16", alternatives: ["sixteen"], numbers: true },
          { no: 6, answer: "induction", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "negation", "paraphrase"],
          keywords: ["nine thirty", "barn", "goat house", "guided tours", "sixteen", "induction", "egg packing"],
          trap: {
            family: "negation",
            lure: ["egg packing"],
            note: "Egg packing is genuinely offered, but 'I'd sooner be outside' turns it down — the Sunday blank wants tours, the role she accepts.",
          },
          explanation:
            "The notes track Doug's answers in order: sessions start at nine thirty, everyone meets at the barn, Saturday means mucking out the goat house, and Gemma accepts tours on Sunday after politely refusing the egg-packing rota. Volunteers must be sixteen or over, and a one-hour induction comes before any shift.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "7. Which animals must volunteers leave at home?",
          "8. What will Gemma be sent before her first shift?",
        ],
        accepted: [
          ["dogs", "a dog", "your dog", "the dog"],
          ["a handbook", "the handbook", "handbook"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["no dogs", "handbook"],
          explanation:
            "The farm's one firm rule is no dogs, because even the sweetest dog sends the goats spare, so dogs are what stay at home. The handbook reaches Gemma by email that same evening, before any forms are signed at the barn.",
        },
      },
    ],
    transcriptNote:
      "The egg-packing rota is offered and politely refused — 'I'd sooner be outside' — so tours is the Sunday role that counts. The dog rule is phrased as a flat 'no dogs', and the induction hour comes before any shift.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-streetlight",
    title: "Reporting a faulty streetlight",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "workplace",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a shopkeeper and a call handler on a council street-lighting hotline about a faulty streetlight. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "rae", name: "Rae", role: "call handler on the Harwick Council street-lighting hotline", accent: "british" },
      { id: "gordon", name: "Gordon", role: "corner-shop owner reporting a flickering streetlight", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "rae", text: "Harwick Council, street lighting — Rae speaking. Is a light out?" },
      { id: "s2", speakerId: "gordon", text: "Flickering, more like — it strobes all evening outside my shop, then dies altogether about eleven." },
      { id: "s3", speakerId: "rae", text: "That sounds like a failing lamp; I'll log it. Can I take your name, sir?" },
      { id: "s4", speakerId: "gordon", text: "Gordon Petch — that's P-E-T-C-H. I own the corner shop at number thirty, Cotterill Street; it's the column right outside, opposite the postbox." },
      { id: "s5", speakerId: "rae", text: "Thirteen Cotterill Street, got it—" },
      { id: "s6", speakerId: "gordon", text: "Thirty, sorry — three oh. Thirteen's the baker's." },
      { id: "s7", speakerId: "rae", text: "My mistake — thirty it is. Now, the column carries a small ID plate at eye height; could you read that out for me?" },
      { id: "s8", speakerId: "gordon", text: "Hang on… here we are: four four, seven one.", pauseAfterMs: 300 },
      { id: "s9", speakerId: "rae", text: "Noted. And is there a daytime phone number for the shop?" },
      { id: "s10", speakerId: "gordon", text: "Oh one five two four, six six oh, nine three one.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "rae", text: "Thank you. When did the trouble start?" },
      { id: "s12", speakerId: "gordon", text: "It went on the Monday — no, hang on, it was the Tuesday, the night of that storm. Four nights ago now.", pauseAfterMs: 300 },
      { id: "s13", speakerId: "rae", text: "I see. Is there anything about the spot itself I should flag on the job sheet?" },
      { id: "s14", speakerId: "gordon", text: "The courier vans reverse right up to that corner, and with the light dead they can't see the kerb. There's a school crossing there at eight in the morning, too." },
      { id: "s15", speakerId: "rae", text: "That bumps it up the queue. I can have an engineer on site Thursday morning — he'll ring you about twenty minutes before he calls round, so you can unlock the yard gate." },
      { id: "s16", speakerId: "gordon", text: "Thursday's fine by me. Much obliged." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Harwick Council — street-lighting fault report" }],
          [{ kind: "text", text: "Reported by: Gordon " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Shop address: " }, { kind: "blank", no: 2 }, { kind: "text", text: " Cotterill Street" }],
          [{ kind: "text", text: "Column ID: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Daytime phone: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Engineer's site visit: " }, { kind: "blank", no: 5 }, { kind: "text", text: " morning" }],
        ],
        blanks: [
          { no: 1, answer: "Petch", alternatives: [], numbers: false },
          { no: 2, answer: "30", alternatives: ["thirty"], numbers: true },
          { no: 3, answer: "4471", alternatives: [], numbers: true },
          { no: 4, answer: "01524 660931", alternatives: ["01524660931"], numbers: true },
          { no: 5, answer: "Thursday", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "similar-sound", "detail"],
          keywords: ["Petch", "thirty", "four four", "oh one five two four", "Thursday"],
          trap: {
            family: "similar-sound",
            lure: ["13", "thirteen"],
            note: "Rae reads thirty back as thirteen before Gordon corrects her — the -ty/-teen pair is the classic confusion, and the confirmed shop number is thirty.",
          },
          explanation:
            "Petch is spelt out letter by letter, and the shop sits at number thirty — Rae's misheard 'thirteen' belongs to the baker's further down. The column plate reads four four seven one, the daytime number is dictated in three groups, and the engineer's visit is booked for Thursday morning.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. On which night did the light first fail?",
          "7. What will happen about twenty minutes before the visit?",
        ],
        accepted: [
          ["Tuesday", "Tuesday night", "tuesday"],
          ["phone call", "a call", "he'll ring", "a ring", "ring"],
        ],
        meta: {
          skills: ["corrections", "detail", "paraphrase"],
          keywords: ["Tuesday", "storm", "ring"],
          trap: {
            family: "correction",
            lure: ["Monday"],
            note: "Monday is Gordon's first memory and Tuesday the storm night he settles on — the corrected day carries the mark.",
          },
          explanation:
            "Gordon first says the light failed on the Monday, then corrects himself to the Tuesday night of the storm, so the second day scores. Twenty minutes before the visit the engineer will ring, which is why a call or a ring is what to expect at the shop.",
        },
      },
    ],
    transcriptNote:
      "Two read-backs decide this call: Rae mishears thirty as thirteen and is corrected, and Gordon's first instinct of Monday becomes the Tuesday of the storm. It is the reversing vans and the school crossing that push the job up the repair queue.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-furniture-delivery",
    title: "Arranging a furniture delivery",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "everyday",
    accentMix: ["british", "nz"],
    intro:
      "You will hear a telephone conversation between a customer and a delivery scheduler at a furniture store about booking a delivery slot for a sofa. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "dean", name: "Dean", role: "delivery scheduler at Birchline Furniture", accent: "nz" },
      { id: "yasmin", name: "Yasmin", role: "customer arranging delivery of a new sofa", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "dean", text: "Birchline Furniture, delivery desk — Dean speaking." },
      { id: "s2", speakerId: "yasmin", text: "Hi — I ordered the two-seater sofa in sage green on Saturday, and I've had a text asking me to ring up and book a slot." },
      { id: "s3", speakerId: "dean", text: "Sweet as. Give me a second… right, the sage two-seater. It leaves the warehouse on Wednesday, so let's find you a window." },
      { id: "s4", speakerId: "yasmin", text: "Whatever's soonest, really." },
      { id: "s5", speakerId: "dean", text: "Okay — Wednesday afternoon we're in your area between two and six; that one's fifteen pounds." },
      { id: "s6", speakerId: "yasmin", text: "Mm, I'm at work until half five on Wednesdays, so that one's out." },
      { id: "s7", speakerId: "dean", text: "No worries. Saturday morning runs from eight thirty until half twelve — that's nineteen pounds; it's our busiest window.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "yasmin", text: "Saturday morning would be brilliant — I'm home all weekend. What else is there, just in case?" },
      { id: "s9", speakerId: "dean", text: "There's a Tuesday evening run, six till nine — the cheap one, only twelve pounds." },
      { id: "s10", speakerId: "yasmin", text: "No, Saturday morning it is. One thing, though — the lift in our building has been out of order for a month." },
      { id: "s11", speakerId: "dean", text: "Good to know. So the crew will be carrying it up the stairs — what floor are you on?" },
      { id: "s12", speakerId: "yasmin", text: "Second. Does that cost extra?" },
      { id: "s13", speakerId: "dean", text: "Nah, stairs are fine — we budget for legs. For a tenner, though, the crew can cart off your old sofa at the same time; it goes to the recycling centre, not the tip.", pauseAfterMs: 300 },
      { id: "s14", speakerId: "yasmin", text: "Oh, yes please — the old one has been squatting in the hallway for a year." },
      { id: "s15", speakerId: "dean", text: "Done. Last job for you: double-check the measurements before Saturday — the doorframe, and the turn on your stairs — because the legs on this model don't come off." },
      { id: "s16", speakerId: "yasmin", text: "Right, I'll get the tape measure out. Thanks, Dean!" },
    ],
    questions: [
      {
        id: "q1",
        type: "table",
        label: "Questions 1–5",
        instruction: "Complete the table below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Birchline Furniture — delivery windows (sage two-seater)" }],
          [{ kind: "text", text: "Window · Day · Runs · Fee" }],
          [{ kind: "text", text: "A · Wednesday · " }, { kind: "blank", no: 1 }, { kind: "text", text: " to 6 p.m. · £15" }],
          [{ kind: "text", text: "B · Saturday · " }, { kind: "blank", no: 2 }, { kind: "text", text: " to 12.30 p.m. · £19" }],
          [{ kind: "text", text: "C · Tuesday · 6 to 9 p.m. · £" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Access (lift out of order): crew carries the sofa up the " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Optional extra: old " }, { kind: "blank", no: 5 }, { kind: "text", text: " taken away (£10)" }],
        ],
        blanks: [
          { no: 1, answer: "2", alternatives: ["two"], numbers: true },
          { no: 2, answer: "8.30", alternatives: ["8:30", "eight thirty"], numbers: true },
          { no: 3, answer: "12", alternatives: ["twelve"], numbers: true },
          { no: 4, answer: "stairs", alternatives: [], numbers: false },
          { no: 5, answer: "sofa", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "mention-lure", "paraphrase"],
          keywords: ["between two and six", "eight thirty", "twelve pounds", "up the stairs", "old sofa"],
          trap: {
            family: "mention-lure",
            lure: ["19", "£19", "10", "£10"],
            note: "Every fee in the call is real, but each belongs to its own row — the Tuesday blank takes the twelve-pound fee, not Saturday's nineteen or the tenner for the old sofa.",
          },
          explanation:
            "Each window keeps its own fee: Wednesday afternoon costs fifteen pounds, Saturday morning nineteen, and the Tuesday evening run only twelve — do not let the fee of the chosen window spill into the Tuesday row. With the lift out of order the crew carries the sofa up the stairs, and the optional extra is taking away the old sofa for a tenner.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. Which delivery window did Yasmin choose?",
          "7. What does Dean tell her to double-check beforehand?",
        ],
        accepted: [
          ["Saturday morning", "Saturday"],
          ["the measurements", "measurements", "the doorframe", "doorframe"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["Saturday morning", "double-check the measurements"],
          explanation:
            "Yasmin rejects Wednesday because she works until half five, and she settles on the Saturday morning window instead. Dean's one instruction for her is to double-check the measurements — the doorframe and the stair turn — since the legs of this model cannot be removed.",
        },
      },
    ],
    transcriptNote:
      "Three fees circle the conversation — fifteen, nineteen and the tenner for the old sofa — and each belongs to a different line of the table. The Tuesday evening run is the cheapest at twelve, but Yasmin still takes the Saturday window.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-party-venue",
    title: "Hiring a venue for a children's party",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 5,
    topic: "culture",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a parent and the bookings clerk of a village hall about hiring the hall for a children's party. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "marion", name: "Marion", role: "bookings clerk at Pilbury Village Hall", accent: "british" },
      { id: "dev", name: "Dev", role: "parent booking the hall for his daughter's birthday", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "marion", text: "Pilbury Village Hall, bookings line — Marion speaking." },
      { id: "s2", speakerId: "dev", text: "Hello — I'd like to hire the hall for my daughter's birthday party, if it's free." },
      { id: "s3", speakerId: "marion", text: "How lovely. Let me open the diary — what date were you thinking?" },
      { id: "s4", speakerId: "dev", text: "A Sunday, ideally — the ninth of June, if the hall is open then?" },
      { id: "s5", speakerId: "marion", text: "The ninth of June… yes, that's free. We hire by session — morning, afternoon or evening. Which would suit you?" },
      { id: "s6", speakerId: "dev", text: "Afternoon, please — two till five was what the website said." },
      { id: "s7", speakerId: "marion", text: "That's right, two to five. Can I take your name for the booking form?" },
      { id: "s8", speakerId: "dev", text: "Dev Malhotra — that's M-A-L-H-O-T-R-A." },
      { id: "s9", speakerId: "marion", text: "Thank you, Mr Malhotra. And roughly how many children are coming?" },
      { id: "s10", speakerId: "dev", text: "About eighteen, plus a dozen or so grown-ups." },
      { id: "s11", speakerId: "marion", text: "That's fine — the main hall holds sixty. The afternoon session is thirty-eight pounds, plus a refundable deposit of fifteen, which you get back after the party.", pauseAfterMs: 300 },
      { id: "s12", speakerId: "dev", text: "That all sounds very reasonable. Is there anything we should know about using the place?" },
      { id: "s13", speakerId: "marion", text: "The kitchen has cups and a big urn for hot drinks, and the chairs and tables live in the side room — carry through whatever you need. All we ask is a quick sweep of the floor before you lock up, and please take your rubbish home with you." },
      { id: "s14", speakerId: "dev", text: "Easy enough. And parking — will guests be able to park?" },
      { id: "s15", speakerId: "marion", text: "There's a gravel area behind the hall; the lane out front must stay clear for the fire service." },
      { id: "s16", speakerId: "dev", text: "Perfect. Shall I pay the deposit over the phone?" },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–6",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Pilbury Village Hall — children's party booking" }],
          [{ kind: "text", text: "Name: Dev " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Date: Sunday " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Session: " }, { kind: "blank", no: 3 }, { kind: "text", text: " (2–5 p.m.)" }],
          [{ kind: "text", text: "Children attending: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Hire charge: £" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Refundable deposit: £" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "Malhotra", alternatives: [], numbers: false },
          { no: 2, answer: "9 June", alternatives: ["June 9", "9th June"], numbers: true },
          { no: 3, answer: "afternoon", alternatives: [], numbers: false },
          { no: 4, answer: "18", alternatives: ["eighteen"], numbers: true },
          { no: 5, answer: "38", alternatives: ["thirty-eight"], numbers: true },
          { no: 6, answer: "15", alternatives: ["fifteen"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "detail"],
          keywords: ["Malhotra", "ninth of June", "afternoon", "eighteen", "thirty-eight", "fifteen"],
          explanation:
            "Malhotra is spelt out letter by letter, the party falls on the ninth of June, and the session is the afternoon block from two to five. Eighteen children are expected, the hire fee is thirty-eight pounds, and the refundable deposit adds another fifteen.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.",
        questions: [
          "7. What does Marion ask hosts to do to the floor before leaving?",
          "8. Where should party guests park?",
        ],
        accepted: [
          ["sweep the floor", "a quick sweep", "sweep it", "sweep"],
          ["behind the hall", "the gravel area", "behind the hall at the back"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["sweep of the floor", "gravel area"],
          explanation:
            "Marion's only house rule inside the hall is a quick sweep of the floor before locking up, with the rubbish taken home. For parking, guests use the gravel area behind the hall, because the lane out front must stay clear for the fire service.",
        },
      },
    ],
    transcriptNote:
      "The numbers to keep apart are the thirty-eight-pound hire fee and the fifteen-pound refundable deposit. Everything else runs gently in booking order: date, session, name, numbers, then the house rules about sweeping and parking.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-secondhand-bike",
    title: "Buying a second-hand bicycle",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear a conversation between a buyer and the private seller of a second-hand bicycle, advertised online, meeting to inspect the bike. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "colin", name: "Colin", role: "private seller of the Ridgecrest bicycle advertised online", accent: "british" },
      { id: "theo", name: "Theo", role: "buyer inspecting the advertised bicycle", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "colin", text: "You must be Theo — come through to the garage, mind the step." },
      { id: "s2", speakerId: "theo", text: "Thanks, Colin. That's the Ridgecrest from the photos, all right — you hear horror stories about private sellers, but this one looks well kept." },
      { id: "s3", speakerId: "colin", text: "Second owner, me, and every receipt is in that folder — services, a new chain, the lot." },
      { id: "s4", speakerId: "theo", text: "It looks about right for me. What's the frame size — seventeen inches?" },
      { id: "s5", speakerId: "colin", text: "Eighteen — and it's an eight-speed, hub gears, so there's precious little to go wrong. Go on, swing a leg over.", pauseAfterMs: 300 },
      { id: "s6", speakerId: "theo", text: "Oh, that feels right. And all of this comes with it, does it — the pump and the lock?" },
      { id: "s7", speakerId: "colin", text: "The mini pump, the D-lock and the front light. I'm keeping the rear one — it's going straight onto the new e-bike." },
      { id: "s8", speakerId: "theo", text: "Fair enough. Anything I should know before I hand over any money?" },
      { id: "s9", speakerId: "colin", text: "Only that the rear brake squeals a touch in the damp; a new set of pads sorts it out, and they're a fiver." },
      { id: "s10", speakerId: "theo", text: "Okay. The ad says ninety-five — would you take seventy for it?", pauseAfterMs: 300 },
      { id: "s11", speakerId: "colin", text: "Seventy's a bit cheeky, my friend. Call it eighty-five and I'll add the saddle bag." },
      { id: "s12", speakerId: "theo", text: "Done — eighty-five it is. Shall I book it into my local shop for a once-over, or…?", pauseAfterMs: 300 },
      { id: "s13", speakerId: "colin", text: "No need — I'll tune it myself before you collect it. I spent six years as a bike mechanic, back in the day." },
      { id: "s14", speakerId: "theo", text: "Even better — tuned by the man himself. Could I come back for it Friday evening, at about half five?" },
      { id: "s15", speakerId: "colin", text: "Half five Friday — I'll have it gleaming by then." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–5",
        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Second-hand Ridgecrest — buyer's inspection notes" }],
          [{ kind: "text", text: "Frame size: " }, { kind: "blank", no: 1 }, { kind: "text", text: " inches" }],
          [{ kind: "text", text: "Gears: " }, { kind: "blank", no: 2 }, { kind: "text", text: " speed (hub)" }],
          [{ kind: "text", text: "Included: pump, D-lock and " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Fault: squeaky " }, { kind: "blank", no: 4 }, { kind: "text", text: " (new pads needed)" }],
          [{ kind: "text", text: "Price agreed: £" }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "18", alternatives: ["eighteen"], numbers: true },
          { no: 2, answer: "8", alternatives: ["eight"], numbers: true },
          { no: 3, answer: "front light", alternatives: [], numbers: false },
          { no: 4, answer: "rear brake", alternatives: [], numbers: false },
          { no: 5, answer: "85", alternatives: ["eighty-five"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "corrections", "mention-lure", "detail"],
          keywords: ["Eighteen", "eight-speed", "front light", "rear brake", "eighty-five", "ninety-five"],
          trap: {
            family: "mention-lure",
            lure: ["95", "ninety-five"],
            note: "Ninety-five is only the advertisement price; the deal is struck at eighty-five, so the printed blank wants the money that actually changes hands.",
          },
          explanation:
            "Colin corrects Theo's guess of seventeen inches to an eighteen-inch frame, and the bike is an eight-speed with hub gears. The sale includes the mini pump, the D-lock and the front light, the rear brake needs new pads, and the agreed price is eighty-five pounds — not the ninety-five in the advertisement.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. What is Colin replacing the bike with?",
          "7. When will Theo collect the bike?",
          "8. Who will tune the bike up before collection?",
        ],
        accepted: [
          ["an e-bike", "e-bike", "the e-bike", "a new e-bike"],
          ["Friday evening", "Friday", "on Friday"],
          ["Colin", "the seller", "the owner", "the second owner"],
        ],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["e-bike", "Friday evening", "I'll tune it myself"],
          trap: {
            family: "attribution",
            lure: ["local shop"],
            note: "Theo's local shop sounds like the natural answer, but the tuning stays with the seller — match the job to the speaker who claims it.",
          },
          explanation:
            "Colin's new machine is an e-bike, which is why the old bike and its rear light are for sale. Theo collects on Friday evening at about half five, and it is Colin — a former bike mechanic — who tunes the bike up himself, not the buyer's local shop.",
        },
      },
    ],
    transcriptNote:
      "Two numbers nearly collide with the answers: Theo's guess of seventeen inches and the advertised ninety-five pounds. The frame is eighteen and the agreed price eighty-five — and the tuning, despite the local-shop suggestion, stays with Colin.",
    source: BANK_SOURCE_NOTE,
  },
];
