import type { IELTSTest } from "./ielts-tests";

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

export const cambridge16_reading_t2: IELTSTest = {
  id: "cam16-reading-academic-t2",
  title: "Cambridge IELTS 16 – Test 2",
  bookNumber: 16,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam16-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The White Horse of Uffington",
      passageText: `The cutting of huge figures or 'geoglyphs' into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country's southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.

The most famous of these figures is perhaps also the most mysterious – the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.

The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or scoured by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline. Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. That fact that any ancient hill figures survive at all in England today is testament to the strength and continuity of local customs and beliefs which, in one case at least, must stretch back over millennia.

The Uffington White Horse is a unique, stylised representation of a horse consisting of a long, sleek back, thin disjointed legs, a streaming tail, and a bird-like beaked head. The elegant creature almost melts into the landscape. The horse is situated 2.5 km from Uffington village on a steep close to the Late Bronze Age (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic track.

The Uffington Horse is also surrounded by Bronze Age burial mounds. It is not far from the Bronze Age cemetery of Lambourn Seven Barrows, which consists of more than 30 well-preserved burial mounds. The carving has been placed in such a way as to make it extremely difficult to see from close quarters, and like many geoglyphs is best appreciated from the air. Nevertheless, there are certain areas of the Vale of the White Horse, the valley containing and named after the enigmatic creature, from which an adequate impression may be gained. Indeed on a clear day the carving can be seen from up to 30 km away.

The earliest evidence of a horse at Uffington is from the 1070s CE when 'White Horse Hill' is mentioned in documents from the nearby Abbey of Abingdon, and the first reference to the horse itself is soon after, in 1190 CE. However, the carving is believed to date back much further than that. Due to the similarity of the Uffington White Horse to the stylised depictions of horses on 1st century BCE coins, it had been thought that the creature must also date to that period.

However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse's body, and from another cut near the base. The result was a date for the horse's construction somewhere between 1400 and 600 BCE – in other words, it had a Late Bronze Age or Early Iron Age origin.

The latter end of this date range would tie the carving of the horse in with occupation of the nearby Uffington hillfort, indicating that it may represent a tribal emblem making the land of the inhabitants of the hillfort. Alternatively, the carving may have been carried out during a Bronze or Iron Age ritual. Some researchers see the horse as representing the Celtic horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. However, the cult of Epona was not imported from Gaul (France) until around the first century CE. This date is at least six centuries after the Uffington Horse was probably carved. Nevertheless, the horse had great ritual and economic significance during the Bronze and Iron Ages, as attested by its depictions on jewellery and other metal objects. It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse.

The fact that geoglyphs can disappear easily, along with their associated rituals and meaning, indicates that they were never intended to be anything more than temporary gestures. But this does not lessen their importance. These giant carvings are a fascinating glimpse into the minds of their creators and how they viewed the landscape in which they lived.`,
      instructions: `Questions 1–8: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 9–13: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam16-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n1  Most geoglyphs in England are located in a particular area of the country.\n2  There are more geoglyphs in the shape of a horse than any other creature.\n3  A recent dating of the Uffington White Horse indicates that people were mistaken about its age.\n4  Historians have come to an agreement about the origins of the Long Man of Wilmington.\n5  Geoglyphs were created by people placing white chalk on the hillside.\n6  Many geoglyphs in England are no longer visible.\n7  The shape of some geoglyphs has been altered over time.\n8  The fame of the Uffington White Horse is due to its size.",
          type: "true_false_ng",
          question: "1. Most geoglyphs in England are located in a particular area of the country.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. There are more geoglyphs in the shape of a horse than any other creature.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. A recent dating of the Uffington White Horse indicates that people were mistaken about its age.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Historians have come to an agreement about the origins of the Long Man of Wilmington.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Geoglyphs were created by people placing white chalk on the hillside.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. Many geoglyphs in England are no longer visible.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. The shape of some geoglyphs has been altered over time.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. The fame of the Uffington White Horse is due to its size.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Uffington White Horse\n\nThe location of the Uffington White Horse:\n● a distance of 2.5 km from Uffington village\n● near an ancient road known as the 9 …………………\n● close to an ancient cemetery that has a number of burial mounds\n\nDating the Uffington White Horse:\n● first reference to White Horse Hill appears in 10 ………………… from the 1070s\n● horses shown on coins from the period 100 BCE – 1 BCE are similar in appearance\n● according to analysis of the surrounding 11 …………………, the Horse is Late Bronze Age / Early Iron Age\n\nPossible reasons for creation of the Uffington White Horse:\n● an emblem to indicate land ownership\n● formed part of an ancient ritual\n● was a representation of goddess Epona – associated with protection of horses and 12…………………\n● was a representation of a Welsh goddess called 13 …………………",
          type: "summary_completion",
          question: "9. near an ancient road known as the _______",
          correctAnswer: "Ridgeway",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q10",
          number: 10,
          type: "summary_completion",
          question: "10. first reference to White Horse Hill appears in _______ from the 1070s",
          correctAnswer: "documents",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q11",
          number: 11,
          type: "summary_completion",
          question: "11. according to analysis of the surrounding _______, the Horse is Late Bronze Age / Early Iron Age",
          correctAnswer: "soil",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q12",
          number: 12,
          type: "summary_completion",
          question: "12. was a representation of goddess Epona – associated with protection of horses and _______",
          correctAnswer: "fertility",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q13",
          number: 13,
          type: "summary_completion",
          question: "13. was a representation of a Welsh goddess called _______",
          correctAnswer: "Rhiannon",
          points: 1,
        },
      ],
    },
    {
      id: "cam16-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "I contain multitudes",
      passageText: `Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us. Invisible to the naked eye, they are ubiquitous. They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. And, as Yong explains in his utterly absorbing and hugely important book we mess with them at our peril.

Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between species but also between individuals and within different parts of each individual. What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher – about 39 trillion. At best, Yong informs us, we are only 50 per cent human. Indeed, some scientists even suggest we should think of each species and its microbes as a single unit, dubbed a 'holobiont'.

In each human there are microbes that live only in the stomach, the mouth or the armpit and by and large they do so peacefully. So 'bad' microbes are just microbes out of context. Microbes that sit contentedly in the human gut (where there are more microbes than there are stars in the galaxy) can become deadly if they find their way into the bloodstream. These communities are constantly changing too. The right hand shares just one sixth of its microbes with the left hand. And, of course, we are surrounded by microbes. Every time we eat, we swallow a million microbes in each gram of food; we are continually swapping microbes with other humans, pets and the world at large.

It's a fascinating topic and Yong, a young British science journalist, is an extraordinarily adept guide. Writing with lightness and panache, he has a knack of explaining complex science in terms that are both easy to understand and totally enthralling. Yong is on a mission. Leading us gently by the hand, he takes us into the world of microbes – a bizarre, alien planet – in a bid to persuade us to love them as much as he does. By the end, we do.

For most of human history we had no idea that microbes existed. The first man to see these extraordinarily potent creatures was a Dutch lens-maker called Antony van Leeuwenhoek in the 1670s. Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a nearby lake and found it teeming with tiny creatures he called 'animalcules'. It wasn't until nearly two hundred years later that the research of French biologist Louis Pasteur indicated that some microbes caused disease. It was Pasteur's 'germ theory' that gave bacteria the poor image that endures today.

Yong's book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, many thousands more play a vital role in maintaining our health. The book also acknowledges that our attitude towards bacteria is not a simple one. We tend to see the dangers posed by bacteria, yet at the same time we are sold yoghurts and drinks that supposedly nurture 'friendly' bacteria. In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, that can be mutually beneficial or mutually destructive.

What then do these millions of organisms do? The answer is pretty much everything. New research is now unravelling the ways in which bacteria aid digestion, regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. 'They actually help us become who we are,' says Yong. But we are facing a growing problem. Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and immune problems, such as inflammatory bowel disease (IBD).

The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay. Other studies show that keeping a dog as a pet gives children early exposure to a diverse range of bacteria, which may help protect them against allergies later.

The readers of Yong's book must be prepared for a decidedly unglamorous world. Among the less appealing case studies is one about a fungus that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. Another is about squid that carry luminescent bacteria that protect them against predators. However, if you can overcome your distaste for some of the investigations, the reasons for Yong's enthusiasm become clear. The microbial world is a place of wonder. Already, in an attempt to stop mosquitoes spreading dengue fever – a disease that infects 400 million people a year – mosquitoes are being loaded with a bacterium to block the disease. In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into their walls to fight off infections. Just imagine a neonatal hospital ward coated in a specially mixed cocktail of microbes so that babies get the best start in life.`,
      instructions: `Questions 14–16: Choose the correct letter, A, B, C or D.

Questions 17–20: Complete the summary using the list of words, A–H, below.

Questions 21–26: Do the following statements agree with the claims of the writer in Reading Passage 2?
Write YES, NO, or NOT GIVEN.`,
      questions: [
        {
          id: "cam16-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–16: Choose the correct letter, A, B, C or D.\n\n14. What point does the writer make about microbes in the first paragraph?\nA  They adapt quickly to their environment.\nB  The risk they pose has been exaggerated.\nC  They are more plentiful in animal life than plant life.\nD  They will continue to exist for longer than the human race.",
          type: "multiple_choice",
          question: "14. What point does the writer make about microbes in the first paragraph?\nA  They adapt quickly to their environment.\nB  The risk they pose has been exaggerated.\nC  They are more plentiful in animal life than plant life.\nD  They will continue to exist for longer than the human race.",
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
          id: "cam16-ra-t2-s2-q15",
          number: 15,
          groupLabel: "15. In the second paragraph, the writer is impressed by the fact that\nA  each species tends to have vastly different microbes.\nB  some parts of the body contain relatively few microbes.\nC  the average individual has more microbial cells than human ones.\nD  scientists have limited understanding of how microbial cells behave.",
          type: "multiple_choice",
          question: "15. In the second paragraph, the writer is impressed by the fact that\nA  each species tends to have vastly different microbes.\nB  some parts of the body contain relatively few microbes.\nC  the average individual has more microbial cells than human ones.\nD  scientists have limited understanding of how microbial cells behave.",
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
          id: "cam16-ra-t2-s2-q16",
          number: 16,
          groupLabel: "16. What is the writer doing in the fifth paragraph?\nA  explaining how a discovery was made\nB  comparing scientists' theories about microbes\nC  describing confusion among scientists\nD  giving details of how microbes cause disease",
          type: "multiple_choice",
          question: "16. What is the writer doing in the fifth paragraph?\nA  explaining how a discovery was made\nB  comparing scientists' theories about microbes\nC  describing confusion among scientists\nD  giving details of how microbes cause disease",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q17",
          number: 17,
          groupLabel: "Questions 17–20: Complete the summary using the list of words, A–H, below.\nWrite the correct letter, A–H, in boxes 17–20 on your answer sheet.\n\nWe should be more tolerant of microbes\nYong's book argues that we should be more tolerant of microbes. Many have a beneficial effect, and only a relatively small number lead to 17 ………………… . And although it is misleading to think of microbes as 'friendly', we should also stop thinking of them as the enemy. In fact, we should accept that our relationship with microbes is one based on 18 ………………… .\nNew research shows that microbes have numerous benefits for humans. Amongst other things, they aid digestion, remove poisons, produce vitamins and may even help reduce obesity. However, there is a growing problem. Our poor 19 …………………, our overuse of antibiotics, and our excessive focus on 20 ………………… are upsetting the bacterial balance and may be contributing to the huge increase in allergies and immune system problems.\n\nA  solution    B  partnership    C  destruction\nD  exaggeration    E  cleanliness    F  regulations\nG  illness    H  nutrition",
          type: "matching",
          question: "17. Only a relatively small number lead to _______",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Our relationship with microbes is one based on _______",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Our poor _______ is upsetting the bacterial balance",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Our excessive focus on _______ is upsetting the bacterial balance",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q21",
          number: 21,
          groupLabel: "Questions 21–26: Do the following statements agree with the claims of the writer in Reading Passage 2?\nWrite YES, NO, or NOT GIVEN.\n\n21  It is possible that using antibacterial products in the home fails to have the desired effect.\n22  It is a good idea to ensure that children come into contact with as few bacteria as possible.\n23  Yong's book contains more case studies than are necessary.\n24  The case study about bacteria that prevent squid from being attacked may have limited appeal.\n25  Efforts to control dengue fever have been surprisingly successful.\n26  Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.",
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "21. It is possible that using antibacterial products in the home fails to have the desired effect.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q22",
          number: 22,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "22. It is a good idea to ensure that children come into contact with as few bacteria as possible.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q23",
          number: 23,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "23. Yong's book contains more case studies than are necessary.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q24",
          number: 24,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "24. The case study about bacteria that prevent squid from being attacked may have limited appeal.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q25",
          number: 25,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "25. Efforts to control dengue fever have been surprisingly successful.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q26",
          number: 26,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "26. Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.",
          correctAnswer: "NO",
          points: 1,
        },
      ],
    },
    {
      id: "cam16-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "How to make wise decisions",
      passageText: `Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn't an exceptional trait possessed by a small handful of bearded philosophers after all – in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context.

'It appears that experiential, situational, and cultural factors are even more powerful in shaping wisdom than previously imagined,' says Associate Professor Igor Grossmann of the University of Waterloo in Ontario, Canada. 'Recent empirical findings from cognitive, developmental, social, and personality psychology cumulatively suggest that people's ability to reason wisely varies dramatically across experiential and situational contexts. Understanding the role of such contextual factors offers unique insights into understanding wisdom in daily life, as well as how it can be enhanced and taught.'

It seems that it's not so much that some people simply possess wisdom and others lack it, but that our ability to reason wisely depends on a variety of external factors. 'It is impossible to characterize thought processes attributed to wisdom without considering the role of contextual factors,' explains Grossmann. 'In other words, wisdom is not solely an "inner quality" but rather unfolds as a function of situations people happen to be in. Some situations are more likely to promote wisdom than others.'

Coming up with a definition of wisdom is challenging, but Grossmann and his colleagues have identified four key characteristics as part of a framework of wise reasoning. One is intellectual humility or recognition of the limits of our own knowledge, and another is appreciation of perspectives wider than the issue at hand. Sensitivity to the possibility of change in social relations is also key, along with compromise or integration of different attitudes and beliefs.

Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend. Research suggests that when adopting a first-person viewpoint we focus on 'the focal features of the environment' and when we adopt a third-person, 'observer' viewpoint we reason more broadly and focus more on interpersonal and moral ideals such as justice and impartiality. Looking at problems from this more expansive viewpoint appears to foster cognitive processes related to wise decisions.

What are we to do, then, when confronted with situations like a disagreement with a spouse or negotiating a contract at work, that require us to take a personal stake? Grossmann argues that even when we aren't able to change the situation, we can still evaluate these experiences from different perspectives.

For example, in one experiment that took place during the peak of a recent economic recession, graduating college seniors were asked to reflect on their job prospects. The students were instructed to imagine their career either 'as if you were a distant observer' or 'before your own eyes as if you were right there'. Participants in the group assigned to the 'distant observer' role displayed more wisdom-related reasoning (intellectual humility and recognition of change) than did participants in the control group.

In another study, couples in long-term romantic relationships were instructed to visualize an unresolved relationship conflict either through the eyes of an outsider or from their own perspective. Participants then discussed the incident with their partner for 10 minutes, after which they wrote down their thoughts about it. Couples in the 'other's eyes' condition were significantly more likely to rely on wise reasoning – recognizing others' perspectives and searching for a compromise – compared to the couples in the egocentric condition.

'Ego-decentering promotes greater focus on others and enables a bigger picture, conceptual view of the experience, affording recognition of intellectual humility and change,' says Grossmann.

We might associate wisdom with intelligence or particular personality traits, but research shows only a small positive relationship between wise thinking and crystallized intelligence and the personality traits of openness and agreeableness. 'It is remarkable how much people can vary in their wisdom from one situation to the next, and how much stronger such contextual effects are for understanding the relationship between wise judgment and its social and affective outcomes as compared to the generalized "traits",' Grossmann explains. 'That is, knowing how wisely a person behaves in a given situation is more informative for understanding their emotions or likelihood to forgive [or] retaliate as compared to knowing whether the person may be wise "in general".'`,
      instructions: `Questions 27–30: Choose the correct letter, A, B, C or D.

Questions 31–35: Complete the summary using the list of words, A–J, below.

Questions 36–40: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        {
          id: "cam16-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–30: Choose the correct letter, A, B, C or D.\n\n27. What point does the writer make in the first paragraph?\nA  Wisdom appears to be unique to the human race.\nB  A basic assumption about wisdom may be wrong.\nC  Concepts of wisdom may depend on the society we belong to.\nD  There is still much to be discovered about the nature of wisdom.",
          type: "multiple_choice",
          question: "27. What point does the writer make in the first paragraph?\nA  Wisdom appears to be unique to the human race.\nB  A basic assumption about wisdom may be wrong.\nC  Concepts of wisdom may depend on the society we belong to.\nD  There is still much to be discovered about the nature of wisdom.",
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
          id: "cam16-ra-t2-s3-q28",
          number: 28,
          groupLabel: "28. What does Igor Grossmann suggest about the ability to make wise decisions?\nA  It can vary greatly from one person to another.\nB  Earlier research into it was based on unreliable data.\nC  The importance of certain influences on it was underestimated.\nD  Various branches of psychology define it according to their own criteria.",
          type: "multiple_choice",
          question: "28. What does Igor Grossmann suggest about the ability to make wise decisions?\nA  It can vary greatly from one person to another.\nB  Earlier research into it was based on unreliable data.\nC  The importance of certain influences on it was underestimated.\nD  Various branches of psychology define it according to their own criteria.",
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
          id: "cam16-ra-t2-s3-q29",
          number: 29,
          groupLabel: "29. According to the third paragraph, Grossmann claims that the level of wisdom an individual shows\nA  can be greater than they think it is.\nB  will be different in different circumstances.\nC  may be determined by particular aspects of their personality.\nD  should develop over time as a result of their life experiences.",
          type: "multiple_choice",
          question: "29. According to the third paragraph, Grossmann claims that the level of wisdom an individual shows\nA  can be greater than they think it is.\nB  will be different in different circumstances.\nC  may be determined by particular aspects of their personality.\nD  should develop over time as a result of their life experiences.",
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
          id: "cam16-ra-t2-s3-q30",
          number: 30,
          groupLabel: "30. What is described in the fifth paragraph?\nA  a difficulty encountered when attempting to reason wisely\nB  an example of the type of person who is likely to reason wisely\nC  a controversial view about the benefits of reasoning wisely\nD  a recommended strategy that can help people to reason wisely",
          type: "multiple_choice",
          question: "30. What is described in the fifth paragraph?\nA  a difficulty encountered when attempting to reason wisely\nB  an example of the type of person who is likely to reason wisely\nC  a controversial view about the benefits of reasoning wisely\nD  a recommended strategy that can help people to reason wisely",
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
          id: "cam16-ra-t2-s3-q31",
          number: 31,
          groupLabel: "Questions 31–35: Complete the summary using the list of words, A–J, below.\nWrite the correct letter, A–J, in boxes 31–35 on your answer sheet.\n\nThe characteristics of wise reasoning\nIgor Grossmann and colleagues have established four characteristics which enable us to make wise decisions. It is important to have a certain degree of 31 ………………….. regarding the extent of our knowledge, and to take into account 32 ………………….. which may not be the same as our own. We should also be able to take a broad 33 ………………….. of any situation. Another key characteristic is being aware of the likelihood of alterations in the way that people relate to each other.\nGrossmann also believes that it is better to regard scenarios with 34 ………………….. . By avoiding the first-person perspective, we focus more on 35 ………………….. and on other moral ideals, which in turn leads to wiser decision-making.\n\nA  opinions    B  confidence    C  view\nD  modesty    E  problems    F  objectivity\nG  fairness    H  experiences    I  range\nJ  reasons",
          type: "matching",
          question: "31. It is important to have a certain degree of _______ regarding the extent of our knowledge",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q32",
          number: 32,
          type: "matching",
          question: "32. Take into account _______ which may not be the same as our own",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q33",
          number: 33,
          type: "matching",
          question: "33. We should be able to take a broad _______ of any situation",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q34",
          number: 34,
          type: "matching",
          question: "34. It is better to regard scenarios with _______",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q35",
          number: 35,
          type: "matching",
          question: "35. By avoiding the first-person perspective, we focus more on _______",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q36",
          number: 36,
          groupLabel: "Questions 36–40: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n36  Students participating in the job prospects experiment could choose one of two perspectives to take.\n37  Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.\n38  In the couples experiment, the length of the couples' relationships had an impact on the results.\n39  In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.\n40  Grossmann believes that a person's wisdom is determined by their intelligence to only a very limited extent.",
          type: "true_false_ng",
          question: "36. Students participating in the job prospects experiment could choose one of two perspectives to take.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. In the couples experiment, the length of the couples' relationships had an impact on the results.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Grossmann believes that a person's wisdom is determined by their intelligence to only a very limited extent.",
          correctAnswer: "TRUE",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge16_reading_t3: IELTSTest = {
  id: "cam16-reading-academic-t3",
  title: "Cambridge IELTS 16 – Test 3",
  bookNumber: 16,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam16-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Roman shipbuilding and navigation",
      passageText: `Shipbuilding today is based on science and ships are built using computers and sophisticated tools. Shipbuilding in ancient Rome, however, was more of an art relying on estimation, inherited techniques and personal experience. The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians.

There are a few surviving written documents that give descriptions and representations of ancient Roman ships, including the sails and rigging. Excavated vessels also provide some clues about ancient shipbuilding techniques. Studies of these have taught us that ancient Roman shipbuilders built the outer hull first, then proceeded with the frame and the rest of the ship. Planks used to build the outer hull were initially sewn together. Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching. Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull and the other components of the ship. This method was more systematic and dramatically shortened ship construction times. The ancient Romans built large merchant ships and warships whose size and technology were unequalled until the 16th century CE.

Warships were built to be lightweight and very speedy. They had to be able to sail near the coast which is why they had no ballast or excess load and were built with a long, narrow hull. They did not sink when damaged and often would lie crippled on the sea's surface following naval battles. They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels. Warships used both wind (sails) and human power (oarsmen) and were therefore very fast. Eventually, Rome's navy became the largest and most powerful in the Mediterranean, and the Romans had control over what they therefore called Mare Nostrum meaning 'our sea'.

There were many kinds of warship. The 'trireme' was the dominant warship from the 7th to 4th century BCE. It had rowers in the top, middle and lower levels, and approximately 50 rowers in each bank. The rowers at the bottom had the most uncomfortable position as they were under the other rowers and were exposed to the water entering through the oar-holes. It is worth noting that contrary to popular perception, rowers were not slaves but mostly Roman citizens enrolled in the military. The trireme was superseded by larger ships with even more rowers.

Merchant ships were built to transport lots of cargo over long distances and at a reasonable cost. They had a wider hull, double planking and a solid interior for added stability. Unlike warships, their V-shaped hull was deep underwater, meaning that they could not sail too close to the coast. They usually had two huge side rudders located off the stern and controlled by a small tiller bar connected to a system of cables. They had from one to three masts with large square sails and a small triangular sail at the bow. Just like warships, merchant ships used oarsmen, but coordinating the hundreds of rowers in both types of ship was not an easy task. In order to assist them, music would be played on an instrument, and oars would then keep time with this.

The cargo on merchant ships included raw materials (e.g. iron bars, copper, marble and granite), and agricultural products (e.g. grain from Egypt's Nile valley). During the Empire, Rome was a huge city by ancient standards of about one million inhabitants. Goods from all over the world would come to the city through the port of Pozzuoli situated west of the bay of Naples in Italy and through the gigantic port of Ostia situated at the mouth of the Tiber River. Large merchant ships would approach the destination port and, just like today, be intercepted by a number of towboats that would drag them to the quay.

The time of travel along the many sailing routes could vary widely. Navigation in ancient Rome did not rely on sophisticated instruments such as compasses but on experience, local knowledge and observation of natural phenomena. In conditions of good visibility, seamen in the Mediterranean often had the mainland or islands in sight, which greatly facilitated navigation. They sailed by noting their position relative to a succession of recognisable landmarks. When weather conditions were not good or where land was no longer visible, Roman mariners estimated directions from the pole star or, with less accuracy, from the Sun at noon. They also estimated directions relative to the wind and swell. Overall, shipping in ancient Roman times resembled shipping today with large vessels regularly crossing the seas and bringing supplies from their Empire.`,
      instructions: `Questions 1–5: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 6–13: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam16-ra-t3-s1-q1",
          number: 1,
          groupLabel: "Questions 1–5: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n1  The Romans' shipbuilding skills were passed on to the Greeks and the Egyptians.\n2  Skilled craftsmen were needed for the mortise and tenon method of fixing planks.\n3  The later practice used by Mediterranean shipbuilders involved building the hull before the frame.\n4  The Romans called the Mediterranean Sea Mare Nostrum because they dominated its use.\n5  Most rowers on ships were people from the Roman army.",
          type: "true_false_ng",
          question: "1. The Romans' shipbuilding skills were passed on to the Greeks and the Egyptians.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Skilled craftsmen were needed for the mortise and tenon method of fixing planks.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. The later practice used by Mediterranean shipbuilders involved building the hull before the frame.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. The Romans called the Mediterranean Sea Mare Nostrum because they dominated its use.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Most rowers on ships were people from the Roman army.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q6",
          number: 6,
          groupLabel: "Questions 6–13: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nWarships and merchant ships\nWarships were designed so that they were 6 ………………… and moved quickly. They often remained afloat after battles and were able to sail close to land as they lacked any additional weight. A battering ram made of 7 ………………… was included in the design for attacking and damaging the timber and oars of enemy ships. Warships, such as the 'trireme', had rowers on three different 8 ………………… .\nUnlike warships, merchant ships had a broad 9 ………………… that lay far below the surface of the sea. Merchant ships were steered through the water with the help of large rudders and a tiller bar. They had both square and 10 ………………… sails. On merchant ships and warships, 11 ………………… was used to ensure rowers moved their oars in and out of the water at the same time.\nQuantities of agricultural goods such as 12 ………………… were transported by merchant ships to two main ports in Italy. The ships were pulled to the shore by 13 ………………… . When the weather was clear and they could see islands or land, sailors used landmarks that they knew to help them navigate their route.",
          type: "summary_completion",
          question: "6. Warships were designed so that they were _______",
          correctAnswer: "lightweight",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q7",
          number: 7,
          type: "summary_completion",
          question: "7. A battering ram made of _______ was included in the design",
          correctAnswer: "bronze",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q8",
          number: 8,
          type: "summary_completion",
          question: "8. Warships had rowers on three different _______",
          correctAnswer: "levels",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q9",
          number: 9,
          type: "summary_completion",
          question: "9. Merchant ships had a broad _______ that lay far below the surface of the sea",
          correctAnswer: "hull",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q10",
          number: 10,
          type: "summary_completion",
          question: "10. Merchant ships had both square and _______ sails",
          correctAnswer: "triangular",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q11",
          number: 11,
          type: "summary_completion",
          question: "11. _______ was used to ensure rowers moved their oars at the same time",
          correctAnswer: "music",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q12",
          number: 12,
          type: "summary_completion",
          question: "12. Agricultural goods such as _______ were transported by merchant ships",
          correctAnswer: "grain",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q13",
          number: 13,
          type: "summary_completion",
          question: "13. The ships were pulled to the shore by _______",
          correctAnswer: "towboats",
          points: 1,
        },
      ],
    },
    {
      id: "cam16-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Climate change reveals ancient artefacts in Norway's glaciers",
      passageText: `A
Well above the treeline in Norway's highest mountains, ancient fields of ice are shrinking as Earth's climate warms. As the ice has vanished, it has been giving up the treasures it has preserved in cold storage for the last 6,000 years – items such as ancient arrows and skis from Viking Age traders. And those artefacts have provided archaeologists with some surprising insights into how ancient Norwegians made their livings.

B
Organic materials like textiles and hides are relatively rare finds at archaeological sites. This is because unless they're protected from the microorganisms that cause decay, they tend not to last long. Extreme cold is one reliable way to keep artefacts relatively fresh for a few thousand years, but once thawed out, these materials experience degradation relatively swiftly.
With climate change shrinking ice cover around the world, glacial archaeologists need to race the clock to find newly revealed artefacts, preserve them, and study them. If something fragile dries and is windblown it might very soon be lost to science, or an arrow might be exposed and then covered again by the next snow and remain well-preserved. The unpredictability means that glacial archaeologists have to be systematic in their approach to fieldwork.

C
Over a nine-year period, a team of archaeologists, which included Lars Pilø of Oppland County Council, Norway, and James Barrett of the McDonald Institute for Archaeological Research, surveyed patches of ice in Oppland, an area of south-central Norway that is home to some of the country's highest mountains. Reindeer once congregated on these ice patches in the later summer months to escape biting insects, and from the late Stone Age, hunters followed. In addition, trade routes threaded through the mountain passes of Oppland, linking settlements in Norway to the rest of Europe.
The slow but steady movement of glaciers tends to destroy anything at their bases, so the team focused on stationary patches of ice, mostly above 1,400 metres. That ice is found amid fields of frost-weathered boulders, fallen rocks, and exposed bedrock that for nine months of the year is buried beneath snow.
'Fieldwork is hard work – hiking with all our equipment, often camping on permafrost – but very rewarding. You're rescuing the archaeology, bringing the melting ice to wider attention, discovering a unique environmental history and really connecting with the natural environment,' says Barrett.

D
At the edges of the contracting ice patches, archaeologists found more than 2,000 artefacts, which formed a material record that ran from 4,000 BCE to the beginnings of the Renaissance in the 14th century. Many of the artefacts are associated with hunting. Hunters would have easily misplaced arrows and they often discarded broken bows rather than take them all the way home. Other items could have been used by hunters traversing the high mountain passes of Oppland: all-purpose items like tools, skis, and horse tack.

E
Barrett's team radiocarbon-dated 153 of the artefacts and compared those dates to the timing of major environmental changes in the region – such as periods of cooling or warming – and major social and economic shifts – such as the growth of farming settlements and the spread of international trade networks leading up to the Viking Age. They found that some periods had produced lots of artefacts, which indicates that people had been pretty active in the mountains during those times. But there were few or no signs of activity during other periods.

F
What was surprising, according to Barrett, was the timing of these periods. Oppland's mountains present daunting terrain and in periods of extreme cold, glaciers could block the higher mountain passes and make travel in the upper reaches of the mountains extremely difficult. Archaeologists assumed people would stick to lower elevations during a time like the Late Antique Little Ice Age, a short period of deeper-than-usual cold from about 536-600 CE. But it turned out that hunters kept regularly venturing into the mountains even when the climate turned cold, based on the amount of stuff they had apparently dropped there.
'Remarkably, though, the finds from the ice may have continued through this period, perhaps suggesting that the importance of mountain hunting increased to supplement failing agricultural harvests in times of low temperatures,' says Barrett. A colder turn in the Scandinavian climate would likely have meant widespread crop failures, so more people would have depended on hunting to make up for those losses.

G
Many of the artefacts Barrett's team recovered date from the beginning of the Viking Age, the 700s through to the 900s CE. Trade networks connecting Scandinavia with Europe and the Middle East were expanding around this time. Although we usually think of ships when we think of Scandinavian expansion, these recent discoveries show that plenty of goods travelled on overland routes, like the mountain passes of Oppland. And growing Norwegian towns, along with export markets, would have created a booming demand for hides to fight off the cold, as well as antlers to make useful things like combs. Business must have been good for hunters.

H
Norway's mountains are probably still hiding a lot of history – and prehistory – in remote ice patches. When Barrett's team looked at the dates for their sample of 153 artefacts, they noticed a gap with almost no artefacts from about 3,800 to 2,200 BCE. In fact, archaeological finds from that period are rare all over Norway. The researchers say that could be because many of those artefacts have already disintegrated or are still frozen in the ice. That means archaeologists could be extracting some of those artefacts from retreating ice in years to come.`,
      instructions: `Questions 14–19: Which section contains the following information?
Write the correct letter, A–H.

Questions 20–22: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 23–24: Choose TWO letters, A–E.
Questions 25–26: Choose TWO letters, A–E.`,
      questions: [
        {
          id: "cam16-ra-t3-s2-q14",
          number: 14,
          groupLabel: "Questions 14–19: Reading Passage 2 has eight sections, A–H.\nWhich section contains the following information?\nWrite the correct letter, A–H, in boxes 14–19 on your answer sheet.",
          type: "matching",
          question: "14. an explanation for weapons being left behind in the mountains",
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
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q15",
          number: 15,
          type: "matching",
          question: "15. a reference to the physical difficulties involved in an archaeological expedition",
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
          id: "cam16-ra-t3-s2-q16",
          number: 16,
          type: "matching",
          question: "16. an explanation of why less food may have been available",
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
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q17",
          number: 17,
          type: "matching",
          question: "17. a reference to the possibility of future archaeological discoveries",
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
        {
          id: "cam16-ra-t3-s2-q18",
          number: 18,
          type: "matching",
          question: "18. examples of items that would have been traded",
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
          id: "cam16-ra-t3-s2-q19",
          number: 19,
          type: "matching",
          question: "19. a reference to the pressure archaeologists are under to work quickly",
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
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q20",
          number: 20,
          groupLabel: "Questions 20–22: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nInteresting finds at an archaeological site\nOrganic materials such as animal skins and textiles are not discovered very often at archaeological sites. They have little protection against 20 …………………, which means that they decay relatively quickly. But this is not always the case. If temperatures are low enough, fragile artefacts can be preserved for thousands of years.\nA team of archaeologists have been working in the mountains in Oppland in Norway to recover artefacts revealed by shrinking ice cover. In the past, there were trade routes through these mountains and 21 ………………… gathered there in the summer months to avoid being attacked by 22 ………………… on lower ground. The people who used these mountains left things behind and it is those objects that are of interest to archaeologists.",
          type: "summary_completion",
          question: "20. They have little protection against _______",
          correctAnswer: "microorganisms",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. _______ gathered there in the summer months",
          correctAnswer: "reindeer",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. to avoid being attacked by _______ on lower ground",
          correctAnswer: "insects",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q23",
          number: 23,
          groupLabel: "Questions 23–24: Choose TWO letters, A–E.\nWhich TWO of the following statements does the writer make about the discoveries of Barrett's team?\n\nA  Artefacts found in the higher mountain passes were limited to skiing equipment.\nB  Hunters went into the mountains even during periods of extreme cold.\nC  The number of artefacts from certain time periods was relatively low.\nD  Radiocarbon dating of artefacts produced some unreliable results.\nE  More artefacts were found in Oppland than at any other mountain site.",
          type: "multiple_choice",
          question: "23. Which TWO statements does the writer make about the discoveries of Barrett's team? (Choose TWO — this is the first answer)\nA  Artefacts found in the higher mountain passes were limited to skiing equipment.\nB  Hunters went into the mountains even during periods of extreme cold.\nC  The number of artefacts from certain time periods was relatively low.\nD  Radiocarbon dating of artefacts produced some unreliable results.\nE  More artefacts were found in Oppland than at any other mountain site.",
          options: [
            { label: "A  Artefacts found in the higher mountain passes were limited to skiing equipment.", value: "A" },
            { label: "B  Hunters went into the mountains even during periods of extreme cold.", value: "B" },
            { label: "C  The number of artefacts from certain time periods was relatively low.", value: "C" },
            { label: "D  Radiocarbon dating of artefacts produced some unreliable results.", value: "D" },
            { label: "E  More artefacts were found in Oppland than at any other mountain site.", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Which TWO statements does the writer make about the discoveries of Barrett's team? (Choose TWO — this is the second answer)\nA  Artefacts found in the higher mountain passes were limited to skiing equipment.\nB  Hunters went into the mountains even during periods of extreme cold.\nC  The number of artefacts from certain time periods was relatively low.\nD  Radiocarbon dating of artefacts produced some unreliable results.\nE  More artefacts were found in Oppland than at any other mountain site.",
          options: [
            { label: "A  Artefacts found in the higher mountain passes were limited to skiing equipment.", value: "A" },
            { label: "B  Hunters went into the mountains even during periods of extreme cold.", value: "B" },
            { label: "C  The number of artefacts from certain time periods was relatively low.", value: "C" },
            { label: "D  Radiocarbon dating of artefacts produced some unreliable results.", value: "D" },
            { label: "E  More artefacts were found in Oppland than at any other mountain site.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO of the following statements does the writer make about the Viking Age?\n\nA  Hunters at this time benefited from an increased demand for goods.\nB  The beginning of the period saw the greatest growth in the wealth of Vikings.\nC  Vikings did not rely on ships alone to transport goods.\nD  Norwegian towns at this time attracted traders from around the world.\nE  Vikings were primarily interested in their trading links with the Middle East.",
          type: "multiple_choice",
          question: "25. Which TWO statements does the writer make about the Viking Age? (Choose TWO — this is the first answer)\nA  Hunters at this time benefited from an increased demand for goods.\nB  The beginning of the period saw the greatest growth in the wealth of Vikings.\nC  Vikings did not rely on ships alone to transport goods.\nD  Norwegian towns at this time attracted traders from around the world.\nE  Vikings were primarily interested in their trading links with the Middle East.",
          options: [
            { label: "A  Hunters at this time benefited from an increased demand for goods.", value: "A" },
            { label: "B  The beginning of the period saw the greatest growth in the wealth of Vikings.", value: "B" },
            { label: "C  Vikings did not rely on ships alone to transport goods.", value: "C" },
            { label: "D  Norwegian towns at this time attracted traders from around the world.", value: "D" },
            { label: "E  Vikings were primarily interested in their trading links with the Middle East.", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Which TWO statements does the writer make about the Viking Age? (Choose TWO — this is the second answer)\nA  Hunters at this time benefited from an increased demand for goods.\nB  The beginning of the period saw the greatest growth in the wealth of Vikings.\nC  Vikings did not rely on ships alone to transport goods.\nD  Norwegian towns at this time attracted traders from around the world.\nE  Vikings were primarily interested in their trading links with the Middle East.",
          options: [
            { label: "A  Hunters at this time benefited from an increased demand for goods.", value: "A" },
            { label: "B  The beginning of the period saw the greatest growth in the wealth of Vikings.", value: "B" },
            { label: "C  Vikings did not rely on ships alone to transport goods.", value: "C" },
            { label: "D  Norwegian towns at this time attracted traders from around the world.", value: "D" },
            { label: "E  Vikings were primarily interested in their trading links with the Middle East.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
    {
      id: "cam16-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Plant 'thermometer' triggers springtime growth by measuring night-time heat",
      passageText: `A
An international team of scientists led by the University of Cambridge has discovered that the 'thermometer' molecule in plants enables them to develop according to seasonal temperature changes. Researchers have revealed that molecules called phytochromes – used by plants to detect light during the day – actually change their function in darkness to become cellular temperature gauges that measure the heat of the night.
The new findings, published in the journal Science, show that phytochromes control genetic switches in response to temperature as well as light to dictate plant development.

B
At night, these molecules change states, and the pace at which they change is 'directly proportional to temperature', say scientists, who compare phytochromes to mercury in a thermometer. The warmer it is, the faster the molecular change – stimulating plant growth.

C
Farmers and gardeners have known for hundreds of years how responsive plants are to temperature: warm winters cause many trees and flowers to bud early, something humans have long used to predict weather and harvest times for the coming year. The latest research pinpoints for the first time a molecular mechanism in plants that reacts to temperature – often triggering the buds of spring we long to see at the end of winter.

D
With weather and temperatures set to become ever more unpredictable due to climate change, researchers say the discovery that this light-sensing molecule also functions as the internal thermometer in plant cells could help us breed tougher crops. 'It is estimated that agricultural yields will need to double by 2050, but climate change is a major threat to achieving this. Key crops such as wheat and rice are sensitive to high temperatures. Thermal stress reduces crop yields by around 10% for every one degree increase in temperature,' says lead researcher Dr Philip Wigge from Cambridge's Sainsbury Laboratory. 'Discovering the molecules that allow plants to sense temperature has the potential to accelerate the breeding of crops resilient to thermal stress and climate change.'

E
In their active state, phytochrome molecules bind themselves to DNA to restrict plant growth. During the day, sunlight activates the molecules, slowing down growth. If a plant finds itself in shade, phytochromes are quickly inactivated – enabling it to grow faster to find sunlight again. This is how plants compete to escape each other's shade. 'Light-driven changes to phytochrome activity occur very fast, in less than a second,' says Wigge.
At night, however, it's a different story. Instead of a rapid deactivation following sundown, the molecules gradually change from their active to inactive state. This is called 'dark reversion'. 'Just as mercury rises in a thermometer, the rate at which phytochromes revert to their inactive state during the night is a direct measure of temperature,' says Wigge.

F
'The lower the temperature, the slower the rate at which phytochromes revert to inactivity, so the molecules spend more time in their active, growth-suppressing state. This is why plants are slower to grow in winter. Warm temperatures accelerate dark reversion, so that phytochromes rapidly reach an inactive state and detach themselves from the plant's DNA – allowing genes to be expressed and plant growth to resume.' Wigge believes phytochrome thermo-sensing evolved at a later stage, and co-opted the biological network already used for light-based growth during the downtime of night.

G
Some plants mainly use day length as an indicator of the season. Other species, such as daffodils, have considerable temperature sensitivity, and can flower months in advance during a warm winter. In fact, the discovery of the dual role of phytochromes provides the science behind a well-known rhyme long used to predict the coming season: oak before ash we'll have a plash, ash before oak we're in for a soak.
Wigge explains: 'Oak trees rely much more on temperature, likely using phytochromes as thermometers to dictate development, whereas ash trees rely on measuring day length to determine their seasonal timing. A warmer spring, and consequently a higher likeliness of a hot summer, will result in oak leafing before ash. A cold spring will see the opposite. As the British know only too well, a colder summer is likely to be a rain-soaked one.'

H
The new findings are the culmination of twelve years of research involving scientists from Germany, Argentina and the US, as well as the Cambridge team. The work was done in a model system, using a mustard plant called Arabidopsis, but Wigge says the phytochrome genes necessary for temperature sensing are found in crop plants as well. 'Recent advances in plant genetics now mean that scientists are able to rapidly identify the genes controlling these processes in crop plants, and even alter their activity using precise molecular "scalpels",' adds Wigge. 'Cambridge is uniquely well-positioned to do this kind of research as we have outstanding collaborators nearby who work on more applied aspects of plant biology, and can help us transfer this new knowledge into the field.'`,
      instructions: `Questions 27–32: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE, or NOT GIVEN.

Questions 33–37: Which section contains the following information?
Write the correct letter, A–H.

Questions 38–40: Complete the sentences below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.`,
      questions: [
        {
          id: "cam16-ra-t3-s3-q27",
          number: 27,
          groupLabel: "Questions 27–32: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n27  The Cambridge scientists' discovery of the 'thermometer molecule' caused surprise among other scientists.\n28  The target for agricultural production by 2050 could be missed.\n29  Wheat and rice suffer from a rise in temperatures.\n30  It may be possible to develop crops that require less water.\n31  Plants grow faster in sunlight than in shade.\n32  Phytochromes change their state at the same speed day and night.",
          type: "true_false_ng",
          question: "27. The Cambridge scientists' discovery of the 'thermometer molecule' caused surprise among other scientists.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q28",
          number: 28,
          type: "true_false_ng",
          question: "28. The target for agricultural production by 2050 could be missed.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q29",
          number: 29,
          type: "true_false_ng",
          question: "29. Wheat and rice suffer from a rise in temperatures.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q30",
          number: 30,
          type: "true_false_ng",
          question: "30. It may be possible to develop crops that require less water.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q31",
          number: 31,
          type: "true_false_ng",
          question: "31. Plants grow faster in sunlight than in shade.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q32",
          number: 32,
          type: "true_false_ng",
          question: "32. Phytochromes change their state at the same speed day and night.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q33",
          number: 33,
          groupLabel: "Questions 33–37: Reading Passage 3 has eight sections, A–H.\nWhich section contains the following information?\nWrite the correct letter, A–H, in boxes 33–37 on your answer sheet.",
          type: "matching",
          question: "33. mention of specialists who can make use of the research findings",
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
        {
          id: "cam16-ra-t3-s3-q34",
          number: 34,
          type: "matching",
          question: "34. a reference to a potential benefit of the research findings",
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
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q35",
          number: 35,
          type: "matching",
          question: "35. scientific support for a traditional saying",
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
          id: "cam16-ra-t3-s3-q36",
          number: 36,
          type: "matching",
          question: "36. a reference to people traditionally making plans based on plant behaviour",
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
          id: "cam16-ra-t3-s3-q37",
          number: 37,
          type: "matching",
          question: "37. a reference to where the research has been reported",
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
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q38",
          number: 38,
          groupLabel: "Questions 38–40: Complete the sentences below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\n38  Daffodils are likely to flower early in response to ………………….. weather.\n39  If ash trees come into leaf before oak trees, the weather in ………………….. will probably be wet.\n40  The research was carried out using a particular species of ………………….. .",
          type: "summary_completion",
          question: "38. Daffodils are likely to flower early in response to _______ weather.",
          correctAnswer: "warm",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q39",
          number: 39,
          type: "summary_completion",
          question: "39. If ash trees come into leaf before oak trees, the weather in _______ will probably be wet.",
          correctAnswer: "summer",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q40",
          number: 40,
          type: "summary_completion",
          question: "40. The research was carried out using a particular species of _______.",
          correctAnswer: "mustard plant",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge16_reading_t4: IELTSTest = {
  id: "cam16-reading-academic-t4",
  title: "Cambridge IELTS 16 – Test 4",
  bookNumber: 16,
  testNumber: 4,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam16-ra-t4-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Roman tunnels",
      passageText: `The Romans, who once controlled areas of Europe, North Africa and Asia Minor, adopted the construction techniques of other civilizations to build tunnels in their territories.

The Persians, who lived in present-day Iran, were one of the first civilizations to build tunnels that provided a reliable supply of water to human settlements in dry areas. In the early first millennium BCE, they introduced the qanat method of tunnel construction, which consisted of placing posts over a hill in a straight line, to ensure that the tunnel kept to its route, and then digging vertical shafts down into the ground at regular intervals. Underground, workers removed the earth from between the ends of the shafts, creating a tunnel. The excavated soil was taken up to the surface using the shafts, which also provided ventilation during the work. Once the tunnel was completed, it allowed water to flow from the top of a hillside down towards a canal, which supplied water for human use. Remarkably, some qanats built by the Persians 2,700 years ago are still in use today.

They later passed on their knowledge to the Romans, who also used the qanat method to construct water-supply tunnels for agriculture. Roman qanat tunnels were constructed with vertical shafts dug at intervals of between 30 and 60 meters. The shafts were equipped with handholds and footholds to help those climbing in and out of them and were covered with a wooden or stone lid. To ensure that the shafts were vertical, Romans hung a plumb line from a rod placed across the top of each shaft and made sure that the weight at the end of it hung in the center of the shaft. Plumb lines were also used to measure the depth of the shaft and to determine the slope of the tunnel. The 5.6-kilometer-long Claudius tunnel, built in 41 CE to drain the Fucine Lake in central Italy, had shafts that were up to 122 meters deep, took 11 years to build and involved approximately 30,000 workers.

By the 6th century BCE, a second method of tunnel construction appeared called the counter-excavation method, in which the tunnel was constructed from both ends. It was used to cut through high mountains when the qanat method was not a practical alternative. This method required greater planning and advanced knowledge of surveying, mathematics and geometry as both ends of a tunnel had to meet correctly at the center of the mountain. Adjustments to the direction of the tunnel also had to be made whenever builders encountered geological problems or when it deviated from its set path. They constantly checked the tunnel's advancing direction, for example, by looking back at the light that penetrated through the tunnel mouth, and made corrections whenever necessary. Large deviations could happen, and they could result in one end of the tunnel not being usable. An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error.

The Romans dug tunnels for their roads using the counter-excavation method, whenever they encountered obstacles such as hills or mountains that were too high for roads to pass over. An example is the 37-meter-long, 6-meter-high, Furlo Pass Tunnel built in Italy in 69–79 CE. Remarkably, a modern road still uses this tunnel today. Tunnels were also built for mineral extraction. Miners would locate a mineral vein and then pursue it with shafts and tunnels underground. Traces of such tunnels used to mine gold can still be found at the Dolaucothi mines in Wales. When the sole purpose of a tunnel was mineral extraction, construction required less planning, as the tunnel route was determined by the mineral vein.

Roman tunnel projects were carefully planned and carried out. The length of time it took to construct a tunnel depended on the method being used and the type of rock being excavated. The qanat construction method was usually faster than the counter-excavation method as it was more straightforward. This was because the mountain could be excavated not only from the tunnel mouths but also from shafts. The type of rock could also influence construction times. When the rock was hard, the Romans employed a technique called fire quenching which consisted of heating the rock with fire, and then suddenly cooling it with cold water so that it would crack. Progress through hard rock could be very slow, and it was not uncommon for tunnels to take years, if not decades, to be built. Construction marks left on a Roman tunnel in Bologna show that the rate of advance through solid rock was 30 centimetres per day. In contrast, the rate of advance of the Claudius tunnel can be calculated at 1.4 metres per day. Most tunnels had inscriptions showing the names of patrons who ordered construction and sometimes the name of the architect. For example, the 1.4-kilometre Çevlik tunnel in Turkey, built to divert the floodwater threatening the harbour of the ancient city of Seleuceia Pieria, had inscriptions on the entrance, still visible today, that also indicate that the tunnel was started in 69 CE and was completed in 81 CE.`,
      instructions: `Questions 1–6: Label the diagrams below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 7–10: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 11–13: Answer the questions below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.`,
      diagramUrl: "/roman-qanat.png",
      questions: [
        {
          id: "cam16-ra-t4-s1-q1",
          number: 1,
          groupLabel: "Questions 1–6: Label the diagrams below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Persian Qanat Method\n1 ……………………… to direct the tunnelling\nwater runs into a 2 ……………………… used by local people\nvertical shafts to remove earth and for 3 ………………………\n\nCross-section of a Roman Qanat Shaft\n4 ……………………… made of wood or stone\n5 ……………………… attached to the plumb line\nhandholds and footholds used for 6 ………………………",
          type: "diagram_labelling",
          question: "1. _______ to direct the tunnelling",
          correctAnswer: "posts",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q2",
          number: 2,
          type: "diagram_labelling",
          question: "2. water runs into a _______ used by local people",
          correctAnswer: "canal",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q3",
          number: 3,
          type: "diagram_labelling",
          question: "3. vertical shafts to remove earth and for _______",
          correctAnswer: "ventilation",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q4",
          number: 4,
          type: "diagram_labelling",
          question: "4. _______ made of wood or stone",
          correctAnswer: "lid",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q5",
          number: 5,
          type: "diagram_labelling",
          question: "5. _______ attached to the plumb line",
          correctAnswer: "weight",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q6",
          number: 6,
          type: "diagram_labelling",
          question: "6. handholds and footholds used for _______",
          correctAnswer: "climbing",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q7",
          number: 7,
          groupLabel: "Questions 7–10: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n7  The counter-excavation method completely replaced the qanat method in the 6th century BCE.\n8  Only experienced builders were employed to construct a tunnel using the counter-excavation method.\n9  The information about a problem that occurred during the construction of the Saldae aqueduct system was found in an ancient book.\n10  The mistake made by the builders of the Saldae aqueduct system was that the two parts of the tunnel failed to meet.",
          type: "true_false_ng",
          question: "7. The counter-excavation method completely replaced the qanat method in the 6th century BCE.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. Only experienced builders were employed to construct a tunnel using the counter-excavation method.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. The information about a problem that occurred during the construction of the Saldae aqueduct system was found in an ancient book.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. The mistake made by the builders of the Saldae aqueduct system was that the two parts of the tunnel failed to meet.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q11",
          number: 11,
          groupLabel: "Questions 11–13: Answer the questions below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\n11  What type of mineral were the Dolaucothi mines in Wales built to extract?\n12  In addition to the patron, whose name might be carved onto a tunnel?\n13  What part of Seleuceia Pieria was the Çevlik tunnel built to protect?",
          type: "short_answer",
          question: "11. What type of mineral were the Dolaucothi mines in Wales built to extract?",
          correctAnswer: "gold",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q12",
          number: 12,
          type: "short_answer",
          question: "12. In addition to the patron, whose name might be carved onto a tunnel?",
          correctAnswer: "architect",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s1-q13",
          number: 13,
          type: "short_answer",
          question: "13. What part of Seleuceia Pieria was the Çevlik tunnel built to protect?",
          correctAnswer: "harbour",
          points: 1,
        },
      ],
    },
    {
      id: "cam16-ra-t4-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Changes in reading habits",
      passageText: `What are the implications of the way we read today?

Look around on your next plane trip. The iPad is the new pacifier for babies and toddlers. Younger school-aged children read stories on smartphones; older kids don't read at all, but hunch over video games. Parents and other passengers read on tablets or skim a flotilla of email and news feeds. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: the neuronal circuit that underlies the brain's ability to read is subtly, rapidly changing and this has implications for everyone from the pre-reading toddler to the expert adult.

As work in neurosciences indicates, the acquisition of literacy necessitated a new circuit in our species' brain more than 6,000 years ago. That circuit evolved from a very simple mechanism for decoding basic information, like the number of goats in one's herd, to the present, highly elaborated reading brain. My research depicts how the present reading brain enables the development of some of our most important intellectual and affective processes: internalized knowledge, analogical reasoning, and inference; perspective-taking and empathy; critical analysis and the generation of insight. Research surfacing in many parts of the world now cautions that each of these essential 'deep reading' processes may be under threat as we move into digital-based modes of reading.

This is not a simple, binary issue of print versus digital reading and technological innovations. As MIT scholar Sherry Turkle has written, we do not err as a society when we innovate but when we ignore what we disrupt or diminish while innovating. In this hinge moment between print and digital cultures, society needs to confront what is diminishing in the expert reading circuit, what our children and older students are not developing, and what we can do about it.

We know from research that the reading circuit is not given to human beings through a genetic blueprint like vision or language; it needs an environment to develop. Further, it will adapt to that environment's requirements – from different writing systems to the characteristics of whatever medium is used. If the dominant medium advantages processes that are fast, multi-task oriented and well-suited for large volumes of information, like the current digital medium, so will the reading circuit. As UCLA psychologist Patricia Greenfield writes, the result is that less attention and time will be allocated to slower, time-demanding deep reading processes.

Increasing reports from educators and from researchers in psychology and the humanities bear this out. English literature scholar and teacher Mark Edmundson describes how many college students actively avoid the classic literature of the 19th and 20th centuries in favour of something simpler as they no longer have the patience to read longer, denser, more difficult texts. We should be less concerned with students' 'cognitive impatience', however, than by what may underlie it: the potential inability of large numbers of students to read with a level of critical analysis sufficient to comprehend the complexity of thought and argument found in more demanding texts.

Multiple studies show that digital screen use may be causing a variety of troubling downstream effects on reading comprehension in older high school and college students. In Stavanger, Norway, psychologist Anne Mangen and colleagues studied how high school students comprehend the same material in different mediums. Mangen's group asked subjects questions about a short story whose plot had universal student appeal; half of the students read the story on a tablet, the other half in paperback. Results indicated that students who read on print were superior in their comprehension to screen-reading peers, particularly in their ability to sequence detail and reconstruct the plot in chronological order.

Ziming Liu from San Jose State University has conducted a series of studies which indicate that the 'new norm' in reading is skimming, involving word-spotting and browsing through the text. Many readers now use a pattern when reading in which they sample the first line and then word-spot through the rest of the text. When the reading brain skims like this, it reduces time allocated to deep reading processes. In other words, we don't have time to grasp complexity, to understand another's feelings, to perceive beauty, and to create thoughts of the reader's own.

The possibility that critical analysis, empathy and other deep reading processes could become the unintended 'collateral damage' of our digital culture is not a straightforward binary issue about print versus digital reading. It is about how we all have begun to read on various mediums and how that changes not only what we read, but also the purposes for which we read. Nor is it only about the young. The subtle atrophy of critical analysis and empathy affects us all equally. It affects our ability to navigate a constant bombardment of information. It incentivizes a retreat to the most familiar stores of unchecked information, which require and receive no analysis, leaving us susceptible to false information and irrational ideas.

There's an old rule in neuroscience that does not alter with age: use it or lose it. It is a very hopeful principle when applied to critical thought in the reading brain because it implies choice. The story of the changing reading brain is hardly finished. We possess both the science and the technology to identify and redress the changes in how we read before they become entrenched. If we work to understand exactly what we will lose, alongside the extraordinary new capacities that the digital world has brought us, there is as much reason for excitement as caution.`,
      instructions: `Questions 14–17: Choose the correct letter, A, B, C or D.

Questions 18–22: Complete the summary using the list of words, A–H, below.
Write the correct letter, A–H, in boxes 18–22 on your answer sheet.

Questions 23–26: Do the following statements agree with the views of the writer in Reading Passage 2?
Write YES, NO, or NOT GIVEN.`,
      questions: [
        {
          id: "cam16-ra-t4-s2-q14",
          number: 14,
          groupLabel: "Questions 14–17: Choose the correct letter, A, B, C or D.\n\n14  What is the writer's main point in the first paragraph?\nA  Our use of technology is having a hidden effect on us.\nB  Technology can be used to help youngsters to read.\nC  Travellers should be encouraged to use technology on planes.\nD  Playing games is a more popular use of technology than reading.\n\n15  What main point does Sherry Turkle make about innovation?\nA  Technological innovation has led to a reduction in print reading.\nB  We should pay attention to what might be lost when innovation occurs.\nC  We should encourage more young people to become involved in innovation.\nD  There is a difference between developing products and developing ideas.\n\n16  What point is the writer making in the fourth paragraph?\nA  Humans have an inborn ability to read and write.\nB  Reading can be done using many different mediums.\nC  Writing systems make unexpected demands on the brain.\nD  Some brain circuits adjust to whatever is required of them.\n\n17  According to Mark Edmundson, the attitude of college students\nA  has changed the way he teaches.\nB  has influenced what they select to read.\nC  does not worry him as much as it does others.\nD  does not match the views of the general public.",
          type: "multiple_choice",
          question: "14. What is the writer's main point in the first paragraph?",
          options: [
            { label: "A  Our use of technology is having a hidden effect on us.", value: "A" },
            { label: "B  Technology can be used to help youngsters to read.", value: "B" },
            { label: "C  Travellers should be encouraged to use technology on planes.", value: "C" },
            { label: "D  Playing games is a more popular use of technology than reading.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q15",
          number: 15,
          type: "multiple_choice",
          question: "15. What main point does Sherry Turkle make about innovation?",
          options: [
            { label: "A  Technological innovation has led to a reduction in print reading.", value: "A" },
            { label: "B  We should pay attention to what might be lost when innovation occurs.", value: "B" },
            { label: "C  We should encourage more young people to become involved in innovation.", value: "C" },
            { label: "D  There is a difference between developing products and developing ideas.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q16",
          number: 16,
          type: "multiple_choice",
          question: "16. What point is the writer making in the fourth paragraph?",
          options: [
            { label: "A  Humans have an inborn ability to read and write.", value: "A" },
            { label: "B  Reading can be done using many different mediums.", value: "B" },
            { label: "C  Writing systems make unexpected demands on the brain.", value: "C" },
            { label: "D  Some brain circuits adjust to whatever is required of them.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q17",
          number: 17,
          type: "multiple_choice",
          question: "17. According to Mark Edmundson, the attitude of college students",
          options: [
            { label: "A  has changed the way he teaches.", value: "A" },
            { label: "B  has influenced what they select to read.", value: "B" },
            { label: "C  does not worry him as much as it does others.", value: "C" },
            { label: "D  does not match the views of the general public.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q18",
          number: 18,
          groupLabel: "Questions 18–22: Complete the summary using the list of words, A–H, below.\nWrite the correct letter, A–H, in boxes 18–22 on your answer sheet.\n\nStudies on digital screen use\n\nThere have been many studies on digital screen use, showing some 18 ………………… trends. Psychologist Anne Mangen gave high-school students a short story to read, half using digital and half using print mediums. Her team then used a question-and-answer technique to find out how 19 ………………… each group's understanding of the plot was. The findings showed a clear pattern in the responses, with those who read screens finding the order of information 20 ………………… to recall.\n\nStudies by Ziming Liu show that students are tending to read 21 ………………… words and phrases in a text to save time. This approach, she says, gives the reader a superficial understanding of the 22 ………………… content of material, leaving no time for thought.\n\nA  fast    B  isolated    C  emotional    D  worrying\nE  many    F  hard        G  combined     H  thorough",
          type: "matching",
          question: "18. showing some _______ trends",
          options: [
            { label: "A  fast", value: "A" },
            { label: "B  isolated", value: "B" },
            { label: "C  emotional", value: "C" },
            { label: "D  worrying", value: "D" },
            { label: "E  many", value: "E" },
            { label: "F  hard", value: "F" },
            { label: "G  combined", value: "G" },
            { label: "H  thorough", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q19",
          number: 19,
          type: "matching",
          question: "19. how _______ each group's understanding of the plot was",
          options: [
            { label: "A  fast", value: "A" },
            { label: "B  isolated", value: "B" },
            { label: "C  emotional", value: "C" },
            { label: "D  worrying", value: "D" },
            { label: "E  many", value: "E" },
            { label: "F  hard", value: "F" },
            { label: "G  combined", value: "G" },
            { label: "H  thorough", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q20",
          number: 20,
          type: "matching",
          question: "20. finding the order of information _______ to recall",
          options: [
            { label: "A  fast", value: "A" },
            { label: "B  isolated", value: "B" },
            { label: "C  emotional", value: "C" },
            { label: "D  worrying", value: "D" },
            { label: "E  many", value: "E" },
            { label: "F  hard", value: "F" },
            { label: "G  combined", value: "G" },
            { label: "H  thorough", value: "H" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q21",
          number: 21,
          type: "matching",
          question: "21. students are tending to read _______ words and phrases",
          options: [
            { label: "A  fast", value: "A" },
            { label: "B  isolated", value: "B" },
            { label: "C  emotional", value: "C" },
            { label: "D  worrying", value: "D" },
            { label: "E  many", value: "E" },
            { label: "F  hard", value: "F" },
            { label: "G  combined", value: "G" },
            { label: "H  thorough", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q22",
          number: 22,
          type: "matching",
          question: "22. a superficial understanding of the _______ content of material",
          options: [
            { label: "A  fast", value: "A" },
            { label: "B  isolated", value: "B" },
            { label: "C  emotional", value: "C" },
            { label: "D  worrying", value: "D" },
            { label: "E  many", value: "E" },
            { label: "F  hard", value: "F" },
            { label: "G  combined", value: "G" },
            { label: "H  thorough", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q23",
          number: 23,
          groupLabel: "Questions 23–26: Do the following statements agree with the views of the writer in Reading Passage 2?\nWrite YES, NO, or NOT GIVEN.\n\n23  The medium we use to read can affect our choice of reading content.\n24  Some age groups are more likely to lose their complex reading skills than others.\n25  False information has become more widespread in today's digital era.\n26  We still have opportunities to rectify the problems that technology is presenting.",
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "23. The medium we use to read can affect our choice of reading content.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q24",
          number: 24,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "24. Some age groups are more likely to lose their complex reading skills than others.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q25",
          number: 25,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "25. False information has become more widespread in today's digital era.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s2-q26",
          number: 26,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "26. We still have opportunities to rectify the problems that technology is presenting.",
          correctAnswer: "YES",
          points: 1,
        },
      ],
    },
    {
      id: "cam16-ra-t4-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Attitudes towards Artificial Intelligence",
      passageText: `A
Artificial intelligence (AI) can already predict the future. Police forces are using it to map when and where crime is likely to occur. Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. Researchers are even trying to give AI imagination so it can plan for unexpected consequences.
Many decisions in our lives require a good forecast, and AI is almost always better at forecasting than we are. Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions. Recent cases show that people don't like relying on AI and prefer to trust human experts, even if these experts are wrong.
If we want AI to really benefit people, we need to find a way to get people to trust it. To do that, we need to understand why people are so reluctant to trust AI in the first place.

B
Take the case of Watson for Oncology, one of technology giant IBM's supercomputer programs. Their attempt to promote this program to cancer doctors was a PR disaster. The AI promised to deliver top-quality recommendations on the treatment of 12 cancers that accounted for 80% of the world's cases. But when doctors first interacted with Watson, they found themselves in a rather difficult situation. On the one hand, if Watson provided guidance about a treatment that coincided with their own opinions, physicians did not see much point in Watson's recommendations. The supercomputer was simply telling them what they already knew, and these recommendations did not change the actual treatment.
On the other hand, if Watson generated a recommendation that contradicted the experts' opinion, doctors would typically conclude that Watson wasn't competent. And the machine wouldn't be able to explain why its treatment was plausible because its machine-learning algorithms were simply too complex to be fully understood by humans. Consequently, this has caused even more suspicion and disbelief, leading many doctors to ignore the seemingly outlandish AI recommendations and stick to their own expertise.

C
This is just one example of people's lack of confidence in AI and their reluctance to accept what AI has to offer. Trust in other people is often based on our understanding of how others think and having experience of their reliability. This helps create a psychological feeling of safety. AI, on the other hand, is still fairly new and unfamiliar to most people. Even if it can be technically explained (and that's not always the case), AI's decision-making process is usually too difficult for most people to comprehend. And interacting with something we don't understand can cause anxiety and give us a sense that we're losing control.
Many people are also simply not familiar with many instances of AI actually working, because it often happens in the background. Instead, they are acutely aware of instances where AI goes wrong. Embarrassing AI failures receive a disproportionate amount of media attention, emphasising the message that we cannot rely on technology. Machine learning is not foolproof, in part because the humans who design it aren't.

D
Feelings about AI run deep. In a recent experiment, people from a range of backgrounds were given various sci-fi films about AI to watch and then asked questions about automation in everyday life. It was found that, regardless of whether the film they watched depicted AI in a positive or negative light, simply watching a cinematic vision of our technological future polarised the participants' attitudes. Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded.
This suggests people use relevant evidence about AI in a biased manner to support their existing attitudes, a deep-rooted human tendency known as "confirmation bias". As AI is represented more and more in media and entertainment, it could lead to a society split between those who benefit from AI and those who reject it. More pertinently, refusing to accept the advantages offered by AI could place a large group of people at a serious disadvantage.

E
Fortunately, we already have some ideas about how to improve trust in AI. Simply having previous experience with AI can significantly improve people's opinions about the technology, as was found in the study mentioned above. Evidence also suggests the more you use other technologies such as the internet, the more you trust them.
Another solution may be to reveal more about the algorithms which AI uses and the purposes they serve. Several high-profile social media companies and online marketplaces already release transparency reports about government requests and surveillance disclosures. A similar practice for AI could help people have a better understanding of the way algorithmic decisions are made.

F
Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. For example, one study showed that when people were allowed the freedom to slightly modify an algorithm, they felt more satisfied with its decisions, more likely to believe it was superior and more likely to use it in the future.
We don't need to understand the intricate inner workings of AI systems, but if people are given a degree of responsibility for how they are implemented, they will be more willing to accept AI into their lives.`,
      instructions: `Questions 27–32: Reading Passage 3 has six sections, A–F.
Choose the correct heading for each section from the list of headings below.

Questions 33–35: Choose the correct letter, A, B, C or D.

Questions 36–40: Do the following statements agree with the claims of the writer in Reading Passage 3?
Write YES, NO, or NOT GIVEN.`,
      questions: [
        {
          id: "cam16-ra-t4-s3-q27",
          number: 27,
          groupLabel: "Questions 27–32: Reading Passage 3 has six sections, A–F.\nChoose the correct heading for each section from the list of headings below.\nWrite the correct number, i–viii, in boxes 27–32 on your answer sheet.\n\nList of Headings\ni    An increasing divergence of attitudes towards AI\nii   Reasons why we have more faith in human judgement than in AI\niii  The superiority of AI projections over those made by humans\niv   The process by which AI can help us make good decisions\nv    The advantages of involving users in AI processes\nvi   Widespread distrust of an AI innovation\nvii  Encouraging openness about how AI functions\nviii A surprisingly successful AI application\n\n27  Section A\n28  Section B\n29  Section C\n30  Section D\n31  Section E\n32  Section F",
          type: "matching",
          question: "27. Section A",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q28",
          number: 28,
          type: "matching",
          question: "28. Section B",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q29",
          number: 29,
          type: "matching",
          question: "29. Section C",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q30",
          number: 30,
          type: "matching",
          question: "30. Section D",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q31",
          number: 31,
          type: "matching",
          question: "31. Section E",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q32",
          number: 32,
          type: "matching",
          question: "32. Section F",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q33",
          number: 33,
          groupLabel: "Questions 33–35: Choose the correct letter, A, B, C or D.\n\n33  What is the writer doing in Section A?\nA  providing a solution to a concern\nB  justifying an opinion about an issue\nC  highlighting the existence of a problem\nD  explaining the reasons for a phenomenon\n\n34  According to Section C, why might some people be reluctant to accept AI?\nA  They are afraid it will replace humans in decision-making jobs.\nB  Its complexity makes them feel that they are at a disadvantage.\nC  They would rather wait for the technology to be tested over a period of time.\nD  Misunderstandings about how it works make it seem more challenging than it is.\n\n35  What does the writer say about the media in Section C of the text?\nA  It leads the public to be mistrustful of AI.\nB  It devotes an excessive amount of attention to AI.\nC  Its reports of incidents involving AI are often inaccurate.\nD  It gives the impression that AI failures are due to designer error.",
          type: "multiple_choice",
          question: "33. What is the writer doing in Section A?",
          options: [
            { label: "A  providing a solution to a concern", value: "A" },
            { label: "B  justifying an opinion about an issue", value: "B" },
            { label: "C  highlighting the existence of a problem", value: "C" },
            { label: "D  explaining the reasons for a phenomenon", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q34",
          number: 34,
          type: "multiple_choice",
          question: "34. According to Section C, why might some people be reluctant to accept AI?",
          options: [
            { label: "A  They are afraid it will replace humans in decision-making jobs.", value: "A" },
            { label: "B  Its complexity makes them feel that they are at a disadvantage.", value: "B" },
            { label: "C  They would rather wait for the technology to be tested over a period of time.", value: "C" },
            { label: "D  Misunderstandings about how it works make it seem more challenging than it is.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q35",
          number: 35,
          type: "multiple_choice",
          question: "35. What does the writer say about the media in Section C of the text?",
          options: [
            { label: "A  It leads the public to be mistrustful of AI.", value: "A" },
            { label: "B  It devotes an excessive amount of attention to AI.", value: "B" },
            { label: "C  Its reports of incidents involving AI are often inaccurate.", value: "C" },
            { label: "D  It gives the impression that AI failures are due to designer error.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q36",
          number: 36,
          groupLabel: "Questions 36–40: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES, NO, or NOT GIVEN.\n\n36  Subjective depictions of AI in sci-fi films make people change their opinions about automation.\n37  Portrayals of AI in media and entertainment are likely to become more positive.\n38  Rejection of the possibilities of AI may have a negative effect on many people's lives.\n39  Familiarity with AI has very little impact on people's attitudes to the technology.\n40  AI applications which users are able to modify are more likely to gain consumer approval.",
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "36. Subjective depictions of AI in sci-fi films make people change their opinions about automation.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q37",
          number: 37,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "37. Portrayals of AI in media and entertainment are likely to become more positive.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q38",
          number: 38,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "38. Rejection of the possibilities of AI may have a negative effect on many people's lives.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q39",
          number: 39,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "39. Familiarity with AI has very little impact on people's attitudes to the technology.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam16-ra-t4-s3-q40",
          number: 40,
          type: "true_false_ng",
          options: [{ label: "YES", value: "YES" }, { label: "NO", value: "NO" }, { label: "NOT GIVEN", value: "NOT GIVEN" }],
          question: "40. AI applications which users are able to modify are more likely to gain consumer approval.",
          correctAnswer: "YES",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge16Tests: IELTSTest[] = [cambridge16_reading_t1, cambridge16_reading_t2, cambridge16_reading_t3, cambridge16_reading_t4];
