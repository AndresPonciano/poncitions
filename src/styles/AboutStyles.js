/**@jsx jsx */
import { css } from '@emotion/core';

export const descriptionContainer = css`
    display: flex;
    // background-color: red;
    width: 80%;
    justify-content: center;

    p {
        line-height: 1.6;
    }

    @media (max-width: 580px) {
        height: 400px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const myPicture = css`
    float: left;
    height: 180px;
    width: 180px;
    border-radius: 50%;
`;
