import type { IELTSTest } from "./ielts-tests";

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
  sections: [
    {
      id: "cam10-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The Context, Meaning and Scope of Tourism",
      passageText: `A
Travel has existed since the beginning of time, when primitive man set out, often traversing great distances in search of game, which provided the food and clothing necessary for his survival. Throughout the course of history, people have travelled for purposes of trade, religious conviction, economic gain, war, migration and other equally compelling motivations. In the Roman era, wealthy aristocrats and high government officials also travelled for pleasure. Seaside resorts located at Pompeii and Herculaneum afforded citizens the opportunity to escape to their vacation villas in order to avoid the summer heat of Rome. Travel, except during the Dark Ages, has continued to grow and, throughout recorded history, has played a vital role in the development of civilisations and their economies.

B
Tourism in the mass form as we know it today is a distinctly twentieth-century phenomenon. Historians suggest that the advent of mass tourism began in England during the industrial revolution with the rise of the middle class and the availability of relatively inexpensive transportation. The creation of the commercial airline industry following the Second World War and the subsequent development of the jet aircraft in the 1950s signalled the rapid growth and expansion of international travel. This growth led to the development of a major new industry: tourism. In turn, international tourism became the concern of a number of world governments since it not only provided new employment opportunities but also produced a means of earning foreign exchange.

C
Tourism today has grown significantly in both economic and social importance. In most industrialised countries over the past few years the fastest growth has been seen in the area of services. One of the largest segments of the service industry, although largely unrecognised as an entity in some of these countries, is travel and tourism. According to the World Travel and Tourism Council (1992), Travel and tourism is the largest industry in the world on virtually any economic measure including value-added capital investment, employment and tax contributions. In 1992 the industry's gross output was estimated to be $3.5 trillion, over 12 per cent of all consumer spending. The travel and tourism industry is the world's largest employer – almost 130 million jobs, or almost 7 per cent of all employees. This industry is the world's leading industrial contributor, producing over 6 per cent of the world's national product and accounting for capital investment in excess of $422 billion in direct, indirect and personal taxes each year. Thus, tourism has a profound impact both on the world economy and, because of the educative effect of travel and the effects on employment, on society itself.

D
However, the major problems of the travel and tourism industry that have hidden, or obscured, its economic impact are the diversity and fragmentation of the industry itself. The travel industry includes: hotels, motels and other types of accommodation; restaurants and other food services; transportation services and facilities; amusements, attractions and other leisure facilities; gift shops and a large number of other enterprises. Since many of these businesses also serve local residents, the impact of spending by visitors can easily be overlooked or underestimated. In addition, Meis (1992) points out that the tourism industry involves concepts that have remained amorphous to both analysts and decision makers. Moreover, in all nations this problem has made it difficult for the industry to develop any type of reliable or credible tourism information base in order to estimate the contribution it makes to regional, national and global economies. However, the nature of this very diversity makes travel and tourism ideal vehicles for economic development in a wide variety of countries, regions or communities.

E
Once the exclusive province of the wealthy, travel and tourism have become an institutionalised way of life for most of the population. In fact, McIntosh and Goeldner (1990) suggest that tourism has become the largest commodity in international trade for many nations and, for a significant number of other countries, it ranks second or third. For example, tourism is the major source of income in Bermuda, Greece, Italy, Spain, Switzerland and most Caribbean countries. In addition, Hawkins and Ritchie, quoting from data published by the American Express Company, suggest that the travel and tourism industry is the number one ranked employer in the Bahamas, Brazil, Canada, France, (the former) West Germany, Hong Kong, Italy, Jamaica, Japan, Singapore, the United Kingdom and the United States. However, because of problems of definition, which directly affect statistical measurement, it is not possible with any degree of certainty to provide precise, valid or reliable data about the extent of world-wide tourism participation or its economic impact. In many cases, similar difficulties arise when attempts are made to measure domestic tourism.`,
      instructions: "Questions 1–4: Reading Passage 1 has five paragraphs, A–E. Choose the correct heading for paragraphs B–E from the list of headings (i–viii).\n\nQuestions 5–10: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.\n\nQuestions 11–13: Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.",
      questions: [
        {
          id: "cam10-ra-t3-s1-q1",
          number: 1,
          type: "matching",
          question: "Choose the correct heading for Paragraph B.\n\ni Economic and social significance of tourism\nii The development of mass tourism\niii Travel for the wealthy\niv Earning foreign exchange through tourism\nv Difficulty in recognising the economic effects of tourism\nvi The contribution of air travel to tourism\nvii The world impact of tourism\nviii The history of travel",
          options: [
            { label: "i – Economic and social significance of tourism", value: "i" },
            { label: "ii – The development of mass tourism", value: "ii" },
            { label: "iii – Travel for the wealthy", value: "iii" },
            { label: "iv – Earning foreign exchange through tourism", value: "iv" },
            { label: "v – Difficulty in recognising the economic effects of tourism", value: "v" },
            { label: "vi – The contribution of air travel to tourism", value: "vi" },
            { label: "vii – The world impact of tourism", value: "vii" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q2",
          number: 2,
          type: "matching",
          question: "Choose the correct heading for Paragraph C.\n\ni Economic and social significance of tourism\nii The development of mass tourism\niii Travel for the wealthy\niv Earning foreign exchange through tourism\nv Difficulty in recognising the economic effects of tourism\nvi The contribution of air travel to tourism\nvii The world impact of tourism",
          options: [
            { label: "i – Economic and social significance of tourism", value: "i" },
            { label: "ii – The development of mass tourism", value: "ii" },
            { label: "iii – Travel for the wealthy", value: "iii" },
            { label: "iv – Earning foreign exchange through tourism", value: "iv" },
            { label: "v – Difficulty in recognising the economic effects of tourism", value: "v" },
            { label: "vi – The contribution of air travel to tourism", value: "vi" },
            { label: "vii – The world impact of tourism", value: "vii" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q3",
          number: 3,
          type: "matching",
          question: "Choose the correct heading for Paragraph D.\n\ni Economic and social significance of tourism\nii The development of mass tourism\niii Travel for the wealthy\niv Earning foreign exchange through tourism\nv Difficulty in recognising the economic effects of tourism\nvi The contribution of air travel to tourism\nvii The world impact of tourism",
          options: [
            { label: "i – Economic and social significance of tourism", value: "i" },
            { label: "ii – The development of mass tourism", value: "ii" },
            { label: "iii – Travel for the wealthy", value: "iii" },
            { label: "iv – Earning foreign exchange through tourism", value: "iv" },
            { label: "v – Difficulty in recognising the economic effects of tourism", value: "v" },
            { label: "vi – The contribution of air travel to tourism", value: "vi" },
            { label: "vii – The world impact of tourism", value: "vii" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q4",
          number: 4,
          type: "matching",
          question: "Choose the correct heading for Paragraph E.\n\ni Economic and social significance of tourism\nii The development of mass tourism\niii Travel for the wealthy\niv Earning foreign exchange through tourism\nv Difficulty in recognising the economic effects of tourism\nvi The contribution of air travel to tourism\nvii The world impact of tourism",
          options: [
            { label: "i – Economic and social significance of tourism", value: "i" },
            { label: "ii – The development of mass tourism", value: "ii" },
            { label: "iii – Travel for the wealthy", value: "iii" },
            { label: "iv – Earning foreign exchange through tourism", value: "iv" },
            { label: "v – Difficulty in recognising the economic effects of tourism", value: "v" },
            { label: "vi – The contribution of air travel to tourism", value: "vi" },
            { label: "vii – The world impact of tourism", value: "vii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "The largest employment figures in the world are found in the travel and tourism industry.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "Tourism contributes over six per cent of the Australian gross national product.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "Tourism has a social impact because it promotes recreation.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "Two main features of the travel and tourism industry make its economic significance difficult to ascertain.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "Visitor spending is always greater than the spending of residents in tourist areas.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "It is easy to show statistically how tourism affects individual economies.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q11",
          number: 11,
          type: "sentence_completion",
          question: "In Greece, tourism is the most important ______. (Choose NO MORE THAN THREE WORDS from the passage)",
          correctAnswer: "source of income",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q12",
          number: 12,
          type: "sentence_completion",
          question: "The travel and tourism industry in Jamaica is the major ______. (Choose NO MORE THAN THREE WORDS from the passage)",
          correctAnswer: "employer",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s1-q13",
          number: 13,
          type: "sentence_completion",
          question: "The problems associated with measuring international tourism are often reflected in the measurement of ______. (Choose NO MORE THAN THREE WORDS from the passage)",
          correctAnswer: "domestic tourism",
          points: 1,
        },
      ],
    },

    {
      id: "cam10-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Autumn Leaves",
      passageText: `Canadian writer Jay Ingram investigates the mystery of why leaves turn red in the fall

A
One of the most captivating natural events of the year in many areas throughout North America is the turning of the leaves in the fall. The colours are magnificent, but the question of exactly why some trees turn yellow or orange, and others red or purple, is something which has long puzzled scientists.

B
Summer leaves are green because they are full of chlorophyll, the molecule that captures sunlight and converts that energy into new building materials for the tree. As fall approaches in the northern hemisphere, the amount of solar energy available declines considerably. For many trees – evergreen conifers being an exception – the best strategy is to abandon photosynthesis until the spring. So rather than maintaining the now redundant leaves throughout the winter, the tree saves its precious resources and discards them. But before letting its leaves go, the tree dismantles their chlorophyll molecules and ships their valuable nitrogen back into the twigs. As chlorophyll is depleted, other colours that have been dominated by it throughout the summer begin to be revealed. This unmasking explains the autumn colours of yellow and orange, but not the brilliant reds and purples of trees such as the maple or sumac.

C
The source of the red is widely known: it is created by anthocyanins, water-soluble plant pigments reflecting the red to blue range of the visible spectrum. They belong to a class of sugar-based chemical compounds also known as flavonoids. What's puzzling is that anthocyanins are actually newly minted, made in the leaves at the same time as the tree is preparing to drop them. But it is hard to make sense of the manufacture of anthocyanins – why should a tree bother making new chemicals in its leaves when it's already scrambling to withdraw and preserve the ones already there?

D
Some theories about anthocyanins have argued that they might act as a chemical defence against attacks by insects or fungi, or that they might attract fruit-eating birds or increase a leaf's tolerance to freezing. However there are problems with each of these theories, including the fact that leaves are red for such a relatively short period that the expense of energy needed to manufacture the anthocyanins would outweigh any anti-fungal or anti-herbivore activity achieved.

E
It has also been proposed that trees may produce vivid red colours to convince herbivorous insects that they are healthy and robust and would be easily able to mount chemical defences against infestation. If insects paid attention to such advertisements, they might be prompted to lay their eggs on a duller, and presumably less resistant host. The flaw in this theory lies in the lack of proof to support it. No one has as yet ascertained whether more robust trees sport the brightest leaves, or whether insects make choices according to colour intensity.

F
Perhaps the most plausible suggestion as to why leaves would go to the trouble of making anthocyanins when they're busy packing up for the winter is the theory known as the 'light screen' hypothesis. It sounds paradoxical, because the idea behind this hypothesis is that the red pigment is made in autumn leaves to protect chlorophyll, the light-absorbing chemical, from too much light. Why does chlorophyll need protection when it is the natural world's supreme light absorber? Why protect chlorophyll at a time when the tree is breaking it down to salvage as much of it as possible?

G
Chlorophyll, although exquisitely evolved to capture the energy of sunlight, can sometimes be overwhelmed by it, especially in situations of drought, low temperatures, or nutrient deficiency. Moreover, the problem of oversensitivity to light is even more acute in the fall, when the leaf is busy preparing for winter by dismantling its internal machinery. The energy absorbed by the chlorophyll molecules of the unstable autumn leaf is not immediately channelled into useful products and processes, as it would be in an intact summer leaf. The weakened fall leaf then becomes vulnerable to the highly destructive effects of the oxygen created by the excited chlorophyll molecules.

H
Even if you had never suspected that this is what was going on when leaves turn red, there are clues out there. One is straightforward: on many trees, the leaves that are the reddest are those on the side of the tree which gets most sun. Not only that, but the red is brighter on the upper side of the leaf. It has also been recognised for decades that the best conditions for intense red colours are dry, sunny days and cool nights, conditions that nicely match those that make leaves susceptible to excess light. And finally, trees such as maples usually get much redder the more north you travel in the northern hemisphere. It's colder there, they're more stressed, their chlorophyll is more sensitive and it needs more sunblock.

I
What is still not fully understood, however, is why some trees resort to producing red pigments while others don't bother, and simply reveal their orange or yellow hues. Do these trees have other means at their disposal to prevent overexposure to light in autumn? Their story, though not as spectacular to the eye, will surely turn out to be as subtle and as complex.`,
      instructions: "Questions 14–18: Reading Passage 2 has nine paragraphs, A–I. Which paragraph contains the following information? You may use any letter more than once.\n\nQuestions 19–22: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.\n\nQuestions 23–25: Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.\n\nQuestion 26: Choose the correct letter A, B, C or D.",
      questions: [
        {
          id: "cam10-ra-t3-s2-q14",
          number: 14,
          type: "multiple_choice",
          question: "Which paragraph contains: a description of the substance responsible for the red colouration of leaves?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q15",
          number: 15,
          type: "multiple_choice",
          question: "Which paragraph contains: the reason why trees drop their leaves in autumn?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q16",
          number: 16,
          type: "multiple_choice",
          question: "Which paragraph contains: some evidence to confirm a theory about the purpose of the red leaves?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q17",
          number: 17,
          type: "multiple_choice",
          question: "Which paragraph contains: an explanation of the function of chlorophyll?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q18",
          number: 18,
          type: "multiple_choice",
          question: "Which paragraph contains: a suggestion that the red colouration in leaves could serve as a warning signal?",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q19",
          number: 19,
          type: "note_completion",
          question: "The most vividly coloured red leaves are found on the side of the tree facing the ______. (ONE WORD ONLY)",
          correctAnswer: "sun",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q20",
          number: 20,
          type: "note_completion",
          question: "The ______ surfaces of leaves contain the most red pigment. (ONE WORD ONLY)",
          correctAnswer: "upper",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q21",
          number: 21,
          type: "note_completion",
          question: "Red leaves are most abundant when daytime weather conditions are ______ and sunny. (ONE WORD ONLY)",
          correctAnswer: "dry",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q22",
          number: 22,
          type: "note_completion",
          question: "The intensity of the red colour of leaves increases as you go further ______. (ONE WORD ONLY)",
          correctAnswer: "north",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q23",
          number: 23,
          type: "true_false_ng",
          question: "It is likely that the red pigments help to protect the leaf from freezing temperatures.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q24",
          number: 24,
          type: "true_false_ng",
          question: "The 'light screen' hypothesis would initially seem to contradict what is known about chlorophyll.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q25",
          number: 25,
          type: "true_false_ng",
          question: "Leaves which turn colours other than red are more likely to be damaged by sunlight.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "For which of the following questions does the writer offer an explanation?\n\nA  why conifers remain green in winter\nB  how leaves turn orange and yellow in autumn\nC  how herbivorous insects choose which trees to lay their eggs in\nD  why anthocyanins are restricted to certain trees",
          options: [
            { label: "A – why conifers remain green in winter", value: "A" },
            { label: "B – how leaves turn orange and yellow in autumn", value: "B" },
            { label: "C – how herbivorous insects choose which trees to lay their eggs in", value: "C" },
            { label: "D – why anthocyanins are restricted to certain trees", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
      ],
    },

    {
      id: "cam10-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Beyond the Blue Horizon",
      passageText: `Ancient voyagers who settled the far-flung islands of the Pacific Ocean

An important archaeological discovery on the island of Efate in the Pacific archipelago of Vanuatu has revealed traces of an ancient seafaring people, the distant ancestors of today's Polynesians. The site came to light only by chance. An agricultural worker, digging in the grounds of a derelict plantation, scraped open a grave – the first of dozens in a burial ground some 3,000 years old. It is the oldest cemetery ever found in the Pacific islands, and it harbors the remains of an ancient people archaeologists call the Lapita.

They were daring blue-water adventurers who used basic canoes to rove across the ocean. But they were not just explorers. They were also pioneers who carried with them everything they would need to build new lives – their livestock, taro seedlings and stone tools. Within the span of several centuries, the Lapita stretched the boundaries of their world from the jungle-clad volcanoes of Papua New Guinea to the loneliest coral outliers of Tonga.

The Lapita left precious few clues about themselves, but Efate expands the volume of data available to researchers dramatically. The remains of 62 individuals have been uncovered so far, and archaeologists were also thrilled to find six complete Lapita pots. Other items included a Lapita burial urn with modeled birds arranged on the rim as though peering down at the human remains sealed inside. 'It's an important discovery,' says Matthew Spriggs, professor of archaeology at the Australian National University and head of the international team digging up the site, 'for it conclusively identifies the remains as Lapita.'

DNA teased from these human remains may help answer one of the most puzzling questions in Pacific anthropology: did all Pacific islanders spring from one source or many? Was there only one outward migration from a single point in Asia, or several from different points? 'This represents the best opportunity we've had yet,' says Spriggs, 'to find out who the Lapita actually were, where they came from, and who their closest descendants are today.'

There is one stubborn question for which archaeology has yet to provide any answers: how did the Lapita accomplish the ancient equivalent of a moon landing, many times over? No-one has found one of their canoes or any rigging, which could reveal how the canoes were sailed. Nor do the oral histories and traditions of later Polynesians offer any insights, for they turn into myths long before they reach as far back in time as the Lapita.

'All we can say for certain is that the Lapita had canoes that were capable of ocean voyages, and they had the ability to sail them,' says Geoff Irwin, a professor of archaeology at the University of Auckland. Those sailing skills, he says, were developed and passed down over thousands of years by earlier mariners who worked their way through the archipelagoes of the western Pacific, making short crossings to nearby islands. The real adventure didn't begin, however, until their Lapita descendants sailed out of sight of land, with empty horizons on every side. This must have been as difficult for them as landing on the moon is for us today. Certainly it distinguished them from their ancestors, but what gave them the courage to launch out on such risky voyages?

The Lapitas' thrust into the Pacific was eastward, against the prevailing trade winds, Irwin notes. Those nagging headwinds, he argues, may have been the key to their success. 'They could sail out for days into the unknown and assess the area, secure in the knowledge that if they didn't find anything, they could turn about and catch a swift ride back on the trade winds. This is what would have made the whole thing work.' Once out there, skilled seafarers would have detected abundant leads to follow to land: seabirds, coconuts and twigs carried out to sea by the tides, and the afternoon pile-up of clouds on the horizon which often indicates an island in the distance.

For returning explorers, successful or not, the geography of their own archipelagoes would have provided a safety net. Without this to go by, overshooting their home ports, getting lost and sailing off into eternity would have been all too easy. Vanuatu, for example, stretches more than 500 miles in a northwest-southeast trend, its scores of intervisible islands forming a backstop for mariners riding the trade winds home.

All this presupposes one essential detail, says Atholl Anderson, professor of prehistory at the Australian National University: the Lapita had mastered the advanced art of sailing against the wind. 'And there's no proof they could do any such thing,' Anderson says. 'There has been this assumption they did, and people have built canoes to re-create those early voyages based on that assumption. But nobody has any idea what their canoes looked like or how they were rigged.'

Rather than give all the credit to human skill, Anderson invokes the winds of chance. El Nino, the same climate disruption that affects the Pacific today, may have helped scatter the Lapita, Anderson suggests. He points out that climate data obtained from slow-growing corals around the Pacific indicate a series of unusually frequent El Ninos around the time of the Lapita expansion. By reversing the regular east-to-west flow of the trade winds for weeks at a time, these super El Ninos might have taken the Lapita on long unplanned voyages.

However they did it, the Lapita spread themselves a third of the way across the Pacific, then called it quits for reasons known only to them. Ahead lay the vast emptiness of the central Pacific and perhaps they were too thinly stretched to venture farther. They probably never numbered more than a few thousand in total, and in their rapid migration eastward they encountered hundreds of islands – more than 300 in Fiji alone.`,
      instructions: "Questions 27–31: Complete the summary using the list of words and phrases, A–J. Write the correct letter, A–J, in the boxes.\n\nWord bank:\nA proof  B plantation  C harbour  D bones  E data  F archaeological discovery  G burial urn  H source  I animals  J maps\n\nQuestions 32–35: Choose the correct letter A, B, C or D.\n\nQuestions 36–40: Do the following statements agree with the views of the writer? Write YES, NO, or NOT GIVEN.",
      questions: [
        {
          id: "cam10-ra-t3-s3-q27",
          number: 27,
          type: "summary_completion",
          question: "A 3,000-year-old burial ground of a seafaring people called the Lapita has been found on an abandoned ______ on the Pacific island of Efate.\n\n(Word bank: A proof  B plantation  C harbour  D bones  E data  F archaeological discovery  G burial urn  H source  I animals  J maps)",
          options: [
            { label: "A – proof", value: "A" },
            { label: "B – plantation", value: "B" },
            { label: "C – harbour", value: "C" },
            { label: "D – bones", value: "D" },
            { label: "E – data", value: "E" },
            { label: "F – archaeological discovery", value: "F" },
            { label: "G – burial urn", value: "G" },
            { label: "H – source", value: "H" },
            { label: "I – animals", value: "I" },
            { label: "J – maps", value: "J" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q28",
          number: 28,
          type: "summary_completion",
          question: "The cemetery, which is a significant ______, was uncovered accidentally by an agricultural worker.\n\n(Word bank: A proof  B plantation  C harbour  D bones  E data  F archaeological discovery  G burial urn  H source  I animals  J maps)",
          options: [
            { label: "A – proof", value: "A" },
            { label: "B – plantation", value: "B" },
            { label: "C – harbour", value: "C" },
            { label: "D – bones", value: "D" },
            { label: "E – data", value: "E" },
            { label: "F – archaeological discovery", value: "F" },
            { label: "G – burial urn", value: "G" },
            { label: "H – source", value: "H" },
            { label: "I – animals", value: "I" },
            { label: "J – maps", value: "J" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q29",
          number: 29,
          type: "summary_completion",
          question: "The Lapita explored and colonised many Pacific islands. They took many things with them on their voyages including ______ and tools.\n\n(Word bank: A proof  B plantation  C harbour  D bones  E data  F archaeological discovery  G burial urn  H source  I animals  J maps)",
          options: [
            { label: "A – proof", value: "A" },
            { label: "B – plantation", value: "B" },
            { label: "C – harbour", value: "C" },
            { label: "D – bones", value: "D" },
            { label: "E – data", value: "E" },
            { label: "F – archaeological discovery", value: "F" },
            { label: "G – burial urn", value: "G" },
            { label: "H – source", value: "H" },
            { label: "I – animals", value: "I" },
            { label: "J – maps", value: "J" },
          ],
          correctAnswer: "I",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q30",
          number: 30,
          type: "summary_completion",
          question: "Spriggs believes the ______ which was found at the site is very important since it confirms that the remains found inside are Lapita.\n\n(Word bank: A proof  B plantation  C harbour  D bones  E data  F archaeological discovery  G burial urn  H source  I animals  J maps)",
          options: [
            { label: "A – proof", value: "A" },
            { label: "B – plantation", value: "B" },
            { label: "C – harbour", value: "C" },
            { label: "D – bones", value: "D" },
            { label: "E – data", value: "E" },
            { label: "F – archaeological discovery", value: "F" },
            { label: "G – burial urn", value: "G" },
            { label: "H – source", value: "H" },
            { label: "I – animals", value: "I" },
            { label: "J – maps", value: "J" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q31",
          number: 31,
          type: "summary_completion",
          question: "Spriggs believes the burial urn confirms that the ______ found inside are Lapita.\n\n(Word bank: A proof  B plantation  C harbour  D bones  E data  F archaeological discovery  G burial urn  H source  I animals  J maps)",
          options: [
            { label: "A – proof", value: "A" },
            { label: "B – plantation", value: "B" },
            { label: "C – harbour", value: "C" },
            { label: "D – bones", value: "D" },
            { label: "E – data", value: "E" },
            { label: "F – archaeological discovery", value: "F" },
            { label: "G – burial urn", value: "G" },
            { label: "H – source", value: "H" },
            { label: "I – animals", value: "I" },
            { label: "J – maps", value: "J" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q32",
          number: 32,
          type: "multiple_choice",
          question: "According to the writer, there are difficulties explaining how the Lapita accomplished their journeys because\n\nA  the canoes that have been discovered offer relatively few clues.\nB  archaeologists have shown limited interest in this area of research.\nC  little information relating to this period can be relied upon for accuracy.\nD  technological advances have altered the way such achievements are viewed.",
          options: [
            { label: "A – the canoes that have been discovered offer relatively few clues.", value: "A" },
            { label: "B – archaeologists have shown limited interest in this area of research.", value: "B" },
            { label: "C – little information relating to this period can be relied upon for accuracy.", value: "C" },
            { label: "D – technological advances have altered the way such achievements are viewed.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q33",
          number: 33,
          type: "multiple_choice",
          question: "According to the sixth paragraph, what was extraordinary about the Lapita?\n\nA  They sailed beyond the point where land was visible.\nB  Their cultural heritage discouraged the expression of fear.\nC  They were able to build canoes that withstood ocean voyages.\nD  Their navigational skills were passed on from one generation to the next.",
          options: [
            { label: "A – They sailed beyond the point where land was visible.", value: "A" },
            { label: "B – Their cultural heritage discouraged the expression of fear.", value: "B" },
            { label: "C – They were able to build canoes that withstood ocean voyages.", value: "C" },
            { label: "D – Their navigational skills were passed on from one generation to the next.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q34",
          number: 34,
          type: "multiple_choice",
          question: "What does 'This' refer to in the seventh paragraph?\n\nA  the Lapita's seafaring talent\nB  the Lapita's ability to detect signs of land\nC  the Lapita's extensive knowledge of the region\nD  the Lapita's belief they would be able to return home",
          options: [
            { label: "A – the Lapita's seafaring talent", value: "A" },
            { label: "B – the Lapita's ability to detect signs of land", value: "B" },
            { label: "C – the Lapita's extensive knowledge of the region", value: "C" },
            { label: "D – the Lapita's belief they would be able to return home", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q35",
          number: 35,
          type: "multiple_choice",
          question: "According to the eighth paragraph, how was the geography of the region significant?\n\nA  It played an important role in Lapita culture.\nB  It meant there were relatively few storms at sea.\nC  It provided a navigational aid for the Lapita.\nD  It made a large number of islands habitable.",
          options: [
            { label: "A – It played an important role in Lapita culture.", value: "A" },
            { label: "B – It meant there were relatively few storms at sea.", value: "B" },
            { label: "C – It provided a navigational aid for the Lapita.", value: "C" },
            { label: "D – It made a large number of islands habitable.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "It is now clear that the Lapita could sail into a prevailing wind.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "Extreme climate conditions may have played a role in Lapita migration.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "The Lapita learnt to predict the duration of El Ninos.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "It remains unclear why the Lapita halted their expansion across the Pacific.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam10-ra-t3-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "It is likely that the majority of Lapita settled on Fiji.",
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

const cambridge10_reading_t4: IELTSTest = {
  id: "cam10-reading-academic-t4",
  title: "Cambridge IELTS 10 – Test 4",
  bookNumber: 10,
  testNumber: 4,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam10-ra-t4-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The Megafires of California",
      passageText: `Drought, housing expansion, and oversupply of tinder make for bigger, hotter fires in the western United States

Wildfires are becoming an increasing menace in the western United States, with Southern California being the hardest hit area. There's a reason fire squads battling more frequent blazes in Southern California are having such difficulty containing the flames, despite better preparedness than ever and decades of experience fighting fires fanned by the 'Santa Ana Winds'. The wildfires themselves, experts say, are generally hotter, faster, and spread more erratically than in the past.

Megafires, also called 'siege fires', are the increasingly frequent blazes that burn 500,000 acres or more – 10 times the size of the average forest fire of 20 years ago. Some recent wildfires are among the biggest ever in California in terms of acreage burned, according to state figures and news reports.

One explanation for the trend to more superhot fires is that the region, which usually has dry summers, has had significantly below normal precipitation in many recent years. Another reason, experts say, is related to the century-long policy of the US Forest Service to stop wildfires as quickly as possible. The unintentional consequence has been to halt the natural eradication of underbrush, now the primary fuel for megafires.

Three other factors contribute to the trend, they add. First is climate change, marked by a 1-degree Fahrenheit rise in average yearly temperature across the western states. Second is fire seasons that on average are 78 days longer than they were 20 years ago. Third is increased construction of homes in wooded areas.

'We are increasingly building our homes in fire-prone ecosystems,' says Dominik Kulakowski, adjunct professor of biology at Clark University Graduate School of Geography in Worcester, Massachusetts. 'Doing that in many of the forests of the western US is like building homes on the side of an active volcano.'

In California, where population growth has averaged more than 600,000 a year for at least a decade, more residential housing is being built. 'What once was open space is now residential homes providing fuel to make fires burn with greater intensity,' says Terry McHale of the California Department of Forestry firefighters' union. 'With so much dryness, so many communities to catch fire, so many fronts to fight, it becomes an almost incredible job.'

That said, many experts give California high marks for making progress on preparedness in recent years, after some of the largest fires in state history scorched thousands of acres, burned thousands of homes, and killed numerous people. Stung in the past by criticism of bungling that allowed fires to spread when they might have been contained, personnel are meeting the peculiar challenges of neighborhood – and canyon-hopping fires better than previously, observers say.

State promises to provide more up-to-date engines, planes, and helicopters to fight fires have been fulfilled. Firefighters' unions that in the past complained of dilapidated equipment, old fire engines, and insufficient blueprints for fire safety are now praising the state's commitment, noting that funding for firefighting has increased, despite huge cuts in many other programs. 'We are pleased that the current state administration has been very proactive in its support of us, and [has] come through with budgetary support of the infrastructure needs we have long sought,' says Mr. McHale of the firefighters' union.

Besides providing money to upgrade the fire engines that must traverse the mammoth state and wind along serpentine canyon roads, the state has invested in better command-and-control facilities as well as in the strategies to run them. 'In the fire sieges of earlier years, we found that other jurisdictions and states were willing to offer mutual-aid help, but we were not able to communicate adequately with them,' says Kim Zagaris, chief of the state's Office of Emergency Services Fire and Rescue Branch.

After a commission examined and revamped communications procedures, the statewide response 'has become far more professional and responsive,' he says. There is a sense among both government officials and residents that the speed, dedication, and coordination of firefighters from several states and jurisdictions are resulting in greater efficiency than in past 'siege fire' situations.

In recent years, the Southern California region has improved building codes, evacuation procedures, and procurement of new technology. 'I am extraordinarily impressed by the improvements we have witnessed,' says Randy Jacobs, a Southern California-based lawyer who has had to evacuate both his home and business to escape wildfires. 'Notwithstanding all the damage that will continue to be caused by wildfires, we will no longer suffer the loss of life endured in the past because of the fire prevention and firefighting measures that have been put in place,' he says.`,
      instructions: "Questions 1–6: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.\n\nQuestions 7–13: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.",
      questions: [
        {
          id: "cam10-ra-t4-s1-q1",
          number: 1,
          type: "note_completion",
          question: "Wildfires – movement: ______ more unpredictably (ONE WORD AND/OR A NUMBER from the passage)",
          correctAnswer: "spread",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q2",
          number: 2,
          type: "note_completion",
          question: "Wildfires – size of fires: ______ greater on average than two decades ago (ONE WORD AND/OR A NUMBER from the passage)",
          correctAnswer: "10 times",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q3",
          number: 3,
          type: "note_completion",
          question: "Reasons wildfires cause more damage – rainfall: ______ average (ONE WORD AND/OR A NUMBER from the passage)",
          correctAnswer: "below",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q4",
          number: 4,
          type: "note_completion",
          question: "Reasons wildfires cause more damage – more brush to act as ______ (ONE WORD AND/OR A NUMBER from the passage)",
          correctAnswer: "fuel",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q5",
          number: 5,
          type: "note_completion",
          question: "Reasons wildfires cause more damage – extended fire ______ (ONE WORD AND/OR A NUMBER from the passage)",
          correctAnswer: "seasons",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q6",
          number: 6,
          type: "note_completion",
          question: "Reasons wildfires cause more damage – more building of ______ in vulnerable places (ONE WORD AND/OR A NUMBER from the passage)",
          correctAnswer: "homes",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "The amount of open space in California has diminished over the last ten years.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "Many experts believe California has made little progress in readying itself to fight fires.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "Personnel in the past have been criticised for mishandling fire containment.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "California has replaced a range of firefighting tools.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "More firefighters have been hired to improve fire-fighting capacity.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "Citizens and government groups disapprove of the efforts of different states and agencies working together.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "Randy Jacobs believes that loss of life from fires will continue at the same levels, despite changes made.",
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

    {
      id: "cam10-ra-t4-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Second Nature",
      passageText: `Your personality isn't necessarily set in stone. With a little experimentation, people can reshape their temperaments and inject passion, optimism, joy and courage into their lives

A
Psychologists have long held that a person's character cannot undergo a transformation in any meaningful way and that the key traits of personality are determined at a very young age. However, researchers have begun looking more closely at ways we can change. Positive psychologists have identified 24 qualities we admire, such as loyalty and kindness, and are studying them to find out why they come so naturally to some people. What they're discovering is that many of these qualities amount to habitual behaviour that determines the way we respond to the world. The good news is that all this can be learned.

Some qualities are less challenging to develop than others, optimism being one of them. However, developing qualities requires mastering a range of skills which are diverse and sometimes surprising. For example, to bring more joy and passion into your life, you must be open to experiencing negative emotions. Cultivating such qualities will help you realise your full potential.

B
'The evidence is good that most personality traits can be altered,' says Christopher Peterson, professor of psychology at the University of Michigan, who cites himself as an example. Inherently introverted, he realised early on that as an academic, his reticence would prove disastrous in the lecture hall. So he learned to be more outgoing and to entertain his classes. 'Now my extroverted behaviour is spontaneous,' he says.

C
David Fajgenbaum had to make a similar transition. He was preparing for university, when he had an accident that put an end to his sports career. On campus, he quickly found that beyond ordinary counselling, the university had no services for students who were undergoing physical rehabilitation and suffering from depression like him. He therefore launched a support group to help others in similar situations. He took action despite his own pain – a typical response of an optimist.

D
Suzanne Segerstrom, professor of psychology at the University of Kentucky, believes that the key to increasing optimism is through cultivating optimistic behaviour, rather than positive thinking. She recommends you train yourself to pay attention to good fortune by writing down three positive things that come about each day. This will help you convince yourself that favourable outcomes actually happen all the time, making it easier to begin taking action.

E
You can recognise a person who is passionate about a pursuit by the way they are so strongly involved in it. Tanya Streeter's passion is freediving – the sport of plunging deep into the water without tanks or other breathing equipment. Beginning in 1998, she set nine world records and can hold her breath for six minutes. The physical stamina required for this sport is intense but the psychological demands are even more overwhelming. Streeter learned to untangle her fears from her judgment of what her body and mind could do. 'In my career as a competitive freediver, there was a limit to what I could do – but it wasn't anywhere near what I thought it was,' she says.

F
Finding a pursuit that excites you can improve anyone's life. The secret about consuming passions, though, according to psychologist Paul Silvia of the University of North Carolina, is that 'they require discipline, hard work and ability, which is why they are so rewarding.' Psychologist Todd Kashdan has this advice for those people taking up a new passion: 'As a newcomer, you also have to tolerate and laugh at your own ignorance. You must be willing to accept the negative feelings that come your way,' he says.

G
In 2004, physician-scientist Mauro Zappaterra began his PhD research at Harvard Medical School. Unfortunately, he was miserable as his research wasn't compatible with his curiosity about healing. He finally took a break and during eight months in Santa Fe, Zappaterra learned about alternative healing techniques not taught at Harvard. When he got back, he switched labs to study how cerebrospinal fluid nourishes the developing nervous system. He also vowed to look for the joy in everything, including failure, as this could help him learn about his research and himself.

One thing that can hold joy back is a person's concentration on avoiding failure rather than their looking forward to doing something well. 'Focusing on being safe might get in the way of your reaching your goals,' explains Kashdan. For example, are you hoping to get through a business lunch without embarrassing yourself, or are you thinking about how fascinating the conversation might be?

H
Usually, we think of courage in physical terms but ordinary life demands something else. For marketing executive Kenneth Pedeleose, it meant speaking out against something he thought was ethically wrong. The new manager was intimidating staff so Pedeleose carefully recorded each instance of bullying and eventually took the evidence to a senior director, knowing his own job security would be threatened. Eventually the manager was the one to go. According to Cynthia Pury, a psychologist at Clemson University, Pedeleose's story proves the point that courage is not motivated by fearlessness, but by moral obligation. Pury also believes that people can acquire courage. Many of her students said that faced with a risky situation, they first tried to calm themselves down, then looked for a way to mitigate the danger, just as Pedeleose did by documenting his allegations.

Over the long term, picking up a new character trait may help you move toward being the person you want to be. And in the short term, the effort itself could be surprisingly rewarding, a kind of internal adventure.`,
      instructions: "Questions 14–18: Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.\n\nQuestions 19–22: Match each statement with the correct person, A–G.\n\nQuestions 23–26: Which section, A–H, contains the following information?",
      questions: [
        {
          id: "cam10-ra-t4-s2-q14",
          number: 14,
          type: "summary_completion",
          question: "Psychologists have traditionally believed that a personality ______ was impossible and that by a very young age a person's character tends to be fixed. (NO MORE THAN TWO WORDS from the passage)",
          correctAnswer: "transformation",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q15",
          number: 15,
          type: "summary_completion",
          question: "Psychologists have traditionally believed that a personality transformation was impossible and that by a ______ a person's character tends to be fixed. (NO MORE THAN TWO WORDS from the passage)",
          correctAnswer: "very young age",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q16",
          number: 16,
          type: "summary_completion",
          question: "One of the easiest qualities to acquire is ______. (NO MORE THAN TWO WORDS from the passage)",
          correctAnswer: "optimism",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q17",
          number: 17,
          type: "summary_completion",
          question: "Regardless of the quality, it is necessary to learn a wide variety of different ______ in order for a new quality to develop. (NO MORE THAN TWO WORDS from the passage)",
          correctAnswer: "skills",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q18",
          number: 18,
          type: "summary_completion",
          question: "A person must understand and feel some ______ in order to increase their happiness. (NO MORE THAN TWO WORDS from the passage)",
          correctAnswer: "negative emotions",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q19",
          number: 19,
          type: "matching",
          question: "People must accept that they do not know much when first trying something new.\n\nA Christopher Peterson  B David Fajgenbaum  C Suzanne Segerstrom  D Tanya Streeter  E Todd Kashdan  F Kenneth Pedeleose  G Cynthia Pury",
          options: [
            { label: "A – Christopher Peterson", value: "A" },
            { label: "B – David Fajgenbaum", value: "B" },
            { label: "C – Suzanne Segerstrom", value: "C" },
            { label: "D – Tanya Streeter", value: "D" },
            { label: "E – Todd Kashdan", value: "E" },
            { label: "F – Kenneth Pedeleose", value: "F" },
            { label: "G – Cynthia Pury", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q20",
          number: 20,
          type: "matching",
          question: "It is important for people to actively notice when good things happen.\n\nA Christopher Peterson  B David Fajgenbaum  C Suzanne Segerstrom  D Tanya Streeter  E Todd Kashdan  F Kenneth Pedeleose  G Cynthia Pury",
          options: [
            { label: "A – Christopher Peterson", value: "A" },
            { label: "B – David Fajgenbaum", value: "B" },
            { label: "C – Suzanne Segerstrom", value: "C" },
            { label: "D – Tanya Streeter", value: "D" },
            { label: "E – Todd Kashdan", value: "E" },
            { label: "F – Kenneth Pedeleose", value: "F" },
            { label: "G – Cynthia Pury", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q21",
          number: 21,
          type: "matching",
          question: "Courage can be learned once its origins in a sense of responsibility are understood.\n\nA Christopher Peterson  B David Fajgenbaum  C Suzanne Segerstrom  D Tanya Streeter  E Todd Kashdan  F Kenneth Pedeleose  G Cynthia Pury",
          options: [
            { label: "A – Christopher Peterson", value: "A" },
            { label: "B – David Fajgenbaum", value: "B" },
            { label: "C – Suzanne Segerstrom", value: "C" },
            { label: "D – Tanya Streeter", value: "D" },
            { label: "E – Todd Kashdan", value: "E" },
            { label: "F – Kenneth Pedeleose", value: "F" },
            { label: "G – Cynthia Pury", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q22",
          number: 22,
          type: "matching",
          question: "It is possible to overcome shyness when faced with the need to speak in public.\n\nA Christopher Peterson  B David Fajgenbaum  C Suzanne Segerstrom  D Tanya Streeter  E Todd Kashdan  F Kenneth Pedeleose  G Cynthia Pury",
          options: [
            { label: "A – Christopher Peterson", value: "A" },
            { label: "B – David Fajgenbaum", value: "B" },
            { label: "C – Suzanne Segerstrom", value: "C" },
            { label: "D – Tanya Streeter", value: "D" },
            { label: "E – Todd Kashdan", value: "E" },
            { label: "F – Kenneth Pedeleose", value: "F" },
            { label: "G – Cynthia Pury", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q23",
          number: 23,
          type: "matching",
          question: "Which section (A–H) contains: a mention of how rational thinking enabled someone to achieve physical goals?",
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
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q24",
          number: 24,
          type: "matching",
          question: "Which section (A–H) contains: an account of how someone overcame a sad experience?",
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
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q25",
          number: 25,
          type: "matching",
          question: "Which section (A–H) contains: a description of how someone decided to rethink their academic career path?",
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
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s2-q26",
          number: 26,
          type: "matching",
          question: "Which section (A–H) contains: an example of how someone risked his career out of a sense of duty?",
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
          correctAnswer: "H",
          points: 1,
        },
      ],
    },

    {
      id: "cam10-ra-t4-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "When Evolution Runs Backwards",
      passageText: `Evolution isn't supposed to run backwards – yet an increasing number of examples show that it does and that it can sometimes represent the future of a species.

The description of any animal as an 'evolutionary throwback' is controversial. For the better part of a century, most biologists have been reluctant to use those words, mindful of a principle of evolution that says 'evolution cannot run backwards'. But as more and more examples come to light and modern genetics enters the scene, that principle is having to be rewritten. Not only are evolutionary throwbacks possible, they sometimes play an important role in the forward march of evolution.

The technical term for an evolutionary throwback is an 'atavism', from the Latin atavus, meaning forefather. The word has ugly connotations thanks largely to Cesare Lombroso, a 19th-century Italian medic who argued that criminals were born not made and could be identified by certain physical features that were throwbacks to a primitive, sub-human state.

While Lombroso was measuring criminals, a Belgian palaeontologist called Louis Dollo was studying fossil records and coming to the opposite conclusion. In 1890 he proposed that evolution was irreversible: that 'an organism is unable to return, even partially, to a previous stage already realised in the ranks of its ancestors.' Early 20th-century biologists came to a similar conclusion, though they qualified it in terms of probability, stating that there is no reason why evolution cannot run backwards – it is just very unlikely. And so the idea of irreversibility in evolution stuck and came to be known as 'Dollo's law'.

If Dollo's law is right, atavisms should occur only very rarely, if at all. Yet almost since the idea took root, exceptions have been cropping up. In 1919, for example, a humpback whale with a pair of leglike appendages over a metre long, complete with a full set of limb bones, was caught off Vancouver Island in Canada. Explorer Roy Chapman Andrews argued at the time that the whale must be a throwback to a land-living ancestor. 'I can see no other explanation,' he wrote in 1921.

Since then, so many other examples have been discovered that it no longer makes sense to say that evolution is as good as irreversible. And this poses a puzzle: how can characteristics that disappeared millions of years ago suddenly reappear?

In 1994, Rudolf Raff and colleagues at Indiana University in the USA decided to use genetics to put a number on the probability of evolution going into reverse. They reasoned that while some evolutionary changes involve the loss of genes and are therefore irreversible, others may be the result of genes being switched off. If these silent genes are somehow switched back on, they argued, long-lost traits could reappear.

Raff's team went on to calculate the likelihood of it happening. Silent genes accumulate random mutations, they reasoned, eventually rendering them useless. So how long can a gene survive in a species if it is no longer used? The team calculated that there is a good chance of silent genes surviving for up to 6 million years in at least a few individuals in a population, and that some might survive as long as 10 million years. In other words, throwbacks are possible, but only to the relatively recent evolutionary past.

As a possible example, the team pointed to the mole salamanders of Mexico and California. Like most amphibians these begin life in a juvenile 'tadpole' state, then metamorphose into the adult form – except for one species, the axolotl, which famously lives its entire life as a juvenile. The simplest explanation for this is that the axolotl lineage alone lost the ability to metamorphose, while others retained it. From a detailed analysis of the salamanders' family tree, however, it is clear that the other lineages evolved from an ancestor that itself had lost the ability to metamorphose. In other words, metamorphosis in mole salamanders is an atavism. The salamander example fits with Raff's 10-million-year time frame.

More recently, however, examples have been reported that break the time limit, suggesting that silent genes may not be the whole story. In a paper published last year, biologist Gunter Wagner of Yale University reported some work on the evolutionary history of a group of South American lizards called Bachia. Many of these have minuscule limbs; some look more like snakes than lizards and a few have completely lost the toes on their hind limbs. Other species, however, sport up to four toes on their hind legs. The simplest explanation is that the toed lineages never lost their toes, but Wagner begs to differ. According to his analysis of the Bachia family tree, the toed species re-evolved toes from toeless ancestors and, what is more, digit loss and gain has occurred on more than one occasion over tens of millions of years.

So what's going on? One possibility is that these traits are lost and then simply reappear, in much the same way that similar structures can independently arise in unrelated species, such as the dorsal fins of sharks and killer whales. Another more intriguing possibility is that the genetic information needed to make toes somehow survived for tens or perhaps hundreds of millions of years in the lizards and was reactivated. These atavistic traits provided an advantage and spread through the population, effectively reversing evolution.

But if silent genes degrade within 6 to 10 million years, how can long-lost traits be reactivated over longer timescales? The answer may lie in the womb. Early embryos of many species develop ancestral features. Snake embryos, for example, sprout hind limb buds. Later in development these features disappear thanks to developmental programs that say 'lose the leg'. If for any reason this does not happen, the ancestral feature may not disappear, leading to an atavism.`,
      instructions: "Questions 27–31: Choose the correct letter A, B, C or D.\n\nQuestions 32–36: Complete each sentence with the correct ending, A–G.\n\nWord bank for Q32–36:\nA the question of how certain long-lost traits could reappear.\nB the occurrence of a particular feature in different species.\nC parallels drawn between behaviour and appearance.\nD the continued existence of certain genetic information.\nE the doubts felt about evolutionary throwbacks.\nF the possibility of evolution being reversible.\nG Dollo's findings and the convictions held by Lombroso.\n\nQuestions 37–40: Do the following statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.",
      questions: [
        {
          id: "cam10-ra-t4-s3-q27",
          number: 27,
          type: "multiple_choice",
          question: "When discussing the theory developed by Louis Dollo, the writer says that\n\nA  it was immediately referred to as Dollo's law.\nB  it supported the possibility of evolutionary throwbacks.\nC  it was modified by biologists in the early twentieth century.\nD  it was based on many years of research.",
          options: [
            { label: "A – it was immediately referred to as Dollo's law.", value: "A" },
            { label: "B – it supported the possibility of evolutionary throwbacks.", value: "B" },
            { label: "C – it was modified by biologists in the early twentieth century.", value: "C" },
            { label: "D – it was based on many years of research.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "The humpback whale caught off Vancouver Island is mentioned because of\n\nA  the exceptional size of its body.\nB  the way it exemplifies Dollo's law.\nC  the amount of local controversy it caused.\nD  the reason given for its unusual features.",
          options: [
            { label: "A – the exceptional size of its body.", value: "A" },
            { label: "B – the way it exemplifies Dollo's law.", value: "B" },
            { label: "C – the amount of local controversy it caused.", value: "C" },
            { label: "D – the reason given for its unusual features.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "What is said about 'silent genes'?\n\nA  Their numbers vary according to species.\nB  Raff disagreed with the use of the term.\nC  They could lead to the re-emergence of certain characteristics.\nD  They can have an unlimited life span.",
          options: [
            { label: "A – Their numbers vary according to species.", value: "A" },
            { label: "B – Raff disagreed with the use of the term.", value: "B" },
            { label: "C – They could lead to the re-emergence of certain characteristics.", value: "C" },
            { label: "D – They can have an unlimited life span.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "The writer mentions the mole salamander because\n\nA  it exemplifies what happens in the development of most amphibians.\nB  it suggests that Raff's theory is correct.\nC  it has lost and regained more than one ability.\nD  its ancestors have become the subject of extensive research.",
          options: [
            { label: "A – it exemplifies what happens in the development of most amphibians.", value: "A" },
            { label: "B – it suggests that Raff's theory is correct.", value: "B" },
            { label: "C – it has lost and regained more than one ability.", value: "C" },
            { label: "D – its ancestors have become the subject of extensive research.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "Which of the following does Wagner claim?\n\nA  Members of the Bachia lizard family have lost and regained certain features several times.\nB  Evidence shows that the evolution of the Bachia lizard is due to the environment.\nC  His research into South American lizards supports Raff's assertions.\nD  His findings will apply to other species of South American lizards.",
          options: [
            { label: "A – Members of the Bachia lizard family have lost and regained certain features several times.", value: "A" },
            { label: "B – Evidence shows that the evolution of the Bachia lizard is due to the environment.", value: "B" },
            { label: "C – His research into South American lizards supports Raff's assertions.", value: "C" },
            { label: "D – His findings will apply to other species of South American lizards.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q32",
          number: 32,
          type: "matching",
          question: "For a long time biologists rejected ______\n\nA the question of how certain long-lost traits could reappear.\nB the occurrence of a particular feature in different species.\nC parallels drawn between behaviour and appearance.\nD the continued existence of certain genetic information.\nE the doubts felt about evolutionary throwbacks.\nF the possibility of evolution being reversible.\nG Dollo's findings and the convictions held by Lombroso.",
          options: [
            { label: "A – the question of how certain long-lost traits could reappear.", value: "A" },
            { label: "B – the occurrence of a particular feature in different species.", value: "B" },
            { label: "C – parallels drawn between behaviour and appearance.", value: "C" },
            { label: "D – the continued existence of certain genetic information.", value: "D" },
            { label: "E – the doubts felt about evolutionary throwbacks.", value: "E" },
            { label: "F – the possibility of evolution being reversible.", value: "F" },
            { label: "G – Dollo's findings and the convictions held by Lombroso.", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q33",
          number: 33,
          type: "matching",
          question: "Opposing views on evolutionary throwbacks are represented by ______\n\nA the question of how certain long-lost traits could reappear.\nB the occurrence of a particular feature in different species.\nC parallels drawn between behaviour and appearance.\nD the continued existence of certain genetic information.\nE the doubts felt about evolutionary throwbacks.\nF the possibility of evolution being reversible.\nG Dollo's findings and the convictions held by Lombroso.",
          options: [
            { label: "A – the question of how certain long-lost traits could reappear.", value: "A" },
            { label: "B – the occurrence of a particular feature in different species.", value: "B" },
            { label: "C – parallels drawn between behaviour and appearance.", value: "C" },
            { label: "D – the continued existence of certain genetic information.", value: "D" },
            { label: "E – the doubts felt about evolutionary throwbacks.", value: "E" },
            { label: "F – the possibility of evolution being reversible.", value: "F" },
            { label: "G – Dollo's findings and the convictions held by Lombroso.", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q34",
          number: 34,
          type: "matching",
          question: "Examples of evolutionary throwbacks have led to ______\n\nA the question of how certain long-lost traits could reappear.\nB the occurrence of a particular feature in different species.\nC parallels drawn between behaviour and appearance.\nD the continued existence of certain genetic information.\nE the doubts felt about evolutionary throwbacks.\nF the possibility of evolution being reversible.\nG Dollo's findings and the convictions held by Lombroso.",
          options: [
            { label: "A – the question of how certain long-lost traits could reappear.", value: "A" },
            { label: "B – the occurrence of a particular feature in different species.", value: "B" },
            { label: "C – parallels drawn between behaviour and appearance.", value: "C" },
            { label: "D – the continued existence of certain genetic information.", value: "D" },
            { label: "E – the doubts felt about evolutionary throwbacks.", value: "E" },
            { label: "F – the possibility of evolution being reversible.", value: "F" },
            { label: "G – Dollo's findings and the convictions held by Lombroso.", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q35",
          number: 35,
          type: "matching",
          question: "The shark and killer whale are mentioned to exemplify ______\n\nA the question of how certain long-lost traits could reappear.\nB the occurrence of a particular feature in different species.\nC parallels drawn between behaviour and appearance.\nD the continued existence of certain genetic information.\nE the doubts felt about evolutionary throwbacks.\nF the possibility of evolution being reversible.\nG Dollo's findings and the convictions held by Lombroso.",
          options: [
            { label: "A – the question of how certain long-lost traits could reappear.", value: "A" },
            { label: "B – the occurrence of a particular feature in different species.", value: "B" },
            { label: "C – parallels drawn between behaviour and appearance.", value: "C" },
            { label: "D – the continued existence of certain genetic information.", value: "D" },
            { label: "E – the doubts felt about evolutionary throwbacks.", value: "E" },
            { label: "F – the possibility of evolution being reversible.", value: "F" },
            { label: "G – Dollo's findings and the convictions held by Lombroso.", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q36",
          number: 36,
          type: "matching",
          question: "One explanation for the findings of Wagner's research is ______\n\nA the question of how certain long-lost traits could reappear.\nB the occurrence of a particular feature in different species.\nC parallels drawn between behaviour and appearance.\nD the continued existence of certain genetic information.\nE the doubts felt about evolutionary throwbacks.\nF the possibility of evolution being reversible.\nG Dollo's findings and the convictions held by Lombroso.",
          options: [
            { label: "A – the question of how certain long-lost traits could reappear.", value: "A" },
            { label: "B – the occurrence of a particular feature in different species.", value: "B" },
            { label: "C – parallels drawn between behaviour and appearance.", value: "C" },
            { label: "D – the continued existence of certain genetic information.", value: "D" },
            { label: "E – the doubts felt about evolutionary throwbacks.", value: "E" },
            { label: "F – the possibility of evolution being reversible.", value: "F" },
            { label: "G – Dollo's findings and the convictions held by Lombroso.", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "Wagner was the first person to do research on South American lizards.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "Wagner believes that Bachia lizards with toes had toeless ancestors.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "The temporary occurrence of long-lost traits in embryos is rare.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam10-ra-t4-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "Evolutionary throwbacks might be caused by developmental problems in the womb.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge10Tests: IELTSTest[] = [
  cambridge10_reading_t1,
  cambridge10_reading_t2,
  cambridge10_reading_t3,
  cambridge10_reading_t4,
];
