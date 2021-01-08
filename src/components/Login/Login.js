import { useCallback, useRef } from 'react';
import { connect } from 'react-redux';

import './Login.css';

import { setAuthUser } from '../../actions/authUser';

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthUser: (authUser) => dispatch(setAuthUser(authUser)),
})

const Login = ({ users, setAuthUser }) => {
  const selectRef = useRef(null);

  const handleLogin = useCallback(() => {
    const selectedUserId = selectRef.current.value;

    setAuthUser(selectedUserId);
  }, [selectRef])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-1/2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Login</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Select Your User</p>
          <select className="mt-5 p-2 text-lg w-full bg-gray-200 text-black font-semibold" name="users" ref={selectRef}>
            { Object.keys(users).map((userId) => <option className="p-0 m-0" key={userId} value={userId}>{users[userId].name}</option>) }
          </select>
        </div>
        <div className="mt-2 flex mb-2 mr-2 justify-end">
          <button 
            className="w-32 uppercase text-md text-white rounded-md bg-purple-700 p-5 font-bold"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
