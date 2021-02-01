import React, { useEffect } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ProjectsList from './components/projects-list';
import fetch from 'isomorphic-fetch';

function App() {

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
    .then(res => console.log(res.data));

  }, [])

  return (
      <div className="App">
        <section>
          {/* <ProjectsList /> */}
        </section>
      </div>
  );
}

export default App;
