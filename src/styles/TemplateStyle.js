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
    grid-template-columns: 1fr 15fr 6fr;
    grid-template-rows: 100vh;
`;
