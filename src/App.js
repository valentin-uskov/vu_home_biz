import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import store from './redux/store';
import Router from './pages/router';

const theme = createMuiTheme();

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={ store }>
                <Router />
            </Provider>
        </MuiThemeProvider>
    );
}

export default App;
