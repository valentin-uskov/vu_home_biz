import { LOAD_PROJECTS, REQUEST, SUCCESS, FAILURE } from './constants';

import fetch from 'isomorphic-fetch';

export const loadProjects = () => async (dispatch, getState) => {

  // const state = getState();
  // const loading = reviewsLoadingSelector(state, { restaurantId });
  // const loaded = reviewsLoadedSelector(state, { restaurantId });

  // if (loading || loaded) return;

  dispatch({ type: LOAD_PROJECTS + REQUEST });

  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        {
          projects(name: "") {
            id
            name
            budget
            currency {
                name
                sign
            }
          }
        }`
      }),
    })
    .then(res => res.json());

    dispatch({ type: LOAD_PROJECTS + SUCCESS, payload: { projects: response.data.projects } });
  } catch (error) {
    dispatch({ type: LOAD_PROJECTS + FAILURE, error });
    // dispatch(replace('/error'));
  }


  };
