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
import NewQuestion from './NewQuestion/NewQuestion';
import DetailedQuestionCard from './DetailedQuestionCard/DetailedQuestionCard';
import Leaderboard from './Leaderboard/Leaderboard';
 
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
    <Router>
      <Navbar />

      { !authUser && <Login /> }
      { authUser && <Switch>
        <Route path='/questions/:id' component={DetailedQuestionCard} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/new'>
          <NewQuestion />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch> }
    </Router>
  );
}

export default connect(mapStateToProps)(App);
