import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 12 – TEST 1  (Academic Reading)
// ============================================================
export const cambridge12_reading_t1: IELTSTest = {
  id: "cam12-reading-academic-t1",
  title: "Cambridge IELTS 12 – Test 1",
  bookNumber: 12,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Cork",
      passageText: `Cork – the thick bark of the cork oak tree (Quercus suber) – is a remarkable material. It is tough, elastic, buoyant, and fire-resistant, and suitable for a wide range of purposes. It has also been used for millennia: the ancient Egyptians sealed their sarcophagi (stone coffins) with cork, while the ancient Greeks and Romans used it for anything from beehives to sandals.

And the cork oak itself is an extraordinary tree. Its bark grows up to 20 cm in thickness, insulating the tree like a coat wrapped around the trunk and branches and keeping the inside at a constant 20°C all year round. Developed most probably as a defence against forest fires, the bark of the cork oak has a particular cellular structure – with about 40 million cells per cubic centimetre – that technology has never succeeded in replicating. The cells are filled with air, which is why cork is so buoyant. It also has an elasticity that means you can squash it and watch it spring back to its original size and shape when you release the pressure.

Cork oaks grow in a number of Mediterranean countries, including Portugal, Spain, Italy, Greece and Morocco. They flourish in warm, sunny climates where there is a minimum of 400 millimetres of rain per year, and not more than 800 millimetres. Like grape vines, the trees thrive in poor soil, putting down deep roots in search of moisture and nutrients. Southern Portugal's Alentejo region meets all of these requirements, which explains why, by the early 20th century, this region had become the world's largest producer of cork, and why today it accounts for roughly half of all cork production around the world.

Most cork forests are family-owned. Many of these family businesses, and indeed many of the trees themselves, are around 200 years old. Cork production is, above all, an exercise in patience. From the planting of a cork sapling to the first harvest takes 25 years, and a gap of approximately a decade must separate harvests from an individual tree. And for top-quality cork, it's necessary to wait a further 15 or 20 years. You even have to wait for the right kind of summer's day to harvest cork. If the bark is stripped on a day when it's too cold – or when the air is damp – the tree will be damaged.

Cork harvesting is a very specialised profession. No mechanical means of stripping cork bark has been invented, so the job is done by teams of highly skilled workers. First, they make vertical cuts down the bark using small sharp axes, then lever it away in pieces as large as they can manage. The most skilful cork-strippers prise away a semi-circular husk that runs the length of the trunk from just above ground level to the first branches. It is then dried on the ground for about four months, before being taken to factories, where it is boiled to kill any insects that might remain in the cork. Over 60% of cork then goes on to be made into traditional bottle stoppers, with most of the remainder being used in the construction trade. Corkboard and cork tiles are ideal for thermal and acoustic insulation, while granules of cork are used in the manufacture of concrete.

Recent years have seen the end of the virtual monopoly of cork as the material for bottle stoppers, due to concerns about the effect it may have on the contents of the bottle. This is caused by a chemical compound called 2,4,6-trichloroanisole (TCA), which forms through the interaction of plant phenols, chlorine and mould. The tiniest concentrations – as little as three or four parts to a trillion – can spoil the taste of the product contained in the bottle. The result has been a gradual yet steady move first towards plastic stoppers and, more recently, to aluminium screw caps. These substitutes are cheaper to manufacture and, in the case of screw caps, more convenient for the user.

The classic cork stopper does have several advantages, however. Firstly, its traditional image is more in keeping with that of the type of high quality goods with which it has long been associated. Secondly – and very importantly – cork is a sustainable product that can be recycled without difficulty. Moreover, cork forests are a resource which support local biodiversity, and prevent desertification in the regions where they are planted. So, given the current concerns about environmental issues, the future of this ancient material once again looks promising.`,
      instructions: `Questions 1–5: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.

Questions 6–13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–5: TRUE / FALSE / NOT GIVEN ───────────────────────
        {
          id: "cam12-ra-t1-s1-q1",
          number: 1,
          type: "true_false_ng",
          question: "1. The cork oak has the thickest bark of any living tree.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Scientists have developed a synthetic cork with the same cellular structure as natural cork.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Individual cork oak trees must be left for 25 years between the first and second harvest.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Cork bark should be stripped in dry atmospheric conditions.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. The only way to remove the bark from cork oak trees is by hand.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q6–13: Note completion ────────────────────────────────
        {
          id: "cam12-ra-t1-s1-q6",
          number: 6,
          groupLabel: "Questions 6–13: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nComparison of aluminium screw caps and cork bottle stoppers\n\nAdvantages of aluminium screw caps",
          type: "sentence_completion",
          question: "6. Do not affect the _______ of the bottle contents",
          correctAnswer: "taste",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q7",
          number: 7,
          type: "sentence_completion",
          question: "7. Are _______ to produce",
          correctAnswer: "cheaper",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q8",
          number: 8,
          type: "sentence_completion",
          question: "8. Are _______ to use",
          correctAnswer: "convenient",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q9",
          number: 9,
          groupLabel: "Advantages of cork bottle stoppers",
          type: "sentence_completion",
          question: "9. Suit the _______ of quality products",
          correctAnswer: "image",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q10",
          number: 10,
          type: "sentence_completion",
          question: "10. Made from a _______ material",
          correctAnswer: "sustainable",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q11",
          number: 11,
          type: "sentence_completion",
          question: "11. Easily _______",
          correctAnswer: "recycled",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q12",
          number: 12,
          type: "sentence_completion",
          question: "12. Cork forests aid _______",
          correctAnswer: "biodiversity",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s1-q13",
          number: 13,
          type: "sentence_completion",
          question: "13. Cork forests stop _______ happening",
          correctAnswer: "desertification",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Collecting as a Hobby",
      passageText: `Collecting must be one of the most varied of human activities, and it's one that many of us psychologists find fascinating. Many forms of collecting have been dignified with a technical name: an archtophilist collects teddy bears, a philatelist collects postage stamps, and a deltiologist collects postcards. Amassing hundreds or even thousands of postcards, chocolate wrappers or whatever, takes time, energy and money that could surely be put to much more productive use. And yet there are millions of collectors around the world. Why do they do it?

There are the people who collect because they want to make money – this could be called an instrumental reason for collecting; that is, collecting as a means to an end. They'll look for, say, antiques that they can buy cheaply and expect to be able to sell at a profit. But there may well be a psychological element, too – buying cheap and selling dear can give the collector a sense of triumph. And as selling online is so easy, more and more people are joining in.

Many collectors collect to develop their social life, attending meetings of a group of collectors and exchanging information on items. This is a variant on joining a bridge club or a gym, and similarly brings them into contact with like-minded people.

Another motive for collecting is the desire to find something special, or a particular example of the collected item, such as a rare early recording by a particular singer. Some may spend their whole lives in a hunt for this. Psychologically, this can give a purpose to a life that otherwise feels aimless. There is a danger, though, that if the individual is ever lucky enough to find what they're looking for, rather than celebrating their success, they may feel empty, now that the goal that drove them on has gone.

If you think about collecting postage stamps, another potential reason for it – or, perhaps, a result of collecting – is its educational value. Stamp collecting opens a window to other countries, and to the plants, animals, or famous people shown on their stamps. Similarly, in the 19th century, many collectors amassed fossils, animals and plants from around the globe, and their collections provided a vast amount of information about the natural world. Without those collections, our understanding would be greatly inferior to what it is.

In the past – and nowadays, too, though to a lesser extent – a popular form of collecting, particularly among boys and men, was trainspotting. This might involve trying to see every locomotive of a particular type, using published data that identifies each one, and ticking off each engine as it is seen. Trainspotters exchange information, these days often by mobile phone, so they can work out where to go to, to see a particular engine. As a by-product, many practitioners of the hobby become very knowledgeable about railway operations, or the technical specifications of different engine types.

Similarly, people who collect dolls may go beyond simply enlarging their collection, and develop an interest in the way that dolls are made, or the materials that are used. These have changed over the centuries from the wood that was standard in 16th century Europe, through the wax and porcelain of later centuries, to the plastics of today's dolls. Or collectors might be inspired to study how dolls reflect notions of what children like, or ought to like.

Not all collectors are interested in learning from their hobby, though, so what we might call a psychological reason for collecting is the need for a sense of control, perhaps as a way of dealing with insecurity. Stamp collectors, for instance, arrange their stamps in albums, usually very neatly, organising their collection according to certain commonplace principles – perhaps by country in alphabetical order, or grouping stamps by what they depict – people, birds, maps, and so on.

One reason, conscious or not, for what someone chooses to collect is to show the collector's individualism. Someone who decides to collect something as unexpected as dog collars, for instance, may be conveying their belief that they must be interesting themselves. And believe it or not, there is at least one dog collar museum in existence, and it grew out of a personal collection.

Of course, all hobbies give pleasure, but the common factor in collecting is usually passion: pleasure is putting it far too mildly. More than most other hobbies, collecting can be totally engrossing, and can give a strong sense of personal fulfilment. To non-collectors it may appear an eccentric, if harmless, way of spending time, but potentially, collecting has a lot going for it.`,
      instructions: `Questions 14–21: Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.

Questions 22–26: Do the following statements agree with the information given in the passage? Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q14–21: Sentence completion ───────────────────────────
        {
          id: "cam12-ra-t1-s2-q14",
          number: 14,
          type: "sentence_completion",
          question: "14. The writer mentions collecting _______ as an example of collecting in order to make money.",
          correctAnswer: "antiques",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q15",
          number: 15,
          type: "sentence_completion",
          question: "15. Collectors may get a feeling of _______ from buying and selling items.",
          correctAnswer: "triumph",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q16",
          number: 16,
          type: "sentence_completion",
          question: "16. Collectors' clubs provide opportunities to share _______.",
          correctAnswer: "information",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q17",
          number: 17,
          type: "sentence_completion",
          question: "17. Collectors' clubs offer _______ with people who have similar interests.",
          correctAnswer: "contact",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q18",
          number: 18,
          type: "sentence_completion",
          question: "18. Collecting sometimes involves a life-long _______ for a special item.",
          correctAnswer: "hunt",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q19",
          number: 19,
          type: "sentence_completion",
          question: "19. Searching for something particular may prevent people from feeling their life is completely _______.",
          correctAnswer: "aimless",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q20",
          number: 20,
          type: "sentence_completion",
          question: "20. Stamp collecting may be _______ because it provides facts about different countries.",
          correctAnswer: "educational",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q21",
          number: 21,
          type: "sentence_completion",
          question: "21. _______ tends to be mostly a male hobby.",
          correctAnswer: "trainspotting",
          points: 1,
        },
        // ── Q22–26: TRUE / FALSE / NOT GIVEN ─────────────────────
        {
          id: "cam12-ra-t1-s2-q22",
          number: 22,
          type: "true_false_ng",
          question: "22. The number of people buying dolls has grown over the centuries.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q23",
          number: 23,
          type: "true_false_ng",
          question: "23. Sixteenth century European dolls were normally made of wax and porcelain.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q24",
          number: 24,
          type: "true_false_ng",
          question: "24. Arranging a stamp collection by the size of the stamps is less common than other methods.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q25",
          number: 25,
          type: "true_false_ng",
          question: "25. Someone who collects unusual objects may want others to think he or she is also unusual.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s2-q26",
          number: 26,
          type: "true_false_ng",
          question: "26. Collecting gives a feeling that other hobbies are unlikely to inspire.",
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

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "What's the purpose of gaining knowledge?",
      passageText: `A
'I would found an institution where any person can find instruction in any subject.' That was the founder's motto for Cornell University, and it seems an apt characterization of the different university, also in the USA, where I currently teach philosophy. A student can prepare for a career in resort management, engineering, interior design, accounting, music, law enforcement, you name it. But what would the founders of these two institutions have thought of a course called 'Arson for Profit'? I kid you not: we have it on the books. Any undergraduates who have met the academic requirements can sign up for the course in our program in 'fire science'.

B
Naturally, the course is intended for prospective arson investigators, who can learn all the tricks of the trade for detecting whether a fire was deliberately set, discovering who did it, and establishing a chain of evidence for effective prosecution in a court of law. But wouldn't this also be the perfect course for prospective arsonists to sign up for? My point is not to criticize academic programs in fire science: they are highly welcome as part of the increasing professionalization of this and many other occupations. However, it's not unknown for a firefighter to torch a building. This example suggests how dishonest and illegal behavior, with the help of higher education, can creep into every aspect of public and business life.

C
I realized this anew when I was invited to speak before a class in marketing, which is another of our degree programs. The regular instructor is a colleague who appreciates the kind of ethical perspective I can bring as a philosopher. There are endless ways I could have approached this assignment, but I took my cue from the title of the course: 'Principles of Marketing'. It made me think to ask the students, 'Is marketing principled?' After all, a subject matter can have principles in the sense of being codified, having rules, as with football or chess, without being principled in the sense of being ethical. Many of the students immediately assumed that the answer to my question about marketing principles was obvious: no. Just look at the ways in which everything under the sun has been marketed; obviously it need not be done in a principled (=ethical) fashion.

D
Is that obvious? I made the suggestion, which may sound downright crazy in light of the evidence, that perhaps marketing is by definition principled. My inspiration for this judgement is the philosopher Immanuel Kant, who argued that any body of knowledge consists of an end (or purpose) and a means.

E
Let us apply both the terms 'means' and 'end' to marketing. The students have signed up for a course in order to learn how to market effectively. But to what end? There seem to be two main attitudes toward that question. One is that the answer is obvious: the purpose of marketing is to sell things and to make money. The other attitude is that the purpose of marketing is irrelevant: each person comes to the program and course with his or her own plans, and these need not even concern the acquisition of marketing expertise as such. My proposal, which I believe would also be Kant's, is that neither of these attitudes captures the significance of the end to the means for marketing. A field of knowledge or a professional endeavor is defined by both the means and the end; hence both deserve scrutiny. Students need to study both how to achieve X, and also what X is.

F
It is at this point that 'Arson for Profit' becomes supremely relevant. That course is presumably all about means: how to detect and prosecute criminal activity. It is therefore assumed that the end is good in an ethical sense. When I ask fire science students to articulate the end, or purpose, of their field, they eventually generalize to something like, 'The safety and welfare of society,' which seems right. As we have seen, someone could use the very same knowledge of means to achieve a much less noble end such as personal profit via destructive, dangerous, reckless activity. But we would not call that firefighting. We have a separate word for it: arson. Similarly, if you employed the 'principles of marketing' in an unprincipled way, you would not be doing marketing. We have another term for it: fraud. Kant gives the example of a doctor and a poisoner, who use the identical knowledge to achieve their divergent ends. We would say that one is practicing medicine, the other, murder.`,
      instructions: `Questions 27–32: Reading Passage 3 has six sections, A–F. Choose the correct heading for each section from the list of headings below.
i Courses that require a high level of commitment
ii A course title with two meanings
iii The equal importance of two key issues
iv Applying a theory in an unexpected context
v The financial benefits of studying
vi A surprising course title
vii Different names for different outcomes
viii The possibility of attracting the wrong kind of student

Questions 33–36: Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 37–40: Do the following statements agree with the views of the writer? Write YES, NO, or NOT GIVEN.`,
      questions: [
        // ── Q27–32: Paragraph headings ────────────────────────────
        {
          id: "cam12-ra-t1-s3-q27",
          number: 27,
          type: "matching",
          question: "27. Section A",
          options: [
            { label: "i – Courses that require a high level of commitment", value: "i" },
            { label: "ii – A course title with two meanings", value: "ii" },
            { label: "iii – The equal importance of two key issues", value: "iii" },
            { label: "iv – Applying a theory in an unexpected context", value: "iv" },
            { label: "v – The financial benefits of studying", value: "v" },
            { label: "vi – A surprising course title", value: "vi" },
            { label: "vii – Different names for different outcomes", value: "vii" },
            { label: "viii – The possibility of attracting the wrong kind of student", value: "viii" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q28",
          number: 28,
          type: "matching",
          question: "28. Section B",
          options: [
            { label: "i – Courses that require a high level of commitment", value: "i" },
            { label: "ii – A course title with two meanings", value: "ii" },
            { label: "iii – The equal importance of two key issues", value: "iii" },
            { label: "iv – Applying a theory in an unexpected context", value: "iv" },
            { label: "v – The financial benefits of studying", value: "v" },
            { label: "vi – A surprising course title", value: "vi" },
            { label: "vii – Different names for different outcomes", value: "vii" },
            { label: "viii – The possibility of attracting the wrong kind of student", value: "viii" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q29",
          number: 29,
          type: "matching",
          question: "29. Section C",
          options: [
            { label: "i – Courses that require a high level of commitment", value: "i" },
            { label: "ii – A course title with two meanings", value: "ii" },
            { label: "iii – The equal importance of two key issues", value: "iii" },
            { label: "iv – Applying a theory in an unexpected context", value: "iv" },
            { label: "v – The financial benefits of studying", value: "v" },
            { label: "vi – A surprising course title", value: "vi" },
            { label: "vii – Different names for different outcomes", value: "vii" },
            { label: "viii – The possibility of attracting the wrong kind of student", value: "viii" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q30",
          number: 30,
          type: "matching",
          question: "30. Section D",
          options: [
            { label: "i – Courses that require a high level of commitment", value: "i" },
            { label: "ii – A course title with two meanings", value: "ii" },
            { label: "iii – The equal importance of two key issues", value: "iii" },
            { label: "iv – Applying a theory in an unexpected context", value: "iv" },
            { label: "v – The financial benefits of studying", value: "v" },
            { label: "vi – A surprising course title", value: "vi" },
            { label: "vii – Different names for different outcomes", value: "vii" },
            { label: "viii – The possibility of attracting the wrong kind of student", value: "viii" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q31",
          number: 31,
          type: "matching",
          question: "31. Section E",
          options: [
            { label: "i – Courses that require a high level of commitment", value: "i" },
            { label: "ii – A course title with two meanings", value: "ii" },
            { label: "iii – The equal importance of two key issues", value: "iii" },
            { label: "iv – Applying a theory in an unexpected context", value: "iv" },
            { label: "v – The financial benefits of studying", value: "v" },
            { label: "vi – A surprising course title", value: "vi" },
            { label: "vii – Different names for different outcomes", value: "vii" },
            { label: "viii – The possibility of attracting the wrong kind of student", value: "viii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "32. Section F",
          options: [
            { label: "i – Courses that require a high level of commitment", value: "i" },
            { label: "ii – A course title with two meanings", value: "ii" },
            { label: "iii – The equal importance of two key issues", value: "iii" },
            { label: "iv – Applying a theory in an unexpected context", value: "iv" },
            { label: "v – The financial benefits of studying", value: "v" },
            { label: "vi – A surprising course title", value: "vi" },
            { label: "vii – Different names for different outcomes", value: "vii" },
            { label: "viii – The possibility of attracting the wrong kind of student", value: "viii" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        // ── Q33–36: Summary completion ────────────────────────────
        {
          id: "cam12-ra-t1-s3-q33",
          number: 33,
          groupLabel: "Questions 33–36: Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe 'Arson for Profit' course",
          type: "sentence_completion",
          question: "33. This is a university course for undergraduates studying _______.",
          correctAnswer: "fire science",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q34",
          number: 34,
          type: "sentence_completion",
          question: "34. The expectation is that they will become _______ specialising in arson.",
          correctAnswer: "investigators",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q35",
          number: 35,
          type: "sentence_completion",
          question: "35. The course will help them to detect cases of arson and find _______ of criminal intent.",
          correctAnswer: "evidence",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q36",
          number: 36,
          type: "sentence_completion",
          question: "36. This leads to successful _______ in the courts.",
          correctAnswer: "prosecution",
          points: 1,
        },
        // ── Q37–40: YES / NO / NOT GIVEN ─────────────────────────
        {
          id: "cam12-ra-t1-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. It is difficult to attract students onto courses that do not focus on a career.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. The 'Arson for Profit' course would be useful for people intending to set fire to buildings.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. Fire science courses are too academic to help people to be good at the job of firefighting.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam12-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. The writer's fire science students provided a detailed definition of the purpose of their studies.",
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
// CAMBRIDGE IELTS 12 – TEST 2  (Academic Reading)
// ============================================================
export const cambridge12_reading_t2: IELTSTest = {
  id: "cam12-reading-academic-t2",
  title: "Cambridge IELTS 12 – Test 2",
  bookNumber: 12,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The risks agriculture faces in developing countries",
      passageText: `Synthesis of an online debate

A
Two things distinguish food production from all other productive activities: first, every single person needs food each day and has a right to it; and second, it is hugely dependent on nature. These two unique aspects, one political, the other natural, make food production highly vulnerable and different from any other business. At the same time, cultural values are highly entrenched in food and agricultural systems worldwide.

B
Farmers everywhere face major risks, including extreme weather, long-term climate change, and price volatility in input and product markets. However, smallholder farmers in developing countries must in addition deal with adverse environments, both natural, in terms of soil quality, rainfall, etc., and human, in terms of infrastructure, financial systems, markets, knowledge and technology. Counter-intuitively, hunger is prevalent among many smallholder farmers in the developing world.

C
Participants in the online debate argued that our biggest challenge is to address the underlying causes of the agricultural system's inability to ensure sufficient food for all, and they identified as drivers of this problem our dependency on fossil fuels and unsupportive government policies.

D
On the question of mitigating the risks farmers face, most essayists called for greater state intervention. In his essay, Kanayo F. Nwanze, President of the International Fund for Agricultural Development, argued that governments can significantly reduce risks for farmers by providing basic services like roads to get produce more efficiently to markets, or water and food storage facilities to reduce losses. Sophia Murphy, senior advisor to the Institute for Agriculture and Trade Policy, suggested that the procurement and holding of stocks by governments can also help mitigate wild swings in food prices by alleviating uncertainties about market supply.

E
Shenggen Fan, Director General of the International Food Policy Research Institute, held up social safety nets and public welfare programmes in Ethiopia, Brazil and Mexico as valuable ways to address poverty among farming families and reduce their vulnerability to agriculture shocks. However, some commentators responded that cash transfers to poor families do not necessarily translate into increased food security, as these programmes do not always strengthen food production or raise incomes. Regarding state subsidies for agriculture, Rokeya Kabir, Executive Director of Bangladesh Nari Progati Sangha, commented in her essay that these 'have not compensated for the stranglehold exercised by private traders. In fact, studies show that sixty percent of beneficiaries of subsidies are not poor, but rich landowners and non-farmer traders.'

F
Nwanze, Murphy and Fan argued that private risk management tools, like private insurance, commodity futures markets, and rural finance can help small-scale producers mitigate risk and allow for investment in improvements. Kabir warned that financial support schemes often encourage the adoption of high-input agricultural practices, which in the medium term may raise production costs beyond the value of their harvests. Murphy noted that when futures markets become excessively financialised they can contribute to short-term price volatility, which increases farmers' food insecurity. Many participants and commentators emphasised that greater transparency in markets is needed to mitigate the impact of volatility, and make evident whether adequate stocks and supplies are available. Others contended that agribusiness companies should be held responsible for paying for negative side effects.

G
Many essayists mentioned climate change and its consequences for small-scale agriculture. Fan explained that 'in addition to reducing crop yields, climate change increases the magnitude and frequency of extreme weather events, which increase smallholder vulnerability.' The growing unpredictability of weather patterns increases farmers' difficulty in managing weather-related risks. According to this author, one solution would be to develop crop varieties that are more resilient to new climate trends and extreme weather patterns. Accordingly, Pat Mooney, co-founder and executive director of the ETC Group, suggested that 'if we are to survive climate change, we must adopt policies that let peasants diversify the plant and animal species and varieties/breeds that make up our menus.'

H
Some participating authors and commentators argued in favour of community-based and autonomous risk management strategies through collective action groups, co-operatives or producers' groups. Such groups enhance market opportunities for small-scale producers, reduce marketing costs and synchronise buying and selling with seasonal price conditions. According to Murphy, 'collective action offers an important way for farmers to strengthen their political and economic bargaining power, and to reduce their business risks.' One commentator, Giel Ton, warned that collective action does not come as a free good. It takes time, effort and money to organise, build trust and to experiment. Others, like Marcel Vernooij and Marcel Beukeboom, suggested that in order to 'apply what we already know', all stakeholders, including business, government, scientists and civil society, must work together, starting at the beginning of the value chain.

I
Some participants explained that market price volatility is often worsened by the presence of intermediary purchasers who, taking advantage of farmers' vulnerability, dictate prices. One commentator suggested farmers can gain greater control over prices and minimise price volatility by selling directly to consumers. Similarly, Sonali Bisht, founder and advisor to the Institute of Himalayan Environmental Research and Education (INHERE), India, wrote that community-supported agriculture, where consumers invest in local farmers by subscription and guarantee producers a fair price, is a risk-sharing model worth more attention. Direct food distribution systems not only encourage small-scale agriculture but also give consumers more control over the food they consume, she wrote.`,
      instructions: `Questions 1–3: Reading Passage 1 has nine paragraphs, A–I. Which paragraph contains the following information? Write the correct letter, A–I.

Questions 4–9: Match each statement with the correct person, A–G.
A Kanayo F. Nwanze   B Sophia Murphy   C Shenggen Fan   D Rokeya Kabir   E Pat Mooney   F Giel Ton   G Sonali Bisht
NB You may use any letter more than once.

Questions 10–11: Choose TWO letters, A–E. Which TWO problems affect farmers with small farms in developing countries?
A lack of demand for locally produced food   B lack of irrigation programmes   C being unable to get insurance   D the effects of changing weather patterns   E having to sell their goods to intermediary buyers

Questions 12–13: Choose TWO letters, A–E. Which TWO actions are recommended for improving conditions for farmers?
A reducing the size of food stocks   B attempting to ensure that prices rise at certain times   C organising co-operation between a wide range of interested parties   D encouraging consumers to take a financial stake in farming   E making customers aware of the reasons for changing food prices`,
      questions: [
        // ── Q1–3: Which paragraph ─────────────────────────────────
        {
          id: "cam12-ra-t2-s1-q1",
          number: 1,
          type: "matching",
          question: "1. A reference to characteristics that only apply to food production",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q2",
          number: 2,
          type: "matching",
          question: "2. A reference to challenges faced only by farmers in certain parts of the world",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q3",
          number: 3,
          type: "matching",
          question: "3. A reference to difficulties in bringing about co-operation between farmers",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        // ── Q4–9: Matching people ─────────────────────────────────
        {
          id: "cam12-ra-t2-s1-q4",
          number: 4,
          groupLabel: "Questions 4–9: Match each statement with the correct person, A–G.\nA  Kanayo F. Nwanze\nB  Sophia Murphy\nC  Shenggen Fan\nD  Rokeya Kabir\nE  Pat Mooney\nF  Giel Ton\nG  Sonali Bisht\nNB You may use any letter more than once.",
          type: "matching",
          question: "4. Financial assistance from the government does not always go to the farmers who most need it.",
          options: [
            { label: "A – Kanayo F. Nwanze", value: "A" },
            { label: "B – Sophia Murphy", value: "B" },
            { label: "C – Shenggen Fan", value: "C" },
            { label: "D – Rokeya Kabir", value: "D" },
            { label: "E – Pat Mooney", value: "E" },
            { label: "F – Giel Ton", value: "F" },
            { label: "G – Sonali Bisht", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q5",
          number: 5,
          type: "matching",
          question: "5. Farmers can benefit from collaborating as a group.",
          options: [
            { label: "A – Kanayo F. Nwanze", value: "A" },
            { label: "B – Sophia Murphy", value: "B" },
            { label: "C – Shenggen Fan", value: "C" },
            { label: "D – Rokeya Kabir", value: "D" },
            { label: "E – Pat Mooney", value: "E" },
            { label: "F – Giel Ton", value: "F" },
            { label: "G – Sonali Bisht", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q6",
          number: 6,
          type: "matching",
          question: "6. Financial assistance from the government can improve the standard of living of farmers.",
          options: [
            { label: "A – Kanayo F. Nwanze", value: "A" },
            { label: "B – Sophia Murphy", value: "B" },
            { label: "C – Shenggen Fan", value: "C" },
            { label: "D – Rokeya Kabir", value: "D" },
            { label: "E – Pat Mooney", value: "E" },
            { label: "F – Giel Ton", value: "F" },
            { label: "G – Sonali Bisht", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q7",
          number: 7,
          type: "matching",
          question: "7. Farmers may be helped if there is financial input by the same individuals who buy from them.",
          options: [
            { label: "A – Kanayo F. Nwanze", value: "A" },
            { label: "B – Sophia Murphy", value: "B" },
            { label: "C – Shenggen Fan", value: "C" },
            { label: "D – Rokeya Kabir", value: "D" },
            { label: "E – Pat Mooney", value: "E" },
            { label: "F – Giel Ton", value: "F" },
            { label: "G – Sonali Bisht", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q8",
          number: 8,
          type: "matching",
          question: "8. Governments can help to reduce variation in prices.",
          options: [
            { label: "A – Kanayo F. Nwanze", value: "A" },
            { label: "B – Sophia Murphy", value: "B" },
            { label: "C – Shenggen Fan", value: "C" },
            { label: "D – Rokeya Kabir", value: "D" },
            { label: "E – Pat Mooney", value: "E" },
            { label: "F – Giel Ton", value: "F" },
            { label: "G – Sonali Bisht", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q9",
          number: 9,
          type: "matching",
          question: "9. Improvements to infrastructure can have a major impact on risk for farmers.",
          options: [
            { label: "A – Kanayo F. Nwanze", value: "A" },
            { label: "B – Sophia Murphy", value: "B" },
            { label: "C – Shenggen Fan", value: "C" },
            { label: "D – Rokeya Kabir", value: "D" },
            { label: "E – Pat Mooney", value: "E" },
            { label: "F – Giel Ton", value: "F" },
            { label: "G – Sonali Bisht", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q10–11: Choose TWO – problems ─────────────────────────
        {
          id: "cam12-ra-t2-s1-q10",
          number: 10,
          groupLabel: "Questions 10–11: Choose TWO letters, A–E.\nWhich TWO problems are mentioned which affect farmers with small farms in developing countries?\nA  lack of demand for locally produced food\nB  lack of irrigation programmes\nC  being unable to get insurance\nD  the effects of changing weather patterns\nE  having to sell their goods to intermediary buyers",
          type: "multiple_choice",
          question: "10. Which problem affects small farmers in developing countries? (Choose TWO — this is the first answer)",
          options: [
            { label: "A – lack of demand for locally produced food", value: "A" },
            { label: "B – lack of irrigation programmes", value: "B" },
            { label: "C – being unable to get insurance", value: "C" },
            { label: "D – the effects of changing weather patterns", value: "D" },
            { label: "E – having to sell their goods to intermediary buyers", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q11",
          number: 11,
          type: "multiple_choice",
          question: "11. Which problem affects small farmers in developing countries? (Choose TWO — this is the second answer)",
          options: [
            { label: "A – lack of demand for locally produced food", value: "A" },
            { label: "B – lack of irrigation programmes", value: "B" },
            { label: "C – being unable to get insurance", value: "C" },
            { label: "D – the effects of changing weather patterns", value: "D" },
            { label: "E – having to sell their goods to intermediary buyers", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        // ── Q12–13: Choose TWO – recommended actions ──────────────
        {
          id: "cam12-ra-t2-s1-q12",
          number: 12,
          groupLabel: "Questions 12–13: Choose TWO letters, A–E.\nWhich TWO actions are recommended for improving conditions for farmers?\nA  reducing the size of food stocks\nB  attempting to ensure that prices rise at certain times of the year\nC  organising co-operation between a wide range of interested parties\nD  encouraging consumers to take a financial stake in farming\nE  making customers aware of the reasons for changing food prices",
          type: "multiple_choice",
          question: "12. Which action is recommended for improving conditions for farmers? (Choose TWO — this is the first answer)",
          options: [
            { label: "A – reducing the size of food stocks", value: "A" },
            { label: "B – attempting to ensure that prices rise at certain times of the year", value: "B" },
            { label: "C – organising co-operation between a wide range of interested parties", value: "C" },
            { label: "D – encouraging consumers to take a financial stake in farming", value: "D" },
            { label: "E – making customers aware of the reasons for changing food prices", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s1-q13",
          number: 13,
          type: "multiple_choice",
          question: "13. Which action is recommended for improving conditions for farmers? (Choose TWO — this is the second answer)",
          options: [
            { label: "A – reducing the size of food stocks", value: "A" },
            { label: "B – attempting to ensure that prices rise at certain times of the year", value: "B" },
            { label: "C – organising co-operation between a wide range of interested parties", value: "C" },
            { label: "D – encouraging consumers to take a financial stake in farming", value: "D" },
            { label: "E – making customers aware of the reasons for changing food prices", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Lost City",
      passageText: `An explorer's encounter with the ruined city of Machu Picchu, the most famous icon of the Inca civilisation

A
When the US explorer and academic Hiram Bingham arrived in South America in 1911, he was ready for what was to be the greatest achievement of his life: the exploration of the remote hinterland to the west of Cusco, the old capital of the Inca empire in the Andes mountains of Peru. His goal was to locate the remains of a city called Vitcos, the last capital of the Inca civilisation. Cusco lies on a high plateau at an elevation of more than 3,000 metres, and Bingham's plan was to descend from this plateau along the valley of the Urubamba river, which takes a circuitous route down to the Amazon and passes through an area of dramatic canyons and mountain ranges.

B
When Bingham and his team set off down the Urubamba in late July, they had an advantage over travelers who had preceded them: a track had recently been blasted down the valley canyon to enable rubber to be brought up by mules from the jungle. Almost all previous travelers had left the river at Ollantaytambo and taken a high pass across the mountains to rejoin the river lower down, thereby cutting a substantial corner, but also therefore never passing through the area around Machu Picchu.

C
On 24 July they were a few days into their descent of the valley. The day began slowly, with Bingham trying to arrange sufficient mules for the next stage of the trek. His companions showed no interest in accompanying him up the nearby hill to see some ruins that a local farmer, Melchor Arteaga, had told them about the night before. The morning was dull and damp, and Bingham also seems to have been less than keen on the prospect of climbing the hill. In his book Lost City of the Incas, he relates that he made the ascent without having the least expectation that he would find anything at the top.

D
Bingham writes about the approach in vivid style in his book. First, as he climbs up the hill, he describes the ever-present possibility of deadly snakes, 'capable of making considerable springs when in pursuit of their prey'; not that he sees any. Then there's a sense of mounting discovery as he comes across great sweeps of terraces, then a mausoleum, followed by monumental staircases and, finally, the grand ceremonial buildings of Machu Picchu. 'It seemed like an unbelievable dream … the sight held me spellbound …' he wrote.

E
We should remember, however, that Lost City of the Incas is a work of hindsight, not written until 1948, many years after his journey. His journal entries of the time reveal a much more gradual appreciation of his achievement. He spent the afternoon at the ruins noting down the dimensions of some of the buildings, then descended and rejoined his companions, to whom he seems to have said little about his discovery. At this stage, Bingham didn't realise the extent or the importance of the site, nor did he realise what use he could make of the discovery.

F
However, soon after returning it occurred to him that he could make a name for himself from this discovery. When he came to write the National Geographic magazine article that broke the story to the world in April 1913, he knew he had to produce a big idea. He wondered whether it could have been the birthplace of the very first Inca, Manco the Great, and whether it could also have been what chroniclers described as 'the last city of the Incas'. This term refers to Vilcabamba, the settlement where the Incas had fled from Spanish invaders in the 1530s. Bingham made desperate attempts to prove this belief for nearly 40 years. Sadly, his vision of the site as both the beginning and end of the Inca civilisation, while a magnificent one, is inaccurate. We now know that Vilcabamba actually lies 65 kilometres away in the depths of the jungle.

G
One question that has perplexed visitors, historians and archaeologists alike ever since Bingham, is why the site seems to have been abandoned before the Spanish Conquest. There are no references to it by any of the Spanish chroniclers – and if they had known of its existence so close to Cusco they would certainly have come in search of gold. An idea which has gained wide acceptance over the past few years is that Machu Picchu was a moya, a country estate built by an Inca emperor to escape the cold winters of Cusco, where the elite could enjoy monumental architecture and spectacular views. Furthermore, the particular architecture of Machu Picchu suggests that it was constructed at the time of the greatest of all the Incas, the emperor Pachacuti (c. 1438–71). By custom, Pachacuti's descendants built other similar estates for their own use, and so Machu Picchu would have been abandoned after his death, some 50 years before the Spanish Conquest.`,
      instructions: `Questions 14–20: Reading Passage 2 has seven paragraphs, A–G. Choose the correct heading for each paragraph from the list of headings below.
i Different accounts of the same journey
ii Bingham gains support
iii A common belief
iv The aim of the trip
v A dramatic description
vi A new route
vii Bingham publishes his theory
viii Bingham's lack of enthusiasm

Questions 21–24: Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.

Questions 25–26: Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–20: Paragraph headings ────────────────────────────
        {
          id: "cam12-ra-t2-s2-q14",
          number: 14,
          type: "matching",
          question: "14. Paragraph A",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Paragraph B",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. Paragraph C",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Paragraph D",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Paragraph E",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Paragraph F",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Paragraph G",
          options: [
            { label: "i – Different accounts of the same journey", value: "i" },
            { label: "ii – Bingham gains support", value: "ii" },
            { label: "iii – A common belief", value: "iii" },
            { label: "iv – The aim of the trip", value: "iv" },
            { label: "v – A dramatic description", value: "v" },
            { label: "vi – A new route", value: "vi" },
            { label: "vii – Bingham publishes his theory", value: "vii" },
            { label: "viii – Bingham's lack of enthusiasm", value: "viii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        // ── Q21–24: TRUE / FALSE / NOT GIVEN ─────────────────────
        {
          id: "cam12-ra-t2-s2-q21",
          number: 21,
          type: "true_false_ng",
          question: "21. Bingham went to South America in search of an Inca city.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q22",
          number: 22,
          type: "true_false_ng",
          question: "22. Bingham chose a particular route down the Urubamba valley because it was the most common route used by travellers.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q23",
          number: 23,
          type: "true_false_ng",
          question: "23. Bingham understood the significance of Machu Picchu as soon as he saw it.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q24",
          number: 24,
          type: "true_false_ng",
          question: "24. Bingham returned to Machu Picchu in order to find evidence to support his theory.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        // ── Q25–26: Sentence completion ───────────────────────────
        {
          id: "cam12-ra-t2-s2-q25",
          number: 25,
          type: "sentence_completion",
          question: "25. The track that took Bingham down the Urubamba valley had been created for the transportation of _______.",
          correctAnswer: "rubber",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s2-q26",
          number: 26,
          type: "sentence_completion",
          question: "26. Bingham found out about the ruins of Machu Picchu from a _______ in the Urubamba valley.",
          correctAnswer: "farmer",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The Benefits of Being Bilingual",
      passageText: `A
According to the latest figures, the majority of the world's population is now bilingual or multilingual, having grown up speaking two or more languages. In the past, such children were considered to be at a disadvantage compared with their monolingual peers. Over the past few decades, however, technological advances have allowed researchers to look more deeply at how bilingualism interacts with and changes the cognitive and neurological systems, thereby identifying several clear benefits of being bilingual.

B
Research shows that when a bilingual person uses one language, the other is active at the same time. When we hear a word, we don't hear the entire word all at once: the sounds arrive in sequential order. Long before the word is finished, the brain's language system begins to guess what that word might be. If you hear 'can', you will likely activate words like 'candy' and 'candle' as well, at least during the earlier stages of word recognition. For bilingual people, this activation is not limited to a single language; auditory input activates corresponding words regardless of the language to which they belong. Some of the most compelling evidence for this phenomenon, called 'language co-activation', comes from studying eye movements. A Russian-English bilingual asked to 'pick up a marker' from a set of objects would look more at a stamp than someone who doesn't know Russian, because the Russian word for 'stamp', marka, sounds like the English word he or she heard, 'marker'. In cases like this, language co-activation occurs because what the listener hears could map onto words in either language.

C
Having to deal with this persistent linguistic competition can result in difficulties, however. For instance, knowing more than one language can cause speakers to name pictures more slowly, and can increase 'tip-of-the-tongue states', when you can almost, but not quite, bring a word to mind. As a result, the constant juggling of two languages creates a need to control how much a person accesses a language at any given time. For this reason, bilingual people often perform better on tasks that require conflict management. In the classic Stroop Task, people see a word and are asked to name the colour of the word's font. When the colour and the word match (i.e., the word 'red' printed in red), people correctly name the colour more quickly than when the colour and the word don't match (i.e., the word 'red' printed in blue). This occurs because the word itself ('red') and its font colour (blue) conflict. Bilingual people often excel at tasks such as this, which tap into the ability to ignore competing perceptual information and focus on the relevant aspects of the input. Bilinguals are also better at switching between two tasks; for example, when bilinguals have to switch from categorizing objects by colour (red or green) to categorizing them by shape (circle or triangle), they do so more quickly than monolingual people, reflecting better cognitive control when having to make rapid changes of strategy.

D
It also seems that the neurological roots of the bilingual advantage extend to brain areas more traditionally associated with sensory processing. When monolingual and bilingual adolescents listen to simple speech sounds without any intervening background noise, they show highly similar brain stem responses. When researchers play the same sound to both groups in the presence of background noise, however, the bilingual listeners' neural response is considerably larger, reflecting better encoding of the sound's fundamental frequency, a feature of sound closely related to pitch perception.

E
Such improvements in cognitive and sensory processing may help a bilingual person to process information in the environment, and help explain why bilingual adults acquire a third language better than monolingual adults master a second language. This advantage may be rooted in the skill of focusing on information about the new language while reducing interference from the languages they already know.

F
Research also indicates that bilingual experience may help to keep the cognitive mechanisms sharp by recruiting alternate brain networks to compensate for those that become damaged during aging. Older bilinguals enjoy improved memory relative to monolingual people, which can lead to real-world health benefits. In a study of over 200 patients with Alzheimer's disease, a degenerative brain disease, bilingual patients reported showing initial symptoms of the disease an average of five years later than monolingual patients. In a follow-up study, researchers compared the brains of bilingual and monolingual patients matched on the severity of Alzheimer's symptoms. Surprisingly, the bilinguals' brains had more physical signs of disease than their monolingual counterparts, even though their outward behaviour and abilities were the same. If the brain is an engine, bilingualism may help it to go farther on the same amount of fuel.

G
Furthermore, the benefits associated with bilingual experience seem to start very early. In one study, researchers taught seven-month-old babies growing up in monolingual or bilingual homes that when they heard a tinkling sound, a puppet appeared on one side of a screen. Halfway through the study, the puppet began appearing on the opposite side of the screen. In order to get a reward, the infants had to adjust the rule they'd learned; only the bilingual babies were able to successfully learn the new rule. This suggests that for very young children, as well as for older people, navigating a multilingual environment imparts advantages that transfer far beyond language.`,
      instructions: `Questions 27–31: Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 32–36: Do the following statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.

Questions 37–40: Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? Write the correct letter, A–G.`,
      questions: [
        // ── Q27–31: Table completion ──────────────────────────────
        {
          id: "cam12-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Complete the table below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.",
          type: "sentence_completion",
          question: "27. Observing the _______ of Russian-English bilingual people when asked to select certain objects",
          correctAnswer: "eye movements",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q28",
          number: 28,
          type: "sentence_completion",
          question: "28. Bilingual people engage both languages simultaneously — a mechanism known as _______",
          correctAnswer: "language co-activation",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q29",
          number: 29,
          type: "sentence_completion",
          question: "29. A test called the _______, focusing on naming colours",
          correctAnswer: "Stroop Task",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q30",
          number: 30,
          type: "sentence_completion",
          question: "30. Bilingual people are more able to handle tasks involving a skill called _______",
          correctAnswer: "conflict management",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q31",
          number: 31,
          type: "sentence_completion",
          question: "31. When changing strategies, bilingual people have superior _______",
          correctAnswer: "cognitive control",
          points: 1,
        },
        // ── Q32–36: YES / NO / NOT GIVEN ─────────────────────────
        {
          id: "cam12-ra-t2-s3-q32",
          number: 32,
          type: "true_false_ng",
          question: "32. Attitudes towards bilingualism have changed in recent years.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. Bilingual people are better than monolingual people at guessing correctly what words are before they are finished.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. Bilingual people consistently name images faster than monolingual people.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. Bilingual people's brains process single sounds more efficiently than monolingual people in all situations.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "36. Fewer bilingual people than monolingual people suffer from brain disease in old age.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        // ── Q37–40: Which paragraph ───────────────────────────────
        {
          id: "cam12-ra-t2-s3-q37",
          number: 37,
          groupLabel: "Questions 37–40: Which paragraph contains the following information?\nWrite the correct letter, A–G.",
          type: "matching",
          question: "37. An example of how bilingual and monolingual people's brains respond differently to a certain type of non-verbal auditory input",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q38",
          number: 38,
          type: "matching",
          question: "38. A demonstration of how a bilingual upbringing has benefits even before we learn to speak",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q39",
          number: 39,
          type: "matching",
          question: "39. A description of the process by which people identify words that they hear",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t2-s3-q40",
          number: 40,
          type: "matching",
          question: "40. Reference to some negative consequences of being bilingual",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge12Tests: IELTSTest[] = [cambridge12_reading_t1, cambridge12_reading_t2];
