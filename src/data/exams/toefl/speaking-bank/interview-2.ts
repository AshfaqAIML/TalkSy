/**
 * TOEFL Speaking Practice Library — Take an Interview, batch 2 (PROMPT 50).
 * Twenty-five original interview questions at difficulty 3–5, in the style
 * of the current TOEFL iBT Take an Interview task (in force since 21 January
 * 2026): the learner hears an interview question, prepares with the visible
 * vocabulary suggestions, and answers aloud inside the guidance window
 * before the sample response and analysis are revealed. Higher tiers ask
 * for qualified positions, concessions and layered development.
 *
 * All questions, sample responses, vocabulary suggestions and analysis notes
 * are original TalkSy practice material.
 */

import { TOEFL_SPEAKING_BANK_SOURCE_NOTE, type ToeflInterviewItem } from "./types";

export const interview2Items: ToeflInterviewItem[] = [
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-26",
    title: "Doubting your major",
    question: "Have you ever reconsidered the subject you are studying?",
    topic: "Study plans",
    difficulty: 3,
    prepSec: 20,
    answerSec: 45,
    sampleResponse:
      "Yes, more than once, and I almost switched to architecture in my second year. I kept imagining that architecture students spent their days drawing beautiful buildings, while I was stuck with problem sets. Then I spoke to an actual architecture student, and she described spending forty hours a week on models that her professor would criticise for a single misplaced line. That conversation didn't cure my doubts completely, but it cured my illusions. I realised I was romanticising a subject I knew nothing about. So I stayed, added a design elective for the creative side I was missing, and the restlessness mostly faded.",
    vocabulary: [
      { word: "reconsidered", gloss: "thought about again with doubt" },
      { word: "romanticising", gloss: "imagining something better than reality" },
      { word: "illusions", gloss: "false beliefs about how things are" },
      { word: "elective", gloss: "an optional course you choose" },
      { word: "restlessness", gloss: "a feeling of wanting change" },
    ],
    analysisNotes:
      "Doubt described honestly, then tested against reality, makes this more than a complaint; the architecture student's weekly reality check cures the romanticism, and the elective compromise shows adaptation rather than surrender.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-27",
    title: "Home or office work",
    question: "Would you prefer a job that lets you work from home?",
    topic: "Work and career",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    sampleResponse:
      "I'd prefer a hybrid arrangement — two or three days at home, the rest in an office. Fully remote work sounds attractive until you try it. During my internship I spent one month working remotely, and by week three I was talking to the delivery person longer than to my colleagues. The office gives you the informal conversations where you actually learn how a company thinks, and the commute, annoying as it is, marks a clear border between work and rest. At home, though, I can concentrate deeply on one task without interruptions. So the two settings solve different problems, and that's precisely why I'd want both.",
    vocabulary: [
      { word: "hybrid", gloss: "mixing home and office work" },
      { word: "remote", gloss: "done from far away, not on site" },
      { word: "internship", gloss: "short work experience at a company" },
      { word: "commute", gloss: "travel between home and work" },
      { word: "interruptions", gloss: "things that break your concentration" },
    ],
    analysisNotes:
      "The hybrid position needs its reasoning shown, not just stated; the remote internship story supplies the negative evidence, and naming what each setting solves demonstrates balanced, structured thinking under the clock.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-28",
    title: "Paper versus screen",
    question: "Do you prefer reading printed books or digital ones?",
    topic: "Books and reading",
    difficulty: 3,
    prepSec: 20,
    answerSec: 45,
    sampleResponse:
      "Printed books, without much hesitation, even though my phone is full of e-books I never finish. With a paper book, I remember where things happened — the top of a left-hand page, a chapter that started after a coffee stain. Screens give me none of those physical anchors, so everything I read floats away by morning. There's also the phone problem: the moment reading gets difficult, a notification is one centimetre away. That said, screens win for travelling. Carrying one device instead of five heavy novels through an airport is genuinely sensible, so I compromise — paper at home, digital on the road.",
    vocabulary: [
      { word: "hesitation", gloss: "pausing before deciding or acting" },
      { word: "physical", gloss: "relating to real objects you touch" },
      { word: "anchors", gloss: "things that hold memory in place" },
      { word: "compromise", gloss: "an agreement where each side gives up something" },
      { word: "sensible", gloss: "showing good practical judgement" },
    ],
    analysisNotes:
      "A clear preference with a psychological reason — physical memory anchors — sounds more thoughtful than taste alone; conceding the travel exception and ending with a personal rule prevents overclaiming.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-29",
    title: "Advice that stayed",
    question: "What is the most useful advice a family member has given you?",
    topic: "Family and friends",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    followUp: "Do you find it easy to give advice to other people?",
    sampleResponse:
      "My grandfather told me, when I was anxious about my exam results, that 'worry is paying interest on a debt you may never owe'. I was fifteen and thought it was just a clever sentence. It took me years to notice how much of my stress came from events that never actually happened — the interview I might fail, the friendship that might end. Now, when I catch myself spiralling, I ask one question: is this a real problem today, or just a possible one? Most of the time it's only possible, and it loses half its weight the moment I say that out loud. That single sentence has saved me more sleep than any technique I was ever taught.",
    vocabulary: [
      { word: "anxious", gloss: "feeling worried about future events" },
      { word: "debt", gloss: "money that must be repaid" },
      { word: "spiralling", gloss: "getting worse in an uncontrolled way" },
      { word: "weight", gloss: "the heavy seriousness of a problem" },
      { word: "owe", gloss: "to need to pay or give back" },
    ],
    analysisNotes:
      "Anchor the answer in the quoted sentence, then narrate the delayed understanding; showing the question you now ask yourself turns inherited advice into a current practice, which fills the time naturally.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-30",
    title: "Supporting student minds",
    question: "Should universities do more to support students' mental health?",
    topic: "Health",
    difficulty: 3,
    prepSec: 20,
    answerSec: 50,
    followUp: "Would you use a support service like that yourself?",
    sampleResponse:
      "Yes — and I speak as someone who was sceptical at first. I used to think university counselling services were for serious crises only, and that the rest of us should just manage. Then a friend of mine waited three weeks for an appointment during a genuinely bad month, because the counselling centre had two psychologists for twenty thousand students. That's not a support system; that's a poster on a wall. What would help is ordinary, low-threshold help — evening walking groups, drop-in hours in the library, professors trained to notice when someone disappears. Not everything needs to be therapy. Sometimes a tutor who asks 'you've missed two weeks — are you okay?' is the intervention.",
    vocabulary: [
      { word: "sceptical", gloss: "doubtful and not easily convinced" },
      { word: "counselling", gloss: "professional help for emotional problems" },
      { word: "crises", gloss: "moments of serious danger or distress" },
      { word: "drop-in", gloss: "available without an appointment" },
      { word: "intervention", gloss: "an action taken to improve a situation" },
    ],
    analysisNotes:
      "The sceptic-converted structure gives the stance credibility; the statistic-style detail about two psychologists supplies evidence, and the concrete low-threshold proposals show you are arguing for something, not merely against cuts.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-31",
    title: "Your five-year vision",
    question: "Where do you hope to see yourself five years from now?",
    topic: "Personal goals",
    difficulty: 4,
    prepSec: 25,
    answerSec: 55,
    followUp: "What would you do if that plan failed?",
    sampleResponse:
      "Five years from now I hope to be finishing a master's degree in public health and starting work with a city health department, ideally here rather than abroad. That plan surprises people who knew me at eighteen, when I swore I'd go into software because the salaries looked irresistible. What changed me was a summer volunteering during a heatwave, when our centre handed out water and information to elderly residents who had no idea the emergency existed. I remember realising that the code I wanted to write would be replaceable, but that summer was not. I'm not pretending the new path is easy — public health pays modestly and the courses are demanding — but at least now my ambition and my attention point in the same direction, which they never did before.",
    vocabulary: [
      { word: "heatwave", gloss: "a period of extremely hot weather" },
      { word: "residents", gloss: "people living in a particular place" },
      { word: "replaceable", gloss: "able to be swapped for another" },
      { word: "modestly", gloss: "to a small or humble degree" },
      { word: "irresistible", gloss: "too attractive to refuse" },
    ],
    analysisNotes:
      "A five-year vision lands better with a conversion story attached; the heatwave memory explains the pivot, the honest concession about pay and difficulty pre-empts doubt, and the closing reflection ties ambition to attention.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-32",
    title: "Travel and stereotypes",
    question: "How has travelling changed the way you see other cultures?",
    topic: "Travel",
    difficulty: 4,
    prepSec: 25,
    answerSec: 60,
    sampleResponse:
      "Travelling has mainly taught me how much of what I 'knew' about other places was second-hand summary rather than knowledge. Before I visited a neighbouring country, I had a full mental image of it — reserved people, cold food, unwelcoming cities — assembled entirely from films and one relative's complaints. Within a day of arriving, a stranger had spent twenty minutes walking us to a museum entrance she could easily have pointed to. The image collapsed completely. Now I try to hold my opinions about places lightly until I've actually been there, and I've started applying the same suspicion to my opinions about people, which is probably the more valuable half of the lesson. Stereotypes are efficient, that's their seduction — they save you the trouble of looking.",
    vocabulary: [
      { word: "second-hand", gloss: "learned from others, not experienced directly" },
      { word: "reserved", gloss: "quiet and not showing feelings" },
      { word: "unwelcoming", gloss: "making visitors feel unwanted" },
      { word: "collapsed", gloss: "fell apart completely" },
      { word: "seduction", gloss: "the attractive power of something" },
    ],
    analysisNotes:
      "Lead with the thesis about second-hand knowledge, then let the anecdote collapse the stereotype in real time; extending the lesson from places to people deepens it, and the aphoristic closer needs a pause before it.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-33",
    title: "Handling roommate conflict",
    question: "How should students deal with conflicts between roommates?",
    topic: "Campus life",
    difficulty: 4,
    prepSec: 25,
    answerSec: 50,
    followUp: "Would you rather choose your own roommate or be matched with one?",
    sampleResponse:
      "The most useful thing I learned is to complain about behaviour, never about character. My first year, my roommate left dishes for days, and I spent two miserable weeks telling everyone except her. When I finally spoke up, I opened with 'the sink stresses me out' instead of 'you're a messy person', and the conversation lasted ten calm minutes. She hadn't noticed the problem; I had assumed she didn't care. Most roommate conflicts, I now think, are scheduling conflicts wearing a costume — two reasonable habits, like early sleep and late study, colliding in one small room. Universities could help enormously just by teaching first-years to have that one uncomfortable conversation early, before resentment does the talking.",
    vocabulary: [
      { word: "behaviour", gloss: "the way a person acts" },
      { word: "character", gloss: "the kind of person someone is" },
      { word: "costume", gloss: "clothes worn to look like something else" },
      { word: "colliding", gloss: "crashing into each other" },
      { word: "resentment", gloss: "bitter feelings stored over time" },
    ],
    analysisNotes:
      "State the principle first — behaviour, not character — then prove it with the sink conversation; the scheduling-conflict reframe generalises the story, and the suggestion for universities widens the answer beyond your room.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-34",
    title: "A lesson about money",
    question: "What is the most important money lesson you have learned as a student?",
    topic: "Money and budgeting",
    difficulty: 4,
    prepSec: 25,
    answerSec: 55,
    sampleResponse:
      "The most important lesson is that a budget is not a punishment — it's information. In my first semester I ran out of money by week eight and spent a humiliating month saying no to everything. When I finally wrote down where the money had gone, the answer was almost comic: small purchases, four or five a day, each invisible on its own. Coffee here, a bus ticket there, an app subscription I'd forgotten — nothing over five. Now I keep one simple rule: every purchase above a certain amount waits twenty-four hours, and everything else gets tracked in one app my bank provides. I still spend on fun; I just know the price of it. That knowledge, not restriction, was the actual lesson.",
    vocabulary: [
      { word: "budget", gloss: "a plan for spending money" },
      { word: "humiliating", gloss: "making you feel deeply ashamed" },
      { word: "invisible", gloss: "impossible or hard to see" },
      { word: "subscription", gloss: "a regular paid service or app" },
      { word: "restriction", gloss: "a rule that limits you" },
    ],
    analysisNotes:
      "The reframe — a budget is information — sets up everything that follows; the comic discovery about small purchases makes the failure story enjoyable, and the twenty-four-hour rule shows learning converted into practice.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-35",
    title: "Social media and focus",
    question: "Do you think social media has changed the way young people concentrate?",
    topic: "Media",
    difficulty: 4,
    prepSec: 25,
    answerSec: 55,
    followUp: "Could you give up social media for one month?",
    sampleResponse:
      "It has, and I say that while openly using it every day, which I think makes me a more reliable witness than someone who deleted their accounts. My own reading changed: at sixteen I finished four-hundred-page novels without thinking; at twenty I caught myself skimming a two-page article and scrolling back up twice. The habit of finishing things — a chapter, a problem set, even a film — had quietly eroded. What I did about it was small but effective: long-form reading moved to paper, notifications exist for humans only, and my phone charges in another room overnight. I'm not claiming technology is evil; I'm claiming my attention needed defending, and pretending otherwise was the expensive part.",
    vocabulary: [
      { word: "witness", gloss: "someone who saw something personally" },
      { word: "skimming", gloss: "reading fast and missing depth" },
      { word: "eroded", gloss: "slowly worn away over time" },
      { word: "long-form", gloss: "long and detailed rather than brief" },
      { word: "defending", gloss: "protecting something from harm" },
    ],
    analysisNotes:
      "Admitting your own daily use builds credibility before the critique; the before-and-after reading comparison makes the change measurable, and the list of countermeasures stays concrete instead of preachy, ending on ownership.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-36",
    title: "A tradition worth keeping",
    question: "Are there traditions from your culture that you think deserve more attention from young people?",
    topic: "Culture and traditions",
    difficulty: 4,
    prepSec: 25,
    answerSec: 60,
    sampleResponse:
      "Yes — I'd point to the tradition of shared evening meals, which is quietly disappearing, and I think we underestimate what leaves with it. In my family, dinner was never only about food. It was the daily parliament: complaints were heard, decisions were announced, and my grandmother settled debates with the authority of someone who had seen sixty years of them. When I moved out, I first replaced those meals with phone-in-hand snacking, and I noticed the difference within a month — not in nutrition, but in how fast I felt isolated in a new city. Now I cook with friends every Friday, not because the food is better, but because the table is. Young people don't reject these traditions; we just stop noticing them, and reviving them is mostly a scheduling decision.",
    vocabulary: [
      { word: "parliament", gloss: "a place where matters are debated" },
      { word: "settled", gloss: "ended a disagreement with a decision" },
      { word: "isolated", gloss: "feeling alone and cut off" },
      { word: "reviving", gloss: "bringing back to life or use" },
      { word: "scheduling", gloss: "deciding when things happen" },
    ],
    analysisNotes:
      "One tradition, its social function, and a personal experiment of losing and restoring it — that is the full arc here; the generous reframe of young people closes warmly rather than accusingly.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-37",
    title: "Losing our sense of direction",
    question: "Have navigation apps made people worse at finding their way?",
    topic: "Technology",
    difficulty: 4,
    prepSec: 25,
    answerSec: 60,
    followUp: "Do you trust navigation apps in your own city?",
    sampleResponse:
      "They have, and I include myself in that diagnosis — that's the honest part. I grew up navigating by paper maps on family trips, and I remember the skills: checking street names, building a mental picture of the city, noticing landmarks. Since I started following a blue arrow everywhere, those abilities have faded almost completely. Last year my phone died during a trip, and I genuinely struggled to reach a destination I had driven to twenty times. The deeper issue isn't maps; it's what psychologists call offloading — we hand cognitive work to machines and lose the muscle. I'm not suggesting anyone delete the app; it saves real stress. I've simply started walking one new route each week without guidance, partly to keep the skill alive, mostly because getting slightly lost was genuinely interesting.",
    vocabulary: [
      { word: "landmarks", gloss: "easily recognised features of a place" },
      { word: "faded", gloss: "slowly became weaker" },
      { word: "offloading", gloss: "handing mental work to something else" },
      { word: "cognitive", gloss: "related to thinking and the mind" },
      { word: "guidance", gloss: "help showing which way to go" },
    ],
    analysisNotes:
      "Include yourself in the diagnosis from the start; the dead-phone story supplies the evidence, naming offloading adds precision, and the closing double motive — skill and curiosity — keeps the tone light.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-38",
    title: "Memory versus search",
    question: "Is memorisation still a useful skill when information is easy to look up?",
    topic: "Academic interests",
    difficulty: 4,
    prepSec: 25,
    answerSec: 55,
    followUp: "What did you memorise most reluctantly as a child?",
    sampleResponse:
      "More useful than ever, actually, though not for the reasons my school believed. Looking things up works wonderfully when you know exactly what to search for — but the questions worth asking are usually built from knowledge already in your head. I notice this in seminars: the students who memorised the key dates and definitions aren't reciting them; they're using them as ingredients, spotting connections in real time while the rest of us are still loading webpages. There's also a subtler point — memorised knowledge gives you opinions when the internet is suddenly unavailable, or when it's wrong. You can't check a source you never would have thought to question. So I'd defend memorisation selectively: dates, formulas, vocabulary. What should die is memorising essays, which trains obedience more than thought.",
    vocabulary: [
      { word: "reciting", gloss: "repeating words from memory aloud" },
      { word: "building blocks", gloss: "basic parts used to make something" },
      { word: "subtler", gloss: "less obvious and harder to notice" },
      { word: "selectively", gloss: "in some cases but not all" },
      { word: "obedience", gloss: "doing exactly what you are told" },
    ],
    analysisNotes:
      "A counterintuitive stance needs immediate support: the seminar observation shows the difference between stored and looked-up knowledge; scoping the claim at the end — dates yes, essays no — shows disciplined thinking.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-39",
    title: "The case for fiction",
    question: "Why should anyone read fiction when there is so much to learn from facts?",
    topic: "Books and reading",
    difficulty: 4,
    prepSec: 25,
    answerSec: 50,
    sampleResponse:
      "Because fiction is where you practise empathy at low cost, and I can defend that with an example. Facts tell you that a refugee left a country; a novel puts you inside the suitcase. When I read a story about a family dividing its photographs before an impossible journey, no dataset could have produced the specific ache I felt — and that ache is precisely what motivates donations, voting, and hiring decisions later. I also think fiction is sneaky practice for attention: it requires holding characters and plots in mind for hours, which is the same muscle my seminars demand. Facts I can look up. The experience of briefly being someone else, though, has no search function, and it changes how the facts land afterwards.",
    vocabulary: [
      { word: "empathy", gloss: "the ability to feel what others feel" },
      { word: "refugee", gloss: "someone forced to leave their country" },
      { word: "ache", gloss: "a dull continuous emotional pain" },
      { word: "motivates", gloss: "gives you the reason to act" },
      { word: "briefly", gloss: "for a short time" },
    ],
    analysisNotes:
      "The low-cost empathy thesis gains force from one specific fictional scene; two distinct arguments — motivation and attention — prevent repetition, and the no-search-function line lands best after a slight pause.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-40",
    title: "Why meals together matter",
    question: "Does eating together still matter in a busy modern life?",
    topic: "Food and cooking",
    difficulty: 4,
    prepSec: 25,
    answerSec: 55,
    followUp: "Who usually does the cooking in your family?",
    sampleResponse:
      "I've become convinced it matters more precisely because modern life is busy — shared meals are one of the last rituals that force people into the same rhythm for half an hour. My flatmates and I started a Thursday dinner rule during exam season, when we were all stress-eating separately at midnight. Nothing about the food was special — usually one enormous pot of something cheap. But that hour became the week's anchor: problems got named out loud, one of us cooked while another vented, and the dishes kept us twenty minutes longer than planned. Research keeps finding that families who eat together report better communication, and my small experience matches it. The meal itself is the pretext; the conversation is the nutrition. Busy people who skip it aren't saving time — they're outsourcing it to their phones.",
    vocabulary: [
      { word: "ritual", gloss: "a repeated meaningful social practice" },
      { word: "rhythm", gloss: "a regular pattern of activity" },
      { word: "anchor", gloss: "something stable other things arrange around" },
      { word: "vented", gloss: "released strong feelings by talking" },
      { word: "pretext", gloss: "an apparent reason hiding the real one" },
    ],
    analysisNotes:
      "The counterintuitive frame — busier lives need the ritual more — organises the answer; the Thursday dinner case study carries it, and separating pretext from nutrition gives the closing aphorism its precision.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-41",
    title: "How much salary matters",
    question: "How much should salary influence a young person's career choice?",
    topic: "Work and career",
    difficulty: 4,
    prepSec: 25,
    answerSec: 60,
    sampleResponse:
      "Some, honestly — anyone who says 'not at all' has probably never had rent due — but far less than it feels like when you're twenty. Salary is a threshold variable: below a certain point it causes constant stress and narrows your choices, but past that point more money buys diminishing returns in daily happiness. My sister chased the highest offer right out of university and spent two well-paid years dreading Mondays; she now earns a bit less in a hospital job she talks about with actual energy. The compromise I'd recommend is unglamorous: know your minimum comfortable number, refuse jobs below it, and above it weigh the daily texture — the people, the pace, the point — more heavily than the figure. Money buys freedom from worry; it doesn't manufacture the reasons to get up.",
    vocabulary: [
      { word: "threshold", gloss: "a level that must be reached" },
      { word: "diminishing", gloss: "becoming smaller over time" },
      { word: "dread", gloss: "to fear something in the future" },
      { word: "texture", gloss: "the felt daily quality of something" },
      { word: "figure", gloss: "an exact amount of money" },
    ],
    analysisNotes:
      "Calibrate the thesis honestly: some influence, far less than it appears at twenty; the sister's story shows the cost of ignoring the argument, and the minimum-number rule makes the advice practical.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-42",
    title: "Streets for people",
    question: "Should cities make more space for pedestrians and cyclists?",
    topic: "City life",
    difficulty: 4,
    prepSec: 25,
    answerSec: 55,
    followUp: "How would your own city benefit from fewer cars?",
    sampleResponse:
      "Yes, and I'd go further: cities should treat walking and cycling as infrastructure as serious as plumbing. When my city pedestrianised one noisy street, the initial outrage lasted about two months; then the cafés filled the space with tables, foot traffic rose, and the shops along it — who had protested loudest — started earning more. That pattern repeats everywhere it's tried, because pedestrian zones don't remove customers, they change their speed, and slower movement is what shops actually need. I understand the objection: delivery drivers, people with disabilities, and commuters have real requirements, and blanket bans ignore them. That's why good designs start with exemptions and honest consultation rather than ideology. But the direction is unmistakable — cities are for the people who move through them slowly enough to spend time, money, and attention.",
    vocabulary: [
      { word: "pedestrianised", gloss: "closed to cars for walking" },
      { word: "foot traffic", gloss: "the number of people walking past" },
      { word: "exemptions", gloss: "cases excused from a general rule" },
      { word: "consultation", gloss: "asking affected people for their views" },
      { word: "outrage", gloss: "strong public anger" },
    ],
    analysisNotes:
      "Commit to the stance, then show the street case study with its before-and-after economics; treating objectors fairly — deliveries, disability, commuters — strengthens rather than weakens the position at this level.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-43",
    title: "Experiences or possessions",
    question: "Is it better to spend spare money on experiences or on possessions?",
    topic: "Money and budgeting",
    difficulty: 5,
    prepSec: 30,
    answerSec: 65,
    sampleResponse:
      "For me, experiences win, with one qualification: the advantage depends on how often the experience is remembered afterwards. The research everyone cites says possessions fade into the background while experiences become part of your identity, and my own ledger mostly agrees. The guitar I saved three months for sits in a corner; the cheap, disastrous hiking trip with two friends still earns laughs at every reunion — retold so often it's honestly better in memory than it was in the rain. Here's the qualification, though: a forgotten experience is a bad purchase too. A concert you barely remember has no advantage over a jacket you actually wear. So my rule is blunt: spend on experiences you'll retell and possessions you'll use weekly — the object that truly wins, in the end, is the story.",
    vocabulary: [
      { word: "qualification", gloss: "a condition that limits a statement" },
      { word: "ledger", gloss: "a personal record of spending" },
      { word: "disastrous", gloss: "going badly wrong in every way" },
      { word: "reunion", gloss: "a gathering of people who met before" },
      { word: "retell", gloss: "to tell a story again" },
      { word: "possessions", gloss: "physical things that you own" },
    ],
    analysisNotes:
      "Six moves — thesis, mechanism, personal ledger, concession, decision rule, closer — define this tier; the qualification about remembered experiences keeps the stance honest, and the final inversion line deserves deliberate pacing.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-44",
    title: "Who owns the problem",
    question: "Who should bear the greater responsibility for protecting the environment: governments or individuals?",
    topic: "Environment",
    difficulty: 5,
    prepSec: 30,
    answerSec: 70,
    followUp: "What single environmental policy would you introduce first?",
    sampleResponse:
      "Governments, decisively — and I'll defend that without excusing personal laziness, because the two arguments get tangled constantly. My reason is arithmetic: about a hundred companies are linked to the majority of industrial emissions, and no amount of household virtue changes a supply chain. When I calculated my own footprint for a course project, my 'good behaviour' — recycling, shorter showers — touched perhaps five per cent of my total impact; the rest was baked into how my city generates power and prices fuel. Individual action matters for a different reason: it builds the political atmosphere in which governments can act. My mother's generation didn't stop using plastic bags through guilt; they changed what shops offered. So: individuals vote, governments build — and pretending the roles are interchangeable is how both sides escape the work.",
    vocabulary: [
      { word: "virtue", gloss: "moral goodness in behaviour" },
      { word: "footprint", gloss: "the total environmental impact someone causes" },
      { word: "supply chain", gloss: "the network that produces and delivers goods" },
      { word: "atmosphere", gloss: "the surrounding mood that makes action possible" },
      { word: "interchangeable", gloss: "able to be swapped with no loss" },
      { word: "emissions", gloss: "gases released into the air" },
    ],
    analysisNotes:
      "Decisiveness first, then the arithmetic that supports it; the footprint calculation personalises the evidence, the concession about political atmosphere prevents caricature, and the closing role division — vote, build — is quotable.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-45",
    title: "A single world language",
    question: "If everyone in the world spoke the same language, would that be a good thing?",
    topic: "Learning languages",
    difficulty: 5,
    prepSec: 30,
    answerSec: 65,
    followUp: "Which second language would you learn if time were no object?",
    sampleResponse:
      "It would be convenient in year one and quietly catastrophic within a generation — which is my way of saying no. Translation would vanish overnight, and with it a whole profession, but that's the small loss. The large one is that languages are not interchangeable labels for the same reality. My language has no casual word for 'privacy'; it draws the boundary of the self in a different place — you can hear it in how my grandparents discuss family decisions. Every language that disappears takes with it an experimental answer to how humans can live together. I'd concede the genuine benefits — science moves faster, travellers avoid my disastrous first week in Rome — but better teaching and translation can deliver those gains, whereas a language once lost never comes back. Convenience is negotiable; extinction isn't.",
    vocabulary: [
      { word: "catastrophic", gloss: "extremely harmful in a lasting way" },
      { word: "vanish", gloss: "to disappear completely" },
      { word: "labels", gloss: "simple names attached to things" },
      { word: "boundary", gloss: "a line marking an edge or limit" },
      { word: "extinction", gloss: "the permanent end of something" },
    ],
    analysisNotes:
      "The year-one-versus-generation frame makes the convenience concession honestly; the privacy example grounds an abstract claim in lived language, and the irreversibility argument gives the closer its ethical weight.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-46",
    title: "Defining success yourself",
    question: "How would you personally define success by the end of your life?",
    topic: "Personal goals",
    difficulty: 5,
    prepSec: 30,
    answerSec: 70,
    sampleResponse:
      "I'd define success in two clauses: the people I love can speak honestly to me, and the work I did outlived my need for credit. The second clause took me years to add, and I learned it from a biology teacher who spent weekends maintaining a school greenhouse she knew she'd never see at its best. Nobody outside our class remembers her name, yet three hundred students carry her patience into their own work. I don't dismiss visible achievements — marks, offers, they open doors and pay for greenhouses. But the moments I'm proudest of never appear on a CV: the friend I talked through one terrible winter, the small tool people quietly use every week. If my life was useful and my honesty survived it, that is success enough for me.",
    vocabulary: [
      { word: "outlived", gloss: "lasted longer than something else" },
      { word: "credit", gloss: "public praise for an achievement" },
      { word: "patience", gloss: "calm endurance over a long time" },
      { word: "dismiss", gloss: "to treat something as unimportant" },
      { word: "achievements", gloss: "things successfully accomplished" },
    ],
    analysisNotes:
      "Define success in two clauses before illustrating either; the biology teacher embodies the second clause without sentimentality, the concession about visible achievement keeps it grounded, and the final standard is quietly personal.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-47",
    title: "When tourism hurts",
    question: "Can tourism ever be harmful to the places that receive it?",
    topic: "Travel",
    difficulty: 5,
    prepSec: 30,
    answerSec: 70,
    followUp: "Have you ever decided not to visit somewhere for ethical reasons?",
    sampleResponse:
      "Certainly — and the uncomfortable part is that the harm arrives wearing gifts. I saw it in a coastal town we visited for years. When I was small, it was a working fishing port with one guesthouse street. By my last visit, the fleet had become a backdrop, the fish market a restaurant row, and the young people who stayed poured drinks for wages that couldn't rent a room in their own town. Tourism didn't just visit that town; it replaced its economy with a costume of itself. To be fair, no tourism often means no jobs at all, and some destinations have negotiated the balance through visitor caps and local hiring rules. The real question is whether, after we leave, the place is still itself or a stage set — that line separates travel from extraction.",
    vocabulary: [
      { word: "backdrop", gloss: "scenery behind the main action" },
      { word: "fleet", gloss: "all the ships of a port or company" },
      { word: "wages", gloss: "money paid for work done" },
      { word: "negotiated", gloss: "discussed and arranged acceptable terms" },
      { word: "extraction", gloss: "taking resources without giving back" },
      { word: "stage set", gloss: "artificial scenery used in theatre" },
    ],
    analysisNotes:
      "The then-and-now portrait of one town is stronger than statistics here; naming the mechanism — an economy replaced by a costume of itself — plus the fair concession about jobs makes the critique rigorous.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-48",
    title: "Careers AI will reshape",
    question: "Which careers do you think will change the most because of artificial intelligence?",
    topic: "Work and career",
    difficulty: 5,
    prepSec: 30,
    answerSec: 70,
    sampleResponse:
      "Medicine, law and translation — and the pattern they share will reach almost everyone, so take medicine first. Radiologists were predicted to disappear; instead, scan-reading became faster and the job tilted towards the human parts: explaining probabilities to a frightened patient, taking responsibility when the algorithm is confidently wrong. The tasks got automated; the accountability did not — and accountability was always the expensive part. The honest concession: some professions really shrink rather than tilt, and translation is the clearest case, with machines handling routine text while humans keep the courts and the nuance. The careers that change most are the ones where the stakes are highest, because that is where humans remain legally and morally load-bearing. So my advice to my generation is simple: learn the tools, and invest harder in the judgement standing behind them.",
    vocabulary: [
      { word: "tilted", gloss: "shifted in direction or emphasis" },
      { word: "probabilities", gloss: "the chances that something will happen" },
      { word: "accountability", gloss: "being answerable for decisions and results" },
      { word: "nuance", gloss: "small but important shades of meaning" },
      { word: "load-bearing", gloss: "carrying the essential weight of something" },
      { word: "radiologist", gloss: "a doctor who reads medical scans" },
    ],
    analysisNotes:
      "Narrow the three-field claim to one worked example immediately; the pattern — tasks automate, accountability does not — is the analytical core, the translation concession keeps it honest, and the advice closes forward.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-49",
    title: "Volunteering on demand",
    question: "Should schools require students to complete a certain number of volunteer hours?",
    topic: "Volunteering",
    difficulty: 5,
    prepSec: 30,
    answerSec: 65,
    followUp: "What cause would you choose to volunteer for next?",
    sampleResponse:
      "I'd support a modest requirement, provided schools are honest about what they're teaching, because I've seen the alternative fail both ways. Mandatory hours produce a predictable percentage of box-ticking resentment — I've been that volunteer, counting tins in a warehouse while rehearsing my complaint. Yet optional programmes reliably recruit the already-advantaged, students with spare time and CV anxiety, while those who'd gain most never sign up. My turning point was a literacy programme that paired us with families for a full year — length mattered more than mandate, because you can fake an afternoon but not a relationship. So my answer is conditional: require hours long enough to become real, and let students choose the cause. Coerced charity is a weak instrument, but it is stronger than a door that only the confident walk through.",
    vocabulary: [
      { word: "box-ticking", gloss: "doing tasks only to complete requirements" },
      { word: "recruit", gloss: "to attract people to join" },
      { word: "advantaged", gloss: "having more opportunities and resources" },
      { word: "mandate", gloss: "an official requirement or order" },
      { word: "coerced", gloss: "forced rather than freely chosen" },
      { word: "literacy", gloss: "the ability to read and write" },
    ],
    analysisNotes:
      "A conditional yes with honest self-portraiture; the structural insight — optional volunteering recruits the already-advantaged — reframes the debate, and the design conditions on length and choice make the position concrete.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "take-interview",
    slug: "toefl-sb-int-50",
    title: "Traditions in a global age",
    question: "Are local traditions disappearing because of global entertainment and media?",
    topic: "Culture and traditions",
    difficulty: 5,
    prepSec: 30,
    answerSec: 70,
    followUp: "Which traditions from your own family would you keep alive?",
    sampleResponse:
      "Some are disappearing, others are being transformed, and the difference between those two fates is where the interesting question lives. My grandmother's dialect is genuinely going — my cousins understand it but answer in the standard language, and no streaming service will revive it, because a dialect lives only in daily need. But other traditions have migrated rather than died: our spring festival, once one specific family meal, is now a city-wide event organised by young people who film it, remix it and argue about it online. Purists call that corruption; I'd call it circulation. The honest concession is that the filmed version is thinner — you can taste the food but not the grandmother's kitchen. Still, the traditions that survive global media are the flexible ones, and rigidity — not Netflix — is what buries a culture.",
    vocabulary: [
      { word: "dialect", gloss: "a regional form of a language" },
      { word: "migrated", gloss: "moved from one place to another" },
      { word: "corruption", gloss: "the process of spoiling something pure" },
      { word: "circulation", gloss: "movement and passing between people" },
      { word: "rigidity", gloss: "refusal to change or adapt" },
    ],
    analysisNotes:
      "The distinction between disappearing and transformed organises everything; the dialect and the festival supply contrasting family evidence, the thinning concession is fair, and the rigidity line reframes the cause sharply.",
    source: TOEFL_SPEAKING_BANK_SOURCE_NOTE,
  },
];
