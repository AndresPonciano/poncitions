import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    infoBody,
    infoTitle,
    infoContent,
    brandLogo,
    bars,
    progressLabel,
    progressBar,
    progress,
    ProgressContainer,
    backIcon,
    canvasStyle,
} from '../styles/Skills';

import { brand, brandName } from '../styles/frontStyles';

const About = () => {
    return (
        <div css={infoBody}>
            <div css={backIcon}>
                <FontAwesomeIcon
                    className="fa-lg"
                    icon={faArrowLeft}
                ></FontAwesomeIcon>
            </div>
            <div css={brand}>
                <h1 css={brandName}>about</h1>
                <img
                    css={brandLogo}
                    src={require('../images/darkmoonlogo.png')}
                    alt="moon brand"
                />
            </div>
            <div css={infoContent}>
                <div css={bars}>
                    <label css={progressLabel}>React</label>
                    <div css={progressBar}>
                        <ProgressContainer width="60%">60%</ProgressContainer>
                    </div>
                    <label css={progressLabel}>Javascript</label>
                    <div css={progressBar}>
                        <ProgressContainer width="40%">40%</ProgressContainer>
                    </div>
                    <label css={progressLabel}>HTML</label>
                    <div css={progressBar}>
                        <ProgressContainer width="80%">80%</ProgressContainer>
                    </div>
                    <label css={progressLabel}>CSS (+ Bulma, Tailwind)</label>
                    <div css={progressBar}>
                        <ProgressContainer width="70%">70%</ProgressContainer>
                    </div>
                    <label css={progressLabel}>NoSQL</label>
                    <div css={progressBar}>
                        <ProgressContainer width="15%">15%</ProgressContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
