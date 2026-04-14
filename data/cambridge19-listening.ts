import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 19 – LISTENING TEST 1
// Parts: 1) Hinchingbrooke Country Park (note completion)
//        2) Stanthorpe Twinning Association (MCQ + map labelling)
//        3) Food trends discussion (choose 2 + matching)
//        4) Céide Fields (note completion)
//
// Answer keys are pending — correctAnswer fields below are placeholders
// ("?") until the user sends the key.
// ============================================================
export const cambridge19_listening_t1: IELTSTest = {
  id: "cam19-listening-t1",
  title: "Cambridge IELTS 19 – Listening Test 1",
  bookNumber: 19,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam19-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Hinchingbrooke Country Park

The park
●  Area: 1 _______ hectares
●  Habitats: wetland, grassland and woodland
●  Wetland: lakes, ponds and a 2 _______
●  Wildlife includes birds, insects and animals

Subjects studied in educational visits include
●  Science: Children look at 3 _______ about plants, etc.
●  Geography: includes learning to use a 4 _______ and compass
●  History: changes in land use
●  Leisure and tourism: mostly concentrates on the park's 5 _______
●  Music: Children make 6 _______ with natural materials, and experiment with rhythm and speed.

Benefits of outdoor educational visits
●  They give children a feeling of 7 _______ that they may not have elsewhere.
●  Children learn new 8 _______ and gain self-confidence.

Practical issues
●  Cost per child: £ 9 _______
●  Adults, such as 10 _______, free`,
      questions: [
        { id: "cam19-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Area: _______ hectares", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Wetland: lakes, ponds and a _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. Children look at _______ about plants, etc.", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. learning to use a _______ and compass", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. mostly concentrates on the park's _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Children make _______ with natural materials", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. a feeling of _______ that they may not have elsewhere", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. Children learn new _______ and gain self-confidence", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. Cost per child: £ _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Adults, such as _______, free", correctAnswer: "?", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      diagramUrl: imageUrl("cam19-listening-t1-map.png"),
      instructions: `Questions 11–15: Choose the correct letter, A, B or C.
Questions 16–20: Label the map. Write the correct letter (A–H) next to each feature.`,
      passageTitle: "Stanthorpe Twinning Association",
      questions: [
        {
          id: "cam19-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–15: Choose the correct letter, A, B or C.\n\nStanthorpe Twinning Association`,
          type: "multiple_choice",
          question: "11. During the visit to Malatte, in France, members especially enjoyed",
          options: [
            { label: "A  going to a theme park.", value: "A" },
            { label: "B  experiencing a river trip.", value: "B" },
            { label: "C  visiting a cheese factory.", value: "C" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q12", number: 12,
          type: "multiple_choice",
          question: "12. What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
          options: [
            { label: "A  A tree will be planted.", value: "A" },
            { label: "B  A garden seat will be bought.", value: "B" },
            { label: "C  A footbridge will be built.", value: "C" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q13", number: 13,
          type: "multiple_choice",
          question: "13. Which event raised most funds this year?",
          options: [
            { label: "A  the film show", value: "A" },
            { label: "B  the pancake evening", value: "B" },
            { label: "C  the cookery demonstration", value: "C" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q14", number: 14,
          type: "multiple_choice",
          question: "14. For the first evening with the French visitors host families are advised to",
          options: [
            { label: "A  take them for a walk round the town.", value: "A" },
            { label: "B  go to a local restaurant.", value: "B" },
            { label: "C  have a meal at home.", value: "C" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q15", number: 15,
          type: "multiple_choice",
          question: "15. On Saturday evening there will be the chance to",
          options: [
            { label: "A  listen to a concert.", value: "A" },
            { label: "B  watch a match.", value: "B" },
            { label: "C  take part in a competition.", value: "C" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q16", number: 16,
          groupLabel: `Questions 16–20: Label the map. Write the correct letter (A–H) next to each feature.`,
          type: "multiple_choice",
          question: "16. Farm shop",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q17", number: 17,
          type: "multiple_choice",
          question: "17. Disabled entry",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q18", number: 18,
          type: "multiple_choice",
          question: "18. Adventure playground",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q19", number: 19,
          type: "multiple_choice",
          question: "19. Kitchen gardens",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q20", number: 20,
          type: "multiple_choice",
          question: "20. The Temple of the Four Winds",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose TWO letters, A–E.
Questions 25–30: What is the students' opinion about each food trend? Choose from A–H.`,
      passageText: `Discussion about Colin's bread reuse project, sensor food labels, and food trends.

Opinions (for Q25–30):
A  This is only relevant to young people.
B  This may have disappointing results.
C  This already seems to be widespread.
D  Retailers should do more to encourage this.
E  More financial support is needed for this.
F  Most people know little about this.
G  There should be stricter regulations about this.
H  This could be dangerous.`,
      questions: [
        {
          id: "cam19-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO things did Colin find most satisfying about his bread reuse project?\n\nA  receiving support from local restaurants\nB  finding a good way to prevent waste\nC  overcoming problems in a basic process\nD  experimenting with designs and colours\nE  learning how to apply 3-D printing\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  receiving support from local restaurants", value: "A" },
            { label: "B  finding a good way to prevent waste", value: "B" },
            { label: "C  overcoming problems in a basic process", value: "C" },
            { label: "D  experimenting with designs and colours", value: "D" },
            { label: "E  learning how to apply 3-D printing", value: "E" },
          ],
          correctAnswer: "?/?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q22", number: 22,
          type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  receiving support from local restaurants", value: "A" },
            { label: "B  finding a good way to prevent waste", value: "B" },
            { label: "C  overcoming problems in a basic process", value: "C" },
            { label: "D  experimenting with designs and colours", value: "D" },
            { label: "E  learning how to apply 3-D printing", value: "E" },
          ],
          correctAnswer: "?/?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO ways do the students agree that touch-sensitive sensors for food labels could be developed in future?\n\nA  for use on medical products\nB  to show that food is no longer fit to eat\nC  for use with drinks as well as foods\nD  to provide applications for blind people\nE  to indicate the weight of certain foods\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  for use on medical products", value: "A" },
            { label: "B  to show that food is no longer fit to eat", value: "B" },
            { label: "C  for use with drinks as well as foods", value: "C" },
            { label: "D  to provide applications for blind people", value: "D" },
            { label: "E  to indicate the weight of certain foods", value: "E" },
          ],
          correctAnswer: "?/?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q24", number: 24,
          type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  for use on medical products", value: "A" },
            { label: "B  to show that food is no longer fit to eat", value: "B" },
            { label: "C  for use with drinks as well as foods", value: "C" },
            { label: "D  to provide applications for blind people", value: "D" },
            { label: "E  to indicate the weight of certain foods", value: "E" },
          ],
          correctAnswer: "?/?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What is the students' opinion about each of the following food trends? Choose SIX answers from the box (A–H) and write the correct letter next to each trend.\n\nA  This is only relevant to young people.\nB  This may have disappointing results.\nC  This already seems to be widespread.\nD  Retailers should do more to encourage this.\nE  More financial support is needed for this.\nF  Most people know little about this.\nG  There should be stricter regulations about this.\nH  This could be dangerous.`,
          type: "multiple_choice",
          question: "25. Use of local products",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q26", number: 26,
          type: "multiple_choice",
          question: "26. Reduction in unnecessary packaging",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q27", number: 27,
          type: "multiple_choice",
          question: "27. Gluten-free and lactose-free food",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q28", number: 28,
          type: "multiple_choice",
          question: "28. Use of branded products related to celebrity chefs",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q29", number: 29,
          type: "multiple_choice",
          question: "29. Development of 'ghost kitchens' for takeaway food",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q30", number: 30,
          type: "multiple_choice",
          question: "30. Use of mushrooms for common health concerns",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "?", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Céide Fields
— an important Neolithic archaeological site in the northwest of Ireland

Discovery
●  In the 1930s, a local teacher realised that stones beneath the bog surface were once 31 _______.
●  His 32 _______ became an archaeologist and undertook an investigation of the site:
   –  a traditional method used by local people to dig for 33 _______ was used to identify where stones were located
   –  carbon dating later proved the site was Neolithic.
●  Items are well preserved in the bog because of a lack of 34 _______.

Neolithic farmers
●  Houses were 35 _______ in shape and had a hole in the roof.
●  Neolithic innovations include:
   –  cooking indoors
   –  pots used for storage and to make 36 _______.
●  Each field at Céide was large enough to support a big 37 _______.
●  The fields were probably used to restrict the grazing of animals — no evidence of structures to house them during 38 _______.

Reasons for the decline in farming
●  a decline in 39 _______ quality
●  an increase in 40 _______`,
      questions: [
        { id: "cam19-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. stones beneath the bog surface were once _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. His _______ became an archaeologist", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. a traditional method used to dig for _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. well preserved in the bog because of a lack of _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. Houses were _______ in shape", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. pots used for storage and to make _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. large enough to support a big _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. no evidence of structures to house them during _______", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. a decline in _______ quality", correctAnswer: "?", points: 1 },
        { id: "cam19-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. an increase in _______", correctAnswer: "?", points: 1 },
      ],
    },
  ],
};

export const cambridge19ListeningTests: IELTSTest[] = [cambridge19_listening_t1];
