import React, { useState, useEffect } from 'react';
// import withHocs from './projectsListHoc';
import EditForm from '../edit-form';
import DeleteButton from '../delete-button';
import SearchForm from '../search-form';
// import EditButton from '../edit-button';

const ProjectsList = ({ data }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectData, setProjectData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setProjectData(data);
    }, [data])

    const handleCloseModal = () => {
        setProjectData([]);
        setIsModalOpen(false);
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = (e) => {
        if( (e.charCode === 13) || (e.target.tagName === 'BUTTON') ) {
            console.log(searchValue) /* Searching MUST BE, SERVERSIDE */
        }
    };

    return (
        <div>
            <SearchForm handleChange={handleChange} handleSearch={handleSearch} />
            <ul>
                {
                    data.length ? data.map((project, i) => {
                        return <li key={project.id} style={{display: 'flex', alignItems: 'center'}}>
                            <h3>{project.name} </h3>
                            <span>{project.budget} {project.currency.sign} </span>
                            <DeleteButton projectId={project.id} />
                            <button onClick={ () => {
                                setProjectData(project);
                                setIsModalOpen(true);
                            }}>EDIT</button>
                        </li>;
                    }) : null
                }
            </ul>
            <button onClick={()=> { setIsModalOpen(true) }}>ADD NEW</button>
            <EditForm isModalOpen={ isModalOpen } projectData={ projectData } handleCloseModal={ handleCloseModal } />
        </div>
    );
}

export default ProjectsList;