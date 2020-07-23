/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import img from '../images/finaltreedark2.png';

export const infoBody = css`
    background-image: url(${img});
    background-size: 400px 300px;
    background-repeat: no-repeat;
    position: fixed;
    background-position: -11% 101%;
    background-color: #080718;
    color: white;
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 2fr 5fr;
    grid-template-rows: 100vh;
`;

export const infoTitle = css`
    background-color: lightgreen;
`;

export const brandLogo = css`
    margin-left: 1em;
    margin-top: 0.8em;
    height: 20px;
`;

export const infoContent = css`
    background-color: lightblue;
`;
