/**
 * IELTS Listening Masterclass — question-bank expansion (PROMPT 54).
 * Part 3 batch C: seven further academic-discussion exercises
 * (students, tutors and advisors — opinion, agreement, disagreement
 * and reasons), running from standard to advanced difficulty.
 *
 * Every recording is original TalkSy practice material written in the
 * style of the test — not an official IELTS examination recording.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP3CExercises: BankExercise[] = [
  // -------------------------------------------------------------------------
  // 1 — Engineering: reviewing the footbridge load test
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-bridge-project",
    title: "Reviewing an engineering bridge project",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "technology",
    accentMix: ["british"],
    intro:
      "You will hear an engineering tutor and two students reviewing the results of a footbridge load test. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ellison", name: "Dr Ellison", role: "engineering lecturer reviewing the load-test results", accent: "british" },
      { id: "ravi", name: "Ravi", role: "civil-engineering student on the footbridge team", accent: "british" },
      { id: "gemma", name: "Gemma", role: "civil-engineering student on the footbridge team", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ellison", text: "Right, you two — grab a bench. Yesterday was the load test on your footbridge, so while it's fresh in everyone's heads, let's pull it apart. First impressions?" },
      { id: "s2", speakerId: "ravi", text: "Mixed, honestly. The deck carried the full twelve hundred kilos — that's four hundred over the requirement — so on paper we've passed." },
      { id: "s3", speakerId: "gemma", text: "Except it didn't behave the way the model said it would. The deflection at mid-span was, what, double?" },
      { id: "s4", speakerId: "ravi", text: "Eighteen millimetres against a predicted nine. The numbers don't lie." },
      { id: "s5", speakerId: "ellison", text: "So the structure took the load but moved further than it should have. The interesting question is why. Ravi — you had a theory, I believe?" },
      { id: "s6", speakerId: "ravi", text: "I blamed the adhesive at first, the resin bonds along the side panels. Then I pulled the batch records for the mix, and they were all in spec, so that theory's dead." },
      { id: "s7", speakerId: "gemma", text: "I never bought the adhesive theory anyway. The strain gauges tell a cleaner story — the ones we glued along the mid-span joint maxed out long before the pair near the abutments." },
      { id: "s8", speakerId: "ellison", text: "Which points a fairly firm finger at the joint where the two half-decks meet. My hunch — and it is only a hunch — is that the bolt group there was under-sized. Someone checked it for shear and forgot the moment.", pauseAfterMs: 300 },
      { id: "s9", speakerId: "ravi", text: "That would fit the gauge readings. The bolts in that group were eights — no, hang on, twelves. The eights went on the handrail brackets." },
      { id: "s10", speakerId: "gemma", text: "Even with stouter bolts, though, I reckon the deck plates themselves are too thin. It isn't either-or; both things could be true at once." },
      { id: "s11", speakerId: "ellison", text: "Possibly, but let's not redesign the whole deck on a hunch and a Thursday afternoon. There's a cheaper test: bolt a stiffener plate across the joint and run the load again." },
      { id: "s12", speakerId: "ravi", text: "We can do that by Friday — the workshop has plate offcuts in the rack." },
      { id: "s13", speakerId: "gemma", text: "For the re-test I want the sensors moved. Half the gauges ended up near the ends where nothing happens; put them where the action is." },
      { id: "s14", speakerId: "ellison", text: "Agreed — and log at double the sampling rate, or we'll miss the peak again like last time." },
      { id: "s15", speakerId: "ravi", text: "What about the handrail? The brief only asks it to stop a wandering cyclist." },
      { id: "s16", speakerId: "ellison", text: "The handrail stays exactly as built — it isn't structural, and the budget is spoken for. Gemma, write the failure analysis up properly this week; that section earns marks even where the bridge wobbles." },
      { id: "s17", speakerId: "gemma", text: "I'll circulate a draft tonight. No — actually tomorrow night; tonight I'm at my sister's." },
      { id: "s18", speakerId: "ellison", text: "Tomorrow it is. So: Friday, stiffener plate, re-test, and we'll see whose hunch survives contact with the data.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What was the students' verdict on the load test?",
        options: [
          "The bridge collapsed before reaching the required load.",
          "The deck carried the load but deflected further than predicted.",
          "The results matched the computer model closely.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "numbers", "paraphrase"],
          keywords: ["load test", "twelve hundred", "deflection", "eighteen millimetres"],
          explanation:
            "The deck carried twelve hundred kilos — four hundred over the requirement — so the bridge passed on paper. But Ravi's eighteen millimetres against a predicted nine shows it deflected roughly double the model's figure, which is the reservation Gemma raises straight afterwards.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What did Ravi conclude about the resin bonds along the side panels?",
        options: [
          "They had been mixed in the wrong proportions.",
          "They were not the cause of the excessive movement.",
          "They failed where the deck met the abutments.",
        ],
        correct: [1],
        meta: {
          skills: ["corrections", "paraphrase", "detail"],
          keywords: ["batch records", "resin bonds", "adhesive"],
          trap: {
            family: "correction",
            lure: ["adhesive"],
            note:
              "Ravi opens by blaming the adhesive and then withdraws the theory once the batch records check out — the retracted explanation is the trap, and its dismissal is the answer.",
          },
          explanation:
            "Ravi first blames the resin bonds, but then pulls the batch records, finds every mix in spec and declares the theory dead. The correct option records his final position rather than his first suspicion, which he himself corrects within a single turn.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Ellison suspect is the most likely weakness?",
        options: [
          "The deck plates are too thin to carry their share.",
          "The strain gauges were glued in the wrong places.",
          "The bolt group at the central joint was under-sized.",
        ],
        correct: [2],
        meta: {
          skills: ["attribution", "inference", "paraphrase"],
          keywords: ["bolt group", "deck plates", "mid-span joint"],
          trap: {
            family: "attribution",
            lure: ["deck plates"],
            note:
              "The thin-plate theory is Gemma's contribution, not the tutor's — the under-sized bolt group is Dr Ellison's own hunch, so watch whose mouth each theory comes out of.",
          },
          explanation:
            "Dr Ellison's hunch is that the bolt group at the mid-span joint was under-sized — checked for shear but not for the moment. The too-thin deck plates belong to Gemma, and the misplaced gauges are a separate point about the re-test, so both distractors borrow another speaker's line.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Ellison decide about the handrail?",
        options: [
          "It should be reinforced with stouter bolts.",
          "It should be left exactly as it is.",
          "It should be retested with extra sensors.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["handrail", "structural", "budget"],
          trap: {
            family: "mention-lure",
            lure: ["stouter bolts"],
            note:
              "The stouter bolts belong to the debate about the central joint, and the extra sensors concern the deck gauges — words lifted from elsewhere in the discussion are the lure here.",
          },
          explanation:
            "The tutor rules that the handrail stays exactly as built, because it is not structural and the budget is already spoken for. The stouter bolts and the extra sensors are real proposals in the discussion, but both belong to other parts of the bridge, not the rail.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "The group agrees an action for each part of the re-test. Choose FOUR answers from the box and write the correct letter, A–F, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 the joint where the two half-decks meet",
          "6 the strain gauges",
          "7 the sampling rate for the re-test",
          "8 the handrail",
        ],
        options: [
          "leave it exactly as built",
          "double it so the peak is not missed",
          "move it to mid-span, where the action is",
          "bolt a stiffener plate across it",
          "rebuild it with thicker plates",
          "refit it with stouter bolts",
        ],
        correct: [3, 2, 1, 0],
        meta: {
          skills: ["paraphrase", "detail", "process-tracking"],
          keywords: ["stiffener plate", "sensors", "sampling rate", "handrail"],
          explanation:
            "The central joint gets a stiffener plate bolted across it before Friday; the strain gauges move from the ends to mid-span, where the action is; the sampling rate doubles so the peak is not missed; and the handrail stays exactly as built. Thicker plates and stouter bolts are both aired in the discussion but never agreed.",
        },
      },
    ],
    transcriptNote:
      "Attribution is the theme: the thin-plate theory is Gemma's, the under-sized bolt group is the tutor's, and Ravi's adhesive theory is raised only to be buried. The handrail survives the review untouched.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 2 — Museum studies: planning the exhibition brief
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-exhibition-brief",
    title: "Planning a museum exhibition brief",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "culture",
    accentMix: ["british", "australian"],
    intro:
      "You will hear two museum-studies students and their tutor planning the brief for a seaside-holiday exhibition. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ferreira", name: "Dr Ferreira", role: "museum-studies tutor leading the exhibition-planning session", accent: "british" },
      { id: "amara", name: "Amara", role: "student curating the seaside-holiday exhibition", accent: "british" },
      { id: "nadia", name: "Nadia", role: "student co-curating the exhibition", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "ferreira", text: "Come in, come in. This is the session where your seaside-holiday exhibition stops being a list of lovely objects and becomes a brief the museum can actually build from. Where have the two of you got to?" },
      { id: "s2", speakerId: "amara", text: "We've shortlisted about forty objects from the store, but the gallery only has room for fifteen, so today is mostly about what makes the cut — and where each thing sits." },
      { id: "s3", speakerId: "ferreira", text: "Good. Before the placements, though, a principle. The strongest small exhibitions argue one clear thing. Ask of every object: what story does this carry that the next one cannot? And resist the timeline wall — a row of dates is not an argument.", pauseAfterMs: 300 },
      { id: "s4", speakerId: "nadia", text: "That's the row Amara and I have been having. She wants the greatest hits; I want a single thread." },
      { id: "s5", speakerId: "amara", text: "I do not! Well — partly. I did push for the beauty-queen sash because it's gorgeous, but Nadia's right that it's off-topic for a show about ordinary holidaymakers." },
      { id: "s6", speakerId: "ferreira", text: "Then let the thread do the pruning. Placements — start me off." },
      { id: "s7", speakerId: "nadia", text: "The cotton bathing costume from the thirties. It's fragile and light-sensitive, so it needs the costume case with the dim lighting — we settled that weeks ago." },
      { id: "s8", speakerId: "amara", text: "The enamel beach-hut signs are the first thing visitors will clock, so they go by the entrance as the welcome." },
      { id: "s9", speakerId: "nadia", text: "I did suggest the postcard albums could sit in the entrance too, as a teaser. But Amara's right — that bay is tiny, and people linger at entrances; we'd have a queue by eleven." },
      { id: "s10", speakerId: "amara", text: "So the postcards go on the activity table instead. We'll print facsimiles visitors can shuffle through — kids can sort them by decade, and the originals stay in the drawer." },
      { id: "s11", speakerId: "ferreira", text: "Sensible. What about sound? The oral-history recordings finished last month, I hear." },
      { id: "s12", speakerId: "nadia", text: "Twenty interviews with former day-trippers, all cleaned up. Those go in the listening booth at the back — headphones, two seats, well away from the buzz." },
      { id: "s13", speakerId: "amara", text: "Which leaves the penny-slot machine. It still works: an old penny in, and the fortune-teller's card flips out of the slot." },
      { id: "s14", speakerId: "nadia", text: "That one I'm genuinely torn over. Running it all summer means wear on a mechanism that's a century old. I'd rather it sat behind glass and ran twice a day at set times." },
      { id: "s15", speakerId: "amara", text: "Set times is a fair compromise — a demonstration rather than a vending machine." },
      { id: "s16", speakerId: "ferreira", text: "That's the spirit. Tasks, then: Amara, draft the object list with one line of justification per item — fifteen lines, no more. Nadia, chase the insurance schedule for the machine before we promise any demonstrations." },
      { id: "s17", speakerId: "nadia", text: "I'll ring the registrar this afternoon." },
      { id: "s18", speakerId: "amara", text: "And I'll bring the printed list to Thursday's session — with the sash quietly dropped, obviously.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction:
          "The group decides where each object will be displayed. Choose FIVE answers from the box and write the correct letter, A–F, next to questions 1–5. You may use each letter once only.",
        items: [
          "1 the cotton bathing costume from the 1930s",
          "2 the enamel beach-hut signs",
          "3 the postcard albums",
          "4 the oral-history recordings",
          "5 the penny-slot fortune-teller machine",
        ],
        options: [
          "the entrance welcome bay",
          "the dimly lit costume case",
          "the hands-on activity table",
          "the listening booth at the back",
          "behind glass, running only at set times",
          "the timeline wall by the exit",
        ],
        correct: [1, 0, 2, 3, 4],
        meta: {
          skills: ["paraphrase", "detail", "corrections"],
          keywords: ["costume case", "entrance", "activity table", "listening booth", "behind glass", "timeline wall"],
          trap: {
            family: "correction",
            lure: ["entrance"],
            note:
              "Nadia first proposes the entrance for the postcard albums before the group moves them to the activity table — in Part 3 the relocated arrangement, not the first idea, is what scores.",
          },
          explanation:
            "The fragile costume needs the dim costume case; the enamel signs welcome visitors at the entrance; the postcard albums move to the hands-on activity table once the entrance bay proves too small; the recordings play in the listening booth; and the penny-slot machine sits behind glass, running only at set times. The timeline wall is named purely to be resisted.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Ferreira say should guide the choice of objects?",
        options: [
          "Objects should be arranged in strict date order.",
          "Each object must carry a story the others cannot tell.",
          "The most striking objects should open the exhibition.",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "opinion", "paraphrase"],
          keywords: ["one clear thing", "story", "timeline wall"],
          trap: {
            family: "mention-lure",
            lure: ["timeline wall"],
            note:
              "The timeline wall is named only to be resisted — a row of dates is explicitly not an argument, so the option echoing the tutor's words reverses her meaning.",
          },
          explanation:
            "The tutor's principle is that a small exhibition should argue one clear thing, so every object must justify itself with a story the next one cannot tell. The timeline wall is mentioned precisely so it can be ruled out as an argument, and no appeal to striking openings is made.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Nadia's concern about the penny-slot machine?",
        options: [
          "Continuous operation would wear out a century-old mechanism.",
          "Children might trap their fingers in the coin slot.",
          "The museum cannot insure a working machine.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "detail", "paraphrase"],
          keywords: ["wear", "mechanism", "behind glass", "insurance"],
          explanation:
            "Nadia is torn but settles on the wear issue: running the machine all summer would grind away at a mechanism a century old, so she wants it behind glass, working only at set times. Insurance is her follow-up errand rather than her worry, and trapped fingers are never mentioned.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What task is Amara given before the next meeting?",
        options: [
          "Phone the registrar about the insurance schedule.",
          "Write a one-line justification for each object on the list.",
          "Edit the oral-history recordings for the booth.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "attribution", "paraphrase"],
          keywords: ["object list", "fifteen lines", "registrar"],
          trap: {
            family: "attribution",
            lure: ["insurance schedule"],
            note:
              "Chasing the insurance schedule is Nadia's job — attaching the right task to the wrong student is the classic Part 3 attribution snare.",
          },
          explanation:
            "Dr Ferreira asks Amara to draft the object list with a single line of justification per item — fifteen lines at most — and bring it printed to Thursday. Ringing the registrar about the insurance schedule belongs to Nadia, and nobody is asked to edit the recordings.",
        },
      },
    ],
    transcriptNote:
      "The postcard albums start in the entrance and end up on the activity table — first proposals are often relocated in Part 3. The timeline wall and the insurance schedule both appear in the discussion but point away from the answers.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 3 — Health: interrogating the breakfast-and-concentration study
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-nutrition",
    title: "Interpreting a nutrition study",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "health",
    accentMix: ["british"],
    intro:
      "You will hear a tutor and two students discussing a research study on breakfast and classroom concentration. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "rowe", name: "Dr Rowe", role: "research-methods tutor leading the journal-club discussion", accent: "british" },
      { id: "theo", name: "Theo", role: "student presenting the study's findings", accent: "british" },
      { id: "sana", name: "Sana", role: "student critiquing the study's methods", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "rowe", text: "Settle in, both of you. You've each read the Ashcroft study on breakfast and classroom concentration, so today we interrogate it properly. Theo — headline first, please." },
      { id: "s2", speakerId: "theo", text: "Eight hundred and twelve pupils across eleven schools, tracked through the autumn term. The ones who reported eating breakfast did noticeably better on the attention tasks, especially mid-morning." },
      { id: "s3", speakerId: "sana", text: "Before we all get excited, I chased down the methods section, and it's shakier than the abstract implies." },
      { id: "s4", speakerId: "rowe", text: "Good instinct. Start with the design. What kind of study are we dealing with?" },
      { id: "s5", speakerId: "theo", text: "An observational cohort, surely. Nobody assigned meals; the team simply watched what pupils ate across the term and tested them at the end." },
      { id: "s6", speakerId: "rowe", text: "Precisely — which tells us breakfast eaters score higher, not that the toast causes the score. Sana, you had chapter and verse on the diaries?" },
      { id: "s7", speakerId: "sana", text: "The food diaries, yes. The pupils kept them for — hold on, I've written six weeks here, but that's the pilot. The main-study diaries ran nine weeks, filled in every day." },
      { id: "s8", speakerId: "theo", text: "Nine weeks of self-reported eating from teenagers. I remember being seventeen; my diary would have been pure fiction." },
      { id: "s9", speakerId: "rowe", text: "Self-report is a genuine weakness, agreed. But here's the sharper problem: who actually eats breakfast in this dataset?", pauseAfterMs: 300 },
      { id: "s10", speakerId: "sana", text: "The pupils from better-off homes, overwhelmingly. And the same pupils also logged more sleep and fewer late-night screens." },
      { id: "s11", speakerId: "rowe", text: "So household income is tangled through everything. The breakfast effect could be a wealth effect wearing a dressing gown. Theo — what's the fix?" },
      { id: "s12", speakerId: "theo", text: "You'd want a randomised trial: assign the breakfast, don't just observe it. A crossover, ideally — the same pupils do breakfast weeks and no-breakfast weeks, so each pupil acts as their own control." },
      { id: "s13", speakerId: "sana", text: "Which is more or less what I'd propose for our follow-up. Half the group fed, half fasted, and the testers blind to who's who." },
      { id: "s14", speakerId: "rowe", text: "So the testers can't be swayed, quite right. One further caveat for your write-up: every attention task in this study was pencil-and-paper. Would the gains survive on a screen? Nobody knows." },
      { id: "s15", speakerId: "theo", text: "So our proposal should argue for digitised testing as well as the crossover." },
      { id: "s16", speakerId: "rowe", text: "Among other things. Draft it as a two-page argument — the observed link, the confounding, then your trial design. And Sana, this time cite the methods table, not the press release." },
      { id: "s17", speakerId: "sana", text: "That jab was thoroughly deserved. Thursday, two pages, both names at the top.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What did the study find, according to Theo?",
        options: [
          "Pupils who ate breakfast scored higher on the attention tasks.",
          "Pupils from wealthier homes recorded less sleep.",
          "Breakfast eaters did better in their end-of-term exams.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["attention tasks", "better-off", "breakfast"],
          explanation:
            "Theo reports that the pupils who reported eating breakfast did noticeably better on the attention tasks, particularly mid-morning. The sleep finding belongs to the better-off group and points the other way, and the study measured tasks rather than exams.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Sana identify as the deeper problem with the findings?",
        options: [
          "The diaries were completed by parents rather than pupils.",
          "Breakfast-eating tracks household income, which also tracks sleep.",
          "The testers knew which pupils had eaten breakfast.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase", "detail"],
          keywords: ["better-off", "sleep", "household income"],
          explanation:
            "Sana shows that the pupils eating breakfast were overwhelmingly the better-off ones, who also logged more sleep and fewer late-night screens, so household income runs through the whole pattern. Parent-completed diaries are never mentioned, and blind testers belong to the proposed follow-up study instead.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Rowe mean by 'a wealth effect wearing a dressing gown'?",
        options: [
          "The apparent breakfast gain may really reflect family background.",
          "Breakfast only benefits pupils who eat it at home.",
          "Wealthy families exaggerate their children's results.",
        ],
        correct: [0],
        meta: {
          skills: ["paraphrase", "inference", "opinion"],
          keywords: ["wealth effect", "dressing gown", "household income"],
          explanation:
            "The dressing-gown image is the tutor's paraphrase of the confounding problem: because household income predicts both breakfast and sleep, the measured gain may be a wealth effect in disguise rather than anything the cereal itself did.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What design do the students propose for the follow-up study?",
        options: [
          "A larger observational study across more schools.",
          "A crossover trial in which each pupil is their own control.",
          "A trial in which the testers choose each pupil's meals.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase", "process-tracking"],
          keywords: ["crossover", "own control", "randomised"],
          explanation:
            "Theo proposes a randomised crossover — the same pupils complete breakfast weeks and no-breakfast weeks so each acts as their own control — and Sana adds testers blind to who's who. A bigger observational study would repeat the original flaw rather than fix it.",
        },
      },
      {
        id: "q5",
        type: "sentence",
        label: "Questions 5–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "5 The Ashcroft study tracked " }, { kind: "blank", no: 5 }, { kind: "text", text: " pupils across eleven schools." }],
          [{ kind: "text", text: "6 Pupils kept daily food diaries for " }, { kind: "blank", no: 6 }, { kind: "text", text: " in the main study." }],
          [{ kind: "text", text: "7 Breakfast eaters performed noticeably better on the " }, { kind: "blank", no: 7 }, { kind: "text", text: " tasks." }],
          [{ kind: "text", text: "8 The reported gain may partly reflect household " }, { kind: "blank", no: 8 }, { kind: "text", text: " rather than breakfast itself." }],
        ],
        blanks: [
          { no: 5, answer: "812", alternatives: [], numbers: true },
          { no: 6, answer: "nine weeks", alternatives: ["9 weeks"], numbers: true },
          { no: 7, answer: "attention", alternatives: [] },
          { no: 8, answer: "income", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["paraphrase", "numbers", "corrections"],
          keywords: ["eight hundred and twelve", "nine weeks", "attention", "income", "pilot"],
          trap: {
            family: "correction",
            lure: ["six weeks"],
            note:
              "Sana reads six weeks from her notes before correcting it to nine — the pilot figure is the lure, and the main-study length is the key.",
          },
          explanation:
            "The study tracked eight hundred and twelve pupils, whose main-study diaries ran nine weeks once the six-week pilot is set aside; the breakfast eaters did better on the attention tasks; and the tutor warns the gain may reflect household income rather than breakfast itself.",
        },
      },
    ],
    transcriptNote:
      "Sana's six weeks is the pilot figure, corrected to nine for the main study — corrected values are the ones that score. The tutor's dressing-gown image is a paraphrase of the income confound, not a separate finding.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 4 — Economics: the remote-work labour-market seminar
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-labour-market",
    title: "A labour-market economics seminar",
    part: 3,
    difficulty: 5,
    estimatedMinutes: 9,
    topic: "economics",
    accentMix: ["british", "north-american"],
    intro:
      "You will hear a university seminar in which a tutor and two economics students discuss a study on remote working. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "kaur", name: "Dr Kaur", role: "economics tutor leading the seminar", accent: "british" },
      { id: "ben", name: "Ben", role: "exchange student defending the remote-work findings", accent: "north-american" },
      { id: "rosie", name: "Rosie", role: "student questioning the promotion data", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "kaur", text: "Right, seminar. This week's paper: Hartwell Logistics, the call-centre firm with three thousand staff that went fully remote in twenty twenty-two and then published its own numbers. Ben, what did you take from it?" },
      { id: "s2", speakerId: "ben", text: "The headline, professor: productivity, measured as calls handled per shift, rose about four per cent once everyone worked from home. To me that settles it — the office was never where the work happened." },
      { id: "s3", speakerId: "rosie", text: "I'd pump the brakes. Two pages later, the same report shows the remote cohort being promoted at barely half the rate of the people who stayed in the building. Four per cent more calls, and half as many promotions? I know which number shapes a career." },
      { id: "s4", speakerId: "ben", text: "That gap could be a first-year fluke. Everyone was still adjusting —" },
      { id: "s5", speakerId: "kaur", text: "— or it could be the finding. Let's stay with it. Rosie, why would output rise while advancement falls? Take a run at it." },
      { id: "s6", speakerId: "rosie", text: "Because promotion isn't decided by output. The panels worked from manager nominations, and managers nominate the people they bump into — the faces they know. It's visibility, not merit." },
      { id: "s7", speakerId: "ben", text: "See, I read it differently. At home you get fewer interruptions; nobody drops by your desk. Deep focus, more calls. And maybe the promotable work, the tricky accounts, still went to the people physically around, so remote staff never got the chance to shine." },
      { id: "s8", speakerId: "kaur", text: "Which is a second mechanism doing the same damage, notice. Now the productivity number itself — can we actually trust it as output?" },
      { id: "s9", speakerId: "rosie", text: "It counts calls per shift. It doesn't count the invisible work — helping a stuck colleague, coaching a new starter. That apparently happened mostly in the office kitchen." },
      { id: "s10", speakerId: "kaur", text: "Precisely my concern. The metric captures whatever is easy to count and misses the glue. So the four per cent may flatter the arrangement.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "ben", text: "Though the firm kept its two hundred juniors on a mentoring scheme — formal sessions, diarised. So somebody there saw the gap coming." },
      { id: "s12", speakerId: "kaur", text: "They did — for juniors only, mind. Now, the part the paper buries in an appendix: what happened to the analysts who were passed over?" },
      { id: "s13", speakerId: "rosie", text: "They walked. The exit interviews are brutal — 'invisible people leave'. The firm lost a third of its remote analysts inside eighteen months, and replacing them cost more than the productivity gain ever delivered." },
      { id: "s14", speakerId: "ben", text: "Okay, I concede the headline undersold the cost side. I still think remote work works if you fix the visibility problem." },
      { id: "s15", speakerId: "rosie", text: "And how exactly do you fix it? Blind promotion panels?" },
      { id: "s16", speakerId: "kaur", text: "Now that would be a study worth running: nominations stripped of location, outcomes tracked for five years. Because what this paper cannot tell us — and Ben flagged it without noticing — is whether the penalty survives once managers stop seeing faces. That's your essay question, both of you: measure the unmeasured, or manage it." },
      { id: "s17", speakerId: "ben", text: "Measure the unmeasured. That'll be a fun four thousand words." },
      { id: "s18", speakerId: "rosie", text: "Speak for yourself — mine starts tonight.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Ben initially conclude from the study?",
        options: [
          "Working from home raises measured productivity.",
          "Working from home damages promotion prospects.",
          "Offices remain essential for training juniors.",
        ],
        correct: [0],
        meta: {
          skills: ["attribution", "gist", "detail"],
          keywords: ["four per cent", "calls handled", "productivity"],
          trap: {
            family: "attribution",
            lure: ["promotion"],
            note:
              "The promotion gap is Rosie's counter-reading, not Ben's opening conclusion — the right fact attached to the wrong voice is the Part 3 snare.",
          },
          explanation:
            "Ben's opening reading is that the four per cent rise in calls handled per shift settles the argument in favour of home working. The promotion penalty is Rosie's objection, raised immediately afterwards, so the second option borrows her voice rather than his.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How does Rosie explain the fall in promotion rates?",
        options: [
          "Remote staff handled fewer calls per shift.",
          "Panels relied on managers nominating familiar faces.",
          "Remote workers refused to join mentoring.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase"],
          keywords: ["nominations", "visibility", "merit"],
          explanation:
            "Rosie argues that promotion was never decided by output: the panels worked from manager nominations, and managers nominate the faces they bump into. Visibility, not merit, is her mechanism, and she never claims that output fell among remote staff.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Kaur say about the four per cent figure?",
        options: [
          "It excludes calls handled at weekends.",
          "It counts only what is easy to count, missing the invisible work.",
          "It was revised downwards in the appendix.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase", "opinion"],
          keywords: ["easy to count", "glue", "metric"],
          explanation:
            "The tutor's worry is that the metric captures whatever is easy to count — calls per shift — and misses the glue: helping stuck colleagues and coaching new starters. So the four per cent may flatter remote working rather than prove it, and no revision is mentioned.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Ben note about the mentoring scheme?",
        options: [
          "It covered only the junior staff.",
          "It replaced all informal office training.",
          "It was withdrawn after eighteen months.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["juniors only", "mentoring scheme", "diarised"],
          explanation:
            "Ben points out that the firm kept its two hundred juniors on a diarised mentoring scheme with formal sessions, and Dr Kaur confirms it covered juniors only. The scheme was never withdrawn, and nobody claims it replaced informal training altogether.",
        },
      },
      {
        id: "q5",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Kaur say the study cannot yet tell us?",
        options: [
          "Whether the promotion penalty persists when managers no longer see who is present.",
          "Whether customers noticed any fall in service quality.",
          "Whether the productivity gains survive a full five years.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "paraphrase", "detail"],
          keywords: ["penalty", "stop seeing faces", "five years"],
          trap: {
            family: "mention-lure",
            lure: ["five years"],
            note:
              "Five years is the length of the study she proposes running, not the limitation she names — the unknown is whether the penalty survives when managers stop seeing faces.",
          },
          explanation:
            "The tutor's open question is whether the promotion penalty survives once managers stop seeing faces, which is why she proposes a five-year study with location stripped from nominations. Five years describes the study she wants, not a doubt about the productivity gains.",
        },
      },
      {
        id: "q6",
        type: "matching",
        label: "Questions 6–8",
        instruction:
          "The group draws a conclusion from each piece of evidence in the report. Choose THREE answers from the box and write the correct letter, A–E, next to questions 6–8. You may use each letter once only.",
        items: [
          "6 the four per cent rise in calls handled per shift",
          "7 the lower promotion rate among remote staff",
          "8 the departure of a third of the remote analysts",
        ],
        options: [
          "visible presence matters as much as performance",
          "measured output need not fall when staff work from home",
          "formal mentoring should be written into every contract",
          "overlooking people eventually costs the firm its staff",
          "the productivity gain came mainly from fewer interruptions",
        ],
        correct: [1, 0, 3],
        meta: {
          skills: ["inference", "evidence-evaluation", "paraphrase"],
          keywords: ["calls handled", "promotion", "exit interviews"],
          trap: {
            family: "mention-lure",
            lure: ["interruptions"],
            note:
              "The fewer-interruptions explanation is Ben's speculation, floated and never tested — an option echoing it sounds evidenced but is only a hunch.",
          },
          explanation:
            "The rise in calls handled shows measured output need not fall at home; the promotion gap shows visible presence counting as much as performance; and the exit interviews show the eventual cost, since overlooked analysts walk and replacing them outweighs the gain. Interruptions are speculation, and mentoring was a partial fix for juniors only.",
        },
      },
    ],
    transcriptNote:
      "Watch who owns each argument: Ben reads the headline number, Rosie reads the promotion gap, and the tutor's contribution is the missing 'glue'. The fewer-interruptions theory is floated and never confirmed, and five years is a proposed study, not a finding.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 5 — History: preparing the canals presentation
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-industrial",
    title: "Preparing an industrial-revolution presentation",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear two students preparing a presentation about their local town during the industrial revolution. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "megan", name: "Megan", role: "history student planning the canal presentation", accent: "british" },
      { id: "aled", name: "Aled", role: "history student who researched the town archive", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "megan", text: "Okay — ten minutes of planning now, two weeks to build it. 'What the canals did to Kelbridge': our presentation on the town during the industrial revolution." },
      { id: "s2", speakerId: "aled", text: "Where do we even start? I found so much in the archive I could talk for an hour." },
      { id: "s3", speakerId: "megan", text: "That's the trap, though — the Aled archive tour. We open strong instead: I've got the mill owner's diary, William Gorse, 1841, and the entry where he first sees a barge loaded with his cloth. We read that aloud, straight off the page." },
      { id: "s4", speakerId: "aled", text: "In costume? Don't joke — actually, I think a straight reading lands better than any slideshow." },
      { id: "s5", speakerId: "megan", text: "Agreed, straight reading. Then what? The audience needs the geography, because the whole argument turns on it." },
      { id: "s6", speakerId: "aled", text: "The archive holds the 1842 town map, the surveyor's one with every wharf and warehouse inked in. We project it huge and trace the canal route with a marker, warehouse by warehouse." },
      { id: "s7", speakerId: "megan", text: "Oh, that's good — people remember a line drawn in front of them. While you trace, I'll do the numbers: freight costs halved within two years of the canal opening, and the district's population doubled by 1851." },
      { id: "s8", speakerId: "aled", text: "Doubled from what base, though? Tiny villages double easily — the percentages might look dramatic and mean nothing." },
      { id: "s9", speakerId: "megan", text: "Fair. I'll give the absolute figures too, not just the percentage. What else? Working conditions? Child labour?" },
      { id: "s10", speakerId: "aled", text: "I'd leave the child-labour material out, honestly. Every presentation in this unit reaches for it; we'd sound like a rerun. The canals are our angle — stick to them.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "megan", text: "Reluctantly agreed. So: diary, map, numbers — and how do we finish? A summary feels flat." },
      { id: "s12", speakerId: "aled", text: "What if the audience votes? We put up the two claims — 'the canal brought prosperity' against 'the canal brought dependence' — and they vote before we reveal what happened when the railways came." },
      { id: "s13", speakerId: "megan", text: "A cliffhanger vote — I love it. But doesn't a vote need slips of paper, counting, all that faff?" },
      { id: "s14", speakerId: "aled", text: "Hands up is fine; it takes thirty seconds, and it wakes everyone up at minute nine when they're dozing." },
      { id: "s15", speakerId: "megan", text: "Sold. I'll scan the diary page and the map this week; you build the two claims as slides." },
      { id: "s16", speakerId: "aled", text: "And we rehearse it once, properly, before the real thing — Sunday suits me." },
      { id: "s17", speakerId: "megan", text: "Sunday it is. So the whole talk in one breath: Gorse's diary, the map, the costs, the vote.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How do the presenters decide to open the talk?",
        options: [
          "With a costumed role-play of the mill owner.",
          "With a reading from William Gorse's diary.",
          "With a slideshow of archive photographs.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase", "gist"],
          keywords: ["diary", "straight reading", "costume"],
          trap: {
            family: "mention-lure",
            lure: ["costume"],
            note:
              "The costume is floated as a joke and dropped at once — a straight reading from the diary is what the pair actually choose, so the joke is the lure.",
          },
          explanation:
            "Aled jokes about costume, but the pair agree that a straight reading of Gorse's 1841 diary entry — the moment he first sees a barge loaded with his cloth — opens the talk with more impact than any slideshow could manage.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Aled's reservation about the population figures?",
        options: [
          "The percentages conceal a small starting population.",
          "The figures come from an unreliable surveyor.",
          "The figures belong to the wrong decade.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "numbers", "paraphrase"],
          keywords: ["base", "doubled", "absolute figures"],
          explanation:
            "Aled questions the doubling because tiny villages double easily: without the absolute figures, a dramatic-looking percentage may mean very little. Megan accepts the point and promises the raw numbers alongside the rate, so the surveyor and the decade are never in doubt.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why do they decide to leave out the child-labour material?",
        options: [
          "The archive holds no relevant documents.",
          "Other presentations in the unit already cover it.",
          "The tutor has advised against upsetting material.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "detail", "paraphrase"],
          keywords: ["rerun", "angle", "child-labour"],
          explanation:
            "Aled argues that every presentation in the unit reaches for child labour, so including it would make the pair sound like a rerun; the canals are their angle. The archive is full of material, and no tutor takes any part in this planning conversation.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How will the audience take part at the end?",
        options: [
          "By writing comments on slips of paper.",
          "By voting with a show of hands.",
          "By discussing the claims in small groups.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["hands up", "vote", "slips"],
          explanation:
            "Megan worries that a vote means slips of paper and counting, but Aled insists that hands up takes thirty seconds and wakes a dozing audience at minute nine. The show-of-hands vote on the two claims is what the pair settle on.",
        },
      },
      {
        id: "q5",
        type: "flowchart",
        label: "Questions 5–7",
        instruction: "Complete the flowchart below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "PRESENTATION — 'What the canals did to Kelbridge'" }],
          [{ kind: "text", text: "Step 1 — Open with a straight reading from William Gorse's " }, { kind: "blank", no: 5 }, { kind: "text", text: " (1841)" }],
          [{ kind: "text", text: "Step 2 — Project the 1842 town " }, { kind: "blank", no: 6 }, { kind: "text", text: " and trace the canal route" }],
          [{ kind: "text", text: "Step 3 — Finish with a show-of-hands " }, { kind: "blank", no: 7 }, { kind: "text", text: " on the two claims" }],
        ],
        blanks: [
          { no: 5, answer: "diary", alternatives: [] },
          { no: 6, answer: "map", alternatives: [] },
          { no: 7, answer: "vote", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "paraphrase"],
          keywords: ["diary", "town map", "vote", "hands up"],
          explanation:
            "The flowchart mirrors the agreed running order: Gorse's diary entry is read aloud to open; the surveyor's 1842 town map is projected so the canal route can be traced on it; and the talk closes with a show-of-hands vote on prosperity versus dependence before the railway reveal.",
        },
      },
    ],
    transcriptNote:
      "Three ideas are raised and dropped in seconds — the costume, the slips of paper and the child-labour section — and each time the adopted plan is the second thing said. Track the final decision, not the first suggestion.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 6 — Society: usability findings from the app for older users
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-elderly-app",
    title: "Testing an app designed for older users",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "society",
    accentMix: ["british", "nz"],
    intro:
      "You will hear an app designer and a researcher discussing the results of a month-long test of his messaging app with older volunteers. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "aroha", name: "Aroha", role: "usability researcher advising the student app project", accent: "nz" },
      { id: "duncan", name: "Duncan", role: "undergraduate designer of the Bramble messaging app", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "duncan", text: "Thanks for fitting me in. I'm the designer who gets to find out how badly the pilot went — eight volunteers, all over seventy, using Bramble for a month?" },
      { id: "s2", speakerId: "aroha", text: "It went better than you fear and worse than you hoped. Sit down — there's a lot to get through. Where do you want it: the good news or the strange news?" },
      { id: "s3", speakerId: "duncan", text: "Good news first, obviously." },
      { id: "s4", speakerId: "aroha", text: "The read-aloud button, then — the little speaker icon under each message. Every single tester used it, most within the first hour. Rose, who's eighty-nine, used it for practically every message all month." },
      { id: "s5", speakerId: "duncan", text: "That's lovely. I always pictured them as lonely, sitting there just wanting to hear a voice." },
      { id: "s6", speakerId: "aroha", text: "Honestly, no, and this is the part I need you to hear. When I asked why, not one of them mentioned loneliness. It was their eyes. Small text, bright screens — the button reads the message so their eyes don't have to. Rose said, and I quote, 'my eyes are eighty-nine too'.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "duncan", text: "Noted — read-aloud is an eyesight feature. I'll stop selling it as companionship in the pitch." },
      { id: "s8", speakerId: "aroha", text: "Please do. Now the strange news: onboarding. The practice chat, where you type replies to the bot granddaughter?" },
      { id: "s9", speakerId: "duncan", text: "The sandbox. It was meant to be the safe space to make mistakes." },
      { id: "s10", speakerId: "aroha", text: "Mm. Four of the eight treated the bot as a real girl. Margaret typed 'are you my Hannah?' and got upset when 'she' didn't remember Christmas. We abandoned that part of the session with two testers." },
      { id: "s11", speakerId: "duncan", text: "Oh no. Okay, that's a rewrite — the bot has to say plainly, 'I'm a practice message, not a person'." },
      { id: "s12", speakerId: "aroha", text: "It does. And there's a smaller thing with big consequences: the menu. You used the three-lines icon, top right?" },
      { id: "s13", speakerId: "duncan", text: "The hamburger — standard everywhere." },
      { id: "s14", speakerId: "aroha", text: "Standard if you've grown up with it. Six of our eight never opened the menu once; they didn't know the lines meant anything. Which matters, because that's where the text-size setting lives — the one that would have saved their eyes." },
      { id: "s15", speakerId: "duncan", text: "So the setting that helps them is hidden behind a symbol they can't read. That's on me. First fix: the icon goes, and the word 'Menu' sits there in letters, however unfashionable." },
      { id: "s16", speakerId: "aroha", text: "Agreed — though the bot rewrite matters more in the long run, the label is a morning's work. One more thing to sit down for: the big red help button." },
      { id: "s17", speakerId: "duncan", text: "Nobody pressed it, did they." },
      { id: "s18", speakerId: "aroha", text: "Not once — including Ted, who got stuck for forty minutes and then rang our office instead. His reason? He 'didn't want to be a bother at his age'. Pride, not confusion. The placement was fine, right under the thumb — but pride doesn't care where you put things.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–4",
        instruction:
          "Aroha reports what happened to each feature of the app during the pilot. Choose FOUR answers from the box and write the correct letter, A–F, next to questions 1–4. You may use each letter once only.",
        items: [
          "1 the speaker button under each message",
          "2 the practice chat with the bot granddaughter",
          "3 the three-lines icon in the top corner",
          "4 the large red help button",
        ],
        options: [
          "used constantly, chiefly because of fading eyesight",
          "mistaken for a real girl by half the testers",
          "its meaning went unrecognised, so the menu stayed shut",
          "left untouched even by a tester who was stuck",
          "used constantly, chiefly to fight loneliness",
          "praised for its thumb-friendly placement, so nothing needs changing",
        ],
        correct: [0, 1, 2, 3],
        meta: {
          skills: ["paraphrase", "detail", "inference"],
          keywords: ["read-aloud", "practice chat", "hamburger", "help button"],
          explanation:
            "The read-aloud button was used by every tester, for eyesight rather than company; four of the eight mistook the bot granddaughter for a real girl; six never grasped that the three lines meant menu; and the red help button went untouched even by Ted, stuck for forty minutes. Loneliness is Duncan's assumption, and the thumb-friendly placement never rescued the help button.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Aroha say was the main reason volunteers used the read-aloud button?",
        options: [
          "Failing eyesight, rather than loneliness.",
          "The wish to hear a familiar voice.",
          "A distrust of written messages.",
        ],
        correct: [0],
        meta: {
          skills: ["attribution", "paraphrase", "inference"],
          keywords: ["eyesight", "loneliness", "read-aloud"],
          trap: {
            family: "attribution",
            lure: ["lonely"],
            note:
              "The loneliness theory is Duncan's assumption about his users; Aroha's interviews point to eyesight — a right motive attached to the wrong speaker is the snare.",
          },
          explanation:
            "When Aroha asked the volunteers why, not one of them mentioned loneliness — it was their eyes. Small text and bright screens made the read-aloud button a vision feature, and Rose's line about her eyes being eighty-nine too makes the point memorably.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What went wrong during the onboarding practice chat?",
        options: [
          "Volunteers replied to the bot as if it were a real person.",
          "Volunteers skipped the practice chat entirely.",
          "The bot crashed on the volunteers' own phones.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["sandbox", "real girl", "Hannah"],
          explanation:
            "Four of the eight testers treated the bot granddaughter as a living girl — Margaret asked 'are you my Hannah?' and was upset when she failed to remember Christmas — so that part of two sessions had to be abandoned rather than skipped or crashed.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why did stuck testers avoid pressing the red help button?",
        options: [
          "The button was hidden behind the menu icon.",
          "They did not want to be a nuisance.",
          "They preferred to ring the office directly.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase", "attitude"],
          keywords: ["bother", "pride", "forty minutes"],
          explanation:
            "Ted sat stuck for forty minutes and rang the office rather than press help, because he didn't want to be a bother at his age — pride, not confusion, kept the button untouched, and its position under the thumb was never the problem.",
        },
      },
      {
        id: "q5",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What change do they agree to make first?",
        options: [
          "Replace the menu icon with the word 'Menu' in letters.",
          "Move the help button to a more prominent position.",
          "Remove the practice bot from onboarding.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["in letters", "menu", "rewrite"],
          trap: {
            family: "negation",
            lure: ["placement"],
            note:
              "The help button's placement is explicitly defended — under the thumb is fine, and pride is the problem — so relocating it is the wrong fix offered as the right one.",
          },
          explanation:
            "Duncan's first fix is swapping the three-lines icon for the word 'Menu' written out in letters — a morning's work, as Aroha puts it. The bot is to be rewritten rather than removed, and the help button stays exactly where it is.",
        },
      },
    ],
    transcriptNote:
      "Duncan's loneliness theory is corrected by Aroha's interviews — the eyesight finding is what the questions test. The help button's placement is defended even as the button itself is criticised, so 'moving it' is the wrong fix.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 7 — Science: planning the rocky-shore survey
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p3-coastal-survey",
    title: "Planning a coastal biology survey",
    part: 3,
    difficulty: 5,
    estimatedMinutes: 9,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear a marine-biology tutor and two students planning a survey of a rocky shore. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "sandhu", name: "Dr Sandhu", role: "marine-biology tutor supervising the shore survey", accent: "british" },
      { id: "isla", name: "Isla", role: "student designing the sampling plan", accent: "british" },
      { id: "ciaran", name: "Ciaran", role: "student handling survey logistics and permits", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "sandhu", text: "Right, this is the planning session for the Kestrell Point survey, so let's be efficient — the fieldwork window is closer than either of you thinks. Isla, remind us of the brief." },
      { id: "s2", speakerId: "isla", text: "The consultancy wants a baseline: which species are present on that rocky shore now, before the marina breakwater goes in next spring. So — a record of what's there, abundance by zone, with decent photographs." },
      { id: "s3", speakerId: "sandhu", text: "'By zone' — good; hold that thought. Design first. Isla?" },
      { id: "s4", speakerId: "isla", text: "I'd run transects: lines straight down the shore from the cliff base to the low-water mark, with a quadrat every five metres. You capture the whole gradient — upper, middle, lower shore — in one walk." },
      { id: "s5", speakerId: "ciaran", text: "And that's exactly my worry. You lay three lines and happen to miss the big boulder field on the south side — or lay them straight through it. Everything depends on where the line falls. In the stats module they'd tear that apart; you cannot defend a line you placed by eye." },
      { id: "s6", speakerId: "isla", text: "It wouldn't be by eye! I'd pace the spacing out evenly —" },
      { id: "s7", speakerId: "sandhu", text: "— and evenly spaced is still not random, Isla. But Ciaran, before you claim the high ground: a purely random scatter across the whole shore needs fifty-plus quadrats for the power you want, and you have two mornings. Both designs are honest; neither is affordable. What's the third way?" },
      { id: "s8", speakerId: "ciaran", text: "Zones. Treat the upper, middle and lower shore as three separate populations, and drop quadrats at random coordinates within each. Stratified random sampling — every zone gets equal attention, and the randomness keeps the statistics defensible." },
      { id: "s9", speakerId: "sandhu", text: "And the tide draws the zone boundaries for you: the barnacle lines and the wrack mark them already. Four quadrats per zone? No — make it five; the consultancy's reporting template demands a minimum of fifteen. So: five per zone, three zones, fifteen frames.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "isla", text: "I can live with that. Timing is the crunch, though. The lower shore only uncovers on spring tides, and low water this Thursday is at — Ciaran, you've got the table?" },
      { id: "s11", speakerId: "ciaran", text: "Six forty... no, sorry, that's Friday's low. Thursday is seven fourteen, and it's a neap, so Thursday's out entirely — the lower shore won't show." },
      { id: "s12", speakerId: "isla", text: "Then the first workable morning is Friday: low water at six forty, first light about five thirty. A dawn start." },
      { id: "s13", speakerId: "sandhu", text: "Which the minibus driver already knows about, incidentally. Now two cautions. First: the honeycomb reefs on the western flank — the Sabellaria. They're a named feature of the site, and a single footprint can outlast your degree. Photograph each quadrat from the rocks above; nobody walks the reef flat." },
      { id: "s14", speakerId: "isla", text: "We'll approach from the landward side and reach the frame out on the pole extension." },
      { id: "s15", speakerId: "sandhu", text: "Good thinking. Second: the access path floods. Parties have been cut off against the cliff there twice in the last decade. Standing instruction, non-negotiable — you sign in at the Pellow Bay coastguard station on arrival and sign out on departure, and you carry the handsets so the station can reach you." },
      { id: "s16", speakerId: "ciaran", text: "Handsets carried, book signed. What about collecting? I want voucher specimens of the algae for the herbarium." },
      { id: "s17", speakerId: "sandhu", text: "Nothing leaves that shore without the warden's written consent. There's a byelaw, and the warden is also the fastest route to a refusal if you annoy her. Email her tonight, copy me in, and request a licence for non-destructive algal collection." },
      { id: "s18", speakerId: "isla", text: "Tonight, then. Dawn on Friday — quadrat frames, cameras, handsets, and a thermos the size of a fire extinguisher.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the consultancy want the survey to establish?",
        options: [
          "Which species are present on the shore before construction starts.",
          "How quickly the shore recovers once the marina is built.",
          "Whether the honeycomb reefs are spreading along the flank.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["baseline", "breakwater", "abundance"],
          explanation:
            "Isla restates the brief as a baseline record: which species are present on the rocky shore, and in what abundance by zone, before the marina breakwater goes in next spring. Recovery monitoring and reef spread never form part of the commission.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What design does Isla originally propose?",
        options: [
          "Randomly scattered quadrats across the whole shore.",
          "Lines down the shore with a quadrat every five metres.",
          "Sampling concentrated on the southern boulder field.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["transects", "every five metres", "gradient"],
          explanation:
            "Isla wants transects: straight lines from the cliff base to the low-water mark with a quadrat every five metres, capturing the upper-to-lower gradient in one walk. The random scatter is the design the tutor prices out, and the boulder field is Ciaran's illustration of bad luck rather than a focus.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Ciaran's objection to transects?",
        options: [
          "The result depends on where the line happens to fall.",
          "A purely random design would need over fifty quadrats for adequate power.",
          "The lines would trample the honeycomb reefs.",
        ],
        correct: [0],
        meta: {
          skills: ["attribution", "inference", "paraphrase"],
          keywords: ["boulder field", "by eye", "defend"],
          trap: {
            family: "attribution",
            lure: ["fifty"],
            note:
              "The fifty-plus quadrat burden is the tutor's objection to random scatter, not Ciaran's objection to transects — numbers borrowed from the wrong voice are the snare.",
          },
          explanation:
            "Ciaran's complaint is that everything depends on where the line falls: three lines could miss the boulder field entirely or run straight through it, so a line placed by eye cannot be defended statistically. The fifty-quadrat cost belongs to Dr Sandhu's critique of the random design.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What design is finally agreed?",
        options: [
          "Stratified random quadrats within three shore zones.",
          "Evenly spaced transect lines from cliff to low water.",
          "Fifty random quadrats spread across the entire shore.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "process-tracking"],
          keywords: ["stratified random sampling", "random coordinates", "five per zone"],
          explanation:
            "Ciaran proposes treating the three shore zones as separate populations with quadrats dropped at random coordinates within each — stratified random sampling — and the tutor locks it in at five quadrats per zone, fifteen in total, to satisfy the consultancy's reporting template.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "Dr Sandhu gives an instruction about each aspect of the fieldwork. Choose FOUR answers from the box and write the correct letter, A–F, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 sampling on the honeycomb-reef flank",
          "6 the flooding of the access path",
          "7 collecting algal voucher specimens",
          "8 the number of quadrats per zone",
        ],
        options: [
          "photograph it from above; nobody walks on it",
          "wait until the warden is present",
          "sign in and out at the coastguard station, carrying handsets",
          "obtain the warden's written consent in advance",
          "do five, to satisfy the reporting minimum",
          "do four, to keep each morning short",
        ],
        correct: [0, 2, 3, 4],
        meta: {
          skills: ["detail", "paraphrase", "corrections"],
          keywords: ["reef flat", "sign in", "written consent", "fifteen"],
          trap: {
            family: "correction",
            lure: ["four"],
            note:
              "The tutor first floats four quadrats per zone and immediately corrects to five — the discarded count is the lure, and the corrected one is the key.",
          },
          explanation:
            "The reefs are photographed from the rocks above with nobody on the reef flat; the flooding path means signing in and out at the coastguard station with handsets carried; specimens need the warden's written consent requested in advance; and each zone gets five quadrats — after the correction from four — to reach the fifteen-frame minimum.",
        },
      },
    ],
    transcriptNote:
      "Two numbers are corrected mid-stream: Thursday's low water belongs to Friday, and four quadrats per zone becomes five. The tide-table mix-up means the survey runs on Friday's dawn spring tide, not Thursday's neap.",
    source: BANK_SOURCE_NOTE,
  },
];
