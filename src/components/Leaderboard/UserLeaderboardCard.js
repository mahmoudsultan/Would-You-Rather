const cardClassNamesBasedOnRank = (rank) => {
  let cardWidthClass = 'w-2/5 lg:w-1/3';
  if (rank === 1) {
    cardWidthClass = 'w-4/5 lg:w-3/5';
  } else if (rank === 2) {
    cardWidthClass = 'w-3/5 lg:w-2/4';
  } else if (rank === 3) {
    cardWidthClass = 'w-2/4 lg:w-2/5';
  } else if (rank === 4) {
    cardWidthClass = 'w-2/5 lg:w-1/3 mt-8';
  }

  return cardWidthClass;
}

const rankNumberClass = (rank) => {
  let baseNumberClasses = ' absolute bottom-1 right-1 -z-1000';
  let rankNumberClassName = 'hidden';
  if (rank === 1) {
    rankNumberClassName = 'text-8xl text-yellow-400 opacity-50';
  } else if (rank === 2) {
    rankNumberClassName = 'text-7xl text-gray-600 opacity-50';
  } else if (rank === 3) {
    rankNumberClassName = 'text-6xl text-yellow-800 opacity-50';
  }

  return rankNumberClassName + baseNumberClasses;
}

const UserLeaderboardCard = ({ user, rank }) => {
  return (
    <div className={`${cardClassNamesBasedOnRank(rank)} p-5 bg-white rounded-xl shadow-md overflow-hidden mx-auto relative`}>
      <div className="flex flex-col md:flex-row">
        <div className="flex-initial w-full md:w-36 mr-5 justify-center">
          <img className="h-24 rounded-full mx-auto bg-gray-200" src={user.avatarURL} alt="Author Profile Picture" />
        </div>
        <div className="flex-auto">
          <h3 className="font-semibold lg:text-4xl text-2xl text-gray-800">{ user.name }</h3>
          <p className="lg:text-lg text-md text-gray-600 mt-4 capitalize">Number of questions: { user.numOfQuestions }</p>
          <p className="lg:text-lg text-md text-gray-600 mt-2 capitalize">Number of Answers: { user.numOfAnswers }</p>
        </div>
      </div>
      <div className={`${rankNumberClass(rank)}`}>
        # { rank }
      </div>
    </div>
  );
};

export default UserLeaderboardCard;
