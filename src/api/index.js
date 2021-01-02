import { _getUsers, _getQuestions } from './_DATA'

export const getInitialData = async () => {
  const users = await _getUsers();
  const questions = await _getQuestions();

  return {
    users,
    questions,
  };
};
