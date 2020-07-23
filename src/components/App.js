import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    homeBody,
    brands,
    icon,
    brand,
    brandName,
    brandLogo,
    menu,
    menuIcon,
} from '../styles/frontStyles';
import MenuModal from './MenuModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const App = () => {
    const modalState = useSelector((state) => state.modal);

    const dispatch = useDispatch();

    return (
        <div css={homeBody}>
            <div css={brands}>
                <div css={icon}>
                    <FontAwesomeIcon className="fa-lg" icon={faEnvelope} />
                </div>
                <div css={icon}>
                    <FontAwesomeIcon className="fa-lg" icon={faGithub} />
                </div>
                <div css={icon}>
                    <FontAwesomeIcon className="fa-lg" icon={faLinkedin} />
                </div>
            </div>
            <div css={brand}>
                <h1 css={brandName}>poncitions</h1>
                <img
                    css={brandLogo}
                    src={require('../images/moonlogo.jpg')}
                    alt="moon brand"
                />
            </div>
            <div css={menu}>
                <MenuModal />
                <div
                    css={menuIcon}
                    onClick={() => dispatch({ type: 'SWITCH_MODAL' })}
                >
                    <FontAwesomeIcon className="fa-lg" icon={faBars} />
                </div>
            </div>
        </div>
    );
};

export default App;
