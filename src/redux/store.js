
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import logger from './middleware/logger';

import reducer from './reducer';

import history from '../history';

const enhancer = applyMiddleware(
    routerMiddleware(history),
    // api,
    // generateId,
    thunk,
    logger
  );

export default createStore(reducer, composeWithDevTools(enhancer));