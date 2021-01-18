import React from 'react';
import withHocs from './projectsListHoc';

const ProjectsList = ({data}) => {
    return (
        <ul>
            {
                data.projects?.map((project, i) => {
                    return <li key={i}>{project.name}</li>;
                })
            }
            {/* </li key={}>
                <h2>{console.log(data)}TEST</h2>
            </li> */}
        </ul>
    );
}

export default withHocs(ProjectsList);