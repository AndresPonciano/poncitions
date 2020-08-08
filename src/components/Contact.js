import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    infoBody,
    infoContent,
    brandLogo,
    backIcon,
} from '../styles/TemplateStyle';
import { brand, brandName } from '../styles/frontStyles';
import EmailForm from './EmailForm';
import { useSelector } from 'react-redux';

const Contact = () => {
    let history = useHistory();
    const state = useSelector((state) => state.form.emailForm);

    const handleSubmit = () => {
        console.log('im trying here');
    };

    console.log(state);

    return (
        <div css={infoBody}>
            <div css={backIcon} onClick={() => history.goBack()}>
                <FontAwesomeIcon
                    className="fa-lg"
                    icon={faArrowLeft}
                ></FontAwesomeIcon>
            </div>
            <div css={brand}>
                <h1 css={brandName}>contact</h1>
                <img
                    css={brandLogo}
                    src={require('../images/darkmoonlogo.png')}
                    alt="moon brand"
                />
            </div>
            <div css={infoContent}>
                <EmailForm handleSubmit={handleSubmit()} />
            </div>
        </div>
    );
};

export default Contact;
