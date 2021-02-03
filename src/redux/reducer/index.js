import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import history from '../../history';

import projects from './projects';

const reducer = combineReducers({
  projects,
});

export default reducer;