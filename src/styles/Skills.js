/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
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
`;

export const brandLogo = css`
    margin-left: 1em;
    margin-top: 0.8em;
    height: 20px;
`;

export const infoContent = css`
    align-self: center;
`;

export const bars = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const progressLabel = css`
    width: 70%;
    margin-bottom: 0.5em;
`;

export const progressBar = css`
    border-radius: 5px;
    height: 40px;
    width: 70%;
    background-color: white;
    margin-bottom: 1em;
`;

export const progress = (props) => css`
    line-height: 40px;
    border-radius: 5px;
    width: ${props.width};
    height: 40px;
    background-color: #7d97bd;
    color: white;
    text-align: center;
`;

export const ProgressContainer = styled.div`
    ${progress};
`;
