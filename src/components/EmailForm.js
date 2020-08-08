import React from 'react';
import { Field, reduxForm } from 'redux-form';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {
    formContainer,
    formInput,
    formMessage,
    sendButton,
} from '../styles/ContactStyles';

const EmailForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} css={formContainer}>
            <Field
                css={formInput}
                name="name"
                component="input"
                type="text"
                placeholder="name"
            />
            <Field
                css={formInput}
                name="email"
                component="input"
                type="email"
                placeholder="email"
            />
            <Field css={formMessage} name="message" component="textarea" />
            <button type="submit" css={sendButton}>
                send
            </button>
        </form>
    );
};

export default reduxForm({
    form: 'emailForm',
})(EmailForm);
