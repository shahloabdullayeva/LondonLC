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

// ============================================================
// CAMBRIDGE IELTS 15 – TEST 2  (Academic Reading)
// Passages: Could urban engineers learn from dance? /
//           Should we try to bring extinct species back to life? /
//           Having a laugh
// ============================================================
export const cambridge15_reading_t2: IELTSTest = {
  id: "cam15-reading-academic-t2",
  title: "Cambridge IELTS 15 – Test 2",
  bookNumber: 15,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam15-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Could urban engineers learn from dance?",
      passageText: `A
The way we travel around cities has a major impact on whether they are sustainable. Transportation is estimated to account for 30% of energy consumption in most of the world's most developed nations, so lowering the need for energy-using vehicles is essential for decreasing the environmental impact of mobility. But as more and more people move to cities, it is important to think about other kinds of sustainable travel too. The ways we travel affect our physical and mental health, our social lives, our access to work and culture, and the air we breathe. Engineers are tasked with changing how we travel round cities through urban design, but the engineering industry still works on the assumptions that led to the creation of the energy-consuming transport systems we have now: the emphasis placed solely on efficiency, speed, and quantitative data. We need radical changes, to make it healthier, more enjoyable, and less environmentally damaging to travel around cities.

B
Dance might hold some of the answers. That is not to suggest everyone should dance their way to work, however healthy and happy it might make us, but rather that the techniques used by choreographers to experiment with and design movement in dance could provide engineers with tools to stimulate new ideas in city-making. Richard Sennett, an influential urbanist and sociologist who has transformed ideas about the way cities are made, argues that urban design has suffered from a separation between mind and body since the introduction of the architectural blueprint.

C
Whereas medieval builders improvised and adapted construction through their intimate knowledge of materials and personal experience of the conditions on a site, building designs are now conceived and stored in media technologies that detach the designer from the physical and social realities they are creating. While the design practices created by these new technologies are essential for managing the technical complexity of the modern city, they have the drawback of simplifying reality in the process.

D
To illustrate, Sennett discusses the Peachtree Center in Atlanta, USA, a development typical of the modernist approach to urban planning prevalent in the 1970s. Peachtree created a grid of streets and towers intended as a new pedestrian-friendly downtown for Atlanta. According to Sennett, this failed because its designers had invested too much faith in computer-aided design to tell them how it would operate. They failed to take into account that purpose-built street cafés could not operate in the hot sun without the protective awnings common in older buildings, and would need energy-consuming air conditioning instead, or that its giant car park would feel so unwelcoming that it would put people off getting out of their cars. What seems entirely predictable and controllable on screen has unexpected results when translated into reality.

E
The same is true in transport engineering, which uses models to predict and shape the way people move through the city. Again, these models are necessary, but they are built on specific world views in which certain forms of efficiency and safety are considered and other experience of the city ignored. Designs that seem logical in models appear counter-intuitive in the actual experience of their users. The guard rails that will be familiar to anyone who has attempted to cross a British road, for example, were an engineering solution to pedestrian safety based on models that prioritise the smooth flow of traffic. On wide major roads, they often guide pedestrians to specific crossing points and slow down their progress across the road by using staggered access points divide the crossing into two – one for each carriageway. In doing so they make crossings feel longer, introducing psychological barriers greatly impacting those that are the least mobile, and encouraging others to make dangerous crossings to get around the guard rails. These barriers don't just make it harder to cross the road: they divide communities and decrease opportunities for healthy transport. As a result, many are now being removed, causing disruption, cost, and waste.

F
If their designers had had the tools to think with their bodies – like dancers – and imagine how these barriers would feel, there might have been a better solution. In order to bring about fundamental changes to the ways we use our cities, engineering will need to develop a richer understanding of why people move in certain ways, and how this movement affects them. Choreography may not seem an obvious choice for tackling this problem. Yet it shares with engineering the aim of designing patterns of movement within limitations of space. It is an art form developed almost entirely by trying out ideas with the body, and gaining instant feedback on how the results feel. Choreographers have deep understanding of the psychological, aesthetic, and physical implications of different ways of moving.

G
Observing the choreographer Wayne McGregor, cognitive scientist David Kirsh described how he 'thinks with the body'. Kirsh argues that by using the body to simulate outcomes, McGregor is able to imagine solutions that would not be possible using purely abstract thought. This kind of physical knowledge is valued in many areas of expertise, but currently has no place in formal engineering design processes. A suggested method for transport engineers is to improvise design solutions and instant feedback about how they would work from their own experience of them, or model designs at full scale in the way choreographers experiment with groups of dancers. Above all, perhaps, they might learn to design for emotional as well as functional effects.`,
      instructions: `Questions 1–6: Reading Passage 1 has seven paragraphs, A–G.
Which paragraph contains the following information?
Write the correct letter, A–G.

Questions 7–13: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–6: Paragraph matching ──────────────────────────────
        {
          id: "cam15-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–6: Reading Passage 1 has seven paragraphs, A–G.\nWhich paragraph contains the following information?\nWrite the correct letter, A–G, in boxes 1–6 on your answer sheet.",
          type: "matching",
          question: "1. reference to an appealing way of using dance that the writer is not proposing",
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
          id: "cam15-ra-t2-s1-q2",
          number: 2,
          type: "matching",
          question: "2. an example of a contrast between past and present approaches to building",
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
          id: "cam15-ra-t2-s1-q3",
          number: 3,
          type: "matching",
          question: "3. mention of an objective of both dance and engineering",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q4",
          number: 4,
          type: "matching",
          question: "4. reference to an unforeseen problem arising from ignoring the climate",
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
        {
          id: "cam15-ra-t2-s1-q5",
          number: 5,
          type: "matching",
          question: "5. why some measures intended to help people are being reversed",
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
          id: "cam15-ra-t2-s1-q6",
          number: 6,
          type: "matching",
          question: "6. reference to how transport has an impact on human lives",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q7–13: Summary completion ─────────────────────────────
        {
          id: "cam15-ra-t2-s1-q7",
          number: 7,
          groupLabel: "Questions 7–13: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nGuard rails\nGuard rails were introduced on British roads to improve the 7…………………… of pedestrians, while ensuring that the movement of 8…………………… is not disrupted. Pedestrians are led to access points, and encouraged to cross one 9…………………… at a time.\nAn unintended effect is to create psychological difficulties in crossing the road, particularly for less 10…………………… people. Another result is that some people cross the road in a 11…………………… way. The guard rails separate 12……………………, and make it more difficult to introduce forms of transport that are 13……………………",
          type: "note_completion",
          question: "7. Guard rails were introduced to improve the _______ of pedestrians",
          correctAnswer: "safety",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q8",
          number: 8,
          type: "note_completion",
          question: "8. ensuring that the movement of _______ is not disrupted",
          correctAnswer: "traffic",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q9",
          number: 9,
          type: "note_completion",
          question: "9. encouraged to cross one _______ at a time",
          correctAnswer: "carriageway",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q10",
          number: 10,
          type: "note_completion",
          question: "10. psychological difficulties, particularly for less _______ people",
          correctAnswer: "mobile",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q11",
          number: 11,
          type: "note_completion",
          question: "11. some people cross the road in a _______ way",
          correctAnswer: "dangerous",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q12",
          number: 12,
          type: "note_completion",
          question: "12. The guard rails separate _______",
          correctAnswer: "communities",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s1-q13",
          number: 13,
          type: "note_completion",
          question: "13. make it more difficult to introduce forms of transport that are _______",
          correctAnswer: "healthy",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam15-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Should we try to bring extinct species back to life?",
      passageText: `A
The passenger pigeon was a legendary species. Flying in vast numbers across North America, with potentially many millions within a single flock, their migration was once one of nature's great spectacles. Sadly, the passenger pigeon's existence came to an end on 1 September 1914, when the last living specimen died at Cincinnati Zoo. Geneticist Ben Novak is lead researcher on an ambitious project which now aims to bring the bird back to life through a process known as 'de-extinction'. The basic premise involves using cloning technology to turn the DNA of extinct animals into a fertilised embryo, which is carried by the nearest relative still in existence – in this case, the abundant band-tailed pigeon – before being born as a living, breathing animal. Passenger pigeons are one of the pioneering species in this field, but they are far from the only ones on which this cutting-edge technology is being trialled.

B
In Australia, the thylacine, more commonly known as the Tasmanian tiger, is another extinct creature which genetic scientists are striving to bring back to life. 'There is no carnivore now in Tasmania that fills the niche which thylacines once occupied,' explains Michael Archer of the University of New South Wales. He points out that in the decades since the thylacine went extinct, there has been a spread in a 'dangerously debilitating' facial tumour syndrome which threatens the existence of the Tasmanian devils, the island's other notorious resident. Thylacines would have prevented this spread because they would have killed significant numbers of Tasmanian devils. 'If that contagious cancer had popped up previously, it would have burned out in whatever region it started. The return of thylacines to Tasmania could help to ensure that devils are never again subjected to risks of this kind.'

C
If extinct species can be brought back to life, can humanity begin to correct the damage it has caused to the natural world over the past few millennia? 'The idea of de-extinction is that we can reverse this process, bringing species that no longer exist back to life,' says Beth Shapiro of University of California Santa Cruz's Genomics Institute. 'I don't think that we can do this. There is no way to bring back something that is 100 per cent identical to a species that went extinct a long time ago.' A more practical approach for long-extinct species is to take the DNA of existing species as a template, ready for the insertion of strands of extinct animal DNA to create something new; a hybrid, based on the living species, but which looks and/or acts like the animal which died out.

D
This complicated process and questionable outcome begs the question: what is the actual point of this technology? 'For us, the goal has always been replacing the extinct species with a suitable replacement,' explains Novak. 'When it comes to breeding, band-tailed pigeons scatter and make maybe one or two nests per hectare, whereas passenger pigeons were very social and would make 10,000 or more nests in one hectare.' Since the disappearance of this key species, ecosystems in the eastern US have suffered, as the lack of disturbance caused by thousands of passenger pigeons wrecking trees and branches means there has been minimal need for regrowth. This has left forests stagnant and therefore unwelcoming to the plants and animals which evolved to help regenerate the forest after a disturbance. According to Novak, a hybridized band-tailed pigeon, with the added nesting habits of a passenger pigeon, could, in theory, re-establish that forest disturbance, thereby creating a habitat necessary for a great many other native species to thrive.

E
Another popular candidate for this technology is the woolly mammoth. George Church, professor at Harvard Medical School and leader of the Woolly Mammoth Revival Project, has been focusing on cold resistance, the main way in which the extinct woolly mammoth and its nearest living relative, the Asian elephant, differ. By pinpointing which genetic traits made it possible for mammoths to survive the icy climate of the tundra, the project's goal is to return mammoths, or a mammoth-like species, to the area. 'My highest priority would be preserving the endangered Asian elephant,' says Church, 'expanding their range to the huge ecosystem of the tundra. Necessary adaptations would include smaller ears, thicker hair, and extra insulating fat, all for the purpose of reducing heat loss in the tundra, and all traits found in the now extinct woolly mammoth.' This repopulation of the tundra and boreal forests of Eurasia and North America with large mammals could also be a useful factor in reducing carbon emissions – elephants punch holes through snow and knock down trees, which encourages grass growth. This grass growth would reduce temperature, and mitigate emissions from melting permafrost.

F
While the prospect of bringing extinct animals back to life might capture imaginations, it is, of course, far easier to try to save an existing species which is merely threatened with extinction. 'Many of the technologies that people have in mind when they think about de-extinction can be used as a form of "genetic rescue",' explains Shapiro. She prefers to focus the debate on how this emerging technology could be used to fully understand why various species went extinct in the first place, and therefore how we could use it to make genetic modifications which could prevent mass extinctions in the future. 'I would also say there's an incredible moral hazard to not do anything at all,' she continues. 'We know that what we are doing today is not enough, and we have to be willing to take some calculated and measured risks.'`,
      instructions: `Questions 14–17: Reading Passage 2 has six paragraphs, A–F.
Which paragraph contains the following information?
NB You may use any letter more than once.

Questions 18–22: Complete the summary below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 23–26: Look at the following statements and the list of people below.
Match each statement with the correct person, A, B or C.
NB You may use any letter more than once.`,
      questions: [
        // ── Q14–17: Paragraph matching ────────────────────────────
        {
          id: "cam15-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–17: Reading Passage 2 has six paragraphs, A–F.\nWhich paragraph contains the following information?\nWrite the correct letter, A–F, in boxes 14–17 on your answer sheet.\nNB You may use any letter more than once.",
          type: "matching",
          question: "14. a reference to how further disappearance of multiple species could be avoided",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. explanation of a way of reproducing an extinct animal using the DNA of only that species",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. reference to a habitat which has suffered following the extinction of a species",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. mention of the exact point at which a particular species became extinct",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q18–22: Summary completion ────────────────────────────
        {
          id: "cam15-ra-t2-s2-q18",
          number: 18,
          groupLabel: "Questions 18–22: Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe woolly mammoth revival project\nProfessor George Church and his team are trying to identify the 18…………………… which enabled mammoths to live in the tundra. The findings could help preserve the mammoth's close relative, the endangered Asian elephant.\nAccording to Church, introducing Asian elephants to the tundra would involve certain physical adaptations to minimise 19……………………. To survive in the tundra, the species would need to have the mammoth-like features of thicker hair, 20…………………… of a reduced size and more 21…………………….\nRepopulating the tundra with mammoths or Asian elephant/mammoth hybrids would also have an impact on the environment, which could help to reduce temperatures and decrease 22……………………",
          type: "summary_completion",
          question: "18. trying to identify the _______ which enabled mammoths to live in the tundra",
          correctAnswer: "genetic traits",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q19",
          number: 19,
          type: "summary_completion",
          question: "19. physical adaptations to minimise _______",
          correctAnswer: "heat loss",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q20",
          number: 20,
          type: "summary_completion",
          question: "20. mammoth-like features of thicker hair, _______ of a reduced size",
          correctAnswer: "ears",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. and more _______",
          correctAnswer: "insulating fat",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. help to reduce temperatures and decrease _______",
          correctAnswer: "carbon emissions",
          points: 1,
        },
        // ── Q23–26: People matching ───────────────────────────────
        {
          id: "cam15-ra-t2-s2-q23",
          number: 23,
          groupLabel: "Questions 23–26: Look at the following statements (Questions 23–26) and the list of people below.\nMatch each statement with the correct person, A, B or C.\nWrite the correct letter, A, B or C, in boxes 23–26 on your answer sheet.\nNB You may use any letter more than once.\n\nList of People\nA  Ben Novak\nB  Michael Archer\nC  Beth Shapiro",
          type: "matching",
          question: "23. Reintroducing an extinct species to its original habitat could improve the health of a particular species living there.",
          options: [
            { label: "A  Ben Novak", value: "A" },
            { label: "B  Michael Archer", value: "B" },
            { label: "C  Beth Shapiro", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q24",
          number: 24,
          type: "matching",
          question: "24. It is important to concentrate on the causes of an animal's extinction.",
          options: [
            { label: "A  Ben Novak", value: "A" },
            { label: "B  Michael Archer", value: "B" },
            { label: "C  Beth Shapiro", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q25",
          number: 25,
          type: "matching",
          question: "25. A species brought back from extinction could have an important beneficial impact on the vegetation of its habitat.",
          options: [
            { label: "A  Ben Novak", value: "A" },
            { label: "B  Michael Archer", value: "B" },
            { label: "C  Beth Shapiro", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s2-q26",
          number: 26,
          type: "matching",
          question: "26. Our current efforts at preserving biodiversity are insufficient.",
          options: [
            { label: "A  Ben Novak", value: "A" },
            { label: "B  Michael Archer", value: "B" },
            { label: "C  Beth Shapiro", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam15-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Having a laugh",
      passageText: `Humans start developing a sense of humour as early as six weeks old, when babies begin to laugh and smile in response to stimuli. Laughter is universal across all human cultures and even exists in some form in rats, chimps, and bonobos. Like other human emotions and expressions, laughter and humour provide psychological scientists with rich resources for studying human psychology, ranging from the development of language to the neuroscience of social perception.

Theories focusing on the evolution of laughter point to it as an important adaptation for social communication. Take, for example, the recorded laughter in TV comedy shows. Back in 1950, US sound engineer Charley Douglass hated dealing with the unpredictable laughter of live audiences, so started recording his own 'laugh tracks'. These were intended to help people at home feel like they were in a social situation, such as a crowded theatre. Douglass even recorded various types of laughter, as well as mixtures of laughter from men, women, and children. In doing so, he picked up on a quality of laughter that is now interesting researchers: a simple 'haha' communicates a remarkable amount of socially relevant information.

In one study conducted in 2016, samples of laughter from pairs of English-speaking students were recorded at the University of California, Santa Cruz. A team made up of more than 30 psychological scientists, anthropologists, and biologists then played these recordings to listeners from 24 diverse societies, from indigenous tribes in New Guinea to city-dwellers in India and Europe. Participants were asked whether they thought the people laughing were friends or strangers. On average, the results were remarkably consistent: worldwide, people's guesses were correct approximately 60% of the time.

Researchers have also found that different types of laughter serve as codes to complex human social hierarchies. A team led by Christopher Oveis from the University of California, San Diego, found that high-status individuals had different laughs from low-status individuals, and that strangers' judgements of an individual's social status were influenced by the dominant or submissive quality of their laughter. In their study, 48 male college students were randomly assigned to groups of four, with each group composed of two low-status members, who had just joined their college fraternity group, and two high-status members, older students who had been in the fraternity for at least a year. In the experiment, each student took a turn at being teased by the others, involving the use of mildly insulting nicknames. Analysis revealed that, as expected, high-status individuals produced more dominant laughs and fewer submissive laughs relative to the low-status individuals. Meanwhile, low-status individuals were more likely to change their laughter based on their position of power; that is, the newcomers produced more dominant laughs when they were in the 'powerful' role of teasers. Dominant laughter was higher in pitch, louder, and more variable in tone than submissive laughter.

A random group of volunteers then listened to an equal number of dominant and submissive laughs from both the high- and low-status individuals, and were asked to estimate the social status of the laugher. In line with predictions, laughers producing dominant laughs were perceived to be significantly higher in status than laughers producing submissive laughs. 'This was particularly true for low-status individuals, who were rated as significantly higher in status when displaying a dominant versus submissive laugh,' Oveis and colleagues note. 'Thus, by strategically displaying more dominant laughter when the context allows, low-status individuals may achieve higher status in the eyes of others.' However, high-status individuals were rated as high-status whether they produced their natural dominant laugh or tried to do a submissive one.

Another study, conducted by David Cheng and Lu Wang of Australian National University, was based on the hypothesis that humour might provide a respite from tedious situations in the workplace. This 'mental break' might facilitate the replenishment of mental resources. To test this theory, the researchers recruited 74 business students, ostensibly for an experiment on perception. First, the students performed a tedious task in which they had to cross out every instance of the letter 'e' over two pages of text. The students then were randomly assigned to watch a video clip eliciting either humour, contentment, or neutral feelings. Some watched a clip of the BBC comedy Mr. Bean, others a relaxing scene with dolphins swimming in the ocean, and others a factual video about the management profession.

The students then completed a task requiring persistence in which they were asked to guess the potential performance of employees based on provided profiles, and were told that making 10 correct assessments in a row would lead to a win. However, the software was programmed such that it was nearly impossible to achieve 10 consecutive correct answers. Participants were allowed to quit the task at any point. Students who had watched the Mr. Bean video ended up spending significantly more time working on the task, making twice as many predictions as the other two groups.

Cheng and Wang then replicated these results in a second study, during which they had participants complete long multiplication questions by hand. Again, participants who watched the humorous video spent significantly more time working on this tedious task and completed more questions correctly than did the students in either of the other groups.

'Although humour has been found to help relieve stress and facilitate social relationships, traditional view of task performance implies that individuals should avoid things such as humour that may distract them from the accomplishment of task goals,' Cheng and Wang conclude. 'We suggest that humour is not only enjoyable but more importantly, energising.'`,
      instructions: `Questions 27–31: Choose the correct letter, A, B, C or D.

Questions 32–36: Complete the summary using the list of words, A–H, below.

Questions 37–40: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE or NOT GIVEN.`,
      questions: [
        // ── Q27–31: Multiple choice ───────────────────────────────
        {
          id: "cam15-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Choose the correct letter, A, B, C or D.\nWrite the correct letter in boxes 27–31 on your answer sheet.",
          type: "multiple_choice",
          question: "27. When referring to laughter in the first paragraphs, the writer emphasises",
          options: [
            { label: "A  its impact on language.", value: "A" },
            { label: "B  its function in human culture.", value: "B" },
            { label: "C  its value to scientific research.", value: "C" },
            { label: "D  its universality in animal societies.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. What does the writer suggest about Charley Douglass?",
          options: [
            { label: "A  He understood the importance of enjoying humour in a group setting.", value: "A" },
            { label: "B  He believed that TV viewers at home needed to be told when to laugh.", value: "B" },
            { label: "C  He wanted his shows to appeal to audiences across the social spectrum.", value: "C" },
            { label: "D  He preferred shows where audiences were present in the recording studio.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What makes the Santa Cruz study particularly significant?",
          options: [
            { label: "A  the various different types of laughter that were studied", value: "A" },
            { label: "B  the similar results produced by a wide range of cultures", value: "B" },
            { label: "C  the number of different academic disciplines involved", value: "C" },
            { label: "D  the many kinds of people whose laughter was recorded", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. Which of the following happened in the San Diego study?",
          options: [
            { label: "A  Some participants became very upset.", value: "A" },
            { label: "B  Participants exchanged roles.", value: "B" },
            { label: "C  Participants who had not met before became friends.", value: "C" },
            { label: "D  Some participants were unable to laugh.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. In the fifth paragraph, what did the results of the San Diego study suggest?",
          options: [
            { label: "A  It is clear whether a dominant laugh is produced by a high- or low-status person.", value: "A" },
            { label: "B  Low-status individuals in a position of power will still produce submissive laughs.", value: "B" },
            { label: "C  The submissive laughs of low- and high-status individuals are surprisingly similar.", value: "C" },
            { label: "D  High-status individuals can always be identified by their way of laughing.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q32–36: Word-list summary completion ──────────────────
        {
          id: "cam15-ra-t2-s3-q32",
          number: 32,
          groupLabel: "Questions 32–36: Complete the summary using the list of words, A–H, below.\nWrite the correct letter, A–H, in boxes 32–36 on your answer sheet.\n\nThe benefits of humour\nIn one study at Australian National University, randomly chosen groups of participants were shown one of three videos, each designed to generate a different kind of 32……………………. When all participants were then given a deliberately frustrating task to do, it was found that those who had watched the 33…………………… video persisted with the task for longer and tried harder to accomplish the task than either of the other two groups.\nA second study in which participants were asked to perform a particularly 34…………………… task produced similar results. According to researchers David Cheng and Lu Wang, these findings suggest that humour not only reduces 35…………………… and helps build social connections but it may also have a 36…………………… effect on the body and mind.\n\nA  laughter    B  relaxing    C  boring\nD  anxiety     E  stimulating    F  emotion\nG  enjoyment    H  amusing",
          type: "multiple_choice",
          question: "32. each designed to generate a different kind of _______",
          options: [
            { label: "A  laughter", value: "A" },
            { label: "B  relaxing", value: "B" },
            { label: "C  boring", value: "C" },
            { label: "D  anxiety", value: "D" },
            { label: "E  stimulating", value: "E" },
            { label: "F  emotion", value: "F" },
            { label: "G  enjoyment", value: "G" },
            { label: "H  amusing", value: "H" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q33",
          number: 33,
          type: "multiple_choice",
          question: "33. those who had watched the _______ video persisted with the task for longer",
          options: [
            { label: "A  laughter", value: "A" },
            { label: "B  relaxing", value: "B" },
            { label: "C  boring", value: "C" },
            { label: "D  anxiety", value: "D" },
            { label: "E  stimulating", value: "E" },
            { label: "F  emotion", value: "F" },
            { label: "G  enjoyment", value: "G" },
            { label: "H  amusing", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q34",
          number: 34,
          type: "multiple_choice",
          question: "34. participants were asked to perform a particularly _______ task",
          options: [
            { label: "A  laughter", value: "A" },
            { label: "B  relaxing", value: "B" },
            { label: "C  boring", value: "C" },
            { label: "D  anxiety", value: "D" },
            { label: "E  stimulating", value: "E" },
            { label: "F  emotion", value: "F" },
            { label: "G  enjoyment", value: "G" },
            { label: "H  amusing", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q35",
          number: 35,
          type: "multiple_choice",
          question: "35. humour not only reduces _______ and helps build social connections",
          options: [
            { label: "A  laughter", value: "A" },
            { label: "B  relaxing", value: "B" },
            { label: "C  boring", value: "C" },
            { label: "D  anxiety", value: "D" },
            { label: "E  stimulating", value: "E" },
            { label: "F  emotion", value: "F" },
            { label: "G  enjoyment", value: "G" },
            { label: "H  amusing", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q36",
          number: 36,
          type: "multiple_choice",
          question: "36. it may also have a _______ effect on the body and mind",
          options: [
            { label: "A  laughter", value: "A" },
            { label: "B  relaxing", value: "B" },
            { label: "C  boring", value: "C" },
            { label: "D  anxiety", value: "D" },
            { label: "E  stimulating", value: "E" },
            { label: "F  emotion", value: "F" },
            { label: "G  enjoyment", value: "G" },
            { label: "H  amusing", value: "H" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        // ── Q37–40: True/False/Not Given ──────────────────────────
        {
          id: "cam15-ra-t2-s3-q37",
          number: 37,
          groupLabel: "Questions 37–40: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE if the statement agrees with the claims of the writer\nFALSE if the statement contradicts the claims of the writer\nNOT GIVEN if it is impossible to say what the writer thinks about this",
          type: "true_false_ng",
          question: "37. Participants in the Santa Cruz study were more accurate at identifying the laughs of friends than those of strangers.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. The researchers in the San Diego study were correct in their predictions regarding the behaviour of the high-status individuals.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. The participants in the Australian National University study were given a fixed amount of time to complete the task focusing on employee profiles.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam15-ra-t2-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Cheng and Wang's conclusions were in line with established notions regarding task performance.",
          correctAnswer: "FALSE",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge15Tests: IELTSTest[] = [cambridge15_reading_t1, cambridge15_reading_t2];
