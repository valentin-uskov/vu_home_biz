import React from 'react';
import withHocs from './deleteButtonHoc';

const deleteButton = ({projectId, deleteProject }) => {

    const deleteProjectHandler = () => {
        deleteProject({ id: projectId });
    };

    return (
        <button onClick={deleteProjectHandler}>X</button>
    );
}

export default withHocs(deleteButton);