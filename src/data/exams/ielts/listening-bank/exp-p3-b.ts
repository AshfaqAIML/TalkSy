/**
 * Audio question bank — Part 3 expansion, batch B (PROMPT 54 expansion).
 *
 * Seven further educational and training conversations: a course review,
 * a planning seminar, a modernism tutorial, a field-trip debrief, a
 * business-plan judging panel, a documentary feedback session and an
 * experiment design meeting. Two to three speakers each, with hedged
 * opinion, disagreement, self-correction and attribution traps. Every
 * recording is original TalkSy practice material written in the style of
 * the IELTS Listening test.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP3BExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p3-healthcare-course",
    title: "A healthcare management course review",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "health",
    accentMix: ["british"],
    intro:
      "You will hear a tutorial in which a course tutor and two hospital workers review a healthcare management course at its final session. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "kemble", name: "Dr Kemble", role: "course tutor leading the final review session", accent: "british" },
      { id: "nadia", name: "Nadia", role: "ward nurse completing the healthcare management certificate", accent: "british" },
      { id: "joel", name: "Joel", role: "ward nurse completing the healthcare management certificate", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "kemble", text: "Right, you two — our last session of the healthcare management certificate. I want an honest review of the year, because what you say here shapes next year's course." },
      { id: "s2", speakerId: "nadia", text: "Can I start with the statistics block? It nearly finished me off — I fought that software for weeks in October and got close to tears more than once." },
      { id: "s3", speakerId: "kemble", text: "And yet your data project came top of the cohort." },
      { id: "s4", speakerId: "nadia", text: "Which is the strange part. It's the module I lean on hardest now — I'm pulling readmission figures before every ward meeting." },
      { id: "s5", speakerId: "joel", text: "I'd swap you that for the finance module any day. Those budget spreadsheets did my head in — I rebuilt the staffing forecast four times before it held together." },
      { id: "s6", speakerId: "nadia", text: "You got there in the end, though." },
      { id: "s7", speakerId: "joel", text: "After two evenings of your help, yes. But the leadership placement — that was the course for me. I chair the morning briefing completely differently now, and we actually start on time." },
      { id: "s8", speakerId: "nadia", text: "Hm. I found the placement a bit overrated, honestly. Useful, but it didn't change my week the way the service-design workshop did." },
      { id: "s9", speakerId: "joel", text: "That's the discharge lounge idea, isn't it? Your big proposal?" },
      { id: "s10", speakerId: "nadia", text: "Exactly — we reworked the whole patient journey on paper. If the hospital ever funds it, that workshop will have paid for the course by itself." },
      { id: "s11", speakerId: "kemble", text: "Good, that's exactly the feedback I need. Now, since you'll both be asked by the next cohort — changes for next year. We did talk about dropping the finance module altogether, but that's not happening. Finance stays; it just runs blended from September, so half of it online." },
      { id: "s12", speakerId: "joel", text: "What about the ethics module? That dropped off the timetable when Professor Lee retired." },
      { id: "s13", speakerId: "kemble", text: "It returns in January, and this time it's compulsory rather than optional. One last thing — your group project. The presentations were the strongest I've seen on this course, but the written reports let you down; several read as if they'd been written the night before." },
      { id: "s14", speakerId: "nadia", text: "Guilty. Mine was assembled at five in the morning." },
      { id: "s15", speakerId: "kemble", text: "Then carry that lesson into your next course: plan the report, don't just survive it. Forms on the way out — and thank you both for a genuinely good year.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Nadia say about the statistics block?",
        options: [
          "She came top of the cohort because the software suited her.",
          "She came close to quitting but now relies on it constantly.",
          "She only values it because Dr Kemble praised her data project.",
        ],
        correct: [1],
        meta: {
          skills: ["attitude", "paraphrase", "detail"],
          keywords: ["statistics block", "close to tears", "lean on", "ward meeting"],
          explanation:
            "Nadia admits the statistics block nearly made her quit — weeks fighting the software, close to tears — yet it is now the module she leans on hardest, pulling readmission figures before every ward meeting. The struggle and the praise belong to the same speaker, so the correct option has to hold both.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What was Joel's biggest difficulty on the course?",
        options: [
          "The reading load for the ethics module.",
          "The budget spreadsheets in the finance module.",
          "The statistics software he had to master from scratch.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["budget spreadsheets", "staffing forecast", "did my head in"],
          explanation:
            "Joel's complaint is the finance module: the budget spreadsheets did his head in, and he rebuilt the staffing forecast four times before it held together. The ethics module he simply asks about, and the statistics software was Nadia's battle, not his.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What do Nadia and Joel disagree about?",
        options: [
          "How valuable the leadership placement turned out to be.",
          "Whether the service-design workshop could work in practice.",
          "Whether the group's written reports deserved higher marks.",
        ],
        correct: [0],
        meta: {
          skills: ["opinion", "attitude", "detail"],
          keywords: ["overrated", "the course for me", "service-design workshop"],
          trap: {
            family: "attribution",
            lure: ["overrated"],
            note:
              "It is Nadia, not Joel, who calls the leadership placement overrated — Joel names it as the course for him, so match the lukewarm verdict to the right speaker.",
          },
          explanation:
            "Joel calls the leadership placement the course for him, while Nadia finds it a bit overrated and prefers the service-design workshop — a genuine split between the two students. Nobody disputes the workshop's practicality, and the reports' marks are never argued over.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Kemble say will happen to the finance module next year?",
        options: [
          "It will be dropped from the certificate completely.",
          "It will run as a blended module, half of it online.",
          "It will be merged with the statistics block.",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["dropping the finance module", "finance stays", "blended", "half of it online"],
          trap: {
            family: "negation",
            lure: ["dropping the finance module"],
            note:
              "Dropping the finance module is raised and ruled out in the same breath — the plan that survives is the blended format, so the refusal, not the proposal, carries the mark.",
          },
          explanation:
            "Dr Kemble raises dropping the finance module and immediately rules it out: the module stays, but from September it runs blended, with half of it delivered online. A merger with the statistics block is never suggested at any point.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "The students describe something that came out of each part of the course. Choose FOUR answers from the box and write the correct letter, A–E, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 the statistics block",
          "6 the finance module",
          "7 the leadership placement",
          "8 the service-design workshop",
        ],
        options: [
          "a redesign of the patient discharge journey",
          "a staffing forecast that had to be rebuilt",
          "readmission figures checked before ward meetings",
          "a morning briefing run in a new way",
          "a module withdrawn mid-year after a retirement",
        ],
        correct: [2, 1, 3, 0],
        meta: {
          skills: ["paraphrase", "detail", "attribution"],
          keywords: ["readmission figures", "staffing forecast", "morning briefing", "discharge lounge", "ethics"],
          explanation:
            "The statistics block is what Nadia leans on when she pulls readmission figures before ward meetings (C); the finance module left Joel rebuilding his staffing forecast (B); the leadership placement changed how he chairs the morning briefing (D); and the service-design workshop produced the discharge-lounge redesign (A). The withdrawn module (E) is the ethics unit, which neither student actually took.",
        },
      },
    ],
    transcriptNote:
      "Two verdicts to keep apart: Nadia calls the leadership placement overrated while Joel names it the best part of the course, and Dr Kemble raises dropping the finance module only to keep it in a blended form. The ethics module returns in January, but nothing in the questions keys to it.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-urban-planning",
    title: "A seminar on urban planning",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 9,
    topic: "society",
    accentMix: ["british", "australian"],
    intro:
      "You will hear a university seminar in which a planning tutor and two students discuss a council proposal to pedestrianise a town centre. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "voss", name: "Dr Voss", role: "planning tutor chairing the Ashgate seminar", accent: "australian" },
      { id: "asif", name: "Asif", role: "planning student assessing the pedestrianisation scheme", accent: "british" },
      { id: "lena", name: "Lena", role: "planning student assessing the pedestrianisation scheme", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "voss", text: "Afternoon, both. Today's seminar takes the Ashgate high-street scheme — the council wants to pedestrianise the old town, and we're going to pull the proposal apart the way a planning inspector would. Asif, summarise what's on the table." },
      { id: "s2", speakerId: "asif", text: "Full pedestrianisation of Fore Street and the market square. No private cars at all, except for deliveries between six and nine in the morning, and the buses keep their lane at the west end." },
      { id: "s3", speakerId: "voss", text: "And the council's headline aim?" },
      { id: "s4", speakerId: "asif", text: "Officially, air quality — nitrogen dioxide along Fore Street is close to double the legal limit. But read the small print and the real driver looks like footfall: they want people lingering in town instead of driving out to the retail park." },
      { id: "s5", speakerId: "voss", text: "Good — interrogate motives, not slogans. Lena, you had the parking numbers." },
      { id: "s6", speakerId: "lena", text: "Right. The scheme takes ninety parking spaces off the square — no, sorry, a hundred and ninety; I misread the map. The multi-storey on Foundry Lane stays open either way, and that's a six-minute walk from the square." },
      { id: "s7", speakerId: "voss", text: "So the sky isn't falling, whatever the traders claim." },
      { id: "s8", speakerId: "asif", text: "Is that fair, though? I spoke to the fruiterer on Fore Street, and she says her customers are mostly older people who can't manage a long walk carrying shopping." },
      { id: "s9", speakerId: "lena", text: "Which is where the survey gets interesting. The council keeps saying a majority of traders back the scheme — but that figure isn't from the traders at all. It came out of the chamber of commerce, and they polled their own committee. The street-level survey found most shopkeepers anxious about the works, not supportive." },
      { id: "s10", speakerId: "voss", text: "Which is exactly why we check where a number comes from. Now, funding — where does the money sit?" },
      { id: "s11", speakerId: "asif", text: "Mostly a government grant, the Liveable Towns fund. The council tops it up with parking income, but that's the smaller slice." },
      { id: "s12", speakerId: "voss", text: "Ninety per cent, the last figure I saw. There's a shared-space design at the square end, too — what should we make of that?" },
      { id: "s13", speakerId: "lena", text: "The idea is no kerbs, no markings, everyone negotiating their way through. I like it in principle, but it's been criticised over blind users — how do you find your line across a street with no edge?" },
      { id: "s14", speakerId: "voss", text: "That's the serious objection, and don't let anyone tell you it's about cyclists. For the coursework, then: pick one measurable outcome — footfall, air quality or trade — and find a comparable scheme that has actually been built. Melbourne's pedestrian mall, say, or Bristol's old centre. Compare before-and-after data, not promises." },
      { id: "s15", speakerId: "asif", text: "Could I do the parking angle instead? That's where the politics is." },
      { id: "s16", speakerId: "voss", text: "You could, but parking numbers are noisy — everyone quotes them, nobody measures them. Take the air-quality route or the retail one, and bring me a one-page plan next week.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "In Asif's view, what is the council's real reason for the scheme?",
        options: [
          "Raising air quality along Fore Street.",
          "Bringing more visitors into the town centre.",
          "Slowing the traffic heading out to the retail park.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase", "detail"],
          keywords: ["air quality", "footfall", "retail park"],
          trap: {
            family: "mention-lure",
            lure: ["air quality"],
            note:
              "Air quality is the headline aim, but Asif reads the small print and finds footfall — the official slogan is quoted only to be displaced by the real driver.",
          },
          explanation:
            "The official aim is air quality, with nitrogen dioxide near double the legal limit, but Asif reads the small print and finds the real driver is footfall: the council wants people lingering in town instead of driving out to the retail park. The stated slogan is displaced, so the second motive is the answer.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What correction does Lena make to the parking figures?",
        options: [
          "The scheme removes a hundred and ninety spaces, not ninety.",
          "The multi-storey car park has ninety spaces, not a hundred and ninety.",
          "The walk to the multi-storey takes nine minutes, not six.",
        ],
        correct: [0],
        meta: {
          skills: ["correction", "numbers", "detail"],
          keywords: ["ninety", "a hundred and ninety", "multi-storey", "six-minute walk"],
          trap: {
            family: "correction",
            lure: ["ninety"],
            note:
              "Lena quotes ninety first and immediately corrects herself to a hundred and ninety — the second figure is the one the plan rests on.",
          },
          explanation:
            "Lena quotes ninety spaces and then corrects herself to a hundred and ninety in the same breath, a classic IELTS self-correction. The six-minute walk to the multi-storey is a separate fact that stays unchanged, so the corrected figure is the answer.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Lena reveal about the traders' survey?",
        options: [
          "The council surveyed the shopkeepers but never published the results.",
          "The supportive majority came from the chamber of commerce's own poll.",
          "Most traders support the scheme once the road works finish.",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["chamber of commerce", "polled their own committee", "street-level survey", "majority of traders back the scheme"],
          trap: {
            family: "attribution",
            lure: ["majority of traders back the scheme"],
            note:
              "The supportive majority belongs to the chamber of commerce polling its own committee — the street-level survey found anxiety instead, so check who was actually asked before trusting a figure.",
          },
          explanation:
            "The supportive majority came from the chamber of commerce polling its own committee, not from the traders; the street-level survey found most shopkeepers anxious about the works. Lena's point is about where the number came from, which is exactly why provenance matters here.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Which objection to the shared-space design does Dr Voss take seriously?",
        options: [
          "Cyclists will ride too fast without marked lanes.",
          "Blind pedestrians lose the guidance of the kerb.",
          "Drivers will ignore a street with no signals.",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "opinion", "paraphrase"],
          keywords: ["no kerbs", "blind users", "negotiating"],
          trap: {
            family: "negation",
            lure: ["cyclists"],
            note:
              "The cycling objection is named only to be waved away — the concern the tutor treats as serious is blind users losing the kerb line.",
          },
          explanation:
            "Dr Voss waves the cycling objection aside and calls the blind-users concern the serious one: with no kerbs and no markings, a blind pedestrian loses the line across the street. Lena raises the point in the first place, and the tutor endorses it without hesitation.",
        },
      },
      {
        id: "q5",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Voss want to see in the students' coursework?",
        options: [
          "A comparison with a built scheme's measured before-and-after data.",
          "A survey of shoppers' reactions to the council's drawings.",
          "An analysis of parking data from the retail park.",
        ],
        correct: [0],
        meta: {
          skills: ["intention", "detail", "paraphrase"],
          keywords: ["measurable outcome", "before-and-after data", "parking numbers are noisy"],
          explanation:
            "Dr Voss wants one measurable outcome — footfall, air quality or trade — tested against a comparable built scheme such as Melbourne's mall or Bristol's old centre, using before-and-after data. He rejects the parking angle because those numbers are quoted endlessly but never measured properly.",
        },
      },
      {
        id: "q6",
        type: "sentence",
        label: "Questions 6–8",
        instruction: "Complete the sentences below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "Under the scheme, cars may enter Fore Street only for " }, { kind: "blank", no: 6 }, { kind: "text", text: " before nine in the morning." }],
          [{ kind: "text", text: "Most of the scheme's funding comes from a government " }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "For the coursework, Dr Voss suggests studying schemes in Melbourne or " }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 6, answer: "deliveries", alternatives: [] },
          { no: 7, answer: "grant", alternatives: [] },
          { no: 8, answer: "Bristol", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["deliveries", "Liveable Towns", "grant", "Bristol"],
          explanation:
            "The scheme allows deliveries into Fore Street between six and nine in the morning; the Liveable Towns grant carries most of the funding, topped up by a smaller slice of parking income; and the tutor names Melbourne's mall and Bristol's old centre as comparators with real before-and-after data.",
        },
      },
    ],
    transcriptNote:
      "Watch the numbers change hands: ninety spaces becomes a hundred and ninety, and the supportive 'majority' turns out to be the chamber of commerce polling itself. The tutor dismisses the cycling objection but takes the blind-users concern seriously.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-modernism",
    title: "A tutorial on a modernism module",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 8,
    topic: "culture",
    accentMix: ["british"],
    intro:
      "You will hear a tutorial in which a tutor and two students revise a modernism module and plan their final essays. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ansell", name: "Dr Ansell", role: "tutor revising the modernism module with two students", accent: "british" },
      { id: "ruth", name: "Ruth", role: "undergraduate preparing a modernism essay", accent: "british" },
      { id: "ewan", name: "Ewan", role: "undergraduate preparing a modernism essay", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ansell", text: "Right — last tutorial of term, so today we sweep through Modernism Across the Arts. I'll name a movement, you give me its defining obsession, and I'll correct you where you go wrong. Ready?" },
      { id: "s2", speakerId: "ewan", text: "Fire away." },
      { id: "s3", speakerId: "ansell", text: "Cubism, then." },
      { id: "s4", speakerId: "ewan", text: "That's the geometry one, surely — everything reduced to triangles and flat planes." },
      { id: "s5", speakerId: "ruth", text: "I don't think that's quite it. My notes say the real point is seeing one object from several angles in the same moment — that fractured guitar in the Picasso slide." },
      { id: "s6", speakerId: "ansell", text: "Ruth is nearer. The simultaneous viewpoints are the heart of it; the angular look is what's left over. Futurism next." },
      { id: "s7", speakerId: "ewan", text: "Easy — machines, speed, the roar of the factory. They wanted to paint the motorbus and the dynamo, not another sunset." },
      { id: "s8", speakerId: "ansell", text: "Precisely — and notice the manifesto culture that came with it: they published demands, not explanations. Imagism, Ruth." },
      { id: "s9", speakerId: "ruth", text: "Compress, compress, compress. The whole thing hangs on the exact image with nothing spare — two lines can carry the weight of a page." },
      { id: "s10", speakerId: "ansell", text: "Beautifully put. Vorticism, then — the British one everybody mixes up with the rest." },
      { id: "s11", speakerId: "ewan", text: "I had it filed as Futurism's quieter cousin. Hard edges, that great vortex on the journal cover — a still centre with everything spiralling outwards." },
      { id: "s12", speakerId: "ansell", text: "You've described the name, which is rather the point of the name. Expressionism, Ruth?" },
      { id: "s13", speakerId: "ruth", text: "The inward one — emotion outrunning accuracy, so the scream feels true even when the face is wrong. Though I've always wondered why we dropped Surrealism; the dream material would brighten up a Tuesday morning." },
      { id: "s14", speakerId: "ansell", text: "Because surrealism belongs to the nineteen-twenties aftermath, and our module stops at the war. Save it for the spring option. Now — essays. Ewan, you're still on the Futurist manifestos?" },
      { id: "s15", speakerId: "ewan", text: "If I'm allowed. What unsettles me is how much I enjoy the writing — this is the same noise that later marched people off to war." },
      { id: "s16", speakerId: "ansell", text: "That discomfort is your essay, though. Hold on to it: put the enthusiasm and the ethics in the same paragraph, and the marker will sit up. A thousand words is your ceiling, mind, and no biography of Marinetti." },
      { id: "s17", speakerId: "ruth", text: "Mine's the little-magazine angle — who printed these things, and who paid the printers." },
      { id: "s18", speakerId: "ansell", text: "A strong choice — the economics of the avant-garde. Bring me both outlines in a fortnight, and give each one a title with a verb in it.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction:
          "Dr Ansell asks the students to define each movement. Choose FIVE answers from the box and write the correct letter, A–G, next to questions 1–5. You may use each letter once only.",
        items: [
          "1 Cubism",
          "2 Futurism",
          "3 Imagism",
          "4 Vorticism",
          "5 Expressionism",
        ],
        options: [
          "one object shown from several angles at the same moment",
          "the exact image, compressed with nothing spare",
          "machines, speed and the modern city",
          "emotion allowed to distort the outward facts",
          "a still centre with everything spiralling outwards",
          "everything reduced to triangles and flat planes",
          "dream imagery rising from the unconscious",
        ],
        correct: [0, 2, 1, 4, 3],
        meta: {
          skills: ["detail", "correction", "paraphrase"],
          keywords: ["several angles", "Picasso", "motorbus", "exact image", "vortex", "scream"],
          trap: {
            family: "correction",
            lure: ["triangles and flat planes"],
            note:
              "Ewan's first stab at Cubism — triangles and planes — is corrected by Ruth and endorsed by the tutor as 'what's left over': the simultaneous viewpoints are the definition that scores.",
          },
          explanation:
            "Cubism is the simultaneous viewpoints (A); Futurism celebrates machines, speed and the city (C); Imagism compresses everything into the exact image (B); Vorticism is the still centre spiralling outwards (E); and Expressionism lets emotion distort the outward facts (D). The triangles (F) are Ewan's rejected guess, and the dream imagery (G) belongs to surrealism, which the module excludes.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Ansell say about Surrealism?",
        options: [
          "It falls outside the period the module covers.",
          "It overlaps too closely with Expressionism to teach separately.",
          "It will appear on the exam paper only as an essay option.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["surrealism", "nineteen-twenties", "spring option", "module stops at the war"],
          explanation:
            "The tutor says surrealism belongs to the nineteen-twenties aftermath, after the module's stopping point at the war, and points Ruth towards the spring option instead. No complaint about overlap with Expressionism or the exam format is ever made.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Ewan find unsettling about his chosen topic?",
        options: [
          "He cannot find enough secondary reading to fill a thousand words.",
          "He is drawn to prose whose politics he knows were harmful.",
          "He suspects the marker will disapprove of his enthusiasm.",
        ],
        correct: [1],
        meta: {
          skills: ["attitude", "inference", "paraphrase"],
          keywords: ["unsettles", "enjoy the writing", "marched people off to war"],
          explanation:
            "Ewan unsettles himself by enjoying the Futurist writing, knowing it is the same noise that later marched people off to war. That very discomfort is what the tutor tells him to build the essay around, so the harmful politics are the heart of the item.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Ansell tell Ewan to do in the essay?",
        options: [
          "Hold his enthusiasm and his moral doubts in the same paragraph.",
          "Open with a short biography of the movement's loudest founder.",
          "Compare the manifestos with the paintings they promoted.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["same paragraph", "ceiling", "biography of marinetti"],
          trap: {
            family: "negation",
            lure: ["biography of marinetti"],
            note:
              "The Marinetti biography is banned in the same breath as the essay is set — the instruction is to keep enthusiasm and ethics together, so the refused item is the opposite of the task.",
          },
          explanation:
            "The instruction is to put the enthusiasm and the ethics in the same paragraph, within a thousand-word ceiling and with no biography of Marinetti. The biographical opening is explicitly refused, and the painting comparison is never requested.",
        },
      },
    ],
    transcriptNote:
      "Ewan's first stab at Cubism — triangles and planes — is corrected to the simultaneous viewpoints, and the tutor rules that surrealism sits beyond the module's stopping point at the war. The Marinetti biography is banned in the same breath as the essay is set.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-field-trip",
    title: "Reviewing an environmental field trip",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "environment",
    accentMix: ["british", "nz"],
    intro:
      "You will hear a discussion between a tutor and two students about a field trip to a coastal sand-dune system. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "parata", name: "Dr Parata", role: "geography tutor debriefing the dune field trip", accent: "nz" },
      { id: "dev", name: "Dev", role: "student who surveyed the dune profile", accent: "british" },
      { id: "katie", name: "Katie", role: "student who sampled sediment on the field trip", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "parata", text: "Kia ora, both. Good trip out to Waimea Spit on Thursday? Before the details go fuzzy in your heads, let's debrief the day, then sort out the write-up. First impressions?" },
      { id: "s2", speakerId: "dev", text: "Freezing, and the wind kept flattening the tape measure — we pegged it down twice at the crest of the fore dune." },
      { id: "s3", speakerId: "katie", text: "What struck me was the marram grass. The briefing notes call it the natural cover of the dune, but half of it has died back where people cut across to the beach." },
      { id: "s4", speakerId: "parata", text: "Good eye. Marram's introduced here, mind — the native one is pingao, and the volunteers have been replanting that behind the car park. And check the planting date when you cite it: it was March, not May — the handout has a typo." },
      { id: "s5", speakerId: "dev", text: "So the bare sand isn't only storm damage — it's trampling as well?" },
      { id: "s6", speakerId: "parata", text: "Both, honestly. The storm took the toe of the dune in June, and the trampling opened the rest up. That's why your profile survey matters. What did you make of the kit?" },
      { id: "s7", speakerId: "katie", text: "The laser level behaved once we'd levelled it properly. Reading the staff in that glare, though — I wrote half my figures twice because I couldn't trust my eyes." },
      { id: "s8", speakerId: "dev", text: "And we lost a marker cane — station five, not station four; someone had pulled it out for a beach flag, apparently." },
      { id: "s9", speakerId: "parata", text: "That happens every year. Right, the write-up. Walk me through the method exactly as you'll report it." },
      { id: "s10", speakerId: "katie", text: "We took a sediment sample at every station and bagged and labelled them all." },
      { id: "s11", speakerId: "parata", text: "Then in the lab, the first job is to dry each sample in the oven overnight, and weigh what's left. After that?" },
      { id: "s12", speakerId: "dev", text: "Sieve the dried sample into size fractions, then log the weights in the spreadsheet you shared — the one with the profile chart already built in." },
      { id: "s13", speakerId: "parata", text: "And the final step?" },
      { id: "s14", speakerId: "katie", text: "Check the profile against the aerial photograph on the council website, then build the discussion around the two causes of the bare patch." },
      { id: "s15", speakerId: "parata", text: "In that order — evidence before argument. The deadline is the last Friday of term — no, actually, I've moved it to the Wednesday, because the marker needs the weekend. And email me if the oven gets booked solid.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What did Katie notice about the vegetation on the dune?",
        options: [
          "The marram grass has died back along an unofficial path.",
          "The marram grass was planted by volunteers last spring.",
          "The native pingao is spreading over the fore dune.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["marram", "pingao", "cut across", "car park"],
          trap: {
            family: "mention-lure",
            lure: ["replanting"],
            note:
              "The volunteer replanting belongs to the native pingao behind the car park, while the dying-back grass on the fore dune is marram — two species, two facts, so anchor each detail to the right plant.",
          },
          explanation:
            "Katie's observation is the marram dying back where people cut across to the beach on an unofficial path. The volunteer replanting belongs to the native pingao behind the car park, so the two grasses must not be confused when the answer is chosen.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to Dr Parata, what has caused the bare patch of sand?",
        options: [
          "Storm damage at the foot of the dune.",
          "Walkers taking a shortcut across the dune.",
          "Both storm damage and trampling.",
        ],
        correct: [2],
        meta: {
          skills: ["inference", "paraphrase", "detail"],
          keywords: ["storm", "trampling", "toe of the dune"],
          explanation:
            "Dr Parata says 'both, honestly': the June storm took the toe of the dune, and the trampling opened up the rest of the bare sand. Either cause on its own is only half of her answer, so the combined option is the one that scores.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What problem did Katie have with the equipment?",
        options: [
          "The tape measure kept blowing away in the wind.",
          "She could hardly read the staff in the bright glare.",
          "The laser level refused to balance on the soft sand.",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["tape measure", "glare", "laser level"],
          trap: {
            family: "attribution",
            lure: ["flattening the tape measure"],
            note:
              "The flattened tape measure is Dev's complaint; Katie's trouble was reading the staff in the glare — match each mishap to its owner before choosing.",
          },
          explanation:
            "Katie's difficulty was reading the staff in the glare, so much so that she wrote half her figures twice. The flattened tape measure is Dev's complaint, and the laser level behaved perfectly once it had been levelled properly.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What has Dr Parata changed about the deadline?",
        options: [
          "It has moved from the last Friday to the Wednesday of the final week.",
          "It has moved back a week to give the marker a weekend.",
          "It has been merged with the profile-survey submission.",
        ],
        correct: [0],
        meta: {
          skills: ["correction", "detail"],
          keywords: ["last Friday of term", "Wednesday", "moved"],
          trap: {
            family: "correction",
            lure: ["last Friday of term"],
            note:
              "The Friday deadline is quoted and then corrected to the Wednesday in the same breath — in this task the corrected date is the value that scores.",
          },
          explanation:
            "The last Friday of term is quoted and then corrected to the Wednesday of the final week, because the marker needs the weekend. The tutor's correction, not her first offer, is the answer the question is built around.",
        },
      },
      {
        id: "q5",
        type: "flowchart",
        label: "Questions 5–7",
        instruction: "Complete the flowchart below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "WAIMEA SPIT — the write-up method" }],
          [{ kind: "text", text: "Take a labelled sediment sample at every survey station" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "blank", no: 5 }, { kind: "text", text: " each sample in the oven overnight, then weigh it" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Sieve each dried sample into size " }, { kind: "blank", no: 6 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Log the weights in the shared " }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Check the profile against the council's aerial photograph" }],
        ],
        blanks: [
          { no: 5, answer: "dry", alternatives: [] },
          { no: 6, answer: "fractions", alternatives: [] },
          { no: 7, answer: "spreadsheet", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "sequencing"],
          keywords: ["oven", "size fractions", "spreadsheet", "aerial photograph"],
          explanation:
            "The method runs strictly in order: each labelled sediment sample is dried in the oven overnight and weighed, then sieved into size fractions, and the weights are logged in the shared spreadsheet before the profile is finally checked against the council's aerial photograph.",
        },
      },
    ],
    transcriptNote:
      "The tutor corrects the planting date from May to March and the deadline from the last Friday to the Wednesday of the final week. Katie's glare trouble is not Dev's flattened tape measure, and the bare patch has two causes, not one.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-business-plan",
    title: "Judging a student business-plan final",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 9,
    topic: "economics",
    accentMix: ["british", "north-american"],
    intro:
      "You will hear two judges of a student business-plan competition discussing the four finalist teams and allocating the prizes. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "piers", name: "Piers", role: "angel investor judging the student business-plan final", accent: "british" },
      { id: "marcia", name: "Marcia", role: "business lecturer judging the student business-plan final", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "piers", text: "Right, Marcia — four pitches down, one cheque to sign. Let's take the finalists in order. Harvest Loop first, the surplus-food app. Where do you land?" },
      { id: "s2", speakerId: "marcia", text: "The product is real, and the pilot with the campus kitchens showed genuine traction. But the numbers — I wrote 'heroic' in the margin. They're forecasting break-even in month nine on margins no restaurant will accept." },
      { id: "s3", speakerId: "piers", text: "Same page, different reason. My worry was that neither founder could say who else was running surplus food within ten miles of campus." },
      { id: "s4", speakerId: "marcia", text: "The competition question, yes. Still — best elevator pitch of the day, by a mile." },
      { id: "s5", speakerId: "piers", text: "No argument there. TutorTandem next, the peer-tutoring platform." },
      { id: "s6", speakerId: "marcia", text: "Solid, careful, honest numbers — and about as thrilling as a rainy Tuesday. Every claim was footnoted, and not one of them made me lean forward." },
      { id: "s7", speakerId: "piers", text: "But they already have a working product in two departments, and they knew their costs to the penny. In three years that's a business; the food app might be a headline." },
      { id: "s8", speakerId: "marcia", text: "The classic split — sizzle against substance. What about Mud & Mend, the bike-repair co-op? I'd written them off from the written summary, and then their answers won me over completely." },
      { id: "s9", speakerId: "piers", text: "They had an answer for every objection before we raised it. The repair-training angle for long-term unemployed young people was the human story of the day, and their unit economics were almost humble. Under-promising is underrated." },
      { id: "s10", speakerId: "marcia", text: "Agreed — and the social-enterprise prize is theirs if we award it. The question is whether they take the whole thing." },
      { id: "s11", speakerId: "piers", text: "Which brings us to SoleSonic and the running-shoe insoles. A working prototype, a filed patent, a licensing deal already drafted." },
      { id: "s12", speakerId: "marcia", text: "And a founder who told us twice that manufacturing is somebody else's problem. That's the one that keeps me up at night — brilliant technology, zero operations." },
      { id: "s13", speakerId: "piers", text: "So here's where I stand. The brief says we judge investability, not warmth. On that narrow test SoleSonic wins on paper — but I'd put my own money on Mud & Mend, and I suspect you would too." },
      { id: "s14", speakerId: "marcia", text: "I would. So let's use the prizes properly: the main award, the ten thousand pounds, goes to Mud & Mend. SoleSonic takes the innovation award — the patent earned that on its own. And Harvest Loop can have the audience prize; they polled it over lunch." },
      { id: "s15", speakerId: "piers", text: "Which leaves TutorTandem, and they shouldn't walk away with nothing." },
      { id: "s16", speakerId: "marcia", text: "The incubator place, then — three months of mentoring to fix the pitch. Runner-up money would only delay the lesson they need to learn.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Marcia's main criticism of Harvest Loop's plan?",
        options: [
          "Its break-even forecast rests on unrealistic margins.",
          "Its pilot with the campus kitchens was too small.",
          "It faces competition the founders had not researched.",
        ],
        correct: [0],
        meta: {
          skills: ["attribution", "opinion", "paraphrase"],
          keywords: ["heroic", "break-even", "within ten miles"],
          trap: {
            family: "attribution",
            lure: ["within ten miles"],
            note:
              "The competitor blind spot is Piers's reservation; Marcia's is the 'heroic' break-even forecast — attach each criticism to the right judge before choosing.",
          },
          explanation:
            "Marcia's reservation is the 'heroic' break-even forecast built on margins no restaurant will accept; the missing competitor analysis, ten miles of it, is Piers's worry. Two judges, two criticisms — and the question asks for hers, not his.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Piers admire about TutorTandem?",
        options: [
          "The boldness of their market projections.",
          "A working product and a precise grasp of their costs.",
          "The energy of their final pitch.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "detail", "paraphrase"],
          keywords: ["working product", "costs to the penny", "rainy Tuesday"],
          explanation:
            "Piers values TutorTandem's working product running in two departments and their grasp of costs to the penny, even while Marcia calls the pitch about as thrilling as a rainy Tuesday. The bold-projection option fits nobody in the conversation.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why does Marcia hesitate over SoleSonic?",
        options: [
          "The patent has still to be filed.",
          "The founder treats manufacturing as somebody else's problem.",
          "The licensing deal was drafted without a lawyer.",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["manufacturing", "somebody else's problem", "zero operations", "filed patent"],
          trap: {
            family: "negation",
            lure: ["somebody else's problem"],
            note:
              "Marcia quotes the founder's own words — manufacturing is 'somebody else's problem' — and the patent is real and already filed, so the operations gap is the concern that survives.",
          },
          explanation:
            "Marcia quotes the founder telling the panel twice that manufacturing is somebody else's problem — brilliant technology, zero operations. The patent is real and already filed and the licensing deal is drafted, so the operations gap is the only concern left standing.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How is the main award finally decided?",
        options: [
          "It goes to SoleSonic, on the investability test.",
          "It goes to Mud & Mend, against the narrow reading of the brief.",
          "It is shared between the top two teams.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "detail", "paraphrase"],
          keywords: ["main award", "ten thousand pounds", "own money", "investability"],
          explanation:
            "The judges set the narrow investability test aside: Piers would put his own money on Mud & Mend, and Marcia agrees, so the ten-thousand-pound main award goes there. SoleSonic settles for the innovation award, and nothing is shared between teams.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "The judges decide how the prizes will be allocated. Choose FOUR answers from the box and write the correct letter, A–E, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 Harvest Loop",
          "6 TutorTandem",
          "7 Mud & Mend",
          "8 SoleSonic",
        ],
        options: [
          "the main award of ten thousand pounds",
          "the innovation award, for its patent",
          "the audience prize",
          "a funded incubator place with mentoring",
          "the runner-up cash award",
        ],
        correct: [2, 3, 0, 1],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["audience prize", "incubator", "innovation award", "ten thousand pounds"],
          trap: {
            family: "negation",
            lure: ["Runner-up money"],
            note:
              "Runner-up cash is raised and refused in the same sentence — TutorTandem get mentoring instead, so the rejected prize must not be matched to anyone.",
          },
          explanation:
            "Mud & Mend take the main award of ten thousand pounds (A); SoleSonic takes the innovation award earned by its patent (B); Harvest Loop receives the audience prize (C); and TutorTandem gets the funded incubator place with mentoring (D). The runner-up cash (E) is raised and explicitly refused.",
        },
      },
    ],
    transcriptNote:
      "Each criticism belongs to a judge: Piers raises the missing competitor analysis while Marcia questions the break-even forecast. TutorTandem are explicitly refused runner-up money in favour of the incubator place, and the main award goes against the narrow investability test.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-media-feedback",
    title: "Feedback on a media studies project",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 8,
    topic: "culture",
    accentMix: ["british"],
    intro:
      "You will hear a tutor giving two students feedback on the documentary they made for a media studies project. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ferrier", name: "Dr Ferrier", role: "media studies tutor marking the documentary project", accent: "british" },
      { id: "aisha", name: "Aisha", role: "student co-director of the market documentary", accent: "british" },
      { id: "robin", name: "Robin", role: "student co-director of the market documentary", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ferrier", text: "Come in, both of you. I've watched The Market at Four in the Morning twice — once for pleasure and once with my marker's hat on. Shall we start with the good news?" },
      { id: "s2", speakerId: "aisha", text: "Please do." },
      { id: "s3", speakerId: "ferrier", text: "The interviews. The fish porter talking about his father's stall is four of the best minutes of student filming I've seen in years — you let him finish his sentences, and the camera stayed on his hands." },
      { id: "s4", speakerId: "robin", text: "That was Aisha's call. I wanted to cut away to the delivery vans." },
      { id: "s5", speakerId: "ferrier", text: "Then thank Aisha, because the cutting would have ruined it. The opening works too — that empty flower hall at three a.m. is genuinely eerie. Now the harder notes." },
      { id: "s6", speakerId: "aisha", text: "The sound, I know. Half the porter interview has pallet trucks rumbling underneath it." },
      { id: "s7", speakerId: "ferrier", text: "Underneath is fine — documentary lives on that texture. The problem is your levels jumping between speakers, so the audience rides the volume control. That's a re-mix, not a reshoot." },
      { id: "s8", speakerId: "robin", text: "We can re-mix by the weekend. What about the music? I still think the piano under the final scene earns its place." },
      { id: "s9", speakerId: "aisha", text: "It tells people how to feel. The porter's silence had already done that job." },
      { id: "s10", speakerId: "ferrier", text: "I'm with Aisha here, and it isn't only taste — your own brief says no scripted emotion. So the piano goes. Anything else? Robin, you've gone quiet." },
      { id: "s11", speakerId: "robin", text: "The ending, then. You wrote 'needs a conclusion' on the marking sheet, but I'd argue a film about a market that never closes shouldn't close too neatly either." },
      { id: "s12", speakerId: "ferrier", text: "There's something in that, and I'll grant it in my notes. But a shrug isn't an ending. Give me the dawn queue outside the café — thirty seconds, no commentary — and let the audience draw their own line. Agreed?" },
      { id: "s13", speakerId: "robin", text: "Agreed. And the title card at the start — do we keep it?" },
      { id: "s14", speakerId: "ferrier", text: "It spells out what the flowers are about, so trim the wording, but keep the card. Now logistics: the screening is Thursday's slot? No — I've moved you to Friday, because the projector is being serviced. Resubmit the corrected film by the following Tuesday." },
      { id: "s15", speakerId: "aisha", text: "Tuesday it is. And you wanted a written piece alongside it?" },
      { id: "s16", speakerId: "ferrier", text: "A reflection — five hundred words, one page, on what the re-mix taught you. Not a diary; a log of decisions. Off you go — you've made something worth fixing.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Ferrier praise most about the documentary?",
        options: [
          "The eerie opening shots of the empty market.",
          "The interview with the fish porter, left uncut.",
          "The decision to end the film without commentary.",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "detail", "paraphrase"],
          keywords: ["fish porter", "best minutes", "flower hall"],
          explanation:
            "The tutor singles out the fish-porter interview — four of the best minutes of student filming he has seen in years — for letting the subject finish his sentences and holding the camera on his hands. The eerie opening is praised too, but only in passing.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Robin think about the piano music at the end?",
        options: [
          "It duplicates the mood the porter's silence already created.",
          "It deserves to stay in the final cut.",
          "It should be replaced by a lighter piece.",
        ],
        correct: [1],
        meta: {
          skills: ["attitude", "attribution", "paraphrase"],
          keywords: ["piano", "earns its place", "tells people how to feel"],
          trap: {
            family: "attribution",
            lure: ["porter's silence"],
            note:
              "The silence argument belongs to Aisha, who wants the piano gone; Robin defends the music — attribute the criticism to the right student before choosing.",
          },
          explanation:
            "Robin still thinks the piano under the final scene earns its place, while Aisha argues that it tells people how to feel when the porter's silence has already done that job. The tutor sides with Aisha on the brief's rule against scripted emotion, but the question asks for Robin's view.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How does Dr Ferrier respond to Robin's argument about the ending?",
        options: [
          "He rejects it completely and asks for a voiceover.",
          "He concedes part of it but still asks for a closing scene.",
          "He asks Robin to defend the point in the reflection.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "detail", "paraphrase"],
          keywords: ["there's something in that", "dawn queue", "shrug"],
          explanation:
            "The tutor grants the point — 'there's something in that' — but insists a shrug isn't an ending, so thirty seconds of the dawn queue outside the café must close the film with no commentary. The objection is partly accepted, not dismissed or deferred to the write-up.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "When will the film now be screened?",
        options: [
          "On Thursday, in the original slot.",
          "On Friday, because the projector is out of action.",
          "On Tuesday, alongside the resubmission.",
        ],
        correct: [1],
        meta: {
          skills: ["correction", "detail"],
          keywords: ["Thursday", "Friday", "projector", "resubmit"],
          trap: {
            family: "correction",
            lure: ["Thursday"],
            note:
              "Thursday's slot is announced and immediately swapped for Friday because of the projector service — the corrected day scores, and Tuesday belongs to the resubmission.",
          },
          explanation:
            "Thursday's slot is announced and then swapped for Friday because the projector is being serviced. The following Tuesday is the resubmission deadline for the corrected film, not the screening, so the corrected day is the answer.",
        },
      },
      {
        id: "q5",
        type: "sentence",
        label: "Questions 5–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "The film opens with shots of the market's empty " }, { kind: "blank", no: 5 }, { kind: "text", text: " at three a.m." }],
          [{ kind: "text", text: "Dr Ferrier says the sound levels keep " }, { kind: "blank", no: 6 }, { kind: "text", text: " between speakers." }],
          [{ kind: "text", text: "The new ending will show the " }, { kind: "blank", no: 7 }, { kind: "text", text: " outside the café." }],
          [{ kind: "text", text: "Alongside the corrected film, the students must submit a one-page written " }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 5, answer: "flower hall", alternatives: [] },
          { no: 6, answer: "jumping", alternatives: [] },
          { no: 7, answer: "dawn queue", alternatives: [] },
          { no: 8, answer: "reflection", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "process-tracking"],
          keywords: ["flower hall", "jumping", "dawn queue", "reflection", "volume control"],
          explanation:
            "The film opens on the empty flower hall at three a.m.; the sound problem is the levels jumping between speakers, which a re-mix will fix; the new ending is the dawn queue outside the café; and the resubmission carries a one-page written reflection presented as a log of decisions.",
        },
      },
    ],
    transcriptNote:
      "The screening moves from Thursday to Friday because of the projector, and Tuesday belongs to the resubmission deadline. Robin defends the piano while Aisha and the tutor want it gone — attribute each verdict to its owner.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-psych-experiment",
    title: "Designing a psychology experiment",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear a supervision meeting in which a psychology tutor and two students design an experiment about note-taking and memory. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "messiter", name: "Dr Messiter", role: "psychology supervisor helping design the experiment", accent: "british" },
      { id: "elif", name: "Elif", role: "student designing the note-taking experiment", accent: "british" },
      { id: "jonah", name: "Jonah", role: "student designing the note-taking experiment", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "messiter", text: "Elif, Jonah — sit down, both. Today we turn your essay question into something you can actually run: does writing notes by hand leave better recall than typing them? Elif, start us off with the participants." },
      { id: "s2", speakerId: "elif", text: "We thought forty first-years, twenty in each condition, recruited from the department's participant panel. They'd get course credit, which is standard." },
      { id: "s3", speakerId: "messiter", text: "Forty is defensible for a project this size. One exclusion to build in, though: anyone who has already taken part in a memory study this term. Carry-over effects will wreck your word lists." },
      { id: "s4", speakerId: "jonah", text: "We can screen for that at sign-up. The task itself — participants watch a ten-minute recorded lecture and take notes however they like?" },
      { id: "s5", speakerId: "messiter", text: "'However they like' is not a condition, it's a buffet. Assign each participant to hand-writing or typing, and hold the lecture constant." },
      { id: "s6", speakerId: "elif", text: "Assigned, then. And the room? The lab suite has those individual booths." },
      { id: "s7", speakerId: "jonah", text: "I'd rather use a seminar room. The booths are claustrophobic, and the keyboards sound like rain on a tin roof — that's a nuisance variable in itself." },
      { id: "s8", speakerId: "messiter", text: "It is, so the seminar room it is. Stagger the sessions, though, so nobody overhears the lecture through the wall. Now — how do you measure recall?" },
      { id: "s9", speakerId: "elif", text: "Straight after the lecture? No — wait. We discussed a five-minute filler task first, a pencil-and-paper puzzle, so it isn't just echoic memory doing the work." },
      { id: "s10", speakerId: "jonah", text: "Then free recall: write down every concept you can from the lecture, in any order. We score the number of correct concepts." },
      { id: "s11", speakerId: "messiter", text: "Free recall it is. I know you fancied a recognition test with the original items plus lures, but recognition is a friendlier test — you'd need a bigger sample than you can recruit, and the effect would shrink to nothing." },
      { id: "s12", speakerId: "elif", text: "That one was mine, so — noted." },
      { id: "s13", speakerId: "messiter", text: "Ethics, then. Anything in this design that worries you?" },
      { id: "s14", speakerId: "jonah", text: "It's low-risk. The only wrinkle I can see is that we're not telling them what we're measuring until afterwards." },
      { id: "s15", speakerId: "messiter", text: "Withheld purpose is standard, and you debrief everyone at the end, so that's fine. What is not fine is running this during their exam period — book the fortnight after term ends." },
      { id: "s16", speakerId: "elif", text: "So: forty assigned participants, one seminar room, filler task, free recall, fortnight after term. Anything else before we pilot it?" },
      { id: "s17", speakerId: "messiter", text: "Yes — run the pilot on six friends first, and let them complain about the audio. If the lecture is inaudible at the back of the room, your 'handwriting effect' is just hearing loss. Bring me the pilot sheet next week.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–4",
        instruction:
          "The group agrees a decision on each feature of the experiment. Choose FOUR answers from the box and write the correct letter, A–F, next to questions 1–4. You may use each letter once only.",
        items: [
          "1 the number of participants",
          "2 who cannot take part",
          "3 the testing room",
          "4 the measure of recall",
        ],
        options: [
          "forty first-years, with twenty in each condition",
          "free recall of concepts, in any order",
          "a seminar room, with staggered sessions",
          "anyone who has taken part in a memory study this term",
          "individual booths in the lab suite",
          "a recognition test with original items and lures",
        ],
        correct: [0, 3, 2, 1],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["forty", "seminar room", "free recall", "carry-over", "filler task"],
          trap: {
            family: "negation",
            lure: ["recognition test"],
            note:
              "Both unused options are proposals raised and rejected — the booths lose to the noisy keyboards and the recognition test to the sample size — so only the decisions that survive the supervisor score.",
          },
          explanation:
            "The design settles on forty first-years with twenty per condition (A), excludes anyone who has taken part in a memory study this term because of carry-over effects (D), uses one seminar room with staggered sessions (C), and measures free recall of concepts in any order (B). The booths (E) and the recognition test (F) are both raised and refused.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Dr Messiter's objection to letting participants choose how they take notes?",
        options: [
          "The study would have no controlled conditions to compare.",
          "Volunteers would resent being assigned a method.",
          "The two groups would need different lectures.",
        ],
        correct: [0],
        meta: {
          skills: ["paraphrase", "detail"],
          keywords: ["however they like", "buffet", "hold the lecture constant"],
          explanation:
            "'However they like' would leave the study with no proper conditions — the tutor's buffet line — so each participant is assigned to hand-writing or typing while the recorded lecture is held constant for everybody. Resentment and separate lectures are never raised.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why is the recognition test rejected?",
        options: [
          "It would require more participants than the students can recruit.",
          "It has already been run by another group this term.",
          "It cannot be scored without specialist software.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["recognition", "friendlier test", "bigger sample"],
          explanation:
            "Recognition is described as a friendlier test, which would demand a bigger sample than the students can recruit and shrink the effect to nothing. Free recall is the measure that survives the supervisor's ruling, and neither prior use nor software is mentioned.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Messiter say about withholding the study's purpose?",
        options: [
          "It is acceptable provided participants are debriefed afterwards.",
          "It requires written approval from each participant's tutor.",
          "It is only allowed when the participants are friends of the researchers.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["withheld purpose", "debrief", "low-risk"],
          explanation:
            "Withheld purpose is standard practice provided every participant is debriefed at the end; what the supervisor actually forbids is running the study during the exam period. The friends-of-the-researchers option confuses the pilot with the main study.",
        },
      },
      {
        id: "q5",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why does Dr Messiter want a pilot study first?",
        options: [
          "To confirm the lecture recording is audible to everyone.",
          "To estimate the dropout rate before the main study.",
          "To check the filler task does not take too long.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "detail", "paraphrase"],
          keywords: ["pilot", "inaudible", "hearing loss"],
          explanation:
            "The pilot's job is to let six friends complain about the audio: if the lecture is inaudible at the back of the room, any handwriting effect is really just hearing loss. Drop-out rates and filler-task timing are never the reason the supervisor gives.",
        },
      },
    ],
    transcriptNote:
      "The recognition test and the lab booths are both proposed and rejected in the same meeting, and withheld purpose is ruled acceptable so long as everyone is debriefed. The pilot exists purely to test whether the lecture is audible at the back of the room.",
    source: BANK_SOURCE_NOTE,
  },
];
