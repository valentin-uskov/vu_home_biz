import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../history';
import ErrorPage from './error-page';
import Projects from './projects';

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Redirect exact from="/" to="/projects" />
                <Route path="/projects" component={Projects} />
                <Route path="/error" component={ErrorPage} />
                <Route path="/" component={() => (ErrorPage('#404 - page not found...'))} />
            </Switch>
        </ConnectedRouter>
    )
}
export default Router;