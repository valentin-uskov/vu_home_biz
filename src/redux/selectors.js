import { createSelector } from 'reselect';
import { getById } from './utils'

export const projectsLoadingSelector = (state) => state.projects.loading;
export const projectsLoadedSelector = (state) => state.projects.loaded;

export const modalTypeSelector = (state) => state.modal?.modalType; /* FIXME */
const projectsSelector = (state) => state.projects.entities;

export const projectsListSelector = createSelector(
    projectsSelector,
    Object.values
);

export const projectSelector = getById(projectsSelector);

const currenciesSelector = (state) => state.currencies.entities;

export const currencySelector = getById(currenciesSelector);

export const currenciesListSelector = createSelector(
    currenciesSelector,
    Object.values
);
