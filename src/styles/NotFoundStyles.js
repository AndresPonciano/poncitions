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
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin-bottom: 4em;
    align-self: center;
    justify-self: center;

    h1 {
        align-self: center;
        font-size: 26px;
    }
`;

export const notImage = css`
    height: 270px;
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
