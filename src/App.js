import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import store from './redux/store';
import Router from './pages/Router';
import { ThemeProvider } from 'styled-components';

const muiTheme = createMuiTheme();

const appTheme = {
    colors: {

    },
    media: {

    }
}

const App = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <MuiThemeProvider theme={muiTheme}>
                <Provider store={ store }>
                    <Router />
                </Provider>
            </MuiThemeProvider>
        </ThemeProvider>
    );
}

export default App;
