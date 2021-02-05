import { LOAD_PROJECTS } from './constants';

import fetch from 'isomorphic-fetch';

export const loadProjects = () => async (dispatch, getState) => {

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
    .then(res => res.json())
    .then(res => res.data);

    dispatch({ type: LOAD_PROJECTS, payload: { projects: response.projects } });
  };