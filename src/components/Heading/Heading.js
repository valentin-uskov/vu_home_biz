import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  width: 100%;
  font-size: 2em;
  font-weight: 600;
  margin: 0 0 1em 0;
`;

const Heading = ({children}) => {
  return (
    <StyledHeading>{children}</StyledHeading>
  );
};
export default Heading;