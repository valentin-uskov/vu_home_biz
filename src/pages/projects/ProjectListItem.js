import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { projectSelector } from '../../redux/selectors';
import { showEditProjectModal } from '../../redux/actions'

import DeleteButton from './DeleteButton';

const ProjectListItem = ({ project, editClickHandler }) => {

    const { id, name, budget, currency } = project;

    return (
        <div  style={{display: 'flex', alignItems: 'center'} }>
            <h3>{name}</h3>
            <span>{budget} {currency.sign} </span>
            <DeleteButton id={id} />
            <button onClick={ () => editClickHandler(project) }>EDIT</button>
        </div>
    );
}

export default ProjectListItem;