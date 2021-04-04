import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { CircularProgress } from '@material-ui/core';

import EditProjectModal from '../EditProjectModal';
import ProjectsList from '../ProjectsList';
import SearchForm from '../SearchForm';
import { loadProjects, loadCurrencies, updateProject, deleteProject } from '../../../redux/actions';

import {
  projectsListSelector,
  projectsLoadedSelector
} from '../../../redux/selectors';

const Projects = ({ projects, projectsLoaded, onLoadProjects, onLoadCurrencies, onEditProject, onDeleteProject }) => {

  useEffect(() => {
    onLoadProjects();
    onLoadCurrencies();
  }, [onLoadProjects, onLoadCurrencies])

  const [editingProject, setEditingProject] = useState(null);

  const onSubmitHandler = (values) => {
    onEditProject(values);
    setEditingProject(null);
  }

  return (
    <>
      <EditProjectModal
        isVisible={!!editingProject}
        project={editingProject}
        onSubmit={ onSubmitHandler }
      />
      <SearchForm  /*handleChange={} handleSearch={}*/ />
      {
        !projectsLoaded
          ? <CircularProgress />
          : <ProjectsList
            projects={projects}
            projectsLoaded={projectsLoaded}
            editClickHandler={project => setEditingProject(project)}
            deleteClickHandler={onDeleteProject}
          />
      }
    </>

  );
}

const mapStateToProps = createStructuredSelector({
  projectsLoaded: projectsLoadedSelector,
  projects: projectsListSelector,
});

const mapDispatchToProps = dispatch => {
  return {
    onLoadProjects: () => {
      dispatch(loadProjects());
    },
    onLoadCurrencies: () => {
      dispatch(loadCurrencies());
    },
    onEditProject: (values) => {
      dispatch(updateProject({ ...values }));
    },
    onDeleteProject: (id) => {
      dispatch(deleteProject(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);