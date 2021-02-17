import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modalTypeSelector } from '../../redux/selectors';
import ProjectForm from '../projectForm';

const Modal = ({ modalType }) => {

    return (
        <div style={{
                display: modalType ? 'flex' : 'none',
                position: 'fixed',
                zIndex: '9',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgba(0,0,0,0.7)'  ,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
            <ProjectForm />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    modalType: modalTypeSelector,
});

export default connect(mapStateToProps)(Modal);