import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (error = 'Unknown error') => {

  return (
    <h1 style={{ textAlign: 'center', margin: 150 }}>
      <p>{ error }</p>
      <div style={{ width: 300, margin: '0 auto' }}>
        <Link to="/">Go home...</Link>
      </div>
    </h1>
  );
};
export default ErrorPage;