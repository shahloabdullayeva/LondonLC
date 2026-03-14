import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 11 – TEST 1  (Academic Reading)
// ============================================================
export const cambridge11_reading_t1: IELTSTest = {
  id: "cam11-reading-academic-t1",
  title: "Cambridge IELTS 11 – Test 1",
  bookNumber: 11,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam11-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Crop-growing skyscrapers",
      passageText: `By the year 2050, nearly 80% of the Earth's population will live in urban centres. Applying the most conservative estimates to current demographic trends, the human population will increase by about three billion people by then. An estimated 109 hectares of new land (about 20% larger than Brazil) will be needed to grow enough food to feed them, if traditional farming methods continue as they are practised today. At present, throughout the world, over 80% of the land that is suitable for raising crops is in use. Historically, some 15% of that has been laid waste by poor management practices. What can be done to ensure enough food for the world's population to live on?

The concept of indoor farming is not new, since hothouse production of tomatoes and other produce has been in vogue for some time. What is new is the urgent need to scale up this technology to accommodate another three billion people. Many believe an entirely new approach to indoor farming is required, employing cutting-edge technologies. One such proposal is for the 'Vertical Farm'. The concept is of multi-storey buildings in which food crops are grown in environmentally controlled conditions. Situated in the heart of urban centres, they would drastically reduce the amount of transportation required to bring food to consumers. Vertical farms would need to be efficient, cheap to construct and safe to operate. If successfully implemented, proponents claim, vertical farms offer the promise of urban renewal, sustainable production of a safe and varied food supply (through year-round production of all crops), and the eventual repair of ecosystems that have been sacrificed for horizontal farming.

It took humans 10,000 years to learn how to grow most of the crops we now take for granted. Along the way, we despoiled most of the land we worked, often turning verdant, natural ecozones into semi-arid deserts. Within that same time frame, we evolved into an urban species, in which 60% of the human population now lives vertically in cities. This means that, for the majority, we humans have shelter from the elements, yet we subject our food-bearing plants to the rigours of the great outdoors and can do no more than hope for a good weather year. However, more often than not now, due to a rapidly changing climate, that is not what happens. Massive floods, long droughts, hurricanes and severe monsoons take their toll each year, destroying millions of tons of valuable crops.

The supporters of vertical farming claim many potential advantages for the system. For instance, crops would be produced all year round, as they would be kept in artificially controlled, optimum growing conditions. There would be no weather-related crop failures due to droughts, floods or pests. All the food could be grown organically, eliminating the need for herbicides, pesticides and fertilisers. The system would greatly reduce the incidence of many infectious diseases that are acquired at the agricultural interface. Although the system would consume energy, it would return energy to the grid via methane generation from composting nonedible parts of plants. It would also dramatically reduce fossil fuel use, by cutting out the need for tractors, ploughs and shipping.

A major drawback of vertical farming, however, is that the plants would require artificial light. Without it, those plants nearest the windows would be exposed to more sunlight and grow more quickly, reducing the efficiency of the system. Single-storey greenhouses have the benefit of natural overhead light; even so, many still need artificial lighting.

A multi-storey facility with no natural overhead light would require far more. Generating enough light could be prohibitively expensive, unless cheap, renewable energy is available, and this appears to be rather a future aspiration than a likelihood for the near future.

One variation on vertical farming that has been developed is to grow plants in stacked trays that move on rails. Moving the trays allows the plants to get enough sunlight. This system is already in operation, and works well within a single-storey greenhouse with light reaching it from above: it is not certain, however, that it can be made to work without that overhead natural light.

Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population. At the moment, though, more needs to be done to reduce the detrimental impact it would have on the environment, particularly as regards the use of energy. While it is possible that much of our food will be grown in skyscrapers in future, most experts currently believe it is far more likely that we will simply use the space available on urban rooftops.`,
      instructions: `Questions 1–7: Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 8–13: Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        {
          id: "cam11-ra-t1-s1-q1",
          number: 1,
          type: "sentence_completion",
          question: "Some food plants, including _______ are already grown indoors.",
          correctAnswer: "tomatoes",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q2",
          number: 2,
          type: "sentence_completion",
          question: "Vertical farms would be located in _______, meaning that there would be less need to take them long distances to customers.",
          correctAnswer: "urban centres/urban centers",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q3",
          number: 3,
          type: "sentence_completion",
          question: "Vertical farms could use methane from plants and animals to produce _______.",
          correctAnswer: "energy",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q4",
          number: 4,
          type: "sentence_completion",
          question: "The consumption of _______ would be cut because agricultural vehicles would be unnecessary.",
          correctAnswer: "fossil fuels/fossil fuel",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q5",
          number: 5,
          type: "sentence_completion",
          question: "The fact that vertical farms would need _______ light is a disadvantage.",
          correctAnswer: "artificial",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q6",
          number: 6,
          type: "sentence_completion",
          question: "One form of vertical farming involves planting in _______ which are not fixed.",
          correctAnswer: "stacked trays/trays",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q7",
          number: 7,
          type: "sentence_completion",
          question: "The most probable development is that food will be grown on _______ in towns and cities.",
          correctAnswer: "urban rooftops/rooftops",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "Methods for predicting the Earth's population have recently changed.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "Human beings are responsible for some of the destruction to food-producing land.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "The crops produced in vertical farms will depend on the season.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "Some damage to food crops is caused by climate change.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "Fertilisers will be needed for certain crops in vertical farms.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "Vertical farming will make plants less likely to be affected by infectious diseases.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam11-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Falkirk Wheel",
      passageText: `A unique engineering achievement

The Falkirk Wheel in Scotland is the world's first and only rotating boat lift. Opened in 2002, it is central to the ambitious £84.5m Millennium Link project to restore navigability across Scotland by reconnecting the historic waterways of the Forth & Clyde and Union Canals.

The major challenge of the project layed in the fact that the Forth & Clyde Canal is situated 35 metres below the level of the Union Canal. Historically, the two canals had been joined near the town of Falkirk by a sequence of 11 locks – enclosed sections of canal in which the water level could be raised or lowered – that stepped down across a distance of 1.5 km. This had been dismantled in 1933, thereby breaking the link. When the project was launched in 1994, the British Waterways authority were keen to create a dramatic twenty-first-century landmark which would not only be a fitting commemoration of the Millennium, but also a lasting symbol of the economic regeneration of the region.

Numerous ideas were submitted for the project, including concepts ranging from rolling eggs to tilting tanks, from giant seesaws to overhead monorails. The eventual winner was a plan for the huge rotating steel boat lift which was to become The Falkirk Wheel. The unique shape of the structure is claimed to have been inspired by various sources, both manmade and natural, most notably a Celtic double headed axe, but also the vast turning propeller of a ship, the ribcage of a whale or the spine of a fish.

The various parts of The Falkirk Wheel were all constructed and assembled, like one giant toy building set, at Butterley Engineering's Steelworks in Derbyshire, some 400 km from Falkirk. A team there carefully assembled the 1,200 tonnes of steel, painstakingly fitting the pieces together to an accuracy of just 10 mm to ensure a perfect final fit. In the summer of 2001, the structure was then dismantled and transported on 35 lorries to Falkirk, before all being bolted back together again on the ground, and finally lifted into position in five large sections by crane. The Wheel would need to withstand immense and constantly changing stresses as it rotated, so to make the structure more robust, the steel sections were bolted rather than welded together. Over 45,000 bolt holes were matched with their bolts, and each bolt was hand-tightened.

The Wheel consists of two sets of opposing axe-shaped arms, attached about 25 metres apart to a fixed central spine. Two diametrically opposed water-filled 'gondolas', each with a capacity of 360,000 litres, are fitted between the ends of the arms. These gondolas always weigh the same, whether or not they are carrying boats. This is because, according to Archimedes' principle of displacement, floating objects displace their own weight in water. So when a boat enters a gondola, the amount of water leaving the gondola weighs exactly the same as the boat. This keeps the Wheel balanced and so, despite its enormous mass, it rotates through 180° in five and a half minutes while using very little power. It takes just 1.5 kilowatt-hours (5.4 MJ) of energy to rotate the Wheel – roughly the same as boiling eight small domestic kettles of water.

Boats needing to be lifted up enter the canal basin at the level of the Forth & Clyde Canal and then enter the lower gondola of the Wheel. Two hydraulic steel gates are raised, so as to seal the gondola off from the water in the canal basin. The water between the gates is then pumped out. A hydraulic clamp, which prevents the arms of the Wheel moving while the gondola is docked, is removed, allowing the Wheel to turn. In the central machine room an array of ten hydraulic motors then begins to rotate the central axle. The axle connects to the outer arms of the Wheel, which begin to rotate at a speed of 1/8 of a revolution per minute. As the wheel rotates, the gondolas are kept in the upright position by a simple gearing system. Two eight-metre-wide cogs orbit a fixed inner cog of the same width, connected by two smaller cogs travelling in the opposite direction to the outer cogs – so ensuring that the gondolas always remain level. When the gondola reaches the top, the boat passes straight onto the aqueduct situated 24 metres above the canal basin.

The remaining 11 metres of lift needed to reach the Union Canal is achieved by means of a pair of locks. The Wheel could not be constructed to elevate boats over the full 35-metre difference between the two canals, owing to the presence of the historically important Antonine Wall, which was built by the Romans in the second century AD. Boats travel under this wall via a tunnel, then through the locks, and finally on to the Union Canal.`,
      instructions: `Questions 14–19: Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.

Questions 20–26: Label the diagram below. Choose ONE WORD from the passage for each answer.`,
      diagramUrl: "/LondonLC/falkirkwheel.png",
      questions: [
        {
          id: "cam11-ra-t1-s2-q14",
          number: 14,
          type: "true_false_ng",
          question: "The Falkirk Wheel has linked the Forth & Clyde Canal with the Union Canal for the first time in their history.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q15",
          number: 15,
          type: "true_false_ng",
          question: "There was some opposition to the design of the Falkirk Wheel at first.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q16",
          number: 16,
          type: "true_false_ng",
          question: "The Falkirk Wheel was initially put together at the location where its components were manufactured.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q17",
          number: 17,
          type: "true_false_ng",
          question: "The Falkirk Wheel is the only boat lift in the world which has steel sections bolted together by hand.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q18",
          number: 18,
          type: "true_false_ng",
          question: "The weight of the gondolas varies according to the size of boat being carried.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q19",
          number: 19,
          type: "true_false_ng",
          question: "The construction of the Falkirk Wheel site took into account the presence of a nearby ancient monument.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q20",
          number: 20,
          type: "diagram_labelling",
          question: "A pair of 20 _______ are lifted in order to shut out water from canal basin.",
          correctAnswer: "gates",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q21",
          number: 21,
          type: "diagram_labelling",
          question: "A 21 _______ is taken out, enabling Wheel to rotate.",
          correctAnswer: "clamp",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q22",
          number: 22,
          type: "diagram_labelling",
          question: "Hydraulic motors drive 22 _______.",
          correctAnswer: "axle",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q23",
          number: 23,
          type: "diagram_labelling",
          question: "A range of different-sized 23 _______ ensures boat keeps upright.",
          correctAnswer: "cogs",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q24",
          number: 24,
          type: "diagram_labelling",
          question: "Boat reaches top of Wheel, then moves directly onto 24 _______.",
          correctAnswer: "aqueduct",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q25",
          number: 25,
          type: "diagram_labelling",
          question: "Boat travels through tunnel beneath Roman 25 _______.",
          correctAnswer: "wall",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s2-q26",
          number: 26,
          type: "diagram_labelling",
          question: "26 _______ raise boat 11 m to level of Union Canal.",
          correctAnswer: "locks",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam11-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Reducing the Effects of Climate Change",
      passageText: `Mark Rowe reports on the increasingly ambitious geo-engineering projects being explored by scientists

**A**
Such is our dependence on fossil fuels, and such is the volume of carbon dioxide already released into the atmosphere, that many experts agree that significant global warming is now inevitable. They believe that the best we can do is keep it at a reasonable level, and at present the only serious option for doing this is cutting back on our carbon emissions. But while a few countries are making major strides in this regard, the majority are having great difficulty even stemming the rate of increase, let alone reversing it. Consequently, an increasing number of scientists are beginning to explore the alternative of geo-engineering — a term which generally refers to the intentional large-scale manipulation of the environment. According to its proponents, geo-engineering is the equivalent of a backup generator: if Plan A – reducing our dependency on fossil fuels – fails, we require a Plan B, employing grand schemes to slow down or reverse the process of global warming.

**B**
Geo-engineering has been shown to work, at least on a small localised scale. For decades, MayDay parades in Moscow have taken place under clear blue skies, aircraft having deposited dry ice, silver iodide and cement powder to disperse clouds. Many of the schemes now suggested look to do the opposite, and reduce the amount of sunlight reaching the planet. The most eye-catching idea of all is suggested by Professor Roger Angel of the University of Arizona. His scheme would employ up to 16 trillion minute spacecraft, each weighing about one gram, to form a transparent, sunlight-refracting sunshade in an orbit 1.5 million km above the Earth. This could, argues Angel, reduce the amount of light reaching the Earth by two per cent.

**C**
The majority of geo-engineering projects so far carried out — which include planting forests in deserts and depositing iron in the ocean to stimulate the growth of algae – have focused on achieving a general cooling of the Earth. But some look specifically at reversing the melting at the poles, particularly the Arctic. The reasoning is that if you replenish the ice sheets and frozen waters of the high latitudes, more light will be reflected back into space, so reducing the warming of the oceans and atmosphere.

**D**
The concept of releasing aerosol sprays into the stratosphere above the Arctic has been proposed by several scientists. This would involve using sulphur or hydrogen sulphide aerosols so that sulphur dioxide would form clouds, which would, in turn, lead to a global dimming. The idea is modelled on historic volcanic explosions, such as that of Mount Pinatubo in the Philippines in 1991, which led to a short-term cooling of global temperatures by 0.5 °C. Scientists have also scrutinised whether it's possible to preserve the ice sheets of Greenland with reinforced high-tension cables, preventing icebergs from moving into the sea. Meanwhile in the Russian Arctic, geo-engineering plans include the planting of millions of birch trees. Whereas the regions' native evergreen pines shade the snow and absorb radiation, birches would shed their leaves in winter, thus enabling radiation to be reflected by the snow. Re-routing Russian rivers to increase cold water flow to ice-forming areas could also be used to slow down warming, say some climate scientists.

**E**
But will such schemes ever be implemented? Generally speaking, those who are most cautious about geo-engineering are the scientists involved in the research. Angel says that his plan is 'no substitute for developing renewable energy: the only permanent solution'. And Dr Phil Rasch of the US-based Pacific Northwest National Laboratory is equally guarded about the role of geo-engineering: 'I think all of us agree that if we were to end geo-engineering on a given day, then the planet would return to its pre-engineered condition very rapidly, and probably within ten to twenty years. That's certainly something to worry about.'

**F**
The US National Center for Atmospheric Research has already suggested that the proposal to inject sulphur into the atmosphere might affect rainfall patterns across the tropics and the Southern Ocean. 'Geo-engineering plans to inject stratospheric aerosols or to seed clouds would act to cool the planet, and act to increase the extent of sea ice,' says Rasch. 'But all the models suggest some impact on the distribution of precipitation.'

**G**
'A further risk with geo-engineering projects is that you can "overshoot",' says Dr Dan Lunt, from the University of Bristol's School of Geophysical Sciences, who has studied the likely impacts of the sunshade and aerosol schemes on the climate. 'You may bring global temperatures back to pre-industrial levels, but the risk is that the poles will still be warmer than they should be and the tropics will be cooler than before industrialisation.' To avoid such a scenario, Lunt says, Angel's project would have to operate at half strength; all of which reinforces his view that the best option is to avoid the need for geo-engineering altogether.

**H**
The main reason why geo-engineering is supported by many in the scientific community is that most researchers have little faith in the ability of politicians to agree – and then bring in — the necessary carbon cuts. Even leading conservation organisations see the value of investigating the potential of geo-engineering. According to Dr Martin Sommerkorn, climate change advisor for the World Wildlife Fund's International Arctic Programme, 'Human-induced climate change has brought humanity to a position where we shouldn't exclude thinking thoroughly about this topic and its possibilities.'`,
      instructions: `Questions 27–29: Reading Passage 3 has eight paragraphs A–H. Which paragraph contains the following information? Write the correct letter, A–H.

Questions 30–36: Complete the table below. Choose ONE WORD from the passage for each answer.

Questions 37–40: Match each statement with the correct scientist.
A = Roger Angel   B = Phil Rasch   C = Dan Lunt   D = Martin Sommerkorn`,
      questions: [
        {
          id: "cam11-ra-t1-s3-q27",
          number: 27,
          type: "multiple_choice",
          question: "Which paragraph contains: mention of a geo-engineering project based on an earlier natural phenomenon?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "Which paragraph contains: an example of a successful use of geo-engineering?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "Which paragraph contains: a common definition of geo-engineering?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q30",
          number: 30,
          type: "table_completion",
          question: "Put a large number of tiny spacecraft into orbit far above Earth → to create a 30 _______ that would reduce the amount of light reaching Earth.",
          correctAnswer: "sunshade",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q31",
          number: 31,
          type: "table_completion",
          question: "Place 31 _______ in the sea → to encourage algae to form.",
          correctAnswer: "iron",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q32",
          number: 32,
          type: "table_completion",
          question: "Place iron in the sea → to encourage 32 _______ to form.",
          correctAnswer: "algae",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q33",
          number: 33,
          type: "table_completion",
          question: "Release aerosol sprays into the stratosphere → to create 33 _______ that would reduce the amount of light reaching Earth.",
          correctAnswer: "clouds",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q34",
          number: 34,
          type: "table_completion",
          question: "Fix strong 34 _______ to Greenland ice sheets → to prevent icebergs moving into the sea.",
          correctAnswer: "cables",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q35",
          number: 35,
          type: "table_completion",
          question: "Plant trees in Russian Arctic that would lose their leaves in winter → to allow the 35 _______ to reflect radiation.",
          correctAnswer: "snow",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q36",
          number: 36,
          type: "table_completion",
          question: "Change the direction of 36 _______ → to bring more cold water into ice-forming areas.",
          correctAnswer: "rivers",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q37",
          number: 37,
          type: "multiple_choice",
          question: "37. The effects of geo-engineering may not be long-lasting.",
          options: [
            { label: "A – Roger Angel", value: "A" },
            { label: "B – Phil Rasch", value: "B" },
            { label: "C – Dan Lunt", value: "C" },
            { label: "D – Martin Sommerkorn", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q38",
          number: 38,
          type: "multiple_choice",
          question: "38. Geo-engineering is a topic worth exploring.",
          options: [
            { label: "A – Roger Angel", value: "A" },
            { label: "B – Phil Rasch", value: "B" },
            { label: "C – Dan Lunt", value: "C" },
            { label: "D – Martin Sommerkorn", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q39",
          number: 39,
          type: "multiple_choice",
          question: "39. It may be necessary to limit the effectiveness of geo-engineering projects.",
          options: [
            { label: "A – Roger Angel", value: "A" },
            { label: "B – Phil Rasch", value: "B" },
            { label: "C – Dan Lunt", value: "C" },
            { label: "D – Martin Sommerkorn", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam11-ra-t1-s3-q40",
          number: 40,
          type: "multiple_choice",
          question: "40. Research into non-fossil-based fuels cannot be replaced by geo-engineering.",
          options: [
            { label: "A – Roger Angel", value: "A" },
            { label: "B – Phil Rasch", value: "B" },
            { label: "C – Dan Lunt", value: "C" },
            { label: "D – Martin Sommerkorn", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 11 – TEST 2  (Academic Reading)
// ============================================================
export const cambridge11_reading_t2: IELTSTest = {
  id: "cam11-reading-academic-t2",
  title: "Cambridge IELTS 11 – Test 2",
  bookNumber: 11,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam11-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Raising the Mary Rose",
      passageText: `How a sixteenth-century warship was recovered from the seabed

On 19 July 1545, English and French fleets were engaged in a sea battle off the coast of southern England in the area of water called the Solent, between Portsmouth and the Isle of Wight. Among the English vessels was a warship by the name of Mary Rose. Built in Portsmouth some 35 years earlier, she had had a long and successful fighting career, and was a favourite of King Henry VIII. Accounts of what happened to the ship vary: while witnesses agree that she was not hit by the French, some maintain that she was outdated, overladen and sailing too low in the water, others that she was mishandled by undisciplined crew. What is undisputed, however, is that the Mary Rose sank into the Solent that day, taking at least 500 men with her. After the battle, attempts were made to recover the ship, but these failed.

The Mary Rose came to rest on the seabed, lying on her starboard (right) side at an angle of approximately 60 degrees. The hull (the body of the ship) acted as a trap for the sand and mud carried by Solent currents. As a result, the starboard side filled rapidly, leaving the exposed port (left) side to be eroded by marine organisms and mechanical degradation. Because of the way the ship sank, nearly all of the starboard half survived intact. During the seventeenth and eighteenth centuries, the entire site became covered with a layer of hard grey clay, which minimised further erosion.

Then, on 16 June 1836, some fishermen in the Solent found that their equipment was caught on an underwater obstruction, which turned out to be the Mary Rose. Diver John Deane happened to be exploring another sunken ship nearby, and the fishermen approached him, asking him to free their gear. Deane dived down, and found the equipment caught on a timber protruding slightly from the seabed. Exploring further, he uncovered several other timbers and a bronze gun. Deane continued diving on the site intermittently until 1840, recovering several more guns, two bows, various timbers, part of a pump and various other small finds.

The Mary Rose then faded into obscurity for another hundred years. But in 1965, military historian and amateur diver Alexander McKee, in conjunction with the British Sub-Aqua Club, initiated a project called 'Solent Ships'. While on paper this was a plan to examine a number of known wrecks in the Solent, what McKee really hoped for was to find the Mary Rose. Ordinary search techniques proved unsatisfactory, so McKee entered into collaboration with Harold E. Edgerton, professor of electrical engineering at the Massachusetts Institute of Technology. In 1967, Edgerton's side-scan sonar systems revealed a large, unusually shaped object, which McKee believed was the Mary Rose.

Further excavations revealed stray pieces of timber and an iron gun. But the climax to the operation came when, on 5 May 1971, part of the ship's frame was uncovered. McKee and his team now knew for certain that they had found the wreck, but were as yet unaware that it also housed a treasure trove of beautifully preserved artefacts. Interest in the project grew, and in 1979, The Mary Rose Trust was formed, with Prince Charles as its President and Dr Margaret Rule its Archaeological Director. The decision whether or not to salvage the wreck was not an easy one, although an excavation in 1978 had shown that it might be possible to raise the hull. While the original aim was to raise the hull if at all feasible, the operation was not given the go-ahead until January 1982, when all the necessary information was available.

An important factor in trying to salvage the Mary Rose was that the remaining hull was an open shell. This led to an important decision being taken: namely to carry out the lifting operation in three very distinct stages. The hull was attached to a lifting frame via a network of bolts and lifting wires. The problem of the hull being sucked back downwards into the mud was overcome by using 12 hydraulic jacks. These raised it a few centimetres over a period of several days, as the lifting frame rose slowly up its four legs. It was only when the hull was hanging freely from the lifting frame, clear of the seabed and the suction effect of the surrounding mud, that the salvage operation progressed to the second stage. In this stage, the lifting frame was fixed to a hook attached to a crane, and the hull was lifted completely clear of the seabed and transferred underwater into the lifting cradle. This required precise positioning to locate the legs into the 'stabbing guides' of the lifting cradle. The lifting cradle was designed to fit the hull using archaeological survey drawings, and was fitted with air bags to provide additional cushioning for the hull's delicate timber framework. The third and final stage was to lift the entire structure into the air, by which time the hull was also supported from below. Finally, on 11 October 1982, millions of people around the world held their breath as the timber skeleton of the Mary Rose was lifted clear of the water, ready to be returned home to Portsmouth.`,
      instructions: `Questions 1–4: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.

Questions 5–8: Match each statement with the correct date, A–G.
A 1836  B 1840  C 1965  D 1967  E 1971  F 1979  G 1982

Questions 9–13: Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer.`,
      diagramUrl: "/LondonLC/maryrose.png",
      questions: [
        // ── Q1–4: TRUE / FALSE / NOT GIVEN ───────────────────────
        {
          id: "cam11-ra-t2-s1-q1",
          number: 1,
          type: "true_false_ng",
          question: "1. There is some doubt about what caused the Mary Rose to sink.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. The Mary Rose was the only ship to sink in the battle of 19 July 1545.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Most of one side of the Mary Rose lay undamaged under the sea.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Alexander McKee knew that the wreck would contain many valuable historical objects.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        // ── Q5–8: Matching dates ──────────────────────────────────
        {
          id: "cam11-ra-t2-s1-q5",
          number: 5,
          type: "matching",
          question: "5. A search for the Mary Rose was launched.",
          options: [
            { label: "A – 1836", value: "A" },
            { label: "B – 1840", value: "B" },
            { label: "C – 1965", value: "C" },
            { label: "D – 1967", value: "D" },
            { label: "E – 1971", value: "E" },
            { label: "F – 1979", value: "F" },
            { label: "G – 1982", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q6",
          number: 6,
          type: "matching",
          question: "6. One person's exploration of the Mary Rose site stopped.",
          options: [
            { label: "A – 1836", value: "A" },
            { label: "B – 1840", value: "B" },
            { label: "C – 1965", value: "C" },
            { label: "D – 1967", value: "D" },
            { label: "E – 1971", value: "E" },
            { label: "F – 1979", value: "F" },
            { label: "G – 1982", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q7",
          number: 7,
          type: "matching",
          question: "7. It was agreed that the hull of the Mary Rose should be raised.",
          options: [
            { label: "A – 1836", value: "A" },
            { label: "B – 1840", value: "B" },
            { label: "C – 1965", value: "C" },
            { label: "D – 1967", value: "D" },
            { label: "E – 1971", value: "E" },
            { label: "F – 1979", value: "F" },
            { label: "G – 1982", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q8",
          number: 8,
          type: "matching",
          question: "8. The site of the Mary Rose was found by chance.",
          options: [
            { label: "A – 1836", value: "A" },
            { label: "B – 1840", value: "B" },
            { label: "C – 1965", value: "C" },
            { label: "D – 1967", value: "D" },
            { label: "E – 1971", value: "E" },
            { label: "F – 1979", value: "F" },
            { label: "G – 1982", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q9–13: Diagram labelling ──────────────────────────────
        {
          id: "cam11-ra-t2-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Label the diagram below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.",
          type: "diagram_labelling",
          question: "9. _______ attached to hull by wires",
          correctAnswer: "lifting frame",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q10",
          number: 10,
          type: "diagram_labelling",
          question: "10. _______ to prevent hull being sucked into mud",
          correctAnswer: "hydraulic jacks",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q11",
          number: 11,
          type: "diagram_labelling",
          question: "11. Legs are placed into _______",
          correctAnswer: "stabbing guides",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q12",
          number: 12,
          type: "diagram_labelling",
          question: "12. Hull is lowered into _______",
          correctAnswer: "lifting cradle",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s1-q13",
          number: 13,
          type: "diagram_labelling",
          question: "13. _______ used as extra cushioning",
          correctAnswer: "air bags",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam11-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "What destroyed the civilisation of Easter Island?",
      passageText: `A
Easter Island, or Rapu Nui as it is known locally, is home to several hundred ancient human statues – the moai. After this remote Pacific island was settled by the Polynesians, it remained isolated for centuries. All the energy and resources that went into the moai – some of which are ten metres tall and weigh over 7,000 kilos – came from the island itself. Yet when Dutch explorers landed in 1722, they met a Stone Age culture. The moai were carved with stone tools, then transported for many kilometres, without the use of animals or wheels, to massive stone platforms. The identity of the moai builders was in doubt until well into the twentieth century. Thor Heyerdahl, the Norwegian ethnographer and adventurer, thought the statues had been created by pre-Inca peoples from Peru. Bestselling Swiss author Erich von Daniken believed they were built by stranded extraterrestrials. Modern science – linguistic, archaeological and genetic evidence – has definitively proved the moai builders were Polynesians, but not how they moved their creations. Local folklore maintains that the statues walked, while researchers have tended to assume the ancestors dragged the statues somehow, using ropes and logs.

B
When the Europeans arrived, Rapa Nui was grassland, with only a few scrawny trees. In the 1970s and 1980s, though, researchers found pollen preserved in lake sediments, which proved the island had been covered in lush palm forests for thousands of years. Only after the Polynesians arrived did those forests disappear. US scientist Jared Diamond believes that the Rapanui people – descendants of Polynesian settlers – wrecked their own environment. They had unfortunately settled on an extremely fragile island – dry, cool, and too remote to be properly fertilised by windblown volcanic ash. When the islanders cleared the forests for firewood and farming, the forests didn't grow back. As trees became scarce and they could no longer construct wooden canoes for fishing, they ate birds. Soil erosion decreased their crop yields. Before Europeans arrived, the Rapanui had descended into civil war and cannibalism, he maintains. The collapse of their isolated civilisation, Diamond writes, is a 'worst-case scenario for what may lie ahead of us in our own future'.

C
The moai, he thinks, accelerated the self-destruction. Diamond interprets them as power displays by rival chieftains who, trapped on a remote little island, lacked other ways of asserting their dominance. They competed by building ever bigger figures. Diamond thinks they laid the moai on wooden sledges, hauled over log rails, but that required both a lot of wood and a lot of people. To feed the people, even more land had to be cleared. When the wood was gone and civil war began, the islanders began toppling the moai. By the nineteenth century none were standing.

D
Archaeologists Terry Hunt of the University of Hawaii and Carl Lipo of California State University agree that Easter Island lost its lush forests and that it was an 'ecological catastrophe' – but they believe the islanders themselves weren't to blame. And the moai certainly weren't. Archaeological excavations indicate that the Rapanui went to heroic efforts to protect the resources of their wind-lashed, infertile fields. They built thousands of circular stone windbreaks and gardened inside them, and used broken volcanic rocks to keep the soil moist. In short, Hunt and Lipo argue, the prehistoric Rapanui were pioneers of sustainable farming.

E
Hunt and Lipo contend that moai-building was an activity that helped keep the peace between islanders. They also believe that moving the moai required few people and no wood, because they were walked upright. On that issue, Hunt and Lipo say, archaeological evidence backs up Rapanui folklore. Recent experiments indicate that as few as 18 people could, with three strong ropes and a bit of practice, easily manoeuvre a 1,000 kg moai replica a few hundred metres. The figures' fat bellies tilted them forward, and a D-shaped base allowed handlers to roll and rock them side to side.

F
Moreover, Hunt and Lipo are convinced that the settlers were not wholly responsible for the loss of the island's trees. Archaeological finds of nuts from the extinct Easter Island palm show tiny grooves, made by the teeth of Polynesian rats. The rats arrived along with the settlers, and in just a few years, Hunt and Lipo calculate, they would have overrun the island. They would have prevented the reseeding of the slow-growing palm trees and thereby doomed Rapa Nui's forest, even without the settlers' campaign of deforestation. No doubt the rats ate birds' eggs too. Hunt and Lipo also see no evidence that Rapanui civilisation collapsed when the palm forest did. They think its population grew rapidly and then remained more or less stable until the arrival of the Europeans, who introduced deadly diseases to which islanders had no immunity. Then in the nineteenth century slave traders decimated the population, which shrivelled to 111 people by 1877.

G
Hunt and Lipo's vision, therefore, is one of an island populated by peaceful and ingenious moai builders and careful stewards of the land, rather than by reckless destroyers ruining their own environment and society. 'Rather than a case of abject failure, Rapu Nui is an unlikely story of success', they claim. Whichever is the case, there are surely some valuable lessons which the world at large can learn from the story of Rapa Nui.`,
      instructions: `Questions 14–20: Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.
List of Headings:
i Evidence of innovative environment management practices
ii An undisputed answer to a question about the moai
iii The future of the moai statues
iv A theory which supports a local belief
v The future of Easter Island
vi Two opposing views about the Rapanui people
vii Destruction outside the inhabitants' control
viii How the statues made a situation worse
ix Diminishing food resources

Questions 21–24: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.

Questions 25–26: Choose TWO letters, A–E. On what points do Hunt and Lipo disagree with Diamond?
A the period when the moai were created
B how the moai were transported
C the impact of the moai on Rapanui society
D how the moai were carved
E the origins of the people who made the moai`,
      questions: [
        // ── Q14–20: Matching headings ──────────────────────────────
        {
          id: "cam11-ra-t2-s2-q14",
          number: 14,
          type: "matching",
          question: "14. Paragraph A",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Paragraph B",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "ix",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. Paragraph C",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Paragraph D",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Paragraph E",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Paragraph F",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Paragraph G",
          options: [
            { label: "i – Evidence of innovative environment management practices", value: "i" },
            { label: "ii – An undisputed answer to a question about the moai", value: "ii" },
            { label: "iii – The future of the moai statues", value: "iii" },
            { label: "iv – A theory which supports a local belief", value: "iv" },
            { label: "v – The future of Easter Island", value: "v" },
            { label: "vi – Two opposing views about the Rapanui people", value: "vi" },
            { label: "vii – Destruction outside the inhabitants' control", value: "vii" },
            { label: "viii – How the statues made a situation worse", value: "viii" },
            { label: "ix – Diminishing food resources", value: "ix" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        // ── Q21–24: Summary completion ────────────────────────────
        {
          id: "cam11-ra-t2-s2-q21",
          number: 21,
          type: "sentence_completion",
          question: "21. Diamond believes the islanders destroyed the forests, cutting down trees for firewood and clearing land for _______.",
          correctAnswer: "farming",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q22",
          number: 22,
          type: "sentence_completion",
          question: "22. When islanders could no longer build the _______ they needed for fishing, they ate birds instead.",
          correctAnswer: "canoes",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q23",
          number: 23,
          type: "sentence_completion",
          question: "23. According to Diamond, islanders began using the island's _______ as a food source.",
          correctAnswer: "birds",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q24",
          number: 24,
          type: "sentence_completion",
          question: "24. Diamond claims that transporting the moai required not only many people but also a great deal of _______.",
          correctAnswer: "wood",
          points: 1,
        },
        // ── Q25–26: Choose TWO (presented as separate MC) ─────────
        {
          id: "cam11-ra-t2-s2-q25",
          number: 25,
          type: "multiple_choice",
          question: "25. On what point do Hunt and Lipo disagree with Diamond? (Choose TWO — this is the first answer)",
          options: [
            { label: "A – the period when the moai were created", value: "A" },
            { label: "B – how the moai were transported", value: "B" },
            { label: "C – the impact of the moai on Rapanui society", value: "C" },
            { label: "D – how the moai were carved", value: "D" },
            { label: "E – the origins of the people who made the moai", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. On what point do Hunt and Lipo disagree with Diamond? (Choose TWO — this is the second answer)",
          options: [
            { label: "A – the period when the moai were created", value: "A" },
            { label: "B – how the moai were transported", value: "B" },
            { label: "C – the impact of the moai on Rapanui society", value: "C" },
            { label: "D – how the moai were carved", value: "D" },
            { label: "E – the origins of the people who made the moai", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam11-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Neuroaesthetics",
      passageText: `An emerging discipline called neuroaesthetics is seeking to bring scientific objectivity to the study of art, and has already given us a better understanding of many masterpieces. The blurred imagery of Impressionist paintings seems to stimulate the brain's amygdala, for instance. Since the amygdala plays a crucial role in our feelings, that finding might explain why many people find these pieces so moving.

Could the same approach also shed light on abstract twentieth-century pieces, from Mondrian's geometrical blocks of colour, to Pollock's seemingly haphazard arrangements of splashed paint on canvas? Sceptics believe that people claim to like such works simply because they are famous. We certainly do have an inclination to follow the crowd. When asked to make simple perceptual decisions such as matching a shape to its rotated image, for example, people often choose a definitively wrong answer if they see others doing the same. It is easy to imagine that this mentality would have even more impact on a fuzzy concept like art appreciation, where there is no right or wrong answer.

Angelina Hawley-Dolan, of Boston College, Massachusetts, responded to this debate by asking volunteers to view pairs of paintings – either the creations of famous abstract artists or the doodles of infants, chimps and elephants. They then had to judge which they preferred. A third of the paintings were given no captions, while many were labelled incorrectly – volunteers might think they were viewing a chimp's messy brushstrokes when they were actually seeing an acclaimed masterpiece. In each set of trials, volunteers generally preferred the work of renowned artists, even when they believed it was by an animal or a child. It seems that the viewer can sense the artist's vision in paintings, even if they can't explain why.

Robert Pepperell, an artist based at Cardiff University, creates ambiguous works that are neither entirely abstract nor clearly representational. In one study, Pepperell and his collaborators asked volunteers to decide how 'powerful' they considered an artwork to be, and whether they saw anything familiar in the piece. The longer they took to answer these questions, the more highly they rated the piece under scrutiny, and the greater their neural activity. It would seem that the brain sees these images as puzzles, and the harder it is to decipher the meaning, the more rewarding is the moment of recognition.

And what about artists such as Mondrian, whose paintings consist exclusively of horizontal and vertical lines encasing blocks of colour? Mondrian's works are deceptively simple, but eye-tracking studies confirm that they are meticulously composed, and that simply rotating a piece radically changes the way we view it. With the originals, volunteers' eyes tended to stay longer on certain places in the image, but with the altered versions they would flit across a piece more rapidly. As a result, the volunteers considered the altered versions less pleasurable when they later rated the work.

In a similar study, Oshin Vartanian of Toronto University asked volunteers to compare original paintings with ones which he had altered by moving objects around within the frame. He found that almost everyone preferred the original, whether it was a Van Gogh still life or an abstract by Miro. Vartanian also found that changing the composition of the paintings reduced activation in those brain areas linked with meaning and interpretation.

In another experiment, Alex Forsythe of the University of Liverpool analysed the visual intricacy of different pieces of art, and her results suggest that many artists use a key level of detail to please the brain. Too little and the work is boring, but too much results in a kind of 'perceptual overload', according to Forsythe. What's more, appealing pieces both abstract and representational, show signs of 'fractals' – repeated motifs recurring in different scales. Fractals are common throughout nature, for example in the shapes of mountain peaks or the branches of trees. It is possible that our visual system, which evolved in the great outdoors, finds it easier to process such patterns.

It is also intriguing that the brain appears to process movement when we see a handwritten letter, as if we are replaying the writer's moment of creation. This has led some to wonder whether Pollock's works feel so dynamic because the brain reconstructs the energetic actions the artist used as he painted. This may be down to our brain's 'mirror neurons', which are known to mimic others' actions. The hypothesis will need to be thoroughly tested, however. It might even be the case that we could use neuroaesthetic studies to understand the longevity of some pieces of artwork. While the fashions of the time might shape what is currently popular, works that are best adapted to our visual system may be the most likely to linger once the trends of previous generations have been forgotten.

It's still early days for the field of neuroaesthetics – and these studies are probably only a taste of what is to come. It would, however, be foolish to reduce art appreciation to a set of scientific laws. We shouldn't underestimate the importance of the style of a particular artist, their place in history and the artistic environment of their time. Abstract art offers both a challenge and the freedom to play with different interpretations. In some ways, it's not so different to science, where we are constantly looking for systems and decoding meaning so that we can view and appreciate the world in a new way.`,
      instructions: `Questions 27–30: Choose the correct letter, A, B, C or D.

Questions 31–33: Complete the summary using the list of words, A–H below.
A interpretation  B complexity  C emotions  D movements  E skill  F layout  G concern  H images

Questions 34–39: Do the following statements agree with the views of the writer? Write YES, NO, or NOT GIVEN.

Question 40: Choose the correct letter, A, B, C or D.`,
      questions: [
        // ── Q27–30: Multiple choice ───────────────────────────────
        {
          id: "cam11-ra-t2-s3-q27",
          number: 27,
          type: "multiple_choice",
          question: "27. In the second paragraph, the writer refers to a shape-matching test in order to illustrate",
          options: [
            { label: "A – the subjective nature of art appreciation", value: "A" },
            { label: "B – the reliance of modern art on abstract forms", value: "B" },
            { label: "C – our tendency to be influenced by the opinions of others", value: "C" },
            { label: "D – a common problem encountered when processing visual data", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. Angelina Hawley-Dolan's findings indicate that people",
          options: [
            { label: "A – mostly favour works of art which they know well", value: "A" },
            { label: "B – hold fixed ideas about what makes a good work of art", value: "B" },
            { label: "C – are often misled by their initial expectations of a work of art", value: "C" },
            { label: "D – have the ability to perceive the intention behind works of art", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. Results of studies involving Robert Pepperell's pieces suggest that people",
          options: [
            { label: "A – can appreciate a painting without fully understanding it", value: "A" },
            { label: "B – find it satisfying to work out what a painting represents", value: "B" },
            { label: "C – vary widely in the time they spend looking at paintings", value: "C" },
            { label: "D – generally prefer representational art to abstract art", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. What do the experiments described in the fifth paragraph suggest about the paintings of Mondrian?",
          options: [
            { label: "A – They are more carefully put together than they appear", value: "A" },
            { label: "B – They can be interpreted in a number of different ways", value: "B" },
            { label: "C – They challenge our assumptions about shape and colour", value: "C" },
            { label: "D – They are easier to appreciate than many other abstract works", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q31–33: Summary completion with word bank ─────────────
        {
          id: "cam11-ra-t2-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. Neurological studies of the brain demonstrate the impact which Impressionist paintings have on our _______. (Choose from word bank A–H)",
          options: [
            { label: "A – interpretation", value: "A" },
            { label: "B – complexity", value: "B" },
            { label: "C – emotions", value: "C" },
            { label: "D – movements", value: "D" },
            { label: "E – skill", value: "E" },
            { label: "F – layout", value: "F" },
            { label: "G – concern", value: "G" },
            { label: "H – images", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q32",
          number: 32,
          type: "multiple_choice",
          question: "32. Alex Forsythe believes many artists give their works the precise degree of _______ which most appeals to the viewer's brain. (Choose from word bank A–H)",
          options: [
            { label: "A – interpretation", value: "A" },
            { label: "B – complexity", value: "B" },
            { label: "C – emotions", value: "C" },
            { label: "D – movements", value: "D" },
            { label: "E – skill", value: "E" },
            { label: "F – layout", value: "F" },
            { label: "G – concern", value: "G" },
            { label: "H – images", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q33",
          number: 33,
          type: "multiple_choice",
          question: "33. She also observes that pleasing works of art often contain certain repeated _______ which occur frequently in the natural world. (Choose from word bank A–H)",
          options: [
            { label: "A – interpretation", value: "A" },
            { label: "B – complexity", value: "B" },
            { label: "C – emotions", value: "C" },
            { label: "D – movements", value: "D" },
            { label: "E – skill", value: "E" },
            { label: "F – layout", value: "F" },
            { label: "G – concern", value: "G" },
            { label: "H – images", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        // ── Q34–39: YES / NO / NOT GIVEN ─────────────────────────
        {
          id: "cam11-ra-t2-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. Forsythe's findings contradicted previous beliefs on the function of 'fractals' in art.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. Certain ideas regarding the link between 'mirror neurons' and art appreciation require further verification.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "36. People's taste in paintings depends entirely on the current artistic trends of the period.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Scientists should seek to define the precise rules which govern people's reactions to works of art.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. Art appreciation should always involve taking into consideration the cultural context in which an artist worked.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam11-ra-t2-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. It is easier to find meaning in the field of science than in that of art.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        // ── Q40: Multiple choice ──────────────────────────────────
        {
          id: "cam11-ra-t2-s3-q40",
          number: 40,
          type: "multiple_choice",
          question: "40. What would be the most appropriate subtitle for the article?",
          options: [
            { label: "A – Some scientific insights into how the brain responds to abstract art", value: "A" },
            { label: "B – Recent studies focusing on the neural activity of abstract artists", value: "B" },
            { label: "C – A comparison of the neurological bases of abstract and representational art", value: "C" },
            { label: "D – How brain research has altered public opinion about abstract art", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge11Tests: IELTSTest[] = [cambridge11_reading_t1, cambridge11_reading_t2];
