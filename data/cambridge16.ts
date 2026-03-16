import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 16 – TEST 1  (Academic Reading)
// Passages: Why we need to protect polar bears /
//           The Step Pyramid of Djoser /
//           The future of work
// ============================================================
export const cambridge16_reading_t1: IELTSTest = {
  id: "cam16-reading-academic-t1",
  title: "Cambridge IELTS 16 – Test 1",
  bookNumber: 16,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Why we need to protect polar bears",
      passageText: `Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.

A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low-density lipoproteins (LDLs) – a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.

The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.

Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.

The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.

In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.

As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.

If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.`,
      instructions: `Questions 1–7: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 8–13: Complete the table below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–7: True/False/Not Given ────────────────────────────
        {
          id: "cam16-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–7: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n1  Polar bears suffer from various health problems due to the build-up of fat under their skin.\n2  The study done by Liu and his colleagues compared different groups of polar bears.\n3  Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.\n4  Polar bears are able to control their levels of 'bad' cholesterol by genetic means.\n5  Female polar bears are able to survive for about six months without food.\n6  It was found that the bones of female polar bears were very weak when they came out of their dens in spring.\n7  The polar bear's mechanism for increasing bone density could also be used by people one day.",
          type: "true_false_ng",
          question: "1. Polar bears suffer from various health problems due to the build-up of fat under their skin.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. The study done by Liu and his colleagues compared different groups of polar bears.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Polar bears are able to control their levels of 'bad' cholesterol by genetic means.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Female polar bears are able to survive for about six months without food.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. It was found that the bones of female polar bears were very weak when they came out of their dens in spring.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. The polar bear's mechanism for increasing bone density could also be used by people one day.",
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q8–13: Table completion ───────────────────────────────
        {
          id: "cam16-ra-t1-s1-q8",
          number: 8,
          groupLabel: "Questions 8–13: Complete the table below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nReasons why polar bears should be protected\nPeople think of bears as unintelligent and 8 ………………. .\nHowever, this may not be correct. For example:\n● In Tennoji Zoo, a bear has been seen using a branch as a 9 ………………. . This allowed him to knock down some 10 ………………. .\n● A wild polar bear worked out a method of reaching a platform where a 11 ………………. was located.\n● Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a 12 ………………. .\nBears may also display emotions. For example:\n● They may make movements suggesting 13 ………………. if disappointed when hunting.\n● They may form relationships with other species.",
          type: "table_completion",
          question: "8. People think of bears as unintelligent and _______",
          correctAnswer: "violent",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q9",
          number: 9,
          type: "table_completion",
          question: "9. A bear has been seen using a branch as a _______",
          correctAnswer: "tool",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q10",
          number: 10,
          type: "table_completion",
          question: "10. The branch allowed him to knock down some _______",
          correctAnswer: "meat",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q11",
          number: 11,
          type: "table_completion",
          question: "11. A wild polar bear worked out a method of reaching a platform where a _______ was located",
          correctAnswer: "photographer",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q12",
          number: 12,
          type: "table_completion",
          question: "12. Polar bears have displayed activity similar to a _______",
          correctAnswer: "game",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q13",
          number: 13,
          type: "table_completion",
          question: "13. They may make movements suggesting _______ if disappointed when hunting",
          correctAnswer: "frustration",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Step Pyramid of Djoser",
      passageText: `A
The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.

B
Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser's main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.

C
The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing 'Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans … before it became the first Step Pyramid in history, piling six levels on top of one another … The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.'

D
When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep's name carved on it as well.

E
The burial chamber of the tomb, where the king's body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid's underground passages. They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then give a 'proper burial' by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king's burial chamber.

F
Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser's grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.

G
Egyptologist Miroslav Verner writes, 'Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara … It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.' The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.`,
      instructions: `Questions 14–20: Reading Passage 2 has seven paragraphs, A–G.
Choose the correct heading for each paragraph from the list of headings below.

List of Headings
i    The areas and artefacts within the pyramid itself
ii   A difficult task for those involved
iii  A king who saved his people
iv   A single certainty among other less definite facts
v    An overview of the external buildings and areas
vi   A pyramid design that others copied
vii  An idea for changing the design of burial structures
viii An incredible experience despite the few remains
ix   The answers to some unexpected questions

Questions 21–24: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 25–26: Choose TWO letters, A–E.`,
      questions: [
        // ── Q14–20: Heading matching ──────────────────────────────
        {
          id: "cam16-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–20: Reading Passage 2 has seven paragraphs, A–G.\nChoose the correct heading for each paragraph from the list of headings below.\n\nList of Headings\ni    The areas and artefacts within the pyramid itself\nii   A difficult task for those involved\niii  A king who saved his people\niv   A single certainty among other less definite facts\nv    An overview of the external buildings and areas\nvi   A pyramid design that others copied\nvii  An idea for changing the design of burial structures\nviii An incredible experience despite the few remains\nix   The answers to some unexpected questions",
          type: "matching",
          question: "14. Paragraph A",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Paragraph B",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. Paragraph C",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Paragraph D",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Paragraph E",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Paragraph F",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Paragraph G",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        // ── Q21–24: Notes completion ──────────────────────────────
        {
          id: "cam16-ra-t1-s2-q21",
          number: 21,
          groupLabel: "Questions 21–24: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Step Pyramid of Djoser\nThe complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian 21 ………………….. of the past. The area outside the pyramid included accommodation that was occupied by 22 ………………….., along with many other buildings and features.\nA wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long 23 ………………….. encircled the wall. As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the 24 ………………….. of the real entrance.",
          type: "note_completion",
          question: "21. The complex is considered to be as big as an Egyptian _______ of the past",
          correctAnswer: "city",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q22",
          number: 22,
          type: "note_completion",
          question: "22. The area outside the pyramid included accommodation occupied by _______",
          correctAnswer: "priests",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q23",
          number: 23,
          type: "note_completion",
          question: "23. A long _______ encircled the wall",
          correctAnswer: "trench",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q24",
          number: 24,
          type: "note_completion",
          question: "24. Uninvited visitors needed to know the _______ of the real entrance",
          correctAnswer: "location",
          points: 1,
        },
        // ── Q25–26: Choose TWO points about King Djoser ───────────
        {
          id: "cam16-ra-t1-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO of the following points does the writer make about King Djoser?\n\nA  Initially he had to be persuaded to build in stone rather than clay.\nB  There is disagreement concerning the length of his reign.\nC  He failed to appreciate Imhotep's part in the design of the Step Pyramid.\nD  A few of his possessions were still in his tomb when archaeologists found it.\nE  He criticised the design and construction of other pyramids in Egypt.",
          type: "multiple_choice",
          question: "25. Which TWO points does the writer make about King Djoser? (Choose TWO — this is the first answer)",
          options: [
            { label: "A  Initially he had to be persuaded to build in stone rather than clay.", value: "A" },
            { label: "B  There is disagreement concerning the length of his reign.", value: "B" },
            { label: "C  He failed to appreciate Imhotep's part in the design of the Step Pyramid.", value: "C" },
            { label: "D  A few of his possessions were still in his tomb when archaeologists found it.", value: "D" },
            { label: "E  He criticised the design and construction of other pyramids in Egypt.", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Which TWO points does the writer make about King Djoser? (Choose TWO — this is the second answer)",
          options: [
            { label: "A  Initially he had to be persuaded to build in stone rather than clay.", value: "A" },
            { label: "B  There is disagreement concerning the length of his reign.", value: "B" },
            { label: "C  He failed to appreciate Imhotep's part in the design of the Step Pyramid.", value: "C" },
            { label: "D  A few of his possessions were still in his tomb when archaeologists found it.", value: "D" },
            { label: "E  He criticised the design and construction of other pyramids in Egypt.", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The future of work",
      passageText: `According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or 'embodied artificial intelligence' (AI) – is one aspect of the disruptive effects of technology on the labour market. 'Disembodied AI', like the algorithms running in our smartphones, is another.

Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the 'algorithmication' of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.

'In many cases, they can outperform humans,' says Pachidi. 'Organisations are attracted to using algorithms because they want to make choices based on what they consider is "perfect information", as well as to reduce costs and enhance productivity.'

'But these enhancements are not without consequences,' says Pachidi. 'If routine cognitive tasks are taken over by AI, how do professions develop their future experts?' she asks. 'One way of learning about a job is "legitimate peripheral participation" – a novice stands next to experts and learns by observation. If this isn't happening, then you need to find new ways to learn.'

Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. 'The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a(n) … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.'

The algorithm – usually built by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the 'algorithm's eyes' and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.

Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. 'We are seeing cases where workers feed the algorithm with false data to reach their targets,' she reports.

It's scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, 'We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.'

Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: 'The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,' says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.

On the subject of job losses, Low believes the predictions are founded on a fallacy: 'It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn't mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.'

Dr Ewan McGaughey, at Cambridge's Centre for Business Research and King's College London, agrees that 'apocalyptic' views about the future of work are misguided. 'It's the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.'

His recently published research answers the question of whether automation, AI and robotics will mean a 'jobless future' by looking at the causes of unemployment. 'History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.'

He adds: 'If there is going to be change to jobs as a result of AI and robotics then I'd like to see governments seizing the opportunity to improve policy to enforce good job security. We can "reprogramme" the law to prepare for a fairer future of work and leisure.' McGaughey's findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.

'The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,' he adds. 'Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.'`,
      instructions: `Questions 27–30: Choose the correct letter, A, B, C or D.

Questions 31–34: Complete the summary using the list of words, A–G, below.

Questions 35–40: Match each statement with the correct person, A, B or C.`,
      questions: [
        // ── Q27–30: Multiple choice ───────────────────────────────
        {
          id: "cam16-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–30: Choose the correct letter, A, B, C or D.\n\n27. The first paragraph tells us about\nA  the kinds of jobs that will be most affected by the growth of AI.\nB  the extent to which AI will alter the nature of the work that people do.\nC  the proportion of the world's labour force who will have jobs in AI in the future.\nD  the difference between ways that embodied and disembodied AI will impact on workers.",
          type: "multiple_choice",
          question: "27. The first paragraph tells us about\nA  the kinds of jobs that will be most affected by the growth of AI.\nB  the extent to which AI will alter the nature of the work that people do.\nC  the proportion of the world's labour force who will have jobs in AI in the future.\nD  the difference between ways that embodied and disembodied AI will impact on workers.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q28",
          number: 28,
          groupLabel: "28. According to the second paragraph, what is Stella Pachidi's view of the 'knowledge economy'?\nA  It is having an influence on the number of jobs available.\nB  It is changing people's attitudes towards their occupations.\nC  It is the main reason why the production sector is declining.\nD  It is a key factor driving current developments in the workplace.",
          type: "multiple_choice",
          question: "28. According to the second paragraph, what is Stella Pachidi's view of the 'knowledge economy'?\nA  It is having an influence on the number of jobs available.\nB  It is changing people's attitudes towards their occupations.\nC  It is the main reason why the production sector is declining.\nD  It is a key factor driving current developments in the workplace.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q29",
          number: 29,
          groupLabel: "29. What did Pachidi observe at the telecommunications company?\nA  staff disagreeing with the recommendations of AI\nB  staff feeling resentful about the intrusion of AI in their work\nC  staff making sure that AI produces the results that they want\nD  staff allowing AI to carry out tasks they ought to do themselves",
          type: "multiple_choice",
          question: "29. What did Pachidi observe at the telecommunications company?\nA  staff disagreeing with the recommendations of AI\nB  staff feeling resentful about the intrusion of AI in their work\nC  staff making sure that AI produces the results that they want\nD  staff allowing AI to carry out tasks they ought to do themselves",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q30",
          number: 30,
          groupLabel: "30. In his recently published research, Ewan McGaughey\nA  challenges the idea that redundancy is a negative thing.\nB  shows the profound effect of mass unemployment on society.\nC  highlights some differences between past and future job losses.\nD  illustrates how changes in the job market can be successfully handled.",
          type: "multiple_choice",
          question: "30. In his recently published research, Ewan McGaughey\nA  challenges the idea that redundancy is a negative thing.\nB  shows the profound effect of mass unemployment on society.\nC  highlights some differences between past and future job losses.\nD  illustrates how changes in the job market can be successfully handled.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q31–34: Summary completion with word list ─────────────
        {
          id: "cam16-ra-t1-s3-q31",
          number: 31,
          groupLabel: "Questions 31–34: Complete the summary using the list of words, A–G, below.\nWrite the correct letter, A–G, in boxes 31–34 on your answer sheet.\n\nThe 'algorithmication' of jobs\nStella Pachidi of Cambridge Judge Business School has been focusing on the 'algorithmication' of jobs which rely not on production but on 31 …………………. .\nWhile monitoring a telecommunications company, Pachidi observed a growing 32 …………………. on the recommendations made by AI, as workers begin to learn through the 'algorithm's eyes'. Meanwhile, staff are deterred from experimenting and using their own 33 …………………., and are therefore prevented from achieving innovation.\nTo avoid the kind of situations which Pachidi observed, researchers are trying to make AI's decision-making process easier to comprehend, and to increase users' 34 …………………. with regard to the technology.\n\nA  pressure    B  satisfaction    C  intuition\nD  promotion   E  reliance       F  confidence\nG  information",
          type: "matching",
          question: "31. Jobs which rely not on production but on _______",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "32. A growing _______ on the recommendations made by AI",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "33. Staff are deterred from using their own _______",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. Researchers aim to increase users' _______ with regard to the technology",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        // ── Q35–40: People matching ───────────────────────────────
        {
          id: "cam16-ra-t1-s3-q35",
          number: 35,
          groupLabel: "Questions 35–40: Look at the following statements (Questions 35–40) and the list of people below.\nMatch each statement with the correct person, A, B or C.\nWrite the correct letter, A, B or C, in boxes 35–40 on your answer sheet.\nNB You may use any letter more than once.\n\nList of people\nA  Stella Pachidi\nB  Hamish Low\nC  Ewan McGaughey",
          type: "matching",
          question: "35. Greater levels of automation will not result in lower employment.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q36",
          number: 36,
          type: "matching",
          question: "36. There are several reasons why AI is appealing to businesses.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q37",
          number: 37,
          type: "matching",
          question: "37. AI's potential to transform people's lives has parallels with major cultural shifts which occurred in previous eras.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q38",
          number: 38,
          type: "matching",
          question: "38. It is important to be aware of the range of problems that AI causes.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q39",
          number: 39,
          type: "matching",
          question: "39. People are going to follow a less conventional career path than in the past.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q40",
          number: 40,
          type: "matching",
          question: "40. Authorities should take measures to ensure that there will be adequately paid work for everyone.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge16Tests: IELTSTest[] = [cambridge16_reading_t1];
