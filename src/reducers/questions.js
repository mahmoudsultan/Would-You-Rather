import { RECIEVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";

const questions = (state = {}, action) => {
  switch(action.type) {
    case RECIEVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: [
              ...state[action.questionId][action.answer].votes,
              action.userId,
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default questions;
