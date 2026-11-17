/**
 * Academic passage library I (PROMPT 54 question-bank expansion, batch I).
 *
 * Eight further original Academic passages in the style of the IELTS Reading
 * test, spread across the three sections and the unified topic domains.
 * Each carries a complete question set, per-item evidence, explanations,
 * why-wrong notes, designed traps and a vocabulary glossary. No specialist
 * knowledge is assumed or required.
 *
 *   ielts-rb-ac-electric-flight — Aviation,        Section 3, advanced (d5)
 *   ielts-rb-ac-microbiome      — Nutrition science, Section 2, advanced (d4)
 *   ielts-rb-ac-libraries       — Media studies,    Section 1, standard (d3)
 *   ielts-rb-ac-volcanoes       — Geology,          Section 2, advanced (d4)
 *   ielts-rb-ac-bartering       — Economics,        Section 1, standard (d3)
 *   ielts-rb-ac-child-speech    — Linguistics,      Section 1, standard (d3)
 *   ielts-rb-ac-collecting      — Psychology,       Section 2, advanced (d4)
 *   ielts-rb-ac-recycled-builds — Materials eng.,   Section 3, advanced (d4)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acadIExercises: ReadingExercise[] = [
  {
    slug: "ielts-rb-ac-electric-flight",
    title: "The slow take-off of electric flight",
    variant: "academic",
    section: 3,
    subject: "aviation",
    topic: "technology",
    difficulty: 5,
    estimatedMinutes: 18,
    objective: "Track a technology-debate structure: why physics blocks battery airliners, which niches electricity can win, and what the writer concludes about aviation's slow electrification.",
    intro: "Read the passage below and answer Questions 1–12.",
    blocks: [
      {
        heading: "The slow take-off of electric flight",
        paragraphs: [
          "Of all the machines humanity uses to move itself around, the airliner is proving the hardest to clean up. Road transport is electrifying at speed, and many national grids are slowly retiring coal, yet a fully fuel-burning jet crosses the ocean today much as its ancestors did half a century ago. Aviation produces only a few per cent of global carbon dioxide emissions, but that share is growing, and it is released high in the atmosphere where its warming effect is amplified. The industry's boldest promises of decarbonisation therefore lean on electricity, and battery-powered aircraft have duly moved from magazine covers to manufacturers' order books. The physics, however, refuses to be hurried.",
          "The obstacle is energy density: how much energy a fuel or a battery can carry for each kilogram of its own mass. Kerosene, the refined petroleum that powers every jet, packs roughly twelve thousand watt-hours per kilogram. Even the best lithium batteries now flying in prototypes store barely two hundred and fifty. An aeroplane is a machine that must lift, and keep lifting, everything it carries, and no amount of engineering cleverness changes that arithmetic. A battery able to match a full tank of kerosene would, at today's chemistry, weigh roughly as much as the entire aircraft built around it.",
          "Batteries also refuse to get lighter as a journey proceeds, and this produces a vicious circle that designers call the weight spiral. A conventional aircraft burns its fuel away in flight and lands far lighter than it took off; a battery pack returns to the runway with every kilogram it left with. Adding batteries to extend an aircraft's range therefore adds mass, which demands stronger wings and larger motors, which add more mass, which requires still more battery power to lift. Long-haul electric flight is not merely difficult; on present chemistry it is close to self-contradictory.",
          "None of this stops electricity from conquering aviation's short end. Two-seat training aircraft, which fly for an hour at modest speeds, are already being delivered with batteries instead of fuel tanks, and flight schools report that the quiet, vibration-free cockpit makes them popular with students. Several firms are racing to certify regional aircraft carrying a couple of dozen passengers on routes of two or three hundred kilometres, where a compact battery and a rapid turnaround can be made to work. Other designs bolt a small conventional engine alongside the electric one: the hybrid keeps the battery light, lets the fuel-burning side handle the demanding part of the mission, and still cuts fuel burn substantially.",
          "Hydrogen, meanwhile, courts the opposite end of the market. It stores far more energy per kilogram than kerosene, which is why engineers sketch hydrogen airliners at all, but it arrives with awkward luggage of its own. As a gas it must be squeezed into bulky tanks; as a liquid it must be chilled to within a whisker of absolute zero and kept there for the length of a flight. Every kilogram of hydrogen also demands refuelling infrastructure that no airport possesses. The pragmatic near-term answer, most analysts concede, is sustainable aviation fuel: a kerosene substitute brewed from wastes and crops that can be poured into existing engines, though at several times the price of the ordinary article.",
          "Certification, not chemistry, may set the actual pace. Aviation regulators approve an aircraft by proving, exhaustively, that a long list of failure modes has been anticipated and tamed. Batteries bring failure modes the rulebooks barely mention: cells that degrade with every charge cycle, fires that begin quietly and cannot be extinguished by the systems jets carry today, and performance that collapses in cold air at precisely the altitudes aeroplanes prefer. Regulators are writing those rules now, in consultation with manufacturers, but rule-writing in aviation moves with deliberate, glacial caution, and mostly for good reason.",
          "Sceptics therefore expect electric aviation to remain a curiosity, and they may be right about the routes that matter most today. Yet the optimists can point to a pattern with a long history: new transport technologies start small, in niches where their weaknesses matter least, and then eat outward. Battery-powered trainers are flying; hybrid regional aircraft are on order; hydrogen studies are funded and staffed. The take-off will be slow, and ocean crossings will be the last to change, but the aircraft has already begun its taxi.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction:
          "Reading Passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 0,
            meta: {
              skills: ["skimming", "paraphrase", "structure"],
              evidence: [{ block: 0, paragraph: 1, quote: "The obstacle is energy density: how much energy a fuel or a battery can carry for each kilogram of its own mass." }],
              explanation:
                "Paragraph B is organised around a single comparison: kilogram for kilogram, kerosene carries roughly fifty times more energy than the best lithium battery, and the rest of the paragraph draws the consequences for flight.",
            },
          },
          {
            text: "Paragraph C",
            correct: 1,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "this produces a vicious circle that designers call the weight spiral" }],
              explanation:
                "The paragraph names and defines the weight spiral: extra batteries demand stronger wings and larger motors, which add further mass in a self-feeding loop that designers cannot escape.",
            },
          },
          {
            text: "Paragraph D",
            correct: 2,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 3, quote: "the quiet, vibration-free cockpit makes them popular with students" }],
              explanation:
                "Paragraph D surveys the niches where batteries already work — trainers, short regional routes and hybrids — and the heading's quiet success echoes the silent cockpit that students enjoy.",
            },
          },
          {
            text: "Paragraph E",
            correct: 3,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "Hydrogen, meanwhile, courts the opposite end of the market." }],
              explanation:
                "Paragraph E weighs the rivals for longer routes: hydrogen's storage problems and sustainable aviation fuel as the pragmatic drop-in answer, both positioned against the battery's limits.",
            },
          },
          {
            text: "Paragraph F",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Batteries bring failure modes the rulebooks barely mention" }],
              explanation:
                "The paragraph explains that certification is now the pacing constraint, because battery failure modes are missing from the rulebooks that regulators write slowly and deliberately.",
            },
          },
          {
            text: "Paragraph G",
            correct: 5,
            lure: 6,
            meta: {
              skills: ["skimming", "inference", "structure"],
              evidence: [{ block: 0, paragraph: 6, quote: "new transport technologies start small, in niches where their weaknesses matter least, and then eat outward" }],
              explanation:
                "The closing paragraph turns the sceptics' concession into a pattern: transport technologies begin in forgiving niches and expand outward, so the change will arrive gradually — a taxi before take-off.",
              trap: {
                family: "paraphrase-gap",
                note: "The extra heading borrows paragraph A's sense of urgency about emissions, but the closing paragraph's organising idea is patience, not pressure.",
              },
              whyWrong: [
                "vii: 'An industry that cannot afford delay' echoes paragraph A's concern about growing emissions, but paragraph G argues that the change will be slow and that this is acceptable, not that delay is unaffordable.",
              ],
            },
          },
        ],
        options: [
          "The arithmetic that rules the air",
          "A circle designers cannot square",
          "Quiet success at the short end",
          "Rivals for the long haul",
          "Rulebooks that lag the technology",
          "From taxi to take-off",
          "An industry that cannot afford delay",
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
            text: "In the writer's view, batteries will never power long-haul flights.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "Long-haul electric flight is not merely difficult; on present chemistry it is close to self-contradictory." }],
              explanation:
                "The writer says long-haul electric flight is close to self-contradictory on present chemistry — a limit tied to today's batteries, not a permanent verdict about every possible future chemistry, so never overstates the view.",
              trap: {
                family: "extreme-language",
                note: "The writer hedges to present chemistry; the statement's never claims certainty about all future chemistry, which the writer never commits to.",
              },
              whyWrong: [
                "NOT GIVEN: the writer does address long-haul electric flight directly, so the verdict is a located disagreement, not a silence.",
                "YES: the phrase on present chemistry points to a limitation in time, not a permanent impossibility.",
              ],
            },
          },
          {
            text: "Electric training aircraft are already being sold to customers.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "are already being delivered with batteries instead of fuel tanks" }],
              explanation:
                "Paragraph D states that two-seat trainers are already being delivered with batteries instead of fuel tanks; being sold paraphrases delivered, so the statement agrees with the passage.",
            },
          },
          {
            text: "Sustainable aviation fuel can be used in existing engines without modification.",
            answer: "YES",
            meta: {
              skills: ["detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "a kerosene substitute brewed from wastes and crops that can be poured into existing engines" }],
              explanation:
                "Paragraph E defines sustainable aviation fuel as a kerosene substitute that can be poured into existing engines, which restates the statement's claim about use without modification.",
            },
          },
          {
            text: "The writer is critical of the slow pace at which aviation regulators write new rules.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "rule-writing in aviation moves with deliberate, glacial caution, and mostly for good reason" }],
              explanation:
                "The same sentence that admits rule-writing is glacial adds mostly for good reason — an endorsement of the caution. The writer notes the slowness without criticising it, so the statement contradicts the writer's view.",
              trap: {
                family: "boundary",
                note: "Candidates see glacial caution and read impatience into it; the closing words of the sentence approve of the caution.",
              },
              whyWrong: [
                "YES: the writer observes the slowness but endorses it — mostly for good reason is approval, not criticism.",
                "NOT GIVEN: the writer's attitude is stated inside the same sentence, so the text is not silent on this point.",
              ],
            },
          },
        ],
      },
      {
        id: "q3",
        type: "multiple-choice",
        label: "Questions 11–12",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "In paragraph C, the weight spiral refers to a process in which",
            options: [
              "adding batteries for range creates demands for more mass and more power",
              "aircraft burn away their fuel and land lighter than they took off",
              "stronger wings allow aircraft to carry smaller motors",
              "battery packs lose weight during the cruise portion of a flight",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Adding batteries to extend an aircraft's range therefore adds mass, which demands stronger wings and larger motors" }],
              explanation:
                "The spiral is a causal chain: batteries added for range increase mass, demanding stronger wings and larger motors that add mass again. Fuel burning away is the contrasting behaviour of conventional aircraft, not the spiral itself.",
              trap: {
                family: "mention-lure",
                note: "The lure quotes a genuine sentence from the same paragraph, but that sentence describes conventional aircraft, not the spiral.",
              },
              whyWrong: [
                "B: fuel burning away in flight is the behaviour of conventional aircraft that the paragraph contrasts with the battery's constant mass.",
                "C: the paragraph says larger motors are demanded by added mass; the option reverses the relationship.",
                "D: batteries return to the runway with every kilogram they left with — they lose nothing in flight.",
              ],
            },
          },
          {
            stem: "Which statement best matches the writer's conclusion?",
            options: [
              "Hydrogen rather than batteries will dominate short regional routes.",
              "Sceptics are right that electric aviation will remain a curiosity.",
              "Electric flight will develop gradually, starting from undemanding uses.",
              "Regulators must be pressured to accelerate certification of battery aircraft.",
            ],
            correct: 2,
            lure: 1,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "new transport technologies start small, in niches where their weaknesses matter least, and then eat outward" }],
              explanation:
                "The conclusion paragraph generalises the pattern — new transport technologies start small where their weaknesses matter least and then eat outward — which matches gradual development from undemanding uses.",
              whyWrong: [
                "A: hydrogen courts the opposite end of the market, the long routes, not the short regional hops.",
                "B: the writer concedes the sceptics may be right about today's most important routes, but the paragraph's overall movement is towards expansion.",
                "D: the writer treats regulatory caution as mostly justified, not as an obstacle to be pressured away.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "energy density", partOfSpeech: "noun", definition: "the amount of energy stored per kilogram of a fuel or battery; kerosene's huge advantage over lithium cells is the core problem of electric flight." },
      { word: "kerosene", partOfSpeech: "noun", definition: "the refined petroleum fuel burned by jet engines; it packs roughly twelve thousand watt-hours per kilogram." },
      { word: "weight spiral", partOfSpeech: "noun", definition: "the self-feeding loop in which extra batteries add mass, demanding stronger structures and bigger motors that add mass again." },
      { word: "hybrid", partOfSpeech: "noun / adjective", definition: "an aircraft design pairing an electric powertrain with a small conventional engine; the hybrid keeps the battery light and still cuts fuel burn." },
      { word: "certification", partOfSpeech: "noun", definition: "the exhaustive regulatory process by which an aircraft design is proven safe; battery failure modes are only now entering the rulebooks." },
      { word: "niches", partOfSpeech: "noun (plural)", definition: "small, undemanding corners of a market; new transport technologies typically begin in niches and expand outward." },
    ],
    passageNote:
      "A Section 3 argument passage: paragraph B's density arithmetic anchors the fact questions, while the Yes/No/Not Given set tests how carefully the writer hedges each claim about the future.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-microbiome",
    title: "The gut microbiome diet debate",
    variant: "academic",
    section: 2,
    subject: "nutrition science",
    topic: "health",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Follow a health-science debate: what gut microbes do with fibre, what the fermentation and probiotic trials actually showed, and where the writer draws the line on hype.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "The gut microbiome diet debate",
        paragraphs: [
          "Inside every healthy human gut lives a crowd of trillions of bacteria, viruses and fungi — collectively the microbiome — whose numbers may rival the body's own cells. For most of the twentieth century, medicine treated these passengers as tenants at best. That view has inverted: studies now suggest the gut community influences digestion, immunity and perhaps mood, and nowhere has enthusiasm outrun evidence more spectacularly than in the business of eating for one's microbes.",
          "The solid science begins with dietary fibre — the parts of plants that human enzymes cannot break down. Gut bacteria can, and in doing so they ferment fibre into short-chain fatty acids, compounds that nourish the cells lining the colon and appear to calm inflammation. Communities eating traditional, plant-heavy diets — rural peoples in Africa and South America, for instance — tend to carry more varied gut communities than city dwellers living on processed food, and the difference tracks the fibre.",
          "Fermented foods occupy the middle ground between food and medicine. A team at a Californian university reported a controlled feeding trial in which healthy volunteers who ate a diet rich in yoghurt, kefir and kimchi for ten weeks showed greater microbiome diversity and lower levels of inflammation, while a high-fibre diet alone produced weaker effects. The study was small, but it gave fermentables something they had long lacked: a respectable trial rather than folklore.",
          "Probiotic supplements are where the debate turns sharp. Sold as capsules and yoghurt drinks, they promise to top up the gut with beneficial strains, yet many of those strains pass through without settling: colonisation is unusual, and any effect on the community usually fades within weeks of stopping. Reviewers who have assembled the trials conclude that for healthy adults the evidence behind most commercial products is thin, and that effects vary enormously from strain to strain. After a course of antibiotics the picture improves slightly, with some preparations modestly shortening the associated diarrhoea.",
          "At the other end of the diet sit ultra-processed foods. Laboratory work in mice suggests that emulsifiers — the additives that keep sauces smooth and ice cream soft — can thin the protective mucus layer of the gut and nudge the immune system towards irritation. Human evidence remains limited, and nutritionists caution that people who eat badly differ in a hundred ways beyond any single ingredient. Still, the finding has been influential, because it offers a mechanism: not merely what processed food contains, but what it lacks — the fibre that feeds a stable community.",
          "Beneath the specifics lies a methodological problem. The microbiome is an ecosystem of hundreds of species, and diet is only one force acting on it; drugs, stress, infection and geography all leave fingerprints. Most human diet studies run for weeks and measure proxies rather than outcomes such as disease itself, and because every gut is different, an intervention that helps one volunteer may leave the next untouched. Causal claims must therefore be assembled from animal work, which does not always transfer, and from associations, which the supplement industry is happy to rebrand as proof.",
          "Where does this leave the eater? Almost exactly where grandmother's advice pointed: plenty of vegetables, pulses and whole grains, fermented foods if you enjoy them, and firm scepticism towards any capsule promising to reset the gut. The microbiome has not yet produced a diet that works better than that; it has only supplied a richer explanation of why the old one works at all.",
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
            text: "Gut bacteria convert plant fibre into compounds that nourish the colon.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "they ferment fibre into short-chain fatty acids, compounds that nourish the cells lining the colon" }],
              explanation:
                "Paragraph B says gut bacteria ferment fibre into short-chain fatty acids that nourish the cells lining the colon; the statement compresses that chain into compounds that nourish the colon.",
            },
          },
          {
            text: "Rural communities studied in Africa were found to have less varied gut microbes than city dwellers.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "scanning"],
              evidence: [{ block: 0, paragraph: 1, quote: "tend to carry more varied gut communities than city dwellers living on processed food" }],
              explanation:
                "Paragraph B states the opposite: traditional, plant-heavy communities tend to carry more varied gut communities than city dwellers, so the statement reverses the comparison the passage reports.",
            },
          },
          {
            text: "The Californian fermented-food trial was funded by the food industry.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "A team at a Californian university reported a controlled feeding trial" }],
              explanation:
                "The passage describes the trial's design and results but never mentions who paid for it. Suspicion about industry funding is outside knowledge; the text's silence about money makes the statement Not Given.",
              trap: {
                family: "boundary",
                note: "Commercial nutrition research raises suspicion, but a suspicion is not a located contradiction — silence stays Not Given.",
              },
              whyWrong: [
                "FALSE: nothing in the passage denies industry funding either — money is simply never mentioned.",
                "TRUE: the text reports the trial neutrally; there is no statement about its funders to agree with.",
              ],
            },
          },
          {
            text: "Some probiotic preparations have been shown to shorten diarrhoea after antibiotics.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "some preparations modestly shortening the associated diarrhoea" }],
              explanation:
                "Paragraph D concedes a small benefit after antibiotics: some preparations modestly shorten the associated diarrhoea, which is exactly what the statement claims in plainer words.",
            },
          },
          {
            text: "The writer concludes that microbiome science has completely changed the way we should eat.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "Almost exactly where grandmother's advice pointed" }],
              explanation:
                "The final paragraph points the eater back to grandmother's advice — vegetables, pulses and whole grains — so the science explains the old diet rather than completely changing it.",
              trap: {
                family: "extreme-language",
                note: "Completely changes overstates a conclusion the writer deliberately keeps modest; the whole paragraph argues continuity, not revolution.",
              },
              whyWrong: [
                "TRUE: the writer's conclusion is that microbiome science explains the old advice rather than replacing it.",
                "NOT GIVEN: the final paragraph states the conclusion explicitly, so the verdict is a located contradiction, not a silence.",
              ],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "summary-completion",
        label: "Questions 6–10",
        instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
        wordLimit: 1,
        layout: [
          [
            { kind: "text", text: "Gut bacteria ferment dietary 6" },
            { kind: "blank", no: 6 },
            { kind: "text", text: "to produce short-chain fatty acids that feed the colon's lining. A Californian trial found that a diet rich in 7" },
            { kind: "blank", no: 7 },
            { kind: "text", text: "foods raised microbiome diversity and lowered signs of 8" },
            { kind: "blank", no: 8 },
            { kind: "text", text: ". Probiotics often fail to colonise the gut, and their effect usually 9" },
            { kind: "blank", no: 9 },
            { kind: "text", text: "within weeks of stopping. Mouse studies suggest that emulsifiers thin the protective mucus 10" },
            { kind: "blank", no: 10 },
            { kind: "text", text: "of the gut." },
          ],
        ],
        blanks: [
          {
            no: 6,
            answer: "fibre",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "they ferment fibre into short-chain fatty acids, compounds that nourish the cells lining the colon" }],
              explanation:
                "The summary sentence reuses the passage's own logic: bacteria ferment dietary fibre into short-chain fatty acids, so the missing noun is fibre, the raw material of the process.",
            },
          },
          {
            no: 7,
            answer: "fermented",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [
                { block: 0, paragraph: 2, quote: "Fermented foods occupy the middle ground between food and medicine" },
                { block: 0, paragraph: 2, quote: "healthy volunteers who ate a diet rich in yoghurt, kefir and kimchi" },
              ],
              explanation:
                "The trial fed volunteers a diet of yoghurt, kefir and kimchi — foods the paragraph's opening sentence labels fermented — and the summary borrows that label for the diet.",
            },
          },
          {
            no: 8,
            answer: "inflammation",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "showed greater microbiome diversity and lower levels of inflammation" }],
              explanation:
                "The trial's headline result was greater microbiome diversity together with lower levels of inflammation; the summary keeps lowered signs of and asks for the noun that was reduced.",
            },
          },
          {
            no: 9,
            answer: "fades",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "any effect on the community usually fades within weeks of stopping" }],
              explanation:
                "Paragraph D states that any effect on the community usually fades within weeks of stopping; the summary reuses usually and within weeks, so the missing verb is fades.",
            },
          },
          {
            no: 10,
            answer: "layer",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "can thin the protective mucus layer of the gut" }],
              explanation:
                "The emulsifier finding in paragraph E concerns thinning the protective mucus layer of the gut; the summary keeps mucus and needs its partner noun, layer.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "microbiome", partOfSpeech: "noun", definition: "the combined community of bacteria, viruses and fungi living in the gut; its activities are thought to influence digestion and immunity." },
      { word: "short-chain fatty acids", partOfSpeech: "noun (plural)", definition: "small compounds produced when gut bacteria ferment fibre; they nourish the cells of the colon and may calm inflammation." },
      { word: "fermented", partOfSpeech: "adjective / past participle", definition: "processed by microbes, as yoghurt, kefir and kimchi are; a small trial linked fermented diets to greater microbiome diversity." },
      { word: "probiotic", partOfSpeech: "noun / adjective", definition: "a product containing live bacteria sold as beneficial to the gut; evidence for most strains in healthy adults remains thin." },
      { word: "emulsifiers", partOfSpeech: "noun (plural)", definition: "additives that keep processed foods smooth and soft; mouse studies suggest they may thin the gut's protective mucus layer." },
      { word: "ultra-processed", partOfSpeech: "adjective", definition: "describing factory-formulated foods built from refined ingredients and additives; the passage links them to a less varied gut community." },
    ],
    passageNote:
      "Paragraphs B–E each carry one strand of evidence; the True/False/Not Given set rides on the hedged verbs — suggest, appear, usually — and the summary lifts its nouns directly from those same sentences.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-libraries",
    title: "Public libraries in the digital age",
    variant: "academic",
    section: 1,
    subject: "media studies",
    topic: "culture",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Recognise how an institution adapts: the e-book licensing dispute, the unplanned digital-inclusion role, the widening stock, and the funding paradox that closes the argument.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Public libraries in the digital age",
        paragraphs: [
          "When the internet arrived in the 1990s, commentators queued up to write the public library's obituary. If every fact could be summoned to a screen at home, who would cross town to borrow a book? Three decades on, the prediction looks embarrassing. Visits have fallen from their turn-of-the-century peak in some countries, it is true, yet the institution has not merely survived the digital age: it has been quietly repurposed by it.",
          "The transformation began with the library's core stock. E-books and downloadable audiobooks now account for a growing share of lending, and readers reserve titles to their phones without leaving the sofa. The shift, however, exposed a fault line between libraries and publishers. A library does not buy an e-book; it licenses one, often at several times the price of the paper copy, and the licence can expire after twenty-six loans or a single year, whereupon the title must be paid for again. Librarians argue that no sensible economics explains such terms; publishers reply that a digital copy never wears out.",
          "Meanwhile the library has become the internet's safety net. Council services, job applications, benefit claims and tax filings moved online faster than the population moved with them, and the people left behind — older residents, low-income families, anyone without a broadband contract or a printer at home — arrive at the reference desk with their paperwork. Library staff, none of them trained as IT support, now spend a large slice of the day helping patrons attach a document or reset a password. Digital inclusion became a core service that nobody planned for.",
          "The shelves themselves have grown stranger and more interesting. Hundreds of libraries now lend power drills, sewing machines, board games, fishing rods and musical instruments; some run seed libraries, where gardeners take packets in spring and return seed in autumn. A handful lend ties and briefcases for job interviews, or e-readers preloaded with novels. The principle is the old one that once justified buying encyclopaedias too expensive for any household: a community can own things its members need only occasionally.",
          "The building has changed role as well as stock. During recent winters of high energy bills, libraries in several countries advertised themselves — warmly and a little awkwardly — as heated public rooms where nobody has to buy anything. Toddler rhyme sessions, language classes, homework clubs and reading groups fill the meeting rooms; for isolated new parents and retired people, the weekly visit can be the week's main conversation. No commercial space can afford to work this way, which is exactly the point.",
          "All of this arrives with budgets shrinking. A generation of spending cuts has reduced opening hours and branch networks across Britain and elsewhere, and professional bodies warn that some services have hollowed out even where the doors stayed open: book funds trimmed, trained staff replaced by volunteers. The paradox that critics point to is stark — the more the state moves its services online, the more it needs the physical places that help citizens reach them, at precisely the moment funding for those places is withdrawn.",
          "So the library's future looks less like a book warehouse and more like a public living room with books in it. The printed volume remains the heart of the collection, and the quiet study desk remains sacred, but the mission has been restated in terms any Victorian founder would recognise: access to information and to society, whatever form that information takes. The obituarists mistook the medium for the institution. When the information moved, the library moved with it.",
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
            text: "the terms on which libraries obtain digital titles",
            correct: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "A library does not buy an e-book; it licenses one, often at several times the price of the paper copy" }],
              explanation:
                "Paragraph B is the licensing paragraph: the e-book licence, its price relative to paper, and its expiry after twenty-six loans — exactly the supply terms the statement asks about.",
            },
          },
          {
            text: "library staff performing a role they were never trained for",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Library staff, none of them trained as IT support" }],
              explanation:
                "Paragraph C describes staff who were never trained as IT support now spending their day on passwords and attachments; the unplanned role is the paragraph's core point.",
            },
          },
          {
            text: "a range of unexpected items that can be borrowed",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "lend power drills, sewing machines, board games, fishing rods and musical instruments" }],
              explanation:
                "Paragraph D lists the unusual loans — drills, sewing machines, board games, fishing rods, instruments — and then generalises the sharing principle behind lending them.",
            },
          },
          {
            text: "an admission that visitor numbers have declined in some places",
            correct: 0,
            lure: 5,
            meta: {
              skills: ["scanning", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "Visits have fallen from their turn-of-the-century peak in some countries, it is true" }],
              explanation:
                "Paragraph A makes the admission plainly — visits have fallen from their peak in some countries, it is true — before arguing that the institution has been repurposed rather than defeated.",
              trap: {
                family: "mention-lure",
                note: "Paragraph F also describes decline, but of budgets and opening hours; the admission about visits themselves belongs to the opening paragraph.",
              },
            },
          },
          {
            text: "a warning that services have been weakened behind surviving branch doors",
            correct: 5,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "some services have hollowed out even where the doors stayed open" }],
              explanation:
                "Paragraph F carries the warning from professional bodies: services hollowed out even where the doors stayed open, with trimmed book funds and volunteers replacing trained staff.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F", "G"],
      },
      {
        id: "q2",
        type: "sentence-completion",
        label: "Questions 6–10",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "6. A library does not purchase an e-book; instead it holds a" }, { kind: "blank", no: 6 }, { kind: "text", text: "that may expire after twenty-six loans." }],
          [{ kind: "text", text: "7. Among those who need library help with online services are people who have no broadband or no" }, { kind: "blank", no: 7 }, { kind: "text", text: "at home." }],
          [{ kind: "text", text: "8. Gardeners who take seed packets in spring bring back" }, { kind: "blank", no: 8 }, { kind: "text", text: "in autumn." }],
          [{ kind: "text", text: "9. In cold winters, some libraries promoted themselves as" }, { kind: "blank", no: 9 }, { kind: "text", text: "public rooms with no obligation to spend." }],
          [{ kind: "text", text: "10. Spending cuts have reduced" }, { kind: "blank", no: 10 }, { kind: "text", text: "and branch networks in Britain and beyond." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "licence",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "the licence can expire after twenty-six loans or a single year" }],
              explanation:
                "Paragraph B's key sentence — a library does not buy an e-book; it licenses one — supplies the noun whose expiry after twenty-six loans the sentence asks for: licence.",
            },
          },
          {
            no: 7,
            answer: "printer",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "anyone without a broadband contract or a printer at home" }],
              explanation:
                "Paragraph C lists the people left behind by online services, including anyone without a broadband contract or a printer at home; the sentence keeps broadband and needs the second missing thing.",
            },
          },
          {
            no: 8,
            answer: "seed",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "gardeners take packets in spring and return seed in autumn" }],
              explanation:
                "Paragraph D describes the seed library: gardeners take packets in spring and return seed in autumn, so the missing noun that comes back in autumn is seed.",
            },
          },
          {
            no: 9,
            answer: "heated",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "advertised themselves — warmly and a little awkwardly — as heated public rooms where nobody has to buy anything" }],
              explanation:
                "Paragraph E recalls libraries advertising themselves as heated public rooms where nobody has to buy anything; the sentence keeps public rooms and needs the adjective heated.",
            },
          },
          {
            no: 10,
            answer: "opening hours",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "A generation of spending cuts has reduced opening hours and branch networks" }],
              explanation:
                "Paragraph F states that a generation of spending cuts has reduced opening hours and branch networks; the sentence keeps branch networks and asks for its two-word partner.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "obituary", partOfSpeech: "noun", definition: "a published notice of a death, or a piece declaring the end of something; commentators wrote the library's obituary when the internet arrived." },
      { word: "licence", partOfSpeech: "noun", definition: "a legal permission to use something for agreed terms; libraries license e-books rather than buying them outright." },
      { word: "patrons", partOfSpeech: "noun (plural)", definition: "the users or customers of a library; staff help patrons attach documents and reset passwords." },
      { word: "encyclopaedias", partOfSpeech: "noun (plural)", definition: "large reference works covering all branches of knowledge; once the classic example of an item too costly for one household to own." },
      { word: "hollowed out", partOfSpeech: "verb phrase (past participle)", definition: "emptied of substance while keeping the outer shape; services hollow out when book funds and trained staff go but the doors stay open." },
      { word: "repurposed", partOfSpeech: "verb (past)", definition: "given a new purpose; the passage argues the library was repurposed, not replaced, by the digital age." },
    ],
    passageNote:
      "A culture-topic survey built on one example per paragraph; the matching-information set rewards scanning for each paragraph's job rather than word-spotting, and the sentences lift their nouns straight from the text.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-volcanoes",
    title: "Listening to volcanoes",
    variant: "academic",
    section: 2,
    subject: "geology",
    topic: "science",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Follow a monitoring-science explanation: the three signal channels — quakes, deformation and gas — the case studies that show them working or failing, and the honest limits of forecasting.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Listening to volcanoes",
        paragraphs: [
          "A volcano is not a bomb with a hidden timer; it is a machine that groans before it moves. Almost every major eruption of the modern instrumental era announced itself in advance, in earthquakes, swelling ground and shifting gases, and the craft of forecasting has climbed from folklore to physics. Listening well, however, is harder than it sounds, and the history of volcano monitoring mixes celebrated successes with signals that arrived on time and were ignored.",
          "The clearest voice belongs to the earthquakes. As magma forces its way upward it cracks the rock around it, and seismometers planted on a volcano's flanks record the resulting shudders. In the days or weeks before an eruption, the drumbeat of small quakes often changes character, merging into a continuous, low-frequency vibration known as harmonic tremor — the seismic signature, most volcanologists agree, of fluid moving through a conduit. Observatories chart this signal around the clock, and a sustained rise in tremor is read as a serious warning.",
          "The mountain itself also swells. Magma entering a chamber pushes the surface outward, by millimetres in some cases and by metres in others, and several kinds of instrument watch for that inflation. Tiltmeters register a slope's change of angle; GPS stations log the slow wander of survey points; and satellites bounce radar off the ground and compare the echoes flight by flight. The radar technique can map a swelling volcano from orbit, through cloud and darkness, and has caught inflations that instruments on the ground missed.",
          "Gases provide the third channel. Magma rising towards the surface releases dissolved substances, and the plume above a restless volcano carries sulphur dioxide that spectrometers on the crater rim — or drones flown through the cloud — can quantify. Paradoxically, a falling gas reading can be the more alarming: it may mean the conduit has plugged itself, letting pressure build behind a cap of solidified rock. Gas, quakes and swelling read together are what persuaded scientists to warn of the Philippine eruption of 1991, and the record suggests the combination is the strongest hand monitors can hold.",
          "The Philippine volcano Pinatubo, dormant for centuries, is the discipline's proudest case. Its forecasts — tremor, inflation, a plume visible for miles — prompted the evacuation of tens of thousands of people in the days before the cataclysm, and even the nearby Clark Air Base was largely emptied. A decade and a half earlier, in Colombia, the story ran the other way. The precursors of the 1985 eruption at Nevado del Ruiz were recorded, but interpretation was muddled, the danger report was diluted on its way up the administrative ladder, and a mudflow buried the town of Armero, killing more than twenty thousand people.",
          "Forecasts like Pinatubo's remain the exception, because precursor signals say that trouble is building without saying when or how large. Some volcanoes inflate for years and then subside; others explode with days of notice. False alarms carry their own costs — evacuated farms fail, scepticism hardens, and the next warning is taken less seriously — so scientists have learned to speak in probabilities and alert levels rather than dates. And every volcano has its own personality, which means a monitoring network must run for years, quietly gathering a baseline, before its readings mean much at all.",
          "The instruments are still improving. Machine-learning systems now scan continuous seismic streams for patterns a human analyst would miss; automated alerts push readings to phones within minutes; drones sample gas and photograph changes too dangerous for a climber. Most volcanoes on Earth, though, still have no modern monitoring whatsoever, and the discipline's quiet ambition is unglamorous: not to predict eruptions, but to wrap every restless mountain in enough instruments that nobody dies of surprise again.",
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
          [{ kind: "text", text: "Warning signs a volcano gives" }],
          [{ kind: "text", text: "• Rising magma cracks the surrounding rock; seismometers on the flanks record the resulting" }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "• Before an eruption, small quakes may merge into a continuous vibration known as" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "•" }, { kind: "blank", no: 3 }, { kind: "text", text: "detect changes in the angle of a slope as the surface is pushed outward." }],
          [{ kind: "text", text: "• Radar satellites can measure the" }, { kind: "blank", no: 4 }, { kind: "text", text: "of a volcano through cloud and darkness." }],
          [{ kind: "text", text: "• A fall in" }, { kind: "blank", no: 5 }, { kind: "text", text: "emissions may indicate a plugged conduit and mounting pressure." }],
          [{ kind: "text", text: "• In 1991, warnings based on combined signals led to the" }, { kind: "blank", no: 6 }, { kind: "text", text: "of tens of thousands before the Philippine eruption." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "shudders",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "seismometers planted on a volcano's flanks record the resulting shudders" }],
              explanation:
                "Paragraph B explains that rising magma cracks the rock around it and seismometers record the resulting shudders; the note keeps resulting and needs the noun shudders.",
            },
          },
          {
            no: 2,
            answer: "harmonic tremor",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "merging into a continuous, low-frequency vibration known as harmonic tremor" }],
              explanation:
                "The continuous, low-frequency vibration that small quakes merge into is named harmonic tremor in paragraph B, and the glossary carries the term for later revision.",
            },
          },
          {
            no: 3,
            answer: "tiltmeters",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Tiltmeters register a slope's change of angle" }],
              explanation:
                "Paragraph C lists the three deformation instruments; tiltmeters are the ones that register a slope's change of angle as the surface is pushed outward.",
            },
          },
          {
            no: 4,
            answer: "swelling",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "The radar technique can map a swelling volcano from orbit, through cloud and darkness" }],
              explanation:
                "The radar technique maps a swelling volcano from orbit through cloud and darkness, so the thing measured from space in the note is the swelling itself.",
            },
          },
          {
            no: 5,
            answer: "sulphur dioxide",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "the plume above a restless volcano carries sulphur dioxide" }],
              explanation:
                "Paragraph D explains that a falling sulphur dioxide reading may mean the conduit has plugged itself; the note keeps emissions and asks for the gas the plume carries.",
            },
          },
          {
            no: 6,
            answer: "evacuation",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "prompted the evacuation of tens of thousands of people in the days before the cataclysm" }],
              explanation:
                "The Pinatubo paragraph credits the combined readings for the evacuation of tens of thousands of people before the cataclysm; the note reuses tens of thousands and needs the noun evacuation.",
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
            stem: "What is harmonic tremor, according to paragraph B?",
            options: [
              "The cracking of rock as magma pushes upward",
              "A continuous low-frequency vibration linked to fluid moving through a conduit",
              "A sudden rise in the number of large earthquakes",
              "A signal that can be recorded only by satellites in orbit",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "merging into a continuous, low-frequency vibration known as harmonic tremor — the seismic signature, most volcanologists agree, of fluid moving through a conduit" }],
              explanation:
                "Paragraph B first describes rock cracking as the source of the discrete quakes, then names their merged form — harmonic tremor — as the signature of fluid moving through a conduit.",
              trap: {
                family: "mention-lure",
                note: "The lure quotes a real phrase from the same paragraph, but rock cracking is the earlier, separate signal, not the tremor itself.",
              },
              whyWrong: [
                "A: rock cracking produces the individual small quakes; the tremor is the continuous vibration they merge into.",
                "C: the paragraph describes a change in the character of small quakes, not a jump in large earthquakes.",
                "D: the tremor is charted by observatories on the ground; the satellite radar technique belongs to the next paragraph.",
              ],
            },
          },
          {
            stem: "The writer presents the Colombian case as an example of",
            options: [
              "an eruption that occurred without any warning signs",
              "instruments that failed to record the precursors",
              "warnings that were diluted rather than acted upon",
              "an evacuation that was ordered too late to matter",
            ],
            correct: 2,
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "interpretation was muddled, the danger report was diluted on its way up the administrative ladder" }],
              explanation:
                "The Colombian case is presented as a failure of response rather than of instruments: the precursors were recorded, but interpretation was muddled and the report was diluted up the ladder.",
              whyWrong: [
                "A: the passage states the precursors of the 1985 eruption were recorded, so the signs existed.",
                "B: the instruments worked; the human chain of interpretation and decision failed.",
                "D: the paragraph's emphasis is on muddled interpretation and a diluted report, not on the timing of an evacuation order.",
              ],
            },
          },
          {
            stem: "According to paragraph F, one reason scientists speak in probabilities is that",
            options: [
              "false alarms make later warnings less convincing",
              "volcanoes never give any notice before erupting",
              "funding bodies require probability estimates",
              "most volcanoes are already fully instrumented",
            ],
            correct: 0,
            lure: 3,
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "False alarms carry their own costs — evacuated farms fail, scepticism hardens, and the next warning is taken less seriously" }],
              explanation:
                "The paragraph explains why scientists speak in probabilities: false alarms carry real costs, since evacuated farms fail, scepticism hardens and the next warning is taken less seriously.",
              trap: {
                family: "mention-lure",
                note: "The lure borrows a true statement from paragraph G, but the question is anchored to paragraph F's reasoning about probabilities.",
              },
              whyWrong: [
                "B: the passage's whole premise is that volcanoes do announce themselves through precursors.",
                "C: funding bodies are never mentioned anywhere in the passage.",
                "D: paragraph G says the opposite — most volcanoes on Earth still have no modern monitoring whatsoever.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "magma", partOfSpeech: "noun", definition: "molten rock beneath the earth's surface; once it erupts it is called lava. Rising magma cracks rock and deforms the surface." },
      { word: "seismometers", partOfSpeech: "noun (plural)", definition: "instruments that detect and record ground movement; planted on volcano flanks, they register the shudders caused by rising magma." },
      { word: "harmonic tremor", partOfSpeech: "noun", definition: "a continuous, low-frequency seismic vibration thought to signal fluid moving through a volcano's conduit." },
      { word: "conduit", partOfSpeech: "noun", definition: "the channel through which magma travels towards the surface; a plugged conduit lets pressure build behind solidified rock." },
      { word: "tiltmeters", partOfSpeech: "noun (plural)", definition: "instruments measuring a change in a slope's angle; they detect the ground deformation caused by an inflating magma chamber." },
      { word: "mudflow", partOfSpeech: "noun", definition: "a fast-moving landslide of water, ash and debris; the 1985 Colombian mudflow buried the town of Armero." },
    ],
    passageNote:
      "Paragraphs B–D each explain one instrument family, so the notes ride on those definitions; both multiple-choice traps sit where one paragraph's vocabulary spills over into another's territory.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-bartering",
    title: "Cash-free: the return of barter",
    variant: "academic",
    section: 1,
    subject: "economics",
    topic: "economics",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Untangle an economics argument: what barter is bad at, how trade-credit and time-bank systems repair it, and why barter returns whenever trust in money fails.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Cash-free: the return of barter",
        paragraphs: [
          "Economics textbooks used to open with the same origin story. Before money existed, the story ran, people swapped goods directly — a hunter's meat for a farmer's grain — and the sheer awkwardness of those swaps drove humanity to invent coinage. There is one difficulty with this fable: anthropologists, who have spent careers studying communities without money, keep failing to find much barter in them. Direct exchange between neighbours is rare where trust exists, and where barter does appear it is usually between strangers, or in the wreckage of a collapsed currency.",
          "What barter famously suffers from is the double coincidence of wants. A baker with bread to spare must find not merely someone who values bread, but someone who values bread and possesses, at that same hour, something the baker happens to want. Money dissolves the problem by splitting each trade in two: sell the bread for coin today, buy meat with the coin next week. A remarkable amount of economics — the demand for money, the cost of searching, the very purpose of intermediaries — grows out of that single trick.",
          "Yet barter's obituary keeps being postponed, because its modern descendants quietly repair the coincidence problem. Commercial barter exchanges enrol businesses and clear their deals in trade credits: a hotel with empty rooms on Tuesdays sells them through the exchange, accumulates credits, and spends them on radio advertising or office refurbishment. No cash changes hands, spare capacity is monetised, and the tax authorities are notified all the same. The industry is compact but durable, with national associations, its own brokerages and a professional vocabulary.",
          "At street level the same logic runs through time banks and swapping circles. In a time bank, an hour of gardening earns one credit, whatever the skill involved, and the credits buy an hour of piano lessons or dog-walking from another member. Community exchange schemes — local networks run on paper ledgers or simple software, trading in units of their own — flourished in several countries during the 1990s, and smartphone apps now arrange everything from tool swaps to language exchanges within a single postcode. Financial crises have reliably revived the habit: the 2008 crash and the pandemic years after 2020 both produced measurable surges of neighbourly swapping where cash was scarce.",
          "Barter's most dramatic revivals follow currency collapse. When Argentina's banking system seized up in the early 2000s, hundreds of thousands of people joined barter clubs that ran on scrip — printed tokens members accepted precisely because nobody trusted the banks. Greece after 2010 saw the pattern repeated on a smaller scale, with networks trading food and services as euros drained out of local economies. These systems are improvised and they wobble; forged scrip undermined the Argentine clubs in the end. As social experiments, however, they demonstrated that exchange survives even when money falters.",
          "Why does barter keep returning in an economy saturated with currency? Money works because everyone trusts it, and that trust is a public good which governments can squander. Barter re-emerges wherever the trust has drained away — among businesses with idle capacity, households with empty wallets — and modern platforms have lowered the oldest barrier of all, that of finding a partner with matching wants. What technology has still not solved is valuation: deciding how many loaves a haircut is worth requires haggling, instinct or a community convention. Money's job, it turns out, is harder than it looks.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–5",
        instruction:
          "Reading Passage has six paragraphs, A–F. Choose the correct heading for paragraphs B–F from the list of headings below. Write the correct number, i–vi, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 0,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 1, quote: "What barter famously suffers from is the double coincidence of wants." }],
              explanation:
                "Paragraph B defines the double coincidence of wants — the matching problem every direct swap faces — and shows how money's two-step trick dissolves it; the heading names that bottleneck.",
            },
          },
          {
            text: "Paragraph C",
            correct: 1,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "a hotel with empty rooms on Tuesdays sells them through the exchange, accumulates credits" }],
              explanation:
                "Paragraph C follows the commercial exchanges: idle hotel rooms become trade credits spent on advertising, spare capacity monetised without cash; the heading compresses that trade.",
            },
          },
          {
            text: "Paragraph D",
            correct: 2,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Community exchange schemes — local networks run on paper ledgers or simple software" }],
              explanation:
                "Paragraph D moves through time banks, the paper ledgers of the 1990s and modern smartphone apps, showing neighbourly exchange migrating to new tools; the heading marks that migration.",
            },
          },
          {
            text: "Paragraph E",
            correct: 3,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "When Argentina's banking system seized up in the early 2000s" }],
              explanation:
                "Paragraph E tells the two collapse stories, Argentina's scrip clubs and Greece's euro-drained networks; the heading names the trigger the stories share — a currency that failed.",
            },
          },
          {
            text: "Paragraph F",
            correct: 4,
            lure: 0,
            meta: {
              skills: ["skimming", "inference", "structure"],
              evidence: [{ block: 0, paragraph: 5, quote: "Why does barter keep returning in an economy saturated with currency?" }],
              explanation:
                "Paragraph F asks why barter returns and answers with failing trust in money, closing on the unsolved problem of valuation; the heading restates the paragraph's organising question.",
              trap: {
                family: "paraphrase-gap",
                note: "The paragraph mentions matching wants again, echoing paragraph B's vocabulary, but its job is to explain barter's persistence, not to define the bottleneck.",
              },
              whyWrong: [
                "i: 'The bottleneck that money was built to break' describes paragraph B's definition of the coincidence problem; paragraph F only recalls the phrase while answering a different question.",
              ],
            },
          },
        ],
        options: [
          "The bottleneck that money was built to break",
          "Spare capacity, turned into credit",
          "From paper ledgers to phone apps",
          "When the currency collapsed",
          "Why barter keeps coming back",
          "How coins first replaced commodity money",
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
            text: "Anthropologists have generally failed to find communities that ran on barter alone.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "anthropologists, who have spent careers studying communities without money, keep failing to find much barter in them" }],
              explanation:
                "Paragraph A reports that anthropologists keep failing to find much barter in moneyless communities — a hedged version of the statement's claim about societies running on barter alone.",
            },
          },
          {
            text: "Businesses trading through barter exchanges escape the attention of the tax authorities.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "No cash changes hands, spare capacity is monetised, and the tax authorities are notified all the same" }],
              explanation:
                "The same sentence that stresses no cash changing hands adds that the tax authorities are notified all the same; being notified contradicts escaping their attention entirely.",
              trap: {
                family: "mention-lure",
                note: "The lure leans on the phrase no cash changes hands — true — and smuggles in the false conclusion that tax offices are bypassed.",
              },
              whyWrong: [
                "TRUE: cash-free trading still comes with notification, so the authorities are not bypassed.",
                "NOT GIVEN: the sentence states the position plainly — the tax authorities are notified — so this is a located contradiction.",
              ],
            },
          },
          {
            text: "In time banks, credits are earned according to the skill involved.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "scanning"],
              evidence: [{ block: 0, paragraph: 3, quote: "an hour of gardening earns one credit, whatever the skill involved" }],
              explanation:
                "Paragraph D states the opposite rule: an hour of gardening earns one credit, whatever the skill involved, so time banks deliberately ignore skill when pricing their hours.",
            },
          },
          {
            text: "The smartphone swapping apps charge users a monthly fee.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "smartphone apps now arrange everything from tool swaps to language exchanges within a single postcode" }],
              explanation:
                "The passage says the apps arrange swaps within a postcode but never mentions fees of any kind. A business model is simply not described, so the statement stays Not Given.",
              trap: {
                family: "boundary",
                note: "Apps usually charge for something, but the passage never says so — assumptions about business models stay outside the text.",
              },
              whyWrong: [
                "FALSE: nothing in the passage denies fees either; the text is silent about what the apps cost to run or to use.",
                "TRUE: no price, subscription or charge is mentioned anywhere in the paragraph.",
              ],
            },
          },
          {
            text: "Counterfeit scrip damaged the Argentine barter clubs.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "forged scrip undermined the Argentine clubs in the end" }],
              explanation:
                "Paragraph E closes the Argentine story with forged scrip undermining the clubs; counterfeit paraphrases forged and damaged paraphrases undermined, so the statement agrees.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "barter", partOfSpeech: "noun / verb", definition: "the direct exchange of goods or services without money; the textbook origin story of coinage turns out to be hard to confirm." },
      { word: "double coincidence of wants", partOfSpeech: "noun phrase", definition: "the awkward requirement that each trader must want exactly what the other offers at the same moment; money dissolves it by splitting a trade in two." },
      { word: "intermediaries", partOfSpeech: "noun (plural)", definition: "go-betweens that connect buyers and sellers; their purpose is one of the many consequences of money's two-step trick." },
      { word: "monetised", partOfSpeech: "verb (past)", definition: "turned into value or revenue; barter exchanges monetise a hotel's empty Tuesdays without any cash moving." },
      { word: "scrip", partOfSpeech: "noun", definition: "a substitute token accepted as money inside a closed community; Argentine barter clubs ran on printed scrip until forgery undermined it." },
      { word: "haggling", partOfSpeech: "noun / verb (-ing)", definition: "arguing back and forth over a price; deciding how many loaves a haircut is worth still requires it." },
    ],
    passageNote:
      "An economics explainer with one concept per paragraph: the headings test paragraph-level summary, and the verdict items hide behind hedged negatives — all the same, whatever the skill involved.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-child-speech",
    title: "The way we talk to children",
    variant: "academic",
    section: 1,
    subject: "linguistics",
    topic: "education",
    difficulty: 3,
    estimatedMinutes: 16,
    objective: "Weigh a language-development debate: what the baby-talk register does, where the famous word-gap study now stands, and why researchers prize conversation turns over sheer quantity.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "The way we talk to children",
        paragraphs: [
          "In every language researchers have studied, adults speak to babies differently from the way they speak to anyone else on earth. The register has collected many names — parentese, motherese, child-directed speech — and it has a shared signature: a higher pitch, an exaggerated melody, stretched vowels, short sentences and generous pauses. Parents rarely realise they are doing it and cannot switch it off when told to. Even children of four or five rise into the sing-song the moment they are handed a baby to entertain.",
          "The exaggeration is not decoration. Stretched vowels make the sound categories of a language stand out — an English 'ee' becomes longer, purer and more clearly distinct from 'ih' — and the pauses carve the stream of speech into digestible chunks. Newborns, given a choice, prefer the sing-song to ordinary adult conversation, and experiments tracking babies' attention suggest the register helps them work out where one word ends and the next begins.",
          "What the register does not settle is how much speech a baby needs, and here the field produced one of its most cited and most contested numbers. A famous American study from the 1990s counted the words heard by children from professional, working-class and low-income families, and concluded that by the age of four the children of the richest homes had absorbed millions more words — a gap popularly rounded to thirty million. Vocabulary at school entry tracked the count, and the finding launched decades of advice to parents: talk more, and everything follows.",
          "The word gap survived partly because it was tidy. Later researchers, attempting to repeat the work with larger samples and recordings analysed by machine rather than by hand, found the differences between income groups smaller than advertised, and questioned whether the original study's handful of families could bear such a sweeping conclusion. Critics disliked the framing as well: measuring parenting by word count, they argued, turns poverty into a personal failing and ignores the jobs, housing and stress that shape a household's evenings.",
          "A further complication arrives from outside the wealthy West. In some communities in Africa, Asia and the Pacific, adults rarely address infants in conversation at all; babies are carried through the day and learn from the swirl of talk around them, and there is no sign that their language arrives later or poorer for it. Child-directed speech, in other words, is universal as a behaviour but not necessary as an ingredient — the human capacity for language appears to make do with whatever input a culture supplies.",
          "What does seem to matter, several research groups now agree, is the exchange rather than the broadcast. In studies where toddlers wear lightweight recorders, the number of conversational turns — a child's vocalisation answered by an adult, an adult's remark answered by a child — predicts later language skills, and even the brain's response to sounds, better than raw word counts do. A television left running produces no such effect; the youngest listeners, it appears, need a partner who answers back, because the developing system builds itself around contingent replies.",
          "The practical upshot is refreshingly cheap. Nobody needs to drill a baby with flashcards or narrate the supermarket like a documentary; the advice is simply to notice what the child notices and say something back. Programmes that coach this turn-taking — brief home visits, video feedback on a parent's own conversation — show modest but real gains, and they cost a fraction of the remedial teaching they postpone. The way we talk to children matters less as a quantity delivered than as a conversation kept alive.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "sentence-completion",
        label: "Questions 1–5",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "1. Baby-talk is marked by a higher pitch, short sentences and stretched" }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "2. Exaggerated vowels help babies to hear the sound" }, { kind: "blank", no: 2 }, { kind: "text", text: "of their language more clearly." }],
          [{ kind: "text", text: "3. The 1990s study claimed that by age four, children from wealthy homes had heard millions more" }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. Later research had recordings analysed by" }, { kind: "blank", no: 4 }, { kind: "text", text: "rather than by hand." }],
          [{ kind: "text", text: "5. Studies using lightweight recorders found that the number of conversational" }, { kind: "blank", no: 5 }, { kind: "text", text: "predicts later language skill." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "vowels",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "a higher pitch, an exaggerated melody, stretched vowels, short sentences and generous pauses" }],
              explanation:
                "Paragraph A lists the register's signature — higher pitch, exaggerated melody, stretched vowels, short sentences — and the sentence lifts the list, leaving vowels as the missing item.",
            },
          },
          {
            no: 2,
            answer: "categories",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "Stretched vowels make the sound categories of a language stand out" }],
              explanation:
                "Paragraph B credits the stretched vowels with making the sound categories of a language stand out; the sentence reuses sound and asks for the noun that stands out more clearly.",
            },
          },
          {
            no: 3,
            answer: "words",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "the children of the richest homes had absorbed millions more words" }],
              explanation:
                "The famous study concluded that the richest children had absorbed millions more words by the age of four; the sentence keeps millions more and needs the noun words.",
            },
          },
          {
            no: 4,
            answer: "machine",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "recordings analysed by machine rather than by hand" }],
              explanation:
                "Paragraph D describes the replication attempts: larger samples and recordings analysed by machine rather than by hand; the sentence reuses the rather than by hand wording.",
            },
          },
          {
            no: 5,
            answer: "turns",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "the number of conversational turns — a child's vocalisation answered by an adult, an adult's remark answered by a child" }],
              explanation:
                "Paragraph F's recorder studies found that conversational turns — a child answered, an adult answered back — predict later language better than raw word counts do.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 6–8",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "The 'thirty million' figure referred to",
            options: [
              "the size of the vocabulary of four-year-olds",
              "the estimated gap in words heard between children of different backgrounds",
              "the number of families in the original study",
              "the words children could say by school entry",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "the children of the richest homes had absorbed millions more words — a gap popularly rounded to thirty million" }],
              explanation:
                "The thirty million was the popular rounding of the gap in words heard between the richest and poorest children by age four — not a count of vocabulary, families or spoken words.",
              trap: {
                family: "mention-lure",
                note: "Vocabulary at school entry is mentioned in the same paragraph, but as a consequence of the count, not as what the number measured.",
              },
              whyWrong: [
                "A: vocabulary at school entry tracked the count, but the thirty million measured words heard, not words known.",
                "C: the original study followed a handful of families — far fewer than thirty million.",
                "D: the study counted words absorbed by listening, not the words children could say.",
              ],
            },
          },
          {
            stem: "One criticism of the word-gap study mentioned in paragraph D is that",
            options: [
              "it relied on a small number of families to support a sweeping claim",
              "its recordings were too short to analyse reliably",
              "the technology of the 1990s could not capture speech accurately",
              "the families dropped out before the study ended",
            ],
            correct: 0,
            lure: 2,
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "questioned whether the original study's handful of families could bear such a sweeping conclusion" }],
              explanation:
                "The criticism the paragraph develops is that a handful of families was made to bear a sweeping conclusion; the machine-analysis detail belongs to the later, larger replications, not to a fault of the original.",
              trap: {
                family: "mention-lure",
                note: "Recordings analysed by machine appears in the same paragraph, tempting candidates to invent a recording-technology objection the text never makes.",
              },
              whyWrong: [
                "B: no recording length is mentioned; the criticism concerns the sample size and framing.",
                "C: the passage never questions the original study's recording technology.",
                "D: dropout is never mentioned in the passage.",
              ],
            },
          },
          {
            stem: "Communities where adults rarely talk directly to babies are cited as evidence that",
            options: [
              "babies in those communities start speaking later than elsewhere",
              "child-directed speech is not a requirement for language to develop",
              "singing to infants does more harm than good",
              "language ability is inherited rather than learned",
            ],
            correct: 1,
            meta: {
              skills: ["inference", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "Child-directed speech, in other words, is universal as a behaviour but not necessary as an ingredient" }],
              explanation:
                "Paragraph E's communities show language arriving on schedule without direct infant-directed talk, which supports the statement that child-directed speech is a universal behaviour but not a necessary ingredient.",
              whyWrong: [
                "A: the passage states there is no sign that their language arrives later or poorer.",
                "C: singing is never mentioned in the paragraph.",
                "D: the passage argues the capacity makes do with whatever input a culture supplies — the opposite of denying learning.",
              ],
            },
          },
        ],
      },
      {
        id: "q3",
        type: "matching-information",
        label: "Questions 9–11",
        instruction:
          "The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a description of how young children copy the baby-talk register",
            correct: 0,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Even children of four or five rise into the sing-song the moment they are handed a baby to entertain" }],
              explanation:
                "Paragraph A closes with children of four or five rising into the sing-song when handed a baby — the copying observation that the statement paraphrases in plain words.",
            },
          },
          {
            text: "findings from studies in which toddlers wore recorders",
            correct: 5,
            lure: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "In studies where toddlers wear lightweight recorders" }],
              explanation:
                "Paragraph F describes the studies where toddlers wear lightweight recorders and conversational turns predict later language; the famous 1990s count belongs to paragraph C.",
              trap: {
                family: "mention-lure",
                note: "Paragraph C also reports a famous study, but its counting was done by observers in homes, not by recorders worn by toddlers.",
              },
            },
          },
          {
            text: "a low-cost intervention with measured benefits",
            correct: 6,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 6, quote: "Programmes that coach this turn-taking — brief home visits, video feedback on a parent's own conversation — show modest but real gains" }],
              explanation:
                "Paragraph G reports the coaching programmes — brief home visits and video feedback — showing modest but real gains at a fraction of the cost of later remedial teaching.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F", "G"],
      },
    ],
    glossary: [
      { word: "register", partOfSpeech: "noun", definition: "a variety of language used in a particular situation; the sing-song of baby-talk is one of the best-studied registers." },
      { word: "sing-song", partOfSpeech: "noun / adjective", definition: "speech with a strongly rising and falling melody; even young children slip into the sing-song with a baby." },
      { word: "vocalisation", partOfSpeech: "noun", definition: "any sound a person produces with the voice; a child's vocalisation answered by an adult counts as one conversational turn." },
      { word: "contingent", partOfSpeech: "adjective", definition: "dependent on what just happened, as a reply depends on what was said; young language learners build on contingent replies." },
      { word: "turn-taking", partOfSpeech: "noun", definition: "the alternation of speakers in conversation; coaching parents in turn-taking shows modest but real gains." },
      { word: "remedial", partOfSpeech: "adjective", definition: "intended to correct a weakness; early conversational coaching costs a fraction of the remedial teaching it can postpone." },
    ],
    passageNote:
      "Paragraphs C–F form an argument ladder — claim, criticism, counter-evidence, synthesis — so the questions deliberately test who claimed what, and which study showed which thing.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-collecting",
    title: "Why we collect things",
    variant: "academic",
    section: 2,
    subject: "psychology",
    topic: "society",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Separate four rival explanations of collecting — psychoanalytic, identity-based, social and market-driven — and match each claim to the scholar who made it.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "Why we collect things",
        paragraphs: [
          "Humans are the only species that keeps a stamp album. Squirrels hoard for winter, and people under stress accumulate aimlessly, but the deliberate, rule-governed gathering of objects that serve no survival purpose — series completed, variants catalogued, shelves arranged — is distinctively ours. Psychologists, museum scholars and economists have all taken a run at explaining it, and their explanations do not agree.",
          "The objects themselves are accomplices. Stamps come in printed series, trading cards are numbered, and a run of vintage fountain pens almost announces its missing member. Serial structure creates a goal with a visible finish line, and the nearly complete set has a peculiar power: collectors describe the one missing coin as louder than all the coins they already own. Marketers noticed long ago that a series sells its own remainder.",
          "The oldest explanations are psychoanalytic. The analyst Werner Muensterberger, in a book collectors still quote, argued that collecting begins as a consolation: the child, let down by unreliable people, discovers that possessions do not disappoint, and the adult rebuilds that reliable world one acquisition at a time. The theory is unfalsifiable by design and thinly supported by evidence, yet collectors keep recognising something in it — the comfort of a collection that asks nothing of its keeper.",
          "Consumer researchers offer a more testable claim. Russell Belk, in an essay regarded as a landmark of the field, described collections as part of the extended self: the things we gather stand for the person we take ourselves to be, which is why damage to a collection is felt as injury and why collectors speak of 'my' Pre-Columbian figures with the possessive of a blood relation. On this reading, a collection is a museum of its owner, curated to say something no biography states plainly.",
          "The social account shifts the focus from the psyche to the club. The museum scholar Susan Pearce observed that most collections are quietly built for an audience: the society of fellow collectors whose approval certifies the collection as serious. Fairs, conventions and online forums supply that audience, and trading duplicates is the handshake that admits a newcomer. A collection, Pearce suggested, is a social instrument — a way of holding a conversation about something safer than oneself.",
          "Then there is the market. Once an object is collected, it acquires a price history, and price histories attract people who do not care about the object at all. The results are familiar from history: the Dutch tulip mania of the 1630s, when bulb prices left all sense behind; the rare-stamp crash of the 1980s; toys bought in bulk and never removed from their boxes. Money changes the psychology of the pile — where the completist feels satisfaction, the investor feels exposure, and the two often share a single body.",
          "Digital collectibles have loosened every constraint except the impulse. In-game items, digital artworks issued in limited numbers and virtual trading cards can be verified, transferred and displayed without weight or shelf space, and the market for them has boomed and busted with spectacular speed. The objects are weightless; the behaviour is recognisably the old behaviour — the hunt, the set, the display case, the envy of the better-equipped neighbour.",
          "Which explanation wins? Probably all of them at once, in proportions that vary with the collector. What the accounts share is a picture of the collection as a small victory over disorder and time: a corner of the world where every object has its place, the place is documented, and the whole arrangement can be handed on when its keeper cannot.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-features",
        label: "Questions 1–4",
        instruction:
          "Look at the following statements and the list of people below. Match each statement with the person connected with it. You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "Collecting is a response to being let down by unreliable people.",
            correct: 0,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "the child, let down by unreliable people, discovers that possessions do not disappoint" }],
              explanation:
                "The consolation theory is Muensterberger's: the child let down by unreliable people discovers that possessions do not disappoint, and collecting rebuilds that reliability in adulthood.",
            },
          },
          {
            text: "A collection acts as an extension of its owner's identity.",
            correct: 1,
            lure: 0,
            meta: {
              skills: ["scanning", "paraphrase", "opinion"],
              evidence: [{ block: 0, paragraph: 3, quote: "described collections as part of the extended self" }],
              explanation:
                "The extended self belongs to Belk, the consumer researcher: collections stand for the person we take ourselves to be, so damage to them is felt as a personal injury.",
              trap: {
                family: "attribution",
                note: "Both theory paragraphs sit side by side; candidates who skim the names attach the identity claim to the psychoanalyst who opens the theory section.",
              },
              whyWrong: [
                "Werner Muensterberger: his claim is about consolation for unreliable people, not about identity extending into possessions.",
              ],
            },
          },
          {
            text: "Collections are assembled with the approval of fellow collectors in mind.",
            correct: 2,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "most collections are quietly built for an audience: the society of fellow collectors whose approval certifies the collection as serious" }],
              explanation:
                "Pearce's observation is that collections are quietly built for an audience of fellow collectors whose approval certifies them as serious — the social instrument reading of the hobby.",
            },
          },
          {
            text: "Each theory holds part of the truth, in proportions that vary.",
            correct: 3,
            meta: {
              skills: ["inference", "opinion"],
              evidence: [{ block: 0, paragraph: 7, quote: "Probably all of them at once, in proportions that vary with the collector." }],
              explanation:
                "The final paragraph is the writer's own verdict rather than a named scholar's: all the accounts hold part of the truth at once, in proportions that vary with the collector.",
            },
          },
        ],
        options: [
          "Werner Muensterberger, psychoanalyst",
          "Russell Belk, consumer researcher",
          "Susan Pearce, museum scholar",
          "The writer of the passage",
        ],
      },
      {
        id: "q2",
        type: "summary-completion",
        label: "Questions 5–9",
        instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
        wordLimit: 1,
        layout: [
          [
            { kind: "text", text: "The serial structure of collectibles gives the hunt a visible finish line: the one missing coin feels 5" },
            { kind: "blank", no: 5 },
            { kind: "text", text: "than the whole existing set. Muensterberger traced collecting back to childhood, arguing that it offers 6" },
            { kind: "blank", no: 6 },
            { kind: "text", text: "to a child let down by unreliable people. Belk described a collection as part of the extended 7" },
            { kind: "blank", no: 7 },
            { kind: "text", text: ", so that damage to it is felt as injury. Pearce stressed the 8" },
            { kind: "blank", no: 8 },
            { kind: "text", text: "of fellow collectors, whose approval makes a collection serious. Where money takes over, the completist's satisfaction gives way to the investor's sense of 9" },
            { kind: "blank", no: 9 },
            { kind: "text", text: "." },
          ],
        ],
        blanks: [
          {
            no: 5,
            answer: "louder",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "collectors describe the one missing coin as louder than all the coins they already own" }],
              explanation:
                "Paragraph B supplies the phrase the summary borrows: collectors describe the one missing coin as louder than all the coins they already own, so the comparative adjective is louder.",
            },
          },
          {
            no: 6,
            answer: "consolation",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "collecting begins as a consolation: the child, let down by unreliable people" }],
              explanation:
                "Muensterberger's argument is that collecting begins as a consolation for a child let down by unreliable people; the summary keeps the clause and needs the noun itself.",
            },
          },
          {
            no: 7,
            answer: "self",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "described collections as part of the extended self" }],
              explanation:
                "Belk's landmark essay describes collections as part of the extended self, so the missing noun completing the summary's phrase extended 7 is self itself, taken verbatim.",
            },
          },
          {
            no: 8,
            answer: "audience",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "most collections are quietly built for an audience: the society of fellow collectors" }],
              explanation:
                "Pearce observed that most collections are quietly built for an audience — the approving society of fellow collectors the summary describes — and trading duplicates admits the newcomer.",
            },
          },
          {
            no: 9,
            answer: "exposure",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 5, quote: "where the completist feels satisfaction, the investor feels exposure" }],
              explanation:
                "Paragraph F contrasts the completist's satisfaction with the investor's exposure once money enters the hobby; the summary keeps the investor's sense of and needs the noun exposure.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "catalogued", partOfSpeech: "verb (past participle)", definition: "recorded in an ordered list; collecting means series completed, variants catalogued and shelves arranged." },
      { word: "acquisition", partOfSpeech: "noun", definition: "the act of gaining an object, or the object gained; Muensterberger's collector rebuilds a reliable world one acquisition at a time." },
      { word: "unfalsifiable", partOfSpeech: "adjective", definition: "impossible to prove wrong, however the evidence turns out; a weakness of the psychoanalytic account of collecting." },
      { word: "extended self", partOfSpeech: "noun phrase", definition: "Belk's term for the way possessions become part of who we are; damage to a collection is then felt as personal injury." },
      { word: "duplicates", partOfSpeech: "noun (plural)", definition: "extra copies of an item already owned; trading duplicates is the handshake that admits a newcomer to the collecting circle." },
      { word: "completist", partOfSpeech: "noun", definition: "a collector driven to finish a set; where the completist feels satisfaction, the investor feels exposure." },
    ],
    passageNote:
      "A perspectives passage with one theorist per paragraph from C to E; the feature-matching items are attribution work, and the summary threads exactly one key noun out of each account.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-ac-recycled-builds",
    title: "Building with the rubble",
    variant: "academic",
    section: 3,
    subject: "materials engineering",
    topic: "environment",
    difficulty: 4,
    estimatedMinutes: 18,
    objective: "Follow a materials-engineering process and its constraints: how demolition rubble becomes graded aggregate, why chemistry caps its use in structural concrete, and what economics decides in the end.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Building with the rubble",
        paragraphs: [
          "Every demolition is also a mining operation that nobody calls one. When an office tower, a bridge or a factory comes down, the pile left behind holds thousands of tonnes of concrete, brick, steel and timber — construction and demolition waste, among the largest waste streams any society produces. Most of that material is crushed and shovelled into road foundations or landfill, a fate engineers dismiss as downcycling: a building's strongest materials end their working lives as anonymous fill.",
          "A growing school of engineers wants to reverse the flow. A city, on this argument, is not a consumer of materials but a warehouse of them — an urban mine whose ores are the buildings already standing in it. Old concrete, in particular, can replace part of the virgin sand and gravel quarried from hills and riverbeds, and every tonne reused is a tonne neither dug nor dumped. The vision suits the moment: quarries near major cities are running low, and hauling crushed stone from distant pits carries an emissions bill of its own.",
          "Turning rubble into useful aggregate is a sequence, and the sequence is the secret. First the building is stripped rather than flattened: windows, wiring, plaster, timber and any hazardous materials — asbestos above all — are removed by hand, leaving a concrete skeleton reasonably clean. Steel reinforcement is either cut out on site or pulled from the crushed stream later by powerful magnets. The concrete is then crushed in stages, and the broken stone is passed through screens that sort it into graded sizes, while contaminants lighter than stone are skimmed away by air blasts and wash water. What leaves the plant is recycled concrete aggregate: clean, graded and ready for use — though not quite the equal of its quarry-born cousin.",
          "The inequality is chemical. Old aggregate wears a skin of cement paste from its first life, and that porous coat both absorbs water and weakens the new mix. Structural codes therefore cap the proportion of recycled material permitted in load-bearing concrete — several European countries allow somewhere between a fifth and a third — with the remainder reserved for pavements, foundations and other undemanding work. Researchers are attacking the paste itself: processes now in trial separate the sand and stone from the old mortar, or bubble carbon dioxide through wet recycled aggregate, mineralising the paste and stiffening the grains while locking the gas away.",
          "The barriers beyond chemistry are bureaucratic. A contractor can rarely prove where a load of recycled aggregate came from or what its history contains, and design codes written for quarried stone with quality certificates hesitate over demolition debris with a past. Countries that keep material passports — documents recording what a building is made of — find approvals noticeably easier; where no such records exist, engineers must test every batch, and the cost of testing pushes designers straight back to the quarry.",
          "Concrete is not the whole pile. Structural steel sections can be re-melted or, better still, reused as beams with barely any processing, and the market for reclaimed bricks — cleaned of mortar by hand — supports small businesses wherever demolition is done unhurried. Reclaimed timber, once nail-scarred and suspect, is now prized by architects for floors and joinery. Each of these reuses sits higher up the value chain than crushing, and each demands exactly what demolition schedules rarely allow: the time to take a building apart thoughtfully rather than dropping it.",
          "Economics will decide, as it always does. Virgin aggregate remains astonishingly cheap in most places, and recycled material competes only where landfill taxes, green public procurement or carbon accounting tilt the table. Those tilts are strengthening: cities increasingly score a project's embodied carbon — the emissions wrapped up in its materials — and a bid that mines its own site can win on that arithmetic alone. The loop is not closing quickly, but the machinery for closing it now exists, and the piles behind the wrecking ball are starting to look less like waste and more like inventory.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "flowchart-completion",
        label: "Questions 1–5",
        instruction: "Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "From demolition to new material" }],
          [{ kind: "text", text: "The building is stripped by hand, and 1" }, { kind: "blank", no: 1 }, { kind: "text", text: "materials such as asbestos are removed first." }],
          [{ kind: "text", text: "Steel reinforcement is cut out on site or removed from the crushed stream by 2" }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "The concrete is crushed in stages and passed through 3" }, { kind: "blank", no: 3 }, { kind: "text", text: "that sort it into graded sizes." }],
          [{ kind: "text", text: "Light contaminants are skimmed away using air blasts and 4" }, { kind: "blank", no: 4 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "Most recycled aggregate is reserved for pavements, 5" }, { kind: "blank", no: 5 }, { kind: "text", text: "and other undemanding work." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "hazardous",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "windows, wiring, plaster, timber and any hazardous materials — asbestos above all — are removed by hand" }],
              explanation:
                "Step one in paragraph C is stripping by hand: windows, wiring, plaster, timber and any hazardous materials — asbestos above all — are removed before the skeleton is crushed.",
            },
          },
          {
            no: 2,
            answer: "magnets",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "pulled from the crushed stream later by powerful magnets" }],
              explanation:
                "Steel reinforcement is either cut out on site or pulled from the crushed stream later by powerful magnets; the flowchart keeps the first route and asks for the second.",
            },
          },
          {
            no: 3,
            answer: "screens",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "the broken stone is passed through screens that sort it into graded sizes" }],
              explanation:
                "After crushing in stages, the broken stone passes through screens that sort it into graded sizes; the flowchart keeps the graded sizes and asks for the sorting equipment.",
            },
          },
          {
            no: 4,
            answer: "wash water",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 2, quote: "contaminants lighter than stone are skimmed away by air blasts and wash water" }],
              explanation:
                "Contaminants lighter than stone are skimmed away by air blasts and wash water; the flowchart supplies the air blasts and needs the two-word partner that follows.",
            },
          },
          {
            no: 5,
            answer: "foundations",
            meta: {
              skills: ["scanning", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "with the remainder reserved for pavements, foundations and other undemanding work" }],
              explanation:
                "Paragraph D reserves most recycled material for pavements, foundations and other undemanding work, because structural codes cap its share in load-bearing concrete.",
              trap: {
                family: "mention-lure",
                note: "Load-bearing concrete appears temptingly in the same paragraph, but the codes cap that use; the bulk of the material goes to the undemanding work named.",
              },
              whyWrong: [
                "Concrete: tempting because the whole passage is about concrete, but the recycled fraction is deliberately kept out of most load-bearing mixes.",
                "Buildings: too general to be the passage's own word for the undemanding uses listed alongside pavements.",
              ],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 6–10",
        instruction:
          "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "Construction and demolition waste is among the biggest waste streams society produces.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "construction and demolition waste, among the largest waste streams any society produces" }],
              explanation:
                "Paragraph A names construction and demolition waste as among the largest waste streams any society produces, which the statement repeats almost word for word.",
            },
          },
          {
            text: "The writer accepts that recycled concrete aggregate is currently not the full equal of quarried aggregate.",
            answer: "YES",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "though not quite the equal of its quarry-born cousin" }],
              explanation:
                "The end of paragraph C concedes the limitation — not quite the equal of its quarry-born cousin — which the writer plainly accepts and then explains chemically in paragraph D.",
            },
          },
          {
            text: "Reclaimed bricks are generally cleaned by machine.",
            answer: "NO",
            meta: {
              skills: ["detail", "scanning"],
              evidence: [{ block: 0, paragraph: 5, quote: "reclaimed bricks — cleaned of mortar by hand — supports small businesses" }],
              explanation:
                "Paragraph F states that reclaimed bricks are cleaned of mortar by hand, so a general rule of machine cleaning contradicts the description the passage actually gives.",
            },
          },
          {
            text: "The writer regards the industry's slow progress towards closing the loop as unacceptable.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "The loop is not closing quickly, but the machinery for closing it now exists" }],
              explanation:
                "The closing paragraph admits the loop is not closing quickly but immediately balances that with the machinery now existing — a patient, constructive tone rather than condemnation.",
              trap: {
                family: "boundary",
                note: "Candidates read not closing quickly as complaint; the balancing clause shows the writer accepts the pace while noting the direction of travel.",
              },
              whyWrong: [
                "YES: acknowledging slowness is not the same as calling it unacceptable — the sentence moves straight on to what now exists.",
                "NOT GIVEN: the writer's attitude is stated in the closing sentences, so the text is not silent on this point.",
              ],
            },
          },
          {
            text: "Landfill taxes have been raised in most countries in recent years.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 6, quote: "recycled material competes only where landfill taxes, green public procurement or carbon accounting tilt the table" }],
              explanation:
                "Landfill taxes appear as one of several conditions that tilt the table towards recycled material; the passage never says how many countries have raised them, or when.",
              trap: {
                family: "boundary",
                note: "The sentence names the policy tools but reports no adoption figures; neither the claim nor its opposite is stated anywhere in the text.",
              },
              whyWrong: [
                "NO: the passage does not deny tax rises anywhere; it is simply silent about how many countries use each tool.",
                "YES: no country count, date or increase is reported — the taxes are hypothetical conditions, not enacted facts in the passage.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "downcycling", partOfSpeech: "noun", definition: "recycling a material into a lower-quality use; crushing fine concrete into anonymous road fill is the passage's example." },
      { word: "urban mine", partOfSpeech: "noun", definition: "the idea of a city as a stock of reusable materials whose ores are its standing buildings." },
      { word: "aggregate", partOfSpeech: "noun", definition: "the sand and gravel mixed with cement to make concrete; recycled concrete aggregate carries a skin of old cement paste." },
      { word: "hazardous", partOfSpeech: "adjective", definition: "dangerous to health; hazardous materials such as asbestos are stripped out by hand before demolition rubble is crushed." },
      { word: "mineralising", partOfSpeech: "verb (-ing)", definition: "turning a substance into a mineral form; bubbling carbon dioxide through wet aggregate mineralises the old paste and locks the gas away." },
      { word: "embodied carbon", partOfSpeech: "noun phrase", definition: "the emissions wrapped up in a product's materials and making; cities increasingly score projects on it." },
    ],
    passageNote:
      "Paragraph C is a process description, and the flowchart hangs on its verb chain; the Yes/No/Not Given set tests the writer's carefully balanced tone in the closing paragraphs.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
