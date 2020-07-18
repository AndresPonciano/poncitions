import { SWITCH_MODAL } from '../actions/types';

const INITIAL_STATE = {
    showModal: false,
};

export default (state = INITIAL_STATE, action) => {
    console.log('check');
    switch (action.type) {
        case SWITCH_MODAL:
            return { ...state, showModal: !state.showModal };

        default:
            return state;
    }
};
