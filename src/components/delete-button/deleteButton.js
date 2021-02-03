import React from 'react';

const DeleteButton = () => {

    const deleteProjectHandler = () => {
        console.log('project deleting must be here');
        // deleteProject({ id: projectId });
    };

    return (
        <button onClick={deleteProjectHandler}>X</button>
    );
}

export default DeleteButton;