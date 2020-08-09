import React from 'react';
import { Field, reduxForm } from 'redux-form';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
    formContainer,
    formInput,
    formMessage,
    sendButton,
} from '../styles/ContactStyles';

const renderInput = ({ input, placeholder, type }) => {
    console.log('pp', placeholder, type);
    return (
        <input
            {...input}
            css={formInput}
            type={type}
            placeholder={placeholder}
        />
    );
};

const renderMessage = ({ input }) => {
    return <textarea {...input} css={formMessage} />;
};

const EmailForm = (props) => {
    const onSubmit = (formValues) => {
        console.log('submit', formValues);
    };

    // const renderInput = ({ input, placeholder, type }) => {
    //     console.log('pp', placeholder, type);
    //     return (
    //         <input
    //             {...input}
    //             css={formInput}
    //             type={type}
    //             placeholder={placeholder}
    //         />
    //     );
    // };

    // const renderMessage = ({ input }) => {
    //     return <textarea {...input} css={formMessage} />;
    // };

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
