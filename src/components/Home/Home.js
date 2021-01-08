import { connect } from 'react-redux';
import { useState } from 'react';

import './Home.css';

import HomeQuestionCard from '../HomeQuestionCard/HomeQuestionCard';

const mapStateToProps = ({ users, questions, authUser }) => {
  const answeredQuestions = Object.keys(users[authUser].answers)
                                  .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestions = Object.keys(questions)
                                    .filter((questionId) => !answeredQuestions.includes(questionId))
                                    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

const Home = ({ answeredQuestions, unansweredQuestions }) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-auto min-h-screen mt-8 mb-8">
      <div className="flex text-center justify-center flex-row">
        <div
          className={`w-64 p-2 text-xl font-medium text-gray-600 cursor-pointer tracking-wide leading-relaxed ${tab === 0 ? 'text-purple-700 font-semibold' : '' }`}
          onClick={() => setTab(0)}
        >
          Unanswered
        </div>
        <div
          className={`w-64 p-2 ml-10 text-xl font-medium text-gray-600 cursor-pointer tracking-wide leading-relaxed ${tab === 1 ? 'text-purple-700 font-semibold' : '' }`}
          onClick={() => setTab(1)}
        >
          Answered
        </div>
      </div>
      <div className="mt-2">
        <div className={`tab ${tab === 0 ? '' : 'hidden'}`}>
          <ul className="questions-list">
            { unansweredQuestions.map((questionId) => <li key={questionId}><HomeQuestionCard id={questionId} /></li>) }
          </ul>
        </div>
        <div className={`tab ${tab === 1 ? '' : 'hidden'}`}>
          <ul>
            { answeredQuestions.map((questionId) => <li key={questionId}><HomeQuestionCard id={questionId} /></li>) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
