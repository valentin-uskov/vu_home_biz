import {
    LOAD_PROJECTS,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    REQUEST,
    SUCCESS,
    FAILURE,
} from './constants';

import { arrToMap } from '../../modules/arrayShortcuts';

const initialState = {
    loaded: false,
    error: null,
    entities: {},
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case LOAD_PROJECTS + REQUEST:
            return {
                ...state,
            };
        case LOAD_PROJECTS + SUCCESS:
            return {
                ...state,
                entities: { ...arrToMap(payload.projects) },
                loaded: true,
            };
        case LOAD_PROJECTS + FAILURE:
            return {
                ...state,
                loaded: false,
                error: action.error,
            };

        case DELETE_PROJECT + REQUEST:
            return {
                ...state,
                loaded: false,
            };
        case DELETE_PROJECT + SUCCESS:
            const { [payload.id]: value, ...withoutDeleted } = state.entities;
            return {
                ...state,
                entities: { ...withoutDeleted },
                loaded: true,

            };
        case DELETE_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
                loaded: false,
            };

        case ADD_PROJECT + REQUEST:
            return {
                ...state,
                loaded: false,
            };
        case ADD_PROJECT + SUCCESS:

            return {
                ...state,
                loaded: true,
                entities: {
                    ...state.entities,
                    [payload.id]: payload,
                }
            };
        case ADD_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
                loaded: false,
            };

        case UPDATE_PROJECT + REQUEST:
            return {
                ...state,
                loaded: false,
            };
        case UPDATE_PROJECT + SUCCESS:
            return {
                ...state,
                loaded: true,
                entities: {
                    ...state.entities,
                    [payload.id]: payload,
                }
            };
        case UPDATE_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
                loaded: false,
            };
        default:
            return state;
    }
};

export default reducer;