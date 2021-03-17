import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import { Route, Switch, Redirect } from 'react-router-dom';
import ProjectsList from '../../pages/projects/projects-list';
import SearchForm from '../search-form';
import Modal from '../modal';

import { showProjectFormModal, loadCurrencies } from '../../redux/actions'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const App = ({ showAddingModal, onLoadApp }) => {

  useEffect(() => {
    onLoadApp();
  }, [onLoadApp])

  return (
      <div className="App">
        <section>
          <button onClick={ () => { showAddingModal() } }>!!! ADD NEW !!!</button>
          <Modal />
          <SearchForm  /*handleChange={} handleSearch={}*/ />
          <ProjectsList />
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
