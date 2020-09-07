import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    infoContent,
    brandLogo,
    backIcon,
    MainBody,
    canvasStyle,
} from '../styles/TemplateStyle';
import {
    bars,
    progressLabel,
    progressBar,
    ProgressContainer,
} from '../styles/SkillsStyles';
import { brand, brandName } from '../styles/frontStyles';
import useStars from '../modules/hooks/useStars';

const Skills = () => {
    const bannerRef = useRef(null);
    const starRef = useRef(null);
    let history = useHistory();

    useStars();

    return (
        <React.Fragment>
            <MainBody id="banner" ref={bannerRef} contentHeight="110%">
                {/* <div css={infoBody}> */}
                <div className="star" css={canvasStyle} ref={starRef}></div>
                <div css={backIcon} onClick={() => history.goBack()}>
                    <FontAwesomeIcon
                        className="fa-lg"
                        icon={faArrowLeft}
                    ></FontAwesomeIcon>
                </div>
                <div css={brand}>
                    <h1 css={brandName}>skills</h1>
                    <img
                        css={brandLogo}
                        src={require('../images/darkmoonlogo.png')}
                        alt="moon brand"
                    />
                </div>
                <div css={infoContent}>
                    <div css={bars}>
                        <label css={progressLabel}>React</label>
                        <div css={progressBar}>
                            <ProgressContainer width="60%">
                                60%
                            </ProgressContainer>
                        </div>
                        <label css={progressLabel}>Javascript</label>
                        <div css={progressBar}>
                            <ProgressContainer width="40%">
                                40%
                            </ProgressContainer>
                        </div>
                        <label css={progressLabel}>HTML</label>
                        <div css={progressBar}>
                            <ProgressContainer width="80%">
                                80%
                            </ProgressContainer>
                        </div>
                        <label css={progressLabel}>
                            CSS (+ Bulma, Tailwind)
                        </label>
                        <div css={progressBar}>
                            <ProgressContainer width="70%">
                                70%
                            </ProgressContainer>
                        </div>
                        <label css={progressLabel}>NoSQL</label>
                        <div css={progressBar}>
                            <ProgressContainer width="15%">
                                15%
                            </ProgressContainer>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </MainBody>
        </React.Fragment>
    );
};

export default Skills;
