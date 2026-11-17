/**
 * Audio question bank — PROMPT 54 expansion, Part 4 batch B (academic
 * lectures, one lecturer per recording).
 *
 * Seven further original Part 4 monologues in the style of the test: a
 * single named lecturer carries each recording (a brief host voice frames
 * two of the talks), with lecture signposting — "Let's turn to…",
 * "What's striking here is…", "Before I conclude…" — carrying the
 * structure. Note, summary and sentence completion plus multiple choice;
 * five of the seven exercises carry a designed distractor trap. All
 * recordings are original TalkSy practice material written in the style
 * of the test, not official IELTS content.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP4BExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p4-architecture",
    title: "Sustainable architecture",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "technology",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on sustainable architecture. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "calloway", name: "Dr Iris Calloway", role: "senior lecturer in sustainable design", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "calloway", text: "Good morning, everyone. This week in the design series we're taking apart a word that gets printed on every planning notice in the city — sustainability — and asking what it means when it's bolted to a building rather than to a slogan. Let's start with the scale of the problem." },
      { id: "s2", speakerId: "calloway", text: "Buildings are hungry things. Taken together — the heating, the cooling, the lighting, the lifts — the world's buildings swallow roughly a third of all the energy we produce. So the first commandment of green design is simple to state and hard to live by: use less energy before you start generating your own." },
      { id: "s3", speakerId: "calloway", text: "And that begins with geometry, not with gadgets. What's striking here is how much a well-shaped plan achieves before a single solar panel goes on the roof. Turn a building's long face towards the winter sun, shade the same glass against the high summer sun, and the cooling load can fall by half. I've seen it measured on a modest office block in Manchester." },
      { id: "s4", speakerId: "calloway", text: "The profession calls this passive design, and its cheapest element is orientation — deciding which side of the plan the windows sit on. The second tool is thermal mass: heavy floors of concrete or stone that soak up warmth through the working day and release it slowly at night, flattening the temperature swing for free." },
      { id: "s5", speakerId: "calloway", text: "Let's turn to materials, because what you build with turns out to matter nearly as much as how the building sits. Steel and concrete carry what we call embodied carbon — every tonne of emissions released while making them, from the kiln to the lorry." },
      { id: "s6", speakerId: "calloway", text: "Timber is the interesting exception, because a growing tree locks carbon away and a standing frame keeps it locked. Now, the trade brochures will tell you a timber structure cuts embodied emissions by a fifth. Our department audited three completed projects last year, and the honest answer was nearer a quarter. Still well worth having — just don't oversell it in your portfolios." },
      { id: "s7", speakerId: "calloway", text: "Water runs quietly through this story too. The shower and basin water from an office block — greywater, in the jargon — can be filtered on site and piped back to flush the toilets. Add a tank to catch the rain landing on the roof, and a building's drinking-water demand drops by half." },
      { id: "s8", speakerId: "calloway", text: "So far, so wholesome. But here's the question my second-years always raise: isn't all of this frightfully expensive? And the honest answer divides in two." },
      { id: "s9", speakerId: "calloway", text: "The passive measures — the orientation, the mass, the shading — cost almost nothing if they're designed in from the first sketch. The expensive mistake is bolting photovoltaics onto a badly orientated box and calling it green. The order matters: fabric first, machinery second." },
      { id: "s10", speakerId: "calloway", text: "Which brings me to retrofit, and to the most inconvenient finding in this whole field. The greenest building is very often the one already standing. The carbon in an existing frame has already been paid for; demolishing it writes that cheque again." },
      { id: "s11", speakerId: "calloway", text: "So the dull work — re-glazing a draughty tower block, lagging the pipes, swapping the old boiler for a heat pump — saves more carbon per pound than any photogenic new build. I say dull; I mean heroic." },
      { id: "s12", speakerId: "calloway", text: "Before I conclude, one caution. Certificates and ratings are tools, not destinations. I've audited award-winning buildings that performed worse than the concrete eyesore next door, because nobody ever showed the occupants how the controls worked." },
      { id: "s13", speakerId: "calloway", text: "Sustainability, in the end, is a verb dressed up as an adjective: it's something a building's people keep doing, or don't. Next week — daylight, and why a well-lit desk beats a brighter bulb.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "SUSTAINABLE ARCHITECTURE — lecture notes" }],
          [{ kind: "text", text: "The problem" }],
          [{ kind: "text", text: "Buildings consume roughly a" }, { kind: "blank", no: 1 }, { kind: "text", text: "of all energy produced" }],
          [{ kind: "text", text: "Passive design" }],
          [{ kind: "text", text: "Turn the building's long face towards the winter" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Thermal mass: heavy floors give stored heat back at" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Materials" }],
          [{ kind: "text", text: "Emissions released while making steel and concrete:" }, { kind: "blank", no: 4 }, { kind: "text", text: "carbon" }],
          [{ kind: "text", text: "Timber frame: audited cut in embodied emissions: about a" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Water" }],
          [{ kind: "text", text: "Recycled greywater and roof rain cut demand for" }, { kind: "blank", no: 6 }, { kind: "text", text: "water" }],
        ],
        blanks: [
          { no: 1, answer: "third", alternatives: [] },
          { no: 2, answer: "sun", alternatives: [] },
          { no: 3, answer: "night", alternatives: [] },
          { no: 4, answer: "embodied", alternatives: [] },
          { no: 5, answer: "quarter", alternatives: [] },
          { no: 6, answer: "drinking", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "note-taking"],
          keywords: ["roughly a third", "winter sun", "at night", "embodied carbon", "nearer a quarter", "drinking-water"],
          trap: {
            family: "correction",
            lure: ["fifth"],
            note:
              "The brochure figure of a fifth is quoted only to be corrected — the department's own audit found the saving nearer a quarter, and the corrected value is the one that scores.",
          },
          explanation:
            "The notes follow the lecture's signposted stages: buildings swallow roughly a third of world energy use; passive design turns the long face towards the winter sun; thermal mass releases stored heat at night; manufacturing emissions are described as embodied carbon; the audited timber saving is a quarter, correcting the brochure's fifth; and recycled greywater halves drinking-water demand.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer emphasise about passive design?",
        options: [
          "Its savings depend on installing solar panels as early as possible.",
          "Careful shaping of a building cuts energy demand before any equipment is added.",
          "It works only in climates with strong year-round sunshine.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "gist"],
          keywords: ["geometry", "cooling load", "solar panel"],
          explanation:
            "Her point is that passive design is 'geometry, not gadgets': orientation, shading and mass achieve savings 'before a single solar panel goes on the roof'. That rules out the panels-first option, and she cites a Manchester office block precisely because the effect holds in a northern city.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does she argue about existing buildings?",
        options: [
          "Demolition is usually the greener choice when a building is inefficient.",
          "Keeping and refurbishing an old building avoids paying its carbon cost a second time.",
          "Retrofitting is worthwhile only for officially listed heritage buildings.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "detail"],
          keywords: ["one already standing", "already been paid for", "retrofit"],
          explanation:
            "She calls the greenest building 'the one already standing' because the carbon in an existing frame has already been paid for and demolition writes that cheque again. The unglamorous retrofit work — re-glazing, lagging, heat pumps — therefore beats showcase demolition, and nothing restricts it to listed buildings.",
        },
      },
    ],
    transcriptNote:
      "The timber saving is corrected from the brochure's fifth to the audited quarter, and the closing argument inverts the usual order: fabric and geometry come before machinery, so the cheapest measures are the ones nobody photographs.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-transport",
    title: "The economics of public transport",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the economics of public transport. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "bright", name: "Dr Samuel Bright", role: "lecturer in transport economics", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "bright", text: "Good afternoon, everyone. This lecture tackles a row that flares up in every city council on earth: why doesn't public transport pay for itself?" },
      { id: "s2", speakerId: "bright", text: "Bus fares go up, passengers complain, and somebody inevitably asks why the network can't simply break even. My answer, in short, is that the question mistakes what a fare is actually for. Let me build the case." },
      { id: "s3", speakerId: "bright", text: "Start with the accounts, because the arithmetic is sobering. Outside a handful of densely packed metro systems, no network on the planet covers its full costs from fares alone. Once you count the buses, the drivers, the depots and the repairs, fares in a typical European city cover barely half the running costs. The subsidy isn't a scandal; it's a design feature." },
      { id: "s4", speakerId: "bright", text: "Now, you might object that airlines manage perfectly well without handouts. But here's the difference, and it's the heart of today's argument: private cars don't pay their true bill either." },
      { id: "s5", speakerId: "bright", text: "Every car journey pushes costs onto other people — time lost sitting in congestion, exhaust in the air, noise along the route, the awful toll of accidents. Economists call these externalities: costs that never appear on the driver's own receipt. Studies in several capitals have priced the lot, and the figures run to thousands of pounds per commuter per year. It's a subsidy too — we simply don't print it on a ticket." },
      { id: "s6", speakerId: "bright", text: "So the honest comparison isn't 'subsidised buses versus self-funding cars'. It's one visible subsidy set against one that's hidden, and once you frame it that way, the whole argument changes shape." },
      { id: "s7", speakerId: "bright", text: "Let's turn to the roads, because here's a finding that startles first-year students every single year: you cannot build your way out of congestion. Add a lane and it fills up. Planners call this induced demand — a quicker drive tempts people off the sofa and out of the bus, until the traffic settles back roughly where it started. Give it five years." },
      { id: "s8", speakerId: "bright", text: "Fares policy next, and it becomes a question of who walks away when prices rise. The morning commuter has little real choice — they keep paying. It's the off-peak shopper, the student, the grandparent visiting family, who quietly stops travelling." },
      { id: "s9", speakerId: "bright", text: "And every lost passenger makes the next round of cuts easier to justify: fewer riders, thinner timetables, longer waits, fewer riders still. The textbooks call it the vicious circle of decline, and the trick is never to start down it." },
      { id: "s10", speakerId: "bright", text: "There's a mirror-image gain, too. A full double-decker at the morning peak takes around seventy cars off the road, which is why plenty of economists describe the subsidy as buying road space, not merely rides." },
      { id: "s11", speakerId: "bright", text: "Where else can the money come from? The most elegant answer I know is land value capture. A new station lifts the price of offices and flats within walking distance — one Tokyo study measured rises of up to twenty per cent. Clip a slice of that gain back through taxation, and the neighbourhood that benefits from the railway helps to pay for it." },
      { id: "s12", speakerId: "bright", text: "Before I conclude, a confession. When I ask first-years what a bus fare truly buys, the sharpest answer I ever received was this: you're not paying for a seat — you're paying for a city you can cross without owning a car. That, and not the vehicle, is the product." },
      { id: "s13", speakerId: "bright", text: "Next week we'll price the congestion charge, and ask what a city street is worth at five o'clock on a Friday.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "According to the lecturer, arguments about transport funding rest on a false comparison. Fares in a typical European city cover only about" }, { kind: "blank", no: 1 }, { kind: "text", text: "of running costs. But car travel is subsidised as well, because drivers impose costs that never appear on their receipt, which economists call" }, { kind: "blank", no: 2 }, { kind: "text", text: ". Extra road lanes fail to cure congestion because of" }, { kind: "blank", no: 3 }, { kind: "text", text: "demand." }],
          [{ kind: "text", text: "Fare increases first drive away" }, { kind: "blank", no: 4 }, { kind: "text", text: "travellers, beginning a spiral of decline. Since one full bus replaces dozens of cars, the subsidy can be seen as buying" }, { kind: "blank", no: 5 }, { kind: "text", text: ". Finally, part of the rise in land values near new stations can be recovered through" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 1, answer: "half", alternatives: [] },
          { no: 2, answer: "externalities", alternatives: [] },
          { no: 3, answer: "induced", alternatives: [] },
          { no: 4, answer: "off-peak", alternatives: ["off peak"] },
          { no: 5, answer: "road space", alternatives: [] },
          { no: 6, answer: "taxation", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "gist", "detail"],
          keywords: ["barely half", "externalities", "induced demand", "off-peak shopper", "road space", "taxation"],
          explanation:
            "The summary compresses the lecture's arc: fares cover barely half of running costs; the unpaid costs pushed onto others are the externalities; new lanes fill up again through induced demand; fare rises first lose the off-peak travellers; economists describe the subsidy as buying road space; and land value capture claws money back through taxation.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why does the lecturer reject the comparison between buses and airlines?",
        options: [
          "Airlines in fact receive far larger public subsidies than bus networks.",
          "The comparison overlooks the unpaid costs that each car journey shifts onto society.",
          "Air passengers, unlike bus passengers, pay directly for the airports they use.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "argument-tracking"],
          keywords: ["airlines", "true bill", "externalities"],
          explanation:
            "He raises the airline objection in order to knock it down: the real difference is that private cars 'don't pay their true bill either', since their externalities never appear on the driver's receipt. The bus-versus-airline comparison is unfair because it hides what motoring costs everyone else.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "In the lecturer's view, what is a fare fundamentally paying for?",
        options: [
          "A guaranteed seat on a particular vehicle.",
          "Access to a city without having to run a car.",
          "A precisely calculated share of each journey's running cost.",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "paraphrase", "attitude"],
          keywords: ["not paying for a seat", "owning a car", "the product"],
          explanation:
            "The student's answer he quotes — 'you're not paying for a seat, you're paying for a city you can cross without owning a car' — is the one he endorses, adding that this, and not the vehicle, is the product. The seat and the cost-accounting options both stay at the level of the journey rather than the city.",
        },
      },
    ],
    transcriptNote:
      "The lecture's hinge is the reversal in the middle: cars are as subsidised as buses, only invisibly — listen for 'externalities' arriving twice, once as definition and once as the hidden bill.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-aqueducts",
    title: "Roman aqueducts",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the aqueducts of ancient Rome. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "rowe", name: "Dr Tamsin Rowe", role: "senior lecturer in ancient history", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "rowe", text: "Good morning. If you close your eyes and picture a Roman aqueduct, I'll wager you see a bridge of arches striding across a valley — the postcard view. This morning I want to replace that picture with something stranger and considerably cleverer. Let's begin with the city's thirst." },
      { id: "s2", speakerId: "rowe", text: "Rome at its height drank like no city before it: the baths, the street fountains, the drains flushed continuously. By the fourth century AD, eleven aqueducts were feeding the city, and between them they ran to well over four hundred kilometres of channel." },
      { id: "s3", speakerId: "rowe", text: "The very first of them, the Aqua Appia, was a modest affair: sixteen kilometres of underground conduit bringing water in from the eastern hills. Sixteen, I say — not sixty. The two sound perilously alike at lecture pace, and mistranscribed surveys have been spreading the sixty figure for a century." },
      { id: "s4", speakerId: "rowe", text: "Which brings me to the postcard itself. Those soaring arcades — the bridges of arches — make up less than a tenth of any aqueduct's length. The Roman engineer's first instinct was to tunnel: to dig a covered channel at a steady slope just beneath the fields, and to bring the arches out only where a valley made them unavoidable." },
      { id: "s5", speakerId: "rowe", text: "And the slope is the quiet miracle. Water moves through these channels by gravity alone — there is not a pump anywhere in the system — so the entire line must fall, imperceptibly, from the spring to the city. On the great line to Nîmes in southern Gaul, the average drop works out at barely twenty-five centimetres in every kilometre: a fall your eye simply cannot detect." },
      { id: "s6", speakerId: "rowe", text: "Inside the channel, the water did some of its own housekeeping. At intervals along the route, the flow passed through wide settling tanks, where the current slowed and the silt dropped out of suspension. The surviving tunnels still show the crews' legacy — ramps for the wheelbarrows, and lamp niches blackened by generations of smoke." },
      { id: "s7", speakerId: "rowe", text: "Cleaning went on without ever shutting the whole line. Sluices — wooden shutters dropped into slots cut into the channel walls — let the gangs isolate one stretch at a time, sweep it clean, and send the water back down behind them." },
      { id: "s8", speakerId: "rowe", text: "And the whole system had an owner. A senior senator held the office of curator aquarum — the water commissioner — commanding, by one later account, a permanent staff of several hundred keepers, surveyors and inspectors." },
      { id: "s9", speakerId: "rowe", text: "The law backed him up. Tapping a public channel without permission was a criminal matter with heavy fines, and a householder who wanted water brought indoors had to buy a licence for a private lead pipe, stamped with the maker's name." },
      { id: "s10", speakerId: "rowe", text: "So who actually got the stuff? The street-corner fountains ran day and night, and the poor collected there with buckets. The licensed pipes served the baths, the barracks and the grand houses. Let's not romanticise it: this was a supply with a steep social gradient." },
      { id: "s11", speakerId: "rowe", text: "Then, in the sixth century AD, besieging armies cut the aqueducts — and this time they stayed cut. Within a generation or two, a metropolis of half a million had shrunk to a market town huddled beside the Tiber, fetching its water from the river and from wells again." },
      { id: "s12", speakerId: "rowe", text: "What's striking here is what the ruins still prove. Dig almost anywhere along a Roman road in Europe and you will find the channel still holding its line, still falling twenty-five centimetres to the kilometre, still level enough to carry water if you let it." },
      { id: "s13", speakerId: "rowe", text: "Before I conclude, then, the lesson I'd leave you with. The arches took the glory, but the empire's real achievement was boring: maintenance gangs, settling tanks, licences and fines — an administration of water. Engineers build; institutions endure.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "THE AQUEDUCTS OF ROME — lecture notes" }],
          [{ kind: "text", text: "The scale" }],
          [{ kind: "text", text: "Aqueducts serving Rome by the 4th century AD:" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Length of the Aqua Appia:" }, { kind: "blank", no: 2 }, { kind: "text", text: "km" }],
          [{ kind: "text", text: "Arcades: under a" }, { kind: "blank", no: 3 }, { kind: "text", text: "of any aqueduct's length" }],
          [{ kind: "text", text: "The channel" }],
          [{ kind: "text", text: "Silt removed as the water slowed in settling" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Administration" }],
          [{ kind: "text", text: "Private indoor supply required a licence for a lead" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Official in overall charge: the water" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "11", alternatives: ["eleven"], numbers: true },
          { no: 2, answer: "16", alternatives: ["sixteen"], numbers: true },
          { no: 3, answer: "tenth", alternatives: [] },
          { no: 4, answer: "tanks", alternatives: [] },
          { no: 5, answer: "pipe", alternatives: [] },
          { no: 6, answer: "commissioner", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "paraphrase", "note-taking"],
          keywords: ["eleven aqueducts", "sixteen kilometres", "less than a tenth", "silt dropped", "private lead pipe", "water commissioner"],
          trap: {
            family: "similar-sound",
            lure: ["sixty"],
            note:
              "'Sixteen' and 'sixty' blur at lecture speed — the lecturer stresses sixteen kilometres for the Aqua Appia immediately after flagging the sixty mistranscription, so trust the stressed number.",
          },
          explanation:
            "The notes track the lecture in order: eleven aqueducts served the city; the Appia ran sixteen kilometres — not the mistranscribed sixty — arcades carried less than a tenth of any line; silt settled out in the settling tanks; indoor supply needed a licence for a private lead pipe; and the curator aquarum was the water commissioner.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 7–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "7 For cleaning, gangs could seal off one stretch of channel at a time using" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "8 After the armies cut the aqueducts, the people of Rome fetched water again from the river and from" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 7, answer: "sluices", alternatives: [] },
          { no: 8, answer: "wells", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "process-tracking"],
          keywords: ["sluices", "cut the aqueducts", "from wells"],
          explanation:
            "Maintenance relied on sluices — wooden shutters dropped into slots in the channel walls — so one stretch could be isolated and swept without closing the whole line. And after the sixth-century sieges the aqueducts stayed cut, so the shrunken city went back to fetching water from the river and from wells.",
        },
      },
    ],
    transcriptNote:
      "The Appia's length is stated twice — sixteen, not sixty — because the pair sound alike at speed, and the closing claim inverts the postcard: the arcades took the glory, but the administration of water was the real achievement.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-sleep-memory",
    title: "Sleep and memory",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "health",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the relationship between sleep and memory. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "nair", name: "Dr Priya Nair", role: "neuroscientist at a university sleep laboratory", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "nair", text: "Good afternoon. Today's lecture sits at the junction of two things you all do — or should do — every night: sleeping, and remembering. The question is deceptively simple: what does the brain do with the day it has just had?" },
      { id: "s2", speakerId: "nair", text: "First, some bookkeeping, because memory isn't one drawer. Psychologists split it crudely in two. Declarative memory holds the things you can say — facts, dates, the capital of Kazakhstan. Procedural memory holds the things you can only do: skills, the finger patterns of a pianist, the wobble-and-correct of learning to ride." },
      { id: "s3", speakerId: "nair", text: "That split matters because the night treats the two differently. The first half of a night's sleep is rich in slow-wave sleep — the deep, dreamless kind — and it's during slow-wave sleep that declarative memories are consolidated: filed, stabilised, made resistant to interference." },
      { id: "s4", speakerId: "nair", text: "In the second half of the night the balance tips towards REM — rapid eye movement — the stage with the vivid dreams. Deprive a learner of REM and it's the procedural side that suffers: the motor sequences, the typing drills, the visual discriminations." },
      { id: "s5", speakerId: "nair", text: "Now, what's actually happening in there? In the deep stages a structure called the hippocampus — the brain's temporary store — repeatedly replays the day's neural patterns, compressed and at high speed, handing the strongest of them across to the cortex for longer keeping. Researchers recording from rats first caught this replay; you can literally watch a rat re-run a maze it learned that afternoon." },
      { id: "s6", speakerId: "nair", text: "The behavioural evidence is just as neat. In one classic design, students learned lists of word pairs and were tested again a day later. The early papers reported a fifty per cent recall advantage for the group that slept — the figure the textbooks still repeat. When the trials were re-run with tighter controls, the gap settled nearer twenty per cent. Still a striking return on eight hours of doing nothing." },
      { id: "s7", speakerId: "nair", text: "And you don't need a whole night. One careful study let volunteers nap for as little as six minutes, and even that brief dip measurably nudged their recall upwards. A nap that contains slow-wave sleep does more still." },
      { id: "s8", speakerId: "nair", text: "So far I've been describing consolidation — sleep after learning. Let's turn the problem round, because sleep before learning matters too." },
      { id: "s9", speakerId: "nair", text: "A hippocampus that hasn't slept is, to borrow the researchers' phrase, full. In scanning studies, sleep-deprived volunteers showed reduced encoding of new material — the intake simply didn't stick. One night of recovery sleep largely restored it." },
      { id: "s10", speakerId: "nair", text: "Which brings me to the commercial interlude. You've seen the adverts: play a language recording as you doze and wake up fluent. I'd love to report that works; the controlled experiments say otherwise. The sleeping brain, it turns out, mostly fails to register outside audio — you cannot upload vocabulary through a pillow speaker." },
      { id: "s11", speakerId: "nair", text: "The honest version of the advert is duller but free: study, then sleep, then study again. The night between rehearsals is when the first day's material gets its consolidation ticket." },
      { id: "s12", speakerId: "nair", text: "Before I conclude, a word about exam weeks, since I know precisely what you're planning. An all-nighter buys extra hours of exposure and spends them on a hippocampus that can no longer file what it's exposed to. In two separate trials, students who slept the night before outperformed matched crammers — not by much, but reliably." },
      { id: "s13", speakerId: "nair", text: "Sleep, in other words, is not the absence of revision. It's the second half of it.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "SLEEP AND MEMORY — lecture notes" }],
          [{ kind: "text", text: "Two stores" }],
          [{ kind: "text", text: "Declarative memory: facts and events" }],
          [{ kind: "text", text: "Procedural memory:" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Consolidation at night" }],
          [{ kind: "text", text: "First-half slow-wave sleep strengthens" }, { kind: "blank", no: 2 }, { kind: "text", text: "memory" }],
          [{ kind: "text", text: "Later REM sleep mainly protects" }, { kind: "blank", no: 3 }, { kind: "text", text: "sequences" }],
          [{ kind: "text", text: "During deep sleep the hippocampus" }, { kind: "blank", no: 4 }, { kind: "text", text: "the day's patterns" }],
          [{ kind: "text", text: "Evidence" }],
          [{ kind: "text", text: "Recall advantage after sleep: about" }, { kind: "blank", no: 5 }, { kind: "text", text: "per cent" }],
          [{ kind: "text", text: "Even a" }, { kind: "blank", no: 6 }, { kind: "text", text: "of six minutes lifted recall" }],
        ],
        blanks: [
          { no: 1, answer: "skills", alternatives: [] },
          { no: 2, answer: "declarative", alternatives: [] },
          { no: 3, answer: "motor", alternatives: [] },
          { no: 4, answer: "replays", alternatives: [] },
          { no: 5, answer: "20", alternatives: ["twenty"], numbers: true },
          { no: 6, answer: "nap", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "paraphrase", "detail", "note-taking"],
          keywords: ["procedural memory", "slow-wave sleep", "motor sequences", "replays", "twenty per cent", "six minutes"],
          trap: {
            family: "number-form",
            lure: ["twenty per cent"],
            note:
              "The lecture says 'twenty per cent' in full, but the printed blank already supplies the words 'per cent' — writing them again breaks the one-word limit, so only the figure (20 or twenty) scores.",
          },
          explanation:
            "The notes follow the lecture's stages: procedural memory is the skills store; early-night slow-wave sleep consolidates declarative memory; later REM protects motor sequences; the hippocampus replays the day's patterns at speed; the controlled-trial advantage is about twenty per cent; and even a six-minute nap helped recall.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Dr Nair's verdict on recordings that claim to teach while you sleep?",
        options: [
          "They can work if the volume is kept low all night.",
          "She would like them to work, but controlled experiments fail to support the claim.",
          "They succeed only for learners who rehearsed the material while awake.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "negation", "attitude"],
          keywords: ["wake up fluent", "controlled experiments", "pillow speaker"],
          trap: {
            family: "negation",
            lure: ["wake up fluent"],
            note:
              "'I'd love to report that works' is the classic polite refusal — the sleep-learning claim is raised only to be rejected, so any option endorsing the recordings misreads her tone.",
          },
          explanation:
            "She plays the advert's promise — doze off to a language recording and wake up fluent — and then refuses it: the controlled experiments say otherwise, and nothing can be uploaded through a pillow speaker. Her verdict is sympathy towards the promise but loyalty to the evidence.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does she imply about the night before an examination?",
        options: [
          "Every additional hour of revision pays for the sleep it costs.",
          "Sleep serves revision twice — fixing the day's learning and readying the brain for more.",
          "Crammers generally outperform well-rested students on factual papers.",
        ],
        correct: [1],
        meta: {
          skills: ["implication", "paraphrase", "gist"],
          keywords: ["all-nighter", "encoding of new material", "outperformed matched crammers"],
          explanation:
            "Sleep matters on both sides of revision: after learning it consolidates, and before learning a rested hippocampus shows proper encoding of new material. Since sleepers outperformed matched crammers in the trials, the all-nighter's extra hours are spent on a brain that can no longer file them.",
        },
      },
    ],
    transcriptNote:
      "The textbook figure of fifty per cent is corrected to the controlled-trial twenty, and the sleep-learning adverts are raised only to be politely refused — listen for the correction and the refusal, as both carry questions.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-privacy",
    title: "Digital privacy and society",
    part: 4,
    difficulty: 5,
    estimatedMinutes: 9,
    topic: "society",
    accentMix: ["british"],
    intro:
      "You will hear a talk given in a public lecture series on digital privacy. First you have some time to look at questions 1 to 7. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "vaughan", name: "Rachel Vaughan", role: "host of the university's public lecture series", accent: "british" },
      { id: "blake", name: "Dr Owen Blake", role: "sociologist studying data and everyday life", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "vaughan", text: "Good evening, and welcome to the autumn series. Tonight's speaker has spent twenty years researching what our data does to the society it moves through. Please welcome Dr Owen Blake." },
      { id: "s2", speakerId: "blake", text: "Thank you, Rachel. Let me open with an argument that took me two decades to accept: privacy is not, at heart, a private matter. The choices look personal — what you post, which boxes you tick — but their consequences are collective. Keep that reversal in mind all evening; everything else follows from it." },
      { id: "s3", speakerId: "blake", text: "Start with the machinery, because the whole edifice rests on one legal device: notice and consent. Before you use a service you're shown a notice; by clicking agree, you consent. Regulators on both sides of the Atlantic treat that click as the foundation of legitimacy." },
      { id: "s4", speakerId: "blake", text: "It's tempting to blame the length of the documents — the endless scrolling screens of legalese — and that's true but trivial. My objection runs deeper: you cannot meaningfully agree to what you cannot see, and none of us can see how our data will be used three years from now, by whom, or combined with what." },
      { id: "s5", speakerId: "blake", text: "Which brings me to aggregation, the quiet engine of the whole industry. A single data point is harmless — one search, one journey, one purchase. But points accumulate into a pattern, and the pattern is where the power sits. Researchers have shown that seemingly innocent lists, the films someone rates for instance, can infer, with unsettling accuracy, matters the person never disclosed." },
      { id: "s6", speakerId: "blake", text: "Now, what does that power do to behaviour? Here's the sociologist's laboratory. After a major surveillance scandal broke in one country, the number of searches for health-related terms fell measurably. People weren't sicker or healthier; they were self-censoring. The literature calls this the chilling effect — a phrase borrowed from law, and it deserves its name." },
      { id: "s7", speakerId: "blake", text: "The same logic is moving into the workplace. Some employers now offer staff discounts on fitness trackers, and the wearable data flows upstream — and with it, quietly, insurance premiums have begun to move as well. Whether or not you accept the trade, the choice was framed before you arrived." },
      { id: "s8", speakerId: "blake", text: "And pricing itself is next. When a retailer knows your postcode and your browsing patience, the old economists' term comes back into fashion: price discrimination — charging two customers different amounts for the identical ticket, not because of cost but because of what the algorithm has learned about their willingness to pay." },
      { id: "s9", speakerId: "blake", text: "So what's the remedy? The individualist answer is education: teach everyone to read the notices, tweak the settings, cover the camera. I set that homework myself. But notice what it assumes — that sixty million citizens can each out-negotiate firms with armies of lawyers. As policy, it's a design flaw." },
      { id: "s10", speakerId: "blake", text: "A second school argues your data is labour — that you should be paid for it, as a miner is paid for ore. It's a serious proposal, and I'll come back to it in questions, but on its own it wouldn't touch the deeper asymmetry: whoever sets the price still holds the information." },
      { id: "s11", speakerId: "blake", text: "The direction I find more honest is structural. Aim the rules at the infrastructure — the plumbing through which data moves — rather than at individual willpower: default settings that protect by default, audits of the systems, real limits on what may be combined." },
      { id: "s12", speakerId: "blake", text: "I'll anticipate the objection, because I hear it every week: won't that break the free internet? Perhaps parts of it. But we didn't solve river pollution by teaching citizens to drink carefully; we regulated what the pipes were allowed to carry." },
      { id: "s13", speakerId: "blake", text: "Notice, too, what that analogy concedes. Nobody in that century blamed the individual drinker for the state of the Thames. Somehow we've been talked into blaming the individual user for the state of the internet." },
      { id: "s14", speakerId: "blake", text: "So when I'm asked — and Rachel will ask — whether privacy is dead, my answer is that the question is misplaced. Privacy isn't dying of natural causes; it's being spent, transaction by transaction, to build systems most of us never agreed to in any meaningful sense of that word." },
      { id: "s15", speakerId: "blake", text: "Reclaiming it won't be a personal achievement. It will be a decision about infrastructure — and those, historically, are decisions societies make together, or not at all. Thank you.", pauseAfterMs: 300 },
      { id: "s16", speakerId: "vaughan", text: "Thank you, Dr Blake. We'll come to your questions in just a moment." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–7",
        instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "DIGITAL PRIVACY AND SOCIETY — lecture notes" }],
          [{ kind: "text", text: "The consent problem" }],
          [{ kind: "text", text: "The legal device underpinning the online economy: '" }, { kind: "blank", no: 1 }, { kind: "text", text: "and consent'" }],
          [{ kind: "text", text: "Data and power" }],
          [{ kind: "text", text: "Harmless single records combine into a revealing" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Post-scandal fall in health searches: the '" }, { kind: "blank", no: 3 }, { kind: "text", text: "effect'" }],
          [{ kind: "text", text: "Workplace tracker data has begun to move insurance" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Charging two customers different prices: price" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Remedies" }],
          [{ kind: "text", text: "One school of thought: treat personal data as" }, { kind: "blank", no: 6 }],
          [{ kind: "text", text: "Dr Blake's own preference: regulate the" }, { kind: "blank", no: 7 }, { kind: "text", text: "itself" }],
        ],
        blanks: [
          { no: 1, answer: "notice", alternatives: [] },
          { no: 2, answer: "pattern", alternatives: [] },
          { no: 3, answer: "chilling", alternatives: [] },
          { no: 4, answer: "premiums", alternatives: [] },
          { no: 5, answer: "discrimination", alternatives: [] },
          { no: 6, answer: "labour", alternatives: [] },
          { no: 7, answer: "infrastructure", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "note-taking", "lecture-cues"],
          keywords: ["notice and consent", "accumulate into a pattern", "chilling effect", "insurance premiums", "price discrimination", "data is labour", "infrastructure"],
          explanation:
            "The notes follow the talk's architecture: the online economy rests on notice and consent; single data points accumulate into a pattern; the post-scandal drop in health searches is the chilling effect; wearable schemes have begun to move insurance premiums; differential pricing revives price discrimination; one school treats data as labour; and Dr Blake wants the rules aimed at the infrastructure itself.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Dr Blake's principal objection to notice and consent?",
        options: [
          "The documents have grown so long that hardly anyone reads them.",
          "Consent cannot be meaningful when only one side can foresee how the data will be used.",
          "Clicking 'agree' simply proves that users prefer convenience to privacy.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "argument-tracking"],
          keywords: ["endless scrolling", "meaningfully agree", "true but trivial"],
          trap: {
            family: "mention-lure",
            lure: ["endless scrolling"],
            note:
              "'Endless scrolling' is conceded as true but trivial — the complaint about document length is raised only to be set aside, so the option that stops there mislocates his objection.",
          },
          explanation:
            "He grants that the legalese is endless and then calls that point trivial. His real objection is that nobody can meaningfully agree to what they cannot see — future uses, unknown parties, hidden combinations — so genuine consent is impossible under the asymmetry, and the 'free preference' reading ignores that the choice was framed in advance.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 9",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How does he respond to the proposal that people should be paid for their data?",
        options: [
          "He dismisses it because personal data cannot be valued in money.",
          "He takes it seriously but doubts it cures the underlying imbalance of information.",
          "He regards it as the only honest remedy and hopes it is adopted.",
        ],
        correct: [1],
        meta: {
          skills: ["attitude", "paraphrase", "implication"],
          keywords: ["serious proposal", "deeper asymmetry", "holds the information"],
          explanation:
            "He calls the data-as-labour school a serious proposal and promises to return to it, but immediately limits it: paying people would not touch the deeper asymmetry, because whoever sets the price still holds the information. So he neither dismisses nor endorses it — he doubts its sufficiency.",
        },
      },
    ],
    transcriptNote:
      "The concession about lengthy notices is a designed decoy — Dr Blake calls it true but trivial before moving to his real objection — and the closing analogy with river pollution signals where he wants regulation aimed: at the pipes, not the drinkers.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-ocean-plastics",
    title: "The problem of ocean plastics",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "environment",
    accentMix: ["british"],
    intro:
      "You will hear part of a talk on plastic pollution in the oceans. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ashford", name: "Dr Naomi Ashford", role: "marine scientist with a coastal research institute", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ashford", text: "Hello, and welcome to the coast series. I'm a marine scientist, which means I spend a fair few working days pulling other people's rubbish out of the sea and then writing reports about it. Today: where ocean plastic comes from, what it does out there, and what actually works against it." },
      { id: "s2", speakerId: "ashford", text: "First, a picture to correct. Most of the plastic in the sea never met a beach. It arrives, overwhelmingly, by river — roughly four-fifths of it washes down waterways from the land, carried from streets and tips far inland. If you want to plug the source, you go to the riverbank, not the seaside." },
      { id: "s3", speakerId: "ashford", text: "The remaining fifth is genuinely marine: nets cut or lost by fishing fleets, cargo washed overboard from container shipping, and rubbish pitched from vessels despite decades of rules against dumping." },
      { id: "s4", speakerId: "ashford", text: "What happens to it out there? Sunlight and wave action grind the big pieces down, season after season, until you're left with fragments under five millimetres across — what we call microplastics. They never truly vanish; they just become easier to swallow and harder to collect." },
      { id: "s5", speakerId: "ashford", text: "The famous 'garbage patches' deserve a correcting word too. People picture floating islands you could walk across. There aren't any. The plastic in the middle of the ocean gyres is more like a thin soup, scattered across an area so vast that a boat can cross it without seeing a single bottle." },
      { id: "s6", speakerId: "ashford", text: "Now the harm, and it operates at both ends of the size range. Large debris entangles — seals in packing bands, turtles in discarded netting. Albatross parents skim fragments off the surface, mistaking them for squid, and ferry them back to the nest, where the chicks' stomachs fill with things that can never be digested." },
      { id: "s7", speakerId: "ashford", text: "At the small end, the fibres drift into the plankton layer, and the animals that graze there — the base of the entire food web — ingest them. Whether that reaches our own plates, and at what cost, is still being measured; I'll be honest about what we don't yet know." },
      { id: "s8", speakerId: "ashford", text: "So what works? Let's take the cleanup schemes first, because they photograph beautifully and I wish them well. Ocean booms skim the floating fraction — but only what is still afloat, only what is large, and only where the weather allows. Against a thin soup, they're a teaspoon." },
      { id: "s9", speakerId: "ashford", text: "The interventions with hard evidence behind them are land-based, and almost embarrassingly simple. Deposit schemes — where a small charge on each bottle comes back to you when you return it — have lifted recycling rates wherever they've been tried." },
      { id: "s10", speakerId: "ashford", text: "Charges on single-use carrier bags cut their use in shops by more than ninety per cent within a couple of years in the countries that tried them. Bans on plastic-stemmed cotton buds: same story." },
      { id: "s11", speakerId: "ashford", text: "And the projects I love most sit between land and sea: floating barriers stretched across rivers to catch the bottles before the estuary swallows them. Modest, repairable, and priced like a round of coffees rather than a research programme." },
      { id: "s12", speakerId: "ashford", text: "Before I finish, a thought from the shoreline. Every fragment we've ever trawled up was bought by somebody, once, for about ten minutes of convenience. The sea keeps the receipt." },
      { id: "s13", speakerId: "ashford", text: "Next week, the same beach at dusk: noise, and what a ship's engine does to a whale's ability to hear its own family.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "OCEAN PLASTICS — lecture notes" }],
          [{ kind: "text", text: "Where it comes from" }],
          [{ kind: "text", text: "Roughly four-fifths arrives by" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "The rest: lost fishing gear and waste from" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "What it becomes" }],
          [{ kind: "text", text: "Fragments under 5 mm:" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Mid-ocean 'garbage patches': really a thin" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "The harm" }],
          [{ kind: "text", text: "Fragments are fed to chicks by albatross" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "What works on land" }],
          [{ kind: "text", text: "Bottle" }, { kind: "blank", no: 6 }, { kind: "text", text: "schemes lift recycling rates" }],
        ],
        blanks: [
          { no: 1, answer: "river", alternatives: [] },
          { no: 2, answer: "shipping", alternatives: [] },
          { no: 3, answer: "microplastics", alternatives: [] },
          { no: 4, answer: "soup", alternatives: [] },
          { no: 5, answer: "parents", alternatives: [] },
          { no: 6, answer: "deposit", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "note-taking"],
          keywords: ["by river", "container shipping", "microplastics", "thin soup", "albatross parents", "deposit schemes"],
          trap: {
            family: "mention-lure",
            lure: ["islands"],
            note:
              "'Islands' is the popular image the speaker explicitly denies — the mid-ocean patches are a thin soup, and the lecturer's own word is the one that scores.",
          },
          explanation:
            "The notes follow the talk's order: about four-fifths of sea plastic arrives by river; the marine fifth comes from fishing and container shipping; fragments under five millimetres are microplastics; the garbage patches are a thin soup, not islands; albatross parents feed fragments to their chicks; and bottle deposit schemes are among the land-based fixes that work.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 7–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "7 Ocean booms can only recover plastic that is still" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "8 Floating" }, { kind: "blank", no: 8 }, { kind: "text", text: "across rivers catch plastic before it reaches the sea." }],
        ],
        blanks: [
          { no: 7, answer: "afloat", alternatives: [] },
          { no: 8, answer: "barriers", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "process-tracking"],
          keywords: ["still afloat", "floating barriers", "estuary"],
          explanation:
            "Ocean booms skim only what is still afloat, large and reachable in calm weather — a teaspoon against a thin soup. Her favourite projects stand in the rivers instead: floating barriers catch the bottles before the estuary swallows them, stopping the plastic before the sea ever sees it.",
        },
      },
    ],
    transcriptNote:
      "The popular image of walkable garbage islands is raised only to be denied, and the cleanup schemes are praised but bounded — the talk's persuasive weight falls on the dull land-based fixes, from bottle deposits to river barriers.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-adult-education",
    title: "Adult education movements",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "education",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture series on the history of adult education. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "beddoes", name: "Tom Beddoes", role: "host of the community history lecture series", accent: "british" },
      { id: "hollis", name: "Professor Ruth Hollis", role: "historian of adult education", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "beddoes", text: "Evening, everyone, and welcome back to the community history series. Tonight we leap two centuries in a single lecture. Professor Ruth Hollis has spent her career on the people who taught Britain's grown-ups. Ruth — over to you." },
      { id: "s2", speakerId: "hollis", text: "Thank you, Tom. I want to start with a claim: mass education for adults wasn't an accident of kindly Victorians. It was organised, argued over and fought for. Tonight I'll walk you through four movements, and I'll warn you now — the same argument runs through all of them." },
      { id: "s3", speakerId: "hollis", text: "The first movement: the mechanics' institutes of the eighteen-twenties. In the new industrial towns, mill owners and ironmasters paid for halls where working men could attend evening lectures in practical science — chemistry for the dyers, mechanics for the machine minders — plus a lending library." },
      { id: "s4", speakerId: "hollis", text: "Now, the rosy reading has these employers as disinterested philanthropists, and some of them were. But be careful: the accounts and the minute books show a second motive, quite openly stated — a workforce that understood the machines would break them less often, and complain less loudly. The liberal ideal and the industrial interest were tangled from the very first subscription." },
      { id: "s5", speakerId: "hollis", text: "The second movement answered a question the institutes dodged: who sets the syllabus? From the eighteen-eighties, the settlement movement settled university students — young men first, young women soon after — in the poorest districts, to live there and teach there. The tutors shared the rent, the noise and, in principle, the life." },
      { id: "s6", speakerId: "hollis", text: "Alongside them came the Workers' Educational Association, founded in nineteen-oh-three, which brokered a remarkable deal: universities supplied the tutors, unions and local branches supplied the students, and together they ran three-year tutorial classes — the syllabus negotiated, not dictated. Many of those students went on to write the social histories the universities now teach." },
      { id: "s7", speakerId: "hollis", text: "The third movement is the one with a royal charter and a founder with a stubborn streak: the Open University. Conceived in the late sixties, it admitted its first students in nineteen seventy-one." },
      { id: "s8", speakerId: "hollis", text: "Two things made it radical, and we always forget the second one. Yes, it taught at a distance, on late-night television and by post. But the true revolution was the doorway: no entry qualifications at all. Formal credentials — or the lack of them — simply didn't count. Any adult could enrol, and two hundred thousand a year, at the peak, did." },
      { id: "s9", speakerId: "hollis", text: "Which brings me to the fourth movement, the one on your phones: the MOOC — the massive open online course. Around twenty-ten the platforms announced that world-class lectures would be free to anyone with a connection." },
      { id: "s10", speakerId: "hollis", text: "And what do I see, a decade on? Doors thrown open — that phrase again — and millions enrolling. But completion rates hover in the single figures, and the people who finish are, overwhelmingly, the people who already hold degrees." },
      { id: "s11", speakerId: "hollis", text: "When I watch that, I'm not watching a revolution. I'm watching the mechanics' institutes all over again: the door thrown wide, the crowd drifting away, and the same awkward question about who the teaching is really for." },
      { id: "s12", speakerId: "hollis", text: "Because the argument — the one I promised at the start — never changes: is this for wages or for wisdom, for vocational training or for a liberal education? The institutes faced it, the tutorial classes faced it, the Open University faced it in its senate, and the platforms are facing it now." },
      { id: "s13", speakerId: "hollis", text: "My own answer, for what it's worth, is that the movements which lasted refused to choose. They taught the chemistry and the poetry, the bookkeeping and the ballot." },
      { id: "s14", speakerId: "hollis", text: "So the next time someone tells you lifelong learning began with an app, tell them about the mill town with a lecture hall lit by gas, full of machine minders taking notes on their knees. The door has been open for two hundred years. The work is keeping people in the room.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Professor Hollis traces two centuries of organised adult learning. The mechanics' institutes of the 1820s were financed largely by local" }, { kind: "blank", no: 1 }, { kind: "text", text: "and taught practical science to industrial workers. From the 1880s, the settlement movement placed" }, { kind: "blank", no: 2 }, { kind: "text", text: "in poor districts, to live and teach alongside their neighbours. The Workers' Educational Association, founded in" }, { kind: "blank", no: 3 }, { kind: "text", text: ", ran three-year tutorial classes in partnership with universities." }],
          [{ kind: "text", text: "The Open University, whose first students enrolled in" }, { kind: "blank", no: 4 }, { kind: "text", text: ", demanded no" }, { kind: "blank", no: 5 }, { kind: "text", text: "for admission. She argues that today's open online courses repeat the institutes' old pattern, and that the movements which lasted refused to separate job training from a" }, { kind: "blank", no: 6 }, { kind: "text", text: "education." }],
        ],
        blanks: [
          { no: 1, answer: "employers", alternatives: [] },
          { no: 2, answer: "university students", alternatives: [] },
          { no: 3, answer: "1903", numbers: true },
          { no: 4, answer: "1971", numbers: true },
          { no: 5, answer: "entry qualifications", alternatives: ["qualifications"] },
          { no: 6, answer: "liberal", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "paraphrase", "gist", "note-taking"],
          keywords: ["mechanics' institutes", "mill owners and ironmasters", "university students", "tutorial classes", "no entry qualifications", "liberal education"],
          explanation:
            "The summary gathers the four movements: the institutes were financed by local employers — the mill owners and ironmasters; the settlement movement settled university students in poor districts; the WEA was founded in 1903 and ran tutorial classes with universities; the Open University's first students enrolled in 1971 with no entry qualifications; and the lasting movements refused to split vocational training from a liberal education.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to Professor Hollis, what motive lay behind the mechanics' institutes alongside philanthropy?",
        options: [
          "Employers expected a workforce that would break machines less often and complain less loudly.",
          "Mill owners wanted to keep the workforce occupied on Sunday evenings.",
          "Industrialists hoped to select future managers from among the mill workers.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "attitude"],
          keywords: ["break them less often", "complain less loudly", "minute books"],
          explanation:
            "She warns against the rosy reading: the accounts and minute books record a second motive, openly stated — a workforce that understood the machines would break them less often and complain less loudly. The option reproduces that industrial interest; the other two invent motives she never discusses.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is her assessment of the massive open online courses of the last decade?",
        options: [
          "They have finally solved the access problem that defeated the older movements.",
          "They reopen an old door but reproduce an old problem, as most learners drift away.",
          "Their low completion rates show that adults have stopped wanting to study.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "gist"],
          keywords: ["single figures", "drifting away", "all over again"],
          explanation:
            "She denies that the MOOCs are a revolution: completion rates hover in the single figures and finishers are overwhelmingly degree-holders, which she compares to the mechanics' institutes all over again — the door thrown wide, the crowd drifting away. So the pattern repeats, but she never concludes that adults have stopped wanting to learn.",
        },
      },
    ],
    transcriptNote:
      "The lecture's through-line is the wages-versus-wisdom argument announced at the start, and the MOOC passage deliberately echoes the mechanics' institutes — listen for the completion figures and for who actually finishes the courses.",
    source: BANK_SOURCE_NOTE,
  },
];
