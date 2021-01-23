import React, { useState } from 'react';
import withHocs from './projectsListHoc';
import EditForm from '../edit-form';
import DeleteButton from '../delete-button';
// import EditButton from '../edit-button';

const ProjectsList = ({data}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <ul>
                {
                    data.projects?.map((project, i) => {
                        return <li key={project.id} style={{display: 'flex', alignItems: 'center'}}>
                            <h3>{project.name} </h3>
                            <span>{project.budget} {project.currency.sign} </span>
                            <DeleteButton projectId={project.id} />
                        </li>;
                    })
                }
            </ul>
            <button onClick={()=> { setIsModalOpen(true) }}>ADD NEW</button>
            <EditForm isModalOpen={ isModalOpen } handleCloseModal={ handleCloseModal } />
        </div>
    );
}

export default withHocs(ProjectsList);