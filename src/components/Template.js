import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { infoBody } from '../styles/TemplateStyle';

const Template = () => {
    return (
        <div css={infoBody}>
            <div>title and logo</div>
            <div>information</div>
        </div>
    );
};

export default Template;
