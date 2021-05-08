import React from 'react';
import ErrorPage from '../pages/error-page';
import Projects from '../pages/projects';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

const App = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Switch>
                    <Redirect exact from="/" to="/projects" />
                    <Route path="/projects" component={Projects} />
                    <Route path="/error" component={ErrorPage} />
                    <Route path="/" component={() => '404 - not found'} />
                </Switch>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
