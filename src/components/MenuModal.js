import React from 'react';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { displayedModal, hiddenModal } from '../styles/ModalStyles';

const MenuModal = () => {
    const modalState = useSelector((state) => state.modal);

    const modalClass = modalState.showModal ? displayedModal : hiddenModal;
    return (
        <div css={modalClass}>
            pee<p>poo</p>
        </div>
    );
};

export default MenuModal;
