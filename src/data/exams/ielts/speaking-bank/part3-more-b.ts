/**
 * IELTS Speaking Masterclass — Part 3 discussion sets, batch B (PROMPT 54
 * question-bank expansion).
 *
 * Fifteen further original discussion sets, each built of exactly four
 * questions that escalate in level: the first invites opinions on the
 * familiar (accessible), the second and third move into societal causes,
 * comparisons and principles (abstract), and the fourth asks for prediction
 * and evaluation (speculative) — the escalation endpoint every set must
 * reach.
 *
 * Every model answer is an original demonstration of the moves its level
 * demands — opinion with reason, comparison with concession, speculation
 * with evaluation — written to sound spoken, with contractions and hedging,
 * never to be memorised. UK spelling throughout; no band-style label appears
 * anywhere as a claim about the learner, and no item ties any national
 * accent to a higher score.
 */

import { SPEAKING_BANK_SOURCE_NOTE, type SpeakingPart3Set } from "./types";

export const part3MoreSetsB: SpeakingPart3Set[] = [
// ---------------------------------------------------------------------------
// 1. Museums, access and funding (intermediate, difficulty 3, interaction)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-museums-value",
  title: "Discussion set — museums and who pays",
  theme: "Museums, access and funding",
  domain: "culture",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression:
    "From your own last museum visit to whether the museum of the future sells objects or experiences.",
  questions: [
    {
      question: "When did you last visit a museum, and what made you go?",
      level: "accessible",
      modelAnswer:
        "A few months ago, to be honest — a photography exhibition that was only in town for a fortnight. I'd seen a poster at the bus stop and it stuck in my head. Normally I need a reason; I don't wander in on a rainy afternoon the way some people do. But once I'm inside, I always stay longer than planned. This time I went for forty minutes of pictures and left two hours later.",
      analysis:
        "Answers honestly with one specific visit, admits a general habit, and closes with a small self-surprise — the concrete, personal detail an accessible question invites.",
      expected: ["exhibition", "poster", "hours", "visit"],
    },
    {
      question: "Why do some museums attract crowds while others stand half empty?",
      level: "abstract",
      modelAnswer:
        "Programming, mostly. The busy ones have learnt to sell a story — one big name, a gift shop, somewhere decent to eat — while the quiet ones still present glass cases and hope. Location matters too: a site next to a tourist trail can't fail, and one three bus rides away can't be saved. And I'd add photography; people go where they're allowed a good picture of themselves. Harsh, but that's the pull now.",
      analysis:
        "Generalises from a single mechanism — storytelling versus display — then adds location and social-media pull; a layered causal answer, not a list of complaints.",
      expected: ["crowd", "story", "location", "photograph"],
    },
    {
      question: "Should museums be free for everyone, or is an entrance fee fair?",
      level: "abstract",
      modelAnswer:
        "I'd say free entry for the permanent collection, tickets for the blockbusters. A country's own treasures belong, in a sense, to everybody — a child shouldn't be priced out of their own history. But touring exhibitions cost a fortune to insure and ship, and charging for those keeps the doors open. The worst model is a flat high fee, which turns a public institution into somewhere only tourists and the comfortable go.",
      analysis:
        "Proposes a two-tier compromise, defends it with a principle about ownership of heritage, then names and rejects the failure case — the weigh-and-qualify shape this level needs.",
      expected: ["free", "entry", "fee", "public"],
    },
    {
      question: "How will museums have to change over the next fifty years to stay relevant?",
      level: "speculative",
      modelAnswer:
        "I suspect the objects become the excuse and the experience becomes the product. Once you can inspect every painting at home in absurd detail, a museum has to offer what a screen can't — the room, the scale, other humans. Maybe we'll see opening hours rearranged around workshops and dinners rather than hushed corridors. The risk is museums turning into theme parks; the opportunity is returning to being places where people actually meet. I'd bet on a mix of both, honestly.",
      analysis:
        "Predicts through a clear mechanism — what a screen cannot copy — hedges with 'maybe' and 'I'd bet', and weighs risk against opportunity at the end.",
      expected: ["suspect", "screen", "maybe", "risk"],
    },
  ],
  vocabulary: [
    {
      word: "admission fee",
      partOfSpeech: "noun",
      meaning: "The price a visitor pays to enter a museum or gallery.",
      example: "The admission fee covers two visits within a month, which feels fair.",
    },
    {
      word: "permanent collection",
      partOfSpeech: "noun",
      meaning: "The objects a museum owns and displays all year round.",
      example: "Touring shows come and go; the permanent collection is what defines the place.",
    },
    {
      word: "to curate",
      partOfSpeech: "verb",
      meaning: "To select and arrange the works or objects on display.",
      example: "The whole exhibition was curated around one forgotten letter.",
    },
    {
      word: "blockbuster",
      partOfSpeech: "adjective",
      meaning: "Describing a major exhibition built to attract enormous crowds.",
      example: "We queued two hours for the blockbuster show and it was worth every minute.",
    },
    {
      word: "visitor numbers",
      partOfSpeech: "noun",
      meaning: "The count of people passing through an attraction in a period.",
      example: "Visitor numbers double whenever entry is free on Mondays.",
    },
    {
      word: "to bring history to life",
      partOfSpeech: "phrase",
      meaning: "To make the past feel vivid and present rather than distant.",
      example: "A guide who tells stories brings history to life far better than any plaque.",
    },
    {
      word: "donation",
      partOfSpeech: "noun",
      meaning: "Money given voluntarily to support an institution.",
      example: "Entry is free, but the suggested donation keeps the lights on.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Holidays far from home (intermediate, difficulty 3, fluency)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-holidays-abroad",
  title: "Discussion set — holidays far from home",
  theme: "Holidays far from home",
  domain: "everyday",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  progression:
    "From how far you'd travel for a break to whether the far-flung holiday can survive its own success.",
  questions: [
    {
      question: "Would you rather have several short breaks a year or one long trip far away?",
      level: "accessible",
      modelAnswer:
        "One long trip, no contest — though I know people who'd say the opposite. Short breaks never feel like leaving; I spend the first two days still answering emails. If I'm going to spend eight hours in a plane, I want weeks on the other side, learning the rhythm of somewhere unfamiliar. The compromise I've reached is one proper journey a year and then cheap weekends with friends nearer home. It's the far one I plan around.",
      analysis:
        "States a clear preference, contrasts it with the other camp, gives reasons in everyday images, and lands on a personal compromise — a full, flowing answer.",
      expected: ["trip", "break", "hours", "plane"],
    },
    {
      question: "Why do so many holidaymakers now choose destinations that take a whole day to reach?",
      level: "abstract",
      modelAnswer:
        "Because the world got dramatically closer without anyone announcing it. Budget airlines turned a continent into a commute, and social media finished the job — once you've watched a friend's sunrise from a mountain on the other side of the planet, the seaside two hours away feels like a consolation prize. There's status in distance too, unfortunately; 'somewhere far' now signals an interesting life. The destinations didn't change. Our sense of what counts as far did.",
      analysis:
        "Explains a social trend through accessibility, media comparison and status, closing on a neat reversal — abstract reasoning carried by one strong metaphor.",
      expected: ["airline", "media", "status", "distance"],
    },
    {
      question: "Is a long-haul holiday good for the communities that receive the visitors?",
      level: "abstract",
      modelAnswer:
        "Good in doses, corrosive at scale. A steady flow of visitors pays for schools and keeps a fishing village's young people employed at home. But when a town rearranges itself entirely around tourists — building hotels where the bakery was — it starts serving an economy it no longer belongs to. The distinction, I think, is who owns the beds. Locally-run guesthouses recycle the money; foreign-owned resorts pipe it straight back out.",
      analysis:
        "Weighs benefit against harm through the scale argument, then reduces a complex economics question to one sharp, memorable test — ownership.",
      expected: ["visitor", "tourist", "hotel", "money"],
    },
    {
      question: "Will people in fifty years still fly across the world for a fortnight by the sea?",
      level: "speculative",
      modelAnswer:
        "I doubt it stays routine, put it that way. If carbon costs are finally priced honestly, a casual long-haul flight becomes what it already is — an extravagance — and habits adjust. My guess is flying survives as something occasional and saved-for, the way my grandparents treated a dining-room suite. Virtual reality may absorb the curiosity trips; you'll 'walk' the ruins before booking anything. Some form of distant travel will persist, but the fortnight-by-the-sea at eleven hours' flying distance? That era's ending.",
      analysis:
        "Hedges a firm prediction — 'I doubt', 'my guess' — grounds it in a price mechanism, and closes with an evaluative verdict rather than a flat yes or no.",
      expected: ["fly", "carbon", "guess", "travel"],
    },
  ],
  vocabulary: [
    {
      word: "long-haul",
      partOfSpeech: "adjective",
      meaning: "Involving a flight or journey of many hours to a distant place.",
      example: "I pack only hand luggage even long-haul; it's a point of pride.",
    },
    {
      word: "to get away from it all",
      partOfSpeech: "phrase",
      meaning: "To escape daily routine completely for a while.",
      example: "We rented a hut with no signal to get away from it all.",
    },
    {
      word: "jet lag",
      partOfSpeech: "noun",
      meaning: "The tiredness and confusion after crossing several time zones.",
      example: "Jet lag hits me on the way home, never on the way out.",
    },
    {
      word: "tourist trap",
      partOfSpeech: "noun",
      meaning: "A place set up mainly to extract money from visitors.",
      example: "The old quarter has become a tourist trap selling identical fridge magnets.",
    },
    {
      word: "package holiday",
      partOfSpeech: "noun",
      meaning: "A trip sold with flights, accommodation and transfers bundled together.",
      example: "We booked a package holiday and surrendered all responsibility happily.",
    },
    {
      word: "bucket list",
      partOfSpeech: "noun",
      meaning: "A personal list of experiences to have before you die.",
      example: "The northern lights have topped my bucket list for a decade.",
    },
    {
      word: "to recharge your batteries",
      partOfSpeech: "phrase",
      meaning: "To restore your energy through rest and time away.",
      example: "A week of doing absolutely nothing is how I recharge my batteries.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. How goods travel the world (advanced, difficulty 5, lexical)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-moving-goods",
  title: "Discussion set — how goods travel the world",
  theme: "How goods travel the world",
  domain: "economics",
  difficulty: 5,
  proficiency: "advanced",
  skill: "lexical",
  progression:
    "From the labels on your own belongings to whether nations could ever make everything close to home.",
  questions: [
    {
      question: "Do you know where most of the things you use every day were made?",
      level: "accessible",
      modelAnswer:
        "Broadly, yes — and the answer is rarely the country I'm standing in. My kettle's from China, my coffee's from Ethiopia by way of a German roaster, and my trousers have apparently crossed more borders than I have. I looked once at the label on a tin of tomatoes and felt genuinely dizzy. I suppose I notice because I enjoy the puzzle of it, but most people, myself included, only check the label when something breaks.",
      analysis:
        "Answers with a vivid personal inventory, one comic image, and an honest note about when anyone actually looks — specific, self-aware, and completely natural.",
      expected: ["made", "label", "country", "check"],
    },
    {
      question: "Why is it cheaper to ship a product across an ocean than to make it next door?",
      level: "abstract",
      modelAnswer:
        "Because the ocean is the cheapest road ever built. A container slot costs a fraction of what the same volume costs to move by lorry, and the ship carries twenty thousand of them at walking pace. Add labour arbitrage — wages differ far more than freight does — and specialisation: one vast factory in one place beats ten small ones everywhere. Climate's subsidy does the rest. Distance, oddly, stopped being the expense; co-ordination is the only real cost left.",
      analysis:
        "Builds a proper economic explanation — freight economics, wage differences, scale — and lands on a counter-intuitive closing line that reframes distance itself.",
      expected: ["container", "labour", "freight", "cost"],
    },
    {
      question: "Is the global supply chain a source of resilience or fragility?",
      level: "abstract",
      modelAnswer:
        "Both, and the fragility is the price of the resilience. The system survives any single shock because it routes around it — a port closes, goods divert. But it's optimised for efficiency, not for slack, and efficiency quietly deletes the reserves that used to absorb trouble. A ship wedged in one canal emptied European furniture shops within a season. We built a machine that heals fast from small cuts and bleeds badly from one deep one.",
      analysis:
        "Refuses the either/or framing, explains the trade-off mechanistically, and seals it with an extended medical metaphor — high-level abstraction made vivid.",
      expected: ["shock", "efficiency", "system", "port"],
    },
    {
      question: "Could countries realistically bring manufacturing closer to home, and what would that world feel like?",
      level: "speculative",
      modelAnswer:
        "Realistically, selectively — and it's already beginning, though for political more than environmental reasons. Robots erode the wage advantage that made distance worthwhile, so some production creeps homeward. But full self-sufficiency is a fantasy; nobody rebuilds a rare-earth mine because sentiment asks. I'd expect a braid: local for the essentials, global for the rest, with governments paying insurance premiums in the form of stockpiles. Things would get slightly dearer and, oddly, slightly more treasured.",
      analysis:
        "Predicts with qualification, identifies the mechanism — automation eroding wage advantage — and ends on an evaluative note about what we'd actually feel.",
      expected: ["local", "global", "expect", "production"],
    },
  ],
  vocabulary: [
    {
      word: "supply chain",
      partOfSpeech: "noun",
      meaning: "The complete network that moves a product from raw material to buyer.",
      example: "The pandemic taught everyone the phrase 'supply chain' at the same moment.",
    },
    {
      word: "freight",
      partOfSpeech: "noun",
      meaning: "Goods carried in bulk by ship, train, lorry or plane.",
      example: "Most freight travels by sea because the maths is unbeatable.",
    },
    {
      word: "to outsource",
      partOfSpeech: "verb",
      meaning: "To have work done by another company, often in another country.",
      example: "They outsourced the sewing and kept the design in-house.",
    },
    {
      word: "container ship",
      partOfSpeech: "noun",
      meaning: "A vessel built to carry thousands of standardised metal boxes.",
      example: "We watched a container ship the length of the town glide past.",
    },
    {
      word: "tariff",
      partOfSpeech: "noun",
      meaning: "A tax placed on goods entering a country.",
      example: "The tariff made imported steel suddenly uncompetitive overnight.",
    },
    {
      word: "trade route",
      partOfSpeech: "noun",
      meaning: "A regular path along which goods and commerce move.",
      example: "The new canal sat astride a trade route used for a century.",
    },
    {
      word: "provenance",
      partOfSpeech: "noun",
      meaning: "The origin and journey of an object, sometimes documented.",
      example: "Shoppers now ask the provenance of their fish before the price.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. An ageing workforce (advanced, difficulty 4, development)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-older-workers",
  title: "Discussion set — an ageing workforce",
  theme: "An ageing workforce",
  domain: "workplace",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  progression:
    "From the age you'd like to stop to a working life that no longer has a finish line.",
  questions: [
    {
      question: "At what age would you like to stop working, ideally?",
      level: "accessible",
      modelAnswer:
        "Ideally around sixty-five, but only because I've watched my father ignore his own retirement entirely. He stopped for three weeks, got unbearable, and set up a small workshop. That taught me the question isn't really an age — it's what the work is. If I'm still doing something I chose, I'd happily carry on past seventy. What I want to stop is commuting in the dark, not working.",
      analysis:
        "Uses a family anecdote to question the premise of the question itself — a personal answer that redefines retirement as a question of work, not age.",
      expected: ["retire", "age", "work", "stop"],
    },
    {
      question: "Why do many employers hesitate to hire people in their sixties?",
      level: "abstract",
      modelAnswer:
        "Prejudice wearing the costume of economics, mostly. Employers assume higher sickness absence, slower learning and a shorter runway before the investment pays back — and each assumption is shakier than it sounds, since experienced hires often cost less in training and turnover. There's also an unspoken aesthetic worry: a team that 'looks like' its market. None of it survives contact with evidence, but hiring is done on impressions, and impressions are where stereotypes hide.",
      analysis:
        "Names the hidden assumptions behind 'rational' hiring, dismantles them with counter-evidence, and closes on a sharp line about where prejudice actually operates.",
      expected: ["employer", "hire", "assume", "experience"],
    },
    {
      question: "Should retirement be compulsory at a fixed age, or should people decide for themselves?",
      level: "abstract",
      modelAnswer:
        "Decide for themselves, with honest information rather than fantasy. Compulsory retirement protects no one any more; it mostly ejects people from work they're still excellent at while their pension quietly shrinks. But free choice needs guardrails, because some physically punishing jobs genuinely do break bodies by seventy. So: no fixed age, but honest medical and financial advice, and the right to carry on. Forcing wisdom out of the building on a birthday has always struck me as bizarre.",
      analysis:
        "Takes a liberal position, concedes the physical-jobs problem, and answers it with conditions rather than exceptions — principled argument with practical guardrails attached.",
      expected: ["retire", "choice", "pension", "age"],
    },
    {
      question: "How might workplaces change as people in their seventies become ordinary colleagues rather than exceptions?",
      level: "speculative",
      modelAnswer:
        "I'd expect the office calendar to soften, honestly. If seventy-year-olds are present, the culture of heroic late nights and forty-hour sprints becomes untenable — you can't sprint beside a colleague on a walking stick. Training will invert, too: the young teaching software, the old teaching clients. The deeper shift is what a 'career' even is; a fifty-year working life can't be a straight ladder, so it becomes a wave — dips, retraining, returns. Whether society funds that is the real gamble.",
      analysis:
        "Predicts cultural consequences before structural ones, builds one memorable image per prediction, and finishes by flagging the open question — speculation plus evaluation.",
      expected: ["expect", "colleague", "train", "career"],
    },
  ],
  vocabulary: [
    {
      word: "to retire",
      partOfSpeech: "verb",
      meaning: "To stop working, usually later in life.",
      example: "She retired from teaching and immediately started tutoring for free.",
    },
    {
      word: "pension",
      partOfSpeech: "noun",
      meaning: "A regular income paid to someone after they stop working.",
      example: "The pension barely covers the heating, so he consults two days a week.",
    },
    {
      word: "ageism",
      partOfSpeech: "noun",
      meaning: "Unfair treatment of people because of their age.",
      example: "Ageism is the prejudice its victims are all expected to join eventually.",
    },
    {
      word: "to pass the baton",
      partOfSpeech: "phrase",
      meaning: "To hand a role or responsibility on to the next person.",
      example: "He refused to pass the baton until someone genuinely deserved it.",
    },
    {
      word: "to wind down",
      partOfSpeech: "phrasal verb",
      meaning: "To reduce work gradually rather than stopping at once.",
      example: "He's winding down to three days and insisting it's temporary.",
    },
    {
      word: "life expectancy",
      partOfSpeech: "noun",
      meaning: "The average number of years a person can expect to live.",
      example: "Life expectancy rose faster than the pension system was designed for.",
    },
    {
      word: "mentorship",
      partOfSpeech: "noun",
      meaning: "Guidance given by an experienced colleague over a period of years.",
      example: "Her mentorship is the reason half the department stayed.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Long working hours (intermediate, difficulty 3, fluency)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-working-hours",
  title: "Discussion set — long working hours",
  theme: "Long working hours",
  domain: "workplace",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "fluency",
  progression:
    "From your own finishing time to whether an economy can thrive on fewer hours.",
  questions: [
    {
      question: "What time do you usually finish work, and is that the time you'd choose?",
      level: "accessible",
      modelAnswer:
        "Officially six, realistically half past — and no, it's not what I'd choose. The last hour of my day is mostly waiting for other people to reply so I can close something. I'd rather start earlier and finish at five with a clear head. Having said that, my partner works shifts, so my complaints about half an hour feel slightly embarrassing. It's not the hours themselves, really; it's that they belong to someone else's timetable.",
      analysis:
        "Gives the honest reality behind the official answer, contrasts preferred and actual, and ends with an insight about control — a rich, flowing personal answer.",
      expected: ["finish", "hour", "work", "time"],
    },
    {
      question: "Why do some countries work far longer hours than others for the same results?",
      level: "abstract",
      modelAnswer:
        "Because hours are a performance, not just an input. Where leaving first is read as disloyalty, people stay late as theatre — the lights stay on to be seen staying on. Then there's how work is measured: judge someone by time at a desk and they'll give you time; judge them by output and they'll give you output. Structural factors matter too — weaker unions, cheaper labour, or simply a slower economy where presence substitutes for productivity. The results, as you say, often don't change.",
      analysis:
        "Explains the gap through performed loyalty, measurement and structure — three distinct levels of explanation, each stated in a quotable spoken line.",
      expected: ["hour", "presence", "output", "late"],
    },
    {
      question: "Is a four-day working week a realistic idea or a fantasy?",
      level: "abstract",
      modelAnswer:
        "Realistic in the jobs where output is countable, fantasy where presence is the product. Trials keep showing the same pattern: fewer hours, same output, happier people — because meetings, not work, absorb the rescued day. The resistance isn't really economic; it's managerial habit. Telling a supervisor that the team will be invisible on Fridays feels like losing control, even when the numbers say otherwise. So I'd say: spreading fast wherever results can be counted, slower everywhere it's someone's presence that's being bought.",
      analysis:
        "Splits the question by job type, cites the trial evidence casually, and locates the real obstacle in psychology rather than economics — a well-conditioned verdict.",
      expected: ["week", "hour", "output", "presence"],
    },
    {
      question: "Will people in the future work fewer hours, or has technology made that impossible?",
      level: "speculative",
      modelAnswer:
        "I think the hours fall but not evenly, and not kindly. Automation should, in theory, buy us leisure the way washing machines did — and for some professions it will. My worry is the split: knowledge workers get flexibility while gig work gets algorithmically squeezed, so the average falls while the extremes worsen. The optimistic version needs politics — a shorter week written into law rather than left to employers. Left alone, I suspect technology delivers the free time and then lets someone else sell it back to us.",
      analysis:
        "Hedges a qualified prediction, contrasts winners and losers of the same trend, and closes with a suspicious eye on who captures the freed time.",
      expected: ["hour", "automation", "leisure", "suspect"],
    },
  ],
  vocabulary: [
    {
      word: "overtime",
      partOfSpeech: "noun",
      meaning: "Hours worked beyond the normal schedule, often for extra pay.",
      example: "He did so much overtime his daughters gave the office a nickname.",
    },
    {
      word: "to clock off",
      partOfSpeech: "phrasal verb",
      meaning: "To record the moment you finish work for the day.",
      example: "I clock off at six and the phone stays in the bag.",
    },
    {
      word: "full-time",
      partOfSpeech: "adjective",
      meaning: "For the complete number of hours a job normally involves.",
      example: "She went from full-time to four days and achieved more, not less.",
    },
    {
      word: "to be on call",
      partOfSpeech: "phrase",
      meaning: "To be required to respond to work at any hour.",
      example: "Being on call means the cinema is technically a meeting.",
    },
    {
      word: "productivity",
      partOfSpeech: "noun",
      meaning: "How much is produced for the hours and effort spent.",
      example: "Productivity rose the month the office went quiet on Fridays.",
    },
    {
      word: "to switch off",
      partOfSpeech: "phrasal verb",
      meaning: "To stop thinking about work during your own time.",
      example: "I can only switch off once the laptop is physically in a drawer.",
    },
    {
      word: "deadline",
      partOfSpeech: "noun",
      meaning: "The fixed time by which a task must be finished.",
      example: "The deadline moved again, and somehow that became my problem.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Celebrity culture (advanced, difficulty 4, interaction)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-celebrity-culture",
  title: "Discussion set — celebrity culture",
  theme: "Celebrity culture",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From your own disappointment in a hero to whether fame itself survives fragmentation.",
  questions: [
    {
      question: "Have you ever been disappointed by a famous person you admired?",
      level: "accessible",
      modelAnswer:
        "Once, properly, and it taught me to admire the work and skip the person. A musician whose lyrics got me through my teens turned out to hold opinions I can't unhear. I stopped listening for a year out of principle, then went back, feeling slightly dishonest. Now I try to keep a small distance from the start — enjoy the films, ignore the interviews. It's less romantic, but it saves a certain amount of heartbreak.",
      analysis:
        "Admits a real disappointment, describes the negotiation that followed honestly, and extracts a working rule from it — personal narrative turned into a general stance.",
      expected: ["famous", "admire", "listen", "work"],
    },
    {
      question: "Why does society grant actors and athletes a status that nurses and teachers rarely reach?",
      level: "abstract",
      modelAnswer:
        "Because fame scales and care doesn't. A footballer's performance can be watched by a billion people at once, so the value of one brilliant pass multiplies; a brilliant night nurse changes eight lives and goes home unseen. Media amplification did the rest — we've built an attention economy, and attention is unevenly distributed by design. There's also the dream element: everyone imagines the celebrity life could be theirs, while nobody fantasises about the night shift. Status follows the fantasy, not the contribution.",
      analysis:
        "Explains status through scalability of performance and the attention economy, then adds the psychology of aspiration — a two-layer explanation with a surgical closing line.",
      expected: ["fame", "attention", "status", "nurse"],
    },
    {
      question: "Is the pressure of constant public scrutiny a fair price for what celebrities earn?",
      level: "abstract",
      modelAnswer:
        "For the money, arguably yes; for the life, no — and the two get confused. Nobody forced anyone onto a stage, and wealth this extreme can buy therapy, security and a walled garden. But scrutiny has stopped being an occupational hazard and become the occupation itself — the fame is the product, and the person is the raw material. Where I'd draw the line is children and partners, who signed nothing. Punishing someone's eight-year-old for a parent's film career can't be justified by any salary.",
      analysis:
        "Separates money from life, concedes the earnings argument, then relocates the whole debate to a clear moral line — the children who never signed up.",
      expected: ["scrutiny", "wealth", "fame", "children"],
    },
    {
      question: "Will the idea of the celebrity survive another fifty years of technology?",
      level: "speculative",
      modelAnswer:
        "I suspect it fragments rather than dies. The mono-celebrity — one face everyone knows — needed scarce television, and scarcity is gone. What's replacing it is thousands of smaller suns: a famous person for every niche, each unknown to the neighbour. Maybe authenticity becomes the scarce thing instead, and we end up celebrating the conspicuously ordinary. What I doubt will change is the appetite itself; the village has always had someone it talks about. Technology only decides who.",
      analysis:
        "Predicts fragmentation from a scarcity argument, offers an alternative scarce good — authenticity — and roots the whole thing in a permanent human appetite.",
      expected: ["suspect", "famous", "technology", "change"],
    },
  ],
  vocabulary: [
    {
      word: "in the public eye",
      partOfSpeech: "phrase",
      meaning: "Living with constant attention from media and strangers.",
      example: "She stayed in the public eye by saying almost nothing at all.",
    },
    {
      word: "role model",
      partOfSpeech: "noun",
      meaning: "A person whose behaviour others, especially the young, copy.",
      example: "Athletes never asked to be role models; children simply appointed them.",
    },
    {
      word: "paparazzi",
      partOfSpeech: "noun",
      meaning: "Photographers who pursue famous people for pictures.",
      example: "The paparazzi followed him from the airport to the pharmacy.",
    },
    {
      word: "endorsement",
      partOfSpeech: "noun",
      meaning: "A famous person's paid public support for a product.",
      example: "The trainer endorsement paid more than the season itself did.",
    },
    {
      word: "to idolise",
      partOfSpeech: "verb",
      meaning: "To admire someone to an uncritical, unhealthy degree.",
      example: "We idolised that band; the posters were practically wallpaper.",
    },
    {
      word: "influencer",
      partOfSpeech: "noun",
      meaning: "A person paid to shape their audience's buying habits online.",
      example: "Her cousin is an influencer for a brand of rice, of all things.",
    },
    {
      word: "privacy",
      partOfSpeech: "noun",
      meaning: "The right to keep one's own life away from public attention.",
      example: "Fame ate his privacy first and his sleep second.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. The second-hand economy (intermediate, difficulty 3, lexical)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-second-hand-market",
  title: "Discussion set — the second-hand economy",
  theme: "The second-hand economy",
  domain: "economics",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "lexical",
  progression:
    "From a cherished second-hand find to whether renting could replace owning altogether.",
  questions: [
    {
      question: "Have you ever bought something second-hand that you were really pleased with?",
      level: "accessible",
      modelAnswer:
        "My record player, absolutely. I found it in a charity shop for the price of two new albums, and the man behind the till threw in a stack of old singles because, he said, no one else would want them. It's outlasted two laptops since. There's a specific pleasure in second-hand things — they arrive with a history, a scratch, a story someone tells you. My only failure was a bicycle that turned out to dislike hills as much as I do.",
      analysis:
        "One treasured object with a full story, a general reflection on used goods, and a comic self-deprecating failure — the detail that makes an accessible answer memorable.",
      expected: ["second-hand", "shop", "price", "old"],
    },
    {
      question: "Why has buying used goods shaken off its image as somehow shameful?",
      level: "abstract",
      modelAnswer:
        "Two forces flipped at once — money and meaning. Wages stalled while prices rose, so pre-owned stopped being an embarrassment and became simply sensible; nobody's ashamed of a good deal any more. Meanwhile being wasteful acquired the stigma instead. Selling platforms did the rest by making it frictionless — a coat photographed on a bed sells within an hour. Shame needs effort to survive, and the effort is gone. What was once 'second-best' rebranded itself as 'curated', which I find quietly funny and entirely predictable.",
      analysis:
        "Explains a cultural reversal through economics, shifting stigma and platform design — then notices the marketing rebrand with gentle irony, which lifts it further.",
      expected: ["shame", "price", "platform", "stigma"],
    },
    {
      question: "Can a market for second-hand goods ever be more than a niche?",
      level: "abstract",
      modelAnswer:
        "For durable goods, I'd argue it already isn't a niche — cars and houses have always been mostly second-hand. What's left is fashion and electronics, and there the ceiling is design: things built to be replaced rather than repaired. If a phone had a replaceable battery and an unlockable operating system, the used market would swallow the new one. So the niche isn't in the buyers; it's in the products. Where manufacturers keep the keys, resale stays a side door.",
      analysis:
        "Reframes the question — the niche lies in product design, not demand — and argues it with a concrete conditional about repairable phones; the 'side door' image lands the point.",
      expected: ["repair", "market", "second-hand", "design"],
    },
    {
      question: "Might owning things one day give way to renting almost everything?",
      level: "speculative",
      modelAnswer:
        "For the expensive, rarely used things, probably — drills, cars, occasion suits — because the economics are brutal: an object used forty minutes a year shouldn't have an owner. Beyond that, I doubt it. Possession is identity; people don't rent their books or their grandmother's chair. My guess is a hybrid: renting the functional layer, owning the sentimental one, and a slow cultural shift in what 'enough' looks like. The interesting question is whether we'd notice ourselves becoming tenants of our own homes.",
      analysis:
        "Predicts selectively with a crisp economic rule, defends the human limit with an emotional example, and ends by questioning the direction of travel itself.",
      expected: ["rent", "own", "doubt", "guess"],
    },
  ],
  vocabulary: [
    {
      word: "pre-owned",
      partOfSpeech: "adjective",
      meaning: "Describing something that has had a previous owner, politely.",
      example: "The showroom sells pre-owned cars beside the new ones, at half the shine.",
    },
    {
      word: "to upcycle",
      partOfSpeech: "verb",
      meaning: "To convert an old or discarded item into something better.",
      example: "She upcycled a ladder into bookshelves and now charges for the idea.",
    },
    {
      word: "to wear out",
      partOfSpeech: "phrasal verb",
      meaning: "To become damaged or thin through long use.",
      example: "Good boots wear out; cheap boots wear through.",
    },
    {
      word: "charity shop",
      partOfSpeech: "noun",
      meaning: "A shop selling donated goods to raise money for good causes.",
      example: "Half my wardrobe is charity shop, and the better half at that.",
    },
    {
      word: "to resell",
      partOfSpeech: "verb",
      meaning: "To sell something you bought on to a new buyer.",
      example: "I resell my books to fund the habit of buying more.",
    },
    {
      word: "vintage",
      partOfSpeech: "adjective",
      meaning: "Describing older items valued for their age and style.",
      example: "He wears vintage jackets that cost less than new fast fashion.",
    },
    {
      word: "throwaway",
      partOfSpeech: "adjective",
      meaning: "Describing a culture of discarding rather than keeping.",
      example: "Throwaway culture treats a small rip as a funeral.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Gardens and growing food in cities (advanced, difficulty 4, development)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-urban-gardens",
  title: "Discussion set — gardens in the city",
  theme: "Gardens and growing food in cities",
  domain: "environment",
  difficulty: 4,
  proficiency: "advanced",
  skill: "development",
  progression:
    "From a balcony of herbs to whether a city could ever feed itself.",
  questions: [
    {
      question: "Do you have anywhere to grow plants where you live?",
      level: "accessible",
      modelAnswer:
        "A balcony the size of a doormat, which I've filled past reason. Herbs in pots, two tomato plants that produce about four tomatoes a year between them, and a stubborn rosemary bush that ignores every mistake I make. My grandfather had a proper allotment and would find my efforts adorable and tragic in equal measure. But there's something in putting a seed in a pot on the fourth floor — you start noticing weather, light, which way the building faces. It changes how you look at the whole street.",
      analysis:
        "Answers with affectionate specifics and comic honesty, then widens the frame — growing changes how you see the city itself. Personal detail serving a larger point.",
      expected: ["grow", "plants", "balcony", "pot"],
    },
    {
      question: "Why is growing your own food in a city often harder than it sounds?",
      level: "abstract",
      modelAnswer:
        "Because a city is hostile to the inputs plants need. Light arrives sliced between towers, water costs more than the crop is worth, and the soil, where there is any, carries a century of industrial history in it. Time is the quiet killer — a working parent can love the idea of a vegetable patch and still not be home to water it in August. Gardens thrive on attention, and attention is precisely what urban life fragments best.",
      analysis:
        "Structures the answer around three physical constraints and one human one, closing on a paradox about attention — analysis that finds the real bottleneck.",
      expected: ["light", "water", "soil", "time"],
    },
    {
      question: "Are urban food projects a real contribution to a city or mainly a pleasant gesture?",
      level: "abstract",
      modelAnswer:
        "Both, and the pleasantness isn't trivial. In calories, a rooftop garden is a gesture — it feeds a street, not a district, and honesty about that matters. But the gesture has side effects: a shared garden turns strangers into neighbours, and children who've pulled a carrot from soil eat vegetables they'd otherwise refuse. The contribution is social before it's agricultural. I'd judge a project by whether the neighbourhood defends it when funding ends — that tells you it became infrastructure rather than decoration.",
      analysis:
        "Concedes the calorie argument, then revalues the project on social terms, and finishes with a sharp test that separates real contribution from decoration.",
      expected: ["garden", "neighbour", "social", "project"],
    },
    {
      question: "Could a city ever grow a serious share of its own food?",
      level: "speculative",
      modelAnswer:
        "A serious share, no; a meaningful margin, quite possibly. Vertical farms already grow leaves under lights at densities a field can't touch, but they'll only ever excel at crops that forgive electricity prices — salad, herbs, strawberries. Grain, orchards and potatoes will stay rural because sunlight is free. My guess is cities grow their garnish and import their bread, and that's fine. The danger is the fantasy version, where a city claims self-sufficiency on a brochure while its actual dinner is trucked in nightly.",
      analysis:
        "Splits prediction into what's plausible and what isn't, gives the mechanism — electricity versus free sunlight — and warns against the brochure version with dry humour.",
      expected: ["city", "grow", "food", "guess"],
    },
  ],
  vocabulary: [
    {
      word: "allotment",
      partOfSpeech: "noun",
      meaning: "A small rented plot for growing vegetables, common in British towns.",
      example: "There's a ten-year waiting list for the allotments by the railway.",
    },
    {
      word: "green space",
      partOfSpeech: "noun",
      meaning: "Land with grass, trees or planting in a built-up area.",
      example: "The hospital's green space is where the staff actually decompress.",
    },
    {
      word: "to grow your own",
      partOfSpeech: "phrase",
      meaning: "To produce your own food, however small the scale.",
      example: "Growing your own tomatoes ruins shop ones for you permanently.",
    },
    {
      word: "urban farm",
      partOfSpeech: "noun",
      meaning: "Food production inside a city, on rooftops or in warehouses.",
      example: "The urban farm in the old depot supplies three restaurants.",
    },
    {
      word: "food miles",
      partOfSpeech: "noun",
      meaning: "The distance food travels from where it's grown to where it's eaten.",
      example: "The label lists food miles, which is either helpful or a guilt tax.",
    },
    {
      word: "window box",
      partOfSpeech: "noun",
      meaning: "A narrow container for plants fixed to a windowsill.",
      example: "Her window box of chillies is the most productive metre in the building.",
    },
    {
      word: "to harvest",
      partOfSpeech: "verb",
      meaning: "To gather in a crop when it is ready.",
      example: "We harvested eleven courgettes and gave away nine; such is courgette law.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Street art and public spaces (advanced, difficulty 4, grammar)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-street-art",
  title: "Discussion set — street art and public spaces",
  theme: "Street art and public spaces",
  domain: "culture",
  difficulty: 4,
  proficiency: "advanced",
  skill: "grammar",
  progression:
    "From the walls of your own area to who holds the pen on the surfaces we all share.",
  questions: [
    {
      question: "Is there much street art where you live?",
      level: "accessible",
      modelAnswer:
        "There's one extraordinary wall and a lot of aftermath. A few years ago an artist painted a giant heron on the side of the old post office, and it completely changed how that street feels — people give directions by it now. The rest is tags and scrawled initials, which I'd defend less warmly. Oddly, the heron hasn't been touched since; the taggers seem to respect it. So one good painting appears to shame the rubbish around it into behaving.",
      analysis:
        "Contrasts one cherished mural with the ordinary mess around it, then reports the detail that taggers leave it alone — observation sharpened into a small theory.",
      expected: ["street", "wall", "paint", "mural"],
    },
    {
      question: "Why does street art often feel more alive than the art inside galleries?",
      level: "abstract",
      modelAnswer:
        "Because it takes risks a gallery never allows. There's no price list, no committee, and no undo button — you paint it at night, and the rain, the council or a rival can delete it by morning. That mortality gives it urgency, and the setting does the rest: a portrait on a gable wall meets people on their way to work, whether they asked for art or not. Galleries are rooms we enter to be persuaded; a wall catches us unprepared, and unprepared is where art lands hardest.",
      analysis:
        "Argues from risk and impermanence to reach urgency, then contrasts gallery and street as encounters — abstract aesthetics explained through the conditions of display.",
      expected: ["risk", "gallery", "wall", "night"],
    },
    {
      question: "If someone paints a wall you own without asking, is that art or damage?",
      level: "abstract",
      modelAnswer:
        "It's both, and the law is entitled to say damage while I still call it art. The interesting cases aren't the tags but the ambitious pieces — and even there, consent is the whole argument. A mural can be beautiful and still be an intrusion; if it faces my kitchen window, I've been enrolled in exhibiting it. My own line: the more public the wall, the weaker the owner's claim; the more private, the stronger. A railway bridge is a commons; someone's front fence is their face.",
      analysis:
        "Refuses to collapse the two judgements, centres the argument on consent, and constructs a proportional principle — public walls, weaker claims — with two closing images.",
      expected: ["damage", "consent", "public", "mural"],
    },
    {
      question: "Who will decide what appears on city walls in fifty years — artists, councils or algorithms?",
      level: "speculative",
      modelAnswer:
        "I'd bet on councils using algorithms and calling it art. Digital facades are already cheap, and a city that can sell one wall to forty advertisers an hour won't leave it to a teenager with a spray can. The counterforce is precisely that scarcity: when every surface flickers with commissioned content, an actual human hand-painted wall becomes astonishing — the way vinyl came back. So my guess is a split city: screens for the official message, and a protected, treasured fringe where the old crime is quietly encouraged.",
      analysis:
        "Predicts commercial capture, then identifies the counterforce — scarcity reversing value — and lands on a two-tier future; speculation grounded in a historical rhyme.",
      expected: ["council", "digital", "wall", "guess"],
    },
  ],
  vocabulary: [
    {
      word: "mural",
      partOfSpeech: "noun",
      meaning: "A painting made directly onto a wall or other large surface.",
      example: "The mural of the canal workers covers three storeys.",
    },
    {
      word: "graffiti",
      partOfSpeech: "noun",
      meaning: "Writing or drawings scribbled illicitly on public surfaces.",
      example: "The graffiti under the bridge changes weekly, like a rough magazine.",
    },
    {
      word: "to vandalise",
      partOfSpeech: "verb",
      meaning: "To damage property that isn't yours on purpose.",
      example: "They vandalised the shelter the week after it was repainted.",
    },
    {
      word: "tag",
      partOfSpeech: "noun",
      meaning: "A graffiti writer's personal signature or mark.",
      example: "His tag appears on every bridge from here to the coast.",
    },
    {
      word: "public space",
      partOfSpeech: "noun",
      meaning: "An area that anyone may use, owned collectively.",
      example: "A bench, a square, a fountain — public space is the city's living room.",
    },
    {
      word: "commissioned",
      partOfSpeech: "adjective",
      meaning: "Ordered and paid for by a client or authority.",
      example: "The commissioned piece arrived with a plaque and lost something instantly.",
    },
    {
      word: "ephemeral",
      partOfSpeech: "adjective",
      meaning: "Lasting only a short time by nature.",
      example: "Street art is proudly ephemeral; the photograph is the museum.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 10. Services moving online (advanced, difficulty 4, interaction)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-remote-services",
  title: "Discussion set — services moving online",
  theme: "Services moving online",
  domain: "technology",
  difficulty: 4,
  proficiency: "advanced",
  skill: "interaction",
  progression:
    "From your own last visit to a counter to whether any counter survives the century.",
  questions: [
    {
      question: "Do you prefer dealing with services online or speaking to someone in person?",
      level: "accessible",
      modelAnswer:
        "It depends entirely on how angry I am, honestly. For anything routine — booking, paying, checking a balance — online wins easily; I'd rather not make small talk to buy a train ticket. But the moment something's gone wrong, the app becomes a maze designed by the culprit, and I want a human with the power to break the rules. The best services have noticed this: smooth self-service for the happy path, and a real person reachable within a minute for everything else.",
      analysis:
        "Splits the answer by situation rather than picking a side, uses one very funny image, and generalises into a design principle — the move from opinion to insight.",
      expected: ["online", "human", "app", "person"],
    },
    {
      question: "Why do organisations push customers towards apps even when customers complain?",
      level: "abstract",
      modelAnswer:
        "Because the customer's time is free to them and staff time isn't. Every transaction pushed onto an app is a queue that never has to be staffed, and the maths are irresistible at scale — an app serves a million people simultaneously and never asks for a raise. Complaints barely register, since switching is tedious and most of us stay. There's also the data dividend: an app watches every hesitation in a way a teller never could. The design goal quietly shifted from service to throughput.",
      analysis:
        "Explains corporate behaviour through cost structures, customer inertia and data value — a systems answer, with the closing line naming the quiet shift in purpose.",
      expected: ["app", "staff", "customer", "data"],
    },
    {
      question: "Who loses most when everyday services move online?",
      level: "abstract",
      modelAnswer:
        "The people for whom the assumption of a smartphone, a bank card and a quiet afternoon to learn a new interface doesn't hold. That's older people, obviously, but also anyone exhausted after a twelve-hour shift, anyone who can't afford the device, anyone whose language the interface doesn't speak well. Digital exclusion is rarely about skill — most people can learn — it's about confidence, money and time, which are precisely what's in shortest supply for those affected. Online-first services quietly tax the poor and the old in the currency of waiting.",
      analysis:
        "Answers with a definition rather than a list, widens 'losers' beyond the obvious group, and closes with a metaphor that turns exclusion into a tax — argument at full stretch.",
      expected: ["people", "device", "exclusion", "confidence"],
    },
    {
      question: "Will there be any counters left to walk up to in thirty years' time?",
      level: "speculative",
      modelAnswer:
        "A few, surviving the way vinyl records survive — as a premium, a ceremony, a reassurance. The bank branch, the ticket office and the pharmacy counter are expensive per transaction, and the economics only point one way. But institutions that go fully digital discover they've lost their shop window, and some will reopen small, beautiful versions of themselves for exactly that reason. My guess: the counter doesn't vanish; it becomes a boutique, priced and polished, and the last queues become a nostalgic service some people happily pay for.",
      analysis:
        "Predicts decline but reframes survival as premiumisation, supported by the shop-window insight; ends with a plausible, slightly wry picture rather than a shrug.",
      expected: ["counter", "digital", "branch", "guess"],
    },
  ],
  vocabulary: [
    {
      word: "to queue",
      partOfSpeech: "verb",
      meaning: "To wait in line for a service.",
      example: "I'd queue forty minutes at the town hall rather than phone them.",
    },
    {
      word: "self-service",
      partOfSpeech: "noun",
      meaning: "Customers doing the work themselves through systems provided.",
      example: "The self-service tills hum while one cashier watches six of them.",
    },
    {
      word: "digital exclusion",
      partOfSpeech: "noun",
      meaning: "Being shut out of services that exist only online.",
      example: "Digital exclusion usually arrives with the closure of the last branch.",
    },
    {
      word: "face-to-face",
      partOfSpeech: "adjective",
      meaning: "With people physically present together.",
      example: "A face-to-face appointment settles in minutes what a month of emails couldn't.",
    },
    {
      word: "to streamline",
      partOfSpeech: "verb",
      meaning: "To make a process simpler and cheaper by removing steps.",
      example: "They streamlined the application and quietly deleted the appeals form with it.",
    },
    {
      word: "to go paperless",
      partOfSpeech: "phrase",
      meaning: "To stop using printed documents in favour of digital ones.",
      example: "We went paperless and now hold three passwords where the letterbox was.",
    },
    {
      word: "customer service",
      partOfSpeech: "noun",
      meaning: "The help an organisation offers before and after a purchase.",
      example: "Their customer service is a chatbot that apologises in four languages.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 11. Handwriting and communication (intermediate, difficulty 3, development)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-handwriting",
  title: "Discussion set — handwriting and its future",
  theme: "Handwriting and communication",
  domain: "education",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "development",
  progression:
    "From your own handwriting today to whether the hand-written word outlives it.",
  questions: [
    {
      question: "How often do you actually write by hand these days?",
      level: "accessible",
      modelAnswer:
        "Barely, and it shows. Shopping lists, a birthday card, the odd form at the doctor's — that's the full inventory. My handwriting used to be quite neat; now it deteriorates halfway down a page, like a runner hitting a wall. What I notice most is that writing by hand has become slow enough to feel like an occasion. When I write a card, I actually think about each sentence, which never happens when I'm typing at the speed of thought.",
      analysis:
        "A frank inventory with a comic simile, developed into an insight about slowness — the personal observation grows into a general point about thinking.",
      expected: ["hand", "write", "card", "type"],
    },
    {
      question: "Why does handwriting still feel more personal than a typed message?",
      level: "abstract",
      modelAnswer:
        "Because the hand leaks. A typed line is identical whether you wrote it calm or furious; handwriting carries the pressure, the slope, the hurry — evidence of a body at a moment in time. There's also scarcity value: the rarer it gets, the more devotion a handwritten note signals, since it now costs real time. And we read age and story into script — your grandmother's recipe in her own hand is her, in a way no scan is. The message got equal; the messenger didn't.",
      analysis:
        "Argues that handwriting transmits the person, not just the words — pressure, hurry, identity — then adds scarcity and closes on a chiasmus; a layered, quotable explanation.",
      expected: ["handwriting", "personal", "time", "hand"],
    },
    {
      question: "Should schools keep teaching handwriting when children will mostly type?",
      level: "abstract",
      modelAnswer:
        "Keep it, but for different reasons than tradition. The evidence that young children form ideas more easily by hand is decent — the slowness forces the brain to wait for the sentence, and that helps composition. So teach it as a thinking tool up to a certain age, alongside keyboard skills, and stop pretending adults need beautiful script. Calligraphy can survive as an art option, like pottery. The mistake would be teaching it as if the fax machine were coming back.",
      analysis:
        "Separates the thinking-skill case from the nostalgia case, proposes an age-bounded compromise, and kills the traditionalist version with one joke — a clear, conditional policy answer.",
      expected: ["school", "children", "teach", "hand"],
    },
    {
      question: "Will anyone be writing by hand at the end of this century?",
      level: "speculative",
      modelAnswer:
        "My honest guess is yes, but as a craft rather than a skill — the way nobody needs a horse and yet riding thrives. Law, medicine and forms will finish their move to voice and screens, and children will learn script the way mine learnt cursive: briefly, ceremonially, without needing it. What survives is the gift function — love letters, condolences, a name in the front of a book. The century probably ends with handwriting as something people do to be human, not to communicate.",
      analysis:
        "Predicts the decline of handwriting as necessity and its survival as meaning, using the horse analogy, then redefines its future purpose in the closing line.",
      expected: ["guess", "handwriting", "learn", "letter"],
    },
  ],
  vocabulary: [
    {
      word: "cursive",
      partOfSpeech: "noun",
      meaning: "Flowing handwriting in which the letters are joined.",
      example: "We learnt cursive for three years and used it for none of them.",
    },
    {
      word: "to jot something down",
      partOfSpeech: "phrase",
      meaning: "To write something quickly and briefly.",
      example: "I jot numbers on my hand like a teenager in an old film.",
    },
    {
      word: "to put pen to paper",
      partOfSpeech: "phrase",
      meaning: "To begin actually writing something by hand.",
      example: "I only understand a problem once I put pen to paper.",
    },
    {
      word: "legible",
      partOfSpeech: "adjective",
      meaning: "Clear enough for someone else to read.",
      example: "The prescription was legible, which for a doctor is a personality trait.",
    },
    {
      word: "calligraphy",
      partOfSpeech: "noun",
      meaning: "The decorative art of beautiful handwriting.",
      example: "Her wedding invitations were calligraphy; mine were a gamble.",
    },
    {
      word: "to take notes",
      partOfSpeech: "phrase",
      meaning: "To write down the important points while listening.",
      example: "I take notes by hand precisely because it slows me into listening.",
    },
    {
      word: "to dash something off",
      partOfSpeech: "phrasal verb",
      meaning: "To write something quickly and casually.",
      example: "I dashed off a thank-you email and regretted its coldness by evening.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 12. Sleep and modern life (advanced, difficulty 4, lexical)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-sleep",
  title: "Discussion set — sleep and modern life",
  theme: "Sleep and modern life",
  domain: "health",
  difficulty: 4,
  proficiency: "advanced",
  skill: "lexical",
  progression:
    "From your own bedtime habits to whether we should engineer the night itself.",
  questions: [
    {
      question: "Are you generally happy with the amount of sleep you get?",
      level: "accessible",
      modelAnswer:
        "Quantity, yes; quality, embarrassingly no. I'm in bed at a sensible hour, but I take my phone with me like a security blanket, and the last twenty minutes belong to whatever the internet thinks I am. I know all the rules — dark room, no screens, consistent times — and I follow them the way people follow diets, faithfully for a fortnight and then bitterly. The strange part is that my best sleep happens on holiday, in strange beds, which suggests the problem was never the pillow.",
      analysis:
        "Splits the answer into quantity and quality, confesses the phone habit with a precise image, and ends on a self-diagnosis — honest, funny and developed.",
      expected: ["sleep", "bed", "phone", "hour"],
    },
    {
      question: "Why does modern life seem designed to undermine sleep?",
      level: "abstract",
      modelAnswer:
        "Because sleep produces nothing that can be sold, and everything around it does. An asleep person is, commercially speaking, a switched-off television — so apps compete to delay the switch. Work moved into the evening when it moved into the phone, and the bedroom stopped being a separate country. Add electric light, which deletes the signal our body clock was built to read, and caffeine, which borrows alertness from the following morning. Nothing conspired; every actor just followed profit, and sleep lost every small negotiation.",
      analysis:
        "Explains sleep erosion through incentives — nobody profits from the sleeping — then piles up light, work and caffeine, closing on the idea of a thousand small defeats.",
      expected: ["sleep", "phone", "light", "app"],
    },
    {
      question: "Should employers take any responsibility for how well their people sleep?",
      level: "abstract",
      modelAnswer:
        "Increasingly, yes — not out of kindness, but arithmetic. Sleep-deprived staff make worse decisions, have more accidents and take more sick days, so an employer who emails at midnight is vandalising their own asset. That said, I'd stop short of the surveillance version, where an app reports your rest to your manager; that turns a health matter into a performance metric and poisons it. The legitimate role is boundaries — no expectation of replies out of hours, no rotas that flip between dawn and dusk. Guard the conditions, not the bedroom.",
      analysis:
        "Justifies responsibility through cost rather than sentiment, then bounds it — rejecting surveillance explicitly — and compresses the whole position into a final aphorism.",
      expected: ["employer", "sleep", "decision", "hour"],
    },
    {
      question: "If technology could let us control sleep precisely, should we use it?",
      level: "speculative",
      modelAnswer:
        "I'd use it, and I don't quite trust myself to answer calmly. A pill or device delivering perfect eight hours on demand would rescue shift workers and new parents first, and that alone justifies it. The worry is the optimisation reflex: once sleep is adjustable, it becomes negotiable, and we'd shave an hour off to be more productive. History says we only protect what we can't engineer. My hope is we'd use it to restore the eight hours, not to abolish them — but I wouldn't bet the house.",
      analysis:
        "Admits personal bias, builds the strongest case first, then names the failure mode — negotiability — and closes with hedged hope; balanced speculation about a real technology.",
      expected: ["sleep", "hour", "hope", "productive"],
    },
  ],
  vocabulary: [
    {
      word: "sleep deprivation",
      partOfSpeech: "noun",
      meaning: "The state of not getting enough sleep over time.",
      example: "Sleep deprivation is celebrated in new parents and nobody else.",
    },
    {
      word: "body clock",
      partOfSpeech: "noun",
      meaning: "The internal system that times sleep and wakefulness.",
      example: "My body clock still believes the night shift was a lifestyle.",
    },
    {
      word: "insomnia",
      partOfSpeech: "noun",
      meaning: "The inability to fall asleep or stay asleep.",
      example: "His insomnia clocks in at three, precisely when the worries do.",
    },
    {
      word: "to nap",
      partOfSpeech: "verb",
      meaning: "To sleep briefly during the day.",
      example: "I nap on trains with the confidence of a cat.",
    },
    {
      word: "night owl",
      partOfSpeech: "noun",
      meaning: "A person naturally most alert late at night.",
      example: "Night owls get misdiagnosed as lazy by a society of larks.",
    },
    {
      word: "sleep hygiene",
      partOfSpeech: "noun",
      meaning: "The habits and conditions that support good sleep.",
      example: "Perfect sleep hygiene, yet I lie there composing arguments I'll never have.",
    },
    {
      word: "to feel refreshed",
      partOfSpeech: "phrase",
      meaning: "To feel newly energetic after resting.",
      example: "I wake feeling refreshed roughly twice a year, both on holiday.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 13. Fast food and convenience (intermediate, difficulty 3, grammar)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-fast-food",
  title: "Discussion set — fast food and convenience",
  theme: "Fast food and convenience",
  domain: "health",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "grammar",
  progression:
    "From your own takeaway habit to whether convenience and health can ever be the same product.",
  questions: [
    {
      question: "How big a part does fast food play in your weekly routine?",
      level: "accessible",
      modelAnswer:
        "More than I'd admit to my doctor, less than I'd admit to myself — probably twice a week, Fridays and one weak moment. It's rarely a craving; it's what happens when the day runs out before the fridge does. My rule is that it has to arrive on a bicycle, which feels like a small moral offset. When I do cook, I enjoy it, so it's not laziness exactly — more a planning problem dressed up as one.",
      analysis:
        "Answers with humour and precision, explains the trigger rather than denying the habit, and closes by reframing it as a planning problem — self-aware and developed.",
      expected: ["week", "cook", "fridge", "bicycle"],
    },
    {
      question: "Why is unhealthy food so often the cheapest and fastest option?",
      level: "abstract",
      modelAnswer:
        "Because the costs are paid in different currencies at different times. Fat, sugar and refined flour are cheap to grow, cheap to store and almost eternal to transport — fresh vegetables sulk and rot, which makes them expensive to sell. The health bill arrives decades later and lands on the customer and the health service, not the menu. So the price on the till is honest about the ingredients and silent about everything else. Cheap food is real; cheap food that's honest about its cost doesn't exist yet.",
      analysis:
        "Explains price through supply-chain physics and cost-shifting — the person who pays isn't at the till — and closes with a distinction the listener can keep.",
      expected: ["cheap", "sugar", "health", "cost"],
    },
    {
      question: "Is fast food genuinely to blame for poor health, or is it a scapegoat?",
      level: "abstract",
      modelAnswer:
        "Both charges are true, which is inconvenient for everyone. Fast food is engineered to defeat moderation — salt, fat and sugar tuned to the point where 'just one' is a technical impossibility — so it's a genuine cause. But blaming it alone lets everything else off: the missing cooking lessons, the twelve-hour days, the towns where the fryer is the only kitchen left. It's the most visible soldier in a much larger army. I'd fine the industry and still refuse to call it the whole war.",
      analysis:
        "Holds both positions at once — engineered harm and scapegoating — supports each with specifics, and the soldier-and-army metaphor carries the nuance without hedging it away.",
      expected: ["food", "blame", "sugar", "cook"],
    },
    {
      question: "Could fast food ever be made truly healthy without losing what makes it popular?",
      level: "speculative",
      modelAnswer:
        "Mostly, I suspect — but the last mile is cultural, not chemical. Reformulated salt, air-fried chips and fibre-heavy buns already exist and taste fine; the food scientists have quietly done their work. What can't be reformulated is the meaning: fast food sells as a treat, a rebellion, a reward, and 'the healthy option' is nobody's idea of a rebellion. So my prediction is stealth health — better recipes, unadvertised — with the branding left gloriously unchanged. We'll be tricked into it, and honestly, I'm at peace with that.",
      analysis:
        "Splits the problem into chemistry and meaning, judges one solved and one not, and predicts by mechanism — stealth reformulation — with a wry acceptance of being fooled.",
      expected: ["health", "food", "suspect", "taste"],
    },
  ],
  vocabulary: [
    {
      word: "takeaway",
      partOfSpeech: "noun",
      meaning: "A cooked meal bought to be eaten elsewhere.",
      example: "Friday is takeaway night; the kitchen rests and nobody apologises.",
    },
    {
      word: "junk food",
      partOfSpeech: "noun",
      meaning: "Food high in fat, sugar or salt and low in nourishment.",
      example: "The tuck shop sold fruit for a term, then the junk food crept back.",
    },
    {
      word: "to grab a bite",
      partOfSpeech: "phrase",
      meaning: "To eat something quickly and informally.",
      example: "Let's grab a bite between lectures rather than starve nobly.",
    },
    {
      word: "nutrition",
      partOfSpeech: "noun",
      meaning: "The nourishment a food provides to the body.",
      example: "The packaging shouts natural while the nutrition panel whispers.",
    },
    {
      word: "obesity",
      partOfSpeech: "noun",
      meaning: "The condition of being dangerously overweight.",
      example: "Obesity tracks postcode almost as closely as it tracks income.",
    },
    {
      word: "drive-through",
      partOfSpeech: "noun",
      meaning: "A service where customers buy without leaving their cars.",
      example: "The new drive-through has a queue no dining room could seat.",
    },
    {
      word: "to cook from scratch",
      partOfSpeech: "phrase",
      meaning: "To prepare a meal from raw ingredients.",
      example: "Cooking from scratch needs one ingredient no shop sells: an unhurried evening.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 14. Uniforms at work and school (intermediate, difficulty 3, interaction)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-uniforms-work",
  title: "Discussion set — uniforms at work and school",
  theme: "Uniforms at work and school",
  domain: "society",
  difficulty: 3,
  proficiency: "intermediate",
  skill: "interaction",
  progression:
    "From your own uniform days to whether dress codes have any future at all.",
  questions: [
    {
      question: "Have you ever worn a uniform for work or school?",
      level: "accessible",
      modelAnswer:
        "School for thirteen years, then a supermarket apron in the holidays, so I've worn my share. At the time I hated the school one — the tie, the itchy jumper — though I now suspect I'd have hated any clothes that had to last a week. The apron was strangely different; you put it on and became part of something. What I remember most is the relief of never thinking about what to wear. Deciding breakfast and outfit before seven in the morning is a tax nobody names.",
      analysis:
        "Two uniform experiences contrasted — hated school tie, oddly welcome apron — with a retrospective insight and one quotable closing line about the hidden tax of choice.",
      expected: ["uniform", "school", "wear", "cloth"],
    },
    {
      question: "Why are uniforms so common in schools but rare in offices?",
      level: "abstract",
      modelAnswer:
        "Because schools are managing children and offices are renting adults. A school uniform enforces equality on people who'd otherwise compete mercilessly over trainers, and it makes truanting teenagers visible at a hundred metres. Offices don't need either: adults are assumed past the trainer wars, and status is expressed through job titles instead. Where an office does want instant identification — airlines, hospitals, chains — the uniform reappears instantly. So it's less about formality than about control, identification, and whose conformity you're still allowed to compel.",
      analysis:
        "Explains the difference through function — equality and visibility for children, status by other means for adults — then predicts exactly where uniforms return; the closing line lands sharply.",
      expected: ["school", "uniform", "status", "equal"],
    },
    {
      question: "Does a uniform really reduce inequality between children, or just hide it?",
      level: "abstract",
      modelAnswer:
        "It hides the visible part, which is not nothing — the day a poor family can't afford the branded coat matters. But uniforms cost real money too, and schools quietly create hierarchies of their own: the right shoes, the newer blazer, the second-hand one. Meanwhile the real inequality walks in through the door regardless — the vocabulary, the tutor, the sleep — none of which a tie covers. I'd call uniforms a plaster on a wound worth a plaster, honestly. Just don't mistake the plaster for the cure.",
      analysis:
        "Grants the real benefit before dismantling the bigger claim, lists what a uniform cannot touch, and lands on a metaphor that keeps both halves of the truth.",
      expected: ["uniform", "school", "equal", "money"],
    },
    {
      question: "Will dress codes of any kind still exist in the workplace of the future?",
      level: "speculative",
      modelAnswer:
        "I suspect they shrink but never reach zero, because a dress code is really a signal about who the organisation serves. As software eats the formal sector, suits will keep retreating into courtrooms and funerals. But wherever the public trusts a stranger — a nurse, a pilot, a paramedic — the marker will stay, and probably should. My guess is the tie becomes the vinyl record of clothing: obsolete, then ironic, then collector's-item expensive. Human beings will always find something to standardise; it just won't be collars.",
      analysis:
        "Predicts contraction with a reason — trust signals survive where strangers serve the public — and extends the guess through a cultural lifecycle for the tie; speculation with wit.",
      expected: ["dress", "code", "guess", "will"],
    },
  ],
  vocabulary: [
    {
      word: "dress code",
      partOfSpeech: "noun",
      meaning: "Rules about what may be worn in a particular setting.",
      example: "The restaurant's dress code bans trainers and, implicitly, joy.",
    },
    {
      word: "to blend in",
      partOfSpeech: "phrasal verb",
      meaning: "To look the same as everyone around you.",
      example: "New starters dress to blend in until they learn the terrain.",
    },
    {
      word: "to stand out",
      partOfSpeech: "phrasal verb",
      meaning: "To be noticeably different from the group.",
      example: "In a uniform, the tallest recruit still stands out.",
    },
    {
      word: "smart casual",
      partOfSpeech: "adjective",
      meaning: "A style between formal and relaxed, deliberately vague.",
      example: "No two guests agreed what smart casual meant, and all were wrong.",
    },
    {
      word: "conformity",
      partOfSpeech: "noun",
      meaning: "Behaving according to a group's expectations or rules.",
      example: "Uniforms invite conformity and then punish enthusiasm for it.",
    },
    {
      word: "workwear",
      partOfSpeech: "noun",
      meaning: "Clothing designed for practical work rather than appearance.",
      example: "Proper workwear has pockets engineered like a small workshop.",
    },
    {
      word: "to look the part",
      partOfSpeech: "phrase",
      meaning: "To have exactly the appearance a role requires.",
      example: "She looked the part on day one and grew into the rest.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 15. Local shops versus chains (advanced, difficulty 5, development)
// ---------------------------------------------------------------------------

{
  kind: "part3",
  slug: "ielts-sb-p3-local-shops",
  title: "Discussion set — local shops and chains",
  theme: "Local shops versus chains",
  domain: "economics",
  difficulty: 5,
  proficiency: "advanced",
  skill: "development",
  progression:
    "From where you actually shop to whether a town centre can keep a pulse.",
  questions: [
    {
      question: "Do you shop mostly at local independents or at the big chains?",
      level: "accessible",
      modelAnswer:
        "An honest mix, weighted towards whatever's nearest when I'm hungry, which I feel slightly guilty about. The greengrocer gets my weekend custom because his tomatoes taste of tomatoes, but the supermarket takes the weekly bulk — it's open when I finish work and it never judges a trolley of instant noodles. My rule of thumb is local for pleasure, chain for logistics. I'd defend both, though only one of them knows my name.",
      analysis:
        "Confesses the compromise most people actually live by, gives each side its due with one warm specific, and closes on the human difference — honest, unpreachy, fully developed.",
      expected: ["local", "shop", "supermarket", "greengrocer"],
    },
    {
      question: "Why do small local shops keep closing even when customers say they want them?",
      level: "abstract",
      modelAnswer:
        "Because the saying and the spending are different currencies. Rent rises with the value chains create — the chain raises the street's footfall and the landlord raises the street's rent — so the shop that made an area charming is priced out by the charm it created. Then there's the arithmetic of a basket: sentiment doesn't survive a twenty per cent difference on a weekly shop. People mourn the bakery on Saturday and drive to the hypermarket on Sunday. It isn't hypocrisy; it's a budget with feelings attached.",
      analysis:
        "Explains decline through rent dynamics and household arithmetic rather than blaming shoppers, and the closing line forgives the contradiction with precision.",
      expected: ["rent", "chain", "price", "shop"],
    },
    {
      question: "Are chain stores a threat to local character or a sign a town is thriving?",
      level: "abstract",
      modelAnswer:
        "Neither, cleanly — they're a symptom of scale doing what scale does. A chain in a healthy high street is one voice in a chorus; the same chain in a struggling town is the last shop standing, and the difference tells you the disease was upstream — parking, rent, wages. Chains aren't invaders, they're opportunists following footfall that already exists. I'd judge a town not by how many chains it has but by whether anyone can still open a shop there without a franchise agreement and a millionaire behind them.",
      analysis:
        "Refuses the binary, reads chains as a diagnostic of deeper conditions, and replaces the usual verdict with a sharper test of economic openness.",
      expected: ["chain", "town", "rent", "shop"],
    },
    {
      question: "Will the high street as we know it exist at all in fifty years?",
      level: "speculative",
      modelAnswer:
        "Physically yes, functionally no — it'll exist the way a harbour does once the cargo leaves: smaller, prettier, aimed at living rather than logistics. Retail will keep migrating to warehouses and vans; what can't be delivered is presence — the haircut, the gossip, the pint after work. My prediction is high streets become housing, clinics and cafes, with a thin layer of shops performing local identity. Whether that's decline or renaissance depends entirely on who's allowed to live above them. That decides whether a town centre still has a pulse.",
      analysis:
        "Predicts transformation through the harbour analogy, separates what can be delivered from what can't, and ends by relocating the whole question to housing — the true pulse of a centre.",
      expected: ["street", "retail", "predict", "town"],
    },
  ],
  vocabulary: [
    {
      word: "high street",
      partOfSpeech: "noun",
      meaning: "The main shopping street of a British town.",
      example: "Our high street has three empty units and a plan for all of them.",
    },
    {
      word: "chain store",
      partOfSpeech: "noun",
      meaning: "One of many identical shops owned by a single company.",
      example: "The chain store opened opposite the bakery and outlasted it.",
    },
    {
      word: "independent shop",
      partOfSpeech: "noun",
      meaning: "A shop owned locally rather than by a chain.",
      example: "The independent bookshop hosts readings on Thursdays to stay alive.",
    },
    {
      word: "footfall",
      partOfSpeech: "noun",
      meaning: "The number of people walking through an area.",
      example: "Footfall doubled when the market moved to Saturdays.",
    },
    {
      word: "custom",
      partOfSpeech: "noun",
      meaning: "The regular business a customer gives to a shop.",
      example: "I moved my custom to the new butcher and felt like a traitor.",
    },
    {
      word: "to price out",
      partOfSpeech: "phrasal verb",
      meaning: "To make something too expensive for someone to continue.",
      example: "Rents priced the tailors out of the arcade within a year.",
    },
    {
      word: "to shop local",
      partOfSpeech: "phrase",
      meaning: "To deliberately buy from nearby independent traders.",
      example: "We try to shop local, and the receipt disagrees weekly.",
    },
  ],
  source: SPEAKING_BANK_SOURCE_NOTE,
},
];
