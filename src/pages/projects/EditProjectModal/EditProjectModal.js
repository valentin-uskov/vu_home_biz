import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modalIsVisibleSelector, modalProjectIdSelector } from '../../../redux/selectors';
import ProjectDataForm from '../ProjectDataForm';
import ModalWindow from '../../../components/ModalWindow';

const EditProjectModal = ({ isVisible, ...otherProps }) => {

    return (
        <ModalWindow isVisible={ isVisible } >
            {isVisible && <ProjectDataForm {...otherProps} />}
        </ModalWindow>
    );
}

export default EditProjectModal;