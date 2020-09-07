import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
/** @jsx jsx */
import { jsx } from '@emotion/core';
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
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const App = () => {
    const ref = useRef();
    // const modalState = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (!ref.current.contains(event.target)) {
                dispatch({ type: 'FALSE_MODAL' });
            }
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, [dispatch]);

    return (
        <React.Fragment>
            <div>
                <div css={homeBody}>
                    <div css={brands}>
                        <Link css={icon} to="/contact">
                            <FontAwesomeIcon
                                className="fa-lg"
                                icon={faEnvelope}
                            />
                        </Link>
                        <a
                            css={icon}
                            href="https://github.com/AndresPonciano"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="fa-lg"
                                icon={faGithub}
                            />
                        </a>
                        <a
                            css={icon}
                            href="https://linkedin.com/in/andresponciano"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="fa-lg"
                                icon={faLinkedin}
                            />
                        </a>
                    </div>
                    <div css={brand}>
                        <h1 css={brandName}>poncitions</h1>
                        <img
                            css={brandLogo}
                            src={require('../images/moonlogo.jpg')}
                            alt="moon brand"
                        />
                    </div>
                    <div ref={ref} css={menu}>
                        <MenuModal />
                        <div
                            css={menuIcon}
                            onClick={() => dispatch({ type: 'SWITCH_MODAL' })}
                        >
                            <FontAwesomeIcon className="fa-lg" icon={faBars} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;
