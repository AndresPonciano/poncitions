import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.js';
import './styles/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.querySelector('#root')
);
