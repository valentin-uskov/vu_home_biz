import React from 'react';
import ErrorPage from './pages/error-page';
import Projects from './pages/projects';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './redux/store';
import history from './history';

const theme = createMuiTheme();

const App = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={ store }>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Redirect exact from="/" to="/projects" />
                        <Route path="/projects" component={Projects} />
                        <Route path="/error" component={ErrorPage} />
                        <Route path="/" component={() => '404 - not found'} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>
    );
}

export default App;
