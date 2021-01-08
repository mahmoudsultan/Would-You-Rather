import { addNewQuestion } from "../api";
import { _saveQuestionAnswer } from "../api/_DATA";

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

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

const saveAnswer = (questionId, answer, userId) => ({
  type: SAVE_ANSWER,
  questionId,
  answer,
  userId,
});

export const handleSaveAnswer = (questionId, answer) => (dispatch, getState) => {
  const { authUser } = getState();

  return _saveQuestionAnswer({ authedUser: authUser, qid: questionId, answer }).then(() => {
    dispatch(saveAnswer(questionId, answer, authUser));
  }).catch((e) => {
    // TODO: Alert user with error
    console.error(e);
  });
};
