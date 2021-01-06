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
    <div className="login-container">
      <div className="card light center elevation-1">
        <h2 className="card-header">Select User</h2>
        <div className="card-content">
          <select name="users" ref={selectRef}>
            { Object.keys(users).map((userId) => <option key={userId} value={userId}>{users[userId].name}</option>) }
          </select>
        </div>
        <div className="card-actions">
          <div className="button primary block elevation-2" onClick={handleLogin}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);