import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ProjectsList from '../projects-list';

import fetch from 'isomorphic-fetch';

function App({projects, loadProjects }) {

  useEffect(() => {
    fetch('http://localhost:3005/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        {
          projects(name: "") {
            id
            name
            budget
            currency {
                name
                sign
            }
          }
        }`
      }),
    })
    .then(res => res.json())
    .then(res => {
      loadProjects(res.data);
    });

  }, []) /* FIXME ITS temporary here */


  return (
      <div className="App">
        <section>
          <ProjectsList data={ projects } />
        </section>
      </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loadProjects: (data) => dispatch({ type: 'LOAD_PROJECTS', payload: { projects: data.projects } }) /* FIXME CallAPI! */
  }
}


const mapStateToProps = (state) => {
  const { projects } = state
  return { projects: projects }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
