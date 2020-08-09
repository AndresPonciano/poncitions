import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    infoBody,
    infoContent,
    brandLogo,
    backIcon,
} from '../styles/TemplateStyle';

import { brand, brandName } from '../styles/frontStyles';

const Template = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Template;
