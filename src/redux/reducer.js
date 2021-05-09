import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import projects from '../pages/projects/reducer';
import currencies from '../pages/projects/currenciesReducer';

const reducer = combineReducers({
  router: connectRouter(history),
  projects,
  currencies
});

export default reducer;