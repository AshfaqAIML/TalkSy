/**
 * PROMPT 54 question-bank expansion — Part 1, batch C.
 *
 * Seven original Part 1 recordings: everyday social and transactional
 * two-speaker phone conversations, written in the style of the test but
 * 100% TalkSy practice material. Each exercise pairs a completion group
 * with a short-answer group, and the batch carries designed traps
 * (correction, similar-sound, number-form, mention-lure), dictated proper
 * names and naturally read phone numbers, dates and prices.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP1CExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p1-gym-freeze",
    title: "Pausing a gym membership",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "health",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a gym member and a receptionist at a fitness centre about pausing her membership while an injury heals. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "gareth", name: "Gareth", role: "receptionist at Harbour Point Fitness", accent: "british" },
      { id: "bethan", name: "Bethan Lloyd", role: "member freezing her membership after a knee injury", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "gareth", text: "Harbour Point Fitness, front desk — Gareth speaking." },
      { id: "s2", speakerId: "bethan", text: "Hi, Gareth. I'm one of your members, and I'm afraid I need to freeze my membership for a while." },
      { id: "s3", speakerId: "gareth", text: "No problem — that's exactly what freezes are for. I'll bring your file up; can I take the surname first?" },
      { id: "s4", speakerId: "bethan", text: "It's Bethan Lloyd. Lloyd is spelled L-L-O-Y-D, with a double L at the front." },
      { id: "s5", speakerId: "gareth", text: "Lloyd — there you are. And the membership number from your key fob, please?" },
      { id: "s6", speakerId: "bethan", text: "Hang on, it's here somewhere. Seven seven oh, two nine four.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "gareth", text: "That's the one. Now, the form needs a reason — what's happened?" },
      { id: "s8", speakerId: "bethan", text: "I twisted my knee on a trail run at the weekend. The doctor's referred me for physiotherapy, so it's a proper knee injury rather than a niggle." },
      { id: "s9", speakerId: "gareth", text: "Noted — knee injury. Freezes run one, two or three months, and most people take the full three." },
      { id: "s10", speakerId: "bethan", text: "Right — I'll go with three months, then, just to be safe." },
      { id: "s11", speakerId: "gareth", text: "You could, but if the physio's talking six weeks, I can't refund a month you don't use. Two might serve you better.", pauseAfterMs: 300 },
      { id: "s12", speakerId: "bethan", text: "Oh — good point. Make it two months, please." },
      { id: "s13", speakerId: "gareth", text: "Two months it is. There's a holding charge of four pounds fifty a month to keep your joining price locked in, and the freeze starts on your next billing date, the twenty-ninth of June." },
      { id: "s14", speakerId: "bethan", text: "That's fair. Am I allowed in the building at all while it's frozen? The doctor did say swimming's the one thing I can still do." },
      { id: "s15", speakerId: "gareth", text: "Good news there — the pool stays open to you throughout a freeze; it's only the classes and the gym floor that close off. Just email your physio's note to the membership inbox and we're all set." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Harbour Point Fitness — membership freeze" }],
          [{ kind: "text", text: "Member name: Bethan " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Membership number: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Reason for freeze: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Length of freeze: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Monthly holding charge: £" }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "Lloyd", alternatives: ["lloyd"], numbers: false },
          { no: 2, answer: "770294", alternatives: [], numbers: true },
          { no: 3, answer: "knee injury", alternatives: ["knee"], numbers: false },
          { no: 4, answer: "2 months", alternatives: ["two months", "2", "two"], numbers: true },
          { no: 5, answer: "4.50", alternatives: ["£4.50"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["Lloyd", "seven seven oh", "knee injury", "two months", "four pounds fifty"],
          trap: {
            family: "correction",
            lure: ["three months", "the full three"],
            note: "Bethan accepts the three-month freeze first, then trims it to two once Gareth warns that unused frozen months are not refunded — the second figure is what the form records.",
          },
          explanation:
            "The surname is dictated letter by letter, with the double L flagged at the front, and the membership number is read out digit group by digit. The freeze length is corrected from three months down to two, the reason on file is the knee injury from the trail run, and the monthly holding charge is four pounds fifty.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        questions: [
          "6. On what date does the freeze begin?",
          "7. Which facility can Bethan still use while her membership is frozen?",
        ],
        accepted: [
          ["29 June", "June 29", "29th June"],
          ["the pool", "pool", "swimming pool"],
        ],
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["twenty-ninth of June", "pool", "swimming"],
          explanation:
            "The freeze starts on the next billing date, the twenty-ninth of June, which Gareth names at the end of the fee sentence. The pool is the one facility that stays open during a freeze — the classes and the gym floor close off, and Bethan's doctor has cleared her to swim.",
        },
      },
    ],
    transcriptNote:
      "Two things to catch here: the freeze length changes from three months to two after the refund warning, and the pool — unlike the classes and the gym floor — stays open throughout the freeze. The charge of four pounds fifty is monthly, not a one-off.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-window-cleaner",
    title: "Booking a window cleaner for a shop",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "workplace",
    accentMix: ["british", "australian"],
    intro:
      "You will hear a telephone conversation between a gift-shop owner and a window-cleaning company about setting up a regular cleaning service. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "wendy", name: "Wendy", role: "office manager at Clearview Window Care", accent: "british" },
      { id: "marco", name: "Marco", role: "owner of The Paper Kite gift shop", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "wendy", text: "Good morning, Clearview Window Care — Wendy speaking." },
      { id: "s2", speakerId: "marco", text: "G'day! I run The Paper Kite, the gift shop on the market square, and the shopfront's becoming an embarrassment. I'm after a regular clean." },
      { id: "s3", speakerId: "wendy", text: "We can certainly sort that out. Which address are we talking about?" },
      { id: "s4", speakerId: "marco", text: "Fifteen Fennel Street — the corner unit underneath the old clock tower." },
      { id: "s5", speakerId: "wendy", text: "Fennel Street, got it. How much glass is there at street level?" },
      { id: "s6", speakerId: "marco", text: "Eight big panes plus the door glass. There's a mezzanine window up top as well, but that one's stayed respectable for months." },
      { id: "s7", speakerId: "wendy", text: "Then we'll leave the mezzanine out — our round covers street-level shopfronts only." },
      { id: "s8", speakerId: "marco", text: "Fair enough. How often would you come round?" },
      { id: "s9", speakerId: "wendy", text: "Most shops go monthly, but a market-square frontage picks up grime quickly, so I'd recommend every two weeks." },
      { id: "s10", speakerId: "marco", text: "Two weeks it is. Mornings suit us best — we don't open until half past nine." },
      { id: "s11", speakerId: "wendy", text: "Then you'll like our Thursday round: the crew starts at seven, so you'd be first drop and spotless by opening. The first visit is a deep clean — frames and all — and after that it's glass only.", pauseAfterMs: 300 },
      { id: "s12", speakerId: "marco", text: "Sounds fair. And what does all that cost?" },
      { id: "s13", speakerId: "wendy", text: "The first deep clean is thirty pounds, and each regular visit after that is thirteen pounds fifty. If you ever want the inside of the display cabinets done, that's an extra five pounds — just ask the crew." },
      { id: "s14", speakerId: "marco", text: "I'll give the cabinets a miss, thanks — I like polishing them myself before I rearrange everything." },
      { id: "s15", speakerId: "wendy", text: "Each to their own! I'll pencil you in for Thursday the fourth, and you'll get a text the evening before every visit." },
      { id: "s16", speakerId: "marco", text: "Beauty. Thanks, Wendy — see you Thursday." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–5",
        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Clearview Window Care — service plan for The Paper Kite" }],
          [{ kind: "text", text: "Shop address: 15 " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Street-level panes (plus door glass): " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Visit frequency: every " }, { kind: "blank", no: 3 }, { kind: "text", text: " weeks" }],
          [{ kind: "text", text: "Regular clean day: " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Price per regular visit: £" }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "Fennel Street", alternatives: [], numbers: false },
          { no: 2, answer: "8", alternatives: ["eight"], numbers: true },
          { no: 3, answer: "2", alternatives: ["two"], numbers: true },
          { no: 4, answer: "Thursday", alternatives: [], numbers: false },
          { no: 5, answer: "13.50", alternatives: ["£13.50"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "similar-sound", "detail", "spelling"],
          keywords: ["Fennel Street", "Eight big panes", "every two weeks", "Thursday", "thirteen pounds fifty"],
          trap: {
            family: "similar-sound",
            lure: ["thirty pounds", "thirty"],
            note: "The one-off deep clean costs thirty pounds and each regular visit thirteen pounds fifty — the -ty and -teen endings are the classic confusion, and the plan price is the smaller figure.",
          },
          explanation:
            "The shop is at fifteen Fennel Street with eight street-level panes plus the door glass, and Marco agrees to a clean every two weeks on the Thursday round. The price that goes in the plan is thirteen pounds fifty per visit — the thirty pounds belongs to the single deep clean, not to the regular service.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. What is cleaned on the first visit but not on regular ones?",
          "7. Which extra job does Marco turn down?",
        ],
        accepted: [
          ["the frames", "frames", "window frames", "the window frames"],
          ["the display cabinets", "display cabinets"],
        ],
        meta: {
          skills: ["detail", "paraphrase", "negation"],
          keywords: ["frames", "display cabinets"],
          explanation:
            "The first visit is a deep clean that takes in the frames, while the regular visits are glass only. Marco declines the inside of the display cabinets — an extra five pounds — because he prefers to polish and rearrange them himself.",
        },
      },
    ],
    transcriptNote:
      "Two prices sit close together: thirty pounds for the one-off deep clean and thirteen pounds fifty for each regular visit, so listen for the -teen ending on the smaller figure. The mezzanine window is described but deliberately left off the round.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-stationery",
    title: "Ordering office stationery",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "workplace",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between an office manager and a stationery supplier about placing a bulk order. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "nathan", name: "Nathan", role: "sales rep on the Fernhill Office Supplies order line", accent: "british" },
      { id: "yasmin", name: "Yasmin Osei", role: "office manager placing a bulk order for Kestrel Architects", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "nathan", text: "Fernhill Office Supplies, business orders — Nathan speaking." },
      { id: "s2", speakerId: "yasmin", text: "Hi, Nathan. It's Yasmin Osei at Kestrel Architects — I'm the office manager there. We're down to our last biro, so it's time for a bulk order." },
      { id: "s3", speakerId: "nathan", text: "A stationery emergency — my favourite kind. I've got your account open; where shall we start?" },
      { id: "s4", speakerId: "yasmin", text: "Copy paper, the A4 eighty-gram. Twenty boxes to begin with, and I'll reorder if the printers run through it." },
      { id: "s5", speakerId: "nathan", text: "Twenty boxes of A4, noted. Envelopes as well?" },
      { id: "s6", speakerId: "yasmin", text: "The manila DLs — two dozen packs should carry us through the tender season." },
      { id: "s7", speakerId: "nathan", text: "Consider it done. Lever-arch files to follow? You had green last time, I believe." },
      { id: "s8", speakerId: "yasmin", text: "Did we? The green never matched the shelf labels — make this lot navy." },
      { id: "s9", speakerId: "nathan", text: "Navy it is. Anything for the meeting room?" },
      { id: "s10", speakerId: "yasmin", text: "Two things: six packs of chisel-tip dry-wipe markers, and four black toner cartridges — the Q-40s, if they still fit the plotter." },
      { id: "s11", speakerId: "nathan", text: "They do, going by last year's orders. Let me read the whole thing back: twenty boxes of A4, twenty-four packs of manila DLs, navy lever-arch files, six packs of markers and four toner cartridges.", pauseAfterMs: 300 },
      { id: "s12", speakerId: "yasmin", text: "Spot on. How quickly can you deliver? We're flat out until the tender deadline." },
      { id: "s13", speakerId: "nathan", text: "Our van covers the old quarter on Fridays, so I can have everything with you Friday morning, before ten." },
      { id: "s14", speakerId: "yasmin", text: "Friday's perfect — and the total, once you've totted it up?" },
      { id: "s15", speakerId: "nathan", text: "With your architect discount applied, it comes to one hundred and sixty-eight pounds fifty. I'll email the confirmation across this afternoon." },
      { id: "s16", speakerId: "yasmin", text: "Painless. Thanks a million, Nathan." },
    ],
    questions: [
      {
        id: "q1",
        type: "table",
        label: "Questions 1–6",
        instruction: "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Kestrel Architects — bulk stationery order" }],
          [{ kind: "text", text: "Item · Quantity · Detail" }],
          [{ kind: "text", text: "A4 copy paper (80 gsm) · " }, { kind: "blank", no: 1 }, { kind: "text", text: " boxes" }],
          [{ kind: "text", text: "Manila DL envelopes · " }, { kind: "blank", no: 2 }, { kind: "text", text: " packs" }],
          [{ kind: "text", text: "Lever-arch files · colour: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Plotter toner, black (Q-40) · " }, { kind: "blank", no: 4 }, { kind: "text", text: " cartridges" }],
          [{ kind: "text", text: "Delivery · " }, { kind: "blank", no: 5 }, { kind: "text", text: " morning, before " }, { kind: "blank", no: 6 }, { kind: "text", text: " a.m." }],
        ],
        blanks: [
          { no: 1, answer: "20", alternatives: ["twenty"], numbers: true },
          { no: 2, answer: "24", alternatives: [], numbers: true },
          { no: 3, answer: "navy", alternatives: [], numbers: false },
          { no: 4, answer: "4", alternatives: ["four"], numbers: true },
          { no: 5, answer: "Friday", alternatives: [], numbers: false },
          { no: 6, answer: "10", alternatives: ["ten"], numbers: true },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "number-form", "detail", "paraphrase"],
          keywords: ["Twenty boxes", "two dozen", "twenty-four packs", "navy", "four black toner", "Fridays", "before ten"],
          trap: {
            family: "number-form",
            lure: ["two dozen"],
            note: "Yasmin asks for 'two dozen packs', but the rubric allows one word and/or a number — Nathan's read-back gives the figure, so write 24 rather than the words.",
          },
          explanation:
            "Nathan's read-back confirms every figure: twenty boxes of A4 and twenty-four packs — the two dozen — of manila envelopes. The files are navy this time rather than last year's green, the plotter takes four black cartridges, and the van arrives on a Friday morning before ten.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        questions: [
          "7. How much does the whole order come to?",
          "8. Which discount has been applied to the total?",
        ],
        accepted: [
          ["£168.50", "168.50"],
          ["the architect discount", "architect discount", "an architect discount"],
        ],
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["one hundred and sixty-eight", "architect discount"],
          explanation:
            "Nathan quotes the total as one hundred and sixty-eight pounds fifty, so the figures 168.50 answer the first question. The reduction he names is the architect discount attached to the firm's account, which is what the second question looks for.",
        },
      },
    ],
    transcriptNote:
      "The read-back is the anchor of this recording: Nathan confirms every quantity, turning Yasmin's 'two dozen packs' into the figure twenty-four. Listen too for the colour switch from last year's green files to navy.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-community-garden",
    title: "Joining a community garden",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 5,
    topic: "environment",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a new resident and a volunteer coordinator at a community garden about renting a growing plot. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "maggie", name: "Maggie", role: "volunteer coordinator at the Windmill Lane Community Garden", accent: "british" },
      { id: "colin", name: "Colin", role: "new resident asking about plot hire", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "maggie", text: "Windmill Lane Community Garden, Maggie speaking — how can I help?" },
      { id: "s2", speakerId: "colin", text: "Hi! I'm Colin — I've just moved to number twelve, Hollis Road, two streets up, and someone at the library mentioned you rent out growing plots." },
      { id: "s3", speakerId: "maggie", text: "That's right, we do. Are you after vegetables, flowers, or a bit of both?" },
      { id: "s4", speakerId: "colin", text: "Vegetables, mainly. Fair warning, though — I've killed every houseplant I've ever owned." },
      { id: "s5", speakerId: "maggie", text: "Ha! You'll be in good company here. We let full plots and half plots — the full ones are an awful lot of ground for a first season, so most newcomers start small." },
      { id: "s6", speakerId: "colin", text: "Then a half plot sounds perfect." },
      { id: "s7", speakerId: "maggie", text: "Lovely. The fee is eighteen pounds a year for a half plot, thirty-two for a full one, and that covers your water and the communal tools.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "colin", text: "That's very reasonable. Is there a waiting list?" },
      { id: "s9", speakerId: "maggie", text: "You're in luck — two half plots came free this week, so you could start this weekend. There's just a ten-pound deposit for the gate key, and you get that back whenever you leave." },
      { id: "s10", speakerId: "colin", text: "Easy. Which plots are the free ones?" },
      { id: "s11", speakerId: "maggie", text: "Numbers seven and nine. Seven's the one beside the water butt, if dragging a can about matters to you." },
      { id: "s12", speakerId: "colin", text: "It absolutely does. Put me down for seven." },
      { id: "s13", speakerId: "maggie", text: "Done. Bring the deposit to the shed on Sunday morning, when the volunteers are about, and we'll find you a spade and a corner of the tea urn." },
      { id: "s14", speakerId: "colin", text: "Brilliant — see you Sunday, Maggie." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Windmill Lane Community Garden — plot application" }],
          [{ kind: "text", text: "Name: Colin · Address: 12 " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Plot size: " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Annual fee: £" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Gate key deposit: £" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Plot number: " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "Hollis Road", alternatives: [], numbers: false },
          { no: 2, answer: "half plot", alternatives: ["half"], numbers: false },
          { no: 3, answer: "18", alternatives: ["eighteen"], numbers: true },
          { no: 4, answer: "10", alternatives: ["ten"], numbers: true },
          { no: 5, answer: "7", alternatives: ["seven"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "spelling"],
          keywords: ["Hollis Road", "half plot", "eighteen pounds", "ten-pound deposit", "seven"],
          explanation:
            "Colin's new address is twelve Hollis Road, and a half plot is the beginner's size at eighteen pounds a year, with the water and the communal tools covered. The gate key takes a ten-pound deposit, and he chooses plot seven for its place beside the water butt.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. Besides water, what does the annual fee cover?",
          "7. How did Colin first hear about the garden?",
        ],
        accepted: [
          ["the communal tools", "communal tools", "the tools", "tools"],
          ["the library", "library"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["communal tools", "library"],
          explanation:
            "Maggie lists two things inside the fee: the water and the communal tools, so the tools answer the first question. Colin heard about the plots from someone at the library, which is the detail the second question rewards.",
        },
      },
    ],
    transcriptNote:
      "The numbers here arrive gently: eighteen pounds a year, a ten-pound key deposit, and plots seven and nine free — Colin picks seven because it sits beside the water butt. The half plot is the beginner's choice, and the tools are communal, not private.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-photography",
    title: "Booking a photography workshop",
    part: 1,
    difficulty: 3,
    estimatedMinutes: 6,
    topic: "culture",
    accentMix: ["australian", "british"],
    intro:
      "You will hear a telephone conversation between a photography enthusiast and a studio bookings coordinator about joining a weekend workshop. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "poppy", name: "Poppy", role: "bookings coordinator at Saltlight Studio", accent: "australian" },
      { id: "daniel", name: "Daniel Marlowe", role: "hobbyist photographer booking a weekend workshop", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "poppy", text: "Saltlight Studio bookings, this is Poppy speaking." },
      { id: "s2", speakerId: "daniel", text: "Hi, Poppy. I've been eyeing your weekend workshops for a while, and I'd like to book a place at last." },
      { id: "s3", speakerId: "poppy", text: "Good timing — the spring booking list opened this morning. Are you after the street-photography weekend, or The Portrait Lab?" },
      { id: "s4", speakerId: "daniel", text: "The Portrait Lab, definitely. I photograph people mostly — my poor nephews are thoroughly sick of it." },
      { id: "s5", speakerId: "poppy", text: "Ha! Can I take a name for the register?" },
      { id: "s6", speakerId: "daniel", text: "Daniel Marlowe. That's M-A-R-L-O-W-E — don't forget the e on the end.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "poppy", text: "Marlowe, lovely. And where are you up to with your photography? We stream people into foundations or intermediate groups." },
      { id: "s8", speakerId: "daniel", text: "I've been shooting for about two years, and I know my way round the exposure triangle, so intermediate feels about right." },
      { id: "s9", speakerId: "poppy", text: "Intermediate it is. Now, the next Lab runs on Saturday the fourteenth of September — oh, hang on, that cohort's full, I'm afraid. The twenty-first has room, same hours.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "daniel", text: "The twenty-first suits me fine." },
      { id: "s11", speakerId: "poppy", text: "We gather at nine forty-five and wrap up around four. The fee is one hundred and ninety dollars, with a sixty-dollar deposit to hold your place." },
      { id: "s12", speakerId: "daniel", text: "That's fine by me. Should I bring my own kit?" },
      { id: "s13", speakerId: "poppy", text: "Your camera, obviously, plus a tripod — we don't lend those out. The lights, the backdrops and even the models are all included on the day." },
      { id: "s14", speakerId: "daniel", text: "Models into the bargain — my nephews will be relieved." },
      { id: "s15", speakerId: "poppy", text: "I'll email the joining notes tonight, Daniel, and the payment link with them. Anything else before I put you down?" },
      { id: "s16", speakerId: "daniel", text: "Nothing at all. Thanks, Poppy — see you on the twenty-first." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–6",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Saltlight Studio — workshop booking" }],
          [{ kind: "text", text: "Name: Daniel " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Workshop: The " }, { kind: "blank", no: 2 }, { kind: "text", text: " Lab" }],
          [{ kind: "text", text: "Start date: Saturday " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Arrival time: " }, { kind: "blank", no: 4 }, { kind: "text", text: " a.m." }],
          [{ kind: "text", text: "Workshop fee: $" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Deposit to hold the place: $" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "Marlowe", alternatives: ["marlowe"], numbers: false },
          { no: 2, answer: "Portrait", alternatives: ["portrait"], numbers: false },
          { no: 3, answer: "21 September", alternatives: ["21st September", "September 21"], numbers: true },
          { no: 4, answer: "9.45", alternatives: ["9:45"], numbers: true },
          { no: 5, answer: "190", alternatives: [], numbers: true },
          { no: 6, answer: "60", alternatives: ["sixty"], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["spelling", "numbers", "corrections", "detail"],
          keywords: ["Marlowe", "Portrait Lab", "twenty-first", "nine forty-five", "one hundred and ninety", "sixty-dollar deposit"],
          trap: {
            family: "correction",
            lure: ["the fourteenth", "Saturday the fourteenth"],
            note: "The fourteenth of September is announced first, but that cohort is already full — the booking lands on the twenty-first, the date that survives the correction.",
          },
          explanation:
            "The surname is spelled out letter by letter, with the e on the end flagged. The date is the corrected one — the fourteenth is full, so the twenty-first of September scores — the Lab gathers at nine forty-five, and the fee is one hundred and ninety dollars with a sixty-dollar deposit to hold the place.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "7. Which group has Poppy placed Daniel in?",
          "8. What must Daniel bring that the studio does not provide?",
        ],
        accepted: [
          ["intermediate", "intermediate group"],
          ["a tripod", "his tripod", "tripod", "his own tripod"],
        ],
        meta: {
          skills: ["detail", "paraphrase", "negation"],
          keywords: ["intermediate", "tripod", "don't lend"],
          explanation:
            "Daniel describes two years of shooting and a working knowledge of the exposure triangle, and Poppy agrees he belongs with the intermediate group. The studio supplies lights, backdrops and models, but not tripods — that is the one thing he must bring besides his camera.",
        },
      },
    ],
    transcriptNote:
      "Watch the date correction: the fourteenth is announced and then withdrawn because the cohort is full, leaving the twenty-first. Note also what the studio does and doesn't supply — lights and models come included, while the tripod is the visitor's job.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-parcel",
    title: "Arranging parcel redelivery",
    part: 1,
    difficulty: 1,
    estimatedMinutes: 5,
    topic: "everyday",
    accentMix: ["british"],
    intro:
      "You will hear a telephone conversation between a customer and a parcel company's redelivery desk about rearranging a missed delivery. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "marcus", name: "Marcus", role: "agent on the Trackline Parcels redelivery desk", accent: "british" },
      { id: "ellie", name: "Ellie", role: "customer who missed a parcel delivery", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "marcus", text: "Trackline Parcels, redelivery desk — Marcus speaking." },
      { id: "s2", speakerId: "ellie", text: "Hello! I've come home to one of your cards — you tried to deliver a parcel yesterday and I missed it." },
      { id: "s3", speakerId: "marcus", text: "The classic. Let's get it sorted. Is the card handy? There's a parcel number printed along the top." },
      { id: "s4", speakerId: "ellie", text: "Yes, I've got it here. Six one nine, oh four, two eight.", pauseAfterMs: 300 },
      { id: "s5", speakerId: "marcus", text: "Six one nine oh four two eight — that's the one. We attempted delivery on Tuesday, the eighth of May, in the morning." },
      { id: "s6", speakerId: "ellie", text: "That figures — I'm at the office Tuesdays to Thursdays, so there was never any chance of catching me." },
      { id: "s7", speakerId: "marcus", text: "Then let's rebook. We've a Saturday slot going out — our drivers run from nine in the morning until one." },
      { id: "s8", speakerId: "ellie", text: "Saturday's ideal, actually." },
      { id: "s9", speakerId: "marcus", text: "And if the worst happens and you pop out — is there a safe place the driver could leave the parcel?" },
      { id: "s10", speakerId: "ellie", text: "The porch round the back is never locked. Just inside, out of the rain, would be wonderful." },
      { id: "s11", speakerId: "marcus", text: "The porch, noted. Could I also grab a mobile number, in case the driver has trouble finding the back of the house?" },
      { id: "s12", speakerId: "ellie", text: "Of course — it's oh seven seven oh, two nine, one five, six three.", pauseAfterMs: 300 },
      { id: "s13", speakerId: "marcus", text: "Perfect, that's everything. The confirmation comes by text within the hour, and the driver will knock before trying the porch." },
      { id: "s14", speakerId: "ellie", text: "Wonderful — thanks for making it easy, Marcus." },
    ],
    questions: [
      {
        id: "q1",
        type: "form",
        label: "Questions 1–5",
        instruction: "Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Trackline Parcels — redelivery booking" }],
          [{ kind: "text", text: "Parcel number: " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "First attempted: Tuesday " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Redelivery day: " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Safe place: the " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Contact mobile: " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "6190428", alternatives: [], numbers: true },
          { no: 2, answer: "8 May", alternatives: ["8th May", "May 8"], numbers: true },
          { no: 3, answer: "Saturday", alternatives: [], numbers: false },
          { no: 4, answer: "porch", alternatives: [], numbers: false },
          { no: 5, answer: "0770291563", alternatives: [], numbers: true },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "spelling"],
          keywords: ["six one nine", "eighth of May", "Saturday", "porch", "oh seven seven oh"],
          explanation:
            "The parcel number is dictated digit by digit from the card, and the missed attempt was on Tuesday the eighth of May. Ellie books the Saturday slot, names the porch as the safe place, and gives a mobile number in case the driver cannot find the back of the house.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–7",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          "6. Where was Ellie when the first delivery was attempted?",
          "7. How will Ellie receive confirmation of the new booking?",
        ],
        accepted: [
          ["at the office", "the office", "her office"],
          ["a text", "by text", "text"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["at the office", "by text"],
          explanation:
            "Ellie works at the office from Tuesdays to Thursdays, which is exactly when the driver called, so the office answers the first question. The confirmation will come by text within the hour of the call, which answers the second.",
        },
      },
    ],
    transcriptNote:
      "Both the parcel number and the mobile are dictated digit by digit, with 'oh' standing in for zero. The first attempt on the eighth of May only sets the scene — every answer belongs to the new arrangement, from the Saturday slot to the porch.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p1-car-sharing",
    title: "Asking about a car-sharing scheme",
    part: 1,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "technology",
    accentMix: ["british", "north-american"],
    intro:
      "You will hear a telephone conversation between a commuter and a car-sharing scheme's member services about joining the club. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "kevin", name: "Kevin", role: "membership advisor at the Wheelshare car club", accent: "north-american" },
      { id: "aisha", name: "Aisha", role: "commuter comparing car-club options", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "kevin", text: "Wheelshare member services, this is Kevin — how can I help you today?" },
      { id: "s2", speakerId: "aisha", text: "Hi! I keep seeing your cars in the bays by the station, and I'm wondering whether joining would beat two buses and a train for my weekend trips." },
      { id: "s3", speakerId: "kevin", text: "Happy to walk you through it. Money first: there's a one-off joining fee of fifteen pounds, and that covers your smart card — there's no monthly charge after that." },
      { id: "s4", speakerId: "aisha", text: "Good start. And the cost of each trip?" },
      { id: "s5", speakerId: "kevin", text: "Trips are seven pounds fifty an hour. If you book a car for a whole day, it caps at thirty-nine pounds, which suits longer journeys." },
      { id: "s6", speakerId: "aisha", text: "That's really not bad. Where do the cars actually live, though? I'm out towards Kelsey Park, so being near a station matters." },
      { id: "s7", speakerId: "kevin", text: "We've got forty marked bays across the city, mostly right beside the rail stations, so you're never more than a short walk from a car." },
      { id: "s8", speakerId: "aisha", text: "Perfect. And insurance? That's the thing that's always put me off hiring." },
      { id: "s9", speakerId: "kevin", text: "Fully covered — insurance, cleaning and breakdown cover are all baked into the hourly rate. The one running cost that stays with you is fuel: every car carries a fuel card in the glovebox, but the litres go onto your monthly invoice.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "aisha", text: "Ah, understood. How would I actually get into a car? Is there a key somewhere?" },
      { id: "s11", speakerId: "kevin", text: "No keys at all — you book on your phone, and the app unlocks the doors when you're standing beside it." },
      { id: "s12", speakerId: "aisha", text: "That's slick. And what does signing up involve?" },
      { id: "s13", speakerId: "kevin", text: "A short form online, then swing by our office on Wren Street with your driving licence — we print the smart card while you wait." },
      { id: "s14", speakerId: "aisha", text: "Easy enough. One more thing: my Saturday trips run about an hour each way — is there a mileage limit?" },
      { id: "s15", speakerId: "kevin", text: "You get a hundred and fifty miles a day included, and it's twenty pence a mile beyond that." },
      { id: "s16", speakerId: "aisha", text: "Miles better than the buses, honestly. Sign me up, Kevin." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–5",
        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Wheelshare car club — membership summary" }],
          [{ kind: "text", text: "One-off joining fee: £" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Trip rate: £" }, { kind: "blank", no: 2 }, { kind: "text", text: " per hour" }],
          [{ kind: "text", text: "Whole-day price cap: £" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Parking: " }, { kind: "blank", no: 4 }, { kind: "text", text: " marked bays across the city" }],
          [{ kind: "text", text: "Included in the rate: insurance, cleaning and " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "15", alternatives: ["fifteen"], numbers: true },
          { no: 2, answer: "7.50", alternatives: ["£7.50"], numbers: true },
          { no: 3, answer: "39", alternatives: ["thirty-nine"], numbers: true },
          { no: 4, answer: "40", alternatives: ["forty"], numbers: true },
          { no: 5, answer: "breakdown cover", alternatives: ["breakdown"], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["fifteen pounds", "seven pounds fifty", "thirty-nine pounds", "forty marked bays", "breakdown cover"],
          explanation:
            "The joining fee is a one-off fifteen pounds with no monthly charge behind it, trips cost seven pounds fifty an hour, and a whole day caps at thirty-nine pounds. The cars sit in forty marked bays, and the hourly rate bundles in insurance, cleaning and breakdown cover.",
        },
      },
      {
        id: "q2",
        type: "short-answer",
        label: "Questions 6–8",
        instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        questions: [
          "6. Which running cost stays with the member?",
          "7. How do members unlock a booked car?",
          "8. What must Aisha bring to the Wren Street office?",
        ],
        accepted: [
          ["fuel", "the fuel"],
          ["the app", "with the app", "app"],
          ["her driving licence", "a driving licence", "driving licence", "her licence", "a licence"],
        ],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["running cost", "fuel", "app unlocks", "driving licence"],
          trap: {
            family: "mention-lure",
            lure: ["insurance", "cleaning"],
            note: "Insurance and cleaning are discussed at length and ARE included in the rate — the only running cost left with the member is the fuel, so don't let the prominent insurance talk answer the cost question.",
          },
          explanation:
            "Kevin is explicit that insurance, cleaning and breakdown cover are all baked into the hourly rate, leaving fuel as the single cost on the member's invoice. Cars open through the phone app, and new members bring their driving licence to the Wren Street office.",
        },
      },
    ],
    transcriptNote:
      "The insurance question sounds like the catch, yet cover is fully included — the only running cost that stays with the member is the fuel. Prices arrive steadily through the call: fifteen pounds to join, seven fifty an hour, thirty-nine for a full day.",
    source: BANK_SOURCE_NOTE,
  },
];
