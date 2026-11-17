/**
 * Audio question bank — PROMPT 54 expansion, Part 2 batch A.
 *
 * Seven further Part 2 recordings in the everyday social-context style:
 * a radio feature, a museum audio guide, a ranger briefing, a library
 * welcome tour, a village fete announcement, a hotel briefing and a
 * leisure-centre reopening. One main speaker per recording (the fete
 * gains a brief second voice), with the official task families mixed
 * per exercise: matching, plan labelling, table, sentence and flowchart
 * completion, and multiple choice. Every recording is original TalkSy
 * practice material written in the style of the test.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP2AExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p2-farmers-market",
    title: "A radio segment on the new farmers' market",
    part: 2,
    difficulty: 2,
    topic: "economics",
    estimatedMinutes: 6,
    accentMix: ["british"],
    intro:
      "You will hear part of a local radio programme in which a presenter talks about a new farmers' market opening in her town. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "nadia", name: "Nadia", role: "presenter of the Radio Marshdale community spot", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "nadia", text: "Good morning — it's just gone nine, and this is your Radio Marshdale community spot. I'm Nadia, and this Saturday the town finally gets what it's been asking for since the bypass opened: a farmers' market, in the heart of Corn Exchange Square." },
      { id: "s2", speakerId: "nadia", text: "Three years of petitions and planning meetings got us here, so you can forgive the organisers for being a little giddy. Let me introduce some of the stallholders, because this line-up is about as local as it gets." },
      { id: "s3", speakerId: "nadia", text: "First, the Fielden Brothers from Netherby. They grow everything without a drop of pesticide, and alongside crates of seasonal vegetables they'll be signing people up for their weekly veg boxes — bring a bag that can take the weight." },
      { id: "s4", speakerId: "nadia", text: "Marrow & Rye — the bakery this town queues around the block for — are bringing sourdough loaves baked before dawn, plus a batch of their seeded rye, which normally sells out by ten." },
      { id: "s5", speakerId: "nadia", text: "For cheese, look no further than Cold Harbour Creamery, who press and wax everything by hand on the farm. They're cracking open a whole wheel of farmhouse cheddar at noon, with crackers for everybody standing close by." },
      { id: "s6", speakerId: "nadia", text: "Wren Apiary bring jars of their dark heather honey down from the hives on Kestrel Hill, plus beeswax candles, and Penny Hollow Farm's hens have the run of a whole meadow, so their big brown eggs will be on sale by the half-dozen." },
      { id: "s7", speakerId: "nadia", text: "Now, two rumours to head off. The harbour fishmonger and his smoked fish van will not be there — he's booked into a coastal festival — and there'll be no cut flowers either: that stall is still at the talking stage, so don't go hunting for bouquets this weekend." },
      { id: "s8", speakerId: "nadia", text: "Times, then, and there's a correction here. The posters around town say trading starts at nine o'clock, but the first Saturday has been moved forward to half past eight, to give the brass band room to set up. Nine o'clock applies from next weekend onwards." },
      { id: "s9", speakerId: "nadia", text: "If you're driving, the multistorey off Pargeter Street is the closest car park — but it's small, and it will be full by ten. My honest advice is the park-and-ride from the rugby ground: a shuttle every fifteen minutes, and the bus ticket doubles as a discount at the market café." },
      { id: "s10", speakerId: "nadia", text: "One more practical thing: half the stalls rely on card readers, and the square's phone signal is famously dreadful, so bring some cash as a backup." },
      { id: "s11", speakerId: "nadia", text: "That's the community spot — do go along and show these traders what Marshdale can do. Back to you in the studio!" },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction: "The presenter mentions five stallholders who will attend the market. Match each stallholder with the produce they will sell. Choose the correct letter, A–G.",
        items: [
          "Fielden Brothers",
          "Marrow & Rye",
          "Cold Harbour Creamery",
          "Wren Apiary",
          "Penny Hollow Farm",
        ],
        options: [
          "organic vegetables",
          "fresh bread",
          "hand-made cheese",
          "cut flowers",
          "local honey",
          "smoked fish",
          "free-range eggs",
        ],
        correct: [0, 1, 2, 4, 6],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["Fielden Brothers", "seasonal vegetables", "sourdough", "cheese", "heather honey", "eggs"],
          trap: {
            family: "mention-lure",
            lure: ["smoked fish", "cut flowers"],
            note: "Both lure products are named in the broadcast only to be crossed off — the fishmonger is away at a festival and the flower stall is still only planned — so neither matches a stallholder on the list.",
          },
          explanation:
            "Each stallholder is matched through paraphrase rather than direct naming: pesticide-free seasonal vegetables point to the Fielden Brothers, sourdough and seeded rye to Marrow & Rye, hand-pressed farmhouse cheddar to Cold Harbour Creamery, heather honey from the Kestrel Hill hives to Wren Apiary, and big brown eggs by the half-dozen to Penny Hollow Farm.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What time will trading begin at the market this Saturday?",
        options: ["8.30 a.m.", "9.00 a.m.", "10.00 a.m."],
        correct: [0],
        meta: {
          skills: ["corrections", "numbers", "detail"],
          keywords: ["nine o'clock", "half past eight", "posters"],
          trap: {
            family: "correction",
            lure: ["nine o'clock"],
            note: "The poster time of nine o'clock is quoted and then moved for the first Saturday only — the half past eight start is what scores, and nine returns from next weekend.",
          },
          explanation:
            "Nadia quotes the printed nine o'clock start and immediately corrects it: the first Saturday begins at half past eight so the brass band has room to set up, with nine o'clock returning from next weekend. The correction, not the poster, carries the mark.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Nadia advise drivers to do?",
        options: [
          "Park in the multistorey off Pargeter Street",
          "Use the park-and-ride from the rugby ground",
          "Drive in after ten o'clock, when the queues die down",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "paraphrase", "detail"],
          keywords: ["multistorey", "park-and-ride", "rugby ground"],
          trap: {
            family: "mention-lure",
            lure: ["multistorey"],
            note: "The multistorey is the closest car park and is named first, but it is small and fills by ten — the recommendation that scores is the rugby-ground park-and-ride.",
          },
          explanation:
            "Although the Pargeter Street multistorey is closest, Nadia expects it to be full by ten, so her honest advice is the park-and-ride shuttle from the rugby ground, whose bus ticket doubles as a discount at the market café.",
        },
      },
    ],
    transcriptNote:
      "The matching rides on paraphrase — pesticide-free growing for organic, loaves and rye for bread — while the smoked fish and the cut flowers are named only to be crossed off. The nine o'clock start is corrected to half past eight, and the multistorey is praised and then passed over for the park-and-ride.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-museum-guide",
    title: "Museum audio guide: the natural history floor",
    part: 2,
    difficulty: 3,
    topic: "culture",
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear the recorded audio guide for the natural history floor of a museum. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "ruth", name: "Ruth", role: "voice of the Woldhouse Museum audio guide", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ruth", text: "Hello, and welcome to the natural history floor of the Woldhouse Museum. I'm Ruth, and this floor is mine to walk you through for the next half hour. Everything I mention is numbered on your plan, so keep it handy and press pause whenever you like." },
      { id: "s2", speakerId: "ruth", text: "Begin at the lifts. Directly ahead of you, past the welcome desk and through the glass doors, is the first gallery — home to the beetle collection, forty thousand specimens pinned and labelled by hand. It's the biggest display of its kind outside the capital." },
      { id: "s3", speakerId: "ruth", text: "Come back out and head for the whale. The skeleton hanging over the central atrium is the museum's emblem, and here's a secret: it isn't bone at all. The real bones went to the archive years ago — far too heavy for this floor — and what you see is a steel-and-resin model." },
      { id: "s4", speakerId: "ruth", text: "Woldhouse first opened its doors in eighteen ninety-five, and the model was built for the reopening in nineteen fifty-eight, so the whale has been false for nearly seventy years. Only the cleaners and I are meant to know that, but there you go." },
      { id: "s5", speakerId: "ruth", text: "Now, the first door on the left of the atrium holds the bird dioramas — glass scenes of every British species, from the puffin to the bittern, and the audio loop of dawn chorus is worth standing still for." },
      { id: "s6", speakerId: "ruth", text: "Directly opposite the birds, across the atrium on the right-hand side, stand the mammal skeletons. The elephant is the crowd-puller, but look up for the dolphins — they're suspended mid-leap, and children spot them before the adults do." },
      { id: "s7", speakerId: "ruth", text: "For the bottom-left corner of the floor, follow the corridor past the lifts and you'll reach the hands-on fossil table. Yes, hands-on: everything on the low tables can be picked up and turned over." },
      { id: "s8", speakerId: "ruth", text: "You might be tempted to take a small fossil home in a pocket — every year, somebody tries — but nothing leaves the room, however small. The ammonites are sixty-five million years old; they've earned their rest." },
      { id: "s9", speakerId: "ruth", text: "The big doors at the far end belong to the dinosaur hall, and I'm afraid they're shut while the roof is mended. Its famous rock and mineral display waits behind the hoarding, so give it a miss today and blame the weather." },
      { id: "s10", speakerId: "ruth", text: "Squeeze past the hoarding instead into the corner room diagonally opposite the lifts, where the ice-age mammals live. The woolly rhino calves are this year's addition, and they greet the children at eye level." },
      { id: "s11", speakerId: "ruth", text: "Last thing: the leaflets promise a marine life tank in the corner by the café. It isn't here yet — the tank arrives in the spring, and the corner stands empty for now — so end your visit at the café itself. I'll see you on the floor below." },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the museum floor. Choose the correct letter, A–G, for each numbered gallery.",
        plan: {
          title: "Woldhouse Museum — natural history floor",
          caption: "The natural history floor — write the correct letter next to each numbered gallery.",
          grid: [
            [{ room: "Lifts", label: "Start here" }, { room: "Gallery 1", blank: 1 }, { room: "Café" }],
            [{ room: "Gallery 2", blank: 2 }, { room: "Whale atrium", label: "You are here" }, { room: "Gallery 3", blank: 3 }],
            [{ room: "Gallery 4", blank: 4 }, { room: "Dinosaur hall", label: "Closed today" }, { room: "Gallery 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the beetle collection" },
          { letter: "B", text: "the bird dioramas" },
          { letter: "C", text: "the rock and mineral display" },
          { letter: "D", text: "the mammal skeletons" },
          { letter: "E", text: "the ice-age mammals" },
          { letter: "F", text: "the hands-on fossil table" },
          { letter: "G", text: "the marine life tank" },
        ],
        correct: ["A", "B", "D", "F", "E"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["directly ahead", "first door on the left", "directly opposite", "bottom-left corner", "diagonally opposite"],
          trap: {
            family: "mention-lure",
            lure: ["rock and mineral display", "marine life tank"],
            note: "Both lure exhibits are described in the guide's own words — the minerals sit behind the hoarding of a closed hall and the tank does not exist until spring — so neither letter answers a blank.",
          },
          explanation:
            "Follow the guide's route in order: the beetles sit directly ahead of the lifts, the bird dioramas fill the first door on the left of the atrium, the mammal skeletons stand directly opposite the birds, the hands-on fossil table occupies the bottom-left corner past the lifts, and the ice-age mammals wait in the room diagonally opposite the lifts.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "When was the model whale built?",
        options: ["1895", "1958", "1985"],
        correct: [1],
        meta: {
          skills: ["numbers", "similar-sound", "detail"],
          keywords: ["eighteen ninety-five", "nineteen fifty-eight", "reopening"],
          trap: {
            family: "similar-sound",
            lure: ["eighteen ninety-five"],
            note: "Eighteen and nineteen both carry the -teen ending and ninety-five versus fifty-eight tangles the rest — the museum's founding year is the lure, and the whale belongs to the nineteen fifty-eight reopening.",
          },
          explanation:
            "The museum's founding year, eighteen ninety-five, is the bait; the model whale was built for the nineteen fifty-eight reopening once the real bones were judged too heavy for the atrium. Listen for the -teen and -ty endings before choosing.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What are visitors allowed to do at the fossil table?",
        options: [
          "Take a small fossil home in a pocket",
          "Pick up and examine the fossils on the low tables",
          "See the rock and mineral display today",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["picked up and turned over", "nothing leaves the room", "fossil table"],
          trap: {
            family: "negation",
            lure: ["take a small fossil home"],
            note: "The pocket line is raised only to be refused — 'nothing leaves the room, however small' — and the mineral display is shut behind the hoarding, so only the handling option survives.",
          },
          explanation:
            "The fossil table is openly hands-on: everything on the low tables may be picked up and turned over. Ruth twice draws the line at removal — nothing leaves the room — and the mineral display is closed along with the whole dinosaur hall, which leaves only the handling option standing.",
        },
      },
    ],
    transcriptNote:
      "The route language carries the plan: directly ahead for the beetles, first door on the left for the birds, directly opposite for the mammals, and the two corner rooms at the back. The mineral display and the marine life tank are named but never open, and the whale's real age hides in an -teen versus -ty pair.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-park-trails",
    title: "A park ranger on the walking trails",
    part: 2,
    difficulty: 2,
    topic: "environment",
    estimatedMinutes: 7,
    accentMix: ["nz"],
    intro:
      "You will hear a park ranger briefing a group of visitors about the walking trails in a bush reserve. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "hana", name: "Hana", role: "ranger at the Ngaio Bush Reserve briefing walkers", accent: "nz" },
    ],
    segments: [
      { id: "s1", speakerId: "hana", text: "Kia ora, folks — lovely morning for it. I'm Hana, one of the rangers here at Ngaio Bush Reserve, and before you head off I'll run through the tracks, because each one suits a different sort of walker." },
      { id: "s2", speakerId: "hana", text: "The Rimu Track is the gentle one: a flat, twenty-minute loop on a raised boardwalk, wide enough for wheelchairs and pushchairs, so it's the pick if you've got wheels or little legs with you." },
      { id: "s3", speakerId: "hana", text: "Fern Gully Path follows the stream, and it's where the birds are — tui, bellbird, the odd morepork at dusk. If it's birdsong you're after, that's the walk to take; the ferns grow head-high in places, and it stays cool even at noon." },
      { id: "s4", speakerId: "hana", text: "The Waterfall Track climbs for half an hour and ends at the falls, where there's a deep swimming hole that's safe between the flags in summer. Bring togs and a towel, and watch your step — the rocks are slicker than they look." },
      { id: "s5", speakerId: "hana", text: "The Ridge Route is the workout. It pulls steadily up to the trig point, and from up there you can see right across the harbour to the city — allow an hour each way, and take more water than you think you'll want." },
      { id: "s6", speakerId: "hana", text: "And the Old Dam Track wanders east past the remains of a logging dam from the nineteen twenties. It's the quietest corner of the reserve, and the old rimu stumps along it are as wide as picnic tables." },
      { id: "s7", speakerId: "hana", text: "Now the housekeeping, because we take three things seriously here. First, root rot: the boot-washing rule applies to every track, no exceptions — give your boots a proper scrub at the washing stations by each trailhead, on the way in and again on the way out." },
      { id: "s8", speakerId: "hana", text: "Second, footwear. People rock up in gumboots after rain, and you're welcome to try, but the tracks are gravel and well drained — trainers or tramping boots will serve you better, and your feet will thank you by lunchtime." },
      { id: "s9", speakerId: "hana", text: "Third, sandflies. They're out in force after rain, so slop on some insect repellent before you leave the car park — not halfway up the track, when it's already too late." },
      { id: "s10", speakerId: "hana", text: "And the weather: check the forecast before you set out — the office posts updates every hour — because conditions change fast on the ridge, and the afternoon cloud rolls in like a curtain." },
      { id: "s11", speakerId: "hana", text: "However much time you've got, there's a track here that fits it, and the full map hangs by the shelter if you'd rather wander on your own. Enjoy the bush, and I'll see you at the two o'clock guided walk." },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction: "The ranger describes five walking tracks. Match each track with what visitors will find there. Choose the correct letter, A–F.",
        items: [
          "Rimu Track",
          "Fern Gully Path",
          "Waterfall Track",
          "Ridge Route",
          "Old Dam Track",
        ],
        options: [
          "a lookout over the harbour",
          "a wheelchair-friendly boardwalk",
          "the remains of a logging dam",
          "the best birdsong in the reserve",
          "a safe summer swimming hole",
          "the reserve's longest walk",
        ],
        correct: [1, 3, 4, 0, 2],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["Rimu Track", "boardwalk", "tui", "swimming hole", "trig point", "logging dam"],
          explanation:
            "Each track is matched to the walker it suits: the flat raised boardwalk takes wheelchairs and pushchairs, the stream path carries the birdsong of the tui and the bellbird, the waterfall trail ends at a flagged swimming hole, the ridge climb earns the harbour view from the trig point, and the eastern track passes the nineteen-twenties logging dam.",
        },
      },
      {
        id: "q2",
        type: "table",
        label: "Questions 6–8",
        instruction: "Complete the table below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Setting out — the ranger's checklist" }],
          [{ kind: "text", text: "Footwear: scrub boots at the " }, { kind: "blank", no: 6 }, { kind: "text", text: " by each trailhead" }],
          [{ kind: "text", text: "Insects: pack " }, { kind: "blank", no: 7 }, { kind: "text", text: " for the sandflies" }],
          [{ kind: "text", text: "Weather: check the " }, { kind: "blank", no: 8 }, { kind: "text", text: " before leaving the car park" }],
        ],
        blanks: [
          { no: 6, answer: "washing stations", alternatives: ["washing"], numbers: false },
          { no: 7, answer: "insect repellent", alternatives: ["repellent"], numbers: false },
          { no: 8, answer: "forecast", alternatives: ["weather forecast"], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "negation"],
          keywords: ["washing stations", "insect repellent", "forecast", "gumboots"],
          trap: {
            family: "negation",
            lure: ["gumboots"],
            note: "Gumboots are raised only to be waved off — the tracks are gravel and well drained, and trainers or tramping boots are the recommendation — so gumboots belong in no blank on the checklist.",
          },
          explanation:
            "The checklist follows the ranger's housekeeping in order: a proper scrub at the washing stations by each trailhead, insect repellent on before the car park is left behind, because the sandflies are out in force, and the forecast checked at the office updates, since ridge weather changes fast.",
        },
      },
    ],
    transcriptNote:
      "Each track is matched to its walker — wheels, birds, swimmers, climbers — and the checklist follows the housekeeping order: washing stations, insect repellent, forecast. Gumboots are raised only to be sent home again.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-library-tour",
    title: "A welcome tour of the town library",
    part: 2,
    difficulty: 1,
    topic: "education",
    estimatedMinutes: 6,
    accentMix: ["british"],
    intro:
      "You will hear a library assistant giving a welcome tour of the town library to a group of new members. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "gwen", name: "Gwen", role: "library assistant leading the new-members tour at Barrowgate Library", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "gwen", text: "Hello, everyone, and welcome to Barrowgate Library — lovely to see so many new faces. I'm Gwen, and this short walk-round shows you where everything lives. We'll start just inside the entrance gates, and we'll finish back at the desk." },
      { id: "s2", speakerId: "gwen", text: "Just inside the gates, on your right, is the newspaper stand — today's papers on the top shelf, magazines below, and the comfy chairs beside it. The papers go back to the desk at six." },
      { id: "s3", speakerId: "gwen", text: "Walk on into the main hall, and on your left, opposite the help desk, you'll find the large-print shelves — big-text novels and biographies, and every one of them can be borrowed." },
      { id: "s4", speakerId: "gwen", text: "Across the aisle, on the right-hand side, is where we keep the audio books — talking books, if you prefer that name — plus the language courses on the shelf underneath." },
      { id: "s5", speakerId: "gwen", text: "Right at the back of the floor, in the far corner on the left, is the children's corner: a boat for reading in, a rug, and all the picture books. Story time is every Wednesday at four." },
      { id: "s6", speakerId: "gwen", text: "And in the far corner on the other side is the glass room — our quiet study room. You can book it by the hour, and mobile phones have to stay outside." },
      { id: "s7", speakerId: "gwen", text: "Two things people always ask about. First, the self-issue machines — the tall kiosks in the corridor — are being fitted with new card readers this week, so bring everything to the desk for now. Second, the map drawers aren't on this floor at all; they live upstairs on the first floor." },
      { id: "s8", speakerId: "gwen", text: "The room in the middle of the back wall is our meeting room. Community groups hire it by the session — there's a small fee, and you book it at the reception desk by the doors." },
      { id: "s9", speakerId: "gwen", text: "Now, borrowing. Your new card allows up to twelve items at a time. Some of the older leaflets still say nine — we raised the limit in the spring — but it's twelve now, and you can renew online as often as you like." },
      { id: "s10", speakerId: "gwen", text: "And that's the tour. I'll leave you to explore — the help desk is in the middle of the floor if anything's hiding, and we'd love to see you at the autumn quiz night. Welcome aboard!" },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the library ground floor. Choose the correct letter, A–G, for each numbered area.",
        plan: {
          title: "Barrowgate Library — ground floor",
          caption: "The ground floor — write the correct letter next to each numbered area.",
          grid: [
            [{ room: "Area 1", blank: 1 }, { room: "Meeting room", label: "Book at reception" }, { room: "Area 2", blank: 2 }],
            [{ room: "Area 3", blank: 3 }, { room: "Help desk", label: "Ask staff here" }, { room: "Area 4", blank: 4 }],
            [{ room: "Entrance gates", label: "Start here" }, { room: "Corridor" }, { room: "Area 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the children's corner" },
          { letter: "B", text: "the large-print shelves" },
          { letter: "C", text: "the newspaper stand" },
          { letter: "D", text: "the audio books" },
          { letter: "E", text: "the quiet study room" },
          { letter: "F", text: "the self-issue machines" },
          { letter: "G", text: "the map drawers" },
        ],
        correct: ["A", "E", "B", "D", "C"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["on your right", "on your left", "across the aisle", "far corner", "glass room"],
          trap: {
            family: "mention-lure",
            lure: ["self-issue machines", "map drawers"],
            note: "Both lures are raised as answers to frequently asked questions — the kiosks are out of action this week and the map drawers live a floor above — so neither letter fills a blank.",
          },
          explanation:
            "Walk the tour from the gates: the newspaper stand sits just inside on the right, the large-print shelves stand on the left opposite the help desk, the audio books fill the right-hand side across the aisle, and the two far corners hold the children's corner and the glass quiet-study room.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How many items can a new member borrow at one time?",
        options: ["Nine", "Twelve", "Twenty"],
        correct: [1],
        meta: {
          skills: ["numbers", "corrections", "detail"],
          keywords: ["twelve", "nine", "leaflets"],
          trap: {
            family: "correction",
            lure: ["nine"],
            note: "The figure of nine comes from the older leaflets and has been retired — the spring increase brought the limit to twelve, which is the number that scores.",
          },
          explanation:
            "Gwen states the current limit as twelve items and explains that the older leaflets still print nine, a figure the spring increase retired. The current number, not the printed one, is the one to mark.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Who can use the meeting room?",
        options: [
          "Any visitor, free of charge",
          "Community groups that book and pay a small fee",
          "Library staff only",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["meeting room", "small fee", "reception desk"],
          explanation:
            "The meeting room is available to community groups, but only by the session: a small fee applies, and the booking is made at the reception desk by the doors. It is neither free nor open to every visitor, and staff use is never mentioned.",
        },
      },
    ],
    transcriptNote:
      "The tour runs clockwise from the gates: newspapers on the right, large print on the left, audio books across the aisle, and the two back corners for children and quiet study. The self-issue machines are out of action, the map drawers are one floor up, and the loan limit was raised from nine to twelve.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-village-fete",
    title: "The programme of a village fete",
    part: 2,
    difficulty: 2,
    topic: "culture",
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear the chairperson of a village fete announcing the afternoon's programme over a loudspeaker, helped briefly by an assistant. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "gil", name: "Gil", role: "chair of the village fete committee announcing the programme", accent: "british" },
      { id: "jules", name: "Jules", role: "committee assistant reading out messages at the fete", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "gil", text: "Afternoon, everybody — one, two, testing — right, you can all hear me. It's Gil here, chair of the fete committee, with the two o'clock rundown of the afternoon programme, so lend me your ears and I'll keep it short." },
      { id: "s2", speakerId: "gil", text: "The dog show opens proceedings in the main arena at half past two — that's the roped-off patch in the middle of the green. Entries on the day, two pounds a dog, and the waggiest-tail class goes first, so get those tails going." },
      { id: "s3", speakerId: "gil", text: "The scarecrow competition is already judged — you'll have seen the entries strung out along the lane that runs past the pond, all the way down to the kissing gate. The winning team takes home a hamper from Trevellin Farm Shop, announced at four." },
      { id: "s4", speakerId: "gil", text: "The fancy-dress parade assembles outside the village hall at three, then winds up to the arena for the judging. A reminder from the judges: marks go to homemade costumes only, so shop-bought masks will lose points." },
      { id: "s5", speakerId: "gil", text: "And the brass band plays from half past three, set up against the churchyard wall, where the acoustics are grand and the tea tent is close at hand." },
      { id: "s6", speakerId: "gil", text: "A word on the marquee: the produce show inside finished judging at noon, so it's display-only from here on — do go and admire the marrow, it's a stonker this year. Mind the floor, though; it's still squelchy at the far end." },
      { id: "s7", speakerId: "gil", text: "Prizes are presented at four o'clock in the arena, and we're honoured that our MP, Ms Deering, has agreed to do the honours—" },
      { id: "s8", speakerId: "jules", text: "Gil — sorry to butt in, folks. A message has just come through: Ms Deering's train is cancelled, so the Reverend Achebe has very kindly agreed to step in. Four o'clock, same spot, all being well." },
      { id: "s9", speakerId: "gil", text: "Well, you heard the woman — the Reverend Achebe at four. Right—" },
      { id: "s10", speakerId: "gil", text: "Last thing, and it's for the stallholders. When we pack up at five, please stack your trestle tables by the lych gate — the stacking is all we ask — and the scouts will carry them back to the village hall for storage." },
      { id: "s11", speakerId: "gil", text: "Anyone who's lost a straw hat: it's behind the coconut shy. Otherwise, enjoy the afternoon, mind the wasps, and I'll see you at the tombola. Back to the music!" },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–4",
        instruction: "The chairperson describes four events at the village fete. Match each event with the place where it happens or starts. Choose the correct letter, A–E.",
        items: [
          "The dog show",
          "The scarecrow competition",
          "The fancy-dress parade",
          "The brass band",
        ],
        options: [
          "the main arena",
          "the lane that runs past the pond",
          "the churchyard wall",
          "the marquee",
          "outside the village hall",
        ],
        correct: [0, 1, 4, 2],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["main arena", "the lane", "village hall", "churchyard wall", "marquee"],
          trap: {
            family: "mention-lure",
            lure: ["marquee"],
            note: "The marquee is given a whole announcement, but it houses the produce show, which is not on the printed list — none of the four events takes place there.",
          },
          explanation:
            "Each event is fixed to a landmark: the dog show fills the roped-off main arena, the scarecrows hang along the lane past the pond, the fancy-dress parade assembles outside the village hall before winding up to the arena, and the band plays against the churchyard wall beside the tea tent.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What will the winning scarecrow team receive?",
        options: [
          "A hamper from Trevellin Farm Shop",
          "A trophy kept by the committee",
          "Vouchers for the village shop",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["hamper", "Trevellin Farm Shop"],
          explanation:
            "Gil announces that the winning scarecrow team takes home a hamper from Trevellin Farm Shop, with the result declared at four o'clock. No trophy and no vouchers are mentioned anywhere in the programme rundown.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Who will present the prizes this year?",
        options: [
          "Ms Deering, the local MP",
          "The Reverend Achebe",
          "Jules, the committee assistant",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "corrections", "detail"],
          keywords: ["Ms Deering", "step in", "Reverend Achebe"],
          trap: {
            family: "attribution",
            lure: ["Ms Deering"],
            note: "Gil hands the prize-giving to the MP, but it is Jules's interruption that changes it — the Reverend Achebe presents, so the fact depends on which voice is speaking.",
          },
          explanation:
            "Gil confidently gives the prize-giving to the MP, Ms Deering, but Jules interrupts with the news that her train is cancelled and the Reverend Achebe has agreed to step in. The change of speaker carries the change of fact, and the vicar is the presenter to mark.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What are stallholders asked to do at five o'clock?",
        options: [
          "Carry their tables back to the village hall",
          "Stack the trestle tables by the lych gate",
          "Leave the tables standing where they are",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["trestle tables", "lych gate", "scouts"],
          trap: {
            family: "attribution",
            lure: ["village hall"],
            note: "The village hall is where the tables end up, but the scouts do that carrying — the stallholders' only job is the stacking by the lych gate.",
          },
          explanation:
            "Stallholders are asked for one thing only at pack-up: stack the trestle tables by the lych gate. The carrying back to the village hall belongs to the scouts, so the hall belongs in no answer about the stallholders' own job.",
        },
      },
    ],
    transcriptNote:
      "Each event is pinned to a landmark, with the marquee housing only the produce show. The prize-giving changes hands inside a two-voice exchange — Gil names the MP, Jules announces the vicar — and the stallholders stack while the scouts carry.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-hotel-briefing",
    title: "A hotel welcome briefing",
    part: 2,
    difficulty: 3,
    topic: "everyday",
    estimatedMinutes: 7,
    accentMix: ["british"],
    intro:
      "You will hear the duty manager of a small hotel giving a welcome briefing to guests who have just arrived. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "amara", name: "Amara", role: "duty manager at the Harbourlight Hotel giving the arrivals briefing", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "amara", text: "Good evening, everyone, and welcome to the Harbourlight. I'm Amara, the duty manager, and this is the little floor briefing we run for every new arrival — five minutes, and you'll know your way around before supper." },
      { id: "s2", speakerId: "amara", text: "Let's start at the far end. Through the doors past the lifts, where the ground floor ends in glass, is the conservatory bar — open until midnight, and the terrace beyond it is the best seat in town once the sun goes down." },
      { id: "s3", speakerId: "amara", text: "From the bar, take the three steps down on the right and you're at the spa pool, held at thirty degrees. Towels are on the rail by the door, and swimming hats are compulsory — there's a basket of spares if you've come unprepared." },
      { id: "s4", speakerId: "amara", text: "Back at the lifts, behind the frosted door on the left, is the business suite: six desks, a printer, and the quietest corner of the building if you need to work — or to hide." },
      { id: "s5", speakerId: "amara", text: "Just past reception, through the little arch, you'll find the gift shop — postcards, sun cream, toothbrushes, the necessaries — and the corner room beside the restaurant is the residents' lounge, with the day's papers and an honesty bar." },
      { id: "s6", speakerId: "amara", text: "Two rooms you won't find on this floor, however hard you look, are the gym and the children's playroom. Both are up on the second floor — take the lift marked 'Leisure' — so don't go hunting for either of them down here." },
      { id: "s7", speakerId: "amara", text: "A pinch of history while I have you: the building started life in the seventeen-forties as a coaching inn, and the stage coaches changed horses roughly where the restaurant now stands. The arch they clattered through is still the way in from the street." },
      { id: "s8", speakerId: "amara", text: "House rules, briefly. We ask for quiet from half past ten in the evening — the cards in your rooms print it as ten thirty p.m., which is the same thing — and that includes the terrace, much as we all love it out there." },
      { id: "s9", speakerId: "amara", text: "Breakfast runs from seven to ten in the restaurant, and reception is staffed all night, so nothing is ever really closed to you." },
      { id: "s10", speakerId: "amara", text: "That's the lot from me. Enjoy your first night at the Harbourlight — and do ask at the desk if anything's hiding." },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the hotel ground floor. Choose the correct letter, A–G, for each numbered room.",
        plan: {
          title: "Harbourlight Hotel — ground floor",
          caption: "The ground floor — write the correct letter next to each numbered room.",
          grid: [
            [{ room: "Terrace", label: "Sea views" }, { room: "Room 1", blank: 1 }, { room: "Room 2", blank: 2 }],
            [{ room: "Room 3", blank: 3 }, { room: "Lifts", label: "To the bedrooms" }, { room: "Restaurant", label: "Breakfast 7–10" }],
            [{ room: "Reception", label: "You are here" }, { room: "Room 4", blank: 4 }, { room: "Room 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the conservatory bar" },
          { letter: "B", text: "the gift shop" },
          { letter: "C", text: "the spa pool" },
          { letter: "D", text: "the business suite" },
          { letter: "E", text: "the residents' lounge" },
          { letter: "F", text: "the gym" },
          { letter: "G", text: "the children's playroom" },
        ],
        correct: ["A", "C", "D", "B", "E"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["ends in glass", "three steps", "frosted door", "little arch", "beside the restaurant"],
          trap: {
            family: "mention-lure",
            lure: ["gym", "children's playroom"],
            note: "Both lure rooms are described in detail only to be sent upstairs — 'don't go hunting for either of them down here' — so neither letter answers a blank on this floor.",
          },
          explanation:
            "The manager walks the floor from the far end backwards: the conservatory bar sits where the ground floor ends in glass, the spa pool lies three steps down on the right of the bar, the business suite hides behind the frosted door by the lifts, the gift shop waits through the little arch past reception, and the residents' lounge fills the corner room beside the restaurant.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 6–7",
        instruction: "Complete the sentences below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "Quiet hours begin at " }, { kind: "blank", no: 6 }, { kind: "text", text: " p.m." }],
          [{ kind: "text", text: "Stage coaches once changed horses where the " }, { kind: "blank", no: 7 }, { kind: "text", text: " now stands." }],
        ],
        blanks: [
          { no: 6, answer: "10.30", alternatives: ["10:30"], numbers: true },
          { no: 7, answer: "restaurant", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "paraphrase", "detail"],
          keywords: ["half past ten", "ten thirty", "coaching inn", "restaurant"],
          trap: {
            family: "number-form",
            lure: ["half past ten"],
            note: "The quiet hour is spoken as half past ten, but writing the words out would break the one-word-and-a-number rule — convert what you hear into figures: 10.30.",
          },
          explanation:
            "The quiet hour is spoken as half past ten and printed on the room cards as ten thirty; the scoring form is the figure version, 10.30. The coaches changed horses where the restaurant now stands, back in the building's coaching-inn days of the seventeen-forties.",
        },
      },
    ],
    transcriptNote:
      "The floor is walked from the far end backwards: bar, spa pool, business suite, then the reception rooms. The gym and the playroom are one floor up, the quiet hour is spoken in words but printed as figures, and the coaching-inn past sits underneath the restaurant.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p2-sports-reopening",
    title: "The sports centre reopens",
    part: 2,
    difficulty: 4,
    topic: "health",
    estimatedMinutes: 8,
    accentMix: ["british"],
    intro:
      "You will hear the manager of a leisure centre addressing members at the reopening of the building after a long closure. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "renata", name: "Renata", role: "manager of the Wendmore Leisure Centre reopening after the flood refurbishment", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "renata", text: "Good afternoon, everyone, and welcome back. I'm Renata, and on behalf of the whole team at Wendmore Leisure Centre, thank you for eighteen months of patience — with the dust, the scaffolding, and one very wet beginning." },
      { id: "s2", speakerId: "renata", text: "Because that's where this started, of course: the river came over its banks on a Tuesday night in October, and the pool hall took the worst of it. What the insurers first called a clean-up became a full refurbishment the moment the structural report landed." },
      { id: "s3", speakerId: "renata", text: "The building you're standing in is scarcely the one you left. The pool hall has been retiled and relit, the changing village has doubled in size, and the gym floor now carries forty stations — up from the fourteen we squeezed in before the flood." },
      { id: "s4", speakerId: "renata", text: "Now, the practical part: getting you back into the water, or the weights, whichever calls loudest. Everything begins at the main desk, where you hand in your old membership card — even the laminated relics — and your membership is reactivated on the spot." },
      { id: "s5", speakerId: "renata", text: "Next, and I can hear the groaning from here: every member books a fresh induction, no exceptions and no seniority. It's half an hour, it's free, and it's the only way to be shown the new equipment safely." },
      { id: "s6", speakerId: "renata", text: "Before that first session, there's a short health declaration to complete — online, or on paper at the desk. Two minutes of your time, and it stays confidential between you and the duty officer." },
      { id: "s7", speakerId: "renata", text: "Lockers, next. The old padlock chains are gone — the noticeboards on level one still say padlocks, but that notice is out of date: the new lockers open with a wristband, which you collect from reception and tap against the door." },
      { id: "s8", speakerId: "renata", text: "And on your way out, after that first swim or first session, stop at the welcome screen by the doors and leave some feedback — thirty seconds, thumbs up or down — because this fortnight shapes how the place is run for years." },
      { id: "s9", speakerId: "renata", text: "Speaking of which: a word on the reopening fortnight itself. There is no sponsored swim, no fundraising target and no gala dinner — the council asked, and we said no. This fortnight is about you finding your way back into the building and telling us what's what." },
      { id: "s10", speakerId: "renata", text: "The one exception is the over-sixties tea swim on Thursday mornings — free to the whole town, members or not — a small thank-you to the street that sandbagged these doors when the water came in." },
      { id: "s11", speakerId: "renata", text: "Timetables go live on the app tomorrow morning, and the desks open at six on Monday. Thank you for waiting for us. Now — shall we cut this ribbon?" },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart",
        label: "Questions 1–5",
        instruction: "Complete the flowchart below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Coming back after the refurbishment — the five steps" }],
          [{ kind: "text", text: "Hand in your old card at the " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Book a fresh " }, { kind: "blank", no: 2 }, { kind: "text", text: " session" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Complete a short " }, { kind: "blank", no: 3 }, { kind: "text", text: " before your first session" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Collect a locker " }, { kind: "blank", no: 4 }, { kind: "text", text: " from reception" }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Leave " }, { kind: "blank", no: 5 }, { kind: "text", text: " at the welcome screen on your way out" }],
        ],
        blanks: [
          { no: 1, answer: "main desk", alternatives: [], numbers: false },
          { no: 2, answer: "induction", alternatives: [], numbers: false },
          { no: 3, answer: "health declaration", alternatives: [], numbers: false },
          { no: 4, answer: "wristband", alternatives: [], numbers: false },
          { no: 5, answer: "feedback", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "corrections", "paraphrase"],
          keywords: ["main desk", "induction", "health declaration", "wristband", "feedback"],
          trap: {
            family: "correction",
            lure: ["padlock chains"],
            note: "The padlock chains belong to the old locker system and are crossed out in the same breath — the noticeboards are out of date, and the wristband is the value that scores.",
          },
          explanation:
            "The five steps arrive in order: hand the old card in at the main desk, book the fresh induction that no member escapes, complete the short health declaration beforehand, collect the wristband that has replaced the padlock chains, and leave feedback at the welcome screen on the way out.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How many stations does the gym floor now have?",
        options: ["Fourteen", "Forty", "Forty-four"],
        correct: [1],
        meta: {
          skills: ["numbers", "similar-sound", "detail"],
          keywords: ["forty stations", "fourteen", "gym floor"],
          trap: {
            family: "similar-sound",
            lure: ["fourteen"],
            note: "Fourteen is the pre-flood count and forty is the new one — the -teen and -ty endings are the classic pair to hold apart before choosing.",
          },
          explanation:
            "Renata contrasts the new gym floor, which carries forty stations, with the fourteen squeezed in before the flood. The -teen and -ty endings do the damage here, so keep the vowel length in mind before marking the answer.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to Renata, what is the reopening fortnight mainly for?",
        options: [
          "Raising money through a sponsored swim",
          "Welcoming members back into the building",
          "Choosing a new competitive swimming squad",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "gist", "paraphrase"],
          keywords: ["sponsored swim", "finding your way back", "tea swim"],
          trap: {
            family: "negation",
            lure: ["sponsored swim", "fundraising target"],
            note: "Both fundraising ideas are named only to be refused — 'the council asked, and we said no' — so the fortnight is about members finding their way back, with the tea swim the one free exception.",
          },
          explanation:
            "The fortnight is defined by its refusals: no sponsored swim, no fundraising target and no gala dinner, despite the council's asking. Its purpose is simply members finding their way back into the building, with the Thursday tea swim the lone free exception.",
        },
      },
    ],
    transcriptNote:
      "The five steps run main desk, induction, health declaration, wristband, feedback, with the padlock chains flagged as out of date. Forty against fourteen is the number pair to hold apart, and the reopening fortnight is defined mostly by what it refuses to be.",
    source: BANK_SOURCE_NOTE,
  },
];
