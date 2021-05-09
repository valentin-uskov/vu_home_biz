import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import EditProjectModal from '../EditProjectModal';
import ProjectsList from '../ProjectsList';
import SearchForm from '../SearchForm';

import { loadProjects, loadCurrencies, addProject, updateProject, deleteProject } from '../../../redux/actions';

import {
  projectsListSelector,
  projectsLoadedSelector
} from '../../../redux/selectors';

const Projects = ({ projects,
                    projectsLoaded,
                    onLoadProjects,
                    onLoadCurrencies,
                    onAddProject,
                    onEditProject,
                    onDeleteProject,
                    onSearchProject }) => {

  useEffect(() => {
    onLoadProjects();
    onLoadCurrencies();
  }, [onLoadProjects, onLoadCurrencies])

  const [editingProject, setEditingProject] = useState(null);
  const [editingModalVisible, setEditingModalVisible] = useState(false);

  const editProject = project => {
    setEditingProject(project);
    setEditingModalVisible(true);
  }

  const onSubmitHandler = (values) => {
    values.id ? onEditProject(values) : onAddProject(values);
    setEditingProject(null);
  }

  const onCancelHandler = () => {
    setEditingModalVisible(false);
    setEditingProject(null);
  }

  const onSearchHandler = (searchQuery) => {
    onSearchProject(searchQuery);
  }

  return (
    <>
      <EditProjectModal
        isVisible={editingModalVisible}
        project={editingProject}
        onSubmit={onSubmitHandler}
        onCancel={onCancelHandler}
      />
      <SearchForm onSearch={onSearchHandler} />
      {
        !projectsLoaded
          ? <CircularProgress />
          : <ProjectsList
            projects={projects}
            projectsLoaded={projectsLoaded}
            editClickHandler={project => editProject(project)}
            deleteClickHandler={onDeleteProject}
          />
      }
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setEditingModalVisible(true)}
      >Add new project</Button>
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
    onAddProject: (values) => {
      dispatch(addProject({ ...values }));
    },
    onDeleteProject: (id) => {
      dispatch(deleteProject(id))
    },
    onSearchProject: (query) => {
      dispatch(loadProjects(query))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);