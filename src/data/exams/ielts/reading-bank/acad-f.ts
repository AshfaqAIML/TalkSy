/**
 * Academic passage library F — PROMPT 54 question-bank expansion
 * (Academic batch F).
 *
 * Eight original Academic Reading passages authored for the unified
 * question bank: every exercise sets its topic domain explicitly,
 * carries a complete question set with verbatim evidence quotes,
 * teaching explanations, designed traps and a vocabulary glossary.
 * All prose is fresh and original — nothing is adapted from official
 * IELTS papers, coursebooks or any other source.
 *
 *   ielts-rb-ac-soundscapes     — bioacoustics,          science,     section 1, d3
 *   ielts-rb-ac-pencil          — history of technology, history,     section 2, d3
 *   ielts-rb-ac-citizen-science — ecology,               science,     section 1, d2
 *   ielts-rb-ac-microplastics   — public health,         health,      section 3, d4
 *   ielts-rb-ac-street-markets  — economics,             economics,   section 2, d3
 *   ielts-rb-ac-synaesthesia    — psychology,            science,     section 3, d5
 *   ielts-rb-ac-audiobooks      — publishing,            culture,     section 1, d2
 *   ielts-rb-ac-urban-heat      — urban climate,         environment, section 3, d4
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const acadFExercises: ReadingExercise[] = [
  {
    slug: "ielts-rb-ac-soundscapes",
    title: "The sound of wild places",
    variant: "academic",
    section: 1,
    subject: "bioacoustics",
    topic: "science",
    difficulty: 3,
    estimatedMinutes: 16,
    objective:
      "Follow how a listening technology scales from one recorder to fifty, and how whole soundscapes — not just individual species — are read as measures of habitat health.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "The sound of wild places",
        paragraphs: [
          "Stand still in an old forest at first light and the birds announce the place long before your eyes confirm anything. Ecologists used to treat that chorus as atmosphere, a pleasant backdrop to the serious business of counting animals. A growing field now treats it as data. Bioacoustics — the study of sound made by living things — is turning the world's wild soundtracks into one of its largest biological archives, and it is quietly changing how conservationists measure the health of habitats.",
          "The discipline grew out of patient fieldwork. Mid-century naturalists lugged reel-to-reel tape recorders through rainforest and tundra, and a few of them noticed that a single overnight recording could capture more activity than a week of walking survey routes. The equipment, however, was heavy, expensive and fragile. What transformed the field was the arrival of cheap autonomous recorders — palm-sized machines that can be strapped to a tree, left for months and programmed to sample the soundscape on a schedule. A research group that once monitored one site can now run fifty, and the recordings pile up in terabytes.",
          "Sound reaches where eyes cannot. Cryptic species — those that hide, mimic or simply never show themselves — announce their presence on tape long before any surveyor glimpses them. Nocturnal mammals, canopy insects and whales in murky water all leave an acoustic signature, and many can be identified from a few seconds of call. For rare or wary animals, a recorder that never sleeps is often the only practical witness. Where visual surveys depend on daylight, luck and sharp eyes, listening continues through darkness, rain and fog, gathering evidence that a person on foot would walk straight past.",
          "A second generation of research asks a different question: not which species are calling, but what the whole chorus sounds like. Ecoacoustics treats the soundscape itself — the combined output of birds, insects, amphibians, wind and water — as a property of an ecosystem. Software condenses hours of audio into summary measures called acoustic indices, which score a recording's complexity, loudness and texture. Studies suggest that these numbers differ consistently between healthy and degraded habitats: a stripped plantation or an overgrazed hillside tends to produce a thinner, more repetitive soundtrack than an intact forest. The indices cannot name a single species, but they can flag a stressed one.",
          "That makes sound a practical tool for restoration. Conservation projects are increasingly judged on outcomes, and outcomes are slow: saplings take decades to become habitat. Recordings offer an early signal. Comparing plots of different ages, researchers have found that the soundscapes of replanted sites grow steadily richer as structure returns — understorey birds first, then the insects and amphibians that follow leaf litter. A monitoring protocol built on microphones costs a fraction of repeated expert surveys, which matters for small charities managing former mines and logged slopes with almost no budget at all.",
          "Underwater, the method is older and the stakes are higher. Hydrophones lowered from boats and buoys have tracked whale song across whole ocean basins since the mid-twentieth century, revealing migration routes that no survey ship could follow. The same instruments now record something less welcome: the engine noise of global shipping, which rolls across the sea in a low-frequency rumble and masks the calls whales use to find food and each other. When shipping lanes fell quiet during recent global disruptions, biologists reported whales calling more freely — an unplanned experiment that strengthened the case for calmer waters.",
          "The obstacles ahead are human ones. Terabytes of audio far exceed any team's capacity to listen, so the field is racing to train automatic classifiers that can sift recordings and label the calls within them; the software is improving but remains imperfect, especially for insects and bats. Some ecologists also warn that a fondness for elegant numbers can crowd out natural history — that listening, in the old sense, still teaches things the indices cannot. The best projects, they argue, pair the machines with patient ears, treating every soundscape as both a dataset and a place.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction:
          "Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "structure", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "A research group that once monitored one site can now run fifty" }],
              explanation:
                "Paragraph B pivots on the arrival of cheap autonomous recorders: equipment that was heavy, expensive and fragile gives way to palm-sized machines, and one group can suddenly run fifty sites. Heading ii ('Cheap ears change the economics of fieldwork') names that shift from cost to scale without quoting it.",
            },
          },
          {
            text: "Paragraph C",
            correct: 0,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Cryptic species — those that hide, mimic or simply never show themselves — announce their presence on tape long before any surveyor glimpses them" }],
              explanation:
                "Paragraph C is organised around a single contrast: sound detects what sight misses, from cryptic species to nocturnal mammals to whales in murky water. Heading i ('Hearing what hides from the eye') compresses that idea into hearing versus hiding, which is exactly how the paragraph frames its examples.",
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            lure: 2,
            meta: {
              skills: ["skimming", "paraphrase", "detail"],
              evidence: [
                { block: 0, paragraph: 3, quote: "Software condenses hours of audio into summary measures called acoustic indices" },
                { block: 0, paragraph: 3, quote: "The indices cannot name a single species, but they can flag a stressed one." },
              ],
              explanation:
                "Paragraph D introduces ecoacoustics and the acoustic indices that score a whole recording rather than any singer in it, and its closing line states that the indices cannot name a single species. Heading iv ('Scoring the chorus without naming the singers') captures that division of labour.",
              trap: {
                family: "mention-lure",
                note: "The unused heading iii ('Why the dawn chorus exists') borrows the paragraph's word 'chorus' — but the paragraph measures choruses, it never explains them.",
              },
              whyWrong: [
                "iii: the word 'chorus' appears throughout the paragraph, but D measures soundscapes rather than explaining why any dawn chorus happens.",
              ],
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "the soundscapes of replanted sites grow steadily richer as structure returns" }],
              explanation:
                "Paragraph E applies the method to restoration: recordings deliver an early verdict on recovering sites whose trees will take decades to mature. Heading v ('An early verdict on young forests') restates the paragraph's point about speed of feedback, which is its organising idea.",
            },
          },
          {
            text: "Paragraph F",
            correct: 5,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 5, quote: "the engine noise of global shipping, which rolls across the sea in a low-frequency rumble and masks the calls whales use to find food and each other" }],
              explanation:
                "Paragraph F carries two sounds — whale song traced across whole ocean basins, and the shipping rumble that masks it — and the heading holds both halves together. Heading vi ('Song against a sea of engine noise') is that contrast in plain words.",
            },
          },
          {
            text: "Paragraph G",
            correct: 6,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "the field is racing to train automatic classifiers that can sift recordings and label the calls within them" }],
              explanation:
                "Paragraph G sets the coming problem — more audio than any team can hear — against the mixed solution of automatic classifiers plus patient human ears. Heading vii ('Machines, ears and the data deluge') names both sides of that pairing inside the flood that created them.",
            },
          },
        ],
        options: [
          "Hearing what hides from the eye",
          "Cheap ears change the economics of fieldwork",
          "Why the dawn chorus exists",
          "Scoring the chorus without naming the singers",
          "An early verdict on young forests",
          "Song against a sea of engine noise",
          "Machines, ears and the data deluge",
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
            text: "Autonomous recorders allow a single research group to monitor far more sites than before.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "A research group that once monitored one site can now run fifty" }],
              explanation:
                "Paragraph B states the change in one clause: a research group that once monitored one site can now run fifty. The statement's 'far more sites' is a careful paraphrase of that comparison, so it agrees with the passage.",
            },
          },
          {
            text: "Acoustic indices can identify every species present in a recording.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "The indices cannot name a single species, but they can flag a stressed one." }],
              explanation:
                "Paragraph D closes with the exact opposite: the indices cannot name a single species, only flag a stressed one. Because the passage states what the indices cannot do, the claim contradicts the text rather than going beyond it, which makes the statement FALSE.",
              trap: {
                family: "extreme-language",
                note: "'Every species' overreaches: the passage's indices summarise and flag whole soundscapes, they never identify individual species.",
              },
              whyWrong: [
                "TRUE: the passage says the opposite in so many words — the indices cannot name a single species.",
                "NOT GIVEN: the passage does discuss what the indices can and cannot do, so the information exists and it contradicts the claim.",
              ],
            },
          },
          {
            text: "Recordings from replanted sites become richer as habitat structure returns.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "scanning"],
              evidence: [{ block: 0, paragraph: 4, quote: "the soundscapes of replanted sites grow steadily richer as structure returns" }],
              explanation:
                "Paragraph E reports precisely this pattern: the soundscapes of replanted sites grow steadily richer as structure returns, with understorey birds arriving first and other groups following. The statement restates the finding almost in the passage's own words.",
            },
          },
          {
            text: "Acoustic monitoring is cheaper than camera trapping.",
            answer: "NOT GIVEN",
            lure: "TRUE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "What transformed the field was the arrival of cheap autonomous recorders" }],
              explanation:
                "Paragraph B does call the new recorders cheap, but the passage never mentions camera traps or any visual monitoring technology to compare with. A comparison the text never makes stays Not Given, however likely it feels from general knowledge.",
              trap: {
                family: "boundary",
                note: "'Cheap' appears in the passage, which tempts candidates towards TRUE — but the comparison with camera traps is never actually made.",
              },
              whyWrong: [
                "TRUE: cheapness is asserted about recorders, yet no other monitoring method is mentioned, let alone compared with them.",
                "FALSE: nothing contradicts the statement either; the passage is simply silent about camera traps.",
              ],
            },
          },
          {
            text: "The writer expects automatic classifiers to replace human listeners entirely.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [
                { block: 0, paragraph: 6, quote: "the software is improving but remains imperfect" },
                { block: 0, paragraph: 6, quote: "pair the machines with patient ears" },
              ],
              explanation:
                "Paragraph G argues for the opposite of replacement: the classifiers remain imperfect, and the best projects pair the machines with patient ears. The word 'entirely' pushes a partnership into a takeover, and the passage contradicts that reading directly.",
              trap: {
                family: "extreme-language",
                note: "'Entirely' is the trap word — the passage's own conclusion is pairing machines with ears, not replacing the ears.",
              },
              whyWrong: [
                "NOT GIVEN: the passage does state its position on the future role of listeners, so the claim is contradicted rather than unaddressed.",
                "TRUE: the writer explicitly recommends pairing machines with ears rather than dispensing with people.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "bioacoustics", partOfSpeech: "noun", definition: "the study of sounds produced by living organisms; the field that turned wild sound into scientific data." },
      { word: "soundscape", partOfSpeech: "noun", definition: "the combined acoustic character of a place, made by animals, wind and water together; treated as a property of an ecosystem." },
      { word: "autonomous", partOfSpeech: "adjective", definition: "able to operate on its own for long periods without a person present; describes palm-sized recorders left in the field for months." },
      { word: "cryptic", partOfSpeech: "adjective", definition: "hard to detect because of hiding, camouflage or resemblance; cryptic species reveal themselves on tape long before they are seen." },
      { word: "indices", partOfSpeech: "noun (plural)", definition: "summary numbers computed from data; acoustic indices score a recording's complexity, loudness and texture." },
      { word: "hydrophones", partOfSpeech: "noun (plural)", definition: "underwater microphones; lowered from boats and buoys to record whale song and the noise of shipping." },
    ],
    passageNote:
      "The structure widens like a lens: field method (B–C), whole-ecosystem measurement (D–E), the oceans (F), the field's limits (G). Paragraph A only sets the scene and is deliberately left out of the headings task.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-pencil",
    title: "The pencil: a materials history",
    variant: "academic",
    section: 2,
    subject: "history of technology",
    topic: "history",
    difficulty: 3,
    estimatedMinutes: 17,
    objective:
      "Follow a materials story — one mineral, one wood, one wartime recipe — and see how scarcity, monopoly and standardisation shaped a finished everyday object.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "The pencil: a materials history",
        paragraphs: [
          "Every technology has a shape its users stop noticing, and the modern pencil is a textbook case: a hexagonal cedar shaft, a grey core that marks without spilling ink, a brass ferrule holding a soft rubber at one end. Each of those features was invented, argued over and standardised. The pencil's history is not really a history of writing; it is a history of materials — one soft mineral, one particular wood and one piece of wartime chemistry, combined into the everyday object in your desk drawer.",
          "The story begins in the Lake District of northern England. Around the start of the sixteenth century, locals near Borrowdale came across a remarkably pure deposit of graphite — then simply called black lead. The mineral left a dark, greasy mark, and shepherds found it handy for labelling sheep. London merchants soon discovered a more profitable application: moulds for casting cannonballs were lined with the mineral, because graphite survives molten metal. The seam was so pure that it could be sawn into strips and used directly, with no binder at all, and so valuable that the mine was guarded during the working season and flooded afterwards, to frustrate thieves.",
          "Raw sticks, however, are fragile and filthy. At some point in the second half of the sixteenth century — the credit usually goes to an Italian couple who hollowed out a stick of juniper wood to hold a simple lead — somebody solved the problem by casing graphite in wood. The craft that grew up around the idea involved cutting a groove along a stick, laying the graphite inside and gluing a second grooved strip on top: the same sandwich used in factories today. Because England held the only known supply of the pure mineral, Borrowdale graphite commanded high prices across Europe, and the pencil remained a luxury for two centuries.",
          "Monopoly invites a workaround, and war accelerated it. When Britain and France were at war in the 1790s, French makers could no longer obtain good graphite. A scientist working for the French army, Nicolas-Jacques Conté, responded by grinding the available low-grade mineral to a powder, mixing it with clay and water, and firing the paste in a kiln. The result was a hard, workable core whose hardness could be tuned simply by changing the ratio of the two ingredients. That recipe, refined but essentially unchanged, is why a stationer can sell you a 9H stick that scratches or a 9B one that almost smears; the letters H and B still describe the hardness of the core.",
          "Mass production turned the sandwich into an industry. The favoured wood is incense cedar — straight-grained, fragrant and soft enough to sharpen without splintering — historically sourced from forests on the American west coast. Slabs are dried, cut into slats, grooved, filled and glued; the leads themselves are a baked blend of graphite and clay, waxed so they run smoothly across paper. A single modern line can produce more pencils in an afternoon than an eighteenth-century workshop made in a year, and the finished sticks are painted, stamped and capped in a series of quick machine passes.",
          "Two refinements completed the familiar object. Making the shaft hexagonal stopped it rolling off a slanted school desk, and in 1858 an American inventor patented the idea of setting a rubber eraser into the end cap. Then there is the tale every office knows: that NASA spent a fortune developing a pen that would write in space while Soviet cosmonauts simply carried pencils. The story is apocryphal — both space programmes used pencils first, and the pen in question was developed privately — yet it survives because it flatters the pencil's real reputation: it works everywhere, needs no charging and survives being sat on.",
          "That reputation explains a quiet paradox. Sales of wooden pencils declined only gently through decades of screens and styluses, and in many markets they have since stabilised; the world still buys them by the billion every year. Mature technologies rarely vanish — they become cheap, standardised and invisible. The pencil reached that state more than a century ago, and the materials history behind it — a Cumbrian seam, a wartime recipe, a soft Californian wood — is printed on nothing the pencil produces, yet present in every line it draws.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "summary-completion",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [
            { kind: "text", text: "Early pencils depended on a single English source: a pure " },
            { kind: "blank", no: 1 },
            { kind: "text", text: " of graphite found near Borrowdale, which could be sawn into strips and used with no binder. Because the mineral was so precious, the mine was " },
            { kind: "blank", no: 2 },
            { kind: "text", text: " after the working season. The first cased pencils were made by cutting a " },
            { kind: "blank", no: 3 },
            { kind: "text", text: " in a wooden stick and gluing a second strip over it. When war cut off supplies, Conté ground the mineral to a powder and mixed it with " },
            { kind: "blank", no: 4 },
            { kind: "text", text: " before firing the paste. The proportions of the mixture set the " },
            { kind: "blank", no: 5 },
            { kind: "text", text: " of the core. The wood still favoured by makers is " },
            { kind: "blank", no: 6 },
            { kind: "text", text: " , chosen because it sharpens cleanly." },
          ],
        ],
        blanks: [
          {
            no: 1,
            answer: "deposit",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "locals near Borrowdale came across a remarkably pure deposit of graphite" }],
              explanation:
                "Paragraph B introduces the Borrowdale find as a remarkably pure deposit of graphite, so the missing noun after 'a pure' is deposit — the passage's own word for the geological occurrence.",
            },
          },
          {
            no: 2,
            answer: "flooded",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "the mine was guarded during the working season and flooded afterwards" }],
              explanation:
                "The same paragraph explains how the seam was protected: the mine was guarded during the working season and flooded afterwards to frustrate thieves. The gap after 'was' takes the second of those two measures.",
            },
          },
          {
            no: 3,
            answer: "groove",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "cutting a groove along a stick, laying the graphite inside and gluing a second grooved strip on top" }],
              explanation:
                "Paragraph C describes the craft step by step: cutting a groove along a stick, laying the graphite inside and gluing a second grooved strip over it. The missing noun names the cut that receives the lead.",
            },
          },
          {
            no: 4,
            answer: "clay",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "mixing it with clay and water, and firing the paste in a kiln" }],
              explanation:
                "Paragraph D gives Conté's recipe in sequence: grind the mineral to a powder, mix it with clay and water, and fire the paste in a kiln. The summary keeps that order and asks for the second ingredient.",
            },
          },
          {
            no: 5,
            answer: "hardness",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "whose hardness could be tuned simply by changing the ratio of the two ingredients" }],
              explanation:
                "Paragraph D explains that the ratio of the two ingredients tunes the core's hardness, which is what the letters H and B still describe today. The gap after 'set the' takes that same noun.",
            },
          },
          {
            no: 6,
            answer: "cedar",
            alternatives: ["incense cedar"],
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "The favoured wood is incense cedar" }],
              explanation:
                "Paragraph E names the favoured wood: incense cedar, straight-grained and soft enough to sharpen without splintering. Either 'cedar' or 'incense cedar' is accepted, because both appear in the passage and fit the two-word limit.",
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
            stem: "What first made Borrowdale graphite commercially important?",
            options: [
              "It could be sawn into strips without any binder",
              "It lined the moulds used for casting cannonballs",
              "It was used by shepherds for labelling sheep",
              "It could be melted down and cast into new shapes",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "moulds for casting cannonballs were lined with the mineral, because graphite survives molten metal" }],
              explanation:
                "Paragraph B contrasts the shepherds' handy local uses with the London merchants' more profitable application, which was lining cannonball moulds. Commercial importance attaches to the merchants' discovery, not to the mineral's convenience or its other early uses.",
              trap: {
                family: "mention-lure",
                note: "Option A is true of the mineral, but the paragraph frames sawn strips as a convenience rather than as the commercial turning point.",
              },
              whyWrong: [
                "A: being sawn without a binder is true of the seam, yet the paragraph presents it as convenience, not as the source of commercial importance.",
                "C: labelling sheep was the first local use, which the passage describes as handy rather than profitable.",
                "D: the passage never says graphite was melted — on the contrary, it survives molten metal.",
              ],
            },
          },
          {
            stem: "Conté's process was significant because it",
            options: [
              "ended the English monopoly by discovering new graphite deposits",
              "let makers adjust a pencil's hardness by changing the recipe",
              "replaced cedar wood with a cheaper imported timber",
              "made pencils so cheap that schools could afford them",
            ],
            correct: 1,
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "a hard, workable core whose hardness could be tuned simply by changing the ratio of the two ingredients" }],
              explanation:
                "The paragraph names the lasting significance of the clay-and-graphite recipe: hardness becomes a dial rather than an accident of geology. That tunability, not cost or timber, is what the passage marks out as the achievement.",
              whyWrong: [
                "A: Conté worked around the shortage by changing the recipe, not by finding new deposits.",
                "C: the passage says nothing about replacing cedar in this paragraph.",
                "D: affordability is never claimed; the paragraph's emphasis is adjustable hardness.",
              ],
            },
          },
          {
            stem: "Why does the writer tell the space-pen story in paragraph F?",
            options: [
              "To show that pencils are the only tool that works in space",
              "To show how myths gather around a technology people respect",
              "To criticise NASA for wasting public money on a pen",
              "To explain why cosmonauts refused to use American pens",
            ],
            correct: 1,
            lure: 2,
            meta: {
              skills: ["opinion", "inference", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "yet it survives because it flatters the pencil's real reputation" }],
              explanation:
                "The writer labels the tale apocryphal and then explains its survival: it flatters the pencil's genuine reputation for working everywhere. The story is offered as evidence about storytelling, not as an account of space hardware or spending.",
              trap: {
                family: "attribution",
                note: "The criticism of NASA belongs to the popular tale, not to the writer, who dismisses the whole story as apocryphal.",
              },
              whyWrong: [
                "A: the passage credits the pencil with reliability, never with unique capability in space.",
                "C: the writer reports that criticism as part of a false story rather than endorsing it.",
                "D: no such refusal appears anywhere in the paragraph.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "ferrule", partOfSpeech: "noun", definition: "the small metal band that clamps an eraser onto a pencil; an 1858 patent set it into the end cap." },
      { word: "seam", partOfSpeech: "noun", definition: "a narrow layer of a mineral running between other rocks; the Borrowdale seam was guarded and the mine flooded to protect it." },
      { word: "juniper", partOfSpeech: "noun", definition: "a shrubby evergreen tree; its wood was hollowed out for the first known cased pencil." },
      { word: "kiln", partOfSpeech: "noun", definition: "an oven for baking ceramics or minerals at high temperature; Conté fired his graphite-and-clay paste in one." },
      { word: "hexagonal", partOfSpeech: "adjective", definition: "six-sided; the shaft shape that stops a pencil rolling off a slanted desk." },
      { word: "apocryphal", partOfSpeech: "adjective", definition: "widely told but probably untrue; the label the writer attaches to the space-pen story." },
    ],
    passageNote:
      "The passage runs on a timeline — the Borrowdale find, the first cased sticks, the 1790s recipe, the 1858 ferrule, today's stable market. The summary walks the first half of that spine; the multiple-choice items ask you to weigh why each stage mattered.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-citizen-science",
    title: "Counting birds: citizen science",
    variant: "academic",
    section: 1,
    subject: "ecology",
    topic: "science",
    difficulty: 2,
    estimatedMinutes: 15,
    objective:
      "See how mass volunteer observation becomes scientific evidence: standard rules, layered checking, and long-running trends that feed conservation policy.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Counting birds: citizen science",
        paragraphs: [
          "On one weekend each January, hundreds of thousands of Britons give an hour to watching their gardens. They note the largest number of each bird species visible at any one moment, write the figures on a card or a web form, and send the results to a conservation charity. The Big Garden Birdwatch began in 1979 as a children's magazine feature; it is now among the largest wildlife surveys on Earth, and it runs almost entirely on enthusiasm.",
          "Its older American cousin started life as a protest. In the late nineteenth century, a festive custom known as the side hunt sent teams into the woods over Christmas to shoot whatever moved; the winning side was the one with the biggest pile. The ornithologist Frank Chapman proposed a different contest: identify and count the birds instead of killing them. On Christmas Day 1900, twenty-seven volunteers across North America did exactly that. The Christmas Bird Count they founded has run in every winter since, growing into tens of thousands of participants spread across set survey circles, each of whose totals is logged, compiled and published.",
          "Ornithologists value these mass counts for a hard-headed reason: scale. Rare and threatened species receive professional monitoring, but common birds — the sparrows, starlings and finches of gardens and farmland — are too widespread for any paid survey to cover. Volunteers fill the gap, and their combined effort has produced some of the longest continuous datasets in ecology. From the Christmas counts, researchers have traced wintering ranges drifting northwards as winters warm; from garden counts, long slow declines in once-familiar species such as house sparrows and starlings surfaced decades earlier than they otherwise would have.",
          "The counts survive on trust, but the trust is engineered. Every participant follows the same protocol — a fixed period, a defined patch, a simple rule about simultaneous sightings — and each year's figures are compared only with years collected the same way. Garden Birdwatchers record for one hour, from one viewpoint, with no special equipment and no travel. The design sacrifices sophistication for consistency, and consistency is what makes forty years of results comparable. Statisticians can then treat the sudden arrival of a rare warbler as an anomaly to be checked rather than a discovery, because the rules for what counts as a sighting have never changed.",
          "Verification is layered rather than automatic. Anyone may submit a record, but unusual claims are routed to regional reviewers — experienced volunteers who know their local birds and can ask for a description, a photograph or a second observer. Most disagreements are settled politely; a small number of records are quietly set aside. Global platforms such as eBird apply the same principle at scale, with software flagging species reported out of range or at implausible times. The result, researchers say, is data quality that surprises sceptics: analysts have repeatedly compared volunteer submissions with professional surveys and found broad agreement in the trends.",
          "What do the numbers achieve? Long-term trends feed official conservation lists, which in turn help decide which species are protected and which habitats receive funding. Count data strengthened the case for protecting estuaries that host internationally important wintering populations of waterfowl, and records of shifting arrival dates have fed studies of how a warmer spring reshapes migration. None of this requires the volunteers to hold degrees; it requires them to look carefully, follow the rules and be honest about what they did not see.",
          "Mass participation still has limits. Coverage is thickest where people live, so remote uplands and the open sea remain under-recorded, and detectability — the simple fact that shy birds are harder to count than bold ones — must be modelled rather than ignored. Even so, the balance sheet is striking. A pastime pursued in cardigans and kitchens now underpins national biodiversity indicators, and the charity behind the winter garden count commands more volunteer hours than most research institutes could ever pay for.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "sentence-completion",
        label: "Questions 1–5",
        instruction: "Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        wordLimit: 3,
        layout: [
          [{ kind: "text", text: "1. The Big Garden Birdwatch invites participants to spend an hour watching their " }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "2. The Christmas Bird Count replaced a custom in which the winning team was the one with the biggest " }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "3. Volunteers taking part in the Christmas count record birds within fixed survey " }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. Records of unusual species are passed to " }, { kind: "blank", no: 4 }, { kind: "text", text: " for checking." }],
          [{ kind: "text", text: "5. Count data helped support the protection of " }, { kind: "blank", no: 5 }, { kind: "text", text: " used by internationally important winter birds." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "gardens",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "hundreds of thousands of Britons give an hour to watching their gardens" }],
              explanation:
                "Paragraph A sets the task in its first sentences: participants give an hour to watching their gardens and note the largest number of each species visible at once. The missing noun is simply the place being watched.",
            },
          },
          {
            no: 2,
            answer: "pile",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "the winning side was the one with the biggest pile" }],
              explanation:
                "Paragraph B describes the side hunt: teams shot whatever moved over Christmas, and the winning side was the one with the biggest pile. The statement keeps the idea of a winning team and asks for the grim measure of victory.",
            },
          },
          {
            no: 3,
            answer: "circles",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "tens of thousands of participants spread across set survey circles" }],
              explanation:
                "Paragraph B notes that the Christmas count grew into tens of thousands of participants spread across set survey circles whose totals are compiled and published. The missing noun names those fixed areas, and it appears in the same sentence as 'participants'.",
            },
          },
          {
            no: 4,
            answer: "regional reviewers",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "unusual claims are routed to regional reviewers" }],
              explanation:
                "Paragraph E explains the checking layer: unusual claims are routed to regional reviewers who can ask for descriptions, photographs or a second observer. The two-word answer names the people who do the checking.",
            },
          },
          {
            no: 5,
            answer: "estuaries",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "Count data strengthened the case for protecting estuaries that host internationally important wintering populations of waterfowl" }],
              explanation:
                "Paragraph F credits count data with strengthening the case for protecting estuaries that host internationally important wintering populations of waterfowl. The summary lifts that clause almost whole, so the missing noun is estuaries.",
            },
          },
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
            text: "The Big Garden Birdwatch was first associated with a children's publication.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "began in 1979 as a children's magazine feature" }],
              explanation:
                "Paragraph A dates the survey's origin to 1979 and calls it a children's magazine feature. 'First associated with a children's publication' paraphrases that origin closely, so the statement agrees with the passage.",
            },
          },
          {
            text: "Results from the garden count are shared with the Audubon Christmas Bird Count.",
            answer: "NOT GIVEN",
            lure: "TRUE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "The Christmas Bird Count they founded has run in every winter since" }],
              explanation:
                "Both surveys appear in the passage, but the text never says the two schemes exchange or combine their data. Familiarity with both names is not information; the statement stays Not Given because the connection is never drawn.",
              trap: {
                family: "mention-lure",
                note: "Both counts are described in the same area of the passage, so the sharing claim feels confirmed — but no link between the surveys is ever made.",
              },
              whyWrong: [
                "TRUE: the passage describes each survey separately and never mentions any data passing between the two.",
                "FALSE: nothing contradicts sharing either; the text is simply silent about the relationship.",
              ],
            },
          },
          {
            text: "Declines in house sparrows and starlings showed up in garden count data.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "scanning"],
              evidence: [{ block: 0, paragraph: 2, quote: "long slow declines in once-familiar species such as house sparrows and starlings surfaced decades earlier" }],
              explanation:
                "Paragraph C states that garden counts revealed long slow declines in once-familiar species such as house sparrows and starlings, decades earlier than they would otherwise have surfaced. The statement reports exactly that finding.",
            },
          },
          {
            text: "Only people with formal scientific training may join the garden count.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "None of this requires the volunteers to hold degrees" }],
              explanation:
                "Paragraph F states the opposite in one line: none of it requires volunteers to hold degrees, only careful looking, rule-following and honesty. The word 'only' builds an entry barrier the passage explicitly removes, so the statement is FALSE.",
              trap: {
                family: "extreme-language",
                note: "'Only' is the trap word: the passage celebrates precisely the absence of entry requirements for volunteers.",
              },
              whyWrong: [
                "NOT GIVEN: the passage does state who can take part and what they need, so the barrier is contradicted rather than merely unmentioned.",
              ],
            },
          },
          {
            text: "Participants must record the birds visiting their garden across an entire day.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "Garden Birdwatchers record for one hour, from one viewpoint, with no special equipment and no travel" }],
              explanation:
                "Paragraph D fixes the observation period at one hour from one viewpoint, which directly contradicts a whole-day requirement. A located and precise contradiction makes this FALSE rather than Not Given.",
              whyWrong: [
                "NOT GIVEN: the duration is stated explicitly — one hour — so the passage does address the claim and contradicts it.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "ornithologist", partOfSpeech: "noun", definition: "a scientist who studies birds; Frank Chapman proposed counting them instead of shooting them." },
      { word: "protocol", partOfSpeech: "noun", definition: "the fixed set of rules a survey follows so that results can be compared; one hour, one viewpoint, one counting rule." },
      { word: "anomaly", partOfSpeech: "noun", definition: "a result that deviates from what is expected and needs checking; the sudden appearance of a rare warbler is treated as one." },
      { word: "waterfowl", partOfSpeech: "noun", definition: "water birds such as ducks, geese and swans; estuaries can host internationally important wintering populations of them." },
      { word: "detectability", partOfSpeech: "noun", definition: "how likely a species is to be noticed during a survey; shy birds score lower than bold ones and must be modelled." },
      { word: "biodiversity", partOfSpeech: "noun", definition: "the variety of life in a place; volunteer counts now underpin official national indicators of it." },
    ],
    passageNote:
      "The argument builds in two movements — how the counts grew (A–B) and why the data can be trusted (C–E) — then what they achieve and where they fall short (F–G). Completion answers sit in the first half; the verdict items pull from the whole passage.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-microplastics",
    title: "Microplastics in the water we drink",
    variant: "academic",
    section: 3,
    subject: "public health",
    topic: "health",
    difficulty: 4,
    estimatedMinutes: 19,
    objective:
      "Weigh an emerging risk: how microplastics are defined, measured and reported — and why the writer keeps insisting on method before conclusion.",
    intro: "Read the passage below and answer Questions 1–12.",
    blocks: [
      {
        heading: "Microplastics in the water we drink",
        paragraphs: [
          "Pour a glass of water and you pour a question mark. In recent years, researchers examining bottled and tap samples have reported finding plastic particles too small to see — fragments, films and fibres shed by the manufactured world. Public alarm has grown faster than the science that feeds it. Microplastics are now among the most studied contaminants in drinking water and among the least understood, a combination that makes careful reading of every new headline essential.",
          "Definitions differ at the edges, but researchers generally count as microplastic any plastic particle below five millimetres across, and many are far smaller. The sources are stubbornly ordinary. Synthetic clothing sheds fibres in every wash; vehicle tyres grind against road surfaces into a fine dust; discarded packaging fragments in sunlight; and nurdles — the lentil-sized pellets from which plastic goods are moulded — spill from freight by the billion. Treatment plants intercept much of what arrives, yet the smallest particles pass through the finest filters, and rain delivers yet more from the air.",
          "Does the bottle on the desk carry more than the tap? Several widely reported surveys found bottled samples carried more particles than municipal supplies, with one analysis estimating hundreds of thousands of fragments per litre once the tiniest were included. Other laboratories, using different instruments, found little difference between the two, and a few found more in tap water than in bottles. The disagreement is genuine, and it points to the field's central weakness: without shared methods, no comparison is honest. Studies differ in the size ranges they count, in the materials of their equipment, and in how rigorously they guard against contaminating their own samples.",
          "Measuring the invisible demands serious instruments. A common approach filters a sample, then analyses the trapped particles with spectroscopy — light-based techniques that identify a particle's polymer from the way it scatters radiation. The work is slow and costly, which is why sample sizes stay small and results carry wide uncertainties. Below roughly one micrometre, particles usually receive a separate label, nanoplastics, and they are harder still: some slip through filter membranes, and animal studies suggest a few can cross into tissues that larger fragments never reach.",
          "What happens inside people is the sharpest question of all. Particles have been detected in human lungs, in blood and, in one widely discussed report, in the placenta. Such findings are striking, but they establish presence rather than harm. Animal studies show inflammation and other effects at high doses, yet those concentrations sit far above typical human exposure. Dietary assessments estimate that people ingest and inhale particles every day, mostly from food and air rather than water; how much is excreted, and how much lingers, remains unsettled.",
          "Official bodies have tried to steady the conversation. A World Health Organization review of drinking water concluded that particles had been detected in both bottled and tap supplies, but that the evidence then available gave no convincing indication of a health risk at the levels measured — while stressing that the conclusion reflected thin data rather than proven safety, and calling for better measurement and treatment research. Regulators have since begun drafting standard methods, so that the next decade of studies can at least be compared with one another.",
          "None of this settles whether microplastics are dangerous; it settles who is asking, and how. The practical counsel from researchers is sober: do not panic, do not litter, and read each headline study for its methods before its conclusions. The most useful response to a contaminant this small, several groups argue, is a larger, slower one — agreed protocols, open data and long-term monitoring, the unglamorous machinery that turns alarm into knowledge.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "yes-no-not-given",
        label: "Questions 1–5",
        instruction:
          "Do the following statements agree with the views of the writer in the passage? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.",
        statements: [
          {
            text: "Comparisons between individual studies are unreliable while research methods remain unstandardised.",
            answer: "YES",
            meta: {
              skills: ["paraphrase", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "without shared methods, no comparison is honest" }],
              explanation:
                "The writer states the point in the strongest possible terms in paragraph C: without shared methods, no comparison is honest. The statement's 'unreliable while methods remain unstandardised' is a direct restatement of that view, so it earns YES.",
            },
          },
          {
            text: "Bottled water has been shown to contain more microplastics than tap water everywhere both have been tested.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 2, quote: "Other laboratories, using different instruments, found little difference between the two" }],
              explanation:
                "The writer reports surveys on both sides: several found more particles in bottles, others little difference or the reverse. 'Everywhere' claims a settled verdict that the passage explicitly withholds, so the writer's view contradicts the statement.",
              trap: {
                family: "extreme-language",
                note: "'Everywhere' turns conflicting findings into a universal rule — the passage reports disagreement, not consensus.",
              },
              whyWrong: [
                "YES: the writer reports conflicting results rather than a consistent one, so full agreement is impossible.",
                "NOT GIVEN: the evidence exists and it contradicts a universal claim, which rules out Not Given here.",
              ],
            },
          },
          {
            text: "Plastic particles have been detected in human tissue.",
            answer: "YES",
            meta: {
              skills: ["detail", "scanning"],
              evidence: [{ block: 0, paragraph: 4, quote: "Particles have been detected in human lungs, in blood and, in one widely discussed report, in the placenta" }],
              explanation:
                "Paragraph E reports detection in lungs, blood and the placenta, so the statement agrees with the writer's account of the evidence. Note that the writer separates presence from harm, and this item tests only the first half of that distinction.",
            },
          },
          {
            text: "The WHO review demonstrated that microplastics in drinking water are harmless.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "gave no convincing indication of a health risk at the levels measured" }],
              explanation:
                "The review found no convincing indication of risk on thin data, and the writer is careful to separate absence of evidence from proof of safety. 'Demonstrated ... harmless' upgrades a hedge into a guarantee, which the writer's framing contradicts.",
              trap: {
                family: "paraphrase-gap",
                note: "The statement borrows the review's conclusion but drops the clause that made it modest — thin data, not proven safety.",
              },
              whyWrong: [
                "YES: the review explicitly refused to read absence of evidence as proof of safety.",
                "NOT GIVEN: the writer reports the review's position in detail, so a view is present and contradicted, not missing.",
              ],
            },
          },
          {
            text: "Nanoplastics are more harmful to people than larger microplastics.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "animal studies suggest a few can cross into tissues that larger fragments never reach" }],
              explanation:
                "The passage says nanoplastics may reach tissues that larger fragments cannot — a claim about access, not about damage. No comparison of harm is offered in either direction, so the writer's view on this statement cannot be established.",
              trap: {
                family: "boundary",
                note: "Reaching further sounds worse, but reach and harm are different claims; the gap between them is exactly where Not Given lives.",
              },
              whyWrong: [
                "NO: the passage never denies harm; it reports where particles can go, so nothing contradicts the statement.",
                "YES: no study in the passage compares the damage done by the two size classes.",
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
            { kind: "text", text: "Microplastic is generally defined as any plastic particle below five " },
            { kind: "blank", no: 6 },
            { kind: "text", text: " . Among the main sources are synthetic clothing, worn vehicle " },
            { kind: "blank", no: 7 },
            { kind: "text", text: " and the pellets known as nurdles. Laboratories identify each particle's composition using " },
            { kind: "blank", no: 8 },
            { kind: "text", text: " . Particles smaller than about one micrometre are labelled " },
            { kind: "blank", no: 9 },
            { kind: "text", text: " . Bodies such as the WHO have pressed for standard " },
            { kind: "blank", no: 10 },
            { kind: "text", text: " so that results can be compared." },
          ],
        ],
        blanks: [
          {
            no: 6,
            answer: "millimetres",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "any plastic particle below five millimetres across" }],
              explanation:
                "Paragraph B defines the category: any plastic particle below five millimetres across counts as microplastic. The summary's 'below five ___' takes the unit of measurement straight from that sentence.",
            },
          },
          {
            no: 7,
            answer: "tyres",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "vehicle tyres grind against road surfaces into a fine dust" }],
              explanation:
                "Paragraph B lists the stubbornly ordinary sources, including vehicle tyres grinding against road surfaces into fine dust. The summary's 'worn vehicle ___' needs the noun from that list of sources.",
            },
          },
          {
            no: 8,
            answer: "spectroscopy",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "analyses the trapped particles with spectroscopy" }],
              explanation:
                "Paragraph D describes the standard workflow: filter a sample, then analyse the trapped particles with spectroscopy to identify each particle's polymer. The missing noun names the light-based technique itself.",
            },
          },
          {
            no: 9,
            answer: "nanoplastics",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "Below roughly one micrometre, particles usually receive a separate label, nanoplastics" }],
              explanation:
                "Paragraph D explains that below roughly one micrometre particles usually receive a separate label, nanoplastics. The summary keeps the one-micrometre boundary and asks for that separate label.",
            },
          },
          {
            no: 10,
            answer: "methods",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Regulators have since begun drafting standard methods" }],
              explanation:
                "Paragraph F records the institutional response: regulators began drafting standard methods so that the next decade of studies can be compared. The gap after 'standard' takes that same noun from the sentence.",
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
            stem: "What does the writer conclude from the conflicting bottled-versus-tap surveys?",
            options: [
              "The bottled-water industry funded most of the research",
              "The disagreement mostly reflects differences in how the studies were run",
              "Tap water has been shown to be the safer choice",
              "Laboratories deliberately exaggerated their findings",
            ],
            correct: 1,
            lure: 2,
            meta: {
              skills: ["inference", "opinion"],
              evidence: [{ block: 0, paragraph: 2, quote: "Studies differ in the size ranges they count, in the materials of their equipment, and in how rigorously they guard against contaminating their own samples" }],
              explanation:
                "The writer turns the disagreement into a lesson about method: differing size ranges, equipment and contamination controls explain the spread of results. That diagnosis, not a verdict on which water is safer, is the paragraph's landing point.",
              trap: {
                family: "extreme-language",
                note: "Option C converts conflicting results into a settled safety ranking — precisely the certainty the writer refuses to award.",
              },
              whyWrong: [
                "A: no funding source is mentioned anywhere in the passage.",
                "C: the writer reports results on both sides and draws no safety ranking from them.",
                "D: no motive is suggested; the writer blames methods, not dishonesty.",
              ],
            },
          },
          {
            stem: "In the final paragraph, the writer argues that the best response to microplastics is",
            options: [
              "an immediate ban on plastic packaging",
              "a rapid switch to home filtration",
              "patient, coordinated measurement over the long term",
              "further animal research at high doses",
            ],
            correct: 2,
            lure: 0,
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "agreed protocols, open data and long-term monitoring" }],
              explanation:
                "The closing paragraph names its own answer: agreed protocols, open data and long-term monitoring. The writer's 'larger, slower' response is the opposite of a ban or a gadget, and that contrast is the point of the sentence.",
              trap: {
                family: "mention-lure",
                note: "'Packaging' appears in the passage as a particle source, tempting candidates to pick the ban — but the writer's conclusion is methodological, not legislative.",
              },
              whyWrong: [
                "A: packaging appears as a source of particles, yet the writer proposes no ban anywhere.",
                "B: home filtration is never mentioned in the passage.",
                "D: animal studies appear in paragraph E as context, not as the writer's recommended priority.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "contaminant", partOfSpeech: "noun", definition: "a substance present where it should not be; microplastics are among the most studied in drinking water." },
      { word: "nurdles", partOfSpeech: "noun (plural)", definition: "lentil-sized plastic pellets used as raw material for moulded goods; spilt from freight by the billion." },
      { word: "spectroscopy", partOfSpeech: "noun", definition: "techniques that identify a substance from how it interacts with light; used to name each particle's polymer." },
      { word: "polymer", partOfSpeech: "noun", definition: "the long-chain molecule a plastic is made of; identified from the way it scatters radiation." },
      { word: "nanoplastics", partOfSpeech: "noun (plural)", definition: "plastic particles below roughly one micrometre, small enough to pass filters and perhaps reach tissue." },
      { word: "ingest", partOfSpeech: "verb", definition: "to take into the body by swallowing or breathing in; people ingest particles daily, mostly from food and air." },
    ],
    passageNote:
      "Hold the writer's two hedges apart: detected is not dangerous, and no indication of risk is not proof of safety. The Yes/No/Not Given set lives on precisely that line; the summary walks paragraphs B, D and F for the technical vocabulary.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-street-markets",
    title: "The stubborn life of street markets",
    variant: "academic",
    section: 2,
    subject: "economics",
    topic: "economics",
    difficulty: 3,
    estimatedMinutes: 17,
    objective:
      "Untangle why street markets outlive the economics that should have replaced them: cheap failure, fast pricing, social glue — and the policies that keep them standing.",
    intro: "Read the passage below and answer Questions 1–9.",
    blocks: [
      {
        heading: "The stubborn life of street markets",
        paragraphs: [
          "Economists have a soft spot for a puzzle, and the survival of the street market is a good one. By the logic of the supermarket and the distribution centre, the weekly market — canvas stalls, cash boxes, crates of produce unloaded before dawn — should have followed the corner shop into memory. Instead, markets persist on every continent, and in many cities they are visibly growing again. Something in their economics refuses to go away.",
          "Part of the answer is that markets are the cheapest laboratory in retail. A stall rents by the day; there is no lease, no shop fit-out and no long-term loan. A first-time trader can test recipes, audition suppliers and learn which customers pay for quality, losing little if the idea fails. Sociologists studying migrant and low-income entrepreneurs describe markets as incubators: businesses hatch there, then graduate to permanent premises. The failure rate is high, but the cost of failing is low, and that asymmetry is exactly what formal retail cannot offer.",
          "Markets are also fast. A supermarket chain resets its prices through head office on a weekly cycle; a trader reprices a crate of overripe plums the moment footfall slows. Economists point out that fresh food is a perishable, information-hungry business — quality varies by the day, the season and the grower — and that face-to-face selling handles that variation more gracefully than a barcode. The trader who chats with two hundred customers a week is running a continuous survey: requests, complaints and hesitations arrive free of charge, and stock is ordered accordingly, without a spreadsheet.",
          "There is a quieter service, too. Markets are among the last city spaces where unplanned encounters are routine — bargaining, gossip, the standing argument about tomatoes. For older shoppers and people on tight budgets they combine cheap produce with company; for newcomers they offer a first rung of belonging. Studies of urban life rarely count these encounters, yet regulars describe the weekly round in the language of ritual. A market's customers, one planner observed, are buying the stallholders as much as the vegetables.",
          "Cities have noticed, and the notice cuts both ways. A celebrated food market can anchor a whole district's tourism, as Borough Market has for London's Bankside: traders gain crowds, rents rise, and the character that drew the crowds begins to thin. Elsewhere, municipal authorities have upgraded sheds, widened aisles and imposed hygiene standards so demanding that traditional vendors cannot afford the refrigeration the new licence requires. Renewal, in several well-documented cases, arrived wearing the uniform of a food court.",
          "The policy counter-attack is just as visible. Barcelona classifies its network of neighbourhood markets as protected public facilities, with capped rents and public renovation funds; Medellín rebuilt its declining plazas de mercado as part of wider social programmes. In other cities, mobile vending has been legalised in zones where fixed shops were struggling anyway. The economic case is straightforward: for the price of a modest subsidy, a city keeps a low-margin food distribution system whose overheads are counted in folding tables rather than warehouses.",
          "None of this makes markets immune — online shopping eats into non-food sales, and delivery apps now promise the produce without the plaza. But the stubbornness has a shape. Markets survive where they do something a warehouse cannot: absorb small traders cheaply, price fresh food honestly, and stage a little public life on the way. Cities that grasp all three tend to keep their markets; cities that see only sheds tend to lose them twice — first to decline, then to renovation.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction:
          "The passage has seven paragraphs, A–G. Which paragraph contains the following information? Write the correct letter, A–G.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "the suggestion that shoppers value the stallholders as much as what they sell",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "A market's customers, one planner observed, are buying the stallholders as much as the vegetables" }],
              explanation:
                "Paragraph D closes with the planner's observation that customers are buying the stallholders as much as the vegetables, which is the personal-contact claim restated in the statement. The paragraph's subject is the market's social service rather than its prices or policies.",
            },
          },
          {
            text: "a reference to traders changing prices faster than large retailers can",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "a trader reprices a crate of overripe plums the moment footfall slows" }],
              explanation:
                "Paragraph C builds its speed case around a contrast: supermarkets reset prices weekly through head office, while a trader reprices a crate of plums the moment footfall slows. The statement condenses that comparison into one claim about speed.",
            },
          },
          {
            text: "an example of market modernisation that pushed out traditional sellers",
            correct: 4,
            lure: 5,
            meta: {
              skills: ["scanning", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "hygiene standards so demanding that traditional vendors cannot afford the refrigeration the new licence requires" }],
              explanation:
                "Paragraph E supplies exactly this example: upgraded sheds and licence conditions whose refrigeration costs traditional vendors could not meet. Paragraph F also mentions renovation, but there the funds are protective support for traders rather than a force excluding them.",
              trap: {
                family: "mention-lure",
                note: "Paragraph F's 'renovation funds' echo the idea of upgrading, but that programme keeps traders in place instead of driving them out.",
              },
              whyWrong: [
                "F: Barcelona's renovation funds and capped rents are the opposite of exclusion — the paragraph is about keeping traders in place.",
              ],
            },
          },
          {
            text: "a claim that markets let new businesses fail cheaply",
            correct: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "The failure rate is high, but the cost of failing is low" }],
              explanation:
                "Paragraph B argues that day-rental stalls make experimentation cheap precisely because failure costs little, an asymmetry formal retail cannot copy. The statement's 'fail cheaply' is a tight paraphrase of the cost of failing being low.",
            },
          },
          {
            text: "a note that supporting a market costs the public relatively little",
            correct: 5,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "for the price of a modest subsidy, a city keeps a low-margin food distribution system" }],
              explanation:
                "Paragraph F makes the cost argument explicitly: for the price of a modest subsidy, a city keeps an entire low-margin distribution system running. The statement's 'relatively little' mirrors that modest price, which is the paragraph's closing point.",
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
          [{ kind: "text", text: "6. Sociologists describe markets as " }, { kind: "blank", no: 6 }, { kind: "text", text: " where new businesses develop before moving on." }],
          [{ kind: "text", text: "7. Unlike chain stores, a market trader can adjust " }, { kind: "blank", no: 7 }, { kind: "text", text: " immediately when trade slows." }],
          [{ kind: "text", text: "8. Market regulars describe their visits in the language of " }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "9. In Barcelona, the rents paid by market traders are " }, { kind: "blank", no: 9 }, { kind: "text", text: " by the city." }],
        ],
        blanks: [
          {
            no: 6,
            answer: "incubators",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 1, quote: "describe markets as incubators: businesses hatch there, then graduate to permanent premises" }],
              explanation:
                "Paragraph B reports the sociologists' label directly: markets are incubators, places where businesses hatch and then graduate to permanent premises. The sentence keeps the hatching image, so the missing noun is incubators.",
            },
          },
          {
            no: 7,
            answer: "prices",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "a supermarket chain resets its prices through head office on a weekly cycle" }],
              explanation:
                "Paragraph C contrasts the weekly head-office price cycle with a trader who reprices the moment footfall slows. The gap after 'adjust' takes the noun that both halves of the comparison share, and it appears in the same sentence.",
            },
          },
          {
            no: 8,
            answer: "ritual",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "regulars describe the weekly round in the language of ritual" }],
              explanation:
                "Paragraph D observes that regulars describe the weekly round in the language of ritual. The statement copies the sentence's frame almost exactly, leaving only the closing noun to be found in the same line.",
            },
          },
          {
            no: 9,
            answer: "capped",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "with capped rents and public renovation funds" }],
              explanation:
                "Paragraph F lists Barcelona's protections: markets classified as public facilities, with capped rents and public renovation funds. The passive gap 'are ___ by the city' takes the past participle from that phrase.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "incubators", partOfSpeech: "noun (plural)", definition: "places where small new ventures are nurtured cheaply before moving on; sociologists' label for markets." },
      { word: "fit-out", partOfSpeech: "noun", definition: "the fittings and interior work a shop needs before it can open; a market stall requires none." },
      { word: "perishable", partOfSpeech: "adjective", definition: "(of food) liable to spoil quickly; perishable stock makes retail an information-hungry business." },
      { word: "footfall", partOfSpeech: "noun", definition: "the number of people walking past or into a retail space; traders read its slowing instantly." },
      { word: "overheads", partOfSpeech: "noun (plural)", definition: "the continuing costs of running a business; a market's are counted in folding tables rather than warehouses." },
      { word: "subsidy", partOfSpeech: "noun", definition: "public money that keeps a service's price below its real cost; cities pay one to keep markets alive." },
    ],
    passageNote:
      "The paragraphs alternate between what markets do for traders (B–C), what they do for customers (D), and what cities do to them (E–F). The matching task rewards locating the information rather than the topic word — one distractor paragraph deliberately shares its vocabulary with the correct one.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-synaesthesia",
    title: "Seeing sounds: the science of synaesthesia",
    variant: "academic",
    section: 3,
    subject: "psychology",
    topic: "science",
    difficulty: 5,
    estimatedMinutes: 20,
    objective:
      "Track how science rehabilitates a dismissed experience: a working definition, a diagnostic built on consistency, rival brain accounts, and a measured verdict on costs and gifts.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Seeing sounds: the science of synaesthesia",
        paragraphs: [
          "Some people open a book and the letters arrive in colour. For them, Wednesday is reliably mauve, the number seven is always a particular shade of amber, and a violin note spills a wash of gold across the mind's eye. They are not speaking metaphorically, and they are not unwell. This is synaesthesia, a trait in which one sense involuntarily triggers another, and it has travelled in a century from the circus of curiosities to the centre of cognitive neuroscience.",
          "The Victorian polymath Francis Galton noticed it first among his correspondents in the 1880s: certain families reported colours for particular days, numerals and names, and the reports clustered in relatives. Galton concluded that the trait ran in families, and — writing in an age fond of hereditary explanations — filed it away as an inherited oddity of the nervous system. The observation was sound; the verdict was not. For decades afterwards, synaesthesia was treated as poetic invention or plain attention-seeking, and researchers who took it seriously risked their standing.",
          "Modern work begins by taking the reports literally. Synaesthesia is now defined by three features: the perceptions are involuntary, they are consistent over time, and they are idiosyncratic — one person's seven is amber, another's is slate blue. The commonest form links written letters or numerals, collectively called graphemes, with colours; rarer forms join sound with shape, taste with touch, or the days of the week with spatial patterns. Estimates of prevalence vary with definitions, but recent surveys put the trait at a few per cent of the population, with colour associations the most frequently reported and milder forms probably undercounted.",
          "How can a researcher test a private experience? The classic answer is patience. Because genuine pairings stay stable for decades while invented ones drift, the standard diagnostic is the consistency test: record your colours for a set of words, wait an unsignalled interval of weeks or longer, and record them again. Control subjects guessing at random rarely match themselves; confirmed synaesthetes do, time after time, at rates that satisfy the strictest statistician. Online batteries now administer the test at scale, and consistency has become the field's working definition of authenticity.",
          "What the brain does differently remains debated, but findings converge. Neuroimaging studies report that seeing graphemes activates colour-processing regions in synaesthetes that stay quiet in other readers, and structural measures suggest the connecting pathways may differ subtly. One influential account, the cross-activation hypothesis, proposes that during development the normal pruning of connections between neighbouring brain areas is left incomplete, leaving extra bridges between the grapheme region and the colour region. Related ideas stress feedback — signals from later processing stages leaking back into earlier ones. On one point all accounts agree: the trait is congenital, organised early and stable for life.",
          "Does the trait help or hinder? Most synaesthetes would not surrender it. Certain forms carry measurable gifts: colour cues can anchor memory, and the most famous case in the literature, a Russian journalist studied for decades, recalled nearly everything, navigating his overwhelming memory partly through the colours and shapes his sensations produced. Links to creativity are claimed more often than demonstrated; artists report synaesthesia at noticeable rates, yet careful studies suggest the association is modest. What research consistently fails to find is pathology: synaesthesia is not a disorder, causes no distress by definition, and often goes unmentioned even to a person's doctor.",
          "The trait can also be acquired. Sensory loss, migraine, certain drugs and, rarely, brain injury have all been reported to produce temporary or lasting cross-sensations — evidence, some argue, that the wiring for synaesthesia exists in every brain, quiet in most. Developmental synaesthetes, on this view, are not wired differently from you so much as differently silenced. Either way, the trait has become a window: by studying a brain in which the senses blend, scientists hope to learn how ordinary brains keep them apart — and how much of perception is, in the end, construction.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–6",
        instruction:
          "Choose the correct heading for paragraphs B–G from the list of headings below. Write the correct number, i–vii, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 1, quote: "The observation was sound; the verdict was not." }],
              explanation:
                "Paragraph B turns on the double judgement at its end: Galton's observation of family clustering was sound, but his verdict — inherited oddity, not worth study — was not, and the paragraph follows the consequences of that mistake. Heading ii ('A Victorian verdict corrected') compresses that arc.",
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "the perceptions are involuntary, they are consistent over time, and they are idiosyncratic" }],
              explanation:
                "Paragraph C is built as a definition with three named features — involuntary, consistent, idiosyncratic — followed by how common the trait is. Heading iii ('The three marks of the genuine trait') points straight at that three-part structure.",
            },
          },
          {
            text: "Paragraph D",
            correct: 4,
            meta: {
              skills: ["skimming", "structure"],
              evidence: [{ block: 0, paragraph: 3, quote: "the standard diagnostic is the consistency test" }],
              explanation:
                "Paragraph D opens with a question — how can a researcher test a private experience? — and answers it with the consistency test and its logic. Heading v ('Diagnosing an experience nobody else can see') names both halves of that problem and solution.",
            },
          },
          {
            text: "Paragraph E",
            correct: 5,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "One influential account, the cross-activation hypothesis, proposes that during development the normal pruning of connections between neighbouring brain areas is left incomplete" }],
              explanation:
                "Paragraph E presents converging brain findings and then sets explanations side by side: cross-activation bridges against feedback leakage, with agreement only on the trait being congenital. Heading vi ('Competing accounts of bridged brain areas') matches a paragraph that deliberately refuses a single mechanism.",
            },
          },
          {
            text: "Paragraph F",
            correct: 6,
            lure: 0,
            meta: {
              skills: ["skimming", "paraphrase", "opinion"],
              evidence: [{ block: 0, paragraph: 5, quote: "What research consistently fails to find is pathology" }],
              explanation:
                "Paragraph F weighs the trait's effects — memory anchors, contested creativity links, no pathology — and keeps its balance sheet deliberately mixed. Heading vii ('Blessing, burden or neither?') mirrors the paragraph's opening question and its measured answers.",
              trap: {
                family: "mention-lure",
                note: "Artists appear in the paragraph, but the passage says the creativity link is claimed more often than demonstrated — the unused heading states it as proven.",
              },
              whyWrong: [
                "i: the paragraph explicitly calls the creativity association modest and more often claimed than demonstrated, so 'a proven link' overstates the evidence.",
              ],
            },
          },
          {
            text: "Paragraph G",
            correct: 3,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "Sensory loss, migraine, certain drugs and, rarely, brain injury have all been reported to produce temporary or lasting cross-sensations" }],
              explanation:
                "Paragraph G describes synaesthesia arriving after birth through sensory loss, drugs or injury, then draws its wider moral about wiring that exists in everyone. Heading iv ('When the senses fuse after birth') captures the acquired cases that define the paragraph.",
            },
          },
        ],
        options: [
          "A proven link to artistic genius",
          "A Victorian verdict corrected",
          "The three marks of the genuine trait",
          "When the senses fuse after birth",
          "Diagnosing an experience nobody else can see",
          "Competing accounts of bridged brain areas",
          "Blessing, burden or neither?",
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 7–10",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "According to the passage, what was wrong with Galton's treatment of synaesthesia?",
            options: [
              "He denied that his correspondents truly experienced colours",
              "He identified the family clustering correctly but misjudged the trait's importance",
              "He refused to publish his findings about inherited traits",
              "He dismissed the reports as metaphor and attention-seeking",
            ],
            correct: 1,
            lure: 3,
            meta: {
              skills: ["detail", "inference"],
              evidence: [
                { block: 0, paragraph: 1, quote: "Galton concluded that the trait ran in families" },
                { block: 0, paragraph: 1, quote: "The observation was sound; the verdict was not." },
              ],
              explanation:
                "The passage credits Galton with an accurate observation — the reports clustered in families — and faults only his verdict, which filed the trait away as an oddity not worth study. The metaphor-and-attention-seeking dismissal came later, from the wider research world, not from Galton himself.",
              trap: {
                family: "attribution",
                note: "The metaphor accusation belongs to the decades after Galton; the option hands a later judgement to the wrong owner.",
              },
              whyWrong: [
                "A: the passage says his observation of the reports was sound, not that he doubted them.",
                "C: nothing in the passage concerns publication or its refusal.",
                "D: that reception followed Galton's era; the paragraph attributes it to the field at large, not to him.",
              ],
            },
          },
          {
            stem: "The consistency test convinces researchers because",
            options: [
              "synaesthetes describe their colours more vividly than other people can",
              "genuine associations stay stable while guesses drift apart",
              "the second test takes place on the same day as the first",
              "brain scans confirm the colours during the test itself",
            ],
            correct: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Because genuine pairings stay stable for decades while invented ones drift" }],
              explanation:
                "Paragraph D gives the logic directly: genuine pairings stay stable for decades while invented ones drift, so only true synaesthetes match themselves across an unsignalled interval. Vividness, timing and scanners play no part in the test at all.",
              whyWrong: [
                "A: the vividness of a description is never part of the test's logic.",
                "C: the interval is explicitly weeks or longer, and the retest comes unannounced.",
                "D: imaging appears in paragraph E as a separate line of evidence, not as part of the consistency test.",
              ],
            },
          },
          {
            stem: "According to the cross-activation hypothesis, synaesthesia arises when",
            options: [
              "the developing brain fails to prune connections between neighbouring areas",
              "feedback from later stages of processing leaks into earlier ones",
              "children learn their letters from coloured classroom materials",
              "the brain's colour-processing region is damaged",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "leaving extra bridges between the grapheme region and the colour region" }],
              explanation:
                "The hypothesis is stated as incomplete pruning that leaves extra bridges between the grapheme and colour regions. Feedback leakage is the related but different account mentioned in the very next sentence, which is precisely why it makes an attractive wrong answer.",
              trap: {
                family: "attribution",
                note: "Feedback leakage is a rival account presented alongside cross-activation; the option hands one theory's mechanism to another.",
              },
              whyWrong: [
                "B: that is the neighbouring feedback account, not the cross-activation hypothesis itself.",
                "C: coloured learning materials are never mentioned; the passage treats the trait as congenital.",
                "D: injury produces acquired synaesthesia in paragraph G, not the congenital form this hypothesis explains.",
              ],
            },
          },
          {
            stem: "The closing suggestion that the wiring 'exists in every brain' implies that",
            options: [
              "everyone secretly sees coloured letters",
              "the capacity for joined perception is present but silent in most people",
              "synaesthesia will eventually spread through the population",
              "acquired and developmental forms never coexist in one person",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["inference", "paraphrase"],
              evidence: [{ block: 0, paragraph: 6, quote: "the wiring for synaesthesia exists in every brain, quiet in most" }],
              explanation:
                "The sentence itself carries the paraphrase: the wiring exists in every brain, quiet in most. 'Present but silent' restates that clause, while 'secretly sees coloured letters' exaggerates quiet wiring into active experience for everyone.",
              trap: {
                family: "extreme-language",
                note: "The lure turns dormant capacity into actual perception — quiet wiring is not the same as hidden experience.",
              },
              whyWrong: [
                "A: quiet wiring is not experience; the passage says the cross-sensations in most brains remain unexpressed.",
                "C: the passage never discusses the trait spreading through a population.",
                "D: the two forms are presented as different routes into the same phenomenon, with no such rule stated.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "grapheme", partOfSpeech: "noun", definition: "a written letter or numeral; the commonest synaesthesia attaches colours to them." },
      { word: "prevalence", partOfSpeech: "noun", definition: "how common a condition or trait is in a population; recent surveys put synaesthesia at a few per cent." },
      { word: "idiosyncratic", partOfSpeech: "adjective", definition: "peculiar to the individual rather than shared; one person's seven is amber, another's slate blue." },
      { word: "congenital", partOfSpeech: "adjective", definition: "present from birth; all accounts agree the trait is organised early and stable for life." },
      { word: "pruning", partOfSpeech: "noun", definition: "the developmental removal of surplus brain connections; one theory says it is left incomplete in synaesthetes." },
      { word: "pathology", partOfSpeech: "noun", definition: "disease, or the study of it; research consistently fails to find any in synaesthesia." },
    ],
    passageNote:
      "Paragraph A is scene-setting and stays outside the headings task; paragraphs B–G each carry one controlling idea. The multiple-choice items test attribution more than detail — always check whose view or whose theory a sentence belongs to before answering.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-audiobooks",
    title: "The quiet rise of the audiobook",
    variant: "academic",
    section: 1,
    subject: "publishing",
    topic: "culture",
    difficulty: 2,
    estimatedMinutes: 15,
    objective:
      "Follow a format from charity service to mainstream habit — and read the comprehension research that separates the page from the ear.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "The quiet rise of the audiobook",
        paragraphs: [
          "For half a century the audiobook lived in publishing's side room: a service for readers who could not use print, then a cassette for long car journeys, then almost nothing at all. In the space of a decade, that changed. Downloaded narration now ranks among the fastest-growing corners of the book trade, with year-on-year growth most print categories can only envy. The question in boardrooms is no longer whether listening counts as reading; it is how large the listening audience will become.",
          "The format began as a charity. In the 1930s, organisations for blind veterans and blind readers in Britain and the United States produced the first talking books — full novels pressed onto shellac and, soon after, long-playing vinyl discs that carried more text per side. The recordings were free or heavily subsidised, and the libraries that lent them measured their collections in shelf miles. A commercial market barely existed: discs were bulky, players were expensive, and the audience served had been defined precisely by its exclusion from print.",
          "Cassette technology changed the arithmetic. Tapes were cheap, players ran on car batteries, and abridged editions shrank a novel to a manageable stack. Publishers then discovered an unexpected public: commuters. Sales charts filled with popular fiction and self-help, stocked at petrol stations and airport kiosks, and the category's reputation — light listening for captive travellers — was fixed by the very customers who saved it. The shift from service to product had begun, though narration still cost more to record than most titles could earn back.",
          "The smartphone finished the job. Once a phone could hold forty hours of audio, the tape's physical limits disappeared, and a subscription model borrowed from television offered flat-fee simplicity: one credit, one book. Growth compounded through the 2010s, as backlist titles gained new recordings, celebrity readers drew attention and podcasts trained millions of ears to treat spoken audio as a default. Trade bodies in several countries reported year after year of double-digit growth, and by some measures spoken audio outgrew the e-book — a reversal few analysts had predicted a decade earlier.",
          "Along the way, the craft acquired status. Listeners and reviewers argue about narrators with the seriousness once reserved for translators: an author's own reading may offer intimacy but rarely acting skill, while a gifted professional can carry a hundred voices through a trilogy. Productions have grown more elaborate — multiple casts, sound design, full-cast dramatisation — and rights contracts now treat audio separately from print. The old stigma of abridgement has largely faded as unabridged downloads became the default; a listener starting today may never encounter a book cut to fit three cassettes.",
          "Is listening reading? Cognitive scientists answer with a hedge. For narrative texts, studies find comprehension broadly similar whether a story arrives through the ears or the eyes, because the same mental model of plot and character does the work. Differences appear where structure gets dense: tables, footnotes and back-and-forth argument are easier to navigate on a page, where skimming and re-reading stay under the reader's control. Memory researchers add that passive listening can invite drift, especially at faster speeds. The honest summary is not that audio is inferior, but that page and ear suit different texts, tasks and moments.",
          "Meanwhile, the founding audience has not been forgotten. Studios producing commercial bestsellers share facilities with charities making free recordings, and screen-reader technology has blurred the line further: many blind listeners now use exactly the same apps as everyone else. What began as a separate service has become a mainstream habit that happens to include everyone. The quiet format, once kept at the edge of publishing because its audience was thought marginal, now sets the pace for the industry that kept it waiting.",
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
            text: "The earliest talking books were made for people unable to read print.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "organisations for blind veterans and blind readers in Britain and the United States produced the first talking books" }],
              explanation:
                "Paragraph B is explicit about the first audience: organisations for blind veterans and blind readers produced the first talking books. The statement restates that origin plainly, so it agrees with the passage.",
            },
          },
          {
            text: "Early talking-book recordings were paid for by commercial publishers.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [
                { block: 0, paragraph: 1, quote: "The format began as a charity" },
                { block: 0, paragraph: 1, quote: "The recordings were free or heavily subsidised" },
              ],
              explanation:
                "Paragraph B opens by calling the format a charity and adds that the recordings were free or heavily subsidised. Commercial publishers enter the story only later, in the cassette era, so the statement contradicts the passage.",
            },
          },
          {
            text: "Sales of audiobooks are now higher than sales of printed books.",
            answer: "NOT GIVEN",
            lure: "TRUE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "by some measures spoken audio outgrew the e-book" }],
              explanation:
                "Paragraph D compares spoken audio with the e-book, and only 'by some measures' at that. Nowhere does the passage compare audio sales with sales of printed books, so the statement cannot be judged from the text.",
              trap: {
                family: "mention-lure",
                note: "Growth and envy of print appear in the passage, but the audio-versus-print sales comparison is never actually made — only the e-book comparison is.",
              },
              whyWrong: [
                "TRUE: the passage's comparison is with e-books, a different category, and is hedged with 'by some measures'.",
                "FALSE: nothing contradicts the claim either; the specific comparison with print sales is simply absent.",
              ],
            },
          },
          {
            text: "In the cassette era, many audiobooks were shortened versions of the printed book.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "abridged editions shrank a novel to a manageable stack" }],
              explanation:
                "Paragraph C names abridged editions as part of the cassette arithmetic: cutting a novel down made the format manageable for cheap tapes and car players. 'Shortened versions of the printed book' is a plain paraphrase of abridged editions.",
            },
          },
          {
            text: "Research shows that listening produces poorer comprehension than reading for every kind of material.",
            answer: "FALSE",
            lure: "NOT GIVEN",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "For narrative texts, studies find comprehension broadly similar whether a story arrives through the ears or the eyes" }],
              explanation:
                "Paragraph F reports broadly similar comprehension for narrative texts and confines the differences to dense, structured material such as tables and argument. 'Every kind of material' contradicts that split verdict directly, so the statement is FALSE.",
              trap: {
                family: "extreme-language",
                note: "'Every' is the trap: the passage divides its verdict by text type rather than condemning audio across the board.",
              },
              whyWrong: [
                "NOT GIVEN: the passage does state its findings, and they contradict a universal deficit claim.",
                "TRUE: the same sentence reports similar comprehension for stories, so blanket inferiority is ruled out.",
              ],
            },
          },
          {
            text: "Narrators are usually selected by the authors of the books they read.",
            answer: "NOT GIVEN",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "an author's own reading may offer intimacy but rarely acting skill" }],
              explanation:
                "Paragraph E discusses who reads — authors or professionals — and how listeners judge them, but it never says who does the selecting. A question the passage does not address stays in Not Given territory regardless of how plausible it sounds.",
              whyWrong: [
                "TRUE: the passage weighs author readings against professional ones but assigns the casting decision to nobody.",
                "FALSE: nothing denies the practice either; narrator selection simply never comes up.",
              ],
            },
          },
        ],
      },
      {
        id: "q2",
        type: "table-completion",
        label: "Questions 7–10",
        instruction: "Complete the table below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
        wordLimit: 3,
        layout: [
          [{ kind: "text", text: "From charity to habit: stages in the audiobook's growth" }],
          [{ kind: "text", text: "Beginnings" }, { kind: "text", text: "first talking books, later pressed onto long-playing" }, { kind: "blank", no: 7 }, { kind: "text", text: "discs" }],
          [{ kind: "text", text: "The cassette era" }, { kind: "text", text: "an unexpected public of" }, { kind: "blank", no: 8 }],
          [{ kind: "text", text: "The smartphone decade" }, { kind: "text", text: "flat-fee" }, { kind: "blank", no: 9 }, { kind: "text", text: "model borrowed from television" }],
          [{ kind: "text", text: "The download default" }, { kind: "text", text: "downloads are almost always" }, { kind: "blank", no: 10 }],
        ],
        blanks: [
          {
            no: 7,
            answer: "vinyl",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "long-playing vinyl discs that carried more text per side" }],
              explanation:
                "Paragraph B describes the first full novels pressed onto shellac and, soon after, long-playing vinyl discs that carried more text per side. The table's 'long-playing ___ discs' takes the material's name from that clause.",
            },
          },
          {
            no: 8,
            answer: "commuters",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Publishers then discovered an unexpected public: commuters" }],
              explanation:
                "Paragraph C names the unexpected public that saved the category: commuters, buying popular fiction and self-help at petrol stations and airport kiosks. The table keeps the phrase 'unexpected public of' and asks for the group.",
            },
          },
          {
            no: 9,
            answer: "subscription",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 3, quote: "a subscription model borrowed from television offered flat-fee simplicity" }],
              explanation:
                "Paragraph D credits the smartphone decade with a subscription model borrowed from television, offering flat-fee simplicity at one credit per book. The table's 'flat-fee ___ model' reverses the adjectives but needs the same noun.",
            },
          },
          {
            no: 10,
            answer: "unabridged",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "unabridged downloads became the default" }],
              explanation:
                "Paragraph E notes that the old stigma of abridgement has largely faded as unabridged downloads became the default. The table's final row asks for the quality that now defines the download edition, which is unabridged.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "subsidised", partOfSpeech: "adjective", definition: "with part of the cost paid by someone other than the buyer; early talking-book recordings were free or subsidised." },
      { word: "commuters", partOfSpeech: "noun (plural)", definition: "people who travel regularly between home and work; the cassette era's unexpected public." },
      { word: "abridged", partOfSpeech: "adjective", definition: "shortened from the full original text; cassette editions often were, to fit a manageable stack." },
      { word: "backlist", partOfSpeech: "noun", definition: "a publisher's older titles that remain available for sale; the download era gave them new recordings." },
      { word: "unabridged", partOfSpeech: "adjective", definition: "complete, with nothing cut; the default form of today's downloads." },
      { word: "stigma", partOfSpeech: "noun", definition: "a mark of disgrace attached to something; abridgement's old stigma has largely faded." },
    ],
    passageNote:
      "Three eras carry the story — charity (B), cassette (C), smartphone (D) — with craft (E) and cognition (F) as the debatable middle. The table walks the eras; the verdict items test whether each comparison was actually made in the text.",
    source: READING_BANK_SOURCE_NOTE,
  },

  {
    slug: "ielts-rb-ac-urban-heat",
    title: "Cooling the city",
    variant: "academic",
    section: 3,
    subject: "urban climate",
    topic: "environment",
    difficulty: 4,
    estimatedMinutes: 19,
    objective:
      "Diagnose the urban heat island — its causes, its costs and its remedies — and follow how cities combine canopy, colour and water to bring temperatures down.",
    intro: "Read the passage below and answer Questions 1–12.",
    blocks: [
      {
        heading: "Cooling the city",
        paragraphs: [
          "On a summer evening, step from a park onto the car park beside it and the temperature can step with you — up by several degrees in the space of a few strides. Cities run hotter than the countryside around them, often by one to three degrees Celsius on average and far more on still nights. Scientists call the phenomenon the urban heat island, and as heatwaves lengthen, cooling the city has shifted from a comfort issue to a public-health priority.",
          "The causes are built into the fabric itself. Dark asphalt and dark roof surfaces absorb sunlight through the day and release it slowly after dark, so city stone and masonry keep warming the night air long after sunset. Vegetation, which cools by day, has been cleared; tall buildings block the breeze that would otherwise flush the streets; engines and air-conditioning pump waste heat into the very streets they are trying to cool. The gap between city and country is therefore widest not at midday but in the evening and at night, when rural ground has already cooled and the masonry is still giving up its store.",
          "The stakes are measured in lives. Major heatwaves in Europe, India and North America have caused tens of thousands of excess deaths, and city dwellers — above all older people living alone on upper floors — bear the worst of them. Heat also drives electricity demand precisely when power grids are most stressed, and it bakes urban pollution into smog. Public-health agencies increasingly treat extreme heat as a hazard to be managed like floods: named warnings, cool refuges, neighbours checked on, rather than background discomfort to be endured.",
          "The most popular remedies are green and blue. Trees shade the pavement and cool it further through evapotranspiration, the process by which leaves release water vapour; a mature street tree can transpire hundreds of litres on a hot day. Parks, green roofs, planted verges and restored streams all contribute, though their influence fades within a few hundred metres. The gains are real but conditional: trees need irrigation in dry climates, and species chosen for a cooler past may not survive the summers ahead. Planting, urban foresters like to say, is a fifty-year decision being made in a one-degree decade.",
          "Engineering offers drier options. Cool roofs — coated or surfaced in pale, reflective materials — raise a building's albedo, bouncing sunlight back before it can become heat, and painting roofs white has become municipal policy from New York to Ahmedabad. Pavement mixes in lighter aggregate, shaded walkways and pergolas over market streets reduce the load on bodies as well as surfaces. These measures need no water and little maintenance, though reflective glare can irritate the very pedestrians they are meant to serve, and dust quietly dulls the shine over the years.",
          "Some cities have stitched the measures into policy. Medellín replaced bare traffic corridors with a network of planted green corridors linking the hills to the centre, and officials reported cooling of around two degrees along the greened routes. Singapore, guided for decades by a master plan that treats canopy as infrastructure, has planted its streets into continuous shade and requires developments to replace the green cover they disturb. Paris has converted asphalt schoolyards into planted 'oasis' courtyards that double as neighbourhood refuges in heat emergencies. Each programme is tailored, yet the family resemblance is clear: shade first, then water, then reflection.",
          "There is also an awkward geography. Aerial surveys repeatedly find that the poorest districts — those with the least canopy and the most paving — are the hottest, so the burden of heat falls hardest on the households least able to pay for cooling. Remedies are therefore rarely purely technical: where planting budgets go, which streets receive shade structures and who hears the warnings are questions of fairness as much as engineering. Urban climate researchers summarise the assignment soberly: no single instrument cools a city, but a portfolio of modest ones — canopy, colour, water and care — demonstrably takes the edge off, and the edge is where people die.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "summary-completion",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [
            { kind: "text", text: "Cities remain warmer than the countryside partly because dark " },
            { kind: "blank", no: 1 },
            { kind: "text", text: " absorb sunlight during the day and go on releasing heat at night. The temperature gap is widest during the " },
            { kind: "blank", no: 2 },
            { kind: "text", text: " . Street trees cool pavements both by shading them and by " },
            { kind: "blank", no: 3 },
            { kind: "text", text: " , the release of water vapour from leaves. Pale roof coatings raise a building's " },
            { kind: "blank", no: 4 },
            { kind: "text", text: " , so less sunlight becomes heat. In dry climates, trees may depend on " },
            { kind: "blank", no: 5 },
            { kind: "text", text: " . Aerial surveys show that the hottest districts tend to have the least " },
            { kind: "blank", no: 6 },
            { kind: "text", text: " ." },
          ],
        ],
        blanks: [
          {
            no: 1,
            answer: "surfaces",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Dark asphalt and dark roof surfaces absorb sunlight through the day" }],
              explanation:
                "Paragraph B attributes the night-time warmth to dark asphalt and dark roof surfaces, which absorb sunlight through the day and release it slowly after dark. The gap after 'dark' takes the shared noun of that sentence.",
            },
          },
          {
            no: 2,
            answer: "evening",
            alternatives: ["night"],
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "The gap between city and country is therefore widest not at midday but in the evening and at night" }],
              explanation:
                "Paragraph B states that the city-country gap is widest not at midday but in the evening and at night, once the rural ground has cooled. Either 'evening' or 'night' fits the gap, and both appear in the passage.",
            },
          },
          {
            no: 3,
            answer: "evapotranspiration",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "Trees shade the pavement and cool it further through evapotranspiration" }],
              explanation:
                "Paragraph D names the process in full: trees shade the pavement and cool it further through evapotranspiration, the process by which leaves release water vapour. The summary keeps the definition and asks for the term itself.",
            },
          },
          {
            no: 4,
            answer: "albedo",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "raise a building's albedo, bouncing sunlight back before it can become heat" }],
              explanation:
                "Paragraph E explains that pale, reflective coatings raise a building's albedo, bouncing sunlight back before it can become heat. The gap after 'raise a building's' takes that technical noun, which the glossary also defines.",
            },
          },
          {
            no: 5,
            answer: "irrigation",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "trees need irrigation in dry climates" }],
              explanation:
                "Paragraph D concedes the condition on green remedies: the gains are real, but trees need irrigation in dry climates. The summary's 'depend on' paraphrases 'need', so the missing noun is irrigation.",
            },
          },
          {
            no: 6,
            answer: "canopy",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 6, quote: "those with the least canopy and the most paving" }],
              explanation:
                "Paragraph G reports the aerial findings: the poorest districts, with the least canopy and the most paving, are the hottest. The gap after 'the least' takes the passage's green-cover noun, which is canopy.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "matching-features",
        label: "Questions 7–10",
        instruction:
          "Look at the following descriptions of city cooling programmes and the list of cities below. Match each statement with the correct city.",
        items: [
          {
            text: "Bare traffic corridors turned into a network of planted routes, with reported cooling.",
            correct: 0,
            lure: 1,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Medellín replaced bare traffic corridors with a network of planted green corridors linking the hills to the centre" }],
              explanation:
                "Paragraph F gives Medellín the planted corridors and the two-degree report along the greened routes. Singapore's programme is also green, but its instrument is continuous canopy along streets rather than converted corridors, which is why the near-miss is deliberate.",
              trap: {
                family: "mention-lure",
                note: "Both cities plant; only Medellín's item mentions converted traffic corridors and reported cooling along the greened routes.",
              },
              whyWrong: [
                "Singapore: its master plan treats canopy as infrastructure — planting streets into shade — not the conversion of bare traffic corridors, which belongs to Medellín.",
              ],
            },
          },
          {
            text: "Canopy treated as infrastructure, with developers required to replace green cover.",
            correct: 1,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "a master plan that treats canopy as infrastructure, has planted its streets into continuous shade and requires developments to replace the green cover they disturb" }],
              explanation:
                "Paragraph F describes Singapore's decades-long master plan, which treats canopy as infrastructure and requires developments to replace the green cover they disturb. The statement lifts both halves of that description in compressed form.",
            },
          },
          {
            text: "Asphalt school grounds converted into planted neighbourhood refuges.",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "Paris has converted asphalt schoolyards into planted 'oasis' courtyards that double as neighbourhood refuges" }],
              explanation:
                "Paragraph F credits Paris with converting asphalt schoolyards into planted 'oasis' courtyards that double as neighbourhood refuges in heat emergencies. The statement paraphrases that programme without its name.",
            },
          },
          {
            text: "Reflective white roofing promoted as city policy.",
            correct: 3,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "painting roofs white has become municipal policy from New York to Ahmedabad" }],
              explanation:
                "Paragraph E places Ahmedabad at the end of the white-roof policy sentence, alongside New York. The other three cities appear together in paragraph F, but with planting programmes rather than reflective coatings, so the location discipline decides the answer.",
            },
          },
        ],
        options: ["Medellín", "Singapore", "Paris", "Ahmedabad"],
      },
      {
        id: "q3",
        type: "multiple-choice",
        label: "Questions 11–12",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "Why does the writer mention major heatwaves in paragraph C?",
            options: [
              "To show that rural heatwaves kill more people than urban ones",
              "To explain why heat is now managed as a public-health hazard",
              "To prove that air-conditioning is the main cause of excess deaths",
              "To compare the responses of European and Indian agencies",
            ],
            correct: 1,
            meta: {
              skills: ["inference", "structure"],
              evidence: [{ block: 0, paragraph: 2, quote: "Public-health agencies increasingly treat extreme heat as a hazard to be managed like floods" }],
              explanation:
                "The heatwave figures establish the stakes, and the paragraph's landing point is the change in how agencies respond: named warnings, cool refuges and neighbours checked on. The deaths justify the management shift, which is the writer's focus.",
              whyWrong: [
                "A: the passage says city dwellers bear the worst of the deaths, not rural populations.",
                "C: waste heat from air-conditioning is listed as a cause of urban warmth in paragraph B, not of deaths.",
                "D: no comparison of national responses is made anywhere in the paragraph.",
              ],
            },
          },
          {
            stem: "What is the writer's overall conclusion about cooling cities?",
            options: [
              "A mix of modest measures, distributed fairly, is what works",
              "Reflective materials have made urban planting unnecessary",
              "Only limits on building height can cut night-time temperatures",
              "Cities should wait for better technology before acting",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "no single instrument cools a city, but a portfolio of modest ones" }],
              explanation:
                "The closing sentences carry the conclusion: no single instrument cools a city, but a portfolio of modest ones does, and the geography argument insists the portfolio be distributed fairly. Both halves of the correct option come from the writer's own wording.",
              trap: {
                family: "mention-lure",
                note: "Reflection works in paragraph E, but the conclusion keeps canopy and colour side by side — no measure in the passage replaces another.",
              },
              whyWrong: [
                "B: paragraph D lists conditions on greening, not its replacement, and the conclusion's portfolio keeps canopy in it.",
                "C: building height appears as a cause in paragraph B, but no such remedy is ever proposed.",
                "D: every programme in the passage is action taken now, and the writer urges no one to wait.",
              ],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "masonry", partOfSpeech: "noun", definition: "brickwork and stonework; it releases stored heat into the night air long after sunset." },
      { word: "evapotranspiration", partOfSpeech: "noun", definition: "the combined process by which plants move water into the air; a street tree's built-in cooling system." },
      { word: "transpire", partOfSpeech: "verb", definition: "to release water vapour through leaves; a mature street tree can do it by the hundreds of litres." },
      { word: "albedo", partOfSpeech: "noun", definition: "the fraction of sunlight a surface reflects; pale coatings raise it so less light becomes heat." },
      { word: "pergolas", partOfSpeech: "noun (plural)", definition: "open frameworks that support climbing plants and cast shade over walkways and market streets." },
      { word: "canopy", partOfSpeech: "noun", definition: "the upper layer formed by tree crowns; one city's master plan treats it as infrastructure." },
    ],
    passageNote:
      "Causes (B) and stakes (C) come before remedies (D–E) and city programmes (F), with fairness as the coda (G). Note the matching task: one answer sits in paragraph E, so skimming only the programme paragraph punishes itself.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
