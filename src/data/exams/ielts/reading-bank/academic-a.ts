/**
 * Academic passage library A (PROMPT 45, Parts B and D).
 *
 * Original passages in the ten taught subjects, each with a complete
 * question set, per-item evidence, explanations, why-wrong notes and a
 * vocabulary glossary. No specialist knowledge is assumed or required.
 *
 *   ielts-rb-ac-water  — Science,  Section 1, foundation (d2)
 *   ielts-rb-ac-barcode — Technology, Section 1, foundation (d2)
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acWater: ReadingExercise = {
  slug: "ielts-rb-ac-water",
  title: "The quiet strangeness of water",
  variant: "academic",
  section: 1,
  subject: "Science",
  difficulty: 2,
  estimatedMinutes: 12,
  objective: "Follow a cause-and-effect explanation: how hydrogen bonding makes ice float, keeps lakes liquid beneath the surface, and powers water's talents as a solvent.",
  intro: "Read the passage below and answer Questions 1–12.",
  blocks: [
    {
      heading: "The quiet strangeness of water",
      paragraphs: [
        "Pour a glass of water and you are looking at one of the strangest substances on Earth. It covers most of the planet, makes up most of your body, and behaves, in a dozen small ways, unlike almost any other liquid chemists have measured. Most of these oddities go unnoticed precisely because water is so familiar, yet each one is a quiet accident of physics without which the world would be unrecognisable.",
        "Take the way water freezes. Nearly every liquid shrinks when it solidifies, its molecules settling into a tighter arrangement; frozen water does the opposite. As it cools towards freezing, water expands, and ice ends up around nine per cent less dense than the liquid it came from. The result is the most ordinary miracle in nature: ice floats. Had water behaved conventionally, ice would sink, and ponds, lakes and oceans would freeze from the bottom up, killing almost everything in them each winter.",
        "The explanation lies in the molecule's shape. A water molecule is a bent structure with a slight negative charge at its oxygen end and slight positive charges at its hydrogen ends, so each molecule weakly grips its neighbours — scientists call these grips hydrogen bonds. Below four degrees Celsius the bonds begin forcing molecules into an open, roomy lattice with more space in it than the liquid had. The lattice is the crystal we call ice, and its airy architecture is what makes it light.",
        "That same bonding produces a second, subtler quirk: water is at its densest not at freezing point but at four degrees Celsius. As a lake cools in autumn, its surface water sinks once it passes that peak, dragging oxygen down with it and mixing the lake. By the time winter arrives, the coldest water — the water about to freeze — is already floating on top, so the lake freezes from the surface downwards while the depths stay liquid.",
        "Life has arranged itself around these accidents. Fish and aquatic insects winter in the stable four-degree layer beneath the ice; amphibians bury themselves in the mud of the same protected zone. If ice sank, year by year the world's deeper waters would fill with permanent ice, and the family trees of fish, insects and waterfowl would look very different.",
        "Water's talents do not end with freezing. It is sometimes called a universal solvent, an exaggeration with a kernel of truth: its charged molecules pull other charged particles apart so effectively that seawater carries dissolved traces of nearly every element. This is why blood, sap and tears are all salty — life runs its chemistry inside water, and water's restlessness as a solvent is what makes that chemistry possible at all.",
        "The oddities are not rare exceptions; they are the rules water plays by. Higher boiling point, higher surface tension, higher heat capacity than its molecular weight suggests — each one keeps planets habitable, cells intact and climates stable. Chemists can list the ways; what they cannot do is find another ordinary liquid that misbehaves so usefully.",
        "So the glass on the table is a small catalogue of exceptions: a liquid that expands when it should contract, that is densest before it freezes, that floats its own solid and dissolves its world. Familiarity hides the strangeness, but the strangeness is load-bearing. We live, quite literally, in the one substance's good graces.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "true-false-not-given",
      label: "Questions 1–5",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Water is the only liquid that expands when it freezes.",
          answer: "NOT GIVEN",
          lure: "TRUE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Nearly every liquid shrinks when it solidifies, its molecules settling into a tighter arrangement; frozen water does the opposite." }],
            explanation: "The passage says nearly every liquid shrinks and water does not, but it never claims water is unique in expanding. Other substances (silicon, gallium, some glasses) also expand, yet the passage is silent about them — silence means Not Given.",
            trap: { family: "boundary", note: "Feeling that water must be unique is outside knowledge; Not Given asks only what the text says." },
            whyWrong: ["TRUE: the passage compares water with 'nearly every liquid', not with all liquids — it does not state uniqueness.", "FALSE: nothing in the text contradicts the statement either; the text simply does not say."],
          },
        },
        {
          text: "Ice floats because hydrogen bonds force water molecules into an open structure.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "Below four degrees Celsius the bonds begin forcing molecules into an open, roomy lattice" }],
            explanation: "Paragraph C states directly that below four degrees the hydrogen bonds force molecules into an open lattice, and that this airy architecture makes ice light — which restates the statement's cause and effect.",
          },
        },
        {
          text: "Water is at its densest at the moment it freezes.",
          answer: "FALSE",
          lure: "NOT GIVEN",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 3, quote: "water is at its densest not at freezing point but at four degrees Celsius" }],
            explanation: "Paragraph D gives the exact contrary fact: the density peak arrives at four degrees Celsius, not at freezing point. A precise contradiction makes the statement FALSE, not Not Given.",
            trap: { family: "boundary", note: "Candidates who cannot locate the exact sentence drift to Not Given; a located contradiction is always FALSE." },
            whyWrong: ["NOT GIVEN: the passage does state the density maximum — at four degrees Celsius — so the information exists and contradicts the statement."],
          },
        },
        {
          text: "In winter, the water at the bottom of a lake remains liquid.",
          answer: "TRUE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "the lake freezes from the surface downwards while the depths stay liquid" }],
            explanation: "Paragraph D closes with exactly this consequence of the four-degree maximum: surface freezing first, liquid depths below. Combining that line with the winter scene in paragraph E makes the statement TRUE.",
          },
        },
        {
          text: "The writer considers the phrase universal solvent to be an exaggeration.",
          answer: "TRUE",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "It is sometimes called a universal solvent, an exaggeration with a kernel of truth" }],
            explanation: "The writer's own wording labels the term an exaggeration with a kernel of truth. Where the writer explicitly evaluates a phrase, that evaluation is the writer's opinion — the statement simply reports it.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "sentence-completion",
      label: "Questions 6–9",
      instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
      wordLimit: 2,
      layout: [
        [{ kind: "text", text: "6. Ice is lighter than the water it came from, which is why ice" }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "7. Below four degrees Celsius, hydrogen bonds begin pushing water molecules into an open, roomy" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "8. As a lake cools in autumn, sinking surface water carries" }, { kind: "blank", no: 8 }, { kind: "text", text: "down with it." }],
        [{ kind: "text", text: "9. Water's power as a solvent comes from its charged" }, { kind: "blank", no: 9 }, { kind: "text", text: "pulling other charged particles apart." }],
      ],
      blanks: [
        {
          no: 6,
          answer: "floats",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "The result is the most ordinary miracle in nature: ice floats." }],
            explanation: "Paragraph B states the consequence directly: ice floats. The sentence restates the density comparison, so the missing verb is the one the passage attaches to that comparison.",
          },
        },
        {
          no: 7,
          answer: "lattice",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 2, quote: "the bonds begin forcing molecules into an open, roomy lattice with more space in it than the liquid had" }],
            explanation: "The structure's name appears in paragraph C: an open, roomy lattice. The glossary also carries lattice, because the sentence is unanswerable without knowing the noun the passage uses.",
          },
        },
        {
          no: 8,
          answer: "oxygen",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "its surface water sinks once it passes that peak, dragging oxygen down with it and mixing the lake" }],
            explanation: "Paragraph D says the sinking autumn water drags oxygen down with it. The sentence keeps the verb carries, so the missing noun is the thing carried — oxygen.",
          },
        },
        {
          no: 9,
          answer: "molecules",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "its charged molecules pull other charged particles apart" }],
            explanation: "Paragraph F credits water's solvent behaviour to its charged molecules pulling other charged particles apart. The sentence lifts that phrase almost whole, so the answer is molecules.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "multiple-choice",
      label: "Questions 10–12",
      instruction: "Choose the correct letter, A, B, C or D.",
      items: [
        {
          stem: "What is the main purpose of paragraph B?",
          options: [
            "To explain why ice floats and why that difference matters for life",
            "To describe the process by which lakes freeze each winter",
            "To compare the density of ice with that of whisky",
            "To question a long-held scientific assumption about freezing",
          ],
          correct: 0,
          lure: 1,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 1, quote: "Had water behaved conventionally, ice would sink, and ponds, lakes and oceans would freeze from the bottom up, killing almost everything in them each winter." }],
            explanation: "Paragraph B first states the anomaly (water expands, ice floats) and then shows what would have happened without it — freezing from the bottom up that would kill aquatic life. The paragraph pairs the fact with its life-or-death significance.",
            trap: { family: "mention-lure", note: "Lakes freezing appears inside the hypothetical, not as the paragraph's main job." },
            whyWrong: ["B: the freezing of lakes is the hypothetical consequence used in the final sentences, not the paragraph's organising purpose.", "C: the passage mentions no whisky or any other comparison liquid in this paragraph.", "D: the paragraph reports the scientific fact; it challenges no assumption."],
          },
        },
        {
          stem: "According to the passage, hydrogen bonds form because",
          options: [
            "a water molecule is bent and carries partial charges at each end",
            "water freezes from the surface downwards",
            "oxygen atoms are heavier than hydrogen atoms",
            "ice has an airy architecture",
          ],
          correct: 0,
          lure: 3,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "A water molecule is a bent structure with a slight negative charge at its oxygen end and slight positive charges at its hydrogen ends, so each molecule weakly grips its neighbours" }],
            explanation: "Paragraph C names the cause before the effect: the molecule's bent shape and its partial charges make each molecule grip its neighbours. The airy architecture of ice is the result of those bonds, not the reason they form.",
            trap: { family: "mention-lure", note: "The lure option quotes the passage, but as an outcome of bonding, not its cause." },
            whyWrong: ["B: surface freezing happens far later in the causal chain and is unrelated to why bonds form.", "C: atomic weights are never mentioned in the passage.", "D: airy architecture describes the lattice the bonds create — an effect, not the cause."],
          },
        },
        {
          stem: "In the final paragraph, the writer suggests that water's strangeness is",
          options: [
            "a trivial curiosity for chemists",
            "hidden by how ordinary water seems",
            "easy to observe in daily life",
            "something science has now explained away",
          ],
          correct: 1,
          lure: 2,
          meta: {
            skills: ["opinion", "inference"],
            evidence: [{ block: 0, paragraph: 7, quote: "Familiarity hides the strangeness, but the strangeness is load-bearing." }],
            explanation: "The closing paragraph argues that familiarity hides the strangeness while the strangeness is load-bearing — unusual behaviour the living world depends on. The writer's point is precisely that the oddities go unnoticed because water is everywhere.",
            whyWrong: ["A: the writer calls the strangeness load-bearing, the opposite of trivial.", "C: the writer's claim is that familiarity conceals it, not that it is easy to notice.", "D: chemists can list the ways, the writer says, but the passage never claims the substance is fully explained."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "hydrogen bonds", partOfSpeech: "noun", definition: "the weak attractions between a slightly positive hydrogen end of one molecule and a slightly negative end of another; they give water most of its odd behaviour." },
    { word: "lattice", partOfSpeech: "noun", definition: "a regular, repeating three-dimensional arrangement of atoms or molecules; ice is an open lattice with extra space in it." },
    { word: "densest", partOfSpeech: "adjective (superlative)", definition: "having the greatest mass in a given volume; water is at its densest at four degrees Celsius, not at freezing." },
    { word: "aquatic", partOfSpeech: "adjective", definition: "living or growing in water; aquatic insects spend the winter in the four-degree layer under the ice." },
    { word: "solvent", partOfSpeech: "noun", definition: "a liquid that dissolves other substances; water is called a near-universal one because its charged molecules pull charged particles apart." },
    { word: "surface tension", partOfSpeech: "noun", definition: "the elastic-like film effect on a liquid's surface caused by its molecules pulling together; water's is unusually high." },
    { word: "habitable", partOfSpeech: "adjective", definition: "able to be lived in or on; water's heat capacity is one of the properties that keep planets habitable." },
  ],
  passageNote: "Track the causal spine: molecular shape → hydrogen bonds → open lattice → floating ice and the four-degree maximum → winter life → solvent talents. Every question hangs off one link of that chain.",
  source: READING_BANK_SOURCE_NOTE,
};

export const acBarcode: ReadingExercise = {
  slug: "ielts-rb-ac-barcode",
  title: "The quiet revolution of the barcode",
  variant: "academic",
  section: 1,
  subject: "Technology",
  difficulty: 2,
  estimatedMinutes: 14,
  objective: "Follow a narrative of invention: a problem, an overheard request, an idea borrowed from Morse code, a decades-long wait for technology, and a standards battle that settled the symbol we scan today.",
  intro: "Read the passage below and answer Questions 1–14.",
  blocks: [
    {
      heading: "The quiet revolution of the barcode",
      paragraphs: [
        "For most of the twentieth century the supermarket checkout was a bottleneck looking for a breakthrough. Cashiers keyed every price by hand, reading digits off stamped tags or memorised sheets; queues lengthened as assortments grew, and stores knew they were losing money to slow lanes. By the late 1960s the grocery trade had concluded that the answer had to be automatic: products would have to carry their own identification, printed on the package, readable by a machine at speed.",
        "The founding story begins with an overheard remark. In 1948 a shop owner asked the dean of a business school whether students might research a way to capture product information automatically — and a graduate student named Bernard Silver, standing nearby, heard the request. He passed it to a friend, N. Joseph Woodland, then a twenty-seven-year-old instructor. Silver and Woodland believed the problem was worth their evenings, and Woodland went so far as to leave his teaching post to work on it full time.",
        "Woodland's insight came from an unlikely teacher: Morse code. He had learned dots and dashes as a Boy Scout, and one evening, drawing dots in the sand at a beach, he extended them downward into lines of varying thickness. Information, he realised, could be printed as a pattern of thin and fat bars. The first patent, filed with Silver in 1949 and granted in 1952, drew the code as a bull's-eye — a target of concentric circles that a light beam could read from any angle.",
        "The idea, however, was ahead of its instruments. Reading a label required a cheap, fast, reliable source of directed light, and in 1949 no such thing existed. It took the invention of the laser in 1960 and its steady cheapening through the following decade to make scanning practical. A helium-neon beam reflected off the white spaces of a printed symbol, and a sensor converted the returning flickers into a digital pattern a computer could match.",
        "The final step was agreement. In the early 1970s a committee of grocery executives ran a competition between rival symbol systems, pitting the bull's-eye against a striped design. The stripes won: circles wasted ink, printed badly on curved surfaces, and were harder to enlarge. In April 1973 the industry adopted the striped standard and named it the Universal Product Code. Woodland, by then working for IBM, had the satisfaction of watching his beach-drawn idea, straightened out, conquer the trade that had asked for it.",
        "Diffusion followed with a speed that surprised even its sponsors. Railway carriages carried bar-coded labels on their flanks; libraries printed them on book spines; hospitals wrapped them around patients' wrists; airlines pressed them onto boarding passes. Behind the checkout, the code quietly rebuilt retail itself, because every scan fed a database: inventory counts updated themselves, reorder points triggered automatically, and managers learned within hours, not weeks, what was actually selling.",
        "The barcode's most successful descendant carried the philosophy further. In 1994 a Japanese components maker, Denso Wave, published the quick-response code — a square matrix that holds hundreds of times more information than a stripe pattern and can be read from a phone screen. Yet the ancestor's principles were unchanged: hide data in plain sight, make it almost free to print, and let machines do the reading. The striped rectangle remains among the most widely reproduced images in the history of design.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-headings",
      label: "Questions 1–7",
      instruction: "Choose the correct heading for paragraphs A–G from the list of headings below. Write the correct number, i–viii, next to each paragraph.",
      extraOption: true,
      reuseNote: "There are more headings than paragraphs, so you will not use them all.",
      items: [
        {
          text: "Paragraph A",
          correct: 0,
          lure: 7,
          meta: {
            skills: ["skimming", "paraphrase", "structure"],
            evidence: [{ block: 0, paragraph: 0, quote: "the grocery trade had concluded that the answer had to be automatic" }],
            explanation: "Paragraph A is organised around an industry reaching a decision: queues, hand-keyed prices and lost money push the grocery trade to demand automatic identification. Heading i ('An industry decides to mechanise') paraphrases that decision as a claim, without echoing its words.",
            trap: { family: "mention-lure", note: "The extra heading about printing costs borrows the paragraph's word 'printed' — vocabulary overlap, not the paragraph's job." },
            whyWrong: ["viii: 'printed' appears in the paragraph's final sentence, but printing technology is never discussed — the paragraph is about the industry's decision."],
          },
        },
        {
          text: "Paragraph B",
          correct: 1,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 1, quote: "The founding story begins with an overheard remark." }],
            explanation: "Paragraph B tells how the request reached the inventors: overheard by chance, passed to a friend, embraced to the point of a resignation. Heading ii ('A request that fell on receptive ears') captures exactly that structure of request plus willing recipients.",
          },
        },
        {
          text: "Paragraph C",
          correct: 2,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "Woodland's insight came from an unlikely teacher: Morse code." }],
            explanation: "Paragraph C is built around the transfer of an old signalling system into a new medium — dots stretched into bars. Heading iii ('Learning from dots and dashes') names that source without quoting the paragraph's later vocabulary.",
          },
        },
        {
          text: "Paragraph D",
          correct: 3,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "The idea, however, was ahead of its instruments." }],
            explanation: "Paragraph D explains the delay between idea and product: no suitable light source existed until the laser arrived in 1960 and grew affordable. Heading iv ('Waiting for the light') compresses both the missing instrument and the wait.",
          },
        },
        {
          text: "Paragraph E",
          correct: 4,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 4, quote: "a committee of grocery executives ran a competition between rival symbol systems, pitting the bull's-eye against a striped design" }],
            explanation: "Paragraph E stages a contest with a result: two rival symbols compete, one standard wins in April 1973. Heading v ('Two patterns enter, one leaves') paraphrases the competition structure rather than quoting 'striped' or 'bull's-eye'.",
          },
        },
        {
          text: "Paragraph F",
          correct: 5,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "the code quietly rebuilt retail itself, because every scan fed a database" }],
            explanation: "Paragraph F follows the code out of the supermarket and shows the deeper effect: scans feeding databases that rebuilt retail management. Heading vi ('The label rebuilds the store') captures the consequence, not the list of adopters.",
          },
        },
        {
          text: "Paragraph G",
          correct: 6,
          meta: {
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 6, quote: "The barcode's most successful descendant carried the philosophy further." }],
            explanation: "Paragraph G turns to the successor: the 1994 quick-response matrix, larger in capacity, faithful in principle. Heading vii ('The square successor') names the descendant and its shape.",
          },
        },
      ],
      options: [
        "An industry decides to mechanise",
        "A request that fell on receptive ears",
        "Learning from dots and dashes",
        "Waiting for the light",
        "Two patterns enter, one leaves",
        "The label rebuilds the store",
        "The square successor",
        "Printing costs come down",
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 8–11",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Silver heard about the shop owner's request by accident.",
          answer: "TRUE",
          meta: {
            skills: ["paraphrase", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "a graduate student named Bernard Silver, standing nearby, heard the request" }],
            explanation: "Paragraph B introduces the episode as an overheard remark: Silver was standing nearby when the dean was asked. 'By accident' paraphrases 'overheard' and 'standing nearby' — the statement is TRUE.",
          },
        },
        {
          text: "The patent granted in 1952 described the striped symbol used in supermarkets today.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 2, quote: "drew the code as a bull's-eye — a target of concentric circles" }],
            explanation: "The 1952 patent drew a bull's-eye of concentric circles; the striped design only won the 1973 competition described later. The statement attributes today's stripes to the patent, which contradicts the passage.",
            trap: { family: "boundary", note: "The two symbols are close in the narrative; candidates who skim attach the familiar stripes to the patent date." },
            whyWrong: ["TRUE: both symbols appear in the passage, but the patent paragraph explicitly says circles, and paragraph E dates the stripes to the 1973 decision."],
          },
        },
        {
          text: "Woodland tested his code successfully in a working supermarket before 1953.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference"],
            evidence: [{ block: 0, paragraph: 2, quote: "The first patent, filed with Silver in 1949 and granted in 1952" }],
            explanation: "The passage reports the patent and the beach sketch, but never mentions any supermarket trial in any year. The absence of a trial report makes the claim untested by the text — Not Given, even though it feels unlikely.",
            trap: { family: "boundary", note: "'It sounds implausible, therefore FALSE' is outside reasoning; only a located contradiction earns FALSE." },
            whyWrong: ["FALSE: nothing in the passage says a test failed or never happened — the text is simply silent."],
          },
        },
        {
          text: "The quick-response code can carry more information than a striped barcode.",
          answer: "TRUE",
          meta: {
            skills: ["detail"],
            evidence: [{ block: 0, paragraph: 6, quote: "a square matrix that holds hundreds of times more information than a stripe pattern" }],
            explanation: "Paragraph G states the capacity difference in one clause: the square matrix holds hundreds of times more information than a stripe pattern. The statement is a direct paraphrase.",
          },
        },
      ],
    },
    {
      id: "q3",
      type: "summary-completion",
      label: "Questions 12–14",
      instruction: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Woodland developed his code by adapting a signalling system he had learned as a child: he stretched 12" }, { kind: "blank", no: 12 }, { kind: "text", text: "downwards into lines of varying thickness. His patent drew the code as a bull's-eye so that a beam of 13" }, { kind: "blank", no: 13 }, { kind: "text", text: "could read it from any angle. Practical scanning waited decades until the 14" }, { kind: "blank", no: 14 }, { kind: "text", text: "became affordable." }],
      ],
      blanks: [
        {
          no: 12,
          answer: "dots",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "drawing dots in the sand at a beach, he extended them downward into lines of varying thickness" }],
            explanation: "The summary reuses the passage's own image of dots extended downward into lines, so the missing word is dots — the element of Morse code that became the bars.",
          },
        },
        {
          no: 13,
          answer: "light",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "a target of concentric circles that a light beam could read from any angle" }],
            explanation: "The patent paragraph says a light beam could read the bull's-eye from any angle; the summary's 'beam of ___' takes the noun light straight from that clause.",
          },
        },
        {
          no: 14,
          answer: "laser",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "It took the invention of the laser in 1960 and its steady cheapening through the following decade to make scanning practical" }],
            explanation: "Paragraph D names the instrument whose cheapening made scanning practical: the laser. The summary's final gap asks for exactly that noun.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "bottleneck", partOfSpeech: "noun", definition: "a point where a process slows down because everything must pass through it; the hand-keyed checkout was one." },
    { word: "assortments", partOfSpeech: "noun (plural)", definition: "the ranges of products a store stocks; growing assortments made hand-keyed pricing slower and slower." },
    { word: "concentric", partOfSpeech: "adjective", definition: "sharing the same centre, as circles drawn one inside another; the first barcode was a bull's-eye of concentric circles." },
    { word: "diffusion", partOfSpeech: "noun", definition: "the spreading of an invention through society and into new uses; the barcode's diffusion ran from railways to hospitals." },
    { word: "flanks", partOfSpeech: "noun (plural)", definition: "the sides of something; early railway carriage labels were carried on their flanks." },
    { word: "matrix", partOfSpeech: "noun", definition: "a grid-like arrangement of elements; the quick-response code is a square matrix of small squares." },
  ],
  passageNote: "A timeline passage: 1948 the request, 1949–52 the patent, 1960 the laser, 1973 the standard, 1994 the descendant. Date questions and order questions live on this spine.",
  source: READING_BANK_SOURCE_NOTE,
};
