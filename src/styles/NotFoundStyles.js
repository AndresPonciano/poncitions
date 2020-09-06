/**@jsx jsx */
import { css } from '@emotion/core';

export const notBody = css`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: 50px auto;
`;

export const notImageContainer = css`
    width: 90%;
    margin-bottom: 4em;
    // background-color: lightblue;
    align-self: center;
    justify-self: center;
`;

export const notImage = css`
    height: 300px;
`;

export const notIcon = css`
    // background-color: lightgreen;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 1em 1em 1.5em;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #080718;
    }
`;
