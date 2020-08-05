/**@jsx jsx */
import { jsx, css } from '@emotion/core';

export const projectsContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: grey;
    overflow-y: auto;
    margin-bottom: 2em;
`;

export const project = css`
    width: 75%;
    margin-top: 2em;
    // background-color: lightblue;
`;

export const projectImage = css`
    height: auto;
    width: 100%;
`;
