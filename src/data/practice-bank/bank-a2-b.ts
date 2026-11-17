/**
 * PROMPT 36 practice bank — A2 chapters 24–28 (part B of the A2 set).
 *
 * Countable and uncountable nouns (24), comparisons (25), prepositions and
 * phrasal verbs (26), joining sentences (27), practical paragraphs (28).
 */

import {
  entry,
  fbx,
  qCorr,
  qDict,
  qFill,
  qGid,
  qLis,
  qMatch,
  qMcq,
  qRd,
  qSb,
  qSpeak,
  qSpell,
  qVm,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankA2B: BankEntry[] = [
  // --------------------------------------- CH-24 Countable and Uncountable Nouns
  entry(
    24, 1, "countable vs uncountable",
    qMcq(
      "Which noun is uncountable?",
      [
        ["a", "rice"],
        ["b", "apple"],
        ["c", "egg"],
        ["d", "biscuit"],
      ],
      "a",
      fbx("rice", "Rice cannot be counted directly (two rices is impossible) — it needs a unit: two bags of rice. The others can be counted one by one.", {
        whyWrong: "Apples, eggs and biscuits all take numbers: one apple, two eggs. Liquids and grains behave like rice.",
        rule: ["Uncountable = no plural, no a/an", "rice, water, money, information — use some/a unit: a grain of rice."],
        similar: ["We need more information about the trip.", "Necesitamos más información sobre el viaje."],
        revise: ["ch-24-l-01", "Countable vs Uncountable draws the line.", "Countable vs Uncountable"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["nouns", "uncountable"] },
    ),
  ),
  entry(
    24, 2, "much and many",
    qCorr(
      "One word is wrong. Write the sentence correctly.",
      "How many money do we need for the tickets?",
      ["How much money do we need for the tickets?"],
      fbx(
        "How much money do we need for the tickets?",
        "Money is uncountable, so the question word is how much. Many goes with countables (how many tickets).",
        {
          whyWrong: "Many counts plural nouns you can number. Money has no plural form in normal use, so much is required.",
          rule: ["much + uncountable; many + countable", "How much time? How many hours?"],
          similar: ["There isn't much milk left.", "No queda mucha leche."],
          revise: ["ch-24-l-02", "Much and Many teaches the pairing.", "Much and Many"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["quantifiers", "much-many"] },
    ),
  ),
  entry(
    24, 3, "few / a few / little / a little",
    qFill(
      "Complete the sentence with the best phrase.",
      "We only have ___ petrol — we can't reach the next city.",
      ["little", "a little"],
      fbx(
        "(very) little",
        "Without a, little sounds negative: not enough. A little is positive: some, enough for now. The can't in the sentence points to the negative sense.",
        {
          whyWrong: "A few / few are for countables (cars, coins). Petrol is uncountable, so the little family is needed — and the negative tone wants little without a.",
          rule: ["little (−) vs a little (+)", "We have little time (a problem). We have a little time (it's fine)."],
          similar: ["There's little point in arguing.", "Hay poco sentido en discutir."],
          revise: ["ch-24-l-03", "Few, A Few, Little, A Little teaches the four-way split.", "Few, A Few, Little, A Little"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["quantifiers", "little-few"] },
    ),
  ),
  entry(
    24, 4, "some and any review",
    qGid(
      "Label the highlighted word in the sentence.",
      "Would you like some tea with your breakfast?",
      "some",
      "What is the highlighted word doing here?",
      "quantifiers",
      [
        ["a", "an offer — some is normal in polite offers"],
        ["b", "a mistake — some must become any in questions"],
        ["c", "a plural marker on a countable noun"],
        ["d", "an uncountable amount of tea"],
      ],
      "a",
      fbx(
        "some in an offer",
        "In offers and requests, some stays some even in questions: would you like some…? The any rule applies to real information questions.",
        {
          whyWrong: "Changing it to any would sound like a genuine information question (do we have any tea?), losing the polite offer meaning.",
          rule: ["Offers keep some", "Would you like some help? Can I get you some water?"],
          similar: ["Could you give me some advice?", "¿Podrías darme algún consejo?"],
          revise: ["ch-24-l-04", "Some, Any and Quantifier Review covers the offer exception.", "Some, Any and Quantifier Review"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["quantifiers", "some-any"] },
    ),
  ),
  entry(
    24, 5, "food and amounts",
    qMatch(
      "Match each food with its natural measuring unit.",
      [
        ["l1", "bread"],
        ["l2", "water"],
        ["l3", "rice"],
        ["l4", "cheese"],
      ],
      [
        ["r1", "a slice of"],
        ["r2", "a glass of"],
        ["r3", "a piece of"],
        ["r4", "a bowl of"],
      ],
      [
        ["l1", "r1"],
        ["l2", "r2"],
        ["l3", "r4"],
        ["l4", "r3"],
      ],
      fbx(
        "a slice of bread, a glass of water, a bowl of rice, a piece of cheese",
        "Uncountable foods take unit nouns to become countable: slices, glasses, bowls, pieces.",
        {
          whyWrong: "A slice of water is impossible — each food has its natural units. Learning the pairs (bread-slice, water-glass) is part of the vocabulary.",
          rule: ["Unit + of + uncountable", "Two cups of coffee, a loaf of bread."],
          similar: ["Can I have a piece of cake?", "¿Puedo tomar un trozo de tarta?"],
          revise: ["ch-24-l-05", "Food and Amounts in Real Life practises units.", "Food and Amounts in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["food", "units"] },
    ),
  ),
  entry(
    24, 2, "quantifiers in listening",
    qLis(
      "Listen and answer: how many eggs are left?",
      "There are plenty of vegetables, but we only have a few eggs and very little flour.",
      "How many eggs are left?",
      ["a few", "only a few", "we only have a few", "a few eggs"],
      fbx(
        "only a few",
        "A few (with a) means a small but positive number — enough for something. Few without a would mean almost none.",
        {
          whyWrong: "Very little flour belongs to the uncountable half. Eggs are countable, so they take the few family.",
          rule: ["a few = some; few = almost none", "We have a few eggs (omelette possible). We have few eggs (problem)."],
          similar: ["I have a few questions left.", "Me quedan unas preguntas."],
          revise: ["ch-24-l-03", "Few, A Few, Little, A Little is the four-way lesson.", "Few, A Few, Little, A Little"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "quantifiers"] },
    ),
  ),
  entry(
    24, 5, "shopping list reading",
    qRd(
      "Read the note and answer the question.",
      "The shopping note",
      "Mum, we need a few things for tonight: there isn't much pasta left, and we have no onions at all. Please get a little olive oil — the bottle is nearly empty. There are plenty of tomatoes, so don't buy any more. And if you can, get a couple of lemons for the tea.",
      "Which item do they have plenty of?",
      [
        ["a", "tomatoes"],
        ["b", "pasta"],
        ["c", "onions"],
        ["d", "olive oil"],
      ],
      "a",
      fbx(
        "tomatoes",
        "Plenty of tomatoes means more than enough — the note even says don't buy any more. Pasta and oil are running low; onions are at zero.",
        {
          whyWrong: "Isn't much pasta and nearly empty oil are shortage signals; no onions at all is zero. Only plenty signals abundance.",
          rule: ["Read the quantity word first", "Plenty (much) / a few (some) / little (low) / no (zero)."],
          similar: ["We have plenty of time before the train.", "Tenemos mucho tiempo antes del tren."],
          revise: ["ch-24-l-04", "Some, Any and Quantifier Review covers the full scale.", "Some, Any and Quantifier Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "quantifiers"] },
    ),
  ),
  entry(
    24, 5, "amounts challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["we", "need", "a", "little", "more", "time", "to", "finish", "many", "the", "report"],
      ["We need a little more time to finish the report."],
      fbx(
        "We need a little more time to finish the report.",
        "Time is uncountable here, so a little fits. The tile many is the trap: it only counts plurals, and this time is singular.",
        {
          whyWrong: "A many more time is impossible — much/a little are the uncountable words. Many belongs to sentences like we need many more hands.",
          rule: ["a little + uncountable", "A little help, a little time."],
          similar: ["Could you give us a little more space?", "¿Podrías darnos un poco más de espacio?"],
          revise: ["ch-24-l-03", "Few, A Few, Little, A Little is the decision lesson.", "Few, A Few, Little, A Little"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["quantifiers", "sentence building"], hints: ["Is time countable or uncountable here?", "Uncountable amounts take the little family.", "One tile is for plural nouns only — leave it out."] },
    ),
  ),

  // ---------------------------------------------------------------- CH-25 Comparisons
  entry(
    25, 1, "comparative adjectives",
    qFill(
      "Complete the comparison with the correct form.",
      "This bus is ___ than the train, but it is cheaper.",
      ["slower"],
      fbx(
        "slower",
        "Short adjectives compare with -er + than: slower than. The second half (cheaper) already shows the pattern.",
        {
          whyWrong: "More slow is not used for one-syllable adjectives — the -er form is standard: slower, cheaper, faster.",
          rule: ["Short adj: -er + than", "big → bigger, easy → easier."],
          similar: ["Today is hotter than yesterday.", "Hoy hace más calor que ayer."],
          revise: ["ch-25-l-01", "Comparative Adjectives teaches -er forms.", "Comparative Adjectives"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["comparatives", "adjectives"] },
    ),
  ),
  entry(
    25, 2, "superlative adjectives",
    qMcq(
      "Complete the sentence: It's ___ film I have ever seen.",
      [
        ["a", "the funniest"],
        ["b", "funnier"],
        ["c", "the most funny"],
        ["d", "funniest"],
      ],
      "a",
      fbx("the funniest", "Superlatives need the: the funniest … ever. The -est ending marks the top of a group.", {
        whyWrong: "Funnier compares two things only; the most funny doubles a marking already carried by funny → funniest; funniest alone is missing the.",
        rule: ["the + -est", "The tallest, the quickest, the easiest."],
        similar: ["She is the youngest in the class.", "Es la más joven de la clase."],
        revise: ["ch-25-l-02", "Superlative Adjectives teaches the -est family.", "Superlative Adjectives"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["superlatives", "adjectives"] },
    ),
  ),
  entry(
    25, 3, "as … as",
    qCorr(
      "One part is wrong. Write the sentence correctly.",
      "The film wasn't as good than the book.",
      ["The film wasn't as good as the book."],
      fbx(
        "The film wasn't as good as the book.",
        "As … as compares equals: as good as. The word than belongs to -er comparisons (better than).",
        {
          whyWrong: "As good than mixes the two comparison machines. As needs its second as.",
          rule: ["as + adj + as", "She is as tall as her brother. Not as tall as = shorter."],
          similar: ["It's not as cold as yesterday.", "No hace tanto frío como ayer."],
          revise: ["ch-25-l-03", "Than and As...As separates the two patterns.", "Than and As...As"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["comparatives", "as-as"] },
    ),
  ),
  entry(
    25, 4, "irregular comparisons",
    qMatch(
      "Match each adjective with its comparative and superlative.",
      [
        ["l1", "good"],
        ["l2", "bad"],
        ["l3", "far"],
        ["l4", "little"],
      ],
      [
        ["r1", "worse / the worst"],
        ["r2", "better / the best"],
        ["r3", "less / the least"],
        ["r4", "farther / the farthest"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r1"],
        ["l3", "r4"],
        ["l4", "r3"],
      ],
      fbx(
        "good → better/best; bad → worse/worst; far → farther/farthest; little → less/least",
        "These four change their whole shape instead of taking -er/-est. They appear constantly in speech, so the pairs must be automatic.",
        {
          whyWrong: "Gooder and badder do not exist. The irregular list is short — learn it once and it covers every comparison you will make.",
          rule: ["Four irregulars", "good, bad, far, little — better, worse, farther, less."],
          similar: ["My results were better this term.", "Mis resultados fueron mejores este trimestre."],
          revise: ["ch-25-l-04", "Irregular Comparisons lists all four pairs.", "Irregular Comparisons"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["comparatives", "irregular"], hints: ["Good and bad are the everyday pair — start there.", "Far measures distance; its comparative grows an -er.", "Little pairs with less."] },
    ),
  ),
  entry(
    25, 5, "comparing in real life",
    qGid(
      "Label the highlighted form in the sentence.",
      "The corner shop is less crowded than the supermarket on Saturdays.",
      "less crowded",
      "What comparison is the highlighted phrase making?",
      "comparisons",
      [
        ["a", "a negative comparison — the shop has fewer people"],
        ["b", "a superlative — the shop is the best"],
        ["c", "an equality comparison with as"],
        ["d", "an irregular comparison"],
      ],
      "a",
      fbx(
        "less + adjective = fewer in that quality",
        "Less crowded than says the shop has a smaller amount of crowdedness. The opposite is more crowded than.",
        {
          whyWrong: "There is no the …-est here, and no as … as. Less … than is the comparative of less.",
          rule: ["less/more + long adjective + than", "Less expensive, more comfortable."],
          similar: ["This route is less dangerous in daylight.", "Esta ruta es menos peligrosa de día."],
          revise: ["ch-25-l-05", "Comparing in Real Life practises less/more comparisons.", "Comparing in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["comparatives", "less"] },
    ),
  ),
  entry(
    25, 5, "comparisons in listening",
    qLis(
      "Listen and answer: which is faster, the train or the coach?",
      "The train is much faster, but the coach is far cheaper and it goes directly to the town centre.",
      "Which is faster?",
      ["the train", "train", "the train is faster", "the train is much faster"],
      fbx(
        "the train",
        "Two comparisons in one sentence: faster favours the train; cheaper favours the coach. Listening for the adjective after each subject avoids the swap.",
        {
          whyWrong: "The coach wins on price, not speed. Each comparative belongs to its own subject.",
          rule: ["Track adjective to subject", "Faster → train. Cheaper → coach."],
          similar: ["Mine is older but cleaner than yours.", "El mío es más viejo pero más limpio que el tuyo."],
          revise: ["ch-25-l-01", "Comparative Adjectives trains the -er + than pattern.", "Comparative Adjectives"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "comparatives"] },
    ),
  ),
  entry(
    25, 5, "comparison reading",
    qRd(
      "Read the two adverts and answer the question.",
      "Two ways to travel",
      "FLYGO: the fastest crossing on the river — 25 minutes, every hour, but the most expensive ticket in town. SLOWBOAT: cheaper and quieter, with the best views of the old city; the journey takes the better part of an hour, and coffee is included.",
      "Which service is the most expensive?",
      [
        ["a", "FLYGO"],
        ["b", "SLOWBOAT"],
        ["c", "both cost the same"],
        ["d", "the adverts don't say"],
      ],
      "a",
      fbx(
        "FLYGO",
        "The superlative phrase the most expensive ticket in town names FLYGO. SLOWBOAT wins on price (cheaper) and views (the best).",
        {
          whyWrong: "Cheaper is comparative, not superlative — it says SLOWBOAT costs less than FLYGO, which confirms FLYGO as the most expensive.",
          rule: ["Comparatives rank two; superlatives crown one", "Cheaper than → superlative in the group: the most expensive."],
          similar: ["This is the busiest shop on the street.", "Esta es la tienda más concurrida de la calle."],
          revise: ["ch-25-l-02", "Superlative Adjectives covers the -est family.", "Superlative Adjectives"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "superlatives"] },
    ),
  ),
  entry(
    25, 5, "comparison speaking",
    qSpeak(
      "Speaking practice: compare two places you know.",
      "Choose two places you know well (two cities, two cafés, two schools). Say three sentences: one comparative with -er, one superlative with the …-est, and one with as … as.",
      ["The café is quieter.", "It has the best coffee.", "It's as cheap as the other one."],
      ["than", "the best", "as"],
      fbx(
        "Three spoken comparison sentences, for example: My city is bigger than yours. It has the oldest university in the country. The buses aren't as fast as the metro.",
        "The machine checks that than, the best and as appear — the three comparison machines. Speaking them together trains the switch between two-way and top-of-group.",
        {
          whyWrong: "Stopping at -er sentences only compares pairs. The superlative needs the, and as needs its second as.",
          rule: ["Three comparison tools", "-er + than; the -est; as + adj + as."],
          similar: ["This line is shorter but slower.", "Esta cola es más corta pero más lenta."],
          revise: ["ch-25-l-05", "Comparing in Real Life mixes all three tools.", "Comparing in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "comparatives"] },
    ),
  ),

  // ------------------------------ CH-26 Prepositions and Everyday Phrasal Verbs
  entry(
    26, 1, "dependent prepositions",
    qFill(
      "Complete the sentence with the correct preposition.",
      "I'm really looking forward ___ the summer holidays.",
      ["to"],
      fbx(
        "to",
        "Look forward TO something — the preposition is fixed by the verb phrase, not chosen by meaning. Fixed pairs must be memorised.",
        {
          whyWrong: "Looking forward for/at/with sound natural to learners but break the fixed pair. Depends on the verb, not the situation.",
          rule: ["Fixed verb + preposition pairs", "listen to, wait for, laugh at, look forward to."],
          similar: ["She listens to the radio every morning.", "Escucha la radio cada mañana."],
          revise: ["ch-26-l-01", "Dependent Prepositions teaches the fixed pairs.", "Dependent Prepositions"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["prepositions", "verb patterns"] },
    ),
  ),
  entry(
    26, 2, "what is a phrasal verb",
    qGid(
      "Label the highlighted verb in the sentence.",
      "Please turn off your phone before the film starts.",
      "turn off",
      "What kind of verb is the highlighted phrase?",
      "verb types",
      [
        ["a", "a phrasal verb — verb + particle with its own meaning"],
        ["b", "a verb + preposition describing position"],
        ["c", "two separate verbs"],
        ["d", "a modal verb"],
      ],
      "a",
      fbx(
        "turn off is a phrasal verb",
        "Turn + off combines into a new meaning: stop the phone. The particle off changes the verb's meaning entirely.",
        {
          whyWrong: "As two separate words, turn would mean rotate — the meaning here (stop a device) only exists as a unit.",
          rule: ["Phrasal verb = verb + particle, one meaning", "Turn on, turn off, turn up — each particle shifts the sense."],
          similar: ["Could you put on some music?", "¿Podrías poner algo de música?"],
          revise: ["ch-26-l-02", "What Is a Phrasal Verb? introduces the type.", "What Is a Phrasal Verb?"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["phrasal verbs", "verb types"] },
    ),
  ),
  entry(
    26, 3, "daily phrasal verbs",
    qVm(
      "Match each phrasal verb with its meaning.",
      [
        ["w1", "get up", "phrasal"],
        ["w2", "give back", "phrasal"],
        ["w3", "find out", "phrasal"],
        ["w4", "look after", "phrasal"],
      ],
      [
        ["m1", "discover information"],
        ["m2", "leave your bed"],
        ["m3", "take care of someone"],
        ["m4", "return something"],
      ],
      [
        ["w1", "m2"],
        ["w2", "m4"],
        ["w3", "m1"],
        ["w4", "m3"],
      ],
      fbx(
        "get up — leave your bed; give back — return; find out — discover; look after — take care of",
        "Everyday phrasal verbs carry meanings that the single verb never has on its own. Matching them to meanings is how they enter your active vocabulary.",
        {
          whyWrong: "Look after is about care, not looking with your eyes; find out is about information, not finding an object.",
          similar: ["I'll find out and call you back.", "Lo averiguaré y te devuelvo la llamada."],
          revise: ["ch-26-l-03", "Daily-Use Phrasal Verbs teaches this set.", "Daily-Use Phrasal Verbs"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["phrasal verbs", "daily"], hints: ["Get up happens in the morning.", "Give back is what you do with borrowed things.", "Look after is what a babysitter does."] },
    ),
  ),
  entry(
    26, 3, "phrasal verbs in context",
    qCorr(
      "One particle is wrong. Write the sentence correctly.",
      "Can you look after of my cat while I'm away?",
      ["Can you look after my cat while I'm away?"],
      fbx(
        "Can you look after my cat while I'm away?",
        "Look after takes its object directly — no of. Some learners add of after particles; the phrasal verb attaches straight to the noun.",
        {
          whyWrong: "Look after of doubles the linking word. Phrasal verbs behave like single transitive verbs: look after it.",
          rule: ["No of after particles", "Look after the baby. Listen to me."],
          similar: ["She takes care of her grandmother.", "Cuida a su abuela."],
          revise: ["ch-26-l-03", "Daily-Use Phrasal Verbs practises object placement.", "Daily-Use Phrasal Verbs"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["phrasal verbs", "correction"] },
    ),
  ),
  entry(
    26, 4, "particles and prepositions",
    qLis(
      "Listen and answer: what happens to the bus at the terminus?",
      "The bus gets to the terminus at ten, drops off the last passengers, and sets off back to the depot.",
      "What does the bus do after dropping off the passengers?",
      ["sets off", "it sets off", "sets off back to the depot", "it sets off back to the depot"],
      fbx(
        "it sets off (back to the depot)",
        "Set off = begin a journey. Three phrasal verbs in one sentence: gets to (arrives), drops off (lets passengers out), sets off (starts the return).",
        {
          whyWrong: "Drops off belongs to the passengers' part of the story. The question asks what happens NEXT — after the drop-off, the bus sets off.",
          rule: ["Sequence particles", "Gets in, drops off, sets off — each particle moves the story forward."],
          similar: ["We set off at dawn and got in at noon.", "Salimos al amanecer y llegamos al mediodía."],
          revise: ["ch-26-l-04", "Particles and Prepositions in Real Life teaches journey particles.", "Particles and Prepositions in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "phrasal verbs"] },
    ),
  ),
  entry(
    26, 4, "phrasal verbs in reading",
    qRd(
      "Read the text and answer the question.",
      "A note on the fridge",
      "Gone to pick up Sam from the station. I'll drop off the shopping on the way back, and then I'm meeting Dara — we're going to check out the new market by the river. Don't wait up; we might get back late. The spare key is with the neighbour — just ask her if you run out of milk.",
      "What are the writer and Dara planning to do?",
      [
        ["a", "visit the new market"],
        ["b", "pick up Sam from the station"],
        ["c", "drop off the shopping"],
        ["d", "borrow milk from the neighbour"],
      ],
      "a",
      fbx(
        "check out the new market",
        "Each phrasal verb owns one part of the plan: pick up (station), drop off (shopping), check out (market), get back (return home).",
        {
          whyWrong: "Every option appears in the note — but only check out the market is the plan with Dara. Track each phrasal verb to its person and time.",
          rule: ["Match the verb to its moment", "Skim for the name (Dara), then read that clause."],
          similar: ["I'll call you back after I hang up.", "Te llamo después de colgar."],
          revise: ["ch-26-l-04", "Particles and Prepositions in Real Life trains exactly this reading.", "Particles and Prepositions in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "phrasal verbs"] },
    ),
  ),
  entry(
    26, 3, "phrasal spelling",
    qSpell(
      "One word is spelled wrongly. Write the correct spelling.",
      "I'll call you back when I get off the trane at the terminus.",
      "trane",
      ["train"],
      fbx(
        "train",
        "Train keeps its ai vowel pair. The misspelling trane swapped the i for an e, which is how the word sounds — but not how it is written.",
        {
          whyWrong: "Trane looks phonetic but wrong: the long a sound is written ai in train, wait, rain.",
          rule: ["ai for the long a sound", "train, rain, wait, paint."],
          similar: ["We waited for the train in the rain.", "Esperamos el tren bajo la lluvia."],
          revise: ["ch-26-l-04", "Particles and Prepositions in Real Life includes travel vocabulary.", "Particles and Prepositions in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["spelling", "travel"], hints: ["The word is a thing you travel on.", "The long a sound has a two-letter spelling.", "Think of rain — the same vowel pair."] },
    ),
  ),
  entry(
    26, 4, "phrasal challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["we", "set", "off", "early", "to", "avoid", "the", "traffic", "on", "monday"],
      ["We set off early to avoid the traffic on Monday."],
      fbx(
        "We set off early to avoid the traffic on Monday.",
        "Set off keeps verb + particle together, and the time phrase sits naturally at the end. The extra tile on cannot stand before Monday together with to.",
        {
          whyWrong: "Set off early on to avoid doubles the linking words. One purpose link (to) is all the sentence allows.",
          rule: ["set off + to-infinitive for purpose", "We set off early to avoid the traffic."],
          similar: ["She gave up smoking to save money.", "Dejó de fumar para ahorrar."],
          revise: ["ch-26-l-03", "Daily-Use Phrasal Verbs covers set off.", "Daily-Use Phrasal Verbs"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["phrasal verbs", "sentence building"], hints: ["The phrasal verb is set off — keep it together.", "The purpose needs one to, not two.", "The time phrase goes last."] },
    ),
  ),

  // ------------------------------------------------------- CH-27 Joining Sentences
  entry(
    27, 1, "and, but, or",
    qMcq(
      "Which joining word fits: I like coffee, ___ I never drink it after six.",
      [
        ["a", "but"],
        ["b", "and"],
        ["c", "or"],
        ["d", "so"],
      ],
      "a",
      fbx("but", "But joins two ideas that push against each other: liking coffee vs avoiding it late. Contrast words signal the surprise.", {
        whyWrong: "And would add a second fact of the same kind; or would offer a choice; so would give a result. The relationship here is contrast.",
        rule: ["and = +, but = contrast, or = choice", "Pick the joiner by the meaning between the ideas."],
        similar: ["It's cheap but uncomfortable.", "Es barato pero incómodo."],
        revise: ["ch-27-l-01", "And, But, Or teaches the three basic joiners.", "And, But, Or"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["conjunctions", "joining"] },
    ),
  ),
  entry(
    27, 2, "because and so",
    qCorr(
      "The joiner is wrong. Write the sentence correctly (keep the two halves).",
      "It was raining, because we took the bus.",
      ["It was raining, so we took the bus."],
      fbx(
        "It was raining, so we took the bus.",
        "So introduces the RESULT of the first half. Because would need the halves to swap: we took the bus because it was raining.",
        {
          whyWrong: "Because introduces a CAUSE, not a result. With the halves in this order, the rain is the cause and the bus is the consequence — that is so.",
          rule: ["because = cause; so = result", "I was tired, so I slept. I slept because I was tired."],
          similar: ["The shop was closed, so we went home.", "La tienda estaba cerrada, así que volvimos a casa."],
          revise: ["ch-27-l-02", "Because and So separates cause from result.", "Because and So"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["conjunctions", "cause"] },
    ),
  ),
  entry(
    27, 3, "although",
    qGid(
      "Label the highlighted word in the sentence.",
      "Although the tickets were expensive, the concert was worth every penny.",
      "Although",
      "What is the job of the highlighted word?",
      "conjunctions",
      [
        ["a", "concession — it admits a difficulty but keeps the conclusion"],
        ["b", "cause — it gives the reason for going"],
        ["c", "result — it shows what happened next"],
        ["d", "time — it says when the concert was"],
      ],
      "a",
      fbx(
        "although is a concession word",
        "Although admits a problem (expensive tickets) and then overcomes it (worth every penny). It never gives a cause.",
        {
          whyWrong: "Because would make the price the reason for the concert being good, which is not the meaning. Concession admits and moves past.",
          rule: ["although = surprising contrast", "Although it rained, we walked. (Rain was expected to stop us.)"],
          similar: ["Although she was tired, she kept working.", "Aunque estaba cansada, siguió trabajando."],
          revise: ["ch-27-l-03", "Although and Complex Sentences teaches concession.", "Although and Complex Sentences"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["conjunctions", "concession"] },
    ),
  ),
  entry(
    27, 3, "complex sentences",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "Although the queue was long, nobody left before the doors opened.",
      ["Although the queue was long, nobody left before the doors opened."],
      fbx(
        "Although the queue was long, nobody left before the doors opened.",
        "Two clauses joined by although: the difficulty (long queue) and the surprising outcome (nobody left). The comma marks the boundary.",
        {
          whyWrong: "Missing the comma or swapping although for because are the two standard slips in this pattern.",
          rule: ["Although + clause, + clause", "Comma after the although-clause."],
          similar: ["Although he was nervous, he spoke calmly.", "Aunque estaba nervioso, habló con calma."],
          revise: ["ch-27-l-03", "Although and Complex Sentences covers the comma rule.", "Although and Complex Sentences"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "conjunctions"] },
    ),
  ),
  entry(
    27, 4, "combining ideas",
    qRd(
      "Read the paragraph and answer the question.",
      "Saturday decisions",
      "We wanted to walk to the market, but the sky looked dangerous. My sister suggested the bus; however, it doesn't run on Saturdays in August. In the end, although the rain was heavy, we took our umbrellas and walked — and the market stayed open, so we were glad we went.",
      "Which word admits a difficulty but keeps the final outcome?",
      [
        ["a", "although"],
        ["b", "but"],
        ["c", "however"],
        ["d", "so"],
      ],
      "a",
      fbx(
        "although",
        "Although carries the heaviest concession: it admits the heavy rain AND delivers the outcome (they walked anyway). But and however also contrast, but they sit between two separate sentences.",
        {
          whyWrong: "But and however mark contrast between independent clauses; so gives a result. Only although builds a concession inside ONE sentence.",
          rule: ["Three contrast tools, different weights", "although (inside a sentence) < but/however (between sentences)."],
          similar: ["Although it was far, we cycled there.", "Aunque estaba lejos, fuimos en bici."],
          revise: ["ch-27-l-03", "Although and Complex Sentences grades the contrast tools.", "Although and Complex Sentences"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "conjunctions"] },
    ),
  ),
  entry(
    27, 4, "joining in writing",
    qWrite(
      "Writing challenge: join your ideas.",
      "Write four sentences about a decision you made recently. Join your ideas with at least three different joiners from this chapter: but, because, so, although. Show the reason, the contrast and the result.",
      45,
      ["but", "because", "so", "although"],
      fbx(
        "A paragraph like: Last month I wanted to change my phone, but the new models were expensive. Because my old one still worked, I decided to wait. Although waiting was hard, it was the sensible choice. So I saved the money and bought a better one later.",
        "The machine checks that at least one joiner from the chapter appears (your text should use several of the four) and that you reach 45 words. The craft is that each joiner carries a different relationship — reason, contrast, result, concession — not just longer sentences.",
        {
          whyWrong: "Using one joiner four times (and, and, and…) flattens the logic. Each relationship needs its own word.",
          rule: ["One relationship, one joiner", "cause → because; result → so; contrast → but; concession → although."],
          similar: ["Although it was late, we kept dancing.", "Aunque era tarde, seguimos bailando."],
          revise: ["ch-27-l-04", "Combining Your Ideas practises choosing joiners.", "Combining Your Ideas and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "conjunctions"], hints: ["State the decision first in one short sentence.", "Give the cause with because and the obstacle with but.", "Close with the result using so."] },
    ),
  ),
  entry(
    27, 4, "joining challenge",
    qSb(
      "Challenge: build the complex sentence from the tiles. One tile is extra.",
      ["although", "the", "test", "was", "hard", "most", "students", "passed", "it", "because"],
      ["Although the test was hard, most students passed it."],
      fbx(
        "Although the test was hard, most students passed it.",
        "The although-clause comes first with a comma; the main clause carries the outcome. The tile because would turn the difficulty into a reason for passing — the opposite of the intended meaning.",
        {
          whyWrong: "Because the test was hard, most students passed claims the difficulty CAUSED the passes. Although admits the difficulty and overcomes it.",
          rule: ["although = admission, not cause", "Although it was hard, they passed."],
          similar: ["Although he was ill, he came to class.", "Aunque estaba enfermo, vino a clase."],
          revise: ["ch-27-l-03", "Although and Complex Sentences is the concession lesson.", "Although and Complex Sentences"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["conjunctions", "sentence building"], hints: ["Which joiner admits a difficulty instead of giving a reason?", "The although-clause needs a comma after it.", "One tile would reverse the meaning of the sentence — leave it out."] },
    ),
  ),

  // --------------------------------------- CH-28 Practical Paragraphs and Communication
  entry(
    28, 1, "paragraph structure",
    qMcq(
      "Which sentence works best as the TOPIC sentence of a paragraph about your morning routine?",
      [
        ["a", "My mornings follow the same simple pattern every day."],
        ["b", "First I turn off the alarm."],
        ["c", "The kettle is in the kitchen."],
        ["d", "Finally, I leave the house at eight."],
      ],
      "a",
      fbx("My mornings follow the same simple pattern every day.", "A topic sentence announces the paragraph's ONE idea; the other sentences then develop it in order.", {
        whyWrong: "First I turn off the alarm is a detail (a step), the kettle sentence is an even smaller detail, and finally… is the closing step. None of them announces the topic.",
        rule: ["Topic sentence = the promise", "Say what the paragraph is about, then keep the promise."],
        similar: ["Evenings are my favourite time to study.", "La tarde es mi momento favorito para estudiar."],
        revise: ["ch-28-l-01", "Paragraph Structure teaches the topic sentence's job.", "Paragraph Structure"],
      }),
      { difficulty: "medium", skill: "writing", tags: ["paragraphs", "topic sentences"] },
    ),
  ),  entry(
    28, 2, "topic sentences and support",
    qGid(
      "Label the highlighted sentence in the paragraph.",
      "Our street market has changed a lot this year. The fruit stalls now sell organic produce, and two new cafés have opened next to the fish counter. Shoppers seem happier, and the queue at the bakery is longer than ever.",
      "The fruit stalls now sell organic produce, and two new cafés have opened next to the fish counter.",
      "What is the job of the highlighted sentence?",
      "paragraph roles",
      [
        ["a", "support — a detail that proves the topic sentence"],
        ["b", "the topic sentence of the paragraph"],
        ["c", "the concluding sentence"],
        ["d", "an unrelated sentence"],
      ],
      "a",
      fbx(
        "it is supporting detail",
        "The first sentence announces the topic (the market has changed); the highlighted sentence gives evidence for that claim.",
        {
          whyWrong: "It does not open the paragraph and does not wrap it up — it proves the opening claim with concrete examples.",
          rule: ["Topic → support → close", "Announce, prove, finish."],
          similar: ["The team improved because the new coach worked on fitness.", "El equipo mejoró porque el entrenador trabajó la forma física."],
          revise: ["ch-28-l-02", "Topic Sentences and Support teaches the three roles.", "Topic Sentences and Support"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["paragraphs", "reading"] },
    ),
  ),
  entry(
    28, 3, "describing experiences",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "Since I started this job, I have learned to work under pressure.",
      ["Since I started this job, I have learned to work under pressure."],
      fbx(
        "Since I started this job, I have learned to work under pressure.",
        "Experience descriptions pair present perfect (what you have learned) with since + past simple (when it started).",
        {
          whyWrong: "The two halves must split their tenses: since I started (past) and I have learned (perfect).",
          rule: ["since + past simple; main clause + present perfect", "Since 2024 I have travelled a lot."],
          similar: ["Since moving here, I have made many friends.", "Desde que me mudé aquí, he hecho muchos amigos."],
          revise: ["ch-28-l-03", "Describing Experiences practises this pattern.", "Describing Experiences"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "experiences"] },
    ),
  ),
  entry(
    28, 4, "writing simple emails",
    qCorr(
      "One opening is wrong for a formal email to a teacher. Write the corrected greeting line only.",
      "Hey Mr Costa, you ok? I want to ask about the homework.",
      ["Dear Mr Costa, I hope you are well. I am writing to ask about the homework."],
      fbx(
        "Dear Mr Costa, I hope you are well. I am writing to ask about the homework.",
        "Formal emails open with Dear + name, a polite health line, and a purpose sentence with I am writing to…",
        {
          whyWrong: "Hey and you ok? belong to chat messages. Register — the level of formality — is part of grammar: the choice of words changes with the reader.",
          rule: ["Formal email opening", "Dear + name, one polite line, then I am writing to…"],
          similar: ["Dear Ms Ruiz, I hope this finds you well.", "Estimada Sra. Ruiz, espero que se encuentre bien."],
          revise: ["ch-28-l-04", "Writing Simple Emails teaches register and openings.", "Writing Simple Emails"],
        },
      ),
      { difficulty: "medium", skill: "writing", tags: ["emails", "register"] },
    ),
  ),
  entry(
    28, 5, "everyday communication",
    qLis(
      "Listen and answer: what does the speaker offer to do?",
      "You look exhausted — sit down. I'll make you a cup of tea and finish the washing-up.",
      "What does the speaker offer to do?",
      ["make tea and finish the washing-up", "make a cup of tea", "she offers to make tea and wash up", "he offers to make tea and wash up"],
      fbx(
        "make tea and finish the washing-up",
        "Will (I'll) is the offering tense: instant decisions to help. Two offers in one sentence — tea and the dishes.",
        {
          whyWrong: "Only one of the two offers would be an incomplete answer. Will signals spontaneous help, not a plan made earlier.",
          rule: ["I'll = offer/decision now", "I'll carry that. I'll wait here."],
          similar: ["I'll water the plants while you're away.", "Regaré las plantas mientras no estés."],
          revise: ["ch-28-l-05", "Everyday Communication practises offers and responses.", "Everyday Communication and A2 Exit"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "offers"] },
    ),
  ),
  entry(
    28, 2, "paragraph reading",
    qRd(
      "Read the paragraph and answer the question.",
      "Why I cycle",
      "I cycle to work for three reasons. First, the journey takes half the time of the bus during rush hour. Second, the exercise wakes me up better than any coffee. Third, and honestly most importantly, I have never once had to search for a parking space.",
      "How many supporting reasons does the writer give?",
      [
        ["a", "three"],
        ["b", "two"],
        ["c", "one"],
        ["d", "none"],
      ],
      "a",
      fbx(
        "three",
        "The topic sentence promises three reasons (for three reasons) and the paragraph delivers first, second, third. Counting the signposts is the skill.",
        {
          whyWrong: "Missing the ordinal words (first, second, third) makes any number seem possible. They are the paragraph's signposts.",
          rule: ["Signpost words count the support", "First, second, finally — each one starts a new reason."],
          similar: ["There are two problems here: cost and time.", "Hay dos problemas aquí: el coste y el tiempo."],
          revise: ["ch-28-l-02", "Topic Sentences and Support teaches signposting.", "Topic Sentences and Support"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "paragraphs"] },
    ),
  ),
  entry(
    28, 5, "A2 exit speaking",
    qSpeak(
      "Speaking challenge: your A2 exit interview.",
      "Speak for about thirty seconds on this topic: 'A skill I have learned in the last year.' Use the present perfect for the experience, past simple for how you started, and because or although at least once.",
      ["I have learned to cook.", "I started in January.", "Although it was hard at first, I kept practising."],
      ["have", "because", "although"],
      fbx(
        "A spoken paragraph, for example: In the last year I have learned to cook properly. I started in January because I moved into my own flat. Although the first meals were terrible, I practised every week, and now I have cooked for ten people at once.",
        "The machine checks that have (the perfect marker) and one joiner (because or although) appear. This is the A2 exit pattern: experience + origin + concession, spoken in one flow.",
        {
          whyWrong: "Mixing the two tenses (I have started in January) breaks the timeline. Perfect for up-to-now, past simple for the starting point.",
          rule: ["A2 exit formula", "Have learned (perfect) + started (past) + although (concession)."],
          similar: ["I have improved a lot since I began.", "He mejorado mucho desde que empecé."],
          revise: ["ch-28-l-05", "Everyday Communication and A2 Exit rehearses this exact format.", "Everyday Communication and A2 Exit"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "A2 exit"], hints: ["Open with the present perfect: In the last year I have …", "Say when it started with past simple.", "Add one difficulty and overcome it with although."] },
    ),
  ),
  entry(
    28, 4, "email challenge",
    qSb(
      "Challenge: build the email opening from the tiles. One tile is extra.",
      ["i", "am", "writing", "to", "ask", "about", "the", "homework", "please", "gonna"],
      ["I am writing to ask about the homework."],
      fbx(
        "I am writing to ask about the homework.",
        "The purpose sentence of a formal email uses I am writing to + verb. The tile gonna is chat English and can never enter a formal line.",
        {
          whyWrong: "I am gonna ask belongs to messages between friends; register is judged as strictly as grammar in formal writing.",
          rule: ["I am writing to…", "The standard purpose line of polite emails."],
          similar: ["I am writing to confirm the meeting.", "Escribo para confirmar la reunión."],
          revise: ["ch-28-l-04", "Writing Simple Emails teaches the formal patterns.", "Writing Simple Emails"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["emails", "sentence building"], hints: ["Formal register: avoid chat words.", "The pattern is I am writing to + verb.", "One tile is a chat-English word — leave it out."] },
    ),
  ),
];
