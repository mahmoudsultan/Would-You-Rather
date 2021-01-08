import { connect } from 'react-redux';
import { useCallback } from 'react';

import QuestionInfo from '../QuestionInfo/QuestionInfo';
import { handleSaveAnswer } from '../../actions/questions';

const mapDispatchToProps = (dispatch) => ({
  saveAnswer: (questionId, answer) => {
    dispatch(handleSaveAnswer(questionId, answer))
  },
});

const mapStateToProps = ({ questions, users, authUser }, { match }) => {
  const id = match.params.id;
  const choosedAnswer = users[authUser].answers[id];

  return {
    question: questions[id],
    author: users[questions[id].author],
    choosedAnswer,
  }
}

const DetailedQuestionCard = ({ question, author, choosedAnswer, saveAnswer }) => {
  const optionOneTruncText = question.optionOne.text.length > 15 ? question.optionOne.text : (question.optionOne.text.slice(0, 15) + '...');
  const optionTwoTruncText = question.optionTwo.text.length > 15 ? question.optionTwo.text : (question.optionTwo.text.slice(0, 15) + '...');

  const handleSaveAnswer = useCallback((e) => {
    const answer = e.target.getAttribute('data-option');
    saveAnswer(question.id, answer);
  }, [question, saveAnswer]);

  return (
    <div className="mt-8 w-4/5 lg:w-1/2 p-5 bg-white rounded-xl shadow-md overflow-hidden mx-auto">
      <QuestionInfo question={question} author={author} />
      { !choosedAnswer && <div className="mt-2 w-4/5 mx-auto flex flex-row">
          <div onClick={handleSaveAnswer} data-option="optionOne" className="flex-none bg-gray-100 rounded-md py-2 px-5 cursor-pointer hover:bg-purple-600 hover:text-white hover:font-bold">{ optionOneTruncText }</div>
          <div className="flex-grow text-center py-2 text-gray-600 font-bold">OR</div>
          <div onClick={handleSaveAnswer} data-option="optionTwo" className="flex-none bg-gray-100 rounded-md py-2 px-5 cursor-pointer hover:bg-purple-600 hover:text-white hover:font-bold">{ optionTwoTruncText }</div>
        </div> }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedQuestionCard);
