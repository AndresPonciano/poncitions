/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

export const homeBody = css`
    display: grid;
    grid-template-columns: 1fr 14fr 1fr;
    grid-template-rows: 100vh;
`;

export const brands = css`
    background-color: green;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

export const icon = css`
    margin: 0 1em 1em 1.5em;
`;

export const brand = css`
    background-color: red;
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
    background-color: blue;
    display: flex;
    justify-content: flex-end;
`;

export const menuIcon = css`
    margin-top: 1em;
`;
