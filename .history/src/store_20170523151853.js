import {createStore} from 'redux';
import {reducer} from './reducers';

export default createStore(reducer, undefined,
  compose(applyMiddleWare(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
