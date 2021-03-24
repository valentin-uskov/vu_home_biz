import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { modalIsVisibleSelector, modalProjectIdSelector } from '../../redux/selectors';
import ProjectDataForm from './ProjectDataForm';
import ModalWindow from '../../components/ModalWindow';
import { updateProject } from '../../redux/actions';

const EditProjectModal = ({ isVisible, projectId, onSubmit }) => {

    return (
        <ModalWindow isVisible={ isVisible } >
            {/* FIXME ? - Pass all data instead ID -> */}
            <ProjectDataForm id={ projectId } onSubmit={ onSubmit } />
        </ModalWindow>
    );
}

const mapStateToProps = createStructuredSelector({
    isVisible: modalIsVisibleSelector,
    projectId: modalProjectIdSelector, /* FIXME ? - it's OK? */
});

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => { /* FIXME ? - it's OK? */
            dispatch(updateProject);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectModal);