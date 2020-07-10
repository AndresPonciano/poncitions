import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    return (
        <>
            <div className="home-body">
                <div className="brands">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="brand">poncitions moon</div>
                <div className="menu">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {/* <img src={require('../images/finaltree.jpg')} /> */}
            </div>
        </>
    );
};

export default App;
