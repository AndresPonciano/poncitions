import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Template from './Template';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/template" component={Template}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
