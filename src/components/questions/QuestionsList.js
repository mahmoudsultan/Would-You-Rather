import HomeQuestionCard from './HomeQuestionCard';

const QuestionsList = ({ questions }) => {
  return (
    <ul>
      { questions.map((question) => (<li id={question}>
           <HomeQuestionCard id={question} />
          </li>))
      }
    </ul>
  )
};

export default QuestionsList;
