import { createSelector } from 'reselect';

export const getById = (selector, defaultValue) =>
    createSelector(
        selector,
        (_, props) => props.id,
        (entity, id) => entity[id] || defaultValue
    );

export const projectsLoadedSelector = (state) => state.projects.loaded;

const projectsSelector = (state) => state.projects.entities;

export const projectsListSelector = createSelector(
    projectsSelector,
    Object.values
);

const currenciesSelector = (state) => state.currencies.entities;

export const currencySelector = getById(currenciesSelector);

export const currenciesListSelector = createSelector(
    currenciesSelector,
    Object.values
);
