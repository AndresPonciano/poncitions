import { SWITCH_MODAL, FALSE_MODAL } from '../actions/types';

const INITIAL_STATE = {
    showModal: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWITCH_MODAL:
            return { ...state, showModal: !state.showModal };

        case FALSE_MODAL:
            return { ...state, showModal: false };

        default:
            return state;
    }
};
