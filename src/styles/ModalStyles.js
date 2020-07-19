/**@jsx jsx */
import { jsx, css } from '@emotion/core';

export const hiddenModal = css`
    right: -25%;
    height: 100vh;
    width: 350px;
    position: absolute;
    background-color: #080718;
    color: white;
    transition-timing-function: ease;
    transition: right 0.8s, opacity 0.4s;
`;

export const displayedModal = css`
    right: 0;
    height: 100vh;
    width: 350px;
    position: absolute;
    background-color: #080718;
    color: white;
    transition-timing-function: ease;
    transition: right 0.8s, opacity 0.4s;
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
`;

export const linkItem = css`
    height: 60px;
    line-height: 60px;
    color: white;
    text-decoration: none;
    text-align: right;
    padding-right: 2em;
    &:hover {
        background-color: #4c566a;
    }
`;
