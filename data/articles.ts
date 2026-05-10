// Curated articles for English learners. Each article has its
// content inline as a markdown-ish string (rendered with
// whiteSpace: pre-line). Teachers will get a Supabase-backed
// upload flow later; for now new entries go in this array.

export type Article = {
  id: string;
  title: string;
  author: string;
  source: string;
  category: string;
  /** Reading time in minutes. */
  readingTime: number;
  /** Optional image — Supabase images bucket filename or full URL. */
  image?: string;
  /** The article body — plain text with line breaks. Supports [IMG:url] for inline images. */
  content: string;
  /** If true, shows an "AI-summarised" badge (article was curated from other reporting). */
  curated?: boolean;
};

const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

export const starterArticles: Article[] = [
  {
    id: "how-young-use-ai",
    title: "How the young use AI matters more than for how long",
    author: "Sema Sgaier, The Economist",
    source: "The Economist",
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
    source: "The Economist",
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
    id: "how-to-end-war-iran",
    title: "How to end the war in Iran",
    author: "The Economist",
    source: "The Economist",
    category: "Geopolitics",
    readingTime: 6,
    image: imageUrl("howtoendwarinIran.png"),
    content: `BE GRATEFUL FOR small mercies. The ceasefire between America and Iran may be extended. Talks that began in Islamabad last weekend may soon resume. Though the Strait of Hormuz is closed, oil markets are no more spooked than they were. And though economic damage is spreading, a deep Hormuz-induced global recession could yet be averted.

But small mercies are not enough. If they are not to return to a futile war, America and Iran will have to ensure the ceasefire produces a lasting peace, by opening the strait and settling their dispute over Iran's nuclear programme. That will require compromise and a willingness to grapple with complexity that has eluded both sides—especially President Donald Trump.

The Gulf war has settled into an uneasy limbo. The search for peace starts with a reckoning of America's leverage. Mr Trump's recent imposition of his own blockade was an attempt to strengthen his hand after weeks of bombardment failed to force Iran's capitulation. It traps tankers taking as much as 2m barrels a day of Iranian oil to market even as war raged. The idea is to use the economy to get Iran's hardliners to give ground.

It is a less harmful tactic than the many bad ideas America's president has aired in recent weeks—bombing power plants, sending troops to be sitting ducks on Kharg Island or wrecking the oil industry. A dire economy was Iran's greatest weakness before the war began. Mass protests in January were the result of fury over the currency's collapse, shortages and joblessness. American and Israeli bombs have worsened all those things and made the regime even more desperate for sanctions relief.

The blockade's success, however, is highly uncertain. Such measures usually take months, even years, to force compliance. The regime is desperate to alleviate sanctions and knows that this is its best chance to strike a good bargain. That may mean it is prepared to endure the blockade for longer. Mr Trump may lose patience as petrol prices surge for American consumers.

What matters most, therefore, is whether talks can produce a deal. The first stage is reopening the strait, which should be possible for Iran and America to agree on—after all, each side knows it could force closure again. In no circumstance should America agree to let Iran levy tolls on ships traversing the waters. That would give it a permanent hold over the rest of the region. There will have to be an argument in which America may have to trade the lifting of some sanctions in return for safe passage.

The second stage will be about Iran's nuclear programme. The outlines of a deal are simple here, too: Iran must close off its path to a nuclear weapon in return for more sanctions relief. Unfortunately, everything about the details will be tricky.

The two sides do not trust each other—so neither will take bold steps, fearful that the other may not later honour its part of a deal. A willingness to compromise may also be lacking, because both sides want to portray a total victory at the negotiating table as a substitute for the total victory they could not achieve on the field of battle. Last, as nearly two years of negotiations for the deal with Iran in 2015 attest, nailing down the details of a nuclear programme will be fiendishly complex.

At issue is Iran's stock of roughly 400kg of highly enriched uranium and its capacity to enrich more. America wants the stock of uranium removed from the country and a ban on fresh enrichment. Iran wants relief from sanctions and to be able to enrich—a symbol of sovereignty that it would find hard to surrender.

Compromises are available. Iran could dilute the uranium to a low level suitable for civilian use. It could forswear enrichment for a long but limited time; or it could enrich uranium as part of a consortium. Iran would not get all sanctions lifted, but some limited Iranian financial assets held abroad could be unfrozen.

To be credible such a deal needs international monitors. Even if Iran is not enriching, it must face limits on the number and calibre of its centrifuges and on theoretical work, given that post-war Iran has even more incentive to dash for a bomb. The danger is that Iran will drag out talks hoping to screw more out of America, but end up with nothing.

Even if the two sides reach an agreement, there will be no room for triumphalism. Iran will remain a threatening presence in the Middle East. Its embittered, insecure regime has discovered that it can use Hormuz and regional strikes as weapons. America has discovered that going to war with Iran is perilous. Much work will be needed to rebuild the Gulf's security infrastructure and its economies, including in Iran.

Before America and Israel started bombing, a decent agreement may already have been within reach. It is hard to see the sum of what comes out of the fighting being any better.`,
  },
  {
    id: "hungary-lead-fight-illiberalism",
    title: "How Hungary can now lead the fight against illiberalism",
    author: "The Economist",
    source: "The Economist",
    category: "Geopolitics",
    readingTime: 6,
    image: imageUrl("HowHungarycannowlead.png"),
    content: `AFTER ELECTIONS in Hungary on April 12th, Europeans and democrats everywhere breathed a sigh of relief. And they were right to. Hungarians have struck a blow for democracy by voting out their strongman leader, Viktor Orban, after 16 long years in office—and by a landslide. The triumphant Peter Magyar, his new government and Hungary itself have won the sort of new beginning that comes rarely in politics. They must not squander it.

Their opportunity began with Mr Orban's surprisingly prompt concession speech. After years of chipping away at independent institutions in Hungary, the outgoing prime minister could easily have put up a fight. Yet with his Fidesz party on track to win just 38% of the votes and 55 seats, compared with 54% and 138 seats for Mr Magyar and Tisza, he may have felt the odds were insurmountable. The hope is that Mr Orban has now set the tone for a smooth transition to a new government.

For the sake of his legacy and his country, Mr Orban should lift Hungary's veto on European Union military aid to Ukraine, worth some €90bn ($105bn)—and do so now, rather than wait until his successor takes office. Voters on Sunday showed how strongly they disagree with his alignment of Hungary with Vladimir Putin and Russia. By rejecting Russian and American efforts to influence their votes, a large majority demonstrated that they want to belong in Brussels' sphere of influence.

Europeans should return the compliment. Governments across the continent are eager to show Hungarians all the economic benefits that flow once a country will observe agreed-upon rules. As Hungary fully restores EU standards on the rule of law, especially by dismantling Mr Orban's system of large-scale corruption, Europe should in turn quickly unlock the billions of euros it has withheld and publicly welcome Hungary back into the fold. Rejecting Mr Putin and embracing the EU should bring material and diplomatic rewards.

The greatest responsibility, naturally, falls upon the new leader. As a campaigner, Mr Magyar was extraordinary, criss-crossing the country to hold rallies, attacking corruption and economic misrule under Mr Orban and uniting a broad coalition of opposition figures behind the young party he called Tisza. What will he be like in office?

Mr Magyar remains something of a mystery. He defected from Mr Orban's camp only two years ago. Liberals and moderates hope he will not be tempted to stray like his predecessor. The test of that will come when he exercises power.

One challenge rises above all others. In his years as prime minister, Mr Orban thoroughly rewrote the constitution in order to jam Fidesz into every corner of the state. The party controls the supreme and constitutional courts. Its allies own most of the broadcast, online and print media. It has apparatchiks throughout the civil service, in state-owned companies and the education system. The party machine could yet hinder Mr Magyar's ability to govern. He has complained that the foreign minister spent the morning after the election shredding official documents.

The priority is therefore to rapidly loosen its grip. The good news is that Tisza won so decisively that it will have a two-thirds majority in Parliament, just as Fidesz once did. That provides it with tools to deal with Mr Orban's constitutional abuse and to remove his flunkies.

Mr Magyar must act quickly. Poland, which voted in an anti-populist government in 2023, shows how hard it can be to repair the damage from years of populist rule if the former party keeps control of the levers of power. When Fidesz protests, as it surely will, Mr Magyar can point to the sweeping democratic mandate he has just won. Voters want him to restore the rule of law, revive Hungary's economy and, most important of all, eradicate corruption and the crooks who benefit from it.

But if Mr Magyar is ruthless in rooting out abuse, he must be magnanimous in the reconstruction that follows. Tisza did not win its victory alone. Nearly all the other opposition groups in Hungary—conservative, liberal and leftist—laid down their standards to unite behind Mr Magyar. They need to share in the new Hungary, too.

On April 13th the victor vowed to represent all Hungarians, including those who "did not vote for us". As he forms his administration in the coming weeks, Mr Magyar should cleave to those words. To succeed, he needs to fill national life with people from all shades of democratic politics and from all law-abiding sectors of society. Such diversity is precisely where the strength of liberalism lies.

The world will be watching. Mr Orban led the campaign to install an "illiberal democracy". That gave him outsize appeal for all sorts of populist nationalists, from MAGA in America to National Rally in France. Mr Magyar is thereby destined to be a test case for how easy it is to reverse democratic decay. Much is riding on his success.`,
  },
  {
    id: "vance-theory-trumpism",
    title: "J.D. Vance's theory of Trumpism is no match for the practice",
    author: "The Economist",
    source: "The Economist",
    category: "Politics",
    readingTime: 6,
    image: imageUrl("trumpism.png"),
    content: `Vice-President J.D. Vance loves big ideas, or at least the idea of big ideas. Unlike President Donald Trump, he reads books and even writes his own, and he talks, authentically, like a diploma-carrying member of the elite they both ostentatiously disdain. He aligns himself with the "post-liberal right", a term so highfalutin one struggles to imagine Mr Trump using it. Mr Vance serves as the chief emissary between the Trump White House and the intellectual "New Right", the agglomeration of pointy-heads, Silicon Valley potentates and podcasters with big ideas of their own for saving Western civilisation, as Mr Vance, apocalyptically, likes to describe his mission.

It is heady stuff. It must also, on some days, prove vexatious, for it has led Mr Vance to cast himself as the chief ideologist of a movement, MAGA, whose essence is that it has no ideology. MAGA is committed instead to the instincts, impulses and glory of one man. As a result, Mr Vance's theories of governance keep taking a beating from Mr Trump's practice.

For example, contrary to the big ideas of Mr Vance, Mr Trump has recently been threatening to destroy a civilisation. Mr Vance, a veteran of the Iraq war, has been an advocate of isolationism. As he put it during the last presidential campaign, "America doesn't have to constantly police every region of the world." A war with Iran seemed to him a particularly bad idea. It was not in America's interest and would mean "a huge distraction of resources"; war between Israel and Iran was "the most likely and the most dangerous scenario" for starting a third world war.

But it turns out that in putting "America first" Mr Trump did not mean to stop policing the world. He meant to use force wherever he thought right, without regard for resources, allies or global stability, let alone grand strategy. Mr Vance has been left to argue that war in the Middle East makes sense this time because America has "a smart president, whereas in the past we've had dumb presidents". This formula, though childish, has the advantages of both flattering Mr Trump and leaving him holding the bag. Meanwhile, some anonymous source made sure to inform the New York Times that among all Mr Trump's advisers Mr Vance was "the stark exception" to oppose the war. And Mr Vance has stepped in to act as chief negotiator, the best of his bad options. If he fails, he can blame Iran. And he avoids the possibility that the secretary of state, Marco Rubio, whom Mr Trump has recently talked up as his possible successor, might do it and succeed.

Mr Vance's recent foray to Hungary, to support the doomed prime minister, Viktor Orban, was more ill-advised. It ended in rejection of his biggest idea of how the world should work. For Mr Trump, all politics is personal: he likes Mr Orban because Mr Orban flatters him. For Mr Vance, things are more abstract: while standing beside Mr Orban in Budapest on April 7th, Mr Vance declared that, under Mr Orban and Mr Trump, Hungary and America represented nothing less than "the defence of Western civilisation". They stood for the idea "that we are founded on a certain Christian civilisation and Christian values that animate everything from freedom of speech to rule of law, to respect for minority rights and protection of the vulnerable."

Does it seem odd that a "post-liberal" would wreathe himself in liberalism's achievements? This is a key move of the New Right, and it is sleight-of-hand: Mr Vance is correct that Western civilisation is rooted in Christianity, but he skips past the decades Christians spent killing each other over doctrinal differences before Enlightenment thinkers ushered religion into the realm of private life, freeing political speech and scientific inquiry from religious dogma. This sleight-of-hand usefully licenses those in power to redefine liberalism's protections on their own terms, deporting protesters for the wrong kind of speech or declaring that certain minorities, such as Muslims, "don't belong in American society", as one Republican congressman recently put it.

Mr Vance's theory, convenient as it is for the populist right, has a flaw: it does not correspond to the reality of governance by the populist right. Mr Orban's idea of "rule of law" was to steer public money to favoured oligarchs, pack the courts with accommodating judges and rewrite electoral laws to benefit himself; his idea of freeing speech was to put allies in charge of the news media. This may sound familiar to Americans; the stagnation of Hungary should be a warning to them. As Mr Vance returned home on April 12th, after his detour to Islamabad to negotiate fruitlessly with Iran, Mr Trump revealed that his own "Christian values" were not so Christian as to prevent him from posting an image of himself as Christ, or from attacking the pope. The same day, Hungarians demonstrated how much credence they gave Mr Vance's gasbaggery about civilisation by overwhelmingly voting Mr Orban out.

Losing his religion

Mr Vance is so obviously smart, yet can spout such nonsense that one wonders sometimes whether he respects his listeners' own intelligence. In Budapest, while extolling Mr Orban as a "profound leader" and a "model to the continent", Mr Vance said he was not telling "the people of Hungary how to vote" and attacked "bureaucrats in Brussels" for having the gall to interfere in the election. Unless Mr Trump gets religion soon about civilisational uplift, Mr Vance's gift for righteous hypocrisy will face an even more severe test over the remainder of this president's term.

On the other hand, Mr Vance, a reformed blogger, has asserted so many provocative theories, such as that "childless cat ladies" were immiserating America, that it can be hard to tell how attached he really is to any of them. He has reversed himself once already on some of the biggest, including whether it is a good idea for Mr Trump to be president.`,
  },
  {
    id: "putin-propaganda",
    title: "How Vladimir Putin's propaganda works",
    author: "The Economist",
    source: "The Economist",
    category: "Politics",
    readingTime: 7,
    image: imageUrl("putin.png"),
    content: `Russia has been driven mad. Could other countries suffer the same fate?

The Descent. By Marc Bennetts. Bloomsbury Continuum; 272 pages; £20. To be published in America in May; $30

While Ilya Yashin, a Russian opposition politician, was in prison, a fellow inmate told him that Ukraine was "full of Nazis". Where did he hear that? "From the telly." Asked whether he believed state television, the inmate snorted: "What am I, a fool? The telly's full of lies!"

To understand how Vladimir Putin dominates Russia so utterly, you must study how his propaganda works. Not everyone believes it all the time. But because it is ubiquitous and unrelenting, it can cripple people's capacity for rational thought, argues Marc Bennetts, a longtime Moscow correspondent for the Times.

Under Mr Putin, many Russians have "been gripped by a collective delirium" akin to a medieval witch hunt. They know their government lies. Yet they believe the president will save them from threats—a NATO invasion, a Ukraine run by Nazis—for which the only evidence is pro-Kremlin TV. In "The Descent", Mr Bennetts tries to explain how this happened.

He interviews Gleb Pavlovsky, one of the despot's early spin doctors, who helped engineer a smooth transition from Boris Yeltsin, Russia's first president, to Mr Putin. Pavlovsky set up focus groups to find out what Russians thought an ideal leader might look like. The surprising answer was Max Otto von Stierlitz, the codename of a fictional Soviet-era superspy. Mr Putin swiftly learned to play the part of an ex-spook who projected strength but was on the side of the people.

His handlers strained to prevent him from being associated with failure of any kind. That, Pavlovsky told Mr Bennetts, is why Mr Putin never went near the scene of the Kursk tragedy, in which a Russian submarine foundered in 2000 and 118 sailors died. Gradually, they built a myth of an all-powerful decider. If there was a big dispute, only Mr Putin could resolve it.

They promoted an old idea, common in monarchies throughout history, that injustice cannot be the good tsar's fault: it must be his bad officials'. The story of one local administrator illustrates the potency of this myth. Alexander Shestun disobeyed an order to ban protests against a toxic landfill from which crooked apparatchiks were thought to be profiting. Summoned to Moscow, he was threatened by Kremlin bigwigs: back down, or you will be jailed on bogus charges and lose your home. Shestun secretly recorded the conversation and released it on YouTube, naively imagining that this would get the corrupt bigwigs into trouble. Instead, he was jailed for 15 years and lost his home.

Other writers have explored similar ground. But whereas Peter Pomerantsev's "Nothing is True and Everything is Possible" and Marcel Van Herpen's "Putin's Propaganda Machine" looked at the first decade and a half of the new disinformation state, Mr Bennetts charts its evolution into a full-on wartime dictatorship.

As his power grew, Mr Putin was able to turn all the big broadcasters into personal megaphones. They recycled Kremlin hogwash: Ukrainians are crucifying babies! They averted their eyes from unflattering facts. In 2014, when Mr Putin started grabbing bits of Ukraine, an anti-war rally in the heart of Moscow drew 50,000 protesters. A correspondent for NTV, a Kremlin mouthpiece, stood in a nearly deserted street and pretended that only a handful of cranks had turned up. Mr Bennetts asked her why she had lied. "You do your job, and I'll do mine," she snapped.

One aim of Mr Putin's propaganda is to instil a sense of helplessness in ordinary Russians. Mr Bennetts describes an example in a village where a nickel mine was poisoning the water. He saw an elderly villager berate environmentalists who were testing the water for toxins. "Leave us in peace!" she grumbled. Asked whether she was concerned about the risk to her grandchildren's health, she shrugged: "We don't decide anything here. Everything is resolved there, in Moscow. What can we do?"

An intensifying nationalism has supercharged Mr Putin's personality cult. Restoring Russia's "glory" and defending it against imaginary threats stirs widespread patriotic pride. Mr Bennetts meets Arctic fishermen with rotting boats who are elated that Russia has reclaimed Crimea, a sunny peninsula 2,000 miles away that they will surely never visit. Russian liberals see through the cynicism and joke that the wartime "Z" symbol was originally a swastika, but corrupt officials stole half of it.

Russian-speakers in Ukraine are often baffled by relatives in Russia who tell them to disregard the evidence of their own eyes. A journalist in Kyiv wrote to a cousin in Russia to say how frightened she was by the bombing. The cousin told her that it was all staged, all American propaganda.

For Russians, delusion has brought misery. Their country is far poorer, and their lives far less secure, than they would be under an honest ruler. When Mr Putin put the economy on a war footing to avoid personal humiliation in Ukraine, 1,300 Russian schools still had no indoor toilets.

Even at home, Mr Bennetts cannot avoid the madness. His mother-in-law falls for it, and soon "I could barely have a five-minute conversation with [her] before she steered [it] towards Ukrainian 'Nazis' and the 'evil' West." Graft blights his daughter's school. A crony of Mr Putin (who later found fame and death as a mercenary chief) wins a contract to supply school lunches. Dysentery breaks out; state media hush it up. Mr Bennetts gives his daughter packed lunches.

The tools of mass deception that Mr Putin uses are available to other rulers, too. Given how hard it can be for previously normal people like Mr Bennetts's mother-in-law to resist them, it seems plausible that, under the right circumstances, almost any society could fall under the sway of a shameless tyrant.

However, despite dominating the means of persuasion, the Kremlin still needs to bribe or coerce people to attend rallies. To test this, pranksome dissidents in a Siberian city advertised a "pro-Putin" event with no cash handouts and no state-owned firms forcing staff to go. Only half a dozen people showed up.

Some Russians still see hope. One who defected to join the Ukrainian army suggests a way for his compatriots to free themselves from mental subjugation: "Just switch your brains on."`,
  },
  {
    id: "japan-carmakers-trouble",
    title: "Japan's mighty carmakers are in serious trouble",
    author: "The Economist",
    source: "The Economist",
    category: "Business",
    readingTime: 7,
    image: imageUrl("japancarmakers.png"),
    content: `They will need bold thinking to survive

In a doleful press conference last month, Mibe Toshihiro, chief executive of Honda, announced that the Japanese carmaker was on course to post its first net loss since 1957 in its fiscal year ending in March—a failure for which he took personal responsibility. In a sign of his contrition, Mr Mibe said that he would dock his pay by 30%, along with that of his deputy. Honda is not the only Japanese carmaker under severe strain. At an industry event the following week, Mr Mibe issued a stark warning: "The Japanese automotive industry itself is on the brink of survival."

He was hardly exaggerating. Nissan, once the sixth-largest carmaker in the world by sales, is entering the second year of a brutal restructuring, with seven factory closures planned by 2028. A 25% tariff on cars imported into America has bitten into the industry's profits. Yet it is the blistering rise of Chinese competitors that has hit hardest. In 2019 Japanese carmakers accounted for 31% of sales globally; by last year their share had fallen to 26%. The shock has been greatest in Asia. In China itself, sales of Japanese cars have slumped by a third since 2019. In South-East Asia, once a stronghold, their share of the market was 57% in 2025, down from 68% just two years earlier. Japanese carmakers once seemed unstoppable. How did it go so wrong for them?

[CHART:japanchart.png]The heart of the problem is that, even more so than their Western counterparts, Japanese carmakers have struggled with electrification. Many have been sceptical of the staying power of electric vehicles (EVs), which account for a vanishingly small share of their sales (see chart). Conventional petrol vehicles make up more than half of sales for all Japanese carmakers; at beleaguered Nissan it is 80%. Rather than plug-in cars, most have opted instead to emphasise conventional hybrids, which rely on the engine and regenerative braking to power the battery, as the assembly of these fits more easily into a production line built for internal-combustion engines. Japan's carmakers have expressed interest in alternative technologies such as hydrogen-powered cars for much the same reason.

Yet growth in EVs has continued apace, led by Chinese rivals. Sales of EVs, including plug-in hybrids, accounted for 26% of the global car market last year, up from just 3% in 2019. The pace of adoption has been especially brisk in Japan's own neighbourhood: a third of cars sold in Asia are now EVs. It is not just China where they have taken off. In Singapore, 45% of car registrations last year were EVs. In Thailand, where Japanese carmakers have had supply-chains in place as far back as the 1960s, the share is 20% and rising.

Faced with all this, the Japanese have belatedly begun ramping up their electric offerings. In 2024 Honda launched its first mass-production EV, jointly developed with General Motors, an American car giant. The trouble is that making EVs—which are, in effect, computers on wheels that rely far more on software than complicated hardware—does not play to Japan's traditional strength in mechanical engineering. Honda's Mr Mibe nodded to this in his press conference, pledging that his company would invest more in software features such as advanced driver assistance systems (ADAS).

Japanese carmakers are experimenting with various ways of obtaining software expertise. Last year Nissan struck a partnership with Wayve, a British startup that is developing self-driving technology, to improve its ADAS. But the record of such arrangements has been mixed. Last month Honda gave up on a joint EV project with Sony, a Japanese technology giant. The pairing of two "proud" companies looked fraught from the start, says Shibusawa Ken of Commons Asset Management, a Japanese investment firm which recently sold Honda's shares after backing the company for 17 years.

New investments have added cost for Japanese carmakers even as their total sales remain below their pre-pandemic peak, squeezing profit margins. According to Bernstein, a broker, the industry's per unit fixed costs—including research and development and the depreciation of equipment—are 78% higher than they were a decade ago. Rising wages and inflexible employment laws in Japan have made it difficult to keep costs under control.

The one exception to all this gloom is Toyota, the world's biggest carmaker by both sales and net profit. Its position as the global leader in conventional hybrids, in which it holds a 40% market share, has meant it has benefited from the revocation of subsidies for EVs in America under President Donald Trump. Although its chairman, Toyoda Akio, has expressed doubt about the potential scale of demand for EVs, the company has launched several of them exclusively for China, which it has developed in partnership with local firms including BYD and Huawei. That has provided valuable lessons. Alone among Japanese carmakers (and most Western ones), Toyota has managed to maintain a stable market share in China, where it accounts for 6% of sales (BYD, the market leader, holds 13%). An expanded global EV line-up is expected by 2027.

Crash course

Yet one stalwart carmaker and a slate of struggling ones does not make for a healthy industry. Speculation is rife in Tokyo that Japan's carmakers will have to consolidate in order to remain competitive globally. At the end of 2024 Honda and Nissan began talks over a merger that would have created the world's third-largest carmaker by sales, though these later collapsed in acrimony.

The trouble is that, besides a fused Honda-Nissan, it is not obvious there are worthwhile deals to be made. Overlapping models and hard-to-integrate production processes mean that "the whole is less than the sum of its parts when you consolidate," reckons Mike Smitka, an academic who studies the Japanese auto industry. Toyota would be in the strongest financial position for dealmaking. But it seems to prefer strengthening its grip over the industry through minority stakes; it already owns 21% of Subaru and 5% of both Mazda and Suzuki (which mostly sells in India). It may not have much to gain from an expensive acquisition of one of its struggling competitors. "It will be hard for [Nissan] to keep their current shape," says a person close to Toyota. "But their business is not appealing [to the car colossus]."

In lieu of mergers, Japanese carmakers are finding other ways to collaborate. Ivan Espinosa, Nissan's boss, speaks of joint procurement standards for commoditised inputs, such as wiring or steel, lending the carmakers greater pricing power with suppliers. "Dialogues are happening now in the industry that wouldn't have happened two or three years ago," he says. Honda and Nissan could still find ways to combine parts of their operations, such as by integrating their battery supply chains. It is too early to count out Japan's battle-hardened carmakers. But they will need bold thinking to survive.`,
  },
  {
    id: "american-luxury-booming",
    title: "From Ralph Lauren to The Row, American luxury is booming",
    author: "The Economist",
    source: "The Economist",
    category: "Business",
    readingTime: 6,
    image: imageUrl("ralphlauren.png"),
    content: `It is a miserable time for most purveyors of fancy handbags and pricey frocks. Following a post-pandemic boom, spending on personal-luxury goods worldwide has contracted in both of the past two years, according to Bain, a consultancy. War in the Middle East—and the resulting shock to the global economy—has luxury brands braced for further gloom. On April 13th LVMH, the industry's colossus, reported that sales of its clothes and leather goods in the first three months of 2026 were down by 2% from the year before—the seventh consecutive quarter of decline.

Yet one group of labels has been surprisingly perky lately: American ones. Europe's maisons have long dominated the luxury business. Lyst, an e-commerce site, maintains a ranking of the hottest labels in fashion based on sales, online searches and social-media activity. Five years ago none of the top ten was American. Now three make the cut—Ralph Lauren, Coach and The Row. In the final three months of 2025 Ralph Lauren's revenue rose by 10% year on year. Sales at Coach were up by 25%, resulting in a record quarter for its owner, Tapestry. The two companies' share prices have risen by 89% and 135%, respectively, over the past year. What is behind the new world's newfound success?

Shifts in strategy are part of the explanation. At Ralph Lauren, a years-long turnaround is now paying off. It has refreshed its product line-up, taken greater control over distribution and revamped its tired shops. Many of its larger stores now house coffee bars and restaurants; David Lauren, the founder's son, who oversees branding and innovation, says that people visit "because they love the ambience". Average selling prices (what shoppers pay after discounts) have risen every quarter for almost nine years. The firm also now spends over 7% of its sales on marketing, twice the figure a decade ago. With clear results: every fashion influencer worth their ring-light has one of the brand's pony-logo caps.

More recently, Coach has followed a similar playbook. It has abandoned crumbling malls and department stores and shed its reputation as the go-to label for discounted bags. It now sells almost 90% of its products directly to customers. Ads featuring stars such as Selena Gomez, and a push into customisable charms for bags, have lured younger shoppers.

Other forces are giving these American labels a leg up. Preppy looks and '90s throwbacks are in vogue. Online searches for Ralph Lauren's quarter-zip sweaters jumped by 132% year on year in the last quarter of 2025, reckons Lyst.

The global economy is on the side of the American brands, too. Shoppers in America have been more resilient than those elsewhere. Luxury spending rose slightly there last year, even as it declined in Europe and Asia, where old-world labels dominate. The strengthening of the euro over the past year has also made it dearer for tourists in Paris and Milan to splurge on French and Italian brands.

That American designer brands on the whole tend to be less expensive than those from European rivals has also helped at a time when stretched consumers around the world are looking for cheaper alternatives. Sandeep Seth of Tapestry argues that the $200-500 that most Coach bags sell for is the "sweet spot" right now. JPMorgan Chase, a bank, reckons that European luxury labels' bags now cost 5-10 times those from Coach, up from 2-3 times 15 years ago.

Cashmere-clad European bosses pooh-pooh this: "affordable luxury", they say, is an oxymoron. Others beg to differ. Patrice Louvet, Ralph Lauren's chief executive, contends that luxury is defined not by price, but "by the experience you provide".

Besides, American brands have shown that they can occupy the swankiest end of the luxury industry when they choose to. Ralph Lauren caters both to the merely well-off, with its Polo products, and the stinking rich, with its Purple Label line. Then there is The Row, which sells $5,000 bags and $12,000 coats. The brand, founded by Mary-Kate and Ashley Olsen, two former child actors, focuses on the kind of understated designs that have thrived amid growing demand from today's uber-rich for so-called "quiet luxury". The ability of the Olsen twins to persuade stars such as Kendall Jenner and Zoë Kravitz to wear their products, while restricting distribution, has created a sense among shoppers that they must earn the "right to buy", says Flavio Cereda of GAM, an asset manager.

None of this will make America the new centre of gravity for luxury. Three of the world's four top fashion shows still take place in Europe. And plenty of American labels are struggling. Tapestry has failed to turn around Kate Spade, another fashion business it owns, and last year sold Stuart Weitzman, a shoe brand, amid flagging sales. Capri, a rival American luxury group, has struggled as Michael Kors, its biggest label, has fallen out of favour with shoppers. After being blocked by trustbusters from merging with Tapestry in 2024, Capri sold Versace to Prada to reduce its debts.

For their part, European labels are doing everything they can to revive sales. Many, including Chanel and Gucci, have hired new creative directors in the past year or so. Having irked shoppers with hefty price increases as luxury spending soared after the pandemic, they are now making up for it by adding cheaper wares to their line-ups and holding constant the prices of high-end ones. Whether or not this revives their fortunes, the old assumption that only Europe can do luxury looks increasingly outmoded.`,
  },
  {
    id: "how-dangerous-mythos",
    title: "How dangerous is Mythos, Anthropic's new AI model?",
    author: "The Economist",
    source: "The Economist",
    category: "Technology",
    readingTime: 5,
    image: imageUrl("mythosclaude.png"),
    content: `Dario Amodei's warnings should not be dismissed

When in 2019 OpenAI finished training a new large language model called GPT-2, the artificial-intelligence lab initially declared it too dangerous to be released. Dario Amodei, then OpenAI's research director, insisted that the world needed time to prepare.

In the end, it was released later that year. A sequence of far more powerful models have since been developed without unleashing Armageddon. Yet seven years on, Mr Amodei, now the head of OpenAI's bitter rival, Anthropic, is worried once again. On April 7th he declared that the latest addition to his lab's Claude family of models, dubbed "Mythos", is too powerful to be made widely available just yet. This time, he might be right.

According to Anthropic, the capabilities of Mythos are "substantially beyond those of any model we have previously trained". The lab says it is particularly alarmed by the system's ability to find software vulnerabilities and either fix them (if set to work as a defender) or exploit them (if acting as a hacker).

Such claims ought normally to be taken with a pinch of salt. Anthropic built the model, ran the tests—and stands to benefit from the perception that its system is far more brilliant than anything to have come before it. The lab has been on a roll lately. On April 6th it announced that its annualised revenue had reached $30bn, up from just $9bn at the end of last year. It is surely eager to maintain its momentum.

Yet there are reasons to take Anthropic's latest warnings seriously. The first is their gravity: Anthropic says that Mythos has already found severe vulnerabilities in "every major operating system and web browser", including one that had gone undetected for 27 years.

The second is the response of other companies. Alongside the pause, Anthropic announced Project Glasswing, an effort to help companies use Mythos to boost cyber-defences before it is widely released. The participation of leading software developers—including Apple, the Linux Foundation and CrowdStrike, as well as Google, which competes directly with Anthropic in AI—suggests the threat is credible.

Mr Amodei's approach to mitigating the danger is sensible. If given a head start, companies can use Mythos to test unpublished code for weaknesses and fix any before release. Even so, Anthropic has plenty to gain from Project Glasswing. The lab will cover the first $100m of costs arising from the use of the model for the initiative. But eventually it will charge participants five times more to use Mythos than it does for its predecessor, Opus.

That may be a price worth paying. Anthropic's rivals are bound to develop models with similar hacking capabilities sooner or later. Other frontier labs, such as OpenAI and Google, have their own sensible release policies. But open-source labs, particularly those based in China, tend to be less focused on safety.

Hackers are not the only ones who may be miffed by Project Glasswing. America's government has long sought to exploit weaknesses in adversaries' cyber-defences. That has meant hoarding undiscovered vulnerabilities, including in American software used abroad, for use at a time when these "zero days" will have most impact. If Project Glasswing works, it could disarm many of America's cyber-weapons.

That would surely enrage Pete Hegseth, America's defence secretary, who labelled Anthropic a supply-chain risk earlier this year after a bust-up between it and the Pentagon over limits on the use of the lab's models for military purposes (a judge has since temporarily blocked the "Orwellian" designation). Mr Amodei may continue to be a thorn in his side.`,
  },
  {
    id: "global-imbalances-back",
    title: "Global imbalances are back. Who's to blame?",
    author: "The Economist",
    source: "The Economist",
    category: "Economics",
    readingTime: 7,
    image: imageUrl("globalimbalance.png"),
    content: `The suspects look familiar

In the years before Lehman Brothers went bust in 2008, plunging the world into financial crisis, macroeconomists were understandably worried. But they worried about the wrong thing: not over-indebted American banks, but over-thrifty Asian economies. There was a glut of commentary about the "global saving glut". According to this theory, Asia's determination to accumulate dollar reserves was depressing interest rates, tempting Americans to overspend. The upshot was that Asia earned more than it spent, resulting in large trade surpluses. This enabled America to spend more than it earned, reflected in a yawning current-account deficit (which includes the trade deficit and a few other things).

These "global imbalances" are back. And they have inspired a new glut of analysis. In March four prominent economists sent a memo on imbalances to the G7, drawing on a new publication (the fourth "Paris report") by the Centre for Economic Policy Research (CEPR) and the Bruegel Institute, two European think-tanks. This month the IMF released a paper of its own on the topic.

The new imbalances are not quite as big as those of two decades ago. The world's deficit countries, taken together, had a combined current-account gap of 1.6% of global GDP in 2025, according to IMF data, compared with a peak of 2.6% in 2006. But today's debate is, if anything, more heated. President Donald Trump cited America's deficit to justify his "Liberation Day" tariffs last year. President Emmanuel Macron of France, which currently chairs the G7, called China's surpluses "unbearable" on his visit to Beijing in December. When imbalances were discussed 20 years ago, the Paris report points out, economists and policymakers were keen to know "Who was the perpetrator? Who was the victim—and why?" The same questions are being asked today.

One answer to the first question is America's budget deficit. Fiscal easing can deepen trade deficits through a few mechanisms. Tax cuts or higher welfare spending increase American consumption and reduce saving. That can lift interest rates and thus the dollar—which makes exports less competitive, deepening the trade deficit. By raising world interest rates, it can also boost saving in other countries, and their current-account balances.

Other commentators are equally confident that the culprit is once again Asia, especially China. But this time the murder weapon is different: not the rope of reserve accumulation, but the wrench of unfair industrial policy. China subsidises its manufacturers, resulting in excess capacity. What these firms cannot sell at home, they dump abroad. This crowds out local manufacturers, destroying jobs and obliging countries like America to increase their fiscal deficits to restore demand and curb unemployment.

This simple story contains important grains of truth. A paper by the CEPR's Ambrogio Cesa-Bianchi and his co-authors measures the "intensity" of industrial policy from positive citations of it in the earnings calls of companies from 24 countries. The measure correlates with export growth from 2002 to 2019.

But in macroeconomics, the plots are rarely this simple. Since imbalances are driven by saving and investment, they are also driven by expectations. And that can lead to counterintuitive results. In principle, industrial policy need not lead to an overall trade surplus, the IMF points out. Much depends on whether the policy is seen as permanent or temporary, and whether it succeeds in raising efficiency or backfires. If it is seen as a passing success, people will not raise their spending, even as their income temporarily picks up. The resulting increase in saving will improve the trade balance. If the policy is seen as a durable success, permanently improving incomes, people will lift their spending. That need not lead to any change in the trade balance. Exports may indeed take off, but imports will increase to match. Indeed Mr Cesa-Bianchi and his co-authors find no correlation between their intensity measure and a country's current-account surplus.

For industrial promotion to result in reliably higher trade surpluses, they point out, it must be coupled with some kind of "consumption suppression". Many commentators argue that China does just that. Its fiscal conservatism and patchy social safety-net, for example, oblige people to "self-insure" through high saving. The problem with this story is that, as China's surpluses have waxed and waned, consumption suppression has not moved in the same way. Spending on pensions and consumer trade-in schemes (think "cash for clunkers") has increased, even as surpluses have surged. China's fiscal deficit, broadly measured, rose from 12.8% of GDP in 2023 to 14.3% in 2025, estimates the IMF, even as the current-account surplus grew from 1.4% to 3.7%.

Mr Xi, in the study, with the spanner

What has suppressed domestic spending in China is a property slump. Although this slump was triggered by a government crackdown on borrowing by developers, policymakers did not expect housing investment to collapse nor did they want falling home values to depress consumer spending. If China is the culprit for imbalances, it has perpetrated more a blunder than a crime.

Is China also ultimately responsible for America's fiscal easing and the resulting pressure on the trade deficit? Hardly. In the years after the global financial crisis, when the world was short of demand and interest rates were at rock-bottom, it was plausible to argue that America needed big budget deficits to keep employment steady. But in those years China's surplus was shrinking. Since 2021 America has, if anything, wrestled with too much demand, and interest rates have risen in response. Its big fiscal deficits are a political choice not an economic necessity.

The causes of global imbalances are not, then, as clear as some commentators allege. All of the suspects are implicated. The plot is fiendishly complex. But the ending could still be bad.`,
  },
  {
    id: "pakistan-diplomacy-blessing-curse",
    title: "Pakistan's deft diplomacy is an economic blessing. And a curse",
    author: "The Economist",
    source: "The Economist",
    category: "Economics",
    readingTime: 7,
    image: imageUrl("pakistan.png"),
    content: `It allows the country's rulers to put off necessary reforms

DIPLOMATS WOULD say that Pakistan has had a good Gulf war. Friendly relations with both Donald Trump and the Islamic Revolutionary Guard Corps, the elite force that runs Iran, have allowed it to play go-between. Economists are not so sure. When fuel and food prices are climbing as a consequence of the war, Pakistanis' pride in their country's global standing provides only limited comfort.

Pakistan has a record of turning that standing into financial breathing room. The country has not been short of outside help, from American military aid during the cold war and the "war on terror" in the 2000s to Chinese infrastructure lending and cheap loans from Gulf countries more recently. Though its economic buffers are thin, its diplomatic prowess will help it through the latest crisis. But turning geopolitical clout into cash risks perpetuating a cycle of lacklustre reform efforts, poor growth and eventual bail-outs.

The need for foreign support is obvious. Pakistan spends roughly 4% of GDP annually on fuel and fertiliser from the Gulf. With the Strait of Hormuz closed, the government has been forced to introduce fuel rationing. Civil servants are working a shorter week; there have been rolling blackouts in Punjab, the most populous province; cricket matches have been played without crowds. Petrol prices have been raised by 43% and diesel prices by 55%. But this is unlikely to stem the drain of foreign currency. Before the war Pakistan's foreign-exchange reserves covered only about three months' imports.

The war hurts overseas earnings, too. Around half of Pakistanis working abroad are based in the Gulf, mostly in Saudi Arabia and the United Arab Emirates (UAE). These expatriates' remittances are worth around $40bn a year (10% of GDP). The Pakistan Institute of Development Economics, a think-tank, estimates that economic disruption in the Gulf could cut this by between $3bn and $4bn. Unemployment at home is likely to surge as fewer Pakistanis can find jobs elsewhere.

Never before has Pakistan faced a similar crisis with so little room for manoeuvre, argues Murtaza Syed, a former deputy governor of the central bank and ex-IMF official. Every time commodity prices spike, Mr Syed says, it has had to turn to international lenders. In all it has had 25 IMF bail-outs since it joined the fund in 1950. The latest—which is still current—was agreed on in 2024, after the energy shock from Russia's invasion of Ukraine and devastating floods. Pakistan spends more than half its tax revenue on debt service.

Its $138bn of external debt (48% of its total borrowing) is largely split between loans from American-backed multilateral institutions, such as the IMF, the World Bank and the Asian Development Bank, and bilateral loans from China, mostly for infrastructure. The UAE, Qatar and Saudi Arabia have also chipped in, for example with deferred oil payments and short-term deposits at the central bank. Scholars of Pakistani foreign policy have coined the term "strategic rents" for the country's ability to extract payments from allies. "The problem with good relations with America is that it means the IMF is too nice to us," says Miftah Ismail, a former finance minister now in opposition. "That is bad because we always use that space to delay doing the right thing."

That might mean attracting foreign capital by building productive capacity or providing an easy environment to do business. Instead, Pakistan's outsize intelligence and security apparatus has kept America and others interested. Saudi Arabia, with which Pakistan has a mutual defence pact, owns a chunk of external debt. Pakistan sometimes appears close to exhausting this strategy. The Chinese, noting the IMF's experience, have become wary of throwing good money after bad. On April 4th Pakistan's ministry of finance said that the UAE had declined to roll over a $3.5bn loan, requiring the repayment of 18% of Pakistan's dollar reserves and blowing a hole in the current IMF plan. But Saudi Arabia has stepped in with an extra $3bn.

Pakistan faces what Janos Kornai, a Hungarian economist, called a soft budget constraint. Writing many years ago about socialist economies in the old Soviet bloc, Kornai argued that state-backed companies had no realistic prospect of failure. They could limp on for ever, often enriching their patrons and management, in the knowledge that more money would eventually be forthcoming. Pakistan's importance in its allies' strategic plans affords it a similar licence. The military men who run much of the economy know that more funding may appear, whether or not they pursue the reforms that could break the cycle of bail-outs.

Pakistanis have been the victims. In 1995 Pakistan's GDP per person was around 45% higher than India's and nearly twice that of Bangladesh; it is now 45% below India's and 35% below Bangladesh's. Liberal economists had hoped that the current crisis might have been enough to force Pakistan to confront its structural problems. Yet once again the country's geopolitical value has provided an escape route.`,
  },
  {
    id: "gulf-war-asia-crisis",
    title: "How the Gulf's war is becoming Asia's crisis too",
    author: "The Economist",
    source: "The Economist",
    category: "Geopolitics",
    readingTime: 8,
    image: imageUrl("gulfswar.png"),
    content: `Prices, debt, and scarcity will strike a blow against the world's workshop

AS MISSILES AND drones fly across the Persian Gulf, their impact is being felt an ocean away. This war is "an Asian crisis", Vivian Balakrishnan, Singapore's foreign minister, told Reuters last week. Around 80% of the oil and 90% of the gas that usually pass through the Strait of Hormuz are bound for Asian markets.

Poor countries are being hit the hardest. In the Philippines more than 90% of energy imports come from the Middle East; Bangladesh, India and Pakistan receive almost two-thirds of their total LNG supplies via the strait. But rich Asian countries are far from immune. Japan boasts a strategic oil reserve equivalent to 254 days of domestic demand, a buffer built up following the oil shocks of the 1970s. But bus and ferry services across the country have been curtailed for lack of supply. Japanese bathhouses are struggling to make ends meet as fuel costs rise; several across the country have announced temporary or permanent closures. And Yamayoshi Seika, a popular snack-maker, had to temporarily stop production of potato crisps after running out of heavy oil for its fryers.

The strait's closure presents three big risks to Asian economies. The first is rising fuel prices. These will increase costs elsewhere and crimp growth, potentially causing a stagflationary spiral. The immediate pain is being felt by motorists across the region, but especially in South-East Asia. Globally, petrol prices have risen by 14% since the war began; in South-East Asian countries the figure is 42%. Prices in the Philippines and Myanmar have shot up by more than 70%, among the biggest jumps in the world (see chart 1).

[CHART:chartgulf.png]In other parts of Asia, such as India and Bangladesh, the jump has not yet been felt at the pumps—but that is only because their governments control fuel prices. On March 27th the Indian government said that it would slash central excise duties on petrol and diesel in order to keep pump prices from rising. Australia and Vietnam have promised similar measures to absorb higher oil prices. In South Korea, which imports 70% of its oil from the Middle East, the government has imposed a fuel-price cap to limit the damage.

The second risk, therefore, is to Asian governments' balance-sheets. Many already spend heavily to subsidise energy or set fuel prices, but the fiscal room available for such interventions varies enormously. In Indonesia rising fuel subsidies could result in the country breaching its fiscal-deficit cap of 3% of GDP. Investor confidence, already fragile, would erode further. Cash-strapped Pakistan, under IMF scrutiny, has already had to put up fuel prices by 20%. Such pressures could invite unwanted attention from speculators looking for shaky currencies. Japan's finance ministry is already said to be considering intervening in the oil-futures market to prop up the yen.

Regardless of what governments do, some inflation is inevitable. Where governments do not absorb costlier crude, rising energy prices will fuel headline inflation. Crude-importing countries with weak exchange rates and big oil bills, such as the Philippines and Pakistan, will suffer the most. But even in those countries that apply fuel-price caps, the war in Iran will exert inflationary pressure through other channels. Supply-chain disruptions will push up costs in other industries, such as chemicals and logistics.

The biggest inflationary force could come through food. The war has ensnared roughly a third of global seaborne fertiliser trade, which will drive up food prices, especially when the sowing season begins later this year. The Asian Development Bank (ADB) had projected that prices in Asia would creep up by just 2.1% in 2026. It now warns that figure could exceed 5%, depending on how long the war lasts.

If rising prices are an economics problem for Asian policymakers, the availability of fuel is one of politics and geography: a third big problem for Asia. Along with Japan's 254 days of fuel reserves, estimates suggest that China has enough to cover 100 days. Both have started to tap those reserves to ease the strain. But analysis from Kpler, a data firm, suggests the situation is precarious in other parts of Asia. It estimates that the Philippines, Vietnam, and Thailand hold just enough onshore oil supplies to cover about three weeks of normal demand (see chart 2).

[CHART:chart1gulf.png]The looming shortages are already upending entire sectors. Aviation and tourism may be the hardest hit. China and South Korea have imposed limits on jet-fuel exports from their refineries. Airlines across the region have reduced flights. Over the past week, around half of all cancellations globally were flights originating from airports in Asia, according to data from FlightAware, a tracker. Air New Zealand has cancelled 1,100 flights. Governments may intervene with more drastic action. Ferdinand Marcos junior, the Philippines' president, has warned that grounding planes is a "distinct possibility".

Combined with disruptions to other inputs, such as helium and aluminium, the energy shock could sap Asia's economic growth. The ADB predicts that South-East Asia would be hit the hardest with growth rates potentially 2.3 percentage points lower, if the war drags on. In South Asia the bank predicts that growth could fall by 0.8 percentage points. The slowdown would have far-reaching effects: Asia is the global economy's factory floor.

Expect a bigger push into alternative energy. Solar is being rolled out, but that drive could speed up. Many more electric vehicles could start zipping around the cities of South-East Asia. Nuclear power will also get a second wind. This week Vietnam said it will build a nuclear power plant with Russia. But Asia will also fall back to a familiar, dirty source of energy: coal. Japan's government has approved a return to full capacity for coal power plants, lifting a restriction meant to limit emissions. Indian officials worried about electricity demands in the summer have told a coal-fired electricity plant in the state of Gujarat to restart operations.

The push towards coal is driven by concerns about political stability. Asians are sensitive to energy prices and willing to take to the streets over them: transport workers in the Philippines have already launched protests. During the energy shock of 2022, when gas prices soared after Russia invaded Ukraine, political turmoil unfolded in South Asia. In the year to October 2022, around a quarter of all protests in the region were related to food and energy, according to an estimate by Friedrich-Ebert-Stiftung, a German think-tank. After analysing social unrest across 101 developing countries between 2000 and 2020, researchers at the IMF found a clear association between fuel-price increases and protests. These demonstrations can be revolutionary: riots in Sri Lanka, fuelled by high energy prices, contributed in large measure to the government's ousting in 2022. What has begun as an energy shock could become a political one.`,
  },
  {
    id: "gulf-war-uneasy-limbo",
    title: "The Gulf war has settled into an uneasy limbo",
    author: "The Economist",
    source: "The Economist",
    category: "Geopolitics",
    readingTime: 8,
    image: imageUrl("hormuzisshut.png"),
    content: `Fighting is paused, Hormuz is shut and prospects for a deal are uncertain

AMERICA has long turned to economic pressure as a means to coerce Iran. Barack Obama used sanctions to push the regime into signing a nuclear pact in 2015, known as the Joint Comprehensive Plan of Action (JCPOA). Donald Trump withdrew from it in his first term and launched his "maximum pressure" campaign, which fuelled an economic crisis in Iran but failed to produce a new deal.

Mr Trump has now turned to that tool again. This time, however, he is imposing economic pain at gunpoint—and Iran is doing the same to the rest of the world. Each side hopes to force the other to make concessions that will end the third Gulf war. The question is which will yield first.

The war has been paused since April 8th, when America and Iran announced a two-week ceasefire, although Iranian threats mean the Strait of Hormuz is still largely closed to commercial traffic. Delegations from both countries met on April 11th in Islamabad, the capital of Pakistan, which helped broker the truce. A second round of talks may occur in the next few days; the truce may be extended.

Meanwhile Mr Trump has imposed his own blockade, which bars Iranian shipping through the strait. It took effect on April 13th. The Pentagon says it has since ordered ten ships to turn back for Iranian ports, and that all of them complied. The Treasury Department has also said it will not renew a 30-day waiver, issued on March 20th, that permitted the sale of some Iranian oil, an ill-advised effort to bring down oil prices.

The Iranians insist they can endure the pain, as they have in the past. Yet their economy was already in dire shape, with a debased currency, annual inflation above 50%, and billions of dollars in war damage to repair. And a maritime blockade could be more onerous than the sanctions of decades past, which the Iranians often found ways to circumvent.

Oil sales will be the most obvious casualty. At current production levels, if exports are blocked, storage tanks will fill up within two weeks. That will force Iran to trim output, and eventually halt it, which could risk long-term damage to oil wells. The consequences will be felt in other sectors. The soyabeans used to produce nearly all of Iran's vegetable oil and animal feed are imported by sea. Disruption would mean a surge in food prices, already 110% higher in March than a year earlier.

Officials in some Gulf states support the blockade and see it as long overdue. They have fumed for weeks that America allowed Iran to continue exporting oil while theirs remained stuck. Yet the embargo on Iran will not help their own economies, which are losing billions of dollars a day in lost exports, nor solve the energy crisis sweeping the world.

Though futures markets are still surprisingly optimistic about an imminent end to the war, shortages are already hitting the physical market. America may be relatively insulated by its vast oil-and-gas industry, but motorists are paying 29% more at the pump than they did a year ago. Annual inflation jumped to 3.3% in March, up from 2.4% in February. Mr Trump's advisers have warned him that the war must end soon if he is to have any chance of reversing the damage before the midterms in November.

It is hard to know exactly what was said in the first round of talks, which lasted almost 21 hours. A few diplomats, for example, believe that America was willing to allow Iran to charge tolls on vessels transiting Hormuz (which would infuriate America's allies in the Gulf). Others believe it insisted on free passage for all. In some cases, even officials from the same country have heard different readouts.

What seems clear is that Iran's nuclear programme was America's priority—and that the Americans showed some flexibility in their demands. In two previous rounds of talks, the Trump administration insisted that Iran must swear off uranium enrichment altogether. Iran refused. America now seems willing to accept a time-bound moratorium rather than an open-ended ban. Iran would probably accept that, although its negotiators will need to haggle over the duration: America's demand for 20 years seems too long, while Iran's offer of five years is too short.

Yet that is only one of many issues. The most pressing is Iran's stockpile of more than 400kg of uranium enriched to near-weapons-grade. America wants Iran to ship it outside the country. Iran prefers to dilute it in situ. The latter is not inherently problematic, but the details will be crucial: where and when will the down-blending occur, and who will monitor it?

Dust yourself off and try again

That points to a broader concern about a possible deal. If the ban covers only the act of enrichment itself, Iran could continue to develop advanced centrifuges (the machines that enrich uranium), install them in new facilities and research how to turn fissile material into a nuclear weapon—all of which it has done before. When the moratorium ends, it could be well positioned to dash for a bomb. Such issues can be resolved, but they will take time: the JCPOA was the work of two years.

Iran, for its part, came to Pakistan with one clear demand. "All they cared about was money," says one Arab official briefed on the talks. Iran wants America to lift not only "secondary" sanctions, which bar third countries from buying Iranian oil (among other things), but also the primary ones that block American firms from doing business in Iran. That will take time as well, because some are mandated by acts of Congress rather than executive fiat.

To reach a deal quickly, both sides may need to settle for a rough framework. They would stop the war and lift their mutual blockades. Iran would agree to a moratorium on enrichment, and in exchange it could tap billions of dollars of oil revenues frozen in foreign banks.

That would fall short of the permanent peace sought by Iran's leaders and the lasting change in Iranian behaviour desired by Mr Trump. But the alternative is another round of fighting—probably a more destructive one. A third American aircraft-carrier will reach the Middle East soon. So will amphibious-warfare units dispatched from California last month. America could carry out Mr Trump's threats to attack vital infrastructure in Iran, which would do the same in Gulf states. In a battle of economic will, both sides might lose.`,
  },
  {
    id: "crispr-gene-editing-promise",
    title: "Can gene editing deliver on its promise?",
    author: "Ida Emilie Steinmark, The Economist",
    source: "The Economist",
    category: "Science",
    readingTime: 7,
    image: imageUrl("theageofCRISPR.png"),
    content: `Technology Quarterly | CRISPR
Ida Emilie Steinmark explores how the technology could change the world

In early 2005 Rodolphe Barrangou and Philippe Horvath were staring at some very odd bits of repeating genetic code on a computer screen in France. The sequences came from Streptococcus thermophilus, a bacterium that, like other bacteria, often skirmishes with viruses. Rumour had it that these sequences of DNA might help bacteria gain the upper hand in the fight. If they did, the researchers wanted to know all about it. S. thermophilus is one of the microbes used to make yogurt. Stopping it from falling prey to viruses would save Danisco, the foodmaker they both worked for at the time, millions of euros.

They compared the strange sequences from varying strains of S. thermophilus which were resistant to different viruses. In every case, the bits of DNA between the repeated sequences were identical to DNA from the virus to which that strain of bacterium was resistant. The researchers then took bits of DNA from a specific virus and stuck them in between the repeats in a non-resistant strain of S. thermophilus. Remarkably, the strain became resistant. It seemed as if bacteria which survived a viral attack kept chunks of the attacking virus's DNA in their own genomes. These functioned as a rogues' gallery in preparation for future fisticuffs: if the same piece of DNA were seen again, the cell would know it was under attack.

The discovery of this bacterial immune system was big news for the dairy industry, which suddenly had a new way to select bacteria based on desired immunity. Such strains are now the norm in most yogurt and cheese production, a nice commercial pay-off for microbiology. But in 2012 Emmanuelle Charpentier at the Max Planck Institute in Germany and Jennifer Doudna at the University of California in Berkeley took the practical implications of the work much further. The strangely Clustered, Regularly Interspaced, Short Palindromic Repeats, or CRISPR, could be hacked to make cuts at precise sequences in the genome of any organism: yeast, fish, pigs. Or humans.

Their technique worked by introducing into cells the means of making a protein called Cas9—responsible for making cuts in DNA—and a piece of CRISPR-like RNA that tells it which bit to cut. RNA, like DNA, carries a sequence of "bases", and if you know a particular sequence of DNA you can easily design a "complementary" sequence of RNA to put at the end of a piece of CRISPR RNA to which Cas9 will attach itself. When the RNA-plus-protein mechanism finds the matching piece of DNA in the cell's genome, Cas9 makes its cut.

The beauty of imperfection

From there CRISPR takes advantage of the cell's DNA-repair mechanisms. Because cells usually fix damaged sequences imperfectly, the repair process often "knocks out" the targeted gene. This ability to knock out genes sits behind the first wave of CRISPR medicines advancing towards clinics. More sophisticated techniques which make precise edits, or insert new sequences, are now commonplace in labs, and will migrate into clinics as well as seed companies and farms.

Manipulating genes to correct diseases or improve crops are not new ideas. But (especially in medicine) earlier technologies struggled due to being unsafe or prohibitively cumbersome. Building a gene editor took months. With CRISPR even high-schoolers can get hold of editing systems in the time it takes to order RNA sequences online and have them shipped by FedEx. In a short while this technology has been adopted by pharmaceutical giants and become ubiquitous in laboratories, spawning biotechs and inspiring innovations that may prove still more powerful. Governments are tweaking regulations to exploit its potential.

Everything about the technology screams "world-changing". CRISPR offers ways to achieve biological goals—not just medical goals like curbing heart disease, but also agricultural and environmental goals—in ways never before dreamed possible. As yet, though, the world seems largely unchanged. Might CRISPR fall prey to the same pitfalls and disappointments as its predecessor technologies? Or is the transformation it promised within scientists' grasp? This Technology Quarterly will offer answers to these questions.`,
  },
  {
    id: "africa-social-change-no-economic",
    title: "Africa is undergoing social change without economic transformation",
    author: "The Economist",
    source: "The Economist",
    category: "Economics",
    readingTime: 10,
    image: imageUrl("theafricagap.png"),
    content: `It is hard to decide which looks more forlorn, Webster Malupande or the wilted maize stalks around him. A smallholder in southern Zambia, Mr Malupande is one of many farmers devastated by a recent drought that halved production, leading the government to declare a state of emergency. Even before then he struggled to get more yield from his fields. "We do what we can," he says, "but it is never enough."

The next day Hakainde Hichilema is standing in another field, tipping his cowboy hat to the crowd. Zambia's president—who has an MBA and a cattle farm—is inspecting crops grown from drought-resistant seeds. "Climate change is here to stay…We don't need to debate that any more," he says. Using new technology can prevent shocks in future, he continues. More productive farms mean more food and higher rural incomes, which in turn will boost industry. "This is a Godsend," the president says of the new seeds.

Mr Hichilema wants Zambia, whose GDP per person of $1,226 is below the average for sub-Saharan Africa, to be a "prosperous middle-income country" by 2030. He has talked of the need for "structural transformation". That means people swapping farming and rural life for urban, industrial jobs. He wants Zambia—and Africa as a whole—to go through the sort of green revolution seen in Asia and Latin America last century.

It is not the only revolution Africa has done without. Robert Osei, an economist, has written that Ghana developed "without a green revolution, an industrial revolution, or a service revolution of the types seen…in Asia"; the observation applies beyond his homeland. In 2024 the African Centre for Economic Transformation (ACET), a Ghana-based think-tank, likened African economies to "early transformers" in Asia and Latin America. Its "African Transformation Index", which scores countries based on their adoption of technology, labour productivity and diversity of exports, was sobering. "Most African countries are not transforming their economies at a consistent or steady rate," noted K.Y. Amoako, ACET's founder.

Superstructuralism

Underpinning much of this is a lack of productivity growth. If the Africa gap is defined in terms of GDP per person, then closing it could happen via two channels. The first is by having a rising share of workers relative to non-workers. In many African countries that ratio will become more favourable over the 21st century as women have fewer children. But a large "demographic dividend"—like that seen in late-20th-century Asia, where fertility plummeted much faster—is unlikely.

The second channel—increasing how productive each worker is—remains the crucial one. Research by the World Bank has found that growth in total-factor productivity (TFP)—how efficiently labour and capital are combined, and a proxy for the use of technology in production—has been "negligible" on the continent for the past 60 years. This suggests that African economies have grown from increases in labour, capital and natural resources, but not from technology.

It is not that African countries are standing still. Far from it. But social change is happening without economic change alongside. Understanding what is happening is crucial to closing the Africa gap.

In 1960, 15% of sub-Saharan Africa's population lived in cities. Now 43% of people are classed by the UN as urban. The region is urbanising faster than any other. The Economist Intelligence Unit (EIU), our sister organisation, reckons that more than half of Africans will live in cities by 2035. Africa will have six cities of over 10m and a further 17 of over 5m.

On the face of it this is a repeat of the global shifts from rural to city life. But African urbanisation is happening in countries poorer than has been the norm elsewhere. And elsewhere more productive farms encouraged urban migration, with less need for farmhands to till fields. Again Africa is different. Its urbanisation looks more like an alternative to rural development than a consequence of it.

[CHART:africachart.png]Today a little more than half of workers in sub-Saharan Africa still labour on farms, about the share in western Europe two centuries ago. They typically work unproductive plots of less than two hectares (five acres) using methods more suited to the 19th century. The "value-added" per worker in sub-Saharan Africa, a measure of productivity, is less than half the global average, and less than one-fiftieth of the places with the most productive farms. Africa's cereal yields, another measure of productivity, are less than half the average in the rest of the world. And though production has increased since 1980, this has largely been because Africans are farming more land, not farming it more productively. Between 1980 and 2018 South Asia more than doubled cereal yields without using any more land. In sub-Saharan Africa yields tripled, but the land used more than doubled.

Though there are hi-tech commercial farms in parts of Africa, most small farms are low-to-no tech. Fertiliser use is a tenth of that in Asia. Only 3.5% of agricultural land in sub-Saharan Africa is irrigated. A lack of cold storage means that much food is wasted; in Nigeria 45% of produce rots. Christopher Udry, an economist based at Northwestern University in Illinois, notes how, in America's Midwest, farmers just 80km apart may use different seed varieties. But in Africa, "We don't have seeds optimised for every 50 miles, we have seeds optimised for the continent."

Less than 5% of agricultural land is irrigated

African policymakers and donors have tried to encourage smallholders to adopt better technology. But it has proved difficult. In a review of the evidence on technological adoption published in 2024, Mr Udry and Tavneet Suri of MIT found that "there is no single binding constraint". Mr Malupande, the Zambian farmer, has barely any savings to invest, no access to finance and little option but to buy the generic seeds on offer from state-subsidised schemes.

Small surprise that some farmers, or at least their children, are upping sticks. In a lecture in 2024 Mr Udry showed that, in a sample of 200,000 plots in six African countries, yields fell by 4-5% per year between 2008 and 2018. After mulling many explanations—such as changing weather, land degradation, nearby conflict—he concluded that it was because the farms were being worked less. Farmers, and their children, are opting to try their luck elsewhere. Yields declined most in farms closest to cities, suggesting that there is a flow of erstwhile farmhands from the fields to the hustle on the margins of the urban economy.

The share of Africans working in the service economy has risen from 26% to 37% over the past three decades, more or less mirroring the decline of the share in agriculture from 64% to 52%. However, these jobs are not in corporate back offices. They are casual work in shops, markets and building sites. McKinsey, a consultancy, notes that service-sector productivity in Africa is less than half that in Latin America, and lower than in India.

Trouble at mill

So far manufacturing has not offered the plethora of jobs seen in other parts of the world. Only 11.5% of sub-Saharan African workers are employed in industry, marginally higher than the 9.9% share in 1991. Why manufacturing has struggled to take off is hotly debated. Africa has for centuries had lots of land and a scarcity of labour, the opposite of Asia. At independence economies were geared to resource extraction. And perhaps because unproductive farms mean more expensive food, it seems to cost more to employ Africans than it does to employ Asians. Research by the Centre for Global Development (CGD), a think-tank based in Washington, has found that in Africa labour costs were on average roughly twice as much as a country's GDP per person, whereas in Bangladesh, for instance, they were roughly the same.

[CHART:africachart1.png]In 2021 Xinshen Diao and co-authors at the Washington-based International Food Policy Research Institute analysed what they call "Africa's manufacturing puzzle". Using data from factories in Ethiopia and Tanzania, they find a dichotomy: highly productive plants use lots of hi-tech equipment but few workers, and many less productive plants use lots of people and little kit. This is not what happened in Vietnam and Taiwan, they note, where labour was absorbed into productive factories—creating a flywheel that helped boost GDP per person over many years.

The authors suggest that this is primarily because, to be globally competitive and plug into international supply chains, factories need to adhere to high technological standards. "The choice that African manufacturers seem to face is either to increase productivity or to increase employment."

The implication is that Africa was late to the party; cheap labour may not be the advantage it once was. "The escalator is slowing, although it will not stop altogether," says Alan Gelb of CGD.

For some, manufacturing is special because it has historically employed lots of people globally and had positive spillover effects. In an article about Mauritius, which successfully transitioned from a poor, sugar-dependent economy in the 1960s to one based on textile manufacturing, Joe Studwell, author of "How Asia Works", writes, "The lesson about the special role of manufacturing in developing countries ought to be clear to every African state. And yet the continent has almost no other examples of governments developing and deploying coherent manufacturing strategies."

It may be the case that Africa's development will look more like South Asia's than East Asia's. A paper by Tianyu Fan of Yale University and co-authors, entitled "Growing like India", noted that Indian development has come in part from improving productivity in non-traded service sectors, such as retail, hospitality and property, rather than export-oriented manufacturing. This suggests that Africa could follow the same path, given its large services sector. The authors imply, however, that the cost could be high levels of inequality and joblessness, as seen in India.

A different route

"The general process of African transformation—which seems to be bypassing an industrialisation stage—is probably not just a temporary phenomenon," argues Douglas Gollin of Tufts University. "What's much less clear to me is that this alternative path is suboptimal." He believes that development economists can be too focused on what is happening in parts of the economy, such as farms or factories, and not enough on general market frictions that hinder productivity. He would like more attention on removing barriers to trade, specialisation and the allocation of capital wherever it is most productive.

The fact that Africa is following an idiosyncratic path does not mean it is headed for a dead end. But whatever route it is on, it needs more productive firms. Even if the continent is not having a green or an industrial revolution, it will still need a commercial one.`,
  },
  {
    id: "gulf-6trn-treasure-chest",
    title: "War will drain the Gulf's $6trn treasure chest",
    author: "The Economist",
    source: "The Economist",
    category: "Economics",
    readingTime: 8,
    image: imageUrl("treasure.png"),
    content: `The conflict complicates life for the custodians of Middle Eastern oil fortunes.

For decades the Gulf's sovereign-wealth funds have been among the quietest and most powerful players in global finance. They have bought football clubs, skyscrapers and chunks of Wall Street's biggest names. They have backed tech startups in California and infrastructure in Asia. And they have done it all with the patience that comes from sitting atop rivers of petrodollars. Now the region's war with its neighbours threatens to drain a treasure chest worth some $6trn—and to rewrite the rules by which it has been managed.

The Gulf's six main funds—the Abu Dhabi Investment Authority, Mubadala and ADQ in the United Arab Emirates; the Public Investment Fund in Saudi Arabia; the Qatar Investment Authority; and the Kuwait Investment Authority—have long operated on a simple bargain. Oil revenues flowed in, a portion was saved, and the surplus was deployed abroad to diversify national wealth away from hydrocarbons. The funds grew into giants. The PIF alone has almost quadrupled its assets since 2015, to around $940bn. Abu Dhabi's constellation of funds manages more than $1.7trn between them.

That scale has made them indispensable to global capital markets. When Credit Suisse wobbled, a Saudi bank stepped in. When SoftBank needed a lifeline for its Vision Fund, the PIF wrote the cheque. When Manchester City or Newcastle United changed hands, Gulf money was behind it. The funds have become, in effect, the world's most patient lenders of last resort.

But war changes the arithmetic. The current conflict has already pushed defence spending across the Gulf to record levels. Saudi Arabia's military budget is set to exceed $90bn this year, the UAE's has climbed above $30bn, and Qatar is rearming at a pace not seen in decades. At the same time, the region's governments are ramping up domestic infrastructure projects—from NEOM in Saudi Arabia to the expansion of Abu Dhabi's cultural district—that were already straining public finances before the fighting began.

The result is a squeeze from both ends. Oil revenues, though still healthy, are no longer sufficient to fund both the guns and the butter. And the funds, which were designed as long-term savings vehicles, are increasingly being tapped as short-term piggy banks.

A matter of mandate

Consider the PIF. Once a sleepy holding company, it has been transformed under Crown Prince Muhammad bin Salman into the engine of Saudi Arabia's Vision 2030 programme. It now owns stakes in everything from Uber to Lucid Motors to the LIV Golf league. But its mandate has shifted from pure financial return to a mix of investment and domestic development. Roughly two-thirds of its spending now flows into projects inside Saudi Arabia itself. The war has only accelerated this inward turn.

Abu Dhabi has taken a different path. Its funds remain more globally focused, with ADIA in particular sticking to its traditional role as a diversified institutional investor. But even here the pressures are mounting. Mubadala has increased its exposure to defence and dual-use technologies, betting that the region's security needs will generate long-term returns. ADQ has been tapped repeatedly to stabilise domestic banks and utilities. The lines between sovereign investor and state bailout fund are blurring.

Qatar's QIA, flush with gas revenues, has remained relatively insulated. But even it is being drawn into the vortex. The emirate's role as a mediator in the current conflict has come with financial costs, from humanitarian aid to reconstruction pledges. And Kuwait's fund, long the most conservative of the bunch, faces the awkward reality that its home government is increasingly reliant on transfers from the fund to balance the books.

The squeeze is being felt in global markets. Deal-making by Gulf funds slowed sharply in the first half of this year, according to data from Global SWF, a consultancy. Investment volumes dropped by roughly a third compared with the same period in 2024. Several high-profile transactions—including a mooted stake in a European football league and a bid for an American defence contractor—have been quietly shelved.

Some of this is cyclical. The funds are waiting for oil prices to stabilise and for clarity on the war's trajectory. But some of it is structural. The shift towards domestic investment means less money is available for foreign acquisitions. And the rise of geopolitical scrutiny—particularly in America and Europe—has made large cross-border deals harder to pull off.

The political dimension is particularly tricky. Washington has grown more wary of Gulf capital in sensitive sectors, from semiconductors to artificial intelligence. London has tightened rules on foreign ownership of critical infrastructure. Brussels is debating new screening mechanisms. The Gulf funds, which once moved with ease across jurisdictions, now find themselves navigating a thicket of national-security reviews.

This has pushed them towards alternative markets. Asia, and particularly China and India, has become a growing focus. So has Africa, where Gulf money is backing everything from mining ventures to renewable-energy projects. The strategy is to diversify away from Western markets that are becoming less welcoming, while building economic ties with regions that may matter more in the long run.

Yet diversification has its limits. The sheer size of the funds means they need deep, liquid markets to deploy capital at scale. For all their ambitions in Asia and Africa, the bulk of their holdings remain in America and Europe. And the returns on those holdings are increasingly shaped by the geopolitical currents they are trying to escape.

The bigger question is what the war means for the Gulf's long-term financial model. The funds were built on the assumption that oil revenues would provide a steady surplus for decades to come. That assumption is now being tested. The energy transition, though slower than many expected, is real. Demand for oil will eventually peak. And the costs of defending the region's wealth—both literally, through military spending, and figuratively, through economic diversification—are rising.

Some in the region argue that the war is a wake-up call. It has exposed the vulnerabilities of an economy still heavily dependent on hydrocarbons. It has shown that even the richest of Gulf states cannot insulate themselves from regional instability. And it has made clear that the funds, for all their power, cannot simply buy their way out of these challenges.

Others take a more sanguine view. The Gulf has weathered wars before. Oil prices, if anything, tend to rise during periods of instability, cushioning the blow to government finances. And the funds, though stretched, remain enormously wealthy. Even after a decade of heavy spending, their combined assets would take generations to exhaust.

The truth probably lies in between. The Gulf's treasure chest is not about to disappear. But it is being reshaped by forces its custodians cannot fully control. The funds will continue to shape global markets, but they will do so from a position that is both more powerful and more constrained than before. The era of easy, quiet, patient capital may be drawing to a close. What replaces it will depend on how the region, and the world, navigates the years ahead.`,
  },
  {
    id: "tax-revolt-america",
    title: "A tax revolt is under way in America",
    author: "The Economist",
    source: "The Economist",
    category: "Politics",
    readingTime: 8,
    image: imageUrl("taxrevolt.png"),
    content: `Americans are taught that their country was founded in revolt against unfair taxes. (Historians usually argue it was more complicated.) That idea hits harder around April 15th, the deadline for filing tax returns. This year it feels especially apt. If the mantra of the Boston Tea Party was "no taxation without representation", the current mood in American politics might be summed up by dropping the second half of that slogan.

Democrats and Republicans alike seem to be concluding that swathes of Americans should pay almost no income tax at all. To fund the state, many on the left would squeeze the richest few, while many on the right would hit foreigners with tariffs. Neither revenue pool is likely to cover America's expenses, so the result would be even larger budget deficits.

Republicans' dislike of taxes is longer-standing and better known. Last year's One Big Beautiful Bill extended expiring tax cuts from Donald Trump's first term and added more giveaways, including the enormously popular "no tax on tips" provision. That will cost several trillion dollars over the next decade. Meanwhile, Mr Trump has cut around 25,000 employees from the Internal Revenue Service, making it easier for the rich to dodge taxes.

Lately Democrats have begun to respond in kind. Senators Cory Booker and Chris Van Hollen unveiled tax plans last month. Each would sharply increase the number of Americans paying no federal income tax.

[CHART:taxchart1.png]Mr Booker's plan more than doubles the tax-free standard deduction, to $37,500 for single filers and $75,000 for married couples—a benefit that extends up the income scale to the well-off. He also proposes a range of tax credits aimed at poorer Americans, alongside higher rates on top earners to help pay for them (see chart 1). Even after those offsets, independent scorekeepers put the cost at $5trn-7trn over the next decade, roughly double that of Mr Trump's effort. (Mr Booker insists he would find the rest of the money by closing loopholes and taxing corporations more.)

Mr Van Hollen's plan has a similar shape, but a less eye-popping price tag. He would eliminate income taxes for singles earning below $46,000 and couples earning below $92,000, before phasing those giveaways out for higher earners. His plan is roughly deficit-neutral, as those tax cuts are paired with hefty surtaxes on those earning more than $1m a year.

Neither proposal has a realistic chance of becoming law any time soon: Democrats control no branch of the federal government. But they do indicate the party's direction of travel. Messrs Booker and Van Hollen are both not-so-subtle presidential aspirants. Mr Van Hollen's plan in particular, with its less fantastical numbers, has attracted a broad set of co-sponsors from both the left and centre of the party.

If Democrats did regain control of both Congress and the White House in 2028, even Mr Van Hollen's tax cuts would sit uneasily with the party's other priorities. His $1.5trn in progressive tax rises might pay for those cuts, but would leave little for anything else—such as undoing cuts to health and food assistance in Mr Trump's tax bill (which would cost a similar amount) or paring back tariffs (which could cost even more). Democrats might have to ditch much of their spending agenda—or turn to more radical options, such as wealth taxes. Mr Van Hollen backs the latter. He is a co-sponsor of a bill from Elizabeth Warren, another Democratic senator, that would impose a 2% annual tax on fortunes over $50m.

Don't tread on me

From one angle, these proposals do not differ much from classic Democratic offerings: they redistribute from the wealthy to the rest and add a dollop of deficit spending. But there is a difference. When Joe Biden had the chance to spend big, he directed money towards social programmes and industrial policy. Cutting taxes instead is a departure. Grover Norquist, a Republican campaigner and America's arch-tax-cutter, evinces a certain smugness about the shift, calling Democrats' new enthusiasm for tax cuts "a sign of weakness" in their worldview. What has changed?

Democrats in Washington usually point to two things: the "affordability crisis" and the immense popularity of "no tax on tips". Voters, they argue, are desperate for help with the cost of living, even though wage growth has kept pace with prices. The simplicity of a "no tax" message helps reach even sceptics. With Mr Trump causing daily chaos in the White House, this is no time to sniff at big, bold, popular ideas. Still, "no tax on tips" is a relatively cheap policy—there is not that much income in tips. Extending that logic to every dollar earned has a whiff of "nerds copying the jocks", as one Democratic fiscal wonk puts it.

A more cynical explanation is that, as the Democrats' base has grown richer, it has become harder to reach with most forms of social spending. Mr Booker's plan offers an appreciable income boost to those in the top fifth of the income scale, and even the top tenth. The very richest, of course, are still squeezed.

[CHART:taxchart2.png]On a deeper level, Democrats' support for tax cuts reflects a recognition that distrust in government is widespread. Elon Musk's DOGE may have been a Republican project, but anxieties that tax dollars are being wasted, that the rich are getting off scot-free, and that the wrong people are in charge are common on the left, too.

It is no surprise that virtually any proposal to lower taxes polls well. A recent Economist/YouGov survey found that two-thirds of the public favour the core components of Mr Booker's plan. More notable is the breakdown in social consent for taxation. The share of Americans who think the income taxes they pay are fair is near the lowest on record, according to Gallup, which has asked the question since 1997 (see chart 2). The only comparable period was at the end of Bill Clinton's presidency, when America was running a budget surplus and arguably did have room for tax cuts. Today's fiscal environment could hardly be more different.

This discontent is remarkably broad-based. Democrats and Republicans alike think they are overtaxed, as do both rich and poor. YouGov's polling finds that around 60% of Americans at every income level think they are taxed too much—despite being taxed at very different rates.

[CHART:taxchart3.png]Statehouses are hearing this, too. Many, citing strong economic growth, have cut taxes in recent years (see chart 3). Enthusiasm is building to go further and faster, leaving some observers wary. "Most have done so responsibly thus far," says Jared Walczak of the Tax Foundation, a think-tank. "But they now risk overreaching and making reductions they cannot afford."

A wave of localities is pushing through property-tax exemptions for retirees. Florida is flirting with abolishing non-school property taxes altogether. Ohio has a possible ballot initiative to scrap them in all forms. Keisha Lance Bottoms, a Democratic candidate for governor in Georgia, has backed eliminating income taxes for teachers. California is mulling a "one-time" 5% wealth tax on billionaires.

Doubtless, the more politically successful of these ideas will enter the national debate. Politicians of both parties seem increasingly inclined to indulge a public that is souring on taxation. Yet with a gaping budget deficit and an ever heavier debt burden, America can ill afford a new tax revolt.`,
  },
  {
    id: "guardiola-last-city-season",
    title: "If this is Guardiola's last City season he will be as hard to replace as Ferguson at United",
    author: "Jamie Jackson, The Guardian",
    source: "The Guardian",
    category: "Sport",
    readingTime: 6,
    image: "https://i.guim.co.uk/img/media/5e9e8a366d7b5dbc4a104c1e0db1bc816e7e919f/29_60_1020_816/master/1020.jpg?width=620&dpr=1&s=none&crop=none",
    content: `Manager goes into Sunday's showdown with Arsenal as a subplot bubbles regarding whether this is a farewell title tilt

Manchester City versus Arsenal on Sunday is a showdown for the ages. Second hosting first at what is likely to be a febrile Etihad Stadium might well be scripted by a Hollywood studio. Enter Pep Guardiola and the box-office subplot of whether this could be his swansong season and, as such, a farewell tilt at the championship of an epoch-defining period piloting City.

Lose to Arsenal and Guardiola's hope of a seventh crown will be all but extinguished. He would have "only" the FA Cup left to add to 16 major honours won while in charge at City, the last being last month's fifth League Cup triumph – over Arsenal. Defeat the visitors, however, and you would not bet against Guardiola leading his team home for a grandstand finish to the campaign – and his tenure. City would be only three points behind Arsenal with an extra match to play.

Either scenario, though, may not affect Guardiola's future. The Catalan has a recently-signed contract until summer 2027, yet there are numerous signs he may exit 12 months early. Asked a fortnight ago whether City's hierarchy had asked him for clarification regarding his future, Guardiola stonewalled. "I spoke about that in the past many, many times," he said.

Except the question was purposely phrased differently to previous inquiries. Previous ones wondered if the chair, Khaldoon al-Mubarak, and the rest of the executive had, unsolicited, been informed by Guardiola that he would see out the full length of his deal. This one asked if Mubarak et al had approached him. A nuance, maybe, but a prescient one given the international break was in late March, two months before the end of the season and a summer when a new manager has to be hired if the 55-year-old does indeed leave. Put simply: surely the club would need to know by then so succession plans could be put in place.

Rewind, too, to Guardiola's celebrations after City defeated Arsenal at Wembley in the Carabao Cup final. Was there an extra joy and relief in his demeanour due to the triumph meaning he will leave in the close season as a winner, whatever occurs in the league and FA Cup, in which City face Southampton in next Saturday's semi-final? If there is an element here of reading the runes, the talk at the Etihad Campus is also that of Guardiola signing off in May.

When Guardiola signed his current terms in November 2024, during the worst slump of his City incumbency, he told the club's website: "I have a really special feeling for this football club." But to the media he was more candid: "I want to be honest, I thought this [season] should be the last one. But the problems we had in the last month, I felt now was not the right time to leave. I didn't want to let the club down. I felt I could not leave now, simple as that." That followed an off-the-cuff remark to reporters three years ago, during the victorious Club World Cup campaign in Saudi Arabia, that he had "completed" City, this coming six months after the treble had been claimed.

The caveat here is that Guardiola can be emotional, and that his decision to sign his last two contracts contradicted what those close to him believed he would do at those junctures: walk away. If Guardiola does leave, however, replacing him will be a challenge for the hierarchy as difficult as Manchester United's when replacing Sir Alex Ferguson in May 2013. The Scot's successor, David Moyes, was sacked 34 league games into a six-year contract, and the club has had five more managers, with Michael Carrick the sixth temporary appointment. Unlike United, a club that 13 years later still has shaky foundations, City are a slickly-run organisation.

Mubarak maintains Guardiola, or any manager, can never be more important than the club's best-in-class structure. So whoever takes the hotseat next would walk into an elite culture on and off the field, and a squad repurposed by Guardiola since last season's nadir. "Apart from Arsenal away [1-1] and Old Trafford [losing 2-0], most of the games that we played we played much better than our opponents," he said. "Three or four games we weren't but the rest have been good. Considering new players and many things, we work a lot and make them understand what is required at the club so I'm satisfied."

Beyond all the silverware and records, this may be the greatest legacy of Guardiola's glittering 10 years in east Manchester.`,
  },
  {
    id: "museums-duty-inspire-creatives",
    title: "Museums have a duty to inspire the creatives of the future. At V&A East, I've made that my mission",
    author: "Gus Casely-Hayford",
    source: "The Guardian",
    category: "Culture",
    readingTime: 7,
    image: "https://i.guim.co.uk/img/media/18eff26728711a7930dccfed06ddc8cfdb4aaa26/79_0_3335_2668/master/3335.jpg?width=620&dpr=1&s=none&crop=none",
    content: `It breaks my heart to see young people disengaged when so much inspiration is within reach. I want our new museum to bridge that gap

One of the most affecting of the many artist commissions that have found a home in the circulation spaces of the new V&A East museum is an exquisite indigo, cobalt blue and cyan stained-glass window, Towards a Civic Museum.

Part of our series of New Work commissions, it was created by the Cuban artist Tania Bruguera in extended consultation with a dozen young east Londoners from our V&A East Youth Collective. It is an unusual piece of stained glass, at once a map of the four boroughs that bound our site on the Olympic Park and a list of wishes, a contract between east London and V&A East. Created in the post-pandemic period, it advances aspirations, something I imagine that all reasonable museum professionals would wish for our sector: that we are open, accessible, useful, relevant and engaged. That we care for and reflect the needs of the communities we serve. That we are transparent, encourage advocacy, demonstrate generosity, equity, accountability, sustainability and – critically – a willingness to collaborate.

When I first saw the work, I came away thinking that these are the right institutional aims, in spirit timely, but simultaneously timeless. The idea of wanting to make a meaningful difference to young people's lives was a core aspiration of Henry Cole, the 19th-century founder of the V&A. But as Bruguera and her cohort of young consultants agreed, the somewhat patrician Victorian vision of how to achieve that no longer sits comfortably with what many want from museums. We want public institutions that inspire and reflect us, all of us; institutions that are not just made for us, but that are created with and by us, too.

[IMG:https://i.guim.co.uk/img/media/179b01f000f1f6214fe22b71969c71146d9b6eb1/0_0_4000_2668/master/4000.jpg?width=380&dpr=1&s=none&crop=none]

Many of my earliest memories are museum memories: the fossilised remains of dinosaurs at the Natural History Museum, the galleries dedicated to the Egyptian afterlife at the British Museum, the interactive exhibits at the Science Museum. I remember a childhood of being excited by museums: those big guns at the Imperial War Museum, Holbein's drawings in the royal collection, Millais's Ophelia at the Tate. As much as the memory of objects, it was the pleasure of spending time in close proximity to so many incredible things, all free at the point of access.

But something happens in adolescence. So many young people lose that awe and wonder. My heart often sinks when I visit museums to see whole classes of young people sitting on stairs focused on mobile devices metres away from glorious things. It breaks my heart that many simply will not visit free museums of their own volition. We all know it is not that they are incurious or unenthusiastic about culture – these are the years when we become infatuated with the world, when we fall in love, when we discover our passions. So we, in the cultural sector, must do all that we can to reignite that zeal in young people, and get them to view our institutions as a creative home for them.

At V&A East, we have created a new national museum that I hope everyone will want to visit, but that I particularly hope younger visitors will find compelling, as we have created it with and for them. I hope they will see their concerns and worldview reflected in our spaces. V&A East museum is an institution that has been created in consultation with a generation. We have spoken to more than 30,000 young people and consulted them on every area of presentation and operational delivery. I have personally engaged in the humbling but deeply affirming process of visiting 100 secondary schools; to speak to thousands of young east Londoners about V&A East, but more importantly to listen to their hopes and dreams – and to hear first-hand their frustrations and concerns.

[IMG:https://i.guim.co.uk/img/media/ebc256c9a55529ad892d7c3f1e70e67268693342/0_0_8192_5464/master/8192.jpg?width=620&dpr=1&s=none&crop=none]

They have helped us to think about how we might reconsider a museum, how we might present our permanent collections through the lens of their priorities. During our many consultation sessions, our young audiences shared the things that mattered most to them – from representation, identity and health and wellbeing, to social justice and environmental action, and how we can create a better world for both people and planet.

They were also interested in the impulses that lead us to create; that affirming drive defines humanity. We shaped our institution around these concerns, from our New Work commissions – including work by Bruguera and the V&A East Youth Collective, Carrie Mae Weems and Rene Matić – to the design and content of our Why We Make galleries. These offer a new and topical way into the V&A's historic and contemporary collection of art, design, fashion and performance.

When we chose the subject of our opening exhibition, The Music is Black: A British Story, we wanted to select a topic that would allow us to showcase compelling stories of making and creativity. The exhibition platforms hundreds of creatives from Samuel Coleridge-Taylor to Little Simz, telling their stories in compelling ways.`,
  },
  {
    id: "the-stranger-review-ozon-camus",
    title: "The Stranger review – lustrously beautiful and superbly realised modern take on the Camus classic",
    author: "The Guardian",
    source: "The Guardian",
    category: "Culture",
    readingTime: 8,
    image: "https://i.guim.co.uk/img/media/3bcedacf568ae5e842375f897c12a0b979dc9d76/409_0_2156_1725/master/2156.jpg?width=620&dpr=1&s=none&crop=none",
    content: `François Ozon's adaptation of the 1942 novella L'Etranger passionately honours the original text while bringing a contemporary perspective to its themes of empire and race

A heatstricken reverie of violence and mystery unfolds in this film, a numb ecstasy of the inexplicable, as experienced by a sensitive white European under the unbearable noonday sun. Set in 1940s French Algeria (and filmed in Morocco), François Ozon's lustrously beautiful and superbly realised monochrome version of Albert Camus's novella L'Etranger has an almost supernaturally detailed sense of period and place. It amounts to a passionate act of ancestor worship in honour of a renowned French artwork, though by making changes that bring a contemporary perspective on the book's themes of empire and race – changes that include a critique of the original text – this adaptation perhaps loses some of its source material's brutal, heartless power and arguably some of the title's meaning.

An archive reel introduces us briskly to Algiers and its casbah, with a hint of Julien Duvivier's Pépé Le Moko; then we are shown our antihero Meursault, remanded there on trial for the capital crime of murder, played with many an unreadable moue of listless unconcern by Benjamin Voisin. Flashbacks show us his dull office job in Algiers, where he turns down a promotion and transfer to Paris, one of his many shrugging gestures of indifference to his own interests.

We also see his blank, undemonstrative reaction to news that his mother, whom he placed in a state care home many miles away, has died, apparently of old age (she was 60). Meursault goes to the funeral, where like all the other mourners, he has to follow her coffin to the church on foot in the blazing heat and is blankly unmoved by the sight of his late mother's gentleman admirer and fellow care home resident fainting just before the service from grief and heat exhaustion.

Back in Algiers, he pursues a relationship with the beautiful Marie (Rebecca Marder); they go swimming together and see a movie starring the goofy, horse-faced comedian Fernandel (the French equivalent of George Formby). These are apparently unbecomingly frivolous activities for someone who has just lost his mother, and held against him at his trial. We see his acquaintance with a cantankerous old neighbour Salamano (Denis Lavant), who beats his dog, and with the seedy Raymond (Pierre Lottin), who beats his girlfriend. Meursault is unmoved by these equivalent cruelties.

The odious Raymond's girlfriend is an Algerian woman called Djemila (Hajar Bouzaouit), who has long been abused and exploited by him, though Meursault finds himself too apathetic to resist being drawn into Raymond's orbit. When Djemila's vengeful brother and another Algerian man follow Meursault and Raymond to the beach one boiling-hot day, Meursault later encounters the brother on the seashore alone, and shoots him.

Why? He is not scared or outraged or in any way emotionally engaged. You may see it as an acte gratuit, an existential gesture of defiance in the face of an absurd universe. Yet restoring the context obviously shows that it is not a gratuitous act, but a racist act, or at least the act of someone subconsciously aware that as a white man he is likely to get away with it – that's if he plays along with the system, and perhaps not going along with the system is in fact the acte gratuit. But not as much as shooting a white man or white woman – that really would be an acte gratuit. The prosecuting authorities are exasperated and offended by Meursault's refusal to make the standard exculpatory moves; ie not claiming self-defence, or temporary insanity through grief, or mouthing religious pieties about remorse he doesn't feel. All the testimony about his behaviour becomes incriminating. When pressed for a motive, he says: "C'était à cause du soleil" – "It was because of the sun".

In the novel, the nameless victim is simply "the Arab" – the other, the stranger, whose own alienation is of course more burdensome than Meursault's. In the book, his sister is anonymous too, but the movie gives them both names, Moussa and Djemila, and invents some dialogue between Djemila and Marie about the trial's racial injustice. But, as in the book, the victim is not named in court, and neither Djemila nor the second Algerian man are called as witnesses in the trial, despite their obvious relevance.

If Camus's L'Etranger can be said to have participated in the bigotry by simply calling the dead man "the Arab", as well as representing it, then this movie softens that argument, and Meursault is, after all, condemned to death; a truly racist system would not allow that. The French authorities were certainly amenable to a claim of extenuating circumstances, though had to be aware of pacifying the Indigenous population. Ozon also retains Meursault's inability or refusal to explain, and to show any interest in the Algerian people, or anyone or anything else. He emerges from this movie as the logical or illogical extension of the educated overclass; he is the violent endpoint of imperialism, whose administrators do not, in their cynical hearts, feel troubled with any great compassion.

Perhaps what motivates Meursault is not his mother's death, or any feelings of self-preservation contingent on a married future with Marie, but simply the realisation that he is supposed to react to these things, supposed to care about them, supposed to be complicit in the cause-and-effect pantomime of existence. He is a kind of martyr, who finally demonstrates some rhetoric in the movie's final moments, but Ozon shows that it is his martyrdom which is absurd.`,
  },
  {
    id: "olivia-rodrigo-drop-dead-review",
    title: "Olivia Rodrigo: Drop Dead review – a maximalist rush of infatuation that's just a bauble short of festive",
    author: "The Guardian",
    source: "The Guardian",
    category: "Music",
    readingTime: 6,
    image: "https://i.guim.co.uk/img/media/875fd114b2c1bb10bc2a29511efd8a9dbbebd0bf/0_0_3000_2400/master/3000.jpg?width=620&dpr=1&s=none&crop=none",
    content: `On this giddy first taste of the US pop star's third album, she sets aside her rock bona fides to revel in the opulent flush of a crush-come-true. But why does it seem so doomed?

Is there anything better than an ink-fresh pop lyric so nailed-on that you can't believe 60 years of songwriters didn't get there first? Or like, at least 20, ever since Googling crushes became an entirely normal component of modern romance: "One night I was bored in bed / And stalked you on the internet," Olivia Rodrigo sings on her comeback single, a casual admission with its own innate melody destined in turn to stalk listeners' brains all summer. Her perfect couplet heralds an ecstatic chorus about the giddy terror of getting exactly what you wanted, exactly how you wanted it, and barely being able to breathe or stifle puking: "The most alive I've ever been / But kiss me and I might drop dead!"

Acute, obsessive, unsparing songs about romance, always with a self-aware handle on their intensity – or a wink at how lovestruck girls get labelled "crazy" – have become Rodrigo's trademark. (She calls her benign form of online stalking "feminine intuition".) Now 23, she broke out as a pop star in 2021, after a lifetime as a Disney Channel fixture, and pulled off one of the quickest, most effective and indelible acts of redefinition of any musician to emerge from that entertainment monolith. (Even her pop peer and fellow Disney alum Sabrina Carpenter took five albums to find success on her terms.) Rodrigo's debut single proper, Drivers License, was an epic heartbreak ballad, though the sticking points of her debut album, Sour, were the pop-punk ragers. She convincingly translated that into her second album, 2023's Guts, which drew on the influence of her mum's riot grrrl records; she scored mentorship from St Vincent, brought the Breeders to support her on tour and got the Cure's Robert Smith to duet with her when she headlined Glastonbury in 2025.

Drop Dead contains a casual flex alluding to her friendship with Smith: "You know all the words to Just Like Heaven," she sings dreamily, "And I know why he wrote them." (In a recent Vogue cover story, Smith said the pair gab about fashion and have hit the studio together.) But it isn't interested in continuing to burnish her now-assured rock bona fides. Early expectations of the song's title assumed it was a punky kiss-off, of a piece with Rodrigo's hits Get Him Back! and Good 4 U – a logical conclusion after her first long-term relationship appeared to end around the new year. That's the sort of safe holdover comeback hit that many pop stars use to ease fans into a new era: even Guts was led by the relatively Drivers License-like Vampire before showing its more calloused hand. But Drop Dead is a true pivot: a gorgeous rush of romantic intensity that tries to stop time to savour the moment, then dives headlong back into it, almost queasy with runaway momentum. In the video – set at the Palace of Versailles, directed by Petra Collins – Rodrigo can't stop running, part Sofia Coppola's Marie Antoinette on the lam, part Emma Corrin's Diana roller skating through Buckingham Palace in The Crown.

If anything, Drop Dead sounds quite a bit like Chappell Roan, with whom Rodrigo shares a producer in Dan Nigro: a whack of strings so maximalist it's one bauble short of festive; Rodrigo hanging out in her highest vocal register for the entire chorus, anticipation incarnate. (Some of the melodic vocal bends are also undeniably Swiftian.) It's so good it doesn't really matter, and comes with its own beguiling in-built sense of collapse, hurtling towards the wreckage on wild, whitewater drums and a powerpop guitar solo that gleams like a skateboarder gliding down a rail – but then unravels. There's a sense that all this obsession begets an ending a lot messier and more confusing than cleanly dropping dead, a fantasy just as soothing as happily ever after.`,
  },
  {
    id: "d4vd-arrested-killing-teen",
    title: "D4vd arrested on suspicion of killing teen girl whose body was found in his Tesla",
    author: "The Guardian",
    source: "The Guardian",
    category: "News",
    readingTime: 5,
    image: "https://i.guim.co.uk/img/media/b23347dabd29c37af8c81a842289125e7a87f95f/300_0_3001_2400/master/3001.jpg?width=620&dpr=1&s=none&crop=none",
    content: `Musician, born David Anthony Burke, arrested in Los Angeles over the death of Celeste Rivas Hernandez, who went missing in 2024

R&B singer D4vd has been arrested in connection with the killing of a teenage girl whose severely decomposed body was found in his Tesla, Los Angeles police said on Thursday.

The 21-year-old musician, who was born David Anthony Burke, is being held without bail, according to city authorities.

In September, LAPD detectives were called to a tow yard in Hollywood, after receiving reports of a foul odor emitting from an impounded car that was registered to Burke. The car had been towed from the Hollywood Hills, after appearing to be abandoned.

Authorities found a dismembered body that was later identified as 14-year-old Celeste Rivas Hernandez. She had been reported missing in 2024, and was last seen in Lake Elsinore, approximately 60 miles south-east of downtown Los Angeles.

Los Angeles's medical examiner's office determined that Rivas Hernandez had been deceased in the vehicle for "an extended period of time before being found".

Police said Burke's case will be presented to the district attorney's office on Monday.

In a statement to the New York Times on Thursday, the Los Angeles County District Attorney's Office acknowledged the arrest and said it expected the case to be presented to the Major Crimes Division.

"Prosecutors will review the facts and evidence to determine whether there is sufficient evidence to file charges," according to the statement.

The arrest comes as Burke was facing a grand jury investigation related to Rivas Hernandez's death.

In September, a spokesperson for the singer told NBC News that Burke was "fully cooperating with the authorities."

That month, police obtained a search warrant for a home Burke had been staying at in Hollywood Hills, ABC News reported. Detectives took a computer, among other items, into custody.

In a statement to the Guardian the singer's legal team, Blair Berk, Marilyn Bednarski and Regina Peter, maintained his innocence.

"There has been no indictment returned by any grand jury in this case and no criminal complaint filed. David has only been detained under suspicion," the lawyers said. "The actual evidence in this case will show that David Burke did not murder Celeste Rivas Hernandez and he was not the cause of her death."

Burke, who was raised in Houston, became a breakout star around 2022 after a string of viral TikTok hits, including Romantic Homicide, which has seen renewed scrutiny over lyrics about death.

His internet popularity led to collaborations with stars SZA and Kali Uchis. When Hernandez's body was discovered, Burke was on a tour, which was later cancelled.

As questions swirl around the circumstances of Rivas Hernandez's death, the case has activated internet sleuths who have searched for clues connecting her to Burke.

Rivas Hernandez's brother, Matthew, told NBCLA in September that before going missing, his sister said she was on her way to watch a movie with Burke.

Authorities have not commented on the nature of the relationship between the pair.`,
  },
  {
    id: "universal-music-takeover-offer",
    title: "Universal Music, home to Taylor Swift and Drake, receives €55bn takeover offer",
    author: "The Guardian",
    source: "The Guardian",
    category: "Music",
    readingTime: 6,
    image: "https://i.guim.co.uk/img/media/8b79eda14305b5f09d4e78de5a39dc7fcf61432c/408_0_2656_2126/master/2656.jpg?width=620&dpr=1&s=none&crop=none",
    content: `Bill Ackman's Pershing Square claims world's biggest music company has suffered because of delay of US listing

Billionaire Bill Ackman's hedge fund has offered to buy Universal Music Group (UMG) in a deal that values the world's biggest music company at about €55bn (£48bn).

Pershing Square, the New-York based hedge fund, has made a bid for the business, which is home to artists including Taylor Swift and Elton John, with a cash and stock deal that would move its stock market listing from Amsterdam to New York.

Ackman said in a statement that while the company, which is led by the British-born Sir Lucian Grainge, had done "an excellent job nurturing and continuing to build a world-class artist roster and generating strong business performance", its share price had lagged owing to issues "unrelated to the performance of its music business".

Shares in UMG, which have been listed in Amsterdam since 2021, had lost more than a quarter of their value in the past year alone. Pershing's offer triggered a sharp rise, with the price up by 13% on the previous trading day when the Amsterdam Euronext exchange closed on Tuesday.

The company is one of the "big three" record labels, alongside Sony Music Entertainment and Warner Music Group. Its roster ranges from classical musicians to stars such as Adele, Drake and Ariana Grande.

Ackman blamed its previous poor share price performance partly on the delay of UMG's listing in the US, underutilisation of its balance sheet and uncertainty around the French conglomerate Bolloré Group's 18% stake in the company.

The French billionaire Vincent Bolloré and his family are the biggest single shareholders in the business, holding a further 10% via his Vivendi media conglomerate. Bolloré orchestrated the listing of UMG in Amsterdam in 2021, spinning the company out of the most valuable part of Vivendi.

On a call with investors on Tuesday, Ackman said he had spoken to Bolloré and his investment group and claimed that they were "intrigued" with the proposal. Pershing Square is "confident that this is a transaction that addresses everyone's concerns", he said.

Ackman also cited a "lack of investor credit" in the company's valuation of its €2.7bn stake in the music streaming service Spotify.

Pershing Square, which Ackman set up in 2004, controls more than $26bn in assets. The fund bought a 10% stake in UMG in 2021, though Ackman resigned from its board of directors last year, citing other commitments.

Dan Coatsworth, the head of markets at AJ Bell, said Ackman would need "a full-on charm offensive" to win over UMG's major shareholders.

"Bill Ackman has long admired Warren Buffett's style of finding good companies going cheap and buying them outright. Ackman has now gone full-on Buffett with a takeover offer for Universal Music Group (UMG) via one of his Pershing Square investment vehicles," Coatsworth said.

While Ackman said Grainge and his management team had done an "excellent job" at the company, as part of the proposed deal the hedge fund would add Michael Ovitz, a veteran talent agent, as chair, as well as two representatives from Pershing Square to the company's board.

The deal would also be subject to a "new employment contract and compensation arrangement for Sir Lucian Grainge", Ackman said in a letter to the board of directors at UMG.

Grainge was paid more than €41m last year, in a package that included a €4.4m base salary and more than €30m in bonuses.

Under the proposed deal, UMG would merge with a blank-cheque company set up by Pershing Square, and then list on the New York Stock Exchange. Shareholders would receive a total of €9.4bn in cash and 0.77 shares in the new company for every Universal share they own. Together, that would represent a 78% premium compared with the company's closing share price on Thursday, Pershing said.`,
  },
  {
    id: "taylor-swift-vinyl-sales-1bn",
    title: "The Taylor Swift effect: US vinyl sales top $1bn for the first time since 1983",
    author: "Owen Myers, The Guardian",
    source: "The Guardian",
    category: "Music",
    readingTime: 7,
    image: "https://hips.hearstapps.com/hmg-prod/images/taylor-tiny-bubbles-68accf10c7c54.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    content: `Swift leads with 1.6m vinyl sales of The Life of a Showgirl in 2025 while Sabrina Carpenter and Kendrick Lamar round out the LP charts

For the first time in over four decades, US vinyl sales have topped $1bn in annual revenue.

Vinyl purchases reached $1.04bn in 2025, per a new report by the Recording Industry Association of America (RIAA) published on 16 March. It marks the 19th consecutive year of growth for the format that was once considered a niche interest.

Vinyl sales grossed 46.8m in 2025, marking a rise of 7.9% from 2024's takings of 43.4m. CD sales brought in less than a third of vinyl's profits with $312.4m in revenue, while other physical formats such as cassettes brought in $25.8m.

The explosive resurgence of vinyl has been led by Taylor Swift's canny marketing of the format as a collectible. Her 2025 album The Life of a Showgirl was last year's bestselling vinyl release, with 1.6m vinyl sales alone.

Swift released a total of eight vinyl variants of The Life of a Showgirl with alternate cover artwork and LP colors. Some editions came with extra material from Swift, such as a Target exclusive that came with previously unseen photos, a double-sided poster, as well as a poem penned by Swift. Other editions were only available for 48-hour windows through Swift's web store.

As well as vinyl, Swift's embrace of CD, cassette and digital download formats helped The Life of a Showgirl shatter music records upon its release. The singer released at least 34 variants of the album in total. The album racked up 4.002m US sales in its opening week in the highest ever first week sales recorded for an album. Of that figure, 1.3m sales were vinyl.

Also in the top three of vinyl sales last year: Sabrina Carpenter, who sold 292,000 of her album Man's Best Friend, and Kendrick Lamar who moved 272,000 copies of his Grammy-winning album GNX. In fourth place was Carpenter's Short n' Sweet with 262,000 in sales, followed by Billie Eilish with 192,000 sold of her 2024 LP Hit Me Hard and Soft.

Classic pop albums also proved to be an enduringly popular choice for vinyl purchases, with Fleetwood Mac's Rumours and Michael Jackson's Thriller also making the top 10 of US vinyl sales.

Vinyl represented less than 10% of US music sales last year, with its $1bn revenue paling in comparison to the $9.5bn revenue that the industry made from streaming.

US consumers purchased about 48.5m copies of new vinyl releases (the RIAA report does not include used vinyl sales). That figure is largely made up of traditional LP and EP releases. By contrast, CDs sold 29.5m units.

Swift's dominance of vinyl has drawn criticism from some music fans and commentators. In a January video titled "Taylor Swift is Still Ruining Vinyl," the YouTube personality Anthony Fantano asked: "Once you drop eight different vinyl versions of your new album, what market demand are you really meeting at that point?

"Are you really giving your fans what they want, or are you merely exploiting a very weird niche monopoly that you have over a certain market of fans who are basically going to shell money out for anything you physically drop?"

Vinyl pressings of Eilish's most recent album were made with 100% recycled vinyl, while Coldplay's 2024 album Moon Music was pressed on to records made from recycled plastic bottles.

"I can't even express to you how wasteful it is," Eilish said in a 2024 interview of superfluous vinyl variants. "I find it really frustrating as somebody who goes out of my way to be sustainable and do the best that I can and try to involve everybody in my team in being sustainable.

"Some of the biggest artists in the world are making 40 different vinyl packages that have a different unique thing just to get you to keep buying more."`,
  },
  {
    id: "britney-spears-sells-music-catalog",
    title: "Britney Spears sells rights to music catalog for undisclosed sum, say reports",
    author: "Dani Anguiano, The Guardian",
    source: "The Guardian",
    category: "Music",
    readingTime: 4,
    image: "https://i.guim.co.uk/img/media/7e599eaa0e00a135bd1b5aafe97af8589cc314b0/43_0_3001_2401/master/3001.jpg?width=620&dpr=1&s=none&crop=none",
    content: `Music publisher Primary Wave said to have bought rights to pop star's music, including Toxic and Baby One More Time

Britney Spears has sold the rights to her music catalog, which includes hits such as Toxic, Baby One More Time and Gimme More, according to media reports.

The music publisher Primary Wave is said to have purchased the pop star's music rights on 30 December, TMZ reported on Tuesday, citing legal documents. An unnamed source "familiar with the deal" confirmed the sale to the New York Times.

The terms of the sale and the price of the catalog have not been made public, but such deals have been lucrative for artists in recent years.

High-profile artists such as Bruce Springsteen, Shakira, Justin Bieber and Justin Timberlake have sold their catalogs. Springsteen sold his songs to Sony in 2021 for $500m, and that company purchased Queen's catalog for more than $1bn in 2024.

Spears has released nine studio albums since her debut in 1999 and is one of the bestselling female artists. She was at the forefront of pop music for nearly two decades, and her personal struggles have been widely publicized.

The 44-year-old spent nearly 14 years under a conservatorship that required her to pay attorneys to manage her life and did not allow her to make decisions about her personal affairs, career or finances. A judge terminated the legal arrangement in 2021.

She recounted how the conservatorship shaped her life, controlling decisions about her diet and family planning, and "stripped me of my womanhood [and] made me into a child" in a 2023 memoir The Woman in Me.

Spears has not yet publicly commented on the sale of music catalog. She has previously said she has no plans to return to the music industry or perform in the US.`,
  },
  {
    id: "musicians-concerned-ai-major-labels",
    title: "Musicians are deeply concerned about AI. So why are the major labels embracing it?",
    author: "Eamonn Forde, The Guardian",
    source: "The Guardian",
    category: "Technology",
    readingTime: 12,
    image: "https://i.guim.co.uk/img/media/0e0b6a0e8e0b4a0e8e0b4a0e8e0b4a0e8e0b4a0e/0_0_3001_2401/master/3001.jpg?width=620&dpr=1&s=none&crop=none",
    content: `Companies such as Udio, Suno and Klay will let you use AI to make new music based on existing artists' work. It could mean more royalties – but many are worried

This was the year that AI-generated music went from jokey curiosity to mainstream force. Velvet Sundown, a wholly AI act, generated millions of streams; AI-created tracks topped Spotify's viral chart and one of the US Billboard country charts; AI "artist" Xania Monet "signed" a record deal. BBC Introducing is usually a platform for flesh-and-blood artists trying to make it big, but an AI-generated song by Papi Lamour was recently played on the West Midlands show. And jumping up the UK Top 20 this month is I Run, a track by dance act Haven, who have been accused of using AI to imitate British vocalist Jorja Smith (Haven claim they simply asked the AI for "soulful vocal samples", and did not respond to an earlier request to comment).

The worry is that AI will eventually absorb all creative works in history and spew out endless slop that will replace human-made art and drive artists into penury. Those worries are being deepened by how the major labels, once fearful of the technology, are now embracing it – and heralding a future in which ordinary listeners have a hand in co-creating music with their favourite musicians.

AI music platforms analyse huge amounts of recorded music in order to learn its sounds, structures and expressions, and then allow users to create their own AI-generated music via text or speech prompts. You might ask for a moody R&B song about a breakup sung by a female vocalist, and it will come up with a decent approximation of one, because it's absorbed hundreds of such songs.

Artists and labels initially saw AI as the biggest existential threat since Napster-fuelled piracy: if not a replacement for human creativity, then certainly a force that could undermine its value. Gregor Pryor, a managing partner at legal firm Reed Smith, says background music for things such as advertising, films and video games, where you're not relating to a personality as you would in pop music, "is where the real damage will be done" first of all. "People will ask: why would I pay anyone to compose anything?"

Aware of the scale of the shift, last year the Recording Industry Association of America, representing the three major labels, initiated legal action against AI music companies Suno and Udio for copyright infringement, alleging they had trained their AI platforms on the labels' artists without their permission. But then there was an extraordinary about-turn. They didn't just settle the matter out of court – Universal Music Group (UMG) then partnered with Udio, and Warner Music Group (WMG) with Udio and Suno. They also have deals in place with AI company Klay, the first to get all three major labels on board, adding Sony Music (discussions with indie labels are ongoing). WMG chief executive Robert Kyncl has said these recent deals are to ensure the "protection of the rights of our artists and songwriters" and to fuel "new creative and commercial possibilities" for them, while UMG chief Lucien Grainge heralded "a healthy commercial AI ecosystem in which artists, songwriters, music companies and technology companies can all flourish and create incredible experiences for fans".

Kyncl made another bold statement as to why these deals are taking place: "Now, we are entering the next phase of innovation. The democratisation of music creation."

Announcing its Universal tie-in, Udio chief executive Andrew Sanchez has said Udio users will be able to "create [music] with an artist's voice and style": so not just create the aforementioned moody R&B song, but one with a specific existing artist's voice. He also says Udio will allow users to "remix and reimagine your favourite songs with AI … take your favourite artists, songs or styles and combine them in novel ways. In our internal experimentation, the team has gotten some truly remarkable and unusual results that will definitely delight."

Klay meanwhile states that "fans can mould their musical journeys in new ways", but it's essentially the same offering: a subscription service where you can manipulate the music of others, or create your own from it. Ary Attie, Klay's founder and chief executive, says his company will properly compensate artists whose work is used, and won't supplant the work of human musicians: "This technology is not going to change any of that."

Klay is a rarity in that it signed up all three major labels before it started training its AI system on their music: "A core part of our philosophy," Attie says. He argues that rival AI companies – he doesn't name names – have been "acting in a way that doesn't respect the work of artists, and then being forced into a corner". Suno did not respond to an interview request; Udio claimed its executives were "extremely swamped" and therefore unable to answer questions. The current, and synchronised, messaging from labels and gen AI companies with licensing deals is that they all respect both art and artists and that their deals will reflect this.

They are also positioning gen AI as the single biggest democratising leap ever in remix culture, effectively enabling everyone to become musically creative. The counterargument is that, by lowering all barriers to entry and by allowing the manipulation of a song or a musician's character at scale, it vastly devalues and negates the creative act itself.

But what do musicians actually think of the prospect of their work being used to train AI, and reworked by the general public? "Everybody should be selling or licensing their voice and their skills to these companies," Dave Stewart of Eurythmics argued to me this week. "Otherwise they're just going to take it anyway." That view is directly countered by the major labels and AI companies, who have insisted artists and songwriters get to opt in to have their music made available, and if they do, get royalties when their music is used to train AI, or manipulated by users on platforms such as Udio, Suno and Klay.

Others take a grimmer view about how these companies might reshape the industry. Irving Azoff, legendarily forthright artist manager and founder of the Music Artists Coalition in the US, responded to the Universal/Udio deal with biting cynicism. "We've seen this before – everyone talks about 'partnership,' but artists end up on the sidelines with scraps," he said. In the wake of the same deal, the Council of Music Makers in the UK accused the major labels of "spin" and called for a more robust set of artist-label agreements. And the European Composer and Songwriter Alliance says there is a disturbing "lack of transparency" around the deals (though more detail is likely to emerge on what users can do with any music they create, and any potential commercial uses of it).

Catherine Anne Davies, who records as the Anchoress and also sits on the board of directors at the Featured Artists Coalition (FAC), has many reservations here. "Most people don't even want their work to be used for training AI," she says. "I'm on the dystopian side, or maybe what I call the realist side of things. I'm interested in the way that AI can be assistive in the creative process – if it can make us more efficient, if it can streamline our processes. But generative AI for me, in terms of creative output, is a big no-no at the moment. I'm yet to be convinced."

Musician Imogen Heap feels that AI itself is not to be feared as a tool – she uses an AI she calls Mogen to listen to every aspect of her life, with a view to it being a creative partner. To help address some of the issues, she has created Auracles, an artist-led, non-profit platform she hopes will be the place where the rights and permissions around AI are set out. It's not enough to say you're happy with your music being used by AI, she says – instead, what's needed are "permissions that grow and evolve over time".

Other companies are cropping up with similar offers. "We must protect the artists at all costs," says Sean Power, chief executive of Musical AI, who aims to give musicians "an exact portion of the influence they're having on all the generative outputs" – meaning compensation every time even a tiny bit of one of their songs is used by a user of Udio et al.

Terms of these deals are undisclosed, but labels are likely to be seeking settlement for any past use of their artists' copyrights as well as an advance on future use, plus an equity stake in the platform. And while artists will be able to opt out of including their work, they probably won't be consulted on these partnerships going ahead, with this lack of consultation being something that artist representative bodies such as FAC have been particularly critical of. "The big artists, the labels need to be nice to; those who have a platform will be consulted to some degree," says a music licensing expert, speaking anonymously. "The very few, who as individual artists are able to make a dent on share price, will have approval."

The Guardian understands that labels are currently having discussions with artists and their managers to better explain how these deals will work and why they believe they can bring in additional revenue, although they will need to convince artists that gen AI will not damage other sources of income, notably from streaming.

But it isn't clear whether consumers will actually pay to play around with music in the way Udio and others hope they will. AI is the single biggest hype category in Silicon Valley right now, with an average of $2bn of venture capital investment going into AI companies every week in the first half of this year. Sundar Pichai, chief executive of Alphabet (parent company of Google), recently warned of the catastrophic domino effect across the tech sector if this AI bubble bursts, a concern the Bank of England also recently raised.

Reed Smith's Gregor Pryor argues that AI music could, counterintuitively, end up being positive for human musicians. "By its nature, AI is derivative and cannot create new music," he says. "Some investors in music catalogues that I speak to say it's good for artists, because music 'verified' as created by humans will have greater value."

Artists will frame their work as having an invaluable human essence, their music speaking entirely from the heart, but it will become incrementally more difficult for the casual listener to distinguish between music created by a human and that created by AI. The Guardian understands that radio stations and DJs are currently extremely nervous about AI-powered music slipping through their quality filters, effectively hoodwinking them and hanging question marks over how their playlists work. The example of Papi Lamour might force them to do much greater due diligence on what they put forward for airplay consideration. Or they could be the first trickles of a flood that roars through radio and streaming services as the boundaries between AI and human-created music crumble.

Davies is especially worried about artists not thinking through the long-term implications of licensing to AI services. "We cannot think of ourselves selfishly as entities that will be unaffected, because the entire ecosystem will experience a knock-on effect financially. What about your fellow composers and creators? But also what about the generations to come after? Are we fucking this completely, just to make sure that we can pay our mortgages now?"

AI's current level of sophistication means it is really producing composites of existing music, creating a Frankenstein's monster of melodies. However, when AGI (artificial general intelligence) finally arrives, with Anthropic co-founder Dario Amodei suggesting that could happen as soon as next year, we will be catapulted into an exhilarating and terrifying realm of uncertainty for the future and the purpose of human-created art.

"It's literally happening under our noses," warns Davies. "We should be so much more concerned than we are."`,
  },
  {
    id: "adam-peaty-goat-breaststroke",
    title: "Supercharged GOAT-level swim-genius Adam Ramsay-Peaty is the Messi of breaststroke",
    author: "Barney Ronay, The Guardian",
    source: "The Guardian",
    category: "Sport",
    readingTime: 10,
    image: "https://i.guim.co.uk/img/media/ad42bafe3e545d0b95aeec720ffe609fb79b7ee5/0_0_2067_1653/master/2067.jpg?width=1020&dpr=1&s=none&crop=none",
    content: `The three-time Olympic champion is brilliant, charismatic, relatable, basically the best British athlete of all-time. But he's also a victim of the decline of minority sports

The Austrian philosopher and novelist Robert Musil once wrote a lengthy meditation on human capacity based around seeing the phrase "a racehorse of genius" in a newspaper sports section. Musil was disturbed by this idea. His basic question was: can a horse really be a genius?

If we are to ascribe the label of genius to a horse, based on its ability to run fast and successfully eat oats, where does this leave the unmapped capacities of the actual human genius? What is consciousness? What is a human? Should the question in fact be: will there ever be a human of sufficient genius they are able to actually perceive the genius of a horse?

As a small contribution to this discourse, I would suggest that if there really is such a genius among us they are unlikely, from my own lived experience, to be a sports writer. Also, horses are nice.

The reason for mentioning this here is that I don't think you really appreciate how good Adam Ramsay-Peaty is at the breaststroke. You might have an idea of him, a peacocking, thrillingly coiled figure, who is clearly pretty good at the breaststroke. But do you know how good he really is? Which is very, very, very good.

Ramsay-Peaty is the GOAT. He's the Messi, the Bolt, the Socrates of breaststroke, an athlete who proves beyond doubt that you can be a genius at something this highly specialised. Which is, with all due respect to the mind-bending physical capacities and the endlessly complex biomechanics, basically swimming like a frog.

Ramsay-Peaty is 31 now. He's an eight-time world champion and a paradigm-shifting world record-holder at both 50m and 100m. In fact, he holds the top 14 fastest times ever in the 100 and the top six in the 50. He is, under the rule that you can only annihilate what's in front of you, the greatest British athlete of all time, prove me wrong and no darts isn't it.

As of this week Ramsay-Peaty is also back. On Wednesday he returned to elite competition, winning the GB swimming championships 100m title in London. His time of 58.97sec was described as "astonishing" by the BBC commentator, and brilliantly so, voice breaking to a shrill squeak, a sonic throwback to men in brown suits and thick glasses doing this through a fug of smoke and whisky.

The wider story is that Ramsay-Peaty is one big step closer to competing at a fourth Olympic Games in Los Angeles, having almost quit the sport before and also after Paris. He's a bit like this, one of those athletes who seems simultaneously hyper-committed and on the verge of walking away, like Ronnie O'Sullivan yawning and doing the ironing at the world championship final then reeling off a 147 with his left foot.

Personally I really want him to be there. In part because he was second by a hair in the 100m in Paris, then tested positive for coronavirus, which is no way for the GOAT to go out. But also to bring his very moreish kind of heat.

"The next two years are probably going to be the hardest of my career," he said this week, and you wanted to punch the air and leap around like a NuMetal frontman, because he needs to say things like this. Ramsay-Peaty is one of those guys who just lives the grind, the pain, the fear. In fact he's one better than a breaststroke genius. He's a tortured breaststroke genius.

Nothing wrong with that. It's better than being tortured and not very good at anything, which is most of us. But it is also an unusual thing to be a tortured genius at, bobbing along out there ahead of the human race, alone with his clock, existentially heroic. But also, and this is unavoidable, doing breaststroke.

This is an odd event. Most disciplines of this type replicate some form of military display, or at least a useful physical attribute. The hurdles: yes. Humans jump over stuff. The triple jump? Not so much. You need to leap a fast running stream? You're not going to triple-jump it. The breaststroke is bordering on this. You're in the water in Jaws, gasping, shouting, Nemesis closing in. Chief Brody isn't breaststroking towards the shore.

Useless he's being played by Adam Ramsay-Peaty, who is perfectly adapted to this set of physical movements: the unusually large feet and hands, the double-jointed elbows, the basic way his body works. He is the breaststroke, an all-time genius in an event that basically exists by accident, like being really good at running backwards in a zig-zag. Best of all, he's a normal kind of likable and fascinating bloke who just happens to have abnormal talent. Famously he was so afraid of water as a child his family would apologise to the neighbours for all the shouting at bath-time. He went to his first swimming lesson aged four and was so-so at it until the lightbulb moment where he switched to breaststroke.

He had a regular adolescence, noticed people he'd swum up with excelling at London 2012, then got serious. Rio 2016 made him. He won 100m gold and broke the world record. Since then it has been a mix of glide, grace, brilliance and what he describes as "an incredibly lonely journey".

Seven thousand calories a day bookended by a 16-hour fast. Obsessive training ("The sword is most deadly when it's sharp"). Gladiator mindset. Self-loathing in victory. Ramsay-Peaty is also a survivor, menaced at times by addiction and depression. "The devil on my shoulder says: 'You're missing out on life, you're not good enough, you need a drink, you can't have what you want, you can't be happy,'" he has said. You don't have to be a supercharged all-time swim-genius to feel any of this.

The other thing with late, GOAT-level Ramsay-Peaty, he really should be massively famous. He's brilliant, charismatic, relatable. But he's also a victim of the decline of minority sports. He's a victim of algorithm life, of our unceasing mono-culture, the noise that drowns everything out.

Previously we consumed our athletes centrally. In those times Ramsay-Peaty would have been a Lester Piggott, a Duncan Goodhew, a Daley Thompson. These days football will swallow all the air in the room. Noni Madueke, for example, is quite a good player at elite level. He's also mind-bendingly rich and has nearly two million Instagram followers. Adam Ramsay-Peaty is the unchallenged GOAT in an all-consuming discipline. Few people would even recognise him.

There is an oddity here. Celebrity has come for Ramsay-Peaty from a different angle, one that also seems to mock the Spartan deprivations of elite sport. Last year he married the daughter of A-list aura-dad Gordon Ramsay, and is now a regular in the gossip sidebars, the putting-on-a-leggy-display zone.

His wedding was massive in the tabloids, in part because, sadly, his own family was almost entirely absent. It is to be hoped his new family brings him happiness, and that he can be reconciled with his old one, too. Who knows, maybe he can also become a niche genius at making in-laws get on, although, again, this would be pushing human capacities to previously unseen limits.

Either way I'm desperate to see him in Los Angeles, that bobbing head still parting the waters, our own niche, oddly everyday racehorse genius.`,
  },
  {
    id: "artemis-ii-case-for-astronauts-shrinking",
    title: "Congratulations to the Artemis II crew – but the case for sending astronauts into space is rapidly shrinking",
    author: "Martin Rees and Donald Goldsmith, The Guardian",
    source: "The Guardian",
    category: "Science",
    readingTime: 8,
    image: "https://i.guim.co.uk/img/media/b24913b41fc995bb7393939810ae917eb07cef06/305_0_3333_2667/master/3333.jpg?width=620&dpr=1&s=none&crop=none",
    content: `Soon, thanks to the advance of robots, the only reason left to send humans to the moon will be as an ultra-expensive sport

The 2020s has seen a revival of the "Apollo spirit". The US and China are seemingly in a race to send humans to the moon by the end of the decade – and thereafter, perhaps, even to Mars. Nasa astronauts have just returned from a 10-day journey looping around the moon. Although they arrived back safely, Nasa accepts that the lack of data makes it impossible to quantify the risks involved – this represents only the second launch for the Artemis system and the first to carry astronauts.

To date, estimated expenditures on the Artemis programme are close to $100bn (£75bn). The "one big beautiful bill" that the US Congress passed in July 2025 allocates $9.9bn for the Artemis IV and V missions. Still greater expenditures are envisioned for a well-developed lunar base.

The benefits of going to the moon are clear. Detailed exploration will give us important clues about the formation of the solar system, and by implication about the history of exoplanets orbiting other stars throughout the cosmos. In addition, the moon offers a stable observing platform for all types of telescopes, including giant arrays of radio antennas. These can profit from their location on the lunar far side, which is shielded from the light and other radiation that our terrestrial civilisation constantly radiates into space.

But are "on-site" humans needed for any of this? Today, astronauts could still prove useful, despite the difficulties of keeping them alive and productive. But a decade from now, the advantage could swing towards robots: able to work around the clock, comparatively inexpensive, and not requiring replacement for many years or even decades.

Robots on Mars such as Curiosity and Perseverance (and their Chinese counterparts) have performed almost flawlessly for many years. These marvellous machines steadily improve their capabilities, while humans, who demand oxygen, food and shelter, do not. What cost, including possible tragedy, should be imposed for the greater inspiration that astronauts offer? And, we may reasonably ask, how much inspiration would astronauts on the moon now provide given that humans achieved the basic goal more than half a century ago?

As ever, space exploration has a political dimension, as well as a scientific one, with sending astronauts an eye-catching achievement. The Chinese government's plans show a determination to increase China's prestige and influence through space exploration. The Chinese have excelled in lunar research. After two robots orbited the moon, three more made soft landings there. Each of those deployed a robotic explorer, and in 2024 the third of these brought the first soil samples from the lunar far side back to Earth. The next Chinese lunar mission, scheduled for launch this August, will examine the south pole region with an orbiter, a lander and a "mini-hopper" probe. In 2028, the Chinese government plans to send equipment to investigate construction of a lunar base, including an enclosed ecosystem to rest on the moon's surface. And there is every expectation that the Chinese will aim to match the US by sending humans.

But the most relevant difference between the Apollo era and the mid-2020s is the amazing improvement in our ability to create, launch and guide robotic explorers. Furthermore, improvements in sensors and in artificial intelligence (AI) will enable the robots themselves to identify particularly interesting sites from which to gather samples for return to Earth. Within 10 or 20 years, robotic exploration of the lunar surface could be almost autonomous, with little advantage to be gained by a human presence. Similarly, engineering projects might no longer require human intervention, but could instead be done by robotic fabricators. The same is true for the mining of rare minerals. The practical case for human spaceflight gets ever weaker with each advance in robots and miniaturisation.

Humans have, of course, been crucial in assembling or repairing spacecraft orbiting the Earth. For example, after the Hubble space telescope (HST) was launched in 1990, its mirror turned out to be poorly aligned. But astronauts undertook a "rescue" mission in the shuttle to make adjustments – and later made further visits to upgrade the instruments. This has always been adduced as evidence of the key role of humans in space. But Riccardo Giacconi, who led the project to launch the first X-ray telescopes into space and was later in charge of the Hubble telescope, once told me that if the human element had been removed, several copies of the HST could have been built and launched with the money saved.

In December 2021, the vastly more elaborate James Webb space telescope (JWST) was launched. The stakes were high because there would have been no prospect of a repair mission. The HST had been launched into a low (and accessible) orbit: in contrast, the JWST's orbit, several times farther away than the moon, is far beyond the routine reach of astronauts. The JWST is a sterling example of the complex missions that can be undertaken without space crews.

Indeed, as robotics and miniaturisation improve, the practical and scientific case for any human spaceflight weakens. Its prime motive now is simply as an adventure – an ultra-expensive sport that should be left to billionaires and private sponsorship.

We may envy the crew of Artemis who, while orbiting the moon, experienced the awe of the pioneer Apollo 8 astronaut Bill Anders in his iconic image Earthrise, depicting the Earthly home that we must cherish. But we do not need to send astronauts to the moon, or beyond, to bring the benefits of space exploration to humanity.`,
  },
  {
    id: "theatre-choreographers-awards",
    title: "Give theatre choreographers and movement directors their own awards, says union group",
    author: "The Guardian",
    source: "The Guardian",
    category: "Culture",
    readingTime: 5,
    image: "https://i.guim.co.uk/img/media/a8bda7e3bd7e917dcc0c28b06d9a71ecfbc27f44/498_604_2900_2320/master/2900.jpg?width=620&dpr=1&s=none&crop=none",
    content: `'If we celebrate the impact of physical storytelling, we must acknowledge the artists behind it,' says Equity body, calling out the lack of movement categories in major awards

Choreographers and movement directors in theatre are undervalued by awards ceremonies and deserve greater acknowledgment, says the Equity group representing both disciplines.

At last weekend's Oliviers ceremony, the award for best theatre choreographer went to Fabian Aloise for Evita at the London Palladium. In a statement, Equity's Choreographers and Movement Directors Network (CMDN) said it was "brilliant to see choreography recognised on major stages like the Olivier awards" but drew attention to the movement directors who worked on nominated productions yet went unrecognised with their own category. The ceremony "opens up a bigger conversation about what language we use to describe how theatre is made, and questions who gets named in that process – especially when it comes to movement and choreography", said the CMDN.

"We want to spotlight the movement directors whose work has been integral to some of the year's most powerful productions: Leanne Pinder for Punch, Sarah Golding for Kenrex, Imogen Knight for the opera Dead Man Walking, Jenny Ogilvie for Into the Woods, Sung Im Her for The Glass Menagerie, Lucy Hind for Inter Alia and Kloé Dean for The Boy at the Back of the Class."

[IMG:https://i.guim.co.uk/img/media/d29ff2969178b07d6d193ca16f675fa373917595/0_0_5000_3333/master/5000.jpg?width=620&dpr=1&s=none&crop=none]

While theatre choreography usually refers to dance sequences, movement direction is integral to creating the physical language of an entire production, enhancing storytelling, characterisation and drama. Many choreographers also work as movement directors, but productions often use different individuals in each role.

"Movement direction sits in a nuanced space: not always 'dance', not always credited as choreography, yet essential to how a show lives and breathes," said the CMDN. "If we celebrate the impact of physical storytelling, we must also evolve how we acknowledge the artists behind it."

The network praised the Black British theatre awards for expanding their choreography category in 2022 to include movement direction. But it highlighted that the UK Theatre awards typically has no dedicated choreography or movement category and neither does the Critics' Circle theatre awards.

Movement director and choreographer Polly Bennett established the CMDN in 2023 for her professions "to be seen, recognised and respected". The network has more than 200 members. In 2025, steering group member Ellen Kane – who works for the screen as well as the stage – asked in an interview with the Guardian: "Why aren't there Oscars for choreography? Why aren't there Baftas? Why aren't we being credited?"

Last month, professionals from across the theatre industry signed a petition for the Oliviers to include a video design category to "enhance the inclusivity of the Olivier awards, further reflecting the diverse and evolving nature of the performing arts". Under the current system, video designers share eligibility with other disciplines. This year, the Olivier award for best set design went to Tom Pye (set) and Ash J Woodward (video) for Paddington: The Musical while best lighting design went to Aideen Malone (lighting) and Roland Horvath (video) for Into the Woods.`,
  },
  {
    id: "vultures-india",
    title: "How do you replace 40 million dead vultures?",
    author: "Sudipto Sanyal, The Economist",
    source: "The Economist",
    category: "Environment",
    readingTime: 18,
    image: "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/1843_20260409_Vulture_01.jpg",
    content: `The Jatayu Conservation Breeding Centre, the world's largest facility for protecting and breeding vultures, is hidden in a dense forest of sal and ash trees outside the town of Pinjore in northern India. You get there by following a rutted dirt track that even Google Maps doesn't know about. Santosh Kumar's family has lived in a nearby village for almost ten generations. For much of that time, vultures were a daily sight throughout the state of Haryana and, indeed, much of India. "When I was ten and an animal died," recalled Kumar, a slight 46-year-old, "hundreds of the damn birds would gather."

Like many Indians who live under skies that are no longer darkened by vultures, Kumar, who runs a small shop at the edge of the forest, speaks of the birds wistfully—and conspiratorially. "All the vultures disappeared after an earthquake in Pakistan and never came back," he told me while handing over an ice-cold bottle of water. "The Pakistanis lured them with rotting corpses."

Given the suddenness and scale of the vultures' disappearance, it's not surprising that the mind reaches for such far-fetched explanations. Sometime in the 1990s vultures started dropping dead throughout India—first in the thousands, then in the millions. By 2007 more than 99% of the estimated 40m vultures in South Asia had died. This was an example of what ecologists call a "functional extinction": a population so diminished that it can no longer fulfil its role in the ecosystem.

At first, biologists were baffled. Livestock carcasses—vultures' main source of food—were tested for pesticides, but none appeared to be present. Then the autopsies of dead vultures began to show the presence of visceral gout, a disease that encrusts the birds' internal organs in a crystalline shroud. This prevented the vultures' kidneys from expelling uric acid, causing them to die of renal failure.

The culprit turned out to be diclofenac—a non-steroidal anti-inflammatory drug (NSAID) typically prescribed to large animals, including humans. By the early 1990s, diclofenac was the cheapest and most widely used NSAID in India. Vultures, as nature's disposal system, were scavenging the remains of dead cattle and ingesting traces of the drug.

[IMG:https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/1843_20260409_Vulture_02.jpg]

Because scavengers have been so prevalent, South Asia has historically not required infrastructure for the hygienic removal of animal corpses. The disappearance of vultures was thus a public-health catastrophe. The Indian government acted quickly: by 2006 it had produced an "action plan" for vulture conservation and banned the veterinary use of diclofenac. The hope was to stabilise the population by breeding three decimated species—the white-rumped Gyps bengalensis, the long-billed Gyps indicus and the slender-billed Gyps tenuirostris—in captivity. Once the vultures' natural habitats had been purged of diclofenac, they would then be released into the wild.

Almost 20 years later India's wild vulture population is no longer decreasing—but it isn't flourishing either. According to a report from the Wildlife Institute of India published in November 2025, there are fewer than 5,000 vultures in the wild today. Almost three in four historical nesting sites still lie abandoned, and deforestation continues to wreak havoc. Slender-billed vultures continue to face extinction, and colonies of white-rumped vultures now persist only in fragmentary pockets.

India's nine vulture-conservation centres should, in theory, offer hope. The total captive population in the country now exceeds 800—the start of a viable genetic safety-net. But they also represent a gamble. To boost the wild vulture population, the birds must survive a fraught transition from the safety of aviaries to shrinking habitats that are still plagued by illegal toxins—including diclofenac, which remains in circulation despite the ban.

Vultures are found everywhere on Earth apart from Australia and Antarctica. There is huge variation between the 23 extant species: the smallest birds weigh just 2 or 3kg; the largest Himalayan griffons clock in at as much as 12kg. Without vultures, diseases that might spread to other animals would fester in carcasses. For their work in eliminating these threats, the birds have gained our respect; the Victorian naturalist J.G. Wood once called them "the acknowledged chiefs of Earth's Purifiers".

In parts of India, vultures are especially revered. In the Sanskrit epic "Ramayana", the 60,000-year-old vulture king Jatayu sacrifices himself in battle to protect Rama's consort Sita. As a result, the vulture is often regarded as a symbol of dharma, or righteousness. The birds also play an essential role in Parsi funerary rites, such as in the dakhma, or Tower of Silence, an open-air structure upon which the dead are exposed to the purifying rays of the sun and consumed by scavengers.

Until the diclofenac scourge of the 1990s, vultures were responsible for the disposal of roughly 27.5m cow carcasses in India each year. In the vultures' absence, rats and feral dogs have come to fill the scavenging void, albeit far less efficiently. This, in turn, has fuelled the spread of animal-borne diseases such as rabies. Eyal Frank and Anant Sudarshan, economists from the University of Chicago and the University of Warwick, have calculated that more than 500,000 Indians died between 2000 and 2005 alone because of the loss of vultures' scavenging services. They reckon that these premature deaths cost the country close to $70bn each year—roughly 1.7% of the country's GDP—during that period.

[IMG:https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/1843_20260409_Vulture_03.jpg]

At the entrance to the Pinjore facility, a massive metal vulture resembling no known species keeps vigil on top of a 20-foot pole, its wings spread menacingly over a metal basket with huge eggs inside. As soon as I walked through the gate, a vet named Shravan Singh Rathore pointed towards a garage-like structure near the entrance. "We are processing the meat now," he told me by way of greeting. Inside, 22 headless goats hung from iron hooks. A puddle of blood had formed on a yellow tarp underneath.

I had arrived on feeding day, which typically happens twice a week. Every month, the Pinjore facility buys roughly 6,000kg of clean goat meat for the 323 birds housed there. "In India, people usually treat their cattle themselves [with drugs], they don't call a vet," said Hemant Bajpai, the genial, moustached biologist and centre manager. "So, goat meat tends to be safer." To ensure the goats are NSAID-free, they are monitored for at least a week before they are slaughtered and samples are collected to check for contamination.

The Pinjore centre houses most of its vultures in six aviaries, which are 100 feet long and 20 feet high. The walls of their cages are made from bamboo slats, so the vultures can't see out. This is to prevent them from mistaking the human caretakers for their parents—vultures are particularly prone to imprinting, a process whereby a newborn instinctively mirrors the behaviour patterns of the first moving figures it encounters.

[IMG:https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/1843_20260409_Vulture_04.jpg]

According to Chris Bowden, an expert on vulture conservation, it's simply too soon to be freeing captive-bred vultures into the wild. They are only supposed to be released into vulture "safe zones": areas roughly 100km in radius where the presence of toxic NSAIDs has been drastically reduced. But it's not always easy to determine whether these zones are truly safe—especially because diclofenac, despite having been banned for veterinary use in India for almost two decades, is still very much present in the environment.

This is primarily the fault of the country's teetering drug-regulatory and enforcement system. Not long ago, I managed to order ten vials of diclofenac—which remains a legal prescription drug for humans—for the equivalent of about 50 cents. Bowden also knows of several instances of Indian pharmacists selling diclofenac for use in animals, as well as nimesulide, another painkiller that vets have been banned from using because it's toxic for vultures.

Bowden compared the situation in India with Nepal, which has almost entirely ended the use of toxic NSAIDs. There, released vultures have thrived: wild populations of most species have stabilised or even increased. "It's not a coincidence," he said. Nepal's vulture populations are increasing at such a steady rate without human assistance that, in 2023, its only captive breeding centre closed down after setting its last ten birds free.

Yet, despite the risks, precipitous releases of vultures in India continue to happen. This is perhaps because they are institutional milestones that allow conservationists to demonstrate their ongoing relevance and India to project itself as a leader in wildlife protection. "It is often done for trivial reasons, including photo ops," Ravi Chellam, a wildlife biologist, told me.

[IMG:https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/1843_20260409_Vulture_05.jpg]

A week after I left Pinjore, the chief minister of Haryana found space in his diary, meaning the long-postponed vulture release could finally go ahead. Each bird had been tagged with GSM trackers and satellite transmitters. The expensive subscriptions to these trackers will expire in a year and a half. Biologists hope that the government will sanction the funds to keep their research alive, but they are not confident.

After all the pomp and preparation, the release itself was anti-climactic. The chief minister pulled a rope to hoist the pulley gate of the aviary. For half an hour, a knot of politicians, bureaucrats and conservationists watched as nothing happened. Eventually, an inquisitive bird waddled out of the aviary and lumbered about outside before flying back in. It took days for all 25 of the white-rumped vultures to fly away—by which point the VIPs had long dispersed.

So far, the released vultures are thriving. Two of the birds have even paired with wild vultures, and the staff are looking forward to the eggs hatching. As Lalit Sharma, the technician, told me, "God willing, we shall see many more vultures in the sky in the next few years."`,
  },
  {
    id: "public-domain-2026",
    title: "Betty Boop, Pluto and the works entering the public domain in 2026",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Arts & Culture",
    readingTime: 4,
    curated: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjXkwU6ZrpG087fxOBV457LrKp99PcvfBPA&s",
    content: `Every January 1st, copyright law lets a new wave of creative works slip out of private ownership and into the public domain — meaning anyone can share, perform, adapt or build on them, free of charge. In 2026, a new batch of iconic works from 1930 joined the roster in the United States, including the original Betty Boop cartoons, Walt Disney's first Pluto shorts, the first four Nancy Drew mystery novels, and Greta Garbo's first "talkie", Anna Christie.

US copyright for works published in 1930 expired after the standard 95-year term. For many educators and creators, the annual public-domain release is a small cultural holiday: teachers can freely stream the films in class, indie game developers can remix the characters, and publishers can reissue books without paying a licensing fee.

Betty Boop is arguably the headline act. Created by the Fleischer Studios animator Max Fleischer, Betty first appeared in Dizzy Dishes in August 1930 as a flirtatious, jazz-age caricature. Over the following decade she would be softened and eventually censored by the Hays Code, which policed moral content in American film. Her original, rougher incarnation is now fair game — although the later, tamer version of the character remains under trademark protection, which is different from copyright and can last indefinitely.

Disney's Pluto is another milestone. The yellow bloodhound first appeared as a nameless tracker in The Chain Gang, a 1930 Mickey Mouse short. He would not become "Pluto the pup" until the following year, meaning only his earliest appearance has entered the public domain. Disney has long been associated with lobbying to extend US copyright terms — the 1998 "Sonny Bono" Copyright Term Extension Act is nicknamed the "Mickey Mouse Protection Act" — so each January release edges closer to the company's core characters.

The Nancy Drew series, written under the pseudonym Carolyn Keene, also became freely available. The first four titles — The Secret of the Old Clock, The Hidden Staircase, The Bungalow Mystery, and The Mystery at Lilac Inn — launched one of the most enduring franchises in young-adult fiction.

Beyond cartoons and crime novels, the 2026 batch includes compositions by George Gershwin and Cole Porter, early works by William Faulkner and Agatha Christie, and dozens of films. For learners of English, the public domain is a quietly generous resource: it is the legal basis on which Project Gutenberg distributes free classics, and why so many Hollywood film schools can assign classic shorts without clearing rights.

Copyright rules vary by country. In the UK and the EU, works generally enter the public domain 70 years after the author's death, not 95 years after publication, so the lists look different. But the underlying idea is the same: creativity eventually becomes a shared inheritance.

— — —

Summary based on public reporting by NPR, the Center for the Study of the Public Domain at Duke University, and Reuters.`,
  },
  {
    id: "kennedy-centre-closure-2026",
    title: "Inside the crisis at the Kennedy Centre",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Politics & Culture",
    readingTime: 6,
    curated: true,
    image: "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/1843_20260205_1843_Kennedy_Centre_01.jpg",
    content: `In December 2025, President Donald Trump took to the stage in black tie to host the 48th Kennedy Centre Honours — the first time a sitting US president had served as master of ceremonies at the arts venue's annual awards. Just two months later, he announced on his social-media platform that the centre would close for "approximately" two years for a complete rebuild, describing the existing building as "tired, broken, and dilapidated".

The announcement marked a low point in a chaotic year for what is often called America's "palace of culture". The Kennedy Centre, a marble-clad venue on the banks of the Potomac, opened in 1971 as a living memorial to President John F. Kennedy. It has historically been funded by a mix of federal money and private donations, and its board has traditionally drawn trustees from both political parties.

That changed in February 2025, when Trump replaced the sitting trustees with his own supporters, who then installed him as chairman. The head of the centre was replaced by Richard Grenell, a Trump loyalist and former ambassador to Germany with no background in the arts. On Truth Social, Trump vowed to make the Kennedy Centre "GREAT AGAIN" by stripping out what he called "wokery" and drag performances.

What followed was a dramatic reshaping of the institution. The new management dismantled the centre's social-impact programme, dismissed about 20 people from the fundraising department on a single day — dubbed "Bloody Friday" by staff — and launched a new faith-and-family strand of programming that included a Christian-themed Christmas show featuring the Republican speaker of the House reading from the New Testament.

Artists began pulling out. Philip Glass, the composer, withdrew a new symphony about Abraham Lincoln, saying the centre's values now conflicted with the work's message. The Washington National Opera, the centre's resident opera company, severed its ties. Productions of Hamilton and several Broadway musicals were cancelled. An analysis by the Washington Post found that ticket sales in autumn 2025 were the worst they had been since the pandemic.

Grenell, for his part, has rejected accusations of mismanagement. He told PBS that the centre was "in great financial shape" since Trump's takeover and had raised more than $130m in donations. But a congressional investigation led by Senator Sheldon Whitehouse has begun examining the centre's spending and contracts, including a free three-week booking granted to FIFA for the 2026 World Cup draw that reportedly cost the venue more than $5m in lost revenue.

The two-year closure, which begins on July 4th 2026, is officially billed as a renovation. Critics argue it is also a way of covering up plunging attendance and a boycott by artists. "He will actually plan to tear it down, turn it into the Trump Centre," said Chellie Pingree, the Democratic congresswoman who sits on the committee that oversees the centre's federal funding. Whether the venue reopens in 2028, and what it will look like if it does, remains an open question.

— — —

Summary based on reporting by The Economist's 1843 magazine (Charlie McCann), the Washington Post and PBS.`,
  },
  {
    id: "kuru-cannibalism-science",
    title: "How a cannibal funeral ritual helped win two Nobel prizes",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Science",
    readingTime: 6,
    curated: true,
    image: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F106d0064-62df-11ee-92b7-341e89720b32.jpg?crop=1120%2C630%2C7%2C84",
    content: `In the highlands of Papua New Guinea, in the middle of the 20th century, a small group of villagers began to stumble when they walked. Some trembled uncontrollably. Others laughed at nothing in particular. Within a year or two of the first symptoms, nearly all of them were dead. The Fore people, the community affected, called the illness "kuru", which means "to shake" in their language. Most of the victims were women and children.

When Australian doctors reached the Fore valleys in the late 1950s, kuru seemed impossible to explain. It was clearly a neurological disease: autopsies showed that victims' brains were riddled with tiny holes, like a sponge. But it did not behave like any infection they knew. It was not caused by a virus, a bacterium or a parasite. There were no fevers, no inflammation, no immune response — and yet it seemed to spread inside families.

The breakthrough came from an unexpected source: anthropology. In 1961, Shirley Lindenbaum, an anthropologist, arrived in the highlands to live among the Fore. She carefully documented their funeral customs. Traditionally, when a relative died, the women and children of the extended family would eat parts of the body, including the brain. The Fore regarded this as a loving act that returned the deceased's "life force" to their community. Lindenbaum, along with her colleague Robert Glasse, proposed a simple but shocking hypothesis: kuru was being transmitted by this ritual cannibalism.

Many scientists were sceptical. But the medical researcher Carleton Gajdusek was able to prove them right in a roundabout way. He injected brain tissue from kuru victims into laboratory chimpanzees, and years later the animals developed the same spongy brain lesions. Kuru, it turned out, was infectious — but by a biological agent unlike anything in textbooks. For this work, Gajdusek received the Nobel Prize in Medicine in 1976.

The story did not end there. Another researcher, the American biochemist Stanley Prusiner, spent years trying to identify exactly what kuru and similar diseases — such as scrapie in sheep and, later, BSE or "mad cow disease" in cattle — were actually made of. Every suspected microbe came up empty. In 1982 Prusiner proposed something radical: the infectious agent was not a living organism at all, but a misshapen protein he called a "prion". Prions, he argued, could convert normal versions of the same protein in the brain into the same twisted shape, causing a chain reaction. For describing this new class of disease, Prusiner won the Nobel Prize in Medicine in 1997.

The Fore stopped the funeral practice in the late 1950s, as Australian authorities discouraged it. But kuru has an extremely long incubation period — sometimes more than 50 years — and new cases continued to appear for decades. The last confirmed patient died in 2009.

The kuru story is now considered a milestone in modern medicine. It helped scientists understand mad-cow disease and its human equivalent, variant Creutzfeldt-Jakob disease, which killed hundreds of people in Britain in the 1990s. It also raised intriguing questions about human prehistory: a 2003 study found that many populations around the world carry a genetic variant that appears to protect against prion disease, hinting that ritual cannibalism may have been more widespread in deep history than we like to admit.

What began as a tragedy for a handful of villages in the Papuan highlands ended up reshaping our understanding of how life itself can go wrong. It is one of the rare cases in which careful anthropology, field medicine and molecular biology each played an essential part — and it all started with a question that only people willing to sit with the Fore could answer: what exactly had been happening at the funerals?

— — —

Summary based on the Wikipedia article on kuru, peer-reviewed reviews on PubMed Central (Liberski et al. 2019; Collinge et al. 2016) and the Nobel Prize committee's published prize motivations.`,
  },
  {
    id: "marxism-explained",
    title: "Marxism, in brief: the idea that wouldn't go away",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Politics",
    readingTime: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg",
    curated: true,
    content: `Few thinkers have been buried as often, and as loudly, as Karl Marx. Every time an economic crisis passes or a communist regime falls, commentators announce the definitive end of Marxism. And yet, more than 140 years after Marx's death in London in 1883, university reading lists, political parties, protest movements and even parts of mainstream economics keep returning to his ideas. Understanding what they are — and what they are not — is useful for any serious reader of modern history.

Marxism began as an attempt to answer a single, urgent question: why does a system as productive as industrial capitalism generate such extreme inequality? Marx and his lifelong collaborator, the German factory-owner's son Friedrich Engels, grew up alongside the first full wave of industrialisation in Europe. They saw huge new factories producing more wealth than humans had ever seen, while the workers inside them lived in slums, worked fourteen-hour days and could be fired at a moment's notice. Marx's answer, developed in books such as The Communist Manifesto (1848) and Capital (first volume, 1867), was that capitalism was not just unfair but systematically so.

At the centre of Marxism are three main ideas. The first is the labour theory of value — the claim that the value of a product ultimately comes from the human labour that went into making it, and that profit under capitalism represents the portion of this value that the worker produces but does not receive. The second is class struggle — the idea that every historical society has been divided into groups with opposing economic interests, and that modern capitalism boils this down to a conflict between a small class of owners (the "bourgeoisie") and a large class of workers (the "proletariat"). The third is historical materialism — the view that the material conditions of a society, especially how it produces its food, goods and technology, largely shape its politics, laws and even its culture.

Marx expected that capitalism would eventually collapse under its own contradictions, replaced by a socialist society in which the means of production would be collectively owned. Whether that prediction has been refuted, or merely delayed, remains one of the great debates of political philosophy. In the 20th century, self-described Marxist parties took power in Russia, China, Cuba, Vietnam and elsewhere. Their record is deeply mixed: rapid industrialisation and mass literacy in some cases; famine, censorship and political violence in others. Most Western left-wing parties, by contrast, moved towards a democratic socialism that accepted markets and elections but sought to soften capitalism's edges through taxes, public services and regulation.

After the fall of the Soviet Union in 1991, many academics declared Marxism obsolete. But the 2008 financial crisis, followed by more than a decade of rising inequality, stagnating wages and growing climate anxiety, pushed Marx back onto bookshop tables. A 2026 New Statesman essay argued that "Marxism can still change the world" by providing a framework for analysing digital labour, platform monopolies and ecological breakdown — even where few readers want to bring back five-year plans.

Critics remain numerous. Some argue that Marx's economics was empirically wrong, that his labour theory of value cannot compete with modern marginalist economics, and that his political predictions have simply not come true. Others point out that 20th-century Marxist states produced some of the most brutal regimes in history and that any revival of his ideas should carry a very heavy warning label. Defenders reply that Marx was a critic of actually existing capitalism, not a blueprint for utopia, and that his tools for analysing power, class and crisis remain indispensable, whatever one does with the conclusions.

Whether you end up convinced or sceptical, Marxism is hard to ignore. Its vocabulary — class, capital, alienation, ideology, commodification — has leaked into everyday political speech far beyond the people who would call themselves Marxists. For a language learner aiming at IELTS Band 7 or higher, these are also some of the most productive words in academic English.

— — —

Summary based on entries in the Stanford Encyclopedia of Philosophy, The Economist's 200-year retrospective on Marx (2018), a 2026 essay in the New Statesman, and contemporary debates in Science & Society and the Journal of Contemporary Asia.`,
  },
  {
    id: "kamila-valieva-eteri-girls",
    title: "Kamila Valieva and the Eteri girls: the price of being the best",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Sport",
    readingTime: 16,
    image: "https://www.gpb.org/sites/default/files/styles/flexheight/public/npr_story_images/2022/02/10/kamila-valieva-doping-test-figure-skating-olympics-1a617f28d9d3e82035807a9621f7b7407c0393ec.jpg?itok=twmz9p1J",
    curated: true,
    content: `When Kamila Valieva took the ice at the 2022 Beijing Winter Olympics, she was fifteen years old, a child and a phenomenon. In the team event on February 7th, she became the first woman in Olympic history to land a quadruple jump — a quadruple Salchow that drew gasps even from the commentators paid to stay composed. She followed it with a triple axel and a quadruple toe loop–triple toe loop combination, finishing her free skate with a score that helped the Russian Olympic Committee claim gold. It was a routine built on three ultra-C elements — the informal term for jumps above triple-axel level, the ones that separate generational talent from everyone else. No woman before her had packed that firepower into a single Olympic programme.

By the time she arrived in Beijing, Valieva had already broken every meaningful world record. At the Rostelecom Cup in Moscow in November 2021, she scored 87.42 in the short programme, 185.29 in the free skate and 272.71 overall — each one a new world record. Her technical element score in the free programme alone was 109.02, paired with a programme component score of 76.27. She won the event by more than 43 points, the largest winning margin in recent Grand Prix history. Weeks later, at the 2022 European Championships in Tallinn, she shattered her own short-programme record again with 90.45 points. These numbers, though later formally annulled, remain the highest ever achieved in women's figure skating.

What made Valieva exceptional was not simply the jumps, but the way she did everything else. Most skaters who attempt ultra-C elements sacrifice artistry: their programmes become obstacle courses, jump after jump connected by tentative crossovers. Valieva was different. Her spins were centred and blindingly fast, her spirals held at full extension, her footwork complex and performed at speed. She could transition in and out of jumps using Ina Bauer entries, spread eagles and backward crossovers that other skaters would use as standalone highlights. Judges recognised this in her component scores, which consistently rivalled or exceeded those of skaters who attempted far less technical content.

Her Bolero programme — set to Ravel's iconic 1928 orchestral piece — was the centrepiece of her 2021-22 free skate, and is worth lingering over. Bolero is one of the most deceptively difficult pieces of music a skater can choose. Its tempo is rigidly moderate, maintained by a single snare drum pattern that repeats more than 150 times over roughly fifteen minutes (abridged to around four and a half minutes for skating). There is no acceleration. The melody passes from instrument to instrument — flute, clarinet, bassoon, trumpet, saxophone, trombone — while the volume and orchestral density gradually build towards a single, overwhelming crescendo. The skater must mirror this architecture: beginning softly, with minimal gestures, and progressively expanding the choreographic language until the final seconds demand everything — full-body movement, maximal speed, total commitment. To skate Bolero well, you need to resist the instinct to peak too early.

What made Valieva's version extraordinary was that she loaded it with ultra-C elements. No other singles skater had ever performed Bolero with quadruple jumps. The technical layout at the Rostelecom Cup was staggering: a quadruple Salchow as the opening element, followed by a triple axel, a quadruple toe loop–triple toe loop combination, a quadruple toe loop–Euler–double Salchow combination, a triple loop, a triple flip–triple loop combination and a triple Lutz. Three quads, a triple axel and seven total jumping passes — all embedded within choreography that portrayed, as Valieva herself described it, a snake gradually uncoiling. Critics and former champions called it the most complete free programme in the history of women's skating.

Then came the news that shattered everything.

On February 8th 2022, during the days between the team event and the individual competition, the International Testing Agency confirmed that a sample Valieva had given at the Russian National Championships on December 25th 2021 had tested positive for trimetazidine — a heart medication that increases blood flow and is on the World Anti-Doping Agency's prohibited list. The laboratory in Stockholm had taken six weeks to report the result, a delay that remains controversial: had the finding arrived before the Olympics, Valieva would almost certainly have been barred from competing.

The scandal that followed played out in real time, broadcast globally. A hastily convened Court of Arbitration for Sport panel at Beijing ruled that Valieva, as a "protected person" (a minor under WADA's code), could not be provisionally suspended. She was allowed to continue competing in the individual event. The International Olympic Committee responded by declaring that if Valieva finished in the top three, no medal ceremony would be held. The pressure on a fifteen-year-old was now beyond anything sport normally asks of an adult.

Valieva's short programme in the individual event was strong — she placed first. But in the free skate, skating to Bolero under the weight of the world's attention, she fell apart. She stumbled on her opening quadruple Salchow, fell on her quadruple toe loop, and was visibly shaking through the second half of the programme. She finished fourth. The first thing her coach, Eteri Tutberidze, said to her as she left the ice — captured on live television — was not consolation but reproach: "Why did you let it go? Why did you stop fighting?" The exchange prompted Thomas Bach, president of the IOC, to publicly describe what he had seen as "chilling".

The gold medal went to her teammate Anna Shcherbakova, who told reporters afterward that she felt "an emptiness inside". The silver went to Alexandra Trusova, who was so distraught at not winning despite landing five quadruple jumps — a record for any skater at the Olympics — that she refused to stand on the podium and was heard saying "I hate skating, I hate it". The bronze went to Japan's Kaori Sakamoto, who appeared more bewildered than triumphant. It was the most joyless Olympic podium in living memory.

To understand how Valieva, Trusova and Shcherbakova ended up there, you have to look at the system that made them. Eteri Tutberidze, a former ice dancer, runs a training group at Moscow's Sambo-70 sports complex alongside choreographer Daniil Gleikhengauz and jump technician Sergei Dudakov. Over more than a decade, the group has produced a production line of teenage female skaters who have dominated the sport with mechanical consistency.

The formula is brutal in its simplicity. Take a girl of around eleven or twelve. Train her in an extreme regime of diet, weight restriction and repetition. Compete her to the absolute limit of the window — typically between ages fourteen and seventeen — during which a pre-pubescent body can rotate fast enough to land quadruple jumps. When puberty arrives, when the injuries accumulate, when the quads stop landing, there is always another girl coming up behind. Yulia Lipnitskaya won Olympic team gold at fifteen in 2014 and retired at nineteen after an eating disorder. Evgenia Medvedeva won two consecutive world titles then lost the 2018 Olympic gold to her training partner Alina Zagitova — who was fifteen — and left the group. Zagitova herself retired from competition at eighteen, saying she had "lost motivation".

Of all the skaters Tutberidze produced, most insiders agree that Valieva was the best. She combined Medvedeva's emotional depth and musicality with Trusova's raw jumping power, Zagitova's tactical discipline with Shcherbakova's grace under pressure — and added a quality that was uniquely her own: an ability to make the most difficult technical content in the sport look like it belonged inside the music rather than on top of it. Her Bolero and her earlier "In Memoriam" programme (set to Kirill Richter's piano music and skating to the Schindler's List soundtrack) have collectively been viewed tens of millions of times on YouTube. They are, by any reasonable measure, among the greatest figure-skating performances of the 21st century. They were skated by a child.

On January 29th 2024 — nearly two years after Beijing — the Court of Arbitration for Sport in Lausanne issued its final ruling. It confirmed that Valieva had committed an anti-doping violation, imposed a four-year ban backdated to December 25th 2021, and disqualified all competitive results from that date onward. Her European title, her Grand Prix victories, her world records — all formally annulled. The Russian team's Olympic gold in the team event was stripped and awarded to the United States. The panel explicitly stated that Valieva's age "could not be used to reduce her sanction". A Swiss federal court later upheld the ruling.

It is this last point that sticks. In virtually every other area of law — criminal, civil, contractual — a minor is treated differently from an adult. A fifteen-year-old cannot sign a binding contract, buy alcohol, consent to surgery or, in most jurisdictions, be sentenced as an adult. But in international sport, a fifteen-year-old can be held solely responsible for a banned substance found in her body, while the adults who controlled every aspect of her training, nutrition and medical care walk free. WADA itself publicly expressed frustration that no investigation of Tutberidze or her staff was ever opened by Russian authorities. No coach, doctor, nutritionist or federation official received any sanction.

Valieva's defence — that her grandfather's heart medication had inadvertently contaminated something she consumed — was rejected by CAS, which found the explanation insufficiently supported. Whether or not the contamination story is true, the deeper question is why a fifteen-year-old was expected to prove it. She did not buy the medication. She did not prescribe it. She did not, in all likelihood, prepare her own food. The system that was supposed to protect her — from doping, from exploitation, from the consequences of adults' decisions — failed at every level.

Kamila Valieva's ban expired in December 2025. She is now twenty years old, a young adult who spent her entire adolescence inside a system that demanded everything and protected almost nothing. Whether she returns to competitive skating remains uncertain. The quad-jumping body of a fifteen-year-old is gone. But the recordings survive: the snake uncoiling to Bolero's crescendo, the triple axel floating out of an Ina Bauer, the arms extending into a final spin as the orchestra roars. They are evidence of something rare — not just talent, but a kind of athletic perfection that the sport may not see again for a generation. The tragedy is not that the records were annulled. The tragedy is that a child was placed in the position of having them annulled, while every adult around her kept their job, their freedom and their silence.

— — —

Summary based on reporting by CNN, NPR, the Washington Post, NBC Olympics, Olympics.com, the official CAS ruling (January 2024), ISU scoring protocols, and features on the Eteri Tutberidze school by The Guardian, the New York Times, Classic FM and Russian-language outlet Match TV.`,
  },
  {
    id: "beethoven-ninth-symphony",
    title: "The deaf composer who wrote Europe's anthem: two centuries of Beethoven's Ninth",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Arts & Culture",
    readingTime: 8,
    curated: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven.jpg/640px-Beethoven.jpg",
    content: `On the evening of 7 May 1824, an audience filed into Vienna's Kärntnertortheater to hear a new symphony by a man who could no longer hear his own music. Ludwig van Beethoven was fifty-three, almost completely deaf, and had not presented a major public premiere in a decade. The piece he was about to unveil — Symphony No. 9 in D minor, Op. 125 — ran to over an hour, used an unprecedented four vocal soloists and a full chorus in the final movement, and set to music a poem by Friedrich Schiller called "An die Freude" — "Ode to Joy". It was a structural and philosophical experiment unlike anything European audiences had encountered.

Beethoven stood on stage beside the official conductor, Michael Umlauf, beating time for his own work even though he could not follow it by ear. When the symphony ended, the audience erupted. According to the contralto Caroline Unger, who sang one of the solo parts, the composer was still facing the orchestra, unaware of the applause behind him. Unger gently turned him around so he could see the crowd on their feet. It is one of the most quoted scenes in the history of Western music — although, like many famous anecdotes, some details vary between eyewitness accounts.

Two hundred years later, the Ninth has become something far larger than a symphony. The "Ode to Joy" melody is the official anthem of the European Union, adopted in 1985. It was performed at the reunification of Germany on Christmas Day 1989, conducted by Leonard Bernstein, who replaced the word "Freude" (joy) with "Freiheit" (freedom) for that single occasion. It is played every year in Japan during the end-of-year concert season — a tradition that began with prisoners of war in 1918 and now draws tens of thousands of singers into massed performances of the final chorus. In 2001, UNESCO added the original manuscript to its Memory of the World register, making it one of the few musical scores with that status.

Understanding why the Ninth had such a long afterlife requires looking at what Beethoven actually did in the score. Symphonies before 1824 were almost always purely instrumental. By putting a chorus inside a symphony — and by giving them words about universal human brotherhood — Beethoven fused two previously separate genres: the symphony and the oratorio. Composers from Berlioz to Mahler to Shostakovich would later follow him, writing symphonies with voices, but Beethoven's was the first.

The work's structure is also unusual. It lasts roughly seventy minutes, which at the time was extraordinarily long; most symphonies before it ran to twenty-five or thirty. The first movement, marked Allegro ma non troppo, un poco maestoso, opens with a famous "open fifth" — a bare, almost primal interval that musicologists have described as sounding like the tuning of the world itself. The scherzo that follows is in an aggressive triple time, famously using timpani tuned an octave apart, a detail Beethoven wrote into the score with almost childlike enthusiasm. The slow movement is a long, tender Adagio in two alternating themes, often cited as one of the most emotionally mature pieces he ever wrote.

Then comes the finale. It begins with a chaotic orchestral outburst — Wagner called it the "Schreckensfanfare" or "terror fanfare" — followed by a bass soloist singing the startling line "O Freunde, nicht diese Töne!" ("Oh friends, not these sounds!"). These words are not from Schiller. Beethoven wrote them himself. It is as if the composer is pushing the previous three movements aside and demanding a different kind of music. The chorus then enters with the famous theme, a deliberately simple melody Beethoven constructed so that ordinary people could sing it — and they have, for two centuries.

Beethoven's deafness is central to the mythology of the Ninth, but it is worth being precise. He began losing his hearing around 1798, when he was in his late twenties. By 1814 he was using conversation books — notebooks in which visitors wrote down their side of a dialogue — and by the time of the Ninth's premiere, he was profoundly deaf. Modern medical historians have debated the cause for decades. Lead poisoning, otosclerosis, and various autoimmune conditions have all been proposed. A lock of the composer's hair, analysed in 2023 using whole-genome sequencing by an international team led by the University of Cambridge, confirmed very high lead levels and a genetic predisposition to liver disease, without settling the exact cause of the hearing loss.

What the Ninth demonstrates is that deafness did not stop Beethoven composing — it changed how he composed. He worked increasingly from inner ear, sketching and revising for years. The Ninth occupied him, on and off, for nearly a decade. His sketchbooks show the "Ode to Joy" theme evolving through dozens of drafts, slowly being simplified until it reached the singable form we know.

For IELTS-level English learners, the vocabulary of the Ninth is a small world in itself: premiere, oratorio, chorus, soloist, tempo, movement, score, premiere, manuscript. The work's reception history is also a useful case study in how art acquires meaning over time. In 1824 it was admired but controversial. By the mid-nineteenth century, Wagner and others had made it the central text of a whole musical philosophy. By the twentieth century it had become propaganda — used by the Nazi regime at party rallies, by the Allies in victory concerts, and by the Japanese orchestra tradition as a year-end ritual. The same seventy minutes of music have meant radically different things to radically different societies.

The anniversary year of 2024 saw new performances and new controversies. Several German orchestras used the 200th anniversary to reconsider the piece's uncomplicated embrace of universal brotherhood, noting that Schiller's text speaks of "all men becoming brothers" in a language that excludes half the human race. Some conductors commissioned companion pieces by women composers to be performed alongside it. Others argued that the Ninth's universality is precisely what allows it to be re-read. The Kyiv Symphony Orchestra performed it in Lviv in February 2024, two years into Russia's full-scale invasion of Ukraine, specifically to reclaim the words "all men become brothers" as an act of hope rather than irony.

Two hundred years on, the Ninth remains a puzzle: a piece written by a man who could not hear, setting words written by a man who died in 1805, performed by orchestras using instruments the composer never imagined, in halls wired for sound he would never have accepted. And yet every year, new listeners — including language students encountering it in anthologies and film scores — hear the same tune emerge from the orchestra, and recognise it immediately. That recognition is not an accident. Beethoven designed a melody that a non-musician could sing after one hearing. He knew, even when he could no longer hear it himself, that music this plain and this open would survive.

— — —

Summary based on reporting by BBC Music Magazine, Gramophone, Deutsche Welle, The New York Times, the Beethoven-Haus Bonn (which holds the original manuscript), UNESCO's Memory of the World register entry, and the 2023 Cambridge/Max Planck study on Beethoven's DNA published in Current Biology.`,
  },
  {
    id: "why-we-procrastinate",
    title: "Why we procrastinate — and why it has nothing to do with laziness",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Psychology",
    readingTime: 6,
    curated: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    content: `Most people think procrastination is a time-management problem. You have a task, you have a deadline, and you simply fail to organise your hours well enough to finish it. But a growing body of research in psychology suggests that procrastination is not about time at all. It is about emotion.

Dr Timothy Pychyl, a professor at Carleton University in Ottawa who has studied procrastination for over twenty years, defines it as "the voluntary, unnecessary delay of an intended action despite knowing that this delay will probably make things worse." The key word is voluntary. Procrastinators are not unaware that they should be working. They know perfectly well. They choose not to — not because they are lazy, but because the task triggers a negative emotion they want to avoid: boredom, anxiety, frustration, self-doubt, or resentment.

The avoidance itself provides instant relief. Scrolling through social media, reorganising a bookshelf, or even doing a less important piece of work all serve the same purpose: they replace a bad feeling with a tolerable one. The problem is that the relief is temporary. The task remains, the deadline approaches, and now a new emotion enters the picture — guilt.

Guilt makes the next attempt to start even harder. The procrastinator now associates the task not only with its original unpleasantness but also with the shame of having avoided it. A vicious cycle forms: avoidance leads to guilt, guilt leads to more avoidance, and the window of time shrinks until the only option left is a panicked, last-minute sprint. This sprint, while stressful, often produces acceptable results — which paradoxically reinforces the habit. The procrastinator learns, incorrectly, that they "work best under pressure."

Neuroscience offers a partial explanation. When a person encounters a task they find aversive, the amygdala — the brain's threat-detection centre — activates. It treats the negative emotion as a kind of danger. The prefrontal cortex, which handles planning and impulse control, is supposed to override this alarm, but in chronic procrastinators the prefrontal cortex tends to lose the argument. The result is a pattern of short-term mood repair at the expense of long-term goals.

So what actually helps? Pychyl and others recommend a strategy they call "implementation intentions." Instead of telling yourself "I will write my essay this weekend," you commit to a precise cue: "When I sit down at my desk after lunch on Saturday, I will open a blank document and write the first paragraph." The specificity bypasses the emotional resistance because it removes the decision point. You are no longer choosing whether to start — you are simply following a plan you already made.

Another effective technique is the "two-minute rule." If you can do the very first step of a task in under two minutes — opening the file, reading the first question, writing a single sentence — you commit to doing only that. The barrier to entry drops so low that the amygdala barely notices. And once you have started, continuing is almost always easier than starting was.

Perhaps the most important insight from the research is this: being kind to yourself about past procrastination actually reduces future procrastination. A study by Pychyl and his colleague Michael Wohl found that students who forgave themselves for procrastinating before a first exam were less likely to procrastinate before the second one. Self-compassion breaks the guilt cycle. Beating yourself up, counterintuitively, makes the problem worse.

Procrastination, then, is not a character flaw. It is a misguided attempt to manage difficult emotions. Understanding this does not make deadlines disappear. But it does suggest that the solution is not a better calendar or a stricter schedule — it is a better relationship with the feelings that tasks provoke.

— — —

Summary based on research by Dr Timothy Pychyl (Carleton University), Dr Fuschia Sirois (Durham University), Dr Piers Steel (University of Calgary), and studies published in Psychological Bulletin, the Journal of Behavioral Decision Making, and Personality and Individual Differences.`,
  },
  {
    id: "ocean-plastic-cleanup",
    title: "Can we actually clean the ocean? The engineering challenge of a generation",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "Environment",
    readingTime: 7,
    curated: true,
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800",
    content: `Every year, an estimated eight million metric tonnes of plastic enters the world's oceans. The number is so large that it is difficult to visualise. One useful comparison: it is roughly equivalent to dumping a full garbage truck of plastic into the sea every single minute of every day. Most of this waste comes from rivers in Asia and Africa, where waste-management infrastructure has not kept pace with the growth in plastic production.

Once in the ocean, plastic does not biodegrade. It photodegrades — sunlight breaks it into smaller and smaller fragments, but the polymer chains remain intact. A single plastic bottle, tossed into the sea today, will still exist in some form 450 years from now. Over time, these fragments become microplastics: pieces smaller than five millimetres that are now found in Arctic ice, deep-sea sediment, rainwater, human blood, and breast milk.

The most famous attempt to clean the ocean is The Ocean Cleanup, a Dutch non-profit founded in 2013 by Boyan Slat, who was eighteen years old at the time. His original concept involved a passive floating barrier that would let ocean currents concentrate plastic into a central collection point. It was elegant in theory, but the ocean had other plans. The first prototype, deployed in the Great Pacific Garbage Patch in 2018, broke apart within months. The currents were stronger and more unpredictable than models had suggested, and the plastic moved faster than the barrier.

Slat's team iterated. System 002, nicknamed "Jenny," used a slow-moving vessel to tow a U-shaped barrier through the garbage patch, actively sweeping plastic rather than waiting for currents to deliver it. By 2023, The Ocean Cleanup reported that Jenny had collected over 200,000 kilograms of plastic from the Pacific. It was a proof of concept, but the scale remained daunting. The Great Pacific Garbage Patch alone covers 1.6 million square kilometres — roughly three times the area of France — and contains an estimated 80,000 tonnes of plastic.

Critics of ocean cleanup point to a fundamental problem: removing plastic from the ocean is treating the symptom, not the cause. Dr Marcus Eriksen, co-founder of the 5 Gyres Institute, argues that "you cannot clean the ocean with a net. The solution is to turn off the tap." He advocates for upstream intervention: reducing plastic production, improving waste collection in the countries where most ocean plastic originates, and designing packaging that is genuinely recyclable or compostable.

The numbers support his argument. Even the most optimistic projections for The Ocean Cleanup suggest it could remove 90 percent of floating ocean plastic by 2040 — but only if plastic input is simultaneously reduced by 80 percent. Without reducing input, cleanup is a losing race: more plastic enters the ocean each year than any conceivable fleet of cleanup vessels could extract.

River interception has emerged as a promising middle ground. The Ocean Cleanup's "Interceptor" — a solar-powered barge anchored in a river — catches plastic before it reaches the sea. Interceptors are now deployed in rivers in Indonesia, Malaysia, Vietnam, the Dominican Republic, and Jamaica. Each can extract up to 100,000 kilograms of waste per day under ideal conditions. Because rivers concentrate plastic into narrow channels, interception is far more efficient than open-ocean cleanup.

Meanwhile, material scientists are exploring biological solutions. Researchers at the University of Texas at Austin engineered a variant of the enzyme PETase that can break down PET plastic (used in bottles and packaging) in as little as 24 hours — a process that normally takes centuries. If the enzyme can be produced at industrial scale, it could make plastic recycling far cheaper and more effective than mechanical recycling, which degrades the material with each cycle.

The engineering challenge of ocean plastic is, at its core, a systems problem. No single technology will solve it. Cleanup, interception, reduction, and material innovation all need to advance together. The question is not whether the engineering is possible — it clearly is — but whether the political and economic will exists to deploy it at the scale required.

— — —

Summary based on reporting by Nature, Science, the Ellen MacArthur Foundation, The Ocean Cleanup project updates, the 5 Gyres Institute, and research published in Science Advances and the Proceedings of the National Academy of Sciences.`,
  },
  {
    id: "silk-road-history",
    title: "The Silk Road: how a network of dirt tracks shaped the modern world",
    author: "London LC Digest",
    source: "London LC Digest",
    category: "History",
    readingTime: 8,
    curated: true,
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800",
    content: `The Silk Road was never a single road and never made of silk. The name, coined by the German geographer Ferdinand von Richthofen in 1877, refers to a vast network of overland and maritime trade routes that connected China to the Mediterranean for roughly 1,500 years, from the second century BCE to the fifteenth century CE. Along these routes moved not only silk but spices, gold, jade, glass, horses, paper, gunpowder, religions, languages, diseases, and ideas. The Silk Road was less a highway than an ecosystem — one that shaped the cultures of every civilisation it touched.

The routes began in the Chinese capital of Chang'an (modern Xi'an) and branched westward through Central Asia. Merchants could take a northern path through the Taklamakan Desert and the Tian Shan mountains, or a southern path skirting the Kunlun range toward Persia. Both converged near the ancient city of Samarkand, in present-day Uzbekistan, before continuing to Baghdad, Constantinople, and eventually the ports of the eastern Mediterranean.

No single merchant ever travelled the entire length. Instead, goods passed through dozens of hands, each intermediary adding a markup. A bolt of Chinese silk might be traded to a Sogdian merchant in Dunhuang, sold to a Parthian dealer in Merv, resold to a Roman wholesaler in Antioch, and finally purchased by a senator's wife in Rome — who had no idea where it came from and no way to find out. This chain of exchange meant that the Silk Road was, in economic terms, one of the earliest examples of globalisation.

The most transformative commodity to travel the Silk Road was not a physical product at all. It was religion. Buddhism spread from India to Central Asia and China along the eastern routes during the first centuries CE, carried by monks and merchants who established monasteries at oasis towns along the way. The cave temples at Dunhuang and Bamiyan are direct products of this transmission. Islam later moved along the same corridors in the opposite direction, reaching western China and Southeast Asia by the eighth century. Christianity, Manichaeism, Zoroastrianism, and Judaism all found new audiences along the network.

Paper and printing moved westward. Gunpowder followed. The compass, invented in China for feng shui divination, eventually reached Europe and transformed navigation. These technologies did not travel quickly — paper took roughly 600 years to make the full journey from China to Europe — but the Silk Road provided the only viable channel.

Disease, too, travelled the routes. The Black Death, which killed roughly a third of Europe's population between 1346 and 1353, is widely believed to have originated in Central Asia and spread westward along Silk Road trade networks. Mongol armies, which controlled much of the route in the thirteenth and fourteenth centuries, may have accelerated the transmission.

The Mongol Empire, under Genghis Khan and his successors, paradoxically created the Silk Road's golden age. By unifying the steppe under a single political authority, the Mongols made overland travel safer than it had been in centuries. The Pax Mongolica, as historians call it, allowed merchants to cross from China to Persia without changing political jurisdictions. Marco Polo's famous journey to the court of Kublai Khan in the 1270s was possible only because of this Mongol peace.

The decline of the Silk Road began in the fifteenth century, driven by two forces. First, the Mongol Empire fragmented, and the Central Asian corridor became dangerous again. Second, European sailors discovered maritime routes to Asia — Vasco da Gama reached India in 1498, and the Portuguese established direct sea trade that bypassed the overland middlemen entirely. Goods that had taken months to cross deserts and mountains could now be shipped by sea in weeks.

Samarkand, Bukhara, Merv, Kashgar — the great trading cities of the Silk Road — gradually faded from global relevance. But their legacy endures in the genetic, linguistic, and cultural mixing they facilitated. The Uzbek plov eaten in Tashkent today uses rice that came from China, spices that came from India, and a cooking method inherited from Persia. The Cyrillic script used in Central Asian countries descends from a Greek alphabet that reached the region through Byzantine trade. Even the English word "silk" comes from the Old English sioloc, which derives from the Latin sericum, which in turn comes from the Chinese si. The word itself travelled the road.

In 2013, Chinese President Xi Jinping announced the Belt and Road Initiative, explicitly invoking the Silk Road as a model for twenty-first-century infrastructure investment connecting China to Europe, Africa, and Southeast Asia. Whether the modern version will have the same transformative power as the original remains to be seen. But the precedent is clear: when people and goods move, ideas follow — and ideas, once they travel, do not come back.

— — —

Summary based on Peter Frankopan's The Silk Roads: A New History of the World (2015), Valerie Hansen's The Silk Road: A New History (2012), UNESCO's Silk Roads Programme, and reporting by National Geographic and The Economist.`,
  },
];
