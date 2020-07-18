/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

export const hiddenModal = css`
    display: none;
`;

const slideIn = keyframes`
    0%{
        width: 0px;
    }
    20%, 80% {
        width: 200px;
    }
    80%, 100% {
        width: 350px;
    }
`;

export const displayedModal = css`
    display: block;
    height: 100vh;
    width: 350px;
    position: absolute;
    background-color: #080718;
    color: white;
    animation: ${slideIn} 1s linear;
`;

export const closeButton = css`
    margin-top: 1.5em;
    margin-left: 1.5em;
    border: none;
    color: white;
`;
