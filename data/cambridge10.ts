import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 10 – TEST 1  (Academic Reading)
// ============================================================
const cambridge10_reading_t1: IELTSTest = {
  id: "cam10-reading-academic-t1",
  title: "Cambridge IELTS 10 – Test 1",
  bookNumber: 10,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ──────────────────────────────────────────────
    {
      id: "cam10-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Stepwells",
      passageText: `A millennium ago, stepwells were fundamental to life in the driest parts of India. Although many have been neglected, recent restoration has returned them to their former glory. Richard Cox travelled to north-western India to document these spectacular monuments from a bygone era.

During the sixth and seventh centuries, the inhabitants of the modern-day states of Gujarat and Rajasthan in North-western India developed a method of gaining access to clean, fresh groundwater during the dry season for drinking, bathing, watering animals and irrigation. However, the significance of this invention – the stepwell – goes beyond its utilitarian application.

Unique to the region, stepwells are often architecturally complex and vary widely in size and shape. During their heyday, they were places of gathering, of leisure, of relaxation and of worship for villagers of all but the lowest castes. Most stepwells are found dotted around the desert areas of Gujarat (where they are called vav) and Rajasthan (where they are known as baori), while a few also survive in Delhi. Some were located in or near villages as public spaces for the community; others were positioned beside roads as resting places for travellers.

As their name suggests, stepwells comprise a series of stone steps descending from ground level to the water source (normally an underground aquifer) as it recedes following the rains. When the water level was high, the user needed only to descend a few steps to reach it; when it was low, several levels would have to be negotiated.

Some wells are vast, open craters with hundreds of steps paving each sloping side, often in tiers. Others are more elaborate, with long stepped passages leading to the water via several storeys built from stone and supported by pillars; they also included pavilions that sheltered visitors from the relentless heat. But perhaps the most impressive features are the intricate decorative sculptures that embellish many stepwells, showing activities from fighting and dancing to everyday acts such as women combing their hair and churning butter.

Down the centuries, thousands of wells were constructed throughout northwestern India, but the majority have now fallen into disuse; many are derelict and dry, as groundwater has been diverted for industrial use and the wells no longer reach the water table. Their condition hasn't been helped by recent dry spells: southern Rajasthan suffered an eight-year drought between 1996 and 2004.

However, some important sites in Gujarat have recently undergone major restoration, and the state government announced in June last year that it plans to restore the stepwells throughout the state.

In Patan, the state's ancient capital, the stepwell of Rani Ki Vav (Queen's Stepwell) is perhaps the finest current example. It was built by Queen Udayamati during the late 11th century, but became silted up following a flood during the 13th century. The Archaeological Survey of India began restoring it in the 1960s, and today it's in pristine condition. At 65 metres long, 20 metres wide and 27 metres deep, Rani Ki Vav features 500 distinct sculptures carved into niches throughout the monument, depicting gods such as Vishnu and Parvati in various incarnations. Incredibly, in January 2001, this ancient structure survived a devastating earthquake that measured 7.6 on the Richter scale.

Another example is the Surya Kund in Modhera, northern Gujarat, next to the Sun Temple, built by King Bhima I in 1026 to honour the sun god Surya. It's actually a tank (kund means reservoir or pond) rather than a well, but displays the hallmarks of stepwell architecture, including four sides of steps that descend to the bottom in a stunning geometrical formation. The terraces house 108 small, intricately carved shrines between the sets of steps.

Rajasthan also has a wealth of wells. The ancient city of Bundi, 200 kilometres south of Jaipur, is renowned for its architecture, including its stepwells. One of the larger examples is Raniji Ki Baori, which was built by the queen of the region, Nathavatji, in 1699. At 46 metres deep, 20 metres wide and 40 metres long, the intricately carved monument is one of 21 baoris commissioned in the Bundi area by Nathavatji.

In the old ruined town of Abhaneri, about 95 kilometres east of Jaipur, is Chand Baori, one of India's oldest and deepest wells; aesthetically, it's perhaps one of the most dramatic. Built in around 850 AD next to the temple of Harshat Mata, the baori comprises hundreds of zigzagging steps that run along three of its sides, steeply descending 11 storeys, resulting in a striking geometric pattern when seen from afar. On the fourth side, covered verandas supported by ornate pillars overlook the steps.

Still in public use is Neemrana Ki Baori, located just off the Jaipur–Delhi highway. Constructed in around 1700, it's nine storeys deep, with the last two levels underwater. At ground level, there are 86 colonnaded openings from where the visitor descends 170 steps to the deepest water source.

Today, following years of neglect, many of these monuments to medieval engineering have been saved by the Archaeological Survey of India, which has recognised the importance of preserving them as part of the country's rich history. Tourists flock to wells in far-flung corners of northwestern India to gaze in wonder at these architectural marvels from 1,000 years ago, which serve as a reminder of both the ingenuity and artistry of ancient civilisations and of the value of water to human existence.`,
      instructions: "Questions 1–5: Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.\n\nQuestions 6–8: Answer the questions below. Choose ONE WORD ONLY from the passage.\n\nQuestions 9–13: Complete the table below. Choose ONE WORD AND/OR A NUMBER from the passage.",
      questions: [
        // ── Q1–5: True / False / Not Given ──────────────────────
        {
          id: "cam10-ra-t1-s1-q1",
          number: 1,
          type: "true_false_ng",
          question: "Examples of ancient stepwells can be found all over the world.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "Stepwells had a range of functions, in addition to those related to water collection.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "The few existing stepwells in Delhi are more attractive than those found elsewhere.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "It took workers many years to build the stone steps characteristic of stepwells.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "The number of steps above the water level in a stepwell altered during the course of a year.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q6–8: One word from passage ──────────────────────────
        {
          id: "cam10-ra-t1-s1-q6",
          number: 6,
          type: "fill_blank",
          question: "Which part of some stepwells provided shade for people?",
          correctAnswer: "pavilions",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q7",
          number: 7,
          type: "fill_blank",
          question: "What type of serious climatic event, which took place in southern Rajasthan, is mentioned in the article?",
          correctAnswer: "drought",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q8",
          number: 8,
          type: "fill_blank",
          question: "Who are frequent visitors to stepwells nowadays?",
          correctAnswer: "tourists",
          points: 1,
        },
        // ── Q9–13: Table completion ───────────────────────────────
        {
          id: "cam10-ra-t1-s1-q9",
          number: 9,
          type: "table_completion",
          question: "Rani Ki Vav – Other notes: Excellent condition, despite the ________ of 2001.",
          correctAnswer: "earthquake",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q10",
          number: 10,
          type: "table_completion",
          question: "Surya Kund – Features: Steps on the ________ produce a geometric pattern.",
          correctAnswer: "four/4",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q11",
          number: 11,
          type: "table_completion",
          question: "Surya Kund – Other notes: Looks more like a ________ than a well.",
          correctAnswer: "tank",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q12",
          number: 12,
          type: "table_completion",
          question: "Chand Baori – Other notes: Has ________ which provide a view to the steps.",
          correctAnswer: "verandas",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s1-q13",
          number: 13,
          type: "table_completion",
          question: "Neemrana Ki Baori – Features: Has two ________ levels.",
          correctAnswer: "underwater",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ──────────────────────────────────────────────
    {
      id: "cam10-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "European Transport Systems 1990–2010",
      passageText: `What have been the trends and what are the prospects for European transport systems?

A
It is difficult to conceive of vigorous economic growth without an efficient transport system. Although modern information technologies can reduce the demand for physical transport by facilitating teleworking and teleservices, the requirement for transport continues to increase. There are two key factors behind this trend. For passenger transport, the determining factor is the spectacular growth in car use. The number of cars on European Union (EU) roads saw an increase of three million cars each year from 1990 to 2010, and in the next decade the EU will see a further substantial increase in its fleet.

B
As far as goods transport is concerned, growth is due to a large extent to changes in the European economy and its system of production. In the last 20 years, as internal frontiers have been abolished, the EU has moved from a 'stock' economy to a 'flow' economy. This phenomenon has been emphasised by the relocation of some industries, particularly those which are labour intensive, to reduce production costs, even though the production site is hundreds or even thousands of kilometres away from the final assembly plant or away from users.

C
The strong economic growth expected in countries which are candidates for entry to the EU will also increase transport flows, in particular road haulage traffic. In 1998, some of these countries already exported more than twice their 1990 volumes and imported more than five times their 1990 volumes. And although many candidate countries inherited a transport system which encourages rail, the distribution between modes has tipped sharply in favour of road transport since the 1990s. Between 1990 and 1998, road haulage increased by 19.4%, while during the same period rail haulage decreased by 43.5%, although – and this could benefit the enlarged EU – it is still on average at a much higher level than in existing member states.

D
However, a new imperative – sustainable development – offers an opportunity for adapting the EU's common transport policy. This objective, agreed by the Gothenburg European Council, has to be achieved by integrating environmental considerations into Community policies, and shifting the balance between modes of transport lies at the heart of its strategy. The ambitious objective can only be fully achieved by 2020, but proposed measures are nonetheless a first essential step towards a sustainable transport system which will ideally be in place in 30 years' time, that is by 2040.

E
In 1998, energy consumption in the transport sector was to blame for 28% of emissions of CO2, the leading greenhouse gas. According to the latest estimates, if nothing is done to reverse the traffic growth trend, CO2 emissions from transport can be expected to increase by around 50% to 1,113 billion tonnes by 2020, compared with the 739 billion tonnes recorded in 1990. Once again, road transport is the main culprit since it alone accounts for 84% of the CO2 emissions attributable to transport. Using alternative fuels and improving energy efficiency is thus both an ecological necessity and a technological challenge.

F
At the same time greater efforts must be made to achieve a modal shift. Such a change cannot be achieved overnight, all the less so after over half a century of constant deterioration in favour of road. This has reached such a pitch that today rail freight services are facing marginalisation, with just 8% of market share, and with international goods trains struggling along at an average speed of 18km/h. Three possible options have emerged.

G
The first approach would consist of focusing on road transport solely through pricing. This option would not be accompanied by complementary measures in the other modes of transport. In the short term it might curb the growth in road transport through the better loading ratio of goods vehicles and occupancy rates of passenger vehicles expected as a result of the increase in the price of transport. However, the lack of measures available to revitalise other modes of transport would make it impossible for more sustainable modes of transport to take up the baton.

H
The second approach also concentrates on road transport pricing but is accompanied by measures to increase the efficiency of the other modes (better quality of services, logistics, technology). However, this approach does not include investment in new infrastructure, nor does it guarantee better regional cohesion. It could help to achieve greater uncoupling than the first approach, but road transport would keep the lion's share of the market and continue to concentrate on saturated arteries, despite being the most polluting of the modes. It is therefore not enough to guarantee the necessary shift of the balance.

I
The third approach, which is not new, comprises a series of measures ranging from pricing to revitalising alternative modes of transport and targeting investment in the trans-European network. This integrated approach would allow the market shares of the other modes to return to their 1998 levels and thus make a shift of balance. It is far more ambitious than it looks, bearing in mind the historical imbalance in favour of roads for the last fifty years, but would achieve a marked break in the link between road transport growth and economic growth, without placing restrictions on the mobility of people and goods.`,
      instructions: "Questions 14–21: Reading Passage 2 has nine paragraphs, A–I. Choose the correct heading for paragraphs A–E and G–I from the list of headings below. Write the correct number, i–xi, in boxes 14–21 on your answer sheet.\n\nQuestions 22–26: Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.",
      questions: [
        // ── Q14–21: Matching Headings ────────────────────────────
        {
          id: "cam10-ra-t1-s2-q14",
          number: 14,
          type: "matching",
          question: "Paragraph A",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "Paragraph B",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "Paragraph C",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "xi",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "Paragraph D",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "Paragraph E",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q19",
          number: 19,
          type: "matching",
          question: "Paragraph G",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "x",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q20",
          number: 20,
          type: "matching",
          question: "Paragraph H",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q21",
          number: 21,
          type: "matching",
          question: "Paragraph I",
          options: [
            { label: "i – A fresh and important long-term goal", value: "i" },
            { label: "ii – Charging for roads and improving other transport methods", value: "ii" },
            { label: "iii – Changes affecting the distances goods may be transported", value: "iii" },
            { label: "iv – Taking all the steps necessary to change transport patterns", value: "iv" },
            { label: "v – The environmental costs of road transport", value: "v" },
            { label: "vi – The escalating cost of rail transport", value: "vi" },
            { label: "vii – The need to achieve transport rebalance", value: "vii" },
            { label: "viii – The rapid growth of private transport", value: "viii" },
            { label: "ix – Plans to develop major road networks", value: "ix" },
            { label: "x – Restricting road use through charging policies alone", value: "x" },
            { label: "xi – Transport trends in countries awaiting EU admission", value: "xi" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        // ── Q22–26: TRUE / FALSE / NOT GIVEN ────────────────────
        {
          id: "cam10-ra-t1-s2-q22",
          number: 22,
          type: "true_false_ng",
          question: "The need for transport is growing, despite technological developments.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q23",
          number: 23,
          type: "true_false_ng",
          question: "To reduce production costs, some industries have been moved closer to their relevant consumers.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q24",
          number: 24,
          type: "true_false_ng",
          question: "Cars are prohibitively expensive in some EU candidate countries.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q25",
          number: 25,
          type: "true_false_ng",
          question: "The Gothenburg European Council was set up 30 years ago.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s2-q26",
          number: 26,
          type: "true_false_ng",
          question: "By the end of this decade, CO2 emissions from transport are predicted to reach 739 billion tonnes.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ──────────────────────────────────────────────
    {
      id: "cam10-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The Psychology of Innovation",
      passageText: `Why are so few companies truly innovative?

Innovation is key to business survival, and companies put substantial resources into inspiring employees to develop new ideas. There are, nevertheless, people working in luxurious, state-of-the-art centres designed to stimulate innovation who find that their environment doesn't make them feel at all creative. And there are those who don't have a budget, or much space, but who innovate successfully.

For Robert B. Cialdini, Professor of Psychology at Arizona State University, one reason that companies don't succeed as often as they should is that innovation starts with recruitment. Research shows that the fit between an employee's values and a company's values makes a difference to what contribution they make and whether, two years after they join, they're still at the company. Studies at Harvard Business School show that, although some individuals may be more creative than others, almost every individual can be creative in the right circumstances.

One of the most famous photographs in the story of rock'n'roll emphasises Cialdini's views. The 1956 picture of singers Elvis Presley, Carl Perkins, Johnny Cash and Jerry Lee Lewis jamming at a piano in Sun Studios in Memphis tells a hidden story. Sun's 'million-dollar quartet' could have been a quintet. Missing from the picture is Roy Orbison, a greater natural singer than Lewis, Perkins or Cash. Sam Phillips, who owned Sun, wanted to revolutionise popular music with songs that fused black and white music, and country and blues. Presley, Cash, Perkins and Lewis instinctively understood Phillips's ambition and believed in it. Orbison wasn't inspired by the goal, and only ever achieved one hit with the Sun label.

The value fit matters, says Cialdini, because innovation is, in part, a process of change, and under that pressure we, as a species, behave differently. 'When things change, we are hard-wired to play it safe.' Managers should therefore adopt an approach that appears counterintuitive – they should explain what stands to be lost if the company fails to seize a particular opportunity. Studies show that we invariably take more gambles when threatened with a loss than when offered a reward.

Managing innovation is a delicate art. It's easy for a company to be pulled in conflicting directions as the marketing, product development, and finance departments each get different feedback from different sets of people. And without a system which ensures collaborative exchanges within the company, it's also easy for small 'pockets of innovation' to disappear. Innovation is a contact sport. You can't brief people just by saying, 'We're going in this direction and I'm going to take you with me.'

Cialdini believes that this 'follow-the-leader syndrome' is dangerous, not least because it encourages bosses to go it alone. 'It's been scientifically proven that three people will be better than one at solving problems, even if that one person is the smartest person in the field.' To prove his point, Cialdini cites an interview with molecular biologist James Watson. Watson, together with Francis Crick, discovered the structure of DNA, the genetic information carrier of all living organisms. 'When asked how they had cracked the code ahead of an array of highly accomplished rival investigators, he said something that stunned me. He said he and Crick had succeeded because they were aware that they weren't the most intelligent of the scientists pursuing the answer. The smartest scientist was called Rosalind Franklin who, Watson said, "was so intelligent she rarely sought advice".'

Teamwork taps into one of the basic drivers of human behaviour. 'The principle of social proof is so pervasive that we don't even recognise it,' says Cialdini. 'If your project is being resisted, for example, by a group of veteran employees, ask another old-timer to speak up for it.' Cialdini is not alone in advocating this strategy. Research shows that peer power, used horizontally not vertically, is much more powerful than any boss's speech.

Writing, visualising and prototyping can stimulate the flow of new ideas. Cialdini cites scores of research papers and historical events that prove that even something as simple as writing deepens every individual's engagement in the project. It is, he says, the reason why all those competitions on breakfast cereal packets encouraged us to write in saying, in no more than 10 words: 'I like Kellogg's Corn Flakes because… .' The very act of writing makes us more likely to believe it.

Authority doesn't have to inhibit innovation but it often does. The wrong kind of leadership will lead to what Cialdini calls 'captainitis, the regrettable tendency of team members to opt out of team responsibilities that are properly theirs'. He calls it captainitis because, he says, 'crew members of multipilot aircraft exhibit a sometimes deadly passivity when the flight captain makes a clearly wrong-headed decision'. This behaviour is not, he says, unique to air travel, but can happen in any workplace where the leader is overbearing.

At the other end of the scale is the 1980s Memphis design collective, a group of young designers for whom 'the only rule was that there were no rules'. This environment encouraged a free interchange of ideas, which led to more creativity with form, function, colour and materials that revolutionised attitudes to furniture design.

Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due. Cialdini says: 'Leaders should encourage everyone to contribute and simultaneously assure all concerned that every recommendation is important to making the right decision and will be given full attention.' The frustrating thing about innovation is that there are many approaches, but no magic formula. However, a manager who wants to create a truly innovative culture can make their job a lot easier by recognising these psychological realities.`,
      instructions: "Questions 27–30: Choose the correct letter, A, B, C or D.\n\nQuestions 31–35: Complete each sentence with the correct ending, A–G, below.\n\nQuestions 36–40: Do the following statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.",
      questions: [
        // ── Q27–30: Multiple Choice ───────────────────────────────
        {
          id: "cam10-ra-t1-s3-q27",
          number: 27,
          type: "multiple_choice",
          question: "The example of the 'million-dollar quartet' underlines the writer's point about",
          options: [
            { label: "A – recognising talent.", value: "A" },
            { label: "B – working as a team.", value: "B" },
            { label: "C – having a shared objective.", value: "C" },
            { label: "D – being an effective leader.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "James Watson suggests that he and Francis Crick won the race to discover the DNA code because they",
          options: [
            { label: "A – were conscious of their own limitations.", value: "A" },
            { label: "B – brought complementary skills to their partnership.", value: "B" },
            { label: "C – were determined to outperform their brighter rivals.", value: "C" },
            { label: "D – encouraged each other to realise their joint ambition.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "The writer mentions competitions on breakfast cereal packets as an example of how to",
          options: [
            { label: "A – inspire creative thinking.", value: "A" },
            { label: "B – generate concise writing.", value: "B" },
            { label: "C – promote loyalty to a group.", value: "C" },
            { label: "D – strengthen commitment to an idea.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "In the last paragraph, the writer suggests that it is important for employees to",
          options: [
            { label: "A – be aware of their company's goals.", value: "A" },
            { label: "B – feel that their contributions are valued.", value: "B" },
            { label: "C – have respect for their co-workers' achievements.", value: "C" },
            { label: "D – understand why certain management decisions are made.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q31–35: Sentence Completion ──────────────────────────
        {
          id: "cam10-ra-t1-s3-q31",
          number: 31,
          type: "matching",
          question: "Employees whose values match those of their employers are more likely to …",
          options: [
            { label: "A – take chances.", value: "A" },
            { label: "B – share their ideas.", value: "B" },
            { label: "C – become competitive.", value: "C" },
            { label: "D – get promotion.", value: "D" },
            { label: "E – avoid risk.", value: "E" },
            { label: "F – ignore their duties.", value: "F" },
            { label: "G – remain in their jobs.", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "At times of change, people tend to …",
          options: [
            { label: "A – take chances.", value: "A" },
            { label: "B – share their ideas.", value: "B" },
            { label: "C – become competitive.", value: "C" },
            { label: "D – get promotion.", value: "D" },
            { label: "E – avoid risk.", value: "E" },
            { label: "F – ignore their duties.", value: "F" },
            { label: "G – remain in their jobs.", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "If people are aware of what they might lose, they will often …",
          options: [
            { label: "A – take chances.", value: "A" },
            { label: "B – share their ideas.", value: "B" },
            { label: "C – become competitive.", value: "C" },
            { label: "D – get promotion.", value: "D" },
            { label: "E – avoid risk.", value: "E" },
            { label: "F – ignore their duties.", value: "F" },
            { label: "G – remain in their jobs.", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "People working under a dominant boss are liable to …",
          options: [
            { label: "A – take chances.", value: "A" },
            { label: "B – share their ideas.", value: "B" },
            { label: "C – become competitive.", value: "C" },
            { label: "D – get promotion.", value: "D" },
            { label: "E – avoid risk.", value: "E" },
            { label: "F – ignore their duties.", value: "F" },
            { label: "G – remain in their jobs.", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q35",
          number: 35,
          type: "matching",
          question: "Employees working in organisations with few rules are more likely to …",
          options: [
            { label: "A – take chances.", value: "A" },
            { label: "B – share their ideas.", value: "B" },
            { label: "C – become competitive.", value: "C" },
            { label: "D – get promotion.", value: "D" },
            { label: "E – avoid risk.", value: "E" },
            { label: "F – ignore their duties.", value: "F" },
            { label: "G – remain in their jobs.", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q36–40: YES / NO / NOT GIVEN ─────────────────────────
        {
          id: "cam10-ra-t1-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "The physical surroundings in which a person works play a key role in determining their creativity.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "Most people have the potential to be creative.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "Teams work best when their members are of equally matched intelligence.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "It is easier for smaller companies to be innovative.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "A manager's approval of an idea is more persuasive than that of a colleague.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 10 – TESTS 2, 3, 4  (placeholders)
// ============================================================
const cambridge10_reading_t2: IELTSTest = {
  id: "cam10-reading-academic-t2",
  title: "Cambridge IELTS 10 – Test 2",
  bookNumber: 10,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [],
};

const cambridge10_reading_t3: IELTSTest = {
  id: "cam10-reading-academic-t3",
  title: "Cambridge IELTS 10 – Test 3",
  bookNumber: 10,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [],
};

const cambridge10_reading_t4: IELTSTest = {
  id: "cam10-reading-academic-t4",
  title: "Cambridge IELTS 10 – Test 4",
  bookNumber: 10,
  testNumber: 4,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [],
};

export const cambridge10Tests: IELTSTest[] = [
  cambridge10_reading_t1,
  cambridge10_reading_t2,
  cambridge10_reading_t3,
  cambridge10_reading_t4,
];
