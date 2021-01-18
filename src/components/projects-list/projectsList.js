import React from 'react';
import withHocs from './projectsListHoc';

const ProjectsList = ({data}) => {

    return (<h2>{console.log(data)}TEST</h2>);
}

export default withHocs(ProjectsList);