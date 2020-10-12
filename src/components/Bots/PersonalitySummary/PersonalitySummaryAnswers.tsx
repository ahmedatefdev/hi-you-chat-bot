import { ReviewAnswer } from '../../../types/ReviewAnswer';
import { PhotosOptionsIdsLabels, QuestionsIds } from './PersonalitySummaryEnums';

export const PersonalitySummaryAnswers: any = {
  [QuestionsIds.name]: (value: string, previousValueSteps?: any): ReviewAnswer => ({ key: QuestionsIds.name, answer: `Great ${value}! Check out your summary` }),

  [QuestionsIds.bestTrait]: (value: string, previousValueSteps?: any): ReviewAnswer => {
    return {
      key: QuestionsIds.bestTrait,
      question: value,
      answer: `for this trait you have to power up it, that is for focus in your strongest trait will make you more specialist in your work field`
    };
  },
  [QuestionsIds.peopleSayType]: (value: 'positive' | 'negative', previousValueSteps?: any): ReviewAnswer => {
    let answer = `About what friends and family say, because it ${value}: `;
    switch (value) {
      case "positive":
        answer += "that is mean You have an excellent reputation. Do not forget to give thanks to your friends and family for their words.";
        break;
      case "negative":
        answer += "that is mean You have to do a lot more work on yourself for your family and friends before yourself because they are the closest people to you if you lose them who you will have after them.";
        break;
    }
    return {
      key: QuestionsIds.peopleSayType,
      question: previousValueSteps[QuestionsIds.peopleSay]?.value,
      answer
    };
  },
  [QuestionsIds.frqQuestion]: (value: string, previousValueSteps?: any): ReviewAnswer => ({
    key: QuestionsIds.frqQuestion,
    question: value, answer: `for this question you need a professional answer for it that is for increasing you prestige`
  }),
  [QuestionsIds.womanOldMan]: (value: PhotosOptionsIdsLabels.oldMan | PhotosOptionsIdsLabels.woman, previousValueSteps?: any): ReviewAnswer => {
    let answer = `Because you choose ${value} in that photo: `;
    switch (value) {
      case PhotosOptionsIdsLabels.oldMan:
        answer += "you’re more of a sensitive, gentler soul who is very empathetic of others. Because you saw the old man first, it also points to the possibility that you use your right brain more than you do your left. It’s more of the creative, artistic hemisphere of your brain. Showing you’re more of an artsy individual.";
        break;
      case PhotosOptionsIdsLabels.woman:
        answer += "You are most likely more of an analytical and thoughtful, calculated person compared to those who saw the old man first. You use the left side of your brain more than you do the right. Your analytical and thoughtful mind will serve you well in life. But you can come across as cold-hearted when you’re just trying to be practical. Don’t hide the side of you that wants to believe in the good in people. Even if your analytics tell you differently. Don’t let it shut you off from others.";
        break;
    }
    return {
      key: QuestionsIds.womanOldMan,
      question: "woman or old man photo",
      answer
    };
  },
  [QuestionsIds.cliffCatFace]: (value: PhotosOptionsIdsLabels.cliff | PhotosOptionsIdsLabels.cat | PhotosOptionsIdsLabels.face, previousValueSteps?: any): ReviewAnswer => {
    let answer = `Because you choose ${value} in that photo: `;
    switch (value) {
      case PhotosOptionsIdsLabels.cliff:
        answer += "you are an optimistic person who easily adapts to changes in the environment surrounding you. You are capable of finding common ground with people quickly and this fact makes you hate loneliness. You are a passionate person with thousands of new ideas in your head.";
        break;
      case PhotosOptionsIdsLabels.cat:
        answer += "you are a person who likes stability. You perceive psychological and emotional balance as synonyms to personal development. Besides that, you are a responsible person who always keeps their word.";
        break;
      case PhotosOptionsIdsLabels.face:
        answer += "you are an extremely creative person who sees the world as a place full of new openings and achievements. Intuition, wisdom, happiness, and satisfaction of your tireless curiosity are the most important things in life for you. You have perfect taste and a sensitive perception of art, poetry, music, and literature.";
        break;
    }
    return {
      key: QuestionsIds.cliffCatFace,
      question: "Cliff, Cat, Face photo",
      answer
    };
  },
  [QuestionsIds.rootsTreeLips]: (value: PhotosOptionsIdsLabels.roots | PhotosOptionsIdsLabels.tree | PhotosOptionsIdsLabels.lips, previousValueSteps?: any): ReviewAnswer => {
    let answer = `Because you choose ${value} in That photo: `;
    switch (value) {
      case PhotosOptionsIdsLabels.roots:
        answer += "you are an extremely progressive person always trying to improve or change a situation.";
        break;
      case PhotosOptionsIdsLabels.tree:
        answer += "you are an ambitious person who always looks further than others. Moreover, you are a perfectionist to the core and search for the best things in any situation.";
        break;
      case PhotosOptionsIdsLabels.lips:
        answer += "you always take things the way they are and judge them by their true value. You don’t try to change or decipher things around you or understand their hidden meaning.";
        break;
    }
    return {
      key: QuestionsIds.rootsTreeLips,
      question: "roots, tree, lips photo",
      answer
    };
  },
  [QuestionsIds.lionBird]: (value: PhotosOptionsIdsLabels.lion | PhotosOptionsIdsLabels.bird, previousValueSteps?: any): ReviewAnswer => {
    let answer = `Because you choose ${value} in that photo: `;
    switch (value) {
      case PhotosOptionsIdsLabels.lion:
        answer += "It's most likely that you're always getting to the root of things, and you are not afraid of facing your strongest fears. You are a very brave person!";
        break;
      case PhotosOptionsIdsLabels.bird:
        answer += "Perhaps sometimes you are a bit light-headed and, in some situations, even irresponsible. At the same time, you have a creative personality and a desire to change the world for the better.";
        break;
    }
    return {
      key: QuestionsIds.lionBird,
      question: "lion, bird photo",
      answer
    };
  },
  [QuestionsIds.womanMan]: (value: PhotosOptionsIdsLabels.youngWoman | PhotosOptionsIdsLabels.man, previousValueSteps?: any): ReviewAnswer => {
    let answer = `you choose ${value} in that photo: And`;

    if (previousValueSteps[QuestionsIds.gender]?.value === "male")
      switch (value) {
        case PhotosOptionsIdsLabels.youngWoman:
          answer += "This may show that you are looking for a partner to share your life with. Maybe even a little too much. Give yourself time to let things happen naturally. Which images did you choose first? Did any reveal something about yourself you weren’t aware of?";
          break;
        case PhotosOptionsIdsLabels.man:
          answer += "It means you may be concerned with your interpersonal relationships with other men. This could mean your coworkers, guys at the gym, or close friends. They may worry you a little too much of what they think of you.";
          break;
      }

    else
      switch (value) {
        case PhotosOptionsIdsLabels.youngWoman:
          answer += "It means you are very comfortable in your own skin. This strong confidence in yourself will serve you well.";
          break;
        case PhotosOptionsIdsLabels.man:
          answer += "it may mean that you are looking for a romantic partner. If you are already in a relationship, it could mean that you are already deeply connected to that person. They are often at the front of your mind and things are going really well.";
          break;
      }
    return {
      key: QuestionsIds.womanMan,
      question: "Young Woman, man  photo",
      answer
    };
  }
};
