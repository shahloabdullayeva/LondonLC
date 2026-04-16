import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// ============================================================
// CAMBRIDGE IELTS 10 – LISTENING TEST 1
// Parts: 1) Self-drive tours in the USA — Andrea Brown (notes
//           + 2-row pricing table)
//        2) Joining the leisure club (Choose-TWO + notes)
//        3) Global Design Competition — John (MCQ + notes)
//        4) The Spirit Bear (notes)
// ============================================================
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
    // ── PART 1 ─────────────────────────────────────────────
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
    // ── PART 2 ─────────────────────────────────────────────
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
    // ── PART 3 ─────────────────────────────────────────────
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
    // ── PART 4 ─────────────────────────────────────────────
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

export const cambridge10ListeningTests: IELTSTest[] = [
  cambridge10_listening_t1,
];
