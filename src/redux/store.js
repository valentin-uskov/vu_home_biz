
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';

import reducer from './reducer';


const enhancer = applyMiddleware(
    // thunk,
    // routerMiddleware(history),
    // api,
    logger
  );

export default createStore(reducer,composeWithDevTools(enhancer));