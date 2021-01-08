import { connect } from 'react-redux';
import QuestionInfo from '../QuestionInfo/QuestionInfo';

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: questions[id],
  author: users[questions[id].author],
})

const HomeQuestionCard = ({ question, author }) => {
  return (
    <div className="w-4/5 lg:w-1/2 p-5 bg-white rounded-xl shadow-md overflow-hidden mx-auto">
      <QuestionInfo question={question} author={author} />
      <div className="flex flex-row justify-end pa-2 md:-mt-6">
        <button className="font-semibold text-lg mr-5 rounded-md bg-purple-600 text-white px-6 py-2">View Poll</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(HomeQuestionCard);
