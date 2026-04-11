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

// ============================================================
// CAMBRIDGE IELTS 18 – TEST 2  (Academic Reading)
// Passages: Stonehenge /
//           Living with artificial intelligence /
//           An ideal city
// ============================================================
export const cambridge18_reading_t2: IELTSTest = {
  id: "cam18-reading-academic-t2",
  title: "Cambridge IELTS 18 – Test 2",
  bookNumber: 18,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Stonehenge",
      passageText: `For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout.

Archaeologists believe England's most iconic prehistoric ruin was built in several stages with the earliest constructed 5,000 or more years ago. First, Neolithic* Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge. Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.

Several hundred years later, it is thought, Stonehenge's builders hoisted an estimated 80 bluestones, 43 of which remain today, into standing positions and placed them in either a horseshoe or circular formation. These stones have been traced all the way to the Preseli Hills in Wales, some 300 kilometres from Stonehenge. How, then, did prehistoric builders without sophisticated tools or engineering haul these boulders, which weigh up to four tons, over such a great distance?

According to one long-standing theory among archaeologists, Stonehenge's builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills. They then transferred the boulders onto rafts and floated them first along the Welsh coast and then up the River Avon toward Salisbury Plain; alternatively, they may have towed each stone with a fleet of vessels. More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen.

As early as the 1970s, geologists have been adding their voices to the debate over how Stonehenge came into being. Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain. Most archaeologists have remained sceptical about this theory, however, wondering how the forces of nature could possibly have delivered the exact number of stones needed to complete the circle.

The third phase of construction took place around 2000 BCE. At this point, sandstone slabs – known as 'sarsens' – were arranged into an outer crescent or ring; some were assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge. Some 50 of these stones are now visible on the site, which may once have contained many more. Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.

But who were the builders of Stonehenge? In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic** society. This theory was widely popularized by the antiquarian William Stukeley, who had unearthed primitive graves at the site. Even today, people who identify as modern druids continue to gather at Stonehenge for the summer solstice. However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1,000 years before the Celts inhabited the region.

Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction. Bones, tools and other artefacts found on the site seem to support this hypothesis. The first stage was achieved by Neolithic agrarians who were likely to have been indigenous to the British Isles. Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders.

If the facts surrounding the architects and construction of Stonehenge remain shadowy at best, the purpose of the striking monument is even more of a mystery. While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had.

In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year. While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge's builders probably lacked the knowledge necessary to predict such events or that England's dense cloud cover would have obscured their view of the skies.

More recently, signs of illness and injury in the human remains unearthed at Stonehenge led a group of British archaeologists to speculate that it was considered a place of healing, perhaps because bluestones were thought to have curative powers.

* Neolithic – The era, also known as the New Stone Age, which began around 12,000 years ago and ended around 3500 BCE
** Celtic – The Celts were people who lived in Britain and northwest Europe during the Iron Age from 600 BCE to 43 CE`,
      instructions: `Questions 1–8: Complete the notes below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–8: Note completion ──────────────────────────────
        {
          id: "cam18-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Complete the notes below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nStonehenge\n\nConstruction\nStage 1:\n●   the ditch and henge were dug, possibly using tools made from 1 _______\n●   2 _______ may have been arranged in deep pits inside the circle\n\nStage 2:\n●   bluestones from the Preseli Hills were placed in standing position\n●   theories about the transportation of the bluestones:\n        –   archaeological:\n               o   builders used 3 _______ to make sledges and rollers\n               o   4 _______ pulled them on giant baskets\n        –   geological:\n               o   they were brought from Wales by 5 _______\n\nStage 3:\n●   sandstone slabs were arranged into an outer crescent or ring\n\nBuilders\n●   a theory arose in the 17th century that its builders were Celtic 6 _______\n\nPurpose\n●   many experts agree it has been used as a 7 _______ site\n●   in the 1960s, it was suggested that it worked as a kind of 8 _______",
          type: "note_completion",
          question: "1. the ditch and henge were dug, possibly using tools made from _______",
          correctAnswer: "deer antlers",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. _______ may have been arranged in deep pits inside the circle",
          correctAnswer: "timber posts",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. builders used _______ to make sledges and rollers",
          correctAnswer: "tree trunks",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. _______ pulled them on giant baskets",
          correctAnswer: "oxen",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. they were brought from Wales by _______",
          correctAnswer: "glaciers",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q6",
          number: 6,
          type: "note_completion",
          question: "6. a theory arose in the 17th century that its builders were Celtic _______",
          correctAnswer: "druids",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q7",
          number: 7,
          type: "note_completion",
          question: "7. many experts agree it has been used as a _______ site",
          correctAnswer: "burial",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q8",
          number: 8,
          type: "note_completion",
          question: "8. in the 1960s, it was suggested that it worked as a kind of _______",
          correctAnswer: "calendar",
          points: 1,
        },
        // ── Q9–13: True/False/Not Given ───────────────────────
        {
          id: "cam18-ra-t2-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n9   During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.\n10  There is scientific proof that the bluestones stood in the same spot until approximately 1600 BCE.\n11  John Aubrey's claim about Stonehenge was supported by 20th-century findings.\n12  Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.\n13  Criticism of Gerald Hawkins' theory about Stonehenge has come mainly from other astronomers.",
          type: "true_false_ng",
          question: "9. During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. There is scientific proof that the bluestones stood in the same spot until approximately 1600 BCE.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. John Aubrey's claim about Stonehenge was supported by 20th-century findings.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Criticism of Gerald Hawkins' theory about Stonehenge has come mainly from other astronomers.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Living with artificial intelligence",
      passageText: `Powerful artificial intelligence (AI) needs to be reliably aligned with human values, but does this mean AI will eventually have to police those values?

This has been the decade of AI, with one astonishing feat after another. A chess-playing AI that can defeat not only all human chess players, but also all previous human-programmed chess machines, after learning the game in just four hours? That's yesterday's news, what's next? True, these prodigious accomplishments are all in so-called narrow AI, where machines perform highly specialised tasks. But many experts believe this restriction is very temporary. By mid-century, we may have artificial general intelligence (AGI) – machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle.

If so, there's little reason to think it will stop there. Machines will be free of many of the physical constraints on human intelligence. Our brains run at slow biochemical processing speeds on the power of a light bulb, and their size is restricted by the dimensions of the human birth canal. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.

Once machines are better than us at designing even smarter machines, progress towards these limits could accelerate. What would this mean for us? Could we ensure a safe and worthwhile coexistence with such machines? On the plus side, AI is already useful and profitable for many things, and super AI might be expected to be super useful and super profitable. But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences – King Midas, for example, might have wished that everything he touched turned to gold, but didn't really intend this to apply to his breakfast.

So we need to create powerful AI machines that are 'human-friendly' – that have goals reliably aligned with our own values. One thing that makes this task difficult is that we are far from reliably human-friendly ourselves. We do many terrible things to each other and to many other creatures with whom we share the planet. If superintendent machines don't do a lot better than us, we'll be in deep trouble. We'll have powerful new intelligence amplifying the dark sides of our own fallible natures.

For safety's sake, then, we want the machines to be ethically as well as cognitively superhuman. We want them to aim for the moral high ground, not for the troughs in which many of us spend some of our time. Luckily they'll be smart enough for the job. If there are routes to the moral high ground, they'll be better than us at finding them, and steering us in the right direction.

However, there are two big problems with this utopian vision. One is how we get the machines started on the journey, the other is what it would mean to reach this destination. The 'getting started' problem is that we need to tell the machines what they're looking for with sufficient clarity that we can be confident they will find it – whatever 'it' actually turns out to be. This won't be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers, and even contribute to it, at least indirectly. How then, do we point machines in the direction of something better?

As for the 'destination' problem, we might, by putting ourselves in the hands of these moral guides and gatekeepers, be sacrificing our own autonomy – an important part of what makes us human. Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for granted. We might lose our freedom to discriminate in favour of our own communities, for example.

Loss of freedom to behave badly isn't always a bad thing, of course: denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options? They might be so good at doing it that we won't notice them; but few of us are likely to welcome such a future.

These issues might seem far-fetched, but they are to some extent already here. AI already has some input into how resources are used in our National Health Service (NHS) here in the UK, for example. If it was given a greater role, it might do so much more efficiently than humans can manage, and act in the interests of taxpayers and those who use the health system. However, we'd be depriving some humans (e.g. senior doctors) of the control they presently enjoy. Since we'd want to ensure that people are treated equally and that policies are fair, the goals of AI would need to be specified correctly.

We have a new powerful technology to deal with – itself, literally, a new way of thinking. For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest.

Both general intelligence and moral reasoning are often thought to be uniquely human capacities. But safety seems to require that we think of them as a package: if we are to give general intelligence to machines, we'll need to give them moral authority, too. And where exactly would that leave human beings? All the more reason to think about the destination now, and to be careful about what we wish for.`,
      instructions: `Questions 14–19: Choose the correct letter, A, B, C or D.

Questions 20–23: Do the following statements agree with the claims of the writer?
Write YES, NO, or NOT GIVEN.

Questions 24–26: Complete the summary using the list of phrases, A–F.`,
      questions: [
        // ── Q14–19: Multiple choice ────────────────────────────
        {
          id: "cam18-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–19: Choose the correct letter, A, B, C or D.\n\n14  What point does the writer make about AI in the first paragraph?\nA   It is difficult to predict how quickly AI will progress.\nB   Much can be learned about the use of AI in chess machines.\nC   The future is unlikely to see limitations on the capabilities of AI.\nD   Experts disagree on which specialised tasks AI will be able to perform.\n\n15  What is the writer doing in the second paragraph?\nA   explaining why machines will be able to outperform humans\nB   describing the characteristics that humans and machines share\nC   giving information about the development of machine intelligence\nD   indicating which aspects of humans are the most advanced\n\n16  Why does the writer mention the story of King Midas?\nA   to compare different visions of progress\nB   to illustrate that poorly defined objectives can go wrong\nC   to emphasise the need for cooperation\nD   to point out the financial advantages of a course of action\n\n17  What challenge does the writer refer to in the fourth paragraph?\nA   encouraging humans to behave in a more principled way\nB   deciding which values we want AI to share with us\nC   creating a better world for all creatures on the planet\nD   ensuring AI is more human-friendly than we are ourselves\n\n18  What does the writer suggest about the future of AI in the fifth paragraph?\nA   The safety of machines will become a key issue.\nB   It is hard to know what impact machines will have on the world.\nC   Machines will be superior to humans in certain respects.\nD   Many humans will oppose machines having a wider role.\n\n19  Which of the following best summarises the writer's argument in the sixth paragraph?\nA   More intelligent machines will result in greater abuses of power.\nB   Machine learning will share very few features with human learning.\nC   There are a limited number of people with the knowledge to program machines.\nD   Human shortcomings will make creating the machines we need more difficult.",
          type: "multiple_choice",
          question: "14. What point does the writer make about AI in the first paragraph?",
          options: [
            { label: "A  It is difficult to predict how quickly AI will progress.", value: "A" },
            { label: "B  Much can be learned about the use of AI in chess machines.", value: "B" },
            { label: "C  The future is unlikely to see limitations on the capabilities of AI.", value: "C" },
            { label: "D  Experts disagree on which specialised tasks AI will be able to perform.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q15",
          number: 15,
          type: "multiple_choice",
          question: "15. What is the writer doing in the second paragraph?",
          options: [
            { label: "A  explaining why machines will be able to outperform humans", value: "A" },
            { label: "B  describing the characteristics that humans and machines share", value: "B" },
            { label: "C  giving information about the development of machine intelligence", value: "C" },
            { label: "D  indicating which aspects of humans are the most advanced", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q16",
          number: 16,
          type: "multiple_choice",
          question: "16. Why does the writer mention the story of King Midas?",
          options: [
            { label: "A  to compare different visions of progress", value: "A" },
            { label: "B  to illustrate that poorly defined objectives can go wrong", value: "B" },
            { label: "C  to emphasise the need for cooperation", value: "C" },
            { label: "D  to point out the financial advantages of a course of action", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q17",
          number: 17,
          type: "multiple_choice",
          question: "17. What challenge does the writer refer to in the fourth paragraph?",
          options: [
            { label: "A  encouraging humans to behave in a more principled way", value: "A" },
            { label: "B  deciding which values we want AI to share with us", value: "B" },
            { label: "C  creating a better world for all creatures on the planet", value: "C" },
            { label: "D  ensuring AI is more human-friendly than we are ourselves", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q18",
          number: 18,
          type: "multiple_choice",
          question: "18. What does the writer suggest about the future of AI in the fifth paragraph?",
          options: [
            { label: "A  The safety of machines will become a key issue.", value: "A" },
            { label: "B  It is hard to know what impact machines will have on the world.", value: "B" },
            { label: "C  Machines will be superior to humans in certain respects.", value: "C" },
            { label: "D  Many humans will oppose machines having a wider role.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q19",
          number: 19,
          type: "multiple_choice",
          question: "19. Which of the following best summarises the writer's argument in the sixth paragraph?",
          options: [
            { label: "A  More intelligent machines will result in greater abuses of power.", value: "A" },
            { label: "B  Machine learning will share very few features with human learning.", value: "B" },
            { label: "C  There are a limited number of people with the knowledge to program machines.", value: "C" },
            { label: "D  Human shortcomings will make creating the machines we need more difficult.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q20–23: Yes/No/Not Given ───────────────────────────
        {
          id: "cam18-ra-t2-s2-q20",
          number: 20,
          groupLabel: "Questions 20–23: Do the following statements agree with the claims of the writer in Reading Passage 2?\nWrite YES, NO, or NOT GIVEN.\n\n20  Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.\n21  Silicon police would need to exist in large numbers in order to be effective.\n22  Many people are comfortable with the prospect of their independence being restricted by machines.\n23  If we want to ensure that machines act in our best interests, we all need to work together.",
          type: "true_false_ng",
          question: "20. Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q21",
          number: 21,
          type: "true_false_ng",
          question: "21. Silicon police would need to exist in large numbers in order to be effective.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q22",
          number: 22,
          type: "true_false_ng",
          question: "22. Many people are comfortable with the prospect of their independence being restricted by machines.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q23",
          number: 23,
          type: "true_false_ng",
          question: "23. If we want to ensure that machines act in our best interests, we all need to work together.",
          correctAnswer: "YES",
          points: 1,
        },
        // ── Q24–26: Summary completion (list) ─────────────────
        {
          id: "cam18-ra-t2-s2-q24",
          number: 24,
          groupLabel: "Questions 24–26: Complete the summary using the list of phrases, A–F, below.\n\nUsing AI in the UK health system\nAI currently has a limited role in the way 24 _______ are allocated in the health service. The positive aspect of AI having a bigger role is that it would be more efficient and lead to patient benefits. However, such a change would result, for example, in certain 25 _______ not having their current level of 26 _______. It is therefore important that AI goals are appropriate so that discriminatory practices could be avoided.\n\nA   medical practitioners\nB   specialised tasks\nC   available resources\nD   reduced illness\nE   professional authority\nF   technology experts",
          type: "matching",
          question: "24. AI currently has a limited role in the way _______ are allocated in the health service.",
          options: [
            { label: "A – medical practitioners", value: "A" },
            { label: "B – specialised tasks", value: "B" },
            { label: "C – available resources", value: "C" },
            { label: "D – reduced illness", value: "D" },
            { label: "E – professional authority", value: "E" },
            { label: "F – technology experts", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q25",
          number: 25,
          type: "matching",
          question: "25. such a change would result in certain _______ not having their current level of authority.",
          options: [
            { label: "A – medical practitioners", value: "A" },
            { label: "B – specialised tasks", value: "B" },
            { label: "C – available resources", value: "C" },
            { label: "D – reduced illness", value: "D" },
            { label: "E – professional authority", value: "E" },
            { label: "F – technology experts", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s2-q26",
          number: 26,
          type: "matching",
          question: "26. certain medical practitioners not having their current level of _______.",
          options: [
            { label: "A – medical practitioners", value: "A" },
            { label: "B – specialised tasks", value: "B" },
            { label: "C – available resources", value: "C" },
            { label: "D – reduced illness", value: "D" },
            { label: "E – professional authority", value: "E" },
            { label: "F – technology experts", value: "F" },
          ],
          correctAnswer: "E",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "An ideal city",
      passageText: `Leonardo da Vinci's ideal city was centuries ahead of its time

The word 'genius' is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Chateau du Clos Luce, outside Tours, France. Yet far from fading into insignificance, his thinking has carried down the centuries and still surprises today.

The Renaissance marked the transition from the 15th century to modernity and took place after the spread of the plague in the 14th century, which caused a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of a climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed. Then, as now, radical solutions were called for to revolutionise the way people lived and safeguard humanity against catastrophe.

Around 1486 – after a pestilence that killed half the population in Milan, Italy – Leonardo turned his thoughts to urban planning problems. Following a typical Renaissance trend, he began to work on an 'ideal city' project, which – due to its excessive costs – would remain unfulfilled. Yet given that unsustainable urban models are a key cause of global climate change today, it's only natural to wonder how Leonardo might have changed the shape of modern cities.

Although the Renaissance is renowned as an era of incredible progress in art and architecture, it is rarely noted that the 15th century also marked the birth of urbanism as a true academic discipline. The rigour and method behind the conscious conception of a city had been largely missing in Western thought until the moment when prominent Renaissance men pushed forward large-scale urban projects in Italy, such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara. These works surely inspired Leonardo's decision to rethink the design of medieval cities, with their winding and overcrowded streets and with houses piled against one another.

It is not easy to identify a coordinated vision of Leonardo's ideal city because of his disordered way of working with notes and sketches. But from the largest collection of Leonardo's papers ever assembled, a series of innovative thoughts can be reconstructed regarding the foundation of a new city along the Ticino River, which runs from Switzerland into Italy and is 248 kilometres long. He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture. He recommended 'high, strong walls', with 'towers and battlements of all necessary and pleasant beauty'.

His plans for a modern and 'rational' city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo included several innovations in his urban design. Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases. This design can be seen in some of today's high-rise buildings but was unconventional at the time. Indeed, this idea of taking full advantage of the interior spaces wasn't implemented until the 1920s and 1930s, with the birth of the Modernist movement.

While in the upper layers of the city, people could walk undisturbed between elegant palaces and streets, the lower layer was the place for services, trade, transport and industry. But the true originality of Leonardo's vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city. The canals, regulated by clocks and basins, were supposed to make it easier for boats to navigate inland. Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.

Although some of these features existed in Roman cities, before Leonardo's drawings there had never been a multi-level, compact modern city which was thoroughly technically conceived. Indeed, it wasn't until the 19th century that some of his ideas were applied. For example, the subdivision of the city by function – with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents – is an idea that can be found in Georges-Eugene Haussmann's renovation of Paris under Emperor Napoleon III between 1853 and 1870.

Today, Leonardo's ideas are not simply valid, they actually suggest a way forward for urban planning. Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modern cities become more efficient and sustainable. This is yet another reason why Leonardo was aligned so closely with modern urban planning and centuries ahead of his time.`,
      instructions: `Questions 27–33: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE, or NOT GIVEN.

Questions 34–40: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q27–33: True/False/Not Given ──────────────────────
        {
          id: "cam18-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–33: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n27  People first referred to Leonardo da Vinci as a genius 500 years ago.\n28  The current climate crisis is predicted to cause more deaths than the plague.\n29  Some of the challenges we face today can be compared to those of earlier times.\n30  Leonardo da Vinci's 'ideal city' was constructed in the 15th century.\n31  Poor town planning is a major contributor to climate change.\n32  In Renaissance times, local people fought against the changes to Pienza and Ferrara.\n33  Leonardo da Vinci kept a neat, organised record of his designs.",
          type: "true_false_ng",
          question: "27. People first referred to Leonardo da Vinci as a genius 500 years ago.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q28",
          number: 28,
          type: "true_false_ng",
          question: "28. The current climate crisis is predicted to cause more deaths than the plague.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q29",
          number: 29,
          type: "true_false_ng",
          question: "29. Some of the challenges we face today can be compared to those of earlier times.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q30",
          number: 30,
          type: "true_false_ng",
          question: "30. Leonardo da Vinci's 'ideal city' was constructed in the 15th century.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q31",
          number: 31,
          type: "true_false_ng",
          question: "31. Poor town planning is a major contributor to climate change.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q32",
          number: 32,
          type: "true_false_ng",
          question: "32. In Renaissance times, local people fought against the changes to Pienza and Ferrara.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. Leonardo da Vinci kept a neat, organised record of his designs.",
          correctAnswer: "FALSE",
          points: 1,
        },
        // ── Q34–40: Summary completion (one word only) ─────────
        {
          id: "cam18-ra-t2-s3-q34",
          number: 34,
          groupLabel: "Questions 34–40: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nLeonardo da Vinci's ideal city\n\nA collection of Leonardo da Vinci's paperwork reveals his design of a new city beside the Ticino River. This was to provide better 34 _______ for trade and a less polluted environment. Although Leonardo da Vinci's city shared many of the ideals of his time, some of his innovations were considered unconventional in their design. They included features that can be seen in some tower blocks today, such as 35 _______ on the exterior of a building.\n\nLeonardo da Vinci wasn't only an architect. His expertise in 36 _______ was evident in his plans for artificial canals within his ideal city. He also believed that the height of houses should relate to the width of streets in case earthquakes occurred. The design of many cities in Italy today follows this 37 _______.\n\nWhile some cities from 38 _______ times have aspects that can also be found in Leonardo's designs, his ideas weren't put into practice until long after his death. 39 _______ is one example of a city that was redesigned in the 19th century in the way that Leonardo had envisaged. His ideas are also relevant to today's world, where building 40 _______ no longer seems to be the best approach.",
          type: "note_completion",
          question: "34. This was to provide better _______ for trade and a less polluted environment.",
          correctAnswer: "transport",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q35",
          number: 35,
          type: "note_completion",
          question: "35. They included features such as _______ on the exterior of a building.",
          correctAnswer: "staircases",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q36",
          number: 36,
          type: "note_completion",
          question: "36. His expertise in _______ was evident in his plans for artificial canals.",
          correctAnswer: "engineering",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q37",
          number: 37,
          type: "note_completion",
          question: "37. The design of many cities in Italy today follows this _______.",
          correctAnswer: "rule",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q38",
          number: 38,
          type: "note_completion",
          question: "38. While some cities from _______ times have aspects found in Leonardo's designs...",
          correctAnswer: "Roman",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q39",
          number: 39,
          type: "note_completion",
          question: "39. _______ is one example of a city redesigned in the 19th century in the way Leonardo envisaged.",
          correctAnswer: "Paris",
          points: 1,
        },
        {
          id: "cam18-ra-t2-s3-q40",
          number: 40,
          type: "note_completion",
          question: "40. His ideas are relevant today, where building _______ no longer seems to be the best approach.",
          correctAnswer: "outwards",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 18 – TEST 3  (Academic Reading)
// Passages: Materials to take us beyond concrete /
//           The steam car /
//           The case for mixed-ability classes
// ============================================================
// NOTE: Passage text and question wording are placeholders. Paste the
// real text from your copy of Cambridge IELTS 18 into each marked spot
// before using this test in production. Answer keys, question numbers,
// question types, and grouping are all final.
export const cambridge18_reading_t3: IELTSTest = {
  id: "cam18-reading-academic-t3",
  title: "Cambridge IELTS 18 – Test 3",
  bookNumber: 18,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Materials to take us beyond concrete",
      passageText: `A
Concrete is the second most used substance in the global economy, after water – and one of the world's biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modem life for many years.

B
The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. 'Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.'

C
Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. 'Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.'

D
A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.

E
Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.

F
Stora Enso is Europe's biggest supplier of cross-laminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.

G
Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.

But Anna Surgenor, of the UK's Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. 'It's possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building – these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.'

H
While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK's Royal Institute of International Affairs reached the conclusion that, 'Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.'`,
      instructions: `Questions 1–4: Matching information — which section A–H contains each piece of information?
Questions 5–8: Summary completion — ONE WORD ONLY from the passage.
Questions 9–13: Matching — match each statement to the correct person A–D.`,
      questions: [
        // ── Q1–4: Matching information (sections A–H) ─────────
        {
          id: "cam18-ra-t3-s1-q1",
          number: 1,
          groupLabel: `Questions 1–4: Reading Passage 1 has eight sections, A–H. Which section contains the following information? Write the correct letter, A–H.\n\n1   an explanation of the industrial processes that create potential raw materials for concrete\n2   a reference to the various locations where high-rise wooden buildings can be found\n3   an indication of how widely available the raw materials of concrete are\n4   the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material`,
          type: "matching",
          question: "1. an explanation of the industrial processes that create potential raw materials for concrete",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q2",
          number: 2,
          type: "matching",
          question: "2. a reference to the various locations where high-rise wooden buildings can be found",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q3",
          number: 3,
          type: "matching",
          question: "3. an indication of how widely available the raw materials of concrete are",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q4",
          number: 4,
          type: "matching",
          question: "4. the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        // ── Q5–8: Summary completion (ONE WORD) ───────────────
        {
          id: "cam18-ra-t3-s1-q5",
          number: 5,
          groupLabel: `Questions 5–8: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.\n\nMaking buildings with wood\nWood is a traditional building material, but current environmental concerns are encouraging 5 _______ to use wood in modern construction projects. Using wood, however, has its challenges. For example, as 6 _______ in the atmosphere enters wood, it increases in size. In addition, wood is prone to pests and the risk of fire is greater. However, wood can be turned into a better construction material if it is treated and combined with other materials. In one process, 7 _______ of solid wood are glued together to create building blocks. These blocks are lighter than concrete and steel but equal them in strength. Experts say that wooden buildings are an improvement on those made of concrete and steel in terms of the 8 _______ with which they can be constructed and how much noise is generated by the process.`,
          type: "summary_completion",
          question: "5. current environmental concerns are encouraging _______ to use wood in modern construction projects",
          correctAnswer: "architects",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q6",
          number: 6,
          type: "summary_completion",
          question: "6. as _______ in the atmosphere enters wood, it increases in size",
          correctAnswer: "moisture",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q7",
          number: 7,
          type: "summary_completion",
          question: "7. _______ of solid wood are glued together to create building blocks",
          correctAnswer: "layers",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q8",
          number: 8,
          type: "summary_completion",
          question: "8. wooden buildings are an improvement in terms of the _______ with which they can be constructed",
          correctAnswer: "speed",
          points: 1,
        },
        // ── Q9–13: Matching statements to people (A–D) ────────
        {
          id: "cam18-ra-t3-s1-q9",
          number: 9,
          groupLabel: `Questions 9–13: Match each statement with the correct person, A–D.\nNB You may use any letter more than once.\n\n9   The environmental advantage of cement alternatives may not be as great as initially assumed.\n10  It would be hard to create a construction alternative to concrete that offers so many comparable benefits.\n11  Worries about the environment have led to increased interest in wood as a construction material.\n12  Expense has been a factor in the negative response to the development of new cements.\n13  The environmental damage caused by concrete is due to it being produced in large quantities.\n\nList of People\nA  Chris Cheeseman\nB  Markus Mannstrom\nC  Anna Surgenor\nD  Felix Preston and Johanna Lehne`,
          type: "matching",
          question: "9. The environmental advantage of cement alternatives may not be as great as initially assumed.",
          options: [
            { label: "A  Chris Cheeseman", value: "A" },
            { label: "B  Markus Mannstrom", value: "B" },
            { label: "C  Anna Surgenor", value: "C" },
            { label: "D  Felix Preston and Johanna Lehne", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q10",
          number: 10,
          type: "matching",
          question: "10. It would be hard to create a construction alternative to concrete that offers so many comparable benefits.",
          options: [
            { label: "A  Chris Cheeseman", value: "A" },
            { label: "B  Markus Mannstrom", value: "B" },
            { label: "C  Anna Surgenor", value: "C" },
            { label: "D  Felix Preston and Johanna Lehne", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q11",
          number: 11,
          type: "matching",
          question: "11. Worries about the environment have led to increased interest in wood as a construction material.",
          options: [
            { label: "A  Chris Cheeseman", value: "A" },
            { label: "B  Markus Mannstrom", value: "B" },
            { label: "C  Anna Surgenor", value: "C" },
            { label: "D  Felix Preston and Johanna Lehne", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q12",
          number: 12,
          type: "matching",
          question: "12. Expense has been a factor in the negative response to the development of new cements.",
          options: [
            { label: "A  Chris Cheeseman", value: "A" },
            { label: "B  Markus Mannstrom", value: "B" },
            { label: "C  Anna Surgenor", value: "C" },
            { label: "D  Felix Preston and Johanna Lehne", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s1-q13",
          number: 13,
          type: "matching",
          question: "13. The environmental damage caused by concrete is due to it being produced in large quantities.",
          options: [
            { label: "A  Chris Cheeseman", value: "A" },
            { label: "B  Markus Mannstrom", value: "B" },
            { label: "C  Anna Surgenor", value: "C" },
            { label: "D  Felix Preston and Johanna Lehne", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The steam car",
      passageText: `A
When primitive automobiles first began to appear in the 1800s, their engines were based on steam power. Steam had already enjoyed a long and successful career in the railways, so it was only natural that the technology evolved into a miniaturized version which was separate from the trains. But these early cars inherited steam's weaknesses along with its strengths. The boilers had to be lit by hand, and they required about twenty minutes to build up pressure before they could be driven. Furthermore, their water reservoirs only lasted for about thirty miles before needing replenishment. Despite such shortcomings, these newly designed self-propelled carriages offered quick transportation, and by the early 1900s it was not uncommon to see such machines shuttling wealthy citizens around town.

B
But the glory days of steam cars were few. A new technology called the Internal Combustion Engine soon appeared, which offered the ability to drive down the road just moments after starting up. At first, these noisy gasoline cars were unpopular because they were more complicated to operate and they had difficult hand-crank starters, which were known to break arms when the engines backfired. But in 1912 General Motors introduced the electric starter, and over the following few years steam power was gradually phased out.

C
Even as the market was declining, four brothers made one last effort to rekindle the technology. Between 1906 and 1909, while still attending high school, Abner Doble and his three brothers built their first steam car in their parents' basement. It comprised parts taken from a wrecked early steam car but reconfigured to drive an engine of their own design. Though it did not run well, the Doble brothers went on to build a second and third prototype in the following years. Though the Doble boys' third prototype, nicknamed the Model B, still lacked the convenience of an internal combustion engine, it drew the attention of automobile trade magazines due to its numerous improvements over previous steam cars. The Model B proved to be superior to gasoline automobiles in many ways. Its high-pressure steam drove the engine pistons in virtual silence, in contrast to clattering gas engines which emitted the aroma of burned hydrocarbons. Perhaps most impressively, the Model B was amazingly swift. It could accelerate from zero to sixty miles per hour in just fifteen seconds, a feat described as 'remarkable acceleration' by Automobile magazine in 1914.

D
The following year Abner Doble drove the Model B from Massachusetts to Detroit in order to seek investment in his automobile design, which he used to open the General Engineering Company. He and his brothers immediately began working on the Model C, which was intended to expand upon the innovations of the Model B. The brothers added features such as a key-based ignition in the cabin, eliminating the need for the operator to manually ignite the boiler. With these enhancements, the Dobles' new car company promised a steam vehicle which would provide all of the convenience of a gasoline car, but with much greater speed, much simpler driving controls, and a virtually silent powerplant. By the following April, the General Engineering Company had received 5,390 deposits for Doble Detroits, which were scheduled for delivery in early 1918.

E
Later that year Abner Doble delivered unhappy news to those eagerly awaiting the delivery of their modern new cars. Those buyers who received the handful of completed cars complained that the vehicles were sluggish and erratic, sometimes going in reverse when they should go forward. The new engine design, though innovative, was still plagued with serious glitches.

F
The brothers made one final attempt to produce a viable steam automobile. In early 1924, the Doble brothers shipped a Model E to New York City to be road-tested by the Automobile Club of America. After sitting overnight in freezing temperatures, the car was pushed out into the road and left to sit for over an hour in the frosty morning air. At the turn of the key, the boiler lit and reached its operating pressure inside of forty seconds. As they drove the test vehicle further, they found that its evenly distributed weight lent it surprisingly good handling, even though it was so heavy. As the new Doble steamer was further developed and tested, its maximum speed was pushed to over a hundred miles per hour, and it achieved about fifteen miles per gallon of kerosene with negligible emissions.

G
Sadly, the Dobles' brilliant steam car never was a financial success. Priced at around $18,000 in 1924, it was popular only among the very wealthy. Plus, it is said that no two Model Es were quite the same, because Abner Doble tinkered endlessly with the design. By the time the company folded in 1931, fewer than fifty of the amazing Model E steam cars had been produced. For his whole career, until his death in 1961, Abner Doble remained adamant that steam-powered automobiles were at least equal to gasoline cars, if not superior. Given the evidence, he may have been right. Many of the Model E Dobles which have survived are still in good working condition, some having been driven over half a million miles with only normal maintenance. Astonishingly, an unmodified Doble Model E runs clean enough to pass the emissions laws in California today, and they are pretty strict. It is true that the technology poses some difficult problems, but you cannot help but wonder how efficient a steam car might be with the benefit of modern materials and computers. Under the current pressure to improve automotive performance and reduce emissions, it is not unthinkable that the steam car may rise again.`,
      instructions: `Questions 14–20: Matching headings — choose the correct heading (i–viii) for each paragraph.
Questions 21–23: Multiple choice — choose the correct letter A–D.
Questions 24–26: Summary completion — ONE WORD AND/OR A NUMBER from the passage.`,
      questions: [
        // ── Q14–20: Matching headings ─────────────────────────
        {
          id: "cam18-ra-t3-s2-q14",
          number: 14,
          groupLabel: `Questions 14–20: Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list below.\n\ni   A period in cold conditions before the technology is assessed\nii  Marketing issues lead to failure\niii Good and bad aspects of steam technology are passed on\niv  A possible solution to the issues of today\nv   Further improvements lead to commercial orders\nvi  Positive publicity at last for this quiet, clean, fast vehicle\nvii A disappointing outcome for customers\nviii A better option than the steam car arises`,
          type: "matching",
          question: "14. Paragraph A",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Paragraph B",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q16",
          number: 16,
          type: "matching",
          question: "16. Paragraph C",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Paragraph D",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Paragraph E",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Paragraph F",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Paragraph G",
          options: [
            { label: "i", value: "i" }, { label: "ii", value: "ii" }, { label: "iii", value: "iii" },
            { label: "iv", value: "iv" }, { label: "v", value: "v" }, { label: "vi", value: "vi" },
            { label: "vii", value: "vii" }, { label: "viii", value: "viii" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        // ── Q21–23: Multiple choice ───────────────────────────
        {
          id: "cam18-ra-t3-s2-q21",
          number: 21,
          groupLabel: `Questions 21–23: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "21. What point does the writer make about the steam car in Paragraph B?",
          options: [
            { label: "A  Its success was short-lived.", value: "A" },
            { label: "B  Not enough cars were made.", value: "B" },
            { label: "C  Car companies found them hard to sell.", value: "C" },
            { label: "D  People found them hard to drive.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q22",
          number: 22,
          type: "multiple_choice",
          question: "22. When building their first steam car, the Doble brothers",
          options: [
            { label: "A  constructed all the parts themselves.", value: "A" },
            { label: "B  made written notes at each stage of the construction.", value: "B" },
            { label: "C  needed several attempts to achieve a competitive model.", value: "C" },
            { label: "D  sought the advice of experienced people in the car industry.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q23",
          number: 23,
          type: "multiple_choice",
          question: "23. In order to produce the Model C, the Doble brothers",
          options: [
            { label: "A  moved production to a different city.", value: "A" },
            { label: "B  raised financial capital.", value: "B" },
            { label: "C  employed an additional worker.", value: "C" },
            { label: "D  abandoned their earlier designs.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q24–26: Summary completion (ONE WORD AND/OR A NUMBER) ─
        {
          id: "cam18-ra-t3-s2-q24",
          number: 24,
          groupLabel: `Questions 24–26: Complete the summary below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.\n\nThe Model E\nThe Model E was road-tested in 1924 by the Automobile Club of America. They found it easy to drive, despite its weight, and it impressed the spectators. A later version of the Model E raised its 24 _______, while keeping its emissions extremely low.\n\nThe steam car was too expensive for many people and its design was constantly being altered. Under 25 _______ cars were produced before the company went out of business. However, even today, there are Model Es on the road in the US. They are straightforward to maintain, and they satisfy California's 26 _______ emissions laws. Perhaps today's technology and materials would help us revive the steam car.`,
          type: "summary_completion",
          question: "24. A later version of the Model E raised its _______, while keeping its emissions extremely low.",
          correctAnswer: "speed",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. Under _______ cars were produced before the company went out of business.",
          correctAnswer: "fifty/50",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. They satisfy California's _______ emissions laws.",
          correctAnswer: "strict",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam18-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The case for mixed-ability classes",
      passageText: `Picture this scene. It's an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare's Romeo and Juliet with a class of 15-year-olds. He's given some of the students copies of No Fear Shakespeare, a kid-friendly translation of the original. For three students, even these literacy demands are beyond them. Another girl simply can't focus and he gives her pens and paper to draw with. The teacher can ask the No Fear group to identify the key characters and maybe provide a tentative plot summary. He can ask most of the class about character development, and five of them might be able to support their statements with textual evidence. Now two curious students are wondering whether Shakespeare advocates living a life of moderation or one of passionate engagement.

As a teacher myself, I'd think my lesson would be going rather well if the discussion went as described above. But wouldn't this kind of class work better if there weren't such a huge gap between the top and the bottom? If we put all the kids who needed literacy support into one class, and all the students who want to discuss the virtue of moderation into another?

The practice of 'streaming', or 'tracking', involves separating students into classes depending on their diagnosed levels of attainment. At a macro level, it requires the establishment of academically selective schools for the brightest students, and comprehensive schools for the rest. Within schools, it means selecting students into a 'stream' of general ability, or 'sets' of subject-specific ability. The practice is intuitively appealing to almost every stakeholder.

I have heard the mixed-ability model attacked by way of analogy: a group hike. The fittest in the group take the lead and set a brisk pace, only to have to stop and wait every 20 minutes. This is frustrating, and their enthusiasm wanes. Meanwhile, the slowest ones are not only embarrassed but physically struggling to keep up. What's worse, they never get a long enough break. They honestly just want to quit. Hiking, they feel, is not for them.

Mixed-ability classes bore students, frustrate parents and burn out teachers. The brightest ones will never summit Mount Qomolangma, and the stragglers won't enjoy the lovely stroll in the park they are perhaps more suited to. Individuals suffer at the demands of the collective, mediocrity prevails. So: is learning like hiking?

The current pedagogical paradigm is arguably that of constructivism, which emerged out of the work of psychologist Lev Vygotsky. In the 1930s, Vygotsky emphasised the importance of targeting a student's specific 'zone of proximal development' (ZPD). This is the gap between what they can achieve only with support – teachers, textbooks, worked examples, parents and so on – and what they can achieve independently. The purpose of teaching is to provide and then gradually remove this 'scaffolding' until they are autonomous. If we accept this model, it follows that streaming students with similar ZPDs would be an efficient and effective solution. And that forcing everyone on the same hike – regardless of aptitude – would be madness.

Despite all this, there is limited empirical evidence to suggest that streaming results in better outcomes for students. Professor John Hattie, director of the Melbourne Education Research Institute, notes that 'tracking has minimal effects on learning outcomes'. What is more, streaming appears to significantly – and negatively – affect those students assigned to the lowest sets. These students tend to have much higher representation of low socioeconomic class. Less significant is the small benefit for those lucky clever students in the higher sets. The overall result is that the smart stay smart and the dumb get dumber, further entrenching the social divide.

In the latest update of Hattie's influential meta-analysis of factors influencing student achievement, one of the most significant factors is the teachers' estimate of achievement. Streaming students by diagnosed achievement automatically limits what the teacher feels the student is capable of. Meanwhile, in a mixed environment, teachers' estimates need to be more diverse and flexible.

While streaming might seem to help teachers effectively target a student's ZPD, it can underestimate the importance of peer-to-peer learning. A crucial aspect of constructivist theory is the role of the MKO – 'more knowledgeable other' – in knowledge construction. While teachers are traditionally the MKOs in classrooms, the value of knowledgeable student peers must not go unrecognised either.

I find it amazing to watch students get over an idea to their peers in ways that I would never think of. They operate with different language tools and different social tools from teachers and, having just learnt it themselves, they possess similar cognitive structures to their struggling classmates. There is also something exciting about passing on skills and knowledge that you yourself have just mastered – a certain pride and zeal, a certain freshness to the interaction between 'teacher' and 'learner' that is often lost by the expert for whom the steps are obvious and the joy of discovery forgotten.

Having a variety of different abilities in a collaborative learning environment provides valuable resources for helping students meet their learning needs, not to mention improving their communication and social skills. And today, more than ever, we need the many to flourish – not suffer at the expense of a few bright stars. Once a year, I go on a hike with my class, a mixed bunch of students. It is challenging. The fittest students realise they need to encourage the reluctant. There are lookouts who report back, and extra items to carry for others. We make it – together.`,
      instructions: `Questions 27–30: Multiple choice — choose the correct letter A–D.
Questions 31–35: Summary completion — choose the correct phrase A–I.
Questions 36–40: Do the statements agree with the views of the writer? Write YES, NO, or NOT GIVEN.`,
      questions: [
        // ── Q27–30: Multiple choice ───────────────────────────
        {
          id: "cam18-ra-t3-s3-q27",
          number: 27,
          groupLabel: `Questions 27–30: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "27. The writer describes the Romeo and Juliet lesson in order to demonstrate",
          options: [
            { label: "A  how few students are interested in literature.", value: "A" },
            { label: "B  how a teacher handles a range of learning needs.", value: "B" },
            { label: "C  how unsuitable Shakespeare is for most teenagers.", value: "C" },
            { label: "D  how weaker students can disrupt their classmates' learning.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. What does the writer say about streaming in the third paragraph?",
          options: [
            { label: "A  It has a very broad appeal.", value: "A" },
            { label: "B  It favours cleverer students.", value: "B" },
            { label: "C  It is relatively simple to implement.", value: "C" },
            { label: "D  It works better in some schools than others.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What idea is suggested by the reference to Mount Qomolangma in the fifth paragraph?",
          options: [
            { label: "A  students following unsuitable paths", value: "A" },
            { label: "B  students attempting interesting tasks", value: "B" },
            { label: "C  students not achieving their full potential", value: "C" },
            { label: "D  students not being aware of their limitations", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. What does the word 'scaffolding' in the sixth paragraph refer to?",
          options: [
            { label: "A  the factors which prevent a student from learning effectively", value: "A" },
            { label: "B  the environment where most of a student's learning takes place", value: "B" },
            { label: "C  the assistance given to a student in their initial stages of learning", value: "C" },
            { label: "D  the setting of appropriate learning targets for a student's aptitude", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q31–35: Summary with list of phrases A–I ──────────
        {
          id: "cam18-ra-t3-s3-q31",
          number: 31,
          groupLabel: `Questions 31–35: Complete the summary using the list of phrases, A–I, below.\n\nIs streaming effective?\nAccording to Professor John Hattie of the Melbourne Education Research Institute there is very little indication that streaming leads to 31 _______. He points out that, in schools which use streaming, the most significant impact is on those students placed in the 32 _______, especially where a large proportion of them have 33 _______. Meanwhile, for the 34 _______, there appears to be only minimal advantage. A further issue is that teachers tend to have 35 _______ of students in streamed groups.\n\nA  wrong classes\nB  lower expectations\nC  average learners\nD  bottom sets\nE  brightest pupils\nF  disadvantaged backgrounds\nG  weaker students\nH  higher achievements\nI  positive impressions`,
          type: "matching",
          question: "31. According to Hattie, there is very little indication that streaming leads to _______",
          options: [
            { label: "A  wrong classes", value: "A" },
            { label: "B  lower expectations", value: "B" },
            { label: "C  average learners", value: "C" },
            { label: "D  bottom sets", value: "D" },
            { label: "E  brightest pupils", value: "E" },
            { label: "F  disadvantaged backgrounds", value: "F" },
            { label: "G  weaker students", value: "G" },
            { label: "H  higher achievements", value: "H" },
            { label: "I  positive impressions", value: "I" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q32",
          number: 32,
          type: "matching",
          question: "32. the most significant impact is on those students placed in the _______",
          options: [
            { label: "A  wrong classes", value: "A" },
            { label: "B  lower expectations", value: "B" },
            { label: "C  average learners", value: "C" },
            { label: "D  bottom sets", value: "D" },
            { label: "E  brightest pupils", value: "E" },
            { label: "F  disadvantaged backgrounds", value: "F" },
            { label: "G  weaker students", value: "G" },
            { label: "H  higher achievements", value: "H" },
            { label: "I  positive impressions", value: "I" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q33",
          number: 33,
          type: "matching",
          question: "33. especially where a large proportion of them have _______",
          options: [
            { label: "A  wrong classes", value: "A" },
            { label: "B  lower expectations", value: "B" },
            { label: "C  average learners", value: "C" },
            { label: "D  bottom sets", value: "D" },
            { label: "E  brightest pupils", value: "E" },
            { label: "F  disadvantaged backgrounds", value: "F" },
            { label: "G  weaker students", value: "G" },
            { label: "H  higher achievements", value: "H" },
            { label: "I  positive impressions", value: "I" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q34",
          number: 34,
          type: "matching",
          question: "34. Meanwhile, for the _______, there appears to be only minimal advantage",
          options: [
            { label: "A  wrong classes", value: "A" },
            { label: "B  lower expectations", value: "B" },
            { label: "C  average learners", value: "C" },
            { label: "D  bottom sets", value: "D" },
            { label: "E  brightest pupils", value: "E" },
            { label: "F  disadvantaged backgrounds", value: "F" },
            { label: "G  weaker students", value: "G" },
            { label: "H  higher achievements", value: "H" },
            { label: "I  positive impressions", value: "I" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q35",
          number: 35,
          type: "matching",
          question: "35. teachers tend to have _______ of students in streamed groups",
          options: [
            { label: "A  wrong classes", value: "A" },
            { label: "B  lower expectations", value: "B" },
            { label: "C  average learners", value: "C" },
            { label: "D  bottom sets", value: "D" },
            { label: "E  brightest pupils", value: "E" },
            { label: "F  disadvantaged backgrounds", value: "F" },
            { label: "G  weaker students", value: "G" },
            { label: "H  higher achievements", value: "H" },
            { label: "I  positive impressions", value: "I" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q36–40: Yes/No/Not Given ──────────────────────────
        {
          id: "cam18-ra-t3-s3-q36",
          number: 36,
          groupLabel: `Questions 36–40: Do the following statements agree with the views of the writer in Reading Passage 3?\nWrite YES if the statement agrees with the views of the writer.\nWrite NO if the statement contradicts the views of the writer.\nWrite NOT GIVEN if it is impossible to say what the writer thinks about this.`,
          type: "true_false_ng",
          question: "36. The Vygotsky model of education supports the concept of a mixed-ability class.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Some teachers are uncertain about allowing students to take on MKO roles in the classroom.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. It can be rewarding to teach knowledge which you have only recently acquired.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. The priority should be to ensure that the highest-achieving students attain their goals.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam18-ra-t3-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Taking part in collaborative outdoor activities with teachers and classmates can improve student outcomes in the classroom.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge18Tests: IELTSTest[] = [cambridge18_reading_t1, cambridge18_reading_t2, cambridge18_reading_t3];
