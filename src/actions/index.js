import { SWITCH_MODAL, FALSE_MODAL } from './types';

export const switchModal = () => {
    return {
        type: SWITCH_MODAL,
    };
};

export const falseModal = () => {
    return {
        type: FALSE_MODAL,
    };
};
