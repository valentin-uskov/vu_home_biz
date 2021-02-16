import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import history from '../../history';

import projects from './projects';
import modal from './modal';

const reducer = combineReducers({
  projects,
  modal
});

export default reducer;