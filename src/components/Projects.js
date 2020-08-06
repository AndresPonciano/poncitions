import React, { useRef, useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    infoBody,
    infoContent,
    brandLogo,
    backIcon,
    canvasStyle,
} from '../styles/TemplateStyle';

import {
    projectsContent,
    project,
    projectImage,
    picDecoration,
    imageContainer,
} from '../styles/ProjectsStyles';

import { brand, brandName } from '../styles/frontStyles';
import useStars from '../modules/hooks/useStars';

const Projects = () => {
    const bannerRef = useRef(null);
    const starRef = useRef(null);

    // useStars();

    return (
        <div id="banner" css={infoBody} ref={bannerRef}>
            <div className="star" css={canvasStyle} ref={starRef}></div>
            <div css={backIcon}>
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
                        interests and front end development skills as well as
                        some side hobbies. It was built using React, Redux, CSS
                        emotion, Flex/Grid, and some GSAP Javascript.
                    </p>
                    <div css={imageContainer}>
                        <div css={picDecoration}></div>
                        <img
                            css={projectImage}
                            src={require('../images/poncitions_ss.png')}
                        />
                    </div>
                </div>
                <div css={project}>
                    <h2>Job Groups</h2>
                    <p>
                        A full stack application using the MERN stack. The
                        intention of the app is to allow people to communalize
                        their job searches by creating groups and share job
                        postings within them.
                    </p>
                    <img
                        css={projectImage}
                        src={require('../images/jobgroups_ss.png')}
                    />
                </div>
                <div css={project}>
                    <h2>Mini Youtube Clone</h2>
                    <p>
                        Practice React app made to learn React and Redux and
                        Bulma for the UI. App allows for users to login using
                        Google Auth, search videos using the YouTube API, and
                        save them to their account. Login info and saved videos
                        are persisted to Firebase.
                    </p>
                    <img
                        css={projectImage}
                        src={require('../images/miniyoutube_ss.png')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
