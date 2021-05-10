import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Roboto', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
