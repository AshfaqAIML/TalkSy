/**
 * TOEFL Speaking Practice Library — Take an Interview, batch 1 (PROMPT 50).
 * Twenty-five original interview questions across difficulty 1–3, in the
 * style of the current TOEFL iBT Take an Interview task (in force since
 * 21 January 2026): the learner hears an interview question, prepares with
 * the visible vocabulary suggestions, and answers aloud inside the guidance
 * window before the sample response and analysis are revealed.
 *
 * All questions, sample responses, vocabulary suggestions and analysis notes
 * are original TalkSy practice material.
 */

import { TOEFL_SPEAKING_BANK_SOURCE_NOTE, type ToeflInterviewItem } from "./types";

export const interview1Items: ToeflInterviewItem[] = [
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-01",
    title: "Choosing your major",
    question: "What are you studying, and why did you pick that major?",
    topic: "Study plans",
    difficulty: 1,
    prepSec: 15,
    answerSec: 30,
    sampleResponse:
      "I'm studying economics, and I picked it for two simple reasons. First, I've always been curious about how money moves through everyday life, like why prices go up or why some shops survive and others close. Second, my uncle runs a small business, and listening to his problems made the subject feel real to me. So far the courses are harder than I expected, but I still enjoy them.",
    vocabulary: [
      { word: "curious", gloss: "eager to learn or know something new" },
      { word: "everyday", gloss: "ordinary and part of normal life" },
      { word: "survive", gloss: "to keep going despite difficulties" },
      { word: "practical", gloss: "useful in real situations, not just theory" },
      { word: "enjoy", gloss: "to take pleasure in an activity" },
    ],
    analysisNotes:
      "A strong answer names the major in the first sentence, gives two reasons in a clear order, and anchors one reason in family experience; a short closing feeling fills the window without introducing new ideas.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-02",
    title: "Favourite campus spot",
    question: "Where do you like to spend time on campus between classes?",
    topic: "Campus life",
    difficulty: 1,
    prepSec: 15,
    answerSec: 30,
    sampleResponse:
      "Between classes I usually go to the little coffee corner on the second floor of the library. It's quiet but not silent, so I can review my notes or chat with a classmate without feeling guilty. The chairs are comfortable, and the window looks out over the main lawn. I've done some of my best last-minute revision there, honestly, and the staff already know my usual order.",
    vocabulary: [
      { word: "quiet", gloss: "making little or no noise" },
      { word: "review", gloss: "to study notes again before a test" },
      { word: "classmate", gloss: "someone who studies with you in class" },
      { word: "comfortable", gloss: "giving a relaxed and pleasant feeling" },
      { word: "lawn", gloss: "an area of grass kept short" },
      { word: "usual", gloss: "normal or expected for you" },
    ],
    analysisNotes:
      "Name the place immediately, then support it with two concrete details and one small personal history; resist listing several locations, because one well-described spot sounds far stronger than a quick tour.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-03",
    title: "Sunday with family",
    question: "How do you usually spend a Sunday with your family?",
    topic: "Family and friends",
    difficulty: 1,
    prepSec: 15,
    answerSec: 35,
    followUp: "Has your family's Sunday routine changed since you were a child?",
    sampleResponse:
      "On Sundays my family keeps things very simple. We have a late breakfast together, usually eggs and fresh bread, and nobody checks their phone at the table. After that my father and I water the plants on the balcony while my mother calls my grandmother. In the afternoon we might watch a film or just nap. It sounds boring, but honestly those slow hours are my favourite part of the week.",
    vocabulary: [
      { word: "routine", gloss: "things you do regularly the same way" },
      { word: "late", gloss: "happening after the usual time" },
      { word: "balcony", gloss: "a small platform outside a window" },
      { word: "nap", gloss: "a short sleep during the day" },
      { word: "favourite", gloss: "liked more than all the others" },
    ],
    analysisNotes:
      "A routine question rewards time markers — morning, after that, in the afternoon — kept in strict order; one gentle concession about the day sounding boring adds personality without breaking the steady pace.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-04",
    title: "A hobby you love",
    question: "Is there a hobby you could never give up?",
    topic: "Hobbies",
    difficulty: 1,
    prepSec: 15,
    answerSec: 30,
    sampleResponse:
      "Yes, for me it's swimming. I go to the pool three times a week, usually in the early morning before my lectures. Swimming clears my head like nothing else — when I'm in the water, I stop thinking about deadlines completely. It also keeps me fit without hurting my knees, which running sometimes does. My grandfather taught me when I was six, so it carries nice memories too.",
    vocabulary: [
      { word: "pool", gloss: "a place built for swimming" },
      { word: "clears my head", gloss: "removes stress so you think calmly" },
      { word: "deadlines", gloss: "dates by which work must be finished" },
      { word: "fit", gloss: "healthy and in good physical condition" },
      { word: "memories", gloss: "things you remember from the past" },
    ],
    analysisNotes:
      "Answer the yes-or-no question instantly, name the hobby, then give one benefit, one physical detail and one memory; letting the final sentence trail off naturally sounds better than a formal summary.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-05",
    title: "Cooking at home",
    question: "Do you prefer cooking at home or eating out?",
    topic: "Food and cooking",
    difficulty: 1,
    prepSec: 15,
    answerSec: 35,
    sampleResponse:
      "I definitely prefer cooking at home, even though I eat out maybe once a week with friends. Cooking is cheaper, and I can control how much salt and oil goes into the food. There's also something relaxing about chopping vegetables after a long day. My signature dish is a simple tomato soup with rice — it takes twenty minutes and always makes the kitchen smell great.",
    vocabulary: [
      { word: "prefer", gloss: "to like one option more than another" },
      { word: "control", gloss: "to decide how much of something is used" },
      { word: "chopping", gloss: "cutting food into small pieces" },
      { word: "relaxing", gloss: "making you feel calm and less tense" },
      { word: "signature dish", gloss: "the meal someone cooks best and often" },
    ],
    analysisNotes:
      "State the preference in the opening words, briefly concede the opposite, then offer two reasons and one specific dish; the concrete example of the tomato soup gives the answer a memorable ending.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-06",
    title: "Your phone during the day",
    question: "How much do you use your phone on a normal day?",
    topic: "Technology",
    difficulty: 1,
    prepSec: 15,
    answerSec: 30,
    sampleResponse:
      "Probably more than I should, honestly. On a normal day I'd say around four hours — mostly messaging my classmates, checking the bus schedule, and listening to music on my way to campus. I try to keep the phone away while I'm studying, because one notification can destroy my concentration for ten minutes. So I use it a lot, but I'm slowly building better habits, like leaving it in my bag during lectures.",
    vocabulary: [
      { word: "notification", gloss: "an alert message from an app" },
      { word: "concentration", gloss: "the ability to focus your attention fully" },
      { word: "schedule", gloss: "a plan of times for events" },
      { word: "destroy", gloss: "to damage something completely" },
      { word: "habit", gloss: "something you do regularly without thinking" },
    ],
    analysisNotes:
      "An honest self-assessment with an approximate figure sounds natural here; follow the number with one concrete situation, one rule you follow, and a small sign of progress to finish positively.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-07",
    title: "Old places or new",
    question: "Do you prefer travelling to new places or returning to places you know well?",
    topic: "Travel",
    difficulty: 1,
    prepSec: 15,
    answerSec: 35,
    followUp: "What is one place you keep going back to?",
    sampleResponse:
      "I like both, but if I have to choose, I'd pick returning to places I know. New cities are exciting, yet they can also be tiring — you spend the whole day deciding what to see next. When I go back to the same small seaside town every summer, I already know the best bakery, and the owner remembers me. That feeling of being recognised somewhere far from home is something new places rarely give me.",
    vocabulary: [
      { word: "exciting", gloss: "making you feel happy and eager" },
      { word: "tiring", gloss: "making you feel tired" },
      { word: "bakery", gloss: "a shop that sells bread and cakes" },
      { word: "recognised", gloss: "remembered or identified by someone" },
      { word: "rarely", gloss: "not happening very often" },
    ],
    analysisNotes:
      "Acknowledge both options before choosing one; the contrast between the excitement of new places and the comfort of recognition gives the answer its shape, and the bakery detail makes the choice feel lived-in.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-08",
    title: "Your morning routine",
    question: "What do you usually do first thing in the morning?",
    topic: "Daily routines",
    difficulty: 1,
    prepSec: 15,
    answerSec: 30,
    sampleResponse:
      "The very first thing I do is open the curtains and drink a big glass of water — it wakes me up faster than coffee ever did. Then I stretch for about five minutes while the kettle boils. I never check my phone until I'm dressed, because otherwise I end up scrolling in bed and losing twenty minutes. After that it's breakfast, usually yoghurt and fruit, and then I head straight to my first class.",
    vocabulary: [
      { word: "curtains", gloss: "cloth covers hanging over windows" },
      { word: "stretch", gloss: "to extend your body and muscles" },
      { word: "kettle", gloss: "a device that boils water" },
      { word: "scrolling", gloss: "moving quickly through phone content" },
      { word: "dressed", gloss: "wearing your clothes for the day" },
    ],
    analysisNotes:
      "Chronological order with simple markers — first, then, after that — holds a routine description together; explaining one small rule and its reason prevents the answer from becoming a bare list of actions.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-09",
    title: "The subject that shaped you",
    question: "Which school subject has influenced you the most so far?",
    topic: "Academic interests",
    difficulty: 2,
    prepSec: 15,
    answerSec: 40,
    sampleResponse:
      "History has influenced me the most, definitely. Before I took it seriously, I thought it was just memorising dates, but my teacher showed us it's really about asking why people made certain choices. Once we studied old newspaper articles from our own city, and suddenly the streets I walk every day had stories behind them. That changed how I see everything — even the news. Now, whenever something big happens, I automatically ask what led up to it, and I think that habit came straight from those history classes.",
    vocabulary: [
      { word: "influenced", gloss: "changed the way someone thinks" },
      { word: "memorising", gloss: "learning facts exactly by heart" },
      { word: "sources", gloss: "original materials that information comes from" },
      { word: "automatically", gloss: "done without thinking about it" },
      { word: "led up to", gloss: "happened before and caused something" },
    ],
    analysisNotes:
      "Name the subject, admit an early misconception, then show the correction through one classroom memory; extending the lesson to the present day gives the short answer a satisfying arc.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-10",
    title: "Your job in ten years",
    question: "What kind of job would you like to have in ten years?",
    topic: "Work and career",
    difficulty: 2,
    prepSec: 15,
    answerSec: 45,
    followUp: "Would you accept a higher salary in a job you found less meaningful?",
    sampleResponse:
      "In ten years I'd like to be a data analyst at an environmental organisation, ideally one that works on clean water projects. I know that sounds very specific, but I've thought about it a lot. The work combines two things I'm good at — working with numbers and caring about practical outcomes. I picture myself part of a small team, presenting findings to people who actually make decisions. It probably won't be glamorous, and the pay in that sector isn't amazing, but I'd rather do something that feels useful than something that only looks impressive on paper.",
    vocabulary: [
      { word: "analyst", gloss: "a person who studies data for a job" },
      { word: "sector", gloss: "one part of the economy or industry" },
      { word: "findings", gloss: "the results discovered from research" },
      { word: "glamorous", gloss: "exciting and attractive in a showy way" },
      { word: "impressive", gloss: "making people admire something" },
    ],
    analysisNotes:
      "A specific role is more impressive than a vague dream; connect it to personal strengths, describe an ordinary working day briefly, and close by acknowledging a trade-off, which signals mature thinking.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-11",
    title: "Goals for this term",
    question: "What do you want to achieve before this term ends?",
    topic: "Study plans",
    difficulty: 2,
    prepSec: 15,
    answerSec: 40,
    sampleResponse:
      "Before this term ends, I have three goals. The first is academic: I want to raise my statistics grade by one full letter, because that course unlocks everything else in my programme. The second is personal — I want to present at the student research evening, even though public speaking scares me. And the third is smaller but important: I want to go to bed before midnight on weekdays. If I manage even two of the three, I'll consider the term a success.",
    vocabulary: [
      { word: "achieve", gloss: "to succeed in reaching a goal" },
      { word: "unlocks", gloss: "makes other things possible afterwards" },
      { word: "present", gloss: "to speak formally in front of people" },
      { word: "scares", gloss: "makes you feel afraid" },
      { word: "consider", gloss: "to regard or judge something as" },
    ],
    analysisNotes:
      "Three numbered goals create built-in structure that survives nerves; each goal needs only one reason, and the final conditional sentence — two out of three — shows realistic self-assessment in a few words.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-12",
    title: "How you follow the news",
    question: "How do you usually keep up with the news?",
    topic: "Media",
    difficulty: 2,
    prepSec: 15,
    answerSec: 40,
    sampleResponse:
      "Mainly through my phone, I have to admit. In the morning I skim two news apps while eating breakfast, and during the day my friends send me links in our group chat. I've stopped watching television news completely, because it repeats the same three stories all evening. What I miss, though, is the deeper reporting — apps give me headlines but rarely explain why anything happened. So lately I've started reading one long article every Sunday, which feels like a much healthier balance.",
    vocabulary: [
      { word: "skim", gloss: "to read quickly without much detail" },
      { word: "headlines", gloss: "the titles of news stories" },
      { word: "reporting", gloss: "journalism that explains events in depth" },
      { word: "balance", gloss: "a healthy mix of different things" },
      { word: "group chat", gloss: "a messaging conversation with several people" },
    ],
    analysisNotes:
      "An honest admission about phone habits engages the listener; contrast an old habit with a new one, then finish with a small recent improvement so the answer ends with movement rather than guilt.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-13",
    title: "Travelling with company",
    question: "Would you rather travel alone or with a companion?",
    topic: "Travel",
    difficulty: 2,
    prepSec: 15,
    answerSec: 45,
    followUp: "Have you ever taken a trip completely on your own?",
    sampleResponse:
      "I'd rather travel with one good companion, ideally my best friend from school. Travelling alone has its fans, and I understand the freedom they talk about — you can change plans whenever you want. But for me, a shared experience is simply worth more. When we got caught in a thunderstorm in the mountains last year, it became the story we still tell at every dinner. Alone, that would have been miserable; together, it was genuinely fun. Also, having someone to watch the bags at the station is surprisingly practical.",
    vocabulary: [
      { word: "companion", gloss: "a person who travels with you" },
      { word: "freedom", gloss: "the ability to act as you wish" },
      { word: "shared", gloss: "experienced together with another person" },
      { word: "miserable", gloss: "extremely unhappy or uncomfortable" },
      { word: "surprisingly", gloss: "in a way you did not expect" },
    ],
    analysisNotes:
      "A preference question at this level needs a fair hearing for the rejected option; the thunderstorm story carries the emotional weight, and a light practical reason at the end balances it.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-14",
    title: "A friend's best quality",
    question: "What quality do you value most in a close friend?",
    topic: "Family and friends",
    difficulty: 2,
    prepSec: 15,
    answerSec: 40,
    sampleResponse:
      "The quality I value most is honesty, specifically the kind that comes with kindness. Anyone can be blunt; a real friend tells you difficult things — that your plan is unrealistic, or that you were rude yesterday — without making you feel small. My friend Maria does this perfectly. Last year she told me my essay introduction was confusing, and she was completely right. A friendship without that honesty stays shallow, because you can never fully trust the compliments.",
    vocabulary: [
      { word: "honesty", gloss: "the quality of always telling the truth" },
      { word: "blunt", gloss: "speaking directly without softening words" },
      { word: "shallow", gloss: "lacking depth or real connection" },
      { word: "trust", gloss: "to believe someone is reliable" },
      { word: "compliments", gloss: "polite words praising someone" },
    ],
    analysisNotes:
      "Go beyond naming the quality — define it precisely and separate it from a cheaper version like bluntness; the essay anecdote proves the definition, and the closing line explains why the distinction matters.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-15",
    title: "A hobby to begin",
    question: "What is a skill or hobby you would like to start learning?",
    topic: "Hobbies",
    difficulty: 2,
    prepSec: 15,
    answerSec: 40,
    sampleResponse:
      "I really want to learn pottery, and I've already found a studio near my flat that offers beginner courses. There's something appealing about making a physical object with your hands after spending all day on screens. My grandmother had a pottery wheel in her garage, and I remember being fascinated by it as a child. I'm not aiming to become an artist — I just want the experience of sitting at the wheel and making one honest, slightly crooked bowl.",
    vocabulary: [
      { word: "pottery", gloss: "making objects from shaped clay" },
      { word: "studio", gloss: "a workspace for making art" },
      { word: "wheel", gloss: "the spinning machine used by potters" },
      { word: "crooked", gloss: "not straight or evenly shaped" },
      { word: "fascinated", gloss: "very interested and curious" },
    ],
    analysisNotes:
      "Present-tense desire plus a childhood root makes the choice feel genuine; keeping the goal modest — one crooked bowl, not an exhibition — keeps the language simple and the delivery relaxed.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-16",
    title: "Health in busy weeks",
    question: "What do you do to stay healthy during a busy semester?",
    topic: "Health",
    difficulty: 2,
    prepSec: 15,
    answerSec: 45,
    followUp: "What is one unhealthy habit you would like to break?",
    sampleResponse:
      "During a busy semester, honestly, staying healthy comes down to sleep and walking for me. I protect my sleep quite strictly — nothing after midnight on weeknights, even during exam weeks, because I learned the hard way that an all-nighter costs me two useless days afterwards. And I walk everywhere instead of taking the bus when I have even twenty spare minutes. I'm not very good at cooking balanced meals when I'm stressed, so I compensate with fruit from the campus market. It's an imperfect system, but it keeps me standing.",
    vocabulary: [
      { word: "semester", gloss: "half of the school or university year" },
      { word: "all-nighter", gloss: "staying awake all night to work" },
      { word: "compensate", gloss: "to make up for something missing" },
      { word: "balanced", gloss: "containing healthy proportions of things" },
      { word: "spare", gloss: "free and available to use" },
    ],
    analysisNotes:
      "Realism beats idealism in health answers; state one strict rule with the lesson behind it, admit a weakness, then show how you compensate — imperfection described confidently sounds more credible than perfection claimed.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-17",
    title: "Joining a society",
    question: "Why did you decide to join a club or society at university?",
    topic: "Campus life",
    difficulty: 2,
    prepSec: 15,
    answerSec: 40,
    sampleResponse:
      "I joined the hiking society mainly because I knew nobody when I arrived, and standing in a room full of strangers at the freshers' fair felt easier than it sounds. The club gave me an instant reason to leave my room at weekends. What surprised me is how much it changed my studies too — after a long walk, my brain feels reset, and readings that seemed impossible suddenly make sense. So it started as a social decision and quietly became an academic one.",
    vocabulary: [
      { word: "society", gloss: "a club for people with shared interests" },
      { word: "freshers' fair", gloss: "an event where new students join clubs" },
      { word: "instant", gloss: "happening immediately without delay" },
      { word: "reset", gloss: "returned to a fresh starting state" },
      { word: "quietly", gloss: "gradually and without attracting attention" },
    ],
    analysisNotes:
      "Revealing the true social motive first, then surprising yourself with an academic benefit, gives the answer an unexpected shape; the cause-and-effect chain about walking and reading is easy to follow aloud.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-18",
    title: "The best of your city",
    question: "What is the best thing about the city where you live?",
    topic: "City life",
    difficulty: 2,
    prepSec: 15,
    answerSec: 45,
    followUp: "If you could change one thing about your city, what would it be?",
    sampleResponse:
      "The best thing about my city is how quickly you can escape it. I live right in the centre, where it's noisy and crowded, but there's a river path that starts fifteen minutes from my door, and within half an hour of cycling you're between fields. Very few cities offer both a serious job market and that kind of easy exit into nature. Of course the traffic is terrible and the rent is painful, but on a Sunday morning by the river, I genuinely forget both of those problems.",
    vocabulary: [
      { word: "escape", gloss: "to get away from a place" },
      { word: "crowded", gloss: "full of too many people" },
      { word: "rent", gloss: "money paid to live somewhere" },
      { word: "job market", gloss: "the availability of jobs in an area" },
      { word: "genuinely", gloss: "really and sincerely" },
    ],
    analysisNotes:
      "The paradox — the best thing is leaving — makes a strong hook; give the route precisely, concede two real problems, then return to the positive image so the answer ends where it began.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-19",
    title: "AI tools for assignments",
    question: "Should universities allow students to use artificial intelligence tools for their assignments?",
    topic: "Technology",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    sampleResponse:
      "Yes, but only with clear rules, and I'd like to explain what I mean. Banning these tools completely seems unrealistic — students will use them anyway, and universities would just push the usage underground. The smarter approach is to teach us how to use them honestly: for checking grammar, for brainstorming questions, for explaining a confusing concept at midnight when no tutor is awake. What should stay forbidden is submitting generated text as if it were our own thinking. In one of my seminars we now have to declare which tool we used and how, and that transparency, in my opinion, is the real skill worth teaching.",
    vocabulary: [
      { word: "unrealistic", gloss: "not practical or achievable in reality" },
      { word: "underground", gloss: "done secretly, away from official view" },
      { word: "brainstorming", gloss: "producing many rough ideas quickly" },
      { word: "submitting", gloss: "handing in work for assessment" },
      { word: "transparency", gloss: "being open about what you do" },
    ],
    analysisNotes:
      "A qualified yes needs its limits drawn clearly; separate acceptable uses from unacceptable ones, ground the policy in a real seminar practice, and let the transparency principle carry the closing argument.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-20",
    title: "The hardest part of English",
    question: "What has been the most difficult part of learning English for you?",
    topic: "Learning languages",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    followUp: "Which skill would you work on next: listening or speaking?",
    sampleResponse:
      "Without a doubt, it's the difference between classroom English and real spoken English. In class I learned beautiful, complete sentences, and I tested well. Then I watched my first film without subtitles and understood maybe thirty per cent. Nobody had warned me that native speakers swallow half their words. What actually helped was embarrassing myself repeatedly — joining voice chats where I was the only learner, asking people to slow down, and writing down the phrases they used instead of my textbook ones. My grammar is still far from perfect, but my ears have improved enormously, and that feels like the harder battle to win.",
    vocabulary: [
      { word: "subtitles", gloss: "text on screen showing the dialogue" },
      { word: "swallow", gloss: "to say words quickly and unclearly" },
      { word: "embarrassing", gloss: "making you feel awkward or ashamed" },
      { word: "repeatedly", gloss: "again and again many times" },
      { word: "enormously", gloss: "by a very large amount" },
    ],
    analysisNotes:
      "A specific frustration beats a general complaint; the film moment marks the turning point, the voice-chat method shows what actually worked, and the closing self-assessment rounds off the story honestly.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-21",
    title: "Changing one habit",
    question: "Have you ever successfully changed a daily habit?",
    topic: "Daily routines",
    difficulty: 3,
    prepSec: 20,
    answerSec: 45,
    sampleResponse:
      "Yes — two years ago I stopped drinking coffee after four in the afternoon, and it genuinely worked. For years I had told myself I was one of those people coffee didn't affect, while lying awake at two in the morning. The change was unglamorous: I switched to herbal tea, survived two tired weeks, and then started falling asleep within minutes. The interesting part is what followed — better sleep made my mornings calmer, and calmer mornings made me stop rushing breakfast. One small habit turned out to be connected to three others, which honestly surprised me.",
    vocabulary: [
      { word: "unglamorous", gloss: "plain and without any excitement" },
      { word: "herbal", gloss: "made from plants, without caffeine" },
      { word: "awake", gloss: "not able to fall asleep" },
      { word: "calmer", gloss: "more peaceful and free from stress" },
      { word: "connected", gloss: "linked so one affects another" },
    ],
    analysisNotes:
      "Narrate the change in past tense with a clear before and after; the discovery that one habit was connected to three others lifts the story into a small insight worth the extra seconds.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-22",
    title: "A dish worth trying",
    question: "Is there a dish from your hometown that everyone should try at least once?",
    topic: "Food and cooking",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    sampleResponse:
      "Absolutely — there's a noodle soup from my region that I think changes how people see simple food. It's a clear broth, handmade noodles, a little chilli oil, and nothing else — no expensive ingredients anywhere. The trick is the timing: the noodles go into the bowl within seconds of being pulled, so they arrive still slightly springy. When my roommate from another province tried it, she went quiet for a moment and then asked if we could go again the next day. That's the test of a good dish, I think — not complexity, but whether someone immediately wants a second bowl.",
    vocabulary: [
      { word: "broth", gloss: "a thin soup made from stock" },
      { word: "handmade", gloss: "made by hand, not by machines" },
      { word: "ingredients", gloss: "the foods used in a recipe" },
      { word: "springy", gloss: "bouncing back when you bite it" },
      { word: "complexity", gloss: "how complicated something is" },
    ],
    analysisNotes:
      "One dish, described sensorially and briefly, beats a catalogue; the roommate's reaction serves as evidence, and the closing principle about complexity versus a second bowl gives the recommendation its force.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-23",
    title: "One course for everyone",
    question: "If you could add one new required course for every student, what would it be?",
    topic: "Academic interests",
    difficulty: 3,
    prepSec: 20,
    answerSec: 55,
    followUp: "Would you make this new course pass or fail?",
    sampleResponse:
      "I would add a practical course in statistics for everyday life, and I admit that as someone who found maths painful at school. Ordinary life is now full of numbers thrown at us — medical risks, election polls, advertising claims — and most people, including me until recently, have no toolkit for questioning them. The course wouldn't aim to create mathematicians. It would teach things like how a small sample distorts a survey, or how an average can hide a huge difference. I remember a news story claiming a food 'doubled' a risk, when the actual change was from one case in a million to two. Understanding that one headline would have saved my grandmother real anxiety.",
    vocabulary: [
      { word: "toolkit", gloss: "a set of methods ready to use" },
      { word: "sample", gloss: "the small group a survey tests" },
      { word: "distorts", gloss: "changes the true picture of something" },
      { word: "average", gloss: "one number summarising many values" },
      { word: "anxiety", gloss: "a feeling of worry and fear" },
    ],
    analysisNotes:
      "A proposal question rewards structure: claim, rationale, curriculum example, story; admitting your own dislike of maths builds credibility, and the headline anecdote shows the stakes better than any abstract defence.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-24",
    title: "Why people volunteer",
    question: "Why do you think people choose to volunteer their time?",
    topic: "Volunteering",
    difficulty: 3,
    prepSec: 20,
    answerSec: 45,
    followUp: "Should universities give course credit for volunteering?",
    sampleResponse:
      "I think people volunteer for a mix of selfish and generous reasons, and both are perfectly fine. Obviously there's the generous side: seeing a problem up close and wanting to fix it. When I helped at a shelter last winter, I mostly wanted to feel useful on a Saturday, which is the selfish part — and that's exactly why I kept going back. Volunteering gives people something their jobs rarely offer: immediate, visible results. You sort the donations, and the shelf is full; you teach a child fractions, and she solves the problem in front of you. Honestly, the mix of motives is what keeps charities alive.",
    vocabulary: [
      { word: "shelter", gloss: "a place giving protection to people" },
      { word: "donations", gloss: "goods given to help others" },
      { word: "motives", gloss: "the reasons behind someone's actions" },
      { word: "fractions", gloss: "mathematical parts of a whole" },
      { word: "immediate", gloss: "happening right away, without delay" },
    ],
    analysisNotes:
      "The honest thesis — motives are mixed — prevents a sentimental answer; use your own mixed motive as evidence, then generalise carefully about visible results, which keeps the tone warm but analytical.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-25",
    title: "Reducing plastic waste",
    question: "Do you think single-use plastics can realistically be reduced in daily life?",
    topic: "Environment",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    sampleResponse:
      "Realistically, yes — but slowly, and probably through habit design rather than good intentions. I've watched it happen in my own kitchen. For years I owned reusable bags and kept forgetting them, until I started keeping one folded inside my jacket. Once the bag was attached to something I never leave home without, the problem simply disappeared. The same logic is starting to appear everywhere: shops charging small amounts for cups, water fountains in stations, refill stations in supermarkets. None of these relies on people becoming better; they all rely on making the convenient choice the responsible one. Good intentions fade by February, but a well-placed bag in a jacket pocket works all year.",
    vocabulary: [
      { word: "reusable", gloss: "designed to be used many times" },
      { word: "folded", gloss: "bent into a smaller shape" },
      { word: "fountains", gloss: "public places to drink or refill water" },
      { word: "refill", gloss: "to fill a container again" },
      { word: "intentions", gloss: "plans or aims behind actions" },
    ],
    analysisNotes:
      "A yes-with-mechanism answer outperforms simple optimism; the folded-bag detail shows how design beats intention, and generalising from your kitchen to shops and fountains builds the argument outward within the time.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
];
