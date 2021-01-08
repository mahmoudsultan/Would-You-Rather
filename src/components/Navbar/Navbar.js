import { connect } from 'react-redux';

const mapStateToProps = ({ authUser, users }) => ({
  user: users[authUser],
});

const Navbar = ({ user }) => {
  return (
    <nav className="p-5 m-0 bg-purple-600 text-white">
      <div className="md:max-w-screen-md items-center lg:max-w-screen-lg flex flex-row justify-center mx-auto">
        <div className="flex-none">
          <a>Home</a>
          <a className="ml-5">New Question</a>
          <a className="ml-5">Leaderboard</a>
        </div>
        <div className="flex-grow"></div>
        <div className="flex-none flex flex-row">
          <img className="h-8 rounded-full mr-2 bg-gray-200" src={user.avatarURL} alt="Author Profile Picture" />
          <div className="flex h-8 items-center">
            <span className="mr-8">{ user.name }</span>
            <a className="text-red-100">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default connect(mapStateToProps)(Navbar);
