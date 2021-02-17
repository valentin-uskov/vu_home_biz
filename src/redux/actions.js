import {
  LOAD_PROJECTS,
  DELETE_PROJECT,
  REQUEST,
  SUCCESS,
  FAILURE,
  SHOW_MODAL,
  ADDING_MODAL,
  HIDE_MODAL,
  ADD_PROJECT
} from './constants';

import { projectsLoadingSelector, projectsLoadedSelector } from './selectors';

import fetch from 'isomorphic-fetch';


export const showAddingModal = () => ({ type: SHOW_MODAL, payload: { modalType: ADDING_MODAL } });
export const hideModal = () => ({ type: HIDE_MODAL });

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
  try {
    const response = await fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // FIXME > test values
      body: JSON.stringify({ query: `
        mutation {
          addProject(name: "${ addingData.name }", budget: ${ addingData.budget }, currencyId: "${ addingData.currencyId }") {
            name
            budget
          }
        }`
      }),
    });
    console.log(addingData);
    dispatch({ type: ADD_PROJECT + SUCCESS, payload: addingData });
  } catch (error) {
    dispatch({ type: ADD_PROJECT + FAILURE, error });
    // dispatch(replace('/error'));
  }
};