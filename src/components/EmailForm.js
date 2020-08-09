import React from 'react';
import { Field, reduxForm } from 'redux-form';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    formContainer,
    formInput,
    formMessage,
    sendButton,
    errors,
    noError,
} from '../styles/ContactStyles';
import { send } from 'emailjs-com';

const renderError = ({ error, touched }) => {
    if (touched && error) {
        return (
            <div>
                <p css={errors}>{error}</p>
            </div>
        );
    } else {
        return <div css={noError}></div>;
    }
};

const renderInput = ({ input, placeholder, type, meta }) => {
    console.log(meta);
    return (
        <React.Fragment>
            <input
                {...input}
                css={formInput}
                type={type}
                placeholder={placeholder}
            />
            {/* <div>{meta.error}</div> */}
            {renderError(meta)}
        </React.Fragment>
    );
};

const renderMessage = ({ input, meta }) => {
    return (
        <React.Fragment>
            <textarea {...input} css={formMessage} />
            {renderError(meta)}
        </React.Fragment>
    );
};

const EmailForm = (props) => {
    const onSubmit = (formValues) => {
        console.log('submit', formValues);
        const template_id = 'template_id';
        let templateParameters = {
            from_name: formValues.email,
            to_name: 'andres.ponciano123@gmail.com',
            subject: formValues.name,
            message: formValues.message,
        };

        send(
            'gmail',
            'template_zVfX0dn0',
            formValues,
            'user_s6RQHD3V2gVSWfotjTSVU'
        ).then(
            function (response) {
                console.log('succes', response.status, response.text);
            },
            function (error) {
                console.log('failed', error);
            }
        );
    };

    return (
        <React.Fragment>
            <form onSubmit={props.handleSubmit(onSubmit)} css={formContainer}>
                <Field
                    name="name"
                    component={renderInput}
                    placeholder="name"
                    type="text"
                />
                <Field
                    name="email"
                    component={renderInput}
                    placeholder="email"
                    type="email"
                />
                <Field name="message" component={renderMessage} />
                {/* <Field css={formMessage} name="message" component="textarea" /> */}
                <button type="submit" css={sendButton}>
                    send
                </button>
            </form>
        </React.Fragment>
    );
};

const validate = (formValues) => {
    const errors = {};
    // console.log(formValues);

    if (!formValues.name) {
        errors.name = 'Please enter your name or subject';
    }

    if (!formValues.email) {
        errors.email = 'Please enter your email';
    }

    if (!formValues.message) {
        errors.message = 'Please enter a message';
    }

    return errors;
};

export default reduxForm({
    form: 'emailForm',
    validate,
})(EmailForm);
