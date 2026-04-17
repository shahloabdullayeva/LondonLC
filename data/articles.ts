// Curated articles for English learners. Each article has its
// content inline as a markdown-ish string (rendered with
// whiteSpace: pre-line). Teachers will get a Supabase-backed
// upload flow later; for now new entries go in this array.

export type Article = {
  id: string;
  title: string;
  author: string;
  category: string;
  /** Reading time in minutes. */
  readingTime: number;
  /** Optional image — Supabase images bucket filename. */
  image?: string;
  /** The article body — plain text with line breaks. */
  content: string;
};

const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

export const starterArticles: Article[] = [
  {
    id: "how-young-use-ai",
    title: "How the young use AI matters more than for how long",
    author: "Sema Sgaier, The Economist",
    category: "Technology",
    readingTime: 6,
    image: imageUrl("HowtheyounguseAI.png"),
    content: `CONVENTIONAL WISDOM is forming quickly. Social-media use damages young people's mental health and generative artificial intelligence is now eroding their ability to think. The anxiety is understandable. AI tools have spread through teenage social lives with extraordinary speed, prompting calls for age limits, bans on "AI companions" and tighter guardrails. But the debate assumes that AI affects all young people in broadly the same way and often treats time spent using it as the main measure of risk. Emerging evidence suggests the opposite. The same technology can expand opportunity for some youngsters while quietly replacing human support for others.

How might a young person's social and emotional context play a role in how, when and why they use generative-AI tools? And what does this mean for how policies should be shaped? A team at the health-data firm I run addressed these questions in a large study of 13- to 24-year-olds in America, conducted in November 2025. We asked over 100 questions about AI use, its impacts on their lives, and their broader mental health and life context.

We find high-frequency AI users who are thriving and low-frequency users who are in deep distress. The same tool functions radically differently depending on a user's socioeconomic context, the types of events that trigger stress for them and their "human capital": the skills and knowledge they possess. Young people use AI in strikingly different ways.

For some, AI functions as a mobility engine. One in ten young people are optimistic "power users" and treat generative AI as a tool for learning and opportunity, using it to build skills, generate ideas and explore new career paths. Over two-thirds of this group say AI opens new opportunities, while more than half say it gives them confidence to solve problems and feel more hopeful about the world. Black youth and those facing economic hardship are particularly likely to fall into this group, suggesting that AI can expand access to knowledge and opportunity where other resources are scarce.

For a similar-sized group, AI becomes a substitute for social and emotional support that is missing offline. This worrying group turns to AI for conversation, emotional reassurance and advice when they feel isolated. These high-frequency users report higher levels of distress and are disproportionately likely to face bullying, discrimination or financial strain. AI may indeed be better than no support at all. But general-purpose systems are not designed to play this role safely. They cannot reliably recognise when to direct a young person to professional help.

And then there are those who keep their distance from the technology altogether. This group, which accounts for roughly a tenth of young people, does not see AI as a practical tool. They are anxious about its impact. Their low engagement is more a reflection of their broader societal pessimism than of negative experiences they have had with the technology. We find white and LGBTQ+ youth to be overrepresented in this group. For LGBTQ+ youth, AI exacerbates their anxiety with surveillance and privacy concerns.

Close to half of young people, however, fall somewhere in between. They engage with AI pragmatically, using it to explore, learn and solve problems, without relying on it for identity or emotional support. Strong social support and a sense of belonging appear to act as buffers, allowing these young people to treat AI as a tool rather than a substitute for connection.

What does this mean for policy and practice? The instinct to regulate access or impose time limits may be misguided. Recent proposals, from school bans on ChatGPT to America's federal GUARD Act, reflect an impulse to reduce exposure as the primary safety mechanism. If AI is functioning as a mobility engine for some young people, a productivity tool for others and an emotional substitute for those lacking support, then exposure alone is the wrong variable to regulate. What's needed is a multi-pronged approach that complements the complex ways in which this technology weaves through young people's lives and, in many ways, mirrors it.

Designing AI systems with strong and smart safety guardrails is essential. Firms have a responsibility to ensure their systems do not expose young users to harmful interactions, and policymakers should hold them accountable. Some governments, such as California's and New York's, are already moving in this direction, with proposals to require clearer disclosures and limit emotionally manipulative design. But product-level fixes alone are insufficient.

The important question is what role the technology ends up playing. Policy should focus on where AI begins to substitute for human support and whether that substitution is safe. That means building paths from AI tools to human care, such as easy connections to mental-health services, and equipping schools and families with the literacy to help youngsters navigate these systems.

Trusted adults are central to this. There is often a disconnect between what parents think their children are using AI for and how they are actually using it. Yet parents and trusted adults remain the most important facilitators of support. Helping them engage in more informed conversations about AI rather than just restricting it will be critical. Expert guidance suggests these conversations should focus on helping teens understand what AI can and cannot do, discussing privacy risks and encouraging critical thinking about AI responses. There are important lessons here from how we failed to equip parents in relation to social-media use.

In short, the debate needs to shift. Instead of asking only how much time the young spend with AI, the question should be about how the technology fits into the social environments shaping their lives. Generative AI will not determine youngsters' well-being on its own. But it may reveal and sometimes amplify the strengths, or the absences, in the human support systems around them.`,
  },
  {
    id: "america-wakes-up-ai",
    title: "America wakes up to AI's dangerous power",
    author: "The Economist",
    category: "Technology",
    readingTime: 7,
    image: imageUrl("Americawakesup.png"),
    content: `SHOULD A HANDFUL of men be entrusted with the world's most potent new technology? Five geeks so famous that they can be identified by their first names—Dario, Demis, Elon, Mark and Sam—exercise almost godlike command over the artificial-intelligence models that will shape the future. The Trump administration has stood aside even as those models have gained jaw-dropping capabilities, convinced that unfettered competition between private firms is the best way to ensure America wins the AI race against China.

Until now. Suddenly, America's free-wheeling treatment of AI looks as if it is coming to an end. The reason is that the models' dizzying progress also poses a threat to America's own national security, unnerving members of the Trump administration previously more inclined to worry about overregulation. At the same time, growing resentment among American voters is turning AI into a political lightning-rod. A laissez-faire approach is no longer politically tenable or strategically wise.

The watershed was Anthropic's announcement of Claude Mythos on April 7th. The model-maker's latest creation is so startlingly good at finding software vulnerabilities that, in the wrong hands, it would threaten critical infrastructure, from banks to hospitals. AI models increasingly pose other risks, too, from biosecurity hazards to industrial-scale scamming.

Anthropic's boss, Dario Amodei, wisely thought Mythos too dangerous for general release. Instead he has reserved it for use by around 50 big firms, in computing, software and finance, so that they can boost their own defences. America's treasury secretary, Scott Bessent, was so unnerved that he summoned the biggest banks for urgent talks.

It was not the first time the administration had acted. Only weeks ago the Pentagon stepped in after Mr Amodei refused to allow Anthropic's model to be used in fully autonomous weapons or for mass domestic surveillance. Then, too, the Trump administration was alarmed—because of the power a single firm wielded over a technology central to national security.

A backlash among voters will add to the pressure on the administration to intervene. Opinion polls are leading ever more politicians to think that AI will be one of the big issues in elections in 2028. Americans are far more sceptical of AI than people in other countries. Seven out of ten think AI will hurt job opportunities, a sharp rise from a year ago (and well before they have good evidence). Grassroots opposition to data centres is surging, even though AI has little or nothing to do with rising electricity prices. In a sign of the times, the house of Sam Altman, the head of OpenAI, has been attacked twice in recent days.

History suggests that, with a technology as world-changing as AI, a Mythos moment was inevitable. From John D. Rockefeller to Henry Ford, America's great industrial innovations were led by a small number of men who grew immensely powerful. Eventually, 20th-century governments stepped in to tame over-powerful industries, from the trust-busting that broke up Standard Oil to the creation of the Federal Reserve and the breakup of AT&T. Those times were at least as polarised and febrile as today's are. And our calculations suggest that the AI gods are not yet any more dominant than their historical predecessors were.

But history also suggests that controlling AI will be fraught. That is partly because the stakes if things go wrong are so high. It is also because AI is evolving at warp speed.

The trade-offs are acute. Economic growth will benefit from rapidly diffusing AI's benefits, but the potential backlash could easily lead to overregulation. Doing nothing could leave America vulnerable to malevolent AI-induced chaos, but regulatory overkill would ensure that China wins the AI race. That makes this a perilous moment.

Time is short. Two years ago, during the Biden administration, discussions about regulation were largely about AI's potential risks. Today its capabilities are already alarmingly powerful and growing more so with every release. The pace of innovation means that debates over the proper role of government, which played out over years, even decades, in the past, now need to be resolved in months.

And the technical hurdles to a more interventionist approach are daunting. Tools of government control, such as nationalisation, are ineffective because talented engineers can move freely between companies and computing power is a commodity. Worse, the leading model-builders are only months ahead of their open-source competitors, including those in China. Sooner or later the capabilities of their models will be available to all.

Even so the Mythos moment could be when a workable scheme to control AI starts to take shape. Trusted users would get early access to the most powerful new models: OpenAI is following Anthropic by rolling out its latest tool to a limited group of vetted cyber-security professionals. Before allowing these models to be broadly commercialised, the government could demand certification from industry-led bodies that have tested them for different uses.

Beware geeks with gifts

This idea has advantages for the big model-builders and the government alike. It avoids the lengthy process of creating a new regulator. By allowing only a few premium users, it enables the model-makers to charge higher prices and limit the use of scarce computing power. Meanwhile, the government can restrict who can use the most powerful models, reducing the risk that China can copy them and catch up faster.

But it also suffers from grave problems. Limited release will reduce competition and increase the clout of entrenched AI companies. It will slow the diffusion of AI's benefits and create a two-tier system within America's economy, disadvantaging the many firms that are repeatedly deprived of privileged early access to powerful new models. What if making AI defences takes a long time or is impossible? What about open-source models? How can you insist that they also follow these rules?

A regulatory system built on these foundations could prove unjust. Insiders could secure themselves against frontier threats; outsiders would have to hope for the best. The opportunities for lobbying and outsize profits would be immense. That would test the honesty and competence of the most openly corrupt administration of America's modern political era. And a fix that concentrates power and wealth yet further among the handful of AI gods risks aggravating the very political backlash that is starting to worry Washington.

Moreover, the Mythos approach can be only half the solution. AI safety cannot be secured nationally. Eventually it will demand international co-operation, starting with China. The new focus on cyber-security also needs to be matched by urgent thinking about the economic and social effects of AI. Dealing with the disruption to jobs and designing an AI-adapted tax system that favours labour are huge problems for which no one yet has good answers. This needs to change. The Mythos moment is a wake-up call for AI safety. It demands hard thinking in other areas, too.`,
  },
  {
    id: "ielts-reading-strategies",
    title: "5 Proven Strategies to Improve Your IELTS Reading Score",
    author: "London LC",
    category: "IELTS Tips",
    readingTime: 4,
    content: `The IELTS Reading section gives you 60 minutes to answer 40 questions across three passages. Many students struggle with time management — here are five strategies that consistently help.

1. Skim Before You Read

Don't dive straight into the questions. Spend 2–3 minutes skimming each passage: read the title, the first sentence of each paragraph, and any bold or italicised words. This gives you a mental map of where information lives, so when a question asks about "renewable energy," you already know it's in paragraph 4.

2. Read the Questions First for Matching Tasks

For matching-headings and True/False/Not Given questions, read ALL the statements before touching the passage. Your brain will subconsciously flag relevant information as you read. This is especially powerful for Not Given answers — if you know what you're looking for, you'll notice its absence faster.

3. Don't Get Stuck

If a question takes more than 90 seconds, mark it and move on. The questions at the end of each passage are often easier than the ones in the middle. Coming back with fresh eyes usually makes the answer obvious.

4. Pay Attention to Qualifiers

Words like "always," "never," "some," "often," and "rarely" are where IELTS traps live. A passage might say "most scientists agree" while the question says "all scientists agree" — that tiny difference is the answer.

5. Practice with a Timer

Doing practice tests without timing yourself is like training for a race on a treadmill with no speed setting. Set a 20-minute alarm per passage and stick to it. Your accuracy might drop at first, but your speed will catch up within a week.

Remember: the IELTS Reading test rewards strategy as much as language ability. A Band 6 reader with great technique can outscore a Band 7 reader who wastes time.`,
  },
  {
    id: "ielts-listening-tips",
    title: "How to Stop Missing Answers in IELTS Listening",
    author: "London LC",
    category: "IELTS Tips",
    readingTime: 3,
    content: `The IELTS Listening test plays the recording only once. There are no second chances. Here's how to make sure you catch every answer.

Before the Audio Starts

Use the preparation time wisely. Read the questions and underline the key words — names, numbers, dates, and any words that tell you WHAT to listen for. If a question says "the museum is open on ______ from 10 am," you know you're listening for a day of the week.

Predict the Answer Type

Before you hear anything, decide what KIND of word fills each blank. Is it a noun? A number? An adjective? This narrows your focus. If the blank needs a number and you hear someone say "approximately forty-five," write 45 immediately.

Don't Write and Listen at the Same Time

This is the biggest mistake. When you hear an answer, write just the first 2–3 letters as a shorthand, then keep listening. Fill in the full word during the 30-second check time at the end of each section. If you stop to write "Wednesday" in full, you'll miss the next answer.

Watch for Traps

Speakers often correct themselves: "The meeting is on Thursday — sorry, I meant Friday." IELTS loves this pattern. The answer is always the CORRECTION, not the first thing said.

Spelling Matters

"Accommodation" has two c's and two m's. "Environment" has an 'n' before the 'm.' Practise spelling common IELTS words until they're automatic — one spelling mistake costs you a whole mark.

Transfer Time

You get 10 minutes at the end to transfer answers to the answer sheet (paper test) or 2 minutes to review (computer test). Use this time to check spelling, capitalisation, and whether your answers make grammatical sense in context.`,
  },
  {
    id: "why-read-in-english",
    title: "Why Reading in English Every Day Changes Everything",
    author: "London LC",
    category: "Learning",
    readingTime: 3,
    content: `You've heard it a thousand times: "Read more in English." But why does it actually work, and what should you read?

The Science

When you read, your brain processes thousands of correct English sentences without conscious effort. Unlike grammar exercises (where you focus on one rule at a time), reading exposes you to grammar, vocabulary, collocations, and style all at once. Researchers call this "implicit learning" — your brain absorbs patterns it can't yet explain.

A 2019 study found that students who read for just 15 minutes a day in English improved their vocabulary by 25% over six months — without studying any word lists. Their grammar accuracy also improved, even though they never did a single grammar exercise during that period.

What to Read

The key is finding material at your level plus a little bit harder. If you understand 95% of the words on a page, the remaining 5% teaches you new vocabulary through context — and you enjoy the reading enough to keep going.

For IELTS Band 5–6: Try graded readers, BBC Learning English articles, or children's novels like "Wonder" or "The Giver."

For IELTS Band 6–7: Try news websites (BBC, The Guardian), popular science (National Geographic), or young adult novels.

For IELTS Band 7+: Try The Economist, academic blogs, or literary fiction.

How to Read

Don't look up every unknown word. Read for meaning first. If you encounter a word three or more times and still can't guess it, then look it up. Write it in a notebook with the sentence you found it in — context helps you remember.

Read topics you actually care about. If you love football, read football articles in English. If you like cooking, follow English-language food blogs. Motivation beats method every time.

The 15-Minute Rule

You don't need an hour. Just 15 minutes of focused English reading every day — on the bus, before bed, during lunch — builds a habit that compounds over months. Start today.`,
  },
  {
    id: "common-english-mistakes",
    title: "10 English Mistakes That Make You Sound Like a Beginner",
    author: "London LC",
    category: "Grammar",
    readingTime: 4,
    content: `Even advanced English learners make these mistakes. Fix them and you'll immediately sound more natural.

1. "I am agree" → "I agree"
"Agree" is already a verb. You don't need "am" before it. Same for "I am understand" — just say "I understand."

2. "He explained me" → "He explained to me"
"Explain" always needs "to" before the person. But "tell" doesn't: "He told me" is correct.

3. "I went to abroad" → "I went abroad"
"Abroad" is an adverb, not a noun. No "to" needed. Same with "home" — "I went home," not "I went to home."

4. "Informations" → "Information"
"Information" is uncountable in English. No plural. Same for: advice, furniture, equipment, homework, research, luggage.

5. "I'm interesting in…" → "I'm interested in…"
"-ed" describes how YOU feel. "-ing" describes the THING. "The movie was interesting" (the movie causes interest). "I was interested" (I felt interest).

6. "I am born in 1999" → "I was born in 1999"
Birth happened in the past. Always "was born," never "am born."

7. "He is very tall, isn't it?" → "He is very tall, isn't he?"
The tag question must match the subject. "She's smart, isn't she?" "They left, didn't they?" "It's cold, isn't it?"

8. "I look forward to hear from you" → "I look forward to hearing from you"
"To" here is a preposition, not part of the infinitive. After prepositions, use the -ing form.

9. "Actually" doesn't mean "currently"
"Actually" means "in fact" or "to be honest." If you mean "now," say "currently" or "at the moment."

10. "Eventually" doesn't mean "possibly"
"Eventually" means "in the end, after a long time." If you mean "possibly" or "maybe," just say those words.

Fix these ten and you'll jump from sounding intermediate to sounding advanced — without learning a single new word.`,
  },
  {
    id: "power-of-music-learning",
    title: "How Listening to Music Helps You Learn English",
    author: "London LC",
    category: "Learning",
    readingTime: 3,
    content: `You probably already listen to English songs. But are you using them to actually learn?

Music and Memory

Songs are one of the most powerful memory tools we have. Think about it — you can probably sing along to a song you haven't heard in years, but you can't remember vocabulary you studied last week. That's because music activates multiple brain areas simultaneously: language, emotion, rhythm, and memory all fire together, creating stronger neural connections.

How to Learn from Songs

Step 1: Listen Without Reading
Play the song and try to catch words and phrases. Don't worry about understanding everything — just notice what you can hear.

Step 2: Read the Lyrics
Now read the lyrics while listening. You'll have several "aha!" moments when you realise what the singer was actually saying. Pay attention to connected speech — how words blend together in natural English.

Step 3: Look Up Unknown Words
Pick 5–10 words or phrases you don't know. Look them up, but learn them IN the context of the song, not in isolation. "I can't feel my face when I'm with you" teaches you a metaphor, an idiom, AND a grammar structure.

Step 4: Sing Along
This is where pronunciation improves. Singing forces you to match the rhythm and stress patterns of English — something that textbooks can't teach. You'll naturally learn where to put emphasis and how to connect words smoothly.

Why It Works for IELTS

The Listening test uses natural English speech — contractions, connected sounds, and varied accents. Songs train your ear for exactly this. Students who regularly listen to English music typically score 0.5 to 1.0 bands higher on IELTS Listening than students who only practise with textbook audio.

Start with slower songs (Adele, Ed Sheeran) and work up to faster ones. Use our Music & Lyrics page to follow along with synced lyrics — tap any line to replay it until you catch every word.`,
  },
  {
    id: "british-vs-american",
    title: "British vs American English: What IELTS Students Need to Know",
    author: "London LC",
    category: "IELTS Tips",
    readingTime: 3,
    content: `Both British and American English are accepted in IELTS. But you need to be consistent — don't mix them in the same essay.

Spelling

The most common differences:
British: colour, favourite, centre, organisation, travelling
American: color, favorite, center, organization, traveling

Pick one system and stick with it throughout your test. If you write "colour" in paragraph 1 and "favorite" in paragraph 3, the examiner will notice.

Vocabulary

Some everyday words are completely different:
British: flat, lift, boot (of a car), queue, rubbish, holiday
American: apartment, elevator, trunk, line, garbage/trash, vacation

In the Listening test, speakers may use either variety. The recordings include British, American, Australian, and Canadian accents. Don't panic if you hear an unfamiliar word — context usually makes the meaning clear.

Grammar

There are subtle grammar differences:
British: "I've just eaten" (present perfect)
American: "I just ate" (simple past)

British: "Have you got a pen?"
American: "Do you have a pen?"

Both are correct in IELTS. Use whichever feels more natural to you.

The Bottom Line

IELTS is an international test. The examiners don't care whether you write British or American English — they care about accuracy and consistency. Choose one, learn its spelling patterns, and don't switch mid-essay.

Pro tip: If you're unsure about a spelling, use the version you're more confident about. A confident "color" is better than a hesitant "colour" with a crossed-out "u."`,
  },
];
