import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import reducers from './reducers';

const configureStore = () => {
  const middlewares = [thunk, promiseMiddleware(), createLogger()];
  return createStore(reducers, applyMiddleware(...middlewares));
};

export default configureStore;
