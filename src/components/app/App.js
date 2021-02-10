import React from 'react';
import ProjectsList from '../projects-list';
import SearchForm from '../search-form';
import EditForm from '../edit-form';

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const App = () => {

  return (
      <div className="App">
        <section>
          <button>ADD NEW</button>
          <EditForm />
          <SearchForm  /*handleChange={} handleSearch={}*/ />
          <ProjectsList />
        </section>
      </div>
  );
}

export default App;
