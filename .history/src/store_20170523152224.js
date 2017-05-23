import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import { createLogger } from 'redux-logger';

const middlewares = [
  createLogger()
];

export default createStore(reducer, undefined,
  compose(applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
