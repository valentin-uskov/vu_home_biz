import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../history';

import projects from './projects';
import modal from './modal';
import currencies from './currencies';

const reducer = combineReducers({
  router: connectRouter(history),
  projects,
  modal,
  currencies
});

export default reducer;