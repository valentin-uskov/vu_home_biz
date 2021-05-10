import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../../components/Heading';

const ErrorPageWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  padding: 2em;
  box-sizing: border-box;

  & > h1 {
    text-align: center;
  }

  & > a {
    font-size: 1.5em;
    margin: 1em auto;
  }
`;

const ErrorPage = (error = 'Unknown error') => {
  return (
    <ErrorPageWrapper>
      <Heading>{ error }</Heading>
      <Link to="/">Go home...</Link>
    </ErrorPageWrapper>
  );
};
export default ErrorPage;