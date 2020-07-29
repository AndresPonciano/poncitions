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
    backIcon,
} from '../styles/TemplateStyle';

import { brand, brandName } from '../styles/frontStyles';

const Template = () => {
    return (
        <div css={infoBody}>
            <div css={backIcon}>
                <FontAwesomeIcon
                    className="fa-lg"
                    icon={faArrowLeft}
                ></FontAwesomeIcon>
            </div>
            <div css={brand}>
                <h1 css={brandName}>Template</h1>
                <img
                    css={brandLogo}
                    src={require('../images/darkmoonlogo.png')}
                    alt="moon brand"
                />
            </div>
            <div css={infoContent}>Template</div>
        </div>
    );
};

export default Template;
