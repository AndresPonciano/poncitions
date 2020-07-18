/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

export const hiddenModal = css`
    display: none;
`;

const slideIn = keyframes`
    0% {
        width: 0px;
    }
    100% {
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
    animation: ${slideIn} 1s ease 0s;
`;

export const closeButton = css`
    margin-top: 1.5em;
    margin-left: 1.5em;
    border: none;
    color: white;
`;

export const links = css`
    display: flex;
    flex-direction: column;
    font-size: 21px;
    margin-top: 0.8em;
    // padding: 1.5em 2.5em 0 0;
`;

export const linkItem = css`
    height: 60px;
    line-height: 60px;
    color: white;
    text-decoration: none;
    text-align: right;
    padding-right: 2em;
    // border-top: 0.5px solid white;
    &:hover {
        border-top: 0.5px solid white;
        border-bottom: 0.5px solid white;
        background-color: #4c566a;
    }
`;
