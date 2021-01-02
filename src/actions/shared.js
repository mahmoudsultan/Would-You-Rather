import { getInitialData as getInitialDataFromApi } from '../api';

import { recieveUsers } from './users';
import { recieveQuestions } from './questions'

export const getInitialData = () => {
  return (dispatch) => {
    getInitialDataFromApi().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
    });
  };
};
