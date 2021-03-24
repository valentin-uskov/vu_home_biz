import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { projectSelector } from '../../redux/selectors';

import { showProjectFormModal } from '../../redux/actions'

// import EditButton from '../edit-button'
import DeleteButton from './DeleteButton';

const ProjectItem = ({ project, showEditingModal }) => {

    const { id, name, budget, currency } = project;

    return (
        <div  style={{display: 'flex', alignItems: 'center'} }>
            <h3>{name}</h3>
            <span>{budget} {currency.sign} </span>
            <DeleteButton id={id} />
            <button onClick={ () => showEditingModal(id) }>EDIT</button>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    project: projectSelector,
});

const mapDispatchToProps = dispatch => {
    return {
      showEditingModal: (projectId) => {
        dispatch(showProjectFormModal(projectId));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);