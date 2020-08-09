/**@jsx jsx */
import { css } from '@emotion/core';
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
    grid-template-columns: 1fr 4fr 7fr;
    grid-template-rows: 100vh;
`;

export const canvasStyle = css`
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    visibility: hidden;
    opacity: 0;
`;

export const backIcon = css`
    margin: 2em 0 0 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin: 0 1em 1em 1.5em;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: #080718;
        background-color: white;
    }
`;

export const brandLogo = css`
    margin-left: 1em;
    margin-top: 0.8em;
    height: 20px;
`;

export const infoContent = css`
    align-self: center;
`;
