import React, { useRef, useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    infoBody,
    infoContent,
    brandLogo,
    backIcon,
    canvasStyle,
} from '../styles/TemplateStyle';

import { brand, brandName } from '../styles/frontStyles';
import useStars from '../modules/hooks/useStars';
import { RoughEase, Linear, TweenLite, TimelineMax } from 'gsap/all';

const Projects = () => {
    const bannerRef = useRef(null);
    const starRef = useRef(null);

    useStars();

    return (
        <div id="banner" css={infoBody} ref={bannerRef}>
            <div className="star" css={canvasStyle} ref={starRef}></div>
            <div css={backIcon}>
                <FontAwesomeIcon
                    className="fa-lg"
                    icon={faArrowLeft}
                ></FontAwesomeIcon>
            </div>
            <div css={brand}>
                <h1 css={brandName}>projects</h1>
                <img
                    css={brandLogo}
                    src={require('../images/darkmoonlogo.png')}
                    alt="moon brand"
                />
            </div>
            <div>projects go here</div>
        </div>
    );
};

export default Projects;
