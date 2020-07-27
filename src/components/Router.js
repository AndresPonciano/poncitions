import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Template from './Template';
import Skills from './Skills';
import Projects from './Projects';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/template" component={Template}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/skills" component={Skills}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
