import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const StyledProjectListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5em;

    &:nth-child(even) {
        background: rgba(0, 0, 0, 0.05);
    }

    & > button {
        margin-left: 0.5em;
    }

    & > * {
        flex-shrink: 0;
    }

    & > *:nth-child(1) {
        width: 100%;
        flex-shrink: 1;
    }

    & > *:nth-child(2) {
        margin: 0 2em;
        font-weight: 500;
    }


    @media ${props => props.theme.media.mobile } {
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 0 1em 0;

        & > *:nth-child(1) {
            width: calc(100% - 10em);
        }

        & > *:nth-child(2) {
            margin: 0 0 0 1em;
        }

        & > *:nth-last-child(2),
        & > *:last-child {
            width: calc(50% - 1em);
            margin: 0.5em 0 0 0;
        }

    }
`;

const ProjectListItem = ({ project, editClickHandler, deleteClickHandler }) =>
    <StyledProjectListItem>
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
    </StyledProjectListItem>;


const StyledProjectsList = styled.ul`
    padding: 0;
    margin: 2em 0;
`;

const ProjectsList = ({ projects, ...props }) =>
    <StyledProjectsList>
        {projects
                .map(project =>
                    <ProjectListItem key={`project_#${project.id}`} project={project} {...props} />)}
    </StyledProjectsList>;

export default ProjectsList;
