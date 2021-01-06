import { connect } from 'react-redux';
import { useState } from 'react';

import './Home.css';

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
    <div className="home-container">
      <div className="tabs-header">
        <div
          className={`tab-header ${tab === 0 ? 'active' : 'inactive' }`}
          onClick={() => setTab(0)}
        >
          Unanswered
        </div>
        <div
          className={`tab-header ${tab === 1 ? 'active' : 'inactive' }`}
          onClick={() => setTab(1)}
        >
          Answered
        </div>
      </div>
      <div className="tabs-content">
        <div className={`tab ${tab === 0 ? '' : 'hidden'}`}>
          <ul className="questions-list">
            { unansweredQuestions.map((questionId) => <li key={questionId}>{ questionId }</li>) }
          </ul>
        </div>
        <div className={`tab ${tab === 1 ? '' : 'hidden'}`}>
          <ul>
            { answeredQuestions.map((questionId) => <li key={questionId}>{ questionId }</li>) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
