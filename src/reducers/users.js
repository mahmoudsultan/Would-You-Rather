import { RECIEVE_USERS } from '../actions/users';
import { ADD_QUESTION, SAVE_ANSWER } from '../actions/questions';

const users = (state = {}, action) => {
  switch(action.type) {
    case RECIEVE_USERS:
      return action.users;
    case ADD_QUESTION:
      return { 
        ...state, 
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions, action.question.id
          ],
        },
      };
    case SAVE_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;
