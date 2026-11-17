/**
 * General Training text library J (PROMPT 54 question-bank expansion).
 *
 * GT batch J — Section 3 general-interest articles: six longer magazine-style
 * passages, each written to the official Section 3 shape and carrying the
 * taught question-type mix of the real test:
 *
 *   ielts-rb-gt-lidos          — leisure history,    topic: health,      d4
 *   ielts-rb-gt-postal         — social history,     topic: history,     d5
 *   ielts-rb-gt-institute      — community history,  topic: society,     d4
 *   ielts-rb-gt-village-clocks — local history,      topic: history,     d4
 *   ielts-rb-gt-hedge-laying   — rural crafts,       topic: environment, d5
 *   ielts-rb-gt-seaside        — leisure history,    topic: culture,     d4
 *
 * Every passage is original TalkSy practice material written in the style of
 * the IELTS General Training Reading test; nothing is copied from official
 * papers, books or websites.
 */

import type { ReadingExercise } from "./types";
import { READING_BANK_SOURCE_NOTE } from "./types";

export const gtLidos: ReadingExercise = {
  slug: "ielts-rb-gt-lidos",
  title: "Lidos and the open-water revival",
  variant: "gt",
  section: 3,
  subject: "leisure history",
  topic: "health",
  difficulty: 4,
  estimatedMinutes: 16,
  objective: "Follow a social history of Britain's open-air pools: Victorian beginnings, the 1930s boom, the long decline, and the cold-water revival that has filled them again.",
  intro: "Read the passage below and answer Questions 1–10.",
  blocks: [
    {
      heading: "Lidos and the open-water revival",
      paragraphs: [
        "On a bright winter morning, a swimmer slips into an unheated outdoor pool while steam curls off the surface and her breath fogs the air. A few years ago the scene would have seemed eccentric; today it is close to fashionable. The pool she occupies is a lido — an open-air swimming bath, usually rectangular, usually unheated — and Britain, which spent half a century knocking such places down, has remembered that it loves them. The story of the lido runs from Victorian anxieties about dirty rivers to a twenty-first-century enthusiasm for cold water, and it is a genuinely national story.",
        "The lido began as a public-health project. In the fast-growing industrial towns of the nineteenth century, working people bathed in rivers and canals that also served as drains, and drownings were frequent enough to be a municipal embarrassment. The answer, for many towns, was the purpose-built swimming bath: a tiled pool with changing rooms, filled with clean water and, in the grander examples, open to the sky. Early outdoor pools were often modest rectangular tanks, but they carried an idea whose time had come — that a town owed its citizens somewhere safe and wholesome to swim.",
        "The golden age arrived between the wars. Dozens of open-air pools opened in the 1930s alone, many designed in the crisp modernist style of the period: white concrete, curved walls, sun terraces and diving boards arranged like the deck of an ocean liner. Local councils competed to build the finest example, and sunshine — a rare commodity — was engineered into the plans, with pools angled to catch the light and shelters positioned against the prevailing wind. The season was short, rarely more than a dozen warm weeks, and the gates closed in September; but while it lasted, the lido was the town's stage, and swimming was promoted as healthy exercise for body and mind.",
        "The long decline began in the 1960s. Cheap flights made the Mediterranean affordable, and a fortnight of guaranteed sun beat a damp August at home. New indoor leisure centres, with heated pools that could be used all year round, made the unheated lido look like a relic of harder times. Maintenance told against them too: open-air pools leak, crack and collect leaves, and many councils concluded that filling them in was cheaper than repairing them. Scores of lidos were demolished or converted, and by the 1980s the survivors were half empty, their diving boards removed and their cafés shuttered.",
        "The revival began, as these things often do, with enthusiasts. From the 1990s onward, campaign groups formed to save threatened pools, raising money, badgering councils and, in a growing number of cases, taking the pools over entirely. Several of the best-loved lidos are now run as charities or community businesses, staffed by volunteers and financed by season tickets and swimming clubs, while other pools have stayed under council management with fresh investment. The fashion for outdoor and so-called wild swimming did the rest: newspapers discovered cold water, celebrities endorsed it, and waiting lists for winter swimming sessions quietly lengthened.",
        "What the cold actually does to the body remains a genuinely open question. Devotees describe an immediate lift in mood, better sleep and fewer winter colds, and some small studies have reported short-lived improvements in how swimmers feel after a dip. Enthusiasts talk of the shock of immersion as a reset for an overworked mind. Researchers, however, tend to be more cautious than the swimmers, noting that the studies so far are small and that cold water carries real risks for people with heart conditions. The honest position is that millions enjoy it, and that science is still catching up.",
        "Whatever the physiology settles, the lido has recovered something harder to measure. An outdoor pool at seven in the morning is a small society: the regulars, the nervous newcomer, the person who understands the boiler, the swimmer who covers a kilometre before work. In towns that have lost much of their shared public life, a restored lido is one of the few civic spaces where strangers still talk to each other without an app. The pools that survived the era of demolition now find themselves cherished — not as nostalgia, but as infrastructure the community forgot it needed.",
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
            skills: ["skimming", "structure"],
            evidence: [{ block: 0, paragraph: 0, quote: "has remembered that it loves them" }],
            explanation: "Paragraph A sets the frame of the whole article: a country that spent fifty years demolishing lidos has fallen for them again. Heading i, a love affair resumed, compresses that arc of forgetting and remembering into four words.",
          },
        },
        {
          text: "Paragraph B",
          correct: 1,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "that a town owed its citizens somewhere safe and wholesome to swim" }],
            explanation: "Paragraph B is about origins in the industrial city: filthy rivers, frequent drownings, and the purpose-built bath as the answer. Heading ii, clean water for the industrial town, paraphrases that public-health beginning.",
          },
        },
        {
          text: "Paragraph C",
          correct: 2,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "sunshine — a rare commodity — was engineered into the plans" }],
            explanation: "Paragraph C is the 1930s golden age: modernist concrete, sun terraces and pools angled to catch the light. Heading iii, sunshine designed into concrete, gathers the architecture and the light-chasing into one line.",
          },
        },
        {
          text: "Paragraph D",
          correct: 3,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "many councils concluded that filling them in was cheaper than repairing them" }],
            explanation: "Paragraph D explains the collapse: cheap flights, heated indoor rivals and the endless repair bill. Heading iv, cheap sun and dear repairs, pairs the two forces that emptied the pools.",
          },
        },
        {
          text: "Paragraph E",
          correct: 4,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "in a growing number of cases, taking the pools over entirely" }],
            explanation: "Paragraph E is the comeback led from below: campaign groups, volunteers and community businesses rescuing threatened pools. Heading v, campaigners take charge, restates the paragraph's central actor and action.",
          },
        },
      ],
      options: [
        "A love affair resumed",
        "Clean water for the industrial town",
        "Sunshine designed into concrete",
        "Cheap sun and dear repairs",
        "Campaigners take charge",
        "The dangers of the diving board",
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 6–10",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "In the nineteenth century, some towns built swimming baths because bathing in rivers had become unsafe.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "working people bathed in rivers and canals that also served as drains, and drownings were frequent enough to be a municipal embarrassment" }],
            explanation: "Paragraph B states that rivers doubled as drains and drownings were common, and that the purpose-built bath was the towns' answer. The statement paraphrases that safety motive, so it agrees with the passage.",
          },
        },
        {
          text: "The lidos of the 1930s were designed to stay open throughout the year.",
          answer: "FALSE",
          lure: "NOT GIVEN",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 2, quote: "The season was short, rarely more than a dozen warm weeks, and the gates closed in September" }],
            explanation: "Paragraph C says the opposite of all-year opening: the season was short and the gates closed in September. The unheated lido was a summer stage, so a claim of year-round design contradicts the passage.",
            trap: { family: "boundary", note: "Opening times are discussed in detail — and the detail contradicts the statement rather than ignoring it." },
            whyWrong: ["NOT GIVEN: the paragraph gives explicit seasonal information, which makes this a contradiction rather than a gap."],
          },
        },
        {
          text: "By the 1960s, holidays abroad had become affordable for many British families.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "Cheap flights made the Mediterranean affordable" }],
            explanation: "Paragraph D opens the decline with cheap flights putting the Mediterranean within reach, which is what made a fortnight abroad beat a damp August at home. The statement restates that affordability directly.",
          },
        },
        {
          text: "Regular winter swimmers take fewer days off work than other people.",
          answer: "NOT GIVEN",
          lure: "TRUE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 5, quote: "Devotees describe an immediate lift in mood, better sleep and fewer winter colds" }],
            explanation: "Paragraph F lists benefits swimmers report — mood, sleep and colds — and small studies of how they feel, but working days lost are never counted anywhere. The benefits mentioned are close relations of the claim, yet the comparison itself is absent.",
            trap: { family: "mention-lure", note: "Fewer winter colds sounds like fewer sick days, but the passage never measures absence from work." },
            whyWrong: ["TRUE: every benefit in the paragraph is self-reported or short-lived, and none concerns employment."],
          },
        },
        {
          text: "Every restored lido in Britain is now run by volunteers.",
          answer: "FALSE",
          lure: "NOT GIVEN",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              { block: 0, paragraph: 4, quote: "Several of the best-loved lidos are now run as charities or community businesses, staffed by volunteers" },
              { block: 0, paragraph: 4, quote: "while other pools have stayed under council management with fresh investment" },
            ],
            explanation: "Paragraph E says that several lidos are volunteer-run charities while other pools have stayed under council management. Several is not every, and councils still run pools, so the universal statement is contradicted rather than merely unsupported.",
            trap: { family: "extreme-language", note: "Every converts the passage's 'several' and 'a growing number' into a total claim the text never makes." },
            whyWrong: ["NOT GIVEN: the passage does address who runs the pools, and it contradicts the word 'every'."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "lido", partOfSpeech: "noun", definition: "an open-air public swimming pool, typically unheated; the name was borrowed from an Italian bathing beach." },
    { word: "municipal", partOfSpeech: "adjective", definition: "relating to a town council and its services; drownings were described as a municipal embarrassment." },
    { word: "modernist", partOfSpeech: "adjective", definition: "of the clean-lined architectural style of the early twentieth century; many 1930s pools were modernist in white concrete." },
    { word: "demolished", partOfSpeech: "verb (past)", definition: "pulled down deliberately; scores of lidos were demolished or converted during the decline." },
    { word: "immersion", partOfSpeech: "noun", definition: "the act of plunging into water; enthusiasts describe the shock of immersion as a mental reset." },
    { word: "civic", partOfSpeech: "adjective", definition: "of a town's shared public life; a restored lido is one of the few civic spaces where strangers still talk." },
  ],
  passageNote: "Seven scenes: the frame (A), Victorian origins (B), the 1930s boom (C), decline (D), the campaign comeback (E), the hedged science (F), the social meaning (G). Headings cover A–E; the verdict items lean on B, C, D, E and F.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtPostal: ReadingExercise = {
  slug: "ielts-rb-gt-postal",
  title: "Five hundred years of the postal service",
  variant: "gt",
  section: 3,
  subject: "social history",
  topic: "history",
  difficulty: 5,
  estimatedMinutes: 18,
  objective: "Trace five hundred years of the post: the state couriers, Hill's penny reform, the network's social role, and what the decline of the letter leaves behind.",
  intro: "Read the passage below and answer Questions 1–11.",
  blocks: [
    {
      heading: "Five hundred years of the postal service",
      paragraphs: [
        "The letter you posted this morning travelled through a machine five hundred years in the making. The organised post is usually dated to 1516, when Henry VIII gave a trusted administrator the job of securing reliable couriers for royal business. From that small act of administration grew a network that would carry love letters and tax demands, seeds and newspapers to every address in the kingdom — and, in the process, teach a nation to write. Few inventions have changed everyday life so quietly, or so completely.",
        "For its first three centuries the post was an instrument of the state. Riders moved along appointed post roads, changing horses at inns kept by postmasters, and carried the correspondence of the court, the diplomatic service and the wealthy. Everyone else managed as they always had: entrusting letters to travelling merchants, carriers or anyone heading the right way, and hoping. The charge for using the official posts was reckoned by distance and by the number of sheets, and it fell on the recipient, who could refuse the letter and the bill together.",
        "The man who broke that system open was Rowland Hill, a schoolmaster turned reformer with a taste for evidence. In 1840, after years of campaigning, he introduced the uniform penny post: a single charge of one penny for any letter up to a set weight, prepaid by the sender and carried anywhere in the country. To prove prepayment he borrowed a device already in use for documents — a small adhesive stamp, printed in black, which the sender licked and fixed to the envelope. That black penny stamp is now a collector's prize; the reform behind it did for the Victorians what the internet later did for their great-grandchildren.",
        "The effects were immediate. Letters that had cost a shilling now cost a penny, and the volume of mail more than doubled within a decade. City addresses enjoyed several deliveries a day; business, advertising and the popular press rebuilt themselves around the cheap letter. The Post Office became a national institution, its branch network doubling as a savings bank for small deposits and a counter for licences and pensions. Cheap correspondence and rising literacy fed each other in a circle: more letters gave more people reasons to read and write, and more readers wrote more letters in turn.",
        "The reform also changed the street. A letter no longer had to be handed in at an office window: from the 1850s, cast-iron pillar boxes — an idea promoted, by a nice historical accident, by a novelist then working as a Post Office surveyor — let the public post letters at any hour. Behind the boxes stood a growing army of postmen walking fixed rounds in all weathers, their times so regular that villages set their lives by the knock. The red pillar box and the uniformed carrier became part of the landscape as surely as the parish church.",
        "The twentieth century brought rivals. The telegram, the post's own fast service, faded as the telephone spread; official histories often blame mismanagement, but the truth is simpler — the wire did the work quicker. Two world wars, by contrast, reminded everyone what the letter was for. Field post carried millions of envelopes between soldiers and their families, and in households everywhere the arrival of one became, for a few years, the surest evidence that a son or a father was still alive.",
        "The electronic age then did to the letter what the letter had once done to the courier's saddlebag. Electronic mail hollowed out personal correspondence first; formal letters followed it into retreat, and the volume carried by the world's postal operators has fallen year after year. Yet the network built for letters has found new freight. Shopping moved online, and parcels — which the Victorians would have dismissed as a sideshow — now account for the majority of many operators' business.",
        "What, then, is the post for, in an age when nobody needs to post anything? The question is more answerable than it looks. A daily visit to every door in the country remains a capability no commercial firm could now afford to build from nothing, and in scattered rural places the carrier is still the most regular caller some households see. The letter may dwindle into a formality; the network that carries it will not easily be replaced. Its worth, on the evidence of five hundred years, was never the paper alone.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "yes-no-not-given",
      label: "Questions 1–5",
      instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
      statements: [
        {
          text: "In the writer's view, the penny post transformed everyday communication as profoundly as the internet later did.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "the reform behind it did for the Victorians what the internet later did for their great-grandchildren" }],
            explanation: "Paragraph C closes with the writer's own comparison: the reform did for the Victorians what the internet later did for their descendants. The statement is a direct restatement of that judged equivalence, so it agrees with the writer.",
          },
        },
        {
          text: "Before 1840, the official post was available to the whole population at a reasonable price.",
          answer: "NO",
          lure: "NOT GIVEN",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "carried the correspondence of the court, the diplomatic service and the wealthy. Everyone else managed as they always had" }],
            explanation: "Paragraph B describes a two-tier system: the official post served the court, the state and the wealthy, while everyone else entrusted letters to merchants and carriers. The writer plainly does not regard the early post as a service for the whole population.",
            trap: { family: "boundary", note: "The early post is described fully enough to settle the point — the claim is contradicted, not simply unstated." },
            whyWrong: ["NOT GIVEN: paragraph B states exactly who used the official posts and who was left outside them."],
          },
        },
        {
          text: "The writer accepts that cheaper letters and rising literacy strengthened each other.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "Cheap correspondence and rising literacy fed each other in a circle" }],
            explanation: "Paragraph D presents the mutual reinforcement as the writer's own synthesis: cheap letters gave people reasons to read and write, and new readers wrote more letters. The statement restates that circular claim, so it agrees with the writer.",
          },
        },
        {
          text: "The writer blames the decline of the telegram on mismanagement.",
          answer: "NO",
          lure: "YES",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 5, quote: "official histories often blame mismanagement, but the truth is simpler — the wire did the work quicker" }],
            explanation: "Mismanagement is the explanation the writer quotes only to reject: official histories blame it, but the writer's own verdict is that the telephone simply worked faster. The statement hands the writer a view he explicitly declines.",
            trap: { family: "attribution", note: "Right claim, wrong owner — the mismanagement explanation belongs to the official histories, not the writer." },
            whyWrong: ["YES: the writer dismisses the mismanagement theory in the same breath as he reports it."],
          },
        },
        {
          text: "The writer expects the postal network to outlast every technology that competes with it.",
          answer: "NOT GIVEN",
          lure: "NO",
          meta: {
            skills: ["opinion", "inference"],
            evidence: [{ block: 0, paragraph: 7, quote: "the network that carries it will not easily be replaced" }],
            explanation: "The final paragraph argues that the network's reach would be expensive to rebuild and that its value was never only the paper. That is a judgement about cost and worth, not a prediction of victory over every rival, so no such expectation can be attributed to the writer.",
            trap: { family: "extreme-language", note: "'Every technology' stretches a hedged cost judgement into a sweeping prophecy the writer never makes." },
            whyWrong: ["NO: the writer never says the network will beat its competitors, only that it would not easily be replaced."],
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
          { kind: "text", text: "For its first three centuries the official post served the state and the rich, and the charge fell on the " },
          { kind: "blank", no: 6 },
          { kind: "text", text: ", who could refuse the letter when it arrived. In 1840 Rowland Hill replaced this system with a uniform penny rate, prepaid with the first adhesive " },
          { kind: "blank", no: 7 },
          { kind: "text", text: ". In the cities, householders could soon receive several " },
          { kind: "blank", no: 8 },
          { kind: "text", text: " a day, while branch offices also served as a " },
          { kind: "blank", no: 9 },
          { kind: "text", text: " bank for small deposits. The " },
          { kind: "blank", no: 10 },
          { kind: "text", text: " box, promoted by a novelist, let the public post letters at any hour. Today the trade built for letters has shifted decisively to " },
          { kind: "blank", no: 11 },
          { kind: "text", text: "." },
        ],
      ],
      blanks: [
        {
          no: 6,
          answer: "recipient",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "it fell on the recipient, who could refuse the letter and the bill together" }],
            explanation: "Paragraph B names who paid: the charge fell on the recipient, who could refuse the letter and the bill together. The summary keeps 'refuse the letter' and asks for the payer named in that sentence.",
          },
        },
        {
          no: 7,
          answer: "stamp",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 2, quote: "a small adhesive stamp, printed in black, which the sender licked and fixed to the envelope" }],
            explanation: "Paragraph C explains how prepayment was proved: with a small adhesive stamp, licked and fixed to the envelope. The summary keeps the adjective 'adhesive' and asks for the noun that follows it.",
          },
        },
        {
          no: 8,
          answer: "deliveries",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "City addresses enjoyed several deliveries a day" }],
            explanation: "Paragraph D records the immediate effect on city addresses: several deliveries a day. The summary reuses the surrounding words and asks for the noun that names the visits themselves.",
          },
        },
        {
          no: 9,
          answer: "savings",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "its branch network doubling as a savings bank for small deposits" }],
            explanation: "Paragraph D lists the Post Office's extra roles, among them a savings bank for small deposits. The summary keeps 'bank for small deposits' and asks for the word that specifies which kind of bank.",
          },
        },
        {
          no: 10,
          answer: "pillar",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 4, quote: "cast-iron pillar boxes — an idea promoted, by a nice historical accident, by a novelist then working as a Post Office surveyor — let the public post letters at any hour" }],
            explanation: "Paragraph E introduces the cast-iron pillar boxes and the novelist who promoted them, and notes that they let the public post letters at any hour. The summary keeps 'box' and asks for the word that precedes it in the passage.",
          },
        },
        {
          no: 11,
          answer: "parcels",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 6, quote: "parcels — which the Victorians would have dismissed as a sideshow — now account for the majority of many operators' business" }],
            explanation: "Paragraph G records the pivot in the trade: parcels, once a sideshow, now account for the majority of many operators' business. The summary's 'shifted decisively to' paraphrases that change of freight.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "couriers", partOfSpeech: "noun (plural)", definition: "messengers who carry letters or packages on a route; the first royal couriers rode the post roads." },
    { word: "correspondence", partOfSpeech: "noun", definition: "letters exchanged between people; the early post carried the correspondence of the court and the wealthy." },
    { word: "prepaid", partOfSpeech: "adjective", definition: "paid for before it is carried or delivered; under Hill's reform the sender, not the receiver, paid." },
    { word: "adhesive", partOfSpeech: "adjective", definition: "sticky on one side; the first stamps were adhesive and were licked before being fixed to the envelope." },
    { word: "pillar box", partOfSpeech: "noun", definition: "a freestanding cast-iron street box for posting letters; introduced from the 1850s and now a familiar red landmark." },
    { word: "saddlebag", partOfSpeech: "noun", definition: "a leather bag hung over a horse's back; the letter did to the courier's saddlebag what email later did to the letter." },
  ],
  passageNote: "A history in eight movements: origins (A), the state service (B), Hill's reform (C), its effects (D), the street furniture (E), rivals and wars (F), the parcels pivot (G), the writer's verdict (H). Yes/No items track the writer's judgements at the hinges; the summary stitches B, C, D, E and G together.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtInstitute: ReadingExercise = {
  slug: "ielts-rb-gt-institute",
  title: "The Women's Institute at 100",
  variant: "gt",
  section: 3,
  subject: "community history",
  topic: "society",
  difficulty: 4,
  estimatedMinutes: 17,
  objective: "Read the centenary history of a community institution: wartime origins, member-led campaigns, the famous calendar, and why new branches are still opening.",
  intro: "Read the passage below and answer Questions 1–10.",
  blocks: [
    {
      heading: "The Women's Institute at 100",
      paragraphs: [
        "In the popular imagination, the Women's Institute is all jam and Jerusalem: a village-hall world of flower arranging, fruit preserving and one particular hymn sung with great gusto. The caricature contains truth — the jam is real, and so is the hymn — but it hides an organisation that began as a piece of wartime social engineering, has campaigned on subjects from equal pay to the health of the oceans, and has outlived almost every other voluntary body founded in its generation. A hundred years old and counting, it remains the most successful women's organisation the country has produced.",
        "It was born on an island off the Welsh coast in the autumn of 1915. The nation was at war, food was short, and officials were anxious that rural women should be organised — taught the latest methods of fruit-growing and preserving, and mobilised to keep the harvest coming. The idea was imported from Canada, where a movement of the same name had been founded to give farm women the education and companionship that clubs offered men in towns. The first British meeting, held in a village on the island of Anglesey, drew a modest crowd; within a year there were scores of institutes, and within a decade, well over a thousand.",
        "The structure has barely changed since. Each institute governs itself, meeting monthly in a hall, a school or somebody's front room, and electing its own officers; the institutes band together in county federations, and the federations into a national body. What marks the movement out is its discipline about politics. It is rigorously non-party, and its campaigns are set from below: any member may propose a resolution, the resolutions are debated at national level and voted on by the whole membership, and only then does a cause become official policy. Patience, careful minutes and a well-run vote are the tools of its revolution.",
        "The Second World War cemented the jam image. Institutes turned their meeting halls into production lines: fruit was picked, bottled and made into jam, vegetables were grown in countless plots, socks were knitted for servicemen, and evacuated children were fed and housed by members. The totals were staggering — millions of jars, tonnes of preserves — and they earned the movement a permanent place in the national memory, together with a nickname it has never entirely shaken off.",
        "For those who assume the Institute never left the kitchen, the record says otherwise. Members' resolutions over the decades have called for equal pay, protested against litter and polluted rivers, and demanded better care for people with mental illness — frequently years before the same positions became respectable in Westminster. And in 2000, a small branch in Yorkshire produced the most celebrated piece of fundraising in the movement's history: a charity calendar, photographed in aid of leukaemia research, featuring the members themselves, artfully concealed by cakes and flower arrangements. Made in memory of one member's husband, it filled cinemas, funded research and rewrote the organisation's public image almost overnight.",
        "What actually happens at a meeting is less exotic and more valuable. There are talks and demonstrations, competitions for the best sponge cake or the finest daffodil, and committee business conducted with full ceremony. Because every office must be filled by a member — chair, secretary, treasurer — the institute works as a quiet training school: women who joined to learn a craft leave able to run a meeting, keep accounts and speak in public, and generations of civic figures cut their teeth in the village hall.",
        "Like every institution built on volunteering, the Institute grows older and must recruit or fade. Membership is well below its mid-century peak, and many branches struggle to fill their committees. Yet the movement has also shown an unexpected second wind. New institutes are opening in towns and city districts — some meeting in pubs, some in the evenings — and they attract younger women seeking what the founders offered: practical skills, useful causes and, above all, company. In an age of measured loneliness, a warm hall and a purpose on a Tuesday evening may be the most modern thing a hundred-year-old movement can supply.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "matching-information",
      label: "Questions 1–5",
      instruction: "The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.",
      reuseNote: "You may use any letter more than once.",
      items: [
        {
          text: "the country whose example supplied the founders with their idea",
          correct: 1,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "The idea was imported from Canada" }],
            explanation: "Paragraph B gives the movement's borrowed pedigree: the idea was imported from Canada, where the model offered farm women education and companionship. The scan target is the foreign origin of the founding idea.",
          },
        },
        {
          text: "the procedure by which the organisation adopts its official campaigns",
          correct: 2,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "any member may propose a resolution, the resolutions are debated at national level and voted on by the whole membership" }],
            explanation: "Paragraph C describes how campaigns are set from below: members propose resolutions, which are debated nationally and voted on before becoming policy. The statement's 'adopts its official campaigns' paraphrases that process.",
          },
        },
        {
          text: "the quantities of food the movement produced during the war",
          correct: 3,
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "The totals were staggering — millions of jars, tonnes of preserves" }],
            explanation: "Paragraph D records the wartime output and its scale: millions of jars and tonnes of preserves. The scan target is a measured quantity, and only paragraph D supplies one.",
          },
        },
        {
          text: "a fundraising project that changed how the public saw the organisation",
          correct: 4,
          lure: 3,
          meta: {
            skills: ["scanning", "structure"],
            evidence: [{ block: 0, paragraph: 4, quote: "rewrote the organisation's public image almost overnight" }],
            explanation: "Paragraph E tells the calendar story and states its effect: it filled cinemas, funded research and rewrote the organisation's public image overnight. That is the transformation of perception the statement asks for.",
            trap: { family: "mention-lure", note: "Paragraph D also talks about image — a permanent place in the national memory — but the jam-era reputation was the stereotype the calendar later overturned." },
          },
        },
        {
          text: "the administrative abilities members develop by holding office",
          correct: 5,
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "women who joined to learn a craft leave able to run a meeting, keep accounts and speak in public" }],
            explanation: "Paragraph F argues that filling the offices of chair, secretary and treasurer trains members to run meetings, keep accounts and speak in public. The statement paraphrases that quiet training school of office-holding.",
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
        [{ kind: "text", text: "6. The first institute met in a village on the island of " }, { kind: "blank", no: 6 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "7. Proposed campaigns, known as " }, { kind: "blank", no: 7 }, { kind: "text", text: ", must be debated and voted on at national level." }],
        [{ kind: "text", text: "8. The charity calendar was made in memory of a member's " }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "9. The calendar raised money for research into " }, { kind: "blank", no: 9 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "10. New institutes that meet in pubs attract " }, { kind: "blank", no: 10 }, { kind: "text", text: "." }],
      ],
      blanks: [
        {
          no: 6,
          answer: "Anglesey",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "The first British meeting, held in a village on the island of Anglesey, drew a modest crowd" }],
            explanation: "Paragraph B locates the first meeting in a village on the island of Anglesey. The sentence keeps 'village' and 'island' and asks for the place-name that completes the phrase.",
          },
        },
        {
          no: 7,
          answer: "resolutions",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 2, quote: "any member may propose a resolution, the resolutions are debated at national level" }],
            explanation: "Paragraph C names the machinery: members propose resolutions, which are debated and voted on nationally before a cause becomes policy. The sentence keeps 'debated and voted on' and asks for the term for proposed campaigns.",
          },
        },
        {
          no: 8,
          answer: "husband",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Made in memory of one member's husband" }],
            explanation: "Paragraph E states plainly that the calendar was made in memory of one member's husband. The sentence lifts that phrase and removes only the noun it asks for.",
          },
        },
        {
          no: 9,
          answer: "leukaemia",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 4, quote: "a charity calendar, photographed in aid of leukaemia research" }],
            explanation: "Paragraph E says the calendar was photographed in aid of leukaemia research. The sentence reuses 'research' and asks for the disease the research addressed, which appears as the word immediately before it.",
          },
        },
        {
          no: 10,
          answer: "younger women",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 6, quote: "they attract younger women seeking what the founders offered" }],
            explanation: "Paragraph G notes that new institutes meet in pubs and in the evenings, and that they attract younger women seeking skills, causes and company. The two-word answer is the group the sentence asks about.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "caricature", partOfSpeech: "noun", definition: "a comic exaggeration of a person or group; the jam-and-Jerusalem caricature hides the Institute's campaigning history." },
    { word: "federations", partOfSpeech: "noun (plural)", definition: "groups of clubs banded together under one umbrella; county federations link individual institutes to the national body." },
    { word: "resolutions", partOfSpeech: "noun (plural)", definition: "formal proposals voted on by a membership; any member may propose one, and only a vote makes it policy." },
    { word: "servicemen", partOfSpeech: "noun (plural)", definition: "people serving in the armed forces; wartime institutes knitted socks for servicemen." },
    { word: "leukaemia", partOfSpeech: "noun", definition: "a cancer of the blood-forming tissues; the famous charity calendar raised money for leukaemia research." },
    { word: "mobilised", partOfSpeech: "verb (past)", definition: "organised and prepared for action; wartime officials wanted rural women mobilised to keep the harvest coming." },
  ],
  passageNote: "A centenary in seven paragraphs: the caricature (A), origins (B), structure and resolutions (C), the war and the jam (D), campaigns and the calendar (E), the quiet training school (F), the second wind (G). Matching items scatter across B–F; the completions anchor the factual load of B, C, E and G.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtVillageClocks: ReadingExercise = {
  slug: "ielts-rb-gt-village-clocks",
  title: "The keepers of the village clock",
  variant: "gt",
  section: 3,
  subject: "local history",
  topic: "history",
  difficulty: 4,
  estimatedMinutes: 16,
  objective: "Meet the volunteers who wind Britain's church turret clocks: the machines they tend, how one national time arrived, and what automatic winding puts at risk.",
  intro: "Read the passage below and answer Questions 1–10.",
  blocks: [
    {
      heading: "The keepers of the village clock",
      paragraphs: [
        "Every village has one: the church clock that strikes through the night whether anyone is listening or not. What the village often no longer has is anyone who knows how it works. Yet in a surprising number of towers a keeper still climbs the stone stairs each week — frequently the same person for decades — to wind the mechanism that has told the parish the time since before anyone now living was born. The craft is small, ancient and, against every reasonable prediction, still very much alive.",
        "Turret clocks — the great public clocks hung in church towers — are among the oldest machines in continuous use anywhere. Medieval examples were iron frames forged by blacksmiths, driven by falling weights and controlled by a crude escapement that allowed the train of wheels to advance one tooth at a time. They carried a single hand, because they were built to mark the hours for services and the curfew, not to be read to the minute. Accuracy was a luxury: a clock that lost a quarter of an hour a day counted as respectable, and the sexton simply nudged it along.",
        "The seventeenth century changed the standard. Once the pendulum was applied to public clockwork in the 1650s, turret clocks became steady enough to carry a minute hand, and the dial we now take for granted — two hands, painted numerals — spread across the country. The new precision demanded its own routine. The weights still had to be raised by hand every week, the bearings greased, the going train cleaned of dust and pigeon feathers. A turret clock is a machine that must be visited, and so the village invented the person who visits it.",
        "What the clocks told was itself once disputed. Until the railways came, each town kept its own time, set by the sun, and a parish a few miles west might run several minutes behind its neighbour. Trains cannot safely run on a patchwork of local times, and the railway companies imposed a single standard — the time kept at Greenwich — first on their timetables and then, gradually, on everyone else. A few public clocks of the transition years were given two minute hands, one showing local time and one the new standard, so that no one in the market square need be confused.",
        "The keeper's round has hardly changed in two centuries. Climb the tower. Raise the weights on the winding drum — a steady ten minutes on the crank. Check the dial against a reliable clock, once the station clock, nowadays usually a telephone. Listen for the strike, count it, and note the error in a logbook that may run back generations. The work is unpaid in most parishes, learned not from manuals but from a predecessor who learned it the same way, and handed on, when the time comes, to whoever can be persuaded to take the keys.",
        "The threats to the tradition are not mysterious. Electric auto-winding units, bolted to the frame, do the climbing and the cranking automatically, and hard-pressed parishes welcome them; heritage bodies sometimes fund them. The keepers themselves are growing old, and a volunteer who has wound the clock for forty years is not easily replaced. Yet hundreds of towers are still wound by hand every week, and conservationists argue, with feeling, that a working clock kept by hand is a living skill as much as a timepiece — and that the machines, for all their convenience, quietly end an old relationship between a village and its tower.",
        "Why keep winding by hand when a motor could do it? The answers the keepers give are rarely sentimental: the exercise, the view, the duty. But the effect is communal. A clock wound by a neighbour is the village telling itself the time — a small weekly act of care that no automatic system reproduces. As long as someone climbs those stairs, the tower remains something more than a museum exhibit with hands. It remains, in the plainest sense, the parish's own heartbeat.",
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
          text: "Medieval turret clocks were generally built to mark the hours rather than the minutes.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "They carried a single hand, because they were built to mark the hours for services and the curfew, not to be read to the minute" }],
            explanation: "Paragraph B explains that medieval clocks carried a single hand and were built to mark hours for services and the curfew. The statement restates that purpose without any change of meaning, so it is true.",
          },
        },
        {
          text: "The arrival of the pendulum removed the need for weekly winding.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 2, quote: "The weights still had to be raised by hand every week" }],
            explanation: "Paragraph C says the pendulum brought accuracy, not convenience: the new precision demanded its own routine, and the weights still had to be raised by hand every week. The statement invents a maintenance benefit the passage denies.",
            trap: { family: "mention-lure", note: "The pendulum paragraph is full of upkeep detail — all of which contradicts the claim that winding became unnecessary." },
            whyWrong: ["TRUE: 'still had to be raised by hand every week' is the paragraph's own emphasis."],
          },
        },
        {
          text: "Railway companies were largely responsible for establishing one national time.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "the railway companies imposed a single standard — the time kept at Greenwich — first on their timetables and then, gradually, on everyone else" }],
            explanation: "Paragraph D credits the railway companies with imposing Greenwich time, first on their timetables and then on everyone else. The statement paraphrases that responsibility, so it agrees with the passage.",
          },
        },
        {
          text: "Women have acted as clock keepers for at least a century.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "handed on, when the time comes, to whoever can be persuaded to take the keys" }],
            explanation: "The passage describes keepers learning from predecessors and passing the keys to whoever can be persuaded, but it never records who those keepers were. No information about the keepers' gender, in any century, appears anywhere in the text.",
            trap: { family: "boundary", note: "The keepers' world is described in detail, so it feels as though gender must be settled — but the text is genuinely silent." },
            whyWrong: ["FALSE: nothing in the passage denies that women kept clocks; the subject simply never arises."],
          },
        },
        {
          text: "Nearly all church clocks are now fitted with automatic winding.",
          answer: "FALSE",
          lure: "NOT GIVEN",
          meta: {
            skills: ["detail", "inference"],
            evidence: [{ block: 0, paragraph: 5, quote: "Yet hundreds of towers are still wound by hand every week" }],
            explanation: "Paragraph F describes auto-winders spreading, but immediately balances the picture: hundreds of towers are still wound by hand every week. A claim that nearly all clocks are automatic is therefore contradicted by the passage.",
            trap: { family: "extreme-language", note: "'Nearly all' overstates a passage that says hundreds of towers still depend on hand winding." },
            whyWrong: ["NOT GIVEN: the passage does state the balance between machines and hand winding, and the machines fall well short of nearly all."],
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
          stem: "In the opening paragraph, the writer presents the craft of clock keeping as",
          options: [
            "a duty that has quietly died out in most villages",
            "an old practice that is unexpectedly still thriving",
            "a profession that pays better than most rural work",
            "a skill the church is anxious to revive",
          ],
          correct: 1,
          lure: 0,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "The craft is small, ancient and, against every reasonable prediction, still very much alive" }],
            explanation: "Paragraph A ends by declaring the craft small, ancient and, against every prediction, still very much alive. The second option restates that vigour; the first option over-reads the sentence about villages lacking anyone who knows the mechanism.",
            trap: { family: "mention-lure", note: "'Anyone who knows how it works' invites the conclusion that the craft has died out, which the paragraph's final sentence denies." },
            whyWrong: ["A: the writer says the craft survives in a surprising number of towers, not that it has vanished.", "C: no pay is mentioned until paragraph E, where the work is called unpaid in most parishes.", "D: the church's wishes are never discussed."],
          },
        },
        {
          stem: "According to the passage, some public clocks were given two minute hands because",
          options: [
            "clockmakers could not agree on a single pattern",
            "the church wanted a different time from the station",
            "both local time and the new standard could be read at a glance",
            "the extra hand was cheaper than a second clock",
          ],
          correct: 2,
          lure: 1,
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "one showing local time and one the new standard, so that no one in the market square need be confused" }],
            explanation: "Paragraph D explains the doubled hands of the transition years: one hand showed local time and one the new Greenwich standard, so that nobody in the market square was confused. The third option paraphrases exactly that purpose.",
            whyWrong: ["A: no disagreement between makers is mentioned.", "B: the church's preference never enters the story; both times were displayed for the public.", "D: economy is never given as the reason."],
          },
        },
        {
          stem: "What does the writer conclude in the final paragraph about hand winding?",
          options: [
            "the keepers do it mainly for the exercise",
            "it preserves a small communal act of care",
            "electric motors are unreliable in old towers",
            "clocks keep better time when wound by hand",
          ],
          correct: 1,
          lure: 0,
          meta: {
            skills: ["opinion", "inference"],
            evidence: [{ block: 0, paragraph: 6, quote: "a small weekly act of care that no automatic system reproduces" }],
            explanation: "The writer's own conclusion is communal: a clock wound by a neighbour is the village telling itself the time, an act of care no machine reproduces. The exercise, the view and the duty belong to the keepers, not to the writer's argument.",
            trap: { family: "attribution", note: "The keepers' modest reasons are quoted just before the conclusion; the communal meaning is the writer's, and the two must not be swapped." },
            whyWrong: ["A: the keepers mention exercise among their reasons, but the writer's conclusion is about what winding means to the village.", "C: motor reliability is never questioned.", "D: accuracy is never claimed as a benefit of hand winding."],
          },
        },
      ],
    },
    {
      id: "q3",
      type: "sentence-completion",
      label: "Questions 9–10",
      instruction: "Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "9. Each week the keeper spends ten minutes on the crank, raising the " }, { kind: "blank", no: 9 }, { kind: "text", text: " on the winding drum." }],
        [{ kind: "text", text: "10. In earlier times keepers checked their clocks against the " }, { kind: "blank", no: 10 }, { kind: "text", text: " clock." }],
      ],
      blanks: [
        {
          no: 9,
          answer: "weights",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Raise the weights on the winding drum — a steady ten minutes on the crank" }],
            explanation: "Paragraph E's round begins with raising the weights on the winding drum, ten minutes on the crank. The sentence keeps 'winding drum' and 'crank' and asks for what gets raised.",
          },
        },
        {
          no: 10,
          answer: "station",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "Check the dial against a reliable clock, once the station clock, nowadays usually a telephone" }],
            explanation: "Paragraph E names the old reference for checking the dial: once the station clock, now usually a telephone. The sentence keeps 'checked their clocks against' and asks for the adjective that named the reliable clock.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "turret clock", partOfSpeech: "noun", definition: "a large public clock hung in a tower, driven by weights and striking on a bell; the village clock is one." },
    { word: "escapement", partOfSpeech: "noun", definition: "the mechanism that lets a clock's wheels advance one tooth at a time; medieval escapements were crude but workable." },
    { word: "curfew", partOfSpeech: "noun", definition: "a historic hour at which fires had to be covered and people off the streets; early turret clocks marked it." },
    { word: "sexton", partOfSpeech: "noun", definition: "the church officer who cares for the building and, once, nudged the clock along when it ran slow." },
    { word: "pendulum", partOfSpeech: "noun", definition: "a swinging weight that regulates a clock; applied to public clockwork in the 1650s, it made minute hands practical." },
    { word: "logbook", partOfSpeech: "noun", definition: "a book recording regular observations; keepers note each week's timing error in one, sometimes generations old." },
  ],
  passageNote: "Seven paragraphs: the frame (A), medieval machines (B), the pendulum and its upkeep (C), one time for everyone (D), the keeper's round (E), the threats (F), the meaning (G). The verdict items lean on B, C, D, E and F; the choices and completions draw on A, D, E and G.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtHedgeLaying: ReadingExercise = {
  slug: "ielts-rb-gt-hedge-laying",
  title: "Hedge laying: a craft in the hedgerow",
  variant: "gt",
  section: 3,
  subject: "rural crafts",
  topic: "environment",
  difficulty: 5,
  estimatedMinutes: 19,
  objective: "Understand a rural craft step by step: how a hedge is laid and why, how the craft nearly died, and why conservation now depends on the hedgerow network.",
  intro: "Read the passage below and answer Questions 1–10.",
  blocks: [
    {
      heading: "Hedge laying: a craft in the hedgerow",
      paragraphs: [
        "Stand at the edge of a farmland hedge in midwinter and you may catch it mid-operation: a line of cut stems leaning sideways like combed hair, a row of stakes, and a craftsman with a billhook working steadily down the hedge. This is hedge laying — the traditional way of turning a gappy line of shrubs into a living barrier that holds livestock. Few rural crafts look so violent and produce so much order; fewer still have returned from the edge of extinction with such energy.",
        "The principle is elegant. Each stem in the hedge — the craft term is a pleacher — is cut almost through at the base, leaving a strip of bark and sapwood to serve as a living hinge. The pleacher is then bent over and laid along the line of the hedge, angled downward so that sap still runs from root to tip. Because the stem is never fully severed, it keeps growing; and because it has been laid flat, the hedge becomes a latticed wall of living wood rather than a row of separate bushes. The laid stems are held in place by stakes driven into the ground along the line, and the stakes are tied together at the top with twisted lengths of hazel or willow, known as binders, to complete the structure.",
        "Laid hedges were the standard field boundary of lowland Britain for centuries, and each region evolved a style of its own: tall, dense and closely staked where cattle pushed; lower, quicker and lighter where sheep were the worry. The craft reached its peak in the nineteenth century, when farm labour was cheap and a hedgerow was fence, windbreak, larder and property line all at once. A hedge well laid in 1850 might outlive everyone who watched it laid.",
        "The twentieth century unpicked all of it. Wire was cheaper than labour, tractors demanded larger fields, and for a period governments paid farmers to remove hedges altogether; mile after mile was grubbed out in the decades after the Second World War. What survived was trimmed by mechanical flail — cut hard and flat each season, a treatment that leaves a hedge gappy at the base and, over years, can kill it outright. By the 1970s the craft of laying survived mainly in the hands of a handful of elderly countrymen and a few hundred devotees.",
        "The revival arrived from an unexpected direction: the competition field. Hedge-laying associations began holding annual matches, in which professionals and amateurs race to lay a stretch of hedge to a standard that judges measure against strict rules, and the matches became the craft's university. Regional styles that might otherwise have blurred into one another are kept distinct by those rules; young hedgers learn from champions on the spot rather than from books; and the best of them now find a winter's work restoring hedges that conservation grants pay to see brought back.",
        "The timing could hardly have been better. Hedgerows have been revalued within a single generation: dismissed for decades as an obstacle to efficient farming, they are now counted as wildlife corridors, carbon stores and shelter for crops, stitching the fragments of a heavily farmed landscape back together. A laid hedge, dense at its base, is better habitat than a flailed one, and better than a wire fence, which offers nothing to live in. Songbirds, small mammals and pollinating insects travel the hedgerow network the way traffic travels a road system.",
        "None of this makes the work easy. Laying is slow, seasonal and impossible to mechanise; a hedger in good form may complete perhaps a hundred metres in a week, at a cost to the back that the billhook does not advertise. But the hedge repays the attention. A well-laid section will stand for decades without further intervention, thickening each spring while the hedger who cut it grows old, and no fence in the catalogue can say the same. It is, as the competitors like to point out, the only barrier that gets stronger the longer you leave it alone.",
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      type: "flowchart-completion",
      label: "Questions 1–5",
      instruction: "Complete the flow-chart below. Choose ONE WORD ONLY from the passage for each answer.",
      wordLimit: 1,
      layout: [
        [{ kind: "text", text: "Laying a hedge — the traditional sequence" }],
        [{ kind: "text", text: "Cut each stem almost through at the base, leaving a living " }, { kind: "blank", no: 1 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "Bend the cut stem, known as a " }, { kind: "blank", no: 2 }, { kind: "text", text: ", over and lay it along the hedge line." }],
        [{ kind: "text", text: "Hold the laid stems in place with " }, { kind: "blank", no: 3 }, { kind: "text", text: " driven into the ground." }],
        [{ kind: "text", text: "Tie the tops together with twisted lengths of hazel or willow called " }, { kind: "blank", no: 4 }, { kind: "text", text: "." }],
        [{ kind: "text", text: "Over the seasons, the hedge thickens into a " }, { kind: "blank", no: 5 }, { kind: "text", text: " that livestock cannot push through." }],
      ],
      blanks: [
        {
          no: 1,
          answer: "hinge",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "leaving a strip of bark and sapwood to serve as a living hinge" }],
            explanation: "The first step of the craft leaves a strip of bark and sapwood to serve as a living hinge. The flowchart keeps 'living' and asks for the noun that names the partly cut connection.",
          },
        },
        {
          no: 2,
          answer: "pleacher",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "The pleacher is then bent over and laid along the line of the hedge" }],
            explanation: "The passage gives the craft term for a cut stem — a pleacher — and then describes it being bent over and laid. The flowchart keeps 'bend the cut stem' and asks for that term.",
          },
        },
        {
          no: 3,
          answer: "stakes",
          meta: {
            skills: ["scanning", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "The laid stems are held in place by stakes driven into the ground along the line" }],
            explanation: "After the pleachers are laid, stakes driven into the ground hold them in place. The flowchart keeps 'driven into the ground' and asks for what does the holding.",
          },
        },
        {
          no: 4,
          answer: "binders",
          meta: {
            skills: ["scanning", "vocabulary"],
            evidence: [{ block: 0, paragraph: 1, quote: "the stakes are tied together at the top with twisted lengths of hazel or willow, known as binders" }],
            explanation: "The final step ties the stake tops with twisted lengths of hazel or willow, known as binders. The flowchart keeps the materials and asks for the craft name of the finished lengths.",
          },
        },
        {
          no: 5,
          answer: "barrier",
          meta: {
            skills: ["scanning", "paraphrase"],
            evidence: [{ block: 0, paragraph: 0, quote: "the traditional way of turning a gappy line of shrubs into a living barrier that holds livestock" }],
            explanation: "The opening paragraph states the craft's purpose: turning a gappy line of shrubs into a living barrier that holds livestock. The flowchart's final box paraphrases that outcome and asks for the result noun.",
          },
        },
      ],
    },
    {
      id: "q2",
      type: "yes-no-not-given",
      label: "Questions 6–10",
      instruction: "Do the following statements agree with the views of the writer? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks.",
      statements: [
        {
          text: "In the writer's view, a laid hedge is more valuable to wildlife than a wire fence.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "A laid hedge, dense at its base, is better habitat than a flailed one, and better than a wire fence, which offers nothing to live in" }],
            explanation: "Paragraph F ranks the options in the writer's own voice: a laid hedge is better habitat than a flailed one, and better than a wire fence, which offers nothing to live in. The statement restates that ranking, so it agrees with the writer.",
          },
        },
        {
          text: "In the writer's description of the craft, the stakes are driven in before the stems are laid.",
          answer: "NO",
          lure: "YES",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              { block: 0, paragraph: 1, quote: "The pleacher is then bent over and laid along the line of the hedge" },
              { block: 0, paragraph: 1, quote: "The laid stems are held in place by stakes driven into the ground along the line" },
            ],
            explanation: "Paragraph B gives the order twice: first each pleacher is bent over and laid along the line, and only then are the laid stems held in place by stakes driven into the ground. The statement reverses that sequence, so it contradicts the writer's account.",
            trap: { family: "order", note: "Both tools and both actions appear in the passage — the test is which comes first, and the text is explicit." },
            whyWrong: ["YES: 'held in place by stakes' can only describe stems that have already been laid."],
          },
        },
        {
          text: "The writer credits competition matches with keeping regional styles distinct.",
          answer: "YES",
          meta: {
            skills: ["opinion", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "Regional styles that might otherwise have blurred into one another are kept distinct by those rules" }],
            explanation: "Paragraph E presents the matches as the craft's university, with strict rules that keep regional styles from blurring into one another. The statement paraphrases that credit, so it agrees with the writer.",
          },
        },
        {
          text: "The writer believes mechanical flailing keeps hedges in good condition.",
          answer: "NO",
          lure: "NOT GIVEN",
          meta: {
            skills: ["opinion", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "a treatment that leaves a hedge gappy at the base and, over years, can kill it outright" }],
            explanation: "Paragraph D calls flailing a treatment that leaves hedges gappy at the base and can kill them outright, and paragraph F ranks flailed hedges below laid ones as habitat. The writer's verdict on flailing is clearly hostile, so the statement contradicts it.",
            trap: { family: "boundary", note: "Flailing is described at length — but as damage, not maintenance, so the claim is contradicted rather than unstated." },
            whyWrong: ["NOT GIVEN: the writer commits himself twice, in the history and in the habitat comparison."],
          },
        },
        {
          text: "The writer thinks the grants available for hedge restoration should be increased.",
          answer: "NOT GIVEN",
          lure: "YES",
          meta: {
            skills: ["opinion", "inference"],
            evidence: [{ block: 0, paragraph: 4, quote: "restoring hedges that conservation grants pay to see brought back" }],
            explanation: "Paragraph E mentions conservation grants paying for restoration work, so grants plainly exist. But the writer never evaluates their size or argues for more money, so no view on increasing them can be attributed to him.",
            trap: { family: "mention-lure", note: "Grants are mentioned approvingly, which invites readers to invent a policy opinion the writer never voices." },
            whyWrong: ["YES: approval of restoration work is not the same as a stated view on grant levels."],
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "billhook", partOfSpeech: "noun", definition: "a heavy curved blade for cutting hedgerow wood; the hedger's main hand tool." },
    { word: "pleacher", partOfSpeech: "noun", definition: "a stem cut almost through at the base and laid along the hedge line; the craft's own word for its raw material." },
    { word: "sapwood", partOfSpeech: "noun", definition: "the young, living outer wood of a tree; a strip of it is left uncut to act as the hinge." },
    { word: "binders", partOfSpeech: "noun (plural)", definition: "twisted lengths of hazel or willow tied around the tops of the stakes to finish a laid hedge." },
    { word: "flail", partOfSpeech: "noun", definition: "a mechanical cutter that whips hedges flat each season; repeated flailing can kill a hedge outright." },
    { word: "hedgerow", partOfSpeech: "noun", definition: "a line of shrubs marking a field boundary; the network is now valued as a wildlife corridor and carbon store." },
  ],
  passageNote: "Seven paragraphs: the scene and the purpose (A), the method (B), the styles and the peak (C), the collapse (D), the competition revival (E), the conservation case (F), the craft's economics and afterlife (G). The flowchart follows B step by step; the Yes/No items sample the writer's judgements across D, E and F.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtSeaside: ReadingExercise = {
  slug: "ielts-rb-gt-seaside",
  title: "The great seaside holiday",
  variant: "gt",
  section: 3,
  subject: "leisure history",
  topic: "culture",
  difficulty: 4,
  estimatedMinutes: 17,
  objective: "Chart the rise, fall and return of the British seaside holiday: doctors' cures, railway crowds, boarding houses, package flights and the modern revival.",
  intro: "Read the passage below and answer Questions 1–11.",
  blocks: [
    {
      heading: "The great seaside holiday",
      paragraphs: [
        "Bucket, spade, a paper hat against the wind and chips defended from seagulls: the British seaside holiday occupies a strange position in the national memory — half cherished, half a joke, and generally assumed to be ancient. It is not. Before 1800 nobody went to the beach for pleasure; a century later, entire industrial towns shut down for a week so that everyone could. The seaside holiday was not discovered but invented, in stages, and each stage says something about the country that built it.",
        "The first stage was medicinal. Eighteenth-century doctors prescribed immersion in cold sea water for a whole catalogue of complaints, from melancholy to weak digestion, and fashionable patients obeyed. Resorts grew around the cure, Scarborough and Brighton among the earliest, where the wealthy took lodgings for the season and were wheeled out to the waves in bathing machines — timber huts on wheels that preserved a bather's modesty by lowering them straight into the sea. At this stage the beach belonged to the rich, and the working population appeared in the picture, if at all, as staff.",
        "The railways industrialised the ritual. From the 1840s, excursion trains carried workers to the coast by the trainload, at fares the mill and the mine could afford, and the aristocracy, finding the seafront newly crowded, largely withdrew to continental spas and ocean liners. Manufacturing towns adopted fixed summer weeks — the wakes holidays — when whole communities travelled together, boarding houses filled from attic to basement, and the modern resort economy was born. For the first time anywhere, an annual holiday became something ordinary working families did as a right and a habit, not an accident of good fortune.",
        "What the crowds found waiting had been assembled with astonishing speed. Piers stretched out over the tide so that the stroller could feel at sea without the inconvenience; promenades, bandstands and winter gardens followed the promenaders. Donkeys walked the sand at a child's pace. Punch and Judy shouted their ancient quarrel under striped canvas; photographers posed the family against a painted backdrop; and confectioners sold sticks of hard, bright rock with the town's name running right through the middle, so that even the sugar was advertising. A complete culture of costume, food, entertainment and souvenir was manufactured within two generations.",
        "Lodging, meanwhile, defined the experience. The boarding-house landlady became a national figure: meals at fixed hours, guests firmly locked out between breakfast and the beach, hot water so scarce that the sea did the work of half the week. Between the wars a rival appeared in the holiday camp — rows of chalets, all meals included, organised entertainment from morning whistle to lights-out. The first of the great camps opened in 1936, and within twenty years they were drawing enormous summer crowds to be cheerfully organised by colour-capped staff.",
        "Then the aircraft arrived. From the 1960s onwards, package flights put a week of dependable Mediterranean sunshine within an ordinary family's reach, and the British resort, which could not order up sunshine, began to empty. Hotels closed, piers decayed — several of the grandest burned down — and the joke hardened into a caricature: rain, stripy deckchairs and disappointment. By the end of the century, some of the country's poorest neighbourhoods lay in the streets behind the promenades.",
        "The obituary, however, has proved premature. Foreign holidays still out-compete the domestic beach on weather, but recent decades have brought a revival few predicted: short breaks replacing the single fortnight, festivals filling piers and bandstands in the off-season, surf schools wherever the water is coldest, and heritage funding restoring the very attractions an earlier age had mocked. The seaside endures because it offers the one holiday that needs no translation — a beach, whatever weather arrives, and the family on it. The crowds are smaller now; the ritual remains recognisably the one the excursion trains delivered.",
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
            evidence: [{ block: 0, paragraph: 0, quote: "The seaside holiday was not discovered but invented, in stages" }],
            explanation: "Paragraph A dismantles the assumption of antiquity: before 1800 nobody went to the beach for pleasure, and the holiday was invented in stages. Heading i, a ritual younger than it looks, compresses that correction.",
          },
        },
        {
          text: "Paragraph B",
          correct: 1,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 1, quote: "Eighteenth-century doctors prescribed immersion in cold sea water for a whole catalogue of complaints" }],
            explanation: "Paragraph B covers the medicinal beginnings: doctors' prescriptions, cold sea water and the bathing machines that wheeled the wealthy into the waves. Heading ii gathers the doctors' orders and the huts on wheels into one line.",
          },
        },
        {
          text: "Paragraph C",
          correct: 2,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 2, quote: "excursion trains carried workers to the coast by the trainload, at fares the mill and the mine could afford, and the aristocracy, finding the seafront newly crowded, largely withdrew" }],
            explanation: "Paragraph C is the railway transformation: excursion trains bring workers in the trainload while the aristocracy withdraws to spas and liners. Heading iii names both movements — the arrivals and the departures — in five words.",
          },
        },
        {
          text: "Paragraph D",
          correct: 3,
          meta: {
            skills: ["skimming", "detail"],
            evidence: [{ block: 0, paragraph: 3, quote: "A complete culture of costume, food, entertainment and souvenir was manufactured within two generations" }],
            explanation: "Paragraph D lists the invented resort culture — piers, donkeys, Punch and Judy, named rock — and closes by calling it manufactured within two generations. Heading iv takes that closing claim almost word for word.",
          },
        },
        {
          text: "Paragraph E",
          correct: 4,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 4, quote: "meals at fixed hours, guests firmly locked out between breakfast and the beach, hot water so scarce that the sea did the work of half the week" }],
            explanation: "Paragraph E is about where the crowds slept: the landlady's strict house rules and the holiday camps that answered them with all meals included. Heading v pairs the two lodging cultures of the paragraph.",
          },
        },
        {
          text: "Paragraph F",
          correct: 5,
          meta: {
            skills: ["skimming", "paraphrase"],
            evidence: [{ block: 0, paragraph: 5, quote: "package flights put a week of dependable Mediterranean sunshine within an ordinary family's reach" }],
            explanation: "Paragraph F is the decline: package flights carried families to dependable Mediterranean sun, and the domestic resort emptied. Heading vi, sunshine that could be booked, paraphrases exactly that market shift.",
          },
        },
      ],
      options: [
        "A ritual younger than it looks",
        "Doctors' orders and wheels in the water",
        "The trains arrive, the gentry leave",
        "A whole culture built in two generations",
        "House rules and camps with all meals",
        "Sunshine that could be booked",
        "A design history of the deckchair",
      ],
    },
    {
      id: "q2",
      type: "true-false-not-given",
      label: "Questions 7–11",
      instruction: "Do the following statements agree with the information given in the passage? Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
      statements: [
        {
          text: "Sea bathing was originally recommended by doctors for its health benefits.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 1, quote: "Eighteenth-century doctors prescribed immersion in cold sea water for a whole catalogue of complaints" }],
            explanation: "Paragraph B opens the story with doctors prescribing cold sea water for a catalogue of complaints. 'Recommended for its health benefits' is a plain paraphrase of that medical beginning, so the statement is true.",
          },
        },
        {
          text: "Excursion trains first brought wealthy families to the seaside.",
          answer: "FALSE",
          lure: "TRUE",
          meta: {
            skills: ["detail", "inference"],
            evidence: [
              { block: 0, paragraph: 1, quote: "where the wealthy took lodgings for the season and were wheeled out to the waves in bathing machines" },
              { block: 0, paragraph: 2, quote: "excursion trains carried workers to the coast by the trainload, at fares the mill and the mine could afford" },
            ],
            explanation: "The passage's order is the reverse: the wealthy were at the seaside already, taking lodgings and bathing from machines, before the excursion trains carried workers to the coast by the trainload. The statement swaps the two arrivals, so it contradicts the passage.",
            trap: { family: "order", note: "Both groups and both forms of transport are correctly named — only the sequence, which the passage fixes, is reversed." },
            whyWrong: ["TRUE: paragraph C even has the aristocracy leaving the coast because the trains had arrived."],
          },
        },
        {
          text: "Sticks of seaside rock carried the town's name inside them.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 3, quote: "confectioners sold sticks of hard, bright rock with the town's name running right through the middle" }],
            explanation: "Paragraph D describes the confectioners' sticks of bright rock with the town's name running right through the middle. The statement restates that detail directly, with only the phrasing changed.",
          },
        },
        {
          text: "A week at a holiday camp cost less than a week in a boarding house.",
          answer: "NOT GIVEN",
          lure: "FALSE",
          meta: {
            skills: ["inference", "detail"],
            evidence: [{ block: 0, paragraph: 4, quote: "rows of chalets, all meals included, organised entertainment from morning whistle to lights-out" }],
            explanation: "Paragraph E describes both kinds of lodging in detail, including what the camps included and what the landladies rationed, but no price is ever quoted for either. A cost comparison between them is simply not in the text.",
            trap: { family: "boundary", note: "The two rivals are set side by side, which tempts readers to settle a price war the passage never opens." },
            whyWrong: ["FALSE: the passage never says camps were dearer or cheaper; both are described without any prices."],
          },
        },
        {
          text: "Some resorts now hold festivals outside the main season.",
          answer: "TRUE",
          meta: {
            skills: ["detail", "paraphrase"],
            evidence: [{ block: 0, paragraph: 6, quote: "festivals filling piers and bandstands in the off-season" }],
            explanation: "Paragraph G lists the ingredients of the revival, among them festivals filling piers and bandstands in the off-season. 'Outside the main season' paraphrases 'off-season', so the statement agrees with the passage.",
          },
        },
      ],
    },
  ],
  glossary: [
    { word: "immersion", partOfSpeech: "noun", definition: "plunging into water; doctors once prescribed immersion in cold sea water for melancholy and weak digestion." },
    { word: "bathing machines", partOfSpeech: "noun (plural)", definition: "timber huts on wheels that lowered bathers straight into the sea while preserving their modesty." },
    { word: "excursion", partOfSpeech: "noun", definition: "a short journey made for pleasure, usually by a group; excursion trains carried workers to the coast." },
    { word: "promenade", partOfSpeech: "noun", definition: "a paved walkway beside the sea; promenades and bandstands followed the crowds." },
    { word: "confectioner", partOfSpeech: "noun", definition: "a maker or seller of sweets; confectioners sold rock with the town's name through the middle." },
    { word: "deckchair", partOfSpeech: "noun", definition: "a folding canvas chair for the seafront; the stripy deckchair became shorthand for a faded resort." },
  ],
  passageNote: "Seven paragraphs, five stages: the frame (A), the medicinal beach (B), the railway crowd (C), the manufactured culture (D), lodging and camps (E), the flight abroad (F), the premature obituary (G). Headings cover A–F; the verdict items lean on B, C, D, E and G.",
  source: READING_BANK_SOURCE_NOTE,
};

export const gtJExercises: ReadingExercise[] = [
  gtLidos,
  gtPostal,
  gtInstitute,
  gtVillageClocks,
  gtHedgeLaying,
  gtSeaside,
];
