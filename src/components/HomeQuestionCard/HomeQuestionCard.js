import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import QuestionInfo from '../QuestionInfo/QuestionInfo';

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: questions[id],
  author: users[questions[id].author],
})

const HomeQuestionCard = ({ question, author }) => {
  return (
    <div className="w-11/12 sm:w-4/5 lg:w-1/2 p-5 bg-white rounded-xl shadow-md overflow-hidden mx-auto">
      <QuestionInfo question={question} author={author} />
      <div className="flex flex-row justify-end pa-2 mt-5 sm:mt-0 md:-mt-6">
        <Link to={`/questions/${question.id}`} className="font-semibold text-lg sm:mr-5 rounded-md bg-purple-600 text-white px-6 py-2">View Poll</Link>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(HomeQuestionCard);
