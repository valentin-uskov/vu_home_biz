import React from 'react';
import { connect } from 'react-redux';
import ProjectsList from '../projects-list';
import SearchForm from '../search-form';
import Modal from '../modal';

import { showAddingModal } from '../../redux/actions'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const App = ({showAddingModal}) => {

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
      dispatch(showAddingModal());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
