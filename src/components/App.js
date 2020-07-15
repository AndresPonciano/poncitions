import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mystyle } from '../styles/frontStyles';
const App = () => {
    const [sidebar, setSidebar] = useState(false);

    // const mystyle = css`
    //     color: hotpink;
    //     backgroundimage: url('../images/finaltree.jpg');
    // `;
    console.log(sidebar);
    return (
        <div className="home-body" css={mystyle}>
            <div className="brands">
                <FontAwesomeIcon className="icon fa-lg" icon={faEnvelope} />
                <FontAwesomeIcon className="icon fa-lg" icon={faGithub} />
                <FontAwesomeIcon className="icon fa-lg" icon={faLinkedin} />
            </div>
            <div className="brand">
                <h1 className="brand-name">poncitions</h1>
                <img
                    className="brand-logo"
                    src={require('../images/moonlogo.jpg')}
                />
            </div>
            <div className="menu">
                <FontAwesomeIcon
                    className="menu-icon fa-lg"
                    icon={faBars}
                    onClick={() => setSidebar(true)}
                />
            </div>
        </div>
    );
};

export default App;
