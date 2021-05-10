import React from 'react';
import ProjectDataForm from '../ProjectDataForm';
import ModalWindow from '../../../components/ModalWindow';

const ProjectModal = ({ isVisible, ...otherProps }) => {

    return (
        <ModalWindow isVisible={ isVisible } >
            {isVisible && <ProjectDataForm {...otherProps} />}
        </ModalWindow>
    );
}

export default ProjectModal;