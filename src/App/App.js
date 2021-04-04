import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ErrorPage from '../pages/error-page';
import Projects from '../pages/projects';

import { Route, Switch, Redirect } from 'react-router-dom';

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const App = () => {

    return (
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

    );
}

export default App;
