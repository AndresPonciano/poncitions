import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    return (
        <>
            <div className="home-body">
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
                    />
                </div>
            </div>
        </>
    );
};

export default App;
