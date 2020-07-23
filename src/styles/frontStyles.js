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
    grid-template-columns: 1fr 15fr 6fr;
    grid-template-rows: 100vh;
`;

export const brands = css`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-bottom: 0.5em;
`;

export const icon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1em 1em 1.5em;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #080718;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 1.5em 0 0;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #080718;
    }
`;
