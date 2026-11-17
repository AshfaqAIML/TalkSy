/**
 * Audio question bank — Part 4 exercises (academic monologues, one
 * lecturer). PROMPT 44 Part 5.
 *
 * A single named lecturer carries each recording, with lecture
 * signposting — "I'll begin with…", "Turning now to…", "Before I
 * conclude…" — carrying the structure. Every recording is original
 * TalkSy practice material written in the style of the test.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const part4Exercises: BankExercise[] = [
  {
    slug: "ielts-lb-p4-history",
    title: "The Merrow Navigation",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 8,
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the history of a canal navigation. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "marsh", name: "Dr Marsh", role: "senior lecturer in transport history", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "marsh", text: "Good morning. Today's extract comes from our transport-history module: the rise and slow decline of the Merrow Navigation, a canal that once carried the lifeblood of an entire valley. I'll begin with its origins." },
      { id: "s2", speakerId: "marsh", text: "In seventeen ninety, the mill owners of Merrow faced a simple problem: their cloth was leaving the valley by packhorse, at a cost that was eating their margins. Their answer was a waterway — a cut linking the mills with the river port at Denaby." },
      { id: "s3", speakerId: "marsh", text: "Parliament approved the scheme in seventeen ninety-three, and the backers appointed as chief engineer a young man named Josiah Kelsall — that's K-E-L-S-A-L-L — who had learned his trade on the northern cuttings." },
      { id: "s4", speakerId: "marsh", text: "Kelsall's main line ran for — well, let me get this right — twenty-six miles, not the twenty-one you'll still find in the older guidebooks, and it climbed through seventeen locks to a summit reservoir." },
      { id: "s5", speakerId: "marsh", text: "The cut opened to freight in seventeen ninety-eight, and for half a century it flourished. Turning now to the peak years: by eighteen thirty-five the company was running close to three hundred boats, and the ledgers record something like two hundred thousand tons a year moving through Denaby basin." },
      { id: "s6", speakerId: "marsh", text: "The decline, when it came, arrived on rails. The railway reached the valley in eighteen forty-six, and within a decade the canal's tolls had halved. In eighteen sixty-one the railway company simply bought the waterway — partly to run it, mostly to bury it.", pauseAfterMs: 300 },
      { id: "s7", speakerId: "marsh", text: "Commercial cargo limped on, narrower each year, until the last load of coal moved in nineteen forty-seven, after which the company let the locks decay." },
      { id: "s8", speakerId: "marsh", text: "Before I conclude, a question I put to every cohort: was the Merrow a failure? The shareholders certainly lost their money. But its legacy is more interesting than its balance sheet. It trained a generation of engineers who went on to build the very railways that replaced it, and today the restored line carries holiday boats while the towpath serves as a green corridor through the city. Not a bad afterlife.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "THE MERROW NAVIGATION — lecture notes" }],
          [{ kind: "text", text: "Origins" }],
          [{ kind: "text", text: "Act of Parliament passed:" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Chief engineer: Josiah" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Main line:" }, { kind: "blank", no: 3 }, { kind: "text", text: "miles, through 17 locks" }],
          [{ kind: "text", text: "Peak years" }],
          [{ kind: "text", text: "Boats working the waterway by 1835: about" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Decline" }],
          [{ kind: "text", text: "Railway reaches the valley:" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Final commercial cargo (coal):" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "1793", alternatives: [], numbers: true },
          { no: 2, answer: "Kelsall", alternatives: ["kelsall"] },
          { no: 3, answer: "26", alternatives: [], numbers: true },
          { no: 4, answer: "300", alternatives: [], numbers: true },
          { no: 5, answer: "1846", alternatives: [], numbers: true },
          { no: 6, answer: "1947", alternatives: [], numbers: true },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "spelling", "detail", "signposts"],
          keywords: ["seventeen ninety-three", "Kelsall", "twenty-six", "three hundred", "eighteen forty-six", "nineteen forty-seven"],
          trap: {
            family: "correction",
            lure: ["twenty-one"],
            note:
              "The lecturer corrects the guidebooks' figure of twenty-one miles to twenty-six — the corrected number is the one that scores.",
          },
          explanation:
            "The notes track the lecture's signposted stages in order: Parliament approved the scheme in 1793, Kelsall — spelt out letter by letter — was the engineer, the main line ran twenty-six miles (correcting the guidebooks' twenty-one), roughly three hundred boats worked the waterway by 1835, the railway arrived in 1846, and the last coal cargo moved in 1947.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the lecturer's view of the canal's legacy?",
        options: [
          "The shareholders' losses mean the venture should be judged a failure.",
          "Its most lasting contribution was the generation of engineers it trained for the railway age.",
          "The canal is now valuable mainly as a leisure attraction for holiday boats.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "gist"],
          keywords: ["balance sheet", "generation of engineers", "afterlife", "shareholders"],
          explanation:
            "The lecturer explicitly rejects the balance-sheet verdict: the shareholders' losses do not define the canal, because it trained the engineers who built the railways and left the city a green corridor. She sums up with 'not a bad afterlife', so the failure reading and the leisure-only reading both miss her point.",
        },
      },
    ],
    transcriptNote:
      "The guidebook figure of twenty-one miles is corrected to twenty-six, and the closing question separates the lecturer's own view of the legacy from the headline version about money and holidays.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-biology",
    title: "How honeybees navigate",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 8,
    accentMix: ["north-american"],
    intro:
      "You will hear part of a lecture on how honeybees find their way. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "delgado", name: "Professor Delgado", role: "professor of animal behavior", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "delgado", text: "Okay, everyone, settle in. Today we're tackling one of my favorite puzzles in animal behavior: how a honeybee, with a brain smaller than a sesame seed, flies five kilometers out to a patch of flowers and then makes a beeline straight home." },
      { id: "s2", speakerId: "delgado", text: "I'll start with the sun, because that's the bee's primary compass. The sun gives the bee a constant bearing — but here's the elegant part: the sun drifts across the sky all day, and the bee's internal clock compensates for that movement automatically. No recalculating, no fuss." },
      { id: "s3", speakerId: "delgado", text: "Now, you might ask what happens when clouds roll in. Even when the sun itself is hidden, patches of blue sky scatter polarized light, and bees can read that pattern just fine. So the solar compass rarely quits on a merely cloudy day." },
      { id: "s4", speakerId: "delgado", text: "Let's turn to the second cue: landmarks. Bees learn the visual panorama around a familiar route — the tree line, a water tower, a bend in the river. Those features build a map, and it's a map in pictures, not in smells. It's tempting to assume they follow scent trails home; they really don't." },
      { id: "s5", speakerId: "delgado", text: "That brings me to the third cue, the strangest of the three: a magnetic sense. Bees carry tiny crystals of an iron mineral in their bodies, and when researchers cancel the surrounding field with coils, the bees' headings scatter. So the compass box has a third needle." },
      { id: "s6", speakerId: "delgado", text: "How do the three stack up? The sun compass is the precision instrument. Landmarks only work on home ground — in unfamiliar territory they're useless. The magnetic sense gives a rough sense of direction anywhere on Earth, but it's coarse — fine as a backup, no good for pinpoint work." },
      { id: "s7", speakerId: "delgado", text: "And how does a bee share a good flower patch with its hive mates? Through the waggle dance. The angle to the sun gets transposed onto the vertical face of the comb: straight up means toward the sun, gravity's vertical standing in for the sun's direction, and every degree off vertical means a degree off the sun's bearing.", pauseAfterMs: 300 },
      { id: "s8", speakerId: "delgado", text: "To finish, a thought. Next time you watch a bee orbiting a flower bed, remember: she's running three navigation systems at once, powered by nothing but nectar." },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–4",
        instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "HOW HONEYBEES NAVIGATE — lecture notes" }],
          [{ kind: "text", text: "The waggle dance" }],
          [{ kind: "text", text: "Direction is communicated through the" }, { kind: "blank", no: 1 }, { kind: "text", text: "dance" }],
          [{ kind: "text", text: "The dancer's angle encodes direction relative to the" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "Compensating for the sun" }],
          [{ kind: "text", text: "The bee's internal clock adjusts for the sun's daily" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "When the sun is hidden, blue sky reveals" }, { kind: "blank", no: 4 }, { kind: "text", text: "light" }],
        ],
        blanks: [
          { no: 1, answer: "waggle", alternatives: [] },
          { no: 2, answer: "sun", alternatives: [] },
          { no: 3, answer: "movement", alternatives: [] },
          { no: 4, answer: "polarized", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "process-tracking"],
          keywords: ["waggle dance", "vertical", "movement", "polarized"],
          trap: {
            family: "mention-lure",
            lure: ["vertical", "gravity"],
            note:
              "The vertical face of the comb is only the medium the dance is danced on — the angle itself encodes direction relative to the sun, so 'vertical' and 'gravity' are lures for question 2.",
          },
          explanation:
            "The dance is the waggle dance, and its angle encodes direction relative to the sun — the comb's vertical is merely what the angle is measured against, which is why 'vertical' and 'gravity' are traps. The bee's internal clock also compensates for the sun's daily movement, and polarized light from patches of blue sky keeps the compass working under cloud.",
        },
      },
      {
        id: "q2",
        type: "table",
        label: "Questions 5–7",
        instruction: "Complete the table below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "COMPARING THE THREE NAVIGATION CUES" }],
          [{ kind: "text", text: "Cue" }, { kind: "text", text: "Sun position" }, { kind: "text", text: "Landmarks" }, { kind: "text", text: "Magnetic sense" }],
          [{ kind: "text", text: "What it gives the bee" }, { kind: "blank", no: 5 }, { kind: "blank", no: 6 }, { kind: "blank", no: 7 }],
          [{ kind: "text", text: "Where it falls short" }, { kind: "text", text: "a fully overcast sky" }, { kind: "text", text: "unfamiliar terrain" }, { kind: "text", text: "coarse precision only" }],
        ],
        blanks: [
          { no: 5, answer: "compass", alternatives: [] },
          { no: 6, answer: "map", alternatives: [] },
          { no: 7, answer: "direction", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "signposts"],
          keywords: ["primary compass", "build a map", "sense of direction"],
          explanation:
            "The table gathers the lecture's ranking passage: the sun acts as the bee's primary compass; landmarks build a map, but only of familiar ground; and the magnetic sense supplies a rough sense of direction anywhere on Earth. The pre-printed bottom row matches — full overcast defeats the sun cue, unfamiliar terrain defeats landmarks, and the magnetic sense lacks precision.",
        },
      },
    ],
    transcriptNote:
      "The note questions hinge on hearing that the waggle dance is measured against the vertical but encodes the angle to the sun — 'vertical' and 'gravity' are the designed lures — and the lecturer also rules out scent as a homing cue.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-technology",
    title: "The rise of contactless payment",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 9,
    accentMix: ["australian"],
    intro:
      "You will hear part of a lecture on the spread of contactless payment. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "fowler", name: "Dr Fowler", role: "lecturer in applied economics", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "fowler", text: "Good afternoon, everyone. In today's applied-economics lecture we're tracing the oddly slow, then suddenly fast, spread of contactless payment — what most of you just call tapping. I'll begin with the technology itself." },
      { id: "s2", speakerId: "fowler", text: "The hardware arrived remarkably early. By the mid-two-thousands, banks in several countries were issuing cards with tiny radio chips that a till could read from a couple of centimetres away. The engineering worked; the psychology didn't. Shoppers hung back, and the surveys from that era are full of people convinced a stranger could drain their account by brushing past them." },
      { id: "s3", speakerId: "fowler", text: "The first genuine tipping point was urban transport. Once a major transit network let commuters tap straight through the gates with an ordinary bank card, tapping stopped being a novelty and became a reflex. Within a couple of years, the banks had doubled the limit you could spend without a PIN." },
      { id: "s4", speakerId: "fowler", text: "Then came twenty twenty, and the pandemic with it. I'll be blunt: hygiene did more for contactless in six months than a decade of advertising ever managed. People were suddenly wary of touching shared surfaces — payment keypads above all — and the tap became the polite way to pay.", pauseAfterMs: 300 },
      { id: "s5", speakerId: "fowler", text: "So is the story finished? You'll have read the headlines: cash is dead, the wallet belongs in a museum. I'd treat that claim with a good deal of caution. Whole groups are still locked out or locked in — older shoppers who budget in notes and coins, small districts where the connectivity is patchy, and plenty of people who'd rather not have every purchase tracked." },
      { id: "s6", speakerId: "fowler", text: "What the transaction data actually shows is a gentle drift, not a collapse." },
      { id: "s7", speakerId: "fowler", text: "Cash use is falling, yes — but it's falling slowly, at its own pace, and the queue at the ATM on pension day hasn't gone away." },
      { id: "s8", speakerId: "fowler", text: "Before I conclude, a word on what's next. The frontier is biometric: cards that read a fingerprint, wallets living on your phone screen. It'll spread, I've no doubt. But no government is in a hurry to force the last notes out of circulation, and I don't expect that to change. My own view? Cash isn't dead — it's just retiring, slowly.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–5",
        instruction: "Complete the summary below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "According to the lecturer, contactless cards carried radio" }, { kind: "blank", no: 1 }, { kind: "text", text: "long before shoppers felt safe using them. Familiarity grew once commuters could tap at the barriers of a large" }, { kind: "blank", no: 2 }, { kind: "text", text: "system, and again when the" }, { kind: "blank", no: 3 }, { kind: "text", text: "doubled the amount payable without a PIN." }],
          [{ kind: "text", text: "She credits the pandemic with the final surge, driven by anxiety about" }, { kind: "blank", no: 4 }, { kind: "text", text: ". Even so, she expects notes and coins to survive for older shoppers and for districts where the" }, { kind: "blank", no: 5 }, { kind: "text", text: "is unreliable." }],
        ],
        blanks: [
          { no: 1, answer: "chips", alternatives: [] },
          { no: 2, answer: "transit", alternatives: [] },
          { no: 3, answer: "banks", alternatives: [] },
          { no: 4, answer: "hygiene", alternatives: [] },
          { no: 5, answer: "connectivity", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "gist", "detail"],
          keywords: ["radio chips", "commuters", "PIN", "hygiene", "connectivity"],
          explanation:
            "The summary rewords the lecture's arc rather than quoting it: the cards carried radio chips years before shoppers trusted them, the turning point was a big transit network's gates, the banks then doubled the no-PIN limit, hygiene fears during the pandemic drove the final surge, and cash is expected to persist where connectivity is unreliable and among older shoppers.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the lecturer's attitude to the claim that cash will soon disappear?",
        options: [
          "'Cash is dead' — she treats the headline as basically accurate.",
          "She is doubtful, because the digital system still leaves whole groups behind.",
          "She welcomes it, since tracking every purchase would help cut crime.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "negation"],
          keywords: ["cash is dead", "caution", "locked out"],
          trap: {
            family: "mention-lure",
            lure: ["cash is dead"],
            note:
              "'Cash is dead' is a headline she quotes only in order to reject it — her own position is caution, so the option that repeats the quotation verbatim is the trap.",
          },
          explanation:
            "The lecturer quotes the 'cash is dead' headline and then says she would treat that claim with a good deal of caution, because whole groups remain locked out or locked in — older shoppers, patchy districts, and the untracked. The verbatim headline option is the lure; her real attitude is doubt.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer imply about the future of payments?",
        options: [
          "Governments will soon force notes and coins out of use.",
          "Phone wallets will make plastic cards obsolete within a decade.",
          "New methods will gain ground, but cash will fade slowly rather than vanish.",
        ],
        correct: [2],
        meta: {
          skills: ["intention", "paraphrase", "gist"],
          keywords: ["gentle drift", "biometric", "circulation"],
          explanation:
            "She pictures a layered future: biometric methods will spread, but no government is in a hurry to force notes out of circulation, and cash is 'retiring, slowly' rather than dying. The data shows a gentle drift, so the option describing a gradual fade alongside new methods is the one she implies.",
        },
      },
    ],
    transcriptNote:
      "The headline 'cash is dead' is quoted only to be rejected — the lecturer's real position is caution — and the summary rewords her argument rather than repeating it, so no answer comes word-for-word from the surrounding text.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-environment",
    title: "Urban heat islands",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 9,
    accentMix: ["nz"],
    intro:
      "You will hear part of a lecture on urban heat islands. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "bennett", name: "Dr Bennett", role: "environmental scientist in the public lecture series", accent: "nz" },
    ],
    segments: [
      { id: "s1", speakerId: "bennett", text: "Kia ora, and welcome to the environmental science series. This morning we turn to a form of climate change you can measure from your own doorstep: the urban heat island — the well-documented tendency for a city to run warmer than the countryside around it." },
      { id: "s2", speakerId: "bennett", text: "I'll begin with why. First, the materials we build with: dark roofs, dark pavements, acres of carparks — surfaces that soak up sunshine all day and then hand that heat back to the air all night. That after-dark release is why the effect is strongest after sunset, not at midday." },
      { id: "s3", speakerId: "bennett", text: "Second, we add heat of our own — engine bays, industrial chillers, and the small irony of air-conditioners pumping warmth into the street while they cool the building behind them." },
      { id: "s4", speakerId: "bennett", text: "And third, we've stripped away the original cooling system: vegetation. A street tree is a shade umbrella and, through evaporation from its leaves, a modest air conditioner. Pave over the trees and the street bakes." },
      { id: "s5", speakerId: "bennett", text: "So how big is the effect? The older surveys for this city quoted a five-degree gap, but our student van transect — run on a still, clear night in February — logged eight degrees between the central business district and the airport, with readings sliding smoothly as the van drove out through the suburbs. Calm and clear matter, by the way: wind stirs everything together, and cloud spreads a blanket over town and country alike.", pauseAfterMs: 300 },
      { id: "s6", speakerId: "bennett", text: "Turning now to what we can do about it. The cheapest fix is the roof itself: painting dark iron with reflective paint drops the surface temperature dramatically on a summer afternoon." },
      { id: "s7", speakerId: "bennett", text: "Better still is a green roof — soil and plants — which cools the building by evaporation and insulates it in winter into the bargain." },
      { id: "s8", speakerId: "bennett", text: "And policy is moving: under the current district plan, any new large building in the central city must include a green roof. Before I conclude — next week we'll map which neighbourhoods of this city carry the heaviest heat load, and I suspect the social pattern will surprise you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–5",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "URBAN HEAT ISLANDS — lecture notes" }],
          [{ kind: "text", text: "Definition" }],
          [{ kind: "text", text: "A city stays hotter than the" }, { kind: "blank", no: 1 }, { kind: "text", text: "surrounding it" }],
          [{ kind: "text", text: "Causes" }],
          [{ kind: "text", text: "Dark roofs and" }, { kind: "blank", no: 2 }, { kind: "text", text: "absorb sunshine by day" }],
          [{ kind: "text", text: "Without street trees, the cooling of" }, { kind: "blank", no: 3 }, { kind: "text", text: "from leaves is lost" }],
          [{ kind: "text", text: "Measurement" }],
          [{ kind: "text", text: "Night-time gap between the city centre and the airport:" }, { kind: "blank", no: 4 }, { kind: "text", text: "degrees" }],
          [{ kind: "text", text: "Mitigation" }],
          [{ kind: "text", text: "A coat of" }, { kind: "blank", no: 5 }, { kind: "text", text: "paint on dark iron roofs" }],
        ],
        blanks: [
          { no: 1, answer: "countryside", alternatives: [] },
          { no: 2, answer: "pavements", alternatives: [] },
          { no: 3, answer: "evaporation", alternatives: [] },
          { no: 4, answer: "eight", alternatives: ["8"], numbers: true },
          { no: 5, answer: "reflective", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "paraphrase", "detail"],
          keywords: ["countryside", "pavements", "evaporation", "eight", "reflective"],
          trap: {
            family: "correction",
            lure: ["five"],
            note:
              "The five-degree figure belongs to the older surveys; the lecturer's own transect logged eight degrees, and the updated value is the one that scores.",
          },
          explanation:
            "The notes follow the lecture's three signposted moves: the definition contrasts the city with the countryside; the causes are dark surfaces such as roofs and pavements plus the loss of evaporation from leaves; the transect logged eight degrees — correcting the older five-degree surveys — and the cheap mitigation is a coat of reflective paint on dark iron.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 6–7",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "6 The heat island is strongest on calm," }, { kind: "blank", no: 6 }, { kind: "text", text: "nights." }],
          [{ kind: "text", text: "7 Under the district plan, big new buildings in the city centre need a" }, { kind: "blank", no: 7 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 6, answer: "clear", alternatives: [] },
          { no: 7, answer: "green roof", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "negation"],
          keywords: ["clear", "green roof", "district plan"],
          explanation:
            "The effect peaks on still, clear nights, when wind cannot stir the air together and cloud cannot blanket town and country alike. And under the current district plan, any new large building in the central city must include a green roof, which cools by evaporation and insulates in winter.",
        },
      },
    ],
    transcriptNote:
      "The five-degree gap belongs to older surveys — the lecturer's own transect found eight degrees — and listen closely for the weather conditions that make the effect strongest, since they decide question 6.",
    source: BANK_SOURCE_NOTE,
  },
];
