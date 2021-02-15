import {
    LOAD_PROJECTS,
    DELETE_PROJECT,
    REQUEST,
    SUCCESS,
    FAILURE,
} from '../constants';

import { arrToMap } from '../utils';

const initialState = {
    loading: false,
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
                loading: true,
            };
        case LOAD_PROJECTS + SUCCESS:
        return {
                ...state,
                entities: { ...arrToMap(payload.projects) },
                loading: false,
                loaded: true,
            };
        case LOAD_PROJECTS + FAILURE:
        return {
            ...state,
            loading: false,
            loaded: false,
            error: action.error,
        };
        case DELETE_PROJECT + REQUEST:
            return {
                ...state
            };
        case DELETE_PROJECT + SUCCESS:
            const { [payload.id]: value, ...newEntities } = state.entities; // it's OK? or fixme
            return {
                ...state,
                entities: { ...newEntities }
            };
        case DELETE_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

  export default reducer;