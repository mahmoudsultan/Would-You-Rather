import { connect } from 'react-redux';
import { useState, useCallback } from 'react';

import QuestionsList from './questions/QuestionsList';

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

  const handleTabChange = useCallback((e, newTab) => {
    setTab(newTab);
  }, [setTab]);

  return (
    <div>
      
    </div>
  );
}

export default connect(mapStateToProps)(Home);
