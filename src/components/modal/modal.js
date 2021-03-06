import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modalTypeSelector, modalProjectIdSelector } from '../../redux/selectors';
import ProjectForm from '../projectForm';

const Modal = ({ modalType, projectId }) => {

    return (
        <div style={{
                display: modalType ? 'flex' : 'none',
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
            { projectId && <ProjectForm id={ projectId } /> }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    modalType: modalTypeSelector,
    projectId: modalProjectIdSelector,
});

export default connect(mapStateToProps)(Modal);