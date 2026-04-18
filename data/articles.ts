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
    category: "Culture",
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
    category: "Business",
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
];
