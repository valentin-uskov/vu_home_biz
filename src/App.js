import React from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql'
})

function App() {
  return (
    <ApolloProvider client="client">
      <div className="App">
        <header className="App-header">
        </header>
        <section>MAIN SECTION</section>
      </div>
    </ApolloProvider>
  );
}

export default App;
