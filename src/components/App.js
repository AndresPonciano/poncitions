import React, { useState } from 'react';
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
const App = () => {
    const [sidebar, setSidebar] = useState(false);

    console.log(sidebar);
    return (
        <div css={homeBody}>
            <div css={brands}>
                <FontAwesomeIcon
                    className="fa-lg"
                    css={icon}
                    icon={faEnvelope}
                />
                <FontAwesomeIcon className="fa-lg" css={icon} icon={faGithub} />
                <FontAwesomeIcon
                    className="fa-lg"
                    css={icon}
                    icon={faLinkedin}
                />
            </div>
            <div css={brand}>
                <h1 css={brandName}>poncitions</h1>
                <img css={brandLogo} src={require('../images/moonlogo.jpg')} />
            </div>
            <div css={menu}>
                <FontAwesomeIcon
                    className="fa-lg"
                    css={menuIcon}
                    icon={faBars}
                    onClick={() => setSidebar(true)}
                />
            </div>
        </div>
    );
};

export default App;
