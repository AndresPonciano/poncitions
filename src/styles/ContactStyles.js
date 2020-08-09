/**@jsx jsx */
import { css } from '@emotion/core';

export const formContainer = css`
    display: flex;
    flex-direction: column;
    // background-color: lightblue;
    width: 80%;
`;

export const formInput = css`
    border-radius: 5px;
    border-style: none;
    height: 40px;
    // margin-bottom: 2em;
    padding-left: 15px;
    // background-color: #c4c4c4;
    background-color: white;
    color: #080718;
`;

export const formMessage = css`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&display=swap');
    font-family: 'Merriweather', sans-serif;

    border-radius: 5px;
    height: 200px;
    // background-color: #c4c4c4;
    background-color: white;
    padding: 1em 1em 1em 1em;
    // margin-bottom: 2em;
`;

export const sendButton = css`
    width: 15%;
    height: 40px;
    background-color: #7d97bd;
    color: white;
    border-radius: 5px;
    border-style: none;

    &:hover {
        border: 1px solid #7d97bd;
        background-color: #080718;
    }
`;

export const errors = css`
    margin-top: 0.5em;
    font-size: 12px;
    color: #ff6961;
`;

export const noError = css`
    margin-bottom: 2em;
`;
