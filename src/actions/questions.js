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

export const handleNewQuestion = (question) => (dispatch, getState) => {
  const { authUser } = getState();

  return addNewQuestion({...question, author: authUser }).then((createdQuestion) => {
    dispatch(addQuestion(createdQuestion));
  }).catch((e) => {
    // TODO: Alert user with error
    console.error(e);
  });
};
