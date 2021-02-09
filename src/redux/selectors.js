import { createSelector } from 'reselect';

export const projectsLoadingSelector = (state) => state.projects.loading;
export const projectsLoadedSelector = (state) => state.projects.loaded;
const projectsSelector = (state) => state.projects.entities;

export const projectsListSelector = createSelector(
    projectsSelector,
    Object.values
);