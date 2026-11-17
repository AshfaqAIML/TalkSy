/**
 * PROMPT 54 question-bank expansion — Part 1, batch A.
 *
 * Seven original Part 1 recordings: everyday social/transactional
 * two-speaker phone and face-to-face conversations, written in the style of
 * the test but 100% TalkSy practice material. Each carries a completion
 * group plus a short-answer group, with designed traps, dictated proper
 * names and naturally read numbers, dates and prices.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP1AExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p1-dentist",
    title: "Booking a dental check-up",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 5,
    topic: "health",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a new patient and a receptionist at a dental surgery about booking a first check-up. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "rec", name: "Rachel", role: "receptionist at Meadowbank Dental Surgery", accent: "british" },
      { id: "pat", name: "Greta Pryce", role: "new patient booking a first check-up", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "rec", text: "Meadowbank Dental Surgery, good afternoon — Rachel speaking." },
      { id: "s2", speakerId: "pat", text: "Hi. I've just moved to the area and I'd like to book a check-up. I'm not registered with a dentist here yet." },
      { id: "s3", speakerId: "rec", text: "That's no problem, we're taking new patients this month. I'll take a few details and find you a slot." },
      { id: "s4", speakerId: "pat", text: "Great. My name's Greta Pryce — that's P-R-Y-C-E." },
      { id: "s5", speakerId: "rec", text: "Pryce, got it. And the best number to reach you on in the daytime?" },
      { id: "s6", speakerId: "pat", text: "Try my mobile — it's oh one two two three, six four eight, two nine oh.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "rec", text: "Thank you. Our dentist, Dr Kapoor, works Tuesdays to Fridays." },
      { id: "s8", speakerId: "pat", text: "Could I have a late afternoon, please? I'm at work until five most days." },
      { id: "s9", speakerId: "rec", text: "Let's see… Thursday the twenty-first had a quarter-to-five, but that one's just gone, I'm afraid. We can still do half past five that day, or ten o'clock Friday morning.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "pat", text: "Half past five on Thursday would suit me." },
      { id: "s11", speakerId: "rec", text: "Booked — the twenty-first at five thirty, twenty minutes for a first check-up." },
      { id: "s12", speakerId: "pat", text: "And what does that cost? I haven't got an NHS number yet — my paperwork's still in a box somewhere." },
      { id: "s13", speakerId: "rec", text: "Without the number it's twenty-six pounds for a first check-up; once you're registered that drops to nineteen fifty." },
      { id: "s14", speakerId: "pat", text: "I'll dig the paperwork out. Do I need to bring anything else?" },
      { id: "s15", speakerId: "rec", text: "Just a list of any medicines you take, and please arrive ten minutes early to fill the forms in." },
      { id: "s16", speakerId: "pat", text: "Will do — thanks very much." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Meadowbank Dental Surgery — new patient booking" }],
          [{ kind: "text", text: "Name: Greta " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Daytime number: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Appointment — day: " }, { kind: "blank", no: 3 }, { kind: "text", text: "; time: " }, { kind: "blank", no: 4 }, { kind: "text", text: " p.m." }],
          [{ kind: "text", text: "First check-up fee: £" }, { kind: "blank", no: 5 }, { kind: "text", text: " (before NHS registration)" }],
        ],
        blanks: [
          { no: 1, answer: "Pryce", alternatives: [], numbers: false },
          { no: 2, answer: "01223648290", alternatives: ["01223 648290"], numbers: true },
          { no: 3, answer: "Thursday", alternatives: [], numbers: false },
          { no: 4, answer: "5.30", alternatives: ["5:30", "five thirty"], numbers: true },
          { no: 5, answer: "26", alternatives: ["twenty-six"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "detail", "paraphrase"],
          keywords: ["Pryce", "oh one two two three", "half past five", "Thursday", "twenty-six"],
          trap: {
            family: "mention-lure",
            lure: ["quarter-to-five", "4.45"],
            note: "The quarter-to-five slot is named and then taken off the table — the time that scores is the half-past-five replacement offered in the same breath.",
          },
          explanation:
            "Pryce is dictated letter by letter in the caller's opening details, and the mobile number arrives in three groups with 'oh' doing duty for zero. The quarter-to-five is offered and then withdrawn, so the appointment lands on half past five — five thirty on the printed form. The fee is the pre-registration twenty-six pounds, not the nineteen-fifty that applies once Greta is registered.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.",
        questions: [
          "6. What must Greta bring to the appointment?",
          "7. How early should she arrive at the surgery?",
        ],
        accepted: [
          ["a list of medicines", "list of medicines", "a list of any medicines", "medicines"],
          ["ten minutes early", "ten minutes", "10 minutes early"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["medicines", "ten minutes early"],
          explanation:
            "Question 6 needs Rachel's closing condition — a list of any medicines Greta takes. Question 7 needs the ten minutes early she asks for, so the forms can be filled in before the dentist sees her.",
        },
      },
    ],
    transcriptNote:
      "The quarter-to-five slot is offered and immediately withdrawn, so the booking time is the half past five that replaces it. The cheaper nineteen-fifty rate only applies once Greta is registered, which is why the form carries twenty-six.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-sports-centre",
    title: "Joining the community sports centre",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 6,
    topic: "society",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a caller and a membership officer at a community sports centre about joining. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "owen", name: "Owen", role: "membership officer at Hartsfield Sports Centre", accent: "british" },
      { id: "becca", name: "Becca", role: "caller comparing membership options", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "owen", text: "Hartsfield Sports Centre, membership desk — Owen speaking." },
      { id: "s2", speakerId: "becca", text: "Hi there. I've just started a job round the corner and I'd like to join. What memberships do you do?" },
      { id: "s3", speakerId: "owen", text: "Two kinds. The off-peak covers the gym and the pool, weekdays nine to four; the all-inclusive adds evenings, weekends and the fitness classes." },
      { id: "s4", speakerId: "becca", text: "I'm at my desk until six, so evenings and weekends are honestly the only slots I'd use." },
      { id: "s5", speakerId: "owen", text: "Right — the off-peak wouldn't be much use to you, then. Let's look at the all-inclusive instead." },
      { id: "s6", speakerId: "becca", text: "How much is that a month?" },
      { id: "s7", speakerId: "owen", text: "Thirty-nine a month, classes included. The off-peak would be twenty-four, if that changes your mind." },
      { id: "s8", speakerId: "becca", text: "It doesn't. Is there a joining fee on top?" },
      { id: "s9", speakerId: "owen", text: "There's normally a fifteen-pound admin charge, but we waive it if you pay by direct debit.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "becca", text: "Then direct debit it is. Can I start on Monday the twelfth?" },
      { id: "s11", speakerId: "owen", text: "You can — I'll put you down for an induction at six thirty: a quick tour and a chat about your goals." },
      { id: "s12", speakerId: "becca", text: "Sounds good. What do I need to bring?" },
      { id: "s13", speakerId: "owen", text: "One passport photo for your member card, plus your bank details for the direct debit." },
      { id: "s14", speakerId: "becca", text: "That's easy enough. Is the sauna included, or is that extra?" },
      { id: "s15", speakerId: "owen", text: "The sauna's part of every membership — the only paid extras are massage and personal training, so don't worry about that." },
      { id: "s16", speakerId: "becca", text: "Great — thanks, Owen. See you Monday." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–6",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Hartsfield Sports Centre — new membership" }],
          [{ kind: "text", text: "Membership type: " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Monthly fee: £" }, { kind: "blank", no: 2 }, { kind: "text", text: " (classes included)" }],
          [{ kind: "text", text: "Admin charge: £" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "First session — day: " }, { kind: "blank", no: 4 }, { kind: "text", text: "; time: " }, { kind: "blank", no: 5 }, { kind: "text", text: " p.m." }],
          [{ kind: "text", text: "Bring: " }, { kind: "blank", no: 6 }, { kind: "text", text: " and bank details" }],
        ],
        blanks: [
          { no: 1, answer: "all-inclusive", alternatives: [], numbers: false },
          { no: 2, answer: "39", alternatives: ["thirty-nine", "£39"], numbers: true },
          { no: 3, answer: "15", alternatives: ["fifteen"], numbers: true },
          { no: 4, answer: "Monday", alternatives: [], numbers: false },
          { no: 5, answer: "6.30", alternatives: ["6:30", "six thirty"], numbers: true },
          { no: 6, answer: "passport photo", alternatives: ["photo"], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["all-inclusive", "thirty-nine", "fifteen-pound", "Monday", "six thirty", "passport photo"],
          explanation:
            "Becca works until six, so the off-peak window is useless and the all-inclusive is the only membership that fits, at thirty-nine a month with the classes thrown in. The fifteen-pound admin charge stands unless it is waived for direct debit payers. The induction is booked for Monday at six thirty, and the one item to bring is a passport photo.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "7. Which payment method removes the admin charge?",
          "8. Which facility comes with every membership at no extra cost?",
        ],
        accepted: [
          ["direct debit", "by direct debit"],
          ["the sauna", "sauna"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["direct debit", "sauna"],
          explanation:
            "The admin charge disappears for members who pay by direct debit, which is how Becca settles it. The sauna belongs to every membership at no extra cost — only massage and personal training are ever charged separately.",
        },
      },
    ],
    transcriptNote:
      "The twenty-four off-peak figure is quoted purely for comparison; the membership that gets filled in is the all-inclusive at thirty-nine. The fifteen-pound admin charge is real but waived under direct debit, which is how most members end up paying.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-lost-property",
    title: "Reporting lost property at a bus station",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "everyday",
    accentMix: ["british", "australian"],
    intro:
      "You will hear a telephone conversation between a traveller and the lost property desk at a bus station. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "nadia", name: "Nadia", role: "clerk on the Northgate Bus Station lost property desk", accent: "british" },
      { id: "tim", name: "Tim Arnott", role: "traveller reporting a bag left on a coach", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "nadia", text: "Northgate Bus Station, lost property desk — Nadia speaking." },
      { id: "s2", speakerId: "tim", text: "G'day. I think I left my bag on one of your coaches this morning, coming down from Winterton." },
      { id: "s3", speakerId: "nadia", text: "Let's log it, then. What sort of bag are we looking for?" },
      { id: "s4", speakerId: "tim", text: "It's a canvas backpack — navy, I'd say… no, sorry, it's dark green. My wife bought it, and I always call it the wrong colour.", pauseAfterMs: 300 },
      { id: "s5", speakerId: "nadia", text: "Dark green canvas — got it. Anything that'd pick it out at a glance?" },
      { id: "s6", speakerId: "tim", text: "There's a small koala stitched on the front pocket." },
      { id: "s7", speakerId: "nadia", text: "That'll do it. And what was inside, roughly?" },
      { id: "s8", speakerId: "tim", text: "Clothes, sunglasses and a phone charger. Nothing valuable, though the sunglasses were pricey." },
      { id: "s9", speakerId: "nadia", text: "Which service was it? The Winterton coaches run every half hour." },
      { id: "s10", speakerId: "tim", text: "The ten past eight one, I think — we rolled in around quarter to eleven." },
      { id: "s11", speakerId: "nadia", text: "I'll check with that driver. Best number for the daytime?" },
      { id: "s12", speakerId: "tim", text: "Oh seven five five oh, six two nine, one four three." },
      { id: "s13", speakerId: "nadia", text: "Thank you. And your name, spelled out?" },
      { id: "s14", speakerId: "tim", text: "Tim Arnott — A-R-N-O, double T. The double T is what trips people up." },
      { id: "s15", speakerId: "nadia", text: "Arnott, two Ts. If it's handed in we hold it for ninety days; you'd collect it with photo ID and the reference we've logged." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Northgate Bus Station — lost property report" }],
          [{ kind: "text", text: "Item: canvas " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Colour: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Detail: small " }, { kind: "blank", no: 3 }, { kind: "text", text: " on the front pocket" }],
          [{ kind: "text", text: "Service departed: " }, { kind: "blank", no: 4 }, { kind: "text", text: " a.m." }],
          [{ kind: "text", text: "Contact number: " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "backpack", alternatives: [], numbers: false },
          { no: 2, answer: "dark green", alternatives: ["green"], numbers: false },
          { no: 3, answer: "koala", alternatives: [], numbers: false },
          { no: 4, answer: "8.10", alternatives: ["8:10", "08:10"], numbers: true },
          { no: 5, answer: "07550629143", alternatives: ["07550 629143"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["canvas backpack", "dark green", "koala", "ten past eight", "oh seven five five oh"],
          trap: {
            family: "correction",
            lure: ["navy"],
            note: "Tim opens with navy and swaps to dark green — the second colour is the one that goes on the report.",
          },
          explanation:
            "Tim first says navy and then corrects himself to dark green, so the second colour is what the desk records. The koala on the front pocket is the identifying detail, the service was the ten past eight from Winterton, and the contact number is dictated with 'oh' for zero at each end of the middle group.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. How long are handed-in items kept?",
          "7. What must Tim show when collecting the bag?",
        ],
        accepted: [
          ["ninety days", "90 days"],
          ["photo ID", "ID", "photo id"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["ninety days", "photo ID"],
          explanation:
            "Handed-in items are held for ninety days, and collection needs photo ID together with the reference the desk logs. The monthly rule Tim half-remembers simply doesn't apply to a backpack.",
        },
      },
    ],
    transcriptNote:
      "Tim corrects the colour mid-sentence — navy becomes dark green — and his surname is dictated with the double T called out. Both habits are typical of this part of the test: expect the second value to replace the first, and awkward letter pairs to be flagged.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-flower-delivery",
    title: "Ordering flowers for a birthday delivery",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "everyday",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a customer and a florist about ordering birthday flowers for delivery. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "rosie", name: "Rosie", role: "florist at the Petal & Stem flower shop", accent: "british" },
      { id: "marcus", name: "Marcus", role: "customer ordering a birthday bouquet by phone", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "rosie", text: "Petal & Stem, good morning — Rosie speaking." },
      { id: "s2", speakerId: "marcus", text: "Morning. I'd like to send some flowers to my mum for her birthday — she's just turned seventy." },
      { id: "s3", speakerId: "rosie", text: "Happy birthday to her! What did you have in mind — a bouquet, or a plant that lasts?" },
      { id: "s4", speakerId: "marcus", text: "A proper bouquet, I think. What's in season at the moment?" },
      { id: "s5", speakerId: "rosie", text: "The spring mix is full of colour — tulips, ranunculus, a little eucalyptus. Thirty-five pounds wrapped, or forty-two in a vase." },
      { id: "s6", speakerId: "marcus", text: "The vase is tempting… she'd never buy herself one. Go on, the vase." },
      { id: "s7", speakerId: "rosie", text: "Forty-two it is. What shall we put on the card?" },
      { id: "s8", speakerId: "marcus", text: "'Seventy years young — love from Marcus.' That's all it needs." },
      { id: "s9", speakerId: "rosie", text: "Lovely. Where's it going?" },
      { id: "s10", speakerId: "marcus", text: "Flat 2, fourteen Chantry Lane — that's C-H-A-N-T-R-Y. It's for Elsie Boxwell." },
      { id: "s11", speakerId: "rosie", text: "Chantry Lane, got it. And when would you like it there?" },
      { id: "s12", speakerId: "marcus", text: "Her birthday's this Saturday. Could you do Saturday morning, before she goes out?" },
      { id: "s13", speakerId: "rosie", text: "I'd love to, but the vans don't run on Saturdays, I'm afraid — Friday afternoon is the closest we can manage, any time between two and five.", pauseAfterMs: 300 },
      { id: "s14", speakerId: "marcus", text: "Friday works — she'll think I've forgotten, and then it turns up early. Do that." },
      { id: "s15", speakerId: "rosie", text: "Sneaky. I'll book the two-to-five slot and add a note to ring the bell twice, as she's a bit deaf." },
      { id: "s16", speakerId: "marcus", text: "Perfect. Thanks — you've been a great help." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–5",
        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Petal & Stem — delivery order note" }],
          [{ kind: "text", text: "Style: spring mix in a " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Total: £" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Card: 'Seventy years " }, { kind: "blank", no: 3 }, { kind: "text", text: " — love from Marcus'" }],
          [{ kind: "text", text: "Deliver to: Flat 2, 14 Chantry Lane — for Elsie Boxwell" }],
          [{ kind: "text", text: "Delivery day: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Time window: 2–" }, { kind: "blank", no: 5 }, { kind: "text", text: " p.m." }],
        ],
        blanks: [
          { no: 1, answer: "vase", alternatives: [], numbers: false },
          { no: 2, answer: "42", alternatives: ["forty-two"], numbers: true },
          { no: 3, answer: "young", alternatives: [], numbers: false },
          { no: 4, answer: "Friday", alternatives: [], numbers: false },
          { no: 5, answer: "5", alternatives: ["five"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "negation", "detail"],
          keywords: ["in a vase", "forty-two", "years young", "Friday afternoon", "between two and five"],
          trap: {
            family: "negation",
            lure: ["Saturday", "Saturday morning"],
            note: "Saturday morning is requested and then declined with 'I'd love to, but…' — the polite refusal leaves Saturday in the recording, yet Friday is the only bookable day.",
          },
          explanation:
            "The order is the spring mix in a vase at forty-two pounds, and the card reads 'Seventy years young — love from Marcus'. Saturday morning is asked for and refused because the vans don't run, so the delivery goes out on Friday afternoon inside the two-to-five window.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.",
        questions: [
          "6. Why can't the flowers go out on Saturday?",
          "7. Why will the driver ring the doorbell twice?",
        ],
        accepted: [
          ["vans don't run", "the vans don't run", "vans don't run on Saturdays", "no vans on Saturdays"],
          ["a bit deaf", "bit deaf", "deaf", "she's a bit deaf"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["vans don't run", "ring the bell twice", "a bit deaf"],
          explanation:
            "The vans don't run on Saturdays, which is why Friday afternoon is the earliest slot the florist can offer. The bell is to be rung twice because Elsie is a bit deaf, and that note is added to the order for the driver.",
        },
      },
    ],
    transcriptNote:
      "The refusal is dressed as regret — 'I'd love to, but…' — so Saturday stays in the conversation even though it can never be booked. The street name is spelled letter by letter, as delivery details usually are.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-phone-plan",
    title: "Choosing a mobile phone plan",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "technology",
    accentMix: ["british", "north-american"],
    intro:
      "You will hear a telephone conversation between a caller and a sales adviser at a mobile network about SIM-only plans. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "dev", name: "Dev", role: "sales adviser on the Volt Mobile SIM-only desk", accent: "british" },
      { id: "erika", name: "Erika", role: "caller comparing SIM-only plans", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "dev", text: "Volt Mobile, SIM-only desk — Dev speaking. How can I help?" },
      { id: "s2", speakerId: "erika", text: "Hi, yeah — my contract's up and I'm paying way too much. I just want a SIM and keep the phone I've got." },
      { id: "s3", speakerId: "dev", text: "Sensible. Our Clear range is SIM-only, all on rolling thirty-day terms — no lock-in." },
      { id: "s4", speakerId: "erika", text: "Good. What does the cheapest one get me?" },
      { id: "s5", speakerId: "dev", text: "That's the Lite: ten gigabytes of data, five hundred minutes, seven pounds a month, all in." },
      { id: "s6", speakerId: "erika", text: "I stream on the bus, though — ten gigs would be gone by Wednesday. What's next up?" },
      { id: "s7", speakerId: "dev", text: "The Plus: twenty-five gig, unlimited texts, still five hundred minutes, and twelve pounds a month." },
      { id: "s8", speakerId: "erika", text: "Hmm. And the top of the range?" },
      { id: "s9", speakerId: "dev", text: "The Max is the full works — unlimited data, unlimited minutes, and three months of free streaming thrown in, for fifteen pounds." },
      { id: "s10", speakerId: "erika", text: "The Max is tempting, but I honestly don't need streaming — I share my sister's account." },
      { id: "s11", speakerId: "dev", text: "Then don't pay for it. Are you a caller or a scroller, would you say?" },
      { id: "s12", speakerId: "erika", text: "Scroller, definitely — I barely use minutes; everyone's on video calls now." },
      { id: "s13", speakerId: "dev", text: "The Plus wins on data, then, and the minutes cap won't touch you.", pauseAfterMs: 300 },
      { id: "s14", speakerId: "erika", text: "Okay, the Plus it is. Can I move my old number across?" },
      { id: "s15", speakerId: "dev", text: "You'll need a PAC code — text the word PAC to six five double three, and it lands within the minute." },
    ],
    questions: [
      {
        id: "q1",
        type: "table",
        label: "Questions 1–5",
        instruction: "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Volt Mobile — Clear SIM-only plans" }],
          [{ kind: "text", text: "Plan" }, { kind: "text", text: " · Data" }, { kind: "text", text: " · Minutes" }, { kind: "text", text: " · Price" }],
          [{ kind: "text", text: "Lite — data: " }, { kind: "blank", no: 1 }, { kind: "text", text: " GB; minutes: 500; price: £" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Plus — data: " }, { kind: "blank", no: 3 }, { kind: "text", text: " GB; minutes: " }, { kind: "blank", no: 4 }, { kind: "text", text: "; price: £12" }],
          [{ kind: "text", text: "Max — data: unlimited; minutes: " }, { kind: "blank", no: 5 }, { kind: "text", text: "; price: £15" }],
        ],
        blanks: [
          { no: 1, answer: "10", alternatives: ["ten"], numbers: true },
          { no: 2, answer: "7", alternatives: ["seven", "£7"], numbers: true },
          { no: 3, answer: "25", alternatives: [], numbers: true },
          { no: 4, answer: "500", alternatives: [], numbers: true },
          { no: 5, answer: "unlimited", alternatives: [], numbers: false },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "number-form", "detail"],
          keywords: ["ten gigabytes", "seven pounds", "twenty-five gig", "five hundred minutes", "unlimited minutes"],
          trap: {
            family: "number-form",
            lure: ["seven pounds", "seven pounds a month", "twelve pounds"],
            note: "Prices are dictated in words — seven pounds a month — but under ONE WORD AND/OR A NUMBER only the digit fits; writing 'seven pounds' breaks the word limit.",
          },
          explanation:
            "The Lite carries ten gigabytes at seven pounds, the Plus lifts that to twenty-five gig with the same five hundred minutes at twelve pounds, and the Max goes unlimited on both data and minutes for fifteen pounds. Erika settles on the Plus because she needs data far more than call minutes.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.",
        questions: [
          "6. On what terms are the Clear plans sold?",
          "7. What must Erika request to keep her old number?",
        ],
        accepted: [
          ["rolling thirty-day", "thirty-day rolling", "rolling"],
          ["a PAC code", "PAC code", "the PAC code", "PAC"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["PAC", "rolling thirty-day"],
          explanation:
            "All three plans run on rolling thirty-day terms with no lock-in, so Erika can leave whenever she likes. To keep her old number she must text for a PAC code before the new SIM goes live.",
        },
      },
    ],
    transcriptNote:
      "Every price in this call is spoken in words, so the table blanks want digits — adding 'pounds' to an answer would break the one-word limit. Erika's choice also turns on a rejected perk: she passes on the Max because she shares her sister's streaming account.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-holiday-cottage",
    title: "Booking a holiday cottage",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "everyday",
    accentMix: ["australian", "british"],
    intro:
      "You will hear a telephone conversation between a parent and a holiday-cottage agent about a family booking. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "gail", name: "Gail", role: "agent at Currawong Coastal Cottages", accent: "australian" },
      { id: "nigel", name: "Nigel Bexley", role: "father booking a week's stay for his family", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "gail", text: "Currawong Coastal Cottages, Gail speaking — what can I do for you today?" },
      { id: "s2", speakerId: "nigel", text: "Hello. We're after a cottage for a week in February, somewhere quiet, near the water if possible." },
      { id: "s3", speakerId: "gail", text: "February's lovely and quiet, before the autumn rush. How many of you would there be?" },
      { id: "s4", speakerId: "nigel", text: "Four — me, my wife and the two kids, six and nine, so a proper two-bedroom place rather than a loft." },
      { id: "s5", speakerId: "gail", text: "The Boatshed at Pelican Bay sleeps five, with the beach a two-minute walk down the track." },
      { id: "s6", speakerId: "nigel", text: "That sounds ideal. What would the week set us back?" },
      { id: "s7", speakerId: "gail", text: "It's one eighty-two a night — no, sorry, that's the March rate. February is one hundred and sixty-eight.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "nigel", text: "Right. Is bedding included, or do we lug our own sheets?" },
      { id: "s9", speakerId: "gail", text: "All linen's included. And if you arrive without a car, the shuttle from Pelican Bay station stops at the gate — just text the driver ahead." },
      { id: "s10", speakerId: "nigel", text: "Brilliant. I'm Nigel Bexley — that's B-E-X-L-E-Y." },
      { id: "s11", speakerId: "gail", text: "Bexley, thank you. And a mobile number for the confirmation?" },
      { id: "s12", speakerId: "nigel", text: "Oh seven eight, double two, four one, six three, five nine.", pauseAfterMs: 300 },
      { id: "s13", speakerId: "gail", text: "Got it. The changeover day is Saturday — when would you like to arrive?" },
      { id: "s14", speakerId: "nigel", text: "Let's say Friday the ninth — no, hang on, Diane's got something on. Saturday the tenth, for seven nights.", pauseAfterMs: 300 },
      { id: "s15", speakerId: "gail", text: "Saturday the tenth it is, out on the seventeenth. Nothing to pay yet — a twenty per cent deposit once the paperwork goes out." },
      { id: "s16", speakerId: "nigel", text: "Easy. Thanks, Gail — you've been a great help." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–6",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Currawong Coastal Cottages — booking enquiry" }],
          [{ kind: "text", text: "Name: Nigel " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Mobile: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Arrival: " }, { kind: "blank", no: 3 }, { kind: "text", text: " (changeover day: Saturday)" }],
          [{ kind: "text", text: "Nights: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Nightly rate: $" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Deposit: " }, { kind: "blank", no: 6 }, { kind: "text", text: "% of total" }],
        ],
        blanks: [
          { no: 1, answer: "Bexley", alternatives: [], numbers: false },
          { no: 2, answer: "07822416359", alternatives: ["07822 416359"], numbers: true },
          { no: 3, answer: "10 February", alternatives: ["10th February", "February 10"], numbers: true },
          { no: 4, answer: "7", alternatives: ["seven"], numbers: true },
          { no: 5, answer: "168", alternatives: [], numbers: true },
          { no: 6, answer: "20", alternatives: ["twenty"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["Bexley", "double two", "Saturday the tenth", "seven nights", "one hundred and sixty-eight", "twenty per cent"],
          trap: {
            family: "correction",
            lure: ["one eighty-two", "Friday", "the ninth"],
            note: "Both corrections point one way: the rate drops from one eighty-two to one sixty-eight, and the arrival moves from Friday the ninth to Saturday the tenth — the second values score.",
          },
          explanation:
            "Gail quotes one eighty-two a night, then corrects it to one hundred and sixty-eight for February. Nigel likewise moves the arrival from Friday the ninth to Saturday the tenth for seven nights, and the deposit is twenty per cent once the paperwork goes out. The mobile is dictated with 'double two' for the repeated pair.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "7. How will the family get from the station to the cottage?",
          "8. What is provided so they need not bring sheets?",
        ],
        accepted: [
          ["the shuttle", "a shuttle", "shuttle", "the station shuttle"],
          ["linen", "all linen", "the linen"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["shuttle", "linen"],
          explanation:
            "A shuttle runs from Pelican Bay station and stops at the gate if the driver is texted ahead, which covers the family's carless arrival. All linen is included in the rate, so there is no need to bring sheets.",
        },
      },
    ],
    transcriptNote:
      "Gail corrects herself twice — the nightly rate and the arrival date — and in both cases the second figure is the one that goes on the form. The phone number uses 'double two' for the repeated pair, a habit worth training the ear on.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-evening-class",
    title: "Enrolling in an evening language class",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "education",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between an adult learner and an enrolment adviser at an adult learning centre about a Spanish evening course. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "carol", name: "Carol", role: "enrolment adviser at Milbridge Adult Learning Centre", accent: "british" },
      { id: "wes", name: "Wes", role: "adult learner joining a Spanish evening course", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "carol", text: "Milbridge Adult Learning Centre, enrolments — Carol speaking." },
      { id: "s2", speakerId: "wes", text: "Hi. I'd like to sign up for a Spanish evening course; I picked up a leaflet at the library." },
      { id: "s3", speakerId: "carol", text: "Good timing — the spring term starts next week. What's your Spanish like at the moment?" },
      { id: "s4", speakerId: "wes", text: "I can order food and gossip a bit on holiday, so I'd call myself intermediate, maybe." },
      { id: "s5", speakerId: "carol", text: "Mm. Can you handle the past tenses? The preterites catch most people out at that stage." },
      { id: "s6", speakerId: "wes", text: "The what? No — that's beyond me, I'm afraid." },
      { id: "s7", speakerId: "carol", text: "Then I'd start you in the lower-intermediate group; the intermediate one assumes all that. It's a starting point, not a demotion.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "wes", text: "Fair enough, you're the expert. When does that group actually meet?" },
      { id: "s9", speakerId: "carol", text: "Mondays, seven to nine, in room four. The Tuesday class is full — that's the beginners, in case you wondered." },
      { id: "s10", speakerId: "wes", text: "Mondays it is. How long does the term run, and what's the damage?" },
      { id: "s11", speakerId: "carol", text: "Twelve weeks, minus a week for half term, so through to late March — one hundred and ninety-eight, or one hundred and eighty-two at the concession rate." },
      { id: "s12", speakerId: "wes", text: "What counts as a concession, out of interest?" },
      { id: "s13", speakerId: "carol", text: "Over-sixties and full-time students. And the course book's included in that; only the activity workbook is extra, at eleven pounds." },
      { id: "s14", speakerId: "wes", text: "Painless. And the tutor's name, in case I need to ring in sick?" },
      { id: "s15", speakerId: "carol", text: "Señora Ibarra — I-B-A-R-R-A. She's been here since the centre opened." },
      { id: "s16", speakerId: "wes", text: "Brilliant. Put me down for Monday, Carol." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Milbridge Adult Learning Centre — Spanish evening course" }],
          [{ kind: "text", text: "Placed in group: " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Class day: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Time: " }, { kind: "blank", no: 3 }, { kind: "text", text: " to 9 p.m." }],
          [{ kind: "text", text: "Term fee: £" }, { kind: "blank", no: 4 }, { kind: "text", text: " (course book included)" }],
          [{ kind: "text", text: "Tutor: Señora " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "lower-intermediate", alternatives: ["lower intermediate"], numbers: false },
          { no: 2, answer: "Monday", alternatives: [], numbers: false },
          { no: 3, answer: "7", alternatives: ["seven"], numbers: true },
          { no: 4, answer: "198", alternatives: [], numbers: true },
          { no: 5, answer: "Ibarra", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "attribution", "detail"],
          keywords: ["lower-intermediate", "Mondays", "seven to nine", "one hundred and ninety-eight", "Ibarra"],
          trap: {
            family: "attribution",
            lure: ["intermediate"],
            note: "The intermediate claim belongs to the learner, not the adviser — Carol's placement, lower-intermediate, is the level that goes on the form.",
          },
          explanation:
            "Carol places Wes in the lower-intermediate group after the preterites question exposes the gap, and that group meets on Mondays from seven to nine. The term fee is one hundred and ninety-eight, and the tutor is Señora Ibarra, spelled out on the call.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–8",
        instruction: "Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.",
        questions: [
          "6. Which class is already full?",
          "7. Who qualifies for the concession rate?",
          "8. How much does the activity workbook cost?",
        ],
        accepted: [
          ["the beginners", "beginners", "the Tuesday class", "Tuesday", "Tuesday beginners"],
          ["over-sixties", "the over-sixties", "over-sixties and full-time students", "full-time students"],
          ["eleven pounds", "£11", "11", "eleven"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["Tuesday class is full", "Over-sixties", "eleven pounds"],
          explanation:
            "The Tuesday class — the beginners — is the one that is already full. The concession rate of one hundred and eighty-two is reserved for over-sixties and full-time students, and the only extra purchase is the eleven-pound activity workbook, since the course book itself is included.",
        },
      },
    ],
    transcriptNote:
      "The level is the designed trap: Wes calls himself intermediate, but placement is the adviser's call, so lower-intermediate is what the form records. The tutor's surname is spelled out letter by letter, as names so often are in these recordings.",
    source: BANK_SOURCE_NOTE,
  },
];
