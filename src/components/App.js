import './App.css';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getInitialData } from '../actions/shared';

import Login from './Login/Login';
import Home from './Home/Home';
 
const mapStateToProps = ({ authUser, users }) => ({
  authUser,
  users,
});

function App({ dispatch, authUser, users }) {
  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  if (!Object.keys(users).length) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      { !authUser && <Login /> }
      { authUser && <Home /> }
    </div>
  );
}

export default connect(mapStateToProps)(App);
