import React from 'react';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ProjectsList = ({ projects, editClickHandler, deleteClickHandler }) => {
    return (
        <ul>
            {
                projects.map(project => {
                    return (
                        <li key={project.id} style={{ display: 'flex', alignItems: 'center' }}>
                            <h3>{project.name}</h3>
                            <span>{project.budget} {project.currency.sign} </span>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<EditIcon />}
                                onClick={() => editClickHandler(project)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={() => deleteClickHandler(project.id)}
                            >
                                Delete
                            </Button>
                        </li>
                    );

                })
            }
        </ul>
    );
}

export default ProjectsList;
