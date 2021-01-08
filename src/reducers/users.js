import { RECIEVE_USERS } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';

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
    default:
      return state;
  }
};

export default users;
