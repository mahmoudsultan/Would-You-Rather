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
import Leaderboard from './Leaderboard/Leaderboard';
import QuestionPage from './QuestionPage/QuestionPage';
import LoadingBar from './LoadingBar/LoadingBar';
 
const mapStateToProps = ({ authUser, users }) => ({
  authUser,
  users,
});

function App({ dispatch, authUser, users }) {
  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  if (!Object.keys(users).length) {
    return <LoadingBar />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />

      { !authUser && <Login /> }
      { authUser && <Switch>
        <Route path='/questions/:id' component={QuestionPage} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/add'>
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
