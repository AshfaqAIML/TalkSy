/**
 * IELTS Listening Masterclass — audio question bank expansion.
 * PROMPT 54 expansion, Part 2 batch C.
 *
 * Seven further Part 2 recordings (an everyday social-context monologue
 * with mainly one main speaker): a street-food founder, a sailing-club
 * commodore, a flood-scheme engineer, an expo floor guide, a theatre
 * historian, a conference-venue coordinator and a wildlife-rescue
 * volunteer coordinator. Every recording is original TalkSy practice
 * material written in the style of the test — not an official IELTS
 * examination recording.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP2CExercises: BankExercise[] = [
  // -------------------------------------------------------------------------
  // 1. Starting a small food business
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-food-business",
    title: "Starting a small food business",
    part: 2,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear a talk at an enterprise evening in which the founder of a street-food stall explains how she set up her small food business. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "sam", name: "Sam", role: "volunteer host at the Bramfield Enterprise Evening", accent: "british" },
      { id: "nadia", name: "Nadia", role: "founder of the Two Bowls street-food stall", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "sam", text: "Evening, everyone. Our next speaker runs a food stall that most of Bramfield has queued for at one time or another — Nadia, of Two Bowls, is here to talk us through her first year of trading, numbers included." },
      { id: "s2", speakerId: "nadia", text: "Thanks, Sam. Three winters ago I was sitting in an office job daydreaming about soup, so tonight I'll walk you through how Two Bowls actually got started — warts and all." },
      { id: "s3", speakerId: "nadia", text: "Step one was eating my own cooking, embarrassingly often. I made batch after batch and pushed bowls of it through my neighbours' letterboxes — well, I knocked first — and asked each household for honest marks out of ten." },
      { id: "s4", speakerId: "nadia", text: "Once a recipe survived that, it went on the menu. Next came the paperwork: you register the business with the council, and in this county that also meant sitting a food-hygiene course before I could legally sell a thing." },
      { id: "s5", speakerId: "nadia", text: "A word of warning there: inspectors look for the level two certificate. Plenty of people stop at level one and regret it when the audit comes round, so do the extra evening." },
      { id: "s6", speakerId: "nadia", text: "Then the scary part — finding somewhere to sell. My heart was set on a pitch at the spring fair: big crowds, decent money. The dates clashed with my notice period at work, though, so my very first stall was a trial spot at the winter market down by the old docks instead.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "nadia", text: "That trial spot was tiny and freezing, and it taught me the real maths of a market: your busiest hours, your waste, and exactly how many ladles a crowd wants before the bread runs out." },
      { id: "s8", speakerId: "nadia", text: "Kit came next. I bought a second-hand trailer off a retiring burger-van man — mint green, honestly hideous — and then arranged the insurance. That policy covers the trailer, the gas bottles and the public, and it's the one bill I never grumble about." },
      { id: "s9", speakerId: "nadia", text: "Money, quickly, because everyone asks. I started with two thousand pounds of savings, stall fees were thirty-five a day, and ingredients ate roughly a third of everything I took in that first year." },
      { id: "s10", speakerId: "nadia", text: "So what surprised me most? Honestly, not the cooking and not the money — the sheer admin. Evenings of spreadsheets, invoices and food-safety logs. The stove is maybe a quarter of the job; the desk is the rest." },
      { id: "s11", speakerId: "nadia", text: "And my single piece of advice about a menu: keep it brutally small. Two soups, one curry, bread. Every extra dish means another supplier, more waste and a slower queue, and mine never has more than five things on the board." },
      { id: "s12", speakerId: "sam", text: "And you can find Nadia at the Saturday farmers' market every week, as I'm sure half of you know…" },
      { id: "s13", speakerId: "nadia", text: "Sam's being generous — that's summer only! Once the frosts arrive we move indoors to the harbour food hall; the market pitch is an icebox from November. Come and find us either way — and taste before you commit to a large." },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart",
        label: "Questions 1–5",
        instruction: "Complete the flowchart below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Two Bowls — from kitchen idea to market stall" }],
          [{ kind: "text", text: "Test the recipes on willing " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Register the business with the " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Sit a food-hygiene " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Take a trial stall at the " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Insure the " }, { kind: "blank", no: 5 }, { kind: "text", text: " and the gas bottles" }],
        ],
        blanks: [
          { no: 1, answer: "neighbours", alternatives: [], numbers: false },
          { no: 2, answer: "council", alternatives: [], numbers: false },
          { no: 3, answer: "course", alternatives: [], numbers: false },
          { no: 4, answer: "winter market", alternatives: [], numbers: false },
          { no: 5, answer: "trailer", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "paraphrase", "corrections"],
          keywords: ["neighbours", "council", "food-hygiene course", "winter market", "trailer", "spring fair"],
          trap: {
            family: "correction",
            lure: ["spring fair"],
            note: "The spring fair is the market Nadia wanted; the clash with her notice period pushes her to a trial spot at the winter market — the second venue carries the mark.",
          },
          explanation:
            "The flow follows her story in order: neighbours taste the early batches, the council registration and the food-hygiene course come next, the trial stall belongs to the winter market rather than the spring fair she wanted, and the insurance policy covers the trailer along with the gas bottles.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Where can customers find Nadia's stall during the winter?",
        options: [
          "At the Saturday farmers' market",
          "Inside the harbour food hall",
          "At the spring fair by the docks",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "corrections", "detail"],
          keywords: ["farmers' market", "harbour food hall", "summer only"],
          trap: {
            family: "attribution",
            lure: ["farmers' market"],
            note: "The host claims the stall trades at the Saturday farmers' market all year, but Nadia corrects him — winter trading happens in the harbour food hall. Right fact family, wrong speaker.",
          },
          explanation:
            "Sam, the host, places her at the Saturday farmers' market every week, but Nadia immediately corrects him: summer only, because the market pitch is an icebox from November. Her own version — the harbour food hall — is the one that scores, and the spring fair belongs to her first year, not to this winter.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Nadia advise about the menu?",
        options: [
          "Offer a wide choice to attract every taste",
          "Keep the range of dishes deliberately small",
          "Copy the best-selling dish on the next stall",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "paraphrase", "detail"],
          keywords: ["keep it brutally small", "every extra dish"],
          explanation:
            "Nadia's single piece of advice is to keep the menu brutally small — two soups, one curry and bread — because every extra dish brings another supplier, more waste and a slower queue. Neither copying neighbouring stalls nor offering wide choice is recommended anywhere in the talk.",
        },
      },
    ],
    transcriptNote:
      "The flowchart rides on the process signals — 'next came the paperwork', 'kit came next' — and on one correction: the spring fair she wanted is replaced by the winter market. Question 6 turns on the host's claim being corrected by the speaker herself.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 2. Welcome to the sailing club
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-sailing-club",
    title: "Welcome to the sailing club",
    part: 2,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "culture",
    accentMix: ["nz"],
    intro:
      "You will hear the commodore of a sailing club giving a welcome talk to new members at an open evening. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "hemi", name: "Hemi", role: "commodore of the Waitapu Sailing Club", accent: "nz" },
    ],
    segments: [
      { id: "s1", speakerId: "hemi", text: "Kia ora, and welcome along to the Waitapu Sailing Club — lovely to see so many new faces at an open evening. I'm Hemi, this season's commodore, and I've been sailing out of this harbour since I was knee-high to a gull." },
      { id: "s2", speakerId: "hemi", text: "People join us for all sorts of reasons, so I'll run through the weekly calendar and you can find your spot. Yellow sheets are going round if you'd like to follow along." },
      { id: "s3", speakerId: "hemi", text: "Tuesday nights are our learn-the-ropes evenings. If you've never held a rope in your life, start there — you don't need any experience at all, and the club boats go out with a skipper on board." },
      { id: "s4", speakerId: "hemi", text: "Thursday brings the twilight races: short, friendly laps of the harbour after work, with a handicap so a slow old dinghy can still beat a flash keelboat. Afterwards we eat together on the deck, so bring a plate." },
      { id: "s5", speakerId: "hemi", text: "Once a month, Saturdays are working bees — the trailer needs fixing, boats need varnishing, winches need greasing. Members look after the club's own fleet with their own hands, and somebody will always teach you a knot." },
      { id: "s6", speakerId: "hemi", text: "In winter, when the water's bracing, we trade sailing for film nights in the clubhouse — old race footage, mostly, and hot chocolate from the galley." },
      { id: "s7", speakerId: "hemi", text: "And the Easter regatta is the big one: two days of racing with the whole bay out, and the overall winner lifts the Commodore's Cup on the beach at the prize-giving." },
      { id: "s8", speakerId: "hemi", text: "A couple of practical points before you all drift towards the supper table. People ask whether we bring in paid professionals to run the coaching — we don't. Every coach at this club is a volunteer, and most of them learned in these same boats.", pauseAfterMs: 300 },
      { id: "s9", speakerId: "hemi", text: "Now, money, briefly. A single adult season pass is sixty dollars — I'll write it on the board, because this hall eats numbers. Juniors pay half, and once a junior turns sixteen they can crew in the twilight races for free." },
      { id: "s10", speakerId: "hemi", text: "The family pass is the one to ask about: two adults and every junior under eighteen in the same household, for far less than separate passes." },
      { id: "s11", speakerId: "hemi", text: "Before your first sail there's one thing you must do: put your name on the list on the office door. We count every boat out and back, so unlisted sailors cause genuine chaos. Wetsuits you can borrow from the rack by the shed, first come, first served, and bring a towel." },
      { id: "s12", speakerId: "hemi", text: "That's the tour from me — enjoy the supper, and I hope to see half of you on the water by spring. Kia ora!" },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction: "Match each club activity with what the speaker says about it. Choose the correct letter, A–F.",
        items: [
          "1 Tuesday learn-the-ropes evenings",
          "2 the Thursday twilight races",
          "3 Saturday working bees",
          "4 winter film nights",
          "5 the Easter regatta",
        ],
        options: [
          "no previous sailing experience is needed",
          "the club's boats are repaired by members",
          "the evening ends with a shared meal",
          "it takes place in the clubhouse",
          "a cup is presented to the winner",
          "the coaching is run by paid professionals",
        ],
        correct: [0, 2, 1, 3, 4],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["learn-the-ropes", "eat together on the deck", "working bees", "clubhouse", "Commodore's Cup", "paid professionals", "bring a plate"],
          trap: {
            family: "negation",
            lure: ["paid professionals"],
            note: "The paid-professionals letter is spoken only to be ruled out — 'we don't' — because every coach at the club is a volunteer, so it belongs to no activity at all.",
          },
          explanation:
            "The calendar walk-through pairs each activity with its hook: Tuesdays need no experience at all, Thursday races end with everyone eating together on the deck, Saturday bees are when members repair the club's own fleet, film nights move into the clubhouse when the water turns bracing, and the Easter regatta ends with the Commodore's Cup being lifted. The paid-professionals letter matches nothing, since Hemi rules it out.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How much does a single adult season pass cost?",
        options: ["$16", "$60", "$120"],
        correct: [1],
        meta: {
          skills: ["numbers", "similar-sound", "detail"],
          keywords: ["sixty dollars", "sixteen"],
          trap: {
            family: "similar-sound",
            lure: ["sixteen"],
            note: "Sixty and sixteen differ by one stress placement — the fee is sixty dollars, while sixteen belongs to the age when juniors may start crewing in the twilight races.",
          },
          explanation:
            "Hemi names the single adult pass at sixty dollars and writes it on the board precisely because the hall eats numbers. The sixteen he mentions in the same breath is the crewing age for juniors, not the price, and a hundred and twenty dollars is never mentioned at all.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What must new members do before their first sail?",
        options: [
          "Put their names on the list on the office door",
          "Borrow a wetsuit from the rack by the shed",
          "Pay a fee to crew in the twilight races",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "negation"],
          keywords: ["name on the list", "office door", "wetsuits"],
          trap: {
            family: "mention-lure",
            lure: ["wetsuits", "crew"],
            note: "Borrowing a wetsuit is handy but optional, and juniors crew for free once they turn sixteen — the single obligation is signing the list, because boats are counted out and back.",
          },
          explanation:
            "The one obligation before a first sail is putting your name on the office-door list, because every boat is counted out and back. Wetsuits can be borrowed from the rack by the shed but are strictly optional, and crewing in the twilight races carries no fee for juniors.",
        },
      },
    ],
    transcriptNote:
      "The matching leans on small hooks — no experience at all, bring a plate, working bees, the clubhouse, the Commodore's Cup — with the paid-professionals letter as the spare. The price question turns on the sixty/sixteen pair, and the only genuine obligation before a first sail is the sign-up list.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 3. A town's flood-defence project
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-flood-defences",
    title: "A town's flood-defence project",
    part: 2,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "environment",
    accentMix: ["british"],
    intro:
      "You will hear a public briefing in which an engineer explains a flood-defence project to residents of a riverside town. First you have some time to look at questions 1 to 3. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "gordon", name: "Gordon Peake", role: "lead engineer on the Weirford flood scheme", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "gordon", text: "Good evening. I'm Gordon Peake, lead engineer on the Weirford flood scheme, and thank you for spending a dry Tuesday talking about wet ones. I'll keep the jargon to a minimum, though I make no promises about the numbers." },
      { id: "s2", speakerId: "gordon", text: "Context first. Weirford sits in a tight bend of the River Sorrel and has flooded four times in living memory — worst of all in twenty fifteen, when the water reached the door handles of the butcher's on Fore Street." },
      { id: "s3", speakerId: "gordon", text: "When we consulted in the spring, three options were on the table. The first was a storage reservoir upstream — wide as a rugby pitch and deep as a swimming pool. It looked like the answer, and it wasn't cheap, but money isn't what sank it. The survey found the sandstone under the valley is cracked like old china; it simply wouldn't hold water. The reservoir would also have drowned the heronry nature reserve, which upset everyone — but the rock was the deal-breaker." },
      { id: "s4", speakerId: "gordon", text: "Option two was dredging — deepening the channel through town. Cheaper and quicker, and about as effective as bailing a bathtub with a teaspoon, because the channel refills with silt within a couple of winters and you're buying the same digger again and again." },
      { id: "s5", speakerId: "gordon", text: "What we settled on is the third option: we let the river flood, but only where we choose — well upstream, on farmland the authority has bought for the purpose, and never into Weirford itself." },
      { id: "s6", speakerId: "gordon", text: "In town, the defences you'll see are deliberately modest. The brick quay wall is staying — it's listed — but it has been quietly underpinned and raised by half a metre with a stone coping that matches the old work." },
      { id: "s7", speakerId: "gordon", text: "The new embankments out on the water meadows are seeded with wildflowers, so by June they'll read as meadow habitat rather than concrete. We did examine making them raisable as the climate shifts — I'm afraid the geometry locks the height in for good, and I'd rather tell you that now than in twenty years." },
      { id: "s8", speakerId: "gordon", text: "Under Fore Street itself, the old culverts are being swapped for pipes twice the diameter, so the road drains can actually clear in a downpour instead of gulping." },
      { id: "s9", speakerId: "gordon", text: "And when the siren sounds, please don't queue at the depot for sandbags. At this scale they're decoration, frankly. The single most useful thing a household can do is move vehicles up to the leisure-centre roof park before Fore Street closes — the last flood wrote off forty-one cars exactly where you'd have parked them.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "gordon", text: "So let me walk you through a storm in real time. Rain gauges and river sensors in the hills stream their readings to a control room at the pumping station, and staff watch the levels climb together." },
      { id: "s11", speakerId: "gordon", text: "When the river passes a set level, the sluice gates at Weirford Bridge swing shut, and the water backs up onto the washland — eleven hectares of meadow with leaky barriers that slow the spread and take the sting out of the peak." },
      { id: "s12", speakerId: "gordon", text: "Once the peak is over and the river begins to fall, the pumps return the stored water gently, at a rate the channel can carry without overtopping." },
      { id: "s13", speakerId: "gordon", text: "Timeline, briefly: the pumping station is live already, the embankments finish in the autumn, and the whole scheme is signed off against a one-in-a-hundred-year storm — a standard, I remind the committee monthly, not a forecast." },
      { id: "s14", speakerId: "gordon", text: "The plans are coming round now. Thank you for listening, and I'll take as many questions as the clock allows." },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why was the upstream reservoir option rejected?",
        options: [
          "Its construction costs were far higher than the estimates",
          "The cracked sandstone beneath the valley would not hold water",
          "It would have flooded a protected nature reserve",
        ],
        correct: [1],
        meta: {
          skills: ["paraphrase", "detail", "opinion"],
          keywords: ["wouldn't hold water", "nature reserve", "deal-breaker"],
          trap: {
            family: "mention-lure",
            lure: ["nature reserve"],
            note: "The heronry nature reserve really would have been drowned and the reservoir really wasn't cheap, but Gordon pins the rejection on one thing: the cracked sandstone — the deal-breaker he names.",
          },
          explanation:
            "Gordon dismisses cost as the reason — money isn't what sank it — and although the heronry nature reserve would genuinely have been lost, he calls the cracked sandstone, which simply wouldn't hold water, the deal-breaker. The geological finding is therefore the option that scores.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Gordon say about the new embankments?",
        options: [
          "They are being seeded with wildflowers to form meadow habitat",
          "Their height could be raised again in future decades",
          "They have replaced the listed brick quay wall",
        ],
        correct: [0],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["seeded with wildflowers", "locks the height in", "quay wall"],
          trap: {
            family: "negation",
            lure: ["raised"],
            note: "The quay wall is what gets raised, and only by half a metre, while the embankments' height is locked in for good — the wildflower seeding is the one statement that stands.",
          },
          explanation:
            "Gordon describes the embankments as seeded with wildflowers so they read as meadow habitat rather than concrete. He rules out raising them later because the geometry locks the height in for good, and the listed quay wall stays in place, merely underpinned and topped with matching stone.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Gordon advise households to do when the siren sounds?",
        options: [
          "Queue at the depot for sandbags",
          "Move their vehicles to the leisure-centre roof park",
          "Clear leaves from the road drains on Fore Street",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "detail", "paraphrase"],
          keywords: ["sandbags", "leisure-centre roof park", "wrote off forty-one cars"],
          trap: {
            family: "mention-lure",
            lure: ["sandbags", "drains"],
            note: "Sandbags are dismissed as decoration at this scale, and clearing the drains is the new pipework's job — the one action that pays is moving vehicles before Fore Street closes.",
          },
          explanation:
            "At the siren stage sandbags are written off as decoration, and the enlarged drains under Fore Street are the scheme's job rather than the household's. The useful move is getting vehicles onto the leisure-centre roof park, since the last flood wrote off forty-one cars parked exactly where people usually leave them.",
        },
      },
      {
        id: "q4",
        type: "flowchart",
        label: "Questions 4–7",
        instruction: "Complete the flowchart below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "A storm in real time — under the Weirford scheme" }],
          [{ kind: "text", text: "Hillside sensors stream their readings to the " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "The sluice gates close once the river passes a set " }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Flood water backs up onto the upstream " }, { kind: "blank", no: 6 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Pumps return the stored water once the river begins to " }, { kind: "blank", no: 7 }],
        ],
        blanks: [
          { no: 4, answer: "control room", alternatives: [], numbers: false },
          { no: 5, answer: "level", alternatives: [], numbers: false },
          { no: 6, answer: "washland", alternatives: [], numbers: false },
          { no: 7, answer: "fall", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "paraphrase", "signposts"],
          keywords: ["control room", "set level", "washland", "begins to fall", "sluice gates"],
          explanation:
            "The storm walk-through is strictly signposted: readings from the hills stream to the control room at the pumping station, the sluice gates at the bridge swing shut once the river passes the set level, the backed-up water spreads onto the washland meadows, and the pumps send it back only once the river begins to fall.",
        },
      },
    ],
    transcriptNote:
      "The three choices are decided by small emphases: 'the rock was the deal-breaker', 'the geometry locks the height in', and sandbags dismissed as decoration. The flowchart then follows the storm minute by minute, from the control room to the washland and back.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 4. A guide to the technology expo
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-tech-expo",
    title: "A guide to the technology expo",
    part: 2,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "technology",
    accentMix: ["north-american"],
    intro:
      "You will hear a visitor guide welcoming people to a technology expo and explaining the layout of the exhibition floor. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "dana", name: "Dana Whitlock", role: "visitor guide at the Lakeshore Tech Expo", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "dana", text: "Hi there, folks, and welcome to day two of the Lakeshore Tech Expo! If you can hear me at the back, give me a wave. Great. I'm Dana, your floor guide, and this is the five-minute orientation that saves you an hour of wandering." },
      { id: "s2", speakerId: "dana", text: "Logistics first. You came in through the main entrance at the top left of your floor plan, and the badge desks are straight ahead in the reception bay. The auditorium — the big lecture hall in the top-right corner — is where the long talks live, at least on paper." },
      { id: "s3", speakerId: "dana", text: "Now the floor itself. Walk past the badge desks and you reach the heart of the building: the central atrium, right in the middle of your plan. Facing the atrium from the reception side, the fenced square on your right is the robotics arena — battle bots on the hour, and yes, they do throw sparks." },
      { id: "s4", speakerId: "dana", text: "Directly opposite the arena, across the atrium, is the 3-D printing zone: rows of machines running all day, and you may take home whatever they print between demonstrations." },
      { id: "s5", speakerId: "dana", text: "Head to the bottom of your plan next. In the bottom-left corner sits the drone pond — a netted enclosure where the flight demonstrations lift off every half hour. Safety glasses on whenever the nets are down, please." },
      { id: "s6", speakerId: "dana", text: "Along the bottom middle, the row of little folding stands is the start-up alley — thirty-one tiny companies, and half of them are hiring. Give them three minutes of your afternoon; one of these booths will be famous." },
      { id: "s7", speakerId: "dana", text: "And in the bottom-right corner, past the alley, you'll find the gaming lounge — vintage consoles, a wall of screens and this year's flight simulators. It gets loud in there, gloriously so." },
      { id: "s8", speakerId: "dana", text: "Two spots you won't find on this plan, on purpose. Lunch: the food trucks are out on the north terrace, so follow your nose rather than your finger on the map. And if your phone is dying — mine always is by noon — the charging lounge is up on the mezzanine, one floor above the atrium." },
      { id: "s9", speakerId: "dana", text: "Right — one schedule change, and it's a big one. The keynote was scheduled for the auditorium at eleven, but the ticket demand broke the room: the auditorium seats two hundred, and three times that many of you registered. So the keynote has moved into the robotics arena; same hour, far more sparks.", pauseAfterMs: 300 },
      { id: "s10", speakerId: "dana", text: "If you want a chair for the keynote, be there ten minutes early; the bleachers fill fast on day two." },
      { id: "s11", speakerId: "dana", text: "For the flight simulators in the gaming lounge, here's the deal. They're free with your badge, but you can't simply queue — collect a timed ticket from the desk beside the lounge. The first batch goes out at ten and the second at two, and there is no online booking; the organisers want tickets collected in person so the queue stays honest." },
      { id: "s12", speakerId: "dana", text: "Last things. The Wi-Fi is 'Lakeshore-Guest', password 'expo2026', all lowercase. Lost property goes to the badge desks, which brings us neatly back to where we started." },
      { id: "s13", speakerId: "dana", text: "Enjoy the floor, folks — and if you get lost, the atrium is your compass. Thanks, and go touch something with a circuit board!" },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the floor plan of the expo. Choose the correct letter, A–G, for each numbered zone.",
        plan: {
          title: "Lakeshore Tech Expo — exhibition floor",
          caption: "The exhibition floor — write the correct letter next to each numbered zone.",
          grid: [
            [{ room: "Main entrance", label: "Entrance" }, { room: "Reception bay" }, { room: "Auditorium" }],
            [{ room: "Zone 1", blank: 1 }, { room: "Central atrium" }, { room: "Zone 2", blank: 2 }],
            [{ room: "Zone 3", blank: 3 }, { room: "Zone 4", blank: 4 }, { room: "Zone 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the drone pond" },
          { letter: "B", text: "the robotics arena" },
          { letter: "C", text: "the start-up alley" },
          { letter: "D", text: "the gaming lounge" },
          { letter: "E", text: "the 3-D printing zone" },
          { letter: "F", text: "the food court" },
          { letter: "G", text: "the charging lounge" },
        ],
        correct: ["B", "E", "A", "C", "D"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["robotics arena", "3-D printing zone", "drone pond", "start-up alley", "gaming lounge", "food trucks"],
          trap: {
            family: "mention-lure",
            lure: ["food trucks", "charging lounge"],
            note: "The food trucks sit out on the north terrace and the charging lounge is a floor up on the mezzanine — both are described in detail but neither is on this floor plan, so neither letter answers a numbered zone.",
          },
          explanation:
            "Track the walkthrough from the reception side of the atrium: the robotics arena is the fenced square on the right as you face it, the 3-D printing zone lies directly opposite across the atrium, the drone pond fills the bottom-left corner, the start-up alley runs along the bottom middle, and the gaming lounge occupies the bottom-right corner past the alley.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Where will the keynote address now take place?",
        options: [
          "In the auditorium",
          "In the robotics arena",
          "On the north terrace",
        ],
        correct: [1],
        meta: {
          skills: ["corrections", "detail", "paraphrase"],
          keywords: ["scheduled for the auditorium", "moved into the robotics arena", "broke the room"],
          trap: {
            family: "correction",
            lure: ["auditorium"],
            note: "The keynote was scheduled for the auditorium until the ticket demand broke the room — the corrected venue is the robotics arena, same hour, far more seats.",
          },
          explanation:
            "The eleven o'clock keynote outgrew the auditorium, which seats two hundred, so it has moved into the robotics arena — same hour, more seats. The north terrace belongs to the food trucks, so no announcement ever moves the keynote out of doors.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How can visitors get a turn on the flight simulators?",
        options: [
          "By collecting a timed ticket in person",
          "By booking a slot online in advance",
          "By paying a small fee at the lounge desk",
        ],
        correct: [0],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["timed ticket", "no online booking", "free with your badge"],
          trap: {
            family: "negation",
            lure: ["online booking"],
            note: "The simulators are free with a badge — so no fee — and online booking is ruled out flat; the only route is a timed ticket collected in person from the desk beside the lounge.",
          },
          explanation:
            "The simulators cost nothing extra with your badge, but a timed ticket is compulsory: the first batch goes out at ten and the second at two. Online booking is explicitly ruled out, and no fee of any kind is ever mentioned.",
        },
      },
    ],
    transcriptNote:
      "The plan is walked from the reception side of the atrium, with the food trucks and the mezzanine charging lounge named but deliberately off-plan. The keynote correction moves it from the auditorium to the robotics arena, and simulator tickets are strictly in person.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 5. The story of the old theatre
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-theatre",
    title: "The story of the old theatre",
    part: 2,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear the chair of a preservation trust telling an audience of residents the story of a town's old theatre. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "philip", name: "Philip Lomax", role: "chair of the Majestic Theatre Preservation Trust", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "philip", text: "Good evening. I'm Philip Lomax, chair of the trust that looks after the Majestic — that big, slightly shabby wedding cake of a building on Harbourne High Street — and tonight I owe you its story in fifteen minutes, so wave a programme at me if I run over." },
      { id: "s2", speakerId: "philip", text: "The Majestic opened in nineteen oh two, and it exists because of one man's railways. Sir Aldous Crane had grown rich from a string of railway hotels, and he decided the town that had made him deserved somewhere grand to spend its evenings." },
      { id: "s3", speakerId: "philip", text: "Opening night was a variety bill — a comic singer, a magician, a performing poodle and a finale of dancing girls — and the house stayed full for a week." },
      { id: "s4", speakerId: "philip", text: "Tastes changed, as they do. By the mid-thirties the stage shows couldn't compete with the flicks, so the owners lifted out the orchestra pit and put in a screen. For nearly thirty years the Majestic was simply a cinema, and a beloved one, before anybody winces." },
      { id: "s5", speakerId: "philip", text: "The war closed the curtain properly. The army requisitioned the building in nineteen forty, and for six years the auditorium served as a furniture store — the seats stayed in, oddly, which is why so many of them are original." },
      { id: "s6", speakerId: "philip", text: "Peace didn't keep the pictures, not for long. Television emptied the seats and bingo filled them — yes, the Majestic was a bingo hall for a decade, and I make no apology for it — and by nineteen seventy-four the owners had applied to knock the lot down for a car park." },
      { id: "s7", speakerId: "philip", text: "That is where the town found its voice. A campaign grew out of a church-hall coffee morning: petitions, jumble sales, a float at the carnival. After two years of refusal the council bought the building for one pound, on condition that our trust restored it — a pound, though the figure people quote is a thousand." },
      { id: "s8", speakerId: "philip", text: "Now, the story everyone asks about: the dressing-room fire. The legend has the theatre ablaze and half of Harbourne in the street. The brigade's own log says one bucket, a scorched door and a very embarrassed actor with a cigarette. That was nineteen sixty-eight, and it is genuinely the tale people raise most often.", pauseAfterMs: 300 },
      { id: "s9", speakerId: "philip", text: "The restoration itself, nineteen eighty-nine, is my favourite chapter. Lifting the boards above the auditorium ceiling, the joiners found the original painted panels — cherubs, garlands, a very startled swan — hidden above a false ceiling that some pragmatist had hung in the fifties to cut the heating bills." },
      { id: "s10", speakerId: "philip", text: "Four years and every kind of grant later, the swan is startling audiences again, and the auditorium now sits on the national heritage list." },
      { id: "s11", speakerId: "philip", text: "Which brings me to now. The trust is a charity, the building has to earn its keep, and the truth of the balance sheet is blunt: weddings pay the wages. Conferences and school hires fill the gaps, but it's the weddings — two hundred of them since the reopening — that keep the roof on." },
      { id: "s12", speakerId: "philip", text: "So when you pass the Majestic on a Saturday and hear a wedding band striking up, that is not the building's decline — it's precisely what keeps it standing." },
      { id: "s13", speakerId: "philip", text: "Thank you. Do come on the backstage tour — the volunteers run it every Saturday at noon from the foyer." },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction: "Match each period in the theatre's history with what happened to the building. Choose the correct letter, A–F.",
        items: [
          "1 when it opened in 1902",
          "2 during the 1930s",
          "3 during the Second World War",
          "4 by the mid-1970s",
          "5 in its life as a restored venue",
        ],
        options: [
          "the stage was converted to show films",
          "a local campaign stopped plans to demolish it",
          "wedding bookings provide most of its income",
          "the army stored furniture in the auditorium",
          "a variety programme opened the theatre",
          "a serious fire badly damaged the building",
        ],
        correct: [4, 0, 3, 1, 2],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["variety bill", "put in a screen", "furniture store", "knock the lot down", "weddings pay the wages", "dressing-room fire"],
          trap: {
            family: "mention-lure",
            lure: ["dressing-room fire"],
            note: "The dressing-room fire is real but tiny — one bucket and a scorched door, per the brigade's log — so the option about serious fire damage belongs to no period at all.",
          },
          explanation:
            "The chapters follow the talk: a variety bill opened the theatre in 1902, film screenings replaced the live shows once the owners put in a screen, the army kept furniture in the auditorium through the war years, a campaign defeated the plan to knock the lot down, and wedding bookings now pay the wages of the restored building. The celebrated fire amounted to one bucket and a scorched door.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 6–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "Sir Aldous Crane funded the theatre with profits from his " }, { kind: "blank", no: 6 }],
          [{ kind: "text", text: "The original painted panels survived hidden above a " }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "Most of the theatre's income today comes from " }, { kind: "blank", no: 8 }],
        ],
        blanks: [
          { no: 6, answer: "railway hotels", alternatives: [], numbers: false },
          { no: 7, answer: "false ceiling", alternatives: [], numbers: false },
          { no: 8, answer: "weddings", alternatives: [], numbers: false },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail"],
          keywords: ["railway hotels", "false ceiling", "weddings pay the wages"],
          explanation:
            "Crane's fortune came from a string of railway hotels; the painted panels survived because a false ceiling hung in the fifties hid them until the nineteen eighty-nine joiners lifted the boards; and the present balance sheet is blunt — weddings pay the wages, with conferences and school hires filling the gaps.",
        },
      },
    ],
    transcriptNote:
      "The matching turns on paraphrase — the flicks, requisitioned, jumble sales — with the dressing-room fire as the spare letter. The sentences pull out the railway hotels, the false ceiling that protected the startled swan, and the weddings that pay the wages.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 6. Orientation at a conference venue
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-conference",
    title: "Orientation at a conference venue",
    part: 2,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "workplace",
    accentMix: ["british"],
    intro:
      "You will hear the coordinator of a conference venue giving an orientation briefing to delegates at the start of a training forum. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "yvette", name: "Yvette", role: "venue coordinator at the Hartfield Conference Centre", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "yvette", text: "Morning, everyone, and welcome to the Hartfield Conference Centre — you're here for the office managers' forum, and I'm Yvette, the venue coordinator. Five minutes of housekeeping now, and then I'll get out of your way." },
      { id: "s2", speakerId: "yvette", text: "You came in through the entrance foyer, top left of your plan, and most of you have badges already from the desks ahead of me, the top middle. If your name's wrong, the helpdesk can reprint one in about a minute — don't suffer in silence." },
      { id: "s3", speakerId: "yvette", text: "Through to the right of the foyer is the catering lounge, top right on the plan — that's where coffee lives, and lunch too, and I'll come back to lunch." },
      { id: "s4", speakerId: "yvette", text: "Now the middle of the building. Straight through from the foyer you reach the central atrium, with its glass roof and the fountain in the middle — the fountain is the official meeting point if your group gets separated." },
      { id: "s5", speakerId: "yvette", text: "Face the fountain from the foyer side and here's your left and your right. On your right is the exhibition hall — forty-two supplier stands this morning, and the coffee sponsor is giving away proper ceramic mugs, which I can recommend." },
      { id: "s6", speakerId: "yvette", text: "On your left, mirroring it, is the business centre: printers, a bank of quiet desks and the only colour photocopier in the building, which I gather is something of a celebrity." },
      { id: "s7", speakerId: "yvette", text: "Down in the bottom-left corner of the plan, the four breakout rooms run side by side along the left edge — that's where this afternoon's workshops happen, and room two has the hearing loop if that's useful." },
      { id: "s8", speakerId: "yvette", text: "Straight through behind the fountain, the big double doors open into the main auditorium — nine hundred seats, and the plenary starts there at ten sharp." },
      { id: "s9", speakerId: "yvette", text: "The bottom-right corner, between the auditorium and the fire exit, is the first-aid room. It's staffed all day, and long may you only ever see it from the corridor." },
      { id: "s10", speakerId: "yvette", text: "Two more places, and then I'm done with geography. The cloakroom is in the basement — half a level down the stairs beside the badge desks — and the speakers' lounge is one floor up, so if you're presenting, that's where to rehearse.", pauseAfterMs: 300 },
      { id: "s11", speakerId: "yvette", text: "Lunch, as promised. The buffet is in the catering lounge, and it runs in two sittings — half past twelve and one o'clock — purely so the queue stays civil. You don't book a thing; just turn up at whichever suits you. Dietary needs: the kitchen keeps a list, so come and find me at the desk." },
      { id: "s12", speakerId: "yvette", text: "One last thing on the afternoon workshops: places are first come, first served. There is no sign-up sheet, and you can't reserve a seat by email, however politely you ask — turn up five minutes early and you're in; every room holds thirty." },
      { id: "s13", speakerId: "yvette", text: "That's the building and the day. If anything's unclear, look for the navy jumpers — the whole venue team wears them. Enjoy the forum!" },
    ],
    questions: [
      {
        id: "q1",
        type: "map",
        label: "Questions 1–5",
        instruction: "Look at the plan of the ground floor. Choose the correct letter, A–G, for each numbered room.",
        plan: {
          title: "Hartfield Conference Centre — ground floor",
          caption: "The ground floor — write the correct letter next to each numbered room.",
          grid: [
            [{ room: "Entrance foyer", label: "Entrance" }, { room: "Reception desks" }, { room: "Catering lounge" }],
            [{ room: "Room 1", blank: 1 }, { room: "Central atrium" }, { room: "Room 2", blank: 2 }],
            [{ room: "Room 3", blank: 3 }, { room: "Room 4", blank: 4 }, { room: "Room 5", blank: 5 }],
          ],
        },
        options: [
          { letter: "A", text: "the exhibition hall" },
          { letter: "B", text: "the main auditorium" },
          { letter: "C", text: "the business centre" },
          { letter: "D", text: "the breakout rooms" },
          { letter: "E", text: "the first-aid room" },
          { letter: "F", text: "the cloakroom" },
          { letter: "G", text: "the speakers' lounge" },
        ],
        correct: ["A", "C", "D", "B", "E"],
        meta: {
          skills: ["direction-language", "detail", "paraphrase"],
          keywords: ["exhibition hall", "business centre", "main auditorium", "breakout rooms", "first-aid room", "cloakroom", "speakers' lounge"],
          trap: {
            family: "mention-lure",
            lure: ["cloakroom", "speakers' lounge"],
            note: "The cloakroom is half a level below reception and the speakers' lounge is a floor up — both are described in detail but neither sits on this ground-floor plan, so neither letter answers a numbered room.",
          },
          explanation:
            "Work round the fountain: the exhibition hall stands on your right as you face the fountain from the foyer side, the business centre mirrors it on your left, the breakout rooms run along the bottom-left edge, the main auditorium lies straight through the double doors behind the fountain, and the first-aid room is tucked into the bottom-right corner beside the fire exit.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Yvette say about the afternoon workshops?",
        options: [
          "Places must be reserved by email in advance",
          "Delegates can simply turn up on the day",
          "Each delegate must choose two workshops",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["first come, first served", "no sign-up sheet", "reserve a seat by email"],
          trap: {
            family: "negation",
            lure: ["reserve a seat by email"],
            note: "Reserving by email is exactly what you can't do — the rooms are first come, first served, with no sign-up sheet at all, and turning up five minutes early is the only strategy.",
          },
          explanation:
            "Yvette states that workshop places are first come, first served, that no sign-up sheet exists, and that reserving a seat by email is impossible however politely you ask. Turning up five minutes early is the only plan she offers, and nobody is asked to pick two workshops.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What arrangement has been made for lunch?",
        options: [
          "It is served in two sittings in the catering lounge",
          "It must be pre-ordered at the badge desks",
          "It is held among the exhibition stands",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "numbers"],
          keywords: ["two sittings", "buffet", "half past twelve"],
          explanation:
            "The buffet runs in the catering lounge in two sittings, half past twelve and one o'clock, expressly to keep the queue civil, and nothing needs booking in advance. Pre-ordering is never mentioned, and the exhibition hall is for supplier stands rather than lunch tables.",
        },
      },
    ],
    transcriptNote:
      "The plan is best tracked from the fountain: exhibition hall on the right, business centre on the left, breakout rooms along the bottom-left edge, auditorium straight through the middle, first aid in the bottom-right corner. The cloakroom and the speakers' lounge exist but never on this floor, and lunch runs in two sittings without any booking.",
    source: BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 7. A talk at a wildlife rescue centre
  // -------------------------------------------------------------------------
  {
    slug: "ielts-lb-p2-wildlife-rescue",
    title: "A talk at a wildlife rescue centre",
    part: 2,
    difficulty: 2,
    estimatedMinutes: 6,
    topic: "science",
    accentMix: ["australian"],
    intro:
      "You will hear a volunteer coordinator at a wildlife rescue centre giving a talk to visitors about how injured native animals are cared for. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "kirsty", name: "Kirsty", role: "volunteer coordinator at the Bluegum Wildlife Rescue Centre", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "kirsty", text: "G'day, everyone, and welcome to Bluegum — the rescue centre, not the gum tree, though there are plenty of those about. I'm Kirsty, the volunteer coordinator, and this morning I'll walk you through what happens from the moment a worried phone call comes in to the day an animal goes home." },
      { id: "s2", speakerId: "kirsty", text: "We take in around nine hundred animals a year — possums, blue-tongue lizards, magpies, the odd flying fox — and almost all of them arrive the same way: someone finds a creature in trouble and drives it to us." },
      { id: "s3", speakerId: "kirsty", text: "That first step matters more than people realise. The animal should travel in a darkened box — a cardboard box with a towel draped over it is perfect. Dark and quiet keeps shock down, whereas a scared possum in a bright open bucket does itself real harm." },
      { id: "s4", speakerId: "kirsty", text: "On arrival, one of our vets makes an immediate assessment: weight, temperature, a look in the mouth, a feel of the wings or the legs. From that assessment we know whether we're nursing a patient that needs surgery tonight or one that simply needs a feed and a long sleep." },
      { id: "s5", speakerId: "kirsty", text: "Patients then go through to the recovery ward, which is kept deliberately quiet — no visitors, no noise, low light. Wild animals rest best when nothing is watching them, so it's the opposite of a petting zoo, and quite deliberately so." },
      { id: "s6", speakerId: "kirsty", text: "Once an animal is feeding well and moving properly, it moves outdoors to the pre-release enclosure — a big netted run where it rebuilds its muscles and practises hunting and foraging without an audience." },
      { id: "s7", speakerId: "kirsty", text: "Then comes my favourite rule at Bluegum: every animal goes back to the exact spot it was found. A possum released in the wrong patch of bush cannot find its own nest trees, so our rescuers keep careful notes of every pickup address.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "kirsty", text: "Now, why do animals end up here at all? Let me give you the honest league table. Possums, our most frequent patients, are nearly always cat victims — a cat's mouth is one of the most dangerous places in the bush, I'm sorry to say." },
      { id: "s9", speakerId: "kirsty", text: "Blue-tongue lizards are the sunbathers: they lie on warm roads at dusk and get clipped by cars in numbers that still surprise me." },
      { id: "s10", speakerId: "kirsty", text: "Flying foxes mostly arrive tangled in loose backyard netting thrown over fruit trees. If you net a tree at home, pull it tight — a taut net they can see, a floppy one they can't." },
      { id: "s11", speakerId: "kirsty", text: "And magpies? Nine times out of ten it's glass. They see the sky reflected in a big window and fly straight into it. Garden chemicals bring in a few birds every spring, mind you, but glass is the magpie story." },
      { id: "s12", speakerId: "kirsty", text: "That's the hospital from my side of the fence. If you'd like to be one of the people holding the boxes, volunteer intake opens in September — grab a leaflet on your way out. Thanks for listening!" },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart",
        label: "Questions 1–5",
        instruction: "Complete the flowchart below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "From rescue call to release — a native animal's stay at Bluegum" }],
          [{ kind: "text", text: "The finder transports the animal in a darkened " }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "A vet gives the new arrival an immediate " }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "The recovery ward is kept deliberately " }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Stronger animals move out to the pre-release " }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "↓" }],
          [{ kind: "text", text: "Every animal is returned to the exact " }, { kind: "blank", no: 5 }, { kind: "text", text: " where it was found" }],
        ],
        blanks: [
          { no: 1, answer: "box", alternatives: [], numbers: false },
          { no: 2, answer: "assessment", alternatives: [], numbers: false },
          { no: 3, answer: "quiet", alternatives: [], numbers: false },
          { no: 4, answer: "enclosure", alternatives: [], numbers: false },
          { no: 5, answer: "spot", alternatives: [], numbers: false },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "paraphrase"],
          keywords: ["darkened box", "immediate assessment", "deliberately quiet", "pre-release enclosure", "exact spot"],
          explanation:
            "The five steps follow the animal's stay in order: travel in a darkened box, an immediate assessment by the vet on arrival, a recovery ward that is deliberately quiet, then the pre-release enclosure for rebuilding muscles, and finally release at the exact spot where the animal was first found.",
        },
      },
      {
        id: "q2",
        type: "matching",
        label: "Questions 6–9",
        instruction: "Match each animal with the cause of injury that most often brings it to the centre. Choose the correct letter, A–E.",
        items: [
          "6 possums",
          "7 blue-tongue lizards",
          "8 flying foxes",
          "9 magpies",
        ],
        options: [
          "collisions with cars",
          "loose netting over fruit trees",
          "attacks by cats",
          "poisoning by garden chemicals",
          "flying into glass",
        ],
        correct: [2, 0, 1, 4],
        meta: {
          skills: ["paraphrase", "detail", "gist"],
          keywords: ["cat victims", "clipped by cars", "tangled in loose backyard netting", "fly straight into it", "garden chemicals"],
          trap: {
            family: "mention-lure",
            lure: ["garden chemicals"],
            note: "Garden chemicals genuinely poison a few birds every spring, but Kirsty names glass as the magpie story — the chemicals letter is the spare.",
          },
          explanation:
            "The league table runs like this: possums are nearly always cat victims, blue-tongue lizards sunbathe on warm roads and get clipped by cars, flying foxes arrive tangled in loose backyard netting over fruit trees, and magpies mostly fly straight into glass that reflects the sky. Garden chemicals appear only as a spring aside.",
        },
      },
    ],
    transcriptNote:
      "The flowchart tracks the animal's journey — darkened box, immediate assessment, deliberately quiet ward, pre-release enclosure, exact spot — while the matching depends on the small causes: cat victims, clipped by cars, tangled in netting, and glass. Garden chemicals are a real but minor story.",
    source: BANK_SOURCE_NOTE,
  },
];
