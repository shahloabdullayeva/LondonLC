import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 20  (Academic Reading)
// ============================================================

// ============================================================
// CAMBRIDGE IELTS 20 – TEST 1  (Academic Reading)
// Passages: The kākāpō /
//           To Britain (elms) /
//           How stress affects our judgement
// ============================================================
export const cambridge20_reading_t1: IELTSTest = {
  id: "cam20-reading-academic-t1",
  title: "Cambridge IELTS 20 – Test 1",
  bookNumber: 20,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The kākāpō",
      passageText: `The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers, forward-facing eyes, a large grey beak, large blue feet, and relatively short wings and tail. It is the world's only flightless parrot, and is also possibly one of the world's longest-living birds, with a reported lifespan of up to 100 years.

Kākāpō are solitary birds and tend to occupy the same home range for many years. They forage on the ground and climb high into trees. They often leap from trees and flap their wings, but at best manage a controlled descent to the ground. They are entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.

Kākāpō breed in summer and autumn, but only in years when food is plentiful. Males play no part in incubation or chick-rearing – females alone incubate eggs and feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before and during incubation. The female kākāpō has to spend long periods away from the nest searching for food, which leaves the unattended eggs and chicks particularly vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests. However, this all changed with the arrival of the first Polynesian settlers about 700 years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its meat and used its feathers to make soft cloaks. With them came the Polynesian dog and rat, which also preyed on kākāpō. By the time European colonisers arrived in the early 1800s, kākāpō had become confined to the central North Island and forested parts of the South Island. The fall in kākāpō numbers was accelerated by European colonisation. A great deal of habitat was lost through forest clearance, and introduced species such as deer depleted the remaining forests of food. Other predators such as cats, stoats and two more species of rat were also introduced. The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō. Conservationist Richard Henry led an effort to relocate several hundred of the birds to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't remain predator free – stoats arrived within six years, eventually destroying the kākāpō population. By the mid-1900s, the kākāpō was practically a lost species. Only a few clung to life in the most isolated parts of New Zealand.

From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60 expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in Fiordland. However, there were still no females. In 1977, a large population of males was spotted in Rakiura – a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present. These birds have been the foundation of all subsequent work in managing the species.

Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in kākāpō numbers. As a result, during 1980-97, the surviving population was evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier Island. However, breeding success was hard to achieve. Rats were found to be a major predator of kākāpō chicks and an insufficient number of chicks survived to offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds. The critical situation prompted an urgent review of kākāpō management in New Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory group called the Kākāpō Scientific and Technical Advisory Committee and a higher amount of funding. Renewed steps were taken to control predators on the three islands. Cats were eradicated from Little Barrier Island in 1980, and possums were eradicated from Codfish Island by 1986. However, the population did not start to increase until rats were removed from all three islands, and the birds were more intensively managed. This involved moving the birds between islands, supplementary feeding of adults and rescuing and hand-raising any failing chicks.

After the first five years of the Recovery Plan, the population was on target. By 2000, five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by June 2020, a total of 210 birds was recorded.

Today, kākāpō management continues to be guided by the kākāpō Recovery Plan. Its key goals are: minimise the loss of genetic diversity in the kākāpō population, restore or maintain sufficient habitat to accommodate the expected increase in the kākāpō population, and ensure stakeholders continue to be fully engaged in the preservation of the species.`,
      instructions: `Questions 1–6: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.
Questions 7–13: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.`,
      questions: [
        {
          id: "cam20-ra-t1-s1-q1",
          number: 1,
          groupLabel: `Questions 1–6: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE if the statement agrees with the information.\nWrite FALSE if the statement contradicts the information.\nWrite NOT GIVEN if there is no information on this.`,
          type: "true_false_ng",
          question: "1. There are other parrots that share the kakapo's inability to fly.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Adult kakapo produce chicks every year.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Adult male kakapo bring food back to nesting females.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. The Polynesian rat was a greater threat to the kakapo than Polynesian settlers.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Kakapo were transferred from Rakiura Island to other locations because they were at risk from feral cats.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. One Recovery Plan initiative that helped increase the kakapo population size was caring for struggling young birds.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q7",
          number: 7,
          groupLabel: `Questions 7–13: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.\n\nNew Zealand's kākāpō\n\nA type of parrot:\n●  diet consists of fern fronds, various parts of a tree and 7 _______\n●  nests are created in 8 _______ where eggs are laid.\n\nArrival of Polynesian settlers\n●  the 9 _______ of the kākāpō were used to make clothes.\n\nArrival of European colonisers\n●  10 _______ were an animal which they introduced that ate the kākāpō's food sources.\n\nProtecting kākāpō\n●  Richard Henry, a conservationist, tried to protect the kākāpō.\n●  a definite sighting of female kākāpō on Rakiura Island was reported in the year 11 _______\n●  the Recovery Plan included an increase in 12 _______\n●  a current goal of the Recovery Plan is to maintain the involvement of 13 _______ in kākāpō protection.`,
          type: "note_completion",
          question: "7. diet consists of fern fronds, various parts of a tree and _______",
          correctAnswer: "bulbs",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q8",
          number: 8,
          type: "note_completion",
          question: "8. nests are created in _______ where eggs are laid",
          correctAnswer: "soil",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q9",
          number: 9,
          type: "note_completion",
          question: "9. the _______ of the kākāpō were used to make clothes",
          correctAnswer: "feathers",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q10",
          number: 10,
          type: "note_completion",
          question: "10. _______ were an animal which they introduced that ate the kākāpō's food sources",
          correctAnswer: "deer",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q11",
          number: 11,
          type: "note_completion",
          question: "11. a definite sighting of female kākāpō on Rakiura Island was reported in the year _______",
          correctAnswer: "1980",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q12",
          number: 12,
          type: "note_completion",
          question: "12. the Recovery Plan included an increase in _______",
          correctAnswer: "funding",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q13",
          number: 13,
          type: "note_completion",
          question: "13. a current goal of the Recovery Plan is to maintain the involvement of _______ in kākāpō protection",
          correctAnswer: "stakeholders",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "To Britain",
      passageText: `A
Around 25 million elms, accounting for 90% of all elm trees in the UK, died during the 1960s and '70s of Dutch elm disease. In the aftermath, the elm, once so dominant in the British landscape, was largely forgotten. However, there's now hope the elm may be reintroduced to the countryside of central and southern England. Any reintroduction will start from a very low base. 'The impact of the disease is difficult to picture if you hadn't seen what was there before,' says Matt Elliot of the Woodland Trust. 'You look at old photographs from the 1960s and it's only then that you realise the impact [elms had] … They were significant, large trees… then they were gone.'

B
The disease is caused by a fungus that blocks the elms' vascular (water, nutrient and food transport) system, causing branches to wilt and die. A first epidemic, which occurred in the 1920s, gradually died down, but in the '70s a second epidemic was triggered by shipments of elm from Canada. The wood came in the form of logs destined for boat building and its intact bark was perfect for the elm bark beetles that spread the deadly fungus. This time, the beetles carried a much more virulent strain that destroyed the vast majority of British elms.

C
Today, elms still exist in the southern English countryside but mostly only in low hedgerows between fields. 'We have millions of small elms in hedgerows but they get targeted by the beetle as soon as they reach a certain size,' says Karen Russell, co-author of the report 'Where we are with elm'. Once the trunk of the elm reaches 10-15 centimetres or so in diameter, it becomes a perfect size for beetles to lay eggs and for the fungus to take hold. Yet mature specimens have been identified, in counties such as Cambridgeshire, that are hundreds of years old, and have mysteriously escaped the epidemic.

The key, Russell says, is to identify and study those trees that have survived and work out why they stood tall when millions of others succumbed. Nevertheless, opportunities are limited as the number of these mature survivors is relatively small. 'What are the reasons for their survival?' asks Russell. 'Avoidance, tolerance, resistance? We don't know where the balance lies between the three. I don't see how it can be entirely down to luck.'

D
For centuries, elm ran a close second to oak as the hardwood tree of choice in Britain and was in many instances the most prominent tree in the landscape. Not only was elm common in European forests, it became a key component of birch, ash and hazel woodlands. The use of elm is thought to go back to the Bronze Age, when it was widely used for tools. Elm was also the preferred material for shields and early swords. In the 18th century, it was planted more widely and its wood was used for items such as storage crates and flooring. It was also suitable for items that experienced high levels of impact and was used to build the keel of the 19th-century sailing ship Cutty Sark as well as mining equipment.

E
Given how ingrained elm is in British culture, it's unsurprising the tree has many advocates. Amongst them is Peter Bourne of the National Elm Collection in Brighton. 'I saw Dutch elm disease unfold as a small boy,' he says. 'The elm seemed to be part of rural England, but I remember watching trees just lose their leaves and that really stayed with me.' Today, the city of Brighton's elms total about 17,000. Local factors appear to have contributed to their survival. Strong winds from the sea make it difficult for the determined elm bark beetle to attack this coastal city's elm population. However, the situation is precarious. 'The beetles can just march in if we're not careful, as the threat is right on our doorstep,' says Bourne.

F
Any prospect of the elm returning relies heavily on trees being either resistant to, or tolerant of, the disease. This means a widespread reintroduction would involve existing or new hybrid strains derived from resistant, generally non-native elm species. A new generation of seedlings have been bred and tested to see if they can withstand the fungus by cutting a small slit on the bark and injecting a tiny amount of the pathogen. 'The effects are very quick,' says Russell. 'You return in four to six weeks and trees that are resistant show no symptoms, whereas those that are susceptible show leaf loss and may even have died completely.'

G
All of this raises questions of social acceptance, acknowledges Russell. 'If we're putting elm back into the landscape, a small element of it is not native – are we bothered about that?' For her, the environmental case for reintroducing elm is strong. 'They will host wildlife, which is a good thing.' Others are more wary. 'On the face of it, it seems like a good idea,' says Elliot. The problem, he suggests, is that, 'You're replacing a native species with a horticultural analogue. You're effectively cloning.' There's also the risk of introducing new diseases. Rather than plant new elms, the Woodland Trust emphasises providing space to those elms that have survived independently. 'Sometimes the best thing you can do is just give nature time to recover over time, you might get resistance,' says Elliot.`,
      instructions: `Questions 14–18: Matching information — which section A–G contains each piece of information? NB You may use any letter more than once.
Questions 19–23: Match each statement with the correct person, A–C. NB You may use any letter more than once.
Questions 24–26: Summary completion — ONE WORD ONLY from the passage.`,
      questions: [
        {
          id: "cam20-ra-t1-s2-q14",
          number: 14,
          groupLabel: `Questions 14–18: Reading Passage 2 has seven sections, A–G. Which section contains the following information?\nNB You may use any letter more than once.\n\n14  reference to the research problems that arise from there being only a few surviving large elms\n15  details of a difference of opinion about the value of reintroducing elms to Britain\n16  reference to how Dutch elm disease was brought into Britain\n17  a description of the conditions that have enabled a location in Britain to escape Dutch elm disease\n18  reference to the stage at which young elms become vulnerable to Dutch elm disease`,
          type: "matching",
          question: "14. reference to the research problems that arise from there being only a few surviving large elms",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. details of a difference of opinion about the value of reintroducing elms to Britain",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. reference to how Dutch elm disease was brought into Britain",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. a description of the conditions that have enabled a location in Britain to escape Dutch elm disease",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. reference to the stage at which young elms become vulnerable to Dutch elm disease",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q19",
          number: 19,
          groupLabel: `Questions 19–23: Match each statement with the correct person, A, B, or C.\nNB You may use any letter more than once.\n\nList of People\nA  Matt Elliot\nB  Karen Russell\nC  Peter Bourne`,
          type: "matching",
          question: "19. If a tree gets infected with Dutch elm disease, the damage rapidly becomes visible.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q20",
          number: 20,
          type: "matching",
          question: "20. It may be better to wait and see if the mature elms that have survived continue to flourish.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q21",
          number: 21,
          type: "matching",
          question: "21. There must be an explanation for the survival of some mature elms.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q22",
          number: 22,
          type: "matching",
          question: "22. We need to be aware that insects carrying Dutch elm disease are not very far away.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q23",
          number: 23,
          type: "matching",
          question: "23. You understand the effect Dutch elm disease has had when you see evidence of how prominent the tree once was.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q24",
          number: 24,
          groupLabel: `Questions 24–26: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.\n\nUses of a popular tree\nFor hundreds of years, the only tree that was more popular in Britain than elm was 24 _______. Starting in the Bronze Age, many tools were made from elm and people also used it to make weapons. In the 18th century, it was grown to provide wood for boxes and 25 _______. Due to its strength, elm was often used for mining equipment and the Cutty Sark's 26 _______ was also constructed from elm.`,
          type: "summary_completion",
          question: "24. the only tree that was more popular in Britain than elm was _______",
          correctAnswer: "oak",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. it was grown to provide wood for boxes and _______",
          correctAnswer: "flooring",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. the Cutty Sark's _______ was also constructed from elm",
          correctAnswer: "keel",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "How stress affects our judgement",
      passageText: `Some of the most important decisions of our lives occur while we're feeling stressed and anxious. From medical decisions to financial and professional ones, we are all sometimes required to weigh up information under stressful conditions. But do we become better or worse at processing and using information under such circumstances?

My colleague and I, both neuroscientists, wanted to investigate how the mind operates under stress, so we visited some local fire stations. Firefighters' workdays vary quite a bit. Some are pretty relaxed; they'll spend their time washing the truck, cleaning equipment, cooking meals and reading. Other days can be hectic, with numerous life-threatening incidents to attend to; they'll enter burning homes to rescue trapped residents, and assist with medical emergencies. These ups and downs presented the perfect setting for an experiment on how people's ability to use information changes when they feel under pressure.

We found that perceived threat acted as a trigger for a stress reaction that made the task of processing information easier for the firefighters – but only as long as it conveyed bad news.

This is how we arrived at these results. We asked the firefighters to estimate their likelihood of experiencing 40 different adverse events in their life, such as being involved in an accident or becoming a victim of card fraud. We then gave them either good news (that their likelihood of experiencing these events was lower than they'd thought) or bad news (that it was higher) and asked them to provide new estimates.

People are normally quite optimistic – they will ignore bad news and embrace the good. This is what happened when the firefighters were relaxed; but when they were under stress, a different pattern emerged. Under these conditions, they became hyper-vigilant to bad news, even when it had nothing to do with their job (such as learning that the likelihood of card fraud was higher than they'd thought), and altered their beliefs in response. In contrast, stress didn't change how they responded to good news (such as learning that the likelihood of card fraud was lower than they'd thought).

Back in our lab, we observed the same pattern in students who were told they had to give a surprise public speech, which would be judged by a panel, recorded and posted online. Sure enough, their cortisol levels spiked, their heart rates went up and they suddenly became better at processing unrelated, yet alarming, information about rates of disease and violence.

When we experience stressful events, a physiological change is triggered that causes us to take in warnings and focus on what might go wrong. Brain imaging reveals that this 'switch' is related to a sudden boost in a neural signal important for learning, specifically in response to unexpected warning signs, such as faces expressing fear.

Such neural engineering could have helped prehistoric humans to survive. When our ancestors found themselves surrounded by hungry animals, they would have benefited from an increased ability to learn about hazards. In a safe environment, however, it would have been wasteful to be on high alert constantly. So, a neural switch that automatically increases or decreases our ability to process warnings in response to changes in our environment could have been useful. In fact, people with clinical depression and anxiety seem unable to switch away from a state in which they absorb all the negative messages around them.

It is also important to realise that stress travels rapidly from one person to the next. If a co-worker is stressed, we are more likely to tense up and feel stressed ourselves. We don't even need to be in the same room with someone for their emotions to influence our behaviour. Studies show that if we observe positive feeds on social media, such as images of a pink sunset, we are more likely to post uplifting messages ourselves. If we observe negative posts, such as complaints about a long queue at the coffee shop, we will in turn create more negative posts.

In some ways, many of us now live as if we are in danger, constantly ready to tackle demanding emails and text messages, and respond to news alerts and comments on social media. Repeatedly checking your phone, according to a survey conducted by the American Psychological Association, is related to stress. In other words, a pre-programmed physiological reaction, which evolution has equipped us with to help us avoid famished predators, is now being triggered by an online post. Social media posting, according to one study, raises your pulse, makes you sweat, and enlarges your pupils more than most daily activities.

The fact that stress increases the likelihood that we will focus more on alarming messages, together with the fact that it spreads extremely rapidly, can create collective fear that is not always justified. After a stressful public event, such as a natural disaster or major financial crash, there is often a wave of alarming information in traditional and social media, which individuals become very aware of. But that has the effect of exaggerating existing danger. And so, a reliable pattern emerges – stress is triggered, spreading from one person to the next, which temporarily enhances the likelihood that people will take in negative reports, which increases stress further. As a result, trips are cancelled, even if the disaster took place across the globe; stocks are sold, even when holding on is the best thing to do. The good news, however, is that positive emotions, such as hope, are contagious too, and are powerful in inducing people to act to find solutions. Being aware of the close relationship between people's emotional state and how they process information can help us frame our messages more effectively and become conscientious agents of change.`,
      instructions: `Questions 27–30: Multiple choice — choose the correct letter A–D.
Questions 31–35: Complete each sentence with the correct ending, A–G.
Questions 36–40: Do the statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.`,
      questions: [
        {
          id: "cam20-ra-t1-s3-q27",
          number: 27,
          groupLabel: `Questions 27–30: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "27. In the first paragraph, the writer introduces the topic of the text by",
          options: [
            { label: "A  defining some commonly used terms.", value: "A" },
            { label: "B  questioning a widely held assumption.", value: "B" },
            { label: "C  mentioning a challenge faced by everyone.", value: "C" },
            { label: "D  specifying a situation which makes us most anxious.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. What point does the writer make about firefighters in the second paragraph?",
          options: [
            { label: "A  The regular changes of stress levels in their working lives make them ideal study subjects.", value: "A" },
            { label: "B  The strategies they use to handle stress are of particular interest to researchers.", value: "B" },
            { label: "C  The stressful nature of their job is typical of many public service professions.", value: "C" },
            { label: "D  Their personalities make them especially well-suited to working under stress.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What is the writer doing in the fourth paragraph?",
          options: [
            { label: "A  explaining their findings", value: "A" },
            { label: "B  justifying their approach", value: "B" },
            { label: "C  setting out their objectives", value: "C" },
            { label: "D  describing their methodology", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. In the seventh paragraph, the writer describes a mechanism in the brain which",
          options: [
            { label: "A  enables people to respond more quickly to stressful situations.", value: "A" },
            { label: "B  results in increased ability to control our levels of anxiety.", value: "B" },
            { label: "C  produces heightened sensitivity to indications of external threats.", value: "C" },
            { label: "D  is activated when there is a need to communicate a sense of danger.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q31",
          number: 31,
          groupLabel: `Questions 31–35: Complete each sentence with the correct ending, A–G, below.\n\nA  made them feel optimistic.\nB  took relatively little notice of bad news.\nC  responded to negative and positive information in the same way.\nD  were feeling under stress.\nE  put them in a stressful situation.\nF  behaved in a similar manner, regardless of the circumstances.\nG  thought it more likely that they would experience something bad.`,
          type: "matching",
          question: "31. At times when they were relaxed, the firefighters usually",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "32. The researchers noted that when the firefighters were stressed, they",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "33. When the firefighters were told good news, they always",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. The students' cortisol levels and heart rates were affected when the researchers",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q35",
          number: 35,
          type: "matching",
          question: "35. In both experiments, negative information was processed better when the subjects",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q36",
          number: 36,
          groupLabel: `Questions 36–40: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES if the statement agrees with the claims of the writer.\nWrite NO if the statement contradicts the claims of the writer.\nWrite NOT GIVEN if it is impossible to say what the writer thinks about this.`,
          type: "true_false_ng",
          question: "36. The tone of the content we post on social media tends to reflect the nature of the posts in our feeds.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Phones have a greater impact on our stress levels than other electronic media devices.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. The more we read about a stressful public event on social media, the less able we are to take the information in.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. Stress created by social media posts can lead us to take unnecessary precautions.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Our tendency to be affected by other people's moods can be used in a positive way.",
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

// ============================================================
// CAMBRIDGE IELTS 20 – TEST 2  (Academic Reading)
// Passages: Manatees /
//           Procrastination /
//           Invasion of the Robot Umpires
// ============================================================
export const cambridge20_reading_t2: IELTSTest = {
  id: "cam20-reading-academic-t2",
  title: "Cambridge IELTS 20 – Test 2",
  bookNumber: 20,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Manatees",
      passageText: `Manatees, also known as sea cows, are aquatic mammals that belong to a group of animals called Sirenia. This group also contains dugongs. Dugongs and manatees look quite alike – they are similar in size, colour and shape, and both have flexible flippers for forelimbs. However, the manatee has a broad, rounded tail, whereas the dugong's is fluked, like that of a whale. There are three species of manatees: the West Indian manatee (Trichechus manatus), the African manatee (Trichechus senegalensis) and the Amazonian manatee (Trichechus inunguis).

Unlike most mammals, manatees have only six bones in their neck – most others, including humans and giraffes, have seven. This short neck allows a manatee to move its head up and down, but not side to side. To see something on its left or its right, a manatee must turn its entire body, steering with its flippers. Manatees have pectoral flippers but no back limbs, only a tail for propulsion. They do have pelvic bones, however – a leftover from their evolution from a four-legged to a fully aquatic animal. Manatees share some visual similarities to elephants. Like elephants, manatees have thick, wrinkled skin. They also have some hairs covering their bodies which help them sense vibrations in the water around them.

Seagrasses and other marine plants make up most of a manatee's diet. Manatees spend about eight hours each day grazing and uprooting plants. They eat up to 15% of their weight in food each day. African manatees are omnivorous – studies have shown that molluscs and fish make up a small part of their diets. West Indian and Amazonian manatees are both herbivores.

Manatees' teeth are all molars – flat, rounded teeth for grinding food. Due to manatees' abrasive aquatic plant diet, these teeth get worn down and they eventually fall out, so they continually grow new teeth that get pushed forward to replace the ones they lose. Instead of having incisors to grasp their food, manatees have lips which function like a pair of hands to help tear food away from the seafloor.

Manatees are fully aquatic, but as mammals, they need to come up to the surface to breathe. When awake, they typically surface every two to four minutes, but they can hold their breath for much longer. Adult manatees sleep underwater for 10-12 hours a day, but they come up for air every 15-20 minutes. Active manatees need to breathe more frequently. It's thought that manatees use their muscular diaphragm and breathing to adjust their buoyancy. They may use diaphragm contractions to compress and store gas in folds in their large intestine to help them float.

The West Indian manatee reaches about 3.5 metres long and weighs on average around 500 kilogrammes. It moves between fresh water and salt water, taking advantage of coastal mangroves and coral reefs, rivers, lakes and inland lagoons. There are two subspecies of West Indian manatee: the Antillean manatee is found in waters from the Bahamas to Brazil, whereas the Florida manatee is found in US waters, although some individuals have been recorded in the Bahamas. In winter, the Florida manatee is typically restricted to Florida. When the ambient water temperature drops below 20°C, it takes refuge in naturally and artificially warmed water, such as at the warm-water outfalls from powerplants.

The African manatee is also about 3.5 metres long and found in the sea along the west coast of Africa, from Mauritania down to Angola. The species also makes use of rivers, with the mammals seen in landlocked countries such as Mali and Niger. The Amazonian manatee is the smallest species, though it is still a big animal. It grows to about 2.5 metres long and 350 kilogrammes. Amazonian manatees favour calm, shallow waters that are above 23°C. This species is found in fresh water in the Amazon Basin in Brazil, as well as in Colombia, Ecuador and Peru.

All three manatee species are endangered or at a heightened risk of extinction. The African manatee and Amazonian manatee are both listed as Vulnerable by the International Union for Conservation of Nature (IUCN). It is estimated that 140,000 Amazonian manatees were killed between 1935 and 1954 for their meat, fat and skin with the latter used to make leather. In more recent years, African manatee decline has been tied to incidental capture in fishing nets and hunting. Manatee hunting is now illegal in every country the African species is found in.

The two subspecies of West Indian manatee are listed as Endangered by the IUCN. Both are also expected to undergo a decline of 20% over the next 40 years. A review of almost 1,800 cases of entanglement in fishing nets and of plastic consumption among marine mammals in US waters from 2009 to 2020 found that at least 700 cases involved manatees. The chief cause of death in Florida manatees is boat strikes. However, laws in certain parts of Florida now limit boat speeds during winter, allowing slow-moving manatees more time to respond.`,
      instructions: `Questions 1–6: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.
Questions 7–13: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        {
          id: "cam20-ra-t2-s1-q1",
          number: 1,
          groupLabel: `Questions 1–6: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.\n\nManatees\nAppearance\n●  look similar to dugongs, but with a differently shaped 1 _______\n\nMovement\n●  have fewer neck bones than most mammals\n●  need to use their 2 _______ to help to turn their bodies around in order to look sideways\n●  sense vibrations in the water by means of 3 _______ on their skin\n\nFeeding\n●  eat mainly aquatic vegetation, such as 4 _______\n●  grasp and pull up plants with their 5 _______\n\nBreathing\n●  come to the surface for air every 2-4 minutes when awake and every 15-20 while sleeping\n●  may regulate the 6 _______ of their bodies by using muscles of diaphragm to store air internally`,
          type: "note_completion",
          question: "1. look similar to dugongs, but with a differently shaped _______",
          correctAnswer: "tail",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. need to use their _______ to help to turn their bodies around in order to look sideways",
          correctAnswer: "flippers",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. sense vibrations in the water by means of _______ on their skin",
          correctAnswer: "hair",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. eat mainly aquatic vegetation, such as _______",
          correctAnswer: "seagrasses",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. grasp and pull up plants with their _______",
          correctAnswer: "lips",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q6",
          number: 6,
          type: "note_completion",
          question: "6. may regulate the _______ of their bodies by using muscles of diaphragm to store air internally",
          correctAnswer: "buoyancy",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q7",
          number: 7,
          groupLabel: `Questions 7–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE if the statement agrees with the information.\nWrite FALSE if the statement contradicts the information.\nWrite NOT GIVEN if there is no information on this.`,
          type: "true_false_ng",
          question: "7. West Indian manatees can be found in a variety of different aquatic habitats.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. The Florida manatee lives in warmer waters than the Antillean manatee.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. The African manatee's range is limited to coastal waters between the West African countries of Mauritania and Angola.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. The extent of the loss of Amazonian manatees in the mid-twentieth century was only revealed many years later.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. It is predicted that West Indian manatee populations will fall in the coming decades.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. The risk to manatees from entanglement and plastic consumption increased significantly in the period 2009-2020.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. There is some legislation in place which aims to reduce the likelihood of boat strikes on manatees in Florida.",
          correctAnswer: "TRUE",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Procrastination",
      passageText: `A
Procrastination is the habit of delaying a necessary task, usually by focusing on less urgent, more enjoyable, and easier activities instead. We all do it from time to time. We might be composing a message to a friend who we have to let down, or putting together an important report for college or work; we're doing our best to avoid doing the job at hand, but deep down we know that we should just be getting on with it. Unfortunately, berating ourselves won't stop us procrastinating again. In fact, it's one of the worst things we can do. This matters because, as my research shows, procrastination doesn't just waste time, but is actually linked to other problems, too.

B
Contrary to popular belief, procrastination is not due to laziness or poor time management. Scientific studies suggest procrastination is, in fact, caused by poor mood management. This makes sense if we consider that people are more likely to put off starting or completing tasks that they are really not keen to do. If just thinking about the task threatens our sense of self-worth or makes us anxious, we will be more likely to put it off. Research involving brain imaging has found that areas of the brain linked to detection of threats and emotion regulation are actually different in people who chronically procrastinate compared to those who don't procrastinate frequently.

C
Tasks that are emotionally loaded or difficult, such as preparing for exams, are prime candidates for procrastination. People with low self-esteem are more likely to procrastinate. Another group of people who tend to procrastinate are perfectionists, who worry their work will be judged harshly by others. We know that if we don't finish that report or complete those home repairs, then what we did can't be evaluated. When we avoid such tasks, we also avoid the negative emotions associated with them. This is rewarding, and it conditions us to use procrastination to repair our mood. If we engage in more enjoyable tasks instead, we get another mood boost. In the long run, however, procrastination isn't an effective way of managing emotions. The 'mood repair' we experience is temporary. Afterwards, people tend to be left with a sense of guilt that not only increases their negative mood, but also reinforces their tendency to procrastinate.

D
So why is this such a problem? When most people think of the costs of procrastination, they think of the toll on productivity. For example, studies have shown that procrastination negatively impacts on student performance. But putting off reading textbooks and writing essays may affect other areas of students' lives. In one study of over 3,000 German students over a six-month period, those who reported procrastinating over their university work were also more likely to engage in study-related misconduct, such as cheating and plagiarism. But the behaviour that procrastination was most closely linked with was using fraudulent excuses to get deadline extensions. Other research shows that employees on average spend almost a quarter of their workday procrastinating, and again this is linked with negative outcomes. In fact, in one US survey of over 22,000 employees, participants who said they regularly procrastinated had less annual income and less employment stability. For every one-point increase on a measure of chronic procrastination, annual income decreased by US$15,000.

E
Procrastination also correlates with serious health and well-being problems. A tendency to procrastinate is linked to poor mental health, including higher levels of depression and anxiety. Across numerous studies, I've found people who regularly procrastinate report a greater number of health issues, such as headaches, flu and colds, and digestive issues. They also experience higher levels of stress and poor sleep quality. They are less likely to practise healthy behaviours, such as eating a healthy diet and regularly exercising, and use destructive coping strategies to manage their stress. In one study of over 700 people, I found people prone to procrastination had a 63% greater risk of poor heart health after accounting for other personality traits and demographics.

F
Finding better ways of managing our emotions is one route out of the vicious cycle of procrastination. An important first step is to manage our environment and how we view the task. There are a number of evidence-based strategies that can help us fend off distractions that can occupy our minds when we should be focusing on the thing we should be getting on with. For example, reminding ourselves about why the task is important and valuable can increase positive feelings towards it. Forgiving ourselves and feeling compassion when we procrastinate can help break the procrastination cycle. We should admit that we feel bad, but not be overly critical of ourselves. We should remind ourselves that we're not the first person to procrastinate, nor the last. Doing this can take the edge off the negative feelings we have about ourselves when we procrastinate. This can all make it easier to get back on track.`,
      instructions: `Questions 14–16: Matching information — which paragraph A–F contains each piece of information? NB You may use any letter more than once.
Questions 17–22: Summary completion — ONE WORD ONLY from the passage.
Questions 23–24: Choose TWO letters, A–E (comparisons between procrastinating and non-procrastinating employees).
Questions 25–26: Choose TWO letters, A–E (recommendations for getting out of the cycle of procrastination).`,
      questions: [
        {
          id: "cam20-ra-t2-s2-q14",
          number: 14,
          groupLabel: `Questions 14–16: Reading Passage 2 has six paragraphs, A–F. Which paragraph contains the following information?\nNB You may use any letter more than once.\n\n14  mention of false assumptions about why people procrastinate\n15  reference to the realisation that others also procrastinate\n16  neurological evidence of a link between procrastination and emotion`,
          type: "matching",
          question: "14. mention of false assumptions about why people procrastinate",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. reference to the realisation that others also procrastinate",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. neurological evidence of a link between procrastination and emotion",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q17",
          number: 17,
          groupLabel: `Questions 17–22: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.\n\nWhat makes us procrastinate?\nMany people think that procrastination is the result of 17 _______. Others believe it to be the result of an inability to organise time efficiently. But scientific studies suggest that procrastination is actually due to poor mood management. The tasks we are most likely to put off are those that could damage our self-esteem or cause us to feel 18 _______ when we think about them. Research comparing chronic procrastinators with other people even found differences in the brain regions associated with regulating emotions and identifying 19 _______.\n\nEmotionally loaded and difficult tasks often cause us to procrastinate. Getting ready to take 20 _______ might be a typical example of one such task. People who are likely to procrastinate tend to be either 21 _______ or those with low self-esteem.\n\nProcrastination is only a short-term measure for managing emotions. It's often followed by a feeling of 22 _______, which worsens our mood and leads to more procrastination.`,
          type: "summary_completion",
          question: "17. Many people think that procrastination is the result of _______",
          correctAnswer: "laziness",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q18",
          number: 18,
          type: "summary_completion",
          question: "18. tasks that could damage our self-esteem or cause us to feel _______ when we think about them",
          correctAnswer: "anxious",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q19",
          number: 19,
          type: "summary_completion",
          question: "19. differences in the brain regions associated with regulating emotions and identifying _______",
          correctAnswer: "threats",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q20",
          number: 20,
          type: "summary_completion",
          question: "20. Getting ready to take _______ might be a typical example of one such task",
          correctAnswer: "exams",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. People who are likely to procrastinate tend to be either _______ or those with low self-esteem",
          correctAnswer: "perfectionists",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. followed by a feeling of _______, which worsens our mood and leads to more procrastination",
          correctAnswer: "guilt",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q23",
          number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO comparisons between employees who often procrastinate and those who do not are mentioned in the text?\n\nA  Their salaries are lower.\nB  The quality of their work is inferior.\nC  They don't keep their jobs for as long.\nD  They don't enjoy their working lives as much.\nE  They have poorer relationships with colleagues.`,
          type: "multiple_choice",
          question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  Their salaries are lower.", value: "A" },
            { label: "B  The quality of their work is inferior.", value: "B" },
            { label: "C  They don't keep their jobs for as long.", value: "C" },
            { label: "D  They don't enjoy their working lives as much.", value: "D" },
            { label: "E  They have poorer relationships with colleagues.", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  Their salaries are lower.", value: "A" },
            { label: "B  The quality of their work is inferior.", value: "B" },
            { label: "C  They don't keep their jobs for as long.", value: "C" },
            { label: "D  They don't enjoy their working lives as much.", value: "D" },
            { label: "E  They have poorer relationships with colleagues.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q25",
          number: 25,
          groupLabel: `Questions 25 and 26: Choose TWO letters, A–E.\n\nWhich TWO recommendations for getting out of a cycle of procrastination does the writer give?\n\nA  not judging ourselves harshly\nB  setting ourselves manageable aims\nC  rewarding ourselves for tasks achieved\nD  prioritising tasks according to their importance\nE  avoiding things that stop us concentrating on our tasks`,
          type: "multiple_choice",
          question: "25. Choose TWO (first answer)",
          options: [
            { label: "A  not judging ourselves harshly", value: "A" },
            { label: "B  setting ourselves manageable aims", value: "B" },
            { label: "C  rewarding ourselves for tasks achieved", value: "C" },
            { label: "D  prioritising tasks according to their importance", value: "D" },
            { label: "E  avoiding things that stop us concentrating on our tasks", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Choose TWO (second answer)",
          options: [
            { label: "A  not judging ourselves harshly", value: "A" },
            { label: "B  setting ourselves manageable aims", value: "B" },
            { label: "C  rewarding ourselves for tasks achieved", value: "C" },
            { label: "D  prioritising tasks according to their importance", value: "D" },
            { label: "E  avoiding things that stop us concentrating on our tasks", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Invasion of the Robot Umpires",
      passageText: `A few years ago, Fred DeJesus from Brooklyn, New York became the first umpire in a minor league baseball game to use something called the Automated Ball-Strike System (ABS), often referred to as the 'robo-umpire'. Instead of making any judgments himself about a strike, DeJesus had decisions fed to him through an earpiece, connected to a modified missile-tracking system. The contraption looked like a large black pizza box with one glowing green eye; it was mounted above the press stand.

Major League Baseball (MLB), who had commissioned the system, wanted human umpires to announce the calls, just as they would have done in the past. When the first pitch came in, a recorded voice told DeJesus it was a strike. Previously, calling a strike was a judgment call on the part of the umpire. Even if the batter does not hit the ball, a pitch that passes through the 'strike zone' (an imaginary zone about seventeen inches wide, stretching from the batter's knees to the middle of his chest) is considered a strike. During that first game, when DeJesus announced calls, there was no heckling and no shouted disagreement. Nobody said a word.

For a hundred and fifty years or so, the strike zone has been the game's animating force – countless arguments between a team's manager and the umpire have taken place over its boundaries and whether a ball had crossed through it. The rules of play have evolved in various stages. Today, everyone knows that you may scream your disagreement in an umpire's face, but you must never shout personal abuse at them or touch them. That's a no-no. When the robo-umpires came, however, the arguments stopped.

During the first robo-umpire season, players complained about some strange calls. In response, MLB decided to tweak the dimensions of the zone, and the following year the consensus was that ABS is profoundly consistent. MLB says the device is near-perfect, precise to within fractions of an inch. 'It'll reduce controversy in the game, and be good for the game,' says Rob Manfred, who is Commissioner for MLB. But the question is whether controversy is worth reducing, or whether it is the sign of a human hand.

A human, at least, yells back. When I spoke with Frank Viola, a coach for a North Carolina team, he said that ABS works as designed, but that it was also unforgiving and pedantic, almost legalistic. 'Manfred is a lawyer,' Viola noted. Some pitchers have complained that, compared with a human's, the robot's strike zone seems too precise. Viola was once a major-league player himself. When he was pitching, he explained, umpires rewarded skill. 'Throw it where you aimed, and it would be a strike, even if it was an inch or two outside. There was a dialogue between pitcher and umpire.'

The executive tasked with running the experiment for MLB is Morgan Sword, who's in charge of baseball operations. According to Sword, ABS was part of a larger project to make baseball more exciting since executives are terrified of losing younger fans, as has been the case with horse racing and boxing. He explains how they began the process by asking fans what version of baseball they found most exciting. The results showed that everyone wanted more action: more hits, more defense, more baserunning. This type of baseball essentially hasn't existed since the 1960s, when the hundred-mile-an-hour fastball, which is difficult to hit and control, entered the game. It flattened the game into strikeouts, walks, and home runs – a type of play lacking much action.

Sword's team brainstormed potential fixes. Any rule that existed, they talked about changing – from changing the bats to changing the geometry of the field. But while all of these were ruled out as potential fixes, ABS was seen as a perfect vehicle for change. According to Sword, once you get the technology right, you can load any strike zone you want into the system. 'It might be a triangle, or a blob, or something shaped like Texas. Over time, as baseball evolves, ABS can allow the zone to change with it.'

In the past twenty years, sports have moved away from judgment calls. Soccer has Video Assistant Referees (for offside decisions, for example). Tennis has Hawk-Eye (for line calls, for example). For almost a decade, baseball has used instant replay on the base paths. This is widely liked, even if the precision can sometimes cause problems. But these applications deal with something physical: bases, lines, goals. The boundaries of action are precise, delineated like the keys of a piano. This is not the case with ABS and the strike zone. Historically, a certain discretion has been appreciated.

I decided to email Alva Noë, a professor at Berkeley University and a baseball fan, for his opinion. 'Hardly a day goes by that I don't wake up and run through the reasons that this [robo-umpires] is such a terrible idea,' he replied. He later told me, 'This is part of a movement to use algorithms to take the hard choices of living out of life.' Perhaps he's right. We watch baseball to kill time, not to maximize it. Some players I have met take a dissenting stance toward the robots too, believing that accuracy is not the answer. According to Joe Russo, who plays for a New Jersey team, 'With technology, people just want everything to be perfect. That's not reality. I think perfect would be weird. Your teams are always winning, work is always just great, there's always money in your pocket, your car never breaks down. What is there to talk about?'`,
      instructions: `Questions 27–32: Do the statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.
Questions 33–37: Complete the summary using the list of phrases, A–H.
Questions 38–40: Multiple choice — choose the correct letter A–D.`,
      questions: [
        {
          id: "cam20-ra-t2-s3-q27",
          number: 27,
          groupLabel: `Questions 27–32: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES if the statement agrees with the claims of the writer.\nWrite NO if the statement contradicts the claims of the writer.\nWrite NOT GIVEN if it is impossible to say what the writer thinks about this.`,
          type: "true_false_ng",
          question: "27. When DeJesus first used ABS, he shared decision-making about strikes with it.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q28",
          number: 28,
          type: "true_false_ng",
          question: "28. MLB considered it necessary to amend the size of the strike zone when criticisms were received from players.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q29",
          number: 29,
          type: "true_false_ng",
          question: "29. MLB is keen to justify the money spent on improving the accuracy of ABS's calculations.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q30",
          number: 30,
          type: "true_false_ng",
          question: "30. The hundred-mile-an-hour fastball led to a more exciting style of play.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q31",
          number: 31,
          type: "true_false_ng",
          question: "31. The differing proposals for alterations to the baseball bat led to fierce debate on Sword's team.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q32",
          number: 32,
          type: "true_false_ng",
          question: "32. ABS makes changes to the shape of the strike zone feasible.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q33",
          number: 33,
          groupLabel: `Questions 33–37: Complete the summary using the list of phrases, A–H, below.\n\nCalls by the umpire\nEven after ABS was developed, MLB still wanted human umpires to shout out decisions as they had in their 33 _______. The umpire's job had, at one time, required a 34 _______ about whether a ball was a strike. A ball is considered a strike when the batter does not hit it and it crosses through a 35 _______ extending approximately from the batter's knee to his chest.\n\nIn the past, 36 _______ over strike calls were not uncommon, but today everyone accepts the complete ban on pushing or shoving the umpire. One difference, however, is that during the first game DeJesus used ABS, strike calls were met with 37 _______.\n\nA  pitch boundary\nB  numerous disputes\nC  team tactics\nD  subjective assessment\nE  widespread approval\nF  former roles\nG  total silence\nH  perceived area`,
          type: "matching",
          question: "33. MLB still wanted human umpires to shout out decisions as they had in their _______",
          options: [
            { label: "A  pitch boundary", value: "A" },
            { label: "B  numerous disputes", value: "B" },
            { label: "C  team tactics", value: "C" },
            { label: "D  subjective assessment", value: "D" },
            { label: "E  widespread approval", value: "E" },
            { label: "F  former roles", value: "F" },
            { label: "G  total silence", value: "G" },
            { label: "H  perceived area", value: "H" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q34",
          number: 34,
          type: "matching",
          question: "34. The umpire's job had, at one time, required a _______ about whether a ball was a strike",
          options: [
            { label: "A  pitch boundary", value: "A" },
            { label: "B  numerous disputes", value: "B" },
            { label: "C  team tactics", value: "C" },
            { label: "D  subjective assessment", value: "D" },
            { label: "E  widespread approval", value: "E" },
            { label: "F  former roles", value: "F" },
            { label: "G  total silence", value: "G" },
            { label: "H  perceived area", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q35",
          number: 35,
          type: "matching",
          question: "35. it crosses through a _______ extending approximately from the batter's knee to his chest",
          options: [
            { label: "A  pitch boundary", value: "A" },
            { label: "B  numerous disputes", value: "B" },
            { label: "C  team tactics", value: "C" },
            { label: "D  subjective assessment", value: "D" },
            { label: "E  widespread approval", value: "E" },
            { label: "F  former roles", value: "F" },
            { label: "G  total silence", value: "G" },
            { label: "H  perceived area", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q36",
          number: 36,
          type: "matching",
          question: "36. In the past, _______ over strike calls were not uncommon",
          options: [
            { label: "A  pitch boundary", value: "A" },
            { label: "B  numerous disputes", value: "B" },
            { label: "C  team tactics", value: "C" },
            { label: "D  subjective assessment", value: "D" },
            { label: "E  widespread approval", value: "E" },
            { label: "F  former roles", value: "F" },
            { label: "G  total silence", value: "G" },
            { label: "H  perceived area", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q37",
          number: 37,
          type: "matching",
          question: "37. strike calls were met with _______",
          options: [
            { label: "A  pitch boundary", value: "A" },
            { label: "B  numerous disputes", value: "B" },
            { label: "C  team tactics", value: "C" },
            { label: "D  subjective assessment", value: "D" },
            { label: "E  widespread approval", value: "E" },
            { label: "F  former roles", value: "F" },
            { label: "G  total silence", value: "G" },
            { label: "H  perceived area", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q38",
          number: 38,
          groupLabel: `Questions 38–40: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "38. What does the writer suggest about ABS in the fifth paragraph?",
          options: [
            { label: "A  It is bound to make key decisions that are wrong.", value: "A" },
            { label: "B  It may reduce some of the appeal of the game.", value: "B" },
            { label: "C  It will lead to the disappearance of human umpires.", value: "C" },
            { label: "D  It may increase calls for the rules of baseball to be changed.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q39",
          number: 39,
          type: "multiple_choice",
          question: "39. Morgan Sword says that the introduction of ABS",
          options: [
            { label: "A  was regarded as an experiment without a guaranteed outcome.", value: "A" },
            { label: "B  was intended to keep up with developments in other sports.", value: "B" },
            { label: "C  was a response to changing attitudes about the role of sport.", value: "C" },
            { label: "D  was an attempt to ensure baseball retained a young audience.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam20-ra-t2-s3-q40",
          number: 40,
          type: "multiple_choice",
          question: "40. Why does the writer include the views of Noë and Russo?",
          options: [
            { label: "A  to show that attitudes to technology vary widely", value: "A" },
            { label: "B  to argue that people have unrealistic expectations of sport", value: "B" },
            { label: "C  to indicate that accuracy is not the same thing as enjoyment", value: "C" },
            { label: "D  to suggest that the number of baseball fans needs to increase", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge20Tests: IELTSTest[] = [cambridge20_reading_t1, cambridge20_reading_t2];
