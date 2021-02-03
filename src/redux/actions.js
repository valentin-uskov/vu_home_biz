import { LOAD_PROJECTS } from './constants';

export const loadUsers = () => async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: LOAD_PROJECTS, CallAPI: '/api/users' }); /* FIXME CallAPI! */
  };