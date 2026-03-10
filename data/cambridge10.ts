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

    // ── PASSAGE 2 — to be added ────────────────────────────────
    {
      id: "cam10-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Passage 2 – Coming Soon",
      passageText: "This passage will be added shortly.",
      instructions: "Questions 14–26: To be added.",
      questions: [],
    },

    // ── PASSAGE 3 — to be added ────────────────────────────────
    {
      id: "cam10-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Passage 3 – Coming Soon",
      passageText: "This passage will be added shortly.",
      instructions: "Questions 27–40: To be added.",
      questions: [],
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
