import { LOAD_PROJECTS, REQUEST, SUCCESS, FAILURE } from './constants';

import { projectsLoadingSelector, projectsLoadedSelector } from './selectors';

import fetch from 'isomorphic-fetch';

export const loadProjects = () => async (dispatch, getState) => {

  // ХЗ зачем эта логика и тут и при отображении лоадера при загрузке проектов
  // (Дублирование логики - взял из курсов - там тоже так) ПОЧЕМУ? ЗАЧЕМ? !!!!
  const state = getState();
  const loading = projectsLoadingSelector(state);
  const loaded = projectsLoadedSelector(state);

  if (loading || loaded) return;

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
