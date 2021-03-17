import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ error = 'Unknown error' }) => {

  const errorText = error?.replace(/\$(\d+)/gi, (_, t) => m(t));

  return (
    <h1 style={{ textAlign: 'center', margin: 150 }}>
      <p>{errorText}</p>
      <div style={{ width: 300, margin: '0 auto' }}>
        <Link to="/">Go home...</Link>
      </div>
    </h1>
  );
};
export default ErrorPage;