/**
 * General Training text library C (PROMPT 45, Parts C and D).
 *
 *   ielts-rb-gt-lighthouses — Section 3, longer general-interest passage (advanced, d4)
 *   ielts-rb-gt-denim       — Section 3, longer general-interest passage (advanced, d4)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtLighthouses: ReadingExercise = {
  slug: "ielts-rb-gt-lighthouses",
  title: "Lighthouses: keeping the coast lit",
  variant: "gt",
  section: 3,
  subject: "Longer general-interest passages",
  difficulty: 4,
  estimatedMinutes: 15,
  objective: "Read a general-interest history: why the lights exist, who built them, the engineering and optics that made them reliable, and what they are for now.",
  intro: "Read the passage below and answer Questions 1–12.",
  blocks: [
    {
      heading: "Lighthouses: keeping the coast lit",
      paragraphs: [
        "On almost any coast in the world, a white tower stands where the land ends. We photograph it, paint it, put it on postcards — and forget that it is a machine, an instrument for keeping ships off the rocks. The romance is real, but it arrived late: the lighthouse's first job was arithmetic, the simple accounting of how many ships and sailors a coast could afford to lose.",
        "The ancients built one lighthouse so famous that we still list it among the wonders of the world: the tower at Alexandria, in Egypt, whose fire and bronze mirrors guided shipping into the harbour for centuries before earthquakes brought it down. Elsewhere, lights were rare and amateur — bonfires on headlands, bells rung in fog, monks keeping candles burning on perilous islands. For most of history, if a coast was dark, ships simply stayed out at night.",
        "What changed was trade. By the seventeenth century, merchant fleets were growing, insurance was spreading, and every wreck had accountants on both sides of it. England's Trinity House, chartered in 1514 as a guild of pilots, found itself slowly responsible for the lights; private investors built towers and charged passing ships a fee, collected with a thoroughness that made lighthouse-keeping one of the stranger businesses of the age. The early towers were mostly timber, and the records show them burning with depressing regularity — the very fires that warned ships away were the buildings' own worst enemy.",
        "The engineer who broke the pattern was John Smeaton, asked in the 1750s to rebuild a light on the Eddystone reef, a spot of rock fourteen kilometres off Plymouth that had already destroyed two lighthouses. Smeaton abandoned wood and built in granite, shaping each block so that it locked into its neighbours with dovetail joints, the whole tower profiled like the trunk of an oak to shed the sea's blow. The design was so sound that the tower stood for over a century, and its anatomy — interlocked stone, curved profile, a heavy base — became the template for every rock lighthouse since. Engineers had learned, in effect, to build on the sea's own ground.",
        "Making the light itself seen followed a similar leap. For centuries the flame was just that — a fire, then an oil lamp, its weakness partly masked by polished reflectors. The great improvement was a lens: the French physicist Augustin Fresnel worked out in the 1820s how to grind glass into concentric rings that gathered a lamp's light into a single, flat, far-reaching beam. Fresnel's optics multiplied the visible range of a light several times over, and a clockwork mechanism turned the whole lens assembly so that each tower swept the horizon with its own rhythm of flashes. The rhythm mattered: a sailor with a chart could time the flashes and know exactly which tower he was looking at, because every lighthouse's flash pattern was its signature.",
        "The people inside the towers gave the institution its human face. Keepers worked in watches around the clock, trimming wicks, winding the clockwork, logging weather and shipping; many postings were family stations on rocks reached by rope in calm weather and not reached at all in storms. It was honest, essential and famously lonely work, and the twentieth century ended it: automation, electricity and remote monitoring reached the last manned British lighthouse in the 1990s, and the keepers came ashore for good.",
        "Are the towers now merely scenery? Not quite. Satellite navigation steers most ships, but electronics fail, and a physical light on a physical chart remains the backup that costs nothing to trust. Several towers have been converted into holiday accommodation, and enthusiasts rent them for the same views the keepers were paid to endure. The buildings that once priced the safety of cargo now sell sunsets — which is, when you think about the arithmetic, the best deal the coast has ever offered.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-headings",
      label: "Questions 1–6",
      instruction: "Choose the correct heading for paragraphs A–F from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
      extraOption: true,
      reuseNote: "There are more headings than paragraphs, so you will not use them all.",
      items: [
        {
          text: "Paragraph A",
          correct: 0,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 0, quote: "the lighthouse's first job was arithmetic, the simple accounting of how many ships and sailors a coast could afford to lose." }],
            explanation: "Paragraph A sets up the essay's lens: the postcard object is really a safety instrument, and its origin is economic accounting. Heading i names that unromantic opening frame.",
          },
        },
        {
          text: "Paragraph B",
          correct: 1,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "the tower at Alexandria, in Egypt, whose fire and bronze mirrors guided shipping into the harbour for centuries" }],
            explanation: "Paragraph B surveys the ancient world: Alexandria's wonder, bonfires, bells and monks' candles. Heading ii gathers fire, mirrors and wonder into one line.",
          },
        },
        {
          text: "Paragraph C",
          correct: 2,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "every wreck had accountants on both sides of it" }],
            explanation: "Paragraph C explains the money: trade, insurance, fees collected from passing ships, and the chartered corporation behind the lights. Heading iii ('Who paid for the lights') is the claim-level paraphrase of that economics.",
          },
        },
        {
          text: "Paragraph D",
          correct: 3,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "Engineers had learned, in effect, to build on the sea's own ground." }],
            explanation: "Paragraph D is Smeaton's granite revolution at the Eddystone reef — interlocked stone able to stand where ships had been lost. Heading iv takes the paragraph's own closing phrase about building on the sea's ground.",
          },
        },
        {
          text: "Paragraph E",
          correct: 4,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Fresnel's optics multiplied the visible range of a light several times over" }],
            explanation: "Paragraph E is the optics story: reflectors, then Fresnel's ring-ground lens multiplying the beam, then the rotating clockwork that gave each tower its flash signature. Heading v compresses the lens into one line.",
          },
        },
        {
          text: "Paragraph F",
          correct: 5,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "It was honest, essential and famously lonely work" }],
            explanation: "Paragraph F is the keepers' life and its end: watches, logs, rope landings, and finally automation closing the family stations. Heading vi names the watch system and the isolation in four words.",
          },
        },
      ],
      options: [
        "A machine priced in wrecks",
        "Fire and wonder in the ancient world",
        "Who paid for the lights",
        "Learning to build on the sea's own ground",
        "Glass that multiplied the flame",
        "A life of watches and isolation",
        "Sailing by satellite alone",
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 7–9",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "The lighthouse at Alexandria was regarded as one of the wonders of the ancient world.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "The ancients built one lighthouse so famous that we still list it among the wonders of the world" }],
            explanation: "Paragraph B names Alexandria's tower as the one so famous it is still listed among the world's wonders. The statement restates that standing directly.",
          },
        },
        {
          text: "Smeaton's Eddystone lighthouse was built of timber.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 3, quote: "Smeaton abandoned wood and built in granite" }],
            explanation: "Smeaton did the opposite of building in timber: he abandoned wood for granite with interlocking joints, precisely because earlier timber towers had burned. The statement contradicts the passage's central engineering point.",
            trap: { family: "mention-lure", note: "Timber appears throughout the paragraph — as the material Smeaton rejected." },
            whyWrong: ["TRUE: the paragraph says Smeaton 'abandoned wood' — timber is what his design replaced."],
          },
        },
        {
          text: "A sailor could identify an individual lighthouse by timing its flashes.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "a sailor with a chart could time the flashes and know exactly which tower he was looking at" }],
            explanation: "The flash-rhythm system existed exactly so sailors could identify towers: each lighthouse's pattern was its signature. The statement is the plain form of that design purpose.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "summary-completion",
      label: "Questions 10–12",
      instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Early British lighthouses of timber were regularly destroyed by 10" }, { kind: "blank", no: 10 }, { kind: "text", text: ". Smeaton's replacement on the Eddystone reef used granite blocks locking together with 11" }, { kind: "blank", no: 11 }, { kind: "text", text: " joints, and it became the template for later rock towers. In the era of the keepers, every lighthouse's pattern of flashes acted as its 12" }, { kind: "blank", no: 12 }, { kind: "text", text: ", telling sailors which tower they were seeing." }],
      ],
      blanks: [
        {
          no: 10,
          answer: "fire",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "The early towers were mostly timber, and the records show them burning with depressing regularity — the very fires that warned ships away were the buildings' own worst enemy." }],
            explanation: "The timber towers' enemy was fire — their own warning fires. The summary keeps 'timber' and 'destroyed by' and asks for the cause named at the end of paragraph C.",
          },
        },
        {
          no: 11,
          answer: "dovetail",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 3, quote: "shaping each block so that it locked into its neighbours with dovetail joints" }],
            explanation: "Smeaton's joint type is named in paragraph D: dovetail joints locking each granite block to its neighbours. The word is glossed in this item because it is joinery vocabulary the passage assumes.",
          },
        },
        {
          no: 12,
          answer: "signature",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 4, quote: "every lighthouse's flash pattern was its signature" }],
            explanation: "The optics paragraph closes with the identification system: every flash pattern was its tower's signature. The summary reuses 'pattern of flashes' and asks for the noun that completed the passage's sentence.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "headlands", partOfSpeech: "noun (plural)", definition: "narrow points of high land jutting into the sea; early bonfires burned on headlands." },
    { word: "chartered", partOfSpeech: "verb (past)", definition: "formally established by a royal or legal document; Trinity House was chartered in 1514." },
    { word: "reef", partOfSpeech: "noun", definition: "a line of rock just above or below the water; the Eddystone reef destroyed two earlier lighthouses." },
    { word: "granite", partOfSpeech: "noun", definition: "a very hard grey rock used for building; Smeaton's tower was granite throughout." },
    { word: "profile", partOfSpeech: "noun", definition: "the side outline of a shape; the tower's profile curved like an oak trunk to shed the sea's blow." },
    { word: "optics", partOfSpeech: "noun (plural)", definition: "the parts and science of lenses and light; Fresnel's optics multiplied the visible range." },
    { word: "automation", partOfSpeech: "noun", definition: "the use of machines instead of people to run a process; automation ended the keepers' era." },
  ],
  passageNote: "A history in seven scenes: purpose (A), antiquity (B), economics (C), engineering (D), optics (E), keepers (F), afterlife (G). The headings cover A–F; the summary stitches C, D and E together.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtDenim: ReadingExercise = {
  slug: "ielts-rb-gt-denim",
  title: "Denim: from workwear to world wardrobe",
  variant: "gt",
  section: 3,
  subject: "Longer general-interest passages",
  difficulty: 4,
  estimatedMinutes: 15,
  objective: "Read a material's biography: the fabric's origins in European ports, the patent that made it workwear, the chemistry behind its fading, and the environmental bill now coming due.",
  intro: "Read the passage below and answer Questions 1–12.",
  blocks: [
    {
      heading: "Denim: from workwear to world wardrobe",
      paragraphs: [
        "There are garments, and then there is the garment: a pair of blue jeans is probably the most widely worn single item of clothing on Earth, at home on building sites and cinema screens alike. It is easy to forget that this global uniform began as the cheapest possible clothing for men who could afford nothing else — and that its three-hundred-year journey from port warehouses to fashion weeks can be told through the history of one fabric.",
        "The names preserve the map. A hard-wearing cloth woven around the French town of Nîmes was sold as 'serge de Nîmes' — 'the serge from Nîmes' — and the last two words, run together by foreign buyers, became denim. Meanwhile the port city of Genoa dressed its sailors and dockworkers in loose, durable trousers that northern traders called 'genes' after the city; the English word jeans is that name, bent slightly. A fabric named in France for one city, and trousers named for another, met in America.",
        "The meeting mattered because of two California businessmen. In the 1870s, Levi Strauss, a dry-goods seller, was supplying canvas and cloth to a tailor named Jacob Davis, whose customers — miners, railroad men, teamsters — kept splitting their pockets. Davis's solution was borrowed from horse blankets: hammer copper rivets through the pocket corners so the cloth could not tear away from the strain. He lacked the money to patent the idea; Strauss provided it, and in 1873 the two men received a patent for riveted work trousers. The miner's pant became, in effect, the first branded piece of workwear.",
        "The cloth itself explains the two qualities that made the trousers famous: toughness and fading. Denim is a twill, woven so that the indigo-dyed warp threads pass over several white weft threads at a time, which packs the fabric tight and makes it wear like iron. But the dye never reaches the core of the cotton yarn — indigo sits on the surface — so every crease, scrape and wash removes a little of the blue coat and lets more of the white core shine through. The trousers record their own history on the body of the wearer, which no other garment of the nineteenth century did.",
        "That self-portrait quality turned workwear into myth in the twentieth century. Western films put denim on cowboys; then a generation of young actors wore it as the uniform of rebellion, and schools across the United States debated banning it. By the 1970s the last resistance had folded, and what had been a sign of manual labour became simply what everyone wore — the rarest kind of fashion success, in which the original meaning is completely overwritten.",
        "The industry that grew around this demand perfected the artificial memory of wear: pre-washing, bleaching and the famous stone-washing of the 1980s, in which pumice stones tumbled with the garments to imitate years of use in ninety minutes. European fashion houses then did the opposite, selling raw, unwashed denim to connoisseurs who would break it in for years. Between the two poles, the price of a pair of jeans has ranged from a few dollars to several hundred, on fabric that differs less than the marketing suggests.",
        "The bill the industry is only now totalling is environmental. Cotton is thirsty: growing the fibre for a single pair of jeans is estimated to require thousands of litres of water, most of it before the fabric is even woven. Dyeing and finishing add their own chemistry — rivers near denim mills ran blue for decades — and the sandblasting once used to distress denim damaged workers' lungs badly enough to be banned in several countries. Newer finishing methods using lasers and ozone promise the same look with a fraction of the water and none of the dust, and second-hand denim has quietly become the most recycled garment in the wardrobe. The fabric that dressed the gold rush is now racing to clean up after itself.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-features",
      label: "Questions 1–4",
      instruction: "Look at the following statements and the list of people and places below. Match each statement with the correct group. You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "Its hard-wearing cloth gave the fabric its name.",
          correct: 0,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "A hard-wearing cloth woven around the French town of Nîmes was sold as 'serge de Nîmes'" }],
            explanation: "The fabric's name comes from Nîmes: 'serge de Nîmes' shortened by foreign buyers into denim. Feature questions on a history passage are pure attribution — find whose name is attached to which fact.",
          },
        },
        {
          text: "Its sailors' loose trousers gave the garment its name.",
          correct: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "the port city of Genoa dressed its sailors and dockworkers in loose, durable trousers that northern traders called 'genes'" }],
            explanation: "The trousers take their name from Genoa, whose 'genes' trousers reached northern traders and eventually English as jeans. The two origin stories sit in the same paragraph, which is the point of the attribution test.",
          },
        },
        {
          text: "Patented the riveted pocket in 1873.",
          correct: 2,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "in 1873 the two men received a patent for riveted work trousers" }],
            explanation: "The patent for riveted work trousers went to Levi Strauss and Jacob Davis together in 1873 — the two Californian businessmen of paragraph C. The rivets themselves were Davis's idea; the money and the patent were the partnership.",
          },
        },
        {
          text: "Took denim from the street to the catwalk.",
          correct: 3,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "European fashion houses then did the opposite, selling raw, unwashed denim to connoisseurs" }],
            explanation: "Paragraph F credits the European fashion houses with lifting denim into high fashion — selling raw denim to connoisseurs at prices the workwear original never imagined. The statement paraphrases that elevation.",
          },
        },
      ],
      options: [
        "The French town of Nîmes",
        "The port of Genoa",
        "Two California businessmen",
        "European fashion houses",
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 5–8",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Denim was originally a luxury fabric.",
          answer: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 0, quote: "this global uniform began as the cheapest possible clothing for men who could afford nothing else" }],
            explanation: "The opening paragraph says the opposite of luxury: denim began as the cheapest possible clothing for men who could afford nothing else. The passage's whole arc is cheap workwear to global wardrobe.",
          },
        },
        {
          text: "Indigo dye penetrates to the core of the cotton yarn.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 3, quote: "the dye never reaches the core of the cotton yarn — indigo sits on the surface" }],
            explanation: "Paragraph D states the physics that explains denim's fading: the dye never reaches the core; indigo sits on the surface. The statement reverses that fact — surface-only colouring is exactly why the fabric fades.",
            trap: { family: "boundary", note: "Dye is discussed in detail — but the passage's detail contradicts the statement's claim." },
            whyWrong: ["TRUE: 'never reaches the core' is as explicit as a passage can be."],
          },
        },
        {
          text: "In the 1950s, some American schools considered banning jeans.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "schools across the United States debated banning it" }],
            explanation: "Paragraph E records the debate: after denim became the uniform of rebellion, schools across the United States debated banning it. 'Considered banning' paraphrases 'debated banning'.",
          },
        },
        {
          text: "Sandblasting denim has now been banned in every country.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 6, quote: "the sandblasting once used to distress denim damaged workers' lungs badly enough to be banned in several countries" }],
            explanation: "The passage says sandblasting was banned in several countries — not every country, and not nowhere. 'Every country' outruns the text in one direction; claiming no ban would outrun it in the other. Neither extreme is stated, so the answer is Not Given.",
            trap: { family: "extreme-language", note: "Several is the passage's word; 'every' converts a partial fact into a universal one." },
            whyWrong: ["FALSE: the passage does document bans — in several countries — so a denial would also contradict the text; only the universal version is unsupported."],
          },
        },
      ],
    },
    {
      id: "q3",
      type: "matching-sentence-endings",
      label: "Questions 9–12",
      instruction: "Complete each sentence with the correct ending, A–E, below. There are more endings than sentences, so you will not use them all.",
      extraOption: true,
      items: [
        {
          text: "The name of the fabric denim comes from the cloth woven in",
          correct: 0,
          meta: {
            skills: ["detail", "structure"],
            evidence: [{ block: 0, paragraph: 1, quote: "A hard-wearing cloth woven around the French town of Nîmes was sold as 'serge de Nîmes'" }],
            explanation: "The naming story anchors denim to Nîmes via 'serge de Nîmes'. Ending A supplies the town; the Genoa ending belongs to the garment's name, which the next sentence-beginning asks about.",
          },
        },
        {
          text: "The copper rivets patented in 1873 were designed to",
          correct: 1,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "hammer copper rivets through the pocket corners so the cloth could not tear away from the strain" }],
            explanation: "Davis's rivets solved one specific failure: pockets tearing away under load. Ending B names that function; the dye-fixing ending is the chemical lure from a later paragraph.",
          },
        },
        {
          text: "Because indigo colours only the surface of the yarn,",
          correct: 3,
          meta: {
            skills: ["inference", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "so every crease, scrape and wash removes a little of the blue coat and lets more of the white core shine through" }],
            explanation: "The consequence of surface dyeing is the fading: wear removes the blue coat and reveals the white core. Ending D completes the causal sentence exactly as paragraph D does.",
          },
        },
        {
          text: "The environmental cost of a single pair of jeans begins with",
          correct: 4,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 6, quote: "growing the fibre for a single pair of jeans is estimated to require thousands of litres of water" }],
            explanation: "Paragraph G itemises the bill, and its first entry is cotton's thirst — thousands of litres to grow the fibre for one pair. Ending E places the cost at the cotton field, where the passage places it.",
          },
        },
      ],
      options: [
        "the French town of Nîmes.",
        "stop pockets tearing away under strain.",
        "fix the dye permanently to the fibre.",
        "denim fades with wear instead of staying uniform.",
        "the water used to grow its cotton.",
      ],
    },
  ],
  glossary: [
    { word: "garment", partOfSpeech: "noun", definition: "an item of clothing; jeans are probably the most widely worn single garment on Earth." },
    { word: "warp", partOfSpeech: "noun", definition: "the lengthwise threads on a loom; in denim the warp threads are the indigo-dyed ones." },
    { word: "weft", partOfSpeech: "noun", definition: "the crosswise threads woven through the warp; denim's weft stays white." },
    { word: "rivet", partOfSpeech: "noun", definition: "a metal fastener hammered through cloth; corner rivets saved working men's pockets." },
    { word: "teamsters", partOfSpeech: "noun (plural)", definition: "drivers of goods wagons; among the customers who split their pockets." },
    { word: "pumice", partOfSpeech: "noun", definition: "light volcanic stone; stone-washing tumbled pumice with garments to fake years of wear." },
    { word: "distress", partOfSpeech: "verb", definition: "to deliberately age a garment's look; sandblasting was one distressing method, now widely banned." },
  ],
  passageNote: "A biography with four acts: names and origins (B), the patent (C), the physics of fading (D), and the modern bill (G). Attribution questions live in acts one and two; causal endings live in acts three and four.",
  source: READING_BANK_SOURCE_NOTE,
};
