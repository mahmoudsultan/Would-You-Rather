import { connect } from 'react-redux';

const mapStateToProps = ({ questions, users, authUser }, { id }) => {
  const question = questions[id];
  const choosedAnswer = users[authUser].answers[id];
  const author = users[question.author];

  return {
    question,
    author,
    choosedAnswer,
  }
}

const Question = ({ question, author, choosedAnswer }) => {
  return <h1>Hello</h1>;
}

export default connect(mapStateToProps)(Question);
