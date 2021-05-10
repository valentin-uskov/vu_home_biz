import React from 'react';
import styled from 'styled-components';

const StyledModalWindow = styled.div`
    display: ${props => props.isVisible ? 'flex' : 'none' };
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ModalWindow = ({ isVisible, children }) => {

    return (
        <StyledModalWindow isVisible={isVisible}>
            { children }
        </StyledModalWindow>
    );
}

export default ModalWindow;