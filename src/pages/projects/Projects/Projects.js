import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import EditProjectModal from '../EditProjectModal';
import ProjectsList from '../ProjectsList';
import SearchForm from '../SearchForm';
import { loadProjects, loadCurrencies, addProject, updateProject, deleteProject } from '../actions';
import { projectsListSelector, projectsLoadedSelector } from '../../../redux/selectors';
import Heading from '../../../components/Heading';

const StyledProjects = styled.div`
  max-width: 960px;
  padding: 2em;
  margin: 0 auto;
`;

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
    setEditingModalVisible(false);
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
    <StyledProjects>
      <EditProjectModal
        isVisible={editingModalVisible}
        project={editingProject}
        onSubmit={onSubmitHandler}
        onCancel={onCancelHandler}
      />
      <Heading>Projects</Heading>
      <SearchForm onSearch={onSearchHandler} />

      <ProjectsList
            projects={projects}
            projectsLoaded={projectsLoaded}
            editClickHandler={project => editProject(project)}
            deleteClickHandler={onDeleteProject}
      />

      { !projectsLoaded && <Box m={4}><CircularProgress /></Box> }

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setEditingModalVisible(true)}
      >Add new project</Button>
    </StyledProjects>

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