import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 15 – TEST 1  (Academic Reading)
// Passages: Nutmeg – a valuable spice /
//           Driverless cars /
//           What is exploration?
// ============================================================
export const cambridge15_reading_t1: IELTSTest = {
  id: "cam15-reading-academic-t1",
  title: "Cambridge IELTS 15 – Test 1",
  bookNumber: 15,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam15-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Nutmeg – a valuable spice",
      passageText: `The nutmeg tree, Myristica fragrans, is a large evergreen tree native to Southeast Asia. Until the late 18th century, it only grew in one place in the world: a small group of islands in the Banda Sea, part of the Moluccas – or Spice Islands – in northeastern Indonesia. The tree is thickly branched with dense foliage of tough, dark green oval leaves, and produces small, yellow, bell-shaped flowers and pale yellow pear-shaped fruits. The fruit is encased in a flesh husk. When the fruit is ripe, this husk splits into two halves along a ridge running the length of the fruit. Inside is a purple-brown shiny seed, 2-3 cm long by about 2 cm across, surrounded by a lacy red or crimson covering called an 'aril'. These are the sources of the two spices nutmeg and mace, the former being produced from the dried seed and the latter from the aril.

Nutmeg was a highly prized and costly ingredient in European cuisine in the Middle Ages, and was used as a flavouring, medicinal, and preservative agent. Throughout this period, the Arabs were the exclusive importers of the spice to Europe. They sold nutmeg for high prices to merchants based in Venice, but they never revealed the exact location of the source of this extremely valuable commodity. The Arab-Venetian dominance of the trade finally ended in 1512, when the Portuguese reached the Banda Islands and began exploiting its precious resources.

Always in danger of competition from neighbouring Spain, the Portuguese began subcontracting their spice distribution to Dutch traders. Profits began to flow into the Netherlands, and the Dutch commercial fleet swiftly grew into one of the largest in the world. The Dutch quietly gained control of most of the shipping and trading of spices in Northern Europe. Then, in 1580, Portugal fell under Spanish rule, and by the end of the 16th century the Dutch found themselves locked out of the market. As prices for pepper, nutmeg, and other spices soared across Europe, they decided to fight back.

In 1602, Dutch merchants founded the VOC, a trading corporation better known as the Dutch East India Company. By 1617, the VOC was the richest commercial operation in the world. The company had 50,000 employees worldwide, with a private army of 30,000 men and a fleet of 200 ships. At the same time, thousands of people across Europe were dying of the plague, a highly contagious and deadly disease. Doctors were desperate for a way to stop the spread of this disease, and they decided nutmeg held the cure. Everybody wanted nutmeg, and many were willing to spare no expense to have it. Nutmeg bought for a few pennies in Indonesia could be sold for 68,000 times its original cost on the streets of London. The only problem was the short supply. And that's where the Dutch found their opportunity.

The Banda Islands were ruled by local sultans who insisted on maintaining a neutral trading policy towards foreign powers. This allowed them to avoid the presence of Portuguese or Spanish troops on their soil, but it also left them unprotected from other invaders. In 1621, the Dutch arrived and took over. Once securely in control of the Bandas, the Dutch went to work protecting their new investment. They concentrated all nutmeg production into a few easily guarded areas, uprooting and destroying any trees outside the plantation zones. Anyone caught growing a nutmeg seedling or carrying seeds without the proper authority was severely punished. In addition, all exported nutmeg was covered with lime to make sure there was no chance a fertile seed which could be grown elsewhere would leave the islands. There was only one obstacle to Dutch domination. One of the Banda Islands, a sliver of land called Run, only 3 km long by less than 1 km wide, was under the control of the British. After decades of fighting for control of this tiny island, the Dutch and British arrived at a compromise settlement, the Treaty of Breda, in 1667. Intent on securing their hold over every nutmeg-producing island, the Dutch offered a trade: if the British would give them the island of Run, they would in turn give Britain a distant and much less valuable island in North America. The British agreed. That other island was Manhattan, which is how New Amsterdam became New York. The Dutch now had a monopoly over the nutmeg trade which would last for another century.

Then, in 1770, a Frenchman named Pierre Poivre successfully smuggled nutmeg plants to safety in Mauritius, an island off the coast of Africa. Some of these were later exported to the Caribbean where they thrived, especially on the island of Grenada. Next, in 1778, a volcanic eruption in the Banda region caused a tsunami that wiped out half the nutmeg groves. Finally, in 1809, the British returned to Indonesia and seized the Banda Islands by force. They returned the islands to the Dutch in 1817, but not before transplanting hundreds of nutmeg seedlings to plantations in several locations across southern Asia. The Dutch nutmeg monopoly was over.

Today, nutmeg is grown in Indonesia, the Caribbean, India, Malaysia, Papua New Guinea and Sri Lanka, and world nutmeg production is estimated to average between 10,000 and 12,000 tonnes per year.`,
      instructions: `Questions 1–4: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 5–7: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 8–13: Complete the table below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–4: Notes completion ────────────────────────────────
        {
          id: "cam15-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–4: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe nutmeg tree and fruit\n● the leaves of the tree are 1……………………. in shape\n● the 2……………………. surrounds the fruit and breaks open when the fruit is ripe\n● the 3……………………. is used to produce the spice nutmeg\n● the covering known as the aril is used to produce 4…………………….\n● the tree has yellow flowers and fruit",
          type: "note_completion",
          question: "1. the leaves of the tree are _______ in shape",
          correctAnswer: "oval",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. the _______ surrounds the fruit and breaks open when the fruit is ripe",
          correctAnswer: "husk",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. the _______ is used to produce the spice nutmeg",
          correctAnswer: "seed",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. the covering known as the aril is used to produce _______",
          correctAnswer: "mace",
          points: 1,
        },
        // ── Q5–7: True/False/Not Given ────────────────────────────
        {
          id: "cam15-ra-t1-s1-q5",
          number: 5,
          groupLabel: "Questions 5–7: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "5. In the Middle Ages, most Europeans knew where nutmeg was grown.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. The VOC was the world's first major trading company.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. Following the Treaty of Breda, the Dutch had control of all the islands where nutmeg grew.",
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q8–13: Table completion ───────────────────────────────
        {
          id: "cam15-ra-t1-s1-q8",
          number: 8,
          groupLabel: "Questions 8–13: Complete the table below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nMiddle Ages – Nutmeg was brought to Europe by the 8……………\n16th century – European nations took control of the nutmeg trade\n17th century – Demand for nutmeg grew, as it was believed to be effective against the disease known as the 9……………\nThe Dutch – took control of the Banda Islands; restricted nutmeg production to a few areas; put 10…………… on nutmeg to avoid it being cultivated outside the islands; finally obtained the island of 11…………… from the British\nLate 18th century – 1770 – nutmeg plants were secretly taken to 12……………; 1778 – half the Banda Islands' nutmeg plantations were destroyed by a 13……………",
          type: "table_completion",
          question: "8. Nutmeg was brought to Europe by the _______",
          correctAnswer: "Arabs",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q9",
          number: 9,
          type: "table_completion",
          question: "9. Demand for nutmeg grew as it was believed to be effective against the disease known as the _______",
          correctAnswer: "plague",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q10",
          number: 10,
          type: "table_completion",
          question: "10. The Dutch put _______ on nutmeg to avoid it being cultivated outside the islands",
          correctAnswer: "lime",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q11",
          number: 11,
          type: "table_completion",
          question: "11. The Dutch finally obtained the island of _______ from the British",
          correctAnswer: "Run",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q12",
          number: 12,
          type: "table_completion",
          question: "12. In 1770, nutmeg plants were secretly taken to _______",
          correctAnswer: "Mauritius",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s1-q13",
          number: 13,
          type: "table_completion",
          question: "13. In 1778, half the Banda Islands' nutmeg plantations were destroyed by a _______",
          correctAnswer: "tsunami",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam15-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Driverless cars",
      passageText: `A
The automotive sector is well used to adapting to automation in manufacturing. The implementation of robotic car manufacture from the 1970s onwards led to significant cost savings and improvements in the reliability and flexibility of vehicle mass production. A new challenge to vehicle production is now on the horizon and, again, it comes from automation. However, this time it is not to do with the manufacturing process, but with the vehicles themselves.

Research projects on vehicle automation are not new. Vehicles with limited self-driving capabilities have been around for more than 50 years, resulting in significant contributions towards driver assistance systems. But since Google announced in 2010 that it had been trialling self-driving cars on the streets of California, progress in this field has quickly gathered pace.

B
There are many reasons why technology is advancing so fast. One frequently cited motive is safety; indeed, research at the UK's Transport Research Laboratory has demonstrated that more than 90 percent of road collisions involve human error as a contributory factor, and it is the primary cause in the vast majority. Automation may help to reduce the incidence of this.

Another aim is to free the time people spend driving for other purposes. If the vehicle can do some or all of the driving, it may be possible to be productive, to socialise or simply to relax while automation systems have responsibility for safe control of the vehicle. If the vehicle can do the driving, those who are challenged by existing mobility models – such as older or disabled travellers – may be able to enjoy significantly greater travel autonomy.

C
Beyond these direct benefits, we can consider the wider implications for transport and society, and how manufacturing processes might need to respond as a result. At present, the average car spends more than 90 percent of its life parked. Automation means that initiatives for car-sharing become much more viable, particularly in urban areas with significant travel demand. If a significant proportion of the population choose to use shared automated vehicles, mobility demand can be met by far fewer vehicles.

D
The Massachusetts Institute of Technology investigated automated mobility in Singapore, finding that fewer than 30 percent of the vehicles currently used would be required if fully automated car sharing could be implemented. If this is the case, it might mean that we need to manufacture far fewer vehicles to meet demand. However, the number of trips being taken would probably increase, partly because empty vehicles would have to be moved from one customer to the next.

Modelling work by the University of Michigan Transportation Research Institute suggests automated vehicles might reduce vehicle ownership by 43 percent, but that vehicles' average annual mileage double as a result. As a consequence, each vehicle would be used more intensively, and might need replacing sooner. This faster rate of turnover may mean that vehicle production will not necessarily decrease.

E
Automation may prompt other changes in vehicle manufacture. If we move to a model where consumers are tending not to own a single vehicle but to purchase access to a range of vehicle through a mobility provider, drivers will have the freedom to select one that best suits their needs for a particular journey, rather than making a compromise across all their requirements.

Since, for most of the time, most of the seats in most cars are unoccupied, this may boost production of a smaller, more efficient range of vehicles that suit the needs of individuals. Specialised vehicles may then be available for exceptional journeys, such as going on a family camping trip or helping a son or daughter move to university.

F
There are a number of hurdles to overcome in delivering automated vehicles to our roads. These include the technical difficulties in ensuring that the vehicle works reliably in the infinite range of traffic, weather and road situations it might encounter; the regulatory challenges in understanding how liability and enforcement might change when drivers are no longer essential for vehicle operation; and the societal changes that may be required for communities to trust and accept automated vehicles as being a valuable part of the mobility landscape.

G
It's clear that there are many challenges that need to be addressed but, through robust and targeted research, these can most probably be conquered within the next 10 years. Mobility will change in such potentially significant ways and in association with so many other technological developments, such as telepresence and virtual reality, that it is hard to make concrete predictions about the future. However, one thing is certain: change is coming, and the need to be flexible in response to this will be vital for those involved in manufacturing the vehicles that will deliver future mobility.`,
      instructions: `Questions 14–18: Reading Passage 2 has seven paragraphs, A–G.
Which section contains the following information?

Questions 19–22: Complete the summary below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 23–24: Choose TWO letters, A–E.
Which TWO benefits of automated vehicles does the writer mention?

Questions 25–26: Choose TWO letters, A–E.
Which TWO challenges to automated vehicle development does the writer mention?`,
      questions: [
        // ── Q14–18: Paragraph matching ───────────────────────────
        {
          id: "cam15-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–18: Reading Passage 2 has seven paragraphs, A–G.\nWhich section contains the following information?\nWrite the correct letter, A–G.",
          type: "matching",
          question: "14. reference to the amount of time when a car is not in use",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. mention of several advantages of driverless vehicles for individual road-users",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. reference to the opportunity of choosing the most appropriate vehicle for each trip",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. an estimate of how long it will take to overcome a number of problems",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. a suggestion that the use of driverless cars may have no effect on the number of vehicles manufactured",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q19–22: Summary completion ────────────────────────────
        {
          id: "cam15-ra-t1-s2-q19",
          number: 19,
          groupLabel: "Questions 19–22: Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe impact of driverless cars\nFigures from the Transport Research Laboratory indicate that most motor accidents are partly due to 19……………………., so the introduction of driverless vehicles will result in greater safety. In addition to the direct benefits of automation, it may bring other advantages. For example, schemes for 20………………………. will be more workable, especially in towns and cities, resulting in fewer cars on the road.\nAccording to the University of Michigan Transportation Research Institute, there could be a 43 percent drop in 21…………………….. of cars. However, this would mean that the yearly 22…………………….. of each car would, on average, be twice as high as it currently is. This would lead to a higher turnover of vehicles, and therefore no reduction in automotive manufacturing.",
          type: "summary_completion",
          question: "19. most motor accidents are partly due to _______",
          correctAnswer: "human error",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q20",
          number: 20,
          type: "summary_completion",
          question: "20. schemes for _______ will be more workable, especially in towns and cities",
          correctAnswer: "car sharing",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. there could be a 43 percent drop in _______ of cars",
          correctAnswer: "ownership",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. the yearly _______ of each car would, on average, be twice as high as it currently is",
          correctAnswer: "mileage",
          points: 1,
        },
        // ── Q23–24: Choose TWO benefits ───────────────────────────
        {
          id: "cam15-ra-t1-s2-q23",
          number: 23,
          groupLabel: "Questions 23–24: Choose TWO letters, A–E.\nWhich TWO benefits of automated vehicles does the writer mention?\n\nA  Car travellers could enjoy considerable cost savings.\nB  It would be easier to find parking spaces in urban areas.\nC  Travellers could spend journeys doing something other than driving.\nD  People who find driving physically difficult could travel independently.\nE  A reduction in the number of cars would mean a reduction in pollution.",
          type: "multiple_choice",
          question: "23. Which TWO benefits of automated vehicles does the writer mention? (Choose TWO — this is the first answer)",
          options: [
            { label: "A  Car travellers could enjoy considerable cost savings.", value: "A" },
            { label: "B  It would be easier to find parking spaces in urban areas.", value: "B" },
            { label: "C  Travellers could spend journeys doing something other than driving.", value: "C" },
            { label: "D  People who find driving physically difficult could travel independently.", value: "D" },
            { label: "E  A reduction in the number of cars would mean a reduction in pollution.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Which TWO benefits of automated vehicles does the writer mention? (Choose TWO — this is the second answer)",
          options: [
            { label: "A  Car travellers could enjoy considerable cost savings.", value: "A" },
            { label: "B  It would be easier to find parking spaces in urban areas.", value: "B" },
            { label: "C  Travellers could spend journeys doing something other than driving.", value: "C" },
            { label: "D  People who find driving physically difficult could travel independently.", value: "D" },
            { label: "E  A reduction in the number of cars would mean a reduction in pollution.", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q25–26: Choose TWO challenges ─────────────────────────
        {
          id: "cam15-ra-t1-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO challenges to automated vehicle development does the writer mention?\n\nA  making sure the general public has confidence in automated vehicles\nB  managing the pace of transition from conventional to automated vehicles\nC  deciding how to compensate professional drivers who become redundant\nD  setting up the infrastructure to make roads suitable for automated vehicles\nE  getting automated vehicles to adapt to various different driving conditions",
          type: "multiple_choice",
          question: "25. Which TWO challenges to automated vehicle development does the writer mention? (Choose TWO — this is the first answer)",
          options: [
            { label: "A  making sure the general public has confidence in automated vehicles", value: "A" },
            { label: "B  managing the pace of transition from conventional to automated vehicles", value: "B" },
            { label: "C  deciding how to compensate professional drivers who become redundant", value: "C" },
            { label: "D  setting up the infrastructure to make roads suitable for automated vehicles", value: "D" },
            { label: "E  getting automated vehicles to adapt to various different driving conditions", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Which TWO challenges to automated vehicle development does the writer mention? (Choose TWO — this is the second answer)",
          options: [
            { label: "A  making sure the general public has confidence in automated vehicles", value: "A" },
            { label: "B  managing the pace of transition from conventional to automated vehicles", value: "B" },
            { label: "C  deciding how to compensate professional drivers who become redundant", value: "C" },
            { label: "D  setting up the infrastructure to make roads suitable for automated vehicles", value: "D" },
            { label: "E  getting automated vehicles to adapt to various different driving conditions", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam15-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "What is exploration?",
      passageText: `We are all explorers. Our desire to discover, and then share that new-found knowledge, is part of what makes us human – indeed, this has played an important part in our success as a species. Long before the first caveman slumped down beside the fire and grunted news that there were plenty of wildebeest over yonder, our ancestors had learnt the value of sending out scouts to investigate the unknown. This questing nature of ours undoubtedly helped our species spread around the globe, just as it nowadays no doubt helps the last nomadic Penan maintain their existence in the depleted forests of Borneo, and a visitor negotiate the subways of New York.

Over the years, we've come to think of explorers as a peculiar breed – different from the rest of us, different from those of us who are merely 'well travelled', even; and perhaps there is a type of person more suited to seeking out the new, a type of caveman more inclined to risk venturing out. That, however, doesn't take away from the fact that we all have this enquiring instinct, even today; and that in all sorts of professions – whether artist, marine biologist or astronomer – borders of the unknown are being tested each day.

Thomas Hardy set some of his novels in Egdon Heath, a fictional area of uncultivated land, and used the landscape to suggest the desires and fears of his characters. He is delving into matters we all recognise because they are common to humanity. This is surely an act of exploration, and into a world as remote as the author chooses. Explorer and travel writer Peter Fleming talks of the moment when the explorer returns to the existence he has left behind with his loved ones. The traveller 'who has for weeks or months seen himself only as a puny and irrelevant alien crawling laboriously over a country in which he has no roots and no background, suddenly encounters his other self, a relatively solid figure, with a place in the minds of certain people'.

In this book about the exploration of the earth's surface, I have confined myself to those whose travels were real and who also aimed at more than personal discovery. But that still left me with another problem: the word 'explorer' has become associated with a past era. We think back to a golden age, as if exploration peaked somehow in the 19th century – as if the process of discovery is now on the decline, though the truth is that we have named only one and a half million of this planet's species, and there may be more than 10 million – and that's not including bacteria. We have studied only 5 per cent of the species we know. We have scarcely mapped the ocean floors, and know even less about ourselves; we fully understand the workings of only 10 per cent of our brains.

Here is how some of today's 'explorers' define the word. Ran Fiennes, dubbed the 'greatest living explorer', said, 'An explorer is someone who has done something that no human has done before – and also done something scientifically useful.' Chris Bonington, a leading mountaineer, felt exploration was to be found in the act of physically touching the unknown: 'You have to have gone somewhere new.' Then Robin Hanbury-Tenison, a campaigner on behalf of remote so-called 'tribal' peoples, said, 'A traveller simply records information about some far-off world, and reports back; but an explorer changes the world.' Wilfred Thesiger, who crossed Arabia's Empty Quarter in 1946, and belongs to an era of unmechanised travel now lost to the rest of us, told me, 'If I'd gone across by camel when I could have gone by car, it would have been a stunt.' To him, exploration meant bringing back information from a remote place regardless of any great self-discovery.

Each definition is slightly different – and tends to reflect the field of endeavour of each pioneer. It was the same whoever I asked: the prominent historian would say exploration was a thing of the past, the cutting-edge scientist would say it was of the present. And so on. They each set their own particular criteria; the common factor in their approach being that they all had, unlike many of us who simply enjoy travel or discovering new things, both a very definite objective from the outset and also a desire to record their findings.

I'd best declare my own bias. As a writer, I'm interested in the exploration of ideas. I've done a great many expeditions and each one was unique. I've lived for months alone with isolated groups of people all around the world, even two 'uncontacted tribes'. But none of these things is of the slightest interest to anyone unless, through my books, I've found a new slant, explored a new idea. Why? Because the world has moved on. The time has long passed for the great continental voyages – another walk to the poles, another crossing of the Empty Quarter. We know how the land surface of our planet lies; exploration of it is now down to the details – the habits of microbes, say, or the grazing behaviour of buffalo. Aside from the deep sea and deep underground, it's the era of specialists. However, this is to disregard the role the human mind has in conveying remote places; and this is what interests me: how a fresh interpretation, even of a well-travelled route, can give its readers new insights.`,
      instructions: `Questions 27–32: Choose the correct letter, A, B, C or D.

Questions 33–37: Match each statement with the correct explorer, A–E.

Questions 38–40: Complete the summary below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.`,
      questions: [
        // ── Q27–32: Multiple choice ───────────────────────────────
        {
          id: "cam15-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–32: Choose the correct letter, A, B, C or D.",
          type: "multiple_choice",
          question: "27. The writer refers to visitors to New York to illustrate the point that",
          options: [
            { label: "A  exploration is an intrinsic element of being human.", value: "A" },
            { label: "B  most people are enthusiastic about exploring.", value: "B" },
            { label: "C  exploration can lead to surprising results.", value: "C" },
            { label: "D  most people find exploration daunting.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. According to the second paragraph, what is the writer's view of explorers?",
          options: [
            { label: "A  Their discoveries have brought both benefits and disadvantages.", value: "A" },
            { label: "B  Their main value is in teaching others.", value: "B" },
            { label: "C  They act on an urge that is common to everyone.", value: "C" },
            { label: "D  They tend to be more attracted to certain professions than to others.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. The writer refers to a description of Egdon Heath to suggest that",
          options: [
            { label: "A  Hardy was writing about his own experience of exploration.", value: "A" },
            { label: "B  Hardy was mistaken about the nature of exploration.", value: "B" },
            { label: "C  Hardy's aim was to investigate people's emotional states.", value: "C" },
            { label: "D  Hardy's aim was to show the attraction of isolation.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. In the fourth paragraph, the writer refers to 'a golden age' to suggest that",
          options: [
            { label: "A  the amount of useful information produced by exploration has decreased.", value: "A" },
            { label: "B  fewer people are interested in exploring than in the 19th century.", value: "B" },
            { label: "C  recent developments have made exploration less exciting.", value: "C" },
            { label: "D  we are wrong to think that exploration is no longer necessary.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. In the sixth paragraph, when discussing the definition of exploration, the writer argues that",
          options: [
            { label: "A  people tend to relate exploration to their own professional interests.", value: "A" },
            { label: "B  certain people are likely to misunderstand the nature of exploration.", value: "B" },
            { label: "C  the generally accepted definition has changed over time.", value: "C" },
            { label: "D  historians and scientists have more valid definitions than the general public.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q32",
          number: 32,
          type: "multiple_choice",
          question: "32. In the last paragraph, the writer explains that he is interested in",
          options: [
            { label: "A  how someone's personality is reflected in their choice of places to visit.", value: "A" },
            { label: "B  the human ability to cast new light on places that may be familiar.", value: "B" },
            { label: "C  how travel writing has evolved to meet changing demands.", value: "C" },
            { label: "D  the feelings that writers develop about the places that they explore.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q33–37: Matching explorers ────────────────────────────
        {
          id: "cam15-ra-t1-s3-q33",
          number: 33,
          groupLabel: "Questions 33–37: Look at the following statements and the list of explorers below.\nMatch each statement with the correct explorer, A–E.\n\nList of Explorers\nA  Peter Fleming\nB  Ran Fiennes\nC  Chris Bonington\nD  Robin Hanbury-Tenison\nE  Wilfred Thesiger",
          type: "matching",
          question: "33. He referred to the relevance of the form of transport used.",
          options: [
            { label: "A  Peter Fleming", value: "A" },
            { label: "B  Ran Fiennes", value: "B" },
            { label: "C  Chris Bonington", value: "C" },
            { label: "D  Robin Hanbury-Tenison", value: "D" },
            { label: "E  Wilfred Thesiger", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. He described feelings on coming back home after a long journey.",
          options: [
            { label: "A  Peter Fleming", value: "A" },
            { label: "B  Ran Fiennes", value: "B" },
            { label: "C  Chris Bonington", value: "C" },
            { label: "D  Robin Hanbury-Tenison", value: "D" },
            { label: "E  Wilfred Thesiger", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q35",
          number: 35,
          type: "matching",
          question: "35. He worked for the benefit of specific groups of people.",
          options: [
            { label: "A  Peter Fleming", value: "A" },
            { label: "B  Ran Fiennes", value: "B" },
            { label: "C  Chris Bonington", value: "C" },
            { label: "D  Robin Hanbury-Tenison", value: "D" },
            { label: "E  Wilfred Thesiger", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q36",
          number: 36,
          type: "matching",
          question: "36. He did not consider learning about oneself an essential part of exploration.",
          options: [
            { label: "A  Peter Fleming", value: "A" },
            { label: "B  Ran Fiennes", value: "B" },
            { label: "C  Chris Bonington", value: "C" },
            { label: "D  Robin Hanbury-Tenison", value: "D" },
            { label: "E  Wilfred Thesiger", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q37",
          number: 37,
          type: "matching",
          question: "37. He defined exploration as being both unique and of value to others.",
          options: [
            { label: "A  Peter Fleming", value: "A" },
            { label: "B  Ran Fiennes", value: "B" },
            { label: "C  Chris Bonington", value: "C" },
            { label: "D  Robin Hanbury-Tenison", value: "D" },
            { label: "E  Wilfred Thesiger", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q38–40: Summary completion ────────────────────────────
        {
          id: "cam15-ra-t1-s3-q38",
          number: 38,
          groupLabel: "Questions 38–40: Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe writer's own bias\nThe writer has experience of a large number of 38………………., and was the first stranger that certain previously 39………………… people had encountered. He believes there is no need for further exploration of Earth's 40…………………., except to answer specific questions such as how buffalo eat.",
          type: "summary_completion",
          question: "38. The writer has experience of a large number of _______",
          correctAnswer: "expeditions",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q39",
          number: 39,
          type: "summary_completion",
          question: "39. the first stranger that certain previously _______ people had encountered",
          correctAnswer: "uncontacted",
          points: 1,
        },
        {
          id: "cam15-ra-t1-s3-q40",
          number: 40,
          type: "summary_completion",
          question: "40. He believes there is no need for further exploration of Earth's _______",
          correctAnswer: "land surface",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge15Tests: IELTSTest[] = [cambridge15_reading_t1];
