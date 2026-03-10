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
  sections: [
    // ── PASSAGE 1 ──────────────────────────────────────────────
    {
      id: "cam10-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Tea and the Industrial Revolution",
      passageText: `A  Alan Macfarlane, professor of anthropological science at King's College, Cambridge has, like other historians, spent decades wrestling with the enigma of the Industrial Revolution. Why did this particular Big Bang – the world-changing birth of industry – happen in Britain? And why did it strike at the end of the 18th century?

B  Macfarlane compares the puzzle to a combination lock. 'There are about 20 different factors and all of them need to be present before the revolution can happen,' he says. For industry to take off, there needs to be the technology and power to drive factories, large urban populations to provide cheap labour, easy transport to move goods around, an affluent middle-class willing to buy mass-produced objects, a market-driven economy and a political system that allows this to happen. While this was the case for England, other nations, such as Japan, the Netherlands and France also met some of these criteria but were not industrialising. All these factors must have been necessary. But not sufficient to cause the revolution, says Macfarlane. 'After all, Holland had everything except coal while China also had many of these factors. Most historians are convinced there are one or two missing factors that you need to open the lock.'

C  The missing factors, he proposes, are to be found in almost every kitchen cupboard. Tea and beer, two of the nation's favourite drinks, fuelled the revolution. The antiseptic properties of tannin, the active ingredient in tea, and of hops in beer – plus the fact that both are made with boiled water – allowed urban communities to flourish at close quarters without succumbing to water-borne diseases such as dysentery. The theory sounds eccentric but once he starts to explain the detective work that went into his deduction, the scepticism gives way to wary admiration. Macfarlane's case has been strengthened by support from notable quarters – Roy Porter, the distinguished medical historian, recently wrote a favourable appraisal of his research.

D  Macfarlane had wondered for a long time how the Industrial Revolution came about. Historians had alighted on one interesting factor around the mid-18th century that required explanation. Between about 1650 and 1740, the population in Britain was static. But then there was a burst in population growth. Macfarlane says: 'The infant mortality rate halved in the space of 20 years, and this happened in both rural areas and cities, and across all classes. People suggested four possible causes. Was there a sudden change in the viruses and bacteria around? Unlikely. Was there a revolution in medical science? But this was a century before Lister's revolution. Was there a change in environmental conditions? There were improvements in agriculture that wiped out malaria, but these were small gains. Sanitation did not become widespread until the 19th century. The only option left is food. But the height and weight statistics show a decline. So the food must have got worse. Efforts to explain this sudden reduction in child deaths appeared to draw a blank.'

E  This population burst seemed to happen at just the right time to provide labour for the Industrial Revolution. 'When you start moving towards an industrial revolution, it is economically efficient to have people living close together,' says Macfarlane. 'But then you get disease, particularly from human waste.' Some digging around in historical records revealed that there was a change in the incidence of water-borne disease at that time, especially dysentery. Macfarlane deduced that whatever the British were drinking must have been important in regulating disease. He says, 'We drank beer. For a long time, the English were protected by the strong antibacterial agent in hops, which were added to help preserve the beer. But in the late 17th century a tax was introduced on malt, the basic ingredient of beer. The poor turned to water and gin and in the 1720s the mortality rate began to rise again. Then it suddenly dropped again. What caused this?'

F  Macfarlane looked to Japan, which was also developing large cities about the same time, and also had no sanitation. Water-borne diseases had a much looser grip on the Japanese population than those in Britain. Could it be the prevalence of tea in their culture? Macfarlane then noted that the history of tea in Britain provided an extraordinary coincidence of dates. Tea was relatively expensive until Britain started a direct clipper trade with China in the early 18th century. By the 1740s, about the time that infant mortality was dipping, the drink was common. Macfarlane guessed that the fact that water had to be boiled, together with the stomach-purifying properties of tea meant that the breast milk provided by mothers was healthier than it had ever been. No other European nation sipped tea like the British, which, by Macfarlane's logic, pushed these other countries out of contention for the revolution.

G  But, if tea is a factor in the combination lock, why didn't Japan forge ahead in a tea-soaked industrial revolution of its own? Macfarlane notes that even though 17th-century Japan had large cities, high literacy rates, even a futures market, it had turned its back on the essence of any work-based revolution by giving up labour-saving devices such as animals, afraid that they would put people out of work. So, the nation that we now think of as one of the most technologically advanced entered the 19th century having 'abandoned the wheel'.`,
      instructions: "Questions 1–7: Reading Passage 1 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.\n\nQuestions 8–13: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.",
      questions: [
        // ── Q1–7: Paragraph Headings ─────────────────────────────
        {
          id: "cam10-ra-t2-s1-q1",
          number: 1,
          type: "matching",
          question: "Paragraph A",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q2",
          number: 2,
          type: "matching",
          question: "Paragraph B",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q3",
          number: 3,
          type: "matching",
          question: "Paragraph C",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q4",
          number: 4,
          type: "matching",
          question: "Paragraph D",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q5",
          number: 5,
          type: "matching",
          question: "Paragraph E",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q6",
          number: 6,
          type: "matching",
          question: "Paragraph F",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "ix",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q7",
          number: 7,
          type: "matching",
          question: "Paragraph G",
          options: [
            { label: "i – The search for the reasons for an increase in population", value: "i" },
            { label: "ii – Industrialisation and the fear of unemployment", value: "ii" },
            { label: "iii – The development of cities in Japan", value: "iii" },
            { label: "iv – The time and place of the Industrial Revolution", value: "iv" },
            { label: "v – The cases of Holland, France and China", value: "v" },
            { label: "vi – Changes in drinking habits in Britain", value: "vi" },
            { label: "vii – Two keys to Britain's industrial revolution", value: "vii" },
            { label: "viii – Conditions required for industrialisation", value: "viii" },
            { label: "ix – Comparisons with Japan lead to the answer", value: "ix" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        // ── Q8–13: True / False / Not Given ─────────────────────
        {
          id: "cam10-ra-t2-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "China's transport system was not suitable for industry in the 18th century.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "Tea and beer both helped to prevent dysentery in Britain.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "Roy Porter disagrees with Professor Macfarlane's findings.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "After 1740, there was a reduction in population in Britain.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "People in Britain used to make beer at home.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "The tax on malt indirectly caused a rise in the death rate.",
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

    // ── PASSAGE 2 ──────────────────────────────────────────────
    {
      id: "cam10-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Gifted children and learning",
      passageText: `A  Internationally, 'giftedness' is most frequently determined by a score on a general intelligence test, known as an IQ test, which is above a chosen cutoff point, usually at around the top 2-5%. Children's educational environment contributes to the IQ score and the way intelligence is used. For example, a very close positive relationship was found when children's IQ scores were compared with their home educational provision (Freeman, 2010). The higher the children's IQ scores, especially over IQ 130, the better the quality of their educational backup, measured in terms of reported verbal interactions with parents, number of books and activities in their home etc. Because IQ tests are decidedly influenced by what the child has learned, they are to some extent measures of current achievement based on age-norms; that is, how well the children have learned to manipulate their knowledge and know-how within the terms of the test. The vocabulary aspect, for example, is dependent on having heard those words. But IQ tests can neither identify the processes of learning and thinking nor predict creativity.

B  Excellence does not emerge without appropriate help. To reach an exceptionally high standard in any area very able children need the means to learn, which includes material to work with and focused challenging tuition – and the encouragement to follow their dream. There appears to be a qualitative difference in the way the intellectually highly able think, compared with more average-ability or older pupils, for whom external regulation by the teacher often compensates for lack of internal regulation. To be at their most effective in their self-regulation, all children can be helped to identify their own ways of learning – metacognition – which will include strategies of planning, monitoring, evaluation, and choice of what to learn. Emotional awareness is also part of metacognition, so children should be helped to be aware of their feelings around the area to be learned, feelings of curiosity or confidence, for example.

C  High achievers have been found to use self-regulatory learning strategies more often and more effectively than lower achievers, and are better able to transfer these strategies to deal with unfamiliar tasks. This happens to such a high degree in some children that they appear to be demonstrating talent in particular areas. Overviewing research on the thinking process of highly able children, Shore and Kanevsky (1993) put the instructor's problem succinctly: 'If they [the gifted] merely think more quickly, then we need only teach more quickly. If they merely make fewer errors, then we can shorten the practice.' But of course, this is not entirely the case; adjustments have to be made in methods of learning and teaching, to take account of the many ways individuals think.

D  Yet in order to learn by themselves, the gifted do need some support from their teachers. Conversely, teachers who have a tendency to 'overdirect' can diminish their gifted pupils' learning autonomy. Although 'spoon-feeding' can produce extremely high examination results, these are not always followed by equally impressive life successes. Too much dependence on the teachers risks loss of autonomy and motivation to discover. However, when teachers encourage pupils to reflect on their own learning and thinking activities, they increase their pupils' self-regulation. For a young child, it may be just the simple question 'What have you learned today?' which helps them to recognise what they are doing. Given that a fundamental goal of education is to transfer the control of learning from teachers to pupils, improving pupils' learning to learn techniques should be a major outcome of the school experience, especially for the highly competent. There are quite a number of new methods which can help, such as child-initiated learning, ability-peer tutoring, etc. Such practices have been found to be particularly useful for bright children from deprived areas.

E  But scientific progress is not all theoretical; knowledge is also vital to outstanding performance: individuals who know a great deal about a specific domain will achieve at a higher level than those who do not (Elshout, 1995). Research with creative scientists by Simonton (1988) brought him to the conclusion that above a certain high level, characteristics such as independence seemed to contribute more to reaching the highest levels of expertise than intellectual skills, due to the great demands of effort and time needed for learning and practice. Creativity in all forms can be seen as expertise mixed with a high level of motivation (Weisberg, 1993).

F  To sum up, learning is affected by emotions of both the individual and significant others. Positive emotions facilitate the creative aspects of learning and negative emotions inhibit it. Fear, for example, can limit the development of curiosity, which is a strong force in scientific advance, because it motivates problem-solving behaviour. In Boekaerts' (1991) review of emotion in the learning of very high IQ and highly achieving children, she found emotional forces in harness. They were not only curious, but often had a strong desire to control their environment, improve their learning efficiency and increase their own learning resources.`,
      instructions: "Questions 14–17: Which paragraph contains the following information? Write the correct letter, A–F.\n\nQuestions 18–22: Match each statement with the correct person or people, A–E.\n\nQuestions 23–26: Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage.",
      questions: [
        // ── Q14–17: Which paragraph ──────────────────────────────
        {
          id: "cam10-ra-t2-s2-q14",
          number: 14,
          type: "matching",
          question: "a reference to the influence of the domestic background on the gifted child",
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
          id: "cam10-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "reference to what can be lost if learners are given too much guidance",
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
          id: "cam10-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "a reference to the damaging effects of anxiety",
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
          id: "cam10-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "examples of classroom techniques which favour socially-disadvantaged children",
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
        // ── Q18–22: People matching ───────────────────────────────
        {
          id: "cam10-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "Less time can be spent on exercises with gifted pupils who produce accurate work.",
          options: [
            { label: "A – Freeman", value: "A" },
            { label: "B – Shore and Kanevsky", value: "B" },
            { label: "C – Elshout", value: "C" },
            { label: "D – Simonton", value: "D" },
            { label: "E – Boekaerts", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q19",
          number: 19,
          type: "matching",
          question: "Self-reliance is a valuable tool that helps gifted students reach their goals.",
          options: [
            { label: "A – Freeman", value: "A" },
            { label: "B – Shore and Kanevsky", value: "B" },
            { label: "C – Elshout", value: "C" },
            { label: "D – Simonton", value: "D" },
            { label: "E – Boekaerts", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "Gifted children know how to channel their feelings to assist their learning.",
          options: [
            { label: "A – Freeman", value: "A" },
            { label: "B – Shore and Kanevsky", value: "B" },
            { label: "C – Elshout", value: "C" },
            { label: "D – Simonton", value: "D" },
            { label: "E – Boekaerts", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q21",
          number: 21,
          type: "matching",
          question: "The very gifted child benefits from appropriate support from close relatives.",
          options: [
            { label: "A – Freeman", value: "A" },
            { label: "B – Shore and Kanevsky", value: "B" },
            { label: "C – Elshout", value: "C" },
            { label: "D – Simonton", value: "D" },
            { label: "E – Boekaerts", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q22",
          number: 22,
          type: "matching",
          question: "Really successful students have learnt a considerable amount about their subject.",
          options: [
            { label: "A – Freeman", value: "A" },
            { label: "B – Shore and Kanevsky", value: "B" },
            { label: "C – Elshout", value: "C" },
            { label: "D – Simonton", value: "D" },
            { label: "E – Boekaerts", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q23–26: Sentence Completion ───────────────────────────
        {
          id: "cam10-ra-t2-s2-q23",
          number: 23,
          type: "fill_blank",
          question: "One study found a strong connection between children's IQ and the availability of ________ and ________ at home. (Give TWO words separated by 'and')",
          correctAnswer: "books and activities",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q24",
          number: 24,
          type: "fill_blank",
          question: "Children of average ability seem to need more direction from teachers because they do not have ________.",
          correctAnswer: "internal regulation",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q25",
          number: 25,
          type: "fill_blank",
          question: "Meta-cognition involves children understanding their own learning strategies, as well as developing ________.",
          correctAnswer: "emotional awareness",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s2-q26",
          number: 26,
          type: "fill_blank",
          question: "Teachers who rely on what is known as ________ often produce sets of impressive grades in class tests.",
          correctAnswer: "spoon-feeding",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ──────────────────────────────────────────────
    {
      id: "cam10-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Museums of fine art and their public",
      passageText: `The fact that people go to the Louvre museum in Paris to see the original painting Mona Lisa when they can see a reproduction anywhere leads us to question some assumptions about the role of museums of fine art in today's world.

One of the most famous works of art in the world is Leonardo da Vinci's Mona Lisa. Nearly everyone who goes to see the original will already be familiar with it from reproductions, but they accept that fine art is more rewardingly viewed in its original form. However, if Mona Lisa was a famous novel, few people would bother to go to a museum to read the writer's actual manuscript rather than a printed reproduction. This might be explained by the fact that the novel has evolved precisely because of technological developments that made it possible to print out huge numbers of texts, whereas oil paintings have always been produced as unique objects. In addition, it could be argued that the practice of interpreting or 'reading' each medium follows different conventions. With novels, the reader attends mainly to the meaning of words rather than the way they are printed on the page, whereas the 'reader' of a painting must attend just as closely to the material form of marks and shapes in the picture as to any ideas they may signify.

Yet it has always been possible to make very accurate facsimiles of pretty well any fine art work. The seven surviving versions of Mona Lisa bear witness to the fact that in the 16th century, artists seemed perfectly content to assign the reproduction of their creations to their workshop apprentices as regular 'bread and butter' work. And today the task of reproducing pictures is incomparably more simple and reliable, with reprographic techniques that allow the production of high-quality prints made exactly to the original scale, with faithful colour values, and even with duplication of the surface relief of the painting. But despite an implicit recognition that the spread of good reproductions can be culturally valuable, museums continue to promote the special status of original work. Unfortunately, this seems to place severe limitations on the kind of experience offered to visitors.

One limitation is related to the way the museum presents its exhibits. As repositories of unique historical objects, art museums are often called 'treasure houses'. We are reminded of this even before we view a collection by the presence of security guards, attendants, ropes and display cases to keep us away from the exhibits. In many cases, the architectural style of the building further reinforces that notion. In addition, a major collection like that of London's National Gallery is housed in numerous rooms, each with dozens of works, any one of which is likely to be worth more than all the average visitor possesses. In a society that judges the personal status of the individual so much by their material worth, it is therefore difficult not to be impressed by one's own relative 'worthlessness' in such an environment.

Furthermore, consideration of the 'value' of the original work in its treasure house setting impresses upon the viewer that, since these works were originally produced, they have been assigned a huge monetary value by some person or institution more powerful than themselves. Evidently, nothing the viewer thinks about the work is going to alter that value, and so today's viewer is deterred from trying to extend that spontaneous, immediate, self-reliant kind of reading which would originally have met the work.

The visitor may then be struck by the strangeness of seeing such diverse paintings, drawings and sculptures brought together in an environment for which they were not originally created. This 'displacement effect' is further heightened by the sheer volume of exhibits. In the case of a major collection, there are probably more works on display than we could realistically view in weeks or even months. This is particularly distressing because time seems to be a vital factor in the appreciation of all art forms. A fundamental difference between paintings and other art forms is that there is no prescribed time over which a painting is viewed. By contrast, the audience encounters an opera or a play over a specific time, which is the duration of the performance. Similarly novels and poems are read in a prescribed temporal sequence, whereas a picture has no clear place at which to start viewing, or at which to finish. Thus art works themselves encourage us to view them superficially, without appreciating the richness of detail and labour that is involved.

Consequently, the dominant critical approach becomes that of the art historian, a specialised academic approach devoted to 'discovering the meaning' of art within the cultural context of its time. This is in perfect harmony with the museum's function, since the approach is dedicated to seeking out and conserving 'authentic', original, readings of the exhibits. Again, this seems to put paid to that spontaneous, participatory criticism which can be found in abundance in criticism of classic works of literature, but is absent from most art history.

The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed. The museum public, like any other audience, experience art more rewardingly when given the confidence to express their views. If appropriate works of fine art could be rendered permanently accessible to the public by means of high-fidelity reproductions, as literature and music already are, the public may feel somewhat less in awe of them. Unfortunately, that may be too much to ask from those who seek to maintain and control the art establishment.`,
      instructions: "Questions 27–31: Complete the summary using the list of words, A–L, below.\n\nQuestions 32–35: Choose the correct letter, A, B, C or D.\n\nQuestions 36–40: Do the following statements agree with the views of the writer? Write YES, NO, or NOT GIVEN.",
      questions: [
        // ── Q27–31: Summary Completion ────────────────────────────
        {
          id: "cam10-ra-t2-s3-q27",
          number: 27,
          type: "matching",
          question: "But they do not go to museums to read original manuscripts of novels, perhaps because the availability of novels has depended on ________ for so long.",
          options: [
            { label: "A – institution", value: "A" },
            { label: "B – mass production", value: "B" },
            { label: "C – mechanical processes", value: "C" },
            { label: "D – public", value: "D" },
            { label: "E – paints", value: "E" },
            { label: "F – artist", value: "F" },
            { label: "G – size", value: "G" },
            { label: "H – underlying ideas", value: "H" },
            { label: "I – basic technology", value: "I" },
            { label: "J – readers", value: "J" },
            { label: "K – picture frames", value: "K" },
            { label: "L – assistants", value: "L" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q28",
          number: 28,
          type: "matching",
          question: "Also because with novels, the ________ are the most important thing.",
          options: [
            { label: "A – institution", value: "A" },
            { label: "B – mass production", value: "B" },
            { label: "C – mechanical processes", value: "C" },
            { label: "D – public", value: "D" },
            { label: "E – paints", value: "E" },
            { label: "F – artist", value: "F" },
            { label: "G – size", value: "G" },
            { label: "H – underlying ideas", value: "H" },
            { label: "I – basic technology", value: "I" },
            { label: "J – readers", value: "J" },
            { label: "K – picture frames", value: "K" },
            { label: "L – assistants", value: "L" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q29",
          number: 29,
          type: "matching",
          question: "In historical times artists such as Leonardo were happy to instruct ________ to produce copies of their work.",
          options: [
            { label: "A – institution", value: "A" },
            { label: "B – mass production", value: "B" },
            { label: "C – mechanical processes", value: "C" },
            { label: "D – public", value: "D" },
            { label: "E – paints", value: "E" },
            { label: "F – artist", value: "F" },
            { label: "G – size", value: "G" },
            { label: "H – underlying ideas", value: "H" },
            { label: "I – basic technology", value: "I" },
            { label: "J – readers", value: "J" },
            { label: "K – picture frames", value: "K" },
            { label: "L – assistants", value: "L" },
          ],
          correctAnswer: "L",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q30",
          number: 30,
          type: "matching",
          question: "These days new methods of reproduction allow excellent replication of surface relief features as well as colour and ________.",
          options: [
            { label: "A – institution", value: "A" },
            { label: "B – mass production", value: "B" },
            { label: "C – mechanical processes", value: "C" },
            { label: "D – public", value: "D" },
            { label: "E – paints", value: "E" },
            { label: "F – artist", value: "F" },
            { label: "G – size", value: "G" },
            { label: "H – underlying ideas", value: "H" },
            { label: "I – basic technology", value: "I" },
            { label: "J – readers", value: "J" },
            { label: "K – picture frames", value: "K" },
            { label: "L – assistants", value: "L" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q31",
          number: 31,
          type: "matching",
          question: "It is regrettable that museums still promote the superiority of original works of art, since this may not be in the interests of the ________.",
          options: [
            { label: "A – institution", value: "A" },
            { label: "B – mass production", value: "B" },
            { label: "C – mechanical processes", value: "C" },
            { label: "D – public", value: "D" },
            { label: "E – paints", value: "E" },
            { label: "F – artist", value: "F" },
            { label: "G – size", value: "G" },
            { label: "H – underlying ideas", value: "H" },
            { label: "I – basic technology", value: "I" },
            { label: "J – readers", value: "J" },
            { label: "K – picture frames", value: "K" },
            { label: "L – assistants", value: "L" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q32–35: Multiple Choice ───────────────────────────────
        {
          id: "cam10-ra-t2-s3-q32",
          number: 32,
          type: "multiple_choice",
          question: "The writer mentions London's National Gallery to illustrate",
          options: [
            { label: "A – the undesirable cost to a nation of maintaining a huge collection of art.", value: "A" },
            { label: "B – the conflict that may arise in society between financial and artistic values.", value: "B" },
            { label: "C – the negative effect a museum can have on visitors' opinions of themselves.", value: "C" },
            { label: "D – the need to put individual well-being above large-scale artistic schemes.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q33",
          number: 33,
          type: "multiple_choice",
          question: "The writer says that today, viewers may be unwilling to criticise art because",
          options: [
            { label: "A – they lack the knowledge needed to support an opinion.", value: "A" },
            { label: "B – they fear it may have financial implications.", value: "B" },
            { label: "C – they have no real concept of the work's value.", value: "C" },
            { label: "D – they feel their personal reaction is of no significance.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q34",
          number: 34,
          type: "multiple_choice",
          question: "According to the writer, the 'displacement effect' on the visitor is caused by",
          options: [
            { label: "A – the variety of works on display and the way they are arranged.", value: "A" },
            { label: "B – the impossibility of viewing particular works of art over a long period.", value: "B" },
            { label: "C – the similar nature of the paintings and the lack of great works.", value: "C" },
            { label: "D – the inappropriate nature of the individual works selected for exhibition.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q35",
          number: 35,
          type: "multiple_choice",
          question: "The writer says that unlike other forms of art, a painting does not",
          options: [
            { label: "A – involve direct contact with an audience.", value: "A" },
            { label: "B – require a specific location for a performance.", value: "B" },
            { label: "C – need the involvement of other professionals.", value: "C" },
            { label: "D – have a specific beginning or end.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q36–40: Yes / No / Not Given ─────────────────────────
        {
          id: "cam10-ra-t2-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "Art history should focus on discovering the meaning of art using a range of media.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "The approach of art historians conflicts with that of art museums.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "People should be encouraged to give their opinions openly on works of art.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "Reproductions of fine art should only be sold to the public if they are of high quality.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t2-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "In the future, those with power are likely to encourage more people to enjoy art.",
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
