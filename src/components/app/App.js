import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ProjectsList from '../projects-list';

import { loadProjects } from '../../redux/actions';

const App = ({ projects, /*loadProjects*/ }) => {

  // useEffect(() => {
  //   loadProjects();
  // }, [projects])


  return (
      <div className="App">
        <section>
          <ProjectsList data={ projects } />
        </section>
      </div>
  );
}

const mapStateToProps = (state) => {
  const { projects } = state
  return { projects: projects }
}

export default connect(mapStateToProps, loadProjects )(App);
