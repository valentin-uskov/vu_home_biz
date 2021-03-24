import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ErrorPage from '../pages/error-page';
import Projects from '../pages/projects';

import { Route, Switch, Redirect } from 'react-router-dom';
import ModalWindow from './ModalWindow';

import { showProjectFormModal, loadCurrencies } from '../redux/actions'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const App = ({ showAddingModal, onLoadApp }) => {

    useEffect(() => {
        onLoadApp();
    }, [onLoadApp])

    return (
        <div className="App">
            <section>
            <button onClick={ () => { showAddingModal() } }> ADD NEW </button>
            <ModalWindow />
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

const mapDispatchToProps = dispatch => {
    return {
        showAddingModal: () => {
        dispatch(showProjectFormModal());
        },
        onLoadApp: () => {
        dispatch(loadCurrencies());
        }
    };
};

export default connect(null, mapDispatchToProps)(App);
