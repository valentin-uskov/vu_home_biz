import React from 'react';
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