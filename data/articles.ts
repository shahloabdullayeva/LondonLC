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
];
