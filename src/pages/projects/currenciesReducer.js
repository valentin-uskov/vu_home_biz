import {
    LOAD_CURRENCIES,
    REQUEST,
    SUCCESS,
    FAILURE,
} from './constants';

import { arrToMap } from '../../redux/utils';

const initialState = {
    loaded: false,
    error: null,
    entities: {},
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_CURRENCIES + REQUEST:
            return state;
        case LOAD_CURRENCIES + SUCCESS:
            return {
                    ...state,
                    entities: { ...arrToMap(payload.currencies) },
                    loaded: true,
                };
        case LOAD_CURRENCIES + FAILURE:
            return {
                ...state,
                loaded: false,
                error: action.error,
            };
        default:
            return state;
    };
};

export default reducer;