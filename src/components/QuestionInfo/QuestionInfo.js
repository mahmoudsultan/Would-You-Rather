import { connect } from 'react-redux';

const mapStateToProps = ({ questions, users }, { id }) => ({
  question: questions[id],
  author: users[questions[id].author],
})

const QuestionInfo = ({ question, author }) => {
  return (
    <div className="card">
      Hello
    </div>
  );
}

export default connect(mapStateToProps)(QuestionInfo);
