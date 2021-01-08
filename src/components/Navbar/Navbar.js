import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { unsetAuthUser } from '../../actions/authUser';

const mapStateToProps = ({ authUser, users }) => ({
  user: authUser ? users[authUser] : null,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(unsetAuthUser()),
});

const Navbar = ({ user, logout }) => {
  return (
    <nav className="p-5 m-0 bg-purple-600 text-white">
      <div className="md:max-w-screen-md items-center lg:max-w-screen-lg flex flex-row justify-center mx-auto">
        <div className="flex-none">
          <Link to="/">Home</Link>
          <Link to="/new" className="ml-5">New Question</Link>
          <Link to="/leaderboard" className="ml-5">Leaderboard</Link>
        </div>
        <div className="flex-grow"></div>
        { user && <div className="flex-none flex flex-row">
            <img className="h-8 rounded-full mr-2 bg-gray-200" src={user.avatarURL} alt="Author Profile" />
            <div className="flex h-8 items-center">
              <span className="mr-8">{ user.name }</span>
              <button onClick={logout} className="text-red-100">Logout</button>
            </div>
          </div> }
      </div>
    </nav>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
