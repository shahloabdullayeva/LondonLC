import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 18 – TEST 1  (Academic Reading)
// Passages: Urban farming /
//           Forest management in Pennsylvania, USA /
//           Conquering Earth's space junk problem
// ============================================================
export const cambridge18_reading_t1: IELTSTest = {
  id: "cam18-reading-academic-t1",
  title: "Cambridge IELTS 18 – Test 1",
  bookNumber: 18,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Urban farming",
      passageText: `On top of a striking new exhibition hall in southern Paris, the world's largest urban rooftop farm has started to bear fruit. Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.

Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers – as the soil-free plastic tubes are known – on his Paris apartment block roof five years ago. The urban rooftop space above the exhibition hall is somewhat bigger: 14,000 square metres and almost exactly the size of a couple of football pitches. Already, the team of young urban farmers who tend it have picked, in one day, 3,000 lettuces and 150 punnets of strawberries. When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day. 'We're not ever, obviously, going to feed the whole city this way,' cautions Hardy. 'In the urban environment you're working with very significant practical constraints, clearly, on what you can do and where. But if enough unused space can be developed like this, there's no reason why you shouldn't eventually target maybe between 5% and 10% of consumption.'

Perhaps most significantly, however, this is a real-life showcase for the work of Hardy's flourishing urban agriculture consultancy, Agripolis, which is currently fielding enquiries from around the world to design, build and equip a new breed of soil-free inner-city farm. 'The method's advantages are many,' he says. 'First, I don't much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases. I don't much like the fact, either, that they've travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.'

Produce grown using this soil-free method, on the other hand – which relies solely on a small quantity of water, enriched with organic nutrients, pumped around a closed circuit of pipes, towers and trays – is 'produced up here, and sold locally, just down there. It barely travels at all,' Hardy says. 'You can select crop varieties for their flavour, not their resistance to the transport and storage chain, and you can pick them when they're really at their best, and not before.' No soil is exhausted, and the water that gently showers the plants' roots every 12 minutes is recycled, so the method uses 90% less water than a classic intensive farm for the same yield.

Urban farming is not, of course, a new phenomenon. Inner-city agriculture is booming from Shanghai to Detroit and Tokyo to Bangkok. Strawberries are being grown in disused shipping containers, mushrooms in underground carparks. Aeroponic farming, he says, is 'virtuous'. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy: roughly 100 to 150 per square metre. It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques.

Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers. There are limits to what farmers can grow this way, of course, and much of the produce is suited to the summer months. 'Root vegetables we cannot do, at least not yet,' he says. 'Radishes are OK, but carrots, potatoes, that kind of thing – the roots are simply too long. Fruit trees are obviously not an option. And beans tend to take up a lot of space for not much return.' Nevertheless, urban farming of the kind being practised in Paris is one part of a bigger and fast-changing picture that is bringing food production closer to our lives.`,
      instructions: `Questions 1–3: Complete the sentences below.
Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.

Questions 4–7: Complete the table below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 8–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–3: Sentence completion ─────────────────────────
        {
          id: "cam18-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–3: Complete the sentences below.\nChoose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.\n\n1   Vertical tubes are used to grow strawberries, _______ and herbs.\n2   There will eventually be a daily harvest of as much as _______ in weight of fruit and vegetables.\n3   It may be possible that the farm's produce will account for as much as 10% of the city's _______ overall.",
          type: "sentence_completion",
          question: "1. Vertical tubes are used to grow strawberries, _______ and herbs.",
          correctAnswer: "lettuces",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q2",
          number: 2,
          type: "sentence_completion",
          question: "2. There will eventually be a daily harvest of as much as _______ in weight of fruit and vegetables.",
          correctAnswer: "1,000 kg",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q3",
          number: 3,
          type: "sentence_completion",
          question: "3. It may be possible that the farm's produce will account for as much as 10% of the city's _______ overall.",
          correctAnswer: "consumption/food consumption",
          points: 1,
        },
        // ── Q4–7: Table completion ─────────────────────────────
        {
          id: "cam18-ra-t1-s1-q4",
          number: 4,
          groupLabel: "Questions 4–7: Complete the table below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nIntensive farming versus aeroponic urban farming\n\nIntensive farming\n●   wide range of 4 _______ used\n●   techniques pollute air\n●   quality not good\n●   varieties of fruit and vegetables chosen that can survive long 5 _______\n●   6 _______ receive very little of overall income\n\nAeroponic urban farming\n●   no soil used\n●   nutrients added to water, which is recycled\n●   produce chosen because of its 7 _______",
          type: "note_completion",
          question: "4. wide range of _______ used (intensive farming)",
          correctAnswer: "pesticides",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. varieties chosen that can survive long _______",
          correctAnswer: "journeys",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q6",
          number: 6,
          type: "note_completion",
          question: "6. _______ receive very little of overall income",
          correctAnswer: "producers",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q7",
          number: 7,
          type: "note_completion",
          question: "7. produce chosen because of its _______",
          correctAnswer: "flavour/flavor",
          points: 1,
        },
        // ── Q8–13: True/False/Not Given ───────────────────────
        {
          id: "cam18-ra-t1-s1-q8",
          number: 8,
          groupLabel: "Questions 8–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n8   Urban farming can take place above or below ground.\n9   Some of the equipment used in aeroponic farming can be made by hand.\n10  Urban farming relies more on electricity than some other types of farming.\n11  Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.\n12  Most produce can be grown on an aeroponic urban farm at any time of the year.\n13  Beans take longer to grow on an urban farm than other vegetables.",
          type: "true_false_ng",
          question: "8. Urban farming can take place above or below ground.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. Some of the equipment used in aeroponic farming can be made by hand.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. Urban farming relies more on electricity than some other types of farming.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. Most produce can be grown on an aeroponic urban farm at any time of the year.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Beans take longer to grow on an urban farm than other vegetables.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Forest management in Pennsylvania, USA",
      passageText: `A
A tree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.

B
In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called 'high-grading', has left a legacy of 'low-use wood' in the forests. Some people even call these 'junk trees', and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.

C
Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.

D
One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer's specific management goals for his or her land.

E
Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhomed beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.

F
A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.

G
Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.`,
      instructions: `Questions 14–18: Reading Passage 2 has seven paragraphs, A–G.
Which paragraph contains the following information?
NB You may use any letter more than once.

Questions 19–21: Match each purpose with the correct timber cut, A, B, or C.

Questions 22–26: Complete the sentences below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–18: Paragraph matching ────────────────────────
        {
          id: "cam18-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–18: Reading Passage 2 has seven paragraphs, A–G.\nWhich paragraph contains the following information?\nNB You may use any letter more than once.\n\n14  bad outcomes for a forest when people focus only on its financial reward\n15  reference to the aspects of any tree that contribute to its worth\n16  mention of the potential use of wood to help run vehicles\n17  examples of insects that attack trees\n18  an alternative name for trees that produce low-use wood",
          type: "matching",
          question: "14. bad outcomes for a forest when people focus only on its financial reward",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. reference to the aspects of any tree that contribute to its worth",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. mention of the potential use of wood to help run vehicles",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. examples of insects that attack trees",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. an alternative name for trees that produce low-use wood",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q19–21: Timber cut matching ───────────────────────
        {
          id: "cam18-ra-t1-s2-q19",
          number: 19,
          groupLabel: "Questions 19–21: Match each purpose with the correct timber cut, A, B, or C.\n\n19  to remove trees that are diseased\n20  to generate income across a number of years\n21  to create a forest whose trees are close in age\n\nList of Timber Cuts\nA   a TSI Cut\nB   a Salvage Cut\nC   a Shelterwood Cut",
          type: "matching",
          question: "19. to remove trees that are diseased",
          options: [
            { label: "A – a TSI Cut", value: "A" },
            { label: "B – a Salvage Cut", value: "B" },
            { label: "C – a Shelterwood Cut", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q20",
          number: 20,
          type: "matching",
          question: "20. to generate income across a number of years",
          options: [
            { label: "A – a TSI Cut", value: "A" },
            { label: "B – a Salvage Cut", value: "B" },
            { label: "C – a Shelterwood Cut", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q21",
          number: 21,
          type: "matching",
          question: "21. to create a forest whose trees are close in age",
          options: [
            { label: "A – a TSI Cut", value: "A" },
            { label: "B – a Salvage Cut", value: "B" },
            { label: "C – a Shelterwood Cut", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q22–26: Sentence completion ───────────────────────
        {
          id: "cam18-ra-t1-s2-q22",
          number: 22,
          groupLabel: "Questions 22–26: Complete the sentences below.\nChoose ONE WORD ONLY from the passage for each answer.\n\n22  Some dead wood is removed to avoid the possibility of _______.\n23  The _______ from the tops of cut trees can help improve soil quality.\n24  Some damaged trees should be left, as their _______ provide habitats for a range of creatures.\n25  Some trees that are small, such as _______, are a source of food for animals and insects.\n26  Any trees that are _______ should be left to grow, as they add to the variety of species in the forest.",
          type: "sentence_completion",
          question: "22. Some dead wood is removed to avoid the possibility of _______.",
          correctAnswer: "fire",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q23",
          number: 23,
          type: "sentence_completion",
          question: "23. The _______ from the tops of cut trees can help improve soil quality.",
          correctAnswer: "nutrients",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q24",
          number: 24,
          type: "sentence_completion",
          question: "24. Some damaged trees should be left, as their _______ provide habitats for a range of creatures.",
          correctAnswer: "cavities",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q25",
          number: 25,
          type: "sentence_completion",
          question: "25. Some trees that are small, such as _______, are a source of food for animals and insects.",
          correctAnswer: "hawthorn",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s2-q26",
          number: 26,
          type: "sentence_completion",
          question: "26. Any trees that are _______ should be left to grow, as they add to the variety of species in the forest.",
          correctAnswer: "rare",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Conquering Earth's space junk problem",
      passageText: `A
Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.

All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit – the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can't steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft's main job.

B
Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space – working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what's coming their way.

The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. 'If we go on like this, we will reach a point of no return,' says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.

C
Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate within 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag, head of the European Space Agency's space-debris office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, despite their best intentions. 'What happens to those that fail or go bankrupt?' he asks. 'They are probably not going to spend money to remove their satellites from space.'

D
In theory, given the vastness of space, satellite operators should have plenty of room for all these missions to fly safely without ever nearing another object. So some scientists are tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. 'If you knew precisely where everything was, you would almost never have a problem,' says Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.

E
The field is called space traffic management, because it's similar to managing traffic on the roads or in the air. Think about a busy day at an airport, says Moriba Jah, an astrodynamicist at the University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can't be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.

F
An additional problem is that there is no authoritative catalogue that accurately lists the orbits of all known space debris. Jah illustrates this with a web-based database that he has developed. It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise where objects are in space. When he types in an identifier for a particular space object, the database draws a purple line to designate its orbit. Only this doesn't quite work for a number of objects, such as a Russian rocket body designated in the database as object number 32280. When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.

Jah describes himself as a space environmentalist: 'I want to make space a place that is safe to operate, that is free and useful for generations to come.' Until that happens, he argues, the space community will continue devolving into a tragedy in which all spaceflight operators are polluting a common resource.`,
      instructions: `Questions 27–31: Reading Passage 3 has six sections, A–F.
Which section contains the following information?

Questions 32–35: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 36–40: Match each statement with the correct person, A, B, C, or D.
NB You may use any letter more than once.`,
      questions: [
        // ── Q27–31: Section matching ───────────────────────────
        {
          id: "cam18-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Reading Passage 3 has six sections, A–F.\nWhich section contains the following information?\n\n27  a reference to the cooperation that takes place to try and minimise risk\n28  an explanation of a person's aims\n29  a description of a major collision that occurred in space\n30  a comparison between tracking objects in space and the efficiency of a transportation system\n31  a reference to efforts to classify space junk",
          type: "matching",
          question: "27. a reference to the cooperation that takes place to try and minimise risk",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q28",
          number: 28,
          type: "matching",
          question: "28. an explanation of a person's aims",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q29",
          number: 29,
          type: "matching",
          question: "29. a description of a major collision that occurred in space",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q30",
          number: 30,
          type: "matching",
          question: "30. a comparison between tracking objects in space and the efficiency of a transportation system",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q31",
          number: 31,
          type: "matching",
          question: "31. a reference to efforts to classify space junk",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q32–35: Summary completion ─────────────────────────
        {
          id: "cam18-ra-t1-s3-q32",
          number: 32,
          groupLabel: "Questions 32–35: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Inter-Agency Space Debris Coordination Committee\nThe committee gives advice on how the 32 _______ of space can be achieved. The committee advises that when satellites are no longer active, any unused 33 _______ or pressurised material that could cause 34 _______ should be removed. Although operators of large satellite constellations accept that they have obligations as stewards of space, Holger Krag points out that the operators that become 35 _______ are unlikely to prioritise removing their satellites from space.",
          type: "note_completion",
          question: "32. how the _______ of space can be achieved",
          correctAnswer: "sustainability",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q33",
          number: 33,
          type: "note_completion",
          question: "33. any unused _______ or pressurised material should be removed",
          correctAnswer: "fuel",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q34",
          number: 34,
          type: "note_completion",
          question: "34. material that could cause _______",
          correctAnswer: "explosions",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q35",
          number: 35,
          type: "note_completion",
          question: "35. operators that become _______ are unlikely to prioritise removing their satellites",
          correctAnswer: "bankrupt",
          points: 1,
        },
        // ── Q36–40: Person matching ───────────────────────────
        {
          id: "cam18-ra-t1-s3-q36",
          number: 36,
          groupLabel: "Questions 36–40: Match each statement with the correct person, A, B, C, or D.\nNB You may use any letter more than once.\n\n36  Knowing the exact location of space junk would help prevent any possible danger.\n37  Space should be available to everyone and should be preserved for the future.\n38  A recommendation regarding satellites is widely ignored.\n39  There is conflicting information about where some satellites are in space.\n40  There is a risk we will not be able to undo the damage that occurs in space.\n\nList of People\nA   Carolin Frueh\nB   Holger Krag\nC   Marlon Sorge\nD   Moriba Jah",
          type: "matching",
          question: "36. Knowing the exact location of space junk would help prevent any possible danger.",
          options: [
            { label: "A – Carolin Frueh", value: "A" },
            { label: "B – Holger Krag", value: "B" },
            { label: "C – Marlon Sorge", value: "C" },
            { label: "D – Moriba Jah", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q37",
          number: 37,
          type: "matching",
          question: "37. Space should be available to everyone and should be preserved for the future.",
          options: [
            { label: "A – Carolin Frueh", value: "A" },
            { label: "B – Holger Krag", value: "B" },
            { label: "C – Marlon Sorge", value: "C" },
            { label: "D – Moriba Jah", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q38",
          number: 38,
          type: "matching",
          question: "38. A recommendation regarding satellites is widely ignored.",
          options: [
            { label: "A – Carolin Frueh", value: "A" },
            { label: "B – Holger Krag", value: "B" },
            { label: "C – Marlon Sorge", value: "C" },
            { label: "D – Moriba Jah", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q39",
          number: 39,
          type: "matching",
          question: "39. There is conflicting information about where some satellites are in space.",
          options: [
            { label: "A – Carolin Frueh", value: "A" },
            { label: "B – Holger Krag", value: "B" },
            { label: "C – Marlon Sorge", value: "C" },
            { label: "D – Moriba Jah", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam18-ra-t1-s3-q40",
          number: 40,
          type: "matching",
          question: "40. There is a risk we will not be able to undo the damage that occurs in space.",
          options: [
            { label: "A – Carolin Frueh", value: "A" },
            { label: "B – Holger Krag", value: "B" },
            { label: "C – Marlon Sorge", value: "C" },
            { label: "D – Moriba Jah", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge18Tests: IELTSTest[] = [cambridge18_reading_t1];
