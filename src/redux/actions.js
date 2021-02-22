import {
  LOAD_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT,
  LOAD_CURRENCIES,
  REQUEST,
  SUCCESS,
  FAILURE,
  SHOW_MODAL,
  ADDING_MODAL,
  HIDE_MODAL,
} from './constants';

import { projectsLoadingSelector, projectsLoadedSelector, currencySelector } from './selectors';

import fetch from 'isomorphic-fetch';


export const showAddingModal = () => ({ type: SHOW_MODAL, payload: { modalType: ADDING_MODAL } });
export const hideModal = () => ({ type: HIDE_MODAL });

export const loadProjects = () => async (dispatch, getState) => {

  // ХЗ зачем эта логика и тут и при отображении лоадера при загрузке проектов
  // (Дублирование логики - взял из курсов - там тоже так) ПОЧЕМУ? ЗАЧЕМ? !!!! FIXME
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

  const generatedId = (() => { /* FIXME - move me anywhere */
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
      headers: { 'Content-Type': 'application/json' }, // FIXME > test values
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

    dispatch({ type: ADD_PROJECT + SUCCESS, payload: { ...addingData, currency: currency } });
  } catch (error) {
    // dispatch({ type: ADD_PROJECT + FAILURE, error });
    // dispatch(replace('/error'));
  }
};


export const loadCurrencies = () => async (dispatch, getState) => {

  // ХЗ зачем эта логика и тут и при отображении лоадера при загрузке проектов
  // (Дублирование логики - взял из курсов - там тоже так) ПОЧЕМУ? ЗАЧЕМ? !!!! FIXME
  const state = getState();
  const loaded = projectsLoadedSelector(state);

  if ( loaded ) return;

  dispatch({ type: LOAD_CURRENCIES + REQUEST });

  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST', /* FIXME ??? ( maybe GET ? not here only )*/
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

