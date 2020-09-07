import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    MainBody,
    brandLogo,
    backIcon,
    canvasStyle,
} from '../styles/TemplateStyle';

import {
    projectsContent,
    project,
    projectImage,
    imageContainer,
} from '../styles/ProjectsStyles';

import { brand, brandName } from '../styles/frontStyles';
import useStars from '../modules/hooks/useStars';

const Projects = () => {
    const bannerRef = useRef(null);
    const starRef = useRef(null);
    let history = useHistory();

    useStars();

    return (
        <React.Fragment>
            <MainBody id="banner" ref={bannerRef} contentHeight="135%">
                {/* <div id="banner" css={infoBody} ref={bannerRef}> */}
                <div className="star" css={canvasStyle} ref={starRef}></div>
                <div css={backIcon} onClick={() => history.goBack()}>
                    <FontAwesomeIcon
                        className="fa-lg"
                        icon={faArrowLeft}
                    ></FontAwesomeIcon>
                </div>
                <div css={brand}>
                    <h1 css={brandName}>projects</h1>
                    <img
                        css={brandLogo}
                        src={require('../images/darkmoonlogo.png')}
                        alt="moon brand"
                    />
                </div>
                <div css={projectsContent}>
                    <div css={project}>
                        <h2>Personal Website</h2>
                        <p>
                            This website was made as a visual project while also
                            displaying some of my skills as a software engineer.
                            Here you can find any information relevant to my
                            interests and front end development skills as well
                            as some side hobbies. It was built using React,
                            Redux, CSS emotion, Flex/Grid, and some GSAP
                            Javascript.
                        </p>
                        <div css={imageContainer}>
                            {/* <div css={picDecoration}></div> */}
                            <img
                                css={projectImage}
                                src={require('../images/poncitions_ss.png')}
                                alt="poncitions screenshot"
                            />
                        </div>
                    </div>
                    <div css={project}>
                        <h2>Job Groups</h2>
                        <p>
                            A full stack application using the MERN stack. The
                            intention of the app is to allow people to
                            communalize their job searches by creating groups
                            and share job postings within them.
                        </p>
                        <img
                            css={projectImage}
                            src={require('../images/jobgroups_ss.png')}
                            alt="job groups screenshot"
                        />
                    </div>
                    <div css={project}>
                        <h2>Mini Youtube Clone</h2>
                        <p>
                            Practice React app made to learn React and Redux and
                            Bulma for the UI. App allows for users to login
                            using Google Auth, search videos using the YouTube
                            API, and save them to their account. Login info and
                            saved videos are persisted to Firebase.
                        </p>
                        <img
                            css={projectImage}
                            src={require('../images/miniyoutube_ss.png')}
                            alt="youtube clone screenshot"
                        />
                    </div>
                </div>
                {/* </div> */}
            </MainBody>
        </React.Fragment>
    );
};

export default Projects;
