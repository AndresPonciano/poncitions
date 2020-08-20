import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    infoBody,
    infoContent,
    brandLogo,
    backIcon,
    MainBody,
} from '../styles/TemplateStyle';

import { descriptionContainer, myPicture } from '../styles/AboutStyles';

import { brand } from '../styles/frontStyles';

const About = () => {
    let history = useHistory();

    return (
        <React.Fragment>
            <MainBody contentHeight="70%">
                {/* <div css={infoBody}> */}
                <div css={backIcon} onClick={() => history.goBack()}>
                    <FontAwesomeIcon
                        className="fa-lg"
                        icon={faArrowLeft}
                    ></FontAwesomeIcon>
                </div>
                <div css={brand}>
                    <img
                        css={myPicture}
                        src={require('../images/myface.png')}
                        alt="myself"
                    />
                    {/* <h1 css={brandName}>about</h1> */}
                    <img
                        css={brandLogo}
                        src={require('../images/darkmoonlogo.png')}
                        alt="moon brand"
                    />
                </div>
                <div css={infoContent}>
                    <div css={descriptionContainer}>
                        <p>
                            Hello! My name is Andres Ponciano and I'm an MS in
                            Computer Science student at Florida State
                            University. I was born and raised in Tegucigalpa,
                            Honduras and came to the US to pursue my academic
                            career. My current interests include Front End
                            Development, Machine Learning, and UI/UX design. On
                            my free time, I like to draw anything that catches
                            my eye.
                        </p>
                    </div>
                </div>
                {/* </div> */}
            </MainBody>
        </React.Fragment>
    );
};

export default About;
