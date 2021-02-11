import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { projectSelector } from '../../redux/selectors';

// import EditButton from '../edit-button'
import DeleteButton from '../delete-button';

const ProjectItem = ({ project }) => {

    return (
        <div  style={{display: 'flex', alignItems: 'center'} }>
            <h3>{project.name}</h3>
            <span>{project.budget} {project.currency.sign} </span>
            <DeleteButton projectId={project.id} />
            <button>EDIT</button>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    project: projectSelector,
});

export default connect(mapStateToProps)(ProjectItem);