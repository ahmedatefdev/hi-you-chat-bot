import React from 'react';
import ChatStep from '../../../types/StepTypes';
import bird from '../../../img/bird.jpg';
import lips from '../../../img/lips.jpg';
import oldMan from '../../../img/oldMan.jpg';
import cliff from '../../../img/cliff.jpg';
import womanMan from '../../../img/womanMan.jpg';
import bot1 from '../../../img/icons/004-bot-3.svg';
import { QuestionsIds, PhotosOptionsIdsLabels } from "../PersonalitySummary/PersonalitySummaryEnums";

export const generalPersonalInfo = (nextTriggerId: string | number | Function): ChatStep[] => {
  return [
    { id: 1, message: "hello to Personality Summary chat bot", trigger: 2 },
    { id: 2, message: "at first, what is you name?", trigger: QuestionsIds.name },
    { id: QuestionsIds.name, user: true, trigger: 4, },
    { id: 4, message: (previousValue: any) => `Hi ${previousValue.steps.name.value}! What is your gender?`, trigger: QuestionsIds.gender },
    {
      id: QuestionsIds.gender,
      options: [
        { value: 'male', label: 'Male', trigger: nextTriggerId },
        { value: 'female', label: 'Female', trigger: nextTriggerId },
      ],
    }
  ];
};

export const characterQuestions = (nextTriggerId: string | number | Function): ChatStep[] => {
  return [
    { id: 6, message: "Now some personal questions", trigger: 7, avatar: bot1 },
    { id: 7, message: "What is your best trait?", trigger: QuestionsIds.bestTrait },
    { id: QuestionsIds.bestTrait, user: true, trigger: 8 },
    { id: 8, message: " If asked, what would your friends and family say about you?", trigger: QuestionsIds.peopleSay },
    { id: QuestionsIds.peopleSay, user: true, trigger: "negOrPos" },
    { id: "negOrPos", message: "Is it Negative or positive for you?", trigger: QuestionsIds.peopleSayType },
    {
      id: QuestionsIds.peopleSayType,
      options: [
        { value: 'negative', label: 'Negative', trigger: 9 },
        { value: 'positive', label: 'positive', trigger: 9 },
      ],
    },
    { id: 9, message: "What is the question people ask you most often?", trigger: QuestionsIds.frqQuestion },
    { id: QuestionsIds.frqQuestion, user: true, trigger: nextTriggerId }
  ];
};
class ChatImage extends React.Component<{
  src: string;
}, {}> {
  render() {
    return (<img src={this.props.src} alt="img" style={{
      width: "100%",
      maxWidth: "400px",
      height: "100%",
      maxHeight: "250px"
    }}></img>);
  }
}
export const FirstThingSees = (nextTriggerId: string | number | Function): ChatStep[] => {
  return [
    {
      id: 10, trigger: 11,
      message: "Now with some photos, choose First Thing You See in every photo.",
      avatar: bot1
    },
    { id: 11, asMessage: true, component: <ChatImage src={oldMan} />, trigger: QuestionsIds.womanOldMan },
    {
      id: QuestionsIds.womanOldMan,
      options: [
        { value: PhotosOptionsIdsLabels.oldMan, label: PhotosOptionsIdsLabels.oldMan, trigger: 12 },
        { value: PhotosOptionsIdsLabels.woman, label: PhotosOptionsIdsLabels.woman, trigger: 12 },
      ],
    },

    { id: 12, asMessage: true, component: <ChatImage src={cliff} />, trigger: QuestionsIds.cliffCatFace },
    {
      id: QuestionsIds.cliffCatFace,
      options: [
        { value: PhotosOptionsIdsLabels.cliff, label: PhotosOptionsIdsLabels.cliff, trigger: 13 },
        { value: PhotosOptionsIdsLabels.cat, label: PhotosOptionsIdsLabels.cat, trigger: 13 },
        { value: PhotosOptionsIdsLabels.face, label: PhotosOptionsIdsLabels.face, trigger: 13 },
      ],
    },
    { id: 13, asMessage: true, component: <ChatImage src={lips} />, trigger: QuestionsIds.rootsTreeLips },
    {
      id: QuestionsIds.rootsTreeLips,
      options: [
        { value: PhotosOptionsIdsLabels.roots, label: PhotosOptionsIdsLabels.roots, trigger: 14 },
        { value: PhotosOptionsIdsLabels.tree, label: PhotosOptionsIdsLabels.tree, trigger: 14 },
        { value: PhotosOptionsIdsLabels.lips, label: PhotosOptionsIdsLabels.lips, trigger: 14 },
      ],
    },
    { id: 14, asMessage: true, component: <ChatImage src={bird} />, trigger: QuestionsIds.lionBird },
    {
      id: QuestionsIds.lionBird,
      options: [
        { value: PhotosOptionsIdsLabels.bird, label: PhotosOptionsIdsLabels.bird, trigger: 15 },
        { value: PhotosOptionsIdsLabels.lion, label: PhotosOptionsIdsLabels.lion, trigger: 15 },
      ],
    },
    { id: 15, asMessage: true, component: <ChatImage src={womanMan} />, trigger: QuestionsIds.womanMan },
    {
      id: QuestionsIds.womanMan,
      options: [
        { value: PhotosOptionsIdsLabels.youngWoman, label: PhotosOptionsIdsLabels.youngWoman, trigger: nextTriggerId },
        { value: PhotosOptionsIdsLabels.man, label: PhotosOptionsIdsLabels.man, trigger: nextTriggerId },
      ],
    }
  ];
};
