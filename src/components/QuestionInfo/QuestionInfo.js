const QuestionInfo = ({ question, author }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-initial w-full md:w-36 mr-5 justify-center">
        <span className="block font-bold text-center mb-2 text-sm text-gray-400 uppercase">Author</span>
        <img className="h-24 rounded-full mx-auto bg-gray-200" src={author.avatarURL} alt="Author Profile" />
        <h2 className="font-semibold text-lg text-center mt-2 text-gray-600">{author.name}</h2>
      </div>
      <div className="flex-auto">
        <p className="font-semibold text-md text-purple-600 mt-5 uppercase">Would you rather</p>
        <p className="font-medium text-xl sm:text-2xl subpixel-antialiased text-gray-600 mt-5 capitalize">{ question.optionOne.text } or { question.optionTwo.text }</p>
      </div>
    </div>
  );
}

export default QuestionInfo;
