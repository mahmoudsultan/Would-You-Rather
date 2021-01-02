import './App.css';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core'

import { getInitialData } from '../actions/shared';

import Login from './Login';
 
const mapPropsToState = ({ authUser, users }) => ({
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
    <Container>
      { !authUser && <Login /> }
      { authUser && <h1>Hello</h1> }
    </Container>
  );
}

export default connect(mapPropsToState)(App);
