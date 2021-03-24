import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import EditProjectModal from './EditProjectModal';
import ProjectsList from './ProjectsList';
import SearchForm from '../../components/SearchForm';

const Projects = () => {

//   useEffect(() => {
//     onLoadApp();
//   }, [onLoadApp])

  return (
        <>
            <EditProjectModal />
            <SearchForm  /*handleChange={} handleSearch={}*/ />
            <ProjectsList />
        </>

  );
}

export default Projects;
