import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modalIsVisibleSelector, modalProjectIdSelector } from '../../../redux/selectors';
import ProjectDataForm from '../ProjectDataForm';
import ModalWindow from '../../../components/ModalWindow';

const EditProjectModal = ({ isVisible, project, onSubmit }) => {

    // if (!projectId) return null; */

    return (
        <ModalWindow isVisible={ isVisible } >
            { project && <ProjectDataForm project={ project } onSubmit={ onSubmit } /> }
        </ModalWindow>
    );
}

export default EditProjectModal;