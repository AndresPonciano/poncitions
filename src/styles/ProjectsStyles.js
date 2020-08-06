/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled/macro';

export const projectsContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: grey;
    overflow-y: auto;
    margin-bottom: 2em;
`;

export const project = css`
    width: 70%;
    margin-top: 2em;
    // background-color: lightblue;
`;

export const projectImage = css`
    opacity: 0.5;
    height: auto;
    width: 100%;

    &:hover {
        opacity: 1;
    }
`;

export const picDecoration = css`
    height: 5px;
    width: 15px;
    transform: rotate(-45deg);
    background-color: #7d97bd;
`;

// export const imageContainer = styled.div`
//     // &:hover ${projectImage} {
//         // opacity: 1;
//     // }
// `;

export const imageContainer = css``;
