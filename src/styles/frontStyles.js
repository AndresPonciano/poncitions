/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import img from '../images/finaltree.jpg';

export const homeBody = css`
    background-image: url(${img});
    background-size: 400px 300px;
    background-repeat: no-repeat;
    position: fixed;
    background-position: center 101%;
    color: #080718;
    display: grid;
    grid-template-columns: 1fr 14fr 5fr;
    grid-template-rows: 100vh;
`;

export const brands = css`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

export const icon = css`
    margin: 0 1em 1em 1.5em;
`;

export const brand = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const brandName = css`
    font-size: 42px;
    font-weight: bolder;
    float: left;
`;

export const brandLogo = css`
    margin-left: 1em;
    margin-top: 0.8em;
    height: 20px;
`;

export const menu = css`
    display: flex;
    justify-content: flex-end;
`;

export const menuIcon = css`
    margin-top: 1em;
    &:hover {
        color: red;
    }
`;
