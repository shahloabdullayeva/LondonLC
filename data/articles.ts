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
    id: "how-to-end-war-iran",
    title: "How to end the war in Iran",
    author: "The Economist",
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
];
