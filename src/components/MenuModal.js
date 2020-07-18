import React from 'react';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    displayedModal,
    hiddenModal,
    closeButton,
} from '../styles/ModalStyles';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuModal = () => {
    const modalState = useSelector((state) => state.modal);
    const modalClass = modalState.showModal ? displayedModal : hiddenModal;
    const dispatch = useDispatch();

    return (
        <div css={modalClass}>
            <FontAwesomeIcon
                className="fa-lg"
                icon={faTimes}
                css={closeButton}
                onClick={() => dispatch({ type: 'SWITCH_MODAL' })}
            />
            <p>poo</p>
        </div>
    );
};

export default MenuModal;
