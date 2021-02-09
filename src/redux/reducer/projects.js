import {
    LOAD_PROJECTS,
    REQUEST,
    SUCCESS,
    FAILURE,
} from '../constants';

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
                entities: payload.projects,
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
        default:
            return state;
    }
};

  export default reducer;