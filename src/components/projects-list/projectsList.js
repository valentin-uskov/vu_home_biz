import React from 'react';
import withHocs from './projectsListHoc';
import EditForm from '../edit-form';

const ProjectsList = ({data}) => {
    return (
        <div>
            <ul>
                {
                    data.projects?.map((project, i) => {
                        return <li key={i}>{project.name}</li>;
                    })
                }
            </ul>
            <EditForm />
        </div>
    );
}

export default withHocs(ProjectsList);