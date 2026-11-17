/**
 * Academic passage library G (PROMPT 54 question-bank expansion, batch G).
 *
 * Eight further original Academic passages spread across the three
 * sections and the unified topic domains, each with a complete question
 * set, per-item evidence, explanations, why-wrong notes, designed traps
 * and a vocabulary glossary. No specialist knowledge is assumed or
 * required. Nothing here is official IELTS examination content; all
 * passages are TalkSy original practice material in the style of the test.
 *
 *   ielts-rb-ac-time-zones    — history of timekeeping, Section 2, advanced (d4)
 *   ielts-rb-ac-honeybees     — animal behaviour,       Section 1, standard (d3)
 *   ielts-rb-ac-sharing       — economics,              Section 3, advanced (d4)
 *   ielts-rb-ac-digital-archives — archival science,    Section 3, advanced (d4)
 *   ielts-rb-ac-language-loss — linguistics,            Section 3, advanced (d5)
 *   ielts-rb-ac-four-day-week — work psychology,        Section 2, standard (d3)
 *   ielts-rb-ac-lightning     — atmospheric physics,    Section 2, advanced (d4)
 *   ielts-rb-ac-spices        — economic history,       Section 1, standard (d3)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acadGExercises: ReadingExercise[] = [
  {
    slug: "ielts-rb-ac-time-zones",
    title: "A brief history of time zones",
    variant: "academic",
    section: 2,
    subject: "history of timekeeping",
    topic: "history",
    difficulty: 4,
    estimatedMinutes: 18,
    objective: "Follow the shift from local solar time to a standardised global grid, and keep the history of zones apart from the separate invention of daylight saving.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "A brief history of time zones",
        paragraphs: [
          "For most of human history, the question 'what time is it?' had a strictly local answer. Each town kept its own clocks, and where there were no clocks, the day was run by the church bell and the sun. Noon was the moment the sun stood highest over the market square, and because the sun reaches that moment four minutes later for every degree of longitude travelled west, neighbouring towns disagreed by a few minutes that almost nobody minded. A traveller who walked from one village to the next might reset a watch on arrival and consider the errand beneath mention. The differences were small, personal and, to everyone concerned, obviously correct.",
          "Railways abolished that tolerance. A train running from east to west passes through a dozen local noons in a single afternoon, and a timetable that had to declare which town's time it used would have been unreadable. The companies therefore imposed one time on the whole line. In Britain, where the network radiated from London, the great companies simply announced that their stations would keep London time, and 'railway time' spread from the booking office outward until municipal clocks followed it. In North America the problem was harder: the continent spans nearly sixty degrees, and by the 1870s a large city might recognise three times at once — the city's own, the railroad's and occasionally a second railroad's — while timetables were printed with a footnote explaining which time they meant.",
          "A Canadian railway engineer, Sandford Fleming, proposed the idea that finally settled the matter: abandon the local noons altogether and divide the planet into twenty-four zones, each an hour wide, all referenced to a single meridian. Delegates from two dozen countries debated the scheme at a conference held in Washington in 1884, and there they also chose the line running through the Greenwich observatory as the zero meridian, partly because so much of the world's shipping already navigated by it. The idealised grid — one hour for every fifteen degrees — was a compromise between astronomy and administration, and almost no country has kept it in its pure form since.",
          "Adoption, in any case, was slow. The zone map of the world was not complete until well into the twentieth century; some jurisdictions clung to their own solar noon for decades, and France, for instance, only stopped describing its clocks as Paris time in 1911. Where the change touched daily life it met a mixture of confusion and satire, and one American city reportedly debated for years whether its shops should open on city time or railroad time. Law, as so often, trailed practice: standard time reached the British statute book only in 1880, and in the United States an act of 1918 was needed to untangle the zones from the companies that had invented them.",
          "Daylight saving, the clock's most contested habit, is a separate invention. The argument usually credited to a British builder, William Willett, was that shifting the clocks forward in summer would extend usable evening daylight and spare the candles and coal that dark mornings wasted. Wartime governments adopted the idea for its economies, and it spread after the conflicts ended, though several countries later abandoned it and some returned. Notice what such a change does not touch: moving the hands does not move the zone. A country on summer time has not changed its zone; it has, in effect, borrowed a slice of the neighbouring zone's clock for the season.",
          "The finished grid is full of exceptions, and the exceptions are the point. China, spanning what would be five natural zones, runs on a single time. India keeps a half-hour offset; Nepal, five hours and three-quarters. Newfoundland sits half an hour ahead of its mainland, and a few island states hold quarter-hour positions of their own. Zones bend around borders, dodge the open sea in one place and dive beneath it in another, and occasionally follow a peninsula rather than the meridian behind it. None of this is natural law. Time zones are administrative choices — conventions that trade the sun's honesty for the convenience of running a continent on one clock — and the trade has been so successful that we mistake it for the sky's own arrangement.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction:
          "Choose the correct heading for paragraphs A–F from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph A",
            correct: 0,
            meta: {
              skills: ["skimming", "paraphrase", "structure"],
              evidence: [{ block: 0, paragraph: 0, quote: "the day was run by the church bell and the sun" }],
              explanation:
                "Paragraph A paints the world before standard time: each town keeps its own clocks, noon belongs to the market square, and the minutes between neighbours are tolerated as obviously correct. Heading i ('Noon belongs to each town') compresses exactly that local arrangement.",
            },
          },
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 1, quote: "A train running from east to west passes through a dozen local noons in a single afternoon" }],
              explanation:
                "Paragraph B is built around railways destroying the old tolerance: companies impose one time on the whole line, and 'railway time' spreads until municipal clocks follow. Heading ii ('Iron roads make one time compulsory') paraphrases that imposition without echoing its words.",
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            lure: 6,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "abandon the local noons altogether and divide the planet into twenty-four zones" }],
              explanation:
                "Paragraph C carries the intellectual fix: Fleming's proposal of twenty-four zones and the Washington conference's choice of Greenwich. Heading iii ('An engineer's grid and a conference's choice') names both halves of the paragraph.",
              trap: {
                family: "mention-lure",
                note: "The extra heading borrows 'observatory' from paragraph C, but no instrument of the observatory is ever described — vocabulary overlap, not the paragraph's job.",
              },
              whyWrong: ["vii: the Greenwich observatory is mentioned as an address for the zero line, not as a maker of precision instruments — the paragraph is about the proposal and the vote."],
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 3, quote: "Law, as so often, trailed practice" }],
              explanation:
                "Paragraph D is organised around delay: the grid spread slowly, cities argued over which time shops should keep, and statutes arrived years after the companies had settled the practice. Heading iv ('Law and habit catch up slowly') is the paragraph in four words.",
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "moving the hands does not move the zone" }],
              explanation:
                "Paragraph E introduces daylight saving as a separate invention and insists it changes the label on the clock face, not the zone beneath it. Heading v ('Borrowing an hour of the next zone') paraphrases the closing image of a country borrowing a slice of its neighbour's clock.",
            },
          },
          {
            text: "Paragraph F",
            correct: 5,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "The finished grid is full of exceptions, and the exceptions are the point" }],
              explanation:
                "Paragraph F tours the finished grid's exceptions — China's single time, Nepal's quarter hours, zones that bend around borders — and closes by calling zones administrative choices. Heading vi ('A grid full of exceptions') is its own opening sentence in miniature.",
            },
          },
        ],
        options: [
          "Noon belongs to each town",
          "Iron roads make one time compulsory",
          "An engineer's grid and a conference's choice",
          "Law and habit catch up slowly",
          "Borrowing an hour of the next zone",
          "A grid full of exceptions",
          "Precision instruments for the observatory",
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 7–11",
        instruction:
          "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Before railways, a town's noon was fixed by the sun's highest point over that town.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "Noon was the moment the sun stood highest over the market square" }],
              explanation:
                "Paragraph A defines noon exactly this way: the moment the sun stood highest over the market square, with every town disagreeing by minutes for that reason. The statement is a direct paraphrase of the local arrangement, so it is TRUE.",
            },
          },
          {
            text: "The world's zone map was essentially complete within twenty years of the 1884 conference.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "The zone map of the world was not complete until well into the twentieth century" }],
              explanation:
                "Paragraph D states that completion came well into the twentieth century, and twenty years after 1884 is 1904. A dated, located contradiction makes the statement FALSE, even though the dates sit close together.",
              trap: {
                family: "boundary",
                note: "The 1884 conference and the slow completion are near neighbours in the text; candidates who cannot find the exact sentence drift to Not Given.",
              },
              whyWrong: ["NOT GIVEN: the passage does give the timing — 'not complete until well into the twentieth century' — so the information exists and contradicts the statement."],
            },
          },
          {
            text: "Greenwich was selected as the zero meridian by a unanimous vote.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "chose the line running through the Greenwich observatory as the zero meridian, partly because so much of the world's shipping already navigated by it" }],
              explanation:
                "Paragraph C says delegates chose Greenwich and explains why — existing shipping charts — but it never reports the margin of the vote. Silence about unanimity means the statement is untested by the text, so it is NOT GIVEN.",
              trap: {
                family: "boundary",
                note: "'Delegates debated the scheme' sounds contentious, which tempts a FALSE; but no vote count is given, so the text cannot confirm or deny unanimity.",
              },
              whyWrong: ["FALSE: nothing in the passage states or contradicts a unanimous vote — the margin is simply never reported."],
            },
          },
          {
            text: "Daylight saving was originally proposed as a wartime fuel-saving measure.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [
                { block: 0, paragraph: 4, quote: "The argument usually credited to a British builder, William Willett, was that shifting the clocks forward in summer would extend usable evening daylight" },
                { block: 0, paragraph: 4, quote: "Wartime governments adopted the idea for its economies" },
              ],
              explanation:
                "The proposal and the wartime motive belong to different moments: Willett proposed the shift to extend usable evening daylight, and only later did wartime governments adopt it for its economies. The statement merges the adoption's motive into the proposal, which contradicts the sequence.",
              trap: {
                family: "mention-lure",
                note: "Wartime economies appear in the same paragraph, but as the reason for adoption, not for the original proposal.",
              },
              whyWrong: ["TRUE: both halves of the statement exist in the passage, yet the passage keeps them apart — the original argument was evening daylight, and the fuel claim arrived with wartime governments."],
            },
          },
          {
            text: "Nepal keeps its clocks five hours and forty-five minutes ahead of Greenwich.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "inference", "vocabulary"],
              evidence: [{ block: 0, paragraph: 5, quote: "India keeps a half-hour offset; Nepal, five hours and three-quarters" }],
              explanation:
                "Paragraph F gives Nepal's position as five hours and three-quarters, and three-quarters of an hour is forty-five minutes. The statement converts the fraction into minutes, so agreeing with it is a small piece of arithmetic plus a scan, and the answer is TRUE.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "meridian", partOfSpeech: "noun", definition: "an imaginary line running from pole to pole; the 1884 conference chose the Greenwich meridian as the zero line for the world's zones." },
      { word: "longitude", partOfSpeech: "noun", definition: "distance east or west of the zero line, measured in degrees; the sun's noon arrives four minutes later for each degree of longitude travelled west." },
      { word: "observatory", partOfSpeech: "noun", definition: "a place where astronomers watch and record the sky; the zero meridian runs through the Greenwich observatory." },
      { word: "statute", partOfSpeech: "noun", definition: "a law passed by a parliament; standard time reached the British statute book in 1880, long after the railways had adopted it." },
      { word: "satire", partOfSpeech: "noun", definition: "writing that mocks something to expose it; the change to standard time was greeted with confusion and satire." },
      { word: "offset", partOfSpeech: "noun", definition: "the difference between a zone's time and the time on the zero line; India keeps a half-hour offset." },
    ],
    passageNote:
      "The passage runs on a timeline: local noons (A), railways (B), the 1884 conference (C), slow legal adoption (D), daylight saving as a separate idea (E), today's grid of exceptions (F). Several questions turn on keeping those dates and motives apart.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-honeybees",
    title: "How honeybees find their way home",
    variant: "academic",
    section: 1,
    subject: "animal behaviour",
    topic: "science",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Trace a two-system explanation of bee navigation — vector navigation by the sun compass, then landmark guidance near the hive — and its reporting through the waggle dance.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "How honeybees find their way home",
        paragraphs: [
          "A honeybee leaving its hive to forage seldom travels straight. It zigzags among the flowers, drifts along a hedgerow, doubles back at a field edge, and may spend the better part of an hour covering a route that looks, drawn on a map, like spilled thread. Yet the moment it decides to go home, it turns and flies there almost directly. For an insect with a brain smaller than a grass seed, and no map at all, this is a navigational performance worth explaining, and explaining it has kept biologists busy for the better part of a century.",
          "The first part of the answer is a running log. Studies suggest that a foraging bee continuously registers two quantities on every leg of its journey: the direction it is travelling in, and the distance covered. Direction is measured against the sun's position, then corrected by the insect's internal clock for the sun's own drift across the sky. The two quantities are continually combined into a single home vector — the straight line back to the hive. Biologists call the underlying trick path integration, and it is the same dead reckoning that ocean sailors used before satellites, performed by an insect at a flowerbed.",
          "The sun compass works even when the sun itself is hidden. The pattern of polarised light in a patch of blue sky still carries the sun's bearing, and bees are among the insects that can read it. When experimenters deceive a bee with mirrors or delayed light, the insect initially dances and flies as if the false sun were real, then corrects as its clock catches up — evidence that the compass is a calibrated instrument, tuned by experience, rather than a fixed instinct.",
          "Vector navigation, however, cannot tell a bee which hedgerow is which. Near home, a second system takes over: landmarks. Bees memorise the terrain around the hive — a line of trees, a gap in a wall, the shape of a field — and use these features both to confirm a route and to pinpoint the entrance. The two systems argue in instructive ways. In one classic experiment, the hive was moved overnight while the foragers slept, and the bees flew straight to the old position the next morning, as though the vector and the memory of the landscape had voted, and the landscape lost.",
          "Further displacement experiments refined the picture. When researchers catch foragers at a feeder, drive them for kilometres in the dark, and release them at a site they have never seen, the bees first fly a course that would have been correct from the feeder — following the home vector as though the journey had never been interrupted. Only when familiar terrain appears do they switch to landmark guidance. The suggestion is that the vector is the default and the map is the override, rather than the other way round.",
          "Back at the hive, navigation turns into communication. A returning forager performs the waggle dance on the vertical face of the comb, and the angle of the waggle run, measured from straight up, encodes the direction of the food relative to the sun: straight up means toward the sun, sixty degrees to the right of vertical means sixty degrees sunward of rightward. The duration of the run encodes distance. Recruits read the dance, leave the hive and fly the bearing it describes, which is why the dance is fairly described as a message made of navigation.",
          "Much remains uncertain. Nobody fully understands how a brain the size of a sand grain adds vectors, stores landmark panoramas and switches between systems, though studies of the mushroom bodies, the insects' learning centres, hint at where the work is done. Nor is the bee unique: desert ants and wolf spiders navigate by similar means on far shorter legs. What the bee has, and the others mostly lack, is a public way of reporting the route — which is why, of all the navigators in a garden, it is the one that dances.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart-completion",
        label: "Questions 1–6",
        instruction: "Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Outward journey — the bee registers the" }, { kind: "blank", no: 1 }, { kind: "text", text: "it travels in, and the distance covered." }],
          [{ kind: "text", text: "The two quantities are combined into a homing" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "Direction is judged against the position of the" }, { kind: "blank", no: 3 }, { kind: "text", text: ", corrected for its drift across the sky." }],
          [{ kind: "text", text: "When the sun is hidden, orientation continues by patterns of" }, { kind: "blank", no: 4 }, { kind: "text", text: "light." }],
          [{ kind: "text", text: "Near the hive, guidance passes to familiar" }, { kind: "blank", no: 5 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "The route is then reported to others in the" }, { kind: "blank", no: 6 }, { kind: "text", text: "dance." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "direction",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "the direction it is travelling in, and the distance covered" }],
              explanation:
                "Paragraph B lists the two logged quantities: the direction it is travelling in, and the distance covered. The flow-chart's first gap asks for the first of the pair, so the answer is direction.",
            },
          },
          {
            no: 2,
            answer: "vector",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "continually combined into a single home vector" }],
              explanation:
                "Paragraph B names the combined quantity a home vector — the straight line back to the hive. The flow-chart calls it a homing vector, so the missing noun is the passage's own word, vector.",
            },
          },
          {
            no: 3,
            answer: "sun",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Direction is measured against the sun's position, then corrected by the insect's internal clock for the sun's own drift across the sky" }],
              explanation:
                "Paragraph B states that direction is measured against the sun's position and corrected for the sun's drift. The flow-chart keeps the correction clause, so the missing celestial reference is the sun.",
            },
          },
          {
            no: 4,
            answer: "polarised",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "The pattern of polarised light in a patch of blue sky still carries the sun's bearing" }],
              explanation:
                "Paragraph C explains that when the sun is hidden, the pattern of polarised light in blue sky still carries its bearing. The gap before 'light' takes the passage's adjective, polarised.",
            },
          },
          {
            no: 5,
            answer: "landmarks",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "Near home, a second system takes over: landmarks" }],
              explanation:
                "Paragraph D hands guidance over to landmarks near the hive — a second system taking over from the vector. The flow-chart's fifth step is that handover, so the answer is landmarks.",
            },
          },
          {
            no: 6,
            answer: "waggle",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 5, quote: "A returning forager performs the waggle dance on the vertical face of the comb" }],
              explanation:
                "Paragraph F names the reporting behaviour: the waggle dance, performed on the vertical face of the comb. The flow-chart's final step asks for the dance's name, and waggle is the passage's own adjective.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 7–9",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "In the displacement experiments, bees released at an unfamiliar site initially",
            options: [
              "flew the course that would have been correct from the feeder",
              "circled the release site until the sun reappeared",
              "headed for the nearest flowers to refuel",
              "refused to fly in unfamiliar country",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "the bees first fly a course that would have been correct from the feeder" }],
              explanation:
                "Paragraph E reports that displaced bees first follow the home vector as though the journey had never been interrupted — a course correct from the feeder, not from the release site. The sun appears throughout the passage, but no waiting behaviour is ever described.",
              trap: {
                family: "mention-lure",
                note: "The sun is the passage's most discussed object; option B attaches it to behaviour the experiment never reports.",
              },
              whyWrong: [
                "B: the compass works even under cloud through polarised light, and the experiment describes immediate flight, not waiting.",
                "C: no foraging stop at flowers is reported on the homing leg.",
                "D: the bees flew at once — along the wrong baseline — which is the paragraph's whole point.",
              ],
            },
          },
          {
            stem: "According to the passage, the angle of the waggle run tells other bees",
            options: [
              "the direction of the food relative to the sun",
              "the distance to the food",
              "the richness of the nectar source",
              "how many bees have already been recruited",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                { block: 0, paragraph: 5, quote: "the angle of the waggle run, measured from straight up, encodes the direction of the food relative to the sun" },
                { block: 0, paragraph: 5, quote: "The duration of the run encodes distance" },
              ],
              explanation:
                "Paragraph F assigns each feature its own job: the angle encodes direction relative to the sun, while the duration of the same run encodes distance. The correct option keeps the angle with direction; the lure swaps the two channels.",
              trap: {
                family: "mention-lure",
                note: "Distance genuinely is in the dance — but in its duration, not its angle.",
              },
              whyWrong: [
                "B: distance is carried by the run's duration, so attributing it to the angle crosses two wires.",
                "C: nectar richness is never said to be encoded anywhere in the dance.",
                "D: the passage never describes a count of recruits in the dance.",
              ],
            },
          },
          {
            stem: "The final paragraph suggests that bee navigation",
            options: [
              "is not yet completely understood",
              "was fully explained early in the last century",
              "is wholly different from ant navigation",
              "no longer interests researchers",
            ],
            correct: 0,
            meta: {
              skills: ["inference", "opinion"],
              evidence: [{ block: 0, paragraph: 6, quote: "Nobody fully understands how a brain the size of a sand grain adds vectors, stores landmark panoramas and switches between systems" }],
              explanation:
                "The closing paragraph opens with 'Much remains uncertain' and states that nobody fully understands the brainwork behind the navigation. The suggested reading is open questions, not a closed file, which the other options all deny.",
              whyWrong: [
                "B: the passage says explaining it has kept biologists busy for a century, and that uncertainty remains — the opposite of an early solution.",
                "C: the paragraph says desert ants navigate by similar means, so the difference is of degree, not kind.",
                "D: studies of the mushroom bodies and the widening questions show active interest, not abandonment.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "foragers", partOfSpeech: "noun (plural)", definition: "animals that go out to find food; bee foragers are the ones caught at feeders in the displacement experiments." },
      { word: "vector", partOfSpeech: "noun", definition: "a quantity with both size and direction; the home vector is the straight line back to the hive." },
      { word: "polarised", partOfSpeech: "adjective", definition: "describing light whose waves vibrate in one plane; the pattern of polarised light in blue sky carries the sun's bearing." },
      { word: "displacement", partOfSpeech: "noun", definition: "the act of moving an animal away from where it thinks it is; displacement experiments release bees at unfamiliar sites." },
      { word: "recruits", partOfSpeech: "noun (plural)", definition: "bees that follow a dancer's instructions and then fly out to the food." },
      { word: "comb", partOfSpeech: "noun", definition: "the bees' wax structure of six-sided cells; the waggle dance is performed on its vertical face." },
    ],
    passageNote:
      "The passage moves from mechanism to experiment to communication: the running log and sun compass (B–C), landmarks and displacement (D–E), the waggle dance (F). The flow-chart walks that spine in order, and the multiple choice lives in paragraphs E, F and G.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-sharing",
    title: "The sharing economy grows up",
    variant: "academic",
    section: 3,
    subject: "economics",
    topic: "economics",
    difficulty: 4,
    estimatedMinutes: 19,
    objective: "Follow an argument about a sector maturing: its origins after the 2008 crash, the trust machinery of ratings, the drift away from the founding ideals, and the quiet remainder that still practises them.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "The sharing economy grows up",
        paragraphs: [
          "In 2008 two things happened at once. A financial crash taught a generation to distrust large institutions, and the smartphone put a marketplace in every pocket. Out of that coincidence grew what journalists christened the sharing economy — a loose label for platforms that let private people rent, lend, swap and drive for one another, with a company standing in the middle taking a cut. Its founding promise was plain: ownership would give way to access, idle assets would be put to work, and strangers would learn to trust one another again. For a few years the promise was repeated like a creed, by its believers and its investors alike.",
          "The platforms' first achievement was to manufacture that trust at scale. Two-sided markets live or die on reputation, so every ride and every stay ends with mutual ratings, and a stranger with a good score is treated as safely as a friend. Venture capital poured into the model, for the assets — cars, spare rooms, spare hours — were supplied by the users, and the companies themselves owned little more than software, a payment system and a brand.",
          "The maturing sector, however, has grown away from its founding story. In the best-known category, short-term rentals, the typical host is no longer a resident sharing a spare room: studies in several cities suggest that a large share of listings is run by operators with several properties, for whom the 'spare room' is a business. Residents of tourist districts complain of emptied neighbourhoods, and the studies that link the spread of rentals to rising local rents are contested but persistent.",
          "Regulators have answered with tools fitted to the case: caps on the number of letting nights, licensing of hosts, data-sharing agreements with the platforms, and in a few cities outright bans on second-home letting. The platforms have fought some rules in court, negotiated others, and discovered that a warm brand does not exempt a large company from being treated like one.",
          "A second quarrel concerns the people who supply the labour. Couriers and riders are told they are free to work when they like; the platforms classify them as independent contractors. In several jurisdictions, courts have disagreed, ruling on their employment status and finding that the work is directed, scheduled and supervised in ways that make them employees, with the pensions, holidays and minimum pay that follow. The platforms warn that the flexibility workers say they value would be the first casualty of such rulings.",
          "Even the vocabulary has aged. 'Sharing' now covers rentals; the sector has consolidated into a handful of listed companies whose valuations owe more to logistics than to generosity; and the engineers who once promised to disintermediate commerce have built some of the most intermediated businesses in it. The label kept its warmth while the substance quietly moved elsewhere.",
          "And yet the original idea is not dead; it has retreated to where money was never the point. Tool libraries lend drills and ladders to neighbours at no charge. Car clubs, time banks and repair cafés exchange favours, hours and skills. These exchanges are small, mostly local and mostly volunteer-run, and they are closer in spirit to the founding literature than anything the apps that kept the name have produced.",
          "The sharing economy, in other words, has grown up rather than grown out. It is neither the utopia its evangelists promised nor the scam its critics assumed: it is a mixed economy of convenience in which some platforms behave like utilities, some like landlords, and a remainder — quieter, cheaper, kinder — still does what the label actually says.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "yes-no-not-given",
        label: "Questions 1–5",
        instruction:
          "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "The sharing economy emerged from a coincidence of economic and technological change.",
            answer: "YES",
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "A financial crash taught a generation to distrust large institutions, and the smartphone put a marketplace in every pocket" }],
              explanation:
                "The opening paragraph explicitly names the double origin: a crash that soured trust in institutions and a phone that carried a marketplace. The writer calls the sector the child of that coincidence, so the statement agrees with the stated view.",
            },
          },
          {
            text: "The writer regards reputation systems as a means of creating trust at scale.",
            answer: "YES",
            meta: {
              skills: ["opinion", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "The platforms' first achievement was to manufacture that trust at scale" }],
              explanation:
                "Paragraph B credits the platforms with manufacturing trust at scale through mutual ratings, under which a well-scored stranger is treated as safely as a friend. The writer's own verb 'manufacture' matches the statement's 'creating', so it is YES.",
            },
          },
          {
            text: "In the writer's view, the sector has stayed faithful to its founding ideals.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [
                { block: 0, paragraph: 2, quote: "The maturing sector, however, has grown away from its founding story" },
                { block: 0, paragraph: 5, quote: "The label kept its warmth while the substance quietly moved elsewhere" },
              ],
              explanation:
                "The writer states the opposite twice: the sector has grown away from its founding story, and the label kept its warmth while the substance moved elsewhere. Professional hosts, consolidation and intermediation are given as the evidence of the drift.",
              trap: {
                family: "boundary",
                note: "The phrase 'founding promise was plain' in paragraph A can sound like continuing faithfulness; the verdict question asks about the matured sector, not the founding moment.",
              },
              whyWrong: ["NOT GIVEN: the writer takes an explicit position — 'grown away from its founding story' — so the view exists and contradicts the statement."],
            },
          },
          {
            text: "The writer expects most platforms eventually to be run as public utilities.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 7, quote: "some platforms behave like utilities, some like landlords" }],
              explanation:
                "The final paragraph describes how some platforms behave — like utilities, like landlords — but a present-tense comparison is not a prediction about ownership or regulation. The writer says nothing about what will happen to these companies, so the view cannot be established.",
              trap: {
                family: "boundary",
                note: "'Behave like utilities' describes conduct, not future legal status; description drifts into prediction only outside the text.",
              },
              whyWrong: ["NO: nothing in the passage denies the expectation either — the writer simply makes no claim about the platforms' eventual ownership."],
            },
          },
          {
            text: "The writer accepts that some practices still honour the original ideal.",
            answer: "YES",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [
                { block: 0, paragraph: 6, quote: "it has retreated to where money was never the point" },
                { block: 0, paragraph: 7, quote: "a remainder — quieter, cheaper, kinder — still does what the label actually says" },
              ],
              explanation:
                "Paragraphs G and H carry the writer's qualified endorsement: tool libraries and repair cafés are closer in spirit to the founding literature than the apps, and a remainder still does what the label says. The statement reports that acceptance accurately.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "summary-completion",
        label: "Questions 6–11",
        instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
        wordLimit: 1,
        layout: [
          [
            { kind: "text", text: "The sharing economy took off after a financial crash, when platforms let people 6" },
            { kind: "blank", no: 6 },
            { kind: "text", text: " out their possessions to strangers. Mutual ratings manufactured 7" },
            { kind: "blank", no: 7 },
            { kind: "text", text: " between people who had never met. As the industry matured, listings became businesses run by professional 8" },
            { kind: "blank", no: 8 },
            { kind: "text", text: ", and researchers linked short-term rentals to rising local 9" },
            { kind: "blank", no: 9 },
            { kind: "text", text: ". Courts in several countries have also settled the employment 10" },
            { kind: "blank", no: 10 },
            { kind: "text", text: " of the gig couriers. Yet the writer finds a genuine 11" },
            { kind: "blank", no: 11 },
            { kind: "text", text: " — tool libraries and repair cafés — still practising the original idea." },
          ],
        ],
        blanks: [
          {
            no: 6,
            answer: "rent",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "platforms that let private people rent, lend, swap and drive for one another" }],
              explanation:
                "Paragraph A lists what the platforms let private people do: rent, lend, swap and drive. The summary's 'let people ___ out their possessions' needs the first verb of that list, so the answer is rent.",
            },
          },
          {
            no: 7,
            answer: "trust",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "every ride and every stay ends with mutual ratings" }],
              explanation:
                "Paragraph B is the trust paragraph: mutual ratings manufacture trust at scale, and the founding promise was that strangers would learn to trust one another again. The missing noun after 'manufactured' is trust.",
            },
          },
          {
            no: 8,
            answer: "operators",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "a large share of listings is run by operators with several properties" }],
              explanation:
                "Paragraph C names the new typical host: operators with several properties, for whom the spare room is a business. The summary's 'professional ___' takes the passage's own noun, operators.",
            },
          },
          {
            no: 9,
            answer: "rents",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "the studies that link the spread of rentals to rising local rents" }],
              explanation:
                "Paragraph C reports the contested but persistent studies linking short-term rentals with rising local rents. The summary keeps 'rising local' and needs the noun that follows it in the passage: rents.",
            },
          },
          {
            no: 10,
            answer: "status",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "courts have disagreed, ruling on their employment status and finding that the work is directed, scheduled and supervised" }],
              explanation:
                "Paragraph E is the labour quarrel: courts rule on the couriers' employment status and find the work directed, scheduled and supervised. The summary's 'employment ___' takes the passage's noun, status.",
            },
          },
          {
            no: 11,
            answer: "remainder",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 7, quote: "a remainder — quieter, cheaper, kinder — still does what the label actually says" }],
              explanation:
                "The final paragraph names what survives of the ideal: a remainder that still does what the label says. The summary's 'genuine ___' followed by tool libraries and repair cafés takes that noun.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "idle", partOfSpeech: "adjective", definition: "not in use; the founding promise was that idle assets — cars, spare rooms — would be put to work." },
      { word: "creed", partOfSpeech: "noun", definition: "a set of beliefs held as a matter of faith; the founding promise was repeated like a creed by believers and investors." },
      { word: "jurisdictions", partOfSpeech: "noun (plural)", definition: "areas with their own courts and laws; in several jurisdictions courts have ruled on couriers' employment status." },
      { word: "disintermediate", partOfSpeech: "verb", definition: "to remove the middleman between buyer and seller; the engineers who promised to disintermediate commerce built the most intermediated businesses in it." },
      { word: "consolidated", partOfSpeech: "verb (past)", definition: "combined into fewer, larger units; the sector has consolidated into a handful of listed companies." },
      { word: "evangelists", partOfSpeech: "noun (plural)", definition: "enthusiastic promoters of a cause; the writer rejects both the utopia the evangelists promised and the scam the critics assumed." },
    ],
    passageNote:
      "A writer's-views passage: the Yes/No/Not Given set tests the writer's judgements in paragraphs A, B, C, G and H, while the summary walks the whole arc from the 2008 crash to the quiet remainder. Watch the difference between describing conduct and predicting futures.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-digital-archives",
    title: "Preserving the digital past",
    variant: "academic",
    section: 3,
    subject: "archival science",
    topic: "technology",
    difficulty: 4,
    estimatedMinutes: 18,
    objective: "Understand the three threats to digital records and the profession's answers — refreshment, migration, emulation — plus web archiving, fixity, and the case for preservation as a continuing activity.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "Preserving the digital past",
        paragraphs: [
          "A librarian today can read a clay tablet pressed in Mesopotamia four thousand years ago with no equipment beyond literacy. The equivalent record created last decade — a budget spreadsheet, a thesis, a holiday photograph — may already be harder to open. Digital records do not sit still: they survive only if someone keeps copying them forward, and nearly every account of the field begins with that asymmetry. The clay waits patiently; the bits do not. Preservation, in other words, changed from storing objects to maintaining a process, and most of the profession's new skills follow from that single shift.",
          "Practitioners usually name three separate threats. The first is decay in the media themselves: discs and drives age, and archivists have adopted the phrase bit rot for the quiet corruption that follows when a storage medium fails in pieces. The second is obsolete hardware: a perfectly preserved tape is useless without a reader, and readers stop being manufactured. The third, and the least tractable, is obsolescence of format — the bits survive intact, but no current software can interpret them, so the file has become a message written in a script nobody teaches.",
          "Against the first threat, archives simply keep copying, a routine called refreshment. Against the third, two strategies compete. Under migration, files are periodically converted into whatever formats are current, trading fidelity for readability; each conversion risks small losses that compound over repetitions. Emulation instead writes software that impersonates an obsolete machine, letting the original files run unchanged inside a counterfeit environment — elegant in principle, expensive in maintenance, and a matter of live debate among preservationists, some of whom distrust the counterfeit on principle.",
          "The deeper problem is volume. Born-digital records arrive in floods: email, drafts, data sets, versions of versions. An archive that once selected a few hundred items a year must now appraise millions, and selection has become the hard professional skill — deciding what to keep is harder than keeping it. A fear voiced at many conferences is a future in which everything is nominally preserved and nothing is findable, an archive in name only.",
          "The web is a case of its own. Archiving services send crawlers across public pages and store snapshots, so that a page captured in one month survives its deletion in the next. A snapshot is a record of a moment, not a living copy, and because pages link to pages, the archived fraction is always smaller than the living web it sampled. Librarians who run these collections report a constant race against sites that vanish before they are captured.",
          "Authenticity raises the last question: how do you prove that a file is the file? Archives answer with mathematics. A checksum — a number computed from the file's contents — changes if even one character does, so stored records are re-checked at intervals, a discipline practitioners call fixity. Together with careful cataloguing of provenance, the record of who held the file and when, this lets an archivist assert not only that the record exists but that it has not silently altered.",
          "The stakes are larger than nostalgia. Government records, scientific data and the everyday documentation of ordinary lives are increasingly born digital, and some archivists warn of a digital dark ages in which the late twentieth century becomes less legible than antiquity. The warning is probably overdramatic; the risk beneath it is real. The lesson both sides accept is that preservation is a verb — a continuous obligation, funded and renewed — rather than a vault sealed once and trusted thereafter.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction:
          "The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a contrast between ancient records and digital ones",
            correct: 0,
            lure: 1,
            meta: {
              skills: ["scanning", "structure"],
              evidence: [{ block: 0, paragraph: 0, quote: "The clay waits patiently; the bits do not" }],
              explanation:
                "Paragraph A opens with the librarian reading a clay tablet and the spreadsheet that may already be harder to open, closing on the clay-bits contrast. The ancient-modern comparison is the paragraph's organising image.",
              trap: {
                family: "mention-lure",
                note: "Paragraph B's bits also 'survive intact', but that paragraph is about threats, not about the contrast with clay.",
              },
              whyWrong: ["B: paragraph B's bits survive, but no ancient record appears there — the clay tablet belongs to paragraph A."],
            },
          },
          {
            text: "the routine of copying records into formats that remain readable",
            correct: 2,
            lure: 0,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Under migration, files are periodically converted into whatever formats are current" }],
              explanation:
                "Paragraph C is the strategies paragraph: refreshment copies bits forward, while migration converts files into current formats, trading fidelity for readability. The readable-formats routine is migration, not plain copying.",
              trap: {
                family: "mention-lure",
                note: "Paragraph A also says records survive 'only if someone keeps copying them forward' — copying, yes, but into current formats is paragraph C's migration.",
              },
              whyWrong: ["A: paragraph A's copying is the general obligation; the named routine with format conversion is migration in paragraph C."],
            },
          },
          {
            text: "the difficulty of deciding what deserves to be kept",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "deciding what to keep is harder than keeping it" }],
              explanation:
                "Paragraph D is the volume paragraph: archives that once selected a few hundred items a year must now appraise millions, and selection has become the hard professional skill. The statement's 'deciding what deserves to be kept' paraphrases that judgement.",
            },
          },
          {
            text: "the practice of capturing web pages at a particular moment",
            correct: 4,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "store snapshots, so that a page captured in one month survives its deletion in the next" }],
              explanation:
                "Paragraph E describes the web archiving services: crawlers cross public pages and store snapshots, so a page captured in one month survives its deletion in the next. The statement names exactly that practice.",
            },
          },
          {
            text: "a mathematical check that a file has not been altered",
            correct: 5,
            lure: 2,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "A checksum — a number computed from the file's contents — changes if even one character does" }],
              explanation:
                "Paragraph F is the authenticity paragraph: the checksum computed from a file's contents changes if a single character does, and periodic re-checking is called fixity. That is the mathematical check the statement asks for.",
              trap: {
                family: "mention-lure",
                note: "Paragraph C also involves keeping files unchanged (emulation), but its losses are conversions; the mathematics lives in paragraph F.",
              },
              whyWrong: ["C: emulation preserves the feel of old environments, but no calculation verifying file contents is performed there."],
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F", "G"],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–9",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. Archivists call the quiet corruption of ageing storage media" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "7. Under migration, files are periodically" }, { kind: "blank", no: 7 }, { kind: "text", text: " into whatever formats are current." }],
          [{ kind: "text", text: "8. Web archives hold a" }, { kind: "blank", no: 8 }, { kind: "text", text: " of a page rather than a living copy." }],
          [{ kind: "text", text: "9. A" }, { kind: "blank", no: 9 }, { kind: "text", text: " computed from a file's contents changes if even one character does." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "bit rot",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "archivists have adopted the phrase bit rot for the quiet corruption that follows" }],
              explanation:
                "Paragraph B names the first threat with a coined phrase: bit rot, the quiet corruption that follows when a storage medium fails in pieces. The sentence keeps 'quiet corruption', so the missing term is the phrase itself.",
            },
          },
          {
            no: 7,
            answer: "converted",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Under migration, files are periodically converted into whatever formats are current" }],
              explanation:
                "Paragraph C defines migration with this very sentence: files periodically converted into current formats, trading fidelity for readability. The gap before 'into whatever formats are current' takes the passive verb converted.",
            },
          },
          {
            no: 8,
            answer: "snapshot",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "A snapshot is a record of a moment, not a living copy" }],
              explanation:
                "Paragraph E defines the stored page: a snapshot is a record of a moment, not a living copy. The sentence's contrast between the captured page and a living copy takes the passage's own noun.",
            },
          },
          {
            no: 9,
            answer: "checksum",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 5, quote: "A checksum — a number computed from the file's contents — changes if even one character does" }],
              explanation:
                "Paragraph F introduces the checksum as a number computed from the file's contents that changes if a single character does. The sentence reproduces the definition, so the missing term is checksum.",
            },
          },
        ],
      },
      {
        id: "q3",
        type: "multiple-choice",
        label: "Questions 10–11",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "The writer's attitude to the 'digital dark ages' warning is that it",
            options: [
              "overstates the danger, which is nonetheless genuine",
              "is exactly right in every respect",
              "was invented to win funding for archives",
              "applies only to records that exist on paper",
            ],
            correct: 0,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "The warning is probably overdramatic; the risk beneath it is real" }],
              explanation:
                "The final paragraph gives both halves of the judgement in one sentence: the warning is probably overdramatic, and the risk beneath it is real. The writer accepts the danger while rejecting its dramatisation, which is exactly the first option.",
              whyWrong: [
                "B: 'probably overdramatic' withholds full endorsement, so exact rightness is the opposite of the writer's view.",
                "C: nothing in the passage suggests the warning was manufactured for funding purposes.",
                "D: the dark ages warning concerns born-digital records, not paper — paper is never said to be at risk.",
              ],
            },
          },
          {
            stem: "Which statement best reflects the final paragraph's lesson?",
            options: [
              "Preservation is an ongoing activity rather than a single act",
              "A well-built vault settles the matter once and for all",
              "Antiquity is more legible than the present day, and nothing can be done",
              "Only government records are worth the effort",
            ],
            correct: 0,
            meta: {
              skills: ["structure", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "preservation is a verb — a continuous obligation, funded and renewed — rather than a vault sealed once" }],
              explanation:
                "The closing lesson is that preservation is a verb: a continuous obligation, funded and renewed, rather than a vault sealed once. The first option paraphrases that lesson; the others contradict parts of the paragraph or import claims it never makes.",
              whyWrong: [
                "B: the passage explicitly rejects the vault sealed once and trusted thereafter.",
                "C: the paragraph says the risk is real, and its whole point is that renewal is possible — not resignation.",
                "D: the paragraph lists scientific data and everyday documentation alongside government records, giving no priority of worth.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "asymmetry", partOfSpeech: "noun", definition: "a lack of balance between two sides; clay tablets wait while digital records must be copied forward." },
      { word: "obsolescence", partOfSpeech: "noun", definition: "the process of becoming outdated and unusable; the third threat is obsolescence of format, when software can no longer read the bits." },
      { word: "emulation", partOfSpeech: "noun", definition: "a strategy that writes software impersonating an obsolete machine so original files can run unchanged." },
      { word: "appraise", partOfSpeech: "verb", definition: "to assess the value of something; archives that once selected hundreds of items must now appraise millions." },
      { word: "crawlers", partOfSpeech: "noun (plural)", definition: "programs that move from page to page across the web; archiving services send them out to capture public pages." },
      { word: "fixity", partOfSpeech: "noun", definition: "the discipline of re-checking stored records at intervals so that silent alteration is caught." },
    ],
    passageNote:
      "The layers are: the asymmetry (A), three threats (B), strategies (C), volume (D), the web (E), authenticity (F), stakes (G). Matching-information rewards telling those layers apart — especially the difference between copying bits and converting formats.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-language-loss",
    title: "When a language falls silent",
    variant: "academic",
    section: 3,
    subject: "linguistics",
    topic: "culture",
    difficulty: 5,
    estimatedMinutes: 20,
    objective: "Read a measured argument about language endangerment: the scale, what is lost, how transmission breaks, and why documentation, revival and technology each stop short of deciding the outcome.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "When a language falls silent",
        paragraphs: [
          "Nobody knows exactly how many languages are spoken today; the usual estimates cluster around seven thousand, and a common prediction is that half of them will fall silent within a century. By some counts, one language now dies every few weeks — rarely with a bang, usually with a school generation that half-understands its grandparents and speaks to its own children in a larger tongue. The arithmetic is uncertain and the margins are wide, but the direction of travel is not: on present trends, the twenty-second century will open on a far quieter world.",
          "A language is not a neutral container into which any thought can be poured. Each one carves the flow of experience at its own joints. Some grammars oblige speakers to state how they know something — witnessed at first hand, heard from others, or inferred — a habit linguists call evidentiality. Others track kinship with a precision English needs a whole sentence to imitate, or mark the shape of an action in their verbs. When a language disappears, that particular carving of the world disappears with it.",
          "What goes with it is easy to underestimate. Songs, genealogies, place names, jokes and stories composed for one sound pattern do not translate; they can only be paraphrased into another language's accidents, and much of their point is lost on the way. Ethnobotanical knowledge is the same: plant names, preparation methods and seasonal calendars are stored in the vocabulary. A dictionary can list them, but only speakers can keep them alive as working knowledge rather than as entries in a catalogue.",
          "The cause, in almost every case, is interrupted transmission. A language does not die because its grammar was too hard or its literature too small; it dies when parents stop passing it to children — usually after schooling, migration or official policy, in some places deliberately but in most places carelessly, has made the larger language the road to jobs, safety and respect. The last generation of fluent speakers then ages together, and the archive of a thousand years of speech comes to rest in a handful of heads.",
          "Linguists respond by documenting: grammars, dictionaries, hours of recorded conversation. Documentation is necessary work, and it has rescued word lists, songs and texts from oblivion. But a recording is a record, not a revival. No archive can make a toddler speak a language at breakfast, and documentation by itself is a museum of sound — invaluable to scholarship, silent in the kitchen.",
          "Revival is different, and it sometimes succeeds. Hebrew was returned to daily life over roughly two generations, and immersion schooling for pre-school children — nests where the oldest speakers and the youngest learners meet — has lifted several other languages back toward ordinary use. The pattern in the successes is consistent: the community decides, the children are the target, and the school, the home and local media pull in the same direction.",
          "Technology helps at the edges. Keyboards, apps and streaming in small languages widen what a handful of teachers can reach, and a language with an online dictionary is easier to share. But the tools follow speakers; they do not create them. A language's future is decided in the choices of parents and the policies of states, not in the cloud. That is why the honest summary is neither despair nor cheerfulness: languages are kept the way gardens are kept — deliberately, by someone who intends to be there tomorrow.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–7",
        instruction:
          "Choose the correct heading for paragraphs A–G from the list of headings below. Write the correct number, i–viii, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph A",
            correct: 0,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 0, quote: "The arithmetic is uncertain and the margins are wide, but the direction of travel is not" }],
              explanation:
                "Paragraph A is the numbers paragraph: uncertain estimates, a wide margin, a dying rate by some counts, and a certain direction. Heading i ('An estimate with wide margins, a trend with none') paraphrases that split between uncertain arithmetic and a certain direction.",
            },
          },
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Each one carves the flow of experience at its own joints" }],
              explanation:
                "Paragraph B argues that a language is not a neutral container: each grammar carves experience differently, with evidentiality as the showpiece. Heading ii ('Every grammar carves the world differently') is the paragraph's thesis in one line.",
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 2, quote: "they can only be paraphrased into another language's accidents, and much of their point is lost on the way" }],
              explanation:
                "Paragraph C lists what cannot be carried across: songs, genealogies, jokes, and ethnobotanical knowledge that a dictionary can list but not keep alive. Heading iii ('What cannot be translated away') names exactly that residue.",
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "The cause, in almost every case, is interrupted transmission" }],
              explanation:
                "Paragraph D is the causal paragraph: languages die when parents stop passing them on, and the last fluent speakers age together. Heading iv ('How the chain of transmission breaks') paraphrases its opening claim.",
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "But a recording is a record, not a revival" }],
              explanation:
                "Paragraph E weighs documentation: necessary work that has rescued texts, yet a record rather than a revival — a museum of sound. Heading v ('Recording is not reviving') lifts the paragraph's own antithesis.",
            },
          },
          {
            text: "Paragraph F",
            correct: 5,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 5, quote: "Revival is different, and it sometimes succeeds" }],
              explanation:
                "Paragraph F turns to successes: Hebrew restored to daily life, immersion nests for the youngest learners, and a consistent pattern of community decision. Heading vi ('Bringing a language back to the breakfast table') paraphrases the return to ordinary, domestic use.",
            },
          },
          {
            text: "Paragraph G",
            correct: 6,
            lure: 7,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "But the tools follow speakers; they do not create them" }],
              explanation:
                "Paragraph G assesses technology's supporting role: keyboards and apps widen reach, but the tools follow speakers and the future is decided by parents and states. Heading vii ('Tools that follow, not lead') compresses the paragraph's own clause.",
              trap: {
                family: "mention-lure",
                note: "The extra heading borrows 'dictionary', a word paragraph G does use — but as an example of what is easier to share, never as a claim about dictionary economics.",
              },
              whyWrong: ["viii: dictionaries are mentioned in paragraphs C and G as objects of sharing and listing, not as economic documents — the heading invents a topic the passage never discusses."],
            },
          },
        ],
        options: [
          "An estimate with wide margins, a trend with none",
          "Every grammar carves the world differently",
          "What cannot be translated away",
          "How the chain of transmission breaks",
          "Recording is not reviving",
          "Bringing a language back to the breakfast table",
          "Tools that follow, not lead",
          "Dictionaries as economic documents",
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 8–10",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "The passage identifies the decisive cause of language death as",
            options: [
              "parents no longer passing the language to their children",
              "linguists arriving too late with their recorders",
              "the grammar proving too hard for children to learn",
              "speakers abandoning their homeland altogether",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "it dies when parents stop passing it to children" }],
              explanation:
                "Paragraph D gives the mechanism in one clause: a language dies when parents stop passing it to children, after larger-language pressures have made the switch seem rational. The passage explicitly rejects the too-hard-grammar explanation in the same sentence.",
              trap: {
                family: "mention-lure",
                note: "Linguists and their recorders do appear in the passage — but as the responders in paragraph E, never as the cause.",
              },
              whyWrong: [
                "B: documentation is the profession's answer in paragraph E, not a cause of death anywhere.",
                "C: the passage says outright that a language does not die because its grammar was too hard.",
                "D: migration is listed as one pressure on transmission, but the passage never describes whole communities abandoning a homeland.",
              ],
            },
          },
          {
            stem: "In the writer's view, documentation by itself",
            options: [
              "preserves forms of the language without restoring its daily use",
              "is money wasted on a cause already lost",
              "can replace a community of speakers with an archive",
              "works only for languages that already have scripts",
            ],
            correct: 0,
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "But a recording is a record, not a revival" }],
              explanation:
                "Paragraph E draws the boundary precisely: documentation is necessary and has rescued texts, but a recording is a record, not a revival — a museum of sound, silent in the kitchen. The first option keeps both halves of that judgement.",
              whyWrong: [
                "B: the writer calls documentation necessary work that has rescued word lists, songs and texts — the opposite of wasted.",
                "C: the writer says no archive can make a toddler speak the language, which rules out replacement.",
                "D: no distinction between scripted and scriptless languages is drawn anywhere in the passage.",
              ],
            },
          },
          {
            stem: "The writer's concluding image compares maintaining a language to",
            options: [
              "tending a garden deliberately, with the intention of staying",
              "curating a museum of recordings",
              "charting a river that flows regardless",
              "guarding a fortress against siege",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["inference", "opinion"],
              evidence: [{ block: 0, paragraph: 6, quote: "languages are kept the way gardens are kept — deliberately, by someone who intends to be there tomorrow" }],
              explanation:
                "The final sentence supplies its own image: languages are kept the way gardens are kept — deliberately, by someone who intends to be there tomorrow. The correct option keeps both the garden and the intention; the museum belongs to paragraph E's description of documentation, not the conclusion.",
              trap: {
                family: "mention-lure",
                note: "The museum image does appear in the passage — but in paragraph E, about archives, while the closing comparison is the garden.",
              },
              whyWrong: [
                "B: the museum of sound describes documentation in paragraph E, and the conclusion pointedly goes beyond it.",
                "C: no river image appears anywhere in the passage.",
                "D: no fortress or siege is mentioned; the tone is cultivation, not defence.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "evidentiality", partOfSpeech: "noun", definition: "a grammatical habit that obliges speakers to state how they know something — witnessed, heard or inferred." },
      { word: "genealogies", partOfSpeech: "noun (plural)", definition: "records of a family's descent over generations; genealogies are among the things that do not translate." },
      { word: "ethnobotanical", partOfSpeech: "adjective", definition: "relating to the plant knowledge of a particular people; plant names and seasonal calendars are stored in the vocabulary." },
      { word: "transmission", partOfSpeech: "noun", definition: "the handing-on of a language from one generation to the next; interrupted transmission is the passage's cause of death." },
      { word: "oblivion", partOfSpeech: "noun", definition: "the state of being completely forgotten; documentation has rescued word lists, songs and texts from oblivion." },
      { word: "immersion", partOfSpeech: "noun", definition: "surrounding learners completely in a language; immersion nests bring the oldest speakers and the youngest learners together." },
    ],
    passageNote:
      "A cause-and-consequence passage at full difficulty: scale (A), what a language is (B), what is lost (C), the break in transmission (D), documentation's limits (E), revival (F), technology's supporting role (G). The multiple choice draws on paragraphs D, E and the closing image in G.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-four-day-week",
    title: "What the four-day week trials found",
    variant: "academic",
    section: 2,
    subject: "work psychology",
    topic: "workplace",
    difficulty: 3,
    estimatedMinutes: 16,
    objective: "Read trial evidence carefully: what the four-day week pilots measured, where the time was found, and what the trials did and did not demonstrate.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "What the four-day week trials found",
        paragraphs: [
          "The formula is usually written 100-80-100: employees receive one hundred per cent of their pay for eighty per cent of their usual hours, in exchange for a commitment to deliver one hundred per cent of the output. It sounds like a bargain no employer should offer. Yet the idea is older than it looks — economists flirted with shorter hours in the 1930s, and the pandemic rearranged opinions about where work happens — and recent pilots have finally attached numbers to the question. Whether such a bargain can hold is an empirical matter, and for most of the past century it was asked in seminars far more often than it was tested on staff.",
          "The most quoted test ran in Britain in 2022, when researchers working alongside a campaign group recruited around sixty companies and roughly three thousand employees for a six-month pilot. Firms joined from bakery, marketing, engineering and social-care backgrounds, each designing its own reduction: a fifth day off for office staff, staggered rosters for those who serve the public face to face, and compressed weeks where a calendar demanded them.",
          "The headline findings were consistent across sectors. Company revenue held steady or rose in most firms; sick days fell by roughly two-thirds; scores on standard burnout measures fell; and resignations dropped, which matters in a labour market where replacing a leaver can cost a salary's worth of recruitment. When the half-year closed, the great majority of the firms said they would keep the arrangement, and follow-up checks some months later found most of them still had.",
          "Earlier evidence pointed the same way. Well-publicised trials in Iceland, running from 2015 to 2019 across workplaces in the public sector, reported that productivity and services held up or improved as hours were trimmed, and smaller trials elsewhere have since echoed the direction of the effect. These studies are smaller and messier than their press coverage suggests, but the sign of the result has been stable. Their scale, not their rigour, is what made them famous: thousands of workers took part, and the published reports ran to hundreds of pages.",
          "Where did the time come from? Interviews and staff diaries suggest the fifth day was mostly found rather than conjured. Meetings became fewer and shorter, with whole days declared meeting-free; priorities were pruned; some firms retired reports that nobody read. The risk runs the other way too: if nothing else changes, the same work is simply compressed into four days, and the trial quietly becomes a speed test. The British firms that succeeded were typically the ones that redesigned the work rather than the calendar.",
          "The limits deserve respect. Operations that must answer a phone or serve a counter all week need extra staff or shorter shifts to cover a four-day pattern, and some participants in the pilots reverted once the researchers left. The self-selected nature of the trials also bounds what they can teach: companies that volunteer are, by definition, companies whose managers already believed, and results from enthusiasts cannot simply be pasted onto the reluctant. A hospital ward or a service desk cannot simply close on Fridays; the pattern has to be bought with extra hands, which is why coverage costs sit at the centre of every serious feasibility study.",
          "What the trials did not show is that a shorter week is a machine that manufactures productivity. What they showed is narrower and more useful: that a planned reduction, designed firm by firm, can hold output while improving the measured lives of the people doing the work. That is a finding about design, and it is why the trials are better read as engineering reports than as miracles.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "true-false-not-given",
        label: "Questions 1–6",
        instruction:
          "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Most firms in the British pilot chose to continue the arrangement after it ended.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "the great majority of the firms said they would keep the arrangement, and follow-up checks some months later found most of them still had" }],
              explanation:
                "Paragraph C reports both the closing verdict and the later check: the great majority said they would keep the arrangement, and months later most still had. 'Most firms chose to continue' is a fair paraphrase of that pair, so the statement is TRUE.",
            },
          },
          {
            text: "Every firm that took part in the British pilot saw its revenue rise.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "Company revenue held steady or rose in most firms" }],
              explanation:
                "Paragraph C says revenue held steady or rose in most firms — steady outcomes are excluded by 'rise', and 'most' excludes 'every'. The passage qualifies its claim twice, and the statement removes both qualifications, so it is FALSE.",
              trap: {
                family: "extreme-language",
                note: "'Every' is the trap word; the passage's own quantifiers are 'held steady or rose' and 'in most firms'.",
              },
              whyWrong: ["NOT GIVEN: the passage does report the revenue outcome, and that report contradicts the statement's 'every' and 'rose'."],
            },
          },
          {
            text: "Scores on burnout measures fell among participating staff.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "scores on standard burnout measures fell" }],
              explanation:
                "Paragraph C lists the measured outcomes, and among them the burnout result is stated without qualification. The statement repeats it almost word for word, so it is TRUE.",
            },
          },
          {
            text: "The Icelandic trials were carried out with office workers in private companies.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "Well-publicised trials in Iceland, running from 2015 to 2019 across workplaces in the public sector" }],
              explanation:
                "Paragraph D states the setting plainly: the Icelandic trials ran across workplaces in the public sector. The statement swaps in office workers in private companies, which contradicts the stated setting, so it is FALSE.",
              trap: {
                family: "boundary",
                note: "Iceland appears with dates and results, which can make the setting feel unrecoverable; the sector is named in the same sentence.",
              },
              whyWrong: ["NOT GIVEN: the passage does specify the sector — public sector workplaces — so the information exists and contradicts the statement."],
            },
          },
          {
            text: "The firms that later reverted did so because their customers complained.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "some participants in the pilots reverted once the researchers left" }],
              explanation:
                "Paragraph F reports that some participants reverted once the researchers left, but it gives no reason — no customer complaints, no costs, no staffing figures. A stated outcome with an unstated cause is exactly Not Given territory, so the reason cannot be credited.",
              trap: {
                family: "boundary",
                note: "Reverting sounds like failure, which tempts a FALSE about any unflattering cause; only stated reasons can settle such claims.",
              },
              whyWrong: ["FALSE: the passage never says customers complained — nothing denies the claim either; the cause is simply absent."],
            },
          },
          {
            text: "The trials demonstrated that cutting hours automatically increases productivity.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["inference", "opinion"],
              evidence: [{ block: 0, paragraph: 6, quote: "What the trials did not show is that a shorter week is a machine that manufactures productivity" }],
              explanation:
                "The final paragraph denies precisely this reading: the trials did not show a machine that manufactures productivity; they showed a narrower finding about planned, firm-by-firm reduction. 'Automatically' is the passage's own rejected assumption, so the statement is FALSE.",
              trap: {
                family: "extreme-language",
                note: "'Automatically' converts a conditional design finding into an unconditional law — the paragraph's last sentence exists to refuse that.",
              },
              whyWrong: ["TRUE: the passage reports stable output in trials, but always as the result of redesign, never as an automatic effect of the calendar."],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "table-completion",
        label: "Questions 7–10",
        instruction: "Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Aspect of working life" }, { kind: "text", text: "Change reported in the pilot" }],
          [{ kind: "text", text: "Meetings" }, { kind: "text", text: "became fewer and" }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "Sick absence" }, { kind: "text", text: "fell by roughly" }, { kind: "blank", no: 8 }],
          [{ kind: "text", text: "Exhaustion" }, { kind: "text", text: "lower scores on standard" }, { kind: "blank", no: 9 }, { kind: "text", text: "measures" }],
          [{ kind: "text", text: "Departures" }, { kind: "text", text: "fewer" }, { kind: "blank", no: 10 }],
        ],
        blanks: [
          {
            no: 7,
            answer: "shorter",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "Meetings became fewer and shorter, with whole days declared meeting-free" }],
              explanation:
                "Paragraph E says the time was mostly found rather than conjured, and its first example is meetings becoming fewer and shorter. The table keeps 'fewer and', so the missing adjective is shorter.",
            },
          },
          {
            no: 8,
            answer: "two-thirds",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "sick days fell by roughly two-thirds" }],
              explanation:
                "Paragraph C gives the sick-day result with its size: a fall by roughly two-thirds. The table's 'fell by roughly' needs the fraction, which the passage supplies as one hyphenated word.",
            },
          },
          {
            no: 9,
            answer: "burnout",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "scores on standard burnout measures fell" }],
              explanation:
                "Paragraph C names the exhaustion measure with its technical label: standard burnout measures. The table's row 'lower scores on standard ___ measures' takes the passage's own noun.",
            },
          },
          {
            no: 10,
            answer: "resignations",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "and resignations dropped, which matters in a labour market where replacing a leaver can cost a salary's worth of recruitment" }],
              explanation:
                "Paragraph C lists resignations among the dropped measures, glossing the word through the cost of replacing a leaver. The table's 'Departures: fewer ___' needs that noun, resignations.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "pilot", partOfSpeech: "noun", definition: "a trial run of a scheme before wider adoption; the British pilot ran for six months in 2022." },
      { word: "rosters", partOfSpeech: "noun (plural)", definition: "lists showing who works which shifts; staggered rosters covered roles that serve the public face to face." },
      { word: "burnout", partOfSpeech: "noun", definition: "a state of exhaustion measured by standard questionnaires; burnout scores fell during the pilot." },
      { word: "resignations", partOfSpeech: "noun (plural)", definition: "the act of leaving a job; resignations dropped, which matters when replacing a leaver is costly." },
      { word: "conjured", partOfSpeech: "verb (past)", definition: "brought about as if by magic; the fifth day was mostly found rather than conjured." },
      { word: "reverted", partOfSpeech: "verb (past)", definition: "returned to a previous practice; some participants reverted once the researchers left." },
    ],
    passageNote:
      "Numbers do the work here: revenue 'held steady or rose in most firms' (not all), sick days 'by roughly two-thirds', burnout scores, resignations. The table pulls the four measured outcomes from paragraphs C and E; the True/False/Not Given set tests the passage's quantifiers.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-lightning",
    title: "Chasing lightning",
    variant: "academic",
    section: 2,
    subject: "atmospheric physics",
    topic: "science",
    difficulty: 4,
    estimatedMinutes: 17,
    objective: "Follow a physical process inside a storm, and the three families of instruments — provoked flashes, high-speed cameras and radio arrays — built to observe it.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Chasing lightning",
        paragraphs: [
          "Lightning is at once the commonest violent phenomenon on Earth and among the least understood. Flashes strike somewhere on the planet tens of times every second, yet a whole flash lasts less than a second and rarely strikes twice where instruments happen to be waiting. Researchers who want to measure one must therefore either wait beside a place the sky favours or manufacture a flash of their own — and over the past half-century they have learned, with some style, to do both. For centuries before that, the only instruments were the eyes and the damage: survivors' accounts, burnt steeples, and the patterns scoured into grass where a flash had touched down.",
          "The standard account of what happens inside a storm begins with collisions. In the turbulent middle of the cloud, soft hail — graupel, in the jargon — tumbles against smaller ice crystals; the collisions leave the graupel negatively charged and the crystals positive. Updrafts then sort the pieces: the crystals ride to the cloud tops on the rising air, and the lower part of the cloud accumulates a negative charge. The ground beneath responds with an induced positive charge, and the scene is set for the exchange.",
          "The flash itself is a negotiation in stages. A stepped leader — a dim, branching probe — leaves the cloud and works downward in jumps, feeling for the best connection. When it touches a rising streamer from the ground, the channel is completed and the first return stroke surges upward: this return stroke, not the fainter leader, is the bright part human eyes see. Further strokes commonly reuse the same channel several times within a few hundred milliseconds, which is why lightning appears to flicker. Anyone with a watch can range a flash by counting the seconds until its thunder arrives, which was, for a long time, the closest most science came to measuring one.",
          "To study the physics at close range, one research field specialises in provoked flashes. A small rocket climbs from a coastal launch pad trailing a grounded wire behind it; the stepped leader readily follows the wire down, and the result is a flash whose time and place are known in advance, so that instruments, cameras and test cables can be aimed and armed beforehand. The technique has supported decades of work on how surge currents behave in equipment and soil.",
          "High-speed photography is the second tool. Cameras recording millions of frames a second resolve the stepping of the leader — its pauses, its branches, its forked structure — and have even caught upward flashes that leave tall towers and ships' masts. Because the pictures freeze motions lasting microseconds, they settled old arguments about which stroke carries the current and which parts of the channel glow brightest. The earliest such photographs ended a period in which the physics of the leader had been inferred from burns and bystanders rather than seen.",
          "The third instrument is a network rather than a camera. Arrays of radio receivers time-stamp the crackle emitted by a developing flash; comparing the arrival times reconstructs the whole channel in three dimensions, including the portion hidden inside the cloud. The same principle, scaled up, drives national detection networks that log where each strike hits the ground, feeding the outage desks of power companies and the statistics of weather forecasters.",
          "The chase keeps widening. Sprites and other luminous discharges high above storms were photographed only within living memory, and chemists still debate how much nitrogen lightning fixes for the biosphere each year. What began as a hazard to be survived has become a laboratory without walls, and every new instrument seems to invite the next question.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "summary-completion",
        label: "Questions 1–5",
        instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
        wordLimit: 1,
        layout: [
          [
            { kind: "text", text: "How a flash happens: inside a storm, collisions between ice crystals and soft 1" },
            { kind: "blank", no: 1 },
            { kind: "text", text: " leave the lower cloud negatively charged, and the ground below takes on an induced positive 2" },
            { kind: "blank", no: 2 },
            { kind: "text", text: ". A stepped 3" },
            { kind: "blank", no: 3 },
            { kind: "text", text: " then feels its way downward; when it meets a streamer from the ground, the bright 4" },
            { kind: "blank", no: 4 },
            { kind: "text", text: " stroke surges upward, and several strokes may reuse the same 5" },
            { kind: "blank", no: 5 },
            { kind: "text", text: " before the flash dies." },
          ],
        ],
        blanks: [
          {
            no: 1,
            answer: "hail",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "soft hail — graupel, in the jargon — tumbles against smaller ice crystals" }],
              explanation:
                "Paragraph B names the colliding particles: soft hail, called graupel in the jargon, tumbling against smaller ice crystals. The summary keeps 'soft' and needs the noun, hail, which the passage defines in passing.",
            },
          },
          {
            no: 2,
            answer: "charge",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "the lower part of the cloud accumulates a negative charge" }],
              explanation:
                "Paragraph B tracks the sorting: the lower cloud accumulates a negative charge and the ground beneath takes on an induced positive one. The summary's 'induced positive ___' needs the noun that follows, charge.",
            },
          },
          {
            no: 3,
            answer: "leader",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "A stepped leader — a dim, branching probe — leaves the cloud and works downward in jumps" }],
              explanation:
                "Paragraph C names the downward probe a stepped leader. The summary keeps 'stepped' and asks for the noun, so the answer is leader, the passage's own term.",
            },
          },
          {
            no: 4,
            answer: "return",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "the first return stroke surges upward: this return stroke, not the fainter leader, is the bright part human eyes see" }],
              explanation:
                "Paragraph C distinguishes the bright stroke from the fainter leader, and names it the return stroke. The summary's 'bright ___ stroke surges upward' takes that adjective, return.",
            },
          },
          {
            no: 5,
            answer: "channel",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "Further strokes commonly reuse the same channel several times within a few hundred milliseconds" }],
              explanation:
                "Paragraph C closes the physics with the flicker: further strokes reuse the same channel several times. The summary's 'reuse the same ___' needs the passage's noun, channel.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "matching-features",
        label: "Questions 6–9",
        instruction:
          "Look at the following findings and the list of instruments below. Match each finding with the instrument connected with it. You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "Flashes produced at a time and place chosen in advance.",
            correct: 0,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "the result is a flash whose time and place are known in advance" }],
              explanation:
                "Paragraph D describes the rocket-and-wire technique: the leader follows the trailing wire down, giving a flash whose time and place are known in advance. The finding belongs to the rocket-launched flashes, the passage's provoked kind.",
            },
          },
          {
            text: "The downward stepping of the leader, frozen frame by frame.",
            correct: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "Cameras recording millions of frames a second resolve the stepping of the leader" }],
              explanation:
                "Paragraph E credits high-speed cameras with resolving the stepping of the leader — pauses, branches, forked structure — by freezing motions that last microseconds. That resolution is exactly the finding described.",
            },
          },
          {
            text: "The whole path of a flash reconstructed in three dimensions.",
            correct: 2,
            lure: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "comparing the arrival times reconstructs the whole channel in three dimensions, including the portion hidden inside the cloud" }],
              explanation:
                "Paragraph F gives the reconstruction to the radio arrays: time-stamped arrivals are compared, and the whole channel is rebuilt in three dimensions, cloud-hidden portion included. No camera produces a three-dimensional picture anywhere in the passage.",
              trap: {
                family: "mention-lure",
                note: "Cameras do photograph the channel in paragraph E, but only radio timing turns it into a three-dimensional reconstruction.",
              },
              whyWrong: ["B: high-speed cameras freeze two-dimensional pictures of the visible flash; the 3-D reconstruction, including the hidden portion, is array work."],
            },
          },
          {
            text: "Records of the points where strikes reach the ground.",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "national detection networks that log where each strike hits the ground" }],
              explanation:
                "Paragraph F names the nationwide logging service separately from the research arrays: national detection networks log where each strike hits the ground, feeding power companies' outage desks and forecasters' statistics. The finding is that service's output.",
            },
          },
        ],
        options: [
          "Rocket-launched flashes",
          "High-speed cameras",
          "Radio mapping arrays",
          "National detection networks",
        ],
      },
    ],
    glossary: [
      { word: "graupel", partOfSpeech: "noun", definition: "soft hail — a snow pellet encased in ice; collisions with crystals leave graupel negatively charged." },
      { word: "updrafts", partOfSpeech: "noun (plural)", definition: "currents of air rising inside a cloud; updrafts carry the positive crystals to the cloud tops." },
      { word: "streamer", partOfSpeech: "noun", definition: "a channel of ionised air reaching up from the ground; when the leader touches a streamer, the flash connects." },
      { word: "masts", partOfSpeech: "noun (plural)", definition: "tall poles carrying wires or antennas; upward flashes have been caught leaving towers and ships' masts." },
      { word: "sprites", partOfSpeech: "noun (plural)", definition: "luminous discharges high above storms, photographed only within living memory." },
      { word: "fix", partOfSpeech: "verb (chemistry)", definition: "to convert a gas into a usable compound; chemists debate how much nitrogen lightning fixes each year." },
    ],
    passageNote:
      "The summary tests the mechanism in paragraphs B–C; the feature matching tests who does what in paragraphs D–F. Distinguish the array's three-dimensional reconstruction from the camera's two-dimensional pictures — one item is built on exactly that confusion.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-spices",
    title: "The long road of the spice trade",
    variant: "academic",
    section: 1,
    subject: "economic history",
    topic: "history",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Follow a trade's arc: why spices suited long routes, how the chain of middlemen priced them, how the Portuguese bypassed it, and how botany finally broke the monopoly.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "The long road of the spice trade",
        paragraphs: [
          "Why spices? They cannot be eaten as a meal, they are pricey by the pinch, and the oldest explanation told against them — that they disguised the taste of spoiled meat — is doubted by historians, who observe that anyone who could afford pepper could also afford fresh food. The likelier draws were status and medicine: pepper sat on Roman tables as a boast, and the surviving tariff schedules treat it as gravely as silk. Above all, spices were the ideal cargo — light, durable, and worth a fortune for their weight. Ginger, cinnamon, clove and pepper travelled together, and a pinch of any of them announced a household that could reach, by proxy, the edge of the world.",
          "The first long routes ran by sea with the monsoon. Sailors of the Roman era learned to ride the seasonal winds to the pepper coast of India and home again, and Arab middlemen carried the goods onward by caravan to the Mediterranean. For more than a thousand years the system was stable: the East grew the spices, the Arabs moved them, and Europe paid whatever the chain asked, because nobody at the European end knew the sea routes at all.",
          "After the crusades, Venice positioned itself at the final link, and the final link charged accordingly. By the time pepper reached a northern European kitchen it had passed through many hands, and every hand added a margin: contemporary accounts suggest the finished price ran to many multiples of what the cargo had cost at the port of origin. Nobody in the chain was cheating, exactly; the route was simply long, and every monopoly along it was priced in.",
          "The Portuguese broke the chain by going around it. Navigation down the African coast, decades in the preparing, delivered a fleet to the pepper coast of India at the very end of the fifteenth century — the first European ships to reach India by that route. Trading there meant fighting there, and the Portuguese armed their merchants; but the middlemen of the old chain, from Cairo to Venice, were cut out at a stroke, and Lisbon took their cut instead.",
          "The northern Europeans arrived later and organised better. The English and Dutch East India companies were joint-stock firms with armies and navies, and the Dutch, concentrating on the tiny nutmeg islands, enforced a monopoly with a ruthlessness historians still find startling. The trees then grew nowhere else on Earth, and the handful of islands that held them were held, in effect, as factories. Prices in Europe stayed high by design, not by accident.",
          "The monopoly was broken less by battles than by botany. Seedlings were smuggled out and planted elsewhere; within a couple of generations nutmeg was growing on islands the Dutch did not control, and the price of spice began the long slide that ended in the kitchen cupboard. Once the plants travelled, the trade could no longer be cornered, and the companies drifted into other cargo, shipping textiles and tea instead of powders.",
          "What remained was the road itself. The pursuit of pepper had drawn the maps, trained the navigators, pioneered the joint-stock company and left a vocabulary of valuations behind — 'peppercorn rent' still means a token payment, and 'worth his salt' still remembers an older trade. The spices became cheap; the habit of fetching them from far away remade the world's shipping, and that habit, rather than the taste, is the long road's true legacy. Historians still argue about how much of the age of exploration the appetite for these powders actually caused, and how much it merely financed; either way, the cargoes came first and the colonies followed.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-sentence-endings",
        label: "Questions 1–5",
        instruction:
          "Complete each sentence with the correct ending, A–F, below. There are more endings than sentences, so you will not use them all.",
        extraOption: true,
        items: [
          {
            text: "For long-distance merchants, spices were attractive because they were",
            correct: 0,
            meta: {
              skills: ["detail", "structure"],
              evidence: [{ block: 0, paragraph: 0, quote: "spices were the ideal cargo — light, durable, and worth a fortune for their weight" }],
              explanation:
                "Paragraph A closes with the commercial reason: spices were the ideal cargo, light, durable and worth a fortune for their weight. Ending A completes the merchants' calculation, while the endings about ships and battles belong to later stages of the story.",
            },
          },
          {
            text: "For centuries, European buyers paid heavily because the route",
            correct: 1,
            lure: 5,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "it had passed through many hands, and every hand added a margin" }],
              explanation:
                "Paragraph C explains the pricing: pepper passed through many hands, each adding a margin, so the finished price ran to many multiples of the port-of-origin cost. Ending B names that chain of profit-taking hands.",
              trap: {
                family: "mention-lure",
                note: "The unused ending about faster ships quotes the trade's vocabulary, but the passage attributes every multiple of price to hands, never to sails.",
              },
              whyWrong: ["F: shipping speed is never discussed as a reason for European prices — the margin chain is given as the whole answer."],
            },
          },
          {
            text: "The Portuguese achievement of the 1490s was to",
            correct: 2,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "the first European ships to reach India by that route" }],
              explanation:
                "Paragraph D describes the rounding of Africa as the first European ships to reach India by that route, cutting out the middlemen from Cairo to Venice. Ending C completes the achievement with the middlemen left behind.",
            },
          },
          {
            text: "The Dutch grip on nutmeg depended on the fact that the trees",
            correct: 3,
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "The trees then grew nowhere else on Earth" }],
              explanation:
                "Paragraph E states the geographical fact under the monopoly: the trees grew nowhere else on Earth, so the islands holding them were held as factories. Ending D supplies precisely that fact as the reason for the grip.",
            },
          },
          {
            text: "The Dutch monopoly finally broke when seedlings were",
            correct: 4,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Seedlings were smuggled out and planted elsewhere" }],
              explanation:
                "Paragraph F opens with the undoing: seedlings smuggled out and planted elsewhere, after which nutmeg grew on islands the Dutch did not control. Ending E completes the sentence with those two verbs.",
            },
          },
        ],
        options: [
          "light, durable and worth a fortune for their weight.",
          "passed through so many profit-taking hands.",
          "reach the pepper coast without the Arab middlemen.",
          "grew nowhere else on Earth.",
          "smuggled out and grown elsewhere.",
          "cut in half by faster and better-sailed ships.",
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 6–10",
        instruction:
          "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Roman-era sailors used seasonal winds to reach India and return.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "learned to ride the seasonal winds to the pepper coast of India and home again" }],
              explanation:
                "Paragraph B states the monsoon technique directly: sailors of the Roman era rode the seasonal winds to the pepper coast and home again. The statement is a light paraphrase of that clause, so it is TRUE.",
            },
          },
          {
            text: "Venetian merchants controlled the entire route from India to northern Europe.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "Venice positioned itself at the final link, and the final link charged accordingly" }],
              explanation:
                "Paragraph C gives Venice the final link only: the middle stretch ran through Arab hands, and the price accumulated across many hands before the cargo reached northern kitchens. 'The entire route' swallows the rest of the chain, which contradicts the passage's own geography, so it is FALSE.",
              trap: {
                family: "extreme-language",
                note: "'Entire' is the trap word; the passage's Venice owns one link, and the chain is the whole point of the paragraph.",
              },
              whyWrong: ["TRUE: Venice is the most famous name in the chain, but the passage assigns it the final link, not the route from India."],
            },
          },
          {
            text: "The first European ships to reach India by the African route were Portuguese.",
            answer: "TRUE",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "the first European ships to reach India by that route" }],
              explanation:
                "Paragraph D states it in so many words: the fleet delivered at the end of the fifteenth century were the first European ships to reach India by that route, and the fleet was Portuguese. The statement repeats the claim, so it is TRUE.",
            },
          },
          {
            text: "The Dutch company's monopoly made spices cheaper for European households.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [
                { block: 0, paragraph: 4, quote: "Prices in Europe stayed high by design, not by accident" },
                { block: 0, paragraph: 5, quote: "the price of spice began the long slide that ended in the kitchen cupboard" },
              ],
              explanation:
                "The sequence is the whole answer: under the Dutch monopoly prices stayed high by design, and the long slide began only after seedlings were smuggled out and planted elsewhere. The statement awards the later price fall to the monopoly itself, reversing the order of cause and effect.",
              trap: {
                family: "order",
                note: "Spices did become cheap eventually — but the passage dates the slide to the monopoly's collapse, not to its operation.",
              },
              whyWrong: ["TRUE: the fall in prices is real, but the passage attributes it to botany breaking the monopoly, not to the company's grip."],
            },
          },
          {
            text: "The Roman tariff schedules taxed silk and pepper at identical rates.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference", "vocabulary"],
              evidence: [{ block: 0, paragraph: 0, quote: "the surviving tariff schedules treat it as gravely as silk" }],
              explanation:
                "Paragraph A uses silk only as a comparison of seriousness: the schedules treat pepper as gravely as silk. No rate for either good is ever stated, so identical taxation can be neither confirmed nor denied by the text, and the statement is NOT GIVEN.",
              trap: {
                family: "boundary",
                note: "The comparison 'as gravely as silk' tempts a reading of equivalence; gravity of treatment is not a schedule of rates.",
              },
              whyWrong: ["FALSE: nothing in the passage says the rates differed either — the comparison is qualitative, and no figures are given at all."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "monsoon", partOfSpeech: "noun", definition: "a seasonal wind that reverses direction; Roman-era sailors rode it to India and back." },
      { word: "middlemen", partOfSpeech: "noun (plural)", definition: "traders standing between producer and buyer; Arab middlemen carried the spices onward by caravan." },
      { word: "margin", partOfSpeech: "noun", definition: "the difference between a trader's buying and selling price; every hand on the route added one." },
      { word: "joint-stock", partOfSpeech: "adjective", definition: "describing a firm owned by shareholders; the East India companies were joint-stock firms with armies." },
      { word: "ruthlessness", partOfSpeech: "noun", definition: "cruel lack of pity; historians still find the Dutch enforcement of the monopoly startling." },
      { word: "peppercorn rent", partOfSpeech: "noun phrase", definition: "a token payment named after the trade; the passage's vocabulary of valuations survived the routes." },
    ],
    passageNote:
      "A timeline in four acts: the monsoon routes (B), Venice's final link (C), the Portuguese breakthrough (D), the Dutch monopoly and its botanical undoing (E–F). Two questions turn on attributing the eventual price fall to the right stage of that timeline.",
    source: READING_BANK_SOURCE_NOTE,
  },
];

