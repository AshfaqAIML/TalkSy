/**
 * Audio question bank — Part 3 exercises (educational and training
 * conversations, two to four speakers). PROMPT 44 Part 5.
 *
 * Complexity rises through the set: hedged opinion, disagreement,
 * attribution and heavy paraphrase. Every recording is original TalkSy
 * practice material written in the style of the test.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const part3Exercises: BankExercise[] = [
  {
    slug: "ielts-lb-p3-tutorial",
    title: "Planning the history essay",
    part: 3,
    difficulty: 2,
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear a tutorial in which two students and their tutor discuss a plan for a history essay. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 6.",
    speakers: [
      { id: "hartley", name: "Dr Hartley", role: "history tutor leading a planning tutorial", accent: "british" },
      { id: "callum", name: "Callum", role: "undergraduate preparing the industrial-town essay", accent: "british" },
      { id: "sunita", name: "Sunita", role: "undergraduate preparing the industrial-town essay", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "hartley", text: "Right then, you two — come in, sit down. This is our planning tutorial for the industrial-town essay, so let's hear what you've each found." },
      { id: "s2", speakerId: "callum", text: "We've split the sources between us. I've been through the factory pay ledgers from the Millfield mills, the ones from 1840 onwards." },
      { id: "s3", speakerId: "hartley", text: "And they'll sit nicely in your section on wages and household budgets." },
      { id: "s4", speakerId: "sunita", text: "My problem is the health part. I tracked down the parish burial registers for the same streets, and the death rates make grim reading." },
      { id: "s5", speakerId: "hartley", text: "Those registers are ideal for housing and health — the dates and street names give you the pattern. Keep them." },
      { id: "s6", speakerId: "callum", text: "For the workers' own words, I thought the letters to the editor in the local paper might work — readers arguing about the mills." },
      { id: "s7", speakerId: "sunita", text: "Honestly, I'm not sure that's a good idea. Those letters are mostly mill owners defending themselves — you'd only ever hear one side." },
      { id: "s8", speakerId: "hartley", text: "I'm with Sunita there. The memoir by Joseph Wilson, the weaver — that's the one I'd back. It's vivid, and it's a worker speaking for himself.", pauseAfterMs: 300 },
      { id: "s9", speakerId: "callum", text: "Fine — the memoir it is. And the newspapers can still feed the last section, the one on how the press covered the strikes." },
      { id: "s10", speakerId: "hartley", text: "They can. Now, my main concern. Both middle sections describe conditions beautifully, but I can't yet see the thread — what claim are they actually proving? An essay needs an argument, not a guided tour." },
      { id: "s11", speakerId: "sunita", text: "I did wonder about cutting the transport section, to keep the length down." },
      { id: "s12", speakerId: "hartley", text: "Cut it if you like — that's a length decision, not the heart of the problem. And don't pad the essay out with a timeline of the Factory Acts; that's background, not argument. The reading list is fine, by the way, whatever Callum says." },
      { id: "s13", speakerId: "callum", text: "I only said it looked thin! Okay — so where do we go from here?" },
      { id: "s14", speakerId: "hartley", text: "Why not each draft one section over the weekend — Sunita takes health, Callum takes wages — and we'll see whether an argument surfaces on the page." },
      { id: "s15", speakerId: "sunita", text: "That works for me. Shall we compare drafts on Tuesday, before Thursday's seminar?" },
      { id: "s16", speakerId: "callum", text: "Tuesday's good — I'll email you both my pages on Monday night." },
      { id: "s17", speakerId: "hartley", text: "Lovely. Oh, and the trip to the county record office is optional this term — worthwhile, but nobody has to go.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–4",
        instruction:
          "The students discuss which part of the essay each source will feed. Choose FOUR answers from the box and write the correct letter, A–F, next to questions 1–4. You may use each letter once only.",
        items: [
          "1 the factory pay ledgers from the Millfield mills",
          "2 the parish burial registers",
          "3 the weaver Joseph Wilson's memoir",
          "4 the local newspaper reports of the strikes",
        ],
        options: [
          "the section on wages and household budgets",
          "the section on how the press covered the strikes",
          "the section on housing and health",
          "a timeline of the Factory Acts",
          "the section of the workers' own words",
          "the transport section, which may be cut",
        ],
        correct: [0, 2, 4, 1],
        meta: {
          skills: ["attribution", "paraphrase", "detail"],
          keywords: ["pay ledgers", "burial registers", "memoir", "strikes", "letters to the editor"],
          trap: {
            family: "attribution",
            lure: ["letters to the editor"],
            note:
              "Callum proposes the letters to the editor, but Sunita dismisses them and the tutor backs the memoir instead — the endorsed source, not the first proposal, is the key.",
          },
          explanation:
            "The pay ledgers feed the section on wages and household budgets (A); the burial registers supply the mortality pattern behind housing and health (C); the tutor-endorsed memoir gives the workers' own words (E); and the newspaper reports feed the press coverage of the strikes (B). The timeline (D) and the transport section (F) are both mentioned but feed nothing.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Hartley say is the main weakness of the essay plan?",
        options: [
          "The reading list is too short for a topic this broad.",
          "The sections describe conditions but are not yet pulled together by an argument.",
          "The transport section will make the essay far too long.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "negation"],
          keywords: ["thread", "argument", "reading list", "length decision"],
          explanation:
            "Dr Hartley's worry is that both middle sections merely describe, with no connecting thread — an essay needs an argument, not a guided tour. She adds that the reading list is fine, and she brushes the transport cut aside as a length decision, so neither of those is her main concern.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What do the two students agree to do next?",
        options: [
          "Each write a first draft of a different section.",
          "Cut the transport section from the plan immediately.",
          "Join the trip to the county record office.",
        ],
        correct: [0],
        meta: {
          skills: ["intention", "detail", "gist"],
          keywords: ["draft", "weekend", "Tuesday", "county record office"],
          explanation:
            "The tutor suggests each student drafts one section over the weekend, and both students accept — Sunita confirms they will compare drafts on Tuesday. Cutting transport is only considered, and the record office trip is described as optional, so neither matches what they actually agree to do.",
        },
      },
    ],
    transcriptNote:
      "Watch who endorses what: Callum's suggestion of the letters to the editor is dismissed by Sunita, and it is the tutor's backing for the memoir that settles question 3 — the endorsement, not the first proposal, carries the mark.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-project",
    title: "Building the model bridge",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 8,
    accentMix: ["north-american"],
    intro:
      "You will hear two engineering students planning the stages of a model-bridge project for a design module. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "jordan", name: "Jordan", role: "engineering student on the bridge-build team", accent: "north-american" },
      { id: "mia", name: "Mia", role: "engineering student on the bridge-build team", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "jordan", text: "Okay, the bridge build. Professor Osei said the project runs five weeks from today, so let's map it out." },
      { id: "s2", speakerId: "mia", text: "Sure. First thing is the design stage — we each bring hand-drawn sketches to Friday's lab and pick the strongest concept to build." },
      { id: "s3", speakerId: "jordan", text: "Right, sketches first. And then what happens once that's done?" },
      { id: "s4", speakerId: "mia", text: "Once that's done, we place the materials order — but heads up, the workshop only processes orders on Mondays, so if we slip a week, we lose a week." },
      { id: "s5", speakerId: "jordan", text: "Noted. So the build itself — how long do we actually get?" },
      { id: "s6", speakerId: "mia", text: "Two full weeks to assemble the bridge, which takes us up to the twenty-sixth. And the week after that is testing week, when they hang weights from the deck until something fails." },
      { id: "s7", speakerId: "jordan", text: "Brutal. And after the load test?" },
      { id: "s8", speakerId: "mia", text: "The final step is the demonstration — every team presents its bridge to the class, and that counts toward the grade." },
      { id: "s9", speakerId: "jordan", text: "Good to know. Now, materials. The handout recommends balsa wood, but every time we've used balsa it's split on us." },
      { id: "s10", speakerId: "mia", text: "Exactly — balsa's out. I'd go with basswood instead: stiffer, and it takes glue way better." },
      { id: "s11", speakerId: "jordan", text: "Basswood it is. Can we still string steel wire for the suspension cables?" },
      { id: "s12", speakerId: "mia", text: "Sure — steel wire's on the approved list. What we can't use is the carbon-fiber rods. They were legal last year, but the new rules say wood and wire only, so the rods are out." },
      { id: "s13", speakerId: "jordan", text: "Shame. And I guess we should build a cardboard mock-up before we cut the good wood?" },
      { id: "s14", speakerId: "mia", text: "Definitely — make the cheap mistakes in cardboard, not basswood." },
      { id: "s15", speakerId: "jordan", text: "Where are we doing all this? The civil engineering lab?" },
      { id: "s16", speakerId: "mia", text: "The design studio, room two-eleven. It stays open till nine — no, sorry, that's the library. The studio closes at seven o'clock on weekdays.", pauseAfterMs: 300 },
      { id: "s17", speakerId: "jordan", text: "Seven it is. I'll book us benches for the Monday after the sketches, then." },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart",
        label: "Questions 1–4",
        instruction: "Complete the flowchart below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "MODEL-BRIDGE PROJECT — the five-week plan" }],
          [{ kind: "text", text: "Step 1 — Design stage: submit" }, { kind: "blank", no: 1 }, { kind: "text", text: "at Friday's lab" }],
          [{ kind: "text", text: "Step 2 — Once that's done, place the materials" }, { kind: "blank", no: 2 }, { kind: "text", text: "(Mondays only)" }],
          [{ kind: "text", text: "Step 3 — Build: assemble the bridge in the design" }, { kind: "blank", no: 3 }, { kind: "text", text: "(two weeks)" }],
          [{ kind: "text", text: "Step 4 — Test the load, then give the final" }, { kind: "blank", no: 4 }],
        ],
        blanks: [
          { no: 1, answer: "sketches", alternatives: [] },
          { no: 2, answer: "order", alternatives: [] },
          { no: 3, answer: "studio", alternatives: [] },
          { no: 4, answer: "demonstration", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "numbers"],
          keywords: ["sketches", "materials order", "design studio", "demonstration", "once that's done"],
          explanation:
            "The stages follow the conversation in order, signalled by 'first thing', 'once that's done' and 'the week after that': sketches come to Friday's lab, then the materials order goes in on a Monday, then the two-week build happens in the design studio, and the project closes with the load test and the final demonstration to the class.",
        },
      },
      {
        id: "q2",
        type: "mcq-multi",
        label: "Questions 5–6",
        instruction: "Choose TWO letters, A–E.",
        stem: "Which TWO materials have the students ruled out for the bridge?",
        options: [
          "balsa wood",
          "basswood",
          "carbon-fiber rods",
          "steel wire",
          "cardboard (for the trial mock-up)",
        ],
        correct: [0, 2],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["balsa", "basswood", "carbon-fiber rods", "steel wire", "cardboard"],
          explanation:
            "Balsa is rejected because it keeps splitting, and the carbon-fiber rods are banned under the new wood-and-wire rules, so those two are ruled out. Basswood is the wood they choose, steel wire is on the approved list for the cables, and cardboard is wanted for the mock-up — three materials that are all still in play.",
        },
      },
      {
        id: "q3",
        type: "short-answer",
        label: "Questions 7–8",
        instruction: "Answer the questions below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        questions: [
          "7. What will the team build before cutting the good wood?",
          "8. Until what time does the design studio stay open on weekdays?",
        ],
        accepted: [
          ["a cardboard mock-up", "cardboard mock-up", "a mock-up", "mock-up"],
          ["seven", "7", "seven o'clock"],
        ],
        meta: {
          skills: ["detail", "numbers"],
          keywords: ["cardboard", "mock-up", "seven o'clock", "nine"],
          trap: {
            family: "correction",
            lure: ["nine"],
            note:
              "Mia first quotes nine o'clock, then realises that is the library's hours — the studio closes at seven, and the corrected value is the one that scores.",
          },
          explanation:
            "Question 7 comes from the plan to build a cardboard mock-up so the cheap mistakes happen before the basswood is cut. For question 8, Mia corrects herself: the studio stays open till nine is wrong — that is the library — and the studio in fact closes at seven o'clock on weekdays.",
        },
      },
    ],
    transcriptNote:
      "Two snares to notice: the studio's closing time is corrected from nine to seven o'clock, and the materials question hinges on hearing that balsa splits and that the rules now ban the carbon-fiber rods.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-fieldwork",
    title: "Creek field trip debrief",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 8,
    accentMix: ["australian"],
    intro:
      "You will hear a tutor and two geography students discussing the results of a field trip to a creek. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "wilcox", name: "Dr Wilcox", role: "geography tutor debriefing a field trip", accent: "australian" },
      { id: "bella", name: "Bella", role: "student who sampled Site 1", accent: "australian" },
      { id: "tom", name: "Tom", role: "student who sampled Site 2", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "wilcox", text: "Alright, you two — good day out on Boggy Creek? Before the detail evaporates, let's log your readings. Bella, you had Site 1, up in the forest reach?" },
      { id: "s2", speakerId: "bella", text: "Yep. Shallowest of the three — thirteen centimetres — and the water was beautiful and cool, fourteen degrees." },
      { id: "s3", speakerId: "wilcox", text: "Thirteen at the forest site. Tom, Site 2 — what depth did you get there?" },
      { id: "s4", speakerId: "tom", text: "Thirty centimetres, on the nose. I measured it twice, actually, because after thirteen I didn't trust my ears." },
      { id: "s5", speakerId: "wilcox", text: "Good — thirteen upstream, thirty at Site 2, and Site 3 came in at forty-five, didn't it?" },
      { id: "s6", speakerId: "bella", text: "Forty-five, yeah — it's basically a pool below the dairy flats. Warmest water too: twenty-one degrees." },
      { id: "s7", speakerId: "wilcox", text: "So fourteen, seventeen, twenty-one as you move downstream. Tom, what did Site 2 come in at?" },
      { id: "s8", speakerId: "tom", text: "Seventeen — it felt like bathwater compared with the forest." },
      { id: "s9", speakerId: "wilcox", text: "Now the shrimp counts — thirty seconds of kick-sampling at each site. Site 1?" },
      { id: "s10", speakerId: "bella", text: "Forty-six. They were everywhere in the gravel." },
      { id: "s11", speakerId: "tom", text: "Site 2 was twelve, way down. And Site 3 was the sad one — five shrimp, and the water was all murky." },
      { id: "s12", speakerId: "wilcox", text: "Five. Right, so what's going on? Bella, take the temperature first — why would it climb like that?" },
      { id: "s13", speakerId: "bella", text: "There's no shade once the forest ends. The bank's been cleared for grazing, so the sun sits on the water all day." },
      { id: "s14", speakerId: "wilcox", text: "Cleared banks — I'd back that, and it fits the dairy flats. Tom, the shrimp crash at Site 3?" },
      { id: "s15", speakerId: "tom", text: "Runoff, I reckon. The top paddock was fertilised on the Wednesday, and it rained hard that Thursday — it'd wash straight in." },
      { id: "s16", speakerId: "wilcox", text: "Plausible. And the murky water tells its own story — that's the cattle wading in and out, churning up the bed. Not the hot week, mind — Site 1 stayed cool in exactly the same weather." },
      { id: "s17", speakerId: "bella", text: "So the farm, basically, on three fronts." },
      { id: "s18", speakerId: "wilcox", text: "Three fronts — that's a nice line for your write-up. One more thing: the council will tell you the new culvert under the footbridge has altered the flow, but your velocity readings barely moved, so that's a red herring.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "table",
        label: "Questions 1–6",
        instruction: "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "BOGGY CREEK — field-trip readings" }],
          [{ kind: "text", text: "Site" }, { kind: "text", text: "Depth (cm)" }, { kind: "text", text: "Water temp. (°C)" }, { kind: "text", text: "Shrimp count" }],
          [{ kind: "text", text: "Site 1 — forest reach" }, { kind: "text", text: "13" }, { kind: "blank", no: 1 }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Site 2 — grazing flats" }, { kind: "blank", no: 3 }, { kind: "text", text: "17" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Site 3 — dairy pool" }, { kind: "text", text: "45" }, { kind: "blank", no: 5 }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "14", alternatives: ["fourteen"], numbers: true },
          { no: 2, answer: "46", alternatives: [], numbers: true },
          { no: 3, answer: "30", alternatives: ["thirty"], numbers: true },
          { no: 4, answer: "12", alternatives: ["twelve"], numbers: true },
          { no: 5, answer: "21", alternatives: [], numbers: true },
          { no: 6, answer: "5", alternatives: ["five"], numbers: true },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "similar-sound", "detail"],
          keywords: ["thirteen", "thirty", "fourteen", "forty-six", "twenty-one", "twelve", "five"],
          trap: {
            family: "similar-sound",
            lure: ["thirteen"],
            note:
              "Thirteen and thirty are designed to collide in the ear: thirteen centimetres is Site 1's depth, while Site 2 is thirty — check which site each number belongs to before writing.",
          },
          explanation:
            "The grid follows the three sites in order. Site 1 logged fourteen degrees and forty-six shrimp; Site 2's depth was thirty centimetres with twelve shrimp; Site 3 was warmest at twenty-one degrees with just five shrimp. Tom double-checks his thirty precisely because it sounds so close to thirteen, so anchor every figure to its own site.",
        },
      },
      {
        id: "q2",
        type: "matching",
        label: "Questions 7–9",
        instruction:
          "The group suggests a most likely cause for each finding. Choose THREE answers from the box and write the correct letter, A–E, next to questions 7–9. You may use each letter once only.",
        items: [
          "7 the steady rise in water temperature downstream",
          "8 the collapse in shrimp numbers at Site 3",
          "9 the murky, silt-laden water at Site 3",
        ],
        options: [
          "fertiliser washing off the paddock",
          "cattle trampling the creek bed",
          "the new culvert under the footbridge",
          "the spell of hot weather that week",
          "the loss of shade trees along the cleared banks",
        ],
        correct: [4, 0, 1],
        meta: {
          skills: ["attribution", "paraphrase", "negation"],
          keywords: ["cleared for grazing", "runoff", "cattle", "culvert", "hot week"],
          trap: {
            family: "negation",
            lure: ["culvert", "hot week"],
            note:
              "The tutor rules out the hot week and the culvert in as many words — a cause that gets mentioned is not the same as a cause that gets blamed.",
          },
          explanation:
            "Bella explains the temperature rise through the cleared, unshaded grazing banks (E); Tom blames the shrimp crash on fertiliser washed off the paddock by Thursday's rain (A); and the tutor attributes the murky water to cattle wading in and churning up the bed (B). The culvert (C) and the hot week (D) are both raised and then dismissed.",
        },
      },
    ],
    transcriptNote:
      "The depths at Sites 1 and 2 — thirteen and thirty — are built to collide in the ear, so check which site each number belongs to. The tutor also rules out the hot week and the new culvert as causes before the group settles its explanations.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-dissertation",
    title: "Dissertation draft supervision",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 9,
    accentMix: ["nz", "british"],
    intro:
      "You will hear a supervision meeting in which a postgraduate student discusses his dissertation draft with his supervisor. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "hollis", name: "Dr Hollis", role: "dissertation supervisor reviewing a full draft", accent: "nz" },
      { id: "owen", name: "Owen", role: "masters student revising his dissertation", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "hollis", text: "Owen — come in, sit down. I've been through your draft twice now, so let's talk it through properly." },
      { id: "s2", speakerId: "owen", text: "Bracing myself. I know it's under length, so —" },
      { id: "s3", speakerId: "hollis", text: "It's not length, and don't let the word count stalk you. The writing's clean, and the fieldwork's the strongest thing in it. My worry sits upstream of all that: the project doesn't yet know what it's about. It's three studies wearing one title." },
      { id: "s4", speakerId: "owen", text: "I did wonder. The three towns were meant to give me comparison." },
      { id: "s5", speakerId: "hollis", text: "And instead they thin you out. Barrowmouth is where your material sings — keep that one and let the other two go. And put your research question on page one; don't make the reader excavate it." },
      { id: "s6", speakerId: "owen", text: "Okay. What about the chapters themselves? Chapter two, the review?" },
      { id: "s7", speakerId: "hollis", text: "Honestly? It reads like a shopping list, author by author. Don't get me wrong — the reading's all there, and it's good reading. But I want it regrouped around three or four of the big debates in the field, not a roll-call of who said what." },
      { id: "s8", speakerId: "owen", text: "So reorganise, not re-read." },
      { id: "s9", speakerId: "hollis", text: "Exactly. Chapter three, the methodology — that one's back to front. You defend your choices before the reader even knows what you did. Describe first, justify afterwards, and it'll practically read itself." },
      { id: "s10", speakerId: "owen", text: "That's fair. I wrote it in the order I worried about it." },
      { id: "s11", speakerId: "hollis", text: "And chapter four — look, your interviews are gold dust, genuinely. But you claim more than they show. Every time you've written 'proves', cross it out and write 'suggests'. Claim less, and the chapter lands harder." },
      { id: "s12", speakerId: "owen", text: "So scale the argument back and let the material breathe." },
      { id: "s13", speakerId: "hollis", text: "You've got it. Timing, then: I said the fourteenth in my email, but I'm at a conference that week, so make it the twenty-first. And before that, send me a skeleton of the new structure — one page, no prose." },
      { id: "s14", speakerId: "owen", text: "One page by Friday, revised chapters by the twenty-first. I can do that." },
      { id: "s15", speakerId: "hollis", text: "Good lad. Off you go — you've got a dissertation to pull into focus, and it's a better one than you think.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–5",
        instruction: "Complete the summary below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Dr Hollis's overall view is that the draft is clearly written and rests on impressive" }, { kind: "blank", no: 1 }, { kind: "text", text: ", but that the project lacks a single focus." }],
          [{ kind: "text", text: "She advises Owen to concentrate on one" }, { kind: "blank", no: 2 }, { kind: "text", text: "rather than three, and to state the study's central" }, { kind: "blank", no: 3 }, { kind: "text", text: "on the first page." }],
          [{ kind: "text", text: "The rewritten chapters should reach her by the" }, { kind: "blank", no: 4 }, { kind: "text", text: "of the month, and before then Owen will email her a brief" }, { kind: "blank", no: 5 }, { kind: "text", text: "of the new structure." }],
        ],
        blanks: [
          { no: 1, answer: "fieldwork", alternatives: [] },
          { no: 2, answer: "town", alternatives: ["Town"] },
          { no: 3, answer: "question", alternatives: [] },
          { no: 4, answer: "21st", alternatives: ["21"], numbers: true },
          { no: 5, answer: "skeleton", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["paraphrase", "detail", "numbers"],
          keywords: ["fieldwork", "Barrowmouth", "research question", "twenty-first", "skeleton", "fourteenth"],
          trap: {
            family: "correction",
            lure: ["fourteenth"],
            note:
              "The supervisor first names the fourteenth from her email, then moves the deadline to the twenty-first because of a conference — in IELTS the corrected value is the answer.",
          },
          explanation:
            "The summary rewords the whole meeting: the fieldwork is the strongest element, the study narrows from three towns to one — Barrowmouth — the research question moves to the first page, the deadline shifts to the twenty-first after the correction from the fourteenth, and a one-page skeleton of the new structure is due before the rewrite.",
        },
      },
      {
        id: "q2",
        type: "matching",
        label: "Questions 6–8",
        instruction:
          "Dr Hollis gives a verdict on each chapter. Choose THREE answers from the box and write the correct letter, A–E, next to questions 6–8. You may use each letter once only.",
        items: [
          "6 Chapter 2 — the review of the literature",
          "7 Chapter 3 — the methodology",
          "8 Chapter 4 — the findings",
        ],
        options: [
          "its claims outrun the evidence and should be scaled back",
          "thorough but shapeless: regroup it around a few key debates",
          "the wrong way round: report the procedure before defending it",
          "a shopping list of sources, most of which should be discarded",
          "gold-dust material that deserves a separate chapter of its own",
        ],
        correct: [1, 2, 0],
        meta: {
          skills: ["paraphrase", "opinion", "attribution"],
          keywords: ["shopping list", "back to front", "gold dust", "regrouped", "cross it out"],
          trap: {
            family: "mention-lure",
            lure: ["shopping list", "gold dust"],
            note:
              "The two verdicts that lift her words verbatim twist her meaning: she keeps the reading and only regroups it, and she trims the findings claims rather than expanding them, so the quoted options are the ones to avoid.",
          },
          explanation:
            "The literature review is thorough but must be regrouped around the field's big debates (B); the methodology defends choices before describing them, so it needs reversing (C); and the findings overclaim, since the interviews suggest rather than prove (A). The options echoing 'shopping list' and 'gold dust' quote her accurately but draw the wrong conclusion from her verdicts.",
        },
      },
    ],
    transcriptNote:
      "The deadline is corrected from the fourteenth to the twenty-first, and the matching options that quote the supervisor word for word — 'shopping list' and 'gold dust' — distort her actual verdicts. The summary rewords her advice rather than repeating it.",
    source: BANK_SOURCE_NOTE,
  },
];
