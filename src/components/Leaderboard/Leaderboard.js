import { connect } from 'react-redux';
import UserLeaderboardCard from './UserLeaderboardCard';

const mapStateToProps = ({ users }) => {
  const usersOrderBySum = Object.values(users)
                                .map((user) => ({ 
                                  ...user,
                                  numOfQuestions: user.questions.length,
                                  numOfAnswers: Object.keys(user.answers).length,
                                }))
                                .sort((a, b) => (b.numOfAnswers + b.numOfQuestions) - (a.numOfAnswers + a.numOfQuestions));
  return {
    users: usersOrderBySum,
  };
};


const Leaderboard = ({ users }) => {
  return (
    <div className="w-auto min-h-screen mt-8 mb-8">
      <h1 className="text-center text-3xl sm:text-5xl font-light text-purple-600">👑 Leaderboard 👑</h1>
      <div className="mt-5">
        <ul>
          { users.map((user, index) => <li key={user.id}>
              <UserLeaderboardCard user={user} rank={index + 1} />
          </li>) }
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Leaderboard);
