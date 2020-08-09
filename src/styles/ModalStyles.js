/**@jsx jsx */
import { css } from '@emotion/core';

// change right percentage with media queries goddamn
export const hiddenModal = css`
    right: -30%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 1em 1em 1.5em;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        color: #080718;
        background-color: white;
    }
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
