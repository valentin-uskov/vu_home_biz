import { createSelector } from 'reselect';


export const projectsLoadingSelector = (state) => state.projects.loading;
export const projectsLoadedSelector = (state) => state.projects.loaded;

export const modalTypeSelector = (state) => state.modal?.modalType;

const projectsSelector = (state) => state.projects.entities;

export const projectsListSelector = createSelector(
    projectsSelector,
    Object.values
);

export const projectSelector = createSelector(
        projectsSelector,
        (_, props) => props.id,
        (entity, id) => entity[id]
);

// FIXME - move getById to utils
// export const getById = (selector, defaultValue) =>
//   createSelector(
//     selector,
//     (_, props) => props.id,
//     (entity, id) => entity[id] || defaultValue
//   );

// export const productSelector = getById(productsSelector);