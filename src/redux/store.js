
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import logger from './middleware/logger';

import reducer from './reducer';


const enhancer = applyMiddleware(
    // routerMiddleware(history),
    // api,

    thunk,
    logger
  );

export default createStore(reducer, composeWithDevTools(enhancer));