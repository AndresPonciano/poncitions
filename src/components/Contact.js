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
import { brand, brandName } from '../styles/frontStyles';
import EmailForm from './EmailForm';
// import { useSelector } from 'react-redux';

const Contact = () => {
    let history = useHistory();
    // const formState = useSelector((state) => state.form.emailForm);

    // console.log(formState);

    return (
        <React.Fragment>
            <MainBody contentHeight="60%">
                {/* <div css={infoBody}> */}
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
