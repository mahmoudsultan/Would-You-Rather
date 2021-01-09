import { useCallback, useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleNewQuestion } from "../../actions/questions";

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  addQuestion: (optionOneText, optionTwoText) => {
    dispatch(handleNewQuestion({ optionOneText, optionTwoText }));
  },
});

const NewQuestion = ({ addQuestion }) => {
  const [toHome, setToHome] = useState(false);
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleOptionOneChange = useCallback((e) => {
    setOptionOne(e.target.value);
  }, [setOptionOne]);

  const handleOptionTwoChange = useCallback((e) => {
    setOptionTwo(e.target.value);
  }, [setOptionTwo]);

  const handleNewQuestion = useCallback(() => {
    addQuestion(optionOne, optionTwo);
    setToHome(true);
  }, [optionOne, optionTwo, addQuestion]);

  if (toHome) {
    return (<Redirect to="/" />);
  }

  const disabled = !optionTwo || !optionOne;

  return (
    <div className="w-11/12 mt-8 sm:mt-0 sm:w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-xl md:mx-auto">
      <h1 className="block w-full mb-4 text-center text-grey-darkest mb-6 text-purple-600 text-3xl capitalize">Would you rather?</h1>
      <form className="mb-4 md:flex md:flex-wrap md:justify-between">
        <div className="flex flex-col mb-4 md:w-1/2">
          <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Option One:</label>
          <input onChange={handleOptionOneChange} value={optionOne} className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="Option One" placeholder="Option One Text" />
        </div>
        <div className="flex flex-col mb-4 md:w-1/2">
          <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest">Option Two:</label>
          <input onChange={handleOptionTwoChange} value={optionTwo} className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="Option Two" placeholder="Option Two Text" />
        </div>
      </form>
      <div className="flex justify-end">
        <button
          disabled={disabled}
          className={`font-semibold text-lg mr-0 mt-5 sm:mr-2 rounded-md px-6 py-2 ${disabled ? 'bg-gray-200 text-gray-300' : 'bg-purple-600 text-white'}`}
          type="submit"
          onClick={handleNewQuestion}
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
