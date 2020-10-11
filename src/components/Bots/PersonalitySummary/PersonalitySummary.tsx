import React from 'react';
import ChatStep from '../../../types/StepTypes'
import { PersonalitySummaryAnswers } from './PersonalitySummaryAnswers';
import { QuestionsIds } from './PersonalitySummaryEnums';
import ReviewAnswers from './ReviewAnswers';
import { generalPersonalInfo, characterQuestions, FirstThingSees } from './PersonalitySummarySteps';


export const defaultSteps: ChatStep[] = [
  {
    id: "hello-world",
    message: "Hello World!",
    end: true
  }
];


export const optionsSteps = [
  { id: "1", message: "What number I am thinking?", trigger: "2" },
  {
    id: "2",
    options: [
      { value: 1, label: "Number 1", trigger: "4" },
      { value: 2, label: "Number 2", trigger: "3" },
      { value: 3, label: "Number 3", trigger: "3" }
    ]
  },
  {
    id: "3",
    message: "Wrong answer, try again.",
    trigger: "2"
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true
  }
];


// DONE: Generate final data
// DONE: Refactored the personal Info

const ss: ChatStep[] = [
  ...generalPersonalInfo(6),
  ...characterQuestions(10),
  ...FirstThingSees(26),
  // {
  //   id: 26, message: (previousValue: any) => {
  //     return GenerateAnswers(previousValue)
  //   }, end: true
  // }
  { id: 26, end: true, asMessage: true, component: <ReviewAnswers Answers={PersonalitySummaryAnswers} QuestionsIds={QuestionsIds} /> }
]

export const PersonalitySummary: ChatStep[] = ss