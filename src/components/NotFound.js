import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    notImage,
    notIcon,
    notBody,
    notImageContainer,
} from '../styles/NotFoundStyles';

const NotFound = () => {
    let history = useHistory();

    return (
        <React.Fragment>
            <div css={notBody}>
                <div css={notIcon} onClick={() => history.goBack()}>
                    <FontAwesomeIcon
                        className="fa-lg"
                        icon={faArrowLeft}
                    ></FontAwesomeIcon>
                </div>
                <div css={notImageContainer}>
                    <img
                        css={notImage}
                        src={require('../images/nothing_yet.png')}
                        alt="mountain when nothing is found"
                    />
                    <h1>Nothing to see here...yet</h1>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
