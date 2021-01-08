import { addNewQuestion } from "../api";

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export const recieveQuestions = (questions) => ({
  type: RECIEVE_QUESTIONS,
  questions,
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const handleNewQuestion = ({ optionOneText, optionTwoText }) => (dispatch, getState) => {
  console.log(optionOneText, optionTwoText);
  const { authUser } = getState();

  return addNewQuestion({ optionOneText, optionTwoText, author: authUser }).then((createdQuestion) => {
    dispatch(addQuestion(createdQuestion));
  }).catch((e) => {
    // TODO: Alert user with error
    console.error(e);
  });
};
