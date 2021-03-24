import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modalVisibilitySelector, modalProjectIdSelector } from '../redux/selectors';
import ProjectDataForm from '../pages/projects/ProjectDataForm';

const ModalWindow = ({ isVisible, children }) => {

    return (
        <div style={{
                display: isVisible ? 'flex' : 'none',
                position: 'fixed',
                zIndex: '9',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0,0,0,0.7)',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            {/* { projectId && <ProjectForm id={ projectId } /> } */}
            {/* children */}
        </div>
    );
}

export default ModalWindow;