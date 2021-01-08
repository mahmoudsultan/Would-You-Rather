import { connect } from 'react-redux';

import DetailedQuestionCard from '../DetailedQuestionCard/DetailedQuestionCard';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const mapStateToProps = ({ questions }, { match }) => {
  const id = match.params.id;

  return {
    question: !!questions[id],
  }
}

const QuestionPage = (props) => {
  if (props.question) {
    return (
      <DetailedQuestionCard 
        { ...props }
      />
    );
  } else {
    return <NotFoundPage />;
  }
};

export default connect(mapStateToProps)(QuestionPage);
