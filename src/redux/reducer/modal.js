import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../constants';

const initialState = {
    modalType: null,
    projectId: null
  }

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_MODAL:
            return {
                modalType: payload.modalType,
                projectId: payload.projectId || null
            }
        case HIDE_MODAL:
            return initialState
        default:
            return initialState;
    }
};

  export default reducer;