import React from 'react';
import withHocs from './projectsListHoc';
import EditForm from '../edit-form';
import DeleteButton from '../delete-button';

const ProjectsList = ({data}) => {

    return (
        <div>
            <ul>
                {
                    data.projects?.map((project, i) => {
                        return <li key={project.id} style={{display: 'flex', alignItems: 'center'}}>
                            <h3>{project.name} </h3>
                            <span>{project.budget} {project.currency.sign} </span>
                            <DeleteButton projectId={project.id} />
                        </li>;
                    })
                }
            </ul>
            <EditForm />
        </div>
    );
}

export default withHocs(ProjectsList);