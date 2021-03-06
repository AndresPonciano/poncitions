/**@jsx jsx */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

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

    @media (max-width: 580px) {
        margin-bottom: 4em;
    }
`;

export const ProgressContainer = styled.div`
    ${progress};
`;
