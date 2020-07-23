import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    displayedModal,
    hiddenModal,
    closeButton,
    links,
    linkItem,
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
            <div
                css={closeButton}
                onClick={() => dispatch({ type: 'SWITCH_MODAL' })}
            >
                <FontAwesomeIcon className="fa-lg" icon={faTimes} />
            </div>
            <div css={links}>
                <Link css={linkItem} to="/template">
                    projects
                </Link>
                <Link css={linkItem} to="/template">
                    skills
                </Link>
                <Link css={linkItem} to="/template">
                    about
                </Link>
                <Link css={linkItem} to="/template">
                    contact
                </Link>
            </div>
        </div>
    );
};

export default MenuModal;
