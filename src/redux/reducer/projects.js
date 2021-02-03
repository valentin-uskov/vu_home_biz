import {
    LOAD_PROJECTS,
    // REQUEST,
    // SUCCESS,
    // FAILURE,
  } from '../constants';

const reducer = (state = {}, action) => {
    const { type, payload, json } = action;

    switch (type) {
        case LOAD_PROJECTS:
            return {
                ...state,
                // loading: true,
                // error: null,
        };
        // case LOAD_PROJECTS + REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null,
        //     };
        // case LOAD_PROJECTS + SUCCESS:
        // return {
        //         ...state,
        //         entities: {},
        //         loading: false
        //     };
        // case LOAD_PROJECTS + FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: json,
        //     };
        default:
            return state;
    }
};

  export default reducer;