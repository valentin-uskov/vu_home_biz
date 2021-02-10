import React, { useEffect } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ProjectsList from '../projects-list';
import SearchForm from '../search-form';
import EditForm from '../edit-form';

const App = () => {

  return (
      <div className="App">
        <section>
          <SearchForm  /*handleChange={} handleSearch={}*/ />
          <ProjectsList />
          <button>ADD NEW</button>
          <EditForm />
        </section>
      </div>
  );
}

export default App;
