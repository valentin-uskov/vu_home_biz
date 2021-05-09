import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../history';
import ErrorPage from '../pages/error-page';
import Projects from '../pages/projects';

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Redirect exact from="/" to="/projects" />
                <Route path="/projects" component={Projects} />
                <Route path="/error" component={ErrorPage} />
                <Route path="/" component={() => '404 - not found'} />
            </Switch>
        </ConnectedRouter>
    )
}
export default Router;