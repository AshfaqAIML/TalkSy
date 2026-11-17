/**
 * IELTS Reading Masterclass — General Training text library I
 * (PROMPT 54 question-bank expansion, GT batch I — Section 3
 * general-interest articles).
 *
 *   ielts-rb-gt-tea            — a short history of tea drinking (history, d4)
 *   ielts-rb-gt-trolleybuses   — the quiet return of the trolleybus (technology, d4)
 *   ielts-rb-gt-sandwich       — the story of the sandwich (culture, d3)
 *   ielts-rb-gt-bookshops      — second-hand bookshops (culture, d4)
 *   ielts-rb-gt-canals         — the canals that carried a revolution (history, d5)
 *   ielts-rb-gt-instant-coffee — the story of instant coffee (economics, d4)
 *
 * Six original magazine-style articles for GT Section 3, each with its own
 * question set (headings / verdicts / completions / matching / choice) and
 * teaching meta. Nothing here is official IELTS examination content; all
 * passages are TalkSy original practice material written in the style of
 * the test.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtIExercises: ReadingExercise[] = [
  {
    slug: "ielts-rb-gt-tea",
    title: "A short history of tea drinking",
    variant: "gt",
    section: 3,
    subject: "food history",
    topic: "history",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Follow tea from a Chinese medicine to the world's everyday drink: the monasteries and classic texts that codified it, its costly arrival in Europe, the empire that made it cheap, and the bag that changed the cup.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "A short history of tea drinking",
        paragraphs: [
          "Second only to water, tea is the most drunk liquid on Earth, and it is worth pausing on how strange that is: the leaves of one evergreen shrub, native to the hills where south-western China meets Myanmar and India, are now steeped in kitchens from Lima to Lahore. Tea did not begin as a pleasure, though. Chinese sources treat it first as a medicine, and the legend that grew up around its discovery is telling: an emperor, the story runs, was boiling water outdoors when leaves drifted into his pot, and the resulting infusion kept him alert through a night of study.",
          "The drink's first serious home was the monastery. Buddhist monks in Tang dynasty China valued tea because it steadied them through long sessions of meditation, and their travels carried the habit beyond the mountains. Tea then did something rare for a beverage: it acquired a classic. In the eighth century the writer Lu Yu produced the Cha Jing, or Classic of Tea, a short treatise covering everything from the shaping of bricks of compressed leaf to the water best suited to brewing it. Educated Chinese now read tea as a cultivated pleasure rather than a decoction, and courtiers and poets took it up.",
          "From China the habit crossed to Japan, again inside monastic luggage. Seeds travelling with monks in the ninth century founded the first Japanese plantings, and over the centuries the tea gathering hardened into chanoyu, the famous ceremony, in which the whisking of powdered green tea becomes a choreography of restraint. The master Sen no Rikyu is usually credited with fixing the ceremony's austere ideals in the sixteenth century, and its influence on Japanese ceramics, architecture and manners has been compared, only half jokingly, to that of a state religion.",
          "Europe met tea late and treated it, at first, as a curiosity sold by apothecaries alongside other exotic drugs. Dutch merchants, trading through their posts in the East Indies, shipped the first small chests to Amsterdam in the early 1600s, and the fashion for the 'China drink' spread to Paris and London. It was ruinously expensive, guarded in locked caddies, and drunk in coffee houses by men who could afford it; when Catherine of Braganza, a Portuguese princess turned English queen, made tea fashionable at court in the 1660s, the habit trickled steadily downward through society.",
          "What made tea an everyday British drink was empire and botany. In the 1820s travellers reported tea bushes growing wild in Assam, in north-eastern India, and planters eventually established estates there and, later, on Ceylon, where a disease that destroyed the island's coffee in 1869 freed the best hill land for tea. Colonial output collapsed the price, clippers and then steamships shortened the voyage, and by the end of the nineteenth century the factory tea break had become part of the industrial day. A medicinal drink of Chinese monks was now the cheapest comfort of the British working class.",
          "The twentieth century changed the tea in the cup itself. The tea bag is usually credited, on thin but persistent evidence, to a New York merchant who sent samples to customers in small silk pouches in the early 1900s; puzzlingly, they brewed the contents in the pouch instead of emptying them out. Convenience took time to convince. British households dismissed bags as an American gimmick for decades, and only in the 1960s did sales begin their long climb, until the bag finally displaced the loose leaf and the ritual of the pot.",
          "Tea's latest chapter is a struggle between quantity and care. Global consumption keeps rising, but much of the growth is bottled and ready-to-drink, aimed at commuters, while the standard bag of fine black dust has surrendered its prestige to coffee. In response, a smaller trade in whole-leaf and speciality teas has grown up, borrowing coffee's vocabulary of origin and season. Twelve centuries after Lu Yu, the world still cannot quite decide whether tea is a medicine, a meditation or merely a drink — which may be why it keeps drinking it.",
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
              evidence: [{ block: 0, paragraph: 0, quote: "tea is the most drunk liquid on Earth" }],
              explanation: "Paragraph A opens with tea's global dominance — the most drunk liquid on Earth after water — then grounds it in legend and medicine. Heading i compresses that arc of a single plant quietly conquering the world.",
            },
          },
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "the writer Lu Yu produced the Cha Jing, or Classic of Tea" }],
              explanation: "Paragraph B follows tea from monastery to salon: monks drink it to steady their meditation, then Lu Yu's treatise turns it into a cultivated pleasure for courtiers and poets. Heading ii gathers monks, meditation and the written classic into one line.",
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "the tea gathering hardened into chanoyu, the famous ceremony" }],
              explanation: "Paragraph C is Japan: seeds arrive with monks and the gathering hardens into chanoyu, a ceremony whose ideals shaped ceramics, architecture and manners. Heading iii names that cultural reach in a few words.",
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "It was ruinously expensive, guarded in locked caddies" }],
              explanation: "Paragraph D is tea's costly European arrival: apothecaries, Dutch chests, locked caddies and a fashion that trickled down from a Portuguese queen. Heading iv compresses both the expense and the curiosity into one line.",
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "Colonial output collapsed the price" }],
              explanation: "Paragraph E is the economics of empire: Assam, Ceylon, clippers and the factory tea break. Heading v gives the mechanism — colonial output collapses the price until the medicine of monks becomes the cheapest comfort of the working class.",
            },
          },
          {
            text: "Paragraph F",
            correct: 5,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 5, quote: "they brewed the contents in the pouch instead of emptying them out" }],
              explanation: "Paragraph F tells the tea-bag origin story: samples posted in silk pouches, customers brewing the pouch by mistake, and decades of British resistance before the bag won. Heading vi takes the accidental pouch as its subject.",
            },
          },
        ],
        options: [
          "One shrub that conquered the world",
          "Monks, meditation and a written classic",
          "A ceremony that shaped a whole culture",
          "A costly curiosity arrives in Europe",
          "Empire makes tea cheap",
          "An accidental pouch changes the cup",
          "Coffee houses and the spread of news",
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 7–11",
        instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if it contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "A Chinese legend says tea leaves first blew into an emperor's pot of boiling water.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "an emperor, the story runs, was boiling water outdoors when leaves drifted into his pot" }],
              explanation: "Paragraph A's legend has leaves drifting into the emperor's boiling pot, and the resulting infusion keeping him alert through a night of study. The statement retells the same episode, with 'blew' standing in for 'drifted', which is agreement.",
            },
          },
          {
            text: "In Tang dynasty China, tea was drunk only by religious orders.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "Educated Chinese now read tea as a cultivated pleasure rather than a decoction, and courtiers and poets took it up" }],
              explanation: "Paragraph B moves tea beyond the monastery: after Lu Yu's classic, educated Chinese treated it as a cultivated pleasure, and courtiers and poets took it up. 'Only religious orders' excludes readers the passage explicitly includes.",
              trap: { family: "extreme-language", note: "Monks dominate the paragraph, but 'only' outruns the text — the same paragraph gives tea to courtiers and poets." },
              whyWrong: ["TRUE: the paragraph's whole point is that the book carried tea from the monasteries to the educated classes."],
            },
          },
          {
            text: "Sen no Rikyu learned the tea ceremony during a stay in China.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "The master Sen no Rikyu is usually credited with fixing the ceremony's austere ideals in the sixteenth century" }],
              explanation: "Paragraph C credits Rikyu with fixing the ceremony's ideals but never mentions where or how he trained. The China connection belongs to the ninth-century monks two sentences earlier, not to Rikyu's biography, so the text is silent.",
              trap: { family: "boundary", note: "Rikyu is discussed in detail — but his training and travels are never mentioned, and silence earns Not Given." },
              whyWrong: ["FALSE: the passage never denies a visit to China; it simply says nothing about where he learned the ceremony."],
            },
          },
          {
            text: "When tea first reached Europe, it was sold by apothecaries.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "a curiosity sold by apothecaries alongside other exotic drugs" }],
              explanation: "Paragraph D records tea's first European role: a curiosity sold by apothecaries alongside other exotic drugs. Apothecaries were the early pharmacists, so the statement simply restates where the drink was first bought.",
            },
          },
          {
            text: "British households were quick to see the advantage of tea bags.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 5, quote: "British households dismissed bags as an American gimmick for decades" }],
              explanation: "Paragraph F says the opposite of quick acceptance: British households dismissed bags as an American gimmick for decades, and only in the 1960s did sales begin their long climb. Convenience, the writer notes, took time to convince.",
              trap: { family: "extreme-language", note: "'Quick' is the trap: the passage records decades of dismissal before sales began to climb in the 1960s." },
              whyWrong: ["TRUE: 'dismissed for decades' puts the acceptance a lifetime after the invention, not soon after it."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "infusion", partOfSpeech: "noun", definition: "a drink made by soaking leaves or herbs in hot water; the emperor's accidental infusion kept him alert." },
      { word: "decoction", partOfSpeech: "noun", definition: "a liquid extract made by boiling plant material, usually as medicine; what tea counted as before it became a pleasure." },
      { word: "austere", partOfSpeech: "adjective", definition: "severe and simple in style; the ceremony's austere ideals were fixed by Sen no Rikyu." },
      { word: "caddies", partOfSpeech: "noun (plural)", definition: "small containers, often lockable, for storing tea; early European tea was guarded in locked caddies." },
      { word: "clippers", partOfSpeech: "noun (plural)", definition: "fast sailing ships built for the tea trade; clippers and then steamships shortened the voyage from Asia." },
      { word: "prestige", partOfSpeech: "noun", definition: "status or standing in people's eyes; the standard tea bag has surrendered its prestige to coffee." },
    ],
    passageNote: "A history in seven scenes: legend (A), monastic China (B), Japan (C), Europe (D), empire (E), the bag (F), the modern split (G). The headings cover A–F; the verdict questions walk the whole chronology.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-trolleybuses",
    title: "The quiet return of the trolleybus",
    variant: "gt",
    section: 3,
    subject: "transport history",
    topic: "technology",
    difficulty: 4,
    estimatedMinutes: 17,
    objective: "Follow a forgotten vehicle's full arc: why cities wired their streets a century ago, why they tore the wires down, and why the clean, quiet hybrid is coming back.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "The quiet return of the trolleybus",
        paragraphs: [
          "A trolleybus looks like an ordinary bus and, most of the time, behaves like one: it runs on rubber tyres, stops at kerbs and weaves through traffic. The difference is overhead. Two poles rise from the roof and follow a pair of wires strung above the street, drawing electricity exactly as a tram does, but without rails. The vehicle is therefore a hybrid — a bus's freedom of movement married to a tram's clean, quiet power — and for half a century cities found that combination irresistible.",
          "The first trolleybus services appeared in the opening years of the twentieth century, and the idea spread quickly because it solved a specific problem of its day. Early petrol buses were smoky and unreliable, the electric batteries of the era were hopeless, and trams required expensive tracks set into the paving. Britain's systems grew steadily between the wars, and at their peak in the 1950s dozens of towns operated them, carrying millions of passengers a year on vehicles that were regarded as thoroughly modern.",
          "The collapse, when it came, was rapid and mostly economic. Diesel engines improved dramatically, and a diesel bus could be rerouted around roadworks overnight, whereas a trolleybus was tethered to its wires. Maintenance of the overhead network was a constant charge on the rates, and town planners, remodelling streets around the private car, came to see the poles and cables as visual clutter. Between the late 1950s and the early 1970s nearly every British system was scrapped, and the trolleybus joined the tram as an idea that progress was assumed to have finished off.",
          "Assumptions changed. Urban air pollution is now measured, mapped and litigated, and cities committed to cutting traffic fumes began to reconsider a vehicle that produces no exhaust at all in the street. A modern trolleybus is quieter than a diesel bus even at speed, its electric motors pull strongly on hills, and its energy can come from any source feeding the grid, including renewables, rather than from a fuel tank. A technology written off as obsolete had started to look prescient.",
          "The engineering has moved on as well. The weakness of the old design was absolute: no wires, no service. Newer vehicles carry substantial batteries that charge from the overhead lines while the bus runs beneath them, then glide for several kilometres off-wire through suburbs and housing estates where erecting poles would be costly and unwelcome. This in-motion charging lets a city wire only its trunk roads and still run electric service door to door — a compromise the 1950s could not have built.",
          "The case is not theoretical. Cities as varied as Zurich, Salzburg, Seattle and San Francisco kept their networks running through the diesel decades and have since invested in new fleets, while several Chinese metropolises operate systems on a scale that dwarfs anything Europe ever built. Where new trams are proposed, planners increasingly run the numbers and find that trolleybus wiring, installed for a fraction of the cost of track-laying and without years of street excavation, delivers most of the benefit.",
          "None of this makes the trolleybus an easy sell. Batteries keep improving, and a plain electric bus that needs no infrastructure at all may eventually undercut every wired system; the poles still strike some residents as untidy, and every route change means work at height for specialist crews. The honest summary is narrower: transport fashion has swung back towards electricity faster than batteries alone can carry it, and for the moment the old hybrid, part bus and part tram, is quietly proving its worth all over again.",
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
            { kind: "text", text: "The trolleybus, which runs on rubber tyres but draws power like a tram, receives its current through 1" },
            { kind: "blank", no: 1 },
            { kind: "text", text: " mounted on the roof. Early petrol buses were unreliable and the electric 2" },
            { kind: "blank", no: 2 },
            { kind: "text", text: " of the period were impractical, so the new system spread quickly. After the Second World War, improved 3" },
            { kind: "blank", no: 3 },
            { kind: "text", text: " buses, which could be rerouted at will, pushed the trolleybus into rapid decline. Modern vehicles can run for kilometres 4" },
            { kind: "blank", no: 4 },
            { kind: "text", text: ", on batteries that recharge beneath the wires, so a city needs to wire only its main roads. Because installing overhead lines avoids the 5" },
            { kind: "blank", no: 5 },
            { kind: "text", text: " of laying tram track, some planners now prefer the trolleybus for new electric networks." },
          ],
        ],
        blanks: [
          {
            no: 1,
            answer: "poles",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "Two poles rise from the roof and follow a pair of wires strung above the street" }],
              explanation: "Paragraph A explains the hardware: two poles rise from the roof and follow the wires strung above the street. The summary's 'receives its current through' points to those roof-mounted poles rather than to the wires themselves.",
            },
          },
          {
            no: 2,
            answer: "batteries",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "the electric batteries of the era were hopeless" }],
              explanation: "Paragraph B lists the two technologies the trolleybus sidestepped: smoky, unreliable petrol engines and the hopeless electric batteries of the era. The summary pairs the two problems, so 'batteries' completes the second one.",
            },
          },
          {
            no: 3,
            answer: "diesel",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "a diesel bus could be rerouted around roadworks overnight" }],
              explanation: "The decline paragraph names the rival: improved diesel buses that could be rerouted overnight while the trolleybus stayed tethered. The summary's 'which could be rerouted at will' recycles the passage's own test of flexibility.",
            },
          },
          {
            no: 4,
            answer: "off-wire",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 4, quote: "then glide for several kilometres off-wire through suburbs and housing estates" }],
              explanation: "Paragraph E's key term is the off-wire run: batteries charged under the lines carry the bus through suburbs where no poles exist. The hyphenated word is quoted exactly as the passage prints it, so copy it whole.",
            },
          },
          {
            no: 5,
            answer: "excavation",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "without years of street excavation" }],
              explanation: "Paragraph F compares costs: trolleybus wiring is installed for a fraction of track-laying and avoids years of street excavation. The summary's 'avoids the 5 of laying tram track' asks for exactly that noun.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "yes-no-not-given",
        label: "Questions 6–10",
        instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if it contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "Trolleybuses release no exhaust into the streets they serve.",
            answer: "YES",
            meta: {
              skills: ["opinion", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "a vehicle that produces no exhaust at all in the street" }],
              explanation: "Paragraph D is the writer's environmental case: the trolleybus produces no exhaust at all in the street, and its energy can come from renewables feeding the grid. The statement agrees with that claimed advantage.",
            },
          },
          {
            text: "According to the writer, Britain's trolleybuses vanished chiefly because passengers had stopped choosing them.",
            answer: "NO",
            lure: "NOT GIVEN",
            meta: {
              skills: ["opinion", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "The collapse, when it came, was rapid and mostly economic" }],
              explanation: "Paragraph C opens the decline story with the writer's own diagnosis: the collapse was rapid and mostly economic. Diesel competition, maintenance costs and planner fashion are the causes; passenger preference is never among them.",
              trap: { family: "boundary", note: "A cause is stated — an economic one — so a rival chief cause contradicts the writer rather than being absent." },
              whyWrong: ["NOT GIVEN: the writer does commit to a cause, 'mostly economic', so the information exists and it disagrees with the statement."],
            },
          },
          {
            text: "A modern trolleybus can complete part of its route with no connection to the wires.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "then glide for several kilometres off-wire through suburbs and housing estates" }],
              explanation: "Paragraph E describes in-motion charging: batteries take power from the lines and then carry the bus off-wire for kilometres through unwired suburbs. Completing part of the journey with no connection is exactly what the technology allows.",
            },
          },
          {
            text: "Some Chinese cities run trolleybus systems larger than any European one.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "several Chinese metropolises operate systems on a scale that dwarfs anything Europe ever built" }],
              explanation: "Paragraph F sets the surviving networks side by side: European cities kept and renewed theirs, while several Chinese metropolises run systems dwarfing anything Europe ever built. The statement scales that comparison into plain words.",
            },
          },
          {
            text: "The writer is confident that battery buses will soon make wired systems unnecessary.",
            answer: "NO",
            lure: "YES",
            meta: {
              skills: ["opinion", "inference"],
              evidence: [{ block: 0, paragraph: 6, quote: "a plain electric bus that needs no infrastructure at all may eventually undercut every wired system" }],
              explanation: "Paragraph G raises battery buses only as a possibility, hedged with 'may eventually', and closes by saying the hybrid is proving its worth for the moment. Both 'confident' and 'soon' overstate the writer's position.",
              trap: { family: "extreme-language", note: "'Confident' and 'soon' outrun 'may eventually' — the writer keeps the possibility hedged and the present verdict positive." },
              whyWrong: ["YES: the writer hedges with 'may eventually' and says the old hybrid is proving its worth for the moment."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "hybrid", partOfSpeech: "noun", definition: "something that mixes the features of two different things; the trolleybus is part bus, part tram." },
      { word: "clutter", partOfSpeech: "noun", definition: "a disorderly crowd of objects; planners came to see the poles and cables as visual clutter." },
      { word: "tethered", partOfSpeech: "adjective", definition: "tied to a fixed point and unable to roam; an old trolleybus was tethered to its wires." },
      { word: "obsolete", partOfSpeech: "adjective", definition: "no longer used because something newer exists; the technology was written off as obsolete." },
      { word: "prescient", partOfSpeech: "adjective", definition: "showing knowledge of the future; the discarded technology later looked prescient." },
      { word: "excavation", partOfSpeech: "noun", definition: "the digging away of earth or paving; wiring a street avoids years of excavation." },
    ],
    passageNote: "A revival story in seven paragraphs: the vehicle explained (A), its rise (B), its economic collapse (C), the new case for it (D), in-motion charging (E), living examples (F), and the writer's guarded verdict (G). The summary stitches A, B, C, E and F together.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-sandwich",
    title: "The story of the sandwich",
    variant: "gt",
    section: 3,
    subject: "food history",
    topic: "culture",
    difficulty: 3,
    estimatedMinutes: 15,
    objective: "Trace how a card player's convenience became the world's portable lunch: the accident of the name, the ancient precedents it disguised, and the food's spread through society and across continents.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "The story of the sandwich",
        paragraphs: [
          "Few foods are as familiar as two slices of bread with something pressed between them, and few have a name so accidentally preserved. The sandwich is called after John Montagu, the fourth Earl of Sandwich, an eighteenth-century English aristocrat who held high government office and gambled heavily. The story, first printed in a French travel book a few years after the event and probably polished along the way, is that in 1762 he refused to leave the gaming table for a meal and asked for salt beef between two pieces of toast, so that he could eat with one hand and keep his cards in the other.",
          "Historians of food are quick to point out that the Earl invented nothing but the name. People had been wrapping food in bread for thousands of years before him: ancient texts describe flatbreads folded around fillings in the Middle East, and a tradition going back to the Jewish scholar Hillel the Elder recalls lamb and bitter herbs pressed between bread at Passover. What the Earl's fashion achieved was to attach a permanent label to an ancient practice — and to make that practice fashionable among his own class almost overnight.",
          "In the London of the 1760s the sandwich became the supper of fashionable society. It was served in gambling rooms and coffee houses, praised for being tidy enough to eat without cutlery, and one celebrated historian of the age noted in his diary a late evening of writing sustained by 'a sandwich'. Gentlemen's clubs adopted it, cookery books recorded it, and within a generation the word had crossed the Channel into French.",
          "The nineteenth century changed the sandwich's social position. As factories and mines fixed the working day, labourers needed food that could be carried to work, eaten quickly and needed no fire to cook it; bread with cheese or cold meat answered exactly, and the sandwich drifted steadily down the social scale. Then came the technological push. Pre-sliced bread, first sold widely in the 1920s and 1930s, removed the daily chore of cutting a loaf by hand, and the sandwich became a staple of the lunch box and the picnic. In wealthier houses the same item reappeared, thin-crusted and delicate, on afternoon-tea trays.",
          "In the twentieth century the sandwich travelled the world. The Vietnamese banh mi tucks pickled vegetables and fresh herbs inside a short baguette, a legacy of French colonial rule; Mexico fills soft rolls with grilled meats to make the torta; Scandinavia turned the open sandwich into an art of the smorgasbord. In Britain and North America, diners and delicatessens built up local repertoires of their own, and from the 1980s shops began selling chilled, ready-made sandwiches in wedge-shaped boxes — an industry that now feeds millions of office workers every day.",
          "Its success has a cost. A ready-made sandwich is a perishable product, and the race to fill lunchtime shelves generates waste that retailers have only recently begun to measure; questions about packaging and surplus have followed the sandwich into the era of sustainability. Yet the underlying idea remains unbeaten. The Earl's late-night convenience survives as street food, comfort food and diet food at once — proof that the most durable recipes are not invented by chefs but by circumstances, and that a name, once attached to a simple pleasure, can outlive an earldom.",
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
          [{ kind: "text", text: "1. The modern sandwich is named after an eighteenth-century English " }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "2. In the famous story, the Earl wanted a meal he could eat while continuing to play " }, { kind: "blank", no: 2 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "3. The tradition of Hillel the Elder describes food eaten between bread at the festival of " }, { kind: "blank", no: 3 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "4. Widely sold from the 1920s, " }, { kind: "blank", no: 4 }, { kind: "text", text: " spared households the daily job of cutting a loaf by hand." }],
          [{ kind: "text", text: "5. The banh mi, a Vietnamese sandwich, is made in a short " }, { kind: "blank", no: 5 }, { kind: "text", text: " that dates from French colonial rule." }],
        ],
        blanks: [
          {
            no: 1,
            answer: "aristocrat",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "an eighteenth-century English aristocrat who held high government office" }],
              explanation: "Paragraph A introduces John Montagu, fourth Earl of Sandwich, as an eighteenth-century English aristocrat with high government office and a heavy gambling habit. The sentence reuses that phrase and asks for the noun at its centre.",
            },
          },
          {
            no: 2,
            answer: "cards",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 0, quote: "so that he could eat with one hand and keep his cards in the other" }],
              explanation: "The famous story has the Earl eating with one hand and holding his cards in the other, so the meal had to suit the game in progress. The missing noun is what the second hand was protecting.",
            },
          },
          {
            no: 3,
            answer: "Passover",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "lamb and bitter herbs pressed between bread at Passover" }],
              explanation: "Paragraph B's older precedent is the tradition of Hillel the Elder: lamb and bitter herbs pressed between bread at Passover, centuries before the Earl gave the idea a fashionable name. The festival is named directly.",
            },
          },
          {
            no: 4,
            answer: "pre-sliced bread",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "Pre-sliced bread, first sold widely in the 1920s and 1930s, removed the daily chore of cutting a loaf by hand" }],
              explanation: "Paragraph D names the technological push: pre-sliced bread sold widely from the 1920s removed the daily chore of cutting a loaf by hand. The sentence reverses the grammar — the bread spares households the chore — but the answer is the same term.",
            },
          },
          {
            no: 5,
            answer: "baguette",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "tucks pickled vegetables and fresh herbs inside a short baguette, a legacy of French colonial rule" }],
              explanation: "Paragraph E's Vietnamese example sets pickled vegetables and fresh herbs inside a short baguette, the bread left behind by French colonial rule. The sentence asks for that bread by its French name.",
            },
          },
        ],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 6–10",
        instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if it contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "The story of the Earl's card game may have been improved in the telling.",
            answer: "TRUE",
            meta: {
              skills: ["inference", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "first printed in a French travel book a few years after the event and probably polished along the way" }],
              explanation: "Paragraph A warns that the story was first printed in a French travel book years after the event and probably polished along the way. 'Improved in the telling' is a fair paraphrase of that polishing, so the statement agrees.",
            },
          },
          {
            text: "Eating bread with a filling was a new idea in eighteenth-century England.",
            answer: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "People had been wrapping food in bread for thousands of years before him" }],
              explanation: "Paragraph B insists the Earl invented nothing but the name: bread around food was already thousands of years old, from Middle Eastern flatbreads to Hillel's Passover tradition. 'A new idea' contradicts that history head-on.",
            },
          },
          {
            text: "The Earl ate sandwiches at the gaming table every evening.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 0, quote: "he refused to leave the gaming table for a meal and asked for salt beef between two pieces of toast" }],
              explanation: "Paragraph A records a single famous episode: salt beef between toast so the Earl could keep playing. It says nothing about how often he ate this way, so 'every evening' is unsupported in either direction.",
              trap: { family: "boundary", note: "One famous episode is recorded; how often he repeated it is simply not in the text." },
              whyWrong: ["FALSE: the passage never denies other evenings — it stays silent about the habit's frequency."],
            },
          },
          {
            text: "Nineteenth-century workers valued sandwiches because they could be eaten without cooking.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "labourers needed food that could be carried to work, eaten quickly and needed no fire to cook it" }],
              explanation: "Paragraph D lists exactly what the industrial worker needed: food that could be carried, eaten quickly and cooked without fire. Bread with cheese or cold meat met the brief, which is precisely the statement's claim.",
            },
          },
          {
            text: "The word 'sandwich' entered the French language within roughly a generation of the famous meal.",
            answer: "TRUE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "within a generation the word had crossed the Channel into French" }],
              explanation: "Paragraph C closes with the word crossing the Channel into French within a generation. The famous meal was in 1762, so 'within roughly a generation' matches the passage's own timing of the borrowing.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "aristocrat", partOfSpeech: "noun", definition: "a member of the highest social class; the Earl of Sandwich was an eighteenth-century aristocrat." },
      { word: "cutlery", partOfSpeech: "noun", definition: "knives, forks and spoons used for eating; the sandwich was praised for needing no cutlery." },
      { word: "chore", partOfSpeech: "noun", definition: "a routine piece of domestic work; slicing a loaf by hand was a daily chore." },
      { word: "smorgasbord", partOfSpeech: "noun", definition: "a Scandinavian buffet of open sandwiches and other small dishes." },
      { word: "perishable", partOfSpeech: "adjective", definition: "likely to decay or spoil quickly; a ready-made sandwich is a perishable product." },
    ],
    passageNote: "A name-history in six paragraphs: the legend (A), the older precedents (B), fashionable London (C), the industrial descent (D), global travel (E) and the modern cost (F). The completions pull one answer each from A, B, D and E; the verdict questions test paraphrase and restraint.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-bookshops",
    title: "Second-hand bookshops",
    variant: "gt",
    section: 3,
    subject: "retail culture",
    topic: "culture",
    difficulty: 4,
    estimatedMinutes: 16,
    objective: "Read a portrait of a trade: how second-hand shops are stocked and priced, the expertise behind the counter, the internet's double effect, and why browsing itself became the product.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "Second-hand bookshops",
        paragraphs: [
          "Every second-hand bookshop is a quiet argument with the internet. Nothing about the place is efficient: the stock is unrepeatable, the ordering follows a private logic, and the price pencilled inside the cover may owe more to a previous owner's enthusiasm than to any market. Yet people keep coming, and not only for the bargains. What the shop offers, and no search engine can, is friction — the hours of looking, the unreadable spines, the discovery of a book you did not know you wanted, which is a different pleasure from finding the one you did.",
          "The trade runs on a supply chain invisible from the street. Most shops acquire their stock in three ways: from customers trading in old books for credit, from house clearances after a death or a move, and from auctions and other dealers. Because every copy is different, pricing is a craft judgement in which condition, scarcity and current demand are weighed together, which is why a shelf may hold two identical novels at two different prices. Nothing is remaindered, nothing is returned to a publisher; a book that does not sell simply waits.",
          "Behind the counter sits the knowledge that keeps the system honest. A good bookseller can date a printing from its cover typography, spot a forged signature and tell a true first edition from the book-club reprint that copies it. Personal inscriptions cut both ways: a warm note in a famous hand can multiply an asking price, while an ordinary gift dedication is, oddly enough, part of the charm buyers pay for. Provenance — the record of who has owned a copy — is the invisible thread that ties a second-hand book to the wider world.",
          "The internet, which was supposed to finish the trade off, has become its strangest ally instead. Online marketplaces let a shop in a small town sell a rare volume to a collector on another continent, and many dealers now post out more books than they sell across the counter. The same platforms, though, have flattened the market for ordinary books, whose prices now compete with thousands of near-identical copies; some shops have closed for exactly that reason, and others survive by specialising in what the algorithms cannot easily supply.",
          "Meanwhile the shops themselves have become destinations. Book towns — small communities where bookshops cluster — draw visitors who spend a whole weekend browsing, and city independents report that younger customers, raised on screens, arrive for the experience of slow searching. The comparison with vinyl records is often made: an obsolete format revived not despite its inconvenience but because of it. Nobody expects the sector to return to its mid-century size, but the survivors have realised that scarcity, of both books and quiet places, is now the product.",
          "The trade has also, and quietly, become a model of reuse. A second-hand book may pass through several owners before it is too worn to sell, and every resale defers the paper, ink and transport of a new copy — a small environmental credit that adds up across millions of transactions. The industry's real problem is not demand but the retirement of its dealers: many owners are reaching the end of their careers with nobody to buy the shop, and what happens to those accumulated tonnes of volumes may decide whether the second-hand bookshop remains a street presence or becomes a museum exhibit.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-headings",
        label: "Questions 1–5",
        instruction: "Choose the correct heading for paragraphs A–E from the list of headings below. Write the correct number, i–vi, next to each paragraph.",
        extraOption: true,
        reuseNote: "There are more headings than paragraphs, so you will not use them all.",
        items: [
          {
            text: "Paragraph A",
            correct: 0,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "the discovery of a book you did not know you wanted, which is a different pleasure from finding the one you did" }],
              explanation: "Paragraph A argues that the shop's inefficiency is the point: hours of looking and the discovery of books you did not know you wanted. Heading i turns that friction into praise for slow, aimless browsing.",
            },
          },
          {
            text: "Paragraph B",
            correct: 1,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "Most shops acquire their stock in three ways" }],
              explanation: "Paragraph B is pure supply chain: customer trade-ins, house clearances and auctions, followed by the craft of pricing each unrepeatable copy. Heading ii is the plain description of that sourcing.",
            },
          },
          {
            text: "Paragraph C",
            correct: 2,
            meta: {
              skills: ["skimming", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "spot a forged signature and tell a true first edition from the book-club reprint that copies it" }],
              explanation: "Paragraph C is the counter expertise: dating printings from typography, spotting forgeries, weighing inscriptions and provenance. Heading iii collects the copies, signatures and histories the bookseller judges.",
            },
          },
          {
            text: "Paragraph D",
            correct: 3,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "The internet, which was supposed to finish the trade off, has become its strangest ally instead" }],
              explanation: "Paragraph D's paradox is the heading's whole job: the internet that should have killed the trade now sells rare volumes worldwide even as it flattens ordinary prices. A rival turned lifeline compresses that reversal.",
            },
          },
          {
            text: "Paragraph E",
            correct: 4,
            meta: {
              skills: ["skimming", "paraphrase"],
              evidence: [{ block: 0, paragraph: 4, quote: "Book towns — small communities where bookshops cluster — draw visitors who spend a whole weekend browsing" }],
              explanation: "Paragraph E is the experience economy: book towns, weekend browsers and the vinyl comparison. Heading v frames the shops as destinations for a day out rather than as ordinary retail outlets.",
            },
          },
        ],
        options: [
          "In praise of slow, aimless browsing",
          "Where the stock comes from",
          "Judging copies, signatures and histories",
          "A rival that became a lifeline",
          "Shops as destinations for a day out",
          "The struggle to pay rising rents",
        ],
      },
      {
        id: "q2",
        type: "multiple-choice",
        label: "Questions 6–8",
        instruction: "Choose the correct letter, A, B, C or D.",
        items: [
          {
            stem: "What point does the writer make in the first paragraph?",
            options: [
              "Second-hand bookshops are always cheaper than online sellers.",
              "Their appeal lies in discoveries that searching cannot deliver.",
              "Their stock is better organised than it first appears.",
              "They survive because customers distrust online descriptions.",
            ],
            correct: 1,
            lure: 0,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "What the shop offers, and no search engine can, is friction" }],
              explanation: "Paragraph A's thesis is friction: the shop offers hours of looking and the discovery of books you did not know you wanted, which no search engine can supply. That is the writer's point, and option B states it plainly.",
              trap: { family: "mention-lure", note: "Option A's bargains appear in the paragraph — as the reason the writer immediately plays down with 'not only for the bargains'." },
              whyWrong: [
                "A: the writer concedes people come 'not only for the bargains', so price is not the argument.",
                "C: the ordering is described as private logic, never praised as organised.",
                "D: nothing in the paragraph says customers distrust online descriptions.",
              ],
            },
          },
          {
            stem: "According to the passage, the price of a second-hand book mainly reflects",
            options: [
              "its condition, scarcity and current demand.",
              "the fame of its previous owner.",
              "the figure pencilled inside its cover.",
              "the cost of storing it until it sells.",
            ],
            correct: 0,
            lure: 1,
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "pricing is a craft judgement in which condition, scarcity and current demand are weighed together" }],
              explanation: "Paragraph B defines pricing as a craft judgement weighing condition, scarcity and current demand — option A's three nouns. A famous hand can multiply a price, but that is the exception the judgement weighs, not its everyday basis.",
              whyWrong: [
                "B: a famous inscription can raise an asking price, but the passage treats it as a special case inside the judgement.",
                "C: the pencilled figure is the asking price itself, not what the price is based on.",
                "D: storage costs are never mentioned anywhere in the passage.",
              ],
            },
          },
          {
            stem: "What does the writer conclude about online marketplaces?",
            options: [
              "They have made rare books almost impossible to sell.",
              "They have damaged some shops while helping others.",
              "They will replace physical shops within ten years.",
              "They work only for dealers who specialise.",
            ],
            correct: 1,
            lure: 3,
            meta: {
              skills: ["inference", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "some shops have closed for exactly that reason, and others survive by specialising" }],
              explanation: "Paragraph D holds both halves: the platforms flatten prices so badly that some shops close, yet they let others sell rare volumes worldwide and survive by specialising. Damage and lifeline together is exactly option B.",
              whyWrong: [
                "A: the passage says the opposite — rare volumes now sell across continents.",
                "C: no timescale for replacement is given anywhere in the passage.",
                "D: specialising is one survival strategy among sellers, not a condition of using the platforms.",
              ],
            },
          },
        ],
      },
      {
        id: "q3",
        type: "sentence-completion",
        label: "Questions 9–10",
        instruction: "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        wordLimit: 2,
        layout: [
          [{ kind: "text", text: "9. An inscription written in a famous person's hand can greatly raise a book's " }, { kind: "blank", no: 9 }, { kind: "text", text: "." }],
          [{ kind: "text", text: "10. Every time a second-hand book is resold, the environmental cost of producing a " }, { kind: "blank", no: 10 }, { kind: "text", text: " is postponed." }],
        ],
        blanks: [
          {
            no: 9,
            answer: "asking price",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "a warm note in a famous hand can multiply an asking price" }],
              explanation: "Paragraph C explains how inscriptions cut both ways: a note in a famous hand can multiply an asking price, while an ordinary dedication adds charm. The sentence asks for the noun that the famous hand raises.",
            },
          },
          {
            no: 10,
            answer: "new copy",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "every resale defers the paper, ink and transport of a new copy" }],
              explanation: "Paragraph F's green arithmetic says every resale defers the paper, ink and transport of a new copy. The sentence recasts 'defers' as 'is postponed' and asks for the thing whose production is delayed.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "friction", partOfSpeech: "noun", definition: "effort that slows a process down; the shop's friction is the hours of browsing itself." },
      { word: "clearances", partOfSpeech: "noun (plural)", definition: "the emptying of a house's contents, usually after a death or a move; one source of stock." },
      { word: "remaindered", partOfSpeech: "verb (past participle)", definition: "sold off cheaply by a publisher when a title stops moving; second-hand shops remainder nothing." },
      { word: "typography", partOfSpeech: "noun", definition: "the design and arrangement of printed type; a bookseller dates a printing from its cover typography." },
      { word: "provenance", partOfSpeech: "noun", definition: "the record of where an object has been and who has owned it; provenance ties a copy to the wider world." },
      { word: "specialising", partOfSpeech: "verb (present participle)", definition: "concentrating on a narrow field of stock; one way shops survive the online marketplaces." },
    ],
    passageNote: "Six paragraphs: the shop's appeal (A), the supply chain (B), the bookseller's expertise (C), the internet paradox (D), destination shopping (E), and reuse plus succession (F). The headings cover A–E; the choice questions sit in A, B and D; the two sentences pull from C and F.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-canals",
    title: "The canals that carried a revolution",
    variant: "gt",
    section: 3,
    subject: "industrial history",
    topic: "history",
    difficulty: 5,
    estimatedMinutes: 19,
    objective: "Read the rise and fall of Britain's first artificial waterways: the duke's bargain that started the mania, the engineering and labour behind it, the railways that undid it, and the leisure age that saved it.",
    intro: "Read the passage below and answer Questions 1–11.",
    blocks: [
      {
        heading: "The canals that carried a revolution",
        paragraphs: [
          "Long before the industrial revolution, canals were instruments of empire and agriculture rather than commerce. The rulers of ancient China linked their great rivers with artificial waterways on a scale Europe would not match for a thousand years, and the merchant cities of the Netherlands moved their goods by dug water as a matter of course. Britain, late and mountainous, contented itself with improving its rivers: Parliament passed acts that gave local trustees powers to straighten bends, deepen channels and charge tolls, and the resulting river navigations carried coal and corn for a century before anyone dug a canal proper.",
          "The canal age began with a duke's grievance. Francis Egerton, third Duke of Bridgewater, owned coalmines at Worsley whose output was crippled by the cost of carrying coal to Manchester by packhorse, and in the 1760s he employed the engineer James Brindley to cut a waterway directly between the two. The Bridgewater Canal, opened in 1761, cut the price of coal in Manchester almost by half; the town's mills and fireplaces converted, and the investing public took note. Within a generation, companies were raising money to dig canals to almost every industrial district in the country, in a burst of speculation that contemporaries were already calling canal mania.",
          "The engineering that made this possible was a system of steps and level crossings. Where the land rose, flights of locks lifted boats from one level to the next; where a valley intervened, masonry aqueducts carried the channel across it in the air; where a hill refused to move, boatmen legged their craft through miles of dark tunnel. Power came from a single horse, which could tow perhaps thirty times more weight along still water than the same animal could haul over rutted roads in a cart. Speed was modest — a slow walking pace — but for heavy, patient cargo such as coal, stone and timber, cheapness beat hurry every time.",
          "The human cost was paid by the navigators, or navvies, the armies of labourers who dug the channels with spade, barrow and gunpowder. They lived in camps that followed the works from hill to hill, were paid by the yard dug, and earned a reputation for strength and disorder that fed a whole literature of alarm. What is not in dispute is their productivity: several thousand kilometres of artificial waterway were cut in little more than half a century, nearly all of it by hand.",
          "The railways ended the monopoly almost as quickly as it had been built. From the 1830s locomotives hauled freight at speeds no horse could match, and canal companies, unable to compete on time, slashed their tolls instead — a price war that kept some goods moving on the water but stripped the companies of the money needed to maintain locks and banks. Traffic drifted away, investment stopped, and by the early twentieth century many waterways had silted up or been abandoned outright. A rump of the network survived on bulk freight until nationalisation in 1948 gathered the remnants into public hands.",
          "The second life arrived by accident. Faced with a network it could neither sell nor afford to fill in, post-war Britain allowed the canals to be reimagined as leisure: hired narrow boats, angling clubs, towpath walking and, eventually, waterside flats in the regenerated quarters of Birmingham and Manchester. Volunteers spent decades dredging channels and rebuilding locks that no accountant could have justified, and the restored waterways became at once a wildlife corridor through the city and an open-air museum of the industrial revolution.",
          "Today the freight is nearly all gone, kept alive on a handful of waterways by a few stubborn operators, yet the network itself has never been busier as public space. The duke's bargain has inverted itself: channels dug to make coal cheap now make cities pleasant, and the slowest transport technology in the country has become one of its best loved. Not every relic of the industrial revolution manages that trick, and fewer still manage it without a plan.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "yes-no-not-given",
        label: "Questions 1–5",
        instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if it contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
        statements: [
          {
            text: "The Bridgewater Canal made coal significantly cheaper in Manchester.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "cut the price of coal in Manchester almost by half" }],
              explanation: "Paragraph B gives the canal's headline result: the price of coal in Manchester fell almost by half once Brindley's waterway replaced the packhorse. 'Significantly cheaper' is a fair summary of a near-halving, so the statement agrees.",
            },
          },
          {
            text: "The burst of canal building known as canal mania was directed by the government.",
            answer: "NO",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 1, quote: "companies were raising money to dig canals to almost every industrial district in the country, in a burst of speculation" }],
              explanation: "Paragraph B attributes the mania to companies raising money in a burst of speculation, inspired by one duke's returns. It was private investment chasing profit, not a state programme, so the statement contradicts the writer.",
              trap: { family: "paraphrase-gap", note: "The statement borrows the passage's own phrase while quietly replacing private speculation with government direction." },
              whyWrong: ["NOT GIVEN: the passage does name the actors — private companies raising money in a speculative burst — so the claim is contradicted, not merely absent."],
            },
          },
          {
            text: "A horse could pull far heavier loads on a canal than on the roads of the period.",
            answer: "YES",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "could tow perhaps thirty times more weight along still water than the same animal could haul over rutted roads in a cart" }],
              explanation: "Paragraph C quantifies the canal's advantage: perhaps thirty times more weight along still water than over rutted roads in a cart. A thirty-fold difference is 'far heavier', so the statement agrees with the passage's arithmetic.",
            },
          },
          {
            text: "The navvies relied mainly on earth-moving machinery.",
            answer: "NO",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 3, quote: "the armies of labourers who dug the channels with spade, barrow and gunpowder" }],
              explanation: "Paragraph D describes digging by hand: spade, barrow and gunpowder, with nearly all of the waterway cut manually. Machinery is entirely absent from the description, so the statement contradicts the passage.",
            },
          },
          {
            text: "Railway companies bought most of the canals after 1948.",
            answer: "NOT GIVEN",
            lure: "NO",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "nationalisation in 1948 gathered the remnants into public hands" }],
              explanation: "Paragraph E says nationalisation in 1948 gathered the remnants into public hands. It never mentions canals being bought by railway companies, so the statement is neither confirmed nor denied by the text.",
              trap: { family: "boundary", note: "1948 appears with a real event — nationalisation into public hands — which is neither purchase by railway companies nor evidence against it." },
              whyWrong: ["NO: the passage records public ownership, not who bought what; railway companies appear only as competitors earlier in the paragraph."],
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
            { kind: "text", text: "The Duke of Bridgewater built his canal to carry cheap 6" },
            { kind: "blank", no: 6 },
            { kind: "text", text: " from his mines to Manchester, and its success cut the fuel's price in the town almost by 7" },
            { kind: "blank", no: 7 },
            { kind: "text", text: ". Canal boats were towed by a single 8" },
            { kind: "blank", no: 8 },
            { kind: "text", text: ", which could shift vastly heavier loads on water than on road. The channels were dug mostly by hand by labourers known as 9" },
            { kind: "blank", no: 9 },
            { kind: "text", text: ", and when railways took the fast freight, canal companies cut their 10" },
            { kind: "blank", no: 10 },
            { kind: "text", text: " to compete. The network decayed until it passed into public ownership in 1948, and today its cargo is mostly 11" },
            { kind: "blank", no: 11 },
            { kind: "text", text: ", which has quietly restored the waterways' fortunes." },
          ],
        ],
        blanks: [
          {
            no: 6,
            answer: "coal",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "owned coalmines at Worsley whose output was crippled by the cost of carrying coal to Manchester by packhorse" }],
              explanation: "Paragraph B explains the duke's motive: mines at Worsley whose coal was crippled by packhorse costs. The summary's 'from his mines to Manchester' points to the cargo the whole canal was built to carry.",
            },
          },
          {
            no: 7,
            answer: "half",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "cut the price of coal in Manchester almost by half" }],
              explanation: "The canal's celebrated result was price: coal in Manchester fell almost by half. The summary reuses the passage's own phrase, so the missing word is the fraction at the end of it.",
            },
          },
          {
            no: 8,
            answer: "horse",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 2, quote: "Power came from a single horse, which could tow perhaps thirty times more weight" }],
              explanation: "Paragraph C names the canal's engine: a single horse towing perhaps thirty times more weight than the same animal could haul on the road. The summary asks for that animal in one word.",
            },
          },
          {
            no: 9,
            answer: "navvies",
            meta: {
              skills: ["scanning", "vocabulary"],
              evidence: [{ block: 0, paragraph: 3, quote: "The human cost was paid by the navigators, or navvies" }],
              explanation: "Paragraph D names the workforce twice — the navigators, or navvies — and then describes their spades and camps. The one-word answer is the nickname that survives in the language.",
            },
          },
          {
            no: 10,
            answer: "tolls",
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 4, quote: "canal companies, unable to compete on time, slashed their tolls instead" }],
              explanation: "Paragraph E records the price war: unable to match railway speeds, canal companies slashed their tolls to keep goods moving. The summary asks for the charges that were cut.",
            },
          },
          {
            no: 11,
            answer: "leisure",
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "post-war Britain allowed the canals to be reimagined as leisure" }],
              explanation: "Paragraph F names the canals' second cargo: they were reimagined as leisure, with hired boats, angling clubs and towpath walking. The summary's 'its cargo is mostly' asks for exactly that word.",
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "tolls", partOfSpeech: "noun (plural)", definition: "charges paid for using a road or waterway; trustees and canal companies both charged tolls." },
      { word: "packhorse", partOfSpeech: "noun", definition: "a horse trained to carry goods on its back; the slow, expensive rival of the canal barge." },
      { word: "aqueducts", partOfSpeech: "noun (plural)", definition: "bridges that carry a waterway across a valley; masonry aqueducts crossed the gaps in the air." },
      { word: "navvies", partOfSpeech: "noun (plural)", definition: "the labourers who dug the canals and later the railways; short for 'navigators'." },
      { word: "silted", partOfSpeech: "verb (past)", definition: "became blocked with mud carried by the water; neglected waterways silted up." },
      { word: "towpath", partOfSpeech: "noun", definition: "the path beside a canal along which horses towed boats; now walked for pleasure." },
    ],
    passageNote: "The densest passage in this batch: seven paragraphs from Chinese and Dutch precedent (A) through the Bridgewater Canal (B), locks and aqueducts (C), the navvies (D), railway competition and nationalisation (E), the leisure revival (F), to the inverted bargain (G). The verdict questions test B–E; the summary stitches B, C, D, E and F.",
    source: READING_BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-rb-gt-instant-coffee",
    title: "The story of instant coffee",
    variant: "gt",
    section: 3,
    subject: "food industry",
    topic: "economics",
    difficulty: 4,
    estimatedMinutes: 17,
    objective: "Read the economics inside a jar: how soluble coffee was invented, how a Brazilian surplus built a global brand, why the cheap bean set the price, and how the industry fights the taste hierarchy.",
    intro: "Read the passage below and answer Questions 1–10.",
    blocks: [
      {
        heading: "The story of instant coffee",
        paragraphs: [
          "It is easy to mock instant coffee, and coffee enthusiasts usually do, yet the powder in the jar represents a genuine technical achievement: the character of a freshly brewed drink, reduced to granules that a kettle and a spoon can bring back to life in seconds. Two factory methods dominate. In spray-drying, a fine mist of concentrated coffee is fired into hot air, which flashes the water away and drops a powder almost instantly — cheap, but hard on the aroma. Freeze-drying freezes the concentrate into slabs, breaks them into grains and then removes the ice under vacuum, a gentler process that protects more of the flavour and costs correspondingly more.",
          "The idea is older than the jar. Concentrated 'cake' coffees were sold as travel rations in the nineteenth century, and the soluble powder usually credited with starting the modern industry was created by Satori Kato, a Japanese-American chemist, around 1901, and served at an American exposition soon afterwards. The United States Army saw the logistical appeal at once, and rations of soluble coffee issued through two world wars taught millions of servicemen the habit — a marketing campaign no company could have bought.",
          "The first mass-market triumph, though, was engineered to solve a farm problem rather than a battlefield one. In the 1930s Brazil's plantations were producing far more coffee than the world could drink, and prices had collapsed. The country's coffee institute asked the Swiss firm Nestlé to develop a product that could turn surplus beans into something storable, and the result, launched in 1938 as Nescafé, put Brazilian coffee into a jar that, helped by wartime demand, became an ordinary purchase across Europe and far beyond.",
          "The economics of the cup explain the industry's structure. Instant coffee is generally made from robusta beans, which yield more per hectare, resist disease better and cost less than the aromatic arabica favoured for fresh brewing. For most of the product's history the priority has been a jar cheap enough for daily use, cup after cup; advertising therefore sold convenience and consistency — the same taste every morning — rather than origin or craft, and the sector became a contest between a few enormous brands whose margins lived on volume.",
          "From the 1950s, however, the taste hierarchy reasserted itself. Espresso bars spread out from Italy, the American chains followed, and by the 1990s the high-street coffee shop had turned freshly ground coffee into a public ritual in city after city. Instant coffee slid downmarket wherever those chains conquered — yet it never fell as far as forecast. In several countries, Britain among them, it has kept the largest share of the cups drunk at home, and across much of Asia and Eastern Europe it remained for decades the standard form of the drink.",
          "The industry's response to the snobbery has been to borrow its rival's clothes. Producers now grind roasted beans extremely fine and blend the powder into the granules, so that a spoonful of microground coffee carries some of the fresh cup's aroma; premium ranges are freeze-dried from arabica, stamped with single-origin names and wrapped in packaging that imitates the craft roaster. Blind tastings occasionally embarrass the purists, though the enthusiast's counter-argument — that instant cannot reproduce the crema of a true espresso — remains fair.",
          "The larger picture is one of stubborn scale. Soluble coffee still accounts for a large minority of all the coffee drunk worldwide, by some estimates approaching a third, because it answers the demand of households and workplaces that want caffeine without ceremony, equipment or waste. Its history suggests a lesson the food industry keeps relearning: convenience is not a compromise everyone resents. The jar on the shelf is not the best cup of coffee ever made; it is simply, for most of the world, the one that fits.",
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        type: "matching-information",
        label: "Questions 1–5",
        instruction: "The passage has seven paragraphs, A–G. Which paragraph contains the following information? Write the correct letter, A–G. You may use any letter more than once.",
        reuseNote: "You may use any letter more than once.",
        items: [
          {
            text: "a drying process that preserves more of the coffee's flavour",
            correct: 0,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "a gentler process that protects more of the flavour" }],
              explanation: "Paragraph A contrasts the two factory methods, and freeze-drying is the gentler one that protects more of the flavour. 'Preserves' paraphrases 'protects', so the information sits in paragraph A.",
            },
          },
          {
            text: "the part played by military rations in spreading the habit",
            correct: 1,
            lure: 2,
            meta: {
              skills: ["scanning", "detail"],
              evidence: [{ block: 0, paragraph: 1, quote: "rations of soluble coffee issued through two world wars taught millions of servicemen the habit" }],
              explanation: "Paragraph B gives the military story: army rations of soluble coffee issued through two world wars taught millions of servicemen the habit. The item's 'military rations' scans directly onto that sentence.",
              trap: { family: "mention-lure", note: "Paragraph C also mentions wartime demand, but only as a boost to Nescafé's sales — the rations themselves belong to paragraph B." },
            },
          },
          {
            text: "a problem of over-production that led to a new product",
            correct: 2,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Brazil's plantations were producing far more coffee than the world could drink" }],
              explanation: "Paragraph C opens with the glut: Brazil's plantations produced far more coffee than the world could drink, so the coffee institute asked Nestlé for a storable product. Over-production and the resulting product both live in paragraph C.",
            },
          },
          {
            text: "the bean variety chosen mainly for economy",
            correct: 3,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 3, quote: "robusta beans, which yield more per hectare, resist disease better and cost less" }],
              explanation: "Paragraph D explains the industry's bean economics: robusta yields more per hectare, resists disease better and costs less than aromatic arabica. A variety chosen for cheapness is exactly robusta, so the answer is D.",
            },
          },
          {
            text: "an attempt to give instant coffee the aroma of the fresh version",
            correct: 5,
            meta: {
              skills: ["scanning", "paraphrase"],
              evidence: [{ block: 0, paragraph: 5, quote: "a spoonful of microground coffee carries some of the fresh cup's aroma" }],
              explanation: "Paragraph F describes microground coffee blended into the granules so that a spoonful carries some of the fresh cup's aroma. Borrowing the fresh aroma is precisely the attempt the item describes, so the answer is F.",
            },
          },
        ],
        options: ["A", "B", "C", "D", "E", "F", "G"],
      },
      {
        id: "q2",
        type: "true-false-not-given",
        label: "Questions 6–10",
        instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if it contradicts the information, or NOT GIVEN if there is no information on this.",
        statements: [
          {
            text: "Instant coffee is made by removing the water from liquid coffee.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 0, quote: "a fine mist of concentrated coffee is fired into hot air, which flashes the water away" }],
              explanation: "Paragraph A's two methods are both dehydration: spray-drying flashes the water away from a fine mist, and freeze-drying removes the ice under vacuum. Removing water from liquid coffee is the shared principle, so the statement is true.",
            },
          },
          {
            text: "The first modern soluble coffee was developed in Switzerland.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 1, quote: "the soluble powder usually credited with starting the modern industry was created by Satori Kato, a Japanese-American chemist" }],
              explanation: "Paragraph B credits the modern industry's start to Satori Kato, a Japanese-American chemist, around 1901. Switzerland enters only in paragraph C, when the Swiss firm Nestlé developed Nescafé in the 1930s, so the statement contradicts the sequence.",
              trap: { family: "mention-lure", note: "Switzerland does appear in the passage — attached to Nestlé in paragraph C, a generation after Kato's powder." },
              whyWrong: ["TRUE: the Swiss connection is real but late; Kato's powder was an American development of 1901."],
            },
          },
          {
            text: "Instant coffee contains less caffeine than coffee brewed from fresh grounds.",
            answer: "NOT GIVEN",
            lure: "FALSE",
            meta: {
              skills: ["inference", "detail"],
              evidence: [{ block: 0, paragraph: 6, quote: "households and workplaces that want caffeine without ceremony" }],
              explanation: "The passage mentions caffeine only as what households and workplaces want from the jar. It never compares caffeine levels between instant and fresh coffee, so the statement is neither confirmed nor contradicted.",
              trap: { family: "boundary", note: "Caffeine is mentioned as the reason people drink soluble coffee; the passage never compares caffeine content between forms." },
              whyWrong: ["FALSE: nothing in the passage denies the claim either — the comparison is simply never made."],
            },
          },
          {
            text: "In the 1930s, Brazil was growing more coffee than the market could absorb.",
            answer: "TRUE",
            meta: {
              skills: ["detail", "paraphrase"],
              evidence: [{ block: 0, paragraph: 2, quote: "Brazil's plantations were producing far more coffee than the world could drink, and prices had collapsed" }],
              explanation: "Paragraph C states the glut plainly: Brazil produced far more coffee than the world could drink, and prices collapsed. 'More than the market could absorb' paraphrases that surplus, so the statement agrees.",
            },
          },
          {
            text: "Fresh coffee has now replaced instant coffee in British homes.",
            answer: "FALSE",
            lure: "TRUE",
            meta: {
              skills: ["detail", "inference"],
              evidence: [{ block: 0, paragraph: 4, quote: "In several countries, Britain among them, it has kept the largest share of the cups drunk at home" }],
              explanation: "Paragraph E says the opposite of replacement: in several countries, Britain among them, instant coffee has kept the largest share of the cups drunk at home. Fresh coffee conquered the high street, not the British kitchen.",
              trap: { family: "extreme-language", note: "'Now replaced' claims a completed takeover that the passage denies — instant still holds the largest home share in Britain." },
              whyWrong: ["TRUE: the passage names Britain as a country where instant has kept the largest share of home cups."],
            },
          },
        ],
      },
    ],
    glossary: [
      { word: "granules", partOfSpeech: "noun (plural)", definition: "small hard grains; instant coffee is sold as granules that a kettle brings back to life." },
      { word: "soluble", partOfSpeech: "adjective", definition: "able to be dissolved in a liquid; soluble powder was the industry's founding product." },
      { word: "rations", partOfSpeech: "noun (plural)", definition: "fixed supplies of food issued to soldiers; army rations spread the taste for instant coffee." },
      { word: "surplus", partOfSpeech: "noun", definition: "an amount left over beyond what is needed; Brazil's surplus needed a storable form." },
      { word: "hectare", partOfSpeech: "noun", definition: "a unit of land area of 10,000 square metres; robusta yields more beans per hectare." },
      { word: "crema", partOfSpeech: "noun", definition: "the pale golden foam on a well-made espresso; the one thing instant cannot reproduce." },
    ],
    passageNote: "Seven paragraphs: the two drying methods (A), military origins (B), the Brazilian-Nestlé story (C), the economics of robusta (D), the fresh-coffee challenge (E), premium counter-attacks (F) and the global picture (G). The information-matching items span A, B, C, D and F; the verdict questions walk the same arc.",
    source: READING_BANK_SOURCE_NOTE,
  },
];
