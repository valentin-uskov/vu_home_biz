import React, { useEffect } from 'react';
import ErrorPage from '../pages/error-page';
import Projects from '../pages/projects';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';

const theme = createMuiTheme({
    palette: {
        default: {
            main: '#4caf50',
        },

        primary: {
            main: '#4caf50',
        },

        secondary: {
            main: '#4caf50',
        },

    }
});

const App = () => {

    return (
        <MuiThemeProvider theme={theme} >
            <div className="App">
                <section>
                <button onClick={ () => console.log('Adding project handler') }> ADD NEW </button>
                <Switch>
                    <Redirect exact from="/" to="/projects" />
                    <Route path="/projects" component={ Projects } />
                    <Route path="/error" component={ ErrorPage } />
                    <Route path="/" component={ () => '404 - not found' } />
                </Switch>
                </section>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
