/**
 * Academic passage library J (PROMPT 54 question-bank expansion, batch J).
 *
 * Eight further original Academic passages in the style of the IELTS Reading
 * test, covering fresh subject areas (urban history, urban economics, marine
 * science, orthography, energy economics, sports science, oceanography and
 * heritage studies). Every passage carries a complete question set with
 * per-item evidence, teaching explanations, designed traps and a glossary.
 * All content is original TalkSy practice material; nothing is copied from
 * official IELTS papers, and no specialist knowledge is assumed.
 *
 *   ielts-rb-ac-street-lighting — Urban history,     Section 2, advanced (d4)
 *   ielts-rb-ac-remote-cities   — Urban economics,   Section 3, advanced (d4)
 *   ielts-rb-ac-ocean-noise     — Marine science,    Section 3, advanced (d5)
 *   ielts-rb-ac-spelling        — Orthography,       Section 2, advanced (d4)
 *   ielts-rb-ac-energy-coops    — Energy economics,  Section 1, advanced (d4)
 *   ielts-rb-ac-sports-fatigue  — Sports science,    Section 3, advanced (d5)
 *   ielts-rb-ac-seabed          — Oceanography,      Section 2, advanced (d4)
 *   ielts-rb-ac-repatriation    — Heritage studies,  Section 3, advanced (d5)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acadJExercises: ReadingExercise[] = [
  {
    slug: "ielts-rb-ac-street-lighting",
    title: "From oil lamps to LEDs",
    variant: "academic",
    section: 2,
    subject: "urban history",
    topic: "history",
    difficulty: 4,
    estimatedMinutes: 16,
    objective:
      "Follow two centuries of a single municipal service — from a householder's duty to gas networks, electric utilities and the controllable diode — and track what each technology did to the city at night.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "From oil lamps to LEDs",
        paragraphs: [
          "For most of recorded history, the towns of Europe shut down at dusk. Curfews emptied the streets, householders lit candles in their windows where the law required it, and anyone who had to move after dark carried a torch or a link — a rope of pitched tow that burned for about half an hour. Night travel was slow, unpopular and occasionally fatal. Public lighting, when it finally arrived, changed not merely how cities looked after sunset but how they were governed, policed, shopped in and understood.",
          "The first organised street lighting was an extension of the household lantern. From the seventeenth century onwards, many European cities ordered householders to hang a lighted lamp outside the door on moonless nights, or hired a contractor to do it for them. Paris, under an edict of 1667, placed thousands of glass-sided oil lamps on posts and employed a small army of lamplighters to trim wicks and refill reservoirs each evening. The system was dim, smelly and expensive, but it was a service the town provided together — and citizens began to treat darkness as the municipality's problem rather than their own.",
          "Gas changed the scale of everything. Demonstrated in London in 1807, when a stretch of Pall Mall was lit from a small gasworks nearby, coal gas demanded a network: a works to distil the fuel, mains laid beneath the pavement, and lamps connected in series. Lighting became infrastructure, and the companies that built it — usually private, often franchised by councils — became among the first utilities. Lamplighters acquired a professional identity, walking fixed rounds at dusk with a pole and a pilot flame, and the glow they tended was brighter and steadier than any oil flame, though every lamp still needed visiting every night of the year.",
          "The social consequences were argued over from the start. Shops stayed open later; theatres and coffee houses multiplied; evening promenades became fashionable. Contemporaries credited the new lamps with taming street crime, though the evidence was never as tidy as the claim — studies of the period suggest that better lighting moved some offences rather than abolishing them, and pickpockets reportedly worked happily in the crowds the lamps attracted. What is not in dispute is that gas stretched the usable day. Urban life was no longer bound to sunrise, and the nineteenth-century city acquired a nightlife that earlier generations would have found bewildering.",
          "Electricity arrived in two waves. Arc lamps — blazing carbon rods first demonstrated for public use in the 1870s — were ferociously bright but harsh, and they suited squares, docks and railway forecourts better than residential streets. The practical breakthrough was the carbon-filament lamp of the following decade, gentle enough to hang above a pavement. Municipal electricity stations followed, and councils that had merely regulated gas companies now owned generating plant themselves. Many towns built their own networks precisely because lighting was politically popular: a mayor could point to a street of electric lamps and claim a progress that everyone could see.",
          "The twentieth century refined rather than revolutionised the lamp. Low-pressure sodium, a Dutch development of the 1930s, gave the amber glow that defined the mid-century street: cheap to run, quick to light, and so monochrome that colours simply vanished beneath it. Discharge lighting was efficient, but it also carried light far beyond the street it served. From the 1970s astronomers documented the brightening of the night sky above cities, and light pollution entered the language — an odd phrase for a service that had once been celebrated as pure civic progress.",
          "The light-emitting diode has inverted the argument again. LEDs convert electricity to light so efficiently that the running cost of street lighting has collapsed, and because they can be dimmed instantly they invite control: councils now schedule lights to fade after the last bus or brighten when a sensor detects movement. Yet cheap light brings its own dilemmas. Health researchers warn that the blue-rich white now common on city streets may disturb sleep in ways the amber lamps never did, and dark-sky campaigners argue that the real task is not to light more cleverly but to light less. Two centuries after Pall Mall, cities are still learning what a street lamp is for: the technology keeps answering, and the question keeps changing.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–5",
        instruction:
          "Choose the correct heading for paragraphs B–F from the list of headings below. Write the correct number, i–vi, next to questions 1–5.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 0,
            lure: 5,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "ordered householders to hang a lighted lamp outside the door on moonless nights, or hired a contractor to do it for them",
                },
              ],
              explanation:
                "Paragraph B follows a duty changing hands: first each house must light its own door, then the town hires contractors and Paris employs lamplighters, until darkness becomes the municipality's problem. The heading paraphrases that transfer of obligation from doorstep to town.",
              trap: {
                family: "mention-lure",
                note: "The unused heading borrows the lamplighter profession named in the paragraph, but the paragraph's job is the shift of duty, not any profession's fate.",
              },
              whyWrong: [
                "vi: the paragraph introduces the lamplighters but says nothing about a profession disappearing — that heading exists only to harvest the paragraph's vocabulary.",
              ],
            },
          },
          {
            text: "Paragraph C",
            correct: 1,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Lighting became infrastructure, and the companies that built it" }],
              explanation:
                "Paragraph C is organised around the birth of a network: a gasworks, mains beneath the pavement, lamps in series, and the companies that grew up laying them. The heading compresses both halves of the paragraph — the network and the business it created.",
            },
          },
          {
            text: "Paragraph D",
            correct: 2,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [
                {
                  block: 0,
                  paragraph: 3,
                  quote: "studies of the period suggest that better lighting moved some offences rather than abolishing them",
                },
              ],
              explanation:
                "Paragraph D sets praise for the gas lamps against a messier record: offences moved rather than vanished, and pickpockets worked the crowds the lamps drew. The heading captures the gap between the applause and the evidence for it.",
            },
          },
          {
            text: "Paragraph E",
            correct: 3,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [
                {
                  block: 0,
                  paragraph: 4,
                  quote: "Arc lamps — blazing carbon rods first demonstrated for public use in the 1870s — were ferociously bright but harsh",
                },
              ],
              explanation:
                "Paragraph E splits into two electric technologies with different duties: arc lamps for grand open spaces, carbon-filament lamps for the ordinary street. The heading names both the split and the separate jobs the paragraph assigns.",
            },
          },
          {
            text: "Paragraph F",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [
                { block: 0, paragraph: 5, quote: "Discharge lighting was efficient, but it also carried light far beyond the street it served" },
              ],
              explanation:
                "Paragraph F pairs efficiency at street level with the skyglow that astronomers documented above cities. The heading compresses that contrast between cheap light below and unwanted brightness above.",
            },
          },
        ],
        options: [
          "An obligation moves from the doorstep to the town",
          "Light becomes a network, and a business",
          "Praise for safer streets outruns the evidence",
          "Two electric lamps, two separate duties",
          "Efficiency below, brightness above",
          "A profession quietly disappears",
        ],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–10",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [
            { kind: "text", text: "In some European cities, householders were ordered to hang a lighted lamp outside the door on" },
            { kind: "blank", no: 6 },
            { kind: "text", text: "nights." },
          ],
          [
            { kind: "text", text: "The 1807 demonstration lit a stretch of Pall Mall from a small" },
            { kind: "blank", no: 7 },
            { kind: "text", text: "nearby." },
          ],
          [
            { kind: "text", text: "The companies that laid gas mains became among the first" },
            { kind: "blank", no: 8 },
            { kind: "text", text: "." },
          ],
          [
            { kind: "text", text: "Arc lamps were reserved for places such as squares, docks and" },
            { kind: "blank", no: 9 },
            { kind: "text", text: "." },
          ],
          [
            { kind: "text", text: "From the 1970s, astronomers documented the" },
            { kind: "blank", no: 10 },
            { kind: "text", text: "of the night sky above cities." },
          ],
        ],
        blanks: [
          {
            no: 6,
            answer: "moonless",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [
                { block: 0, paragraph: 1, quote: "ordered householders to hang a lighted lamp outside the door on moonless nights" },
              ],
              explanation:
                "The sentence reuses the paragraph's own condition: lamps were required on moonless nights, when natural light offered nothing. The missing adjective sits inside that clause, and the sentence's frame keeps every other word of it.",
            },
          },
          {
            no: 7,
            answer: "gasworks",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "when a stretch of Pall Mall was lit from a small gasworks nearby" }],
              explanation:
                "Paragraph C dates the London demonstration to 1807 and names its fuel source: a small gasworks standing near Pall Mall. The sentence keeps the place name and asks for the works that fed it.",
            },
          },
          {
            no: 8,
            answer: "utilities",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "became among the first utilities" }],
              explanation:
                "The passage's exact phrase is that the gas companies became among the first utilities, and the sentence reproduces that comparison minus its final noun. No other candidate noun sits inside the same comparison in the paragraph.",
            },
          },
          {
            no: 9,
            answer: "railway forecourts",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [
                { block: 0, paragraph: 4, quote: "they suited squares, docks and railway forecourts better than residential streets" },
              ],
              explanation:
                "Paragraph E lists the three kinds of place arc lamps suited, and the sentence supplies the first two. The third item of that list completes the blank exactly as the passage prints it.",
            },
          },
          {
            no: 10,
            answer: "brightening",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "astronomers documented the brightening of the night sky above cities" }],
              explanation:
                "The verb documented comes straight from paragraph F, and its object there is the brightening of the sky above cities. The sentence keeps the possessive structure, so the noun is copied whole from the same clause.",
            },
          },
        ],
      },
    ],
    glossary: [
      {
        word: "curfews",
        partOfSpeech: "noun (plural)",
        definition: "rules requiring people to stay indoors after a stated hour; medieval curfews emptied town streets at dusk.",
      },
      {
        word: "lamplighters",
        partOfSpeech: "noun (plural)",
        definition: "workers paid to light, trim and refuel street lamps each evening; Paris employed a small army of them.",
      },
      {
        word: "mains",
        partOfSpeech: "noun (plural)",
        definition: "the pipes or cables that carry gas, water or electricity through a network; gas mains ran beneath the pavement.",
      },
      {
        word: "promenades",
        partOfSpeech: "noun (plural)",
        definition: "slow, showy walks taken in public in order to be seen; evening promenades became fashionable under gaslight.",
      },
      {
        word: "forecourts",
        partOfSpeech: "noun (plural)",
        definition: "the open paved areas in front of stations or public buildings; arc lamps suited railway forecourts.",
      },
      {
        word: "monochrome",
        partOfSpeech: "adjective",
        definition: "consisting of one colour only; under low-pressure sodium light the whole street turned monochrome.",
      },
    ],
    passageNote:
      "A timeline passage: 1667 oil, 1807 gas, the 1870s arc lamp, the 1880s filament, the 1930s sodium, today the diode. The completion items hang off the dates and lists; the headings ride each technology's social job.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-remote-cities",
    title: "Remote work and the city centre",
    variant: "academic",
    section: 3,
    subject: "urban economics",
    topic: "workplace",
    difficulty: 4,
    estimatedMinutes: 18,
    objective:
      "Track an urban-economics argument: how empty offices reshaped rents and city budgets, why the 'donut' proved durable but limited, and how centres are adapting to hybrid work.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "Remote work and the city centre",
        paragraphs: [
          "For two centuries, the office and the city centre grew up together. Clustering clerks, bankers and administrators in one place made meetings cheap, ideas mobile and careers visible, and the districts built around that clustering — towers, sandwich bars, rail termini — became the engine room of urban economies. In the spring of 2020 the arrangement was tested at a scale no policy maker would voluntarily have chosen: within weeks, vast numbers of desk workers were sent home, and the centres of cities from Toronto to Tokyo fell quieter than at any time in living memory.",
          "The first effects showed up in the till. Footfall in central business districts fell by half or more in many cities, and the cafés, dry cleaners, gyms and newsagents that had priced their trade on five-day office crowds saw their incomes collapse. Transport authorities, financed largely by fares, watched revenue drain away as commuter trains ran half empty. Meanwhile something unexpected happened to house prices: rents in the most expensive central postcodes sagged, while demand rose for larger homes with gardens on the periphery. Economists studying the listings christened the pattern the donut effect — a hollowing at the middle, a bulge at the edge.",
          "The donut has proved more durable than many expected. Follow-up studies suggest that the desire for extra space softened only slightly as offices reopened, and that many households made their move permanent once schools and mortgages had been rearranged around it. Yet the same studies carry a caution: the movers were never more than a minority of workers, and the sharpest rent falls were concentrated in a handful of superstar districts rather than across whole cities.",
          "What reopened was not the old week. Where employers settled on hybrid schedules, attendance clustered in the middle of the week: offices busy from Tuesday to Thursday, markedly thinner on Mondays and Fridays. Firms responded by shrinking rather than leaving — surrendering floorspace at lease renewal, subletting floors, redesigning what remained for collaboration rather than rows of desks. For landlords the arithmetic is uncomfortable: a building can lose a large share of its tenants and still stand, but it cannot easily pay for its own upkeep.",
          "The strain reaches city government. In many countries, business rates and commercial property taxes fund a substantial slice of municipal budgets, and those taxes are assessed on offices whose value is now in question. Some commentators warned of a doom loop, in which failing offices weaken city finances, degraded services then drive residents away, and the weakening feeds itself. Whether the loop is real remains contested, but few finance directors are relaxed. One widely canvassed remedy is conversion: turning redundant office blocks into apartments, so that the centre gains residents to replace, in part, the commuters who have thinned out.",
          "Conversion sounds simpler than it is. Many towers have floor plates so deep that rooms in the middle would have no window; plumbing is designed for a few lavatories per floor, not for hundreds of kitchens; and the sums only work where office values have fallen far enough to make rebuilding worthwhile. Even so, planning authorities from New York to Singapore have loosened their rules, and districts that were single-use office canyons a decade ago are acquiring supermarkets, schools and, at last, evening life.",
          "The deeper question is what city centres are for. Some economists argue that agglomeration — the productivity that comes from people meeting by accident — survives every technological shock, because the industries that create the most value are precisely the ones that run on conversation. On that view the centre is being renegotiated rather than retired: a place that people visit fewer days a week but use more intensely, working, eating and being entertained within the same few blocks. The cities that thrive, the argument runs, will be those that treat the emptied desk not as a loss to be mourned but as floor space to be reimagined.",
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
            text: "Before 2020, the concentration of office workers in central districts was a foundation of urban economies.",
            answer: "YES",
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 0,
                  quote: "Clustering clerks, bankers and administrators in one place made meetings cheap, ideas mobile and careers visible",
                },
              ],
              explanation:
                "The opening paragraph presents clustering as the mechanism that built the central district — cheap meetings, mobile ideas, visible careers, and the engine-room metaphor. A statement paraphrasing that foundational role agrees with the writer's framing.",
            },
          },
          {
            text: "The fall in rents was spread evenly across the cities studied.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 2,
                  quote: "the sharpest rent falls were concentrated in a handful of superstar districts rather than across whole cities",
                },
              ],
              explanation:
                "Paragraph C states the opposite of evenly: the falls concentrated in a few famous districts. A located contradiction makes the statement NO, however tempting Not Given feels when the relevant detail sits several paragraphs back.",
              trap: {
                family: "boundary",
                note: "Candidates who miss paragraph C drift to Not Given; the passage does state the distribution, and it contradicts the statement.",
              },
              whyWrong: [
                "NOT GIVEN: the passage gives the information — concentrated in a handful of superstar districts — so the claim is contradicted, not unaddressed.",
              ],
            },
          },
          {
            text: "Most office workers moved permanently to larger homes outside the centre.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "the movers were never more than a minority of workers" }],
              explanation:
                "The writer's caution is explicit: the movers were a minority, never most. The statement's quantity word overstates the scale of the shift, and an overstated quantity is a contradiction rather than a gap in the text.",
              trap: {
                family: "extreme-language",
                note: "'Most' outruns the passage's 'minority'; quantity words are the commonest extreme-language tripwire in verdict items.",
              },
              whyWrong: [
                "YES: the passage reports a minority of workers making permanent moves, which cannot support 'most office workers'.",
              ],
            },
          },
          {
            text: "Under hybrid schedules, offices tend to be emptier at the beginning and end of the working week.",
            answer: "YES",
            meta: {
              skills: ["paraphrase", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "offices busy from Tuesday to Thursday, markedly thinner on Mondays and Fridays" }],
              explanation:
                "Paragraph D describes the mid-week peak directly: busy from Tuesday to Thursday, thinner on Mondays and Fridays. 'Emptier at the beginning and end' is a paraphrase of that rhythm, so the statement agrees with the writer's account.",
            },
          },
          {
            text: "The writer accepts that the doom loop has already begun in most cities.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "Whether the loop is real remains contested" }],
              explanation:
                "The doom loop belongs to commentators, and the writer explicitly withholds judgement on whether it is real. A statement that has the writer accepting it as fact across most cities contradicts the caution the writer states in his own voice.",
              trap: {
                family: "attribution",
                note: "The loop is a commentators' warning; attributing it to the writer — already underway and everywhere — misassigns both the claim and its strength.",
              },
              whyWrong: [
                "NOT GIVEN: the writer does state a position — that whether the loop is real remains contested — so the view is locatable and the statement contradicts it.",
              ],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "summary-completion",
        label: "Questions 6–11",
        instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [
            { kind: "text", text: "When offices emptied in 2020, the cafés that had priced their trade on" },
            { kind: "blank", no: 6 },
            { kind: "text", text: "office crowds lost their incomes. Rents sagged in central postcodes while demand rose for homes on the" },
            { kind: "blank", no: 7 },
            { kind: "text", text: ", a pattern economists named the" },
            { kind: "blank", no: 8 },
            { kind: "text", text: " effect." },
          ],
          [
            { kind: "text", text: "Under hybrid schedules, attendance now clusters in the" },
            { kind: "blank", no: 9 },
            { kind: "text", text: "of the week, and many firms have responded by surrendering" },
            { kind: "blank", no: 10 },
            { kind: "text", text: "at lease renewal. One widely canvassed remedy is to convert office blocks into" },
            { kind: "blank", no: 11 },
            { kind: "text", text: "." },
          ],
        ],
        blanks: [
          {
            no: 6,
            answer: "five-day",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "priced their trade on five-day office crowds" }],
              explanation:
                "Paragraph B describes businesses that had priced their trade on five-day office crowds. The summary keeps 'office crowds' and asks for the qualifier the passage attaches to them in that same clause.",
            },
          },
          {
            no: 7,
            answer: "periphery",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "demand rose for larger homes with gardens on the periphery" }],
              explanation:
                "The passage's sentence pairs sagging central rents with rising demand on the periphery, and the summary mirrors both halves of it. The missing noun is the word the passage uses for the city's edge.",
            },
          },
          {
            no: 8,
            answer: "donut",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Economists studying the listings christened the pattern the donut effect" }],
              explanation:
                "The pattern is named where it is coined: the donut effect, a hollowing at the middle and a bulge at the edge. The summary keeps the word effect and needs the noun that names the shape.",
            },
          },
          {
            no: 9,
            answer: "middle",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "attendance clustered in the middle of the week" }],
              explanation:
                "Paragraph D names the new working rhythm: attendance clusters in the middle of the week. The summary keeps the word week and takes the position word from the same clause in the paragraph.",
            },
          },
          {
            no: 10,
            answer: "floorspace",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "surrendering floorspace at lease renewal, subletting floors" }],
              explanation:
                "Firms shrank rather than left, and the passage's first example of shrinking is surrendering floorspace at lease renewal — the phrase the summary reproduces minus its object. The surrounding words are unchanged as a locating frame.",
            },
          },
          {
            no: 11,
            answer: "apartments",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "turning redundant office blocks into apartments" }],
              explanation:
                "The canvassed remedy is conversion: turning redundant office blocks into apartments. The summary keeps the verb convert and asks for the destination noun that completes paragraph E's own sentence.",
            },
          },
        ],
      },
    ],
    glossary: [
      {
        word: "termini",
        partOfSpeech: "noun (plural)",
        definition: "the end stations of railway lines, especially grand ones; commuter termini fed the office districts.",
      },
      {
        word: "footfall",
        partOfSpeech: "noun",
        definition: "the number of people entering an area or shop in a given period; central footfall halved in many cities.",
      },
      {
        word: "christened",
        partOfSpeech: "verb (past)",
        definition: "given a name, often newly and informally; economists christened the pattern the donut effect.",
      },
      {
        word: "periphery",
        partOfSpeech: "noun",
        definition: "the outer edge of a city or area; demand rose for larger homes on the periphery.",
      },
      {
        word: "canvassed",
        partOfSpeech: "adjective",
        definition: "discussed and put forward for opinion; conversion of offices was a widely canvassed remedy.",
      },
      {
        word: "agglomeration",
        partOfSpeech: "noun",
        definition: "the clustering of people and firms in one place, thought to raise productivity; some economists argue it survives every shock.",
      },
    ],
    passageNote:
      "The argument moves: shock (A–B), durability and its limits (C), the new week (D), fiscal strain and conversion (E–F), the deeper purpose (G). The verdict items sit on paragraphs C and E; the summary condenses B, D and E.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-ocean-noise",
    title: "The noise below the waves",
    variant: "academic",
    section: 3,
    subject: "marine science",
    topic: "environment",
    difficulty: 5,
    estimatedMinutes: 19,
    objective:
      "Follow a cause-and-effect science text: how industrial noise masks marine communication, how strandings and stress were traced to it, and how engineering and regulation are trying to quieten the sea.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "The noise below the waves",
        paragraphs: [
          "Sunlight dies fast in seawater. Even in clear tropical oceans the surface glow is gone by two hundred metres, and the deep sea is dark all year round. Sound, by contrast, travels superbly: about five times faster in water than in air, and with far less of its energy absorbed on the way. A blue whale's low-frequency call can, in the right conditions, be detected hundreds of kilometres from the animal that made it. It is no surprise, then, that marine life has tuned itself to sound — for finding food, avoiding predators, navigating and, in whales and dolphins, for conversation across distances that eyesight could never manage.",
          "The industrial ocean changed the soundtrack. Because water carries sound so well, a ship is audible to a listening whale long before it is visible on any horizon. The dominant offender is the propeller: as blades spin they fold pockets of vacuum into the water, and when those cavities collapse they announce themselves with a broadband rumble. Measurements begun in the 1960s suggest that low-frequency noise in busy ocean basins has risen by several decibels each decade, and much of the increase is laid at the hull of merchant shipping — thousands of vessels, crossing the same crowded lanes, all day, every day.",
          "Shipping is the fog; other sources are the lightning. Seismic surveys searching for oil and gas beneath the seabed fire volleys of compressed air every few seconds, for weeks at a time, each volley a small explosion by acoustic standards. Pile drivers hammer the foundations of offshore wind farms into the bed with blows that carry across an entire sea basin. Naval sonar, built to find submarines, sweeps the mid frequencies at volumes engineered to travel. None of these sounds resembles another, but each adds its signature to the water.",
          "The most pervasive harm is not deafness but masking — one sound burying another. A whale's call evolved to be heard against the ocean's natural quiet; set against engine noise, the same call covers a fraction of its former range, as if a conversation had to be shouted across a busy road. Biologists have documented animals responding in ways that will be familiar to anyone who has tried to talk in a loud bar: calling more loudly, shifting pitch, repeating themselves. Some species simply leave. Researchers have also reported elevated stress hormones in whales exposed to heavy traffic, and laboratory studies suggest that larval fish exposed to noise develop differently, though how far such findings extend to the open sea remains debated.",
          "The most dramatic incidents are the strandings. Beaked whales — deep-diving animals that hunt by sound — have come ashore in groups repeatedly near naval exercises, and official investigations have linked several of these events to mid-frequency sonar. The mechanism remains contested: some scientists argue that the noise triggers a panicked, unnaturally fast ascent, others that gas bubbles form in the blood during flight. What is not contested is the association, and several navies have rewritten their exercise rules accordingly.",
          "The pandemic year of 2020 provided an unplanned experiment. As shipping and tourism slowed, hydrophone networks recorded measurable drops in ocean noise in some regions, and researchers moved quickly to place instruments while the quiet lasted. The lesson often drawn is hopeful: unlike plastic or chemistry, noise pollution stops the instant its source is switched off. The ocean, it appears, can forget a sound within days.",
          "Engineers, meanwhile, have been working on silence. Redesigned propellers that fold fewer cavities into the wake cut the rumble at its source; a ring of air bubbles released around a pile-driving site acts as a curtain, absorbing a large share of each blow before it radiates outward; and simply slowing ships down lowers the noise they make disproportionately to the speed lost. Classification societies have introduced quieter-ship notations, and some ports now offer reduced fees for vessels that meet them.",
          "Regulation lags furthest behind. Noise behaves like a pollutant, and some regulators have begun to treat it as one, but sound ignores territorial waters: a ship flagged anywhere can quieten — or deafen — waters everywhere. Proposals on the table include noise budgets for marine protected areas and seasonal speed limits in sensitive regions, both of which founder on the difficulty of persuading a global industry to pay for a benefit that no single nation owns. The acoustic commons, like the atmosphere, may prove hardest to govern precisely because it belongs to everyone.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction:
          "The passage has eight paragraphs, A–H. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "an explanation of why sea creatures rely on sound rather than sight",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Sound, by contrast, travels superbly: about five times faster in water than in air" }],
              explanation:
                "Paragraph A contrasts the quick death of sunlight with the reach of sound, and concludes that marine life has tuned itself to hearing. The statement's request for a reason is answered by exactly that contrast between light and sound in water.",
            },
          },
          {
            text: "a comparison between noise-stressed animals and people trying to converse",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "in ways that will be familiar to anyone who has tried to talk in a loud bar" }],
              explanation:
                "Paragraph D borrows the loud bar to describe whales calling more loudly, shifting pitch and repeating themselves. The statement asks for that human comparison, which lives inside the sentence about documented animal responses.",
            },
          },
          {
            text: "an unexpected chance to measure the ocean in silence",
            correct: 5,
            meta: {
              skills: ["scanning", "inference"],
              evidence: [
                {
                  block: 0,
                  paragraph: 5,
                  quote: "As shipping and tourism slowed, hydrophone networks recorded measurable drops in ocean noise in some regions",
                },
              ],
              explanation:
                "Paragraph F describes the pandemic slowdown as an unplanned experiment and the instruments that captured it. An 'unexpected chance' paraphrases the unplanned opportunity, and the measurements are named in the same paragraph.",
            },
          },
          {
            text: "technical measures that attack noise where it begins",
            correct: 6,
            lure: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "cut the rumble at its source" }],
              explanation:
                "Paragraph G collects the engineering fixes — redesigned propellers, bubble curtains, slower ships — each described as cutting noise at or near its source. The statement paraphrases that collection of remedies rather than any single one.",
              trap: {
                family: "mention-lure",
                note: "Paragraph B explains how propellers create the rumble; the fixes for that rumble are listed only in paragraph G.",
              },
              whyWrong: [
                "B: paragraph B is the diagnosis — how propeller cavities create noise — and offers no remedy of any kind.",
              ],
            },
          },
          {
            text: "a reason why international agreement is hard to reach",
            correct: 7,
            meta: {
              skills: ["scanning", "inference"],
              evidence: [{ block: 0, paragraph: 7, quote: "sound ignores territorial waters" }],
              explanation:
                "Paragraph H argues that noise crosses borders as easily as the ships that make it, so no single nation can own the problem or the benefit of solving it. That is the stated reason agreement is difficult, and it appears nowhere else.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F", "G", "H"],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 6–8",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "The 'busy road' comparison in paragraph D is intended to",
            options: [
              "explain how engine noise shrinks the range of whale calls",
              "argue that whales should move away from shipping lanes",
              "show that whales quickly adapt to continuous noise",
              "prove that whale calls have grown louder over the decades",
            ],
            correct: 0,
            lure: 2,
            meta: {
              skills: ["inference", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 3,
                  quote:
                    "set against engine noise, the same call covers a fraction of its former range, as if a conversation had to be shouted across a busy road",
                },
              ],
              explanation:
                "The comparison illustrates masking: against engine noise a call carries only a fraction of its natural range. The simile makes the shrinkage imaginable, which is exactly what option A states in plain words.",
              trap: {
                family: "mention-lure",
                note: "Option C lifts 'calling more loudly' from the sentences that follow, but those are moment-by-moment responses, not adaptation.",
              },
              whyWrong: [
                "B: the paragraph notes that some species leave, but the simile is about audibility, not a recommendation to relocate.",
                "C: the loud-bar behaviours are immediate reactions to noise, not evidence that whales get used to it.",
                "D: the passage never measures change over time; it compares the same call with and without noise.",
              ],
            },
          },
          {
            stem: "How does the writer present the causes of beaked whale strandings?",
            options: [
              "fully established, with an agreed mechanism",
              "an association established, its mechanism still disputed",
              "uncertain even in their link to naval exercises",
              "now solved by changes to naval rules",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "The mechanism remains contested" }],
              explanation:
                "Paragraph E separates two levels: official investigations link several strandings to sonar, while scientists still argue about how the harm is done. Option B preserves both halves — the established association and the contested cause.",
              trap: {
                family: "extreme-language",
                note: "Option A's confidence outruns a paragraph built on the word 'contested'; hedged claims must be read at the level of their hedge.",
              },
              whyWrong: [
                "A: the mechanism remains contested, so no agreement exists to state.",
                "C: the association is precisely what is not contested — investigations have linked several events to sonar.",
                "D: navies changed their exercise rules, but the passage never claims the underlying cause was settled.",
              ],
            },
          },
          {
            stem: "In the final paragraph, governing ocean noise is difficult chiefly because",
            options: [
              "no regulator yet accepts noise as a pollutant",
              "the loudest sources all belong to navies",
              "the benefit of quiet is shared while the cost falls on particular industries",
              "researchers doubt that noise affects marine life",
            ],
            correct: 2,
            lure: 3,
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 7, quote: "persuading a global industry to pay for a benefit that no single nation owns" }],
              explanation:
                "The closing sentence names the difficulty precisely: a global industry must be persuaded to pay for a benefit nobody owns. Option C restates that split between a shared benefit and a concentrated cost.",
              trap: {
                family: "mention-lure",
                note: "Option D borrows the scientists' disagreements from earlier paragraphs, but the final paragraph's obstacle is economic, not scientific.",
              },
              whyWrong: [
                "A: the passage says some regulators have begun to treat noise as a pollutant.",
                "B: the passage never ranks navies as the loudest source; shipping is described as the dominant offender.",
                "D: doubts about research findings are raised in paragraph D, not as the final obstacle to governing.",
              ],
            },
          },
        ],
      },
      {
        id: "q3",
        type: "table-completion",
        label: "Questions 9–11",
        instruction: "Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Human noise in the ocean" }],
          [{ kind: "text", text: "Source of noise" }, { kind: "text", text: "What the passage says" }],
          [
            { kind: "text", text: "Merchant shipping" },
            { kind: "text", text: "a broadband rumble produced when propeller" },
            { kind: "blank", no: 9 },
            { kind: "text", text: "collapse" },
          ],
          [
            { kind: "text", text: "Seismic surveys" },
            { kind: "text", text: "volleys of" },
            { kind: "blank", no: 10 },
            { kind: "text", text: "fired every few seconds" },
          ],
          [
            { kind: "text", text: "Wind-farm construction" },
            { kind: "text", text: "pile-driving blows quietened by a curtain of air" },
            { kind: "blank", no: 11 },
          ],
        ],
        blanks: [
          {
            no: 9,
            answer: "cavities",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [
                { block: 0, paragraph: 1, quote: "when those cavities collapse they announce themselves with a broadband rumble" },
              ],
              explanation:
                "The table names the source and its sound; the missing word is the noun whose collapse the passage blames for the propeller's rumble. Paragraph B carries that noun in the same sentence as the rumble it produces.",
            },
          },
          {
            no: 10,
            answer: "compressed air",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "fire volleys of compressed air every few seconds, for weeks at a time" }],
              explanation:
                "The seismic row keeps the rhythm — volleys every few seconds — and asks what those volleys consist of. Paragraph C names the material in the same clause: compressed air, stored and released by the survey vessels.",
            },
          },
          {
            no: 11,
            answer: "bubbles",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 6, quote: "a ring of air bubbles released around a pile-driving site acts as a curtain" }],
              explanation:
                "The construction row pairs pile-driving with its mitigation, and the mitigation is the curtain of air bubbles from paragraph G. The table keeps the phrase 'curtain of air' and needs the noun that completes it.",
            },
          },
        ],
      },
    ],
    glossary: [
      {
        word: "masking",
        partOfSpeech: "noun",
        definition: "the burying of one sound by another so that signals cannot be separated; engine noise masks whale calls.",
      },
      {
        word: "seismic",
        partOfSpeech: "adjective",
        definition: "relating to surveying the ground with sound pulses; seismic surveys fire volleys of compressed air.",
      },
      {
        word: "strandings",
        partOfSpeech: "noun (plural)",
        definition: "events in which sea animals come ashore alive and cannot return; beaked whale strandings cluster near naval exercises.",
      },
      {
        word: "hydrophone",
        partOfSpeech: "noun",
        definition: "an underwater microphone; hydrophone networks recorded the pandemic quiet.",
      },
      {
        word: "sonar",
        partOfSpeech: "noun",
        definition: "equipment that detects objects by sending sound pulses and reading the echoes; naval sonar sweeps the mid frequencies.",
      },
      {
        word: "volleys",
        partOfSpeech: "noun (plural)",
        definition: "bursts released in quick succession; seismic surveys fire volleys every few seconds for weeks at a time.",
      },
    ],
    passageNote:
      "Sources build A–C, harm fills D–E, hope follows F–H. The location items span the whole map of the passage; the table condenses the three signature sounds of paragraphs B, C and G.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-spelling",
    title: "Fixing English spelling",
    variant: "academic",
    section: 2,
    subject: "orthography",
    topic: "culture",
    difficulty: 4,
    estimatedMinutes: 16,
    objective:
      "Follow a cultural-history argument: why English spelling stopped matching English speech, why a century of reform campaigns failed, and how spelling nevertheless keeps changing from below.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Fixing English spelling",
        paragraphs: [
          "Every learner of English eventually asks why the language spells 'though' with six letters and sounds it with two, why 'night' carries a silent g, and why 'colonel' rhymes with 'kernel'. The usual answer is that English spelling is a museum rather than a map: it preserves, in ink, the layered history of everything the language has borrowed and everything its speakers have forgotten how to pronounce. To reformers, that museum is an expensive luxury; to its defenders, it is precisely the point.",
          "The chaos has identifiable causes. English has always borrowed promiscuously — Latin and Greek words arrived with scholarship, French words with conquest — and each import kept some trace of its home spelling. Then, in the fifteenth century, printing froze the written language just as the spoken one was beginning its Great Vowel Shift, a slow rotation of the long vowels that turned the once-audible vowels of 'name' and 'time' into their modern sounds. The printed page kept the old letters while the mouth moved on. Compounding the tangle, some early typesetters, paid by the line, were accused of padding spellings to earn more.",
          "Reform proposals are nearly as old as printing itself. Sixteenth-century scholars drafted phonetic alphabets for English; in the newly independent United States, Noah Webster argued that a new nation deserved a cleaner script, and spellings such as 'color' and 'center' — relics of his campaign — still divide American from British usage. Webster's changes stuck because they were few, useful and attached to a national project. Later reformers, lacking any such anchor, found the going harder.",
          "The most serious organised attempt came in 1906, when a board financed by the industrialist Andrew Carnegie set out to simplify American spelling and persuaded President Theodore Roosevelt to order government printers to adopt three hundred trimmed spellings. Congress found the notion hilarious, the newspapers found it irresistible, and the order was quietly dropped. The playwright George Bernard Shaw campaigned for a new alphabet all his life and left money in his will to design one; the joke often attributed to him — that 'fish' could be spelt 'ghoti', with the gh of 'enough' and the ti of 'nation' — survives because it compresses the whole complaint into five letters.",
          "Why did the grand schemes fail? Partly pronunciation: a spelling reform matched to the accent of London betrays the accent of Glasgow, and English is spoken with more accents than any other language. Partly etymology: the silent letters reformers dislike carry clues — the b in 'debt' marks its Latin descent. Partly power: someone must be given the authority to decide, and no academy has ever held it. Spelling, in the end, is a convention owned by its millions of users, and conventions do not respond to decrees.",
          "Yet spelling changes anyway — slowly, and from below. Printers dropped the k from 'musick' and the final e from dozens of words in the search for tidiness; 'mediaeval' surrendered to 'medieval'; American English accepted 'catalog' where British English kept 'catalogue'. None of these shifts required a decree. More recently, keyboards have begun to enforce the standard with a thoroughness no reformer achieved: autocorrect quietly mends our lapses, and each mended message nudges the spelling of a billion texts back towards the dictionary.",
          "The museum, in other words, is still under renovation, but renovated by accident rather than by committee. Defenders note what would be lost: the kinship of 'sign' and 'signal', the fossil history inside every borrowed word. Reformers note what is spent: studies of school systems suggest that English-speaking children need a year or more of extra instruction to reach the reading independence that more regular scripts deliver sooner. The debate is anything but academic — it is a disagreement about how much of the past a writing system should be made to carry.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "true-false-not-given",
        label: "Questions 1–5",
        instruction:
          "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "English spelling preserves traces of where the language's words came from.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 0,
                  quote: "it preserves, in ink, the layered history of everything the language has borrowed",
                },
              ],
              explanation:
                "The museum metaphor states the claim in other words: spelling keeps the layered history of borrowings in ink. The statement's 'traces of where words came from' paraphrases that record, so claim and passage agree.",
            },
          },
          {
            text: "Printing had already fixed English spelling before the Great Vowel Shift began.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "printing froze the written language just as the spoken one was beginning its Great Vowel Shift",
                },
              ],
              explanation:
                "The passage dates the printing freeze to the moment the shift was beginning, not to a point before it. The statement moves the two events into the wrong sequence, and the timeline sentence contradicts that ordering directly.",
              trap: {
                family: "order",
                note: "Right facts, wrong sequence: both events are real, but the passage prints 'just as', while the statement prints 'before'.",
              },
              whyWrong: [
                "TRUE: 'just as it was beginning' places the freeze alongside the shift's start, not earlier — near-simultaneous, not sequential.",
              ],
            },
          },
          {
            text: "Webster's spellings succeeded because printers found them easier to set.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 2,
                  quote: "Webster's changes stuck because they were few, useful and attached to a national project",
                },
              ],
              explanation:
                "The passage gives three reasons Webster's reforms stuck — few, useful and national — and printers appear nowhere among them. Silence about the printing trade is not contradiction, so the statement is Not Given.",
              trap: {
                family: "boundary",
                note: "The statement names a plausible industry and the passage names other reasons; absence of a mention is Not Given, not FALSE.",
              },
              whyWrong: [
                "FALSE: nothing in the passage says printers opposed or supported Webster; the text simply offers different reasons for the reforms' success.",
              ],
            },
          },
          {
            text: "Roosevelt's simplified spellings were abandoned.",
            answer: "TRUE",
            meta: {
              skills: ["paraphrase", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "the order was quietly dropped" }],
              explanation:
                "The order to adopt three hundred trimmed spellings was quietly dropped after Congress mocked it, which paraphrases abandonment. The newspapers' delight and Congress's mockery explain the retreat, and the statement reports only its outcome.",
            },
          },
          {
            text: "Some silent letters carry information about a word's history.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "the silent letters reformers dislike carry clues" }],
              explanation:
                "Paragraph E gives the principle and the example in the same breath: the silent b in 'debt' marks its Latin descent. Silent letters as carriers of clues is exactly the statement's claim about a word's history.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "matching-sentence-endings",
        label: "Questions 6–9",
        instruction:
          "Complete each sentence with the correct ending, A–E, below. There are more endings than sentences, so you will not use them all.",
        extraOption: true,
        reuseNote: "There are more endings than sentences, so you will not use them all.",
        items: [
          {
            text: "As a result of the Great Vowel Shift, the vowels in words such as 'name' and 'time'",
            correct: 0,
            lure: 4,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "turned the once-audible vowels of 'name' and 'time' into their modern sounds",
                },
              ],
              explanation:
                "The Shift's own sentence says the once-audible vowels turned into their modern sounds, so the ending about today's sounds completes the cause correctly. The lure ending describes printing's effect, a different event in the same paragraph.",
              trap: {
                family: "mention-lure",
                note: "The lure ending borrows 'froze the written language' from the neighbouring sentence about printing — a different event from the shift.",
              },
              whyWrong: [
                "E: freezing the written language was printing's doing, and it happened alongside the shift, not as its result.",
              ],
            },
          },
          {
            text: "Some early typesetters were accused of",
            correct: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "some early typesetters, paid by the line, were accused of padding spellings to earn more",
                },
              ],
              explanation:
                "Paragraph B's final sentence states the accusation word for word: padding spellings to earn more. The ending paraphrases 'earn more' as 'increase their pay', and it is the only option that keeps both the act and the motive.",
            },
          },
          {
            text: "The 'ghoti' joke makes its point by",
            correct: 2,
            meta: {
              skills: ["paraphrase", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "with the gh of 'enough' and the ti of 'nation'" }],
              explanation:
                "The joke splices the gh of one word with the ti of another to build 'ghoti', showing that English letters sound differently in different company. Assembling a word from other words' scraps names that device exactly.",
            },
          },
          {
            text: "Modern keyboards help enforce standard spelling by",
            correct: 3,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "autocorrect quietly mends our lapses" }],
              explanation:
                "Paragraph F credits autocorrect with quietly mending lapses, enforcing the dictionary more thoroughly than any reformer achieved. The ending paraphrases 'mends' as 'repairing', keeping both the agent and its quiet manner.",
            },
          },
        ],
        options: [
          "acquired the sounds they have today",
          "padding spellings to increase their pay",
          "assembling a word from scraps of others",
          "quietly repairing writers' lapses",
          "froze the written language for the first time",
        ],
      },
    ],
    glossary: [
      {
        word: "promiscuously",
        partOfSpeech: "adverb",
        definition: "freely and without discrimination; English borrowed promiscuously from Latin, Greek and French.",
      },
      {
        word: "phonetic",
        partOfSpeech: "adjective",
        definition: "representing speech sounds directly, one symbol per sound; phonetic alphabets were drafted for English in the sixteenth century.",
      },
      {
        word: "etymology",
        partOfSpeech: "noun",
        definition: "the study of where words come from; etymology is one of the reasons silent letters survive.",
      },
      {
        word: "decrees",
        partOfSpeech: "noun (plural)",
        definition: "official orders that something must be done; spelling conventions do not respond to decrees.",
      },
      {
        word: "lapses",
        partOfSpeech: "noun (plural)",
        definition: "small errors or slips; autocorrect quietly mends lapses in a billion texts.",
      },
      {
        word: "renovation",
        partOfSpeech: "noun",
        definition: "the work of repairing and improving something; the spelling museum is under renovation by accident.",
      },
    ],
    passageNote:
      "Causes (A–B), failed reform (C–D), reasons for failure (E), change from below (F), the verdict (G). The verdict items sit on timeline discipline; the sentence endings test precise attribution of causes to events.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-energy-coops",
    title: "Power to the people",
    variant: "academic",
    section: 1,
    subject: "energy economics",
    topic: "economics",
    difficulty: 4,
    estimatedMinutes: 15,
    objective:
      "Understand an economics case study: how community-owned renewables are structured, why local ownership smooths planning, and what still limits the model's spread.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Power to the people",
        paragraphs: [
          "There is a category of power station that appears in no boardroom prospectus: the wind turbine or rooftop solar array owned by the community it serves. Across northern Europe, and increasingly elsewhere, villages, small towns and city neighbourhoods have formed energy cooperatives — legal associations in which residents buy shares in local generating equipment and share the returns. The scale is modest, typically a handful of turbines or a field of panels, but the model has quietly become one of the most replicated experiments in local economics anywhere in the world.",
          "The ancestry is Danish. When the oil shocks of the 1970s landed on a country with no fossil fuels of its own, Danish farmers and blacksmiths began buying small wind machines together, pooling savings into cooperative turbine companies. The idea matured into landmark projects such as the offshore wind farm that faces Copenhagen, half of which belongs to a cooperative of some ten thousand residents. Germany took the logic further: by some estimates, citizens and farmers owned close to half of the renewable generating capacity installed during the early years of the country's energy transition.",
          "Mechanically, a cooperative is simple. Members buy shares, usually capped so that no single investor can dominate, and each member carries one vote whatever the size of the holding. The co-operative sells its electricity under long-term contracts or through the wholesale market, pays its costs, services any loan, and returns what remains to members or to a community fund. Boards are typically volunteers — teachers, farmers, engineers — and the funds they dispense have insulated village halls, re-roofed youth clubs and bought the local ambulance its defibrillator.",
          "Ownership, it turns out, changes the politics of the planning meeting. Wind farms imposed by distant developers meet organised resistance; wind farms whose shares are held by the people who can see them from their kitchens meet something closer to patience. Researchers studying planning outcomes suggest that local financial participation measurably reduces opposition, and developers in several countries now reserve a slice of project equity for nearby residents precisely to buy that peace.",
          "The obstacles are just as real. Generating equipment is expensive, and a village association cannot raise capital as cheaply as a utility with a balance sheet the size of a small state. Grid operators, trained by decades of dealing with a handful of large producers, queue small newcomers for connection studies that can outlast the volunteers who applied. Members' boards age; treasurers retire; enthusiasm, once spent on ribbon-cuttings, must be re-found for compliance paperwork. Several early cooperatives have merged, wound up, or sold their assets to commercial operators — an exit that is rarely celebrated in the annual report.",
          "The model keeps evolving regardless. Crowdfunding platforms now assemble hundreds of small investors in days, spreading a project's risk across a membership that no village hall could hold. Municipal utilities, once sold off to private groups, are being re-founded by towns that want their own generation. And because the people most likely to be excluded from rooftop solar are those who rent their homes, some cities have pioneered 'solar gardens' — shared arrays on public land whose output is credited to subscribers, tenants included, through the ordinary electricity bill.",
          "By raw output, community energy remains a footnote: across even the most enthusiastic countries, cooperatives supply electricity measured in single-digit percentages of the total. But transitions run on more than electrons. Surveys in several nations find markedly higher public acceptance of renewable build-out where local ownership is visible, and governments from Scotland to Japan have written community participation into their energy laws. The cooperative turbine on the hill is small; what it signals — that the energy system belongs to somebody in particular — may matter more than the megawatts.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "note-completion",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "Community energy cooperatives — a primer" }],
          [
            { kind: "text", text: "• Danish origins: a collective answer by farmers to the" },
            { kind: "blank", no: 1 },
            { kind: "text", text: "of the 1970s." },
          ],
          [
            { kind: "text", text: "• Ownership: members buy" },
            { kind: "blank", no: 2 },
            { kind: "text", text: ", capped so that no single investor dominates." },
          ],
          [
            { kind: "text", text: "• Income: electricity is sold under" },
            { kind: "blank", no: 3 },
            { kind: "text", text: "or through the wholesale market." },
          ],
          [
            { kind: "text", text: "• Surplus: returned to members or paid into a" },
            { kind: "blank", no: 4 },
            { kind: "text", text: "." },
          ],
          [
            { kind: "text", text: "• Siting: local financial participation measurably reduces" },
            { kind: "blank", no: 5 },
            { kind: "text", text: "to projects." },
          ],
          [
            { kind: "text", text: "• Access: renters can subscribe to 'solar gardens' on" },
            { kind: "blank", no: 6 },
            { kind: "text", text: "." },
          ],
        ],
        blanks: [
          {
            no: 1,
            answer: "oil shocks",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "When the oil shocks of the 1970s landed on a country with no fossil fuels of its own",
                },
              ],
              explanation:
                "The note keeps the decade and asks for the event that struck Denmark's fuel supply. Paragraph B dates the model's origin to the oil shocks of the 1970s, which supply the missing noun phrase exactly.",
            },
          },
          {
            no: 2,
            answer: "shares",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Members buy shares, usually capped so that no single investor can dominate" }],
              explanation:
                "The ownership line reproduces paragraph C's cap on domination, and the thing members buy in that sentence is shares. The note's 'capped' clause points straight at the same sentence in the passage.",
            },
          },
          {
            no: 3,
            answer: "long-term contracts",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [
                { block: 0, paragraph: 2, quote: "sells its electricity under long-term contracts or through the wholesale market" },
              ],
              explanation:
                "The income line keeps the wholesale market as one channel and asks for the other. Paragraph C gives the pair in a single clause: long-term contracts or the wholesale market.",
            },
          },
          {
            no: 4,
            answer: "community fund",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "returns what remains to members or to a community fund" }],
              explanation:
                "The surplus line mirrors paragraph C's division of what remains: to members, or to a community fund. The note keeps 'members' and asks for the destination of the other half of the surplus.",
            },
          },
          {
            no: 5,
            answer: "opposition",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "local financial participation measurably reduces opposition" }],
              explanation:
                "The siting line summarises paragraph D's planning research, where local financial participation is said to reduce opposition measurably. The missing noun is the thing that the research found reduced.",
            },
          },
          {
            no: 6,
            answer: "public land",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "shared arrays on public land whose output is credited to subscribers" }],
              explanation:
                "The access line concerns solar gardens, which paragraph F locates on public land with the output credited to subscribers, tenants included. The place phrase completes the note as the passage prints it.",
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
            stem: "The offshore wind farm near Copenhagen is mentioned as an example of",
            options: [
              "a scheme in which residents own a major share",
              "the first wind machine ever built by farmers",
              "a cooperative that sold its assets to a commercial operator",
              "a generating station financed entirely by the municipality",
            ],
            correct: 0,
            lure: 3,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "half of which belongs to a cooperative of some ten thousand residents" }],
              explanation:
                "The passage's flagship example is the wind farm facing Copenhagen, half owned by a residents' cooperative. Option A paraphrases that stake, while the other options attach the wrong owners to the project.",
              whyWrong: [
                "B: the first machines were small farmer windmills; this farm is the mature flagship of the later movement.",
                "C: selling assets describes the fate of some struggling cooperatives in paragraph E, not this project.",
                "D: municipal utilities appear in paragraph F as a separate development; this farm belongs half to residents.",
              ],
            },
          },
          {
            stem: "Developers reserve part of a project's equity for nearby residents because",
            options: [
              "international law requires it of every project",
              "local ownership makes developments easier to site",
              "residents demand cheaper electricity in return",
              "lenders refuse to finance projects without it",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 3,
                  quote: "developers in several countries now reserve a slice of project equity for nearby residents precisely to buy that peace",
                },
              ],
              explanation:
                "The stated reason is 'to buy that peace' — the reduced opposition described in the previous sentence. Option B turns the metaphor into plain reasoning about siting, which is what the developers are actually buying.",
              trap: {
                family: "extreme-language",
                note: "Option A turns 'in several countries' into 'international law' and 'every project' — two absolutes the passage never makes.",
              },
              whyWrong: [
                "A: the passage says several countries, not international law, and nothing about every project.",
                "C: cheaper electricity for residents is nowhere offered as a term of the bargain.",
                "D: lenders and financing appear only as an obstacle for cooperatives, not as enforcers of local shares.",
              ],
            },
          },
          {
            stem: "What does the writer conclude about community energy in the final paragraph?",
            options: [
              "It now supplies a large share of the world's electricity",
              "Its greatest value may be the backing it lends the energy transition",
              "It has largely failed to win political support",
              "It is expected to replace the large utilities",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [
                { block: 0, paragraph: 6, quote: "transitions run on more than electrons" },
                { block: 0, paragraph: 6, quote: "markedly higher public acceptance of renewable build-out where local ownership is visible" },
              ],
              explanation:
                "The conclusion sets a footnote of megawatts against a surplus of acceptance: output is single-digit, but public backing of the wider transition rises where ownership is local. Option B captures that weighting between electrons and legitimacy.",
              trap: {
                family: "mention-lure",
                note: "Option A lifts the passage's 'single-digit percentages' and reverses its meaning — the figure is cited to show how small the output share is.",
              },
              whyWrong: [
                "A: single-digit percentages are cited as a footnote, the opposite of a large share.",
                "C: the paragraph says governments have written community participation into their energy laws.",
                "D: the writer says the model's significance is political and symbolic, not a replacement for utilities.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      {
        word: "prospectus",
        partOfSpeech: "noun",
        definition: "a formal document describing a business venture to investors; the cooperative turbine appears in no boardroom prospectus.",
      },
      {
        word: "ancestry",
        partOfSpeech: "noun",
        definition: "origin or line of descent; the cooperative model's ancestry is Danish.",
      },
      {
        word: "equity",
        partOfSpeech: "noun",
        definition: "ownership shares in a project or company; developers reserve a slice of project equity for nearby residents.",
      },
      {
        word: "compliance",
        partOfSpeech: "noun",
        definition: "the work of obeying rules and regulations; volunteer boards must re-find enthusiasm for compliance paperwork.",
      },
      {
        word: "megawatts",
        partOfSpeech: "noun (plural)",
        definition: "units of electrical power; the turbine on the hill may matter more than its megawatts.",
      },
      {
        word: "defibrillator",
        partOfSpeech: "noun",
        definition: "a device that restores a normal heartbeat with an electric shock; one community fund bought the local ambulance its defibrillator.",
      },
    ],
    passageNote:
      "Origins and structure (A–C), the politics of siting (D), obstacles and evolution (E–F), the verdict (G). The notes ride the structure paragraphs; the multiple choice probes the Copenhagen example, the developers' motive and the conclusion's weighting.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-sports-fatigue",
    title: "Tired muscles, tired minds: fatigue in sport",
    variant: "academic",
    section: 3,
    subject: "sports science",
    topic: "health",
    difficulty: 5,
    estimatedMinutes: 19,
    objective:
      "Follow a physiology controversy: from Victorian fatigue toxins to the catastrophe model, the brain's 'central governor', mental fatigue and the mouth-rinse evidence, ending in a negotiated view of exhaustion.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Tired muscles, tired minds: fatigue in sport",
        paragraphs: [
          "Every race ends in the same mystery. At some point the runner slows, the rower's stroke shortens, the weightlifter's bar wavers — and the body, which was performing beautifully a minute earlier, refuses to continue. Why it refuses is one of the oldest arguments in physiology, and the argument has never really been settled: it has merely moved, over a hundred and fifty years, from the muscle to the brain.",
          "The first scientific theory treated fatigue as a kind of self-poisoning. Victorian physiologists believed that hard-working muscles released a fatigue toxin into the blood, and that exhaustion arrived when the poison reached the brain; the remedies proposed were rest, transfusions and, in one memorable paper, injections of blood from rested animals. The toxin was never found. But the theory left a durable intuition: that something accumulates during effort until performance collapses.",
          "The modern descendant of that intuition is the catastrophe model, which locates failure in the muscle itself. Train hard enough, the argument runs, and the engine runs out of fuel: glycogen stores empty, blood glucose sags, and the muscle fibres, starved, can no longer contract. The model has evidence — muscle biopsies taken at the point of exhaustion often show glycogen stores close to empty — and it explains the fabled 'wall' that marathon runners meet late in the race. It is a tidy account of a machine breaking down.",
          "Yet the tidy account has an awkward neighbour: the finishing sprint. Athletes who seemed to be running on fumes routinely accelerate in the last hundred metres of a race they were, by the catastrophe model's logic, too empty to finish. A South African physiologist drew the obvious lesson: if the body can still sprint at the end, something must have been rationing it all along. In his central governor model, the brain continuously monitors the body's signals and throttles muscle recruitment in advance, holding a protective reserve so that the catastrophe never arrives. Fatigue, in this picture, is not a mechanical failure but an emotion — a forecast the brain issues to keep the athlete out of danger.",
          "The brain's involvement has been tested directly. In a series of experiments, volunteers asked to perform demanding computer work for ninety minutes before cycling gave up cycling significantly earlier than control volunteers who had watched gentle documentaries — while objective measures of their muscles' condition showed no meaningful difference. What the mentally tired riders reported was not weaker legs but higher effort: the same pedal force felt harder. Sport scientists use a standard scale of perceived exertion, and the finding, replicated repeatedly, is that the needle on that scale can be moved by the mind alone.",
          "One experiment has become legend among sports scientists precisely because it separates fuel from information. Riders who merely rinse their mouths with a carbohydrate drink — without swallowing a drop — ride measurably longer than riders given water. Nothing reaches the muscles; the improvement arrives because receptors in the mouth detect carbohydrate and report it to the brain, which appears to respond by releasing its usual caution. The mouth, it seems, is not just an entrance for fuel but a sensor, and performance can be bought with information the body never uses.",
          "Practitioners have drawn practical conclusions. Pacing is now studied as a skill: the opening minutes of a race are set not by the engine's limits but by an expectation the athlete holds, and expectations, unlike engines, can be trained. Experiments on motivational self-talk — replacing 'this hurts' with structured, practised phrases — have shown small but consistent improvements in endurance tasks. Sleep, too, has joined the toolkit, with studies suggesting that extended rest lowers perceived effort at a given workload. The training of athletes now includes the training of the forecast.",
          "None of this abolishes the muscle. Bodies do run low on fuel, do overheat, do accumulate damage that the brain can read. But the newer work relocates the final say: exhaustion is less a cliff edge than a negotiation, with the brain weighing signals from the muscles against the costs of continuing, the meaning of the moment, and the distance still to go. The Victorian toxin was never found, and perhaps it never existed. What the search uncovered instead was something more interesting: a body built to stop well before it breaks, and a sport built on discovering exactly how close to that line a human can live.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction:
          "Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–vii, next to questions 1–6.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 0,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "Victorian physiologists believed that hard-working muscles released a fatigue toxin into the blood",
                },
              ],
              explanation:
                "Paragraph B presents the first theory — a fatigue toxin self-poisoning the blood — and closes by noting the toxin was never found. The heading names both the theory's substance and its fate, which frame the paragraph.",
            },
          },
          {
            text: "Paragraph C",
            correct: 1,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Train hard enough, the argument runs, and the engine runs out of fuel" }],
              explanation:
                "Paragraph C is built on the engine metaphor: glycogen empties, fibres starve, the machine breaks down. The heading lifts the metaphor and names the failure the paragraph describes, without echoing its later vocabulary.",
            },
          },
          {
            text: "Paragraph D",
            correct: 2,
            lure: 1,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [
                {
                  block: 0,
                  paragraph: 3,
                  quote: "the brain continuously monitors the body's signals and throttles muscle recruitment in advance",
                },
              ],
              explanation:
                "Paragraph D relocates control to the brain, which throttles output in advance to hold a protective reserve. The heading names the throttle and its manager, while the engine heading belongs to the model this paragraph displaces.",
              trap: {
                family: "mention-lure",
                note: "The engine vocabulary tempts skimmers back to the fuel heading, but paragraph D's engine is the one being overruled, not the one running out.",
              },
              whyWrong: [
                "i: the engine-out-of-fuel account is paragraph C's catastrophe model, which paragraph D is written to challenge.",
              ],
            },
          },
          {
            text: "Paragraph E",
            correct: 3,
            lure: 6,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 4,
                  quote: "gave up cycling significantly earlier than control volunteers who had watched gentle documentaries",
                },
              ],
              explanation:
                "Paragraph E runs the mental-fatigue experiments: demanding computer work shortens endurance while the muscles test the same. The heading compresses that finding about thinking draining endurance.",
              trap: {
                family: "mention-lure",
                note: "The unused heading borrows the word 'scale' from the perceived-exertion sentence, but the scale measures effort, not muscle power, and is one sentence rather than the paragraph's job.",
              },
              whyWrong: [
                "vi: the perceived-exertion scale appears in passing and measures effort, not power; the paragraph's organising idea is mental fatigue shortening endurance.",
              ],
            },
          },
          {
            text: "Paragraph F",
            correct: 4,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 5,
                  quote: "rinse their mouths with a carbohydrate drink — without swallowing a drop — ride measurably longer",
                },
              ],
              explanation:
                "Paragraph F's centrepiece is the mouth-rinse experiment, in which rinsing without swallowing improves performance. The heading's 'mouths, not muscles' names that dissociation of information from fuel exactly.",
            },
          },
          {
            text: "Paragraph G",
            correct: 5,
            lure: 2,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 6,
                  quote: "the opening minutes of a race are set not by the engine's limits but by an expectation the athlete holds",
                },
              ],
              explanation:
                "Paragraph G turns theory into practice: pacing as a skill, trained self-talk, sleep. The common thread is adjusting what the athlete expects, which the heading calls training the expectation.",
              whyWrong: [
                "ii: paragraph G assumes the brain's throttle described earlier, but its own subject is the training practice built upon it.",
              ],
            },
          },
        ],
        options: [
          "A poison that was never found",
          "An engine that runs out of fuel",
          "A throttle managed by the brain",
          "When thinking drains endurance",
          "An experiment about mouths, not muscles",
          "Training the expectation, not just the engine",
          "A scale for measuring muscle power",
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 7–10",
        instruction:
          "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "In the catastrophe model, exhaustion sets in when muscle fibres can no longer contract.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "the muscle fibres, starved, can no longer contract" }],
              explanation:
                "Paragraph C's causal chain ends with starved fibres unable to contract, which is the statement's mechanism in the passage's own words. The model and the statement therefore agree exactly on where failure happens.",
            },
          },
          {
            text: "The central governor account was developed to explain how athletes can sprint near the end of a race.",
            answer: "YES",
            meta: {
              skills: ["inference", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 3,
                  quote: "Athletes who seemed to be running on fumes routinely accelerate in the last hundred metres",
                },
              ],
              explanation:
                "Paragraph D opens with the finishing-sprint paradox and says the physiologist drew his lesson from it. The model was built to explain precisely that observation, so the statement agrees with the passage's account of its origin.",
            },
          },
          {
            text: "In the mental-fatigue experiments, the tired volunteers' muscles were measurably weaker.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [
                { block: 0, paragraph: 4, quote: "objective measures of their muscles' condition showed no meaningful difference" },
              ],
              explanation:
                "The passage reports the opposite of weaker muscles: objective measures showed no meaningful difference, only a higher perceived effort. The statement contradicts a located finding, so it is NO.",
              trap: {
                family: "boundary",
                note: "The finding is stated in plain words; there is no silence to interpret, so Not Given is the wrong refuge for readers who half-remember the paragraph.",
              },
              whyWrong: [
                "NOT GIVEN: paragraph E states the objective measures directly, so the information exists and it contradicts the statement.",
              ],
            },
          },
          {
            text: "The writer concludes that the central governor model has superseded the catastrophe model.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 7, quote: "None of this abolishes the muscle" }],
              explanation:
                "The conclusion explicitly keeps the muscle in the account: bodies do run low and overheat, and exhaustion is described as a negotiation. Superseding is exactly what the writer denies has happened.",
              trap: {
                family: "extreme-language",
                note: "'Superseded' claims a winner; the writer's conclusion is an integration of both models, not a replacement of one by the other.",
              },
              whyWrong: [
                "YES: the final paragraph states that none of the newer work abolishes the muscle — the models are combined, not ranked.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      {
        word: "physiologists",
        partOfSpeech: "noun (plural)",
        definition: "scientists who study how living bodies function; Victorian physiologists proposed the fatigue toxin.",
      },
      {
        word: "toxin",
        partOfSpeech: "noun",
        definition: "a poison produced by a living thing; the fatigue toxin was never found.",
      },
      {
        word: "biopsies",
        partOfSpeech: "noun (plural)",
        definition: "small samples of tissue taken for testing; muscle biopsies at exhaustion often show empty glycogen stores.",
      },
      {
        word: "glycogen",
        partOfSpeech: "noun",
        definition: "the stored carbohydrate fuel of muscle; the catastrophe model turns on glycogen running out.",
      },
      {
        word: "rationing",
        partOfSpeech: "verb (present participle)",
        definition: "controlling the supply of something so it lasts; the brain rations muscle recruitment in advance.",
      },
      {
        word: "exertion",
        partOfSpeech: "noun",
        definition: "physical effort; sport scientists measure perceived exertion on a standard scale.",
      },
    ],
    passageNote:
      "Theory succession is the spine: toxin (B), catastrophe (C), governor (D), mind (E), mouth (F), practice (G), synthesis (H). The headings ride the theory shifts; the verdict items test whether readers rank the models as the writer does — he does not.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-seabed",
    title: "Mapping the last frontier: the seabed",
    variant: "academic",
    section: 2,
    subject: "oceanography",
    topic: "science",
    difficulty: 4,
    estimatedMinutes: 16,
    objective:
      "Follow two centuries of a mapping problem: lead lines, echo sounders and multibeam swaths, satellite inference from orbit, and the project now assembling the ocean's first complete public chart.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Mapping the last frontier: the seabed",
        paragraphs: [
          "Humans have photographed every boulder on the Moon and mapped the mountains of Mars to the metre, yet the floor of our own ocean remains, over most of its area, a blank. By recent estimates only about a quarter of the global seabed has been surveyed with modern echo-sounding instruments; the rest is known, where it is known at all, from crude or indirect inference. It is a strange blind spot for a species that depends on the ocean for weather, food and trade — and stranger still given that mapping it requires no spacecraft, merely patience, ships and sonar.",
          "Depth sounding began as a manual trade. Nineteenth-century hydrographers lowered a hemp line, weighted with lead, over the side and waited — minutes for the line to sink, hours to reset — recording a single depth where modern instruments would later take thousands in a day. The line carried a tallow plug in the lead's base, which brought up a smear of the bottom: sand, mud, shell. From thousands of such measurements, taken across years of patient cruising, the first crude maps of the deep ocean were stitched together.",
          "The First World War's hunt for submarines bequeathed the echo sounder, and depth measurement became a matter of timing: send a pulse to the bottom, listen for its echo, convert travel time to depth. After 1945, single beams gave way to multibeam systems, which fan out dozens of beams at once and map a swath of sea floor several kilometres wide from a single hull. Even so, modern surveying advances one ship's length at a time, and the gap between well-surveyed shipping lanes can exceed the width of a country.",
          "A shortcut arrived from orbit. Radar satellites can measure the height of the sea surface to within a few centimetres, and because an underwater mountain exerts extra gravity that piles water into a shallow hump above it, the shape of the sea surface encodes, faintly, the shape of the floor. Geodesists have used this trick to predict bathymetry for the whole globe — a picture that is coarse, missing anything smaller than a large seamount, but continuous, and for most of the ocean the only one available.",
          "Each improvement in the map has rearranged what the ocean is. Lead-line cruises found the abyssal plains — flatter than any landscape on land — and the great trenches. Satellite inference multiplied the known seamounts, revealing thousands that no ship had ever crossed. And in 1977, a submersible survey near the Galápagos found hot springs on a ridge, and around them dense communities of tube worms and clams living on chemical energy rather than sunlight — a discovery that rewrote the textbook rules about where life can exist.",
          "Closing the gap is now an organised goal. An international project, Seabed 2030, is assembling every usable depth measurement — government surveys, research cruises and, increasingly, the transits of ordinary ships — into a single public grid, with the ambition of a complete modern map by the end of the decade. Fishing vessels and ferries have been enlisted to log depths as they go, turning routine journeys into survey lines. The demand is sharpening from several directions at once: submarine cable routes, fishery management, the sizing of marine reserves — and, contentiously, mining companies, which have taken out licences to prospect for metals on the deep plains of a Pacific region.",
          "Whether the deadline holds matters less than the direction. The deep ocean is the planet's largest habitat, and decisions about it — what to protect, what to mine, where to lay the cables that carry this page — are currently being made on a map a satellite sketched. Completing that map is neither glamorous nor sudden: it is the accumulation of thousands of unremarkable voyages, each adding its swath to a picture that, once finished, will belong to everyone and no one. It has taken a century and a half to see a quarter of the floor. The remaining three-quarters are waiting.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "summary-completion",
        label: "Questions 1–5",
        instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [
            { kind: "text", text: "Before sonar, depth was measured by hand: hydrographers lowered a weighted" },
            { kind: "blank", no: 1 },
            { kind: "text", text: "over the side and waited for it to reach the bottom. The echo sounder then timed a pulse's" },
            { kind: "blank", no: 2 },
            { kind: "text", text: "from the sea floor, converting travel time to depth." },
          ],
          [
            { kind: "text", text: "Multibeam systems now map a" },
            { kind: "blank", no: 3 },
            { kind: "text", text: "several kilometres wide from a single hull, while radar satellites detect the shallow" },
            { kind: "blank", no: 4 },
            { kind: "text", text: "that a seamount's gravity raises in the sea surface. An international project is assembling every measurement into a single public" },
            { kind: "blank", no: 5 },
            { kind: "text", text: "." },
          ],
        ],
        blanks: [
          {
            no: 1,
            answer: "hemp line",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "lowered a hemp line, weighted with lead, over the side" }],
              explanation:
                "The summary keeps the waiting and the weighting of the lead-line method, and the passage names the object lowered: a hemp line. The two-word phrase completes the sentence exactly as paragraph B prints it.",
            },
          },
          {
            no: 2,
            answer: "echo",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "listen for its echo, convert travel time to depth" }],
              explanation:
                "The echo sounder works by timing, and the thing timed is the pulse's return. Paragraph C names it in the same clause as the conversion of travel time to depth, so the noun is copied from there.",
            },
          },
          {
            no: 3,
            answer: "swath",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "map a swath of sea floor several kilometres wide from a single hull" }],
              explanation:
                "The summary repeats the width and the single hull, which appear in only one sentence of the passage. The noun that sentence gives for the mapped strip is swath, carried by the glossary because it is unguessable.",
            },
          },
          {
            no: 4,
            answer: "hump",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "piles water into a shallow hump above it" }],
              explanation:
                "The summary paraphrases the satellite method: a seamount's gravity piles water into a shallow hump above it. The noun naming that raised patch of sea surface completes the sentence from the same clause.",
            },
          },
          {
            no: 5,
            answer: "grid",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "into a single public grid" }],
              explanation:
                "The final blank asks what the international project assembles its measurements into. Paragraph F names the destination twice over: a single public grid, the phrase the summary reproduces minus one word.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "matching-features",
        label: "Questions 6–9",
        instruction:
          "Look at the following methods and findings and the list of people and organisations below. Match each statement with the group connected with it. You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "Depths were gathered one at a time, with a weighted rope and a smear of the bottom.",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 1,
                  quote: "recording a single depth where modern instruments would later take thousands in a day",
                },
              ],
              explanation:
                "The one-at-a-time method with tallow smears belongs to the nineteenth-century hydrographers of paragraph B. Their tools and tempo define the group the statement describes, and no later group used them.",
            },
          },
          {
            text: "Bathymetry can now be predicted for the entire globe from the shape of the sea surface.",
            correct: 2,
            lure: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Geodesists have used this trick to predict bathymetry for the whole globe" }],
              explanation:
                "Global prediction from sea-surface shape is paragraph D's satellite geodesists. The project in paragraph F assembles real measurements into a grid; it does not predict the floor from orbit.",
              trap: {
                family: "attribution",
                note: "Assembling a global grid sounds like mapping the whole globe, but the owners of the prediction method are the geodesists, not the Seabed 2030 project.",
              },
              whyWrong: [
                "D: the Seabed 2030 project collects measured depths from ships; the all-globe prediction from sea-surface shape is the geodesists' technique.",
              ],
            },
          },
          {
            text: "Fishing vessels and ferries have been enlisted to log depths on their ordinary routes.",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "Fishing vessels and ferries have been enlisted to log depths as they go" }],
              explanation:
                "Enlisting working ships belongs to the international project described in paragraph F, which turns routine journeys into survey lines for the public grid. The statement attributes the recruitment to its organiser.",
            },
          },
          {
            text: "Licences have been taken out to prospect for metals on the deep Pacific plains.",
            correct: 4,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 5,
                  quote:
                    "mining companies, which have taken out licences to prospect for metals on the deep plains of a Pacific region",
                },
              ],
              explanation:
                "The licences are held by mining companies, named in paragraph F as one of the demands sharpening the push to complete the map. The statement attributes the prospecting to the group that owns it in the passage.",
            },
          },
        ],
        options: [
          "Hydrographers of the lead-line era",
          "Sonar engineers of the world wars",
          "Satellite geodesists",
          "The Seabed 2030 project",
          "Deep-sea mining companies",
        ],
      },
    ],
    glossary: [
      {
        word: "hydrographers",
        partOfSpeech: "noun (plural)",
        definition: "specialists who survey and chart bodies of water; nineteenth-century hydrographers worked with hemp lines.",
      },
      {
        word: "tallow",
        partOfSpeech: "noun",
        definition: "rendered animal fat; a tallow plug in the sounding lead brought up a smear of the seabed.",
      },
      {
        word: "swath",
        partOfSpeech: "noun",
        definition: "a long, wide strip covered in one pass; multibeam systems map a swath several kilometres wide.",
      },
      {
        word: "bathymetry",
        partOfSpeech: "noun",
        definition: "the measurement of water depth; geodesists predict bathymetry from sea-surface shape.",
      },
      {
        word: "geodesists",
        partOfSpeech: "noun (plural)",
        definition: "scientists who measure the Earth's shape and gravity; they read the floor from orbit.",
      },
      {
        word: "seamounts",
        partOfSpeech: "noun (plural)",
        definition: "underwater mountains that rise from the sea floor; satellite inference multiplied the known seamounts.",
      },
    ],
    passageNote:
      "Method succession drives the text: rope (B), echo and multibeam (C), orbit (D), discovery (E), the project (F), the stakes (G). The summary condenses the methods in order; the matching items test who did what.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-repatriation",
    title: "Whose museum is it?",
    variant: "academic",
    section: 3,
    subject: "heritage studies",
    topic: "culture",
    difficulty: 5,
    estimatedMinutes: 19,
    objective:
      "Follow a heritage-studies debate: how a rhetorical demand became institutional policy, the claims and counter-arguments over contested collections, and the negotiated middle landscape of loans, provenance and shared authority.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Whose museum is it?",
        paragraphs: [
          "In a well-lit gallery in a European capital, a brass plaque records that the objects around it were 'acquired' in the year 1897. The word is careful, and the care is the story. Behind it lies a British military expedition that burned a royal city in what is now Nigeria and carried off thousands of brass and ivory works — the Benin Bronzes, now scattered across museums on several continents. For decades the plaque satisfied visitors. Increasingly, it does not satisfy anyone else: the descendants of the makers want the objects back, and the museums are discovering that the question of ownership cannot be filed away with the inventory.",
          "What changed was pace. A generation ago, repatriation was a rhetorical demand that institutions could politely decline to hear. Since 2020 it has become a policy question with paperwork: a national group of German museums signed over ownership of more than a thousand Benin objects to Nigeria; a major American institution returned most of its collection; university museums, which answer to scholars rather than tourism boards, have led many of the rest. The objects themselves move slowly — loans, long-term agreements and joint research keep them travelling — but the direction of travel has reversed.",
          "The claims come in several registers. Some objects are sacred — masks and reliquaries made to live in ceremonies, not vitrines — and holding them in a display case is, to source communities, a continuing injury rather than a historical one. Some are ancestors literally: the remains of indigenous people collected by nineteenth-century anatomy departments, now claimed for burial under laws that several countries have passed. And some claims rest on identity itself: a kingdom's brass plaques recording its own court history, held three thousand kilometres from the people who can read them.",
          "The museums' defence is older than the controversy. The great encyclopedic institutions argue that they are custodians for humanity, places where a visitor can meet the whole world in an afternoon. Directors of such museums warn of the empty gallery: if every object returns to the place it was made, the universal museum is dissolved, and with it a certain idea of curiosity. There is also the pragmatic wing: war, humidity and poverty have damaged collections everywhere, and a museum in London, the argument runs, is a safe deposit box the world can visit.",
          "Critics find each pillar wobbly. Humanity, they note, is invited to visit on a visa: the publics served by encyclopedic museums are overwhelmingly the residents and tourists of wealthy capitals, while the descendants of the makers require airfare. The safe-deposit argument fares little better — much of many collections lies in storage, unseen by anyone, so safety without access can shade into safety without meaning. As for the empty gallery, claims in practice are specific, negotiated object by object, and no serious proposal asks for everything everywhere. The slippery slope, critics reply, is a slide nobody has actually built.",
          "Between surrender and refusal lies a busy middle landscape. Provenance researchers — museum archaeologists who trace how each object travelled — have become the growth profession, and their findings now shape display labels that once said merely 'acquired'. Long-term loans return objects to origin countries while legal title stays put, or the reverse: title transfers while the object remains, on loan, in its old case. Digital projects scan objects at high resolution so that source communities can study what museums still hold. Some institutions have handed over decision-making to descendant boards, keeping the building and surrendering the authority.",
          "Law has followed ethics at a distance. Few international instruments compel return, and national laws differ sharply: a United States statute from 1990 requires museums and universities to inventory Native American remains and sacred objects and return them to tribes, while most European states rely on negotiation, advisory committees and, increasingly, political appetite. The international body that sets museum ethics has rewritten its code to acknowledge that collections acquired in conditions of violence raise questions that 'acquired' cannot answer. Ethics, in short, is moving; statutes are walking behind.",
          "The gloomy prediction — that repatriation empties the universal museum — mistakes the institution for its inventory. What the present decade is renegotiating is not whether these collections exist but on whose behalf they are held. Museums that have shared authority report, on the whole, not emptier galleries but warmer ones: exhibitions co-curated with source communities attract visitors precisely because the objects stop being loot and start being evidence. The brass plaque is being recast in both senses. The city that burned in 1897 is asking for its history back, and the museums that hold it are discovering that returning an object can be, for the first time in a century, a way of acquiring something — the trust of the people whose world made it.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction:
          "Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–vii, next to questions 1–6.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 0,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "it has become a policy question with paperwork" }],
              explanation:
                "Paragraph B tracks the change of register: a rhetorical demand becomes policy with paperwork, boards and signed ownership transfers. The heading paraphrases that institutional turn from words to procedure.",
            },
          },
          {
            text: "Paragraph C",
            correct: 1,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 2, quote: "The claims come in several registers" }],
              explanation:
                "Paragraph C sorts the claims into kinds — sacred objects, human remains, identity claims — announced by its own opening line. The heading echoes that structure of several distinct registers of claim.",
            },
          },
          {
            text: "Paragraph D",
            correct: 2,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [
                {
                  block: 0,
                  paragraph: 3,
                  quote: "they are custodians for humanity, places where a visitor can meet the whole world in an afternoon",
                },
              ],
              explanation:
                "Paragraph D gives the museums' own defence: custodianship for humanity, the universal visit, the safe deposit box. The heading lifts the defence's central phrase as the museums themselves state it.",
            },
          },
          {
            text: "Paragraph E",
            correct: 3,
            lure: 1,
            meta: {
              skills: ["skimming", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "Critics find each pillar wobbly" }],
              explanation:
                "Paragraph E is the critics' audit: each pillar of the defence — access, safety, the slippery slope — is tested and found wanting. The heading names that inspection of the defence rather than the claims.",
              trap: {
                family: "mention-lure",
                note: "The claims vocabulary of the extra heading belongs to paragraph C; paragraph E is about the defence, not the claims.",
              },
              whyWrong: [
                "i: the registers of claim belong to paragraph C; paragraph E interrogates the museums' defence.",
              ],
            },
          },
          {
            text: "Paragraph F",
            correct: 4,
            lure: 6,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Between surrender and refusal lies a busy middle landscape" }],
              explanation:
                "Paragraph F tours the compromise instruments — provenance research, loans, digital scans, shared boards. The heading compresses the paragraph's own phrase about the territory between surrender and refusal.",
              trap: {
                family: "mention-lure",
                note: "Digital scanning appears in this paragraph as one instrument among five; the extra heading promotes a single detail into a theme.",
              },
              whyWrong: [
                "vii: scanning is one sentence of the middle landscape, not the paragraph's organising idea.",
              ],
            },
          },
          {
            text: "Paragraph G",
            correct: 5,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "Law has followed ethics at a distance" }],
              explanation:
                "Paragraph G contrasts moving ethics with walking statutes: a United States statute, committees, a rewritten code. The heading compresses the gap that the paragraph's first sentence states directly.",
            },
          },
        ],
        options: [
          "A demand becomes a procedure",
          "Three registers of claim",
          "Custodians for humanity",
          "Inspecting the pillars of the defence",
          "Arrangements between the extremes",
          "Statutes trail the ethics",
          "Scanning collections for the digital age",
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 7–10",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "The writer's comment on the word 'acquired' in the first paragraph suggests that",
            options: [
              "museum labels are usually written carelessly",
              "the word conceals a history of violence",
              "visitors rarely read the labels on display",
              "the objects were bought at a fair price",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["inference", "vocabulary"],
              evidence: [{ block: 0, paragraph: 0, quote: "The word is careful, and the care is the story" }],
              explanation:
                "The writer notes the plaque's careful word and then unfolds what it conceals: a burned city and carried-off works. The label's precision is exactly what hides the violence, which option B states plainly.",
              whyWrong: [
                "A: the writer calls the word careful, not careless — the care is the problem, so the opposite reading fails.",
                "C: nothing in the paragraph concerns visitors' reading habits.",
                "D: the passage describes an expedition and plunder, not a purchase of any kind.",
              ],
            },
          },
          {
            stem: "The 'safe deposit box' argument in paragraph D is the claim that",
            options: [
              "objects should never travel while wars continue",
              "major museums preserve objects safely and make them accessible to the world",
              "only qualified scholars should handle sensitive objects",
              "storage conditions, not display, best protect collections",
            ],
            correct: 1,
            lure: 3,
            meta: {
              skills: ["paraphrase", "opinion"],
              evidence: [
                { block: 0, paragraph: 3, quote: "a museum in London, the argument runs, is a safe deposit box the world can visit" },
              ],
              explanation:
                "The metaphor pairs safekeeping with visitability — a vault the world can enter — and option B keeps both halves. The phrase 'the argument runs' also matters: this is the museums' claim, which paragraph E then disputes.",
              trap: {
                family: "attribution",
                note: "The passage attributes the safe-deposit claim to museum advocates ('the argument runs'); the writer reports it before critiquing it.",
              },
              whyWrong: [
                "A: war damage is mentioned as a general risk, not as a reason to ban travel.",
                "C: scholars are never given exclusive rights anywhere in the defence.",
                "D: storage without access is precisely what paragraph E attacks; the defence claims both safety and visitability.",
              ],
            },
          },
          {
            stem: "What is the critics' answer to the 'empty gallery' warning?",
            options: [
              "claims are specific and negotiated, not a demand for everything",
              "universal museums no longer attract large audiences",
              "source countries cannot house the objects safely",
              "most encyclopedic collections are already in storage",
            ],
            correct: 0,
            lure: 3,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [
                {
                  block: 0,
                  paragraph: 4,
                  quote: "claims in practice are specific, negotiated object by object, and no serious proposal asks for everything everywhere",
                },
              ],
              explanation:
                "Paragraph E answers the slippery slope with practice: claims arrive object by object and nobody seriously asks for everything. Option A carries both halves of that reply to the empty-gallery warning.",
              whyWrong: [
                "B: the critics' point about audiences concerns who can afford to visit, not attendance figures.",
                "C: building standards in source countries are never raised by the critics in this paragraph.",
                "D: storage is cited as a weakness of the museums' own access record, not as an answer to the warning.",
              ],
            },
          },
          {
            stem: "In the final paragraph, the writer suggests that museums which share authority",
            options: [
              "will gradually have to close their galleries",
              "lose visitors to the countries of origin",
              "gain both visitors and trust",
              "are mainly avoiding legal action",
            ],
            correct: 2,
            lure: 0,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 7, quote: "not emptier galleries but warmer ones" }],
              explanation:
                "The conclusion reports warmer galleries and exhibitions that attract visitors because objects stop being loot and start being evidence. Sharing authority, on the writer's account, buys trust — exactly option C.",
              trap: {
                family: "extreme-language",
                note: "Option A extrapolates the empty-gallery fear into a verdict the writer explicitly rejects; conclusions need not shout to count as extreme when the text says the opposite.",
              },
              whyWrong: [
                "A: the writer calls the emptying prediction a mistake, confusing the institution with its inventory.",
                "B: the writer says co-curated exhibitions attract visitors, not lose them.",
                "D: the final paragraph frames sharing authority as gaining trust, not dodging lawyers.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      {
        word: "repatriation",
        partOfSpeech: "noun",
        definition: "the return of objects or remains to their country or community of origin; repatriation became a policy question after 2020.",
      },
      {
        word: "reliquaries",
        partOfSpeech: "noun (plural)",
        definition: "containers for sacred remains; masks and reliquaries were made to live in ceremonies, not vitrines.",
      },
      {
        word: "vitrines",
        partOfSpeech: "noun (plural)",
        definition: "glass display cases in museums; to source communities the vitrine is part of the injury.",
      },
      {
        word: "custodians",
        partOfSpeech: "noun (plural)",
        definition: "people who hold and care for something on behalf of others; encyclopedic museums claim to be custodians for humanity.",
      },
      {
        word: "provenance",
        partOfSpeech: "noun",
        definition: "the documented history of where an object came from and how it travelled; provenance researchers trace it.",
      },
      {
        word: "co-curated",
        partOfSpeech: "verb (past participle)",
        definition: "organised jointly with another party; exhibitions co-curated with source communities attract visitors.",
      },
    ],
    passageNote:
      "The debate is symmetrical: claims (C) against the defence (D), then the audit (E), the middle landscape (F) and the lagging law (G). The headings ride that structure; the multiple choice tests who owns each argument — museum advocates, critics or the writer.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
