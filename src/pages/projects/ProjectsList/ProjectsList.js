import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ProjectListItem = ({ project, editClickHandler, deleteClickHandler }) =>
    <li style={{ display: 'flex', alignItems: 'center' }}>
        <h3>{project.name}</h3>
        <span>{project.budget} {project.currency.sign}</span>
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
    </li>;

const ProjectsList = ({ projects, ...props }) =>
    <ul>
        {projects
                .map(project =>
                    <ProjectListItem key={`project_#${project.id}`} project={project} {...props} />)}
    </ul>;

export default ProjectsList;
