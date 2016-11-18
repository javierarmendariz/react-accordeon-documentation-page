import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Scaffold from '../scaffold/Scaffold';

const App = ({ store }) => (
  <Provider store={store}>
    <Scaffold />
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
