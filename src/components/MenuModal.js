import React, { useRef } from 'react';
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
                <Link css={linkItem} to="/projects">
                    projects
                </Link>
                <Link css={linkItem} to="/skills">
                    skills
                </Link>
                <Link css={linkItem} to="/illustrations">
                    illustrations
                </Link>
                <Link css={linkItem} to="/about">
                    about
                </Link>
                <Link css={linkItem} to="/contact">
                    contact
                </Link>
            </div>
        </div>
    );
};

export default MenuModal;
