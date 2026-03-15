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

// ============================================================
// CAMBRIDGE IELTS 12 – TEST 3  (Academic Reading)
// Passages: Flying Tortoises / The Intersection of Health Sciences
//           and Geography / Music and the Emotions
// ============================================================
export const cambridge12_reading_t3: IELTSTest = {
  id: "cam12-reading-academic-t3",
  title: "Cambridge IELTS 12 – Test 3",
  bookNumber: 12,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Flying Tortoises",
      passageText: `An airborne reintroduction programme has helped conservationists take significant steps to protect the endangered Galápagos tortoise.

A
Forests of spiny cacti cover much of the uneven lava plains that separate the interior of the Galápagos island of Isabela from the Pacific Ocean. With its five distinct volcanoes, the island resembles a lunar landscape. Only the thick vegetation at the skirt of the often cloud-covered peak of Sierra Negra offers respite from the barren terrain below. This inhospitable environment is home to the giant Galápagos tortoise. Some time after the Galápagos's birth, around five million years ago, the islands were colonised by one or more tortoises from mainland South America. As these ancestral tortoises settled on the individual islands, the different populations adapted to their unique environments, giving rise to at least 14 different subspecies. Island life agreed with them. In the absence of significant predators, they grew to become the largest and longest-living tortoises on the planet, weighing more than 400 kilograms, occasionally exceeding 1.8 metres in length and living for more than a century.

B
Before human arrival, the archipelago's tortoises numbered in the hundreds of thousands. From the 17th century onwards, pirates took a few on board for food, but the arrival of whaling ships in the 1790s saw this exploitation grow exponentially. Relatively immobile and capable of surviving for months without food or water, the tortoises were taken on board these ships to act as food supplies during long ocean passages. Sometimes, their bodies were processed into high-grade oil. In total, an estimated 200,000 animals were taken from the archipelago before the 20th century. This historical exploitation was then exacerbated when settlers came to the islands. They hunted the tortoises and destroyed their habitat to clear land for agriculture. They also introduced alien species – ranging from cattle, pigs, goats, rats and dogs to plants and ants – that either prey on the eggs and young tortoises or damage or destroy their habitat.

C
Today, only 11 of the original subspecies survive and of these, several are highly endangered. In 1989, work began on a tortoise-breeding centre just outside the town of Puerto Villamil on Isabela, dedicated to protecting the island's tortoise populations. The centre's captive-breeding programme proved to be extremely successful, and it eventually had to deal with an overpopulation problem.

D
The problem was also a pressing one. Captive-bred tortoises can't be reintroduced into the wild until they're at least five years old and weigh at least 4.5 kilograms, at which point their size and weight – and their hardened shells – are sufficient to protect them from predators. But if people wait too long after that point, the tortoises eventually become too large to transport.

E
For years, repatriation efforts were carried out in small numbers, with the tortoises carried on the backs of men over weeks of long, treacherous hikes along narrow trails. But in November 2010, the environmentalist and Galápagos National Park liaison officer Godfrey Merlin, a visiting private motor yacht captain and a helicopter pilot gathered around a table in a small café in Puerto Ayora on the island of Santa Cruz to work out more ambitious reintroduction. The aim was to use a helicopter to move 300 of the breeding centre's tortoises to various locations close to Sierra Negra.

F
This unprecedented effort was made possible by the owners of the 67-metre yacht White Cloud, who provided the Galápagos National Park with free use of their helicopter and its experienced pilot, as well as the logistical support of the yacht, its captain and crew. Originally an air ambulance, the yacht's helicopter has a rear double door and a large internal space that's well suited for cargo, so a custom crate was designed to hold up to 33 tortoises with a total weight of about 150 kilograms. This weight, together with that of the fuel, pilot and four crew, approached the helicopter's maximum payload, and there were times when it was clearly right on the edge of the helicopter's capabilities. During a period of three days, a group of volunteers from the breeding centre worked around the clock to prepare the young tortoises for transport. Meanwhile, park wardens, dropped off ahead of time in remote locations, cleared landing sites within the thick brush, cacti and lava rocks.

G
Upon their release, the juvenile tortoises quickly spread out over their ancestral territory, investigating their new surroundings and feeding on the vegetation. Eventually, one tiny tortoise came across a fully grown giant who had been lumbering around the island for around a hundred years. The two stood side by side, a powerful symbol of the regeneration of an ancient species.`,
      instructions: `Questions 1–7: Reading Passage 1 has seven paragraphs, A–G.
Choose the correct heading for each paragraph from the list of headings below.
Write the correct number, i–viii, in boxes 1–7 on your answer sheet.

List of Headings
i    The importance of getting the timing right
ii   Young meets old
iii  Developments to the disadvantage of tortoise populations
iv   Planning a bigger idea
v    Tortoises populate the islands
vi   Carrying out a carefully prepared operation
vii  Looking for a home for the islands' tortoises
viii The start of the conservation project

Questions 8–13: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–7: List of Headings ────────────────────────────────
        {
          id: "cam12-ra-t3-s1-q1",
          number: 1,
          groupLabel: "Questions 1–7: Choose the correct heading for each paragraph from the list of headings below.\n\ni  The importance of getting the timing right\nii  Young meets old\niii  Developments to the disadvantage of tortoise populations\niv  Planning a bigger idea\nv  Tortoises populate the islands\nvi  Carrying out a carefully prepared operation\nvii  Looking for a home for the islands' tortoises\nviii  The start of the conservation project",
          type: "matching",
          question: "1. Paragraph A",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q2",
          number: 2,
          type: "matching",
          question: "2. Paragraph B",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q3",
          number: 3,
          type: "matching",
          question: "3. Paragraph C",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q4",
          number: 4,
          type: "matching",
          question: "4. Paragraph D",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q5",
          number: 5,
          type: "matching",
          question: "5. Paragraph E",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q6",
          number: 6,
          type: "matching",
          question: "6. Paragraph F",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q7",
          number: 7,
          type: "matching",
          question: "7. Paragraph G",
          options: [
            { label: "i – The importance of getting the timing right", value: "i" },
            { label: "ii – Young meets old", value: "ii" },
            { label: "iii – Developments to the disadvantage of tortoise populations", value: "iii" },
            { label: "iv – Planning a bigger idea", value: "iv" },
            { label: "v – Tortoises populate the islands", value: "v" },
            { label: "vi – Carrying out a carefully prepared operation", value: "vi" },
            { label: "vii – Looking for a home for the islands' tortoises", value: "vii" },
            { label: "viii – The start of the conservation project", value: "viii" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        // ── Q8–13: Notes completion ───────────────────────────────
        {
          id: "cam12-ra-t3-s1-q8",
          number: 8,
          groupLabel: "Questions 8–13: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe decline of the Galápagos tortoise\n• Originally from mainland South America\n• Numbers on Galápagos islands increased, due to lack of predators\n• 17th century: small numbers taken onto ships used by 8………………………………\n• 1790s: very large numbers taken onto whaling ships, kept for 9………………………………, and also used to produce 10………………………………\n• Hunted by 11……………………………… on the islands\n• Habitat destruction: for the establishment of agriculture and by various 12……………………………… not native to the islands, which also fed on baby tortoises and tortoises' 13………………………………",
          type: "sentence_completion",
          question: "8. 17th century: small numbers taken onto ships used by _______",
          correctAnswer: "pirates",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q9",
          number: 9,
          type: "sentence_completion",
          question: "9. 1790s: very large numbers taken onto whaling ships, kept for _______",
          correctAnswer: "food",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q10",
          number: 10,
          type: "sentence_completion",
          question: "10. Also used to produce _______",
          correctAnswer: "oil",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q11",
          number: 11,
          type: "sentence_completion",
          question: "11. Hunted by _______ on the islands",
          correctAnswer: "settlers",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q12",
          number: 12,
          type: "sentence_completion",
          question: "12. Habitat destruction by various _______ not native to the islands, which also fed on baby tortoises",
          correctAnswer: "species",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s1-q13",
          number: 13,
          type: "sentence_completion",
          question: "13. Alien species also fed on baby tortoises and tortoises' _______",
          correctAnswer: "eggs",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Intersection of Health Sciences and Geography",
      passageText: `A
While many diseases that affect humans have been eradicated due to improvements in vaccinations and the availability of healthcare, there are still areas around the world where certain health issues are more prevalent. In a world that is far more globalised than ever before, people come into contact with one another through travel and living closer and closer to each other. As a result, super-viruses and other infections resistant to antibiotics are becoming more and more common.

B
Geography can often play a very large role in the health concerns of certain populations. For instance, depending on where you live, you will not have the same health concerns as someone who lives in a different geographical region. Perhaps one of the most obvious examples of this idea is malaria-prone areas, which are usually tropical regions that foster a warm and damp environment in which the mosquitos that can give people this disease can grow. Malaria is much less of a problem in high-altitude deserts, for instance.

C
In some countries, geographical factors influence the health and well-being of the population in very obvious ways. In many large cities, the wind is not strong enough to clear the air of the massive amounts of smog and pollution that cause asthma, lung problems, eyesight issues and more in the people who live there. Part of the problem is, of course, the massive number of cars being driven, in addition to factories that run on coal power. The rapid industrialisation of some countries in recent years has also led to the cutting down of forests to allow for the expansion of big cities, which makes it even harder to fight the pollution with the fresh air that is produced by plants.

D
It is in situations like these that the field of health geography comes into its own. It is an increasingly important area of study in a world where diseases like polio are re-emerging, respiratory diseases continue to spread, and malaria-prone areas are still fighting to find a better cure. Health geography is the combination of, on the one hand, knowledge regarding geography and methods used to analyse and interpret geographical information, and on the other, the study of health, diseases and healthcare practices around the world. The aim of this hybrid science is to create solutions for common geography-based health problems. While people will always be prone to illness, the study of how geography affects our health could lead to the eradication of certain illnesses, and the prevention of others in the future. By understanding why and how we get sick, we can change the way we treat illness and disease specific to certain geographical locations.

E
The geography of disease and ill health analyses the frequency with which certain diseases appear in different parts of the world, and overlays the data with the geography of the region, to see if there could be a correlation between the two. Health geographers also study factors that could make certain individuals or a population more likely to be taken ill with a specific health concern or disease, as compared with the population of another area. Health geographers in this field are usually trained as healthcare workers, and have an understanding of basic epidemiology as it relates to the spread of diseases among the population.

F
Researchers study the interactions between humans and their environment that could lead to illness (such as asthma in places with high levels of pollution) and work to create a clear way of categorizing illnesses, diseases and epidemics into local and global scales. Health geographers can map the spread of illnesses and attempt to identify the reasons behind an increase or decrease in illnesses, as they work to find a way to halt the further spread or re-emergence of diseases in vulnerable populations.

G
The second subcategory of health geography is the geography of healthcare provision. This group studies the availability (or lack thereof) of healthcare resources to individuals and populations around the world. In both developed and developing nations there is often a very large discrepancy between the options available to people in different social classes, income brackets, and levels of education. Individuals working in the area of the geography of healthcare provision attempt to assess the levels of healthcare in the area (for instance, it may be very difficult for people to get medical attention because there is a mountain between their village and the nearest hospital). These researchers are on the frontline of making recommendations regarding policy to international organisations, local government bodies and others.

H
The field of health geography is often overlooked, but it constitutes a huge area of need in the fields of geography and healthcare. If we can understand how geography affects our health no matter where in the world we are located, we can better treat disease, prevent illness, and keep people safe and well.`,
      instructions: `Questions 14–19: Reading Passage 2 has eight sections, A–H.
Which paragraph contains the following information?
Write the correct letter, A–H, in boxes 14–19 on your answer sheet.
NB You may use any letter more than once.

Questions 20–26: Complete the sentences below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–19: Which paragraph (A–H) ────────────────────────
        {
          id: "cam12-ra-t3-s2-q14",
          number: 14,
          groupLabel: "Questions 14–19: Reading Passage 2 has eight sections, A–H.\nWhich paragraph contains the following information?\nNB You may use any letter more than once.",
          type: "matching",
          question: "14. An acceptance that not all diseases can be totally eliminated",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Examples of physical conditions caused by human behaviour",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q16",
          number: 16,
          type: "matching",
          question: "16. A reference to classifying diseases on the basis of how far they extend geographically",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Reasons why the level of access to healthcare can vary within a country",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q18",
          number: 18,
          type: "matching",
          question: "18. A description of health geography as a mixture of different academic fields",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q19",
          number: 19,
          type: "matching",
          question: "19. A description of the type of area where a particular illness is rare",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q20–26: Sentence completion ───────────────────────────
        {
          id: "cam12-ra-t3-s2-q20",
          number: 20,
          groupLabel: "Questions 20–26: Complete the sentences below.\nChoose ONE WORD ONLY from the passage for each answer.",
          type: "sentence_completion",
          question: "20. Certain diseases have disappeared, thanks to better _______ and healthcare.",
          correctAnswer: "vaccinations",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q21",
          number: 21,
          type: "sentence_completion",
          question: "21. Because there is more contact between people, _______ are losing their usefulness.",
          correctAnswer: "antibiotics",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q22",
          number: 22,
          type: "sentence_completion",
          question: "22. Disease-causing _______ are most likely to be found in hot, damp regions.",
          correctAnswer: "mosquitos",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q23",
          number: 23,
          type: "sentence_completion",
          question: "23. One cause of pollution is _______ that burn a particular fuel.",
          correctAnswer: "factories",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q24",
          number: 24,
          type: "sentence_completion",
          question: "24. The growth of cities often has an impact on nearby _______.",
          correctAnswer: "forests",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q25",
          number: 25,
          type: "sentence_completion",
          question: "25. _______ is one disease that is growing after having been eradicated.",
          correctAnswer: "polio",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s2-q26",
          number: 26,
          type: "sentence_completion",
          question: "26. A physical barrier such as a _______ can prevent people from reaching a hospital.",
          correctAnswer: "mountain",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Music and the Emotions",
      passageText: `Neuroscientist Jonah Lehrer considers the emotional power of music

Why does music make us feel? On the one hand, music is a purely abstract art form, devoid of language or explicit ideas. And yet, even though music says little, it still manages to touch us deeply. When listening to our favourite songs, our body betrays all the symptoms of emotional arousal. The pupils in our eyes dilate, our pulse and blood pressure rise, the electrical conductance of our skin is lowered, and the cerebellum, a brain region associated with bodily movement, becomes strangely active. Blood is even re-directed to the muscles in our legs. In other words, sound stirs us at our biological roots.

A recent paper in Nature Neuroscience by a research team in Montreal, Canada, marks an important step in revealing the precise underpinnings of the potent pleasurable stimulus that is music. Although the study involves plenty of fancy technology, including functional magnetic resonance imaging (fMRI) and ligand-based positron emission tomography (PET) scanning, the experiment itself was rather straightforward. After screening 217 individuals who responded to advertisements requesting people who experience 'chills' to instrumental music, the scientists narrowed down the subject pool to ten. They then asked the subjects to bring in their playlist of favourite songs – virtually every genre was represented, from techno to tango – and played them the music while their brain activity was monitored. Because the scientists were combining methodologies (PET and fMRI), they were able to obtain an impressively exact and detailed portrait of music in the brain. The first thing they discovered is that music triggers the production of dopamine – a chemical with a key role in setting people's moods – by the neurons (nerve cells) in both the dorsal and ventral regions of the brain. As these two regions have long been linked with the experience of pleasure, this finding isn't particularly surprising.

What is rather more significant is the finding that the dopamine neurons in the caudate – a region of the brain involved in learning stimulus-response associations, and in anticipating food and other 'reward' stimuli – were at their most active around 15 seconds before the participants' favourite moments in the music. The researchers call this the 'anticipatory phase' and argue that the purpose of this activity is to help us predict the arrival of our favourite part. The question, of course, is what all these dopamine neurons are up to. Why are they so active in the period preceding the acoustic climax? After all, we typically associate surges of dopamine with pleasure, with the processing of actual rewards. And yet, this cluster of cells is most active when the 'chills' have yet to arrive, when the melodic pattern is still unresolved.

One way to answer the question is to look at the music and not the neurons. While music can often seem (at least to the outsider) like a labyrinth of intricate patterns, it turns out that the most important part of every song or symphony is when the patterns break down, when the sound becomes unpredictable. If the music is too obvious, it is annoyingly boring, like an alarm clock. Numerous studies, after all, have demonstrated that dopamine neurons quickly adapt to predictable rewards. If we know what's going to happen next, then we don't get excited. This is why composers often introduce a key note in the beginning of a song, spend most of the rest of the piece in the studious avoidance of the pattern, and then finally repeat it only at the end. The longer we are denied the pattern we expect, the greater the emotional release when the pattern returns, safe and sound.

To demonstrate this psychological principle, the musicologist Leonard Meyer, in his classic book Emotion and Meaning in Music (1956), analysed the 5th movement of Beethoven's String Quartet in C-sharp minor, Op. 131. Meyer wanted to show how music is defined by its flirtation with – but not submission to – our expectations of order. Meyer dissected 50 measures (bars) of the masterpiece, showing how Beethoven begins with the clear statement of a rhythmic and harmonic pattern and then, in an ingenious tonal dance, carefully holds off repeating it. What Beethoven does instead is suggest variations of the pattern. He wants to preserve an element of uncertainty in his music, making our brains beg for the one chord he refuses to give us. Beethoven saves that chord for the end.

According to Meyer, it is the suspenseful tension of music, arising out of our unfulfilled expectations, that is the source of the music's feeling. While earlier theories of music focused on the way a sound can refer to the real world of images and experiences – its 'connotative' meaning – Meyer argued that the emotions we find in music come from the unfolding events of the music itself. This 'embodied meaning' arises from the patterns the symphony invokes and then ignores. It is this uncertainty that triggers the surge of dopamine in the caudate, as we struggle to figure out what will happen next. We can predict some of the notes, but we can't predict them all, and that is what keeps us listening, waiting expectantly for our reward, for the pattern to be completed.`,
      instructions: `Questions 27–31: Complete the summary below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 32–36: Choose the correct letter, A, B, C or D.

Questions 37–40: Complete each sentence with the correct ending, A–F, below.`,
      questions: [
        // ── Q27–31: Summary completion ────────────────────────────
        {
          id: "cam12-ra-t3-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe Montreal Study\nParticipants, who were recruited for the study through advertisements, had their brain activity monitored while listening to their favourite music. It was noted that the music stimulated the brain's neurons to release a substance called 27……………………… in two of the parts of the brain which are associated with feeling 28………………………\nResearchers also observed that the neurons in the area of the brain called the 29……………………… were particularly active just before the participants' favourite moments in the music – the period known as the 30………………………. Activity in this part of the brain is associated with the expectation of 'reward' stimuli such as 31……………………….",
          type: "summary_completion",
          question: "27. Music stimulated the brain's neurons to release a substance called _______",
          correctAnswer: "dopamine",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q28",
          number: 28,
          type: "summary_completion",
          question: "28. Two parts of the brain associated with feeling _______",
          correctAnswer: "pleasure",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q29",
          number: 29,
          type: "summary_completion",
          question: "29. Neurons in the area of the brain called the _______ were particularly active just before favourite moments",
          correctAnswer: "caudate",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q30",
          number: 30,
          type: "summary_completion",
          question: "30. The period just before participants' favourite moments is known as the _______",
          correctAnswer: "anticipatory phase",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q31",
          number: 31,
          type: "summary_completion",
          question: "31. Activity in this brain region is associated with the expectation of 'reward' stimuli such as _______",
          correctAnswer: "food",
          points: 1,
        },
        // ── Q32–36: Multiple choice ───────────────────────────────
        {
          id: "cam12-ra-t3-s3-q32",
          number: 32,
          groupLabel: "Questions 32–36: Choose the correct letter, A, B, C or D.",
          type: "multiple_choice",
          question: "32. What point does the writer emphasise in the first paragraph?",
          options: [
            { label: "A – how dramatically our reactions to music can vary", value: "A" },
            { label: "B – how intense our physical responses to music can be", value: "B" },
            { label: "C – how little we know about the way that music affects us", value: "C" },
            { label: "D – how much music can tell us about how our brains operate", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q33",
          number: 33,
          type: "multiple_choice",
          question: "33. What view of the Montreal study does the writer express in the second paragraph?",
          options: [
            { label: "A – Its aims were innovative", value: "A" },
            { label: "B – The approach was too simplistic", value: "B" },
            { label: "C – It produced some remarkably precise data", value: "C" },
            { label: "D – The technology used was unnecessarily complex", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q34",
          number: 34,
          type: "multiple_choice",
          question: "34. What does the writer find interesting about the results of the Montreal study?",
          options: [
            { label: "A – the timing of participants' neural responses to the music", value: "A" },
            { label: "B – the impact of the music on participants' emotional state", value: "B" },
            { label: "C – the section of participants' brains which was activated by the music", value: "C" },
            { label: "D – the type of music which had the strongest effect on participants' brains", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q35",
          number: 35,
          type: "multiple_choice",
          question: "35. Why does the writer refer to Meyer's work on music and emotion?",
          options: [
            { label: "A – to propose an original theory about the subject", value: "A" },
            { label: "B – to offer support for the findings of the Montreal study", value: "B" },
            { label: "C – to recommend the need for further research into the subject", value: "C" },
            { label: "D – to present a view which opposes that of the Montreal researchers", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q36",
          number: 36,
          type: "multiple_choice",
          question: "36. According to Leonard Meyer, what causes the listener's emotional response to music?",
          options: [
            { label: "A – the way that the music evokes poignant memories in the listener", value: "A" },
            { label: "B – the association of certain musical chords with certain feelings", value: "B" },
            { label: "C – the listener's sympathy with the composer's intentions", value: "C" },
            { label: "D – the internal structure of the musical composition", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q37–40: Sentence endings ──────────────────────────────
        {
          id: "cam12-ra-t3-s3-q37",
          number: 37,
          groupLabel: "Questions 37–40: Complete each sentence with the correct ending, A–F, below.\n\nA  our response to music depends on our initial emotional state.\nB  neuron activity decreases if outcomes become predictable.\nC  emotive music can bring to mind actual pictures and events.\nD  experiences in our past can influence our emotional reaction to music.\nE  emotive music delays giving listeners what they expect to hear.\nF  neuron activity increases prior to key points in a musical piece.",
          type: "matching",
          question: "37. The Montreal researchers discovered that …",
          options: [
            { label: "A – our response to music depends on our initial emotional state", value: "A" },
            { label: "B – neuron activity decreases if outcomes become predictable", value: "B" },
            { label: "C – emotive music can bring to mind actual pictures and events", value: "C" },
            { label: "D – experiences in our past can influence our emotional reaction to music", value: "D" },
            { label: "E – emotive music delays giving listeners what they expect to hear", value: "E" },
            { label: "F – neuron activity increases prior to key points in a musical piece", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q38",
          number: 38,
          type: "matching",
          question: "38. Many studies have demonstrated that …",
          options: [
            { label: "A – our response to music depends on our initial emotional state", value: "A" },
            { label: "B – neuron activity decreases if outcomes become predictable", value: "B" },
            { label: "C – emotive music can bring to mind actual pictures and events", value: "C" },
            { label: "D – experiences in our past can influence our emotional reaction to music", value: "D" },
            { label: "E – emotive music delays giving listeners what they expect to hear", value: "E" },
            { label: "F – neuron activity increases prior to key points in a musical piece", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q39",
          number: 39,
          type: "matching",
          question: "39. Meyer's analysis of Beethoven's music shows that …",
          options: [
            { label: "A – our response to music depends on our initial emotional state", value: "A" },
            { label: "B – neuron activity decreases if outcomes become predictable", value: "B" },
            { label: "C – emotive music can bring to mind actual pictures and events", value: "C" },
            { label: "D – experiences in our past can influence our emotional reaction to music", value: "D" },
            { label: "E – emotive music delays giving listeners what they expect to hear", value: "E" },
            { label: "F – neuron activity increases prior to key points in a musical piece", value: "F" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam12-ra-t3-s3-q40",
          number: 40,
          type: "matching",
          question: "40. Earlier theories of music suggested that …",
          options: [
            { label: "A – our response to music depends on our initial emotional state", value: "A" },
            { label: "B – neuron activity decreases if outcomes become predictable", value: "B" },
            { label: "C – emotive music can bring to mind actual pictures and events", value: "C" },
            { label: "D – experiences in our past can influence our emotional reaction to music", value: "D" },
            { label: "E – emotive music delays giving listeners what they expect to hear", value: "E" },
            { label: "F – neuron activity increases prior to key points in a musical piece", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 12 – TEST 4  (Academic Reading)
// ============================================================
export const cambridge12_reading_t4: IELTSTest = {
  id: "cam12-reading-academic-t4",
  title: "Cambridge IELTS 12 – Test 4",
  bookNumber: 12,
  testNumber: 4,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t4-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The Robots Are Coming",
      passageText: `For most of human history, work has meant physical labour – growing food, making things, moving goods from one place to another. The industrial revolution transformed this pattern, replacing human and animal muscle power with machines in many areas of production. Now a new technological revolution appears to be under way – one that is replacing human cognitive labour as well as physical labour with machines, and specifically with computer systems capable of learning from experience and adapting their behaviour accordingly.

The term 'artificial intelligence', or AI, covers a wide range of techniques and capabilities. At the simpler end of the spectrum are systems that follow fixed rules: if this condition is met, do this; if that condition is met, do that. These systems, though sometimes complex, do not 'learn' – they can only do what they have been explicitly programmed to do. More sophisticated are machine learning systems, which improve their performance by analysing data. The most advanced systems use a technique called deep learning, in which networks of simulated neurons process vast quantities of information to identify patterns that would be beyond the capacity of a human analyst to detect.

The economic implications of AI and robotics are a matter of intense debate. On one side are those who argue that, as in previous technological revolutions, the jobs displaced by automation will be replaced by new ones that we cannot yet predict. When textile mills replaced hand-weavers in the 19th century, for example, the resulting surge in productivity eventually generated enough additional economic activity to create jobs for more people than had previously worked in the textile industry. Optimists argue that AI will follow a similar pattern: by making workers more productive and lowering the cost of many goods and services, it will free up resources that can be deployed to meet new needs and generate new categories of employment.

The pessimists are unconvinced. They argue that the current technological transition is different in kind from previous ones, because it is not restricted to a single sector or type of activity. Previous waves of automation targeted physical, repetitive tasks. Machines could replace a weaver or a factory worker, but they could not write, argue, make aesthetic judgements, or form relationships. AI threatens to change this. Systems already exist that can write competent news reports, pass medical diagnostic tests with accuracy matching or exceeding specialist doctors, drive vehicles without human input, and translate between languages in real time. The scope of the potential displacement is therefore far wider than in any previous technological revolution.

A related concern is the distributional effects of automation – that is, who gains and who loses. Some economists argue that automation tends to benefit capital owners (since it reduces the need for labour) at the expense of workers. And within the workforce, it tends to benefit highly skilled workers, whose capabilities are complementary to those of machines, at the expense of middle-skill workers who perform the kinds of routine cognitive tasks that machines are increasingly good at. This has already been observed in labour markets across the developed world, where middle-skill employment has been 'hollowed out' in recent decades. Wages have grown strongly for those at the top of the skill distribution and those performing personal service jobs that machines cannot yet do, but have stagnated for the large group in between.

Not everyone accepts this prognosis, however. A growing school of thought argues that the labour market effects of AI will be more modest than the pessimists suggest, partly because many of the predictions of massive job displacement have not yet materialised. There is also the question of human preferences: many people actively prefer to deal with other people rather than machines, even when the machine is as capable or more capable. The role of trust, empathy and personal connection in many service occupations may be hard for machines to replicate, even if their technical performance is superior.

One thing that most observers agree on is that the transition, whatever its ultimate scale, will be uneven. Some sectors and some categories of workers will be affected much sooner and more severely than others. And some countries will be better placed than others to manage the transition, depending on their educational systems, social safety nets, labour market structures, and industrial policies. The countries that navigate this transition most successfully are likely to be those that invest heavily in equipping their workforces with skills that complement rather than compete with AI systems.`,
      instructions: `Questions 1–6: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 7–13: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–6: TRUE / FALSE / NOT GIVEN ───────────────────────
        {
          id: "cam12-ra-t4-s1-q1",
          number: 1,
          type: "true_false_ng",
          question: "1. Simple AI systems cannot learn from experience.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Deep learning systems use simulated neurons to identify patterns in data.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. The industrial revolution ultimately created more jobs than it destroyed in the textile industry.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. AI can already perform some tasks as well as specialist doctors.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. All economists agree that automation benefits capital owners at the expense of workers.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. There is evidence that the wages of highly-skilled workers have risen in recent decades.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q7–13: Summary completion ─────────────────────────────
        {
          id: "cam12-ra-t4-s1-q7",
          number: 7,
          groupLabel: "Questions 7–13: Complete the summary below.\nChoose ONE WORD ONLY from the passage.\n\nArguments about AI and employment\n\nOptimists believe that AI will increase _______  and reduce costs, generating new jobs in the process.",
          type: "sentence_completion",
          question: "7. Optimists believe AI will increase _______ and reduce costs.",
          correctAnswer: "productivity",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q8",
          number: 8,
          type: "sentence_completion",
          question: "8. Pessimists argue the current wave of automation is different because it is not limited to one _______ or type of work.",
          correctAnswer: "sector",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q9",
          number: 9,
          type: "sentence_completion",
          question: "9. Middle-skill workers perform _______ cognitive tasks that machines are now increasingly capable of.",
          correctAnswer: "routine",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q10",
          number: 10,
          type: "sentence_completion",
          question: "10. In recent years middle-skill employment in developed countries has been _______ out.",
          correctAnswer: "hollowed",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q11",
          number: 11,
          type: "sentence_completion",
          question: "11. Some argue that predictions of massive job _______ have not yet come true.",
          correctAnswer: "displacement",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q12",
          number: 12,
          type: "sentence_completion",
          question: "12. Human qualities like _______ and personal connection may be hard for machines to replicate.",
          correctAnswer: "empathy",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s1-q13",
          number: 13,
          type: "sentence_completion",
          question: "13. Countries with strong _______ systems will be better placed to manage the transition to an AI economy.",
          correctAnswer: "educational",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t4-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Power of Play",
      passageText: `In the animal kingdom, play is not exclusively a human activity. Young mammals of many species – from lion cubs to wolf pups to juvenile chimpanzees – spend a substantial portion of their waking hours in activities that appear purposeless: wrestling, chasing, pouncing on inanimate objects. Ethologists – scientists who study animal behaviour – have documented play in hundreds of species. Yet despite decades of research, the function of play remains surprisingly contentious. Why should animals expend valuable energy on behaviour that does not directly produce food, shelter or offspring?

One influential theory holds that play is primarily a mechanism for developing physical skills. Young animals that play are practising the movements and sequences they will need as adults: the lion cub that stalks and pounces on its siblings is rehearsing the hunting behaviour it will need to survive. Evidence for this view comes from studies showing that animals deprived of play opportunities in early life have impaired motor development. In one classic experiment, kittens raised without opportunities for play showed delays in the development of hunting behaviour when compared with kittens who had played normally.

A second theory emphasises the social function of play. Many forms of animal play are interactive – they involve establishing and negotiating relationships with other individuals, learning the rules of social interaction, and building bonds that may be useful in adult life. Play fighting, for example, typically involves elements of self-handicapping, in which larger or stronger individuals moderate their behaviour to keep the game going – a behaviour that requires sophisticated social awareness. Young animals that miss out on this kind of play may struggle to read social cues and manage relationships as adults.

A third theory, developed more recently, focuses on the role of play in cognitive development. Studies of play in rats, for example, have found that play experience is associated with the development of specific areas of the brain involved in executive function – the ability to plan, focus attention, and switch between tasks. Similar findings have emerged from studies of primate play. The cognitive benefits of play may be particularly important in species that face complex and unpredictable environments, where flexibility and problem-solving ability are at a premium.

In humans, research on the benefits of play has expanded rapidly, driven partly by concerns about declining opportunities for free play in modern childhood. Children in many developed countries today spend less time in unstructured outdoor play than in previous generations, and more time in structured activities and sedentary screen-based entertainment. Researchers have documented a range of potential consequences: higher rates of anxiety and depression, lower scores on measures of creativity and executive function, and reduced social competence.

Stuart Brown, an American psychiatrist who has studied play for over 30 years, argues that play is not a luxury but a biological necessity. In his research, Brown found that a history of rich play experiences in childhood was associated with better adult social and emotional adjustment. More strikingly, he found that a history of play deprivation was a common feature in the backgrounds of violent criminals and individuals with severe personality disorders. Brown's work suggests that play does not merely produce desirable outcomes; it may be essential to normal psychological development.

The educational implications of this research are a source of ongoing debate. In many countries, pressure to improve academic performance has led to reductions in free play time in schools, including cuts to recess in the United States and similar trends in the UK and elsewhere. Advocates of play argue that this is counterproductive: that children learn better when they have adequate time for play and that the cognitive skills developed through play – including creativity, social competence and self-regulation – are precisely those required for success in learning. Some educational systems, notably in Scandinavia, have maintained or increased time for play and show no evidence of poorer academic outcomes as a result. But changing the culture of schools in countries where academic pressure is intense is proving difficult.`,
      instructions: `Questions 14–20: Do the following statements agree with the information given in Reading Passage 2?
Write TRUE, FALSE, or NOT GIVEN.

Questions 21–26: Complete the sentences below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–20: TRUE / FALSE / NOT GIVEN ─────────────────────
        {
          id: "cam12-ra-t4-s2-q14",
          number: 14,
          groupLabel: "Questions 14–20: Do the following statements agree with the information given in Reading Passage 2?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "14. Play has been observed in hundreds of animal species.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q15",
          number: 15,
          type: "true_false_ng",
          question: "15. Kittens deprived of play developed hunting behaviour at the same rate as kittens who played normally.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q16",
          number: 16,
          type: "true_false_ng",
          question: "16. Self-handicapping in play fighting shows that animals have a degree of social awareness.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q17",
          number: 17,
          type: "true_false_ng",
          question: "17. Studies on rat play have found links between play and the development of brain areas related to executive function.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q18",
          number: 18,
          type: "true_false_ng",
          question: "18. Children in developed countries today spend more time in free outdoor play than they did in previous generations.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q19",
          number: 19,
          type: "true_false_ng",
          question: "19. Stuart Brown found a lack of play in childhood was frequently found in the histories of severely troubled adults.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q20",
          number: 20,
          type: "true_false_ng",
          question: "20. Scandinavian schools have shown worse academic results because they give children more time to play.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        // ── Q21–26: Sentence completion ───────────────────────────
        {
          id: "cam12-ra-t4-s2-q21",
          number: 21,
          groupLabel: "Questions 21–26: Complete the sentences below.\nChoose ONE WORD ONLY from the passage for each answer.",
          type: "sentence_completion",
          question: "21. The function of play remains _______ despite decades of scientific research.",
          correctAnswer: "contentious",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q22",
          number: 22,
          type: "sentence_completion",
          question: "22. Young animals deprived of play show _______ in their motor development.",
          correctAnswer: "delays",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q23",
          number: 23,
          type: "sentence_completion",
          question: "23. In play fighting, stronger animals _______ their behaviour so that weaker ones can keep up.",
          correctAnswer: "moderate",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q24",
          number: 24,
          type: "sentence_completion",
          question: "24. The cognitive benefits of play are especially important for animals facing _______ and unpredictable environments.",
          correctAnswer: "complex",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q25",
          number: 25,
          type: "sentence_completion",
          question: "25. Stuart Brown argues that play is a biological _______, not simply an optional extra.",
          correctAnswer: "necessity",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s2-q26",
          number: 26,
          type: "sentence_completion",
          question: "26. Advocates of play argue that reducing play time in schools is _______, as children learn better with adequate play.",
          correctAnswer: "counterproductive",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam12-ra-t4-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Educating Psyche: Emotions and Learning",
      passageText: `For most of the 20th century, mainstream education was conducted on the assumption that learning is a rational process. Students absorb information, practise skills, and acquire knowledge through a process of cognitive engagement. Emotions, on this model, were irrelevant at best and distracting at worst. A student who was anxious, excited, bored or happy was experiencing something real, no doubt – but these states were not considered to have any systematic bearing on the quality of learning. Good teachers knew intuitively that emotional states mattered, but this knowledge was largely excluded from the formal theories of learning that guided educational research and practice.

In the last three decades, this picture has been radically revised. Neuroscience, cognitive psychology and educational research have converged on a new understanding in which emotion and cognition are deeply intertwined. Far from being irrelevant to learning, emotional states shape attention, motivation, memory formation and the capacity for creative thought. A student who is curious is in a fundamentally different cognitive state from one who is bored; a student who is anxious about failure processes information differently from one who feels safe enough to take risks. The implications for educational practice are profound, though turning research findings into practical guidance for teachers remains challenging.

One of the most influential concepts in this field is the idea of 'emotional regulation' – the capacity to manage and modulate one's emotional states in service of goals. Emotional regulation is not the same as emotional suppression: it does not mean eliminating emotion from learning, but rather harnessing it productively. Students who can recognise when they are feeling overwhelmed and take steps to manage their anxiety, or who can maintain motivation in the face of setbacks, are likely to be more effective learners than those who cannot. Teaching emotional regulation skills has become a major focus of social and emotional learning (SEL) programmes in schools in many countries.

The concept of 'mindset', developed by psychologist Carol Dweck, has had a particularly wide influence in education. Dweck's research distinguished between two fundamental orientations towards ability and intelligence: a 'fixed mindset', in which ability is seen as an innate quality that one either has or lacks, and a 'growth mindset', in which ability is seen as something that can be developed through effort and learning. Students with a growth mindset, her research suggested, are more resilient in the face of failure, more willing to take on challenging tasks, and ultimately achieve more than those with a fixed mindset. Importantly, Dweck found that mindset is not fixed: students can be taught to adopt a growth mindset, and interventions designed to cultivate this orientation have been shown to have positive effects on achievement in some studies.

The role of social and cultural context in shaping emotional responses to learning has also received increasing research attention. Students do not enter classrooms as blank slates: they bring with them a complex web of prior experiences, expectations, identity commitments and social relationships that profoundly shape their engagement with learning. Students who belong to groups that are stereotyped as less academically capable, for example, may experience 'stereotype threat' – a fear of confirming negative expectations – that impairs their performance even when they are fully capable of the task. The research of Claude Steele and others has shown that stereotype threat can be triggered by relatively subtle cues and can have significant effects on test performance.

Interventions designed to address stereotype threat have produced mixed results. Some studies have found that brief exercises aimed at affirming students' sense of identity and values can neutralise the effects of stereotype threat and improve performance. Others have found smaller effects or have struggled to replicate positive findings. This variability suggests that the relationship between emotion, identity and academic performance is complex and context-dependent. There are no simple universal solutions, and what works in one setting may not work in another.

Perhaps the most fundamental insight from this body of research is the importance of the relationship between teacher and student. Students who feel respected, understood and cared for by their teachers are more likely to engage productively with learning than those who do not. This is not simply a matter of creating a pleasant atmosphere; it reflects the biological reality that humans learn best when they feel safe and connected. The teacher's role, on this understanding, extends beyond the transmission of knowledge to include the creation of an emotional environment in which learning can flourish. This expanded understanding of what it means to teach well is both demanding and, to many educators, profoundly motivating.`,
      instructions: `Questions 27–32: Choose the correct letter, A, B, C or D.

Questions 33–38: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 39–40: Answer the questions below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q27–32: Multiple choice ───────────────────────────────
        {
          id: "cam12-ra-t4-s3-q27",
          number: 27,
          groupLabel: "Questions 27–32: Choose the correct letter, A, B, C or D.",
          type: "multiple_choice",
          question: "27. According to the first paragraph, which of the following best describes the traditional view of emotion in education?",
          options: [
            { label: "A. Emotions were seen as helpful to the learning process", value: "A" },
            { label: "B. Emotions were considered unrelated to learning outcomes", value: "B" },
            { label: "C. Teachers were trained to manage students' emotions", value: "C" },
            { label: "D. Emotions were thought to be the main barrier to learning", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. The writer says that current research shows that",
          options: [
            { label: "A. emotion and reason are fundamentally opposed", value: "A" },
            { label: "B. turning research into practical teaching guidance is straightforward", value: "B" },
            { label: "C. emotion plays an important role in how students process and retain information", value: "C" },
            { label: "D. only neuroscience has contributed to the new understanding of learning", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. According to the passage, emotional regulation involves",
          options: [
            { label: "A. removing emotion from the learning process", value: "A" },
            { label: "B. ensuring students are always in a calm emotional state", value: "B" },
            { label: "C. using emotional states effectively to support learning", value: "C" },
            { label: "D. preventing students from feeling anxious in class", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. Carol Dweck's research on mindset suggests that",
          options: [
            { label: "A. intelligence is a fixed quality that cannot be changed", value: "A" },
            { label: "B. students can be helped to change their orientation towards learning", value: "B" },
            { label: "C. all students naturally adopt a growth mindset over time", value: "C" },
            { label: "D. a fixed mindset is more helpful in facing challenging tasks", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. According to the passage, stereotype threat",
          options: [
            { label: "A. only affects students from disadvantaged backgrounds", value: "A" },
            { label: "B. requires obvious prejudice from teachers to take effect", value: "B" },
            { label: "C. can reduce academic performance even in capable students", value: "C" },
            { label: "D. has been consistently eliminated through identity-affirmation exercises", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q32",
          number: 32,
          type: "multiple_choice",
          question: "32. In the final paragraph, the writer argues that the relationship between teacher and student is important because",
          options: [
            { label: "A. it helps teachers to monitor students' emotional states", value: "A" },
            { label: "B. feeling safe and connected enhances human learning", value: "B" },
            { label: "C. it compensates for weaknesses in the academic content", value: "C" },
            { label: "D. students perform better when they like their teachers", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q33–38: Summary completion ────────────────────────────
        {
          id: "cam12-ra-t4-s3-q33",
          number: 33,
          groupLabel: "Questions 33–38: Complete the summary below.\nChoose ONE WORD ONLY from the passage.\n\nThe role of emotions in learning\n\nFor much of the 20th century, learning was considered a purely _______ process.",
          type: "sentence_completion",
          question: "33. For much of the 20th century, learning was considered a purely _______ process.",
          correctAnswer: "rational",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q34",
          number: 34,
          type: "sentence_completion",
          question: "34. Research now shows that emotion and _______ are closely linked.",
          correctAnswer: "cognition",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q35",
          number: 35,
          type: "sentence_completion",
          question: "35. _______ regulation – managing emotional states to support goals – is now taught in many schools.",
          correctAnswer: "emotional",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q36",
          number: 36,
          type: "sentence_completion",
          question: "36. Students with a growth _______ are more willing to take on challenges and more resilient when they fail.",
          correctAnswer: "mindset",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q37",
          number: 37,
          type: "sentence_completion",
          question: "37. Students who belong to groups that are _______ as less capable may experience 'stereotype threat'.",
          correctAnswer: "stereotyped",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q38",
          number: 38,
          type: "sentence_completion",
          question: "38. Research on interventions to reduce stereotype threat has produced _______ results – some studies work, others do not.",
          correctAnswer: "mixed",
          points: 1,
        },
        // ── Q39–40: Short answer ──────────────────────────────────
        {
          id: "cam12-ra-t4-s3-q39",
          number: 39,
          groupLabel: "Questions 39–40: Answer the questions below.\nChoose ONE WORD ONLY from the passage.",
          type: "short_answer",
          question: "39. According to Carol Dweck, what can students be taught to adopt that improves their academic resilience?",
          correctAnswer: "mindset",
          points: 1,
        },
        {
          id: "cam12-ra-t4-s3-q40",
          number: 40,
          type: "short_answer",
          question: "40. What does the writer say a teacher creates in addition to transmitting knowledge?",
          correctAnswer: "environment",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge12Tests: IELTSTest[] = [cambridge12_reading_t1, cambridge12_reading_t2, cambridge12_reading_t3, cambridge12_reading_t4];
