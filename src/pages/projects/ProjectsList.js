import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import ProjectItem from './ProjectItem'
import { loadProjects } from '../../redux/actions';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import {
    projectsListSelector,
    projectsLoadingSelector,
    projectsLoadedSelector
} from '../../redux/selectors';

const ProjectsList = ({ projects, projectsLoading, projectsLoaded, onLoadProjects }) => {

    useEffect(() => {
        onLoadProjects();
    }, [onLoadProjects])

    if (!projectsLoaded) return <CircularProgress />;

    return (
        <div>
            {
                projects.map(({ id }) => {
                    return <ProjectItem key={id} id={id} />
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    projectsLoading: projectsLoadingSelector,
    projectsLoaded: projectsLoadedSelector,
    projects: projectsListSelector,
});

const mapDispatchToProps = dispatch => {
    return {
        onLoadProjects: () => {
            dispatch(loadProjects());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
