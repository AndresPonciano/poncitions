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
import { brand, brandName } from '../styles/frontStyles';
import EmailForm from './EmailForm';
import useStars from '../modules/hooks/useStars';
// import { useSelector } from 'react-redux';

const Contact = () => {
    const bannerRef = useRef(null);
    const starRef = useRef(null);
    let history = useHistory();
    // const formState = useSelector((state) => state.form.emailForm);

    // console.log(formState);

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
                    <h1 css={brandName}>contact</h1>
                    <img
                        css={brandLogo}
                        src={require('../images/darkmoonlogo.png')}
                        alt="moon brand"
                    />
                </div>
                <div css={infoContent}>
                    <EmailForm />
                </div>
                {/* </div> */}
            </MainBody>
        </React.Fragment>
    );
};

export default Contact;
