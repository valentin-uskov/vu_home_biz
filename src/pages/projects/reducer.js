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
            const { [payload.id]: value, ...withoutDeleted } = state.entities;
            return {
                ...state,
                entities: { ...withoutDeleted }
            };
        case DELETE_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
            };

        case ADD_PROJECT + REQUEST:
            return {
                ...state
            };
        case ADD_PROJECT + SUCCESS:

            return {
                ...state,
                entities: {
                    ...state.entities,
                    [payload.id]: {
                        id: payload.id,
                        name: payload.name,
                        budget: payload.budget,
                        currency: {
                            name: payload.currency.name,
                            sign: payload.currency.sign,
                        }
                    }
                }
            };
        case ADD_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
            };

        case UPDATE_PROJECT + REQUEST:
            return {
                ...state
            };
        case UPDATE_PROJECT + SUCCESS:
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [payload.id]: {
                        id: payload.id,
                        name: payload.name,
                        budget: payload.budget,
                        currency: {
                            name: payload.currency.name,
                            sign: payload.currency.sign,
                        }
                    }
                }
            };
        case UPDATE_PROJECT + FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;