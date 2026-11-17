/**
 * Audio question bank — Part 1 exercises (everyday conversations and
 * practical information). PROMPT 44 Part 5.
 *
 * Two speakers in a transactional everyday context; names, numbers and
 * dates at dictation speed; form-style completion dominating. Every
 * recording is original TalkSy practice material.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const part1Exercises: BankExercise[] = [
  {
    slug: "ielts-lb-p1-library",
    title: "Joining the central library",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 7,
    accentMix: ["british", "australian"],
    intro:
      "You will hear a telephone conversation between a caller who has just moved to a town and a librarian at the central library. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 6.",
    speakers: [
      { id: "lib", name: "Librarian", role: "membership desk at Ashford Central Library", accent: "british" },
      { id: "marta", name: "Marta", role: "new resident joining the library", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "lib", text: "Ashford Central Library, membership desk — how can I help?" },
      { id: "s2", speakerId: "marta", text: "Hi — I'd like to join, please. I've just moved to the area." },
      { id: "s3", speakerId: "lib", text: "Of course. Joining is free for the standard card — I'll just take a few details. Can I start with your name?" },
      { id: "s4", speakerId: "marta", text: "It's Marta Whitfield — that's W-H-I-T-F-I-E-L-D." },
      { id: "s5", speakerId: "lib", text: "Whitfield, thank you. And a contact telephone number?" },
      { id: "s6", speakerId: "marta", text: "Let me read it out — it's oh seven nine four six, double two, one three five.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "lib", text: "Got it. Now, we run two card types. The full card covers twenty loans at a time and the magazines; the standard card covers ten loans." },
      { id: "s8", speakerId: "marta", text: "Mm, I mostly read novels — the standard one's fine. Actually, no — hang on, I borrow audiobooks for the commute. Make it the full one." },
      { id: "s9", speakerId: "lib", text: "The full card carries a one-off fee of three pounds fifty, I'm afraid. The standard card is completely free." },
      { id: "s10", speakerId: "marta", text: "Oh! In that case I'll stick with the standard after all, thanks.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "lib", text: "The standard card it is. When would you like to collect it? We're open every day except Sunday." },
      { id: "s12", speakerId: "marta", text: "I'm away until the sixteenth, so any day after that — the twenty-third of April would suit me." },
      { id: "s13", speakerId: "lib", text: "The twenty-third — that's a Thursday. We open at half past nine, and you'll need one proof of address." },
      { id: "s14", speakerId: "marta", text: "No problem. One more thing — does the card come with anything else?" },
      { id: "s15", speakerId: "lib", text: "You'll get a welcome leaflet with the opening times, and one free reservation — that's a single held item of your choice from any branch." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–4",
        instruction: "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Ashford Central Library — new membership" }],
          [{ kind: "text", text: "Name: Marta" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Card type:" }, { kind: "blank", no: 2 }, { kind: "text", text: "(free of charge)" }],
          [{ kind: "text", text: "Contact number:" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Collection date:" }, { kind: "blank", no: 4 }, { kind: "text", text: "(bring one proof of address)" }],
        ],
        blanks: [
          { no: 1, answer: "Whitfield", alternatives: ["whitfield"], numbers: false },
          { no: 2, answer: "standard", alternatives: [] },
          { no: 3, answer: "07946 22135", alternatives: ["0794622135"], numbers: true },
          { no: 4, answer: "23 April", alternatives: ["April 23", "23rd April"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["whitfield", "standard", "oh seven nine four six", "twenty-third"],
          trap: {
            family: "correction",
            lure: ["full"],
            note: "Marta upgrades to the full card, then downgrades to the standard card once the fee appears — the second choice carries the mark.",
          },
          explanation:
            "The form follows the conversation in order. Whitfield is dictated letter by letter; the card type is corrected from full back to standard after the fee is mentioned; the phone number is read out digit group by digit; and the collection date follows the caller saying she is away until the sixteenth, so the twenty-third is the first date she offers that actually works.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 5–6",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "5. What must Marta bring to collect her card?",
          "6. Besides the leaflet, what does a new member receive?",
        ],
        accepted: [
          ["proof of address", "one proof of address", "address proof"],
          ["a free reservation", "free reservation", "one free reservation", "reservation"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["proof of address", "reservation"],
          explanation:
            "Question 5 needs the librarian's closing condition — one proof of address. Question 6 asks what comes beside the leaflet, which is the single free reservation the librarian describes as one held item of your choice from any branch.",
        },
      },
    ],
    transcriptNote:
      "Notice the two corrections: Marta switches card type twice once the fee appears, and her date depends on hearing that she is away until the sixteenth. Both answers sit AFTER the correction, never before it.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-course-booking",
    title: "Booking a weekend pottery course",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 6,
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a caller and an enrolment officer at an arts centre about booking a weekend pottery course. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "tom", name: "Tom", role: "enrolment officer at the Westburn Arts Centre", accent: "british" },
      { id: "diane", name: "Diane Fenwick", role: "caller booking a weekend pottery course", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "tom", text: "Good morning, Westburn Arts Centre, enrolment line — Tom speaking. How can I help?" },
      { id: "s2", speakerId: "diane", text: "Hello! I'd like to book a place on the weekend pottery course, if there's still room." },
      { id: "s3", speakerId: "tom", text: "Let me look… yes, we've got spaces. I'll take a few details first — can I start with your name?" },
      { id: "s4", speakerId: "diane", text: "It's Diane Fenwick. That's F-E-N-W-I-C-K." },
      { id: "s5", speakerId: "tom", text: "Fenwick, got it. And have you done much pottery before, Diane?" },
      { id: "s6", speakerId: "diane", text: "Once, at a friend's birthday party, years ago. I'm very much a beginner." },
      { id: "s7", speakerId: "tom", text: "That's fine — the beginners group will suit you down to the ground. We run an improvers class as well, but that one's by invitation." },
      { id: "s8", speakerId: "diane", text: "Right, beginners it is. Which day does it run? I work most Saturdays, I'm afraid." },
      { id: "s9", speakerId: "tom", text: "The pottery group meets on Saturdays — no, hang on, sorry, that's the jewellery class. Pottery's on a Sunday morning." },
      { id: "s10", speakerId: "diane", text: "Oh, Sunday's even better for me. And what time does it start?" },
      { id: "s11", speakerId: "tom", text: "Nine fifteen, and we run through to half past twelve. The kettle's on from nine if you're keen." },
      { id: "s12", speakerId: "diane", text: "Perfect. And how much is the whole course?" },
      { id: "s13", speakerId: "tom", text: "Eighty-five pounds for the six weeks, and that covers all your clay and firing." },
      { id: "s14", speakerId: "diane", text: "That's reasonable. Do I need to bring anything along?" },
      { id: "s15", speakerId: "tom", text: "Just an apron — something you don't mind getting muddy. Everything else is provided." },
      { id: "s16", speakerId: "diane", text: "Easy enough. And where does the class actually meet?" },
      { id: "s17", speakerId: "tom", text: "We're in the studio — through the side gate, first door on the right. There'll be a sandwich board out on the path." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Westburn Arts Centre — weekend pottery course" }],
          [{ kind: "text", text: "Name: Diane " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Course level: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Day of the class: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Start time: " }, { kind: "blank", no: 4 }, { kind: "text", text: " a.m." }],
          [{ kind: "text", text: "Course fee: £" }, { kind: "blank", no: 5 }, { kind: "text", text: " (six weeks)" }],
        ],
        blanks: [
          { no: 1, answer: "Fenwick", alternatives: [], numbers: false },
          { no: 2, answer: "Beginners", alternatives: ["beginner"], numbers: false },
          { no: 3, answer: "Sunday", alternatives: [], numbers: false },
          { no: 4, answer: "9.15", alternatives: ["9:15", "nine fifteen"], numbers: true },
          { no: 5, answer: "85", alternatives: ["eighty-five", "85 pounds"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["Fenwick", "beginners", "Sunday", "nine fifteen", "eighty-five"],
          trap: {
            family: "correction",
            lure: ["Saturday", "Saturdays"],
            note: "Tom first attaches Saturday to the pottery class, then hands it to the jewellery class — the day that scores is the corrected value, Sunday.",
          },
          explanation:
            "Fenwick is dictated letter by letter in the caller's second turn. The level follows her calling herself a beginner, the day is the corrected Sunday rather than the Saturday first offered, the time is nine fifteen — not nine, when the kettle goes on — and the fee is eighty-five pounds for the six weeks.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. What must learners bring to the class?",
          "7. Where does the class meet?",
        ],
        accepted: [
          ["an apron", "apron"],
          ["the studio", "studio"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["apron", "studio", "side gate"],
          explanation:
            "Tom's only requirement is an apron that can get muddy, since everything else is provided. The class meets in the studio, reached through the side gate, first door on the right, where the sandwich board will be standing.",
        },
      },
    ],
    transcriptNote:
      "One correction to catch: Saturday is first attached to the pottery class, then reassigned to the jewellery class, so Sunday is the day that scores. The kettle goes on at nine, but the class itself starts at nine fifteen.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-insurance",
    title: "Claiming for a damaged laptop",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 7,
    accentMix: ["british", "north-american"],
    intro:
      "You will hear a telephone conversation between a customer and an insurance agent about a claim for a damaged laptop. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "priya", name: "Priya", role: "claims agent on the Hollis Insurance helpline", accent: "british" },
      { id: "dan", name: "Dan Brooks", role: "customer reporting a cracked laptop screen", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "priya", text: "Hollis Insurance, claims line — this is Priya speaking. How can I help?" },
      { id: "s2", speakerId: "dan", text: "Hi. Yeah, I need to report a damaged laptop. I dropped my bag getting off the bus, and now the screen's cracked right across one corner." },
      { id: "s3", speakerId: "priya", text: "I'm sorry to hear that. Let's open a claim — can you read me your policy reference? It's at the top of the letter we sent you." },
      { id: "s4", speakerId: "dan", text: "Sure, give me a second… here it is. Six two four, oh nine one." },
      { id: "s5", speakerId: "priya", text: "Six two four, oh nine one — thank you. And the laptop itself: what model is it?" },
      { id: "s6", speakerId: "dan", text: "It's an Orbit Pro. About a year old, still under warranty, if that matters." },
      { id: "s7", speakerId: "priya", text: "Not for this claim, no. When did you buy it?" },
      { id: "s8", speakerId: "dan", text: "In March, just before a work trip." },
      { id: "s9", speakerId: "priya", text: "March — noted. And roughly what did you pay for it?" },
      { id: "s10", speakerId: "dan", text: "Eight hundred and thirteen dollars. I've still got the receipt somewhere." },
      { id: "s11", speakerId: "priya", text: "So that's eight hundred and thirty…" },
      { id: "s12", speakerId: "dan", text: "Thirteen, sorry — eight one three." },
      { id: "s13", speakerId: "priya", text: "Eight hundred and thirteen, my apologies. Now, I should be clear about what your policy covers: we don't cover liquid damage — spills and the like — and theft from a vehicle is excluded as well. A cracked screen from a drop, though, is exactly what the accidental damage clause is for.", pauseAfterMs: 300 },
      { id: "s14", speakerId: "dan", text: "Good, because that's honestly all it is. Should I get a quote first? There's a repair place near my office called ByteFix." },
      { id: "s15", speakerId: "priya", text: "Hold that thought — I'll add ByteFix to the file as your preferred shop, but for a screen claim we arrange everything ourselves." },
      { id: "s16", speakerId: "dan", text: "Okay. So what happens next?" },
      { id: "s17", speakerId: "priya", text: "You could drop the laptop at a service point, but the easier route is a courier: they'll collect it from your door on Thursday, and you pay the ninety-dollar excess to the driver. We don't replace machines outright when a screen is repairable, just so you know." },
      { id: "s18", speakerId: "dan", text: "No, that's fine — Thursday works. Thanks for your help." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Hollis Insurance — laptop damage claim" }],
          [{ kind: "text", text: "Policy reference: " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Laptop model: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Purchased (month): " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Price paid: $" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Preferred repair shop: " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "624091", alternatives: [], numbers: true },
          { no: 2, answer: "Orbit Pro", alternatives: [], numbers: false },
          { no: 3, answer: "March", alternatives: [], numbers: false },
          { no: 4, answer: "813", alternatives: ["813 dollars"], numbers: true },
          { no: 5, answer: "ByteFix", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "similar-sound", "spelling", "detail"],
          keywords: ["six two four", "Orbit Pro", "March", "eight hundred and thirteen", "ByteFix"],
          trap: {
            family: "similar-sound",
            lure: ["830", "eight hundred and thirty"],
            note: "Priya reads the price back as eight hundred and thirty and is corrected to thirteen — the -teen and -ty endings are the classic pair to confuse, and the confirmed figure is eight hundred and thirteen.",
          },
          explanation:
            "The reference is dictated digit by digit as six two four, oh nine one. The model is the Orbit Pro, the month is March, and the price is the corrected eight hundred and thirteen dollars after the read-back slips to thirty. ByteFix is the repair shop Dan names near his office.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dan's policy cover?",
        options: [
          "Liquid damage, such as spills",
          "A screen that cracks in an accidental drop",
          "A laptop stolen from a vehicle",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["liquid damage", "cracked screen", "theft"],
          trap: {
            family: "negation",
            lure: ["liquid damage", "theft from a vehicle"],
            note: "Both lure phrases are spoken only to be ruled out — 'we don't cover liquid damage' and 'theft from a vehicle is excluded' — so an option quoting them is the polite-refusal trap.",
          },
          explanation:
            "Priya names liquid damage and vehicle theft purely to exclude them, then confirms that a cracked screen from a drop is exactly what the accidental damage clause covers. The correct option paraphrases the one thing that is included.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What will happen next?",
        options: [
          "Dan will drop the laptop at a service point.",
          "A courier will pick the laptop up from Dan's address.",
          "The insurer will post Dan a brand-new laptop.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["courier", "service point", "excess"],
          trap: {
            family: "mention-lure",
            lure: ["service point"],
            note: "The service point is raised only as the option Dan will not take — the actual plan is courier collection from his door, with the excess paid to the driver.",
          },
          explanation:
            "Although a service-point drop is mentioned, Priya's plan is a courier collecting the laptop from Dan's door on Thursday, with the ninety-dollar excess paid to the driver, and no replacement is offered while the screen is repairable.",
        },
      },
    ],
    transcriptNote:
      "Two designed traps: the price read-back, where thirty is corrected to thirteen (813 dollars), and the coverage list, where liquid damage and vehicle theft are named only to be excluded. The service point is mentioned and immediately overtaken by the courier.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-flat-query",
    title: "Flat hunting at the letting agency",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    accentMix: ["australian"],
    intro:
      "You will hear a conversation between a renter and a letting agent about three flats available to rent. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 6.",
    speakers: [
      { id: "bonnie", name: "Bonnie", role: "letting agent at Ridgeway Rentals", accent: "australian" },
      { id: "josh", name: "Josh", role: "renter looking for a two-bedroom flat", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "bonnie", text: "Ridgeway Rentals, Bonnie speaking — what can I do for you?" },
      { id: "s2", speakerId: "josh", text: "G'day. I'm after a flat to rent — nothing flash, but I need to move by the end of the month." },
      { id: "s3", speakerId: "bonnie", text: "No worries. How many bedrooms are you chasing?" },
      { id: "s4", speakerId: "josh", text: "Two, definitely. I work from home a couple of days a week, so the second room would have to be an office." },
      { id: "s5", speakerId: "bonnie", text: "Easy. I've got three on the books right now. The first is in Marsden Street — two bedrooms, four hundred and thirty a week, and it's a ten-minute walk to the station." },
      { id: "s6", speakerId: "josh", text: "That sounds alright. What else is there?" },
      { id: "s7", speakerId: "bonnie", text: "There's one up on Cordelia Street, five minutes from the station, and it's got a rooftop pool — a real showpiece for that block. It comes in at four hundred and seventy-five a week." },
      { id: "s8", speakerId: "josh", text: "Mm, the pool's tempting, I won't lie. How many bedrooms, though?" },
      { id: "s9", speakerId: "bonnie", text: "Just the one, I'm afraid." },
      { id: "s10", speakerId: "josh", text: "Yeah, that's out, then. A swim's nice, but the office matters more." },
      { id: "s11", speakerId: "bonnie", text: "Fair enough. The last one's on Hill Street — top floor, above the bakery. Two bedrooms again, and it's the cheapest of the lot at three hundred and ninety-five." },
      { id: "s12", speakerId: "josh", text: "Above a bakery? Honestly, the smell alone would be worth the stairs. How far is it from the station?" },
      { id: "s13", speakerId: "bonnie", text: "That's the catch — it's a fifteen-minute walk. But you get a decent balcony out the back, and neither of the others has one of those." },
      { id: "s14", speakerId: "josh", text: "You know what, that beats a pool. Can I look through it this afternoon?" },
      { id: "s15", speakerId: "bonnie", text: "Sure — I'll book you in at four. Bring photo ID and a couple of payslips." },
      { id: "s16", speakerId: "josh", text: "Will do. Thanks, Bonnie." },
    ],
    questions: [
      {
        id: "q1",
        type: "table",
        label: "Questions 1–4",
        instruction: "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Ridgeway Rentals — flats to view this week" }],
          [{ kind: "text", text: "Flat" }, { kind: "text", text: " · Weekly rent" }, { kind: "text", text: " · Bedrooms" }, { kind: "text", text: " · Walk to station" }],
          [{ kind: "text", text: "Marsden Street — rent: $" }, { kind: "blank", no: 1 }, { kind: "text", text: "; bedrooms: 2; walk: 10 min" }],
          [{ kind: "text", text: "Cordelia Street — rent: $475; bedrooms: " }, { kind: "blank", no: 2 }, { kind: "text", text: "; walk: 5 min" }],
          [{ kind: "text", text: "Hill Street — rent: $" }, { kind: "blank", no: 3 }, { kind: "text", text: "; bedrooms: 2; walk: " }, { kind: "blank", no: 4 }, { kind: "text", text: " min" }],
        ],
        blanks: [
          { no: 1, answer: "430", alternatives: ["$430"], numbers: true },
          { no: 2, answer: "1", alternatives: ["one"], numbers: true },
          { no: 3, answer: "395", alternatives: ["$395"], numbers: true },
          { no: 4, answer: "15", alternatives: ["fifteen"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["Marsden Street", "four hundred and thirty", "just the one", "three hundred and ninety-five", "fifteen-minute"],
          explanation:
            "The Marsden Street rent is quoted directly as four hundred and thirty. Cordelia's bedroom count only surfaces after Josh asks, when Bonnie answers 'just the one'. Hill Street is the cheapest of the lot at three hundred and ninety-five, and its fifteen-minute walk is the catch that the balcony makes up for.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 5–6",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "5. What will Josh use the second bedroom for?",
          "6. What feature of the Hill Street flat makes up for the longer walk?",
        ],
        accepted: [
          ["an office", "a home office", "office", "home office"],
          ["the balcony", "a balcony", "balcony"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["office", "balcony", "second room"],
          trap: {
            family: "mention-lure",
            lure: ["rooftop pool"],
            note: "The rooftop pool belongs to the Cordelia Street flat, which Josh rejects for having only one bedroom — don't carry it across to the Hill Street question.",
          },
          explanation:
            "Josh works from home a couple of days a week, so the second room has to be an office. The Hill Street flat's compensating feature is the balcony out the back — the rooftop pool belongs to the flat he turned down.",
        },
      },
    ],
    transcriptNote:
      "Watch the rooftop pool: it belongs to the Cordelia Street flat, which is rejected for having just one bedroom. The Hill Street flat's selling point is the balcony out the back.",
    source: BANK_SOURCE_NOTE,
  },
];
