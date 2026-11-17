/**
 * General Training Task 2 — practice batch C (PROMPT 54 expansion, GT Task 2
 * practice batch C).
 *
 * Nine further everyday essay tasks in the practice tier: three opinion
 * essays (the last plot of land, children and housework, buying local food),
 * three discussion essays (helping neighbours, dual-earner families, working
 * past retirement age) and three advantages-and-disadvantages essays
 * (cycling to work, working from home, buying second-hand). Every task is an
 * original TalkSy assignment with a full model answer, compact planning
 * notes, the eight-element analysis and a topic vocabulary bank. Band labels
 * are educational estimates, never official scores; nothing here is official
 * IELTS examination content.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

export const gt2CPracticeTasks: WritingBankTask[] = [
// ---------------------------------------------------------------------------
// 1. Opinion essay — the last plot of land: park or shopping centre
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-opinion-parks-vs-shops",
  title: "Parks or shopping centres?",
  channel: "gt",
  taskType: "task-2",
  family: "opinion",
  tier: "practice",
  topic: "society",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "In many towns, there is only one large piece of unused land left, and local people disagree about what should be built on it. Some want a public park with gardens, a playground and space for sport, while others argue that a shopping centre would create jobs and keep trade in the town. Which use of the land do you agree with more?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-choice",
      description: "States clearly which use of the last plot is preferred, in the introduction, and holds that choice to the final paragraph.",
      keywords: ["park", "i agree", "prefer", "in my view", "believe", "shopping centre", "support"],
    },
    {
      key: "on-the-land-question",
      description: "Argues about this specific plot of land rather than shopping or parks in general, keeping both uses visible in the comparison.",
      keywords: ["land", "plot", "site", "park", "shopping centre", "town", "space"],
    },
    {
      key: "developed-reasons",
      description: "Develops at least two separate reasons in body paragraphs, each supported with everyday examples such as playgrounds, benches, walkers or shop fronts.",
      keywords: ["for example", "for instance", "children", "playground", "residents", "shops", "such as"],
    },
    {
      key: "fair-to-other-side",
      description: "Acknowledges the shopping centre's genuine benefits — jobs, business rates, rainy-day shopping — before explaining why the park still wins.",
      keywords: ["admittedly", "however", "although", "jobs", "of course", "rightly"],
    },
    {
      key: "fresh-conclusion",
      description: "Ends by restating the choice in fresh words without adding new arguments.",
      keywords: ["in conclusion", "to conclude", "overall", "to sum up", "on balance"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the question for what it is (2 minutes)",
      notes: [
        "The question asks which use you agree with MORE, so both uses should appear, but one must clearly win.",
        "This is one plot in one town: keep examples at playground, bench and high-street scale, not national policy.",
        "Avoid the trap of writing only about parks; the shopping centre deserves a fair hearing before it loses.",
      ],
    },
    {
      heading: "Step 2 — Choose your side and your two reasons (3 minutes)",
      notes: [
        "Side to defend: the park, because open space is scarce and permanent while retail is mobile.",
        "Reason 1: everyday health and daily use — somewhere free to walk, play and breathe for every age group.",
        "Reason 2: a park belongs to everyone, while a shopping centre belongs to those who can spend.",
        "Concession to answer: jobs and trade, which are real but smaller than promised and less durable than grass.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: frame the contested plot, state the preference plainly.",
        "Body 1: health and daily use, led by the people who need the space most.",
        "Body 2: ownership and equality — the park asks nothing at the door.",
        "Body 3: concession and answer — jobs move, grass stays.",
        "Conclusion: restate the choice in new words — grass rather than glass.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Almost every growing town eventually reaches the point where a single empty plot remains, and everyone has an opinion about it. When the choice for that last patch of ground is between a public park and a shopping centre, I come down firmly on the side of the park. Land where nothing is sold can be the most valuable land a town owns, and unlike a shopping centre, it cannot be packed up and relocated when times change.",
      "The strongest argument for a park is its quiet effect on everyone's health. Residents cannot exercise in a car park or relax outside a supermarket, but a green space with a playground, benches and a footpath gives children somewhere safe to run, older people somewhere level to walk and office workers somewhere to eat a sandwich away from a screen. These small daily benefits are cumulative and free, which matters most for the families who can least afford gyms, clubs and trips out of town.",
      "A park also belongs to everyone equally. It hosts the summer fair, the Saturday football, the dog walkers and the teenagers with nowhere else to gather, and it asks nothing at the door. A shopping centre, by contrast, is genuinely open only to those who arrive with money to spend. Where the library and the community hall have shrunk or closed, the bench under a tree does some of their old work of bringing strangers together, and nothing else does it as cheaply.",
      "Supporters of a shopping centre rightly point to jobs, business rates and a dry place to spend a wet Saturday. Yet retail is the more movable of the two uses. Online shopping keeps growing, out-of-town retail parks compete hard, and a mall that fails to attract visitors tends to stand half-empty, taking its promised jobs with it. A park, for its part, cannot be exported or closed by a head office in another city; it simply keeps working, whatever the economy is doing.",
      "On the last plot, then, my vote goes to grass rather than glass. A shopping centre offers convenience that the high street, the retail park and the internet already supply, while a park offers the one thing none of them can: open, free space that makes an ordinary town measurably pleasanter to live in. That, to me, is the better bargain a town can strike with its final piece of ground.",
    ],
    wordCount: 400,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the choice stated",
        analysis:
          "Frames the question through the single contested plot, then takes the park's side in the second sentence — 'I come down firmly on the side of the park' — so the examiner meets the position immediately. The closing line plants the essay's central contrast: permanence against mobility.",
      },
      {
        role: "Body 1 — health and daily use",
        analysis:
          "Leads with the strongest everyday benefit and works through the age groups a park serves — children, older people, office workers — ending on the equity point that it is free, which matters most to families with least. The car park and supermarket comparisons keep the shopping centre in view throughout.",
      },
      {
        role: "Body 2 — a place that belongs to everyone",
        analysis:
          "Develops the equality argument through a list of park users and the telling phrase 'asks nothing at the door', then contrasts the shopping centre's wallet filter directly. The library-and-hall sentence widens the argument to towns that have lost their other shared spaces.",
      },
      {
        role: "Body 3 — concession and answer",
        analysis:
          "Grants the shopping centre its three honest benefits in one sentence, then dismantles the jobs case with the mobility argument: online growth, rival retail parks, the half-empty mall. The closing image of a park that 'cannot be exported' turns the concession into the essay's strongest proof.",
      },
      {
        role: "Conclusion — grass rather than glass",
        analysis:
          "Restates the verdict in fresh, alliterative words and prices both options once more — convenience the town already has against open space only this plot can give. No new argument appears; the paragraph closes the case rather than reopening it.",
      },
    ],
    vocabulary: [
      { term: "come down firmly on the side of", note: "States a position with full commitment while staying conversational — opinion-task language at its most natural." },
      { term: "cumulative and free", note: "Two adjectives that explain why small daily benefits rival big one-off ones; the quiet engine of the health paragraph." },
      { term: "asks nothing at the door", note: "Personifies the park to argue equality of access in five words — no fee, no dress code, no wallet check." },
      { term: "taking its promised jobs with it", note: "Attaches the jobs argument to the mall's failure rather than attacking it in the abstract, conceding and answering at once." },
      { term: "grass rather than glass", note: "Alliterative contrast that compresses the whole essay's choice into three words — a memorable conclusion device." },
    ],
    grammar: [
      {
        feature: "Modal passive for permanence",
        example: "it cannot be packed up and relocated when times change",
        note: "The passive with a modal argues about what is possible for the land itself, not about who might act — the grammar of a land-use debate.",
      },
      {
        feature: "'The more movable of the two' comparative",
        example: "retail is the more movable of the two uses",
        note: "The double-comparative form compares exactly two alternatives, which is precisely the choice this essay must make.",
      },
      {
        feature: "Colon delivering the definition",
        example: "a park offers the one thing none of them can: open, free space",
        note: "The colon hands the reader the definition the instant the claim needs it, keeping the closing sentence punchy rather than bloated.",
      },
    ],
    coherence:
      "The essay runs choice, daily use, equal ownership, concession, restated choice, and each body paragraph closes the loop it opens: the free-to-use point of body one returns as 'asks nothing at the door' in body two, and the mobility thesis planted in the introduction ('cannot be packed up and relocated') becomes the weapon of the concession paragraph. The final paragraph's bargain imagery ties the verdict back to the trade the opening sentence named, so the frame closes exactly where it began.",
    alternativeExpressions: [
      { insteadOf: "come down firmly on the side of the park", use: "strongly favour the park / support the park without hesitation" },
      { insteadOf: "asks nothing at the door", use: "charges no entry fee / excludes nobody" },
      { insteadOf: "cumulative and free", use: "they add up, and they cost nothing" },
      { insteadOf: "grass rather than glass", use: "green space over retail space" },
    ],
    commonMistakes: [
      {
        wrong: "The shopping centre will destruct the environment of the town.",
        right: "A shopping centre would take away the town's only open ground.",
        reason: "'Destruct' is not a verb in standard English, and the vague 'environment' claim misses the actual stake: the last open land.",
      },
      {
        wrong: "Parks are important because green is good for health and environment.",
        right: "Parks matter because they give every resident, whatever their income, a free place to walk, play and breathe.",
        reason: "A slogan asserts without explaining; naming who benefits and how turns a truism into an argument examiners can credit.",
      },
      {
        wrong: "95% of people in my country want a park, according to a recent survey.",
        right: "On most Saturday mornings, our local park is the busiest place in town.",
        reason: "Invented statistics cannot be defended and read as padding; one observable scene is safer, and more vivid, than a made-up number.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "plot", partOfSpeech: "noun", meaning: "A small piece of land, especially one available for building." },
    { word: "green space", partOfSpeech: "noun phrase", meaning: "Land with grass and trees kept for public use in towns." },
    { word: "business rates", partOfSpeech: "noun phrase", meaning: "Taxes that shops and other businesses pay to the local council." },
    { word: "retail park", partOfSpeech: "noun phrase", meaning: "A group of large shops, usually outside a town centre, with parking." },
    { word: "high street", partOfSpeech: "noun phrase", meaning: "The main shopping street of a British town." },
    { word: "to gather", partOfSpeech: "verb", meaning: "To come together in one place, casually or for an event." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Opinion essay — should children do housework
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-opinion-children-chores",
  title: "Should children do housework?",
  channel: "gt",
  taskType: "task-2",
  family: "opinion",
  tier: "practice",
  topic: "everyday",
  difficulty: 2,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "In some families, children are expected to help with the housework every day, washing dishes, tidying their rooms or hanging out the laundry. In others, parents prefer to do the chores themselves so that children can concentrate on schoolwork and free time. What is your opinion: should children be asked to do jobs around the house?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-position",
      description: "Takes a clear side on children doing housework in the introduction and keeps that position unchanged to the end.",
      keywords: ["agree", "i believe", "in my view", "children should", "convinced", "certainly"],
    },
    {
      key: "on-the-chore-question",
      description: "Answers the actual question — regular jobs around the house — rather than homework, pocket money or discipline in general.",
      keywords: ["housework", "chores", "jobs", "help", "home", "dishes", "laundry"],
    },
    {
      key: "developed-reasons",
      description: "Gives at least two developed reasons, such as independence, fairness or family membership, each supported by an everyday example.",
      keywords: ["for example", "for instance", "independence", "responsibility", "skills", "family", "such as", "fair"],
    },
    {
      key: "answer-the-worry",
      description: "Addresses the opposite worry — childhood is short and school matters — and explains why reasonable chores do not threaten either.",
      keywords: ["of course", "admittedly", "however", "homework", "minutes", "age", "school", "balance"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Pin down the real question (2 minutes)",
      notes: [
        "The question is about ordinary household jobs, not pocket money, punishment or anything resembling child labour.",
        "Both family arrangements are described neutrally, so the opinion must come entirely from you.",
        "Difficulty 2: keep the structure simple — position, two reasons, one concession, conclusion.",
      ],
    },
    {
      heading: "Step 2 — Two reasons that work at home (3 minutes)",
      notes: [
        "Reason 1: independence — laundry and simple cooking only become habits through years of practice.",
        "Reason 2: fairness and belonging — a household runs on small tasks, and contributing teaches children they are needed.",
        "Concession: school pressure and a short childhood, answered with fifteen age-appropriate minutes a day.",
      ],
    },
    {
      heading: "Step 3 — Everyday example bank (2 minutes)",
      notes: [
        "The teenager who reaches university unable to cook or wash anything.",
        "Setting the table, emptying bins, feeding a pet — jobs small enough for any age.",
        "A chore between homework sessions as a mental break rather than a burden.",
        "Avoid extreme images; the question is about balance, not drudgery.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In many households, the question of whether children should help with the washing-up, the vacuuming or the laundry causes more arguments than the chores themselves. Some parents treat housework as a normal part of family life; others prefer to protect their children's time for homework and hobbies. In my view, children should certainly be expected to do reasonable jobs around the house, because what they learn from those jobs matters far more than a slightly tidier bedroom.",
      "The first reason is plain independence. A teenager who leaves home able to cook a simple meal, wash clothes and keep a room habitable can look after themselves at university or in a first flat, whereas one who has never done any of these things starts adult life at a real disadvantage. These are not complicated skills, but they only become habits through years of small, regular practice, and a childhood spent entirely on the receiving end of domestic service builds none of them.",
      "The second reason is fairness. A home runs on dozens of invisible tasks, and when children contribute a little, they learn that the household is something they belong to rather than a hotel they happen to live in. Setting the table, emptying the bins and feeding a pet are small contributions, but they plant a sense of responsibility that spreads outward — to classrooms, sports teams and eventually the young person's own family.",
      "Of course, the worry behind the opposite view deserves respect. School pressure is real, childhood is short, and nobody wants to see a child scrubbing floors at midnight. But the realistic choice is never between chores and childhood: fifteen minutes a day, matched to the child's age, costs almost nothing academically. A small routine job between homework sessions often works as a mental break, and children who manage a chore alongside schoolwork usually organise their time better, not worse.",
      "In short, I believe parents who expect children to help at home are giving them two gifts at once: practical skills for adult life and the feeling of being a needed member of the family. The cost is a quarter of an hour a day; the benefit, as anyone who once resented the washing-up will eventually admit, lasts considerably longer.",
    ],
    wordCount: 372,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — position stated plainly",
        analysis:
          "Sets up the family disagreement in everyday terms, then answers it directly: children 'should certainly be expected to do reasonable jobs'. The final clause quietly announces the essay's standard — what children learn matters more than the tidier bedroom.",
      },
      {
        role: "Body 1 — independence",
        analysis:
          "Opens with a plain topic sentence and develops it through a believable before-and-after pair: the self-sufficient teenager against the one starting adult life 'at a real disadvantage'. The closing image of 'domestic service' sharpens the point with gentle humour.",
      },
      {
        role: "Body 2 — fairness and belonging",
        analysis:
          "Shifts the argument from skills to membership: the household as something children 'belong to rather than a hotel'. Three micro-tasks in a list ground the claim, and the outward spread — classrooms, teams, future family — shows the habit travelling beyond the kitchen.",
      },
      {
        role: "Body 3 — the concession answered",
        analysis:
          "Takes the opposing worry seriously, from school pressure to the shortness of childhood, before shrinking it with a number: fifteen minutes a day. The 'mental break' reversal then turns the objection inside out — chores may help schoolwork rather than compete with it.",
      },
      {
        role: "Conclusion — two gifts",
        analysis:
          "Restates the position in fresh words and prices the trade precisely: a quarter of an hour a day against habits that last. The wry appeal to 'anyone who once resented the washing-up' closes an everyday essay in an everyday voice.",
      },
    ],
    vocabulary: [
      { term: "on the receiving end of domestic service", note: "Humorous exaggeration that makes the sheltered childhood vivid without moralising about parents." },
      { term: "a hotel they happen to live in", note: "A compressed image for belonging without contribution — the paragraph's whole argument in nine words." },
      { term: "plant a sense of responsibility", note: "The verb metaphor treats responsibility as a seed that grows outward through the rest of the young person's life." },
      { term: "matched to the child's age", note: "Careful hedging that keeps the position reasonable and almost impossible to attack with counter-examples." },
      { term: "a mental break", note: "Reframes a chore as rest — the pivot that converts the concession paragraph from defence into counter-attack." },
    ],
    grammar: [
      {
        feature: "Defining relative clause with 'who'",
        example: "A teenager who leaves home able to cook a simple meal can look after themselves",
        note: "The relative clause attaches the argument to a recognisable person rather than to abstract 'children', grounding a general claim in a face.",
      },
      {
        feature: "Singular 'they' for a generic person",
        example: "can look after themselves at university or in a first flat",
        note: "Singular 'they' is natural, modern English and neatly avoids the clumsy 'himself or herself' of older essay models.",
      },
      {
        feature: "Colon separating principle from proof",
        example: "the realistic choice is never between chores and childhood: fifteen minutes a day, matched to the child's age, costs almost nothing academically",
        note: "The colon lets the number land on its own, which is exactly how a concession should be answered — with evidence, not volume.",
      },
    ],
    coherence:
      "The essay keeps one spine — housework teaches what schoolwork cannot — and each paragraph adds a room to it: independence first, membership second, the answered objection third. The concession is signalled conversationally with 'Of course' rather than a formal linker, the verdicts are priced in matching units ('fifteen minutes' against 'a quarter of an hour'), and the conclusion's image of two gifts gathers both body paragraphs into one before the essay stops.",
    alternativeExpressions: [
      { insteadOf: "causes more arguments than the chores themselves", use: "is debated more heatedly than the jobs are ever done" },
      { insteadOf: "plant a sense of responsibility", use: "build a feeling of duty / establish accountability" },
      { insteadOf: "on the receiving end of domestic service", use: "waited on hand and foot" },
      { insteadOf: "matched to the child's age", use: "suited to how old the child is / age-appropriate" },
    ],
    commonMistakes: [
      {
        wrong: "Children must do housework because it is scientifically proven that chores increase responsibility by 40%.",
        right: "Children who regularly help at home seem to take responsibility more naturally elsewhere, at school for instance.",
        reason: "Invented percentages cannot be defended and read as memorised padding; an honest hedge is more persuasive and safer.",
      },
      {
        wrong: "Every children should help their parents in the housework.",
        right: "Every child should help their parents with the housework.",
        reason: "'Every' takes a singular noun, and English speakers help 'with' the housework rather than 'in' it — small slips that recur.",
      },
      {
        wrong: "In conclusion, children should do chores, so parents must force them every day.",
        right: "In conclusion, children should be expected to help, in small, age-appropriate ways.",
        reason: "'Force' overstates a moderate position and undermines the balanced tone the essay has spent four paragraphs building.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "chore", partOfSpeech: "noun", meaning: "A small, routine job around the home, often a boring one." },
    { word: "housework", partOfSpeech: "noun", meaning: "The general work of keeping a home clean and running." },
    { word: "to contribute", partOfSpeech: "verb", meaning: "To give one's share of effort towards a shared job." },
    { word: "independence", partOfSpeech: "noun", meaning: "The ability to look after oneself without help." },
    { word: "age-appropriate", partOfSpeech: "adjective", meaning: "Suitable for a child of a particular age, neither too easy nor too demanding." },
    { word: "to resent", partOfSpeech: "verb", meaning: "To feel bitter or annoyed about something one has to do." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Opinion essay — buying food from local producers
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-opinion-local-food",
  title: "Buying food from local producers",
  channel: "gt",
  taskType: "task-2",
  family: "opinion",
  tier: "practice",
  topic: "environment",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Farmers' markets, farm shops and 'locally grown' labels in supermarkets have made food from nearby producers easier to buy than ever. Many shoppers believe this food is better for the environment and for the local economy than food transported from far away. Is buying food produced locally always the better choice?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "position-on-always",
      description: "Answers the sharp part of the question — whether local food is ALWAYS better — rather than writing general praise of farmers' markets.",
      keywords: ["always", "not always", "usually", "exception", "however", "in my view", "believe"],
    },
    {
      key: "case-for-local",
      description: "Makes the genuine case for local food: freshness, fewer food miles, less packaging and money kept in the local economy.",
      keywords: ["fresh", "season", "miles", "packaging", "farmers", "local", "economy", "environment"],
    },
    {
      key: "honest-exceptions",
      description: "Admits real exceptions, such as heated greenhouses in winter, higher prices for tight budgets and foods that cannot be grown locally.",
      keywords: ["greenhouse", "winter", "expensive", "cost", "climate", "cannot", "however", "season"],
    },
    {
      key: "refined-conclusion",
      description: "Concludes with a refined position — local as the default, with honest exceptions — restated in fresh words.",
      keywords: ["in conclusion", "on balance", "to sum up", "overall", "default", "generally"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Spot the trap word (2 minutes)",
      notes: [
        "'Always' is the trap: a full-agree essay must ignore honest exceptions, and the strongest answers qualify the claim.",
        "Both halves of the claim matter: the environment AND the local economy; cover each at least once.",
        "The register stays everyday — shopping baskets, markets and labels, not climate treaties.",
      ],
    },
    {
      heading: "Step 2 — Assemble both sides (3 minutes)",
      notes: [
        "For local: riper picking, shorter journeys, less packaging, seasonal eating, money kept near the grower.",
        "Against 'always': heated greenhouses can outweigh food miles; local can cost more; some foods will not grow locally.",
        "Position to defend: local as the sensible default, with the exceptions admitted honestly.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: name the trend, challenge the word 'always' immediately.",
        "Body 1: the strong general case for local food.",
        "Body 2: the honest exceptions, given a full paragraph of their own.",
        "Body 3: the refined position — default local, eat seasonally, treat distance as a supplement.",
        "Conclusion: fresh restatement of the qualified agreement.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Farmers' markets, farm shops and 'locally grown' shelves in supermarkets have moved nearby food from the margins of shopping to the mainstream, and many people now treat it as an automatic good. The instinct is mostly sound, but I do not think it survives the word 'always'. Buying local is usually better for the environment and for the community around it, yet a shopper who looks closely finds honest exceptions.",
      "The case for local food begins on the plate. Produce that travels twenty miles rather than two thousand can be picked closer to ripeness, needs less refrigeration and packaging, and tastes of the season it was grown in. The money also stays nearby: a pound spent at a farm shop supports a local grower, a local wage and, by extension, the farmed landscape around the town, which is itself a public good that no distant supplier can offer.",
      "The exceptions, however, are real. Out of season, locally grown tomatoes and salad often come from heated greenhouses whose fuel use can outweigh the emissions saved by the shorter journey, so a winter tomato shipped from a warmer climate may genuinely be the greener choice. Local produce can also be expensive enough to strain a tight family budget, and some foods — coffee, citrus in cold countries, staple grains at scale — cannot be produced locally at all. A diet rebuilt entirely around proximity would be costlier, duller and, in places, less sustainable than it first looks.",
      "None of this overturns the general rule; it only sharpens it. When local food is in season, reasonably priced and grown outdoors, it is very hard to beat on any measure. The sensible habit is therefore to buy local as the default, eat with the seasons, and treat long-distance items as a supplement rather than a betrayal. The mistake to avoid is hearing 'local' as a magic word instead of reading it as one piece of evidence among several.",
      "In conclusion, I support the local-food habit strongly but not blindly. It usually delivers fresher food, a lighter environmental footprint and a stronger rural economy, which is exactly why it has grown so popular. The word 'always', however, belongs to advertising rather than honest judgement, and the shopper who knows when to make an exception shops both greener and better.",
    ],
    wordCount: 382,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — challenging 'always'",
        analysis:
          "Names the trend, grants the instinct behind it, then questions the single word 'always' in the first paragraph — the move the whole essay hangs on. The position is visible at once: broadly in favour, honestly qualified.",
      },
      {
        role: "Body 1 — the case for local",
        analysis:
          "Builds the positive case in two movements: first the plate, with ripeness, packaging and seasonal taste, then the wallet and the landscape, where the pound 'stays nearby'. The final clause widens a shopping argument into a claim about public goods.",
      },
      {
        role: "Body 2 — the honest exceptions",
        analysis:
          "Gives the counter-case a full paragraph and its best evidence: heated greenhouses that can outweigh food miles, prices that strain budgets, foods no local climate can supply. The closing sentence deliberately damns the extreme version of the local-food position, not the reasonable one.",
      },
      {
        role: "Body 3 — the refined position",
        analysis:
          "Turns the exceptions into a sharper rule — local as 'the default', distance as 'a supplement rather than a betrayal'. The 'magic word' image teaches the reader how to read a label, which is the practical payoff of the whole essay.",
      },
      {
        role: "Conclusion — qualified agreement",
        analysis:
          "Weighs both sides in fresh words and rules clearly: strong support, blind adoption rejected. The sentence dividing 'advertising' from 'honest judgement' ends the essay on the very distinction it has been defending.",
      },
    ],
    vocabulary: [
      { term: "survives the word 'always'", note: "Treats the wording of the question as itself arguable — high-level task engagement that examiners reward." },
      { term: "picked closer to ripeness", note: "Food-industry phrasing that explains freshness precisely rather than just asserting that local tastes better." },
      { term: "outweigh the emissions saved", note: "Applies the language of weighing to a counter-intuitive case, letting the greenhouse argument beat the food-miles instinct." },
      { term: "a supplement rather than a betrayal", note: "A balanced formula that permits exceptions without surrendering the principle — the essay's practical rule in six words." },
      { term: "a magic word instead of one piece of evidence", note: "Reframes a label as evidence to be read, which is the small lesson the refined position offers the shopper." },
    ],
    grammar: [
      {
        feature: "Passive for processes",
        example: "can be picked closer to ripeness",
        note: "The passive keeps the focus on the produce and the process rather than on any particular farmer or supplier.",
      },
      {
        feature: "'So' clause joining cause and consequence",
        example: "so a winter tomato shipped from a warmer climate may genuinely be the greener choice",
        note: "'So' makes the surprising conclusion follow visibly from the greenhouse argument instead of arriving by assertion.",
      },
      {
        feature: "Three parallel comparatives",
        example: "costlier, duller and, in places, less sustainable",
        note: "The stacked comparatives build the case against an all-local diet with cumulative force and a controlled rhythm.",
      },
    ],
    coherence:
      "The essay's engine is a single word — 'always' — introduced in the opening paragraph and tested in each that follows: body one shows why the local instinct deserves the word, body two shows where it breaks, body three replaces it with a rule the reader can actually shop by. The conclusion's advertising-versus-judgement pairing mirrors that testing, so the essay closes the exact question it opened rather than a general one about markets.",
    alternativeExpressions: [
      { insteadOf: "moved from the margins of shopping to the mainstream", use: "shifted from a niche habit to an ordinary choice" },
      { insteadOf: "survives the word 'always'", use: "holds up under close inspection / stands without exception" },
      { insteadOf: "strain a tight family budget", use: "put pressure on households watching every pound" },
      { insteadOf: "a supplement rather than a betrayal", use: "an occasional addition, not a failure of principle" },
    ],
    commonMistakes: [
      {
        wrong: "Local food is always better because it has no food miles and helps local economy.",
        right: "Local food is usually better when it is in season, though winter imports can sometimes carry a smaller footprint.",
        reason: "Absolute claims — 'always', 'no food miles' — collapse against one counter-example; qualified claims survive and read as thought.",
      },
      {
        wrong: "Buying local is good for the nature.",
        right: "Buying local is good for the environment.",
        reason: "'Nature' does not take 'the' in this collocation; 'the environment' is the standard phrase for environmental benefit.",
      },
      {
        wrong: "Supermarkets are bad companies who destroy small farmers everywhere.",
        right: "Supermarkets supply affordable food at scale, which is precisely why the local case needs care.",
        reason: "Turning the essay into an attack on supermarkets answers a different question and quietly starves Task Response.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "produce", partOfSpeech: "noun", meaning: "Fresh fruit and vegetables collectively; the stress falls on the first syllable." },
    { word: "food miles", partOfSpeech: "noun phrase", meaning: "The distance food travels from farm to plate, used as a rough measure of environmental cost." },
    { word: "in season", partOfSpeech: "phrase", meaning: "Naturally available and at its best at a particular time of year." },
    { word: "greenhouse", partOfSpeech: "noun", meaning: "A heated glass building used for growing crops out of season." },
    { word: "footprint", partOfSpeech: "noun", meaning: "The total environmental impact of an activity or product." },
    { word: "to strain (a budget)", partOfSpeech: "verb", meaning: "To put pressure on finances, leaving less room for other spending." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Discussion essay — do we still help our neighbours?
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-discussion-helping-neighbours",
  title: "Do we still help our neighbours?",
  channel: "gt",
  taskType: "task-2",
  family: "discussion",
  tier: "practice",
  topic: "society",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Older residents often remember a time when neighbours lent each other tools, watched each other's children and appeared with food when someone was ill. Some people believe that this everyday helping has largely disappeared, making modern life lonelier, while others argue that people still support each other — simply through new channels such as neighbourhood groups online. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description: "Develops both views in separate paragraphs: helping has genuinely declined, and helping has reorganised rather than vanished.",
      keywords: ["some people", "others", "first view", "second view", "believe", "argue", "those who"],
    },
    {
      key: "own-opinion",
      description: "States an opinion that weighs the two views and is visible by the end of the introduction.",
      keywords: ["in my view", "i believe", "on balance", "my own position", "i think", "i accept"],
    },
    {
      key: "everyday-evidence",
      description: "Supports each view with everyday evidence: borrowed ladders, hired help, street chat groups, food banks, power cuts.",
      keywords: ["for example", "for instance", "ladder", "group", "volunteer", "such as", "power cut", "flood"],
    },
    {
      key: "balanced-weight",
      description: "Treats both views seriously, giving the stronger one slightly more space without dismissing the other.",
      keywords: ["admittedly", "however", "of course", "genuine", "yet", "still", "plainly"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — See the two-part shape (2 minutes)",
      notes: [
        "View one is about loss: the informal favours have genuinely thinned.",
        "View two is about change: support persists, coordinated by phones and organised volunteering.",
        "A discussion essay needs a full paragraph for each view before any verdict is delivered.",
      ],
    },
    {
      heading: "Step 2 — Evidence for each view (3 minutes)",
      notes: [
        "Loss: people move house often, work long hours, and hire plumbers instead of asking neighbours.",
        "Change: street chat groups, food banks, litter picks, offers of help after floods and power cuts.",
        "Opinion to defend: the second view explains more, but something warm was genuinely lost with the doorstep favour.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map and register (3 minutes)",
      notes: [
        "Introduction: picture the remembered past, name both views, state the lean.",
        "Body 1: the decline case, anchored on who loses most — older residents.",
        "Body 2: the reorganisation case, anchored on speed and reach.",
        "Body 3: my weighing — the will to help survives; the channel changed.",
        "Everyday register: ladders, soup, phones; save academic vocabulary for the Academic channel.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Ask an older resident about the street they grew up on and you will hear about lent ladders, watched children and soup delivered when somebody was ill. Some people believe this everyday helping has largely disappeared and that modern life is lonelier for it; others argue that neighbours still support each other, only through new channels such as street groups online. While I accept that the informal favours have genuinely thinned, I think the second view describes the fuller picture.",
      "Those who mourn the decline are not imagining it. People move house more often, work longer and more irregular hours, and no longer need each other in the old way: a plumber is one call away, a van can be hired by the hour, and deliveries have replaced the borrowed wheelbarrow. When help stops being necessary, the habit of offering it weakens, and the loss is felt most by the people who relied on those small kindnesses — older residents above all, for whom a conversation on the doorstep was also company.",
      "Yet it is too simple to say that helping has died. On the street's chat group, neighbours coordinate dog-sitting and warn each other about break-ins within minutes; when a flood or a power cut arrives, offers of hot showers and fridge space come faster than any council service. Volunteering at food banks, litter picks and community gardens is easier to find than a generation ago. The assistance has moved from the garden gate to the phone in everyone's pocket — less cosy, but often quicker and wider in reach.",
      "My own position sits between the two but leans towards the second. The unhurried, spontaneous favour really has grown rarer, and something warm went with it; but declaring neighbourliness dead mistakes a change of channel for a change of heart. The desire to help plainly survives — it simply organises differently now. The task worth setting is to keep the older habit alive alongside the newer one: to knock on the door of the new family rather than only liking their post.",
      "In conclusion, both views catch part of the truth: the old favours have thinned, and the will to help has found new tools. Because that will is clearly still there, I am more encouraged than worried by the change — provided we remember that a message of support, however instant, is worth more when it is occasionally delivered in person.",
    ],
    wordCount: 399,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — both views, one lean",
        analysis:
          "Opens with the older resident's remembered street, names the two views in the balanced sentence the task itself offers, and tips the writer's hand in the final clause — the second view 'describes the fuller picture' — while promising to test both honestly.",
      },
      {
        role: "Body 1 — the decline case",
        analysis:
          "Steel-mans the loss view with a mechanism rather than nostalgia: mobility, long hours and services that replaced the need for favours. The closing sentence names who pays most — older residents, for whom the doorstep conversation 'was also company'.",
      },
      {
        role: "Body 2 — the reorganisation case",
        analysis:
          "Answers loss with the digital street: chat groups, warnings and offers of help that arrive 'faster than any council service'. The concessive pair 'less cosy, but often quicker' judges the trade honestly instead of selling progress.",
      },
      {
        role: "Body 3 — the weighing",
        analysis:
          "Makes the verdict a distinction — 'a change of channel, not a change of heart' — then converts opinion into behaviour: knock on the door rather than only liking the post. That small prescription is what lifts a discussion essay above summary.",
      },
      {
        role: "Conclusion — encouraged but watchful",
        analysis:
          "Grants both views their share of the truth in one balanced sentence, then closes on the essay's single warning: instant messages matter most when they are occasionally delivered in person. No new argument — just the weighed verdict.",
      },
    ],
    vocabulary: [
      { term: "lent ladders, watched children", note: "A compact past-participle list that paints the remembered street in four words — scene-setting without a paragraph." },
      { term: "the loss is felt most", note: "Passive phrasing that distributes a social change across the people it actually touches, preparing the older-resident point." },
      { term: "less cosy, but often quicker and wider in reach", note: "A concessive pair that judges digital neighbourliness fairly — conceding warmth while claiming speed and scale." },
      { term: "a change of channel for a change of heart", note: "The essay's central distinction in six words: the tools changed, not the willingness." },
      { term: "plainly survives", note: "A plain adverb doing argumentative work — asserting continued goodwill without exaggeration." },
    ],
    grammar: [
      {
        feature: "Present perfect for a shift still unfolding",
        example: "the informal favours have genuinely thinned",
        note: "The perfect tense presents the change as recent and continuing, not as closed history — exactly the tense a 'has it disappeared?' question needs.",
      },
      {
        feature: "'When' clause as a general law",
        example: "When help stops being necessary, the habit of offering it weakens",
        note: "A present-simple 'when' clause turns one street's story into a rule about habit, the generalising move essays are graded on.",
      },
      {
        feature: "Comparative adverbs stacked",
        example: "often quicker and wider in reach",
        note: "Stacked comparatives concede one quality while claiming two, keeping the balance of the sentence honest in a single clause.",
      },
    ],
    coherence:
      "The essay runs memory, loss mechanism, new mechanism, weighing, verdict, and each paragraph answers the one before it: the decline paragraph ends on the isolated older resident, the reorganisation paragraph begins from the phone in everyone's pocket, and the weighing paragraph accepts both by separating the channel from the heart. 'Yet' and 'While' carry the turns, and the doorstep image from body one returns in the final sentence, so the frame closes where it opened.",
    alternativeExpressions: [
      { insteadOf: "lent ladders, watched children", use: "shared tools and minded the children" },
      { insteadOf: "the loss is felt most by", use: "hurts chiefly / bites hardest for" },
      { insteadOf: "a change of channel for a change of heart", use: "a new method rather than a new attitude" },
      { insteadOf: "less cosy, but often quicker", use: "not as warm, but usually more efficient" },
    ],
    commonMistakes: [
      {
        wrong: "Neighbours don't help each other now, and society is become very individual.",
        right: "Neighbours no longer help each other in the old ways, and many people feel society has grown more individual.",
        reason: "Contractions and 'is become' for 'has become' damage accuracy; full verb forms keep the semi-formal register intact.",
      },
      {
        wrong: "In the past everyone loved their neighbours and now nobody cares about anybody.",
        right: "In the past, everyday help was more necessary because there was nobody else to ask; now it is easier to hire help.",
        reason: "Rose-tinted absolutes weaken the analysis; the strongest version of each view deserves a mechanism, not a myth.",
      },
      {
        wrong: "I will discuss both views in the following essay.",
        right: "While I accept that the informal favours have thinned, I think the second view describes the fuller picture.",
        reason: "Announcing the structure delays the opinion; the examiner should meet the writer's lean inside the introduction.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to lend / lent", partOfSpeech: "verb", meaning: "To give something temporarily, expecting to have it returned." },
    { word: "neighbourly", partOfSpeech: "adjective", meaning: "Typical of a good neighbour; friendly and willing to help." },
    { word: "to coordinate", partOfSpeech: "verb", meaning: "To organise people or efforts so that they work together." },
    { word: "volunteering", partOfSpeech: "noun", meaning: "Doing useful work willingly and without payment." },
    { word: "spontaneous", partOfSpeech: "adjective", meaning: "Happening naturally, without planning or arrangement." },
    { word: "favour", partOfSpeech: "noun", meaning: "A small act of kindness done for someone without payment." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Discussion essay — when both parents work
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-discussion-working-parents",
  title: "When both parents work",
  channel: "gt",
  taskType: "task-2",
  family: "discussion",
  tier: "practice",
  topic: "society",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "In many families today, both parents go out to work, whether because both want careers or because one salary no longer covers the household bills. Some people emphasise the advantages this brings to family life, while others focus on the pressures it creates for parents and children. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description: "Gives the advantages and the pressures each a developed paragraph rather than a token mention.",
      keywords: ["advantages", "benefits", "pressures", "however", "some people", "others", "although"],
    },
    {
      key: "own-opinion",
      description: "Weighs the two views in a clear personal opinion that appears by the introduction or after the second view.",
      keywords: ["in my view", "i believe", "on balance", "my own", "i think", "where i stand"],
    },
    {
      key: "family-scale-evidence",
      description: "Uses everyday family evidence: mortgages, childcare costs, school plays, grandparents, shared housework, commuting.",
      keywords: ["childcare", "mortgage", "bills", "school", "grandparents", "evening", "commute", "housework"],
    },
    {
      key: "conditions-not-slogans",
      description: "Moves the verdict beyond slogans, towards conditions such as flexible hours, affordable childcare and shared chores.",
      keywords: ["flexible", "affordable", "shared", "employers", "conditions", "support", "if", "when"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode what is being compared (2 minutes)",
      notes: [
        "Both views look at the same households but emphasise different consequences of them.",
        "The advantages are mostly quiet and financial; the pressures are mostly visible and emotional.",
        "Keep fathers and mothers in the picture — the question says both parents, not working mothers.",
      ],
    },
    {
      heading: "Step 2 — Evidence from family life (3 minutes)",
      notes: [
        "Advantages: two incomes, resilience if a job is lost, careers and identity, children watching fair roles.",
        "Pressures: squeezed evenings, childcare costs and logistics, guilt, housework falling after work.",
        "Opinion: the arrangement is sound; the conditions around it decide whether it works.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: name the change, state the lean — benefits real, pressures under-managed.",
        "Body 1: the advantages, led by security and fairness.",
        "Body 2: the pressures, distributed honestly and specifically.",
        "Body 3: the verdict — a question of conditions, not of whether parents should work.",
        "Conclusion: restate in fresh words with the social solutions named.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "A generation or two ago, one wage usually supported a household while the other parent — nearly always the mother — ran the home. Today most families send both parents out to work, some by choice and many by necessity, and opinions about the arrangement differ sharply. In my view, dual-earner family life is broadly beneficial, but its advantages arrive naturally while its pressures have to be managed, and too many families are left to manage them alone.",
      "The advantages are easy to underestimate because most of them are quiet. Two incomes bring breathing space: a mortgage becomes affordable, an unexpected bill does not become a crisis, and there is occasionally money for holidays and hobbies. The arrangement also protects a family if one job disappears, and it gives each parent a life beyond the home — skills, colleagues, identity. For daughters and sons alike, watching parents share both earning and housework is itself an education in fairness.",
      "The pressures, though, are just as real and far less evenly shared. Two working parents means two commutes, two sets of working hours and one very squeezed evening in which cooking, homework, laundry and bedtime must all fit. Childcare can swallow a second salary entirely, and many parents carry a background hum of guilt — missing school plays, relying on grandparents, feeling permanently behind at work and at home. Without flexibility from employers, the load settles, too often, on the mother's shoulders.",
      "Where I stand, then, is with the arrangement but against the conditions that too often surround it. Both parents working is neither the collapse of family life its critics describe nor the effortless equality its cheerleaders promise; it is a demanding system that works well when jobs are flexible, childcare is affordable and housework is genuinely shared, and badly when none of those things is true. The argument worth having is not about whether parents should work, but about what families need in order to make working parenthood liveable.",
      "In conclusion, I believe the two-income family has brought more security, equality and opportunity than its critics allow, and more exhaustion than its defenders admit. The pressures it creates are social problems with social solutions — flexible hours, affordable childcare, shared chores — and tackling them would let families keep the benefits without paying for them in tiredness and guilt.",
    ],
    wordCount: 383,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the change and the lean",
        analysis:
          "Contrasts the single-wage past with the dual-earner present in two brisk sentences, then states the essay's guiding thought: advantages arrive naturally, pressures must be managed. The final clause names the essay's real target — families 'left to manage them alone'.",
      },
      {
        role: "Body 1 — the advantages",
        analysis:
          "Groups the benefits as breathing space, resilience and identity, then closes on the equity lesson children absorb from watching parents share roles. Every advantage arrives with its everyday proof — a mortgage, a bill, a lost job — so nothing stays abstract.",
      },
      {
        role: "Body 2 — the pressures",
        analysis:
          "Counts the pressures precisely: two commutes, one squeezed evening, childcare that can 'swallow a second salary', and guilt as a background hum. The closing sentence refuses to generalise the pain — the load 'settles, too often, on the mother's shoulders'.",
      },
      {
        role: "Body 3 — the verdict on conditions",
        analysis:
          "Rejects both slogans — collapse and effortless equality — and reframes the debate as one of conditions: flexibility, affordable childcare, shared housework. Converting a values argument into a practical one is the essay's most distinctive move.",
      },
      {
        role: "Conclusion — benefits kept, pressures solved",
        analysis:
          "Restates the weighing in fresh words, names the social solutions in a list that echoes body three, and ends on the trade the introduction promised: benefits without paying for them 'in tiredness and guilt'.",
      },
    ],
    vocabulary: [
      { term: "dual-earner family life", note: "The demographic term dressed in everyday clothes — precise enough for an examiner, plain enough for a family kitchen." },
      { term: "breathing space", note: "A household metaphor for the financial slack two incomes create; concrete and instantly understood." },
      { term: "swallow a second salary", note: "A vivid verb for childcare costs that consume an entire wage — the pressures paragraph's sharpest image." },
      { term: "a background hum of guilt", note: "A sound metaphor that makes an emotion constant and low-level, rather than a crisis." },
      { term: "a demanding system", note: "Frames the arrangement neutrally, as something that can be run well or badly — the move that makes the verdict about conditions possible." },
    ],
    grammar: [
      {
        feature: "Parallel clauses proving one point",
        example: "a mortgage becomes affordable, an unexpected bill does not become a crisis",
        note: "Two parallel clauses prove the same idea — slack — from opposite directions, positive and negative at once.",
      },
      {
        feature: "Fronted 'without' phrase as condition",
        example: "Without flexibility from employers, the load settles, too often, on the mother's shoulders",
        note: "Fronting compresses an if-clause into five words and sharpens the warning it carries.",
      },
      {
        feature: "'Not about X but about Y' contrast",
        example: "The argument worth having is not about whether parents should work, but about what families need",
        note: "The balanced contrast redirects the whole debate in a single quotable line — the pivot of the verdict paragraph.",
      },
    ],
    coherence:
      "The essay weighs one arrangement through three lenses — money and identity, then time and emotion, then conditions — with the introduction's promise ('advantages arrive naturally while its pressures have to be managed') serving as the scale on which every paragraph is measured. The pressures paragraph deliberately mirrors the advantages paragraph item for item, and the verdict's three conditions return by name in the conclusion's list, tying the essay's two halves together.",
    alternativeExpressions: [
      { insteadOf: "breathing space", use: "financial slack / room to spare" },
      { insteadOf: "swallow a second salary", use: "consume one wage entirely" },
      { insteadOf: "a background hum of guilt", use: "a constant, low-level sense of falling short" },
      { insteadOf: "a demanding system", use: "a high-maintenance arrangement" },
    ],
    commonMistakes: [
      {
        wrong: "Working mothers damage their children because the children miss maternal love.",
        right: "Children of working parents can thrive when childcare is good and parents' hours are reasonable.",
        reason: "Asserting harm without evidence caps Task Response; a conditional claim is both safer and genuinely arguable.",
      },
      {
        wrong: "In nowadays, both parents work in the most of families.",
        right: "Nowadays, both parents work in most families.",
        reason: "'In nowadays' is not English, and 'the most of families' misplaces the article — both slips are common at this level.",
      },
      {
        wrong: "Both parents working is good and bad in many ways.",
        right: "Both parents working brings real security and real exhaustion; the conditions around it decide which dominates.",
        reason: "A 'good and bad' shrug is not a weighing; the essay must say which side wins, and under what terms.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "household", partOfSpeech: "noun", meaning: "All the people living together in one home, considered as a unit." },
    { word: "dual-earner", partOfSpeech: "adjective", meaning: "Describing a family in which both adults earn money from work." },
    { word: "childcare", partOfSpeech: "noun", meaning: "Arrangements for looking after children while parents are working." },
    { word: "commute", partOfSpeech: "noun", meaning: "The regular journey between home and the workplace." },
    { word: "flexible working", partOfSpeech: "noun phrase", meaning: "Arrangements that let employees adjust their hours or location." },
    { word: "to juggle", partOfSpeech: "verb", meaning: "To manage several competing demands at the same time." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Discussion essay — retiring later
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-discussion-retirement-age",
  title: "Retiring later",
  channel: "gt",
  taskType: "task-2",
  family: "discussion",
  tier: "practice",
  topic: "health",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "In many countries, a growing number of people continue working after they reach the official retirement age. Some do so by choice, because work keeps them active, connected and purposeful, while others continue out of necessity, because their pension and savings are not enough to live on. Discuss both these views and give your own opinion about what this trend means for society.",
  requirements: [
    {
      key: "both-groups",
      description: "Develops the choosers and the necessitors in separate paragraphs, showing how differently the same trend treats them.",
      keywords: ["choice", "choose", "necessity", "need", "some", "others", "pension", "by choice"],
    },
    {
      key: "health-lens",
      description: "Keeps health and wellbeing central: purpose and activity on one side, physical toll and exhaustion on the other.",
      keywords: ["health", "active", "purpose", "tired", "body", "mind", "physical", "lonely"],
    },
    {
      key: "own-opinion",
      description: "Gives a clear personal verdict on what the trend means for society and how the two groups should be treated.",
      keywords: ["in my view", "i believe", "society", "should", "governments", "my own", "on balance"],
    },
    {
      key: "sophisticated-weighing",
      description: "Avoids counting the two groups as one statistic; the weighing separates them and draws the policy consequence.",
      keywords: ["difference", "distinction", "however", "while", "one", "the other", "rather than", "same statistic"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Notice the hidden structure (2 minutes)",
      notes: [
        "The two 'views' are two groups of older workers: choosers and necessitors, usually merged in statistics.",
        "The question asks what the trend MEANS for society, so the verdict needs a social dimension, not only sympathy.",
        "Difficulty 4: the strongest essays separate the two realities before judging the trend at all.",
      ],
    },
    {
      heading: "Step 2 — Evidence and the health angle (3 minutes)",
      notes: [
        "Choosers: structure, colleagues, purpose, decades of judgement retained inside workplaces.",
        "Necessitors: bills outrunning pensions, ageing bodies asked to keep answering alarms, blocked jobs for the young.",
        "Health cuts both ways: activity protects, strain damages; who controls the pace is the difference.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: the fading cliff-edge, the two groups, the promise to keep them distinct.",
        "Body 1: the choosers — health and purpose, plus what workplaces gain.",
        "Body 2: the necessitors — a slow emergency, not a lifestyle.",
        "Body 3: my verdict — the word 'choice' decides everything; make later work optional.",
        "Conclusion: two verdicts for two groups; society must tell the difference and act on it.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The image of retirement as a cliff-edge at sixty-five is fading: across many countries, growing numbers of people keep working well past the official age. Some choose it gladly, because work keeps them active and purposeful; others keep going only because a pension and savings will not stretch. These two groups are usually counted as one statistic, yet they live in different worlds, and I believe a society's duty is to keep the boundary between them clearly visible.",
      "For those who work on by choice, the effects are often strikingly positive. A job structures the week, keeps the mind and, in many trades, the body moving, and preserves the web of colleagues and regular conversations that an abrupt retirement can tear away. Doctors increasingly warn about the health risks of stopping all at once — of purpose and contact disappearing on the same day — and many choosers report that a lighter version of a familiar role suits them better than a full stop. Their workplaces gain too, keeping decades of judgement and passing it to younger colleagues who would otherwise inherit an empty desk.",
      "The picture darkens for those who work out of necessity. For them, longer working life is not a lifestyle but a slow emergency: rents and bills outrun a fixed pension, and the body asked to answer the alarm is the one least able to. A seventy-year-old stacking shelves through pain is not an inspiring advertisement for activity; she is evidence of a promise quietly broken. Their predicament carries a social cost as well, since positions held from necessity are positions unavailable to younger workers, and exhausted older workers eventually reach the health system anyway.",
      "My own view is that the case for later retirement lives or dies on a single word: choice. Where older people work because the work rewards them, society gains twice — in health maintained and in wisdom retained. Where they work because the alternative is poverty, the same statistic records not vitality but failure. Governments and employers should therefore make later work genuinely optional: pensions that keep pace with living costs, the right to reduce hours rather than resign, and employers judged by how many people could stop but prefer not to.",
      "In conclusion, the two kinds of older worker deserve two different verdicts. Working past retirement age by choice can be one of the healthiest decisions a person makes; working past it from necessity is a problem wearing that decision as a disguise. A compassionate society tells the difference — and builds its policies on it.",
    ],
    wordCount: 422,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — two worlds in one statistic",
        analysis:
          "Announces the fading cliff-edge, splits the trend into its two populations in one balanced sentence, and promises the essay's method: keeping the boundary 'clearly visible'. The position is a lens rather than a slogan — appropriate for this difficulty-4 discussion.",
      },
      {
        role: "Body 1 — the choosers",
        analysis:
          "Argues from health first — structure, movement, the 'web of colleagues' — then widens to what workplaces keep: decades of judgement passed to juniors. The doctors' warning against stopping 'all at once' grounds the paragraph in a general truth rather than an anecdote.",
      },
      {
        role: "Body 2 — the necessitors",
        analysis:
          "Refuses the inspirational reading with the essay's hardest line: 'a slow emergency'. The shelf-stacker example is deliberately unsentimental, and the closing sentences add the social costs — blocked jobs for the young, exhausted workers reaching the health system regardless.",
      },
      {
        role: "Body 3 — the verdict on 'choice'",
        analysis:
          "Compresses the whole essay into one word and builds policy from it: pensions that track living costs, the right to reduce hours, employers judged by how many 'could stop but prefer not to'. Ending an argument with a measurable standard is its strongest possible close.",
      },
      {
        role: "Conclusion — two verdicts",
        analysis:
          "Delivers the two verdicts the introduction promised in mirrored clauses, then the final instruction: tell the difference, and build on it. The paragraph is pure weighing — no new argument, only the distinction restated with force.",
      },
    ],
    vocabulary: [
      { term: "cliff-edge", note: "The metaphor for traditional retirement — an abrupt stop — which the essay then dismantles gently." },
      { term: "the web of colleagues", note: "A relational metaphor for what work provides beyond pay; 'tear away' extends it into harm." },
      { term: "a slow emergency", note: "The essay's label for necessity-driven work: an oxymoron doing analytical work, permanent yet unannounced." },
      { term: "a promise quietly broken", note: "Assigns responsibility for the necessitors' plight to the pension system without naming villains or shouting." },
      { term: "wearing that decision as a disguise", note: "The conclusion's image: necessity dressed up as free choice — the statistic's deception in five words." },
    ],
    grammar: [
      {
        feature: "Reduced relative clause with participle",
        example: "the body asked to answer the alarm is the one least able to",
        note: "The participle phrase 'asked to answer' makes the demand impersonal, which is precisely the point being made.",
      },
      {
        feature: "Colon isolating the criterion",
        example: "the case for later retirement lives or dies on a single word: choice",
        note: "The colon plus a lone noun turns the thesis into ten words — the argument's hinge given its own sentence.",
      },
      {
        feature: "'Where' clause as a test case",
        example: "Where older people work because the work rewards them, society gains twice",
        note: "'Where' turns any circumstance into a conditional test, letting the verdict paragraph compare its two worlds compactly.",
      },
    ],
    coherence:
      "A single distinction — choice against necessity — is planted in the introduction ('they live in different worlds') and then enforced by structure: one body paragraph per group, each opening with its own label ('For those who work on by choice' / 'The picture darkens'), and a verdict paragraph that builds policy on the same distinction. The light-and-dark contrast between the two body paragraphs and the mirrored clauses of the conclusion keep the two worlds from blurring even as the essay insists they are counted together.",
    alternativeExpressions: [
      { insteadOf: "cliff-edge", use: "abrupt stop / hard boundary" },
      { insteadOf: "a slow emergency", use: "a crisis unfolding in slow motion" },
      { insteadOf: "lives or dies on a single word", use: "depends entirely on one distinction" },
      { insteadOf: "a promise quietly broken", use: "an undertaking quietly abandoned" },
    ],
    commonMistakes: [
      {
        wrong: "Old people should not work after 65 because they are weak and must rest.",
        right: "Some people past retirement age are frail and need to stop; others are vigorous and prefer to continue.",
        reason: "Blanket claims about 'old people' ignore the two groups the question separates, and the tone slides into ageism.",
      },
      {
        wrong: "The government should give more pension money to everybody immediately.",
        right: "Governments should ensure pensions keep pace with living costs so that later work becomes a genuine choice.",
        reason: "An uncosted demand is a slogan; linking the fix to the essay's own criterion of choice makes it an argument.",
      },
      {
        wrong: "Retirement is when people stop working at the age that the law says.",
        right: "Retirement, as this essay treats it, is the point at which work becomes optional rather than required.",
        reason: "Copying a dictionary definition pads the introduction; defining a term through the essay's own argument shows control.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "retirement age", partOfSpeech: "noun phrase", meaning: "The age at which a person may stop working and draw a pension." },
    { word: "pension", partOfSpeech: "noun", meaning: "A regular income paid to someone after they stop working." },
    { word: "purposeful", partOfSpeech: "adjective", meaning: "Having a sense of direction and meaning in daily life." },
    { word: "to outrun", partOfSpeech: "verb", meaning: "To rise or grow faster than something else can keep up with." },
    { word: "necessity", partOfSpeech: "noun", meaning: "The state of being forced to do something because there is no alternative." },
    { word: "living costs", partOfSpeech: "noun phrase", meaning: "The everyday expenses of housing, food, heating and transport." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Advantages and disadvantages — cycling to work
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-advantages-cycling",
  title: "Cycling to work",
  channel: "gt",
  taskType: "task-2",
  family: "advantages-disadvantages",
  tier: "practice",
  topic: "health",
  difficulty: 2,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "In many towns and cities, travelling to work by bicycle has become increasingly popular. What are the main advantages and disadvantages of commuting by bike?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "real-advantages",
      description: "Presents the genuine advantages — free daily exercise, low cost, predictable journey times — each developed, not merely listed.",
      keywords: ["exercise", "health", "cheap", "cost", "time", "traffic", "fitness", "money"],
    },
    {
      key: "real-disadvantages",
      description: "Presents the real disadvantages — road safety, weather, arriving sweaty, limited carrying — with everyday illustrations.",
      keywords: ["danger", "safety", "weather", "rain", "sweat", "shower", "carry", "roads", "dark"],
    },
    {
      key: "weighing",
      description: "Weighs the two sides and reaches a verdict about whom cycling suits and under what conditions.",
      keywords: ["however", "on balance", "provided", "if", "for most people", "outweigh", "still"],
    },
    {
      key: "fresh-conclusion",
      description: "Concludes in fresh words without introducing brand-new arguments.",
      keywords: ["in conclusion", "on balance", "to conclude", "overall", "to sum up"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the question shape (2 minutes)",
      notes: [
        "The question asks for advantages AND disadvantages of one everyday habit, not a policy essay about cycle lanes.",
        "Difficulty 2: four paragraphs are enough — introduction, advantages, disadvantages, weighed conclusion.",
        "'From your own knowledge or experience' invites a first-person, commuter's-eye angle.",
      ],
    },
    {
      heading: "Step 2 — Collect both sides at street level (3 minutes)",
      notes: [
        "Advantages: exercise built into the day, near-zero running costs, filtering past queues, a clearer head at the desk.",
        "Disadvantages: sharing roads with hurried drivers, rain and winter darkness, sweat without showers, small loads only.",
        "Verdict to defend: the advantages win for most people living within reasonable distance, provided streets are made safer.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (2 minutes)",
      notes: [
        "Introduction: the shift from cars and season tickets to two wheels, with the verdict previewed.",
        "Body 1: advantages — health first, then money and time.",
        "Body 2: disadvantages, honestly ranked from safety downwards.",
        "Conclusion: the weighing in fresh words, with the small print that shrinks each drawback.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Rush-hour queues and crowded trains have persuaded a growing number of commuters to swap a steering wheel or a season ticket for two pedals. Cycling to work is not right for every person or every journey, but for those who live within reasonable distance of their workplace, I believe the advantages comfortably outweigh the disadvantages.",
      "The most obvious gain is health that costs nothing extra. A ride in each direction builds regular exercise into a slot of the day that would otherwise be spent sitting, and this steady, moderate movement strengthens the heart, burns calories and — as many commuters will attest — delivers people to their desks more awake than any cup of coffee manages. The practical benefits are just as persuasive: a bicycle is cheap to buy and almost free to run, with no fuel, no parking fees and no fare rises, while a bike filters past congestion rather than joining it, which makes the journey time reassuringly predictable.",
      "The disadvantages deserve honest treatment, and safety comes first. On roads without cycle lanes, riders share the tarmac with drivers who are hurried or careless, and winter darkness multiplies the risk. Weather is the second complaint — rain on the way in is an uncomfortable start to anyone's day — and arriving sweaty, with no workplace shower, deters plenty of would-be cyclists. Bikes also carry very little, so the weekly shop, the school run with two children and any journey beyond a few miles remain jobs for other forms of transport.",
      "On balance, though, most of these drawbacks shrink with sensible choices and sensible cities. Lights, waterproof clothing and a change of clothes answer the weather and the sweat; separate lanes and lower speed limits, which more and more cities are building, answer the danger; and for the trips a bike cannot manage, the bus and the train still exist. For the millions who live close enough to work, the daily ride offers a rare deal — saving money, saving time and improving health all at once — which is why its popularity keeps growing.",
    ],
    wordCount: 340,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the shift and the verdict",
        analysis:
          "Opens with the rush-hour image, states in the second sentence whom cycling suits — those 'within reasonable distance' — and previews the verdict, 'comfortably outweigh', so the weighing starts early on this foundation-level task.",
      },
      {
        role: "Body 1 — advantages: health, money, time",
        analysis:
          "Leads with the free-exercise argument and its everyday proof — arriving 'more awake than any cup of coffee manages' — then adds cost and predictability. The paragraph moves from body to wallet to clock, ending on 'reassuringly predictable', the commuter's own criterion.",
      },
      {
        role: "Body 2 — disadvantages, honestly ranked",
        analysis:
          "Puts safety first and makes it concrete: roads without lanes, hurried drivers, winter darkness. Weather, sweat and carrying capacity follow in the order commuters actually mention them, so the paragraph reads as experience rather than a list.",
      },
      {
        role: "Conclusion — the weighing and its conditions",
        analysis:
          "Answers each drawback with its remedy — lights and clothing, lanes and speed limits, the bus for the rest — then closes on the 'rare deal' of saving money, time and health at once. The verdict keeps its conditions while still landing clearly.",
      },
    ],
    vocabulary: [
      { term: "swap a steering wheel or a season ticket for two pedals", note: "Light metonymy that paints the whole change of transport in one clause — objects standing in for lifestyles." },
      { term: "builds regular exercise into a slot of the day", note: "Frames cycling as time already being spent, converted to use — the health argument's neatest form." },
      { term: "filters past congestion rather than joining it", note: "A precise verb for how bicycles beat queues; 'joining' quietly mocks the car commute." },
      { term: "reassuringly predictable", note: "Names the commuter's real criterion — certainty rather than raw speed — in two words." },
      { term: "would-be cyclists", note: "'Would-be' neatly captures the people the disadvantages actually stop: willing riders who never start." },
    ],
    grammar: [
      {
        feature: "Unexpected comparative",
        example: "delivers people to their desks more awake than any cup of coffee manages",
        note: "Comparing alertness to coffee rather than to other transport makes a familiar claim fresh and memorable.",
      },
      {
        feature: "Non-defining 'which' clause adding evidence",
        example: "separate lanes and lower speed limits, which more and more cities are building, answer the danger",
        note: "The non-defining clause turns a policy trend into live support for the argument inside a single sentence.",
      },
      {
        feature: "Dash framing a summary list",
        example: "the daily ride offers a rare deal — saving money, saving time and improving health all at once",
        note: "The dash sets the three-part list apart as a verdict, and the repeated -ing forms give it rhythm.",
      },
    ],
    coherence:
      "The essay is organised as claim, evidence, objection, remedy — the natural shape of an advantages-and-disadvantages answer. Body one orders the advantages by how quickly a commuter feels them; body two ranks the disadvantages the same way; and the conclusion answers the objections in the same order they were raised — weather, danger, capacity — so the reader can tick them off. 'On balance, though' marks the turn, and the 'rare deal' of the final sentence gathers all three advantages the essay began with.",
    alternativeExpressions: [
      { insteadOf: "swap a steering wheel or a season ticket for two pedals", use: "exchange the car or the train for a bicycle" },
      { insteadOf: "filters past congestion", use: "slips past stationary traffic" },
      { insteadOf: "reassuringly predictable", use: "dependably consistent" },
      { insteadOf: "deters plenty of would-be cyclists", use: "puts off many people who would otherwise ride" },
    ],
    commonMistakes: [
      {
        wrong: "Cycling is very good for health and environment and also cheap.",
        right: "Cycling builds exercise into the day, costs almost nothing to run and leaves the air a little cleaner.",
        reason: "Three undeveloped claims in one sentence read as notes rather than writing; each advantage deserves its mechanism.",
      },
      {
        wrong: "If cities build more cycle lanes, so accidents will decrease.",
        right: "If cities build more cycle lanes, accidents will decrease.",
        reason: "'If… so' double-marks the result clause; one connector per sentence is enough, and the pair is ungrammatical.",
      },
      {
        wrong: "Every people should cycling to work.",
        right: "Everyone should consider cycling to work.",
        reason: "'Every people' mixes two quantifiers, and 'should cycling' drops the 'to'; the modal needs a bare or 'to' infinitive, not an -ing form alone.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "commuter", partOfSpeech: "noun", meaning: "A person who travels regularly between home and work." },
    { word: "congestion", partOfSpeech: "noun", meaning: "Traffic so heavy that movement slows or stops altogether." },
    { word: "cycle lane", partOfSpeech: "noun phrase", meaning: "A marked part of a road reserved for people on bicycles." },
    { word: "to deter", partOfSpeech: "verb", meaning: "To discourage someone from doing something they might otherwise do." },
    { word: "waterproof", partOfSpeech: "adjective", meaning: "Not letting water through, keeping the wearer dry in rain." },
    { word: "journey time", partOfSpeech: "noun phrase", meaning: "How long a trip takes from start to finish." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Advantages and disadvantages — working from home
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-advantages-homeworking",
  title: "Working from home",
  channel: "gt",
  taskType: "task-2",
  family: "advantages-disadvantages",
  tier: "practice",
  topic: "workplace",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Since fast home internet became widespread, many employees have worked from home for part or all of the week. What are the advantages and disadvantages of this arrangement for employees and for the companies that employ them?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "both-parties",
      description: "Covers advantages and disadvantages for BOTH employees and employers, not just one side of the relationship.",
      keywords: ["employees", "workers", "employers", "companies", "staff", "both", "managers", "firms"],
    },
    {
      key: "real-advantages",
      description: "Develops genuine advantages: reclaimed commuting time, quiet for concentration, wider talent pools, smaller offices.",
      keywords: ["commute", "time", "concentrate", "focus", "talent", "office", "cost", "flexibility"],
    },
    {
      key: "real-disadvantages",
      description: "Develops real disadvantages: isolation, days that never end, weaker culture, harder training, fragile trust.",
      keywords: ["isolated", "lonely", "culture", "training", "promotion", "trust", "evening", "video calls"],
    },
    {
      key: "weighed-verdict",
      description: "Weighs both sides and gives a reasoned verdict, such as the hybrid pattern, rather than an unqualified cheer.",
      keywords: ["on balance", "however", "hybrid", "provided", "depends", "overall", "suits", "tool"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Untangle the double question (2 minutes)",
      notes: [
        "The question names two parties — employees AND companies — so each needs advantages and disadvantages.",
        "This is not a policy essay about home working and society; stay at the level of the workplace.",
        "Avoid drifting into remote schooling, which is a different topic entirely.",
      ],
    },
    {
      heading: "Step 2 — Evidence from working life (3 minutes)",
      notes: [
        "Employee gains: the deleted commute, quiet for deep tasks, flexibility for parents and carers.",
        "Employer gains: recruitment from anywhere, smaller premises, experienced staff retained.",
        "Costs both feel: isolation and endless days for staff; weaker culture and slower training for firms.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: the office loses its monopoly; both sides hold shares of gain and loss.",
        "Body 1: the employee ledger — time, focus, flexibility.",
        "Body 2: the employer ledger — talent, premises, retention.",
        "Body 3: the costs, distributed across both parties.",
        "Conclusion: the verdict — a powerful tool, best used selectively, hence the hybrid week.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The office is no longer the only address on a job advertisement: laptops and reliable broadband have carried a substantial share of work into kitchens, spare rooms and corner cafés. Like most changes in working life, home working brings genuine blessings and genuine costs, and — unusually — both the employee and the employer hold a share of each.",
      "For employees, the headline benefit is the commute that no longer exists. Two hours a day reclaimed from a train is two hours returned to sleep, family or the work itself, and the money saved on fares and lunches amounts to a quiet pay rise. Home also offers something the open-plan office rarely manages: silence. Tasks that need deep thought are often finished at a kitchen table by mid-morning, while a noisy workplace would have stretched them across an afternoon of interruptions. Parents, carers and people in expensive cities gain most of all, because flexibility is the benefit that money cannot easily buy.",
      "Employers collect their own gains. A vacancy can be filled by the best candidate in the country rather than the best one within commuting distance; offices can shrink, releasing rent for other purposes; and generous flexible arrangements persuade experienced staff to stay rather than chase them to competitors. For many companies, the pandemic-era experiment proved the arrangement could work at a scale nobody had dared test before.",
      "The costs, however, are distributed just as evenly. Employees report isolation, a feeling that the working day never quite ends, and a nagging worry that out of sight means out of mind when promotions are decided. Employers struggle to build a shared culture through a screen, discover that training a new starter over video calls is far harder than it looks, and lose the corridor conversations in which small problems used to be solved before they grew. Trust, too, which offices once manufactured for free, now has to be built deliberately — with clear tasks, honest feedback and occasional presence.",
      "On balance, I would describe home working as a powerful tool rather than an unmixed blessing. It suits some jobs, some people and some days far better than others, which is why the hybrid week — office days for collaboration and training, home days for concentration — has become the pattern most companies are settling on. The arrangement rewards organisations that plan it deliberately, and quietly punishes those that simply let it happen.",
    ],
    wordCount: 398,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — both parties named",
        analysis:
          "Establishes the shift in one image — the office losing its monopoly on the job advertisement — and sets the essay's unusual frame: gains and costs are held by employees and employers alike, which the body paragraphs then honour in turn.",
      },
      {
        role: "Body 1 — the employee ledger",
        analysis:
          "Starts with the most tangible gain, the deleted commute, prices it in hours and money — 'a quiet pay rise' — then argues silence as productivity. The closing sentence names who gains most, keeping the paragraph about people rather than perks.",
      },
      {
        role: "Body 2 — the employer ledger",
        analysis:
          "Compact and concrete: talent hired from anywhere, rent released, experienced staff retained. The pandemic sentence stays deliberately general — no statistics, only the shared memory of an arrangement tested 'at a scale nobody had dared test'.",
      },
      {
        role: "Body 3 — the costs, evenly distributed",
        analysis:
          "Mirrors the two gain paragraphs with a cost for each side — isolation and invisibility for staff, culture and corridor conversations for firms — then lands on trust, which offices 'once manufactured for free'. The industrial metaphor makes an abstract problem memorable.",
      },
      {
        role: "Conclusion — tool, not blessing",
        analysis:
          "Rejects both the cheerleader and the sceptic readings in one line — 'a powerful tool rather than an unmixed blessing' — names the hybrid week as the verdict's practical form, and ends with the warning that planning beats drift.",
      },
    ],
    vocabulary: [
      { term: "the commute that no longer exists", note: "Names the headline benefit by deletion — the absence itself is the gain, which focuses the paragraph instantly." },
      { term: "a quiet pay rise", note: "Prices saved fares and lunches in the employee's own currency; modest, concrete and persuasive." },
      { term: "out of sight means out of mind", note: "A familiar idiom sharpened into a specific promotion worry — colloquial force inside a semi-formal essay." },
      { term: "manufactured for free", note: "Treats trust as an industrial product of shared space; the essay's sharpest reframe of a hidden cost." },
      { term: "plan it deliberately… let it happen", note: "The closing pair converts the verdict into advice: outcomes follow design, not luck." },
    ],
    grammar: [
      {
        feature: "Present simple passive for patterns",
        example: "Tasks that need deep thought are often finished at a kitchen table by mid-morning",
        note: "The passive reports a general pattern without naming who experiences it — the generalising voice this essay needs.",
      },
      {
        feature: "Modal 'can' for capability claims",
        example: "A vacancy can be filled by the best candidate in the country",
        note: "'Can' claims possibility without exaggerating frequency — measured praise that survives scrutiny.",
      },
      {
        feature: "'Rather than' balancing two framings",
        example: "a powerful tool rather than an unmixed blessing",
        note: "'Rather than' weighs two descriptions in one phrase, giving the verdict its shape in eight words.",
      },
    ],
    coherence:
      "The essay alternates ledgers — employees' gains, employers' gains, then both parties' costs — so the four questions hiding inside the task (advantages and disadvantages, for each party) each receive visible coverage without mechanical signposting. The introduction's contract, 'both hold a share of each', is honoured by body three's mirrored openings ('Employees report… Employers struggle…') and resolved by the conclusion's tool-versus-blessing verdict, which keeps the hybrid recommendation as its practical proof.",
    alternativeExpressions: [
      { insteadOf: "the commute that no longer exists", use: "the journey to work that disappears" },
      { insteadOf: "a quiet pay rise", use: "a small, unnoticed increase in take-home money" },
      { insteadOf: "out of sight means out of mind", use: "invisible workers are easily forgotten" },
      { insteadOf: "manufactured for free", use: "produced without any effort" },
    ],
    commonMistakes: [
      {
        wrong: "Home working is good because employees feel freedom and companies save money, so everyone wins.",
        right: "Employees gain time and flexibility, but isolation is real; companies save rent, but culture and training suffer.",
        reason: "'Everyone wins' ignores half the question; the task asks for both sides for both parties, not a advertisement.",
      },
      {
        wrong: "Since the Corona virus pandemic, work from home became the new normal.",
        right: "Since the pandemic, working from home has become routine for many office staff.",
        reason: "'Corona virus' is mis-spelled, 'became' needs the present perfect for a continuing change, and 'the new normal' is a worn cliché.",
      },
      {
        wrong: "In my company, my boss, he lets us work from home on Fridays and it is very nice.",
        right: "In many companies, a fixed home-working day has become standard, and staff generally welcome it.",
        reason: "A chatty anecdote with a double subject — 'my boss, he' — drags the register down; General Training essays stay semi-formal.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "remote working", partOfSpeech: "noun phrase", meaning: "Doing a job from outside the office, usually from home." },
    { word: "talent pool", partOfSpeech: "noun phrase", meaning: "The collection of people available and qualified to be hired." },
    { word: "retention", partOfSpeech: "noun", meaning: "An employer's ability to keep good staff from leaving." },
    { word: "isolation", partOfSpeech: "noun", meaning: "The state of feeling cut off from other people." },
    { word: "hybrid working", partOfSpeech: "noun phrase", meaning: "A pattern mixing office days with home days each week." },
    { word: "vacancy", partOfSpeech: "noun", meaning: "An unfilled job position that a company is trying to hire for." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Advantages and disadvantages — buying second-hand
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-gt2-advantages-second-hand",
  title: "Buying second-hand",
  channel: "gt",
  taskType: "task-2",
  family: "advantages-disadvantages",
  tier: "practice",
  topic: "economics",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Online marketplaces, auction sites and charity shops have made buying second-hand goods — clothes, furniture, electronics, toys — easier than ever before. Do the advantages of buying used items outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-verdict",
      description: "States early whether the advantages outweigh the disadvantages and holds that verdict to the end.",
      keywords: ["outweigh", "advantages", "disadvantages", "in my view", "on balance", "believe", "praise"],
    },
    {
      key: "money-and-environment",
      description: "Develops the two strongest advantages — value for money and keeping goods out of landfill — with everyday examples.",
      keywords: ["cheaper", "price", "save", "landfill", "waste", "environment", "quality", "budget"],
    },
    {
      key: "honest-drawbacks",
      description: "Names the real drawbacks: no warranty, hidden faults, safety concerns and the time spent searching.",
      keywords: ["warranty", "fault", "broken", "risk", "safety", "searching", "returns", "hygiene"],
    },
    {
      key: "weighing-conclusion",
      description: "Weighs both sides in a conclusion that names which items justify extra caution, such as child car seats or electrical goods.",
      keywords: ["in conclusion", "on balance", "to conclude", "however", "caution", "provided", "overall", "structural"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Spot the task word (2 minutes)",
      notes: [
        "'Outweigh' demands a verdict: both sides must appear, but one must clearly win.",
        "The question is about used goods in general, so naming a few categories keeps the essay concrete.",
        "Economics topic: let prices, value and budgets lead, with the environment close behind.",
      ],
    },
    {
      heading: "Step 2 — Assemble the scales (3 minutes)",
      notes: [
        "Advantages: a fraction of the new price, quality otherwise unaffordable, goods kept out of landfill, characterful finds.",
        "Disadvantages: no warranty or returns, hidden faults, safety-critical items, the time spent searching and collecting.",
        "Verdict to defend: the advantages clearly outweigh, with caution reserved for safety-critical purchases.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: from dusty Saturday shops to a phone full of listings; state the lean early.",
        "Body 1: the financial case, led by the household on a tight budget.",
        "Body 2: the environmental case — reuse as quiet conservation.",
        "Body 3: the honest drawbacks and the caution they justify.",
        "Conclusion: the weighing in fresh words.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Not long ago, second-hand shopping meant a dusty Saturday browse through someone else's cast-offs; today a phone puts thousands of used coats, sofas and consoles within reach of anyone. This quiet explosion in reuse is usually praised as a win for wallets and the planet at the same time, and it is praise I mostly share — though a few honest drawbacks keep the verdict from being completely one-sided.",
      "The financial case is the most immediate. A used item typically costs a fraction of its new price, which lets a household on a tight budget buy solid wooden furniture or a good winter coat instead of the flimsy new equivalents the same money would reach. Patience rewards buyers twice over: quality goods that have already lasted a decade often have another one left in them, and determined hunting sometimes finds things — a tailored jacket, a teak table — that no shop on the high street sells at any price the buyer could pay.",
      "The environmental argument is just as strong. Every second-hand purchase is one item kept out of landfill and one new item, with its raw materials, factory energy and shipping, that never needs to be made. Furniture and clothing are among the most wasteful industries, so reuse bites hardest exactly where waste is largest. In a small way, the buyer of a used table declines to commission a new one — a quiet, repeatable act of conservation that asks for no campaign and no sacrifice.",
      "The drawbacks are real but narrower. Used goods generally arrive without a warranty and without returns, so a hidden fault — the washing machine that dies a fortnight after collection — lands squarely on the buyer. Some categories carry genuine safety questions, a second-hand child car seat with an unknown history being the obvious example, and hygiene worries keep some shoppers away from used mattresses and upholstery. There is also a time cost: finding the right item means searching, messaging and collection trips that a shop full of new stock never demands.",
      "On balance, though, the scales tilt clearly towards reuse. The drawbacks are mostly about caution — checking sellers, studying photographs, avoiding safety-critical items — while the benefits are structural: less waste, less manufacturing and more value squeezed from every pound earned. A well-chosen second-hand purchase is one of the few bargains in modern life that is both genuinely cheaper and genuinely kinder, which is why the habit deserves its new popularity.",
    ],
    wordCount: 403,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — from dusty to digital",
        analysis:
          "Contrasts the old Saturday browse with the phone full of listings, grants the popular praise, then signals a verdict that will be 'mostly' shared — the hedge that structures everything that follows.",
      },
      {
        role: "Body 1 — the financial case",
        analysis:
          "Opens with the fraction-of-new-price rule and follows the household on a tight budget through the purchase. The closing list of finds 'at any price the buyer could pay' makes the quality argument concrete rather than nostalgic.",
      },
      {
        role: "Body 2 — the environmental case",
        analysis:
          "Converts each purchase into two avoided harms: an item spared landfill and an item never manufactured. The 'declines to commission a new one' reframe makes the shopper an active participant in conservation, dignified by 'quiet, repeatable'.",
      },
      {
        role: "Body 3 — the honest drawbacks",
        analysis:
          "Ranks the risks by seriousness: warranty-less faults first, then safety-critical categories — the child car seat with its unknown history — hygiene limits and the time cost of hunting. Each drawback arrives attached to the shopper it would actually bite.",
      },
      {
        role: "Conclusion — the scales tilt",
        analysis:
          "Answers 'outweigh' directly by separating what caution can fix from what is structural: drawbacks about behaviour, benefits about systems. The final sentence prices the habit in the essay's two currencies — cheaper and kinder.",
      },
    ],
    vocabulary: [
      { term: "cast-offs", note: "An everyday noun for unwanted belongings that instantly pictures the old second-hand shop — and its stigma." },
      { term: "a fraction of its new price", note: "The arithmetic of reuse compressed into five words; the financial paragraph's foundation." },
      { term: "bites hardest exactly where waste is largest", note: "A physical verb, 'bites', makes the environmental benefit proportional and precise." },
      { term: "declines to commission a new one", note: "Elevates a purchase into a manufacturing decision — the paragraph's pivot from shopping to conservation." },
      { term: "the scales tilt clearly towards reuse", note: "Verdict language that echoes the question's 'outweigh', delivered in the essay's final movement." },
    ],
    grammar: [
      {
        feature: "'Needs to be' passive infinitive",
        example: "one new item, with its raw materials, factory energy and shipping, that never needs to be made",
        note: "The passive infinitive makes non-manufacturing the stated purpose of the purchase — an elegant, precise construction.",
      },
      {
        feature: "Parenthetical triple inside commas",
        example: "with its raw materials, factory energy and shipping",
        note: "The embedded list packs the full cost of production into the sentence without breaking its rhythm.",
      },
      {
        feature: "Dash turning a claim into a checklist",
        example: "the drawbacks are mostly about caution — checking sellers, studying photographs, avoiding safety-critical items",
        note: "The dash converts an abstract word, caution, into three concrete behaviours the reader can act on.",
      },
    ],
    coherence:
      "The essay is priced throughout in two currencies — money and waste — introduced together in the opening paragraph ('wallets and the planet') and settled together in the conclusion ('cheaper and kinder'). The body paragraphs run gain, gain, cost, and the conclusion answers the 'outweigh' task word by separating what caution can fix from what is structural, so the verdict follows visibly from the evidence rather than arriving by assertion.",
    alternativeExpressions: [
      { insteadOf: "cast-offs", use: "unwanted belongings / discarded items" },
      { insteadOf: "a fraction of its new price", use: "far below the cost of buying new" },
      { insteadOf: "kept out of landfill", use: "spared from the tip / diverted from disposal" },
      { insteadOf: "lands squarely on the buyer", use: "becomes the buyer's problem" },
    ],
    commonMistakes: [
      {
        wrong: "Second-hand things are more cheaper and good for the nature.",
        right: "Second-hand goods are considerably cheaper, and buying them reduces waste.",
        reason: "A double comparative, 'more cheaper', and 'the nature' are classic slips; precision matters more than enthusiasm.",
      },
      {
        wrong: "You cannot trust online sellers because maybe the item is a scam.",
        right: "Without a warranty or returns, the risk of a hidden fault rests with the buyer.",
        reason: "Vague fear argues nothing; the specific mechanism — no warranty, no returns — is the real drawback worth naming.",
      },
      {
        wrong: "I bought a second-hand phone last year and it works fine, so second-hand is always best.",
        right: "My second-hand phone has lasted well, though the lack of any warranty is a risk worth naming.",
        reason: "One happy anecdote cannot carry an 'always'; the essay must weigh both sides, not testify for one.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "second-hand", partOfSpeech: "adjective", meaning: "Previously owned and used by someone else before you." },
    { word: "landfill", partOfSpeech: "noun", meaning: "A site where rubbish is buried in the ground." },
    { word: "warranty", partOfSpeech: "noun", meaning: "A seller's written promise to repair or replace a faulty item." },
    { word: "marketplace", partOfSpeech: "noun", meaning: "An online platform where private sellers list goods for sale." },
    { word: "to outweigh", partOfSpeech: "verb", meaning: "To be greater or more important than something else." },
    { word: "upholstery", partOfSpeech: "noun", meaning: "The soft padded covering on furniture such as sofas and armchairs." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},
];
