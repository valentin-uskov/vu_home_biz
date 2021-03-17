import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProjectsList from './projects-list';
import SearchForm from '../../components/search-form'

const Projects = () => {

//   useEffect(() => {
//     onLoadApp();
//   }, [onLoadApp])

  return (
        <>
            <SearchForm  /*handleChange={} handleSearch={}*/ />
            <ProjectsList />
        </>

  );
}

export default Projects;
