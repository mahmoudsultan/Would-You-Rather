import './App.css';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getInitialData } from '../actions/shared';

import Login from './Login/Login';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
 
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

  if (!authUser) {
    return <Login />;
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default connect(mapStateToProps)(App);
