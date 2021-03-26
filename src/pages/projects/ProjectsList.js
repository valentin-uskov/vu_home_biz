import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import ProjectItem from './ProjectListItem'


const ProjectsList = ({ projects, editClickHandler }) => {
    return (
        <div>
            {
                projects.map(project => {
                    return <ProjectItem key={project.id} project={project} editClickHandler={editClickHandler} />
                })
            }
        </div>
    );
}

export default ProjectsList;
