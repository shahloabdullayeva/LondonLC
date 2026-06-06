import type { IELTSTest } from "./ielts-tests";

const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/audio/${name}`;

export const cambridge10_listening_t1: IELTSTest = {
  id: "cam10-listening-t1",
  title: "Cambridge IELTS 10 – Listening Test 1",
  bookNumber: 10,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam10-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam10-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–6: Complete the notes below. Write ONE WORD for each answer.
Questions 7–10: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `SELF-DRIVE TOURS IN THE USA

Name:                Andrea Brown
Address:             24 1 _______ Road
Postcode:            BH5 2OP
Phone:               (mobile) 077 8664 3091
Heard about company from: 2 _______

Possible self-drive tours

Trip One:
●  Los Angeles: customer wants to visit some 3 _______ parks with her children
●  Yosemite Park: customer wants to stay in a lodge, not a 4 _______

Trip Two:
●  Customer wants to see the 5 _______ on the way to Cambria
●  At Santa Monica: not interested in shopping
●  At San Diego, wants to spend time on the 6 _______

           | Number of days | Total distance | Price (per person) | Includes
Trip One   | 12 days        | 7 _______ km   | £525               | accommodation, car, one 8 _______
Trip Two   | 9 days         | 980 km         | £ 9 _______        | accommodation, car, 10 _______`,
      questions: [
        { id: "cam10-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Address: 24 _______ Road", correctAnswer: "Ardleigh", points: 1 },
        { id: "cam10-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Heard about company from: _______", correctAnswer: "newspaper", points: 1 },
        { id: "cam10-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. Los Angeles: visit some _______ parks", correctAnswer: "theme", points: 1 },
        { id: "cam10-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. wants to stay in a lodge, not a _______", correctAnswer: "tent", points: 1 },
        { id: "cam10-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. wants to see the _______ on the way to Cambria", correctAnswer: "castle", points: 1 },
        { id: "cam10-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. At San Diego, wants to spend time on the _______", correctAnswer: "beach/beaches", points: 1 },
        { id: "cam10-l-t1-s1-q7", number: 7, type: "table_completion", question: "7. Trip One total distance: _______ km", correctAnswer: "2020", points: 1 },
        { id: "cam10-l-t1-s1-q8", number: 8, type: "table_completion", question: "8. Trip One includes: accommodation, car, one _______", correctAnswer: "flight", points: 1 },
        { id: "cam10-l-t1-s1-q9", number: 9, type: "table_completion", question: "9. Trip Two price: £ _______", correctAnswer: "429", points: 1 },
        { id: "cam10-l-t1-s1-q10", number: 10, type: "table_completion", question: "10. Trip Two includes: accommodation, car, _______", correctAnswer: "dinner", points: 1 },
      ],
    },
    {
      id: "cam10-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13–20: Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.`,
      passageTitle: "Joining the leisure club",
      passageText: `Personal Assessment
●  New members should describe any 13 _______.
●  The 14 _______ will be explained to you before you use the equipment.
●  You will be given a six-week 15 _______.

Types of membership
●  There is a compulsory £90 16 _______ fee for members.
●  Gold members are given 17 _______ to all the LP clubs.
●  Premier members are given priority during 18 _______ hours.
●  Premier members can bring some 19 _______ every month.
●  Members should always take their 20 _______ with them.`,
      questions: [
        {
          id: "cam10-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO facilities at the leisure club have recently been improved?\n\nA  the gym\nB  the tracks\nC  the indoor pool\nD  the outdoor pool\nE  the sports training for children\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  the gym", value: "A" },
            { label: "B  the tracks", value: "B" },
            { label: "C  the indoor pool", value: "C" },
            { label: "D  the outdoor pool", value: "D" },
            { label: "E  the sports training for children", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam10-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  the gym", value: "A" },
            { label: "B  the tracks", value: "B" },
            { label: "C  the indoor pool", value: "C" },
            { label: "D  the outdoor pool", value: "D" },
            { label: "E  the sports training for children", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        { id: "cam10-l-t1-s2-q13", number: 13, type: "note_completion", question: "13. New members should describe any _______", correctAnswer: "health problems", points: 1 },
        { id: "cam10-l-t1-s2-q14", number: 14, type: "note_completion", question: "14. The _______ will be explained to you", correctAnswer: "safety rules", points: 1 },
        { id: "cam10-l-t1-s2-q15", number: 15, type: "note_completion", question: "15. given a six-week _______", correctAnswer: "plan", points: 1 },
        { id: "cam10-l-t1-s2-q16", number: 16, type: "note_completion", question: "16. compulsory £90 _______ fee for members", correctAnswer: "joining", points: 1 },
        { id: "cam10-l-t1-s2-q17", number: 17, type: "note_completion", question: "17. Gold members are given _______ to all the LP clubs", correctAnswer: "free entry", points: 1 },
        { id: "cam10-l-t1-s2-q18", number: 18, type: "note_completion", question: "18. priority during _______ hours", correctAnswer: "peak", points: 1 },
        { id: "cam10-l-t1-s2-q19", number: 19, type: "note_completion", question: "19. Premier members can bring some _______ every month", correctAnswer: "guests", points: 1 },
        { id: "cam10-l-t1-s2-q20", number: 20, type: "note_completion", question: "20. always take their _______ with them", correctAnswer: "photo card/photo cards", points: 1 },
      ],
    },
    {
      id: "cam10-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageTitle: "John & professor — Global Design Competition",
      passageText: `●  John needs help preparing for his 26 _______.
●  The professor advises John to make a 27 _______ of his design.
●  John's main problem is getting good quality 28 _______.
●  The professor suggests John apply for a 29 _______.
●  The professor will check the 30 _______ information in John's written report.`,
      questions: [
        {
          id: "cam10-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Students entering the design competition have to",
          options: [
            { label: "A  produce an energy-efficient design.", value: "A" },
            { label: "B  adapt an existing energy-saving appliance.", value: "B" },
            { label: "C  develop a new use for current technology.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. John chose a dishwasher because he wanted to make dishwashers",
          options: [
            { label: "A  more appealing.", value: "A" },
            { label: "B  more common.", value: "B" },
            { label: "C  more economical.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. The stone in John's 'Rockpool' design is used",
          options: [
            { label: "A  for decoration.", value: "A" },
            { label: "B  to switch it on.", value: "B" },
            { label: "C  to stop water escaping.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. In the holding chamber, the carbon dioxide",
          options: [
            { label: "A  changes back to a gas.", value: "A" },
            { label: "B  dries the dishes.", value: "B" },
            { label: "C  is allowed to cool.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t1-s3-q25", number: 25, type: "multiple_choice",
          question: "25. At the end of the cleaning process, the carbon dioxide",
          options: [
            { label: "A  is released into the air.", value: "A" },
            { label: "B  is disposed of with the waste.", value: "B" },
            { label: "C  is collected ready to be re-used.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam10-l-t1-s3-q26", number: 26, type: "note_completion", question: "26. John needs help preparing for his _______", correctAnswer: "presentation", points: 1 },
        { id: "cam10-l-t1-s3-q27", number: 27, type: "note_completion", question: "27. advises John to make a _______ of his design", correctAnswer: "model", points: 1 },
        { id: "cam10-l-t1-s3-q28", number: 28, type: "note_completion", question: "28. main problem is getting good quality _______", correctAnswer: "material/materials", points: 1 },
        { id: "cam10-l-t1-s3-q29", number: 29, type: "note_completion", question: "29. suggests John apply for a _______", correctAnswer: "grant", points: 1 },
        { id: "cam10-l-t1-s3-q30", number: 30, type: "note_completion", question: "30. check the _______ information in John's written report", correctAnswer: "technical", points: 1 },
      ],
    },
    {
      id: "cam10-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `THE SPIRIT BEAR

General facts
●  It is a white bear belonging to the black bear family.
●  Its colour comes from an uncommon 31 _______.
●  Local people believe that it has unusual 32 _______.
●  They protect the bear from 33 _______.

Habitat
●  The bear's relationship with the forest is complex.
●  Tree roots stop 34 _______ along salmon streams.
●  The bears' feeding habits provide nutrients for forest vegetation.
●  It is currently found on a small number of 35 _______.

Threats
●  Habitat is being lost due to deforestation and construction of 36 _______ by logging companies.
●  Unrestricted 37 _______ is affecting the salmon supply.
●  The bears' existence is also threatened by their low rate of 38 _______.

Going forward
●  Interested parties are working together.
●  Logging companies must improve their 39 _______ of logging.
●  Maintenance and 40 _______ of the spirit bears' territory is needed.`,
      questions: [
        { id: "cam10-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. Its colour comes from an uncommon _______", correctAnswer: "gene", points: 1 },
        { id: "cam10-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. Local people believe it has unusual _______", correctAnswer: "power/powers", points: 1 },
        { id: "cam10-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. They protect the bear from _______", correctAnswer: "strangers", points: 1 },
        { id: "cam10-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. Tree roots stop _______ along salmon streams", correctAnswer: "erosion", points: 1 },
        { id: "cam10-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. found on a small number of _______", correctAnswer: "islands", points: 1 },
        { id: "cam10-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. construction of _______ by logging companies", correctAnswer: "roads", points: 1 },
        { id: "cam10-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. Unrestricted _______ is affecting the salmon supply", correctAnswer: "fishing", points: 1 },
        { id: "cam10-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. low rate of _______", correctAnswer: "reproduction", points: 1 },
        { id: "cam10-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. improve their _______ of logging", correctAnswer: "method/methods", points: 1 },
        { id: "cam10-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. Maintenance and _______ of the spirit bears' territory", correctAnswer: "expansion", points: 1 },
      ],
    },
  ],
};

export const cambridge10_listening_t2: IELTSTest = {
  id: "cam10-listening-t2",
  title: "Cambridge IELTS 10 – Listening Test 2",
  bookNumber: 10,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam10-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam10-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Transport Survey

Travelled to town today: by bus

Name: Luisa 1 _______
Address: 2 _______ White Stone Rd
Area: Bradfield
Postcode: 3 _______
Occupation: 4 _______
Reason for visit to town: to go to the 5 _______

Suggestions for improvement:
●  better 6 _______
●  have more footpaths
●  more frequent 7 _______

Things that would encourage cycling to work:
●  having 8 _______ parking places for bicycles
●  being able to use a 9 _______ at work
●  the opportunity to have cycling 10 _______ on busy roads`,
      questions: [
        { id: "cam10-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. Name: Luisa _______", correctAnswer: "Hardie", points: 1 },
        { id: "cam10-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. Address: _______ White Stone Rd", correctAnswer: "19", points: 1 },
        { id: "cam10-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. Postcode: _______", correctAnswer: "GT8 2LC", points: 1 },
        { id: "cam10-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. Occupation: _______", correctAnswer: "hairdresser", points: 1 },
        { id: "cam10-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Reason for visit: to go to the _______", correctAnswer: "dentist/dentist's", points: 1 },
        { id: "cam10-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. better _______", correctAnswer: "lighting", points: 1 },
        { id: "cam10-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. more frequent _______", correctAnswer: "trains", points: 1 },
        { id: "cam10-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. having _______ parking places for bicycles", correctAnswer: "safe", points: 1 },
        { id: "cam10-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. being able to use a _______ at work", correctAnswer: "shower", points: 1 },
        { id: "cam10-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. opportunity to have cycling _______ on busy roads", correctAnswer: "training", points: 1 },
      ],
    },
    {
      id: "cam10-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Match each area of the world represented in the playground with a feature. Choose SIX answers from the box (A–I).`,
      passageTitle: "New city developments",
      questions: [
        {
          id: "cam10-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. The idea for the two new developments in the city came from",
          options: [
            { label: "A  local people.", value: "A" },
            { label: "B  the City Council.", value: "B" },
            { label: "C  the SWRDC.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What is unusual about Brackenside pool?",
          options: [
            { label: "A  its architectural style", value: "A" },
            { label: "B  its heating system", value: "B" },
            { label: "C  its method of water treatment", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Local newspapers have raised worries about",
          options: [
            { label: "A  the late opening date.", value: "A" },
            { label: "B  the cost of the project.", value: "B" },
            { label: "C  the size of the facilities.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What decision has not yet been made about the pool?",
          options: [
            { label: "A  whose statue will be at the door", value: "A" },
            { label: "B  the exact opening times", value: "B" },
            { label: "C  who will open it", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Which feature is related to each of the following areas of the world represented in the playground? Choose SIX answers from the box (A–I).\n\nA  ancient forts\nB  waterways\nC  ice and snow\nD  jewels\nE  local animals\nF  mountains\nG  music and film\nH  space travel\nI  volcanoes`,
          type: "matching", question: "15. Asia",
          options: [
            { label: "A  ancient forts", value: "A" },
            { label: "B  waterways", value: "B" },
            { label: "C  ice and snow", value: "C" },
            { label: "D  jewels", value: "D" },
            { label: "E  local animals", value: "E" },
            { label: "F  mountains", value: "F" },
            { label: "G  music and film", value: "G" },
            { label: "H  space travel", value: "H" },
            { label: "I  volcanoes", value: "I" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q16", number: 16, type: "matching", question: "16. Antarctica",
          options: [
            { label: "A  ancient forts", value: "A" },
            { label: "B  waterways", value: "B" },
            { label: "C  ice and snow", value: "C" },
            { label: "D  jewels", value: "D" },
            { label: "E  local animals", value: "E" },
            { label: "F  mountains", value: "F" },
            { label: "G  music and film", value: "G" },
            { label: "H  space travel", value: "H" },
            { label: "I  volcanoes", value: "I" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q17", number: 17, type: "matching", question: "17. South America",
          options: [
            { label: "A  ancient forts", value: "A" },
            { label: "B  waterways", value: "B" },
            { label: "C  ice and snow", value: "C" },
            { label: "D  jewels", value: "D" },
            { label: "E  local animals", value: "E" },
            { label: "F  mountains", value: "F" },
            { label: "G  music and film", value: "G" },
            { label: "H  space travel", value: "H" },
            { label: "I  volcanoes", value: "I" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q18", number: 18, type: "matching", question: "18. North America",
          options: [
            { label: "A  ancient forts", value: "A" },
            { label: "B  waterways", value: "B" },
            { label: "C  ice and snow", value: "C" },
            { label: "D  jewels", value: "D" },
            { label: "E  local animals", value: "E" },
            { label: "F  mountains", value: "F" },
            { label: "G  music and film", value: "G" },
            { label: "H  space travel", value: "H" },
            { label: "I  volcanoes", value: "I" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q19", number: 19, type: "matching", question: "19. Europe",
          options: [
            { label: "A  ancient forts", value: "A" },
            { label: "B  waterways", value: "B" },
            { label: "C  ice and snow", value: "C" },
            { label: "D  jewels", value: "D" },
            { label: "E  local animals", value: "E" },
            { label: "F  mountains", value: "F" },
            { label: "G  music and film", value: "G" },
            { label: "H  space travel", value: "H" },
            { label: "I  volcanoes", value: "I" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t2-s2-q20", number: 20, type: "matching", question: "20. Africa",
          options: [
            { label: "A  ancient forts", value: "A" },
            { label: "B  waterways", value: "B" },
            { label: "C  ice and snow", value: "C" },
            { label: "D  jewels", value: "D" },
            { label: "E  local animals", value: "E" },
            { label: "F  mountains", value: "F" },
            { label: "G  music and film", value: "G" },
            { label: "H  space travel", value: "H" },
            { label: "I  volcanoes", value: "I" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam10-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23 & 24: Choose TWO letters, A–E.
Questions 25–30: Choose the correct letter, A, B or C.`,
      passageTitle: "Victor & Olivia — Thor Heyerdahl",
      questions: [
        {
          id: "cam10-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO hobbies was Thor Heyerdahl very interested in as a youth?\n\nA  camping\nB  climbing\nC  collecting\nD  hunting\nE  reading\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  camping", value: "A" },
            { label: "B  climbing", value: "B" },
            { label: "C  collecting", value: "C" },
            { label: "D  hunting", value: "D" },
            { label: "E  reading", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  camping", value: "A" },
            { label: "B  climbing", value: "B" },
            { label: "C  collecting", value: "C" },
            { label: "D  hunting", value: "D" },
            { label: "E  reading", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich do the speakers say are the TWO reasons why Heyerdahl went to live on an island?\n\nA  to examine ancient carvings\nB  to experience an isolated place\nC  to formulate a new theory\nD  to learn survival skills\nE  to study the impact of an extreme environment\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  to examine ancient carvings", value: "A" },
            { label: "B  to experience an isolated place", value: "B" },
            { label: "C  to formulate a new theory", value: "C" },
            { label: "D  to learn survival skills", value: "D" },
            { label: "E  to study the impact of an extreme environment", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  to examine ancient carvings", value: "A" },
            { label: "B  to experience an isolated place", value: "B" },
            { label: "C  to formulate a new theory", value: "C" },
            { label: "D  to learn survival skills", value: "D" },
            { label: "E  to study the impact of an extreme environment", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q25", number: 25,
          groupLabel: `Questions 25–30: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "25. According to Victor and Olivia, academics thought that Polynesian migration from the east was impossible due to",
          options: [
            { label: "A  the fact that Eastern countries were far away.", value: "A" },
            { label: "B  the lack of materials for boat building.", value: "B" },
            { label: "C  the direction of the winds and currents.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q26", number: 26, type: "multiple_choice",
          question: "26. Which do the speakers agree was the main reason for Heyerdahl's raft journey?",
          options: [
            { label: "A  to overcome a research setback", value: "A" },
            { label: "B  to demonstrate a personal quality", value: "B" },
            { label: "C  to test a new theory", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q27", number: 27, type: "multiple_choice",
          question: "27. What was most important to Heyerdahl about his raft journey?",
          options: [
            { label: "A  the fact that he was the first person to do it", value: "A" },
            { label: "B  the speed of crossing the Pacific", value: "B" },
            { label: "C  the use of authentic construction methods", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Why did Heyerdahl go to Easter Island?",
          options: [
            { label: "A  to build a stone statue", value: "A" },
            { label: "B  to sail a reed boat", value: "B" },
            { label: "C  to learn the local language", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q29", number: 29, type: "multiple_choice",
          question: "29. In Olivia's opinion, Heyerdahl's greatest influence was on",
          options: [
            { label: "A  theories about Polynesian origins.", value: "A" },
            { label: "B  the development of archaeological methodology.", value: "B" },
            { label: "C  establishing archaeology as an academic subject.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t2-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Which criticism do the speakers make of William Oliver's textbook?",
          options: [
            { label: "A  Its style is out of date.", value: "A" },
            { label: "B  Its content is over-simplified.", value: "B" },
            { label: "C  Its methodology is flawed.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    {
      id: "cam10-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `THE FUTURE OF MANAGEMENT

Business markets
●  greater 31 _______ among companies
●  increase in power of large 32 _______ companies
●  rising 33 _______ in certain countries

External influences on businesses
●  more discussion with 34 _______ before making business decisions
●  environmental concerns which may lead to more 35 _______

Business structures
●  more teams will be formed to work on a particular 36 _______
●  businesses may need to offer hours that are 37 _______, or the chance to work remotely

Management styles
●  increasing need for managers to provide good 38 _______
●  changes influenced by 39 _______ taking senior roles

Changes in the economy
●  service sector continues to be important
●  increasing value of intellectual property
●  more and more 40 _______ workers`,
      questions: [
        { id: "cam10-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. greater _______ among companies", correctAnswer: "competition", points: 1 },
        { id: "cam10-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. increase in power of large _______ companies", correctAnswer: "global", points: 1 },
        { id: "cam10-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. rising _______ in certain countries", correctAnswer: "demand", points: 1 },
        { id: "cam10-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. more discussion with _______ before making business decisions", correctAnswer: "customers", points: 1 },
        { id: "cam10-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. environmental concerns which may lead to more _______", correctAnswer: "regulation", points: 1 },
        { id: "cam10-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. teams will be formed to work on a particular _______", correctAnswer: "project", points: 1 },
        { id: "cam10-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. need to offer hours that are _______", correctAnswer: "flexible", points: 1 },
        { id: "cam10-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. need for managers to provide good _______", correctAnswer: "leadership", points: 1 },
        { id: "cam10-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. changes influenced by _______ taking senior roles", correctAnswer: "women", points: 1 },
        { id: "cam10-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. more and more _______ workers", correctAnswer: "self-employed", points: 1 },
      ],
    },
  ],
};

export const cambridge10_listening_t3: IELTSTest = {
  id: "cam10-listening-t3",
  title: "Cambridge IELTS 10 – Listening Test 3",
  bookNumber: 10,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam10-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam10-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Early Learning Childcare Centre — Enrolment Form

Parent or guardian: Carol Smith

Personal Details
Child's name: Kate
Age: 1 _______
Address: 2 _______ Road, Woodside, 4032
Phone: 3345 9865

Childcare Information
Days enrolled for: Monday and 3 _______
Start time: 4 _______ a.m.
Childcare group: the 5 _______ group
Which meal/s are required each day? 6 _______
Medical conditions: needs 7 _______
Emergency contact: Jenny 8 _______
Phone: 3346 7523
Relationship to child: 9 _______

Fees
Will pay each 10 _______`,
      questions: [
        { id: "cam10-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. Age: _______", correctAnswer: "4", points: 1 },
        { id: "cam10-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. Address: _______ Road, Woodside, 4032", correctAnswer: "46 Wombat", points: 1 },
        { id: "cam10-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. Days enrolled for: Monday and _______", correctAnswer: "Thursday", points: 1 },
        { id: "cam10-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. Start time: _______ a.m.", correctAnswer: "8.30", points: 1 },
        { id: "cam10-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. Childcare group: the _______ group", correctAnswer: "red", points: 1 },
        { id: "cam10-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. Which meal/s are required each day? _______", correctAnswer: "lunch", points: 1 },
        { id: "cam10-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. Medical conditions: needs _______", correctAnswer: "glasses", points: 1 },
        { id: "cam10-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. Emergency contact: Jenny _______", correctAnswer: "BALL", points: 1 },
        { id: "cam10-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. Relationship to child: _______", correctAnswer: "aunt", points: 1 },
        { id: "cam10-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. Will pay each _______", correctAnswer: "month", points: 1 },
      ],
    },
    {
      id: "cam10-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13–15: Choose the correct letter, A, B or C.
Questions 16–20: Match each comment with a dolphin. Write A, B, C or D next to each comment.`,
      passageTitle: "Alice — Dolphin Conservation Trust",
      questions: [
        {
          id: "cam10-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO things does Alice say about the Dolphin Conservation Trust?\n\nA  Children make up most of the membership.\nB  It's the country's largest conservation organisation.\nC  It helps finance campaigns for changes in fishing practices.\nD  It employs several dolphin experts full-time.\nE  Volunteers help in various ways.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  Children make up most of the membership.", value: "A" },
            { label: "B  It's the country's largest conservation organisation.", value: "B" },
            { label: "C  It helps finance campaigns for changes in fishing practices.", value: "C" },
            { label: "D  It employs several dolphin experts full-time.", value: "D" },
            { label: "E  Volunteers help in various ways.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  Children make up most of the membership.", value: "A" },
            { label: "B  It's the country's largest conservation organisation.", value: "B" },
            { label: "C  It helps finance campaigns for changes in fishing practices.", value: "C" },
            { label: "D  It employs several dolphin experts full-time.", value: "D" },
            { label: "E  Volunteers help in various ways.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q13", number: 13,
          groupLabel: `Questions 13–15: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "13. Why is Alice so pleased the Trust has won the Charity Commission award?",
          options: [
            { label: "A  It has brought in extra money.", value: "A" },
            { label: "B  It made the work of the trust better known.", value: "B" },
            { label: "C  It has attracted more members.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Alice says oil exploration causes problems to dolphins because of",
          options: [
            { label: "A  noise.", value: "A" },
            { label: "B  oil leaks.", value: "B" },
            { label: "C  movement of ships.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q15", number: 15, type: "multiple_choice",
          question: "15. Alice became interested in dolphins when",
          options: [
            { label: "A  she saw one swimming near her home.", value: "A" },
            { label: "B  she heard a speaker at her school.", value: "B" },
            { label: "C  she read a book about them.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q16", number: 16,
          groupLabel: `Questions 16–20: Which dolphin does Alice make each of the following comments about? Write the correct letter, A, B, C or D, next to each comment.\n\nA  Moondancer\nB  Echo\nC  Kiwi\nD  Samson\n\n(Letters may be used more than once.)`,
          type: "matching", question: "16. It has not been seen this year.",
          options: [
            { label: "A  Moondancer", value: "A" },
            { label: "B  Echo", value: "B" },
            { label: "C  Kiwi", value: "C" },
            { label: "D  Samson", value: "D" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q17", number: 17, type: "matching", question: "17. It is photographed more than the others.",
          options: [
            { label: "A  Moondancer", value: "A" },
            { label: "B  Echo", value: "B" },
            { label: "C  Kiwi", value: "C" },
            { label: "D  Samson", value: "D" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q18", number: 18, type: "matching", question: "18. It is always very energetic.",
          options: [
            { label: "A  Moondancer", value: "A" },
            { label: "B  Echo", value: "B" },
            { label: "C  Kiwi", value: "C" },
            { label: "D  Samson", value: "D" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q19", number: 19, type: "matching", question: "19. It is the newest one in the scheme.",
          options: [
            { label: "A  Moondancer", value: "A" },
            { label: "B  Echo", value: "B" },
            { label: "C  Kiwi", value: "C" },
            { label: "D  Samson", value: "D" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam10-l-t3-s2-q20", number: 20, type: "matching", question: "20. It has an unusual shape.",
          options: [
            { label: "A  Moondancer", value: "A" },
            { label: "B  Echo", value: "B" },
            { label: "C  Kiwi", value: "C" },
            { label: "D  Samson", value: "D" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    {
      id: "cam10-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Match each stage in doing the 'year abroad' option with an action. Choose FIVE answers from the box (A–G).`,
      passageTitle: "Rob — Theatre Studies course",
      questions: [
        {
          id: "cam10-l-t3-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What helped Rob to prepare to play the character of a doctor?",
          options: [
            { label: "A  the stories his grandfather told him", value: "A" },
            { label: "B  the times when he watched his grandfather working", value: "B" },
            { label: "C  the way he imagined his grandfather at work", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q22", number: 22, type: "multiple_choice",
          question: "22. In the play's first scene, the boredom of village life was suggested by",
          options: [
            { label: "A  repetition of words and phrases.", value: "A" },
            { label: "B  scenery painted in dull colours.", value: "B" },
            { label: "C  long pauses within conversations.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q23", number: 23, type: "multiple_choice",
          question: "23. What has Rob learned about himself through working in a group?",
          options: [
            { label: "A  He likes to have clear guidelines.", value: "A" },
            { label: "B  He copes well with stress.", value: "B" },
            { label: "C  He thinks he is a good leader.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q24", number: 24, type: "multiple_choice",
          question: "24. To support the production, research material was used which described",
          options: [
            { label: "A  political developments.", value: "A" },
            { label: "B  changing social attitudes.", value: "B" },
            { label: "C  economic transformations.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What problem did the students overcome in the final rehearsal?",
          options: [
            { label: "A  one person forgetting their words", value: "A" },
            { label: "B  an equipment failure", value: "B" },
            { label: "C  the injury of one character", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q26", number: 26,
          groupLabel: `Questions 26–30: What action is needed for the following stages in doing the 'year abroad' option? Choose FIVE answers from the box (A–G).\n\nA  be on time\nB  get a letter of recommendation\nC  plan for the final year\nD  make sure the institution's focus is relevant\nE  show ability in Theatre Studies\nF  make travel arrangements and bookings\nG  ask for help`,
          type: "matching", question: "26. in the second year of the course",
          options: [
            { label: "A  be on time", value: "A" },
            { label: "B  get a letter of recommendation", value: "B" },
            { label: "C  plan for the final year", value: "C" },
            { label: "D  make sure the institution's focus is relevant", value: "D" },
            { label: "E  show ability in Theatre Studies", value: "E" },
            { label: "F  make travel arrangements and bookings", value: "F" },
            { label: "G  ask for help", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q27", number: 27, type: "matching", question: "27. when first choosing where to go",
          options: [
            { label: "A  be on time", value: "A" },
            { label: "B  get a letter of recommendation", value: "B" },
            { label: "C  plan for the final year", value: "C" },
            { label: "D  make sure the institution's focus is relevant", value: "D" },
            { label: "E  show ability in Theatre Studies", value: "E" },
            { label: "F  make travel arrangements and bookings", value: "F" },
            { label: "G  ask for help", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q28", number: 28, type: "matching", question: "28. when sending in your choices",
          options: [
            { label: "A  be on time", value: "A" },
            { label: "B  get a letter of recommendation", value: "B" },
            { label: "C  plan for the final year", value: "C" },
            { label: "D  make sure the institution's focus is relevant", value: "D" },
            { label: "E  show ability in Theatre Studies", value: "E" },
            { label: "F  make travel arrangements and bookings", value: "F" },
            { label: "G  ask for help", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q29", number: 29, type: "matching", question: "29. when writing your personal statement",
          options: [
            { label: "A  be on time", value: "A" },
            { label: "B  get a letter of recommendation", value: "B" },
            { label: "C  plan for the final year", value: "C" },
            { label: "D  make sure the institution's focus is relevant", value: "D" },
            { label: "E  show ability in Theatre Studies", value: "E" },
            { label: "F  make travel arrangements and bookings", value: "F" },
            { label: "G  ask for help", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam10-l-t3-s3-q30", number: 30, type: "matching", question: "30. when doing the year abroad",
          options: [
            { label: "A  be on time", value: "A" },
            { label: "B  get a letter of recommendation", value: "B" },
            { label: "C  plan for the final year", value: "C" },
            { label: "D  make sure the institution's focus is relevant", value: "D" },
            { label: "E  show ability in Theatre Studies", value: "E" },
            { label: "F  make travel arrangements and bookings", value: "F" },
            { label: "G  ask for help", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    {
      id: "cam10-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `'Self-regulatory focus theory' and leadership

Self-regulatory focus theory
People's focus is to approach pleasure or avoid pain
Promotion goals focus on 31 _______
Prevention goals emphasise avoiding punishment

Factors that affect people's focus

The Chronic Factor
●  comes from one's 32 _______

The 33 _______ Factor
●  we are more likely to focus on promotion goals when with a 34 _______
●  we are more likely to focus on prevention goals with our boss

How people's focus affects them
Promotion Focus: People think about an ideal version of themselves, their 35 _______ and their gains.
Prevention Focus: People think about their 'ought' self and their obligations

Leaders
Leadership behaviour and 36 _______ affects people's focus

Transformational Leaders:
●  pay special attention to the 37 _______ of their followers
●  passionately communicate a clear 38 _______
●  inspire promotion focus in followers

Transactional Leaders:
●  create 39 _______ to make expectations clear
●  emphasise the results of a mistake
●  inspire prevention focus in followers

Conclusion
Promotion Focus is good for jobs requiring 40 _______
Prevention Focus is good for work such as a surgeon
Leaders' actions affect which focus people use`,
      questions: [
        { id: "cam10-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. Promotion goals focus on _______", correctAnswer: "achievement/achievements", points: 1 },
        { id: "cam10-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. comes from one's _______", correctAnswer: "personality/character", points: 1 },
        { id: "cam10-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. The _______ Factor", correctAnswer: "Situational", points: 1 },
        { id: "cam10-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. focus on promotion goals when with a _______", correctAnswer: "friend", points: 1 },
        { id: "cam10-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. ideal version of themselves, their _______ and their gains", correctAnswer: "aspirations/ambitions", points: 1 },
        { id: "cam10-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. Leadership behaviour and _______ affects people's focus", correctAnswer: "style", points: 1 },
        { id: "cam10-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. pay special attention to the _______ of their followers", correctAnswer: "development", points: 1 },
        { id: "cam10-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. passionately communicate a clear _______", correctAnswer: "vision", points: 1 },
        { id: "cam10-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. create _______ to make expectations clear", correctAnswer: "structures", points: 1 },
        { id: "cam10-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. Promotion Focus is good for jobs requiring _______", correctAnswer: "innovation/innovations", points: 1 },
      ],
    },
  ],
};

export const cambridge10_listening_t4: IELTSTest = {
  id: "cam10-listening-t4",
  title: "Cambridge IELTS 10 – Listening Test 4",
  bookNumber: 10,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam10-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam10-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–6: Complete the notes below. Write ONE WORD ONLY for each answer.
Questions 7–10: Complete the table below. Write ONE WORD ONLY for each answer.`,
      passageText: `THORNDYKE'S BUILDERS

Customer heard about Thorndyke's from a friend

Name:                Edith 1 _______
Address:             Flat 4, 2 _______ Park Flats
                       (Behind the 3 _______)
Phone number:       875934
Best time to contact customer: during the 4 _______
Where to park:       opposite entrance next to the 5 _______
Needs full quote showing all the jobs and the 6 _______

Area    | Work to be done                          | Notes
Kitchen | Replace the 7 _______ in the door        | Fix tomorrow
        | Paint wall above the 8 _______           | Strip paint and plaster approximately one 9 _______ in advance
Garden  | One 10 _______ needs replacing (end of garden) |`,
      questions: [
        { id: "cam10-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. Name: Edith _______", correctAnswer: "Pargetter", points: 1 },
        { id: "cam10-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. Flat 4, _______ Park Flats", correctAnswer: "East", points: 1 },
        { id: "cam10-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. (Behind the _______)", correctAnswer: "library", points: 1 },
        { id: "cam10-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. Best time to contact: during the _______", correctAnswer: "morning/mornings", points: 1 },
        { id: "cam10-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. Where to park: opposite entrance next to the _______", correctAnswer: "postbox", points: 1 },
        { id: "cam10-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. Needs full quote showing all the jobs and the _______", correctAnswer: "prices", points: 1 },
        { id: "cam10-l-t4-s1-q7", number: 7, type: "table_completion", question: "7. Replace the _______ in the door", correctAnswer: "glass", points: 1 },
        { id: "cam10-l-t4-s1-q8", number: 8, type: "table_completion", question: "8. Paint wall above the _______", correctAnswer: "cooker", points: 1 },
        { id: "cam10-l-t4-s1-q9", number: 9, type: "table_completion", question: "9. Strip paint and plaster approximately one _______ in advance", correctAnswer: "week", points: 1 },
        { id: "cam10-l-t4-s1-q10", number: 10, type: "table_completion", question: "10. One _______ needs replacing (end of garden)", correctAnswer: "fence", points: 1 },
      ],
    },
    {
      id: "cam10-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–15: Choose the correct letter, A, B or C.
Questions 16–20: Complete the table below. Write NO MORE THAN TWO WORDS for each answer.`,
      passageTitle: "MANHAM PORT",
      passageText: `Tourist attractions in Manham

Place             | Features and activities                                     | Advice
copper mine       | specially adapted miners' 16 _______ take visitors into     | the mine is 17 _______ and enclosed –
                  |   the mountain                                              |   unsuitable for children and animals
village school    | classrooms and a special exhibition of 18 _______           | a 19 _______ is recommended
'The George'      | the ship's wheel (was lost but has now been restored)       | children shouldn't use the 20 _______
(old sailing ship)|                                                             |`,
      questions: [
        {
          id: "cam10-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11–15: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Why did a port originally develop at Manham?",
          options: [
            { label: "A  It was safe from enemy attack.", value: "A" },
            { label: "B  It was convenient for river transport.", value: "B" },
            { label: "C  It had a good position on the sea coast.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t4-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What caused Manham's sudden expansion during the Industrial Revolution?",
          options: [
            { label: "A  the improvement in mining techniques", value: "A" },
            { label: "B  the increase in demand for metals", value: "B" },
            { label: "C  the discovery of tin in the area", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t4-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Why did rocks have to be sent away from Manham to be processed?",
          options: [
            { label: "A  shortage of fuel", value: "A" },
            { label: "B  poor transport systems", value: "B" },
            { label: "C  lack of skills among local people", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t4-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What happened when the port declined in the twentieth century?",
          options: [
            { label: "A  The workers went away.", value: "A" },
            { label: "B  Traditional skills were lost.", value: "B" },
            { label: "C  Buildings were used for new purposes.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam10-l-t4-s2-q15", number: 15, type: "multiple_choice",
          question: "15. What did the Manham Trust hope to do?",
          options: [
            { label: "A  discover the location of the original port", value: "A" },
            { label: "B  provide jobs for the unemployed", value: "B" },
            { label: "C  rebuild the port complex", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam10-l-t4-s2-q16", number: 16, type: "table_completion", question: "16. specially adapted miners' _______ take visitors into the mountain", correctAnswer: "trains", points: 1 },
        { id: "cam10-l-t4-s2-q17", number: 17, type: "table_completion", question: "17. the mine is _______ and enclosed", correctAnswer: "dark", points: 1 },
        { id: "cam10-l-t4-s2-q18", number: 18, type: "table_completion", question: "18. classrooms and a special exhibition of _______", correctAnswer: "games", points: 1 },
        { id: "cam10-l-t4-s2-q19", number: 19, type: "table_completion", question: "19. a _______ is recommended", correctAnswer: "guided tour", points: 1 },
        { id: "cam10-l-t4-s2-q20", number: 20, type: "table_completion", question: "20. children shouldn't use the _______", correctAnswer: "ladder/ladders", points: 1 },
      ],
    },
    {
      id: "cam10-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23 & 24: Choose TWO letters, A–E.
Questions 25–30: Match each stage of the work placement procedure with a source of information. Choose SIX answers from the box (A–G).`,
      passageTitle: "Laura's work placement — Tim's planning",
      questions: [
        {
          id: "cam10-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO skills did Laura improve as a result of her work placement?\n\nA  communication\nB  design\nC  IT\nD  marketing\nE  organisation\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  communication", value: "A" },
            { label: "B  design", value: "B" },
            { label: "C  IT", value: "C" },
            { label: "D  marketing", value: "D" },
            { label: "E  organisation", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  communication", value: "A" },
            { label: "B  design", value: "B" },
            { label: "C  IT", value: "C" },
            { label: "D  marketing", value: "D" },
            { label: "E  organisation", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO immediate benefits did the company get from Laura's work placement?\n\nA  updates for its software\nB  cost savings\nC  an improved image\nD  new clients\nE  a growth in sales\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  updates for its software", value: "A" },
            { label: "B  cost savings", value: "B" },
            { label: "C  an improved image", value: "C" },
            { label: "D  new clients", value: "D" },
            { label: "E  a growth in sales", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  updates for its software", value: "A" },
            { label: "B  cost savings", value: "B" },
            { label: "C  an improved image", value: "C" },
            { label: "D  new clients", value: "D" },
            { label: "E  a growth in sales", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What source of information should Tim use at each of the following stages of the work placement? Choose SIX answers from the box (A–G).\n\nA  company manager\nB  company's personnel department\nC  personal tutor\nD  psychology department\nE  mentor\nF  university careers officer\nG  internet`,
          type: "matching", question: "25. obtaining booklet",
          options: [
            { label: "A  company manager", value: "A" },
            { label: "B  company's personnel department", value: "B" },
            { label: "C  personal tutor", value: "C" },
            { label: "D  psychology department", value: "D" },
            { label: "E  mentor", value: "E" },
            { label: "F  university careers officer", value: "F" },
            { label: "G  internet", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q26", number: 26, type: "matching", question: "26. discussing options",
          options: [
            { label: "A  company manager", value: "A" },
            { label: "B  company's personnel department", value: "B" },
            { label: "C  personal tutor", value: "C" },
            { label: "D  psychology department", value: "D" },
            { label: "E  mentor", value: "E" },
            { label: "F  university careers officer", value: "F" },
            { label: "G  internet", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q27", number: 27, type: "matching", question: "27. getting updates",
          options: [
            { label: "A  company manager", value: "A" },
            { label: "B  company's personnel department", value: "B" },
            { label: "C  personal tutor", value: "C" },
            { label: "D  psychology department", value: "D" },
            { label: "E  mentor", value: "E" },
            { label: "F  university careers officer", value: "F" },
            { label: "G  internet", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q28", number: 28, type: "matching", question: "28. responding to invitation for interview",
          options: [
            { label: "A  company manager", value: "A" },
            { label: "B  company's personnel department", value: "B" },
            { label: "C  personal tutor", value: "C" },
            { label: "D  psychology department", value: "D" },
            { label: "E  mentor", value: "E" },
            { label: "F  university careers officer", value: "F" },
            { label: "G  internet", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q29", number: 29, type: "matching", question: "29. informing about outcome of interview",
          options: [
            { label: "A  company manager", value: "A" },
            { label: "B  company's personnel department", value: "B" },
            { label: "C  personal tutor", value: "C" },
            { label: "D  psychology department", value: "D" },
            { label: "E  mentor", value: "E" },
            { label: "F  university careers officer", value: "F" },
            { label: "G  internet", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam10-l-t4-s3-q30", number: 30, type: "matching", question: "30. requesting a reference",
          options: [
            { label: "A  company manager", value: "A" },
            { label: "B  company's personnel department", value: "B" },
            { label: "C  personal tutor", value: "C" },
            { label: "D  psychology department", value: "D" },
            { label: "E  mentor", value: "E" },
            { label: "F  university careers officer", value: "F" },
            { label: "G  internet", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    {
      id: "cam10-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–33: Choose the correct letter, A, B or C.
Questions 34–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageTitle: "Nanotechnology: technology on a small scale",
      passageText: `Uses of Nanotechnology

Transport
●  Nanotechnology could allow the development of stronger 34 _______
●  Planes would be much lighter in weight.
●  35 _______ travel will be made available to the masses.

Technology
●  Computers will be even smaller, faster, and will have a greater 36 _______
●  37 _______ energy will become more affordable.

The Environment
●  Nano-robots could rebuild the ozone layer.
●  Pollutants such as 38 _______ could be removed from water
●  There will be no 39 _______ from manufacturing.

Health and Medicine
●  New methods of food production could eradicate famine.
●  Analysis of medical 40 _______ will be speeded up.
●  Life expectancy could be increased.`,
      questions: [
        {
          id: "cam10-l-t4-s4-q31", number: 31,
          groupLabel: `Questions 31–33: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "31. The speaker says that one problem with nanotechnology is that",
          options: [
            { label: "A  it could threaten our way of life.", value: "A" },
            { label: "B  it could be used to spy on people.", value: "B" },
            { label: "C  it is misunderstood by the public.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam10-l-t4-s4-q32", number: 32, type: "multiple_choice",
          question: "32. According to the speaker, some scientists believe that nano-particles",
          options: [
            { label: "A  should be restricted to secure environments.", value: "A" },
            { label: "B  should be used with more caution.", value: "B" },
            { label: "C  should only be developed for essential products.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam10-l-t4-s4-q33", number: 33, type: "multiple_choice",
          question: "33. In the speaker's opinion, research into nanotechnology",
          options: [
            { label: "A  has yet to win popular support.", value: "A" },
            { label: "B  could be seen as unethical.", value: "B" },
            { label: "C  ought to be continued.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam10-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. development of stronger _______", correctAnswer: "metal/metals", points: 1 },
        { id: "cam10-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. _______ travel will be made available to the masses", correctAnswer: "space", points: 1 },
        { id: "cam10-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. computers will have a greater _______", correctAnswer: "memory", points: 1 },
        { id: "cam10-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. _______ energy will become more affordable", correctAnswer: "solar", points: 1 },
        { id: "cam10-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. Pollutants such as _______ could be removed from water", correctAnswer: "oil", points: 1 },
        { id: "cam10-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. no _______ from manufacturing", correctAnswer: "waste", points: 1 },
        { id: "cam10-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. Analysis of medical _______ will be speeded up", correctAnswer: "tests", points: 1 },
      ],
    },
  ],
};

export const cambridge10ListeningTests: IELTSTest[] = [
  cambridge10_listening_t1,
  cambridge10_listening_t2,
  cambridge10_listening_t3,
  cambridge10_listening_t4,
];
