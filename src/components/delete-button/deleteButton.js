import React from 'react';
import withHocs from './deleteButtonHoc';

const deleteButton = ({projectId, deleteProject }) => {

    const deleteProjectHandler = () => {
        deleteProject({ id: projectId });
        console.log(projectId, deleteProject)
    };

    return (
        <button onClick={deleteProjectHandler}>X</button>
    );
}

export default withHocs(deleteButton);