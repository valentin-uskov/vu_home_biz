import React, { useEffect } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ProjectsList from '../projects-list';

const App = () => {

  return (
      <div className="App">
        <section>
          <ProjectsList />
        </section>
      </div>
  );
}

export default App;
