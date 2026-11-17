/**
 * Audio question bank — Part 2 expansion exercises, batch B (PROMPT 54).
 *
 * Seven further social-context monologues in the long-turn style of the
 * Listening test's second part: a campus walking tour, a recycling-scheme
 * briefing, a charity-shop induction, a botanical-garden audio guide, a
 * community-transport meeting, a summer-school orientation and a manor-house
 * audio guide. One main voice per recording (two brief second voices where a
 * live audience justifies it), with signposting, directions, process language
 * and designed distractor traps. Every recording is original TalkSy practice
 * material written in the style of the test.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP2BExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p2-campus-tour",
    title: "A tour of the university campus",
    part: 2,
    topic: "university",
    difficulty: 2,
    estimatedMinutes: 6,
    accentMix: ["north-american"],
    intro:
      "You will hear a student ambassador leading a group of new students and their families on a walking tour of a university campus. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "maya", name: "Maya", role: "second-year student guiding a campus tour at Tremont University", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "maya", text: "Hi, everybody, and welcome to Tremont University! I'm Maya, a second-year student and one of the campus ambassadors, which means I get paid in pizza to walk backwards and talk all afternoon." },
      { id: "s2", speakerId: "maya", text: "We've got five stops, all marked on the plan you're holding, so keep it handy. If you ever lose the group, the clock tower is visible from pretty much anywhere on campus." },
      { id: "s3", speakerId: "maya", text: "Let's begin right here at the main gate. On the left-hand side of the plan, beside the fountain, that big glass building is stop one, the fitness centre — the climbing wall is right there in the window. The pool's in there too, but that part's for members only." },
      { id: "s4", speakerId: "maya", text: "Stop two is the campus bookstore, on the other side of the fountain, the right-hand side of your plan. And yes, they sell Tremont hoodies, but they're cheaper in September, so hold your nerve." },
      { id: "s5", speakerId: "maya", text: "From there we cut behind the clock tower to stop three, the science building, in the top right corner of the plan, diagonally opposite the gate." },
      { id: "s6", speakerId: "maya", text: "Stop four, the student union, sits in the bottom left corner of the plan, at the end of the lawn. Every club lives there, from the debate team to the cheese society — and no, I don't know why we have a cheese society either." },
      { id: "s7", speakerId: "maya", text: "Our last stop is the library, in the bottom right corner, right beside the shuttle stop. It's open twenty-four hours during exams, a fact I can confirm from painful personal experience." },
      { id: "s8", speakerId: "maya", text: "Two places we'll pass but not visit. Between stops two and three we go by the careers office, the little wooden door beside the bookstore — worth remembering in your final year, not this one." },
      { id: "s9", speakerId: "maya", text: "And if anyone needs the health centre, it's out past the shuttle stop, near the east gate. Just flag me down and I'll point the way, because it isn't on our route." },
      { id: "s10", speakerId: "maya", text: "About that shuttle: the welcome-pack timetable says every ten minutes, but that's the semester schedule. Over the summer break it runs every twenty minutes, with the last bus at nine p.m.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "maya", text: "Finally, housekeeping. You don't need to sign anything today, and please keep your visitor badge — there's no mailing list to join either. What I'd love is two minutes on the feedback card at the front desk. Right — follow me, and mind the sprinklers." },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the campus. Choose the correct letter, A–G, for each numbered stop on the tour.",
        plan: {
          title: "Tremont University campus",
          caption: "The tour route — write the correct letter next to each numbered stop.",
          grid: [
            [{ room: "Main Gate", label: "Start" }, { room: "Clock Tower" }, { room: "Stop 3", blank: 3 }],
            [{ room: "Stop 1", blank: 1 }, { room: "Fountain" }, { room: "Stop 2", blank: 2 }],
            [{ room: "Stop 4", blank: 4 }, { room: "Shuttle Stop" }, { room: "Stop 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the fitness centre" },
          { letter: "B", text: "the campus bookstore" },
          { letter: "C", text: "the science building" },
          { letter: "D", text: "the health centre" },
          { letter: "E", text: "the student union" },
          { letter: "F", text: "the library" },
          { letter: "G", text: "the careers office" },
        ],
        correct: ["A", "B", "C", "E", "F"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["left-hand side of the plan", "other side of the fountain", "top right corner", "bottom left corner", "right beside the shuttle stop"],
          trap: {
            family: "mention-lure",
            lure: ["health centre", "careers office"],
            note: "The health centre and the careers office are both described in detail, but Maya passes both without stopping — neither letter answers a numbered stop.",
          },
          explanation:
            "Work around the plan from the gate: the glass fitness centre sits on the plan's left beside the fountain, the bookstore is on the fountain's other side to the right, the science building fills the top right corner behind the clock tower, the student union sits in the bottom left corner at the end of the lawn, and the library stands beside the shuttle stop in the bottom right.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How often does the campus shuttle run during the summer break?",
        options: ["Every ten minutes", "Every twenty minutes", "Every half hour"],
        correct: [1],
        meta: {
          skills: ["corrections", "numbers", "detail"],
          keywords: ["every ten minutes", "every twenty minutes", "summer break"],
          trap: {
            family: "correction",
            lure: ["every ten minutes"],
            note: "The ten-minute figure comes from the welcome pack's semester timetable; Maya replaces it with the summer schedule of every twenty minutes, and the corrected value scores.",
          },
          explanation:
            "Maya quotes the welcome-pack timetable first — every ten minutes — then swaps in the summer schedule of every twenty minutes for the break. The last bus at nine p.m. is a separate detail that answers no option here.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Maya ask the group to do at the end of the tour?",
        options: ["Hand in their visitor badges", "Fill in a feedback card", "Join the university mailing list"],
        correct: [1],
        meta: {
          skills: ["negation", "gist", "detail"],
          keywords: ["feedback card", "visitor badge", "mailing list"],
          trap: {
            family: "negation",
            lure: ["visitor badge", "mailing list"],
            note: "Badges are expressly kept as souvenirs and the mailing list is closed off with 'either' — the feedback card is the only thing actually requested.",
          },
          explanation:
            "Maya rules out signing anything, tells everyone to keep the badge as a souvenir, and closes the mailing-list door before making her one real request: two minutes on the feedback card at the front desk.",
        },
      },
    ],
    transcriptNote:
      "The map hangs on plan-relative directions — left-hand side, other side of the fountain, top right corner — while the health centre and the careers office are named only as places the tour walks past. The shuttle timetable is corrected from ten minutes to twenty for the summer, and the closing request survives a double refusal.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-recycling",
    title: "How the new recycling scheme works",
    part: 2,
    topic: "environment",
    difficulty: 3,
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear a council waste-reduction officer explaining to residents at a meeting how their new recycling scheme works. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "ruth", name: "Ruth", role: "waste-reduction officer briefing Farleigh residents on the new scheme", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ruth", text: "Evening, everyone — thanks for coming out on such a wet night. I'm Ruth, the waste-reduction officer at Farleigh Council, and the next ten minutes belong to your new recycling scheme, which starts on the first of the month." },
      { id: "s2", speakerId: "ruth", text: "Let me walk you through the journey your recycling makes, because once you've seen the whole loop, the rules make a lot more sense." },
      { id: "s3", speakerId: "ruth", text: "It starts in your kitchen. Give your jars, tins and trays a quick rinse — they don't need to be spotless — and drop them straight into the green bin. Loose, please: nothing tied up in carrier bags, because the sorting machines choke on them." },
      { id: "s4", speakerId: "ruth", text: "Then, collection night. Roll that green bin out to the kerbside by seven in the evening. Your collection day is Tuesday — the old leaflets said Wednesday, I know, but the routes changed when the new depot opened, so it's Tuesday evening from now on. Miss it and the crew can't come back.", pauseAfterMs: 300 },
      { id: "s5", speakerId: "ruth", text: "Come the morning, the crews empty your bins into the lorry, and every load gets weighed, because the council is fined for anything that ends up in landfill." },
      { id: "s6", speakerId: "ruth", text: "The lorry tips the whole lot at a materials recovery facility about twenty minutes up the road. Inside, it's a glorious chaos of magnets, drums and laser scanners that splits the mixed load into separate streams — steel, aluminium, glass, paper, card and each kind of plastic." },
      { id: "s7", speakerId: "ruth", text: "Those streams are baled and sold on to manufacturers, and that's where the loop closes. Aluminium is the star: a can you put out on Tuesday can be back on the supermarket shelf, filled and priced, in as little as six weeks." },
      { id: "s8", speakerId: "ruth", text: "Now, what your recycling becomes. Your glass bottles are crushed into a sand substitute that goes into road surfaces — you may well have driven on last year's pasta sauce." },
      { id: "s9", speakerId: "ruth", text: "Plastic drinks bottles are spun into a soft fleece that turns up in winter coats, and drinks cartons — the ones with the shiny lining — are flattened into boards that insulate lofts." },
      { id: "s10", speakerId: "ruth", text: "Two myths while I've got you. Shredded paper used to go to a farm for animal bedding, but the farm has closed, so it goes in the green bin now. And food scraps are composted in the brown caddie — that's a separate collection, not the green bin." },
      { id: "s11", speakerId: "ruth", text: "Leaflets with all of this are by the door. Thank you for having me — and happy rinsing." },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart",
        label: "Questions 1–5",
        instruction: "Complete the flowchart below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "From the kitchen to the supermarket shelf — one lap of the recycling loop" }],
          [{ kind: "text", text: "Rinse jars, tins and trays" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Drop everything loose into the " }, { kind: "blank", no: 1 }, { kind: "text", text: " bin" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Roll the bin out on a " }, { kind: "blank", no: 2 }, { kind: "text", text: " evening" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Crews empty the bins into the lorry; each load is weighed" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "The load is sorted at a materials " }, { kind: "blank", no: 3 }, { kind: "text", text: " facility" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Sorted bales are sold on to " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Cans are back on the shelf within " }, { kind: "blank", no: 5 }, { kind: "text", text: " weeks" }],
        ],
        blanks: [
          { no: 1, answer: "green", alternatives: [], numbers: false },
          { no: 2, answer: "Tuesday", alternatives: [], numbers: false },
          { no: 3, answer: "recovery", alternatives: [], numbers: false },
          { no: 4, answer: "manufacturers", alternatives: [], numbers: false },
          { no: 5, answer: "six", alternatives: ["6"], numbers: true },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["process-tracking", "detail", "corrections"],
          keywords: ["green bin", "kerbside", "Tuesday evening", "materials recovery facility", "sold on to manufacturers", "six weeks"],
          trap: {
            family: "correction",
            lure: ["Wednesday"],
            note: "Wednesday belongs to the old leaflets and is corrected in the same breath — the routes changed when the new depot opened, so Tuesday evening is the day that scores.",
          },
          explanation:
            "Follow the loop with the signal words: rinsed items go loose into the green bin, the bin goes out on a Tuesday evening once the day is corrected from the leaflets' Wednesday, the lorry tips at the materials recovery facility, the sorted bales are sold on to manufacturers, and a can can be back on the shelf within six weeks.",
        },
      },
      {
        id: "q2",
        type: "matching",
        label: "Questions 6–9",
        instruction: "Match each material with what the scheme can turn it into. Choose the correct letter, A–F.",
        items: [
          "Glass bottles",
          "Aluminium cans",
          "Plastic drinks bottles",
          "Drinks cartons",
        ],
        options: [
          "winter clothing",
          "new cans on the shelf",
          "road surfaces",
          "animal bedding",
          "boards for loft insulation",
          "garden compost",
        ],
        correct: [2, 1, 0, 4],
        meta: {
          skills: ["paraphrase", "detail"],
          keywords: ["road surfaces", "fleece", "winter coats", "insulate lofts", "as little as six weeks"],
          trap: {
            family: "mention-lure",
            lure: ["animal bedding", "compost"],
            note: "Animal bedding was the shredded paper's old destination and compost belongs to the food caddie — neither is a printed material, so D and F are the dead ends.",
          },
          explanation:
            "Glass is crushed into a sand substitute used in road surfaces, aluminium returns as new cans on the shelf within six weeks, plastic bottles become the soft fleece inside winter clothing, and cartons are flattened into the boards that insulate lofts. Bedding and compost are real facts about other materials.",
        },
      },
    ],
    transcriptNote:
      "The flowchart rides on the process signals, and on one correction: Wednesday comes from the old leaflets, and the collection day is now Tuesday. In the matching, animal bedding and garden compost are true facts about materials that are not on the printed list.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-charity-shop",
    title: "A briefing for charity-shop volunteers",
    part: 2,
    topic: "society",
    difficulty: 2,
    estimatedMinutes: 6,
    accentMix: ["british"],
    intro:
      "You will hear the manager of a charity shop briefing two new volunteers on their first morning in the shop. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "dawn", name: "Dawn", role: "manager of the Rowan Hospice charity shop", accent: "british" },
      { id: "tom", name: "Tom", role: "new volunteer starting on the shop's Tuesday shift", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "dawn", text: "Right, come through to the back room, both of you — mind the bags. I'm Dawn, I run the Rowan Hospice shop on Mill Lane, and you must be my Tuesday starters. Welcome aboard." },
      { id: "s2", speakerId: "dawn", text: "Before you touch a single donation, the golden rule: we sort everything before it reaches the shop floor, and nothing is priced by guesswork. If you're ever unsure, ask — there's no such thing as a silly question in this shop." },
      { id: "s3", speakerId: "dawn", text: "So, what actually happens to the things people bring in? It's more complicated than you'd think." },
      { id: "s4", speakerId: "dawn", text: "Clothing arrives by the bin-bag full. Anything clean and wearable gets steamed and hung, but clothing that's worn out — holes, stains, bobbling — doesn't go to landfill. It's sold on to a rag merchant, and the hospice still gets paid for it." },
      { id: "s5", speakerId: "dawn", text: "Small electricals — kettles, lamps, that sort of thing — we can't test ourselves, so a firm called VoltSafe collects them, checks them over and sells the safe ones on our behalf." },
      { id: "s6", speakerId: "dawn", text: "Books are my favourite. Ordinary paperbacks go straight on the shelf at fifty pence, but the collectable ones — first editions, signed copies — are photographed and auctioned on the shop's website, where they fetch proper money. A signed cookery book made eighty pounds last spring." },
      { id: "s7", speakerId: "dawn", text: "Furniture works differently. We never ask anyone to carry a sofa to us — the hospice van team collects large pieces from donors' homes and delivers them to buyers as well." },
      { id: "s8", speakerId: "dawn", text: "The good vintage pieces — the proper retro coats and dresses — go to Nadia, who builds the front-window display. People come in just to see what she's done that week." },
      { id: "s9", speakerId: "dawn", text: "And stock never lingers: anything unsold after four weeks gets swapped with another branch, so the rails always look fresh." },
      { id: "s10", speakerId: "dawn", text: "Now, hours. The rota email said we close at four — ignore that. Since Easter it's half past five, and I need one of you on the till at closing time.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "dawn", text: "Rules in the sorting room: gloves are there if you want them, and the kettle lives in the staff room, not on the counter. But the one thing I'm strict about — nothing, ever, gets stacked in front of the fire door." },
      { id: "s12", speakerId: "tom", text: "Quick one from me — is there anywhere for volunteers to park?" },
      { id: "s13", speakerId: "dawn", text: "Behind the shop, three spaces — take a permit slip from the till drawer on your first day. Right, gloves on, and let's get sorting." },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction: "Match each type of donation with what happens to it. Choose the correct letter, A–F.",
        items: [
          "Worn-out clothing",
          "Small electrical items",
          "Collectable books",
          "Large items of furniture",
          "Good vintage clothing",
        ],
        options: [
          "safety-checked by an outside firm",
          "auctioned on the shop's website",
          "displayed in the front window",
          "sold on to a rag merchant",
          "swapped with another branch",
          "collected from donors' homes by the van team",
        ],
        correct: [3, 0, 1, 5, 2],
        meta: {
          skills: ["paraphrase", "detail"],
          keywords: ["rag merchant", "VoltSafe", "auctioned on the shop's website", "van team", "front-window display"],
          explanation:
            "Worn-out clothing is sold on to a rag merchant rather than dumped, electricals are collected and safety-checked by VoltSafe, collectable books are auctioned on the shop's website, furniture is picked up from donors' homes by the van team, and the best vintage pieces go into Nadia's front-window display. The branch swap applies to unsold stock, not to donations.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What time does the shop now close?",
        options: ["4.00 p.m.", "4.30 p.m.", "5.30 p.m."],
        correct: [2],
        meta: {
          skills: ["corrections", "numbers", "detail"],
          keywords: ["close at four", "half past five", "since Easter"],
          trap: {
            family: "correction",
            lure: ["close at four"],
            note: "The four o'clock figure is quoted straight from the rota email and cancelled in the same breath — since Easter the shop has closed at half past five.",
          },
          explanation:
            "Dawn quotes the rota email's four o'clock purely to scrap it: since Easter the closing time has been half past five, with one volunteer on the till at closing. The half past four option exists to catch anyone who only half-hears the correction.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the one rule Dawn insists on in the sorting room?",
        options: ["Wearing gloves at all times", "Keeping the fire door clear", "Making tea only in the staff room"],
        correct: [1],
        meta: {
          skills: ["gist", "detail", "paraphrase"],
          keywords: ["gloves", "staff room", "fire door"],
          trap: {
            family: "mention-lure",
            lure: ["gloves", "staff room"],
            note: "Gloves are optional and the kettle rule is housekeeping — the phrase 'the one thing I'm strict about' flags the fire door as the answer.",
          },
          explanation:
            "Dawn offers gloves as a matter of choice, mentions where the kettle lives, and then marks the real rule with 'the one thing I'm strict about': nothing may ever be stacked in front of the fire door, not even for a minute.",
        },
      },
    ],
    transcriptNote:
      "Two designed catches: the rota email's closing time of four is corrected to half past five, and the four-week swap between branches applies to unsold stock, not to any of the five donations. The fire-door rule is signposted by 'the one thing I'm strict about'.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-botanical",
    title: "An audio guide to the botanical garden",
    part: 2,
    topic: "science",
    difficulty: 3,
    estimatedMinutes: 7,
    accentMix: ["australian"],
    intro:
      "You will hear an audio guide showing a visitor around a botanical garden. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "jules", name: "Jules", role: "recorded narrator of the Karri Plains Botanical Garden audio guide", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "jules", text: "G'day, and welcome to the Karri Plains Botanical Garden. I'm Jules, and this guide will walk you from the visitor centre down to the café, pointing out what's worth a stop along the way." },
      { id: "s2", speakerId: "jules", text: "First, the plan in your hands. The main lawn sits in the middle, the lake is at the top, and my lefts and rights are the lefts and rights of your plan, not the compass's." },
      { id: "s3", speakerId: "jules", text: "Some history before the plants. The garden opened in nineteen twelve, on a paddock a farming family could never grow wheat on — and that poor, sandy soil turned out to be perfect for wildflowers." },
      { id: "s4", speakerId: "jules", text: "Off the veranda, then. On the left-hand side of the plan, right beside the lawn, is the rose garden: sixty beds of heritage varieties, the kind your great-grandmother would have grown. In summer you can smell it from the car park." },
      { id: "s5", speakerId: "jules", text: "On the opposite side of the lawn, the right of your plan, the low sunny building is the succulent house — cacti and fat-leaved plants that can go a month without a drink." },
      { id: "s6", speakerId: "jules", text: "Follow the path around the lake and it climbs into the native bush walk, the top right corner of the plan. Everything in there grows wild in this district — kangaroo paw, grass trees, the lot. It's the garden's oldest corner and my favourite." },
      { id: "s7", speakerId: "jules", text: "Double back and head down the west side. In the bottom left corner of the plan, the wetland boardwalk floats across the swamp — the best bird-spotting in the garden, if you don't mind the swamp hens bullying the ducks." },
      { id: "s8", speakerId: "jules", text: "That wetland needs looking after, too: on a Sunday morning once a month, a volunteer crew wades in and hauls the weeds out, along with the odd shopping trolley, so the native reeds can breathe." },
      { id: "s9", speakerId: "jules", text: "The last of the five areas is the fern gully, the cool green stretch just below the lawn — mossy, shaded, with a little waterfall, and the only genuinely cold corner of this garden in February." },
      { id: "s10", speakerId: "jules", text: "Two extras before the café. The herb garden, the little plot beside the café door, belongs to the local growers' club. And inside the big glasshouse by the lawn sits the orchid house, which needs its own ticket." },
      { id: "s11", speakerId: "jules", text: "Finally, because everyone asks: the honey in the café's scones comes straight from the hives at the edge of the bush walk. Enjoy the shade, drink your water, and I'll meet you at the café." },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the garden. Choose the correct letter, A–G, for each numbered area.",
        plan: {
          title: "Karri Plains Botanical Garden",
          caption: "The guide's route — write the correct letter next to each numbered area.",
          grid: [
            [{ room: "Visitor Centre", label: "Entrance" }, { room: "Lake" }, { room: "Area 3", blank: 3 }],
            [{ room: "Area 1", blank: 1 }, { room: "Main Lawn" }, { room: "Area 2", blank: 2 }],
            [{ room: "Area 4", blank: 4 }, { room: "Area 5", blank: 5 }, { room: "Café", label: "Finish" }],
          ],
        },
        options: [
          { letter: "A", text: "the rose garden" },
          { letter: "B", text: "the wetland boardwalk" },
          { letter: "C", text: "the fern gully" },
          { letter: "D", text: "the herb garden" },
          { letter: "E", text: "the succulent house" },
          { letter: "F", text: "the native bush walk" },
          { letter: "G", text: "the orchid house" },
        ],
        correct: ["A", "E", "F", "B", "C"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["left-hand side of the plan", "opposite side of the lawn", "top right corner", "bottom left corner", "just below the lawn"],
          trap: {
            family: "mention-lure",
            lure: ["herb garden", "orchid house"],
            note: "The herb garden and the orchid house are both described in detail, but neither is one of the five numbered areas — the herb plot belongs to the growers' club and the orchid house sits inside the glasshouse on a separate ticket.",
          },
          explanation:
            "Work round the plan as the guide speaks: the rose garden fills the left-hand side beside the lawn, the succulent house stands on the lawn's opposite side to the right, the native bush walk climbs the top right corner past the lake, the wetland boardwalk floats across the bottom left corner, and the fern gully lies directly below the lawn.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 6–8",
        instruction: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Karri Plains Botanical Garden — visitor facts" }],
          [{ kind: "text", text: "The garden first opened in " }, { kind: "blank", no: 6 }],
          [{ kind: "text", text: "Each month, volunteers haul " }, { kind: "blank", no: 7 }, { kind: "text", text: " out of the wetland" }],
          [{ kind: "text", text: "The café's honey comes from the garden's own " }, { kind: "blank", no: 8 }],
        ],
        blanks: [
          { no: 6, answer: "1912", alternatives: [], numbers: true },
          { no: 7, answer: "weeds", alternatives: [], numbers: false },
          { no: 8, answer: "hives", alternatives: [], numbers: false },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "paraphrase"],
          keywords: ["nineteen twelve", "weeds", "hives"],
          explanation:
            "The opening year is spoken as nineteen twelve, on the poor sandy paddock that never grew wheat. The monthly volunteer job is hauling the weeds out of the wetland, and the honey question is answered by the hives at the edge of the bush walk.",
        },
      },
    ],
    transcriptNote:
      "The guide orients every area against the printed plan — left-hand side, opposite side of the lawn, top right corner, bottom left corner, just below the lawn — and states up front that left and right mean the plan's, not the compass's. The herb garden and the orchid house are extras, not numbered areas.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-community-transport",
    title: "A community transport initiative",
    part: 2,
    topic: "society",
    difficulty: 4,
    estimatedMinutes: 8,
    accentMix: ["british"],
    intro:
      "You will hear the coordinator of a community transport scheme addressing a village meeting about the new services on offer. First you have some time to look at questions 1 to 3. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "pike", name: "Councillor Pike", role: "parish councillor chairing the Hollowmere village meeting", accent: "british" },
      { id: "nadine", name: "Nadine", role: "coordinator of the Hollowmere community transport scheme", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "pike", text: "Right, if everyone's settled — item four, transport. This is a scheme the county council can be proud of, and I'm delighted that Nadine Osei, the coordinator, could join us tonight. Nadine, it's all yours." },
      { id: "s2", speakerId: "nadine", text: "Thank you, Councillor. Good evening, everyone. I'll keep this to ten minutes, because I know the tea's going cold at the back." },
      { id: "s3", speakerId: "nadine", text: "First, some myth-busting, because I've heard this at every bus stop in Hollowmere: that this scheme is the county council's idea. It isn't. It grew out of a doorstep survey the residents' association ran two winters ago, when two hundred of you said the thing you missed most was simply getting out of the village.", pauseAfterMs: 300 },
      { id: "s4", speakerId: "nadine", text: "So the association built the bid, and the council backed it gladly — but the idea belongs to this room, not the council chamber." },
      { id: "s5", speakerId: "nadine", text: "Now the money, the second myth. People assume fares keep us on the road. They don't. A three-year lottery grant pays the minibus lease and both drivers' wages; the pound-a-ride fares cover the diesel and nothing more. The books are open to anyone who asks." },
      { id: "s6", speakerId: "nadine", text: "What do you get? Four things. The minibus circles the village on Tuesdays and Fridays, market days, to a fixed timetable — no booking, just wait at any of the twelve stops." },
      { id: "s7", speakerId: "nadine", text: "The volunteer-driver car service covers the journeys the buses can't — GP appointments, visiting family, the lot. Ring the office by three in the afternoon the day before, and a driver collects you from your door. They'll take you almost anywhere, though not hospital appointments, because the patient-transport service already covers those." },
      { id: "s8", speakerId: "nadine", text: "Wheels to Work lends a scooter to anyone who's just been offered a job or a college place and has no way of getting there — it's aimed squarely at young people starting out." },
      { id: "s9", speakerId: "nadine", text: "And outside the railway station there's a rack of borrow-bikes: leave a ten-pound deposit, refunded in full when the bike comes back, and the first hour is free." },
      { id: "s10", speakerId: "nadine", text: "Two exclusions before the rumours restart. We don't do the school run — the county runs its own coaches for that, and quite right too." },
      { id: "s11", speakerId: "nadine", text: "And what do I need from you tonight? I'm not here to recruit drivers — there's a waiting list of those. What the lottery funders want, when they review us in the spring, is proof of demand. So take a travel diary card from the back table and note down every journey you make — or wish you could make — over a fortnight.", pauseAfterMs: 300 },
      { id: "s12", speakerId: "pike", text: "I'll vouch for the diaries — dull as ditchwater, but they work. Now, questions? Yes, the lady by the door…" },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Whose idea was the transport scheme originally?",
        options: ["The county council's transport department", "A residents' association survey", "A commercial bus company"],
        correct: [1],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["county council's idea", "doorstep survey", "residents' association"],
          trap: {
            family: "attribution",
            lure: ["county council's idea"],
            note: "The councillor's proud introduction and the bus-stop gossip both credit the county council, but Nadine hands the idea to the residents' association's doorstep survey — right fact, wrong owner.",
          },
          explanation:
            "Councillor Pike proudly presents the scheme as one the county council can be proud of, and villagers repeat the myth, but Nadine traces the idea to the residents' association's doorstep survey of two winters ago. The council only backed the bid afterwards.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How is the scheme mainly funded?",
        options: ["Passenger fares", "A lottery grant", "The parish council's precept"],
        correct: [1],
        meta: {
          skills: ["detail", "numbers", "paraphrase"],
          keywords: ["fares", "lottery grant", "minibus lease"],
          explanation:
            "Nadine states that the pound-a-ride fares cover only the diesel: a three-year lottery grant pays the minibus lease and both drivers' wages, which makes the grant the main funding source. The precept is never mentioned at all.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Nadine ask residents to do?",
        options: ["Volunteer as drivers", "Keep a travel diary for a fortnight", "Write to the lottery funders"],
        correct: [1],
        meta: {
          skills: ["negation", "gist", "detail"],
          keywords: ["recruit drivers", "travel diary card", "proof of demand"],
          trap: {
            family: "negation",
            lure: ["recruit drivers"],
            note: "Driver recruitment is expressly ruled out — there is already a waiting list — before the real request: the fortnight-long travel diary the funders need as proof of demand.",
          },
          explanation:
            "Nadine heads off the obvious ask first — she is not there to recruit drivers, because there is already a waiting list — and then makes the real one: take a travel diary card and record a fortnight of journeys, or would-be journeys, as proof of demand for the spring review.",
        },
      },
      {
        id: "q4",
        type: "matching",
        label: "Questions 4–7",
        instruction: "What does Nadine say about each service in the scheme? Choose the correct letter, A–F.",
        items: [
          "The village minibus",
          "The volunteer-driver car service",
          "The Wheels to Work scooters",
          "The station borrow-bikes",
        ],
        options: [
          "it runs to a fixed timetable",
          "it must be booked by phone the day before",
          "it requires a refundable deposit",
          "it mainly serves the school run",
          "it handles hospital appointments",
          "it is aimed at people starting a new job",
        ],
        correct: [0, 1, 5, 2],
        meta: {
          skills: ["paraphrase", "detail"],
          keywords: ["fixed timetable", "the day before", "scooter", "ten-pound deposit"],
          trap: {
            family: "mention-lure",
            lure: ["school run", "hospital appointments"],
            note: "The school run is explicitly refused — the county's coaches do it — and hospital appointments belong to the patient-transport service, so D and E are named only to be crossed off.",
          },
          explanation:
            "The minibus circles the village on market days to a fixed timetable with no booking needed, the car service needs a phone call by three in the afternoon the day before, scooters go to people just offered a job or a college place, and the borrow-bikes take a ten-pound deposit refunded on return.",
        },
      },
    ],
    transcriptNote:
      "Nadine corrects the room twice: the idea came from the residents' association's doorstep survey, not the council, and the money is lottery funding, with fares only buying diesel. In the matching, the school run and hospital appointments are named purely to be excluded.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-summer-school",
    title: "Orientation at a summer language school",
    part: 2,
    topic: "education",
    difficulty: 3,
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear the director of studies giving an orientation talk to new students at a summer language school. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "gareth", name: "Gareth", role: "director of studies welcoming students to the Ashdean Summer School", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "gareth", text: "Good morning, everyone, and welcome — officially — to the Ashdean Summer School. I'm Gareth, the director of studies, and this is the talk I give every first Monday, so forgive me if the jokes have been polished a little too hard." },
      { id: "s2", speakerId: "gareth", text: "By now you've met your house hosts and dropped your bags, and this week is about settling in. The table on your handout shows how it runs, so let me walk you through it." },
      { id: "s3", speakerId: "gareth", text: "This morning, in about twenty minutes, you'll sit the placement test. Nobody fails it — it just tells us which class suits you. One thing before you come in: bring a passport photo. They go on the class lists, and they honestly help us learn forty names by Friday." },
      { id: "s4", speakerId: "gareth", text: "Tomorrow, the class lists go up on the noticeboard in the main lobby. If your name is spelled wrong — and somebody's always is — come and find me and we'll fix it." },
      { id: "s5", speakerId: "gareth", text: "Wednesday afternoon is your first excursion, the maritime museum down in the old docks. The coach leaves at two and you'll be back for dinner." },
      { id: "s6", speakerId: "gareth", text: "Thursday stays on campus. After lessons there's an optional workshop, and this week it's the pronunciation clinic — thirty minutes on the sounds English borrowed from everyone else, including the famous 'th'. Highly recommended, mildly humiliating." },
      { id: "s7", speakerId: "gareth", text: "Friday afternoon brings a short private review with your tutor — fifteen minutes, no marks, just what's working and what isn't. That evening is the welcome-week dinner in the hall, so save your appetite." },
      { id: "s8", speakerId: "gareth", text: "Practicalities. Your fee covers breakfast and the evening meal in the refectory. Lunches are your own affair — the town is full of sandwich shops, and the bakery on the square does a student deal." },
      { id: "s9", speakerId: "gareth", text: "Getting around: the town bus stops at the gate. You can pay as you go, but most students take the three-week pass at thirty pounds — and yes, people always hear thirteen, so I'll say it clearly: thirty. You'll have saved a fortune by Friday.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "gareth", text: "Last thing. The houses lock at eleven, and the wardens really do lock them — ask the student who climbed in through a window last July. My office is the glass room by the lobby, and the door is always open. Right — let's get you tested." },
    ],
    questions: [
      {
        id: "q1",
        type: "table",
        label: "Questions 1–5",
        instruction: "Complete the table below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Ashdean Summer School — welcome week" }],
          [{ kind: "text", text: "Day · What's on" }],
          [{ kind: "text", text: "Monday · Placement test — bring a passport " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Tuesday · Class lists posted on the " }, { kind: "blank", no: 2 }, { kind: "text", text: " in the lobby" }],
          [{ kind: "text", text: "Wednesday · Excursion to the " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Thursday · Optional workshop — the " }, { kind: "blank", no: 4 }, { kind: "text", text: " clinic" }],
          [{ kind: "text", text: "Friday · Private review with your " }, { kind: "blank", no: 5 }],
        ],
        blanks: [
          { no: 1, answer: "photo", alternatives: [], numbers: false },
          { no: 2, answer: "noticeboard", alternatives: [], numbers: false },
          { no: 3, answer: "maritime museum", alternatives: [], numbers: false },
          { no: 4, answer: "pronunciation", alternatives: [], numbers: false },
          { no: 5, answer: "tutor", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "sequencing"],
          keywords: ["passport photo", "noticeboard", "maritime museum", "pronunciation clinic", "review with your tutor"],
          explanation:
            "The table follows the week in order: a passport photo goes with Monday's placement test, the class lists go up on the noticeboard on Tuesday, Wednesday's excursion is the maritime museum, Thursday's optional workshop is the pronunciation clinic, and Friday brings a private review with your tutor.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Which meals does the course fee cover?",
        options: ["Breakfast and the evening meal", "Lunch only", "All three meals"],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["breakfast", "evening meal", "sandwich shops"],
          explanation:
            "Gareth is explicit that the fee covers breakfast and the evening meal in the refectory, while lunches are left to the town's sandwich shops and the bakery's student deal. Only two of the day's three meals are therefore included.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How much does the three-week bus pass cost?",
        options: ["Thirteen pounds", "Thirty pounds", "Thirty-three pounds"],
        correct: [1],
        meta: {
          skills: ["similar-sound", "numbers", "detail"],
          keywords: ["thirty pounds", "thirteen", "three-week pass"],
          trap: {
            family: "similar-sound",
            lure: ["thirteen"],
            note: "Thirteen and thirty differ only in their ending — Gareth repeats the price precisely because new students mishear it, and the pass costs thirty pounds.",
          },
          explanation:
            "The three-week pass costs thirty pounds; Gareth even says the figure twice because people always hear thirteen instead. Paying as you go is the alternative he mentions, not the price of the pass itself.",
        },
      },
    ],
    transcriptNote:
      "The table hangs on the week's running order, from Monday's placement test to Friday's tutor review. The one designed catch is the bus pass: thirteen and thirty sound almost identical, and Gareth repeats thirty for exactly that reason.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-manor-house",
    title: "An audio guide to a historic manor house",
    part: 2,
    topic: "history",
    difficulty: 4,
    estimatedMinutes: 8,
    accentMix: ["british"],
    intro:
      "You will hear an audio guide taking a visitor around the ground floor of a historic manor house. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "alistair", name: "Alistair", role: "recorded narrator of the Aldercote Manor audio guide", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "alistair", text: "Welcome to Aldercote Manor. I'm Alistair, and this guide will walk you through the five numbered rooms on your plan, finishing at the courtyard café. Mind the doorframes — the house was built for people a good deal shorter than us." },
      { id: "s2", speakerId: "alistair", text: "The house went up in the fifteen-nineties for Sir Edmund Aldercote, a merchant whose fortune came from the wool trade, back when, as they said, sheep paid for everything. Most of what you'll see is original brick and oak." },
      { id: "s3", speakerId: "alistair", text: "You're standing in the great hall, the room marked as the entrance on your plan — the old banqueting hall, though the dinners were less romantic than the name suggests: the family ate up here, and the household ate whatever trickled down." },
      { id: "s4", speakerId: "alistair", text: "Room one is through the left-hand doorway: the library. Nine hundred of Sir Edmund's books survive, chained to the shelves because a single volume cost what a shepherd earned in a year. The chains are replicas; the books are not." },
      { id: "s5", speakerId: "alistair", text: "Keep going and you reach room two, in the bottom left corner of the plan: the old kitchens — three fireplaces, a well sunk through the floor, and a bread oven big enough to bake for the whole village on feast days." },
      { id: "s6", speakerId: "alistair", text: "Back across the courtyard and up the east side. Room three, the top right of your plan behind the stone staircase, is the long gallery — thirty metres of oak floor, built for wet-day exercise and for showing off the family portraits. And nobody added the long gallery later; it's original, every inch." },
      { id: "s7", speakerId: "alistair", text: "Room four, directly below the gallery on the right of the plan, is the drawing room — the warmest room in the house, wallpapered in nineteen-oh-eight and untouched since. The Mowbrays, who owned the house then, called it 'the snug'." },
      { id: "s8", speakerId: "alistair", text: "Room five, the bottom right corner past the servants' passage, is the family chapel — still used for weddings, I'm told, though the waiting list is two years, so propose accordingly." },
      { id: "s9", speakerId: "alistair", text: "Now the people, because the house is their story in brick. Sir Edmund's wool trade paid for all of it. His daughter, Lady Constance, never married and spent her life here — the knot garden in the courtyard is hers, replanted from her own drawings, which we keep in the archive.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "alistair", text: "The Mowbrays arrived in the eighteen-fifties with industrial money and made the house comfortable — bathrooms, electricity. In the first war they ran the house as a war hospital with their own staff, and the village has never forgotten it." },
      { id: "s11", speakerId: "alistair", text: "The last private owner, Colonel Hartree, took it on in nineteen forty-eight. The story that he lost the family fortune at cards is pure gossip — the truth was dry rot and repair bills. So in nineteen fifty-one he handed the estate to the Aldercote Heritage Trust, and it's been in our care ever since." },
      { id: "s12", speakerId: "alistair", text: "If your ticket covers the upper floor, the gun room up there holds the sporting arms. Otherwise, follow the smell of the café into the courtyard — the scones are historically inaccurate and excellent. Thank you, and mind the doorframe." },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the ground floor. Choose the correct letter, A–G, for each numbered room.",
        plan: {
          title: "Aldercote Manor — ground floor",
          caption: "The visitor route — write the correct letter next to each numbered room.",
          grid: [
            [{ room: "Great Hall", label: "Entrance" }, { room: "Stone Staircase" }, { room: "Room 3", blank: 3 }],
            [{ room: "Room 1", blank: 1 }, { room: "Courtyard" }, { room: "Room 4", blank: 4 }],
            [{ room: "Room 2", blank: 2 }, { room: "Servants' Passage" }, { room: "Room 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the drawing room" },
          { letter: "B", text: "the long gallery" },
          { letter: "C", text: "the family chapel" },
          { letter: "D", text: "the library" },
          { letter: "E", text: "the old kitchens" },
          { letter: "F", text: "the banqueting hall" },
          { letter: "G", text: "the gun room" },
        ],
        correct: ["D", "E", "B", "A", "C"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["left-hand doorway", "bottom left corner", "behind the stone staircase", "directly below the gallery", "past the servants' passage"],
          trap: {
            family: "mention-lure",
            lure: ["banqueting hall", "gun room"],
            note: "The banqueting hall is simply the old name for the great hall you start in, and the gun room is upstairs on a separate ticket — neither letter labels a numbered room.",
          },
          explanation:
            "Follow the route from the great hall: the library lies through the left-hand doorway, the old kitchens fill the bottom left corner, the long gallery stretches along the top right behind the stone staircase, the drawing room sits directly below the gallery, and the family chapel waits past the servants' passage in the bottom right corner.",
        },
      },
      {
        id: "q2",
        type: "matching",
        label: "Questions 6–9",
        instruction: "Match each person connected with the house with what they did. Choose the correct letter, A–F.",
        items: [
          "Sir Edmund Aldercote",
          "Lady Constance",
          "The Mowbray family",
          "Colonel Hartree",
        ],
        options: [
          "designed the knot garden",
          "ran the house as a war hospital",
          "made a fortune from the wool trade",
          "lost the family fortune at cards",
          "added the long gallery",
          "handed the estate to a heritage trust",
        ],
        correct: [2, 0, 1, 5],
        meta: {
          skills: ["paraphrase", "detail", "attribution"],
          keywords: ["wool trade", "knot garden", "war hospital", "heritage trust"],
          trap: {
            family: "mention-lure",
            lure: ["lost the family fortune at cards", "added the long gallery"],
            note: "Both lure deeds are spoken and denied in the same breath — the gambling story is gossip and the gallery is original Elizabethan work, so neither matches D or E.",
          },
          explanation:
            "Sir Edmund's wool-trade fortune built the house, Lady Constance designed the knot garden from her own drawings, the Mowbrays ran the house as a war hospital in the first war, and Colonel Hartree handed the estate to the Aldercote Heritage Trust when dry rot and the repair bills beat him.",
        },
      },
    ],
    transcriptNote:
      "The route runs left from the great hall — library, then kitchens — before crossing to the gallery, drawing room and chapel. Both matching lures are denials: nobody added the long gallery, and the card-playing story is gossip; it was dry rot and repair bills that forced Hartree's hand.",
    source: BANK_SOURCE_NOTE,
  },
];
