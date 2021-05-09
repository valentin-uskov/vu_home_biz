import * as api from '../api';
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

export const showEditProjectModal = (projectId) => ({
  type: SHOW_MODAL,
  payload: { modalType: PROJECT_FORM_MODAL, projectId: projectId }
});

export const hideModal = () => ({ type: HIDE_MODAL });

export const loadProjects = (name = '') => async (dispatch, getState) => {

  dispatch({ type: LOAD_PROJECTS + REQUEST });

  try {
    const { data: { projects } } = await api.loadProjects(name);
    dispatch({ type: LOAD_PROJECTS + SUCCESS, payload: { projects } });
  } catch (error) {
    dispatch({ type: LOAD_PROJECTS + FAILURE, error });
  }
};

export const deleteProject = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_PROJECT + REQUEST });

  try {
    await api.deleteProjects(id);
    dispatch({ type: DELETE_PROJECT + SUCCESS, payload: { id: id } });
  } catch (error) {
    dispatch({ type: DELETE_PROJECT + FAILURE, error });
  }
};

export const addProject = (addingData) => async (dispatch, getState) => {

  dispatch({ type: ADD_PROJECT + REQUEST });

  const generatedId = (() => { /* FIXME - move me */
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  })();

  addingData.id = generatedId; /* FIXME */

  const state = getState();
  try {
    const { id, name, budget, currencyId } = addingData;
    const currency = currencySelector(state, { id: currencyId });

    await api.addProject(addingData);
    dispatch({ type: ADD_PROJECT + SUCCESS, payload: { id, name, budget, currency } });
  } catch (error) {
    dispatch({ type: ADD_PROJECT + FAILURE, error });
  }
};


export const updateProject = (updatingData) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_PROJECT + REQUEST });

  try {
    await api.addProject(updatingData);

    const { id, name, budget, currencyId } = updatingData;
    const state = getState();
    const currency = currencySelector(state, { id: currencyId });

    dispatch({ type: UPDATE_PROJECT + SUCCESS, payload: { id, name, budget, currency } });
  } catch (error) {
    dispatch({ type: UPDATE_PROJECT + FAILURE, error });
  }
};

export const loadCurrencies = () => async (dispatch, getState) => {
  dispatch({ type: LOAD_CURRENCIES + REQUEST });
  try {
    const { data: { currencies } } = await api.loadCurrencies();
    dispatch({ type: LOAD_CURRENCIES + SUCCESS, payload: { currencies } });
  } catch (error) {
    dispatch({ type: LOAD_CURRENCIES + FAILURE, error });
  }
};

