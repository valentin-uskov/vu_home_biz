import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import DeleteButton from '../delete-button';
// import EditButton from '../edit-button'
import { loadProjects } from '../../redux/actions';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import {
    projectsListSelector,
    projectsLoadingSelector,
    projectsLoadedSelector
} from '../../redux/selectors';

const ProjectsList = ({ projects, projectsLoading, projectsLoaded, onloadApp }) => {

    useEffect(() => {
        onloadApp();
    }, [onloadApp])

    if (!projectsLoaded) return <CircularProgress />;

    return (
        <div>
            <ul>
                {
                    projects.map((project) => {
                        return <li key={project.id} style={{display: 'flex', alignItems: 'center'}}>
                                    <h3>{project.name} </h3>
                                    <span>{project.budget} {project.currency.sign} </span>
                                    <DeleteButton projectId={project.id} />
                                    <button>EDIT</button>
                                </li>;
                    })
                }
            </ul>
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
      onloadApp: () => {
        dispatch(loadProjects());
      }
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
