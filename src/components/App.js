import './App.css';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    <Router>
      <Navbar />

      <Switch>
        <Route path='/leaderboard'>
          <h1>Hello Leaderboard</h1>
        </Route>
        <Route path='/new'>
          <h1>Hello New</h1>
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default connect(mapStateToProps)(App);
