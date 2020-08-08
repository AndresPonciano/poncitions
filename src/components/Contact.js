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
import {
    formContainer,
    formInput,
    formMessage,
    sendButton,
} from '../styles/ContactStyles';

const Skills = () => {
    let history = useHistory();

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
                <form css={formContainer}>
                    {/* <label>name</label> */}
                    <input css={formInput} type="text" placeholder="name" />
                    {/* <label>email</label> */}
                    <input css={formInput} type="email" placeholder="email" />
                    <textarea css={formMessage}></textarea>
                    <button css={sendButton}>send</button>
                </form>
            </div>
        </div>
    );
};

export default Skills;
