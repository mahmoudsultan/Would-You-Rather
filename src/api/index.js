import { _getUsers, _getQuestions, _saveQuestion } from './_DATA'

export const getInitialData = async () => {
  const users = await _getUsers();
  const questions = await _getQuestions();

  return {
    users,
    questions,
  };
};

export const addNewQuestion = async (question) => {
  const createdQuestion = await _saveQuestion(question);

  return createdQuestion;
}
