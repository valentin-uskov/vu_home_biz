import {
  LOAD_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT,
  UPDATE_PROJECT,
  LOAD_CURRENCIES,
  REQUEST,
  SUCCESS,
  FAILURE,
  SHOW_MODAL,
  PROJECT_FORM_MODAL,
  HIDE_MODAL,
} from './constants';

import { projectsLoadingSelector, projectsLoadedSelector, currencySelector } from './selectors';

import fetch from 'isomorphic-fetch';

export const showEditProjectModal = (projectId) => ({
  type: SHOW_MODAL,
  payload: { modalType: PROJECT_FORM_MODAL, projectId: projectId }
});

export const hideModal = () => ({ type: HIDE_MODAL });

export const loadProjects = (name = '') => async (dispatch, getState) => {

  dispatch({ type: LOAD_PROJECTS + REQUEST });

  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        {
          projects(name: "${name}") {
            id
            name
            budget
            currency {
                id
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


export const deleteProject = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_PROJECT + REQUEST });
  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        mutation {
          deleteProject(id: "${ id }") {
            id
          }
        }`
      }),
    });

    dispatch({ type: DELETE_PROJECT + SUCCESS, payload: { id: id } });
  } catch (error) {
    dispatch({ type: DELETE_PROJECT + FAILURE, error });
    // dispatch(replace('/error'));
  }
};

export const addProject = (addingData) => async (dispatch, getState) => {

  dispatch({ type: ADD_PROJECT + REQUEST });

  const generatedId = (() => { /* FIXME - move me */
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  })();

  addingData.id = generatedId; /* FIXME */

  const { id, name, budget, currencyId } = addingData;

  const state = getState();
  const currency = currencySelector( state, { id: currencyId });

  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        mutation {
          addProject(id: "${ id }", name: "${ name }", budget: ${ budget }, currencyId: "${ currencyId }") {
            id
            name
            budget
          }
        }`
      }),
    });

    dispatch({ type: ADD_PROJECT + SUCCESS, payload: { id, name, budget, currency } });
  } catch (error) {
    // dispatch({ type: ADD_PROJECT + FAILURE, error });
    // dispatch(replace('/error'));
  }
};


export const updateProject = (updatingData) => async (dispatch, getState) => {

  dispatch({ type: UPDATE_PROJECT + REQUEST });

  const { id, name, budget, currencyId } = updatingData;

  const state = getState();
  const currency = currencySelector( state, { id: currencyId });

  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        mutation {
          updateProject(id: "${ id }", name: "${ name }", budget: ${ budget }, currencyId: "${ currencyId }") {
            id
            name
            budget
          }
        }`
      }),
    });

    dispatch({ type: UPDATE_PROJECT + SUCCESS, payload: { id, name, budget, currency } });
  } catch (error) {
    // dispatch({ type: UPDATE_PROJECT + FAILURE, error });
    // dispatch(replace('/error'));
  }
};

export const loadCurrencies = () => async (dispatch, getState) => {

  // FIXME - logic duplicate
  const state = getState();
  const loaded = projectsLoadedSelector(state);

  if ( loaded ) return;

  dispatch({ type: LOAD_CURRENCIES + REQUEST });

  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST', /* FIXME */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        {
          currencies {
            id
            name
            sign
          }
        }`
      }),
    })
    .then(res => res.json());
    dispatch({ type: LOAD_CURRENCIES + SUCCESS, payload: { currencies: response.data.currencies } });
  } catch (error) {
    dispatch({ type: LOAD_CURRENCIES + FAILURE, error });
    // dispatch(replace('/error'));
  }
};

