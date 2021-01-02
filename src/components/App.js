import './App.css';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getInitialData } from '../actions/shared';

function App({ dispatch }) {
  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default connect()(App);
