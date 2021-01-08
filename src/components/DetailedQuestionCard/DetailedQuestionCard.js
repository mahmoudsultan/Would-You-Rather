import { connect } from 'react-redux';
import { useCallback, useMemo } from 'react';

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

  const totalVotes = useMemo(() => {
    return question.optionOne.votes.length + question.optionTwo.votes.length;
  }, [question]);

  const optionOneVotes = useMemo(() => {
    return question.optionOne.votes.length;
  }, [question]);

  const optionTwoVotes = useMemo(() => {
    return question.optionTwo.votes.length;
  }, [question]);

  const optionOnePer = useMemo(() => {
    return ((optionOneVotes / totalVotes) * 100).toFixed(1);
  }, [optionOneVotes, totalVotes]);

  const optionTwoPer = useMemo(() => {
    return ((optionTwoVotes / totalVotes) * 100).toFixed(1);
  }, [optionTwoVotes, totalVotes]);  

  return (
    <div className="mt-8 w-4/5 lg:w-1/2 p-5 bg-white rounded-xl shadow-md overflow-hidden mx-auto">
      <QuestionInfo question={question} author={author} />
      { !choosedAnswer && <div className="mt-2 w-4/5 mx-auto flex flex-row">
          <div onClick={handleSaveAnswer} data-option="optionOne" className="flex-none bg-gray-100 rounded-md py-2 px-5 cursor-pointer hover:bg-purple-600 hover:text-white hover:font-bold">{ optionOneTruncText }</div>
          <div className="flex-grow text-center py-2 text-gray-600 font-bold">OR</div>
          <div onClick={handleSaveAnswer} data-option="optionTwo" className="flex-none bg-gray-100 rounded-md py-2 px-5 cursor-pointer hover:bg-purple-600 hover:text-white hover:font-bold">{ optionTwoTruncText }</div>
        </div> }
      { choosedAnswer && <div className="mt-2 w-4/5 mx-auto flex flex-col">
          <div className="relative pt-1 w-full">
            <div className="overflow-hidden h-auto mb-4 text-md flex rounded bg-pink-200">
              <div 
                style={{width: `${optionOnePer}%`}}
                className={`${ choosedAnswer === 'optionOne' ? 'bg-purple-500 text-white font-bold' : 'bg-gray-300 text-gray-800' } py-2 shadow-none flex flex-col text-center whitespace-nowrap justify-center`}
              >
                {optionOneVotes} - ({ optionOnePer + '%' })
              </div>
              <div
                style={{width: `${optionTwoPer}%`}}
                className={`${ choosedAnswer === 'optionTwo' ? 'bg-purple-500 text-white font-bold' : 'bg-gray-300 text-gray-800' } py-2 shadow-none flex flex-col text-center whitespace-nowrap justify-center`}
              >
                {optionTwoVotes} - ({ optionTwoPer + '%' })
              </div>
            </div>
          </div>
          <div className={`-mt-2 flex ${choosedAnswer === 'optionOne' ? 'justify-start' : 'justify-end'}`}>
            <span className="text-purple-600 font-bold">You</span>
          </div>
      </div> }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedQuestionCard);
