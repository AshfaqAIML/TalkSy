/**
 * IELTS Speaking Part 2 — flagship cue-card bank, file A (PROMPT 47,
 * Parts 3 and 8).
 *
 * The first six of the eleven flagship cue cards, one per taught
 * description family: people, places, events, experiences, objects and
 * activities. Every card carries the full seven-element teaching payload —
 * the prompt itself, the author's one-minute planning note, vocabulary
 * suggestions, a natural two-minute sample response, a move-by-move
 * response analysis, alternative approaches and follow-up practice.
 *
 * The samples demonstrate METHOD: learners should adapt the shape of each
 * answer to their own material, never memorise the words. Band-style
 * labels are educational estimates only, never official scores. All
 * material is original practice content written in the style of the test —
 * not reproduced exam tasks.
 */

import type { SpeakingCueCard } from "./types";
import { SPEAKING_BANK_SOURCE_NOTE } from "./types";

export const speakingBankCueCardsA: SpeakingCueCard[] = [

// ---------------------------------------------------------------------------
// 1. People — a person who taught you something important
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-people",
  title: "Cue card — a person who taught you",
  family: "people",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  task: "Describe a person who has taught you something important.",
  situation:
    "You are in the IELTS Speaking test room in Manchester. The examiner slides this card across the desk, hands you a pencil and starts the one-minute timer.",
  bullets: ["who this person is", "what they taught you", "how they taught you"],
  extension: "and explain what makes them a good teacher to you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHO — pin the person fast",
      notes: [
        "Mr Okafor · maths teacher · 2nd yr secondary",
        "me: back row · struggling · 'not a maths person'",
        "no long intro → straight to what he taught",
      ],
    },
    {
      heading: "WHAT he taught (the real lesson)",
      notes: [
        "surface: maths",
        "real: a method → break down → name unknowns → ask last",
        "fixed belief: untrained ≠ bad",
      ],
    },
    {
      heading: "HOW he taught",
      notes: [
        "Thursdays · 20 min · one hard problem",
        "no answers → small guiding questions",
        "patience · never made me feel stupid",
      ],
    },
    {
      heading: "ENDING — why a good teacher",
      notes: [
        "didn't pour facts → taught how to sit w/ a problem",
        "still use the method @ uni",
        "gift outlasted any exam",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to look up to someone",
      partOfSpeech: "phrasal verb",
      meaning: "To respect and admire someone, often an older person.",
      example: "I've looked up to my aunt ever since she taught me to ride a bike.",
    },
    {
      word: "a good influence (on someone)",
      partOfSpeech: "noun phrase",
      meaning: "Someone whose example makes you behave or think better.",
      example: "My grandfather was a good influence on all of us cousins.",
    },
    {
      word: "to break something down",
      partOfSpeech: "phrasal verb",
      meaning: "To divide a big problem into small, manageable steps.",
      example: "My coach breaks every skill down into three simple moves.",
    },
    {
      word: "endless patience",
      partOfSpeech: "noun phrase",
      meaning: "The ability to stay calm with slow learners for a long time.",
      example: "You need endless patience to teach anything to a toddler.",
    },
    {
      word: "to believe in someone",
      partOfSpeech: "phrase",
      meaning: "To have confidence in someone's ability, even before they do.",
      example: "She believed in me before I believed in myself.",
    },
    {
      word: "a turning point",
      partOfSpeech: "noun phrase",
      meaning: "The moment when a situation or an attitude changes direction.",
      example: "That summer job was a turning point in how I saw work.",
    },
    {
      word: "to take someone under your wing",
      partOfSpeech: "idiom",
      meaning: "To protect and teach someone, usually a beginner.",
      example: "My first manager took me under her wing and taught me everything.",
    },
    {
      word: "to go the extra mile",
      partOfSpeech: "idiom",
      meaning: "To make more effort than is expected.",
      example: "Good teachers go the extra mile for students who are struggling.",
    },
    {
      word: "to make something click",
      partOfSpeech: "phrase",
      meaning: "To finally make sense after a period of confusion.",
      example: "Her second explanation made the whole topic click for me.",
    },
  ],
  sampleResponse: {
    transcript: `Okay, so the person I'd like to talk about is Mr Okafor, who was my maths teacher in my second year of secondary school. He taught me the subject, obviously, but the important thing he taught me was how to handle problems I couldn't solve. I was struggling badly that year, and I'd started to believe I was simply not a maths person.

What he did was quite unusual. He noticed I was hiding at the back of the class, so he offered me twenty minutes after school every Thursday. And it wasn't extra teaching, exactly. He'd put one hard problem on the desk, and he refused to help until I'd attacked it from at least two different directions. If I got stuck, he never gave me the answer; he just asked small questions, like, 'What does this shape remind you of?' Slowly I realised the questions were the lesson itself.

So what he actually taught me was a method: break the problem down, name exactly what you don't understand, and only then ask for help. And he taught mostly through patience, to be honest. He never made me feel stupid, not once, even when I repeated the same mistake three weeks running. We carried on those Thursdays for a term—actually, for nearly two terms, right up until the exam. And I still remember the afternoon I finally solved a geometry question he'd promised was beyond me. He just smiled and said, 'See? You were never bad at maths. You were untrained.'

Looking back, what makes him a good teacher to me is that he never poured facts in; he showed me how to sit with a problem without panicking. I still use his method at university whenever a task looks impossible, and that gift outlasted any exam he ever marked.`,
    wordCount: 302,
    durationEstimateSec: 130,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The first sentence does three jobs at once: it names the person (Mr Okafor), fixes the relationship (second-year maths teacher) and sets the timeframe. The second sentence immediately separates the surface subject from the real one — the subject he taught versus the important thing he taught — which signals to the examiner that this answer will develop rather than list.",
    },
    {
      aspect: "First bullet — who this person is",
      note: "'Hiding at the back of the class' and 'not a maths person' give the listener a picture and a problem in four words each. Concrete physical detail does work that a flat adjective like 'kind' never can.",
    },
    {
      aspect: "Story sequence",
      note: "The Thursday sessions run as a mini-story with rules ('he refused to help until...'), a quoted question and a slow realisation. Direct speech like 'What does this shape remind you of?' lifts the fluency impression because it demonstrates natural rhythm and intonation.",
    },
    {
      aspect: "The turning point",
      note: "The geometry afternoon is the emotional peak, placed about three-quarters of the way through — the classic position for it. Notice it is one sentence of event and two of speech, not a long decorative description.",
    },
    {
      aspect: "The reflection",
      note: "'Looking back' announces the move to evaluation; the answer then addresses the actual extension question with a definition — he showed me how to sit with a problem — and a present-day consequence at university. Reflection plus evidence, never feeling alone.",
    },
    {
      aspect: "Spoken register",
      note: "Contractions throughout, one natural self-correction ('for a term—actually, for nearly two terms') and two light comment phrases. This sample is a demonstration of shape, not a script: borrow the who–what–how–why spine and refill it with your own teacher, or the answer will sound borrowed too.",
    },
    {
      aspect: "Timing shape",
      note: "Roughly twenty seconds of who, forty of what-and-how, twenty-five of story and twenty of reflection — about three hundred words, which fills two minutes at a natural pace without sprinting.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "A grandparent and a practical skill",
      note: "Cooking, fishing or knitting taught by a grandparent warms the card up and shifts 'how they taught you' towards smells, repetition and shared silence; the evaluation then centres on patience and inheritance rather than method.",
    },
    {
      approach: "A friend who taught you a harder lesson",
      note: "Choosing a friend who taught you honesty, or how to apologise, turns 'taught' moral: the how becomes a conversation you still remember, and the ending is about gratitude and trust instead of study skills.",
    },
    {
      approach: "A coach and discipline",
      note: "A sports coach who taught you to lose well supplies natural training vocabulary (drills, setbacks, match day) and lets the reflection argue that the lesson outlived the sport itself.",
    },
    {
      approach: "An online teacher you never met",
      note: "A channel you have followed for years modernises the card: present-perfect habits replace childhood memories, and the evaluation can weigh what teaching at a distance can and cannot do.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do you think you would make a good teacher yourself?",
      "Are the qualities of a good teacher the same as those of a good friend?",
      "Did other teachers at your school use a similar approach?",
    ],
    practice: [
      "Attempt 'Describe a teacher from your primary school' with the same who–what–how–why shape.",
      "Record two minutes on 'a person who has influenced your career choice', then note where you ran out of ideas.",
      "Write five fragments about a family member who taught you something, then speak from the fragments without full sentences.",
    ],
  },
  requirements: [
    {
      key: "who-the-person-is",
      description: "Names the person and their relationship to the speaker, with a detail that paints them.",
      keywords: ["okofor", "teacher", "maths", "secondary", "school"],
    },
    {
      key: "what-they-taught",
      description: "States the important thing the person taught, as a lesson or method rather than a school subject alone.",
      keywords: ["taught", "method", "break", "problem", "believe"],
    },
    {
      key: "how-they-taught",
      description: "Shows the teaching style through one concrete, repeated scene or habit.",
      keywords: ["thursday", "questions", "patience", "answer", "stuck"],
    },
    {
      key: "why-good-teacher",
      description: "Evaluates the person as a teacher, giving at least one reason tied to the speaker's own growth.",
      keywords: ["good", "teacher", "looking", "still", "panicking"],
    },
    {
      key: "card-order",
      description: "Follows the card's order — who, what, how, then the evaluation — and closes on reflection rather than trailing off.",
      keywords: ["looking", "slowly", "finally", "actually", "never"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Places — a building or structure that impressed you
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-places",
  title: "Cue card — a building that impressed you",
  family: "places",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  task: "Describe a building or structure that impressed you.",
  situation:
    "It is the afternoon session of your IELTS Speaking test in Nairobi. The examiner places this card in front of you and checks the clock on the wall.",
  bullets: ["what and where it is", "what it looks like", "how you first saw it"],
  extension: "and explain why it impressed you.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHAT + WHERE",
      notes: [
        "stone aqueduct · edge of gran's town · nr Porto",
        "18th century · hills → fountains · now dry",
        "spans the whole valley",
      ],
    },
    {
      heading: "WHAT it looks like",
      notes: [
        "honey granite → gold in afternoon light",
        "two tiers · 37 arches · pillars like trunks",
        "follows the valley → 'stone wave'",
        "chisel marks up close = handmade",
      ],
    },
    {
      heading: "HOW I first saw it",
      notes: [
        "age 12 · train from Porto · half asleep",
        "rose out of the fields → gasped",
        "next summer: full walk w/ grandfather",
      ],
    },
    {
      heading: "WHY it impressed me",
      notes: [
        "engineering: no cranes · blocks > a car",
        "confidence: built for people 100 yrs away",
        "modern flyovers lose the comparison",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "a feat of engineering",
      partOfSpeech: "noun phrase",
      meaning: "An achievement of design and construction that impresses people.",
      example: "Building that bridge in the 1800s was a genuine feat of engineering.",
    },
    {
      word: "beautifully preserved",
      partOfSpeech: "adjective phrase",
      meaning: "Kept in very good condition despite great age.",
      example: "The old station has been beautifully preserved, right down to the clocks.",
    },
    {
      word: "to catch the light",
      partOfSpeech: "phrase",
      meaning: "To shine or change appearance when light falls on it.",
      example: "The glass roof catches the light in the late afternoon.",
    },
    {
      word: "to take your breath away",
      partOfSpeech: "idiom",
      meaning: "To be so beautiful or impressive that you gasp.",
      example: "The view from the tower took my breath away.",
    },
    {
      word: "weathered",
      partOfSpeech: "adjective",
      meaning: "Changed in appearance by years of wind, rain and sun.",
      example: "The weathered stone steps have been walked on for centuries.",
    },
    {
      word: "to dwarf",
      partOfSpeech: "verb",
      meaning: "To make something else look very small by comparison.",
      example: "The cathedral dwarfs every building around it.",
    },
    {
      word: "in the distance",
      partOfSpeech: "phrase",
      meaning: "Far away but still visible.",
      example: "You can see the lighthouse in the distance from the beach.",
    },
    {
      word: "to stand the test of time",
      partOfSpeech: "idiom",
      meaning: "To remain useful or impressive after many years.",
      example: "These old market halls have stood the test of time.",
    },
    {
      word: "a landmark",
      partOfSpeech: "noun",
      meaning: "A building or structure everyone recognises and uses for direction.",
      example: "The water tower is the town's most famous landmark.",
    },
  ],
  sampleResponse: {
    transcript: `So, the structure that really impressed me is an old stone aqueduct that runs along the edge of my grandmother's town, about an hour inland from Porto in Portugal. It was built in the eighteenth century to carry water from the hills to the town's fountains, and although the channels dried up decades ago, it still stands, crossing the whole valley on enormous arches.

Physically, it's stunning. It's made of this honey-coloured granite that goes almost gold in the late afternoon, and it has two tiers of arches, a small row on top and a much taller row below—thirty-seven arches in total, I think. The pillars are wider at the base, like tree trunks, and the whole thing follows the shape of the valley, dipping and rising, so from a distance it looks like a stone wave frozen mid-motion. Up close you can see the marks of the masons' chisels on individual blocks, which I loved, because it makes something so monumental feel handmade.

As for how I first saw it, that was almost accidental. I was maybe twelve, on the train from Porto with my parents, half asleep against the window, when this thing just rose out of the fields. I actually gasped—my mum still teases me about it. The next summer I made my grandfather walk its whole length with me—three kilometres, nearly four—which took most of the morning.

Why did it impress me? Well, on one level it's the sheer engineering—people with no cranes and no software moved blocks that weigh more than a car. But what really stays with me is the confidence of it. They built for a need they couldn't see—water for a town a hundred years away—and they built it so beautifully and so solidly that it's still standing. I can't look at a modern flyover the same way now.`,
    wordCount: 314,
    durationEstimateSec: 130,
    bandEstimate: "Band 8.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The speaker claims the structure, locates it (grandmother's town, an hour inland from Porto) and dates it (eighteenth century) in two sentences — the what-and-where of a place card done quickly so that description gets the airtime.",
    },
    {
      aspect: "Second bullet — what it looks like",
      note: "The description works through three lenses: material (honey-coloured granite), shape (two tiers, thirty-seven arches, pillars like tree trunks) and movement (a stone wave frozen mid-motion). The exact count 'thirty-seven' sounds remembered rather than invented, which is exactly the effect a candidate wants.",
    },
    {
      aspect: "Third bullet — first sighting",
      note: "The train-window memory gives the card a story spine: a half-asleep child, a structure rising out of the fields, an audible gasp. One small anecdote stops a description card from collapsing into a list.",
    },
    {
      aspect: "The reflection — why it impressed",
      note: "The reason is split in two: engineering (no cranes, blocks heavier than a car) and meaning (building for a need they couldn't see). The final flyover line lands the evaluation by comparison with the speaker's own present.",
    },
    {
      aspect: "Language choices",
      note: "Lexical families do quiet work: 'tiers', 'pillars', 'arches', 'masons' chisels' — a descriptive set that stays natural rather than encyclopaedic. 'Goes almost gold' and 'frozen mid-motion' show precision achieved with simple words.",
    },
    {
      aspect: "Spoken register",
      note: "The self-correction ('three kilometres, nearly four') and the aside 'I think' keep the talk human, and the dash rhythm mimics speech. Learners should steal the three-lens description method, not these sentences — the same card answered about a stadium or a temple would use almost none of this vocabulary.",
    },
    {
      aspect: "Structure",
      note: "Card order is respected (what-and-where → looks → first saw → why), but the paragraphs braid description and memory together rather than stopping dead between bullets.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "A modern landmark",
      note: "An airport terminal or a stadium swaps weathered granite for glass, curves and scale; the extension then argues about national pride, or about what a city chooses to build for its future.",
    },
    {
      approach: "A place of worship",
      note: "A mosque, temple or old church moves the description towards light, silence and repeated patterns, and 'why it impressed you' turns spiritual or architectural rather than engineering-led.",
    },
    {
      approach: "A ruin near home",
      note: "A castle wall or mill you climbed as a child adds imagination to the description; the ending can explore how many layers of history one crumbling arch can hold.",
    },
    {
      approach: "A bridge on your daily route",
      note: "Choosing a structure you cross every week makes 'how you first saw it' almost too easy, so the interest must come from what familiarity revealed — the commuters, the river, the rhythm of it.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do you think old buildings should be preserved even when they no longer have a use?",
      "Why do certain buildings become symbols of a city?",
      "Would you rather live in a very modern building or an older one?",
    ],
    practice: [
      "Describe a building in your hometown you would take a visitor to — plan it with the three lenses of sight, scale and light.",
      "Try 'Describe a place with a great view' and finish on why the view matters to you personally.",
      "Record one minute describing your favourite room using only concrete nouns and colours, then extend it to two minutes.",
    ],
  },
  requirements: [
    {
      key: "what-and-where",
      description: "Names the structure, its location and roughly what it was built for.",
      keywords: ["aqueduct", "stone", "grandmother's", "porto", "fountains"],
    },
    {
      key: "appearance",
      description: "Describes the appearance with concrete visual detail — material, shape, size or colour.",
      keywords: ["granite", "arches", "tiers", "pillars", "afternoon"],
    },
    {
      key: "first-sighting",
      description: "Tells the story of first encountering it, anchored to an occasion or age.",
      keywords: ["train", "twelve", "window", "summer", "gasped"],
    },
    {
      key: "why-impressed",
      description: "Explains the impression in terms beyond looks — engineering, history or human meaning.",
      keywords: ["engineering", "cranes", "built", "confidence", "standing"],
    },
    {
      key: "description-flow",
      description: "Moves cleanly from card line to card line and lands the strongest reason at the end.",
      keywords: ["physically", "stunning", "distance", "close", "now"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Events — a celebration you took part in
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-events",
  title: "Cue card — a celebration you joined",
  family: "events",
  difficulty: 2,
  proficiency: "foundation",
  skill: "fluency",
  task: "Describe a celebration you took part in.",
  situation:
    "You are halfway through your IELTS Speaking test in Jakarta. The examiner turns over a fresh page, reads the topic aloud and passes you this card.",
  bullets: ["what was celebrated", "where and when it happened", "what you did"],
  extension: "and explain what made it special.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHAT was celebrated",
      notes: [
        "surprise street party · Mrs Fonseca · 90th",
        "longest resident · here before my parents",
      ],
    },
    {
      heading: "WHERE + WHEN",
      notes: [
        "last Sat of June · road closed by council",
        "bunting · folding tables · one long table",
      ],
    },
    {
      heading: "WHAT I did",
      notes: [
        "lookout → text when daughter's car pulls up",
        "jump out shouting → her face",
        "serve food · dragged into dancing",
      ],
    },
    {
      heading: "WHY special (the ending)",
      notes: [
        "nine photo albums · standing-up stories",
        "taught the street's kids to ride · knitted scarves",
        "street says thank you · belonging",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to throw a party",
      partOfSpeech: "phrase",
      meaning: "To organise and host a celebration.",
      example: "We threw my parents a party for their twenty-fifth anniversary.",
    },
    {
      word: "to pull something off",
      partOfSpeech: "phrasal verb",
      meaning: "To succeed at something difficult, often secretly.",
      example: "Somehow we pulled off the surprise without her finding out.",
    },
    {
      word: "in high spirits",
      partOfSpeech: "phrase",
      meaning: "Happy, energetic and cheerful.",
      example: "Everyone was in high spirits despite the drizzle.",
    },
    {
      word: "to join in",
      partOfSpeech: "phrasal verb",
      meaning: "To take part in an activity together with others.",
      example: "Even the shy neighbours joined in the dancing.",
    },
    {
      word: "a sense of community",
      partOfSpeech: "noun phrase",
      meaning: "The feeling of belonging to a friendly local group.",
      example: "Street markets create a real sense of community.",
    },
    {
      word: "to mark the occasion",
      partOfSpeech: "phrase",
      meaning: "To celebrate an important event in a special way.",
      example: "They planted a tree to mark the occasion.",
    },
    {
      word: "to raise a glass (to someone)",
      partOfSpeech: "idiom",
      meaning: "To drink together to wish someone well.",
      example: "At midnight we raised a glass to the newlyweds.",
    },
    {
      word: "to have a blast",
      partOfSpeech: "informal phrase",
      meaning: "To have a wonderful, fun time.",
      example: "The kids had an absolute blast at the fair.",
    },
    {
      word: "a gathering",
      partOfSpeech: "noun",
      meaning: "An informal meeting of family or friends.",
      example: "Sunday lunch is our biggest weekly gathering.",
    },
  ],
  sampleResponse: {
    transcript: `So the celebration I want to talk about is a surprise street party we threw for our neighbour, Mrs Fonseca, when she turned ninety, which was about three years ago now. She's lived on our street longer than anyone—in fact she moved in before my parents were even born—so the whole street agreed she deserved something big.

It happened on a Saturday in June—actually, the last Saturday in June—right in the middle of our road, which the council had closed off for the afternoon. Someone had strung bunting between the lampposts, and people brought out folding tables and covered them with tablecloths, so by two o'clock it looked like one enormous shared dinner table running down the street.

As for what I did, I was one of the lookouts, because the whole thing was a surprise. My job was to text everyone the moment her daughter's car pulled up. And then we all jumped out from behind the tables shouting, and honestly the look on her face—she just stood there with her hands over her mouth. After that I helped serve the food, and later my little cousins dragged me into a dancing circle, where I made a complete fool of myself, which everyone enjoyed far more than the cake.

What made it special? I think it was seeing how many lives she'd touched. Nine different families had made her a photo album, and people kept standing up to tell stories about her—the time she taught half the street's kids to ride bikes, the winter she knitted scarves for everyone. It wasn't an expensive event at all, but it felt like the street was saying thank you to one person, all at once. I've been to bigger parties, sure, but none where I felt that sense of belonging quite so strongly.`,
    wordCount: 307,
    durationEstimateSec: 130,
    bandEstimate: "Band 7.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The first sentence carries every fact the examiner needs: the type of event, the person, the occasion and the distance in time. Fast framing buys speaking time for the story, which is where the marks are.",
    },
    {
      aspect: "First bullet — what was celebrated",
      note: "The celebration is personalised immediately: the longest resident, moved in before the parents were born. Two sentences and the person is worth a party — which quietly argues the whole card.",
    },
    {
      aspect: "Setting the scene",
      note: "'Bunting', 'folding tables', 'one enormous shared dinner table' — the where-and-when is built from objects the listener can see, ending on a single image instead of a list of logistics.",
    },
    {
      aspect: "The speaker's role",
      note: "The talk sharpens the moment the speaker claims a job: lookout, the text message, the jump. 'What you did' is answered with actions in sequence, and the dancing-circle confession adds self-deprecating humour, which examiners hear as natural confidence.",
    },
    {
      aspect: "The reflection — what made it special",
      note: "The evaluation goes beyond fun: nine photo albums, standing-up stories, 'the street was saying thank you to one person'. The closing contrast with bigger parties earns the final phrase about belonging.",
    },
    {
      aspect: "Spoken register",
      note: "One natural self-correction (which Saturday in June), contractions everywhere, and reported speech that stays lively. Treat this as a demonstration of story flow — your own celebration, told with the same build-up, moment, meaning arc, will always beat a memorised version.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "A family wedding",
      note: "A wedding scales the card up: ceremony, speeches, embarrassing relatives. Vocabulary shifts towards formal sequence words, and the reflection usually lands on two families becoming one.",
    },
    {
      approach: "A religious or cultural festival",
      note: "An annual festival gives preparation, food and elders — and a reflection about continuity between generations rather than one memorable evening.",
    },
    {
      approach: "A national day as a visitor",
      note: "Attending another country's celebration as an outsider adds the wonder angle; the specialness then comes from being trusted and welcomed into someone else's ritual.",
    },
    {
      approach: "A party you organised yourself",
      note: "Flipping from guest to host changes the verbs entirely — planning, worrying, rescuing the dessert — and the reflection can weigh the stress against the moment everyone finally arrived.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do you think celebrations are becoming smaller or larger in your country?",
      "What role does food play in celebrations where you're from?",
      "Should cities spend public money on festivals?",
    ],
    practice: [
      "Describe a festival that happens every year where you live — mark on your plan exactly where your personal story goes.",
      "Attempt 'Describe a party you did not enjoy' to practise contrast language.",
      "Practise 'a meal you shared with friends' — borrow this card's build-up → moment → meaning shape.",
    ],
  },
  requirements: [
    {
      key: "what-celebrated",
      description: "Says clearly what was being celebrated and who it was for.",
      keywords: ["celebration", "surprise", "party", "neighbour", "ninety"],
    },
    {
      key: "where-when",
      description: "Gives the setting — place, season or date — so the listener can picture the scene.",
      keywords: ["saturday", "june", "road", "afternoon", "street"],
    },
    {
      key: "what-you-did",
      description: "Names the speaker's own role and actions during the event.",
      keywords: ["lookouts", "text", "food", "dancing", "serve"],
    },
    {
      key: "why-special",
      description: "Explains the specialness with a feeling or insight, not just that it was enjoyable.",
      keywords: ["special", "touched", "stories", "thank", "belonging"],
    },
    {
      key: "story-keeping-going",
      description: "Keeps the story moving forward with time links instead of stopping between card lines.",
      keywords: ["then", "later", "after", "kept", "everyone"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Experiences — a time when you helped someone
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-experiences",
  title: "Cue card — a time you helped someone",
  family: "experiences",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  task: "Describe a time when you helped someone.",
  situation:
    "You have just finished Part 1 of the IELTS Speaking test in São Paulo. The examiner gives you note paper, a short pencil and this card.",
  bullets: ["who you helped", "what the situation was", "what you did"],
  extension: "and explain how you felt about it afterwards.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHO + the situation",
      notes: [
        "Mr Halim · 70s · widower · across the landing",
        "daughter in Dubai → old phone · video-calls",
        "real issue: alone since wife died",
      ],
    },
    {
      heading: "WHAT I did",
      notes: [
        "every Sunday · six weeks",
        "basics: answer · volume · contacts",
        "notebook steps · green/red stickers",
        "wk 3: photos → tomatoes → daughter",
      ],
    },
    {
      heading: "SETBACKS + turning point",
      notes: [
        "deleted app · dark screen at 11 pm",
        "laughed far more than expected",
        "first connected call → waved like a child",
      ],
    },
    {
      heading: "FEELINGS afterwards",
      notes: [
        "surprise — not just pride",
        "favour ⇄ friendship",
        "help = showing up patiently",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to lend a hand",
      partOfSpeech: "idiom",
      meaning: "To help someone, usually with a practical task.",
      example: "My neighbour lent a hand when the boxes got too heavy.",
    },
    {
      word: "to keep someone company",
      partOfSpeech: "phrase",
      meaning: "To stay with someone so that they are not lonely.",
      example: "I stayed behind to keep him company during the storm.",
    },
    {
      word: "step by step",
      partOfSpeech: "phrase",
      meaning: "Slowly and carefully, one stage at a time.",
      example: "We went through the settings step by step until they made sense.",
    },
    {
      word: "to figure something out",
      partOfSpeech: "phrasal verb",
      meaning: "To understand or solve something by thinking about it.",
      example: "It took us an hour to figure out the printer.",
    },
    {
      word: "rewarding",
      partOfSpeech: "adjective",
      meaning: "Making you feel satisfied because the effort was worth it.",
      example: "Volunteering at the shelter is more rewarding than I expected.",
    },
    {
      word: "to make a difference",
      partOfSpeech: "phrase",
      meaning: "To change a situation or someone's life noticeably.",
      example: "An hour of company a week can make a real difference.",
    },
    {
      word: "to take someone for granted",
      partOfSpeech: "idiom",
      meaning: "To fail to appreciate someone until something changes.",
      example: "I'd taken having family nearby for granted.",
    },
    {
      word: "grateful",
      partOfSpeech: "adjective",
      meaning: "Feeling thankful for what someone has done.",
      example: "She was so grateful she nearly cried.",
    },
    {
      word: "to show up",
      partOfSpeech: "phrasal verb",
      meaning: "To arrive and be present, especially when it matters.",
      example: "Most of being a good friend is simply showing up.",
    },
  ],
  sampleResponse: {
    transcript: `I'd like to talk about the time I helped my elderly neighbour, Mr Halim, learn to use a smartphone. He's a widower in his late seventies from across the landing, and last winter his daughter in Dubai gave him her old phone so they could video-call. The trouble was he'd never used a touchscreen in his life, and every call ended with him accidentally hanging up. So the situation was partly technical, but honestly it went deeper: his wife had passed away the previous spring, and he was spending most days alone.

What I did was visit him every Sunday—well, Sunday mornings—for about six weeks. In the first session we practised the basics: answering a call, turning the volume up, finding his daughter's contact. I wrote step-by-step instructions in a notebook in large letters and labelled the icons with stickers—green for answer, red for end. By the third week he could manage a call, so we moved on to photos, and I showed him how to photograph his beloved tomatoes and send them to his daughter.

There were setbacks. He'd delete the app by mistake, or panic when the phone rang, and once he knocked at eleven at night because the screen had gone dark. We laughed a lot, actually, which I hadn't expected. It became the part of my week I looked forward to most.

As for how I felt afterwards, the strongest feeling was surprise, strangely. I'd assumed I was doing him a small technical favour, but what I'd really given him was a weekly reason to expect company, and what he'd given me was a friendship I genuinely treasure. The first time a call connected and he waved at his daughter's face like a child, I had to look away. And it changed how I think about helping: I used to see it as solving problems quickly, whereas real help is mostly showing up patiently until the person doesn't need you.`,
    wordCount: 327,
    durationEstimateSec: 135,
    bandEstimate: "Band 8.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The situation is established in one sentence, then complicated in three more: a widower, a daughter abroad, a wife who died the previous spring. The speaker names the technical problem (accidental hang-ups) but signals the emotional one — 'it went deeper' — which sets up the whole payoff of the card.",
    },
    {
      aspect: "First bullet — who you helped",
      note: "Mr Halim arrives with age, loss and geography ('from across the landing') — the details that make the help feel necessary rather than random.",
    },
    {
      aspect: "What you did — actions over time",
      note: "The help is shown as a programme: Sundays, sessions, a notebook, colour stickers, then photos and tomatoes. Concrete tools make the story credible, and the setbacks paragraph (deleted app, dark screen at eleven) stops the tale from sounding saintly.",
    },
    {
      aspect: "The turning point",
      note: "The first connected call, waved at 'like a child', is where the story turns — placed late, told briefly, and followed by the speaker looking away, which shows the feeling instead of naming it.",
    },
    {
      aspect: "The reflection — how you felt afterwards",
      note: "The answer refuses the easy word (pride) in favour of 'surprise', then reverses the favour: what he really gave him versus what he gave me. The final line redefines help as 'showing up patiently' — a thesis earned by the story, not asserted beside it.",
    },
    {
      aspect: "Range on show",
      note: "Past perfect ('his wife had passed away') sits beside present simple ('real help is mostly showing up') — exactly the tense mix a reflective story card rewards.",
    },
    {
      aspect: "Spoken register and honesty",
      note: "The self-correction ('every Sunday—well, Sunday mornings') and the word 'strangely' keep the register conversational. The sentences are a scaffold: swap in your own neighbour, colleague or stranger and keep the situation → programme → turning point → reflection shape.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "Helping a classmate pass",
      note: "A school setting with stakes you fully understand, and a reflection about the line between helping someone and doing it for them — the ending often reveals the helper learned the subject twice.",
    },
    {
      approach: "Helping a stranger once",
      note: "A lost visitor or someone faint on a bus compresses the story into minutes; the reflection then explores what strangers owe each other and why the moment stayed with you.",
    },
    {
      approach: "Helping a colleague through a deadline",
      note: "A workplace version allows professional vocabulary and a reflection on teamwork versus rivalry; the feeling afterwards can honestly include exhaustion as well as satisfaction.",
    },
    {
      approach: "Regular volunteering",
      note: "A weekly shift at a food bank reframes helping as routine rather than event, so the reflection can weigh small consistent acts against dramatic one-off ones.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do people help their neighbours as much as they used to?",
      "Should volunteering be part of school education?",
      "Is it easier to help family or strangers?",
    ],
    practice: [
      "Try 'Describe a time someone helped you' — mirror this card's structure but reverse the perspective.",
      "Record 'Describe a time you received unexpected kindness' and listen back for tense control in the story section.",
      "Plan 'a time you taught an older person something new' with three setbacks and one turning point.",
    ],
  },
  requirements: [
    {
      key: "who-you-helped",
      description: "Introduces the person helped with enough context to understand their need.",
      keywords: ["neighbour", "halim", "elderly", "widower", "daughter"],
    },
    {
      key: "the-situation",
      description: "Explains the situation and why it was genuinely difficult for that person.",
      keywords: ["smartphone", "touchscreen", "technical", "alone", "winter"],
    },
    {
      key: "what-you-did",
      description: "Describes concrete actions repeated over time, not a single vague gesture.",
      keywords: ["sunday", "session", "stickers", "photos", "call"],
    },
    {
      key: "feelings-afterwards",
      description: "Reflects on the feelings afterwards with honest complexity, including what changed in the speaker.",
      keywords: ["afterwards", "surprise", "favour", "friendship", "helping"],
    },
    {
      key: "developed-telling",
      description: "Develops each part with detail and keeps a warm, natural tone through setbacks and success alike.",
      keywords: ["setbacks", "laughed", "mistake", "dark", "weekly"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Objects — a useful object in your home
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-objects",
  title: "Cue card — a useful object at home",
  family: "objects",
  difficulty: 2,
  proficiency: "foundation",
  skill: "development",
  task: "Describe a useful object in your home.",
  situation:
    "You are sitting the IELTS Speaking test in Toronto. The examiner slides this card across the table and starts your preparation minute.",
  bullets: ["what it is", "how you got it", "what you use it for"],
  extension: "and explain why it is so useful.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHAT it is",
      notes: [
        "sewing machine · corner of living room",
        "mechanical · cream + gold · 40+ yrs old",
      ],
    },
    {
      heading: "HOW I got it",
      notes: [
        "gran counted 3 mends in one month",
        "'time you learned' · weekend of basics",
        "arrived in neighbour's car boot · blanket",
      ],
    },
    {
      heading: "WHAT I use it for",
      notes: [
        "hems · taking in dresses",
        "cushion covers · rucksack rescue",
        "astronaut costume → favourite auntie",
      ],
    },
    {
      heading: "WHY so useful",
      notes: [
        "tailor pricey · 2–3 repairs a month",
        "no updates · nothing broken in 40 yrs",
        "gran's hands on the same wheel",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to come in handy",
      partOfSpeech: "idiom",
      meaning: "To be useful in an unexpected situation.",
      example: "The pocket torch has come in handy more times than I can count.",
    },
    {
      word: "a hand-me-down",
      partOfSpeech: "noun",
      meaning: "Something used by one owner and then passed to a younger one.",
      example: "The guitar was a hand-me-down from my eldest cousin.",
    },
    {
      word: "to get the hang of something",
      partOfSpeech: "informal phrase",
      meaning: "To learn how to do something with a little practice.",
      example: "It took me a week to get the hang of the settings.",
    },
    {
      word: "built to last",
      partOfSpeech: "phrase",
      meaning: "Made strongly enough to survive many years of use.",
      example: "Kettles from that era were simply built to last.",
    },
    {
      word: "to mend",
      partOfSpeech: "verb",
      meaning: "To repair something that is broken or torn.",
      example: "I mend jeans now instead of throwing them away.",
    },
    {
      word: "to pay for itself",
      partOfSpeech: "phrase",
      meaning: "To save as much money as it cost.",
      example: "The sewing machine paid for itself within a year.",
    },
    {
      word: "second-hand",
      partOfSpeech: "adjective",
      meaning: "Previously owned by someone else.",
      example: "She bought the desk second-hand for almost nothing.",
    },
    {
      word: "everyday",
      partOfSpeech: "adjective",
      meaning: "Ordinary and used daily.",
      example: "It's become part of my everyday routine.",
    },
    {
      word: "practical",
      partOfSpeech: "adjective",
      meaning: "Useful in real situations rather than decorative.",
      example: "The gift wasn't romantic, but it was extremely practical.",
    },
  ],
  sampleResponse: {
    transcript: `The object I've chosen is my sewing machine, which lives in the corner of my living room. It's an old mechanical model, cream-coloured with gold lettering, and it must be at least forty years old, because my grandmother bought it second-hand when my mother was a teenager.

As for how I got it, my grandmother passed it on to me when I moved into my first flat. She'd noticed that I'd asked her to mend things three times in one month—trousers, a bag strap, a curtain—so she said, right, time you learned. She spent a whole weekend teaching me the basics, and then she drove it over in the boot of her little car—no, wait, her neighbour's car, hers was too small—wrapped in a blanket.

I use it constantly, more than I ever expected. The routine stuff is hemming trousers and taking in dresses that are too big, but I've also made cushion covers, repaired my rucksack, and last year I ran up a last-minute astronaut costume for my nephew, which made me the favourite auntie for about a week. Whenever something tears now, my first thought isn't 'bin it', it's 'five minutes on the machine'.

Why is it so useful? Well, practically, it saves me real money—a tailor near me charges a fortune for small jobs, and I probably do two or three repairs a month. But it's more than that. Because it's mechanical, nothing digital, it never needs updates and nothing has broken in four decades, which I find genuinely reassuring. And every time I use it, I think of my grandmother's hands on the same wheel, so it's useful for my clothes and, in a funny way, useful for my mood too. I'd rescue it first in a fire, honestly.`,
    wordCount: 298,
    durationEstimateSec: 125,
    bandEstimate: "Band 7.5 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The object is claimed in one short sentence, then given a portrait: mechanical, cream-coloured, gold lettering, at least forty years old. On an object card, age is a story waiting to happen.",
    },
    {
      aspect: "Second bullet — how you got it",
      note: "The acquisition story doubles as characterisation: the grandmother counting three mended items in a month and issuing the verdict 'time you learned'. An inherited object answers 'how you got it' with a person, which is always stronger than a receipt.",
    },
    {
      aspect: "Third bullet — what you use it for",
      note: "Uses escalate from routine (hems, taking in dresses) to triumph (the astronaut costume, favourite auntie for a week). The escalation gives the list a shape, and the closing thought-swap ('bin it' versus 'five minutes on the machine') shows a changed habit, not just a habit.",
    },
    {
      aspect: "The reflection — why it is so useful",
      note: "The evaluation stacks three floors: money saved, reliability ('nothing has broken in four decades') and meaning (the grandmother's hands). Ending on the fire joke keeps the sentiment from turning syrupy.",
    },
    {
      aspect: "Language choices",
      note: "'Ran up a costume', 'taking in dresses', 'hemming' — the vocabulary of the craft is used lightly and correctly, which reads as genuine familiarity rather than rehearsal.",
    },
    {
      aspect: "Spoken register",
      note: "The long self-correction about whose car carried the machine is the most human moment in the talk and costs nothing to include. Copy the method — object, origin, uses in rising order, layered 'why' — with your own inherited or everyday item; do not recite these sentences.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "A kitchen appliance",
      note: "A rice cooker or air fryer is the gentlest foundation choice: the acquisition is a gift or a flat-warming, and 'why so useful' is speed and time saved — with a reflection on how quickly it became essential.",
    },
    {
      approach: "A bicycle",
      note: "A bike carries freedom, first jobs and independence; the acquisition story often involves a parent or a summer of saving, and usefulness spans health, money and memory.",
    },
    {
      approach: "A toolbox inherited from a parent",
      note: "Keeps the inheritance emotion of the sample but changes the craft: drills, picture-hanging, flat-pack rescue — and the ending can honour the hands that wore the handles smooth.",
    },
    {
      approach: "A kitchen whiteboard",
      note: "A deliberately humble object: cheap, unlovely, but the family's entire scheduling brain; the card becomes about order, and usefulness about relationships rather than things.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Do you think people buy too many things they don't need?",
      "Are hand-made gifts better than bought ones?",
      "Will smart devices replace traditional tools in homes?",
    ],
    practice: [
      "Describe the object in your home you would save from a fire — the forced ranking sharpens the 'why it matters' line.",
      "Attempt 'Describe something you bought and never used' for contrast practice.",
      "Record 'an object your family has kept for a long time' and end on what it stands for.",
    ],
  },
  requirements: [
    {
      key: "what-it-is",
      description: "Names the object and gives at least two physical details.",
      keywords: ["sewing", "machine", "mechanical", "gold", "corner"],
    },
    {
      key: "how-you-got-it",
      description: "Tells the story of how it came to the speaker, with a person or occasion attached.",
      keywords: ["grandmother", "flat", "weekend", "boot", "teenager"],
    },
    {
      key: "what-you-use-it-for",
      description: "Gives several specific uses, ideally including one memorable example.",
      keywords: ["hemming", "cushion", "rucksack", "costume", "tears"],
    },
    {
      key: "why-so-useful",
      description: "Argues usefulness on more than one level — money, reliability or meaning.",
      keywords: ["useful", "money", "tailor", "reassuring", "wheel"],
    },
    {
      key: "natural-simple-telling",
      description: "Uses simple, concrete language with short linking phrases rather than long recited sentences.",
      keywords: ["stuff", "right", "also", "whenever", "probably"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Activities — a hobby you would like to try
// ---------------------------------------------------------------------------

{
  kind: "cue-card",
  slug: "ielts-sb-p2-activities",
  title: "Cue card — a hobby you'd like to try",
  family: "activities",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  task: "Describe a hobby you would like to try.",
  situation:
    "It is a bright morning at your IELTS Speaking test in Auckland. The examiner hands you this card together with a sheet for notes.",
  bullets: ["what the hobby is", "how you learned about it", "what attracts you to it"],
  extension: "and explain why you haven't started yet.",
  prepSec: 60,
  speakMinSec: 60,
  speakMaxSec: 120,
  planningNotes: [
    {
      heading: "WHAT the hobby is",
      notes: [
        "beekeeping · small colony of honeybees",
        "seasonal care → jars of honey",
        "3rd-floor flat = funny obstacle",
      ],
    },
    {
      heading: "HOW I learned of it",
      notes: [
        "Marta · two hives · allotment",
        "hand-labelled jar → one lunch of questions",
        "documentary · two evenings",
        "association 15 min away · spring sessions",
      ],
    },
    {
      heading: "WHAT attracts me",
      notes: [
        "slow rhythm · frames · the queen",
        "empties the head ↔ my screens + deadlines",
        "pollinates the whole neighbourhood · honey!",
      ],
    },
    {
      heading: "WHY not started yet",
      notes: [
        "cost: course + hive + kit",
        "bees can't be abandoned when work peaks",
        "open day → already emailed · next year's course",
      ],
    },
  ],
  vocabularySuggestions: [
    {
      word: "to take something up",
      partOfSpeech: "phrasal verb",
      meaning: "To begin a new hobby or activity.",
      example: "I'm planning to take up kayaking in the spring.",
    },
    {
      word: "to be drawn to something",
      partOfSpeech: "phrase",
      meaning: "To feel attracted to an activity or an idea.",
      example: "I've always been drawn to slow, quiet hobbies.",
    },
    {
      word: "to dip a toe in",
      partOfSpeech: "idiom",
      meaning: "To try something cautiously before committing.",
      example: "I want to dip a toe in before buying all the equipment.",
    },
    {
      word: "to get around to something",
      partOfSpeech: "phrase",
      meaning: "To finally do something you have postponed.",
      example: "I never seem to get around to starting it.",
    },
    {
      word: "to unwind",
      partOfSpeech: "verb",
      meaning: "To relax after stress or work.",
      example: "Gardening is how she unwinds after long shifts.",
    },
    {
      word: "gear",
      partOfSpeech: "noun",
      meaning: "The equipment a hobby needs.",
      example: "The starter gear costs more than the lessons.",
    },
    {
      word: "to sign up for",
      partOfSpeech: "phrasal verb",
      meaning: "To register for a course or an activity.",
      example: "I've signed up for the beginners' evening class.",
    },
    {
      word: "time-consuming",
      partOfSpeech: "adjective",
      meaning: "Taking a lot of time to do.",
      example: "Beekeeping looks wonderfully time-consuming.",
    },
    {
      word: "on my bucket list",
      partOfSpeech: "phrase",
      meaning: "On the list of things I want to do before I die.",
      example: "It's been on my bucket list since university.",
    },
  ],
  sampleResponse: {
    transcript: `The hobby I'd love to try is beekeeping. I know that sounds like an unusual choice for someone who lives in a third-floor flat, but it's been on my mind for a couple of years now. Essentially, you keep a small colony of honeybees, look after them through the seasons, and—if all goes well—harvest a few jars of honey at the end of the summer.

I first learned about it through a colleague, Marta, who keeps two hives on her allotment. She brought a jar of her own honey into the office once, labelled by hand, and I got so curious that I spent a whole lunch break asking her questions. Then she sent me a documentary series about urban beekeepers, and I watched the entire thing in two evenings. There's apparently a beekeeping association fifteen minutes from my flat, which runs beginners' sessions in spring.

So what attracts me? Partly it's the slow, careful rhythm of the work—checking the frames, watching the queen, learning to read what the colony needs. Marta says an hour at her hive empties her head completely, and I crave that, because my job is all screens and deadlines. I love the idea of keeping a living thing that actually benefits the whole neighbourhood, since bees pollinate gardens for kilometres around. And I won't pretend the honey doesn't tempt me.

As for why I haven't started, the honest answer is a mixture of money and timing. A beginner's course plus a starter hive and equipment comes to a serious sum, and bees aren't something you can just abandon when work gets busy. I'd want to do it properly or not at all. My plan is to join the association's open day this spring—actually, I've already emailed them—and if it still feels right, I'll sign up for next year's course. I'd rather wait one more season than start carelessly.`,
    wordCount: 318,
    durationEstimateSec: 130,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  responseAnalysis: [
    {
      aspect: "Opening move",
      note: "The speaker names the hobby and immediately answers the examiner's silent doubt — that it sounds unusual for a flat-dweller. Pre-empting objections is a high-level move that shows awareness of the listener.",
    },
    {
      aspect: "First bullet — what the hobby is",
      note: "One explanatory sentence ('you keep a small colony... harvest a few jars') proves the speaker understands the activity rather than merely naming it, which is the difference between attraction and fantasy.",
    },
    {
      aspect: "Second bullet — how you learned about it",
      note: "The discovery story has a source (Marta), a trigger object (the hand-labelled jar) and consequences — a lunch break of questions, a documentary in two evenings, a found association. Curiosity is demonstrated, never just claimed.",
    },
    {
      aspect: "Third bullet — what attracts you to it",
      note: "The pull is given three layers: rhythm, mental escape ('empties her head completely' set against 'screens and deadlines') and benefit to others — with a small joke about the honey to close the section.",
    },
    {
      aspect: "The extension — why you haven't started yet",
      note: "Reasons are ordered honestly: money, responsibility to the bees, a standard ('properly or not at all'), then a live plan with evidence — the self-correction 'actually, I've already emailed them' upgrades intention into action and is the strongest credibility signal in the talk.",
    },
    {
      aspect: "How to use this sample",
      note: "The shape — name, explain, source story, layered attraction, honest delay, next step — transfers to any would-like-to-try card, from pottery to paragliding. Fill it with a hobby you can defend for ninety seconds; borrowed enthusiasm always sounds thinner.",
    },
  ],
  alternativeApproaches: [
    {
      approach: "Pottery",
      note: "The classic swap: tactile escape from screens, wheel-thrown failures, and a barrier of cost and waiting lists; 'what attracts you' leans on touch and slow progress.",
    },
    {
      approach: "Indoor climbing",
      note: "Bouldering brings fitness and problem-solving together; the barrier becomes fear of falling or looking foolish, and the attraction includes improvement you can measure week by week.",
    },
    {
      approach: "Learning the guitar",
      note: "An instrument changes the timeline: the attraction is playing one full song for the family, the delay is practice time and sore fingers, and the plan can name the exact first song.",
    },
    {
      approach: "Open-water swimming",
      note: "Cold-water swimming adds a seasonal barrier — winters, wetsuits, safety — and the attraction is the mental reset swimmers describe; wellbeing vocabulary replaces nature vocabulary.",
    },
  ],
  followUp: {
    roundingQuestions: [
      "Why do some people never take up the hobbies they talk about?",
      "Are expensive hobbies always more rewarding than cheap ones?",
      "Should a hobby be useful, or is it fine for it to be pointless fun?",
    ],
    practice: [
      "Plan and speak 'Describe a hobby you had as a child' — compare it briefly with what you would like to try now.",
      "Attempt 'Describe a skill you would learn if you had a free year' — the same card in hypothetical clothing.",
      "Write the three honest reasons you have not started something, then speak them in order of weight.",
    ],
  },
  requirements: [
    {
      key: "what-the-hobby-is",
      description: "Names the hobby and briefly explains what doing it actually involves.",
      keywords: ["beekeeping", "colony", "honeybees", "honey", "hobby"],
    },
    {
      key: "how-you-learned-about-it",
      description: "Tells how the speaker first heard about it, with a named source.",
      keywords: ["colleague", "marta", "hives", "allotment", "documentary"],
    },
    {
      key: "what-attracts-you",
      description: "Explains the personal pull — which need or value the hobby answers.",
      keywords: ["attracts", "rhythm", "queen", "screens", "pollinate"],
    },
    {
      key: "why-not-started",
      description: "Gives honest reasons for the delay, ideally one practical and one personal.",
      keywords: ["haven't", "started", "money", "timing", "properly"],
    },
    {
      key: "points-forward",
      description: "Ends by pointing forward — a first step or a condition for starting.",
      keywords: ["plan", "spring", "emailed", "course", "season"],
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
