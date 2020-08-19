import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { closeButton, links, linkItem, Modal } from '../styles/ModalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuModal = () => {
    const [modalWidth, setModalWidth] = useState('');
    const modalState = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        if (modalState.showModal) {
            setModalWidth('350px');
        }

        if (!modalState.showModal) {
            setModalWidth('0px');
        }
    }, [modalState]);

    return (
        <React.Fragment>
            {/* <div css={displayedModal}> */}
            <Modal width={modalWidth}>
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
            </Modal>
            {/* </div> */}
        </React.Fragment>
    );
};

export default MenuModal;
